// Exam 1 · Think it through · Cancer treatment complications and oncologic emergencies (Ignatavicius ch 18). Our own words.
(window.MH_CONDS = window.MH_CONDS || []).push(
{
  id: 'neutro', group: 'Cancer', name: 'Neutropenic fever after chemotherapy', week: 2,
  short: 'Day 9 after chemo for breast cancer: 38.4 °C, a little chilled, “otherwise fine.” ANC 300.',
  patient: '52-year-old woman 9 days after her second cycle of chemotherapy for breast cancer. She calls the clinic: her temperature is 38.4 °C (101.1 °F), she had a chill, and she feels “a bit tired but otherwise fine.” In the ED: HR 108, BP 112/68, RR 20, no cough, no redness at her port. ANC 300/mm³, platelets 62,000/mm³, hemoglobin 10.1 g/dL.',
  report: [
    'I’m calling about Mrs. C., 52, with febrile neutropenia.',
    'She is day 9 after her second cycle of chemotherapy for breast cancer, which is when her counts are at their lowest. She has an implanted port.',
    'Temp 38.4 with a chill, HR 108, BP 112/68. ANC 300, platelets 62,000, Hgb 10.1. I don’t see an obvious source; the port site looks normal. I drew two sets of blood cultures, one from the port and one from a peripheral vein, and a urine culture, and placed her in a private room on neutropenic precautions.',
    'Please order broad-spectrum IV antibiotics so I can start them within the hour, plus a lactate and a chest x-ray. Should we consider a growth factor?'
  ],
  steps: {
    rc: {
      gist: 'Chemotherapy kills fast-dividing cells, including the bone marrow’s, so blood counts fall to their lowest point (the **nadir**), usually about **7–14 days** after a dose. With **neutropenia** (ANC **below 1,500**; severe **below 500**), the usual signs of infection (pus, redness, swelling, infiltrates on x-ray) may be **missing**, because there are too few neutrophils to make them. A **fever of 38 °C (100.4 °F)** or higher **may be the only sign** of a life-threatening infection. Also watch for chills, new tachycardia, low BP, confusion, mouth sores, and changes at IV or port sites.',
      terms: [
        { t: 'Absolute neutrophil count (ANC)', see: 'WBC × (% segs + % bands) ÷ 100. Example: WBC 1,000 with 25% segs and 5% bands = ANC 300.', why: 'Neutrophils are the first line against bacteria and fungi.', means: 'Below 500: severe risk; any fever is an **emergency**.' },
        { t: 'Nadir', see: 'The lowest count after a chemotherapy dose.', why: 'Timing depends on the drug; marrow recovers over the next 1–2 weeks.', means: 'Teach patients the days of highest risk; doses may be delayed until counts recover.' }
      ]
    },
    ac: {
      gist: 'Fever with chills, tachycardia and an **ANC of 300** at the **nadir** = **febrile neutropenia**, a medical emergency that can become **sepsis** within hours, even though she “feels fine.”'
    },
    ph: {
      gist: 'Priority: **infection and risk for sepsis** (get cultures and antibiotics in fast). Then **risk for bleeding** (platelets 62,000), fatigue, and anxiety.'
    },
    gs: {
      gist: 'Antibiotics start **within 60 minutes** of arrival; she stays out of septic shock (BP stable, lactate normal, mental status clear); fever resolves; ANC recovers above 500 and then 1,500; she can describe neutropenic precautions at home.'
    },
    ta: {
      gist: 'Draw **cultures** (blood from each line and a vein, urine, others as ordered) **before** the first antibiotic dose, then give **broad-spectrum IV antibiotics within 1 hour**; don’t delay antibiotics waiting for results. Monitor VS often for sepsis. **Neutropenic precautions**: **hand hygiene** (the most important), a private room, no one ill visiting, **no fresh flowers, plants or standing water**, dedicated equipment, a clean room. **Avoid** rectal temperatures, suppositories, enemas and unnecessary invasive procedures. Inspect the mouth, skin, perineum and lines every shift. Give **growth factors** as ordered (filgrastim, pegfilgrastim: bone pain is common).',
      cards: [
        { h: 'Teaching at home', b: ['Check temperature if you feel unwell and **call right away for 38 °C (100.4 °F) or higher**, chills or other signs of infection. Don’t take acetaminophen to hide a fever before calling.', 'Wash hands often; avoid crowds and sick people; no one changes your cat litter or birdcage without gloves (better: someone else does it).', 'Food safety: cook meat and eggs well; wash produce; avoid raw seafood and unpasteurized foods.', 'Good mouth care; a soft toothbrush; daily bathing; don’t share personal items.'] }
      ]
    },
    eo: {
      gist: 'Recheck temperature, VS, mental status and lactate; review culture results to narrow antibiotics; follow the daily ANC. She is ready for discharge when she is afebrile and her counts are recovering.'
    }
  }
},
{
  id: 'tls', group: 'Cancer', name: 'Tumor lysis syndrome', week: 2,
  short: 'Day 2 after starting chemo for leukemia: muscle cramps, tingling lips, little urine, K⁺ 6.4.',
  patient: '19-year-old man with acute lymphoblastic leukemia (very high WBC), on day 2 of induction chemotherapy. He has muscle cramps, tingling around his mouth, nausea, and only 120 mL of dark urine in the last 8 hours. Labs: K⁺ 6.4 mEq/L, phosphorus 7.2 mg/dL, calcium 6.9 mg/dL, uric acid 13 mg/dL, creatinine 2.1 mg/dL (baseline 0.8). His monitor shows tall, peaked T waves.',
  report: [
    'I’m calling about Mr. D., 19, with ALL on day 2 of induction. I suspect tumor lysis syndrome.',
    'He started with a very high white count. He is on IV fluids at 100 mL/hour and allopurinol.',
    'He has cramps, perioral tingling and only 120 mL of urine in 8 hours. K⁺ 6.4, phosphorus 7.2, calcium 6.9, uric acid 13, creatinine up from 0.8 to 2.1. Peaked T waves on the monitor.',
    'Please see him now. I need orders to treat the potassium and protect his heart (calcium, insulin with glucose, a binder), increase his IV fluids, possibly rasburicase, and a nephrology consult in case he needs dialysis. I’m keeping him on continuous cardiac monitoring.'
  ],
  steps: {
    rc: {
      gist: 'When treatment kills a **large number of cancer cells quickly**, their contents flood the blood: **potassium**, **phosphate** and **nucleic acids** (which become **uric acid**). Highest risk: **leukemias and lymphomas**, bulky or fast-growing tumors, high WBC, existing kidney problems, dehydration. It usually starts **within 1–5 days** of starting treatment. Cues: **hyperkalemia** (weakness, cramps, **dysrhythmias**, peaked T waves), **hyperphosphatemia** with **hypocalcemia** (tingling, muscle spasms, **tetany**, seizures), **hyperuricemia**, and **acute kidney injury** (falling urine output, rising creatinine).',
      terms: [
        { t: 'Why calcium falls', see: 'Tingling lips, cramps, positive Chvostek or Trousseau signs.', why: 'Excess **phosphate binds calcium**, and the calcium-phosphate crystals also damage the kidneys.', means: 'Seizure precautions; replace calcium only if symptomatic (as ordered).' },
        { t: 'Uric acid kidney injury', see: 'Dark, scant urine; rising creatinine.', why: 'Uric acid crystallizes in the renal tubules and blocks them.', means: 'Prevent with **hydration**, **allopurinol** (stops uric acid forming) or **rasburicase** (breaks it down).' }
      ]
    },
    ac: {
      gist: 'Day 2 of induction for leukemia with **K⁺ 6.4 and peaked T waves**, high phosphate, low calcium, high uric acid and **oliguria with rising creatinine** = **tumor lysis syndrome** with life-threatening **hyperkalemia** and **acute kidney injury**.'
    },
    ph: {
      gist: 'Priority: **risk for dysrhythmia and cardiac arrest from hyperkalemia** (decreased cardiac output). Then **acute kidney injury** (fluid and electrolyte imbalance), and **injury from hypocalcemia** (seizures, tetany).'
    },
    gs: {
      gist: 'Potassium falls below 5.0 with normal T waves; urine output is **at least 0.5 mL/kg/hour** (often goals are 100 mL/hour or more); creatinine returns toward baseline; no seizures or tetany.'
    },
    ta: {
      gist: 'Continuous **cardiac monitoring**. Treat **hyperkalemia** as ordered: IV **calcium** (protects the heart), **insulin with glucose** (moves K⁺ into cells), a potassium binder, loop diuretic, and **dialysis** if severe. **Aggressive IV hydration** to flush the kidneys (watch for fluid overload). **Rasburicase** or allopurinol for uric acid; phosphate binders. Strict **I&O** and daily weights; labs every few hours; seizure precautions.',
      cards: [
        { h: 'Prevention (before chemo starts)', b: ['IV hydration **before and during** treatment, starting 1–2 days ahead.', '**Allopurinol** (or rasburicase for highest risk) before chemotherapy.', 'Teach: drink 2–3 L a day if allowed, and report less urine, cramps, weakness, palpitations or numbness.'] }
      ]
    },
    eo: {
      gist: 'Recheck K⁺, phosphorus, calcium, uric acid and creatinine every 4–6 hours; check the ECG, hourly urine output, weight and lung sounds (fluid overload), and neuromuscular signs.'
    }
  }
},
{
  id: 'scc', group: 'Cancer', name: 'Spinal cord compression', week: 2,
  short: 'Prostate cancer with bone metastases: back pain for 2 weeks, now legs feel heavy.',
  patient: '70-year-old man with prostate cancer that has spread to his bones. He has had steadily worsening mid-back pain for 2 weeks that is worse lying down and when he coughs. Today his legs “feel heavy,” he stumbled twice, and he has numbness around his waist. He hasn’t urinated since this morning.',
  report: [
    'I’m calling about Mr. M., 70, with metastatic prostate cancer and signs of spinal cord compression.',
    'He has known bone metastases to the spine.',
    'Two weeks of worsening thoracic back pain, worse lying flat. Today he has new bilateral leg weakness (strength 3/5), a sensory level at the waist and urinary retention; a bladder scan shows 800 mL.',
    'This is an emergency. Please see him now and order an MRI of the whole spine and high-dose dexamethasone, and contact radiation oncology and neurosurgery. I’m keeping him on bed rest with spine precautions and will catheterize him per protocol.'
  ],
  steps: {
    rc: {
      gist: 'A tumor (usually a **metastasis to the spine**: from breast, **lung, prostate**, kidney cancer, myeloma or lymphoma) presses on the spinal cord. The **first symptom in most patients is back pain**, often worse lying down, with movement, coughing or straining. Later: **weakness** of the legs, **sensory loss** (numbness, tingling, a “level” of lost feeling), and **bowel and bladder dysfunction** (retention, incontinence, constipation).',
      terms: [
        { t: 'New back pain in a patient with cancer', see: 'Back pain that keeps getting worse, or wakes the person at night.', why: 'It may be the only early sign of a tumor growing into the spinal canal.', means: 'Report it **promptly**. Waiting until weakness appears risks **permanent paralysis**.' }
      ]
    },
    ac: {
      gist: 'Worsening back pain, **new leg weakness**, a **sensory level** and **urinary retention** in a man with spinal metastases = **spinal cord compression**, a neurological emergency: the outcome depends on how much function he has **when treatment starts**.'
    },
    ph: {
      gist: 'Priority: **risk for permanent paralysis** (protect neurological function: treatment within hours). Then **urinary retention**, **acute pain**, **risk for falls**, and skin breakdown from immobility.'
    },
    gs: {
      gist: 'Treatment begins within hours; leg strength and sensation stop declining (and may improve); his bladder is emptied and pain is controlled; no falls or pressure injuries.'
    },
    ta: {
      gist: 'Report immediately; prepare for an urgent **MRI**. Give **high-dose corticosteroids** (dexamethasone) as ordered to reduce swelling around the cord, then **radiation** and/or **surgery** (decompression). Neuro checks (strength, sensation, bowel and bladder) often; **fall precautions**; catheterize for retention; pain control; bowel program; turn and protect the skin; keep the spine aligned as ordered.',
      cards: [
        { h: 'Other oncologic emergencies at a glance', b: ['**Superior vena cava syndrome**: a tumor (lung cancer, lymphoma) blocks the SVC: **facial and neck swelling** (worse in the morning), puffy eyes, a **tight shirt collar**, distended neck and chest veins, arm swelling; late: stridor and confusion. Keep the head up, give oxygen, prepare for radiation or a stent.', '**Hypercalcemia**: bone metastases or tumor hormones: fatigue, weakness, **constipation**, confusion, **polyuria** and dehydration, ECG changes. Treat with **IV normal saline**, then diuretics, calcitonin, **bisphosphonates** (zoledronic acid) or denosumab; encourage walking.', '**SIADH**: a tumor (often **small cell lung cancer**) makes ADH: **water retention** with **dilutional hyponatremia** (headache, confusion, seizures), concentrated urine, weight gain. **Fluid restriction**, daily weights, seizure precautions; hypertonic saline or ADH blockers if severe.', '**Sepsis and DIC**: neutropenia allows infection; **DIC** = widespread clotting that uses up platelets and clotting factors, then **bleeding** (oozing from IV sites, petechiae, low platelets and fibrinogen, high D-dimer). Treat the cause; replace blood products.'] }
      ]
    },
    eo: {
      gist: 'Compare leg strength, sensation, bladder and bowel function and pain with the last check every few hours. Any decline goes to the provider immediately.'
    }
  }
}
);
