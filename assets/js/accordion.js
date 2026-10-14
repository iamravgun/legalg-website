/* ==========================================================================
   assets/js/accordion.js — one-open-at-a-time disclosure for .accordion.
   Markup is server-rendered with every answer readable; adding .is-enhanced
   is what lets CSS collapse the closed items, so without JS nothing is lost.
   Triggers are real <button>s: Enter and Space work natively.
   ========================================================================== */
(function () {
  "use strict";

  function setOpen(item, open) {
    item.classList.toggle("is-open", open);
    item.querySelector(".accordion__trigger").setAttribute("aria-expanded", String(open));
  }

  document.querySelectorAll(".accordion").forEach(function (accordion) {
    accordion.classList.add("is-enhanced");
    accordion.addEventListener("click", function (e) {
      var trigger = e.target.closest(".accordion__trigger");
      if (!trigger || !accordion.contains(trigger)) return;
      var item = trigger.closest(".accordion__item");
      var opening = !item.classList.contains("is-open");
      accordion.querySelectorAll(".accordion__item.is-open").forEach(function (other) {
        setOpen(other, false);
      });
      if (opening) setOpen(item, true);
    });
  });
})();
