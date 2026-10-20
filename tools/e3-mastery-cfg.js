// ---------- Exam config: everything specific to this exam, from here to “End of the exam config”. ----------
// Exam 3's block for the Mastery test. tools/build_e3_mastery.js puts it in place of Exam 2's block and writes
// Exam 3 Mastery Loop.dc.html, so both exams run the same engine. Edit here, then run: node tools/build_e3_mastery.js
//
// From the professor's Exam 3 study guide: BP gives each chapter its share of the 60-question exam, GUIDE lists the
// study-guide topics (17 in all, so even a 20-question test asks each one), and GUIDE_OFF marks what the guide leaves
// out of the chapters it narrows (53, 45, 46).
// Chapters 48 and 49 are not on Exam 3 (the professor said so); their notes stay on the map.
const CHS = ['45', '46', '47', '53', '55', '56'];
// The professor's Exam 3 study guide (60 questions): ch 53 → 5, 56 → 20, 55 → 10, 45 → 5, 46 → 10, 47 → 10.
const BP = { '45': 5, '46': 10, '47': 10, '53': 5, '55': 10, '56': 20 };
const OFF_GUIDE_PICKS = {};
const SKILLS = ['Drugs & mechanisms', 'Pathophysiology', 'Priority & safety', 'Recognizing cues'];
// The study guide: for 53, 45 and 46 the items it names; 47, 55 and 56 are on it whole (their main topics).
// The words after each name tie a question to it.
// With "Everything" selected, every test asks each topic at least once, in the chapter mix (BP).
const GUIDE = {
  '45': [['GI changes with aging', /aging|older adult|age-related|elderly|\b[6-9]\d-year-old|achlorhydria|hypochlorhydria|presbyesophagus|lipase|impaction/i],
         ['Organs by quadrant (Table 45.1)', /quadrant|\bRUQ\b|\bLUQ\b|\bRLQ\b|\bLLQ\b|right upper|left upper|right lower|left lower|midline|Table 45\.1/i]],
  '46': [['Healthy mouth & oral care (Boxes 46.1–46.2)', /oral (care|hygiene|cavity)|mouth care|mouth rinse|self-exam|floss|toothbrush|brush|dentures?|dentist|stomatitis|mucositis|chlorhexidine|clotrimazole|nystatin|viscous lidocaine|Box 46\.[12]/i],
         ['GERD', /GERD|reflux|heartburn|pyrosis|dyspepsia|regurgitat|water brash|eructation|Barrett|lower esophageal sphincter|\bLES\b|proton pump|\bPPI\b|omeprazole|pantoprazole|esomeprazole|famotidine|\bH2\b|antacid|alginate|Stretta|LINX/i],
         ['Hiatal hernia', /hiatal|sliding hernia|paraesophageal|rolling hernia|fundoplication|Nissen|gas bloat/i]],
  '47': [['Gastritis & peptic ulcer disease', /gastritis|peptic|ulcer|\bPUD\b|duodenal|H\. pylori|Helicobacter|urea breath|NSAID|aspirin|alcohol|stress ulcer|intrinsic factor|B₁₂|B12|pernicious|proton pump|\bPPI\b|omeprazole|pantoprazole|famotidine|\bH2\b|antacid|sucralfate|misoprostol|bismuth|clarithromycin|amoxicillin|metronidazole|tetracycline|epigastric/i],
         ['Upper GI bleeding & gastric cancer', /bleed|hemorrhag|hematemesis|melena|coffee[- ]ground|hypovolem|shock|transfus|large-bore|perforat|rigid|boardlike|peritonitis|pyloric|obstruct|octreotide|endoscop|gastric cancer|stomach cancer|gastrectomy|Billroth|dumping|postprandial|anastomo|bile reflux/i]],
  '53': [['Pancreas, thyroid & parathyroid', /pancrea|insulin|glucagon|islet|somatostatin|thyroid|\bT3\b|\bT4\b|\bTSH\b|\bTRH\b|calcitonin|iodine|goiter|parathyroid|\bPTH\b|calcium/i],
         ['Endocrine changes with aging', /aging|older adult|age-related|elderly|\b[6-9]\d-year-old|menopaus/i],
         ['24-hour urine test', /24-hour|24 hours?|urine (collection|specimen|test)|preservative|timed (urine|collection)/i]],
  '55': [['Hypothyroidism & myxedema coma', /hypothyroid|myxedema|Hashimoto|levothyroxine|cold intoleran|weight gain|lethargy|constipat|bradycard|hypotherm|hypoventilat|TSH (high|elevated|rises)|sensitive to (sedat|opioid)|thyroid hormone replacement/i],
         ['Hyperthyroidism, thyroidectomy & thyroid storm', /hyperthyroid|Graves|exophthalm|goiter|thyroid storm|thyrotoxic|thyroidectomy|methimazole|propylthiouracil|\bPTU\b|iodine|SSKI|radioactive|\bRAI\b|propranolol|beta[- ]?blocker|heat intoleran|tachycard|eye (protect|care)|laryngeal|stridor|thyroiditis|thyroid cancer/i],
         ['Parathyroid disorders & calcium', /parathyroid|\bPTH\b|calcium|hypocalc|hypercalc|phosph|tetany|Chvostek|Trousseau|tingling|stones|bones|groans|calcitriol|vitamin D|cinacalcet|calcium gluconate|parathyroidectomy/i]],
  '56': [['Diagnosing & monitoring diabetes', /type 1|type 2|prediabetes|gestational|risk|screen|A1C|fasting|OGTT|random|glucose (meter|level|reading|monitor)|blood glucose|\bCGM\b|continuous glucose|time in range|metabolic syndrome|autoimmune|insulin resistance|polyuria|polydipsia|polyphagia/i],
         ['Insulin & diabetes drugs', /insulin|lispro|aspart|glulisine|regular|NPH|glargine|detemir|degludec|basal|bolus|correction|injection|pen|pump|rotate|storage|metformin|sulfonylurea|glipizide|glyburide|repaglinide|pioglitazone|sitagliptin|DPP-4|GLP-1|semaglutide|liraglutide|SGLT2|empagliflozin|acarbose|pramlintide|lactic acidosis|contrast/i],
         ['Hypoglycemia, DKA & HHS', /hypoglyc|15-15|15 g|glucagon|D50|dextrose|DKA|ketoacidosis|ketone|Kussmaul|fruity|anion gap|HHS|hyperosmolar|osmolar|potassium|bicarbonate|IV insulin|fluid (resuscitat|replace)|0\.9%|sick day|unaware/i],
         ['Complications, foot care & self-management', /complication|retinopathy|nephropathy|neuropathy|microvascular|macrovascular|cardiovascular|stroke|foot|feet|shoe|ulcer|amputat|albumin|kidney|eye exam|carbohydrate|meal|diet|exercise|activity|alcohol|self-management|teach|surgery|NPO|hospital|perioperative|steroid/i]]
};
const GUIDE_N = Object.keys(GUIDE).reduce((a, c) => a + GUIDE[c].length, 0);
// Chapter content that is not on the study guide. Empty until the study guide names what is left out.
// What the study guide leaves out of the chapters it narrows: a question about the first pattern is off the guide
// unless it is also about the second.
const GUIDE_OFF = {
  '45': [/colonoscop|sigmoidoscop|bowel prep|\bEGD\b|\bERCP\b|capsule|endoscop|\bCT\b|\bMRI\b|ultrasound|x-ray|\bALT\b|\bAST\b|bilirubin|amylase|occult|\bFIT\b|stool DNA|\bCEA\b|sedation/i, /aging|older adult|age-related|quadrant|RUQ|LUQ|RLQ|LLQ/i],
  '46': [/oral cancer|leukoplakia|erythroplakia|squamous|esophageal cancer|esophagectomy|esophageal (trauma|injur|perforation)|Boerhaave|caustic|salivary|sialadenitis|xerostomia|mandibulectomy|glossectomy/i, /GERD|reflux|hiatal|fundoplication|oral care|mouth care|stomatitis|dentures|floss/i],
  '53': [/adrenal|aldosterone|cortisol|catecholamine|epinephrine|\bACTH\b|growth hormone|gonad|testes|ovar|COVID|palpat|inspect|auscultat/i, /pancrea|insulin|glucagon|thyroid|parathyroid|calcium|aging|older adult|24-hour|first morning void|cooler|preservative/i]
};
const guideName = k => { const [c, i] = k.split(':'); return (GUIDE[c] || [])[+i] ? GUIDE[c][+i][0] : k; };
// The subtopics inside each topic (keyed chapter:item), so a test spreads a topic's questions across them
// and rotates to the ones you've seen least. A question can sit in more than one.
const GUIDE_SUB = {
  '45:0': [['What changes with age', /achlorhydria|hypochlorhydria|lipase|presbyesophagus|motility|liver|drug|B12|B₁₂|iron|calcium/i],
           ['What to watch & teach', /constipat|impaction|fiber|fluid|teach|fall|appetite|older adult/i]],
  '45:1': [['Which organ, which quadrant', /quadrant|RUQ|LUQ|RLQ|LLQ|midline|right upper|left upper|right lower|left lower/i]],
  '46:0': [['Keeping the mouth healthy (Box 46.1)', /self-exam|floss|brush|dentist|dentures?|water|tobacco|alcohol|diet|sun/i],
           ['Caring for a sore mouth (Box 46.2)', /oral care|mouth care|rinse|saline|chlorhexidine|lidocaine|soft|toothbrush|every 2 hours|stomatitis|candid|nystatin|clotrimazole/i]],
  '46:1': [['GERD: why & what you see', /GERD|reflux|heartburn|pyrosis|regurgitat|water brash|eructation|lower esophageal sphincter|\bLES\b|cough|hoarse|dental/i],
           ['GERD complications', /Barrett|stricture|esophagitis|dysphagia|adenocarcinoma|aspiration/i],
           ['Diet & lifestyle', /meal|eat|bedtime|head of (the )?bed|elevat|weight|chocolate|caffeine|fatty|peppermint|alcohol|smok|tight|bend|lie down/i],
           ['GERD drugs', /proton pump|\bPPI\b|omeprazole|pantoprazole|esomeprazole|famotidine|\bH2\b|antacid|alginate|metoclopramide/i]],
  '46:2': [['Sliding vs paraesophageal', /sliding|paraesophageal|rolling|type (I|II)|volvulus|strangulat/i],
           ['Fundoplication care', /fundoplication|Nissen|gas bloat|dysphagia|\bNG\b|post-?op|semi-Fowler|ambulat/i],
           ['Living with it', /upright|meals|bend|lift|weight|head of (the )?bed|small/i]],
  '47:0': [['Gastritis', /gastritis|atrophic|erosive|alcohol|intrinsic factor|B₁₂|B12|pernicious/i],
           ['H. pylori & triple therapy', /H\. pylori|Helicobacter|urea breath|clarithromycin|amoxicillin|metronidazole|tetracycline|bismuth|triple|quadruple/i],
           ['NSAIDs & stress ulcers', /NSAID|ibuprofen|aspirin|naproxen|stress ulcer|Curling|Cushing|misoprostol/i],
           ['Gastric vs duodenal ulcer pain', /gastric ulcer|duodenal|epigastric|pain (after|before|with)|eating|food|night/i],
           ['Ulcer & acid drugs', /proton pump|\bPPI\b|omeprazole|pantoprazole|famotidine|\bH2\b|antacid|sucralfate|misoprostol|bismuth|aluminum|magnesium/i]],
  '47:1': [['Recognizing upper GI bleeding', /bleed|hematemesis|melena|coffee[- ]ground|tarry|hemoglobin|hematocrit|BUN/i],
           ['Shock & first actions', /hypovolem|shock|tachycard|hypotens|large-bore|transfus|fluid|first|priority/i],
           ['Perforation & obstruction', /perforat|rigid|boardlike|peritonitis|pyloric|obstruct|vomit/i],
           ['Gastric cancer', /gastric cancer|stomach cancer|indigestion|early satiety|weight loss|Virchow|adenocarcinoma/i],
           ['After gastrectomy & dumping', /gastrectomy|dumping|postprandial|lie down|small(er)? (frequent )?meals|fluids? (between|with) meals|B₁₂|B12|bile reflux|anastomo/i]],
  '53:0': [['Pancreas: insulin & glucagon', /pancrea|insulin|glucagon|islet|somatostatin|beta cell|alpha cell/i],
           ['Thyroid hormones', /thyroid|\bT3\b|\bT4\b|\bTSH\b|\bTRH\b|calcitonin|iodine|goiter/i],
           ['Parathyroid & calcium', /parathyroid|\bPTH\b|calcium|vitamin D|phosph/i]],
  '53:1': [['Less ADH & fluids', /\bADH\b|vasopressin|dehydrat|thirst|fluid/i],
           ['Less estrogen', /estrogen|bone|cystitis|perineal|menopaus/i],
           ['Glucose tolerance', /glucose|diabetes|wound|candid|yeast/i]],
  '53:2': [['Collecting it right', /24-hour|discard|void|preservative|ice|cooler|container|exact/i]],
  '55:0': [['Why it happens & what you see', /hypothyroid|Hashimoto|cold intoleran|weight gain|lethargy|fatigue|constipat|dry skin|brittle|bradycard|slow|TSH|T4/i],
           ['Levothyroxine', /levothyroxine|thyroid hormone replacement|empty stomach|start low|chest pain|angina|lifelong/i],
           ['Myxedema coma', /myxedema|coma|hypotherm|hypoventilat|hyponatremia|IV levothyroxine|mechanical ventilation|airway/i],
           ['Safety: sedatives & the heart', /sedat|opioid|sensitive|cardiac|heart|dysrhythm|older adult/i]],
  '55:1': [['Graves & thyrotoxicosis signs', /Graves|exophthalm|goiter|heat intoleran|weight loss|tachycard|palpitat|tremor|anxiety|TSH|T3|T4|bruit/i],
           ['Antithyroid drugs & iodine', /methimazole|propylthiouracil|\bPTU\b|iodine|SSKI|agranulocytosis|sore throat|liver|pregnan/i],
           ['Radioactive iodine', /radioactive|\bRAI\b|I-131|isolation|distance|flush|pregnan/i],
           ['Thyroidectomy care', /thyroidectomy|airway|stridor|laryngeal|hoarse|hemorrhage|neck|semi-Fowler|tracheostomy set|tingling/i],
           ['Thyroid storm', /thyroid storm|thyrotoxic crisis|fever|hyperthermia|tachycardia|delirium|cooling|propranolol|acetaminophen/i],
           ['Eye & comfort care', /eye|exophthalm|lubricat|tape|sunglasses|cool|calm|calorie|rest/i],
           ['Thyroiditis & thyroid cancer', /thyroiditis|thyroid cancer|nodule|lifelong/i]],
  '55:2': [['Hypoparathyroidism & low calcium', /hypopara|hypocalc|low calcium|tetany|Chvostek|Trousseau|tingling|numbness|laryngospasm|seizure/i],
           ['Hyperparathyroidism & high calcium', /hyperpara|hypercalc|high calcium|stones|bones|groans|kidney stone|fracture|confus|constipat/i],
           ['Calcium & vitamin D treatment', /calcium gluconate|calcitriol|vitamin D|calcium (supplement|carbonate)|cinacalcet|fluids|phosph/i],
           ['After parathyroidectomy', /parathyroidectomy|neck surgery|airway|tingling|calcium check/i]],
  '56:0': [['Type 1 vs type 2', /type 1|type 2|autoimmune|beta cell|insulin resistance|ketosis|sudden|gradual/i],
           ['Risk & screening', /risk|screen|obesity|family history|prediabetes|metabolic syndrome|age 35|gestational|ethnic/i],
           ['Diagnostic numbers', /A1C|fasting|OGTT|random|126|200|6\.5|5\.7/i],
           ['Monitoring: meters & CGM', /meter|fingerstick|\bCGM\b|continuous glucose|time in range|log|target/i],
           ['Why the 3 Ps happen', /polyuria|polydipsia|polyphagia|glycosuria|osmotic/i]],
  '56:1': [['Insulin types & timing', /lispro|aspart|glulisine|rapid|regular|short|NPH|intermediate|glargine|detemir|degludec|long|peak|onset|basal|bolus|correction/i],
           ['Giving insulin', /inject|syringe|pen|pump|site|rotate|abdomen|mix|clear before cloudy|storage|refrigerat|room temperature|IV insulin/i],
           ['Metformin', /metformin|lactic acidosis|contrast|kidney|eGFR|B₁₂|B12/i],
           ['Insulin-releasing pills', /sulfonylurea|glipizide|glyburide|glimepiride|repaglinide|nateglinide|secretagogue/i],
           ['GLP-1, SGLT2, DPP-4 & others', /GLP-1|semaglutide|liraglutide|dulaglutide|SGLT2|empagliflozin|DPP-4|sitagliptin|pioglitazone|acarbose|pramlintide|pancreatitis|genital|ketoacidosis/i]],
  '56:2': [['Recognizing hypoglycemia', /hypoglyc|shaky|sweat|tremor|confus|hunger|palpitat|unaware|nightmares|< ?70|below 70/i],
           ['The 15-15 rule & glucagon', /15-15|15 g|juice|glucose tablet|recheck|glucagon|D50|dextrose|unconscious|cannot swallow/i],
           ['DKA', /DKA|ketoacidosis|ketone|Kussmaul|fruity|anion gap|bicarbonate|pH/i],
           ['HHS', /HHS|hyperosmolar|osmolar|older adult|dehydrat|neuro/i],
           ['Fluids, insulin & potassium', /fluid|0\.9%|saline|IV insulin|potassium|K⁺|hypokal|D5|cerebral edema|urine output/i],
           ['Sick days', /sick day|illness|flu|vomit|ketones|keep taking|fluids every/i]],
  '56:3': [['Microvascular: eyes, kidneys, nerves', /retinopathy|eye exam|nephropathy|kidney|albumin|neuropathy|numb|tingling|gastroparesis|erectile/i],
           ['Heart & vessels', /cardiovascular|heart|stroke|macrovascular|blood pressure|cholesterol|statin|aspirin|PAD/i],
           ['Foot care', /foot|feet|shoe|sock|nail|inspect|mirror|barefoot|ulcer|amputat|heating pad|soak/i],
           ['Eating & carbohydrates', /carbohydrate|carb|meal|diet|plate|alcohol|snack|fiber|nutrition/i],
           ['Exercise', /exercise|activity|ketones|> ?250|over 250|snack before/i],
           ['Hospital & surgery', /hospital|surgery|NPO|perioperative|sliding scale|correction|steroid|stress|contrast/i],
           ['Self-management teaching', /teach|self-management|skill|log|support|goal|culture|literacy|depress|distress/i]]
};
// Ch 33 questions that test ch 34 topics: an Exam 2 rule only.
const CH33_FOR_34 = null;
// Off-guide chapters: none yet.
const OFF_CHS = [];
const STORE = 'e3-mastery-v3', OLD_STORE = 'e3-mastery-loop-v2';
const CH_TITLE = { '45': 'GI assessment', '46': 'Mouth & esophagus', '47': 'Stomach conditions', '48': 'Noninflammatory bowel conditions', '49': 'Inflammatory bowel conditions', '53': 'Endocrine assessment', '55': 'Thyroid & parathyroid', '56': 'Diabetes' };
// Organ → molecule breakdowns (data/e3/nodes-*.js): the topic breakdowns, then the mechanisms, and the words that tie a
// question to each. A topic breakdown only matches questions from its own chapter; a mechanism matches any chapter.
const NODES = [
  ['abd-exam', 'Abdominal exam & GI labs', '45', /inspect|auscultat|palpat|percuss|bowel sounds|bruit|pulsat|rigid|guarding|\bALT\b|\bAST\b|bilirubin|ammonia|albumin|amylase|lipase|alkaline phosphatase|occult|guaiac|\bFIT\b|FOBT|\bCEA\b|aging|older adult/i],
  ['scopes', 'Scopes, sedation & bowel prep', '45', /\bEGD\b|ERCP|colonoscop|sigmoidoscop|capsule|endoscop|sedation|midazolam|gag reflex|bowel prep|contrast|\bCT\b/i],
  ['stomatitis', 'Stomatitis & oral cancer', '46', /stomatitis|mucositis|candid|thrush|mouth care|oral care|lidocaine|leukoplakia|erythroplakia|oral cancer|glossectomy|xerostomia|salivary/i],
  ['gerd', 'GERD, hiatal hernia & the esophagus', '46', /GERD|reflux|heartburn|\bLES\b|lower esophageal|Barrett|hiatal|fundoplication|esophag|dysphagia|caustic|drain cleaner/i],
  ['pud', 'Gastritis & peptic ulcer', '47', /gastritis|peptic|ulcer|H\. pylori|Helicobacter|NSAID|sucralfate|misoprostol|bismuth|urea breath|triple therapy/i],
  ['ugib', 'Upper GI bleeding & gastric surgery', '47', /hematemesis|melena|coffee[- ]ground|bleed|hemorrhag|perforat|gastrectomy|dumping|gastric cancer|pyloric/i],
  ['ibs-hernia', 'IBS, hernias & hemorrhoids', '48', /irritable bowel|\bIBS\b|alosetron|linaclotide|lubiprostone|hernia|hemorrhoid|truss|sitz/i],
  ['crc', 'Colorectal cancer & colostomy', '48', /colorectal|colon cancer|polyp|\bFAP\b|Lynch|colostomy|stoma|ostomy|pouch|abdominoperineal|fluorouracil|bevacizumab/i],
  ['obstruction', 'Bowel obstruction & the NG tube', '48', /obstruct|ileus|adhesion|volvulus|strangulat|\bNG\b|nasogastric|suction|alvimopan|Kehr|Cullen|trauma/i],
  ['acute-abd', 'Appendicitis, peritonitis & gastroenteritis', '49', /appendic|McBurney|periton|rebound|gastroenteritis|norovirus|dehydrat|oral rehydration/i],
  ['ibd', 'Ulcerative colitis & Crohn’s disease', '49', /ulcerative colitis|\bUC\b|Crohn|\bIBD\b|fistula|ileostomy|J-pouch|toxic megacolon|sulfasalazine|mesalamine|infliximab|adalimumab|natalizumab|vedolizumab/i],
  ['divert', 'Diverticular disease, celiac & parasites', '49', /diverticul|celiac|gluten|Giardia|amebi|parasit|paromomycin/i],
  ['endo-axis', 'Glands, feedback & endocrine tests', '53', /feedback|hypothalam|pituitar|adrenal|cortisol|aldosterone|\bADH\b|24-hour urine|stimulation|suppression|endocrine/i],
  ['hypothyroid', 'Hypothyroidism & myxedema coma', '55', /hypothyroid|myxedema|Hashimoto|levothyroxine|cold intoleran/i],
  ['hyperthyroid', 'Hyperthyroidism, thyroidectomy & storm', '55', /hyperthyroid|Graves|thyroid storm|thyroidectomy|methimazole|propylthiouracil|\bPTU\b|SSKI|radioactive iodine|exophthalm/i],
  ['pth', 'Parathyroid & calcium', '55', /parathyroid|\bPTH\b|calcium|tetany|Chvostek|Trousseau|cinacalcet|calcitriol/i],
  ['dm-dx', 'Diabetes: types & diagnosis', '56', /type 1|type 2|A1C|fasting|OGTT|screen|prediabetes|\bCGM\b|meter|polyuria/i],
  ['dm-rx', 'Insulin & diabetes drugs', '56', /lispro|aspart|glargine|\bNPH\b|degludec|regular insulin|insulin (pen|pump|injection)|metformin|glipizide|sulfonylurea|SGLT2|empagliflozin|GLP-1|semaglutide|pioglitazone|acarbose|pramlintide|inject/i],
  ['dm-acute', 'Lows, DKA & HHS', '56', /hypoglyc|15-15|glucagon|D50|\bDKA\b|ketoacidosis|Kussmaul|\bHHS\b|hyperosmolar|sick day/i],
  ['dm-chronic', 'Diabetes complications & foot care', '56', /retinopathy|nephropathy|neuropathy|foot|feet|monofilament|albumin|kidney|exercise|carbohydrate|surgery|\bNPO\b/i],
  ['acid', 'Acid & the proton pump', '', /proton pump|\bPPI\b|omeprazole|pantoprazole|famotidine|\bH2\b|histamine|antacid|acid secretion|gastrin|prostaglandin|misoprostol|sucralfate/i],
  ['motility', 'Peristalsis & gut nerves', '', /peristalsis|motility|ileus|opioid|metoclopramide|alvimopan|alosetron|serotonin|5-HT|bowel sounds|gastroparesis/i],
  ['fluids', 'Water follows solute', '', /dehydrat|third[- ]spac|osmotic|osmolar|hypovolem|fluid (shift|loss|volume|replacement)|oral rehydration|daily weight|dumping|bowel prep|polyuria/i],
  ['k-acidbase', 'Potassium & acid–base', '', /potassium|K⁺|hypokal|hyperkal|alkalosis|acidosis|bicarbonate|HCO₃|anion gap|\bpH\b|magnesium/i],
  ['inflammation', 'Inflammation, TNF & the barrier', '', /inflamm|\bTNF\b|infliximab|adalimumab|vedolizumab|natalizumab|steroid|prednisone|budesonide|azathioprine|mesalamine|sulfasalazine|5-ASA|\bCRP\b|\bESR\b|cytokine|sepsis/i],
  ['microbes', 'Gut microbes & infection', '', /H\. pylori|Helicobacter|difficile|Candida|thrush|nystatin|clotrimazole|norovirus|Giardia|amebi|parasit|metronidazole|antibiotic|E\. coli|Shigella|hand ?hygiene|hand ?wash/i],
  ['insulin', 'Insulin, glucagon & glucose', '', /insulin|glucagon|hypoglyc|ketone|\bDKA\b|beta cell|sulfonylurea|glipizide|GLP-1|metformin/i],
  ['thyroid', 'Thyroid hormone & metabolic rate', '', /thyroid|\bT[34]\b|T₃|T₄|\bTSH\b|levothyroxine|methimazole|propylthiouracil|\bPTU\b|iodine|SSKI|Graves|Hashimoto|myxedema/i],
  ['calcium', 'Calcium, PTH & nerve excitability', '', /calcium|\bPTH\b|parathyroid|tetany|Chvostek|Trousseau|calcitriol|vitamin D|cinacalcet|phosph/i]
];
// Stem words that mark a fact or lab-value question, and words that mark a drug, for working out why a question was missed.
const FACT_STEM = /\blabs?\b|\blevel\b|value|calculat|normal|interpret|\bA1C\b|glucose|\bTSH\b|\bT[34]\b|calcium|potassium|sodium|amylase|lipase|\bALT\b|\bAST\b|bilirubin|ammonia|albumin|ketone|osmolar|\bpH\b|bicarbonate|anion gap|\bWBC\b|hemoglobin|\bCEA\b/i;
const DRUG_OPT = /\b(mg|mcg|units?|dose|medication|drug|PRN|IV push|tablets?|injection)\b|insulin|metformin|glipizide|glyburide|repaglinide|glucagon|dextrose|levothyroxine|methimazole|propylthiouracil|\bPTU\b|iodine|propranolol|calcium gluconate|calcitriol|cinacalcet|prazole\b|tidine\b|antacid|sucralfate|misoprostol|bismuth|metoclopramide|loperamide|laxative|psyllium|docusate|mesalamine|sulfasalazine|prednisone|budesonide|azathioprine|infliximab|adalimumab|metronidazole|ciprofloxacin|amoxicillin|clarithromycin|nystatin|octreotide|semaglutide|empagliflozin|pioglitazone|sitagliptin|acarbose|midazolam/i;
// Drug classes named in a question (it then counts as a drugs-and-mechanisms question).
const CLASS_RE = /proton pump|\bPPI\b|\bH2\b|histamine|antacid|prostaglandin|antibiotic|antiemetic|laxative|stool softener|antidiarrh|bulk-forming|aminosalicylate|5-ASA|corticosteroid|immunosuppress|biologic|\bTNF\b|antithyroid|thyroid hormone|beta[- ]?blocker|insulin|sulfonylurea|biguanide|GLP-1|SGLT2|DPP-4|thiazolidinedione|alpha-glucosidase|chemotherap|sedation/i;
const DRUG_PARTS = 2; // drug data files that must load before the test can start
// ---------- End of the exam config ----------
