/* ==========================================================================
   data/site.js — single source of truth for brand, contact channels and
   site-wide stats. Consumed by build.js (Node, via require) and directly
   in the browser (via <script src="/data/site.js">, exposes window.SITE).
   ========================================================================== */
(function (root, factory) {
  var data = factory();
  if (typeof module !== "undefined" && module.exports) {
    module.exports = data;
  } else {
    root.SITE = data;
  }
})(typeof window !== "undefined" ? window : this, function () {
  return {
    name: "LegalG Associates",
    shortName: "LegalG",
    tagline: "People | Law | Progress",
    legalEntity: "LegalG Associates LLP",
    cinOrLlpin: "LLPIN: AAX-0000 (placeholder)", // VERIFY before launch — replace with actual LLPIN
    founded: 2016, // VERIFY before launch

    phone: "+91 98765 43210", // VERIFY before launch
    phoneHref: "tel:+919876543210",
    whatsapp: "+91 98765 43210", // VERIFY before launch
    whatsappHref: "https://wa.me/919876543210",
    email: "advisory@legalgassociates.in", // VERIFY before launch
    emailHref: "mailto:advisory@legalgassociates.in",

    address: {
      line1: "4th Floor, Ashoka Chambers",
      line2: "Residency Road",
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "560025",
      country: "India"
    },

    hours: [
      { day: "Monday – Friday", time: "9:30 AM – 6:30 PM IST" },
      { day: "Saturday", time: "10:00 AM – 2:00 PM IST" },
      { day: "Sunday", time: "Closed" }
    ],

    socials: [
      { label: "LinkedIn", href: "https://linkedin.com/company/legalg-associates" },
      { label: "Twitter", href: "https://twitter.com/legalgassoc" },
      { label: "Facebook", href: "https://facebook.com/legalgassociates" },
      { label: "YouTube", href: "https://youtube.com/@legalgassociates" }
    ],

    /* "Who We Work With" segments — organises by customer type, distinct
       from the "What we handle" panels above it, which organise by practice area.
       Each link's slug must exist in data/navigation.js. */
    segments: [
      {
        name: "Founders incorporating",
        description: "Setting up the entity before you take your first client or raise your first rupee — the structure decision that's expensive to get wrong later.",
        links: [
          { slug: "pvt-ltd-company-registration", title: "Private Limited Company" },
          { slug: "llp-registration", title: "LLP Registration" },
          { slug: "opc-registration", title: "One Person Company" },
          { slug: "startup-india-dpiit-recognition", title: "Startup India Registration" }
        ]
      },
      {
        name: "Growing businesses",
        description: "Monthly and annual filings that don't stop once you're operational — GST, TDS, ROC, and the books behind them.",
        links: [
          { slug: "gst-return-filing", title: "GST Return Filing" },
          { slug: "tds-return-filing", title: "TDS Return Filing" },
          { slug: "roc-annual-compliance", title: "Annual Compliance of a Pvt. Ltd. Company" },
          { slug: "outsourced-accounting-services", title: "Bookkeeping Services" }
        ]
      },
      {
        name: "Manufacturers and importers",
        description: "Product certification and border compliance for anyone making or bringing goods into India — most of it mandatory before you can legally sell.",
        links: [
          { slug: "bis-certification", title: "BIS Registration" },
          { slug: "cdsco-medical-device-registration", title: "CDSCO Registration" },
          { slug: "legal-metrology-registration", title: "Legal Metrology Act Registration" },
          { slug: "epr-registration-plastic-waste", title: "EPR Registration" },
          { slug: "iec-registration", title: "IEC Registration" }
        ]
      },
      {
        name: "NGOs and trusts",
        description: "Registration and tax-exemption filings for non-profits, trusts and societies, including the compliance that keeps foreign funding legal.",
        links: [
          { slug: "section-8-company-registration", title: "Section 8 Company Registration" },
          { slug: "80g-registration", title: "80G Registration" },
          { slug: "12a-registration", title: "12A Registration" },
          { slug: "fcra-registration", title: "FCRA Registration" },
          { slug: "csr-1-filing", title: "NGO CSR-1 Filing" }
        ]
      }
    ],

    /* Search band "Popular services" chips — six, the highest-intent filings.
       Six settles into two balanced rows at desktop; the build fails if a
       slug is not in navigation.js. */
    popularServices: [
      "pvt-ltd-company-registration",
      "gst-registration",
      "trademark-registration",
      "fssai-license-registration",
      "udyam-msme-registration",
      "iec-registration"
    ],

    /* Top-level navigation — the ONE place category labels live. Order here
       is the order in the header, drawer, footer, filters and sitemap.
       dev/gen-navigation.js reads displayLabel from here and fails if a
       taxonomy category is missing or extra. */
    navStructure: {
      order: ["company-registration", "gst-tax", "trademark-ip", "iso-certifications", "licensing", "corporate-advisory"],
      categories: {
        "company-registration": { displayLabel: "Company Setup" },
        "gst-tax": { displayLabel: "GST & Tax" },
        "trademark-ip": { displayLabel: "Trademark & IP" },
        "iso-certifications": { displayLabel: "ISO Certifications" },
        licensing: { displayLabel: "Licensing" },
        "corporate-advisory": { displayLabel: "Corporate & Advisory" }
      }
    },

    /* "What we handle" panels — one per category. Counts, labels and link
       targets come from navigation.js; the build fails if a slug here is
       missing or sits in a different category. Services are the ones people
       arrive searching for, not the first four in the group. */
    categoryPanels: {
      "company-registration": {
        icon: "building",
        description: "Companies Act and LLP Act incorporation, foreign subsidiaries and closures.",
        services: ["pvt-ltd-company-registration", "llp-registration", "opc-registration", "startup-india-dpiit-recognition"]
      },
      "gst-tax": {
        icon: "invoice",
        description: "GSTIN, GSTR-1 and 3B returns, income tax, TDS and ROC annual forms.",
        services: ["gst-registration", "gst-return-filing", "income-tax-return-filing", "roc-annual-compliance"]
      },
      "trademark-ip": {
        icon: "stamp",
        description: "TM-A filings across NICE classes, objection replies, copyright, patents.",
        services: ["trademark-registration", "trademark-objection-reply", "copyright-registration", "patent-filing-provisional"]
      },
      "iso-certifications": {
        icon: "rosette",
        description: "Gap assessment and audit readiness for ISO 9001, 27001, 14001, 22000.",
        services: [
          "iso-9001-quality-management-system-certification",
          "iso-27001-information-security-management-certification",
          "iso-14001-environmental-management-system-certification",
          "iso-22000-food-safety-management-certification"
        ]
      },
      licensing: {
        icon: "sealed-document",
        description: "FSSAI, IEC, BIS and CDSCO licences, CPCB consents and EPR registration.",
        services: ["fssai-license-registration", "iec-registration", "bis-certification", "pollution-control-consent-to-operate"]
      },
      "corporate-advisory": {
        icon: "documents",
        description: "FEMA and SEBI reporting, valuation, shareholder agreements, DPDP, POSH.",
        services: [
          "fdi-reporting-fc-gpr-filing",
          "shareholders-agreement-drafting",
          "dpdp-act-compliance-advisory-digital-personal-data-protection",
          "posh-policy-and-compliance-prevention-of-sexual-harassment"
        ]
      }
    },

    policyLinks: [
      { label: "Privacy Policy", href: "/privacy.html" },
      { label: "Refund Policy", href: "/refund.html" },
      { label: "Terms of Use", href: "/terms.html" },
      { label: "Disclaimer", href: "/disclaimer.html" }
    ],

    paymentMethods: ["UPI", "Visa", "Mastercard", "RuPay", "Net Banking"],

    disclaimer:
      "LegalG Associates LLP is a private consulting firm and is not affiliated with the Ministry of Corporate Affairs, the Central Board of Indirect Taxes and Customs, the Reserve Bank of India, SEBI, BIS, CDSCO, or any other government department. Government fees, stamp duty and statutory charges are separate from, and in addition to, our professional fees, and are payable directly to the relevant authority. Turnaround times quoted on this site are indicative and depend on department processing and the completeness of documents submitted by the client."
  };
});
