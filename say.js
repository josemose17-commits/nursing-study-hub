// Tap any drug name, medical word or abbreviation to hear it and see what it means — on every page.
// The 🔊 "Words" button turns it on: known words get a light highlight; tapping one speaks it (the phone's own
// voice, free and offline) and shows its full name, a plain-English meaning and how to say it (CAPITALS mark the
// stressed syllable). Meanings come from data/words.js (built by tools/build_words.js). While it is on, a tap on a
// highlighted word only explains it (it never picks a test answer); everything else works as usual.
(function () {
  var SRC = (document.currentScript && document.currentScript.src) || '';
  // term | respelling | what to say aloud (when it differs from the term, e.g. an abbreviation's full name)
  var WORDS = [
    // ---- Exam 3 drugs (generic) ----
    'methimazole|meth-IM-ah-zole', 'propylthiouracil|proe-pil-thye-oh-YOOR-ah-sil', 'potassium iodide|poe-TAS-ee-um EYE-oh-dide', 'calcium gluconate|KAL-see-um GLOO-koe-nate', 'calcitriol|kal-sih-TRYE-ol', 'cinacalcet|sin-ah-KAL-set', 'liothyronine|lye-oh-THYE-roe-neen', 'cholestyramine|koe-leh-STEER-ah-meen', 'teprotumumab|teh-proe-TOO-myoo-mab', 'glipizide|GLIP-ih-zide', 'glyburide|GLYE-byoor-ide', 'glimepiride|glye-MEP-ih-ride', 'repaglinide|reh-PAG-lih-nide', 'nateglinide|nah-TEG-lih-nide', 'pioglitazone|pye-oh-GLIT-ah-zone', 'rosiglitazone|roe-sih-GLIT-ah-zone', 'sitagliptin|sit-ah-GLIP-tin', 'saxagliptin|sax-ah-GLIP-tin', 'linagliptin|lin-ah-GLIP-tin', 'alogliptin|al-oh-GLIP-tin', 'semaglutide|sem-ah-GLOO-tide', 'liraglutide|lir-ah-GLOO-tide', 'dulaglutide|doo-lah-GLOO-tide', 'exenatide|ex-EN-ah-tide', 'lixisenatide|lix-ih-SEN-ah-tide', 'empagliflozin|em-pah-glih-FLOE-zin', 'dapagliflozin|dap-ah-glih-FLOE-zin', 'canagliflozin|kan-ah-glih-FLOE-zin', 'ertugliflozin|er-too-glih-FLOE-zin', 'acarbose|AY-kar-bose', 'miglitol|MIG-lih-tol', 'pramlintide|PRAM-lin-tide', 'lispro|LIS-proe', 'aspart|AS-part', 'glulisine|gloo-LIS-een', 'glargine|GLAR-jeen', 'detemir|DEH-teh-meer', 'degludec|deh-GLOO-dek', 'famotidine|fah-MOE-tih-deen', 'nizatidine|nye-ZAT-ih-deen', 'omeprazole|oh-MEP-rah-zole', 'esomeprazole|es-oh-MEP-rah-zole', 'lansoprazole|lan-SOE-prah-zole', 'dexlansoprazole|dex-lan-SOE-prah-zole', 'pantoprazole|pan-TOE-prah-zole', 'rabeprazole|rah-BEP-rah-zole', 'sucralfate|soo-KRAL-fate', 'bismuth subsalicylate|BIZ-muth sub-sah-LIS-ih-late', 'misoprostol|mye-soe-PROS-tol', 'clarithromycin|klah-rith-roe-MYE-sin', 'amoxicillin|ah-mox-ih-SIL-in', 'metronidazole|meh-troe-NYE-dah-zole', 'tetracycline|teh-trah-SYE-kleen', 'tinidazole|tye-NID-ah-zole', 'nystatin|NYE-stat-in', 'clotrimazole|kloe-TRIM-ah-zole', 'chlorhexidine|klor-HEX-ih-deen', 'metoclopramide|meh-toe-KLOE-prah-mide', 'alvimopan|al-VIM-oh-pan', 'octreotide|ok-TREE-oh-tide', 'psyllium|SIL-ee-um', 'lubiprostone|loo-bih-PROS-tone', 'linaclotide|lin-AK-loe-tide', 'alosetron|ah-LOE-seh-tron', 'rifaximin|rih-FAX-ih-min', 'diphenoxylate|dye-fen-OX-ih-late', 'docusate|DOK-yoo-sate', 'senna|SEN-ah', 'sulfasalazine|sul-fah-SAL-ah-zeen', 'mesalamine|meh-SAL-ah-meen', 'azathioprine|ay-zah-THYE-oh-preen', 'mercaptopurine|mer-kap-toe-PYOOR-een', 'infliximab|in-FLIX-ih-mab', 'adalimumab|ay-dah-LIM-yoo-mab', 'vedolizumab|veh-doe-LIZ-yoo-mab', 'natalizumab|nah-tah-LIZ-yoo-mab', 'certolizumab|ser-toe-LIZ-yoo-mab', 'paromomycin|par-oh-moe-MYE-sin', 'fluorouracil|flure-oh-YOOR-ah-sil', 'leucovorin|loo-koe-VOR-in', 'capecitabine|kap-eh-SYE-tah-been', 'oxaliplatin|ox-AL-ih-plat-in', 'irinotecan|eye-rih-noe-TEE-kan', 'bevacizumab|beh-vah-SIZ-yoo-mab', 'cetuximab|seh-TUX-ih-mab', 'panitumumab|pan-ih-TOO-myoo-mab', 'midazolam|mih-DAZ-oh-lam', 'propofol|PROE-poe-fol', 'fentanyl|FEN-tah-nil', 'polyethylene glycol|pol-ee-ETH-ih-leen GLYE-kol', 'atenolol|ah-TEN-oh-lol', 'dextrose|DEX-trose', 'insulin|IN-suh-lin',
    // ---- Drugs (generic) ----
    'adenosine|ah-DEN-oh-seen', 'amiodarone|am-ee-OH-dah-rone', 'atropine|AT-roh-peen', 'epinephrine|ep-ih-NEF-rin', 'norepinephrine|nor-ep-ih-NEF-rin',
    'magnesium sulfate|mag-NEE-zee-um SUL-fate', 'magnesium|mag-NEE-zee-um', 'metoprolol|meh-TOE-proh-lol', 'diltiazem|dil-TYE-ah-zem', 'amlodipine|am-LOE-dih-peen',
    'digoxin|dih-JOX-in', 'lisinopril|lye-SIN-oh-pril', 'losartan|loe-SAR-tan', 'sacubitril|sah-KYOO-bih-tril', 'valsartan|val-SAR-tan',
    'furosemide|fyoor-OH-seh-mide', 'hydrochlorothiazide|hye-droe-klor-oh-THYE-ah-zide', 'spironolactone|speer-on-oh-LAK-tone', 'nitroglycerin|nye-troe-GLIS-er-in',
    'aspirin|AS-pir-in', 'acetylsalicylic acid|ah-SEE-til-sal-ih-SIL-ik AS-id', 'clopidogrel|kloe-PID-oh-grel', 'cilostazol|sil-OS-tah-zol', 'heparin|HEP-ah-rin',
    'enoxaparin|ee-nox-ah-PAIR-in', 'warfarin|WAR-far-in', 'apixaban|ah-PIX-ah-ban', 'rivaroxaban|riv-ah-ROX-ah-ban', 'dabigatran|dah-BIG-ah-tran', 'argatroban|ar-GAT-roe-ban',
    'alteplase|AL-teh-plase', 'tenecteplase|teh-NEK-teh-plase', 'protamine|PROE-tah-meen', 'phytonadione|fye-toe-nah-DYE-own', 'atorvastatin|ah-TOR-vah-stat-in',
    'simvastatin|SIM-vah-stat-in', 'dobutamine|doe-BYOO-tah-meen', 'hydralazine|hye-DRAL-ah-zeen', 'morphine|MOR-feen', 'potassium chloride|poe-TAS-ee-um KLOR-ide',
    'albuterol|al-BYOO-ter-ol', 'salbutamol|sal-BYOO-tah-mol', 'ipratropium|ih-prah-TROE-pee-um', 'tiotropium|tye-oh-TROE-pee-um', 'salmeterol|sal-MEE-ter-ol',
    'formoterol|for-MOE-ter-ol', 'fluticasone|floo-TIK-ah-sone', 'budesonide|byoo-DES-oh-nide', 'prednisone|PRED-nih-sone', 'methylprednisolone|meth-il-pred-NIS-oh-lone',
    'dexamethasone|dex-ah-METH-ah-sone', 'montelukast|mon-teh-LOO-kast', 'theophylline|thee-OFF-ih-lin', 'aminophylline|am-ih-NOFF-ih-lin', 'omalizumab|oh-mah-LIZ-oo-mab',
    'roflumilast|roe-FLOO-mih-last', 'dornase alfa|DOR-nase AL-fah', 'dornase|DOR-nase', 'ivacaftor|eye-vah-KAF-tor', 'elexacaftor|eh-lex-ah-KAF-tor', 'tezacaftor|tez-ah-KAF-tor',
    'bosentan|boe-SEN-tan', 'sildenafil|sil-DEN-ah-fil', 'epoprostenol|ee-poe-PROS-ten-ol', 'nintedanib|nin-TED-ah-nib', 'pirfenidone|pir-FEN-ih-done',
    'oxymetazoline|ox-ee-meh-TAZ-oh-leen', 'isoniazid|eye-soe-NYE-ah-zid', 'rifampin|rif-AM-pin', 'rifampicin|rif-AM-pih-sin', 'pyrazinamide|peer-ah-ZIN-ah-mide',
    'ethambutol|eh-THAM-byoo-tol', 'pyridoxine|peer-ih-DOX-een', 'oseltamivir|oh-sel-TAM-ih-veer', 'remdesivir|rem-DES-ih-veer', 'nirmatrelvir|ner-MAT-rel-veer',
    'ritonavir|rih-TOE-nah-veer', 'ceftriaxone|sef-try-AX-own', 'azithromycin|ah-zith-roe-MYE-sin', 'ciprofloxacin|sip-roe-FLOX-ah-sin', 'doxycycline|dox-ih-SYE-kleen',
    'amphotericin|am-foe-TAIR-ih-sin', 'itraconazole|it-rah-KON-ah-zole', 'ferrous sulfate|FAIR-us SUL-fate', 'iron dextran|EYE-ern DEX-tran', 'iron sucrose|EYE-ern SOO-krose',
    'deferoxamine|deh-fer-OX-ah-meen', 'cyanocobalamin|sye-an-oh-koe-BAL-ah-min', 'hydroxocobalamin|hye-drox-oh-koe-BAL-ah-min', 'folic acid|FOE-lik AS-id', 'folate|FOE-late',
    'epoetin alfa|ee-POE-eh-tin AL-fah', 'epoetin|ee-POE-eh-tin', 'darbepoetin|dar-beh-POE-eh-tin', 'filgrastim|fil-GRAS-tim', 'pegfilgrastim|peg-fil-GRAS-tim',
    'hydroxyurea|hye-drox-ee-yoo-REE-ah', 'naloxone|nah-LOX-own', 'propranolol|proe-PRAN-oh-lol', 'carvedilol|KAR-veh-dil-ol', 'verapamil|ver-AP-ah-mil',
    'nifedipine|nye-FED-ih-peen', 'idarucizumab|eye-dah-roo-SIZ-oo-mab', 'andexanet|an-DEX-ah-net', 'lidocaine|LYE-doe-kane', 'isosorbide|eye-soe-SOR-bide',
    'enalapril|eh-NAL-ah-pril', 'bumetanide|byoo-MET-ah-nide', 'metformin|met-FOR-min', 'glucagon|GLOO-kah-gon', 'flumazenil|floo-MAZ-eh-nil', 'varenicline|var-EN-ih-kleen',
    'bupropion|byoo-PROE-pee-on', 'meperidine|meh-PAIR-ih-deen', 'diphenhydramine|dye-fen-HYE-drah-meen', 'acetaminophen|ah-seet-ah-MIN-oh-fen', 'ibuprofen|eye-byoo-PROE-fen',
    'loratadine|lor-AT-ah-deen', 'loperamide|loe-PAIR-ah-mide', 'ondansetron|on-DAN-seh-tron', 'thiamine|THYE-ah-min', 'levothyroxine|lee-voe-thye-ROX-een',
    // ---- Brand names ----
    'Adenocard|AD-en-oh-kard', 'Pacerone|PAY-ser-own', 'Nexterone|NEX-ter-own', 'Cordarone|KOR-dah-rone', 'EpiPen|EP-ee-pen', 'Lopressor|loe-PRES-or', 'Toprol|TOE-prol',
    'Cardizem|KAR-dih-zem', 'Norvasc|NOR-vask', 'Lanoxin|lah-NOX-in', 'Zestril|ZES-tril', 'Cozaar|KOE-zar', 'Entresto|en-TRES-toe', 'Lasix|LAY-six', 'Microzide|MYE-kroe-zide',
    'Aldactone|al-DAK-tone', 'Nitrostat|NYE-troe-stat', 'Plavix|PLAV-ix', 'Lovenox|LOVE-eh-nox', 'Clexane|KLEX-ane', 'Coumadin|KOO-mah-din', 'Jantoven|JAN-toe-ven',
    'Eliquis|EL-ih-kwis', 'Activase|AK-tih-vase', 'Kcentra|kay-SEN-trah', 'Lipitor|LIP-ih-tor', 'ProAir|PROE-air', 'Ventolin|VEN-toe-lin', 'Atrovent|AT-roe-vent',
    'Spiriva|spih-REE-vah', 'Serevent|SAIR-eh-vent', 'Advair|AD-vair', 'Flovent|FLOE-vent', 'Flonase|FLOE-nase', 'Symbicort|SIM-bih-kort', 'Solu-Medrol|SAHL-yoo MED-rol',
    'Medrol|MED-rol', 'Decadron|DEK-ah-dron', 'Singulair|SING-yoo-lair', 'Xolair|ZOE-lair', 'Daliresp|DAL-ih-resp', 'Pulmozyme|PUL-moe-zime', 'Kalydeco|kah-LYE-deh-koe',
    'Trikafta|trye-KAF-tah', 'Tracleer|TRAK-leer', 'Revatio|reh-VAH-tee-oh', 'Viagra|vye-AG-rah', 'Flolan|FLOE-lan', 'Veletri|veh-LEH-tree', 'Ofev|OH-fev', 'Afrin|AF-rin',
    'Rifadin|RIF-ah-din', 'Tamiflu|TAM-ih-floo', 'Veklury|VEK-loo-ree', 'Paxlovid|PAX-loe-vid', 'Rocephin|roe-SEF-in', 'Zithromax|ZITH-roe-max', 'Cipro|SIP-roe',
    'Vibramycin|vye-brah-MYE-sin', 'AmBisome|AM-bih-sohm', 'Sporanox|SPOR-ah-nox', 'INFeD|IN-fed', 'Venofer|VEN-oh-fer', 'Epogen|EP-oh-jen', 'Procrit|PROE-krit',
    'Retacrit|RET-ah-krit', 'Aranesp|AIR-ah-nesp', 'Neupogen|NOO-poe-jen', 'Neulasta|noo-LAS-tah', 'Droxia|DROX-ee-ah', 'Hydrea|hye-DREE-ah', 'Narcan|NAR-kan',
    // ---- Body, cells and chemistry ----
    'acetylcholine|ah-SEE-til-KOE-leen', 'nicotinic|nik-oh-TIN-ik', 'muscarinic|mus-kah-RIN-ik', 'agonist|AG-oh-nist', 'antagonist|an-TAG-oh-nist', 'sympathetic|sim-pah-THET-ik',
    'parasympathetic|pair-ah-sim-pah-THET-ik', 'vagus|VAY-gus', 'vagal|VAY-gal', 'adenylyl cyclase|ah-DEN-ih-lil SYE-klase', 'calmodulin|kal-MOD-yoo-lin', 'myosin|MYE-oh-sin',
    'bronchoconstriction|BRONG-koe-kon-STRIK-shun', 'bronchospasm|BRONG-koe-spaz-um', 'bronchodilation|BRONG-koe-dye-LAY-shun', 'bronchodilator|BRONG-koe-DYE-lay-tor',
    'vasoconstriction|VAY-zoe-kon-STRIK-shun', 'vasodilation|VAY-zoe-dye-LAY-shun', 'arteriole|ar-TEER-ee-ole', 'afterload|AF-ter-lode', 'preload|PREE-lode',
    'contractility|kon-trak-TIL-ih-tee', 'renin|REE-nin', 'angiotensin|an-jee-oh-TEN-sin', 'aldosterone|al-DOS-ter-own', 'bradykinin|bray-dee-KYE-nin', 'natriuresis|nay-tree-yoo-REE-sis',
    'natriuretic|nay-tree-yoo-RET-ik', 'cor pulmonale|KOR pul-moe-NAL-ee', 'histamine|HIS-tah-meen', 'leukotriene|loo-koe-TRYE-een', 'prostaglandin|pros-tah-GLAN-din',
    'eosinophil|ee-oh-SIN-oh-fil', 'neutrophil|NOO-troe-fil', 'macrophage|MAK-roe-fayj', 'cytokine|SYE-toe-kyne', 'interleukin|in-ter-LOO-kin', 'cilia|SIL-ee-ah',
    'mucociliary|myoo-koe-SIL-ee-air-ee', 'epithelium|ep-ih-THEE-lee-um', 'epithelial|ep-ih-THEE-lee-al', 'elastin|ee-LAS-tin', 'protease|PROE-tee-ase', 'elastase|ee-LAS-tase',
    'antitrypsin|an-tee-TRIP-sin', 'bullae|BUL-ee', 'alveoli|al-VEE-oh-lye', 'alveolus|al-VEE-oh-lus', 'alveolar|al-VEE-oh-lar', 'carcinogen|kar-SIN-oh-jen',
    'metaplasia|met-ah-PLAY-zhah', 'dysplasia|dis-PLAY-zhah', 'carboxyhemoglobin|kar-BOX-ee-HEE-moe-gloe-bin', 'oximetry|ox-IM-eh-tree', 'surfactant|sur-FAK-tant',
    'pneumocyte|NOO-moe-site', 'exudate|EX-yoo-date', 'chemoreceptor|KEE-moe-ree-SEP-tor', 'baroreceptor|BAIR-oe-ree-SEP-tor', 'endothelin|en-doe-THEE-lin',
    'endothelium|en-doe-THEE-lee-um', 'atherosclerosis|ath-er-oe-skleh-ROE-sis', 'arteriosclerosis|ar-teer-ee-oh-skleh-ROE-sis', 'claudication|klaw-dih-KAY-shun',
    'thromboxane|throm-BOX-ane', 'coagulation|koe-ag-yoo-LAY-shun', 'thrombin|THROM-bin', 'fibrin|FYE-brin', 'fibrinogen|fye-BRIN-oh-jen', 'antithrombin|an-tee-THROM-bin',
    'D-dimer|DEE-dye-mer', 'hemoglobin|HEE-moe-gloe-bin', 'hematocrit|hee-MAT-oh-krit', 'reticulocyte|reh-TIK-yoo-loe-site', 'ferritin|FAIR-ih-tin', 'parietal|pah-RYE-eh-tal',
    'megaloblastic|meg-ah-loe-BLAS-tik', 'macrocytic|mak-roe-SIT-ik', 'microcytic|mye-kroe-SIT-ik', 'hypochromic|hye-poe-KROE-mik', 'myelin|MYE-eh-lin',
    'methylmalonic|METH-il-mah-LON-ik', 'homocysteine|hoe-moe-SIS-teen', 'erythropoietin|eh-rith-roe-POY-eh-tin', 'polycythemia|pol-ee-sye-THEE-mee-ah',
    'hemolysis|hee-MOL-ih-sis', 'hemolytic|hee-moe-LIT-ik', 'bilirubin|bil-ih-ROO-bin', 'autosomal|aw-toe-SOE-mal', 'tyrosine kinase|TYE-roe-seen KYE-nase', 'xanthine|ZAN-theen',
    'depolarize|dee-POE-lah-rize', 'repolarize|ree-POE-lah-rize', 'Purkinje|pur-KIN-jee', 'nephron|NEF-ron', 'Henle|HEN-lee', 'glucocorticoid|gloo-koe-KOR-tih-koyd',
    'corticosteroid|kor-tih-koe-STEER-oyd', 'phosphodiesterase|fos-foe-dye-ES-ter-ase', 'hematopoiesis|hee-mah-toe-poy-EE-sis', 'leukocyte|LOO-koe-site',
    'erythrocyte|eh-RITH-roe-site', 'thrombocyte|THROM-boe-site', 'myocardium|mye-oh-KAR-dee-um', 'pericardium|pair-ih-KAR-dee-um', 'mediastinum|mee-dee-ah-STYE-num',
    'pleura|PLOOR-ah', 'pleural|PLOOR-al', 'diaphragm|DYE-ah-fram', 'trachea|TRAY-kee-ah', 'larynx|LAIR-inks', 'pharynx|FAIR-inks', 'epiglottis|ep-ih-GLOT-is', 'bronchi|BRONG-kye',
    'bronchiole|BRONG-kee-ole', 'mucosa|myoo-KOE-sah',
    // ---- Signs, conditions and procedures ----
    'acidosis|as-ih-DOE-sis', 'alkalosis|al-kah-LOE-sis', 'hypercapnia|hye-per-KAP-nee-ah', 'hypoxemia|hye-pox-EE-mee-ah', 'hypoxia|hye-POX-ee-ah', 'dyspnea|DISP-nee-ah',
    'orthopnea|or-THOP-nee-ah', 'paroxysmal|pair-ok-SIZ-mal', 'tachypnea|tak-IP-nee-ah', 'bradypnea|brad-IP-nee-ah', 'tachycardia|tak-ih-KAR-dee-ah', 'bradycardia|bray-dee-KAR-dee-ah',
    'hypotension|hye-poe-TEN-shun', 'hypertension|hye-per-TEN-shun', 'cyanosis|sye-ah-NOE-sis', 'stridor|STRYE-dor', 'rhonchi|RONG-kye', 'crackles|KRAK-elz', 'sputum|SPYOO-tum',
    'edema|eh-DEE-mah', 'pneumothorax|noo-moe-THOR-ax', 'hemothorax|hee-moe-THOR-ax', 'thoracentesis|thor-ah-sen-TEE-sis', 'bronchoscopy|brong-KOS-koe-pee',
    'atelectasis|at-eh-LEK-tah-sis', 'spirometer|spih-ROM-eh-ter', 'spirometry|spih-ROM-eh-tree', 'capnography|kap-NOG-rah-fee', 'apnea|AP-nee-ah', 'tracheostomy|tray-kee-OS-toe-mee',
    'laryngectomy|lair-in-JEK-toe-mee', 'epistaxis|ep-ih-STAX-is', 'asthma|AZ-mah', 'asthmaticus|az-MAT-ih-kus', 'pneumonia|noo-MOE-nee-ah', 'sepsis|SEP-sis',
    'tuberculosis|too-ber-kyoo-LOE-sis', 'tuberculin|too-BER-kyoo-lin', 'induration|in-dyoo-RAY-shun', 'Mantoux|man-TOO', 'emphysema|em-fih-SEE-mah', 'bronchitis|brong-KYE-tis',
    'cystic fibrosis|SIS-tik fye-BROE-sis', 'fibrosis|fye-BROE-sis', 'idiopathic|id-ee-oh-PATH-ik', 'pulmonary|PUL-moe-nair-ee', 'peritonsillar|pair-ih-TON-sih-lar',
    'trismus|TRIZ-mus', 'sinusitis|sye-nyoo-SYE-tis', 'influenza|in-floo-EN-zah', 'histoplasmosis|his-toe-plaz-MOE-sis', 'coccidioidomycosis|kok-sid-ee-oy-doe-mye-KOE-sis',
    'blastomycosis|blas-toe-mye-KOE-sis', 'anthrax|AN-thrax', 'hemoptysis|hee-MOP-tih-sis', 'crepitus|KREP-ih-tus', 'fremitus|FREM-ih-tus', 'vesicular|veh-SIK-yoo-lar',
    'kyphosis|kye-FOE-sis', 'perfusion|per-FYOO-zhun', 'orthostatic|or-thoe-STAT-ik', 'diuretic|dye-yoo-RET-ik', 'diuresis|dye-yoo-REE-sis', 'hypokalemia|hye-poe-kah-LEE-mee-ah',
    'hyperkalemia|hye-per-kah-LEE-mee-ah', 'hyponatremia|hye-poe-nah-TREE-mee-ah', 'hypomagnesemia|hye-poe-mag-neh-SEE-mee-ah', 'troponin|TROE-poe-nin', 'myocardial|mye-oh-KAR-dee-al',
    'infarction|in-FARK-shun', 'angina|an-JYE-nah', 'fibrillation|fib-rih-LAY-shun', 'ventricular|ven-TRIK-yoo-lar', 'atrial|AY-tree-al', 'asystole|ay-SIS-toe-lee',
    'defibrillation|dee-fib-rih-LAY-shun', 'cardioversion|kar-dee-oh-VER-zhun', 'catheterization|kath-eh-ter-ih-ZAY-shun', 'retroperitoneal|reh-troe-pair-ih-toe-NEE-al',
    'thrombocytopenia|throm-boe-sye-toe-PEE-nee-ah', 'anemia|ah-NEE-mee-ah', 'vaso-occlusive|VAY-zoe-oh-KLOO-siv', 'leukemia|loo-KEE-mee-ah', 'lymphoma|lim-FOE-mah',
    'myeloma|mye-eh-LOE-mah', 'petechiae|peh-TEE-kee-ee', 'purpura|PUR-pyoo-rah', 'ecchymosis|ek-ih-MOE-sis', 'embolism|EM-boe-liz-um', 'embolus|EM-boe-lus',
    'thrombosis|throm-BOE-sis', 'thrombus|THROM-bus', 'hemostasis|hee-moe-STAY-sis', 'neutropenia|noo-troe-PEE-nee-ah', 'pancytopenia|pan-sye-toe-PEE-nee-ah',
    'pericarditis|pair-ih-kar-DYE-tis', 'endocarditis|en-doe-kar-DYE-tis', 'tamponade|tam-poe-NADE', 'cardiomyopathy|kar-dee-oh-mye-OP-ah-thee', 'aneurysm|AN-yoo-rizm',
    'dissection|dye-SEK-shun', 'hepatotoxicity|hep-ah-toe-tox-IS-ih-tee', 'ototoxicity|oe-toe-tox-IS-ih-tee', 'nephrotoxicity|nef-roe-tox-IS-ih-tee', 'anaphylaxis|an-ah-fih-LAX-is',
    'angioedema|an-jee-oh-eh-DEE-mah', 'rhabdomyolysis|rab-doe-mye-OL-ih-sis', 'torsades de pointes|tor-SAHD deh PWANT', 'torsades|tor-SAHD', 'Wenckebach|WENK-eh-bahk',
    'Mobitz|MOE-bits', 'syncope|SING-koe-pee', 'diaphoresis|dye-ah-for-EE-sis', 'diaphoretic|dye-ah-for-ET-ik', 'koilonychia|koy-loe-NIK-ee-ah', 'glossitis|gloss-EYE-tis',
    'pallor|PAL-or', 'jaundice|JAWN-dis', 'paresthesia|pair-es-THEE-zhah', 'pica|PYE-kah', 'pernicious|per-NISH-us', 'aplastic|ay-PLAS-tik', 'sickle|SIK-el',
    'hyperinflation|hye-per-in-FLAY-shun', 'pleuritic|ploo-RIT-ik', 'tachydysrhythmia|tak-ee-dis-RITH-mee-ah', 'dysrhythmia|dis-RITH-mee-ah', 'arrhythmia|ah-RITH-mee-ah',
    'Trendelenburg|tren-DEL-en-burg', 'Fowler|FOW-ler', 'Virchow|FEER-koe', 'Kussmaul|KOOS-mowl', 'cardiogenic|kar-dee-oh-JEN-ik', 'hypovolemia|hye-poe-voe-LEE-mee-ah',
    'hypervolemia|hye-per-voe-LEE-mee-ah', 'intrinsic factor|in-TRIN-sik FAK-ter', 'phlebotomy|fleh-BOT-oh-mee', 'transfusion|trans-FYOO-zhun', 'aspiration|as-pih-RAY-shun',
    'incentive spirometer|in-SEN-tiv spih-ROM-eh-ter', 'ischemia|is-KEE-mee-ah', 'ischemic|is-KEE-mik', 'necrosis|neh-KROE-sis', 'auscultation|aws-kul-TAY-shun',
    'percussion|per-KUSH-un', 'palpation|pal-PAY-shun', 'nebulizer|NEB-yoo-lye-zer', 'hemodynamic|hee-moe-dye-NAM-ik', 'inotrope|IN-oh-trope', 'inotropic|in-oh-TROE-pik',
    'chronotropic|kron-oh-TROE-pik', 'prophylaxis|proe-fih-LAX-is', 'teratogenic|teh-rat-oh-JEN-ik', 'neuropathy|noo-ROP-ah-thee', 'thrombolytic|throm-boe-LIT-ik',
    'fibrinolytic|fye-brin-oh-LIT-ik', 'anticoagulant|an-tee-koe-AG-yoo-lant', 'antiplatelet|an-tee-PLATE-let', 'erythropoiesis|eh-rith-roe-poy-EE-sis',
    // ---- Abbreviations (said in full) ----
    'COPD|C-O-P-D|C O P D, chronic obstructive pulmonary disease', 'BNP|B-N-P|B N P, B-type natriuretic peptide', 'JVD|J-V-D|J V D, jugular vein distension',
    'SBAR|ESS-bar|S-bar: situation, background, assessment, recommendation', 'NPO|N-P-O|N P O, nothing by mouth', 'INR|I-N-R|I N R, international normalized ratio',
    'aPTT|A-P-T-T|A P T T, activated partial thromboplastin time', 'PEA|P-E-A|P E A, pulseless electrical activity', 'SVT|S-V-T|S V T, supraventricular tachycardia',
    'HFrEF|HEF-ref|heff-ref, heart failure with reduced ejection fraction', 'HFpEF|HEF-pef|heff-pef, heart failure with preserved ejection fraction',
    'CPAP|SEE-pap|see-pap, continuous positive airway pressure', 'ABG|A-B-G|A B G, arterial blood gas', 'MCV|M-C-V|M C V, mean corpuscular volume',
    'ANC|A-N-C|A N C, absolute neutrophil count', 'PND|P-N-D|P N D, paroxysmal nocturnal dyspnea', 'SpO₂|S-P-O-2|S P O 2, oxygen saturation',
    'PaO₂|P-A-O-2|P A O 2, arterial oxygen', 'PaCO₂|P-A-C-O-2|P A C O 2, arterial carbon dioxide', 'HCO₃⁻|BYE-karb|bicarbonate', 'tPA|T-P-A|T P A, tissue plasminogen activator',
    'HIT|H-I-T|H I T, heparin-induced thrombocytopenia', 'DVT|D-V-T|D V T, deep vein thrombosis', 'VTE|V-T-E|V T E, venous thromboembolism', 'PE|P-E|P E, pulmonary embolism',
    'MI|M-I|M I, myocardial infarction', 'ACS|A-C-S|A C S, acute coronary syndrome', 'OSA|O-S-A|O S A, obstructive sleep apnea', 'PAD|P-A-D|P A D, peripheral arterial disease',
    'ABI|A-B-I|A B I, ankle-brachial index', 'PAH|P-A-H|P A H, pulmonary arterial hypertension', 'IPF|I-P-F|I P F, idiopathic pulmonary fibrosis', 'SVR|S-V-R|S V R, systemic vascular resistance',
    'ADH|A-D-H|A D H, antidiuretic hormone', 'ACE|ACE|ace, angiotensin-converting enzyme', 'ARB|A-R-B|A R B, angiotensin receptor blocker', 'ARNI|AR-nee|ar-nee, angiotensin receptor neprilysin inhibitor',
    'SABA|SAH-bah|sah-bah, short-acting beta agonist', 'LABA|LAH-bah|lah-bah, long-acting beta agonist', 'LAMA|LAH-mah|lah-mah, long-acting muscarinic antagonist',
    'SAMA|SAH-mah|sah-mah, short-acting muscarinic antagonist', 'ICS|I-C-S|I C S, inhaled corticosteroid', 'DOAC|DOE-ak|doe-ack, direct oral anticoagulant',
    'LMWH|L-M-W-H|L M W H, low molecular weight heparin', 'CHF|C-H-F|C H F, congestive heart failure', 'ECG|E-C-G|E C G, electrocardiogram', 'EKG|E-K-G|E K G, electrocardiogram',
    'QRS|Q-R-S|Q R S', 'ETCO₂|end-TY-dal C-O-2|end-tidal C O 2', 'FEV₁|F-E-V-1|F E V 1, forced expiratory volume in one second', 'CBC|C-B-C|C B C, complete blood count',
    'WBC|W-B-C|W B C, white blood cells', 'RBC|R-B-C|R B C, red blood cells', 'PRBC|P-R-B-C|P R B C, packed red blood cells', 'DIC|D-I-C|D I C, disseminated intravascular coagulation',
    'ITP|I-T-P|I T P, immune thrombocytopenia', 'TTP|T-T-P|T T P, thrombotic thrombocytopenic purpura', 'GVHD|G-V-H-D|G V H D, graft-versus-host disease', 'LVAD|EL-vad|L-vad, left ventricular assist device',
    'ICD|I-C-D|I C D, implantable cardioverter-defibrillator', 'AAA|triple-A|triple A, abdominal aortic aneurysm', 'EF|E-F|E F, ejection fraction', 'PCI|P-C-I|P C I, percutaneous coronary intervention',
    'STEMI|STEM-ee|stemmy, S T elevation myocardial infarction', 'NSTEMI|EN-stem-ee|en-stemmy, non S T elevation myocardial infarction', 'CABG|CAB-ij|cabbage, coronary artery bypass graft',
    'PAC|P-A-C|P A C, premature atrial contraction', 'PVC|P-V-C|P V C, premature ventricular contraction', 'TB|T-B|T B, tuberculosis', 'DOT|D-O-T|D O T, directly observed therapy',
    'PPE|P-P-E|P P E, personal protective equipment', 'PCA|P-C-A|P C A, patient-controlled analgesia', 'PRN|P-R-N|P R N, as needed', 'AF|A-F|A F, atrial fibrillation',
    'VF|V-F|V F, ventricular fibrillation', 'VT|V-T|V T, ventricular tachycardia', 'HF|H-F|H F, heart failure', 'HTN|H-T-N|H T N, hypertension', 'CAD|C-A-D|C A D, coronary artery disease'
  ];

  var E = {}, CI = [], CS = [], DEF = {}, RE_CI, RE_CS;
  function addWord(term, re, say) {
    if (E[term.toLowerCase()]) return;
    E[term.toLowerCase()] = { term: term, re: re, say: say || term.toLowerCase().replace(/₂/g, ' 2').replace(/₃⁻/g, '3') };
    (/[A-Z].*[A-Z]|[₀-₉]/.test(term) ? CS : CI).push(term);
  }
  WORDS.forEach(function (w) { var p = w.split('|'); addWord(p[0], p[1], p[2]); });
  var esc = function (s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); };
  var alt = function (list, plural) { return list.slice().sort(function (a, b) { return b.length - a.length; }).map(function (t) { return esc(t) + (plural && /[a-z]$/.test(t) ? '(?:e?s)?' : /[A-Z0-9]$/.test(t) ? 's?' : ''); }).join('|'); };
  // A word boundary that also works on older Safari (no lookbehind): group 1 is the character before the word.
  function compile() {
    RE_CI = new RegExp('(^|[^A-Za-z])(' + alt(CI, true) + ')(?![A-Za-z])', 'gi');
    RE_CS = new RegExp('(^|[^A-Za-z])(' + alt(CS, false) + ')(?![A-Za-z])', 'g');
  }
  compile();
  // The meanings (and ~270 more abbreviations) load once, in the background.
  function loadWords() {
    if (window.E2_WORDS || document.getElementById('e2-words')) return;
    var sc = document.createElement('script'); sc.id = 'e2-words';
    sc.src = (location.pathname.indexOf('/offline/') >= 0 ? '../' : '') + 'data/words.js?v=' + (SRC.split('?v=')[1] || '1');
    sc.onload = function () {
      var W = window.E2_WORDS || {}; DEF = W.def || {};
      (W.add || []).forEach(function (a) { addWord(a[0], a[1], a[2]); });
      compile(); if (on) scan();
    };
    document.head.appendChild(sc);
  }
  function lookup(word) {
    var k = word.toLowerCase();
    if (E[k]) return E[k];
    var s = k.replace(/es$/, ''), t = k.replace(/s$/, '');
    return E[s] || E[t] || null;
  }
  function meaning(e) { var k = e.term.toLowerCase(); return DEF[k] || DEF[k.replace(/e?s$/, '')] || {}; }
  function matches(text) {
    var out = [], m;
    [RE_CI, RE_CS].forEach(function (re) {
      re.lastIndex = 0;
      while ((m = re.exec(text))) { var st = m.index + m[1].length; out.push({ start: st, end: st + m[2].length, word: m[2] }); if (re.lastIndex === m.index) re.lastIndex++; }
    });
    return out;
  }

  // ---- Speaking ----
  var synth = window.speechSynthesis, voice = null;
  function pickVoice() {
    if (!synth) return;
    var vs = synth.getVoices() || [];
    voice = vs.filter(function (v) { return /^en[-_]US/i.test(v.lang); }).sort(function (a, b) { return (/Samantha|Google|Natural|Premium|Enhanced/.test(b.name) ? 1 : 0) - (/Samantha|Google|Natural|Premium|Enhanced/.test(a.name) ? 1 : 0); })[0] || vs.filter(function (v) { return /^en/i.test(v.lang); })[0] || null;
  }
  if (synth) { pickVoice(); if (synth.addEventListener) synth.addEventListener('voiceschanged', pickVoice); }
  function speak(text, rate) {
    if (!synth) return false;
    synth.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = rate || 0.9; if (voice) u.voice = voice;
    synth.speak(u); return true;
  }
  // Slow mode reads the respelling one syllable at a time.
  function syllables(e) { return e.re.split(' ').map(function (w) { return w.split('-').map(function (s) { return s.toLowerCase(); }).join(', '); }).join('. ') + '.'; }

  // ---- The button, the bubble and the highlight ----
  var on = false; try { on = localStorage.getItem('e2-say') === '1'; } catch (e) {}
  var css = document.createElement('style');
  css.textContent =
    '.e2say-btn{position:fixed;right:14px;bottom:calc(84px + env(safe-area-inset-bottom));z-index:60;display:flex;align-items:center;gap:6px;padding:8px 12px;border-radius:99px;border:1px solid rgba(255,255,255,.18);background:rgba(4,22,14,.88);color:#f3efe2;font:500 13px/1 Inter,system-ui,sans-serif;cursor:pointer;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 6px 20px rgba(0,0,0,.35)}' +
    '.e2say-btn[aria-pressed="true"]{background:#f5c400;color:#04160e;border-color:#f5c400}' +
    '.e2say-btn svg{width:16px;height:16px}' +
    '::highlight(e2say){background-color:rgba(245,196,0,.22);color:inherit}' +
    '.e2say-on .e2say-uline{text-decoration:underline dotted rgba(245,196,0,.8)}' +
    '.e2say-pop{position:fixed;z-index:70;max-width:min(320px,calc(100vw - 24px));padding:12px 14px;border-radius:14px;border:1px solid rgba(245,196,0,.55);background:#0a2418;color:#f3efe2;font:14px/1.4 Inter,system-ui,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.45)}' +
    '.e2say-pop b{display:block;font-size:17px;font-weight:600;color:#ffe27a}' +
    '.e2say-pop .r{font-size:14px;letter-spacing:.02em;margin:4px 0 0;color:#c9c2ae}' +
    '.e2say-pop .fn{font-size:13px;color:#ffe9a8;margin-top:1px}' +
    '.e2say-pop .def{font-size:14px;color:#f3efe2;margin-top:6px}' +
    '.e2say-pop .dc{display:inline-block;margin-top:6px;font-size:13px;color:#ffd84d}' +
    '.e2say-pop .hint{font-size:11px;color:#9a937f;margin-top:4px}' +
    '.e2say-pop .row{display:flex;gap:6px;margin-top:8px}' +
    '.e2say-pop button{flex:1;padding:7px 8px;border-radius:9px;border:1px solid rgba(255,255,255,.2);background:transparent;color:inherit;font:inherit;font-size:13px;cursor:pointer}' +
    '.e2say-tip{position:fixed;right:14px;bottom:calc(130px + env(safe-area-inset-bottom));z-index:60;max-width:240px;padding:10px 12px;border-radius:12px;background:#0a2418;border:1px solid rgba(245,196,0,.55);color:#f3efe2;font:13px/1.4 Inter,system-ui,sans-serif}';
  var btn, pop, tip;
  var ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>';
  function setOn(v) {
    on = v; try { localStorage.setItem('e2-say', v ? '1' : '0'); } catch (e) {}
    btn.setAttribute('aria-pressed', v ? 'true' : 'false');
    btn.innerHTML = ICON + (v ? 'Tap a word' : 'Words');
    document.documentElement.classList.toggle('e2say-on', v);
    if (v) { scan(); showTip(); } else { clearMarks(); hidePop(); }
  }
  function showTip() {
    var seen = false; try { seen = localStorage.getItem('e2-say-tip') === '1'; } catch (e) {}
    if (seen) return;
    try { localStorage.setItem('e2-say-tip', '1'); } catch (e) {}
    tip = document.createElement('div'); tip.className = 'e2say-tip';
    tip.textContent = 'Drug names, medical words and abbreviations are highlighted. Tap one to hear it and see what it means. Tap this button again to turn it off.';
    document.body.appendChild(tip); setTimeout(function () { if (tip) { tip.remove(); tip = null; } }, 7000);
  }
  function hidePop() { if (pop) { pop.remove(); pop = null; } }
  function showPop(e, x, y, said) {
    hidePop();
    pop = document.createElement('div'); pop.className = 'e2say-pop'; pop.setAttribute('role', 'dialog');
    var M = meaning(e);
    var full = M.full || (e.say && e.say.indexOf(',') > 0 ? e.say.split(', ').slice(1).join(', ') : '');
    pop.innerHTML = '<b></b>' + (full ? '<div class="fn"></div>' : '') + '<div class="r"></div>' + (M.def ? '<div class="def"></div>' : '') +
      ((M.drug || M.drug3) && !/Drug%20Cards|Drug Cards/.test(location.pathname) ? '<a class="dc"></a>' : '') + '<div class="hint"></div><div class="row"><button type="button" data-a="again">▶ Again</button><button type="button" data-a="slow">🐢 Slow, by syllable</button></div>';
    pop.querySelector('b').textContent = e.term;
    pop.querySelector('.r').textContent = '🔊 ' + e.re;
    if (full) pop.querySelector('.fn').textContent = full;
    if (M.def) pop.querySelector('.def').textContent = M.def;
    var dc = pop.querySelector('.dc'); if (dc) { dc.textContent = 'Open the drug card →'; var ex3 = M.drug3 && (!M.drug || (window.E2Hub && window.E2Hub.exam) === '3'); dc.href = (location.pathname.indexOf('/offline/') >= 0 ? '../' : '') + (ex3 ? 'Exam 3 Drug Cards.dc.html#drug-' + M.drug3 : 'Exam 2 Drug Cards.dc.html#drug-' + M.drug); }
    pop.querySelector('.hint').textContent = said ? 'CAPITALS = the stressed syllable' : 'This browser has no voice — use the spelling above. CAPITALS = stressed.';
    pop.addEventListener('click', function (ev) {
      var a = ev.target.closest('button'); if (!a) return;
      ev.stopPropagation(); ev.preventDefault();
      if (a.dataset.a === 'again') speak(e.say); else speak(syllables(e), 0.7);
    }, true);
    document.body.appendChild(pop);
    var r = pop.getBoundingClientRect(), W = window.innerWidth, H = window.innerHeight;
    var left = Math.max(12, Math.min(W - r.width - 12, x - r.width / 2));
    var top = y + 18; if (top + r.height > H - 90) top = Math.max(12, y - r.height - 18);
    pop.style.left = left + 'px'; pop.style.top = top + 'px';
  }

  // Highlight known words without touching the page's own markup (CSS Custom Highlight API).
  var timer = null, observer = null;
  var SKIP = 'SCRIPT,STYLE,TEXTAREA,INPUT,SELECT,OPTION,NOSCRIPT,SVG,CODE';
  function textNodes() {
    var out = [], w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || n.nodeValue.length < 2) return NodeFilter.FILTER_REJECT;
        var p = n.parentElement; if (!p || p.closest(SKIP) || p.closest('.e2say-pop,.e2say-btn,.e2say-tip,nav,[data-nav]')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    while (w.nextNode()) out.push(w.currentNode);
    return out;
  }
  function clearMarks() { if (window.CSS && CSS.highlights) CSS.highlights.delete('e2say'); }
  function scan() {
    if (!on || !(window.CSS && CSS.highlights && window.Highlight)) return;
    var ranges = [];
    textNodes().forEach(function (n) {
      matches(n.nodeValue).forEach(function (m) { if (!lookup(m.word)) return; var r = document.createRange(); r.setStart(n, m.start); r.setEnd(n, m.end); ranges.push(r); });
    });
    var h = new Highlight(); ranges.forEach(function (r) { h.add(r); });
    CSS.highlights.set('e2say', h);
  }
  function rescan() { if (!on) return; clearTimeout(timer); timer = setTimeout(scan, 350); }

  // The word under a tap.
  function wordAt(x, y) {
    var node, off;
    if (document.caretPositionFromPoint) { var cp = document.caretPositionFromPoint(x, y); if (cp) { node = cp.offsetNode; off = cp.offset; } }
    else if (document.caretRangeFromPoint) { var cr = document.caretRangeFromPoint(x, y); if (cr) { node = cr.startContainer; off = cr.startOffset; } }
    if (!node || node.nodeType !== 3) return null;
    var p = node.parentElement; if (p && p.closest('.e2say-pop,.e2say-btn')) return null;
    var hits = matches(node.nodeValue);
    for (var i = 0; i < hits.length; i++) { var h = hits[i]; if (off >= h.start && off <= h.end) { var e = lookup(h.word); if (e) return e; } }
    return null;
  }
  function onTap(ev) {
    if (!on) return;
    if (pop && pop.contains(ev.target)) return;
    if (btn && btn.contains(ev.target)) return;
    var e = wordAt(ev.clientX, ev.clientY);
    if (!e) { hidePop(); return; }
    ev.preventDefault(); ev.stopPropagation(); if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
    var said = speak(e.say);
    showPop(e, ev.clientX, ev.clientY, said);
    try { window.dispatchEvent(new CustomEvent('e2say', { detail: { term: e.term } })); } catch (er) {}
  }

  function init() {
    document.head.appendChild(css);
    loadWords();
    btn = document.createElement('button'); btn.type = 'button'; btn.className = 'e2say-btn';
    btn.title = 'Tap drug names, medical words and abbreviations to hear them and see what they mean';
    btn.addEventListener('click', function (ev) { ev.stopPropagation(); setOn(!on); });
    document.body.appendChild(btn);
    window.addEventListener('click', onTap, true);
    observer = new MutationObserver(function (list) {
      for (var i = 0; i < list.length; i++) { var t = list[i].target; if (t && t.closest && t.closest('.e2say-pop,.e2say-btn,.e2say-tip')) continue; rescan(); return; }
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    window.addEventListener('scroll', function () { hidePop(); }, { passive: true });
    setOn(on);
  }
  function termsIn(text) {
    var seen = {}, out = [];
    matches(String(text || '')).forEach(function (m) {
      var e = lookup(m.word); if (!e || seen[e.term]) return; seen[e.term] = 1;
      var M = meaning(e); if (M.def || M.full) out.push({ term: e.term, full: M.full || '', def: M.def || '', re: e.re });
    });
    return out;
  }
  window.E2Say = { lookup: lookup, meaning: function (w) { var e = lookup(w); return e ? Object.assign({ term: e.term, re: e.re }, meaning(e)) : null; }, termsIn: termsIn, ready: function () { return !!window.E2_WORDS; }, speak: function (w) { var e = lookup(w); return e ? speak(e.say) : speak(w); }, count: WORDS.length };
  if (document.body) init(); else document.addEventListener('DOMContentLoaded', init);
})();
