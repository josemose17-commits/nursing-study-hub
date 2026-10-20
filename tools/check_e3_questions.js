// Checks the Exam 3 Mastery test questions (data/e3/q/<chapter>.js) before a release:
// - every question is well formed (answer keys in range, an explanation for every option, row and blank, plus ask, cues, phys, rule);
// - every question, recall card, myth check and drug question ties to at least one topic in tools/e3-mastery-cfg.js
//   (in an "Everything" test only questions on a topic are asked, so one that ties to none would never come up);
// - how many questions each topic and subtopic has.
// Run: node tools/check_e3_questions.js            (add --list to print the questions that tie to no subtopic)
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.join(__dirname, '..');
const list = process.argv.includes('--list');

const cfgSrc = fs.readFileSync(path.join(__dirname, 'e3-mastery-cfg.js'), 'utf8');
const cfg = vm.runInNewContext(cfgSrc + '\n({ CHS, GUIDE, GUIDE_SUB, GUIDE_OFF });', {});
// A chapter the study guide narrows (it has a GUIDE_OFF entry) is expected to have questions on nothing it lists.
const narrowed = ch => !!(cfg.GUIDE_OFF || {})[ch];
const win = {};
const ctx = vm.createContext({ window: win });
cfg.CHS.forEach(ch => {
  const f = path.join(ROOT, 'data/e3/q', ch + '.js');
  if (fs.existsSync(f)) vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
});
['drugs-gi.js', 'drugs-endo.js'].forEach(f => vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/e3', f), 'utf8'), ctx));

let errors = 0;
const err = (id, msg) => { errors++; console.log('ERROR', id, '—', msg); };
const filled = v => typeof v === 'string' && v.trim().length > 0;
const idxOk = (a, n) => Number.isInteger(a) && a >= 0 && a < n;
function checkChoices(id, o, a, r, multi) {
  if (!Array.isArray(o) || o.length < 2) return err(id, 'needs options');
  const as = Array.isArray(a) ? a : [a];
  if (!as.length || !as.every(x => idxOk(x, o.length))) err(id, 'answer index out of range');
  if (!multi && as.length !== 1) err(id, 'single-answer group has ' + as.length + ' answers');
  if (!Array.isArray(r) || r.length !== o.length || !r.every(filled)) err(id, 'needs one explanation per option (' + (r || []).length + ' for ' + o.length + ')');
  if (new Set(o).size !== o.length) err(id, 'duplicate options');
}
function checkItem(id, x) {
  ['t', 'q', 'ask', 'phys', 'rule'].forEach(k => { if (!filled(x[k])) err(id, 'missing ' + k); });
  if (!Array.isArray(x.cues) || !x.cues.length || !x.cues.every(filled)) err(id, 'missing cues');
  const f = x.f || 'mcq';
  if (['mcq', 'sata', 'exhibit', 'hot'].includes(f)) {
    checkChoices(id, x.o, x.a, x.r, true);
    if (f === 'sata' && !(Array.isArray(x.a) && x.a.length > 1)) err(id, 'select-all needs 2+ answers');
    if (f === 'sata' && !/select all/i.test(x.q)) err(id, 'select-all stem should say “Select all that apply”');
    if (f !== 'sata' && Array.isArray(x.a) && x.a.length > 1 && !/select all/i.test(x.q)) err(id, 'several answers but the stem does not say select all');
    if (f === 'exhibit' && !(Array.isArray(x.ex) && x.ex.length)) err(id, 'exhibit missing');
    if (f === 'hot' && !(Array.isArray(x.fig) && x.fig.length)) err(id, 'hot spot figure missing');
  } else if (f === 'order') {
    checkChoices(id, x.o, x.a, x.r, true);
    if (!Array.isArray(x.a) || x.a.length !== x.o.length || new Set(x.a).size !== x.o.length) err(id, 'order answer must list every option once');
  } else if (f === 'matrix') {
    if (!Array.isArray(x.cols) || x.cols.length < 2) err(id, 'matrix needs columns');
    if (!Array.isArray(x.rows) || x.rows.length < 3) err(id, 'matrix needs rows');
    (x.rows || []).forEach((rw, i) => { if (!filled(rw.t) || !idxOk(rw.a, (x.cols || []).length) || !filled(rw.r)) err(id, 'matrix row ' + i + ' incomplete'); });
  } else if (f === 'cloze') {
    const bl = (x.parts || []).filter(p => p && typeof p === 'object');
    if (bl.length < 2) err(id, 'cloze needs 2+ blanks');
    bl.forEach((p, i) => { if (!Array.isArray(p.o) || !idxOk(p.a, p.o.length) || !filled(p.r)) err(id, 'cloze blank ' + i + ' incomplete'); });
  } else if (f === 'bow') {
    checkChoices(id + ' cond', (x.cond || {}).o, (x.cond || {}).a, (x.cond || {}).r, false);
    ['act', 'mon'].forEach(g => { const y = x[g] || {}; checkChoices(id + ' ' + g, y.o, y.a, y.r, true); if (!Array.isArray(y.a) || y.a.length < 2) err(id, g + ' needs 2 answers'); });
  } else err(id, 'unknown format ' + f);
}

// The text a question is matched on, as the test page builds it (all of it for topics; what it asks for subtopics).
const fullTxt = b => [b.t, b.q, JSON.stringify(b.o || b.rows || b.parts || [b.cond, b.act, b.mon]), b.rule || '', b.phys || ''].join(' ');
const coreTxt = b => [b.t, b.q, (b.o || []).filter((o, i) => (Array.isArray(b.a) ? b.a : [b.a]).includes(i)).join(' '), b.rule || '', b.phys || '',
  b.rows ? b.rows.map(r => r.t).join(' ') : '', b.parts ? JSON.stringify(b.parts) : '', b.cond ? JSON.stringify([b.cond, b.act, b.mon]) : ''].join(' ');
const perTopic = {}, perSub = {}, noTopic = [], noSub = [], offGuide = [];
function tag(ch, id, txt, core) {
  const g = (cfg.GUIDE[ch] || []).map((x, i) => [ch + ':' + i, x]).filter(([k, x]) => x[1].test(txt)).map(([k]) => k);
  if (!g.length) (narrowed(ch) ? offGuide : noTopic).push(id + ' · ' + txt.slice(0, 90));
  g.forEach(k => {
    perTopic[k] = (perTopic[k] || 0) + 1;
    const subs = (cfg.GUIDE_SUB[k] || []).map((x, i) => [k + '/' + i, x]).filter(([s, x]) => x[1].test(core || txt));
    subs.forEach(([s]) => { perSub[s] = (perSub[s] || 0) + 1; });
    if (!subs.length && (cfg.GUIDE_SUB[k] || []).length > 1) noSub.push(k + ' ← ' + id);
  });
}

const counts = {};
cfg.CHS.forEach(ch => {
  const N = (win.NGN_EXTRA || {})[ch], R = (win.RECALL_EXTRA || {})[ch];
  if (!N && !R) { console.log('Ch ' + ch + ': no question file yet'); return; }
  const c = counts[ch] = { ngn: 0, trad: 0, recall: 0, myth: 0 };
  (N || []).forEach((x, i) => { const id = ch + '|n|' + i; checkItem(id, x); if (!x.f) err(id, 'NGN item needs f'); c.ngn++; tag(ch, id, fullTxt(x), coreTxt(x)); });
  ((R || {}).nclex || []).forEach((x, i) => { const id = ch + '|c|' + i; if (x.f) err(id, 'nclex item should not have f'); checkItem(id, x); c.trad++; tag(ch, id, fullTxt(x), coreTxt(x)); });
  ((R || {}).rq || []).forEach((x, i) => { const id = ch + '|r|' + i; if (!Array.isArray(x) || x.length !== 7 || ![0, 2, 3, 4, 5].every(k => filled(x[k]))) err(id, 'recall card needs [type, hy, prompt, answer, why, move, trap]'); c.recall++; tag(ch, id, x[2] + ' ' + x[3]); });
  const mc = (R || {}).mc || [];
  if (mc.length && mc.length < 4) err(ch, 'myth checks need at least 4 per chapter (has ' + mc.length + ')');
  mc.forEach((x, i) => { const id = ch + '|m|' + i; if (!Array.isArray(x) || x.length !== 4 || !x.every(filled)) err(id, 'myth needs [claim, fact, harm, why]'); c.myth++; tag(ch, id, x[0] + ' ' + x[1]); });
  if (new Set(mc.map(x => x[1])).size !== mc.length) err(ch, 'two myths share the same fact');
  if (!(win.EXPLAIN_CH || {})[ch]) err(ch, 'EXPLAIN_CH not set');
});
// Generated drug questions are matched on the drug's name, use and mechanism.
(win.DRUG_DATA.drugs || []).forEach(d => {
  const chs = (String(d.ch).match(/\d\d/g) || []).filter(c => cfg.CHS.includes(c)); if (!chs.length) return;
  const ch = chs[0], txt = [[d.n, d.g, d.c].join(' '), d.ind, d.moa, d.plain].join(' ');
  tag(ch, 'drug ' + d.id, txt, txt);
});

console.log('\nQuestions per chapter (NGN · traditional · recall · myth):');
Object.keys(counts).forEach(ch => { const c = counts[ch]; console.log('  Ch ' + ch + ': ' + c.ngn + ' · ' + c.trad + ' · ' + c.recall + ' · ' + c.myth); });
console.log('\nPer topic (questions, recall, myths and drugs together) and its subtopics:');
Object.keys(cfg.GUIDE).forEach(ch => cfg.GUIDE[ch].forEach((g, i) => {
  const k = ch + ':' + i;
  console.log('  ' + k + ' ' + g[0] + ': ' + (perTopic[k] || 0));
  console.log('      ' + (cfg.GUIDE_SUB[k] || []).map((s, j) => s[0] + ' ' + (perSub[k + '/' + j] || 0)).join(' · '));
}));
if (noTopic.length) { console.log('\nTied to no topic (never asked in an Everything test): ' + noTopic.length); noTopic.forEach(x => console.log('  ' + x)); }
if (offGuide.length) console.log('\nOff the study guide (kept for the map, not asked in an Everything test): ' + offGuide.length + (list ? '\n  ' + offGuide.join('\n  ') : ' (--list shows them)'));
if (list && noSub.length) { console.log('\nOn a topic but no subtopic: ' + noSub.length); noSub.forEach(x => console.log('  ' + x)); }
console.log('\n' + (errors ? errors + ' error(s)' : 'No format errors.') + (noTopic.length ? ' ' + noTopic.length + ' item(s) tie to no topic.' : ''));
process.exitCode = errors || noTopic.length ? 1 : 0;
