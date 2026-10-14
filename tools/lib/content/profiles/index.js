/* All 44 group profiles, keyed by group slug. Each file holds one category
   (Licensing and Company Setup are split in two to keep files readable). */
module.exports = Object.assign(
  {},
  require("./company-a"),
  require("./company-b"),
  require("./gst"),
  require("./ip"),
  require("./iso"),
  require("./licensing-a"),
  require("./licensing-b"),
  require("./corporate")
);
