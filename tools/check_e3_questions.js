// Checks the Exam 3 Mastery test questions (data/e3/q/<chapter>.js) before a release:
// - every question is well formed (answer keys in range, an explanation for every option, row and blank, plus ask, cues, phys, rule);
// - every question, recall card, myth check and drug question ties to at least one topic in tools/e3-mastery-cfg.js
//   (or tools/final-mastery-cfg.js for the final)
//   (in an "Everything" test only questions on a topic are asked, so one that ties to none would never come up);
// - how many questions each topic and subtopic has.
// Run: node tools/check_e3_questions.js            (add --list to print the questions that tie to no subtopic)
//      node tools/check_e3_questions.js final      (the final's test: tools/final-mastery-cfg.js)
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.join(__dirname, '..');
const list = process.argv.includes('--list');
const FINAL = process.argv.includes('final');

const cfgSrc = fs.readFileSync(path.join(__dirname, FINAL ? 'final-mastery-cfg.js' : 'e3-mastery-cfg.js'), 'utf8');
const cfg = vm.runInNewContext(cfgSrc + '\n({ CHS, GUIDE, GUIDE_SUB, GUIDE_OFF, E2_FILES: typeof E2_FILES === "undefined" ? [] : E2_FILES });', {});
// A chapter the study guide narrows (it has a GUIDE_OFF entry) is expected to have questions on nothing it lists.
const narrowed = ch => !!(cfg.GUIDE_OFF || {})[ch];
const win = {};
const ctx = vm.createContext({ window: win });
// Chapters shared with Exam 2 keep their Exam 2 question files (E2_FILES), loaded first, as the test page does.
cfg.E2_FILES.forEach(f => vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f }));
cfg.CHS.forEach(ch => {
  const f = path.join(ROOT, 'data/e3/q', ch + '.js');
  if (fs.existsSync(f)) vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
});
['q/more.js', 'cases.js', 'cj-tags.js'].forEach(f => vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/e3', f), 'utf8'), ctx, { filename: f }));
['drugs-gi.js', 'drugs-endo.js'].concat(FINAL ? ['drugs-final.js'] : []).forEach(f => vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/e3', f), 'utf8'), ctx));

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
  if (x.st && (!Array.isArray(x.st) || !x.st.length)) err(id, 'st must be a list of strategies');
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
  } else if (f === 'hl') {
    const pk = (x.parts || []).filter(p => p && typeof p === 'object');
    if (pk.length < 4) err(id, 'highlight needs 4+ highlightable parts');
    if (!pk.some(p => p.c) || pk.every(p => p.c)) err(id, 'highlight needs some right and some wrong parts');
    pk.forEach((p, i) => { if (!filled(p.h) || !filled(p.r) || ![0, 1].includes(p.c)) err(id, 'highlight part ' + i + ' needs h, c (0/1) and r'); });
  } else if (f === 'hlt') {
    if (!Array.isArray(x.head) || x.head.length < 2) err(id, 'highlight table needs a header row');
    if (!Array.isArray(x.rows) || x.rows.length < 4) err(id, 'highlight table needs 4+ rows');
    (x.rows || []).forEach((rw, i) => { if (!Array.isArray(rw.cells) || rw.cells.length !== (x.head || []).length || !filled(rw.r) || ![0, 1].includes(rw.c)) err(id, 'highlight row ' + i + ' incomplete'); });
    if (!(x.rows || []).some(r => r.c)) err(id, 'highlight table has nothing to highlight');
  } else if (f === 'selectn') {
    checkChoices(id, x.o, x.a, x.r, true);
    const n = (x.a || []).length, word = ['', 'one', 'two', 'three', 'four', 'five'][n];
    if (n < 2 || !new RegExp('select (the )?(' + n + '|' + word + ')\\b', 'i').test(x.q)) err(id, 'select-N stem must say “Select the ' + n + '”');
  } else if (f === 'mmatrix') {
    if (!Array.isArray(x.cols) || x.cols.length < 2) err(id, 'matrix needs columns');
    if (!Array.isArray(x.rows) || x.rows.length < 4) err(id, 'matrix needs 4+ rows');
    (x.rows || []).forEach((rw, i) => { if (!filled(rw.t) || !Array.isArray(rw.a) || !rw.a.length || !rw.a.every(a => idxOk(a, (x.cols || []).length)) || !filled(rw.r)) err(id, 'matrix row ' + i + ' incomplete'); });
    if (!(x.rows || []).some(r => r.a.length > 1)) err(id, 'a multiple-response matrix should have a row with 2+ answers');
    // NCSBN scores each column on its own and needs a pick in every column, so every column must have a right row.
    (x.cols || []).forEach((c, ci) => { if (!(x.rows || []).some(r => (r.a || []).includes(ci))) err(id, 'matrix column “' + c + '” has no right row'); });
  } else if (f === 'group') {
    if (!Array.isArray(x.groups) || x.groups.length < 2) err(id, 'grouping needs 2+ groups');
    (x.groups || []).forEach((g, i) => { if (!filled(g.h)) err(id, 'group ' + i + ' needs h'); checkChoices(id + ' g' + i, g.o, g.a, g.r, true); });
  } else if (f === 'dnd' || f === 'dndr' || f === 'ddr') {
    const bl = (x.parts || []).filter(p => p && typeof p === 'object');
    if (f !== 'dnd' && (bl.length < 2 || bl.length > 3)) err(id, 'rationale needs 2 or 3 linked blanks');
    if (f === 'dnd' && bl.length < 2) err(id, 'drag and drop needs 2+ blanks');
    if (f === 'ddr') bl.forEach((p, i) => { if (!Array.isArray(p.o) || !idxOk(p.a, p.o.length) || !filled(p.r)) err(id, 'blank ' + i + ' incomplete'); });
    else {
      if (!Array.isArray(x.tokens) || x.tokens.length <= bl.length || new Set(x.tokens).size !== x.tokens.length) err(id, 'needs more unique tokens than blanks');
      bl.forEach((p, i) => { if (!idxOk(p.a, (x.tokens || []).length) || !filled(p.r)) err(id, 'blank ' + i + ' incomplete'); });
      if (new Set(bl.map(p => p.a)).size !== bl.length) err(id, 'two blanks share a token');
    }
  } else if (f === 'ddt') {
    if (!Array.isArray(x.head) || !Array.isArray(x.rows) || x.rows.length < 2) err(id, 'drop-down table needs head and 2+ rows');
    const bl = [].concat(...(x.rows || [])).filter(c => c && typeof c === 'object');
    if (bl.length < 3) err(id, 'drop-down table needs 3+ blanks');
    (x.rows || []).forEach((row, i) => { if (row.length !== (x.head || []).length) err(id, 'row ' + i + ' has the wrong number of cells'); });
    bl.forEach((p, i) => { if (!Array.isArray(p.o) || !idxOk(p.a, p.o.length) || !filled(p.r)) err(id, 'table blank ' + i + ' incomplete'); });
  } else if (f === 'calc') {
    if (typeof x.ans !== 'number' || !isFinite(x.ans)) err(id, 'calc needs a numeric ans');
    if (!Number.isInteger(x.dp) || Math.round(x.ans * Math.pow(10, x.dp)) / Math.pow(10, x.dp) !== x.ans) err(id, 'calc ans must already be rounded to dp');
    if (!filled(x.work) || !filled(x.unit)) err(id, 'calc needs work and unit');
    if (!/round|whole number|decimal place/i.test(x.q)) err(id, 'calc stem must say how to round');
  } else if (f === 'bow') {
    checkChoices(id + ' cond', (x.cond || {}).o, (x.cond || {}).a, (x.cond || {}).r, false);
    ['act', 'mon'].forEach(g => { const y = x[g] || {}; checkChoices(id + ' ' + g, y.o, y.a, y.r, true); if (!Array.isArray(y.a) || y.a.length < 2) err(id, g + ' needs 2 answers'); });
  } else err(id, 'unknown format ' + f);
}

// The text a question is matched on, as the test page builds it (all of it for topics; what it asks for subtopics).
const fullTxt = b => [b.t, b.q, JSON.stringify(b.o || b.rows || b.parts || b.groups || [b.cond, b.act, b.mon]) + (b.tokens ? ' ' + b.tokens.join(' ') : ''), b.rule || '', b.phys || ''].join(' ');
const coreTxt = b => [b.t, b.q, (b.o || []).filter((o, i) => (Array.isArray(b.a) ? b.a : [b.a]).includes(i)).join(' '), b.rule || '', b.phys || '',
  b.rows ? b.rows.map(r => r.t || (r.cells || []).join(' ')).join(' ') : '', b.parts ? JSON.stringify(b.parts) : '', b.cond ? JSON.stringify([b.cond, b.act, b.mon]) : '', b.groups ? JSON.stringify(b.groups) : ''].join(' ');
// Exam 2's questions keep their explanations in data/explain (window.EXPLAIN, by id); the test layers them on as here.
const patch = (base, p) => { base = base || []; if (!p) return base; if (Array.isArray(p)) return p.length === base.length ? p : base; const out = base.slice(); Object.keys(p).forEach(k => { out[+k] = p[k]; }); return out; };
function explained(x, id) {
  const E = (win.EXPLAIN || {})[id]; if (!E) return x;
  const y = Object.assign({}, x);
  if (E.r && x.o) y.r = patch(x.r, E.r);
  if (E.rows && x.rows) { const rr = patch(x.rows.map(r => r.r), E.rows); y.rows = x.rows.map((r, i) => Object.assign({}, r, { r: rr[i] })); }
  if (E.blanks && x.parts) y.parts = x.parts.map((p, i) => p && typeof p === 'object' && E.blanks[i] ? Object.assign({}, p, { r: E.blanks[i] }) : p);
  ['cond', 'act', 'mon'].forEach(g => { if (E[g] && x[g]) y[g] = Object.assign({}, x[g], { r: patch(x[g].r, E[g]) }); });
  ['ask', 'cues', 'phys', 'rule'].forEach(k => { if (E[k]) y[k] = E[k]; });
  return y;
}
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
  (N || []).forEach((x, i) => { const id = ch + '|n|' + i; x = explained(x, id); checkItem(id, x); if (!x.f) err(id, 'NGN item needs f'); c.ngn++; tag(ch, id, fullTxt(x), coreTxt(x)); });
  ((R || {}).nclex || []).forEach((x, i) => { const id = ch + '|c|' + i; if (x.f) err(id, 'nclex item should not have f'); x = explained(x, id); checkItem(id, x); c.trad++; tag(ch, id, fullTxt(x), coreTxt(x)); });
  ((win.EXTRA_Q || {})[ch] || []).forEach((x, i) => { const id = ch + '|x|' + i; x = explained(x, id); checkItem(id, x); c.trad++; tag(ch, id, fullTxt(x), coreTxt(x)); });
  ((R || {}).rq || []).forEach((x, i) => { const id = ch + '|r|' + i; if (!Array.isArray(x) || x.length !== 7 || ![0, 2, 3, 4, 5].every(k => filled(x[k]))) err(id, 'recall card needs [type, hy, prompt, answer, why, move, trap]'); c.recall++; tag(ch, id, x[2] + ' ' + x[3]); });
  const mc = (R || {}).mc || [];
  if (mc.length && mc.length < 4) err(ch, 'myth checks need at least 4 per chapter (has ' + mc.length + ')');
  // Exam 2's myths are [claim, fact, harm], with the why in data/explain/cards.js (EXPLAIN_CARDS[ch].mc[i].why).
  mc.forEach((x, i) => { const id = ch + '|m|' + i, back = ((((win.EXPLAIN_CARDS || {})[ch] || {}).mc || {})[i] || {});
    const ok = Array.isArray(x) && x.every(filled) && (x.length === 4 || (x.length === 3 && filled(back.why)));
    if (!ok) err(id, 'myth needs [claim, fact, harm, why]'); c.myth++; tag(ch, id, x[0] + ' ' + x[1]); });
  if (new Set(mc.map(x => x[1])).size !== mc.length) err(ch, 'two myths share the same fact');
  if (!(win.EXPLAIN_CH || {})[ch]) err(ch, 'EXPLAIN_CH not set');
});
// Unfolding case studies: six steps, one per clinical judgment step in order, each a well-formed question.
const ORDER = ['rc', 'ac', 'ph', 'gs', 'ta', 'eo'];
const kept = (win.CASES || []).filter(cs => !cfg.CHS.includes(cs.ch)).map(cs => cs.id + ' (Ch ' + cs.ch + ')');
(win.CASES || []).forEach(cs => {
  const on = cfg.CHS.includes(cs.ch);
  if (!filled(cs.title) || !filled(cs.id) || !/^\d\d$/.test(cs.ch)) err('case ' + cs.id, 'needs id, title and a chapter');
  if (!Array.isArray(cs.steps) || cs.steps.length !== 6) err('case ' + cs.id, 'needs 6 steps');
  (cs.steps || []).forEach((x, i) => {
    const id = 'cs|' + cs.id + '|' + i;
    if (x.cj !== ORDER[i]) err(id, 'step ' + (i + 1) + ' should test ' + ORDER[i] + ' (has ' + x.cj + ')');
    if (!Array.isArray(x.add)) err(id, 'needs add (chart sections, may be empty)');
    (x.add || []).forEach(e => { if (!filled(e.h) || !(Array.isArray(e.lines) || Array.isArray(e.table))) err(id, 'chart section needs h and lines or table'); });
    checkItem(id, x); if (on) tag(cs.ch, id, fullTxt(x), coreTxt(x));
  });
});
console.log('Case studies: ' + (win.CASES || []).length + (kept.length ? ' — ' + kept.length + ' on chapters off this exam, kept for later and not offered: ' + kept.join(', ') : ''));
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
