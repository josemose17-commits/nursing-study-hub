#!/usr/bin/env node
// Checks the daily skills run on Lab Check-offs: every lab skill's steps are chunked in order, budgets share the
// target by step count, ordering accepts only the next step, mistakes/hints/idle time behave, a whole run finishes,
// and the page loads it. Run: node tools/check_lab_daily.js
const assert = require('node:assert/strict'), fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..'), read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const ctx = vm.createContext({ window: {} }); vm.runInContext(read('data/labskills.js'), ctx);
const C = require('../lab-daily-core.js'), skills = JSON.parse(JSON.stringify(ctx.window.LAB_SKILLS)), B = C.build(skills);
const total = skills.reduce((a, s) => a + s.parts.reduce((b, p) => b + p.steps.length, 0), 0);
assert.equal(B.length, skills.length);
assert.equal(B.reduce((a, s) => a + s.steps, 0), total, 'every step is in a chunk');
B.forEach((sk, i) => {
  const flat = sk.chunks.flatMap(c => c.steps.map(s => s.text)), want = skills[i].parts.flatMap(p => p.steps.map(s => s[0]));
  assert.deepEqual(flat, want, sk.id + ' keeps the manual order');
  sk.chunks.forEach(c => assert(c.steps.length >= 1 && c.steps.length <= C.CHUNK, sk.id + ' chunk size'));
});
const S = C.fresh(B);
for (const t of C.TARGETS) { S.target = t; const b = C.budgets(S, B); assert(Math.abs(Object.values(b).reduce((a, x) => a + x, 0) - t * 60000) < 1, 'budgets add up to ' + t + ' min'); }
S.target = 60;
// order and skipping
assert(C.move(S, B[1].id, -1)); assert.equal(S.order[0], B[1].id); assert(!C.move(S, S.order[0], -1));
S.skip[B[2].id] = true; assert.equal(C.active(S).length, B.length - 1);
// a run: one wrong tap, a second gives a hint; idle gaps are capped
let now = Date.parse('2026-11-25T10:00:00');
assert(C.start(S, B, now));
let c = C.current(S, B); const wrong = c.chunk.steps.length > 1 ? 1 : null;
if (wrong !== null) { assert.equal(C.pick(S, B, wrong, now += 3000).ok, false); assert.equal(C.pick(S, B, wrong, now += 3000).hint, true); }
assert.equal(C.pick(S, B, 0, now += 10 * 60000).ok, true, 'next step accepted');
assert(S.run.ms <= 6000 + 120000, 'a long gap counts as at most two minutes');
// finish everything
let guard = 0;
while (!S.run.finished && guard++ < 5000) {
  c = C.current(S, B);
  while (S.run.placed.length < c.chunk.steps.length) assert.equal(C.pick(S, B, S.run.placed.length, now += 4000).ok, true);
  C.advance(S, B, now += 1000);
}
assert(S.run.finished, 'run finishes');
assert.equal(S.run.done.length, B.length - 1, 'every included skill is done');
assert(!S.run.done.includes(B[2].id), 'skipped skill left out');
assert.equal(S.history.length, 1); assert.equal(S.history[0].skills, S.history[0].planned);
assert.equal(C.streak(S, now), 1);
if (wrong !== null) assert(C.toughSteps(S, B, 3).length >= 1, 'mixed-up steps are remembered');
// restore keeps order, target and run; drops unknown skills
const R = C.restore(JSON.parse(JSON.stringify(Object.assign({}, S, { order: ['nope'].concat(S.order) }))), B);
assert.equal(R.order.length, B.length); assert.equal(R.target, 60); assert(R.run && R.run.finished);
C.weakestFirst(R); assert.equal(R.order.length, B.length);
const page = read('Lab Check-offs.html');
assert(/href="#daily" data-view="daily"/.test(page) && /id="lab-daily"/.test(page), 'Daily run tab and view');
assert(page.indexOf('lab-daily.js?v=') < page.indexOf('lab-practice.js?v='), 'daily view loads before the page router');
assert(/clin-/.test(read('nav.js').match(/SYNC = (\/.*\/)/)[1]), 'clin-lab-daily-v1 travels with the progress file');
console.log(`✓ Lab daily run: ${B.length} skills, ${total} steps in ${B.reduce((a, s) => a + s.chunks.length, 0)} ordering sets; budgets fit ${C.TARGETS.join('/')} min`);
