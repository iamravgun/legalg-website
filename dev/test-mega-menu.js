const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
  page.on("console", (msg) => { if (msg.type() === "error") errors.push("console.error: " + msg.text()); });

  await page.goto("http://localhost:8811/demo.html", { waitUntil: "networkidle" });

  // --- 1. Screenshot: closed state
  await page.screenshot({ path: "dev/screenshots/01-closed.png" });

  // --- 2. Click a trigger, screenshot open mega menu
  await page.click('.primary-nav__trigger[data-category="company-registration"]');
  await page.waitForSelector("#mega-menu:not([hidden])");
  await page.waitForTimeout(150);
  await page.screenshot({ path: "dev/screenshots/02-mega-open.png" });

  // --- 3. Click Global Incorporation group (53 items) - verify 3-column layout, no clipping
  await page.click('.mega-menu__railtab[data-group="global-incorporation"]');
  await page.waitForTimeout(100);
  await page.screenshot({ path: "dev/screenshots/03-global-incorporation-53.png" });
  const giLinks = await page.$$eval('#panel-global-incorporation a', (as) => as.length);
  console.log("Global Incorporation link count in DOM:", giLinks);
  const panelBox = await page.$eval('#mega-menu-panels', (el) => {
    const r = el.getBoundingClientRect();
    return { height: r.height, scrollHeight: el.scrollHeight, overflowY: getComputedStyle(el).overflowY };
  });
  console.log("panel box:", JSON.stringify(panelBox));

  // --- 4. Switch to Trademark & IP category, click Designs group (2 items)
  await page.click('.primary-nav__trigger[data-category="trademark-ip"]');
  await page.waitForTimeout(100);
  await page.click('.mega-menu__railtab[data-group="designs"]');
  await page.waitForTimeout(100);
  await page.screenshot({ path: "dev/screenshots/04-designs-2.png" });

  // --- 5. Keyboard walkthrough: Tab to trigger, ArrowDown into rail, ArrowDown moves group, ArrowRight into services, ArrowDown moves link, Escape closes
  await page.reload({ waitUntil: "networkidle" }); // fresh state
  let active = "";
  for (let i = 0; i < 15; i++) {
    await page.keyboard.press("Tab");
    active = await page.evaluate(() =>
      document.activeElement.classList.contains("primary-nav__trigger") ? document.activeElement.textContent.trim() : null
    );
    if (active) break;
  }
  console.log("Focused first primary-nav trigger via Tab:", active);
  await page.keyboard.press("ArrowDown"); // open + focus first rail tab
  await page.waitForTimeout(50);
  active = await page.evaluate(() => document.activeElement.textContent.trim());
  console.log("Focused after ArrowDown (rail tab):", active);
  await page.keyboard.press("ArrowDown"); // move to 2nd group tab (Global Incorporation)
  await page.waitForTimeout(50);
  active = await page.evaluate(() => document.activeElement.textContent.trim());
  console.log("Focused after 2nd ArrowDown (should be Global Incorporation):", active);
  await page.keyboard.press("ArrowRight"); // into service list
  await page.waitForTimeout(50);
  active = await page.evaluate(() => document.activeElement.textContent.trim());
  console.log("Focused after ArrowRight (first service link):", active);
  await page.keyboard.press("ArrowDown"); // next service link
  await page.waitForTimeout(50);
  active = await page.evaluate(() => document.activeElement.textContent.trim());
  console.log("Focused after ArrowDown in list (2nd service):", active);
  await page.keyboard.press("ArrowLeft"); // back to rail tab
  await page.waitForTimeout(50);
  active = await page.evaluate(() => document.activeElement.textContent.trim());
  console.log("Focused after ArrowLeft (back to rail tab):", active);
  await page.keyboard.press("Escape");
  await page.waitForTimeout(100);
  const megaHiddenAfterEsc = await page.$eval("#mega-menu", (el) => el.hidden);
  active = await page.evaluate(() => document.activeElement.textContent.trim());
  console.log("Mega menu hidden after Escape:", megaHiddenAfterEsc, "| focus returned to:", active);

  // --- 6. Mobile drawer test at 375px
  await page.setViewportSize({ width: 375, height: 800 });
  await page.reload({ waitUntil: "networkidle" });
  await page.screenshot({ path: "dev/screenshots/05-mobile-closed.png" });
  await page.click("#hamburger-trigger");
  await page.waitForTimeout(250);
  await page.screenshot({ path: "dev/screenshots/06-mobile-drawer-root.png" });
  await page.click('.drawer-list__trigger[data-category="trademark-ip"]');
  await page.waitForTimeout(250);
  await page.screenshot({ path: "dev/screenshots/07-mobile-drawer-groups.png" });
  await page.click('.drawer-list__trigger[data-group="designs"]');
  await page.waitForTimeout(250);
  await page.screenshot({ path: "dev/screenshots/08-mobile-drawer-services.png" });
  const breadcrumb = await page.$eval("#drawer-breadcrumb", (el) => el.textContent);
  console.log("Drawer breadcrumb at level 3:", breadcrumb);
  const bodyScrollLocked = await page.evaluate(() => document.body.classList.contains("drawer-open"));
  console.log("Body scroll locked:", bodyScrollLocked);
  await page.click("#drawer-back");
  await page.waitForTimeout(250);
  const breadcrumb2 = await page.$eval("#drawer-breadcrumb", (el) => el.textContent);
  console.log("Drawer breadcrumb after back:", breadcrumb2);
  await page.click("#drawer-close");
  await page.waitForTimeout(250);
  const drawerHidden = await page.$eval("#mobile-drawer", (el) => el.hidden);
  console.log("Drawer hidden after close:", drawerHidden);

  console.log("\n=== JS ERRORS ===");
  console.log(errors.length ? errors.join("\n") : "none");

  await browser.close();
})();
