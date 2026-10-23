// Full explanations for ch 23 questions (only its four high-yield picks are in the Mastery Loop bank). Format: see explain/22.js.
window.EXPLAIN = window.EXPLAIN || {};
Object.assign(window.EXPLAIN, {
  '23|n|0': {
    ask: 'Which findings mean the airway is closing — not just normal post-op discomfort?',
    cues: ['Head-and-neck surgery → swelling or a hematoma can squeeze the airway', 'Look for new noise (stridor), new trouble swallowing, rising effort', 'Compare to baseline: “unchanged from pre-op” is not new'],
    r: {
      0: 'Correct. Stridor is a high-pitched sound of air forced through a narrowed upper airway. Heard at rest, it means the opening is already small.',
      1: 'Correct. Swelling in the throat makes swallowing impossible, so saliva pools and drips out. A throat too swollen to swallow is close to too swollen to breathe through.',
      2: 'Incorrect. Moderate incisional pain is expected after neck surgery. Treat it, but it is not an airway sign.',
      3: 'Correct. A hematoma or edema under a neck dressing has nowhere to go but inward, compressing the trachea. A dressing that is getting tight is an early warning.',
      4: 'Incorrect. Hoarseness that matches the pre-op voice is the client’s baseline. A new or worsening change would matter.',
      5: 'Correct. Working harder to breathe and new restlessness are early signs of hypoxia and air hunger — the body is fighting a narrowing airway.'
    },
    phys: 'The upper airway is one tube with no backup. Bleeding or edema in the neck → presses on the larynx or trachea → the opening narrows → airflow drops sharply (halving the radius cuts flow about 16-fold) → stridor, drooling, rising effort → hypoxia.',
    rule: 'After neck or airway surgery: stridor, drooling, a tightening dressing or rising effort = airway emergency. Stay and call for help.'
  },
  '23|c|0': {
    ask: 'Which client’s airway is in danger right now?',
    cues: ['“Drooling” + “new stridor” 6 hours after neck surgery', 'The others are controlled, stable or about comfort'],
    r: {
      0: 'Bleeding is slowing and the client is already leaning forward (the correct position). Controlled — not first.',
      1: 'Correct. New stridor plus drooling means swelling or a hematoma is narrowing the airway. Edema peaks in the first hours after surgery — an emergency.',
      2: 'Important for the night, but the client is talking and asking for help — the airway is open. Not unstable.',
      3: 'Pain 5/10 matters, but pain comes after airway, breathing and circulation.'
    },
    phys: 'After neck surgery, swelling and bleeding build in the first hours → the larynx and trachea are squeezed → the airway radius shrinks → airflow falls steeply → stridor and drooling appear before the client fully obstructs.',
    rule: 'Airway first. New stridor or drooling after airway or neck surgery beats bleeding that is controlled, equipment questions and pain.'
  },
  '23|c|3': {
    ask: 'What is the most important safety step when a client with obstructive sleep apnea needs an opioid?',
    cues: ['OSA → the throat already collapses in sleep', 'Opioid → slows breathing and relaxes throat muscles', 'Two risks stacked together'],
    r: {
      0: 'Unsafe. Removing CPAP takes away the only thing holding the airway open during sleep — exactly when the opioid makes collapse worse.',
      1: 'Correct. CPAP splints the throat open, and continuous SpO₂ plus sedation checks catch slowing breathing early. Pain is treated safely instead of withheld.',
      2: 'Pain still needs treatment. The danger is not the opioid itself but an unmonitored airway — monitoring is the answer, not withholding.',
      3: 'Lying flat lets the tongue and soft palate fall back and worsens obstruction. Side-lying or head elevated is better.'
    },
    phys: 'Sleep → throat muscles relax → in OSA the airway collapses. Opioid → less response to CO₂ (slower breathing) + even less muscle tone → longer, deeper apneas → hypoxemia and CO₂ retention. CPAP pushes air in to hold the airway open.',
    rule: 'High-risk drug + high-risk airway = CPAP on, continuous SpO₂ (and capnography), frequent sedation checks, avoid stacking sedatives.'
  },
  '23|c|6': {
    ask: 'A fresh trach tube came out and the client is in distress — what do you do first?',
    cues: ['Day 2 → the stoma tract is not mature', '“In distress” → oxygenation is failing', 'Never leave a client whose airway is in danger'],
    r: {
      0: 'Unsafe. Leaving the client alone during an airway emergency means no one is there if they stop breathing. Send someone else.',
      1: 'Correct. Call for help, stay, and keep oxygen going (cover the stoma and ventilate from above, or oxygen to the stoma per protocol). The obturator and spare tube should already be at the bedside.',
      2: 'Unsafe. Before about day 5–7 the tract has not formed; forcing the tube can push it into the tissue of the neck (a false passage) with no airflow at all.',
      3: 'Documentation comes after the client is safe.'
    },
    phys: 'A new tracheostomy tract takes about a week to mature. Before that → the tissue closes once the tube comes out → blind reinsertion can tunnel into soft tissue → no air reaches the lungs.',
    rule: 'Dislodged new trach: stay, call for help, oxygenate; keep the obturator, spare tube and suction at the bedside at all times.'
  }
});
// The questions reused on the final (chapters 22–25) that had no “what is it asking” or cues, filled in for it.
[
  ['23|c|1', {"ask": "Which position and technique stop an anterior nosebleed without sending blood down the throat?", "cues": ["Lean forward, not back", "Pinch the soft part for 10–15 minutes", "No aspirin, no nose blowing"]}],
  ['23|c|2', {"ask": "How do you clear the airway without starving the client of oxygen or injuring the lining?", "cues": ["Oxygen in first", "Suction only while withdrawing", "10 seconds or less a pass", "Sterile technique"]}],
  ['23|c|4', {"ask": "What happens when a topical vasoconstrictor is used too long?", "cues": ["Topical decongestant", "Short-term only", "Rebound congestion"]}],
  ['23|c|5', {"ask": "Which finding after facial trauma is unexpected and dangerous rather than expected?", "cues": ["Clear nasal drainage", "Positive for glucose → cerebrospinal fluid", "Bruising, swelling and moderate pain are expected"]}],
  ['23|c|7', {"ask": "Which task is stable, predictable and routine — and which need the RN’s assessment, teaching or evaluation?", "cues": ["Stable client, mature tracheostomy", "Routine care → LPN", "Initial teaching, new findings, first-dose evaluation → RN"]}],
  ['23|n|1', {"ask": "Which actions cut swelling and pressure in the nose, and which one spots hidden bleeding?", "cues": ["Nasal packing", "Semi-Fowler’s, ice", "No nose blowing, straining or straws", "Frequent swallowing = blood running down the throat"]}],
  ['23|n|2', {"ask": "What new finding makes an existing order unsafe?", "cues": ["Facial trauma", "Clear drainage (cerebrospinal fluid)", "NG tube order → question it; nothing up the nose"]}],
  ['23|n|3', {"ask": "Which risks are stacking up in a sleeping client with sleep apnea, and how do you protect the airway tonight?", "cues": ["OSA + opioid + sedative", "Put the CPAP on", "Hold the sedative and notify", "Continuous SpO₂ (and capnography)"]}],
  ['23|n|4', {"ask": "Where does an anterior nosebleed usually start, and where does pressure reach it?", "cues": ["Anterior bleed", "Soft lower part of the nose", "Pinch and lean forward"]}],
  ['23|n|5', {"ask": "In what order do you protect oxygenation before, during and after suctioning?", "cues": ["Hand hygiene, explain", "Oxygen in first", "No suction going in", "10 seconds or less coming out", "Reoxygenate, reassess"]}],
  ['23|n|6', {"ask": "Which statements match safe self-care after a nosebleed?", "cues": ["Lean forward and pinch", "No NSAIDs, no hard nose blowing", "Humidify", "Get help after 15 minutes of pressure"]}],
  ['23|n|7', {"ask": "Is the airway closing, and what must happen right now?", "cues": ["4 hours after laryngeal surgery", "Inspiratory stridor, drooling", "RR 30, SpO₂ 90%"]}],
  ['23|n|8', {"ask": "How does CPAP treat the cause of obstructive sleep apnea, and what does that mean for how it is used?", "cues": ["The airway collapses during sleep", "Positive pressure splints it open", "Use it all night, every night"]}]
].forEach(([id, e]) => { window.EXPLAIN[id] = Object.assign({}, window.EXPLAIN[id] || {}, e); });
window.EXPLAIN_CH = window.EXPLAIN_CH || {}; window.EXPLAIN_CH['23'] = 1;
