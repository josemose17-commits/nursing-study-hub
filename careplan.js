// Care plan helper: walks through the Clinical Reasoning Plan of Care with nurse-style questions, flags vital signs
// and labs, finds NANDA-I diagnoses by label or by cues, builds the care plan, and exports a Word file.
// Answers stay in this browser (localStorage keys cp-*). Google export is an explicit,
// reviewed action in careplan-google.js; the Word download uses this same document.
(function () {
  'use strict';
  var FORM = window.CP_FORM, SYS = window.CP_SYSTEMS, ERIK = window.CP_ERIK, LABS = window.CP_LABS, FE = window.CP_FE,
    VIT = window.CP_VITALS, IDX = window.NANDA_INDEX, OLD = window.NANDA_OLD || [], GUIDES = window.CP_GUIDES, CUES = window.CP_CUES;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function num(s) { var m = String(s == null ? '' : s).replace(/,/g, '').match(/-?\d*\.?\d+/); return m ? parseFloat(m[0]) : NaN; }
  function li(t) { return '<li>' + esc(t) + '</li>'; }
  function list(a) { a = a.filter(Boolean); return a.length < 3 ? a.join(' and ') : a.slice(0, -1).join(', ') + ', and ' + a[a.length - 1]; }
  function lc1(s) { s = String(s).trim(); return /^[A-Z][a-z]/.test(s) ? s.charAt(0).toLowerCase() + s.slice(1) : s; }
  function filled(v) { return v != null && String(v).trim() !== ''; }

  // ---------- NANDA-I index and guides ----------
  var DX = {}, DXL = [], G = {}, SYSM = {}, ITEMS = {}, LABM = {};
  IDX.forEach(function (d) {
    d[2].forEach(function (c) {
      if (!c[2]) return;
      c[2].split(';').forEach(function (s) {
        var a = s.split('|'), o = { c: a[0], l: a[1], p: a[2], dn: d[0], dom: d[1], cn: c[0], cls: c[1] };
        o.t = /^Risk for /.test(o.l) ? 'risk' : /^Readiness for enhanced /.test(o.l) ? 'promo' : 'problem';
        DX[o.c] = o; DXL.push(o);
      });
    });
  });
  GUIDES.forEach(function (g) { G[g.c] = g; });
  var CUE = {}; CUES.forEach(function (g) { g[1].forEach(function (c) { CUE[c[0]] = c[1]; }); });
  SYS.forEach(function (s) { SYSM[s[0]] = s; });
  LABS.forEach(function (pn) { pn.rows.forEach(function (r) { r.panel = pn.name; LABM[r.k] = r; }); });
  FORM.forEach(function (sec) { sec.items.forEach(function (it) { if (it.k) ITEMS[it.k] = it; }); });
  var TYPE = { problem: 'Problem-focused', risk: 'Risk', promo: 'Health promotion' };
  var IVT = { A: 'Assess', D: 'Do', T: 'Teach', C: 'Collaborate' };

  // ---------- storage (this device only) ----------
  function load(k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } }
  function store(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }
  var ME = load('cp-me', {}), plans = load('cp-plans', {}), cur = load('cp-cur', ''), P;
  if (!plans || typeof plans !== 'object' || Array.isArray(plans)) plans = {};
  if (!ME.student || !ME.instructor) { var am = load('apa-me', {}) || {}; ME.student = ME.student || am.name || ''; ME.instructor = ME.instructor || am.instructor || ''; }
  function newPlan() { var id = 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5); plans[id] = { id: id, created: Date.now(), updated: Date.now(), f: {} }; store('cp-plans', plans); return id; }
  function byRecent() { return Object.keys(plans).sort(function (a, b) { return (plans[b].updated || 0) - (plans[a].updated || 0); }); }
  function pick(id) {
    cur = id; P = plans[id].f = plans[id].f || {};
    // Older Informatics answers collided with the client-info object. Recover the surviving
    // answer without guessing lost demographics; new answers have an independent key.
    if(typeof P.info==='string'){
      if(!filled(P.informatics))P.informatics=P.info;
      P.info={};store('cp-plans',plans);
    }
    var oldCoach=P._coach&&P._coach['info::info'];
    if(oldCoach&&!P._coach['informatics::informatics']){P._coach['informatics::informatics']=oldCoach;delete P._coach['info::info'];store('cp-plans',plans);}
    if(P._workspace){
      if(P._workspace.active==='info')P._workspace.active='informatics';
      var targets=P._workspace.targets;
      if(targets&&targets.info==='info'){targets.informatics='informatics';delete targets.info;}
    }
    store('cp-cur', id);
  }
  if (!plans[cur]) cur = byRecent()[0] || newPlan();
  pick(cur);
  var saveT;
  function save() {
    plans[cur].updated = Date.now(); clearTimeout(saveT);
    saveT = setTimeout(function () { var ok = store('cp-plans', plans) && store('cp-me', ME); var s = $('#saved'); if (s) s.textContent = ok ? 'Saved on this device.' : 'Could not save: storage is full or blocked.'; }, 300);
  }
  function rootOf(path) { return path.indexOf('me.') === 0 ? [ME, path.slice(3)] : [P, path]; }
  function get(path) { var r = rootOf(path); return r[1].split('.').reduce(function (o, k) { return o == null ? undefined : o[k]; }, r[0]); }
  function set(path, v) {
    var r = rootOf(path), ks = r[1].split('.'), o = r[0];
    for (var i = 0; i < ks.length - 1; i++) { if (o[ks[i]] == null || typeof o[ks[i]] !== 'object') o[ks[i]] = /^\d+$/.test(ks[i + 1]) ? [] : {}; o = o[ks[i]]; }
    o[ks[ks.length - 1]] = v; save();
  }
  function sexKey() { var s = String(get('info.sex') || '').trim().toLowerCase(); return /^f|^woman/.test(s) ? 'F' : /^m|^man/.test(s) ? 'M' : ''; }

  // Saved APA references (from the APA papers page on this device) for citations.
  var REFS = [];
  function loadRefs() {
    REFS = (load('apa-refs', []) || []).filter(function (r) { return r && r.segs && r.cite; });
    var dl = $('#citelist'); if (dl) dl.innerHTML = REFS.map(function (r) { return '<option value="' + esc(r.cite.p) + '">'; }).join('');
  }

  // ---------- small builders ----------
  function inp(path, ph, extra) { return '<input type="text" data-p="' + path + '" value="' + esc(get(path) || '') + '"' + (ph ? ' placeholder="' + esc(ph) + '"' : '') + (extra || '') + ' autocomplete="off">'; }
  function ta(path, ph, cls) { return '<textarea data-p="' + path + '" rows="2"' + (ph ? ' placeholder="' + esc(ph) + '"' : '') + (cls ? ' class="' + cls + '"' : '') + '>' + esc(get(path) || '') + '</textarea>'; }
  function qh(t, cls) { return '<div class="q' + (cls ? ' ' + cls : '') + '">' + esc(t) + '</div>'; }
  function askBox(ask, tip, label) {
    // The form has one explanation and an optional example, rather than interview/wording modes.
    if (label !== 'Normal ranges') return '';
    return '<details class="help"><summary>Reference ranges</summary><ul>' + (ask || []).map(li).join('') + '</ul></details>';
  }

  function exBox(ex) { return ex ? '<details class="help ex"><summary>See an example</summary><p class="muted">Fictional example only. Write your own patient’s findings.</p>' + (typeof ex === 'string' ? '<p>' + esc(ex) + '</p>' : ex) + '</details>' : ''; }
  function helps(it, extra) { var h = askBox(Array.isArray(it.ask) ? it.ask : null, it.tip) + (typeof it.ex === 'string' ? exBox(it.ex) : '') + (extra || ''); return h ? '<div class="helps">' + h + '</div>' : ''; }
  function unitAttrs(key, label, target) { return ' data-cp-unit="' + esc(key) + '" data-cp-label="' + esc(label || key) + '"' + (target ? ' data-cp-target="' + esc(target) + '"' : ''); }
  function unit(key, label, html, target) { return '<div class="cp-unit"' + unitAttrs(key, label, target) + '>' + html + '</div>'; }
  function wrap(it, html) { return '<div class="item it-' + it.type + '" id="w-' + it.k + '"' + (['line','text','pmhmeds','vitals'].indexOf(it.type)>=0?unitAttrs(it.k,it.q||it.label,it.k):'') + '>' + html + '</div>'; }
  function renderEvent(before) { if(document.dispatchEvent&&window.CustomEvent)document.dispatchEvent(new window.CustomEvent(before?'careplan-before-render':'careplan-render')); }
  function citeIns(path) {
    if (!REFS.length) return '<p class="cite-hint">Rationales need a scholarly source. Save your sources in the <a href="APA Papers.html#refs">APA reference builder</a> and they show up here to insert.</p>';
    return '<select class="cite-ins" data-for="' + path + '" aria-label="Insert a citation"><option value="">Insert a citation…</option>' + REFS.map(function (r) { return '<option>' + esc(r.cite.p) + '</option>'; }).join('') + '</select>';
  }
  function exTable(head, rows) { return '<div class="tbl"><table><tr>' + head.map(function (h) { return '<th>' + esc(h) + '</th>'; }).join('') + '</tr>' + rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + esc(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</table></div>'; }

  // ---------- "What goes here" checklists ----------
  var INC = window.CP_INC || {}, SHOWINC = false;
  try { SHOWINC = localStorage.getItem('cp-showinc') === '1'; } catch (e) {}
  function idOf(k) { return String(k).replace(/[^A-Za-z0-9]/g, '-'); }
  // key: the entry in CP_INC; sk: where the ticks are stored (one per patient, per problem for the care plan)
  function incBox(key, label, sk) {
    var text = (window.CP_SIMPLE_INCLUDE || {})[key];
    if (!text) return '';
    return '<p class="cp-include"><strong>What to include:</strong> ' + esc(text) + '</p>';
  }

  function fh(key) { return typeof INC[key] === 'string' ? '<small class="fh">' + esc(INC[key]) + '</small>' : ''; }

  // ---------- "Questions to ask" ----------
  var ASKQ = window.CP_ASKQ || {}, ERIKQ = window.CP_ERIK_Q || [];
  function qList(title, arr) { return arr && arr.length ? '<div class="qg"><div class="qg-h">' + esc(title) + '</div><ul>' + arr.map(li).join('') + '</ul></div>' : ''; }
  function askQBody(d) { return qList('Ask your patient', d.pt) + qList('Ask the nurse, instructor or family', d.rn) + qList('Be ready to answer', d.them) + (d.tip ? '<p class="tip">' + esc(d.tip) + '</p>' : ''); }
  function askQ(key) { return ''; }
  function erikQ() {
    var s = stageOf(num(get('info.age')));
    if (s < 0) return '<p class="tip">Enter the age on the first card to see questions matched to the expected stage.</p>';
    return qList('Ask your patient (' + ERIK[s][0] + ', ' + ERIK[s][1] + ')', ERIKQ[s].concat(['How has being sick changed your day-to-day life?']));
  }

  // ---------- item renderers ----------
  var ME_KEYS = ['student', 'instructor', 'course', 'semester'];
  function fieldPath(k) { return (ME_KEYS.indexOf(k) >= 0 ? 'me.' : 'info.') + k; }
  var R = {};
  R.grid = function (it) { return '<div class="item">' + (it.fields[0][0] === 'initials' ? askQ('client') : '') + helps(it) + '<div class="fgrid">' + it.fields.map(function (f) { return unit(fieldPath(f[0]),f[1],'<label class="fld">' + esc(f[1]) + inp(fieldPath(f[0]), f[2]) + fh('f.' + f[0]) + '</label>',fieldPath(f[0])); }).join('') + '</div></div>'; };
  R.note = function (it) { return '<p class="note item">' + it.html + '</p>'; };
  R.line = function (it) { return wrap(it, '<label class="fld">' + esc(it.label) + inp(it.k, it.ph) + fh(it.k) + '</label>'); };
  R.text = function (it) {
    var extra = '';
    if (it.diag) extra = '<div class="btns sm"><button type="button" class="mini" data-q4>Use the statement from my care plan</button><button type="button" class="mini" data-tab="find">Find a diagnosis</button></div>';
    if (it.k === 'q5') extra = '<div class="btns sm"><button type="button" class="mini" data-q5>Copy my care plan interventions</button></div>';
    if (it.k === 'q3') extra = '<p class="cite-hint">Consider airway, breathing, circulation, safety, severity and time sensitivity. An imminent life-threatening risk can take priority over an existing less urgent problem.</p>';
    return wrap(it, qh(it.q) + incBox(it.k) + askQ(it.k) + helps(it) + ta(it.k) + (it.cite ? citeIns(it.k) : '') + extra);
  };
  function rowsWidget(it, cols, min, addLabel) {
    var rows = get(it.k), n = Math.max(min, Array.isArray(rows) ? rows.length : 0), h = '<div class="rows">';
    for (var i = 0; i < n; i++) {
      h += '<div class="rw cols' + cols.length + '"'+unitAttrs(it.k+'.'+i,(it.k==='meds'?'Medication':it.k==='orders'?'Medical order':'Support person')+' '+(i+1),it.k+'.'+i+'.'+(it.k==='meds'?4:it.k==='orders'?1:0))+'><span class="rn">' + (i + 1) + '</span>' + cols.map(function (c, j) {
        var p = it.k + '.' + i + '.' + j;
        return '<label class="fld">' + esc(c[0]) + (c[2] === 'ta' ? ta(p, c[1]) : inp(p, c[1])) + '</label>';
      }).join('') + '<button type="button" class="x" data-del="' + it.k + '.' + i + '" aria-label="Remove row ' + (i + 1) + '">×</button></div>';
    }
    return h + '</div><button type="button" class="mini" data-add="' + it.k + '">+ ' + addLabel + '</button>';
  }
  R.support = function (it) { return wrap(it, qh(it.q) + incBox('support') + askQ('support') + helps(it) + rowsWidget(it, [['Name', 'initials or first name'], ['Relationship to Patient', 'e.g., daughter']], 2, 'Add a person')); };
  var MEDCOLS = [['Medication', 'generic name'], ['Dose, route, frequency', ''], ['Class', ''], ['Treats (PMH)', 'which disease?'], ['What I check', 'before giving']];
  R.meds = function (it) {
    return wrap(it, qh(it.q) + incBox('meds') + askQ('meds') + helps(it, exBox(exTable(MEDCOLS.map(function (c) { return c[0]; }), it.ex))) + rowsWidget(it, MEDCOLS, 3, 'Add a medication'));
  };
  R.pmhmeds = function (it) { return wrap(it, qh(it.q) + incBox('pmhmeds') + askQ('pmhmeds') + helps(it) + '<div class="links" id="pmhlinks"></div>' + ta('pmhmeds', 'Anything to add: a disease with no medication, a medication with no matching disease…')); };
  R.orders = function (it) {
    var cols = [['Physician orders', 'e.g., Oxygen 2 L NC', 'ta'], ['Rationale', 'why for THIS patient', 'ta'], ['Expected Outcome', 'what shows it worked', 'ta']];
    return wrap(it, qh(it.q) + incBox('orders') + askQ('orders') + helps(it, exBox(exTable(cols.map(function (c) { return c[0]; }), it.ex))) + rowsWidget(it, cols, 3, 'Add an order') + citeIns('orders'));
  };
  function stageOf(age) { return isNaN(age) ? -1 : age < 1 ? 0 : age < 3 ? 1 : age < 6 ? 2 : age < 12 ? 3 : age < 18 ? 4 : age < 40 ? 5 : age < 65 ? 6 : 7; }
  function expected() { var a = num(get('info.age')), s = stageOf(a); return s < 0 ? '' : ERIK[s][0] + ': ' + ERIK[s][1]; }
  R.erikson = function (it) {
    var opts = '<option value="">Choose the stage you see…</option>' + ERIK.map(function (e, i) { return '<option value="' + i + '"' + (String(get('erik.stage')) === String(i) ? ' selected' : '') + '>' + esc(e[0] + ': ' + e[1]) + '</option>'; }).join('');
    return wrap(it, qh(it.q) + incBox('erik') + '<div id="erik-q" hidden></div>' + helps(it) +
      unit('erik.lvl','Expected Erikson stage','<div class="erik-exp" id="erik-exp"></div>'+inp('erik.lvl','Expected stage for their age'),'erik.lvl') +
      unit('erik.a','Assessed developmental level',qh(it.qa,'sm')+incBox('erik.a')+'<div class="helps">'+exBox(it.exa)+'</div><label class="fld">Stage you observed<select data-p="erik.stage">'+opts+'</select></label>'+ta('erik.a','Achieved or not, and how you can tell'),'erik.a') +
      unit('erik.b','Behaviors supporting the developmental assessment',qh(it.qb,'sm')+incBox('erik.b')+'<div class="helps">'+exBox(it.exb)+'</div>'+ta('erik.b')+'<div class="erik-hint" id="erik-hint"></div>','erik.b'));
  };
  var SB = { S: 'Situation', B: 'Background', A: 'Assessment', R: 'Recommendation' };
  R.sbar = function (it) {
    return wrap(it, qh(it.q) + askQ(it.k) + (it.tip ? '<p class="cite-hint">' + esc(it.tip) + '</p>' : '') + ['S', 'B', 'A', 'R'].map(function (x) {
      var coach=window.CP_COACH&&window.CP_COACH.sbProfile(it.k,x),detail=coach&&window.CP_COACH.detail&&window.CP_COACH.detail(it.k+'.'+x,it.k+'.'+x,coach);
      return '<div class="sbar"'+unitAttrs(it.k+'.'+x,SB[x],it.k+'.'+x)+'><span class="sb" aria-hidden="true">' + x + '</span><div class="sbf">' + qh(SB[x] + ':', 'sm') + incBox(it.k + '.' + x) + '<div class="helps">' + askBox(coach?coach.fields.map(function(f){return f.question;}):it.ask && it.ask[x]) + exBox(detail?detail.example:it.ex && it.ex[x]) + '</div>' + ta(it.k + '.' + x) + '</div></div>';
    }).join(''));
  };
  R.vitals = function (it) {
    var keys = VIT.filter(function (v) { return it.pain || v[0] !== 'pain'; });
    var ex = it.ex ? '<ul>' + keys.map(function (v) { return it.ex[v[0]] ? '<li><b>' + v[1] + ':</b> ' + esc(it.ex[v[0]]) + '</li>' : ''; }).join('') + '</ul>' : '';
    return wrap(it, qh(it.q) + askQ(it.k) + '<div class="helps">' + askBox(it.ask) + askBox(keys.map(function (v) { return v[1] + ': ' + v[2]; }), '', 'Normal ranges') + exBox(ex) + '</div>' +
      '<label class="fld">Actual assessment time' + inp(it.k+'.time','e.g., 0700 or 1105') + '</label><div class="vgrid">' + keys.map(function (v) {
        return '<label class="fld vf">' + v[1] + ':' + inp(it.k + '.' + v[0], v[0] === 'spo2' ? '% and device' : v[0] === 't' ? '°F or °C' : v[0] === 'bp' ? '120/80' : v[0] === 'pain' ? '0–10, where' : '') + fh('vs.' + v[0]) + '<span class="flag" id="f-' + it.k + '-' + v[0] + '"></span><span class="miss" id="m-' + it.k + '-' + v[0] + '"></span>' + (it.compare ? '<span class="was" id="was-' + it.k + '-' + v[0] + '"></span>' : '') + '</label>';
      }).join('') + '</div><div class="vnote" id="vn-' + it.k + '"></div>');
  };
  R.systems = function (it) {
    var order = it.order === 'eval' ? window.CP_EVAL_ORDER : SYS.map(function (s) { return s[0]; });
    return wrap(it, qh(it.q) + (it.compare ? incBox('sys2') + askQ('sys2') : '') + order.map(function (key) {
      var s = SYSM[key], path = it.k + '.' + key;
      return '<div class="sysrow"'+unitAttrs(path,s[1],path)+'>' + qh(s[1].toUpperCase() + ':', 'sm') + incBox('sys.' + key, 'What goes here', it.k + '.' + key) + (it.compare ? '' : askQ('sys.' + key)) + '<div class="helps">' + askBox(s[2]) + exBox(s[3]) +
        (it.compare ? '<button type="button" class="mini" data-copy="' + it.compare + '.' + key + '" data-to="' + path + '">Start from my first assessment</button>' : '') + '</div>' + ta(path) + '</div>';
    }).join(''));
  };

  // Labs
  function defRange(r) { var s = sexKey(); if (s && r[s]) return r[s][0] + '–' + r[s][1] + ' ' + (r.u || '') + (s === 'F' ? ' (female)' : ' (male)'); return r.r; }
  function parseRange(t) {
    t = String(t || '').replace(/,/g, ''); var m = t.match(/(\d*\.?\d+)\s*(?:–|-|to)\s*(\d*\.?\d+)/);
    if (m) return [+m[1], +m[2]];
    m = t.match(/(?:<|under|below|less than)\s*(\d*\.?\d+)/i); if (m) return [null, +m[1]];
    m = t.match(/(?:>|over|above|more than)\s*(\d*\.?\d+)/i); if (m) return [+m[1], null];
    return null;
  }
  function rangeOf(r) {
    var typed = get('labs.' + r.k + '.r');
    if (filled(typed) && typed !== defRange(r)) { var pr = parseRange(typed); if (pr) return pr; }
    var s = sexKey(); return s && r[s] ? r[s] : [r.lo, r.hi];
  }
  function labVal(r, s) { var v = num(s); if (!isNaN(v) && r.sm && v < r.sm) v *= 1000; return v; }
  function critOf(k) {
    var f = FE[k]; if (!f) return null; var t = f.crit.replace(/,/g, ''), lo = t.match(/under\s*(\d*\.?\d+)/), hi = t.match(/over\s*(\d*\.?\d+)/) || t.match(/(\d*\.?\d+)\s*\S*\s*or higher/);
    return [lo ? +lo[1] : null, hi ? +hi[1] : null];
  }
  // → '' | 'H' | 'L' | 'A' (abnormal, qualitative); critical adds '!'
  function labFlag(r, s) {
    if (!filled(s) || r.free) return '';
    if (r.q) { var t = String(s).toLowerCase(); return r.ok.some(function (w) { return t.indexOf(w) >= 0; }) && !/pos|\+|large|moderate|many|turbid|cloudy|red|brown|dark/.test(t.replace(/neg\w*/g, '')) ? '' : 'A'; }
    var v = labVal(r, s), rg = rangeOf(r); if (isNaN(v)) return '';
    var f = rg[1] != null && v > rg[1] ? 'H' : rg[0] != null && v < rg[0] ? 'L' : '';
    var c = critOf(r.k); if (f && c && ((c[0] != null && v < c[0]) || (c[1] != null && v >= c[1]))) f += '!';
    return f;
  }
  function flagHtml(f) { if (!f) return ''; var crit = f.indexOf('!') > 0, b = f.charAt(0); return '<b class="lf ' + (crit ? 'crit' : b === 'A' ? 'abn' : 'out') + '" title="' + (crit ? 'Possible critical value: notify now' : '') + '">' + (b === 'H' ? 'High' : b === 'L' ? 'Low' : 'Abnormal') + (crit ? ' · critical?' : '') + '</b>'; }
  R.labs = function (it) {
    return wrap(it, qh(it.q) + incBox('labs') + askQ('labs') + helps(it) + '<p class="note">Common adult ranges appear as hints. Enter the range verified in your lab report to include it in your document. Flags use the common range until you enter one. Counts like 15.8 for WBC or 210 for platelets are read as thousands.</p>' + LABS.map(function (pn) {
      var has = pn.rows.some(function (r) { return filled(get('labs.' + r.k + '.i')) || filled(get('labs.' + r.k + '.c')); });
      return '<details class="panel" id="lp-' + pn.id + '"' + (has || pn.id === 'cbc' || pn.id === 'bmp' ? ' open' : '') + '><summary><b>' + esc(pn.name) + '</b><span class="pc" id="pc-' + pn.id + '"></span></summary>' +
        '<div class="lhead" aria-hidden="true"><span>' + esc(pn.name) + '</span><span>Normal range</span><span>Initial value</span><span>Current value</span><span>Clinical significance/trends</span></div>' +
        pn.rows.map(function (r) {
          var b = 'labs.' + r.k;
          return '<div class="lrow" id="lr-' + r.k + '"'+unitAttrs(b,r.n,b+'.s')+'><div class="ln">' + esc(r.n) + '</div>' +
            '<label class="fld"><span class="lab-l">Normal range</span><input type="text" data-p="' + b + '.r" value="' + esc(get(b + '.r') || '') + '" placeholder="' + esc(defRange(r)) + '" autocomplete="off"></label>' +
            '<label class="fld"><span class="lab-l">Initial value</span>' + inp(b + '.i') + '<span class="lfl" id="lf-' + r.k + '-i"></span></label>' +
            '<label class="fld"><span class="lab-l">Current value</span>' + inp(b + '.c') + '<span class="lfl" id="lf-' + r.k + '-c"></span></label>' +
            '<label class="fld"><span class="lab-l">Clinical significance/trends</span>' + ta(b + '.s', '', 'sm') + '</label>' +
            '<div class="lhint" id="lh-' + r.k + '"></div></div>';
        }).join('') + '</details>';
    }).join(''));
  };

  // Fluid & electrolytes
  function abnormalLabs() {
    var out = [];
    LABS.forEach(function (pn) { pn.rows.forEach(function (r) { var c = get('labs.' + r.k + '.c'), i = get('labs.' + r.k + '.i'), f = labFlag(r, filled(c) ? c : i); if (f && f !== 'A') out.push(r.k); }); });
    return out;
  }
  function feBlock(i) {
    var b = 'fe.' + i, key = get(b + '.lab') || '', r = LABM[key], hl = get(b + '.hl') || '', g = FE[key], d = g && (hl === 'High' ? g.hi : hl === 'Low' ? g.lo : null);
    var ab = abnormalLabs(), seen = {}, opts = '<option value="">Choose a lab…</option>';
    function opt(k) { if (seen[k] || !LABM[k] || LABM[k].q) return ''; seen[k] = 1; return '<option value="' + k + '"' + (k === key ? ' selected' : '') + '>' + esc(LABM[k].n === 'Glucose' && LABM[k].panel !== 'Basic Metabolic Panel' ? 'Urine glucose' : LABM[k].n) + (ab.indexOf(k) >= 0 ? ' (abnormal)' : '') + '</option>'; }
    if (ab.length) opts += '<optgroup label="Abnormal for your patient">' + ab.map(opt).join('') + '</optgroup>';
    opts += '<optgroup label="Electrolytes and common picks">' + Object.keys(FE).map(opt).join('') + '</optgroup><optgroup label="Other labs">' + Object.keys(LABM).map(opt).join('') + '</optgroup>';
    function hint(t) { return t ? '<details class="help"><summary>Ideas to check against your patient</summary><p>' + esc(t) + '</p><p class="tip">Keep what fits your patient and write it in your own words, with a source.</p></details>' : ''; }
    var cause = d ? d.cause : r && hl ? (hl === 'High' ? r.up : r.dn) : '';
    return '<div class="fe-h">Lab ' + (i + 1) + (d ? ' · ' + esc(d.name) : '') + '</div>' +
      unit(b+'.values','Lab '+(i+1)+': values and ranges','<div class="fgrid">'+
      '<label class="fld">Lab<select data-p="'+b+'.lab">'+opts+'</select></label>'+
      '<label class="fld">Value'+inp(b+'.val')+'</label>'+
      '<label class="fld">High/Low<select data-p="'+b+'.hl"><option value=""></option><option'+(hl==='High'?' selected':'')+'>High</option><option'+(hl==='Low'?' selected':'')+'>Low</option></select></label>'+
      '<label class="fld">Normal value'+inp(b+'.norm',r?defRange(r)+' (verify facility)':'verify your lab report')+'</label>'+
      '<label class="fld">Critical value'+inp(b+'.crit',g?g.crit+' (verify facility)':'check your facility’s list')+'</label></div>'+fh('fe.lab')+fh('fe.norm'),b+'.val')+
      unit(b+'.rel','Lab '+(i+1)+': relevance',qh('Relevance','sm')+fh('fe.rel')+hint(g?g.rel:'')+ta(b+'.rel','Why does this lab matter for this patient?'),b+'.rel')+
      unit(b+'.cause','Lab '+(i+1)+': cause',qh(i?'What caused derangement?':'What caused imbalance?','sm')+fh('fe.cause')+hint(cause)+ta(b+'.cause'),b+'.cause')+
      unit(b+'.tx','Lab '+(i+1)+': treatment',qh('Treatment','sm')+fh('fe.tx')+hint(d&&d.tx)+ta(b+'.tx','What did the provider order?'),b+'.tx')+
      unit(b+'.nsg','Lab '+(i+1)+': nursing assessment / interventions',qh('Nsg. Assessments/interventions required:','sm')+fh('fe.nsg')+hint(d&&d.nsg)+ta(b+'.nsg')+citeIns(b+'.nsg'),b+'.nsg');
  }
  R.fe = function (it) { return wrap(it, qh(it.q) + incBox('fe') + askQ('fe') + helps(it) + [0, 1].map(function (i) { return '<div class="fe" id="fe-' + i + '">' + feBlock(i) + '</div>'; }).join('')); };
  function feAuto(i) {
    var b = 'fe.' + i, k = get(b + '.lab'), r = LABM[k]; if (!r) return;
    var v = filled(get('labs.' + k + '.c')) ? get('labs.' + k + '.c') : get('labs.' + k + '.i') || '', f = labFlag(r, v).charAt(0);
    set(b + '.val', v); set(b + '.hl', f === 'H' ? 'High' : f === 'L' ? 'Low' : '');
    set(b + '.norm', get('labs.' + k + '.r') || ''); set(b + '.crit', '');
  }

  // ---------- care plan builder ----------
  function planArr() { var a = get('plan'); return Array.isArray(a) ? a : []; }
  function buildStmt(i) {
    var b = 'plan.' + i, d = DX[get(b + '.c')]; if (!d) return '';
    var rf = (get(b + '.rf') || []).map(lc1), ae = (get(b + '.ae') || []).map(lc1);
    if (filled(get(b + '.rfx'))) rf.push(String(get(b + '.rfx')).trim());
    if (filled(get(b + '.aex'))) ae.push(String(get(b + '.aex')).trim());
    if (d.t === 'risk') return d.l + ' related to ' + (rf.length ? list(rf) : '[risk factors]');
    if (d.t === 'promo') return d.l + ' as evidenced by ' + (ae.length ? list(ae) : '[what the patient says or shows]');
    return d.l + ' related to ' + (rf.length ? list(rf) : '[cause nursing can change]') + ' as evidenced by ' + (ae.length ? list(ae) : '[your patient’s data]');
  }
  function autoStmt(i) {
    if (get('plan.' + i + '.stmtEd')) return;
    var s = buildStmt(i); set('plan.' + i + '.stmt', s);
    var t = $('#prob-' + i + ' textarea.stmt'); if (t) { t.value = s; grow(t); }
  }
  function chips(path, items) {
    var on = get(path) || [];
    return items && items.length ? '<div class="chips">' + items.map(function (t) { return '<button type="button" class="chip' + (on.indexOf(t) >= 0 ? ' on' : '') + '" data-chip="' + path + '" data-v="' + esc(t) + '" aria-pressed="' + (on.indexOf(t) >= 0) + '">' + esc(t) + '</button>'; }).join('') + '</div>' : '';
  }
  function sugs(path, items) { return items && items.length ? '<div class="chips sug">' + items.map(function (t) { return '<button type="button" class="chip" data-fill="' + path + '" data-v="' + esc(t) + '">Use: ' + esc(t) + '</button>'; }).join('') + '</div>' : ''; }
  function dxInfo(d) {
    if (!d) return '<p class="cite-hint">Type part of the label (old names work too) and pick it from the list, or use <button type="button" class="link" data-tab="find">Find a diagnosis</button> to start from your patient’s cues.</p>';
    var g = G[d.c];
    return '<div class="dxcard"><b>' + esc(d.l) + '</b> <span class="tag">' + d.c + '</span><span class="tag">' + TYPE[d.t] + '</span>' +
      '<div class="muted">NANDA-I 2024–2026, p. ' + d.p + ' · Domain ' + d.dn + ' ' + esc(d.dom) + ' › Class ' + d.cn + ' ' + esc(d.cls) + '</div>' +
      (g ? '<p>' + esc(g.plain) + '</p>' + (g.confuse ? '<p class="cite-hint"><b>Don’t mix it up:</b> ' + esc(g.confuse) + '</p>' : '') : '<p class="cite-hint">No guide on this site for this one yet: read the definition and the indicators on p. ' + d.p + ' of your NANDA-I book, then fill in the boxes below in your own words.</p>') +
      '<p class="cite-hint">Check the official definition and the full indicator list on p. ' + d.p + ' of your NANDA-I book. The suggestions below are a starting point in plain words, not the book’s list.</p>' +
      '<button type="button" class="link" data-dxopen="' + d.c + '">Open the full guide</button></div>';
  }
  function ivRows(i) {
    var rows = get('plan.' + i + '.iv') || [], h = '';
    rows.forEach(function (r, j) {
      if (!r) return;
      var b = 'plan.' + i + '.iv.' + j;
      h += '<div class="iv"'+unitAttrs(b,'Problem '+(i+1)+': intervention '+(j+1),b+'.1')+'><div class="iv-h"><span class="rn">' + (j + 1) + '</span><select data-p="' + b + '.0" aria-label="Type">' + Object.keys(IVT).map(function (k) { return '<option value="' + k + '"' + (r[0] === k ? ' selected' : '') + '>' + IVT[k] + '</option>'; }).join('') + '</select>' +
        '<button type="button" class="x" data-deliv="' + i + '.' + j + '" aria-label="Remove intervention ' + (j + 1) + '">×</button></div>' +
        '<label class="fld">Nursing intervention' + ta(b + '.1') + '</label>' +
        '<label class="fld">Scientific rationale' + ta(b + '.2') + '</label>' +
        '<label class="fld">Source (in-text citation)<input type="text" list="citelist" data-p="' + b + '.3" value="' + esc(r[3] || '') + '" placeholder="(Author, year)" autocomplete="off"></label></div>';
    });
    return h || '<p class="cite-hint">No interventions yet.</p>';
  }
  function probHtml(i) {
    var b='plan.'+i,d=DX[get(b+'.c')],g=d&&G[d.c],t=d?d.t:'problem';
    var h='<div class="prob" id="prob-'+i+'"><div class="prob-h"><b>Problem '+(i+1)+(i===0?' (your priority)':'')+'</b>'+(i>0?'<button type="button" class="mini" data-delprob="'+i+'">Remove</button>':'')+'</div>';
    h+=unit(b+'.dx','Problem '+(i+1)+': select a diagnosis','<div class="step-h">NANDA-I diagnosis</div><label class="fld">Search the labels<input type="text" list="dxlist" data-dx="'+i+'" value="'+esc(d?d.l+' ('+d.c+')':'')+'" placeholder="e.g., gas exchange, acute pain, falls" autocomplete="off"></label><div class="dxinfo">'+dxInfo(d)+'</div>');
    if(d){
      if(t!=='promo')h+=unit(b+'.rfx','Problem '+(i+1)+': related / risk factors','<div class="step-h">'+(t==='risk'?'Related to: the risk factors your patient has':'Related to: the cause, something nursing can change')+'</div><p class="cite-hint">Select the factors supported by your patient. Verify the label and related factors in your assigned book.</p>'+chips(b+'.rf',g?g.factors:[])+inp(b+'.rfx','In your own words, for your patient'),b+'.rfx');
      if(t!=='risk')h+=unit(b+'.aex','Problem '+(i+1)+': supporting cues','<div class="step-h">As evidenced by: what you saw and measured</div><p class="cite-hint">Use your patient’s actual findings and numbers.</p>'+chips(b+'.ae',g?g.cues:[])+inp(b+'.aex','Your patient’s specific findings'),b+'.aex');
      h+=unit(b+'.stmt','Problem '+(i+1)+': nursing statement','<div class="step-h">Client problem (Related to… as evidenced by…)</div>'+incBox(t==='risk'?'plan.stmt.risk':t==='promo'?'plan.stmt.promo':'plan.stmt','What goes in the statement','plan.stmt#'+i)+askQ('plan.stmt')+'<textarea data-p="'+b+'.stmt" class="stmt" rows="2">'+esc(get(b+'.stmt')||buildStmt(i))+'</textarea><div class="btns sm"><button type="button" class="mini" data-rebuild="'+i+'">Rebuild from my choices</button>'+(i===0?'<button type="button" class="mini" data-q4>Copy to question 4</button>':'')+'</div>',b+'.stmt');
      h+=unit(b+'.stg','Problem '+(i+1)+': short-term goal',qh('Short term:','sm')+incBox('plan.stg','What goes in a short-term goal','plan.stg#'+i)+sugs(b+'.stg',g?g.stg:[])+ta(b+'.stg','The patient will… by…')+'<div class="smart" id="sm-'+i+'-stg"></div>',b+'.stg');
      h+=unit(b+'.ltg','Problem '+(i+1)+': long-term goal',qh('Long term:','sm')+incBox('plan.ltg','What goes in a long-term goal','plan.ltg#'+i)+sugs(b+'.ltg',g?g.ltg:[])+ta(b+'.ltg','By discharge, the patient will…')+'<div class="smart" id="sm-'+i+'-ltg"></div>',b+'.ltg');
      h+='<div id="ivs-'+i+'">'+ivRows(i)+'</div>';
      h+=unit(b+'.iv.add','Problem '+(i+1)+': add interventions',incBox('plan.iv','What goes in this part','plan.iv#'+i)+askQ('plan.iv')+'<p class="cite-hint">Add planned actions with patient-specific parameters. Each scientific rationale needs a scholarly source and citation.</p><div class="btns sm">'+(g?'<button type="button" class="mini" data-addsug="'+i+'">Add suggested interventions for review</button>':'')+'<button type="button" class="mini" data-addiv="'+i+'">+ Add an intervention</button></div>');
      var ev=get(b+'.ev.s')||'';
      h+=unit(b+'.ev','Problem '+(i+1)+': evaluation',incBox('plan.ev','What goes in the evaluation','plan.ev#'+i)+askQ('plan.ev')+'<div class="radios" role="radiogroup" aria-label="Was the goal met?">'+[['met','Goal met'],['partly','Partially met'],['not','Not met']].map(function(o){return '<label><input type="radio" name="ev-'+i+'" data-p="'+b+'.ev.s" value="'+o[0]+'"'+(ev===o[0]?' checked':'')+'> '+o[1]+'</label>';}).join('')+'</div><div class="helps">'+exBox(g&&g.ev)+'</div><label class="fld">Evidence for the evaluation'+ta(b+'.ev.d','Before and after findings and the goal criterion')+'</label><label class="fld">Next plan'+ta(b+'.ev.next','Continue, revise or resolve, with the reason')+'</label>',b+'.ev.d');
    }
    return h+'</div>';
  }
  R.plan=function(it){var n=Math.max(1,planArr().length),h='<p class="lead sm">Build one problem per diagnosis. Your priority statement should match question 4.</p>';for(var i=0;i<n;i++)h+=probHtml(i);return wrap(it,h+unit('plan.add','Add another nursing problem','<button type="button" class="btn" data-addprob>+ Add another problem</button>'));};
  function smart(i, which) {
    var el = $('#sm-' + i + '-' + which); if (!el) return;
    var t = String(get('plan.' + i + '.' + which) || ''); if (!t.trim()) { el.innerHTML = ''; return; }
    var checks = [
      [!/^(the )?(nurse|student|I)\b|^(will )?(administer|give|monitor|assess|teach|encourage|provide|educate|help|assist|reposition|instruct)\b/i.test(t.trim()), 'About the patient, not a nursing action'],
      [/\b(stat|list|demonstrat|verbaliz|walk|ambulat|maintain|rate|report|drink|eat|identif|perform|use|show|cough|void|remain|stay|describ|explain|name|choose|participat|tak|sleep|complet|attend|ask|express|tolerat|achiev|keep|has|have|is free|will be)\w*/i.test(t), 'Action you can see or hear'],
      [/\d|\b(no|without|free of|all|every|independently|correctly)\b/i.test(t), 'Number or criterion'],
      [/\b(by|within|before|after|until|throughout|during|shift|discharge|follow-up|hours?|days?|minutes?|weeks?|months?|daily|today|tonight|tomorrow|each|every)\b/i.test(t), 'Time frame']
    ];
    var vague = t.match(/\b(understand|understands|know|knows|learn|learns|appreciate|be aware|feel better|feels better)\b/i);
    el.innerHTML = checks.map(function (c) { return '<span class="' + (c[0] ? 'ok' : 'no') + '">' + (c[0] ? '✓ ' : '✗ ') + c[1] + '</span>'; }).join('') + (vague ? '<span class="no">“' + esc(vague[0]) + '” can’t be measured: try states, demonstrates or lists</span>' : '');
  }

  // ---------- dynamic parts ----------
  function grow(t) { if (!t || t.tagName !== 'TEXTAREA' || NATIVE_GROW || !t.offsetParent) return; t.style.height = 'auto'; t.style.height = (t.scrollHeight + 2) + 'px'; }
  var NATIVE_GROW = !!(window.CSS && CSS.supports && CSS.supports('field-sizing', 'content'));
  function F(t) { var v = num(t); return isNaN(v) ? NaN : v > 50 ? v : v * 9 / 5 + 32; }
  function vitFlag(k, v) {
    var s = get(k + '.' + v); if (!filled(s)) return '';
    var x = num(s);
    if (v === 't') { var f = F(s); return f >= 100.4 ? 'Fever' : f < 96.8 ? 'Low: hypothermia' : f >= 99.5 ? 'Slightly high' : ''; }
    if (v === 'p') return x > 100 ? 'Tachycardia' : x < 60 ? 'Bradycardia' : '';
    if (v === 'r') return x > 20 ? 'Tachypnea' : x < 12 ? 'Bradypnea' : '';
    if (v === 'spo2') return x < 90 ? 'Hypoxemia' : x < 95 ? 'Below 95%' : '';
    if (v === 'pain') return x >= 7 ? 'Severe pain' : x >= 4 ? 'Moderate pain' : x > 0 ? 'Mild pain' : '';
    if (v === 'bp') {
      var m = String(s).match(/(\d+)\s*\/\s*(\d+)/); if (!m) return '';
      var sb = +m[1], db = +m[2], map = Math.round((sb + 2 * db) / 3), t = sb < 90 || map < 65 ? 'Hypotension' : sb >= 180 || db >= 120 ? 'Severe range' : sb >= 140 || db >= 90 ? 'Stage 2 range' : sb >= 130 || db >= 80 ? 'Stage 1 range' : sb >= 120 ? 'Elevated' : '';
      return (t ? t + ' · ' : '') + 'MAP ' + map;
    }
    return '';
  }
  function updVitals(k) {
    var it = ITEMS[k]; if (!it) return;
    VIT.forEach(function (v) {
      var el = $('#f-' + k + '-' + v[0]); if (el) { var f = vitFlag(k, v[0]); el.textContent = f; el.className = 'flag' + (f && !/^MAP/.test(f) ? ' on' : ''); }
      var ms = $('#m-' + k + '-' + v[0]); if (ms) { var raw = String(get(k + '.' + v[0]) || '').trim(); ms.textContent = !raw ? '' : v[0] === 'spo2' && !/[a-z]/i.test(raw) ? 'Add the device and flow (room air, 2 L NC).' : v[0] === 'pain' && !/[a-z]{3,}/i.test(raw) ? 'Add the location and what it feels like.' : v[0] === 'bp' && !/[a-z]{3,}/i.test(raw) && /\//.test(raw) ? 'Add the arm and position if your instructor wants them.' : ''; }
      var w = $('#was-' + k + '-' + v[0]); if (w) { var o = get(it.compare + '.' + v[0]); w.textContent = filled(o) ? 'was ' + o : ''; }
    });
    var T = F(get(k + '.t')), HR = num(get(k + '.p')), RR = num(get(k + '.r')), bp = String(get(k + '.bp') || '').match(/(\d+)\s*\//), SBP = bp ? +bp[1] : NaN;
    var wbc = labVal(LABM.wbc, filled(get('labs.wbc.c')) ? get('labs.wbc.c') : get('labs.wbc.i'));
    var sirs = (T >= 100.4 || T < 96.8 ? 1 : 0) + (HR > 90 ? 1 : 0) + (RR > 20 ? 1 : 0) + (wbc > 12000 || wbc < 4000 ? 1 : 0), notes = [];
    if (sirs >= 2) notes.push('Meets ' + sirs + ' SIRS criteria (temperature, HR over 90, RR over 20' + (isNaN(wbc) ? '' : ', WBC') + '). With an infection, screen for sepsis using your facility’s tool.');
    if (RR >= 22 && SBP <= 100) notes.push('RR 22 or more with SBP 100 or less: two qSOFA points. Check mental status and tell the nurse and your instructor now.');
    var spo = num(get(k + '.spo2')); if (spo < 90) notes.push('SpO₂ under 90%: raise the head of the bed, check the device, and report it now.');
    var nEl = $('#vn-' + k); if (nEl) nEl.innerHTML = notes.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('');
  }
  function updLab(k) {
    var r = LABM[k], fl = {};
    ['i', 'c'].forEach(function (w) { var f = labFlag(r, get('labs.' + k + '.' + w)); fl[w] = f; var el = $('#lf-' + k + '-' + w); if (el) el.innerHTML = flagHtml(f); });
    var h = $('#lh-' + k); if (!h) return;
    var f = (fl.c || fl.i).charAt(0), vi = labVal(r, get('labs.' + k + '.i')), vc = labVal(r, get('labs.' + k + '.c')), out = [];
    if (f) { var why = f === 'L' ? r.dn : r.up; if (why) out.push('<b>' + (f === 'H' ? 'High' : f === 'L' ? 'Low' : 'Abnormal') + ' can point to:</b> ' + esc(why) + '. Which fits your patient?'); }
    if (!r.q && !isNaN(vi) && !isNaN(vc) && vi !== vc) {
      var rg = rangeOf(r), mid = rg[0] != null && rg[1] != null ? (rg[0] + rg[1]) / 2 : rg[1] != null ? rg[1] / 2 : rg[0], better = Math.abs(vc - mid) < Math.abs(vi - mid);
      out.push('<b>Trend:</b> ' + (vc > vi ? 'rising' : 'falling') + (mid != null && (fl.i || fl.c) ? ', ' + (better ? 'toward' : 'away from') + ' normal' : '') + '.');
    }
    h.innerHTML = out.map(function (t) { return '<p>' + t + '</p>'; }).join('');
  }
  function updPanels() {
    LABS.forEach(function (pn) {
      var n = 0, any = 0; pn.rows.forEach(function (r) { var c = get('labs.' + r.k + '.c'), i = get('labs.' + r.k + '.i'); if (filled(c) || filled(i)) any++; if (labFlag(r, filled(c) ? c : i)) n++; });
      var el = $('#pc-' + pn.id); if (el) el.textContent = any ? ' · ' + any + ' entered' + (n ? ', ' + n + ' out of range' : '') : '';
    });
  }
  function words(s) { return String(s || '').toLowerCase().match(/[a-z]{4,}/g) || []; }
  function updPmh() {
    var el = $('#pmhlinks'); if (!el) return;
    var meds = (get('meds') || []).filter(function (r) { return r && filled(r[0]); }), groups = {}, order = [], none = [];
    meds.forEach(function (r) { var t = String(r[3] || '').trim(); if (!t) { none.push(r[0]); return; } var k = t.toLowerCase(); if (!groups[k]) { groups[k] = { t: t, m: [] }; order.push(k); } groups[k].m.push(String(r[0]).trim()); });
    var pmh = String(get('pmh') || '').split(/[,;\n]+|\band\b/).map(function (s) { return s.replace(/\.$/, '').trim(); }).filter(Boolean);
    var missing = pmh.filter(function (p) { var w = words(p); return !order.some(function (k) { return words(k).some(function (x) { return w.indexOf(x) >= 0; }); }); });
    el.innerHTML = (order.length ? '<ul class="lk">' + order.map(function (k) { return '<li><b>' + esc(groups[k].t) + '</b> <span aria-hidden="true">⟷</span> ' + esc(groups[k].m.join(', ')) + '</li>'; }).join('') + '</ul>' : '<p class="cite-hint">Fill the “Treats (PMH)” column above and the links appear here.</p>') +
      (none.length ? '<p class="warn">Which disease does ' + esc(list(none)) + ' treat?</p>' : '') +
      (missing.length && order.length ? '<p class="warn">No medication listed yet for: ' + esc(missing.join('; ')) + '. Untreated, treated without drugs, or a PRN you missed?</p>' : '');
  }
  function pmhText() {
    var meds = (get('meds') || []).filter(function (r) { return r && filled(r[0]); }), g = {}, o = [];
    meds.forEach(function (r) { var t = String(r[3] || '').trim() || '(disease not listed)'; if (!g[t]) { g[t] = []; o.push(t); } g[t].push(String(r[0]).trim()); });
    return o.map(function (t) { return t + ': ' + g[t].join(', '); }).join('\n');
  }
  function updErik() {
    var eq = $('#erik-q'); if (eq) eq.innerHTML = erikQ();
    var e = $('#erik-exp'), a = num(get('info.age')), s = stageOf(a), h = $('#erik-hint'), st = get('erik.stage');
    if (e) e.innerHTML = s < 0 ? '<p class="cite-hint">Enter the age on the first card and the expected stage appears here.</p>' : '<p><b>Expected for age ' + esc(get('info.age')) + ':</b> ' + esc(ERIK[s][0] + ', ' + ERIK[s][1]) + '. Achieved when the person ' + esc(ERIK[s][2]) + '.</p>' + (filled(get('erik.lvl')) ? '' : '<button type="button" class="mini" data-fill="erik.lvl" data-v="' + esc(expected()) + '">Use: ' + esc(expected()) + '</button>');
    if (h) h.innerHTML = filled(st) ? '<p><b>' + esc(ERIK[st][1]) + '.</b> Signs it is achieved: ' + esc(ERIK[st][2]) + '. Signs it is not: ' + esc(ERIK[st][3]) + '.' + (s >= 0 && +st !== s ? ' This is not the expected stage for their age, so explain why in A.' : '') + '</p>' : '';
  }
  function updDefaults() { ['hgb', 'cr'].forEach(function (k) { var el = $('[data-p="labs.' + k + '.r"]'); if (el && !filled(get('labs.' + k + '.r'))) el.value = defRange(LABM[k]); updLab(k); }); }

  // progress per section
  function secStats(sec) {
    var d = 0, t = 0;
    function c(p) { t++; if (filled(get(p))) d++; }
    function anyRow(k, col) { t++; if ((get(k) || []).some(function (r) { return r && filled(r[col]); })) d++; }
    sec.items.forEach(function (it) {
      switch (it.type) {
        case 'grid': it.fields.forEach(function (f) { c(fieldPath(f[0])); }); break;
        case 'text': case 'line': c(it.k); break;
        case 'support': anyRow('support', 0); break;
        case 'meds': anyRow('meds', 0); break;
        case 'orders': anyRow('orders', 0); break;
        case 'erikson': c('erik.a'); c('erik.b'); t++; if (filled(get('erik.lvl')) || filled(get('info.age'))) d++; break;
        case 'sbar': ['S', 'B', 'A', 'R'].forEach(function (x) { c(it.k + '.' + x); }); break;
        case 'vitals': VIT.forEach(function (v) { if (it.pain || v[0] !== 'pain') c(it.k + '.' + v[0]); }); break;
        case 'systems': SYS.forEach(function (s) { c(it.k + '.' + s[0]); }); break;
        case 'labs': t++; if (Object.keys(LABM).some(function (k) { return filled(get('labs.' + k + '.i')) || filled(get('labs.' + k + '.c')); })) d++; break;
        case 'fe': [0, 1].forEach(function (i) { t++; if (filled(get('fe.' + i + '.lab')) && filled(get('fe.' + i + '.cause'))) d++; }); break;
        case 'plan': c('plan.0.stmt'); c('plan.0.stg'); c('plan.0.ltg'); t++; if ((get('plan.0.iv') || []).some(function (r) { return r && filled(r[1]); })) d++; c('plan.0.ev.d'); break;
      }
    });
    return [d, t];
  }
  var progT;
  function updProgress() {
    cancelAnimationFrame(progT);
    progT = requestAnimationFrame(function () {
      var toc = $('#toc'); if (!toc) return;
      toc.innerHTML = FORM.map(function (sec) { var s = secStats(sec); return '<a href="#s-' + sec.id + '"' + (s[1] && s[0] === s[1] ? ' class="done"' : '') + '>' + esc(sec.title) + ' <small>' + s[0] + '/' + s[1] + '</small></a>'; }).join('');
    });
  }
  function refreshAll() {
    ['vs1', 'vs2'].forEach(updVitals); Object.keys(LABM).forEach(updLab); updPanels(); updPmh(); updErik();
    planArr().forEach(function (x, i) { smart(i, 'stg'); smart(i, 'ltg'); });
    updProgress(); $$('#form textarea').forEach(grow);
  }

  // ---------- render ----------
  function formMarkup(){return FORM.map(function(sec){return '<section class="glass cp-sec" id="s-'+sec.id+'"><h2>'+esc(sec.title)+'</h2>'+sec.items.map(function(it){return R[it.type](it);}).join('')+'</section>';}).join('');}
  function renderForm(){renderEvent(true);$('#form').innerHTML=formMarkup();refreshAll();renderEvent(false);}
  function rerender(k){renderEvent(true);var el=$('#w-'+k);if(!el){renderEvent(false);return;}el.outerHTML=R[ITEMS[k].type](ITEMS[k]);if(k==='plan')planArr().forEach(function(x,i){smart(i,'stg');smart(i,'ltg');});if(k==='meds')updPmh();$$('#w-'+k+' textarea').forEach(grow);updProgress();renderEvent(false);}
  function rerenderProb(i){renderEvent(true);var el=$('#prob-'+i);if(!el){renderEvent(false);return rerender('plan');}el.outerHTML=probHtml(i);smart(i,'stg');smart(i,'ltg');$$('#prob-'+i+' textarea').forEach(grow);updProgress();renderEvent(false);}
  function rerenderFe(i){renderEvent(true);var el=$('#fe-'+i);if(el){el.innerHTML=feBlock(i);$$('#fe-'+i+' textarea').forEach(grow);}renderEvent(false);}
  function renderIv(i){renderEvent(true);var el=$('#ivs-'+i);if(el)el.innerHTML=ivRows(i);updProgress();renderEvent(false);}
  function renderPatients() {
    var sel = $('#pt'); if (!sel) return;
    sel.innerHTML = byRecent().map(function (id) {
      var p = plans[id], f = (p.f && p.f.info) || {}, d = new Date(p.created || Date.now());
      return '<option value="' + id + '"' + (id === cur ? ' selected' : '') + '>' + esc((f.initials || 'New patient') + (f.room ? ' · room ' + f.room : '') + ' · started ' + d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })) + '</option>';
    }).join('');
  }
  function renderAll() { loadRefs(); renderPatients(); renderForm(); renderFind(); if (currentTab === 'dl') renderDl(); }

  // ---------- events ----------
  function after(p, el) {
    if (el && el.tagName === 'TEXTAREA') grow(el);
    var m;
    if ((m = /^(vs[12])\./.exec(p))) { updVitals(m[1]); if (m[1] === 'vs1') updVitals('vs2'); }
    else if ((m = /^labs\.(\w+)\./.exec(p))) { updLab(m[1]); updPanels(); if (m[1] === 'wbc') { updVitals('vs1'); updVitals('vs2'); } }
    else if (/^meds\./.test(p) || p === 'pmh') updPmh();
    else if (p === 'info.age' || p === 'erik.stage' || p === 'erik.lvl') updErik();
    else if (p === 'info.sex') updDefaults();
    else if (p === 'info.initials' || p === 'info.room') renderPatients();
    else if ((m = /^plan\.(\d+)\.(rfx|aex)$/.exec(p))) autoStmt(+m[1]);
    else if ((m = /^plan\.(\d+)\.stmt$/.exec(p))) set('plan.' + m[1] + '.stmtEd', true);
    else if ((m = /^plan\.(\d+)\.(stg|ltg)$/.exec(p))) smart(+m[1], m[2]);
    else if ((m = /^fe\.(\d)\.lab$/.exec(p))) { feAuto(+m[1]); rerenderFe(+m[1]); }
    else if ((m = /^fe\.(\d)\.hl$/.exec(p))) rerenderFe(+m[1]);
    updProgress();
  }
  function onInput(e) {
    var el = e.target, p = el.getAttribute && el.getAttribute('data-p');
    if (p) {
      if (el.tagName === 'SELECT' || el.type === 'radio') { if (e.type !== 'change' || (el.type === 'radio' && !el.checked)) return; }
      else if (e.type === 'change') return;
      set(p, el.value); after(p, el); return;
    }
    if (el.hasAttribute && el.hasAttribute('data-dx') && (e.type === 'change' || /\(\d{5}\)$/.test(el.value))) chooseDx(+el.getAttribute('data-dx'), el.value);
    if (el.classList && el.classList.contains('cite-ins') && e.type === 'change' && el.value) {
      var to = el.getAttribute('data-for'), cur0 = String(get(to) || '');
      if (to === 'orders') { navigator.clipboard && navigator.clipboard.writeText(el.value); el.value = ''; toast('Citation copied. Paste it at the end of the rationale.'); return; }
      if (cur0.indexOf(el.value) < 0) { set(to, cur0.replace(/\s+$/, '') + (cur0.trim() ? ' ' : '') + el.value); var t = $('[data-p="' + to + '"]'); if (t) { t.value = get(to); grow(t); } }
      el.value = ''; updProgress();
    }
    if (el.hasAttribute && el.hasAttribute('data-inc') && e.type === 'change') {
      var ik = el.getAttribute('data-inc'), io = get('inc') || {}; io[ik] = io[ik] || {}; io[ik][el.getAttribute('data-i')] = el.checked; set('inc', io);
      var cn = document.getElementById('ic-' + idOf(ik)); if (cn) cn.textContent = Object.keys(io[ik]).filter(function (x) { return io[ik][x]; }).length + '/' + el.getAttribute('data-n');
      return;
    }
    if (el.hasAttribute && el.hasAttribute('data-cue') && e.type === 'change') { var cs = get('cues') || {}; cs[el.getAttribute('data-cue')] = el.checked; set('cues', cs); suggest(); }
  }
  function matchDx(v) {
    v = String(v || '').trim(); var m = v.match(/\((\d{5})\)\s*$/); if (m && DX[m[1]]) return DX[m[1]];
    var lv = v.toLowerCase(); return DXL.filter(function (d) { return d.l.toLowerCase() === lv; })[0] || null;
  }
  function chooseDx(i, v) {
    var d = matchDx(v); if (!d || d.c === get('plan.' + i + '.c')) return;
    setDx(i, d.c); rerenderProb(i); var inp0 = $('#prob-' + i + ' [data-dx]'); if (inp0) inp0.focus();
  }
  function setDx(i, code) {
    var g = G[code], b = 'plan.' + i, old = get(b) || {};
    var keep = { c: code, stg: old.stg || '', ltg: old.ltg || '', ev: old.ev || {} };
    keep.iv = (old.iv || []).filter(function (r) { return r && filled(r[1]); });
    if (!keep.iv.length && g) keep.iv = g.iv.map(function (r) { return [r[0], r[1], r[2], '']; });
    var A = planArr().slice(); while (A.length < i) A.push({}); A[i] = keep; set('plan', A); autoStmt(i);
  }
  function toast(t) { var el = $('#toast'); if (!el) return; el.textContent = t; el.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(function () { el.hidden = true; }, 2600); }
  function onClick(e) {
    var b = e.target.closest && e.target.closest('button, a[data-tab]'); if (!b) return;
    var a, i, arr, k;
    if ((a = b.getAttribute('data-tab'))) { e.preventDefault(); showTab(a); return; }
    if ((a = b.getAttribute('data-add'))) { arr = (get(a) || []).slice(); var w = ITEMS[a].type === 'meds' ? 5 : ITEMS[a].type === 'orders' ? 3 : 2, n = Math.max(arr.length, ITEMS[a].type === 'meds' || ITEMS[a].type === 'orders' ? 3 : 2); while (arr.length < n) arr.push(new Array(w).fill('')); arr.push(new Array(w).fill('')); set(a, arr); rerender(a); return; }
    if ((a = b.getAttribute('data-del'))) { k = a.split('.'); arr = (get(k[0]) || []).slice(); arr.splice(+k[1], 1); set(k[0], arr); rerender(k[0]); return; }
    if ((a = b.getAttribute('data-copy'))) { var to = b.getAttribute('data-to'), src = get(a) || ''; if (!filled(src)) return toast('Your first assessment for this system is empty.'); if (filled(get(to)) && !confirm('Replace what you wrote here with your first assessment?')) return; set(to, src); var t = $('[data-p="' + to + '"]'); if (t) { t.value = src; grow(t); t.focus(); } updProgress(); return; }
    if ((a = b.getAttribute('data-chip'))) { arr = (get(a) || []).slice(); var v = b.getAttribute('data-v'), j = arr.indexOf(v); if (j >= 0) arr.splice(j, 1); else arr.push(v); set(a, arr); b.classList.toggle('on', j < 0); b.setAttribute('aria-pressed', j < 0); autoStmt(+a.split('.')[1]); updProgress(); return; }
    if ((a = b.getAttribute('data-fill'))) { var cv = String(get(a) || ''), nv = b.getAttribute('data-v'); set(a, cv.trim() ? cv.replace(/\s+$/, '') + '\n' + nv : nv); var tt = $('[data-p="' + a + '"]'); if (tt) { tt.value = get(a); grow(tt); } after(a, tt); return; }
    if ((a = b.getAttribute('data-rebuild'))) { set('plan.' + a + '.stmtEd', false); autoStmt(+a); return; }
    if (b.hasAttribute('data-q4')) { var s = get('plan.0.stmt'); if (!filled(s)) { toast('Build the care plan statement first (last section).'); return; } if (filled(get('q4')) && get('q4') !== s && !confirm('Replace your answer to question 4 with the care plan statement?')) return; set('q4', s); var q = $('[data-p="q4"]'); if (q) { q.value = s; grow(q); } toast('Question 4 now matches your care plan.'); updProgress(); return; }
    if (b.hasAttribute('data-q5')) { var ivs = (get('plan.0.iv') || []).filter(function (r) { return r && filled(r[1]); }); if (!ivs.length) { toast('Add interventions to the care plan first.'); return; } var txt = ivs.map(function (r) { return r[1]; }).join('\n'); if (filled(get('q5')) && !confirm('Replace your answer to question 5?')) return; set('q5', txt); var q5 = $('[data-p="q5"]'); if (q5) { q5.value = txt; grow(q5); } updProgress(); return; }
    if ((a = b.getAttribute('data-addsug'))) { i = +a; var g = G[get('plan.' + i + '.c')]; if (!g) return; arr = (get('plan.' + i + '.iv') || []).filter(Boolean); var have = arr.map(function (r) { return r[1]; }); g.iv.forEach(function (r) { if (have.indexOf(r[1]) < 0) arr.push([r[0], r[1], r[2], '']); }); set('plan.' + i + '.iv', arr); renderIv(i); $$('#ivs-' + i + ' textarea').forEach(grow); updProgress(); return; }
    if ((a = b.getAttribute('data-addiv'))) { i = +a; arr = (get('plan.' + i + '.iv') || []).filter(Boolean); arr.push(['A', '', '', '']); set('plan.' + i + '.iv', arr); renderIv(i); var last = $$('#ivs-' + i + ' .iv'); last = last[last.length - 1]; if (last && !(window.CPWorkspace && window.CPWorkspace.active())) $('textarea', last).focus(); return; }
    if ((a = b.getAttribute('data-deliv'))) { k = a.split('.'); arr = (get('plan.' + k[0] + '.iv') || []).filter(Boolean); arr.splice(+k[1], 1); set('plan.' + k[0] + '.iv', arr); renderIv(+k[0]); $$('#ivs-' + k[0] + ' textarea').forEach(grow); updProgress(); return; }
    if (b.hasAttribute('data-addprob')) { arr = planArr().slice(); if (!arr.length) arr.push({}); arr.push({}); set('plan', arr); rerender('plan'); var pr = $('#prob-' + (arr.length - 1)); if (pr && !(window.CPWorkspace && window.CPWorkspace.active())) pr.scrollIntoView({ block: 'start' }); return; }
    if ((a = b.getAttribute('data-delprob'))) { if (!confirm('Remove problem ' + (+a + 1) + ' and everything in it?')) return; if(window.CPWorkspace)window.CPWorkspace.removed('plan.',+a); arr = planArr().slice(); arr.splice(+a, 1); set('plan', arr); rerender('plan'); return; }
    if ((a = b.getAttribute('data-dxopen'))) { showTab('find'); openDx(a); return; }
    if ((a = b.getAttribute('data-use'))) { usePlan(a, b.getAttribute('data-mode')); return; }
  }
  function usePlan(code, mode) {
    var A = planArr(), i = 0;
    if (mode === 'add') { i = A.length && A[0] && A[0].c ? A.length : 0; }
    else if (A[0] && A[0].c && A[0].c !== code && (filled(A[0].stg) || filled(A[0].stmt) || (A[0].iv || []).length) && !confirm('Replace problem 1 (' + (DX[A[0].c] ? DX[A[0].c].l : '') + ')? Its goals and evaluation stay; interventions you wrote stay too.')) return;
    setDx(i, code); showTab('fill'); rerender('plan');
    if(window.CPWorkspace&&window.CPWorkspace.open)window.CPWorkspace.open('plan.'+i+'.stmt');else{var el=$('#prob-'+i);if(el)el.scrollIntoView({block:'start'});}
    toast('Added to your care plan as problem ' + (i + 1) + '.');
  }

  // ---------- Find a diagnosis ----------
  function typeTag(d) { return '<span class="tag t-' + d.t + '">' + TYPE[d.t] + '</span>'; }
  function dxBtn(d, extra) { return '<button type="button" class="dxr" data-dxopen="' + d.c + '"><b>' + esc(d.l) + '</b><span class="meta">' + d.c + ' · p. ' + d.p + ' · ' + esc(d.dom) + ' › ' + esc(d.cls) + '</span><span>' + typeTag(d) + (G[d.c] ? '<span class="tag g">Guide</span>' : '') + '</span>' + (extra || '') + '</button>'; }
  function search(q) {
    var out = $('#dxres'); q = String(q || '').trim().toLowerCase(); if (!q) { out.innerHTML = ''; return; }
    var toks = q.split(/\s+/), hits = DXL.filter(function (d) { var s = (d.l + ' ' + d.c + ' ' + d.dom + ' ' + d.cls).toLowerCase(); return toks.every(function (t) { return s.indexOf(t) >= 0; }); });
    var olds = OLD.filter(function (o) { var s = o[0].toLowerCase(); return toks.every(function (t) { return s.indexOf(t) >= 0; }) && DX[o[1]]; });
    hits.sort(function (a, b) { return (G[b.c] ? 1 : 0) - (G[a.c] ? 1 : 0) || a.l.length - b.l.length; });
    out.innerHTML = (olds.length ? olds.map(function (o) { return '<p class="old">“' + esc(o[0]) + '” is an older label. In NANDA-I 2024–2026 look at: </p>' + dxBtn(DX[o[1]]); }).join('') : '') +
      (hits.length ? '<p class="muted">' + hits.length + ' label' + (hits.length > 1 ? 's' : '') + (hits.length > 30 ? ', showing 30' : '') + '</p>' + hits.slice(0, 30).map(function (d) { return dxBtn(d); }).join('') : olds.length ? '' : '<p class="muted">No label matches. Try one word (“pain”, “skin”, “fluid”).</p>');
  }
  function renderFind() {
    var cs = get('cues') || {};
    $('#cues').innerHTML = CUES.map(function (g) { return '<fieldset class="cueg"><legend>' + esc(g[0]) + '</legend>' + g[1].map(function (c) { return '<label class="cue"><input type="checkbox" data-cue="' + c[0] + '"' + (cs[c[0]] ? ' checked' : '') + '><span>' + esc(c[1]) + '</span></label>'; }).join('') + '</fieldset>'; }).join('');
    $('#browse').innerHTML = IDX.map(function (d) {
      var n = 0; d[2].forEach(function (c) { if (c[2]) n += c[2].split(';').length; });
      return '<details class="dom"><summary><b>Domain ' + d[0] + '. ' + esc(d[1]) + '</b> <small>' + n + '</small></summary>' + d[2].map(function (c) {
        return '<div class="cls"><div class="cls-h">Class ' + c[0] + '. ' + esc(c[1]) + '</div>' + (c[2] ? c[2].split(';').map(function (s) { return dxBtn(DX[s.split('|')[0]]); }).join('') : '<p class="muted">No diagnoses in this class in this edition.</p>') + '</div>';
      }).join('') + '</details>';
    }).join('');
    suggest(); search($('#dxq').value);
  }
  function suggest() {
    var cs = get('cues') || {}, sel = Object.keys(cs).filter(function (k) { return cs[k]; }), out = $('#sugg');
    if (!sel.length) { out.innerHTML = '<p class="muted">Tick what your patient has. Diagnoses that match the most cues come first.</p>'; return; }
    var rank = { problem: 0, risk: 1, promo: 2 };
    var res = GUIDES.map(function (g) { var m = g.tags.filter(function (t) { return cs[t]; }); return { g: g, m: m }; }).filter(function (x) { return x.m.length; })
      .sort(function (a, b) { return b.m.length - a.m.length || (b.m.length / b.g.tags.length) - (a.m.length / a.g.tags.length) || rank[a.g.t] - rank[b.g.t]; }).slice(0, 12);
    out.innerHTML = '<p class="muted">' + sel.length + ' cue' + (sel.length > 1 ? 's' : '') + ' ticked. Pick the diagnosis your data proves, then put it in priority order (airway, breathing, circulation, safety).</p>' +
      res.map(function (x) { var d = DX[x.g.c]; return d ? dxBtn(d, '<span class="why">Matches: ' + esc(x.m.map(function (t) { return CUE[t]; }).join('; ')) + '</span>') : ''; }).join('');
  }
  function autoCues() {
    var cs = get('cues') || {}, why = [];
    function on(k, w) { if (!cs[k]) { cs[k] = true; why.push(CUE[k] + ' (' + w + ')'); } }
    ['vs1', 'vs2'].forEach(function (k) {
      var T = F(get(k + '.t')), HR = num(get(k + '.p')), RR = num(get(k + '.r')), sp = num(get(k + '.spo2')), pn = num(get(k + '.pain')), bp = String(get(k + '.bp') || '').match(/(\d+)\s*\/\s*(\d+)/);
      if (sp < 92) on('spo2', 'SpO₂ ' + sp + '%'); if (RR > 20) on('rrfast', 'RR ' + RR); if (RR < 12) on('rrslow', 'RR ' + RR);
      if (HR > 100 || HR < 60) on('hr', 'HR ' + HR); if (T >= 100.4) on('fever', 'temp ' + get(k + '.t')); if (pn > 0) on('pain', 'pain ' + get(k + '.pain'));
      if (bp && (+bp[1] < 90)) on('bplow', 'BP ' + bp[0]); if (bp && (+bp[1] >= 140 || +bp[2] >= 90)) on('bphigh', 'BP ' + bp[0]);
    });
    function lf(k) { var c = get('labs.' + k + '.c'), i = get('labs.' + k + '.i'); return labFlag(LABM[k], filled(c) ? c : i).charAt(0); }
    if (lf('wbc') === 'H') on('fever', 'WBC high'); if (lf('wbc') === 'L') on('immuno', 'WBC low');
    if (lf('plt') === 'L' || lf('inr') === 'H') on('bleed', lf('plt') === 'L' ? 'platelets low' : 'INR high');
    if (lf('glu')) on('glucose', 'glucose ' + (lf('glu') === 'H' ? 'high' : 'low'));
    ['na', 'k', 'ca', 'mg'].forEach(function (k) { if (lf(k)) on('lytes', LABM[k].n + ' ' + (lf(k) === 'H' ? 'high' : 'low')); });
    if (lf('bun') === 'H' || lf('usg') === 'H') on('dry', lf('bun') === 'H' ? 'BUN high' : 'urine concentrated');
    if (lf('alb') === 'L') on('intake', 'albumin low'); if (lf('lact') === 'H') on('shock', 'lactate high');
    if (lf('ph') || lf('pco2')) on('abg', 'ABG abnormal'); if (lf('po2') === 'L' || lf('sao2') === 'L') on('spo2', 'PaO₂ or SaO₂ low');
    if (lf('bnp') === 'H') on('edema', 'BNP high');
    set('cues', cs); renderFind();
    $('#autonote').innerHTML = why.length ? '<p><b>Ticked from your form:</b> ' + esc(why.join('; ')) + '. Now add what you saw on assessment (lung sounds, skin, mood, mobility).</p>' : '<p class="muted">Nothing new to tick from your vitals and labs. Enter them in the form first, or tick the cues by hand.</p>';
  }
  function openDx(code) {
    var d = DX[code], g = G[code], v = $('#dxview'); if (!d) return;
    var h = '<div class="dxv-h"><div><div class="kicker">NANDA-I 2024–2026 · p. ' + d.p + '</div><h2>' + esc(d.l) + '</h2><div class="muted">' + d.c + ' · Domain ' + d.dn + ' ' + esc(d.dom) + ' › Class ' + d.cn + ' ' + esc(d.cls) + '</div></div><button type="button" class="x" id="dxclose" aria-label="Close">×</button></div><p>' + typeTag(d) + '</p>';
    if (g) {
      h += '<p class="lead">' + esc(g.plain) + '</p>' + (g.confuse ? '<div class="rule"><b>Don’t mix it up:</b> ' + esc(g.confuse) + '</div>' : '');
      h += '<div class="grid2">' + (g.cues && g.cues.length ? '<div class="card"><b class="t">' + (g.t === 'promo' ? 'What the patient says or shows' : 'Cues to look for') + '</b><ul>' + g.cues.map(li).join('') + '</ul></div>' : '') +
        (g.factors && g.factors.length ? '<div class="card"><b class="t">' + (g.t === 'risk' ? 'Risk factors to check' : 'Related factors (causes) to check') + '</b><ul>' + g.factors.map(li).join('') + '</ul></div>' : '') + '</div>';
      h += '<h3 class="sub">Goals</h3><div class="grid2"><div class="card"><b class="t">Short term</b><ul>' + g.stg.map(li).join('') + '</ul></div><div class="card"><b class="t">Long term</b><ul>' + g.ltg.map(li).join('') + '</ul></div></div>';
      h += '<h3 class="sub">Interventions and why</h3><ol class="ivl">' + g.iv.map(function (r) { return '<li><span class="tag">' + IVT[r[0]] + '</span> ' + esc(r[1]) + '<span class="rat">Why: ' + esc(r[2]) + '</span></li>'; }).join('') + '</ol>';
      h += '<h3 class="sub">Evaluation example</h3><p>' + esc(g.ev) + '</p>';
      h += '<p class="note">Written for this site in plain words. For the official definition and the complete lists of defining characteristics, related factors and risk factors, use p. ' + d.p + ' of the NANDA-I book. Rationales on your form need a scholarly source.</p>';
    } else {
      h += '<p class="lead">This site has no guide for this diagnosis yet. Read its definition and indicators on p. ' + d.p + ' of NANDA-I 2024–2026. You can still use it in the care plan builder and write the statement, goals and interventions yourself.</p>';
    }
    var A = planArr(), has1 = A[0] && A[0].c;
    h += '<div class="btns"><button type="button" class="btn btn-primary" data-use="' + d.c + '" data-mode="one">' + (has1 ? 'Use as problem 1' : 'Use in my care plan') + '</button>' + (has1 ? '<button type="button" class="btn" data-use="' + d.c + '" data-mode="add">Add as another problem</button>' : '') + '</div>';
    v.innerHTML = h; v.hidden = false; v.scrollIntoView({ block: 'start' });
    $('#dxclose').onclick = function () { v.hidden = true; };
  }

  // ---------- export ----------
  var XH = { info: '', data: 'I. Data Collection', sbar1: '', start: 'Start Client Care:', reason: 'II. Clinical Reasoning Begins…', medmgmt: '', labs: 'Lab Results:', fe: 'Fluid & Electrolyte Application', eval: 'III. Evaluation:', qsen1: 'Teamwork & Collaboration/Safety', qsen2: '', plan: '' };
  function ivType(r) { return IVT[r[0]] ? IVT[r[0]] + ': ' : ''; }
  function evText(ev) { ev = ev || {}; var s = { met: 'Goal met', partly: 'Goal partially met', not: 'Goal not met' }[ev.s] || ''; return [s ? s + (filled(ev.d) ? ': ' : '.') : '', ev.d || '', filled(ev.next) ? '\n' + ev.next : ''].join('').trim(); }
  function outline() {
    var B = [];
    B.push({ title: 'Clinical Reasoning Plan of Care' });
    FORM.forEach(function (sec) {
      if (XH[sec.id]) B.push({ h: XH[sec.id] });
      sec.items.forEach(function (it) {
        switch (it.type) {
          case 'grid':
            B.push({ kv: it.fields.map(function (f) { return [f[1], get(fieldPath(f[0])) || '']; }).concat(it.fields[0][0] === 'student' ? [['Grade', '']] : [['Date of Birth', '']]) }); break;
          case 'support': B.push({ q: 'Support System:', table: { head: ['Name', 'Relationship to Patient'], rows: (get('support') || []).filter(function (r) { return r && (filled(r[0]) || filled(r[1])); }), w: [4680, 4680] } }); break;
          case 'text': B.push({ q: it.q, a: get(it.k) || '' }); break;
          case 'line': B.push({ q: it.label + ' ____:', a: get(it.k) || '' }); break;
          case 'erikson':
            var st = get('erik.stage');
            B.push({ q: it.q, a: get('erik.lvl') || expected() });
            B.push({ q: it.qa, a: [filled(st) ? ERIK[st][0] + ': ' + ERIK[st][1] + '.' : '', get('erik.a') || ''].join(' ').trim() });
            B.push({ q: it.qb, a: get('erik.b') || '' }); break;
          case 'meds': B.push({ q: it.q, table: { head: MEDCOLS.map(function (c) { return c[0]; }), rows: (get('meds') || []).filter(function (r) { return r && r.some(filled); }), w: [1700, 2100, 1600, 1760, 2200] } }); break;
          case 'pmhmeds': B.push({ q: it.q, a: [pmhText(), get('pmhmeds') || ''].filter(filled).join('\n') }); break;
          case 'sbar': B.push({ q: it.q, kv: ['S', 'B', 'A', 'R'].map(function (x) { return [SB[x], get(it.k + '.' + x) || '']; }) }); break;
          case 'vitals': B.push({ q: it.q, kv: [['Assessment time', get(it.k + '.time') || '']].concat(VIT.filter(function (v) { return it.pain || v[0] !== 'pain'; }).map(function (v) { return [v[1], get(it.k + '.' + v[0]) || '']; })) }); break;
          case 'systems': B.push({ q: it.q, kv: (it.order === 'eval' ? window.CP_EVAL_ORDER : SYS.map(function (s) { return s[0]; })).map(function (k) { return [SYSM[k][1].toUpperCase(), get(it.k + '.' + k) || '']; }) }); break;
          case 'orders': B.push({ q: it.q, table: { head: ['Physician orders', 'Rationale', 'Expected Outcome'], rows: (get('orders') || []).filter(function (r) { return r && r.some(filled); }), w: [2700, 3960, 2700] } }); break;
          case 'labs':
            B.push({ q: it.q });
            LABS.forEach(function (pn) {
              B.push({ table: { head: [pn.name, 'Normal Range', 'Initial value', 'Current value', 'Clinical Significance/Trends'], rows: pn.rows.map(function (r) { var b = 'labs.' + r.k; return [r.n, get(b + '.r') || '', get(b + '.i') || '', get(b + '.c') || '', get(b + '.s') || '']; }), w: [1500, 1700, 1100, 1100, 3960] } });
            });
            break;
          case 'fe':
            B.push({ q: it.q });
            [0, 1].forEach(function (i) {
              var b = 'fe.' + i, k = get(b + '.lab'), r = LABM[k];
              B.push({ table: { head: ['Lab / Value / High/Low', 'Relevance', 'Normal value / Critical value', i ? 'What caused derangement?' : 'What caused imbalance?', 'Treatment', 'Nsg. Assessments/interventions required:'], w: [1400, 1500, 1400, 1600, 1500, 1960],
                rows: [['Lab: ' + (r ? r.n : '') + '\nValue: ' + (get(b + '.val') || '') + '\nHigh/Low: ' + (get(b + '.hl') || ''), get(b + '.rel') || '', 'Normal: ' + (get(b + '.norm') || '') + '\nCritical: ' + (get(b + '.crit') || ''), get(b + '.cause') || '', get(b + '.tx') || '', get(b + '.nsg') || '']] } });
            });
            break;
          case 'plan':
            (planArr().length ? planArr() : [{}]).forEach(function (pr, i) {
              pr = pr || {}; var ivs = (pr.iv || []).filter(function (r) { return r && r.slice(1).some(filled); });
              B.push({ pb: true, table: { head: ['Client Problem (Related to… as evidenced by….)', 'Nursing Interventions', 'Scientific Rationale', 'Evaluation', 'Outcome (Client centered goals)'], w: [1900, 2200, 2200, 1560, 2000], rows: [[
                pr.stmt || buildStmt(i),
                ivs.map(function (r, j) { return (j + 1) + '. ' + ivType(r) + r[1]; }).join('\n'),
                ivs.map(function (r, j) { return (j + 1) + '. ' + (r[2] || '') + (filled(r[3]) ? ' ' + String(r[3]).trim() : ''); }).join('\n'),
                evText(pr.ev), 'Short Term Goal: ' + (pr.stg || '') + '\n\nLong Term Goal: ' + (pr.ltg || '')]] }, cap: planArr().length > 1 ? 'Problem ' + (i + 1) : '' });
            });
            break;
        }
      });
    });
    var refs = chosenRefs(); if (refs.length) B.push({ refs: refs });
    return B;
  }
  function allText() { return JSON.stringify(P, function(k,v) { return k.charAt(0)==='_' || ['inc','cues','refs'].indexOf(k)>=0 ? undefined : v; }); }
  function isCited(r, txt) { var inner = String(r.cite.p || '').replace(/^\(|\)$/g, ''); return (inner && txt.indexOf(inner) >= 0) || (r.cite.n && txt.indexOf(r.cite.n) >= 0); }
  function chosenRefs() {
    var pickd = get('refs') || {}, txt = allText();
    return REFS.filter(function (r) { var k = r.cite.p; return pickd[k] != null ? pickd[k] : isCited(r, txt); })
      .sort(function (a, b) { return a.segs.map(function (s) { return s.t; }).join('').localeCompare(b.segs.map(function (s) { return s.t; }).join('')); });
  }
  function xe(s) { return String(s).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function wr(t, o) {
    o = o || {}; var pr = (o.b ? '<w:b/>' : '') + (o.i ? '<w:i/>' : '') + (o.sz ? '<w:sz w:val="' + o.sz + '"/><w:szCs w:val="' + o.sz + '"/>' : '');
    return String(t).split('\n').map(function (l) { return '<w:r>' + (pr ? '<w:rPr>' + pr + '</w:rPr>' : '') + '<w:t xml:space="preserve">' + xe(l) + '</w:t></w:r>'; }).join('<w:r><w:br/></w:r>');
  }
  function wp(inner, ppr) { return '<w:p>' + (ppr ? '<w:pPr>' + ppr + '</w:pPr>' : '') + inner + '</w:p>'; }
  function paras(t, o) { var ls = String(t || '').split('\n'); return ls.map(function (l) { return wp(l ? wr(l, o) : ''); }).join(''); }
  function cellParas(t, o) {
    return String(t || '').split('\n').map(function (l) {
      var m = /^(CLIENT CENTERED GOALS \(EXPECTED OUTCOMES\)|SHORT TERM:|LONG TERM:|Lab:|Value:|High\/Low:|Normal:|Critical:)(.*)$/.exec(l);
      return wp(m ? wr(m[1], { b: true }) + (m[2] ? wr(m[2]) : '') : l ? wr(l, o) : '', '<w:spacing w:after="40"/>');
    }).join('');
  }
  function wtable(T,wide) {
    var bd = '<w:tblBorders>' + ['top', 'left', 'bottom', 'right', 'insideH', 'insideV'].map(function (s) { return '<w:' + s + ' w:val="single" w:sz="4" w:space="0" w:color="D9D9D9"/>'; }).join('') + '</w:tblBorders>';
    var sum = T.w.reduce(function (a, b) { return a + b; }, 0);
    var widths=T.w.map(function(w){return wide?Math.round(w*13824/sum):w;});
    if(wide){widths[widths.length-1]+=13824-widths.reduce(function(a,b){return a+b;},0);sum=13824;}
    function row(cells, head) {
      return '<w:tr>' + (head ? '<w:trPr><w:tblHeader/></w:trPr>' : '') + cells.map(function (c, j) {
        return '<w:tc><w:tcPr><w:tcW w:w="' + widths[j] + '" w:type="dxa"/><w:vAlign w:val="center"/>' + (head ? '<w:shd w:val="clear" w:color="auto" w:fill="E7E6E6"/>' : '') + '</w:tcPr>' + cellParas(c == null ? '' : c, head ? { b: true, sz: 22 } : { sz: 22 }) + '</w:tc>';
      }).join('') + '</w:tr>';
    }
    var rows = T.rows.length ? T.rows : [T.head.map(function () { return ''; })];
    return '<w:tbl><w:tblPr><w:tblW w:w="' + sum + '" w:type="dxa"/>' + bd + '<w:tblLayout w:type="fixed"/><w:tblCellMar><w:top w:w="90" w:type="dxa"/><w:left w:w="110" w:type="dxa"/><w:bottom w:w="90" w:type="dxa"/><w:right w:w="110" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid>' +
      widths.map(function (w) { return '<w:gridCol w:w="' + w + '"/>'; }).join('') + '</w:tblGrid>' + row(T.head, true) + rows.map(function (r) { return row(T.head.map(function (_, j) { return r[j]; })); }).join('') + '</w:tbl>' + wp('');
  }
  function docx() {
    var b = [], KN = '<w:keepNext/>';
    outline().forEach(function (o) {
      if (o.title) b.push(wp(wr(o.title, { b: true, sz: 32 }), '<w:pStyle w:val="Title"/><w:jc w:val="center"/><w:spacing w:after="240"/>'));
      if (o.h) b.push(wp(wr(o.h, { b: true, sz: 28 }), KN + '<w:spacing w:before="320" w:after="120"/>'));
      if (o.pb) b.push('<w:p><w:r><w:br w:type="page"/></w:r></w:p>');
      if (o.cap) b.push(wp(wr(o.cap, { b: true }), KN));
      if (o.q) b.push(wp(wr(o.q, { b: true }), KN + '<w:spacing w:before="160" w:after="60"/>'));
      if (o.a != null) b.push(o.a ? paras(o.a) : wp(''));
      if (o.kv) o.kv.forEach(function (kv) { b.push(wp(wr(kv[0] + ': ', { b: true }) + wr(kv[1] || ''), '<w:ind w:left="' + (o.q ? 360 : 0) + '"/><w:spacing w:after="60"/>')); });
      if (o.table) b.push(wtable(o.table,true));
      if (o.refs) {
        b.push('<w:p><w:r><w:br w:type="page"/></w:r></w:p>', wp(wr('References', { b: true }), '<w:jc w:val="center"/>'));
        o.refs.forEach(function (r) { b.push(wp(r.segs.map(function (s) { return wr(s.t.replace(/\*/g, ''), { i: s.i }); }).join(''), '<w:spacing w:line="480" w:lineRule="auto" w:after="0"/><w:ind w:left="720" w:hanging="720"/>')); });
      }
    });
    return pack(b.join(''),true);
  }
  function pack(body,wide) {
    var doc = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><w:body>' + body +
      '<w:sectPr><w:footerReference w:type="default" r:id="rIdF"/>'+(wide?'<w:pgSz w:w="15840" w:h="12240" w:orient="landscape"/><w:pgMar w:top="1008" w:right="1008" w:bottom="1008" w:left="1008" w:header="504" w:footer="504" w:gutter="0"/>':'<w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="720" w:footer="720" w:gutter="0"/>')+'</w:sectPr></w:body></w:document>';
    var rpr = '<w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman" w:eastAsia="Times New Roman"/><w:sz w:val="24"/><w:szCs w:val="24"/>';
    var styles = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr>' + rpr + '<w:lang w:val="en-US"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:before="0" w:after="80" w:line="259" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults>' +
      '<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/><w:rPr><w:color w:val="000000"/></w:rPr></w:style><w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:basedOn w:val="Normal"/><w:qFormat/><w:rPr><w:b/><w:color w:val="000000"/></w:rPr></w:style><w:style w:type="paragraph" w:styleId="Footer"><w:name w:val="footer"/><w:basedOn w:val="Normal"/><w:pPr><w:jc w:val="right"/></w:pPr></w:style></w:styles>';
    var footer = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:ftr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:p><w:pPr><w:pStyle w:val="Footer"/></w:pPr><w:r><w:fldChar w:fldCharType="begin"/></w:r><w:r><w:instrText xml:space="preserve"> PAGE </w:instrText></w:r><w:r><w:fldChar w:fldCharType="separate"/></w:r><w:r><w:t>1</w:t></w:r><w:r><w:fldChar w:fldCharType="end"/></w:r></w:p></w:ftr>';
    return window.APA.zip([
      { name: '[Content_Types].xml', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/></Types>' },
      { name: '_rels/.rels', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>' },
      { name: 'word/_rels/document.xml.rels', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rIdS" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rIdF" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/></Relationships>' },
      { name: 'word/document.xml', data: doc },
      { name: 'word/styles.xml', data: styles },
      { name: 'word/footer1.xml', data: footer }
    ]);
  }
  // The interview sheet: every "Questions to ask" list in form order, with boxes to tick on paper.
  var QLBL = { client: 'Client details', support: 'Support system', cc: 'Chief complaint / history of present illness', social: 'Personal/social history', pmh: 'Past medical history',
    psh: 'Past surgical history', erik: 'Development (Erikson)', meds: 'Current medications', pmhmeds: 'Medications and PMH', sbar1: 'Report from the nurse (SBAR)', vs1: 'Initial vital signs and pain',
    orders: 'Medical management', rad: 'Radiology/diagnostic reports', labs: 'Lab results', fe: 'Fluid and electrolytes', vs2: 'Four hours later: vital signs', sys2: 'Four hours later: assessment',
    e1: 'Evaluation', e2: 'Evaluation: the data', e3: 'Evaluation: next priorities', sbar2: 'Calling the provider (transfer)', sbar3: 'Handoff to the next nurse', pcc1: 'Patient-centered care: communication',
    pcc2: 'Patient-centered care: preferences and values', pcc3: 'Patient-centered care: self-care', team: 'Teamwork', ebp: 'Evidence-based practice', safety: 'Safety', informatics: 'Informatics',
    'plan.stmt': 'Care plan: the problem', 'plan.stg': 'Care plan: goals', 'plan.iv': 'Care plan: interventions', 'plan.ev': 'Care plan: evaluation' };
  function interviewList() {
    var out = [];
    function add(key, label, d) { if (d && ((d.pt || []).length || (d.rn || []).length || (d.them || []).length)) out.push({ label: label || QLBL[key] || key, d: d }); }
    FORM.forEach(function (sec) {
      sec.items.forEach(function (it) {
        if (it.type === 'grid' && it.fields[0][0] === 'initials') add('client', null, ASKQ.client);
        else if (it.type === 'erikson') { var s = stageOf(num(get('info.age'))); add('erik', QLBL.erik + (s >= 0 ? ': ' + ERIK[s][0] : ''), { pt: s >= 0 ? ERIKQ[s] : ERIKQ.reduce(function (a, b) { return a.concat(b); }, []) }); }
        else if (it.type === 'systems' && !it.compare) SYS.forEach(function (sy) { add('sys.' + sy[0], 'Head-to-toe: ' + sy[1], ASKQ['sys.' + sy[0]]); });
        else if (it.type === 'plan') ['plan.stmt', 'plan.stg', 'plan.iv', 'plan.ev'].forEach(function (k) { add(k, null, ASKQ[k]); });
        else if (it.k && ASKQ[it.k]) add(it.k, null, ASKQ[it.k]);
      });
    });
    return out;
  }
  function interviewDocx() {
    var b = [], KN = '<w:keepNext/>', ini = get('info.initials') || '', box = '<w:ind w:left="360" w:hanging="300"/><w:spacing w:after="40"/>';
    b.push(wp(wr('Interview questions', { b: true, sz: 32 }), '<w:jc w:val="center"/><w:spacing w:after="120"/>'));
    b.push(wp(wr('Patient initials: ' + (ini || '________') + '     Room: ' + (get('info.room') || '______') + '     Date: ____________'), '<w:jc w:val="center"/><w:spacing w:after="200"/>'));
    b.push(wp(wr('How to ask', { b: true, sz: 26 }), KN));
    (window.CP_INTERVIEW_TIPS || []).forEach(function (t) { b.push(wp(wr('• ' + t), '<w:ind w:left="360" w:hanging="200"/><w:spacing w:after="40"/>')); });
    interviewList().forEach(function (o) {
      b.push(wp(wr(o.label, { b: true, sz: 26 }), KN + '<w:spacing w:before="240" w:after="60"/>'));
      [['Ask your patient', o.d.pt], ['Ask the nurse, instructor or family', o.d.rn], ['Be ready to answer', o.d.them]].forEach(function (g) {
        if (!g[1] || !g[1].length) return;
        b.push(wp(wr(g[0], { i: true }), KN + '<w:spacing w:after="20"/>'));
        g[1].forEach(function (q) { b.push(wp(wr('\u2610  ' + q), box)); });
      });
      if (o.d.tip) b.push(wp(wr(o.d.tip, { i: true, sz: 20 }), '<w:ind w:left="360"/>'));
    });
    b.push(wp(wr('Initials only on this sheet. Write your answers in your own words.', { i: true, sz: 20 }), '<w:spacing w:before="240"/>'));
    return pack(b.join(''));
  }
  function plainText() {
    var L = [];
    outline().forEach(function (o) {
      if (o.title) L.push(o.title.toUpperCase(), '');
      if (o.h) L.push('', o.h.toUpperCase());
      if (o.cap) L.push('', o.cap);
      if (o.q) L.push('', o.q);
      if (o.a != null) L.push(o.a);
      if (o.kv) o.kv.forEach(function (kv) { L.push(kv[0] + ': ' + (kv[1] || '')); });
      if (o.table) { o.table.rows.forEach(function (r) { L.push(''); o.table.head.forEach(function (hh, j) { if (filled(r[j])) L.push(hh + ': ' + String(r[j]).replace(/\n/g, '\n  ')); }); }); }
      if (o.refs) { L.push('', 'REFERENCES'); o.refs.forEach(function (r) { L.push(r.segs.map(function (s) { return s.t.replace(/\*/g, ''); }).join('')); }); }
    });
    return L.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
  }
  function fileBase() { var i = String(get('info.initials') || '').replace(/[^A-Za-z0-9]/g, ''); return 'Care plan' + (i ? ' ' + i : ''); }
  // Review only entered answers; the generated document still includes the whole
  // syllabus form. Do not make the student scroll through 47 empty lab rows.
  function exportReview() {
    var lines = [], section = '', shownSection = '', question = '';
    function answered(t) {
      return String(t || '').split('\n').some(function (line) {
        return !!line.replace(/^\s*(?:Lab|Value|High\/Low|Normal|Critical|Short Term Goal|Long Term Goal):\s*/i, '').trim();
      });
    }
    outline().forEach(function (o) {
      if (o.h) { section = o.h; question = ''; }
      if (o.q) question = o.q;
      var parts = [];
      if (o.a && filled(o.a)) parts.push(o.a);
      if (o.kv) parts = parts.concat(o.kv.filter(function (kv) { return filled(kv[1]); }).map(function (kv) { return kv[0] + ': ' + kv[1]; }));
      if (o.table) {
        var t = o.table, lab = t.head[1] === 'Normal Range';
        t.rows.forEach(function (row) {
          if (!(lab ? row.slice(1) : row).some(answered)) return;
          var cells = row.map(function (value, i) { return answered(value) ? t.head[i] + ': ' + value : ''; }).filter(Boolean);
          if (cells.length) parts.push(cells.join('\n'));
        });
      }
      if (o.refs) { section = 'References'; question = ''; parts = o.refs.map(function (r) { return r.segs.map(function (s) { return s.t.replace(/\*/g, ''); }).join(''); }); }
      if (!parts.length) return;
      if (section && section !== shownSection) { lines.push(section.toUpperCase(), ''); shownSection = section; }
      if (o.cap) lines.push(o.cap);
      if (question) lines.push(question);
      lines.push(parts.join('\n\n'), '');
    });
    return lines.join('\n').trim();
  }
  function exportSnapshot() {
    loadRefs();
    var review = exportReview();
    return { patient: cur, title: 'NRS 114 Clinical Reasoning Plan of Care', bytes: docx(), text: review || 'No answers entered yet. The complete blank form is available as a Word download.', hasAnswers: !!review };
  }
  function saveFile(data, name, type) { var blob = new Blob([data], { type: type }), a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500); }
  function renderDl() {
    loadRefs();
    $('#dl-preview').textContent=plainText();
    $('#dlprog').innerHTML = FORM.map(function (sec) { var s = secStats(sec); return '<li class="' + (s[0] === s[1] ? 'ok' : '') + '"><a href="#s-' + sec.id + '" data-go="s-' + sec.id + '">' + esc(sec.title) + '</a> <small>' + s[0] + '/' + s[1] + '</small></li>'; }).join('');
    var txt = allText(), pickd = get('refs') || {};
    $('#refpick').innerHTML = REFS.length ? '<p class="muted">Ticked sources go on a References page at the end. Sources you cited are ticked for you.</p>' + REFS.map(function (r, i) {
      var on = pickd[r.cite.p] != null ? pickd[r.cite.p] : isCited(r, txt);
      return '<label class="refpick"><input type="checkbox" data-ref="' + i + '"' + (on ? ' checked' : '') + '><span class="refx">' + r.segs.map(function (s) { return s.i ? '<i>' + esc(s.t) + '</i>' : esc(s.t); }).join('') + '</span></label>';
    }).join('') : '<p class="muted">No saved sources on this device yet. Build them in the <a href="APA Papers.html#refs">APA reference builder</a>; they appear here and in every “Insert a citation” box.</p>';
  }

  // ---------- tabs ----------
  var currentTab = 'fill';
  function showTab(t) {
    currentTab = t;
    $$('[role="tab"]').forEach(function (b) { var on = b.getAttribute('data-tab') === t; b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1; });
    ['fill', 'find', 'dl'].forEach(function (k) { $('#tab-' + k).hidden = k !== t; });
    if (t === 'dl') renderDl();
    if (t === 'fill') $$('#form textarea').forEach(grow);
    try { localStorage.setItem('cp-tab', t); } catch (e) {}
  }

  // ---------- start ----------
  document.addEventListener('DOMContentLoaded', function () {
    $('#dxlist').innerHTML = DXL.map(function (d) { return '<option value="' + esc(d.l + ' (' + d.c + ')') + '">'; }).join('');
    $('#exintro').textContent = window.CP_EXAMPLE_INTRO;
    $('#iv-tips').innerHTML = (window.CP_INTERVIEW_TIPS || []).map(li).join('');
    renderAll();
    var main = $('main');
    main.addEventListener('input', onInput); main.addEventListener('change', onInput); main.addEventListener('click', onClick);
    $('#dxq').addEventListener('input', function () { search(this.value); });
    $('#cue-auto').addEventListener('click', autoCues);
    function incLabel() { var t = $('#inc-toggle'); t.textContent = SHOWINC ? 'Hide the lists' : 'Show the lists'; t.setAttribute('aria-pressed', SHOWINC); }
    incLabel();
    $('#inc-toggle').addEventListener('click', function () { SHOWINC = !SHOWINC; try { localStorage.setItem('cp-showinc', SHOWINC ? '1' : '0'); } catch (e) {} $$('details.inc, details.askq').forEach(function (d) { d.open = SHOWINC; }); incLabel(); });
    $('#cue-clear').addEventListener('click', function () { set('cues', {}); $('#autonote').innerHTML = ''; renderFind(); });
    $('#pt').addEventListener('change', function () { pick(this.value); renderAll(); });
    $('#pt-new').addEventListener('click', function () { pick(newPlan()); renderAll(); showTab('fill'); window.scrollTo(0, 0); toast('New patient started. Your student details carry over.'); });
    $('#pt-del').addEventListener('click', function () {
      var f = (P.info || {}).initials; if (!confirm('Delete the care plan for ' + (f || 'this patient') + ' from this device? This can’t be undone.')) return;
      delete plans[cur]; store('cp-plans', plans); pick(byRecent()[0] || newPlan()); renderAll();
    });
    $$('.dl-interview').forEach(function (bt) { bt.addEventListener('click', function () { saveFile(interviewDocx(), 'Interview questions' + (get('info.initials') ? ' ' + String(get('info.initials')).replace(/[^A-Za-z0-9]/g, '') : '') + '.docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'); }); });
    $('#dl-docx').addEventListener('click', function () { saveFile(docx(), fileBase() + '.docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'); });
    $('#dl-copy').addEventListener('click', function () {
      var t = plainText(), done = function () { toast('Copied. Paste it into your document.'); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(done, function () { fallbackCopy(t); done(); }); else { fallbackCopy(t); done(); }
    });
    $('#dl-backup').addEventListener('click', function () { saveFile(JSON.stringify({ kind: 'care-plans', v: 1, me: ME, plans: plans }, null, 1), 'Care plans backup ' + new Date().toISOString().slice(0, 10) + '.json', 'application/json'); });
    $('#dl-restore').addEventListener('change', function () {
      var f = this.files && this.files[0], self = this; if (!f) return;
      var rd = new FileReader();
      rd.onload = function () {
        try { var o = JSON.parse(rd.result); if (!o || o.kind !== 'care-plans' || !o.plans) throw 0; var n = 0; Object.keys(o.plans).forEach(function (id) { if (o.plans[id] && o.plans[id].f) { plans[id] = o.plans[id]; n++; } }); if (o.me) Object.keys(o.me).forEach(function (k) { if (!filled(ME[k])) ME[k] = o.me[k]; }); store('cp-plans', plans); store('cp-me', ME); renderAll(); toast('Restored ' + n + ' patient' + (n === 1 ? '' : 's') + '.'); }
        catch (e) { toast('That file isn’t a care plan backup from this page.'); }
        self.value = '';
      };
      rd.readAsText(f);
    });
    $('#refpick').addEventListener('change', function (e) { var i = e.target.getAttribute('data-ref'); if (i == null) return; var pk = get('refs') || {}; pk[REFS[+i].cite.p] = e.target.checked; set('refs', pk); });
    $('#dlprog').addEventListener('click', function (e) { var a = e.target.closest('a[data-go]'); if (!a) return; e.preventDefault(); showTab('fill'); if(window.CPWorkspace&&window.CPWorkspace.openSection){window.CPWorkspace.openSection(a.getAttribute('data-go').replace(/^s-/,''));return;}var s = document.getElementById(a.getAttribute('data-go')); if (s) s.scrollIntoView({ block: 'start' }); });
    window.addEventListener('focus', function () { var n = REFS.length; loadRefs(); if (REFS.length !== n) $$('.cite-ins, .cite-hint').length && renderForm(); });
    var h = (location.hash || '').slice(1), saved = ''; try { saved = localStorage.getItem('cp-tab') || ''; } catch (e) {}
    showTab(h === 'find' || h === 'download' ? (h === 'download' ? 'dl' : 'find') : ['fill', 'find', 'dl'].indexOf(saved) >= 0 ? saved : 'fill');
    $$('[role="tab"]').forEach(function (b, i, all) { b.addEventListener('keydown', function (e) { var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!d) return; var nb = all[(i + d + all.length) % all.length]; nb.focus(); showTab(nb.getAttribute('data-tab')); }); });
  });
  function fallbackCopy(t) { var x = document.createElement('textarea'); x.value = t; x.style.position = 'fixed'; x.style.opacity = '0'; document.body.appendChild(x); x.select(); try { document.execCommand('copy'); } catch (e) {} x.remove(); }
  // For tools/check_careplan.js
  window.CP_HELPER={get:get,set:function(path,value){set(path,value);var el=$('[data-p=\"'+path+'\"]');if(el){el.value=value;grow(el);}after(path,el);},patient:function(){return cur;},exportSnapshot:exportSnapshot,showTab:showTab,toast:toast,formMarkup:formMarkup,fields:ITEMS,labs:LABM};
  window.CP_TEST = { formMarkup:formMarkup, reloadReferences:loadRefs, interviewList: interviewList, interviewDocx: interviewDocx, DX: DX, DXL: DXL, outline: outline, docx: docx, plainText: plainText, labFlag: labFlag, vitFlag: vitFlag, buildStmt: buildStmt, set: set, get: get };
})();
