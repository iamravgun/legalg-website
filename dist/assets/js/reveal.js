/* ==========================================================================
   assets/js/reveal.js — the site's one scroll pattern. Elements marked
   [data-reveal] (card grids, category panels, testimonials only) fade up 12px
   once, at 15% visibility, then are unobserved.
   - Anything already on screen at load is never hidden: above-the-fold
     content renders immediately, always.
   - Reduced motion or no IntersectionObserver: nothing is touched.
   - Stagger: 60ms steps for the first 3 items in a batch, then no more.
   ========================================================================== */
(function () {
  "use strict";

  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var STEP_MS = 60;
  var MAX_STAGGERED = 3;

  var items = Array.prototype.filter.call(document.querySelectorAll("[data-reveal]"), function (el) {
    return el.getBoundingClientRect().top > window.innerHeight;
  });
  if (!items.length) return;

  function finish(e) {
    if (e.target !== e.currentTarget || e.propertyName !== "opacity") return;
    var el = e.currentTarget;
    el.classList.remove("reveal-in");
    el.style.transitionDelay = "";
    el.removeEventListener("transitionend", finish);
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries
        .filter(function (entry) {
          return entry.isIntersecting;
        })
        .map(function (entry) {
          return entry.target;
        })
        .sort(function (a, b) {
          return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
        })
        .forEach(function (el, i) {
          observer.unobserve(el);
          el.style.transitionDelay = Math.min(i, MAX_STAGGERED - 1) * STEP_MS + "ms";
          el.addEventListener("transitionend", finish);
          el.classList.add("reveal-in");
          el.classList.remove("reveal-pending");
        });
    },
    { threshold: 0.15 }
  );

  items.forEach(function (el) {
    el.classList.add("reveal-pending");
    observer.observe(el);
  });
})();
