(function () {
  'use strict';
  const D = window.NRS114_SKILLS, core = window.LabPracticeCore.create(D);
  const KEY = 'clin-skill-trainer-v1', app = document.getElementById('skill-practice'), manual = document.getElementById('manual-records');
  const esc = v => String(v == null ? '' : v).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  let raw; try { raw = JSON.parse(localStorage.getItem(KEY)); } catch (_) {}
  let state = core.restore(raw), includeResolved = false, rehearsal = null;
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); document.getElementById('sp-save-status').textContent = ''; }
    catch (_) { document.getElementById('sp-save-status').textContent = 'This browser could not save practice progress. Keep this page open; export your progress when storage is available.'; }
  }
  function button(text, action, more, disabled) { return '<button type="button" class="sp-button" data-action="' + action + '" ' + (more || '') + (disabled ? ' disabled' : '') + '>' + esc(text) + '</button>'; }
  const link = (text, hash) => '<a class="sp-button" href="' + esc(hash) + '">' + esc(text) + '</a>';
  const list = a => '<ul>' + a.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>';
  const sources = ids => '<ul>' + ids.map(id => '<li><a href="' + esc(D.refs[id].url) + '" target="_blank" rel="noopener">' + esc(D.refs[id].title) + '</a></li>').join('') + '</ul>';
  const selected = () => state.selected;
  function go(hash) { if (location.hash === hash) render(true); else location.hash = hash; }
  function wrap(title, content, back) {
    app.innerHTML = (back ? '<div class="sp-row sp-no-print">' + link('← Practice home', '#practice') + '</div>' : '') + '<header><div class="kicker">NRS 114 · skills lab</div><h1 tabindex="-1">' + esc(title) + '</h1></header>' + content;
  }
  function home() {
    const open = core.bank(state, selected(), false).length, all = core.bank(state, selected(), true).length;
    const active = state.session && !state.session.complete;
    wrap('Practice your check-offs', '<p class="lead">Study the steps, explain your decisions, then rehearse with the actual lab equipment. Five test-off groups in your syllabus are organized into seven practice stations.</p>' +
      '<p class="sp-note">Practice scores and self-ratings are separate from your instructor’s test-off record. Safety checkpoints are study priorities; faculty determines the grading rubric.</p>' +
      (active ? '<section class="sp-panel"><h2>Continue your round</h2><p>' + core.score(state).checked + ' of ' + core.score(state).total + ' questions checked. Your answers and position are saved.</p>' + link('Resume round', '#practice-test') + '</section>' : '') +
      '<section class="sp-panel"><h2>Choose your stations</h2><p class="sp-dim">Select skills for a mixed round or for reviewing misses. You can study or rehearse any station.</p><div class="sp-row">' + button('Select all', 'select-all') + button('Clear selection', 'select-none') + '</div><div class="sp-grid" style="margin-top:12px">' + D.stations.map(st => {
        const n = core.bank(state, [st.id], false).length;
        const rated = st.steps.filter(step => state.rehearsal[step.id] && state.rehearsal[step.id].rating).length;
        return '<article class="sp-card"><label><input type="checkbox" data-station="' + st.id + '"' + (selected().includes(st.id) ? ' checked' : '') + '><span>' + esc(st.title) + '</span></label><p class="sp-dim">Week ' + st.week + ' · ' + st.steps.length + ' checkpoints · ' + st.questions.length + ' questions</p><p class="sp-dim">' + n + ' open misses · ' + rated + '/' + st.steps.length + ' steps self-rated</p><div class="sp-row">' + link('Study guide', '#practice-' + st.id) + link('Rehearse', '#practice-rehearse-' + st.id) + '</div></article>';
      }).join('') + '</div></section>' +
      '<section class="sp-panel" id="practice-round"><h2>Test what you can do</h2><p>New rounds mix decisions, safety problems, select-all questions, and sequencing. Short rounds include every selected station.</p><div class="sp-row">' + button(active ? 'Start new short round' : 'Start short round', 'start-short', '', !selected().length) + button(active ? 'Start new full round' : 'Test all selected questions', 'start-all', '', !selected().length) + '</div><p class="sp-dim">Short: up to 14 questions. Full: 6 per selected station. Select-all and sequence questions require the complete correct response for this practice score.</p><h3>Redo misses from every attempt</h3><p>' + open + ' open misses · ' + (all - open) + ' previously corrected, in selected stations.</p><label class="sp-row"><input type="checkbox" id="sp-include-resolved"' + (includeResolved ? ' checked' : '') + '> Include previously corrected misses</label><p>' + button('Redo selected misses', 'start-misses', '', !(includeResolved ? all : open)) + '</p><p class="sp-dim">A correct retry marks a miss corrected and keeps it available. A future wrong answer reopens it.</p></section>' +
      '<section class="sp-panel"><h2>Rehearse for the practical</h2><ol><li>Read the guide and resolve the equipment/rubric questions below.</li><li>Open <b>Rehearse</b>. Before revealing each checkpoint, say and demonstrate the action and reason.</li><li>Compare, then mark independent, prompted, or missed. Repeat missed or prompted steps in supervised lab practice.</li><li>Run a mixed self-test. Review the rationale for each option and redo your saved misses.</li></ol><p class="sp-note">Knowing an answer does not demonstrate sterile technique, a secure airway, or correct pump use. Use the school’s supervised lab and faculty validation.</p></section>' +
      historyHTML() + sourceHTML());
  }
  function historyHTML() {
    if (!state.history.length) return '';
    return '<details><summary>Recent completed rounds (' + state.history.length + ')</summary><ul>' + state.history.slice().reverse().slice(0, 10).map(h => '<li>' + esc(new Date(h.at).toLocaleDateString()) + ': ' + h.right + '/' + h.total + ' · ' + (h.mode === 'misses' ? 'Miss review' : 'Mixed practice') + ' · ' + h.stations.map(id => esc(core.stations[id].title)).join(', ') + '</li>').join('') + '</ul><p class="sp-dim">History keeps the latest 50 completed rounds. The cumulative miss bank is retained separately.</p></details>';
  }
  function sourceHTML() {
    return '<section class="sp-panel"><h2>What is actually tested?</h2><p class="sp-dim">Scope comes from your uploaded syllabus, PDF pp. 15–18; not every skill in the whole-program manual is a named NRS 114 test-off.</p><div class="sp-table-wrap"><table><thead><tr><th>Week</th><th>Named test-off group</th><th>Practice stations / source</th></tr></thead><tbody>' + D.groups.map(g => '<tr><td>' + g.week + '</td><td>' + esc(g.title) + '</td><td>' + g.stations.map(id => '<a href="#practice-' + id + '">' + esc(core.stations[id].title) + '</a>').join('<br>') + '<br>Syllabus PDF p. ' + g.syllabusPage + (g.note ? '<p>' + esc(g.note) + '</p>' : '') + '</td></tr>').join('') + '</tbody></table></div>' +
      '<details id="practice-clarifications"><summary>Checklist corrections and questions for faculty</summary><p>Use the current approved safe procedure and actual device instructions. Resolve these discrepancies with faculty before the evaluation; an unsafe printed step is not made safe by being on a checklist.</p>' + D.discrepancies.map(d => '<article class="sp-card" style="margin-top:12px"><h3>' + esc(d.title) + '</h3><p><b>Printed checklist:</b> ' + esc(d.manual) + '</p><p><b>Practice safely:</b> ' + esc(d.practice) + '</p><p><b>Ask faculty:</b> ' + esc(d.ask) + '</p>' + (d.refs.length ? sources(d.refs) : '') + '</article>').join('') + '</details>' +
      '<details><summary>Other syllabus labs and supporting checklists</summary><p>These are lab/practice topics, not additional named test-offs inferred by this app. Their older supporting summaries have not all received this station-by-station review.</p><ul>' + D.supporting.map(l => '<li><b>Week ' + l.week + ':</b> ' + esc(l.title) + ' (syllabus PDF p. ' + l.page + '). ' + l.links.map(a => '<a href="' + esc(a[0]) + '">' + esc(a[1]) + '</a>').join(' · ') + '</li>').join('') + '</ul></details>' +
      '<details><summary>Sources and limits · checked ' + D.checked + '</summary><p>' + esc(D.courseSources.syllabus) + '</p><p>' + esc(D.courseSources.manual) + '</p><p>These guides are original study explanations supplemented by the primary textbooks and clinical/manufacturer references below. The assigned Ignatavicius 11th edition raw chapter text was not available in this checkout; no passage from it is claimed as verified here. Patient orders, local policy, actual equipment instructions, and the current evaluator rubric still need to be supplied for the lab scenario.</p>' + sources(Object.keys(D.refs)) + '</details></section>';
  }
  function guide(st) {
    wrap(st.title, '<section class="sp-panel"><p class="sp-pill">Week ' + st.week + ' · Manual PDF pp. ' + esc(st.pages) + '</p><p>' + esc(st.goal) + '</p><p class="sp-note">' + esc(st.status) + '</p><div class="sp-row sp-no-print">' + link('Rehearse without answers', '#practice-rehearse-' + st.id) + button('Quiz this station', 'quiz-station', 'data-id="' + st.id + '"') + link('Practice dates / original record', '#' + st.manualId) + '</div><h3>Gather your supplies</h3>' + list(st.supplies) + '<h3>Stop and assess / get help for</h3>' + list(st.stops) + '</section>' +
      '<section class="sp-panel"><h2>Procedure and reasoning</h2><p class="sp-note">For routine care: verify the order/plan and two identifiers, explain, provide privacy, clean hands, and use the required PPE/aseptic technique. Recheck medication labels against the MAR during selection, preparation and immediately before administration. Inspect expiry and product integrity. Finish with reassessment, safe bed position/call light, hand hygiene and actual documentation. In an emergency, immediate stabilization takes priority.</p><p class="sp-dim">Apply the scenario’s monitoring and device instructions throughout. Safety checkpoints are not an official automatic-fail list.</p><ol class="sp-steps">' + st.steps.map(step => '<li><h3>' + esc(step.title) + '</h3>' + (step.safety ? '<span class="sp-pill">Safety checkpoint</span>' : '') + '<p>' + esc(step.action) + '</p><details><summary>Why this matters</summary><p>' + esc(step.why) + '</p></details></li>').join('') + '</ol></section>' +
      '<section class="sp-panel"><h2>Document and explain</h2><p>' + esc(st.chart) + '</p><h3>Terms used in this skill</h3><dl>' + st.terms.map(t => '<dt><b>' + esc(t[0]) + '</b></dt><dd>' + esc(t[1]) + '</dd>').join('') + '</dl><details><summary>References and checklist location</summary><p>Syllabus PDF p. ' + st.syllabusPage + '; manual PDF pp. ' + esc(st.pages) + '.</p>' + sources(st.refs) + '</details></section>', true);
  }
  function rehearse(st) {
    if (!rehearsal || rehearsal.station !== st.id) rehearsal = { station: st.id, index: 0, revealed: false };
    const step = st.steps[rehearsal.index], saved = state.rehearsal[step.id] || {};
    wrap('Rehearse: ' + st.title, '<section class="sp-panel"><p class="sp-dim">Checkpoint ' + (rehearsal.index + 1) + ' of ' + st.steps.length + ' · Say it, demonstrate it, explain why.</p><progress value="' + (rehearsal.index + 1) + '" max="' + st.steps.length + '" aria-label="Rehearsal position"></progress><h2>' + esc(step.title) + '</h2><p>What will you do? Include safety checks, what would make you stop, and the reason for your action.</p><label for="sp-recall">Your recall notes (optional, saved on this device)</label><textarea id="sp-recall" maxlength="1600" placeholder="Say or demonstrate the action first, then jot down what you remembered.">' + esc(saved.note || '') + '</textarea>' +
      (!rehearsal.revealed ? button('Compare with the guide', 'reveal') : '<div class="sp-reveal"><h3>Compare your action</h3><p>' + esc(step.action) + '</p><p><b>Why:</b> ' + esc(step.why) + '</p></div><p>How did you do before revealing the answer?</p><div class="sp-row">' + ['independent', 'prompted', 'missed'].map(r => button(r[0].toUpperCase() + r.slice(1), 'rate', 'data-rating="' + r + '" aria-pressed="' + (saved.rating === r) + '"')).join('') + '</div>') +
      '<p class="sp-dim">' + (saved.rating ? 'Last self-rating: ' + esc(saved.rating) + '. This is not faculty validation.' : 'Not self-rated yet.') + '</p><div class="sp-row">' + button('Previous', 'rehearse-prev', '', rehearsal.index === 0) + (rehearsal.index < st.steps.length - 1 ? button('Next checkpoint', 'rehearse-next') : link('Finish rehearsal', '#practice')) + link('Open complete guide', '#practice-' + st.id) + '</div></section>' +
      '<section class="sp-panel"><h2>Your rehearsal record</h2><ul>' + st.steps.map((s, i) => '<li>' + button((i + 1) + '. ' + s.title, 'rehearse-jump', 'data-index="' + i + '"') + ' <span class="sp-dim">' + esc((state.rehearsal[s.id] || {}).rating || 'Not rated') + '</span></li>').join('') + '</ul></section>', true);
  }
  function feedback(q, item) {
    if (!item.checked) return '';
    return '<section class="sp-feedback" aria-live="polite"><h3 class="' + (item.correct ? 'sp-correct' : 'sp-retry') + '">' + (item.correct ? 'Correct' : 'Review and retry') + '</h3>' + (q.kind === 'order' ? '<p><b>Correct checkpoint order:</b></p><ol>' + q.items.map(x => '<li>' + esc(x) + '</li>').join('') + '</ol><p>' + esc(q.why) + '</p>' : '<ul>' + q.options.map(o => '<li><b>' + (o.correct ? 'Correct action' : 'Incorrect action') + (item.answer.includes(o.id) ? ' · You selected' : '') + ':</b> ' + esc(o.text) + '<br>' + esc(o.why) + '</li>').join('') + '</ul>') + '<p>' + (item.correct ? 'Previously corrected misses stay available under “Include previously corrected misses.”' : 'Saved in your cumulative misses. You can retry it from any future round.') + '</p><details><summary>Check the sources</summary>' + sources(q.refs) + '</details></section>';
  }
  function quiz() {
    if (!state.session) { go('#practice'); return; }
    const se = state.session, sc = core.score(state);
    if (se.complete) {
      const byStation = se.stations.map(id => { const a = se.items.filter(i => core.questions[i.qid].station === id); return a.length ? '<li>' + esc(core.stations[id].title) + ': ' + a.filter(i => i.correct).length + '/' + a.length + '</li>' : ''; }).join('');
      wrap('Round complete', '<section class="sp-panel"><h2>' + sc.right + ' of ' + sc.total + ' correct</h2><p>Knowledge practice is one part of preparation. Rehearse the physical procedure and obtain the required faculty validation.</p><ul>' + byStation + '</ul><div class="sp-row">' + button('Redo open misses from these stations', 'retry-round', '', !core.bank(state, se.stations, false).length) + link('Choose stations / all past misses', '#practice') + '</div></section>', true); return;
    }
    const item = core.current(state), q = core.questions[item.qid], st = core.stations[q.station];
    const responses = q.kind === 'order' ? '<p class="sp-dim">Use Up/Down to move checkpoints. The scenario leaves out steps that are already complete.</p><ol class="sp-order">' + item.order.map((id, i) => '<li><b>' + (i + 1) + '</b><span>' + esc(q.items[Number(id)]) + '</span><div class="sp-order-controls">' + button('↑', 'move', 'data-index="' + i + '" data-delta="-1" aria-label="Move checkpoint ' + (i + 1) + ' up"', item.checked || i === 0) + button('↓', 'move', 'data-index="' + i + '" data-delta="1" aria-label="Move checkpoint ' + (i + 1) + ' down"', item.checked || i === item.order.length - 1) + '</div></li>').join('') + '</ol>' : '<p class="sp-dim">' + (q.kind === 'multi' ? 'Select all appropriate actions.' : 'Choose one answer.') + '</p>' + item.order.map(id => { const o = q.options.find(x => x.id === id); return '<label class="sp-option"><input type="' + (q.kind === 'multi' ? 'checkbox' : 'radio') + '" name="sp-answer" value="' + esc(id) + '"' + (item.answer.includes(id) ? ' checked' : '') + (item.checked ? ' disabled' : '') + '><span>' + esc(o.text) + '</span></label>'; }).join('');
    wrap('Test your decisions', '<section class="sp-panel"><p class="sp-dim">Question ' + (se.index + 1) + ' of ' + sc.total + ' · ' + esc(st.title) + '</p><progress max="' + sc.total + '" value="' + sc.checked + '" aria-label="Questions checked"></progress><p>' + esc(q.scene) + '</p><fieldset><legend>' + esc(q.ask) + '</legend>' + responses + '</fieldset>' + feedback(q, item) + '<div class="sp-row" style="margin-top:16px">' + (item.checked ? button(se.index === sc.total - 1 ? 'Finish round' : 'Next question', 'next', '') : button('Check answer', 'check', 'id="sp-check"', q.kind !== 'order' && !item.answer.length)) + link('Pause / change stations', '#practice') + '</div></section>' + (item.checked ? '<div class="sp-row">' + link('Review this procedure', '#practice-' + st.id) + '</div>' : ''), true);
  }
  function render(focus) {
    const hash = location.hash.slice(1), isPractice = !hash || hash === 'practice' || hash.startsWith('practice-');
    app.hidden = !isPractice; manual.hidden = isPractice;
    document.querySelectorAll('.sp-tabs a').forEach(a => { if ((a.dataset.view === 'practice') === isPractice) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    if (!isPractice) { const target = document.getElementById(hash); if (target) target.scrollIntoView(); return; }
    if (hash === 'practice-test') quiz();
    else if (hash.startsWith('practice-rehearse-') && core.stations[hash.slice(18)]) rehearse(core.stations[hash.slice(18)]);
    else if (core.stations[hash.slice(9)]) guide(core.stations[hash.slice(9)]);
    else home();
    if (focus) { app.querySelector('h1').focus({ preventScroll: true }); app.scrollIntoView({ block: 'start' }); }
  }
  app.addEventListener('change', e => {
    if (e.target.matches('[data-station]')) { const id = e.target.dataset.station; state.selected = e.target.checked ? state.selected.concat(id) : state.selected.filter(x => x !== id); save(); home(); const el = app.querySelector('[data-station="' + id + '"]'); if (el) el.focus({ preventScroll: true }); }
    else if (e.target.id === 'sp-include-resolved') { includeResolved = e.target.checked; home(); document.getElementById('sp-include-resolved').focus({ preventScroll: true }); }
    else if (e.target.name === 'sp-answer') { core.pick(state, e.target.value); save(); const b = document.getElementById('sp-check'); if (b) b.disabled = !core.current(state).answer.length; }
  });
  app.addEventListener('input', e => {
    if (e.target.id === 'sp-recall' && rehearsal) { const st = core.stations[rehearsal.station], step = st.steps[rehearsal.index], old = state.rehearsal[step.id] || {}; core.rehearse(state, step.id, e.target.value, old.rating); save(); }
  });
  app.addEventListener('click', e => {
    const b = e.target.closest('[data-action]'); if (!b || b.disabled) return;
    const a = b.dataset.action;
    if (a === 'select-all' || a === 'select-none') { state.selected = a === 'select-all' ? D.stations.map(s => s.id) : []; save(); home(); app.querySelector('[data-action="' + a + '"]').focus({ preventScroll: true }); }
    else if (a.startsWith('start-') || a === 'quiz-station' || a === 'retry-round') {
      const stations = a === 'quiz-station' ? [b.dataset.id] : a === 'retry-round' ? state.session.stations : selected();
      const mode = a === 'start-misses' || a === 'retry-round' ? 'misses' : 'mixed';
      if (core.start(state, stations, mode, a === 'start-short' ? 14 : 'all', includeResolved && a !== 'retry-round')) { save(); go('#practice-test'); }
    }
    else if (a === 'check') { if (core.submit(state)) { save(); render(false); app.querySelector('.sp-feedback').setAttribute('tabindex', '-1'); app.querySelector('.sp-feedback').focus({ preventScroll: true }); } }
    else if (a === 'next') { if (core.next(state)) { save(); render(true); } }
    else if (a === 'move') { const at = Number(b.dataset.index), delta = Number(b.dataset.delta); if (core.move(state, at, delta)) { save(); render(false); const target = app.querySelector('[data-action="move"][data-index="' + (at + delta) + '"][data-delta="' + delta + '"]:not(:disabled)') || app.querySelector('[data-action="check"]'); target.focus({ preventScroll: true }); } }
    else if (rehearsal) {
      const st = core.stations[rehearsal.station];
      if (a === 'reveal') rehearsal.revealed = true;
      else if (a === 'rate') { const step = st.steps[rehearsal.index], old = state.rehearsal[step.id] || {}; core.rehearse(state, step.id, old.note, b.dataset.rating); save(); }
      else if (a === 'rehearse-prev' || a === 'rehearse-next' || a === 'rehearse-jump') { rehearsal.index = a === 'rehearse-jump' ? Number(b.dataset.index) : rehearsal.index + (a === 'rehearse-prev' ? -1 : 1); rehearsal.revealed = false; }
      rehearse(st);
      const target = a === 'rate' ? app.querySelector('[data-rating="' + b.dataset.rating + '"]') : app.querySelector(a === 'reveal' ? '.sp-reveal h3' : 'h2'); if (target) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: a === 'rate' }); }
    }
  });
  window.addEventListener('hashchange', () => render(true));
  // E2Sync imports a progress file by reloading the page; clin-* stores are included by nav.js.
  render(false);
})();
