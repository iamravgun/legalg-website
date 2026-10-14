/* ==========================================================================
   data/services.js — the 40 tier-1 services (full written content). Each object matches the
   shape documented in the project brief. Consumed by tools/build.js to
   generate one static page per service, and by services.html / the
   homepage search for client-side rendering.
   ========================================================================== */
(function (root, factory) {
  var data = factory();
  if (typeof module !== "undefined" && module.exports) {
    module.exports = data;
  } else {
    root.SERVICES = data;
  }
})(typeof window !== "undefined" ? window : this, function () {
  return [
    // ---------------------------------------------------------------- 1
    {
      slug: "pvt-ltd-company-registration",
      title: "Private Limited Company Registration",
      category: "company-registration",
      group: "Start a Business in India",
      shortDesc: "SPICe+ incorporation with PAN, TAN, EPFO and ESIC bundled into a single MCA filing.",
      heroHeadline: "Private Limited Company Registration",
      heroSubline: "Incorporate under the Companies Act, 2013 through the SPICe+ web form — name approval, DIN, PAN, TAN and statutory registers in one filing.",
      priceFrom: 6999,
      turnaround: "7-10 working days",
      authority: "Registrar of Companies, Ministry of Corporate Affairs",
      appliesTo: [
        "Founders planning to raise angel or venture capital",
        "A business that will issue ESOPs to employees",
        "Co-founders who want shareholding and roles on record from day one",
        "A foreign company setting up an Indian subsidiary"
      ],
      overview:
        "A Private Limited Company is the entity of choice for founders who intend to raise institutional capital, issue ESOPs, or bring on co-founders with defined shareholding. Incorporation is done through the SPICe+ (INC-32) web form on the MCA portal, which combines name reservation, incorporation, DIN allotment, PAN, TAN, and — where applicable — EPFO and ESIC registration into a single filing.\n\nWe draft the Memorandum and Articles of Association, run a name-availability check against the MCA and trademark registries before filing, and prepare the subscriber and director declarations. Once the Registrar of Companies issues the Certificate of Incorporation, we assist with opening the current account and filing INC-20A (commencement of business) within the statutory 180-day window.\n\nMost delays we see are not from the Registrar but from incomplete address proof or a mismatch between the director's PAN and Aadhaar records — we run a pre-filing document check specifically to catch these before submission.",
      benefits: [
        { title: "Limited liability", desc: "Shareholders' personal assets are ring-fenced from company debts and litigation, limited to their unpaid share capital." },
        { title: "Fundable structure", desc: "The only entity form most VCs, angel networks and banks will underwrite for equity or structured debt." },
        { title: "Perpetual succession", desc: "The company continues to exist independent of changes in directors or shareholders." },
        { title: "Credibility with vendors", desc: "A registered CIN and MCA filing history is often a prerequisite for enterprise vendor empanelment." }
      ],
      documentsRequired: [
        "PAN card of all directors and shareholders",
        "Aadhaar card of all directors and shareholders",
        "Passport-size photograph of each director",
        "Address proof not older than 2 months (bank statement, electricity or telephone bill)",
        "Registered office proof — rent agreement with NOC, or latest property tax receipt if owned",
        "Digital Signature Certificate (DSC) for at least one director",
        "Passport (mandatory for foreign nationals or NRI directors)"
      ],
      processSteps: [
        { title: "Name reservation", desc: "We file Part A of SPICe+ with two proposed names, checked against existing companies, LLPs and trademarks." },
        { title: "Digital Signature Certificate", desc: "Class 3 DSC issued for the proposed directors to sign the e-forms." },
        { title: "Drafting MoA & AoA", desc: "Memorandum and Articles of Association drafted to reflect the agreed object clause and share structure." },
        { title: "SPICe+ Part B filing", desc: "Incorporation, PAN, TAN, EPFO and ESIC filed together; AGILE-PRO-S filed for GST and bank account intimation." },
        { title: "Certificate of Incorporation", desc: "RoC issues the CIN and Certificate of Incorporation, typically within 3-5 working days of a clean filing." }
      ],
      eligibility: [
        "Minimum two directors, at least one resident in India for 182+ days in the preceding financial year",
        "Minimum two and maximum 200 shareholders",
        "No minimum paid-up capital requirement",
        "A registered office address in India at the time of incorporation"
      ],
      faqs: [
        { q: "Is there a minimum capital requirement?", a: "No. The Companies Act, 2013 removed the minimum paid-up capital requirement — you can incorporate with a nominal capital of ₹1, though most founders start with ₹1 lakh to ₹5 lakh to cover initial working capital." },
        { q: "Can an NRI or foreign national be a director?", a: "Yes, provided at least one director is resident in India. Foreign directors need a valid passport and notarised or apostilled address proof; if they are also investing, the investment must follow the FDI route and pricing rules for the sector. [[V]]" },
        { q: "How is a Private Limited Company different from an LLP?", a: "A Pvt Ltd company can issue equity shares and ESOPs and is the structure investors prefer; an LLP has lower compliance cost but cannot raise equity funding in the conventional sense." },
        { q: "What happens after incorporation?", a: "You must file INC-20A within 180 days confirming receipt of subscribed capital, open a current bank account, and register for GST if turnover crosses the threshold or registration is otherwise required." }
      ],
      relatedSlugs: ["opc-registration", "llp-registration", "gst-registration"]
    },

    // ---------------------------------------------------------------- 2
    {
      slug: "opc-registration",
      title: "One Person Company Registration",
      category: "company-registration",
      group: "Start a Business in India",
      shortDesc: "A single-founder entity with limited liability, incorporated via SPICe+ with a mandatory nominee.",
      heroHeadline: "One Person Company Registration",
      heroSubline: "Limited liability for solo founders — one shareholder, one nominee, full corporate structure without a co-founder.",
      priceFrom: 5999,
      turnaround: "7-10 working days",
      authority: "Registrar of Companies, Ministry of Corporate Affairs",
      appliesTo: [
        "A solo founder who wants limited liability without a second shareholder",
        "A consultant or freelancer moving from a proprietorship to a company",
        "A single-owner business that expects to convert to a private limited company later"
      ],
      overview:
        "One Person Companies (OPCs) let a single individual incorporate a company with limited liability protection — something a proprietorship cannot offer. It suits solo consultants, freelancers scaling into a formal practice, and founders not yet ready to bring in a co-founder but who want a company structure for contracts, banking and credibility.\n\nThe promoter is the sole shareholder and, ordinarily, the sole director, and must nominate another individual (with their written consent on Form INC-3) who will become the member if the promoter dies or becomes incapacitated. The Companies (Incorporation) Second Amendment Rules, 2021 removed the earlier mandatory conversion to a Private Limited Company once turnover crossed ₹2 crore or paid-up capital crossed ₹50 lakh, and also opened OPC incorporation to NRIs by reducing the residency requirement from 182 to 120 days.\n\nWe handle the nominee's consent documentation alongside the standard SPICe+ filing — a step that's frequently the cause of resubmission when done without guidance.",
      benefits: [
        { title: "Solo control, limited liability", desc: "Full decision-making authority for one promoter, without exposing personal assets to business liabilities." },
        { title: "No mandatory conversion thresholds", desc: "Post-2021 amendment, an OPC can scale indefinitely without a forced conversion to Pvt Ltd." },
        { title: "Simpler board compliance", desc: "Only one board meeting required per half-year if there is a single director, versus four for a standard Pvt Ltd." },
        { title: "Open to NRIs", desc: "NRIs meeting the 120-day residency threshold can now incorporate and hold an OPC." }
      ],
      documentsRequired: [
        "PAN and Aadhaar of the sole promoter",
        "PAN and Aadhaar of the nominee, with signed Form INC-3 consent",
        "Passport-size photograph of the promoter and nominee",
        "Address proof not older than 2 months",
        "Registered office proof — rent agreement with NOC or ownership document",
        "Digital Signature Certificate for the promoter"
      ],
      processSteps: [
        { title: "Nominee consent (INC-3)", desc: "The nominee signs a written consent form, filed alongside incorporation documents." },
        { title: "Name reservation", desc: "Part A of SPICe+ filed; the company name must end with '(OPC) Private Limited'." },
        { title: "SPICe+ Part B filing", desc: "Incorporation, PAN and TAN filed together with the MoA and AoA." },
        { title: "Certificate of Incorporation", desc: "RoC issues the CIN; bank account opening and GST registration follow if applicable." }
      ],
      eligibility: [
        "Only a natural person who is an Indian citizen (or an NRI meeting the 120-day residency rule) can incorporate an OPC",
        "A single promoter cannot hold more than one OPC at a time",
        "A minor cannot be a member or nominee",
        "The nominee must give prior written consent"
      ],
      faqs: [
        { q: "Can an OPC have more than one director?", a: "Yes, an OPC can appoint additional directors for governance purposes, but it remains a single-shareholder company — the extra directors do not hold equity by virtue of that appointment." },
        { q: "Is an OPC required to convert to a Pvt Ltd company after a certain turnover?", a: "No longer. The 2021 amendment removed the mandatory conversion trigger. Conversion is now voluntary, at the promoter's discretion." },
        { q: "Can an OPC raise external funding?", a: "An OPC can take loans, but it cannot issue equity to outside investors while remaining an OPC — most founders convert to a Pvt Ltd company before an institutional funding round." },
        { q: "What is the role of the nominee?", a: "The nominee only steps in if the sole member dies or is incapacitated; they have no rights or role in the company while the promoter is active." }
      ],
      relatedSlugs: ["pvt-ltd-company-registration", "llp-registration", "udyam-msme-registration"]
    },

    // ---------------------------------------------------------------- 3
    {
      slug: "llp-registration",
      title: "Limited Liability Partnership Registration",
      category: "company-registration",
      group: "Start a Business in India",
      shortDesc: "Partner-run structure with limited liability, filed via FiLLiP under the LLP Act, 2008.",
      heroHeadline: "LLP Registration",
      heroSubline: "Combine the operating flexibility of a partnership with the limited liability protection of a company — filed through FiLLiP.",
      priceFrom: 5499,
      turnaround: "10-12 working days",
      authority: "Registrar of Companies, Ministry of Corporate Affairs",
      appliesTo: [
        "Professionals — CAs, architects, consultants — practising together",
        "Partners who want limited liability with a partnership's flexibility",
        "A family business that does not plan to raise equity",
        "An existing partnership firm converting for limited liability"
      ],
      overview:
        "Limited Liability Partnerships suit professional practices, family-run businesses and service firms where two or more partners want limited liability without the board-meeting and audit overhead of a Private Limited Company. It's governed by the LLP Act, 2008, and incorporated through the FiLLiP web form on the MCA portal.\n\nEach designated partner needs a Designated Partner Identification Number (DPIN), allotted as part of the same filing. Once the Registrar issues the Certificate of Incorporation, the LLP Agreement — which sets out profit-sharing ratio, capital contribution and partner responsibilities — must be filed in Form 3 within 30 days; missing this deadline attracts a daily penalty.\n\nAn LLP with turnover below ₹40 lakh or partner contribution below ₹25 lakh is exempt from mandatory audit, which keeps ongoing compliance cost meaningfully lower than a Pvt Ltd company of similar size.",
      benefits: [
        { title: "Limited liability, partner flexibility", desc: "Partners are liable only to the extent of their agreed contribution, while retaining partnership-style management." },
        { title: "Lower compliance load", desc: "No mandatory board meetings, no CSR applicability, audit exemption below the turnover/contribution thresholds." },
        { title: "No cap on number of partners", desc: "Unlike an OPC or a traditional partnership firm, an LLP can add partners without an upper limit." },
        { title: "Separate legal identity", desc: "Can hold property, sue and be sued, and enter contracts in its own name, independent of the partners." }
      ],
      documentsRequired: [
        "PAN and Aadhaar of all designated partners",
        "Passport-size photographs",
        "Address proof not older than 2 months",
        "Registered office proof — rent agreement with NOC or ownership deed",
        "Digital Signature Certificate for at least two designated partners",
        "Passport for any foreign national partner"
      ],
      processSteps: [
        { title: "DPIN & DSC", desc: "Designated Partner Identification Number allotted and Digital Signature Certificates issued." },
        { title: "Name reservation", desc: "Proposed LLP name checked and reserved via the RUN-LLP service." },
        { title: "FiLLiP filing", desc: "Incorporation form filed with subscriber sheet, address proof and partner declarations." },
        { title: "Certificate of Incorporation", desc: "RoC issues the LLPIN and Certificate of Incorporation." },
        { title: "LLP Agreement (Form 3)", desc: "Partnership agreement filed within 30 days of incorporation — this deadline is strict." }
      ],
      eligibility: [
        "Minimum two partners; no maximum limit",
        "At least one designated partner must be resident in India",
        "A body corporate can be a partner, provided it nominates a natural person as its representative",
        "A registered office address in India at the time of incorporation"
      ],
      faqs: [
        { q: "Can an LLP be converted into a Private Limited Company later?", a: "Yes, Section 366 of the Companies Act permits conversion, though it requires a fresh incorporation filing and carries over the LLP's assets and liabilities under specific conditions." },
        { q: "Is an LLP required to file an annual return?", a: "Yes — Form 11 (Annual Return) is due by 30 May and Form 8 (Statement of Accounts & Solvency) by 30 October each financial year, regardless of turnover." },
        { q: "Do LLP partners need to file individual income tax returns?", a: "Yes. The LLP itself pays tax at 30% flat plus surcharge and cess on its profits, and partners are separately taxed on remuneration or interest received, but not again on their profit share, which is exempt in their hands." },
        { q: "Can a single person form an LLP?", a: "No — an LLP requires a minimum of two partners. A solo founder should consider an OPC instead." }
      ],
      relatedSlugs: ["pvt-ltd-company-registration", "opc-registration", "gst-registration"]
    },

    // ---------------------------------------------------------------- 4
    {
      slug: "udyam-msme-registration",
      title: "Udyam (MSME) Registration",
      category: "company-registration",
      group: "Start a Business in India",
      shortDesc: "Self-declaration registration on the Udyam portal, linked to PAN and GSTN, unlocking MSME benefits.",
      heroHeadline: "Udyam (MSME) Registration",
      heroSubline: "Register on the Udyam portal to access collateral-free credit, delayed-payment protection and priority-sector lending.",
      priceFrom: 999,
      turnaround: "1-2 working days",
      authority: "Ministry of Micro, Small and Medium Enterprises",
      appliesTo: [
        "A small manufacturer or service business wanting MSME status",
        "A supplier that needs Udyam to invoke the MSME delayed-payment protection",
        "A business applying for collateral-free or priority-sector loans",
        "A proprietorship that needs a recognised registration for its bank"
      ],
      overview:
        "Udyam registration is a self-declaration filed on the government's Udyam portal, auto-validated against your PAN and GST data — there is no document upload for most applicants. Classification as micro, small or medium is based on a composite of investment in plant & machinery and annual turnover, pulled directly from your income tax and GST filings.\n\nOnce registered, you receive a Udyam Registration Number and certificate that unlocks collateral-free lending under the CGTMSE scheme, interest rate concessions from scheduled banks, and — critically — the payment protection under Section 15 of the MSMED Act, which requires buyers to pay a registered MSME within 45 days of acceptance of goods or services.\n\nWe review your investment and turnover figures against the current threshold slabs before filing, since misclassification (claiming 'micro' when the numbers place you in 'small') can be flagged during a later bank or tender verification.",
      benefits: [
        { title: "Collateral-free loans", desc: "Access to CGTMSE-backed lending without pledging assets, up to specified limits per bank policy." },
        { title: "45-day payment protection", desc: "Buyers who delay payment beyond 45 days owe compound interest at three times the RBI bank rate under Section 16 of the MSMED Act." },
        { title: "Tender and procurement priority", desc: "Government tenders reserve a portion of procurement for MSMEs and often waive EMD for registered units." },
        { title: "Subsidy on statutory fees", desc: "Reduced fees for trademark and patent filing, and eligibility for ISO certification reimbursement schemes." }
      ],
      documentsRequired: [
        "PAN of the business (proprietor, firm or company)",
        "GSTIN, where the business is required to be GST-registered",
        "Aadhaar of the proprietor or authorised signatory",
        "Bank account details",
        "Basic details of investment in plant & machinery and previous year's turnover"
      ],
      processSteps: [
        { title: "Data validation", desc: "PAN and GSTN details pulled and cross-checked against Udyam portal requirements." },
        { title: "Classification check", desc: "Investment and turnover figures mapped to the correct micro/small/medium slab." },
        { title: "Udyam filing", desc: "Self-declaration submitted on the Udyam Registration portal." },
        { title: "Certificate issued", desc: "Udyam Registration Number and downloadable e-certificate generated instantly on successful filing." }
      ],
      eligibility: [
        "Any proprietorship, partnership, LLP, private limited company or trust engaged in manufacturing or services",
        "Investment in plant & machinery/equipment up to ₹50 crore and turnover up to ₹250 crore (medium enterprise ceiling)",
        "A valid PAN is mandatory for registration since the 2021 portal update"
      ],
      faqs: [
        { q: "Is Udyam registration mandatory?", a: "It's not legally mandatory to operate a business, but it is a practical prerequisite to access MSME credit schemes, payment protection, and most government tender reservations." },
        { q: "Can I update my registration if turnover changes?", a: "Yes, the classification is re-evaluated automatically each year based on your ITR and GST returns; you can also update details manually if there's a change in activity." },
        { q: "Does a service business qualify, or only manufacturing?", a: "Both. The distinction between manufacturing and service-sector MSMEs was removed; a single set of investment/turnover thresholds now applies to all sectors." },
        { q: "Is there a renewal requirement?", a: "No renewal is needed — the Udyam certificate does not expire, though classification is updated automatically based on annual filings." }
      ],
      relatedSlugs: ["pvt-ltd-company-registration", "gst-registration", "iec-registration"]
    },

    // ---------------------------------------------------------------- 5
    {
      slug: "gst-registration",
      title: "GST Registration",
      category: "gst-tax",
      group: "GST Registration & Returns",
      shortDesc: "Obtain a GSTIN for a business crossing the threshold limit, or opting for voluntary registration.",
      heroHeadline: "GST Registration",
      heroSubline: "A 15-digit GSTIN mapped to your PAN and state, required once turnover crosses the threshold — or for e-commerce sellers regardless of turnover.",
      priceFrom: 1499,
      turnaround: "5-7 working days",
      authority: "GSTN, under the Central Board of Indirect Taxes and Customs",
      appliesTo: [
        "A business whose turnover has crossed the GST threshold",
        "An e-commerce seller on a marketplace",
        "A business making inter-state supplies of goods",
        "A service provider whose clients need a GSTIN on invoices to claim credit"
      ],
      overview:
        "GST registration becomes mandatory once aggregate turnover crosses ₹40 lakh for goods suppliers (₹20 lakh in special category states) or ₹20 lakh for service providers (₹10 lakh in special category states). It's also compulsory regardless of turnover for inter-state suppliers, e-commerce sellers, and anyone required to deduct or collect tax at source.\n\nThe GSTIN is a 15-digit number — state code, PAN, entity code and a check digit — issued after the officer reviews your application (ARN) and supporting documents on the GST portal. Many applications get delayed at the physical verification stage over address-proof mismatches, particularly for businesses operating from a co-working space or a residential premise.\n\nWe prepare the application with the correct principal and additional place-of-business declarations, HSN/SAC codes for your goods or services, and the authorised signatory's digital signature or e-sign, to minimise the chance of a clarification notice (REG-03).",
      benefits: [
        { title: "Input tax credit", desc: "Claim credit for GST paid on business purchases, reducing effective tax outflow." },
        { title: "Legal supply across states", desc: "Mandatory for inter-state sale of goods or services beyond the specified thresholds." },
        { title: "Marketplace eligibility", desc: "Amazon, Flipkart and most B2B marketplaces require a GSTIN before onboarding a seller." },
        { title: "Vendor and tender eligibility", desc: "Many corporate and government procurement processes will not empanel an unregistered vendor." }
      ],
      documentsRequired: [
        "PAN of the business and the proprietor/partners/directors",
        "Aadhaar of the authorised signatory",
        "Proof of business address (electricity bill, property tax receipt, or rent agreement with NOC)",
        "Bank account statement or a cancelled cheque",
        "Photograph of the proprietor/partners/directors",
        "Digital Signature Certificate (mandatory for companies and LLPs)"
      ],
      processSteps: [
        { title: "Eligibility & HSN mapping", desc: "Confirm applicable threshold and classify goods/services under the correct HSN/SAC codes." },
        { title: "Application (Part A & B)", desc: "PAN and mobile/email verified via OTP; detailed business, promoter and bank details filed in Part B." },
        { title: "ARN generation", desc: "Application Reference Number issued on successful submission." },
        { title: "Verification", desc: "Officer reviews the application; may raise a clarification (REG-03) if documents need correction." },
        { title: "GSTIN issued", desc: "Registration certificate (REG-06) issued, typically within 7 working days of a clean application." }
      ],
      eligibility: [
        "Aggregate turnover above ₹40 lakh (goods) or ₹20 lakh (services), lower in special category states",
        "Mandatory for inter-state suppliers, e-commerce operators and sellers, and casual taxable persons",
        "Voluntary registration is open to any business regardless of turnover"
      ],
      faqs: [
        { q: "Can I register voluntarily even below the threshold?", a: "Yes, and many businesses do — it allows input tax credit and is often required by B2B customers before they will place a purchase order." },
        { q: "How long is the GSTIN valid?", a: "A regular GSTIN has no expiry; it stays active until cancelled or surrendered, subject to timely return filing." },
        { q: "What happens if I operate from multiple states?", a: "You need a separate GST registration for each state from which you make taxable supplies, even under the same PAN." },
        { q: "Is there a physical verification requirement?", a: "For most applications the officer can approve based on documents alone, but Aadhaar-unauthenticated applications or high-risk categories may trigger a physical site visit." }
      ],
      relatedSlugs: ["gst-return-filing", "pvt-ltd-company-registration", "iec-registration"]
    },

    // ---------------------------------------------------------------- 6
    {
      slug: "gst-return-filing",
      title: "GST Return Filing",
      category: "gst-tax",
      group: "GST Registration & Returns",
      shortDesc: "Monthly or quarterly GSTR-1 and GSTR-3B filing with ITC reconciliation against GSTR-2B.",
      heroHeadline: "GST Return Filing",
      heroSubline: "GSTR-1 outward supply statements and GSTR-3B summary returns, filed on schedule with input tax credit reconciled against GSTR-2B.",
      priceFrom: 999,
      turnaround: "Recurring — monthly or quarterly under QRMP",
      authority: "GSTN, under the Central Board of Indirect Taxes and Customs",
      appliesTo: [
        "Every regular GST-registered business, monthly or quarterly",
        "A business whose purchase credit does not match GSTR-2B",
        "A taxpayer that has fallen behind on returns and faces blocked e-way bills",
        "A small business deciding between monthly filing and the QRMP scheme"
      ],
      overview:
        "Every GST-registered business must file GSTR-1 (details of outward supplies) and GSTR-3B (a self-assessed summary return with tax payment) on a monthly basis, or quarterly under the QRMP scheme for taxpayers with turnover up to ₹5 crore. Missing a due date triggers a late fee that accrues daily and interest at 18% per annum on unpaid tax, and blocks e-way bill generation once returns fall two periods behind.\n\nWe reconcile your purchase register against GSTR-2B each period before filing GSTR-3B, so input tax credit claimed matches what your vendors have actually reported — the single most common reason for a GST notice is claiming ITC that doesn't appear in 2B.\n\nFor QRMP filers we also handle the monthly PMT-06 challan payment in the two months between quarterly returns, so there's no lapse in compliance between filings.",
      benefits: [
        { title: "No late fee exposure", desc: "Filed to the statutory calendar, avoiding the ₹50/day (₹20/day for nil returns) late fee per return." },
        { title: "Clean ITC claims", desc: "Purchase-side reconciliation against GSTR-2B before every filing reduces notice risk." },
        { title: "Uninterrupted e-way bill access", desc: "Timely filing keeps your GSTIN eligible to generate e-way bills without restriction." },
        { title: "Audit-ready records", desc: "Monthly reconciliation reports give you a running, defensible paper trail for annual return (GSTR-9) filing." }
      ],
      documentsRequired: [
        "Sales register / outward supply invoices for the period",
        "Purchase register / inward supply invoices",
        "Details of debit and credit notes issued",
        "Bank statement for the filing period",
        "Prior period GSTR-2B for reconciliation",
        "E-way bills generated during the period, where applicable"
      ],
      processSteps: [
        { title: "Data collation", desc: "Sales and purchase registers collected for the return period." },
        { title: "GSTR-1 filing", desc: "Outward supply details filed by the 11th of the following month (monthly filers)." },
        { title: "2B reconciliation", desc: "Input tax credit cross-checked against auto-populated GSTR-2B before summary filing." },
        { title: "GSTR-3B filing & payment", desc: "Net tax liability computed and paid, return filed by the 20th (monthly) or per the QRMP calendar." }
      ],
      eligibility: [
        "Any entity holding an active GSTIN is required to file, including nil returns",
        "QRMP scheme available to taxpayers with aggregate turnover up to ₹5 crore in the preceding financial year",
        "Composition scheme dealers file CMP-08 quarterly instead of GSTR-1/3B"
      ],
      faqs: [
        { q: "What if I have no sales in a period?", a: "A nil return must still be filed by the due date — non-filing attracts a late fee even with zero turnover, and can be done by SMS for GSTR-3B in eligible cases." },
        { q: "What's the difference between GSTR-1 and GSTR-3B?", a: "GSTR-1 reports invoice-level outward supply details that flow into your buyers' GSTR-2B; GSTR-3B is your own summary return where you self-assess and pay net tax liability." },
        { q: "Can I switch between monthly and QRMP filing?", a: "Yes, eligible taxpayers can opt in or out of QRMP at the start of a quarter, within the window specified on the GST portal." },
        { q: "What triggers a GST notice on returns already filed?", a: "The most common triggers are ITC mismatch against GSTR-2B, a sharp variance between GSTR-1 and GSTR-3B turnover, or e-way bill volumes inconsistent with declared turnover." }
      ],
      relatedSlugs: ["gst-registration", "income-tax-return-filing", "roc-annual-compliance"]
    },

    // ---------------------------------------------------------------- 7
    {
      slug: "income-tax-return-filing",
      title: "Income Tax Return Filing for Business",
      category: "gst-tax",
      group: "Income Tax Filing & Certificates",
      shortDesc: "ITR-3, ITR-5 or ITR-6 filing, with tax audit coordination under Section 44AB where applicable.",
      heroHeadline: "Business Income Tax Return Filing",
      heroSubline: "ITR filing for proprietorships, partnerships, LLPs and companies — including presumptive taxation and tax audit coordination.",
      priceFrom: 1999,
      turnaround: "3-5 working days (non-audit cases)",
      authority: "Income Tax Department",
      appliesTo: [
        "A company, LLP or partnership firm filing its annual return",
        "A business whose books are subject to tax audit",
        "A firm claiming deductions or carrying forward losses",
        "A business reconciling AIS and Form 26AS with its books"
      ],
      overview:
        "Which ITR form applies depends on your entity type and income structure: ITR-3 for proprietors and individuals with business income, ITR-5 for partnerships and LLPs, and ITR-6 for companies other than those claiming exemption under Section 11. Businesses under the presumptive taxation schemes — Section 44AD for trading/manufacturing and 44ADA for specified professionals — can declare income at a prescribed percentage of turnover without maintaining full books, subject to eligibility limits.\n\nWhere turnover exceeds ₹1 crore (or ₹10 crore with cash transactions under 5%) for business, or gross receipts exceed ₹50 lakh for a profession, a tax audit under Section 44AB becomes mandatory, and the audit report (Form 3CA/3CB and 3CD) must be filed before the return.\n\nWe reconcile Form 26AS and the Annual Information Statement (AIS) against your books before filing, since a mismatch between reported income and what's reflected in AIS is one of the most frequent sources of a scrutiny notice under Section 143(1).",
      benefits: [
        { title: "Correct form, first time", desc: "Entity-appropriate ITR form selection avoids a defective return notice under Section 139(9)." },
        { title: "AIS/26AS reconciliation", desc: "Books matched against the government's own data before filing, reducing scrutiny risk." },
        { title: "Presumptive scheme eligibility check", desc: "We confirm whether 44AD/44ADA genuinely applies before you rely on it — wrongful claims are a common audit trigger." },
        { title: "Carry-forward of losses", desc: "Timely filing preserves your right to carry forward business losses against future years' profits." }
      ],
      documentsRequired: [
        "PAN and Aadhaar of the proprietor/partners/directors",
        "Books of account or bank statements for the financial year",
        "Form 26AS and Annual Information Statement (AIS)",
        "GST returns filed during the year, for turnover cross-verification",
        "Details of investments claimed under Chapter VI-A deductions",
        "Tax audit report (Form 3CD), where applicable"
      ],
      processSteps: [
        { title: "Income & entity assessment", desc: "Confirm applicable ITR form and whether presumptive taxation or full books apply." },
        { title: "Reconciliation", desc: "Books matched against 26AS, AIS and GST turnover for consistency." },
        { title: "Tax audit coordination", desc: "Form 3CD prepared and filed ahead of the return, where the turnover threshold is crossed." },
        { title: "Return filing & verification", desc: "ITR filed and e-verified via Aadhaar OTP, net banking, or DSC for companies." }
      ],
      eligibility: [
        "Every company and LLP must file regardless of profit or loss",
        "Proprietors and partnerships must file if income exceeds the basic exemption limit",
        "Tax audit applies where turnover/receipts cross the Section 44AB thresholds"
      ],
      faqs: [
        { q: "What is the due date for a business ITR?", a: "31 July for non-audit cases; 31 October where a tax audit applies; 30 November where transfer pricing (Form 3CEB) is also required." },
        { q: "Can presumptive taxation reduce my compliance burden?", a: "Yes — under Section 44AD, eligible businesses declare 8% (6% for digital receipts) of turnover as income without maintaining detailed books, provided turnover is within ₹2 crore (₹3 crore with high digital receipts)." },
        { q: "What if I miss the due date?", a: "A belated return can still be filed up to 31 December of the assessment year under Section 139(4), with a late fee under Section 234F and interest on any unpaid tax." },
        { q: "Does a loss-making company still need to file?", a: "Yes, and filing on time is what preserves the right to carry the loss forward against future years' profits." }
      ],
      relatedSlugs: ["gst-return-filing", "roc-annual-compliance", "llp-registration"]
    },

    // ---------------------------------------------------------------- 8
    {
      slug: "roc-annual-compliance",
      title: "ROC Annual Compliance (AOC-4 & MGT-7)",
      category: "gst-tax",
      group: "ROC & Corporate Compliance",
      shortDesc: "Annual financial statement and annual return filing for companies, plus DIR-3 KYC for directors.",
      heroHeadline: "ROC Annual Compliance",
      heroSubline: "AOC-4 financial statements and MGT-7/MGT-7A annual return filed after every AGM, with statutory registers and DIR-3 KYC handled alongside.",
      priceFrom: 7999,
      turnaround: "15-20 working days per annual cycle",
      authority: "Registrar of Companies, Ministry of Corporate Affairs",
      appliesTo: [
        "Every private limited company, including dormant ones",
        "A company with overdue AOC-4 or MGT-7 filings",
        "A company whose auditor has just been appointed or changed",
        "Directors whose DINs are at risk of disqualification for non-filing"
      ],
      overview:
        "Every registered company, regardless of turnover or whether it did any business during the year, must file AOC-4 (financial statements) within 30 days of the Annual General Meeting and MGT-7 (or MGT-7A for small companies and OPCs) within 60 days. Late filing attracts a penalty of ₹100 per day per form, with no upper cap — this is the single most common source of avoidable compounding penalty for small companies.\n\nWe prepare the board's report, director's responsibility statement, and the annual return before the AGM, and separately track each director's DIR-3 KYC, due by 30 September every year — a director whose DIN gets deactivated for missed KYC cannot be listed as a signatory on any filing until it's reactivated.\n\nWe also maintain the statutory registers (members, directors, charges) and minute the board and general meetings that the Companies Act requires a company to record, even where no external filing is due.",
      benefits: [
        { title: "Avoid daily penalty accrual", desc: "AOC-4 and MGT-7 filed within the statutory window, avoiding the uncapped ₹100/day additional fee." },
        { title: "Active DIN for all directors", desc: "DIR-3 KYC tracked and filed annually so no director's DIN lapses mid-filing." },
        { title: "Board-ready documentation", desc: "Board's report and financial statements drafted to Schedule III format, ready for AGM approval." },
        { title: "Statutory register maintenance", desc: "Members, directors and charge registers kept current — required at every RoC or bank due-diligence check." }
      ],
      documentsRequired: [
        "Audited financial statements (balance sheet, P&L, cash flow where applicable)",
        "Auditor's report and Board's report",
        "Details of related-party transactions during the year",
        "List of shareholders and shareholding pattern as on the financial year-end",
        "DIN and PAN of all directors for DIR-3 KYC",
        "Minutes of the AGM at which financials were adopted"
      ],
      processSteps: [
        { title: "Financial statement finalisation", desc: "Audited financials and board's report prepared and circulated ahead of the AGM." },
        { title: "AGM", desc: "Annual General Meeting held; financials adopted and directors, if due for retirement by rotation, re-appointed." },
        { title: "AOC-4 filing", desc: "Financial statements filed with the RoC within 30 days of the AGM." },
        { title: "MGT-7/7A filing", desc: "Annual return filed within 60 days of the AGM." },
        { title: "DIR-3 KYC", desc: "Each director's KYC filed by 30 September, independent of the AGM cycle." }
      ],
      eligibility: [
        "Applies to every private limited company, OPC, and public company registered under the Companies Act",
        "MGT-7A (abridged annual return) is available to small companies and OPCs; others file MGT-7",
        "Applies whether or not the company carried on any business during the year"
      ],
      faqs: [
        { q: "What if the company had no transactions all year?", a: "It's still required to file AOC-4 and MGT-7 — a 'dormant' or inactive company must either file these annual forms or formally apply for dormant status/strike-off under Section 248." },
        { q: "What's the penalty for late filing?", a: "An additional fee of ₹100 per day per form applies, with no maximum cap, on top of officer-level penalties that can be levied under Section 137 and 92 for continued default." },
        { q: "Is a company audit mandatory regardless of size?", a: "Yes — every company must have its accounts audited by a chartered accountant annually, irrespective of turnover, unlike LLPs which have an audit exemption below certain thresholds." },
        { q: "What is DIR-3 KYC and who needs to file it?", a: "It's an annual identity verification for every individual holding a DIN, due by 30 September. Missing it deactivates the DIN until a KYC filing (with late fee) is made." }
      ],
      relatedSlugs: ["income-tax-return-filing", "pvt-ltd-company-registration", "gst-return-filing"]
    },

    // ---------------------------------------------------------------- 9
    {
      slug: "trademark-registration",
      title: "Trademark Registration",
      category: "trademark-ip",
      group: "Trademark",
      shortDesc: "TM-A filing under the NICE classification, with a clearance search before application.",
      heroHeadline: "Trademark Registration",
      heroSubline: "Secure your brand name, logo or tagline under the Trade Marks Act, 1999 — filed same-day, with a clearance search first.",
      priceFrom: 6999,
      turnaround: "1 day to file",
      authority: "Trade Marks Registry, Office of the CGPDTM",
      appliesTo: [
        "A business launching a new brand name or logo",
        "A startup that wants to secure its name before raising funds",
        "A company selling on marketplaces that require a trademark for brand registry",
        "A brand owner seeing look-alike names in the market"
      ],
      overview:
        "A registered trademark gives you the exclusive right to use a mark for the goods or services in the class you register, and the ® symbol once the certificate is issued — using ® before registration is itself a punishable misrepresentation under the Act. We run a clearance search across the Trade Marks Registry database before filing, since a mark that's confusingly similar to an existing registration is the leading cause of a Section 11 objection.\n\nApplication is filed in Form TM-A under the appropriate class (or classes) from the NICE classification's 45 categories. Once accepted, the mark is examined; if there's no objection, it's published in the Trade Marks Journal for a four-month opposition window before the Registrar issues the registration certificate.\n\nOwning an unregistered mark under common law (via prior use) does give some protection, but a registered mark is dramatically easier and cheaper to enforce — registration is prima facie proof of ownership in any infringement action.",
      benefits: [
        { title: "Exclusive nationwide right", desc: "Use of the mark by anyone else in the same class, anywhere in India, becomes actionable infringement." },
        { title: "Licensable asset", desc: "A registered mark can be licensed or franchised for royalty income, and is recognised as an intangible asset." },
        { title: "Customs enforcement", desc: "Registered marks can be recorded with Indian Customs to intercept counterfeit imports at the border." },
        { title: "Stronger legal footing", desc: "Registration shifts the burden of proof in an infringement suit, and unlocks statutory remedies unavailable to unregistered marks." }
      ],
      documentsRequired: [
        "Business PAN and registration certificate (or proprietor's PAN)",
        "Logo file (if applying for a device/logo mark), in a print-ready format",
        "Proof of first use of the mark, if claiming use prior to filing (invoices, dated packaging, website archive)",
        "Udyam registration certificate, where applicable (entitles small businesses to a 50% fee reduction)",
        "Signed Power of Attorney (Form TM-48) authorising the filing agent"
      ],
      processSteps: [
        { title: "Clearance search", desc: "Existing marks in the proposed class checked for conflicting similarity." },
        { title: "TM-A filing", desc: "Application filed under the relevant class(es); an application number is issued the same day." },
        { title: "Examination", desc: "Registrar reviews for distinctiveness and conflicts; an examination report is issued within 1-3 months typically." },
        { title: "Journal publication", desc: "Accepted marks are published in the Trade Marks Journal for a four-month public opposition window." },
        { title: "Registration", desc: "Absent opposition, the Registrar issues the registration certificate valid for 10 years, renewable indefinitely." }
      ],
      eligibility: [
        "Any individual, proprietorship, partnership, LLP or company that uses or intends to use a mark in trade",
        "The mark must be capable of distinguishing your goods/services and not be purely descriptive or generic",
        "Prior use is not mandatory to file, but strengthens the application against opposition"
      ],
      faqs: [
        { q: "What is the difference between ™ and ®?", a: "™ can be used on any mark you claim, registered or not — it's a common-law assertion. ® may only be used once the Registrar has actually issued a registration certificate for that mark in that class." },
        { q: "How many classes should I register under?", a: "One filing covers one or more classes for an additional per-class fee; we recommend filing in every class where you currently operate or have a genuine plan to expand within the next 2-3 years." },
        { q: "What happens if someone opposes my application?", a: "You get an opportunity to file a counter-statement within two months, followed by evidence and, often, a hearing before the Registrar — a contested opposition can extend the timeline by 12-24 months." },
        { q: "Do I need to renew my trademark?", a: "Yes, every 10 years, indefinitely, provided you file the renewal (Form TM-R) before or within the grace period after expiry." }
      ],
      relatedSlugs: ["trademark-objection-reply", "copyright-registration", "patent-filing-provisional"]
    },

    // --------------------------------------------------------------- 10
    {
      slug: "trademark-objection-reply",
      title: "Trademark Objection Reply",
      category: "trademark-ip",
      group: "Trademark",
      shortDesc: "Reply to a Registrar's examination report objection under Section 9 or Section 11, before the show-cause hearing.",
      heroHeadline: "Trademark Objection Reply",
      heroSubline: "Respond to an examination report objection with a legally grounded reply, and represent you at the show-cause hearing if one is scheduled.",
      priceFrom: 3999,
      turnaround: "7-10 working days for the reply",
      authority: "Trade Marks Registry, Office of the CGPDTM",
      appliesTo: [
        "An applicant whose examination report cites a conflicting mark",
        "An applicant whose mark has been objected to as descriptive or non-distinctive",
        "An applicant approaching the reply deadline on an examination report"
      ],
      overview:
        "An examination report objection isn't a rejection — it's the Registrar flagging a concern that must be addressed in writing within one month, or the application is treated as abandoned. The two most common grounds are Section 9 (the mark is descriptive, generic, or lacks distinctiveness) and Section 11 (it's confusingly similar to an existing registered or pending mark).\n\nA Section 9 objection is typically countered by demonstrating acquired distinctiveness through evidence of use — sales figures, advertising spend, market presence — or by narrowing the specification of goods/services. A Section 11 objection requires distinguishing your mark from the cited conflicting mark on visual, phonetic or conceptual grounds, or securing a no-objection letter from the cited mark's owner.\n\nIf the examiner isn't satisfied by the written reply, a show-cause hearing is scheduled where we represent the application in person or via video conference before the Registrar.",
      benefits: [
        { title: "Prevents abandonment", desc: "A timely, well-grounded reply keeps the application alive past the one-month response deadline." },
        { title: "Evidence-backed distinctiveness argument", desc: "We compile use-based evidence to counter descriptiveness objections where applicable." },
        { title: "Hearing representation", desc: "If a show-cause hearing is listed, we appear on your behalf before the Registrar." },
        { title: "Conflict differentiation", desc: "For Section 11 objections, we build the visual/phonetic distinction argument or negotiate a consent letter." }
      ],
      documentsRequired: [
        "Copy of the examination report received",
        "Evidence of use — invoices, marketing material, website screenshots with dates",
        "Details of the cited conflicting mark(s), where the objection is under Section 11",
        "Any prior correspondence with the Trade Marks Registry on this application"
      ],
      processSteps: [
        { title: "Objection review", desc: "Examination report analysed to identify the exact statutory ground raised." },
        { title: "Reply drafting", desc: "Written response drafted with legal argument and supporting evidence, filed within the one-month deadline." },
        { title: "Hearing preparation", desc: "If a hearing is listed, arguments and evidence are prepared for oral submission." },
        { title: "Outcome", desc: "Registrar either accepts the mark for journal publication or issues a further order, which can be appealed." }
      ],
      eligibility: [
        "Applies to any pending trademark application that has received an examination report with an objection",
        "Must be filed within one month of the examination report date"
      ],
      faqs: [
        { q: "What happens if I miss the one-month reply deadline?", a: "The application is treated as abandoned. A fresh application can be filed, but you lose your original filing date, which matters if a competing mark is filed in the interim." },
        { q: "Can I avoid a hearing entirely?", a: "A strong written reply often results in direct acceptance without a hearing, but the Registrar has discretion to call one regardless, especially for Section 11 objections." },
        { q: "What is a 'consent letter' and does it guarantee acceptance?", a: "It's a no-objection letter from the owner of the cited conflicting mark. It significantly strengthens your case but doesn't bind the Registrar, who retains discretion to refuse on public-interest grounds." }
      ],
      relatedSlugs: ["trademark-registration", "copyright-registration"]
    },

    // --------------------------------------------------------------- 11
    {
      slug: "copyright-registration",
      title: "Copyright Registration",
      category: "trademark-ip",
      group: "Copyright",
      shortDesc: "Register literary, artistic or software work with the Copyright Office under Form XIV.",
      heroHeadline: "Copyright Registration",
      heroSubline: "Formal proof of authorship for literary, artistic, musical or software work, filed with the Copyright Office under Form XIV.",
      priceFrom: 4999,
      turnaround: "3-4 months (after the mandatory 30-day objection window)",
      authority: "Copyright Office, Department for Promotion of Industry and Internal Trade",
      appliesTo: [
        "A software company protecting its source code",
        "An author, artist or musician recording ownership of their work",
        "A business whose logo is also an original artistic work",
        "A creator preparing for a licensing or infringement dispute"
      ],
      overview:
        "Copyright protection technically exists from the moment an original work is created, but registration creates a public record of authorship and ownership date, which becomes decisive evidence in any infringement dispute. It covers literary work, software source code, artwork, logos (as artistic works, separate from trademark protection), music and film.\n\nApplication is filed under Form XIV with the Copyright Office, along with the work itself and, for software, a specified extract of source code. After filing there's a mandatory 30-day window during which anyone can file an objection; if none is received, the application moves to the examiner for scrutiny before registration is granted.\n\nCopyright protects the specific expression of an idea — the actual code, text or artwork — not the underlying idea, process or functionality itself; that distinction matters when deciding whether copyright, patent or both are the right protection route.",
      benefits: [
        { title: "Dated proof of authorship", desc: "A registration certificate is strong, independently verifiable evidence of when and by whom a work was created." },
        { title: "Covers software and content", desc: "Protects source code, documentation, marketing content, and design assets under a single filing route." },
        { title: "Assignable and licensable", desc: "Registered copyright can be formally assigned or licensed with clear title, useful in M&A and vendor contracts." },
        { title: "Long protection term", desc: "For most works, protection lasts the author's lifetime plus 60 years — far longer than trademark or patent terms." }
      ],
      documentsRequired: [
        "Copy of the work (manuscript, artwork, or software source code extract)",
        "NOC from other authors or collaborators, if jointly created",
        "Proof of publication, if the work has already been published",
        "Power of Attorney authorising the filing agent",
        "Identity proof of the applicant/author"
      ],
      processSteps: [
        { title: "Work classification", desc: "Work categorised under the correct class — literary, artistic, musical, or software." },
        { title: "Form XIV filing", desc: "Application filed with the Copyright Office along with the work and required declarations." },
        { title: "Objection window", desc: "30-day period during which any third party can file an objection to the application." },
        { title: "Examination", desc: "Copyright examiner scrutinises the application and objection (if any)." },
        { title: "Registration", desc: "Certificate issued and entered into the Register of Copyrights." }
      ],
      eligibility: [
        "The work must be original and fixed in a tangible form (written, recorded, or coded)",
        "The applicant must be the author, or have a valid assignment/employment relationship establishing ownership",
        "Works already in the public domain cannot be registered"
      ],
      faqs: [
        { q: "Do I need to register software line by line?", a: "No — you submit a defined extract (typically the first and last 10 pages of source code) rather than the entire codebase, to balance protection with confidentiality." },
        { q: "Is copyright registration mandatory to sue for infringement?", a: "No, copyright exists automatically on creation, but an unregistered claim is far harder to prove in court — registration is strongly advisable for any commercially significant work." },
        { q: "Can a company own a copyright?", a: "Yes, where the work is created by an employee in the course of employment, or under a written assignment from a freelancer/contractor, the company can be the registered owner." },
        { q: "How is this different from a trademark for a logo?", a: "A logo can be protected under both — copyright protects the artistic expression, while trademark protects its use as a source identifier for goods/services. Most businesses register both." }
      ],
      relatedSlugs: ["trademark-registration", "patent-filing-provisional"]
    },

    // --------------------------------------------------------------- 12
    {
      slug: "patent-filing-provisional",
      title: "Provisional Patent Filing",
      category: "trademark-ip",
      group: "Patent",
      shortDesc: "Lock a priority date for your invention with a provisional specification, before disclosure or a full filing.",
      heroHeadline: "Provisional Patent Filing",
      heroSubline: "File a provisional specification to lock your priority date, with 12 months to complete the full specification.",
      priceFrom: 12999,
      turnaround: "2-3 working days to file; 12-month window to file the complete specification",
      authority: "Indian Patent Office, Office of the CGPDTM",
      appliesTo: [
        "An inventor who needs a priority date before the invention is complete",
        "A startup about to present its technology to investors or at a conference",
        "A research team preparing a complete specification within twelve months"
      ],
      overview:
        "A provisional patent application is a fast, lower-cost way to establish a priority date for an invention that's still being refined — before a product launch, investor pitch, or conference presentation that would otherwise count as public disclosure and jeopardise patentability. It requires a provisional specification describing the invention in enough technical detail to demonstrate what's being claimed, without the full claims, drawings and prior-art analysis a complete specification demands.\n\nOnce filed, you have exactly 12 months to file the complete specification claiming priority from the provisional filing date. If you miss that window, the provisional application lapses and the priority date is lost — there's no extension.\n\nWe strongly recommend a patentability search before filing, even at the provisional stage: it doesn't change the filing itself, but it tells you early whether the invention is likely to clear the novelty and inventive-step bar, before you invest in the more expensive complete specification.",
      benefits: [
        { title: "Locks your priority date", desc: "Establishes 'first to file' status against anyone who files a similar invention later." },
        { title: "Safe public disclosure", desc: "Once filed, you can discuss the invention with investors, partners or at conferences without losing novelty." },
        { title: "Lower upfront cost", desc: "Provisional filing is significantly cheaper than a complete specification, useful when the invention is still evolving." },
        { title: "12-month runway", desc: "Time to refine claims, run a full prior-art search, and decide on international filing strategy (PCT) before committing to the complete specification." }
      ],
      documentsRequired: [
        "Technical description of the invention, including how it works and what problem it solves",
        "Diagrams or drawings, where relevant to explain the invention",
        "Inventor details and proof of right to file (employment or assignment agreement, if not the inventor personally)",
        "Form 1 (application for grant of patent) and Form 2 (provisional specification)",
        "Power of Attorney, if filed through an agent"
      ],
      processSteps: [
        { title: "Invention disclosure", desc: "Technical details captured in a structured invention disclosure to draft the specification from." },
        { title: "Provisional specification drafting", desc: "Specification drafted to describe the invention sufficiently to claim priority." },
        { title: "Filing", desc: "Form 1 and Form 2 filed with the Indian Patent Office; an application number and filing date are issued immediately." },
        { title: "Complete specification (within 12 months)", desc: "Full claims, detailed description and drawings filed before the 12-month deadline to preserve priority." }
      ],
      eligibility: [
        "The invention must be novel, involve an inventive step, and be capable of industrial application",
        "Must not have been publicly disclosed before filing, except under limited grace-period exceptions",
        "Software-only inventions face restrictions under Section 3(k) — a technical effect or hardware integration strengthens eligibility"
      ],
      faqs: [
        { q: "What happens if I don't file the complete specification in time?", a: "The provisional application lapses automatically 12 months after filing, and you lose the priority date — the invention becomes freely filable by anyone, including a competitor." },
        { q: "Can I file for international patent protection later?", a: "Yes — filing a PCT (Patent Cooperation Treaty) application within 12 months of the Indian provisional filing preserves your priority date across all PCT member countries." },
        { q: "Is a patentability search mandatory before filing?", a: "Not mandatory, but strongly advisable — it flags prior art that could block grant, before you spend on the more detailed and expensive complete specification." },
        { q: "How long does full patent grant take in India?", a: "Typically 3-5 years from the complete specification filing to grant, including examination, response to objections, and — if applicable — opposition proceedings." }
      ],
      relatedSlugs: ["copyright-registration", "trademark-registration"]
    },

    // --------------------------------------------------------------- 13
    {
      slug: "iec-registration",
      title: "Import Export Code (IEC) Registration",
      category: "licensing",
      group: "Trade & Food Business Licenses",
      shortDesc: "DGFT-issued IEC, mandatory to file a shipping bill or bill of entry for cross-border trade.",
      heroHeadline: "Import Export Code (IEC) Registration",
      heroSubline: "A 10-digit code from the DGFT, linked to your PAN, required to clear customs on any import or export shipment.",
      priceFrom: 2499,
      turnaround: "2-3 working days",
      authority: "Directorate General of Foreign Trade",
      appliesTo: [
        "A business importing goods or services for the first time",
        "An exporter who needs IEC to clear shipments and receive foreign remittances",
        "An e-commerce seller shipping internationally",
        "A company claiming export incentives"
      ],
      overview:
        "An Import Export Code is issued by the Directorate General of Foreign Trade and is mandatory for any business or individual engaging in cross-border trade — you cannot file a shipping bill (export) or a bill of entry (import) with Indian customs without one. Since 2021, the IEC is PAN-linked, and only one IEC is issued per PAN, replacing the earlier practice of applying per branch or division.\n\nThe application is filed entirely online on the DGFT portal, with the applicant's PAN, bank details and a cancelled cheque or bank certificate for verification. Once the IEC is issued, there's no renewal fee, but the DGFT requires an annual electronic confirmation between April and June each year — an IEC not confirmed within that window is automatically deactivated.\n\nCertain categories are exempt from requiring an IEC, including government departments, and personal imports/exports not connected to trade, manufacture or agriculture.",
      benefits: [
        { title: "Mandatory customs clearance", desc: "No shipping bill or bill of entry can be filed without a valid, active IEC linked to the shipper's PAN." },
        { title: "Access to export incentive schemes", desc: "Required to claim benefits under schemes like RoDTEP and to register with export promotion councils." },
        { title: "No return filing burden", desc: "Unlike GST, IEC has no periodic return — only a once-a-year online confirmation." },
        { title: "Lifetime validity", desc: "The IEC does not expire, provided the annual confirmation is completed each year." }
      ],
      documentsRequired: [
        "PAN of the business or individual applicant",
        "Aadhaar or other identity proof of the applicant/authorised signatory",
        "Bank account details with a cancelled cheque or bank certificate",
        "Address proof of the business premises",
        "Digital Signature Certificate or Aadhaar-based e-sign for the online application"
      ],
      processSteps: [
        { title: "Document preparation", desc: "PAN, bank details and address proof collated and verified for consistency." },
        { title: "DGFT online application", desc: "Application filed on the DGFT portal with e-sign or DSC authentication." },
        { title: "Fee payment", desc: "Prescribed application fee paid online." },
        { title: "IEC issuance", desc: "Certificate generated electronically, usually within 1-2 working days of a clean application." }
      ],
      eligibility: [
        "Any individual, proprietorship, partnership, LLP or company intending to import or export goods/services",
        "A valid PAN and an active bank account are required",
        "Not required for personal imports/exports unconnected to trade, or for specified government entities"
      ],
      faqs: [
        { q: "Do I need a separate IEC for each branch?", a: "No — since the PAN-linking reform, only one IEC is issued per PAN, covering all branches and divisions of that entity." },
        { q: "What happens if I don't complete the annual confirmation?", a: "The IEC is automatically deactivated for non-confirmation between April and June. It can be reactivated later, but shipments during the deactivated period would be blocked at customs." },
        { q: "Is IEC required for service exports too?", a: "Yes, if you're claiming benefits under export promotion schemes for services, or if your bank requires it for processing foreign remittances against service invoices." },
        { q: "Can an individual (not a registered business) apply?", a: "Yes, a proprietor can apply using personal PAN — no separate business registration is required specifically for IEC." }
      ],
      relatedSlugs: ["gst-registration", "fssai-license-registration", "udyam-msme-registration"]
    },

    // --------------------------------------------------------------- 14
    {
      slug: "fssai-license-registration",
      title: "FSSAI Food Business License",
      category: "licensing",
      group: "Trade & Food Business Licenses",
      shortDesc: "Basic, State, or Central FSSAI license depending on turnover and scale, mandatory for any food business.",
      heroHeadline: "FSSAI Food Business License",
      heroSubline: "Basic registration, State license, or Central license under the FSS Act, 2006 — tiered by turnover and business scale.",
      priceFrom: 2999,
      turnaround: "7-10 working days",
      authority: "FSSAI, Ministry of Health & Family Welfare",
      appliesTo: [
        "A food manufacturer, processor or packer",
        "A restaurant, caterer or cloud kitchen",
        "An importer or distributor of food products",
        "A food business whose turnover has moved it into a different licence tier"
      ],
      overview:
        "Every entity that manufactures, processes, stores, distributes or sells food — including a home kitchen, a cloud kitchen, or an FMCG brand — needs an FSSAI approval under one of three tiers. Basic Registration applies to businesses with turnover up to ₹12 lakh, State License to those between ₹12 lakh and ₹20 crore, and Central License to businesses above ₹20 crore, importers, and certain categories like large manufacturers and 100% export-oriented units regardless of turnover.\n\nWe assess your turnover and business category first — this determines not just the tier but the specific application form and documentation, since a State license for a manufacturing unit asks for different technical details than one for a restaurant or a retailer.\n\nThe FSSAI license number must be printed on your packaging and displayed at your premises. Operating without a valid license, or beyond the license's validity, exposes the business to penalties up to ₹5 lakh under the FSS Act and potential closure of premises.",
      benefits: [
        { title: "Legal requirement to operate", desc: "No food business — manufacturing, catering, retail, or e-commerce — can legally operate without the applicable FSSAI approval." },
        { title: "Consumer trust signal", desc: "The FSSAI logo and license number on packaging is a recognised food-safety credibility marker." },
        { title: "Platform onboarding", desc: "Swiggy, Zomato, Amazon and most food marketplaces require a valid FSSAI license before listing." },
        { title: "Import/export enablement", desc: "A Central license is a prerequisite for importing food products or operating an export-oriented food unit." }
      ],
      documentsRequired: [
        "PAN and business registration proof (Pvt Ltd/LLP/partnership deed/proprietorship proof)",
        "Photo ID and address proof of the proprietor/partners/directors",
        "Proof of premises (rent agreement/ownership document)",
        "List of food products to be manufactured/sold",
        "Water testing report, for manufacturing units using water as an ingredient",
        "Layout plan of the processing unit, for State/Central license applicants"
      ],
      processSteps: [
        { title: "Tier assessment", desc: "Turnover and business category evaluated to confirm Basic, State or Central applicability." },
        { title: "Application filing", desc: "Form A (Basic) or Form B (State/Central) filed on the FoSCoS portal with supporting documents." },
        { title: "Document scrutiny", desc: "Licensing authority reviews the application; a site inspection may be scheduled for State/Central license." },
        { title: "License issuance", desc: "License number and certificate issued, valid for 1-5 years as selected at the time of application." }
      ],
      eligibility: [
        "Basic Registration: annual turnover up to ₹12 lakh",
        "State License: annual turnover between ₹12 lakh and ₹20 crore",
        "Central License: annual turnover above ₹20 crore, or specific categories (importers, 100% EOUs, large manufacturers) regardless of turnover"
      ],
      faqs: [
        { q: "Does a home-based tiffin or bakery business need a license?", a: "Yes — if turnover is up to ₹12 lakh, Basic Registration applies; it's a simplified process but still legally mandatory." },
        { q: "How long is an FSSAI license valid?", a: "You can choose validity from 1 to 5 years at the time of application; renewal must be filed at least 30 days before expiry to avoid a penalty." },
        { q: "What if my business operates in multiple states?", a: "You need a separate State or Central license (as applicable) for each state where you have a physical premises or manufacturing unit." },
        { q: "Is a site inspection always required?", a: "Basic Registration is usually approved on document review alone; State and Central license applications, particularly for manufacturing units, often involve a physical inspection before approval." }
      ],
      relatedSlugs: ["iec-registration", "bis-certification", "pollution-control-consent-to-operate"]
    },

    // --------------------------------------------------------------- 15
    {
      slug: "bis-certification",
      title: "BIS Certification (ISI Mark)",
      category: "licensing",
      group: "Product Certification (BIS)",
      shortDesc: "Mandatory ISI mark certification for products under the Compulsory Registration Scheme, with factory audit and lab testing.",
      heroHeadline: "BIS Certification (ISI Mark)",
      heroSubline: "Product certification under the Bureau of Indian Standards, mandatory for goods notified under the Compulsory Registration Scheme.",
      priceFrom: 24999,
      turnaround: "4-6 months",
      authority: "Bureau of Indian Standards",
      appliesTo: [
        "A manufacturer of a product notified under a Quality Control Order",
        "An importer whose product cannot be cleared without the ISI mark",
        "A brand outsourcing manufacturing to a factory that needs certification",
        "A manufacturer adding a new product variant to an existing licence"
      ],
      overview:
        "A growing list of products — electronics, electrical appliances, toys, cement, steel, and several others — are notified under BIS's Compulsory Registration Scheme (CRS) via Quality Control Orders, meaning they cannot be manufactured, imported or sold in India without a BIS license or registration and the ISI mark carried on the product itself.\n\nThe process starts with sample testing at a BIS-recognised laboratory against the relevant Indian Standard, followed by a factory audit to confirm the manufacturing process and in-house quality control can consistently meet that standard — not just the tested sample. Foreign manufacturers apply under the Foreign Manufacturers Certification Scheme (FMCS), which follows a broadly similar but separately administered route.\n\nGiven the lab-testing and audit sequencing, this is the longest-turnaround certification in our service list; we manage the BIS liaison, lab coordination and factory audit preparation end-to-end so the timeline isn't extended further by document or scheduling gaps.",
      benefits: [
        { title: "Mandatory market access", desc: "Notified products cannot legally be sold in India without BIS certification — this isn't optional compliance." },
        { title: "Customs clearance for imports", desc: "Import consignments of CRS-notified products are held at port without a valid BIS registration." },
        { title: "Quality credibility", desc: "The ISI mark is a widely recognised quality signal to B2B buyers and retail consumers alike." },
        { title: "Reduced liability exposure", desc: "Certified compliance with the Indian Standard reduces product-liability risk in the event of a safety complaint." }
      ],
      documentsRequired: [
        "Business registration and manufacturing license/factory proof",
        "Product technical specifications and test reports (if pre-existing)",
        "List of raw materials and manufacturing process flow chart",
        "In-house quality control system documentation",
        "Factory layout plan and machinery list",
        "Authorisation letter for foreign manufacturers applying via FMCS"
      ],
      processSteps: [
        { title: "Applicability check", desc: "Confirm whether the product falls under a notified Quality Control Order and identify the governing Indian Standard." },
        { title: "Sample testing", desc: "Product sample tested at a BIS-recognised laboratory against the applicable standard." },
        { title: "Application filing", desc: "License application filed with BIS along with test reports and factory documentation." },
        { title: "Factory audit", desc: "BIS officers inspect the manufacturing facility and quality control process." },
        { title: "License grant", desc: "BIS license issued, permitting use of the ISI mark on certified products." }
      ],
      eligibility: [
        "Any manufacturer, whether domestic or foreign, producing a product notified under a Quality Control Order",
        "Manufacturing facility must have documented in-house quality control aligned to the relevant Indian Standard",
        "Foreign manufacturers must apply through the FMCS route with an authorised Indian representative"
      ],
      faqs: [
        { q: "How do I know if my product needs BIS certification?", a: "Check the product against the list of Quality Control Orders issued by the Ministry concerned — electronics, electrical goods, toys, and several construction materials are commonly notified categories, and the list is periodically expanded." },
        { q: "What's the difference between BIS registration and BIS licensing?", a: "Registration (under CRS) applies to electronics and IT goods; licensing (under the standard ISI mark scheme) applies to most other product categories — the documentation and audit process differ slightly between the two." },
        { q: "Is the factory audit a one-time requirement?", a: "No — BIS conducts periodic surveillance audits after the initial certification to confirm continued compliance, in addition to market sample testing." },
        { q: "Can I sell the product while certification is pending?", a: "No, for CRS-notified products, sale or import without a valid registration is prohibited — there's no provisional or interim permission." }
      ],
      relatedSlugs: ["cdsco-medical-device-registration", "fssai-license-registration", "iec-registration"]
    },

    // --------------------------------------------------------------- 16
    {
      slug: "cdsco-medical-device-registration",
      title: "CDSCO Medical Device Registration",
      category: "licensing",
      group: "Medical Devices, Pharma & Healthcare",
      shortDesc: "Risk-based Class A-D registration under the Medical Device Rules, 2017, filed through the SUGAM portal.",
      heroHeadline: "CDSCO Medical Device Registration",
      heroSubline: "Risk-classified registration under the Medical Device Rules, 2017 — Class A/B through the state licensing authority, Class C/D centrally through CDSCO.",
      priceFrom: 34999,
      turnaround: "4-9 months, depending on device risk class",
      authority: "Central Drugs Standard Control Organisation (CDSCO)",
      appliesTo: [
        "A manufacturer of a medical device notified for regulation",
        "An importer of medical devices",
        "A diagnostic or IVD kit maker",
        "A startup moving a device from prototype to commercial sale"
      ],
      overview:
        "The Medical Device Rules, 2017 classify devices into four risk categories — Class A (low risk, e.g. a thermometer) through Class D (high risk, e.g. an implantable device) — and the classification determines both the licensing authority and the documentation burden. Class A and B devices are licensed by the State Licensing Authority; Class C and D go through the Central Licensing Authority under CDSCO, with a correspondingly more detailed technical and clinical evidence requirement.\n\nApplications are filed through the SUGAM portal, and for imported devices, the manufacturer must also hold a valid free-sale certificate and, in most cases, ISO 13485 quality management certification recognised by the regulatory authority in the country of origin.\n\nWe classify the device first — this single decision shapes the entire filing strategy — then prepare the technical file, device master file, and labelling compliance documentation to CDSCO's format before submission.",
      benefits: [
        { title: "Legal market entry", desc: "No medical device in a notified category can be manufactured, imported or sold in India without the applicable CDSCO registration." },
        { title: "Import clearance", desc: "Customs clearance for imported devices depends on a valid import license or registration certificate being on file." },
        { title: "Institutional procurement eligibility", desc: "Hospitals, distributors and government tenders typically require CDSCO registration before empanelling a device." },
        { title: "Structured risk classification", desc: "Correct upfront classification avoids the far costlier scenario of a Class C/D device being filed — or rejected — under the wrong category." }
      ],
      documentsRequired: [
        "Device technical file — design, intended use, specifications",
        "Free-sale certificate from the country of origin (for imported devices)",
        "ISO 13485 quality management certification",
        "Device Master File and Plant Master File",
        "Labelling and instructions-for-use compliant with Indian regulatory format",
        "Test reports from a NABL/CDSCO-recognised laboratory"
      ],
      processSteps: [
        { title: "Risk classification", desc: "Device assessed against Medical Device Rules criteria to confirm Class A, B, C or D." },
        { title: "Technical file preparation", desc: "Device Master File, test reports and labelling compiled to the required format." },
        { title: "SUGAM portal filing", desc: "Application filed with the State or Central Licensing Authority based on classification." },
        { title: "Evaluation & queries", desc: "Authority reviews the submission and may raise technical queries requiring a response." },
        { title: "License/registration grant", desc: "Manufacturing or import license issued, valid for the term specified by the authority." }
      ],
      eligibility: [
        "Applies to manufacturers and importers of devices notified under the Medical Device Rules, 2017",
        "Foreign manufacturers must appoint an Authorised Indian Agent for the application",
        "ISO 13485 certification is generally a prerequisite for the technical file to be accepted"
      ],
      faqs: [
        { q: "How is device risk class determined?", a: "Based on the intended use, duration of contact with the body, and invasiveness — CDSCO's classification rules under the Medical Device Rules, 2017 set out specific criteria and examples for each class." },
        { q: "Do all medical devices need registration, or only a notified list?", a: "Currently, the Medical Device Rules apply to notified categories, with the list progressively expanded — most diagnostic, surgical and implantable devices are now covered; we confirm applicability before starting the filing." },
        { q: "What is an Authorised Indian Agent and why is it needed?", a: "Foreign manufacturers without an Indian establishment must appoint a locally registered entity to file and correspond with CDSCO on their behalf — this is a regulatory requirement, not optional." },
        { q: "How long is the registration valid?", a: "Typically issued for a fixed term (commonly aligned to the manufacturing/import license validity), after which renewal must be filed before expiry to maintain continuity." }
      ],
      relatedSlugs: ["bis-certification", "fssai-license-registration"]
    },

    // --------------------------------------------------------------- 17
    {
      slug: "pollution-control-consent-to-operate",
      title: "CPCB/SPCB Consent to Establish & Operate",
      category: "licensing",
      group: "Environmental Compliance",
      shortDesc: "Consent to Establish (before construction) and Consent to Operate (before commissioning) under the Water & Air Acts.",
      heroHeadline: "Pollution Control Board Consent",
      heroSubline: "Consent to Establish and Consent to Operate under the Water (Prevention & Control of Pollution) Act, 1974 and the Air Act, 1981.",
      priceFrom: 8999,
      turnaround: "30-45 working days",
      authority: "State Pollution Control Board",
      appliesTo: [
        "A manufacturing unit about to start production",
        "An industrial unit whose consent to operate is due for renewal",
        "A unit expanding capacity beyond its existing consent",
        "A business that has received a closure direction for operating without consent"
      ],
      overview:
        "Any industrial or commercial unit likely to discharge effluent or emissions needs a two-stage clearance from the State Pollution Control Board: Consent to Establish (CTE), obtained before construction begins, and Consent to Operate (CTO), obtained before commissioning — operating without a valid CTO is an offence under both the Water Act and the Air Act, independent of whether actual pollution has occurred.\n\nUnits are categorised Red, Orange, Green or White based on their pollution potential, which determines the depth of scrutiny, the renewal periodicity (from 1 year for Red category up to consent-for-lifetime for some White category units), and whether a public hearing or Environmental Impact Assessment is additionally required for larger projects.\n\nWe assess your unit's category first, since a unit wrongly self-classified as lower-risk faces the compounding problem of both an incorrect application and a potential closure notice once the Board's own inspection identifies the correct category.",
      benefits: [
        { title: "Legal precondition to operate", desc: "CTO is mandatory before commissioning — operating without it exposes the unit to closure directions and prosecution." },
        { title: "Bank and investor due diligence", desc: "Lenders and acquirers routinely require a valid, current CTO as part of environmental due diligence." },
        { title: "Defined renewal cycle", desc: "Correct categorisation sets a predictable renewal calendar rather than a reactive scramble near expiry." },
        { title: "Reduced enforcement risk", desc: "Proactive compliance reduces exposure to State Board inspections resulting in show-cause notices or unit closure." }
      ],
      documentsRequired: [
        "Project report describing manufacturing process, raw materials and expected effluent/emission",
        "Site layout plan and land ownership/lease documents",
        "Effluent treatment plant (ETP) or air pollution control equipment design details",
        "Water consumption and wastewater generation estimates",
        "Environmental Clearance certificate, where the project also requires one under the EIA notification",
        "Udyam/company registration proof"
      ],
      processSteps: [
        { title: "Category classification", desc: "Unit assessed as Red, Orange, Green or White based on pollution index and scale." },
        { title: "Consent to Establish", desc: "CTE application filed with project details before construction; approval required before civil work begins." },
        { title: "Pollution control infrastructure", desc: "ETP/air pollution control systems installed per the CTE conditions." },
        { title: "Consent to Operate", desc: "CTO application filed with commissioning details; Board may inspect before granting consent." },
        { title: "Renewal tracking", desc: "Consent validity monitored against the category-specific renewal cycle." }
      ],
      eligibility: [
        "Any unit engaged in a manufacturing, processing or specified service activity likely to generate effluent, emissions or hazardous waste",
        "Applies before both construction (CTE) and commissioning (CTO)",
        "Category and scrutiny depth vary by the State Pollution Control Board's classification of the specific industry"
      ],
      faqs: [
        { q: "What's the difference between CTE and CTO?", a: "CTE is granted before you start construction and confirms the Board has no objection to the proposed site and process; CTO is granted before you start operations and confirms your actual pollution control infrastructure meets the prescribed standards." },
        { q: "How often does a CTO need renewal?", a: "It depends on category — Red category units typically renew annually or every few years, while lower-risk Green and White category units may get longer validity, occasionally consent for the plant's operating lifetime." },
        { q: "Do service businesses (like IT offices) need this consent?", a: "Most white-collar service businesses fall under 'White category', which in many states is exempt from obtaining consent, but this must be confirmed against the specific state's classification list rather than assumed." },
        { q: "What happens if I operate without a valid CTO?", a: "The Board can issue closure directions, disconnect power/water supply through the relevant authorities, and initiate prosecution under the Water Act and Air Act, independent of any actual pollution incident." }
      ],
      relatedSlugs: ["epr-registration-plastic-waste", "fssai-license-registration"]
    },

    // --------------------------------------------------------------- 18
    {
      slug: "epr-registration-plastic-waste",
      title: "EPR Registration (Plastic Waste)",
      category: "licensing",
      group: "Extended Producer Responsibility (EPR)",
      shortDesc: "Extended Producer Responsibility registration on the CPCB portal for producers, importers and brand owners.",
      heroHeadline: "EPR Registration for Plastic Waste",
      heroSubline: "Register as a Producer, Importer or Brand Owner under the Plastic Waste Management Rules, and meet your annual recycling and collection targets.",
      priceFrom: 14999,
      turnaround: "30-60 working days",
      authority: "Central Pollution Control Board (CPCB)",
      appliesTo: [
        "A brand owner selling products in plastic packaging",
        "An importer of packaged goods",
        "A manufacturer of plastic packaging",
        "A producer that has missed its EPR targets and faces environmental compensation"
      ],
      overview:
        "Under the Plastic Waste Management Rules, 2016 (as amended in 2022), any business that manufactures plastic packaging, imports packaged goods, or sells products under its own brand using plastic packaging qualifies as a Producer, Importer or Brand Owner (PIBO) and must register on the CPCB's EPR portal before placing plastic packaging in the market.\n\nRegistration is only the starting point — PIBOs must then meet annual targets for collection, recycling, reuse and end-of-life disposal of the plastic packaging category they use (rigid, flexible, multi-layered, or compostable), and file returns against those targets. Shortfalls can be met by purchasing EPR certificates from registered plastic waste processors, but a genuine compliance gap attracts an environmental compensation penalty.\n\nWe assess your packaging categories and volumes, file the CPCB registration, and set up the annual target and returns calendar so the obligation doesn't surface as a surprise a year into operation.",
      benefits: [
        { title: "Legal precondition to sell packaged goods", desc: "PIBOs cannot legally place plastic-packaged products in the market without valid EPR registration." },
        { title: "Structured target planning", desc: "Annual collection/recycling targets mapped against your packaging volumes well ahead of the filing deadline." },
        { title: "Avoids environmental compensation penalty", desc: "Proactive target planning avoids the compounding financial penalty levied for shortfalls under the Rules." },
        { title: "Traceable compliance record", desc: "A documented EPR trail is increasingly a due-diligence requirement for FMCG and retail vendor empanelment." }
      ],
      documentsRequired: [
        "Business registration and GST certificate",
        "Details of plastic packaging categories used (rigid/flexible/multi-layered/compostable)",
        "Annual production or import volume data for packaged products",
        "Brand details and product SKUs using plastic packaging",
        "Authorisation letter for the filing representative"
      ],
      processSteps: [
        { title: "PIBO classification", desc: "Confirm whether the business qualifies as Producer, Importer, or Brand Owner, or a combination." },
        { title: "Packaging category assessment", desc: "Plastic packaging volumes mapped by category to determine target obligations." },
        { title: "CPCB portal registration", desc: "EPR registration filed on the Centralised EPR portal with supporting documentation." },
        { title: "Target & returns calendar", desc: "Annual recycling/collection targets calculated and a filing calendar set up for periodic returns." }
      ],
      eligibility: [
        "Applies to manufacturers of plastic packaging, importers of packaged goods, and brand owners selling under their own label",
        "Applicability is not turnover-based — it's based on whether plastic packaging is placed in the market",
        "Both online and offline sellers using plastic packaging fall within scope"
      ],
      faqs: [
        { q: "What if I use a third-party manufacturer for packaging?", a: "The EPR obligation attaches to the brand owner placing the product in the market, not merely the entity that physically manufactures the packaging — outsourcing production doesn't remove the compliance requirement." },
        { q: "Can I buy my way out of the recycling target?", a: "You can meet a portion of your target by purchasing EPR certificates from CPCB-registered recyclers, but the Rules require a genuine minimum level of actual compliance activity, not certificate purchase alone." },
        { q: "What's the penalty for non-compliance?", a: "An environmental compensation is levied for shortfalls against annual targets, calculated per the CPCB's prescribed formula — the amount scales with both the shortfall quantity and the packaging category's environmental impact." },
        { q: "Does an e-commerce marketplace need separate registration from its sellers?", a: "Yes — marketplaces are themselves classified as a distinct EPR category and register separately from the brand owners who sell through them." }
      ],
      relatedSlugs: ["pollution-control-consent-to-operate", "iec-registration"]
    },

    // --------------------------------------------------------------- 19
    {
      slug: "nbfc-registration-advisory",
      title: "NBFC Registration Advisory (RBI)",
      category: "licensing",
      group: "Financial Services Licensing (RBI)",
      shortDesc: "Certificate of Registration advisory for Non-Banking Financial Companies, filed via the RBI's COSMOS portal.",
      heroHeadline: "NBFC Registration Advisory",
      heroSubline: "End-to-end advisory for a Certificate of Registration from the RBI — net owned fund structuring, fit-and-proper documentation, and COSMOS filing.",
      priceFrom: 149999,
      turnaround: "90-120 working days",
      authority: "Reserve Bank of India",
      appliesTo: [
        "A lending business that will carry on financial activity as its principal business",
        "An investment holding company that may need to register as an NBFC",
        "Fintech founders deciding between NBFC registration and a partnership model",
        "A company whose financial assets and income have crossed the principal-business tests"
      ],
      overview:
        "Registering a Non-Banking Financial Company requires a Certificate of Registration (CoR) from the RBI under Section 45-IA of the RBI Act, 1934, and is the most document- and scrutiny-intensive registration on our list. Most NBFC categories require a minimum Net Owned Fund (NOF) of ₹10 crore, though newer categories like NBFC-Peer to Peer Lending and NBFC-Account Aggregator have a lower ₹2 crore threshold reflecting their asset-light models.\n\nThe application is filed on the RBI's COSMOS portal along with a detailed business plan, three years of projected financials, and 'fit and proper' declarations for every director — the RBI scrutinises each proposed director's financial history, litigation record and professional background before granting registration, and any adverse finding on a single director can stall the entire application.\n\nWe work through this as an advisory engagement: structuring the NOF, preparing the business plan and financial projections to RBI's expected format, and managing the fit-and-proper documentation and any clarification round the RBI raises during scrutiny.",
      benefits: [
        { title: "Structured NOF planning", desc: "Net Owned Fund requirement mapped and structured before filing, rather than discovered as a gap mid-application." },
        { title: "Fit-and-proper readiness", desc: "Director backgrounds screened and documented against RBI's criteria before submission, reducing query rounds." },
        { title: "RBI-format business plan", desc: "Three-year financial projections and business plan prepared to the structure RBI scrutiny expects." },
        { title: "Ongoing regulatory liaison", desc: "We manage clarification requests and hearings through to the CoR grant, not just the initial filing." }
      ],
      documentsRequired: [
        "Certificate of incorporation and MoA/AoA reflecting NBFC-permitted objects",
        "Audited financials evidencing the Net Owned Fund requirement",
        "Detailed business plan with three-year financial projections",
        "Fit-and-proper declarations, credit reports (CIBIL) and identity documents for all directors",
        "Bankers' report confirming no adverse remarks on promoter accounts",
        "Shareholding pattern and source-of-funds documentation for promoters"
      ],
      processSteps: [
        { title: "Structuring & NOF assessment", desc: "Capital structure reviewed against the applicable category's minimum Net Owned Fund requirement." },
        { title: "Business plan preparation", desc: "Three-year projections and operational plan drafted to RBI's expected format." },
        { title: "Fit-and-proper documentation", desc: "Director background checks and declarations compiled for every proposed director." },
        { title: "COSMOS portal filing", desc: "Application filed online with all supporting documents." },
        { title: "RBI scrutiny & CoR grant", desc: "RBI reviews the application, raises clarifications where needed, and issues the Certificate of Registration." }
      ],
      eligibility: [
        "Company must be incorporated under the Companies Act with NBFC-permitted business objects in its MoA",
        "Minimum Net Owned Fund of ₹10 crore for most categories (₹2 crore for NBFC-P2P and NBFC-AA)",
        "All directors must clear RBI's fit-and-proper criteria"
      ],
      faqs: [
        { q: "How long does RBI take to grant a Certificate of Registration?", a: "Typically 90-120 working days for a complete, well-documented application, though the RBI's clarification rounds can extend this if the initial filing has gaps." },
        { q: "Can a newly incorporated company apply immediately?", a: "Yes, there's no minimum operating history requirement, but the company must demonstrate the required Net Owned Fund is genuinely in place, not merely committed." },
        { q: "What's the difference between an NBFC and a bank?", a: "An NBFC cannot accept demand deposits (savings/current accounts) or issue cheques drawn on itself, and is not part of the payment and settlement system in the way a bank is — its lending and investment activities are otherwise similar." },
        { q: "Is FDI permitted in an NBFC?", a: "Yes, up to 100% FDI is permitted under the automatic route for most NBFC activities, subject to minimum capitalisation norms and RBI's registration process." }
      ],
      relatedSlugs: ["sebi-investment-adviser-registration", "pvt-ltd-company-registration"]
    },

    // --------------------------------------------------------------- 20
    {
      slug: "sebi-investment-adviser-registration",
      title: "SEBI Investment Adviser Registration",
      category: "licensing",
      group: "Capital Markets & Insurance Licensing",
      shortDesc: "Registration under the SEBI (Investment Advisers) Regulations, 2013, with NISM certification and net worth compliance.",
      heroHeadline: "SEBI Investment Adviser Registration",
      heroSubline: "Register as an Investment Adviser under SEBI's 2013 Regulations — NISM certification, net worth compliance, and separation from distribution activity.",
      priceFrom: 49999,
      turnaround: "60-90 working days",
      authority: "Securities and Exchange Board of India (SEBI)",
      appliesTo: [
        "An individual or firm giving paid investment advice",
        "A wealth platform that recommends specific securities",
        "A financial planner moving from commission to fee-based advice",
        "An entity separating its distribution and advisory businesses"
      ],
      overview:
        "Anyone providing investment advice for consideration — recommending securities, asset allocation or financial planning as a business — falls within SEBI's definition of an Investment Adviser and needs registration under the SEBI (Investment Advisers) Regulations, 2013, unless a specific exemption applies (such as advice incidental to a stockbroker's core activity).\n\nIndividual applicants need a minimum net worth of ₹5 lakh; non-individual applicants (firms, LLPs, companies) need ₹50 lakh. Every person providing advice must clear the NISM-Series-X-A and X-B certifications, and the regulations require structural separation between advisory and distribution activity — you cannot both advise on a product and earn distribution commission on the same client relationship.\n\nWe assess whether your existing business model triggers the registration requirement at all, structure the net worth and separation requirements correctly, and manage the NISM certification tracking and SEBI application through to grant.",
      benefits: [
        { title: "Legal standing to advise for a fee", desc: "Registration is the precondition to charge advisory fees for securities-related recommendations, as distinct from execution-only distribution." },
        { title: "Client trust and credibility", desc: "A SEBI-registered adviser is listed on SEBI's public registry, which institutional and HNI clients routinely verify before engaging." },
        { title: "Structural clarity", desc: "Clear separation of advisory and distribution activity reduces conflict-of-interest exposure and associated regulatory risk." },
        { title: "Access to advisory-only revenue models", desc: "Enables a fee-only advisory practice, an increasingly preferred model among informed retail and institutional clients." }
      ],
      documentsRequired: [
        "NISM-Series-X-A and X-B certification for all persons providing advice",
        "Net worth certificate from a chartered accountant (₹5 lakh individual / ₹50 lakh non-individual)",
        "Educational qualification proof meeting SEBI's prescribed minimum (typically a professional or postgraduate qualification)",
        "Business plan describing the advisory model and client segments served",
        "Proof of infrastructure — office, records maintenance and client-data security systems",
        "PAN and identity proof of the applicant/key management personnel"
      ],
      processSteps: [
        { title: "Applicability assessment", desc: "Confirm the business model genuinely requires IA registration, or qualifies for an exemption." },
        { title: "NISM certification", desc: "Advisers complete the NISM-Series-X-A and X-B examinations." },
        { title: "Net worth & structural compliance", desc: "Net worth certified and advisory/distribution activities structurally separated per SEBI's requirements." },
        { title: "SEBI application", desc: "Form A filed via the SEBI intermediary portal with all supporting documents." },
        { title: "Registration grant", desc: "SEBI reviews the application and, on satisfaction, grants the Certificate of Registration." }
      ],
      eligibility: [
        "Individuals and firms providing investment advice for consideration, not otherwise exempt",
        "Minimum net worth of ₹5 lakh (individual) or ₹50 lakh (non-individual)",
        "NISM-Series-X-A and X-B certification mandatory for all persons engaged in advisory activity"
      ],
      faqs: [
        { q: "Do I need SEBI registration to run a finance content or education channel?", a: "Generic financial education content is not advice, but recommending specific securities or portfolios — even implicitly, as part of a paid course or community — can bring you within SEBI's IA definition; this needs a case-by-case assessment." },
        { q: "Can a stockbroker also be an investment adviser?", a: "Only through a clearly separated, distinctly branded advisory arm — SEBI's regulations require structural separation to prevent the conflict of earning both advisory fees and distribution commission on the same client." },
        { q: "What is the renewal cycle for IA registration?", a: "Registration must be renewed periodically as prescribed by SEBI, along with continuing compliance such as annual audits and client-level suitability documentation." },
        { q: "Is there a difference between an Investment Adviser and a Research Analyst?", a: "Yes — a Research Analyst publishes research and recommendations to a broad audience, while an Investment Adviser gives personalised advice to a specific client; the two require separate SEBI registrations with different regulations." }
      ],
      relatedSlugs: ["nbfc-registration-advisory", "pvt-ltd-company-registration"]
    },

    // ---------------------------------------------------------------- 21–40
    // Added in Phase 1 of page generation. No priceFrom: pricing is not shown.
    {
      slug: "tds-return-filing",
      title: "TDS Return Filing",
      category: "gst-tax",
      group: "Income Tax Filing & Certificates",
      shortDesc: "Quarterly TDS statements for salary, resident and non-resident payments, with Form 16 and 16A issued from TRACES.",
      turnaround: "Quarterly, before each due date",
      authority: "Income Tax Department — TDS CPC (TRACES)",
      overview: "Every deductor files a quarterly statement of the tax it has deducted at source: Form 24Q for salaries, Form 26Q for other payments to residents, and Form 27Q for payments to non-residents. The statement links each deduction to the payee's PAN, which is what lets the payee see the credit in Form 26AS and claim it against their own tax.\n\nThe due dates follow the quarter — 31 July, 31 October and 31 January for the first three quarters, and 31 May for the last. A statement filed late attracts a late fee for every day of delay, and a statement filed with wrong PANs or challan details produces short-deduction and short-payment demands from TRACES that then have to be corrected one by one.\n\nOnce a quarter's statement is processed, we download and issue Form 16 to employees and Form 16A to other payees from TRACES, which is the only version of those certificates the department recognises.",
      appliesTo: [
        "A company or LLP paying salaries above the taxable limit",
        "A business making contractor, rent, professional-fee or commission payments that attract TDS",
        "Any business paying a non-resident — royalty, fees for technical services or interest",
        "A deductor who has received a TRACES default notice for an earlier quarter"
      ],
      documentsRequired: [
        "TAN of the deductor",
        "Challan details (CIN) for every TDS deposit made in the quarter",
        "Payee-wise list of payments with PAN, amount, date and section",
        "Salary register for Form 24Q, including exemptions and deductions declared by employees",
        "Lower or nil deduction certificates held by any payee",
        "Form 15CA/15CB references for payments to non-residents"
      ],
      processSteps: [
        {
          title: "Challans matched",
          desc: "Every deposit is matched to its deductions, because an unmatched challan is the most common cause of a short-payment demand."
        },
        {
          title: "PANs validated",
          desc: "Payee PANs are validated before the statement is prepared — an invalid PAN pushes the deduction to the higher rate."
        },
        {
          title: "Statement prepared and filed",
          desc: "The statement is generated in the department's utility, validated, and filed with the deductor's signature."
        },
        {
          title: "Certificates issued",
          desc: "After processing, Form 16 and 16A are downloaded from TRACES and issued to payees."
        }
      ],
      eligibility: [],
      faqs: [
        {
          q: "We deducted TDS but forgot to file the statement. What now?",
          a: "File the overdue statement immediately. The late fee runs per day until filing, and interest on any late deposit is calculated separately. We file the oldest quarter first and then clear any demand TRACES raises."
        },
        {
          q: "A payee says their TDS is not showing in Form 26AS.",
          a: "That usually means a wrong PAN or a challan mismatch in our statement. It is fixed by filing a correction statement for that quarter, after which the credit appears for the payee."
        },
        {
          q: "Is a nil statement required in a quarter with no deductions?",
          a: "There is no TDS statement to file for a quarter with no deductions, but it is worth recording a declaration on the portal so the TAN does not show as a non-filer. [[V]]"
        }
      ],
      relatedSlugs: [
        "income-tax-return-filing",
        "tcs-return-filing",
        "form-15ca15cb-filing"
      ]
    },

    {
      slug: "gstr-9-annual-return-filing",
      title: "GSTR-9 Annual Return Filing",
      category: "gst-tax",
      group: "GST Registration & Returns",
      shortDesc: "The annual GST return that reconciles a year of GSTR-1 and GSTR-3B filings with the books.",
      turnaround: "Annually, by 31 December following the financial year",
      authority: "GSTN, under the Central Board of Indirect Taxes and Customs",
      overview: "GSTR-9 is the annual return in which a regular GST taxpayer restates the whole financial year — outward supplies, tax paid, input tax credit claimed and reversed — in one place. Most of it is pre-filled from the year's GSTR-1 and GSTR-3B, which is exactly why it matters: it is where differences between those returns and the books become visible.\n\nThe due date is 31 December following the end of the financial year. Taxpayers with aggregate turnover above the notified limit must also file GSTR-9C, a reconciliation statement between the audited financial statements and GSTR-9.\n\nThe work is in the reconciliation, not the form. Tax short-paid during the year is paid with the annual return, and credit that was missed cannot be claimed through GSTR-9 — so the sooner the differences are found, the more options there are. [[V]]",
      appliesTo: [
        "A regular GST taxpayer above the turnover threshold for mandatory annual returns",
        "A business whose books and GSTR-3B do not agree on output tax or ITC",
        "A taxpayer that also needs the GSTR-9C reconciliation statement",
        "A business that changed accountants mid-year and needs the year tied out"
      ],
      documentsRequired: [
        "Monthly or quarterly GSTR-1 and GSTR-3B filed for the year",
        "Sales and purchase registers from the books",
        "GSTR-2B statements for the year",
        "Details of ITC reversals and reclaims",
        "Audited financial statements, where GSTR-9C applies",
        "HSN-wise summary of outward supplies"
      ],
      processSteps: [
        {
          title: "Year reconciled",
          desc: "Books, GSTR-1, GSTR-3B and GSTR-2B are reconciled line by line for the year."
        },
        {
          title: "Differences resolved",
          desc: "Short-paid tax is computed for payment; excess or ineligible credit is identified for reversal."
        },
        {
          title: "Return prepared",
          desc: "GSTR-9 is prepared from the reconciled figures, with GSTR-9C alongside where required."
        },
        {
          title: "Filed and paid",
          desc: "Any additional liability is paid through DRC-03 and the return filed before the due date."
        }
      ],
      eligibility: [
        "Regular taxpayers registered under GST for any part of the financial year",
        "Not applicable to composition taxpayers, input service distributors, non-resident taxable persons or TDS/TCS deductors, who file their own returns"
      ],
      faqs: [
        {
          q: "Is GSTR-9 optional for small businesses?",
          a: "For taxpayers below the turnover limit notified for each year, filing GSTR-9 has been made optional. The limit is notified annually, so we check it for the year in question before advising you to skip it."
        },
        {
          q: "Can we claim ITC we missed during the year in GSTR-9?",
          a: "No. The annual return cannot be used to claim credit that was not claimed in GSTR-3B within the time limit. It can only record what was claimed, and report what needs reversal."
        },
        {
          q: "Can GSTR-9 be revised after filing?",
          a: "No. There is no revision facility, which is why we finish the reconciliation before filing rather than after."
        },
        {
          q: "What is GSTR-9C?",
          a: "A reconciliation statement between the audited annual accounts and GSTR-9, required above a notified turnover. It is now self-certified by the taxpayer."
        }
      ],
      relatedSlugs: [
        "gst-return-filing",
        "gstr-9c-reconciliation-statement",
        "input-tax-credit-reconciliation"
      ]
    },

    {
      slug: "llp-annual-filing-form-8-and-form-11",
      title: "LLP Annual Filing (Form 8 & Form 11)",
      category: "gst-tax",
      group: "ROC & Corporate Compliance",
      shortDesc: "Form 11 annual return and Form 8 statement of account and solvency for every LLP, every year — whether or not it traded.",
      turnaround: "Form 11 by 30 May; Form 8 by 30 October",
      authority: "Registrar of Companies, Ministry of Corporate Affairs",
      overview: "LLPs file two annual forms with the Registrar every year, whether they traded or not. Form 11 is the annual return — partners, contributions and changes during the year — due within 60 days of the close of the financial year. Form 8 is the statement of account and solvency, due within 30 days after six months from the year end, and signed by the designated partners declaring the LLP's solvency.\n\nThe late fee on both forms runs per day and has no upper limit, so an LLP left dormant for a few years can accumulate a bill larger than anything it ever earned. That is the most common reason an LLP comes to us — not to start filing, but to stop the meter.\n\nAccounts must be audited where turnover or contribution crosses the thresholds in the LLP Rules; below those, the designated partners can certify them.",
      appliesTo: [
        "Every LLP registered with the MCA, including dormant ones",
        "An LLP with overdue annual filings and growing late fees",
        "An LLP whose turnover has crossed the audit threshold for the first time",
        "Partners planning to close the LLP, who must bring filings current first"
      ],
      documentsRequired: [
        "Financial statements for the year — balance sheet and income and expenditure account",
        "Auditor's report, where the LLP is required to be audited",
        "Details of partners' contributions and any changes during the year",
        "DSCs of the designated partners",
        "Details of any charges or secured borrowings"
      ],
      processSteps: [
        {
          title: "Accounts finalised",
          desc: "Books are closed and, where required, audited before Form 8 is prepared."
        },
        {
          title: "Form 11 filed",
          desc: "The annual return is filed with the partner and contribution details as on the year end."
        },
        {
          title: "Form 8 filed",
          desc: "The statement of account and solvency is signed by the designated partners and filed."
        }
      ],
      eligibility: [],
      faqs: [
        {
          q: "Our LLP did no business this year. Do we still file?",
          a: "Yes. Both forms are due regardless of activity. A nil-activity year is usually quick to file, and much cheaper than the late fee that accrues if it is skipped."
        },
        {
          q: "When does an LLP need an audit?",
          a: "When turnover or partners' contribution crosses the limits set in the LLP Rules. Below those limits, the accounts can be certified by the designated partners."
        },
        {
          q: "We have not filed for three years. Can we close the LLP instead?",
          a: "The overdue returns generally have to be filed before a strike-off application is accepted, so closing does not avoid them. It does stop new ones accruing once the LLP is struck off. [[V]]"
        }
      ],
      relatedSlugs: [
        "llp-registration",
        "llp-strike-off",
        "dir-3-kyc-filing"
      ]
    },

    {
      slug: "dir-3-kyc-filing",
      title: "DIR-3 KYC Filing",
      category: "gst-tax",
      group: "ROC & Corporate Compliance",
      shortDesc: "KYC for every holder of a Director Identification Number, so the DIN stays active.",
      turnaround: "Annually, by 30 September",
      authority: "Ministry of Corporate Affairs",
      overview: "Anyone who holds a Director Identification Number has to complete KYC with the MCA, whether or not they are currently a director of any company. The KYC verifies the DIN holder's personal mobile number and email through OTP, and confirms identity and address details against PAN and Aadhaar. [[V]]\n\nIf the KYC is not filed by the due date, the DIN is marked deactivated. A deactivated DIN cannot sign any MCA filing, which stops board-level filings for every company that director is on until the KYC is completed with the late fee. [[V]]",
      appliesTo: [
        "Every individual allotted a DIN, including directors of dormant companies",
        "Designated partners of LLPs who hold a DIN",
        "A director whose DIN shows as deactivated on the MCA portal",
        "A director who has changed mobile number, email or address"
      ],
      documentsRequired: [
        "PAN",
        "Aadhaar, linked to the mobile number for OTP",
        "Personal mobile number and email for OTP verification",
        "Passport, for foreign nationals and where held",
        "DSC of the director"
      ],
      processSteps: [
        {
          title: "Status checked",
          desc: "We confirm whether the DIN needs the full e-form or the simpler web-based KYC."
        },
        {
          title: "Details verified",
          desc: "Personal contact details are verified by OTP and identity details matched to PAN."
        },
        {
          title: "Filed and confirmed",
          desc: "The KYC is filed and the DIN status confirmed as active on the MCA master data."
        }
      ],
      eligibility: [],
      faqs: [
        {
          q: "My DIN is deactivated. Can I still sign the company's annual filings?",
          a: "No. The KYC has to be completed, with the late fee, before the DIN can sign anything. We file the KYC first and then the pending company forms."
        },
        {
          q: "Do I file this if I resigned from all my directorships?",
          a: "Yes, as long as you hold a DIN. The obligation attaches to the DIN, not to a current directorship. [[V]]"
        },
        {
          q: "Can someone else's phone number be used for the OTP?",
          a: "No. The mobile number and email must be personal to the DIN holder; the same contact details cannot be used for multiple DINs."
        }
      ],
      relatedSlugs: [
        "roc-annual-compliance",
        "director-identification-number-din",
        "addition-or-removal-of-director"
      ]
    },

    {
      slug: "income-tax-notice-reply",
      title: "Income Tax Notice Reply",
      category: "gst-tax",
      group: "Income Tax Filing & Certificates",
      shortDesc: "Reading the notice correctly, then replying on the e-filing portal with the records that close it.",
      turnaround: "Within the response window stated on the notice",
      authority: "Income Tax Department",
      overview: "An income tax notice is not one thing. An intimation after processing, a notice for a defective return, a request for documents, a scrutiny notice and a reassessment notice each have different consequences and different response windows — the first step is always to identify which one you have and what it actually asks for.\n\nReplies are filed through the e-Proceedings facility on the income tax e-filing portal, and every claim in the reply has to be backed by a document uploaded with it. A reply that argues without evidence, or answers a question the officer did not ask, tends to produce a second notice.\n\nWhere a notice proposes an addition or a demand we do not agree with, we say so in writing with the basis, so the position is on record if it has to go to appeal.",
      appliesTo: [
        "An individual whose processed return shows a demand they do not recognise",
        "A company or firm selected for scrutiny assessment",
        "A taxpayer whose return was marked defective",
        "Anyone who has received a notice relating to income of an earlier year"
      ],
      documentsRequired: [
        "The notice itself, with its DIN reference",
        "The return and computation for the year in question",
        "Form 26AS, AIS and TIS for the year",
        "Bank statements and books of account relevant to the query",
        "Supporting evidence for each item questioned — invoices, agreements, investment proofs"
      ],
      processSteps: [
        {
          title: "Notice read and classified",
          desc: "We identify the section, what is being asked, and the deadline."
        },
        {
          title: "Position and evidence",
          desc: "The facts are checked against AIS and the books, and supporting documents assembled."
        },
        {
          title: "Reply filed",
          desc: "A written reply with evidence is filed on the portal, and the acknowledgement kept."
        },
        {
          title: "Follow-up",
          desc: "Further queries, hearings or rectification requests are handled until the matter closes."
        }
      ],
      eligibility: [],
      faqs: [
        {
          q: "What happens if we miss the deadline on a notice?",
          a: "The officer can proceed on the information available, which usually means the proposed addition or demand stands. If the deadline is close, we ask for an adjournment on the portal while the reply is prepared."
        },
        {
          q: "Is every notice a sign of scrutiny?",
          a: "No. Many are automated intimations or requests to fix a defect in the return. Reading the section the notice is issued under tells you how serious it is."
        },
        {
          q: "Can you represent us at a hearing?",
          a: "Yes. Most proceedings are now faceless and conducted in writing; where a personal hearing is available and useful, we can request and attend it on your behalf."
        },
        {
          q: "We disagree with the final order. What now?",
          a: "An appeal can be filed with the Commissioner (Appeals) within the time allowed. The reply filed during assessment becomes the foundation of that appeal."
        }
      ],
      relatedSlugs: [
        "income-tax-return-filing",
        "income-tax-appeal-filing-cit-a",
        "form-26as-ais-reconciliation"
      ]
    },

    {
      slug: "partnership-firm-registration",
      title: "Partnership Firm Registration",
      category: "company-registration",
      group: "Start a Business in India",
      shortDesc: "A stamped partnership deed, registered with the Registrar of Firms in the state where the firm operates.",
      turnaround: "2-4 weeks, varying by state",
      authority: "Registrar of Firms, State Government",
      overview: "Partnership firms come into existence when the partners sign a partnership deed; registration with the Registrar of Firms is a separate step that each state runs under the Indian Partnership Act, 1932. Registration is not compulsory, but an unregistered firm cannot sue a third party to enforce a contract, and a partner of an unregistered firm cannot sue the firm or the other partners for rights under the deed.\n\nThe deed carries most of the weight: capital contributions, profit sharing, interest and salary to partners, admission and retirement, and what happens on dissolution. It must be stamped under the state's Stamp Act before it is filed, and the registration process — online in some states, at the Registrar's office in others — varies accordingly.\n\nFor businesses expecting outside investment or wanting limited liability, an LLP or a private limited company is usually the better structure. We say so before drafting a deed, not after.",
      appliesTo: [
        "Two or more people starting a trading or professional business with shared ownership",
        "A family business that wants its partnership terms on record",
        "A firm that needs a registered deed to open a bank account or bid for contracts",
        "An existing unregistered firm that needs to enforce a contract in court"
      ],
      documentsRequired: [
        "Partnership deed, stamped as required by the state",
        "PAN and Aadhaar of every partner",
        "Address proof of every partner",
        "Proof of the principal place of business — ownership document or rent agreement with NOC",
        "Application in the state's prescribed form, signed by all partners",
        "Affidavit or declaration as required by the state"
      ],
      processSteps: [
        {
          title: "Deed drafted",
          desc: "The deed is drafted around the partners' actual commercial arrangement and stamped."
        },
        {
          title: "Application prepared",
          desc: "The state's registration form is completed and signed by all partners."
        },
        {
          title: "Filed with the Registrar of Firms",
          desc: "The application and deed are filed online or at the Registrar's office, depending on the state."
        },
        {
          title: "Registration and PAN",
          desc: "On registration, the firm's PAN and bank account are set up."
        }
      ],
      eligibility: [
        "At least two partners, each competent to contract",
        "A lawful business carried on with a view to profit",
        "Partners agree to share profits in the proportion set by the deed"
      ],
      faqs: [
        {
          q: "Is registering a partnership firm compulsory?",
          a: "No, but an unregistered firm loses the right to sue third parties to enforce its contracts. For most firms that is reason enough to register."
        },
        {
          q: "Do partners have limited liability?",
          a: "No. Partners are jointly and severally liable for the firm's debts, including from their personal assets. An LLP gives similar flexibility with limited liability."
        },
        {
          q: "Can a partnership firm be converted into an LLP later?",
          a: "Yes. A registered partnership firm can convert into an LLP under the LLP Act, carrying its assets and liabilities across."
        }
      ],
      relatedSlugs: [
        "llp-registration",
        "partnership-to-llp-conversion",
        "gst-registration"
      ]
    },

    {
      slug: "sole-proprietorship-registration",
      title: "Sole Proprietorship Registration",
      category: "company-registration",
      group: "Start a Business in India",
      shortDesc: "A proprietorship is recognised through registrations in the owner's name — GST, Udyam and the local shop licence.",
      turnaround: "3-7 working days for the first registrations",
      authority: "No single registry — GST, Udyam and local authorities",
      overview: "There is no Companies Act or LLP Act for a sole proprietorship. The business and the owner are the same person in law, so a proprietorship is established by taking the registrations that give it a name and an identity — typically Udyam registration, a GST registration where the business needs one, and a shop and establishment registration under the state's law.\n\nThose registrations are also what a bank asks for before it will open a current account in the business name, which is often the real reason a proprietor needs this done.\n\nThe trade-off is liability. The proprietor is personally liable for every debt of the business, and the business cannot take on partners or investors without being restructured.",
      appliesTo: [
        "A freelancer or consultant who needs a current account in a business name",
        "A small trader or shop owner starting out alone",
        "A home-based business that has started invoicing clients",
        "A proprietor who has crossed the GST threshold"
      ],
      documentsRequired: [
        "PAN and Aadhaar of the proprietor",
        "Photograph of the proprietor",
        "Proof of business premises — rent agreement, NOC or ownership document",
        "A recent utility bill for the business premises",
        "Bank statement or cancelled cheque"
      ],
      processSteps: [
        {
          title: "Registrations chosen",
          desc: "We work out which registrations the business actually needs, rather than taking all of them by default."
        },
        {
          title: "Udyam and local registration",
          desc: "Udyam and the shop and establishment registration are filed in the proprietor's name."
        },
        {
          title: "GST where needed",
          desc: "GST is registered if turnover, inter-state supply or online selling makes it necessary."
        },
        {
          title: "Bank account",
          desc: "The registration certificates are used to open a current account in the business name."
        }
      ],
      eligibility: [],
      faqs: [
        {
          q: "Is a proprietorship a separate legal entity?",
          a: "No. The business is the proprietor. Income is taxed in the proprietor's personal return, and the proprietor is personally liable for the business's debts."
        },
        {
          q: "Do I need GST registration?",
          a: "Only if turnover crosses the threshold, or the business makes inter-state supplies or sells through e-commerce operators. We check before registering, because a GST registration brings monthly filings with it."
        },
        {
          q: "Can a proprietorship be converted into a company later?",
          a: "Yes. The business can be taken over by a new private limited company, with the proprietor as a shareholder and director."
        }
      ],
      relatedSlugs: [
        "udyam-msme-registration",
        "gst-registration",
        "shop-and-establishment-registration"
      ]
    },

    {
      slug: "section-8-company-registration",
      title: "Section 8 Company Registration",
      category: "company-registration",
      group: "Start a Business in India",
      shortDesc: "A not-for-profit company licensed under Section 8 of the Companies Act, incorporated through SPICe+.",
      turnaround: "15-25 working days",
      authority: "Registrar of Companies, Ministry of Corporate Affairs",
      overview: "Section 8 companies are formed to promote commerce, art, science, sports, education, research, social welfare, religion, charity, environmental protection or similar objects, and each one applies its income only to those objects and pays no dividend to its members. It is incorporated through the same SPICe+ process as any other company, with the Section 8 licence applied for as part of the incorporation.\n\nAgainst a trust or a society, the attraction is structure: a board, MCA filings, a recognised governance framework, and no requirement of a minimum capital. Donors and CSR funders often prefer it for exactly that reason.\n\nThe licence comes with conditions that bind the company for its life — on how income is used, on altering the memorandum, and on what happens to the assets if it is wound up. We draft the objects clause with those conditions in mind, because it is the clause the Registrar reads most closely.",
      appliesTo: [
        "An NGO planning to receive CSR funding from companies",
        "Founders of an education, research or healthcare initiative that will not distribute profits",
        "A trust or society moving to a company structure for governance reasons",
        "An industry association or chamber forming a formal body"
      ],
      documentsRequired: [
        "PAN, Aadhaar and address proof of each director and subscriber",
        "Photographs of each director",
        "Registered office proof and a recent utility bill",
        "Draft memorandum with the objects clause, and articles",
        "Estimated income and expenditure for the next three years",
        "Declarations by the promoters and directors as prescribed"
      ],
      processSteps: [
        {
          title: "Objects clause drafted",
          desc: "The objects are drafted to qualify under Section 8 and to cover the work actually planned."
        },
        {
          title: "Name reserved",
          desc: "A name is reserved through SPICe+ Part A."
        },
        {
          title: "Incorporation and licence",
          desc: "SPICe+ Part B is filed with the licence application and supporting declarations."
        },
        {
          title: "Certificate and registrations",
          desc: "On approval, the certificate of incorporation, PAN and TAN are issued and the 12A and 80G applications planned."
        }
      ],
      eligibility: [
        "Objects of a charitable or not-for-profit nature as listed in Section 8",
        "Income applied only to promoting the objects",
        "No dividend paid to members",
        "At least two directors for a private Section 8 company"
      ],
      faqs: [
        {
          q: "Is a Section 8 company automatically tax-exempt?",
          a: "No. Income-tax exemption needs separate registration under section 12A, and donors get a deduction only if the company also holds 80G approval."
        },
        {
          q: "Can directors be paid?",
          a: "Directors can be paid for services actually rendered, within the conditions of the licence, but members cannot receive any share of profits."
        },
        {
          q: "Can a Section 8 company receive foreign contributions?",
          a: "Only with registration or prior permission under the Foreign Contribution (Regulation) Act, which is a separate application to the Ministry of Home Affairs."
        }
      ],
      relatedSlugs: [
        "12a-registration",
        "80g-registration",
        "csr-1-filing"
      ]
    },

    {
      slug: "startup-india-dpiit-recognition",
      title: "Startup India DPIIT Recognition",
      category: "company-registration",
      group: "Start a Business in India",
      shortDesc: "Recognition as a startup by DPIIT, the gateway to the Startup India benefits and the 80-IAC tax holiday application.",
      turnaround: "5-15 working days after application",
      authority: "Department for Promotion of Industry and Internal Trade (DPIIT)",
      overview: "DPIIT recognition is the certificate that the Startup India scheme hangs on. It is granted to a private limited company, registered partnership firm or LLP that is within its first ten years from incorporation, has not crossed the turnover limit in any year, and is working on innovation, improvement of products or services, or a scalable model with potential for employment or wealth creation.\n\nThe application is made on the Startup India portal, and the substance is the description of what the business does and why it qualifies — a generic description of an ordinary trading or services business is the usual reason applications are rejected.\n\nRecognition by itself is not the tax holiday. The section 80-IAC exemption needs a separate application to the Inter-Ministerial Board once the entity is recognised.",
      appliesTo: [
        "A newly incorporated technology or product company",
        "A startup planning to apply for the 80-IAC tax exemption",
        "A company bidding for government tenders that relax conditions for startups",
        "Founders applying for IPR fast-tracking and fee rebates on patents and trademarks"
      ],
      documentsRequired: [
        "Certificate of incorporation or registration",
        "PAN of the entity",
        "Description of the business, its innovation and scalability",
        "Website, pitch deck or product material, where available",
        "Details of directors or partners",
        "Any patents, awards or funding received, as supporting evidence"
      ],
      processSteps: [
        {
          title: "Eligibility checked",
          desc: "Entity type, age and turnover are checked against the current notification."
        },
        {
          title: "Description written",
          desc: "The business is described in terms of the innovation the scheme asks about, not marketing language."
        },
        {
          title: "Application on the portal",
          desc: "The application is filed on the Startup India portal with supporting material."
        },
        {
          title: "Recognition certificate",
          desc: "The DPIIT certificate is issued, and next steps for 80-IAC or other benefits are set out."
        }
      ],
      eligibility: [
        "Incorporated as a private limited company, registered partnership firm or LLP",
        "Up to ten years from the date of incorporation",
        "Turnover not above ₹100 crore in any financial year since incorporation",
        "Working towards innovation, improvement or a scalable business model",
        "Not formed by splitting up or reconstructing an existing business"
      ],
      faqs: [
        {
          q: "Does recognition mean we pay no income tax?",
          a: "No. The tax holiday under section 80-IAC requires a separate application to the Inter-Ministerial Board after recognition, and only some recognised startups are approved."
        },
        {
          q: "Can a sole proprietorship apply?",
          a: "No. Only private limited companies, registered partnership firms and LLPs are eligible."
        },
        {
          q: "What are the practical benefits?",
          a: "Self-certification under certain labour and environment laws, fast-tracked patent examination with fee rebates, relaxations in public procurement, and eligibility for some government funding schemes."
        }
      ],
      relatedSlugs: [
        "startup-india-tax-exemption-80-iac-application",
        "pvt-ltd-company-registration",
        "startup-india-seed-fund-scheme-application"
      ]
    },

    {
      slug: "fast-track-exit-strike-off-private-limited",
      title: "Fast Track Exit / Strike Off (Private Limited)",
      category: "company-registration",
      group: "Closure & Winding Up",
      shortDesc: "Voluntary strike-off of an inactive private limited company through STK-2, without a court-supervised winding up.",
      turnaround: "3-6 months including the Registrar's notice period",
      authority: "Registrar of Companies — Centre for Processing Accelerated Corporate Exit (C-PACE)",
      overview: "A private limited company that has stopped doing business — or never started — can apply to have its name struck off the register under section 248 of the Companies Act, 2013, instead of being wound up. The application is made in Form STK-2 and is now processed centrally by the MCA's Centre for Processing Accelerated Corporate Exit. [[V]]\n\nThe route is only open to a company with no assets and no liabilities. The statement of accounts filed with the application, certified by a Chartered Accountant, has to show exactly that, and the directors give an indemnity that they will meet any liability that surfaces later.\n\nThe Registrar publishes a public notice of the proposed strike-off and waits out the objection period before striking the name off. Overdue annual filings generally have to be brought up to date before the application is accepted, so a company that has been left untouched for years is rarely a two-week job. [[V]]",
      appliesTo: [
        "A company incorporated for a project that never began operations",
        "A company that has not carried on business for the past two financial years",
        "Founders who have moved the business to a new entity and want to close the old one",
        "A dormant subsidiary that the group no longer needs"
      ],
      documentsRequired: [
        "Board resolution approving the strike-off application",
        "Special resolution, or consent of members holding at least 75% of the paid-up capital",
        "Statement of accounts showing nil assets and liabilities, certified by a Chartered Accountant, not older than 30 days",
        "Indemnity bond from every director",
        "Affidavit from every director",
        "Bank account closure confirmation",
        "Copies of pending annual filings, prepared for submission"
      ],
      processSteps: [
        {
          title: "Eligibility confirmed",
          desc: "We check inactivity, pending filings, open bank accounts and any litigation before advising this route."
        },
        {
          title: "Accounts closed out",
          desc: "Bank accounts are closed and any remaining balances settled so the statement of accounts can show nil."
        },
        {
          title: "Resolutions and declarations",
          desc: "Board and shareholder resolutions, indemnities and affidavits are prepared and signed."
        },
        {
          title: "STK-2 filed",
          desc: "The application is filed and followed through the public notice period."
        },
        {
          title: "Strike-off notified",
          desc: "The company's name is struck off and the dissolution published in the Official Gazette."
        }
      ],
      eligibility: [
        "No business carried on for the two immediately preceding financial years, or no business commenced within a year of incorporation",
        "No assets and no liabilities on the date of application",
        "No pending litigation, investigation or inspection against the company",
        "Not a Section 8 company and not listed"
      ],
      faqs: [
        {
          q: "Can a company with a small creditor balance use this route?",
          a: "No. The statement of accounts must show nil liabilities. Small balances are settled or written back before the application."
        },
        {
          q: "Do we have to file all the pending annual returns first?",
          a: "Generally yes — the annual filings up to the end of the financial year in which the company ceased business are expected to be complete. We check the filing record before advising on cost. [[V]]"
        },
        {
          q: "Can a struck-off company be revived?",
          a: "A struck-off company can be restored by the National Company Law Tribunal on an application within the time allowed, if there is sufficient cause. It is a contested process, so strike-off should be treated as final."
        }
      ],
      relatedSlugs: [
        "llp-strike-off",
        "voluntary-winding-up-of-company",
        "dormant-company-status-application"
      ]
    },

    {
      slug: "trademark-renewal",
      title: "Trademark Renewal",
      category: "trademark-ip",
      group: "Trademark",
      shortDesc: "Renewal of a registered trademark for a further ten years, filed in TM-R before the registration lapses.",
      turnaround: "1-2 working days to file",
      authority: "Trade Marks Registry, Office of the CGPDTM",
      overview: "Registered trademarks in India are protected for ten years from the date of application, and it can be renewed for successive ten-year periods indefinitely. Renewal is filed in Form TM-R, and can be made in the six months before the registration expires.\n\nIf the deadline passes, the Registry still allows renewal with a surcharge for a further period, and after that a removed mark can be restored only on an application that has to be justified. Every stage after expiry is more expensive and less certain than renewing on time — and a mark that drops off the register can be applied for by someone else.\n\nRenewal is also the moment to check that the registered owner, address and goods or services still match how the mark is actually used. A renewal filed in the name of a predecessor entity is a common problem after restructurings.",
      appliesTo: [
        "A business whose trademark registration falls due in the next six months",
        "A mark that has expired within the grace period",
        "A company that restructured and needs the owner's name recorded correctly",
        "A trademark portfolio holder tracking renewals across classes"
      ],
      documentsRequired: [
        "Trademark registration certificate or application number",
        "Power of attorney in Form TM-48 in our favour",
        "Proof of any change in the proprietor's name or address",
        "Assignment deed, where ownership has changed"
      ],
      processSteps: [
        {
          title: "Register checked",
          desc: "The record on the Registry is checked for owner, address and status before filing."
        },
        {
          title: "TM-R filed",
          desc: "The renewal is filed for the full specification, or for the classes you want to keep."
        },
        {
          title: "Renewal confirmed",
          desc: "The renewal is reflected on the register and the next expiry date diarised."
        }
      ],
      eligibility: [],
      faqs: [
        {
          q: "What if the trademark has already expired?",
          a: "Within the grace period the mark can still be renewed with a surcharge. After it has been removed, restoration is possible only by application, and is not automatic. [[V]]"
        },
        {
          q: "Can we renew only some of the classes?",
          a: "Each class is renewed separately under its own registration. You can choose to renew the ones you still use."
        },
        {
          q: "Can we change the logo at renewal?",
          a: "No. Renewal continues the existing registration. A changed logo is a new mark and needs a new application."
        }
      ],
      relatedSlugs: [
        "trademark-registration",
        "trademark-assignment",
        "trademark-watch-service"
      ]
    },

    {
      slug: "industrial-design-registration",
      title: "Industrial Design Registration",
      category: "trademark-ip",
      group: "Designs",
      shortDesc: "Protection for the shape, pattern or ornamentation of a product under the Designs Act, 2000.",
      turnaround: "6-12 months to registration",
      authority: "Patent Office (Designs Wing), Office of the CGPDTM",
      overview: "A design registration protects how a product looks — its shape, configuration, pattern, ornamentation or composition of lines and colours — as long as that appearance is new and is judged by the eye. It does not protect how the product works, which is the territory of patents, and it does not protect a mark used to identify the seller, which is trademark law.\n\nThe design must not have been published or used anywhere before the filing date, which makes timing the single most important decision. Showing a product at a trade fair or on a website before filing can destroy its novelty.\n\nRegistration gives protection for ten years, extendable once by a further five. Applications are classified under the Locarno classification and examined before registration. [[V]]",
      appliesTo: [
        "A consumer-product company launching a new product shape",
        "A furniture, lighting or packaging designer with a distinctive form",
        "A manufacturer facing copies of its product's appearance",
        "A startup preparing a product for a trade fair or online launch"
      ],
      documentsRequired: [
        "Representations of the design from multiple views",
        "Statement of novelty describing what is new about the appearance",
        "Applicant's name, address and nationality",
        "Power of attorney in our favour",
        "Proof of priority, if claiming an earlier foreign filing"
      ],
      processSteps: [
        {
          title: "Novelty check",
          desc: "We check for prior publication of the design, including your own launches."
        },
        {
          title: "Representations prepared",
          desc: "Drawings or images are prepared to show the design clearly from the necessary views."
        },
        {
          title: "Application filed",
          desc: "The application is filed with the statement of novelty in the correct Locarno class."
        },
        {
          title: "Examination and registration",
          desc: "Objections raised by the examiner are answered until the design is registered and published."
        }
      ],
      eligibility: [
        "The design is new or original and not previously published in India or elsewhere",
        "It applies to an article and is judged solely by the eye",
        "It is not a mode of construction or something purely functional",
        "It is not a trademark or artistic work as such"
      ],
      faqs: [
        {
          q: "We have already launched the product. Can we still register the design?",
          a: "Usually not — prior publication by you destroys novelty just as a third party's would. File before any public display."
        },
        {
          q: "Should we register a design or a patent?",
          a: "A design protects appearance; a patent protects a technical invention. Some products justify both."
        },
        {
          q: "How long does protection last?",
          a: "Ten years from registration, extendable once by five more years on application."
        }
      ],
      relatedSlugs: [
        "design-registration-renewal",
        "trademark-registration",
        "patent-filing-provisional"
      ]
    },

    {
      slug: "trademark-opposition-filing",
      title: "Trademark Opposition Filing",
      category: "trademark-ip",
      group: "Trademark",
      shortDesc: "Opposing a conflicting trademark after it is advertised in the Trade Marks Journal, or defending your own.",
      turnaround: "Notice filed within the four-month window",
      authority: "Trade Marks Registry, Office of the CGPDTM",
      overview: "Once a trademark application is accepted, it is advertised in the Trade Marks Journal, and anyone has four months from the date of advertisement to oppose it. Opposition is filed in Form TM-O and has to set out the grounds — most often that the mark is deceptively similar to an earlier mark, or was applied for in bad faith.\n\nThe applicant then has two months to file a counter-statement. Both sides file evidence by affidavit, and the matter goes to a hearing before the Registrar. Oppositions are won on evidence of prior use and reputation, so the work starts with assembling that record.\n\nThe four-month window does not extend, which is why a trademark watch service matters: you can only oppose what you know has been advertised.",
      appliesTo: [
        "A brand owner who has spotted a similar mark in the Trade Marks Journal",
        "An applicant whose own mark has been opposed and needs a counter-statement",
        "A business with an unregistered but long-used mark facing a later applicant",
        "A company whose trademark watch service has flagged a conflict"
      ],
      documentsRequired: [
        "Details of the opposed application and journal number",
        "Your own registrations or applications relied upon",
        "Evidence of use — invoices, advertisements, sales figures, by year",
        "Power of attorney in our favour"
      ],
      processSteps: [
        {
          title: "Grounds assessed",
          desc: "We assess similarity, prior use and the strength of the opposition before filing."
        },
        {
          title: "Notice filed",
          desc: "The notice of opposition is filed within the four-month window."
        },
        {
          title: "Pleadings and evidence",
          desc: "Counter-statement, evidence in support and evidence in reply are filed in turn."
        },
        {
          title: "Hearing",
          desc: "The matter is argued before the Registrar, who issues a decision."
        }
      ],
      eligibility: [],
      faqs: [
        {
          q: "Can the four-month deadline be extended?",
          a: "No. The opposition period is fixed by statute and cannot be extended."
        },
        {
          q: "Do we need a registered mark to oppose?",
          a: "No. Prior use of an unregistered mark, supported by evidence, can be a ground of opposition."
        },
        {
          q: "What if our application is opposed and we do nothing?",
          a: "If the counter-statement is not filed in time, the application is treated as abandoned."
        },
        {
          q: "Can an opposition be settled?",
          a: "Yes. Many end in a coexistence agreement or a limitation of goods or services, after which the opposition is withdrawn."
        }
      ],
      relatedSlugs: [
        "trademark-watch-service",
        "trademark-hearing-representation",
        "trademark-registration"
      ]
    },

    {
      slug: "iso-9001-quality-management-system-certification",
      title: "ISO 9001 – Quality Management System Certification",
      category: "iso-certifications",
      group: "Quality, Environment & Safety",
      shortDesc: "Building a quality management system that meets ISO 9001 and preparing for audit by an accredited certification body.",
      turnaround: "8-16 weeks to audit readiness, depending on size",
      authority: "Accredited certification body (NABCB or IAF-recognised)",
      overview: "ISO 9001 sets requirements for a quality management system: understanding customer and statutory requirements, controlling how products or services are delivered, measuring results, and correcting what goes wrong. It is the most widely held management-system standard, and for many supplier panels and tenders it is simply a qualifying condition.\n\nCertification is granted by an independent certification body after a two-stage audit — a document and readiness review, followed by an audit of the system in use. The certificate runs for a three-year cycle with surveillance audits in between. Our role is to build and embed the system; we are never the body that certifies it.\n\nThe systems that pass easily are the ones that describe how the business already works. A manual written to sound compliant, which nobody follows, is what auditors are trained to find.",
      appliesTo: [
        "A manufacturer or service provider whose customers require ISO 9001 from suppliers",
        "A business bidding for government or PSU tenders that ask for a certified QMS",
        "A company that wants consistent processes across growing teams or sites",
        "An exporter whose overseas buyers audit supplier quality systems"
      ],
      documentsRequired: [
        "Organisation chart and list of locations",
        "Description of products, services and key processes",
        "Existing procedures, work instructions and records, in whatever form they exist",
        "Customer complaint and corrective action records",
        "List of applicable statutory and regulatory requirements"
      ],
      processSteps: [
        {
          title: "Gap assessment",
          desc: "Current practice is compared with the standard and a gap list agreed."
        },
        {
          title: "System built",
          desc: "Scope, quality policy, objectives, process maps and the necessary documented information are put in place."
        },
        {
          title: "Internal audit and review",
          desc: "Staff are trained, an internal audit is run and management review held."
        },
        {
          title: "Certification audit",
          desc: "The certification body conducts stage 1 and stage 2 audits; findings are closed and the certificate issued."
        }
      ],
      eligibility: [],
      faqs: [
        {
          q: "Does LegalG issue the ISO certificate?",
          a: "No. Certification is issued by an accredited certification body. We prepare you for that audit and can help you choose a body whose accreditation your customers will accept."
        },
        {
          q: "How do we check a certificate is genuine?",
          a: "Look for accreditation by NABCB or another IAF-recognised accreditation body, and check the certificate on the certification body's or IAF's database."
        },
        {
          q: "Is ISO 9001 only for manufacturers?",
          a: "No. It applies to any organisation that delivers products or services, including professional services, software and healthcare."
        }
      ],
      relatedSlugs: [
        "iso-14001-environmental-management-system-certification",
        "iso-45001-occupational-health-and-safety-certification",
        "iso-27001-information-security-management-certification"
      ]
    },

    {
      slug: "iso-27001-information-security-management-certification",
      title: "ISO 27001 – Information Security Management Certification",
      category: "iso-certifications",
      group: "Information Security & Continuity",
      shortDesc: "An information security management system built on risk assessment, ready for ISO/IEC 27001 certification audit.",
      turnaround: "3-6 months to audit readiness",
      authority: "Accredited certification body (NABCB or IAF-recognised)",
      overview: "ISO/IEC 27001 requires an organisation to run information security as a managed system: define what is in scope, assess the risks to that information, choose controls to treat them, and keep checking that those controls work. The current edition organises its reference controls into four themes — organisational, people, physical and technological — and every certified organisation must justify which apply in its Statement of Applicability. [[V]]\n\nFor SaaS companies, IT service providers and anyone holding client data, the certificate often decides enterprise deals, because it answers a large part of a security questionnaire in one document.\n\nCertification does not make an organisation compliant with India's Digital Personal Data Protection Act by itself, but a working ISMS gives most of the evidence that law will expect — access control, incident handling, vendor management and records.",
      appliesTo: [
        "A SaaS or IT services company selling to enterprise or overseas customers",
        "A fintech or healthtech business holding sensitive customer data",
        "A company whose customers send long security questionnaires before signing",
        "An organisation preparing for DPDP Act obligations"
      ],
      documentsRequired: [
        "Description of systems, data and locations to be in scope",
        "Asset inventory — information, applications, infrastructure",
        "Existing security policies and access-control practices",
        "Vendor and cloud-provider list",
        "Incident records, if any"
      ],
      processSteps: [
        {
          title: "Scope and risk assessment",
          desc: "The ISMS scope is set and information risks assessed against a defined method."
        },
        {
          title: "Controls and Statement of Applicability",
          desc: "Controls are selected, implemented and justified in the Statement of Applicability."
        },
        {
          title: "Internal audit and management review",
          desc: "The system is audited internally and reviewed by management."
        },
        {
          title: "Certification audit",
          desc: "An accredited certification body conducts stage 1 and stage 2 audits."
        }
      ],
      eligibility: [],
      faqs: [
        {
          q: "Is ISO 27001 the same as SOC 2?",
          a: "No. ISO 27001 is an international certification of a management system; SOC 2 is an attestation report under American auditing standards. Many companies hold both, because buyers in different markets ask for different ones."
        },
        {
          q: "Can the scope be limited to one product?",
          a: "Yes. The scope can cover a specific product, service or location, provided the boundaries are clearly defined."
        },
        {
          q: "How often is the certificate audited?",
          a: "The certification body conducts surveillance audits during the certificate cycle and a recertification audit at the end of it."
        },
        {
          q: "Does ISO 27001 make us DPDP-compliant?",
          a: "Not on its own. The DPDP Act has specific obligations — notice, consent, data principal rights — that a security standard does not address. The ISMS covers the security safeguards part."
        }
      ],
      relatedSlugs: [
        "dpdp-act-compliance-advisory-digital-personal-data-protection",
        "iso-22301-business-continuity-management-certification",
        "cyber-security-compliance-audit"
      ]
    },

    {
      slug: "fssai-basic-registration",
      title: "FSSAI Basic Registration",
      category: "licensing",
      group: "Trade & Food Business Licenses",
      shortDesc: "Basic FSSAI registration for petty food businesses below the State licence threshold.",
      turnaround: "7-15 working days",
      authority: "FSSAI, Ministry of Health & Family Welfare",
      overview: "Basic registration is the entry tier of FSSAI's three-tier system, meant for petty food business operators — small manufacturers, home-based producers, hawkers, temporary stalls and small retailers below the turnover limit for a State licence. It is applied for on FoSCoS, the FSSAI portal, and granted by the registering authority of the local area.\n\nBecause it is the simplest tier, it is also the one most often taken by businesses that have already outgrown it. The registration has to match the business as it actually is: if turnover, production capacity or the kind of food handled takes the business into the State licence tier, a basic registration does not cover it.\n\nThe 14-digit registration number has to appear on packaging and be displayed at the premises.",
      appliesTo: [
        "A home baker or cloud kitchen starting out at small volume",
        "A tea stall, snack vendor or small eatery",
        "A small retailer or distributor of packaged food",
        "A temporary food stall at an event or market"
      ],
      documentsRequired: [
        "Photograph of the food business operator",
        "Identity proof — Aadhaar, PAN or voter ID",
        "Proof of premises — rent agreement, NOC or ownership document",
        "List of food products to be handled",
        "Declaration of turnover"
      ],
      processSteps: [
        {
          title: "Tier confirmed",
          desc: "We check turnover and activity to confirm basic registration is the right tier."
        },
        {
          title: "Application on FoSCoS",
          desc: "The registration form is filed with the documents and declaration."
        },
        {
          title: "Registration issued",
          desc: "The registering authority grants the registration, sometimes after an inspection."
        }
      ],
      eligibility: [
        "Turnover below the limit for the State licence tier",
        "A petty food business as defined by the FSSAI licensing regulations"
      ],
      faqs: [
        {
          q: "My business has grown. Is basic registration still enough?",
          a: "Not once turnover or capacity crosses the State licence threshold. At that point the business needs a State licence, which is a separate application."
        },
        {
          q: "Does a home kitchen need FSSAI registration?",
          a: "Yes, if food is being prepared for sale. Basic registration is usually the right starting point for a home-based business."
        },
        {
          q: "How long is the registration valid?",
          a: "It is granted for the period chosen at application, within the limits the regulations allow, and must be renewed before it expires. [[V]]"
        }
      ],
      relatedSlugs: [
        "fssai-license-registration",
        "fssai-license-renewal",
        "fssai-state-license"
      ]
    },

    {
      slug: "drug-wholesale-license",
      title: "Drug Wholesale License",
      category: "licensing",
      group: "Medical Devices, Pharma & Healthcare",
      shortDesc: "A wholesale drug licence from the State Drugs Control Department under the Drugs and Cosmetics Rules.",
      turnaround: "30-45 working days including inspection",
      authority: "State Drugs Control Department (State Licensing Authority)",
      overview: "Anyone who sells, stocks or distributes medicines on a wholesale basis needs a wholesale drug licence under the Drugs and Cosmetics Act, 1940 and its Rules. The licence is granted by the State Licensing Authority, and separate licences apply depending on whether the drugs fall in the scheduled categories that need closer control. [[V]]\n\nThe application is decided as much on the premises and the people as on the paperwork. The Drugs Inspector inspects the premises before the licence is granted, looking at area, storage conditions — including cold storage for drugs that need it — and the qualifications of the competent person who will be in charge of sales.\n\nMost delays come from the competent person requirement: the person named must hold the qualification or experience the Rules prescribe and must actually work at the premises.",
      appliesTo: [
        "A pharmaceutical distributor or stockist setting up in a new state",
        "A C&F agent handling medicines for manufacturers",
        "A medical-device or surgical-supplies trader whose products are notified as drugs",
        "An online pharmacy's warehousing arm"
      ],
      documentsRequired: [
        "Application in the state's prescribed form",
        "Proof of ownership or tenancy of the premises, with a site plan",
        "Qualification and experience certificates of the competent person, with appointment letter",
        "Affidavits of the proprietor, partners or directors and the competent person",
        "Details of refrigeration and storage equipment",
        "Constitution documents of the business"
      ],
      processSteps: [
        {
          title: "Premises checked",
          desc: "The premises are checked against the minimum area and storage requirements before applying."
        },
        {
          title: "Competent person confirmed",
          desc: "We confirm that the competent person meets the qualification or experience requirement."
        },
        {
          title: "Application filed",
          desc: "The application is filed with the State Licensing Authority, online where the state allows."
        },
        {
          title: "Inspection and grant",
          desc: "The Drugs Inspector inspects the premises; observations are closed and the licence granted."
        }
      ],
      eligibility: [
        "Premises meeting the minimum area and storage conditions in the Rules",
        "A competent person with the prescribed qualification or experience",
        "Storage facilities suitable for the drugs to be stocked"
      ],
      faqs: [
        {
          q: "Can one licence cover warehouses in two states?",
          a: "No. Drug licences are issued by each state's licensing authority for specific premises. Each location needs its own."
        },
        {
          q: "Who can be the competent person?",
          a: "A registered pharmacist, or a person with the qualification and experience in dealing with drugs that the Rules prescribe. The person must be employed at the licensed premises. [[V]]"
        },
        {
          q: "Do we need a separate retail licence too?",
          a: "Only if you also sell to patients. Wholesale and retail sale are licensed separately."
        }
      ],
      relatedSlugs: [
        "drug-retail-pharmacy-license",
        "drug-manufacturing-license",
        "cdsco-medical-device-registration"
      ]
    },

    {
      slug: "real-estate-project-registration-rera",
      title: "Real Estate Project Registration (RERA)",
      category: "licensing",
      group: "Other Sector & Additional Certifications",
      shortDesc: "Registering a real estate project with the state RERA authority before it is advertised or sold.",
      turnaround: "30 days for the authority's decision after a complete application",
      authority: "State Real Estate Regulatory Authority",
      overview: "Under the Real Estate (Regulation and Development) Act, 2016, a promoter cannot advertise, market, book or sell any unit in a real estate project without first registering it with the state's RERA authority, unless the project falls within the exemptions — broadly, smaller projects by land area or number of units. [[V]]\n\nRegistration requires the promoter to disclose the approvals, title, layout and sanctioned plans, project schedule and the details of contractors, architects and engineers. A designated separate bank account must hold the prescribed share of amounts collected from allottees, to be used only for that project's land and construction cost. [[V]]\n\nRegistration starts the obligations rather than ending them: quarterly progress updates on the RERA website, certified withdrawals from the separate account, and liability for structural defects for years after possession. [[V]]",
      appliesTo: [
        "A developer launching a residential or commercial project above the exemption limits",
        "A promoter of a plotted development",
        "An ongoing project that did not have a completion certificate when RERA came into force",
        "A developer extending or revising the timeline of a registered project"
      ],
      documentsRequired: [
        "Promoter's constitution documents, PAN and track record of previous projects",
        "Title documents for the land and encumbrance details",
        "Sanctioned plan, layout plan and approvals from the competent authority",
        "Proforma allotment letter, agreement for sale and conveyance deed",
        "Details of the separate project bank account",
        "Details of architects, engineers, contractors and agents",
        "Project schedule and estimated cost"
      ],
      processSteps: [
        {
          title: "Approvals verified",
          desc: "Title and sanctions are checked for completeness before anything is disclosed."
        },
        {
          title: "Disclosures prepared",
          desc: "The application, declarations and draft agreements are prepared under the state's RERA rules."
        },
        {
          title: "Application filed",
          desc: "The project is registered on the state RERA portal and queries answered."
        },
        {
          title: "Registration and ongoing compliance",
          desc: "On registration, the quarterly update and separate-account obligations are set up."
        }
      ],
      eligibility: [
        "A real estate project above the area or unit thresholds in the Act or the state rules",
        "All approvals from the competent authority in place"
      ],
      faqs: [
        {
          q: "Can we take bookings while the RERA application is pending?",
          a: "No. Advertising, marketing or taking bookings before registration is prohibited and attracts penalties."
        },
        {
          q: "Do agents need to register too?",
          a: "Yes. Real estate agents who facilitate sales in registered projects must hold their own RERA registration."
        },
        {
          q: "What if the project is delayed?",
          a: "The registration can be extended on application, with reasons, and allottees have remedies under the Act for delay. Extensions are not automatic."
        }
      ],
      relatedSlugs: [
        "real-estate-agent-registration-rera",
        "real-estate-sector-gst-advisory",
        "real-estate-developer-entity-structuring"
      ]
    },

    {
      slug: "fdi-reporting-fc-gpr-filing",
      title: "FDI Reporting (FC-GPR Filing)",
      category: "corporate-advisory",
      group: "FEMA & Foreign Investment",
      shortDesc: "Reporting an issue of shares to a foreign investor to the RBI through the FIRMS portal.",
      turnaround: "Within 30 days of allotment",
      authority: "Reserve Bank of India, through an AD Category-I bank",
      overview: "When an Indian company issues shares or convertible instruments to a person resident outside India, it must report the issue to the Reserve Bank in Form FC-GPR within 30 days of allotment. The form is filed on the RBI's FIRMS portal and processed through the company's authorised dealer bank.\n\nThe filing is the end of a sequence that starts earlier: the inward remittance must come through banking channels, the KYC of the foreign investor is confirmed by the remitting bank, and the issue price must be at or above fair value determined under the pricing guidelines. A valuation certificate and a company secretary's certificate on compliance go with the form.\n\nLate reporting is a contravention under FEMA. It can be regularised with a late submission fee, but repeated or long delays become compounding matters — which is far more involved than filing on time. [[V]]",
      appliesTo: [
        "A startup allotting shares to a foreign venture fund or angel",
        "An Indian subsidiary issuing shares to its foreign parent",
        "A company converting a foreign investor's CCPS or CCDs into equity",
        "A company that missed the 30-day window on an earlier allotment"
      ],
      documentsRequired: [
        "Foreign Inward Remittance Certificate and KYC from the AD bank",
        "Board resolution and allotment details",
        "Valuation certificate as per the FEMA pricing guidelines",
        "Company secretary's certificate on compliance",
        "Shareholding pattern before and after the issue",
        "Entity master registration on FIRMS"
      ],
      processSteps: [
        {
          title: "Pre-checks",
          desc: "Sectoral cap, entry route and pricing are checked before allotment, not after."
        },
        {
          title: "Documents compiled",
          desc: "Remittance, KYC, valuation and corporate documents are compiled."
        },
        {
          title: "FC-GPR filed",
          desc: "The form is filed on FIRMS within 30 days and the AD bank's queries answered."
        },
        {
          title: "Acknowledgement",
          desc: "The approved filing is recorded, and the annual FLA return diarised."
        }
      ],
      eligibility: [
        "Investment within the permitted sectoral cap and entry route",
        "Consideration received through banking channels",
        "Issue price at or above fair value under the pricing guidelines"
      ],
      faqs: [
        {
          q: "We missed the 30-day deadline. What now?",
          a: "File the form with the late submission fee as soon as possible. Long delays may require compounding, so it is worth acting before the delay grows."
        },
        {
          q: "Does every foreign investment need FC-GPR?",
          a: "FC-GPR covers fresh issues of shares. A transfer of existing shares between a resident and a non-resident is reported separately in Form FC-TRS."
        },
        {
          q: "Is there an annual filing as well?",
          a: "Yes. A company with foreign investment files the annual return on Foreign Liabilities and Assets (FLA) with the RBI."
        }
      ],
      relatedSlugs: [
        "fla-return-filing-foreign-liabilities-and-assets",
        "fema-compliance-advisory",
        "startup-valuation-for-femaincome-tax"
      ]
    },

    {
      slug: "posh-policy-and-compliance-prevention-of-sexual-harassment",
      title: "POSH Policy & Compliance (Prevention of Sexual Harassment)",
      category: "corporate-advisory",
      group: "Corporate Governance & Secretarial",
      shortDesc: "Policy, Internal Committee, training and annual reporting under the POSH Act, 2013.",
      turnaround: "2-4 weeks to set up",
      authority: "District Officer, under the Ministry of Women and Child Development",
      overview: "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 requires every employer with ten or more employees to constitute an Internal Committee to receive and inquire into complaints. The committee needs a senior woman employee as presiding officer, at least two other employees, and one external member from an NGO or with relevant experience, with at least half its members women.\n\nThe Act also expects a written policy, awareness programmes for employees, orientation for committee members, display of the committee's details at the workplace, and an annual report submitted to the District Officer. Companies disclose their compliance in the Board's report.\n\nEmployers often get as far as the policy and stop. The inquiry process is where compliance is tested — a complaint handled outside the Act's procedure or timelines exposes the employer, whatever the policy says.",
      appliesTo: [
        "Any employer with ten or more employees, across all offices",
        "A startup crossing the ten-employee mark for the first time",
        "A company whose Internal Committee lacks a qualifying external member",
        "An employer that has received its first complaint and needs to run an inquiry correctly"
      ],
      documentsRequired: [
        "Headcount by location",
        "Existing HR policies and code of conduct",
        "Names and roles of proposed Internal Committee members",
        "Details of the external member",
        "Previous annual reports, if any"
      ],
      processSteps: [
        {
          title: "Policy drafted",
          desc: "A POSH policy is drafted to the Act and adopted by the management."
        },
        {
          title: "Internal Committee constituted",
          desc: "The committee is constituted with a qualifying external member, and its details displayed."
        },
        {
          title: "Training",
          desc: "Awareness sessions for employees and orientation for committee members are run."
        },
        {
          title: "Annual reporting",
          desc: "The annual report is prepared and filed with the District Officer, and the Board's report disclosure drafted."
        }
      ],
      eligibility: [],
      faqs: [
        {
          q: "Do we need an Internal Committee at each office?",
          a: "Every administrative unit or office with ten or more employees needs one. Smaller offices can be covered by the committee of the main office in many cases. [[V]]"
        },
        {
          q: "Does the Act apply if all our employees are men?",
          a: "Yes. The obligations apply on the number of employees, and the Act protects women visitors, clients and contractors at the workplace as well."
        },
        {
          q: "What if we have fewer than ten employees?",
          a: "Complaints are handled by the Local Committee constituted by the District Officer. A written policy is still advisable."
        }
      ],
      relatedSlugs: [
        "hr-policy-manual-drafting",
        "employment-agreement-drafting",
        "corporate-governance-advisory"
      ]
    }

  ];
});
