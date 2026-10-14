/* tools/lib/util.js — string and filesystem helpers shared by the build. */
const fs = require("fs");
const path = require("path");

function esc(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Wraps every figure in already-escaped text in .fig so it renders in
// Source Serif 4 tabular figures — "7-10", "9:30", "2026".
function figs(html) {
  return String(html).replace(/(\d[\d,.:/]*(?:\s?[–-]\s?\d[\d,.:]*)?)/g, '<span class="fig">$1</span>');
}

function list(items, wrap) {
  return items.map(wrap).join("\n");
}

// Simple {{token}} substitution against a flat string map.
function tokens(html, map) {
  return html.replace(/{{(\w+)}}/g, (m, key) => (key in map ? map[key] : m));
}

// Replaces each <!--BLOCK:name--> marker with blocks[name]().
function renderBlocks(html, blocks) {
  let out = html;
  for (const key of Object.keys(blocks)) {
    if (out.includes(`<!--BLOCK:${key}-->`)) out = out.replace(`<!--BLOCK:${key}-->`, blocks[key]());
  }
  return out;
}

// Empties a directory without removing it, so a preview server whose
// working directory is dist/ does not lock the build out.
function emptyDir(p) {
  fs.mkdirSync(p, { recursive: true });
  for (const entry of fs.readdirSync(p)) fs.rmSync(path.join(p, entry), { recursive: true, force: true });
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function walk(dir, base, cb) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = path.join(base, entry.name);
    if (entry.isDirectory()) walk(full, rel, cb);
    else cb(full, rel);
  }
}

module.exports = { esc, figs, list, tokens, renderBlocks, emptyDir, copyDir, walk };
