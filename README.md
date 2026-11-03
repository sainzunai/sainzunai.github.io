# Portfolio · Unai Sainz Lugarezaresti

CV online y portfolio de proyectos. Es una web estática (HTML, CSS y JavaScript, sin compilación) pensada para publicarse en GitHub Pages.

## Ver la web en local

Abre `index.html` con doble clic. No hace falta servidor.

## Editar el contenido

- **Trayectoria, proyectos, hitos y publicaciones:** [assets/js/data.js](assets/js/data.js). Cada elemento es un bloque `{ ... }`; para añadir uno nuevo, copia un bloque existente y cámbialo. Las instrucciones están al principio del fichero.
- **Sobre mí, "Qué hago", competencias y datos de contacto:** directamente en [index.html](index.html).

## Añadir fotos

1. Copia las fotos en la carpeta del elemento correspondiente:
   - `assets/images/experiencia/<id>/`
   - `assets/images/proyectos/<id>/`
   - `assets/images/hitos/<id>/`
2. Lista los ficheros en `photos` dentro de `data.js`. La primera foto es la portada:
   ```js
   photos: ["01.jpg", { src: "02.jpg", caption: "Montaje de la PCB" }]
   ```
3. Usa fotos optimizadas (unos 1600 px de lado mayor y menos de 400 KB) para que la web cargue rápido. Los originales pueden ir en `fotos-originales/`, que no se sube a GitHub.

Cada proyecto o hito tiene su propio enlace para compartirlo, por ejemplo `#proyectos/moto-team`.

## Créditos

Basado en la plantilla [vCard](https://github.com/codewithsadee/vcard-personal-portfolio) de codewithsadee (licencia MIT, ver [LICENSE](LICENSE)).
