// ---------- Exam config: everything specific to this exam, from here to “End of the exam config”. ----------
// The final's block for the Mastery test. node tools/build_e3_mastery.js final puts it in place of Exam 2's block and
// writes Final Mastery Loop.dc.html, so every test runs the same engine. Edit here, then run that command.
//
// The final covers its own topic chapters (the concept chapters, added a few at a time: so far 13 and 14), chapters
// 48–52 (liver, gallbladder and pancreas, nutrition) and the Exam 3 chapters. There is no final study guide yet, so:
// BP gives the chapters new to the final most of the 60-question mix and keeps the Exam 3 chapters in for review
// (keep the weights adding up to 60); GUIDE has one or two topics per chapter (a 20-question test can't ask every
// one once now, so each test asks a fresh share of them); nothing is marked off the guide. Change BP and GUIDE when
// the professor names the final's topics.
const CHS = ['13', '14', '45', '46', '47', '48', '49', '50', '51', '52', '53', '55', '56'];
const BP = { '13': 7, '14': 5, '45': 2, '46': 3, '47': 3, '48': 5, '49': 5, '50': 7, '51': 6, '52': 5, '53': 2, '55': 4, '56': 6 };
const OFF_GUIDE_PICKS = {};
const SKILLS = ['Drugs & mechanisms', 'Pathophysiology', 'Priority & safety', 'Recognizing cues'];
// The words after each topic's name tie a question to it. With "Everything" selected, every test asks each topic
// at least once, in the chapter mix (BP).
const GUIDE = {
  '13': [['Fluid balance: dehydration, overload & IV fluids', /dehydrat|hypovolem|overload|overhydrat|hypervolem|pulmonary edema|crackles|neck vein|\bJVD\b|bounding|thready|orthostatic|turgor|tent|mucous membrane|weigh|intake|output|\bI&O\b|urine|specific gravity|thirst|fluid|isotonic|hypotonic|hypertonic|0\.9%|0\.45%|D5W|dextrose|lactated Ringer|crystalloid|colloid|osmo|aldosterone|\bADH\b|vasopressin|natriuretic|renin|angiotensin|RAAS|edema|fall/i],
         ['Electrolytes: sodium, potassium, calcium & magnesium', /sodium|Na⁺|hyponatr|hypernatr|potassium|K⁺|KCl|hypokal|hyperkal|calcium|Ca²⁺|hypocalc|hypercalc|magnesium|Mg²⁺|hypomag|hypermag|Trousseau|Chvostek|tetany|peaked|U wave|\bQT\b|salt substitute|SIADH|conivaptan|tolvaptan|patiromer|calcitonin|bisphosph|reflex|electrolyte/i]],
  '14': [['Acid–base balance & ABGs', /./]],
  '45': [['GI assessment, labs & procedures', /./]],
  '46': [['GERD & hiatal hernia', /GERD|reflux|heartburn|pyrosis|dyspepsia|regurgitat|water brash|eructation|Barrett|lower esophageal sphincter|\bLES\b|proton pump|\bPPI\b|omeprazole|pantoprazole|esomeprazole|famotidine|\bH2\b|antacid|alginate|Stretta|LINX|hiatal|sliding hernia|paraesophageal|rolling hernia|fundoplication|Nissen|gas bloat/i],
         ['Mouth, oral & esophageal cancer and trauma', /stomatitis|mucositis|candid|thrush|aphthous|oral|mouth|leukoplakia|erythroplakia|xerostomia|salivary|sialadenitis|tongue|tooth|teeth|dent|floss|esophageal (cancer|trauma|injur|perforation|tear)|esophagectomy|caustic|lye|alkali|acid burn|Boerhaave|dysphagia|swallow|lidocaine|nystatin|clotrimazole|chlorhexidine/i]],
  '47': [['Gastritis & peptic ulcer disease', /gastritis|peptic|ulcer|\bPUD\b|duodenal|H\. pylori|Helicobacter|urea breath|NSAID|aspirin|alcohol|stress ulcer|intrinsic factor|B₁₂|B12|pernicious|proton pump|\bPPI\b|omeprazole|pantoprazole|famotidine|\bH2\b|antacid|sucralfate|misoprostol|bismuth|clarithromycin|amoxicillin|metronidazole|tetracycline|epigastric/i],
         ['Upper GI bleeding & gastric cancer', /bleed|hemorrhag|hematemesis|melena|coffee[- ]ground|hypovolem|shock|transfus|large-bore|perforat|rigid|boardlike|peritonitis|pyloric|obstruct|octreotide|endoscop|gastric cancer|stomach cancer|gastrectomy|Billroth|dumping|postprandial|anastomo|bile reflux/i]],
  '48': [['Intestinal obstruction & colorectal cancer', /obstruct|ileus|adhesion|volvulus|intussuscep|impaction|strangulat|\bNG\b|nasogastric|suction|Salem|alvimopan|metoclopramide|colorectal|colon cancer|polyp|\bFAP\b|Lynch|colostomy|stoma|ostomy|pouch|wafer|abdominoperineal|\bAP resection|donut|perineal|screen|colonoscop|\bFIT\b|\bFOBT\b|occult|\bCEA\b|fluorouracil|bevacizumab|chemo|radiation/i],
         ['IBS, hernias, hemorrhoids & abdominal trauma', /irritable bowel|\bIBS\b|hydrogen breath|alosetron|linaclotide|lubiprostone|eluxadoline|rifaximin|psyllium|FODMAP|hernia|herniorrhaphy|hernioplasty|truss|scrotal|hemorrhoid|sitz|trauma|injur|Kehr|Cullen|Turner|\bFAST\b|blunt|stab|gunshot|compartment/i]],
  '49': [['Peritonitis, appendicitis & gastroenteritis', /periton|appendic|appendec|McBurney|rebound|gastroenteritis|norovirus|diarrhea|dehydrat|oral rehydration|fecal-oral|hand ?wash|hand ?hygiene|loperamide|diphenoxylate|difficile|Shigella|E\. coli|Campylobacter/i],
         ['IBD, diverticular disease, celiac & parasites', /ulcerative colitis|\bUC\b|Crohn|\bIBD\b|fistula|ileostomy|J-pouch|pouch|proctocolectomy|toxic megacolon|sulfasalazine|mesalamine|prednisone|budesonide|infliximab|adalimumab|natalizumab|vedolizumab|azathioprine|diverticul|celiac|gluten|Giardia|amebi|parasit|paromomycin|metronidazole|Chagas/i]],
  '50': [['Cirrhosis & its complications', /cirrho|portal|ascites|paracentesis|varic|encephalopathy|ammonia|asterixis|fetor|hepatorenal|lactulose|rifaximin|neomycin|spironolactone|furosemide|propranolol|octreotide|banding|ligation|sclerotherapy|tamponade|\bTIPS\b|\bSBP\b|spontaneous bacterial|jaundice|pruritus|itch|alcohol|albumin|\bINR\b|platelet|spider|girth|elastography|melena|hematemesis/i],
         ['Hepatitis, NAFLD & liver transplant', /hepatitis|\bH[ABCDE]V\b|HBsAg|anti-HBs|vaccin|immune globulin|fecal-oral|shellfish|needle|razor|tenofovir|entecavir|lamivudine|sofosbuvir|velpatasvir|ledipasvir|glecaprevir|antiviral|NAFLD|NASH|fatty liver|transplant|rejection|tacrolimus|cyclosporine|T-tube|graft/i]],
  '51': [['Cholecystitis & cholecystectomy', /cholecyst|gallbladder|gallstone|cholelith|choledocho|biliary colic|Murphy|Blumberg|\bRUQ\b|right upper|right shoulder|HIDA|MRCP|ursodiol|chenodiol|ketorolac|lap chole|laparoscopic|carbon dioxide|CO₂|postcholecystectomy|\bPCS\b|bile duct|clay|jaundice|icterus|biliary drain|cholangitis|fatty (food|meal)/i],
         ['Pancreatitis & pancreatic cancer', /pancrea|amylase|lipase|Cullen|Turner|fetal position|calcium|hypocalc|Whipple|pancreaticoduodenectomy|pancrelipase|enzyme|steatorrhea|FOLFIRINOX|gemcitabine|CA 19-9|fistula|anastomo|jejunal|\bPCA\b|alcohol/i]],
  '52': [['Undernutrition, tube feeding & TPN', /undernutrition|malnutrition|malnourish|\bPEU\b|marasmus|kwashiorkor|starvation|cachexia|\bMNA\b|\bBMI\b|body mass|\bBSA\b|body surface|weigh|weight loss|prealbumin|albumin|supplement|meal|tube feeding|feeding tube|small-bore|enteral|nasogastric|\bNG\b|\bPEG\b|gastrostomy|jejunostomy|residual|flush|clog|\bTPN\b|\bPPN\b|parenteral|lipid|refeeding|phosph|iron|vegan|vegetarian|allerg|intolerance|lactose|dysphagia|advance directive|power of attorney|eating disorder|anorexia|bulimia/i],
         ['Obesity & bariatric surgery', /obes|overweight|waist|bariatric|gastric bypass|Roux-en-Y|sleeve|gastric band|dumping|anastomotic leak|orlistat|semaglutide|liraglutide|phentermine|topiramate|bupropion|naltrexone|setmelanotide|calorie|kcal|diet|exercise|walk|genetic|RESPECT|intertrigo|pannicul|CPAP|airway|liposuction|cryolipolysis/i]],
  '53': [['Endocrine assessment & tests', /./]],
  '55': [['Thyroid disorders', /hypothyroid|myxedema|Hashimoto|levothyroxine|cold intoleran|weight gain|lethargy|constipat|bradycard|hypotherm|hypoventilat|TSH|sensitive to (sedat|opioid)|thyroid|hyperthyroid|Graves|exophthalm|goiter|thyroid storm|thyrotoxic|thyroidectomy|methimazole|propylthiouracil|\bPTU\b|iodine|SSKI|radioactive|\bRAI\b|propranolol|beta[- ]?blocker|heat intoleran|tachycard|eye (protect|care)|laryngeal|stridor|thyroiditis/i],
         ['Parathyroid disorders & calcium', /parathyroid|\bPTH\b|calcium|hypocalc|hypercalc|phosph|tetany|Chvostek|Trousseau|tingling|stones|bones|groans|calcitriol|vitamin D|cinacalcet|calcium gluconate|parathyroidectomy/i]],
  '56': [['Diabetes: diagnosis, drugs & self-management', /type 1|type 2|prediabetes|gestational|risk|screen|A1C|fasting|OGTT|random|glucose|\bCGM\b|continuous glucose|time in range|metabolic syndrome|autoimmune|insulin|polyuria|polydipsia|polyphagia|lispro|aspart|glulisine|regular|NPH|glargine|detemir|degludec|basal|bolus|correction|injection|pen|pump|metformin|sulfonylurea|glipizide|glyburide|repaglinide|pioglitazone|sitagliptin|DPP-4|GLP-1|semaglutide|liraglutide|SGLT2|empagliflozin|acarbose|pramlintide|complication|retinopathy|nephropathy|neuropathy|foot|feet|shoe|ulcer|amputat|kidney|carbohydrate|exercise|self-management|teach|surgery|NPO|hospital/i],
         ['Hypoglycemia, DKA & HHS', /hypoglyc|15-15|15 g|glucagon|D50|dextrose|DKA|ketoacidosis|ketone|Kussmaul|fruity|anion gap|HHS|hyperosmolar|osmolar|potassium|bicarbonate|IV insulin|fluid (resuscitat|replace)|0\.9%|sick day|unaware/i]]
};
const GUIDE_N = Object.keys(GUIDE).reduce((a, c) => a + GUIDE[c].length, 0);
// No final study guide yet, so nothing is marked off the guide.
const GUIDE_OFF = {};
const guideName = k => { const [c, i] = k.split(':'); return (GUIDE[c] || [])[+i] ? GUIDE[c][+i][0] : k; };
// The subtopics inside each topic (keyed chapter:item), so a test spreads a topic's questions across them
// and rotates to the ones you've seen least. A question can sit in more than one.
const GUIDE_SUB = {
  '13:0': [['Dehydration: signs & labs', /dehydrat|orthostatic|thready|turgor|tent|flat|specific gravity|hemoconcentr|confus|dark|thirst/i],
           ['Rehydrating & preventing falls', /rehydrat|oral fluid|60–120|oral rehydration|crystalloid|fall|lightheaded|\bAP\b|assistive|schedule|incontinen/i],
           ['Fluid overload', /overload|hypervolem|bounding|crackles|pulmonary edema|distend|\bJVD\b|edema|furosemide|restrict/i],
           ['Daily weights & I&O', /weigh|weight|1 kg|1 L\b|intake|output|\bI&O\b|2 lb|3 lb/i],
           ['IV fluids & tonicity', /isotonic|hypotonic|hypertonic|0\.9%|0\.45%|3%|D5W|D10W|dextrose|lactated Ringer|tonicity|crystalloid|colloid|mOsm/i],
           ['Hormones & body water', /aldosterone|\bADH\b|vasopressin|natriuretic|renin|angiotensin|RAAS|osmosis|diffusion|filtration|compartment|intracellular|extracellular/i]],
  '13:1': [['Sodium', /sodium|Na⁺|hyponatr|hypernatr|SIADH|conivaptan|tolvaptan|3% saline|cerebral edema/i],
           ['Potassium & the ECG', /potassium|K⁺|KCl|hypokal|hyperkal|peaked|U wave|salt substitute|patiromer|insulin|spironolactone/i],
           ['Calcium', /calcium|Ca²⁺|hypocalc|hypercalc|Trousseau|Chvostek|tetany|parathyroid|thyroidectomy|calcitonin|bisphosph|\bQT\b/i],
           ['Magnesium', /magnesium|Mg²⁺|hypomag|hypermag|reflex|\bDTRs?\b/i]],
  '14:0': [['Reading ABGs & compensation', /\bABG|arterial blood gas|PaCO₂|HCO₃|compensat|ROME|pH 7|24–48/i],
           ['Metabolic acidosis', /metabolic acidosis|ketoacid|\bDKA\b|diarrhea|Kussmaul|lactic|kidney failure|sodium bicarbonate|bicarbonate is given/i],
           ['Respiratory acidosis', /respiratory acidosis|CO₂ (retention|retained|is retained)|retain|COPD|opioid|hypoventilat|rib|airway|ventilat|bronchodilator/i],
           ['Alkalosis', /alkalosis|vomit|NG suction|nasogastric|antacid|hyperventilat|anxiety|panic|Chvostek|Trousseau|tetany/i],
           ['Potassium, the heart & safety', /potassium|K⁺|hyperkal|hypokal|T waves?|QRS|bradycard|heart block|cardiac|grip|fall|digoxin/i]],
  '45:0': [['What changes with age', /achlorhydria|hypochlorhydria|lipase|presbyesophagus|motility|older adult|aging|B12|B₁₂|impaction/i],
           ['Which organ, which quadrant', /quadrant|RUQ|LUQ|RLQ|LLQ|midline|right upper|left upper|right lower|left lower/i],
           ['Exam technique', /inspect|auscultat|palpat|percuss|bowel sounds|bruit|pulsat|rigid|guarding/i],
           ['GI labs & stool tests', /\bALT\b|\bAST\b|bilirubin|ammonia|albumin|amylase|lipase|alkaline phosphatase|occult|guaiac|\bFIT\b|FOBT|\bCEA\b|stool/i],
           ['Scopes, sedation & bowel prep', /\bEGD\b|ERCP|colonoscop|sigmoidoscop|capsule|sedation|gag reflex|bowel prep|clear liquid|\bCT\b|\bMRI\b|ultrasound/i]],
  '46:0': [['GERD: why & what you see', /GERD|reflux|heartburn|pyrosis|regurgitat|water brash|eructation|lower esophageal sphincter|\bLES\b|cough|hoarse|dental/i],
           ['GERD complications', /Barrett|stricture|esophagitis|dysphagia|adenocarcinoma|aspiration/i],
           ['Diet & lifestyle', /meal|eat|bedtime|head of (the )?bed|elevat|weight|chocolate|caffeine|fatty|peppermint|alcohol|smok|tight|bend|lie down/i],
           ['GERD drugs', /proton pump|\bPPI\b|omeprazole|pantoprazole|esomeprazole|famotidine|\bH2\b|antacid|alginate|metoclopramide/i],
           ['Hiatal hernia & fundoplication', /hiatal|sliding|paraesophageal|rolling|fundoplication|Nissen|gas bloat/i]],
  '46:1': [['Keeping the mouth healthy', /self-exam|floss|brush|dentist|dentures?|tobacco|sun/i],
           ['Caring for a sore mouth', /oral care|mouth care|rinse|saline|chlorhexidine|lidocaine|stomatitis|candid|nystatin|clotrimazole|mucositis/i],
           ['Oral cancer', /oral cancer|leukoplakia|erythroplakia|tobacco|airway|glossectomy|mandibulectomy|tongue/i],
           ['Esophageal cancer & trauma', /esophageal cancer|esophagectomy|anastomo|caustic|alkali|acid burn|trauma|perforat|Boerhaave/i]],
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
  '48:0': [['Small vs large, mechanical vs paralytic', /small[- ]bowel|large[- ]bowel|mechanical|paralytic|ileus|borborygm|vomit|distention/i],
           ['NG tube & fluids', /\bNG\b|nasogastric|suction|Salem|irrigat|fluid|potassium|daily weight/i],
           ['Strangulation & surgery', /strangulat|fever|tachycard|constant|surgery|laparotomy|perforat/i],
           ['CRC risk & screening', /risk|screen|colonoscop|\bFIT\b|FOBT|polyp|FAP|Lynch|family/i],
           ['Colostomy & AP resection care', /colostomy|stoma|pouch|wafer|perineal|abdominoperineal|AP resection|donut|cushion|CWOCN|sealant/i]],
  '48:1': [['IBS', /IBS|irritable|hydrogen breath|alosetron|linaclotide|lubiprostone|fiber|FODMAP|stress/i],
           ['Hernias', /hernia|reduc|incarcerat|strangulat|truss|scrotal/i],
           ['Hemorrhoids', /hemorrhoid|sitz|first (bowel movement|BM)|vasovagal/i],
           ['Abdominal trauma', /trauma|Kehr|Cullen|Turner|FAST|spleen|bleed/i]],
  '49:0': [['Peritonitis', /periton|rigid|boardlike|third spac|sepsis/i],
           ['Appendicitis', /appendic|appendec|McBurney|laxative|enema|heat|perforat/i],
           ['Gastroenteritis', /gastroenteritis|norovirus|vomit|diarrhea|dehydrat|oral rehydration|hand/i]],
  '49:1': [['UC & its surgery', /ulcerative|\bUC\b|bloody|J-pouch|ileostomy|proctocolectomy|toxic megacolon/i],
           ['Crohn’s & fistulas', /Crohn|fistula|B12|B₁₂|skip|malabsorb/i],
           ['IBD drugs', /sulfasalazine|mesalamine|prednisone|budesonide|azathioprine|infliximab|adalimumab|natalizumab|vedolizumab/i],
           ['Diverticular disease', /diverticul|fiber|LLQ/i],
           ['Celiac & parasites', /celiac|gluten|Giardia|amebi|parasit|metronidazole/i]],
  '50:0': [['Portal hypertension & ascites', /portal|ascites|girth|paracentesis|sodium|spironolactone|furosemide|\bTIPS\b|\bSBP\b|albumin|diuretic/i],
           ['Bleeding varices', /varic|hematemesis|melena|octreotide|banding|ligation|sclerotherapy|tamponade|propranolol|bleed/i],
           ['Hepatic encephalopathy', /encephalopathy|ammonia|asterixis|fetor|lactulose|rifaximin|neomycin|confus|protein/i],
           ['Assessment & labs', /\bALT\b|\bAST\b|bilirubin|albumin|\bINR\b|platelet|elastography|spider|palmar|jaundice|history|veteran/i],
           ['Kidneys, infection & home care', /hepatorenal|urine output|creatinine|\bSBP\b|peritonitis|acetaminophen|alcohol|hospice|pruritus|itch|withdrawal|delegat/i]],
  '50:1': [['Hepatitis A–E', /hepatitis (A|B|C|D|E)\b|\bH[ABCDE]V\b|fecal-oral|shellfish|incubation|chronic/i],
           ['Prevention & screening', /vaccin|immune globulin|screen|needle|razor|toothbrush|Standard Precautions|travel|handwash|hand ?wash/i],
           ['Hepatitis tests', /HBsAg|anti-HBs|IgM|IgG|anti-HCV|HCV RNA|serolog/i],
           ['Antivirals', /tenofovir|entecavir|lamivudine|sofosbuvir|velpatasvir|ledipasvir|glecaprevir|antiviral|amiodarone/i],
           ['NAFLD', /NAFLD|NASH|fatty liver|MASLD/i],
           ['Liver transplant', /transplant|rejection|graft|tacrolimus|cyclosporine|T-tube|immunosuppress/i]],
  '51:0': [['Cholecystitis: risk, signs & tests', /four Fs|women|female|pregnan|estrogen|Murphy|Blumberg|\bRUQ\b|right shoulder|fatty|ultrasound|HIDA|MRCP|\bWBC\b|older adult|delirium|gastric bypass/i],
           ['Obstructed bile', /jaundice|icterus|clay|dark urine|bilirubin|steatorrhea|biliary drain/i],
           ['Pain & drugs', /colic|morphine|hydromorphone|ketorolac|ursodiol|antiemetic|ondansetron|shock/i],
           ['Cholecystectomy', /cholecystectomy|lap chole|laparoscopic|carbon dioxide|CO₂|shoulder|incentive spirometry|\bJP\b|drain|\bPCS\b|postcholecystectomy|one at a time/i]],
  '51:1': [['Acute pancreatitis: why & signs', /autodigestion|trypsin|lipase|amylase|Cullen|Turner|boring|back|gallstone/i],
           ['Acute pancreatitis care', /NPO|IV fluid|\bPCA\b|\bNG\b|flatus|ileus|calcium|magnesium|fetal|jejunal|SpO₂|crackles|ARDS|shock/i],
           ['Chronic pancreatitis', /chronic|steatorrhea|pancrelipase|enzyme|\bPERT\b|4000|diabetes|insulin|\bTPN\b/i],
           ['Pancreatic cancer & Whipple', /cancer|Whipple|CA 19-9|\bEUS\b|FOLFIRINOX|gemcitabine|fistula|anastomo|leak|drain|hospice/i]],
  '52:0': [['Screening & measurements', /screen|\bMNA\b|\bBMI\b|\bBSA\b|height|weigh|skinfold|circumference/i],
           ['Undernutrition', /undernutrition|marasmus|kwashiorkor|starvation|older adult|prealbumin|albumin|meal|supplement|iron|% eaten|percentage/i],
           ['Tube feeding', /tube|enteral|residual|flush|clog|aspiration|head of (the )?bed|\bPEG\b|gastrostomy|x-ray|placement|advance directive|power of attorney/i],
           ['TPN & refeeding', /\bTPN\b|\bPPN\b|parenteral|lipid|fat overload|D10W|catch up|refeeding|phosph/i],
           ['Healthy eating & food reactions', /vegan|vegetarian|MyPlate|allerg|intolerance|lactose|B12|B₁₂/i]],
  '52:1': [['Obesity: risk & assessment', /assess|older adult|\bBMI\b|waist|class|genetic|RESPECT|intertrigo|complication|sleep apnea/i],
           ['Diet, exercise & behavior', /diet|calorie|kcal|exercise|walk|journal|behavior|Overeaters/i],
           ['Weight-loss drugs', /orlistat|semaglutide|liraglutide|phentermine|topiramate|bupropion|naltrexone|setmelanotide/i],
           ['Bariatric surgery care', /liposuction|cryolipolysis|fat freezing|bariatric|bypass|sleeve|airway|CPAP|\bNG\b|leak|dumping|pureed|liquids|supplement|panniculectomy/i]],
  '53:0': [['Pancreas, thyroid & parathyroid', /pancrea|insulin|glucagon|islet|thyroid|\bT3\b|\bT4\b|\bTSH\b|calcitonin|parathyroid|\bPTH\b|calcium/i],
           ['Endocrine changes with aging', /aging|older adult|age-related|elderly|menopaus|\bADH\b|estrogen/i],
           ['24-hour urine & other tests', /24-hour|urine|preservative|stimulation|suppression|test/i],
           ['Feedback, pituitary & adrenal', /feedback|hypothalam|pituitar|adrenal|cortisol|aldosterone|\bACTH\b|growth hormone/i]],
  '55:0': [['Hypothyroidism: why & what you see', /hypothyroid|Hashimoto|cold intoleran|weight gain|lethargy|fatigue|constipat|dry skin|bradycard|slow|TSH|T4/i],
           ['Levothyroxine', /levothyroxine|thyroid hormone replacement|empty stomach|start low|chest pain|angina|lifelong/i],
           ['Myxedema coma & safety', /myxedema|coma|hypotherm|hypoventilat|sedat|opioid|sensitive/i],
           ['Graves & thyrotoxicosis signs', /Graves|exophthalm|goiter|heat intoleran|weight loss|tachycard|palpitat|tremor|anxiety|bruit/i],
           ['Antithyroid drugs, iodine & RAI', /methimazole|propylthiouracil|\bPTU\b|iodine|SSKI|agranulocytosis|sore throat|radioactive|\bRAI\b/i],
           ['Thyroidectomy & thyroid storm', /thyroidectomy|airway|stridor|laryngeal|hoarse|hemorrhage|thyroid storm|fever|hyperthermia|cooling/i]],
  '55:1': [['Hypoparathyroidism & low calcium', /hypopara|hypocalc|low calcium|tetany|Chvostek|Trousseau|tingling|numbness|laryngospasm|seizure/i],
           ['Hyperparathyroidism & high calcium', /hyperpara|hypercalc|high calcium|stones|bones|groans|kidney stone|fracture|confus|constipat/i],
           ['Calcium & vitamin D treatment', /calcium gluconate|calcitriol|vitamin D|calcium (supplement|carbonate)|cinacalcet|fluids|phosph/i],
           ['After parathyroidectomy', /parathyroidectomy|neck surgery|airway|tingling|calcium check/i]],
  '56:0': [['Type 1 vs type 2 & diagnosis', /type 1|type 2|autoimmune|beta cell|insulin resistance|A1C|fasting|OGTT|random|126|200|6\.5|5\.7|screen|risk/i],
           ['Monitoring: meters & CGM', /meter|fingerstick|\bCGM\b|continuous glucose|time in range|log|target/i],
           ['Insulin', /lispro|aspart|glulisine|rapid|regular|NPH|glargine|detemir|degludec|basal|bolus|correction|inject|syringe|pen|pump|rotate|mix|storage/i],
           ['Diabetes pills & injectables', /metformin|lactic acidosis|sulfonylurea|glipizide|glyburide|repaglinide|GLP-1|semaglutide|liraglutide|SGLT2|empagliflozin|DPP-4|sitagliptin|pioglitazone|acarbose|pramlintide/i],
           ['Complications & foot care', /retinopathy|nephropathy|kidney|albumin|neuropathy|cardiovascular|stroke|foot|feet|shoe|sock|ulcer|amputat/i],
           ['Eating, exercise & self-management', /carbohydrate|carb|meal|diet|alcohol|exercise|activity|teach|self-management|hospital|surgery|NPO/i]],
  '56:1': [['Recognizing hypoglycemia', /hypoglyc|shaky|sweat|tremor|confus|hunger|palpitat|unaware|< ?70|below 70/i],
           ['The 15-15 rule & glucagon', /15-15|15 g|juice|glucose tablet|recheck|glucagon|D50|dextrose|unconscious|cannot swallow/i],
           ['DKA', /DKA|ketoacidosis|ketone|Kussmaul|fruity|anion gap|bicarbonate|pH/i],
           ['HHS', /HHS|hyperosmolar|osmolar|older adult|dehydrat|neuro/i],
           ['Fluids, insulin & potassium', /fluid|0\.9%|saline|IV insulin|potassium|K⁺|hypokal|D5|cerebral edema|urine output/i],
           ['Sick days', /sick day|illness|flu|vomit|ketones|keep taking|fluids every/i]]
};
// Ch 33 questions that test ch 34 topics: an Exam 2 rule only.
const CH33_FOR_34 = null;
// Off-guide chapters: none.
const OFF_CHS = [];
const STORE = 'fin-mastery-v1', OLD_STORE = 'fin-mastery-loop-v0';
const CH_TITLE = { '13': 'Fluids & electrolytes', '14': 'Acid–base balance', '45': 'GI assessment', '46': 'Mouth & esophagus', '47': 'Stomach conditions', '48': 'Noninflammatory bowel conditions', '49': 'Inflammatory bowel conditions', '50': 'Liver conditions', '51': 'Gallbladder & pancreas', '52': 'Malnutrition & obesity', '53': 'Endocrine assessment', '55': 'Thyroid & parathyroid', '56': 'Diabetes' };
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
  ['cirrhosis', 'Cirrhosis, portal hypertension & ascites', '50', /cirrho|portal|ascites|paracentesis|spironolactone|furosemide|albumin|girth|caput|spider|elastography|\bSBP\b|spontaneous bacterial|hepatorenal/i],
  ['varices-he', 'Bleeding varices & hepatic encephalopathy', '50', /varic|hematemesis|melena|octreotide|banding|ligation|sclerotherapy|tamponade|propranolol|\bTIPS\b|encephalopathy|ammonia|asterixis|fetor|lactulose|rifaximin|neomycin/i],
  ['hepatitis', 'Viral hepatitis, NAFLD & liver transplant', '50', /hepatitis|\bH[ABCDE]V\b|HBsAg|anti-HBs|vaccin|tenofovir|entecavir|lamivudine|sofosbuvir|glecaprevir|ledipasvir|NAFLD|NASH|fatty liver|transplant|rejection|tacrolimus/i],
  ['gallbladder', 'Cholecystitis & cholecystectomy', '51', /cholecyst|gallbladder|gallstone|cholelith|biliary colic|Murphy|HIDA|MRCP|ursodiol|ketorolac|lap chole|postcholecystectomy|clay|jaundice/i],
  ['pancreatitis', 'Acute & chronic pancreatitis', '51', /pancreatitis|amylase|lipase|Cullen|Turner|autodigestion|trypsin|hypocalc|pancrelipase|enzyme replacement|steatorrhea/i],
  ['panc-cancer', 'Pancreatic cancer & the Whipple', '51', /pancreatic cancer|Whipple|pancreaticoduodenectomy|CA 19-9|FOLFIRINOX|gemcitabine|fistula|anastomo/i],
  ['undernutrition', 'Undernutrition, tube feeding & TPN', '52', /undernutrition|malnutrition|malnourish|marasmus|kwashiorkor|\bMNA\b|\bBMI\b|prealbumin|tube feeding|enteral|residual|\bPEG\b|\bTPN\b|\bPPN\b|parenteral|refeeding|lipid/i],
  ['obesity', 'Obesity & bariatric surgery', '52', /obes|waist|bariatric|gastric bypass|Roux|sleeve|dumping|anastomotic leak|orlistat|semaglutide|liraglutide|phentermine|bupropion|setmelanotide/i],
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
  ['fluids', 'Water follows solute', '', /dehydrat|third[- ]spac|osmotic|osmolar|hypovolem|fluid (shift|loss|volume|replacement)|oral rehydration|daily weight|dumping|bowel prep|polyuria|ascites/i],
  ['k-acidbase', 'Potassium & acid–base', '', /potassium|K⁺|hypokal|hyperkal|alkalosis|acidosis|bicarbonate|HCO₃|anion gap|\bpH\b|magnesium/i],
  ['inflammation', 'Inflammation, TNF & the barrier', '', /inflamm|\bTNF\b|infliximab|adalimumab|vedolizumab|natalizumab|steroid|prednisone|budesonide|azathioprine|mesalamine|sulfasalazine|5-ASA|\bCRP\b|\bESR\b|cytokine|sepsis/i],
  ['microbes', 'Gut microbes & infection', '', /H\. pylori|Helicobacter|difficile|Candida|thrush|nystatin|clotrimazole|norovirus|Giardia|amebi|parasit|metronidazole|antibiotic|E\. coli|Shigella|hand ?hygiene|hand ?wash|hepatitis/i],
  ['insulin', 'Insulin, glucagon & glucose', '', /insulin|glucagon|hypoglyc|ketone|\bDKA\b|beta cell|sulfonylurea|glipizide|GLP-1|metformin/i],
  ['thyroid', 'Thyroid hormone & metabolic rate', '', /thyroid|\bT[34]\b|T₃|T₄|\bTSH\b|levothyroxine|methimazole|propylthiouracil|\bPTU\b|iodine|SSKI|Graves|Hashimoto|myxedema/i],
  ['calcium', 'Calcium, PTH & nerve excitability', '', /calcium|\bPTH\b|parathyroid|tetany|Chvostek|Trousseau|calcitriol|vitamin D|cinacalcet|phosph/i]
];
// Stem words that mark a fact or lab-value question, and words that mark a drug, for working out why a question was missed.
const FACT_STEM = /\blabs?\b|\blevel\b|value|calculat|normal|interpret|\bA1C\b|glucose|\bTSH\b|\bT[34]\b|calcium|potassium|sodium|amylase|lipase|\bALT\b|\bAST\b|bilirubin|ammonia|albumin|prealbumin|transferrin|ketone|osmolar|\bpH\b|bicarbonate|anion gap|\bWBC\b|hemoglobin|\bCEA\b|\bINR\b|platelet|phosph|magnesium|triglycer|HBsAg|\bBMI\b|\bBSA\b/i;
const DRUG_OPT = /\b(mg|mcg|units?|dose|medication|drug|PRN|IV push|tablets?|capsules?|injection)\b|insulin|metformin|glipizide|glyburide|repaglinide|glucagon|dextrose|levothyroxine|methimazole|propylthiouracil|\bPTU\b|iodine|propranolol|calcium gluconate|calcitriol|cinacalcet|prazole\b|tidine\b|antacid|sucralfate|misoprostol|bismuth|metoclopramide|loperamide|laxative|psyllium|docusate|mesalamine|sulfasalazine|prednisone|budesonide|azathioprine|infliximab|adalimumab|metronidazole|ciprofloxacin|amoxicillin|clarithromycin|nystatin|octreotide|semaglutide|empagliflozin|pioglitazone|sitagliptin|acarbose|midazolam|lactulose|rifaximin|neomycin|spironolactone|furosemide|tenofovir|entecavir|lamivudine|sofosbuvir|velpatasvir|ledipasvir|glecaprevir|tacrolimus|cyclosporine|pancrelipase|ursodiol|ketorolac|ondansetron|hydromorphone|morphine|gemcitabine|orlistat|liraglutide|phentermine|bupropion|setmelanotide|ferrous|iron/i;
// Drug classes named in a question (it then counts as a drugs-and-mechanisms question).
const CLASS_RE = /proton pump|\bPPI\b|\bH2\b|histamine|antacid|prostaglandin|antibiotic|antiemetic|laxative|stool softener|antidiarrh|bulk-forming|aminosalicylate|5-ASA|corticosteroid|immunosuppress|biologic|\bTNF\b|antithyroid|thyroid hormone|beta[- ]?blocker|insulin|sulfonylurea|biguanide|GLP-1|SGLT2|DPP-4|thiazolidinedione|alpha-glucosidase|chemotherap|sedation|diuretic|antiviral|direct-acting|pancreatic enzyme|bile acid|opioid|NSAID|lipase inhibitor/i;
const DRUG_PARTS = 3; // drug data files that must load before the test can start
// ---------- End of the exam config ----------
