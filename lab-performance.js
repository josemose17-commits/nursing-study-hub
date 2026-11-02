/* Recall-first procedural practice. Free recall is self-reviewed, never AI-graded. */
(function (root) {
  'use strict';
  root.LabPerformance = { create };
  function create(ctx) {
    const { data: D, core, state: S, save, esc, wrap, link, app } = ctx;
    const rows = Object.fromEntries(D.sourceRows.map(r => [r.id,r]));
    let includeCorrected = false;
    const labels = { independent: 'Remembered / demonstrated', prompted: 'Needed a prompt', missed: 'Missed', sequence: 'Unsafe sequence / prerequisite missed', 'not-applicable': 'Not in this scenario' };
    const B = (text, action, attrs = '', disabled = false) => '<button type="button" class="sp-button" data-performance="' + action + '" ' + attrs + (disabled ? ' disabled' : '') + '>' + esc(text) + '</button>';
    function navigate(hash) { if (location.hash === hash) ctx.render(true); else location.hash = hash; }
    function sourceText(step) {
      return step.covers.length ? step.covers.map(id => { const r = rows[id]; return 'p. ' + r.page + ' · ' + r.location; }).join('; ') : 'Added to make the procedure safe/complete; not a separate printed checklist row';
    }
    function explain(step) {
      return '<p>' + esc(step.action) + '</p>' + (step.note ? '<p class="sp-note"><b>Checklist clarification:</b> ' + esc(step.note) + '</p>' : '') + '<p><b>Why:</b> ' + esc(step.why) + '</p>' + (step.say ? '<p class="lp-say"><b>Example words to the patient:</b> “' + esc(step.say) + '”</p>' : '') + '<p class="sp-dim">' + esc(sourceText(step)) + '</p>';
    }
    function marks(step, value, action, hinted) {
      return '<div class="sp-row lp-marks" role="group" aria-label="Self-rating for ' + esc(step.title) + '">' + Object.entries(labels).filter(([id]) => id !== 'not-applicable' || step.conditional).map(([id,label]) => B(label,action,'data-step="' + step.id + '" data-rating="' + id + '" aria-pressed="' + (value === id) + '"', hinted && id === 'independent')).join('') + '</div>';
    }
    function countsHTML(counts) {
      return '<ul class="lp-counts">' + Object.keys(labels).map(id => '<li><b>' + (counts[id] || 0) + '</b> ' + esc(labels[id]) + '</li>').join('') + '</ul>';
    }
    function homeHTML() {
      const open = core.stepBank(S,S.selected,false).length, all = core.stepBank(S,S.selected,true).length;
      const flow = S.flow && !S.flow.complete, run = S.run && S.run.stage !== 'complete';
      const prior = (D.legacySteps || []).filter(s => S.rehearsal[s.id] && S.rehearsal[s.id].rating).length;
      return '<section class="sp-panel lp-main"><h2>Know the whole procedure from memory</h2><p>Every one of the <b>' + D.coverage.numberedRows + ' numbered rows</b> in the required check-offs is represented, plus ' + D.coverage.headerNotes + ' printed header/goal/objective notes. Related rows are combined where they describe the same action; compound tasks are explained fully.</p><p>Choose <b>Next step</b> to build your recall, then <b>Whole procedure</b> to say or demonstrate everything with no step list showing. Compare afterward and mark what you missed.</p><p class="sp-dim">The guides use a practical sequence. Equivalent safe ordering is acceptable in this practice; use “unsafe sequence” only when a necessary safety prerequisite was missed. Faculty sets the evaluation requirements.</p>' +
        (flow || run ? '<div class="sp-row">' + (flow ? link('Resume next-step practice',S.flow.mode === 'weak' ? '#practice-weak' : '#practice-rehearse-' + S.flow.station) : '') + (run ? link('Resume whole procedure: ' + core.stations[S.run.station].title,'#practice-full-' + S.run.station) : '') + '</div>' : '') +
        '<h3>Redo weak procedure steps from every rehearsal</h3><p>' + open + ' open weak steps · ' + (all-open) + ' previously corrected, in selected stations.</p><label class="sp-row"><input type="checkbox" id="lp-include-corrected"' + (includeCorrected ? ' checked' : '') + '> Include previously corrected procedure steps</label><p>' + B('Practice selected weak steps','weak','',!(includeCorrected ? all : open)) + '</p><p class="sp-dim">Prompted, missed, and unsafe-sequence ratings stay in this cumulative bank. Independent recall corrects an item without deleting it. A “not in this scenario” rating does not clear an older miss.</p>' +
        (prior ? '<details><summary>Your earlier summary ratings are preserved (' + prior + ')</summary><p>These belong to the shorter guides and are kept separately. The expanded checkpoints start unrated so an earlier broad rating does not claim you remembered every newly detailed action.</p><ul>' + D.legacySteps.filter(s => S.rehearsal[s.id] && S.rehearsal[s.id].rating).map(s => '<li><b>' + esc(s.title) + ':</b> ' + esc(S.rehearsal[s.id].rating) + (S.rehearsal[s.id].note ? ' · ' + esc(S.rehearsal[s.id].note) : '') + '</li>').join('') + '</ul></details>' : '') +
        (S.runHistory.length ? '<details><summary>Completed whole-procedure self-reviews (' + S.runHistory.length + ')</summary><ul>' + S.runHistory.slice(-10).reverse().map(h => '<li>' + esc(core.stations[h.station].title) + ': ' + h.counts.independent + '/' + h.total + ' independently recalled; ' + (h.counts.prompted+h.counts.missed+h.counts.sequence) + ' need practice; ' + h.counts['not-applicable'] + ' not in the scenario.</li>').join('') + '</ul><p class="sp-dim">The latest 30 complete self-reviews are kept. These are self-reports, not faculty passes.</p></details>' : '') + '</section>';
    }
    function guideSteps(st) {
      return '<p class="sp-note"><b>One practical flow, complete content.</b> You may group related checks or use another safe order. The checklist coverage below shows where each numbered row is represented. “Explain when asked” items are printed objectives rather than extra physical actions.</p><ol class="sp-steps">' + st.steps.map((step,i) => '<li id="lp-step-' + step.id + '">' + (i === 0 || st.steps[i-1].phase !== step.phase ? '<p class="lp-phase">' + esc(step.phase) + '</p>' : '') + '<h3>' + esc(step.title) + '</h3>' + (step.safety ? '<span class="sp-pill">Safety checkpoint</span>' : '') + (step.viva ? '<span class="sp-pill">Printed goal / objective</span>' : '') + '<p>' + esc(step.action) + '</p>' + (step.note ? '<p class="sp-note">' + esc(step.note) + '</p>' : '') + '<details><summary>Why, example words and checklist source</summary><p><b>Why:</b> ' + esc(step.why) + '</p>' + (step.say ? '<p><b>Say:</b> “' + esc(step.say) + '”</p>' : '') + '<p class="sp-dim">' + esc(sourceText(step)) + '</p></details></li>').join('') + '</ol>';
    }
    function coverageHTML(st) {
      if (!st.requirements.length) return '<section class="sp-panel"><h2>Checklist coverage</h2><p>The manual’s IV/piggyback heading is followed by IV push steps, so there are no secondary-infusion rows to match here. This station remains a clearly identified supplement pending faculty clarification.</p></section>';
      const numbered = st.requirements.filter(r => r.kind === 'row').length;
      return '<section class="sp-panel"><h2>Everything from this checklist</h2><p><b>' + numbered + ' numbered rows</b>' + (st.requirements.length-numbered ? ' and ' + (st.requirements.length-numbered) + ' header/goal/objective notes' : '') + ' are represented in the expanded flow. The wording below describes each printed row; open its matching practice action for the safe procedure and any clarification.</p><details><summary>Check every row against the guide</summary><div class="sp-table-wrap"><table><thead><tr><th>Printed location and content</th><th>Where you practice it</th></tr></thead><tbody>' + st.requirements.map(r => '<tr><td><b>p. ' + esc(r.page) + ' · ' + esc(r.location) + '</b><br>' + esc(r.label) + '</td><td>' + st.steps.map((step,i) => ({step,i})).filter(x => x.step.covers.includes(r.id)).map(x => B('Step ' + (x.i+1) + ': ' + x.step.title,'scroll','data-step="' + x.step.id + '"')).join(' ') + '</td></tr>').join('') + '</tbody></table></div></details></section>';
    }
    function flowRoute(st, weak) {
      if (!S.flow || (weak && S.flow.mode !== 'weak') || (!weak && (S.flow.mode !== 'flow' || S.flow.station !== st.id))) {
        if (weak || !core.startFlow(S,[st.id],false)) { wrap('No procedure-step review is active','<p>Choose your stations and start a review of weak steps.</p>' + link('Choose stations','#practice'),true); return; }
        save();
      }
      const f = S.flow;
      if (f.complete) {
        const c = core.ratingCounts(f.items.map(i => i.rating));
        wrap('Next-step practice complete','<section class="sp-panel"><h2>Compare your recall</h2>' + countsHTML(c) + '<p>These are your self-ratings. Repeat weak parts, then try the complete procedure without prompts.</p><div class="sp-row">' + (f.mode === 'flow' ? link('Try the whole procedure','#practice-full-' + f.station) + B('Start next-step practice again','flow-again','data-station="' + f.station + '"') : '') + link('Choose stations / all weak steps','#practice') + '</div></section>',true); return;
      }
      const item = core.flowCurrent(S), step = core.steps[item.sid], station = core.stations[step.station];
      const previous = f.index ? core.steps[f.items[f.index-1].sid] : null;
      const fullIndex = station.steps.findIndex(s => s.id === step.id), anchor = fullIndex > 0 ? station.steps[fullIndex-1] : null;
      const weakContext = (anchor ? 'In this station’s practice flow, this checkpoint follows: ' + anchor.title + '.' : 'This is the beginning of this station’s practice flow.') + ' Recall the selected action and its reason. This queue skips other steps; it is not a complete bedside procedure.';
      wrap('What comes next?','<section class="sp-panel"><p class="sp-dim">' + esc(station.title) + ' · ' + (f.index+1) + '/' + f.items.length + (f.mode === 'weak' ? ' selected weak steps' : ' checkpoints') + '</p><progress value="' + f.index + '" max="' + f.items.length + '" aria-label="Procedure recall position"></progress><p class="lp-phase">' + esc(step.phase) + '</p><p>' + esc(f.mode === 'weak' ? weakContext : previous && previous.station === step.station ? 'Last checkpoint: ' + previous.title + '. Recall the next action and its reason before revealing it.' : 'Start from the beginning. Recall the first action and its reason before revealing it.') + '</p>' +
        (item.hint && !item.revealed ? '<p class="sp-note"><b>Hint:</b> ' + esc(step.title) + '</p>' : '') +
        '<label for="lp-flow-note">Say or demonstrate it first; optional recall notes</label><textarea id="lp-flow-note" maxlength="1600" placeholder="What will I do, what must I check first, and why?">' + esc(item.note) + '</textarea><p class="sp-dim">Notes are saved for this attempt. Free recall is self-reviewed; your wording is not automatically graded.</p>' +
        (!item.revealed ? '<div class="sp-row">' + B('Compare my recall','flow-reveal') + B('Give me a small hint','flow-hint','',item.hint) + '</div>' : '<div class="sp-reveal"><h2>' + esc(step.title) + '</h2>' + explain(step) + '</div><p>Rate what you recalled before comparison. A different safe order is acceptable; mark sequence only for a missed prerequisite or unsafe point.</p>' + marks(step,item.rating,'flow-rate',item.hint) + (item.hint ? '<p class="sp-dim">You used a hint, so this checkpoint can be marked prompted rather than independent.</p>' : '') ) +
        '<div class="sp-row lp-bottom">' + B('Previous checkpoint','flow-prev','',f.index===0) + B(f.index===f.items.length-1 ? 'Finish next-step practice' : 'Next checkpoint','flow-next','',!item.rating) + link('Pause / practice home','#practice') + '</div></section>',true);
    }
    function runRoute(st) {
      if (S.run && S.run.station !== st.id && S.run.stage !== 'complete') {
        wrap('A procedure rehearsal is paused','<section class="sp-panel"><p>Your ' + esc(core.stations[S.run.station].title) + ' rehearsal is saved.</p><div class="sp-row">' + link('Resume saved rehearsal','#practice-full-' + S.run.station) + B('Start ' + st.title + ' instead','run-start','data-station="' + st.id + '"') + '</div></section>',true); return;
      }
      if (!S.run || S.run.station !== st.id) { core.startRun(S,st.id); save(); }
      const r = S.run;
      if (r.stage === 'perform') {
        wrap('Whole procedure: ' + st.title,'<section class="sp-panel"><h2>Perform it without a step list</h2><p>' + esc(st.scene) + '</p><p>' + esc(st.id === 'reaction' ? 'Begin with the immediate reaction response and patient support. Include the clinical communication, access, investigation, treatment, monitoring and documentation.' : 'Say or demonstrate the whole skill from preparation through reassessment and documentation. Include the smaller checks, what you would say to the patient, and the printed goals/objectives you may be asked to explain.') + '</p><p class="sp-note">Use a sensible safe order. You do not need to recite the printed checklist word for word.</p><label for="lp-run-note">Optional recall outline for this attempt</label><textarea id="lp-run-note" maxlength="12000" placeholder="Start from memory. You can demonstrate and speak instead of typing.">' + esc(r.note) + '</textarea><p class="sp-dim">Your outline is saved. No step titles or procedure answers are shown until you choose to compare.</p><div class="sp-row">' + B('I am ready to compare every item','run-review') + link('Pause / practice home','#practice') + link('Use next-step practice','#practice-rehearse-' + st.id) + '</div></section>',true); return;
      }
      const count = core.ratingCounts(Object.values(r.ratings)), reviewed = Object.keys(r.ratings).length;
      if (r.stage === 'complete') {
        wrap('Whole-procedure self-review complete','<section class="sp-panel"><h2>' + esc(st.title) + '</h2>' + countsHTML(count) + '<p><b>' + st.steps.length + ' checkpoints reviewed.</b> This includes the printed rows and goals/objectives, along with clearly marked additions.</p><p>Redo weak steps, then perform the whole skill again. “Not in this scenario” does not establish independent recall or remove a previous weak-step entry.</p><div class="sp-row">' + B('Redo this station’s weak steps','station-weak','data-station="' + st.id + '"',!core.stepBank(S,[st.id],false).length) + B('Start a fresh whole-procedure rehearsal','run-start','data-station="' + st.id + '"') + link('Practice home','#practice') + '</div></section>',true); return;
      }
      wrap('Compare every action: ' + st.title,'<section class="sp-panel"><p class="sp-note">Compare with what you actually recalled or demonstrated before opening this list. Rate every item. Mark “unsafe sequence” for a missed safety prerequisite, not for an equivalent safe order. Conditional items can be marked not in this scenario; explain their branch when preparing for faculty questions.</p><p id="lp-run-progress" role="status">' + reviewed + ' of ' + st.steps.length + ' checkpoints self-reviewed.</p><details><summary>Your original recall outline</summary><p class="lp-outline">' + esc(r.note || 'You rehearsed without a typed outline.') + '</p></details></section><ol class="sp-steps lp-review-list">' + st.steps.map((step,i) => '<li id="lp-review-' + step.id + '">' + (i===0 || st.steps[i-1].phase!==step.phase ? '<p class="lp-phase">' + esc(step.phase) + '</p>' : '') + '<h3>' + esc(step.title) + '</h3>' + explain(step) + marks(step,r.ratings[step.id] || '','run-rate',false) + '</li>').join('') + '</ol><section class="sp-panel"><p class="sp-dim">Unrated checkpoints prevent completion of this self-review. These ratings do not create an instructor pass or practice date.</p><div class="sp-row">' + B('Finish whole-procedure self-review','run-finish','id="lp-run-finish"',reviewed!==st.steps.length) + link('Pause / practice home','#practice') + '</div></section>',true);
    }
    function route(hash) {
      if (hash === 'practice-weak') { flowRoute(null,true); return true; }
      if (hash.startsWith('practice-rehearse-') && core.stations[hash.slice(18)]) { flowRoute(core.stations[hash.slice(18)],false); return true; }
      if (hash.startsWith('practice-full-') && core.stations[hash.slice(14)]) { runRoute(core.stations[hash.slice(14)]); return true; }
      return false;
    }
    app.addEventListener('input',e => {
      if (e.target.id === 'lp-flow-note') { core.flowNote(S,e.target.value); save(); }
      if (e.target.id === 'lp-run-note') { core.runNote(S,e.target.value); save(); }
    });
    app.addEventListener('change',e => {
      if (e.target.id === 'lp-include-corrected') { includeCorrected = e.target.checked; ctx.render(false); app.querySelector('#lp-include-corrected').focus({preventScroll:true}); }
    });
    app.addEventListener('click',e => {
      const b=e.target.closest('[data-performance]'); if (!b || b.disabled) return;
      const a=b.dataset.performance;
      if (a==='scroll') { const el=document.getElementById('lp-step-'+b.dataset.step); if(el){el.scrollIntoView({block:'start'});const h=el.querySelector('h3');h.tabIndex=-1;h.focus({preventScroll:true});} return; }
      if (a==='weak' || a==='station-weak') { if(core.startFlow(S,a==='station-weak'?[b.dataset.station]:S.selected,true,a==='weak'&&includeCorrected)){save();navigate('#practice-weak');} return; }
      if (a==='flow-again') { core.startFlow(S,[b.dataset.station],false);save();navigate('#practice-rehearse-'+b.dataset.station);return; }
      if (a==='run-start') { core.startRun(S,b.dataset.station);save();navigate('#practice-full-'+b.dataset.station);return; }
      if (a==='run-rate') {
        if(core.runRate(S,b.dataset.step,b.dataset.rating)) {
          save();const card=b.closest('li');card.querySelectorAll('[data-rating]').forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.rating===b.dataset.rating)));
          const st=core.stations[S.run.station], n=Object.keys(S.run.ratings).length;app.querySelector('#lp-run-progress').textContent=n+' of '+st.steps.length+' checkpoints self-reviewed.';app.querySelector('#lp-run-finish').disabled=n!==st.steps.length;
        } return;
      }
      if (a==='flow-reveal') core.flowReveal(S,false);
      else if (a==='flow-hint') core.flowReveal(S,true);
      else if (a==='flow-rate') core.flowRate(S,b.dataset.rating);
      else if (a==='flow-prev') core.flowPrevious(S);
      else if (a==='flow-next') core.flowNext(S);
      else if (a==='run-review') core.runReview(S);
      else if (a==='run-finish') core.runFinish(S);
      else return;
      save();ctx.render(false);
      const focus = a==='flow-reveal' ? app.querySelector('.sp-reveal h2') : a==='flow-rate' ? app.querySelector('[data-rating="'+core.flowCurrent(S).rating+'"]') : app.querySelector('h1');
      if(focus){focus.tabIndex=-1;focus.focus({preventScroll:a==='flow-rate'});}
    });
    return { homeHTML, guideSteps, coverageHTML, route };
  }
})(window);
