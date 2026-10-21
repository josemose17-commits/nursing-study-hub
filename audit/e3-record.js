// Exam 3 content audit: what the hub has for each assigned chapter, how it compares with the chapter itself,
// and what was added or left out. tools/audit.js merges this with what it finds in the hub's data and writes
// audit/e3-coverage.md. Edit this file when a chapter is checked again; never edit the .md by hand.
// The full chapter-by-chapter comparison is in audit/e3/<chapter>.md.
//
// Each chapter has a status for each area of the audit:
//   status — compared with the chapter: 'covered', 'partial', 'missing', 'verify' (not yet compared) or 'n/a'
//   hub    — first pass from the hub alone, before the comparison: 'full', 'thin' or 'none'
//   has    — what the hub had · added — what the comparison added · left — what was left out on purpose, and why
//   check  — what the first pass asked the comparison to look for (shown only until the chapter is checked)
// checked is the date the chapter itself was compared with the hub (null = not yet).
// verify lists specific claims to settle with the chapter (status 'open' until settled; resolution says what the book says);
// where finds every place in the hub that says it.
module.exports = {
  exam: 'Exam 3',
  book: 'Ignatavicius, Rebar & Heimgartner, Medical-Surgical Nursing',
  chapters: {
    '45': {
      checked: '2026-10-20',
      normal: { status: 'covered', hub: 'full', has: 'Physiology for every part (wall layers, mouth to colon, pancreas, liver and gallbladder), the quadrant map, and GI changes with aging.', added: 'Older-adult lab shifts from Table 45.2, added as an item in the aging topic, plus a line in the Why on age-shifted ranges vs critical values', left: 'A&P trivia (papillae, palate, cystic duct, bile secretion stimuli, lengths in metres); "especially after 65"', check: 'Any anatomy and physiology subsection or aging change the hub leaves out.' },
      assessment: { status: 'covered', hub: 'full', has: 'Box 45.1 history questions, nutrition history, PQRST, psychosocial, exam order (inspect → auscultate → palpate), bowel sounds, bruits, both action alerts.', added: 'Table 45.1 in full ("Organs by quadrant"); visible aortic pulsation vs a bulging pulsating mass', left: 'Contour-viewing technique (looking down from the bedside)', check: 'Every history subsection (e.g., family history and genetic risk) and any assessment table.' },
      conditions: { status: 'n/a', has: 'An assessment chapter: its findings are tied to the disorders of chapters 46–49.' },
      diagnostics: { status: 'covered', hub: 'full', has: 'Table 45.2 labs with ranges; stool tests and screening options; x-ray, CT, MRI/MRCP, ultrasound, EUS, liver-spleen scan; EGD, ERCP, capsule, colonoscopy, sigmoidoscopy, CT colonography.', added: 'Every Table 45.2 note and cause: ALT/AST/alk phos/amylase/calcium age, sex and race shifts; calcium critical < 6 or > 13; D-xylose ranges; ammonia, potassium, calcium, AST and alk phos causes; tumor-marker cancers. Stool DNA kit details. EUS care. Liver-spleen scan details. Esophagoscopy/gastroscopy (Fig. 45.5)', left: 'Barium studies and breath tests: **not in this chapter** of this edition, so nothing added', check: 'Any test the hub omits (e.g., barium studies) and every lab range against Table 45.2.' },
      management: { status: 'covered', hub: 'full', has: 'Preparation, sedation monitoring and aftercare for each procedure; bowel prep teaching; teach-back.', added: 'NPO definition (no water, no smoking); ERCP: stop IV fluids once oral fluids stay down; Box 45.2: no work needing focus', left: 'Capnometry and mass spectroscopy (equipment names)', check: 'Fasting hours, driving limits and diet after each test.' },
      complications: { status: 'covered', hub: 'full', has: 'Aspiration, slowed breathing under sedation, perforation, bleeding, pancreatitis and sepsis after ERCP, fluid loss from bowel prep; the pulsating-mass and rigidity alerts.', added: 'Box 45.2: ash-gray skin; report excessive bleeding or severe pain at once' },
      features: { status: 'covered', hub: 'thin', has: 'Box 45.1, Box 45.2 and Table 45.2 cited; action alerts, health equity and health literacy notes.', added: 'Table 45.1 cited and covered in full; Table 45.2 completed; Fig. 45.5 cited', check: 'Table 45.1 (never cited; probably the aging changes) and any box or table after these.' }
    },
    '46': {
      checked: '2026-10-20',
      normal: { status: 'covered', hub: 'full', has: 'The LES pressure gradient, what lowers LES pressure (Box 46.5), how reflux injures, why esophageal cancer spreads early, what saliva does.', left: 'The detail that salivary enzymes start carbohydrate digestion (the map says saliva begins digestion)' },
      assessment: { status: 'covered', hub: 'full', has: 'Mouth inspection, the PASS dysphagia screen, key features of oral cancer, GERD, hiatal hernia and esophageal cancer; atypical GERD in older adults.', added: 'Watching hydration for mouth breakdown; oral cancer: self-image, support system, educational, cultural and spiritual needs; asking about any history of cancer (genetics)' },
      conditions: { status: 'covered', hub: 'full', has: 'Stomatitis (exemplar), premalignant lesions, oral cancer, sialadenitis, xerostomia, GERD (exemplar), hiatal hernia, esophageal cancer, esophageal trauma.', added: 'How oral tumors affect chewing, swallowing, speech and body image; GERD can be silent at first; most hiatal hernias cause no symptoms', check: 'Esophageal diverticula (earlier editions had a section) or any other disorder not in this list.' },
      diagnostics: { status: 'covered', hub: 'full', has: 'Biopsy, EGD, ambulatory pH monitoring, manometry, barium swallow, EUS, PET, CT.', left: 'How manometry is done (technique only)' },
      management: { status: 'covered', hub: 'full', has: 'Oral care (Box 46.2) and mouth drugs; GERD diet and lifestyle; PPIs and their long-term cautions; Stretta (Box 46.7), fundoplication (Box 46.9) and LINX; oral cancer and esophagectomy care (Box 46.12); trauma care.', added: 'Pain-drug teaching (no driving); opioids for severe stomatitis; finishing antibiotics; LNF indications (including a large hiatal hernia); stents as palliation, with antibiotics against sepsis and endocarditis; long-term PPIs can mask symptoms; tracking weight and I&O before surgery; tube feeding or PN at home', left: 'Team member lists (see Left out)' },
      complications: { status: 'covered', hub: 'full', has: 'Airway obstruction and aspiration, Barrett\'s esophagus and stricture, fundoplication complications (Box 46.10), anastomotic leak and mediastinitis.', added: 'Bleeding and infection after LNF (uncommon)' },
      features: { status: 'covered', hub: 'full', has: 'Boxes 46.1–46.12 all cited.', added: 'Health Equity (HPV): regular oral cancer screening for men. Genetics: ask about cancer history; what TP53/p53 does. Older Adult (candidiasis): teach mouth care because prevention is easier than treatment. Box 46.2: give care if the patient can\'t; document the analgesic\'s effect', check: 'Any table (none cited) and anything after Box 46.12.' }
    },
    '47': {
      checked: '2026-10-20',
      normal: { status: 'covered', hub: 'full', has: 'The mucosal barrier and prostaglandins, why NSAIDs injure, how H. pylori survives acid, chronic gastritis and vitamin B₁₂.', added: 'Bismuth mechanism (in the drugs topic)', left: 'Graft-versus-host disease as a cause of chronic gastritis (trivia)' },
      assessment: { status: 'covered', hub: 'full', has: 'History, the pain pattern and a change in pain, orthostatics, signs of bleeding (Box 47.2), older adults.', added: 'Table 47.2 item in the PUD topic (it had been only in the overview pairs); psychosocial assessment (PUD topic and ADPIE A); "monitor VS often, report at once" for early detection of hemorrhage' },
      conditions: { status: 'covered', hub: 'full', has: 'Acute and chronic gastritis; peptic ulcer disease (duodenal, gastric, stress ulcers); hemorrhage, perforation, outlet obstruction; gastric cancer; dumping syndrome.', added: 'Erosive vs nonerosive classification; blood-borne spread is the most common route of metastasis', left: 'Cardia/noncardia labels; "pain proportional to contents spilled" in perforation' },
      diagnostics: { status: 'covered', hub: 'full', has: 'EGD with biopsy, H. pylori tests (serology, breath, stool), nuclear bleeding scan, labs; EUS and imaging for cancer.', added: 'Symptoms alone can\'t diagnose gastritis; biopsy names the type; repeat nuclear scan 1–2 days after treatment; trend Hgb/Hct plus coagulation studies' },
      management: { status: 'covered', hub: 'full', has: 'Table 47.1 drugs with timing, triple and quadruple therapy, the bleeding rescue, NG care, endoscopic hemostasis, embolization, surgery, managing dumping, home care (Box 47.3).', added: 'Admission criteria for gastritis; replace electrolytes (K⁺); midazolam plus opioid sedation; PPIs heal the ulcer once bleeding stops; home-care visits (older adults); gastric cancer treated by stage (early lap resection may cure; chemo/radiation prolong survival); discharge disposition after subtotal gastrectomy; community food resources', left: 'Al/Mg + simethicone combination; IORT; Whipple/radical surgery controversy' },
      complications: { status: 'covered', hub: 'full', has: 'Hemorrhage, perforation, outlet obstruction with metabolic alkalosis, acute gastric dilation, dumping, B₁₂, iron and folate deficits.', added: 'Fig. 47.2 sources of upper GI bleeding; early-detection monitoring line' },
      features: { status: 'covered', hub: 'full', has: 'Boxes 47.1–47.4 and Tables 47.1–47.2 cited.', added: 'Table 47.2 in full, Fig. 47.2, Fig. 47.3 cite', left: 'The book\'s "Get Ready … Essential Nursing Care Points" text is **absent from the extracted book file** (heading only), so it could not be audited' }
    },
    '48': {
      checked: '2026-10-20',
      normal: { status: 'covered', hub: 'full', has: 'Why obstruction causes hypovolemia, acid–base by the level of the block, strangulation and sepsis, polyp to cancer.', added: 'Definition of polyps (key term: most benign, some become malignant)', left: 'n/a. The chapter has little normal A&P.' },
      assessment: { status: 'covered', hub: 'full', has: 'History, temperature and pulse thresholds, small- vs large-bowel signs (Box 48.1), mechanical vs paralytic findings, trauma signs (Box 48.7), the hernia exam.', added: 'Box 48.1: LBO has minimal vomiting and no major F&E imbalance; SBO has severe F&E imbalance. Box 48.2: abdomen checked at least twice a day. Fig. 48.3: other causes of lower GI bleeding' },
      conditions: { status: 'covered', hub: 'full', has: 'Intestinal obstruction (exemplar), colorectal cancer, IBS, abdominal trauma, hernias, hemorrhoids.', added: 'Closed-loop defined (blocked at two points); polyps; IBS alternate names; Fig. 48.1 and 48.2 cited', left: 'Malabsorption is not a section of this chapter (n/a)', check: 'Polyps as a section of their own (the hub covers FAP and Lynch syndrome only as cancer risks).' },
      diagnostics: { status: 'covered', hub: 'full', has: 'Labs, CT/MRI, ultrasound, FAST, colonoscopy, FIT/FOBT, CEA, hydrogen breath test.', added: 'Stool-blood test prep now says it **depends on the test type** (text and Quick bullets), explains false positives, and cross-references ch 45\'s guaiac schedule. Screening bullet changed to FOBT/FIT' },
      management: { status: 'covered', hub: 'full', has: 'Box 48.2 nonsurgical care, the NG tube and fluids, alvimopan, surgery, cancer treatment, colostomy care, the AP-resection wound (Box 48.5), IBS drugs, hernia repair care (Box 48.8), hemorrhoid care.', added: 'Hernia: NPO is the most important pre-op teaching; discharge teaching (no driving on opioids, stool softener, soreness vs severe pain, what to report). Colostomy: site by tumor and emergency transverse (Fig. 48.4); ascending pouch worn at all times; no foods forbidden. Post-op course after open vs laparoscopic resection. Mouth care delegated to AP. Hemorrhoid fluid caveat' },
      complications: { status: 'covered', hub: 'full', has: 'Hypovolemia, strangulation, perforation, sepsis, compartment syndrome, stoma necrosis, perineal wound infection.', added: 'Severe hypovolemia → acute kidney injury' },
      features: { status: 'covered', hub: 'thin', has: 'Boxes 48.1, 48.2 and 48.4–48.8 cited.', added: 'Box 48.3 (missing); Legal/Ethical points (justice; surgery withheld after 85); figure citations and content for Figs 48.3 and 48.4', left: 'Essential Nursing Care Points: only the heading is in the supplied text', check: 'Box 48.3 (never cited; it falls between obstruction care and stoma-site marking).' }
    },
    '49': {
      checked: '2026-10-20',
      normal: { status: 'covered', hub: 'full', has: 'Why peritonitis empties the circulation, why the appendix perforates, lining vs all layers, why diverticula form and get infected.' },
      assessment: { status: 'covered', hub: 'full', has: 'Box 49.1 peritonitis features, the order of symptoms (appendicitis vs gastroenteritis), dehydration signs, UC and Crohn\'s assessment, older adults.', added: 'Appendicitis: pain that eases, then returns diffuse = perforation (NGN 49.1). Amebiasis can be asymptomatic; rectal ulcers → blood on formed stool' },
      conditions: { status: 'covered', hub: 'full', has: 'Peritonitis (exemplar), appendicitis, gastroenteritis, UC (exemplar), Crohn\'s disease, diverticular disease, celiac disease, parasitic infections, Chagas disease.', added: 'Peritonitis → hospitalized, critical care if complications are extensive. Table 49.2 "nutritional deficiencies" in both UC and Crohn\'s', left: 'No anal disorders or food poisoning in this edition (not gaps)', check: 'Anal disorders (anorectal abscess, anal fissure, anal fistula) and food poisoning: earlier editions had sections; the hub has neither.' },
      diagnostics: { status: 'covered', hub: 'full', has: 'WBC patterns, blood cultures, CRP/ESR, MR enterography, colonoscopy, CT, x-ray, stool analysis, celiac testing; UC severity (Table 49.3).' },
      management: { status: 'covered', hub: 'full', has: 'Antibiotics, fluids and surgery; what never to do in appendicitis; oral rehydration; 5-ASA drugs, steroids, biologics; J-pouch and ileostomy (Boxes 49.3–49.4); fistula care; diverticulitis diet; gluten-free diet; amebicides.', added: 'Priority assessment = fluid + electrolytes (NCLEX 49.1). Routine post-op care after peritonitis surgery: O₂ until awake, incentive spirometry, SCDs, IV fluids and IV antibiotics continue (NGN 49.1). Handwashing = best prevention (now an item). Outpatient vs admit criteria for amebiasis. Suction is short-term; the VAC heals by secondary intention. AP perineal care. Strenuous activity in ileostomy salt/water teaching. Complementary therapies in Crohn\'s' },
      complications: { status: 'covered', hub: 'full', has: 'Third spacing and shock, sepsis, perforation, toxic megacolon, hemorrhage, fistulas, malnutrition, colorectal cancer after 10 years of UC, PML.', added: 'Amebic obstruction; the perforation cue' },
      features: { status: 'covered', hub: 'full', has: 'Boxes 49.1–49.5, Tables 49.1–49.5 and Fig. 49.4 cited.', added: 'Figure cites. Notes lines for NCLEX 49.1 and NGN 49.1. Practice items for NCLEX 49.1 and 49.3, Mastery 1 and 3, NGN 49.1.1, 49.1.3 and 49.1.5', left: 'NGN 49.1.2 (one finding fits several conditions, which the hub\'s matrix format can\'t hold) and 49.1.6 (evaluation): content is in the notes' }
    },
    '53': {
      checked: '2026-10-20',
      normal: { status: 'covered', hub: 'full', has: 'Receptors, simple and axis feedback, hypothalamus and pituitary (Tables 53.1, 53.3), adrenal cortex and medulla (Table 53.2), thyroid (Box 53.2), parathyroid, pancreas, pineal.', added: 'Gonads box (dormant until puberty; FSH/LH → testosterone/estrogen → secondary sex characteristics). Homeostasis item (temp 98.6°F; **serum Na 136–145 mEq/L at 2 g or 12 g intake**). Thyroid-axis item (**cold and stress trigger TRH**). α1/α2, β1/β2/β3 subtypes. Tropic hormones, corticotropin/thyrotropin, prolactin row. Bone as the main calcium store', left: 'Adrenal location and cortex layers, neurophysins, PTH effects on bicarbonate and sodium (trivia)', check: 'The gonads (earlier editions had a section; the hub names them only as FSH and LH targets).' },
      assessment: { status: 'covered', hub: 'full', has: 'History (Box 53.4), nutrition clues, inspection, auscultation, thyroid palpation and its action alert, psychosocial.', added: '**Menarche, menopause, menstrual pattern**, past hospitalizations. Prescribed **and OTC** drugs. **Box 53.3** cited with every source and example, and the fact that the body can\'t make iodine. Box 53.4 past treatment and effect on ADLs. Breasts of men and women, chest, hirsutism sites, genital size. **Who palpates the thyroid and testes**. Document skin changes against baseline', left: 'Vitiligo body sites, mucous-membrane pigment (minor)' },
      conditions: { status: 'n/a', has: 'An assessment chapter: its findings point to chapters 55 and 56.' },
      diagnostics: { status: 'covered', hub: 'full', has: 'Blood, urine and saliva tests; stimulation and suppression tests; Box 53.5 collection rules and the 24-hour urine; glucose and A1C; imaging, thyroid scan, FNA.', added: 'Preservative in the container **from the start**; note the time; **exactly** 24 h; the same rules for 2-, 4-, 8- and 12-h collections; OTC drugs' },
      management: { status: 'covered', hub: 'full', has: 'The nurse\'s part in testing, fluids and skin care for older adults, teaching about hormone misuse.', added: '"Protect skin integrity"; teach the diabetes signs to report; "unless contraindicated"; teach **all** patients about hormone/steroid misuse; report **complications of testing** (NGN key point)' },
      complications: { status: 'covered', hub: 'thin', has: 'Dehydration with low ADH reserve, thyroid storm from palpation, glucose and electrolyte crises — named here, detailed in later chapters.', added: 'Report complications of endocrine testing (ADPIE I)', left: 'Nothing else in the book' },
      features: { status: 'covered', hub: 'thin', has: 'Boxes 53.1, 53.2, 53.4 and 53.5 and Tables 53.1–53.3 cited.', added: 'Box 53.3 cited; Table 53.1 (gonad hormones), 53.2 (subtypes) and 53.3 (prolactin, ACTH growth) completed; NCLEX/Mastery points now in practice', check: 'Box 53.3 (never cited; probably the aging changes, which the hub covers).' }
    },
    '55': {
      checked: '2026-10-20',
      normal: { status: 'covered', hub: 'full', has: 'Why a goiter appears in both diseases, what myxedema is, the heart in each disease, hypermetabolism, calcium and PTH.', added: 'The gland needs iodine and tyrosine; primary vs secondary vs tertiary pattern (in the Table 55.1 item)', left: 'Nothing consequential' },
      assessment: { status: 'covered', hub: 'full', has: 'Boxes 55.2 and 55.4, eye signs, look-don\'t-touch neck, Table 55.1 labs, calcium checks (Chvostek, Trousseau).', added: 'Box 55.2 gaps: hearing loss, poor wound healing, confusion, nonpitting edema of the hands and feet, hypoventilation, slurred speech, abdominal distention, dry coarse hair, anovulation, fatigue, male infertility, withdrawn. Box 55.4: hyperactivity, irritability, lower fertility, gradual onset, persistence after surgery/RAI', left: 'Nothing consequential' },
      conditions: { status: 'covered', hub: 'full', has: 'Hypothyroidism (exemplar), myxedema coma, Graves disease and other causes of hyperthyroidism, thyroid storm, thyroiditis, thyroid cancer, hypo- and hyperparathyroidism.', added: 'Missing Box 55.1 and 55.7 causes; subacute thyroiditis can stay euthyroid; papillary reaches lymph nodes; anaplastic invasive and hard to treat; myxedema coma → shock, organ damage, death', left: 'Incidence trivia (see Left out)' },
      diagnostics: { status: 'covered', hub: 'full', has: 'T3, T4 and TSH patterns, TRAb, radioactive iodine uptake, ultrasound, ECG, Table 55.3 parathyroid labs, 24-hour urine calcium.', added: 'All Table 55.1 ranges with SI units (T3 by age, total T4 by sex and age over 60, free T4, TSH) and the full high/low pattern incl. tertiary; Table 55.3 SI units, vitamin D variable in hyperparathyroidism, high calcium = primary; Ca 12 mg/dL = 3.0 mmol/L', left: 'Nothing' },
      management: { status: 'covered', hub: 'full', has: 'Levothyroxine, thionamides, SSKI and beta blockers (Table 55.2), RAI precautions (Box 55.5), thyroidectomy care, emergency care (Boxes 55.3 and 55.6), eye care, calcium and vitamin D, cinacalcet, parathyroidectomy.', added: 'Workup for a patient still tired and cold on levothyroxine (VS, temperature, medication record, TSH); caregivers informed; home health; older adults judged by symptoms; SSKI time course; RAI second dose, clears in a month, back to work in days; surgery for severe disease or intolerance; cinacalcet indications; monitoring calcium, kidney function and bone density without surgery; extent of parathyroidectomy; adherence prevents hypocalcemic crisis', left: 'Nothing' },
      complications: { status: 'covered', hub: 'full', has: 'Myxedema coma, thyroid storm, bleeding, airway obstruction, hypocalcemia and nerve injury after thyroidectomy, hypercalcemic confusion, hypocalcemia after parathyroidectomy.', added: 'Myxedema coma topic: respiratory failure as main cause of death, shock/organ damage, new item on IV hormone cardiac risk and sedative/opioid avoidance', left: 'Nothing' },
      features: { status: 'covered', hub: 'full', has: 'Boxes 55.1–55.7 and Tables 55.1–55.3 cited.', added: 'Missing items inside Table 55.1, Table 55.3, Box 55.2, Box 55.7, Older Adult box and the myxedema Action Alert', left: 'Figures not cited by number (content covered); the book file\'s "Essential Nursing Care Points" is empty, so it could not be compared' }
    },
    '56': {
      checked: '2026-10-20',
      normal: { status: 'covered', hub: 'full', has: 'Insulin, glucagon and the balancing hormones, incretins, life without insulin (Box 56.2), the three Ps, ketones and Kussmaul breathing, potassium shifts.', added: 'The fasting state (8+ h or NPO): glycogenolysis and gluconeogenesis prevent a low; glycogenesis and lipogenesis store fuel; ketogenesis makes acid fuel, not glucose (tested by NCLEX 56.1)', left: 'Trivia left out: islet count, 51 amino acids, proinsulin' },
      assessment: { status: 'covered', hub: 'full', has: 'History and physical (feet, injection sites, orthostatics, breath), screening (Box 56.3), diagnosis (Table 56.3, Box 56.4), hypoglycemia symptoms (Box 56.10).', added: 'Box 56.8: "prolonged" capillary refill, with a hedge on the printed number; teach a family member when the patient can\'t inspect their own feet', left: 'None consequential' },
      conditions: { status: 'covered', hub: 'full', has: 'Type 1, type 2, LADA, MODY, gestational diabetes, prediabetes, metabolic syndrome, large- and small-vessel complications, hypoglycemia, DKA, HHS, dawn and Somogyi.', added: 'Metabolic syndrome is diagnosed with **≥ 3 features** (Fig. 56.5), plus the figure\'s other signs', left: 'Left out: Table 56.2 former names and inheritance patterns, Canada statistics' },
      diagnostics: { status: 'covered', hub: 'full', has: 'A1C, fasting, OGTT and random glucose; CGM; meter accuracy; ketones, ABGs, osmolarity; urine albumin.', added: 'Table 56.4 rows **11 ≈ 269** and **12 ≈ 298**, cited; individualized targets; CGM calibration in the book\'s wording; daily BGM for patients not on insulin; Fig. 56.1 reference range 74–106' },
      management: { status: 'covered', hub: 'full', has: 'Every drug class (Table 56.5); insulin (Table 56.6, Box 56.5); nutrition and exercise (Box 56.7); the 15-15 rule (Box 56.11); DKA and HHS treatment (Table 56.9); sick days (Box 56.12); foot care (Boxes 56.8–56.9, Table 56.7); kidneys; hospital and surgery; pancreas transplant; teaching (Boxes 56.13–56.15).', added: 'Box 56.6 (new item); syringe sizes, needle gauges and lengths; drink equivalents; sulfonylurea vs meglitinide action; TZD heart deaths; insulin analogs and type changes; glulisine, detemir and degludec onsets; injection areas and the reason for rotation; RDN yearly review; Interprofessional Collaboration team (new item); transplant graft and HLA points; older-adult activity details', left: 'Smart-pen app features, meter "code" details' },
      complications: { status: 'covered', hub: 'full', has: 'Hypoglycemia, DKA, HHS, cerebral edema, hypokalemia; retinopathy, nephropathy, neuropathy, foot ulcers and Charcot foot; infection; surgical risks.', added: 'Stroke risk add-ons; sweating while eating (Table 56.1); inpatient causes of lows; symptoms can outlast the low (Box 56.11); caffeine-free sick-day fluids; post-op protein/nitrogen and CVP', left: 'Fig. 56.12 minor electrolytes (Ca, Mg, PO₄)' },
      features: { status: 'covered', hub: 'thin', has: 'Boxes 56.1–56.5 and 56.7–56.15 and Tables 56.1–56.3 and 56.5–56.9 cited.', added: 'Box 56.6; Fig. 56.1, 56.5 and 56.7 content; Interprofessional box; practice for NCLEX 56.1, 56.3, Mastery 2 and 4, and NGN 56.1.3', left: '"Get Ready… Essential Nursing Care Points" is a heading only in the source text (no content to compare)', check: 'Box 56.6 and Table 56.4 (never cited).' }
    }
  },
  verify: [
    { id: 'V1', ch: '45', status: 'settled', claim: 'Under sedation, "RR below 10 or exhaled CO₂ below 20% → sternal rub."',
      why: 'Capnography is read in mmHg (normally about 35–45), so "below 20%" doesn\'t match how it is measured. The book may mean a 20% drop from baseline. A question repeats the wording.',
      resolution: 'It is the book\'s own wording (ch 45, moderate sedation for EGD and colonoscopy): respirations below 10 or exhaled CO₂ falling below 20% call for a stimulus such as a sternal rub. The notes and the question keep it.',
      where: /CO₂ (falls )?(below|<) ?20/ },
    { id: 'V2', ch: '45, 48', status: 'settled', claim: 'Stool blood test preparation: ch 45 says no NSAIDs for 7 days and no red meat or vitamin C over 250 mg for 3 days; ch 48 says avoid aspirin, vitamin C, iron and red meat for 48 hours.',
      why: 'Two different rules for the same test. The questions use the chapter 45 version.',
      resolution: 'Both rules are the book\'s. Ch 45 (guaiac test): no NSAIDs for 7 days, no red meat or vitamin C over 250 mg for 3 days. Ch 48: preparation depends on the test, and some call for no aspirin, vitamin C, iron or red meat for 48 hours. The ch 48 notes now say it depends on the test and point to the ch 45 schedule.',
      where: /red meat/ },
    { id: 'V3', ch: '45, 47', status: 'settled', claim: 'Fasting before EGD: 6–8 hours (ch 45, planned scope) vs 4–6 hours (ch 47, scope to stop bleeding).',
      why: 'Probably both are in the book (planned vs urgent), but the hub doesn\'t say why they differ.',
      resolution: 'Both are the book\'s: NPO 6–8 hours before a planned EGD (ch 45), and 4–6 hours before endoscopic therapy to stop bleeding (ch 47).',
      where: /NPO (for )?(6–8|4–6)/ },
    { id: 'V4', ch: '49', status: 'settled', claim: 'Peritonitis: "the provider orders hypertonic IV fluids and broad-spectrum antibiotics immediately."',
      why: 'Fluid replacement for hypovolemia is normally isotonic, and the other chapters use normal saline or lactated Ringer\'s. If the book says hypertonic, answer by the book and say so in the notes.',
      resolution: 'It is the book\'s wording (ch 49): the provider prescribes hypertonic IV fluids and broad-spectrum antibiotics. The notes keep it and add that lost volume is usually replaced with isotonic fluids (normal saline or lactated Ringer\'s), as in ch 47.',
      where: /hypertonic IV fluids/ },
    { id: 'V5', ch: '56', status: 'settled', claim: 'Metabolic syndrome includes "BP ≥ 140/90".',
      why: 'The usual criteria use 130/85; every other number in the same list matches the usual criteria.',
      resolution: 'It is the book\'s number (ch 56, Fig. 56.5): BP ≥ 140/90, with at least 3 of the features needed for the diagnosis. The notes keep it and flag that many guidelines use 130/85.',
      where: /BP ≥ 140\/90/ },
    { id: 'V6', ch: '56', status: 'settled', claim: 'Blood pressure target: "< 140/90" under heart disease but "< 140/80" under kidneys and in the nursing process.',
      why: 'Two targets in one chapter; check which the book gives, and where.',
      resolution: 'Both are the book\'s: the cardiovascular section gives < 140/90 (120/80 for younger adults if it can be reached without excessive burden), the kidney section < 140/80. The notes now say which section gives which.',
      where: /BP (<|below) ?140\/(80|90)/ }
  ],
  // Numbered features the first pass found uncited, and what they turned out to be.
  features: {
    'Table 45.1': 'Location of body structures by abdominal quadrant and midline. Now in full in the abdominal exam ("Organs by quadrant").',
    'Box 48.3': 'Healthy People 2030 colorectal cancer objectives: lower the death rate, screen more adults. Added to the screening notes.',
    'Box 53.3': 'Common sources of dietary iodine. Was in the nutrition clues without its number; now cited, with every source.',
    'Table 56.4': 'A1C and estimated average glucose. The hub had rows 6–10; rows 11 (≈ 269) and 12 (≈ 298) added.',
    'Box 56.6': 'Desired outcomes of nutrition therapy. Added as its own item.'
  },
  // Errors in the hub found by the comparison, and how each was fixed.
  corrections: [
    { date: '2026-10-19', ch: '49', what: 'Crohn\'s drugs: natalizumab was listed among the TNF-alpha inhibitors.',
      fix: 'Now says natalizumab keeps white cells from leaving the blood for the tissues (alpha-4 integrin), as the drug card, breakdown and questions do. The book itself lists it with the TNF-alpha inhibitors and their cautions, so the notes also carry an exam note saying so.' },
    { date: '2026-10-20', ch: '45', what: 'ALT and AST were said to rise much more in hepatitis than in cirrhosis, and Clostridium difficile had been silently renamed.',
      fix: 'Now the book\'s grading (a significant rise in hepatitis, moderate in cirrhosis, mild in pancreatitis), and the book\'s organism name with the current one (Clostridioides) in brackets.' },
    { date: '2026-10-20', ch: '46', what: 'Paraesophageal hiatal hernias were said to need surgery "often" (notes and two practice items); GERD\'s 18–28% read as if it applied to younger adults; "many" hiatal hernias were asymptomatic; Stretta was "not for obesity".',
      fix: 'The book favors medical care when possible, with surgery for volvulus, bleeding, obstruction, strangulation, perforation or breathing compromise; 18–28% of North American adults; most are asymptomatic; patients with obesity or severe symptoms may not be candidates.' },
    { date: '2026-10-20', ch: '47', what: 'Gastric-ulcer pain was "not relieved by food"; practice item 47|n|3 called quadruple therapy (with bismuth) triple therapy; the sucralfate drug card said to keep other drugs 2 hours apart.',
      fix: 'Table 47.2: gastric-ulcer pain is worsened by eating and rarely comes at night (the full table is now in the notes); the item now says quadruple therapy and names the drugs; the card gives Table 47.1\'s rule (not within 30 minutes of antacids or other drugs) beside the 2-hour spacing drug references use for drugs sucralfate binds.' },
    { date: '2026-10-20', ch: '48', what: 'The overview said alosetron causes ischemic colitis by slowing the gut; the screening bullet said "FIT yearly".',
      fix: 'Alosetron slows the gut and can cause severe constipation or ischemic colitis (the book\'s complications, without the causal claim); FOBT or FIT yearly, as the book has it.' },
    { date: '2026-10-20', ch: '49', what: 'Practice item 49|n|0 tied rebound tenderness to perforation.',
      fix: 'Its rule now gives the book\'s cue: pain that worsens with coughing or moving and eases when the right hip or knees are flexed; rebound tenderness may also be found.' },
    { date: '2026-10-20', ch: '53', what: 'The aging rule listed the ovaries among the exceptions.',
      fix: 'The book\'s one exception is the enlarging prostate; ovarian function still declines, only faster.' },
    { date: '2026-10-20', ch: '55', what: 'The hyperparathyroidism lab row left out vitamin D and the "primary" qualifier on high calcium.',
      fix: 'Table 55.3 in full: vitamin D variable, calcium high in primary disease, SI units added.' },
    { date: '2026-10-20', ch: '56', what: 'CGM: "some" sensors need two calibrations a day; older adults\' exercise sessions of "5–10 minutes"; two insulin Quick bullets (the rapid-acting peak, detemir\'s duration).',
      fix: 'The book\'s versions: most sensors; sessions under 5–10 minutes; peak about 0.5–3 hours; detemir 12–24 hours (degludec 24+).' }
  ],
  // Where the book itself is unusual (a misprint, an internal contradiction, a dated or loose statement), and what the hub does.
  oddities: [
    { ch: '45', what: 'Under moderate sedation, act when "exhaled CO₂ falls below 20%", though capnography is read in mmHg.',
      hub: 'Kept as the book\'s wording (V1).' },
    { ch: '45', what: 'Table 45.2 prints ammonia as 10–80 mg/dL; the usual unit is mcg/dL.',
      hub: 'Shows 10–80 mcg/dL and notes the misprint.' },
    { ch: '45', what: 'Serum amylase stays up "for up to 5 days" in one paragraph but is back to normal "within 1 to 2 days" in the next.',
      hub: 'Keeps about 5 days for serum amylase, 5–7 days for urine amylase.' },
    { ch: '46', what: 'Nystatin suspension is "swish and spit" (many references say swish and swallow); "translators" where spoken-language interpreters are meant.',
      hub: 'Follows the book; says "translators (interpreters)".' },
    { ch: '47', what: 'Acute gastritis heals in "several months" in the chapter opening but in "a few days" twice later.',
      hub: 'Uses a few days.' },
    { ch: '47', what: 'The urea breath test uses "radioactive" ¹³C urea; ¹³C is a stable isotope (¹⁴C is the radioactive one).',
      hub: 'Says labeled carbon.' },
    { ch: '48', what: 'Box 48.7 puts Cullen sign at the "flank area or umbilicus"; the double-barrel colostomy is "common in emergencies" in Fig. 48.4 but the least common type in the text; surgery is withheld for colorectal cancer found after 85.',
      hub: 'Cullen = umbilicus and Turner = flank (standard); both colostomy statements and the over-85 rule kept as the book gives them.' },
    { ch: '49', what: 'Peritonitis: "hypertonic IV fluids" (V4).',
      hub: 'Kept, with a note that lost volume is usually replaced with isotonic fluids.' },
    { ch: '49', what: 'Natalizumab is grouped with the TNF-alpha inhibitors and their "not with multiple sclerosis" caution, though natalizumab is itself an MS drug.',
      hub: 'The real mechanism in the notes, plus an exam note on the book\'s grouping.' },
    { ch: '49', what: 'The J-pouch\'s second stage comes "within 1–2 months" in the text but after "several months" in the Fig. 49.2 caption.',
      hub: 'Follows the text.' },
    { ch: '53', what: 'Table 53.3 calls FSH "interstitial cell–stimulating hormone" in males (ICSH is normally LH); hysterectomy causes "surgical menopause" (strictly, removing the ovaries does).',
      hub: 'ICSH left out of the notes; surgical menopause kept as the book\'s.' },
    { ch: '55', what: 'Report a temperature rise of "even 1°F (1.8°C)"; a 1°F rise is about 0.5°C.',
      hub: 'Keeps 1°F, with a note on the conversion.' },
    { ch: '56', what: 'Box 56.8 prints capillary refill "greater than 25 seconds"; normal refill is under about 3 seconds.',
      hub: 'Says prolonged capillary refill and flags the printed number as doubtful.' },
    { ch: '56', what: 'Metabolic syndrome uses BP ≥ 140/90 (V5), and "most" CGM sensors need two capillary calibrations a day, though many current sensors are factory-calibrated.',
      hub: 'Both kept as the book gives them; the BP cutoff is flagged.' }
  ],
  // What the comparison could not check.
  limits: [
    'Each chapter\'s "Get Ready for the Next-Generation NCLEX Examination! Essential Nursing Care Points" came through in the pasted text as a heading only, so those key points were not compared.',
    'Figures were compared through their captions and the text that refers to them; the images themselves were not available.'
  ]
};
