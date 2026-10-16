// Shared "focus" — the topics you picked on the map. The map and the
// Mastery Loop both read it, so one choice drives everything you study.
// Stored in this browser as localStorage['e2-focus'] = { ids: [...], name }.
// No focus (or an empty list) means everything.
// Another exam's pages set window.FOCUS_CFG first (data/e3/focus-rules.js): its own storage keys, keyword rules
// and study-guide topics, so each exam keeps its own focus.
(function () {
  var CFG = window.FOCUS_CFG || {};
  var KEY = CFG.key || 'e2-focus', SAVED = CFG.saved || 'e2-focus-saved';

  // Which questions belong to a map topic: [chapter, topic-title test, keywords].
  // A topic with no keywords (most chapter overviews, nursing process) covers its whole chapter.
  var RULES = CFG.rules || [
    // Overviews whose study-guide content is narrow (aging, labs) get keywords too; other overviews mean the whole chapter.
    ['22', /overview/i, /older|aging|age-related|elastic recoil|kyphosis|cough reflex|chest wall|pack[- ]?year|smok/i],
    ['27', /overview/i, /older|aging|age-related|orthostatic|isolated systolic|S4|baroreceptor|stiff/i],
    ['34', /overview/i, /CBC|lab|hemoglobin|\bHgb\b|\bHct\b|hematocrit|MCV|reticulocyte|ferritin|platelet|\bWBC\b|\bANC\b|neutrophil|INR|aPTT|anemi|transfus/i],
    ['22', /smoking cessation/i, /smok|nicotine|cessation|pack[- ]?year|packs|vap|hookah|inhal|carbon monoxide|bupropion|varenicline|exposure|vaccin|prevent/i],
    ['22', /reading the numbers/i, /SpO₂|oximet|capnograph|ETCO|PFT|FEV|ABG|PaCO|PaO|pH 7|acidosis|alkalosis/i],
    ['22', /oxygen as a drug/i, /oxygen|cannula|mask|Venturi|FiO|L\/min|hypox/i],
    ['22', /endoscopy|thoracentesis/i, /bronchoscop|thoracentesis|biopsy|gag/i],
    ['22', /breath sounds/i, /crackles|wheez|stridor|rhonchi|breath sound|auscultat|fremitus|percuss|bronchial|vesicular/i],
    ['22', /diagnostic tests/i, /x-ray|CXR|\bCT\b|sputum|culture|bronchoscop|thoracentesis|PFT/i],
    ['22', /questions to ask/i, /pack[- ]?year|packs|history|smok|exposure|occupation|older|aging|age-related|cough/i],
    ['23', /sleep apnea/i, /apnea|CPAP|snor|\bOSA\b/i],
    ['23', /epistaxis|obstruction/i, /epistaxis|nosebleed|nasal|fracture|CSF|halo|obstruct|stridor|Heimlich|airway/i],
    ['23', /head and neck|laryngectomy/i, /laryng|tracheostom|trach\b|stoma|flap|neck|suction/i],
    ['24', /^asthma/i, /asthma|albuterol|SABA|\bICS\b|LABA|inhaler|peak flow|status asthmaticus|silent chest|wheez|montelukast|omalizumab|theophylline|salmeterol|fluticasone/i],
    ['24', /^COPD/i, /COPD|emphysema|bronchitis|pursed|barrel|88–92|tiotropium|ipratropium|cor pulmonale|roflumilast/i],
    ['24', /lung cancer/i, /lung cancer|chest tube|water[- ]seal|tidaling|thoracotomy|superior vena cava|SVC|pneumonectomy/i],
    ['24', /cystic fibrosis/i, /cystic fibrosis|\bCF\b|sweat chloride|dornase|ivacaftor|pancreatic enzyme/i],
    ['24', /pulmonary arterial/i, /pulmonary arterial|\bPAH\b|\bIPF\b|fibrosis|epoprostenol|bosentan|sildenafil|nintedanib/i],
    ['25', /^pneumonia/i, /pneumonia|\bCAP\b|\bHAP\b|\bVAP\b|aspiration|consolidat|infiltrat|sepsis|incentive spirometr|culture/i],
    ['25', /COVID/i, /COVID|remdesivir|dexamethasone|nirmatrelvir|Paxlovid/i],
    ['25', /tuberculosis/i, /\bTB\b|tuberculosis|isoniazid|rifampin|pyrazinamide|ethambutol|N95|negative[- ]pressure|airborne/i],
    ['25', /influenza/i, /influenza|\bflu\b|oseltamivir|pandemic|droplet/i],
    ['25', /rhinosinusitis|anthrax/i, /sinusitis|peritonsillar|anthrax|histoplasm|coccidi|blastomyc|amphotericin|fungal|pharyngitis|trismus/i],
    ['27', /cardiac assessment/i, /assessment|history|chest pain|older|aging|age-related/i],
    ['27', /^tests/i, /troponin|BNP|catheteriz|stress test|echocardiogra|lipid|CK-MB|contrast/i],
    ['27', /structure, coronary/i, /coronary|valve|cardiac cycle|SA node|preload|afterload|stroke volume|cardiac output/i],
    ['27', /blood pressure regulation/i, /blood pressure|baroreceptor|orthostatic|renin|angiotensin|vascular|older|aging/i],
    ['27', /chest discomfort/i, /chest pain|angina|\bMI\b|infarction|pericarditis|troponin/i],
    ['27', /physical exam/i, /pulse|\bS3\b|\bS4\b|murmur|JVD|capillary refill|edema|heart sound|older|aging|orthostatic/i],
    ['28', /^the rhythms/i, /rhythm|tachycardia|bradycardia|fibrillation|\bVF\b|\bVT\b|asystole|\bPEA\b|\bSVT\b|heart block/i],
    ['28', /devices, drugs/i, /pacemaker|defibrillat|cardioversion|\bICD\b|adenosine|amiodarone|atropine|digoxin/i],
    ['28', /conduction system/i, /SA node|AV node|Purkinje|conduction|automaticity/i],
    ['28', /recording the rhythm/i, /lead|electrode|artifact|telemetry|monitor|12-lead|strip/i],
    ['28', /nine-step/i, /P wave|QRS|PR interval|QT|ST segment|premature|PVC|PAC|regular|rate/i],
    ['28', /sinus dysrhythmias/i, /sinus|pacing|pacemaker|atropine|bradycardia/i],
    ['28', /atrial dysrhythmias/i, /atrial fibrillation|\bAF\b|flutter|anticoag|warfarin|diltiazem|stroke/i],
    ['28', /antidysrhythmic/i, /amiodarone|adenosine|lidocaine|beta[- ]?blocker|diltiazem|digoxin|antidysrhythmic/i],
    ['29', /drug classes/i, /\bACE\b|\bARB\b|ARNI|beta[- ]?blocker|diuretic|furosemide|spironolactone|digoxin|sacubitril|lisinopril|metoprolol/i],
    ['29', /valves, cardiomyopathy/i, /valve|stenosis|regurgitation|cardiomyopathy|endocarditis|pericarditis|tamponade/i],
    ['29', /types, staging/i, /heart failure|\bHF\b|HFrEF|HFpEF|ejection fraction|NYHA|BNP|compensat/i],
    ['29', /assessing heart failure/i, /crackles|orthopnea|JVD|edema|daily weight|BNP|heart failure|\bHF\b/i],
    ['29', /afterload and preload/i, /afterload|preload|\bACE\b|\bARB\b|nitr|hydralazine|diuretic/i],
    ['29', /contractility/i, /digoxin|dobutamine|inotrop|contractility|ivabradine/i],
    ['29', /devices, surgery, pulmonary edema/i, /pulmonary edema|frothy|LVAD|\bICD\b|transplant|daily weight|sodium|heart failure|\bHF\b/i],
    ['30', /^VTE/i, /\bDVT\b|\bVTE\b|heparin|warfarin|enoxaparin|\bINR\b|aPTT|anticoag|apixaban|\bHIT\b|protamine|vitamin K|embol/i],
    ['30', /hypertension, aneurysm/i, /hypertens|aneurysm|occlusion|crisis/i],
    ['30', /hypertension — mechanisms/i, /hypertens|blood pressure|\bBP\b|DASH|lisinopril|amlodipine|hydrochlorothiazide|\bACE\b|\bARB\b|crisis/i],
    ['30', /arteriosclerosis/i, /atheroscler|arterioscler|lipid|cholesterol|\bLDL\b|statin|atorvastatin/i],
    ['30', /peripheral arterial/i, /\bPAD\b|peripheral arter|claudication|ulcer|\bABI\b|arterial|pedal|cilostazol/i],
    ['30', /revascularization/i, /bypass|graft|revascular|angioplasty|occlusion|pedal pulse/i],
    ['30', /aneurysms, dissection/i, /aneurysm|\bAAA\b|dissection|Raynaud|Buerger/i],
    ['30', /venous thromboembolism/i, /\bDVT\b|\bVTE\b|sequential compression|\bSCD|compression|ambulat|Virchow|prophylaxis|enoxaparin/i],
    ['33', /hemostasis/i, /platelet|clot|coagulation|\bINR\b|aPTT|fibrin|thrombin|heparin|warfarin/i],
    ['33', /hematologic history/i, /history|aspirin|NSAID|ginkgo|diet|iron/i],
    ['33', /head-to-toe/i, /CBC|bone marrow|reticulocyte|\bHgb\b|hemoglobin|ferritin|petechiae|older|aging|lab/i],
    ['34', /anemias — cause to cue/i, /anemi|iron|B₁₂|B12|folic|folate|pernicious|ferrous|MCV|ferritin|fatigue|pallor/i],
    ['34', /white cell cancers/i, /leukemi|lymphoma|myeloma|neutropen|\bANC\b|thrombocytopen|platelet|\bDIC\b|bleeding|\bITP\b|\bTTP\b|\bHIT\b/i],
    ['34', /sickle/i, /sickle|vaso-occlusive|acute chest|hydroxyurea|HbS/i],
    ['34', /anemias — cause by cause/i, /anemi|iron|B₁₂|B12|folic|folate|pernicious|aplastic|hemolytic|transfusion|epoetin/i],
    ['34', /^leukemia/i, /leukemi|neutropen|\bANC\b|infection|bleeding precaution|chemotherapy|filgrastim|platelet/i],
    ['34', /stem cell/i, /stem cell|transplant|graft[- ]versus|GVHD|engraft|marrow/i]
  ];

  // The professor's Exam 2 study guide, as map topics.
  var STUDY_GUIDE = CFG.guide || [
    ['22', /overview/i], ['22', /smoking cessation/i], ['22', /questions to ask/i],
    ['24', /^asthma/i], ['24', /^COPD/i],
    ['25', /^pneumonia/i],
    ['27', /overview/i], ['27', /physical exam/i], ['27', /blood pressure regulation/i],
    ['28', /recording the rhythm/i], ['28', /nine-step/i], ['28', /^the rhythms/i],
    ['29', /types, staging/i], ['29', /assessing heart failure/i], ['29', /devices, surgery, pulmonary edema/i], ['29', /afterload and preload/i], ['29', /contractility/i],
    ['30', /hypertension — mechanisms/i], ['30', /peripheral arterial/i], ['30', /^VTE/i], ['30', /venous thromboembolism/i],
    // Not on the guide, but a few basics from each so they aren't skipped:
    ['23', /sleep apnea — the full picture/i], ['23', /obstruction, epistaxis/i], ['33', /hemostasis/i], ['33', /head-to-toe/i],
    ['34', /overview/i], ['34', /anemias — cause to cue/i], ['34', /anemias — cause by cause/i], ['34', /sickle/i], ['34', /^leukemia/i], ['34', /white cell cancers/i]
  ];

  function topics() { return window.INFO_TOPICS || []; }
  function find(ch, re) { return topics().filter(function (t) { return t.ch === ch && re.test(t.title); }); }
  function ruleFor(t) {
    for (var i = 0; i < RULES.length; i++) if (RULES[i][0] === t.ch && RULES[i][1].test(t.title)) return RULES[i][2];
    return null;
  }

  function read() { try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { return null; } }
  function readSaved() { try { return JSON.parse(localStorage.getItem(SAVED) || '{}') || {}; } catch (e) { return {}; } }
  function write(v) { try { if (v) localStorage.setItem(KEY, JSON.stringify(v)); else localStorage.removeItem(KEY); } catch (e) {} }

  var E2Focus = {
    get: function () { var v = read(); return v && v.ids && v.ids.length ? v : null; },
    ids: function () { var v = E2Focus.get(); return v ? v.ids : []; },
    active: function () { return !!E2Focus.get(); },
    has: function (id) { return E2Focus.ids().indexOf(id) >= 0; },
    set: function (ids, name) { write(ids && ids.length ? { ids: ids, name: name || 'My topics' } : null); },
    toggle: function (id) {
      var ids = E2Focus.ids().slice(), i = ids.indexOf(id);
      if (i >= 0) ids.splice(i, 1); else ids.push(id);
      E2Focus.set(ids, 'My topics');
    },
    clear: function () { write(null); },
    studyGuideIds: function () {
      var out = [];
      STUDY_GUIDE.forEach(function (s) { find(s[0], s[1]).forEach(function (t) { if (out.indexOf(t.id) < 0) out.push(t.id); }); });
      return out;
    },
    keywordsFor: ruleFor,
    // Does a question/prompt (its text and chapter) belong to the current focus?
    // Chapter 33 items that the Mastery Loop files under 34 pass their real chapter.
    matches: function (text, ch) {
      var v = E2Focus.get(); if (!v) return true;
      ch = String(ch);
      var byId = {}; topics().forEach(function (t) { byId[t.id] = t; });
      for (var i = 0; i < v.ids.length; i++) {
        var t = byId[v.ids[i]]; if (!t || t.ch !== ch) continue;
        var kw = ruleFor(t);
        if (!kw || kw.test(text)) return true;
      }
      return false;
    },
    chapters: function () {
      var v = E2Focus.get(); if (!v) return null;
      var byId = {}; topics().forEach(function (t) { byId[t.id] = t; });
      var chs = []; v.ids.forEach(function (id) { var t = byId[id]; if (t && chs.indexOf(t.ch) < 0) chs.push(t.ch); });
      return chs;
    },
    // Named lists you keep for later (e.g. "Exam 2 — prof's list", "Final"). Picking one makes it the focus.
    saved: function () { return readSaved(); },
    save: function (name) {
      var v = E2Focus.get(); if (!v || !name) return;
      var all = readSaved(); all[name] = v.ids.slice();
      try { localStorage.setItem(SAVED, JSON.stringify(all)); } catch (e) {}
      E2Focus.set(v.ids, name);
    },
    load: function (name) { var ids = readSaved()[name]; if (ids) E2Focus.set(ids, name); },
    forget: function (name) {
      var all = readSaved(); delete all[name];
      try { localStorage.setItem(SAVED, JSON.stringify(all)); } catch (e) {}
    },
    label: function () { var v = E2Focus.get(); return v ? v.name + ' · ' + v.ids.length + ' topic' + (v.ids.length === 1 ? '' : 's') : 'Everything'; },
    // The localStorage keys this focus lives in (pages listen for changes to them).
    storageKeys: [KEY, SAVED]
  };
  window.E2Focus = E2Focus;
})();
