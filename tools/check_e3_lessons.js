const assert = require('node:assert/strict'), fs = require('node:fs'), vm = require('node:vm'), path = require('node:path');
const root = path.join(__dirname, '..'), read = p => fs.readFileSync(path.join(root, p), 'utf8');
const ctx = vm.createContext({ window: {} });
for (const file of ['lessons', 'info-topics', 'cases']) vm.runInContext(read('data/e3/' + file + '.js'), ctx);
const { lessons, weights } = JSON.parse(JSON.stringify(ctx.window.EXAM3_LESSONS));
const cfg = vm.runInNewContext(read('tools/e3-mastery-cfg.js') + '\n({GUIDE,BP})');
assert.deepEqual(weights, JSON.parse(JSON.stringify(cfg.BP)));
assert.equal(new Set(lessons.map(l => l.id)).size, lessons.length);
const expected = Object.entries(cfg.GUIDE).flatMap(([ch, groups]) => groups.map((_, i) => ch + ':' + i)).sort();
assert.deepEqual([...new Set(lessons.map(l => l.guide))].sort(), expected);
for (const l of lessons) {
  assert(/^[a-z0-9-]+$/.test(l.id));
  assert(l.source && l.why.length >= 2 && l.checks.length >= 2);
  assert.equal(l.ch, l.guide.split(':')[0]);
  for (const id of l.notes) assert(ctx.window.INFO_TOPICS.some(t => t.id === id && t.ch === l.ch), 'Broken note: ' + id);
  if (l.caseId) assert(ctx.window.CASES.some(c => c.id === l.caseId && c.ch === l.ch), 'Broken case: ' + l.caseId);
  assert.equal(l.questions.length, 2); assert.notEqual(l.questions[0].q, l.questions[1].q);
  for (const q of l.questions) {
    assert(q.q && q.id && q.o.length >= 2); assert.equal(q.r.length, q.o.length);
    assert.equal(new Set(q.a).size, q.a.length);
    assert(q.a.length && q.a.every(i => Number.isInteger(i) && i >= 0 && i < q.o.length));
    assert(q.r.every(r => typeof r === 'string' && r.trim().length));
  }
  function visit(node, ancestors = []) {
    assert(!ancestors.includes(node.id), 'Prerequisite cycle: ' + node.id);
    for (const id of node.requires) { const pre = lessons.find(x => x.id === id); assert(pre, 'Missing prerequisite: ' + id); visit(pre, ancestors.concat(node.id)); }
  }
  visit(l);
}
const C = require('../learn-core.js'), dka = lessons.find(l => l.id === 'dka');
let now = 1000000000;
function attempt(s, l, { correct = true, recalled = true, at = now } = {}) {
  s.session = null; C.start(s, l, at, () => .3); s.session.stage = 'apply'; s.session.checks = l.checks.map(() => recalled);
  const q = l.questions[s.session.variant]; s.session.picks = correct ? [...q.a] : [q.o.findIndex((_, i) => !q.a.includes(i))];
  assert(C.finish(s, l, at)); assert(!C.finish(s, l, at), 'Duplicate submission counted');
}
const s = C.blank(); assert.equal(C.recommend(s, lessons, weights, now).lesson.id, 'glands');
attempt(s, dka); const p = s.lessons.dka, due = p.dueAt;
assert.equal(due, now + C.DAY); assert.equal(p.attempts, 1); assert(!p.delayedPasses);
attempt(s, dka, { at: now + 1 }); assert.equal(p.dueAt, due); assert(!p.delayedPasses, 'Early practice counted as retention');
for (const [n, days] of [[1,1],[2,3],[3,7],[4,7]]) {
  now = p.dueAt; attempt(s, dka); assert.equal(p.delayedPasses, n); assert.equal(p.dueAt, now + days * C.DAY);
}
attempt(s, dka, { correct: false, at: now + 10 });
assert.equal(p.streak, 0); assert(p.needsReview); assert.equal(p.dueAt, now + 10 + C.RETRY);
attempt(s, dka, { at: now + 20 }); assert(p.needsReview, 'Early correct retry erased pending review');
const dueAgain = p.dueAt; attempt(s, dka, { at: dueAgain, recalled: false });
assert(p.correct && !p.recalled && p.needsReview, 'A correct decision must not prove recall');
assert.equal(C.recommend(s, lessons, weights, p.dueAt).lesson.id, 'dka');
assert.equal(C.recommend(C.blank(), lessons, weights, now, ['46-stomatitis-the-tissue-integrity-exemplar']).lesson.id, 'mouth');
const resume = C.blank(); C.start(resume, dka, now); resume.session.stage = 'recall'; resume.session.draft = 'K shifts into cells';
const order = [...resume.session.order]; C.start(resume, lessons.find(l => l.id === 'mouth'), now);
const restored = C.restore(JSON.stringify(resume), lessons); C.start(restored, dka, now);
assert.equal(restored.session.draft, 'K shifts into cells'); assert.deepEqual(restored.session.order, order);
assert.equal(C.restore('broken', lessons).session, null);
restored.session.order = [100]; assert.equal(C.restore(JSON.stringify(restored), lessons).session, null);
for (const l of lessons) for (const q of l.questions) {
  assert(C.grade(q, q.a)); assert(!C.grade(q, []));
  if (q.a.length > 1) assert(!C.grade(q, q.a.slice(1)), 'Incomplete multi-select passed');
}
assert(/202610271600/.test(read('nav.js')) && /202610271600/.test(read('version.json')));
console.log(`${lessons.length} lessons; ${expected.length} assigned groups; ${lessons.length * 2} question/rationale sets; source/case links and prerequisite graph valid.`);
console.log('Scheduling, early/due reviews, duplicate submissions, recall/application separation, multi-select, recommendations, draft switching and corrupt-state recovery passed.');
