'use strict';

/**
 * CONTENIDO DEL PORTFOLIO
 *
 * Todo lo que aparece en Trayectoria, Proyectos e Hitos sale de este fichero.
 * Para añadir algo nuevo, copia un bloque { ... } de la lista que toque y cámbialo.
 *
 * FOTOS
 * - Cada elemento tiene un "id" único (sin espacios ni tildes) y su carpeta de fotos:
 *     assets/images/experiencia/<id>/
 *     assets/images/formacion/<id>/
 *     assets/images/proyectos/<id>/
 *     assets/images/hitos/<id>/
 * - En "photos" se listan los ficheros de esa carpeta. La primera foto es la portada.
 *   Se puede poner solo el nombre o añadir un pie de foto:
 *     photos: ["01.jpg", { src: "02.jpg", caption: "Montaje de la PCB" }]
 * - photos: [] muestra un hueco "Fotos próximamente" mientras showPhotoPlaceholders sea true.
 *   Antes de publicar la versión final puedes ponerlo a false para ocultar los huecos.
 *
 * ICONOS: nombres de https://ionic.io/ionicons (versión 5)
 */

const PORTFOLIO = {

  email: "unailuga@gmail.com",

  showPhotoPlaceholders: true,



  // experiencia laboral (de más reciente a más antigua)
  experience: [
    {
      id: "biobizkaia",
      title: "Ingeniero de Investigación y Desarrollo",
      org: "IIS Biobizkaia · Grupo de Neuroimagen Computacional",
      date: "Dic 2023 — Actualidad",
      text: "Desarrollo de tecnología neuromórfica y sus aplicaciones dentro del proyecto Siburmuin. Trabajo con cámaras DVS (Dynamic Vision Sensor), realidad virtual, eye-trackers, sensores biométricos, pipelines de análisis de datos en Python y PsychoPy para crear tests computarizados que estudian la detección y rehabilitación de pacientes con Alzheimer y Parkinson a través de los movimientos oculares. En este grupo realizo mi tesis doctoral, he colaborado en la organización de congresos y he asistido a congresos internacionales.",
      photos: []
    },
    {
      id: "deusto-profesor",
      title: "Profesor colaborador",
      org: "Universidad de Deusto",
      date: "Ene 2024 — Actualidad",
      text: "Docente titular de Electrónica Analógica (Grado en Ingeniería Biomédica) y Tecnología Electrónica (Robótica, ITI y Electrónica). Director de múltiples Trabajos de Fin de Grado en distintas titulaciones.",
      photos: []
    },
    {
      id: "neuronup",
      title: "Consultor de datos",
      org: "NeuronUP · Logroño",
      date: "Mar 2024 — Dic 2024",
      text: "Consultoría de datos por cuenta propia."
    },
    {
      id: "deusto-donostia",
      title: "Profesor colaborador",
      org: "Universidad de Deusto · Campus de Donostia",
      date: "Feb 2023 — Jun 2023",
      text: "Docente de Arquitectura de Computadores en 4.º curso del doble grado en ADE + Ingeniería Informática."
    },
    {
      id: "deustotech-d4k",
      title: "Asistente de investigación",
      org: "DeustoTech · Deusto for Knowledge (D4K)",
      date: "Dic 2022 — Nov 2023",
      text: "Participación en el proyecto DSTREAMS: diseño y arquitectura de las comunicaciones de los dispositivos edge más relevantes del mercado y creación de modelos de optimización de computación distribuida.",
      photos: []
    },
    {
      id: "evida",
      title: "Asistente de investigación",
      org: "eVIDA Group · DeustoTech",
      date: "Sep 2021 — Jun 2022",
      text: "Proyectos de ingeniería biomédica: diseño e implementación de dispositivos capaces de detectar gluten en muestras de comida, que después fueron mi Trabajo de Fin de Grado. Mediciones de laboratorio para entrenar modelos de machine learning y redes neuronales, diseño de carcasas para sensores en CAD e impresión 3D, desarrollo web y comunicación de sensores con sistemas embebidos.",
      photos: []
    },
    {
      id: "ciberseguridad",
      title: "Programa en ciberseguridad industrial",
      org: "Cátedra Deusto de Industria Digital · Titanium Industrial Security",
      date: "Sep 2018 — Mar 2021",
      text: "Cursos y proyectos para desarrollar conocimientos de ciberseguridad industrial: pentesting, análisis de vulnerabilidades, sockets en C#, Snort, Modbus y Fortinet."
    }
  ],



  // formación (de más reciente a más antigua)
  education: [
    {
      id: "doctorado",
      title: "Doctorado en Neurociencias",
      org: "Universidad del País Vasco (EHU)",
      date: "Sep 2025 — Actualidad",
      text: "Tesis doctoral en curso, desarrollada en el grupo de Neuroimagen Computacional del IIS Biobizkaia."
    },
    {
      id: "master",
      title: "Máster Universitario en Computación y Sistemas Inteligentes",
      org: "Universidad de Deusto",
      date: "2022 — 2023"
    },
    {
      id: "doble-grado",
      title: "Doble Grado en Ingeniería Electrónica Industrial y Automática + Ingeniería Informática",
      org: "Universidad de Deusto · Bilbao",
      date: "2017 — 2022",
      text: "Matrículas de Honor en Introducción a Computadores, Programación III, Microprocesadores e Ingeniería Web. Trabajo de Fin de Grado: «Diseño, implementación y validación de una solución tecnológica sensorizada con espectroscopía de infrarrojo cercano para control de alérgenos» (calificaciones de 9,6 y 9,7)."
    }
  ],



  // publicaciones (url opcional)
  publications: [
    {
      title: "Amygdala Neurodegeneration: A Key Driver of Visual Dysfunction in Parkinson's Disease",
      venue: "Annals of Clinical and Translational Neurology",
      date: "2025",
      url: "https://doi.org/10.1002/acn3.70007"
    },
    {
      title: "Neuromorphic Technology Insights in Spain",
      venue: "IEEE 24th International Conference on Nanotechnology (NANO)",
      date: "2024",
      url: "https://doi.org/10.1109/NANO61778.2024.10669907"
    },
    {
      title: "Design and Validation of an Optimal Mechanical Enclosure for Low-Cost Real-Time Gluten Detection Using NIR Sensor in a Portable Device",
      date: "2023"
    },
    {
      title: "Gluten Analysis Composition Using NIR Spectroscopy and Artificial Intelligence Techniques",
      date: "2022"
    }
  ],



  // proyectos: "categories" crea automáticamente los filtros; "featured" los muestra también en Sobre mí
  projects: [
    {
      id: "moto-team",
      title: "Deusto Moto Team",
      categories: ["Electrónica", "Equipos"],
      date: "2018 — 2022",
      icon: "speedometer-outline",
      featured: true,
      summary: "Moto eléctrica para el Barcelona Smart Moto Challenge. Diseñé la PCB de distribución de energía y señales.",
      text: "Diseño y fabricación de una moto eléctrica entre los departamentos de Mecánica, Diseño, Smart, Empresa y Electrónica para competir en el Barcelona Smart Moto Challenge. Me encargué de crear la PCB de distribución de energía y de señales y fui el contacto entre el equipo y las empresas para buscar patrocinadores y exposiciones. Además, participé en el montaje electrónico y mecánico de la moto junto al resto del equipo.",
      links: [
        { label: "Ver vídeo", url: "https://www.youtube.com/watch?v=DJI5ZQWqFBI", icon: "logo-youtube" }
      ],
      photos: []
    },
    {
      id: "detector-gluten",
      title: "Detector portátil de gluten por espectroscopía NIR",
      categories: ["Electrónica", "Investigación"],
      date: "2021 — 2022",
      icon: "flask-outline",
      featured: true,
      summary: "Dispositivo de bajo coste que detecta gluten en alimentos combinando un sensor de infrarrojo cercano e inteligencia artificial. Mi TFG, premiado como mejor TFG del Aula Inetum–Deusto.",
      text: "Diseño, implementación y validación de una solución tecnológica sensorizada con espectroscopía de infrarrojo cercano para el control de alérgenos, desarrollada en eVIDA Group (DeustoTech). Incluye mediciones de laboratorio para entrenar modelos de machine learning y redes neuronales, una carcasa diseñada en CAD e impresa en 3D y la comunicación del sensor con un sistema embebido. Fue mi Trabajo de Fin de Grado (calificaciones de 9,6 y 9,7), recibió el primer premio al mejor TFG del Aula Tecnológica Inetum–Deusto y dio lugar a dos publicaciones.",
      photos: []
    },
    {
      id: "siburmuin",
      title: "Siburmuin · Tecnología neuromórfica",
      categories: ["Investigación"],
      date: "2024 — Actualidad",
      icon: "eye-outline",
      featured: true,
      summary: "Cámaras de eventos (DVS), eye-tracking y realidad virtual para estudiar la detección y rehabilitación del Alzheimer y el Parkinson.",
      text: "Proyecto del grupo de Neuroimagen Computacional del IIS Biobizkaia para desarrollar la tecnología neuromórfica y sus aplicaciones. Combino cámaras DVS (Dynamic Vision Sensor), realidad virtual, eye-trackers, sensores biométricos y tests computarizados con PsychoPy para estudiar la detección y rehabilitación de pacientes con Alzheimer y Parkinson a través de los movimientos oculares.",
      photos: []
    },
    {
      id: "begibraintool",
      title: "BegiBrainTool",
      categories: ["Software", "Investigación"],
      date: "2025",
      icon: "code-slash-outline",
      summary: "Toolbox open source para evaluar la función visual en la enfermedad de Alzheimer. Presentado como póster en AAIC 2025 (Toronto).",
      text: "BegiBrainTool: An Open-Source Toolbox for Evaluation of Visual Function in Alzheimer's Disease. Presentado como póster en la Alzheimer's Association International Conference (AAIC) 2025, celebrada en Toronto.",
      links: [
        { label: "Ver en ResearchGate", url: "https://www.researchgate.net/publication/399070215_BegiBrainTool_An_Open-Source_Toolbox_for_Evaluation_of_Visual_Function_in_Alzheimer's_Disease", icon: "document-text-outline" }
      ],
      photos: []
    },
    {
      id: "dstreams",
      title: "DSTREAMS · Computación en el edge",
      categories: ["Software", "Investigación"],
      date: "2022 — 2023",
      icon: "git-network-outline",
      summary: "Arquitectura de comunicaciones para dispositivos edge y modelos de optimización de computación distribuida.",
      text: "Proyecto desarrollado en el equipo Deusto for Knowledge (D4K) de DeustoTech, centrado en el diseño y la arquitectura de las comunicaciones de los dispositivos edge más relevantes del mercado y en la creación de modelos de optimización de computación distribuida.",
      photos: []
    },
    {
      id: "drone-team",
      title: "Deusto Drone Team",
      categories: ["Electrónica", "Equipos"],
      date: "2018",
      icon: "airplane-outline",
      summary: "Diseño y cableado del dron inteligente del equipo para el Barcelona Smart Drone Challenge.",
      text: "Diseño y cableado del dron inteligente de DeustoDroneTeam, un equipo multidisciplinar de 6 estudiantes que participó en el Barcelona Smart Drone Challenge.",
      links: [
        { label: "Ver vídeo", url: "https://www.youtube.com/watch?v=vguudwVedEI", icon: "logo-youtube" }
      ],
      photos: []
    },
    {
      id: "maker",
      title: "Impresión 3D, fotografía y vídeo",
      categories: ["Personal"],
      icon: "camera-outline",
      summary: "Aficiones aprendidas de forma autodidacta: impresión 3D, fotografía y edición de vídeo.",
      text: "Me gustan la fotografía, la edición de vídeo y la impresión 3D. Todas estas aficiones las he aprendido de forma autodidacta.",
      links: [
        { label: "Mis fotos en Flickr", url: "https://www.flickr.com/photos/187896384@N06/", icon: "logo-flickr" }
      ],
      photos: []
    }
  ],



  // hitos: congresos, premios, programas... (de más reciente a más antiguo)
  milestones: [
    {
      id: "bila-2026",
      title: "Programa BILA",
      tag: "Programa",
      date: "Oct 2026",
      icon: "rocket-outline",
      text: "Programa de aceleración para investigadores con proyectos transferibles en IA, computación, tecnologías cuánticas y materiales avanzados: cuatro días intensivos con mentoring individual y presentación ante un panel.",
      photos: []
    },
    {
      id: "aaic-2025",
      title: "AAIC 2025 · Toronto",
      tag: "Congreso",
      date: "Jul 2025",
      icon: "mic-outline",
      text: "Presentación del póster «BegiBrainTool: An Open-Source Toolbox for Evaluation of Visual Function in Alzheimer's Disease» en la Alzheimer's Association International Conference.",
      links: [
        { label: "Ver póster", url: "https://www.researchgate.net/publication/399070215_BegiBrainTool_An_Open-Source_Toolbox_for_Evaluation_of_Visual_Function_in_Alzheimer's_Disease", icon: "document-text-outline" }
      ],
      photos: []
    },
    {
      id: "biomdlore-2023",
      title: "BIOMDLORE 2023",
      tag: "Congreso",
      date: "Oct 2023",
      icon: "mic-outline",
      text: "Asistencia a la 14.ª edición de la conferencia internacional BIOMDLORE, celebrada en Białystok (Polonia).",
      photos: []
    },
    {
      id: "premio-aecoc",
      title: "1.er Premio Académico AECOC",
      tag: "Premio",
      date: "Feb 2023",
      icon: "trophy-outline",
      text: "Primer premio de la 10.ª edición del Premio Académico de AECOC (Asociación de Empresas del Gran Consumo) en la categoría de Tecnología Aplicada, a nivel nacional.",
      photos: []
    },
    {
      id: "premio-inetum",
      title: "Premio al mejor TFG · Aula Inetum–Deusto",
      tag: "Premio",
      date: "Ene 2023",
      icon: "trophy-outline",
      text: "Primer premio al mejor Proyecto de Fin de Grado del Aula Tecnológica Inetum–Deusto, por el detector portátil de gluten por espectroscopía NIR.",
      photos: []
    },
    {
      id: "hash-code-2020",
      title: "Google Hash Code 2020",
      tag: "Competición",
      date: "Feb 2020",
      icon: "code-slash-outline",
      text: "Participación en la ronda de clasificación online de la competición de programación por equipos."
    },
    {
      id: "ibm-quantum-2019",
      title: "IBM Quantum Computing Hackathon",
      tag: "Hackathon",
      date: "Dic 2019",
      icon: "planet-outline",
      text: "Participación en el hackathon de computación cuántica de IBM en Bilbao."
    },
    {
      id: "talentia",
      title: "Programa Talentia · Bizkaia Talent",
      tag: "Programa",
      date: "2018 — 2021",
      icon: "people-outline",
      text: "Programa de captación de talento con actividades para desarrollar competencias transversales: trabajo en equipo, comunicación interpersonal y resolución de problemas."
    }
  ]

};
