/* Dev-only: search-band rhythm, chip rows, mobile scroll row; screenshots of
   the band and the featured grid. node dev/check-finder.js (serve.js on 8812). */
const { chromium } = require("playwright");
const OUT = "dev/screenshots/";

(async () => {
  const b = await chromium.launch();
  for (const [w, h] of [[1440, 900], [1280, 900], [390, 844]]) {
    const p = await b.newPage({ viewport: { width: w, height: h } });
    await p.emulateMedia({ reducedMotion: "reduce" });
    await p.goto("http://localhost:8812/index.html", { waitUntil: "networkidle" });
    const r = await p.evaluate(() => {
      const q = (s) => document.querySelector(s).getBoundingClientRect();
      const rule = getComputedStyle(document.querySelector(".finder__eyebrow"), "::before");
      const eyebrow = q(".finder__eyebrow"), title = q(".finder__title"), lede = q(".finder__lede");
      const field = q(".finder__search"), label = q(".finder__popular-label"), chips = q(".finder__chips");
      const lh = (s) => Math.round(q(s).height / parseFloat(getComputedStyle(document.querySelector(s)).lineHeight));
      const chipTops = [...document.querySelectorAll(".finder__chip")].map((c) => Math.round(c.getBoundingClientRect().top));
      const list = document.querySelector(".finder__chips");
      const widest = Math.max(...[...document.querySelectorAll(".finder__inner > *")].map((e) => e.getBoundingClientRect().width));
      return {
        ruleToEyebrowText: rule.marginBottom,
        eyebrowToH2: Math.round(title.top - eyebrow.bottom),
        h2ToLede: Math.round(lede.top - title.bottom),
        ledeToField: Math.round(field.top - lede.bottom),
        fieldToLabel: Math.round(label.top - field.bottom),
        labelToChips: Math.round(chips.top - label.bottom),
        h2Size: getComputedStyle(document.querySelector(".finder__title")).fontSize,
        h2Lines: lh(".finder__title"),
        ledeLines: lh(".finder__lede"),
        chipRows: new Set(chipTops).size,
        chipsScrollable: list.scrollWidth > list.clientWidth,
        widestChildPx: Math.round(widest),
        centres: [".finder__eyebrow", ".finder__title", ".finder__lede", ".finder__search", ".finder__popular-label", ".finder__chips"].map((s) => { const r = q(s); return Math.round(r.left + r.width / 2); }).join("/"),
        overflow: document.documentElement.scrollWidth - innerWidth
      };
    });
    console.log(w, JSON.stringify(r));
    if (w !== 1280) {
      await p.locator(".finder").screenshot({ path: `${OUT}finder-${w}.png` });
      await p.locator(".featured-services").screenshot({ path: `${OUT}featured-${w}.png` });
    }
    await p.close();
  }
  await b.close();
})();
