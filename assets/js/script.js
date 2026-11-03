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

// resolve the photo list of an item to { src, caption }
const photosOf = function (id) {
  const { item, section } = entries[id];

  return (item.photos || []).map(photo => {
    const src = typeof photo === "string" ? photo : photo.src;

    return {
      src: src.includes("/") ? src : `./assets/images/${section.folder}/${id}/${src}`,
      caption: typeof photo === "string" ? "" : photo.caption || ""
    };
  });
}

const iconOf = function (id) { return entries[id].item.icon || entries[id].section.icon; }

const placeholderHTML = function (id) {
  const text = PORTFOLIO.showPhotoPlaceholders ? "<span>Fotos próximamente</span>" : "";
  return `<ion-icon name="${iconOf(id)}"></ion-icon>${text}`;
}

// cover photo (or placeholder) plus a counter when there is more than one photo
const coverHTML = function (id) {
  const photos = photosOf(id);

  if (!photos.length) return `<div class="photo-placeholder">${placeholderHTML(id)}</div>`;

  const alt = escapeHTML(photos[0].caption || entries[id].item.title);
  const count = photos.length > 1
    ? `<span class="photo-count"><ion-icon name="camera-outline"></ion-icon>${photos.length}</span>`
    : "";

  return `<img src="${photos[0].src}" alt="${alt}" loading="lazy">${count}`;
}

// small strip with the next photos, so it is clear at a glance that there are more
const photoStripHTML = function (id) {
  const photos = photosOf(id);
  if (photos.length < 2) return "";

  const thumbs = photos.slice(1, 4).map(photo => `<img src="${photo.src}" alt="" loading="lazy">`).join("");
  const more = photos.length > 4 ? `<span class="more">+${photos.length - 4}</span>` : "";

  return `<div class="photo-strip">${thumbs}${more}</div>`;
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

document.querySelector("[data-project-list]").innerHTML =
  projects.map(item => projectCardHTML(item, "proyectos")).join("");

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
  const photos = photosOf(item.id);
  let gallery = "";

  if (photos.length) {
    gallery = photos.slice(0, 4).map((photo, i) => `
      <a href="#${page}/${item.id}/${i + 1}" class="timeline-photo">
        <img src="${photo.src}" alt="${escapeHTML(photo.caption || item.title)}" loading="lazy">
      </a>`).join("");

    if (photos.length > 4) {
      gallery += `<a href="#${page}/${item.id}/5" class="timeline-photo more">+${photos.length - 4}</a>`;
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
const galleryImg = document.querySelector("[data-gallery-img]");
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

let galleryPhotos = [];
let galleryIndex = 0;

const showPhoto = function (index) {
  galleryIndex = (index + galleryPhotos.length) % galleryPhotos.length;
  const photo = galleryPhotos[galleryIndex];

  galleryImg.src = photo.src;
  galleryImg.alt = photo.caption || galleryTitle.textContent;
  galleryCaption.textContent = photo.caption;
  galleryCaption.hidden = !photo.caption;
  galleryCounter.textContent = `${galleryIndex + 1} / ${galleryPhotos.length}`;

  const thumbs = galleryThumbs.querySelectorAll("button");

  for (let i = 0; i < thumbs.length; i++) {
    thumbs[i].classList.toggle("active", i === galleryIndex);
  }

  thumbs[galleryIndex]?.scrollIntoView({ block: "nearest", inline: "center" });
}

const openGallery = function (id, index) {
  const { item } = entries[id];

  galleryPhotos = photosOf(id);

  const hasPhotos = galleryPhotos.length > 0;
  const hasMany = galleryPhotos.length > 1;

  galleryMeta.textContent = [item.org || item.tag || (item.categories || []).join(", "), item.date]
    .filter(Boolean).join(" · ");
  galleryTitle.textContent = item.title;
  galleryText.textContent = item.text || item.summary || "";
  galleryLinks.innerHTML = (item.links || []).map(link => `
    <a href="${escapeHTML(link.url)}" class="gallery-link" target="_blank" rel="noopener">
      <ion-icon name="${escapeHTML(link.icon || "open-outline")}"></ion-icon>
      <span>${escapeHTML(link.label)}</span>
    </a>`).join("");

  galleryStage.hidden = !hasPhotos && !PORTFOLIO.showPhotoPlaceholders;
  galleryImg.hidden = !hasPhotos;
  galleryPlaceholder.hidden = hasPhotos;
  galleryPlaceholder.innerHTML = placeholderHTML(id);
  galleryPrev.hidden = galleryNext.hidden = galleryCounter.hidden = !hasMany;
  galleryCaption.hidden = true;

  galleryThumbs.hidden = !hasMany;
  galleryThumbs.innerHTML = hasMany ? galleryPhotos.map((photo, i) => `
    <li>
      <button data-gallery-thumb="${i}" aria-label="Foto ${i + 1}">
        <img src="${photo.src}" alt="" loading="lazy">
      </button>
    </li>`).join("") : "";

  galleryContainer.classList.add("active");
  galleryOverlay.classList.add("active");
  document.body.style.overflow = "hidden";

  if (hasPhotos) showPhoto(Math.min(Math.max(index, 0), galleryPhotos.length - 1));

  galleryCloseBtn.focus();
}

const hideGallery = function () {
  galleryContainer.classList.remove("active");
  galleryOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// closing goes back to the page link (#proyectos) without adding a history entry
const closeGallery = function () {
  hideGallery();
  history.replaceState(null, "", `#${currentPage}`);
}

galleryCloseBtn.addEventListener("click", closeGallery);
galleryOverlay.addEventListener("click", closeGallery);
galleryPrev.addEventListener("click", function () { showPhoto(galleryIndex - 1); });
galleryNext.addEventListener("click", function () { showPhoto(galleryIndex + 1); });

galleryThumbs.addEventListener("click", function (event) {
  const thumb = event.target.closest("[data-gallery-thumb]");
  if (thumb) showPhoto(Number(thumb.dataset.galleryThumb));
});

document.addEventListener("keydown", function (event) {
  if (!galleryContainer.classList.contains("active")) return;

  if (event.key === "Escape") closeGallery();
  if (galleryPhotos.length > 1 && event.key === "ArrowLeft") showPhoto(galleryIndex - 1);
  if (galleryPhotos.length > 1 && event.key === "ArrowRight") showPhoto(galleryIndex + 1);
});



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// github pages has no backend: open the visitor's mail app with the message ready
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const data = new FormData(form);
  const subject = `Contacto desde el portfolio · ${data.get("fullname")}`;
  const body = `${data.get("message")}\n\n${data.get("fullname")} · ${data.get("email")}`;

  window.location.href = `mailto:${PORTFOLIO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

let currentPage = "";

// the url hash decides what is shown: #page, #page/item-id or #page/item-id/photo-number
const route = function () {
  const [pageName, id, photo] = decodeURIComponent(location.hash.slice(1)).split("/");
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
    openGallery(id, (parseInt(photo) || 1) - 1);
  } else {
    hideGallery();
  }
}

window.addEventListener("hashchange", route);
route();
