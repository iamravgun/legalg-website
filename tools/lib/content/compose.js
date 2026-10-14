/* tools/lib/content/compose.js — builds tier-2 page content for one service.

   Layers, most specific first:
     1. the service's own entry in its group profile — a written lead (its
        opening sentence, constructed differently from every sibling's), and
        optionally its own context, audience, documents, FAQs and overrides;
     2. the group profile's pools — regime context, practice notes, audience,
        documents and questions — from which a slug-seeded selection is drawn,
        so siblings share a regime but not a page;
     3. the kind of work — the shape of the steps and generic questions.

   Opening uniqueness is checked in service.js: no two services in a group
   may begin with the same word. */
const { classify, STEPS, FAQS, GENERAL_FAQS } = require("./kinds");

function seed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

// Seeded shuffle, then take n — a different subset per slug.
function pick(pool, n, rnd) {
  const a = pool.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, Math.max(0, n));
}
const uniq = (arr, key) => {
  const seen = new Set();
  return arr.filter((x) => {
    const k = key ? key(x) : x;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
};

function context(profile, entry) {
  const own = (profile.services && profile.services[entry.slug]) || null;
  if (!own || !own.lead) return null;
  const take = (k) => (own[k] !== undefined ? own[k] : profile[k]);
  return {
    slug: entry.slug,
    title: entry.title,
    kind: classify(entry.title, own.kind),
    lead: own.lead,
    authority: take("authority"),
    authorityShort: take("authorityShort") || "the authority",
    law: take("law"),
    portal: take("portal") || "the relevant online portal",
    instrument: take("instrument") || "approval",
    timeline: own.timeline || null,
    steps: own.steps || profile.steps || null,
    own,
    profile
  };
}

function fill(text, c) {
  return text.replace(/{(\w+)}/g, (m, k) => (c[k] !== undefined ? c[k] : m));
}

function compose(c) {
  const rnd = seed(c.slug);
  const own = c.own;
  const g = c.profile;

  // Overview: 2–3 paragraphs, by how much there is to say.
  const ownCtx = own.ctx || [];
  // solo: the service sits under a different regime from its group, so it
  // draws nothing regime-specific from the group pools.
  const solo = !!own.solo;
  const groupCtx = solo ? [] : pick(g.context || [], 2 + Math.floor(rnd() * 2), rnd);
  const practice = pick(own.practice || g.practice || [], 1 + Math.floor(rnd() * 2), rnd);
  const p1 = [c.lead].concat(ownCtx.slice(0, 1)).join(" ");
  const body = ownCtx.slice(1).concat(groupCtx);
  const overview = [p1];
  const wantThree = practice.length && (body.length >= 3 || rnd() > 0.45);
  if (wantThree) {
    overview.push(body.join(" "));
    overview.push(practice.join(" "));
  } else {
    overview.push(body.concat(practice.slice(0, 1)).join(" "));
  }

  // Who it applies to: 3–4 situations, the service's own first.
  const audience = uniq((own.aud || []).concat(pick(g.audience || [], 6, rnd))).slice(0, 3 + Math.floor(rnd() * 2));

  // Documents: the service's own list, or a 4–7 item selection from the group.
  const documents = own.docs || (solo ? [] : pick(g.docs || [], 4 + Math.floor(rnd() * 4), rnd));

  // Steps: 3 or 4; three keeps the first and the last two so it ends at the outcome.
  const all = c.steps || STEPS[c.kind];
  const stepCount = rnd() > 0.5 ? 4 : 3;
  const chosen = stepCount === 3 && all.length > 3 ? [all[0]].concat(all.slice(-2)) : all.slice(0, stepCount);
  const steps = chosen.map(([t, d]) => ({ title: fill(t, c), desc: fill(d, c) }));

  // FAQs: 3 or 4 — the service's own, then the group's, then the kind's.
  const ownFaqs = own.faq ? [].concat(own.faq) : [];
  const faqs = uniq(ownFaqs.concat(solo ? [] : pick(g.faqs || [], 3, rnd), (FAQS[c.kind] || []).concat(GENERAL_FAQS)), (f) => f.q).slice(0, 3 + (rnd() > 0.55 ? 1 : 0));

  const shortDesc = (own.short || c.lead).replace(/\s*\[\[V\]\]/g, "").split(/(?<=\.)\s/)[0];

  return {
    tier: 2,
    kind: c.kind,
    authority: c.authority,
    law: c.law,
    timeline: c.timeline,
    shortDesc,
    overview: overview.filter((p) => p && p.trim()),
    appliesTo: audience,
    documents,
    steps,
    eligibility: own.elig || null,
    faqs
  };
}

module.exports = { context, compose };
