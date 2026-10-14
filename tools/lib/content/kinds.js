/* tools/lib/content/kinds.js — what KIND of work a service is, inferred
   from its title (a profile may override it). The kind decides the shape of
   the work (steps), the generic questions people ask about that kind of
   work, and nothing else. Regime-specific facts come from group profiles. */

const KINDS = [
  { id: "retainer", test: /\bretainer\b|\bservices?$|\bwatch service\b|\bportfolio management\b|\bmailroom\b|\bvirtual office\b|\bregistered agent\b|\bassistance\b|\bprocessing\b/i },
  { id: "dispute", test: /\bnotice reply\b|\bappeal\b|\bsuit\b|\bhearing\b|\brepresentation\b|\bdispute\b|\bcease and desist\b|\binfringement notice\b|\bcompounding\b|\bopposition\b|\bshow-cause\b/i },
  { id: "scheme", test: /\bscheme\b|\bseed fund\b|\bloan\b|\bpmegp\b|\bstand-up\b|\bcgtmse\b/i },
  { id: "renewal", test: /\brenewal\b|\brenew\b/i },
  { id: "modification", test: /\bmodification\b|\bamendment\b|\bchange (in|of)\b|\baddition or removal\b|\bconversion\b/i },
  { id: "closure", test: /\bstrike[- ]off\b|\bwinding[- ]up\b|\bclosure\b|\bcancellation\b|\bexit\b|\bdormant\b/i },
  { id: "filing", test: /\breturn\b|\bfiling\b|\bannual\b|\bstatement\b|\bkyc\b|\bform \w|\bgstr\b|\breport(ing)?\b/i },
  { id: "drafting", test: /\bdrafting\b|\bagreement\b|\bpolicy\b|\bmanual\b|\bnotice\b/i },
  { id: "certification", test: /\bcertification\b|\baccreditation\b|\bhaccp\b|\bgmp\b|\bmark(ing)?\b/i },
  { id: "audit", test: /\baudit\b|\bdue diligence\b|\bassessment\b|\breview\b|\bvaluation\b|\breconciliation\b|\bhealth check\b|\bstudy\b|\bsearch\b/i },
  { id: "advisory", test: /\badvisory\b|\bplanning\b|\bstructuring\b|\bstrategy\b|\bcompliance$/i },
  { id: "licence", test: /\blicen[cs]e\b|\bpermit\b|\bnoc\b|\bauthori[sz]ation\b|\bapproval\b|\bclearance\b|\bconsent\b|\brecognition\b/i },
  { id: "registration", test: /.*/ }
];

function classify(title, override) {
  return override || KINDS.find((k) => k.test.test(title)).id;
}

/* Steps per kind. {portal} {authorityShort} {instrument} are filled from the
   group profile; a profile may replace the steps for its regime entirely. */
const STEPS = {
  registration: [
    ["Applicability check", "We confirm that this is the right registration for what you do, and whether anything else must be in place before it can be filed."],
    ["Documents assembled", "Identity, address and business documents are collected and checked against the {authorityShort} checklist before anything is uploaded."],
    ["Application filed", "The application is submitted on {portal} and the acknowledgement shared with you."],
    ["Queries and grant", "Any clarification the department raises is answered on your behalf until the {instrument} is issued."]
  ],
  licence: [
    ["Scope and category", "The activity, premises and scale are mapped to the correct licence category, since that decides the authority and the supporting documents."],
    ["Premises and records readied", "Anything the licensing officer will look for — premises documents, technical staff, layouts or equipment lists — is put in order first."],
    ["Application filed", "The application is filed with {authorityShort} on {portal} and the reference number tracked."],
    ["Inspection and grant", "Where the authority inspects, we prepare you for it and close any observations until the {instrument} is granted."]
  ],
  renewal: [
    ["Validity checked", "We note the current expiry date and anything about the business that has changed since the {instrument} was granted."],
    ["Renewal application prepared", "Current documents are collected; changed details are declared rather than carried over from the old grant."],
    ["Filed before expiry", "The renewal is submitted on {portal} ahead of the expiry date so there is no gap in cover."],
    ["Renewed {instrument} delivered", "The renewed {instrument} is shared and the next expiry date added to your compliance calendar."]
  ],
  modification: [
    ["What is changing", "The change is mapped to the specific fields and approvals it touches, because one change often triggers several filings."],
    ["Resolutions and documents", "Supporting resolutions, consents and proofs for the new position are drafted and signed."],
    ["Filed with {authorityShort}", "The change is filed on {portal} and any department query answered."],
    ["Records updated", "The amended record is obtained and your other registrations updated to match."]
  ],
  closure: [
    ["Eligibility for closure", "We check whether the entity meets the conditions for this route, or whether a different exit route applies."],
    ["Pending items cleared", "Outstanding returns, liabilities and bank accounts are closed out, since the application cannot be approved with them open."],
    ["Resolutions, affidavits and filing", "The resolutions, indemnities and statements of account are prepared and the application filed with {authorityShort}."],
    ["Tracked to final order", "The application is followed through the notice period until the closure is recorded."]
  ],
  filing: [
    ["Data collected", "The figures and records the {instrument} draws on are collected and checked against your books."],
    ["Reconciled and prepared", "Mismatches are resolved before preparation, not after a notice."],
    ["Filed on {portal}", "The {instrument} is filed, signed and acknowledged before the due date."],
    ["Acknowledgement and next date", "You receive the acknowledgement and the next due date for this filing."]
  ],
  drafting: [
    ["Instructions and commercial terms", "We take instructions on the commercial position first — what has been agreed and what has not."],
    ["First draft", "A draft is prepared for your situation, with the clauses that matter most flagged for discussion."],
    ["Review and negotiation", "We revise against the other side's comments and explain what each change does to your position."],
    ["Execution", "The final document is settled for signature, with stamping and execution formalities noted."]
  ],
  certification: [
    ["Gap assessment", "Current practices are compared against the standard's requirements and a gap list is agreed."],
    ["System documented and implemented", "Policies, procedures and records are built around how you actually work, then put into use."],
    ["Internal audit and management review", "An internal audit and a management review are completed, because the certifying body will ask for both."],
    ["Certification audit", "The certifying body conducts its audit; we support you through it and through closing any findings."]
  ],
  audit: [
    ["Scope agreed", "The period, entities and questions the review must answer are fixed at the start."],
    ["Records examined", "Books, filings and documents are examined against the applicable requirements."],
    ["Findings reported", "Findings are reported with the exposure each one carries and what it takes to correct it."],
    ["Corrective action", "Where the findings need filings, replies or changes, those are prepared as a follow-on."]
  ],
  retainer: [
    ["Onboarding", "We take over your existing records, logins and open items, and agree who on your side signs off what."],
    ["Calendar set", "Every recurring obligation is put on one calendar with its due date and the information needed for it."],
    ["Monthly cycle", "Work is done in a fixed monthly cycle, with filings made before their due dates rather than on them."],
    ["Reporting", "You receive a short status note each period: what was filed, what is pending, and what needs your input."]
  ],
  dispute: [
    ["Papers read", "The notice, order or claim is read for exactly what it alleges and the deadline it sets."],
    ["Facts and evidence", "The facts are assembled and the documents that prove them collected before anything is written."],
    ["Response filed", "A written response is filed within time, with evidence attached and the legal position stated."],
    ["Hearing and outcome", "Hearings are attended and follow-up submissions made until the matter is decided or settled."]
  ],
  scheme: [
    ["Eligibility mapped", "The applicant and the project are checked against the scheme's current guidelines before anything is prepared."],
    ["Project papers", "The project report, financials and supporting documents the scheme asks for are prepared."],
    ["Application lodged", "The application is lodged on {portal} or with the implementing agency."],
    ["Follow-through", "Queries, interviews or inspections by the agency or lending bank are handled until a decision."]
  ],
  advisory: [
    ["Facts and objective", "We take the facts and what you are trying to achieve before forming a view."],
    ["Options analysed", "The available routes are compared on compliance burden, timing and risk."],
    ["Written advice", "Our view is set out in writing, with the steps to implement it."],
    ["Implementation support", "Filings, documents or representations that follow from the advice are handled as needed."]
  ]
};

/* Questions true of the KIND whatever the regime; answers stay at the level
   that is always true. */
const FAQS = {
  registration: [
    { q: "Can the application be filed before every document is ready?", a: "It can be started, but filing with a missing or mismatched document is the most common reason for a query or rejection. We hold the filing until the set is complete." },
    { q: "Will someone from the department visit?", a: "For some registrations a physical verification or inspection is part of the process; for others it is entirely document-based. We tell you which applies before filing." }
  ],
  licence: [
    { q: "Can we start operating while the application is pending?", a: "Generally no — most licences must be in hand before the regulated activity begins. Where a provisional or deemed approval exists, we will say so for your case." },
    { q: "Does the licence need to be displayed or quoted anywhere?", a: "Many licences must be displayed at the premises or quoted on invoices, labels or correspondence. We list those obligations when the licence is issued." }
  ],
  renewal: [
    { q: "What happens if the renewal is filed after expiry?", a: "Depending on the regime, a late renewal may attract a penalty, need a fresh application, or leave you operating without a valid licence for the gap. Filing ahead of expiry avoids all three." },
    { q: "Do we need to re-submit documents that have not changed?", a: "Usually the renewal relies on the existing record, but anything that has changed — address, partners, capacity, products — must be declared rather than carried over." }
  ],
  modification: [
    { q: "Do other registrations need updating after this change?", a: "Often, yes. A change recorded with one authority is not automatically reflected with others, so GST, bank, tax and licence records may each need their own update." }
  ],
  closure: [
    { q: "Can an entity with pending liabilities be closed this way?", a: "Not usually. Simplified closure routes assume there is nothing left owing; where there are liabilities or disputes, a different route applies." },
    { q: "What happens to pending returns?", a: "They generally need to be filed before the closure application, because the authority checks the filing record first." }
  ],
  filing: [
    { q: "What if the due date has already passed?", a: "File as soon as possible. Late filing typically attracts a late fee or interest that grows with the delay; we file the overdue return first and then put the calendar in place." },
    { q: "Can a filed return be corrected?", a: "Some returns allow revision or a correction statement; others can only be corrected in a later period. The route depends on the return, so mistakes are best caught before filing." }
  ],
  drafting: [
    { q: "Can you work from our existing draft or the other side's draft?", a: "Yes. Reviewing and marking up a draft you already have is often quicker than starting fresh." },
    { q: "Does the document need to be stamped?", a: "Stamp duty depends on the instrument and the state where it is executed. Under-stamped documents can face problems as evidence, so we note the stamping position before signature." }
  ],
  certification: [
    { q: "Does LegalG issue the certificate?", a: "No. Certification is granted by an independent certifying or accreditation body. We prepare your organisation for that audit; a consultant certifying its own client's system would not be credible." },
    { q: "How long does the certification last?", a: "Certification usually runs for a cycle with periodic surveillance audits in between. The certifying body sets the exact schedule." }
  ],
  audit: [
    { q: "Is the report shared with any authority?", a: "Not unless the review is a statutory one or you choose to rely on it in a filing. An internal review stays internal." },
    { q: "Can findings be corrected before anyone else sees them?", a: "That is usually the point. Most findings from an internal review can be corrected by filing, revising or documenting before an authority asks." }
  ],
  retainer: [
    { q: "Do we keep access to our own portals and records?", a: "Yes. Logins and records stay in your name; we work with delegated access, and everything is handed back if the engagement ends." },
    { q: "What do you need from us each month?", a: "A short, fixed list — usually bank statements, sales and purchase data and any new contracts — agreed at onboarding so nothing is chased at the last minute." }
  ],
  dispute: [
    { q: "What if the deadline in the notice is very close?", a: "Most forums allow an adjournment or extension on a reasoned request. We ask for it while the reply is prepared, rather than file something incomplete." },
    { q: "Is settlement an option?", a: "Often. Where the facts favour a negotiated outcome, we say so early — a settlement on record is usually cheaper than a contested hearing." }
  ],
  scheme: [
    { q: "Is approval guaranteed if we meet the eligibility criteria?", a: "No. Eligibility gets the application considered; the implementing agency or bank still assesses the project on its merits." },
    { q: "Can we apply under more than one scheme?", a: "Sometimes, but schemes often restrict combining benefits for the same project. We check the overlap before applying." }
  ],
  advisory: [
    { q: "Is the advice given in writing?", a: "Yes. Advice that a decision will rest on is set out in writing, with the assumptions it depends on." },
    { q: "Do you handle the implementation as well?", a: "Yes. Where the advice leads to filings, documents or representations, we carry those through rather than handing you a memo." }
  ]
};

/* Last-resort questions, true of any engagement — used only to bring a page
   up to the three-question minimum when the kind and group pools run short. */
const GENERAL_FAQS = [
  { q: "What do you need from us to start?", a: "A short call to understand the situation, and the documents listed on this page. We confirm the exact list in writing before any work begins." },
  { q: "How will we know where things stand?", a: "Your advisor shares each acknowledgement, query and order as it arrives, and a short status note at each step — you should not have to chase for an update." },
  { q: "Will we get a written quote first?", a: "Yes. Scope and charges are confirmed in writing before any payment, and nothing is added mid-way without your agreement." }
];

module.exports = { classify, STEPS, FAQS, GENERAL_FAQS };
