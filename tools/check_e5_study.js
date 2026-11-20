#!/usr/bin/env node
// Checks Exam 5's Learn → Test → Review page: the engine copies match the Exam 4 engine, every Exam 5 and week-12
// question is linked to a concept, concepts are complete, and the page, nav tabs and home panel point to it.
// Run: node tools/check_e5_study.js
const assert = require('node:assert/strict'), fs = require('fs'), path = require('path'), vm = require('vm'), cp = require('child_process');
const ROOT = path.join(__dirname, '..'), read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
cp.execFileSync('node', [path.join(__dirname, 'build_study_engines.js'), '--check'], { stdio: 'pipe' });
const c = vm.createContext({ window: {} });
vm.runInContext(read('data/mh/questions.js'), c);
const w12 = c.window.MH_Q.filter(q => q.wk === 12 && q.link !== 'c-ptsd');
const d = vm.createContext({ window: {} }); vm.runInContext(read('data/mh5/questions.js'), d);
const all = w12.concat(d.window.MH_Q, require('../data/mh5/week12.js').qs);
const D = require('../data/e5-diagnostic.js'); D.index(all);
const unmapped = [...all.filter(q => !D.legacy[q.id]).map(q => q.id)];
assert.deepEqual(unmapped, [], 'every Exam 5 / week-12 question maps to a concept');
const ids = new Set(D.concepts.map(x => x.id)); assert.equal(ids.size, D.concepts.length, 'unique concept ids');
D.concepts.forEach(x => {
  assert(x.title && x.title.length > 2, x.id + ' title'); ['mechanism', 'cues', 'action', 'evaluate', 'ask', 'key'].forEach(f => assert(x[f] && x[f].length > 10, x.id + ' ' + f));
  assert(D.groupIds.includes(x.chapter), x.id + ' group');
  assert(Object.values(D.legacy).filter(v => v === x.id).length >= 2, x.id + ' has at least two questions');
});
D.groupIds.forEach(g => assert(D.concepts.some(x => x.chapter === g), 'group ' + g + ' has concepts'));
const page = read('Exam 5 Study.html');
['data/e5-diagnostic.js', 'e5-diagnostic-core.js', 'e5-review.js', 'e5-diagnostic.js', 'mh.js', 'data/mh5/week12.js'].forEach(f => assert(page.includes(f + '?v='), 'Exam 5 Study loads ' + f));
assert(/diagnosticGlobal: 'E5Diagnostic'/.test(page), 'page selects the Exam 5 controller');
assert(page.indexOf('data/mh5/week12.js') < page.indexOf('data/e5-diagnostic.js'), 'concepts load after the questions are merged');
assert(/'5': 'Exam 5 Study.html'/.test(read('nav.js')), 'nav tabs for Exam 5');
const home = read('index.html');
['1', '2', '3', '4', '5', 'F'].forEach(ex => {
  const a = home.indexOf('<section class="exam" data-exam="' + ex + '"'), sec = home.slice(a, home.indexOf('</section>', a));
  assert(sec.indexOf('class="e4steps"') > 0 && sec.indexOf('Tools for every exam') > sec.indexOf('class="e4steps"'), 'exam ' + ex + ': steps first, shared tools at the bottom');
  assert.equal((sec.match(/<li><a href="[^"]+"><span>\d<\/span>/g) || []).length, 3, 'exam ' + ex + ': Learn, Test, Review');
});
console.log(`✓ Exam 5 study: ${D.concepts.length} concepts in ${D.groupIds.length} groups, ${all.length} linked questions; home sections share one layout`);
