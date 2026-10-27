const assert = require('node:assert/strict'), fs = require('node:fs'), vm = require('node:vm'), path = require('node:path');
const root = path.join(__dirname, '..');
const pages = ['Exam 2 Mastery Loop.dc.html', 'Exam 3 Mastery Loop.dc.html', 'Final Mastery Loop.dc.html'];
const clone = x => JSON.parse(JSON.stringify(x));
for (const file of pages) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const code = html.match(/<script type="text\/x-dc" data-dc-script>([\s\S]*?)<\/script>/)[1];
  const ctx = vm.createContext({ window: { scrollTo() {}, confirm: () => true }, DCLogic: class { setState(x, done) { Object.assign(this.state, x); if (done) done(); } } });
  vm.runInContext(code + '\nthis.C = Component; this.restoreMisses = restoreMisses; this.noteMiss = noteMiss; this.chapters = CHS;', ctx);
  const restore = ctx.restoreMisses, note = ctx.noteMiss;
  const app = () => {
    const c = new ctx.C(); c.state.S = c.blank(); c.guideMode = false;
    c.byId = Object.fromEntries(Array.from({ length: 15 }, (_, i) => ['q' + i, { id: 'q' + i, ch: '56', topics: [], nodes: [], fmt: 'trad', q: 'Question ' + i }]));
    c.present = it => ({ id: it.id, ch: it.ch, kind: 'single', q: it.q, choices: [{ k: 0, c: true, t: 'Correct' }, { k: 1, c: false, t: 'Wrong' }] });
    c.save = S => { c.state.S = clone(S); };
    return c;
  };
  // Recover more than the last report; do not invent historical results when the old app kept none.
  const old = { log: { q0: { last: 0 }, q1: { last: .5 }, q2: { last: 1 }, q3: { last: null } }, report: { no: 5, recs: [{ id: 'q2', e: 0 }] }, practice: { from: 5, fixed: ['q2'], shaky: ['q1'], rest: ['q0'] } };
  restore(old);
  assert.deepEqual(Object.keys(old.misses.items).sort(), ['q0', 'q1', 'q2']);
  assert.equal(old.misses.items.q2.state, 'fixed'); assert.equal(old.misses.items.q1.state, 'shaky');
  const once = JSON.stringify(old); restore(old); assert.equal(JSON.stringify(old), once, 'Migration reapplied');
  const previous = { log: { q0: { last: 0, lastTest: 8 } }, report: { no: 8, recs: [] }, practice: { from: 7, rest: ['q1'], fixed: ['q0', 'q2'] } };
  restore(previous); assert.equal(previous.misses.items.q0.state, 'rest'); assert.equal(previous.misses.items.q2.state, 'fixed'); assert(previous.misses.items.q1);
  const live = { log: {}, test: { redo: ['q0', 'q1', 'q2'], fix: { q0: 2 }, tries: { q0: 1, q1: 1 }, keep: { rest: ['q3'], shaky: [], fixed: ['q4'] } } };
  restore(live); assert.equal(live.misses.items.q0.state, 'fixed'); assert.equal(live.misses.items.q1.state, 'shaky'); assert.equal(live.misses.items.q2.state, 'rest'); assert.equal(live.misses.items.q4.state, 'fixed');
  const c = app(), S = c.state.S;
  for (let i = 0; i < 13; i++) note(S, 'q' + i, i % 2 ? .5 : 0);
  note(S, 'q0', 0); assert.equal(Object.keys(S.misses.items).length, 13, 'Duplicate question inflated bank');
  S.report = { no: 99, recs: [] }; // latest test was perfect
  assert.equal(c.redoState().rest.length, 13, 'Perfect latest test hid older misses');
  c.startRedo(); assert.equal(c.state.S.test.redo.length, 10); assert.equal(new Set(c.state.S.test.redo).size, 10);
  assert(c.state.S.test.redo.slice(0, 7).every(id => +id.slice(1) % 2 === 0), 'Worst misses not first');
  // Answer one, then end early: the other twelve stay available.
  const P = c.state.S.test.items[0], T = c.state.S.test;
  T.scores[P.id] = 1; T.conf[P.id] = 'sure'; T.checked[P.id] = true;
  c.afterAnswer(c.state.S, P); c.finish();
  assert.equal(c.redoState().fixed.length, 1); assert.equal(c.redoState().rest.length, 12); assert(c.state.S.practice.at);
  // New report, browser round trip, and a different test number must not reset progress.
  c.state.S.report = { no: 100, recs: [] }; c.state.S = clone(c.state.S); restore(c.state.S);
  assert.equal(c.redoState().all.length, 13); assert.equal(c.redoState().fixed.length, 1);
  const fixed = c.redoState().fixed[0]; note(c.state.S, fixed, .5); assert.equal(c.redoState().fixed.length, 0, 'Guess failed to reopen fixed miss');
  note(c.state.S, fixed, 1); assert.equal(c.redoState().fixed.length, 1);
  c.startRedo('all'); assert.equal(c.redoState().rest.length, 13, 'Replay all skipped previously fixed entries');
  // A redo follow-up repairs its original miss without adding a second, unrelated bank entry.
  const rt = c.state.S.test, original = rt.redo[0], follow = { id: 'q14', ch: '56', kind: 'single', q: 'Follow-up', choices: [{ k: 0, c: true, t: 'Correct' }, { k: 1, c: false, t: 'Wrong' }] };
  rt.items.push(follow); rt.root.q14 = original; rt.scores.q14 = 1; rt.conf.q14 = 'sure'; rt.checked.q14 = true;
  c.afterAnswer(c.state.S, follow); assert.equal(c.state.S.misses.items[original].state, 'fixed'); assert(!c.state.S.misses.items.q14);
  rt.scores.q14 = 0; c.afterAnswer(c.state.S, follow); assert.equal(c.state.S.misses.items[original].state, 'shaky'); assert(!c.state.S.misses.items.q14); c.finish();
  assert.equal(c.redoState().shaky.length, 1); assert.equal(c.redoState().rest.length, 12);
  // Every round drains the whole bank, including a final round shorter than ten.
  let rounds = 0;
  while (c.redoState().rest.length || c.redoState().shaky.length) {
    c.startRedo(); const r = c.state.S.test;
    for (const id of r.redo) { note(c.state.S, id, 1); r.fix[id] = 2; r.tries[id] = 1; }
    c.finish(); assert(++rounds < 4);
  }
  assert.equal(c.redoState().fixed.length, 13); c.startRedo(); assert.equal(c.state.S.test.redo.length, 10, 'All-fixed bank no longer replayable');
  // Real answer callbacks in successive ordinary tests retain the cumulative bank.
  const normal = app();
  const begin = (ids, no) => {
    const items = ids.map(id => normal.present(normal.byId[id]));
    normal.state.S.test = { no, len: ids.length, base: ids.length, items, checked: {}, scores: {}, conf: {}, resp: {}, follow: {}, depth: {}, why: {}, queue: [], followN: 0 };
    return normal.state.S.test;
  };
  let nt = begin(['q0', 'q1'], 1);
  for (const p of nt.items) { nt.scores[p.id] = p.id === 'q0' ? 1 : 0; nt.conf[p.id] = p.id === 'q0' ? 'guess' : 'sure'; nt.resp[p.id] = p.id === 'q0' ? 0 : 1; nt.checked[p.id] = true; normal.afterAnswer(normal.state.S, p); }
  normal.finish(); assert.equal(normal.redoState().rest.length, 2);
  nt = begin(['q2'], 2); const np = nt.items[0]; nt.scores.q2 = 1; nt.conf.q2 = 'sure'; nt.resp.q2 = 0; nt.checked.q2 = true;
  normal.afterAnswer(normal.state.S, np); normal.finish(); assert.equal(normal.state.S.report.pct, 100); assert.equal(normal.redoState().all.length, 2);
  // The older pre/post-test format can recover its retained checked answers too.
  const legacy = app(), lp = legacy.present(legacy.byId.q0);
  ctx.localStorage = { getItem: () => JSON.stringify({ seen: { q0: 1 }, result: { test: { items: [lp], checked: { q0: true }, scores: { q0: 0 }, conf: { q0: 'sure' } } } }) };
  assert.equal(legacy.migrate().misses.items.q0.state, 'rest');
  // Unavailable IDs stay stored but cannot crash/start an unavailable question.
  note(c.state.S, 'removed-question', 0); assert.equal(c.redoState().all.length, 13);
  c.guideMode = true; c.byId.q0.guide = ['x']; c.byId.q1.cs = 'case';
  assert.equal(c.redoState().all.length, 13, 'Current focus hid older misses');
  // Recovery from logs alone is usable even when no latest report exists.
  const noReport = app(); noReport.state.S.log.q0 = { last: 0 }; restore(noReport.state.S); noReport.startRedo(); assert.equal(noReport.state.S.test.redo[0], 'q0');
  assert(html.indexOf('{{ hasMisses }}') < html.indexOf('{{ hasReport }}'), 'Redo access still gated by latest report');
  const followTest = app(); followTest.pool = Object.values(followTest.byId).map(x => ({ ...x, topics: ['topic'], words: new Set(), guide: [] }));
  followTest.byId = Object.fromEntries(followTest.pool.map(x => [x.id, x]));
  const ft = { items: [{ id: 'q0' }], redo: Array.from({ length: 14 }, (_, i) => 'q' + i), follow: {}, depth: {}, root: {}, followN: 0 };
  const f = followTest.pickFollow(followTest.state.S, ft, { from: 'q0', root: 'q0', words: [], topics: ['topic'], drugs: [], want: [], fmt: 'trad', depth: 1 });
  assert.equal(f.id, 'q14', 'Follow-up stole a question reserved for later in the redo round');
  // Chapter selection filters every round, preserves other chapters and survives serialization.
  const scope = app(), [a, b, empty] = clone(ctx.chapters);
  scope.byId.q0.ch = a; scope.byId.q1.ch = a; scope.byId.q2.ch = b; scope.byId.q3.ch = b;
  for (const id of ['q0', 'q1', 'q2', 'q3']) note(scope.state.S, id, 0);
  note(scope.state.S, 'q2', 1);
  scope.setRedoChapter(a); assert.deepEqual(clone(scope.redoState().all), ['q0', 'q1']);
  scope.setRedoChapter(b); assert.equal(scope.redoState().all.length, 4);
  scope.setRedoChapter(a); assert.deepEqual(clone(scope.redoState().all), ['q2', 'q3']);
  scope.state.S = clone(scope.state.S); assert.deepEqual(clone(scope.redoChapterSelection()), [b]);
  note(scope.state.S, 'q0', 1);
  scope.startRedo('all'); assert.deepEqual(clone(scope.state.S.test.redoChapters), [b]);
  assert(scope.state.S.test.redo.every(id => scope.byId[id].ch === b));
  assert.equal(scope.state.S.misses.items.q0.state, 'fixed', 'Replay reset an unselected chapter');
  const savedRound = JSON.stringify(scope.state.S.test);
  scope.setRedoChapter(a); assert.equal(JSON.stringify(scope.state.S.test), savedRound, 'Selection changed a paused round');
  scope.state.S.test = null; scope.setRedoChapter(null); scope.setRedoChapter(b); // b alone
  scope.setRedoChapter(b); assert.deepEqual(clone(scope.redoState().all), []);
  scope.startRedo(); assert.equal(scope.state.S.test, null, 'Empty selection started a test');
  scope.setRedoChapter(empty); assert.equal(scope.redoState().all.length, 0); assert.equal(scope.redoState(true).all.length, 4);
  scope.setRedoChapter(null); assert.equal(scope.redoState().all.length, 4);
  scope.state.S.settings.redoChapters = ['invalid']; assert.equal(scope.redoState().all.length, 0, 'Invalid chapter broadened to all chapters');
  // Follow-ups use the full exam bank but never leave the round's chosen chapters.
  const restricted = app();
  restricted.byId = Object.fromEntries(['q0', 'q1', 'q2'].map((id, i) => [id, { id, ch: i === 2 ? b : a, topics: ['shared'], words: new Set(), guide: [] }]));
  restricted.pool = [restricted.byId.q2]; // Map focus currently points at another chapter.
  const tr = { items: [{ id: 'q0' }], redo: ['q0'], redoChapters: [a], follow: {}, depth: {}, root: {}, followN: 0 };
  const target = { from: 'q0', root: 'q0', words: [], topics: ['shared'], drugs: [], want: [], depth: 1 };
  assert.equal(restricted.pickFollow(restricted.state.S, tr, target).id, 'q1');
  delete restricted.byId.q1; assert.equal(restricted.pickFollow(restricted.state.S, tr, target), null, 'Follow-up escaped chosen chapter');
  assert(!html.includes('Only this test counts.'));
  console.log(file + ': migration, cumulative bank, deduplication, partial/guessed misses, 10-item rounds, early exit, persistence, follow-up repair, replay, chapter selection and follow-up scope checks passed.');
}
