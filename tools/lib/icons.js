/* tools/lib/icons.js — the six category icons, drawn for this site from the
   filing metaphor (documents, stamps, seals). 28px line art, 1.5px stroke,
   currentColor, no fill. Inlined into markup at build time. */

// Notched rosette: 16 points alternating between two radii.
function rosettePoints() {
  const pts = [];
  for (let i = 0; i < 16; i++) {
    const r = i % 2 ? 9.6 : 11.2;
    const a = (Math.PI * 2 * i) / 16 - Math.PI / 2;
    pts.push(`${(14 + r * Math.cos(a)).toFixed(2)},${(14 + r * Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(" ");
}

const PATHS = {
  // Building facade: roof slab, three columns, two-step base.
  building: '<rect x="4.5" y="4.5" width="19" height="4" rx="0.5"/><path d="M8.5 11v9M14 11v9M19.5 11v9"/><path d="M5.5 22h17M4 24.5h20"/>',
  // Invoice with a torn foot, two ruled lines, a percent mark lower right.
  invoice: '<path d="M6.5 3.5h15v21l-2.5-1.6-2.5 1.6-2.5-1.6-2.5 1.6-2.5-1.6-2.5 1.6z"/><path d="M9.5 8.5h9M9.5 12h9"/><circle cx="12.2" cy="15.8" r="1"/><circle cx="16.8" cy="20.2" r="1"/><path d="M17.4 15.4 11.6 20.6"/>',
  // Rounded-square stamp impression with a circled R.
  stamp: '<rect x="3.5" y="3.5" width="21" height="21" rx="4.5"/><circle cx="14" cy="14" r="6.2"/><path d="M12 17.6v-7.2h2.4a2 2 0 0 1 0 4H12M14.4 14.4l2 3.2"/>',
  // Notched rosette seal with a check at its centre.
  rosette: `<polygon points="${rosettePoints()}"/><path d="m10.4 14.2 2.5 2.5 4.8-5.2"/>`,
  // Document, folded top-right corner, small circular seal at the lower edge.
  "sealed-document": '<path d="M6.5 3.5h10l5 5v16h-15z"/><path d="M16.5 3.5v5h5"/><path d="M9.5 11.5h7M9.5 14.5h9"/><circle cx="14" cy="20.4" r="2.4"/>',
  // Two overlapping documents; the front one carries a signature line.
  documents: '<path d="M9.5 6V4.5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-1.5"/><rect x="5.5" y="7.5" width="14" height="17" rx="1"/><path d="M8.5 11.5h8M8.5 14.5h5"/><path d="M8.5 21.5h8"/><path d="M9 19.6c.8-1.4 1.6-1.4 2.1 0 .5 1.3 1.3 1.3 2.1-.1"/>'
};

module.exports = function icon(id) {
  if (!PATHS[id]) throw new Error(`icons.js: no icon "${id}"`);
  return `<svg class="panel__icon" width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${PATHS[id]}</svg>`;
};
