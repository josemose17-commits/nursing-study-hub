// Lab tables in the order of the Clinical Reasoning Plan of Care, with common adult reference ranges
// (the same ones as Clinical Helpers). Ranges differ between labs: if your facility's report shows a different
// range, type it in the Normal Range box and the flags follow it.
// Row: k key · n name on the form · r range text · lo/hi numbers for flags (null = no limit) · F/M sex ranges
// sm: values under this are taken as thousands (15.8 → 15,800) · q: qualitative, ok = words that count as normal
// up/dn: what a high or low value can point to (own words) · u: unit

window.CP_LABS = [
  { id: 'cbc', name: 'Complete Blood Count', rows: [
    { k: 'wbc', n: 'WBC', r: '5,000–10,000/mm³', lo: 5000, hi: 10000, sm: 100, u: '/mm³', up: 'infection, inflammation, stress or steroids; watch for sepsis', dn: 'bone marrow suppression (chemo, some drugs) or overwhelming infection; high infection risk, neutropenic precautions' },
    { k: 'hgb', n: 'HGB', r: 'F 12–16, M 14–18 g/dL', F: [12, 16], M: [14, 18], lo: 12, hi: 18, u: 'g/dL', up: 'dehydration (hemoconcentration), chronic hypoxia (COPD, smoking)', dn: 'bleeding, anemia (iron, B12, kidney disease) or dilution from IV fluids; less oxygen-carrying capacity, fatigue, fall risk' },
    { k: 'plt', n: 'PLTS', r: '150,000–400,000/mm³', lo: 150000, hi: 400000, sm: 2000, u: '/mm³', up: 'inflammation, infection, after bleeding or splenectomy; clot risk', dn: 'bone marrow suppression, heparin (HIT), DIC, liver disease; bleeding precautions' },
    { k: 'neut', n: 'Neutrophil %', r: '55–70%', lo: 55, hi: 70, u: '%', up: 'bacterial infection, stress, steroids', dn: 'chemo, viral infection, bone marrow problems; infection risk' },
    { k: 'lymph', n: 'Lymphocytes %', r: '20–40%', lo: 20, hi: 40, u: '%', up: 'viral infection, some leukemias', dn: 'steroids, HIV, stress, chemo; when neutrophils are high the lymphocyte % falls' }
  ] },
  { id: 'bmp', name: 'Basic Metabolic Panel', rows: [
    { k: 'na', n: 'Sodium', r: '136–145 mEq/L', lo: 136, hi: 145, u: 'mEq/L', up: 'water loss (fever, fast breathing, poor intake), diabetes insipidus; neuro changes', dn: 'vomiting, diarrhea, diuretics, SIADH, fluid overload; confusion and seizure risk' },
    { k: 'k', n: 'Potassium', r: '3.5–5.0 mEq/L', lo: 3.5, hi: 5.0, u: 'mEq/L', up: 'kidney injury, ACE inhibitors, K-sparing diuretics, acidosis, cell breakdown, a hemolyzed sample; dysrhythmias', dn: 'vomiting, NG suction, diuretics, insulin, poor intake; dysrhythmias, weakness, ileus' },
    { k: 'glu', n: 'Glucose', r: '74–106 mg/dL (fasting)', lo: 74, hi: 106, u: 'mg/dL', up: 'diabetes, infection or stress hormones, steroids, dextrose fluids; slows healing, raises infection risk', dn: 'too much insulin or sulfonylurea, missed meals, alcohol; shaky, sweaty, confused' },
    { k: 'ca', n: 'Calcium', r: '9.0–10.5 mg/dL', lo: 9.0, hi: 10.5, u: 'mg/dL', up: 'hyperparathyroidism, cancer, immobility, thiazides; weakness, confusion, constipation, stones', dn: 'low albumin (check corrected Ca), low Mg, kidney disease, pancreatitis, after thyroid surgery; tingling, tetany, seizures' },
    { k: 'mg', n: 'Magnesium', r: '1.3–2.1 mEq/L', lo: 1.3, hi: 2.1, u: 'mEq/L', up: 'kidney failure, magnesium antacids or laxatives, IV magnesium; lost reflexes, slow breathing', dn: 'alcohol use, malnutrition, diarrhea, diuretics; tremors, dysrhythmias, keeps K⁺ low' },
    { k: 'lact', n: 'Lactate', r: '0.5–2.2 mmol/L', lo: 0.5, hi: 2.2, u: 'mmol/L', up: 'poor tissue perfusion or hypoxia (sepsis, shock), seizures, metformin, liver failure; 2 or more needs a sepsis look, 4 or more is severe', dn: 'not clinically important' },
    { k: 'bun', n: 'BUN', r: '10–20 mg/dL', lo: 10, hi: 20, u: 'mg/dL', up: 'dehydration, kidney injury, GI bleeding, high protein breakdown; a BUN:creatinine ratio over 20 suggests dehydration', dn: 'liver disease, malnutrition, overhydration' },
    { k: 'cr', n: 'Creatinine', r: 'F 0.5–1.1, M 0.6–1.2 mg/dL', F: [0.5, 1.1], M: [0.6, 1.2], lo: 0.5, hi: 1.2, u: 'mg/dL', up: 'kidney injury (poor perfusion, NSAIDs, vancomycin, contrast) or chronic kidney disease; adjust drug doses', dn: 'low muscle mass, older age, malnutrition' },
    { k: 'gfr', n: 'GFR', r: 'over 90 mL/min', lo: 90, hi: null, u: 'mL/min', up: 'normal', dn: 'reduced kidney function (under 60 for 3 months is chronic kidney disease); check drug doses and nephrotoxins' }
  ] },
  { id: 'ua', name: 'Urinalysis', rows: [
    { k: 'ucolor', n: 'Color', r: 'pale yellow to amber', q: true, ok: ['yellow', 'pale', 'straw', 'amber', 'light'], up: 'dark amber: concentrated (dehydration); red or brown: blood, muscle breakdown, some drugs', dn: '' },
    { k: 'uclar', n: 'Clarity', r: 'clear', q: true, ok: ['clear'], up: 'cloudy: WBCs, bacteria, crystals; think UTI', dn: '' },
    { k: 'usg', n: 'Specific Gravity', r: '1.005–1.030', lo: 1.005, hi: 1.030, up: 'concentrated urine: dehydration, SIADH, contrast', dn: 'dilute urine: overhydration, diabetes insipidus, kidney damage' },
    { k: 'uprot', n: 'Protein', r: 'negative', q: true, ok: ['neg', 'none', 'trace'], up: 'kidney damage (diabetes, hypertension), preeclampsia, infection', dn: '' },
    { k: 'uglu', n: 'Glucose', r: 'negative', q: true, ok: ['neg', 'none'], up: 'blood glucose above about 180 (diabetes), SGLT2 inhibitor drugs', dn: '' },
    { k: 'uket', n: 'Ketones', r: 'negative', q: true, ok: ['neg', 'none'], up: 'fat breakdown: DKA, starvation, vomiting, low-carb diet', dn: '' },
    { k: 'ublood', n: 'Blood', r: 'negative', q: true, ok: ['neg', 'none'], up: 'UTI, stones, trauma, Foley, menstruation, muscle breakdown', dn: '' },
    { k: 'unit', n: 'Nitrate (nitrite)', r: 'negative', q: true, ok: ['neg', 'none'], up: 'bacteria that convert nitrate: points to UTI', dn: '' },
    { k: 'ule', n: 'LET (leukocyte esterase)', r: 'negative', q: true, ok: ['neg', 'none'], up: 'white blood cells in urine: points to UTI', dn: '' },
    { k: 'urbc', n: 'RBC’s', r: '0–2 /hpf', lo: 0, hi: 2, u: '/hpf', up: 'bleeding in the urinary tract (stones, infection, trauma, cancer)', dn: '' },
    { k: 'uwbc', n: 'WBC’s', r: '0–5 /hpf', lo: 0, hi: 5, u: '/hpf', up: 'infection or inflammation of the urinary tract', dn: '' },
    { k: 'ubact', n: 'Bacteria', r: 'none', q: true, ok: ['neg', 'none', '0'], up: 'UTI or contamination; check how it was collected', dn: '' },
    { k: 'uepi', n: 'Epithelial', r: 'few', q: true, ok: ['few', 'rare', 'none', 'neg', '0'], up: 'many epithelial cells: the sample was likely contaminated', dn: '' }
  ] },
  { id: 'liver', name: 'Liver Panel and GI labs', rows: [
    { k: 'alb', n: 'Albumin', r: '3.5–5.0 g/dL', lo: 3.5, hi: 5.0, u: 'g/dL', up: 'dehydration', dn: 'malnutrition, liver disease, kidney losses, acute illness; edema, slow wound healing, pressure injury risk' },
    { k: 'tbil', n: 'Total bilirubin', r: '0.3–1.0 mg/dL', lo: 0.3, hi: 1.0, u: 'mg/dL', up: 'liver disease, bile duct blockage, red cell breakdown; jaundice, itching', dn: '' },
    { k: 'alp', n: 'Alk. Phos.', r: '30–120 U/L', lo: 30, hi: 120, u: 'U/L', up: 'bile duct blockage, liver disease, bone disease or healing fractures', dn: '' },
    { k: 'alt', n: 'ALT', r: '4–36 U/L', lo: 4, hi: 36, u: 'U/L', up: 'liver cell injury (hepatitis, drugs such as acetaminophen or statins, alcohol, fatty liver)', dn: '' },
    { k: 'ast', n: 'AST', r: '0–35 U/L', lo: 0, hi: 35, u: 'U/L', up: 'liver injury; also muscle or heart damage', dn: '' },
    { k: 'amy', n: 'Amylase', r: '30–110 U/L', lo: 30, hi: 110, u: 'U/L', up: 'pancreatitis, bowel obstruction, salivary gland problems', dn: '' },
    { k: 'lip', n: 'Lipase', r: '0–160 U/L', lo: 0, hi: 160, u: 'U/L', up: 'pancreatitis (more specific than amylase; stays up longer)', dn: '' }
  ] },
  { id: 'cardiac', name: 'Cardiac', rows: [
    { k: 'trop', n: 'Troponin', r: 'below the lab cutoff (often under 0.03 ng/mL)', lo: null, hi: 0.03, u: 'ng/mL', up: 'heart muscle injury (MI, myocarditis, heart failure, sepsis, kidney disease); trend it every 3–6 hours as ordered', dn: '' },
    { k: 'ck', n: 'CK total', r: 'about 30–170 U/L', lo: 30, hi: 170, u: 'U/L', up: 'muscle injury (falls, long time down, rhabdomyolysis, statins), heart or brain injury', dn: '' },
    { k: 'ckmb', n: 'CK-MB', r: '0–5 ng/mL (under 5% of total CK)', lo: 0, hi: 5, up: 'heart muscle injury (troponin is preferred now)', dn: '' },
    { k: 'bnp', n: 'BNP', r: 'under 100 pg/mL', lo: null, hi: 100, u: 'pg/mL', up: 'heart failure: the ventricles are stretched by volume; higher means worse', dn: '' }
  ] },
  { id: 'coags', name: 'Coags', rows: [
    { k: 'inr', n: 'INR', r: '0.8–1.1 (2–3 on warfarin)', lo: 0.8, hi: 1.1, up: 'warfarin, liver disease, vitamin K deficiency, DIC; bleeding risk (above the goal range on warfarin, hold and notify)', dn: 'clot risk if on warfarin and below the goal' },
    { k: 'ptt', n: 'PTT', r: '60–70 seconds', lo: 60, hi: 70, u: 'sec', up: 'heparin, clotting factor problems, liver disease; bleeding risk', dn: '' },
    { k: 'aptt', n: 'aPTT', r: '30–40 seconds (1.5–2.5 × control on heparin)', lo: 30, hi: 40, u: 'sec', up: 'heparin effect (expected if on a heparin drip), clotting factor problems, DIC; bleeding risk', dn: '' }
  ] },
  { id: 'abg', name: 'Arterial Blood Gases', rows: [
    { k: 'ph', n: 'pH', r: '7.35–7.45', lo: 7.35, hi: 7.45, up: 'alkalosis: check PaCO₂ (respiratory) or HCO₃⁻ (metabolic)', dn: 'acidosis: check PaCO₂ (respiratory) or HCO₃⁻ (metabolic)' },
    { k: 'po2', n: 'pO2', r: '80–100 mmHg', lo: 80, hi: 100, u: 'mmHg', up: 'more oxygen than needed; consider weaning', dn: 'hypoxemia: not enough oxygen getting into the blood' },
    { k: 'pco2', n: 'pCO2', r: '35–45 mmHg', lo: 35, hi: 45, u: 'mmHg', up: 'hypoventilation, CO₂ retention: respiratory acidosis', dn: 'hyperventilation (anxiety, pain, hypoxia): respiratory alkalosis' },
    { k: 'hco3', n: 'HCO3', r: '21–28 mEq/L', lo: 21, hi: 28, u: 'mEq/L', up: 'metabolic alkalosis (vomiting, NG suction, diuretics) or compensation for respiratory acidosis', dn: 'metabolic acidosis (DKA, lactic acidosis, kidney failure, diarrhea)' },
    { k: 'sao2', n: 'O2 Sat', r: '95–100% (88–92% for some COPD patients)', lo: 95, hi: 100, u: '%', up: '', dn: 'hypoxemia; check the device and flow, position, airway' },
    { k: 'o2', n: 'Oxygen delivery', r: 'room air or the device and flow', q: true, ok: [], free: true, up: '', dn: '' }
  ] }
];

// Vital signs (adults): numbers used for flags. Temperature can be typed in °F or °C.
window.CP_VITALS = [
  ['t', 'T', 'about 97.8–99.1 °F (36.5–37.3 °C); fever is 100.4 °F (38 °C) or higher'],
  ['p', 'P', '60–100 beats/min'],
  ['r', 'R', '12–20 breaths/min'],
  ['bp', 'BP', 'under 120/80; SBP under 90 or MAP under 65 is low'],
  ['spo2', 'O2 Sat', '95–100% (88–92% for some COPD patients); write the device and flow'],
  ['pain', 'Pain', '0–10, or a behavior scale; compare with the patient’s goal']
];

// Fluid & Electrolyte Application: typical critical values (each facility has its own list) and own-words guides.
// lab key → { crit, rel (why it matters), hi/lo: { name, cause, tx, nsg } }
window.CP_FE = {
  na: { crit: 'under 120 or over 160 mEq/L', rel: 'Sodium controls where water goes. When it is off, brain cells swell or shrink, so the danger is neurologic.',
    lo: { name: 'Hyponatremia', cause: 'Vomiting, diarrhea, thiazide diuretics, SIADH, heart failure or cirrhosis (too much water), too much hypotonic IV fluid.', tx: 'Fluid restriction if water excess; 0.9% saline if volume-depleted; hypertonic (3%) saline slowly for severe symptoms in a monitored unit; stop the drug that caused it.', nsg: 'Neuro checks (headache, confusion, seizures), seizure precautions, I&O and daily weight, safety; correct slowly (fast correction can damage the brain).' },
    hi: { name: 'Hypernatremia', cause: 'Water loss with fever, fast breathing, sweating or diarrhea; not able to drink (older adults, confused, NPO); diabetes insipidus; hypertonic fluids.', tx: 'Replace water slowly (oral water, D5W or 0.45% saline as ordered); treat the cause.', nsg: 'Neuro checks, thirst and mucous membranes, I&O, daily weight, offer fluids often; lower it slowly to avoid cerebral edema.' } },
  k: { crit: 'under 2.5 or over 6.5 mEq/L', rel: 'Potassium sets the resting charge of heart and muscle cells, so the danger is dysrhythmias and cardiac arrest.',
    lo: { name: 'Hypokalemia', cause: 'Vomiting, NG suction, diarrhea, loop or thiazide diuretics, insulin, alkalosis, poor intake.', tx: 'Oral or IV potassium chloride (IV always diluted, on a pump, never IV push, at the policy rate); replace magnesium too.', nsg: 'Cardiac monitor (flat T waves, U waves), muscle weakness, bowel sounds, urine output before giving K⁺, digoxin toxicity risk, IV site for burning; teach K⁺-rich foods.' },
    hi: { name: 'Hyperkalemia', cause: 'Kidney injury, ACE inhibitors or ARBs, K⁺-sparing diuretics, acidosis, burns or crush injuries, too much replacement; a hemolyzed sample can read falsely high.', tx: 'IV calcium gluconate to protect the heart; IV regular insulin with dextrose and albuterol to shift K⁺ into cells; potassium binders, loop diuretics or dialysis to remove it.', nsg: 'Cardiac monitor (tall peaked T waves, wide QRS), muscle weakness, hold K⁺ supplements and K⁺-sparing drugs, glucose checks after insulin, recheck the level.' } },
  ca: { crit: 'under 6.0 or over 13.0 mg/dL', rel: 'Calcium steadies nerve and muscle membranes and helps the heart contract and blood clot.',
    lo: { name: 'Hypocalcemia', cause: 'Low albumin (check corrected calcium), low magnesium, kidney disease, pancreatitis, low vitamin D, after thyroid or parathyroid surgery, many units of blood.', tx: 'IV calcium gluconate slowly for symptoms; oral calcium and vitamin D; correct magnesium.', nsg: 'Tingling of lips and fingers, Chvostek and Trousseau signs, muscle cramps, seizure precautions, watch the airway (laryngospasm), long QT on the monitor.' },
    hi: { name: 'Hypercalcemia', cause: 'Hyperparathyroidism, cancer, long immobility, thiazide diuretics, too much calcium or vitamin D.', tx: 'IV 0.9% saline, then a loop diuretic; calcitonin or bisphosphonates; treat the cause.', nsg: 'LOC (lethargy, confusion), weakness and fall risk, constipation, strain urine for stones, push fluids, cardiac monitor, digoxin toxicity risk; mobilize the patient.' } },
  mg: { crit: 'under 0.5 or over 3.0 mEq/L', rel: 'Magnesium calms nerves and muscles and keeps the heart rhythm stable; potassium and calcium stay low until magnesium is fixed.',
    lo: { name: 'Hypomagnesemia', cause: 'Alcohol use, malnutrition, diarrhea, diuretics, long-term proton pump inhibitors, refeeding.', tx: 'IV magnesium sulfate on a pump or oral magnesium.', nsg: 'Tremors, brisk reflexes, seizures, dysrhythmias (torsades), check K⁺ and Ca²⁺ too, seizure precautions; check reflexes during IV magnesium.' },
    hi: { name: 'Hypermagnesemia', cause: 'Kidney failure, magnesium antacids or laxatives, IV magnesium.', tx: 'Stop magnesium sources; IV calcium gluconate (the antidote); fluids and loop diuretics; dialysis if severe.', nsg: 'Deep tendon reflexes (lost first), RR and depth, BP, LOC, bradycardia on the monitor.' } },
  glu: { crit: 'under 40 or over 400 mg/dL', rel: 'The brain runs on glucose, so low glucose is the emergency; high glucose dehydrates, slows healing and feeds infection.',
    lo: { name: 'Hypoglycemia', cause: 'Too much insulin or sulfonylurea, missed or late meals, NPO without adjusting insulin, alcohol, exercise, kidney disease.', tx: 'Rule of 15: 15 g of fast carbohydrate if awake and able to swallow, recheck in 15 minutes; IV dextrose 50% or glucagon if not.', nsg: 'Shakiness, sweating, fast heart rate, confusion; recheck, then give a snack with protein; find the cause; teach.' },
    hi: { name: 'Hyperglycemia', cause: 'Diabetes, infection or stress hormones, steroids, dextrose IV fluids or tube feeding, missed insulin.', tx: 'Insulin as ordered (basal plus correction scale); fluids; treat the infection.', nsg: 'Glucose checks before meals and at bedtime, thirst and urination, ketones if very high, consistent-carbohydrate diet, skin and wound checks; teach.' } },
  bun: { crit: 'over 100 mg/dL', rel: 'BUN is the waste from protein breakdown; it rises when the kidneys clear less or the patient is dry.',
    hi: { name: 'High BUN', cause: 'Dehydration, kidney injury, GI bleeding, high protein breakdown, steroids.', tx: 'IV fluids if dry; treat the kidney injury or bleeding.', nsg: 'I&O, urine output, BUN:creatinine ratio, mental status, daily weight, look for bleeding.' },
    lo: { name: 'Low BUN', cause: 'Liver disease, malnutrition, overhydration.', tx: 'Treat the cause; nutrition support.', nsg: 'Nutrition, fluid status, liver function.' } },
  cr: { crit: 'over 4.0 mg/dL', rel: 'Creatinine is the best simple marker of kidney filtering; a rise of 0.3 in 48 hours means acute kidney injury.',
    hi: { name: 'High creatinine', cause: 'Low blood flow to the kidneys (dehydration, shock), nephrotoxic drugs (NSAIDs, vancomycin, aminoglycosides, contrast), blockage, chronic kidney disease.', tx: 'Fluids if dry; stop nephrotoxic drugs and adjust doses; treat blockage; dialysis if severe.', nsg: 'Urine output (at least 0.5 mL/kg/hr), I&O, daily weight, K⁺ level, fluid overload signs, check drug doses with pharmacy.' },
    lo: { name: 'Low creatinine', cause: 'Low muscle mass, older age, malnutrition.', tx: 'Treat the cause.', nsg: 'Nutrition and mobility.' } },
  hgb: { crit: 'under 5 or over 20 g/dL (transfusion often considered under 7)', rel: 'Hemoglobin carries oxygen, so a low level means less oxygen delivered to tissues.',
    lo: { name: 'Low hemoglobin (anemia)', cause: 'Bleeding (surgery, GI), iron or B12 deficiency, chronic kidney disease, bone marrow suppression, dilution from IV fluids.', tx: 'Blood transfusion per order; iron or vitamins; stop the bleeding.', nsg: 'Fatigue, pallor, tachycardia, shortness of breath with activity, orthostatic BP, fall precautions, watch for bleeding, transfusion monitoring.' },
    hi: { name: 'High hemoglobin', cause: 'Dehydration, chronic hypoxia (COPD, smoking), polycythemia.', tx: 'Fluids; treat the cause.', nsg: 'Hydration, clot signs.' } },
  wbc: { crit: 'under 2,500 or over 30,000/mm³', rel: 'White cells fight infection; a high count signals infection or inflammation, a low count leaves the patient unprotected.',
    hi: { name: 'Leukocytosis', cause: 'Infection, inflammation, stress, steroids.', tx: 'Antibiotics for infection after cultures; treat the cause.', nsg: 'Temperature, sepsis signs (HR, RR, BP, LOC, lactate), cultures before antibiotics, hand hygiene.' },
    lo: { name: 'Leukopenia', cause: 'Chemotherapy, some drugs, bone marrow problems, overwhelming infection.', tx: 'Growth factors (filgrastim) as ordered; antibiotics for fever.', nsg: 'Neutropenic precautions, a fever is an emergency, hand hygiene, no fresh flowers, avoid sick visitors.' } },
  plt: { crit: 'under 50,000 (bleeding risk high under 20,000) or over 1,000,000/mm³', rel: 'Platelets plug damaged vessels, so a low count means bleeding.',
    lo: { name: 'Thrombocytopenia', cause: 'Bone marrow suppression, heparin (HIT), DIC, liver disease, sepsis.', tx: 'Platelet transfusion per order; stop heparin if HIT.', nsg: 'Bleeding precautions (soft toothbrush, electric razor, no IM shots, no NSAIDs), check gums, urine, stool and skin; fall prevention.' },
    hi: { name: 'Thrombocytosis', cause: 'Inflammation, infection, after bleeding or splenectomy.', tx: 'Treat the cause.', nsg: 'Clot signs.' } },
  alb: { crit: 'no standard critical value', rel: 'Albumin holds fluid in the vessels and reflects protein status, which affects healing.',
    lo: { name: 'Low albumin', cause: 'Malnutrition, liver disease, kidney protein loss, burns, acute illness.', tx: 'Protein and calorie support (dietitian, supplements); IV albumin in some cases.', nsg: 'Edema, intake (%), weight, wound healing, Braden score and turning.' },
    hi: { name: 'High albumin', cause: 'Dehydration.', tx: 'Fluids.', nsg: 'Hydration status.' } },
  lact: { crit: '4 mmol/L or higher', rel: 'Lactate builds up when tissues don’t get enough oxygen; it tracks sepsis and shock.',
    hi: { name: 'High lactate', cause: 'Sepsis, shock, hypoxia, seizures, metformin, liver failure.', tx: 'Sepsis bundle: cultures, antibiotics, 30 mL/kg crystalloid if hypotensive or lactate 4 or more; oxygen; recheck the level.', nsg: 'MAP, LOC, urine output, skin perfusion, repeat lactate in 2–4 hours.' } },
  ph: { crit: 'under 7.25 or over 7.55', rel: 'Enzymes and the heart work only in a narrow pH range.',
    lo: { name: 'Acidosis', cause: 'Respiratory (CO₂ retained: sedation, COPD) or metabolic (DKA, lactic acidosis, kidney failure, diarrhea).', tx: 'Treat the cause: ventilation for respiratory; fluids, insulin or bicarbonate for metabolic.', nsg: 'LOC, RR and depth, K⁺ (shifts out of cells), cardiac monitor.' },
    hi: { name: 'Alkalosis', cause: 'Respiratory (hyperventilation from anxiety, pain, hypoxia) or metabolic (vomiting, NG suction, diuretics).', tx: 'Treat the cause: calm and slow breathing for respiratory; fluids and electrolytes for metabolic.', nsg: 'Tingling, dizziness, K⁺ (shifts into cells), cardiac monitor.' } }
};
