/* Company Setup — Start a Business in India; Global Incorporation. */
module.exports = {
  "start-a-business-in-india": {
    authority: "Registrar of Companies, Ministry of Corporate Affairs",
    authorityShort: "the Registrar",
    law: "Companies Act, 2013",
    portal: "the MCA portal",
    instrument: "certificate of incorporation",
    intro: [
      "Choosing the legal form of a new business is the one decision that is expensive to undo. A private limited company, an LLP, a partnership and a proprietorship differ in who can own them, how they are taxed, what they must file every year, and whether an investor will put money in. The specialised forms in this group — producer companies, Nidhis, cooperatives, Section 8 companies — exist for narrower purposes and come with conditions that last for the life of the entity.",
      "Most incorporations here run through the Ministry of Corporate Affairs and the Registrar of Companies, using the SPICe+ form for companies and FiLLiP for LLPs. Cooperatives register with a state or the Central Registrar of Cooperative Societies, and some forms — Nidhis, microfinance NBFCs, payments banks, insurance marketing firms — need a separate licence or declaration from the RBI, IRDAI or the Central Government after the entity exists.",
      "We start with what the business will actually do and who will own it, and recommend the form before drafting anything."
    ],
    context: [
      "Name approval is usually the first point of friction: the Registrar rejects names that are too close to an existing company, LLP or registered trademark, so we run those checks before filing.",
      "Every director or designated partner needs a Digital Signature Certificate and a Director Identification Number, which are issued as part of the incorporation filing for first directors.",
      "The registered office must be an address the company can prove it is entitled to use, with a recent utility bill and the owner's permission where the premises are rented.",
      "Incorporation is the start of the compliance calendar, not the end of it: board meetings, statutory registers, auditor appointment and annual filings follow from the date of incorporation.",
      "Where any shareholder or director is a foreign national or a non-resident, the investment also has to follow the FEMA route and pricing rules for the sector."
    ],
    practice: [
      "The applications we see rejected are rarely rejected on substance — they fail on a name too close to an existing mark, or an address proof that does not match the registered office declared.",
      "We draft the constitutional documents for how the business will actually be run; an object clause or share structure copied from a template is the usual source of later amendments."
    ],
    audience: [
      "First-time founders deciding between a company, an LLP and a partnership",
      "A foreign group setting up its Indian operations",
      "A group of farmers, artisans or members organising collectively",
      "A business that has outgrown a proprietorship",
      "Promoters of a regulated financial or insurance business",
      "Developers and project sponsors ring-fencing a single project"
    ],
    docs: [
      "PAN and Aadhaar of every proposed director or member",
      "Passport for foreign nationals, notarised or apostilled as required",
      "Proof of residential address for each director, not more than two months old",
      "Proof of the registered office address and a recent utility bill",
      "No-objection letter from the owner of the premises, if rented",
      "Passport-size photographs of the directors",
      "Board resolution and constitutional documents of any corporate subscriber"
    ],
    faqs: [
      { q: "How long does incorporation take?", a: "The filing itself is quick once documents are complete; the Registrar's processing time varies with name approval and any queries raised. We give an estimate for your case once the name check is done." },
      { q: "Can we change the business form later?", a: "Yes — conversions from proprietorship, partnership or LLP to a company are possible — but each one has its own process and tax position, so getting the form right at the start is cheaper." },
      { q: "Do we need a physical office?", a: "You need a registered office address that the company can prove it may use. It does not have to be a large office, but it must be real and able to receive official correspondence." },
      { q: "What compliance follows incorporation?", a: "Board meetings, statutory registers, auditor appointment, annual financial statements and annual returns, and the tax registrations the business needs. We hand over a calendar with the first due dates." }
    ],
    services: {
      "producer-company-registration": {
        lead: "Producer companies are owned by primary producers — farmers, fishers, artisans — and are incorporated under the producer company provisions of the Companies Act, with membership limited to producers and producer institutions. [[V]]",
        ctx: ["Profits are shared as patronage bonus in proportion to members' dealings with the company rather than as dividends on capital, and the company's objects are restricted to production, marketing, processing and related activities for its members. [[V]]"],
        aud: ["A farmer collective formalising its procurement and sales", "An artisan cluster selling under a common brand"],
        faq: { q: "Can investors who are not producers become members?", a: "Membership is restricted to producers and producer institutions. Outside capital usually comes through loans, grants or scheme support rather than equity. [[V]]" }
      },
      "nidhi-company-registration": {
        lead: "Nidhi companies borrow from and lend to their own members only, under the Companies Act and the Nidhi Rules, and after incorporation they must apply to the Central Government to be declared a Nidhi. [[V]]",
        ctx: ["The Nidhi Rules set minimum membership and net owned fund conditions that must be met within the first year, and restrict the company to deposits and loans with members — no chit funds, hire purchase, insurance or acquisition of securities. [[V]]"],
        aud: ["A community savings group formalising its lending among members"],
        faq: { q: "Does a Nidhi need an RBI licence?", a: "No. Nidhis are regulated under the Companies Act by the Ministry of Corporate Affairs, not licensed by the RBI, though the RBI can issue directions on their deposits. [[V]]" }
      },
      "public-limited-company-registration": {
        lead: "Public limited companies can invite the public to subscribe to their shares and can list on a stock exchange, which is why they need at least seven members and three directors at incorporation. [[V]]",
        ctx: ["They carry heavier compliance than private companies — restrictions on related-party transactions and managerial remuneration, and, depending on size, independent directors, audit and nomination committees. [[V]]"],
        aud: ["Promoters planning an eventual public issue", "A business that needs more than the private-company limit of 200 members"]
      },
      "indian-subsidiary-registration": {
        lead: "Foreign companies entering India most often do so through a wholly owned subsidiary — a private limited company incorporated here, with the foreign parent as shareholder and the investment reported to the RBI under FEMA.",
        ctx: ["The parent's board resolution, constitutional documents and authorisation for its nominee have to be notarised and apostilled or consularised, which is usually the longest lead-time item."],
        aud: ["A foreign company hiring its first employees in India", "An overseas group moving from a liaison office to a full operating entity"],
        faq: { q: "Does the subsidiary need an Indian director?", a: "Yes. Every Indian company must have at least one director who has stayed in India for the period prescribed in the previous calendar year. [[V]]" }
      },
      "cooperative-society-registration": {
        lead: "Cooperative societies register under the cooperative societies act of the state where they operate, before the state Registrar of Cooperative Societies, and run on a one-member-one-vote basis.",
        authority: "State Registrar of Cooperative Societies",
        law: "State Co-operative Societies Act",
        portal: "the state registrar's office or portal",
        solo: true,
        ctx: [
          "The bye-laws decide almost everything — membership, share capital, how the managing committee is elected and how surplus is distributed — and each state prescribes its own minimum number of promoter members. [[V]]",
          "The registrar examines whether the society is economically viable and whether its area of operation overlaps an existing society with the same objects before registering it. [[V]]",
          "After registration the society holds general body meetings, keeps its accounts audited by an auditor approved under the state law, and files returns with the registrar."
        ],
        aud: ["A housing society or a group of residents pooling resources", "A credit or consumer cooperative operating in one state"],
        docs: ["Application in the form prescribed by the state", "Draft bye-laws adopted by the promoter members", "List of promoter members with addresses and occupations", "Proof of share capital collected from members", "Identity and address proof of the promoters", "Resolution authorising the chief promoter to apply"]
      },
      "multi-state-cooperative-society-registration": {
        lead: "Once a cooperative's members and area of operation extend beyond one state, it registers under the Multi-State Co-operative Societies Act, 2002 with the Central Registrar rather than with a state registrar.",
        authority: "Central Registrar of Cooperative Societies, Ministry of Cooperation",
        law: "Multi-State Co-operative Societies Act, 2002",
        portal: "the Central Registrar's online portal",
        solo: true,
        ctx: [
          "The Act sets the minimum number of members and requires them to come from more than one state, and the bye-laws must cover the society's objects, area of operation and governance. [[V]]",
          "Multi-state societies report to the Central Registrar, hold elections under the Act's election framework and have their accounts audited by auditors from the Central Registrar's panel. [[V]]"
        ],
        docs: ["Application signed by the promoter members", "Proposed bye-laws", "Details of promoter members from each state, with identity proof", "Proof of share capital raised", "Economic viability statement or project plan"],
        aud: ["A cooperative expanding its membership across state lines"],
        faq: { q: "Can a state cooperative convert into a multi-state one?", a: "A state cooperative can be reorganised or amalgamated into a multi-state society when its operations cross state lines, subject to the Act's procedure and the approval of both registrars. [[V]]" }
      },
      "farmer-producer-organization-fpo-registration": {
        lead: "FPO is a description, not a legal form: a farmer producer organisation is usually registered as a producer company, or sometimes as a cooperative society, and then becomes eligible for government FPO promotion schemes.",
        ctx: ["Central schemes for forming and promoting FPOs work through implementing agencies and cluster-based business organisations, and support typically depends on member numbers and the region. [[V]]"],
        aud: ["Farmers in a cluster organising to buy inputs and sell produce together"]
      },
      "warehouse-wdra-registration": {
        lead: "Warehouses that want their receipts to be negotiable — usable as collateral for bank loans — register with the Warehousing Development and Regulatory Authority, which allows them to issue electronic negotiable warehouse receipts.",
        authority: "Warehousing Development and Regulatory Authority (WDRA)",
        law: "Warehousing (Development and Regulation) Act, 2007",
        portal: "the WDRA portal",
        instrument: "registration",
        solo: true,
        ctx: [
          "Registration is granted against the warehouse's physical and financial standards — construction, storage practices, insurance, and the net worth and security deposit requirements for its category. [[V]]",
          "The warehouse is inspected and accredited before registration, and registered warehouses are subject to periodic inspection and to WDRA's norms on stock handling, quality assaying and insurance. [[V]]"
        ],
        aud: ["An agri-warehouse operator serving farmers who borrow against stored produce", "A cold-chain or commodity storage business wanting bank-financeable receipts"],
        docs: ["Ownership or lease documents for the warehouse premises", "Layout, capacity and construction details of the warehouse", "Insurance cover for the stored goods", "Net worth certificate of the warehouse operator", "Details of the warehouse manager and staff", "Fire safety and other local approvals for the premises"]
      },
      "renewable-energy-project-company-registration": {
        lead: "Renewable energy projects are usually ring-fenced in a special purpose vehicle — a separate private limited company that holds the land rights, the power purchase agreement and the project debt.",
        ctx: ["Lenders and offtakers look at the SPV's constitutional documents closely: restrictions on share transfer, the sponsor's lock-in and step-in rights for lenders are often required to be written into the articles."],
        aud: ["A solar or wind developer bidding for a new project", "An investor taking equity in a single operating asset"]
      },
      "microfinance-institution-registration": {
        lead: "Microfinance lending at scale runs through an NBFC registered with the Reserve Bank of India, under the RBI's framework for microfinance loans, which caps repayment obligations relative to household income. [[V]]",
        authority: "Reserve Bank of India",
        law: "Reserve Bank of India Act, 1934",
        portal: "the RBI's online application system",
        instrument: "certificate of registration",
        ctx: ["Registration as an NBFC requires minimum net owned funds and fit-and-proper directors before the application is considered, so the capital plan comes first. [[V]]"],
        aud: ["Promoters of a lending business focused on low-income households"]
      },
      "real-estate-developer-entity-structuring": {
        lead: "Which entity holds the land, which builds and which sells are decisions that shape a developer's tax, RERA and financing position for the whole life of a project.",
        kind: "advisory",
        law: "Companies Act, 2013; Real Estate (Regulation and Development) Act, 2016",
        solo: true,
        ctx: [
          "Joint development agreements with landowners, LLP or company SPVs for each project, and the timing of revenue recognition all interact; a structure that saves stamp duty can create a GST or income-tax cost elsewhere.",
          "RERA registration is project-wise, and the promoter named on it carries the obligations to allottees, so who is the promoter is a legal decision, not a branding one.",
          "Lenders usually want the project land and receivables in the borrowing entity, which is another reason the structure is settled before financing is approached."
        ],
        aud: ["A developer entering a joint development with landowners", "A family-owned builder separating projects into SPVs", "A landowner contributing land to a development in return for built-up area"],
        docs: ["Title documents for the project land", "Existing group structure and shareholding", "Draft or signed joint development agreement, if any", "Project financials and funding plan", "Sanctioned or proposed plans for the project"]
      },
      "joint-venture-agreement-and-structuring": {
        lead: "Joint ventures fail on their exit terms more often than on their business plan, so the structure — an incorporated JV company or a contractual arrangement — and the agreement behind it are settled before money moves.",
        kind: "drafting",
        law: "Companies Act, 2013; Indian Contract Act, 1872",
        solo: true,
        ctx: [
          "Board composition, reserved matters, deadlock resolution, non-compete and the buy-out mechanism on exit are where JV agreements are tested; the commercial plan rarely is.",
          "Where one partner is foreign, the JV's shareholding has to sit within the FDI route and cap for the sector, and transfers between the partners later follow FEMA pricing rules.",
          "Contributions in kind — technology, brand, land — need a value agreed and documented, because they decide each partner's shareholding."
        ],
        aud: ["Two companies combining technology and market access in India", "A foreign partner entering India alongside a local business", "A project consortium bidding together for a contract"],
        docs: ["Term sheet or memorandum of understanding between the partners", "Constitutional documents of each partner", "Details of capital, technology or assets each partner contributes", "Any licences or approvals the JV's business will need", "Existing agreements between the partners"]
      },
      "insurance-marketing-firm-registration": {
        lead: "IRDAI registers Insurance Marketing Firms to distribute insurance products of multiple insurers — and certain other financial products — through their own insurance sales persons. [[V]]",
        authority: "Insurance Regulatory and Development Authority of India (IRDAI)",
        law: "Insurance Act, 1938; IRDAI regulations for Insurance Marketing Firms",
        portal: "IRDAI's online registration system",
        instrument: "certificate of registration",
        ctx: ["The applicant has to be a company, LLP or other permitted entity with insurance distribution as its main object, a qualified principal officer and the net worth the regulations prescribe. [[V]]"],
        aud: ["An existing financial-products distributor adding insurance"]
      },
      "payment-bank-registration-advisory": {
        lead: "Payments banks are differentiated banks licensed by the Reserve Bank: they can take deposits up to a per-customer cap and offer payment and remittance services, but cannot lend. [[V]]",
        kind: "advisory",
        authority: "Reserve Bank of India",
        law: "Banking Regulation Act, 1949; RBI guidelines on payments banks",
        solo: true,
        ctx: [
          "Licences are issued under the RBI's guidelines when its licensing window or on-tap process is open, against minimum paid-up capital, promoter fit-and-proper criteria and a credible business plan. [[V]]",
          "A payments bank must invest most of its deposits in government securities and is expected to reach under-banked customers, which shapes the economics far more than the licence itself. [[V]]",
          "Many applicants conclude that a payment aggregator, prepaid instrument or banking partnership achieves their goal with a far lighter regime, and the advice often starts there."
        ],
        aud: ["A large telecom, retail or fintech group evaluating a banking licence", "A fintech comparing a bank licence with partnership models"],
        docs: ["Promoter group structure and audited financials", "Business plan and projected financials", "Fit-and-proper information on promoters and proposed directors", "Details of existing regulated entities in the group"]
      }
    }
  },

  "global-incorporation": {
    authority: "The company registry of the jurisdiction concerned",
    authorityShort: "the registry",
    law: "Company law of the jurisdiction; FEMA (Overseas Investment) Rules for Indian residents",
    portal: "the registry's filing system",
    instrument: "certificate of incorporation",
    intro: [
      "Setting up abroad is two projects that have to fit together: forming the entity under the other country's law, and doing it within India's own rules if the founders or parent are resident here. The second part is the one most often missed — an Indian resident who invests in or sets up an overseas entity is making an overseas investment under FEMA, which has its own permitted routes, pricing and reporting through an authorised dealer bank.",
      "Jurisdictions differ on what matters: whether a local resident director is required, whether a notary or licensed agent must be involved, what annual filings and taxes follow, and how readily a bank will open an account for a company owned from India.",
      "We coordinate the formation with licensed local agents or counsel in each jurisdiction, and handle the Indian side — the ODI filings, valuation and board approvals — ourselves. [[V]]"
    ],
    context: [
      "Indian residents investing in an overseas entity do so under the FEMA overseas investment framework, and the investment is reported through the authorised dealer bank — formation abroad does not remove that obligation. [[V]]",
      "Local formation filings are made through licensed agents, notaries or counsel in the jurisdiction where the law requires them; we coordinate that work and the documents it needs from India. [[V]]",
      "Bank account opening is often slower than incorporation itself, because banks run their own due diligence on the owners and the expected transactions.",
      "Apostille or consular legalisation of Indian documents — passports, address proofs, board resolutions — is usually needed and takes time to arrange.",
      "The annual cost of keeping an overseas entity alive — registered agent, annual return, accounts and local taxes — should be understood before formation, not discovered at the first renewal."
    ],
    practice: [
      "The question we ask first is why this jurisdiction: investor expectations, customer contracts, tax treaties and banking access point to different answers, and the cheapest registry is rarely the right one.",
      "Entities formed abroad by Indian founders without the ODI reporting in place are the most common problem we are asked to fix later, and regularising them takes longer than doing it at the start."
    ],
    audience: [
      "Indian founders setting up a holding company for international investors",
      "An Indian company opening a sales entity close to its customers",
      "A group restructuring its overseas holdings",
      "A startup asked by investors to incorporate in a specific jurisdiction",
      "Resident individuals investing in a foreign company",
      "A foreign company setting up its presence in India"
    ],
    docs: [
      "Passport of every director and shareholder",
      "Proof of residential address, apostilled where required",
      "Proposed company name and business activity",
      "Details of shareholding and ultimate beneficial owners",
      "Board resolution of any corporate shareholder",
      "Source-of-funds information for the bank and the agent's due diligence",
      "Indian-side documents for the ODI filing — valuation, board approval, bank forms"
    ],
    faqs: [
      { q: "Do Indian founders need RBI approval to set up a company abroad?", a: "Most overseas investments by Indian residents fall under the automatic route of the FEMA overseas investment framework and are reported through the AD bank rather than approved in advance, but the route, limits and documents depend on who is investing and how. [[V]]" },
      { q: "Can the company be run entirely from India?", a: "Often, but where the company is managed and controlled affects its tax residence. A foreign company effectively managed from India can be treated as resident in India for tax. [[V]]" },
      { q: "Will an Indian bank account work for the foreign company?", a: "Generally the company needs a bank account in its own name, usually in its own jurisdiction or with an international bank. That account is often the step that takes longest." },
      { q: "Who files the annual returns abroad?", a: "Each jurisdiction has its own annual filings, usually through the registered agent. We set up the calendar for both sides — the foreign filings and the Indian ODI reporting." }
    ],
    services: {
      "usa-delaware-c-corp-registration": {
        lead: "Delaware is where most venture-backed US startups incorporate, because investors and their counsel know its corporate law and the Court of Chancery that interprets it.",
        authority: "Delaware Division of Corporations",
        ctx: ["A Delaware corporation files an annual report and pays franchise tax each year; the franchise tax can be computed by more than one method, and the default method produces alarming figures for companies with many authorised shares. [[V]]"],
        aud: ["Founders raising from US venture funds", "An Indian startup asked to 'flip' to a US parent"],
        faq: { q: "Is a Delaware C-Corp taxed in Delaware?", a: "Not on income earned outside Delaware, but it pays Delaware franchise tax and is subject to US federal corporate tax. Where it operates, it may also owe state tax there. [[V]]" }
      },
      "usa-delaware-llc-registration": {
        lead: "LLCs formed in Delaware give a flexible operating agreement and pass-through taxation by default, which suits a holding or trading entity that does not plan to raise venture equity.",
        authority: "Delaware Division of Corporations",
        ctx: ["A foreign-owned single-member LLC is disregarded for US income tax but still has US information-reporting obligations on its transactions with the owner. [[V]]"],
        aud: ["A consultant or agency billing US clients through a US entity"]
      },
      "usa-wyoming-llc-registration": {
        lead: "Wyoming attracts non-US founders forming an LLC because its annual report regime is light and it does not levy a state corporate income tax. [[V]]",
        authority: "Wyoming Secretary of State",
        aud: ["A solo founder selling digital products to US customers"]
      },
      "usa-nevada-llc-registration": {
        lead: "Nevada also has no state corporate income tax, but its annual list and state business licence make it more expensive to maintain than many founders expect. [[V]]",
        authority: "Nevada Secretary of State"
      },
      "usa-california-c-corp-registration": {
        lead: "California is the right home for a corporation whose people and operations are actually in California — because if they are, the company has to register and pay California's franchise tax there in any case. [[V]]",
        authority: "California Secretary of State",
        aud: ["A company with founders or employees based in California"]
      },
      "usa-federal-ein-application": {
        lead: "EIN — the Employer Identification Number — is the federal tax ID the IRS issues to a US entity; without one, a US company cannot open a bank account, hire or file federal returns.",
        authority: "Internal Revenue Service (IRS)",
        kind: "registration",
        ctx: ["Owners without a US Social Security or taxpayer identification number apply by submitting Form SS-4 rather than through the online application. [[V]]"],
        faq: { q: "Does a foreign-owned LLC need an EIN if it has no US income?", a: "Generally yes — it is needed for bank accounts and for the information returns a foreign-owned LLC must file. [[V]]" }
      },
      "usa-registered-agent-service": {
        lead: "Every US state requires a company formed or registered there to keep a registered agent — a person or firm with a physical address in that state who accepts legal process and official mail for the company.",
        authority: "Secretary of State of the relevant US state",
        kind: "retainer",
        faq: { q: "What happens if the registered agent lapses?", a: "The company can fall out of good standing and may miss legal notices served on it. The agent appointment should be renewed with the annual filings. [[V]]" }
      },
      "usa-foreign-qualification-filing": {
        lead: "Doing business in a US state other than the one you incorporated in usually means registering there as a 'foreign' entity, with its own registered agent and annual filings.",
        authority: "Secretary of State of the state where the business operates",
        kind: "registration",
        ctx: ["Having employees, an office or regular in-person operations in a state are the typical triggers; selling to customers there remotely often is not, though tax nexus is a separate test. [[V]]"]
      },
      "uk-limited-company-registration": {
        lead: "Companies House incorporates a UK private limited company online, usually within a day or two, once the articles, registered office, directors and persons with significant control are filed. [[V]]",
        authority: "Companies House (UK)",
        ctx: ["Directors and people with significant control now have to verify their identity with Companies House under the UK's economic crime reforms. [[V]]"],
        aud: ["An Indian company opening a UK sales entity"]
      },
      "uk-llp-registration": {
        lead: "UK LLPs need at least two designated members and are taxed as partnerships, so profits are taxed in the hands of the members rather than the LLP. [[V]]",
        authority: "Companies House (UK)"
      },
      "uk-companies-house-annual-filing": {
        lead: "Annual accounts for a UK company are filed at Companies House — within nine months of the financial year end for a private company — separately from the corporation tax return filed with HMRC. [[V]]",
        authority: "Companies House and HM Revenue & Customs",
        kind: "filing",
        instrument: "annual accounts",
        portal: "Companies House online filing",
        faq: { q: "Is a dormant UK company exempt?", a: "A dormant company still files accounts — dormant accounts are simpler — and still files its confirmation statement. [[V]]" }
      },
      "uk-vat-registration": {
        lead: "VAT registration with HMRC becomes compulsory once a UK business's taxable turnover crosses the registration threshold, and a business not established in the UK can be required to register from its first taxable supply there. [[V]]",
        authority: "HM Revenue & Customs (HMRC)",
        instrument: "VAT registration"
      },
      "uk-confirmation-statement-filing": {
        lead: "Confirmation statements are how a UK company tells Companies House, at least once every twelve months, that its registered details — officers, shareholders, people with significant control — are still correct. [[V]]",
        authority: "Companies House (UK)",
        kind: "filing",
        instrument: "confirmation statement",
        portal: "Companies House online filing"
      },
      "singapore-pte-ltd-registration": {
        lead: "Singapore requires at least one director who is ordinarily resident there, which is the first thing a foreign founder has to solve before ACRA will incorporate a private limited company. [[V]]",
        authority: "Accounting and Corporate Regulatory Authority (ACRA), Singapore",
        ctx: ["Foreign founders usually meet the requirement with a nominee director from a corporate service provider until a resident director is hired or an Employment Pass is granted. [[V]]"],
        aud: ["An Indian SaaS company building its Asia-Pacific base"]
      },
      "singapore-gst-registration": {
        lead: "GST registration in Singapore becomes compulsory once taxable turnover crosses the IRAS threshold, and overseas suppliers of digital services to Singapore consumers may have to register under the overseas vendor regime. [[V]]",
        authority: "Inland Revenue Authority of Singapore (IRAS)",
        instrument: "GST registration"
      },
      "singapore-employment-pass-advisory": {
        lead: "Employment Pass applications to Singapore's Ministry of Manpower are assessed against a qualifying salary and, for most applicants, a points-based framework known as COMPASS. [[V]]",
        authority: "Ministry of Manpower, Singapore",
        kind: "advisory",
        aud: ["A founder relocating to run a newly formed Singapore company"]
      },
      "hong-kong-private-limited-company-registration": {
        lead: "Hong Kong incorporation is filed with the Companies Registry and needs at least one director, one shareholder, and a company secretary who is resident in Hong Kong or is a Hong Kong company. [[V]]",
        authority: "Companies Registry, Hong Kong",
        ctx: ["A business registration certificate from the Inland Revenue Department is issued alongside incorporation and has to be renewed. [[V]]"]
      },
      "hong-kong-offshore-bank-account-assistance": {
        lead: "Opening the bank account is usually the slowest part of setting up in Hong Kong: banks run detailed due diligence on the business, its owners and its expected transactions, and often want to meet the directors.",
        authority: "The bank's own compliance team",
        kind: "retainer",
        ctx: ["A clear description of customers, suppliers and fund flows — supported by contracts or invoices — does more for an application than any introduction."]
      },
      "uae-mainland-company-registration": {
        lead: "Mainland UAE companies are licensed by the economic department of the emirate concerned and can trade across the UAE market directly, which free zone companies generally cannot. [[V]]",
        authority: "Department of economy of the relevant emirate (UAE)",
        ctx: ["Many commercial activities can now be fully foreign-owned on the mainland, while some strategic activities still carry ownership conditions. [[V]]"],
        aud: ["A trading business selling to UAE customers onshore"]
      },
      "uae-free-zone-company-registration-dmcc": {
        lead: "DMCC — the Dubai Multi Commodities Centre — is a free zone authority whose companies can be wholly foreign-owned and are licensed for activities within the free zone and abroad.",
        authority: "Dubai Multi Commodities Centre (DMCC)",
        ctx: ["Trading directly into the UAE mainland from a free zone generally needs a distributor or an additional mainland licence. [[V]]"]
      },
      "uae-free-zone-company-registration-ifza": {
        lead: "IFZA, the International Free Zone Authority in Dubai, is frequently used by consultancies and trading businesses that want a free zone licence with a largely remote setup process.",
        authority: "International Free Zone Authority (IFZA)"
      },
      "uae-offshore-company-registration": {
        lead: "Offshore companies in the UAE — formed through registries such as JAFZA Offshore or RAK ICC — are holding and asset-owning vehicles; they cannot trade inside the UAE. [[V]]",
        authority: "The UAE offshore registry concerned"
      },
      "uae-corporate-tax-registration": {
        lead: "UAE corporate tax applies to financial years starting on or after 1 June 2023, and taxable persons — free zone companies included — must register with the Federal Tax Authority for a tax registration number. [[V]]",
        authority: "Federal Tax Authority (UAE)",
        instrument: "tax registration number",
        portal: "the FTA's EmaraTax platform"
      },
      "netherlands-bv-registration": {
        lead: "Netherlands BVs are incorporated by a Dutch civil-law notary, who executes the deed of incorporation and registers the company with the Chamber of Commerce (KVK). [[V]]",
        authority: "Netherlands Chamber of Commerce (KVK), through a civil-law notary"
      },
      "germany-gmbh-registration": {
        lead: "German GmbH formation runs through a notary: the articles are notarised, the share capital paid in, and the company exists once it is entered in the commercial register. [[V]]",
        authority: "Commercial register (Handelsregister), Germany"
      },
      "ireland-company-registration": {
        lead: "Ireland's Companies Registration Office registers private companies limited by shares, and every Irish company needs at least one EEA-resident director or a bond in lieu. [[V]]",
        authority: "Companies Registration Office (CRO), Ireland"
      },
      "switzerland-gmbh-registration": {
        lead: "Swiss GmbHs need at least one managing officer resident in Switzerland, a notarised founding deed, and minimum share capital paid in before entry in the commercial register. [[V]]",
        authority: "Cantonal commercial register, Switzerland"
      },
      "france-sarl-registration": {
        lead: "SARL is France's standard limited company for small and mid-sized businesses, registered through the online formalities portal with the trade and companies register (RCS). [[V]]",
        authority: "Trade and companies register (RCS), France"
      },
      "poland-sp-z-oo-registration": {
        lead: "Polish sp. z o.o. companies can be registered online through the S24 system using a template deed, which makes Poland one of the quicker EU incorporations where founders can sign electronically. [[V]]",
        authority: "National Court Register (KRS), Poland"
      },
      "cayman-islands-company-registration": {
        lead: "Cayman Islands exempted companies are used mainly as fund vehicles and holding companies, and are subject to Cayman's economic substance rules where they carry on relevant activities. [[V]]",
        authority: "General Registry, Cayman Islands"
      },
      "british-virgin-islands-bvi-company-registration": {
        lead: "BVI business companies are a common holding-company vehicle, formed through a licensed registered agent in the British Virgin Islands who keeps beneficial ownership information on file. [[V]]",
        authority: "BVI Registry of Corporate Affairs, through a licensed registered agent"
      },
      "mauritius-gbc-company-registration": {
        lead: "Mauritius Global Business Companies are licensed by the Financial Services Commission and must meet substance requirements in Mauritius; they have been widely used to structure investment into India and Africa. [[V]]",
        authority: "Financial Services Commission, Mauritius",
        ctx: ["Treaty benefits under the India–Mauritius tax treaty were significantly narrowed by the 2016 protocol, so the structure needs a reason beyond tax. [[V]]"]
      },
      "seychelles-offshore-company-registration": {
        lead: "Seychelles international business companies are low-maintenance offshore vehicles, but banks and counterparties now ask far harder questions of them than they did a decade ago.",
        authority: "Financial Services Authority, Seychelles"
      },
      "panama-company-registration": {
        lead: "Panamanian corporations are formed through a Panamanian lawyer acting as resident agent, and are typically used as holding or asset-owning companies. [[V]]",
        authority: "Public Registry of Panama, through a resident agent"
      },
      "australia-pty-ltd-registration": {
        lead: "Australian proprietary companies are registered with ASIC, and each one needs at least one director who ordinarily lives in Australia. [[V]]",
        authority: "Australian Securities and Investments Commission (ASIC)"
      },
      "new-zealand-company-registration": {
        lead: "New Zealand companies are registered online with the Companies Office, and at least one director must live in New Zealand, or live in Australia and be a director of an Australian company. [[V]]",
        authority: "Companies Office, New Zealand"
      },
      "japan-kabushiki-kaisha-kk-registration": {
        lead: "Kabushiki kaisha is Japan's joint-stock company, registered with the Legal Affairs Bureau after its articles are notarised; the godo kaisha is the lighter alternative some foreign companies choose instead. [[V]]",
        authority: "Legal Affairs Bureau, Japan"
      },
      "china-wfoe-registration": {
        lead: "Wholly foreign-owned enterprises let a foreign investor operate in mainland China without a Chinese partner, in sectors not restricted under the Negative List, registered with the local market regulator. [[V]]",
        authority: "Local Administration for Market Regulation, China"
      },
      "indonesia-pt-pma-registration": {
        lead: "PT PMA is the form a foreign-owned company takes in Indonesia, licensed through the OSS risk-based system and subject to the investment ministry's capital and business-field rules. [[V]]",
        authority: "Ministry of Investment (BKPM), Indonesia"
      },
      "vietnam-foreign-company-registration": {
        lead: "Vietnamese foreign-invested companies usually need an Investment Registration Certificate for the project first, and then an Enterprise Registration Certificate for the company itself. [[V]]",
        authority: "Department of Planning and Investment of the relevant province, Vietnam"
      },
      "saudi-arabia-company-registration": {
        lead: "Saudi Arabia licenses foreign investment through the Ministry of Investment before the company is entered in the commercial registry, and many activities can now be fully foreign-owned. [[V]]",
        authority: "Ministry of Investment (MISA) and the Ministry of Commerce, Saudi Arabia"
      },
      "qatar-company-registration": {
        lead: "Qatar offers distinct routes: a mainland company registered with the Ministry of Commerce and Industry, or an entity in the Qatar Financial Centre or a Qatar free zone under its own regulator and ownership rules. [[V]]",
        authority: "Ministry of Commerce and Industry, Qatar, or the QFC / free zone authority"
      },
      "oman-company-registration": {
        lead: "Oman's foreign capital investment law permits full foreign ownership in most activities, with companies registered through the ministry responsible for commerce and investment. [[V]]",
        authority: "Ministry of Commerce, Industry and Investment Promotion, Oman"
      },
      "bahrain-company-registration": {
        lead: "Bahrain registers companies through Sijilat, the commerce ministry's online commercial registration system, and allows full foreign ownership in many sectors. [[V]]",
        authority: "Ministry of Industry and Commerce, Bahrain"
      },
      "nepal-company-registration": {
        lead: "Nepal requires foreign investors to obtain foreign investment approval before registering the company with the Office of Company Registrar, and sets minimum investment levels for foreign investment. [[V]]",
        authority: "Office of Company Registrar and Department of Industry, Nepal"
      },
      "bangladesh-company-registration": {
        lead: "Bangladeshi companies are registered with the Registrar of Joint Stock Companies and Firms, and a foreign-owned company also registers with the Bangladesh Investment Development Authority. [[V]]",
        authority: "RJSC and BIDA, Bangladesh"
      },
      "sri-lanka-company-registration": {
        lead: "Sri Lanka's Registrar of Companies incorporates companies online, and foreign-owned companies seeking investment incentives deal with the Board of Investment as well. [[V]]",
        authority: "Department of the Registrar of Companies, Sri Lanka"
      },
      "canada-company-registration": {
        lead: "Canadian companies can be incorporated federally under the Canada Business Corporations Act or in a single province, and a federal corporation still registers in each province where it carries on business. [[V]]",
        authority: "Corporations Canada or the provincial registry"
      },
      "south-africa-company-registration": {
        lead: "South African private companies are registered with the Companies and Intellectual Property Commission, largely online. [[V]]",
        authority: "Companies and Intellectual Property Commission (CIPC), South Africa"
      },
      "israel-company-registration": {
        lead: "Israeli companies are registered with the Israeli Corporations Authority, and foreign-funded startups often pair an Israeli operating company with a parent incorporated elsewhere. [[V]]",
        authority: "Israeli Corporations Authority"
      },
      "foreign-company-branch-office-registration-india": {
        lead: "Branch offices let a foreign company carry on specified activities in India — export and import, professional or consultancy services, research — without incorporating a subsidiary, with approval under FEMA through an AD bank or the RBI. [[V]]",
        authority: "Reserve Bank of India, through an AD Category-I bank; Registrar of Companies",
        law: "Foreign Exchange Management Act, 1999; Companies Act, 2013",
        ctx: ["After approval, the branch registers with the Registrar of Companies as a foreign company and files annual activity certificates. [[V]]"]
      },
      "foreign-company-liaison-office-registration-india": {
        lead: "Liaison offices are the most restricted way for a foreign company to be present in India: they can represent the parent and promote its business, but cannot earn income here.",
        authority: "Reserve Bank of India, through an AD Category-I bank; Registrar of Companies",
        law: "Foreign Exchange Management Act, 1999; Companies Act, 2013",
        ctx: ["Expenses are met from inward remittances from the parent, and the office files an annual activity certificate confirming it stayed within its permitted activities. [[V]]"]
      },
      "overseas-investment-odi-filing": {
        lead: "Investing abroad from India — setting up or acquiring a foreign entity — is overseas direct investment under the FEMA overseas investment rules, reported through the AD bank in the prescribed forms. [[V]]",
        authority: "Reserve Bank of India, through an AD Category-I bank",
        law: "Foreign Exchange Management Act, 1999; Overseas Investment Rules and Regulations",
        kind: "filing",
        instrument: "ODI filing",
        portal: "the AD bank and the RBI's reporting system"
      }
    }
  }
};
