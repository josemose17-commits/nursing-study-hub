#!/usr/bin/env node
// Guards the Exam 4 diagnostic questions against test-taking giveaways, so a score reflects knowledge rather than
// option-guessing: the correct answer should not usually be the longest, wrong answers should not be flagged by
// absolute words, select-all items must vary in how many answers are correct, and every option needs its own rationale.
// Run: node tools/check_e4_question_quality.js
const assert = require('node:assert/strict'), path = require('node:path');
const D = require(path.join(__dirname, '..', 'data', 'e4-diagnostic.js'));
const Q = D.questions, ok = (q, i) => Array.isArray(q.a) ? q.a.includes(i) : q.a === i;
const ABSOLUTE = /\b(always|never|all|every|only|cannot|guarantee[sd]?|any)\b/i;

Q.forEach(q => {
  assert.equal(q.optionWhy.length, q.opts.length, q.id + ': one rationale per option');
  assert(q.optionWhy.every(w => w && w.trim()), q.id + ': empty rationale');
  assert.equal(new Set(q.opts).size, q.opts.length, q.id + ': duplicate option');
  assert(q.opts.length >= 4, q.id + ': at least four options');
});

// Length: is the correct option the single longest? Chance is about 25% with four options.
const single = Q.filter(q => !Array.isArray(q.a));
const rank = [0, 0, 0, 0, 0];
single.forEach(q => { const l = q.opts.map(o => o.length); rank[l.filter((x, i) => i !== q.a && x > l[q.a]).length]++; });
const longest = rank[0] / single.length;
assert(longest <= 0.35, `correct answer is the longest option in ${(longest * 100).toFixed(0)}% of single-answer questions (max 35%)`);
assert(rank[1] / single.length <= 0.5, 'correct answer is second-longest too often; mix trimmed and longer correct answers');
assert(rank[0] / single.length >= 0.1, 'correct answer is almost never the longest, which is its own giveaway');

// Absolute words should not mark the wrong answers.
let wrong = 0, flagged = 0;
Q.forEach(q => q.opts.forEach((o, i) => { if (!ok(q, i)) { wrong++; if (ABSOLUTE.test(o)) flagged++; } }));
assert(flagged / wrong <= 0.15, `${(flagged / wrong * 100).toFixed(0)}% of wrong options use absolute words (max 15%)`);

// Select-all: the number of correct answers must vary.
const sata = Q.filter(q => Array.isArray(q.a)), counts = new Set(sata.map(q => q.a.length));
assert(sata.every(q => q.a.length >= 1), 'select-all needs at least one correct answer');
assert(counts.size >= 3, 'select-all questions should have varied numbers of correct answers');

console.log(`✓ Exam 4 question quality: ${Q.length} questions; correct answer longest in ${(longest * 100).toFixed(0)}%, ` +
  `absolute words in ${(flagged / wrong * 100).toFixed(0)}% of wrong options, select-all correct counts ${[...counts].sort().join('/')}`);
