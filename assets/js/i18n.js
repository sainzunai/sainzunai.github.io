'use strict';

/**
 * IDIOMAS (español / inglés)
 *
 * - Los textos fijos de index.html están en español en el propio HTML y llevan data-i18n="clave"
 *   (o data-i18n-attr="atributo:clave" para atributos como aria-label). Su versión en inglés está en
 *   I18N_HTML_EN, más abajo. Si cambias uno de esos textos en index.html, cambia también aquí su traducción.
 * - Los textos de data.js llevan sus dos versiones: { es: "...", en: "..." }.
 * - Las fechas, categorías y etiquetas de data.js se traducen con I18N_TERMS_EN e I18N_DATES_EN.
 * - El idioma se elige con el selector ES | EN y el navegador lo recuerda. La primera vez se usa el idioma del
 *   navegador (español si es es/eu/ca/gl; si no, inglés). Un enlace con ?lang=en o ?lang=es fuerza el idioma.
 */

const LANGUAGES = ["es", "en"];



// textos fijos de index.html en inglés (en español están en el propio html)
const I18N_HTML_EN = {
  "meta.title": "Unai Sainz Lugarezaresti · R&D Engineer and PhD Candidate",
  "meta.description": "Portfolio and CV of Unai Sainz Lugarezaresti, electronics and computer engineer and PhD candidate in Neuroscience. R&D in neurotechnology, electronics, data and AI. Bilbao.",
  "lang.label": "Language",

  "sidebar.title": "R&D Engineer · PhD Candidate",
  "sidebar.more": "Show contacts",
  "contact.linkedinLink": "View profile",
  "contact.languages": "Languages",
  "contact.languagesValue": "Spanish · English C1 · Basque B2",
  "contact.location": "Location",
  "contact.locationValue": "Bilbao area",

  "nav.about": "About",
  "nav.resume": "Resume",
  "nav.projects": "Projects",
  "nav.milestones": "Milestones",
  "nav.contact": "Contact",

  "about.title": "About me",
  "about.p1": "I am an Industrial Electronics and Automation Engineer and a Computer Engineer (double degree) from the University of Deusto, with a Master's in Computing and Intelligent Systems. I work across hardware and software: from designing a PCB or the 3D-printed enclosure of a sensor to training machine learning models and building data analysis pipelines.",
  "about.p2": "I am currently an R&D engineer in the Computational Neuroimaging Group at IIS Biobizkaia, where I apply neuromorphic technology and eye-tracking to the detection and rehabilitation of Alzheimer's and Parkinson's, and I am doing my PhD in Neuroscience at the University of the Basque Country (EHU). I am also an adjunct lecturer at the University of Deusto, where I teach Analog Electronics and Electronic Technology and supervise bachelor's theses.",
  "about.p3": "Outside the lab I like making things with my hands: I 3D print, look after a vegetable garden in my village and enjoy photography and video editing, all self-taught.",

  "services.title": "What I do",
  "services.neuro.title": "Neurotechnology and research",
  "services.neuro.text": "Event cameras (DVS), eye-tracking and biometric sensors applied to neurodegenerative diseases.",
  "services.electronics.title": "Electronics and embedded systems",
  "services.electronics.text": "PCB design, sensor integration with embedded systems and prototyping with CAD and 3D printing.",
  "services.data.title": "Data and artificial intelligence",
  "services.data.text": "Analysis pipelines in Python, machine learning and neural networks, and distributed edge computing.",
  "services.teaching.title": "University teaching",
  "services.teaching.text": "Analog Electronics and Electronic Technology at the University of Deusto, and supervision of bachelor's theses.",

  "featured.title": "Featured projects",
  "featured.more": "View all",

  "resume.title": "Resume",
  "resume.experience": "Experience",
  "resume.education": "Education",
  "resume.publications": "Publications",

  "skills.title": "Skills",
  "skills.electronics": "Electronics and hardware",
  "skills.pcb": "PCB design",
  "skills.embedded": "Embedded systems",
  "skills.sensors": "Sensor integration",
  "skills.nir": "NIR spectroscopy",
  "skills.printing": "3D printing",
  "skills.software": "Software, data and AI",
  "skills.pipelines": "Data pipelines",
  "skills.neural": "Neural networks",
  "skills.edge": "Edge computing",
  "skills.web": "Web development",
  "skills.neuro": "Neurotechnology",
  "skills.dvs": "DVS cameras",
  "skills.biometric": "Biometric sensors",
  "skills.cyber": "Industrial cybersecurity",
  "skills.vulnerabilities": "Vulnerability analysis",
  "skills.fortinet": "Fortinet NS1 and NS2",
  "skills.languages": "Languages",
  "skills.spanish": "Spanish · native",
  "skills.english": "English · C1",
  "skills.basque": "Basque · B2",

  "projects.title": "Projects",
  "projects.select": "Choose a category",

  "milestones.title": "Milestones",

  "contact.title": "Contact",
  "contact.intro": "You can email me or get in touch on LinkedIn.",

  "gallery.close": "Close",
  "gallery.prev": "Previous photo",
  "gallery.next": "Next photo"
};



// textos que genera script.js
const I18N_UI = {
  es: { all: "Todos", photosSoon: "Fotos próximamente", video: "Vídeo", photo: "Foto" },
  en: { all: "All", photosSoon: "Photos coming soon", video: "Video", photo: "Photo" }
};

// categorías de proyectos y etiquetas de hitos de data.js
const I18N_TERMS_EN = {
  "Electrónica": "Electronics",
  "Equipos": "Teams",
  "Investigación": "Research",
  "Universidad": "University",
  "Divulgación": "Outreach",
  "Programa": "Program",
  "Congreso": "Conference",
  "Organización": "Organization",
  "Premio": "Award",
  "Competición": "Competition"
};

// meses y "Actualidad" en las fechas de data.js (los que coinciden en los dos idiomas no hace falta ponerlos)
const I18N_DATES_EN = { Ene: "Jan", Abr: "Apr", Ago: "Aug", Dic: "Dec", Actualidad: "Present" };



let lang = "es";

// a text from data.js: a plain string or { es, en }
const tr = function (value) {
  if (value && typeof value === "object") return value[lang] ?? value.es ?? "";
  return value ?? "";
}

const ui = function (key) { return I18N_UI[lang][key] ?? I18N_UI.es[key] ?? key; }

const term = function (word) { return lang === "en" ? I18N_TERMS_EN[word] || word : word; }

const trDate = function (date) {
  const text = tr(date);
  return lang === "en" ? text.replace(/\b(Ene|Abr|Ago|Dic|Actualidad)\b/g, word => I18N_DATES_EN[word]) : text;
}

// ?lang= in the url, then the saved choice, then the browser language
const detectLanguage = function () {
  const param = new URLSearchParams(location.search).get("lang");
  if (LANGUAGES.includes(param)) return param;

  try {
    const saved = localStorage.getItem("lang");
    if (LANGUAGES.includes(saved)) return saved;
  } catch (error) { /* storage blocked: fall back to the browser language */ }

  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language || ""];
  return browserLanguages.some(code => /^(es|eu|ca|gl)\b/i.test(code)) ? "es" : "en";
}

const saveLanguage = function () {
  try { localStorage.setItem("lang", lang); } catch (error) { /* not saved, still works for this visit */ }
}

// the spanish texts are read from the html the first time, so they can be restored later
const originalTexts = new Map();
const originalAttrs = new Map();

const applyStaticTexts = function () {
  document.documentElement.lang = lang;

  for (const el of document.querySelectorAll("[data-i18n]")) {
    if (!originalTexts.has(el)) originalTexts.set(el, el.innerHTML);

    const english = I18N_HTML_EN[el.dataset.i18n];

    if (lang === "en" && english !== undefined) el.textContent = english;
    else el.innerHTML = originalTexts.get(el);
  }

  // data-i18n-attr="aria-label:gallery.close; content:meta.description"
  for (const el of document.querySelectorAll("[data-i18n-attr]")) {
    for (const pair of el.dataset.i18nAttr.split(";")) {
      const [attr, key] = pair.split(":").map(part => part.trim());
      const store = `${attr}:${key}`;

      if (!originalAttrs.has(el)) originalAttrs.set(el, {});
      const originals = originalAttrs.get(el);
      if (!(store in originals)) originals[store] = el.getAttribute(attr);

      const english = I18N_HTML_EN[key];
      el.setAttribute(attr, lang === "en" && english !== undefined ? english : originals[store]);
    }
  }
}
