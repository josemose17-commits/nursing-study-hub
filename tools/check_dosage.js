// Checks the dosage practice: every problem type in dose.js is made thousands of times, and each problem must
// - have an answer of the right kind (a number rounded as its question says, a four-digit time, hours and minutes, or a choice);
// - cancel to the answer's unit when it has a dimensional-analysis setup, and the setup must round to the answer;
// - use only numbers from its own question in that setup (besides the standard equivalents);
// - be written the ISMP way in its question (leading zero, no trailing zero, commas from 1,000 on a dose);
// - stay in a believable range for its type;
// and a few types are re-worked from their question text with a separate formula.
// It also checks the notes' Check yourself items (data/dosage.js).
//   node tools/check_dosage.js        → summary and the first problems found
//   node tools/check_dosage.js show   → also prints a sample problem of each type
const path = require('path');
const D = require(path.join(__dirname, '..', 'dose.js'));
const N = 3000, SHOW = process.argv[2] === 'show';
const errs = [], kinds = {};
// Each distinct problem is reported once per type (with its first example) and counted.
const bad = (t, msg, p) => {
  const k = t + ': ' + msg.replace(/[\d.]+/g, '#');
  if (kinds[k]) { kinds[k].n++; return; }
  kinds[k] = { n: 1 }; errs.push(t + ': ' + msg + (p ? '\n    ' + p.q : ''));
};
// Standard equivalents a setup may use without the question naming them (2 Tbs = 1 oz, 3 tsp = 1 Tbs).
const CONST = new Set([1, 2, 3, 1000, 60, 2.2, 5, 15, 30, 2.54, 3600, 3131, 24, 0.001]);
// Believable answers for each type (min, max).
const RANGE = {
  tabs: [0.5, 3], 'tabs-conv': [0.5, 3], liquid: [0.5, 30], 'liquid-tsp': [0.5, 3], inj: [0.1, 5], 'inj-mcg': [0.1, 3], 'units-inj': [0.25, 8], recon: [0.25, 20],
  'push-time': [1, 10], 'push-rate': [0.25, 4], 'push-dilute': [1, 20], 'insulin-scale': [1, 30], 'insulin-mix': [10, 50], pump: [10, 500], gtt: [8, 150], 'gtt-rate': [8, 150],
  remaining: [10, 1000], 'heparin-drip': [5, 2500], 'insulin-drip': [0.5, 30], titrate: [0.5, 150], mgmin: [10, 100], 'wt-dose': [0.5, 12000], 'safe-max': [10, 2000],
  bsa: [0.4, 2.6], 'bsa-dose': [0.5, 600], 'io-oral': [30, 1500], 'io-cbi': [200, 1000], 'io-iv': [200, 1300], 'io-ivpb24': [1000, 5000], 'tf-total': [300, 2400],
  'tf-dilute': [50, 900], 'peds-replace': [0.5, 80], 'peds-dose': [0.5, 600], diaper: [0.3, 100], dhv: [0.5, 15], 'conv-metric': [0.0001, 3500], 'conv-household': [0.5, 300],
  'conv-weight': [5, 250]
};
// Numbers in a question, with “1.2 million” read as 1,200,000.
const nums = s => (s.replace(/(\d+(?:\.\d+)?) million/g, (m, x) => String(Number(x) * 1e6)).match(/\d[\d,]*(\.\d+)?/g) || []).map(x => Number(x.replace(/,/g, '')));
function textRules(t, s, p) {
  if (/undefined|NaN|null|\[object/.test(s)) bad(t, 'broken text', p);
  if (/(\d)\.\d*0(?![\d])/.test(s.replace(/\d{4}(?=[^\d]|$)/g, ''))) bad(t, 'trailing zero in "' + s.match(/\d+\.\d*0(?!\d)/) + '"', p);
  if (/(^|[^\d])\.\d/.test(s)) bad(t, 'missing leading zero', p);
  const m = s.match(/(?<![\d.,])\d{4,}(?:\.\d+)?\s*(mg|mcg|mL|units?|g|kg|lb|L)\b/);
  if (m) bad(t, 'no comma in "' + m[0] + '"', p);
}
const seen = {};
D.TYPES.forEach((T, ti) => {
  const R = D.seeded(1000 + ti), uniq = new Set();
  let ex = null;
  for (let i = 0; i < N; i++) {
    let p;
    try { p = T.make(R); } catch (e) { bad(T.id, 'threw ' + e.message); break; }
    uniq.add(p.q + '|' + (p.choices || []).join('|'));
    if (!ex) ex = p;
    if (!p.q || typeof p.q !== 'string') { bad(T.id, 'no question'); continue; }
    textRules(T.id, p.q, p);
    (p.steps || []).forEach(s => { if (/undefined|NaN|\[object/.test(s)) bad(T.id, 'broken step: ' + s, p); });
    if (!p.hint) bad(T.id, 'no hint', p);
    if (p.kind === 'num') {
      if (typeof p.ans !== 'number' || !isFinite(p.ans)) { bad(T.id, 'answer not a number', p); continue; }
      if (!(p.dp >= 0 && p.dp <= 4)) bad(T.id, 'bad dp ' + p.dp, p);
      if (D.rnd(p.ans, p.dp) !== p.ans) bad(T.id, 'answer ' + p.ans + ' not rounded to ' + p.dp, p);
      const r = RANGE[T.id];
      if (r && (p.ans < r[0] || p.ans > r[1])) bad(T.id, 'answer ' + p.ans + ' outside ' + r, p);
      // An answer rounded up by rule (“or fraction thereof”) is checked by its own formula below.
      if (p.raw != null && !p.up && D.rnd(p.raw, p.dp) !== p.ans) bad(T.id, 'raw ' + p.raw + ' does not round to ' + p.ans, p);
      // The question must say how to round when the exact value isn't already the answer.
      if (p.raw != null && !p.up && Math.abs(p.raw - p.ans) > 1e-9 && !/Round to|round the|nearest/i.test(p.q)) bad(T.id, 'rounds without saying how', p);
    } else if (p.kind === 'time') {
      if (!/^([01]\d|2[0-3])[0-5]\d$/.test(p.ans)) bad(T.id, 'bad time ' + p.ans, p);
    } else if (p.kind === 'hm') {
      if (!(Number.isInteger(p.ans[0]) && Number.isInteger(p.ans[1]) && p.ans[1] >= 0 && p.ans[1] < 60)) bad(T.id, 'bad hours/minutes ' + p.ans, p);
      if (Math.round(p.raw * 60) !== p.ans[0] * 60 + p.ans[1]) bad(T.id, 'hours/minutes ' + p.ans + ' ≠ ' + p.raw * 60 + ' min', p);
    } else if (p.kind === 'choice') {
      if (!Array.isArray(p.choices) || p.choices.length < 2 || !(p.ans >= 0 && p.ans < p.choices.length)) bad(T.id, 'bad choice answer', p);
      if (p.expl && p.expl.length !== p.choices.length) bad(T.id, 'expl count ≠ choices', p);
      if (new Set(p.choices).size !== p.choices.length) bad(T.id, 'duplicate choices', p);
    } else bad(T.id, 'unknown kind ' + p.kind, p);
    if (p.da) {
      const left = D.daLeft(p.da.f), want = { n: p.da.want.n.slice().sort(), d: p.da.want.d.slice().sort() };
      if (JSON.stringify(left) !== JSON.stringify(want)) bad(T.id, 'units left ' + JSON.stringify(left) + ' ≠ ' + JSON.stringify(want), p);
      if (p.kind === 'num' && D.rnd(D.daValue(p.da.f), p.dp) !== p.ans) bad(T.id, 'setup gives ' + D.daValue(p.da.f) + ', answer ' + p.ans, p);
      // Every number in the setup comes from the question or is a standard equivalent.
      const inQ = new Set(nums(p.q));
      p.da.f.forEach(x => [x[0], x[2]].forEach(v => {
        if (CONST.has(v) || inQ.has(v)) return;
        // A dose in grams written from mg (or a bag in g) counts too.
        if (inQ.has(v * 1000) || inQ.has(D.rnd(v / 1000, 6))) return;
        bad(T.id, 'setup number ' + v + ' is not in the question', p);
      }));
    }
    // Separate formulas from the question text.
    const n = nums(p.q);
    if (T.id === 'bsa') {
      const k = /lb/.test(p.q) ? 3131 : 3600, v = D.rnd(Math.sqrt(n[0] * n[1] / k), 2);
      if (v !== p.ans) bad(T.id, 'formula gives ' + v, p);
    }
    if (T.id === 'push-time') { const v = Math.ceil(n[0] / n[1] - 1e-9); if (v !== p.ans) bad(T.id, 'formula gives ' + v, p); }
    if (T.id === 'io-cbi') { const v = n[2] - n[0] * n[1]; if (v !== p.ans) bad(T.id, 'formula gives ' + v, p); }
    if (T.id === 'io-ivpb24') { const v = n[0] * (24 / n[1]) + n[2] * 24; if (v !== p.ans) bad(T.id, 'formula gives ' + v, p); }
    if (T.id === 'completion') {
      const st = p.q.match(/starts at (\d{2})(\d{2})/), du = p.q.match(/(\d+) hr(?: (\d+) min)?/);
      const end = (Number(st[1]) * 60 + Number(st[2]) + Number(du[1]) * 60 + Number(du[2] || 0)) % 1440;
      if (D.hhmm(end) !== p.ans) bad(T.id, 'clock gives ' + D.hhmm(end), p);
    }
    if (T.id === 'gtt' && p.da) {
      const df = Number(p.q.match(/(\d+) gtt\/mL/)[1]), mins = /hours/.test(p.q) ? n[1] * 60 : n[1], v = D.rnd(n[0] * df / mins, 0);
      if (v !== p.ans) bad(T.id, 'formula gives ' + v, p);
    }
    // Checking the answer itself must accept it.
    const input = p.kind === 'hm' ? p.ans.map(String) : p.kind === 'choice' ? p.ans : p.kind === 'time' ? p.ans : D.fmt(p.ans);
    if (!D.check(p, input).ok) bad(T.id, 'its own answer is marked wrong: ' + input, p);
  }
  seen[T.id] = uniq.size;
  if (SHOW && ex) console.log('\n[' + T.id + '] ' + ex.q + '\n  → ' + (ex.kind === 'choice' ? ex.choices[ex.ans] : ex.kind === 'hm' ? ex.ans[0] + ' hr ' + ex.ans[1] + ' min' : D.fmt(ex.ans) + ' ' + (ex.unit || '')));
});

// Answer checking on a few inputs.
const P = { kind: 'num', ans: 0.5, dp: 2, raw: 0.5 };
[['0.5', true], ['.5', true], ['0.50', true], ['1/2', true], ['½', true], ['5', false], ['0.5 mL', true], ['abc', false]].forEach(([inp, ok]) => {
  if (D.check(P, inp).ok !== ok) errs.push('check(): "' + inp + '" should be ' + (ok ? 'right' : 'wrong'));
});
if (!/leading zero/.test(D.check(P, '.5').note)) errs.push('check(): no leading-zero note for .5');
if (!D.check({ kind: 'num', ans: 1.7, dp: 1, raw: 1.66 }, '1.66').note) errs.push('check(): no rounding note for 1.66 → 1.7');
if (!D.check({ kind: 'time', ans: '0915' }, '915').ok) errs.push('check(): 915 should count as 0915');

// The notes' Check yourself items.
let nChecks = 0;
try {
  global.window = global;
  require(path.join(__dirname, '..', 'data', 'dosage.js'));
  (window.DOSE_TOPICS || []).forEach(t => {
    if (!D.TOPICS.some(x => x[0] === t.id)) errs.push('notes topic ' + t.id + ' is not a drill topic');
    (t.checks || []).forEach((c, i) => {
      nChecks++;
      const id = t.id + ' check ' + (i + 1);
      if (!c.q || !c.hint || !c.work) errs.push(id + ': needs q, hint and work');
      if (c.o) { if (!(c.a >= 0 && c.a < c.o.length)) errs.push(id + ': answer index'); if (new Set(c.o).size !== c.o.length) errs.push(id + ': duplicate options'); }
      else if (typeof c.ans !== 'number') errs.push(id + ': no number answer');
      else if (!D.check({ kind: 'num', ans: c.ans, dp: D.dec(c.ans) }, D.fmt(c.ans)).ok) errs.push(id + ': own answer fails');
      textRules(id, c.q, null);
    });
  });
} catch (e) { errs.push('data/dosage.js: ' + e.message); }

const total = Object.values(seen).reduce((a, b) => a + b, 0);
console.log(D.TYPES.length + ' problem types × ' + N + ' each · ' + total + ' different problems · ' + nChecks + ' Check yourself items');
Object.keys(seen).forEach(k => { if (seen[k] < 12) console.log('  few variants: ' + k + ' (' + seen[k] + ')'); });
if (errs.length) {
  const cnt = Object.values(kinds).reduce((a, b) => a + b.n, 0);
  console.log(errs.length + ' kind(s) of problem, ' + cnt + ' in all:\n' + errs.slice(0, 80).join('\n')); process.exit(1);
}
console.log('All checks pass.');
