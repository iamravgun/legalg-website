/* Licensing — Trade & food; Product certification (BIS); Medical, pharma &
   healthcare; Financial services (RBI); Capital markets & insurance. */
module.exports = {
  "trade-and-food-business-licenses": {
    authority: null,
    law: "Foreign Trade (Development and Regulation) Act, 1992; Food Safety and Standards Act, 2006; Legal Metrology Act, 2009",
    authorityShort: "the licensing authority",
    portal: "the authority's online portal",
    instrument: "licence",
    intro: [
      "Trading in goods — especially across borders, or in food — needs a set of registrations before the first invoice. Importers and exporters need an IEC from DGFT and usually an RCMC from an export promotion council; food businesses need the FSSAI registration or licence that matches their size and activity; packers and sellers of packaged goods register under legal metrology; jewellers register for hallmarking.",
      "Each is administered by a different authority, and several — FSSAI in particular — depend on turnover, capacity or activity thresholds that a growing business crosses without noticing.",
      "We check which tier and category a business actually falls in before applying, because the wrong category is the commonest reason these licences are rejected or later found invalid."
    ],
    context: [
      "Licences and registrations here are granted for a specific business, premises or activity, and changes during their life usually need a modification filed before the change takes effect. [[V]]",
      "Several of these registrations must be quoted on invoices, labels or packaging, and inspectors check that they are.",
      "Renewals have to be filed before expiry; a lapsed licence often cannot be renewed and has to be applied for afresh. [[V]]"
    ],
    practice: [
      "Businesses usually outgrow their first licence quietly — turnover, capacity or a new product line moves them into a different category, and nobody notices until an inspection.",
      "We keep the licence, its category and its expiry on the client's compliance calendar, alongside the thresholds that would change them."
    ],
    audience: [
      "A business importing or exporting for the first time",
      "A food manufacturer, restaurant or distributor",
      "A packer or importer of pre-packaged goods",
      "An exporter claiming Foreign Trade Policy benefits",
      "A jeweller selling gold jewellery"
    ],
    docs: [
      "PAN and constitution documents of the business",
      "Proof of premises — ownership or rent agreement with NOC",
      "Identity and address proof of proprietor, partners or directors",
      "Bank account details or cancelled cheque",
      "Details of products, activities and capacity",
      "Existing licences or registrations held"
    ],
    faqs: [
      { q: "Do we need a separate licence for each location?", a: "Usually yes for food and metrology licences, which are premises-specific; IEC is held once for the business. We map each location before applying. [[V]]" },
      { q: "What happens if our turnover crosses into a higher category?", a: "The existing licence stops matching the business. The right licence for the new category has to be obtained — often a fresh application to a different authority." }
    ],
    services: {
      "dgft-advance-authorization": {
        lead: "DGFT issues Advance Authorisations that let a manufacturer-exporter import inputs duty-free, against an obligation to export the resulting product within the period allowed. [[V]]",
        authority: "Directorate General of Foreign Trade (DGFT)",
        portal: "the DGFT portal",
        instrument: "authorisation",
        ctx: ["Input-output norms decide how much can be imported against each unit exported, and the export obligation has to be fulfilled and the authorisation redeemed with DGFT. [[V]]"]
      },
      "aeo-authorized-economic-operator-certification": {
        lead: "AEO status, granted by Indian Customs under the WCO framework, gives importers, exporters and logistics operators with sound compliance records faster clearance and fewer interventions. [[V]]",
        authority: "Central Board of Indirect Taxes and Customs (AEO Programme)",
        portal: "the AEO portal",
        instrument: "AEO certificate",
        kind: "certification",
        ctx: ["Applicants are assessed on their customs compliance history, record-keeping, financial solvency and security standards. [[V]]"]
      },
      "legal-metrology-registration": {
        lead: "Legal Metrology registration covers manufacturers, packers and importers of pre-packaged commodities, and dealers and repairers of weights and measures, under the Legal Metrology Act, 2009 and its rules. [[V]]",
        authority: "Legal Metrology Department (State) / Director of Legal Metrology (Centre)",
        instrument: "registration"
      },
      "bis-hallmarking-license-jewellery": {
        lead: "Jewellers selling gold jewellery in districts where hallmarking is mandatory must register with BIS and sell only HUID-hallmarked articles. [[V]]",
        authority: "Bureau of Indian Standards (BIS)",
        portal: "the BIS Manak Online portal",
        instrument: "BIS registration"
      },
      "rcmc-registration-registration-cum-membership-certificate": {
        lead: "RCMC — the Registration-cum-Membership Certificate — is issued by an Export Promotion Council or commodity board, and is required to claim most Foreign Trade Policy benefits. [[V]]",
        authority: "Export Promotion Council or commodity board for the product",
        instrument: "RCMC"
      },
      "fssai-state-license": {
        lead: "State licences under FSSAI cover mid-sized food businesses — manufacturers, storage, distributors, restaurants and others above the basic registration limit but outside the Central licence criteria — and are granted by the state food safety authority. [[V]]",
        authority: "State Food Safety Commissioner, under FSSAI",
        law: "Food Safety and Standards Act, 2006",
        portal: "FoSCoS",
        instrument: "FSSAI State licence"
      },
      "fssai-central-license": {
        lead: "Central licences under FSSAI are required for large manufacturers, importers, e-commerce food businesses, units at airports and seaports, and businesses operating across states that hold a head-office licence. [[V]]",
        authority: "FSSAI (Central Licensing Authority)",
        law: "Food Safety and Standards Act, 2006",
        portal: "FoSCoS",
        instrument: "FSSAI Central licence"
      },
      "fssai-license-renewal": {
        authority: "FSSAI, Ministry of Health & Family Welfare",
        authorityShort: "FSSAI",
        law: "Food Safety and Standards Act, 2006",
        portal: "FoSCoS",
        instrument: "FSSAI licence",
        lead: "The typical case: a manufacturer whose production volume has grown since the licence was issued. An FSSAI licence is granted for the validity period chosen when it was applied for, and it has to be renewed before that period runs out — a licence that is allowed to lapse generally cannot be renewed, and the business has to apply afresh. [[V]]",
        short: "An FSSAI licence has to be renewed before its validity runs out — a licence that is allowed to lapse generally cannot be renewed, and the business has to apply afresh. [[V]]",
        ctx: [
          "Renewal is filed on FoSCoS against the existing licence, and the business declares whether anything in the original grant has changed.",
          "If turnover or production capacity has moved the business into a different tier — Basic registration, State licence or Central licence — renewing the old category is the wrong route; the business needs the licence for the tier it now sits in."
        ],
        practice: ["The renewals that go wrong are rarely complicated; they are late. Licences taken with a one-year validity at first application catch businesses out most often, because the first renewal arrives before anyone has set a reminder."],
        aud: ["A restaurant or cloud kitchen whose FSSAI licence expires in the next few months", "A manufacturer whose production volume has grown since the licence was issued", "A trader that moved warehouse or premises during the licence period"],
        docs: ["Copy of the current FSSAI licence", "Declaration that the licence particulars are unchanged, or details of what has changed", "Food safety management system plan, where the licence category requires one", "Current premises documents if the tenancy or ownership has changed", "Recent water analysis report for manufacturing units, where applicable", "Authorised signatory's identity proof"],
        faq: [
          { q: "Can we change our licence category at renewal?", a: "Not by renewing. If turnover or capacity now falls in a different tier, the business needs the licence for that tier, which is a fresh application to the correct authority. We check the tier before filing anything." },
          { q: "Can the validity period be extended at renewal?", a: "Renewal is filed for a fresh validity period, which can be chosen within the range the regulations allow. A longer period means fewer renewals to track. [[V]]" }
        ]
      },
      "fssai-license-modification": {
        lead: "Modifications to an FSSAI licence — adding food categories, changing capacity, premises details or the responsible person — are filed on FoSCoS before the change takes effect. [[V]]",
        authority: "FSSAI or the State Food Safety Commissioner, as per the licence",
        law: "Food Safety and Standards Act, 2006",
        portal: "FoSCoS",
        instrument: "modified licence"
      }
    }
  },

  "product-certification-bis": {
    authority: "Bureau of Indian Standards (BIS)",
    authorityShort: "BIS",
    law: "Bureau of Indian Standards Act, 2016",
    portal: "the BIS Manak Online portal",
    instrument: "licence",
    intro: [
      "A growing list of products cannot be manufactured, imported or sold in India without BIS certification. Products covered by Quality Control Orders need a BIS licence to use the Standard Mark; notified electronics and IT goods need Compulsory Registration; foreign manufacturers use the FMCS route; and gold jewellery needs hallmarking in notified districts.",
      "This group also covers the other product approvals that sit alongside BIS — packaged-commodity declarations under legal metrology, wireless equipment approval from WPC, SACFA clearance for antenna sites, and CE marking for exports to Europe.",
      "Testing is usually the long pole, so we line up the laboratory and the documents before the application is filed."
    ],
    context: [
      "Products under a Quality Control Order cannot be sold or imported without the BIS mark once the order takes effect, and customs checks this at the border. [[V]]",
      "Testing is done at BIS or BIS-recognised laboratories against the relevant Indian Standard, and test reports have a limited validity for the application. [[V]]",
      "Licences cover specific products, models and factories; a new model or a new factory usually needs an inclusion or a new licence. [[V]]"
    ],
    practice: [
      "Applications stall on mismatches between the test report, the product label and the factory details, so we reconcile all three before filing.",
      "Quality Control Orders are issued and revised regularly; we check whether and when a product becomes covered before a business commits to stock or a launch date."
    ],
    audience: [
      "A manufacturer of a product covered by a Quality Control Order",
      "An importer whose shipment cannot clear customs without the BIS mark",
      "A foreign manufacturer exporting to India",
      "An electronics brand launching a new model",
      "An exporter selling products into the EU"
    ],
    docs: [
      "Product details, specifications and model list",
      "Test reports from a recognised laboratory",
      "Factory address, layout and manufacturing process flow",
      "List of manufacturing and testing equipment",
      "Quality control plan",
      "Trademark or brand ownership documents"
    ],
    faqs: [
      { q: "Can we sell existing stock once a Quality Control Order applies?", a: "Orders usually specify a date after which non-certified products cannot be manufactured, imported or sold; stock-clearing relief, if any, depends on the order itself. [[V]]" },
      { q: "Does a BIS licence cover all our models?", a: "Only the models and variants included in it. New models are added by inclusion, often with fresh test reports. [[V]]" }
    ],
    services: {
      "bis-crs-registration-electronics-and-it-goods": {
        lead: "Compulsory Registration under BIS covers notified electronics and IT goods, which can be sold in India only after testing at a BIS-recognised laboratory and registration against the relevant Indian Standard. [[V]]",
        kind: "registration",
        instrument: "CRS registration"
      },
      "bis-foreign-manufacturers-certification-scheme-fmcs": {
        lead: "Foreign manufacturers of products under BIS's mandatory certification apply through FMCS, which needs an Authorised Indian Representative and a factory inspection by BIS. [[V]]",
        kind: "licence"
      },
      "bis-hallmark-registration-goldsilver": {
        lead: "Hallmarking centres and jewellers register with BIS under the hallmarking scheme; gold hallmarking is mandatory in notified districts, while silver hallmarking has been voluntary. [[V]]",
        kind: "registration",
        instrument: "registration"
      },
      "legal-metrology-packaged-commodities-registration": {
        lead: "Packaged commodities must carry the declarations the Legal Metrology (Packaged Commodities) Rules require — net quantity, retail price, manufacturer or packer details, date — and packers and importers register with the controller. [[V]]",
        authority: "Legal Metrology Department (State) / Director of Legal Metrology (Centre)",
        law: "Legal Metrology Act, 2009",
        kind: "registration",
        instrument: "registration"
      },
      "ce-marking-advisory-export": {
        lead: "CE marking is the manufacturer's declaration that a product meets EU requirements under the applicable directives or regulations, and for some products a notified body must be involved. [[V]]",
        authority: "Manufacturer's declaration; EU notified bodies where required",
        law: "EU product legislation (directives and regulations)",
        kind: "advisory"
      },
      "wpc-equipment-type-approval-eta": {
        lead: "Wireless equipment operating in de-licensed frequency bands needs Equipment Type Approval from the WPC wing of the Department of Telecommunications before import or sale. [[V]]",
        authority: "WPC Wing, Department of Telecommunications",
        law: "Indian Telegraph Act, 1885 / Telecommunications Act, 2023",
        portal: "the Saral Sanchar portal",
        kind: "licence",
        instrument: "ETA"
      },
      "sacfa-clearance-telecom-towers": {
        lead: "SACFA clearance, from the Standing Advisory Committee on Radio Frequency Allocation, is needed for antenna and tower sites so that they do not interfere with other users or with aviation. [[V]]",
        authority: "WPC Wing, Department of Telecommunications (SACFA)",
        law: "Indian Telegraph Act, 1885 / Telecommunications Act, 2023",
        portal: "the Saral Sanchar portal",
        kind: "licence",
        instrument: "SACFA clearance"
      }
    }
  },

  "medical-devices-pharma-and-healthcare": {
    authority: "CDSCO and State Drugs Control Departments; state health departments",
    authorityShort: "the licensing authority",
    law: "Drugs and Cosmetics Act, 1940; Medical Devices Rules, 2017; state clinical establishment laws",
    portal: "the CDSCO or state licensing portal",
    instrument: "licence",
    intro: [
      "Healthcare is licensed at every step. Medicines, cosmetics and medical devices need manufacturing, import or sale licences from CDSCO or the state drugs control department, depending on the product and its risk class. Clinical trials need permission and ethics approval. Hospitals, nursing homes, diagnostic centres and blood centres need establishment registrations and, for radiation equipment, AERB licences. Practitioners need registration with their medical council.",
      "Most of these turn on premises, equipment and qualified people as much as on documents, and inspection before grant is the norm.",
      "We check the product's or facility's classification first, because it decides which authority licenses it and what the inspector will look for."
    ],
    context: [
      "Licensing authorities inspect before grant, so premises, storage and equipment must be ready — and the qualified person in place — before the application is filed. [[V]]",
      "Medical devices are licensed by risk class: lower-risk classes by the state authority, higher-risk ones centrally by CDSCO. [[V]]",
      "Licences are tied to specific premises and products, and changes need approval before they are implemented. [[V]]"
    ],
    practice: [
      "The applications that stall are usually waiting on one thing — the qualified person's credentials, a cold-chain record, or a site plan that does not match the premises.",
      "We prepare clients for the inspection as carefully as for the application, because the inspection is where the decision is made."
    ],
    audience: [
      "A medical device startup moving from prototype to sale",
      "A pharmaceutical or cosmetic manufacturer",
      "A hospital, clinic or diagnostic centre opening a new facility",
      "A pharmacy chain opening outlets",
      "A sponsor running a clinical trial in India",
      "A telemedicine platform or practitioner"
    ],
    docs: [
      "Constitution documents of the applicant",
      "Premises ownership or tenancy proof and site plan",
      "Qualifications and registration of the technical or qualified person",
      "List of equipment and storage facilities",
      "Product or service details and classification",
      "Affidavits and declarations required by the rules"
    ],
    faqs: [
      { q: "Can we start operating while the licence is being processed?", a: "No. Manufacturing, sale or operating a regulated establishment before the licence is granted is an offence. [[V]]" },
      { q: "Who inspects the premises?", a: "Drugs Inspectors for drug and device licences, and the health department's registering authority for establishments; we prepare you for whichever applies." }
    ],
    services: {
      "cdsco-medical-device-registration-class-ab": {
        lead: "Class A and B medical devices — low and low-moderate risk — are licensed for manufacture by the State Licensing Authority under the Medical Devices Rules, 2017, after an audit by a notified body. [[V]]",
        authority: "State Licensing Authority, under the Medical Devices Rules",
        portal: "the CDSCO online portal",
        instrument: "manufacturing licence"
      },
      "cdsco-medical-device-registration-class-cd": {
        lead: "High-risk devices in Classes C and D are licensed for manufacture by the Central Licensing Authority at CDSCO, with an inspection of the manufacturing site. [[V]]",
        authority: "Central Drugs Standard Control Organisation (CDSCO)",
        portal: "the CDSCO online portal",
        instrument: "manufacturing licence"
      },
      "drug-manufacturing-license": {
        lead: "Drug manufacturing licences are granted under the Drugs and Cosmetics Rules by the state licensing authority — jointly with CDSCO for certain categories — after inspection of the premises against Schedule M. [[V]]",
        authority: "State Licensing Authority; CDSCO for specified categories"
      },
      "drug-retail-pharmacy-license": {
        lead: "Retail pharmacies need a licence from the state drugs control department for each outlet, with a registered pharmacist in charge whenever drugs are sold. [[V]]",
        authority: "State Drugs Control Department"
      },
      "cosmetic-product-registration-cdsco": {
        lead: "Cosmetics manufactured in India need a manufacturing licence from the state authority, while imported cosmetics need a registration certificate from CDSCO before they can be imported. [[V]]",
        authority: "CDSCO (imports); State Licensing Authority (manufacture)",
        law: "Drugs and Cosmetics Act, 1940; Cosmetics Rules, 2020",
        kind: "registration",
        instrument: "registration certificate"
      },
      "ayush-manufacturing-license": {
        lead: "Ayurvedic, Siddha, Unani and homoeopathic medicines are manufactured under licences from the state's AYUSH licensing authority under the Drugs and Cosmetics Rules. [[V]]",
        authority: "State AYUSH Licensing Authority"
      },
      "clinical-trial-registration-cdsco": {
        lead: "Clinical trials of new drugs need permission from the Central Licensing Authority under the New Drugs and Clinical Trials Rules, 2019, approval from a registered ethics committee, and registration on CTRI. [[V]]",
        authority: "CDSCO (Central Licensing Authority); Clinical Trials Registry – India",
        law: "New Drugs and Clinical Trials Rules, 2019",
        instrument: "trial permission"
      },
      "clinical-establishment-registration": {
        lead: "Hospitals, clinics and diagnostic centres in states that have adopted the Clinical Establishments Act register with the district registering authority and must meet its minimum standards. [[V]]",
        authority: "District Registering Authority, under the state health department",
        law: "Clinical Establishments (Registration and Regulation) Act, 2010 or state law",
        kind: "registration",
        instrument: "registration"
      },
      "nursing-home-license": {
        lead: "Nursing homes are licensed under the state's own nursing home or private medical establishments law where the Clinical Establishments Act has not been adopted. [[V]]",
        authority: "State health department or local body",
        law: "State nursing home or medical establishments law"
      },
      "diagnostic-centre-license": {
        lead: "Diagnostic centres need registration as clinical establishments and, where they use X-ray, CT or similar equipment, licences from AERB for each radiation-generating unit. [[V]]",
        authority: "State health department; Atomic Energy Regulatory Board (AERB) for radiation equipment"
      },
      "blood-bank-license": {
        lead: "Blood centres are licensed jointly by the state drugs control authority and CDSCO under the Drugs and Cosmetics Rules, with requirements on premises, equipment and qualified staff. [[V]]",
        authority: "State Drugs Control Department and CDSCO"
      },
      "medical-council-registration-advisory": {
        lead: "Doctors must be registered with the National Medical Commission or a State Medical Council before practising, and foreign medical graduates have additional steps to complete. [[V]]",
        authority: "National Medical Commission; State Medical Councils",
        law: "National Medical Commission Act, 2019",
        kind: "advisory"
      },
      "telemedicine-practice-compliance": {
        lead: "Telemedicine practice is governed by the Telemedicine Practice Guidelines, which set out who may consult remotely, how consent is taken and which medicines may be prescribed by teleconsultation. [[V]]",
        authority: "National Medical Commission",
        law: "Telemedicine Practice Guidelines; DPDP Act, 2023",
        kind: "advisory"
      },
      "ayush-clinic-registration": {
        lead: "AYUSH practitioners register with the state board or council for their system of medicine, and their clinics register as clinical establishments where the state requires it. [[V]]",
        authority: "State AYUSH board or council; state health department",
        kind: "registration",
        instrument: "registration"
      }
    }
  },

  "financial-services-licensing-rbi": {
    authority: "Reserve Bank of India",
    authorityShort: "the RBI",
    law: "Reserve Bank of India Act, 1934; Payment and Settlement Systems Act, 2007",
    portal: "the RBI's online application system",
    instrument: "certificate of registration",
    intro: [
      "Lending, holding deposits, moving money and handling financial data are regulated activities, and the RBI licenses each through a different framework: NBFCs and their specialised forms — P2P lending platforms, account aggregators, housing finance companies — under the RBI Act; payment aggregators, prepaid instruments and cross-border payment aggregators under the Payment and Settlement Systems Act; and money changers under FEMA.",
      "Every one of these has minimum net worth or net owned fund requirements, fit-and-proper tests for promoters and directors, and continuing compliance that is as demanding as the application.",
      "We start with the business model, because whether a licence is needed — and which one — depends on exactly what the business does with money and data."
    ],
    context: [
      "Minimum net worth or net owned fund requirements must usually be met before the application is considered, and maintained afterwards. [[V]]",
      "Promoters, directors and key managers are assessed for fit-and-proper status, so their backgrounds are part of the application.",
      "Applications are examined in detail and often take many months, with queries to answer along the way. [[V]]",
      "Regulated entities report to the RBI periodically and are inspected; compliance continues for the life of the licence."
    ],
    practice: [
      "A clear, specific business plan — product flows, risk controls, technology and governance — does more for an RBI application than any presentation.",
      "Many fintechs find a partnership with a licensed entity achieves their goal sooner, and we say so when it does."
    ],
    audience: [
      "A fintech building a lending, payments or data product",
      "Promoters of a new NBFC",
      "An existing NBFC adding a regulated activity",
      "A business handling customer payments for merchants",
      "A company dealing in foreign currency"
    ],
    docs: [
      "Constitution documents and shareholding of the applicant",
      "Audited financials and net worth certificate",
      "Business plan with projections",
      "Fit-and-proper declarations of promoters and directors",
      "Policies on KYC, credit, IT and grievance redress",
      "Details of group companies and regulated entities"
    ],
    faqs: [
      { q: "Can we operate while the application is pending?", a: "No. The regulated activity can start only after authorisation; operating without it is a contravention with serious consequences. [[V]]" },
      { q: "Is a partnership with a bank or NBFC an alternative?", a: "Often. Many products can be offered in partnership with a licensed entity, within the RBI's rules on outsourcing and digital lending. [[V]]" }
    ],
    services: {
      "nbfc-p2p-lending-registration": {
        lead: "P2P lending platforms must be registered with the RBI as NBFC-P2P, acting only as intermediaries — they cannot lend on their own balance sheet — within caps on exposure per lender and borrower. [[V]]"
      },
      "payment-aggregator-authorization-rbi": {
        lead: "Payment aggregators that handle merchants' funds must be authorised by the RBI, meet net worth requirements, and follow its rules on escrow accounts, merchant onboarding and settlement. [[V]]",
        kind: "licence",
        instrument: "authorisation"
      },
      "prepaid-payment-instrument-ppi-license": {
        lead: "Prepaid payment instruments — wallets, gift cards, prepaid cards — issued by non-banks need RBI authorisation under the Payment and Settlement Systems Act, with KYC and loading limits by PPI type. [[V]]",
        kind: "licence",
        instrument: "authorisation"
      },
      "money-changer-license-authorized-dealer": {
        lead: "Full-fledged money changers are authorised by the RBI to buy and sell foreign currency notes and travellers' cheques, subject to net owned fund and compliance requirements. [[V]]",
        law: "Foreign Exchange Management Act, 1999",
        kind: "licence",
        instrument: "authorisation"
      },
      "nidhi-company-rbi-compliance-advisory": {
        lead: "Nidhis are regulated under the Companies Act rather than licensed by the RBI, but their deposit-taking is subject to directions, and staying within the Nidhi Rules is what keeps them outside the RBI's deposit regime. [[V]]",
        authority: "Ministry of Corporate Affairs; RBI directions on deposits",
        law: "Companies Act, 2013; Nidhi Rules, 2014",
        kind: "advisory"
      },
      "housing-finance-company-registration": {
        lead: "Housing finance companies are registered and regulated by the RBI, which took over their regulation from the National Housing Bank, with principal-business and net owned fund requirements. [[V]]"
      },
      "account-aggregator-nbfc-aa-registration": {
        lead: "Account Aggregators are NBFCs licensed by the RBI to move financial data between institutions with the customer's consent; they cannot see or store the data they carry. [[V]]"
      },
      "cross-border-payment-aggregator-authorization-pa-cb": {
        lead: "Cross-border payment aggregators handling payments for imports and exports now need RBI authorisation, which brings onboarding, settlement and reporting obligations for both inward and outward flows. [[V]]",
        kind: "licence",
        instrument: "authorisation"
      }
    }
  },

  "capital-markets-and-insurance-licensing": {
    authority: "SEBI; IRDAI; Department of Telecommunications; Ministry of Information and Broadcasting",
    authorityShort: "the regulator",
    law: "SEBI Act, 1992; Insurance Act, 1938; telecom and broadcasting laws",
    portal: "the regulator's online portal",
    instrument: "registration",
    intro: [
      "Advising on, distributing, managing or rating securities is a SEBI-registered activity, and each role has its own regulations: research analysts, portfolio managers, stock brokers, AIFs, merchant bankers, credit rating agencies, debenture trustees and mutual fund distributors. Insurance intermediaries — brokers, corporate agents, TPAs, surveyors — are licensed by IRDAI on the same principles.",
      "This group also covers telecom and broadcasting authorisations from the Department of Telecommunications and the Ministry of Information and Broadcasting, which share the same pattern: eligibility, net worth, qualified people and continuing obligations.",
      "We begin by fixing exactly which activity the business performs, because the line between advice, distribution and research decides which registration — and which conflicts rules — apply."
    ],
    context: [
      "Each registration carries net worth, qualification or certification requirements for the entity and its key people. [[V]]",
      "Regulations restrict combining certain activities in one entity, to manage conflicts of interest. [[V]]",
      "Registered intermediaries file periodic reports, keep records for set periods and are inspected by the regulator. [[V]]"
    ],
    practice: [
      "Applications are delayed most often by key-person qualifications — certifications not yet obtained or experience that does not fit the definition.",
      "We design the compliance manual with the application, because the regulator will expect it to be operating from the first day."
    ],
    audience: [
      "A wealth or investment platform deciding which SEBI registration it needs",
      "Fund managers launching an AIF or PMS",
      "A financial products distributor adding insurance",
      "An insurance services business",
      "A telecom or broadcasting startup"
    ],
    docs: [
      "Constitution documents and shareholding",
      "Net worth certificate and audited financials",
      "Qualifications and certifications of key personnel",
      "Fit-and-proper declarations",
      "Business plan and compliance policies",
      "Details of group entities and other registrations"
    ],
    faqs: [
      { q: "Can one company hold several SEBI registrations?", a: "Some combinations are allowed, others require separate entities or segregated units to manage conflicts. We check the combination before structuring." },
      { q: "How long does registration take?", a: "It depends on the regulator, the category and how many queries arise; complete applications with qualified key people move fastest. [[V]]" }
    ],
    services: {
      "sebi-research-analyst-registration": {
        lead: "Research analysts who publish research reports or recommendations on listed securities must be registered with SEBI, meet qualification and certification requirements, and separate research from other activities. [[V]]",
        authority: "Securities and Exchange Board of India (SEBI)"
      },
      "sebi-portfolio-manager-registration": {
        lead: "Portfolio managers must be registered with SEBI and meet its net worth requirements, and each client must invest at least the minimum amount SEBI sets. [[V]]",
        authority: "Securities and Exchange Board of India (SEBI)"
      },
      "sebi-stock-broker-registration": {
        lead: "Stock brokers register with SEBI through the stock exchanges they are members of, and carry net worth, risk-management and client-fund segregation obligations. [[V]]",
        authority: "SEBI, through the stock exchanges"
      },
      "alternative-investment-fund-aif-registration": {
        lead: "Alternative investment funds register with SEBI in one of three categories according to strategy, and raise money only from investors who meet the minimum investment requirement. [[V]]",
        authority: "Securities and Exchange Board of India (SEBI)"
      },
      "merchant-banker-registration": {
        lead: "Merchant bankers manage public issues, buybacks, open offers and similar capital-market transactions, and must be registered with SEBI with the net worth its regulations prescribe. [[V]]",
        authority: "Securities and Exchange Board of India (SEBI)"
      },
      "mutual-fund-distributor-amfi-registration": {
        lead: "Mutual fund distributors need an ARN from AMFI after passing the NISM certification, and are bound by SEBI's code of conduct for distributors. [[V]]",
        authority: "Association of Mutual Funds in India (AMFI)",
        instrument: "ARN"
      },
      "credit-rating-agency-registration": {
        lead: "Credit rating agencies must be registered with SEBI and promoted by entities that meet the eligibility criteria in its regulations. [[V]]",
        authority: "Securities and Exchange Board of India (SEBI)"
      },
      "debenture-trustee-registration": {
        lead: "Debenture trustees protect the interests of debenture holders and must be registered with SEBI; only banks, financial institutions, insurers and companies meeting the criteria may act. [[V]]",
        authority: "Securities and Exchange Board of India (SEBI)"
      },
      "irdai-insurance-broker-license": {
        lead: "Insurance brokers are licensed by IRDAI as direct, reinsurance or composite brokers, each with its own capital and net worth requirements and a qualified principal officer. [[V]]",
        authority: "Insurance Regulatory and Development Authority of India (IRDAI)",
        instrument: "licence"
      },
      "irdai-corporate-agent-registration": {
        lead: "Corporate agents distribute insurance for a limited number of insurers in each line of business, under IRDAI registration and through trained specified persons. [[V]]",
        authority: "Insurance Regulatory and Development Authority of India (IRDAI)"
      },
      "telecom-osp-registration-dot": {
        lead: "Other service providers — call centres, BPOs and similar operations — no longer need to register with the Department of Telecommunications since the 2021 guidelines, though some conditions on their connectivity still apply. [[V]]",
        authority: "Department of Telecommunications",
        kind: "advisory"
      },
      "isp-license-internet-service-provider": {
        lead: "Internet service providers need a Unified Licence with ISP authorisation from the Department of Telecommunications, for the category of service area chosen. [[V]]",
        authority: "Department of Telecommunications",
        instrument: "licence"
      },
      "vno-license-virtual-network-operator": {
        lead: "Virtual network operators provide telecom services over another operator's network under a Unified Licence (VNO) authorisation from the Department of Telecommunications. [[V]]",
        authority: "Department of Telecommunications",
        instrument: "licence"
      },
      "dthbroadcasting-license-advisory": {
        lead: "DTH and broadcasting permissions are granted by the Ministry of Information and Broadcasting, with security clearance, eligibility and foreign investment conditions specific to each service. [[V]]",
        authority: "Ministry of Information and Broadcasting",
        kind: "advisory"
      },
      "third-party-administrator-tpa-license": {
        lead: "Third party administrators process health insurance claims for insurers and must be licensed by IRDAI with the capital and qualified staff its regulations require. [[V]]",
        authority: "Insurance Regulatory and Development Authority of India (IRDAI)",
        instrument: "licence"
      },
      "surveyor-and-loss-assessor-license": {
        lead: "Surveyors and loss assessors who assess insurance claims must be licensed by IRDAI in the categories they work in, after the qualifications and training IRDAI prescribes. [[V]]",
        authority: "Insurance Regulatory and Development Authority of India (IRDAI)",
        instrument: "licence"
      }
    }
  }
};
