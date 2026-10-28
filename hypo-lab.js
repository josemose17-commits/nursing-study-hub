// A shared visual reference and coached rehearsal. It never awards mastery or changes test scores.
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else { root.HypoLab = api; api.mount(root); }
})(typeof window === 'object' ? window : globalThis, function () {
  'use strict';
  const NOTE = '56-hypoglycemia-the-15-15-rule';
  const esc = x => String(x == null ? '' : x).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
  const sources = [
    ['ADA 2026 · hypoglycemia', 'https://doi.org/10.2337/dc26-s006'],
    ['ADA 2026 · hospital treatment', 'https://doi.org/10.2337/dc26-s016'],
    ['ADA · symptoms and oral treatment', 'https://diabetes.org/living-with-diabetes/hypoglycemia-low-blood-glucose/symptoms-treatment'],
    ['ADA · severe hypoglycemia and glucagon', 'https://diabetes.org/living-with-diabetes/hypoglycemia-low-blood-glucose/severe'],
    ['NIDDK · low-glucose treatment and recovery', 'https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/low-blood-glucose-hypoglycemia']
  ];
  const steps = [
    { id: 'oral-first', patient: 'Sam · meal delayed after mealtime insulin', time: 'Initial assessment', glucose: 62, mental: 'Alert, answers appropriately', swallow: 'Swallows safely; oral intake allowed',
      prompt: 'Which treatment fits this adult’s current route?', options: [
        ['glucose', 'Give 15 g oral glucose under the hypoglycemia protocol.', true, 'Glucose supplies readily available carbohydrate. The 15-minute glucose check is the next decision.'],
        ['insulin', 'Give more rapid-acting insulin for the shaking.', false, 'More insulin would lower glucose further. Shaking can be a low-glucose warning; treat the documented low.'],
        ['chocolate', 'Use a high-fat chocolate snack as the first treatment.', false, 'Fat slows absorption. Use the protocol’s fast-acting glucose source for initial treatment.']
      ] },
    { id: 'oral-recheck', patient: 'Sam · after 15 g oral glucose', time: '15-minute recheck', glucose: 58, mental: 'Still alert; remains shaky', swallow: 'Still swallowing safely',
      prompt: 'The glucose remains below 70 mg/dL. What now?', options: [
        ['repeat', 'Repeat the fast-acting carbohydrate and recheck in 15 minutes under the protocol.', true, 'One treatment did not correct the low. Continue the protocol and reassess swallowing; obtain additional help for persistent or worsening hypoglycemia.'],
        ['wait', 'Wait an hour because one treatment is always enough.', false, 'The repeat measurement is still low. Delaying the next treatment leaves the low uncorrected.'],
        ['stop', 'Stop checking because Sam is awake.', false, 'Alertness alone does not show that glucose has recovered. Reassess the measured response.']
      ] },
    { id: 'oral-recovery', patient: 'Sam · after repeat treatment', time: 'Next 15-minute recheck', glucose: 86, mental: 'Alert; symptoms improving', swallow: 'Swallows safely; next meal is over an hour away',
      prompt: 'What belongs in the recovery plan?', options: [
        ['follow', 'Arrange a carbohydrate/protein snack per plan, continue checks, and review the insulin–meal mismatch.', true, 'A recovered reading is a checkpoint. Follow-up intake, monitoring and review of the cause help prevent another low.'],
        ['discharge', 'Assume recurrence is impossible after this reading.', false, 'The medication effect may continue. Review why the low occurred and keep monitoring under the plan.'],
        ['extra', 'Give extra insulin because 86 mg/dL is too high.', false, 'This is recovery from the low, not a reason to give corrective insulin.']
      ] },
    { id: 'iv-rescue', patient: 'Alex · a different patient on insulin', time: 'Emergency assessment', glucose: 38, mental: 'Unresponsive; airway needs immediate assessment', swallow: 'Cannot swallow safely; a patent IV and dextrose protocol are available',
      prompt: 'Which action addresses both the emergency and the safe route?', options: [
        ['iv', 'Activate emergency help, support airway/breathing, and give protocol-directed IV dextrose.', true, 'This patient needs immediate assistance and a nonoral treatment. The patent IV and protocol make IV dextrose an available rescue route.'],
        ['juice', 'Pour juice into the mouth while waiting.', false, 'An unresponsive patient cannot protect the airway. Oral liquid risks aspiration and is unsafe here.'],
        ['only', 'Wait for the next scheduled glucose check before calling for help.', false, 'Unresponsiveness with documented low glucose requires immediate emergency treatment and airway assessment.']
      ] },
    { id: 'rescue-recheck', patient: 'Alex · emergency team treating the low', time: 'Scripted 15-minute update', glucose: 92, mental: 'Awake and following commands', swallow: 'Swallowing safety is being reassessed before oral intake',
      prompt: 'What shows appropriate evaluation after rescue treatment?', options: [
        ['evaluate', 'Reassess mental status and glucose, continue protocol checks, and review the cause with the team.', true, 'Check the patient and the glucose trend. Continue monitoring and reassess swallowing before offering oral intake.'],
        ['assume', 'Stop monitoring because one glucose value improved.', false, 'A single improved value does not rule out another low. Continued assessment is part of treatment.'],
        ['oral', 'Give oral food immediately without reassessing swallowing.', false, 'After altered consciousness, confirm safe swallowing before using an oral route.']
      ] },
    { id: 'glucagon-route', patient: 'Transfer the rule · rescue without IV access', time: 'Alternative emergency situation', glucose: 38, mental: 'Unresponsive; emergency help is being activated', swallow: 'Unsafe swallowing; no IV access; prescribed ready-to-use glucagon is available',
      prompt: 'Which available treatment fits this changed situation?', options: [
        ['glucagon', 'Give the prescribed ready-to-use glucagon while supporting the airway and obtaining emergency help.', true, 'Glucagon can provide nonoral rescue without IV access by stimulating liver glucose release. Follow the product and emergency protocol, then reassess the response.'],
        ['gel', 'Put oral glucose gel inside the mouth because there is no IV.', false, 'Unsafe swallowing still excludes an oral route. Gel in the mouth can create an aspiration risk.'],
        ['none', 'Provide no glucose-raising treatment until an IV is inserted.', false, 'The prescribed glucagon is an available nonoral rescue. Avoid delaying emergency treatment.']
      ] }
  ];
  function blank() { return { step: 0, feedback: null, attempts: [], complete: false }; }
  function restore(raw) {
    if (!raw || !Number.isInteger(raw.step) || raw.step < 0 || raw.step > steps.length) return blank();
    const s = { step: raw.step, feedback: null, attempts: Array.isArray(raw.attempts) ? raw.attempts.slice(-60) : [], complete: raw.step === steps.length };
    if (!s.complete && steps[s.step].options.some(o => o[0] === raw.feedback)) s.feedback = raw.feedback;
    return s;
  }
  function choose(raw, choice) {
    const s = restore(raw); if (s.complete || s.feedback) return s;
    const o = steps[s.step].options.find(o => o[0] === choice); if (!o) return s;
    s.feedback = choice; s.attempts.push({ step: steps[s.step].id, choice, correct: o[2] }); s.attempts = s.attempts.slice(-60);
    return s;
  }
  function next(raw) {
    const s = restore(raw); if (s.complete) return s;
    const o = steps[s.step].options.find(o => o[0] === s.feedback);
    if (o && o[2]) { s.step++; s.feedback = null; s.complete = s.step === steps.length; }
    return s;
  }
  function retry(raw) { const s = restore(raw); if (!s.complete) { const o = steps[s.step].options.find(o => o[0] === s.feedback); if (o && !o[2]) s.feedback = null; } return s; }
  function termsHtml() {
    return '<div class="hl-terms">' + ['hypoglycemia', 'glucagon', 'dextrose'].map(term => '<details><summary>' + esc(term) + ' · meaning and word parts</summary>' +
      (typeof window === 'object' && window.WordParts ? window.WordParts.html(term, false) : '<p>' + ({ hypoglycemia: 'hypo- = below; glyc = sugar; -emia = blood condition. Low glucose in blood.', glucagon: 'A hormone used for rescue that signals the liver to release stored glucose. Use a verified medication-name entry rather than guessing a suffix.', dextrose: 'Glucose supplied as a treatment; an IV preparation is a nonoral rescue option under the prescribed protocol.' })[term] + '</p><a href="Word Parts.html#' + term + '">Full word entry</a>') + '</details>').join('') + '</div>';
  }
  function overviewHtml() {
    return '<section class="hypo-lab hl-overview"><div class="hl-eyebrow">See the decision</div><h2>Same low glucose. Two treatment routes.</h2>' +
      '<p>Recognize the low, check the patient, choose a safe route, then measure the response.</p>' +
      '<figure class="hl-map" aria-label="Low-glucose treatment routes for adult teaching cases"><div class="hl-root"><span>Act on the low</span><b>Glucose &lt;70 mg/dL</b></div>' +
      '<div class="hl-question">Alert, swallowing safely, and oral intake allowed?</div><div class="hl-branches">' +
      '<section class="hl-route"><div class="hl-route-label">Yes · oral route</div><h3>Fast glucose → timed recheck</h3><ol><li><b>15 g</b><span>Fast-acting carbohydrate under the adult protocol.</span></li><li><b>15 min</b><span>Recheck glucose and reassess the patient.</span></li><li><b>Still low?</b><span>Repeat per protocol; escalate persistent or worsening lows.</span></li></ol></section>' +
      '<section class="hl-route hl-rescue"><div class="hl-route-label">No · nonoral route</div><h3>Emergency help + rescue treatment</h3><ol><li><b>Protect the airway</b><span>No oral food, drink or glucose gel with unsafe swallowing.</span></li><li><b>Use the available rescue</b><span>Prescribed IV dextrose with IV access, or glucagon as appropriate.</span></li><li><b>Reassess</b><span>Check glucose, consciousness and response under the emergency protocol.</span></li></ol></section></div>' +
      '<figcaption>When alertness or swallowing changes, reassess the route immediately. These are adult examples; individualized treatment plans can differ.</figcaption></figure>' +
      '<div class="hl-cues"><section><h3>Body alarm</h3><p>Sweating, tremor, palpitations and hunger can warn that glucose is falling.</p></section><section><h3>Brain needs glucose</h3><p>Confusion, poor coordination, seizure or loss of consciousness need urgent assessment.</p></section></div>' +
      '<p class="hl-key"><b>The safety rule:</b> needing help because mental or physical function is impaired makes the event severe, regardless of the glucose number.</p>' +
      '<details class="hl-notes"><summary>Short notes · why each action works</summary><ul><li>Glucose is immediate fuel. Fast glucose treats the low; a high-fat food is a poor first choice because absorption is slower.</li><li>Insulin lowers glucose. Glucagon helps the liver release stored glucose. IV dextrose supplies glucose through the vein.</li><li>After recovery, follow the meal/snack and monitoring plan. Review missed food, insulin timing and medicines that can cause recurrence.</li></ul></details>' +
      termsHtml() + '<details class="hl-sources"><summary>Clinical sources</summary><ul>' + sources.map(s => '<li><a target="_blank" rel="noopener" href="' + esc(s[1]) + '">' + esc(s[0]) + '</a></li>').join('') + '</ul></details></section>';
  }
  function practiceHtml(raw) {
    const s = restore(raw);
    if (s.complete) return '<section class="hypo-lab hl-practice"><div class="hl-eyebrow">Coached case · complete</div><h2>You used both routes.</h2><p>Sam needed oral glucose and repeated checks. Alex needed airway assessment, emergency help and nonoral rescue. You also chose glucagon when IV access was unavailable.</p><p class="hl-key">Now close the explanation and recall the route rule without looking. The next checkpoint is graded separately.</p><button type="button" class="btn btn-secondary" data-hypo-action="restart">Rehearse again</button></section>';
    const st = steps[s.step], o = st.options.find(o => o[0] === s.feedback);
    return '<section class="hypo-lab hl-practice"><div class="hl-eyebrow">Do the decision · ' + (s.step + 1) + ' of ' + steps.length + '</div><h2>Choose, then see why.</h2><p class="hl-small">Coached practice, separate from your scored checkpoint. Patient updates are scripted examples; actual treatment response varies.</p>' +
      '<article class="hl-patient"><div class="hl-patient-head"><h3>' + esc(st.patient) + '</h3><span>' + esc(st.time) + '</span></div><dl class="hl-chart"><div class="hl-glucose"><dt>Blood glucose</dt><dd>' + st.glucose + '<small>mg/dL</small></dd></div><div><dt>Mental status</dt><dd>' + esc(st.mental) + '</dd></div><div><dt>Route check</dt><dd>' + esc(st.swallow) + '</dd></div></dl></article>' +
      '<h3>' + esc(st.prompt) + '</h3><div class="hl-options">' + st.options.map(x => '<button type="button" class="hl-choice" data-hypo-choice="' + x[0] + '"' + (o ? ' disabled' : '') + '>' + esc(x[1]) + '</button>').join('') + '</div>' +
      (o ? '<div class="hl-result' + (o[2] ? '' : ' hl-retry') + '" role="status" tabindex="-1"><h3>' + (o[2] ? 'This choice fits the patient.' : 'Reconsider this action.') + '</h3><p>' + esc(o[3]) + '</p></div><button type="button" class="btn btn-' + (o[2] ? 'primary' : 'secondary') + '" data-hypo-action="' + (o[2] ? 'next' : 'retry') + '">' + (o[2] ? s.step === steps.length - 1 ? 'Finish the rehearsal' : 'See the next patient update' : 'Choose again') + '</button>' : '') + '</section>';
  }
  function mount(win) {
    const doc = win.document, script = doc.currentScript;
    if (!doc.querySelector('link[data-hypo-css]')) { const css = doc.createElement('link'); css.rel = 'stylesheet'; css.dataset.hypoCss = '1'; css.href = new URL('hypo-lab.css' + (script ? new URL(script.src).search : ''), script ? script.src : doc.baseURI).href; doc.head.appendChild(css); }
    function hydrate() { doc.querySelectorAll('[data-hypo-overview]:not([data-hypo-mounted])').forEach(host => { host.dataset.hypoMounted = '1'; host.innerHTML = overviewHtml(); }); }
    if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', hydrate); else hydrate();
    new win.MutationObserver(hydrate).observe(doc.documentElement, { childList: true, subtree: true });
    win.addEventListener('wordparts-ready', () => { doc.querySelectorAll('.hypo-lab .hl-terms').forEach(host => { host.outerHTML = termsHtml(); }); });
  }
  return { NOTE, steps, sources, blank, restore, choose, next, retry, overviewHtml, practiceHtml, mount };
});
