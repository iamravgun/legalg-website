/* Dev-only: list elements extending past the viewport — node dev/find-overflow.js <width> [page] */
const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch();
  const w = Number(process.argv[2]) || 1280;
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  await p.goto("http://localhost:8812/" + (process.argv[3] || "index.html"), { waitUntil: "networkidle" });
  const r = await p.evaluate(() =>
    [...document.querySelectorAll("body *")]
      .filter((el) => el.getBoundingClientRect().right > innerWidth + 0.5)
      .slice(0, 8)
      .map((el) => {
        const chain = [];
        for (let n = el; n && n !== document.body; n = n.parentElement) chain.unshift(n.tagName.toLowerCase() + (n.className ? "." + String(n.className).split(" ")[0] : ""));
        return chain.slice(-4).join(" > ") + " :: right=" + Math.round(el.getBoundingClientRect().right) + " :: " + el.textContent.trim().slice(0, 40);
      })
  );
  console.log(w, r);
  await b.close();
})();
