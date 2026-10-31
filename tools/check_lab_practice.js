// Behavior checks for the practical trainer: persistent misses and actual grading.
const assert = require('node:assert/strict');
const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm');
const cp = require('node:child_process');
const root = path.join(__dirname, '..');
const D = require('../data/nrs114-skills'), C = require('../lab-practice-core');
const clone = x => JSON.parse(JSON.stringify(x));
let seed = 721; const core = C.create(D, () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646);
const all = D.stations.map(s => s.id);
assert.equal(all.length, 7); assert.equal(D.groups.length, 5);
const qs = D.stations.flatMap(s => s.questions);
assert.equal(qs.length, 42); assert.equal(new Set(qs.map(q => q.id)).size, 42);
for (const st of D.stations) {
  assert(st.supplies.length && st.stops.length && st.chart && st.pages && st.syllabusPage);
  assert(st.questions.some(q => q.kind === 'multi') && st.questions.some(q => q.kind === 'order'));
  for (const id of st.refs) assert(D.refs[id] && D.refs[id].url.startsWith('https://'));
  for (const step of st.steps) assert(step.action && step.why && step.title && step.id.startsWith(st.id + ':'));
  for (const q of st.questions) {
    if (q.options) { assert(q.options.every(o => o.text && o.why)); assert(q.options.some(o => o.correct)); assert(q.options.some(o => !o.correct)); }
  }
}
let s = core.fresh(); assert(core.start(s, all, 'mixed', 14));
assert.equal(s.session.items.length, 14);
assert.equal(new Set(s.session.items.map(i => core.questions[i.qid].station)).size, 7);
assert(core.start(s, ['gtube', 'blood', 'bogus', 'gtube'], 'mixed', 'all'));
assert.equal(s.session.items.length, 12);
assert(s.session.items.every(i => ['gtube', 'blood'].includes(core.questions[i.qid].station)));
const beforeEmpty = clone(s.session); assert(!core.start(s, [], 'mixed', 'all')); assert.deepEqual(s.session, beforeEmpty);
// All items grade through the real public answer functions, for correct and wrong responses.
function singleSession(q) {
  const state = core.fresh();
  state.session = { index: 0, complete: false, mode: 'mixed', stations: [q.station], items: [{ qid: q.id, order: q.kind === 'order' ? q.items.map((_, i) => String(i)) : q.options.map(o => o.id), answer: [], checked: false, correct: false }] };
  return state;
}
function answer(state, q, right) {
  if (q.kind === 'order') {
    // The public move API must handle a wrong adjacent swap and the correction.
    if (!right) core.move(state, 0, 1);
  } else if (q.kind === 'multi') {
    const opts = q.options.filter(o => o.correct);
    for (const o of right ? opts : opts.slice(0, 1)) core.pick(state, o.id);
  } else core.pick(state, q.options.find(o => o.correct === right).id);
}
for (const q of qs) {
  for (const right of [false, true]) {
    const t = singleSession(q); answer(t, q, right); assert(core.submit(t, '2026-10-31T18:00:00Z'));
    assert.equal(core.current(t).correct, right, q.id);
    const bank = clone(t.misses); assert(!core.submit(t)); assert.deepEqual(t.misses, bank, 'Duplicate check altered misses');
    assert(!core.pick(t, '0')); assert(!core.move(t, 0, 1));
    assert(core.next(t)); assert(t.session.complete); assert.equal(t.history.length, 1); assert(!core.next(t)); assert.equal(t.history.length, 1);
    assert.deepEqual(core.restore(clone(t)).session, t.session, 'Completed round did not restore');
  }
}
const one = qs.find(q => q.kind === 'single'); s = singleSession(one);
assert(!core.submit(s)); assert(!core.next(s)); assert(!core.pick(s, 'missing'));
answer(s, one, false); core.submit(s); core.next(s);
const firstMiss = one.id;
// A new, perfect attempt must not erase misses from an older attempt.
assert(core.start(s, ['gtube'], 'mixed', 'all'));
while (!s.session.complete) {
  const i = core.current(s), q = core.questions[i.qid];
  if (q.kind === 'order') { while (!i.order.every((x, n) => x === String(n))) { const at = i.order.findIndex((x, n) => x !== String(n)); const from = i.order.indexOf(String(at)); core.move(s, from, -1); } }
  else q.options.filter(o => o.correct).forEach(o => core.pick(s, o.id));
  core.submit(s); core.next(s);
}
assert.equal(core.bank(s, all, false).length, 1); assert(s.misses[firstMiss]);
assert.equal(core.bank(s, ['gtube'], false).length, 0);
s = core.restore(clone(s)); assert(core.start(s, [one.station], 'misses', 'all'));
core.pick(s, one.options.find(o => o.correct).id); core.submit(s); core.next(s);
assert.equal(core.bank(s, all, false).length, 0); assert.equal(core.bank(s, all, true).length, 1);
assert(core.start(s, [one.station], 'misses', 'all', true));
core.pick(s, one.options.find(o => !o.correct).id); core.submit(s);
assert.equal(s.misses[firstMiss].count, 2); assert.equal(s.misses[firstMiss].state, 'open');
// Reload retains choices, shuffled order, grade and position without double-counting.
const saved = clone(s); s = core.restore(saved); assert.deepEqual(s.session, saved.session); assert.deepEqual(s.misses, saved.misses); assert(!core.submit(s));
core.start(s, all, 'mixed', 14); const i = core.current(s), q = core.questions[i.qid];
if (q.kind !== 'order') core.pick(s, q.options[0].id);
assert.deepEqual(core.restore(clone(s)).session, s.session);
const broken = clone(s); broken.session.items[0].order[0] = 'missing'; assert.equal(core.restore(broken).session, null);
broken.session = clone(s.session); broken.session.index = 2; assert.equal(core.restore(broken).session, null);
assert.equal(core.restore({ version: 99 }).session, null);
assert.equal(core.restore({ version: 1, selected: ['removed'], misses: { bad: { count: 2 } } }).selected.length, 0);
assert(!core.move(s, -1, 1));
// Rehearsal persists independently and never manufactures a faculty/practice date.
const step = D.stations[0].steps[0]; core.rehearse(s, step.id, 'My recall', 'prompted');
const restored = core.restore(clone(s)); assert.equal(restored.rehearsal[step.id].note, 'My recall'); assert.equal(restored.rehearsal[step.id].rating, 'prompted'); assert(!('d' in restored));
assert(!core.rehearse(s, 'unknown', '', 'independent'));
// Existing date/step storage remains compatible: all 28 IDs, parts and positions retained.
function oldShape(text) { const ctx = { window: {} }; vm.runInNewContext(text, ctx); return JSON.stringify(ctx.window.LAB_SKILLS.map(k => [k.id, k.parts.map(p => p.steps.length)])); }
const original = cp.execFileSync('git', ['show', '02799de:data/labskills.js'], { cwd: root, encoding: 'utf8' });
assert.equal(oldShape(fs.readFileSync(path.join(root, 'data/labskills.js'), 'utf8')), oldShape(original));
assert(/clin-/.test(fs.readFileSync(path.join(root, 'nav.js'), 'utf8')));
console.log('PASS: 7 stations / 42 questions; correct, partial, wrong and sequence grading; resume/corruption; cumulative filtered misses; rehearsal; 28 legacy records retain IDs and step positions.');
