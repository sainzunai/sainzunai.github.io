'use strict';

/**
 * CONTENIDO DEL PORTFOLIO
 *
 * Todo lo que aparece en Trayectoria, Proyectos e Hitos sale de este fichero.
 * Para añadir algo nuevo, copia un bloque { ... } de la lista que toque y cámbialo.
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
 *     photos: ["01.jpg", { src: "02.jpg", caption: "Montaje de la PCB" }]
 *   Para reutilizar una foto de otro elemento, pon su ruta dentro de assets/images:
 *     { src: "hitos/aaic-2025/01.jpg", caption: "Póster en AAIC 2025" }
 * - photos: [] muestra un hueco "Fotos próximamente" mientras showPhotoPlaceholders sea true.
 *
 * VÍDEOS
 * - De YouTube (con el identificador que va tras "watch?v="):
 *     videos: [{ youtube: "DJI5ZQWqFBI", caption: "Vídeo editado por mí" }]
 * - Un .mp4 guardado en la carpeta del elemento (que pese poco, idealmente < 15 MB):
 *     videos: [{ src: "demo.mp4", poster: "01.jpg", caption: "Demostración" }]
 *
 * ICONOS: nombres de https://ionic.io/ionicons (versión 5)
 */

const PORTFOLIO = {

  showPhotoPlaceholders: true,



  // experiencia laboral (de más reciente a más antigua)
  experience: [
    {
      id: "biobizkaia",
      title: "Ingeniero de Investigación y Desarrollo",
      org: "IIS Biobizkaia · Grupo de Neuroimagen Computacional",
      date: "Dic 2023 — Actualidad",
      text: "Desarrollo software y hardware para ayudar en la detección de enfermedades neurodegenerativas como el Alzheimer y el Parkinson: cámaras de eventos (DVS), eye-trackers, sensores biométricos, electrónica y piezas impresas en 3D, pipelines de análisis de datos en Python y tests computarizados con PsychoPy. De este trabajo nacen los proyectos BEGITRACK, BegiFOV y BegiBrainTool. En este grupo realizo mi tesis doctoral, he colaborado en la organización de congresos y he presentado mi trabajo en congresos internacionales.",
      photos: [
        { src: "proyectos/begitrack/01.jpg", caption: "Probando el prototipo de BEGITRACK" },
        { src: "proyectos/begibraintool/01.jpg", caption: "Puesto de evaluación con BegiBrainTool" },
        { src: "hitos/aaic-2026/01.jpg", caption: "Póster en AAIC 2026 (Londres)" },
        { src: "hitos/ohbm-2026/01.jpg", caption: "Póster en OHBM 2026 (Burdeos)" },
        { src: "proyectos/begibraintool/03.jpg", caption: "Ponencia sobre BegiBrainTool en el Hospital Universitario de Basurto" },
        { src: "hitos/brainmodes-2024/01.jpg", caption: "BrainModes 2024, conferencia que ayudé a organizar" },
        { src: "hitos/aaic-2025/01.jpg", caption: "Póster en AAIC 2025 (Toronto)" },
        { src: "proyectos/begifov/02.jpg", caption: "Electrónica del prototipo BegiFOV" }
      ]
    },
    {
      id: "deusto-profesor",
      title: "Profesor colaborador",
      org: "Universidad de Deusto",
      date: "Ene 2024 — Actualidad",
      text: "Docente titular de Electrónica Analógica (Grado en Ingeniería Biomédica) y Tecnología Electrónica (Robótica, ITI y Electrónica). Director de múltiples Trabajos de Fin de Grado en distintas titulaciones.",
      photos: [
        { src: "01.jpg", caption: "Visita de estudiantes del máster MDIT al IIS Biobizkaia" }
      ]
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
      photos: [
        { src: "proyectos/dstreams/01.jpg", caption: "Prototipo de DSTREAMS: clúster de dispositivos embebidos en un rack impreso en 3D" },
        { src: "proyectos/dstreams/02.jpg", caption: "Mi puesto de trabajo con el clúster" },
        { src: "proyectos/dstreams/03.jpg", caption: "Artículo en la revista Deusto Ingeniería" }
      ]
    },
    {
      id: "evida",
      title: "Asistente de investigación",
      org: "eVIDA Group · DeustoTech",
      date: "Sep 2021 — Jun 2022",
      text: "Beca de investigación compaginada con el doble grado. Proyectos de ingeniería biomédica: diseño e implementación de dispositivos capaces de detectar gluten en muestras de comida, que después fueron mi Trabajo de Fin de Grado. Mediciones de laboratorio para entrenar modelos de machine learning y redes neuronales, diseño de carcasas para sensores en CAD e impresión 3D, desarrollo web y comunicación de sensores con sistemas embebidos.",
      photos: [
        { src: "proyectos/detector-gluten/04.jpg", caption: "Trabajo en el laboratorio" },
        { src: "proyectos/detector-gluten/01.jpg", caption: "Prototipo del detector de gluten" }
      ]
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
      text: "Tesis doctoral en curso, desarrollada en el grupo de Neuroimagen Computacional del IIS Biobizkaia. Su pilar central es BegiBrainTool, una toolbox open source para evaluar la función visual y visuocognitiva en enfermedades neurodegenerativas.",
      photos: [
        { src: "proyectos/begibraintool/01.jpg", caption: "Puesto de evaluación con BegiBrainTool" },
        { src: "proyectos/begibraintool/02.jpg", caption: "Una sesión de evaluación con BegiBrainTool" }
      ]
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
      text: "Matrículas de Honor en Introducción a Computadores, Programación III, Microprocesadores e Ingeniería Web. Trabajo de Fin de Grado: «Diseño, implementación y validación de una solución tecnológica sensorizada con espectroscopía de infrarrojo cercano para control de alérgenos» (calificaciones de 9,6 y 9,7).",
      photos: [
        { src: "proyectos/universidad/01.jpg", caption: "Vehículo controlado con FPGA (2021)" },
        { src: "proyectos/universidad/02.jpg", caption: "Prácticas de robótica industrial (2020)" },
        { src: "proyectos/universidad/03.jpg", caption: "Prácticas de sistemas de control (curso 2019-2020)" }
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
      venue: "Deusto Ingeniería n.º 25, revista de la Facultad de Ingeniería (artículo de divulgación sobre DSTREAMS)",
      date: "2024",
      url: "http://www.deusto-publicaciones.es/deusto/content/revistas/ingenieria25.pdf#page=65"
    },
    {
      title: "Design and Validation of an Optimal Mechanical Enclosure for Low-Cost Real-Time Gluten Detection Using NIR Sensor in a Portable Device",
      date: "2023"
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
      summary: "Moto eléctrica para el Barcelona Smart Moto Challenge. Diseñé la PCB de distribución de energía y señales.",
      text: "Diseño y fabricación de una moto eléctrica entre los departamentos de Mecánica, Diseño, Smart, Empresa y Electrónica para competir en el Barcelona Smart Moto Challenge. Me encargué de crear la PCB de distribución de energía y de señales y fui el contacto entre el equipo y las empresas para buscar patrocinadores y exposiciones. Además, participé en el montaje electrónico y mecánico de la moto junto al resto del equipo, y edité el vídeo del equipo.",
      videos: [
        { youtube: "DJI5ZQWqFBI", caption: "«¿Cómo trabajamos? UDMT 2020», vídeo editado por mí" }
      ],
      photos: [
        { src: "01.jpg", caption: "Con la moto del equipo" },
        { src: "02.jpg", caption: "Electrónica integrada en el chasis" },
        { src: "03.jpg", caption: "La moto terminada" },
        { src: "04.jpg", caption: "El equipo con la moto" },
        { src: "05.jpg", caption: "Presentación de la moto" },
        { src: "06.jpg", caption: "Montaje en el taller (2019)" },
        { src: "07.jpg", caption: "El chasis durante la construcción (2021)" },
        { src: "08.jpg", caption: "Pruebas en el campus (2019)" }
      ]
    },
    {
      id: "detector-gluten",
      title: "Detector portátil de gluten por espectroscopía NIR",
      categories: ["Electrónica", "Investigación"],
      date: "2021 — 2022",
      icon: "flask-outline",
      featured: true,
      summary: "Dispositivo de bajo coste que detecta gluten en alimentos combinando un sensor de infrarrojo cercano e inteligencia artificial. Mi TFG, premiado por AECOC y por el Aula Inetum–Deusto.",
      text: "Diseño, implementación y validación de una solución tecnológica sensorizada con espectroscopía de infrarrojo cercano para el control de alérgenos, desarrollada en eVIDA Group (DeustoTech). Incluye mediciones de laboratorio para entrenar modelos de machine learning y redes neuronales, una carcasa diseñada en CAD e impresa en 3D y la comunicación del sensor con un sistema embebido. Fue mi Trabajo de Fin de Grado (calificaciones de 9,6 y 9,7) y recibió el primer premio del Premio Académico AECOC en Tecnología Aplicada y el primer premio al mejor TFG del Aula Tecnológica Inetum–Deusto. Después lo presenté en una charla en la conferencia internacional BIOMDLORE 2023 y dio lugar a dos publicaciones.",
      links: [
        { label: "Artículo en Telematique (2022)", url: "https://www.provinciajournal.com/index.php/telematique/article/view/1031", icon: "document-text-outline" }
      ],
      photos: [
        { src: "01.jpg", caption: "El prototipo: carcasa impresa en 3D con el sensor NIR" },
        { src: "02.jpg", caption: "Otra vista del prototipo" },
        { src: "03.jpg", caption: "La base del dispositivo con la electrónica" },
        { src: "04.jpg", caption: "Trabajo en el laboratorio" },
        { src: "05.jpg", caption: "Mediciones en el laboratorio" },
        { src: "hitos/premio-aecoc/01.jpg", caption: "Primer premio AECOC (Madrid, 2023)" },
        { src: "hitos/premio-inetum/01.jpg", caption: "Premio al mejor TFG del Aula Inetum–Deusto" },
        { src: "hitos/biomdlore-2023/01.jpg", caption: "Charla en BIOMDLORE 2023" }
      ]
    },
    {
      id: "begibraintool",
      title: "BegiBrainTool",
      categories: ["Software", "Investigación"],
      date: "2025 — 2026",
      icon: "code-slash-outline",
      featured: true,
      summary: "Pilar central de mi tesis doctoral: toolbox open source para evaluar la función visual y visuocognitiva en enfermedades neurodegenerativas. Presentado en AAIC 2025 (Toronto) y OHBM 2026 (Burdeos).",
      text: "Toolbox open source para la evaluación de la función visual y visuocognitiva en enfermedades neurodegenerativas. Es el pilar central de mi tesis doctoral. Lo presenté como póster en la Alzheimer's Association International Conference (AAIC) 2025 en Toronto («BegiBrainTool: An Open-Source Toolbox for Evaluation of Visual Function in Alzheimer's Disease») y en el congreso de la Organization for Human Brain Mapping (OHBM) 2026 en Burdeos («A Modular Toolbox for Early Assessment of Visuo-Cognitive Function in Neurodegenerative Disorders»). También lo he presentado en una ponencia en el Hospital Universitario de Basurto.",
      links: [
        { label: "Código en GitHub", url: "https://github.com/compneurobilbao/begibraintool", icon: "logo-github" },
        { label: "Póster AAIC 2025 en ResearchGate", url: "https://www.researchgate.net/publication/399070215_BegiBrainTool_An_Open-Source_Toolbox_for_Evaluation_of_Visual_Function_in_Alzheimer's_Disease", icon: "document-text-outline" }
      ],
      photos: [
        { src: "01.jpg", caption: "Puesto de evaluación: eye-tracker, mentonera y pantalla de estímulos" },
        { src: "02.jpg", caption: "Una sesión de evaluación con BegiBrainTool" },
        { src: "03.jpg", caption: "Ponencia sobre BegiBrainTool en el Hospital Universitario de Basurto" },
        { src: "hitos/ohbm-2026/01.jpg", caption: "Póster en OHBM 2026 (Burdeos)" },
        { src: "hitos/aaic-2025/01.jpg", caption: "Póster en AAIC 2025 (Toronto)" }
      ]
    },
    {
      id: "begifov",
      title: "BegiFOV",
      categories: ["Electrónica", "Investigación"],
      date: "2026",
      icon: "eye-outline",
      summary: "Anillo de 12 LEDs impreso en 3D que se acopla a un OCT para estimular la retina con luz intermitente mientras se adquiere una angiografía OCTA.",
      text: "Dispositivo para estudiar la respuesta de los vasos sanguíneos de la retina a la estimulación luminosa, en desarrollo en el IIS Biobizkaia. Es una pieza anular diseñada en SolidWorks e impresa en 3D que se acopla al objetivo de un OCT Heidelberg Spectralis sin tapar la óptica, con 12 LEDs RGB que emiten un estímulo de luz intermitente (flicker) mientras se adquiere una angiografía OCTA. Lo controla un ESP32-S3 con firmware propio: dos pantallas OLED y un encoder rotatorio permiten ajustar la frecuencia y el color del estímulo.",
      photos: [
        { src: "01.jpg", caption: "Pruebas del prototipo junto al equipo OCT" },
        { src: "02.jpg", caption: "Electrónica del prototipo: ESP32-S3, dos pantallas OLED y encoder" }
      ]
    },
    {
      id: "begitrack",
      title: "BEGITRACK",
      categories: ["Electrónica", "Investigación"],
      date: "2024 — Actualidad",
      icon: "eye-outline",
      summary: "Eye-tracking con cámara de eventos (DVS) que mide los micromovimientos de los ojos para buscar marcadores precoces de Alzheimer y Parkinson.",
      text: "Sistema de seguimiento ocular basado en una cámara de eventos (DVS, Dynamic Vision Sensor) que registra los micromovimientos de los ojos (microsacadas, deriva y temblor) para buscar marcadores precoces de Alzheimer y Parkinson. Nace de mi trabajo de desarrollo de software y hardware para ayudar en la detección de enfermedades en el grupo de Neuroimagen Computacional del IIS Biobizkaia.\n\nEl objetivo es un dispositivo compacto y de bajo coste que lleve este análisis fuera del laboratorio como herramienta de cribado. He diseñado la estructura mecánica, de perfiles de aluminio y piezas propias diseñadas en CAD e impresas en 3D para que el conjunto no transmita vibraciones, y el software de análisis en Python. Tras la prueba de concepto en el laboratorio, está prevista su validación clínica en el Hospital Universitario Cruces. Con BEGITRACK participé en el programa de aceleración BILA (2026).",
      photos: [
        { src: "01.jpg", caption: "Probando el prototipo: la cámara de eventos registra el ojo en tiempo real" },
        { src: "02.jpg", caption: "El prototipo, con la estructura de perfiles de aluminio y la mentonera" },
        { src: "03.jpg", caption: "Vista general del montaje" },
        { src: "04.jpg", caption: "Diseño CAD del soporte de la cámara" },
        { src: "05.jpg", caption: "Lámina de diseño de una de las piezas impresas en 3D" },
        { src: "hitos/bila-2026/03.jpg", caption: "Programa BILA (2026)" }
      ]
    },
    {
      id: "dstreams",
      title: "DSTREAMS · Computación en el edge",
      categories: ["Software", "Investigación"],
      date: "2022 — 2023",
      icon: "git-network-outline",
      summary: "Clúster de dispositivos embebidos en un rack impreso en 3D y un modelo de IA que predice su carga para aprovechar su capacidad ociosa. Publicado en la revista Deusto Ingeniería.",
      text: "Proyecto del equipo Deusto for Knowledge (D4K) de DeustoTech sobre el procesamiento de datos industriales a muy alta velocidad con edge computing. Participé en el diseño y la arquitectura de las comunicaciones de los dispositivos edge más relevantes del mercado y en la creación de modelos de optimización de computación distribuida.\n\nEn 2023 desarrollamos un prototipo con dispositivos embebidos de bajo coste, ordenados y refrigerados en un rack impreso en 3D. Un sistema de monitorización central registra en tiempo real la temperatura del núcleo, la carga de CPU y el uso de memoria de cada dispositivo. Con los datos de procesos industriales simulados entrenamos un modelo de IA que anticipa los picos de carga a partir de la hora del día, la temperatura y la carga reciente del procesador. Así se sabe qué dispositivo va a quedar libre para asignarle una tarea secundaria, aprovechando su capacidad ociosa con menos consumo energético.",
      links: [
        { label: "Artículo en Deusto Ingeniería n.º 25 (pág. 63)", url: "http://www.deusto-publicaciones.es/deusto/content/revistas/ingenieria25.pdf#page=65", icon: "document-text-outline" }
      ],
      photos: [
        { src: "01.jpg", caption: "El clúster de dispositivos embebidos en su rack impreso en 3D" },
        { src: "02.jpg", caption: "Mi puesto de trabajo con el clúster" },
        { src: "03.jpg", caption: "Artículo en la revista Deusto Ingeniería n.º 25 (2024)" }
      ]
    },
    {
      id: "drone-team",
      title: "Deusto Drone Team",
      categories: ["Electrónica", "Equipos"],
      date: "2018",
      icon: "airplane-outline",
      summary: "Diseño y cableado del dron inteligente del equipo para el Barcelona Smart Drone Challenge.",
      text: "Diseño y cableado del dron inteligente de DeustoDroneTeam, un equipo multidisciplinar de 6 estudiantes que participó en el Barcelona Smart Drone Challenge. También edité el vídeo del equipo.",
      videos: [
        { youtube: "vguudwVedEI", caption: "«Deusto Drone Team 2018», vídeo editado por mí" }
      ],
      photos: [
        { src: "01.jpg", caption: "El dron listo para volar" },
        { src: "02.jpg", caption: "Montaje y cableado en el taller" }
      ]
    },
    {
      id: "universidad",
      title: "Proyectos de clase",
      categories: ["Universidad"],
      date: "2017 — 2022",
      icon: "school-outline",
      summary: "Algunos proyectos y prácticas del doble grado en la Universidad de Deusto.",
      text: "Algunos de los proyectos y prácticas que hice durante el doble grado en Ingeniería Electrónica Industrial y Automática + Ingeniería Informática en la Universidad de Deusto.",
      photos: [
        { src: "01.jpg", caption: "Vehículo controlado con FPGA (2021)" },
        { src: "02.jpg", caption: "Prácticas de robótica industrial (2020)" },
        { src: "03.jpg", caption: "Prácticas de sistemas de control (curso 2019-2020)" }
      ]
    },
    {
      id: "cerebros-3d",
      title: "Mini-cerebros impresos en 3D",
      categories: ["Personal"],
      date: "2025 — 2026",
      icon: "cube-outline",
      summary: "Llaveros con el cerebro de mis compañeros, impresos en 3D a partir de sus propias resonancias magnéticas.",
      text: "Me gusta hacer cosas con las manos. A partir de resonancias magnéticas reales de mis compañeros, les he ido imprimiendo en 3D llaveros con su propio cerebro, a los que después doy el acabado a mano.",
      photos: [
        { src: "01.jpg", caption: "Algunos de los cerebros terminados" },
        { src: "02.jpg", caption: "Imprimiendo en 3D" },
        { src: "03.jpg", caption: "Recién salidos de la impresora" },
        { src: "04.jpg", caption: "Dando el acabado a mano" },
        { src: "05.jpg", caption: "Llavero terminado" }
      ]
    },
    {
      id: "huerta",
      title: "La huerta del pueblo",
      categories: ["Personal"],
      date: "2026",
      last: true,
      icon: "leaf-outline",
      summary: "Algo nada tecnológico: cultivar una huerta en mi pueblo, desde preparar la tierra hasta la cosecha.",
      text: "Fuera del laboratorio también me gusta trabajar con las manos en algo nada tecnológico: la huerta de mi pueblo. Este año la preparé en marzo y en septiembre ya estaba recogiendo la cosecha.",
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
      text: "Charla de divulgación sobre la retina, con una demostración en directo, para alumnos de 4.º de la ESO en Elorrio, dentro de la Semana de la Ciencia (Zientzia Astea).",
      photos: [
        { src: "01.jpg", caption: "Explicando cómo funciona la retina" },
        { src: "02.jpg" },
        { src: "03.jpg" },
        { src: "04.jpg" }
      ]
    },
    {
      id: "bila-2026",
      title: "Programa BILA",
      tag: "Programa",
      date: "Oct 2026",
      icon: "rocket-outline",
      text: "Programa de aceleración para investigadores con proyectos transferibles en IA, computación, tecnologías cuánticas y materiales avanzados, en el que participé con BEGITRACK: cuatro días intensivos con mentoring individual y presentación ante un panel.",
      photos: [
        { src: "01.jpg", caption: "Visita al ordenador cuántico IBM Quantum System Two" },
        { src: "02.jpg", caption: "Inicio del programa" },
        { src: "03.jpg", caption: "Sesión formativa" },
        { src: "04.jpg", caption: "Trabajo en grupo" },
        { src: "05.jpg", caption: "Visita a Ikerbasque" },
        { src: "06.jpg", caption: "Visita al centro de computación cuántica" },
        { src: "07.jpg", caption: "IBM Quantum System Two" },
        { src: "08.jpg", caption: "Sistema criogénico de un ordenador cuántico de IBM" }
      ]
    },
    {
      id: "aaic-2026",
      title: "AAIC 2026 · Londres",
      tag: "Congreso",
      date: "Jul 2026",
      icon: "mic-outline",
      text: "Presentación del póster «Eye-tracking Markers in Prodromal Alzheimer's: Relationships with Plasma Biomarkers, Cognition, and Visual Dysfunction» en la Alzheimer's Association International Conference.",
      photos: [
        { src: "01.jpg", caption: "Con el póster en AAIC 2026" }
      ]
    },
    {
      id: "ohbm-2026",
      title: "OHBM 2026 · Burdeos",
      tag: "Congreso",
      date: "Jun 2026",
      icon: "mic-outline",
      text: "Presentación del póster «A Modular Toolbox for Early Assessment of Visuo-Cognitive Function in Neurodegenerative Disorders» (BegiBrainTool) en el congreso anual de la Organization for Human Brain Mapping.",
      links: [
        { label: "BegiBrainTool en GitHub", url: "https://github.com/compneurobilbao/begibraintool", icon: "logo-github" }
      ],
      photos: [
        { src: "01.jpg", caption: "Con el póster de BegiBrainTool en OHBM 2026" }
      ]
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
      photos: [
        { src: "01.jpg", caption: "Con el póster en AAIC 2025" }
      ]
    },
    {
      id: "brainmodes-2024",
      title: "BrainModes 2024 · Bilbao",
      tag: "Organización",
      date: "Nov 2024",
      icon: "calendar-outline",
      text: "Desde el grupo de Neuroimagen Computacional del IIS Biobizkaia ayudé a organizar BrainModes 2024, conferencia internacional de neurociencia celebrada en Bilbao del 18 al 21 de noviembre de 2024: desde preparar las acreditaciones hasta el apoyo durante el evento.",
      photos: [
        { src: "01.jpg", caption: "Una de las sesiones en el auditorio" },
        { src: "02.jpg", caption: "Preparando las acreditaciones" },
        { src: "03.jpg", caption: "Todo listo para recibir a los asistentes" },
        { src: "04.jpg", caption: "Sesión de pósteres" },
        { src: "05.jpg", caption: "Pausa para el café" }
      ]
    },
    {
      id: "biomdlore-2023",
      title: "BIOMDLORE 2023",
      tag: "Congreso",
      date: "Oct 2023",
      icon: "mic-outline",
      text: "Charla oral en la 14.ª edición de la conferencia internacional BIOMDLORE, celebrada en Białystok (Polonia), sobre el detector portátil de gluten de mi TFG, ya defendido: «Design and Validation of an Optimal Mechanical Enclosure for Low-Cost Real-Time Gluten Detection Using NIR Sensor in a Portable Device». El trabajo se publicó después en una revista.",
      photos: [
        { src: "01.jpg", caption: "Mi charla en BIOMDLORE 2023" },
        { src: "02.jpg", caption: "La sala de la conferencia" }
      ]
    },
    {
      id: "premio-aecoc",
      title: "1.er Premio Académico AECOC",
      tag: "Premio",
      date: "Feb 2023",
      icon: "trophy-outline",
      text: "Primer premio de la 10.ª edición del Premio Académico de AECOC (Asociación de Empresas del Gran Consumo) en la categoría de Tecnología Aplicada, a nivel nacional, por mi trabajo sobre el detector portátil de gluten. La entrega fue en Madrid el 23 de febrero de 2023.",
      photos: [
        { src: "01.jpg", caption: "Con el premio en Madrid" },
        { src: "02.jpg", caption: "Entrega del premio" },
        { src: "03.jpg", caption: "Los premiados" },
        { src: "04.jpg" }
      ]
    },
    {
      id: "premio-inetum",
      title: "Premio al mejor TFG · Aula Inetum–Deusto",
      tag: "Premio",
      date: "Ene 2023",
      icon: "trophy-outline",
      text: "Primer premio al mejor Proyecto de Fin de Grado del Aula Tecnológica Inetum–Deusto, por el detector portátil de gluten por espectroscopía NIR.",
      photos: [
        { src: "01.jpg", caption: "Recogiendo el premio" },
        { src: "02.jpg", caption: "Foto de grupo de la entrega" }
      ]
    },
    {
      id: "hash-code-2020",
      title: "Google Hash Code 2020",
      tag: "Competición",
      date: "Feb 2020",
      icon: "code-slash-outline",
      text: "Participación en la ronda de clasificación online de la competición de programación por equipos, desde el hub de la Torre Iberdrola (Bilbao).",
      photos: [
        { src: "01.jpg", caption: "Con mi equipo en la Torre Iberdrola" }
      ]
    },
    {
      id: "ibm-quantum-2019",
      title: "IBM Quantum Computing Hackathon",
      tag: "Hackathon",
      date: "Dic 2019",
      icon: "planet-outline",
      text: "Participación en el hackathon de computación cuántica de IBM celebrado en Innolab (Bilbao).",
      photos: [
        { src: "01.jpg", caption: "Trabajando con el equipo" },
        { src: "02.jpg", caption: "Foto de grupo de los participantes" }
      ]
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
