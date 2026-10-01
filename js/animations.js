/* ==========================================================
   FISHING WEBSITE — COZUMEL
   animations.js — Lenis smooth scroll + GSAP/ScrollTrigger reveals
   + Splitting.js headline intro + subtle parallax on photo sections.

   PROGRESSIVE ENHANCEMENT:
   If GSAP/ScrollTrigger fail to load (CDN blocked, offline, etc.)
   this file exits early and every ".reveal" element stays fully
   visible via the CSS default in styles.css (".reveal{opacity:1}").
   Nothing here should ever be required for the page to be usable.
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {

  var hasGSAP = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
  if (!hasGSAP) return; // graceful fallback: content stays visible, no animation

  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add('gsap-ready');

  /* ---------- Lenis smooth scroll, synced to GSAP's ticker ---------- */
  if (typeof window.Lenis !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    // Expose it so main.js can stop()/start() it when the mobile nav or
    // the lightbox opens — otherwise Lenis keeps scrolling the page
    // behind a "locked" (overflow:hidden) body, since it listens to
    // wheel/touch on window directly and doesn't check that CSS.
    window.__lenis = lenis;

    // Lenis already provides its own smooth scrolling. Leaving the
    // native CSS `scroll-behavior: smooth` on top of it means both
    // systems fight over the scroll position on every anchor click
    // (#ocean-marquee, #faq, etc.), which is the stutter/jank bug.
    document.documentElement.style.scrollBehavior = 'auto';
  }

  /* ---------- Keep ScrollTrigger positions accurate ---------- */
  // Fonts/images finishing after DOMContentLoaded change section heights;
  // without this, trigger points drift and reveals fire at the wrong scroll spot.
  window.addEventListener('load', function () { ScrollTrigger.refresh(); });

  /* ---------- Scroll reveal for every .reveal element ---------- */
  var reveals = gsap.utils.toArray('.reveal');
  if (reveals.length) {
    gsap.set(reveals, { opacity: 0, y: 26 });
    ScrollTrigger.batch(reveals, {
      start: 'top 88%',
      once: true,
      onEnter: function (batch) {
        gsap.to(batch, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.08 });
      }
    });
  }

  /* ---------- Splitting.js — headline intro on hero / page-hero ---------- */
  if (typeof window.Splitting !== 'undefined') {
    var headline = document.querySelector('.hero h1, .page-hero h1');
    if (headline) {
      headline.classList.add('split-words');
      var results = Splitting({ target: headline, by: 'chars' });
      var chars = results[0] ? results[0].chars : [];
      if (chars.length) {
        gsap.set(chars, { opacity: 0, y: '0.6em' });
        gsap.to(chars, {
          opacity: 1, y: '0em', duration: 0.7, ease: 'power3.out',
          stagger: 0.012, delay: 0.15
        });
      }
    }
  }

  /* ---------- Subtle parallax on full-bleed photo sections ---------- */
  var parallaxSections = document.querySelectorAll('.photo-break, .boat-immersive, .final-cta');
  parallaxSections.forEach(function (section) {
    var bg = section.querySelector('.placeholder');
    if (!bg) return;
    gsap.fromTo(bg,
      { yPercent: -8 },
      {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true }
      }
    );
  });

});
