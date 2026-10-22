// Checks that every written question in both Mastery tests carries a clinical judgment step, a Client Needs category
// and at least one strategy (data/cj-tags.js, data/e3/cj-tags.js, or cj/cn/st on the question itself), and that every
// key exists in ncjmm.js. Generated drug questions, myth checks and recall prompts are labeled by the test itself.
// Run: node tools/check_cj_tags.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.join(__dirname, '..');
const run = (files) => { const win = {}; const ctx = vm.createContext({ window: win }); files.forEach(f => vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f })); return win; };
const N = run(['ncjmm.js']).NCJMM;
const SK = new Set(N.skills.map(s => s[0])), CN = new Set(N.needs.map(s => s[0])), ST = new Set(Object.keys(N.strategies));
const exams = {
  'Exam 2': ['data/ngn-22-25.js', 'data/ngn-27-30.js', 'data/ngn-33-34.js', 'data/recall-22-23.js', 'data/recall-24-25.js', 'data/recall-27-28.js', 'data/recall-29-30.js', 'data/recall-33-34.js', 'data/extra-questions.js', 'data/cj-tags.js'],
  'Exam 3 + final': fs.readdirSync(path.join(ROOT, 'data/e3/q')).filter(f => /^\d+\.js$/.test(f)).map(f => 'data/e3/q/' + f).concat(['data/e3/q/more.js', 'data/e3/cases.js', 'data/e3/cj-tags.js'])
};
let bad = 0;
for (const [name, files] of Object.entries(exams)) {
  const w = run(files), T = w.CJ_TAGS || {}, ids = [], counts = {};
  const add = (id, x) => ids.push([id, x]);
  Object.keys(w.NGN_EXTRA || {}).forEach(ch => w.NGN_EXTRA[ch].forEach((x, i) => add(ch + '|n|' + i, x)));
  Object.keys(w.RECALL_EXTRA || {}).forEach(ch => ((w.RECALL_EXTRA[ch] || {}).nclex || []).forEach((x, i) => add(ch + '|c|' + i, x)));
  Object.keys(w.EXTRA_Q || {}).forEach(ch => w.EXTRA_Q[ch].forEach((x, i) => add(ch + '|x|' + i, x)));
  (w.CASES || []).forEach(cs => cs.steps.forEach((x, i) => add('cs|' + cs.id + '|' + i, x)));
  const known = new Set(ids.map(x => x[0]));
  Object.keys(T).forEach(id => { if (!known.has(id)) { bad++; console.log(name, 'tag for a question that does not exist:', id); } });
  ids.forEach(([id, x]) => {
    const t = T[id] ? T[id].split(' ') : x.cj ? [x.cj, x.cn, (x.st || []).join(',')] : null;
    if (!t) { bad++; return console.log(name, 'no label:', id, (x.t || '')); }
    const [cj, cn, st] = t;
    if (!SK.has(cj) || !CN.has(cn) || !st || !st.split(',').every(k => ST.has(k))) { bad++; console.log(name, 'bad label:', id, t.join(' ')); }
    counts[cj] = (counts[cj] || 0) + 1;
  });
  console.log(name + ': ' + ids.length + ' questions labeled · by step ' + N.skills.map(s => s[0] + ' ' + (counts[s[0]] || 0)).join(', '));
}
console.log(bad ? bad + ' problem(s)' : 'All labels valid.');
process.exitCode = bad ? 1 : 0;
