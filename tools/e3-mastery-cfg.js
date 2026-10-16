// ---------- Exam config: everything specific to this exam, from here to “End of the exam config”. ----------
// Exam 3's block for the Mastery test. tools/build_e3_mastery.js puts it in place of Exam 2's block and writes
// Exam 3 Mastery Loop.dc.html, so both exams run the same engine. Edit here, then run: node tools/build_e3_mastery.js
//
// PROVISIONAL until the professor's Exam 3 study guide arrives: BP gives each chapter a share of a 60-question exam
// by its size, and GUIDE lists the main topics of each chapter (20 in all, so even a 20-question test asks each one).
// When the study guide comes, replace BP and GUIDE (and GUIDE_SUB) with what it names.
const CHS = ['45', '46', '47', '48', '49', '53', '55', '56'];
const BP = { '45': 6, '46': 7, '47': 7, '48': 7, '49': 8, '53': 6, '55': 8, '56': 11 };
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
  '48': [['IBS, hernias & hemorrhoids', /irritable bowel|\bIBS\b|hydrogen breath|alosetron|lubiprostone|linaclotide|rifaximin|FODMAP|psyllium|fiber|hernia|inguinal|femoral|umbilical|incisional|reduc|incarcerat|strangulat|truss|herniorrhaphy|hernioplasty|hemorrhoid|sitz|witch hazel|banding|stool softener|docusate|strain/i],
         ['Colorectal cancer & ostomies', /colorectal|colon cancer|rectal cancer|polyp|adenoma|\bFAP\b|Lynch|screening|colonoscop|\bFIT\b|FOBT|stool DNA|\bCEA\b|colostomy|ostomy|stoma|pouch|abdominoperineal|perineal|chemotherap|fluorouracil|bevacizumab|radiation|resection|anastomo/i],
         ['Intestinal obstruction & NG tubes', /obstruct|ileus|adhesion|volvulus|intussusception|impaction|distention|strangulat|feculent|\bNG\b|NGT|nasogastric|suction|decompress|alvimopan|metoclopramide|hypokal|potassium|metabolic alkalosis|bowel sounds|flatus|trauma|blunt|penetrating|Cullen|Kehr/i]],
  '49': [['Appendicitis, peritonitis & gastroenteritis', /appendic|McBurney|rebound|psoas|periton|perforat|rigid|boardlike|sepsis|third-spac|gastroenteritis|norovirus|rotavirus|E\. coli|Shigella|Campylobacter|Salmonella|oral rehydration|hand ?hygiene|loperamide|diphenoxylate/i],
         ['Ulcerative colitis & Crohn’s disease', /ulcerative colitis|\bUC\b|Crohn|inflammatory bowel|\bIBD\b|fistula|J-pouch|ileostomy|ileal pouch|proctocolectomy|toxic megacolon|bloody diarrhea|tenesmus|aminosalicylate|5-ASA|sulfasalazine|mesalamine|corticosteroid|prednisone|budesonide|azathioprine|infliximab|adalimumab|vedolizumab|natalizumab|biologic|TNF|immunosuppress|stricture|malabsorption|B₁₂|B12/i],
         ['Diverticular disease, celiac & parasites', /diverticul|LLQ|left lower|celiac|gluten|wheat|barley|\brye\b|parasit|Giardia|amebi|Cryptosporidi|paromomycin|ova and parasites/i]],
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
  '48:0': [['IBS: tests & drugs', /irritable bowel|\bIBS\b|hydrogen breath|lactulose|alosetron|lubiprostone|linaclotide|rifaximin|FODMAP|stress/i],
           ['Hernias: types & danger signs', /hernia|inguinal|femoral|umbilical|incisional|reduc|incarcerat|strangulat|truss/i],
           ['Hernia repair care', /herniorrhaphy|hernioplasty|cough|splint|scrotal|ice|void|lift/i],
           ['Hemorrhoids', /hemorrhoid|sitz|witch hazel|banding|fiber|stool softener|docusate|strain/i]],
  '48:1': [['Risk & screening', /risk|polyp|adenoma|\bFAP\b|Lynch|screening|colonoscop|\bFIT\b|FOBT|stool DNA|red meat|age 45/i],
           ['Signs & diagnosis', /rectal bleeding|blood in|anemia|change in (bowel|stool)|\bCEA\b|biopsy|stage/i],
           ['Surgery & the stoma', /colostomy|stoma|ostomy|pouch|abdominoperineal|perineal|resection|anastomo|leak/i],
           ['Ostomy teaching', /empty|irrigat|odor|skin barrier|wafer|diet|gas|body image|sex/i],
           ['Chemotherapy & radiation', /chemotherap|fluorouracil|bevacizumab|radiation|neutropen|hand-foot|mucositis/i]],
  '48:2': [['Mechanical vs paralytic', /mechanical|paralytic|adynamic|ileus|adhesion|volvulus|intussusception|impaction|tumor/i],
           ['Recognizing obstruction', /distention|vomit|feculent|high-pitched|borborygm|absent bowel|cramp|obstipation/i],
           ['Strangulation & perforation', /strangulat|fever|rising pulse|rigid|perforat|peritonitis|ischem/i],
           ['NG tube & suction care', /\bNG\b|NGT|nasogastric|suction|decompress|irrigat|placement|pH|patency/i],
           ['Fluids & electrolytes', /potassium|hypokal|sodium|metabolic alkalosis|dehydrat|IV fluid|daily weight|intake and output/i],
           ['Abdominal trauma', /trauma|blunt|penetrating|stab|gunshot|seat ?belt|Cullen|Kehr|hemorrhag/i]],
  '49:0': [['Appendicitis', /appendic|McBurney|rebound|psoas|RLQ|right lower/i],
           ['Peritonitis', /periton|rigid|boardlike|perforat|sepsis|third-spac|septic/i],
           ['Pre- & postop care', /heat|laxative|enema|NPO|semi-Fowler|drain|antibiotic|surgery|laparoscop/i],
           ['Gastroenteritis', /gastroenteritis|norovirus|rotavirus|E\. coli|Shigella|Campylobacter|Salmonella|travel/i],
           ['Dehydration & fluids', /dehydrat|oral rehydration|fluid|electrolyte|potassium|orthostatic|mucous membrane|skin turgor|urine output/i],
           ['Stopping the spread', /hand ?hygiene|hand ?wash|alcohol-based|bleach|isolation|contact precaution|food handl/i]],
  '49:1': [['UC vs Crohn’s', /ulcerative colitis|\bUC\b|Crohn|continuous|skip lesion|transmural|rectum|terminal ileum|cobblestone|fistula|compare/i],
           ['Flares: bleeding & complications', /bloody|bleed|toxic megacolon|perforat|hemorrhag|anemia|stools (a|per) day|fever|tenesmus/i],
           ['IBD drugs', /aminosalicylate|5-ASA|sulfasalazine|mesalamine|corticosteroid|prednisone|budesonide|azathioprine|infliximab|adalimumab|vedolizumab|natalizumab|biologic|TNF|immunosuppress/i],
           ['Nutrition & malabsorption', /nutrition|diet|malabsorption|B₁₂|B12|parenteral|\bTPN\b|low-residue|weight|NPO|bowel rest/i],
           ['Surgery & ostomy care', /J-pouch|ileostomy|ileal pouch|proctocolectomy|stoma|ostomy|output|dehydrat/i],
           ['Fistulas & strictures', /fistula|stricture|abscess|skin|wound/i]],
  '49:2': [['Diverticulosis vs diverticulitis', /diverticul|pouch|LLQ|left lower|fever|WBC|abscess|perforat/i],
           ['Fiber & what to eat', /fiber|bran|seeds|nuts|popcorn|clear liquid|low-fiber|high-fiber|diet/i],
           ['Celiac disease', /celiac|gluten|wheat|barley|\brye\b|oats|villi|dermatitis herpetiformis/i],
           ['Parasites & stool tests', /parasit|Giardia|amebi|Cryptosporidi|ova and parasites|metronidazole|paromomycin|water/i]],
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
// Concept Map nodes (organ → molecule breakdowns) and the words that tie a question to each. Added with the Exam 3 breakdowns.
const NODES = [];
// Stem words that mark a fact or lab-value question, and words that mark a drug, for working out why a question was missed.
const FACT_STEM = /\blabs?\b|\blevel\b|value|calculat|normal|interpret|\bA1C\b|glucose|\bTSH\b|\bT[34]\b|calcium|potassium|sodium|amylase|lipase|\bALT\b|\bAST\b|bilirubin|ammonia|albumin|ketone|osmolar|\bpH\b|bicarbonate|anion gap|\bWBC\b|hemoglobin|\bCEA\b/i;
const DRUG_OPT = /\b(mg|mcg|units?|dose|medication|drug|PRN|IV push|tablets?|injection)\b|insulin|metformin|glipizide|glyburide|repaglinide|glucagon|dextrose|levothyroxine|methimazole|propylthiouracil|\bPTU\b|iodine|propranolol|calcium gluconate|calcitriol|cinacalcet|prazole\b|tidine\b|antacid|sucralfate|misoprostol|bismuth|metoclopramide|loperamide|laxative|psyllium|docusate|mesalamine|sulfasalazine|prednisone|budesonide|azathioprine|infliximab|adalimumab|metronidazole|ciprofloxacin|amoxicillin|clarithromycin|nystatin|octreotide|semaglutide|empagliflozin|pioglitazone|sitagliptin|acarbose|midazolam/i;
// Drug classes named in a question (it then counts as a drugs-and-mechanisms question).
const CLASS_RE = /proton pump|\bPPI\b|\bH2\b|histamine|antacid|prostaglandin|antibiotic|antiemetic|laxative|stool softener|antidiarrh|bulk-forming|aminosalicylate|5-ASA|corticosteroid|immunosuppress|biologic|\bTNF\b|antithyroid|thyroid hormone|beta[- ]?blocker|insulin|sulfonylurea|biguanide|GLP-1|SGLT2|DPP-4|thiazolidinedione|alpha-glucosidase|chemotherap|sedation/i;
const DRUG_PARTS = 2; // drug data files that must load before the test can start
// ---------- End of the exam config ----------
