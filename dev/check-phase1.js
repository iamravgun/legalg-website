/* Dev-only Phase 1 verification — node dev/check-phase1.js (needs dev/serve.js on 8811). */
const { chromium } = require("playwright");
const BASE = "http://localhost:8812";
const SHOTS = "dev/screenshots/phase1-";

async function settleReveals(page) {
  const h = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < h; y += 400) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(60);
  }
  await page.waitForTimeout(600);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
}

(async () => {
  const browser = await chromium.launch();
  const errors = [];
  const report = (k, v) => console.log(k.padEnd(44), typeof v === "string" ? v : JSON.stringify(v));

  // ---- Overflow + header fit at all six widths ---------------------------
  for (const w of [360, 414, 768, 1024, 1280, 1440]) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    page.on("pageerror", (e) => errors.push(`${w}: ${e.message}`));
    page.on("console", (m) => m.type() === "error" && errors.push(`${w}: ${m.text()}`));
    await page.goto(BASE + "/index.html", { waitUntil: "networkidle" });
    const r = await page.evaluate(() => {
      const over = document.documentElement.scrollWidth - window.innerWidth;
      const list = document.querySelector(".primary-nav__list");
      const trig = [...document.querySelectorAll(".primary-nav__trigger")].map((t) => t.getBoundingClientRect());
      const actions = document.querySelector(".main-bar__actions").getBoundingClientRect();
      const visible = list && getComputedStyle(document.querySelector(".primary-nav")).display !== "none";
      return {
        overflowPx: over,
        navVisible: visible,
        navOneLine: visible ? new Set(trig.map((t) => Math.round(t.top))).size === 1 : null,
        navClearOfActions: visible ? trig[trig.length - 1].right <= actions.left : null,
        pendingAboveFold: [...document.querySelectorAll(".reveal-pending")].filter((el) => el.getBoundingClientRect().top < innerHeight).length
      };
    });
    report(`width ${w}`, r);
    await page.close();
  }

  // ---- Homepage screenshots: 1440 and 390 ----------------------------------
  for (const [w, h] of [[1440, 900], [390, 844]]) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.goto(BASE + "/index.html", { waitUntil: "networkidle" });
    await page.screenshot({ path: `${SHOTS}home-${w}-fold.png` });
    await settleReveals(page);
    await page.screenshot({ path: `${SHOTS}home-${w}-full.png`, fullPage: true });
    await page.close();
  }

  // ---- Licensing mega menu at three desktop viewports -----------------------
  for (const [w, h] of [[1024, 768], [1280, 720], [1440, 900]]) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.goto(BASE + "/index.html", { waitUntil: "networkidle" });
    await page.click('.primary-nav__trigger[data-category="licensing"]');
    await page.waitForTimeout(300);
    const m = await page.evaluate(() => {
      const menu = document.getElementById("mega-menu").getBoundingClientRect();
      const rail = document.getElementById("rail-licensing");
      return { menuBottom: Math.round(menu.bottom), viewport: innerHeight, railScrolls: rail.scrollHeight > rail.clientHeight, sectionHeads: rail.querySelectorAll(".mega-menu__railsection").length };
    });
    // Every group: select it, scroll its panel to the end, last link must sit inside the panel box.
    const groups = await page.$$eval("#rail-licensing .mega-menu__railtab", (ts) => ts.map((t) => t.dataset.group));
    let clipped = [];
    for (const g of groups) {
      await page.evaluate((gg) => document.getElementById("tab-" + gg).scrollIntoView({ block: "nearest" }), g);
      await page.click(`#tab-${g}`);
      const ok = await page.evaluate((gg) => {
        const panels = document.getElementById("mega-menu-panels");
        panels.scrollTop = panels.scrollHeight;
        const box = panels.getBoundingClientRect();
        const links = [...document.querySelectorAll(`#panel-${gg} a`)];
        return links.every((a) => { const r = a.getBoundingClientRect(); return r.bottom <= box.bottom + 1 || a.offsetParent; }) && links.length > 0 && box.bottom <= innerHeight;
      }, g);
      if (!ok) clipped.push(g);
    }
    // Pinned heading: scrolled part-way, the first section heading stays at the rail top.
    const pinned = await page.evaluate(() => {
      const rail = document.getElementById("rail-licensing");
      if (rail.scrollHeight <= rail.clientHeight) return "rail does not scroll";
      rail.scrollTop = 80;
      const head = rail.querySelector(".mega-menu__railsection").getBoundingClientRect();
      return Math.abs(head.top - rail.getBoundingClientRect().top) < 2;
    });
    report(`licensing menu ${w}x${h}`, { ...m, fitsViewport: m.menuBottom <= m.viewport, groups: groups.length, clippedGroups: clipped, headingPinnedWhileScrolled: pinned });
    await page.evaluate(() => { document.getElementById("rail-licensing").scrollTop = 0; });
    await page.click("#tab-environmental-compliance");
    await page.waitForTimeout(100);
    await page.screenshot({ path: `${SHOTS}mega-licensing-${w}.png` });
    await page.close();
  }

  // ---- Drawer at 390: Licensing groups show section headings -------------
  {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.goto(BASE + "/index.html", { waitUntil: "networkidle" });
    await page.click("#hamburger-trigger");
    await page.waitForTimeout(300);
    await page.click('.drawer-list__trigger[data-category="licensing"]');
    await page.waitForTimeout(300);
    const heads = await page.$$eval(".drawer-list__section", (els) => els.map((e) => e.textContent));
    await page.screenshot({ path: `${SHOTS}drawer-licensing-390.png` });
    await page.click("#drawer-close");
    await page.waitForTimeout(400);
    const hidden = await page.$eval("#mobile-drawer", (d) => d.hidden);
    report("drawer licensing sections / closes", { heads, hiddenAfterClose: hidden });
    await page.close();
  }

  // ---- Reduced motion -------------------------------------------------------
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
    const page = await ctx.newPage();
    await page.goto(BASE + "/index.html", { waitUntil: "networkidle" });
    const r = await page.evaluate(() => ({
      pending: document.querySelectorAll(".reveal-pending").length,
      btnTransition: getComputedStyle(document.querySelector(".btn")).transitionDuration,
      scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
      trackScroll: getComputedStyle(document.querySelector(".carousel__track")).scrollBehavior
    }));
    await page.click('.primary-nav__trigger[data-category="gst-tax"]');
    r.megaAnimation = await page.$eval("#mega-menu", (m) => getComputedStyle(m).animationDuration);
    report("reduced motion", r);
    await ctx.close();
  }

  report("console / page errors", errors.length ? errors : "none");
  await browser.close();
})();
