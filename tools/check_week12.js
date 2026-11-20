#!/usr/bin/env node
// Checks the week-12 lecture content (bipolar, depression, anxiety/OCD, suicide) on Exam 5: notes are complete,
// questions are well-formed and free of length giveaways, and Exam 5 Map loads and merges them.
// Run: node tools/check_week12.js
const assert = require('node:assert/strict'), fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..'), read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const W = require('../data/mh5/week12.js');
assert.deepEqual(W.topics.map(t => t.id), ['lec-bipolar', 'lec-depression', 'lec-anxiety', 'lec-suicide']);
W.topics.forEach(t => { assert.equal(t.week, 12); assert(t.lead && t.terms.length >= 4 && t.cards.length >= 4 && t.recall.length >= 5, t.id + ' complete'); });
const ids = W.qs.map(q => q.id); assert.equal(new Set(ids).size, ids.length, 'unique ids');
const links = new Set(W.topics.map(t => 't-' + t.id));
W.qs.forEach(q => {
  assert(q.id.startsWith('q5-wk12-') && q.wk === 12 && links.has(q.link), q.id);
  assert.equal(q.optionWhy.length, q.opts.length, q.id + ' rationale per option');
  assert.equal(new Set(q.opts).size, q.opts.length, q.id + ' distinct options');
  const keys = Array.isArray(q.a) ? q.a : [q.a]; assert(keys.every(k => k >= 0 && k < q.opts.length), q.id + ' key');
});
const single = W.qs.filter(q => !Array.isArray(q.a)), longest = single.filter(q => { const l = q.opts.map(o => o.length); return l[q.a] > Math.max(...l.filter((_, i) => i !== q.a)); }).length;
assert(longest / single.length <= 0.35, `correct answer longest in ${Math.round(longest / single.length * 100)}% (max 35%)`);
assert(new Set(Object.values(W.qs.reduce((o, q) => (o[q.a] = 1, o), {}))) && new Set(single.map(q => q.a)).size === 4, 'answer positions vary');
const page = read('Exam 5 Map.html');
['data/mh/cond-mood.js', 'data/mh/cond-safety.js', 'data/mh/cond-anxiety.js', 'data/mh/questions.js', 'data/mh5/week12.js'].forEach(f => assert(page.includes(f + '?v='), 'Exam 5 Map loads ' + f));
assert(page.indexOf('data/mh/questions.js') < page.indexOf('data/mh5/questions.js') && page.indexOf('data/mh5/week12.js') < page.indexOf('mh.js?v='), 'load order: stash, Exam 5 data, merge, engine');
assert(/\[12, 'Week 12: bipolar, depression, anxiety\/OCD, suicide'\]/.test(page), 'Exam 5 lists week 12');
console.log(`✓ Week 12 on Exam 5: ${W.topics.length} lecture topics, ${W.qs.length} questions (correct longest ${Math.round(longest / single.length * 100)}%)`);
