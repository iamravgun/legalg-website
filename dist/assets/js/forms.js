/* ==========================================================================
   assets/js/forms.js — validation for every <form data-validate>.
   Rules live in markup: data-rule="required phone email", data-label names
   the field in messages.
   - An error shows only once that field has been blurred, or the form has
     been submitted once. Nothing is validated on load.
   - On submit: every field is marked touched, all are validated, focus moves
     to the first invalid one.
   - No native `required`, so no browser bubbles; messages match the site.
   No backend yet: the payload is logged and a success state replaces the form.
   ========================================================================== */
(function () {
  "use strict";

  var PHONE_RE = /^[6-9]\d{9}$/;
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // "+91 98765 43210" → "9876543210"
  function normalisePhone(value) {
    return value.replace(/[\s-]/g, "").replace(/^(\+91|0091)/, "");
  }

  function messageFor(field) {
    var rules = (field.dataset.rule || "").split(" ");
    var value = field.value.trim();
    var label = field.dataset.label || "this field";
    if (rules.indexOf("required") !== -1 && !value) {
      return field.tagName === "SELECT" ? "Choose " + label + "." : "Enter " + label + ".";
    }
    if (rules.indexOf("phone") !== -1 && value && !PHONE_RE.test(normalisePhone(value))) {
      return "Enter a 10-digit Indian mobile number.";
    }
    if (rules.indexOf("email") !== -1 && value && !EMAIL_RE.test(value)) {
      return "Enter a valid email address, like name@company.in.";
    }
    return "";
  }

  // The error node exists (empty) from load, so it is already a live region
  // when a message is written into it.
  function errorNode(field) {
    var wrapper = field.closest(".field");
    var node = wrapper.querySelector(".field__error");
    if (!node) {
      node = document.createElement("p");
      node.className = "field__error";
      node.id = field.id + "-error";
      node.setAttribute("aria-live", "polite");
      wrapper.appendChild(node);
    }
    return node;
  }

  function show(field, message) {
    var wrapper = field.closest(".field");
    var node = errorNode(field);
    wrapper.classList.toggle("field--invalid", !!message);
    node.textContent = message;
    if (message) {
      field.setAttribute("aria-invalid", "true");
      field.setAttribute("aria-describedby", node.id);
    } else {
      field.removeAttribute("aria-invalid");
      field.removeAttribute("aria-describedby");
    }
  }

  function enhance(form) {
    var fields = Array.prototype.slice.call(form.querySelectorAll("[data-rule]"));
    var touched = {};
    var submitted = false;

    fields.forEach(function (field) {
      errorNode(field);
      touched[field.id] = false;
    });

    function check(field) {
      if (!touched[field.id] && !submitted) return true;
      var message = messageFor(field);
      show(field, message);
      return !message;
    }

    form.addEventListener("focusout", function (e) {
      if (!e.target.dataset || !e.target.dataset.rule) return;
      touched[e.target.id] = true;
      check(e.target);
    });

    // Once an error is showing, clear it as soon as the value becomes valid.
    form.addEventListener("input", function (e) {
      if (e.target.dataset && e.target.dataset.rule && e.target.getAttribute("aria-invalid")) check(e.target);
    });
    form.addEventListener("change", function (e) {
      if (e.target.tagName === "SELECT" && (touched[e.target.id] || submitted)) check(e.target);
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      submitted = true;
      fields.forEach(function (f) {
        touched[f.id] = true;
      });
      var invalid = fields.filter(function (f) {
        return !check(f);
      });
      if (invalid.length) {
        invalid[0].focus();
        return;
      }
      send(form, fields);
    });
  }

  function send(form, fields) {
    var button = form.querySelector('button[type="submit"]');
    var label = button.querySelector(".btn__label");
    button.disabled = true;
    button.classList.add("is-loading");
    label.textContent = "Sending…";

    var payload = { form: form.dataset.validate };
    fields.forEach(function (f) {
      payload[f.name] = f.name === "phone" ? normalisePhone(f.value) : f.value.trim();
    });
    // TODO: POST to CRM endpoint
    console.log("Form submission:", payload);

    setTimeout(function () {
      var success = document.createElement("div");
      success.className = "form-success";
      success.setAttribute("role", "status");
      success.innerHTML =
        '<p class="form-success__title" tabindex="-1">Thank you, ' + escapeHtml((payload.name || "").split(" ")[0] || "we have it") + ".</p>" +
        "<p>Your request is with our advisory desk. An advisor will call " + escapeHtml(payload.phone ? payload.phone.slice(0, 5) + " " + payload.phone.slice(5) : "you") +
        " within one working day to confirm which filing applies and send a written quote before any payment.</p>";
      // An intro written for the empty form ("Tell us what you need") no
      // longer fits once it is sent.
      var intro = form.parentElement.querySelector("[data-form-intro]");
      if (intro) intro.hidden = true;
      form.replaceWith(success);
      success.querySelector(".form-success__title").focus();
    }, 900);
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  document.querySelectorAll("form[data-validate]").forEach(enhance);
})();
