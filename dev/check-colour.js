/* Dev-only: focus ring colours on light/deep surfaces + print rendering. */
const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto("http://localhost:8812/index.html", { waitUntil: "networkidle" });
  const ring = async (sel) => {
    await p.focus(sel);
    await p.keyboard.press("Shift+Tab"); await p.keyboard.press("Tab"); // force :focus-visible via keyboard
    return p.evaluate(() => { const s = getComputedStyle(document.activeElement); return document.activeElement.textContent.trim().slice(0, 24) + " → " + s.outlineColor + " " + s.outlineWidth; });
  };
  console.log("light (hero CTA):   ", await ring(".hero__actions .btn--primary"));
  console.log("deep (utility link):", await ring(".utility-bar__links a"));
  console.log("deep (final CTA):   ", await ring(".final-cta .btn--secondary"));
  console.log("deep (footer link): ", await ring(".footer-col__list a"));
  await p.emulateMedia({ media: "print" });
  console.log("print footer bg:    ", await p.$eval(".site-footer", (e) => getComputedStyle(e).backgroundColor + " / text " + getComputedStyle(e).color));
  console.log("print CTA bg:       ", await p.$eval(".final-cta", (e) => getComputedStyle(e).backgroundColor));
  await p.pdf({ path: "dev/screenshots/colour-print.pdf" }).catch(() => {});
  await b.close();
})();
