/* Exoplanet Research Group Croatia: mobile menu, transit hero, footer year.
   Everything here is progressive enhancement; the pages work without it. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- Mobile menu ---------- */
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');

  if (header && toggle && nav) {
    var labelOpen = toggle.getAttribute('data-label-open') || toggle.textContent;
    var labelClose = toggle.getAttribute('data-label-close') || 'Close';
    var mobile = window.matchMedia('(max-width: 859.98px)');

    var setOpen = function (open, returnFocus) {
      header.classList.toggle('menu-open', open);
      document.documentElement.classList.toggle('menu-locked', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? labelClose : labelOpen;
      if (open) {
        var first = nav.querySelector('a');
        if (first) first.focus();
      } else if (returnFocus) {
        toggle.focus();
      }
    };

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true', true);
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && header.classList.contains('menu-open')) setOpen(false, false);
    });

    document.addEventListener('keydown', function (e) {
      if (!header.classList.contains('menu-open')) return;
      if (e.key === 'Escape') { setOpen(false, true); return; }
      if (e.key !== 'Tab') return;
      // keep focus inside the open menu, in visual order: brand, languages, close button, menu links
      var items = Array.prototype.slice.call(header.querySelectorAll('.brand, .lang a'))
        .concat([toggle], Array.prototype.slice.call(nav.querySelectorAll('a')));
      var n = items.length;
      var i = items.indexOf(document.activeElement);
      e.preventDefault();
      if (i < 0) { items[0].focus(); return; }
      items[(i + (e.shiftKey ? n - 1 : 1)) % n].focus();
    });

    // closing when the viewport grows past the mobile breakpoint
    var onChange = function () { if (!mobile.matches && header.classList.contains('menu-open')) setOpen(false, false); };
    if (mobile.addEventListener) mobile.addEventListener('change', onChange);
  }

  /* ---------- Transit hero (scroll-linked) ---------- */
  var stage = document.querySelector('.stage');
  var sky = stage && stage.querySelector('.sky');

  if (stage && sky && !reduceMotion.matches) {
    var ticking = false;
    var update = function () {
      ticking = false;
      var span = stage.offsetHeight - window.innerHeight;
      if (span <= 0) return;
      var progress = Math.min(1, Math.max(0, -stage.getBoundingClientRect().top / span));
      var p = 0.1 + progress * 0.8;                              // planet travels from 10 % to 90 %
      var overlap = Math.max(0, 1 - Math.abs(p - 0.5) / 0.16);   // 1 when centred on the star
      sky.style.setProperty('--p', p.toFixed(4));
      sky.style.setProperty('--dim', (overlap * 0.12).toFixed(4));
    };
    var request = function () { if (!ticking) { ticking = true; window.requestAnimationFrame(update); } };
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    update();
  }

  /* ---------- Footer year ---------- */
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
