// Pure scheduling and scoring shared by the guided page and its checks.
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.Exam3Learn = api;
})(typeof window === 'object' ? window : globalThis, function () {
  'use strict';
  const DAY = 86400000, RETRY = 600000;
  function blank() { return { version: 1, lessons: {}, drafts: {}, session: null }; }
  function restore(raw, lessons) {
    let s; try { s = JSON.parse(raw); } catch (_) {}
    if (!s || s.version !== 1 || !s.lessons || typeof s.lessons !== 'object' || Array.isArray(s.lessons)) return blank();
    const ids = new Set(lessons.map(l => l.id));
    s.lessons = Object.fromEntries(Object.entries(s.lessons).filter(([id, p]) => ids.has(id) && p && typeof p === 'object'));
    function valid(t) {
    const lesson = t && lessons.find(l => l.id === t.id);
    return !!lesson && ['understand', 'recall', 'apply', 'feedback', 'done'].includes(t.stage) && Array.isArray(t.picks) && Array.isArray(t.order) && Number.isInteger(t.variant) && !!lesson.questions[t.variant] &&
      !(
      t.order.length !== lesson.questions[t.variant].o.length || new Set(t.order).size !== t.order.length || t.order.some(i => !Number.isInteger(i) || i < 0 || i >= t.order.length) ||
      !Array.isArray(t.checks) || t.checks.length !== lesson.checks.length || t.picks.some(i => !t.order.includes(i)) ||
      (['feedback', 'done'].includes(t.stage) && typeof t.correct !== 'boolean'));
    }
    if (!valid(s.session)) s.session = null;
    s.drafts = Object.fromEntries(Object.entries(s.drafts && typeof s.drafts === 'object' ? s.drafts : {}).filter(([id,t]) => ids.has(id) && valid(t) && t.id === id));
    return s;
  }
  function grade(question, picks) {
    const p = new Set(picks);
    return p.size === question.a.length && question.a.every(i => p.has(i));
  }
  function start(state, lesson, now, random = Math.random) {
    if (state.session && state.session.id === lesson.id && state.session.stage !== 'done') return state.session;
    state.drafts = state.drafts || {};
    if (state.session && state.session.stage !== 'done') state.drafts[state.session.id] = state.session;
    if (state.drafts[lesson.id]) { state.session = state.drafts[lesson.id]; delete state.drafts[lesson.id]; return state.session; }
    const p = state.lessons[lesson.id] || {};
    const variant = (p.attempts || 0) % lesson.questions.length;
    const order = lesson.questions[variant].o.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
    state.session = { id: lesson.id, stage: p.completedAt ? 'recall' : 'understand', variant, order, picks: [], draft: '', revealed: false,
      checks: lesson.checks.map(() => false), eligible: !!p.completedAt && Number.isFinite(p.dueAt) && now >= p.dueAt, startedAt: now };
    return state.session;
  }
  function finish(state, lesson, now) {
    const t = state.session;
    if (!t || t.id !== lesson.id || t.stage !== 'apply') return false;
    const p = state.lessons[lesson.id] || (state.lessons[lesson.id] = {});
    const recalled = t.checks.every(Boolean), correct = grade(lesson.questions[t.variant], t.picks), success = recalled && correct;
    p.attempts = (p.attempts || 0) + 1;
    p.completedAt = now; p.recallAt = now; p.recalled = recalled; p.correct = correct;
    p.history = (Array.isArray(p.history) ? p.history : []).concat({ at: now, variant: t.variant, correct, recalled, delayed: t.eligible }).slice(-30);
    if (!success) { p.streak = 0; p.needsReview = true; p.dueAt = now + RETRY; }
    else if (t.eligible) {
      p.streak = Math.min(3, (p.streak || 0) + 1); p.needsReview = false;
      p.delayedAt = now; p.delayedPasses = (p.delayedPasses || 0) + 1;
      p.dueAt = now + [1, 3, 7][p.streak - 1] * DAY;
    } else if (!p.dueAt) { p.dueAt = now + DAY; p.needsReview = false; }
    // Practising early never moves a due date or earns a delayed pass.
    t.stage = 'feedback'; t.correct = correct; t.recalled = recalled; t.finishedAt = now;
    return true;
  }
  function recommend(state, lessons, weights, now, missedTopics = []) {
    const rows = lessons.map(l => ({ lesson: l, p: state.lessons[l.id] || {} }));
    const due = rows.filter(x => Number.isFinite(x.p.dueAt) && x.p.dueAt <= now)
      .sort((a, b) => (Number(!!b.p.needsReview) - Number(!!a.p.needsReview)) || a.p.dueAt - b.p.dueAt);
    if (due.length) return { lesson: due[0].lesson, reason: due[0].p.needsReview ? 'A missed point is ready for another try.' : 'Your scheduled recall and application review is due.' };
    const missed = new Set(missedTopics);
    const fresh = rows.filter(x => !x.p.completedAt);
    if (fresh.length) {
      const chapterCount = ch => rows.filter(x => x.lesson.ch === ch && x.p.completedAt).length;
      const score = x => (x.lesson.notes.some(n => missed.has(n)) ? 100 : 0) + weights[x.lesson.ch] / (1 + chapterCount(x.lesson.ch));
      fresh.sort((a, b) => score(b) - score(a));
      const target = fresh[0].lesson;
      function foundation(l, seen = new Set()) {
        if (seen.has(l.id)) return l;
        seen.add(l.id);
        const id = (l.requires || []).find(id => !state.lessons[id] || !state.lessons[id].completedAt);
        const pre = lessons.find(x => x.id === id);
        return pre ? foundation(pre, seen) : l;
      }
      const l = foundation(target);
      if (l.id !== target.id) return { lesson: l, reason: 'A foundation for “' + target.title + '”, selected using missed topics and your exam’s chapter weights.' };
      return { lesson: l, reason: l.notes.some(n => missed.has(n)) ? 'This connects to a missed point in your last Mastery report.' : 'A ready lesson, balancing prerequisites and your exam’s chapter weights.' };
    }
    const next = rows.filter(x => Number.isFinite(x.p.dueAt)).sort((a, b) => a.p.dueAt - b.p.dueAt)[0];
    return next ? { lesson: next.lesson, reason: 'No reviews are due. You can practise early; the scheduled date will stay the same.', early: true } : null;
  }
  return { DAY, RETRY, blank, restore, grade, start, finish, recommend };
});
