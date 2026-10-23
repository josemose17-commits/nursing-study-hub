// Full explanations for ch 25 questions. Format: see explain/22.js.
window.EXPLAIN = window.EXPLAIN || {};
Object.assign(window.EXPLAIN, {
  '25|n|0': {
    ask: 'Which actions stop the three ways hospital pneumonia starts: aspiration, collapsed alveoli and germs carried in?',
    cues: ['Older adult in hospital → weak cough, more time in bed, aspiration risk'],
    r: {
      0: 'Correct. Deep breaths with the spirometer reopen collapsed alveoli (atelectasis), where bacteria would otherwise settle.',
      1: 'Correct. Sitting up during and after meals uses gravity to keep food and stomach contents out of the airway.',
      2: 'Correct. Moving deepens breathing, loosens secretions and prevents the pooling that happens in bed.',
      3: 'Correct. Plaque bacteria are the ones that get aspirated. Cleaner mouth → fewer bacteria reach the lungs.',
      4: 'Incorrect. Lying flat lets the bases collapse and makes aspiration easier. Lungs need expansion, not rest.',
      5: 'Correct. Hands carry organisms between clients; hand hygiene stops cross-infection.'
    },
    phys: 'Immobility and shallow breathing → alveoli collapse and secretions pool → bacteria settle. Weak swallow + lying flat → oral bacteria and food are aspirated. Dirty hands → organisms spread between clients.',
    rule: 'Prevent pneumonia: spirometer, head up for meals, early mobility, oral care, hand hygiene.'
  },
  '25|n|1': {
    ask: 'Which statements show the client knows the safety rules for each TB drug and will finish therapy?',
    cues: ['RIPE: rifampin, isoniazid, pyrazinamide, ethambutol', 'Each drug has its own signature effect'],
    r: {
      0: 'Correct. Rifampin is a red-orange dye-like drug; urine, sweat and tears turn orange. Harmless, but it stains soft contact lenses.',
      1: 'Correct. Isoniazid depletes vitamin B6, which nerves need. Pyridoxine prevents the numbness and tingling of peripheral neuropathy.',
      2: 'Incorrect. The cough settles in weeks but TB bacteria survive for months. Stopping early lets the survivors regrow and become drug-resistant. Therapy lasts at least 6 months.',
      3: 'Correct. Isoniazid, rifampin and pyrazinamide are all hard on the liver. Alcohol adds to that damage.',
      4: 'Correct. Ethambutol can inflame the optic nerve; the first sign is often trouble telling red from green.',
      5: 'Incorrect. Rifampin speeds up liver enzymes that break down hormones, so birth control pills can fail. A backup method is needed.'
    },
    phys: 'TB grows slowly and hides inside cells, so it needs several drugs for months. Each drug has a signature: rifampin colors fluids and induces liver enzymes; isoniazid depletes B6 (neuropathy) and harms the liver; pyrazinamide raises uric acid; ethambutol affects the optic nerve.',
    rule: 'TB therapy: take every dose for the full course, no alcohol, B6 with INH, report vision change, jaundice or numbness; orange fluids are expected; rifampin weakens birth control.'
  },
  '25|n|2': {
    ask: 'Is this client in sepsis — and what must happen right now rather than at the scheduled time?',
    cues: ['BP 118 → 96 → 84 while HR and RR climb', 'SpO₂ falling despite more oxygen', 'New confusion and urine 20 mL/hr', 'Antibiotic not yet given', 'Temperature falling = the distractor'],
    r: {
      0: 'Unsafe. Each hour of delay in antibiotics during septic shock raises the risk of death. One hour is too long to wait.',
      1: 'Correct. Hypotension, confusion, low urine output and rising oxygen needs are organ dysfunction from infection. Sepsis care is fluids, lactate, cultures and antibiotics now.',
      2: 'Incorrect. The temperature dropping while BP, mental status and urine output all worsen is not improvement — the fever is the wrong thing to watch.',
      3: 'Incorrect. A confused, hypotensive client needs IV fluids; oral fluids are too slow and risk aspiration.'
    },
    phys: 'Infection → body-wide inflammation → blood vessels dilate and leak → BP falls → less blood to brain (confusion) and kidneys (low urine) → cells switch to anaerobic metabolism → lactate rises → shock.',
    rule: 'Recognize sepsis by perfusion — BP, mental status, urine output, lactate — not by the fever.'
  },
  '25|n|3': {
    ask: 'Which findings are drug toxicity to report, and which are normal or expected?',
    cues: ['ALT 220 (normal 4–36)', 'Uric acid 9.8 (high)', 'Red-green confusion', 'Tingling feet', 'Creatinine normal; orange urine expected'],
    r: {
      0: 'Correct. ALT many times normal means liver injury — isoniazid, rifampin and pyrazinamide can all cause it. Report before the next dose.',
      1: 'Correct. Pyrazinamide blocks uric acid excretion; a high level risks gout.',
      2: 'Normal. Creatinine 0.9 shows the kidneys are fine.',
      3: 'Correct. Trouble telling red from green is the first sign of ethambutol optic neuritis. Caught early, it can reverse.',
      4: 'Correct. Tingling feet is isoniazid peripheral neuropathy from B6 depletion.',
      5: 'Expected. Rifampin turns body fluids orange; it is harmless.'
    },
    phys: 'Liver: INH, rifampin, pyrazinamide → hepatotoxicity (ALT ↑). Pyrazinamide → uric acid retained. Ethambutol → optic nerve inflammation. INH → B6 depleted → nerve damage. Rifampin → orange pigment.',
    rule: 'Link each TB finding to its drug: ALT ↑ (INH/RIF/PZA), uric acid ↑ (PZA), color vision (EMB), neuropathy (INH), orange fluids (RIF, expected).'
  },
  '25|n|4': {
    ask: 'Which room keeps airborne TB particles from leaving?',
    cues: ['Suspected active pulmonary TB → airborne precautions'],
    r: {
      0: 'A roommate would breathe the same air — direct exposure.',
      1: 'An open door lets droplet nuclei drift into the hallway. Airborne rooms keep the door closed.',
      2: 'Correct. A negative-pressure room pulls air in and vents it safely outside, so particles cannot escape. The anteroom adds a buffer.',
      3: 'Being near the desk helps observation but does nothing to contain air.'
    },
    phys: 'TB spreads in droplet nuclei — tiny particles that stay in the air for hours and drift on currents. Negative pressure makes air flow into the room, never out to the hall.',
    rule: 'Airborne = negative-pressure room, door closed, N95 for staff, surgical mask on the client outside the room.'
  },
  '25|n|5': {
    ask: 'In what order do you put on PPE so nothing clean gets contaminated and the respirator seals?',
    cues: ['Airborne room → N95 needed', 'Gloves always last'],
    r: {
      0: 'First: clean hands before touching clean PPE, so you do not contaminate it.',
      1: 'Second: the gown goes on first because it covers the most; tie it at the neck and waist.',
      3: 'Fourth: goggles or a face shield go over the respirator so they do not break its seal.',
      4: 'Last: gloves go on last and pull over the gown cuffs, closing the gap at the wrists.'
    },
    phys: 'Clean hands first, then items that cover the most (gown), then the respirator so its seal is checked before eye protection sits over it, then gloves pulled over the gown cuffs to close the gap.',
    rule: 'Donning: hand hygiene → gown → N95 (seal check) → goggles/face shield → gloves.'
  },
  '25|n|6': {
    ask: 'Does each organism spread on tiny particles that hang in the air (airborne) or large droplets that fall within about 6 feet (droplet)?',
    cues: ['Airborne: TB, measles, varicella (MTV)', 'Droplet: influenza, pertussis, many respiratory viruses'],
    rows: {
      0: 'Airborne. TB travels in droplet nuclei that stay suspended — negative-pressure room and N95.',
      1: 'Droplet. Influenza spreads on large droplets that fall within about 6 feet — surgical mask within that distance.',
      2: 'Airborne. Measles is one of the most contagious diseases; the virus stays in the air for hours.',
      3: 'Droplet. Pertussis spreads on large respiratory droplets from coughing.',
      4: 'Airborne (plus contact). Varicella spreads through the air and from the fluid in its blisters.'
    },
    phys: 'Small particles (<5 microns) dry into droplet nuclei that float and travel far. Large droplets are heavy and fall quickly, so they only reach people nearby.',
    rule: 'Airborne = “MTV”: Measles, TB, Varicella. Most other respiratory infections = droplet.'
  },
  '25|n|7': {
    ask: 'Name the condition, pick what treats it now, then choose what shows perfusion is returning.',
    cues: ['Pneumonia + new confusion', 'BP 88/52, RR 30', 'SpO₂ 87% on 4 L, crackles', 'Urine 15 mL/hr'],
    cond: {
      1: 'Incorrect. Dehydration can lower BP but would not cause hypoxemia and crackles at the base.',
      2: 'Incorrect. The confusion is explained by low oxygen and low perfusion, and there are no focal neuro signs.',
      3: 'Incorrect. No wheeze or asthma history; crackles point to pneumonia.'
    },
    act: {
      0: 'Correct. Draw cultures, then give antibiotics without delay — each hour of delay in septic shock raises mortality.',
      1: 'Correct. A fluid bolus refills the dilated, leaky vessels and restores perfusion.',
      2: 'Incorrect. Restricting fluids worsens the low blood pressure and kidney perfusion.',
      3: 'Incorrect. The confusion is from hypoxia and hypotension; a sedative hides it and depresses breathing.',
      4: 'Incorrect. Lying flat reduces lung expansion and worsens oxygenation; keep the head up.'
    },
    mon: {
      0: 'Correct. MAP ≥65 and urine ≥0.5 mL/kg/hr show organs are getting blood again.',
      1: 'Correct. Lactate falling means tissues are getting enough oxygen again.',
      2: 'Incorrect. A1C reflects 3 months of glucose — not acute perfusion.',
      3: 'Incorrect. Deep tendon reflexes test nerves and muscles; they do not show whether organs are perfused.',
      4: 'Incorrect. Pupils are a neuro check; the sepsis targets are MAP, urine output and lactate.'
    },
    phys: 'Lung infection → body-wide inflammation → vessels dilate and leak → low BP → brain (confusion) and kidneys (oliguria) underperfused → anaerobic metabolism → lactate ↑.',
    rule: 'Sepsis bundle: cultures, antibiotics, fluids, lactate; evaluate with MAP, urine output and lactate.'
  },
  '25|n|8': {
    ask: 'When must oseltamivir start, how does it work, and does it replace the vaccine?',
    blanks: {
      1: '48 hours. The virus copies itself fastest in the first two days; after that, most of the damage is done and the drug helps little.',
      3: 'Viral release from infected cells. Oseltamivir blocks neuraminidase, the enzyme that cuts new virus particles free from the cell, so they cannot spread. It does nothing to bacteria or fungi.',
      5: 'Does not replace. It shortens illness by about a day; only the annual vaccine prevents infection.'
    },
    phys: 'Influenza enters a cell → copies itself → new virions stay stuck to the cell surface until neuraminidase cuts them loose. Oseltamivir blocks neuraminidase → new virions stay stuck → spread slows.',
    rule: 'Oseltamivir: start within 48 hours, shortens flu, does not treat bacteria, does not replace the flu vaccine.'
  },
  '25|c|0': {
    ask: 'Which client shows signs of sepsis — instability and a change in mental status?',
    cues: ['New confusion + RR 30 + BP 88/54'],
    r: {
      0: 'A low fever with SpO₂ 93% on room air is stable.',
      1: 'A teaching need — explain when isolation ends — but not urgent.',
      2: 'Correct. New confusion, fast breathing and low BP are signs of sepsis and poor perfusion.',
      3: 'Muscle aches are a comfort need and expected with influenza.'
    },
    phys: 'Infection spreading → inflammation dilates vessels → BP falls → the brain gets less blood (confusion) → breathing speeds up to compensate for acid buildup.',
    rule: 'Instability and a change in mental status beat stable infection, teaching and comfort needs.'
  },
  '25|c|1': {
    ask: 'Which drug treats isoniazid’s nerve side effect?',
    cues: ['Isoniazid + numb feet = peripheral neuropathy'],
    r: {
      0: 'Correct. Isoniazid depletes vitamin B6 (pyridoxine). Replacing B6 protects the nerves.',
      1: 'Vitamin K reverses warfarin; it has nothing to do with neuropathy.',
      2: 'More isoniazid would deepen B6 depletion and worsen the neuropathy.',
      3: 'Stopping all TB drugs would allow relapse and resistance. The fix is B6 while therapy continues.'
    },
    phys: 'Isoniazid binds pyridoxine and increases its excretion → nerves lack B6 → peripheral neuropathy (numbness, tingling in hands and feet).',
    rule: 'INH → give B6 (pyridoxine) to prevent or treat neuropathy.'
  },
  '25|c|2': {
    ask: 'Is orange urine on rifampin harmful or expected?',
    cues: ['Rifampin', 'Orange urine'],
    r: {
      0: 'Not necessary — orange fluids are an expected, harmless effect. Stopping would risk relapse and resistance.',
      1: 'Correct. Rifampin colors urine, sweat and tears orange and can permanently stain soft contact lenses.',
      2: 'Incorrect. The color is the drug itself, not blood or kidney damage.',
      3: 'Irrelevant. Fluid intake does not change the color effect.'
    },
    phys: 'Rifampin is a red-orange pigmented molecule excreted in body fluids, so it tints urine, sweat, tears and saliva.',
    rule: 'Rifampin: orange fluids expected, stains contacts, lowers birth-control effectiveness, can harm the liver.'
  },
  '25|c|3': {
    ask: 'Which actions make up airborne precautions for active TB?',
    cues: ['Active pulmonary TB → airborne'],
    r: {
      0: 'Correct. A negative-pressure room keeps droplet nuclei inside.',
      1: 'Correct. N95 respirators filter the tiny particles; a surgical mask does not seal well enough for staff.',
      2: 'Correct. Outside the room, a surgical mask on the client traps particles at the source.',
      3: 'Incorrect. An open door breaks the negative pressure and lets air escape into the hall.',
      4: 'Correct. Covering coughs reduces the particles released.'
    },
    phys: 'TB bacteria travel in droplet nuclei that hang in the air for hours. Containing the air (negative pressure, closed door), filtering it (N95) and trapping it at the source (client mask) breaks transmission.',
    rule: 'Airborne precautions: negative-pressure room, door closed, staff N95, client surgical mask for transport.'
  },
  '25|c|4': {
    ask: 'What does a high WBC with a left shift mean?',
    cues: ['WBC 18,000 (normal 5,000–10,000)', '“Left shift” = more immature neutrophils (bands)'],
    r: {
      0: 'Viral infections usually raise lymphocytes, not neutrophils with bands. A left shift points to bacteria.',
      1: 'Correct. The marrow is releasing neutrophils so fast that immature bands enter the blood — an active bacterial infection.',
      2: 'Anemia is about red cells, not white cells.',
      3: 'Allergy raises eosinophils, not neutrophils with bands.'
    },
    phys: 'Bacterial infection → the marrow is signaled to release neutrophils → it empties its mature supply and starts releasing young bands → the differential “shifts left.”',
    rule: 'High WBC + left shift (↑ bands) = acute bacterial infection.'
  },
  '25|c|5': {
    ask: 'Which statement about oseltamivir is accurate?',
    cues: ['Antiviral', 'Timing matters'],
    r: {
      0: 'Correct. It works best when started within 48 hours, while the virus is still multiplying fast.',
      1: 'Incorrect. Oseltamivir treats an infection; only the vaccine prevents one. Yearly vaccination is still needed.',
      2: 'Incorrect. It shortens the illness by about a day; it does not cure it immediately.',
      3: 'Incorrect. It is an antiviral; bacterial pneumonia needs antibiotics.'
    },
    phys: 'Oseltamivir blocks neuraminidase → new flu particles cannot break free from infected cells → spread inside the body slows. Started late, most copying is already done.',
    rule: 'Oseltamivir: within 48 hours, shortens flu, not a substitute for the vaccine, no effect on bacteria.'
  },
  '25|c|6': {
    ask: 'Do these throat findings threaten the airway?',
    cues: ['Drooling + muffled “hot potato” voice + trismus (can’t open the jaw)'],
    r: {
      0: 'Antibiotics will be needed, but the airway comes first — and the client may not be able to swallow pills.',
      1: 'Correct. These signs point to a peritonsillar abscess pushing into the airway. Assess the airway and get the provider quickly for drainage.',
      2: 'Gargles are comfort measures, not the first step for a possible airway threat.',
      3: 'Acetaminophen treats pain and fever, not the swelling threatening the airway.'
    },
    phys: 'A pus pocket beside the tonsil → swells and pushes the soft palate and uvula across → narrows the oropharynx → drooling (can’t swallow), muffled voice, and possible airway obstruction.',
    rule: 'Drooling, muffled voice and trismus with a sore throat = airway threat. Airway first.'
  },
  '25|c|7': {
    ask: 'Which pneumonia task is mobility or reinforcing teaching already given?',
    cues: ['AP → no assessment, initial teaching or evaluation'],
    r: {
      0: 'Correct. Helping the client walk and reminding them to use the spirometer reinforce the nurse’s plan and need no judgment.',
      1: 'Assessing lung sounds is a nursing assessment.',
      2: 'Teaching about antibiotics is initial teaching — a nursing responsibility.',
      3: 'Evaluating sputum changes requires nursing judgment.'
    },
    phys: 'Walking and deep breathing expand alveoli and move secretions — care AP can safely help with once the nurse has set the plan.',
    rule: 'AP can ambulate and remind; the nurse assesses, teaches and evaluates.'
  },
  '25|c|8': {
    ask: 'Which finding separates inhalation anthrax from the flu?',
    cues: ['Both start with fever and aches', 'Look for the one finding flu never causes'],
    r: {
      0: 'Fever and muscle aches happen in both — they cannot tell them apart.',
      1: 'Correct. A widened mediastinum on x-ray with sudden severe distress is the hallmark of inhalation anthrax’s second phase (hemorrhagic mediastinitis).',
      2: 'Sore throat is nonspecific.',
      3: 'Headache is nonspecific.'
    },
    phys: 'Inhaled spores → carried to the mediastinal lymph nodes → toxins cause bleeding and swelling there → widened mediastinum → sudden respiratory distress and shock.',
    rule: 'To separate look-alikes, find the one finding only one condition causes.'
  }
});
// The questions reused on the final (chapters 22–25) that had no “what is it asking” or cues, filled in for it.
[
  ['25|n|8', {"cues": ["Start within 48 hours", "Blocks viral release (neuraminidase)", "No substitute for the vaccine"]}]
].forEach(([id, e]) => { window.EXPLAIN[id] = Object.assign({}, window.EXPLAIN[id] || {}, e); });
window.EXPLAIN_CH = window.EXPLAIN_CH || {}; window.EXPLAIN_CH['25'] = 1;
