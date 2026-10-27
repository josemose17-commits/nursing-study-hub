(function () {
  'use strict';
  const data = window.EXAM3_LESSONS, core = window.Exam3Learn, el = document.getElementById('learn');
  if (!data || !core) { el.innerHTML = '<p>Lessons could not load. Refresh, or <a href="Exam 3 Map.html">open the notes</a>.</p>'; return; }
  const KEY = 'e3-learn-v1', lessons = data.lessons;
  let state, memoryOnly = false, filter = 'all';
  try { state = core.restore(localStorage.getItem(KEY), lessons); } catch (_) { state = core.blank(); memoryOnly = true; }
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
  const button = (id, text, secondary = false) => '<button type="button" class="btn btn-' + (secondary ? 'secondary' : 'primary') + '" data-action="' + id + '">' + esc(text) + '</button>';
  const link = (href, text) => '<a target="_blank" rel="noopener" href="' + esc(href) + '">' + esc(text) + ' ↗</a>';
  const date = at => new Date(at).toLocaleString([], { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (_) { memoryOnly = true; } }
  function missedTopics() {
    try { const m = JSON.parse(localStorage.getItem('e3-mastery-v3') || 'null'); return m && m.report && Array.isArray(m.report.recs) ? m.report.recs.filter(r => r.e < 1).flatMap(r => r.topics || []) : []; } catch (_) { return []; }
  }
  function resources(l) {
    return '<div class="resources">' + l.notes.map((n, i) => link('Exam 3 Map.html#' + n, i ? 'More source notes' : 'Full explanation on the Map')).join('') +
      (l.drugs ? link('Exam 3 Drug Cards.dc.html', 'Drug cards') : '') +
      (l.caseId ? link('Exam 3 Mastery Loop.dc.html#case=' + l.caseId, 'Six-step case') : '') + '</div><p class="source">Source: ' + esc(l.source) + '</p>' +
      (l.update === 'crisis' ? '<p class="source">' + link('https://link.springer.com/article/10.1007/s00125-024-06183-8', '2024 adult consensus: current safety update') + '</p>' : '') +
      (l.update === 'hpylori' ? '<p class="source">' + link('https://gi.org/journals-publications/ebgi/schoenfeld_sep2024/', 'ACG 2024 treatment update') + '</p>' : '');
  }
  function status(l) {
    const p = state.lessons[l.id] || {};
    if (!p.completedAt) return p.understoodAt ? 'Explanation read · recall and application pending' : 'Not started';
    return (p.recalled ? 'Recall self-check: met' : 'Recall self-check: revisit') + ' · last decision: ' + (p.correct ? 'correct' : 'missed') +
      ' · ' + (p.delayedPasses || 0) + ' due reviews passed · ' + (p.dueAt <= Date.now() ? 'review due' : 'review ' + date(p.dueAt));
  }
  function header(l) {
    return '<div class="row between"><span class="kicker">Exam 3 · Ch ' + l.ch + '</span><button type="button" class="plain" data-action="home">Pause &amp; all lessons</button></div><h1 tabindex="-1">' + esc(l.title) + '</h1>';
  }
  function home() {
    const rec = core.recommend(state, lessons, data.weights, Date.now(), missedTopics());
    const t = state.session, resume = t && t.stage !== 'done' && lessons.find(l => l.id === t.id);
    const all = lessons.map(l => state.lessons[l.id] || {}), completed = all.filter(p => p.completedAt).length;
    const due = all.filter(p => p.dueAt <= Date.now()).length;
    const featured = resume || (rec && rec.lesson);
    el.innerHTML = '<span class="kicker">Exam 3 · Guided study</span><h1 tabindex="-1">One idea.<br>Then use it.</h1><p class="muted">Understand the why, recall it before looking, and make a patient decision. Come back when review is due.</p>' +
      (featured ? '<section class="card featured"><span class="kicker">' + (resume ? 'Pick up where you paused' : due ? 'Review next' : 'Study next') + '</span><h2>' + esc(featured.title) + '</h2><p class="muted">' + (resume ? 'Your response and place are saved in this browser.' : esc(rec.reason)) + '</p><div class="row"><button type="button" class="btn btn-primary" data-lesson="' + featured.id + '">' + (resume ? 'Resume lesson' : rec.early ? 'Practise early' : 'Begin lesson') + '</button><span class="source">Ch ' + featured.ch + ' · about 8–12 min</span></div></section>' : '') +
      '<div class="stats"><div><b>' + all.filter(p => p.understoodAt).length + '</b><span>explanations read</span></div><div><b>' + all.filter(p => p.recalled).length + '</b><span>recall self-checks met</span></div><div><b>' + all.filter(p => p.correct).length + '</b><span>latest decisions correct</span></div><div><b>' + all.filter(p => p.delayedPasses).length + '</b><span>lessons with a due review passed</span></div></div>' +
      '<p class="source">' + completed + ' of ' + lessons.length + ' core lessons attempted · ' + due + ' reviews due. Reading and self-checks do not prove mastery. A due review means you returned after the scheduled interval; retries can be due in 10 minutes.</p>' +
      '<div class="row between"><h2>Choose a lesson</h2><label class="source">Show <select id="lesson-filter"><option value="all">All chapters</option>' + Object.keys(data.weights).map(ch => '<option value="' + ch + '"' + (filter === ch ? ' selected' : '') + '>Ch ' + ch + ' · ' + data.weights[ch] + '/60 exam questions</option>').join('') + '</select></label></div>' +
      '<ul class="catalog">' + lessons.filter(l => filter === 'all' || l.ch === filter).map(l => '<li><span class="kicker">Ch ' + l.ch + '</span><br><button type="button" data-lesson="' + l.id + '">' + esc(l.title) + ' →</button><span class="source">' + esc(status(l)) + '</span></li>').join('') + '</ul>' +
      '<details><summary>How this study path works</summary><p>These focused lessons cover the 17 assigned topic groups. Use their source links for the full chapter notes, tables, drugs and ADPIE. This path is a core review, not a replacement for every detail in the assigned chapters.</p><p>After a successful first attempt, review is due in 1 day. Successful due reviews schedule 1, then 3, then 7 days. A missed decision or recall checkpoint schedules a 10-minute retry. Early practice does not earn a due-review pass or postpone review. This is a simple study schedule, not a prediction of your exam score.</p><p>Recommendations put due reviews first, then balance prerequisite lessons, missed topics in your last Mastery report, and chapter weights (56: 20; 46, 47, 55: 10 each; 45, 53: 5 each). You can choose any lesson.</p><p>Progress is kept in this browser and included in Home’s Save progress file. It does not sync by itself. Return here to see due reviews; no notifications are sent.</p></details>' +
      '<div class="resources"><a href="Word Parts.html">Prefixes, roots, suffixes &amp; drug stems</a><a href="Exam 3 Map.html">Map &amp; source notes</a><a href="Exam 3 Route.html">Daily route</a><a href="Exam 3 Mastery Loop.dc.html">Mixed Mastery test</a></div>';
  }
  function session(l) {
    const t = state.session, q = l.questions[t.variant];
    let body = '';
    if (t.stage === 'understand') {
      body = '<h2>Understand the why</h2>' + l.why.map(p => '<p>' + esc(p) + '</p>').join('') + resources(l) + button('read', 'Close the explanation & recall');
    } else if (t.stage === 'recall') {
      body = '<h2>Recall before looking</h2><p>Without your notes, explain these points aloud or type your answer.</p><ol>' + l.checks.map(c => '<li>' + esc(c) + '</li>').join('') + '</ol><label for="recall-draft" class="source">Your explanation (optional; saved here)</label><textarea id="recall-draft" placeholder="What do you remember, and why?">' + esc(t.draft) + '</textarea><p class="source">Self-assessment: your writing is not automatically graded.</p>' +
        (!t.revealed ? button('reveal', 'Compare with the explanation') : '<section class="card"><h3>Compare your reasoning</h3>' + l.why.map(p => '<p>' + esc(p) + '</p>').join('') + '<p>Check only the points you recalled correctly <strong>before</strong> revealing this explanation. Leave missed points unchecked.</p>' + l.checks.map((c, i) => '<label class="check"><input type="checkbox" data-check="' + i + '"' + (t.checks[i] ? ' checked' : '') + '><span>' + esc(c) + '</span></label>').join('') + '</section>' + button('apply', 'Try a patient decision'));
    } else if (t.stage === 'apply') {
      body = '<h2>Make a patient decision</h2><p class="source">' + (q.a.length > 1 ? 'Select all correct answers. This checkpoint requires the complete correct set.' : 'Choose one answer.') + '</p>' +
        (q.ex || []).map(x => '<section class="notice"><h3>' + esc(x.h) + '</h3>' + (x.lines || []).map(p => '<p>' + esc(p) + '</p>').join('') + (x.table ? '<div class="table-wrap"><table>' + x.table.map((r, i) => '<tr>' + r.map(c => '<' + (i ? 'td' : 'th') + '>' + esc(c) + '</' + (i ? 'td' : 'th') + '>').join('') + '</tr>').join('') + '</table></div>' : '') + '</section>').join('') +
        '<fieldset style="border:0;padding:0;margin:16px 0"><legend>' + esc(q.q) + '</legend>' + t.order.map(i => '<label class="option"><input name="decision" type="' + (q.a.length > 1 ? 'checkbox' : 'radio') + '" data-pick="' + i + '"' + (t.picks.includes(i) ? ' checked' : '') + '><span>' + esc(q.o[i]) + '</span></label>').join('') + '</fieldset><button type="button" class="btn btn-primary" data-action="submit"' + (!t.picks.length ? ' disabled' : '') + '>Check my decision</button>';
    } else if (t.stage === 'feedback') {
      body = '<h2>' + (t.correct ? 'Your decision is correct.' : 'Revisit this decision.') + '</h2><p class="muted">Recall self-check: ' + (t.recalled ? 'all checkpoints met' : 'one or more points need another try') + '. ' + (t.eligible ? 'This was a scheduled review.' : 'This was practice, not a delayed retention check.') + '</p>' +
        q.o.map((o, i) => '<div class="feedback' + (q.a.includes(i) ? '' : ' bad') + '"><b>' + (t.picks.includes(i) ? 'You chose · ' : '') + (q.a.includes(i) ? 'Correct option: ' : 'Other option: ') + esc(o) + '</b><span>' + esc(q.r[i]) + '</span></div>').join('') +
        (q.phys ? '<p><strong>Why:</strong> ' + esc(q.phys) + '</p>' : '') + '<details' + (!t.correct || !t.recalled ? ' open' : '') + '><summary>Return to the explanation</summary>' + l.why.map(p => '<p>' + esc(p) + '</p>').join('') + resources(l) + '</details>' + button('done', 'Save & see what comes next');
    } else {
      const p = state.lessons[l.id];
      const rec = core.recommend(state, lessons, data.weights, Date.now(), missedTopics());
      body = '<h2>Session saved.</h2><p>' + esc(status(l)) + '</p><p class="notice">' + (p.needsReview ? 'A missed point is scheduled again in about 10 minutes. Work on another lesson while it settles.' : 'Next review: ' + esc(date(p.dueAt)) + '. Return then to recall the explanation and answer a different checkpoint.') + '</p>' +
        '<div class="row">' + (rec ? '<button type="button" class="btn btn-primary" data-lesson="' + rec.lesson.id + '">' + (rec.early ? 'Practise early: ' : 'Next: ') + esc(rec.lesson.title) + '</button>' : '') + button('home', 'All lessons', true) + '</div>' + resources(l) + '<p class="source">Two application variants per lesson rotate between attempts. Repeated questions are practice; a correct checkpoint alone does not establish mastery.</p>';
    }
    el.innerHTML = header(l) + '<ol class="steps">' + ['understand','recall','apply','feedback','done'].map((step, i) => '<li' + (t.stage === step ? ' aria-current="step"' : '') + '>' + (i + 1) + ' · ' + ['Understand','Recall','Apply','Feedback','Review later'][i] + '</li>').join('') + '</ol><section class="card">' + body + '</section>';
  }
  function render(focus) {
    let id; try { id = decodeURIComponent(location.hash.slice(1)); } catch (_) { id = ''; }
    const l = lessons.find(x => x.id === id);
    if (l) { if (!state.session || state.session.id !== l.id) core.start(state, l, Date.now()); save(); session(l); } else home();
    if (memoryOnly) el.insertAdjacentHTML('afterbegin', '<p role="status" class="notice">Progress cannot be saved in this browser. Keep this page open; changes may be lost on reload.</p>');
    if (focus) { const h = el.querySelector('h1'); if (h) h.focus(); window.scrollTo(0, 0); }
  }
  function go(id) { history.pushState(null, '', location.pathname + location.search + (id ? '#' + id : '')); render(true); }
  el.addEventListener('click', e => {
    const launch = e.target.closest('[data-lesson]');
    if (launch) { const id = launch.dataset.lesson; if (state.session && state.session.id === id && state.session.stage === 'done') state.session = null; go(id); return; }
    const b = e.target.closest('[data-action]'); if (!b) return;
    const a = b.dataset.action, t = state.session, l = t && lessons.find(x => x.id === t.id);
    if (a === 'home') { save(); go(''); return; }
    if (!l) return;
    if (a === 'read' && t.stage === 'understand') { const p = state.lessons[l.id] || (state.lessons[l.id] = {}); p.understoodAt = Date.now(); t.stage = 'recall'; }
    if (a === 'reveal' && t.stage === 'recall') t.revealed = true;
    if (a === 'apply' && t.stage === 'recall' && t.revealed) t.stage = 'apply';
    if (a === 'submit' && t.stage === 'apply' && t.picks.length) core.finish(state, l, Date.now());
    if (a === 'done' && t.stage === 'feedback') t.stage = 'done';
    save(); render(true);
  });
  el.addEventListener('input', e => { if (e.target.id === 'recall-draft' && state.session) { state.session.draft = e.target.value; save(); } });
  el.addEventListener('change', e => {
    if (e.target.id === 'lesson-filter') { filter = e.target.value; home(); return; }
    const t = state.session; if (!t) return;
    if (e.target.matches('[data-check]')) t.checks[+e.target.dataset.check] = e.target.checked;
    if (e.target.matches('[data-pick]')) {
      const l = lessons.find(x => x.id === t.id), i = +e.target.dataset.pick;
      t.picks = l.questions[t.variant].a.length > 1 ? (e.target.checked ? [...new Set(t.picks.concat(i))] : t.picks.filter(n => n !== i)) : [i];
      el.querySelector('[data-action="submit"]').disabled = !t.picks.length;
    }
    save();
  });
  window.addEventListener('popstate', () => render(true));
  window.addEventListener('hashchange', () => render(true));
  render(false);
})();
