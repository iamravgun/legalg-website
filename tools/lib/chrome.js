/* tools/lib/chrome.js — header and footer partial renderers, built from
   data/navigation.js and data/site.js so no nav link is ever hand-typed.
   The per-group service panels are NOT rendered here — nav.js builds
   those client-side on first open. */
const { esc, figs, list } = require("./util");

module.exports = function chrome(nav, site) {
  const socialByLabel = (label) => (site.socials.find((s) => s.label === label) || {}).href || "#";

  const siteTokens = {
    sitePhone: site.phone,
    sitePhoneHref: site.phoneHref.replace(/^tel:/, ""),
    siteWhatsapp: site.whatsapp,
    siteWhatsappHref: site.whatsappHref,
    siteEmail: site.email,
    siteEmailHref: site.email,
    siteAddressLine1: site.address.line1,
    siteAddressLine2: site.address.line2,
    siteAddressCity: site.address.city,
    siteAddressState: site.address.state,
    siteAddressPincode: site.address.pincode,
    siteSocialLinkedIn: socialByLabel("LinkedIn"),
    siteSocialTwitter: socialByLabel("Twitter"),
    siteSocialFacebook: socialByLabel("Facebook"),
    siteSocialYoutube: socialByLabel("YouTube"),
    siteDisclaimer: site.disclaimer,
    siteLegalEntity: site.legalEntity,
    totalServices: String(nav.navStats.totalServices),
    totalGroups: String(nav.navStats.totalGroups),
    totalCategories: String(nav.navStats.totalCategories),
    // Mobile sticky bar primary action — service pages override these.
    stickyHref: "/contact.html?intent=quote",
    stickyLabel: "Get a Quote",
    businessHoursLine: figs(site.hours.map((h) => `${esc(h.day)} ${esc(h.time)}`).join(" · "))
  };

  const chevronDown = '<svg class="primary-nav__chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
  const chevronRight = '<svg class="drawer-list__chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>';

  const railTab = (cat, g) =>
    `<button type="button" class="mega-menu__railtab" role="tab" id="tab-${g.slug}" aria-selected="false" aria-controls="panel-${g.slug}" data-category="${cat.slug}" data-group="${g.slug}" tabindex="-1">${esc(g.label)}<span class="mega-menu__railcount fig">${g.services.length}</span></button>`;

  // A category whose groups carry a `section` gets one tablist per section,
  // each labelled by a heading that pins to the top of the scrolling rail.
  function rail(cat) {
    const sections = [];
    for (const g of cat.groups) {
      const key = g.section || "";
      let s = sections[sections.length - 1];
      if (!s || s.key !== key) sections.push((s = { key, groups: [] }));
      s.groups.push(g);
    }
    const body = sections
      .map((s, i) => {
        const id = `railsec-${cat.slug}-${i}`;
        const head = s.key ? `<p class="mega-menu__railsection" id="${id}">${esc(s.key)}</p>` : "";
        const label = s.key ? `aria-labelledby="${id}"` : `aria-label="${esc(cat.label)} groups"`;
        return head + `<div class="mega-menu__tablist" role="tablist" aria-orientation="vertical" ${label}>` + list(s.groups, (g) => railTab(cat, g)) + `</div>`;
      })
      .join("");
    return `<div class="mega-menu__rail${sections.length > 1 ? " mega-menu__rail--sectioned" : ""}" id="rail-${cat.slug}" data-rail-for="${cat.slug}" hidden>${body}</div>`;
  }

  const headerBlocks = {
    categoryTriggers: () =>
      list(nav.navigation, (cat) =>
        `<li class="primary-nav__item" role="none"><button type="button" class="primary-nav__trigger" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-controls="mega-menu" data-category="${cat.slug}">${esc(cat.label)}${chevronDown}</button></li>`
      ),
    categoryRails: () => list(nav.navigation, rail),
    drawerCategories: () =>
      list(nav.navigation, (cat) =>
        `<li class="drawer-list__item"><button type="button" class="drawer-list__trigger" data-category="${cat.slug}"><span>${esc(cat.label)}</span>${chevronRight}</button></li>`
      )
  };

  const footerBlocks = {
    footerColumns: () =>
      list(nav.footerGroups, (col) =>
        `<div class="footer-col"><h3 class="footer-col__title">${esc(col.label)}</h3><ul class="footer-col__list">` +
        list(col.links, (l) => `<li><a href="${l.href}">${esc(l.label)}</a></li>`) +
        `</ul></div>`
      ),
    footerHours: () =>
      list(site.hours, (h) => `<li><span class="footer-hours__day">${esc(h.day)}</span><span class="footer-hours__time">${figs(esc(h.time))}</span></li>`),
    paymentMethods: () =>
      list(site.paymentMethods, (m) =>
        `<li class="payment-chip"><svg width="20" height="14" viewBox="0 0 24 16" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="1" y="1" width="22" height="14" rx="2"/><path d="M1 5.5h22"/></svg><span>${esc(m)}</span></li>`
      ),
    policyLinks: () => list(site.policyLinks, (p) => `<li><a href="${p.href}">${esc(p.label)}</a></li>`)
  };

  return { siteTokens, headerBlocks, footerBlocks };
};
