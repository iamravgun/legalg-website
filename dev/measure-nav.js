const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch();
  for (const w of [1024, 1280, 1440]) {
    const p = await b.newPage({ viewport: { width: w, height: 800 } });
    await p.goto("http://localhost:8812/index.html", { waitUntil: "networkidle" });
    const r = await p.evaluate(() => {
      const q = (s) => document.querySelector(s).getBoundingClientRect().width;
      const inner = document.querySelector(".main-bar__inner");
      const cs = getComputedStyle(inner);
      const avail = inner.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      const out = { avail, brand: q(".brand"), actions: q(".main-bar__actions"), quote: document.querySelectorAll(".main-bar__actions .btn")[1].getBoundingClientRect().width };
      for (const fs of [13, 14, 16]) {
        const t = [...document.querySelectorAll(".primary-nav__trigger")];
        t.forEach((x) => (x.style.fontSize = fs + "px"));
        out["triggers@" + fs] = Math.round(t.reduce((n, x) => n + x.getBoundingClientRect().width, 0));
      }
      return out;
    });
    console.log(w, JSON.stringify(r));
    await p.close();
  }
  await b.close();
})();
