/* tools/lib/home.js — homepage block renderers. Everything is rendered at
   build time from data/, so nothing on the homepage hardcodes a service,
   count or nav link. No fee is rendered anywhere on the site. */
const { esc, figs, list } = require("./util");
const icon = require("./icons");

const CHEVRON = '<svg class="accordion__chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6"/></svg>';

const FEATURED_SLUGS = [
  "pvt-ltd-company-registration",
  "gst-registration",
  "trademark-registration",
  "fssai-license-registration",
  "udyam-msme-registration",
  "pollution-control-consent-to-operate"
];
// Picked for spread in quote length and voice — "vary rhythm between cards".
const TESTIMONIAL_NAMES = ["Meenal Kulkarni", "Rohit Bhalla", "Kavitha Reddy"];

module.exports = function home(ROOT, nav, site, services, data) {
  const { clients, testimonials, faq } = data;
  const groupOf = (slug) => nav.allServices.find((x) => x.slug === slug).group;
  const categoryLabel = (slug) => (nav.navigation.find((c) => c.slug === slug) || {}).label || slug;

  return {
    popularServices: () =>
      list(site.popularServices, (slug) => {
        const s = nav.allServices.find((x) => x.slug === slug);
        if (!s) throw new Error(`site.popularServices: "${slug}" is not in navigation.js`);
        return `<li><a class="finder__chip" href="/services/${s.slug}.html">${esc(s.title)}</a></li>`;
      }),
    // "What we handle": one white panel per category. Fails the build if a
    // configured slug is missing or belongs to another category.
    categoryPanels: () =>
      list(nav.navigation, (cat) => {
        const cfg = site.categoryPanels[cat.slug];
        if (!cfg) throw new Error(`site.categoryPanels is missing "${cat.slug}"`);
        const count = cat.groups.reduce((n, g) => n + g.services.length, 0);
        const links = cfg.services.map((slug) => {
          const s = nav.allServices.find((x) => x.slug === slug);
          if (!s || s.category !== cat.slug) throw new Error(`categoryPanels.${cat.slug}: "${slug}" is not a ${cat.slug} service`);
          return `<li><a href="/services/${s.slug}.html">${esc(s.title)}</a></li>`;
        });
        const href = `/services.html?category=${cat.slug}`;
        return `<div class="panel" data-reveal>
        ${icon(cfg.icon)}
        <h3 class="panel__title"><a href="${href}">${esc(cat.label)}</a></h3>
        <p class="panel__count"><span class="fig">${count}</span> services · <span class="fig">${cat.groups.length}</span> groups</p>
        <p class="panel__desc">${esc(cfg.description)}</p>
        <ul class="panel__list">${links.join("")}</ul>
        <a class="panel__all text-link" href="${href}">All ${esc(cat.label)} services →</a>
      </div>`;
      }),
    handleCounts: () =>
      `<span class="fig">${nav.navStats.totalServices}</span> services · <span class="fig">${nav.navStats.totalGroups}</span> practice groups · <span class="fig">${nav.navStats.totalCategories}</span> categories`,
    segments: () =>
      list(site.segments, (seg) => {
        const links = seg.links.map((l) => `<a href="/services/${l.slug}.html">${esc(l.title)}</a>`).join(' <span class="segment__sep" aria-hidden="true">·</span> ');
        return `<div class="segment">
        <h3 class="segment__name ruled">${esc(seg.name)}</h3>
        <p class="segment__desc">${esc(seg.description)}</p>
        <p class="segment__links">${links}</p>
      </div>`;
      }),
    // Callback form <select>: every service, one <optgroup> per category.
    callbackServiceOptions: () =>
      list(nav.navigation, (cat) =>
        `<optgroup label="${esc(cat.label)}">` +
        cat.groups.flatMap((g) => g.services).map((s) => `<option value="${s.slug}">${esc(s.title)}</option>`).join("") +
        `</optgroup>`
      ),
    // FAQ accordion: first item open in the markup, so the section reads as
    // open text before (and without) JavaScript.
    faqItems: () =>
      list(faq, (item, i) => {
        const open = i === 0;
        const verify = item.verify ? `\n        <!-- VERIFY ${esc(item.verify)} before launch -->` : "";
        return `<div class="accordion__item${open ? " is-open" : ""}">${verify}
        <h3 class="accordion__heading"><button type="button" class="accordion__trigger" id="faq-q-${i}" aria-expanded="${open}" aria-controls="faq-a-${i}"><span>${esc(item.q)}</span>${CHEVRON}</button></h3>
        <div class="accordion__panel" id="faq-a-${i}" role="region" aria-labelledby="faq-q-${i}"><div><p>${esc(item.a)}</p></div></div>
      </div>`;
      }),
    faqJsonLd: () => {
      const ld = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } }))
      };
      return `<script type="application/ld+json">\n${JSON.stringify(ld, null, 2).replace(/</g, "\u003c")}\n  </script>`;
    },
    featuredServices: () =>
      list(FEATURED_SLUGS.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean), (s) =>
        `<a class="card" href="/services/${s.slug}.html" data-reveal><p class="card__category">${esc(categoryLabel(s.category))}</p><h3 class="card__title" style="view-transition-name: svc-${s.slug}">${esc(s.title)}</h3><p class="card__desc">${esc(s.shortDesc)}</p><div class="card__meta"><span class="card__group">${esc(groupOf(s.slug))}</span><span class="card__turnaround">${figs(esc(s.turnaround))}</span></div></a>`
      ),
    // Static wordmark row — no marquee: looping decorative motion is banned.
    clientLogos: () => list(clients, (c) => `<li class="clients__item">${esc(c.name)}</li>`),
    testimonials: () =>
      list(TESTIMONIAL_NAMES.map((n) => testimonials.find((t) => t.name === n)).filter(Boolean), (t) => {
        const initials = t.name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
        const month = new Date(t.date).toLocaleDateString("en-IN", { month: "short", year: "numeric" });
        return `<figure class="testimonial-card" data-reveal>
        <blockquote class="testimonial-card__quote">${esc(t.quote)}</blockquote>
        <figcaption class="testimonial-card__attribution">
          <span class="testimonial-card__initials" aria-hidden="true">${esc(initials)}</span>
          <span>
            <span class="testimonial-card__name">${esc(t.name)}</span>
            <span class="testimonial-card__role">${esc(t.role)}, ${esc(t.company)}</span>
          </span>
        </figcaption>
        <p class="testimonial-card__meta">${esc(t.service)} · ${figs(esc(month))}</p>
      </figure>`;
      })
  };
};
