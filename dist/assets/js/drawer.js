/* ==========================================================================
   assets/js/drawer.js — mobile nav drawer: categories -> groups -> services,
   three slide-in levels with a back button and breadcrumb.
   Depends on window.NAVIGATION (data/navigation.js) being loaded first.
   ========================================================================== */
(function () {
  "use strict";

  var NAV = window.NAVIGATION;
  var hamburger = document.getElementById("hamburger-trigger");
  var drawer = document.getElementById("mobile-drawer");
  var overlay = document.getElementById("drawer-overlay");
  var closeBtn = document.getElementById("drawer-close");
  var backBtn = document.getElementById("drawer-back");
  var breadcrumb = document.getElementById("drawer-breadcrumb");
  var body = document.getElementById("drawer-body");
  var rootPanel = document.getElementById("drawer-panel-root");
  if (!hamburger || !drawer || !NAV) return;

  var stack = [{ el: rootPanel, label: "Menu" }];

  function categoryData(slug) {
    return NAV.navigation.filter(function (c) {
      return c.slug === slug;
    })[0];
  }

  function updateChrome() {
    breadcrumb.textContent = stack[stack.length - 1].label;
    backBtn.hidden = stack.length < 2;
  }

  function pushPanel(el, label) {
    var prev = stack[stack.length - 1];
    prev.el.classList.remove("drawer-panel--active");
    prev.el.classList.add("drawer-panel--exit-left");
    body.appendChild(el);
    el.classList.add("drawer-panel");
    el.offsetHeight; // force reflow so the transition runs
    el.classList.add("drawer-panel--active");
    stack.push({ el: el, label: label });
    updateChrome();
  }

  function popPanel() {
    if (stack.length < 2) return;
    var top = stack.pop();
    top.el.classList.remove("drawer-panel--active");
    setTimeout(function () {
      if (top.el.parentNode) top.el.parentNode.removeChild(top.el);
    }, 220);
    var prev = stack[stack.length - 1];
    prev.el.classList.remove("drawer-panel--exit-left");
    prev.el.classList.add("drawer-panel--active");
    updateChrome();
  }

  function buildGroupsPanel(cat) {
    var panel = document.createElement("div");
    var ul = document.createElement("ul");
    ul.className = "drawer-list";
    var section = null;
    cat.groups.forEach(function (g) {
      if (g.section && g.section !== section) {
        section = g.section;
        var head = document.createElement("li");
        head.className = "drawer-list__section";
        head.textContent = section;
        ul.appendChild(head);
      }
      var li = document.createElement("li");
      li.className = "drawer-list__item";
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "drawer-list__trigger";
      btn.dataset.group = g.slug;
      btn.innerHTML =
        "<span>" + g.label + '</span><span class="drawer-list__count fig">' + g.services.length + "</span>";
      btn.addEventListener("click", function () {
        pushPanel(buildServicesPanel(g), g.label);
      });
      li.appendChild(btn);
      ul.appendChild(li);
    });
    panel.appendChild(ul);
    return panel;
  }

  function buildServicesPanel(group) {
    var panel = document.createElement("div");
    var ul = document.createElement("ul");
    ul.className = "drawer-list";
    group.services.forEach(function (svc) {
      var li = document.createElement("li");
      li.className = "drawer-list__item drawer-list__item--link";
      var a = document.createElement("a");
      a.href = "/services/" + svc.slug + ".html";
      a.textContent = svc.title;
      li.appendChild(a);
      ul.appendChild(li);
    });
    panel.appendChild(ul);
    return panel;
  }

  rootPanel.addEventListener("click", function (e) {
    var trigger = e.target.closest(".drawer-list__trigger[data-category]");
    if (!trigger) return;
    var cat = categoryData(trigger.dataset.category);
    pushPanel(buildGroupsPanel(cat), cat.label);
  });

  backBtn.addEventListener("click", popPanel);

  function openDrawer() {
    drawer.hidden = false;
    overlay.hidden = false;
    document.body.classList.add("drawer-open");
    hamburger.setAttribute("aria-expanded", "true");
    closeBtn.focus();
  }

  // Slide out, then hide. The timeout covers a missed animationend
  // (reduced motion runs the animation in ~0ms).
  var closeTimer = null;
  function hideAfterSlide() {
    clearTimeout(closeTimer);
    drawer.hidden = true;
    overlay.hidden = true;
    drawer.classList.remove("is-closing");
    overlay.classList.remove("is-closing");
  }

  function closeDrawer() {
    if (drawer.classList.contains("is-closing")) return;
    drawer.classList.add("is-closing");
    overlay.classList.add("is-closing");
    drawer.addEventListener("animationend", hideAfterSlide, { once: true });
    closeTimer = setTimeout(hideAfterSlide, 300);
    document.body.classList.remove("drawer-open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.focus();
    while (stack.length > 1) {
      var top = stack.pop();
      if (top.el.parentNode) top.el.parentNode.removeChild(top.el);
    }
    rootPanel.classList.add("drawer-panel--active");
    rootPanel.classList.remove("drawer-panel--exit-left");
    updateChrome();
  }

  hamburger.addEventListener("click", openDrawer);
  closeBtn.addEventListener("click", closeDrawer);
  overlay.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !drawer.hidden) closeDrawer();
  });

  var resizeTimer = null;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (window.innerWidth >= 1024 && !drawer.hidden) hideAfterSlide();
    }, 150);
  });
})();
