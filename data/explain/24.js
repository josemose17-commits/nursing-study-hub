// Full explanations for ch 24 questions. Format: see explain/22.js.
window.EXPLAIN = window.EXPLAIN || {};
Object.assign(window.EXPLAIN, {
  '24|n|0': {
    ask: 'Which teaching actually helps a lung that traps air and a client who burns a lot of energy breathing?',
    cues: ['COPD → air trapping, high work of breathing, weight loss', 'Oxygen has an ordered target — the client does not change it alone'],
    r: {
      0: 'Correct. Breathing out against pursed lips creates back-pressure that holds small airways open, so more trapped air gets out and the next breath is easier.',
      1: 'Correct. A full stomach pushes up on a flattened diaphragm and makes breathing harder. Breathing burns many calories, so small, frequent, high-calorie meals meet the need without the pressure.',
      2: 'Incorrect. Oxygen is a drug with an ordered target (often 88–92%). Turning it up without an order can raise CO₂ in some COPD clients and hides worsening that the provider needs to know about.',
      3: 'Correct. Influenza and pneumococcal infections are leading triggers of COPD exacerbations; vaccines prevent them.',
      4: 'Correct. Eating takes energy and breath. Resting first means the client is not already short of breath when the meal starts.',
      5: 'Correct. Stopping smoking is the only intervention proven to slow the loss of lung function.'
    },
    phys: 'Damaged, floppy small airways collapse on exhalation → air is trapped → the chest overinflates and the diaphragm flattens → every breath costs more energy → dyspnea and weight loss. Infections and smoke add inflammation → exacerbations.',
    rule: 'COPD teaching: pursed-lip breathing, small high-calorie meals, rest before meals, vaccines, stop smoking, oxygen only as ordered.'
  },
  '24|n|1': {
    ask: 'Which actions keep the chest drainage system closed, one-way and draining?',
    cues: ['Water seal → lets air out, not back in', 'Anything that blocks the exit or opens the system can collapse the lung'],
    r: {
      0: 'Correct. Below the chest, gravity pulls fluid out and stops it flowing back into the pleural space.',
      1: 'Incorrect. Clamping traps air that is still leaking from the lung. With nowhere to go it builds pressure — tension pneumothorax. Clamp only briefly and only when ordered (for example, to find a leak or change the unit).',
      2: 'Correct. Tidaling (water rising on inhale, falling on exhale) shows the tube is open to the pleural space. It stops when the lung fully re-expands or the tube kinks or clots.',
      3: 'Correct. If the tube disconnects, put the end in sterile water to restore the seal; if it pulls out, cover the site with an occlusive dressing (taped on three sides).',
      4: 'Incorrect. Stripping creates very high negative pressure that can damage lung tissue. It is done only when ordered, not as routine.',
      5: 'Correct. Marking the level shows the trend. More than about 100 mL/hr, or bright red drainage, suggests hemorrhage.'
    },
    phys: 'The pleural space normally has negative pressure that keeps the lung stuck to the chest wall. Air or fluid there collapses the lung. The chest tube drains it; the water seal acts like a one-way valve so air leaves on exhalation but cannot be pulled back in.',
    rule: 'Chest tube: keep it below the chest, never clamp or strip without an order, watch tidaling and bubbling, mark drainage, keep sterile water and an occlusive dressing at the bedside.'
  },
  '24|n|2': {
    ask: 'Read the trend, not one snapshot: is this client getting better or wearing out?',
    cues: ['RR 32 → 18 while SpO₂ falls 93% → 87%', 'Speech: sentences → 2–3 words → none', 'Wheeze: loud → barely audible', 'PaCO₂ 30 → 52 and pH 7.48 → 7.30'],
    r: {
      0: 'Incorrect. A falling RR and quieter wheeze would be good only if the client were also talking more and SpO₂ were rising. Here speech is gone and SpO₂ is falling — the muscles are tiring and less air is moving.',
      1: 'Correct. Early in an attack the client hyperventilates (low CO₂). A PaCO₂ that climbs back up and then past normal with a falling pH means the client can no longer move enough air — respiratory failure is close.',
      2: 'Incorrect. Resolving anxiety would come with better speech and SpO₂. Both are worsening.',
      3: 'Incorrect. The acidosis comes with a high PaCO₂, so it is respiratory, not lactic (metabolic).'
    },
    phys: 'Bronchospasm → fast breathing blows off CO₂ (respiratory alkalosis) → air trapping worsens and the muscles tire → less air moves → wheeze fades (a “silent chest”) → CO₂ rises → pH falls → drowsiness → arrest.',
    rule: 'In asthma, a “normal” or rising CO₂ and a quiet chest are danger signs, not improvement.'
  },
  '24|n|3': {
    ask: 'Among normal orders, which findings show harm or poor control that the nurse must act on?',
    cues: ['Theophylline 24 mcg/mL (usual range about 10–20) + HR 118 + nausea + insomnia', 'White patches on the tongue on an inhaled steroid', 'Rescue inhaler 8 times a day', 'Tiotropium daily and fluticasone/salmeterol BID are standard doses'],
    r: {
      0: 'Correct. A level above range with nausea, insomnia and tachycardia is theophylline toxicity. Hold the dose and notify — next come dysrhythmias and seizures.',
      1: 'Correct. White patches are oral thrush from the inhaled steroid suppressing immunity in the mouth. It needs treatment and teaching to rinse and spit after each dose.',
      2: 'Correct. Needing a rescue inhaler about 8 times a day means the disease is not controlled. Report it so the maintenance plan can be changed.',
      3: 'Incorrect. Tiotropium is a long-acting anticholinergic dosed once daily — this order is normal.',
      4: 'Incorrect. Fluticasone/salmeterol is an ICS/LABA dosed twice daily — this order is normal.'
    },
    phys: 'Theophylline has a narrow therapeutic index: a little too much → CNS and heart stimulation (nausea, insomnia, tachycardia, seizures). Inhaled steroids settle in the mouth → local immunity drops → Candida overgrows. Frequent rescue use → airways are inflamed despite controllers.',
    rule: 'Scan for the abnormal: toxic levels with symptoms, side effects that need treatment, and overuse of rescue drugs. Correct orders need no action.'
  },
  '24|n|4': {
    ask: 'Which chamber tells you air is leaking when it bubbles all the time?',
    cues: ['Continuous bubbling', 'Each chamber has its own normal'],
    r: {
      0: 'Gentle, continuous bubbling in the suction-control chamber is expected with wet suction — it means suction is on. Vigorous bubbling just evaporates water faster.',
      2: 'The collection chamber holds drainage; it does not bubble. Watch its amount and color.',
      3: 'The tubing is where you look for the leak (loose connections, a dislodged tube) after you see continuous bubbling in the water seal.'
    },
    phys: 'The water seal is a one-way valve. Air from the pleural space bubbles through it on exhalation or cough (intermittent bubbling is expected with a pneumothorax). Continuous bubbling means air is entering all the time — a leak in the system or from the client.',
    rule: 'Suction chamber: gentle continuous bubbling is normal. Water seal: tidaling normal; continuous bubbling = air leak — check from the client outward.'
  },
  '24|n|5': {
    ask: 'What order gets the most medicine into the small airways?',
    cues: ['MDI without a spacer → timing of the breath matters'],
    r: {
      0: 'First: shaking mixes the drug with the propellant so each puff has the right dose.',
      1: 'Second: breathing out fully empties the lungs so the next breath can be deep.',
      2: 'Third: starting a slow breath before pressing carries the spray deep instead of hitting the back of the throat.',
      3: 'Fourth: press once while still breathing in so the spray travels with the airflow.',
      4: 'Fifth: holding the breath lets the drug settle on the small airways instead of being breathed back out.',
      5: 'Last: wait about a minute between puffs (as instructed) — the first puff opens the airways so the second goes deeper.'
    },
    phys: 'A fast breath or poor timing → the spray hits the throat and is swallowed. A slow, deep breath timed with the puff → the drug reaches the bronchi → a breath-hold lets it deposit.',
    rule: 'Shake → exhale → start slow breath → press → keep inhaling → hold 5–10 s → wait before the next puff.'
  },
  '24|n|6': {
    ask: 'For each feature, does it point to reversible inflammation (asthma) or permanent damage (COPD)?',
    cues: ['Reversible, episodic, triggered → asthma', 'Smoking, progressive, structural, CO₂ retention → COPD'],
    rows: {
      0: 'Asthma. FEV₁ rising 12% or more after a bronchodilator shows the narrowing is reversible — the definition of asthma.',
      1: 'COPD. Years of smoke destroy alveolar walls → air trapping → the chest stays overinflated (barrel shape).',
      2: 'Asthma. Hyper-reactive airways clamp down when exposed to allergens, cold air or exercise, then open again between episodes.',
      3: 'COPD. Structural damage does not heal, so breathlessness slowly worsens over years.',
      4: 'COPD. Some clients chronically retain CO₂, so oxygen is titrated to a lower target (often 88–92%).'
    },
    phys: 'Asthma = inflamed, twitchy airways with smooth-muscle spasm → narrowing that comes and goes and reverses with treatment. COPD = destroyed alveoli and scarred, mucus-filled airways → narrowing that is permanent and progressive.',
    rule: 'Reversible and episodic = asthma. Progressive, smoking-related and structural = COPD.'
  },
  '24|n|7': {
    ask: 'Name the emergency, choose the actions that treat it now, and pick what shows air is moving again.',
    cues: ['Albuterol 6 times in 2 hours without relief', 'Tripoding, 1–2 word speech', 'SpO₂ 86%', 'Wheeze “barely audible” = silent chest'],
    cond: {
      0: 'Correct. Bronchospasm that does not respond to repeated rescue doses (status asthmaticus), a silent chest and SpO₂ 86% mean the client is close to respiratory failure.',
      1: 'Incorrect. Anxiety does not cause SpO₂ 86% or a silent chest after six rescue doses.',
      2: 'Incorrect. Pneumothorax usually causes sudden one-sided chest pain with absent sounds on that side — not a long asthma attack.',
      3: 'Incorrect. Nothing here (crackles, edema, cardiac history) points to heart failure; the pattern is refractory bronchospasm.'
    },
    act: {
      0: 'Correct. A silent chest with hypoxemia may need intubation — get the team now.',
      1: 'Correct. Oxygen treats hypoxemia, continuous or back-to-back bronchodilator opens airways, and a systemic corticosteroid treats the inflammation (it takes hours, so start it now).',
      2: 'Incorrect. Inhaled corticosteroids are controllers; they do not open airways in a crisis and the client cannot inhale enough to deliver them.',
      3: 'Incorrect. Walking raises oxygen demand in a client who is already failing.',
      4: 'Incorrect. Treatment starts immediately; an ABG can be drawn while you treat.'
    },
    mon: {
      0: 'Correct. In a silent chest, wheeze coming back means more air is moving — a sign of improvement.',
      1: 'Correct. SpO₂ shows oxygenation; PaCO₂ shows whether ventilation is recovering or failing.',
      2: 'Incorrect. A1C reflects 3 months of glucose control — useless in an acute crisis.',
      3: 'Incorrect. Urine color does not reflect airflow or gas exchange.',
      4: 'Incorrect. Steroids raise glucose and it may be checked, but it does not show whether bronchospasm is resolving.'
    },
    phys: 'Severe bronchospasm + mucus + inflammation → little air moves (silent chest) → air trapping → the breathing muscles tire → CO₂ rises → respiratory acidosis → arrest.',
    rule: 'Silent chest = emergency. Call for help, oxygen, continuous bronchodilator, systemic steroid; evaluate with breath sounds, SpO₂ and PaCO₂.'
  },
  '24|n|8': {
    ask: 'Follow albuterol from its receptor to its effects and side effects.',
    blanks: {
      1: 'Beta₂. Albuterol stimulates β₂ receptors on bronchial smooth muscle → relaxation. Alpha₁ constricts vessels; muscarinic receptors constrict airways.',
      3: 'Tremor and tachycardia. β₂ receptors in skeletal muscle cause tremor; spill-over onto heart β₁ receptors (and reflex from vasodilation) speeds the heart.',
      5: 'Decrease. β₂ stimulation turns on the Na⁺/K⁺ pump, which moves potassium into cells, so the blood level drops.'
    },
    phys: 'Albuterol → β₂ receptor → ↑ cAMP → bronchial smooth muscle relaxes. The same signal in skeletal muscle → tremor; in the heart → tachycardia; on the Na⁺/K⁺ pump → K⁺ shifts into cells.',
    rule: 'Side effects follow receptor location: β₂ = airways open, tremor, low K⁺; spill-over to β₁ = tachycardia.'
  },
  '24|c|0': {
    ask: 'Is a quiet chest in an asthma attack good news or an emergency?',
    cues: ['Loud wheeze → now absent', 'SpO₂ 86%', 'Drowsy'],
    r: {
      0: 'Incorrect. Losing the wheeze while SpO₂ falls and the client gets drowsy means almost no air is moving — a silent chest.',
      1: 'Correct. Silent chest plus drowsiness means the client is failing and CO₂ is rising. Get the team, give the rescue bronchodilator and oxygen.',
      2: 'Pursed-lip breathing helps air trapping in COPD at rest. It cannot rescue an asthma crisis.',
      3: 'Inhaled corticosteroids are slow controllers and do not relieve acute bronchospasm.'
    },
    phys: 'Wheeze is the sound of air squeezing through narrowed airways. When the airways are almost shut, too little air moves to make a sound → silent chest. Retained CO₂ → drowsiness.',
    rule: 'Silent chest + drowsiness in asthma = impending respiratory failure. Act now.'
  },
  '24|c|1': {
    ask: 'In what order are a reliever and a controller inhaler used, and what prevents steroid side effects?',
    cues: ['Albuterol = reliever (bronchodilator)', 'Fluticasone = controller (inhaled steroid)'],
    r: {
      0: 'Incorrect. The steroid would land on narrowed airways. Open them first with the bronchodilator.',
      1: 'Correct. Albuterol first opens the airways, wait (about 5 minutes), then fluticasone reaches deeper. Rinse and spit to prevent thrush and hoarseness.',
      2: 'Incorrect. Fluticasone is a controller — it reduces inflammation over days and does nothing in an attack.',
      3: 'Incorrect. Rinsing and spitting removes steroid left in the mouth and throat, preventing thrush and hoarseness.'
    },
    phys: 'Bronchodilator → airways widen → the steroid deposits further down where the inflammation is. Steroid left in the mouth → local immune suppression → Candida.',
    rule: 'Reliever first, wait, then controller, then rinse and spit.'
  },
  '24|c|2': {
    ask: 'Which lab confirms the suspected drug toxicity?',
    cues: ['Theophylline', 'Nausea + palpitations = early toxicity'],
    r: {
      0: 'INR monitors warfarin — unrelated here.',
      1: 'Correct. Theophylline has a narrow therapeutic range (about 10–20 mcg/mL). Nausea and palpitations suggest toxicity; dysrhythmias and seizures can follow.',
      2: 'Potassium can drop with theophylline, but the primary question is the drug level.',
      3: 'A1C reflects long-term glucose — unrelated.'
    },
    phys: 'Theophylline (a methylxanthine, like caffeine) stimulates the CNS and heart. Just above range → nausea, restlessness, tachycardia. Higher → dysrhythmias and seizures.',
    rule: 'Narrow-therapeutic-index drug + toxicity signs → hold and check the drug level.'
  },
  '24|c|3': {
    ask: 'Which chest-tube findings mean bleeding or a collapsing lung — call now?',
    cues: ['Escalation list: >100 mL/hr, tracheal shift, sudden dyspnea, SpO₂ <90%'],
    r: {
      0: 'Correct. More than about 100 mL/hr of drainage suggests active bleeding in the chest.',
      1: 'Correct. A trachea pushed to one side means pressure is building in the chest — tension pneumothorax.',
      2: 'Expected. Tidaling shows the tube is open to the pleural space.',
      3: 'Correct. Sudden worse breathing means the lung is collapsing again or something is compressing it.',
      4: 'Correct. SpO₂ below 90% means gas exchange is failing.'
    },
    phys: 'Air or blood collecting under pressure → collapses the lung → shifts the mediastinum → kinks the great veins → less venous return → shock. Heavy bloody drainage means a vessel is bleeding.',
    rule: 'Chest tube — call now: drainage >100 mL/hr or bright red, tracheal shift, sudden dyspnea, SpO₂ <90%. Tidaling is normal.'
  },
  '24|c|4': {
    ask: 'Which COPD client has changed from their own baseline?',
    cues: ['“New confusion”', 'PaCO₂ rising 50 → 68', 'The others are at baseline or chronic'],
    r: {
      0: 'SpO₂ 89% is within this client’s baseline of 88–90%. Stable.',
      1: 'Barrel chest and pursed-lip breathing are expected chronic COPD findings.',
      2: 'Correct. A CO₂ climbing well above this client’s usual level with new confusion is CO₂ narcosis — acute-on-chronic respiratory failure.',
      3: 'Weight loss matters for nutrition planning but is not urgent today.'
    },
    phys: 'COPD clients may live with a high CO₂ that the kidneys have compensated for. A further rise → acid builds faster than the kidneys can buffer → pH falls → CO₂ narcosis → confusion, drowsiness → apnea.',
    rule: 'A change from baseline beats abnormal-but-baseline.'
  },
  '24|c|5': {
    ask: 'Which statement about cystic fibrosis care is correct?',
    cues: ['CF → thick secretions block pancreatic ducts and airways; salty sweat'],
    r: {
      0: 'Correct. Thick mucus blocks the pancreatic ducts, so enzymes never reach the gut. Every meal and snack needs replacement enzymes to digest fat and protein.',
      1: 'Incorrect. People with CF lose extra salt in their sweat and often need more salt, especially in heat or exercise.',
      2: 'Incorrect. People with CF can pass resistant bacteria (Pseudomonas, Burkholderia) to each other; they should keep at least 6 feet apart and not share rooms.',
      3: 'Incorrect. Enzymes are needed with all food, not only when stools are loose.'
    },
    phys: 'Faulty CFTR chloride channel → secretions dry and thick → pancreatic ducts plug (malabsorption, fatty stools), airways plug (infection), and sweat glands cannot reabsorb salt (salty sweat).',
    rule: 'CF: enzymes with every meal and snack, extra salt and calories, airway clearance, no contact with other CF clients.'
  },
  '24|c|6': {
    ask: 'What must happen right away when a continuous prostacyclin infusion stops?',
    cues: ['Epoprostenol', 'Pump failure → drug has stopped'],
    r: {
      0: 'Unsafe. Epoprostenol’s half-life is only a few minutes; waiting for pharmacy can allow a fatal rebound.',
      1: 'Correct. Restart immediately with the backup pump or line per protocol. Even short gaps can cause rebound pulmonary hypertension and right heart failure.',
      2: 'An oral PAH drug works differently and too slowly to replace a stopped IV prostacyclin.',
      3: 'Documentation comes after the infusion is running again.'
    },
    phys: 'Epoprostenol dilates the pulmonary arteries but lasts only minutes. Stop it → vessels clamp down → pulmonary pressure spikes → the right ventricle cannot pump against it → right heart failure, syncope, death.',
    rule: 'Never interrupt continuous IV prostacyclin; keep a backup pump and line ready.'
  },
  '24|c|7': {
    ask: 'Which chest-tube task is positioning and reporting — not assessing or changing the system?',
    cues: ['AP = can maintain and report, not assess or manage equipment'],
    r: {
      0: 'Stripping or milking is not routine practice and is never an AP task.',
      1: 'Correct. Keeping the drainage unit below the chest and reporting changes in bubbling are within AP scope; the nurse interprets what they report.',
      2: 'Assessing the insertion site requires nursing judgment.',
      3: 'Changing the drainage system is a nursing task — the system must stay sealed.'
    },
    phys: 'Gravity drainage only works with the unit below the chest. AP can keep it there and notice changes; interpreting those changes requires a nurse.',
    rule: 'AP can position and report; the nurse assesses, interprets and manages the system.'
  },
  '24|c|8': {
    ask: 'Which test result is unique to asthma rather than shared by both?',
    cues: ['Both are obstructive — look for the one difference: reversibility'],
    r: {
      0: 'Both diseases reduce FEV₁ because both narrow the airways.',
      1: 'Correct. A 12% or greater rise in FEV₁ after a bronchodilator shows the narrowing reverses — the signature of asthma.',
      2: 'A low FEV₁/FVC ratio defines obstruction in both diseases.',
      3: 'Both trap air, so residual volume rises in both.'
    },
    phys: 'In asthma, narrowing comes from smooth-muscle spasm and inflammation, which a bronchodilator relaxes. In COPD, the airways and alveoli are structurally damaged, so a bronchodilator helps much less.',
    rule: 'Reversibility (FEV₁ ↑ ≥12% after bronchodilator) = asthma.'
  }
});
// The questions reused on the final (chapters 22–25) that had no “what is it asking” or cues, filled in for it.
[
  ['24|n|8', {"cues": ["Beta2 agonist", "Bronchodilation", "Spillover: tremor, tachycardia", "Potassium moves into cells"]}]
].forEach(([id, e]) => { window.EXPLAIN[id] = Object.assign({}, window.EXPLAIN[id] || {}, e); });
window.EXPLAIN_CH = window.EXPLAIN_CH || {}; window.EXPLAIN_CH['24'] = 1;
