const assert = require('node:assert/strict'), fs = require('node:fs'), path = require('node:path'), vm = require('node:vm');
const H = require('../hypo-lab.js'), C = require('../learn-core.js'), root = path.join(__dirname, '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
assert.equal(H.steps.length, 6); assert.equal(new Set(H.steps.map(s => s.id)).size, 6);
let s = H.blank();
for (const [i, step] of H.steps.entries()) {
  assert.equal(step.options.filter(o => o[2]).length, 1, step.id);
  assert(step.options.every(o => o[1] && o[3]));
  const wrong = step.options.find(o => !o[2]), right = step.options.find(o => o[2]);
  s = H.choose(s, wrong[0]); assert.equal(s.step, i); assert.equal(H.next(s).step, i, 'Wrong answer advanced the case');
  const paused = H.restore(JSON.parse(JSON.stringify(s))); assert.equal(paused.feedback, wrong[0]);
  assert.equal(H.choose(paused, right[0]).feedback, wrong[0], 'Second click bypassed feedback');
  s = H.choose(H.retry(paused), right[0]); const n = s.attempts.length;
  assert.equal(H.choose(s, right[0]).attempts.length, n, 'Double click counted twice');
  s = H.next(s); assert.equal(s.step, i + 1);
}
assert(s.complete); assert.equal(H.next(s).step, 6); assert.equal(H.choose(s, 'glucose').attempts.length, 12);
for (const bad of [null, {}, { step: -1 }, { step: 999 }, { step: 1.2 }]) assert.deepEqual(H.restore(bad), H.blank());
assert.equal(H.restore({ step: 0, feedback: '<script>' }).feedback, null);
assert(H.overviewHtml().includes('No oral food, drink or glucose gel'));
assert(H.overviewHtml().includes('Glucose &lt;70 mg/dL'));
assert(H.steps.find(s => s.id === 'oral-recheck').glucose < 70);
assert(H.steps.find(s => s.id === 'iv-rescue').options.find(o => o[2])[1].includes('IV dextrose'));
assert(H.steps.find(s => s.id === 'glucagon-route').options.find(o => o[2])[1].includes('glucagon'));
// Rehearsal is saved with a draft but never scores the lesson or grants review credit.
const ctx = vm.createContext({ window: {} }); vm.runInContext(read('data/e3/lessons.js'), ctx);
const lessons = JSON.parse(JSON.stringify(ctx.window.EXAM3_LESSONS.lessons)), l = lessons.find(l => l.id === 'hypoglycemia');
assert.equal(l.studio, 'hypoglycemia'); assert.equal(lessons.filter(l => l.studio).length, 1);
const state = C.blank(); C.start(state, l, 1000); state.session.hypoPractice = s;
assert.equal(C.finish(state, l, 1001), false); assert.deepEqual(state.lessons, {});
let restored = C.restore(JSON.stringify(state), lessons); assert(restored.session.hypoPractice.complete);
C.start(restored, lessons.find(l => l.id === 'dka'), 1002); C.start(restored, l, 1003);
assert(restored.session.hypoPractice.complete, 'Switching lessons lost the rehearsal');
// Existing independent checkpoints still use their original scoring and question IDs.
assert.deepEqual(l.questions.map(q => q.id), ['hypo-a', '56|trad|10']);
restored.session.stage = 'apply'; restored.session.picks = l.questions[0].a; restored.session.checks = l.checks.map(() => true);
assert(C.finish(restored, l, 1004)); assert.equal(restored.lessons[l.id].attempts, 1); assert(!restored.lessons[l.id].delayedPasses);
assert(read('map.js').includes("t.id === '" + H.NOTE + "'"));
for (const page of ['Exam 2 Mastery Loop.dc.html', 'Exam 3 Mastery Loop.dc.html', 'Final Mastery Loop.dc.html']) {
  const html = read(page); assert(html.includes('data-hypo-overview')); assert(html.includes('fb.hasHypoVisual')); assert(html.includes("CHS.includes('56')"));
}
assert(read('learn.js').includes("t.stage = 'understand'; t.eligible = false"));
assert(!/speechSynthesis|\.play\(|autoplay/.test(read('hypo-lab.js')));
console.log('Six coached decisions: safe routes, wrong-answer recovery, double-submit protection, draft/reload persistence, corruption recovery, independent scoring, one-lesson scope, notes/test integration and optional-audio checks passed.');
