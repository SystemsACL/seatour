/* ==========================================================
   FISHING WEBSITE — COZUMEL
   booking.js — "Armar mi día en el mar" card-based builder.

   Scope (per CTO decision doc): this file owns builder STATE,
   validation, and the Mercado Pago handoff. The small visual
   feedback (card pop, progress dots, preview fade) is plain
   CSS transitions triggered by class toggles here — no GSAP
   dependency, so the booking flow never depends on a CDN.

   NOTE: Real prices were not provided by the client. This
   script deliberately does NOT calculate or invent a total.
   Once real pricing is provided, wire it in at the TODO below.
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {
  var root = document.querySelector('.builder-experience');
  if (!root) return;

  var dateInput = root.querySelector('#trip-date');
  var groups = root.querySelectorAll('.choice-grid');
  var progressSteps = root.querySelectorAll('.builder-progress .step');

  var sumDate = root.querySelector('#summary-date');
  var sumGuests = root.querySelector('#summary-guests');
  var sumDuration = root.querySelector('#summary-duration');
  var sumTarget = root.querySelector('#summary-target');
  var sumTotal = root.querySelector('#summary-total');
  var bookBtn = root.querySelector('#book-and-pay');

  var state = { date: '', guests: '', duration: '', target: '' };

  /* ---------- Card selection (single-select per group) ---------- */
  groups.forEach(function (group) {
    var field = group.getAttribute('data-field');
    group.querySelectorAll('.choice-card').forEach(function (card) {
      card.addEventListener('click', function () {
        group.querySelectorAll('.choice-card').forEach(function (c) {
          c.classList.remove('is-selected');
          c.setAttribute('aria-pressed', 'false');
        });
        card.classList.add('is-selected');
        card.setAttribute('aria-pressed', 'true');
        state[field] = card.getAttribute('data-value');
        state[field + 'Label'] = card.querySelector('.choice-label').textContent.trim();
        update();
      });
    });
  });

  if (dateInput) {
    dateInput.addEventListener('change', function () {
      state.date = dateInput.value;
      update();
    });
  }

  /* ---------- Live preview + progress + CTA ---------- */
  function setFilled(el, text, filled) {
    if (!el) return;
    el.textContent = text;
    el.closest('li').classList.toggle('is-filled', filled);
  }

  function formatDate(iso) {
    if (!iso) return '—';
    var d = new Date(iso + 'T00:00:00');
    if (isNaN(d)) return iso;
    return d.toLocaleDateString(document.documentElement.lang === 'es' ? 'es-MX' : 'en-US', {
      day: 'numeric', month: 'long'
    });
  }

  function update() {
    setFilled(sumDate, formatDate(state.date), !!state.date);
    setFilled(sumGuests, state.guestsLabel || '—', !!state.guests);
    setFilled(sumDuration, state.durationLabel || '—', !!state.duration);
    setFilled(sumTarget, state.targetLabel || '—', !!state.target);

    // TODO: once the client provides real pricing per duration/guest
    // count, calculate and display it here instead of this placeholder.
    sumTotal.textContent = document.documentElement.lang === 'es' ? 'Precio a confirmar' : 'Price on request';

    var filledCount = [state.date, state.guests, state.duration, state.target].filter(Boolean).length;
    progressSteps.forEach(function (step, i) {
      step.classList.toggle('is-done', i < filledCount);
      step.classList.toggle('is-active', i === filledCount);
    });

    var complete = state.date && state.guests && state.duration && state.target;
    if (bookBtn) {
      if (complete) {
        // TODO: replace with the real Mercado Pago hosted payment link.
        bookBtn.href = 'https://www.mercadopago.com/PLACEHOLDER-LINK';
        bookBtn.removeAttribute('aria-disabled');
      } else {
        bookBtn.href = '#';
        bookBtn.setAttribute('aria-disabled', 'true');
      }
    }
  }

  if (bookBtn) {
    bookBtn.addEventListener('click', function (e) {
      if (bookBtn.getAttribute('aria-disabled') === 'true') e.preventDefault();
    });
  }

  update();
});
