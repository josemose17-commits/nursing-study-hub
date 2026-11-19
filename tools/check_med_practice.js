#!/usr/bin/env node
// Checks Med practice: every drug maps to a group, endings classify correctly (including traps), questions are
// well-formed for every exam and mode, fact questions never name their own answer, and the page loads its scripts.
// Run: node tools/check_med_practice.js
const assert = require('node:assert/strict'), fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..'), read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const ctx = vm.createContext({ window: {} });
['data/drugs-cardio.js', 'data/drugs-heme.js', 'data/drugs-resp.js', 'data/e3/drugs-gi.js', 'data/e3/drugs-endo.js', 'data/e3/drugs-final.js'].forEach(f => vm.runInContext(read(f), ctx));
const MP = require('../data/med-practice.js'), C = require('../med-practice-core.js');
const B = C.build(MP, JSON.parse(JSON.stringify(ctx.window.DRUG_DATA)));
const page = read('Med Practice.html');
['med-practice.css', 'data/med-practice.js', 'med-practice-core.js', 'med-practice.js', 'nav.js', 'data/drugs-cardio.js', 'data/e3/drugs-final.js'].forEach(f => assert(page.includes(f + '?v='), 'page loads ' + f));
assert.equal(read('index.html').split('Med Practice.html').length - 1, 6, 'home links Med practice from every exam section');

C.EXAMS.forEach(([e]) => { assert(B.drugs.some(d => d.exam === e), 'drugs for exam ' + e); assert(B.groups.some(g => g.exam === e), 'groups for exam ' + e); });
B.drugs.forEach(d => { assert(B.groups.some(g => g.id === d.g), d.n + ' has a group'); assert(d.use || d.fact, d.n + ' has a use or fact'); });
const ids = B.drugs.map(d => d.id); assert.equal(new Set(ids).size, ids.length, 'unique drug ids');

// endings: the longest ending wins; misleading endings are traps
const end = n => { const x = C.endingOf(B, n); return x ? (x.trap ? 'trap' : x.stem.end) : null; };
assert.equal(end('Metoprolol'), '-olol'); assert.equal(end('Lisinopril'), '-pril'); assert.equal(end('Aripiprazole'), '-piprazole');
assert.equal(end('Pantoprazole'), '-prazole'); assert.equal(end('Furosemide'), '-ide (loop)'); assert.equal(end('Glipizide'), 'trap');
for (const t of ['Omeprazole', 'Nystatin', 'Mirtazapine', 'Duloxetine', 'Vancomycin', 'Zuranolone', 'Atomoxetine']) assert.equal(end(t), 'trap', t);
assert.equal(end('Bupropion-naltrexone'), null, 'combination pills are not labeled by one component');
assert.equal(end('Lithium'), null);

for (const [m] of C.MODES) {
  const Q = C.questions(B, ['1', '2', '3', '4', 'F'], m, () => 0.42);
  assert(Q.length > 30, m + ' has questions');
  Q.forEach(q => {
    assert.equal(q.opts.length, 4, q.key); assert(q.a >= 0 && q.a < 4, q.key);
    assert.equal(new Set(q.opts.map(o => o.toLowerCase())).size, 4, 'distinct options ' + q.key);
    if (q.mode === 'facts') assert(!q.info.drug.names.some(n => n.length > 3 && q.prompt.toLowerCase().includes(n.toLowerCase())), 'fact prompt names its drug: ' + q.key);
  });
}
for (const [e] of C.EXAMS) assert(C.questions(B, [e], 'group').length >= 10, 'exam ' + e + ' can run a group round');
const missed = {}; const all = C.questions(B, ['4'], 'facts'); missed[all[0].key] = 1;
assert.equal(C.round(all, 0, missed).length, 1, 'redo rounds use only saved misses');
console.log(`✓ Med practice: ${B.drugs.length} drugs in ${B.groups.length} groups across ${C.EXAMS.length} exam sets, ${B.stems.length} endings, ${B.traps.length} traps; ${C.questions(B, ['1', '2', '3', '4', 'F'], 'mixed').length} questions`);
