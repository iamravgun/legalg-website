/* ==========================================================================
   assets/js/carousel.js — progressive enhancement for `.carousel` blocks:
   scroll-snap on mobile with functional dot indicators. No autoplay, no
   overlay arrows. Desktop grid layout is pure CSS and needs none of this.
   ========================================================================== */
(function () {
  "use strict";

  function enhance(carousel) {
    var track = carousel.querySelector(".carousel__track");
    if (!track) return;
    var cards = Array.prototype.slice.call(track.children);
    if (cards.length < 2) return;

    var dots = document.createElement("div");
    dots.className = "carousel__dots";
    dots.setAttribute("role", "tablist");
    dots.setAttribute("aria-label", "Slides");
    cards.forEach(function (card, i) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "carousel__dot";
      dot.setAttribute("aria-label", "Go to slide " + (i + 1) + " of " + cards.length);
      dot.setAttribute("aria-selected", i === 0 ? "true" : "false");
      dot.addEventListener("click", function () {
        // Smoothness comes from the track's CSS scroll-behavior, so reduced
        // motion (scroll-behavior: auto) is honoured with no JS check.
        track.scrollTo({ left: card.offsetLeft - track.offsetLeft });
      });
      dots.appendChild(dot);
    });
    carousel.appendChild(dots);

    var dotEls = Array.prototype.slice.call(dots.children);
    var ticking = false;
    function updateActiveDot() {
      var trackCenter = track.scrollLeft + track.clientWidth / 2;
      var closest = 0;
      var closestDist = Infinity;
      cards.forEach(function (card, i) {
        var cardCenter = card.offsetLeft - track.offsetLeft + card.clientWidth / 2;
        var dist = Math.abs(cardCenter - trackCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      dotEls.forEach(function (dot, i) {
        dot.setAttribute("aria-selected", i === closest ? "true" : "false");
      });
      ticking = false;
    }
    track.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          window.requestAnimationFrame(updateActiveDot);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  document.querySelectorAll(".carousel").forEach(enhance);
})();
