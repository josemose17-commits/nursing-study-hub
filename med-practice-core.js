// Medication practice engine: merges every exam's drugs into one shape and builds questions. No DOM, so
// tools/check_med_practice.js runs the same code in Node.
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api; else root.MedPracticeCore = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';
  var EXAMS = [['1', 'Exam 1'], ['2', 'Exam 2'], ['3', 'Exam 3'], ['4', 'Exam 4'], ['5', 'Exam 5'], ['F', 'Final']];
  var SYS_EXAM = { cardio: '2', heme: '2', resp: '2', gi: '3', endo: '3', fin: 'F' };
  var MODES = [
    ['suffix', 'Suffixes', 'Name ending → group, and the endings that trick you'],
    ['group', 'Sort into groups', 'Which group does this drug belong to?'],
    ['traits', 'Group traits', 'What the whole group shares'],
    ['facts', 'Drug-specific facts', 'The detail that sets one drug apart'],
    ['uses', 'Drug → use', 'What each medicine is used for'],
    ['mixed', 'Mixed', 'A bit of everything']
  ];

  function clean(s) { return String(s == null ? '' : s).replace(/\s+/g, ' ').trim(); }
  function usable(s) { s = clean(s); return s && s !== '—' && s !== '-' && !/^none\.?$/i.test(s) ? s : ''; }

  // One shape for every exam: groups {id, exam, sys, name, how, use, effects, monitor}; drugs {id, exam, g, n, use, fact, trap, anchor, names}
  function build(MP, DRUG) {
    var groups = [], drugs = [], gById = {};
    (MP.GROUPS || []).forEach(function (g) { var x = Object.assign({ sys: 'e' + g.exam }, g); groups.push(x); gById[x.id] = x; });
    (MP.DRUGS || []).forEach(function (d, i) {
      var g = gById[d.g]; if (!g) throw new Error('unknown group ' + d.g);
      drugs.push({ id: g.exam + ':' + d.n.toLowerCase().replace(/[^a-z0-9]+/g, '-'), exam: g.exam, g: d.g, n: d.n, use: d.use, fact: d.fact, trap: d.trap || '', anchor: d.anchor || '', names: [d.n] });
    });
    if (DRUG) {
      (DRUG.classes || []).forEach(function (c) {
        var exam = SYS_EXAM[c.sys]; if (!exam) return;
        var x = { id: exam + '-' + c.id, exam: exam, sys: c.sys, name: clean(c.name), how: usable(c.mech), effects: usable(c.risks), monitor: usable(c.assess), use: '' };
        groups.push(x); gById[x.id] = x;
      });
      (DRUG.drugs || []).forEach(function (d) {
        var c = (DRUG.classes || []).find(function (k) { return k.id === d.k; }); if (!c) return;
        var exam = SYS_EXAM[c.sys], g = gById[exam + '-' + c.id]; if (!g) return;
        var names = [d.n, d.g, d.b].concat(String(d.b || '').split(/[\/,;]| or /)).map(clean).filter(function (s) { return s && s.length > 2; });
        drugs.push({ id: exam + ':' + d.id, exam: exam, g: g.id, n: clean(d.n), use: usable(d.ind), fact: usable(d.nclex), trap: usable(d.trap), anchor: usable(d.anchor), names: names });
      });
    }
    // a group's "used for" comes from its drugs when the card set has none
    groups.forEach(function (g) {
      if (g.use) return;
      var u = drugs.filter(function (d) { return d.g === g.id && d.use; }).map(function (d) { return d.use; });
      g.use = u.length === 1 ? u[0] : '';
    });
    return { groups: groups, drugs: drugs, stems: (MP.STEMS || []).map(function (s) { return { end: s[0], group: s[1], ex: s[2], tip: s[3], exams: s[4].split(' ') }; }), traps: (MP.TRAPS || []).map(function (t) { return { drug: t[0], looks: t[1], is: t[2] }; }) };
  }

  // Which naming ending explains this drug? Returns the stem, a trap, or null (no helpful ending).
  function endingOf(bank, name) {
    var n = String(name).toLowerCase().replace(/\(.*?\)/g, '').trim(), first = n.split(/[\s\/-]/)[0];
    var trap = bank.traps.find(function (t) { return t.drug.split(' / ').some(function (x) { return x === n; }); }); // whole name only, so combination pills are not mislabeled
    if (trap) return { trap: trap };
    // the longest matching ending wins (aripiprazole is -piprazole, not the PPI -prazole)
    var best = null, len = 0;
    bank.stems.forEach(function (s) {
      if (/\(loop\)/.test(s.end)) { if (/semide$|etanide$/.test(first) && len < 5) { best = s; len = 5; } return; }
      s.end.split(' / ').forEach(function (e) {
        e = e.trim();
        var hit = /-$/.test(e) ? first.indexOf(e.slice(0, -1)) === 0 : first.length > e.length && first.slice(-(e.length - 1)) === e.slice(1);
        if (hit && e.length > len) { best = s; len = e.length; }
      });
    });
    return best ? { stem: best } : null;
  }

  function shuffle(a, rng) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rng() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  // Pick n distractors with text different from the answer and from each other.
  function pick(pool, n, answer, rng) {
    var seen = {}, out = []; seen[answer.toLowerCase()] = 1;
    shuffle(pool, rng).forEach(function (t) { var k = String(t).toLowerCase(); if (out.length < n && t && !seen[k]) { seen[k] = 1; out.push(t); } });
    return out;
  }
  function scrub(text, names) {
    var t = clean(text);
    names.slice().sort(function (a, b) { return b.length - a.length; }).forEach(function (n) {
      if (n.length < 3) return;
      t = t.replace(new RegExp('\\b' + n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi'), 'this drug');
    });
    return t.replace(/this drug(\s*\(this drug\))+/gi, 'this drug');
  }
  function q(key, mode, prompt, answer, wrong, rng, info) {
    if (wrong.length < 3) return null;
    var opts = shuffle([answer].concat(wrong.slice(0, 3)), rng);
    return { key: key, mode: mode, prompt: prompt, opts: opts, a: opts.indexOf(answer), info: info };
  }

  // Build every possible question for the chosen exams, then the page samples a round.
  function questions(bank, exams, mode, rng) {
    rng = rng || Math.random;
    var inExam = function (x) { return exams.indexOf(x.exam) >= 0; };
    var G = bank.groups.filter(inExam), Dr = bank.drugs.filter(inExam), gById = {};
    bank.groups.forEach(function (g) { gById[g.id] = g; });
    var out = [], want = function (m) { return mode === m || mode === 'mixed'; };
    var sameSysFirst = function (g, list) { var a = list.filter(function (x) { return x.sys === g.sys && x.id !== g.id; }), b = list.filter(function (x) { return x.sys !== g.sys && x.id !== g.id; }); return a.length >= 3 ? a : a.concat(b); };

    if (want('suffix')) {
      var S = bank.stems.filter(function (s) { return s.exams.some(function (e) { return exams.indexOf(e) >= 0; }); });
      var allGroups = bank.stems.map(function (s) { return s.group; });
      S.forEach(function (s) {
        out.push(q('suffix:end:' + s.end, 'suffix', 'A drug whose name ends in **' + s.end + '** is most likely which kind of drug?', s.group, pick(allGroups, 3, s.group, rng), rng, { kind: 'stem', stem: s }));
        var ex = s.ex.split(/,|;/)[0].replace(/\(.*?\)/g, '').trim();
        var others = bank.stems.filter(function (o) { return o.group !== s.group; }).map(function (o) { return o.ex.split(/,|;/)[0].replace(/\(.*?\)/g, '').trim(); });
        out.push(q('suffix:pick:' + s.end, 'suffix', 'Which of these is in the group **' + s.group + '**?', ex, pick(others, 3, ex, rng), rng, { kind: 'stem', stem: s }));
      });
      bank.traps.forEach(function (t) {
        out.push(q('suffix:trap:' + t.drug, 'suffix', '**' + t.drug + '** looks like it belongs with “' + t.looks + '.” What is it really?', t.is, pick(bank.traps.map(function (x) { return x.is; }), 3, t.is, rng), rng, { kind: 'trap', trap: t }));
      });
    }
    Dr.forEach(function (d) {
      var g = gById[d.g], others = Dr.filter(function (x) { return x.g !== d.g; });
      var info = { kind: 'drug', drug: d, group: g, ending: endingOf(bank, d.n) };
      if (want('group')) out.push(q('group:' + d.id, 'group', 'Which group does **' + d.n + '** belong to?', g.name, pick(sameSysFirst(g, G).map(function (x) { return x.name; }), 3, g.name, rng), rng, info));
      if (want('facts') && d.fact) {
        var prompt = 'Which drug fits this? ' + scrub(d.fact, d.names) + (d.trap ? ' Common mistake: ' + scrub(d.trap, d.names) : '');
        if (!new RegExp('\\b' + d.n.split(/[\s(\/]/)[0] + '\\b', 'i').test(prompt))
          out.push(q('facts:' + d.id, 'facts', prompt, d.n, pick(others.map(function (x) { return x.n; }), 3, d.n, rng), rng, info));
      }
      if (want('uses') && d.use) out.push(q('uses:' + d.id, 'uses', 'What is **' + d.n + '** mainly used for?', d.use, pick(others.map(function (x) { return x.use; }).filter(Boolean), 3, d.use, rng), rng, info));
    });
    if (want('traits')) G.forEach(function (g) {
      var pool = sameSysFirst(g, G).map(function (x) { return x.name; });
      [['how', 'How it works'], ['effects', 'Big risks and side effects'], ['monitor', 'What the nurse monitors'], ['use', 'Used for']].forEach(function (f) {
        if (!g[f[0]]) return;
        var drugNames = bank.drugs.filter(function (d) { return d.g === g.id; }).reduce(function (a, d) { return a.concat(d.names); }, []);
        var text = scrub(g[f[0]].replace(new RegExp(g.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), 'this group'), drugNames);
        out.push(q('traits:' + g.id + ':' + f[0], 'traits', '**' + f[1] + ':** ' + text + ' Which group is this?', g.name, pick(pool, 3, g.name, rng), rng, { kind: 'group', group: g, drugs: bank.drugs.filter(function (d) { return d.g === g.id; }) }));
      });
    });
    return out.filter(Boolean);
  }

  // A round: missed questions first (when asked), otherwise a shuffled sample.
  function round(all, n, missed, rng) {
    rng = rng || Math.random;
    var list = shuffle(all, rng);
    if (missed) list = list.filter(function (x) { return missed[x.key]; });
    return list.slice(0, n || list.length);
  }

  // Drugs with no helpful ending: the ones to learn as names.
  function noEnding(bank, exams) {
    return bank.drugs.filter(function (d) { return exams.indexOf(d.exam) >= 0 && !endingOf(bank, d.n); });
  }

  return { EXAMS: EXAMS, MODES: MODES, build: build, endingOf: endingOf, questions: questions, round: round, noEnding: noEnding, shuffle: shuffle };
});
