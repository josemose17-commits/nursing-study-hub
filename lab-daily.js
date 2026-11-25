// Daily skills run view on Lab Check-offs (#daily, #daily-run, #daily-done). Logic lives in lab-daily-core.js.
(function () {
  'use strict';
  var C = window.LabDailyCore, B = C.build(window.LAB_SKILLS || []), el = document.getElementById('lab-daily');
  var KEY = 'clin-lab-daily-v1', groups = {}, flash = null, timer = null;
  (window.LAB_GROUPS || []).forEach(function (g) { groups[g[0]] = g[1]; });
  var S; try { S = C.restore(JSON.parse(localStorage.getItem(KEY)), B); } catch (e) { S = C.fresh(B); }
  var M = {}; B.forEach(function (x) { M[x.id] = x; });
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  function esc(v) { return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function clock(ms) { ms = Math.max(0, Math.round(ms / 1000)); var h = Math.floor(ms / 3600), m = Math.floor(ms % 3600 / 60), s = ms % 60; return (h ? h + ':' + ('0' + m).slice(-2) : m) + ':' + ('0' + s).slice(-2); }
  function mins(ms) { var m = Math.round(ms / 60000); return m < 1 ? '<1 min' : m + ' min'; }
  function btn(text, act, extra, cls) { return '<button type="button" class="sp-button' + (cls ? ' ' + cls : '') + '" data-daily="' + act + '" ' + (extra || '') + '>' + esc(text) + '</button>'; }
  function head(title, lead) { return '<header><div class="kicker">NRS 114 · skills lab</div><h1 tabindex="-1">' + esc(title) + '</h1>' + (lead ? '<p class="lead">' + lead + '</p>' : '') + '</header>'; }
  function live() { var r = S.run; return r ? r.ms + (r.finished ? 0 : Math.min(Date.now() - r.last, 120000)) : 0; }

  // ---------- plan ----------
  function home() {
    stop();
    var r = S.run, todayRun = r && r.date === C.today(), b = C.budgets(S, B), list = C.active(S);
    var steps = list.reduce(function (a, id) { return a + M[id].steps; }, 0), per = steps ? S.target * 60 / steps : 0;
    var status;
    if (todayRun && r.finished) status = '<p><b>Done today</b> in ' + clock(r.ms) + ' · ' + r.done.length + ' of ' + r.list.length + ' skills · ' + Object.keys(r.errors).reduce(function (a, k) { return a + r.errors[k]; }, 0) + ' mistakes.</p>' + btn('See today’s summary', 'summary', '', '') + ' ' + btn('Run again', 'start', '', 'sp-primary');
    else if (todayRun) status = '<p><b>In progress:</b> skill ' + (r.si + 1) + ' of ' + r.list.length + ' (' + esc(M[r.list[r.si]].title) + ') · ' + clock(r.ms) + ' so far.</p>' + btn('Continue', 'continue', '', 'sp-primary') + ' ' + btn('Start over', 'start', '', '');
    else status = (r && !r.finished ? '<p class="sp-dim">An earlier run was left unfinished; it is kept in your history when you start today’s.</p>' : '') + btn('Start today’s run', 'start', '', 'sp-primary');
    var hist = S.history.slice(-7).reverse(), streak = C.streak(S), tough = C.toughSteps(S, B, 8);
    el.innerHTML = head('Daily skills run', 'Put every skill’s steps in order, in <b>your</b> order, once a day. Pick a 60, 75 or 90 minute target and each skill gets its share of the time by how many steps it has. Wrong taps are counted, and the steps you mix up come back to the top of your list.') +
      '<section class="sp-panel ld-today"><h2>Today</h2>' + status + '</section>' +
      '<section class="sp-panel"><h2>Time target</h2><div class="sp-row" role="group" aria-label="Daily target">' + C.TARGETS.map(function (t) { return '<button type="button" class="sp-button' + (S.target === t ? ' sp-primary' : '') + '" data-daily="target" data-t="' + t + '" aria-pressed="' + (S.target === t) + '">' + t + ' min</button>'; }).join('') + '</div>' +
        '<p class="sp-dim">' + list.length + ' skills · ' + steps + ' steps · about ' + Math.round(per) + ' seconds per step.' + (per < 6 ? ' That is quick: a longer target or skipping a few skills on busy days keeps it realistic.' : '') + '</p></section>' +
      '<section class="sp-panel"><h2>Your order</h2><p class="sp-dim">Move skills up or down to set the order you practice them. Untick a skill to leave it out of the daily run.</p>' +
        '<div class="sp-row">' + btn('Weakest first', 'weakest') + btn('Manual order', 'reset') + btn('Include all', 'all') + '</div>' +
        '<ol class="ld-order">' + S.order.map(function (id, i) {
          var sk = M[id], st = S.skillStats[id], on = !S.skip[id];
          return '<li class="' + (on ? '' : 'ld-off') + '"><label><input type="checkbox" data-daily="toggle" data-id="' + id + '"' + (on ? ' checked' : '') + '><span><b>' + esc(sk.title) + '</b><small>' + esc(groups[sk.group] || '') + ' · ' + sk.steps + ' steps' + (on ? ' · ~' + mins(b[id]) : '') +
            (st ? ' · last: ' + st.errors + ' mistake' + (st.errors === 1 ? '' : 's') + ' in ' + clock(st.ms) : '') + '</small></span></label>' +
            '<span class="ld-move"><button type="button" data-daily="top" data-id="' + id + '" aria-label="Move ' + esc(sk.title) + ' to the top"' + (i ? '' : ' disabled') + '>⤒</button><button type="button" data-daily="up" data-id="' + id + '" aria-label="Move ' + esc(sk.title) + ' up"' + (i ? '' : ' disabled') + '>↑</button><button type="button" data-daily="down" data-id="' + id + '" aria-label="Move ' + esc(sk.title) + ' down"' + (i < S.order.length - 1 ? '' : ' disabled') + '>↓</button></span></li>';
        }).join('') + '</ol></section>' +
      '<section class="sp-panel"><h2>Your record</h2><p>' + (streak ? '<b>' + streak + '-day streak</b> of complete runs.' : 'Finish a full run to start a streak.') + '</p>' +
        (hist.length ? '<ul class="ld-hist">' + hist.map(function (h) { return '<li><b>' + esc(h.date) + '</b> · ' + clock(h.ms) + ' of ' + h.target + ' min · ' + h.skills + '/' + h.planned + ' skills · ' + h.errors + ' mistakes</li>'; }).join('') + '</ul>' : '') +
        (tough.length ? '<details><summary>Steps you mix up most</summary><ol>' + tough.map(function (t) { return '<li><b>' + esc(t.skill) + '</b> · ' + esc(t.part) + ' · step ' + t.n + ': ' + esc(t.text) + ' <small>(' + t.misses + '×)</small></li>'; }).join('') + '</ol></details>' : '') +
      '</section>';
  }

  // ---------- run ----------
  function run() {
    var c = C.current(S, B); if (!c) { location.hash = S.run && S.run.finished ? '#daily-done' : '#daily'; return; }
    var r = c.run, ch = c.chunk, sk = c.skill, done = r.placed.length === ch.steps.length, b = C.budgets(S, B);
    var placed = r.placed.map(function (i) { var st = ch.steps[i]; return '<li class="ld-placed">' + esc(st.text) + (done && st.critical ? ' <span class="sp-pill">safety</span>' : '') + (done && st.why ? '<small>' + esc(st.why) + '</small>' : '') + '</li>'; }).join('');
    var choices = done ? '' : '<div class="ld-choices">' + r.shuffle.filter(function (i) { return r.placed.indexOf(i) < 0; }).map(function (i) {
      var cls = flash === i ? ' ld-wrong' : r.hint && i === r.placed.length ? ' ld-hint' : '';
      return '<button type="button" class="ld-step' + cls + '" data-daily="pick" data-i="' + i + '">' + esc(ch.steps[i].text) + '</button>';
    }).join('') + '</div>';
    var nextLabel = r.ci < sk.chunks.length - 1 ? 'Next steps →' : r.si < r.list.length - 1 ? 'Next skill: ' + M[r.list[r.si + 1]].title + ' →' : 'Finish today’s run';
    el.innerHTML = '<div class="ld-bar"><span>Skill ' + (r.si + 1) + ' of ' + r.list.length + '</span><span data-ld="skill-time"></span><span data-ld="total-time"></span><span data-ld="pace"></span></div>' +
      '<header><div class="kicker">' + esc(groups[sk.group] || '') + '</div><h1 tabindex="-1">' + esc(sk.title) + '</h1>' +
      '<p class="sp-dim">' + esc(ch.part) + (ch.of > ch.to - ch.from + 1 ? ' · steps ' + ch.from + '–' + ch.to + ' of ' + ch.of : '') + ' · part ' + (r.ci + 1) + ' of ' + sk.chunks.length + '</p></header>' +
      '<section class="sp-panel"><p class="sp-dim">' + (done ? 'In order. Read the reasons, then go on.' : 'Tap the step that comes <b>next</b>.' + (r.hint ? ' The highlighted step is next.' : '')) + '</p>' +
      (placed ? '<ol class="ld-list" start="' + ch.from + '">' + placed + '</ol>' : '') + choices +
      (done ? '<div class="sp-row">' + btn(nextLabel, 'advance', '', 'sp-primary') + '</div>' : '') + '</section>' +
      '<div class="sp-row ld-controls">' + btn('Pause · back to plan', 'pause') + btn('Skip the rest of this skill', 'skip') + '</div>' +
      '<p class="sp-dim">Budget for this skill: about ' + mins(b[sk.id] || 0) + '. Mistakes so far: ' + (r.errors[sk.id] || 0) + '.</p>';
    flash = null; tickView(); startTimer();
  }
  function tickView() {
    var r = S.run; if (!r) return; var b = C.budgets(S, B), id = r.list[r.si], cur = (r.skillMs[id] || 0) + (r.finished ? 0 : Math.min(Date.now() - r.last, 120000));
    var p = C.pace(S, B) - (live() - r.ms);
    var set = function (k, v) { var n = el.querySelector('[data-ld="' + k + '"]'); if (n) n.textContent = v; };
    set('skill-time', 'This skill ' + clock(cur) + ' / ' + clock(b[id] || 0));
    set('total-time', 'Total ' + clock(live()) + ' / ' + S.target + ':00');
    set('pace', Math.abs(p) < 15000 ? 'On pace' : p > 0 ? clock(p) + ' ahead' : clock(-p) + ' behind');
    var pn = el.querySelector('[data-ld="pace"]'); if (pn) pn.className = p < -15000 ? 'ld-behind' : '';
  }
  function startTimer() { if (!timer) timer = setInterval(tickView, 1000); }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }

  // ---------- summary ----------
  function summary() {
    stop(); var r = S.run; if (!r) { location.hash = '#daily'; return; }
    var errs = Object.keys(r.errors).reduce(function (a, k) { return a + r.errors[k]; }, 0), steps = r.done.reduce(function (a, id) { return a + M[id].steps; }, 0);
    var worst = r.done.slice().sort(function (a, b) { return (r.errors[b] || 0) / M[b].steps - (r.errors[a] || 0) / M[a].steps; }).filter(function (id) { return r.errors[id]; }).slice(0, 6);
    var allDone = r.done.length === r.list.length;
    el.innerHTML = head(r.finished ? (allDone ? 'Today’s run is done' : 'Today’s run ended') : 'Run summary', r.finished && !allDone ? 'You skipped ' + (r.list.length - r.done.length) + ' skill' + (r.list.length - r.done.length === 1 ? '' : 's') + '. Only fully finished runs count toward your streak.' : '') +
      '<section class="sp-panel"><h2>' + clock(r.ms) + ' <small class="sp-dim">of your ' + S.target + '-minute target</small></h2><p>' + r.done.length + ' of ' + r.list.length + ' skills · ' + steps + ' steps · ' + errs + ' mistake' + (errs === 1 ? '' : 's') + (steps ? ' · ' + Math.round(100 * Math.max(0, steps - errs) / steps) + '% first-try accuracy' : '') + '.</p>' +
      (worst.length ? '<h3>Most mix-ups today</h3><ul>' + worst.map(function (id) { return '<li><b>' + esc(M[id].title) + '</b>: ' + r.errors[id] + ' in ' + M[id].steps + ' steps</li>'; }).join('') + '</ul><div class="sp-row">' + btn('Put my weakest skills first tomorrow', 'weakest-done', '', 'sp-primary') + '</div>' : errs ? '<p>Your mistakes today were in skills you skipped.</p>' : allDone ? '<p>No mix-ups. Try a shorter target tomorrow.</p>' : '') +
      '<div class="sp-row">' + btn('Back to the plan', 'plan') + '</div></section>';
  }

  function render() {
    var h = location.hash.slice(1);
    if (h === 'daily-run') run(); else if (h === 'daily-done') summary(); else home();
    var t = el.querySelector('h1'); if (t) t.focus({ preventScroll: true });
  }
  el.addEventListener('click', function (e) {
    var b = e.target.closest('[data-daily]'); if (!b || b.disabled || b.tagName === 'INPUT') return;
    var a = b.dataset.daily, id = b.dataset.id;
    if (a === 'target') { S.target = +b.dataset.t; save(); home(); }
    else if (a === 'up' || a === 'down') { C.move(S, id, a === 'up' ? -1 : 1); save(); home(); var f = el.querySelector('[data-daily="' + a + '"][data-id="' + id + '"]'); if (f && !f.disabled) f.focus(); }
    else if (a === 'top') { S.order.splice(S.order.indexOf(id), 1); S.order.unshift(id); save(); home(); }
    else if (a === 'weakest') { C.weakestFirst(S); save(); home(); }
    else if (a === 'reset') { S.order = B.map(function (x) { return x.id; }); save(); home(); }
    else if (a === 'all') { S.skip = {}; save(); home(); }
    else if (a === 'start') { if (C.start(S, B)) { save(); location.hash = '#daily-run'; } }
    else if (a === 'continue') { C.resume(S); save(); location.hash = '#daily-run'; }
    else if (a === 'pick') {
      var res = C.pick(S, B, +b.dataset.i); if (!res) return; save();
      if (!res.ok) flash = +b.dataset.i;
      run(); if (res.ok && res.chunkDone) { var n = el.querySelector('[data-daily="advance"]'); if (n) n.focus({ preventScroll: true }); }
    }
    else if (a === 'advance') { var step = C.advance(S, B); save(); if (step === 'done') location.hash = '#daily-done'; else { run(); window.scrollTo(0, 0); } }
    else if (a === 'skip') { var s2 = C.skip(S, B); save(); if (s2 === 'done') location.hash = '#daily-done'; else { run(); window.scrollTo(0, 0); } }
    else if (a === 'pause') { C.tick(S); save(); location.hash = '#daily'; }
    else if (a === 'summary') location.hash = '#daily-done';
    else if (a === 'weakest-done') { C.weakestFirst(S); save(); location.hash = '#daily'; }
    else if (a === 'plan') location.hash = '#daily';
  });
  el.addEventListener('change', function (e) {
    var t = e.target; if (!t.matches('[data-daily="toggle"]')) return;
    if (t.checked) delete S.skip[t.dataset.id]; else S.skip[t.dataset.id] = true; save(); home();
    var f = el.querySelector('[data-daily="toggle"][data-id="' + t.dataset.id + '"]'); if (f) f.focus();
  });
  // A hidden page (phone locked, app switched) is a break: count up to now, then restart the clock on return.
  document.addEventListener('visibilitychange', function () {
    if (!S.run || S.run.finished || location.hash !== '#daily-run') return;
    if (document.hidden) { C.tick(S); save(); } else { C.resume(S); save(); tickView(); }
  });
  window.LabDaily = { render: render, stop: stop };
})();
