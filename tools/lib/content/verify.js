/* tools/lib/content/verify.js — Rule 1 enforcement. Every rendered sentence
   that carries a specific number, amount, duration, form code or section is
   followed by <!-- VERIFY --> in the HTML, so it is checked before launch.
   "[[V]]" in the data forces a marker on a sentence with no number in it.
   Statute years ("Act, 2013") and standard numbers ("ISO 9001") are names,
   not claims, and do not trigger a marker on their own. */
const { esc, figs } = require("../util");

const NAMES = /\b(?:Act|Rules|Regulations|Code),? \d{4}\b|\b(?:ISO(?:\/IEC)?|OHSAS|IS)[ /]?\d+(?::\d{4})?(?:-\d)?\b/g;
const SPECIFIC = /\d|₹|\b(?:TM|FC|STK|DRC|INC|AOC|MGT|DIR|GSTR|CHG|DPT|MSME|PAS|SH|MR)-[A-Z0-9]+\b|\bForm\s+[A-Z0-9]/;

function isSpecific(sentence) {
  return SPECIFIC.test(sentence.replace(NAMES, ""));
}

const SENTENCES = /(?<=[.?!])\s+(?=[A-Z"'(₹])/;
const MARK = "<!-- VERIFY -->";

// Paragraph or answer text → { html, count }
function prose(text) {
  let count = 0;
  const html = String(text)
    .split(SENTENCES)
    .map((s) => {
      const forced = /\[\[V\]\]/.test(s);
      const clean = s.replace(/\s*\[\[V\]\]/g, "");
      const out = figs(esc(clean));
      if (forced || isSpecific(clean)) {
        count++;
        return out + MARK;
      }
      return out;
    })
    .join(" ");
  return { html, count };
}

// Plain text for meta tags and JSON-LD: markers removed, nothing added.
function plain(text) {
  return String(text).replace(/\s*\[\[V\]\]/g, "");
}

module.exports = { prose, plain, isSpecific, MARK };
