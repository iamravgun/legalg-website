/* One-off content generator — NOT part of the shipped build pipeline.
   Builds data/navigation.js from the taxonomy below. Run: node dev/gen-navigation.js */
const fs = require("fs");
const path = require("path");

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[–—]/g, "-")
    .replace(/[()\/,.'’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Explicit slug overrides for the 20 services that already have full
// content in data/services.js — guarantees the mega menu, sitemap and
// services.html link to the SAME slug the rich service page is built at.
const SLUG_OVERRIDES = {
  "Private Limited Company Registration": "pvt-ltd-company-registration",
  "One Person Company Registration": "opc-registration",
  "Limited Liability Partnership Registration": "llp-registration",
  "Udyam (MSME) Registration": "udyam-msme-registration",
  "GST Registration": "gst-registration",
  "GST Return Filing (GSTR-1 & GSTR-3B)": "gst-return-filing",
  "Income Tax Return Filing – Business": "income-tax-return-filing",
  "ROC Annual Filing (AOC-4 & MGT-7)": "roc-annual-compliance",
  "Trademark Registration": "trademark-registration",
  "Trademark Objection Reply": "trademark-objection-reply",
  "Copyright Registration": "copyright-registration",
  "Provisional Patent Filing": "patent-filing-provisional",
  "Import Export Code (IEC) Registration": "iec-registration",
  "FSSAI Food Business License": "fssai-license-registration",
  "BIS Certification – ISI Mark": "bis-certification",
  "CDSCO Medical Device Registration": "cdsco-medical-device-registration",
  "CPCB/SPCB Consent to Operate": "pollution-control-consent-to-operate",
  "EPR Registration – Plastic Waste": "epr-registration-plastic-waste",
  "NBFC Registration Advisory": "nbfc-registration-advisory",
  "SEBI Investment Adviser Registration": "sebi-investment-adviser-registration"
};

const TAXONOMY = [
  {
    slug: "company-registration",
    description: "Incorporate, restructure, and register a business entity — domestic or overseas — under the Companies Act, 2013, the LLP Act, 2008, or a foreign jurisdiction's company law.",
    groups: [
      { label: "Start a Business in India", items: [
        "Private Limited Company Registration", "One Person Company Registration", "Limited Liability Partnership Registration",
        "Partnership Firm Registration", "Sole Proprietorship Registration", "Section 8 Company Registration",
        "Producer Company Registration", "Nidhi Company Registration", "Public Limited Company Registration",
        "Indian Subsidiary Registration", "Startup India DPIIT Recognition", "Udyam (MSME) Registration",
        "Cooperative Society Registration", "Multi-State Cooperative Society Registration", "Farmer Producer Organization (FPO) Registration",
        "Warehouse (WDRA) Registration", "Renewable Energy Project Company Registration", "Microfinance Institution Registration",
        "Real Estate Developer Entity Structuring", "Joint Venture Agreement & Structuring", "Insurance Marketing Firm Registration",
        "Payment Bank Registration Advisory"
      ]},
      { label: "Global Incorporation", items: [
        "USA Delaware C-Corp Registration", "USA Delaware LLC Registration", "USA Wyoming LLC Registration", "USA Nevada LLC Registration",
        "USA California C-Corp Registration", "USA Federal EIN Application", "USA Registered Agent Service", "USA Foreign Qualification Filing",
        "UK Limited Company Registration", "UK LLP Registration", "UK Companies House Annual Filing", "UK VAT Registration", "UK Confirmation Statement Filing",
        "Singapore Pte Ltd Registration", "Singapore GST Registration", "Singapore Employment Pass Advisory",
        "Hong Kong Private Limited Company Registration", "Hong Kong Offshore Bank Account Assistance",
        "UAE Mainland Company Registration", "UAE Free Zone Company Registration – DMCC", "UAE Free Zone Company Registration – IFZA",
        "UAE Offshore Company Registration", "UAE Corporate Tax Registration",
        "Netherlands BV Registration", "Germany GmbH Registration", "Ireland Company Registration", "Switzerland GmbH Registration",
        "France SARL Registration", "Poland Sp. z o.o. Registration",
        "Cayman Islands Company Registration", "British Virgin Islands (BVI) Company Registration", "Mauritius GBC Company Registration",
        "Seychelles Offshore Company Registration", "Panama Company Registration",
        "Australia Pty Ltd Registration", "New Zealand Company Registration", "Japan Kabushiki Kaisha (KK) Registration",
        "China WFOE Registration", "Indonesia PT PMA Registration", "Vietnam Foreign Company Registration",
        "Saudi Arabia Company Registration", "Qatar Company Registration", "Oman Company Registration", "Bahrain Company Registration",
        "Nepal Company Registration", "Bangladesh Company Registration", "Sri Lanka Company Registration",
        "Canada Company Registration", "South Africa Company Registration", "Israel Company Registration",
        "Foreign Company Branch Office Registration (India)", "Foreign Company Liaison Office Registration (India)", "Overseas Investment (ODI) Filing"
      ]},
      { label: "Restructuring & Statutory Registrations", items: [
        "Proprietorship to Private Limited Conversion", "Partnership to LLP Conversion", "LLP to Private Limited Conversion",
        "Private Limited to Public Limited Conversion", "One Person Company to Private Limited Conversion",
        "Change in Registered Office Address", "Change of Company Name", "Addition or Removal of Director", "Change in LLP Partners",
        "Digital Signature Certificate (DSC)", "Director Identification Number (DIN)", "Shop & Establishment Registration",
        "Professional Tax Registration", "Trade License Registration", "EPFO Registration", "ESIC Registration"
      ]},
      { label: "Closure & Winding Up", items: [
        "Fast Track Exit / Strike Off (Private Limited)", "LLP Strike Off", "Voluntary Winding Up of Company",
        "Nidhi Company Winding Up", "Section 8 Company Closure", "Dormant Company Status Application", "Insolvency Resolution Advisory"
      ]},
      { label: "NGO, Non-Profit & Government Schemes", items: [
        "Trust Registration", "Society Registration", "NGO Darpan Registration", "12A Registration", "80G Registration",
        "FCRA Registration", "CSR-1 Filing", "Startup India Seed Fund Scheme Application", "Stand-Up India Scheme Registration",
        "PMEGP Loan Scheme Application", "CGTMSE Collateral-Free Loan Registration", "ZED Certification (Zero Defect Zero Effect)",
        "District Industries Centre (DIC) Registration"
      ]},
      { label: "Virtual Office & Trade Licenses", items: [
        "Virtual Office for GST Registration", "Virtual Office for Company Registration", "Registered Agent & Compliance Address Service",
        "Business Correspondence Mailroom Service", "Liquor License", "Drug License", "Money Lending License", "Chit Fund Registration",
        "Travel Agency License (IATA/Government)", "Placement Agency License", "Private Security Agency License (PSARA)",
        "Gas Agency Dealership Registration", "Petrol Pump License Advisory", "LPG Distributorship Registration"
      ]},
      { label: "Compliance Retainers & Financial Setup", items: [
        "Virtual CFO Services", "Compliance Calendar Management Retainer", "Outsourced Company Secretary Services",
        "Outsourced Accounting Services", "Payroll Outsourcing Services", "Statutory Compliance Audit Retainer", "Legal Retainer for Startups",
        "Current Account Opening Assistance (India)", "Foreign Currency Account Assistance", "Payment Gateway Integration Advisory",
        "Merchant Onboarding Advisory (Razorpay/Stripe)", "Escrow Account Setup Advisory", "Corporate Credit Card Setup Advisory"
      ]}
    ]
  },
  {
    slug: "gst-tax",
    description: "Registration, periodic filing, advisory and litigation support across GST, income tax, TDS and payroll statutory dues.",
    groups: [
      { label: "GST Registration & Returns", items: [
        "GST Registration", "GST Registration for E-commerce Sellers", "GST Registration for Non-Resident Taxable Person",
        "GST Registration for Casual Taxable Person", "GST Registration Cancellation", "GST Registration Revocation", "GSTIN Core Field Amendment",
        "GSTR-1 Filing", "GSTR-3B Filing", "GST Return Filing (GSTR-1 & GSTR-3B)", "GSTR-4 Filing (Composition Scheme)",
        "GSTR-9 Annual Return Filing", "GSTR-9C Reconciliation Statement", "GST Nil Return Filing",
        "GST LUT Filing (Letter of Undertaking)", "GST ITC-04 Filing (Job Work)", "QRMP Scheme Return Filing"
      ]},
      { label: "GST Advisory, Litigation & Sector Rules", items: [
        "GST Audit", "GST Show-Cause Notice Reply", "GST Appeal Filing (Appellate Authority)", "GST Refund Application",
        "GST Health Check-up Review", "Input Tax Credit Reconciliation", "Anti-Profiteering Compliance Advisory",
        "GST for SEZ Units", "GST on Cross-Border Digital Services (OIDAR)", "Reverse Charge Mechanism Advisory",
        "GST TDS/TCS Compliance (E-commerce Operators)", "GST Audit for Composition Dealers", "GST Impact Assessment Study"
      ]},
      { label: "Income Tax Filing & Certificates", items: [
        "Income Tax Return Filing – Individual", "Income Tax Return Filing – Business", "Tax Audit under Section 44AB",
        "TDS Return Filing", "TCS Return Filing", "Advance Tax Computation & Payment", "Form 15CA/15CB Filing",
        "Income Tax Notice Reply", "Income Tax Appeal Filing (CIT-A)", "PAN Card Application", "TAN Application",
        "Lower/Nil TDS Deduction Certificate", "Form 26AS / AIS Reconciliation", "Income Tax Refund Follow-up",
        "Assessment Proceedings Representation", "Income Tax Clearance Certificate", "Form 16/16A Issuance Advisory"
      ]},
      { label: "ROC & Corporate Compliance", items: [
        "ROC Annual Filing (AOC-4 & MGT-7)", "LLP Annual Filing (Form 8 & Form 11)", "DIR-3 KYC Filing",
        "DPT-3 Filing (Return of Deposits)", "MSME Form 1 Filing", "Annual General Meeting Compliance",
        "Board Meeting & Minutes Compliance", "Statutory Audit Coordination", "Secretarial Audit (Form MR-3)", "XBRL Filing",
        "Charge Creation/Satisfaction (CHG-1/CHG-4) Filing", "Registered Office Change Intimation (INC-22)"
      ]},
      { label: "Payroll & Labour Statutory Dues", items: [
        "PF (EPFO) Return Filing", "ESIC Return Filing", "Professional Tax Return Filing", "Payroll Processing & Compliance",
        "Gratuity Compliance Advisory", "Labour Welfare Fund Compliance", "Bonus Act Compliance"
      ]},
      { label: "International & Customs Tax", items: [
        "DTAA Advisory", "Transfer Pricing Study & Documentation", "Form 10F Filing", "Tax Residency Certificate",
        "NRI Taxation Services", "Equalisation Levy Compliance", "FEMA Advisory for NRI Remittances", "Foreign Remittance Tax Compliance (15CA-CB)",
        "Customs Duty Advisory", "Bill of Entry Filing", "Shipping Bill Filing", "Duty Drawback Claim",
        "Advance Authorization Scheme Filing", "EPCG Scheme Registration", "SEZ Unit Compliance Advisory", "Customs Bonded Warehouse License"
      ]},
      { label: "Tax Planning, State & Local Compliance", items: [
        "Corporate Tax Planning", "Startup Tax Structuring", "ESOP Taxation Advisory", "Capital Gains Tax Advisory",
        "Succession & Wealth Tax Planning", "Tax Due Diligence", "HNI Tax Residency Planning",
        "Stamp Duty Advisory", "Property Tax Compliance Advisory", "Entertainment Tax Registration", "State Excise Duty Compliance",
        "Municipal Trade License Renewal", "Local Body Tax Advisory", "Profession Tax Enrollment for Employers"
      ]},
      { label: "Special Economic Zones & Industry Tax", items: [
        "Equalisation Levy Registration", "Software Technology Parks (STPI) Registration", "EOU (Export Oriented Unit) Registration",
        "SEZ Unit Registration", "Free Trade Warehousing Zone Registration", "Customs Broker License",
        "E-commerce Seller Tax Compliance", "Freelancer & Gig Worker Tax Advisory", "Real Estate Sector GST Advisory",
        "Works Contract GST Advisory", "Restaurant & Hospitality GST Advisory", "Healthcare Sector Tax Exemption Advisory",
        "Educational Institution Tax Exemption (12AA)", "IT/ITES Sector Tax Advisory"
      ]}
    ]
  },
  {
    slug: "trademark-ip",
    description: "Registration and enforcement of trademarks, copyrights, patents and designs, plus IP portfolio management.",
    groups: [
      { label: "Trademark", items: [
        "Trademark Registration", "Trademark Search & Clearance", "Trademark Objection Reply", "Trademark Opposition Filing",
        "Trademark Hearing Representation", "Trademark Renewal", "Trademark Assignment", "Trademark Licensing Agreement",
        "Trademark Watch Service", "Trademark Infringement Suit Advisory", "Well-Known Trademark Application"
      ]},
      { label: "International Trademark & GI", items: [
        "Madrid Protocol International Trademark Filing", "US Trademark Registration", "UK Trademark Registration",
        "EU Trademark Registration (EUIPO)", "UAE Trademark Registration", "Geographical Indication (GI) Registration",
        "Plant Variety Protection Registration", "Semiconductor Layout Design Registration", "Trade Secret Protection Advisory",
        "Traditional Knowledge Digital Library Advisory", "Integrated GI Registration for Agricultural Products"
      ]},
      { label: "Copyright", items: [
        "Copyright Registration", "Copyright Registration – Literary Work", "Copyright Registration – Software/Source Code",
        "Copyright Registration – Artistic Work", "Copyright Registration – Music & Sound Recording",
        "Copyright Assignment Agreement", "Copyright Infringement Notice"
      ]},
      { label: "Patent", items: [
        "Provisional Patent Filing", "Complete Patent Specification Filing", "Patentability Search", "PCT International Patent Filing",
        "Patent Examination Response", "Patent Renewal (Annuity) Filing", "Patent Infringement Advisory",
        "Patent Opposition (Pre-Grant/Post-Grant)", "Patent Working Statement (Form 27) Filing"
      ]},
      { label: "Designs", items: [
        "Industrial Design Registration", "Design Registration Renewal"
      ]},
      { label: "IP Enforcement, Advisory & Commercialisation", items: [
        "Cease and Desist Notice", "IP Infringement Suit Filing", "Customs IP Recordal (Anti-Counterfeiting)",
        "Domain Name Dispute Resolution (INDRP/UDRP)", "IP Due Diligence", "IP Portfolio Audit", "Trademark Portfolio Management",
        "IP Licensing Strategy Advisory", "Franchise IP Structuring", "Technology Transfer Agreement", "IP Valuation",
        "Start-up IP Audit", "Patent Portfolio Management"
      ]},
      { label: "Digital IP, Franchise & Emerging Tech", items: [
        "Domain Name Registration Advisory", "Website Terms & IP Compliance Audit", "App Store IP Compliance Advisory",
        "Software Licensing Agreement Drafting", "Open Source Compliance Audit", "Franchise Disclosure Document Drafting",
        "Brand Licensing Advisory", "Merchandising Rights Agreement", "Co-branding Agreement Drafting", "IP Assignment for M&A",
        "AI-Generated Work Copyright Advisory", "Blockchain/NFT IP Advisory", "Data & Database Rights Protection",
        "Trade Dress Protection Advisory", "Personality Rights Protection Advisory"
      ]}
    ]
  },
  {
    slug: "iso-certifications",
    description: "Management-system certification against ISO and allied standards — scoping, gap assessment, documentation and audit readiness with an accredited certification body.",
    groups: [
      { label: "Quality, Environment & Safety", items: [
        "ISO 9001 – Quality Management System Certification", "ISO 14001 – Environmental Management System Certification",
        "ISO 45001 – Occupational Health & Safety Certification", "ISO 50001 – Energy Management System Certification"
      ]},
      { label: "Information Security & Continuity", items: [
        "ISO 27001 – Information Security Management Certification", "ISO 20000-1 – IT Service Management Certification",
        "ISO 22301 – Business Continuity Management Certification"
      ]},
      { label: "Food, Health & Laboratory", items: [
        "ISO 22000 – Food Safety Management Certification", "ISO 13485 – Medical Devices Quality Management Certification",
        "ISO/IEC 17025 – Testing & Calibration Laboratory Accreditation", "HACCP Certification", "GMP (Good Manufacturing Practice) Certification"
      ]},
      // VERIFY before launch — ISO 31000 and ISO 26000 are guidance standards with no certifiable requirements.
      { label: "Governance & Risk", items: [
        "ISO 37001 – Anti-Bribery Management System Certification", "ISO 31000 – Risk Management Certification",
        "ISO 26000 – Social Responsibility Certification"
      ]}
    ]
  },
  {
    slug: "licensing",
    description: "Sector licences, product certifications and environmental permits — trade, food safety, healthcare, financial services, telecom, pollution control and EPR.",
    groups: [
      { section: "Licences & Registrations", label: "Trade & Food Business Licenses", items: [
        "Import Export Code (IEC) Registration", "DGFT Advance Authorization", "AEO (Authorized Economic Operator) Certification",
        "Legal Metrology Registration", "BIS Hallmarking License (Jewellery)", "RCMC Registration (Registration cum Membership Certificate)",
        "FSSAI Food Business License", "FSSAI Basic Registration", "FSSAI State License", "FSSAI Central License",
        "FSSAI License Renewal", "FSSAI License Modification"
      ]},
      { section: "Licences & Registrations", label: "Product Certification (BIS)", items: [
        "BIS Certification – ISI Mark", "BIS CRS Registration (Electronics & IT Goods)", "BIS Foreign Manufacturers Certification Scheme (FMCS)",
        "BIS Hallmark Registration (Gold/Silver)", "Legal Metrology (Packaged Commodities) Registration", "CE Marking Advisory (Export)",
        "WPC Equipment Type Approval (ETA)", "SACFA Clearance (Telecom Towers)"
      ]},
      { section: "Licences & Registrations", label: "Medical Devices, Pharma & Healthcare", items: [
        "CDSCO Medical Device Registration", "CDSCO Medical Device Registration – Class A/B", "CDSCO Medical Device Registration – Class C/D",
        "Drug Manufacturing License", "Drug Wholesale License", "Drug Retail (Pharmacy) License", "Cosmetic Product Registration (CDSCO)",
        "Ayush Manufacturing License", "Clinical Trial Registration (CDSCO)", "Clinical Establishment Registration", "Nursing Home License",
        "Diagnostic Centre License", "Blood Bank License", "Medical Council Registration Advisory", "Telemedicine Practice Compliance",
        "AYUSH Clinic Registration"
      ]},
      { section: "Licences & Registrations", label: "Financial Services Licensing (RBI)", items: [
        "NBFC Registration Advisory", "NBFC-P2P Lending Registration", "Payment Aggregator Authorization (RBI)",
        "Prepaid Payment Instrument (PPI) License", "Money Changer License (Authorized Dealer)", "Nidhi Company RBI Compliance Advisory",
        "Housing Finance Company Registration", "Account Aggregator (NBFC-AA) Registration", "Cross-Border Payment Aggregator Authorization (PA-CB)"
      ]},
      { section: "Licences & Registrations", label: "Capital Markets & Insurance Licensing", items: [
        "SEBI Investment Adviser Registration", "SEBI Research Analyst Registration", "SEBI Portfolio Manager Registration",
        "SEBI Stock Broker Registration", "Alternative Investment Fund (AIF) Registration", "Merchant Banker Registration",
        "Mutual Fund Distributor (AMFI) Registration", "Credit Rating Agency Registration", "Debenture Trustee Registration",
        "IRDAI Insurance Broker License", "IRDAI Corporate Agent Registration", "Telecom OSP Registration (DoT)",
        "ISP License (Internet Service Provider)", "VNO License (Virtual Network Operator)", "DTH/Broadcasting License Advisory",
        "Third Party Administrator (TPA) License", "Surveyor & Loss Assessor License"
      ]},
      { section: "Licences & Registrations", label: "Other Sector & Additional Certifications", items: [
        "Fire Safety NOC / License", "Factory License (Factories Act)",
        "Real Estate Project Registration (RERA)", "Real Estate Agent Registration (RERA)", "Weights & Measures Dealer License",
        "Halal Certification", "Organic Certification (NPOP)", "AGMARK Certification", "Kosher Certification",
        "Star Rating Certification (BEE) for Appliances",
        "Textile Committee Registration", "Jute Packaging Compliance", "Coffee Board Registration", "Tea Board Registration",
        "Spices Board Registration", "APEDA Registration (Agricultural Exports)"
      ]},
      { section: "Licences & Registrations", label: "Education, Skill & Transport Licensing", items: [
        "School Recognition & Affiliation Advisory", "University/College Approval Advisory (UGC/AICTE)", "Coaching Institute Registration",
        "Vocational Training Centre Registration (NSDC)", "Online Education Platform Compliance", "Skill Development Council Registration",
        "Transport Permit (National/State)", "Warehouse License", "Cold Storage License", "Courier Service License",
        "Logistics Aggregator Compliance", "Fleet Operator Registration", "Goods Carriage Permit"
      ]},
      { section: "Environmental & Waste", label: "Environmental Compliance", items: [
        "CPCB/SPCB Consent to Establish", "CPCB/SPCB Consent to Operate", "Pollution Control Board NOC (Consent)",
        "Environmental Clearance (EIA)", "Hazardous Waste Authorization", "Bio-Medical Waste Authorization", "E-Waste Authorization",
        "Water Cess Compliance", "Noise Pollution NOC", "Forest Clearance Advisory"
      ]},
      { section: "Environmental & Waste", label: "Extended Producer Responsibility (EPR)", items: [
        "EPR Registration – Plastic Waste", "EPR Registration – E-Waste", "EPR Registration – Battery Waste",
        "EPR Registration – Tyre Waste", "EPR Registration – Used Oil", "EPR Annual Return Filing"
      ]},
      { section: "Environmental & Waste", label: "ESG & Sustainability", items: [
        "ESG Reporting Advisory", "BRSR (Business Responsibility & Sustainability Report) Compliance",
        "Carbon Credit Registration Advisory", "Sustainability Audit", "Green Bond Advisory", "Climate Risk Disclosure Advisory",
        "Circular Economy Compliance Advisory", "Green Building Certification Advisory (IGBC/LEED)"
      ]}
    ]
  },
  {
    slug: "corporate-advisory",
    description: "Ongoing corporate-law work for operating companies — governance, FEMA and SEBI obligations, valuation, transaction documents, fundraising, employment and data protection.",
    groups: [
      { label: "Corporate Governance & Secretarial", items: [
        "Corporate Governance Advisory", "CSR Policy Drafting & Compliance", "Related Party Transaction Compliance",
        "Whistleblower Policy Drafting", "POSH Policy & Compliance (Prevention of Sexual Harassment)", "Board Evaluation Advisory"
      ]},
      { label: "FEMA & Foreign Investment", items: [
        "FDI Reporting (FC-GPR Filing)", "FLA Return Filing (Foreign Liabilities & Assets)", "ODI Compliance (Overseas Direct Investment)",
        "FEMA Compliance Advisory", "External Commercial Borrowing (ECB) Advisory", "Liaison Office Annual Activity Certificate",
        "RBI Compounding Application", "Compounding of FEMA Contraventions", "Branch Office Compliance Certificate"
      ]},
      { label: "SEBI & Listed Company Compliance", items: [
        "SEBI LODR Compliance Advisory", "Insider Trading Code Compliance", "Takeover Code (SAST) Advisory",
        "Delisting of Securities Advisory", "Buyback of Shares Compliance", "Rights Issue / Preferential Allotment Compliance"
      ]},
      { label: "Valuation & Due Diligence", items: [
        "Business Valuation (Registered Valuer)", "Startup Valuation for FEMA/Income Tax", "Merger & Acquisition Due Diligence",
        "Financial Due Diligence", "Legal Due Diligence", "Share Valuation for ESOP", "Fairness Opinion for M&A"
      ]},
      { label: "Contracts & Agreements", items: [
        "Founders' Agreement Drafting", "Shareholders' Agreement Drafting", "Employment Agreement Drafting",
        "Non-Disclosure Agreement (NDA) Drafting", "Vendor & Service Agreement Drafting", "Franchise Agreement Drafting",
        "Terms of Use & Privacy Policy Drafting", "Distribution Agreement Drafting", "Loan Agreement Drafting",
        "Commercial Licensing Agreement Drafting"
      ]},
      { label: "Startup Funding & Investment", items: [
        "Startup India Tax Exemption (80-IAC) Application", "Angel Tax Exemption Advisory", "ESOP Pool Structuring",
        "SAFE/Convertible Note Drafting", "Term Sheet Advisory", "Cap Table Management Advisory",
        "Due Diligence Data Room Preparation", "Series Funding Round Compliance"
      ]},
      { label: "Employment & Labour Compliance", items: [
        "HR Policy Manual Drafting", "Employee Stock Option Plan (ESOP) Administration", "Contract Labour License (CLRA)",
        "Inter-State Migrant Workman License", "Maternity Benefit Act Compliance", "Equal Remuneration Act Compliance",
        "Standing Orders Certification"
      ]},
      { label: "Data Protection & Cyber", items: [
        "DPDP Act Compliance Advisory (Digital Personal Data Protection)", "Data Protection Officer Appointment Advisory",
        "Privacy Impact Assessment", "Cross-Border Data Transfer Compliance", "Cyber Security Compliance Audit",
        "CERT-In Incident Reporting Compliance"
      ]}
    ]
  }
];


// ---- Build --------------------------------------------------------------
const usedSlugs = new Set();
function makeSlug(title) {
  let base = SLUG_OVERRIDES[title] || slugify(title);
  let candidate = base;
  let n = 2;
  while (usedSlugs.has(candidate)) {
    candidate = `${base}-${n++}`;
  }
  usedSlugs.add(candidate);
  return candidate;
}

// Category labels and order come from data/site.js navStructure — the
// single source every surface (nav, footer, breadcrumbs, filters, sitemap)
// reads from. Fail loudly if the two ever disagree.
const { navStructure } = require(path.join(__dirname, "..", "data", "site.js"));
const taxonomySlugs = TAXONOMY.map((c) => c.slug).sort().join(",");
if (taxonomySlugs !== navStructure.order.slice().sort().join(",")) {
  throw new Error(`navStructure.order (${navStructure.order}) does not match TAXONOMY (${taxonomySlugs})`);
}

const navigation = [];
const allServices = [];
let totalGroups = 0;

for (const catSlug of navStructure.order) {
  const cat = TAXONOMY.find((c) => c.slug === catSlug);
  const label = navStructure.categories[catSlug].displayLabel;
  const groups = [];
  for (const g of cat.groups) {
    const groupSlug = slugify(g.label);
    const services = g.items.map((title) => {
      const slug = makeSlug(title);
      const entry = { slug, title };
      allServices.push({ slug, title, category: cat.slug, categoryLabel: label, group: g.label, groupSlug });
      return entry;
    });
    const group = { slug: groupSlug, label: g.label, services };
    if (g.section) group.section = g.section;
    groups.push(group);
    totalGroups++;
  }
  navigation.push({ slug: cat.slug, label, description: cat.description, groups });
}

const navStats = {
  totalServices: allServices.length,
  totalCategories: navigation.length,
  totalGroups,
  byCategory: navigation.reduce((acc, cat) => {
    acc[cat.slug] = {
      label: cat.label,
      groupCount: cat.groups.length,
      serviceCount: cat.groups.reduce((n, g) => n + g.services.length, 0)
    };
    return acc;
  }, {})
};


const footerGroups = navigation.map((cat) => ({
  label: cat.label,
  slug: cat.slug,
  links: cat.groups.map((g) => ({ label: g.label, href: `/category/${g.slug}.html` }))
}));

const out = `/* ==========================================================================
   data/navigation.js — full mega-menu tree. GENERATED by dev/gen-navigation.js
   — do not hand-edit; edit the taxonomy there and regenerate.

   navigation:  ${navigation.length} categories -> ${totalGroups} groups -> ${allServices.length} services
   Exports: navigation, allServices, navStats, footerGroups.
   (Homepage popular links live in data/site.js popularServices.)
   Every one of the 20 services with full content in data/services.js shares
   its exact slug here (see SLUG_OVERRIDES in the generator).
   ========================================================================== */
(function (root, factory) {
  var data = factory();
  if (typeof module !== "undefined" && module.exports) {
    module.exports = data;
  } else {
    root.NAVIGATION = data;
  }
})(typeof window !== "undefined" ? window : this, function () {
  var navigation = ${JSON.stringify(navigation, null, 2)};
  var allServices = ${JSON.stringify(allServices, null, 2)};
  var navStats = ${JSON.stringify(navStats, null, 2)};
  var footerGroups = ${JSON.stringify(footerGroups, null, 2)};
  return { navigation: navigation, allServices: allServices, navStats: navStats, footerGroups: footerGroups };
});
`;

fs.writeFileSync(path.join(__dirname, "..", "data", "navigation.js"), out);
console.log(`navigation.js written: ${navigation.length} categories, ${totalGroups} groups, ${allServices.length} services`);
console.log(JSON.stringify(navStats.byCategory, null, 2));
