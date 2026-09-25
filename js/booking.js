/* ==========================================================
   FISHING WEBSITE — COZUMEL
   booking.js — "Build Your Trip" summary + Mercado Pago handoff
   NOTE: Real prices were not provided by the client.
   This script deliberately does NOT calculate or invent a
   total. It only reflects the guest's selections back to them.
   Once real pricing is provided, wire it in at the point
   marked TODO below.
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('#trip-builder');
  if (!form) return;

  // TODO: replace with the real Mercado Pago hosted payment link.
  var MERCADO_PAGO_LINK = 'https://www.mercadopago.com/PLACEHOLDER-LINK';

  var dateInput = form.querySelector('#trip-date');
  var guestsInput = form.querySelector('#trip-guests');
  var durationSelect = form.querySelector('#trip-duration');
  var targetSelect = form.querySelector('#trip-target');

  var sumDate = document.querySelector('#summary-date');
  var sumGuests = document.querySelector('#summary-guests');
  var sumDuration = document.querySelector('#summary-duration');
  var sumTarget = document.querySelector('#summary-target');
  var sumTotal = document.querySelector('#summary-total');
  var bookBtn = document.querySelector('#book-and-pay');

  function updateSummary() {
    sumDate.textContent = dateInput.value || '—';
    sumGuests.textContent = guestsInput.value ? guestsInput.value + ' guests' : '—';
    sumDuration.textContent = durationSelect.value ? durationSelect.options[durationSelect.selectedIndex].text : '—';
    sumTarget.textContent = targetSelect.value ? targetSelect.options[targetSelect.selectedIndex].text : '—';

    // TODO: once the client provides real pricing per duration/guest count,
    // calculate and display it here instead of this placeholder.
    sumTotal.textContent = 'Price on request';

    var complete = dateInput.value && guestsInput.value && durationSelect.value && targetSelect.value;
    // #book-and-pay is a real <a target="_blank"> so the browser handles the
    // new-tab open natively (no window.open — avoids popup-blocker/file:// quirks).
    // We only toggle whether it's a real link or an inert placeholder.
    if (complete) {
      bookBtn.href = MERCADO_PAGO_LINK;
      bookBtn.removeAttribute('aria-disabled');
    } else {
      bookBtn.href = '#';
      bookBtn.setAttribute('aria-disabled', 'true');
    }
  }

  [dateInput, guestsInput, durationSelect, targetSelect].forEach(function (el) {
    el.addEventListener('change', updateSummary);
    el.addEventListener('input', updateSummary);
  });

  updateSummary();

  bookBtn.addEventListener('click', function (e) {
    if (bookBtn.getAttribute('aria-disabled') === 'true') e.preventDefault();
  });
});
