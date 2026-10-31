#!/usr/bin/env node
// Checks the Exam 4 (mental health) data in data/mh: every condition step, topic card, drill item and question is
// well formed, every answer key points at a real option, every link and video tag points at something that exists,
// and "Exam 4 Map.html" loads every data file. Run: node tools/check_mh.js
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
// Each exam page and its data folder; WEEKS are the syllabus weeks its notes and questions may belong to.
const EXAMS = [['data/e1', 'Exam 1 Map.html', [1, 2]], ['data/mh', 'Exam 4 Map.html', [11, 12]], ['data/mh5', 'Exam 5 Map.html', [13, 14, 15]]];
let total = 0;
for (const [DIRNAME, PAGE, WEEKS] of EXAMS) {
if (!fs.existsSync(path.join(ROOT, DIRNAME))) continue;
const DIR = path.join(ROOT, DIRNAME);
const page = fs.readFileSync(path.join(ROOT, PAGE), 'utf8');
const win = {};
const ctx = vm.createContext({ window: win });
const files = fs.readdirSync(DIR).filter(f => f.endsWith('.js')).sort();
const errs = [];
const err = m => errs.push(m);
for (const f of files) {
  vm.runInContext(fs.readFileSync(path.join(DIR, f), 'utf8'), ctx, { filename: f });
  if (!page.includes(DIRNAME + '/' + f + '?v=')) err(`${PAGE} does not load ${DIRNAME}/${f}`);
}
const C = win.MH_CONDS || [], T = win.MH_TOPICS || [], D = win.MH_DRILLS || [], Q = win.MH_Q || [], V = win.MH_VIDEOS || [];
const STEPS = ['rc', 'ac', 'ph', 'gs', 'ta', 'eo'];
const str = (v, where) => { if (typeof v !== 'string' || !v.trim()) err(`${where}: missing text`); };
const bold = (s, where) => { if (typeof s === 'string' && (s.split('**').length - 1) % 2) err(`${where}: unbalanced **`); };
function card(c, where) {
  str(c.h, where + ' h'); bold(c.h, where);
  const b = Array.isArray(c.b) ? c.b : [c.b];
  if (!b.length || b.some(x => typeof x !== 'string' || !x.trim())) err(`${where}: empty bullet`);
  b.forEach((x, i) => bold(x, `${where} b${i}`)); bold(c.why, where + ' why');
}
function term(x, where) { ['t', 'see', 'why', 'means'].forEach(k => { str(x[k], `${where}.${k}`); bold(x[k], `${where}.${k}`); }); }
const ids = new Set();
function uniq(id, where) { if (ids.has(id)) err(`duplicate id ${id} (${where})`); ids.add(id); }

C.forEach(c => {
  const w = 'condition ' + c.id; uniq('c-' + c.id, w);
  ['id', 'group', 'name', 'short', 'patient'].forEach(k => str(c[k], `${w}.${k}`));
  if (!WEEKS.includes(c.week)) err(`${w}: week must be one of ${WEEKS}`);
  if (!Array.isArray(c.report) || c.report.length !== 4) err(`${w}: report must be [S, B, A, R]`); else c.report.forEach((r, i) => { str(r, `${w} report ${i}`); bold(r, `${w} report ${i}`); });
  STEPS.forEach(k => {
    const s = c.steps && c.steps[k];
    if (!s) return err(`${w}: step ${k} missing`);
    str(s.gist, `${w} ${k} gist`); bold(s.gist, `${w} ${k} gist`);
    (s.terms || []).forEach((x, i) => term(x, `${w} ${k} term ${i}`));
    (s.cards || []).forEach((x, i) => card(x, `${w} ${k} card ${i}`));
  });
  Object.keys(c.steps || {}).forEach(k => { if (!STEPS.includes(k)) err(`${w}: unknown step ${k}`); });
});
T.forEach(t => {
  const w = 'topic ' + t.id; uniq('t-' + t.id, w);
  ['id', 'ch', 'title', 'short', 'lead'].forEach(k => str(t[k], `${w}.${k}`)); bold(t.lead, w + ' lead');
  if (!WEEKS.includes(t.week)) err(`${w}: week must be one of ${WEEKS}`);
  (t.terms || []).forEach((x, i) => term(x, `${w} term ${i}`));
  if (!(t.cards || []).length) err(`${w}: no cards`);
  (t.cards || []).forEach((x, i) => card(x, `${w} card ${i}`));
  (t.recall || []).forEach((r, i) => { if (!Array.isArray(r) || r.length !== 2) err(`${w} recall ${i}: must be [question, answer]`); else r.forEach(x => { str(x, `${w} recall ${i}`); bold(x, `${w} recall ${i}`); }); });
});
const topicIds = new Set(T.map(t => t.id));
D.forEach(d => {
  const w = 'drill ' + d.id; uniq('p-' + d.id, w);
  ['id', 'title', 'intro', 'kind'].forEach(k => str(d[k], `${w}.${k}`));
  if (d.topic != null && !topicIds.has(d.topic)) err(`${w}: unknown topic ${d.topic}`);
  if (!(d.items || []).length) err(`${w}: no items`);
  if (d.type === 'pick') d.items.forEach((it, i) => {
    str(it.say || it.q, `${w} item ${i}`);
    const ok = (it.opts || []).filter(o => o.ok).length;
    if (ok !== 1) err(`${w} item ${i}: needs exactly one ok option (has ${ok})`);
    if ((it.opts || []).length < 3) err(`${w} item ${i}: fewer than 3 options`);
    (it.opts || []).forEach((o, j) => { str(o.t, `${w} item ${i} opt ${j}`); str(o.why, `${w} item ${i} opt ${j} why`); });
  });
  else if (d.type === 'sort') {
    if ((d.choices || []).length < 2) err(`${w}: needs choices`);
    if (new Set(d.choices).size !== d.choices.length) err(`${w}: duplicate choices`);
    d.items.forEach((it, i) => { str(it.q, `${w} item ${i}`); str(it.why, `${w} item ${i} why`); if (!d.choices.includes(it.a)) err(`${w} item ${i}: answer "${it.a}" is not a choice`); });
  } else err(`${w}: type must be pick or sort`);
});
const links = new Set([...C.map(c => 'c-' + c.id), ...T.map(t => 't-' + t.id)]);
Q.forEach(q => {
  const w = 'question ' + q.id; uniq(q.id, w);
  str(q.stem, w); str(q.why, w + ' why'); bold(q.why, w + ' why'); bold(q.stem, w);
  if (!WEEKS.includes(q.wk)) err(`${w}: wk must be one of ${WEEKS}`);
  if (!links.has(q.link)) err(`${w}: link ${q.link} doesn't exist`);
  if (!Array.isArray(q.opts) || q.opts.length < 3) err(`${w}: needs at least 3 options`);
  const a = Array.isArray(q.a) ? q.a : [q.a];
  if (Array.isArray(q.a) && q.a.length < 2) err(`${w}: select-all needs 2 or more answers`);
  if (Array.isArray(q.a) && !/select all/i.test(q.stem)) err(`${w}: select-all stem should say "Select all that apply"`);
  if (!Array.isArray(q.a) && /select all/i.test(q.stem)) err(`${w}: stem says select all but the key is single`);
  if (new Set(a).size !== a.length) err(`${w}: repeated answer`);
  a.forEach(k => { if (!Number.isInteger(k) || k < 0 || k >= q.opts.length) err(`${w}: answer ${k} out of range`); });
});
const tags = new Set([...C.map(c => c.id), ...T.map(t => t.id)]), vids = new Set();
V.forEach(v => {
  if (!/^[\w-]{11}$/.test(v.id)) err(`video ${v.id}: bad id`);
  if (vids.has(v.id)) err(`video ${v.id}: listed twice`); vids.add(v.id);
  str(v.title, 'video ' + v.id); str(v.see, 'video ' + v.id + ' see');
  if (!(v.tags || []).length) err(`video ${v.id}: no tags`);
  (v.tags || []).forEach(t => { if (!tags.has(t)) err(`video ${v.id}: unknown tag ${t}`); });
});
C.forEach(c => { if (!V.some(v => v.tags.includes(c.id))) err(`condition ${c.id}: no video`); });
T.forEach(t => { if (!V.some(v => v.tags.includes(t.id))) err(`topic ${t.id}: no video`); });

if (errs.length) { console.error(PAGE + ':\n' + errs.join('\n')); console.error(`\n${errs.length} problem(s)`); process.exit(1); }
console.log(`${PAGE} data OK: ${C.length} conditions, ${T.length} topics, ${D.length} drills (${D.reduce((n, d) => n + d.items.length, 0)} items), ${Q.length} questions (${Q.filter(q => Array.isArray(q.a)).length} select-all), ${V.length} videos.`);
}
