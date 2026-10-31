// Exam 1 · Think it through · Perioperative complications (Ignatavicius ch 9). Our own words.
(window.MH_CONDS = window.MH_CONDS || []).push(
{
  id: 'postresp', group: 'Perioperative', name: 'Post-op opioid-induced respiratory depression', week: 1,
  short: 'Two hours after a knee replacement: hard to wake, snoring, RR 8, SpO₂ 86%.',
  patient: '68-year-old man, 2 hours after transfer from PACU following a total knee replacement. He has obstructive sleep apnea (doesn’t use his CPAP at home) and a hydromorphone PCA, and his wife has been pressing the button “so he doesn’t hurt.” He is snoring loudly and only rouses when you shake his shoulder and call his name, then drifts off mid-sentence. RR 8, shallow; SpO₂ 86% on 2 L; HR 58; BP 104/62.',
  report: [
    'I’m calling about Mr. K. in room 4, post-op day 0 after a total knee replacement. He is difficult to arouse with a respiratory rate of 8.',
    'He has untreated obstructive sleep apnea and is on a hydromorphone PCA. His wife has been pressing the button for him.',
    'He rouses only to touch and loud voice and falls asleep mid-sentence (POSS 4). RR 8 and shallow, SpO₂ 86% on 2 L, HR 58, BP 104/62. I stopped the PCA, raised the head of the bed, gave a sternal rub and increased his oxygen; the rapid response team is on the way.',
    'I’m giving naloxone per protocol now. Please come and assess him, and change his pain plan to non-opioid and lower-dose options with continuous capnography. I’d also like his CPAP brought in.'
  ],
  steps: {
    rc: {
      gist: 'In the first 24 hours after surgery the biggest danger is the **airway and breathing**. Watch **sedation level first**: excess sleepiness comes **before** the respiratory rate drops. Look for snoring or noisy breathing, slow or shallow breaths, falling SpO₂ or rising end-tidal CO₂, pinpoint pupils, and **who is pressing the PCA button**. Know who is at risk: **older adults, obstructive sleep apnea, obesity, opioid-naive patients, lung or kidney disease**, and anyone also on sedatives.',
      terms: [
        { t: 'Sedation scale (POSS)', see: '1 awake and alert; 2 slightly drowsy, easily roused; 3 frequently drowsy, drifts off mid-conversation; 4 somnolent, minimal or no response to touch and voice; S = normal sleep, easy to wake.', why: 'Opioids blunt the brain’s drive to breathe. Sleepiness shows up first; respiratory depression follows.', means: 'At **3**: hold the opioid, cut the dose and watch closely. At **4**: stop the opioid, stimulate, call for help and give **naloxone**.' },
        { t: 'PCA by proxy', see: 'A family member or a nurse not following protocol presses the button for the patient.', why: 'A PCA is safe because a sedated patient can’t press the button, so he gets no more drug. Anyone else pressing it removes that safety.', means: 'Teach: **only the patient** presses the button.' },
        { t: 'Snoring after surgery', see: 'Loud snoring, pauses, obstructive breathing.', why: 'Relaxed throat muscles from anesthesia and opioids, plus sleep apnea, block the upper airway.', means: 'Do **not** assume he is resting comfortably. Assess his arousal and SpO₂; use his CPAP; position him on his side or with the head up.' }
      ],
      cards: [
        { h: 'Other early post-op breathing problems', b: ['**Atelectasis** (collapsed alveoli): diminished breath sounds, crackles, low-grade fever in the first days; prevent with **incentive spirometry** (about 10 times an hour while awake), deep breathing, turning and walking.', '**Hypoxemia**: restlessness and confusion can be the first sign, especially in older adults.', '**Pneumonia** and **pulmonary embolism** (sudden dyspnea, chest pain, tachycardia) are later threats.'] }
      ]
    },
    ac: {
      gist: 'Deep sedation (POSS 4), **RR 8**, SpO₂ 86% and a slow heart rate in an older man with **untreated sleep apnea** on a PCA pushed by **someone else** = **opioid-induced respiratory depression** with **hypoventilation and hypoxemia**. This can progress to respiratory arrest.'
    },
    ph: {
      gist: 'Priority: **ineffective breathing pattern and impaired gas exchange** (airway and breathing come before pain). Then **risk for injury from opioid excess**, and later **acute pain** once he is safe.'
    },
    gs: {
      gist: 'Within minutes: he is **arousable** (POSS 1–2), RR **12 or more** with adequate depth, SpO₂ **92% or higher** and a clear airway. Over the shift: pain is controlled with a plan that doesn’t over-sedate him, and his wife understands why she must not press the button.'
    },
    ta: {
      gist: '**Stop the opioid** (pause the PCA). **Stimulate** him (call his name loudly, sternal rub), tell him to take deep breaths, **raise the head of the bed** or turn him on his side, open the airway and increase oxygen. Call the **rapid response team**. Give **naloxone** per protocol (dilute and give slowly, titrated to breathing, not to full wakefulness, so you don’t cause severe pain or withdrawal). Stay with him and monitor continuously (SpO₂ and **capnography**).',
      cards: [
        { h: 'Naloxone facts', b: ['It reverses opioids within minutes, but it **wears off sooner than many opioids** (it lasts about 30–90 minutes), so sedation can **return**: keep monitoring and repeat doses as ordered.', 'Too much too fast causes pain, nausea, vomiting, tachycardia and hypertension.'] },
        { h: 'Safer pain control after surgery', b: ['**Multimodal analgesia**: acetaminophen, NSAIDs if allowed, nerve blocks or local anesthetics, plus the lowest effective opioid dose.', 'Reassess sedation and breathing **before** each opioid dose and at the drug’s peak.', 'Patients with sleep apnea bring their **CPAP** and use it whenever they sleep.'] }
      ]
    },
    eo: {
      gist: 'Recheck his sedation, RR and depth, SpO₂ and end-tidal CO₂ every few minutes until stable, then closely for the next hours (naloxone wears off). Confirm the new pain plan keeps him at POSS 1–2 with tolerable pain.'
    }
  }
},
{
  id: 'malhyp', group: 'Perioperative', name: 'Malignant hyperthermia', week: 1,
  short: 'Under general anesthesia: end-tidal CO₂ climbing, HR 140, jaw rigid. Temperature still near normal.',
  patient: '24-year-old man having an ACL repair under general anesthesia with sevoflurane; he received succinylcholine for intubation. Twenty minutes in, his end-tidal CO₂ rises from 38 to 62 mm Hg despite more ventilation, HR is 142 and irregular, his jaw and chest are rigid, and his skin is mottled. Temperature is 37.9 °C and climbing. His mother mentioned “a cousin who almost died during surgery.”',
  report: [
    'This is the circulating nurse in OR 3. We have a suspected malignant hyperthermia crisis.',
    '24-year-old under sevoflurane after succinylcholine. He has a possible family history of an anesthesia death.',
    'End-tidal CO₂ rose from 38 to 62 despite increased ventilation, HR 142 with ectopy, masseter and chest rigidity, mottled skin, temp 37.9 and rising. The anesthesiologist has stopped the volatile agent and is hyperventilating him on 100% oxygen.',
    'I need the MH cart and extra hands to mix dantrolene now, and cooling supplies and ice. Please send arterial blood gas, potassium, CK and myoglobin, and call the ICU for a bed. Surgery is being finished as quickly as possible.'
  ],
  steps: {
    rc: {
      gist: 'Malignant hyperthermia (MH) is a rare, **inherited** muscle disorder: certain **inhaled (volatile) anesthetics** and **succinylcholine** make muscle cells release calcium uncontrollably, so the muscles contract and burn energy. Earliest cues: an **unexplained rise in end-tidal CO₂**, **tachycardia** and dysrhythmias, **muscle rigidity** (the jaw, the masseter, first), tachypnea, and mottling. **High fever is a late sign.** It can start in the OR or hours later in PACU. Ask every patient about personal or **family** problems with anesthesia.',
      terms: [
        { t: 'Rising end-tidal CO₂', see: 'The capnography number climbs even though the patient is being ventilated faster.', why: 'Hypermetabolic muscle produces huge amounts of CO₂.', means: 'Often the **first** sign. Don’t wait for the temperature.' },
        { t: 'Masseter (jaw) rigidity', see: 'The jaw won’t open after succinylcholine.', why: 'Sustained muscle contraction from uncontrolled calcium release.', means: 'A warning; general muscle rigidity follows.' }
      ],
      cards: [
        { h: 'What follows if it isn’t treated', b: ['**Hyperthermia** (temperature can rise by about 1 °C every 5 minutes), **hyperkalemia** from damaged muscle cells (dysrhythmias, cardiac arrest), metabolic and respiratory **acidosis**.', '**Rhabdomyolysis**: CK and myoglobin rise; myoglobin can cause **acute kidney injury** (dark, cola-colored urine).', 'DIC and death.'] }
      ]
    },
    ac: {
      gist: 'Rising end-tidal CO₂, tachycardia with ectopy, rigidity and climbing temperature after **sevoflurane + succinylcholine**, with a family history = **malignant hyperthermia crisis**. It is life-threatening within minutes.'
    },
    ph: {
      gist: 'Priority: **hyperthermia and the hypermetabolic state** (stop the trigger and give dantrolene), together with **impaired gas exchange** and **risk for decreased cardiac output** (hyperkalemia, dysrhythmias). Then **risk for acute kidney injury**.'
    },
    gs: {
      gist: 'End-tidal CO₂ and heart rate fall, rigidity resolves and temperature drops toward normal (cooling stops at about 38 °C so he doesn’t overcorrect); potassium and acid–base return to normal; urine output stays **at least 0.5 mL/kg/hour** and clear.'
    },
    ta: {
      gist: 'Call for help and the **MH cart**. **Stop the triggering agent**; hyperventilate with **100% oxygen**. Give **dantrolene** IV (it stops the calcium release; repeat until signs resolve). **Cool** the patient (ice packs to the groin and armpits, cold IV fluids, cooling blanket). Treat **hyperkalemia** and dysrhythmias (insulin and glucose, calcium; avoid calcium channel blockers with dantrolene). Monitor arterial blood gases, potassium, CK, urine output and core temperature. Transfer to the **ICU**: MH can recur in the next 24–72 hours.',
      cards: [
        { h: 'Prevention and teaching', b: ['Ask about personal and **family** reactions to anesthesia before every surgery.', 'Known or suspected MH: a **trigger-free** anesthetic (no volatile gases, no succinylcholine), with dantrolene ready.', 'The patient and blood relatives should be tested and wear a **medical alert** ID.'] }
      ]
    },
    eo: {
      gist: 'Watch end-tidal CO₂, HR and rhythm, temperature, potassium and blood gases, CK and myoglobin, and the color and amount of urine. Watch for recurrence in the ICU for at least 24 hours.'
    }
  }
},
{
  id: 'evisc', group: 'Perioperative', name: 'Wound dehiscence and evisceration', week: 1,
  short: 'Post-op day 6 after a laparotomy: “something popped” when he coughed; bowel is visible.',
  patient: '61-year-old man with obesity and type 2 diabetes, post-op day 6 after an open bowel resection. His incision had pink drainage yesterday. During a coughing fit he says, “Something just popped.” The dressing is soaked with serosanguineous fluid, the edges of the incision have separated, and loops of bowel are visible. He is pale and anxious; HR 112, BP 108/70.',
  report: [
    'I’m calling about Mr. P., post-op day 6 after an open bowel resection. His wound has eviscerated.',
    'He has obesity and diabetes, and his incision had increased serosanguineous drainage yesterday.',
    'After coughing he felt a pop. The incision is open with bowel visible. I covered it with sterile saline-moistened dressings, positioned him in low Fowler’s with his knees bent and made him NPO. HR 112, BP 108/70; he is anxious.',
    'I need you to see him right now; he will likely need to return to surgery. I’m staying with him. Should I start IV fluids and prepare him for the OR?'
  ],
  steps: {
    rc: {
      gist: '**Dehiscence** = the wound edges separate; **evisceration** = organs (usually bowel) push out through the open wound. It usually happens about **5–10 days** after surgery, often after **straining, coughing, sneezing or vomiting**. Cues: a sudden increase in **serosanguineous (pink, watery) drainage**, the patient feeling something “**pop**” or “give way,” separated edges, visible tissue. Risk factors: **obesity, diabetes, poor nutrition (low protein), smoking, steroids, wound infection, older age, abdominal distension**.',
      terms: [
        { t: 'Serosanguineous drainage', see: 'Pink, watery fluid on the dressing.', why: 'Plasma mixed with a little blood; a sudden gush can mean the deep layers are separating.', means: 'Look at the incision and tell the surgeon about any sudden increase.' }
      ],
      cards: [
        { h: 'How wounds heal', b: ['**First intention**: edges closed (sutures, staples); least scarring.', '**Second intention**: left open to heal from the bottom up (granulation tissue); infected or large wounds.', '**Third intention (delayed closure)**: left open first, then closed once infection is cleared.'] }
      ]
    },
    ac: {
      gist: 'An open abdominal incision with **bowel exposed** after coughing on post-op day 6, in a man with obesity and diabetes, plus tachycardia = **evisceration**, a **surgical emergency** (risk of infection, bowel injury and shock).'
    },
    ph: {
      gist: 'Priority: **protect the exposed organs** (impaired tissue integrity and risk for infection), and watch for **hypovolemic shock**. Then **anxiety** (stay with him).'
    },
    gs: {
      gist: 'The bowel stays **moist, covered and uninjured** until surgery; vital signs stay stable; he is prepared for the OR and calmer. Later: the wound heals without infection.'
    },
    ta: {
      gist: '**Stay with him and call for help** (the surgeon or rapid response). Cover the wound with **sterile dressings moistened with warm sterile normal saline** (keep them moist). **Do not** try to push organs back in. Position in **low Fowler’s with the knees bent** (or hips flexed) to relax the abdominal muscles. Keep him **NPO**, take vital signs often, watch for shock, and prepare for surgery. Stay calm and reassure him.',
      cards: [
        { h: 'Prevention', b: ['Teach **splinting** the incision with a pillow when coughing or sneezing; avoid straining (stool softeners) and heavy lifting.', 'An **abdominal binder** for high-risk patients.', 'Good **protein**, vitamin C and zinc intake; tight glucose control; stop smoking.'] },
        { h: 'Wound infection and drains', b: ['Infection usually shows **3–6 days** after surgery: redness, warmth, swelling, tenderness, **purulent** drainage, fever, rising WBC.', 'Closed drains (**Jackson-Pratt**, **Hemovac**) work by suction: **empty when half full**, then **compress** the bulb or bellows before closing; measure and record drainage.', 'Drainage colors: **serous** (clear, yellow), **sanguineous** (red, fresh blood), **serosanguineous** (pink), **purulent** (thick, cloudy, white, yellow or green: infection).'] }
      ]
    },
    eo: {
      gist: 'Check that the dressing stays moist, watch vital signs and urine output for shock, and assess his anxiety until he goes to surgery. Afterward, watch the wound for infection and teach prevention.'
    }
  }
}
);
