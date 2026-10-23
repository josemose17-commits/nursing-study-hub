// Full explanations for the Mastery Loop questions, keyed by bank id: ch|n|i (NGN), ch|c|i (NCLEX), ch|x|i (extra).
// ask = what the stem is really asking · cues = what to notice · phys = the mechanism, step by step · rule = what to carry into the exam.
// r / rows / cond / act / mon / blanks: an array replaces the rationales, an object patches them by index.
window.EXPLAIN = window.EXPLAIN || {};
Object.assign(window.EXPLAIN, {
  '22|n|0': {
    ask: 'Which signs show up first when oxygen falls — while the body is still compensating, before it fails?',
    cues: ['“Early” → look for compensation: an irritable brain, a faster heart, faster breathing', 'Anything that means the body is giving up (slow heart, low BP, blue skin) is late'],
    r: {
      5: 'Incorrect. Bradycardia with hypotension is late: the heart muscle itself is now short of oxygen and failing. It often comes just before arrest — far too late to count as early.'
    },
    phys: 'O₂ falls → the brain feels it first (restless, anxious, confused) → sympathetic surge speeds the heart → chemoreceptors speed breathing. When reserves run out → the heart slows, BP drops, and enough hemoglobin is unloaded that the skin turns blue.',
    rule: 'Early hypoxia = restless, confused, tachycardic, tachypneic. Late = bradycardia, hypotension, cyanosis. Act on the early signs.'
  },
  '22|n|1': {
    ask: 'What keeps this client safe while the throat is numb and they are still sedated?',
    cues: ['Topical anesthetic → no gag reflex yet', 'Moderate sedation → slower, shallower breathing', 'Biopsy → a little blood is expected; pleural injury is possible'],
    r: {
      1: 'Correct. The scope irritates the larynx and bronchi. Laryngospasm (stridor) or bronchospasm (wheezing) can narrow the airway in the first hours.',
      3: 'Correct. Sedatives blunt the drive to breathe. Watch SpO₂, RR and how easily the client wakes until they are fully recovered.',
      5: 'Correct. Fever points to infection or aspiration. Sudden chest pain or dyspnea after a biopsy suggests the pleura was nicked — pneumothorax.'
    },
    phys: 'Lidocaine spray numbs the throat → no gag or cough → food or fluid can slip silently into the airway. Sedation → less drive to breathe. The biopsy forceps can tear small vessels (blood-streaked sputum) or, rarely, the pleura (pneumothorax).',
    rule: 'After any airway procedure: NPO until the gag returns, watch breathing and sedation, expect a little blood, report fever, chest pain or sudden dyspnea.'
  },
  '22|n|2': {
    ask: 'What fixes the real problem — the client is breathing too slowly — rather than the number on the monitor?',
    cues: ['PCA morphine', 'RR 16 → 12 → 7 and harder to wake each check', 'Snoring = the relaxed tongue is partly blocking the airway', 'PaCO₂ 60 with pH 7.28 = acute respiratory acidosis', 'SpO₂ 94% on oxygen = the distractor'],
    r: {
      2: 'Incorrect. A client getting worse at every check (RR 7, PaCO₂ 60) cannot wait an hour. Recheck after you treat, not instead of treating.',
      3: 'Incorrect. 94% only looks fine because the client is on oxygen. SpO₂ says nothing about ventilation — the CO₂ is 60 and climbing.'
    },
    phys: 'Opioid → the brainstem stops responding to CO₂ → slower, shallower breaths → CO₂ builds → carbonic acid lowers the pH → CO₂ itself sedates → breathing slows further (a spiral). Supplemental oxygen keeps SpO₂ up, so the oximeter hides it.',
    rule: 'For opioids, sedation and RR come before SpO₂. Stop the opioid, stimulate, support breathing, give naloxone per protocol.'
  },
  '22|n|3': {
    ask: 'Which findings are complications of the procedure, not the normal after-effects?',
    cues: ['1,400 mL removed — a large volume at once', 'RR 30, SpO₂ 88% on room air', 'Silent right upper field', 'New cough with pink frothy sputum'],
    r: {
      0: 'Expected. A needle went through the chest wall. Mild soreness under a dry dressing is normal and needs no report.',
      1: 'Correct. RR 30 with SpO₂ 88% is new gas-exchange failure right after the procedure — something went wrong inside the chest.',
      2: 'Correct. A silent upper field means air in the pleural space. Air rises, so a pneumothorax is heard first at the top.',
      3: 'Reassuring for now. A midline trachea means no tension pneumothorax pushing the mediastinum yet. Keep checking, but this alone is not the report.',
      4: 'Correct. Draining a lot of fluid fast (usually no more than about 1,000–1,500 mL at once) lets the squeezed lung re-expand suddenly and leak fluid into the alveoli — re-expansion pulmonary edema.'
    },
    phys: 'Needle nicks the lung → air enters the pleural space → that part of the lung collapses → absent sounds and hypoxemia. Large, fast fluid removal → the compressed lung springs open → its capillaries leak → pink frothy sputum.',
    rule: 'After thoracentesis: soreness is expected. New dyspnea, low SpO₂, absent sounds, tracheal shift or frothy sputum get reported now.'
  },
  '22|n|4': {
    ask: 'Where on the back do you put the stethoscope to hear the right lower lobe?',
    cues: ['Posterior chest — you stand behind the client, so their right is your right', 'Lower lobe → listen low, near the base'],
    r: {
      0: 'Above the scapula is the left apex — upper lobe. Wrong side and far too high.',
      1: 'Left side at T3 is the left upper lobe area. Wrong side and too high.',
      2: 'Right side, but at T3 — right where the lower lobe begins (the fissure starts near T3). Listen lower, near the base, to be sure you are over the right lower lobe.',
      3: 'Right height (T9–T10) but the left side — that is the left lower lobe. Standing behind the client, their right is on your right.'
    },
    phys: 'From behind you mostly hear the lower lobes: they start near T3 and run down to the base at about T10. The upper lobes sit above T3. The right middle lobe is only heard from the front and side.',
    rule: 'Posterior chest = lower lobes. Right middle lobe = front/axilla. Always compare side to side at the same level.'
  },
  '22|n|5': {
    ask: 'What is the safe order when a monitor alarms — look at the person, then the device, then treat, then escalate?',
    cues: ['SpO₂ 84% on 2 L — could be real hypoxemia or a bad reading'],
    r: {
      3: 'Fourth: if the client is truly hypoxemic, raise oxygen within the ordered range or protocol — the order sets how far the nurse can go.',
      5: 'Last: document the findings, actions and response once the client is stable.'
    },
    phys: 'A loose probe, cold fingers or a cannula out of the nose can make the number wrong. A real drop starves the brain within minutes. Looking at the client first tells you which one it is and how fast to move.',
    rule: 'Client → equipment → simple fixes (position, O₂ within the order) → escalate → document.'
  },
  '22|n|6': {
    ask: 'For each finding, is it normal for this client and this location, or a sign of a problem?',
    cues: ['Location matters: bronchial sounds belong over the trachea, not the base', 'Baseline matters: a COPD target of 88–92% makes 90% expected'],
    rows: {
      2: 'Needs follow-up. Clubbing takes months of low oxygen to develop. New clubbing with no known cause needs a workup (lung cancer, chronic lung or heart disease).',
      3: 'Expected. COPD clients often have an ordered target of 88–92% because too much oxygen can raise their CO₂. 90% is inside their goal.',
      4: 'Needs follow-up. Stridor is a high-pitched sound from a narrowed upper airway. After extubation it means laryngeal swelling or spasm and can progress to complete obstruction.',
      5: 'Expected. Both sides rising equally means both lungs are inflating. Unequal rise suggests pneumothorax, atelectasis or splinting from pain.'
    },
    phys: 'Air moving through big airways is loud (bronchial). Through small airways into alveoli it is soft (vesicular). Fluid or consolidation conducts the loud sound to places it should not be heard.',
    rule: 'Expected vs follow-up depends on where you hear it and what is normal for this client.'
  },
  '22|n|7': {
    ask: 'Name the condition from the cues, pick the actions that treat it, then choose what shows it is improving.',
    cues: ['1 hour after thoracentesis', 'Sudden sharp right chest pain', 'Absent right breath sounds', 'Trachea shifting LEFT — away from the problem', 'HR 124, SpO₂ 86%'],
    act: {
      1: 'Correct. High-flow oxygen raises the oxygen in the lung that is still working while the team prepares to decompress.',
      2: 'Incorrect. An anxiolytic treats fear, not trapped air. It can slow breathing and hide worsening — the cause here is mechanical.',
      3: 'Incorrect. Walking raises oxygen demand in a client who already cannot oxygenate. Keep them at rest, upright.',
      4: 'Incorrect. The problem is inside the chest, not at the skin. Inspecting the dressing wastes time.'
    },
    mon: {
      1: 'Correct. SpO₂ climbing and RR settling show gas exchange is recovering after decompression.',
      2: 'Incorrect. Urine specific gravity tracks hydration — not what is failing here.',
      3: 'Incorrect. Glucose does not show whether the lung has re-expanded.',
      4: 'Incorrect. Pupils track neurologic status, not decompression of the chest.'
    },
    phys: 'Needle injury makes a one-way valve: air gets into the pleural space with each breath but cannot leave → pressure builds → the lung collapses → the mediastinum and trachea are pushed away → great veins kink → less blood returns to the heart → cardiac output falls.',
    rule: 'Absent sounds + tracheal shift away + falling BP/SpO₂ = tension pneumothorax. Stay, call for help, give oxygen; it needs needle decompression.'
  },
  '22|n|8': {
    ask: 'Follow the chain: slower breathing → what happens to CO₂ → which acid-base problem → which monitor catches it first.',
    blanks: {
      1: 'Rise. Fewer breaths blow off less CO₂, so it builds up in the blood.',
      3: 'Respiratory acidosis. CO₂ + water → carbonic acid → pH falls. “Respiratory” because the lungs caused it; alkalosis would need CO₂ to fall.',
      5: 'End-tidal CO₂. It measures ventilation breath by breath and rises before SpO₂ drops — SpO₂ can stay normal on oxygen while CO₂ climbs. Hemoglobin is unrelated.'
    },
    phys: 'CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻. More CO₂ pushes the reaction right → more H⁺ → lower pH.',
    rule: 'Hypoventilation = CO₂ up = respiratory acidosis. Monitor ventilation with RR, sedation and ETCO₂ — not SpO₂.'
  },
  '22|c|0': {
    ask: 'Which client has a new, unexpected change that threatens breathing?',
    cues: ['“New sudden dyspnea” + HR 118 right after a procedure that punctures the pleura', 'The others are stable or chronic'],
    r: {
      0: 'SpO₂ 90% is inside the usual 88–92% COPD target, and full sentences mean enough air movement. Stable — not first.',
      1: 'Needs a gag check before drinking, but is not in distress. Ask them to wait; see them second.',
      3: 'Clubbing is chronic and expected for this client. Waiting for a test is not urgent.'
    },
    phys: 'Air entering the pleural space removes the negative pressure that holds the lung open → the lung collapses → hypoxemia → the heart speeds up to compensate.',
    rule: 'Acute and unexpected beats chronic and expected. Sudden dyspnea after a chest procedure = pneumothorax until proven otherwise.'
  },
  '22|c|1': {
    ask: 'Is it acidosis or alkalosis, did the lungs or kidneys cause it, and has the other system compensated?',
    cues: ['pH 7.30 → acidosis', 'PaCO₂ 58 → high, an acid → respiratory cause', 'HCO₃⁻ 26 → normal → no compensation yet'],
    r: {
      2: 'Incorrect. Respiratory alkalosis needs a LOW CO₂ (from hyperventilation) and a high pH. Here CO₂ is high and pH is low.'
    },
    phys: 'Hypoventilation retains CO₂ → carbonic acid → pH falls. The kidneys compensate by keeping HCO₃⁻, but that takes 2–3 days, so in an acute problem HCO₃⁻ is still normal.',
    rule: 'ROME: Respiratory = pH and CO₂ move Opposite; Metabolic = pH and HCO₃⁻ move the same way (Equal). Compensation = the other value moves; full compensation = pH back to 7.35–7.45.'
  },
  '22|c|2': {
    ask: 'When can the oximeter number be wrong even though it shows a value?',
    cues: ['Think: weak pulse, blocked light, the wrong gas on hemoglobin, too little hemoglobin'],
    r: {
      0: 'Correct. Cold or poorly perfused fingers give the probe a weak pulse to read, so the number may be falsely low or erratic.',
      3: 'Incorrect. Sitting upright does not change how light passes through the finger, so it does not affect accuracy.'
    },
    phys: 'The probe shines red and infrared light through a pulsing finger and compares how much each is absorbed. Weak pulse (cold, shock) → poor signal. Polish → blocks light. Carbon monoxide → read as oxygen. Anemia → saturation can be 100% of very little hemoglobin.',
    rule: 'Trust the client over the number: check perfusion, polish, CO exposure and Hgb before believing SpO₂.'
  },
  '22|c|3': {
    ask: 'What must be true before this client can safely swallow anything?',
    cues: ['The throat was numbed for the scope'],
    r: {
      1: 'Not the priority. Vigorous coughing after a biopsy can increase bleeding, and it does not tell you the gag reflex is back.',
      2: 'A chest x-ray is done when pneumothorax is suspected (for example after a transbronchial biopsy). It does not protect the airway before eating.',
      3: 'A lozenge is something in the mouth that can be aspirated, and it numbs the throat further. Wait for the gag reflex.'
    },
    phys: 'The throat is sprayed with a topical anesthetic → the sensory nerves that trigger gag and cough are blocked for about 1–2 hours → food or fluid can enter the airway without a cough.',
    rule: 'No food, fluid, ice chips or lozenges until the gag and swallow reflexes return.'
  },
  '22|c|4': {
    ask: 'What fixes slow breathing from an opioid — not just the saturation number?',
    cues: ['IV morphine', 'RR 8 and hard to arouse', 'SpO₂ 95% on oxygen = the distractor'],
    r: {
      3: 'Unsafe. RR 8 and hard to arouse can become apnea within minutes; waiting 30 minutes could be fatal.'
    },
    phys: 'Opioid → brainstem ignores rising CO₂ → slower breathing → CO₂ climbs and sedates further. Oxygen keeps SpO₂ normal, hiding it. Naloxone knocks the opioid off its receptors and restores the drive to breathe.',
    rule: 'Sedation level and RR come before saturation for opioid safety. Stimulate, stop the opioid, support ventilation, naloxone per protocol.'
  },
  '22|c|5': {
    ask: 'Which drug is causing a respiratory side effect that needs the provider to know?',
    cues: ['“New” symptom', '“Since starting” a drug', 'Only one option is respiratory'],
    r: {
      1: 'Not respiratory. Acetaminophen does not cause airway effects, and a mild headache is not what the question asks about.',
      2: 'Constipation is a common GI effect of oral iron — expected, and not respiratory.',
      3: 'Bedtime drowsiness is an expected antihistamine effect and not respiratory.'
    },
    phys: 'ACE breaks down bradykinin. Block ACE (lisinopril) → bradykinin builds up → it irritates cough receptors in the airway → a dry, nagging cough. ARBs do not affect bradykinin, so they are the usual switch.',
    rule: 'New dry cough after starting a “-pril” = ACE inhibitor cough → report; the provider often switches to an ARB.'
  },
  '22|c|6': {
    ask: 'Which task is routine data collection — not assessing, teaching or evaluating?',
    cues: ['Assistive personnel (AP)', 'Look for the option that only measures and reports'],
    r: {
      0: 'Assessing lung sounds means interpreting findings — a nursing responsibility that cannot be delegated.',
      2: 'Initial teaching needs nursing knowledge and a check of understanding, so the nurse keeps it. AP can remind the client once taught.',
      3: 'Evaluating whether oxygen is working is judgment. AP can report the numbers; the nurse decides what they mean.'
    },
    phys: 'Assistive personnel can collect routine data on stable clients. Interpreting that data, teaching and judging the response all need a nurse’s assessment.',
    rule: 'Don’t delegate EAT: Evaluate, Assess, Teach. AP can measure and report.'
  },
  '22|c|7': {
    ask: 'Which finding is a normal after-effect of the procedure?',
    cues: ['“Expected” — the one that needs no action'],
    r: {
      0: 'Not expected. The trachea moving away from the puncture side means air under pressure is pushing the mediastinum — tension pneumothorax, an emergency.',
      1: 'Correct. A needle passed through the chest wall, so mild soreness at the site is expected.',
      2: 'Not expected. Breath sounds should improve once fluid is removed. Absent sounds mean the lung collapsed — pneumothorax.',
      3: 'Not expected. Pink frothy sputum means fluid leaking into the alveoli after the lung re-expanded too fast — re-expansion pulmonary edema.'
    },
    phys: 'Removing pleural fluid lets the lung re-expand, so breath sounds should get better, not disappear. The only thing that should hurt is the puncture site.',
    rule: 'Know the expected findings so the unexpected stands out.'
  },
  '22|c|8': {
    ask: 'Which change means the client is tiring out, not getting better?',
    cues: ['RR drops a lot (30 → 12)', 'Getting drowsier', 'Quiet chest = little air moving'],
    r: {
      0: 'Improving. The rate is easing toward normal and the client can say more per breath — more air per breath.',
      1: 'Improving. Oxygenation rose with a simple position change.',
      3: 'Improving when the client is also more comfortable — less work of breathing. (Less accessory use with growing drowsiness would be fatigue, but nothing here says that.)'
    },
    phys: 'Hours of fast breathing exhaust the diaphragm → the rate falls → CO₂ builds → CO₂ narcosis makes the client drowsy → breathing slows further. A quiet chest means too little air is moving to make any sound.',
    rule: 'A “calmer” client whose mental status is worsening is failing, not improving.'
  },
  '22|x|0': {
    ask: 'Add up each smoking period separately: packs per day × years.',
    cues: ['Two periods with different amounts'],
    r: {
      1: 'Incorrect. 30 counts only the first period (2 × 15) and forgets the 10 years at 1 pack.',
      2: 'Correct. Add each period: (2 packs × 15 years) + (1 pack × 10 years) = 30 + 10 = 40 pack-years.',
      3: 'Incorrect. 50 is 2 packs × 25 years — it applies the first rate to the whole time.'
    },
    phys: 'Pack-years measure the total dose of smoke. Airway damage builds with the total, not the current habit.',
    rule: 'Pack-years = packs per day × years smoked; add each period separately.'
  },
  '22|x|1': {
    ask: 'Packs per day × years smoked.',
    cues: ['Half a pack a day = 0.5'],
    r: {
      0: 'Incorrect. 7.5 halves twice (0.5 × 15). Half a pack for 30 years is 0.5 × 30.',
      1: 'Correct. Half a pack a day × 30 years = 0.5 × 30 = 15 pack-years.',
      3: 'Incorrect. 60 doubles instead of halving (2 × 30).'
    },
    rule: 'Pack-years = packs per day × years smoked.'
  },
  '22|x|2': {
    ask: 'What is the safety teaching about smoking while using nicotine replacement?',
    cues: ['Patch is on', '“Just one cigarette”'],
    r: {
      2: 'Unsafe. Nicotine keeps absorbing from the skin after the patch comes off, so the doses still stack — and planning a cigarette undermines quitting.'
    },
    phys: 'Nicotine → releases adrenaline → narrows vessels, raises heart rate and BP, makes platelets stickier. Patch + cigarette = a double dose → higher risk of MI and stroke.',
    rule: 'Never smoke while using nicotine replacement therapy.'
  },
  '22|x|3': {
    ask: 'Which statements actually prevent lung disease?',
    cues: ['Look for: avoid inhaled smoke and dust, keep vaccines current'],
    r: {
      5: 'Correct. A smoke-free home removes secondhand smoke and the thirdhand residue that clings to furniture and clothes.'
    },
    phys: 'Smoke and dust paralyze cilia and inflame the airway → mucus and germs stay in → infection and COPD. Vaccines prime immunity before exposure to influenza and pneumococcus.',
    rule: 'Prevention = avoid inhaled irritants (including hookah, vaping, secondhand smoke) and keep flu and pneumococcal vaccines current.'
  },
  '22|x|4': {
    ask: 'What is the boxed-warning safety teaching for bupropion?',
    cues: ['Bupropion → antidepressant used for quitting'],
    r: {
      0: 'Not relevant. Grapefruit matters for drugs cleared by CYP3A4 (some statins, calcium channel blockers), not bupropion’s key safety teaching.',
      3: 'Incorrect. Returning cravings are a reason to call the provider, not to stop on their own — and this is not the safety priority.'
    },
    phys: 'Bupropion raises brain dopamine and norepinephrine → fewer cravings and withdrawal symptoms. Changing brain chemistry can also change mood (suicidal thoughts), and it lowers the seizure threshold.',
    rule: 'Bupropion: report mood or behavior changes right away; avoid with seizure or eating disorders.'
  },
  '22|x|5': {
    ask: 'Which changes are normal aging, not disease?',
    cues: ['Aging = less elasticity, stiffer wall, weaker muscles and cough'],
    r: {
      3: 'Incorrect. Alveoli lose elastic recoil with age, so air is trapped more easily — the opposite.',
      4: 'Correct. Cilia become fewer and slower, so mucus and germs are cleared less well.',
      5: 'Incorrect. Respiratory muscles weaken with age — part of why the cough weakens.'
    },
    phys: 'Elastic fibers and muscle are lost → alveoli recoil less and air is trapped → the chest wall stiffens → the cough weakens and cilia slow → less gas-exchange surface → PaO₂ drifts down.',
    rule: 'Aging: less recoil, stiffer chest, weaker muscles and cough, fewer cilia, lower PaO₂.'
  },
  '22|x|6': {
    ask: 'Why does pneumonia hide in older adults?',
    cues: ['Older adult', 'Diagnosis delayed'],
    r: {
      0: 'Incorrect. Older adults often have a low or no fever even with serious infection.',
      2: 'Incorrect. Cilia decrease with age, so infections clear less well.',
      3: 'Incorrect. PaO₂ normally falls with age, so there is less reserve, not more.'
    },
    phys: 'Aging blunts fever and cough reflexes and lowers reserve → the classic signs are weak or absent → the first sign is often new confusion from hypoxia.',
    rule: 'In older adults, new confusion can be the first sign of hypoxia or infection.'
  }
});
// The questions reused on the final (chapters 22–25) that had no “what is it asking” or cues, filled in for it.
[
  ['22|n|8', {"cues": ["Opioid sedation → slower breathing", "CO₂ follows ventilation, not oxygen", "SpO₂ can stay normal on supplemental oxygen"]}]
].forEach(([id, e]) => { window.EXPLAIN[id] = Object.assign({}, window.EXPLAIN[id] || {}, e); });
window.EXPLAIN_CH = window.EXPLAIN_CH || {}; window.EXPLAIN_CH['22'] = 1;
