// Assigned Exam 4 focus supplied by the student, November 9, 2026.
// This is a topic scope, not a professor question-count blueprint.
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.Exam4Guide = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';
  var key = 'e4-focus', name = 'Exam 4 study guide', revision = '20261109';
  var chapters = ['1','2','3','6','9','34'];
  var topics = ['intro','dx','life','theories','neuro','legal','relationship','comm','groups'];
  var lessons = ['t-intro','t-e4-diagnostics','t-life','t-theories','t-neuro','t-legal','t-e4-peplau','t-comm',
    't-groups-foundations','t-groups-design','t-groups-development','t-groups-roles','t-groups-modalities','t-groups-leadership','t-groups-safety','t-groups-participation'];
  function ids(prefix, n, pad) { return Array.from({length:n},function(_,i){return prefix+(pad?String(i+1).padStart(2,'0'):i+1);}); }
  var questions = ids('q-intro-',2).concat(['q-e4-dsm-purpose','q-e4-nursing-response'],ids('q-life-',2),ids('q-theory-',2),ids('q-neuro-',12),ids('q-legal-',6),['q-rel-1','q-e4-peplau-working'],ids('q-comm-',3),ids('q-g34-',12,true));
  var source = 'Assigned list provided November 9: Chapters 1, 2, 3, 6 and 34; Chapter 9 only Peplau’s Model of the Nurse-Patient Relationship and Communication Skills for Nurses.';
  function store(storage) {
    var memory = null, memoryOnly = false;
    function read() { var v=memory;if(!memoryOnly){try{v=JSON.parse(storage.getItem(key)||'null');}catch(_){}}return v; }
    function mode() { var v=read();return v&&v.mode==='all'?'all':'guide'; }
    return {
      mode: mode,
      token: function () { var v=read();return revision+':'+mode()+':'+(v&&v.selection||'initial'); },
      set: function (mode) {
        memory = { mode:mode==='all'?'all':'guide', name:mode==='all'?'Everything':name, ids:mode==='all'?[]:topics.slice(), revision:revision, selection:Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,8) };
        try { storage.setItem(key,JSON.stringify(memory)); memoryOnly=false; } catch (_) { memoryOnly=true; }
      },
      memoryOnly: function () { return memoryOnly; }
    };
  }
  function topic(t) {
    if(t.id==='comm')return Object.assign({},t,{title:'Communication Skills for Nurses'});
    if(t.id==='dx')return Object.assign({},t,{ch:'Chapter 1 · diagnostic foundations',title:'Diagnostic tools: criteria and nursing care',short:'The purpose of DSM criteria and the patient responses addressed in nursing care.',lead:'A diagnostic classification provides shared criteria and terminology. Nursing care also addresses the individual patient’s responses, needs and risks.',terms:(t.terms||[]).filter(function(x){return x.t==='DSM-5';}).map(function(x){return Object.assign({},x,{see:'The team uses a diagnostic label with a defined set of criteria.',means:'For the nursing plan, identify the person’s responses, needs and risks while using the team’s diagnostic framework.'});}),cards:[{h:'What the DSM contributes',b:['Diagnostic criteria give clinicians a shared framework for naming mental disorders.','A category does not replace the person’s assessment or an individualized nursing plan.']},t.cards.find(function(c){return c.h==='Nursing diagnoses in mental health';})].filter(Boolean),recall:[t.recall[0],['What does nursing care add to the diagnostic label?','Assessment of the individual’s responses, needs and risks, with patient-centered outcomes.']]});
    if (t.id !== 'relationship') return t;
    return Object.assign({},t,{ch:'Chapter 9 · assigned section',title:'Peplau’s Model of the Nurse-Patient Relationship',
      short:'Prepare, establish the relationship, work toward goals and close it professionally.',
      lead:'Follow the nurse–patient relationship from its beginning to its ending. Identify what the nurse and patient do in each phase. This focused entry follows your assigned Chapter 9 section; the complete relationship notes remain available under Everything.',
      terms:[],cards:t.cards.filter(function(c){return c.h==='Peplau’s phases';}),recall:t.recall.filter(function(_,i){return i===0||i===3;})});
  }
  function select(data, mode) {
    if (mode==='all') return data;
    return Object.assign({},data,{
      topics:topics.map(function(id){return data.topics.find(function(t){return t.id===id;});}).filter(Boolean).map(topic),
      conditions:[],
      drills:data.drills.filter(function(d){return d.topic&&topics.indexOf(d.topic)>=0&&d.topic!=='relationship';}),
      questions:data.questions.filter(function(q){return questions.indexOf(q.id)>=0;})
    });
  }
  function html(mode) {
    return '<section class="exam-guide" aria-label="Exam 4 study focus"><div class="exam-guide-top"><label>Focus <select data-exam-guide aria-label="Exam 4 study focus"><option value="guide"'+(mode==='guide'?' selected':'')+'>Exam 4 study guide</option><option value="all"'+(mode==='all'?' selected':'')+'>Everything</option></select></label><strong>'+ (mode==='all'?'All available Exam 4 content':name) +'</strong></div><p>Chapters <b>1, 2, 3, 6 and 34</b>, plus the two assigned Chapter 9 sections.</p><details><summary>See the assigned list</summary><ul><li>Chapter 1</li><li>Chapter 2</li><li>Chapter 3</li><li>Chapter 6</li><li>Chapter 9 — Peplau’s Model of the Nurse-Patient Relationship</li><li>Chapter 9 — Communication Skills for Nurses</li><li>Chapter 34</li></ul><p>Uses the list you supplied November 9. No exam question counts were supplied. Choose Everything for the additional mental-health material.</p></details></section>';
  }
  return { key:key,name:name,revision:revision,chapters:chapters,topicIds:topics,lessonIds:lessons,questionIds:questions,source:source,createStore:store,projectTopic:topic,select:select,html:html,videoIds:{dx:[],relationship:['CwZn-nxAvP4']},
    hasLesson:function(l){return lessons.indexOf(l.id)>=0;},hasQuestionId:function(id){return questions.indexOf(id)>=0;} };
});
