# PENDING — Peques Crew Excursion

Checklist de todo lo que falta por confirmar con el cliente o reemplazar
antes de publicar el sitio. Generado a partir de los placeholders y notas
dejadas directamente en el HTML/CSS/JS.

**Estructura actual del sitio (EN + ES):** `index.html` (Home), `fishing.html`,
`boat-gallery.html`, `book.html` — cada uno con su hreflang cruzado.

## 🔴 Decisión abierta (no técnica)

- [ ] **Dirección de tono/diseño**: se señaló que el sitio se sentía
      "corporativo / agencia de turismo". La nueva sección **Welcome to
      Cozumel / Bienvenido a Cozumel** (Home, entre el marquee y "The
      Experience") es un primer paso hacia un tono más local y personal,
      pero la dirección general sigue abierta a revisión.

## 🖼️ Media (no se incluye en este entregable — reemplazo manual)

- [ ] Video hero (~30s) → `video/hero.mp4`
- [ ] Fotos: `img/hero/`, `img/boat/`, `img/captain/`, `img/cozumel/`,
      `img/gallery/`, `img/species/`
- [ ] Logo del cliente → `img/logo/logo.png`

## 👤 Captain / Crew (NUEVO — nombre real, historia, foto)

- [ ] Nombre del capitán
- [ ] Biografía (~500 caracteres en `boat-gallery.html`): historia,
      experiencia, relación con Cozumel
- [ ] Versión corta de la biografía para el teaser de Home
      ("Meet the crew" / "Conoce a la tripulación")
- [ ] Foto del capitán

## 📞 Contacto

- [ ] Número real de WhatsApp — actualmente `52XXXXXXXXXX` en todas las
      páginas (botón flotante + FAQ) y en `js/booking.js` si se usa como
      respaldo
- [ ] Links reales de Instagram, Facebook, TikTok y TripAdvisor (footer,
      ahora con íconos SVG propios, actualmente apuntan a `#`)

## 📍 Ubicación

- [ ] Marina / punto exacto de salida en Cozumel
- [ ] Embed de Google Maps / Mapbox (Home → sección "Location")

## 🚤 El bote (NUEVO — antes no existía esta página)

- [ ] Nombre del bote
- [ ] Eslora, capacidad y descripción general (no publicar specs inventadas)
- [ ] Equipo: cañas, carretes, señuelos, fishfinder/electrónica
- [ ] Comodidades: sombra, baño, hielera, asientos
- [ ] Seguridad: chalecos salvavidas, permisos/licencias, radio/comunicación

## 🎣 Tipos y experiencia de pesca (NUEVO en `fishing.html`)

- [ ] Confirmar si se ofrece pesca de altura (Offshore/Deep Sea), costera
      (Reef/Nearshore), o ambas — actualmente ambas están marcadas
      "[Confirm with client]"
- [ ] Confirmar temporadas reales por especie (Mahi-Mahi, Wahoo, Pez Vela,
      Atún) — la franja de meses (ENE-DIC) es solo de referencia
- [ ] Edad mínima para niños a bordo

## 💳 Pago y precios

- [ ] Precios por duración (4h / 6h / 8h)
- [ ] **Link real de Mercado Pago** → reemplazar
      `MERCADO_PAGO_LINK` en `js/booking.js`
      (`https://www.mercadopago.com/PLACEHOLDER-LINK`)
- [ ] Confirmar si el link es único o distinto por paquete
- [ ] Monto del depósito y si es reembolsable
- [ ] Términos de reprogramación

## ✅ Qué incluye cada viaje (`fishing.html` y `book.html`)

Confirmados (ya en el sitio como "incluido"):
- Bote privado, capitán, equipo de pesca, carnada

Pendientes de confirmar (marcados visualmente como "pending" en el sitio):
- [ ] Licencia de pesca
- [ ] Agua / bebidas
- [ ] Hielo
- [ ] Comida / snacks
- [ ] Traslado hotel / marina
- [ ] Limpieza / preparación de la captura

## ❓ FAQ — pendientes de confirmación (`book.html`)

- [ ] Edad mínima para niños
- [ ] Inclusiones exactas (agua, bebidas, licencias)
- [ ] Política exacta de mal clima
- [ ] Marina / muelle de salida e instrucciones de abordaje
- [ ] Monto del depósito y términos de reprogramación

## ⭐ Testimonios

- [ ] Reemplazar las 2 reseñas placeholder por citas reales de huéspedes
- [ ] Link real al perfil de TripAdvisor

## ✅ Ya resuelto en este entregable

- [x] Estructura multi-página (Home / Fishing / Boat & Gallery / Book) en
      lugar de una sola página larga, en EN y ES
- [x] Nueva sección "Welcome to Cozumel" + teaser "Meet the Crew" en Home
- [x] Página dedicada `fishing.html`: la experiencia paso a paso, especies,
      temporadas de referencia, duraciones, qué incluye, qué llevar,
      primerizos/familias, expectativas reales
- [x] Página dedicada `boat-gallery.html`: el bote, equipo/comodidades/
      seguridad, capitán, galería por categorías (bote, capturas,
      clientes, Cozumel) con lightbox
- [x] Página dedicada `book.html`: configurador + botón Book & Pay como
      link real (no botón), con fallback deshabilitado hasta Mercado Pago,
      pasos después de reservar, FAQ completo
- [x] Footer con íconos SVG propios (Instagram/Facebook/TikTok/
      TripAdvisor) y crédito "Powered by ACLSYS"
- [x] `js/booking.js` actualizado: ya no inventa un total, solo refleja
      la selección del huésped; el botón alterna entre link real de
      Mercado Pago (TODO) e inerte según si el formulario está completo
