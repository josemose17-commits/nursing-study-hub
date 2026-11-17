// Exam 4 scope transcribed from the instructor's outline supplied by the student.
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.Exam4Guide = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';
  var key = 'e4-focus', name = 'Exam 4 study guide', revision = '20261117';
  var chapters = ['3','6','9','34'];
  var topics = ['neuro','legal','relationship','comm','groups'];
  var lessons = ['t-neuro','t-legal','t-e4-peplau','t-comm',
    't-groups-foundations','t-groups-design','t-groups-development','t-groups-roles','t-groups-modalities','t-groups-leadership','t-groups-safety','t-groups-participation'];
  function ids(prefix, n, pad) { return Array.from({length:n},function(_,i){return prefix+(pad?String(i+1).padStart(2,'0'):i+1);}); }
  var questions = ids('q-neuro-',12).concat(ids('q-legal-',6),['q-rel-1','q-e4-peplau-working'],ids('q-comm-',3),ids('q-g34-',12,true));
  var source = 'Instructor outline supplied by the student: Chapter 3; Chapter 6; Chapter 9 — Peplau’s Model of the Nurse-Patient Relationship and Communication Skills for Nurses; Chapter 34. Approximately 40 questions.';
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
    return '<section class="exam-guide" aria-label="Exam 4 study focus"><div class="exam-guide-top"><label>Focus <select data-exam-guide aria-label="Exam 4 study focus"><option value="guide"'+(mode==='guide'?' selected':'')+'>Exam 4 study guide</option><option value="all"'+(mode==='all'?' selected':'')+'>Everything</option></select></label><strong>'+ (mode==='all'?'All available Exam 4 content':name) +'</strong></div><p>Chapters <b>3, 6 and 34</b>, plus the two assigned Chapter 9 sections. The instructor estimates approximately <b>40 questions</b>.</p><details><summary>See the assigned list</summary><ul><li>Chapter 3</li><li>Chapter 6</li><li>Chapter 9 — Peplau’s Model of the Nurse-Patient Relationship</li><li>Chapter 9 — Communication Skills for Nurses</li><li>Chapter 34</li></ul><p>Uses the instructor outline you supplied. The actual question count and weighting may vary. Choose Everything for additional mental-health material.</p></details></section>';
  }
  return { key:key,name:name,revision:revision,chapters:chapters,topicIds:topics,lessonIds:lessons,questionIds:questions,source:source,createStore:store,projectTopic:topic,select:select,html:html,videoIds:{relationship:['CwZn-nxAvP4']},
    hasLesson:function(l){return lessons.indexOf(l.id)>=0;},hasQuestionId:function(id){return questions.indexOf(id)>=0;} };
});
