// "What goes here": every part each answer on the Clinical Reasoning Plan of Care needs, written for this site.
// Text answers: key → { len: how long, items: [parts] }. Single fields (client details, vital signs, F&E columns):
// key → one line. Systems: sys.<id>. Care plan parts: plan.<part>. Keys match data/careplan/form.js.
window.CP_INC = {
  // ----- client details (one line under each box) -----
  'f.student': 'Your full name as it appears on the class roster.',
  'f.instructor': 'Your clinical instructor’s name and credentials (e.g., J. Smith, MSN, RN).',
  'f.course': 'Course number and name (e.g., NRS 114).',
  'f.semester': 'Term and year (e.g., Fall 2026).',
  'f.initials': 'First and last initial only (R.M.). Never the full name.',
  'f.room': 'The room number on the unit.',
  'f.age': 'Age in years. It sets the expected Erikson stage below.',
  'f.language': 'The language they want for health information. Say if an interpreter is needed.',
  'f.gender': 'How the patient identifies and wants to be addressed, including pronouns if shared.',
  'f.sex': 'Male or female, as assigned at birth. Some lab ranges depend on it.',
  'f.marital': 'Single, married, partnered, divorced, separated or widowed.',
  'f.religion': 'Faith or none, plus any practice that affects care (diet, blood products, prayer times).',
  'f.occupation': 'Current or former job (retired bus driver). Note work exposures if they matter.',
  'f.education': 'Highest level finished. It helps you pitch your teaching.',
  'f.allergies': 'Every drug, food and latex allergy with the reaction (penicillin: hives), or NKDA.',
  'f.housing': 'House or apartment, floor and stairs, lives alone or with whom; shelter or unhoused if so.',
  support: { len: 'One row per person (one or two is typical).', items: [
    'Name: initials or first name only',
    'Relationship to the patient (daughter, spouse, friend, neighbor)',
    'Who they lean on day to day and who will help after discharge',
    'If no one: write that, because it changes discharge planning'] },

  // ----- I. Data Collection -----
  cc: { len: '3–6 sentences told in order, like a short story.', items: [
    'Chief complaint: why they came in, in the patient’s own words (in quotes)',
    'When it started and how it changed (onset, duration, getting worse or better)',
    'Details of the main symptom (OLDCARTS: onset, location, duration, character, aggravating and relieving factors, radiation, timing, severity)',
    'Anything they tried at home first',
    'What the ED or admission workup found (the key vital signs, labs or imaging)',
    'The admitting diagnosis',
    'Treatment started since admission',
    'Day of the stay (hospital day 2, or post-op day 1 after surgery)'] },
  social: { len: 'A short paragraph or a list.', items: [
    'Who they live with and who supports them',
    'Home setup (stairs, alone or not), if not already in Type of Housing',
    'Work now or before',
    'Tobacco: type, amount and years (pack-years), or the year they quit',
    'Alcohol: type, how much and how often; time of the last drink if they drink heavily (withdrawal risk)',
    'Recreational or nonprescribed drugs',
    'Diet, exercise and sleep habits',
    'Baseline function: independent with daily activities? Uses a cane or walker?',
    'Culture, faith or values that affect care'] },
  pmh: { len: 'A list.', items: [
    'Every chronic and past illness, with the year diagnosed if known',
    'How well controlled each one is (home BP, last A1C, recent flare-ups)',
    'Mental health diagnoses',
    'Past hospitalizations and why',
    'Relevant immunizations (flu, pneumococcal, tetanus) if they matter for this admission',
    'Full medical terms, not abbreviations your instructor doesn’t accept'] },
  psh: { len: 'A list, or “None.”', items: [
    'Each surgery with the year',
    'Any problems with anesthesia (nausea, malignant hyperthermia, difficult airway)',
    'Implanted devices (pacemaker, joint replacement, stents, ports)',
    'Write “None” if there are none'] },
  erik: { len: 'One line.', items: [
    'The stage that fits their age: its age range, name and conflict (Older adult, 65+: Integrity vs despair)'] },
  'erik.a': { len: '2–3 sentences.', items: [
    'The stage the patient is actually in, based on what you saw and heard',
    'Whether that stage is achieved or not',
    'If it doesn’t match the expected stage, why (illness, loss, mental health, life events)'] },
  'erik.b': { len: '3–5 behaviors, as a list or sentences.', items: [
    'Specific things the patient did or said (quote them when you can)',
    'Each one tied to the stage’s task (talks about his life with pride → integrity)',
    'Any behaviors that show the stage is NOT achieved',
    'Your own observations, not the chart'] },
  meds: { len: 'One row per drug, every drug they take.', items: [
    'Home meds and hospital meds, scheduled and PRN; mark any that are held and why',
    'Generic name (brand in parentheses if you like)',
    'Dose, route and frequency; for a PRN, the reason it’s given (PRN for pain 4–6/10)',
    'Drug class',
    'Treats: the disease or problem it’s for in THIS patient',
    'What you check before or after giving it (a vital sign, a lab, a side effect)'] },
  pmhmeds: { len: 'One line per disease, plus any notes.', items: [
    'Each disease in the PMH paired with the drug or drugs that treat it',
    'Any drug with no matching disease (preventive, like DVT prophylaxis, or a new problem) and why it’s ordered',
    'Any disease with no drug (diet-controlled, resolved, untreated) and why'] },

  // ----- SBAR you receive -----
  'sbar1.S': { items: ['Patient initials, age and room', 'Admitting diagnosis and day of the stay', 'The main concern right now, in one sentence'] },
  'sbar1.B': { items: ['Relevant medical history', 'Allergies with reactions', 'Code status and any isolation', 'What has happened during the stay: procedures, treatments, key results', 'Current oxygen, IV fluids, lines, diet and activity'] },
  'sbar1.A': { items: ['The latest vital signs and when they were taken', 'Abnormal findings by system', 'Abnormal labs or test results', 'Pain and mental status', 'The nurse’s read: stable, improving or getting worse'] },
  'sbar1.R': { items: ['What needs to happen this shift (meds due, tests, consults)', 'Results still pending', 'What to watch and when to call the provider', 'Safety needs (fall, aspiration or seizure precautions)'] },
  rel1: { len: 'A list of findings with their values.', items: [
    'Each relevant finding WITH its value (SpO₂ 91% on 2 L, not “low oxygen”)',
    'Abnormal vital signs',
    'Abnormal assessment findings',
    'Abnormal labs and diagnostic results',
    'Risk factors (age, other illnesses, medications)',
    'Grouped by the problem they point to'] },
  rat1: { len: 'One or two sentences per finding.', items: [
    'For each finding: what it means in the body (the physiology)',
    'How it connects to the medical problem or to a risk',
    'What could happen if no one acts on it',
    'An in-text citation (Author, year) for anything taken from a source'] },

  // ----- Start Client Care -----
  'vs.t': 'Number, unit and route (oral, temporal, tympanic, axillary): 100.9 °F oral.',
  'vs.p': 'Rate, rhythm (regular or irregular) and site (radial or apical): 104 regular, radial.',
  'vs.r': 'Rate plus depth and effort (unlabored, shallow, labored): 24, slightly labored.',
  'vs.bp': 'Systolic/diastolic, arm and position: 138/82 right arm, sitting.',
  'vs.spo2': 'Percent plus the device and flow: 91% on 2 L nasal cannula, or 96% on room air.',
  'vs.pain': 'Scale used (0–10, FACES, PAINAD), score, location, quality, and the patient’s goal.',
  vsrel1: { len: 'A list.', items: [
    'Each abnormal vital sign with its value',
    'Normal values that still matter for this patient (BP before giving an antihypertensive, temp in someone with an infection)',
    'Changes from the last set or from their baseline',
    'Values that go together (fever with a fast heart rate and fast breathing)'] },
  vsrat1: { len: 'One or two sentences per vital sign.', items: [
    'The body’s reason for each abnormal value',
    'How it ties to the medical problem',
    'The risk it signals (sepsis, hypoxia, bleeding, dehydration)',
    'An in-text citation'] },
  'sys.gen': { items: ['Level of consciousness and how they look (comfortable, tired, in distress)', 'Position, grooming and hygiene', 'Speech, mood and behavior', 'Build, and height, weight or BMI if known', 'Equipment attached (oxygen, IV, monitor, drains, Foley)', 'Isolation or precautions in place'] },
  'sys.neuro': { items: ['Level of consciousness and orientation (×4: person, place, time, situation)', 'Pupils (PERRLA and size)', 'Speech: clear, slurred, aphasic', 'Follows commands; strength and equal movement in all 4 limbs', 'Sensation: numbness or tingling', 'GCS or NIH score if your unit uses one', 'Any new confusion, agitation or drowsiness'] },
  'sys.resp': { items: ['Rate, rhythm, depth and effort (accessory muscles, nasal flaring)', 'Breath sounds in each lobe, front and back: clear, crackles, wheezes, rhonchi, diminished', 'Cough (strong or weak) and sputum (color, amount, thickness)', 'SpO₂ with the oxygen device and flow', 'Chest shape and expansion', 'Incentive spirometer volume if used'] },
  'sys.cardiac': { items: ['Apical rate and rhythm', 'Heart sounds: S1 S2, murmurs, extra sounds', 'Peripheral pulses (radial, pedal) graded 0–4+, equal or not', 'Capillary refill (under 3 seconds)', 'Edema: where and how many plus', 'Neck veins (JVD)', 'Telemetry rhythm if on a monitor', 'Chest pain'] },
  'sys.gi': { items: ['Abdomen shape: flat, round, distended', 'Bowel sounds in all 4 quadrants', 'Soft or firm, tenderness, distension', 'Last bowel movement (date and what it was like) and passing gas', 'Nausea or vomiting', 'Diet ordered, how much they ate (%) and appetite', 'Swallowing problems; tubes or ostomy'] },
  'sys.gu': { items: ['How they void: on their own, Foley (size), straight cath, dialysis', 'Urine color, clarity and odor', 'Output amount over a stated time (mL per hour or per shift)', 'Intake and output totals', 'Symptoms: burning, urgency, frequency, retention', 'Bladder distension or bladder scan result'] },
  'sys.msk': { items: ['Strength in each limb (0–5)', 'Range of motion', 'Gait and any assistive device', 'How much help they need to move and with daily activities (independent, standby, 1 or 2 assist)', 'Joint swelling, deformity or pain', 'Fall risk score and precautions in place', 'Casts, splints or traction'] },
  'sys.skin': { items: ['Color, temperature, moisture and turgor', 'Wounds and incisions: location, size, drainage, edges together or not', 'Pressure injuries: location and stage (check sacrum and heels)', 'Bruising and rashes', 'IV site: location, gauge, date, patent, any redness or swelling', 'Braden score'] },
  asrel1: { len: 'A list of findings.', items: [
    'Each abnormal assessment finding, with the system and specifics (crackles right lower lobe)',
    'Findings that match the medical problem',
    'Findings that point to a new risk (weakness → falls, poor intake → skin breakdown)'] },
  asrat1: { len: 'One or two sentences per finding.', items: [
    'What each finding means physiologically',
    'How it ties to the medical problem or the risk',
    'An in-text citation'] },

  // ----- II. Clinical Reasoning -----
  q1: { len: 'One line.', items: [
    'The medical diagnosis, as specific as you can (type, location, severity: community-acquired pneumonia, right lower lobe)'] },
  q2: { len: '4–8 sentences.', items: [
    'What causes the disease (bacteria, a clot, a blockage, an autoimmune process…)',
    'What happens in the body, step by step',
    'How that produces YOUR patient’s signs, symptoms, labs and imaging',
    'This patient’s risk factors for it',
    'In-text citations'] },
  q3: { len: 'A few words, plus one sentence of why.', items: [
    'The priority area (oxygenation, perfusion, infection, fluid balance, pain, safety)',
    'Why it comes first: consider current severity, ABCs, safety and time sensitivity; an imminent severe risk may outrank a less urgent actual problem'] },
  q4: { len: 'One sentence.', items: [
    'The NANDA-I label, written exactly as in the book',
    '“Related to”: the cause nursing can change (not the medical diagnosis)',
    '“As evidenced by”: 2–4 of your patient’s real cues with values',
    'For a risk diagnosis: “Risk for ___ related to [risk factors]”, with no “as evidenced by”',
    'The same statement as problem 1 on your care plan'] },
  q5: { len: '4–6 interventions, as a list.', items: [
    'At least one assessment, with how often (SpO₂ and lung sounds every 2 hours)',
    'Things you will do (positioning, oxygen, fluids, giving meds as ordered)',
    'Teaching',
    'Collaboration (respiratory therapy, PT, dietitian, provider)',
    'Specific: what, how much and how often'] },
  q6: { len: 'One or two sentences.', items: [
    'The specific complication, named (sepsis, respiratory failure, hemorrhage, PE, stroke, DKA)',
    'Why this patient is at risk for it'] },
  q7: { len: 'A short list or paragraph.', items: [
    'The early signs you’d look for, with numbers (SBP under 90, RR over 28, new confusion, urine under 30 mL/hr)',
    'How often you will check',
    'What you would do right away',
    'Who you would call (rapid response team, provider) and how (SBAR)'] },

  // ----- Medical Management -----
  orders: { len: 'One row per order that treats the main problem (usually 4–8).', items: [
    'The order written in full: drug, dose, route and frequency, or the treatment with its limits (O₂ 2–4 L to keep SpO₂ 92% or above)',
    'Cover the types: meds, IV fluids, oxygen, labs and tests, diet, activity, consults, nursing orders (I&O, daily weights)',
    'Rationale: how the order works AND why this patient needs it',
    'Expected outcome: a measurable result with a time frame (fever gone within 48–72 hours)',
    'Cite your drug guide or textbook for the rationales'] },
  rad: { len: 'One line per test.', items: [
    'Each test by name, with the date (chest x-ray, CT, ultrasound, ECG, echo, cultures)',
    'The result in your own words: what was found and where',
    'Tests still pending',
    '“None done” if there were none'] },
  radrel: { len: '2–3 sentences.', items: [
    'Whether the result confirms or rules out the diagnosis',
    'Which assessment findings it explains',
    'Whether it changes what you monitor or your priorities'] },

  // ----- Labs -----
  labs: { len: 'Fill only the rows that were drawn.', items: [
    'Normal range: from your facility’s report if it differs',
    'Initial value: the first result this admission, with units',
    'Current value: the most recent result, with units',
    'Clinical significance: why it’s high or low in THIS patient (the disease, a drug, intake)',
    'Trend: improving, worsening or stable since the initial value'] },
  labcomp: { len: 'One line per abnormal lab.', items: [
    'Each abnormal lab with the complication it can lead to',
    'The signs you’d watch for',
    'Whether any value was critical, and that it was reported'] },

  // ----- Fluid & Electrolytes (one line per column) -----
  fe: { len: 'Two labs, every column filled.', items: [
    'Pick the two abnormal labs that matter most for this patient’s care',
    'Every column below needs an answer; each box says what goes in it'] },
  'fe.lab': 'Lab: its name. Value: the result with units. High/Low: which one.',
  'fe.rel': 'What the body uses it for, and why it matters for THIS patient’s diagnosis or meds.',
  'fe.norm': 'Normal value: your facility’s range. Critical value: from your lab’s critical list.',
  'fe.cause': 'The specific cause in this patient (the disease, a drug such as a diuretic, vomiting, poor intake).',
  'fe.tx': 'The verified treatment order and its parameters. Clearly label any proposed treatment; do not write it as ordered or given.',
  'fe.nsg': 'What you assess (cardiac monitor, neuro checks, I&O), what you do (safety, giving replacement safely), what you teach, when you’d notify; cite it.',

  // ----- III. Evaluation -----
  vsrel2: { len: 'A list.', items: [
    'Each vital sign now compared with the first set (before → after)',
    'Which improved, which got worse, which stayed the same',
    'Any that are still abnormal'] },
  vsrat2: { len: 'One or two sentences per change.', items: [
    'What caused each change (which intervention or treatment, or the illness getting worse)',
    'In-text citations'] },
  sys2: { len: 'Reassess every system.', items: [
    'The same parts as your first assessment for each system',
    'What changed since then, better or worse',
    'Whether the change shows the plan is working'] },
  e1: { len: '1–2 sentences.', items: [
    'Improved as expected, partly improved, not improved, or worse',
    'Compared with what you expected and with your goals'] },
  e2: { len: 'A list of before → after data.', items: [
    'Vital signs, assessment findings, labs and what the patient said or did, before and after',
    'Each one linked to the goal it shows'] },
  e3: { len: 'A short paragraph or list.', items: [
    'The current priority (the same or a new one) and why',
    'Interventions to continue, change or add',
    'What comes next: activity, nutrition, teaching, discharge planning, referrals'] },

  // ----- Teamwork & Collaboration/Safety -----
  patho: 'The medical diagnosis or disease the whole form is about (pneumonia).',
  'sbar2.S': { items: ['Your name, role and unit', 'Patient initials and room', 'Why you’re calling, in one sentence: you need a transfer order, and to where'] },
  'sbar2.B': { items: ['Admitting diagnosis and day of the stay', 'Relevant history, allergies, code status', 'Main treatments given'] },
  'sbar2.A': { items: ['The most recent vital signs and when they were taken', 'The key findings or changes that justify the transfer', 'Your read on the situation (improving and stable, or getting worse)'] },
  'sbar2.R': { items: ['Exactly what you’re asking for: the transfer order, the unit and the level of monitoring', 'Any other orders you need (labs, meds, consults)', 'When it should happen', 'Read back any verbal or phone order'] },
  'sbar3.S': { items: ['Patient initials, room and diagnosis', 'How they are right now'] },
  'sbar3.B': { items: ['History, allergies, code status, isolation', 'What happened this shift: meds given with times, procedures, tests'] },
  'sbar3.A': { items: ['The last vital signs and when', 'Changes in your head-to-toe assessment', 'Lines, drains and oxygen', 'Intake and output for the shift', 'Pain and the time of the last PRN dose'] },
  'sbar3.R': { items: ['What’s due next: meds, labs, dressing changes', 'Results still pending', 'What to watch for and the numbers that mean calling the provider', 'The goals for the next shift', 'Safety precautions and family or teaching needs'] },

  // ----- QSEN questions -----
  pcc1: { len: 'A short paragraph with specific strategies.', items: [
    'Teach-back after each explanation',
    'Plain words and short sessions; materials at the right reading level',
    'An interpreter if needed; hearing aids and glasses in place',
    'Including family, with the patient’s permission',
    'Dealing with barriers first (pain, anxiety, fatigue)',
    'How you’ll know it worked (they explain it back or show you)'] },
  pcc2: { len: 'A short paragraph, specific to this patient.', items: [
    'Ask about their preferences, values, culture and religion',
    'Examples from THIS patient',
    'How you’ll adjust care: schedule, diet, routines, who joins teaching',
    'Shared decision making: they choose among options'] },
  pcc3: { len: 'A short paragraph.', items: [
    'Goals you set together',
    'Self-care they do now in the hospital (tracking their IS, fluids or walks)',
    'Teaching for home: meds, warning signs, when to call, follow-up visits',
    'Resources or referrals for after discharge',
    'Checking understanding with teach-back'] },
  team: { len: 'A few sentences.', items: [
    'You don’t perform the skill alone',
    'You tell your clinical instructor and the patient’s nurse',
    'You review the facility’s policy and procedure and your skills resources',
    'You do it with your instructor supervising, or watch it first',
    'You stay within a student’s scope; patient safety comes first'] },
  ebp: { len: 'A short paragraph or list.', items: [
    'Facility policies and procedures',
    'A clinical practice guideline for this patient’s diagnosis, named',
    'Drug and clinical references',
    'Research databases (CINAHL, PubMed, Cochrane)',
    'People: the nurse educator, charge nurse, pharmacist, specialty nurses, respiratory therapist',
    'How you’d use them for this patient'] },
  safety: { len: 'A short paragraph in step order.', items: [
    'Stop before giving it',
    'Recheck the rights of medication administration against the order and MAR, do your 3 checks, and scan',
    'Get the correct medication and dose from pharmacy',
    'Tell your instructor and the nurse; notify pharmacy',
    'File a near-miss safety report (a non-punitive system)',
    'A system fix to suggest: tall-man lettering, separate storage, alerts'] },
  informatics: { len: 'A short list.', items: [
    'The specific databases at your site, named (Lexicomp, Micromedex, UpToDate, Lippincott Procedures, Elsevier Clinical Skills, CINAHL)',
    'What you’d look up in each: a drug, a disease, a procedure',
    'References built into the EHR'] },

  // ----- Care plan (page 13) -----
  'plan.stmt': { len: 'One sentence.', items: [
    'The NANDA-I label, exactly as in the book',
    '“Related to”: a cause nursing can change, not the medical diagnosis',
    '“As evidenced by”: 2–4 of your patient’s real cues with values',
    'The same as your answer to question 4 (for problem 1)'] },
  'plan.stmt.risk': { len: 'One sentence.', items: [
    '“Risk for” + the NANDA-I label, exactly as in the book',
    '“Related to”: the risk factors your patient has',
    'No “as evidenced by”: there are no signs yet'] },
  'plan.stmt.promo': { len: 'One sentence.', items: [
    '“Readiness for enhanced” + the NANDA-I label',
    '“As evidenced by”: what the patient says or does that shows they want to improve'] },
  'plan.stg': { len: '1–2 goals.', items: [
    'About the patient, not the nurse (“The patient will…” or “The patient’s SpO₂ stays…”)',
    'One measurable action or result you can see, hear or count',
    'A number or criterion (SpO₂ 92% or higher, pain 3/10 or less)',
    'A short time frame: by the end of your shift, or within hours to a few days',
    'Realistic, and it answers this problem'] },
  'plan.ltg': { len: '1 goal.', items: [
    'About the patient, not the nurse',
    'Measurable, with a number or criterion',
    'A longer time frame: by discharge or over weeks',
    'Shows the problem resolved or controlled'] },
  'plan.iv': { len: 'Usually 5–8 interventions.', items: [
    'Start with an assessment and say how often',
    'Then what you do, teach and coordinate',
    'Specific: what, how much, how often',
    'Each one aimed at the “related to” cause or at the cues',
    'Collaborative ones (giving ordered meds) labeled “as ordered”',
    'Rationale: why it works (the science), linked to this patient, in your own words',
    'An in-text citation for every rationale'] },
  'plan.ev': { len: '1–3 sentences per goal.', items: [
    'Goal met, partially met or not met',
    'The data that proves it, compared with the goal’s number or criterion',
    'The plan: continue, revise (what changes?) or resolve',
    'When you evaluated it (time or date)'] }
};
