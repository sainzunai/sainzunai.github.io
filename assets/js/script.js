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

// videos first, then photos, as { type, src, thumb, caption } (captions in the current language)
const mediaOf = function (id) {
  const { item } = entries[id];

  const videos = (item.videos || []).map(video => video.youtube
    ? {
      type: "youtube",
      src: video.youtube,
      thumb: `https://i.ytimg.com/vi/${encodeURIComponent(video.youtube)}/mqdefault.jpg`,
      caption: tr(video.caption)
    }
    : {
      type: "video",
      src: mediaPath(video.src, id),
      thumb: video.poster ? thumbPath(mediaPath(video.poster, id)) : "",
      caption: tr(video.caption)
    });

  const photos = (item.photos || []).map(photo => {
    const src = mediaPath(typeof photo === "string" ? photo : photo.src, id);
    return { type: "image", src, thumb: thumbPath(src), caption: typeof photo === "string" ? "" : tr(photo.caption) };
  });

  return videos.concat(photos);
}

// the cover is the first photo, or a video frame when there are no photos
const coverOf = function (media) {
  return media.find(m => m.type === "image") || media.find(m => m.thumb);
}

const iconOf = function (id) { return entries[id].item.icon || entries[id].section.icon; }

const placeholderHTML = function (id) {
  const text = PORTFOLIO.showPhotoPlaceholders ? `<span>${escapeHTML(ui("photosSoon"))}</span>` : "";
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
    media.some(m => m.type !== "image") ? `<span class="badge"><ion-icon name="play"></ion-icon>${escapeHTML(ui("video"))}</span>` : "",
    photoCount > 1 ? `<span class="badge"><ion-icon name="camera-outline"></ion-icon>${photoCount}</span>` : ""
  ].join("");

  return `<img src="${cover.thumb}" alt="${escapeHTML(cover.caption || tr(entries[id].item.title))}" loading="lazy">
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
  const meta = [trDate(item.date), categories.map(term).join(", ")].filter(Boolean).join(" · ");

  // the filter values are the spanish category names, whatever the language shown
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

        <h3 class="project-title">${escapeHTML(tr(item.title))}</h3>

        <p class="project-category">${escapeHTML(meta)}</p>

        <p class="project-text">${escapeHTML(tr(item.summary))}</p>

      </a>
    </li>`;
}

const projects = PORTFOLIO.projects || [];

// "2024 — Actualidad" -> [2024, 9999]; "2018" -> [2018, 2018]
const yearsOf = function (date) {
  const text = date && typeof date === "object" ? date.es : String(date || "");
  const years = (text.match(/\d{4}/g) || []).map(Number);
  const end = /actualidad/i.test(text) ? 9999 : (years[years.length - 1] || 0);
  return [years[0] || end, end];
};

// Proyectos tab: most recent first (by end year, then start year); "last: true" goes to the end;
// featured keep the data.js order
const projectsByDate = projects
  .map((item, i) => ({ item, i, years: yearsOf(item.date) }))
  .sort((a, b) => (!!a.item.last - !!b.item.last) || (b.years[1] - a.years[1]) || (b.years[0] - a.years[0]) || (a.i - b.i))
  .map(entry => entry.item);

// filter buttons are built from the categories used in data.js
const categories = [...new Set(projects.flatMap(item => item.categories || []))];

const filterList = document.querySelector("[data-filter-list]");
const selectList = document.querySelector("[data-select-list]");

const renderProjects = function () {
  document.querySelector("[data-project-list]").innerHTML =
    projectsByDate.map(item => projectCardHTML(item, "proyectos")).join("");

  document.querySelector("[data-featured-list]").innerHTML =
    projects.filter(item => item.featured).map(item => projectCardHTML(item, "sobre-mi")).join("");

  const filterOptions = [{ label: ui("all"), value: "all" }]
    .concat(categories.map(category => ({ label: term(category), value: category.toLowerCase() })));

  filterList.innerHTML = filterOptions.map(option => `
    <li class="filter-item">
      <button data-filter-btn data-filter-value="${escapeHTML(option.value)}">${escapeHTML(option.label)}</button>
    </li>`).join("");

  selectList.innerHTML = filterOptions.map(option => `
    <li class="select-item">
      <button data-select-item data-filter-value="${escapeHTML(option.value)}">${escapeHTML(option.label)}</button>
    </li>`).join("");
}



// timelines (experience and education)
const timelineItemHTML = function (item, page) {
  const media = mediaOf(item.id);
  const title = tr(item.title);
  let gallery = "";

  if (media.length) {
    gallery = media.slice(0, 4).map((m, i) => `
      <a href="#${page}/${item.id}/${i + 1}" class="timeline-photo">${thumbHTML(m, m.caption || title)}</a>`).join("");

    if (media.length > 4) {
      gallery += `<a href="#${page}/${item.id}/5" class="timeline-photo more">+${media.length - 4}</a>`;
    }
  } else if (item.photos && PORTFOLIO.showPhotoPlaceholders) {
    gallery = `<span class="timeline-photo empty" title="${escapeHTML(ui("photosSoon"))}"><ion-icon name="camera-outline"></ion-icon></span>`.repeat(3);
  }

  return `
    <li class="timeline-item">

      <h4 class="h4 timeline-item-title">${escapeHTML(title)}</h4>

      ${item.org ? `<p class="timeline-org">${escapeHTML(tr(item.org))}</p>` : ""}

      <span>${escapeHTML(trDate(item.date))}</span>

      ${item.text ? `<p class="timeline-text">${escapeHTML(tr(item.text))}</p>` : ""}

      ${gallery ? `<div class="timeline-photos">${gallery}</div>` : ""}

    </li>`;
}

const renderResume = function () {
  for (const list of document.querySelectorAll("[data-timeline]")) {
    const key = list.dataset.timeline;
    list.innerHTML = (PORTFOLIO[key] || []).map(item => timelineItemHTML(item, sections[key].page)).join("");
  }

  // publications
  document.querySelector("[data-publication-list]").innerHTML = (PORTFOLIO.publications || []).map(item => {
    const title = item.url
      ? `<a href="${escapeHTML(item.url)}" target="_blank" rel="noopener">${escapeHTML(tr(item.title))}<ion-icon name="open-outline"></ion-icon></a>`
      : escapeHTML(tr(item.title));

    return `
      <li class="timeline-item">

        <h4 class="h4 timeline-item-title">${title}</h4>

        ${item.venue ? `<p class="timeline-org">${escapeHTML(tr(item.venue))}</p>` : ""}

        <span>${escapeHTML(trDate(item.date))}</span>

      </li>`;
  }).join("");
}



// milestones
const renderMilestones = function () {
  document.querySelector("[data-milestone-list]").innerHTML = (PORTFOLIO.milestones || []).map(item => `
    <li class="blog-post-item">
      <a href="#hitos/${item.id}">

        <figure class="blog-banner-box">
          ${coverHTML(item.id)}
        </figure>

        ${photoStripHTML(item.id)}

        <div class="blog-content">

          <div class="blog-meta">
            <p class="blog-category">${escapeHTML(term(item.tag))}</p>

            <span class="dot"></span>

            <time>${escapeHTML(trDate(item.date))}</time>
          </div>

          <h3 class="h3 blog-item-title">${escapeHTML(tr(item.title))}</h3>

          <p class="blog-text">${escapeHTML(tr(item.text))}</p>

        </div>

      </a>
    </li>`).join("");
}



// project filters (buttons on large screens, a select on small ones)
const select = document.querySelector("[data-select]");
const selectValue = document.querySelector("[data-selecct-value]");

let currentFilter = "all";
let filterChosen = false;

const applyFilter = function () {
  for (const item of document.querySelectorAll("[data-project-list] [data-filter-item]")) {
    const itemCategories = item.dataset.category.split("|");
    item.classList.toggle("active", currentFilter === "all" || itemCategories.includes(currentFilter));
  }

  for (const btn of filterList.querySelectorAll("[data-filter-btn]")) {
    btn.classList.toggle("active", btn.dataset.filterValue === currentFilter);
  }

  // until a category is chosen, the select keeps its "choose a category" text
  const chosen = [...filterList.querySelectorAll("[data-filter-btn]")].find(btn => btn.dataset.filterValue === currentFilter);
  if (filterChosen && chosen) selectValue.innerText = chosen.innerText;
}

const chooseFilter = function (value) {
  currentFilter = value;
  filterChosen = true;
  applyFilter();
}

select.addEventListener("click", function () { elementToggleFunc(this); });

selectList.addEventListener("click", function (event) {
  const btn = event.target.closest("[data-select-item]");
  if (!btn) return;

  elementToggleFunc(select);
  chooseFilter(btn.dataset.filterValue);
});

filterList.addEventListener("click", function (event) {
  const btn = event.target.closest("[data-filter-btn]");
  if (btn) chooseFilter(btn.dataset.filterValue);
});



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
let galleryId = "";

const showMedia = function (index) {
  galleryIndex = (index + galleryMedia.length) % galleryMedia.length;
  const media = galleryMedia[galleryIndex];
  const label = escapeHTML(media.caption || galleryTitle.textContent);

  // replacing the content also stops a video that was playing
  if (media.type === "youtube") {
    galleryFrame.innerHTML = `
      <iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(media.src)}?rel=0&hl=${lang}" title="${label}"
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

  galleryId = id;
  galleryMedia = mediaOf(id);

  const hasMedia = galleryMedia.length > 0;
  const hasMany = galleryMedia.length > 1;

  galleryMeta.textContent = [tr(item.org) || term(item.tag) || (item.categories || []).map(term).join(", "), trDate(item.date)]
    .filter(Boolean).join(" · ");
  galleryTitle.textContent = tr(item.title);
  galleryText.textContent = tr(item.text) || tr(item.summary);
  galleryLinks.innerHTML = (item.links || []).map(link => `
    <a href="${escapeHTML(link.url)}" class="gallery-link" target="_blank" rel="noopener">
      <ion-icon name="${escapeHTML(link.icon || "open-outline")}"></ion-icon>
      <span>${escapeHTML(tr(link.label))}</span>
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
      <button data-gallery-thumb="${i}" aria-label="${escapeHTML(ui(m.type === "image" ? "photo" : "video"))} ${i + 1}">${thumbHTML(m)}</button>
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
  galleryId = "";
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



// language: fixed texts of the html, then everything that comes from data.js
const langButtons = document.querySelectorAll("[data-lang-btn]");

const setLanguage = function (newLang) {
  lang = LANGUAGES.includes(newLang) ? newLang : "es";

  applyStaticTexts();
  renderProjects();
  applyFilter();
  renderResume();
  renderMilestones();

  for (const btn of langButtons) {
    btn.setAttribute("aria-pressed", String(btn.dataset.langBtn === lang));
  }

  // an open gallery is shown again in the new language, at the same photo
  if (galleryId) openGallery(galleryId, galleryIndex);
}

for (const btn of langButtons) {
  btn.addEventListener("click", function () {
    if (this.dataset.langBtn === lang) return;

    setLanguage(this.dataset.langBtn);
    saveLanguage();
  });
}

setLanguage(detectLanguage());



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
