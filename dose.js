// Dosage calculation practice for Dosage Calculations.html. Every problem type makes a new problem with fresh numbers,
// its answer rounded the way the question says, and the worked solution: a dimensional-analysis setup (each factor is
// [top value, top units, bottom value, bottom units]) or, where DA doesn't fit (I&O sums, dilutions, clock times), steps.
// Rounding follows the notes: under 1 mL to hundredths, 1 mL or more to tenths, drops to whole numbers, BSA to hundredths.
// Numbers are written the ISMP way: a leading zero, no trailing zero, commas from 1,000.
// node tools/check_dosage.js runs every type thousands of times: the units must cancel to the answer's unit, the setup
// must round to the answer, and a separate formula must agree.
(function (root) {
  'use strict';

  // ---------- Numbers ----------
  function rnd(x, dp) { var f = Math.pow(10, dp); return Math.round(x * f + (x >= 0 ? 1e-7 : -1e-7)) / f; }
  function dec(n) { for (var d = 0; d <= 4; d++) if (Math.abs(rnd(n, d) - n) < 1e-9) return d; return 4; }
  function commas(s) { return s.replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
  // dp: decimals to show at most (default: as many as the number needs, up to 4).
  function fmt(n, dp) {
    if (typeof n === 'string') return n;
    var d = dp == null ? dec(n) : dp, s = rnd(n, d).toFixed(d);
    if (s.indexOf('.') >= 0) s = s.replace(/0+$/, '').replace(/\.$/, '');
    var p = s.split('.'); p[0] = commas(p[0]);
    return p.join('.');
  }
  // Big unit doses the ISMP way: 1.2 million units.
  function big(n) { return n >= 1000000 ? fmt(n / 1000000) + ' million' : fmt(n); }
  function hhmm(min) { min = ((min % 1440) + 1440) % 1440; return ('0' + Math.floor(min / 60)).slice(-2) + ('0' + (min % 60)).slice(-2); }
  var RW = { 0: 'Round to the nearest whole number.', 1: 'Round to the nearest tenth.', 2: 'Round to the nearest hundredth.' };
  var DPW = { 0: 'a whole number', 1: 'tenths', 2: 'hundredths' };
  // The volume rule: under 1 mL to hundredths, 1 mL or more to tenths.
  function volDp(raw) { return rnd(raw, 2) < 1 ? 2 : 1; }
  function volRule(dp) { return dp === 2 ? 'under 1 mL → round to hundredths' : '1 mL or more → round to tenths'; }
  function pl(n, w) { return n === 1 || (n < 1 && n > 0) ? w : w + 's'; }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  // ---------- Dimensional analysis ----------
  function U(u) { return !u ? [] : Array.isArray(u) ? u : [u]; }
  function daValue(f) { var n = 1, d = 1; f.forEach(function (x) { n *= x[0]; d *= x[2]; }); return n / d; }
  // The units left after cancelling, as { n: [...], d: [...] }, each sorted.
  function daLeft(f) {
    var c = {};
    f.forEach(function (x) { U(x[1]).forEach(function (u) { c[u] = (c[u] || 0) + 1; }); U(x[3]).forEach(function (u) { c[u] = (c[u] || 0) - 1; }); });
    var n = [], d = [];
    Object.keys(c).forEach(function (u) { var i; for (i = 0; i < c[u]; i++) n.push(u); for (i = 0; i < -c[u]; i++) d.push(u); });
    return { n: n.sort(), d: d.sort() };
  }

  // ---------- Random ----------
  function mulberry32(a) {
    return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  }
  function rng(next) {
    next = next || Math.random;
    return {
      int: function (a, b) { return a + Math.floor(next() * (b - a + 1)); },
      pick: function (a) { return a[Math.floor(next() * a.length)]; },
      chance: function (p) { return next() < p; },
      shuffle: function (a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(next() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
    };
  }

  // ---------- Problem types ----------
  // Each: id, topic (the notes section it drills), label, w (weight in a practice exam; 0 = drill only), make(R).
  // make returns { q, kind: 'num' | 'time' | 'hm' | 'choice', ans, unit, dp, da?, steps?, hint, why?, choices?, notes? }.
  var TYPES = [], BY = {};
  function T(id, topic, label, w, make) {
    var t = { id: id, topic: topic, label: label, w: w, make: function (R) {
      // A type may return null when the numbers it drew don't fit (too big, not a whole dose); it is simply drawn again.
      for (var i = 0; i < 400; i++) { var p = make(R); if (p) { p.type = id; return finish(p); } }
      throw new Error('No problem made for ' + id);
    } };
    TYPES.push(t); BY[id] = t;
  }
  function finish(p) {
    p.kind = p.kind || 'num';
    if (p.da && p.kind !== 'hm') { p.raw = daValue(p.da.f); if (p.ans == null) p.ans = rnd(p.raw, p.dp); }
    return p;
  }
  // A DA problem: lhs is the answer unit as written ("x mL/hr"), want is the answer's units for the check.
  function DA(lhs, want, f) { return { lhs: lhs, want: want, f: f }; }
  var mL = { n: ['mL'], d: [] }, mLhr = { n: ['mL'], d: ['hr'] };

  // ===== 1 · The order =====
  T('ismp', 'order', 'Which order is written safely?', 1, function (R) {
    var B = R.pick([
      { d: 'digoxin', v: 0.25, u: 'mg', r: 'PO', f: 'daily' },
      { d: 'levothyroxine', v: 0.075, u: 'mg', r: 'PO', f: 'daily' },
      { d: 'lorazepam', v: 0.5, u: 'mg', r: 'IV', f: 'every 6 hours as needed for anxiety' },
      { d: 'heparin', v: 5000, u: 'units', r: 'subcut', f: 'every 12 hours' },
      { d: 'insulin glargine', v: 20, u: 'units', r: 'subcut', f: 'at bedtime' },
      { d: 'warfarin', v: 5, u: 'mg', r: 'PO', f: 'daily' },
      { d: 'furosemide', v: 40, u: 'mg', r: 'IV', f: 'daily' },
      { d: 'cyanocobalamin', v: 1000, u: 'mcg', r: 'IM', f: 'monthly' },
      { d: 'fentanyl', v: 25, u: 'mcg', r: 'IV', f: 'every hour as needed for pain' },
      { d: 'morphine', v: 2, u: 'mg', r: 'IV', f: 'every 4 hours as needed for pain' },
      { d: 'enoxaparin', v: 40, u: 'mg', r: 'subcut', f: 'daily' }
    ]);
    var vs = fmt(B.v), line = function (d, v, u, r, f) { return d + ' ' + v + (u ? ' ' + u : '') + ' ' + r + ' ' + f; };
    var good = line(B.d, vs, B.u, B.r, B.f), errs = [];
    if (B.v < 1) errs.push([line(B.d, vs.slice(1), B.u, B.r, B.f), 'No leading zero: “' + vs.slice(1) + '” is easily read as ' + Number(vs.slice(2)) + ' ' + B.u + '.']);
    if (B.v === Math.round(B.v) && B.v < 1000) errs.push([line(B.d, vs + '.0', B.u, B.r, B.f), 'A trailing zero: if the point is missed, “' + vs + '.0” reads as ' + vs + '0 — a tenfold overdose.']);
    if (B.v >= 1000) errs.push([line(B.d, String(B.v), B.u, B.r, B.f), 'No comma: write numbers of 1,000 and up with commas (' + vs + ') so the zeros can’t be miscounted.']);
    if (B.u === 'units') errs.push([line(B.d, vs, 'U', B.r, B.f), '“U” can be read as a 0 or a 4 — a tenfold overdose or worse. Write out “units.”']);
    if (B.u === 'mcg') errs.push([line(B.d, vs, 'µg', B.r, B.f), '“µg” can be read as mg — a thousandfold error. Write mcg.']);
    if (B.u === 'mg' || B.u === 'mcg') errs.push([line(B.d, vs, B.u + 's', B.r, B.f), 'Units are never plural: write ' + B.u + ', not ' + B.u + 's.']);
    if (B.u === 'mg' || B.u === 'mcg') errs.push([line(B.d, vs, B.u + '.', B.r, B.f), 'No period after a unit: the period in “' + B.u + '.” can be read as the number 1.']);
    errs.push([line(B.d, vs + B.u, '', B.r, B.f), 'Number and unit run together: “' + vs + B.u + '” has been misread (the m taken for a zero). Leave a space.']);
    if (B.r === 'subcut') errs.push([line(B.d, vs, B.u, 'SQ', B.f), '“SQ” can be read as “5Q” (5 every). Write subcut.']);
    if (B.f === 'daily') errs.push([line(B.d, vs, B.u, B.r, 'QD'), '“QD” is on The Joint Commission’s Do Not Use list — it can be read as QID (four times a day). Write daily.']);
    if (B.f === 'at bedtime') errs.push([line(B.d, vs, B.u, B.r, 'HS'), '“HS” can be read as half-strength. Write at bedtime.']);
    if (B.d === 'morphine') errs.push([line('MS', vs, B.u, B.r, B.f), '“MS” can mean morphine sulfate or magnesium sulfate — it’s on the Do Not Use list. Write the full name.']);
    var bad = R.shuffle(errs).slice(0, 3), opts = R.shuffle([[good, 'Correct: leading zero where needed, no trailing zero, the unit written out safely, a space before it, and no error-prone abbreviations.']].concat(bad));
    return { kind: 'choice', q: 'Which order is written safely?', choices: opts.map(function (o) { return o[0]; }), expl: opts.map(function (o) { return o[1]; }),
      ans: opts.findIndex(function (o) { return o[0] === good; }), hint: 'Check each one for a missing leading zero, a trailing zero, “U,” “µg,” a plural or a period after the unit, and abbreviations like SQ, QD or HS.',
      why: 'ISMP and The Joint Commission’s Do Not Use list: leading zero, no trailing zero, commas from 1,000, “units” and “daily” spelled out, mcg, subcut.' };
  });

  // ===== 2 · Measurement =====
  T('conv-metric', 'units', 'Metric conversions', 1, function (R) {
    var c = R.pick([
      ['g', 'mg', [0.05, 0.1, 0.125, 0.25, 0.3, 0.5, 0.75, 1.5, 2]], ['mg', 'g', [50, 100, 125, 250, 500, 750, 1500, 2000]],
      ['mg', 'mcg', [0.05, 0.075, 0.1, 0.125, 0.25, 0.4, 0.5, 1.5]], ['mcg', 'mg', [50, 75, 100, 125, 250, 500, 600, 1500]],
      ['L', 'mL', [0.25, 0.5, 1, 1.5, 2, 3]], ['mL', 'L', [100, 250, 500, 750, 1500, 2000]],
      ['kg', 'g', [0.5, 0.75, 1.2, 2.5, 3.4]], ['g', 'kg', [500, 800, 1200, 2750, 3500]]
    ]);
    var v = R.pick(c[2]), down = { 'g>mg': 1, 'mg>mcg': 1, 'L>mL': 1, 'kg>g': 1 }[c[0] + '>' + c[1]];
    var f = [[v, c[0], 1, ''], down ? [1000, c[1], 1, c[0]] : [1, c[1], 1000, c[0]]], raw = daValue(f);
    return { q: fmt(v) + ' ' + c[0] + ' equals how many ' + c[1] + '?', unit: c[1], dp: dec(raw), da: DA('x ' + c[1], { n: [c[1]], d: [] }, f),
      hint: down ? 'To a smaller unit the number gets bigger: 1 ' + c[0] + ' = 1,000 ' + c[1] + ' (move the decimal 3 places right).' : 'To a bigger unit the number gets smaller: 1,000 ' + c[0] + ' = 1 ' + c[1] + ' (move the decimal 3 places left).',
      why: 'g → mg → mcg are each 3 decimal places apart.' };
  });

  T('conv-household', 'units', 'Household measures ↔ mL', 1, function (R) {
    var c = R.pick([
      ['tsp', 'mL', 5, 1, [0.5, 1, 1.5, 2, 3]], ['Tbs', 'mL', 15, 1, [0.5, 1, 2, 3]], ['oz', 'mL', 30, 1, [0.5, 1, 1.5, 2, 4, 6, 8, 10]],
      ['mL', 'tsp', 1, 5, [5, 7.5, 10, 15, 20]], ['mL', 'Tbs', 1, 15, [15, 30, 45, 60]], ['mL', 'oz', 1, 30, [15, 30, 60, 90, 120, 240]],
      ['Tbs', 'tsp', 3, 1, [1, 2, 3]], ['oz', 'Tbs', 2, 1, [0.5, 1, 2, 3]]
    ]);
    var v = R.pick(c[4]), f = [[v, c[0], 1, ''], [c[2], c[1], c[3], c[0]]], raw = daValue(f);
    var eq = { tsp: '1 tsp = 5 mL', Tbs: '1 Tbs = 15 mL (= 3 tsp)', oz: '1 oz = 30 mL (= 2 Tbs)' };
    return { q: fmt(v) + ' ' + c[0] + ' equals how many ' + c[1] + '?', unit: c[1], dp: dec(raw), da: DA('x ' + c[1], { n: [c[1]], d: [] }, f),
      hint: 'Use the equivalent: ' + (eq[c[0]] || eq[c[1]]) + '.', why: 'Household measures are approximate — patients should use a marked cup or oral syringe, never a kitchen spoon.' };
  });

  T('conv-weight', 'units', 'Pounds, kilograms, inches', 1, function (R) {
    var c = R.pick(['lb', 'lb', 'kg', 'in', 'cm']);
    if (c === 'lb') {
      var lb = R.pick([22, 33, 44, 55, 66, 88, 110, 121, 132, 143, 150, 154, 165, 172, 176, 185, 198, 210, 220, 245]);
      return { q: 'A client weighs ' + fmt(lb) + ' lb. What is the weight in kg? ' + RW[1], unit: 'kg', dp: 1, da: DA('x kg', { n: ['kg'], d: [] }, [[lb, 'lb', 1, ''], [1, 'kg', 2.2, 'lb']]),
        hint: '1 kg = 2.2 lb, so divide the pounds by 2.2.', why: 'Kilograms are always the smaller number (about half the pounds).' };
    }
    if (c === 'kg') {
      var kg = R.pick([5, 12, 18, 25, 45, 50, 62, 68, 70, 75, 82, 90, 105]);
      return { q: 'A client weighs ' + fmt(kg) + ' kg. What is the weight in pounds? ' + RW[1], unit: 'lb', dp: 1, da: DA('x lb', { n: ['lb'], d: [] }, [[kg, 'kg', 1, ''], [2.2, 'lb', 1, 'kg']]),
        hint: '1 kg = 2.2 lb, so multiply the kilograms by 2.2.', why: 'Pounds are always the bigger number.' };
    }
    if (c === 'in') {
      var inch = R.pick([18, 20, 24, 30, 36, 48, 60, 62, 64, 66, 68, 70, 72]);
      return { q: 'A client is ' + inch + ' inches tall. What is the height in cm? ' + RW[1], unit: 'cm', dp: 1, da: DA('x cm', { n: ['cm'], d: [] }, [[inch, 'in', 1, ''], [2.54, 'cm', 1, 'in']]),
        hint: '1 in = 2.54 cm.', why: 'Centimeters are the bigger number.' };
    }
    var cm = R.pick([50, 76, 100, 120, 152, 160, 165, 170, 178, 183]);
    return { q: 'A client is ' + cm + ' cm tall. What is the height in inches? ' + RW[1], unit: 'in', dp: 1, da: DA('x in', { n: ['in'], d: [] }, [[cm, 'cm', 1, ''], [1, 'in', 2.54, 'cm']]),
      hint: '1 in = 2.54 cm, so divide by 2.54.', why: 'Inches are the smaller number.' };
  });

  T('conv-time', 'units', 'Military time', 1, function (R) {
    var h = R.int(0, 23), m = R.pick([0, 5, 10, 15, 20, 30, 45, 50]), ap = h < 12 ? 'AM' : 'PM', h12 = h % 12 === 0 ? 12 : h % 12;
    var std = h12 + ':' + ('0' + m).slice(-2) + ' ' + ap, ans = hhmm(h * 60 + m);
    var steps = [h === 0 ? '12:xx AM is the first hour of the day: 00' : h < 12 ? 'Morning hours stay the same: ' + ('0' + h).slice(-2) : h === 12 ? '12 noon stays 12' : 'Afternoon and evening: add 12 to the hour (' + h12 + ' + 12 = ' + h + ')',
      'Four digits, no colon: ' + ans];
    return { kind: 'time', q: 'Write ' + std + ' in military time.', ans: ans, unit: '', steps: steps,
      hint: 'PM hours after noon add 12; midnight hour is 00; always four digits.', why: 'Military time: 0000 starts the day; 8:45 AM = 0845, 1:00 PM = 1300, 7:30 PM = 1930.' };
  });

  // ===== 3 · Dimensional analysis: oral doses =====
  var TABS = [
    { n: 'metoprolol tartrate', s: [25, 50], u: 'mg', form: 'tablet', scored: true, o: [12.5, 25, 37.5, 50, 75, 100] },
    { n: 'furosemide', s: [20, 40], u: 'mg', form: 'tablet', scored: true, o: [20, 40, 60, 80] },
    { n: 'prednisone', s: [5, 10, 20], u: 'mg', form: 'tablet', scored: true, o: [5, 10, 15, 20, 30, 40, 60] },
    { n: 'warfarin', s: [2, 5], u: 'mg', form: 'tablet', scored: true, o: [2, 2.5, 4, 5, 7.5, 10] },
    { n: 'metronidazole (Flagyl)', s: [250, 500], u: 'mg', form: 'tablet', scored: false, o: [250, 500, 750, 1000] },
    { n: 'acetaminophen', s: [325, 500], u: 'mg', form: 'tablet', scored: false, o: [325, 500, 650, 975, 1000] },
    { n: 'amoxicillin', s: [250, 500], u: 'mg', form: 'capsule', scored: false, o: [250, 500, 750, 1000] },
    { n: 'allopurinol', s: [100, 300], u: 'mg', form: 'tablet', scored: true, o: [100, 150, 200, 300] },
    { n: 'digoxin', s: [0.125, 0.25], u: 'mg', form: 'tablet', scored: true, o: [0.125, 0.25, 0.375, 0.5] },
    { n: 'spironolactone', s: [25, 50], u: 'mg', form: 'tablet', scored: false, o: [25, 50, 75, 100] },
    { n: 'lorazepam', s: [0.5, 1, 2], u: 'mg', form: 'tablet', scored: true, o: [0.5, 1, 1.5, 2] },
    { n: 'potassium chloride extended-release', s: [10, 20], u: 'mEq', form: 'tablet', scored: false, er: true, o: [10, 20, 40] },
    { n: 'hydralazine', s: [10, 25, 50], u: 'mg', form: 'tablet', scored: false, o: [10, 25, 50, 75, 100] },
    { n: 'glipizide', s: [5, 10], u: 'mg', form: 'tablet', scored: true, o: [2.5, 5, 10, 15, 20] },
    { n: 'captopril', s: [12.5, 25], u: 'mg', form: 'tablet', scored: true, o: [6.25, 12.5, 25, 37.5, 50] },
    { n: 'clonidine', s: [0.1, 0.2], u: 'mg', form: 'tablet', scored: true, o: [0.05, 0.1, 0.2, 0.3] },
    { n: 'carvedilol', s: [3.125, 6.25, 12.5, 25], u: 'mg', form: 'tablet', scored: false, o: [3.125, 6.25, 12.5, 25, 50] }
  ];
  var FREQ = ['daily', 'twice a day', 'every 8 hours', 'three times a day', 'now', 'at bedtime'];
  function wholeOrHalf(x, scored) { var ok = scored ? [0.5, 1, 1.5, 2, 3] : [1, 2, 3]; return ok.some(function (v) { return Math.abs(v - x) < 1e-9; }); }

  T('tabs', 'da', 'Tablets and capsules', 3, function (R) {
    var d = R.pick(TABS), s = R.pick(d.s), o = R.pick(d.o), n = o / s;
    if (!wholeOrHalf(n, d.scored)) return null;
    var f = [[o, d.u, 1, ''], [1, d.form, s, d.u]];
    return { q: 'Order: ' + d.n + ' ' + fmt(o) + ' ' + d.u + ' PO ' + R.pick(FREQ) + '. Available: ' + d.n + ' ' + fmt(s) + ' ' + d.u + ' ' + d.form + 's' + (d.scored ? ' (scored)' : d.er ? ' (do not crush or split)' : '') + '. How many ' + d.form + 's will you give?',
      unit: d.form + 's', dp: 1, da: DA('x ' + d.form + 's', { n: [d.form], d: [] }, f),
      hint: 'Write the label’s strength with ' + d.u + ' on the bottom: 1 ' + d.form + ' / ' + fmt(s) + ' ' + d.u + '.',
      why: 'Check: ' + fmt(n) + ' × ' + fmt(s) + ' ' + d.u + ' = ' + fmt(o) + ' ' + d.u + ' ✓' + (n % 1 ? ' Only a scored tablet may be halved.' : '') };
  });

  var TC = [
    { n: 'levothyroxine', s: [25, 50, 75, 100, 125], lu: 'mcg', ou: 'mg', form: 'tablet', o: [0.025, 0.05, 0.075, 0.1, 0.125, 0.15, 0.2] },
    { n: 'digoxin', s: [0.125, 0.25], lu: 'mg', ou: 'mcg', form: 'tablet', o: [125, 250, 375, 500] },
    { n: 'acetaminophen', s: [325, 500], lu: 'mg', ou: 'g', form: 'tablet', o: [0.5, 0.65, 0.975, 1] },
    { n: 'metformin', s: [500, 850, 1000], lu: 'mg', ou: 'g', form: 'tablet', o: [0.5, 0.85, 1, 1.5, 1.7, 2] },
    { n: 'cephalexin', s: [250, 500], lu: 'mg', ou: 'g', form: 'capsule', o: [0.25, 0.5, 1] },
    { n: 'amoxicillin', s: [250, 500], lu: 'mg', ou: 'g', form: 'capsule', o: [0.25, 0.5, 1] },
    { n: 'clonidine', s: [0.1, 0.2], lu: 'mg', ou: 'mcg', form: 'tablet', o: [100, 200, 300] },
    { n: 'cyanocobalamin', s: [500, 1000], lu: 'mcg', ou: 'mg', form: 'tablet', o: [0.5, 1, 2] },
    { n: 'folic acid', s: [400, 800], lu: 'mcg', ou: 'mg', form: 'tablet', o: [0.4, 0.8, 1.6] }
  ];
  function convFactor(from, to) { // one metric step between g, mg and mcg
    var big = { g: 3, mg: 2, mcg: 1 };
    return big[from] > big[to] ? [1000, to, 1, from] : [1, to, 1000, from];
  }
  T('tabs-conv', 'da', 'Tablets with a unit conversion', 3, function (R) {
    var d = R.pick(TC), s = R.pick(d.s), o = R.pick(d.o), cf = convFactor(d.ou, d.lu), f = [[o, d.ou, 1, ''], cf, [1, d.form, s, d.lu]], n = daValue(f);
    if (!wholeOrHalf(n, false)) return null;
    return { q: 'Order: ' + d.n + ' ' + fmt(o) + ' ' + d.ou + ' PO ' + R.pick(FREQ) + '. Available: ' + d.n + ' ' + fmt(s) + ' ' + d.lu + ' ' + d.form + 's. How many ' + d.form + 's will you give?',
      unit: d.form + 's', dp: 1, da: DA('x ' + d.form + 's', { n: [d.form], d: [] }, f),
      hint: 'The order is in ' + d.ou + ' and the label in ' + d.lu + ': add the conversion ' + (cf[0] === 1000 ? '1,000 ' + cf[1] + ' / 1 ' + cf[3] : '1 ' + cf[1] + ' / 1,000 ' + cf[3]) + '.',
      why: 'Check: ' + fmt(o) + ' ' + d.ou + ' = ' + fmt(o * (cf[0] / cf[2])) + ' ' + d.lu + ' = ' + fmt(n) + ' × ' + fmt(s) + ' ' + d.lu + ' ✓' };
  });

  var LIQ = [
    { n: 'amoxicillin oral suspension', c: [125, 250, 400], per: 5, u: 'mg', o: [100, 125, 200, 250, 300, 375, 400, 500] },
    { n: 'acetaminophen oral solution', c: [160], per: 5, u: 'mg', o: [160, 240, 320, 480, 500, 650] },
    { n: 'albuterol syrup', c: [2], per: 5, u: 'mg', o: [2, 3, 4] },
    { n: 'potassium chloride oral solution', c: [20, 40], per: 15, u: 'mEq', o: [10, 20, 30, 40] },
    { n: 'lactulose', c: [10], per: 15, u: 'g', o: [10, 15, 20, 30] },
    { n: 'cephalexin oral suspension', c: [125, 250], per: 5, u: 'mg', o: [125, 250, 375, 500] },
    { n: 'ibuprofen oral suspension', c: [100], per: 5, u: 'mg', o: [100, 150, 200, 300, 400] },
    { n: 'phenytoin oral suspension', c: [125], per: 5, u: 'mg', o: [50, 100, 125] },
    { n: 'prednisolone oral solution', c: [15], per: 5, u: 'mg', o: [5, 10, 15, 20, 30] },
    { n: 'ondansetron oral solution', c: [4], per: 5, u: 'mg', o: [2, 4, 8] },
    { n: 'furosemide oral solution', c: [10], per: 1, u: 'mg', o: [10, 20, 40] },
    { n: 'digoxin oral solution', c: [0.05], per: 1, u: 'mg', o: [0.125, 0.25] },
    { n: 'docusate liquid', c: [50], per: 5, u: 'mg', o: [50, 100] }
  ];
  T('liquid', 'da', 'Oral liquids (mL)', 3, function (R) {
    var d = R.pick(LIQ), c = R.pick(d.c), o = R.pick(d.o), f = [[o, d.u, 1, ''], [d.per, 'mL', c, d.u]], raw = daValue(f);
    if (raw > 30 || raw < 0.5) return null;
    var dp = volDp(raw);
    return { q: 'Order: ' + d.n + ' ' + fmt(o) + ' ' + d.u + ' PO. Available: ' + fmt(c) + ' ' + d.u + (d.per === 1 ? '/mL' : ' per ' + d.per + ' mL') + '. How many mL will you give? ' + RW[dp],
      unit: 'mL', dp: dp, da: DA('x mL', mL, f), hint: 'The label is your factor, ' + d.u + ' on the bottom: ' + d.per + ' mL / ' + fmt(c) + ' ' + d.u + '.',
      why: 'Liquid strengths are always “per” a volume — ' + fmt(c) + ' ' + d.u + ' in every ' + d.per + ' mL. Measure with an oral syringe or a marked cup.' };
  });

  var HH = [
    { n: 'doxycycline (Vibramycin) syrup', c: 50, per: 5, u: 'mg', ou: 'g', o: [0.05, 0.1, 0.15], to: 'tsp' },
    { n: 'amoxicillin oral suspension', c: 250, per: 5, u: 'mg', ou: 'g', o: [0.25, 0.5], to: 'tsp' },
    { n: 'acetaminophen oral solution', c: 160, per: 5, u: 'mg', ou: 'mg', o: [160, 240, 320, 480], to: 'tsp' },
    { n: 'lactulose', c: 10, per: 15, u: 'g', ou: 'g', o: [10, 20, 30], to: 'Tbs' },
    { n: 'magnesium hydroxide (milk of magnesia)', c: 400, per: 5, u: 'mg', ou: 'g', o: [1.2, 2.4], to: 'oz' }
  ];
  T('liquid-tsp', 'da', 'Liquids in tsp, Tbs or oz', 2, function (R) {
    var d = R.pick(HH), o = R.pick(d.o), f = [[o, d.ou, 1, '']];
    if (d.ou !== d.u) f.push(convFactor(d.ou, d.u));
    f.push([d.per, 'mL', d.c, d.u]);
    f.push({ tsp: [1, 'tsp', 5, 'mL'], Tbs: [1, 'Tbs', 15, 'mL'], oz: [1, 'oz', 30, 'mL'] }[d.to]);
    var raw = daValue(f);
    if (!wholeOrHalf(raw, true)) return null;
    return { q: 'Order: ' + d.n + ' ' + fmt(o) + ' ' + d.ou + ' PO. Available: ' + fmt(d.c) + ' ' + d.u + ' per ' + d.per + ' mL. The dosing cup is marked in ' + { tsp: 'teaspoons', Tbs: 'tablespoons', oz: 'ounces' }[d.to] + '. How many ' + d.to + ' will you give?',
      unit: d.to, dp: 1, da: DA('x ' + d.to, { n: [d.to], d: [] }, f),
      hint: (d.ou !== d.u ? 'Convert ' + d.ou + ' to ' + d.u + ', then u' : 'U') + 'se the label to get mL, then ' + { tsp: '1 tsp = 5 mL', Tbs: '1 Tbs = 15 mL', oz: '1 oz = 30 mL' }[d.to] + '.',
      why: 'The order of the factors doesn’t matter — only that each unwanted unit is once on top and once on the bottom.' };
  });

  // ===== 4 · Oral and parenteral =====
  var INJ = [
    ['morphine', 4, 'IV', [2, 3, 4]], ['morphine', 10, 'IV', [2, 3, 4, 5]], ['hydromorphone', 2, 'IV', [0.5, 1, 1.5]], ['ketorolac', 30, 'IV', [10, 15, 30]],
    ['ondansetron', 2, 'IV', [4, 8]], ['furosemide', 10, 'IV', [20, 25, 30, 40]], ['promethazine', 25, 'IM', [6.25, 12.5, 25]], ['haloperidol', 5, 'IM', [2, 2.5, 3, 5]],
    ['diphenhydramine', 50, 'IV', [12.5, 25, 30, 50]], ['metoclopramide', 5, 'IV', [5, 10]], ['gentamicin', 40, 'IM', [60, 70, 80]], ['dexamethasone', 4, 'IV', [2, 4, 5, 6, 10]],
    ['famotidine', 10, 'IV', [20]], ['lorazepam', 2, 'IV', [0.5, 1, 2]], ['meperidine', 50, 'IM', [25, 35, 50, 75]], ['hydroxyzine', 50, 'IM', [25, 50, 75]],
    ['methylprednisolone acetate (Depo-Medrol)', 40, 'IM', [20, 30, 40, 60, 80]], ['lincomycin (Lincocin)', 300, 'IM', [300, 600]], ['naloxone', 0.4, 'IV', [0.1, 0.2, 0.4]],
    ['atropine', 0.4, 'IM', [0.2, 0.3, 0.4]]
  ];
  function syr(v) { return v < 1 ? 'a 1 mL syringe' : v <= 3 ? 'a 3 mL syringe' : 'a 5 mL syringe'; }
  T('inj', 'parenteral', 'Injections (mg per mL)', 3, function (R) {
    var d = R.pick(INJ), o = R.pick(d[3]), f = [[o, 'mg', 1, ''], [1, 'mL', d[1], 'mg']], raw = daValue(f), dp = volDp(raw);
    return { q: 'Order: ' + d[0] + ' ' + fmt(o) + ' mg ' + d[2] + '. Available: ' + d[0] + ' ' + fmt(d[1]) + ' mg/mL. How many mL will you draw up? ' + RW[dp],
      unit: 'mL', dp: dp, da: DA('x mL', mL, f), hint: '1 mL / ' + fmt(d[1]) + ' mg is the label as a factor. Then round: ' + volRule(dp) + '.',
      why: volRule(dp).replace('→', '—') + '; use ' + syr(rnd(raw, dp)) + ' (the smallest that holds the dose).' };
  });

  var INJM = [
    ['enalaprilat', 1.25, 'mg', 'mcg', [625, 1250], 'IV'], ['digoxin', 0.25, 'mg', 'mcg', [125, 250, 500], 'IV'], ['fentanyl', 50, 'mcg', 'mg', [0.025, 0.05, 0.075, 0.1], 'IV'],
    ['atropine', 0.4, 'mg', 'mcg', [200, 300, 400], 'IM'], ['glycopyrrolate', 0.2, 'mg', 'mcg', [100, 200], 'IV'], ['cyanocobalamin', 1000, 'mcg', 'mg', [0.1, 0.5, 1], 'IM'],
    ['naloxone', 0.4, 'mg', 'mcg', [40, 100, 200, 400], 'IV'], ['epinephrine', 1, 'mg', 'mcg', [300, 500], 'IM']
  ];
  T('inj-mcg', 'parenteral', 'Injections with mcg ↔ mg', 2, function (R) {
    var d = R.pick(INJM), o = R.pick(d[4]), f = [[o, d[3], 1, ''], convFactor(d[3], d[2]), [1, 'mL', d[1], d[2]]], raw = daValue(f), dp = volDp(raw);
    return { q: 'Order: ' + d[0] + ' ' + fmt(o) + ' ' + d[3] + ' ' + d[5] + '. Available: ' + d[0] + ' ' + fmt(d[1]) + ' ' + d[2] + '/mL. How many mL will you give? ' + RW[dp],
      unit: 'mL', dp: dp, da: DA('x mL', mL, f), hint: 'Convert ' + d[3] + ' to ' + d[2] + ' (1 mg = 1,000 mcg) inside the setup, then use the label.',
      why: d[3] + ' cancels ' + d[3] + ', ' + d[2] + ' cancels ' + d[2] + ', and mL is left — that’s the whole trick.' };
  });

  T('units-inj', 'parenteral', 'Units: heparin and penicillin', 2, function (R) {
    var d = R.pick([['heparin', 5000, [5000, 7500], 'subcut'], ['heparin', 10000, [5000, 7500, 8000], 'subcut'], ['heparin', 1000, [2000, 3000, 4000, 5000, 6000], 'IV bolus'],
      ['penicillin G benzathine', 600000, [1200000, 2400000], 'IM']]);
    var o = R.pick(d[2]), f = [[o, 'units', 1, ''], [1, 'mL', d[1], 'units']], raw = daValue(f), dp = volDp(raw);
    return { q: 'Order: ' + d[0] + ' ' + big(o) + ' units ' + d[3] + '. Available: ' + d[0] + ' ' + fmt(d[1]) + ' units/mL. How many mL will you give? ' + RW[dp],
      unit: 'mL', dp: dp, da: DA('x mL', mL, f), hint: 'Units never convert to mg — the order and label are both in units. Use 1 mL / ' + fmt(d[1]) + ' units.',
      why: d[0] === 'heparin' ? 'Heparin is high alert and comes in many strengths — read the label every time and have a second nurse check.' : 'Write big numbers in words: 1.2 million units.' };
  });

  var RECON = [
    { n: 'ceftriaxone', vial: '1 g', dil: '2.1 mL of 1% lidocaine', route: 'IM', c: 350, u: 'mg', o: [250, 500, 1000] },
    { n: 'ceftriaxone', vial: '1 g', dil: '3.6 mL of sterile water', route: 'IM', c: 250, u: 'mg', o: [250, 500, 750] },
    { n: 'cefazolin', vial: '1 g', dil: '2.5 mL of sterile water', route: 'IM', c: 330, u: 'mg', o: [250, 500] },
    { n: 'ampicillin', vial: '1 g', dil: '3.5 mL of sterile water', route: 'IM', c: 250, u: 'mg', o: [250, 500] },
    { n: 'methylprednisolone sodium succinate (Solu-Medrol)', vial: '125 mg', dil: '2 mL (the vial’s own diluent)', route: 'IV', c: 62.5, u: 'mg', o: [40, 60, 125] },
    { n: 'vancomycin', vial: '1 g', dil: '20 mL of sterile water', route: 'IV (then into the infusion bag)', c: 50, u: 'mg', o: [500, 750, 1000] },
    { n: 'penicillin G potassium', vial: '5 million units', dil: '8.2 mL of sterile water', route: 'IM', c: 500000, u: 'units', o: [500000, 1000000] },
    { n: 'penicillin G potassium', vial: '5 million units', dil: '3.2 mL of sterile water', route: 'IM', c: 1000000, u: 'units', o: [1000000, 2000000] }
  ];
  T('recon', 'parenteral', 'Reconstituted powders', 2, function (R) {
    var d = R.pick(RECON), o = R.pick(d.o), gram = d.u === 'mg' && o >= 1000 && R.chance(0.5);
    var f = gram ? [[o / 1000, 'g', 1, ''], [1000, 'mg', 1, 'g'], [1, 'mL', d.c, 'mg']] : [[o, d.u, 1, ''], [1, 'mL', d.c, d.u]], raw = daValue(f), dp = volDp(raw);
    var ord = gram ? fmt(o / 1000) + ' g' : (d.u === 'units' ? big(o) : fmt(o)) + ' ' + d.u;
    return { q: 'A vial of ' + d.n + ' holds ' + d.vial + ' of powder. The directions: add ' + d.dil + ' for ' + d.route.split(' ')[0] + ' use to make ' + fmt(d.c) + ' ' + d.u + '/mL. The order is ' + ord + ' ' + d.route.split(' ')[0] + '. How many mL will you ' + (/bag/.test(d.route) ? 'withdraw' : 'give') + '? ' + RW[dp],
      unit: 'mL', dp: dp, da: DA('x mL', mL, f), hint: 'After mixing, the strength is ' + fmt(d.c) + ' ' + d.u + '/mL — use that, not the ' + d.vial + ' on the front or the diluent volume.',
      why: 'The powder takes up space (displacement), so never use the diluent volume in the math. Label the vial: date and time mixed, diluent and amount, strength, beyond-use time, your initials.' };
  });

  T('recon-pick', 'parenteral', 'Multiple-strength powders: pick the dilution', 1, function (R) {
    var o = R.pick([1000000, 2000000, 1500000]), opts = [[18.2, 250000], [8.2, 500000], [3.2, 1000000]];
    var vols = opts.map(function (x) { return o / x[1]; }), ans = -1;
    vols.forEach(function (v, i) { if (ans < 0 && v <= 3) ans = i; });
    var best = vols.findIndex(function (v) { return v <= 3 && v >= 1; });
    if (best >= 0) ans = best;
    return { kind: 'choice', q: 'Penicillin G potassium 5 million units (powder). Directions: add 18.2 mL → 250,000 units/mL; 8.2 mL → 500,000 units/mL; 3.2 mL → 1 million units/mL. The order is ' + big(o) + ' units IM. Which dilution gives the dose in one IM injection of 3 mL or less with the least concentrated solution?',
      choices: opts.map(function (x) { return x[0] + ' mL → ' + fmt(x[1]) + ' units/mL'; }), ans: ans,
      expl: opts.map(function (x, i) { var v = vols[i]; return fmt(x[1]) + ' units/mL → ' + fmt(v, 2) + ' mL' + (v > 3 ? ' — too much for one IM site.' : i === ans ? ' — fits in one injection and is the least concentrated that does.' : ' — fits, but a less concentrated choice also fits.'); }),
      hint: 'Work out the mL for each strength: order ÷ strength. Keep IM injections at 3 mL or less.', why: 'With a multiple-strength powder, the diluent you choose sets the strength — circle it on the label.' };
  });

  T('push-time', 'parenteral', 'IV push: how many minutes', 2, function (R) {
    var c = R.pick([{ n: 'Phenytoin', r: 50, d: [100, 125, 150, 175, 200, 250, 300] }, { n: 'Diphenhydramine', r: 25, d: [25, 50] },
      { n: 'A drug', r: 150, d: [175, 200, 300, 400, 450] }, { n: 'A drug', r: 10, d: [15, 25, 40, 45] }, { n: 'A drug', r: 20, d: [30, 50, 60, 70] }]);
    var d = R.pick(c.d), raw = d / c.r, ans = Math.ceil(raw - 1e-9);
    return { q: c.n + ' ' + fmt(d) + ' mg IV push is ordered. The drug reference says: push no faster than ' + c.r + ' mg per minute or fraction thereof. Over how many minutes will you push it?',
      unit: 'minutes', dp: 0, ans: ans, raw: raw, up: true,
      steps: [fmt(d) + ' mg ÷ ' + c.r + ' mg/min = ' + fmt(raw, 2) + ' min', raw === ans ? 'That is exactly ' + ans + ' ' + pl(ans, 'minute') + '.' : '“Or fraction thereof”: the part of a minute left over still gets a full minute → ' + ans + ' minutes.'],
      hint: 'Divide the dose by the rate, then round UP — a partial minute counts as a whole one.', why: 'Pushing too fast can cause speed shock: flushing, headache, chest tightness, low BP, an irregular pulse, collapse.' };
  });

  T('push-rate', 'parenteral', 'IV push: mL every 15 seconds', 1, function (R) {
    var per = R.pick([0.25, 0.5, 0.75, 1]), t = R.pick([1, 2, 3, 4, 5]), c = R.pick([2, 5, 10, 25, 50]), V = per * 4 * t, d = V * c;
    var furo = c === 10 && (d === 20 || d === 40) && d / t <= 20 && R.chance(0.6), each = R.chance(0.7) ? 15 : 60, ans = each === 15 ? per : V / t;
    if (V > 10 || V < 1) return null;
    return { q: (furo ? 'Furosemide ' : 'A drug, ') + fmt(d) + ' mg IV push, is ordered over ' + t + ' ' + pl(t, 'minute') + '. The vial contains ' + c + ' mg/mL. How many mL will you push every ' + (each === 15 ? '15 seconds' : 'minute') + '? ' + RW[dec(ans) > 1 ? 2 : 1],
      unit: 'mL', dp: dec(ans) > 1 ? 2 : 1, ans: ans, raw: ans,
      steps: ['Volume: ' + fmt(d) + ' mg ÷ ' + c + ' mg/mL = ' + fmt(V) + ' mL', each === 15 ? 'Time: ' + t + ' min × 4 = ' + 4 * t + ' periods of 15 seconds' : 'Time: ' + t + ' min',
        fmt(V) + ' mL ÷ ' + (each === 15 ? 4 * t : t) + ' = ' + fmt(ans) + ' mL every ' + (each === 15 ? '15 seconds' : 'minute')],
      hint: 'First the total mL (dose ÷ strength), then split it over the time' + (each === 15 ? ' — each minute has four 15-second periods.' : '.'), why: 'Time the push with a watch with a second hand.' };
  });

  T('push-dilute', 'parenteral', 'IV push: how much diluent', 1, function (R) {
    var c = R.pick([[20, 10, 2], [20, 10, 1], [40, 10, 4], [40, 10, 2], [4, 2, 1], [8, 2, 1], [10, 5, 1], [10, 5, 2], [50, 25, 5], [100, 50, 10], [100, 50, 5], [8, 4, 1], [2, 1, 0.5], [30, 15, 3], [60, 20, 5]]);
    var total = c[0] / c[2], drug = c[0] / c[1], dil = total - drug;
    return { q: 'A drug ' + fmt(c[0]) + ' mg IV push is ordered. The vial contains ' + fmt(c[1]) + ' mg/mL. The reference says to dilute it to ' + fmt(c[2]) + ' mg/mL. How many mL of diluent will you add?',
      unit: 'mL', dp: 1, ans: dil, raw: dil,
      steps: ['Total volume at the target strength: ' + fmt(c[0]) + ' mg ÷ ' + fmt(c[2]) + ' mg/mL = ' + fmt(total) + ' mL', 'Drug volume: ' + fmt(c[0]) + ' mg ÷ ' + fmt(c[1]) + ' mg/mL = ' + fmt(drug) + ' mL', 'Diluent: ' + fmt(total) + ' − ' + fmt(drug) + ' = ' + fmt(dil) + ' mL'],
      hint: 'Total syringe volume = dose ÷ target concentration; then subtract the drug’s own volume.', why: 'Work out the dose first, the diluent second. Dilution makes the drug gentler on the vein.' };
  });

  T('insulin-scale', 'parenteral', 'Insulin sliding scale', 2, function (R) {
    if (R.chance(0.5)) {
      var base = R.pick([150, 140, 120]), inc = R.pick([50, 40, 30]), u = R.pick([1, 2, 3]), k = R.int(1, 5), bg = base + inc * k;
      if (bg > 400) return null;
      return { q: 'Blood glucose is ' + bg + ' mg/dL. The scale: ' + u + ' ' + pl(u, 'unit') + ' of regular insulin for every ' + inc + ' mg/dL over ' + base + ' mg/dL. How many units will you give?',
        unit: 'units', dp: 0, ans: u * k, raw: u * k, steps: ['Over the base: ' + bg + ' − ' + base + ' = ' + (bg - base) + ' mg/dL', 'Steps of ' + inc + ': ' + (bg - base) + ' ÷ ' + inc + ' = ' + k, 'Dose: ' + k + ' × ' + u + ' = ' + u * k + ' units of regular insulin'],
        hint: 'Find how far above ' + base + ' the glucose is, then how many ' + inc + 's fit in that.', why: 'Practice only — use a current order and your agency’s protocol. Insulin is high alert: a U-100 insulin syringe for U-100 insulin, and an independent double-check.' };
    }
    var bg2 = R.int(151, 349), meal = R.pick([0, 0, 4, 6, 8]), tab = [[151, 200, 2], [201, 250, 4], [251, 300, 6], [301, 350, 8]], row = tab.find(function (x) { return bg2 >= x[0] && bg2 <= x[1]; }), tot = row[2] + meal;
    return { q: 'Before ' + (meal ? 'lunch' : 'bed') + ' the glucose is ' + bg2 + ' mg/dL. ' + (meal ? 'Order: insulin lispro ' + meal + ' units with meals plus correction: ' : 'Correction scale (insulin lispro): ') + '151–200 mg/dL, 2 units; 201–250, 4 units; 251–300, 6 units; 301–350, 8 units; over 350, call the provider. How many units of lispro will you give?',
      unit: 'units', dp: 0, ans: tot, raw: tot, steps: [bg2 + ' mg/dL falls in ' + row[0] + '–' + row[1] + ' → ' + row[2] + ' units'].concat(meal ? ['Mealtime dose ' + meal + ' + correction ' + row[2] + ' = ' + tot + ' units'] : []),
      hint: 'Find the glucose’s row' + (meal ? ', then add the mealtime dose.' : '.'), why: 'Rapid-acting insulin goes with food — make sure the meal is there.' };
  });

  T('insulin-mix', 'parenteral', 'Mixing two insulins', 1, function (R) {
    var r = R.int(2, 12), n = R.int(8, 38), t = r + n;
    if (t > 50) return null;
    var s = t <= 30 ? '30-unit' : '50-unit';
    return { q: 'Order: regular insulin ' + r + ' units and NPH insulin ' + n + ' units subcut before breakfast, drawn up in one syringe. How many units will the syringe hold in total?',
      unit: 'units', dp: 0, ans: t, raw: t, steps: [r + ' + ' + n + ' = ' + t + ' units', 'Clear before cloudy: draw up the regular first (after putting air into both vials, NPH first), then the NPH.', 'Syringe: the ' + s + ' insulin syringe — it holds ' + t + ' units and has 1-unit lines.'],
      hint: 'Add the two doses. Which one goes in the syringe first?', why: 'Never mix glargine or other long-acting insulins with anything. Premixed insulins are never given IV.' };
  });

  T('syringe-pick', 'parenteral', 'Choose the syringe', 1, function (R) {
    if (R.chance(0.6)) {
      var dose = R.pick([5, 9, 14, 22, 28, 33, 36, 41, 47, 52, 64, 70, 80]), best = dose <= 30 ? 1 : dose <= 50 ? 2 : 3;
      var ch = ['1 mL tuberculin syringe', '30-unit insulin syringe', '50-unit insulin syringe', '100-unit insulin syringe'];
      return { kind: 'choice', q: 'The order is insulin ' + dose + ' units subcut. Which syringe is best?', choices: ch, ans: best,
        expl: ['Never draw up insulin in a tuberculin syringe — it is marked in mL, not units.', dose <= 30 ? 'Best: the smallest insulin syringe that holds ' + dose + ' units, with 1-unit lines.' : 'Too small for ' + dose + ' units.',
          dose <= 30 ? 'It holds the dose, but a smaller one does too — smaller syringes are easier to read.' : dose <= 50 ? 'Best: the smallest that holds ' + dose + ' units, with 1-unit lines.' : 'Too small for ' + dose + ' units.',
          dose > 50 ? 'Best: the only one that holds ' + dose + ' units (its lines are 2 units apart — even doses).' : 'It holds the dose, but its lines are 2 units apart — use the smallest one that holds it.'],
        hint: 'Use the smallest insulin syringe that holds the dose.', why: 'Insulin is ordered in units: the number ordered is the number you draw — no calculation.' };
    }
    var v = R.pick([0.25, 0.4, 0.5, 0.75, 1.2, 1.5, 2.5, 3, 4, 6]), b = v < 1 ? 0 : v <= 3 ? 1 : v <= 5 ? 2 : 3;
    return { kind: 'choice', q: 'You will give ' + fmt(v) + ' mL of a medication by injection. Which syringe measures it best?', choices: ['1 mL syringe (0.01 mL lines)', '3 mL syringe (0.1 mL lines)', '5 mL syringe (0.2 mL lines)', '10 mL syringe (0.2 mL lines)'], ans: b,
      expl: ['For volumes under 1 mL.', 'The usual syringe for 1–3 mL.', 'For 3–5 mL.', 'For larger IV preparations.'].map(function (e, i) { return (i === b ? 'Best — ' : '') + e; }),
      hint: 'The smallest syringe that holds the dose measures it most exactly.', why: 'Read at the ring of the plunger nearest the tip; it must sit on a line — never estimate between lines.' };
  });

  // ===== 5 · IV =====
  T('pump', 'iv', 'Pump rate (mL/hr)', 3, function (R) {
    var dp = R.pick([0, 1]);
    if (R.chance(0.55)) {
      var v = R.pick([250, 500, 1000, 1000, 1500, 2000, 3000]), h = R.pick([2, 3, 4, 6, 8, 10, 12, 16, 24]), rate = v / h, useL = v >= 1000 && R.chance(0.4);
      if (rate > 500 || rate < 20) return null;
      var f = useL ? [[v / 1000, 'L', h, 'hr'], [1000, 'mL', 1, 'L']] : [[v, 'mL', h, 'hr']];
      return { q: 'Infuse ' + (useL ? fmt(v / 1000) + ' L' : fmt(v) + ' mL') + ' of 0.9% sodium chloride over ' + h + ' hours by pump. Set the pump to how many mL/hr? ' + RW[dp],
        unit: 'mL/hr', dp: dp, da: DA('x mL/hr', mLhr, f), hint: 'mL/hr = total mL ÷ total hours' + (useL ? ' (1 L = 1,000 mL).' : '.'), why: 'If the order already gives mL/hr, there’s nothing to calculate — program it.' };
    }
    var vv = R.pick([25, 50, 50, 100, 100, 150, 250]), m = R.pick([15, 20, 30, 30, 45, 60, 90]), r2 = vv / m * 60;
    if (r2 > 400 || r2 < 25) return null;
    return { q: 'An IV piggyback of ' + vv + ' mL is to infuse over ' + m + ' minutes by pump. Set the pump to how many mL/hr? ' + RW[dp],
      unit: 'mL/hr', dp: dp, da: DA('x mL/hr', mLhr, [[vv, 'mL', m, 'min'], [60, 'min', 1, 'hr']]), hint: 'Pumps run per hour: multiply by 60 min / 1 hr.', why: 'A piggyback over less than an hour still gets an hourly rate.' };
  });

  T('gtt', 'iv', 'Gravity drip rate (gtt/min)', 3, function (R) {
    var df = R.pick([10, 15, 20, 60]), f, q, raw;
    if (R.chance(0.6)) {
      var v = R.pick([250, 500, 1000, 1000, 1500]), h = R.int(2, 12);
      f = [[v, 'mL', h, 'hr'], [1, 'hr', 60, 'min'], [df, 'gtt', 1, 'mL']];
      q = 'Infuse ' + fmt(v) + ' mL of lactated Ringer’s over ' + h + ' hours by gravity. The tubing delivers ' + df + ' gtt/mL. How many drops per minute? ' + RW[0];
    } else {
      var vv = R.pick([25, 50, 100, 150]), m = R.pick([15, 20, 30, 45, 60]);
      f = [[vv, 'mL', m, 'min'], [df, 'gtt', 1, 'mL']];
      q = 'Infuse an IV piggyback of ' + vv + ' mL over ' + m + ' minutes by gravity, drop factor ' + df + ' gtt/mL. How many drops per minute? ' + RW[0];
    }
    raw = daValue(f);
    if (raw < 8 || raw > 150) return null;
    return { q: q, unit: 'gtt/min', dp: 0, da: DA('x gtt/min', { n: ['gtt'], d: ['min'] }, f), hint: 'gtt/min = mL × drop factor ÷ minutes. Time must be in minutes and volume in mL.',
      why: (df === 60 ? 'With 60 gtt/mL (microdrip) tubing, gtt/min equals mL/hr. ' : 'Macrodrip tubing is 10, 15 or 20 gtt/mL; microdrip is always 60. ') + 'You can’t count part of a drop — round to a whole number.' };
  });

  T('gtt-rate', 'iv', 'mL/hr to drops per minute', 2, function (R) {
    var r = R.pick([50, 75, 80, 100, 120, 125, 150, 167, 200]), df = R.pick([10, 15, 20, 60]), f = [[r, 'mL', 1, 'hr'], [1, 'hr', 60, 'min'], [df, 'gtt', 1, 'mL']], raw = daValue(f);
    if (raw > 150) return null;
    return { q: 'The order is ' + r + ' mL/hr, but no pump is available. The gravity tubing is ' + df + ' gtt/mL. How many drops per minute will you count? ' + RW[0],
      unit: 'gtt/min', dp: 0, da: DA('x gtt/min', { n: ['gtt'], d: ['min'] }, f), hint: 'Change hours to minutes (1 hr / 60 min) and mL to drops (' + df + ' gtt / 1 mL).',
      why: 'Count for a full minute and recheck the rate often — gravity rates drift as the bag empties or the client moves.' };
  });

  function infTime(v, r) { // hours to hundredths, then the decimal × 60 → minutes (the notes' method)
    var hrs = rnd(v / r, 2), h = Math.floor(hrs + 1e-9), m = Math.round((hrs - h) * 60 + 1e-7);
    if (m === 60) { h++; m = 0; }
    return { hrs: hrs, h: h, m: m };
  }
  T('inf-time', 'iv', 'How long will it run?', 2, function (R) {
    var v = R.pick([50, 100, 250, 500, 1000, 1000, 1500]), r = R.pick([25, 30, 40, 50, 60, 75, 80, 90, 100, 110, 120, 125, 150, 175, 200]), t = infTime(v, r);
    // Skip the rare times where rounding the hours to hundredths first moves the minute; both methods then agree.
    if (v / r > 24 || v / r < 0.25 || Math.round(v / r * 60) !== t.h * 60 + t.m) return null;
    var steps = [fmt(v) + ' mL ÷ ' + r + ' mL/hr = ' + fmt(t.hrs, 2) + ' hr'];
    if (t.hrs % 1) steps.push('Minutes: 0.' + fmt(t.hrs, 2).split('.')[1] + ' × 60 = ' + fmt((t.hrs - Math.floor(t.hrs)) * 60, 1) + ' → ' + t.m + ' min');
    steps.push('= ' + t.h + ' hr ' + t.m + ' min');
    return { kind: 'hm', q: fmt(v) + ' mL is infusing at ' + r + ' mL/hr. How long will it take? Give hours and minutes (round the minutes to a whole number).', ans: [t.h, t.m], raw: v / r, unit: '',
      da: DA('x hr', { n: ['hr'], d: [] }, [[v, 'mL', 1, ''], [1, 'hr', r, 'mL']]), steps: steps, hint: 'Hours = volume ÷ rate. Then multiply the decimal part of the hours by 60 for the minutes.',
      why: 'Solve to hundredths of an hour first, then convert the decimal to minutes.' };
  });

  T('completion', 'iv', 'When will it finish? (military time)', 2, function (R) {
    var start = R.int(0, 23) * 60 + R.pick([0, 0, 15, 30, 45]), h, m, pre, dur;
    if (R.chance(0.5)) { h = R.int(1, 12); m = R.pick([0, 10, 15, 20, 30, 40, 45, 50]); pre = 'An infusion will run for ' + h + ' hr' + (m ? ' ' + m + ' min' : '') + '. '; }
    else { var v = R.pick([250, 500, 1000, 1000]), r = R.pick([50, 60, 75, 80, 100, 120, 125, 150]), t = infTime(v, r); if (v / r > 16) return null; h = t.h; m = t.m; pre = fmt(v) + ' mL is to run at ' + r + ' mL/hr (' + h + ' hr ' + m + ' min). '; }
    dur = h * 60 + m;
    var end = start + dur, ans = hhmm(end), sh = Math.floor(start / 60), sm = start % 60, rawH = sh + h, rawM = sm + m;
    if (end % 1440 === 0) return null;
    var steps = ['Start ' + hhmm(start) + ' + ' + h + ' hr ' + m + ' min', 'Hours: ' + sh + ' + ' + h + ' = ' + rawH + ' · minutes: ' + sm + ' + ' + m + ' = ' + rawM];
    if (rawM >= 60) { rawM -= 60; rawH += 1; steps.push('Minutes 60 or more: subtract 60 and add 1 hour → ' + rawH + ' hr ' + rawM + ' min'); }
    if (rawH >= 24) { steps.push('Past 2400: subtract 24 hours → ' + (rawH - 24) + ' hr ' + rawM + ' min — it finishes the next day'); }
    steps.push('= ' + ans);
    return { kind: 'time', q: pre + 'It starts at ' + hhmm(start) + '. At what time (military) will it finish?', ans: ans, unit: '', steps: steps,
      hint: 'Add the hours and minutes separately. Minutes of 60 or more make another hour; past 2400 starts a new day.', why: 'Write the completion time on the bag’s time tape and in the handoff.' };
  });

  T('remaining', 'iv', 'Time tape: infused or left', 1, function (R) {
    var v = R.pick([500, 1000, 1000]), r = R.pick([50, 75, 80, 100, 120, 125, 150]), start = R.int(5, 20) * 60, el = R.pick([1, 2, 3, 4, 5, 6]), inf = r * el;
    if (inf >= v) return null;
    var left = R.chance(0.5), ans = left ? v - inf : inf;
    return { q: 'A ' + fmt(v) + ' mL bag was hung at ' + hhmm(start) + ' running at ' + r + ' mL/hr. At ' + hhmm(start + el * 60) + ', how many mL ' + (left ? 'should be left in the bag' : 'should have infused') + '?',
      unit: 'mL', dp: 0, ans: ans, raw: ans, steps: ['Time running: ' + el + ' hr', 'Infused: ' + r + ' mL/hr × ' + el + ' hr = ' + fmt(inf) + ' mL'].concat(left ? ['Left: ' + fmt(v) + ' − ' + fmt(inf) + ' = ' + fmt(v - inf) + ' mL'] : []),
      hint: 'Infused = rate × hours running.', why: 'Mid-shift, the time tape gives both numbers you owe: volume infused (intake) and volume left (handoff).' };
  });

  T('heparin-drip', 'iv', 'Heparin infusion', 2, function (R) {
    var bag = R.pick([[25000, 250], [25000, 500], [20000, 500], [10000, 250]]), v = R.int(0, 2);
    if (v === 0) {
      var o = R.pick([800, 900, 1000, 1100, 1200, 1250, 1300, 1400, 1500, 1600, 1800]), f = [[o, 'units', 1, 'hr'], [bag[1], 'mL', bag[0], 'units']];
      return { q: 'Heparin ' + fmt(bag[0]) + ' units in ' + bag[1] + ' mL D5W. Order: infuse ' + fmt(o) + ' units/hr. Set the pump to how many mL/hr? ' + RW[1],
        unit: 'mL/hr', dp: 1, da: DA('x mL/hr', mLhr, f), hint: 'The bag is the factor: ' + bag[1] + ' mL / ' + fmt(bag[0]) + ' units.', why: 'Heparin drips follow a protocol (aPTT or anti-Xa); a second nurse checks the bag, rate and pump.' };
    }
    if (v === 1) {
      var r = R.pick([8, 10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 25, 30]), f2 = [[r, 'mL', 1, 'hr'], [bag[0], 'units', bag[1], 'mL']], raw = daValue(f2);
      if (raw > 2500 || raw < 400) return null;
      return { q: 'Heparin ' + fmt(bag[0]) + ' units in ' + bag[1] + ' mL is running at ' + r + ' mL/hr. How many units per hour is the client getting? ' + RW[0],
        unit: 'units/hr', dp: 0, da: DA('x units/hr', { n: ['units'], d: ['hr'] }, f2), hint: 'Flip the bag factor so units are on top: ' + fmt(bag[0]) + ' units / ' + bag[1] + ' mL.', why: 'Check the units/hr against the order at every handoff.' };
    }
    var kg = R.int(50, 110), u = R.pick([12, 15, 18]), f3 = [[u, 'units', 1, ['hr', 'kg']], [kg, 'kg', 1, ''], [bag[1], 'mL', bag[0], 'units']];
    return { q: 'Heparin protocol: start at ' + u + ' units/kg/hr. The client weighs ' + kg + ' kg. The bag: ' + fmt(bag[0]) + ' units in ' + bag[1] + ' mL. Set the pump to how many mL/hr? ' + RW[1],
      unit: 'mL/hr', dp: 1, da: DA('x mL/hr', mLhr, f3), hint: 'Start with the dose per kg, multiply by the weight (kg cancels), then use the bag.', why: 'Weight-based protocols use the actual weight in kg — never estimate it.' };
  });

  T('insulin-drip', 'iv', 'Insulin infusion', 1, function (R) {
    var bag = R.pick([[100, 100], [250, 250], [50, 100], [100, 250]]), v = R.int(0, 2);
    if (v === 0) {
      var r = R.pick([2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 15]), f = [[r, 'mL', 1, 'hr'], [bag[0], 'units', bag[1], 'mL']];
      return { q: 'Regular insulin ' + bag[0] + ' units in ' + bag[1] + ' mL 0.9% sodium chloride is running at ' + r + ' mL/hr. How many units per hour? ' + RW[1],
        unit: 'units/hr', dp: 1, da: DA('x units/hr', { n: ['units'], d: ['hr'] }, f), hint: 'Concentration first: ' + bag[0] + ' units / ' + bag[1] + ' mL.', why: bag[0] === bag[1] ? 'At 1 unit/mL the mL/hr is the units/hr.' : 'Only regular insulin is used for IV drips.' };
    }
    var dose = v === 1 ? R.pick([3, 4, 5, 6, 7, 8, 10]) : 0, kg = R.int(50, 100);
    var f2 = v === 1 ? [[dose, 'units', 1, 'hr'], [bag[1], 'mL', bag[0], 'units']] : [[0.1, 'units', 1, ['hr', 'kg']], [kg, 'kg', 1, ''], [bag[1], 'mL', bag[0], 'units']];
    return { q: (v === 1 ? 'Order: regular insulin ' + dose + ' units/hr IV.' : 'DKA protocol: regular insulin 0.1 unit/kg/hr IV. The client weighs ' + kg + ' kg.') + ' The bag: ' + bag[0] + ' units in ' + bag[1] + ' mL. Set the pump to how many mL/hr? ' + RW[1],
      unit: 'mL/hr', dp: 1, da: DA('x mL/hr', mLhr, f2), hint: 'Use the bag with units on the bottom: ' + bag[1] + ' mL / ' + bag[0] + ' units.', why: 'Hourly glucose checks; potassium falls as insulin moves it into cells.' };
  });

  T('titrate', 'iv', 'Titrated drips (mcg/kg/min, mcg/min)', 2, function (R) {
    var d = R.pick([
      { n: 'Dopamine', mg: 400, mL: 250, kgd: [2, 3, 5, 8, 10, 12, 15] }, { n: 'Dobutamine', mg: 500, mL: 250, kgd: [2.5, 5, 7.5, 10, 15] },
      { n: 'Norepinephrine', mg: 4, mL: 250, md: [2, 3, 4, 5, 6, 8, 10, 12] }, { n: 'Nitroglycerin', mg: 50, mL: 250, md: [5, 10, 15, 20, 25, 30, 40, 50] }]);
    var rev = R.chance(0.25), f, q, want, unit, lhs, kg = R.int(50, 110);
    if (d.kgd) {
      var dose = R.pick(d.kgd);
      if (!rev) {
        f = [[dose, 'mcg', 1, ['kg', 'min']], [kg, 'kg', 1, ''], [60, 'min', 1, 'hr'], [1, 'mg', 1000, 'mcg'], [d.mL, 'mL', d.mg, 'mg']];
        q = d.n + ' ' + d.mg + ' mg in ' + d.mL + ' mL D5W. Order: ' + fmt(dose) + ' mcg/kg/min. The client weighs ' + kg + ' kg. Set the pump to how many mL/hr? ' + RW[1];
        want = mLhr; unit = 'mL/hr'; lhs = 'x mL/hr';
      } else {
        var rate = R.pick([5, 8, 10, 12, 15, 18, 20, 25, 30]);
        f = [[rate, 'mL', 1, 'hr'], [d.mg, 'mg', d.mL, 'mL'], [1000, 'mcg', 1, 'mg'], [1, 'hr', 60, 'min'], [1, '', kg, 'kg']];
        q = d.n + ' ' + d.mg + ' mg in ' + d.mL + ' mL is running at ' + rate + ' mL/hr. The client weighs ' + kg + ' kg. How many mcg/kg/min is the client getting? ' + RW[1];
        want = { n: ['mcg'], d: ['kg', 'min'] }; unit = 'mcg/kg/min'; lhs = 'x mcg/kg/min';
      }
    } else {
      var md = R.pick(d.md);
      f = [[md, 'mcg', 1, 'min'], [60, 'min', 1, 'hr'], [1, 'mg', 1000, 'mcg'], [d.mL, 'mL', d.mg, 'mg']];
      q = d.n + ' ' + d.mg + ' mg in ' + d.mL + ' mL. Order: ' + md + ' mcg/min. Set the pump to how many mL/hr? ' + RW[1];
      want = mLhr; unit = 'mL/hr'; lhs = 'x mL/hr';
    }
    var raw = daValue(f);
    if (unit === 'mL/hr' && (raw > 150 || raw < 1)) return null;
    if (unit !== 'mL/hr' && (raw > 25 || raw < 0.5)) return null;
    return { q: q, unit: unit, dp: 1, da: DA(lhs, want, f), hint: 'Line up the units: dose' + (d.kgd && !rev ? ' × weight' : '') + ' × 60 min/hr × 1 mg/1,000 mcg × the bag (mL/mg).',
      why: 'Titrated drips: independent double-check, a smart pump, and enter tenths exactly. Never go past the ordered maximum — call the prescriber.' };
  });

  T('mgmin', 'iv', 'mg/min and g/hr drips', 1, function (R) {
    var d = R.pick([
      { n: 'Lidocaine 2 g in 500 mL D5W', top: [[2, 'g', 500, 'mL']], d: [1, 1.5, 2, 2.5, 3, 4], u: 'mg/min' }, { n: 'Lidocaine 1 g in 250 mL D5W', top: [[1, 'g', 250, 'mL']], d: [1, 2, 3, 4], u: 'mg/min' },
      { n: 'Amiodarone 900 mg in 500 mL D5W', top: [[900, 'mg', 500, 'mL']], d: [0.5, 1], u: 'mg/min' }, { n: 'Amiodarone 450 mg in 250 mL D5W', top: [[450, 'mg', 250, 'mL']], d: [0.5, 1], u: 'mg/min' },
      { n: 'Magnesium sulfate 20 g in 500 mL', top: [[20, 'g', 500, 'mL']], d: [1, 1.5, 2], u: 'g/hr' }, { n: 'Magnesium sulfate 40 g in 1,000 mL', top: [[40, 'g', 1000, 'mL']], d: [1, 2, 3], u: 'g/hr' }]);
    var dose = R.pick(d.d), f, bag = d.top[0];
    if (d.u === 'mg/min') {
      f = [[dose, 'mg', 1, 'min'], [60, 'min', 1, 'hr']].concat(bag[1] === 'g' ? [[1, 'g', 1000, 'mg']] : []).concat([[bag[2], 'mL', bag[0], bag[1]]]);
    } else f = [[dose, 'g', 1, 'hr'], [bag[2], 'mL', bag[0], 'g']];
    return { q: d.n + '. Order: ' + fmt(dose) + ' ' + d.u + '. Set the pump to how many mL/hr? ' + RW[1], unit: 'mL/hr', dp: 1, da: DA('x mL/hr', mLhr, f),
      hint: d.u === 'mg/min' ? 'Per minute → per hour (60 min/1 hr), then the bag with mg (or g) on the bottom.' : 'The bag with g on the bottom: ' + bag[2] + ' mL / ' + bag[0] + ' g.', why: 'Check the drug, concentration and rate against the order and the pump’s drug library.' };
  });

  // ===== 6 · Safe dose =====
  var WT = [
    { n: 'Enoxaparin', dpk: 1, u: 'mg', route: 'subcut every 12 hours', adult: true, dp: 0 }, { n: 'Heparin bolus', dpk: 80, u: 'units', route: 'IV', adult: true, dp: 0 },
    { n: 'Vancomycin', dpk: 15, u: 'mg', route: 'IV', adult: true, dp: 0 }, { n: 'A drug', dpk: 10, u: 'mcg', route: 'IV', adult: true, dp: 0 },
    { n: 'Acetaminophen', dpk: 15, u: 'mg', route: 'PO', adult: false, dp: 0 }, { n: 'Ibuprofen', dpk: 10, u: 'mg', route: 'PO', adult: false, dp: 0 },
    { n: 'Ondansetron', dpk: 0.15, u: 'mg', route: 'IV', adult: false, dp: 1 }, { n: 'Ceftriaxone', dpk: 50, u: 'mg', route: 'IV', adult: false, dp: 0 },
    { n: 'Gentamicin', dpk: 2.5, u: 'mg', route: 'IV', adult: false, dp: 1 }
  ];
  T('wt-dose', 'safe', 'Weight-based dose', 3, function (R) {
    var d = R.pick(WT), lb = R.chance(0.5), w = d.adult ? (lb ? R.pick([110, 132, 143, 154, 165, 176, 187, 198, 220, 150, 172]) : R.int(45, 110)) : (lb ? R.pick([22, 26, 33, 40, 44, 55, 66]) : R.int(6, 35));
    var f = lb ? [[w, 'lb', 1, ''], [1, 'kg', 2.2, 'lb'], [d.dpk, d.u, 1, 'kg']] : [[w, 'kg', 1, ''], [d.dpk, d.u, 1, 'kg']];
    var cap1000 = d.n === 'Acetaminophen' && daValue(f) > 1000;
    if (cap1000) return null;
    return { q: d.n + ' ' + fmt(d.dpk) + ' ' + d.u + '/kg ' + d.route + ' is ordered for a' + (d.adult ? 'n adult' : ' child') + ' who weighs ' + w + ' ' + (lb ? 'lb' : 'kg') + '. What is the dose in ' + d.u + '? ' + RW[d.dp],
      unit: d.u, dp: d.dp, da: DA('x ' + d.u, { n: [d.u], d: [] }, f), hint: (lb ? 'Start with the weight and convert to kg (1 kg / 2.2 lb), then ' : 'Start with the weight, then ') + 'multiply by the dose per kg.',
      why: 'In DA, weight-based problems start with the weight. Carry the kg unrounded until the final dose.' };
  });

  var SAFE = [{ n: 'amoxicillin', lo: 20, hi: 40, q: 8 }, { n: 'cefazolin', lo: 25, hi: 50, q: 8 }, { n: 'cephalexin', lo: 25, hi: 50, q: 6 }, { n: 'ampicillin', lo: 100, hi: 200, q: 6 }, { n: 'clindamycin', lo: 8, hi: 20, q: 8 }];
  function safeCase(R) {
    var d = R.pick(SAFE), lb = R.chance(0.4), kg = lb ? null : R.int(8, 30), w = lb ? R.pick([22, 33, 44, 55, 66]) : kg, kgv = lb ? w / 2.2 : kg, n = 24 / d.q;
    return { d: d, lb: lb, w: w, kg: kgv, n: n, lo: d.lo * kgv / n, hi: d.hi * kgv / n, wtxt: w + ' ' + (lb ? 'lb' : 'kg') };
  }
  T('safe-max', 'safe', 'Safe dose range: the maximum per dose', 2, function (R) {
    var c = safeCase(R), dp = c.hi < 100 ? 1 : 0, f = (c.lb ? [[c.w, 'lb', 1, ''], [1, 'kg', 2.2, 'lb']] : [[c.w, 'kg', 1, '']]).concat([[c.d.hi, 'mg', 1, ['kg', 'day']], [1, 'day', 24, 'hr'], [c.d.q, 'hr', 1, 'dose']]);
    return { q: 'A child who weighs ' + c.wtxt + ' is ordered ' + c.d.n + '. The drug reference: ' + c.d.lo + '–' + c.d.hi + ' mg/kg/day, divided every ' + c.d.q + ' hours. What is the maximum safe single dose in mg? ' + RW[dp],
      unit: 'mg per dose', dp: dp, da: DA('x mg/dose', { n: ['mg'], d: ['dose'] }, f),
      steps: ['Doses a day: 24 ÷ ' + c.d.q + ' = ' + c.n, 'Daily range: ' + c.d.lo + '–' + c.d.hi + ' mg/kg × ' + fmt(c.kg, 2) + ' kg = ' + fmt(c.d.lo * c.kg, 1) + '–' + fmt(c.d.hi * c.kg, 1) + ' mg/day', 'Per dose: ÷ ' + c.n + ' = ' + fmt(c.lo, 1) + '–' + fmt(c.hi, 1) + ' mg'],
      hint: 'Use the top of the range × the weight in kg, then divide by the number of doses in 24 hours.', why: 'Choosing the dose is the prescriber’s job; verifying it is safe is yours.' };
  });

  T('safe-decide', 'safe', 'Is the ordered dose safe?', 2, function (R) {
    var c = safeCase(R), kind = R.int(0, 2), o;
    var nice = function (x, up) { var s = x >= 100 ? 25 : x >= 20 ? 5 : 1; return up ? Math.ceil(x / s) * s : Math.floor(x / s) * s; };
    if (kind === 0) { o = nice((c.lo + c.hi) / 2, false); if (o < c.lo - 1e-9 || o > c.hi + 1e-9) return null; }
    else if (kind === 1) { o = nice(c.hi * R.pick([1.25, 1.5, 2]), true); if (o <= c.hi + 1e-9) return null; }
    else { o = nice(c.lo * R.pick([0.4, 0.5, 0.6]), false); if (o <= 0 || o >= c.lo - 1e-9) return null; }
    return { kind: 'choice', q: 'A child who weighs ' + c.wtxt + ' is ordered ' + c.d.n + ' ' + fmt(o) + ' mg every ' + c.d.q + ' hours. The drug reference: ' + c.d.lo + '–' + c.d.hi + ' mg/kg/day, divided every ' + c.d.q + ' hours. What do you do?',
      choices: ['Within the safe range — give it', 'Above the safe range — hold it and contact the prescriber', 'Below the range — it may not work; contact the prescriber'], ans: kind,
      expl: ['Safe means within the reference range for this weight.', 'Over the maximum is unsafe: don’t give it; clarify with the prescriber.', 'Under the range is safe but may not be effective — clarify it too.'],
      steps: ['Weight: ' + fmt(c.kg, 2) + ' kg', 'Per dose: ' + c.d.lo + '–' + c.d.hi + ' mg/kg/day × ' + fmt(c.kg, 2) + ' kg ÷ ' + c.n + ' doses = ' + fmt(c.lo, 1) + '–' + fmt(c.hi, 1) + ' mg', 'Ordered ' + fmt(o) + ' mg → ' + ['within the range', 'above the range', 'below the range'][kind]],
      hint: 'Work out the safe range per dose (mg/kg/day × kg ÷ doses a day) and compare the order with it.', why: 'Outside the range? Don’t give it — contact the prescriber. Advocacy is in your scope; changing the dose is not.' };
  });

  T('bsa', 'safe', 'Body surface area', 2, function (R) {
    var child = R.chance(0.4), kg = child ? R.int(10, 35) : R.int(45, 115), cm = child ? R.int(75, 145) : R.int(150, 193), house = R.chance(0.4);
    if (child && (kg / Math.pow(cm / 100, 2) < 12 || kg / Math.pow(cm / 100, 2) > 26)) return null;
    if (!child && (kg / Math.pow(cm / 100, 2) < 17 || kg / Math.pow(cm / 100, 2) > 40)) return null;
    var w = house ? Math.round(kg * 2.2) : kg, h = house ? Math.round(cm / 2.54) : cm, k = house ? 3131 : 3600, raw = Math.sqrt(w * h / k);
    return { q: 'A ' + (child ? 'child' : 'client') + ' weighs ' + w + (house ? ' lb' : ' kg') + ' and is ' + h + (house ? ' inches' : ' cm') + ' tall. What is the body surface area? ' + RW[2],
      unit: 'm²', dp: 2, ans: rnd(raw, 2), raw: raw, steps: [w + ' × ' + h + ' = ' + fmt(w * h), fmt(w * h) + ' ÷ ' + fmt(k) + ' = ' + fmt(w * h / k, 4), '√' + fmt(w * h / k, 4) + ' = ' + fmt(raw, 4) + ' → ' + fmt(rnd(raw, 2), 2) + ' m²'],
      hint: house ? 'Household: BSA = √(lb × in ÷ 3,131).' : 'Metric: BSA = √(kg × cm ÷ 3,600).', why: 'Round BSA to hundredths — and use the current height and weight.' };
  });

  T('bsa-dose', 'safe', 'Dose by body surface area', 1, function (R) {
    var b = rnd(R.int(55, 230) / 100, 2), x = R.pick([1.5, 2, 10, 25, 50, 75, 100, 135, 175, 250]), dp = b * x < 1 ? 2 : b * x < 10 ? 1 : 0, f = [[b, 'm²', 1, ''], [x, 'mg', 1, 'm²']];
    return { q: 'A chemotherapy drug is ordered at ' + fmt(x) + ' mg/m². The client’s BSA is ' + fmt(b, 2) + ' m². What is the dose in mg? ' + RW[dp],
      unit: 'mg', dp: dp, da: DA('x mg', { n: ['mg'], d: [] }, f), hint: 'In DA, BSA problems start with the BSA: ' + fmt(b, 2) + ' m² × ' + fmt(x) + ' mg / 1 m².',
      why: 'Chemotherapy has a narrow margin — a second nurse verifies the BSA and the dose.' };
  });

  // ===== 7 · I&O, feeds, children =====
  T('io-oral', 'io', 'Oral intake', 2, function (R) {
    var pool = [['8 oz of coffee', 240], ['6 oz of coffee', 180], ['4 oz of orange juice', 120], ['a 240 mL carton of milk', 240], ['120 mL of gelatin', 120], ['a 6 oz cup of ice chips', 90, 1],
      ['a 4 oz cup of ice chips', 60, 1], ['6 oz of broth', 180], ['4 oz of ice cream', 120], ['360 mL of water', 360], ['a 3 oz popsicle', 90], ['2 slices of toast', 0], ['a cup of applesauce', 0],
      ['mashed potatoes', 0], ['scrambled eggs', 0], ['8 oz of tea', 240], ['150 mL of cranberry juice', 150]];
    var items = R.shuffle(pool).slice(0, R.int(3, 5)), tot = items.reduce(function (s, x) { return s + x[1]; }, 0);
    if (!tot) return null;
    return { q: 'For lunch the client had ' + items.map(function (x) { return x[0]; }).join(', ').replace(/, ([^,]*)$/, ' and $1') + '. What is the oral intake in mL?',
      unit: 'mL', dp: 0, ans: tot, raw: tot, steps: items.map(function (x) { return x[0] + ': ' + (x[1] ? x[1] + ' mL' + (x[2] ? ' (ice counts as half its volume)' : '') : 'not counted — not liquid at room temperature'); }).concat(['Total: ' + fmt(tot) + ' mL']),
      hint: '1 oz = 30 mL; ice chips count as half; count only what is liquid at room temperature.', why: 'Always record intake in mL.' };
  });

  T('io-cbi', 'io', 'Bladder irrigation: true urine', 1, function (R) {
    var r = R.pick([40, 50, 100, 150, 200]), h = R.pick([8, 12]), irr = r * h, urine = R.int(6, 18) * 50, tot = irr + urine;
    return { q: 'A client has continuous bladder irrigation running at ' + r + ' mL/hr. Over the ' + h + '-hour shift the drainage bag collected ' + fmt(tot) + ' mL. What was the true urine output?',
      unit: 'mL', dp: 0, ans: urine, raw: urine, steps: ['Irrigant: ' + r + ' mL/hr × ' + h + ' hr = ' + fmt(irr) + ' mL', 'Urine: ' + fmt(tot) + ' − ' + fmt(irr) + ' = ' + fmt(urine) + ' mL'],
      hint: 'The bag holds urine plus irrigant: subtract what went in.', why: 'If drainage is less than the irrigant infused, suspect a blocked catheter — check for clots and bladder distention.' };
  });

  T('io-iv', 'io', 'IV intake for a shift', 2, function (R) {
    if (R.chance(0.5)) {
      var r = R.pick([75, 80, 100, 125]), a = R.pick([2, 3, 4]), gap = R.pick([1, 2]), b = 8 - a - gap, ans = r * (a + b);
      return { q: 'Count the day shift 0700–1500. 0.9% sodium chloride runs at ' + r + ' mL/hr from 0700. At ' + hhmm((7 + a) * 60) + ' the IV infiltrates; a new IV is started at ' + hhmm((7 + a + gap) * 60) + ' and runs at the same rate until 1500. What is the IV intake for the shift?',
        unit: 'mL', dp: 0, ans: ans, raw: ans, steps: ['Running: ' + a + ' hr + ' + b + ' hr = ' + (a + b) + ' hr (not ' + 8 + ' — it was off for ' + gap + ' hr)', r + ' mL/hr × ' + (a + b) + ' hr = ' + fmt(ans) + ' mL'],
        hint: 'Count only the hours it actually ran.', why: 'Interruptions count: an infiltration means fewer hours infused.' };
    }
    var r1 = R.pick([50, 75, 100]), r2 = R.pick([80, 100, 125, 150]), h1 = R.int(2, 6), h2 = 8 - h1, tot = r1 * h1 + r2 * h2;
    if (r1 === r2) return null;
    return { q: 'Count the shift 0700–1500. D5½NS runs at ' + r1 + ' mL/hr from 0700; at ' + hhmm((7 + h1) * 60) + ' the rate is changed to ' + r2 + ' mL/hr until 1500. What is the IV intake?',
      unit: 'mL', dp: 0, ans: tot, raw: tot, steps: [r1 + ' × ' + h1 + ' hr = ' + fmt(r1 * h1) + ' mL', r2 + ' × ' + h2 + ' hr = ' + fmt(r2 * h2) + ' mL', 'Total: ' + fmt(tot) + ' mL'],
      hint: 'Work out each rate’s part separately and add.', why: 'Your notes: many agencies total intake 1 hour before shift change; follow your facility’s times.' };
  });

  T('io-ivpb24', 'io', '24-hour IV intake with piggybacks', 2, function (R) {
    var v = R.pick([50, 75, 100, 150, 250]), q = R.pick([4, 6, 8, 12]), r = R.pick([50, 75, 80, 100, 125, 150]), n = 24 / q, tot = v * n + r * 24;
    if (tot > 4000) return null;
    return { q: 'An antibiotic IV piggyback of ' + v + ' mL runs every ' + q + ' hours, and maintenance fluid runs at ' + r + ' mL/hr for 24 hours. What is the 24-hour IV intake?',
      unit: 'mL', dp: 0, ans: tot, raw: tot, steps: ['Piggybacks: 24 ÷ ' + q + ' = ' + n + ' doses × ' + v + ' mL = ' + fmt(v * n) + ' mL', 'Maintenance: ' + r + ' mL/hr × 24 hr = ' + fmt(r * 24) + ' mL', 'Total: ' + fmt(tot) + ' mL'],
      hint: 'Count the doses in 24 hours, then add the maintenance fluid.', why: 'Record piggybacks separately — each bag’s full volume is intake.' };
  });

  T('tf-total', 'io', 'Tube feeding intake', 2, function (R) {
    var r = R.pick([40, 50, 55, 60, 65, 75, 80]), h = R.pick([8, 12, 24]), fl = R.pick([30, 50]), every = 4, nf = h / every, meds = R.int(0, 3), mf = 30, tot = r * h + fl * nf + meds * 2 * mf;
    return { q: 'A continuous tube feeding runs at ' + r + ' mL/hr for ' + h + ' hours, with a ' + fl + ' mL water flush every 4 hours' + (meds ? ' and ' + mf + ' mL of water before and after each of ' + meds + ' medication ' + pl(meds, 'pass') + '' : '') + '. What is the total intake from the tube?',
      unit: 'mL', dp: 0, ans: tot, raw: tot, steps: ['Feeding: ' + r + ' × ' + h + ' hr = ' + fmt(r * h) + ' mL', 'Flushes: ' + h + ' ÷ 4 = ' + nf + ' × ' + fl + ' mL = ' + fmt(fl * nf) + ' mL'].concat(meds ? ['Medication flushes: ' + meds + ' × (' + mf + ' + ' + mf + ') = ' + fmt(meds * 2 * mf) + ' mL'] : []).concat(['Total: ' + fmt(tot) + ' mL']),
      hint: 'Feeding (rate × hours) plus every water flush.', why: 'Water flushes count as intake too.' };
  });

  T('tf-dilute', 'io', 'Diluted tube feeding', 1, function (R) {
    var fr = R.pick([[1, 4, '¼'], [1, 3, '⅓'], [1, 2, '½'], [3, 4, '¾'], [2, 3, '⅔']]);
    if (R.chance(0.5)) {
      var can = R.pick([237, 240, 250]), total = can * fr[1] / fr[0];
      if (Math.abs(total - Math.round(total)) > 1e-9) return null;
      return { q: 'You need ' + fr[2] + '-strength formula, made from one ' + can + ' mL can. How many mL of water will you add?',
        unit: 'mL', dp: 0, ans: total - can, raw: total - can, steps: ['Total volume: ' + can + ' ÷ ' + fr[2] + ' = ' + fmt(total) + ' mL', 'Water: ' + fmt(total) + ' − ' + can + ' = ' + fmt(total - can) + ' mL'],
        hint: 'Strength = formula ÷ total volume. Find the total first, then subtract the formula.', why: 'DA doesn’t work for dilutions — always two steps: total volume, then subtract the formula.' };
    }
    var T2 = R.pick([300, 360, 480, 600, 720, 900]), form = T2 * fr[0] / fr[1];
    if (Math.abs(form - Math.round(form)) > 1e-9) return null;
    var askWater = R.chance(0.5);
    return { q: 'Make ' + T2 + ' mL of ' + fr[2] + '-strength formula. How many mL of ' + (askWater ? 'water' : 'formula') + ' will you use?',
      unit: 'mL', dp: 0, ans: askWater ? T2 - form : form, raw: askWater ? T2 - form : form, steps: ['Formula: ' + fr[2] + ' × ' + T2 + ' = ' + fmt(form) + ' mL', 'Water: ' + T2 + ' − ' + fmt(form) + ' = ' + fmt(T2 - form) + ' mL'],
      hint: 'The fraction is formula over total volume.', why: 'Diluting is uncommon now — mixing raises the infection risk; label the container clearly.' };
  });

  T('peds-replace', 'io', 'Children: replacement fluid', 1, function (R) {
    var M = R.pick([60, 70, 75, 80, 100]), P = R.pick([20, 25, 30, 35, 40, 45, 50]), rr = M - P, hrs = R.pick([1, 1.5, 2, 2.5, 3, 4]), loss = rr * hrs, start = R.int(8, 20) * 60, v = R.int(0, 2);
    if (rr <= 0 || loss > 200 || loss % 5) return null;
    var base = 'A child’s IV may run at no more than ' + M + ' mL/hr in total. Maintenance fluid runs at ' + P + ' mL/hr. The prescriber orders replacement of ' + loss + ' mL of NG drainage (mL for mL), started at ' + hhmm(start) + '. ';
    var steps = ['Rate left for replacement: ' + M + ' − ' + P + ' = ' + rr + ' mL/hr', 'Time: ' + loss + ' mL ÷ ' + rr + ' mL/hr = ' + fmt(hrs) + ' hr', 'Stops at ' + hhmm(start) + ' + ' + fmt(hrs) + ' hr = ' + hhmm(start + hrs * 60)];
    if (v === 0) return { q: base + 'At how many mL/hr can the replacement run?', unit: 'mL/hr', dp: 0, ans: rr, raw: rr, steps: steps.slice(0, 1), hint: 'Maximum rate − maintenance rate.', why: 'Children get fluid overload fast — pumps, small bags and strict I&O.' };
    if (v === 1) return { q: base + 'How many hours will the replacement take?', unit: 'hr', dp: 1, ans: hrs, raw: hrs, steps: steps.slice(0, 2), hint: 'Find the rate left (maximum − maintenance), then volume ÷ rate.', why: 'Daily weights and strict I&O are the priority in children.' };
    return { kind: 'time', q: base + 'At what time (military) will it finish?', ans: hhmm(start + hrs * 60), unit: '', steps: steps, hint: 'Rate left = maximum − maintenance; hours = volume ÷ rate; add to the start time.', why: 'A pump is a tool, not judgment — double-check pediatric orders with another nurse.' };
  });

  T('peds-dose', 'io', 'Children: dose and volume', 2, function (R) {
    var d = R.pick([{ n: 'Acetaminophen', dpk: 15, c: 160, per: 5 }, { n: 'Ibuprofen', dpk: 10, c: 100, per: 5 }, { n: 'Amoxicillin', dpk: 15, c: 250, per: 5 }, { n: 'Cephalexin', dpk: 12.5, c: 250, per: 5 }]);
    var kg = R.int(6, 30), vol = R.chance(0.5), f = [[kg, 'kg', 1, ''], [d.dpk, 'mg', 1, 'kg']];
    if (!vol) return { q: d.n + ' ' + fmt(d.dpk) + ' mg/kg PO is ordered for a child who weighs ' + kg + ' kg. What is the single dose in mg? ' + RW[0], unit: 'mg', dp: 0, da: DA('x mg', { n: ['mg'], d: [] }, f),
      hint: 'Weight × dose per kg.', why: 'Children’s doses are smaller than adults’ — if yours isn’t, recheck.' };
    f.push([d.per, 'mL', d.c, 'mg']);
    var raw = daValue(f), dp = volDp(raw);
    if (raw > 20) return null;
    return { q: d.n + ' ' + fmt(d.dpk) + ' mg/kg PO is ordered for a child who weighs ' + kg + ' kg. The bottle: ' + d.c + ' mg/' + d.per + ' mL. How many mL will you give? ' + RW[dp], unit: 'mL', dp: dp, da: DA('x mL', mL, f),
      hint: 'Weight × dose per kg gives mg; then the label (' + d.per + ' mL / ' + d.c + ' mg) gives mL — all in one setup.', why: 'Use an oral syringe for children; never a household spoon.' };
  });

  T('diaper', 'io', 'Diaper weights and urine output', 1, function (R) {
    if (R.chance(0.5)) {
      var dry = R.int(12, 30), wet = dry + R.int(15, 90);
      return { q: 'A wet diaper weighs ' + wet + ' g. The same diaper dry weighs ' + dry + ' g. How many mL of urine is that?', unit: 'mL', dp: 0, ans: wet - dry, raw: wet - dry,
        steps: [wet + ' − ' + dry + ' = ' + (wet - dry) + ' g', '1 g = 1 mL → ' + (wet - dry) + ' mL'], hint: '1 g of wet diaper weight = 1 mL of urine.', why: 'Weigh diapers when strict I&O is ordered.' };
    }
    var kg = R.int(4, 15), h = R.pick([4, 6, 8]), rate = R.pick([0.5, 0.75, 1, 1.25, 1.5, 2]), ml = rnd(kg * h * rate, 0);
    var raw = ml / kg / h;
    return { q: 'An infant who weighs ' + kg + ' kg made ' + ml + ' mL of urine in ' + h + ' hours. What is the urine output in mL/kg/hr? ' + RW[1], unit: 'mL/kg/hr', dp: 1,
      da: DA('x mL/kg/hr', { n: ['mL'], d: ['hr', 'kg'] }, [[ml, 'mL', h, 'hr'], [1, '', kg, 'kg']]), hint: 'Divide the mL by the hours, then by the kg.', why: 'Infants and children should make at least about 1 mL/kg/hr; less suggests dehydration.' };
  });

  // ===== 8 · Practice and pitfalls =====
  T('dhv', 'pitfalls', 'Desired over have (D/H × V)', 2, function (R) {
    var d = R.pick([{ n: 'acetaminophen', h: 250, u: 'mg', v: 1, form: 'tablet', o: [500] }, { n: 'amoxicillin suspension', h: 250, u: 'mg', v: 5, form: 'mL', o: [125, 375, 500] },
      { n: 'cephalexin suspension', h: 125, u: 'mg', v: 5, form: 'mL', o: [250, 375] }, { n: 'furosemide', h: 10, u: 'mg', v: 1, form: 'mL', o: [20, 25, 40] }, { n: 'metoprolol', h: 50, u: 'mg', v: 1, form: 'tablet', o: [25, 100] }]);
    var o = R.pick(d.o), raw = o / d.h * d.v, dp = d.form === 'mL' ? volDp(raw) : 1, sc = d.n === 'metoprolol';
    if (d.form === 'tablet' && !wholeOrHalf(raw, sc)) return null;
    return { q: 'Order: ' + d.n + ' ' + o + ' ' + d.u + '. On hand: ' + d.h + ' ' + d.u + ' per ' + (d.v === 1 ? '' : d.v + ' ') + (d.form === 'tablet' ? 'tablet' + (sc ? ' (scored)' : '') : 'mL') + '. Use D/H × V: how many ' + (d.form === 'tablet' ? 'tablets' : 'mL') + '?' + (d.form === 'mL' ? ' ' + RW[dp] : ''),
      unit: d.form === 'tablet' ? 'tablets' : 'mL', dp: dp, ans: rnd(raw, dp), raw: raw,
      da: DA('x ' + (d.form === 'tablet' ? 'tablets' : 'mL'), { n: [d.form], d: [] }, [[o, d.u, 1, ''], [d.v, d.form, d.h, d.u]]),
      steps: ['D/H × V = ' + o + ' ' + d.u + ' ÷ ' + d.h + ' ' + d.u + ' × ' + d.v + ' ' + (d.form === 'tablet' ? 'tablet' : 'mL') + ' = ' + fmt(raw, 3) + (rnd(raw, dp) !== raw ? ' → ' + fmt(rnd(raw, dp)) : '')],
      hint: 'D = desired (the order), H = have (the strength), V = the vehicle it comes in (1 tablet, 5 mL).', why: 'D/H × V needs the order and label in the same unit — convert first if they aren’t. Your skills-lab checklist writes it D/H × Q = X.' };
  });

  // Topics, in the notes' order.
  var TOPICS = [['order', 'Safety and the order'], ['units', 'Systems of measurement'], ['da', 'Dimensional analysis'], ['parenteral', 'Oral and parenteral'], ['iv', 'IV therapy'],
    ['safe', 'Verifying a safe dose'], ['io', 'I&O, tube feeding, children'], ['pitfalls', 'Practice and pitfalls']];

  // ---------- Checking an answer ----------
  // Returns { ok, note } — note flags writing that isn't ISMP style even when the number is right.
  function parseNum(s) {
    s = String(s == null ? '' : s).replace(/,/g, '').replace(/½/g, ' 1/2').replace(/¼/g, ' 1/4').replace(/¾/g, ' 3/4').trim();
    // Fractions: "1/2", "1 1/2".
    var fr = /^(\d+\s+)?(\d+)\s*\/\s*(\d+)\s*[a-zA-Z]*$/.exec(s);
    if (fr && Number(fr[3])) return { v: (fr[1] ? Number(fr[1]) : 0) + Number(fr[2]) / Number(fr[3]), frac: true };
    s = s.replace(/\s+/g, '');
    s = s.replace(/[a-zA-Zµ²\/%]+$/, '');
    if (!/^-?(\d+\.?\d*|\.\d+)$/.test(s)) return null;
    return { v: Number(s), lead: /^\./.test(s), trail: /\.\d*0$/.test(s) || /\.$/.test(s) };
  }
  function check(p, input) {
    if (p.kind === 'choice') return { ok: Number(input) === p.ans };
    if (p.kind === 'time') {
      var t = String(input || '').replace(/[^0-9]/g, '');
      if (t.length === 3) t = '0' + t;
      return { ok: t === p.ans, note: t === p.ans && String(input).replace(/\D/g, '').length < 4 ? 'Write military time with four digits: ' + p.ans + '.' : '' };
    }
    if (p.kind === 'hm') {
      var h = parseNum(input && input[0]), m = parseNum(input && input[1]);
      return { ok: !!h && !!m && h.v === p.ans[0] && m.v === p.ans[1] };
    }
    var x = parseNum(input);
    if (!x) return { ok: false, bad: true };
    var ok = Math.abs(x.v - p.ans) < 1e-9, note = '';
    if (ok && x.lead) note = 'Right — but write the leading zero: ' + fmt(p.ans) + '.';
    else if (ok && x.trail) note = 'Right — but drop the trailing zero: ' + fmt(p.ans) + '.';
    else if (!ok && p.raw != null && Math.abs(x.v - p.raw) < Math.pow(10, -(p.dp || 0)) && rnd(x.v, p.dp) !== x.v) note = 'Close — now round it: ' + RW[p.dp || 0].replace('Round', 'round');
    else if (!ok && p.raw != null && p.dp != null && Math.abs(rnd(p.raw, p.dp + 1) - x.v) < 1e-9 && p.dp < 2) note = 'You rounded to one place too many — ' + RW[p.dp].toLowerCase();
    return { ok: ok, note: note };
  }

  root.DOSE = { TYPES: TYPES, BY: BY, TOPICS: TOPICS, rng: rng, seeded: function (s) { return rng(mulberry32(s)); }, rnd: rnd, fmt: fmt, dec: dec, U: U, daValue: daValue, daLeft: daLeft, check: check, parseNum: parseNum, hhmm: hhmm, RW: RW, DPW: DPW };
  if (typeof module !== 'undefined' && module.exports) module.exports = root.DOSE;
})(typeof window !== 'undefined' ? window : globalThis);
