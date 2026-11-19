// Med practice page: choose exams and a practice type, drill, see why, redo misses. Question logic is in med-practice-core.js.
(function () {
  'use strict';
  var C = window.MedPracticeCore, bank = C.build(window.MED_PRACTICE, window.DRUG_DATA), $ = function (id) { return document.getElementById(id); };
  var KEY = 'med-practice-v1';
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function md(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'); }

  var st = load();
  var urlExam = (/[?&]exam=([1-5F])/.exec(location.search) || [])[1];
  if (!Array.isArray(st.exams) || !st.exams.length) st.exams = ['1', '2', '3', '4'];
  if (urlExam && C.EXAMS.some(function (e) { return e[0] === urlExam; })) st.exams = [urlExam];
  st.mode = st.mode || 'suffix'; st.n = st.n || 10; st.missed = st.missed || {};
  var run = null;

  // ---------- setup ----------
  function setup() {
    $('exams').innerHTML = C.EXAMS.map(function (e) {
      var n = bank.drugs.filter(function (d) { return d.exam === e[0]; }).length;
      return '<label class="chip"><input type="checkbox" value="' + e[0] + '"' + (st.exams.indexOf(e[0]) >= 0 ? ' checked' : '') + '><span>' + e[1] + ' <small>' + n + ' drugs</small></span></label>';
    }).join('');
    $('modes').innerHTML = C.MODES.map(function (m) {
      return '<button type="button" class="mode" data-mode="' + m[0] + '" aria-pressed="' + (st.mode === m[0]) + '"><b>' + m[1] + '</b><small>' + m[2] + '</small></button>';
    }).join('');
    $('lengths').innerHTML = [10, 20, 40].map(function (n) { return '<button type="button" class="pill" data-n="' + n + '" aria-pressed="' + (st.n === n) + '">' + n + '</button>'; }).join('');
    status(); sheet();
  }
  function pool() { return C.questions(bank, st.exams, st.mode); }
  function status() {
    var all = st.exams.length ? pool() : [], miss = Object.keys(st.missed).length;
    $('available').textContent = st.exams.length ? all.length + ' questions available for this choice.' : 'Pick at least one exam.';
    $('start').disabled = !all.length;
    $('redo').hidden = !miss; $('redo').textContent = 'Redo my misses (' + miss + ')';
  }
  $('exams').addEventListener('change', function () {
    st.exams = [].slice.call($('exams').querySelectorAll('input:checked')).map(function (i) { return i.value; }); save(); status(); sheet();
  });
  $('modes').addEventListener('click', function (e) {
    var b = e.target.closest('[data-mode]'); if (!b) return; st.mode = b.dataset.mode; save();
    $('modes').querySelectorAll('[data-mode]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); status();
  });
  $('lengths').addEventListener('click', function (e) {
    var b = e.target.closest('[data-n]'); if (!b) return; st.n = +b.dataset.n; save();
    $('lengths').querySelectorAll('[data-n]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
  });
  $('start').addEventListener('click', function () { begin(C.round(pool(), st.n)); });
  $('redo').addEventListener('click', function () {
    var all = C.questions(bank, ['1', '2', '3', '4', 'F'], 'mixed'), list = C.round(all, 0, st.missed);
    if (!list.length) { st.missed = {}; save(); status(); return; }
    begin(list.slice(0, 40));
  });

  // ---------- cheat sheet ----------
  function sheet() {
    var ex = st.exams, stems = bank.stems.filter(function (s) { return s.exams.some(function (e) { return ex.indexOf(e) >= 0; }); });
    var h = '<h3>Endings to know</h3><div class="tbl"><table><thead><tr><th>Ending</th><th>Group</th><th>Examples</th><th>Remember</th></tr></thead><tbody>' +
      stems.map(function (s) { return '<tr><td class="end">' + esc(s.end) + '</td><td>' + esc(s.group) + '</td><td>' + esc(s.ex) + '</td><td>' + esc(s.tip) + '</td></tr>'; }).join('') + '</tbody></table></div>';
    h += '<h3>Endings that trick you</h3><ul class="traps">' + bank.traps.map(function (t) { return '<li><b>' + esc(t.drug) + '</b> looks like “' + esc(t.looks) + '” but is ' + esc(t.is) + '.</li>'; }).join('') + '</ul>';
    var plain = C.noEnding(bank, ex), byG = {};
    plain.forEach(function (d) { (byG[d.g] = byG[d.g] || []).push(d); });
    h += '<h3>Know these by name <small>(no helpful ending)</small></h3><p class="muted">These do not follow a class ending, so learn the name with its group and its one key fact.</p>' +
      Object.keys(byG).map(function (gid) {
        var g = bank.groups.find(function (x) { return x.id === gid; });
        return '<div class="plain"><div class="plain-g">' + esc(g.name) + ' <small>' + esc(examName(g.exam)) + '</small></div>' + byG[gid].map(function (d) {
          return '<p><b>' + esc(d.n) + '</b>' + (d.fact ? ' · ' + esc(d.fact) : d.use ? ' · ' + esc(d.use) : '') + '</p>';
        }).join('') + '</div>';
      }).join('');
    $('sheet-body').innerHTML = h;
  }
  function examName(e) { var x = C.EXAMS.find(function (k) { return k[0] === e; }); return x ? x[1] : ''; }

  // ---------- quiz ----------
  function begin(list) {
    run = { list: list, i: 0, picked: null, right: 0, misses: [] };
    $('setup').hidden = true; $('quiz').hidden = false; show(); window.scrollTo(0, 0);
  }
  function modeName(m) { return (C.MODES.find(function (x) { return x[0] === m; }) || [])[1]; }
  function show() {
    if (run.i >= run.list.length) return done();
    var q = run.list[run.i], ans = run.picked !== null;
    var h = '<div class="qtop"><span>Question ' + (run.i + 1) + ' of ' + run.list.length + '</span><span>' + esc(modeName(q.mode)) + '</span></div>' +
      '<h2 class="stem">' + md(q.prompt) + '</h2><div class="opts">' + q.opts.map(function (o, k) {
        var cls = ans ? (k === q.a ? ' right' : k === run.picked ? ' wrong' : '') : '';
        return '<button type="button" class="opt' + cls + '" data-k="' + k + '"' + (ans ? ' disabled' : '') + '>' + esc(o) + '</button>';
      }).join('') + '</div>';
    if (ans) h += '<div class="verdict" role="status">' + (run.picked === q.a ? 'Correct' : 'Not quite: the answer is “' + esc(q.opts[q.a]) + '”') + '</div>' + explain(q) +
      '<button type="button" class="btn btn-primary next" id="next">' + (run.i + 1 < run.list.length ? 'Next →' : 'See results') + '</button>';
    h += '<button type="button" class="link" id="quit">End this round</button>';
    $('quiz').innerHTML = h;
    if (ans) $('next').focus();
  }
  function endingLine(e) {
    if (!e) return '<p class="end-line plain-end">No class ending: learn this one by name.</p>';
    if (e.trap) return '<p class="end-line trap-end">Trap: looks like “' + esc(e.trap.looks) + '” but is ' + esc(e.trap.is) + '.</p>';
    return '<p class="end-line">Ending <b>' + esc(e.stem.end) + '</b> → ' + esc(e.stem.group) + '.</p>';
  }
  function explain(q) {
    var i = q.info, h = '<div class="why">';
    if (i.kind === 'stem') h += '<p><b>' + esc(i.stem.end) + '</b> → ' + esc(i.stem.group) + '</p><p>Examples: ' + esc(i.stem.ex) + '</p><p class="tip">' + esc(i.stem.tip) + '</p>';
    else if (i.kind === 'trap') h += '<p><b>' + esc(i.trap.drug) + '</b> is ' + esc(i.trap.is) + ', even though it looks like “' + esc(i.trap.looks) + '.”</p>';
    else if (i.kind === 'group') {
      var g = i.group; h += '<p class="gname">' + esc(g.name) + '</p>' + [['Used for', g.use], ['How it works', g.how], ['Big risks', g.effects], ['Nurse monitors', g.monitor]].filter(function (x) { return x[1]; }).map(function (x) { return '<p><b>' + x[0] + ':</b> ' + esc(x[1]) + '</p>'; }).join('') +
        (i.drugs.length ? '<p><b>Drugs in this group:</b> ' + i.drugs.map(function (d) { return esc(d.n); }).join(', ') + '</p>' : '');
    } else {
      var d = i.drug;
      h += '<p class="gname">' + esc(d.n) + ' <small>· ' + esc(i.group.name) + '</small></p>' + endingLine(i.ending) +
        (d.use ? '<p><b>Used for:</b> ' + esc(d.use) + '</p>' : '') + (d.fact ? '<p><b>Key fact:</b> ' + esc(d.fact) + '</p>' : '') +
        (d.trap ? '<p><b>Common mistake:</b> ' + esc(d.trap) + '</p>' : '') + (d.anchor ? '<p class="tip">' + esc(d.anchor) + '</p>' : '');
    }
    return h + '</div>';
  }
  $('quiz').addEventListener('click', function (e) {
    var b = e.target.closest('[data-k]'), q = run && run.list[run.i];
    if (b && q && run.picked === null) {
      run.picked = +b.dataset.k;
      if (run.picked === q.a) { run.right++; delete st.missed[q.key]; } else { run.misses.push(q); st.missed[q.key] = 1; }
      save(); show(); return;
    }
    if (e.target.id === 'next') { run.i++; run.picked = null; show(); window.scrollTo(0, 0); }
    if (e.target.id === 'quit') done();
    if (e.target.id === 'again') { $('quiz').hidden = true; $('setup').hidden = false; run = null; status(); }
    if (e.target.id === 'redo-now') $('redo').click();
  });
  function done() {
    var n = run.i + (run.picked !== null ? 1 : 0), pct = n ? Math.round(run.right / n * 100) : 0;
    $('quiz').innerHTML = '<h2>' + run.right + ' of ' + n + ' correct' + (n ? ' · ' + pct + '%' : '') + '</h2>' +
      (run.misses.length ? '<h3>To review</h3><ul class="miss">' + run.misses.map(function (q) { return '<li>' + md(q.prompt) + '<br><b>→ ' + esc(q.opts[q.a]) + '</b></li>'; }).join('') + '</ul>' +
        '<p class="muted">Misses are saved. “Redo my misses” brings them back until you get them right.</p><button type="button" class="btn btn-primary" id="redo-now">Redo my misses now</button>' : '<p>No misses this round.</p>') +
      ' <button type="button" class="btn" id="again">Choose another round</button>';
    run.i = run.list.length;
  }

  setup();
})();
