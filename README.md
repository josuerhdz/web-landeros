# Altura Coffee Co. — Business Internet Site

Sitio web de una empresa ficticia de café de especialidad mexicano, hecho con **HTML, CSS y JavaScript puros** (sin frameworks), listo para publicarse en **GitHub Pages**.

## 📁 Estructura del proyecto

```
altura-coffee/
├── index.html        → Contenido y estructura de la página (las 6 secciones)
├── css/styles.css    → Diseño: colores, tipografías, animaciones y responsive
├── js/main.js        → Interactividad: menú, animaciones al hacer scroll, formulario
└── assets/
    ├── logo.svg      → Logotipo (isotipo + nombre)
    ├── isotipo.svg   → Isotipo (solo el símbolo)
    └── mascota.svg   → Mascota "Tito"
```

## 🚀 Cómo publicarlo en GitHub Pages

1. Entra a GitHub y crea un repositorio nuevo **público** (por ejemplo `altura-coffee`).
2. Haz clic en **"uploading an existing file"** y arrastra **el contenido** de la carpeta (`index.html`, `css`, `js`, `assets`, `README.md`). `index.html` debe quedar en la raíz del repositorio.
3. Haz clic en **Commit changes**.
4. Ve a **Settings → Pages**.
5. En **Source** elige **Deploy from a branch**, rama **main**, carpeta **/ (root)** y da **Save**.
6. Espera 1–2 minutos y recarga: aparecerá tu link, por ejemplo `https://TU-USUARIO.github.io/altura-coffee/`.

## ✏️ Lo que debes cambiar

- **Link del video (elemento 9):** en `index.html` busca `REEMPLAZA` y pon el link de tu video en el `href`.
- Si quieres otro nombre de empresa, usa *Buscar y reemplazar* "Altura" en `index.html`.

## ✅ Requisitos cubiertos

| Requisito | Dónde está |
|---|---|
| 1. Inicio | Sección `#home` |
| 2. ¿Quiénes somos? | Sección `#about` |
| 3. Productos | Sección `#products` |
| 4. Cadena de valor | Sección `#value-chain` |
| 5. Preguntas frecuentes | Sección `#faq` |
| 6. Contacto | Sección `#contact` |
| Nombre comercial | Inicio (título grande) y menú |
| Historia | About Us → *Our story* (línea del tiempo) |
| Misión / Visión / Valores | About Us |
| Descripción de actividades | About Us → *What we do* |
| Componente de la mezcla de productos | Products → *Chiapas Highland* (ficha detallada) |
| Perfil del consumidor | Products → *Consumer profile* |
| Link a video | Value Chain → *Watch video* |
| Logotipo, isotipo, eslogan, colorimetría, mascota | Sección *Brand identity* (debajo del inicio) |

## 🧠 Cómo explicar el código (resumen)

**HTML (`index.html`)** — Es el esqueleto. Cada apartado es un `<section>` con un `id` (`#home`, `#about`…). El menú usa enlaces `<a href="#about">` que llevan a cada sección. Las preguntas frecuentes usan `<details>` y `<summary>`, que abren y cierran solos sin JavaScript.

**CSS (`css/styles.css`)** — Está dividido en 14 bloques numerados.
- **Variables** (`:root`): los colores de la marca se definen una sola vez (`--terracotta`, `--espresso`…) y se reutilizan en todo el sitio.
- **Grid y Flexbox**: acomodan las tarjetas en columnas.
- **Animaciones**: `@keyframes float` hace flotar a la mascota; la clase `.reveal` hace que los elementos aparezcan suavemente.
- **Responsive** (`@media`): en tablet las columnas bajan a 2 y en celular a 1; además aparece el menú hamburguesa.
- **Accesibilidad**: `prefers-reduced-motion` desactiva animaciones si el usuario lo pide en su sistema.

**JavaScript (`js/main.js`)** — 8 funciones cortas:
1. Abrir/cerrar el menú en celular.
2. Sombra del menú y botón "volver arriba" al hacer scroll.
3. Resaltar en el menú la sección que estás viendo.
4. Animación de aparición con `IntersectionObserver` (detecta cuándo algo entra en pantalla).
5. Contadores que suben de 0 al número final.
6. Copiar el código de un color al hacer clic en la paleta.
7. Validar el formulario de contacto (nombre, correo y mensaje).
8. Poner el año actual en el pie de página.

> Nota: GitHub Pages solo publica archivos estáticos (no tiene servidor), por eso el formulario valida los datos y muestra un mensaje de confirmación, pero no envía correos.
