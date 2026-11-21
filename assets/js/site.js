/* Exoplanet Research Group Croatia: mobile menu, transit hero, footer year.
   Everything here is progressive enhancement; the pages work without it. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var slice = function (list) { return Array.prototype.slice.call(list); };

  /* ---------- Mobile menu ---------- */
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');

  if (header && toggle && nav) {
    var labelOpen = toggle.getAttribute('data-label-open') || toggle.textContent;
    var labelClose = toggle.getAttribute('data-label-close') || 'Close';
    var mobile = window.matchMedia('(max-width: 999.98px)');
    // everything outside the header is hidden from assistive tech while the menu covers the page
    var behind = slice(document.querySelectorAll('body > main, body > .site-footer, body > .skip-link'));

    var setOpen = function (open, returnFocus) {
      header.classList.toggle('menu-open', open);
      document.documentElement.classList.toggle('menu-locked', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? labelClose : labelOpen;
      behind.forEach(function (el) { if (open) el.setAttribute('inert', ''); else el.removeAttribute('inert'); });
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
      var items = slice(header.querySelectorAll('.brand, .lang a')).concat([toggle], slice(nav.querySelectorAll('a')));
      var n = items.length;
      var i = items.indexOf(document.activeElement);
      e.preventDefault();
      if (i < 0) { items[0].focus(); return; }
      items[(i + (e.shiftKey ? n - 1 : 1)) % n].focus();
    });

    var onChange = function () { if (!mobile.matches && header.classList.contains('menu-open')) setOpen(false, false); };
    if (mobile.addEventListener) mobile.addEventListener('change', onChange);
  }

  /* ---------- Transit hero (scroll-linked) ---------- */
  var stage = document.querySelector('.stage');
  var sky = stage && stage.querySelector('.sky');

  if (stage && sky && !reduceMotion.matches) {
    var ticking = false;
    var visible = true;
    var update = function () {
      ticking = false;
      if (!visible) return;
      var span = stage.offsetHeight - window.innerHeight;
      if (span <= 0) return;                                     // stage not pinned (short viewport)
      var top = -stage.getBoundingClientRect().top;
      var progress = Math.min(1, Math.max(0, top / span));
      var p = 0.2 + progress * 0.6;                              // planet travels from 20 % to 80 %
      var overlap = Math.max(0, 1 - Math.abs(p - 0.5) / 0.16);   // 1 when centred on the star
      var exit = Math.min(1, Math.max(0, (top - span) / (window.innerHeight * 0.35)));
      sky.style.setProperty('--p', p.toFixed(4));
      sky.style.setProperty('--dim', (overlap * 0.2).toFixed(4));
      sky.style.setProperty('--exit', exit.toFixed(4));
    };
    var request = function () { if (!ticking) { ticking = true; window.requestAnimationFrame(update); } };
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);

    // pause the breathing star and skip work while the hero is off screen
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        sky.classList.toggle('is-off', !visible);
        if (visible) request();
      }).observe(sky);
    }
    update();
  }

  /* ---------- Footer year ---------- */
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
