#!/usr/bin/env node
// Checks the care plan helper data: the NANDA-I index (277 labels, unique codes), the own-words guides, the form
// items, the lab tables and the page's script tags. Run: node tools/check_careplan.js
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..'), errs = [], err = m => errs.push(m);
const ctx = { window: {} }; vm.createContext(ctx);
['nanda-index.js', 'nanda-guides.js', 'form.js', 'labs.js'].forEach(f => vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/careplan', f), 'utf8'), ctx, { filename: f }));
const W = ctx.window;

// NANDA-I index
const DX = {}, labels = new Set();
if (W.NANDA_INDEX.length !== 13) err(`expected 13 domains, got ${W.NANDA_INDEX.length}`);
let classes = 0;
W.NANDA_INDEX.forEach(([dn, dom, cls], i) => {
  if (dn !== i + 1 || !dom) err(`domain ${i + 1} is malformed`);
  cls.forEach(([cn, cname, s], j) => {
    classes++;
    if (cn !== j + 1 || !cname) err(`domain ${dn} class ${j + 1} is malformed`);
    if (!s) return;
    s.split(';').forEach(e => {
      const [c, l, p] = e.split('|');
      if (!/^\d{5}$/.test(c) || !l || !/^\d+$/.test(p)) err(`bad index entry "${e}"`);
      if (DX[c]) err(`duplicate code ${c}`);
      if (labels.has(l.toLowerCase())) err(`duplicate label ${l}`);
      DX[c] = { l, p: +p, t: /^Risk for /.test(l) ? 'risk' : /^Readiness for enhanced /.test(l) ? 'promo' : 'problem' }; labels.add(l.toLowerCase());
    });
  });
});
const n = Object.keys(DX).length;
if (n !== 277) err(`expected 277 diagnoses, got ${n}`);
if (classes !== 48) err(`expected 48 classes, got ${classes}`);
(W.NANDA_OLD || []).forEach(([o, c]) => { if (!DX[c]) err(`old label "${o}" points to missing code ${c}`); });

// Guides
const CUE = new Set(); W.CP_CUES.forEach(([g, list]) => list.forEach(([id, l]) => { if (CUE.has(id)) err(`duplicate cue ${id}`); if (!l) err(`cue ${id} has no label`); CUE.add(id); }));
const used = new Set(), seen = new Set();
W.CP_GUIDES.forEach(g => {
  const d = DX[g.c], at = `guide ${g.c}`;
  if (!d) return err(`${at}: code not in the index`);
  if (seen.has(g.c)) err(`${at}: duplicate`); seen.add(g.c);
  if (g.t !== d.t) err(`${at}: type ${g.t} but "${d.l}" reads as ${d.t}`);
  if (!g.plain || g.plain.length < 30) err(`${at}: plain meaning missing`);
  if (!g.tags || !g.tags.length) err(`${at}: no cue tags`);
  (g.tags || []).forEach(t => { if (!CUE.has(t)) err(`${at}: unknown cue tag ${t}`); used.add(t); });
  if (g.t !== 'risk' && !(g.cues && g.cues.length >= 2)) err(`${at}: needs at least 2 cues`);
  if (g.t === 'risk' && g.cues && g.cues.length) err(`${at}: a risk diagnosis has no cues (defining characteristics)`);
  if (g.t !== 'promo' && !(g.factors && g.factors.length >= 2)) err(`${at}: needs at least 2 factors`);
  if (!(g.stg && g.stg.length) || !(g.ltg && g.ltg.length)) err(`${at}: needs short- and long-term goals`);
  if (!(g.iv && g.iv.length >= 3)) err(`${at}: needs at least 3 interventions`);
  (g.iv || []).forEach((r, k) => { if (r.length !== 3 || !'ADTC'.includes(r[0]) || r[0].length !== 1 || !r[1] || !r[2]) err(`${at}: intervention ${k + 1} is malformed`); });
  if (!g.ev || !/^Goal (met|partially met|not met)/.test(g.ev)) err(`${at}: evaluation should start "Goal met…"`);
});
CUE.forEach(c => { if (!used.has(c)) err(`cue ${c} is not used by any guide`); });

// Form
const TYPES = new Set(['grid', 'note', 'line', 'text', 'support', 'erikson', 'meds', 'pmhmeds', 'sbar', 'vitals', 'systems', 'orders', 'labs', 'fe', 'plan']);
const keys = new Set(), secs = new Set(), sys = new Set(W.CP_SYSTEMS.map(s => s[0])), vit = new Set(W.CP_VITALS.map(v => v[0]));
if (sys.size !== 8 || W.CP_EVAL_ORDER.length !== 8 || W.CP_EVAL_ORDER.some(k => !sys.has(k))) err('systems or evaluation order are off');
W.CP_SYSTEMS.forEach(s => { if (s.length !== 4 || !s[2].length || !s[3]) err(`system ${s[0]} is malformed`); });
if (W.CP_ERIK.length !== 8 || W.CP_ERIK.some(e => e.length !== 4)) err('Erikson table is malformed');
W.CP_FORM.forEach(sec => {
  if (secs.has(sec.id)) err(`duplicate section ${sec.id}`); secs.add(sec.id);
  sec.items.forEach(it => {
    if (!TYPES.has(it.type)) err(`${sec.id}: unknown item type ${it.type}`);
    if (it.k) { if (keys.has(it.k)) err(`duplicate form key ${it.k}`); keys.add(it.k); }
    else if (!['grid', 'note'].includes(it.type)) err(`${sec.id}: ${it.type} item without a key`);
    if (it.type === 'grid') it.fields.forEach(f => { if (keys.has(f[0])) err(`duplicate field ${f[0]}`); keys.add(f[0]); });
    if (it.type === 'text' && !(it.q && it.ask && it.ask.length)) err(`${it.k}: text items need a question and ask list`);
    if (it.type === 'sbar') ['S', 'B', 'A', 'R'].forEach(x => { if (!(it.ask && it.ask[x] && it.ask[x].length)) err(`${it.k}: no ask list for ${x}`); if (!(it.ex && it.ex[x])) err(`${it.k}: no example for ${x}`); });
    if (it.type === 'vitals' && it.ex) Object.keys(it.ex).forEach(k => { if (!vit.has(k)) err(`${it.k}: unknown vital ${k}`); });
    if ((it.type === 'meds' || it.type === 'orders') && it.ex) it.ex.forEach(r => { if (r.length !== (it.type === 'meds' ? 5 : 3)) err(`${it.k}: example row has ${r.length} cells`); });
  });
});
['cc', 'pmh', 'q4', 'q5', 'sbar1', 'sbar2', 'sbar3', 'vs1', 'vs2', 'sys1', 'sys2', 'orders', 'labs', 'fe', 'plan'].forEach(k => { if (!keys.has(k)) err(`form is missing ${k}`); });

// Labs
const LK = new Set();
W.CP_LABS.forEach(pn => pn.rows.forEach(r => {
  const at = `lab ${r.k}`;
  if (LK.has(r.k)) err(`${at}: duplicate`); LK.add(r.k);
  if (!r.n || !r.r) err(`${at}: needs a name and range`);
  if (r.q) { if (!Array.isArray(r.ok)) err(`${at}: qualitative rows need ok words`); }
  else {
    if (typeof r.lo !== 'number' && typeof r.hi !== 'number') err(`${at}: needs lo or hi`);
    if (typeof r.lo === 'number' && typeof r.hi === 'number' && r.lo >= r.hi) err(`${at}: lo is not below hi`);
    ['F', 'M'].forEach(s => { if (r[s] && !(r[s].length === 2 && r[s][0] < r[s][1])) err(`${at}: bad ${s} range`); });
    if (!r.up && !r.dn) err(`${at}: needs what high or low values mean`);
  }
}));
['wbc', 'hgb', 'plt', 'neut', 'lymph', 'na', 'k', 'glu', 'ca', 'mg', 'lact', 'bun', 'cr', 'gfr', 'alb', 'tbil', 'alp', 'alt', 'ast', 'amy', 'lip', 'trop', 'ck', 'ckmb', 'bnp', 'inr', 'ptt', 'aptt', 'ph', 'po2', 'pco2', 'hco3', 'sao2', 'o2'].forEach(k => { if (!LK.has(k)) err(`lab table is missing ${k}`); });
Object.keys(W.CP_FE).forEach(k => {
  const f = W.CP_FE[k];
  if (!LK.has(k)) err(`F&E guide ${k} has no lab row`);
  if (!f.crit || !f.rel) err(`F&E guide ${k}: needs crit and rel`);
  ['hi', 'lo'].forEach(d => { if (f[d] && !(f[d].name && f[d].cause && f[d].tx && f[d].nsg)) err(`F&E guide ${k}.${d} is incomplete`); });
  if (!f.hi && !f.lo) err(`F&E guide ${k}: no direction`);
});

// Page
const page = fs.readFileSync(path.join(ROOT, 'Care Plan Helper.html'), 'utf8');
['data/careplan/nanda-index.js', 'data/careplan/nanda-guides.js', 'data/careplan/form.js', 'data/careplan/labs.js', 'apa-core.js', 'careplan.js', 'careplan.css', 'nav.js'].forEach(f => {
  if (!new RegExp(f.replace(/[./]/g, m => '\\' + m) + '\\?v=').test(page)) err(`Care Plan Helper.html does not load ${f} with a ?v= version`);
});
if (typeof require(path.join(ROOT, 'apa-core.js')).zip !== 'function') err('apa-core.js does not export zip');
// Patient data must never sync: the cp- prefix stays out of nav.js SYNC.
const nav = fs.readFileSync(path.join(ROOT, 'nav.js'), 'utf8'), sync = /SYNC\s*=\s*(\/.*\/)/.exec(nav);
if (sync && new RegExp(sync[1].slice(1, -1)).test('cp-plans')) err('nav.js SYNC would copy cp-plans (patient data) between devices');

if (errs.length) { console.error(errs.map(e => '✗ ' + e).join('\n')); process.exit(1); }
console.log(`✓ care plan helper: ${n} NANDA-I labels, ${W.CP_GUIDES.length} guides, ${CUE.size} cues, ${keys.size} form keys, ${LK.size} labs, ${Object.keys(W.CP_FE).length} F&E guides`);
