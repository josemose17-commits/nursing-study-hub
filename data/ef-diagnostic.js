// Final concept layer for the shared Learn → Test → Review engine (ef-diagnostic.js, built from Exam 4's).
// Built when the page loads, from data the site already has:
//  - the Final Learn lessons (data/learn/final.js): one concept per lesson, its key points and its graded questions;
//  - the Exam 4 concepts and questions (data/e4-diagnostic.js) and the Exam 5 / week-12 concepts (data/e5-diagnostic.js,
//    whose questions come from the merged MH_Q), as two optional mental-health groups in case they are on the final.
// Concept ids are prefixed (f:, e4:, e5:) so the three sets never collide.
(function (root, factory) {
  var data = factory(root);
  if (typeof module === 'object' && module.exports) module.exports = data; else root.EFDiagnosticData = data;
})(typeof window !== 'undefined' ? window : globalThis, function (root) {
  'use strict';
  var CH = [
    ['13', 'Fluids and electrolytes'], ['14', 'Acid–base'], ['15', 'IV therapy'], ['16', 'Inflammation and immunity'], ['17', 'Allergy, lupus, HIV, transplant'],
    ['22', 'Respiratory assessment'], ['23', 'Upper airway'], ['24', 'Asthma, COPD, chest tubes'], ['25', 'Pneumonia and TB'],
    ['45', 'GI assessment'], ['46', 'Mouth, esophagus, GERD'], ['47', 'Stomach: ulcers, bleeding, cancer'], ['48', 'Obstruction, colorectal cancer, IBS'],
    ['49', 'IBD and GI inflammation'], ['50', 'Liver'], ['51', 'Gallbladder and pancreas'], ['52', 'Nutrition'], ['53', 'Endocrine assessment'],
    ['55', 'Thyroid and parathyroid'], ['56', 'Diabetes']
  ];
  var GROUPS = CH.map(function (c) { return ['c' + c[0], 'Ch ' + c[0] + ' · ' + c[1]]; })
    .concat([['mh4', 'Mental health · Exam 4 chapters (if on the final)'], ['mh5', 'Mental health · week 12 and Exam 5 (if on the final)']]);
  var groupIds = GROUPS.map(function (g) { return g[0]; });
  function groupName(id) { var g = GROUPS.find(function (x) { return x[0] === id; }); return g ? g[1] : String(id); }
  function clone(x) { return JSON.parse(JSON.stringify(x)); }
  var concepts = [], questions = [], legacy = {}, sections = {};

  // ---------- Final Learn lessons → concepts and questions ----------
  function points(why) {
    return (why || []).map(function (w) { var i = w.indexOf(': '); return i > 0 && i < 90 ? [w.slice(0, i), w.slice(i + 2)] : ['Key point', w]; });
  }
  function plain(s) { return String(s || '').replace(/^(Correct|Incorrect)\.\s*/, ''); }
  var L = root && root.LEARN_DATA, seen = {};
  if (L && Array.isArray(L.lessons)) L.lessons.forEach(function (l) {
    if (!CH.some(function (c) { return c[0] === l.ch; })) return;
    var p = points(l.why), id = 'f:' + l.id;
    var act = p.find(function (x) { return /safety|priorit|nurs|care|rescue|teach|do first|action/i.test(x[0]); }) || p[p.length - 1] || ['', ''];
    concepts.push({ id: id, chapter: 'c' + l.ch, title: l.title, link: 'Final Learn.html#' + encodeURIComponent(l.id), points: p,
      mechanism: p[0] ? p[0][1] : '', cues: p[1] ? p[1][1] : '', action: act[1], evaluate: '',
      ask: (l.checks && l.checks[0]) || 'Explain the key idea of ' + l.title + '.', key: (l.recallAnswers && l.recallAnswers[0]) || '',
      sources: [['Final Learn lesson', 'Final Learn.html#' + encodeURIComponent(l.id)]].concat(l.notes && l.notes[0] ? [['Final map notes', 'Final Map.html#' + l.notes[0]]] : []),
      meds: [], sections: [] });
    (l.questions || []).forEach(function (q) {
      var src = q.sourceId || q.id; // Exam 3 lessons' questions have no sourceId; their own id is unique
      if (seen[src]) return; seen[src] = 1;
      var multi = q.a.length > 1 || q.selectCount > 1 || /select all/i.test(q.q);
      questions.push({ id: 'fq-' + src, chapter: 'c' + l.ch, concept: id, wk: 0, link: 'Final Learn.html#' + encodeURIComponent(l.id),
        stem: q.q, opts: q.o.slice(), a: multi ? q.a.slice() : q.a[0], why: q.phys || plain(q.r[q.a[0]]), optionWhy: q.r.map(plain) });
    });
  });

  // ---------- Exam 4 concepts and their own questions ----------
  var E4 = root && root.E4DiagnosticData;
  if (E4) {
    E4.concepts.filter(function (c) { return c.chapter !== 'context'; }).forEach(function (c) {
      var x = clone(c); x.id = 'e4:' + c.id; x.chapter = 'mh4'; x.title = c.title + ' (Ch ' + c.chapter + ')'; x.sections = []; concepts.push(x);
    });
    E4.questions.filter(function (q) { return q.chapter !== 'context'; }).forEach(function (q) {
      var x = clone(q); x.concept = 'e4:' + q.concept; x.chapter = 'mh4'; questions.push(x);
    });
  }
  // ---------- Exam 5 / week-12 concepts; their questions are the page's MH_Q, linked by id ----------
  var E5 = root && root.E5DiagnosticData;
  if (E5) {
    E5.concepts.forEach(function (c) { var x = clone(c); x.id = 'e5:' + c.id; x.chapter = 'mh5'; concepts.push(x); if (c.sections && c.sections.length) sections[x.id] = c.sections; });
    (root.MH_Q || []).forEach(function (q) { var id = E5.conceptFor(q); if (id) legacy[q.id] = 'e5:' + id; });
  }

  var tested = {};
  questions.forEach(function (q) { tested[q.concept] = 1; });
  Object.keys(legacy).forEach(function (k) { tested[legacy[k]] = 1; });
  concepts = concepts.filter(function (c) { return tested[c.id]; });

  return { concepts: concepts, questions: questions, legacy: legacy, refs: {}, sections: sections,
    connection: function (q) { return q.concept; }, aliases: {}, referenceText: function (s) { return String(s); }, referenceCard: function (card) { return card; },
    groupIds: groupIds, groupName: groupName, groups: GROUPS };
});
