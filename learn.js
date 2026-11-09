(function () {
  'use strict';
  const data = window.LEARN_DATA || window.EXAM3_LESSONS, core = window.Exam3Learn, el = document.getElementById('learn');
  if (!data || !core) { el.innerHTML = '<p>Lessons could not load. Refresh, or <a href="Exam 3 Map.html">open the notes</a>.</p>'; return; }
  const cfg = data.config || { label:'Exam 3', key:'e3-learn-v1', page:'Exam 3 Learn.html', map:'Exam 3 Map.html', test:'Exam 3 Mastery Loop.dc.html', drugs:'Exam 3 Drug Cards.dc.html', route:'Exam 3 Route.html', masteryKey:'e3-mastery-v3', scope:'29 lessons covering the 17 assigned Exam 3 topic groups. Full chapter notes, tables, drugs and ADPIE remain on the Map.', weightNote:'Chapter question counts: 56: 20; 46, 47, 55: 10 each; 45, 53: 5 each.', blueprint:data.weights };
  const KEY = cfg.key, lessons = data.lessons, chapters = cfg.chapters || Object.keys(data.weights);
  const guide = cfg.label === 'Exam 4' && window.Exam4Guide, guideStore = guide ? guide.createStore({getItem:k=>localStorage.getItem(k),setItem:(k,v)=>localStorage.setItem(k,v)}) : null;
  const guideActive = () => guideStore && guideStore.mode() === 'guide';
  const chapterChoices = () => guideActive() ? guide.chapters : chapters;
  const inGuide = l => !guideActive() || guide.hasLesson(l);
  let state, memoryOnly = false;
  try { state = core.restore(localStorage.getItem(KEY), lessons); } catch (_) { state = core.blank(); memoryOnly = true; }
  let selected = new Set(Array.isArray(state.selectedChapters) ? state.selectedChapters.filter(ch=>chapters.includes(ch)) : chapters);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
  const button = (id, text, secondary = false) => '<button type="button" class="btn btn-' + (secondary ? 'secondary' : 'primary') + '" data-action="' + id + '">' + esc(text) + '</button>';
  const link = (href, text) => '<a target="_blank" rel="noopener" href="' + esc(href) + '">' + esc(text) + ' ↗</a>';
  const date = at => new Date(at).toLocaleString([], { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (_) { memoryOnly = true; } }
  if(guide&&state.focusToken!==guideStore.token()){selected=new Set(chapterChoices());state.selectedChapters=[...selected];state.focusToken=guideStore.token();save();}
  function missedTopics() {
    try {
      const byId=new Map(); lessons.forEach(l=>l.questions.forEach(q=>{byId.set(q.sourceId||q.id,l.notes);byId.set(q.id.replace('|trad|','|c|').replace('|ngn|','|n|'),l.notes);}));
      if(cfg.mhPrefix){const m=JSON.parse(localStorage.getItem(cfg.mhPrefix+'test')||'{}');return Object.entries(m).filter(([id,h])=>(!guideActive()||guide.hasQuestionId(id))&&Array.isArray(h)&&h[h.length-1]===0).flatMap(([id])=>byId.get(id)||[]);}
      const m=JSON.parse(localStorage.getItem(cfg.masteryKey)||'null');if(!m)return [];
      if(m.misses&&m.misses.items)return Object.entries(m.misses.items).filter(([,v])=>v.state!=='fixed').flatMap(([id])=>byId.get(id)||[]);
      return Object.entries(m.log||{}).filter(([,v])=>v.last!=null&&v.last<1).flatMap(([id])=>byId.get(id)||[]).concat((m.report?.recs||[]).filter(r=>r.e<1).flatMap(r=>r.topics||[]));
    }catch(_){return [];}
  }
  function resources(l) {
    return '<div class="resources">' + l.notes.map((n, i) => link(cfg.map+'#'+n, i ? 'More source notes' : 'Full explanation on the Map')).join('') +
      (l.drugs && cfg.drugs ? link(cfg.drugs, 'Drug cards') : '') +
      (l.caseId ? link(cfg.test+'#case='+l.caseId, 'Six-step case') : '') + '</div><p class="source">Source: ' + esc(l.source) + '</p>' +
      (l.update === 'crisis' ? '<p class="source">' + link('https://link.springer.com/article/10.1007/s00125-024-06183-8', '2024 adult consensus: current safety update') + '</p>' : '') +
      (l.update === 'hpylori' ? '<p class="source">' + link('https://gi.org/journals-publications/ebgi/schoenfeld_sep2024/', 'ACG 2024 treatment update') + '</p>' : '');
  }
  const inChapters=l=>inGuide(l)&&(l.chapters||[l.ch]).some(ch=>selected.has(ch));
  const chapterLabel=l=>{const chs=(l.chapters||[l.ch]).filter(ch=>!guideActive()||guide.chapters.includes(ch));return chs.length?'Ch '+chs.join(', '):'Additional review';};
  function setGuide(mode){guideStore.set(mode);selected=new Set(chapterChoices());state.selectedChapters=[...selected];state.focusToken=guideStore.token();save();render(false);}
  function nextMiss(current){return core.missEntries(state,lessons.filter(inChapters)).find(m=>m.key!==current)||null;}
  function missList(rows){
    return '<details class="miss-bank"'+(rows.length?' open':'')+'><summary>Redo recorded misses · '+rows.length+' in selected chapters</summary><p class="source">Keeps missed decisions and recall self-checks across Learn attempts. A repaired item stays in your history. Existing test misses remain in that exam’s Test or Mastery page.</p><label class="check"><input type="checkbox" id="include-repaired"'+(state.includeRepaired?' checked':'')+'><span>Include repaired items</span></label>'+(!rows.length?'<p>No '+(state.includeRepaired?'recorded':'unrepaired')+' Learn misses in these chapters yet.</p>':'<ul class="catalog">'+rows.map(m=>{const l=lessons.find(l=>l.id===m.lesson);return '<li><span class="kicker">'+esc(chapterLabel(l))+' · checkpoint '+(m.variant+1)+'</span><h3>'+esc(l.title)+'</h3><p class="source">'+(m.repairedAt?'Repaired on '+date(m.repairedAt):[m.decision?'Patient decision':null,m.recallUnknown?'Recall self-check (individual points were not retained)':m.recall.length?'Recall: '+m.recall.map(i=>l.checks[i]).join(' · '):null].filter(Boolean).map(esc).join(' · '))+'</p><button type="button" class="btn btn-secondary" data-miss="'+esc(m.key)+'">Retry this checkpoint</button></li>';}).join('')+'</ul>')+'</details>';
  }
  function status(l) {
    const p = state.lessons[l.id] || {};
    if (!p.completedAt) return p.understoodAt ? 'Explanation read · recall and application pending' : 'Not started';
    return (p.recalled ? 'Recall self-check: met' : 'Recall self-check: revisit') + ' · last decision: ' + (p.correct ? 'correct' : 'missed') +
      ' · ' + (p.delayedPasses || 0) + ' due reviews passed · ' + (p.dueAt <= Date.now() ? 'review due' : 'review ' + date(p.dueAt));
  }
  function header(l) {
    return '<div class="row between"><span class="kicker">' + esc(cfg.label) + ' · ' + esc(chapterLabel(l)||'Additional review') + (guideActive()?' · Exam 4 study guide':'') + '</span><button type="button" class="plain" data-action="home">Pause &amp; all lessons</button></div><h1 tabindex="-1">' + esc(l.title) + '</h1>';
  }
  function home() {
    const visible=lessons.filter(inChapters),rec=core.recommend(state,visible,data.weights,Date.now(),missedTopics());
    const t=state.session,resume=t&&t.stage!=='done'&&visible.find(l=>l.id===t.id);
    const all=visible.map(l=>state.lessons[l.id]||{}),completed=all.filter(p=>p.completedAt).length,due=all.filter(p=>p.dueAt<=Date.now()).length;
    const featured=resume||(rec&&rec.lesson),misses=core.missEntries(state,visible,!!state.includeRepaired),pending=core.missEntries(state,visible),first=pending[0];
    const choices=chapterChoices(),selectedCount=choices.filter(ch=>selected.has(ch)).length;
    const studioData=window.LEARN_STUDIOS||window.EXAM3_STUDIOS,activities=studioData?studioData.labs.filter(l=>visible.some(v=>v.id===l.id)).reduce((n,l)=>n+l.steps.length,0)+(visible.some(l=>l.id==='hypoglycemia')?6:0):0;
    el.innerHTML='<nav class="learn-exams" aria-label="Choose exam for Learn">'+['1','2','3','4','5','Final'].map(x=>{const label=x==='Final'?x:'Exam '+x;return '<a href="'+label+' Learn.html"'+(label===cfg.label?' aria-current="page"':'')+'>'+label+'</a>';}).join('')+'</nav><span class="kicker">'+esc(cfg.label)+' · Guided study</span><h1 tabindex="-1">One idea.<br>Then use it.</h1><p class="muted">Understand the why, recall it before looking, and make a patient decision. Come back when review is due.</p>'+
      (guide?guide.html(guideStore.mode()):'')+
      '<section class="card scope"><span class="kicker">What this path covers</span><p>'+esc(cfg.scope)+'</p>'+(cfg.gaps?'<p class="notice">'+esc(cfg.gaps)+'</p><p><strong>Comprehensive review:</strong> use the exam links above for all earlier exam paths, including cardiac, hematology, perioperative and mental health review.</p>':'')+'<p class="source">'+visible.length+' selected visual lessons · '+activities+' coached activities · '+visible.reduce((n,l)=>n+l.questions.length,0)+' rotating graded checkpoints. Based on the site’s authored notes; source links and focused clinical updates are included. Audio is optional.</p></section>'+
      '<details class="chapter-picker"'+(state.chapterPickerOpen?' open':'')+'><summary>Choose chapters · '+(selectedCount===choices.length?'All chapters':selectedCount+' selected')+'</summary><div class="row"><button class="plain" type="button" data-chapters="all">Select all</button><button class="plain" type="button" data-chapters="none">Clear selection</button></div><div class="chapter-options">'+choices.map(ch=>'<label class="check"><input type="checkbox" data-chapter="'+ch+'"'+(selected.has(ch)?' checked':'')+'><span>Ch '+ch+(cfg.blueprint?' · '+(cfg.blueprint[ch]?cfg.blueprint[ch]+'/60 questions':'supporting review'):'')+'</span></label>').join('')+'</div></details>'+
      (featured?'<section class="card featured"><span class="kicker">'+(resume?'Pick up where you paused':due?'Review next':'Study next')+'</span><h2>'+esc(featured.title)+'</h2><p class="muted">'+(resume?'Your response and place are saved in this browser.':esc(rec.reason))+'</p><button type="button" class="btn btn-primary" data-lesson="'+featured.id+'">'+(resume?'Resume lesson':rec.early?'Practise early':'Begin lesson')+'</button></section>':'<p class="notice">Select a chapter to choose a lesson.</p>')+
      '<div class="stats"><div><b>'+all.filter(p=>p.understoodAt).length+'</b><span>explanations read</span></div><div><b>'+all.filter(p=>p.recalled).length+'</b><span>recall self-checks met</span></div><div><b>'+all.filter(p=>p.correct).length+'</b><span>latest decisions correct</span></div><div><b>'+all.filter(p=>p.delayedPasses).length+'</b><span>lessons with a due review passed</span></div></div><p class="source">'+completed+' of '+visible.length+' selected lessons attempted · '+due+' reviews due. Self-checks and one correct answer do not prove mastery.</p>'+
      (first?'<button type="button" class="btn btn-secondary" data-miss="'+esc(first.key)+'">Start my '+pending.length+' unrepaired checkpoint'+(pending.length===1?'':'s')+'</button>':'')+missList(misses)+
      '<h2>Choose a lesson</h2><ul class="catalog">'+visible.map(l=>'<li><span class="kicker">'+esc(chapterLabel(l))+'</span><br><button type="button" data-lesson="'+l.id+'">'+esc(l.title)+' →</button><button type="button" class="catalog-explore" data-explore="'+l.id+'">Visual explanation &amp; rehearsal</button><span class="source">'+esc(status(l))+'</span></li>').join('')+'</ul>'+
      '<details><summary>How this study path works</summary><p>Read the explanation and rehearse its decisions. Close it, retrieve the answer, compare your response and check only the points you remembered before revealing. Then answer an independent checkpoint. Coached self-checks are labeled; they are not automatically graded.</p><p>A successful first attempt is due again in 1 day. Successful due reviews schedule 1, then 3, then 7 days. A missed decision or recall checkpoint schedules a 10-minute retry. Early practice does not postpone review or earn a due-review pass.</p><p>'+esc(cfg.weightNote)+'</p><p>Recommendations use your selected chapters, due dates and recorded test misses. Your Learn miss list retains earlier misses and can include repaired items. Rotating questions eventually repeat; recall quality still matters.</p><p>Progress stays in this browser and is included in Home’s Save progress file. Use that file to move devices. Return here for due reviews; no notifications are sent.</p></details><div class="resources"><a href="Word Parts.html">Prefixes, roots, suffixes &amp; drug stems</a><a href="'+esc(cfg.map)+'">Map &amp; source notes</a>'+(cfg.route?'<a href="'+esc(cfg.route)+'">Daily route</a>':'')+'<a href="'+esc(cfg.test)+'">'+(cfg.mhPrefix?'Exam questions &amp; test misses':'Mixed Mastery test &amp; misses')+'</a><a href="NCLEX Strategies.html">Test-taking strategies</a></div>';
  }
  function session(l) {
    const t = state.session, q = l.questions[t.variant], api = window.Exam3Studio;
    const studio = api && api.get(l.id) ? { overviewHtml: () => api.overviewHtml(l.id), strategyHtml: () => api.strategyHtml(l.id), practiceHtml: raw => api.practiceHtml(l.id, raw) } : l.studio === 'hypoglycemia' && window.HypoLab ? { ...window.HypoLab, strategyHtml: () => '' } : null;
    let body = '';
    if (t.stage === 'understand') {
      body = studio ? studio.overviewHtml() + studio.strategyHtml() + resources(l) + studio.practiceHtml(l.id === 'hypoglycemia' ? t.hypoPractice : t.studioPractice) + '<div class="hl-close">' + button('read', 'Close the explanation & recall') + '</div>' : '<h2>Understand the why</h2>' + l.why.map(p => '<p>' + esc(p) + '</p>').join('') + resources(l) + button('read', 'Close the explanation & recall');
    } else if (t.stage === 'recall') {
      body = (studio ? '<button type="button" class="plain" data-explore="' + l.id + '">Review the visual explanation first</button><p class="source">Opening the explanation makes this an early practice session; it will not earn a due-review pass.</p>' : '') + '<h2>Recall before looking</h2><p>Without your notes, explain these points aloud or type your answer.</p><ol>' + l.checks.map(c => '<li>' + esc(c) + '</li>').join('') + '</ol><label for="recall-draft" class="source">Your explanation (optional; saved here)</label><textarea id="recall-draft" placeholder="What do you remember, and why?">' + esc(t.draft) + '</textarea><p class="source">Self-assessment: your writing is not automatically graded.</p>' +
        (!t.revealed ? button('reveal', 'Compare with the explanation') : (studio ? '<details><summary>Compare with the treatment diagram</summary>' + studio.overviewHtml() + '</details>' : '') + '<section class="card"><h3>Compare your reasoning</h3>' + l.why.map(p => '<p>' + esc(p) + '</p>').join('') + (l.recallAnswers?'<dl class="recall-key">'+l.checks.map((c,i)=>'<dt><strong>'+esc(c)+'</strong></dt><dd>'+esc(l.recallAnswers[i])+'</dd>').join('')+'</dl>':'')+'<p>Check only the points you recalled correctly <strong>before</strong> revealing this explanation. Leave missed points unchecked.</p>' + l.checks.map((c, i) => '<label class="check"><input type="checkbox" data-check="' + i + '"' + (t.checks[i] ? ' checked' : '') + '><span>' + esc(c) + '</span></label>').join('') + '</section>' + button('apply', 'Try a patient decision'));
    } else if (t.stage === 'apply') {
      body = '<h2>Make a patient decision</h2><p class="source">' + (q.selectCount ? 'Select exactly '+q.selectCount+' answers.' : q.a.length > 1 ? 'Select all correct answers. This checkpoint requires the complete correct set.' : 'Choose one answer.') + '</p>' +
        (q.ex || []).map(x => '<section class="notice"><h3>' + esc(x.h) + '</h3>' + (x.lines || []).map(p => '<p>' + esc(p) + '</p>').join('') + (x.table ? '<div class="table-wrap"><table>' + x.table.map((r, i) => '<tr>' + r.map(c => '<' + (i ? 'td' : 'th') + '>' + esc(c) + '</' + (i ? 'td' : 'th') + '>').join('') + '</tr>').join('') + '</table></div>' : '') + '</section>').join('') +
        '<fieldset style="border:0;padding:0;margin:16px 0"><legend>' + esc(q.q) + '</legend>' + t.order.map(i => '<label class="option"><input name="decision" type="' + (q.a.length > 1 ? 'checkbox' : 'radio') + '" data-pick="' + i + '"' + (t.picks.includes(i) ? ' checked' : '') + '><span>' + esc(q.o[i]) + '</span></label>').join('') + '</fieldset>'+(api&&api.get(l.id)?'<details class="learn-term-help"><summary>Optional vocabulary help · uses study support</summary>'+api.termsHtml(api.get(l.id))+'</details>':'')+'<button type="button" class="btn btn-primary" data-action="submit"' + (!t.picks.length ? ' disabled' : '') + '>Check my decision</button>';
    } else if (t.stage === 'feedback') {
      body = '<h2>' + (t.correct ? 'Your decision is correct.' : 'Revisit this decision.') + '</h2><p class="muted">Recall self-check: ' + (t.recalled ? 'all checkpoints met' : 'one or more points need another try') + '. ' + (t.eligible ? 'This was a scheduled review.' : t.assisted?'This attempt used optional vocabulary help; it did not earn a due-review pass.':'This was practice, not a delayed retention check.') + '</p>' +
        q.o.map((o, i) => '<div class="feedback' + (q.a.includes(i) ? '' : ' bad') + '"><b>' + (t.picks.includes(i) ? 'You chose · ' : '') + (q.a.includes(i) ? 'Correct option: ' : 'Other option: ') + esc(o) + '</b><span>' + esc(q.r[i]) + '</span></div>').join('') +
        (q.phys ? '<p><strong>Why:</strong> ' + esc(q.phys) + '</p>' : '') + (studio ? studio.strategyHtml() + '<details><summary>Visual review of this topic</summary>' + studio.overviewHtml() + '</details>' + api.reviewHtml(t.reviewReason, 'lesson') : '') + '<details' + (!t.correct || !t.recalled ? ' open' : '') + '><summary>Return to the explanation</summary>' + l.why.map(p => '<p>' + esc(p) + '</p>').join('') + resources(l) + '</details>' + button('done', 'Save & see what comes next');
    } else {
      const p = state.lessons[l.id];
      const rec = core.recommend(state, lessons.filter(inChapters), data.weights, Date.now(), missedTopics());
      const more=t.repair&&nextMiss(l.id+':'+t.variant);
      body = (more?'<button type="button" class="btn btn-primary" data-miss="'+esc(more.key)+'">Next recorded miss</button>':'')+'<h2>Session saved.</h2><p>' + esc(status(l)) + '</p><p class="notice">' + (p.needsReview ? 'A missed point is scheduled again in about 10 minutes. Work on another lesson while it settles.' : 'Next review: ' + esc(date(p.dueAt)) + '. Return then to recall the explanation and answer a different checkpoint.') + '</p>' +
        '<div class="row">' + (rec ? '<button type="button" class="btn btn-primary" data-lesson="' + rec.lesson.id + '">' + (rec.early ? 'Practise early: ' : 'Next: ') + esc(rec.lesson.title) + '</button>' : '') + button('home', 'All lessons', true) + '</div>' + resources(l) + '<p class="source">'+l.questions.length+' application variants rotate between ordinary attempts. Repeated questions are practice; a correct checkpoint alone does not establish mastery.</p>';
    }
    el.innerHTML = header(l) + '<ol class="steps">' + ['understand','recall','apply','feedback','done'].map((step, i) => '<li' + (t.stage === step ? ' aria-current="step"' : '') + '>' + (i + 1) + ' · ' + ['Understand','Recall','Apply','Feedback','Review later'][i] + '</li>').join('') + '</ol><section class="card">' + body + '</section>';
  }
  function render(focus) {
    let id; try { id = decodeURIComponent(location.hash.slice(1)); } catch (_) { id = ''; }
    const l = lessons.find(x => x.id === id);
    if (l) { if (!state.session || state.session.id !== l.id) core.start(state, l, Date.now()); save(); session(l);if(!inGuide(l))el.insertAdjacentHTML('afterbegin','<div class="exam-guide-notice">This lesson is additional review outside the Exam 4 study guide. <button data-action="home">Return to the guide</button> · <button data-e4-guide-all>Switch to Everything</button></div>'); } else home();
    if (memoryOnly) el.insertAdjacentHTML('afterbegin', '<p role="status" class="notice">Progress cannot be saved in this browser. Keep this page open; changes may be lost on reload.</p>');
    if (focus) { const h = el.querySelector('h1'); if (h) h.focus(); window.scrollTo(0, 0); }
  }
  function go(id) { history.pushState(null, '', location.pathname + location.search + (id ? '#' + id : '')); render(true); }
  el.addEventListener('click', e => {
    if(guide&&e.target.closest('[data-e4-guide-all]')){setGuide('all');return;}
    const chapterAction=e.target.closest('[data-chapters]');
    if(chapterAction){selected=new Set(chapterAction.dataset.chapters==='all'?chapterChoices():[]);state.selectedChapters=[...selected];save();home();return;}
    const miss=e.target.closest('[data-miss]');
    if(miss){const m=core.missEntries(state,lessons,true).find(x=>x.key===miss.dataset.miss),l=m&&lessons.find(x=>x.id===m.lesson);if(l&&core.retryMiss(state,l,m.variant,Date.now())){save();go(l.id);}return;}
    const help=e.target.closest('.learn-term-help summary');if(help&&state.session){state.session.assisted=true;state.session.eligible=false;save();}
    const explore = e.target.closest('[data-explore]');
    if (explore) {
      const l = lessons.find(l => l.id === explore.dataset.explore); if (!l || !l.studio) return;
      if (state.session && state.session.id === l.id && ['feedback', 'done'].includes(state.session.stage)) state.session = null;
      const t = core.start(state, l, Date.now());
      t.stage = 'understand'; t.eligible = false; t.picks = []; t.revealed = false; t.checks = l.checks.map(() => false);
      save(); go(l.id); return;
    }
    const reason = e.target.closest('[data-lesson-reason]');
    if (reason) {
      const t = state.session, api = window.Exam3Studio;
      if (!t || t.stage !== 'feedback' || !api || !api.reasons[reason.dataset.lessonReason]) return;
      t.reviewReason = t.reviewReason === reason.dataset.lessonReason ? '' : reason.dataset.lessonReason;
      state.lessons[t.id].reviewReason = t.reviewReason; save(); render(false); return;
    }
    const activity = e.target.closest('[data-studio-choice], [data-studio-action], [data-studio-move]');
    if (activity) {
      const t = state.session, api = window.Exam3Studio;
      if (!t || t.stage !== 'understand' || !api || !api.get(t.id) || t.id === 'hypoglycemia') return;
      if (activity.dataset.studioChoice) t.studioPractice = api.choose(t.id, t.studioPractice, activity.dataset.studioChoice);
      else if (activity.dataset.studioMove != null) t.studioPractice = api.move(t.id, t.studioPractice, +activity.dataset.studioMove, +activity.dataset.delta);
      else if (activity.dataset.studioAction === 'check-order') t.studioPractice = api.checkOrder(t.id, t.studioPractice);
      else if (activity.dataset.studioAction === 'next') t.studioPractice = api.next(t.id, t.studioPractice);
      else if (activity.dataset.studioAction === 'reveal') t.studioPractice = api.reveal(t.id, t.studioPractice);
      else if (activity.dataset.studioAction === 'retry') t.studioPractice = api.retry(t.id, t.studioPractice);
      else if (activity.dataset.studioAction === 'restart') t.studioPractice = api.blank(t.id);
      save(); render(false); const moved = activity.dataset.studioMove != null ? +activity.dataset.studioMove + +activity.dataset.delta : null;
      const target = moved != null ? el.querySelector('.ss-order li:nth-child(' + (moved + 1) + ') span') : el.querySelector('.ss-result') || el.querySelector('.ss-practice h2');
      if (target) { target.setAttribute('tabindex', '-1'); target.focus(); } return;
    }
    const practice = e.target.closest('[data-hypo-choice], [data-hypo-action]');
    if (practice) {
      const t = state.session; if (!t || t.id !== 'hypoglycemia' || t.stage !== 'understand' || !window.HypoLab) return;
      const H = window.HypoLab;
      if (practice.dataset.hypoChoice) t.hypoPractice = H.choose(t.hypoPractice, practice.dataset.hypoChoice);
      else if (practice.dataset.hypoAction === 'next') t.hypoPractice = H.next(t.hypoPractice);
      else if (practice.dataset.hypoAction === 'retry') t.hypoPractice = H.retry(t.hypoPractice);
      else if (practice.dataset.hypoAction === 'restart') t.hypoPractice = H.blank();
      save(); render(false);
      const target = el.querySelector('.hl-result') || el.querySelector('.hl-practice h2');
      if (target) { target.setAttribute('tabindex', '-1'); target.focus(); }
      return;
    }
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
    if(guide&&e.target.matches('[data-exam-guide]')){setGuide(e.target.value);return;}
    if(e.target.matches('[data-chapter]')){state.chapterPickerOpen=true;const ch=e.target.dataset.chapter;if(e.target.checked)selected.add(ch);else selected.delete(ch);state.selectedChapters=[...selected];save();home();return;}
    if(e.target.id==='include-repaired'){state.includeRepaired=e.target.checked;save();home();return;}
    const t = state.session; if (!t) return;
    if (e.target.matches('[data-check]')) t.checks[+e.target.dataset.check] = e.target.checked;
    if (e.target.matches('[data-pick]')) {
      const l = lessons.find(x => x.id === t.id), i = +e.target.dataset.pick;
      t.picks = l.questions[t.variant].a.length > 1 ? (e.target.checked ? [...new Set(t.picks.concat(i))] : t.picks.filter(n => n !== i)) : [i];
      el.querySelector('[data-action="submit"]').disabled = !t.picks.length;
    }
    save();
  });
  el.addEventListener('toggle',e=>{if(e.target.classList.contains('chapter-picker')){state.chapterPickerOpen=e.target.open;save();}},true);
  window.addEventListener('popstate', () => render(true));
  window.addEventListener('hashchange', () => render(true));
  if(guide)window.addEventListener('storage',e=>{if(e.key===guide.key){selected=new Set(chapterChoices());state.selectedChapters=[...selected];state.focusToken=guideStore.token();save();render(false);}});
  render(false);
})();
