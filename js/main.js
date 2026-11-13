/* =========================================================
   ALTURA COFFEE CO. — JavaScript
   Cada bloque es una función pequeña e independiente:
   1. Menú para celular
   2. Sombra del menú y botón "volver arriba" al hacer scroll
   3. Resaltar la sección activa en el menú
   4. Animación de aparición al hacer scroll
   5. Contadores animados
   6. Copiar colores de la paleta
   7. Validación del formulario de contacto
   8. Año actual en el pie de página
   ========================================================= */

/* ---------- 1. MENÚ PARA CELULAR ---------- */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
  navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

// Cierra el menú al elegir una opción
document.querySelectorAll('.nav__link').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ---------- 2. EFECTOS AL HACER SCROLL ---------- */
const header = document.getElementById('header');
const toTop = document.getElementById('toTop');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 40;
  header.classList.toggle('is-scrolled', scrolled);           // sombra en el menú
  toTop.classList.toggle('is-visible', window.scrollY > 600); // botón "volver arriba"
});

/* ---------- 3. SECCIÓN ACTIVA EN EL MENÚ ---------- */
// IntersectionObserver "observa" cada sección y avisa cuando entra en pantalla
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav__link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    // La sección "brand" pertenece visualmente a Inicio
    const id = entry.target.id === 'brand' ? 'home' : entry.target.id;
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
    });
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach((section) => sectionObserver.observe(section));

/* ---------- 4. APARICIÓN AL HACER SCROLL ---------- */
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // solo se anima una vez
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  // Pequeño retraso escalonado para que los elementos vecinos no aparezcan todos juntos
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  revealObserver.observe(el);
});

/* ---------- 5. CONTADORES ANIMADOS ---------- */
function animateCounter(el) {
  const target = Number(el.dataset.target);   // número final (atributo data-target)
  const suffix = el.dataset.suffix || '';     // texto extra, ej. "%" o " m"
  const duration = 1800;                      // milisegundos
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // empieza rápido y frena al final
    el.textContent = Math.floor(eased * target).toLocaleString('en-US') + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll('.counter').forEach((counter) => counterObserver.observe(counter));

/* ---------- 6. COPIAR COLORES DE LA PALETA ---------- */
const toast = document.getElementById('toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  setTimeout(() => toast.classList.remove('is-visible'), 2200);
}

document.querySelectorAll('.swatch').forEach((swatch) => {
  swatch.addEventListener('click', async () => {
    const color = swatch.dataset.color;
    try {
      await navigator.clipboard.writeText(color);
      showToast(`Color ${color} copied!`);
    } catch {
      showToast(`Color code: ${color}`);
    }
  });
});

/* ---------- 7. VALIDACIÓN DEL FORMULARIO ---------- */
// Nota: GitHub Pages no tiene servidor, así que el formulario solo valida
// los datos y muestra un mensaje de confirmación.
const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');

function setError(input, message) {
  input.classList.toggle('is-invalid', Boolean(message));
  input.parentElement.querySelector('.form__error').textContent = message;
}

form.addEventListener('submit', (event) => {
  event.preventDefault(); // evita que la página se recargue

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let isValid = true;

  if (name.value.trim().length < 2) { setError(name, 'Please enter your name.'); isValid = false; }
  else setError(name, '');

  if (!emailPattern.test(email.value.trim())) { setError(email, 'Please enter a valid email.'); isValid = false; }
  else setError(email, '');

  if (message.value.trim().length < 10) { setError(message, 'Your message should have at least 10 characters.'); isValid = false; }
  else setError(message, '');

  if (isValid) {
    success.textContent = `Thank you, ${name.value.trim()}! We'll reply within 24 hours. ☕`;
    form.reset();
  } else {
    success.textContent = '';
  }
});

/* ---------- 8. AÑO ACTUAL ---------- */
document.getElementById('year').textContent = new Date().getFullYear();
