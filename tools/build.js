/* ==========================================================================
   tools/build.js — dependency-free static site builder (fs + path only).
   1) Renders header/footer partials from data/ and injects them, plus
      head, into every page in /src.
   2) Renders <!--BLOCK:name--> markers and {{token}}s in each page.
   3) Generates /services/<slug>.html from src/service.template.html.
   Output: /dist — pure static HTML/CSS/JS, no further build step needed.
   Run: node tools/build.js                 (every service with content)
        node tools/build.js --only=a,b,c    (just those service pages)
   ========================================================================== */
const fs = require("fs");
const path = require("path");
const { tokens, renderBlocks, emptyDir, copyDir, walk } = require("./lib/util");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "src");
const DIST = path.join(ROOT, "dist");
const PARTIALS = path.join(ROOT, "partials");
const load = (name) => require(path.join(ROOT, "data", `${name}.js`));

const nav = load("navigation");
const site = load("site");
const services = load("services");
const data = { clients: load("clients"), testimonials: load("testimonials"), faq: load("faq") };

const { siteTokens, headerBlocks, footerBlocks } = require("./lib/chrome")(nav, site);
const homeBlocks = require("./lib/home")(ROOT, nav, site, services, data);
const serviceRenderer = require("./lib/service")(nav, services, require("./lib/content/profiles"));
if (serviceRenderer.openingClashes.length) {
  console.error("Rule 2 — two services in a group open the same way:\n  " + serviceRenderer.openingClashes.join("\n  "));
  process.exit(1);
}
const onlyArg = process.argv.find((a) => a.startsWith("--only="));
const ONLY = onlyArg ? onlyArg.slice(7).split(",").filter(Boolean) : null;

const readPartial = (name) => fs.readFileSync(path.join(PARTIALS, `${name}.html`), "utf8");
const footerWith = (overrides) => tokens(renderBlocks(readPartial("footer"), footerBlocks), Object.assign({}, siteTokens, overrides));
const partials = {
  head: readPartial("head"),
  header: tokens(renderBlocks(readPartial("header"), headerBlocks), siteTokens),
  footer: footerWith({}),
  // On service pages the mobile sticky bar's primary action opens the enquiry card.
  serviceFooter: footerWith({ stickyHref: "#enquiry", stickyLabel: "Get Started" })
};

function renderPage(html, blocks, pageTokens, footer) {
  const withBlocks = tokens(renderBlocks(html, blocks || homeBlocks), Object.assign({}, siteTokens, pageTokens));
  return withBlocks
    .replace("<!--PARTIAL:head-->", partials.head)
    .replace("<!--PARTIAL:header-->", partials.header)
    .replace("<!--PARTIAL:footer-->", footer || partials.footer);
}

// ---- Static pages ------------------------------------------------------
emptyDir(DIST);

let pageCount = 0;
walk(SRC, "", (full, rel) => {
  if (!rel.endsWith(".html") || /\.template\.html$/.test(rel)) return;
  const out = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, renderPage(fs.readFileSync(full, "utf8")));
  pageCount++;
});

// ---- Service pages -------------------------------------------------------
const serviceTpl = fs.readFileSync(path.join(SRC, "service.template.html"), "utf8");
const serviceReport = [];
let skipped = 0;
fs.mkdirSync(path.join(DIST, "services"), { recursive: true });
for (const entry of nav.allServices) {
  if (ONLY && !ONLY.includes(entry.slug)) continue;
  const page = serviceRenderer.render(entry);
  if (!page) {
    skipped++;
    continue;
  }
  const html = renderPage(serviceTpl, page.blocks, page.tokens, partials.serviceFooter);
  fs.writeFileSync(path.join(DIST, "services", entry.slug + ".html"), html);
  serviceReport.push({ slug: entry.slug, category: entry.category, tier: page.tier, verify: page.verify, words: page.words, kb: +(Buffer.byteLength(html) / 1024).toFixed(1) });
}
if (ONLY) {
  const missing = ONLY.filter((s) => !serviceReport.find((r) => r.slug === s));
  if (missing.length) throw new Error("--only: no content for " + missing.join(", "));
}

// ---- Assets and public data ---------------------------------------------
copyDir(path.join(ROOT, "assets"), path.join(DIST, "assets"));
// Only data the browser actually loads is published. services.js and
// pricing.js stay build-side, so no fee is downloadable from the live site.
const PUBLIC_DATA = ["navigation.js"];
fs.mkdirSync(path.join(DIST, "data"), { recursive: true });
PUBLIC_DATA.forEach((name) => fs.copyFileSync(path.join(ROOT, "data", name), path.join(DIST, "data", name)));

// ---- Checks --------------------------------------------------------------
const leftover = [];
walk(DIST, "", (full, rel) => {
  if (!rel.endsWith(".html")) return;
  const m = fs.readFileSync(full, "utf8").match(/<!--(BLOCK|PARTIAL):\w+-->|{{\w+}}|\[\[V\]\]/g);
  if (m) leftover.push(`${rel}: ${[...new Set(m)].join(", ")}`);
});
if (leftover.length) {
  console.error("Unrendered markers:\n  " + leftover.join("\n  "));
  process.exit(1);
}

console.log(`Built ${pageCount} static pages and ${serviceReport.length} service pages into /dist` + (skipped ? ` (${skipped} services have no content yet)` : ""));
if (serviceReport.length && serviceReport.length <= 12) console.table(serviceReport);
