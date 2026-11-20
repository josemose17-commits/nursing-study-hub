#!/usr/bin/env node
// Checks the Final's Learn → Test → Review page: its concept layer builds from the Final Learn lessons (plus the
// optional Exam 4 and Exam 5 mental-health groups), every concept has questions, questions are well-formed, and the
// page, nav tabs and home panel point to it. Run: node tools/check_final_study.js
const assert = require('node:assert/strict'), fs = require('fs'), path = require('path'), vm = require('vm'), cp = require('child_process');
const ROOT = path.join(__dirname, '..'), read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
cp.execFileSync('node', [path.join(__dirname, 'build_study_engines.js'), '--check'], { stdio: 'pipe' });
const ctx = vm.createContext({ window: {} }); ctx.window.window = ctx.window;
const load = f => vm.runInContext(read(f), ctx, { filename: f });
// The page's own load order: mental-health bank (week 12 kept), Exam 5 data, merge, then the concept files.
load('data/mh/questions.js');
ctx.window.MH_Q = ctx.window.MH_Q.filter(q => q.wk === 12 && ['bipolar', 'mdd', 'suicide', 'nssi', 'anxiety', 'ocd'].includes(q.link.slice(2)));
const keep = ctx.window.MH_Q; load('data/mh5/questions.js'); load('data/mh5/week12.js');
ctx.window.MH_Q = keep.concat(ctx.window.MH_WK12.qs, ctx.window.MH_Q);
['data/e5-diagnostic.js', 'data/e4-diagnostic.js', 'data/learn/final.js', 'data/ef-diagnostic.js'].forEach(load);
const D = ctx.window.EFDiagnosticData;
const lessons = ctx.window.LEARN_DATA.lessons.length;
assert.equal(D.concepts.filter(c => c.id.startsWith('f:')).length, lessons, 'one concept per Final lesson');
assert(D.concepts.some(c => c.chapter === 'mh4') && D.concepts.some(c => c.chapter === 'mh5'), 'mental-health groups present');
const tested = {}; D.questions.forEach(q => tested[q.concept] = 1); Object.values(D.legacy).forEach(c => tested[c] = 1);
assert(D.concepts.every(c => tested[c.id]), 'every concept has questions');
assert(D.concepts.every(c => D.groupIds.includes(c.chapter)), 'every concept is in a topic group');
D.groupIds.forEach(g => assert(D.concepts.some(c => c.chapter === g), 'group ' + g + ' has concepts'));
const ids = D.questions.map(q => q.id); assert.equal(new Set(ids).size, ids.length, 'unique question ids');
D.questions.forEach(q => {
  const keys = Array.isArray(q.a) ? q.a : [q.a];
  assert(q.stem && q.opts.length >= 2 && keys.every(k => Number.isInteger(k) && k >= 0 && k < q.opts.length), q.id + ' key');
  assert(!q.optionWhy || q.optionWhy.length === q.opts.length, q.id + ' rationale per option');
});
D.concepts.filter(c => c.points).forEach(c => assert(c.points.length >= 2 && c.points.every(p => p[0] && p[1]), c.id + ' points'));
const page = read('Final Study.html');
['data/learn/final.js', 'data/e4-diagnostic.js', 'data/e5-diagnostic.js', 'data/ef-diagnostic.js', 'ef-diagnostic-core.js', 'ef-review.js', 'ef-diagnostic.js'].forEach(f => assert(page.includes(f + '?v='), 'Final Study loads ' + f));
assert(/diagnosticGlobal: 'EFDiagnostic'/.test(page) && /prefix: 'ef-'/.test(page), 'Final controller and storage prefix');
assert(/'F': 'Final Study.html'/.test(read('nav.js')), 'nav tabs for the Final');
assert(/<a href="Final Study.html#review"><span>3<\/span>/.test(read('index.html')), 'home Final panel points to the study page');
console.log(`✓ Final study: ${D.concepts.length} concepts in ${D.groupIds.length} groups, ${D.questions.length + Object.keys(D.legacy).length} questions`);
