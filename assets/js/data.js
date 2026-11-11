'use strict';

/**
 * CONTENIDO DEL PORTFOLIO
 *
 * Todo lo que aparece en Trayectoria, Proyectos e Hitos sale de este fichero.
 * Para añadir algo nuevo, copia un bloque { ... } de la lista que toque y cámbialo.
 *
 * IDIOMAS
 * - Cada texto puede ser una cadena (igual en español y en inglés) o llevar las dos versiones:
 *     title: { es: "Detector portátil de gluten", en: "Portable gluten detector" }
 *   Si falta "en", se muestra el texto en español.
 * - Las fechas ("Dic 2023 — Actualidad"), las categorías de los proyectos y las etiquetas (tag) de los hitos
 *   se escriben en español y se traducen solas con el diccionario de assets/js/i18n.js.
 *
 * FOTOS
 * - Las fotos de la web se generan con tools/optimizar-fotos.ps1 a partir de input_figuras/
 *   (lista de fotos en tools/fotos.csv). Cada foto tiene dos tamaños: el normal y thumbs/.
 * - Cada elemento tiene un "id" único (sin espacios ni tildes) y su carpeta de fotos:
 *     assets/images/experiencia/<id>/
 *     assets/images/formacion/<id>/
 *     assets/images/proyectos/<id>/
 *     assets/images/hitos/<id>/
 * - En "photos" se listan las fotos. La primera es la portada:
 *     photos: ["01.jpg", { src: "02.jpg", caption: { es: "Montaje de la PCB", en: "PCB assembly" } }]
 *   Para reutilizar una foto de otro elemento, pon su ruta dentro de assets/images:
 *     { src: "hitos/aaic-2025/01.jpg", caption: { es: "Póster en AAIC 2025", en: "Poster at AAIC 2025" } }
 * - photos: [] muestra un hueco "Fotos próximamente" mientras showPhotoPlaceholders sea true.
 *
 * VÍDEOS
 * - De YouTube (con el identificador que va tras "watch?v="):
 *     videos: [{ youtube: "DJI5ZQWqFBI", caption: { es: "Vídeo editado por mí", en: "A video I edited" } }]
 * - Un .mp4 guardado en la carpeta del elemento (que pese poco, idealmente < 15 MB):
 *     videos: [{ src: "demo.mp4", poster: "01.jpg", caption: "Demo" }]
 *
 * ICONOS: nombres de https://ionic.io/ionicons (versión 5)
 */

const PORTFOLIO = {

  showPhotoPlaceholders: true,



  // experiencia laboral (de más reciente a más antigua)
  experience: [
    {
      id: "biobizkaia",
      title: { es: "Ingeniero de I+D (Técnico de apoyo a la investigación)", en: "R&D Engineer (Research Support Technician)" },
      org: { es: "IIS Biobizkaia · Grupo de Neuroimagen Computacional", en: "IIS Biobizkaia · Computational Neuroimaging Group" },
      date: "Ene 2024 — Actualidad",
      text: {
        es: "Bajo la dirección de neurólogos e ingenieros, desarrollo software y hardware para ayudar en la detección de enfermedades neurodegenerativas como el Alzheimer y el Parkinson: cámaras de eventos (DVS), eye-trackers, sensores biométricos, electrónica y piezas impresas en 3D, pipelines de análisis de datos en Python y tests computarizados con PsychoPy. De este trabajo nacen los proyectos BEGITRACK, BegiFOV y BegiBrainTool. En este grupo realizo mi tesis doctoral, he colaborado en la organización de congresos y he presentado mi trabajo en congresos internacionales.",
        en: "Under the supervision of neurologists and engineers, I develop software and hardware to help detect neurodegenerative diseases such as Alzheimer's and Parkinson's: event cameras (DVS), eye-trackers, biometric sensors, electronics and 3D-printed parts, Python data analysis pipelines and computerized tests with PsychoPy. This work gave rise to the BEGITRACK, BegiFOV and BegiBrainTool projects. In this group I am doing my PhD, I have helped organize conferences and I have presented my work at international conferences."
      },
      photos: [
        { src: "proyectos/begitrack/01.jpg", caption: { es: "Probando el prototipo de BEGITRACK", en: "Testing the BEGITRACK prototype" } },
        { src: "proyectos/begifov/01.jpg", caption: { es: "Pruebas de BegiFOV junto al equipo OCT", en: "Testing BegiFOV with the OCT device" } },
        { src: "proyectos/begibraintool/01.jpg", caption: { es: "Puesto de evaluación con BegiBrainTool", en: "Assessment setup with BegiBrainTool" } },
        { src: "proyectos/begitrack/02.jpg", caption: { es: "Estructura de BEGITRACK: perfiles de aluminio y piezas impresas en 3D", en: "BEGITRACK structure: aluminum profiles and 3D-printed parts" } },
        { src: "proyectos/begifov/02.jpg", caption: { es: "Electrónica de BegiFOV: ESP32-S3, dos pantallas OLED y encoder", en: "BegiFOV electronics: ESP32-S3, two OLED displays and an encoder" } },
        { src: "proyectos/begitrack/04.jpg", caption: { es: "Diseño CAD del soporte de la cámara de BEGITRACK", en: "CAD design of the BEGITRACK camera mount" } },
        { src: "hitos/aaic-2026/01.jpg", caption: { es: "Póster en AAIC 2026 (Londres)", en: "Poster at AAIC 2026 (London)" } },
        { src: "hitos/ohbm-2026/01.jpg", caption: { es: "Póster en OHBM 2026 (Burdeos)", en: "Poster at OHBM 2026 (Bordeaux)" } },
        { src: "proyectos/begibraintool/03.jpg", caption: { es: "Ponencia sobre BegiBrainTool en el Hospital Universitario de Basurto", en: "Talk on BegiBrainTool at Basurto University Hospital" } },
        { src: "hitos/brainmodes-2024/01.jpg", caption: { es: "BrainModes 2024, conferencia que ayudé a organizar", en: "BrainModes 2024, a conference I helped organize" } },
        { src: "hitos/aaic-2025/01.jpg", caption: { es: "Póster en AAIC 2025 (Toronto)", en: "Poster at AAIC 2025 (Toronto)" } }
      ]
    },
    {
      id: "deusto-profesor",
      title: { es: "Profesor colaborador", en: "Adjunct Lecturer" },
      org: { es: "Universidad de Deusto", en: "University of Deusto" },
      date: "Ene 2024 — Actualidad",
      text: {
        es: "Docente titular de Electrónica Analógica (Grado en Ingeniería Biomédica) y Tecnología Electrónica (grados en Robótica, Ingeniería en Tecnologías Industriales y Electrónica), y del módulo de Biosensórica y Física Médica del máster MDIT. Director de múltiples Trabajos de Fin de Grado en distintas titulaciones. En Electrónica Analógica, el alumnado diseña, simula y monta circuitos que captan y procesan señales biológicas reales, como el pulso cardiaco; lo conté en un artículo de la revista Deusto Ingeniería.",
        en: "Lecturer in charge of Analog Electronics (Biomedical Engineering degree) and Electronic Technology (Robotics, Industrial Technology Engineering and Electronics degrees), and of the Biosensors and Medical Physics module of the MDIT master's program. Supervisor of many bachelor's theses across several degrees. In Analog Electronics, students design, simulate and build circuits that capture and process real biological signals, such as the heart pulse; I wrote about it in an article in Deusto Ingeniería magazine."
      },
      photos: [
        { src: "01.jpg", caption: { es: "Visita de estudiantes del máster MDIT al IIS Biobizkaia", en: "Visit of MDIT master's students to IIS Biobizkaia" } },
        { src: "02.jpg", caption: { es: "«De la señal biológica al circuito», mi artículo en Deusto Ingeniería n.º 27 sobre el proyecto de Electrónica Analógica", en: "“De la señal biológica al circuito” (From biological signal to circuit), my article in Deusto Ingeniería no. 27 on the Analog Electronics project" } }
      ]
    },
    {
      id: "neuronup",
      title: { es: "Consultor de datos", en: "Data Consultant" },
      org: "NeuronUP · Logroño",
      date: "Mar 2024 — Dic 2024",
      text: { es: "Consultoría de datos por cuenta propia.", en: "Freelance data consulting." }
    },
    {
      id: "deusto-donostia",
      title: { es: "Profesor colaborador", en: "Adjunct Lecturer" },
      org: { es: "Universidad de Deusto · Campus de Donostia", en: "University of Deusto · Donostia campus" },
      date: "Feb 2023 — Jun 2023",
      text: {
        es: "Docente de Arquitectura de Computadores en 4.º curso del doble grado en ADE + Ingeniería Informática.",
        en: "Taught Computer Architecture in the 4th year of the double degree in Business Administration + Computer Engineering."
      }
    },
    {
      id: "deustotech-d4k",
      title: { es: "Asistente de investigación", en: "Research Assistant" },
      org: "DeustoTech · Deusto for Knowledge (D4K)",
      date: "Dic 2022 — Nov 2023",
      text: {
        es: "Participación en el proyecto DSTREAMS: diseño y arquitectura de las comunicaciones de los dispositivos edge más relevantes del mercado y creación de modelos de optimización de computación distribuida.",
        en: "Worked on the DSTREAMS project: design and architecture of the communications of the leading edge devices on the market and development of distributed computing optimization models."
      },
      photos: [
        { src: "proyectos/dstreams/01.jpg", caption: { es: "Prototipo de DSTREAMS: clúster de dispositivos embebidos en un rack impreso en 3D", en: "DSTREAMS prototype: a cluster of embedded devices in a 3D-printed rack" } },
        { src: "proyectos/dstreams/02.jpg", caption: { es: "Mi puesto de trabajo con el clúster", en: "My workstation with the cluster" } },
        { src: "proyectos/dstreams/03.jpg", caption: { es: "Artículo en la revista Deusto Ingeniería", en: "Article in Deusto Ingeniería magazine" } }
      ]
    },
    {
      id: "evida",
      title: { es: "Asistente de investigación", en: "Research Assistant" },
      org: "eVIDA Group · DeustoTech",
      date: "Sep 2021 — Jun 2022",
      text: {
        es: "Beca de investigación compaginada con el doble grado. Proyectos de ingeniería biomédica: diseño e implementación de dispositivos capaces de detectar gluten en muestras de comida, que después fueron mi Trabajo de Fin de Grado. Mediciones de laboratorio para entrenar modelos de machine learning y redes neuronales, diseño de carcasas para sensores en CAD e impresión 3D, desarrollo web y comunicación de sensores con sistemas embebidos.",
        en: "Research grant held alongside the double degree. Biomedical engineering projects: design and implementation of devices able to detect gluten in food samples, which later became my bachelor's thesis. Lab measurements to train machine learning models and neural networks, CAD design and 3D printing of sensor enclosures, web development and communication between sensors and embedded systems."
      },
      photos: [
        { src: "proyectos/detector-gluten/04.jpg", caption: { es: "Trabajo en el laboratorio", en: "Working in the lab" } },
        { src: "proyectos/detector-gluten/01.jpg", caption: { es: "Prototipo del detector de gluten", en: "Gluten detector prototype" } }
      ]
    },
    {
      id: "ciberseguridad",
      title: { es: "Programa en ciberseguridad industrial", en: "Industrial Cybersecurity Program" },
      org: { es: "Cátedra Deusto de Industria Digital · Titanium Industrial Security", en: "Deusto Chair of Digital Industry · Titanium Industrial Security" },
      date: "Sep 2018 — Mar 2021",
      text: {
        es: "Cursos y proyectos para desarrollar conocimientos de ciberseguridad industrial: pentesting, análisis de vulnerabilidades, sockets en C#, Snort, Modbus y Fortinet.",
        en: "Courses and projects to build industrial cybersecurity skills: pentesting, vulnerability analysis, C# sockets, Snort, Modbus and Fortinet."
      }
    }
  ],



  // formación (de más reciente a más antigua)
  education: [
    {
      id: "doctorado",
      title: { es: "Doctorado en Neurociencias", en: "PhD in Neuroscience" },
      org: { es: "Universidad del País Vasco (EHU)", en: "University of the Basque Country (EHU)" },
      date: "Sep 2024 — Actualidad",
      text: {
        es: "Tesis doctoral en curso, desarrollada en el grupo de Neuroimagen Computacional del IIS Biobizkaia. Su pilar central es BegiBrainTool, una toolbox open source para evaluar la función visual y visuocognitiva en enfermedades neurodegenerativas.",
        en: "Ongoing PhD thesis, carried out in the Computational Neuroimaging Group at IIS Biobizkaia. Its central pillar is BegiBrainTool, an open-source toolbox to assess visual and visuocognitive function in neurodegenerative diseases."
      },
      photos: [
        { src: "proyectos/begibraintool/01.jpg", caption: { es: "Puesto de evaluación con BegiBrainTool", en: "Assessment setup with BegiBrainTool" } },
        { src: "proyectos/begibraintool/02.jpg", caption: { es: "Una sesión de evaluación con BegiBrainTool", en: "An assessment session with BegiBrainTool" } }
      ]
    },
    {
      id: "master",
      title: { es: "Máster Universitario en Computación y Sistemas Inteligentes", en: "Master's Degree in Computing and Intelligent Systems" },
      org: { es: "Universidad de Deusto", en: "University of Deusto" },
      date: "2022 — 2023"
    },
    {
      id: "doble-grado",
      title: { es: "Doble Grado en Ingeniería Electrónica Industrial y Automática + Ingeniería Informática", en: "Double Bachelor's Degree in Industrial Electronics and Automation Engineering + Computer Engineering" },
      org: { es: "Universidad de Deusto · Bilbao", en: "University of Deusto · Bilbao" },
      date: "2017 — 2022",
      text: {
        es: "Matrículas de Honor en Introducción a Computadores, Programación III, Microprocesadores e Ingeniería Web. Trabajo de Fin de Grado: «Diseño, implementación y validación de una solución tecnológica sensorizada con espectroscopía de infrarrojo cercano para control de alérgenos» (calificaciones de 9,6 y 9,7).",
        en: "Highest honors (Matrícula de Honor) in Introduction to Computers, Programming III, Microprocessors and Web Engineering. Bachelor's thesis: “Design, implementation and validation of a sensor-based technological solution using near-infrared spectroscopy for allergen control” (graded 9.6 and 9.7 out of 10)."
      },
      photos: [
        { src: "proyectos/universidad/01.jpg", caption: { es: "Vehículo controlado con FPGA (2021)", en: "FPGA-controlled vehicle (2021)" } },
        { src: "proyectos/universidad/02.jpg", caption: { es: "Prácticas de robótica industrial (2020)", en: "Industrial robotics lab (2020)" } },
        { src: "proyectos/universidad/03.jpg", caption: { es: "Prácticas de sistemas de control (curso 2019-2020)", en: "Control systems lab (2019-2020 academic year)" } }
      ]
    }
  ],



  // publicaciones (url opcional)
  publications: [
    {
      title: "Amygdala Neurodegeneration: A Key Driver of Visual Dysfunction in Parkinson's Disease",
      venue: "Annals of Clinical and Translational Neurology",
      date: "2025",
      url: "https://onlinelibrary.wiley.com/doi/10.1002/acn3.70007"
    },
    {
      title: "Neuromorphic Technology Insights in Spain",
      venue: "IEEE 24th International Conference on Nanotechnology (NANO)",
      date: "2024",
      url: "https://ieeexplore.ieee.org/document/10669907"
    },
    {
      title: "Sostenibilidad y Eficiencia en la Computación Industrial",
      venue: {
        es: "Deusto Ingeniería n.º 25, revista de la Facultad de Ingeniería (artículo de divulgación sobre DSTREAMS)",
        en: "Deusto Ingeniería no. 25, Faculty of Engineering magazine (outreach article on DSTREAMS, in Spanish)"
      },
      date: "2024",
      url: "http://www.deusto-publicaciones.es/deusto/content/revistas/ingenieria25.pdf#page=65"
    },
    {
      title: "Design and Validation of an Optimal Mechanical Enclosure for Low-Cost Real-Time Gluten Detection Using NIR Sensor in a Portable Device",
      date: "2023",
      url: "https://www.researchgate.net/publication/377010014_Design_and_Validation_of_an_Optimal_Mechanical_Enclosure_for_Low-Cost_Real-Time_Gluten_Detection_Using_NIR_Sensor_in_a_Portable_Device"
    },
    {
      title: "Gluten Analysis Composition Using NIR Spectroscopy and Artificial Intelligence Techniques",
      venue: "Telematique",
      date: "2022",
      url: "https://www.provinciajournal.com/index.php/telematique/article/view/1031"
    }
  ],



  // proyectos: "categories" crea automáticamente los filtros; "featured" los muestra también en Sobre mí
  // (en el orden de esta lista). En la pestaña Proyectos se ordenan solos por "date", de más reciente a más antiguo;
  // "Actualidad" cuenta como lo más reciente; con last: true va al final del todo. En el texto, "\n\n" separa párrafos.
  projects: [
    {
      id: "moto-team",
      title: "Deusto Moto Team",
      categories: ["Electrónica", "Equipos"],
      date: "2018 — 2022",
      icon: "speedometer-outline",
      featured: true,
      summary: {
        es: "Moto eléctrica para el Barcelona Smart Moto Challenge. Diseñé la PCB de distribución de energía y señales.",
        en: "Electric motorbike for the Barcelona Smart Moto Challenge. I designed the power and signal distribution PCB."
      },
      text: {
        es: "Diseño y fabricación de una moto eléctrica entre los departamentos de Mecánica, Diseño, Smart, Empresa y Electrónica para competir en el Barcelona Smart Moto Challenge. Me encargué de crear la PCB de distribución de energía y de señales y fui el contacto entre el equipo y las empresas para buscar patrocinadores y exposiciones. Además, participé en el montaje electrónico y mecánico de la moto junto al resto del equipo, y edité el vídeo del equipo. En 2021 se convirtió en la primera moto eléctrica española con la transmisión fabricada mediante impresión 3D en metal, gracias a MADIT Metal y a la tecnología de Renishaw.",
        en: "Design and manufacture of an electric motorbike by the Mechanical, Design, Smart, Business and Electronics departments to compete in the Barcelona Smart Moto Challenge. I designed the power and signal distribution PCB and was the team's contact with companies to find sponsors and exhibitions. I also took part in the electronic and mechanical assembly of the bike with the rest of the team, and edited the team video. In 2021 it became the first Spanish electric motorbike with a transmission made by metal 3D printing, thanks to MADIT Metal and Renishaw's technology."
      },
      videos: [
        { youtube: "DJI5ZQWqFBI", caption: { es: "«¿Cómo trabajamos? UDMT 2020», vídeo editado por mí", en: "“¿Cómo trabajamos? UDMT 2020” (How we work), a video I edited" } }
      ],
      photos: [
        { src: "01.jpg", caption: { es: "Con la moto del equipo", en: "With the team's bike" } },
        { src: "02.jpg", caption: { es: "Electrónica integrada en el chasis", en: "Electronics integrated into the chassis" } },
        { src: "03.jpg", caption: { es: "La moto terminada", en: "The finished bike" } },
        { src: "04.jpg", caption: { es: "El equipo con la moto", en: "The team with the bike" } },
        { src: "05.jpg", caption: { es: "Presentación de la moto", en: "Presenting the bike" } },
        { src: "06.jpg", caption: { es: "Montaje en el taller (2019)", en: "Assembly in the workshop (2019)" } },
        { src: "07.jpg", caption: { es: "El chasis durante la construcción (2021)", en: "The chassis during construction (2021)" } },
        { src: "08.jpg", caption: { es: "Pruebas en el campus (2019)", en: "Testing on campus (2019)" } }
      ]
    },
    {
      id: "detector-gluten",
      title: { es: "Detector portátil de gluten por espectroscopía NIR", en: "Portable gluten detector using NIR spectroscopy" },
      categories: ["Electrónica", "Investigación"],
      date: "2021 — 2022",
      icon: "flask-outline",
      featured: true,
      summary: {
        es: "Dispositivo de bajo coste que detecta gluten en alimentos combinando un sensor de infrarrojo cercano e inteligencia artificial. Mi TFG, premiado por AECOC y por el Aula Inetum–Deusto.",
        en: "Low-cost device that detects gluten in food by combining a near-infrared sensor with artificial intelligence. My bachelor's thesis, awarded by AECOC and by the Aula Inetum–Deusto."
      },
      text: {
        es: "Diseño, implementación y validación de una solución tecnológica sensorizada con espectroscopía de infrarrojo cercano para el control de alérgenos, desarrollada en eVIDA Group (DeustoTech). Incluye mediciones de laboratorio para entrenar modelos de machine learning y redes neuronales, una carcasa diseñada en CAD e impresa en 3D y la comunicación del sensor con un sistema embebido. Fue mi Trabajo de Fin de Grado (calificaciones de 9,6 y 9,7) y recibió el primer premio del Premio Académico AECOC en Tecnología Aplicada y el primer premio al mejor TFG del Aula Tecnológica Inetum–Deusto, y fue finalista del premio al mejor TFG de Ingeniería de Deusto patrocinado por Management Solutions. Después lo presenté en una charla en la conferencia internacional BIOMDLORE 2023 y dio lugar a dos publicaciones.",
        en: "Design, implementation and validation of a sensor-based technological solution using near-infrared spectroscopy for allergen control, developed at eVIDA Group (DeustoTech). It includes lab measurements to train machine learning models and neural networks, an enclosure designed in CAD and 3D printed, and communication between the sensor and an embedded system. It was my bachelor's thesis (graded 9.6 and 9.7 out of 10) and won first prize in the AECOC Academic Award for Applied Technology and first prize for the best bachelor's thesis of the Aula Tecnológica Inetum–Deusto, and was a finalist for Deusto's best Engineering bachelor's thesis award sponsored by Management Solutions. I later presented it in a talk at the international conference BIOMDLORE 2023, and it led to two publications."
      },
      links: [
        { label: { es: "Artículo en Telematique (2022)", en: "Article in Telematique (2022)" }, url: "https://www.provinciajournal.com/index.php/telematique/article/view/1031", icon: "document-text-outline" },
        { label: { es: "Artículo sobre la carcasa (2023)", en: "Article on the enclosure (2023)" }, url: "https://www.researchgate.net/publication/377010014_Design_and_Validation_of_an_Optimal_Mechanical_Enclosure_for_Low-Cost_Real-Time_Gluten_Detection_Using_NIR_Sensor_in_a_Portable_Device", icon: "document-text-outline" }
      ],
      photos: [
        { src: "01.jpg", caption: { es: "El prototipo: carcasa impresa en 3D con el sensor NIR", en: "The prototype: 3D-printed enclosure with the NIR sensor" } },
        { src: "02.jpg", caption: { es: "Otra vista del prototipo", en: "Another view of the prototype" } },
        { src: "03.jpg", caption: { es: "La base del dispositivo con la electrónica", en: "The base of the device with the electronics" } },
        { src: "04.jpg", caption: { es: "Trabajo en el laboratorio", en: "Working in the lab" } },
        { src: "05.jpg", caption: { es: "Mediciones en el laboratorio", en: "Lab measurements" } },
        { src: "hitos/premio-aecoc/01.jpg", caption: { es: "Primer premio AECOC (Madrid, 2023)", en: "First prize, AECOC Academic Award (Madrid, 2023)" } },
        { src: "hitos/premio-inetum/01.jpg", caption: { es: "Premio al mejor TFG del Aula Inetum–Deusto", en: "Best bachelor's thesis award, Aula Inetum–Deusto" } },
        { src: "hitos/biomdlore-2023/01.jpg", caption: { es: "Charla en BIOMDLORE 2023", en: "Talk at BIOMDLORE 2023" } }
      ]
    },
    {
      id: "begibraintool",
      title: "BegiBrainTool",
      categories: ["Software", "Investigación"],
      date: "2025 — 2026",
      icon: "code-slash-outline",
      featured: true,
      summary: {
        es: "Pilar central de mi tesis doctoral: toolbox open source para evaluar la función visual y visuocognitiva en enfermedades neurodegenerativas. Presentado en AAIC 2025 (Toronto) y OHBM 2026 (Burdeos).",
        en: "Central pillar of my PhD thesis: an open-source toolbox to assess visual and visuocognitive function in neurodegenerative diseases. Presented at AAIC 2025 (Toronto) and OHBM 2026 (Bordeaux)."
      },
      text: {
        es: "Toolbox open source para la evaluación de la función visual y visuocognitiva en enfermedades neurodegenerativas. Es el pilar central de mi tesis doctoral. Lo presenté como póster en la Alzheimer's Association International Conference (AAIC) 2025 en Toronto («BegiBrainTool: An Open-Source Toolbox for Evaluation of Visual Function in Alzheimer's Disease») y en el congreso de la Organization for Human Brain Mapping (OHBM) 2026 en Burdeos («A Modular Toolbox for Early Assessment of Visuo-Cognitive Function in Neurodegenerative Disorders»). También lo he presentado en una ponencia en el Hospital Universitario de Basurto.",
        en: "Open-source toolbox for the assessment of visual and visuocognitive function in neurodegenerative diseases. It is the central pillar of my PhD thesis. I presented it as a poster at the Alzheimer's Association International Conference (AAIC) 2025 in Toronto (“BegiBrainTool: An Open-Source Toolbox for Evaluation of Visual Function in Alzheimer's Disease”) and at the Organization for Human Brain Mapping (OHBM) 2026 annual meeting in Bordeaux (“A Modular Toolbox for Early Assessment of Visuo-Cognitive Function in Neurodegenerative Disorders”). I have also presented it in a talk at Basurto University Hospital."
      },
      links: [
        { label: { es: "Código en GitHub", en: "Code on GitHub" }, url: "https://github.com/compneurobilbao/begibraintool", icon: "logo-github" },
        { label: { es: "Póster AAIC 2025 en ResearchGate", en: "AAIC 2025 poster on ResearchGate" }, url: "https://www.researchgate.net/publication/399070215_BegiBrainTool_An_Open-Source_Toolbox_for_Evaluation_of_Visual_Function_in_Alzheimer's_Disease", icon: "document-text-outline" }
      ],
      photos: [
        { src: "01.jpg", caption: { es: "Puesto de evaluación: eye-tracker, mentonera y pantalla de estímulos", en: "Assessment setup: eye-tracker, chin rest and stimulus screen" } },
        { src: "02.jpg", caption: { es: "Una sesión de evaluación con BegiBrainTool", en: "An assessment session with BegiBrainTool" } },
        { src: "03.jpg", caption: { es: "Ponencia sobre BegiBrainTool en el Hospital Universitario de Basurto", en: "Talk on BegiBrainTool at Basurto University Hospital" } },
        { src: "hitos/ohbm-2026/01.jpg", caption: { es: "Póster en OHBM 2026 (Burdeos)", en: "Poster at OHBM 2026 (Bordeaux)" } },
        { src: "hitos/aaic-2025/01.jpg", caption: { es: "Póster en AAIC 2025 (Toronto)", en: "Poster at AAIC 2025 (Toronto)" } }
      ]
    },
    {
      id: "begifov",
      title: "BegiFOV",
      categories: ["Electrónica", "Investigación"],
      date: "2026",
      icon: "eye-outline",
      summary: {
        es: "Anillo de 12 LEDs impreso en 3D que se acopla a un OCT para estimular la retina con luz intermitente mientras se adquiere una angiografía OCTA.",
        en: "3D-printed ring with 12 LEDs that attaches to an OCT to stimulate the retina with flickering light while an OCTA angiography is acquired."
      },
      text: {
        es: "Dispositivo para estudiar la respuesta de los vasos sanguíneos de la retina a la estimulación luminosa, en desarrollo en el IIS Biobizkaia. Es una pieza anular diseñada en SolidWorks e impresa en 3D que se acopla al objetivo de un OCT Heidelberg Spectralis sin tapar la óptica, con 12 LEDs RGB que emiten un estímulo de luz intermitente (flicker) mientras se adquiere una angiografía OCTA. Lo controla un ESP32-S3 con firmware propio: dos pantallas OLED y un encoder rotatorio permiten ajustar la frecuencia y el color del estímulo.",
        en: "Device to study how the blood vessels of the retina respond to light stimulation, under development at IIS Biobizkaia. It is a ring-shaped part designed in SolidWorks and 3D printed that attaches to the lens of a Heidelberg Spectralis OCT without blocking the optics, with 12 RGB LEDs that emit a flickering light stimulus while an OCTA angiography is acquired. It is controlled by an ESP32-S3 running custom firmware: two OLED displays and a rotary encoder are used to adjust the frequency and color of the stimulus."
      },
      photos: [
        { src: "01.jpg", caption: { es: "Pruebas del prototipo junto al equipo OCT", en: "Testing the prototype with the OCT device" } },
        { src: "02.jpg", caption: { es: "Electrónica del prototipo: ESP32-S3, dos pantallas OLED y encoder", en: "Prototype electronics: ESP32-S3, two OLED displays and an encoder" } }
      ]
    },
    {
      id: "begitrack",
      title: "BEGITRACK",
      categories: ["Electrónica", "Investigación"],
      date: "2024 — Actualidad",
      icon: "eye-outline",
      summary: {
        es: "Eye-tracking con cámara de eventos (DVS) que mide los micromovimientos de los ojos para buscar marcadores precoces de Alzheimer y Parkinson.",
        en: "Eye-tracking with an event camera (DVS) that measures eye micromovements to look for early markers of Alzheimer's and Parkinson's."
      },
      text: {
        es: "Sistema de seguimiento ocular basado en una cámara de eventos (DVS, Dynamic Vision Sensor) que registra los micromovimientos de los ojos (microsacadas, deriva y temblor) para buscar marcadores precoces de Alzheimer y Parkinson. Nace de mi trabajo de desarrollo de software y hardware para ayudar en la detección de enfermedades en el grupo de Neuroimagen Computacional del IIS Biobizkaia.\n\nEl objetivo es un dispositivo compacto y de bajo coste que lleve este análisis fuera del laboratorio como herramienta de cribado. He diseñado la estructura mecánica, de perfiles de aluminio y piezas propias diseñadas en CAD e impresas en 3D para que el conjunto no transmita vibraciones, y el software de análisis en Python. Tras la prueba de concepto en el laboratorio, está prevista su validación clínica en el Hospital Universitario Cruces. Con BEGITRACK participé en el programa de aceleración BILA (2026).",
        en: "Eye-tracking system based on an event camera (DVS, Dynamic Vision Sensor) that records eye micromovements (microsaccades, drift and tremor) to look for early markers of Alzheimer's and Parkinson's. It grew out of my software and hardware development work to help detect diseases in the Computational Neuroimaging Group at IIS Biobizkaia.\n\nThe goal is a compact, low-cost device that takes this analysis out of the lab as a screening tool. I designed the mechanical structure, made of aluminum profiles and custom parts designed in CAD and 3D printed so that the setup does not transmit vibrations, as well as the analysis software in Python. After the proof of concept in the lab, clinical validation is planned at Cruces University Hospital. With BEGITRACK I took part in the BILA acceleration program (2026)."
      },
      photos: [
        { src: "01.jpg", caption: { es: "Probando el prototipo: la cámara de eventos registra el ojo en tiempo real", en: "Testing the prototype: the event camera records the eye in real time" } },
        { src: "02.jpg", caption: { es: "El prototipo, con la estructura de perfiles de aluminio y la mentonera", en: "The prototype, with the aluminum profile structure and the chin rest" } },
        { src: "03.jpg", caption: { es: "Vista general del montaje", en: "Overview of the setup" } },
        { src: "04.jpg", caption: { es: "Diseño CAD del soporte de la cámara", en: "CAD design of the camera mount" } },
        { src: "05.jpg", caption: { es: "Lámina de diseño de una de las piezas impresas en 3D", en: "Design sheet of one of the 3D-printed parts" } }
      ]
    },
    {
      id: "dstreams",
      title: { es: "DSTREAMS · Computación en el edge", en: "DSTREAMS · Edge computing" },
      categories: ["Software", "Investigación"],
      date: "2022 — 2023",
      icon: "git-network-outline",
      summary: {
        es: "Clúster de dispositivos embebidos en un rack impreso en 3D y un modelo de IA que predice su carga para aprovechar su capacidad ociosa. Publicado en la revista Deusto Ingeniería.",
        en: "A cluster of embedded devices in a 3D-printed rack and an AI model that predicts their load to make use of their idle capacity. Published in Deusto Ingeniería magazine."
      },
      text: {
        es: "Proyecto del equipo Deusto for Knowledge (D4K) de DeustoTech sobre el procesamiento de datos industriales a muy alta velocidad con edge computing. Participé en el diseño y la arquitectura de las comunicaciones de los dispositivos edge más relevantes del mercado y en la creación de modelos de optimización de computación distribuida.\n\nEn 2023 desarrollamos un prototipo con dispositivos embebidos de bajo coste, ordenados y refrigerados en un rack impreso en 3D. Un sistema de monitorización central registra en tiempo real la temperatura del núcleo, la carga de CPU y el uso de memoria de cada dispositivo. Con los datos de procesos industriales simulados entrenamos un modelo de IA que anticipa los picos de carga a partir de la hora del día, la temperatura y la carga reciente del procesador. Así se sabe qué dispositivo va a quedar libre para asignarle una tarea secundaria, aprovechando su capacidad ociosa con menos consumo energético.",
        en: "Project of the Deusto for Knowledge (D4K) team at DeustoTech on ultra-high-speed industrial data processing with edge computing. I worked on the design and architecture of the communications of the leading edge devices on the market and on the development of distributed computing optimization models.\n\nIn 2023 we built a prototype with low-cost embedded devices, organized and cooled in a 3D-printed rack. A central monitoring system records the core temperature, CPU load and memory use of each device in real time. Using data from simulated industrial processes, we trained an AI model that anticipates load peaks from the time of day, the temperature and the recent processor load. This shows which device is about to become free so that it can be given a secondary task, making use of its idle capacity with lower energy consumption."
      },
      links: [
        { label: { es: "Artículo en Deusto Ingeniería n.º 25 (pág. 63)", en: "Article in Deusto Ingeniería no. 25 (p. 63, in Spanish)" }, url: "http://www.deusto-publicaciones.es/deusto/content/revistas/ingenieria25.pdf#page=65", icon: "document-text-outline" }
      ],
      photos: [
        { src: "01.jpg", caption: { es: "El clúster de dispositivos embebidos en su rack impreso en 3D", en: "The cluster of embedded devices in its 3D-printed rack" } },
        { src: "02.jpg", caption: { es: "Mi puesto de trabajo con el clúster", en: "My workstation with the cluster" } },
        { src: "03.jpg", caption: { es: "Artículo en la revista Deusto Ingeniería n.º 25 (2024)", en: "Article in Deusto Ingeniería magazine no. 25 (2024)" } }
      ]
    },
    {
      id: "drone-team",
      title: "Deusto Drone Team",
      categories: ["Electrónica", "Equipos"],
      date: "2018",
      icon: "airplane-outline",
      summary: {
        es: "Diseño y cableado del dron inteligente del equipo para el Barcelona Smart Drone Challenge.",
        en: "Design and wiring of the team's smart drone for the Barcelona Smart Drone Challenge."
      },
      text: {
        es: "Diseño y cableado del dron inteligente de DeustoDroneTeam, un equipo multidisciplinar de 6 estudiantes que participó en el Barcelona Smart Drone Challenge. También edité el vídeo del equipo.",
        en: "Design and wiring of the smart drone of DeustoDroneTeam, a multidisciplinary team of 6 students that competed in the Barcelona Smart Drone Challenge. I also edited the team video."
      },
      videos: [
        { youtube: "vguudwVedEI", caption: { es: "«Deusto Drone Team 2018», vídeo editado por mí", en: "“Deusto Drone Team 2018”, a video I edited" } }
      ],
      photos: [
        { src: "01.jpg", caption: { es: "El dron listo para volar", en: "The drone ready to fly" } },
        { src: "02.jpg", caption: { es: "Montaje y cableado en el taller", en: "Assembly and wiring in the workshop" } }
      ]
    },
    {
      id: "universidad",
      title: { es: "Proyectos de clase", en: "Coursework projects" },
      categories: ["Universidad"],
      date: "2017 — 2022",
      icon: "school-outline",
      summary: {
        es: "Algunos proyectos y prácticas del doble grado en la Universidad de Deusto.",
        en: "Some projects and lab work from my double degree at the University of Deusto."
      },
      text: {
        es: "Algunos de los proyectos y prácticas que hice durante el doble grado en Ingeniería Electrónica Industrial y Automática + Ingeniería Informática en la Universidad de Deusto.",
        en: "Some of the projects and lab work I did during my double degree in Industrial Electronics and Automation Engineering + Computer Engineering at the University of Deusto."
      },
      photos: [
        { src: "01.jpg", caption: { es: "Vehículo controlado con FPGA (2021)", en: "FPGA-controlled vehicle (2021)" } },
        { src: "02.jpg", caption: { es: "Prácticas de robótica industrial (2020)", en: "Industrial robotics lab (2020)" } },
        { src: "03.jpg", caption: { es: "Prácticas de sistemas de control (curso 2019-2020)", en: "Control systems lab (2019-2020 academic year)" } }
      ]
    },
    {
      id: "cerebros-3d",
      title: { es: "Mini-cerebros impresos en 3D", en: "3D-printed mini brains" },
      categories: ["Personal"],
      date: "2025 — 2026",
      icon: "cube-outline",
      summary: {
        es: "Llaveros con el cerebro de mis compañeros, impresos en 3D a partir de sus propias resonancias magnéticas.",
        en: "Keychains of my colleagues' brains, 3D printed from their own MRI scans."
      },
      text: {
        es: "Me gusta hacer cosas con las manos. A partir de resonancias magnéticas reales de mis compañeros, les he ido imprimiendo en 3D llaveros con su propio cerebro, a los que después doy el acabado a mano.",
        en: "I like making things with my hands. Using real MRI scans of my colleagues, I have been 3D printing keychains of their own brains, which I then finish by hand."
      },
      photos: [
        { src: "01.jpg", caption: { es: "Algunos de los cerebros terminados", en: "Some of the finished brains" } },
        { src: "02.jpg", caption: { es: "Imprimiendo en 3D", en: "3D printing" } },
        { src: "03.jpg", caption: { es: "Recién salidos de la impresora", en: "Fresh off the printer" } },
        { src: "04.jpg", caption: { es: "Dando el acabado a mano", en: "Finishing them by hand" } },
        { src: "05.jpg", caption: { es: "Llavero terminado", en: "A finished keychain" } }
      ]
    },
    {
      id: "huerta",
      title: { es: "La huerta del pueblo", en: "The vegetable garden in my village" },
      categories: ["Personal"],
      date: "2026",
      last: true,
      icon: "leaf-outline",
      summary: {
        es: "Algo nada tecnológico: cultivar una huerta en mi pueblo, desde preparar la tierra hasta la cosecha.",
        en: "Something not technological at all: growing a vegetable garden in my village, from preparing the soil to the harvest."
      },
      text: {
        es: "Fuera del laboratorio también me gusta trabajar con las manos en algo nada tecnológico: la huerta de mi pueblo. Este año la preparé en marzo y en septiembre ya estaba recogiendo la cosecha.",
        en: "Outside the lab I also like working with my hands on something not technological at all: the vegetable garden in my village. This year I prepared it in March, and by September I was already harvesting."
      },
      photos: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]
    }
  ],



  // hitos: congresos, premios, programas... (de más reciente a más antiguo)
  milestones: [
    {
      id: "zientzia-astea-2026",
      title: "Zientzia Astea 2026",
      tag: "Divulgación",
      date: "Nov 2026",
      icon: "megaphone-outline",
      text: {
        es: "Charla de divulgación sobre la retina, con una demostración en directo, para alumnos de 4.º de la ESO en Elorrio, dentro de la Semana de la Ciencia (Zientzia Astea).",
        en: "Outreach talk about the retina, with a live demo, for 4th-year secondary school students in Elorrio, as part of Science Week (Zientzia Astea)."
      },
      photos: [
        { src: "01.jpg", caption: { es: "Explicando cómo funciona la retina", en: "Explaining how the retina works" } },
        { src: "02.jpg" },
        { src: "03.jpg" },
        { src: "04.jpg" }
      ]
    },
    {
      id: "bila-2026",
      title: { es: "Programa BILA", en: "BILA Program" },
      tag: "Programa",
      date: "Oct 2026",
      icon: "rocket-outline",
      text: {
        es: "Programa de aceleración para investigadores con proyectos transferibles en IA, computación, tecnologías cuánticas y materiales avanzados, en el que participé con BEGITRACK: cuatro días intensivos con mentoring individual y presentación ante un panel.",
        en: "Acceleration program for researchers with transferable projects in AI, computing, quantum technologies and advanced materials, in which I took part with BEGITRACK: four intensive days with one-to-one mentoring and a pitch to a panel."
      },
      photos: [
        { src: "01.jpg", caption: { es: "Visita al ordenador cuántico IBM Quantum System Two", en: "Visit to the IBM Quantum System Two quantum computer" } },
        { src: "02.jpg", caption: { es: "Inicio del programa", en: "Program kick-off" } },
        { src: "03.jpg", caption: { es: "Sesión formativa", en: "Training session" } },
        { src: "04.jpg", caption: { es: "Trabajo en grupo", en: "Group work" } },
        { src: "05.jpg", caption: { es: "Visita a Ikerbasque", en: "Visit to Ikerbasque" } },
        { src: "06.jpg", caption: { es: "Visita al centro de computación cuántica", en: "Visit to the quantum computing center" } },
        { src: "07.jpg", caption: "IBM Quantum System Two" },
        { src: "08.jpg", caption: { es: "Sistema criogénico de un ordenador cuántico de IBM", en: "Cryogenic system of an IBM quantum computer" } }
      ]
    },
    {
      id: "aaic-2026",
      title: { es: "AAIC 2026 · Londres", en: "AAIC 2026 · London" },
      tag: "Congreso",
      date: "Jul 2026",
      icon: "mic-outline",
      text: {
        es: "Presentación del póster «Eye-tracking Markers in Prodromal Alzheimer's: Relationships with Plasma Biomarkers, Cognition, and Visual Dysfunction» en la Alzheimer's Association International Conference.",
        en: "Presented the poster “Eye-tracking Markers in Prodromal Alzheimer's: Relationships with Plasma Biomarkers, Cognition, and Visual Dysfunction” at the Alzheimer's Association International Conference."
      },
      photos: [
        { src: "01.jpg", caption: { es: "Con el póster en AAIC 2026", en: "With the poster at AAIC 2026" } }
      ]
    },
    {
      id: "ohbm-2026",
      title: { es: "OHBM 2026 · Burdeos", en: "OHBM 2026 · Bordeaux" },
      tag: "Congreso",
      date: "Jun 2026",
      icon: "mic-outline",
      text: {
        es: "Presentación del póster «A Modular Toolbox for Early Assessment of Visuo-Cognitive Function in Neurodegenerative Disorders» (BegiBrainTool) en el congreso anual de la Organization for Human Brain Mapping.",
        en: "Presented the poster “A Modular Toolbox for Early Assessment of Visuo-Cognitive Function in Neurodegenerative Disorders” (BegiBrainTool) at the annual meeting of the Organization for Human Brain Mapping."
      },
      links: [
        { label: { es: "BegiBrainTool en GitHub", en: "BegiBrainTool on GitHub" }, url: "https://github.com/compneurobilbao/begibraintool", icon: "logo-github" }
      ],
      photos: [
        { src: "01.jpg", caption: { es: "Con el póster de BegiBrainTool en OHBM 2026", en: "With the BegiBrainTool poster at OHBM 2026" } }
      ]
    },
    {
      id: "aaic-2025",
      title: "AAIC 2025 · Toronto",
      tag: "Congreso",
      date: "Jul 2025",
      icon: "mic-outline",
      text: {
        es: "Presentación del póster «BegiBrainTool: An Open-Source Toolbox for Evaluation of Visual Function in Alzheimer's Disease» en la Alzheimer's Association International Conference.",
        en: "Presented the poster “BegiBrainTool: An Open-Source Toolbox for Evaluation of Visual Function in Alzheimer's Disease” at the Alzheimer's Association International Conference."
      },
      links: [
        { label: { es: "Ver póster", en: "View poster" }, url: "https://www.researchgate.net/publication/399070215_BegiBrainTool_An_Open-Source_Toolbox_for_Evaluation_of_Visual_Function_in_Alzheimer's_Disease", icon: "document-text-outline" }
      ],
      photos: [
        { src: "01.jpg", caption: { es: "Con el póster en AAIC 2025", en: "With the poster at AAIC 2025" } }
      ]
    },
    {
      id: "brainmodes-2024",
      title: "BrainModes 2024 · Bilbao",
      tag: "Organización",
      date: "Nov 2024",
      icon: "calendar-outline",
      text: {
        es: "Desde el grupo de Neuroimagen Computacional del IIS Biobizkaia ayudé a organizar BrainModes 2024, conferencia internacional de neurociencia celebrada en Bilbao del 18 al 21 de noviembre de 2024: desde preparar las acreditaciones hasta el apoyo durante el evento.",
        en: "From the Computational Neuroimaging Group at IIS Biobizkaia, I helped organize BrainModes 2024, an international neuroscience conference held in Bilbao on 18–21 November 2024: from preparing the badges to providing support during the event."
      },
      photos: [
        { src: "01.jpg", caption: { es: "Una de las sesiones en el auditorio", en: "One of the sessions in the auditorium" } },
        { src: "02.jpg", caption: { es: "Preparando las acreditaciones", en: "Preparing the badges" } },
        { src: "03.jpg", caption: { es: "Todo listo para recibir a los asistentes", en: "All set to welcome the attendees" } },
        { src: "04.jpg", caption: { es: "Sesión de pósteres", en: "Poster session" } },
        { src: "05.jpg", caption: { es: "Pausa para el café", en: "Coffee break" } }
      ]
    },
    {
      id: "biomdlore-2023",
      title: "BIOMDLORE 2023",
      tag: "Congreso",
      date: "Oct 2023",
      icon: "mic-outline",
      text: {
        es: "Charla oral en la 14.ª edición de la conferencia internacional BIOMDLORE, celebrada en Białystok (Polonia), sobre el detector portátil de gluten de mi TFG, ya defendido: «Design and Validation of an Optimal Mechanical Enclosure for Low-Cost Real-Time Gluten Detection Using NIR Sensor in a Portable Device». El trabajo se publicó después en una revista.",
        en: "Oral talk at the 14th edition of the international conference BIOMDLORE, held in Białystok (Poland), on the portable gluten detector from my bachelor's thesis, after defending it: “Design and Validation of an Optimal Mechanical Enclosure for Low-Cost Real-Time Gluten Detection Using NIR Sensor in a Portable Device”. The work was later published in a journal."
      },
      links: [
        { label: { es: "Ver la publicación", en: "View the publication" }, url: "https://www.researchgate.net/publication/377010014_Design_and_Validation_of_an_Optimal_Mechanical_Enclosure_for_Low-Cost_Real-Time_Gluten_Detection_Using_NIR_Sensor_in_a_Portable_Device", icon: "document-text-outline" }
      ],
      photos: [
        { src: "01.jpg", caption: { es: "Mi charla en BIOMDLORE 2023", en: "My talk at BIOMDLORE 2023" } },
        { src: "02.jpg", caption: { es: "La sala de la conferencia", en: "The conference room" } }
      ]
    },
    {
      id: "premio-aecoc",
      title: { es: "1.er Premio Académico AECOC", en: "1st Prize, AECOC Academic Award" },
      tag: "Premio",
      date: "Feb 2023",
      icon: "trophy-outline",
      text: {
        es: "Primer premio de la 10.ª edición del Premio Académico de AECOC (Asociación de Empresas del Gran Consumo) en la categoría de Tecnología Aplicada, a nivel nacional, por mi trabajo sobre el detector portátil de gluten. La entrega fue en Madrid el 23 de febrero de 2023.",
        en: "First prize in the 10th edition of the AECOC Academic Award (the Spanish consumer goods industry association) in the Applied Technology category, at national level, for my work on the portable gluten detector. The award ceremony was held in Madrid on 23 February 2023."
      },
      photos: [
        { src: "01.jpg", caption: { es: "Con el premio en Madrid", en: "With the award in Madrid" } },
        { src: "02.jpg", caption: { es: "Entrega del premio", en: "Award ceremony" } },
        { src: "03.jpg", caption: { es: "Los premiados", en: "The award winners" } },
        { src: "04.jpg" }
      ]
    },
    {
      id: "premio-inetum",
      title: { es: "Premio al mejor TFG · Aula Inetum–Deusto", en: "Best Bachelor's Thesis Award · Aula Inetum–Deusto" },
      tag: "Premio",
      date: "Ene 2023",
      icon: "trophy-outline",
      text: {
        es: "Primer premio al mejor Proyecto de Fin de Grado del Aula Tecnológica Inetum–Deusto, por el detector portátil de gluten por espectroscopía NIR.",
        en: "First prize for the best bachelor's thesis of the Aula Tecnológica Inetum–Deusto, for the portable gluten detector using NIR spectroscopy."
      },
      photos: [
        { src: "01.jpg", caption: { es: "Recogiendo el premio", en: "Receiving the award" } },
        { src: "02.jpg", caption: { es: "Foto de grupo de la entrega", en: "Group photo at the ceremony" } }
      ]
    },
    {
      id: "udmt-impresion-3d-2021",
      title: { es: "Deusto Moto Team · Transmisión impresa en 3D en metal", en: "Deusto Moto Team · 3D-printed metal transmission" },
      tag: "Prensa",
      date: "Mar 2021",
      icon: "newspaper-outline",
      text: {
        es: "Con el Deusto Moto Team construimos la primera moto eléctrica española con la transmisión fabricada mediante impresión 3D en metal. La COVID-19 había cerrado a los proveedores de mecanizado, y MADIT Metal fabricó las piezas con tecnología PBLF (fusión láser en lecho de polvo) de Renishaw. Fuimos el primer equipo universitario en usar fabricación aditiva en la transmisión de su moto para el Barcelona Smart Moto Challenge. El proyecto salió en la prensa del sector y en la revista Deusto Ingeniería.",
        en: "With the Deusto Moto Team we built the first Spanish electric motorbike with a transmission made by metal 3D printing. COVID-19 had closed the machining suppliers, and MADIT Metal manufactured the parts using Renishaw's PBLF (powder bed laser fusion) technology. We were the first university team to use additive manufacturing in the transmission of its bike for the Barcelona Smart Moto Challenge. The project was covered by industry press and by Deusto Ingeniería magazine."
      },
      links: [
        { label: { es: "Noticia de la Universidad de Deusto", en: "University of Deusto news (in Spanish)" }, url: "https://www.deusto.es/es/inicio/vive/actualidad/noticias/el-deusto-moto-team-construye-con-la-ayuda-de-madit-la-primera-moto-electrica-espanola-con-componentes-impresos-en-3d-de-metal/noticia", icon: "newspaper-outline" },
        { label: { es: "Caso de éxito de Renishaw", en: "Renishaw case study (in Spanish)" }, url: "https://www.renishaw.com/es/udmt-innovando-en-el-sector-de-la-automocion-gracias-a-la-impresion-3d-metalica-madit-y-la-universidad-de-deusto--46905", icon: "newspaper-outline" },
        { label: { es: "Noticia en Izaro", en: "Izaro news (in Spanish)" }, url: "https://www.izaro.com/madit-metal-aplica-tecnologia-pblf-de-renishaw-en-la-moto-electrica-de-la-universidad-de-deusto/c-1615391205/", icon: "newspaper-outline" },
        { label: { es: "Deusto Ingeniería n.º 21 (págs. 18-19)", en: "Deusto Ingeniería no. 21 (pp. 18-19, in Spanish)" }, url: "https://es.slideshare.net/slideshow/deusto-ingeniera-21-ao-2021/241818936", icon: "document-text-outline" }
      ],
      photos: [
        { src: "proyectos/moto-team/03.jpg", caption: { es: "La moto terminada", en: "The finished bike" } },
        { src: "proyectos/moto-team/05.jpg", caption: { es: "Presentación de la moto", en: "Presenting the bike" } }
      ]
    },
    {
      id: "hash-code-2020",
      title: "Google Hash Code 2020",
      tag: "Competición",
      date: "Feb 2020",
      icon: "code-slash-outline",
      text: {
        es: "Participación en la ronda de clasificación online de la competición de programación por equipos, desde el hub de la Torre Iberdrola (Bilbao).",
        en: "Took part in the online qualification round of the team programming competition, from the hub at Torre Iberdrola (Bilbao)."
      },
      photos: [
        { src: "01.jpg", caption: { es: "Con mi equipo en la Torre Iberdrola", en: "With my team at Torre Iberdrola" } }
      ]
    },
    {
      id: "ibm-quantum-2019",
      title: "IBM Quantum Computing Hackathon",
      tag: "Hackathon",
      date: "Dic 2019",
      icon: "planet-outline",
      text: {
        es: "Participación en el hackathon de computación cuántica de IBM celebrado en Innolab (Bilbao).",
        en: "Took part in IBM's quantum computing hackathon held at Innolab (Bilbao)."
      },
      photos: [
        { src: "01.jpg", caption: { es: "Trabajando con el equipo", en: "Working with the team" } },
        { src: "02.jpg", caption: { es: "Foto de grupo de los participantes", en: "Group photo of the participants" } }
      ]
    },
    {
      id: "talentia",
      title: { es: "Programa Talentia · Bizkaia Talent", en: "Talentia Program · Bizkaia Talent" },
      tag: "Programa",
      date: "2018 — 2021",
      icon: "people-outline",
      text: {
        es: "Programa de captación de talento con actividades para desarrollar competencias transversales: trabajo en equipo, comunicación interpersonal y resolución de problemas.",
        en: "Talent program with activities to develop soft skills: teamwork, interpersonal communication and problem solving."
      }
    }
  ]

};
