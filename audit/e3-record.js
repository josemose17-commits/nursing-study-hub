// Exam 3 content audit: what the hub has for each assigned chapter, what has been checked against the chapter itself,
// and what still needs checking. tools/audit.js merges this with what it finds in the hub's data and writes
// audit/e3-coverage.md. Edit this file when a chapter is checked; never edit the .md by hand.
//
// Each chapter has a status for each area of the audit:
//   status — compared with the chapter: 'covered', 'partial', 'missing', 'verify' (not yet compared) or 'n/a'
//   hub    — first pass from the hub alone: 'full', 'thin' or 'none'. It says nothing about the book.
//   has    — what the hub has · check — what to look for in the chapter
// checked is the date the chapter itself was compared with the hub (null = not yet).
// verify lists specific claims to settle with the chapter; where finds every place in the hub that says it.
module.exports = {
  exam: 'Exam 3',
  book: 'Ignatavicius, Rebar & Heimgartner, Medical-Surgical Nursing',
  chapters: {
    '45': {
      checked: null,
      normal: { hub: 'full', has: 'Physiology for every part (wall layers, mouth to colon, pancreas, liver and gallbladder), the quadrant map, and GI changes with aging.', check: 'Any anatomy and physiology subsection or aging change the hub leaves out.' },
      assessment: { hub: 'full', has: 'Box 45.1 history questions, nutrition history, PQRST, psychosocial, exam order (inspect → auscultate → palpate), bowel sounds, bruits, both action alerts.', check: 'Every history subsection (e.g., family history and genetic risk) and any assessment table.' },
      conditions: { status: 'n/a', has: 'An assessment chapter: its findings are tied to the disorders of chapters 46–49.' },
      diagnostics: { hub: 'full', has: 'Table 45.2 labs with ranges; stool tests and screening options; x-ray, CT, MRI/MRCP, ultrasound, EUS, liver-spleen scan; EGD, ERCP, capsule, colonoscopy, sigmoidoscopy, CT colonography.', check: 'Any test the hub omits (e.g., barium studies) and every lab range against Table 45.2.' },
      management: { hub: 'full', has: 'Preparation, sedation monitoring and aftercare for each procedure; bowel prep teaching; teach-back.', check: 'Fasting hours, driving limits and diet after each test.' },
      complications: { hub: 'full', has: 'Aspiration, slowed breathing under sedation, perforation, bleeding, pancreatitis and sepsis after ERCP, fluid loss from bowel prep; the pulsating-mass and rigidity alerts.' },
      features: { hub: 'thin', has: 'Box 45.1, Box 45.2 and Table 45.2 cited; action alerts, health equity and health literacy notes.', check: 'Table 45.1 (never cited; probably the aging changes) and any box or table after these.' }
    },
    '46': {
      checked: null,
      normal: { hub: 'full', has: 'The LES pressure gradient, what lowers LES pressure (Box 46.5), how reflux injures, why esophageal cancer spreads early, what saliva does.' },
      assessment: { hub: 'full', has: 'Mouth inspection, the PASS dysphagia screen, key features of oral cancer, GERD, hiatal hernia and esophageal cancer; atypical GERD in older adults.' },
      conditions: { hub: 'full', has: 'Stomatitis (exemplar), premalignant lesions, oral cancer, sialadenitis, xerostomia, GERD (exemplar), hiatal hernia, esophageal cancer, esophageal trauma.', check: 'Esophageal diverticula (earlier editions had a section) or any other disorder not in this list.' },
      diagnostics: { hub: 'full', has: 'Biopsy, EGD, ambulatory pH monitoring, manometry, barium swallow, EUS, PET, CT.' },
      management: { hub: 'full', has: 'Oral care (Box 46.2) and mouth drugs; GERD diet and lifestyle; PPIs and their long-term cautions; Stretta (Box 46.7), fundoplication (Box 46.9) and LINX; oral cancer and esophagectomy care (Box 46.12); trauma care.' },
      complications: { hub: 'full', has: 'Airway obstruction and aspiration, Barrett\'s esophagus and stricture, fundoplication complications (Box 46.10), anastomotic leak and mediastinitis.' },
      features: { hub: 'full', has: 'Boxes 46.1–46.12 all cited.', check: 'Any table (none cited) and anything after Box 46.12.' }
    },
    '47': {
      checked: null,
      normal: { hub: 'full', has: 'The mucosal barrier and prostaglandins, why NSAIDs injure, how H. pylori survives acid, chronic gastritis and vitamin B₁₂.' },
      assessment: { hub: 'full', has: 'History, the pain pattern and a change in pain, orthostatics, signs of bleeding (Box 47.2), older adults.' },
      conditions: { hub: 'full', has: 'Acute and chronic gastritis; peptic ulcer disease (duodenal, gastric, stress ulcers); hemorrhage, perforation, outlet obstruction; gastric cancer; dumping syndrome.' },
      diagnostics: { hub: 'full', has: 'EGD with biopsy, H. pylori tests (serology, breath, stool), nuclear bleeding scan, labs; EUS and imaging for cancer.' },
      management: { hub: 'full', has: 'Table 47.1 drugs with timing, triple and quadruple therapy, the bleeding rescue, NG care, endoscopic hemostasis, embolization, surgery, managing dumping, home care (Box 47.3).' },
      complications: { hub: 'full', has: 'Hemorrhage, perforation, outlet obstruction with metabolic alkalosis, acute gastric dilation, dumping, B₁₂, iron and folate deficits.' },
      features: { hub: 'full', has: 'Boxes 47.1–47.4 and Tables 47.1–47.2 cited.' }
    },
    '48': {
      checked: null,
      normal: { hub: 'full', has: 'Why obstruction causes hypovolemia, acid–base by the level of the block, strangulation and sepsis, polyp to cancer.' },
      assessment: { hub: 'full', has: 'History, temperature and pulse thresholds, small- vs large-bowel signs (Box 48.1), mechanical vs paralytic findings, trauma signs (Box 48.7), the hernia exam.' },
      conditions: { hub: 'full', has: 'Intestinal obstruction (exemplar), colorectal cancer, IBS, abdominal trauma, hernias, hemorrhoids.', check: 'Polyps as a section of their own (the hub covers FAP and Lynch syndrome only as cancer risks).' },
      diagnostics: { hub: 'full', has: 'Labs, CT/MRI, ultrasound, FAST, colonoscopy, FIT/FOBT, CEA, hydrogen breath test.' },
      management: { hub: 'full', has: 'Box 48.2 nonsurgical care, the NG tube and fluids, alvimopan, surgery, cancer treatment, colostomy care, the AP-resection wound (Box 48.5), IBS drugs, hernia repair care (Box 48.8), hemorrhoid care.' },
      complications: { hub: 'full', has: 'Hypovolemia, strangulation, perforation, sepsis, compartment syndrome, stoma necrosis, perineal wound infection.' },
      features: { hub: 'thin', has: 'Boxes 48.1, 48.2 and 48.4–48.8 cited.', check: 'Box 48.3 (never cited; it falls between obstruction care and stoma-site marking).' }
    },
    '49': {
      checked: null,
      normal: { hub: 'full', has: 'Why peritonitis empties the circulation, why the appendix perforates, lining vs all layers, why diverticula form and get infected.' },
      assessment: { hub: 'full', has: 'Box 49.1 peritonitis features, the order of symptoms (appendicitis vs gastroenteritis), dehydration signs, UC and Crohn\'s assessment, older adults.' },
      conditions: { hub: 'full', has: 'Peritonitis (exemplar), appendicitis, gastroenteritis, UC (exemplar), Crohn\'s disease, diverticular disease, celiac disease, parasitic infections, Chagas disease.', check: 'Anal disorders (anorectal abscess, anal fissure, anal fistula) and food poisoning: earlier editions had sections; the hub has neither.' },
      diagnostics: { hub: 'full', has: 'WBC patterns, blood cultures, CRP/ESR, MR enterography, colonoscopy, CT, x-ray, stool analysis, celiac testing; UC severity (Table 49.3).' },
      management: { hub: 'full', has: 'Antibiotics, fluids and surgery; what never to do in appendicitis; oral rehydration; 5-ASA drugs, steroids, biologics; J-pouch and ileostomy (Boxes 49.3–49.4); fistula care; diverticulitis diet; gluten-free diet; amebicides.' },
      complications: { hub: 'full', has: 'Third spacing and shock, sepsis, perforation, toxic megacolon, hemorrhage, fistulas, malnutrition, colorectal cancer after 10 years of UC, PML.' },
      features: { hub: 'full', has: 'Boxes 49.1–49.5, Tables 49.1–49.5 and Fig. 49.4 cited.' }
    },
    '53': {
      checked: null,
      normal: { hub: 'full', has: 'Receptors, simple and axis feedback, hypothalamus and pituitary (Tables 53.1, 53.3), adrenal cortex and medulla (Table 53.2), thyroid (Box 53.2), parathyroid, pancreas, pineal.', check: 'The gonads (earlier editions had a section; the hub names them only as FSH and LH targets).' },
      assessment: { hub: 'full', has: 'History (Box 53.4), nutrition clues, inspection, auscultation, thyroid palpation and its action alert, psychosocial.' },
      conditions: { status: 'n/a', has: 'An assessment chapter: its findings point to chapters 55 and 56.' },
      diagnostics: { hub: 'full', has: 'Blood, urine and saliva tests; stimulation and suppression tests; Box 53.5 collection rules and the 24-hour urine; glucose and A1C; imaging, thyroid scan, FNA.' },
      management: { hub: 'full', has: 'The nurse\'s part in testing, fluids and skin care for older adults, teaching about hormone misuse.' },
      complications: { hub: 'thin', has: 'Dehydration with low ADH reserve, thyroid storm from palpation, glucose and electrolyte crises — named here, detailed in later chapters.' },
      features: { hub: 'thin', has: 'Boxes 53.1, 53.2, 53.4 and 53.5 and Tables 53.1–53.3 cited.', check: 'Box 53.3 (never cited; probably the aging changes, which the hub covers).' }
    },
    '55': {
      checked: null,
      normal: { hub: 'full', has: 'Why a goiter appears in both diseases, what myxedema is, the heart in each disease, hypermetabolism, calcium and PTH.' },
      assessment: { hub: 'full', has: 'Boxes 55.2 and 55.4, eye signs, look-don\'t-touch neck, Table 55.1 labs, calcium checks (Chvostek, Trousseau).' },
      conditions: { hub: 'full', has: 'Hypothyroidism (exemplar), myxedema coma, Graves disease and other causes of hyperthyroidism, thyroid storm, thyroiditis, thyroid cancer, hypo- and hyperparathyroidism.' },
      diagnostics: { hub: 'full', has: 'T3, T4 and TSH patterns, TRAb, radioactive iodine uptake, ultrasound, ECG, Table 55.3 parathyroid labs, 24-hour urine calcium.' },
      management: { hub: 'full', has: 'Levothyroxine, thionamides, SSKI and beta blockers (Table 55.2), RAI precautions (Box 55.5), thyroidectomy care, emergency care (Boxes 55.3 and 55.6), eye care, calcium and vitamin D, cinacalcet, parathyroidectomy.' },
      complications: { hub: 'full', has: 'Myxedema coma, thyroid storm, bleeding, airway obstruction, hypocalcemia and nerve injury after thyroidectomy, hypercalcemic confusion, hypocalcemia after parathyroidectomy.' },
      features: { hub: 'full', has: 'Boxes 55.1–55.7 and Tables 55.1–55.3 cited.' }
    },
    '56': {
      checked: null,
      normal: { hub: 'full', has: 'Insulin, glucagon and the balancing hormones, incretins, life without insulin (Box 56.2), the three Ps, ketones and Kussmaul breathing, potassium shifts.' },
      assessment: { hub: 'full', has: 'History and physical (feet, injection sites, orthostatics, breath), screening (Box 56.3), diagnosis (Table 56.3, Box 56.4), hypoglycemia symptoms (Box 56.10).' },
      conditions: { hub: 'full', has: 'Type 1, type 2, LADA, MODY, gestational diabetes, prediabetes, metabolic syndrome, large- and small-vessel complications, hypoglycemia, DKA, HHS, dawn and Somogyi.' },
      diagnostics: { hub: 'full', has: 'A1C, fasting, OGTT and random glucose; CGM; meter accuracy; ketones, ABGs, osmolarity; urine albumin.' },
      management: { hub: 'full', has: 'Every drug class (Table 56.5); insulin (Table 56.6, Box 56.5); nutrition and exercise (Box 56.7); the 15-15 rule (Box 56.11); DKA and HHS treatment (Table 56.9); sick days (Box 56.12); foot care (Boxes 56.8–56.9, Table 56.7); kidneys; hospital and surgery; pancreas transplant; teaching (Boxes 56.13–56.15).' },
      complications: { hub: 'full', has: 'Hypoglycemia, DKA, HHS, cerebral edema, hypokalemia; retinopathy, nephropathy, neuropathy, foot ulcers and Charcot foot; infection; surgical risks.' },
      features: { hub: 'thin', has: 'Boxes 56.1–56.5 and 56.7–56.15 and Tables 56.1–56.3 and 56.5–56.9 cited.', check: 'Box 56.6 and Table 56.4 (never cited).' }
    }
  },
  verify: [
    { id: 'V1', ch: '45', claim: 'Under sedation, "RR below 10 or exhaled CO₂ below 20% → sternal rub."',
      why: 'Capnography is read in mmHg (normally about 35–45), so "below 20%" doesn\'t match how it is measured. The book may mean a 20% drop from baseline. A question repeats the wording.',
      where: /CO₂ (falls )?(below|<) ?20/ },
    { id: 'V2', ch: '45, 48', claim: 'Stool blood test preparation: ch 45 says no NSAIDs for 7 days and no red meat or vitamin C over 250 mg for 3 days; ch 48 says avoid aspirin, vitamin C, iron and red meat for 48 hours.',
      why: 'Two different rules for the same test. The questions use the chapter 45 version.',
      where: /red meat/ },
    { id: 'V3', ch: '45, 47', claim: 'Fasting before EGD: 6–8 hours (ch 45, planned scope) vs 4–6 hours (ch 47, scope to stop bleeding).',
      why: 'Probably both are in the book (planned vs urgent), but the hub doesn\'t say why they differ.',
      where: /NPO (for )?(6–8|4–6)/ },
    { id: 'V4', ch: '49', claim: 'Peritonitis: "the provider orders hypertonic IV fluids and broad-spectrum antibiotics immediately."',
      why: 'Fluid replacement for hypovolemia is normally isotonic, and the other chapters use normal saline or lactated Ringer\'s. If the book says hypertonic, answer by the book and say so in the notes.',
      where: /hypertonic IV fluids/ },
    { id: 'V5', ch: '56', claim: 'Metabolic syndrome includes "BP ≥ 140/90".',
      why: 'The usual criteria use 130/85; every other number in the same list matches the usual criteria.',
      where: /BP ≥ 140\/90/ },
    { id: 'V6', ch: '56', claim: 'Blood pressure target: "< 140/90" under heart disease but "< 140/80" under kidneys and in the nursing process.',
      why: 'Two targets in one chapter; check which the book gives, and where.',
      where: /BP (<|below) ?140\/(80|90)/ }
  ],
  // Numbered features the hub doesn't cite, once checked in the chapter: 'Box 48.3': 'what it is and where the hub covers it'.
  features: {},
  corrections: [
    { date: '2026-10-19', ch: '49', what: 'Crohn\'s drugs: natalizumab was listed among the TNF-alpha inhibitors.',
      fix: 'Now says natalizumab blocks white cells from entering tissue (alpha-4 integrin), as the hub\'s drug card, breakdown and questions already did; the other three still inhibit TNF-alpha.' }
  ]
};
