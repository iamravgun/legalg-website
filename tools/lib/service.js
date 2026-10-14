/* tools/lib/service.js — one /services/<slug>.html page. Tier 1 content comes
   from data/services.js; tier 2 is composed from the group profile. Sections
   with no content are omitted entirely — never an empty heading. */
const { esc, figs, list } = require("./util");
const { prose, plain, MARK } = require("./content/verify");
const { context, compose } = require("./content/compose");
const { classify } = require("./content/kinds");

const SITE_URL = "https://www.legalgassociates.in";
const SQUARE = '<svg class="checklist__mark" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" focusable="false"><rect x="1.75" y="1.75" width="12.5" height="12.5" rx="1.5"/></svg>';
const CHEVRON = '<svg class="accordion__chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6"/></svg>';

module.exports = function serviceRenderer(nav, tier1, profiles) {
  const byCat = Object.fromEntries(nav.navigation.map((c) => [c.slug, c]));
  const firstWord = (text) => (String(text).match(/[A-Za-z0-9']+/) || [""])[0].toLowerCase();

  // Rule 2: no two pages in a group may open the same way. Operationalised as
  // "no two services in a group begin with the same word" (tier 1 included).
  const openingClashes = [];
  for (const cat of nav.navigation) {
    for (const g of cat.groups) {
      const seen = {};
      for (const s of g.services) {
        const t1 = tier1.find((x) => x.slug === s.slug);
        const own = profiles[g.slug] && profiles[g.slug].services && profiles[g.slug].services[s.slug];
        const text = t1 ? t1.overview : own && own.lead;
        if (!text) continue;
        const w = firstWord(text);
        if (seen[w]) openingClashes.push(`${g.slug}: "${w}…" opens both ${seen[w]} and ${s.slug}`);
        else seen[w] = s.slug;
      }
    }
  }

  function contentFor(entry) {
    const t1 = tier1.find((s) => s.slug === entry.slug);
    if (t1) {
      return {
        tier: 1,
        kind: classify(t1.title),
        authority: t1.authority,
        law: null,
        timeline: t1.turnaround,
        shortDesc: t1.shortDesc,
        overview: t1.overview.split("\n\n"),
        appliesTo: t1.appliesTo || [],
        documents: t1.documentsRequired || [],
        steps: t1.processSteps || [],
        eligibility: t1.eligibility && t1.eligibility.length ? t1.eligibility : null,
        faqs: t1.faqs || [],
        relatedSlugs: t1.relatedSlugs || []
      };
    }
    const profile = profiles[entry.groupSlug];
    const ctx = profile && context(profile, entry);
    return ctx ? Object.assign(compose(ctx), { relatedSlugs: [] }) : null;
  }

  function render(entry) {
    const c = contentFor(entry);
    if (!c) return null;
    const cat = byCat[entry.category];
    const group = cat.groups.find((g) => g.slug === entry.groupSlug);
    let verify = 0;
    const p = (text) => {
      const r = prose(text);
      verify += r.count;
      return r.html;
    };

    const crumbs = [
      { name: "Home", url: "/" },
      { name: cat.label, url: `/services.html?category=${cat.slug}` },
      { name: group.label, url: `/category/${group.slug}.html` },
      { name: entry.title, url: `/services/${entry.slug}.html` }
    ];
    const breadcrumbs = `<nav class="breadcrumbs" aria-label="Breadcrumb"><ol>${crumbs
      .map((b, i) => (i === crumbs.length - 1 ? `<li><span aria-current="page">${esc(b.name)}</span></li>` : `<li><a href="${b.url}">${esc(b.name)}</a></li>`))
      .join("")}</ol></nav>`;

    const authorityLine = c.authority || (c.law ? c.law.split(";")[0] : null);
    const filingRef = `<p class="filing-ref">${esc(cat.label)} / ${esc(group.label)}${authorityLine ? " / " + esc(authorityLine) : ""}</p>`;

    // Spec strip: timeline and authority — each row only if it has a value.
    const rows = [];
    if (c.timeline) rows.push(["Typical timeline", p(c.timeline)]);
    if (c.authority) rows.push(["Governing authority", esc(c.authority)]);
    else if (c.law) rows.push(["Governing law", esc(c.law.replace(/;\s*/g, " · "))]);
    const specStrip = rows.length
      ? `<dl class="spec-list svc__spec">${rows.map(([l, v]) => `<div class="spec-row"><dt class="spec-row__label">${l}</dt><dd class="spec-row__value">${v}</dd></div>`).join("")}</dl>`
      : "";

    const section = (id, title, body) => `<section class="svc-section" aria-labelledby="${id}"><h2 class="svc-section__title ruled" id="${id}">${title}</h2>${body}</section>`;
    const sections = [];
    sections.push(section("overview", "Overview", `<div class="svc-prose">${c.overview.map((para) => `<p>${p(para)}</p>`).join("")}</div>`));
    if (c.appliesTo.length) sections.push(section("applies", "Who this applies to", `<ul class="marker-list">${list(c.appliesTo, (a) => `<li>${p(a)}</li>`)}</ul>`));
    if (c.documents.length) sections.push(section("documents", "Documents required", `<ul class="checklist">${list(c.documents, (d) => `<li class="checklist__item">${SQUARE}<span>${p(d)}</span></li>`)}</ul>`));
    if (c.steps.length)
      sections.push(section("process", ["drafting", "advisory", "audit", "certification"].includes(c.kind) ? "How the work proceeds" : "How the filing proceeds", `<ol class="steps">${c.steps.map((s, i) => `<li class="steps__item"><span class="steps__index">${i + 1}</span><h3 class="steps__title">${esc(s.title)}</h3><p class="steps__desc">${p(s.desc)}</p></li>`).join("")}</ol>`));
    if (c.eligibility) sections.push(section("eligibility", "Eligibility", `<ul class="marker-list">${list(c.eligibility, (e) => `<li>${p(e)}</li>`)}</ul>`));
    if (c.faqs.length)
      sections.push(
        section(
          "faqs",
          "Questions people ask",
          `<div class="accordion">${c.faqs
            .map(
              (f, i) => `<div class="accordion__item${i === 0 ? " is-open" : ""}"><h3 class="accordion__heading"><button type="button" class="accordion__trigger" id="faq-q-${i}" aria-expanded="${i === 0}" aria-controls="faq-a-${i}"><span>${esc(f.q)}</span>${CHEVRON}</button></h3><div class="accordion__panel" id="faq-a-${i}" role="region" aria-labelledby="faq-q-${i}"><div><p>${p(f.a)}</p></div></div></div>`
            )
            .join("")}</div>`
        )
      );

    // Related: relatedSlugs, else the same group; never the page itself.
    const relatedSlugs = (c.relatedSlugs.length ? c.relatedSlugs : group.services.map((s) => s.slug)).filter((s) => s !== entry.slug).slice(0, 3);
    const relatedCards = relatedSlugs
      .map((slug) => {
        const r = nav.allServices.find((s) => s.slug === slug);
        const rc = r && contentFor(r);
        const desc = rc ? plain(rc.shortDesc) : "";
        const turn = rc && rc.timeline ? `<span class="card__turnaround">${figs(esc(plain(rc.timeline)))}</span>` : "";
        return `<a class="card" href="/services/${r.slug}.html" data-reveal><p class="card__category">${esc(r.categoryLabel)}</p><h3 class="card__title" style="view-transition-name: svc-${r.slug}">${esc(r.title)}</h3>${desc ? `<p class="card__desc">${esc(desc)}</p>` : ""}<div class="card__meta"><span class="card__group">${esc(r.group)}</span>${turn}</div></a>`;
      })
      .join("");
    const related = relatedCards
      ? `<section class="svc-related" aria-labelledby="related-title"><div class="container"><p class="eyebrow">Related services</p><h2 class="section-title" id="related-title">Often handled alongside this</h2><div class="card-grid card-grid--3">${relatedCards}</div></div></section>`
      : "";

    // Structured data — Service, FAQPage (when there are FAQs), BreadcrumbList. No offers.
    const url = `${SITE_URL}/services/${entry.slug}.html`;
    const ld = [
      { "@context": "https://schema.org", "@type": "Service", name: entry.title, serviceType: group.label, description: plain(c.shortDesc), url, areaServed: { "@type": "Country", name: "India" }, provider: { "@type": "Organization", name: "LegalG Associates", url: SITE_URL + "/" } },
      c.faqs.length && { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: plain(f.a) } })) },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: crumbs.map((b, i) => ({ "@type": "ListItem", position: i + 1, name: b.name, item: SITE_URL + b.url })) }
    ].filter(Boolean);
    const jsonLd = ld.map((o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, "\\u003c")}</script>`).join("\n  ");

    const description = plain(c.shortDesc);
    // Main-content word count, for the length-variation report.
    const words = sections.join(" ").replace(/<!--[\s\S]*?-->|<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    return {
      tier: c.tier,
      verify,
      words,
      tokens: {
        slug: entry.slug,
        titleHtml: esc(entry.title),
        pageTitle: esc(`${entry.title} — ${group.label} | LegalG Associates`),
        ogTitle: esc(`${entry.title} | LegalG Associates`),
        metaDescription: esc(description),
        canonical: url
      },
      blocks: {
        svcJsonLd: () => jsonLd,
        svcBreadcrumbs: () => breadcrumbs,
        svcFilingRef: () => filingRef,
        svcSpecStrip: () => specStrip,
        svcSections: () => sections.join("\n"),
        svcRelated: () => related
      }
    };
  }

  return { render, contentFor, openingClashes };
};

module.exports.MARK = MARK;
