# PENDING — Peques Crew Excursion

Checklist de todo lo que falta por confirmar con el cliente o reemplazar
antes de publicar el sitio.

**Estructura actual (EN + ES):** `index.html` (Home), `fishing.html`,
`gallery.html`, `book.html` — el bote y el capitán ahora viven juntos en
`gallery.html` (antes eran `boat-gallery.html`).

## ✅ Ya resuelto en esta versión

- [x] Copy en español reescrito (más personal, menos "agencia") en Home,
      Fishing y Gallery
- [x] Nav simplificado a 4 páginas: Home / Fishing / Gallery / Book
- [x] Capa de animación moderna: **Lenis** (smooth scroll), **GSAP +
      ScrollTrigger** (scroll reveals con stagger, parallax sutil en las
      secciones `photo-break` / `boat-immersive` / `final-cta`),
      **Splitting.js** (intro letra por letra en los H1 de hero/page-hero)
- [x] Header con **glassmorphism** real (`backdrop-filter: blur`) al hacer
      scroll, en vez de color sólido
- [x] Tipografía actualizada: **Abril Fatface** (display/títulos) +
      **IBM Plex Mono** (detalle tipo "ticket náutico": eyebrows, precio
      del resumen de viaje, pasos numerados, franja de meses) + Inter
      (cuerpo de texto)
- [x] Todo con *progressive enhancement*: si el CDN de GSAP/Lenis/Splitting
      falla, el contenido (`.reveal`) se queda visible por defecto — nunca
      depende del JS externo para poder leerse

## 🔴 Decisión que se dejó fuera (por instrucción explícita)

- [ ] Se propuso una sección de "ruta trazada a mano" (Marina Cozumel →
      Canal de Yucatán) con datos de ejemplo (25 min, profundidad,
      hora de salida, precio). **Se omitió a petición explícita** — no
      se agregó ni se inventó ningún dato de esa propuesta.

## 🖼️ Media (no se incluye en este entregable — reemplazo manual)

- [ ] Video hero (~30s) → `video/hero.mp4`
- [ ] Fotos: `img/hero/`, `img/boat/`, `img/captain/`, `img/cozumel/`,
      `img/gallery/`
- [ ] Logo del cliente → `img/logo/logo.png`

## 👤 Capitán / tripulación

- [ ] Nombre del capitán, biografía (~500 caracteres en `gallery.html`),
      versión corta para el teaser de Home, foto

## 📞 Contacto

- [ ] Número real de WhatsApp — actualmente `52XXXXXXXXXX` en todas las
      páginas y en `js/booking.js`
- [ ] Links reales de Instagram, Facebook, TikTok y TripAdvisor (footer)

## 📍 Ubicación

- [ ] Marina / punto exacto de salida
- [ ] Embed de Google Maps / Mapbox (Home → "Location")

## 🚤 La embarcación (`gallery.html`)

- [ ] Nombre, capacidad, equipo, amenidades, seguridad — todo marcado
      como `[ placeholder ]`, no publicar con specs inventadas

## 🎣 Pesca (`fishing.html`)

- [ ] Confirmar tipos de pesca reales (curricán / fondo, u otros)
- [ ] Calendario real de temporadas (hoy dice "[ AQUÍ VA EL CALENDARIO
      REAL DE TEMPORADAS ]")
- [ ] Qué incluye exactamente cada duración (equipo confirmado; agua,
      bebidas, snacks, licencias — pendientes, ya marcados como "por
      confirmar" con las píldoras grises en el sitio)

## 💳 Pago y precios

- [ ] Precios por duración (4h / 6h / 8h) — hoy dice "Precio a solicitar"
- [ ] **Link real de Mercado Pago** → reemplazar `MERCADO_PAGO_LINK` en
      `js/booking.js`
- [ ] Monto del depósito y términos de reprogramación (FAQ en `book.html`)

## ❓ FAQ — pendientes de confirmación

- [ ] Edad mínima para niños
- [ ] Política exacta de mal clima
- [ ] Marina / muelle de salida
- [ ] Monto del depósito y reprogramación

## ⭐ Testimonios

- [ ] Reemplazar las 2 reseñas placeholder por citas reales
- [ ] Link real al perfil de TripAdvisor
