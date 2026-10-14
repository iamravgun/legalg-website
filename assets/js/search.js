/* ==========================================================================
   assets/js/search.js — homepage service search: builds an index over
   window.NAVIGATION.allServices, matches on title/group/category, renders
   up to 8 results with full keyboard navigation.
   ========================================================================== */
(function () {
  "use strict";

  var NAV = window.NAVIGATION;
  var input = document.getElementById("service-search");
  var resultsList = document.getElementById("search-results");
  var countEl = document.getElementById("search-result-count");
  if (!input || !resultsList || !NAV) return;

  var MAX_RESULTS = 8;
  var debounceTimer = null;
  var activeIndex = -1;
  var currentResults = [];

  function score(service, q) {
    var title = service.title.toLowerCase();
    var group = service.group.toLowerCase();
    var cat = service.categoryLabel.toLowerCase();
    if (title.indexOf(q) === 0) return 4;
    if (title.indexOf(q) !== -1) return 3;
    if (group.indexOf(q) !== -1) return 2;
    if (cat.indexOf(q) !== -1) return 1;
    return 0;
  }

  function search(query) {
    var q = query.trim().toLowerCase();
    if (!q) return [];
    return NAV.allServices
      .map(function (s) {
        return { service: s, score: score(s, q) };
      })
      .filter(function (r) {
        return r.score > 0;
      })
      .sort(function (a, b) {
        return b.score - a.score;
      })
      .slice(0, MAX_RESULTS)
      .map(function (r) {
        return r.service;
      });
  }

  function closeResults() {
    resultsList.hidden = true;
    resultsList.innerHTML = "";
    input.setAttribute("aria-expanded", "false");
    input.removeAttribute("aria-activedescendant");
    activeIndex = -1;
    currentResults = [];
  }

  function renderResults(query, results) {
    currentResults = results;
    activeIndex = -1;
    resultsList.innerHTML = "";

    if (!results.length) {
      var empty = document.createElement("li");
      empty.className = "search-results__empty";
      empty.innerHTML =
        'No services matched "' + escapeHtml(query) + '". Try a different term, or <a href="/services.html">browse all services</a>.';
      resultsList.appendChild(empty);
      resultsList.hidden = false;
      input.setAttribute("aria-expanded", "true");
      countEl.textContent = "No results for " + query;
      return;
    }

    results.forEach(function (s, i) {
      var li = document.createElement("li");
      li.id = "search-result-" + i;
      li.className = "search-results__item";
      li.setAttribute("role", "option");
      li.setAttribute("aria-selected", "false");
      var a = document.createElement("a");
      a.href = "/services/" + s.slug + ".html";
      a.innerHTML = '<span class="search-results__title">' + highlight(s.title, query) + '</span><span class="search-results__group">' + escapeHtml(s.categoryLabel) + " · " + escapeHtml(s.group) + "</span>";
      li.appendChild(a);
      resultsList.appendChild(li);
    });

    resultsList.hidden = false;
    input.setAttribute("aria-expanded", "true");
    countEl.textContent = results.length + (results.length === 1 ? " result" : " results") + " for " + query;
  }

  // Wraps the first case-insensitive match of the query in <mark>.
  function highlight(text, query) {
    var q = query.trim().toLowerCase();
    var i = q ? text.toLowerCase().indexOf(q) : -1;
    if (i === -1) return escapeHtml(text);
    return escapeHtml(text.slice(0, i)) + "<mark>" + escapeHtml(text.slice(i, i + q.length)) + "</mark>" + escapeHtml(text.slice(i + q.length));
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function setActive(index) {
    var items = resultsList.querySelectorAll(".search-results__item");
    items.forEach(function (el) {
      el.setAttribute("aria-selected", "false");
      el.classList.remove("is-active");
    });
    if (index >= 0 && items[index]) {
      items[index].setAttribute("aria-selected", "true");
      items[index].classList.add("is-active");
      input.setAttribute("aria-activedescendant", items[index].id);
      items[index].scrollIntoView({ block: "nearest" });
    } else {
      input.removeAttribute("aria-activedescendant");
    }
    activeIndex = index;
  }

  input.addEventListener("input", function () {
    clearTimeout(debounceTimer);
    var query = input.value;
    debounceTimer = setTimeout(function () {
      if (!query.trim()) {
        closeResults();
        countEl.textContent = "";
        return;
      }
      renderResults(query, search(query));
    }, 120);
  });

  input.addEventListener("keydown", function (e) {
    if (resultsList.hidden && e.key !== "Escape") return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!currentResults.length) return;
      setActive(Math.min(activeIndex + 1, currentResults.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!currentResults.length) return;
      setActive(Math.max(activeIndex - 1, 0));
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && currentResults[activeIndex]) {
        e.preventDefault();
        window.location.href = "/services/" + currentResults[activeIndex].slug + ".html";
      } else if (currentResults.length === 1) {
        e.preventDefault();
        window.location.href = "/services/" + currentResults[0].slug + ".html";
      }
    } else if (e.key === "Escape") {
      closeResults();
      countEl.textContent = "";
    }
  });

  document.addEventListener("click", function (e) {
    if (e.target !== input && !resultsList.contains(e.target)) {
      closeResults();
    }
  });
})();
