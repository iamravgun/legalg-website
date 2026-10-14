/* Dev-only: callback form validation, FAQ accordion, section rhythm.
   node dev/check-faq-form.js (needs dev/serve.js on 8812). */
const { chromium } = require("playwright");
const BASE = "http://localhost:8812/index.html";
const OUT = "dev/screenshots/";
const log = (k, v) => console.log(k.padEnd(46), typeof v === "string" ? v : JSON.stringify(v));

(async () => {
  const b = await chromium.launch();
  const errors = [];
  const page = async (w, h) => {
    const p = await b.newPage({ viewport: { width: w, height: h } });
    p.on("pageerror", (e) => errors.push(e.message));
    p.on("console", (m) => m.type() === "error" && errors.push(m.text()));
    await p.emulateMedia({ reducedMotion: "reduce" });
    await p.goto(BASE, { waitUntil: "networkidle" });
    return p;
  };
  const visibleErrors = (p) => p.$$eval(".callback-card .field__error", (els) => els.filter((e) => e.textContent).map((e) => e.id.replace("-error", "") + ": " + e.textContent));

  // ---- Form -----------------------------------------------------------------
  const p = await page(1440, 900);
  log("errors on load", await visibleErrors(p));
  await p.screenshot({ path: OUT + "callback-hero-1440.png" });
  await p.focus("#cb-name");
  await p.keyboard.press("Tab");
  log("after blurring name only", await visibleErrors(p));
  await p.click(".callback-card button[type=submit]");
  log("after empty submit", await visibleErrors(p));
  log("focus after submit", await p.evaluate(() => document.activeElement.id));
  log("aria on name", await p.$eval("#cb-name", (e) => ({ invalid: e.getAttribute("aria-invalid"), describedby: e.getAttribute("aria-describedby") })));
  log("error node live", await p.$eval("#cb-name-error", (e) => e.getAttribute("aria-live")));
  await p.fill("#cb-name", "Ananya Iyer");
  await p.fill("#cb-phone", "12345");
  await p.keyboard.press("Tab");
  log("phone '12345'", await visibleErrors(p));
  await p.locator(".callback-card").screenshot({ path: OUT + "callback-error.png" });
  await p.fill("#cb-phone", "+91 98765 43210");
  await p.keyboard.press("Tab");
  log("phone '+91 98765 43210'", await visibleErrors(p));
  await p.selectOption("#cb-service", "gst-registration");
  const logs = [];
  p.on("console", (m) => m.type() === "log" && logs.push(m.text()));
  await p.click(".callback-card button[type=submit]");
  log("loading label", await p.$eval(".callback-card .btn__label", (e) => e.textContent));
  await p.waitForSelector(".form-success");
  log("success text", await p.$eval(".form-success", (e) => e.textContent.trim().slice(0, 80)));
  log("payload logged", logs.join(" ").slice(0, 120));
  await p.locator(".callback-card").screenshot({ path: OUT + "callback-success.png" });
  await p.close();

  // ---- Anchor from final CTA ---------------------------------------------------
  const a = await page(1440, 900);
  await a.click(".final-cta a[href='#callback-form']");
  await a.waitForTimeout(300);
  log("CTA → card top in view", await a.$eval("#callback-form", (e) => { const r = e.getBoundingClientRect(); return r.top > 0 && r.top < innerHeight; }));
  await a.close();

  // ---- Mobile hero ----------------------------------------------------------
  const m = await page(390, 844);
  await m.locator(".hero").screenshot({ path: OUT + "callback-hero-390.png" });
  await m.close();

  // ---- FAQ accordion ---------------------------------------------------------
  const f = await page(1440, 900);
  const state = () => f.$$eval(".faq .accordion__trigger", (bs) => bs.map((x) => (x.getAttribute("aria-expanded") === "true" ? 1 : 0)).join(""));
  log("faq open on load", await state());
  await f.locator(".faq").screenshot({ path: OUT + "faq-first-open.png" });
  await f.click("#faq-q-3");
  await f.waitForTimeout(50);
  log("click Q4", await state());
  await f.focus("#faq-q-1");
  await f.keyboard.press("Enter");
  log("Enter on Q2", await state());
  await f.keyboard.press("Space");
  log("Space on Q2 (closes)", await state());
  log("closed panel hidden from AT", await f.$eval("#faq-a-1", (e) => getComputedStyle(e).visibility));
  await f.locator(".faq").screenshot({ path: OUT + "faq-all-closed.png" });
  await f.click("#faq-q-3");
  await f.waitForTimeout(50);
  await f.locator(".faq").screenshot({ path: OUT + "faq-q4-open.png" });

  // ---- Section rhythm ----------------------------------------------------------
  const rhythm = await f.$$eval("main > section", (ss) => ss.map((s) => [s.className.split(" ")[0], getComputedStyle(s).backgroundColor]));
  const clash = rhythm.filter((r, i) => i && r[1] === rhythm[i - 1][1]).map((r) => r[0]);
  log("section order", rhythm.map((r) => r[0]).join(" → "));
  log("adjacent same-background clashes", clash.length ? clash : "none");
  log("green-100 / green-900 sections", [rhythm.filter((r) => r[1] === "rgb(230, 240, 233)").length, rhythm.filter((r) => r[1] === "rgb(20, 58, 44)").length]);
  await f.close();

  log("console / page errors", errors.length ? errors : "none");
  await b.close();
})();
