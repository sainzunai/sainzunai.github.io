# Portfolio · Unai Sainz Lugarezaresti

CV online y portfolio de proyectos. Es una web estática (HTML, CSS y JavaScript, sin compilación) pensada para publicarse en GitHub Pages.

## Ver la web en local

Abre `index.html` con doble clic. No hace falta servidor.

## Editar el contenido

- **Trayectoria, proyectos, hitos y publicaciones:** [assets/js/data.js](assets/js/data.js). Cada elemento es un bloque `{ ... }`; para añadir uno nuevo, copia un bloque existente y cámbialo. Las instrucciones están al principio del fichero.
- **Sobre mí, "Qué hago", competencias y datos de contacto:** directamente en [index.html](index.html).

## Fotos y vídeos

GitHub no está pensado para guardar fotos pesadas, así que en el repositorio solo hay versiones optimizadas (unos 14 MB en total). Los vídeos se enlazan desde YouTube.

- **Originales:** están en el NAS (`\\NAS325F24\Unai\Academico\3.Imagenes`) y se copian a `input_figuras/`. Esa carpeta no se sube a GitHub.
- **Lista de fotos de la web:** [tools/fotos.csv](tools/fotos.csv). Cada fila indica la foto original, dónde va en `assets/images/` y, si hace falta, un recorte.
- **Generar las fotos:** ejecuta el script. Crea dos tamaños (1600 px para el visor y 640 px en `thumbs/` para tarjetas y miniaturas) y elimina los metadatos, incluida la ubicación GPS del móvil:
  ```powershell
  powershell -ExecutionPolicy Bypass -File tools/optimizar-fotos.ps1
  ```
- **Mostrar las fotos:** lístalas en `photos` dentro de `data.js`. La primera foto es la portada:
  ```js
  photos: ["01.jpg", { src: "02.jpg", caption: "Montaje de la PCB" }]
  ```
- **Vídeos de YouTube:** añade `videos: [{ youtube: "DJI5ZQWqFBI", caption: "..." }]`. En local, los vídeos de YouTube solo se ven si la web se sirve por http; al abrir `index.html` con doble clic, YouTube muestra el error 153. En GitHub Pages funcionan.

Cada proyecto o hito tiene su propio enlace para compartirlo, por ejemplo `#proyectos/moto-team`.

## Créditos

Basado en la plantilla [vCard](https://github.com/codewithsadee/vcard-personal-portfolio) de codewithsadee (licencia MIT, ver [LICENSE](LICENSE)).
