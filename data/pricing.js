/* ==========================================================================
   CURRENTLY UNUSED BY THE UI — DO NOT DELETE.
   The site shows no fees anywhere (homepage table removed, cards and service
   pages carry no price). This file and the priceFrom fields in services.js
   are kept on disk as the firm's fee reference, ready if pricing returns.
   tools/build.js does not load this file.

   data/pricing.js — itemised fee table, formerly for the homepage "What It
   Costs" section. Professional fee is ours; government fee is paid separately,
   direct to the relevant authority, and is never marked up.

   VERIFY all fees against current government schedules before launch —
   government fee slabs (MCA stamp duty, TM-A, FSSAI category fees) change
   periodically and several figures here vary by state or applicant
   category, which is reflected in "onwards"/"as per state" wording rather
   than a single false-precise number.
   ========================================================================== */
(function (root, factory) {
  var data = factory();
  if (typeof module !== "undefined" && module.exports) {
    module.exports = data;
  } else {
    root.PRICING = data;
  }
})(typeof window !== "undefined" ? window : this, function () {
  return [
    {
      slug: "pvt-ltd-company-registration",
      service: "Private Limited Registration",
      professionalFee: 6999,
      governmentFee: "As per state", // MCA fee is nil for most capital slabs; stamp duty varies sharply by state
      timeline: "7-10 working days"
    },
    {
      slug: "llp-registration",
      service: "LLP Registration",
      professionalFee: 5499,
      governmentFee: "₹500 onwards", // FiLLiP slab fee from ₹1 lakh contribution; rises with contribution, plus state stamp duty on the LLP Agreement
      timeline: "10-12 working days"
    },
    {
      slug: "gst-registration",
      service: "GST Registration",
      professionalFee: 1499,
      governmentFee: "No government fee",
      timeline: "5-7 working days"
    },
    {
      slug: "gst-return-filing",
      service: "GST Return Filing (Monthly)",
      professionalFee: 999,
      governmentFee: "No government fee",
      timeline: "Filed monthly, by the 20th"
    },
    {
      slug: "trademark-registration",
      service: "Trademark Registration",
      professionalFee: 6999,
      governmentFee: "₹4,500 onwards", // ₹4,500/class for individuals, startups and MSMEs filing electronically; ₹9,000/class for other applicants
      timeline: "1 day to file"
    },
    {
      slug: "fssai-license-registration",
      service: "FSSAI State License",
      professionalFee: 2999,
      governmentFee: "₹2,000 onwards", // annual fee scales with production/storage capacity within the State-license tier
      timeline: "7-10 working days"
    }
  ];
});
