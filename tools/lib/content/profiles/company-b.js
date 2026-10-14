/* Company Setup — Restructuring & statutory registrations; Closure; NGO &
   government schemes; Virtual office & trade licences; Retainers. */
module.exports = {
  "restructuring-and-statutory-registrations": {
    authority: "Registrar of Companies, Ministry of Corporate Affairs",
    authorityShort: "the Registrar",
    law: "Companies Act, 2013; Limited Liability Partnership Act, 2008",
    portal: "the MCA portal",
    instrument: "updated record",
    intro: [
      "Businesses change shape: a proprietorship becomes a company, a firm becomes an LLP, a private company goes public, directors and partners come and go, and the registered office moves. Each of those changes has a prescribed route under the Companies Act or the LLP Act, a filing with the Registrar within a fixed time, and knock-on updates to every other registration the business holds.",
      "This group also covers the registrations that sit alongside incorporation — the Digital Signature Certificate and DIN that let people sign, and the employer and premises registrations a business needs once it starts trading and hiring: shop and establishment, trade licence, professional tax, EPFO and ESIC. Those are administered by state labour departments, municipalities and the social security bodies rather than the MCA.",
      "We map every change to all the records it touches, so the MCA, GST, bank, tax and licence positions stay consistent."
    ],
    context: [
      "Most changes need a board resolution, and many also need a shareholders' or partners' resolution before the filing can be made.",
      "The Registrar's records, the company's statutory registers and its letterhead and invoices have to agree; a change filed in one place but not the others is a common audit finding.",
      "Where a change affects the name, address or constitution, GST, PAN, bank and licence records each need their own update after the MCA filing.",
      "Filings made after the prescribed period attract additional fees that increase with the delay. [[V]]"
    ],
    practice: [
      "The filing itself is usually straightforward; what goes wrong is the sequencing — a new address used on invoices before the Registrar has recorded it, or a director acting before their appointment is filed.",
      "We list every downstream record a change affects before filing, so the update is finished, not just started."
    ],
    audience: [
      "A business restructuring before an investment round",
      "A company moving offices within or across states",
      "A board adding or replacing directors",
      "A growing business hiring its first employees",
      "Founders tidying up an entity that has outgrown its original form",
      "An LLP admitting or releasing partners"
    ],
    docs: [
      "Certificate of incorporation, memorandum and articles, or LLP agreement",
      "Board resolution approving the change",
      "Shareholders' or partners' resolution, where required",
      "Identity and address proof of the persons concerned",
      "Proof of the new address and owner's NOC, for an address change",
      "Digital Signature Certificates of the signatories"
    ],
    faqs: [
      { q: "How long do we have to file the change?", a: "Each change has its own period under the Act or Rules, typically measured in days from the resolution or event. Late filing is still possible, with additional fees. [[V]]" },
      { q: "Does the change take effect when the board approves it?", a: "Some changes take effect on the resolution and are then notified; others — a name change, a conversion, an inter-state office shift — take effect only when the Registrar or Regional Director approves them." },
      { q: "Who else needs to be told?", a: "Banks, GST, income tax, licensing authorities and key counterparties, depending on the change. We give you the list with the filing." }
    ],
    services: {
      "proprietorship-to-private-limited-conversion": {
        lead: "Proprietorships cannot be 'converted' the way a firm can; instead a new private limited company is incorporated and takes over the proprietor's business, assets and liabilities under a business transfer agreement.",
        kind: "modification",
        ctx: ["How the takeover is structured decides its tax treatment: a transfer that meets the conditions of the Income-tax Act can be tax-neutral, while one that does not may trigger capital gains. [[V]]"],
        aud: ["A proprietor raising outside investment for the first time"],
        faq: { q: "Can the business keep its GST registration?", a: "The company takes a fresh GSTIN; unutilised input tax credit can be transferred to it on a transfer of business, through the prescribed form. [[V]]" }
      },
      "partnership-to-llp-conversion": {
        lead: "Registered partnership firms can convert into an LLP under the LLP Act, with the firm's assets, liabilities and contracts vesting in the LLP and the firm treated as dissolved.",
        kind: "modification",
        ctx: ["All partners of the firm must become partners of the LLP, and the conversion is filed with the Registrar along with the LLP incorporation documents. [[V]]"],
        aud: ["Partners who want limited liability without changing how they share profits"]
      },
      "llp-to-private-limited-conversion": {
        lead: "Converting an LLP into a private limited company is done under the Companies Act's provisions for registering existing bodies as companies, with the partners becoming the company's shareholders. [[V]]",
        kind: "modification",
        aud: ["An LLP whose investors want to hold equity shares"]
      },
      "private-limited-to-public-limited-conversion": {
        lead: "Moving from private to public limited status means altering the articles by special resolution, bringing members and directors up to public-company minimums, and having the Registrar record the change. [[V]]",
        kind: "modification",
        aud: ["A company preparing for a public issue or a larger shareholder base"]
      },
      "one-person-company-to-private-limited-conversion": {
        lead: "OPCs can convert voluntarily into a private limited company at any time, since the earlier turnover and capital triggers and the minimum waiting period were removed. [[V]]",
        kind: "modification",
        ctx: ["Conversion means adding at least one more member and director and altering the memorandum and articles accordingly. [[V]]"]
      },
      "change-in-registered-office-address": {
        lead: "Where the registered office moves decides the filing: a move within the same city is a board decision notified to the Registrar, while a move to another state needs the Regional Director's approval and an alteration of the memorandum. [[V]]",
        kind: "modification",
        aud: ["A company moving to new premises in the same city", "A company relocating its registered office to another state"]
      },
      "change-of-company-name": {
        lead: "Changing a company's name takes a special resolution, a new name approved by the Registrar, and a fresh certificate of incorporation — after which every registration, bank account and contract has to follow.",
        kind: "modification",
        faq: { q: "Does the company get a new CIN?", a: "The CIN may change where it encodes the company's status or listing, but the company remains the same legal entity; its rights and obligations continue unaffected by the new name. [[V]]" }
      },
      "addition-or-removal-of-director": {
        lead: "Directors join a company by board or shareholder appointment and leave by resignation or removal, and each change is notified to the Registrar within the time the Act allows. [[V]]",
        kind: "modification",
        ctx: ["Removing a director against their will needs an ordinary resolution of shareholders after special notice, and the director has a right to be heard. [[V]]"]
      },
      "change-in-llp-partners": {
        lead: "Partner changes in an LLP — admission, retirement or a change in designated partners — are filed with the Registrar, and the LLP agreement usually needs a supplementary deed to match. [[V]]",
        kind: "modification"
      },
      "digital-signature-certificate-dsc": {
        lead: "Digital Signature Certificates are issued by licensed certifying authorities after identity verification, and a Class 3 DSC is what MCA, GST and income-tax filings expect. [[V]]",
        authority: "Licensed Certifying Authority, under the Controller of Certifying Authorities",
        law: "Information Technology Act, 2000",
        portal: "the certifying authority's system",
        instrument: "DSC",
        solo: true,
        ctx: [
          "Issuance involves an online application, verification of identity documents and a short video verification, and the certificate is issued on a USB token. [[V]]",
          "A DSC is valid for the period chosen at issue and has to be renewed before it expires, or every filing that needs that signatory's signature stops. [[V]]"
        ],
        docs: ["PAN of the applicant", "Aadhaar or other identity proof", "Recent photograph", "Personal mobile number and email for verification", "For organisational DSCs, proof of authorisation from the organisation"],
        aud: ["A new director who needs to sign MCA filings", "An authorised signatory for GST and income-tax filings", "A director whose DSC has expired"]
      },
      "director-identification-number-din": {
        lead: "DIN, the Director Identification Number, is allotted by the MCA to an individual once and for life, and is needed before that person can be appointed a director of any company.",
        kind: "registration",
        instrument: "DIN",
        ctx: ["For first directors it is allotted through the incorporation form; for later appointments it is applied for separately before appointment. [[V]]"]
      },
      "shop-and-establishment-registration": {
        lead: "Shops and commercial establishments register under their state's Shops and Establishments Act with the local labour department, generally within a short period of starting operations. [[V]]",
        authority: "State Labour Department",
        law: "State Shops and Establishments Act",
        portal: "the state labour department's portal",
        instrument: "registration certificate",
        solo: true,
        ctx: [
          "The Act governs working hours, weekly holidays, leave and the employment of women and young workers at the establishment, and each state sets its own rules and exemptions. [[V]]",
          "Several states now register establishments online with a simple intimation, while others still require an application and renewal. [[V]]"
        ],
        docs: ["Proof of the establishment's address", "Identity proof of the employer or proprietor", "Number of employees and nature of business", "Constitution documents of the business", "Photograph of the premises, where the state asks for it"],
        aud: ["A new office, shop or restaurant starting operations", "A proprietor who needs a registration to open a current account"]
      },
      "professional-tax-registration": {
        lead: "Professional tax is a state levy on employment and professions, so whether a business must register — and what it deducts — depends entirely on the state it operates in.",
        authority: "State commercial tax or professional tax department",
        law: "State professional tax act",
        portal: "the state tax department's portal",
        instrument: "registration and enrolment certificates",
        solo: true,
        ctx: [
          "Many states have two registrations: one for the employer to deduct and pay tax on employees' salaries, and one enrolling the business itself as a taxpayer. [[V]]",
          "Not every state levies professional tax, and rates and slabs differ among those that do. [[V]]"
        ],
        docs: ["Constitution documents of the business", "PAN of the business", "Address proof of the establishment", "Details of employees and salaries", "Identity proof of the proprietor, partners or directors"],
        aud: ["An employer with staff in a state that levies professional tax", "A professional or business required to enrol in its own right"]
      },
      "trade-license-registration": {
        lead: "Municipal corporations issue trade licences to businesses operating within their limits, to regulate health, safety and nuisance from the trade carried on at the premises.",
        authority: "Municipal corporation or local body",
        law: "Municipal corporation act of the state",
        portal: "the municipal corporation's portal",
        instrument: "trade licence",
        solo: true,
        ctx: [
          "Whether a trade licence is needed, and in which category, depends on the city and the trade; food, hazardous and noisy trades are typically scrutinised more closely. [[V]]",
          "Licences are usually issued for a year at a time and must be renewed before expiry. [[V]]"
        ],
        docs: ["Proof of ownership or tenancy of the premises", "Identity proof of the applicant", "Property tax receipt for the premises", "NOC from the owner, if rented", "Fire or health approvals where the trade requires them"],
        aud: ["A restaurant, workshop or retail outlet within city limits", "A business whose landlord or bank asks for a trade licence"]
      },
      "epfo-registration": {
        lead: "EPF registration is mandatory once an establishment employs the number of people notified under the Employees' Provident Funds Act, and can be taken voluntarily below it. [[V]]",
        authority: "Employees' Provident Fund Organisation (EPFO)",
        law: "Employees' Provident Funds and Miscellaneous Provisions Act, 1952",
        portal: "the EPFO unified portal",
        instrument: "establishment code",
        solo: true,
        ctx: [
          "Once covered, the establishment deducts the employee's contribution, adds the employer's, and files a monthly electronic challan-cum-return by the due date. [[V]]",
          "Coverage continues even if headcount later falls below the threshold. [[V]]"
        ],
        docs: ["PAN and constitution documents of the establishment", "Address proof of the establishment", "Details of employees, wages and joining dates", "Digital Signature Certificate of the employer", "Bank account details of the establishment"],
        aud: ["An employer approaching the PF headcount threshold", "A company that wants PF cover for staff before it is mandatory"]
      },
      "esic-registration": {
        lead: "ESIC coverage applies to factories and notified establishments above the employee threshold in areas where the scheme is implemented, for employees earning within the wage ceiling. [[V]]",
        authority: "Employees' State Insurance Corporation (ESIC)",
        law: "Employees' State Insurance Act, 1948",
        portal: "the ESIC portal",
        instrument: "employer code",
        solo: true,
        ctx: [
          "Covered employees and their families get medical care and cash benefits through ESIC, funded by contributions from both employer and employee. [[V]]",
          "Contributions are paid monthly and returns filed for each contribution period. [[V]]"
        ],
        docs: ["Constitution documents and PAN of the establishment", "Address proof of the establishment", "Employee list with wages", "Bank details of the establishment", "Details of the employer's representative"],
        aud: ["A factory or establishment crossing the ESIC headcount threshold", "An employer with staff below the ESIC wage ceiling"]
      }
    }
  },

  "closure-and-winding-up": {
    authority: "Registrar of Companies, Ministry of Corporate Affairs",
    authorityShort: "the Registrar",
    law: "Companies Act, 2013; Limited Liability Partnership Act, 2008; Insolvency and Bankruptcy Code, 2016",
    portal: "the MCA portal",
    instrument: "closure",
    intro: [
      "An entity that is no longer needed keeps costing money until it is formally closed: annual returns, audits, late fees and directors' exposure continue whether or not it trades. Closing it properly is how founders stop that, and how they avoid the disqualification that follows a company or LLP left in default.",
      "Which route applies depends on the entity's position. An inactive company or LLP with no assets and no liabilities can usually be struck off by the Registrar; a solvent company with assets to distribute goes through voluntary liquidation under the Insolvency and Bankruptcy Code; an insolvent one goes through the IBC's resolution or liquidation process before the NCLT. Section 8 companies and Nidhis carry conditions of their own.",
      "We start by establishing which route the entity actually qualifies for, because filing for the wrong one costs months."
    ],
    context: [
      "The Registrar publishes notice of a proposed strike-off and waits out the objection period before striking the name off the register. [[V]]",
      "Bank accounts, GST registration and other tax registrations need to be closed separately; strike-off does not close them.",
      "Directors and partners remain liable for anything that was done while the entity existed, which is why the applications ask them for indemnities.",
      "Records and books generally have to be preserved for a period after closure, in case a question arises later. [[V]]"
    ],
    practice: [
      "The usual obstacle is a bank account that was never formally closed, or a small creditor balance nobody wrote back. Either one stops the statement of accounts from showing nil, so we close those out first.",
      "Entities that have been left dormant for years usually need their filing record repaired before they can be closed, so the first step is to see exactly what is outstanding."
    ],
    audience: [
      "Founders with an entity that never started business",
      "A group consolidating several companies into one",
      "Partners who have moved their business into a new structure",
      "A company with assets to distribute to shareholders",
      "Directors worried about disqualification for non-filing",
      "A creditor or company facing insolvency proceedings"
    ],
    docs: [
      "Certificate of incorporation and constitutional documents",
      "Statement of accounts or audited financial statements",
      "Board and shareholder or partner resolutions",
      "Affidavits and indemnities from directors or partners",
      "Bank account closure confirmation",
      "Status of pending annual filings"
    ],
    faqs: [
      { q: "What if the entity has not filed returns for years?", a: "Overdue filings generally need to be brought up to date before a strike-off application is accepted, with the late fees that have built up. We check the record first so the cost is known before you decide. [[V]]" },
      { q: "Can a closed company be revived?", a: "Restoration through the NCLT is possible in limited circumstances within the time allowed, but it is slow and uncertain. Closure should be treated as final. [[V]]" },
      { q: "Do directors get disqualified if the entity is not closed?", a: "Directors of a company that fails to file its financial statements or annual returns for the period specified in the Act can be disqualified, which is one reason not to leave an unused entity alone. [[V]]" }
    ],
    services: {
      "llp-strike-off": {
        law: "Limited Liability Partnership Act, 2008",
        instrument: "strike-off order",
        lead: "Under the Limited Liability Partnership Act, 2008, an LLP that has not carried on business for a year or more can ask the Registrar to strike its name off the register, instead of going through a full winding up. [[V]]",
        ctx: [
          "The application is made by the designated partners on the MCA portal and is open only to an LLP with no assets and no liabilities — the statement of accounts filed with it has to show exactly that.",
          "Annual filings that were never made do not disappear with the LLP; overdue returns and statements are generally brought up to date before the application is accepted. [[V]]"
        ],
        aud: ["An LLP formed for a project that never started", "Partners who have moved the business into a private limited company", "An LLP that has sat dormant and is accruing late fees on unfiled returns"],
        docs: [
          "Consent of all partners to the strike-off",
          "Statement of accounts showing nil assets and liabilities, certified by a Chartered Accountant",
          "Affidavit and indemnity from the designated partners",
          "Bank account closure confirmation",
          "Copies of the LLP's filed annual returns and statements, or the overdue ones prepared for filing",
          "LLP agreement and incorporation certificate"
        ],
        faq: { q: "Can a struck-off LLP be revived?", a: "Restoration is possible through the National Company Law Tribunal in limited circumstances, but it is slow and uncertain. Strike-off should be treated as final." }
      },
      "voluntary-winding-up-of-company": {
        lead: "Solvent companies that have assets to distribute, or want a supervised and final exit, use voluntary liquidation under the Insolvency and Bankruptcy Code, with a liquidator appointed by the shareholders. [[V]]",
        law: "Insolvency and Bankruptcy Code, 2016",
        authority: "National Company Law Tribunal; Insolvency and Bankruptcy Board of India",
        ctx: ["The directors first make a declaration of solvency, supported by audited accounts and a valuation of assets; creditors' approval is needed where the company has debts. [[V]]", "The liquidator realises the assets, pays the creditors, distributes the surplus and applies to the NCLT for a dissolution order. [[V]]"],
        aud: ["A company with assets or cash to return to shareholders"]
      },
      "nidhi-company-winding-up": {
        lead: "Nidhi companies usually face closure because they never obtained, or have lost, their declaration as a Nidhi — and the route out depends on whether member deposits are still outstanding. [[V]]",
        ctx: ["Deposits must be repaid in full before any simplified closure route is open; where they cannot be, the company's position becomes a matter for the Tribunal. [[V]]"]
      },
      "section-8-company-closure": {
        lead: "Section 8 companies cannot simply distribute what is left on closure: any surplus assets go to another company or body with similar objects, as the licence and the Tribunal direct. [[V]]",
        ctx: ["Grants and CSR funds received for specific purposes have to be accounted for, and any unspent restricted funds dealt with as the grant terms require."]
      },
      "dormant-company-status-application": {
        lead: "Dormant status under the Companies Act lets a company with no significant accounting transactions — one formed for a future project or holding an asset — stay registered with a lighter filing burden. [[V]]",
        kind: "filing",
        instrument: "dormant status",
        ctx: ["A dormant company files a return of dormant status annually and keeps the minimum number of directors; it can apply to become active again when it needs to. [[V]]"],
        faq: { q: "Is dormant status better than striking the company off?", a: "If the company will be used later — to hold a licence, a name or an asset — dormancy keeps it alive cheaply. If it will never be used, strike-off ends the obligations altogether." }
      },
      "insolvency-resolution-advisory": {
        lead: "Insolvency resolution under the IBC begins when a financial creditor, an operational creditor or the company itself applies to the NCLT after a default, and from admission the board's powers pass to an interim resolution professional. [[V]]",
        kind: "advisory",
        law: "Insolvency and Bankruptcy Code, 2016",
        authority: "National Company Law Tribunal",
        ctx: ["Operational creditors must first serve a demand notice and wait for the response period before applying; a pre-existing dispute raised in that period can defeat the application. [[V]]"],
        aud: ["A supplier owed money by a company that has stopped paying", "Promoters of a company facing an insolvency application"]
      }
    }
  },

  "ngo-non-profit-and-government-schemes": {
    authority: "Income Tax Department (Exemptions); Ministry of Corporate Affairs; Ministry of Home Affairs",
    authorityShort: "the department",
    law: "Income-tax Act; Indian Trusts Act / Societies Registration Act; Foreign Contribution (Regulation) Act, 2010",
    portal: "the department's portal",
    instrument: "registration",
    intro: [
      "A non-profit is built in layers. First the entity — a trust, a society or a Section 8 company. Then the registrations that let it function as a charity: income-tax registration so its own income is exempt, 80G approval so donors can claim a deduction, NGO Darpan for government grants, CSR registration so companies can fund it, and FCRA if it will receive money from abroad. Each layer has its own authority and its own renewal cycle.",
      "The second half of this group covers the government schemes that support small enterprises: seed funding for startups, Stand-Up India and PMEGP loans, CGTMSE guarantees, ZED certification and district-level industry registrations. These are applied for through implementing agencies and banks, each with its own eligibility rules.",
      "We work out which layers or schemes actually apply, and in what order, before preparing any application."
    ],
    context: [
      "Income-tax registration and 80G approval are now granted for fixed periods and must be renewed, so a charity's exemptions need tracking like any other licence. [[V]]",
      "Charitable organisations are expected to apply their income to their objects within the time the Income-tax Act allows, and to keep books, get them audited and file returns accordingly. [[V]]",
      "Donor and grant-maker due diligence increasingly asks for the full set — registration, 12A, 80G, Darpan, CSR-1 and audited accounts — before any funds are released.",
      "The objects clause in the trust deed, society memorandum or Section 8 memorandum is what every later authority reads first, so it has to describe the actual charitable work."
    ],
    practice: [
      "Applications are most often delayed by objects clauses that are too broad, or by activities that look commercial; the Commissioner reads both closely.",
      "We keep the registrations and their renewal dates on one calendar, because a lapsed 80G approval is discovered by donors before it is discovered by the charity."
    ],
    audience: [
      "Founders setting up a charitable trust, society or Section 8 company",
      "An NGO preparing to receive CSR funding",
      "A charity whose income-tax exemptions are due for renewal",
      "An organisation planning to receive foreign donations",
      "A small manufacturer seeking scheme support or a collateral-free loan",
      "A startup applying for seed funding through an incubator"
    ],
    docs: [
      "Trust deed, society memorandum and rules, or Section 8 memorandum and articles",
      "Registration certificate of the entity",
      "PAN of the organisation",
      "Identity and address proof of trustees, members or directors",
      "Activity reports and details of charitable work done",
      "Audited accounts for the years available",
      "Bank account details of the organisation"
    ],
    faqs: [
      { q: "Do we need all of 12A, 80G, Darpan and CSR-1?", a: "Not always. 12A protects the organisation's own income; 80G matters if donors want deductions; Darpan matters for central grants; CSR-1 matters only if companies will fund you. We recommend the set your funding sources need." },
      { q: "Can a newly formed NGO apply immediately?", a: "Provisional registration and approval are available to new organisations, followed by regular registration once they have a record of activities. [[V]]" },
      { q: "What happens if an approval lapses?", a: "The organisation may lose exemption for the period, and donors lose their deductions. Renewal applications should be filed well before the expiry date." }
    ],
    services: {
      "trust-registration": {
        lead: "Public charitable trusts are created by a trust deed and, in most states, registered with the sub-registrar — or under the state's public trusts act where one exists. [[V]]",
        ctx: ["The deed sets out the trust's objects, the trustees and how they are appointed and replaced, and what happens to the property if the trust ends; it is executed on stamp paper as required by the state. [[V]]"],
        aud: ["A family setting up a charitable trust for education or healthcare"]
      },
      "society-registration": {
        lead: "Societies are registered under the Societies Registration Act, 1860 or the state's own societies act, with a memorandum of association and rules signed by the founding members. [[V]]",
        authority: "Registrar of Societies (State)",
        ctx: ["Each state sets the minimum number of founding members and its own registration procedure, and societies file annual lists of their governing body with the registrar. [[V]]"],
        aud: ["A group of members forming an association, club or educational society"]
      },
      "ngo-darpan-registration": {
        lead: "NGO Darpan, run by NITI Aayog, gives voluntary organisations a unique ID that central ministries ask for before considering grant applications.",
        authority: "NITI Aayog",
        portal: "the NGO Darpan portal",
        instrument: "unique ID",
        faq: { q: "Is Darpan registration a tax registration?", a: "No. It is an identification for dealing with government grant schemes; it does not give any tax exemption." }
      },
      "12a-registration": {
        lead: "Income-tax exemption for a trust, society or Section 8 company depends on registration under section 12AB — provisional at first, then regular — granted by the Commissioner of Income Tax (Exemptions). [[V]]",
        authority: "Commissioner of Income Tax (Exemptions)",
        portal: "the income-tax e-filing portal",
        kind: "registration"
      },
      "80g-registration": {
        lead: "Donors can deduct their contributions only if the receiving organisation holds approval under section 80G, and that approval is now time-bound and must be renewed. [[V]]",
        authority: "Commissioner of Income Tax (Exemptions)",
        portal: "the income-tax e-filing portal",
        ctx: ["Approved organisations file an annual statement of donations received, and donors' deductions depend on that statement. [[V]]"]
      },
      "fcra-registration": {
        lead: "Foreign contributions to an Indian NGO are lawful only with FCRA registration or prior permission from the Ministry of Home Affairs, received in the designated FCRA account at the State Bank of India's New Delhi Main Branch. [[V]]",
        authority: "Ministry of Home Affairs (FCRA Wing)",
        law: "Foreign Contribution (Regulation) Act, 2010",
        portal: "the FCRA online portal",
        ctx: ["Registration generally requires a track record of activities and spending on the stated objects; newer organisations usually apply for prior permission for a specific contribution instead. [[V]]"],
        aud: ["An NGO with a confirmed grant from a foreign foundation"]
      },
      "csr-1-filing": {
        lead: "Implementing agencies that want to receive CSR funds from companies must first register with the MCA by filing Form CSR-1 and obtaining a CSR registration number. [[V]]",
        authority: "Ministry of Corporate Affairs",
        portal: "the MCA portal",
        kind: "filing",
        instrument: "CSR-1",
        ctx: ["The agency must be a Section 8 company, registered trust or society with the income-tax registrations the CSR Rules require. [[V]]"]
      },
      "startup-india-seed-fund-scheme-application": {
        lead: "Startup India Seed Fund Scheme money reaches startups through selected incubators, which evaluate applications and disburse grants or debt for proof of concept, prototype development and market entry. [[V]]",
        authority: "DPIIT, through selected incubators",
        portal: "the Startup India seed fund portal",
        solo: true,
        ctx: [
          "Applicants must be DPIIT-recognised startups within the age limit the scheme sets, and must not have received more than the permitted government funding already. [[V]]",
          "Each incubator runs its own evaluation, so the application is tailored to the incubators whose sectors and stage fit the startup."
        ],
        docs: ["DPIIT recognition certificate", "Pitch deck and business plan", "Proof of concept or prototype details", "Details of funding received so far", "Founder and team details"],
        aud: ["A DPIIT-recognised startup building its first prototype"]
      },
      "stand-up-india-scheme-registration": {
        lead: "Stand-Up India loans support greenfield enterprises promoted by women or by Scheduled Caste or Scheduled Tribe entrepreneurs, through bank loans within the scheme's range. [[V]]",
        authority: "Scheduled commercial banks; SIDBI",
        portal: "the Stand-Up India portal",
        solo: true,
        ctx: [
          "The enterprise must be new — in manufacturing, services, trading or allied agricultural activities — and, for non-individual borrowers, majority-held by the eligible entrepreneur. [[V]]",
          "The bank assesses the project as it would any loan; the scheme improves access, it does not guarantee sanction."
        ],
        docs: ["Identity and category certificate of the promoter", "Project report", "Constitution documents of the enterprise", "Quotations for machinery or assets", "Address proof of the business premises"],
        aud: ["A first-time woman entrepreneur starting a manufacturing unit"]
      },
      "pmegp-loan-scheme-application": {
        lead: "PMEGP is a credit-linked subsidy scheme implemented through KVIC, state Khadi boards and District Industries Centres, where the subsidy depends on the applicant's category and location. [[V]]",
        authority: "Khadi and Village Industries Commission; District Industries Centres",
        portal: "the PMEGP e-portal",
        solo: true,
        ctx: [
          "Applications are for new units; the implementing agency forwards approved applications to banks, which sanction the loan, and the margin-money subsidy is released through the bank. [[V]]",
          "An entrepreneurship development training is part of the process before the subsidy is released. [[V]]"
        ],
        docs: ["Identity and address proof of the applicant", "Educational qualification certificate", "Category certificate, where applicable", "Project report", "Rural area certificate, where applicable"],
        aud: ["A first-generation entrepreneur setting up a small manufacturing or service unit"]
      },
      "cgtmse-collateral-free-loan-registration": {
        lead: "Collateral-free credit for micro and small enterprises is backed by CGTMSE's guarantee cover, which the lending bank obtains — the borrower does not apply to CGTMSE directly. [[V]]",
        authority: "Credit Guarantee Fund Trust for Micro and Small Enterprises, through member lending institutions",
        solo: true,
        kind: "scheme",
        ctx: [
          "Eligibility turns on the borrower being a micro or small enterprise and the loan falling within the guarantee limits; the bank decides whether to extend the loan under the scheme. [[V]]",
          "What we prepare is the loan proposal itself — financials, projections and the Udyam registration — so that the bank can lend without collateral."
        ],
        docs: ["Udyam registration certificate", "Financial statements and bank statements", "Project report or business plan", "KYC of the business and promoters"],
        aud: ["A small business without property to offer as security"]
      },
      "zed-certification-zero-defect-zero-effect": {
        lead: "ZED certification, under the Ministry of MSME, rates manufacturing MSMEs on quality and environmental practices at successive levels, and some government benefits are linked to the level achieved. [[V]]",
        authority: "Ministry of MSME, through the ZED certification scheme",
        portal: "the ZED portal",
        kind: "certification",
        solo: true,
        ctx: [
          "Certification is assessed against defined parameters, starting with a self-assessment and pledge at the entry level and moving to assessment at the higher levels. [[V]]",
          "The value of a ZED level comes from the practices it requires, and from the procurement and incentive schemes that recognise it. [[V]]"
        ],
        docs: ["Udyam registration certificate", "Details of manufacturing processes", "Quality and environmental records", "Details of plant and machinery"],
        aud: ["A manufacturing MSME supplying to large companies or PSUs"]
      },
      "district-industries-centre-dic-registration": {
        lead: "District Industries Centres are the state's local office for industry — they process registrations for state incentives, subsidy claims and scheme applications for units in their district. [[V]]",
        authority: "District Industries Centre (State Industries Department)",
        solo: true,
        ctx: [
          "What the DIC can do for a unit depends on the state's industrial policy in force — capital subsidies, interest subvention, stamp duty or power tariff concessions — and on the unit's category and location. [[V]]",
          "Claims usually have to be filed within time limits from commencement of production, so incentive eligibility is best checked before the unit starts. [[V]]"
        ],
        docs: ["Udyam registration certificate", "Project report and investment details", "Land and building documents", "Bank sanction letter, where financed", "Commencement of production proof, for subsidy claims"],
        aud: ["A new manufacturing unit eligible for state incentives"]
      }
    }
  },

  "virtual-office-and-trade-licenses": {
    authority: "State and local licensing authorities",
    authorityShort: "the licensing authority",
    law: "State and central licensing laws, as applicable",
    portal: "the authority's portal",
    instrument: "licence",
    intro: [
      "This group brings together two practical needs of a business on the ground. The first is an address: a virtual or shared office that can lawfully serve as a registered office or a GST place of business, and the mail and notice handling that goes with it.",
      "The second is the set of sector licences that are granted by state governments or by oil marketing companies rather than by a central regulator — liquor, drug sale, money lending, chit funds, private security, travel and placement agencies, and fuel and gas dealerships. Each has its own authority, its own eligibility conditions, and often its own inspection or selection process.",
      "Many of these are selection processes or discretionary approvals rather than applications that are granted as of right, and we say so at the start."
    ],
    context: [
      "Address-based registrations need documents that genuinely give the business a right to use the premises — an agreement, the owner's consent and a utility bill — because officers verify them.",
      "Sector licences are typically granted for specific premises and specific activities, so a change of location or activity usually needs a fresh approval.",
      "Many state licences are issued for a fixed term and renewed periodically, with renewal conditions that can change from year to year. [[V]]"
    ],
    practice: [
      "The applications that stall here are the ones filed before the premises were ready for inspection or before the eligibility conditions were checked properly.",
      "Where a licence is granted through a selection process rather than on application, we help prepare a complete, compliant application — but no adviser can promise selection."
    ],
    audience: [
      "A business that needs a registered office in a new city",
      "A company without a staffed office that still receives statutory notices",
      "An entrepreneur entering a state-licensed trade",
      "An applicant for a fuel or gas dealership advertised by an oil company",
      "A business adding a regulated activity to its operations"
    ],
    docs: [
      "Constitution documents and PAN of the business",
      "Identity and address proof of the proprietor, partners or directors",
      "Proof of right to use the premises — agreement, NOC and utility bill",
      "Details of the activity to be carried on",
      "Police or character verification where the licence requires it"
    ],
    faqs: [
      { q: "Can one licence cover branches in several states?", a: "Usually not. State-issued licences cover premises in that state, and often a specific premises only, so each location is licensed separately." },
      { q: "Will the authority inspect the premises?", a: "For most trade licences in this group, yes. The premises should be fully ready — fittings, storage, safety equipment — before the inspection is requested." }
    ],
    services: {
      "virtual-office-for-gst-registration": {
        lead: "GST officers verify the principal place of business, so a virtual office used for GST registration needs a genuine agreement, the owner's NOC and a utility bill — and someone who can receive the officer if they visit. [[V]]",
        kind: "retainer",
        authority: "GST department (for verification of the place of business)",
        ctx: ["Physical verification is common for new registrations, and a registration can be cancelled later if the business is found not to exist at the declared address. [[V]]"],
        aud: ["An e-commerce seller needing a GSTIN in another state's marketplace warehouse network"]
      },
      "virtual-office-for-company-registration": {
        lead: "Registered offices can be at a virtual or shared office, provided the company has a legal right to use the address and receives its official correspondence there.",
        kind: "retainer",
        authority: "Registrar of Companies (for the registered office)"
      },
      "registered-agent-and-compliance-address-service": {
        lead: "Receiving statutory notices on time is the whole job of a compliance address: a missed GST, MCA or income-tax notice is how small defaults become penalties.",
        kind: "retainer"
      },
      "business-correspondence-mailroom-service": {
        lead: "Mail handling for a company without a staffed office means someone logging, scanning and forwarding every notice and cheque on the day it arrives.",
        kind: "retainer"
      },
      "liquor-license": {
        lead: "Liquor licences are issued by the state excise department under the state excise law, in categories that separate manufacture, wholesale, retail, bars, hotels and events. [[V]]",
        authority: "State Excise Department",
        law: "State excise act",
        solo: true,
        ctx: ["Eligibility, location restrictions — distance from schools and places of worship — and licence availability differ sharply between states, and some states run retail licences through lotteries or auctions. [[V]]", "Licences are renewed annually in most states, with excise policy announced for each year. [[V]]"],
        docs: ["Constitution documents of the applicant", "Premises ownership or lease and layout plan", "Police verification and character certificate", "Local body and fire approvals for the premises", "Affidavits required by the state excise rules"],
        aud: ["A restaurant or hotel applying for a bar licence", "A retailer or event organiser in a state that licenses private liquor trade"]
      },
      "drug-license": {
        lead: "Drug licences are granted by the state drugs control department for each premises, with separate licences for retail and wholesale sale under the Drugs and Cosmetics Rules. [[V]]",
        authority: "State Drugs Control Department",
        law: "Drugs and Cosmetics Act, 1940",
        solo: true,
        ctx: ["The licence depends on the premises meeting area and storage conditions and on a qualified person — a registered pharmacist for retail — being in charge. [[V]]", "The Drugs Inspector inspects before granting the licence. [[V]]"],
        docs: ["Premises ownership or tenancy proof and site plan", "Qualification and registration of the pharmacist or competent person", "Affidavits of the proprietor and the qualified person", "Details of refrigeration and storage", "Constitution documents of the business"],
        aud: ["A pharmacy or chemist opening a new outlet", "A distributor setting up a new warehouse"]
      },
      "money-lending-license": {
        lead: "Moneylenders who are not banks or NBFCs register under their state's money-lenders act, which in most states also sets interest ceilings and record-keeping duties. [[V]]",
        authority: "State Registrar of Money-Lenders",
        law: "State money-lenders act",
        solo: true,
        ctx: ["Lending as a principal business through a company usually requires NBFC registration with the RBI instead, so the structure of the business decides which regime applies. [[V]]"],
        docs: ["Application in the state's prescribed form", "Identity and address proof of the applicant", "Proof of the business premises", "Details of capital to be employed", "Police verification, where required"],
        aud: ["An individual or firm lending to borrowers in one state"]
      },
      "chit-fund-registration": {
        lead: "Chit funds operate under the Chit Funds Act, 1982, and each chit needs previous sanction and registration with the state's Registrar of Chits before it starts. [[V]]",
        authority: "State Registrar of Chits",
        law: "Chit Funds Act, 1982",
        solo: true,
        ctx: ["The foreman must furnish security, maintain prescribed records and file returns with the registrar for each chit. [[V]]"],
        docs: ["Draft chit agreement", "Constitution documents of the foreman company or firm", "Security proposed to be furnished", "Details of subscribers", "Financial statements of the foreman"],
        aud: ["A company running chit groups in a state"]
      },
      "travel-agency-license-iatagovernment": {
        lead: "Travel agencies have no single mandatory licence; IATA accreditation lets an agency issue airline tickets on its own, while approval from the Ministry of Tourism is a voluntary recognition. [[V]]",
        authority: "IATA (for accreditation); Ministry of Tourism (for approval)",
        solo: true,
        ctx: ["IATA accreditation turns on financial criteria, qualified staff and a bank guarantee or similar security, which are assessed before accreditation. [[V]]"],
        docs: ["Constitution documents and financial statements", "Office premises proof", "Qualifications and experience of key staff", "Bank guarantee or financial security, for IATA"],
        aud: ["A travel business that wants to issue airline tickets directly"]
      },
      "placement-agency-license": {
        lead: "Placement agencies recruiting for jobs in India register under state law where the state requires it, while recruiting Indian workers for jobs abroad needs a recruiting agent's licence under the Emigration Act. [[V]]",
        authority: "State labour department; Protector General of Emigrants (for overseas recruitment)",
        solo: true,
        ctx: ["Overseas recruitment licences carry security deposit, premises and conduct requirements and are issued by the Ministry of External Affairs' emigration wing. [[V]]"],
        docs: ["Constitution documents of the agency", "Office premises proof", "Financial statements", "Details of directors or partners and police verification"],
        aud: ["A recruitment firm placing candidates with employers abroad"]
      },
      "private-security-agency-license-psara": {
        lead: "PSARA licences are mandatory for any private security agency and are issued by the state's Controlling Authority under the Private Security Agencies (Regulation) Act, 2005, after police verification. [[V]]",
        authority: "State Controlling Authority under PSARA",
        law: "Private Security Agencies (Regulation) Act, 2005",
        solo: true,
        ctx: ["The agency must arrange training for its guards with approved institutes and meet the Act's requirements on supervision and record-keeping. [[V]]"],
        docs: ["Constitution documents of the agency", "Police verification of directors or partners", "Training tie-up with an approved institute", "Office premises proof", "Affidavits required under the Act"],
        aud: ["A security services company starting operations in a new state"]
      },
      "gas-agency-dealership-registration": {
        lead: "Gas agency dealerships are not licences you apply for at will: oil marketing companies advertise locations and select distributors under their published selection guidelines. [[V]]",
        authority: "Oil marketing companies (IOCL, BPCL, HPCL)",
        kind: "advisory",
        solo: true,
        ctx: ["Eligibility conditions on the applicant, the land or godown and the finances are set out in each advertisement, and selection is by the company's own process. [[V]]"],
        docs: ["Identity, age and residence proof", "Educational qualification proof", "Land or godown ownership or lease documents", "Financial capability documents"],
        aud: ["An applicant responding to an oil marketing company's distributorship advertisement"]
      },
      "petrol-pump-license-advisory": {
        lead: "Petrol pump dealerships are awarded by the oil marketing companies through advertised selection, and the site then needs explosives, fire, pollution and local approvals before it opens. [[V]]",
        authority: "Oil marketing companies; PESO and local authorities for site approvals",
        kind: "advisory",
        solo: true,
        ctx: ["The land offered must suit the location advertised, with the frontage and access the company's norms require. [[V]]"],
        docs: ["Land ownership or lease documents for the site", "Identity and eligibility documents of the applicant", "Financial capability documents", "Site plan and access details"],
        aud: ["A landowner on a highway or urban site responding to a dealership advertisement"]
      },
      "lpg-distributorship-registration": {
        lead: "LPG distributorships for domestic and commercial cylinders follow the oil marketing companies' distributor selection guidelines, with eligibility conditions on the applicant and on the land or godown offered. [[V]]",
        authority: "Oil marketing companies (IOCL, BPCL, HPCL); PESO for godown licensing",
        kind: "advisory",
        solo: true,
        ctx: ["The cylinder godown needs a licence under the gas cylinder rules from the Petroleum and Explosives Safety Organisation. [[V]]"],
        docs: ["Identity and eligibility proof of the applicant", "Land or godown documents", "Showroom premises details", "Financial capability documents"],
        aud: ["An applicant for an LPG distributorship in an advertised location"]
      }
    }
  },

  "compliance-retainers-and-financial-setup": {
    authority: null,
    law: "Companies Act, 2013; GST, income-tax and labour laws, as applicable",
    instrument: "monthly compliance",
    intro: [
      "Most compliance failures in growing businesses are not failures of knowledge — they are a due date that nobody owned. The retainers in this group put a named team on the recurring work: books closed every month, GST and TDS filed before the due date, payroll processed with PF, ESI and professional tax, board meetings held and minuted, and MCA filings made on time.",
      "The other half covers the financial plumbing a new business needs and often underestimates: a current account, a foreign currency account for export receipts, a payment gateway that will actually approve the merchant, escrow arrangements for transactions, and corporate cards.",
      "Retainers are scoped to the obligations your business actually has, and reported against a calendar you can see."
    ],
    context: [
      "Every recurring obligation goes on a single calendar with its due date and the information needed for it, so the month's work is planned rather than chased.",
      "Records, logins and filings stay in the client's name throughout, and are handed back in full if the engagement ends.",
      "Monthly work is reconciled — books to bank, GST to books, payroll to challans — so that year-end audit and annual filings are a formality rather than a reconstruction."
    ],
    practice: [
      "The handover is where retainers are won or lost: we start by listing every open item from the previous accountant or secretary, because inherited defaults are the ones that surface in a notice.",
      "A short monthly status note — filed, pending, needs your input — does more for a founder than a long report."
    ],
    audience: [
      "A startup without an in-house finance or legal team",
      "A growing company whose founders are doing the compliance themselves",
      "A foreign-owned subsidiary that needs local compliance handled",
      "A business switching from a previous accountant or secretary",
      "Founders setting up banking and payment infrastructure for a new entity"
    ],
    docs: [
      "Incorporation documents and existing registrations",
      "Logins or access for GST, income-tax, MCA and payroll portals",
      "Last filed returns and financial statements",
      "Bank statements and existing books of account",
      "List of open notices or pending filings"
    ],
    faqs: [
      { q: "What does a retainer not cover?", a: "Anything outside the agreed scope — litigation, transactions, one-off advisory — is quoted separately in writing before it starts. The scope is written down at onboarding so there are no surprises." },
      { q: "Can we start mid-year?", a: "Yes. We take over from wherever the previous provider stopped, starting with an inventory of what is filed and what is outstanding." }
    ],
    services: {
      "virtual-cfo-services": {
        lead: "Virtual CFO work is the finance function a growing company needs before it can justify a full-time CFO: monthly MIS, cash-flow forecasting, budgets, and the numbers investors and lenders ask for.",
        ctx: ["The work sits above bookkeeping — interpreting the numbers, preparing board and investor reporting, and planning cash and funding."],
        aud: ["A funded startup preparing board and investor reporting"]
      },
      "compliance-calendar-management-retainer": {
        lead: "Compliance failures in small companies are almost never about difficulty — they are about a due date nobody owned.",
        ctx: ["The retainer builds a calendar of every obligation the business actually has — MCA, GST, TDS, payroll, licences and renewals — and tracks each to completion."]
      },
      "outsourced-company-secretary-services": {
        lead: "Company secretarial work — board and general meetings, minutes, statutory registers and MCA filings — is required of every company, whether or not it has a company secretary on staff.",
        ctx: ["Companies above the thresholds in the Act must appoint a whole-time company secretary; below them, the work can be outsourced. [[V]]"]
      },
      "outsourced-accounting-services": {
        lead: "Bookkeeping done monthly and reconciled to bank and GST data is what makes every other compliance — returns, audit, tax — quick instead of a year-end scramble.",
        ctx: ["Books are kept on your accounting software, so the data stays yours."]
      },
      "payroll-outsourcing-services": {
        lead: "Payroll is where several regimes meet in one monthly run: TDS on salary, PF, ESI, professional tax and labour welfare fund, each with its own due date.",
        ctx: ["Payslips, statutory challans and returns are produced from the same run, so the figures reconcile by construction."]
      },
      "statutory-compliance-audit-retainer": {
        lead: "Statutory compliance audits check, on a schedule, whether the company is actually meeting the labour, tax, corporate and licensing obligations that apply to it.",
        kind: "audit"
      },
      "legal-retainer-for-startups": {
        lead: "Startups need small legal answers often — a contract reviewed, a notice read, a policy checked — and a retainer gives them a lawyer who already knows the business.",
        aud: ["A startup signing several customer and vendor contracts a month"]
      },
      "current-account-opening-assistance-india": {
        lead: "Banks open a current account for a company only after verifying its constitution, its signatories and its business, so incomplete KYC is the main cause of delay.",
        ctx: ["We prepare the board resolution, KYC of signatories and proof of business the bank needs, and coordinate the bank's verification."]
      },
      "foreign-currency-account-assistance": {
        lead: "Foreign currency accounts in India — EEFC accounts for exporters, and accounts with banking units in GIFT City IFSC — are governed by FEMA and limited in what can be credited to them. [[V]]",
        ctx: ["The account suits businesses with regular foreign currency receipts and payments, where converting every receipt to rupees is a cost."]
      },
      "payment-gateway-integration-advisory": {
        lead: "Payment gateways now operate as RBI-authorised payment aggregators, so onboarding a merchant involves KYC on the business, its website policies and its product categories before integration. [[V]]",
        kind: "advisory"
      },
      "merchant-onboarding-advisory-razorpaystripe": {
        lead: "Merchant onboarding is often rejected for reasons the merchant could have fixed in an hour — a missing refund policy, a website without business details, or a product category the gateway restricts.",
        kind: "advisory"
      },
      "escrow-account-setup-advisory": {
        lead: "Escrow arrangements hold money with a bank or escrow agent until agreed conditions are met, and are common in M&A, real estate and marketplace transactions.",
        kind: "advisory",
        ctx: ["The escrow agreement — conditions for release, disputes and the agent's duties — matters more than the account itself."]
      },
      "corporate-credit-card-setup-advisory": {
        lead: "Corporate credit cards are issued against the company's financials and the bank's credit assessment, and newer companies often start with cards secured against a fixed deposit.",
        kind: "advisory"
      }
    }
  }
};
