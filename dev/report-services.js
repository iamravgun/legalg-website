/* Dev-only: content report over dist/services — node dev/report-services.js */
const fs = require("fs");
const path = require("path");
const nav = require("../data/navigation.js");
const DIR = path.join(__dirname, "..", "dist", "services");

const BANNED = [/elevate your/i, /unlock the power/i, /seamless/i, /\bempower/i, /transform your business/i, /your trusted partner/i, /cutting-edge/i, /one-stop/i, /hassle-free/i, /in today's/i, /why choose us/i, /coming soon/i, /lorem ipsum/i, /every business in india/i, /if you are looking to/i];
const text = (html) => html.replace(/<!--[\s\S]*?-->|<script[\s\S]*?<\/script>|<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#39;|&quot;/g, "'").replace(/\s+/g, " ");

const rows = [];
const problems = [];
for (const s of nav.allServices) {
  const file = path.join(DIR, s.slug + ".html");
  if (!fs.existsSync(file)) { problems.push("missing page " + s.slug); continue; }
  const html = fs.readFileSync(file, "utf8");
  const main = html.slice(html.indexOf('<div class="svc__body">'), html.indexOf("</main>"));
  const body = text(main);
  const verify = (html.match(/<!-- VERIFY -->/g) || []).length;
  const words = body.split(" ").filter(Boolean).length;
  const ov = html.match(/id="overview"[\s\S]*?<div class="svc-prose"><p>([\s\S]*?)<\/p>/);
  const opener = ov ? text(ov[1]).trim() : "";
  const paras = (html.match(/<div class="svc-prose">([\s\S]*?)<\/div>/) || ["", ""])[1].split("<p>").length - 1;
  const faqs = (html.match(/accordion__item/g) || []).length;
  rows.push({ slug: s.slug, category: s.categoryLabel, words, verify, paras, faqs, opener });
  BANNED.forEach((re) => re.test(text(html)) && problems.push(`${s.slug}: banned phrase ${re}`));
  if (/₹|priceFrom|professional fee of|"offers"/i.test(html)) problems.push(`${s.slug}: fee/offer found`);
  if (/<h2[^>]*>[^<]*<\/h2>\s*(<ul class="[^"]*">\s*<\/ul>|<\/section>)/.test(html)) problems.push(`${s.slug}: empty section`);
}

const total = rows.reduce((n, r) => n + r.verify, 0);
const byWords = rows.slice().sort((a, b) => b.words - a.words);
const dist = (k) => Object.entries(rows.reduce((m, r) => ((m[r[k]] = (m[r[k]] || 0) + 1), m), {})).map(([v, n]) => `${v}:${n}`).join("  ");
console.log("pages:", rows.length, "| VERIFY markers:", total, "| pages with none:", rows.filter((r) => !r.verify).length);
console.log("overview paragraphs (count:pages):", dist("paras"));
console.log("FAQs (count:pages):", dist("faqs"));
console.log("\nLONGEST:"); byWords.slice(0, 3).forEach((r) => console.log(`  ${r.words} words  ${r.slug}`));
console.log("SHORTEST:"); byWords.slice(-3).forEach((r) => console.log(`  ${r.words} words  ${r.slug}`));
console.log("\nproblems:", problems.length ? problems : "none");

// Four random tier-2 pages from four different categories (seeded by date for repeatability).
const t1 = new Set(require("../data/services.js").map((s) => s.slug));
const cats = [...new Set(rows.map((r) => r.category))];
let seed = Number(process.argv[2] || 7);
const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
const chosenCats = cats.sort(() => rnd() - 0.5).slice(0, 4);
console.log("\nOPENERS — 4 random tier-2 pages, 4 categories:");
chosenCats.forEach((c) => {
  const pool = rows.filter((r) => r.category === c && !t1.has(r.slug));
  const r = pool[Math.floor(rnd() * pool.length)];
  console.log(`\n[${c}] ${r.slug}\n  ${r.opener.slice(0, 260)}${r.opener.length > 260 ? "…" : ""}`);
});
fs.writeFileSync(path.join(__dirname, "verify-report.csv"), "slug,category,words,verify\n" + rows.map((r) => `${r.slug},"${r.category}",${r.words},${r.verify}`).join("\n"));
