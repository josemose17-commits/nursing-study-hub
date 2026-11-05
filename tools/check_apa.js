#!/usr/bin/env node
// Checks the APA papers page: every paper type plans cleanly for 1–30 pages, references format as expected,
// the Word file is a well-formed zip, and the page loads its scripts. Run: node tools/check_apa.js
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..'), A = require(path.join(ROOT, 'apa-core.js'));
const errs = [], err = m => errs.push(m);
const page = fs.readFileSync(path.join(ROOT, 'APA Papers.html'), 'utf8');
['apa-core.js', 'apa.js', 'apa.css', 'nav.js'].forEach(f => { if (!new RegExp(f.replace('.', '\\.') + '\\?v=').test(page)) err(`APA Papers.html does not load ${f} with a ?v= version`); });
const ids = new Set();
A.TYPES.forEach(T => {
  if (ids.has(T.id)) err(`duplicate type ${T.id}`); ids.add(T.id);
  ['name', 'eg', 'person', 'src', 'why'].forEach(k => { if (!T[k]) err(`${T.id}: missing ${k}`); });
  T.secs.forEach(s => { if (!s.t || !s.p || !s.p.length || !(s.w > 0)) err(`${T.id}: bad section ${s.t}`); });
  for (let pg = 1; pg <= 30; pg += 0.5) for (const ab of [false, true]) for (const inc of [false, true]) {
    const P = A.plan({ type: T.id, pages: pg, abstract: ab, inclusive: inc, optional: true, topic: 'test topic' });
    const sum = P.sections.reduce((n, s) => n + s.words, 0);
    if (!(P.words > 0) || P.sections.some(s => !(s.words > 0) || !(s.paras >= 1) || !(s.from >= 2) || s.to < s.from)) err(`${T.id} ${pg}p: bad section numbers`);
    if (Math.abs(sum - P.words) > Math.max(120, P.words * 0.15)) err(`${T.id} ${pg}p: section words ${sum} vs target ${P.words}`);
    if (P.sections[0].intro !== true || !P.sections[P.sections.length - 1].concl) err(`${T.id} ${pg}p: must start with intro and end with conclusion`);
    if (!(P.refPage > P.sections[P.sections.length - 1].from - 1)) err(`${T.id} ${pg}p: references page before the body ends`);
    if (!(P.sources >= 2)) err(`${T.id}: too few sources`);
  }
});
const R = (k, f) => A.reference(k, f).segs.map(s => s.i ? '_' + s.t + '_' : s.t).join('');
const expect = [
  [R('journal', { authors: 'Maria R. Lopez\nAnn Chen', year: '2023', title: 'Early mobility after surgery', journal: 'Journal of Nursing', volume: '12', issue: '3', pages: '45-52', doi: '10.1000/xyz' }), 'Lopez, M. R., & Chen, A. (2023). Early mobility after surgery. _Journal of Nursing, 12_(3), 45–52. https://doi.org/10.1000/xyz'],
  [R('book', { authors: 'Halter, Margaret Jordan', year: '2022', title: 'Foundations', edition: '9', publisher: 'Elsevier' }), 'Halter, M. J. (2022). _Foundations_ (9th ed.). Elsevier.'],
  [R('web', { authors: 'Centers for Disease Control and Prevention', org: true, year: '2024', month: 'May 3', title: 'About sepsis', site: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/sepsis/' }), 'Centers for Disease Control and Prevention. (2024, May 3). _About sepsis_. https://www.cdc.gov/sepsis/'],
  [R('film', { authors: 'David O. Russell', year: '2012', title: 'Silver linings playbook', publisher: 'The Weinstein Company' }), 'Russell, D. O. (Director). (2012). _Silver linings playbook_ [Film]. The Weinstein Company.'],
  [R('chapter', { authors: 'Jane Smith', year: '2020', title: 'Pain', editors: 'Ann B. Lee\nTom Ray', book: 'Big book', edition: '3', pages: '10-20', publisher: 'Wiley' }), 'Smith, J. (2020). Pain. In A. B. Lee & T. Ray (Eds.), _Big book_ (3rd ed., pp. 10–20). Wiley.'],
  [A.reference('journal', { authors: 'A B\nC D\nE F', year: '2021', title: 't' }).cite.p, '(B et al., 2021)'],
  [A.sentenceCase('Care Of Patients With COPD: A Review'), 'Care of patients with COPD: A review']
];
expect.forEach(([got, want]) => { if (got !== want) err(`reference: got\n  ${got}\nwant\n  ${want}`); });
// The Word file: a zip whose entries' CRCs match.
const P = A.plan({ type: 'film', pages: 5, abstract: true, topic: 'bipolar disorder' }); P.refs = A.exampleRefs('film');
const z = Buffer.from(A.docx(P, { name: 'Test & <Name>' }));
if (z.readUInt32LE(0) !== 0x04034b50) err('docx: not a zip');
let off = 0, n = 0;
while (z.readUInt32LE(off) === 0x04034b50) {
  const crc = z.readUInt32LE(off + 14), size = z.readUInt32LE(off + 18), nl = z.readUInt16LE(off + 26), xl = z.readUInt16LE(off + 28);
  const name = z.slice(off + 30, off + 30 + nl).toString(), data = z.slice(off + 30 + nl + xl, off + 30 + nl + xl + size);
  if (A.crc32(data) !== crc) err(`docx: bad CRC for ${name}`);
  if (/\.xml$|\.rels$/.test(name) && !/^<\?xml/.test(data.toString())) err(`docx: ${name} is not XML`);
  off += 30 + nl + xl + size; n++;
}
if (n !== 7) err(`docx: expected 7 parts, found ${n}`);
if (errs.length) { console.error(errs.join('\n')); console.error(`\n${errs.length} problem(s)`); process.exit(1); }
console.log(`APA Papers data OK: ${A.TYPES.length} paper types planned for 1–30 pages, ${expect.length} reference checks, Word file ${n} parts.`);
