/* GST & Tax — eight groups. */
module.exports = {
  "gst-registration-and-returns": {
    authority: "GSTN, under the Central Board of Indirect Taxes and Customs",
    authorityShort: "the GST officer",
    law: "Central Goods and Services Tax Act, 2017",
    portal: "the GST portal",
    instrument: "return",
    intro: [
      "GST compliance is a monthly discipline. A registered business reports its outward supplies in GSTR-1, pays tax through GSTR-3B, and reconciles the year in an annual return — and its customers' input tax credit depends on its GSTR-1 being right. Smaller taxpayers can file quarterly under QRMP or pay a flat rate under composition; exporters supply under a Letter of Undertaking; principals report job-work movements in ITC-04.",
      "Registration has its own variants: e-commerce sellers, non-resident and casual taxable persons each register on different terms, and the life of a registration includes amendments, cancellation when it is no longer needed, and revocation when an officer cancels it.",
      "The returns are only as good as the reconciliation behind them, which is why our work starts with the books, not the form."
    ],
    context: [
      "Input tax credit flows from the supplier's GSTR-1 into the recipient's GSTR-2B, so a supplier's late or wrong filing becomes the recipient's credit problem. [[V]]",
      "Non-filing has practical consequences before it has legal ones: e-way bills are blocked and the registration can be suspended or cancelled. [[V]]",
      "Late returns attract a late fee for each day of delay and interest on tax paid late. [[V]]",
      "Every amendment, cancellation or revocation runs through an application on the GST portal and an officer's approval."
    ],
    practice: [
      "Most GST problems we are asked to fix are reconciliation problems that were left for the annual return — by which time some can no longer be corrected.",
      "We reconcile purchases to GSTR-2B every month before claiming credit, because unclaimed or ineligible credit is much harder to deal with a year later."
    ],
    audience: [
      "A business registered under GST that files monthly or quarterly",
      "An exporter supplying goods or services without paying IGST",
      "A seller on Amazon, Flipkart or another marketplace",
      "A business whose GST registration has been suspended or cancelled",
      "A small taxpayer comparing composition with regular registration",
      "A manufacturer sending materials to job workers"
    ],
    docs: [
      "GSTIN and login credentials for the GST portal",
      "Sales register and invoice-level data for the period",
      "Purchase register and GSTR-2B for the period",
      "Details of credit notes, debit notes and amendments",
      "Bank statement for the tax payment account",
      "Digital Signature Certificate or Aadhaar for EVC signing"
    ],
    faqs: [
      { q: "What happens if we miss a GST return?", a: "A late fee accrues for each day of delay, interest runs on any unpaid tax, and continued non-filing blocks e-way bills and can lead to cancellation of the registration. File the oldest pending return first. [[V]]" },
      { q: "Can a filed GSTR-1 or GSTR-3B be revised?", a: "Neither can be revised once filed. Errors are corrected through amendments in a later period's return, within the time limits the law allows. [[V]]" },
      { q: "Why is our input tax credit lower than our purchases?", a: "Usually because some suppliers have not filed their GSTR-1, or filed it wrongly. Credit is generally available only as reflected in GSTR-2B, so we follow up those suppliers. [[V]]" },
      { q: "Should we file monthly or quarterly?", a: "Taxpayers within the turnover limit can choose QRMP — quarterly returns with monthly payment. It saves effort but your customers see your invoices later, which some B2B buyers dislike. [[V]]" }
    ],
    services: {
      "gst-registration-for-e-commerce-sellers": {
        lead: "E-commerce sellers supplying goods through an operator that collects tax at source have generally needed GST registration regardless of turnover, though relief has been notified for some small suppliers. [[V]]",
        kind: "registration",
        instrument: "GSTIN",
        aud: ["A seller listing products on Amazon, Flipkart or Meesho for the first time"],
        faq: { q: "Do I need a GSTIN in every state where the marketplace stores my stock?", a: "Generally yes — storing goods in a marketplace warehouse in another state makes that a place of business there, which needs its own registration. [[V]]" }
      },
      "gst-registration-for-non-resident-taxable-person": {
        lead: "Non-resident taxable persons — foreign businesses making occasional taxable supplies in India without a fixed establishment here — take a temporary GST registration and pay an advance deposit of estimated tax. [[V]]",
        kind: "registration",
        instrument: "temporary registration",
        ctx: ["The registration is valid for a limited period and can be extended, and returns are filed for each month of the registration. [[V]]"]
      },
      "gst-registration-for-casual-taxable-person": {
        lead: "Casual taxable persons are businesses supplying in a state where they have no fixed place of business — at an exhibition or seasonal event — and they register for a limited period with an advance deposit of tax. [[V]]",
        kind: "registration",
        instrument: "temporary registration",
        aud: ["An exhibitor selling at a trade fair in another state"]
      },
      "gst-registration-cancellation": {
        lead: "Cancelling a GST registration stops the returns when a business closes or no longer needs one, but stock and capital goods on hand on the date of cancellation carry a reversal of the credit taken on them. [[V]]",
        instrument: "cancellation order",
        ctx: ["After cancellation a final return is still due, and returns for the period before cancellation remain the taxpayer's responsibility. [[V]]"]
      },
      "gst-registration-revocation": {
        lead: "Revocation is the remedy when an officer cancels a registration — usually for non-filing — and the business wants it back: the pending returns are filed and the application made within the time allowed. [[V]]",
        kind: "modification",
        instrument: "restored registration",
        aud: ["A business whose GSTIN was cancelled for non-filing of returns"]
      },
      "gstin-core-field-amendment": {
        lead: "Core fields of a GST registration — legal name, principal place of business, and the addition or removal of partners or directors — can be changed only through an amendment application approved by the officer. [[V]]",
        instrument: "amended registration"
      },
      "gstr-1-filing": {
        lead: "Outward supplies are reported invoice by invoice in GSTR-1, which is what populates your customers' GSTR-2B and decides whether they get their input tax credit. [[V]]",
        instrument: "GSTR-1"
      },
      "gstr-3b-filing": {
        lead: "Tax is actually paid through GSTR-3B: it is the summary return where output tax, eligible credit and the net cash liability come together each period. [[V]]",
        instrument: "GSTR-3B",
        faq: { q: "Can we claim credit in GSTR-3B that is not in GSTR-2B?", a: "Generally no. Credit is restricted to what appears in GSTR-2B and meets the conditions of the Act, and excess claims are flagged automatically. [[V]]" }
      },
      "gstr-4-filing-composition-scheme": {
        lead: "Composition taxpayers do not file monthly GSTR-1 and GSTR-3B; they pay tax quarterly through CMP-08 and file an annual return in GSTR-4. [[V]]",
        instrument: "GSTR-4"
      },
      "gstr-9c-reconciliation-statement": {
        lead: "Reconciling the audited accounts with the annual return is what GSTR-9C does, and it is required only above a notified turnover. [[V]]",
        instrument: "GSTR-9C",
        kind: "filing"
      },
      "gst-nil-return-filing": {
        lead: "Nil returns are still returns: a registered business with no transactions in a period must file, and non-filing blocks e-way bills and eventually invites cancellation. [[V]]",
        instrument: "nil return"
      },
      "gst-lut-filing-letter-of-undertaking": {
        lead: "Exporters and suppliers to SEZs who want to make zero-rated supplies without paying IGST first file a Letter of Undertaking on the GST portal for the financial year. [[V]]",
        kind: "filing",
        instrument: "LUT"
      },
      "gst-itc-04-filing-job-work": {
        lead: "Job work sends inputs or capital goods out to a job worker without paying tax, and the principal reports those movements in ITC-04 at the frequency its turnover requires. [[V]]",
        instrument: "ITC-04"
      },
      "qrmp-scheme-return-filing": {
        lead: "Quarterly filing with monthly payment — QRMP — lets smaller taxpayers file GSTR-1 and GSTR-3B quarterly while paying tax each month by challan. [[V]]",
        instrument: "quarterly return"
      }
    }
  },

  "gst-advisory-litigation-and-sector-rules": {
    authority: "GST department (CGST and State GST authorities)",
    authorityShort: "the GST department",
    law: "Central Goods and Services Tax Act, 2017; Integrated GST Act, 2017",
    portal: "the GST portal",
    instrument: "order",
    intro: [
      "GST disputes are won or lost on the record. A show-cause notice, an audit observation or a refund deficiency memo sets the terms, and the reply filed in time — with the documents behind it — is what any appeal will later be argued on. This group covers the contentious side of GST: audits, notices, appeals and refunds.",
      "It also covers the sector rules that generic compliance misses: reverse charge, SEZ supplies, cross-border digital services, e-commerce operators' TDS and TCS, and composition dealers' eligibility — along with reviews that find problems before an officer does.",
      "We read the department's position carefully before answering it, because a reply that argues a point the officer did not raise usually creates a new one."
    ],
    context: [
      "Notices and orders are served on the GST portal, and response windows run from the date of service, so someone has to be watching the portal. [[V]]",
      "Demands for tax not paid or credit wrongly availed carry different limitation periods depending on whether fraud or suppression is alleged. [[V]]",
      "Appeals require a pre-deposit of a percentage of the disputed tax before they are heard. [[V]]",
      "Classification, place of supply and valuation are the three questions behind most GST disputes."
    ],
    practice: [
      "Replies that succeed are specific: they answer each allegation, attach the evidence, and cite the provision. Generic replies invite confirmation of the demand.",
      "Where the position is weak, we say so early — paying with interest and closing the matter is sometimes cheaper than a contested appeal."
    ],
    audience: [
      "A business that has received a GST show-cause notice or audit memo",
      "An exporter with input tax credit accumulated and unrefunded",
      "A company whose GST position on a new product or contract is unclear",
      "A marketplace or e-commerce operator with TDS and TCS obligations",
      "A foreign provider of digital services to Indian customers",
      "A business that has not had its GST reviewed since it registered"
    ],
    docs: [
      "The notice, audit memo or order, with all annexures",
      "GSTR-1, GSTR-3B and GSTR-9 for the periods concerned",
      "Books of account and reconciliations for the period",
      "Contracts, invoices and correspondence relevant to the issue",
      "Earlier replies or orders on the same issue, if any"
    ],
    faqs: [
      { q: "How long do we have to reply to a GST notice?", a: "The notice states the response period. Extensions can be requested on reasoned grounds, but the request itself should be made within time. [[V]]" },
      { q: "Do we have to pay before appealing?", a: "A pre-deposit of a percentage of the disputed tax is required to file an appeal; the balance is generally stayed while the appeal is pending. [[V]]" },
      { q: "Can we be heard in person?", a: "Yes. Adjudicating authorities must give an opportunity of personal hearing where an adverse decision is contemplated, and we attend on your behalf. [[V]]" }
    ],
    services: {
      "gst-audit": {
        lead: "Audits by the department under the GST law take several forms — departmental audit of records, special audit by a nominated accountant — and each begins with a notice listing what will be examined. [[V]]",
        kind: "dispute",
        aud: ["A business that has received a notice for departmental GST audit"]
      },
      "gst-show-cause-notice-reply": {
        lead: "Show-cause notices under GST set out a demand, the facts relied on and the provision invoked, and the reply filed within time becomes the record any later appeal is argued on. [[V]]",
        kind: "dispute"
      },
      "gst-appeal-filing-appellate-authority": {
        lead: "Appeals against a GST order go first to the Appellate Authority within the time allowed, with a mandatory pre-deposit of a percentage of the disputed tax. [[V]]",
        kind: "dispute"
      },
      "gst-refund-application": {
        lead: "Refunds under GST — of credit accumulated on exports or an inverted duty structure, or of excess cash — are claimed online in RFD-01 within the time limit, and processing turns on the documents filed with the claim. [[V]]",
        kind: "filing",
        instrument: "refund application",
        aud: ["An exporter supplying under LUT with credit building up"]
      },
      "gst-health-check-up-review": {
        lead: "Health checks find GST problems before an officer does: mismatched credit, missed reverse-charge payments, wrong rates and returns that do not reconcile.",
        kind: "audit"
      },
      "input-tax-credit-reconciliation": {
        lead: "Input tax credit can be claimed only to the extent it appears in GSTR-2B and meets the conditions of the Act, so the purchase register has to be reconciled to the portal every month. [[V]]",
        kind: "audit"
      },
      "anti-profiteering-compliance-advisory": {
        lead: "Anti-profiteering provisions require a reduction in the GST rate, or the benefit of input tax credit, to be passed on to recipients through lower prices, and complaints are examined by the authority designated under the Act. [[V]]",
        kind: "advisory"
      },
      "gst-for-sez-units": {
        lead: "Supplies to SEZ units and developers are zero-rated, so the supplier either pays IGST and claims a refund or supplies under LUT without paying tax. [[V]]",
        kind: "advisory"
      },
      "gst-on-cross-border-digital-services-oidar": {
        lead: "Online information and database access or retrieval services supplied by overseas providers to non-business recipients in India are taxed here, and the foreign supplier must register and pay GST itself. [[V]]",
        kind: "advisory",
        aud: ["A foreign SaaS or streaming provider with Indian consumer customers"]
      },
      "reverse-charge-mechanism-advisory": {
        lead: "Reverse charge shifts the liability to pay GST from the supplier to the recipient for notified supplies — legal services, goods transport, import of services and others — and the recipient pays it in cash. [[V]]",
        kind: "advisory"
      },
      "gst-tdstcs-compliance-e-commerce-operators": {
        lead: "Marketplaces that collect payments on behalf of sellers must collect tax at source on net taxable supplies and file GSTR-8 monthly, which sellers then claim as cash credit. [[V]]",
        kind: "filing",
        instrument: "GSTR-8",
        aud: ["A marketplace operator onboarding third-party sellers"]
      },
      "gst-audit-for-composition-dealers": {
        lead: "Composition dealers sit outside the credit chain, so a review asks different questions of them: whether they remain eligible, whether turnover stays below the limit, and whether they have strayed into supplies the scheme excludes. [[V]]",
        kind: "audit"
      },
      "gst-impact-assessment-study": {
        lead: "Before a new business line, contract or supply-chain change goes live, an impact assessment works out its GST position — rates, place of supply, credit and the compliance load it adds.",
        kind: "audit"
      }
    }
  },

  "income-tax-filing-and-certificates": {
    authority: "Income Tax Department",
    authorityShort: "the Income Tax Department",
    law: "Income-tax Act",
    portal: "the income-tax e-filing portal",
    instrument: "return",
    intro: [
      "Direct-tax compliance has a rhythm: advance tax through the year, TDS and TCS deducted and reported every quarter, and the return of income — with a tax audit where the business crosses the limits — after the year ends. Underneath sit the registrations that make it possible, PAN and TAN, and the certificates that adjust it: lower deduction certificates, Forms 16 and 16A, 15CA and 15CB for remittances abroad.",
      "When the department questions a return, the work moves to notices, assessments, appeals and refunds — almost all of it now conducted in writing on the e-filing portal.",
      "The Annual Information Statement is the department's view of your year; we reconcile against it before filing, not after a notice arrives."
    ],
    context: [
      "AIS and Form 26AS show what third parties have reported about you — TDS, interest, dividends, securities and property transactions — and a return that disagrees with them is likely to be questioned. [[V]]",
      "Interest for late or short payment of advance tax and for late filing is computed automatically on processing. [[V]]",
      "Almost all proceedings are now conducted electronically through the e-filing portal, so notices have to be read on the portal, not just in email.",
      "Due dates differ for audit and non-audit cases, and for entities with transfer pricing reports. [[V]]"
    ],
    practice: [
      "Most notices we answer could have been avoided by reconciling the return to AIS before filing; the mismatch, not the income, triggers the question.",
      "We keep the computation, the reconciliation and the supporting documents together for every return, so that any later question can be answered from the file."
    ],
    audience: [
      "A salaried individual with capital gains or foreign income",
      "A business owner whose turnover requires a tax audit",
      "A company paying contractors, rent and professionals subject to TDS",
      "A business remitting money to a foreign vendor",
      "A taxpayer with a refund that has not arrived",
      "A firm facing scrutiny assessment"
    ],
    docs: [
      "PAN and e-filing portal credentials",
      "Form 26AS, AIS and TIS for the year",
      "Books of account or income and expenditure details",
      "Bank statements and investment proofs",
      "TDS certificates received",
      "Previous year's return and computation"
    ],
    faqs: [
      { q: "What if our figures differ from AIS?", a: "AIS can be wrong, and you can submit feedback on it on the portal. Either the return or the AIS needs correcting before filing; a return that silently differs from AIS invites a notice." },
      { q: "Can a filed return be revised?", a: "A return can be revised within the time the Act allows, and an updated return can be filed later with additional tax in some cases. [[V]]" },
      { q: "How do we know a notice is genuine?", a: "Genuine notices carry a Document Identification Number that can be verified on the e-filing portal. [[V]]" }
    ],
    services: {
      "income-tax-return-filing-individual": {
        lead: "Individuals choose their ITR form by the kinds of income they have — salary, house property, capital gains, business — and the wrong form is one of the commonest reasons a return is treated as defective. [[V]]",
        kind: "filing",
        aud: ["A salaried employee with capital gains from shares or mutual funds", "An individual with rental income or foreign assets to report"]
      },
      "tax-audit-under-section-44ab": {
        lead: "Tax audits under section 44AB are required when business turnover or professional receipts cross the specified limits, and the auditor's report in Forms 3CA/3CB and 3CD is filed before the return. [[V]]",
        kind: "audit",
        aud: ["A business or professional whose receipts have crossed the audit limit"]
      },
      "tcs-return-filing": {
        lead: "Sellers who collect tax at source on specified goods or transactions file a quarterly statement of that collection in Form 27EQ. [[V]]",
        kind: "filing",
        instrument: "TCS statement"
      },
      "advance-tax-computation-and-payment": {
        lead: "Advance tax is payable in instalments during the year once the estimated liability crosses the threshold, and shortfalls attract interest under sections 234B and 234C. [[V]]",
        kind: "filing",
        instrument: "advance tax challan"
      },
      "form-15ca15cb-filing": {
        lead: "Remittances to non-residents generally need Form 15CA filed online before the bank releases the money, with a Chartered Accountant's certificate in Form 15CB above the specified limit. [[V]]",
        kind: "filing",
        instrument: "Form 15CA/15CB"
      },
      "income-tax-appeal-filing-cit-a": {
        lead: "Commissioner (Appeals) is the first appellate stage against an assessment order, and the appeal in Form 35 must be filed within the time allowed from service of the order. [[V]]",
        kind: "dispute"
      },
      "pan-card-application": {
        lead: "PAN applications are made online through Protean or UTIITSL, and an individual with Aadhaar can get an instant e-PAN from the income-tax portal. [[V]]",
        kind: "registration",
        instrument: "PAN"
      },
      "tan-application": {
        lead: "TAN — the Tax Deduction and Collection Account Number — is needed by anyone who deducts or collects tax at source, and is quoted in every TDS payment and statement.",
        kind: "registration",
        instrument: "TAN"
      },
      "lowernil-tds-deduction-certificate": {
        lead: "Lower or nil deduction certificates are issued by the assessing officer, on an application in Form 13, when a payee's actual tax liability is lower than the TDS that would otherwise be deducted. [[V]]",
        kind: "licence",
        instrument: "certificate"
      },
      "form-26as-ais-reconciliation": {
        lead: "Annual Information Statements now hold far more than TDS: interest, dividends, securities transactions, property purchases and foreign remittances reported by third parties all appear there, and the return is expected to agree with it. [[V]]",
        kind: "audit"
      },
      "income-tax-refund-follow-up": {
        lead: "Refunds that do not arrive are usually stuck for a reason the portal will show — an unvalidated bank account, a processing mismatch, or an outstanding demand adjusted against them.",
        kind: "dispute"
      },
      "assessment-proceedings-representation": {
        lead: "Scrutiny assessments are now largely faceless: notices, submissions and hearings run through the e-filing portal, and the written submission carries almost all the weight.",
        kind: "dispute"
      },
      "income-tax-clearance-certificate": {
        lead: "Clearance certificates from the income-tax department are needed in specific situations — certain persons leaving India, or where a law or counterparty requires confirmation that no tax is outstanding. [[V]]",
        kind: "licence",
        instrument: "clearance certificate"
      },
      "form-1616a-issuance-advisory": {
        lead: "Form 16 and Form 16A are valid only when generated from TRACES after the TDS statement is processed, so problems with issuing them almost always trace back to the statement itself. [[V]]",
        kind: "advisory"
      }
    }
  },

  "roc-and-corporate-compliance": {
    authority: "Registrar of Companies, Ministry of Corporate Affairs",
    authorityShort: "the Registrar",
    law: "Companies Act, 2013",
    portal: "the MCA portal",
    instrument: "e-form",
    intro: [
      "A company's obligations under the Companies Act run all year, not just at the annual filing. Board meetings at the required frequency, a general meeting within time, statutory registers, minutes that record decisions properly, returns of deposits and of dues to MSMEs, charges registered when the company borrows, and its office address kept current with the Registrar.",
      "Larger companies take on more: secretarial audit, XBRL filing, statutory audit coordination with a broader scope. Each obligation has its own e-form and due date, and the late fees for missing them accumulate by the day.",
      "We run a company's secretarial calendar as a single schedule, so annual filings are assembled from a year of records rather than reconstructed in October."
    ],
    context: [
      "Late filing of MCA e-forms attracts additional fees that increase with the delay and, for some forms, have no upper limit. [[V]]",
      "Directors of a company that defaults on its financial statements or annual returns for the period specified in the Act face disqualification. [[V]]",
      "Minutes, registers and resolutions are the evidence that decisions were properly taken; auditors and investors' lawyers will ask for them.",
      "Many forms must be certified by a practising professional before filing. [[V]]"
    ],
    practice: [
      "Companies that are behind usually discover it at a funding round, when due diligence finds missing filings — we prefer to find them first.",
      "We prepare the minutes and resolutions alongside the filings, because a form filed without the underlying board record is the commonest secretarial gap."
    ],
    audience: [
      "A private company without a full-time company secretary",
      "A company preparing for investor due diligence",
      "A company that has borrowed against its assets",
      "A company that buys from micro and small enterprises",
      "A public or larger company with secretarial audit obligations",
      "Directors catching up on overdue filings"
    ],
    docs: [
      "Certificate of incorporation, memorandum and articles",
      "Audited financial statements and auditor's report",
      "Board and general meeting minutes",
      "Statutory registers",
      "Digital Signature Certificates of the signing directors",
      "Details of loans, deposits and charges"
    ],
    faqs: [
      { q: "Can overdue MCA filings still be made?", a: "Yes, with additional fees calculated for the delay. Filing the overdue forms is usually the first step before anything else — a strike-off, a fundraise or a director change. [[V]]" },
      { q: "Does a dormant company still have to file?", a: "Yes. A company that does no business still files its financial statements and annual return, unless it has obtained dormant status." },
      { q: "Who signs the forms?", a: "A director with a valid DSC and an active DIN, and for many forms a practising CA, CS or cost accountant certifies the filing as well. [[V]]" }
    ],
    services: {
      "dpt-3-filing-return-of-deposits": {
        lead: "Deposits — and outstanding receipts of money that are not deposits — are both reported in DPT-3, which most companies file annually. [[V]]",
        kind: "filing",
        instrument: "DPT-3",
        ctx: ["Loans from directors and their relatives, and from other companies, are among the exempt receipts that still have to be reported. [[V]]"]
      },
      "msme-form-1-filing": {
        lead: "Companies that owe money to micro or small enterprises beyond the period allowed for payment report those dues half-yearly in MSME Form 1. [[V]]",
        kind: "filing",
        instrument: "MSME Form 1"
      },
      "annual-general-meeting-compliance": {
        lead: "Annual general meetings adopt the financial statements, declare dividends and appoint auditors, and must be held within the time the Act allows after the year end. [[V]]",
        kind: "filing",
        instrument: "AGM record"
      },
      "board-meeting-and-minutes-compliance": {
        lead: "Board meetings must be held at the frequency the Act prescribes, with notice, quorum and minutes that will stand up if a decision is later questioned. [[V]]",
        kind: "retainer"
      },
      "statutory-audit-coordination": {
        lead: "Statutory auditors expect closed books, reconciled balances and a schedule of supporting documents; coordination is the work of getting those ready before fieldwork starts.",
        kind: "audit"
      },
      "secretarial-audit-form-mr-3": {
        lead: "Secretarial audit in Form MR-3 is required for listed companies and for public companies above the paid-up capital or turnover thresholds, and the report is annexed to the board's report. [[V]]",
        kind: "audit"
      },
      "xbrl-filing": {
        lead: "XBRL filing applies to listed companies and to companies above the specified capital or turnover limits, which file their financial statements in the XBRL taxonomy. [[V]]",
        kind: "filing",
        instrument: "XBRL filing"
      },
      "charge-creationsatisfaction-chg-1chg-4-filing": {
        lead: "Charges created on a company's assets to secure borrowing must be registered with the Registrar within the time allowed, and satisfied charges recorded too — an unregistered charge is void against a liquidator and creditors. [[V]]",
        kind: "filing",
        instrument: "charge filing"
      },
      "registered-office-change-intimation-inc-22": {
        lead: "Registered office changes within the same city are notified to the Registrar in INC-22 within the time allowed, with proof of the new address. [[V]]",
        kind: "filing",
        instrument: "INC-22"
      }
    }
  },

  "payroll-and-labour-statutory-dues": {
    authority: "EPFO, ESIC and state labour and tax departments",
    authorityShort: "the authority concerned",
    law: "EPF Act, 1952; ESI Act, 1948; state professional tax and labour welfare fund laws",
    portal: "the EPFO, ESIC and state portals",
    instrument: "monthly return",
    intro: [
      "Every payroll run creates obligations under several laws at once. Provident fund and ESI contributions are deducted and paid monthly with their returns; professional tax and labour welfare fund follow each state's own calendar; TDS on salary is deposited monthly and reported quarterly. Gratuity and bonus are annual or event-driven liabilities that need to be provided for and paid on time.",
      "These are among the most closely enforced obligations an employer has, because the money deducted from employees' wages is held in trust until it is paid over.",
      "We process payroll and the statutory dues from the same data, so the challans and returns agree with the payslips by construction."
    ],
    context: [
      "Contributions deducted from employees but not deposited are treated seriously under the social security laws, beyond the interest and damages for delay. [[V]]",
      "PF and ESI returns are filed and paid on monthly due dates, and late payment attracts interest and damages. [[V]]",
      "State levies — professional tax and labour welfare fund — depend on where employees work, so multi-state employers deal with several regimes. [[V]]",
      "New labour codes consolidating these laws have been enacted; their implementation and state rules need tracking for each employer. [[V]]"
    ],
    practice: [
      "Inspections usually start from a mismatch — headcount in the PF return against payroll, or wages in ESI against the books — so we reconcile the three every month.",
      "We keep employee master data clean — UAN, IP numbers, bank and KYC — because most payroll compliance failures start as data errors."
    ],
    audience: [
      "An employer with staff in more than one state",
      "A company that has just crossed the PF or ESI threshold",
      "An HR team without in-house statutory payroll expertise",
      "A business facing a PF or ESI inspection",
      "An employer settling gratuity for a departing employee"
    ],
    docs: [
      "Employee master data — PAN, UAN, ESI numbers, bank details",
      "Monthly attendance and salary inputs",
      "Previous challans and returns",
      "Establishment registration codes for PF, ESI and professional tax",
      "Details of joiners and leavers in the month"
    ],
    faqs: [
      { q: "What happens if PF is deducted but paid late?", a: "Interest and damages are levied for the delay, and deducted-but-unpaid contributions can attract stronger action. Paying the arrears quickly limits both. [[V]]" },
      { q: "Do contract workers count for PF and ESI?", a: "Workers engaged through contractors can be the principal employer's responsibility if the contractor does not comply, so contractor compliance should be checked each month. [[V]]" }
    ],
    services: {
      "pf-epfo-return-filing": {
        lead: "Provident fund dues are paid and reported together each month through the electronic challan-cum-return, by the due date the EPFO prescribes. [[V]]",
        kind: "filing",
        instrument: "ECR"
      },
      "esic-return-filing": {
        lead: "ESI contributions are filed and paid monthly on the ESIC portal for each covered employee, and the employer remains liable for both shares if it fails to deduct. [[V]]",
        kind: "filing",
        instrument: "ESI contribution"
      },
      "professional-tax-return-filing": {
        lead: "Professional tax returns follow the state's own calendar — monthly, quarterly or annual depending on the state and the employer's liability. [[V]]",
        kind: "filing",
        instrument: "professional tax return"
      },
      "payroll-processing-and-compliance": {
        lead: "Salary processing is the easy part of payroll; the compliance that follows each run — TDS, PF, ESI, professional tax, payslips and registers — is where errors cost money.",
        kind: "retainer"
      },
      "gratuity-compliance-advisory": {
        lead: "Gratuity becomes payable to employees who leave after five years of continuous service under the Payment of Gratuity Act, and employers can fund the liability through an insurance-backed scheme. [[V]]",
        kind: "advisory"
      },
      "labour-welfare-fund-compliance": {
        lead: "Labour welfare fund contributions are state levies paid by both employer and employee, in small fixed amounts on periodic due dates that vary from state to state. [[V]]",
        kind: "filing",
        instrument: "LWF return"
      },
      "bonus-act-compliance": {
        lead: "Statutory bonus under the Payment of Bonus Act is payable to eligible employees of covered establishments, at between the minimum and maximum percentages the Act sets. [[V]]",
        kind: "advisory"
      }
    }
  },

  "international-and-customs-tax": {
    authority: "Income Tax Department; Central Board of Indirect Taxes and Customs; DGFT",
    authorityShort: "the department",
    law: "Income-tax Act; Customs Act, 1962; Foreign Trade Policy",
    portal: "the income-tax portal or ICEGATE",
    instrument: "filing",
    intro: [
      "Cross-border work sits at the meeting point of several regimes. On the direct-tax side: double taxation treaties, transfer pricing between related companies, withholding on payments abroad, the residence of individuals and the certificates that prove it. On the trade side: customs classification and valuation, bills of entry and shipping bills, duty drawback, and the export promotion schemes — Advance Authorisation, EPCG, SEZ and bonded warehousing — that let duty be deferred or avoided against export obligations.",
      "FEMA runs alongside both, governing how money moves in and out of India and what has to be reported to the RBI through the bank.",
      "We look at a cross-border transaction once, across all three regimes, rather than three times by three different advisers."
    ],
    context: [
      "Treaty relief is claimed on documents — a tax residency certificate and Form 10F — and the payer can be held liable for under-withholding if those are missing. [[V]]",
      "Customs duty depends on classification under the tariff, the transaction value and the origin of the goods, and any of the three can be disputed. [[V]]",
      "Export promotion schemes carry obligations that run for years, and failing them reverses the duty benefit with interest. [[V]]",
      "Remittances abroad pass through the authorised dealer bank, which applies FEMA and tax checks before releasing the money."
    ],
    practice: [
      "The disputes we see most often start with a classification or a treaty position taken once and never revisited as the business changed.",
      "We keep the documents for each export obligation and treaty claim in one file, because the question usually comes years after the transaction."
    ],
    audience: [
      "A company paying royalties, fees or interest to a foreign party",
      "An Indian subsidiary of a foreign group",
      "An importer or exporter clearing goods through customs",
      "A manufacturer using duty-free import schemes against exports",
      "An NRI with income or assets in India",
      "A unit operating in an SEZ"
    ],
    docs: [
      "Contracts and invoices for the cross-border transaction",
      "Tax residency certificate and Form 10F, where treaty relief is claimed",
      "Import or export documents — invoices, packing lists, bills of lading",
      "Product specifications and catalogues for classification",
      "Authorisations and licences held under the Foreign Trade Policy",
      "Previous assessments or rulings on the same issue"
    ],
    faqs: [
      { q: "Who is liable if tax is not withheld on a foreign payment?", a: "The Indian payer can be treated as an assessee in default and the expense disallowed, so withholding is checked before the remittance, not after. [[V]]" },
      { q: "Can a customs classification be challenged after clearance?", a: "Yes — both by the importer and by customs within the limitation period — which is why a well-documented classification matters at the time of clearance. [[V]]" }
    ],
    services: {
      "dtaa-advisory": {
        lead: "Double taxation avoidance agreements decide which country may tax an item of income, and claiming treaty relief in India needs a tax residency certificate and Form 10F. [[V]]",
        kind: "advisory"
      },
      "transfer-pricing-study-and-documentation": {
        lead: "Transfer pricing rules require transactions between associated enterprises to be priced at arm's length, documented in the prescribed manner and reported annually in Form 3CEB. [[V]]",
        kind: "audit",
        aud: ["An Indian captive or subsidiary transacting with its foreign parent"]
      },
      "form-10f-filing": {
        lead: "Non-residents claiming treaty benefits in India file Form 10F electronically on the income-tax portal, alongside their tax residency certificate. [[V]]",
        kind: "filing",
        instrument: "Form 10F"
      },
      "tax-residency-certificate": {
        lead: "Indian residents claiming treaty relief abroad apply to the Indian tax authorities for a tax residency certificate, which the foreign payer usually asks for before reducing its withholding. [[V]]",
        kind: "licence",
        instrument: "tax residency certificate"
      },
      "nri-taxation-services": {
        lead: "NRIs are taxed in India only on income earned or received here, but residential status has to be worked out each year from days of stay, and the rules are stricter for some high-income individuals. [[V]]",
        kind: "retainer"
      },
      "equalisation-levy-compliance": {
        lead: "Equalisation levy was introduced to tax payments to non-resident digital businesses; both the e-commerce levy and the levy on online advertising have since been withdrawn, so the remaining work is closing out earlier years. [[V]]",
        kind: "filing",
        instrument: "equalisation levy statement"
      },
      "fema-advisory-for-nri-remittances": {
        lead: "Money leaving India for an NRI's own account is governed by FEMA — the repatriation limits on NRO funds, the documents the bank needs, and the tax forms that go with the remittance. [[V]]",
        kind: "advisory"
      },
      "foreign-remittance-tax-compliance-15ca-cb": {
        lead: "Remitting money abroad from India is a tax event before it is a banking one: the bank needs Form 15CA, and above the threshold a CA's certificate in 15CB, stating whether tax has been withheld. [[V]]",
        kind: "filing",
        instrument: "Form 15CA/15CB"
      },
      "customs-duty-advisory": {
        lead: "Classification decides customs duty: the tariff heading an import falls under sets the basic duty, the IGST rate and whether an exemption notification applies.",
        kind: "advisory"
      },
      "bill-of-entry-filing": {
        lead: "Imports are cleared on a bill of entry filed electronically on ICEGATE, declaring classification, value and origin, against which duty is assessed and paid. [[V]]",
        kind: "filing",
        instrument: "bill of entry"
      },
      "shipping-bill-filing": {
        lead: "Exports leave India on a shipping bill filed on ICEGATE by the exporter or its customs broker, which also carries claims for drawback and other export benefits. [[V]]",
        kind: "filing",
        instrument: "shipping bill"
      },
      "duty-drawback-claim": {
        lead: "Drawback refunds duties embedded in exported goods, usually at All Industry Rates notified by the government and claimed through the shipping bill. [[V]]",
        kind: "filing",
        instrument: "drawback claim"
      },
      "advance-authorization-scheme-filing": {
        lead: "Advance Authorisation lets an exporter import inputs duty-free against an export obligation, issued by DGFT under the Foreign Trade Policy. [[V]]",
        kind: "licence",
        instrument: "authorisation"
      },
      "epcg-scheme-registration": {
        lead: "EPCG lets exporters import capital goods at zero customs duty against an export obligation of a multiple of the duty saved, to be met over a set period. [[V]]",
        kind: "licence",
        instrument: "EPCG authorisation"
      },
      "sez-unit-compliance-advisory": {
        lead: "SEZ units operate under a letter of approval with ongoing conditions — positive net foreign exchange, reporting to the Development Commissioner, and customs procedures for every movement of goods. [[V]]",
        kind: "advisory"
      },
      "customs-bonded-warehouse-license": {
        lead: "Bonded warehouses let importers store goods without paying customs duty until they are cleared for home consumption or re-exported, under a licence from Customs. [[V]]",
        kind: "licence",
        instrument: "warehouse licence"
      }
    }
  },

  "tax-planning-state-and-local-compliance": {
    authority: "Income Tax Department; state and local tax authorities",
    authorityShort: "the tax authority",
    law: "Income-tax Act; state stamp, excise and local tax laws",
    portal: "the relevant tax portal",
    instrument: "position",
    intro: [
      "Tax planning is structure decided in advance: which regime a company opts into, how founders hold their shares, how employee stock options are granted, how capital gains are timed, and how a family's wealth passes to the next generation. Done early, it is a set of choices; done late, it is damage control.",
      "This group also covers the state and local taxes that sit outside GST and income tax — stamp duty on instruments, property tax, state excise, entertainment and local levies, municipal trade licences and profession tax enrolment — which vary from state to state and city to city.",
      "We recommend structures that will still make sense if the law changes, and say plainly when a saving depends on a position the department may contest."
    ],
    context: [
      "Tax law changes most years with the Finance Act, so a structure has to be tested against current law at the time it is implemented. [[V]]",
      "General anti-avoidance rules allow the department to disregard arrangements whose main purpose is a tax benefit without commercial substance. [[V]]",
      "Stamp duty, property tax and local levies are set by states and local bodies, so the same transaction can cost different amounts in different places. [[V]]"
    ],
    practice: [
      "The best tax structures are boring: they follow the business's real shape and need no explanation in an assessment.",
      "We put the reasoning for every significant position in writing at the time, because the question usually arrives years later."
    ],
    audience: [
      "Founders planning their shareholding before a funding round",
      "A company choosing between tax regimes",
      "Employees exercising or selling ESOP shares",
      "A business family planning succession",
      "An acquirer reviewing a target's tax exposures",
      "A business dealing with state levies in several states"
    ],
    docs: [
      "Financial statements and tax returns for recent years",
      "Shareholding structure and agreements",
      "Details of the proposed transaction or restructuring",
      "Property, instrument or licence documents for state levies",
      "Prior assessment orders and open proceedings"
    ],
    faqs: [
      { q: "Is tax planning legal?", a: "Arranging affairs within the law to pay less tax is legitimate; arrangements without commercial substance can be disregarded under anti-avoidance rules. We work only on the first kind. [[V]]" },
      { q: "When is the right time to plan?", a: "Before the transaction — before shares are issued, options granted, assets sold or a business restructured. Afterwards, the options narrow sharply." }
    ],
    services: {
      "corporate-tax-planning": {
        lead: "Corporate tax planning starts with the regime: domestic companies can opt for lower concessional rates if they give up most exemptions and deductions, and that choice is hard to reverse. [[V]]",
        kind: "advisory"
      },
      "startup-tax-structuring": {
        lead: "Startups make tax decisions early that are expensive to unwind — where IP sits, how founders hold shares, how ESOPs are structured and how the first round is priced.",
        kind: "advisory"
      },
      "esop-taxation-advisory": {
        lead: "ESOPs are taxed twice: as a perquisite when the employee exercises, on the difference between fair market value and the exercise price, and as capital gains when the shares are sold. [[V]]",
        kind: "advisory"
      },
      "capital-gains-tax-advisory": {
        lead: "Capital gains tax turns on three facts — the asset, how long it was held and the rate that applies — and the rules were substantially changed for most assets in 2024. [[V]]",
        kind: "advisory"
      },
      "succession-and-wealth-tax-planning": {
        lead: "Succession planning for business families is about who controls the business after the founder, not only who inherits; wills, family trusts and holding structures each solve a different part of that problem.",
        kind: "advisory"
      },
      "tax-due-diligence": {
        lead: "Investors and acquirers run tax due diligence to find the exposures that will become theirs after closing — open assessments, aggressive positions and unpaid withholding.",
        kind: "audit"
      },
      "hni-tax-residency-planning": {
        lead: "Residential status decides whether an individual is taxed in India on worldwide income, and for high-income individuals the day-count rules include provisions aimed at those who are tax resident nowhere. [[V]]",
        kind: "advisory"
      },
      "stamp-duty-advisory": {
        lead: "Stamp duty is a state levy on instruments, so the same share transfer, lease or agreement can attract different duty depending on where it is executed and where it is brought. [[V]]",
        kind: "advisory"
      },
      "property-tax-compliance-advisory": {
        lead: "Property tax is assessed by the local body on land and buildings within its limits, using a method — rental value, capital value or unit area — that varies by city. [[V]]",
        kind: "advisory"
      },
      "entertainment-tax-registration": {
        lead: "Entertainment tax was largely subsumed into GST, but local bodies in some states can still levy a tax on entertainment and amusements under their own powers. [[V]]",
        kind: "registration",
        instrument: "registration"
      },
      "state-excise-duty-compliance": {
        lead: "State excise duty survives GST for alcoholic liquor for human consumption, and licensees in the liquor trade deal with the state excise department for duty, permits and returns. [[V]]",
        kind: "filing",
        instrument: "excise return"
      },
      "municipal-trade-license-renewal": {
        lead: "Municipal trade licences lapse at the end of their term, and trading without a current one invites closure notices, so renewal is filed with the local body before expiry. [[V]]",
        kind: "renewal",
        instrument: "trade licence",
        portal: "the municipal corporation's portal"
      },
      "local-body-tax-advisory": {
        lead: "Local body levies — advertisement tax, cesses and other municipal or panchayat charges — are set locally and vary from one place to the next. [[V]]",
        kind: "advisory"
      },
      "profession-tax-enrollment-for-employers": {
        lead: "Profession tax enrolment is distinct from registration in states that have both: the employer enrols to pay its own profession tax, separately from registering to deduct tax from employees. [[V]]",
        kind: "registration",
        instrument: "enrolment certificate"
      }
    }
  },

  "special-economic-zones-and-industry-tax": {
    authority: "Development Commissioners; Central Board of Indirect Taxes and Customs; Income Tax Department",
    authorityShort: "the authority concerned",
    law: "Special Economic Zones Act, 2005; Customs Act, 1962; GST and Income-tax Acts",
    portal: "the relevant portal",
    instrument: "approval",
    intro: [
      "Some industries live inside special regimes. Export units operate from SEZs, EOUs, STPI parks and free trade warehousing zones, each with its own approval, bond and reporting duties in exchange for duty and tax benefits. Customs brokers are licensed to clear goods on others' behalf.",
      "Others face sector-specific tax rules that general compliance gets wrong: real estate and works contracts, restaurants and hotels, healthcare and educational institutions, IT and ITES exporters, marketplace sellers and freelancers. The rates, credit rules and exemptions in these sectors differ from the defaults, and getting them wrong compounds every month.",
      "We apply the sector's actual rules rather than the general ones, and check the eligibility conditions behind every exemption a business relies on."
    ],
    context: [
      "Special-regime units must keep meeting their conditions — exports, net foreign exchange, reporting — for the benefits to stay valid. [[V]]",
      "Sector exemptions are conditional; a business that drifts outside the condition loses the exemption from that point. [[V]]",
      "Rates and credit rules for several of these sectors are changed by notification from time to time. [[V]]"
    ],
    practice: [
      "Sector businesses usually come to us after a notice that turns on one condition nobody checked — a turnover limit, a declaration, a definition.",
      "We document why each sector rule applies to the business, so the position is ready if it is questioned."
    ],
    audience: [
      "An exporter setting up in an SEZ, EOU or STPI",
      "A real estate developer or construction contractor",
      "A restaurant, hotel or catering business",
      "A hospital, clinic or diagnostic centre",
      "A school, college or educational trust",
      "An IT services exporter or marketplace seller"
    ],
    docs: [
      "Business description and the contracts or tariffs in question",
      "GST and income-tax returns for recent periods",
      "Approvals, letters of permission or registrations held",
      "Financial statements",
      "Notices or queries received, if any"
    ],
    faqs: [
      { q: "Do SEZ and EOU benefits still exist?", a: "Yes, though income-tax holidays for new units have largely ended; the customs and GST benefits and the procedural advantages continue under their respective laws. [[V]]" },
      { q: "Can a sector exemption be claimed retrospectively?", a: "Only if the conditions were actually met at the time. Exemptions are checked against facts, not against intent." }
    ],
    services: {
      "equalisation-levy-registration": {
        lead: "Registration for equalisation levy was needed by Indian payers and e-commerce operators liable to it; with both levies since withdrawn, the remaining work is completing earlier years' compliance. [[V]]",
        kind: "filing",
        instrument: "equalisation levy filing"
      },
      "software-technology-parks-stpi-registration": {
        lead: "Software Technology Parks of India registers units that export software and IT-enabled services, giving them a single window for approvals, export certification and bonded import of equipment. [[V]]",
        kind: "registration",
        instrument: "STPI registration"
      },
      "eou-export-oriented-unit-registration": {
        lead: "Export Oriented Units operate under a letter of permission from the Development Commissioner and can import and procure inputs duty-free against their export obligations. [[V]]",
        kind: "licence",
        instrument: "letter of permission"
      },
      "sez-unit-registration": {
        lead: "Setting up a unit in an SEZ needs a letter of approval from the Unit Approval Committee, followed by a bond-cum-legal undertaking with customs before operations begin. [[V]]",
        kind: "licence",
        instrument: "letter of approval"
      },
      "free-trade-warehousing-zone-registration": {
        lead: "Free Trade Warehousing Zones are SEZs meant for trading and warehousing, where goods can be stored and re-exported without duty by units approved like any other SEZ unit. [[V]]",
        kind: "licence",
        instrument: "letter of approval"
      },
      "customs-broker-license": {
        lead: "Customs brokers are licensed by the customs authorities after passing the licensing examination, and the licence lets them transact business at customs stations for importers and exporters. [[V]]",
        kind: "licence",
        instrument: "customs broker licence"
      },
      "e-commerce-seller-tax-compliance": {
        lead: "Marketplace sellers deal with three deductions at once — GST TCS collected by the marketplace, income-tax TDS on e-commerce sales, and their own GST returns that must reconcile with both. [[V]]",
        kind: "retainer"
      },
      "freelancer-and-gig-worker-tax-advisory": {
        lead: "Freelancers and gig workers pay income tax on business or professional income, can often use presumptive taxation, and may need GST registration once they cross the threshold. [[V]]",
        kind: "advisory"
      },
      "real-estate-sector-gst-advisory": {
        lead: "Residential real estate has its own GST rate structure without input tax credit for most new projects, and commercial and mixed projects follow different rules again. [[V]]",
        kind: "advisory"
      },
      "works-contract-gst-advisory": {
        lead: "Works contracts — construction, fit-out, installation — are treated as supplies of services under GST, with rates and credit rules that depend on the contract and the recipient. [[V]]",
        kind: "advisory"
      },
      "restaurant-and-hospitality-gst-advisory": {
        lead: "Restaurants generally pay GST at a rate without input tax credit, while hotel accommodation rates depend on the room tariff — and outdoor catering and hotel restaurants have rules of their own. [[V]]",
        kind: "advisory"
      },
      "healthcare-sector-tax-exemption-advisory": {
        lead: "Healthcare services by clinical establishments and doctors are largely exempt from GST, but some room charges, pharmacy sales and non-clinical services are not. [[V]]",
        kind: "advisory"
      },
      "educational-institution-tax-exemption-12aa": {
        lead: "Educational institutions run as trusts or societies get income-tax exemption through registration under section 12AB, or under section 10(23C) where they qualify. [[V]]",
        kind: "registration",
        instrument: "registration"
      },
      "itites-sector-tax-advisory": {
        lead: "IT and ITES companies face a particular set of tax questions: export of services under GST, transfer pricing on cross-border captive work, and safe harbour margins. [[V]]",
        kind: "advisory"
      }
    }
  }
};
