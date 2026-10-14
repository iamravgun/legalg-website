/* Dev-only: checks + screenshots for generated service pages.
   node dev/check-services.js slug1,slug2,...  (needs dev/serve.js on 8812) */
const { chromium } = require("playwright");
const slugs = (process.argv[2] || "").split(",").filter(Boolean);
const OUT = "dev/screenshots/svc-";

(async () => {
  const b = await chromium.launch();
  const errors = [];
  for (const slug of slugs) {
    const url = `http://localhost:8812/services/${slug}.html`;
    // Overflow at all six widths
    const overflow = {};
    for (const w of [360, 414, 768, 1024, 1280, 1440]) {
      const p = await b.newPage({ viewport: { width: w, height: 900 } });
      p.on("pageerror", (e) => errors.push(`${slug}@${w}: ${e.message}`));
      p.on("console", (m) => m.type() === "error" && errors.push(`${slug}@${w}: ${m.text()}`));
      await p.goto(url, { waitUntil: "networkidle" });
      const o = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth);
      if (o) overflow[w] = o;
      await p.close();
    }
    // Structure, form behaviour, screenshot at 1440
    const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
    await p.emulateMedia({ reducedMotion: "reduce" });
    await p.goto(url, { waitUntil: "networkidle" });
    const s = await p.evaluate(() => ({
      h1: document.querySelectorAll("h1").length,
      headings: [...document.querySelectorAll("main h2")].map((h) => h.textContent.trim()).join(" | "),
      verify: (document.documentElement.innerHTML.match(/<!-- VERIFY -->/g) || []).length,
      jsonld: [...document.querySelectorAll('script[type="application/ld+json"]')].map((x) => JSON.parse(x.textContent)["@type"]).join(","),
      errorsOnLoad: [...document.querySelectorAll(".field__error")].filter((e) => e.textContent).length,
      faqOpen: [...document.querySelectorAll(".accordion__trigger")].map((t) => (t.getAttribute("aria-expanded") === "true" ? 1 : 0)).join(""),
      stickyTop: getComputedStyle(document.querySelector(".svc__aside-inner")).position
    }));
    await p.click("#enquiry button[type=submit]");
    s.afterEmptySubmit = await p.evaluate(() => [...document.querySelectorAll("#enquiry .field__error")].filter((e) => e.textContent).length + " errors, focus=" + document.activeElement.id);
    console.log(slug, JSON.stringify(s), Object.keys(overflow).length ? "OVERFLOW " + JSON.stringify(overflow) : "no overflow");
    await p.reload({ waitUntil: "networkidle" });
    await p.screenshot({ path: `${OUT}${slug}-1440.png`, fullPage: true });
    await p.close();
    const m = await b.newPage({ viewport: { width: 390, height: 844 } });
    await m.emulateMedia({ reducedMotion: "reduce" });
    await m.goto(url, { waitUntil: "networkidle" });
    await m.screenshot({ path: `${OUT}${slug}-390.png`, fullPage: true });
    await m.close();
  }
  console.log("console / page errors:", errors.length ? errors : "none");
  await b.close();
})();
