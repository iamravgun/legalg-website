/* ==========================================================================
   data/testimonials.js
   ========================================================================== */
(function (root, factory) {
  var data = factory();
  if (typeof module !== "undefined" && module.exports) {
    module.exports = data;
  } else {
    root.TESTIMONIALS = data;
  }
})(typeof window !== "undefined" ? window : this, function () {
  return [
    {
      name: "Arvind Subramaniam",
      role: "Founder",
      company: "Northwind Logistics Pvt Ltd",
      date: "2026-06-14",
      service: "Private Limited Company Registration",
      quote:
        "We'd already had one incorporation rejected elsewhere over an address-proof mismatch. LegalG caught the same issue in our documents before filing and the SPICe+ went through clean on the first attempt — Certificate of Incorporation in eight days."
    },
    {
      name: "Meenal Kulkarni",
      role: "Director of Finance",
      company: "Sapphire Wellness Foods",
      date: "2026-04-02",
      service: "FSSAI Food Business License",
      quote:
        "Our turnover crossed into State License territory mid-year and we hadn't realised the Basic registration was no longer sufficient. They flagged it during a routine GST call, not after an inspection notice — that's the difference between a vendor and an adviser."
    },
    {
      name: "Rohit Bhalla",
      role: "Co-founder",
      company: "Fernbridge Analytics LLP",
      date: "2026-02-20",
      service: "LLP Registration",
      quote:
        "The LLP Agreement filing deadline is unforgiving and we were juggling three other things during incorporation. A reminder came through five days before the Form 3 deadline with the draft already prepared — one less thing to track."
    },
    {
      name: "Priya Nair",
      role: "Operations Head",
      company: "Coastline Exports",
      date: "2025-11-08",
      service: "Import Export Code (IEC)",
      quote:
        "IEC came through in three days, but what stood out was the annual confirmation reminder six weeks ahead of the April-June window. We'd missed it the year before with our previous consultant and had a shipment held at port."
    },
    {
      name: "Dev Chatterjee",
      role: "CEO",
      company: "Ironclad Manufacturing",
      date: "2025-09-30",
      service: "BIS Certification (ISI Mark)",
      quote:
        "BIS certification for our product category took the full runway they quoted, no surprises mid-process. The factory audit prep checklist alone probably saved us two weeks of back-and-forth with the inspecting officer."
    },
    {
      name: "Kavitha Reddy",
      role: "Proprietor",
      company: "Reddy Textiles",
      date: "2025-07-17",
      service: "Trademark Registration",
      quote:
        "Filed our brand mark and got a Section 11 objection three months in. The reply they drafted cited three prior registrations to distinguish our mark on phonetic grounds — cleared without a hearing."
    }
  ];
});
