// Daily skills run: put every lab skill's steps in order, all skills in one 60–90 minute session a day.
// Pure logic (no DOM) so tools/check_lab_daily.js can run it in Node. Saved under clin-lab-daily-v1.
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api; else root.LabDailyCore = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';
  var CHUNK = 6, TARGETS = [60, 75, 90], IDLE_CAP = 120000; // a gap longer than 2 minutes counts as a break, not practice

  // Skills → ordering chunks of up to CHUNK consecutive steps (long parts are split evenly).
  function build(skills) {
    return skills.map(function (s) {
      var chunks = [];
      s.parts.forEach(function (p, pi) {
        var n = p.steps.length, k = Math.ceil(n / CHUNK), size = Math.ceil(n / k);
        for (var at = 0; at < n; at += size) {
          var steps = p.steps.slice(at, at + size).map(function (st, j) { return { text: st[0], why: st[1] || '', critical: !!st[2], key: s.id + '/' + pi + '/' + (at + j) }; });
          chunks.push({ part: p.h, from: at + 1, to: at + steps.length, of: n, steps: steps });
        }
      });
      return { id: s.id, title: s.title, group: s.group, steps: chunks.reduce(function (a, c) { return a + c.steps.length; }, 0), chunks: chunks };
    });
  }
  function today(now) { var d = new Date(now || Date.now()); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function seeded(seed) { var x = 0; for (var i = 0; i < seed.length; i++) x = (x * 31 + seed.charCodeAt(i)) >>> 0; return function () { x = (x * 1664525 + 1013904223) >>> 0; return x / 4294967296; }; }
  function shuffle(n, rng) {
    var a = []; for (var i = 0; i < n; i++) a.push(i);
    for (var t = 0; t < 4; t++) { for (var j = n - 1; j > 0; j--) { var r = Math.floor(rng() * (j + 1)), v = a[j]; a[j] = a[r]; a[r] = v; } if (n < 2 || a.some(function (v, i) { return v !== i; })) break; }
    return a;
  }

  function fresh(skills) { return { version: 1, target: 60, order: skills.map(function (s) { return s.id; }), skip: {}, run: null, history: [], stepMiss: {}, skillStats: {} }; }
  function restore(raw, skills) {
    var s = fresh(skills), ids = skills.map(function (x) { return x.id; });
    if (!raw || typeof raw !== 'object') return s;
    if (TARGETS.indexOf(raw.target) >= 0) s.target = raw.target;
    if (Array.isArray(raw.order)) { var o = raw.order.filter(function (id, i, a) { return ids.indexOf(id) >= 0 && a.indexOf(id) === i; }); s.order = o.concat(ids.filter(function (id) { return o.indexOf(id) < 0; })); }
    if (raw.skip && typeof raw.skip === 'object') ids.forEach(function (id) { if (raw.skip[id]) s.skip[id] = true; });
    if (Array.isArray(raw.history)) s.history = raw.history.filter(function (h) { return h && typeof h.date === 'string' && h.ms >= 0; }).slice(-60);
    if (raw.stepMiss && typeof raw.stepMiss === 'object') s.stepMiss = raw.stepMiss;
    if (raw.skillStats && typeof raw.skillStats === 'object') s.skillStats = raw.skillStats;
    var r = raw.run;
    if (r && typeof r.date === 'string' && Array.isArray(r.list) && r.list.every(function (id) { return ids.indexOf(id) >= 0; }) && Number.isInteger(r.si) && Number.isInteger(r.ci)) s.run = r;
    return s;
  }
  function active(s) { return s.order.filter(function (id) { return !s.skip[id]; }); }
  function byId(B) { var m = {}; B.forEach(function (x) { m[x.id] = x; }); return m; }
  // Minutes allowed per skill: the target shared by step count across the skills in today's order.
  function budgets(s, B) {
    var M = byId(B), list = active(s), total = list.reduce(function (a, id) { return a + M[id].steps; }, 0), out = {};
    list.forEach(function (id) { out[id] = total ? s.target * 60000 * M[id].steps / total : 0; });
    return out;
  }
  function move(s, id, delta) {
    var i = s.order.indexOf(id), j = i + delta; if (i < 0 || j < 0 || j >= s.order.length) return false;
    s.order.splice(j, 0, s.order.splice(i, 1)[0]); return true;
  }
  // Weakest first: most mistakes per step on recent runs; never-practiced skills keep their place after those.
  function weakestFirst(s) {
    var rate = function (id) { var st = s.skillStats[id]; return st && st.steps ? st.errors / st.steps : -1; }, before = s.order.slice();
    s.order = before.slice().sort(function (a, b) { return rate(b) - rate(a) || before.indexOf(a) - before.indexOf(b); });
    return true;
  }

  function chunkState(s, B, now) {
    var M = byId(B), r = s.run, sk = M[r.list[r.si]], ch = sk.chunks[r.ci];
    r.shuffle = shuffle(ch.steps.length, seeded(r.date + '|' + sk.id + '|' + r.ci));
    r.placed = []; r.wrongHere = 0; r.hint = false;
    return r;
  }
  function start(s, B, now) {
    now = now || Date.now();
    var list = active(s); if (!list.length) return false;
    if (s.run && !s.run.finished && s.run.done.length) finishRun(s); // keep a partly finished earlier run in the history
    s.run = { date: today(now), list: list, si: 0, ci: 0, ms: 0, last: now, skillMs: {}, errors: {}, done: [], finished: false, startedAt: now };
    chunkState(s, B, now); return true;
  }
  // Active time: add the gap since the last action, capped so a break or a closed phone isn't counted.
  function tick(s, now) {
    var r = s.run; if (!r || r.finished) return;
    now = now || Date.now(); var gap = Math.max(0, Math.min(now - (r.last || now), IDLE_CAP));
    r.ms += gap; var id = r.list[r.si]; r.skillMs[id] = (r.skillMs[id] || 0) + gap; r.last = now;
  }
  function resume(s, now) { if (s.run) s.run.last = now || Date.now(); } // returning after a break starts the clock fresh
  function current(s, B) {
    var r = s.run; if (!r || r.finished) return null;
    var sk = byId(B)[r.list[r.si]]; return { skill: sk, chunk: sk.chunks[r.ci], run: r, next: r.placed.length };
  }
  // Tap a step. Right: it is placed. Wrong: counted (and remembered for that step); two misses in a row show a hint.
  function pick(s, B, idx, now) {
    var c = current(s, B); if (!c) return null; tick(s, now);
    var r = s.run, want = r.placed.length, step = c.chunk.steps[want];
    if (!Number.isInteger(idx) || idx < 0 || idx >= c.chunk.steps.length || r.placed.indexOf(idx) >= 0) return null;
    if (idx === want) { r.placed.push(idx); r.wrongHere = 0; r.hint = false; return { ok: true, chunkDone: r.placed.length === c.chunk.steps.length }; }
    r.errors[c.skill.id] = (r.errors[c.skill.id] || 0) + 1; r.wrongHere++;
    s.stepMiss[step.key] = (s.stepMiss[step.key] || 0) + 1;
    if (r.wrongHere >= 2) r.hint = true;
    return { ok: false, hint: r.hint };
  }
  // Move on after a finished chunk: the next chunk, the next skill, or the end of today's run.
  function advance(s, B, now) {
    var c = current(s, B); if (!c || c.run.placed.length < c.chunk.steps.length) return false;
    tick(s, now); var r = s.run;
    if (r.ci < c.skill.chunks.length - 1) { r.ci++; chunkState(s, B, now); return 'chunk'; }
    finishSkill(s, c.skill);
    if (r.si < r.list.length - 1) { r.si++; r.ci = 0; chunkState(s, B, now); return 'skill'; }
    return finishRun(s), 'done';
  }
  function finishSkill(s, sk) {
    var r = s.run; if (r.done.indexOf(sk.id) < 0) r.done.push(sk.id);
    var st = s.skillStats[sk.id] || { runs: 0 };
    s.skillStats[sk.id] = { runs: st.runs + 1, steps: sk.steps, errors: r.errors[sk.id] || 0, ms: r.skillMs[sk.id] || 0, date: r.date };
  }
  function skip(s, B, now) { // skip the rest of this skill today
    var c = current(s, B); if (!c) return false; tick(s, now); var r = s.run;
    if (r.si < r.list.length - 1) { r.si++; r.ci = 0; chunkState(s, B, now); return 'skill'; }
    return finishRun(s), 'done';
  }
  function finishRun(s) {
    var r = s.run; r.finished = true;
    var errors = Object.keys(r.errors).reduce(function (a, k) { return a + r.errors[k]; }, 0);
    s.history = s.history.filter(function (h) { return h.date !== r.date; }).concat([{ date: r.date, ms: r.ms, target: s.target, skills: r.done.length, planned: r.list.length, errors: errors }]).slice(-60);
  }
  function pace(s, B) { // ahead (+) or behind (−) the target, in ms, for the skills finished so far plus the current one
    var r = s.run; if (!r) return 0; var b = budgets(s, B), allowed = 0;
    r.list.forEach(function (id, i) { if (i < r.si) allowed += b[id] || 0; });
    var cur = r.list[r.si], M = byId(B), sk = M[cur];
    if (sk && !r.finished) allowed += (b[cur] || 0) * (sk.chunks.slice(0, r.ci).reduce(function (a, c) { return a + c.steps.length; }, 0) + r.placed.length) / sk.steps;
    else if (r.finished) allowed = r.list.reduce(function (a, id) { return a + (r.done.indexOf(id) >= 0 ? b[id] || 0 : 0); }, 0);
    return allowed - r.ms;
  }
  function streak(s, now) {
    var days = {}; s.history.forEach(function (h) { if (h.skills >= h.planned) days[h.date] = 1; });
    var n = 0, d = new Date(now || Date.now());
    if (!days[today(d)]) d.setDate(d.getDate() - 1);
    while (days[today(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function toughSteps(s, B, n) {
    var lookup = {}; B.forEach(function (sk) { sk.chunks.forEach(function (c) { c.steps.forEach(function (st, i) { lookup[st.key] = { skill: sk.title, part: c.part, n: c.from + i, text: st.text }; }); }); });
    return Object.keys(s.stepMiss).filter(function (k) { return lookup[k]; }).sort(function (a, b) { return s.stepMiss[b] - s.stepMiss[a]; }).slice(0, n || 10)
      .map(function (k) { return Object.assign({ misses: s.stepMiss[k] }, lookup[k]); });
  }
  return { CHUNK: CHUNK, TARGETS: TARGETS, build: build, today: today, fresh: fresh, restore: restore, active: active, budgets: budgets, move: move,
    weakestFirst: weakestFirst, start: start, tick: tick, resume: resume, current: current, pick: pick, advance: advance, skip: skip, pace: pace, streak: streak, toughSteps: toughSteps };
});
