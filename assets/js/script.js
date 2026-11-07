'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// escape text coming from data.js before inserting it as html
const escapeHTML = function (str) {
  return String(str ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// content sections: photo folder, page where they live and fallback icon
const sections = {
  experience: { folder: "experiencia", page: "trayectoria", icon: "briefcase-outline" },
  education: { folder: "formacion", page: "trayectoria", icon: "school-outline" },
  projects: { folder: "proyectos", page: "proyectos", icon: "construct-outline" },
  milestones: { folder: "hitos", page: "hitos", icon: "trophy-outline" }
};

// every item with an id, so a link like #proyectos/moto-team can find it
const entries = {};

for (const key in sections) {
  for (const item of PORTFOLIO[key] || []) {
    entries[item.id] = { item, section: sections[key] };
  }
}

const isExternal = function (src) { return /^(https?:)?\/\//.test(src); }

// bare file names live in the item's folder; paths with "/" are relative to assets/images
const mediaPath = function (src, id) {
  if (isExternal(src)) return src;
  return `./assets/images/${src.includes("/") ? src : `${entries[id].section.folder}/${id}/${src}`}`;
}

// every photo has a smaller copy in a "thumbs" folder next to it
const thumbPath = function (path) {
  return isExternal(path) ? path : path.replace(/([^/]+)$/, "thumbs/$1");
}

// videos first, then photos, as { type, src, thumb, caption }
const mediaOf = function (id) {
  const { item } = entries[id];

  const videos = (item.videos || []).map(video => video.youtube
    ? {
      type: "youtube",
      src: video.youtube,
      thumb: `https://i.ytimg.com/vi/${encodeURIComponent(video.youtube)}/mqdefault.jpg`,
      caption: video.caption || ""
    }
    : {
      type: "video",
      src: mediaPath(video.src, id),
      thumb: video.poster ? thumbPath(mediaPath(video.poster, id)) : "",
      caption: video.caption || ""
    });

  const photos = (item.photos || []).map(photo => {
    const src = mediaPath(typeof photo === "string" ? photo : photo.src, id);
    return { type: "image", src, thumb: thumbPath(src), caption: typeof photo === "string" ? "" : photo.caption || "" };
  });

  return videos.concat(photos);
}

// the cover is the first photo, or a video frame when there are no photos
const coverOf = function (media) {
  return media.find(m => m.type === "image") || media.find(m => m.thumb);
}

const iconOf = function (id) { return entries[id].item.icon || entries[id].section.icon; }

const placeholderHTML = function (id) {
  const text = PORTFOLIO.showPhotoPlaceholders ? "<span>Fotos próximamente</span>" : "";
  return `<ion-icon name="${iconOf(id)}"></ion-icon>${text}`;
}

// small image with a play icon on top when it is a video
const thumbHTML = function (media, alt) {
  const img = media.thumb ? `<img src="${media.thumb}" alt="${escapeHTML(alt || "")}" loading="lazy">` : "";
  const play = media.type === "image" ? "" : `<ion-icon name="play" class="play-icon"></ion-icon>`;
  return img + play;
}

// cover photo (or placeholder) plus badges for videos and the number of photos
const coverHTML = function (id) {
  const media = mediaOf(id);
  const cover = coverOf(media);

  if (!cover) return `<div class="photo-placeholder">${placeholderHTML(id)}</div>`;

  const photoCount = media.filter(m => m.type === "image").length;
  const badges = [
    media.some(m => m.type !== "image") ? `<span class="badge"><ion-icon name="play"></ion-icon>Vídeo</span>` : "",
    photoCount > 1 ? `<span class="badge"><ion-icon name="camera-outline"></ion-icon>${photoCount}</span>` : ""
  ].join("");

  return `<img src="${cover.thumb}" alt="${escapeHTML(cover.caption || entries[id].item.title)}" loading="lazy">
    ${badges ? `<span class="media-badges">${badges}</span>` : ""}`;
}

// small strip with the rest of the media, so it is clear at a glance that there is more
const photoStripHTML = function (id) {
  const media = mediaOf(id);
  const cover = coverOf(media);
  const rest = media.filter(m => m !== cover);

  if (!rest.length) return "";

  const items = rest.slice(0, 3).map(m => `<span class="strip-item">${thumbHTML(m)}</span>`).join("");
  const more = rest.length > 3 ? `<span class="strip-item more">+${rest.length - 3}</span>` : "";

  return `<div class="photo-strip">${items}${more}</div>`;
}



// projects
const projectCardHTML = function (item, page) {
  const categories = item.categories || [];
  const meta = [item.date, categories.join(", ")].filter(Boolean).join(" · ");

  return `
    <li class="project-item  active" data-filter-item data-category="${escapeHTML(categories.join("|").toLowerCase())}">
      <a href="#${page}/${item.id}">

        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          ${coverHTML(item.id)}
        </figure>

        ${photoStripHTML(item.id)}

        <h3 class="project-title">${escapeHTML(item.title)}</h3>

        <p class="project-category">${escapeHTML(meta)}</p>

        <p class="project-text">${escapeHTML(item.summary)}</p>

      </a>
    </li>`;
}

const projects = PORTFOLIO.projects || [];

// "2024 — Actualidad" -> [2024, 9999]; "2018" -> [2018, 2018]
const yearsOf = function (date) {
  const years = (String(date || "").match(/\d{4}/g) || []).map(Number);
  const end = /actualidad/i.test(date) ? 9999 : (years[years.length - 1] || 0);
  return [years[0] || end, end];
};

// Proyectos tab: most recent first (by end year, then start year); "last: true" goes to the end;
// featured keep the data.js order
const projectsByDate = projects
  .map((item, i) => ({ item, i, years: yearsOf(item.date) }))
  .sort((a, b) => (!!a.item.last - !!b.item.last) || (b.years[1] - a.years[1]) || (b.years[0] - a.years[0]) || (a.i - b.i))
  .map(entry => entry.item);

document.querySelector("[data-project-list]").innerHTML =
  projectsByDate.map(item => projectCardHTML(item, "proyectos")).join("");

document.querySelector("[data-featured-list]").innerHTML =
  projects.filter(item => item.featured).map(item => projectCardHTML(item, "sobre-mi")).join("");

// filter buttons are built from the categories used in data.js
const categories = [...new Set(projects.flatMap(item => item.categories || []))];
const filterOptions = [{ label: "Todos", value: "all" }]
  .concat(categories.map(category => ({ label: category, value: category.toLowerCase() })));

document.querySelector("[data-filter-list]").innerHTML = filterOptions.map((option, i) => `
  <li class="filter-item">
    <button ${i === 0 ? 'class="active"' : ""} data-filter-btn data-filter-value="${escapeHTML(option.value)}">${escapeHTML(option.label)}</button>
  </li>`).join("");

document.querySelector("[data-select-list]").innerHTML = filterOptions.map(option => `
  <li class="select-item">
    <button data-select-item data-filter-value="${escapeHTML(option.value)}">${escapeHTML(option.label)}</button>
  </li>`).join("");



// timelines (experience and education)
const timelineItemHTML = function (item, page) {
  const media = mediaOf(item.id);
  let gallery = "";

  if (media.length) {
    gallery = media.slice(0, 4).map((m, i) => `
      <a href="#${page}/${item.id}/${i + 1}" class="timeline-photo">${thumbHTML(m, m.caption || item.title)}</a>`).join("");

    if (media.length > 4) {
      gallery += `<a href="#${page}/${item.id}/5" class="timeline-photo more">+${media.length - 4}</a>`;
    }
  } else if (item.photos && PORTFOLIO.showPhotoPlaceholders) {
    gallery = `<span class="timeline-photo empty" title="Fotos próximamente"><ion-icon name="camera-outline"></ion-icon></span>`.repeat(3);
  }

  return `
    <li class="timeline-item">

      <h4 class="h4 timeline-item-title">${escapeHTML(item.title)}</h4>

      ${item.org ? `<p class="timeline-org">${escapeHTML(item.org)}</p>` : ""}

      <span>${escapeHTML(item.date)}</span>

      ${item.text ? `<p class="timeline-text">${escapeHTML(item.text)}</p>` : ""}

      ${gallery ? `<div class="timeline-photos">${gallery}</div>` : ""}

    </li>`;
}

for (const list of document.querySelectorAll("[data-timeline]")) {
  const key = list.dataset.timeline;
  list.innerHTML = (PORTFOLIO[key] || []).map(item => timelineItemHTML(item, sections[key].page)).join("");
}

// publications
document.querySelector("[data-publication-list]").innerHTML = (PORTFOLIO.publications || []).map(item => {
  const title = item.url
    ? `<a href="${escapeHTML(item.url)}" target="_blank" rel="noopener">${escapeHTML(item.title)}<ion-icon name="open-outline"></ion-icon></a>`
    : escapeHTML(item.title);

  return `
    <li class="timeline-item">

      <h4 class="h4 timeline-item-title">${title}</h4>

      ${item.venue ? `<p class="timeline-org">${escapeHTML(item.venue)}</p>` : ""}

      <span>${escapeHTML(item.date)}</span>

    </li>`;
}).join("");



// milestones
document.querySelector("[data-milestone-list]").innerHTML = (PORTFOLIO.milestones || []).map(item => `
  <li class="blog-post-item">
    <a href="#hitos/${item.id}">

      <figure class="blog-banner-box">
        ${coverHTML(item.id)}
      </figure>

      ${photoStripHTML(item.id)}

      <div class="blog-content">

        <div class="blog-meta">
          <p class="blog-category">${escapeHTML(item.tag)}</p>

          <span class="dot"></span>

          <time>${escapeHTML(item.date)}</time>
        </div>

        <h3 class="h3 blog-item-title">${escapeHTML(item.title)}</h3>

        <p class="blog-text">${escapeHTML(item.text)}</p>

      </div>

    </a>
  </li>`).join("");



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(this.dataset.filterValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-project-list] [data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    const itemCategories = filterItems[i].dataset.category.split("|");

    if (selectedValue === "all" || itemCategories.includes(selectedValue)) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    selectValue.innerText = this.innerText;
    filterFunc(this.dataset.filterValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// gallery modal variables
const galleryContainer = document.querySelector("[data-gallery-container]");
const galleryOverlay = document.querySelector("[data-gallery-overlay]");
const galleryCloseBtn = document.querySelector("[data-gallery-close]");
const galleryStage = document.querySelector("[data-gallery-stage]");
const galleryFrame = document.querySelector("[data-gallery-media]");
const galleryPlaceholder = document.querySelector("[data-gallery-placeholder]");
const galleryPrev = document.querySelector("[data-gallery-prev]");
const galleryNext = document.querySelector("[data-gallery-next]");
const galleryCounter = document.querySelector("[data-gallery-counter]");
const galleryCaption = document.querySelector("[data-gallery-caption]");
const galleryThumbs = document.querySelector("[data-gallery-thumbs]");
const galleryMeta = document.querySelector("[data-gallery-meta]");
const galleryTitle = document.querySelector("[data-gallery-title]");
const galleryText = document.querySelector("[data-gallery-text]");
const galleryLinks = document.querySelector("[data-gallery-links]");

let galleryMedia = [];
let galleryIndex = 0;

const showMedia = function (index) {
  galleryIndex = (index + galleryMedia.length) % galleryMedia.length;
  const media = galleryMedia[galleryIndex];
  const label = escapeHTML(media.caption || galleryTitle.textContent);

  // replacing the content also stops a video that was playing
  if (media.type === "youtube") {
    galleryFrame.innerHTML = `
      <iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(media.src)}?rel=0" title="${label}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  } else if (media.type === "video") {
    galleryFrame.innerHTML = `<video src="${media.src}" controls preload="metadata"></video>`;
  } else {
    galleryFrame.innerHTML = `<img src="${media.src}" alt="${label}">`;
  }

  galleryCaption.textContent = media.caption;
  galleryCaption.hidden = !media.caption;
  galleryCounter.textContent = `${galleryIndex + 1} / ${galleryMedia.length}`;

  const thumbs = galleryThumbs.querySelectorAll("button");

  for (let i = 0; i < thumbs.length; i++) {
    thumbs[i].classList.toggle("active", i === galleryIndex);
  }

  thumbs[galleryIndex]?.scrollIntoView({ block: "nearest", inline: "center" });
}

const openGallery = function (id, index) {
  const { item } = entries[id];

  galleryMedia = mediaOf(id);

  const hasMedia = galleryMedia.length > 0;
  const hasMany = galleryMedia.length > 1;

  galleryMeta.textContent = [item.org || item.tag || (item.categories || []).join(", "), item.date]
    .filter(Boolean).join(" · ");
  galleryTitle.textContent = item.title;
  galleryText.textContent = item.text || item.summary || "";
  galleryLinks.innerHTML = (item.links || []).map(link => `
    <a href="${escapeHTML(link.url)}" class="gallery-link" target="_blank" rel="noopener">
      <ion-icon name="${escapeHTML(link.icon || "open-outline")}"></ion-icon>
      <span>${escapeHTML(link.label)}</span>
    </a>`).join("");

  galleryStage.hidden = !hasMedia && !PORTFOLIO.showPhotoPlaceholders;
  galleryFrame.hidden = !hasMedia;
  galleryFrame.innerHTML = "";
  galleryPlaceholder.hidden = hasMedia;
  galleryPlaceholder.innerHTML = placeholderHTML(id);
  galleryPrev.hidden = galleryNext.hidden = galleryCounter.hidden = !hasMany;
  galleryCaption.hidden = true;

  galleryThumbs.hidden = !hasMany;
  galleryThumbs.innerHTML = hasMany ? galleryMedia.map((m, i) => `
    <li>
      <button data-gallery-thumb="${i}" aria-label="${m.type === "image" ? "Foto" : "Vídeo"} ${i + 1}">${thumbHTML(m)}</button>
    </li>`).join("") : "";

  galleryContainer.classList.add("active");
  galleryOverlay.classList.add("active");
  document.body.style.overflow = "hidden";

  if (hasMedia) showMedia(Math.min(Math.max(index, 0), galleryMedia.length - 1));

  galleryCloseBtn.focus();
}

const hideGallery = function () {
  galleryContainer.classList.remove("active");
  galleryOverlay.classList.remove("active");
  galleryFrame.innerHTML = "";
  document.body.style.overflow = "";
}

// closing goes back to the page link (#proyectos) without adding a history entry
const closeGallery = function () {
  hideGallery();
  history.replaceState(null, "", `#${currentPage}`);
}

galleryCloseBtn.addEventListener("click", closeGallery);
galleryOverlay.addEventListener("click", closeGallery);
galleryPrev.addEventListener("click", function () { showMedia(galleryIndex - 1); });
galleryNext.addEventListener("click", function () { showMedia(galleryIndex + 1); });

galleryThumbs.addEventListener("click", function (event) {
  const thumb = event.target.closest("[data-gallery-thumb]");
  if (thumb) showMedia(Number(thumb.dataset.galleryThumb));
});

document.addEventListener("keydown", function (event) {
  if (!galleryContainer.classList.contains("active")) return;

  if (event.key === "Escape") closeGallery();
  if (galleryMedia.length > 1 && event.key === "ArrowLeft") showMedia(galleryIndex - 1);
  if (galleryMedia.length > 1 && event.key === "ArrowRight") showMedia(galleryIndex + 1);
});



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

let currentPage = "";

// the url hash decides what is shown: #page, #page/item-id or #page/item-id/media-number
const route = function () {
  const [pageName, id, mediaNumber] = decodeURIComponent(location.hash.slice(1)).split("/");
  const page = [...pages].some(p => p.dataset.page === pageName) ? pageName : pages[0].dataset.page;

  if (page !== currentPage) {

    for (let i = 0; i < pages.length; i++) {
      pages[i].classList.toggle("active", pages[i].dataset.page === page);
      navigationLinks[i].classList.toggle("active", navigationLinks[i].getAttribute("href") === `#${page}`);
    }

    if (currentPage) window.scrollTo(0, 0);
    currentPage = page;

  }

  if (id && entries[id]) {
    openGallery(id, (parseInt(mediaNumber) || 1) - 1);
  } else {
    hideGallery();
  }
}

window.addEventListener("hashchange", route);
route();
