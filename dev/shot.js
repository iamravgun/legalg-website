/* Dev-only: screenshot a region — node dev/shot.js <width> <height> <page> <selector> <out> */
const { chromium } = require("playwright");
(async () => {
  const [w, h, pg, sel, out] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: +w, height: +h } });
  await p.emulateMedia({ reducedMotion: "reduce" });
  await p.goto("http://localhost:8812/" + pg, { waitUntil: "networkidle" });
  await (sel === "page" ? p.screenshot({ path: out, fullPage: true }) : p.locator(sel).first().screenshot({ path: out }));
  await b.close();
})();
