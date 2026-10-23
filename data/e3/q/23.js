// Final Mastery test questions added for Ch 23, Noninfectious upper respiratory conditions. The test loads Exam 2's
// questions for this chapter first (data/ngn-22-25.js, data/recall-22-23.js); these are appended, so Exam 2's ids stay
// put. Written from the chapter for what Exam 2 left out (data/e3/src/23.js).
// Format: see data/e3/q/45.js and data/e3/q/more.js. Each item carries its own labels: cj (clinical judgment step),
// cn (Client Needs) and st (strategies), keys in ncjmm.js.
window.NGN_EXTRA = window.NGN_EXTRA || {}; window.RECALL_EXTRA = window.RECALL_EXTRA || {};
window.EXPLAIN_CARDS = window.EXPLAIN_CARDS || {}; window.EXPLAIN_CH = window.EXPLAIN_CH || {}; window.EXTRA_Q = window.EXTRA_Q || {};
(function () {
  const N = window.NGN_EXTRA['23'] = window.NGN_EXTRA['23'] || [];
  const R = window.RECALL_EXTRA['23'] = window.RECALL_EXTRA['23'] || {};
  ['nclex', 'rq', 'mc'].forEach(k => { R[k] = R[k] || []; });

  N.push(
    { f: 'order', t: 'The supraglottic swallow', cj: 'ta', cn: 'basic', st: ['np'],
      q: 'A client is learning the supraglottic method of swallowing after a supraglottic partial laryngectomy. Place the steps in order (Box 23.3).',
      o: ['Sit upright, out of bed if possible', 'Clear the throat and take a deep breath', 'Put ½ to 1 teaspoon of food in the mouth', 'Hold the breath or bear down', 'Swallow twice', 'Release the breath and clear the throat', 'Swallow twice again, then breathe normally'], a: [0, 1, 2, 3, 4, 5, 6],
      r: ['First: upright posture helps food go down the right way.', 'Second: a clear throat and full lungs before the food goes in.', 'Third: a small bite is easier to control.', 'Fourth: holding the breath closes the vocal cords over the airway.', 'Fifth: the double swallow clears the food.', 'Sixth: clearing the throat brings up anything that slipped toward the airway.', 'Last: a second double swallow clears food pooled in the throat.'],
      ask: 'When are the vocal cords closed, and what clears food left in the throat?',
      cues: ['Breath held during the swallow', 'Swallow twice', 'Clear the throat'],
      phys: 'Holding the breath before swallowing closes the vocal cords, exaggerating the normal pause in breathing that protects the airway; the extra swallows clear food left in the pharynx.',
      rule: 'Box 23.3: upright; clear throat; deep breath; ½–1 tsp food; hold breath or bear down; swallow twice; release and clear throat; swallow twice again; breathe normally. Used after a swallow study shows it is safe, especially after a partial laryngectomy or base-of-tongue resection.' },

    { f: 'matrix', t: 'Which surgery, which voice?', cj: 'ac', cn: 'psy', st: ['alike'],
      q: 'For each surgery for laryngeal cancer, indicate the voice the client can expect (Table 23.1).',
      cols: ['Normal voice', 'Normal or hoarse', 'Hoarse', 'No natural voice'],
      rows: [{ t: 'Laryngofissure, with no cord removed', a: 0, r: 'The cords stay, so the voice stays normal.' },
        { t: 'Transoral cordectomy of an early lesion', a: 1, r: 'Normal or hoarse, with a high cure rate.' },
        { t: 'Supraglottic partial laryngectomy', a: 1, r: 'The hyoid, false cords and epiglottis go; the true cords stay.' },
        { t: 'Hemilaryngectomy (vertical laryngectomy)', a: 2, r: 'One true cord and one false cord are removed.' },
        { t: 'Total laryngectomy', a: 3, r: 'The whole larynx is removed; the airway ends at a permanent stoma.' }],
      ask: 'How much of the vocal cords is left?',
      cues: ['No cord removed → normal', 'One true cord out → hoarse', 'Larynx out → no voice'],
      phys: 'Voice comes from air vibrating the true vocal cords; the more of them removed, the less voice is left.',
      rule: 'Table 23.1: laser surgery and transoral cordectomy — normal or hoarse; laryngofissure — normal; supraglottic partial — normal or hoarse; hemilaryngectomy — hoarse; total laryngectomy (larynx, hyoid, strap muscles, 1–2 tracheal rings) — no natural voice. Partial → temporary tracheostomy; total → permanent stoma.' },

    { f: 'matrix', t: 'Speaking after a laryngectomy', cj: 'ac', cn: 'psy', st: ['alike', 'subject'],
      q: 'For each description, indicate the speech method after a total laryngectomy.',
      cols: ['Esophageal speech', 'Electrolarynx', 'Tracheoesophageal puncture'],
      rows: [{ t: 'Swallowed air is “burped” up and shaped into words', a: 0, r: 'Sound comes from air pushed back up the esophagus.' },
        { t: 'A battery device held against the neck or cheek vibrates the air in the mouth', a: 1, r: 'The lips and tongue shape the vibrating air.' },
        { t: 'The voice sounds robotic', a: 1, r: 'Mechanical vibration gives a robot-like voice.' },
        { t: 'A silicone prosthesis sits in a surgical opening between the trachea and the esophagus', a: 2, r: 'Covering the stoma sends lung air through the valve into the esophagus.' },
        { t: 'The client covers the stoma with a finger or a valve to speak', a: 2, r: 'That diverts lung air into the esophagus and out the mouth.' }],
      ask: 'Where does the air that makes the sound come from?',
      cues: ['Burped air → esophageal', 'Device on the neck → electrolarynx', 'Valve + covered stoma → TEP'],
      phys: 'Without a larynx, sound must come from vibrating the esophagus (swallowed air or lung air sent through a puncture) or from a machine vibrating the air in the mouth.',
      rule: 'Speech after total laryngectomy: writing, picture board, phone or computer first; then an artificial larynx; then perhaps esophageal speech. TEP if esophageal speech fails and strict criteria are met. A visit from a laryngectomee helps.' },

    { f: 'sata', t: 'Caring for a laryngectomy stoma at home', cj: 'ta', cn: 'safe', st: ['safety'],
      q: 'The nurse is teaching a client with a total laryngectomy about home care. Which instructions should the nurse include? Select all that apply (Box 23.4).',
      o: ['Lean forward and cover the stoma when you cough or sneeze', 'Use a shower shield over the stoma when you bathe', 'Clean around the stoma with mild soap and water', 'Wear a MedicAlert bracelet and carry an emergency card', 'Add humidity with a bedside humidifier and houseplants', 'You can go swimming once the stoma has healed', 'Coat the stoma with petroleum jelly to keep it moist', 'Don’t wear scarves or necklaces near the stoma'], a: [0, 1, 2, 3, 4],
      r: ['Correct. Mucus comes out through the stoma.', 'Correct. Water must not enter the airway.', 'Correct. Gentle cleaning.', 'Correct. The card explains rescue breathing through the stoma.', 'Correct. The nose no longer humidifies the air.', 'Incorrect. Never swim: water goes straight into the lungs.', 'Incorrect. Use a non–oil-based ointment.', 'Incorrect. Loose scarves, high collars and jewelry can cover the stoma.'],
      ask: 'What did the nose and mouth used to do for this airway?',
      cues: ['No nose: humidify', 'Open airway: shield from water', 'Rescue breaths go to the stoma'],
      phys: 'After a total laryngectomy, air enters the trachea through the neck, bypassing the nose that filtered, warmed and moistened it, with no way to close the airway against water.',
      rule: 'Box 23.4: no swimming, care showering and shaving; lean forward and cover the stoma to cough or sneeze; stoma guard or loose clothing; mild soap and water, non–oil-based ointment; humidity (bedside humidifier, houseplants, saline); MedicAlert and emergency card.' }
  );

  R.nclex.push(
    { t: 'Trouble swallowing with a trach', cj: 'ac', cn: 'rrp', st: ['subject'],
      q: 'A client with a cuffed tracheostomy tube has difficulty swallowing. What best explains this?',
      o: ['The tube can hold the larynx in place, and an inflated cuff can bulge into the esophagus', 'The tube blocks the esophagus directly', 'The tracheostomy cut the swallowing nerves', 'Saliva production stops after a tracheostomy'], a: [0],
      r: ['Correct. The larynx must rise to swallow, and the wall between trachea and esophagus is thin.', 'Incorrect. The tube sits in the trachea.', 'Incorrect. Swallowing can be normal when the nerves and structures are intact.', 'Incorrect. Saliva continues.'],
      ask: 'What has to move during a swallow, and what could press on the food path?', cues: ['Cuffed tube', 'Trouble swallowing'],
      phys: 'In a normal swallow the larynx rises and moves forward; a tracheostomy tube can pin it, and an inflated cuff presses through the thin common wall into the esophagus.',
      rule: 'A cognitively intact client with a small tube and a deflated cuff may eat normally. After a partial vertical or supraglottic laryngectomy, watch for aspiration; a swallow study comes first.' },
    { t: 'Why a PEG, not an NG tube', cj: 'ac', cn: 'rrp', st: ['subject'],
      q: 'Why do most clients who need tube feeding after head and neck cancer surgery get a percutaneous endoscopic gastrostomy (PEG) tube instead of a nasogastric tube?',
      o: ['An NG tube holds the lower esophageal sphincter partly open, raising the risk of aspiration', 'An NG tube can’t carry liquid feedings', 'A PEG tube needs no care', 'An NG tube heals the surgical wound more slowly'], a: [0],
      r: ['Correct. Stomach contents can flow back up and be aspirated.', 'Incorrect. NG tubes deliver liquid feedings.', 'Incorrect. A PEG needs site care.', 'Incorrect. That isn’t the reason given.'],
      ask: 'What does a tube through the sphincter do to reflux?', cues: ['Long-term feeding', 'Aspiration risk'],
      phys: 'A tube passing through the lower esophageal sphincter keeps it from closing fully, so stomach contents can reflux and be aspirated.',
      rule: 'Feeding tubes placed in surgery stay 7–10 days, until swallowing is safe. Aspiration can lead to pneumonia, weight loss and longer stays.' },
    { t: 'Teaching after OSA surgery', cj: 'eo', cn: 'rrp', st: ['pos'],
      q: 'A client is going home 2 days after a modified uvulopalatopharyngoplasty (modUPPP) for obstructive sleep apnea. Which statement shows the teaching worked?',
      o: ['“I’ll look at my throat in a mirror twice a day and go to the emergency department if it looks narrower or I start drooling.”', '“I’ll brush my teeth well tonight so the area doesn’t get infected.”', '“I can take ibuprofen for the pain.”', '“Bright red blood in my saliva is expected for the first 2 weeks.”'], a: [0],
      r: ['Correct. A narrowing throat, drooling or trouble swallowing means swelling that can block the airway.', 'Incorrect. Use mouthwash and oral sponges until the surgeon allows brushing.', 'Incorrect. Avoid aspirin and NSAIDs until the bleeding risk passes.', 'Incorrect. A little blood after coughing is normal; bright red blood or clots need care at once.'],
      ask: 'What can the client watch at home that warns of airway swelling?', cues: ['Mirror check', 'Narrowing, drooling'],
      phys: 'Swelling of the remodeled oropharynx can keep growing after discharge, so the client checks the throat’s size (against coin sizes) twice a day.',
      rule: 'After OSA surgery: mirror check twice daily; ED for narrowing, inability to swallow or drooling; surgeon or ED for new bleeding, large clots or bright red blood; cool liquids, humidity, warm salt-water gargles, soft foods; no lifting or Valsalva.' },
    { t: 'Posterior packing and opioids', cj: 'rc', cn: 'safe', st: ['safety', 'abc'],
      q: 'A client with posterior nasal packing is receiving an opioid for pain. What should the nurse check at least every hour?',
      o: ['The airway, the packing position, and the gag and cough reflexes', 'Only the amount of drainage on the drip pad', 'Bowel sounds', 'The pupil size'], a: [0],
      r: ['Correct. A slipped pack can block the airway, and opioids blunt the protective reflexes.', 'Incorrect. Drainage matters, but the airway comes first.', 'Incorrect. Not the hourly priority.', 'Incorrect. Not the hourly priority.'],
      ask: 'What could block the airway, and what protects it?', cues: ['Posterior packing', 'Opioid'],
      phys: 'Posterior packing sits at the back of the nose, near the airway; opioids depress the gag and cough reflexes that keep secretions and blood out of the lungs.',
      rule: 'Posterior packing: check the airway and packing at least hourly; on opioids, gag and cough reflexes at least hourly; pulse oximetry; humidity, oxygen, bed rest, antibiotics as ordered; removed after 1–3 days.' },
    { t: 'After the packing comes out', cj: 'eo', cn: 'hpm', st: ['neg'],
      q: 'The nasal packing has been removed after a severe nosebleed. Which activity should the client avoid for at least 1 month?',
      o: ['Heavy lifting', 'Using a saline nasal spray once healed', 'Applying a little petroleum jelly to the nares', 'Walking'], a: [0],
      r: ['Correct. Strenuous activity raises pressure in the nasal vessels.', 'Incorrect. Saline spray moistens the lining and prevents rebleeding.', 'Incorrect. A thin layer eases dryness.', 'Incorrect. Light activity is fine.'],
      ask: 'Which activity raises pressure in the nose?', cues: ['At least 1 month'],
      phys: 'Straining and heavy lifting raise venous pressure in the head and can reopen the healing vessels.',
      rule: 'After packing removal: petroleum jelly sparingly; saline sprays after healing; avoid vigorous nose blowing, aspirin and NSAIDs, and strenuous activity or heavy lifting for at least 1 month.' },
    { t: 'Vomiting with wired jaws', cj: 'ta', cn: 'safe', st: ['abc', 'safety'],
      q: 'A client whose jaws were wired shut (inner maxillary fixation) after a mandibular fracture begins to vomit. What should the nurse do first?',
      o: ['Cut the wires to clear the airway', 'Turn the client on their side and wait for it to pass', 'Give an antiemetic', 'Call the surgeon for orders'], a: [0],
      r: ['Correct. The client can’t open the jaws to clear vomit, so the wires are cut to prevent aspiration.', 'Incorrect. Vomit can’t leave the mouth while the jaws are wired.', 'Incorrect. Too late to prevent this episode.', 'Incorrect. Clear the airway first; the surgeon rewires afterward.'],
      ask: 'Can the vomit leave the mouth?', cues: ['Jaws wired shut', 'Vomiting'],
      phys: 'With the jaws fixed closed, vomit has nowhere to go but back toward the airway.',
      rule: 'IMF: wire cutters always at hand (and with the client at home); cut the wires if vomiting threatens the airway, then return to the surgeon for rewiring as soon as possible. The airway is always the priority.' },
    { t: 'Hard-to-control blood pressure', cj: 'rc', cn: 'adapt', st: ['abnormal'],
      q: 'A client with suspected obstructive sleep apnea is being assessed. Which finding most strongly supports the diagnosis?',
      o: ['High blood pressure that stays elevated despite two antihypertensive drugs', 'A blood pressure of 112/70 mm Hg', 'A heart rate of 64 at rest', 'An SpO₂ of 98% while awake'], a: [0],
      r: ['Correct. Hypertension that doesn’t respond as expected to drugs is a classic clue to OSA.', 'Incorrect. Normal.', 'Incorrect. Normal.', 'Incorrect. Daytime saturation is often normal.'],
      ask: 'What do hundreds of nightly apneas do to blood pressure?', cues: ['Suspected OSA'],
      phys: 'Each apnea causes hypoxemia and a surge of sympathetic activity; repeated all night, it keeps blood pressure up despite treatment.',
      rule: 'OSA exam: weight, jaw, chin, neck, oral cavity; blood pressure, heart rate and rhythm. Ask which antihypertensives and doses; if high in an untreated client, recheck later and document persistent elevations.' },
    { t: 'Painless hoarseness', cj: 'rc', cn: 'hpm', st: ['abnormal'],
      q: 'Which client finding should the nurse refer for evaluation for laryngeal cancer?',
      o: ['Painless hoarseness that has lasted 3 weeks', 'Hoarseness for 2 days after cheering at a game', 'A sore throat for 3 days with a cold', 'A runny nose during pollen season'], a: [0],
      r: ['Correct. Hoarseness, a mouth sore or a neck lump that lasts more than 2 weeks needs evaluation; laryngeal cancer can cause painless hoarseness.', 'Incorrect. Short-term voice strain.', 'Incorrect. A short viral illness.', 'Incorrect. Allergic rhinitis.'],
      ask: 'How long has it lasted, and is there a clear cause?', cues: ['Painless', '> 2 weeks'],
      phys: 'A tumor on the cords keeps them from meeting, so the voice changes without pain.',
      rule: 'Box 23.2 warning signs include hoarseness or voice change, a lump, a nonhealing sore (2 weeks), dysphagia, color changes, oral bleeding, numbness, denture fit changes, one-sided ear pain. Evaluate anything lasting more than 2 weeks.' }
  );

  R.rq.push(
    ['Put it in order', 1, 'State the steps of the supraglottic swallow (Box 23.3).',
      'Sit upright (out of bed if possible); clear the throat; take a deep breath; put ½–1 teaspoon of food in the mouth; hold the breath or bear down; swallow twice; release the breath and clear the throat; swallow twice again; breathe normally.',
      'Holding the breath closes the vocal cords over the airway during the swallow.',
      'Use it only after a swallow study says it is safe.',
      'Breathing in between the two swallows.'],
    ['Compare and contrast', 1, 'Compare esophageal speech, the electrolarynx and a tracheoesophageal puncture.',
      'Esophageal speech: swallowed air is burped up and shaped into words. Electrolarynx: a battery device against the neck or cheek vibrates the air in the mouth; the voice sounds robotic. TEP: a silicone prosthesis in a surgical opening between the trachea and esophagus; covering the stoma sends lung air into the esophagus and out the mouth.',
      'Each makes a vibration where the larynx used to.',
      'Plan and practice the method with the speech-language pathologist before surgery.',
      'Expecting a natural voice after a total laryngectomy.']
  );

  const mc0 = R.mc.length;
  R.mc.push(
    ['Swimming is safe once a laryngectomy stoma has healed.', 'Never swim: water entering the stoma goes straight into the lungs.', 'Drowning.', 'The stoma opens directly into the trachea, and there is no way to close it the way the nose and mouth can be closed.'],
    ['An oxygen saturation that is normal while awake rules out obstructive sleep apnea.', 'OSA happens during sleep; daytime saturation is often normal, so it needs a sleep study.', 'A missed diagnosis, with hypertension and heart disease over time.', 'The airway collapses only when the throat muscles relax in sleep.']
  );
  const C = window.EXPLAIN_CARDS['23'] = window.EXPLAIN_CARDS['23'] || {}; C.mc = C.mc || {};
  R.mc.slice(mc0).forEach((x, i) => { C.mc[mc0 + i] = Object.assign({}, C.mc[mc0 + i], { why: x[3] }); });
})();
window.EXPLAIN_CH['23'] = 1;
