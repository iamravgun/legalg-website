/* ISO Certifications — four groups. */
const CB = "Accredited certification body (NABCB or IAF-recognised)";
const base = {
  authority: CB,
  authorityShort: "the certification body",
  law: "Voluntary international standard",
  instrument: "certificate"
};
const sharedContext = [
  "Certification audits run in two stages — a readiness and documentation review, then an audit of the system in use — followed by surveillance audits during the certificate's cycle. [[V]]",
  "Certificates are only as credible as the body that issues them; accreditation by NABCB or another IAF-recognised body is what customers and tender committees check. [[V]]",
  "The standards share a common high-level structure, so organisations certified to one can add another without building a second system.",
  "Certification does not replace legal obligations; the standards expect you to know which laws apply to you and to show that you comply."
];
const sharedPractice = [
  "Auditors look past the manual to how work is actually done, so we build the system around existing practice and document what people really do.",
  "A management review that management actually attended, and an internal audit that found something, are what auditors want to see — a system with no findings is not credible."
];
const sharedFaqs = [
  { q: "Does LegalG issue the certificate?", a: "No. An independent, accredited certification body audits and certifies. We prepare your organisation for that audit; a consultant certifying its own client would not be credible." },
  { q: "How do we check that a certificate is genuine?", a: "Check that the certification body is accredited by NABCB or another IAF-recognised accreditation body, and look the certificate up on the body's or IAF's database. [[V]]" },
  { q: "How long does it take to get ready?", a: "It depends on size, sites and how much is already documented. Small single-site organisations are usually quicker than multi-site ones; we estimate after the gap assessment. [[V]]" }
];

module.exports = {
  "quality-environment-and-safety": Object.assign({}, base, {
    intro: [
      "Quality, environment, safety and energy are the four management systems most often asked for in supplier panels and tenders: ISO 9001, ISO 14001, ISO 45001 and ISO 50001. Each sets out what an organisation must do to manage that area as a system — policy, objectives, risk, operational control, monitoring and improvement — rather than as a set of good intentions.",
      "Because they share a common structure, the four can be run as one integrated management system with combined audits, which is how many manufacturing sites hold them.",
      "We build the system around how the site already works, then prepare it for an accredited certification body's audit."
    ],
    context: sharedContext,
    practice: sharedPractice,
    audience: [
      "A manufacturer whose customers require certified suppliers",
      "A company bidding for government or PSU tenders",
      "A site preparing for customer or insurer audits",
      "An organisation already holding one ISO certificate and adding another",
      "An energy-intensive plant looking to manage consumption"
    ],
    docs: [
      "Organisation chart and list of sites in scope",
      "Description of products, services and key processes",
      "Existing procedures, records and registers",
      "Applicable statutory licences and compliance records",
      "Incident, complaint and corrective action records",
      "Training and competence records"
    ],
    faqs: sharedFaqs,
    services: {
      "iso-14001-environmental-management-system-certification": {
        lead: "Environmental management under ISO 14001 starts by identifying the environmental aspects of what an organisation does — emissions, effluent, waste, resource use — and controlling the significant ones within a system that tracks legal compliance.",
        ctx: ["For Indian sites the legal register usually runs through pollution control consents, waste authorisations and EPR obligations, which the system has to show are current. [[V]]"],
        aud: ["A manufacturing unit holding SPCB consents and waste authorisations"]
      },
      "iso-45001-occupational-health-and-safety-certification": {
        lead: "Who actually needs ISO 45001? Manufacturing and construction firms whose tenders ask for a certified safety management system, to take one example. ISO 45001 sets out how an organisation should run occupational health and safety as a managed system: hazards identified and assessed, legal requirements tracked, workers consulted, incidents investigated, and performance reviewed and improved.",
        ctx: ["It replaced OHSAS 18001 as the recognised safety management standard. [[V]]"],
        practice: ["Auditors look past the manual to the shop floor. A risk register written in an office, with no evidence that supervisors or workers were consulted, is the finding we most often see in a first stage-two audit."],
        aud: ["Contractors working on client sites that require certified safety systems"],
        docs: ["Organisation chart and the list of sites in scope", "Existing hazard and risk register, or the raw information to build one", "Statutory licences, safety registers and inspection records for each site", "Incident and near-miss records", "Training and competence records for safety-critical roles"],
        faq: { q: "Is ISO 45001 a legal requirement?", a: "No. It is voluntary. Your statutory safety obligations apply whether or not you are certified; the standard is a way of managing them and showing that you do." }
      },
      "iso-50001-energy-management-system-certification": {
        lead: "Energy is the one input ISO 50001 is built around: an energy review identifies significant energy uses, a baseline is set, and performance is measured against it with indicators the organisation chooses.",
        aud: ["A plant in a sector notified under energy conservation law, or with high power costs"]
      }
    }
  }),

  "information-security-and-continuity": Object.assign({}, base, {
    intro: [
      "Information security, IT service management and business continuity are the standards technology and services businesses are asked about most: ISO/IEC 27001, ISO/IEC 20000-1 and ISO 22301. Each is a management system built on risk — what could go wrong with information, services or operations, and how the organisation controls it.",
      "For SaaS companies, IT service providers, fintechs and outsourcing businesses, these certificates often answer much of a customer's security questionnaire in one document.",
      "We scope each system to the services customers actually buy, which keeps it auditable and keeps the certificate meaningful."
    ],
    context: sharedContext,
    practice: sharedPractice,
    audience: [
      "A SaaS or IT services company selling to enterprise customers",
      "A fintech or healthtech business holding sensitive data",
      "An outsourcing or managed services provider",
      "An organisation preparing for regulator or customer audits"
    ],
    docs: [
      "Description of services, systems and locations in scope",
      "Asset and supplier inventories",
      "Existing policies and procedures",
      "Incident and service-level records",
      "Organisation chart and roles"
    ],
    faqs: sharedFaqs,
    services: {
      "iso-20000-1-it-service-management-certification": {
        lead: "IT service management under ISO/IEC 20000-1 covers how services are designed, transitioned, delivered and improved — service levels, incident and change management, capacity and supplier control.",
        aud: ["A managed services provider whose contracts are measured on SLAs"]
      },
      "iso-22301-business-continuity-management-certification": {
        lead: "Business continuity under ISO 22301 begins with a business impact analysis that decides which activities must be restored first and how quickly, and then tests the plans that achieve it.",
        aud: ["A bank technology vendor or payment processor with continuity obligations to clients"]
      }
    }
  }),

  "food-health-and-laboratory": Object.assign({}, base, {
    intro: [
      "Food, healthcare and laboratory businesses are judged on safety and accuracy, and the standards in this group are how they show it. ISO 22000 and HACCP for food safety; ISO 13485 for medical device quality; GMP for manufacturing practice; and ISO/IEC 17025 for the technical competence of testing and calibration laboratories.",
      "Some of these interact directly with Indian regulators: GMP for drugs is enforced through the drug regulators' inspections, medical device quality systems are expected under the Medical Devices Rules, and laboratory accreditation is granted by NABL rather than certified. [[V]]",
      "We prepare the system and the records the auditor or assessor will examine, and tell you which body actually grants what."
    ],
    context: [
      sharedContext[0],
      "Food and health standards are audited against records — temperature logs, batch records, calibration certificates — so record-keeping is most of the work.",
      "Where a regulator also inspects, the system is built so the same records satisfy both the certifying body and the inspector."
    ],
    practice: sharedPractice,
    audience: [
      "A food manufacturer or processor supplying retailers or exporting",
      "A medical device manufacturer preparing for CDSCO licensing",
      "A testing or calibration laboratory seeking accreditation",
      "A pharmaceutical, cosmetic or nutraceutical manufacturer"
    ],
    docs: [
      "Process flow diagrams and plant layout",
      "Existing procedures and batch or production records",
      "Licences held under the applicable regulator",
      "Calibration and maintenance records",
      "Training records of production and quality staff"
    ],
    faqs: sharedFaqs.slice(0, 2),
    services: {
      "iso-22000-food-safety-management-certification": {
        lead: "Food safety management under ISO 22000 combines HACCP principles with prerequisite programmes and a management system around them, covering the whole food chain from farm to retail.",
        aud: ["A food processor supplying modern retail or export buyers"]
      },
      "iso-13485-medical-devices-quality-management-certification": {
        lead: "Medical device manufacturers use ISO 13485 as their quality management standard, and India's Medical Devices Rules expect manufacturers to maintain a quality system in line with it. [[V]]",
        aud: ["A device manufacturer applying for a CDSCO manufacturing licence"]
      },
      "isoiec-17025-testing-and-calibration-laboratory-accreditation": {
        lead: "Laboratories are accredited, not certified, to ISO/IEC 17025 — in India by NABL — which assesses their technical competence for the specific tests or calibrations in the scope. [[V]]",
        authority: "National Accreditation Board for Testing and Calibration Laboratories (NABL)",
        authorityShort: "NABL",
        instrument: "accreditation",
        aud: ["A testing laboratory whose reports must be accepted by regulators or buyers"]
      },
      "haccp-certification": {
        lead: "HACCP is a food safety method rather than a management-system standard: hazards are analysed, critical control points identified, limits set, and those points monitored and verified.",
        aud: ["A restaurant chain, caterer or small food manufacturer"]
      },
      "gmp-good-manufacturing-practice-certification": {
        lead: "GMP for drugs is enforced through the drug regulators' inspections against the revised Schedule M, while in food, cosmetics and other sectors it is usually certified by a third party against a GMP standard. [[V]]",
        authority: "CDSCO and State Drugs Control (drugs); accredited certification bodies (other sectors)",
        aud: ["A pharmaceutical or nutraceutical manufacturer preparing for inspection"]
      }
    }
  }),

  "governance-and-risk": Object.assign({}, base, {
    intro: [
      "Anti-bribery, risk management and social responsibility are governance disciplines, and the standards here treat them differently. ISO 37001 is a certifiable management-system standard for anti-bribery controls. ISO 31000 and ISO 26000 are guidance standards: they contain no requirements to audit against, so organisations align with them rather than certify to them. [[V]]",
      "That distinction matters, because certificates claiming conformity to guidance standards are not issued by accredited certification bodies and should not be relied on.",
      "We tell clients plainly which of these can be certified, and build alignment and reporting where certification is not available."
    ],
    context: [
      "ISO 37001 certification follows the usual two-stage audit by an accredited body, with surveillance audits during the cycle. [[V]]",
      "Guidance standards are used to structure internal frameworks, policies and reports, and can support disclosures such as BRSR. [[V]]",
      "Boards and investors increasingly ask how risk, bribery and social impact are governed, regardless of certification."
    ],
    practice: [
      "We have seen organisations pay for 'certificates' to guidance standards; they carry no accreditation, and buyers who check will notice.",
      "Governance frameworks only work if they reach decisions — so we build them around the board's and management's actual meetings."
    ],
    audience: [
      "A company doing business with governments or in high-risk markets",
      "A listed or pre-IPO company strengthening its governance",
      "An organisation preparing BRSR or ESG disclosures",
      "A supplier answering anti-bribery questionnaires from multinational customers"
    ],
    docs: [
      "Existing codes of conduct and policies",
      "Risk register or risk assessments",
      "Organisation chart and delegation of authority",
      "Third-party and intermediary lists",
      "Board and committee minutes on governance matters"
    ],
    faqs: [
      sharedFaqs[0],
      { q: "Can ISO 31000 or ISO 26000 be certified?", a: "No. Both are guidance standards without auditable requirements, so accredited bodies do not certify them. An organisation can state that its framework is aligned with them. [[V]]" }
    ],
    services: {
      "iso-37001-anti-bribery-management-system-certification": {
        lead: "Anti-bribery controls under ISO 37001 include a policy, a compliance function, due diligence on risky associates and transactions, financial and non-financial controls, and a way to raise concerns — all of which an accredited body can certify.",
        aud: ["A company with government contracts or agents and intermediaries"]
      },
      "iso-31000-risk-management-certification": {
        lead: "Risk management guidance in ISO 31000 is not certifiable: the standard contains no requirements to audit against, so an organisation can align its framework with it but no accredited body certifies it. [[V]]",
        kind: "advisory",
        authority: null,
        law: "ISO 31000 — guidance standard (not certifiable)",
        aud: ["A board building an enterprise risk management framework"],
        faq: { q: "What do we get instead of a certificate?", a: "A documented risk framework — policy, appetite, register, reporting to the board — aligned with ISO 31000, which can be reviewed by internal audit and described in disclosures." }
      },
      "iso-26000-social-responsibility-certification": {
        lead: "Social responsibility guidance in ISO 26000 is likewise not intended for certification — ISO says so itself — so the useful work is alignment and reporting, not a certificate. [[V]]",
        kind: "advisory",
        authority: null,
        law: "ISO 26000 — guidance standard (not certifiable)",
        aud: ["A company structuring its CSR and sustainability reporting"]
      }
    }
  })
};
