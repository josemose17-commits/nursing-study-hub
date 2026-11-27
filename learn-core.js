// Pure scheduling and scoring shared by the guided page and its checks.
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.Exam3Learn = api;
})(typeof window === 'object' ? window : globalThis, function () {
  'use strict';
  const DAY = 86400000, RETRY = 600000;
  function blank() { return { version: 1, lessons: {}, drafts: {}, session: null, misses: { version: 1, items: {} } }; }
  function restoreMisses(s, lessons) {
    const valid = (m, key) => {
      const l = m && lessons.find(l => l.id === m.lesson);
      return l && Number.isInteger(m.variant) && !!l.questions[m.variant] && key === m.lesson + ':' + m.variant;
    };
    if (s.misses && s.misses.version === 1 && s.misses.items && typeof s.misses.items === 'object') {
      s.misses.items = Object.fromEntries(Object.entries(s.misses.items).filter(([key,m]) => valid(m,key)).map(([key,m]) => {
        const l=lessons.find(l=>l.id===m.lesson);
        return [key,{...m,recall:Array.isArray(m.recall)?m.recall.filter(i=>Number.isInteger(i)&&i>=0&&i<l.checks.length):[]}];
      }));
      return;
    }
    s.misses = { version: 1, items: {} };
    // Recover the retained old history, without inventing which individual recall points were missed.
    for (const l of lessons) for (const h of (Array.isArray(s.lessons[l.id]?.history)?s.lessons[l.id].history:[])) {
      if(!h||typeof h!=='object')continue;
      if (!Number.isInteger(h.variant) || !l.questions[h.variant]) continue;
      const key=l.id+':'+h.variant, old=s.misses.items[key];
      if (!h.correct || !h.recalled) s.misses.items[key]={lesson:l.id,variant:h.variant,at:h.at,count:(old?.count||0)+1,decision:!h.correct,recall:[],recallUnknown:!h.recalled,repairedAt:null};
      else if(old) old.repairedAt=h.at;
    }
  }
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
    restoreMisses(s, lessons);
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
    if (!state.misses || state.misses.version !== 1) state.misses = { version: 1, items: {} };
    const key=lesson.id+':'+t.variant, old=state.misses.items[key];
    if(!success) state.misses.items[key]={lesson:lesson.id,variant:t.variant,at:now,count:(old?.count||0)+1,decision:!correct,recall:t.checks.flatMap((ok,i)=>ok?[]:[i]),recallUnknown:false,repairedAt:null};
    else if(old) old.repairedAt=now;
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
      if (l.id !== target.id) return { lesson: l, reason: 'A foundation for “' + target.title + '”, selected using missed topics and chapter coverage.' };
      return { lesson: l, reason: l.notes.some(n => missed.has(n)) ? 'This connects to a recorded missed topic in your test history.' : 'A ready lesson, balancing prerequisites and chapter coverage.' };
    }
    const next = rows.filter(x => Number.isFinite(x.p.dueAt)).sort((a, b) => a.p.dueAt - b.p.dueAt)[0];
    return next ? { lesson: next.lesson, reason: 'No reviews are due. You can practise early; the scheduled date will stay the same.', early: true } : null;
  }
  function missEntries(state, lessons, includeRepaired=false) {
    const ids=new Set(lessons.map(l=>l.id));
    return Object.entries(state.misses?.items||{}).filter(([,m])=>ids.has(m.lesson)&&(includeRepaired||!m.repairedAt)).map(([key,m])=>({key,...m})).sort((a,b)=>Number(!!a.repairedAt)-Number(!!b.repairedAt)||(b.at||0)-(a.at||0));
  }
  function retryMiss(state, lesson, variant, now, random=Math.random) {
    if(!state.misses?.items[lesson.id+':'+variant]||!lesson.questions[variant])return null;
    // An independent repair can coexist with an unfinished ordinary lesson draft.
    if(state.session&&!['feedback','done'].includes(state.session.stage))state.drafts[state.session.id]=state.session;
    const p=state.lessons[lesson.id]||{},order=lesson.questions[variant].o.map((_,i)=>i);
    for(let i=order.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}
    state.session={id:lesson.id,variant,order,stage:'recall',picks:[],draft:'',revealed:false,checks:lesson.checks.map(()=>false),eligible:!!p.completedAt&&Number.isFinite(p.dueAt)&&now>=p.dueAt,startedAt:now,repair:true};
    return state.session;
  }
  // ---------- Tap-only recall ----------
  // Each recall point offers three answers: this lesson's own answer and two answers from other lessons
  // (same chapter first, closest in length, never a near-duplicate). Scored automatically: no typing,
  // speaking or self-rating. Deterministic for a seed, so a reload shows the same choices.
  const CAP = 260;
  function norm(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(); }
  function words(s) { return new Set(norm(s).split(' ').filter(w => w.length > 3)); }
  function overlap(a, b) { const A = words(a), B = words(b); if (!A.size || !B.size) return 0; let n = 0; A.forEach(w => { if (B.has(w)) n++; }); return n / Math.min(A.size, B.size); }
  const STOP = new Set(['which', 'what', 'when', 'where', 'there', 'their', 'about', 'after', 'before', 'explain', 'lesson', 'patient', 'nurse', 'should', 'would', 'these', 'those', 'point', 'state', 'findings']);
  function stems(s) { return new Set(norm(s).split(' ').filter(w => w.length > 3 && !STOP.has(w)).map(w => w.slice(0, 5))); }
  function shared(a, b) { if (!a.size || !b.size) return 0; let n = 0; a.forEach(w => { if (b.has(w)) n++; }); return Math.min(1, n / Math.min(a.size, b.size)); }
  function clip(s) {
    s = String(s || '').replace(/\s+/g, ' ').trim(); if (s.length <= CAP) return s;
    const cut = s.slice(0, CAP), at = Math.max(cut.lastIndexOf('; '), cut.lastIndexOf('. '), cut.lastIndexOf(' · '));
    return (at > 120 ? cut.slice(0, at + (cut[at] === '.' ? 1 : 0)) : cut.replace(/\s+\S*$/, '')) + ' …';
  }
  // Generated prompts such as "Explain why in Pack-years." or "What do you remember about why?" read badly;
  // turn them into a plain question about the named point (or a generic one when the point name is vague).
  function tidyPrompt(p) {
    const m = String(p).match(/^Explain (.+) in .+\.$/) || String(p).match(/^What do you remember about (.+)\?$/);
    if (!m) return p;
    const topic = m[1].replace(/^¶\s*/, '').trim();
    return /\s/.test(topic) && !/^(why|what|how)\b/i.test(topic) && topic.length < 60 ? 'Which point about ' + topic + ' is from this lesson?' : 'Which key point is from this lesson?';
  }
  function recallAnswer(lesson, i) { return (lesson.recallAnswers && lesson.recallAnswers[i]) || (lesson.why && lesson.why[i]) || ''; }
  function seeded(seed) { let x = 0; for (let i = 0; i < seed.length; i++) x = (x * 31 + seed.charCodeAt(i)) >>> 0; return () => { x = (x * 1664525 + 1013904223) >>> 0; return x / 4294967296; }; }
  function recallChoices(lesson, i, lessons, seed) {
    const answer = recallAnswer(lesson, i); if (!norm(answer)) return null;
    const rng = seeded(String(seed || '') + '|' + lesson.id + '|' + i), own = clip(answer), pool = [], ask = lesson.recallAnswers ? stems((lesson.checks || [])[i]) : new Set();
    // A specific prompt ("Which antibody crosses the placenta?") may use this lesson's other answers as
    // distractors; a "which point is from this lesson" prompt may not, since those would also be correct.
    const specific = !!lesson.recallAnswers && !/from this lesson\?$/.test(tidyPrompt((lesson.checks || [])[i] || ''));
    const others = lessons.some(o => o.id === lesson.id) ? lessons : lessons.concat([lesson]);
    others.forEach(o => {
      if (o.id === lesson.id && !specific) return;
      const list = o.recallAnswers || (o.why || []).slice(0, (o.checks || []).length || 3);
      list.forEach((t, j) => {
        if (o.id === lesson.id && j === i) return;
        const c = clip(t);
        if (!norm(c) || norm(c) === norm(own) || overlap(c, own) > 0.5 || norm(own).includes(norm(c)) || norm(c).includes(norm(own))) return;
        // Like-for-like distractors: a numeric answer gets numeric choices, a short term gets short terms.
        const kind = /\d/.test(c) === /\d/.test(own) ? 0 : 0.6;
        // Answers to a similar prompt ("Which antibody…" for "Which antibody…") make the closest distractors.
        const asked = o.recallAnswers ? stems((o.checks || [])[j]) : new Set(), sim = shared(asked, ask);
        pool.push({ text: c, from: o.id === lesson.id ? 'another point in this lesson' : o.title, same: o.ch === lesson.ch ? 0 : 1, gap: kind - sim + Math.abs(c.length - own.length) / Math.max(40, own.length) });
      });
    });
    pool.sort(own.length < 60 ? (a, b) => (a.gap + a.same * 0.3) - (b.gap + b.same * 0.3) : (a, b) => a.same - b.same || a.gap - b.gap);
    const picked = [];
    for (const c of pool.slice(0, 4).sort(() => rng() - 0.5).concat(pool.slice(4))) {
      if (picked.some(p => norm(p.text) === norm(c.text) || overlap(p.text, c.text) > 0.5)) continue;
      picked.push(c); if (picked.length === 2) break;
    }
    if (picked.length < 2) return null;
    const options = [{ text: own, correct: true, from: lesson.title }].concat(picked.map(c => ({ text: c.text, correct: false, from: c.from })));
    for (let k = options.length - 1; k > 0; k--) { const j = Math.floor(rng() * (k + 1)); [options[k], options[j]] = [options[j], options[k]]; }
    // Lessons without a per-point answer key (the Exam 3 lessons) ask which key point belongs to the lesson,
    // because their recall prompts and explanation points are not paired one to one.
    const prompt = lesson.recallAnswers ? tidyPrompt((lesson.checks || [])[i] || '') : 'Which key point is from this lesson?';
    return { prompt, answer: own, options };
  }
  function pickRecall(state, lesson, i, choice, lessons) {
    const t = state.session; if (!t || t.id !== lesson.id || t.stage !== 'recall' || !Number.isInteger(i) || i < 0 || i >= lesson.checks.length) return false;
    t.recallPicks = Array.isArray(t.recallPicks) && t.recallPicks.length === lesson.checks.length ? t.recallPicks : lesson.checks.map(() => null);
    if (t.recallPicks[i] != null) return false;
    const c = recallChoices(lesson, i, lessons, t.startedAt); if (!c || !c.options[choice]) return false;
    t.recallPicks[i] = choice; t.checks[i] = !!c.options[choice].correct;
    if (t.recallPicks.every((p, k) => p != null || !recallChoices(lesson, k, lessons, t.startedAt))) t.revealed = true;
    return true;
  }
  return { DAY, RETRY, blank, restore, grade, start, finish, recommend, restoreMisses, missEntries, retryMiss, recallChoices, recallAnswer, pickRecall, clip, tidyPrompt };
});
