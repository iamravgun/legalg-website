/* ==========================================================================
   data/faq.js — homepage "Before you hand over a filing" questions. Rendered
   into the accordion and the FAQPage JSON-LD by tools/build.js. Edit here;
   the markup and structured data follow. `verify` emits a
   <!-- VERIFY … before launch --> comment beside that item.
   ========================================================================== */
(function (root, factory) {
  var data = factory();
  if (typeof module !== "undefined" && module.exports) {
    module.exports = data;
  } else {
    root.FAQ = data;
  }
})(typeof window !== "undefined" ? window : this, function () {
  return [
    {
      q: "How long does a filing actually take?",
      verify: "our internal turnaround figures",
      a: "Two clocks run on every filing. Ours is the time to collect your documents, draft the forms and submit — usually 2 to 4 working days once we have everything. The department's is the queue after submission: about 7 to 10 working days for a SPICe+ incorporation, 5 to 7 for a GSTIN, and months for a trademark to move from TM-A filing to registration. We quote both separately, so you are never told 'a week' for something the registrar will hold for six."
    },
    {
      q: "What documents will you need from me?",
      a: "For most filings: PAN and Aadhaar for every director, partner or proprietor, a recent passport-size photograph, and proof of address no older than two months. For the registered office we need a utility bill — electricity, water or gas — plus a rent agreement and the owner's NOC if the premises are not yours. The exact list for each service is on its page, under Documents required."
    },
    {
      q: "Do I need to visit an office or sign anything physically?",
      a: "No. We arrange a Class 3 Digital Signature Certificate for each signatory through a licensed certifying authority; issuance takes a short video KYC on your phone and usually completes the same day. Every form is then signed with the DSC or Aadhaar e-sign and filed online."
    },
    {
      q: "What happens if the application is objected to or rejected?",
      verify: "re-filing cost policy",
      a: "If the department raises a query or objection — a REG-03 on GST, an MCA resubmission, an examination report on a trademark — we draft and file the reply at no extra professional fee. If an application is rejected because of an error on our side, we re-file at our cost, including any government fee that has to be paid again. If it is rejected on merits we warned you about in writing, or because a document you supplied was incorrect, the re-filing is quoted fresh before we start."
    },
    {
      q: "Who actually does the work on my file?",
      verify: "team structure",
      a: "A named advisor — a Chartered Accountant, Company Secretary or advocate depending on the filing — owns your file from scoping to handover, and reviews every form before it goes out. You get their direct number. Drafting support works under them, but nothing is submitted without their sign-off."
    },
    {
      q: "What do I get at the end, and what's due after that?",
      a: "Everything the department issues: the Certificate of Incorporation with PAN, TAN and DINs, the GST registration certificate, or the trademark acknowledgement and later the registration certificate, as the case may be — along with login credentials for each portal we set up. At handover we also send the next statutory due dates for your entity, such as INC-20A, the first board meeting, or your first GSTR-1 and 3B."
    }
  ];
});
