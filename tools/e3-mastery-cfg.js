// ---------- Exam config: everything specific to this exam, from here to “End of the exam config”. ----------
// Exam 3's block for the Mastery test. tools/build_e3_mastery.js puts it in place of Exam 2's block and writes
// Exam 3 Mastery Loop.dc.html, so both exams run the same engine. Edit here, then run: node tools/build_e3_mastery.js
//
// PROVISIONAL until the professor's Exam 3 study guide arrives: BP gives each chapter a share of a 60-question exam
// by its size, and GUIDE lists the main topics of each chapter (14 in all, so even a 20-question test asks each one).
// When the study guide comes, replace BP and GUIDE (and GUIDE_SUB) with what it names.
// Chapters 48 and 49 are not on Exam 3 (the professor said so); their notes stay on the map.
const CHS = ['45', '46', '47', '53', '55', '56'];
const BP = { '45': 8, '46': 9, '47': 9, '53': 8, '55': 11, '56': 15 };
// No off-guide chapters yet: every chapter is on the provisional guide.
const OFF_GUIDE_PICKS = {};
const SKILLS = ['Drugs & mechanisms', 'Pathophysiology', 'Priority & safety', 'Recognizing cues'];
// The provisional guide: each chapter's main topics, and the words that tie a question to each.
// With "Everything" selected, every test asks each topic at least once, in the chapter mix (BP).
const GUIDE = {
  '45': [['Abdominal assessment & GI labs', /history|PQRST|inspect|auscultat|palpat|percuss|bowel sounds|borborygm|bruit|pulsat|quadrant|guarding|rigid|tympan|flatus|aging|older adult|age-related|hypochlorhydria|steatorrhea|\bALT\b|\bAST\b|alkaline phosphatase|albumin|ammonia|amylase|lipase|bilirubin|prothrombin|\bCEA\b|CA 19-9|occult|guaiac|\bFIT\b|FOBT|stool DNA|Cologuard|ova and parasites|fecal fat|difficile|lactose/i],
         ['Endoscopy, colonoscopy & bowel prep', /endoscop|\bEGD\b|ERCP|capsule|colonoscop|sigmoidoscop|colonography|bowel prep|clear liquid|sedation|midazolam|fentanyl|propofol|gag reflex|capnograph|sternal rub|perforat|contrast|\bCT\b|\bMRI\b|ultrasound|x-ray|polyp|biops|screening/i]],
  '46': [['Stomatitis & oral cancer', /stomatitis|mucositis|candid|thrush|aphthous|herpe|oral (care|hygiene|lesion|cancer|tumor)|mouth|mucosa|nystatin|clotrimazole|lidocaine|chlorhexidine|leukoplakia|erythroplakia|tongue|lip|salivary|xerostomia|sialadenitis|mandibulectomy|glossectomy|tracheostomy|neck dissection|chemotherapy|radiation/i],
         ['GERD, hiatal hernia & esophageal cancer', /GERD|reflux|heartburn|pyrosis|dyspepsia|regurgitat|water brash|eructation|esophag|Barrett|lower esophageal sphincter|\bLES\b|stricture|dysphagia|odynophagia|hiatal|paraesophageal|fundoplication|Nissen|gas bloat|proton pump|\bPPI\b|omeprazole|pantoprazole|famotidine|\bH2\b|antacid|alginate|metoclopramide|head of (the )?bed|Boerhaave|Mallory|caustic/i]],
  '47': [['Gastritis & peptic ulcer disease', /gastritis|peptic|ulcer|\bPUD\b|duodenal|H\. pylori|Helicobacter|urea breath|NSAID|aspirin|alcohol|stress ulcer|intrinsic factor|B₁₂|B12|pernicious|proton pump|\bPPI\b|omeprazole|pantoprazole|famotidine|\bH2\b|antacid|sucralfate|misoprostol|bismuth|clarithromycin|amoxicillin|metronidazole|tetracycline|epigastric/i],
         ['Upper GI bleeding & gastric cancer', /bleed|hemorrhag|hematemesis|melena|coffee[- ]ground|hypovolem|shock|transfus|large-bore|perforat|rigid|boardlike|peritonitis|pyloric|obstruct|octreotide|endoscop|gastric cancer|stomach cancer|gastrectomy|Billroth|dumping|postprandial|anastomo|bile reflux/i]],
  '53': [['Endocrine glands, assessment & tests', /endocrin|hormone|gland|pituitar|hypothalam|feedback|thyroid|parathyroid|adrenal|cortisol|aldosterone|catecholamine|pancrea|insulin|glucagon|islet|ADH|TSH|ACTH|growth hormone|history|physical|palpat|aging|older adult|COVID|stimulation test|suppression test|24-hour urine|saliva|imaging|specimen/i]],
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
const GUIDE_OFF = {};
const guideName = k => { const [c, i] = k.split(':'); return (GUIDE[c] || [])[+i] ? GUIDE[c][+i][0] : k; };
// The subtopics inside each topic (keyed chapter:item), so a test spreads a topic's questions across them
// and rotates to the ones you've seen least. A question can sit in more than one.
const GUIDE_SUB = {
  '45:0': [['History & PQRST', /history|PQRST|precipitat|radiat|severity|timing|diary|lactose|family|travel|camping|weight (loss|change)/i],
           ['Exam order & bowel sounds', /inspect|auscultat|palpat|percuss|bowel sounds|borborygm|hypoactive|hyperactive|quadrant|flatus|order/i],
           ['Findings you must not touch', /pulsat|bruit|aneurysm|rigid|guarding|peristaltic wave|appendicitis/i],
           ['Aging changes', /aging|older adult|age-related|hypochlorhydria|steatorrhea|constipat|impaction|drug (metabolism|clearance|toxicity)/i],
           ['Liver & pancreas labs', /\bALT\b|\bAST\b|alkaline phosphatase|albumin|ammonia|amylase|lipase|bilirubin|prothrombin|\bPT\b/i],
           ['Stool tests & tumor markers', /stool|occult|guaiac|\bFIT\b|FOBT|DNA|Cologuard|\bCEA\b|CA 19-9|parasite|fecal fat|difficile/i]],
  '45:1': [['EGD & the gag reflex', /\bEGD\b|esophagogastro|gag|throat|aspirat|lozenge/i], ['ERCP', /ERCP|papillotomy|bile duct|pancreatitis|biloma/i],
           ['Colonoscopy & screening', /colonoscop|sigmoidoscop|polyp|screening|age 45|colonography/i], ['Bowel prep', /bowel prep|prep\b|clear liquid|purple|red|electrolyte|polyethylene/i],
           ['Sedation safety', /sedation|midazolam|fentanyl|propofol|respiratory rate|capnograph|sternal rub|atropine|vasovagal|flumazenil/i],
           ['Imaging & contrast', /\bCT\b|\bMRI\b|ultrasound|x-ray|contrast|metallic|implant|capsule|free air/i],
           ['Complications after a scope', /perforat|bleed|fever|guarding|hemorrhag|shock|driver|drive/i]],
  '46:0': [['Causes & recognizing stomatitis', /stomatitis|mucositis|aphthous|herpe|candid|thrush|white patch|plaque|chemotherap|radiation|immunosuppress/i],
           ['Mouth care & mouth drugs', /mouth care|oral care|rinse|saline|bicarbonate|toothbrush|alcohol|lemon|glycerin|nystatin|clotrimazole|lidocaine|chlorhexidine|swish/i],
           ['Oral cancer: signs & risk', /oral cancer|leukoplakia|erythroplakia|squamous|tobacco|chew|alcohol|HPV|sore that|lump|risk/i],
           ['Oral cancer surgery & airway', /airway|tracheostomy|mandibulectomy|glossectomy|neck dissection|flap|suction|swallow|speech|communicat/i],
           ['Salivary glands & dry mouth', /salivary|xerostomia|sialadenitis|dry mouth|saliva|sugar-free/i]],
  '46:1': [['GERD: why & what you see', /GERD|reflux|heartburn|pyrosis|regurgitat|water brash|eructation|lower esophageal sphincter|\bLES\b|cough|hoarse|dental/i],
           ['GERD complications', /Barrett|stricture|esophagitis|dysphagia|adenocarcinoma|aspiration/i],
           ['Diet & lifestyle', /meal|eat|bedtime|head of (the )?bed|elevat|weight|chocolate|caffeine|fatty|peppermint|alcohol|smok|tight|bend|lie down/i],
           ['GERD drugs', /proton pump|\bPPI\b|omeprazole|pantoprazole|esomeprazole|famotidine|\bH2\b|antacid|alginate|metoclopramide/i],
           ['Hiatal hernia & fundoplication', /hiatal|paraesophageal|sliding|fundoplication|Nissen|gas bloat|NG tube|dysphagia after/i],
           ['Esophageal cancer & esophagectomy', /esophageal cancer|esophagectomy|anastomo|leak|chest tube|jejunostomy|semi-Fowler|weight loss/i],
           ['Esophageal trauma', /trauma|perforat|Boerhaave|Mallory|caustic|lye|foreign body|subcutaneous emphysema/i]],
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
  '53:0': [['Feedback loops & the pituitary', /feedback|hypothalam|pituitar|TSH|ACTH|growth hormone|ADH|vasopressin|target|tropic|negative/i],
           ['Adrenal hormones', /adrenal|cortisol|aldosterone|catecholamine|epinephrine|norepinephrine|stress|sodium|potassium/i],
           ['Thyroid, parathyroid & pancreas', /thyroid|T3|T4|parathyroid|\bPTH\b|calcium|insulin|glucagon|islet|glucose/i],
           ['History & physical exam', /history|physical|palpat|thyroid (exam|palpat)|behind|weight|skin|hair|vital|fat distribution|vision/i],
           ['Aging & COVID-19', /aging|older adult|age-related|COVID/i],
           ['Tests & the nurse’s job', /stimulation|suppression|24-hour urine|saliva|specimen|timing|fasting|imaging|\bCT\b|\bMRI\b|test/i]],
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
