/* ==========================================================================
   assets/js/nav.js — header scroll state and the desktop mega menu.
   Mobile drawer lives in assets/js/drawer.js.
   Depends on window.NAVIGATION (data/navigation.js) being loaded first.
   ========================================================================== */
(function () {
  "use strict";

  var NAV = window.NAVIGATION;
  var header = document.getElementById("site-header");
  if (!header || !NAV) return;

  /* ---- Sticky header scroll state, rAF-throttled ------------------------ */
  (function scrollState() {
    var ticking = false;
    function apply() {
      header.classList.toggle("is-scrolled", window.scrollY > 120);
      ticking = false;
    }
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          window.requestAnimationFrame(apply);
          ticking = true;
        }
      },
      { passive: true }
    );
    apply();
  })();

  /* ======================================================================
     Desktop mega menu
     ====================================================================== */
  (function megaMenu() {
    var megaMenu = document.getElementById("mega-menu");
    var railsContainer = document.getElementById("mega-menu-rails");
    var panelsContainer = document.getElementById("mega-menu-panels");
    var blurb = document.getElementById("mega-menu-blurb");
    var viewAllLink = document.getElementById("mega-menu-viewall");
    var viewAllText = document.getElementById("mega-menu-viewall-text");
    var triggers = Array.prototype.slice.call(document.querySelectorAll(".primary-nav__trigger"));
    if (!megaMenu || !triggers.length) return;

    var triggerByCategory = {};
    triggers.forEach(function (t) {
      triggerByCategory[t.dataset.category] = t;
    });
    var headerStops = triggers.concat(
      Array.prototype.slice.call(document.querySelectorAll(".main-bar__actions .btn"))
    );

    var builtCategories = {};
    var lastGroupByCategory = {};
    var openCategorySlug = null;
    var enterTimer = null;
    var leaveTimer = null;
    var suppressFocusOpen = false;

    function focusWithoutOpening(el) {
      suppressFocusOpen = true;
      el.focus();
      suppressFocusOpen = false;
    }

    function categoryData(slug) {
      return NAV.navigation.filter(function (c) {
        return c.slug === slug;
      })[0];
    }

    function ensureBuilt(catSlug) {
      if (builtCategories[catSlug]) return;
      var cat = categoryData(catSlug);
      cat.groups.forEach(function (g) {
        var panel = document.createElement("div");
        panel.className = "mega-menu__panel";
        panel.id = "panel-" + g.slug;
        panel.setAttribute("role", "tabpanel");
        panel.setAttribute("aria-labelledby", "tab-" + g.slug);
        panel.hidden = true;
        var ul = document.createElement("ul");
        ul.className = "mega-menu__panel-list";
        g.services.forEach(function (svc) {
          var li = document.createElement("li");
          var a = document.createElement("a");
          a.href = "/services/" + svc.slug + ".html";
          a.textContent = svc.title;
          li.appendChild(a);
          ul.appendChild(li);
        });
        panel.appendChild(ul);
        panelsContainer.appendChild(panel);
      });
      builtCategories[catSlug] = true;
    }

    function updateFooter(cat) {
      blurb.textContent = cat.description;
      var count = cat.groups.reduce(function (n, g) {
        return n + g.services.length;
      }, 0);
      viewAllText.textContent = "View all " + count + " services in " + cat.label;
      viewAllLink.href = "/services.html?category=" + cat.slug;
    }

    function railTabs(catSlug) {
      return Array.prototype.slice.call(
        document.querySelectorAll('.mega-menu__rail[data-rail-for="' + catSlug + '"] .mega-menu__railtab')
      );
    }

    function selectGroup(catSlug, groupSlug, opts) {
      opts = opts || {};
      lastGroupByCategory[catSlug] = groupSlug;
      railTabs(catSlug).forEach(function (tab) {
        var active = tab.dataset.group === groupSlug;
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
      });
      Array.prototype.forEach.call(panelsContainer.querySelectorAll(".mega-menu__panel"), function (p) {
        p.hidden = p.id !== "panel-" + groupSlug;
      });
      if (opts.focus) {
        var tab = document.getElementById("tab-" + groupSlug);
        if (tab) tab.focus();
      }
    }

    function openCategory(catSlug, opts) {
      opts = opts || {};
      ensureBuilt(catSlug);
      var cat = categoryData(catSlug);
      triggers.forEach(function (t) {
        t.setAttribute("aria-expanded", String(t.dataset.category === catSlug));
      });
      Array.prototype.forEach.call(railsContainer.querySelectorAll(".mega-menu__rail"), function (r) {
        r.hidden = r.dataset.railFor !== catSlug;
      });
      var activeGroup = lastGroupByCategory[catSlug] || cat.groups[0].slug;
      selectGroup(catSlug, activeGroup, { focus: false });
      updateFooter(cat);
      megaMenu.hidden = false;
      openCategorySlug = catSlug;
      if (opts.focusRail) {
        var tab = document.getElementById("tab-" + activeGroup);
        if (tab) tab.focus();
      }
    }

    function closeMegaMenu(opts) {
      opts = opts || {};
      if (!openCategorySlug) return;
      var closingSlug = openCategorySlug;
      megaMenu.hidden = true;
      triggers.forEach(function (t) {
        t.setAttribute("aria-expanded", "false");
      });
      openCategorySlug = null;
      if (opts.returnFocus !== false) {
        var trigger = triggerByCategory[closingSlug];
        if (trigger) focusWithoutOpening(trigger);
      }
    }

    function clearTimers() {
      clearTimeout(enterTimer);
      clearTimeout(leaveTimer);
    }

    // ---- Hover intent (120ms open delay, 220ms close delay) -------------
    function wireHoverIntent(el, catSlug) {
      el.addEventListener("mouseenter", function () {
        clearTimers();
        enterTimer = setTimeout(function () {
          openCategory(catSlug, { focusRail: false });
        }, 120);
      });
      el.addEventListener("mouseleave", function () {
        clearTimeout(enterTimer);
        leaveTimer = setTimeout(function () {
          closeMegaMenu({ returnFocus: false });
        }, 220);
      });
    }

    triggers.forEach(function (trigger) {
      var catSlug = trigger.dataset.category;
      wireHoverIntent(trigger, catSlug);

      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        if (openCategorySlug === catSlug) {
          closeMegaMenu({ returnFocus: true });
        } else {
          openCategory(catSlug, { focusRail: false });
        }
      });

      trigger.addEventListener("focus", function () {
        // Only auto-open for keyboard focus (Tab) — a mouse click also
        // fires focus, and click has its own explicit open/close toggle.
        // suppressFocusOpen guards programmatic focus() calls we make when
        // returning focus to the trigger after a close (e.g. Escape).
        if (suppressFocusOpen || !trigger.matches(":focus-visible")) return;
        clearTimers();
        openCategory(catSlug, { focusRail: false });
      });

      trigger.addEventListener("keydown", function (e) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          openCategory(catSlug, { focusRail: true });
        } else if (e.key === "Escape") {
          closeMegaMenu({ returnFocus: true });
        } else if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          trigger.click();
        }
      });
    });

    wireHoverIntent(megaMenu, null);
    megaMenu.addEventListener("mouseenter", clearTimers);

    // ---- Mouse click / hover inside the rail (role=tab list) --------------
    railsContainer.addEventListener("click", function (e) {
      var tab = e.target.closest(".mega-menu__railtab");
      if (!tab) return;
      selectGroup(tab.dataset.category, tab.dataset.group, { focus: false });
    });
    railsContainer.addEventListener(
      "mouseenter",
      function (e) {
        var tab = e.target.closest && e.target.closest(".mega-menu__railtab");
        if (!tab) return;
        selectGroup(tab.dataset.category, tab.dataset.group, { focus: false });
      },
      true
    );

    // ---- Keyboard inside the rail (role=tab list) ------------------------
    railsContainer.addEventListener("keydown", function (e) {
      var tab = e.target.closest(".mega-menu__railtab");
      if (!tab) return;
      var catSlug = tab.dataset.category;
      var groupSlug = tab.dataset.group;
      var tabs = railTabs(catSlug);
      var idx = tabs.indexOf(tab);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        var next = tabs[Math.min(idx + 1, tabs.length - 1)];
        selectGroup(catSlug, next.dataset.group, { focus: true });
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        var prev = tabs[Math.max(idx - 1, 0)];
        selectGroup(catSlug, prev.dataset.group, { focus: true });
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        var panel = document.getElementById("panel-" + groupSlug);
        var firstLink = panel && panel.querySelector("a");
        if (firstLink) firstLink.focus();
      } else if (e.key === "Escape") {
        closeMegaMenu({ returnFocus: true });
      } else if (e.key === "Tab" && e.shiftKey && idx === 0) {
        e.preventDefault();
        closeMegaMenu({ returnFocus: true });
      }
    });

    // ---- Keyboard inside a service panel (role=tabpanel link list) ------
    panelsContainer.addEventListener("keydown", function (e) {
      var link = e.target.closest("a");
      if (!link) return;
      var panel = link.closest(".mega-menu__panel");
      var links = Array.prototype.slice.call(panel.querySelectorAll("a"));
      var idx = links.indexOf(link);
      var groupSlug = panel.id.replace("panel-", "");

      if (e.key === "ArrowDown") {
        e.preventDefault();
        links[Math.min(idx + 1, links.length - 1)].focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        links[Math.max(idx - 1, 0)].focus();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        var tab = document.getElementById("tab-" + groupSlug);
        if (tab) tab.focus();
      } else if (e.key === "Escape") {
        closeMegaMenu({ returnFocus: true });
      } else if (e.key === "Tab" && !e.shiftKey && idx === links.length - 1) {
        e.preventDefault();
        var closing = openCategorySlug;
        closeMegaMenu({ returnFocus: false });
        var stopIdx = headerStops.indexOf(triggerByCategory[closing]);
        var next = headerStops[stopIdx + 1];
        if (next) next.focus();
      }
    });

    document.addEventListener("click", function (e) {
      if (!openCategorySlug) return;
      if (megaMenu.contains(e.target) || triggerByCategory[openCategorySlug].contains(e.target)) return;
      closeMegaMenu({ returnFocus: false });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && openCategorySlug && document.activeElement === document.body) {
        closeMegaMenu({ returnFocus: true });
      }
    });
  })();
})();
