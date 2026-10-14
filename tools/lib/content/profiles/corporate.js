/* Corporate & Advisory — eight groups. */
module.exports = {
  "corporate-governance-and-secretarial": {
    authority: "Ministry of Corporate Affairs; SEBI for listed companies",
    authorityShort: "the regulator",
    law: "Companies Act, 2013; SEBI (LODR) Regulations, 2015",
    instrument: "policy",
    intro: [
      "Governance is how a board actually controls a company: who sits on it, which committees it has, how conflicts and related-party dealings are approved, how concerns are raised, and how the board judges its own performance. The Companies Act sets the floor; SEBI's listing regulations add a great deal for listed companies.",
      "This group covers the policies and processes that put those requirements into practice — CSR, related party transactions, vigil mechanisms, board evaluation and POSH — and the advice to design them for how the company is really run.",
      "We write policies a board can operate, not ones that exist to be filed."
    ],
    context: [
      "Many governance requirements apply only above thresholds of paid-up capital, turnover, net worth or borrowings, so the first step is working out which ones apply. [[V]]",
      "The board's report must disclose a range of governance matters — CSR, related party transactions, evaluation, vigil mechanism, POSH — and gaps show up there first. [[V]]",
      "Policies have to be approved by the board and, for listed companies, often published on the company's website. [[V]]"
    ],
    practice: [
      "Investor due diligence reads governance documents closely; a policy adopted but never followed is worse than none.",
      "We tie each policy to an owner and a meeting where it is reviewed, because that is what keeps it alive."
    ],
    audience: [
      "A growing company crossing governance thresholds for the first time",
      "A board preparing for institutional investment or listing",
      "A company that must spend on CSR",
      "Independent directors reviewing the company's framework"
    ],
    docs: [
      "Memorandum and articles",
      "Audited financial statements for recent years",
      "Board and committee minutes",
      "Existing policies and codes",
      "List of related parties and transactions with them"
    ],
    faqs: [
      { q: "Do private companies need these policies?", a: "Some apply to every company, others only above size thresholds or to public and listed companies. We map which ones apply before drafting anything." },
      { q: "Who approves the policies?", a: "The board, and in some cases a committee first; certain matters also need shareholder approval." }
    ],
    services: {
      "corporate-governance-advisory": {
        lead: "Corporate governance is the set of rules that decides how a board actually controls a company — composition, committees, conflicts, information and accountability — and for listed companies much of it is mandated by SEBI. [[V]]",
        kind: "advisory"
      },
      "csr-policy-drafting-and-compliance": {
        lead: "CSR obligations under section 135 apply to companies above the net worth, turnover or net profit thresholds, which must spend a percentage of average net profits on eligible activities under a board-approved policy. [[V]]",
        kind: "drafting",
        ctx: ["Unspent amounts are transferred to a designated fund or an unspent CSR account within prescribed timelines, and the spend is reported in the board's report. [[V]]"]
      },
      "related-party-transaction-compliance": {
        lead: "Related party transactions need board approval — and shareholder approval above the thresholds — unless they are in the ordinary course of business and at arm's length, and they must be disclosed in the board's report. [[V]]",
        kind: "advisory"
      },
      "whistleblower-policy-drafting": {
        lead: "Vigil mechanisms are mandatory for listed companies and for companies that accept public deposits or borrow above the threshold, and a written whistleblower policy is how they are set up. [[V]]",
        kind: "drafting"
      },
      "board-evaluation-advisory": {
        lead: "Board evaluation — of the board, its committees and individual directors — is required annually for listed companies and for public companies above the paid-up capital threshold, with the method disclosed in the board's report. [[V]]",
        kind: "advisory"
      }
    }
  },

  "fema-and-foreign-investment": {
    authority: "Reserve Bank of India, through AD Category-I banks",
    authorityShort: "the RBI",
    law: "Foreign Exchange Management Act, 1999",
    portal: "the RBI's FIRMS portal and the AD bank",
    instrument: "filing",
    intro: [
      "Every rupee that crosses India's border is governed by FEMA. Foreign investment into Indian companies, Indian investment abroad, borrowing from overseas lenders, and the branch and liaison offices of foreign companies each have their own permitted routes, pricing rules and reporting duties, almost all of it routed through the company's authorised dealer bank to the RBI.",
      "Most FEMA problems are late or missing reports rather than prohibited transactions, and the law allows them to be regularised — by late submission fees or by compounding — if they are dealt with before the authorities act.",
      "We map a company's foreign transactions against its reporting history first, because the gaps are usually in the reports, not the transactions."
    ],
    context: [
      "FDI is permitted under the automatic route in most sectors, with sectoral caps, conditions or government approval in others. [[V]]",
      "Reports are filed through the AD bank, whose queries have to be answered before the RBI acknowledges the filing.",
      "Delayed reporting can be regularised with a late submission fee within limits; beyond them, compounding is required. [[V]]"
    ],
    practice: [
      "Companies usually find FEMA gaps in due diligence for their next round; we would rather find them first and fix them on the company's own timeline.",
      "We keep a single register of every foreign transaction and its report, because FEMA questions arrive years after the transaction."
    ],
    audience: [
      "An Indian company with foreign shareholders",
      "An Indian company investing in an overseas entity",
      "A foreign company with a branch or liaison office in India",
      "A company borrowing from a foreign lender or parent",
      "A company that has discovered missed FEMA reports"
    ],
    docs: [
      "Details of each foreign transaction — investment, remittance, borrowing",
      "Foreign inward remittance certificates and KYC",
      "Valuation reports",
      "Board resolutions and allotment records",
      "Previous FEMA filings and acknowledgements"
    ],
    faqs: [
      { q: "What if we missed a FEMA filing years ago?", a: "File it now with the late submission fee if it is within the permitted period; otherwise apply for compounding. Voluntary regularisation is far better than waiting for the regulator. [[V]]" },
      { q: "Does every foreign transaction need RBI approval?", a: "Most do not — they are permitted under the automatic route and only reported. Approval is needed only where the sector or transaction falls outside it. [[V]]" }
    ],
    services: {
      "fla-return-filing-foreign-liabilities-and-assets": {
        lead: "FLA returns are filed annually with the RBI by Indian companies and LLPs that have received foreign investment or invested abroad, reporting their foreign liabilities and assets. [[V]]",
        kind: "filing",
        instrument: "FLA return"
      },
      "odi-compliance-overseas-direct-investment": {
        lead: "Overseas direct investment does not end with the first remittance: annual performance reports, reporting of disinvestment and restructuring, and continuing FEMA conditions apply for as long as the investment is held. [[V]]",
        kind: "filing",
        instrument: "ODI filing"
      },
      "fema-compliance-advisory": {
        lead: "Foreign exchange law governs every rupee crossing the border — investment in and out, borrowing, guarantees, current-account payments — and most companies with any foreign element have FEMA obligations they have not mapped.",
        kind: "advisory"
      },
      "external-commercial-borrowing-ecb-advisory": {
        lead: "External commercial borrowings let Indian companies borrow from recognised foreign lenders within the RBI's framework on eligible borrowers, end uses, maturity and cost, reported monthly through the AD bank. [[V]]",
        kind: "advisory"
      },
      "liaison-office-annual-activity-certificate": {
        lead: "Liaison offices file an annual activity certificate, certified by a Chartered Accountant, confirming they confined themselves to permitted activities, with the AD bank and the tax authorities. [[V]]",
        kind: "filing",
        instrument: "annual activity certificate"
      },
      "rbi-compounding-application": {
        lead: "RBI compounding lets a company admit a FEMA contravention and settle it for a sum instead of facing adjudication, with the amount assessed on the contravention and the delay involved. [[V]]",
        kind: "dispute"
      },
      "compounding-of-fema-contraventions": {
        lead: "Contraventions of FEMA — late reporting, investment outside the permitted route — can be compounded voluntarily before the authorities act, which is usually quicker and cheaper than adjudication. [[V]]",
        kind: "dispute"
      },
      "branch-office-compliance-certificate": {
        lead: "Branch offices of foreign companies file an annual activity certificate with the AD bank and the RBI, with their audited accounts, confirming their activities stayed within the approval. [[V]]",
        kind: "filing",
        instrument: "annual activity certificate"
      }
    }
  },

  "sebi-and-listed-company-compliance": {
    authority: "Securities and Exchange Board of India (SEBI); stock exchanges",
    authorityShort: "SEBI and the exchanges",
    law: "SEBI Act, 1992 and SEBI regulations; Companies Act, 2013",
    portal: "the stock exchanges' listing portals",
    instrument: "disclosure",
    intro: [
      "Listing brings a second rulebook on top of the Companies Act. SEBI's regulations govern continuous disclosure, insider trading, takeovers, capital raising, buybacks and delisting, and the stock exchanges enforce many of them with fines and trading consequences.",
      "The common thread is timing: disclosures within hours or days of an event, trading windows around results, open offers triggered automatically by shareholding thresholds.",
      "We work to the listed company's calendar and to its events, because most SEBI non-compliance is a deadline missed rather than a rule misunderstood."
    ],
    context: [
      "Material events must be disclosed to the exchanges within the timelines SEBI prescribes, and some within twenty-four hours. [[V]]",
      "Exchanges impose fines for specific non-compliances under SEBI's standard operating procedures. [[V]]",
      "SEBI's regulations are amended frequently, so last year's practice may not satisfy this year's rule. [[V]]"
    ],
    practice: [
      "A disclosure calendar owned by one person, and a checklist for each corporate action, prevents most listed-company defaults.",
      "We read every SEBI amendment for what it changes in the company's own procedures, not just what it says."
    ],
    audience: [
      "A listed company's company secretary and compliance officer",
      "Promoters planning a change in shareholding",
      "A board considering a buyback, rights issue or preferential allotment",
      "An acquirer approaching a listed target",
      "A company preparing to list"
    ],
    docs: [
      "Shareholding pattern and promoter holdings",
      "Board and committee minutes",
      "Previous disclosures to the exchanges",
      "Insider and designated person lists",
      "Details of the proposed corporate action"
    ],
    faqs: [
      { q: "What happens if a disclosure is late?", a: "Exchanges levy fines under SEBI's procedures, and repeated or serious delays can lead to SEBI action. [[V]]" }
    ],
    services: {
      "sebi-lodr-compliance-advisory": {
        lead: "Listed companies operate under SEBI's Listing Obligations and Disclosure Requirements: quarterly results, governance norms, related party approvals and event-based disclosures within tight timelines. [[V]]",
        kind: "advisory"
      },
      "insider-trading-code-compliance": {
        lead: "Insider trading rules under SEBI's PIT Regulations require listed companies to keep a code of conduct, a structured digital database of insiders, and trading windows closed around price-sensitive events. [[V]]",
        kind: "advisory"
      },
      "takeover-code-sast-advisory": {
        lead: "Takeover thresholds under SEBI's SAST Regulations trigger an open offer to public shareholders when an acquirer crosses specified shareholding or control levels. [[V]]",
        kind: "advisory"
      },
      "delisting-of-securities-advisory": {
        lead: "Delisting shares voluntarily needs shareholder approval, a price discovery process under SEBI's regulations, and acceptance by enough public shareholders. [[V]]",
        kind: "advisory"
      },
      "buyback-of-shares-compliance": {
        lead: "Buybacks return cash to shareholders by purchasing the company's own shares, within the limits of the Companies Act and, for listed companies, SEBI's buyback regulations. [[V]]",
        kind: "advisory"
      },
      "rights-issue-preferential-allotment-compliance": {
        lead: "Preferential allotments and rights issues raise capital from chosen investors or from existing shareholders, each with its own pricing, approval and disclosure rules under the Companies Act and SEBI's ICDR Regulations. [[V]]",
        kind: "advisory"
      }
    }
  },

  "valuation-and-due-diligence": {
    authority: "Registered valuers (IBBI); Chartered Accountants and merchant bankers as the law requires",
    authorityShort: "the valuer",
    law: "Companies Act, 2013; Income-tax Act; FEMA pricing guidelines",
    instrument: "report",
    intro: [
      "Valuations and due diligence are the evidence behind a transaction. Share issues, transfers to foreign investors, ESOP grants, mergers and insolvency each require a value determined by the right person under the right method — a registered valuer, a Chartered Accountant or a merchant banker, depending on the law that applies.",
      "Due diligence — financial, legal and tax — is how a buyer or investor finds what the price must account for, and how a seller finds out first what the buyer will find.",
      "Every report we produce states its purpose, method and assumptions, because a value is only valid for the purpose it was prepared for."
    ],
    context: [
      "Different laws accept different valuers and methods, so one valuation may not satisfy FEMA, income tax and the Companies Act at once. [[V]]",
      "Findings in due diligence turn into representations, indemnities, price adjustments and conditions in the transaction documents.",
      "Valuation reports are dated, and most regimes require them to be recent relative to the transaction. [[V]]"
    ],
    practice: [
      "We agree the purpose of a valuation before starting it, because a report prepared for one law is routinely, and wrongly, reused for another.",
      "Due diligence is most useful when it is prioritised: the findings that change the price come first, the housekeeping last."
    ],
    audience: [
      "A startup issuing shares to investors",
      "An acquirer or investor evaluating a target",
      "A seller preparing for a sale process",
      "A company granting ESOPs",
      "A board approving a merger or scheme"
    ],
    docs: [
      "Audited financial statements and management accounts",
      "Business plan and projections",
      "Shareholding and capital history",
      "Material contracts, licences and litigation records",
      "Details of the proposed transaction"
    ],
    faqs: [
      { q: "Can one valuation report be used for several purposes?", a: "Rarely. FEMA, income tax and the Companies Act each specify who may value and how, so a report usually needs to be prepared for, or cover, each purpose. [[V]]" }
    ],
    services: {
      "business-valuation-registered-valuer": {
        lead: "Registered valuers, registered with IBBI, are required for valuations under the Companies Act — mergers, share issues by unlisted companies, insolvency and similar purposes. [[V]]",
        kind: "audit"
      },
      "startup-valuation-for-femaincome-tax": {
        lead: "Startups issuing shares need a valuation that satisfies two regimes at once: FEMA pricing for non-resident investors and the income-tax rules on issue price, which use different methods. [[V]]",
        kind: "audit"
      },
      "merger-and-acquisition-due-diligence": {
        lead: "Mergers and acquisitions are priced on what the buyer knows, so due diligence — financial, legal and tax — is how the buyer finds what the price must account for.",
        kind: "audit"
      },
      "financial-due-diligence": {
        lead: "Financial due diligence tests the numbers behind a deal: quality of earnings, working capital, debt and debt-like items, and the adjustments that move the price.",
        kind: "audit"
      },
      "legal-due-diligence": {
        lead: "Legal due diligence checks title, contracts, licences, litigation and compliance, and its findings feed the representations, indemnities and conditions in the transaction documents.",
        kind: "audit"
      },
      "share-valuation-for-esop": {
        lead: "ESOP grants and exercises need a fair market value — for accounting, for the employee's perquisite tax and for the company's records — determined by the methods the rules allow. [[V]]",
        kind: "audit"
      },
      "fairness-opinion-for-m-and-a": {
        lead: "Fairness opinions give a board an independent view that the price or swap ratio in a transaction is fair to shareholders from a financial point of view, and SEBI requires them in certain schemes. [[V]]",
        kind: "audit"
      }
    }
  },

  "contracts-and-agreements": {
    authority: null,
    law: "Indian Contract Act, 1872; state Stamp Acts",
    instrument: "agreement",
    intro: [
      "No authority registers most commercial agreements, which is exactly why their drafting matters: the document is the only record of what was agreed. This group covers the agreements a growing business signs most often — founders' and shareholders' agreements, employment contracts, NDAs, vendor and distribution agreements, franchise and licensing agreements, loans, and the terms and privacy policy its users accept.",
      "Indian contract law, the Companies Act, FEMA and stamp duty all reach into these documents, and an agreement copied from another jurisdiction often fails on one of them.",
      "We draft for the dispute you hope never to have, because that is when the agreement is actually read."
    ],
    context: [
      "Agreements must be stamped as the applicable state Stamp Act requires; under-stamped documents face difficulty as evidence until duty and penalty are paid. [[V]]",
      "Restraints on trade are void under the Indian Contract Act beyond narrow exceptions, so non-competes need careful drafting. [[V]]",
      "Where a party is foreign, FEMA, withholding tax and the choice of governing law and forum need to be settled in the document."
    ],
    practice: [
      "Most of the disputes we see trace back to an agreement copied from another deal, with clauses that suited someone else's situation.",
      "We flag the five or six clauses that decide outcomes in each agreement, so the commercial team negotiates the ones that matter."
    ],
    audience: [
      "Founders formalising their relationship",
      "A company hiring senior employees",
      "A business appointing distributors or franchisees",
      "A company sharing confidential information with a potential partner",
      "A startup launching its product to users"
    ],
    docs: [
      "Term sheet or note of commercial terms agreed",
      "Existing drafts or the other side's draft",
      "Constitutional documents of the contracting entity",
      "Details of each party",
      "Previous agreements between the parties"
    ],
    faqs: [
      { q: "Is an agreement signed electronically valid?", a: "Generally yes under the Information Technology Act, with some exceptions for specific instruments; stamping is still required where the Stamp Act applies. [[V]]" },
      { q: "Which law should govern the agreement?", a: "For Indian parties, Indian law and an Indian forum are usually simplest. With foreign parties, choice of law and arbitration seat are negotiated and affect enforcement." }
    ],
    services: {
      "founders-agreement-drafting": {
        lead: "Founders' agreements are signed before the first investor arrives and settle what investors later ask about: equity split, vesting, roles, IP assignment and what happens when a founder leaves.",
        kind: "drafting"
      },
      "shareholders-agreement-drafting": {
        law: "Indian Contract Act, 1872; Companies Act, 2013",
        lead: "A shareholders' agreement governs how the owners of a company deal with each other — who appoints directors, how shares can be sold, what happens on deadlock, and how an investor or founder exits.",
        ctx: [
          "It sits alongside the Articles of Association, and the two have to agree. Where they conflict, the company itself is bound by its Articles, so rights that must bind the company — transfer restrictions, pre-emption, investor approvals — are normally carried into the Articles as well.",
          "The clauses that decide outcomes are the unglamorous ones: reserved matters that need investor consent, the mechanics of tag-along and drag-along rights, leaver provisions for founders, and how a deadlock is broken."
        ],
        practice: ["Most of the disputes we see trace back to an agreement copied from another deal. A drag-along threshold or a reserved-matters list that suited someone else's cap table can leave a founder unable to raise the next round or block a sale."],
        aud: ["Co-founders formalising equity before an outside investor joins", "A company taking its first angel or seed investment", "A family-owned company bringing in a second generation or an outside shareholder", "Two companies setting up a joint venture vehicle"],
        docs: ["Memorandum and Articles of Association", "Current shareholding pattern or cap table", "Term sheet, or a note of the commercial terms agreed", "Any existing founders' or investment agreements", "Name, address and PAN or CIN of each party"],
        faq: [
          { q: "Does a shareholders' agreement need to be registered?", a: "No authority registers it. It does need to be stamped under the applicable state Stamp Act, and the terms that must bind the company are usually adopted into the Articles by special resolution, which is then filed with the Registrar of Companies." },
          { q: "How is it different from a founders' agreement?", a: "A founders' agreement is usually signed early, between founders alone, and covers roles, vesting and IP. A shareholders' agreement binds every shareholder, including investors, and governs control and exit." }
        ]
      },
      "employment-agreement-drafting": {
        lead: "Employment agreements set the terms that matter when the relationship ends — notice, confidentiality, IP assignment and restrictive covenants — and post-employment non-competes are generally unenforceable in India. [[V]]",
        kind: "drafting"
      },
      "non-disclosure-agreement-nda-drafting": {
        lead: "Non-disclosure agreements work only if they define precisely what is confidential and say what happens to it when discussions end.",
        kind: "drafting"
      },
      "vendor-and-service-agreement-drafting": {
        lead: "Vendor and service agreements fail on the clauses nobody negotiates — scope creep, acceptance, liability caps and termination — so that is where the drafting goes.",
        kind: "drafting"
      },
      "franchise-agreement-drafting": {
        lead: "Franchise agreements license a business system as well as a brand, so they cover territory, operating standards, audit rights, renewal and what the franchisee must stop doing when the agreement ends.",
        kind: "drafting"
      },
      "terms-of-use-and-privacy-policy-drafting": {
        lead: "Terms of use and privacy policies are legal documents your users accept, and under the DPDP Act the privacy notice has to say specific things about personal data in clear, plain language. [[V]]",
        kind: "drafting"
      },
      "distribution-agreement-drafting": {
        lead: "Distribution agreements decide who carries inventory risk, who sets prices, whether territory is exclusive and how the distributor is paid — and each choice has competition-law and tax consequences.",
        kind: "drafting"
      },
      "loan-agreement-drafting": {
        lead: "Loan agreements between related parties — from directors, or to other companies — have to fit the Companies Act's rules on loans and deposits before they fit the commercial terms. [[V]]",
        kind: "drafting"
      },
      "commercial-licensing-agreement-drafting": {
        lead: "Commercial licences let one business use another's content, technology or brand, and the scope — field of use, territory, exclusivity, sub-licensing — is where value is won or lost.",
        kind: "drafting"
      }
    }
  },

  "startup-funding-and-investment": {
    authority: "Ministry of Corporate Affairs; RBI (for foreign investment); Income Tax Department",
    authorityShort: "the regulator",
    law: "Companies Act, 2013; FEMA; Income-tax Act",
    portal: "the MCA portal",
    instrument: "filing",
    intro: [
      "A funding round is a negotiation followed by a sequence of filings. The term sheet fixes valuation, preferences and control; the definitive agreements carry those terms; and the closing runs through board and shareholder approvals, private placement offer letters, allotment, MCA filings and — for foreign investors — FEMA reporting.",
      "Around the round sit the decisions that shape it: how instruments are structured under Indian law, how large the ESOP pool is, how the cap table is kept, how the data room is prepared, and which tax benefits the startup can claim.",
      "We work on both sides of that line — the commercial terms and the filings — so the round closes without a compliance gap behind it."
    ],
    context: [
      "Private placements follow the Companies Act's rules on offer letters, separate bank accounts for subscription money and allotment within the time allowed. [[V]]",
      "Foreign investment must follow the FEMA entry route and pricing guidelines and be reported to the RBI after allotment. [[V]]",
      "Instruments that work in US practice — SAFEs in particular — need restructuring to fit Indian company law and FEMA. [[V]]"
    ],
    practice: [
      "The rounds that slip are usually held up by something discoverable in advance: a missed filing, an unsigned founder assignment, a cap table that does not match the register.",
      "We keep the cap table and the register of members reconciled from the first allotment, because investors' counsel will compare them."
    ],
    audience: [
      "A startup raising its first angel or seed round",
      "A venture-backed company closing a Series A or later round",
      "Founders negotiating a term sheet",
      "A startup with foreign investors",
      "A DPIIT-recognised startup seeking tax benefits"
    ],
    docs: [
      "Cap table and register of members",
      "Memorandum and articles",
      "Term sheet",
      "Previous investment and founders' agreements",
      "Financial statements and projections",
      "DPIIT recognition certificate, where held"
    ],
    faqs: [
      { q: "How long does a round take to close after the term sheet?", a: "Due diligence, documents and filings usually take several weeks; foreign investment adds FEMA steps. A prepared data room shortens it considerably. [[V]]" }
    ],
    services: {
      "startup-india-tax-exemption-80-iac-application": {
        lead: "Section 80-IAC gives eligible DPIIT-recognised startups a deduction of their profits for a block of years within their first ten, but only after the Inter-Ministerial Board certifies them. [[V]]",
        kind: "registration",
        instrument: "IMB certificate"
      },
      "angel-tax-exemption-advisory": {
        lead: "Angel tax under section 56(2)(viib) taxed share premium above fair value; it has been abolished from assessment year 2025-26, so the advice now concerns earlier years and their assessments. [[V]]",
        kind: "advisory"
      },
      "esop-pool-structuring": {
        lead: "ESOP pools are usually sized at a funding round, and the questions are how large, who bears the dilution, and how the scheme is approved under the Companies Act. [[V]]",
        kind: "advisory"
      },
      "safeconvertible-note-drafting": {
        lead: "SAFEs as used in the US do not fit Indian law neatly, so Indian startups use compulsorily convertible preference shares or debentures, or convertible notes where they qualify, within FEMA limits. [[V]]",
        kind: "drafting"
      },
      "term-sheet-advisory": {
        lead: "Term sheets are mostly non-binding, but the terms they fix — valuation, liquidation preference, anti-dilution, board seats, vesting — carry into the definitive agreements almost unchanged.",
        kind: "advisory"
      },
      "cap-table-management-advisory": {
        lead: "Cap tables kept in a spreadsheet drift from the statutory register of members, and the gap surfaces in due diligence at the worst possible moment.",
        kind: "retainer"
      },
      "due-diligence-data-room-preparation": {
        lead: "Data rooms prepared before a fundraise shorten due diligence and reduce surprises; prepared during it, they reveal every gap at once.",
        kind: "audit"
      },
      "series-funding-round-compliance": {
        lead: "Closing a round is a sequence of filings as much as a signing: board and shareholder approvals, private placement offer letters, allotment, FC-GPR for foreign investors and updated registers. [[V]]",
        kind: "filing",
        instrument: "allotment filing"
      }
    }
  },

  "employment-and-labour-compliance": {
    authority: "Central and state labour departments",
    authorityShort: "the labour department",
    law: "Central labour laws and labour codes; state labour laws",
    portal: "the labour department's portal",
    instrument: "registration",
    intro: [
      "Employment law in India is shared between the centre and the states, and it is changing: the central labour laws are being consolidated into four labour codes, with state rules following. Employers deal with registrations and licences for contract and migrant labour, certified standing orders, maternity and equal-pay obligations, and the HR policies and ESOP schemes that sit on top.",
      "Most of these obligations depend on headcount, the kind of establishment and the state, so the same employer can be fully compliant in one state and not in another.",
      "We map an employer's obligations by establishment and state, under whichever regime is in force there. [[V]]"
    ],
    context: [
      "Thresholds based on the number of workers decide which laws apply, and contract workers often count towards them. [[V]]",
      "Principal employers can be liable for the contractor's defaults on wages and statutory dues for contract workers. [[V]]",
      "Implementation of the labour codes and their state rules needs tracking state by state. [[V]]"
    ],
    practice: [
      "Labour inspections and claims usually start from records — registers, wage slips, attendance — so we put those in order first.",
      "HR policies get read in disputes; we write them to match how the company actually treats people."
    ],
    audience: [
      "An employer using contract labour",
      "A factory or establishment above the standing orders threshold",
      "A company drafting its first HR policies",
      "A startup administering employee stock options",
      "An employer with women employees across several states"
    ],
    docs: [
      "Headcount by establishment and state, including contract workers",
      "Existing registrations and licences",
      "HR policies and employment contracts",
      "Wage and attendance registers",
      "Contractor agreements"
    ],
    faqs: [
      { q: "Do the new labour codes apply already?", a: "Implementation depends on notification of the codes and of state rules; we advise on the regime in force for each establishment at the time. [[V]]" }
    ],
    services: {
      "hr-policy-manual-drafting": {
        lead: "HR policies are where an employer writes down how it will treat people — leave, conduct, grievances, POSH, exit — and courts and inspectors read them as commitments.",
        kind: "drafting"
      },
      "employee-stock-option-plan-esop-administration": {
        lead: "Administering an ESOP scheme means keeping grants, vesting, exercises and lapses straight year after year, and computing the perquisite tax correctly on each exercise.",
        kind: "retainer"
      },
      "contract-labour-license-clra": {
        lead: "Contract labour brings obligations for both the principal employer, which registers the establishment, and the contractor, which needs a licence above the threshold. [[V]]",
        kind: "licence",
        instrument: "registration and licence"
      },
      "inter-state-migrant-workman-license": {
        lead: "Inter-state migrant workers recruited through contractors have required registration and licensing under the Inter-State Migrant Workmen Act, now being folded into the labour codes. [[V]]",
        kind: "licence",
        instrument: "licence"
      },
      "maternity-benefit-act-compliance": {
        lead: "Maternity benefit law gives eligible women employees paid leave, nursing breaks and, in establishments above a size, access to a crèche, and employers must inform women of these rights in writing. [[V]]",
        kind: "advisory"
      },
      "equal-remuneration-act-compliance": {
        lead: "Equal pay for the same work or work of a similar nature, without gender discrimination in recruitment and conditions, was required by the Equal Remuneration Act and carries into the Code on Wages. [[V]]",
        kind: "advisory"
      },
      "standing-orders-certification": {
        lead: "Standing orders define conditions of employment — classification, shifts, leave, misconduct and discipline — and establishments above the threshold must have them certified. [[V]]",
        kind: "certification",
        authority: "Certifying Officer under the standing orders law",
        instrument: "certified standing orders"
      }
    }
  },

  "data-protection-and-cyber": {
    authority: "Data Protection Board of India; CERT-In",
    authorityShort: "the regulator",
    law: "Digital Personal Data Protection Act, 2023; Information Technology Act, 2000",
    instrument: "compliance programme",
    intro: [
      "India now has a general data protection law: the Digital Personal Data Protection Act, 2023, with its rules setting out how notice, consent, data principal rights, breach reporting and significant data fiduciaries' duties work in practice. Alongside it, CERT-In's directions under the IT Act require specified cyber incidents to be reported quickly and logs to be kept. [[V]]",
      "Sector regulators add their own requirements — the RBI on payment data storage, for example — so a business's obligations depend on what data it holds and what sector it operates in.",
      "We start with a map of what personal data the business actually processes, because every obligation follows from that."
    ],
    context: [
      "The DPDP Act applies to digital personal data processed in India, and to processing outside India connected with offering goods or services to people in India. [[V]]",
      "Consent has to be free, specific, informed and unambiguous, preceded by a notice, and as easy to withdraw as to give. [[V]]",
      "Personal data breaches must be reported to the Data Protection Board and to affected individuals as the rules prescribe. [[V]]",
      "Penalties under the Act are set as amounts per breach category and can be large. [[V]]"
    ],
    practice: [
      "Most organisations find they hold more personal data, in more places, than anyone thought; the data map is usually the most valuable output of the first month.",
      "We build privacy into product and vendor decisions, because retrofitting consent and deletion after launch is far more expensive."
    ],
    audience: [
      "A consumer app or platform handling user data",
      "A B2B SaaS company processing customers' personal data",
      "A fintech, healthtech or edtech business",
      "A company that has suffered or fears a data breach",
      "An organisation that may be notified as a significant data fiduciary"
    ],
    docs: [
      "Inventory of products, systems and data flows",
      "Existing privacy notices and consent mechanisms",
      "Vendor and processor list with contracts",
      "Security policies and incident records",
      "Details of any cross-border data transfers"
    ],
    faqs: [
      { q: "Is the DPDP Act in force?", a: "The Act and its rules are being brought into force in phases; we advise on what applies on the dates relevant to your business. [[V]]" }
    ],
    services: {
      "dpdp-act-compliance-advisory-digital-personal-data-protection": {
        lead: "DPDP Act compliance means mapping what personal data you collect and why, giving notices and taking consent in the form the Act requires, honouring data principals' rights, and keeping reasonable security safeguards. [[V]]",
        kind: "advisory"
      },
      "data-protection-officer-appointment-advisory": {
        lead: "Data protection officers are required of Significant Data Fiduciaries under the DPDP Act, which must also carry out periodic audits and data protection impact assessments. [[V]]",
        kind: "advisory"
      },
      "privacy-impact-assessment": {
        lead: "Privacy impact assessments look at a product or process before launch — what data it collects, where it goes, what could go wrong — and record the decisions made about each risk.",
        kind: "audit"
      },
      "cross-border-data-transfer-compliance": {
        lead: "Cross-border transfers of personal data are permitted under the DPDP Act except to countries the government restricts, though sectoral rules — the RBI's on payment data, for instance — can require data to stay in India. [[V]]",
        kind: "advisory"
      },
      "cyber-security-compliance-audit": {
        lead: "Cyber security audits test controls against a framework — ISO 27001, CERT-In's directions, or a sector regulator's requirements — and report the gaps in order of risk. [[V]]",
        kind: "audit"
      },
      "cert-in-incident-reporting-compliance": {
        lead: "CERT-In's directions require specified cyber incidents to be reported within a short window, logs kept for a set period, and system clocks synchronised. [[V]]",
        kind: "advisory"
      }
    }
  }
};
