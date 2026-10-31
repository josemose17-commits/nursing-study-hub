// Exam 1 · Practice drills ('pick': each option explains itself; 'sort': sort into the drill's choices).
window.MH_DRILLS = [
{
  id: 'precaution', type: 'sort', kind: 'Sort it', topic: 'precautions', title: 'Which precautions?',
  intro: 'Pick the transmission-based precautions to add to Standard Precautions.',
  ask: 'Which precautions?',
  choices: ['Contact', 'Droplet', 'Airborne', 'Standard only'],
  items: [
    { q: 'Pulmonary tuberculosis (suspected or confirmed)', a: 'Airborne', why: 'Tiny droplet nuclei stay in the air: negative-pressure room and an N95.' },
    { q: 'Measles (rubeola)', a: 'Airborne', why: 'One of the most contagious airborne viruses.' },
    { q: 'Chickenpox (varicella)', a: 'Airborne', why: 'Airborne (plus contact with lesions until they crust).' },
    { q: 'Disseminated herpes zoster (shingles all over the body)', a: 'Airborne', why: 'Disseminated or in an immunocompromised patient: airborne plus contact.' },
    { q: 'Influenza', a: 'Droplet', why: 'Large droplets from coughing; surgical mask.' },
    { q: 'Pertussis (whooping cough)', a: 'Droplet', why: 'Droplet until 5 days of effective antibiotics.' },
    { q: 'Bacterial meningitis caused by *Neisseria meningitidis*', a: 'Droplet', why: 'Droplet for the first 24 hours of antibiotics.' },
    { q: 'Mumps', a: 'Droplet', why: 'Spread by respiratory droplets and saliva.' },
    { q: 'MRSA in a draining wound', a: 'Contact', why: 'Spread by hands, surfaces and equipment.' },
    { q: 'C. difficile diarrhea', a: 'Contact', why: 'Contact, plus soap-and-water hand hygiene and bleach cleaning (spores).' },
    { q: 'Scabies', a: 'Contact', why: 'Mites spread by skin contact and bedding.' },
    { q: 'VRE in the urine', a: 'Contact', why: 'A resistant organism spread by contact.' },
    { q: 'HIV infection', a: 'Standard only', why: 'Blood-borne: Standard Precautions are enough.' },
    { q: 'Hepatitis B', a: 'Standard only', why: 'Blood-borne; Standard Precautions plus vaccination of staff.' }
  ]
},
{
  id: 'ppe', type: 'pick', kind: 'Pick the action', topic: 'precautions', title: 'PPE and hand hygiene',
  intro: 'Choose the correct action.',
  items: [
    { ctx: 'Entering a Contact and Droplet room.', q: 'What goes on **first**?', why: 'CDC donning order: gown, mask, eye protection, gloves.', opts: [
      { t: 'Gown', ok: true, why: 'The gown goes on first so the gloves can cover its cuffs.' },
      { t: 'Gloves', why: 'Gloves go on **last**, over the gown cuffs.' },
      { t: 'Mask', why: 'The mask is second.' },
      { t: 'Face shield', why: 'Eye protection is third.' }
    ] },
    { ctx: 'Leaving the room of a patient on Contact and Droplet Precautions.', q: 'What comes off **first**?', why: 'Remove the most contaminated items first.', opts: [
      { t: 'Gloves', ok: true, why: 'Gloves are most contaminated and come off first (or with the gown).' },
      { t: 'Mask', why: 'The mask comes off **last** (it protects your airway until the end).' },
      { t: 'Goggles', why: 'Second, after gloves.' },
      { t: 'Gown, then gloves', why: 'Gloves first, or gown and gloves together, peeling inside out.' }
    ] },
    { ctx: 'Caring for a patient on Airborne Precautions for TB.', q: 'When do you remove your N95 respirator?', why: 'Infectious particles remain in the room air.', opts: [
      { t: 'After leaving the room and closing the door', ok: true, why: 'The air inside the room is still contaminated.' },
      { t: 'Just inside the door before leaving', why: 'You would breathe room air.' },
      { t: 'As soon as care is finished at the bedside', why: 'Too early.' },
      { t: 'After 8 hours of wear', why: 'Irrelevant to the exposure.' }
    ] },
    { ctx: 'You just emptied the commode of a patient with C. difficile.', q: 'How do you clean your hands after removing your gloves?', why: 'Spores resist alcohol.', opts: [
      { t: 'Wash with soap and water', ok: true, why: 'Friction and running water remove the spores.' },
      { t: 'Alcohol-based hand rub', why: 'Does **not** kill C. diff spores.' },
      { t: 'No hand hygiene; you wore gloves', why: 'Gloves can leak and hands get contaminated while you remove them.' },
      { t: 'Chlorhexidine wipe', why: 'Not the recommended method for spores.' }
    ] },
    { ctx: 'Transporting a patient with influenza to radiology.', q: 'Who wears a mask?', why: 'Contain the droplets at the source.', opts: [
      { t: 'The patient wears a surgical mask', ok: true, why: 'Masking the source protects everyone in the halls.' },
      { t: 'Only the transporter wears an N95', why: 'Influenza is droplet, not airborne; and the patient should be masked.' },
      { t: 'No one; transport is brief', why: 'Exposure in hallways still counts.' },
      { t: 'The patient wears an N95', why: 'Patients wear surgical masks; N95s are for staff.' }
    ] },
    { ctx: 'A nursing student is assigned to a patient with chickenpox.', q: 'What is the most important thing to check?', why: 'Susceptible staff shouldn’t care for varicella or measles patients.', opts: [
      { t: 'That the student is immune to varicella', ok: true, why: 'Immune staff care for these patients when possible.' },
      { t: 'That the student has a gown', why: 'Needed, but immunity matters most.' },
      { t: 'That the door can stay open', why: 'The door must stay **closed** (airborne).' },
      { t: 'That the student has had a flu shot', why: 'Unrelated to varicella.' }
    ] }
  ]
},
{
  id: 'hypertype', type: 'sort', kind: 'Name it', topic: 'hyper', title: 'Which hypersensitivity type?',
  intro: 'Name the hypersensitivity type for each reaction.',
  ask: 'Which type?',
  choices: ['Type I (rapid, IgE)', 'Type II (cytotoxic)', 'Type III (immune complex)', 'Type IV (delayed, T cell)', 'Type V (stimulated)'],
  items: [
    { q: 'Anaphylaxis to a bee sting', a: 'Type I (rapid, IgE)', why: 'IgE on mast cells → histamine in minutes.' },
    { q: 'Seasonal allergic rhinitis (hay fever)', a: 'Type I (rapid, IgE)', why: 'IgE-mediated histamine release.' },
    { q: 'Hives after eating shellfish', a: 'Type I (rapid, IgE)', why: 'A rapid IgE reaction.' },
    { q: 'Hemolytic reaction to ABO-incompatible blood', a: 'Type II (cytotoxic)', why: 'Antibodies destroy the donor red cells.' },
    { q: 'Goodpasture syndrome', a: 'Type II (cytotoxic)', why: 'Antibodies attack the basement membranes of the lungs and kidneys.' },
    { q: 'Autoimmune hemolytic anemia', a: 'Type II (cytotoxic)', why: 'Antibodies against the person’s own red cells.' },
    { q: 'Systemic lupus erythematosus', a: 'Type III (immune complex)', why: 'Immune complexes deposit in the kidneys, joints and skin.' },
    { q: 'Rheumatoid arthritis', a: 'Type III (immune complex)', why: 'Complexes deposit in the joints.' },
    { q: 'Serum sickness after antivenom', a: 'Type III (immune complex)', why: 'Complexes form against the foreign protein and deposit.' },
    { q: 'Positive TB skin test at 48 hours', a: 'Type IV (delayed, T cell)', why: 'Sensitized T cells; delayed.' },
    { q: 'Poison ivy rash', a: 'Type IV (delayed, T cell)', why: 'Contact dermatitis is T-cell mediated.' },
    { q: 'Acute rejection of a transplanted kidney', a: 'Type IV (delayed, T cell)', why: 'Mostly T-cell mediated.' },
    { q: 'Graves’ disease', a: 'Type V (stimulated)', why: 'Antibodies switch on the TSH receptor.' }
  ]
},
{
  id: 'immtype', type: 'sort', kind: 'Sort it', topic: 'immunity', title: 'Active or passive? Natural or artificial?',
  intro: 'Decide which kind of immunity each person has.',
  ask: 'Which kind of immunity?',
  choices: ['Natural active', 'Artificial active', 'Natural passive', 'Artificial passive'],
  items: [
    { q: 'A child recovers from chickenpox and never gets it again.', a: 'Natural active', why: 'Her own body made antibodies after the disease.' },
    { q: 'An adult gets the tetanus-diphtheria booster.', a: 'Artificial active', why: 'A vaccine makes the body produce its own antibodies.' },
    { q: 'A newborn is protected by antibodies that crossed the placenta.', a: 'Natural passive', why: 'Maternal IgG, temporary.' },
    { q: 'A breastfed infant gets IgA in breast milk.', a: 'Natural passive', why: 'Ready-made antibodies from the mother.' },
    { q: 'A nurse receives hepatitis B immune globulin after a needlestick.', a: 'Artificial passive', why: 'Someone else’s antibodies by injection: immediate, short-lived.' },
    { q: 'A hiker bitten by a rattlesnake gets antivenom.', a: 'Artificial passive', why: 'Ready-made antibodies.' },
    { q: 'A traveler gets the hepatitis A vaccine series.', a: 'Artificial active', why: 'A vaccine.' },
    { q: 'An adult who had COVID-19 makes antibodies against the virus.', a: 'Natural active', why: 'The infection triggered her own response.' },
    { q: 'A person exposed to rabies gets rabies immune globulin at the wound.', a: 'Artificial passive', why: 'Immediate antibodies (given with the vaccine series, which is active).' }
  ]
},
{
  id: 'wbc', type: 'sort', kind: 'Name it', topic: 'inflam', title: 'Which white blood cell?',
  intro: 'Name the WBC from what it does or when it rises.',
  ask: 'Which cell?',
  choices: ['Neutrophil', 'Macrophage (monocyte)', 'Eosinophil', 'Basophil or mast cell', 'B lymphocyte', 'T lymphocyte', 'Natural killer cell'],
  items: [
    { q: 'First to arrive at a bacterial infection; makes up most of the WBC count.', a: 'Neutrophil', why: 'The first-line phagocyte.' },
    { q: 'Increased bands of this cell = left shift.', a: 'Neutrophil', why: 'Bands are immature neutrophils.' },
    { q: 'Rises with allergies and parasitic worms.', a: 'Eosinophil', why: 'Eosinophilia.' },
    { q: 'Releases histamine and heparin.', a: 'Basophil or mast cell', why: 'Drives type I reactions.' },
    { q: 'Eats debris and presents antigen to lymphocytes.', a: 'Macrophage (monocyte)', why: 'A long-lived phagocyte that links inflammation and immunity.' },
    { q: 'Becomes a plasma cell that makes antibodies.', a: 'B lymphocyte', why: 'Antibody-mediated (humoral) immunity.' },
    { q: 'CD4 helper cells; the cell HIV destroys.', a: 'T lymphocyte', why: 'Cell-mediated immunity.' },
    { q: 'Causes the TB skin test reaction and transplant rejection.', a: 'T lymphocyte', why: 'Type IV, delayed.' },
    { q: 'Kills virus-infected and cancer cells without prior sensitization.', a: 'Natural killer cell', why: 'Part of immune surveillance.' }
  ]
},
{
  id: 'drainage', type: 'sort', kind: 'Name it', topic: 'postop', title: 'What kind of wound drainage?',
  intro: 'Name the drainage from how it looks.',
  ask: 'Which drainage type?',
  choices: ['Serous', 'Sanguineous', 'Serosanguineous', 'Purulent'],
  items: [
    { q: 'Clear, watery, pale yellow', a: 'Serous', why: 'Plasma.' },
    { q: 'Bright red', a: 'Sanguineous', why: 'Fresh blood: report if it is increasing.' },
    { q: 'Pale pink and watery', a: 'Serosanguineous', why: 'Plasma with some blood: normal in the first days.' },
    { q: 'Thick, cloudy, yellow-green, foul-smelling', a: 'Purulent', why: 'Pus: infection.' },
    { q: 'A sudden gush of pink fluid on day 6 after an abdominal incision', a: 'Serosanguineous', why: 'Can signal **dehiscence**: look at the wound.' },
    { q: 'Dark red, thick blood in the drain soon after surgery', a: 'Sanguineous', why: 'Blood; a large amount may mean hemorrhage.' }
  ]
},
{
  id: 'postopcomp', type: 'sort', kind: 'Name it', topic: 'postop', title: 'Which post-op complication?',
  intro: 'Name the complication from the findings.',
  ask: 'Which complication?',
  choices: ['Atelectasis', 'Pulmonary embolism', 'Hemorrhage or hypovolemia', 'Deep vein thrombosis', 'Paralytic ileus', 'Urinary retention', 'Wound infection', 'Delirium'],
  items: [
    { q: 'Day 1: low-grade fever, diminished breath sounds at the bases, SpO₂ 92%.', a: 'Atelectasis', why: 'Shallow breathing collapses alveoli; incentive spirometry prevents it.' },
    { q: 'Day 3: sudden dyspnea, sharp chest pain, HR 124, anxiety.', a: 'Pulmonary embolism', why: 'A clot traveled to the lungs: emergency.' },
    { q: 'HR 118, BP 88/56, restless, dressing soaked with bright red blood.', a: 'Hemorrhage or hypovolemia', why: 'Rising HR then falling BP: early shock.' },
    { q: 'One calf swollen, warm and tender.', a: 'Deep vein thrombosis', why: 'Don’t massage it; report.' },
    { q: 'Abdomen distended, no bowel sounds, no flatus, nausea.', a: 'Paralytic ileus', why: 'Anesthesia, opioids and bowel handling slow the gut.' },
    { q: 'No void for 8 hours; bladder scan 700 mL; lower abdominal discomfort.', a: 'Urinary retention', why: 'Anesthesia and opioids; catheterize as ordered.' },
    { q: 'Day 5: incision red and warm with purulent drainage, temp 38.6 °C.', a: 'Wound infection', why: 'Typical timing 3–6 days.' },
    { q: '82-year-old, day 2: suddenly inattentive, pulling at lines, worse at night.', a: 'Delirium', why: 'Acute, fluctuating confusion: find the cause.' }
  ]
},
{
  id: 'emergency', type: 'sort', kind: 'Name it', topic: 'oncemerg', title: 'Which oncologic emergency?',
  intro: 'Name the emergency from the findings.',
  ask: 'Which emergency?',
  choices: ['Sepsis', 'DIC', 'SIADH', 'Hypercalcemia', 'Spinal cord compression', 'Superior vena cava syndrome', 'Tumor lysis syndrome'],
  items: [
    { q: 'Neutropenic patient: temp 38.5 °C, HR 120, BP 86/50, new confusion.', a: 'Sepsis', why: 'Infection with organ dysfunction.' },
    { q: 'Oozing from IV sites and gums, petechiae, low fibrinogen, high D-dimer.', a: 'DIC', why: 'Clotting factors and platelets are used up.' },
    { q: 'Small cell lung cancer: Na⁺ 122 mEq/L, concentrated urine, weight gain, headache.', a: 'SIADH', why: 'Excess ADH retains water.' },
    { q: 'Breast cancer with bone metastases: constipation, confusion, polyuria, extreme fatigue.', a: 'Hypercalcemia', why: 'Bone breakdown releases calcium.' },
    { q: 'Prostate cancer: back pain worse lying down, now leg weakness.', a: 'Spinal cord compression', why: 'Back pain first, then neuro loss.' },
    { q: 'Lung cancer: puffy face in the morning, shirt collar tight, distended neck veins.', a: 'Superior vena cava syndrome', why: 'The SVC is blocked.' },
    { q: 'Lymphoma, day 2 of chemo: K⁺ 6.2, phosphate high, calcium low, urine output falling.', a: 'Tumor lysis syndrome', why: 'Massive cell death releases intracellular contents.' },
    { q: 'Leukemia: uric acid 12 mg/dL and rising creatinine after the first chemo dose.', a: 'Tumor lysis syndrome', why: 'Uric acid crystals block the kidneys.' }
  ]
},
{
  id: 'onccare', type: 'pick', kind: 'Pick the action', topic: 'sidefx', title: 'Caring for a patient on cancer treatment',
  intro: 'Choose the safest, most correct nursing action.',
  items: [
    { ctx: 'Platelets 18,000/mm³.', q: 'Which order do you question?', why: 'Bleeding precautions: avoid trauma and anything that impairs platelets.', opts: [
      { t: 'Enoxaparin injection and an IM dose of vitamin', ok: true, why: 'An anticoagulant and an IM injection both raise bleeding risk; clarify.' },
      { t: 'Use an electric razor', why: 'Correct bleeding precaution.' },
      { t: 'Stool softener daily', why: 'Prevents straining.' },
      { t: 'Soft-bristle toothbrush', why: 'Correct.' }
    ] },
    { ctx: 'ANC 400/mm³.', q: 'Which visitor request do you refuse?', why: 'Neutropenic precautions.', opts: [
      { t: 'Bringing a vase of fresh roses', ok: true, why: 'Fresh flowers and standing water carry bacteria and fungi.' },
      { t: 'A healthy spouse who washes his hands', why: 'Acceptable.' },
      { t: 'Bringing family photos', why: 'Harmless.' },
      { t: 'Reading to the patient', why: 'Harmless.' }
    ] },
    { ctx: 'A patient with a cervical radiation implant (sealed source).', q: 'Which action is correct?', why: 'Time, distance, shielding.', opts: [
      { t: 'Wear a dosimeter and limit time at the bedside', ok: true, why: 'Measures your exposure and limits it.' },
      { t: 'Assign a pregnant nurse because the source is sealed', why: 'Pregnant staff and visitors must not care for or visit her.' },
      { t: 'Pick up a dislodged implant with gloved hands', why: 'Never touch it; use **long forceps** and a lead container.' },
      { t: 'Encourage her 8-year-old to visit at length', why: 'Children shouldn’t visit; visits are limited.' }
    ] },
    { ctx: 'External beam radiation to the chest.', q: 'Which skin teaching is correct?', why: 'Protect the irritated skin in the field.', opts: [
      { t: 'Wash with lukewarm water and mild soap; pat dry; leave the markings', ok: true, why: 'Gentle care; markings guide treatment.' },
      { t: 'Scrub off the ink markings after each session', why: 'Markings must stay.' },
      { t: 'Apply a heating pad for soreness', why: 'Heat further damages skin.' },
      { t: 'Use scented lotion before each treatment', why: 'Lotions can increase the dose to skin; only approved products.' }
    ] },
    { ctx: 'A vesicant infusion: the patient says the site burns and it is swollen.', q: 'What do you do first?', why: 'Limit tissue damage.', opts: [
      { t: 'Stop the infusion', ok: true, why: 'First step for extravasation; then follow the protocol.' },
      { t: 'Slow the rate and recheck in 30 minutes', why: 'More drug leaks into the tissue.' },
      { t: 'Flush the line to clear it', why: 'Pushes more drug into tissue.' },
      { t: 'Apply a warm compress and continue', why: 'Never continue; compress type depends on the drug.' }
    ] },
    { ctx: 'A patient on a checkpoint inhibitor (immunotherapy) for melanoma.', q: 'Which report needs prompt follow-up?', why: 'Immune-related adverse events can be serious.', opts: [
      { t: 'Six watery stools a day and abdominal pain', ok: true, why: 'Possible immune-related **colitis**; often needs steroids.' },
      { t: 'Mild tiredness in the evening', why: 'Common; mention but not urgent.' },
      { t: 'Wanting to return to work', why: 'Not a concern.' },
      { t: 'Hair is thinner than before', why: 'Not an urgent problem.' }
    ] },
    { ctx: 'Chemotherapy in 30 minutes; the patient vomited with last cycle.', q: 'Best plan for nausea?', why: 'Prevent CINV.', opts: [
      { t: 'Give the scheduled antiemetics before the infusion and on schedule after', ok: true, why: 'Prevention works better than rescue.' },
      { t: 'Wait to see if nausea occurs', why: 'Too late; it is harder to control once started.' },
      { t: 'Give a large meal first', why: 'Small, bland meals are better.' },
      { t: 'Withhold fluids for 24 hours', why: 'Dehydration worsens nausea.' }
    ] }
  ]
},
{
  id: 'first', type: 'pick', kind: 'Who first?', topic: 'postop', title: 'Which patient do you see first?',
  intro: 'Pick the patient who needs the nurse first.',
  items: [
    { ctx: 'Surgical unit, start of shift.', q: 'Which patient first?', why: 'An airway or breathing problem beats expected findings.', opts: [
      { t: 'Post-op day 0, snoring loudly, hard to rouse, RR 9', ok: true, why: 'Possible opioid respiratory depression.' },
      { t: 'Post-op day 2, pain 5/10, due for oral analgesic', why: 'Needs care, but stable.' },
      { t: 'Post-op day 1 with serosanguineous drainage in the JP drain', why: 'Expected.' },
      { t: 'Post-op day 3 asking about discharge', why: 'Stable.' }
    ] },
    { ctx: 'Oncology unit.', q: 'Which patient first?', why: 'Look for the emergency.', opts: [
      { t: 'Day 10 after chemo, temp 38.3 °C, ANC 200', ok: true, why: 'Febrile neutropenia: antibiotics within 1 hour.' },
      { t: 'Alopecia and crying about her appearance', why: 'Important, not urgent.' },
      { t: 'Mild nausea after scheduled ondansetron', why: 'Manageable.' },
      { t: 'Fatigue rated 6/10', why: 'Common and expected.' }
    ] },
    { ctx: 'Medical unit.', q: 'Which patient first?', why: 'Airway risk.', opts: [
      { t: 'On lisinopril, new tongue swelling and drooling', ok: true, why: 'Angioedema threatening the airway.' },
      { t: 'SLE with joint pain 4/10', why: 'Stable.' },
      { t: 'HIV, due for antiretroviral doses', why: 'On time is important, but stable.' },
      { t: 'Contact dermatitis from tape', why: 'Delayed reaction, not dangerous.' }
    ] },
    { ctx: 'Surgical unit.', q: 'Which patient first?', why: 'Find the instability.', opts: [
      { t: 'Post-op day 5, says something “gave way” in the incision after coughing', ok: true, why: 'Possible dehiscence or evisceration.' },
      { t: 'Post-op day 1, no void for 4 hours', why: 'Watch; within the normal window.' },
      { t: 'Post-op day 2, absent bowel sounds in one quadrant, passing flatus', why: 'Bowel is recovering; flatus is reassuring.' },
      { t: 'Post-op day 1, temp 37.8 °C, using incentive spirometer', why: 'Low-grade fever early; continue lung exercises.' }
    ] },
    { ctx: 'Oncology unit.', q: 'Which patient first?', why: 'Cardiac danger.', opts: [
      { t: 'Leukemia on day 2 of chemo, K⁺ 6.5 with peaked T waves', ok: true, why: 'TLS hyperkalemia: risk of arrest.' },
      { t: 'Lung cancer with Na⁺ 132 mEq/L', why: 'Mild hyponatremia; monitor.' },
      { t: 'Breast cancer, new mild numbness in fingers', why: 'CIPN: report, not an emergency.' },
      { t: 'Prostate cancer awaiting hormone therapy teaching', why: 'Stable.' }
    ] }
  ]
}
];
