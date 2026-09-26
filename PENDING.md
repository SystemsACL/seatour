# Pending from client

Site architecture (Sep 2026): Home / Fishing / Boat & Gallery / Book, in
/en and /es. Boat + Gallery were merged into one page (boat-gallery.html).
Home was lightened to previews that link out to Fishing, Boat & Gallery
and Book — the full trip builder and FAQ now live only on Book
(book.html). Shared /css, /js, /img, /video sit at the root. Root
/index.html redirects to /en/ for now.

This build uses placeholders where real content wasn't available. Replace before launch:

- [ ] Logo (currently a small dashed placeholder box next to the brand name in nav/footer, ~25×15px) → drop the real file at img/logo/logo.png (referenced via CSS background-image, contain-fit)
- [ ] Hero video → /video/hero.mp4
- [ ] Real photos → /img/hero, /img/boat, /img/species, /img/gallery, /img/cozumel, /img/captain
- [ ] Business data: business name, boat name, capacity, equipment, amenities, safety info
- [ ] Real species list, seasons, descriptions
- [ ] Real prices per duration (4h/6h/8h) — booking.js intentionally shows "Price on request" until provided
- [ ] Real Mercado Pago payment link → js/booking.js, replace MERCADO_PAGO_LINK placeholder
- [ ] Real reviews / TripAdvisor link
- [ ] Deposit amount / rescheduling terms (cancellation FAQ confirms deposit is non-refundable, exact amount pending)
- [ ] Social links (Instagram, Facebook, TikTok, TripAdvisor) in footer — currently "#". Icons are generic placeholders; swap for official brand assets if pixel-perfect logos are required.
- [ ] Captain's ~500-character biography → boat-gallery.html, "Meet the captain" section
- [ ] WhatsApp number → replace 52XXXXXXXXXX (used in the floating WhatsApp button on every page, plus the FAQ "Message us on WhatsApp" link on Book)
- [ ] FAQ answers marked "pending confirmation with the client" (min. age for kids, exact inclusions, weather/cancellation policy, marina/pier) → confirm real answers
- [ ] Map: departure marina / exact location, then embed Google Maps or Mapbox in index.html
