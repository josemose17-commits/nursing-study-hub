// Think it through — Chapter 46 — oral cavity and esophageal conditions. Format: see data/e3/cj/README.md.
module.exports = [
  {
    id: 'stomatitis', sys: 'Digestion & elimination', name: 'Stomatitis and oral candidiasis',
    topics: ['46-stomatitis-the-tissue-integrity-exemplar'],
    nodes: ['stomatitis', 'microbes'], drugs: ['nystatin', 'clotrimazole', 'lidocainevis'],
    patient: 'A client on chemotherapy has painful mouth ulcers and white patches that wipe off to a red base, and is barely eating or drinking.',
    report: [
      'The client has multiple oral ulcers and white plaques, pain 8/10, and has drunk less than 500 mL in 24 hours; sodium 148 mEq/L.',
      'Receiving chemotherapy for breast cancer and a course of antibiotics.',
      'Severe stomatitis with probable oral candidiasis and early dehydration.',
      'Requesting an antifungal order, a topical analgesic, IV fluids and a dietitian consult.'
    ],
    steps: {
      rc: {
        gist: '**Painful ulcers**, redness and bleeding of the oral mucosa, **white plaques that wipe off to a red, sore base** (candidiasis), trouble **eating, swallowing or speaking**, and signs of **poor intake and dehydration**.',
        terms: [
          { t: 'Aphthous ulcers (canker sores)', see: 'Painful, shallow ulcers with a red rim inside the mouth.',
            why: 'Breaks in the **mucosal lining** expose the tissue underneath to food, acid and bacteria.',
            means: '**Pain, bleeding and infection** risk. Document each lesion’s location, size, color and drainage.' },
          { t: 'White plaques that wipe off (oral candidiasis)', see: 'White patches on the tongue, palate and cheeks; wiping leaves a red, sore base.',
            why: '***Candida albicans*** overgrows when **antibiotics** kill the normal flora or immunity is low (chemotherapy, steroids, diabetes, older age).',
            means: 'Treat with an antifungal (nystatin swish and spit, clotrimazole troches). Different from **leukoplakia**, which **cannot** be scraped off and may be precancerous.' },
          { t: 'Dysphagia and odynophagia', see: 'Trouble swallowing, pain with swallowing, food “sticking,” coughing with meals.',
            why: 'Lesions can extend into the **pharynx and esophagus**.',
            means: 'Risk of **aspiration and malnutrition** → screen with **PASS** and refer to speech-language pathology.' },
          { t: 'Dry mucosa with a rising sodium and BUN', see: 'Dry, sticky mouth; low intake; sodium and BUN climbing.',
            why: 'Pain keeps the client from drinking, and fluid loss **dries the mucosa**, which worsens the lesions.',
            means: 'Restore fluids (IV if needed) along with mouth care.' },
          { t: 'Chemotherapy stomatitis', see: 'Mouth sores starting days after chemotherapy.',
            why: 'Chemotherapy kills **rapidly dividing cells**, including the cells that renew the mouth lining, and lowers white cells so infections take hold.',
            means: 'Frequent gentle oral care; watch for infection; pain control so the client can eat.' }
        ],
        cards: ['46-stomatitis-the-tissue-integrity-exemplar > Assess', '46-stomatitis-the-tissue-integrity-exemplar > Candidiasis']
      },
      ac: {
        gist: 'Inflammation of the oral mucosa. **Primary**: aphthous ulcers, herpes simplex, trauma. **Secondary**: opportunistic viral, fungal or bacterial infection in clients who are **immunocompromised** or on **chemotherapy, radiation, steroids or long-term antibiotics**; also deficiencies of **B vitamins, folate, zinc or iron**.',
        cards: ['46-stomatitis-the-tissue-integrity-exemplar > Definition', '46-stomatitis-the-tissue-integrity-exemplar > Primary vs secondary',
          '46-stomatitis-the-tissue-integrity-exemplar > Other causes']
      },
      ph: {
        gist: '1. **Impaired tissue integrity** from oral lesions. 2. **Pain**. Watch for **airway** swelling in severe cases, **aspiration** with dysphagia, and poor **nutrition and hydration**.',
        cards: ['46-stomatitis-the-tissue-integrity-exemplar > Priority problems', '46-stomatitis-the-tissue-integrity-exemplar > Dysphagia action alert (PASS)']
      },
      gs: {
        gist: 'Keep the mouth **clean and moist**, **treat infection**, **relieve pain** so the client can eat and drink, and **prevent aspiration**.',
        terms: [
          { t: 'Why no commercial mouthwash or lemon-glycerin swabs', see: 'Rinse with warm saline or baking soda instead.',
            why: 'Alcohol and acid **dry and sting** the mucosa, and a dry mouth lets organisms thrive. Saline and baking soda clean without irritation and help neutralize acid.',
            means: 'Use a soft brush or gauze and toothpaste without sodium lauryl sulfate.' },
          { t: 'Viscous lidocaine', see: '2% viscous lidocaine, swish and spit, for pain.',
            why: 'It **numbs the mouth and throat** — including the protective reflexes.',
            means: 'The client may not feel **burns from hot drinks**, and **aspiration risk rises**. Use with caution and check swallowing.' }
        ],
        cards: ['46-stomatitis-the-tissue-integrity-exemplar > Drugs']
      },
      ta: {
        gist: 'Oral care **twice daily, after meals and as needed** (every 2 hours if severe) with a soft brush or gauze; rinse with **warm saline or baking soda**; antifungals as ordered; topical anesthetics with caution; **soft, bland, cool** foods and fluids; screen swallowing; inspect the mouth yourself even when AP gives oral care.',
        cards: ['46-stomatitis-the-tissue-integrity-exemplar > Oral care (Box 46.2)', '46-stomatitis-the-tissue-integrity-exemplar > Viscous lidocaine alert']
      },
      eo: {
        gist: 'Healthy mucosa **without inflammation or infection**, pain minimal, eating and drinking enough; the client can describe mouth care and self-exam.',
        cards: ['46-stomatitis-the-tissue-integrity-exemplar > Comfort and recovery', '46-stomatitis-the-tissue-integrity-exemplar > Prevention (Box 46.1)']
      }
    }
  },
  {
    id: 'oral-cancer', sys: 'Digestion & elimination', name: 'Oral cancer',
    topics: ['46-oral-tumors-oral-cancer-and-salivary-gla'],
    nodes: ['stomatitis'], drugs: [],
    patient: 'A 62-year-old who smokes and drinks has a red, raised sore on the side of his tongue that hasn’t healed in a month, and he is losing weight.',
    report: [
      'Eight hours after a partial glossectomy and neck dissection, the client has new inspiratory stridor; RR 28, SpO₂ 90%, copious oral secretions.',
      'Squamous cell carcinoma of the tongue; long-term smoker.',
      'Airway compromise from edema or secretions.',
      'I have called the Rapid Response Team, raised the head of the bed, suctioned with a Yankauer and applied oxygen. Please come evaluate now.'
    ],
    steps: {
      rc: {
        gist: 'A **painless red, raised or eroded lesion** or patch that **doesn’t heal in 2 weeks**, a lump or thickening in the cheek, mouth bleeding, **difficulty chewing or swallowing**, thick or absent saliva and **unplanned weight loss**. Precancerous: **leukoplakia** and **erythroplakia**.',
        terms: [
          { t: 'A lesion that doesn’t heal in 2 weeks', see: 'Red, raised or eroded sore, often painless at first.',
            why: 'Cancer cells **multiply without the normal controls**, so the tissue keeps growing instead of healing. Early lesions often don’t hurt, so people delay care.',
            means: 'Any mouth lesion lasting **more than 2 weeks** needs further assessment and a biopsy.' },
          { t: 'Leukoplakia', see: 'Thick white patch that **cannot be scraped off**.',
            why: 'The lining thickens in response to **chronic irritation** — tobacco, poorly fitting dentures, cheek chewing.',
            means: 'Usually benign, but on the **lips or tongue** it can become cancer. Ask about tobacco and offer cessation help.' },
          { t: 'Erythroplakia', see: 'Red, velvety patch on the floor of the mouth, tongue or palate.',
            why: 'Abnormal, **precancerous** changes in the lining.',
            means: 'Hard to tell from inflammation — refer for evaluation.' },
          { t: 'Dysphagia and weight loss', see: 'Trouble chewing and swallowing; losing weight without trying.',
            why: 'The tumor interferes with the tongue and throat movements needed to chew and swallow.',
            means: 'Risk of **aspiration and malnutrition** — swallow study, dietitian, possibly a feeding tube.' },
          { t: 'Stridor or wheezes after surgery', see: 'High-pitched sound on breathing in; wheezes; dyspnea.',
            why: '**Stridor** = partial airway obstruction from swelling or secretions; **wheezes** can mean aspiration.',
            means: '**Airway is the priority** — raise the head of the bed, suction, call for help.' }
        ],
        cards: ['46-oral-tumors-oral-cancer-and-salivary-gla > Key features (Box 46.3)', '46-oral-tumors-oral-cancer-and-salivary-gla > Erythroplakia',
          '46-oral-tumors-oral-cancer-and-salivary-gla > Leukoplakia']
      },
      ac: {
        gist: 'Most are **squamous cell carcinomas** after 40, driven by **tobacco, alcohol and HPV**; **basal cell** cancer of the lip from sun. Diagnosed by **biopsy**, staged with CT or MRI.',
        cards: ['46-oral-tumors-oral-cancer-and-salivary-gla > Types', '46-oral-tumors-oral-cancer-and-salivary-gla > Prevention and risk',
          '46-oral-tumors-oral-cancer-and-salivary-gla > Diagnose']
      },
      ph: {
        gist: '**Airway first** (edema, secretions, aspiration), then **aspiration risk**, **nutrition**, pain, and the effects on **speech and self-image**.',
        cards: ['46-oral-tumors-oral-cancer-and-salivary-gla > Airway first']
      },
      gs: {
        gist: 'Treat the tumor (excision, radiation, chemotherapy), **maintain the airway**, **prevent aspiration**, maintain **nutrition** (a gastrostomy tube if needed), and support **communication and self-image** with the team (speech therapist, dietitian, social worker).',
        cards: ['46-oral-tumors-oral-cancer-and-salivary-gla > Treatment', '46-oral-tumors-oral-cancer-and-salivary-gla > Speech, eating and self-image']
      },
      ta: {
        gist: '**Semi- or high-Fowler**, deep breathing, **Yankauer suction** at the bedside (teach the family); check the **gag reflex before any fluids**; thickened liquids and a swallow study; oral care **every 2 hours** with an ultrasoft brush and saline or baking soda — **no foam swabs**.',
        cards: ['46-oral-tumors-oral-cancer-and-salivary-gla > Aspiration precautions', '46-oral-tumors-oral-cancer-and-salivary-gla > Oral care']
      },
      eo: {
        gist: '**Patent airway**, no aspiration, weight stable, able to communicate needs; the client inspects the mouth daily and keeps follow-up visits.',
        cards: ['46-oral-tumors-oral-cancer-and-salivary-gla > At home (Box 46.4)']
      }
    }
  },
  {
    id: 'gerd', sys: 'Digestion & elimination', name: 'GERD, hiatal hernia and fundoplication',
    topics: ['46-gerd-the-nutrition-exemplar', '46-treating-gerd-diet-lifestyle-drugs-proce', '46-hiatal-hernia-and-fundoplication-care'],
    nodes: ['gerd', 'acid'], drugs: ['omeprazole', 'famotidine', 'almag'],
    patient: 'A 50-year-old with obesity has heartburn after meals that is worse lying down, a cough at night and a hoarse voice in the mornings.',
    report: [
      'The first day after an open fundoplication: the NG tube has had no drainage for 2 hours; the client is nauseated and retching with a distended abdomen.',
      'Large hiatal hernia with severe GERD; open fundoplication yesterday.',
      'Possible obstructed NG tube — retching puts the wrap’s sutures at risk.',
      'Requesting evaluation and orders for the NG tube (I have not repositioned or irrigated it) and an antiemetic.'
    ],
    steps: {
      rc: {
        gist: '**Pyrosis (heartburn)** and **dyspepsia** 20 minutes to 2 hours after meals, **regurgitation**, **water brash**, **dysphagia or odynophagia** — worse **lying down, bending or straining**, relieved by sitting up or antacids. Atypical: **chest pain**, **night cough, wheezing, morning hoarseness**, dental caries; older adults: dysphagia, vomiting, anemia.',
        terms: [
          { t: 'Pyrosis (heartburn)', see: 'Burning behind the sternum after meals or lying down.',
            why: 'A weak **lower esophageal sphincter (LES)** lets **acid and pepsin** flow back into the esophagus, which has no protective lining against them.',
            means: 'Follows **gravity and pressure** — upright position, small meals and antacids relieve it.' },
          { t: 'Regurgitation and water brash', see: 'Sour fluid coming up into the mouth; sudden flood of saliva in the throat.',
            why: 'Stomach contents reach the throat; **water brash** is reflex salivation as the body tries to wash down and neutralize the acid.',
            means: 'Regurgitation can lead to **aspiration** — listen for crackles.' },
          { t: 'Night cough, wheezing and morning hoarseness', see: 'Coughing or wheezing at night, new asthma, hoarse voice in the morning.',
            why: 'Lying flat lets reflux reach the **larynx and airways**, where acid irritates the vocal cords and bronchi.',
            means: 'Raise the head of the bed on blocks or a wedge; **nothing within 3 hours of bedtime**.' },
          { t: 'Chest pain that mimics angina', see: 'Severe pain spreading to the neck, jaw or back.',
            why: 'The esophagus and heart share **nerve pathways**, so the brain can’t tell them apart.',
            means: '**Rule out a cardiac cause first.** Many clients come to the ED fearing a heart attack — stay with them.' },
          { t: 'Progressive dysphagia', see: 'Food sticking, worse over time.',
            why: 'Chronic acid injury heals with **scar tissue** that narrows the esophagus (**stricture**).',
            means: 'Report it — it can also signal **Barrett’s esophagus or cancer**.' },
          { t: 'Fullness or breathlessness after eating', see: 'Feeling of suffocation after meals; chest pain that mimics angina; worse lying down.',
            why: 'In a **paraesophageal hiatal hernia**, part of the stomach sits in the chest and **presses on the lungs** when full.',
            means: 'Risk of **volvulus, obstruction and strangulation** — sudden severe pain is an emergency.' }
        ],
        cards: ['46-gerd-the-nutrition-exemplar > Ask', '46-gerd-the-nutrition-exemplar > Key features (Box 46.6)', '46-gerd-the-nutrition-exemplar > Older adults',
          { ref: '46-hiatal-hernia-and-fundoplication-care > Key features (Box 46.8)', as: 'Hiatal hernia — key features' }]
      },
      ac: {
        gist: 'A weak or inappropriately relaxed **LES** lets acid and pepsin reflux, injuring the esophagus (**esophagitis**). **Raised abdominal pressure** (obesity, pregnancy, tight clothing, bending) and slow stomach emptying push contents up; a **sliding hiatal hernia** weakens the barrier. Chronic GERD → **stricture** and **Barrett’s esophagus**.',
        terms: [
          { t: 'Barrett’s esophagus', see: 'Found on EGD with biopsy.',
            why: 'Repeated acid injury makes the esophageal lining **change into a more acid-resistant, intestine-like lining** (metaplasia).',
            means: '**Premalignant** — it raises the risk of esophageal adenocarcinoma, so it needs regular surveillance.' },
          { t: 'Ambulatory esophageal pH monitoring', see: 'A catheter or capsule records pH for 24–48 hours while the client keeps a diary.',
            why: 'Measures how often and how long acid is in the esophagus, matched to symptoms.',
            means: 'The **most accurate** test for GERD; manometry only checks function before surgery.' }
        ],
        cards: ['46-gerd-the-nutrition-exemplar > Definition', '46-gerd-the-nutrition-exemplar > Risk factors', '46-gerd-the-nutrition-exemplar > Complications',
          '46-gerd-the-nutrition-exemplar > Diagnosis', { ref: '46-hiatal-hernia-and-fundoplication-care > Types', as: 'Hiatal hernia — types' }]
      },
      ph: {
        gist: '1. **Acute pain** from reflux. 2. **Potential for compromised nutrition** from food choices. Also **aspiration**. After fundoplication: **lungs**, protecting the **wrap** (NG tube, no retching), and dysphagia.',
        cards: ['46-gerd-the-nutrition-exemplar > Priority problems', '46-gerd-the-nutrition-exemplar > The frightened patient']
      },
      gs: {
        gist: '**Positions, portions and timing** first; **acid suppression** (antacids, H₂ blockers, PPIs); stop drugs that lower LES pressure; **surgery** (laparoscopic Nissen fundoplication, LINX, Stretta) when medical treatment fails or the hiatal hernia is large.',
        terms: [
          { t: 'Long-term PPI use', see: 'Years of omeprazole or pantoprazole.',
            why: 'Stomach acid frees **calcium, iron and B₁₂** from food and kills swallowed microbes. Switching it off for years reduces absorption and defense.',
            means: 'Watch for **fractures** (especially older adults), deficiencies and infections; reassess the need regularly and step down slowly.' }
        ],
        cards: ['46-treating-gerd-diet-lifestyle-drugs-proce > The three classes', '46-treating-gerd-diet-lifestyle-drugs-proce > Drugs that cause reflux',
          '46-treating-gerd-diet-lifestyle-drugs-proce > Laparoscopic Nissen fundoplication (LNF)']
      },
      ta: {
        gist: '**4–6 small meals**, eat slowly; **nothing within 3 hours of bedtime**; **upright at least 1 hour after eating**; raise the head of the bed with blocks or a wedge; avoid peppermint, chocolate, fatty foods, caffeine, carbonated drinks, alcohol and tobacco; lose weight; loose clothing. After fundoplication: HOB ≥ 30°, **secure the NG tube — never reinsert or reposition it**, keep it patent, deep breathing, supervise the first oral feedings.',
        cards: ['46-treating-gerd-diet-lifestyle-drugs-proce > Meals and sleep', '46-treating-gerd-diet-lifestyle-drugs-proce > Food choices',
          '46-treating-gerd-diet-lifestyle-drugs-proce > Habits', '46-hiatal-hernia-and-fundoplication-care > The NG tube',
          '46-hiatal-hernia-and-fundoplication-care > After LNF (Box 46.9)']
      },
      eo: {
        gist: 'Symptoms controlled, **no aspiration**, eating comfortably; the client follows the diet and position changes and reports **worsening dysphagia**. After surgery: eating without persistent dysphagia or gas bloat.',
        cards: ['46-treating-gerd-diet-lifestyle-drugs-proce > Long-term PPI cautions', '46-hiatal-hernia-and-fundoplication-care > Complications (Box 46.10)']
      }
    }
  },
  {
    id: 'esophageal-cancer', sys: 'Digestion & elimination', name: 'Esophageal cancer and esophagectomy',
    topics: ['46-esophageal-cancer-and-esophagectomy'],
    nodes: ['gerd'], drugs: [],
    patient: 'A 66-year-old with years of untreated GERD and a smoking history has had worsening trouble swallowing solids for months and has lost 25 lb.',
    report: [
      'Five days after an esophagectomy, the client has a temperature of 101.6°F, HR 124, RR 28 and new confusion; chest tube drainage has turned cloudy.',
      'Esophagectomy for adenocarcinoma; NPO with jejunostomy feedings.',
      'Suspected anastomotic leak with early sepsis.',
      'I am notifying the surgeon and the Rapid Response Team now. Requesting cultures, a lactate level and antibiotics; keeping the client strictly NPO.'
    ],
    steps: {
      rc: {
        gist: 'Silent early, then **persistent, progressive dysphagia** with **weight loss**, food sticking, odynophagia, halitosis, hiccups, chronic cough and **hoarseness**. After esophagectomy: **fever, tachycardia, tachypnea, altered mental status** (anastomotic leak), crackles, hypotension, **atrial fibrillation**.',
        terms: [
          { t: 'Progressive dysphagia', see: 'Solids first, then soft foods, then liquids.',
            why: 'The tumor **narrows the lumen**; swallowing problems usually appear only once it is substantially narrowed, which is why the cancer is often found late.',
            means: 'Semisoft foods and thickened liquids, upright for meals; watch every meal for **aspiration**.' },
          { t: 'Weight loss', see: 'Often more than 20 lb over months.',
            why: 'The client **can’t get enough food down**, and the cancer increases metabolic demands.',
            means: 'Daily weight before breakfast on the same scale; enteral feeding if dysphagia is severe.' },
          { t: 'Hoarseness and chronic cough', see: 'Voice changes; cough with more secretions.',
            why: 'The tumor can involve the **recurrent laryngeal nerve** or let material into the airway.',
            means: 'Assess for **aspiration** and report changes.' },
          { t: 'Anastomotic leak (days 2–10 after surgery)', see: 'Fever, tachycardia, tachypnea, altered mental status, fluid collecting, inflammation.',
            why: 'The new join between the stomach and esophagus sits **inside the chest**; a leak spills saliva and gastric juice into the **mediastinum**, causing **mediastinitis and sepsis**.',
            means: '**Critical rescue**: report immediately to the surgeon and the Rapid Response Team; **nothing by mouth**.' },
          { t: 'Hypotension and atrial fibrillation after surgery', see: 'Low BP; new irregular rhythm.',
            why: 'The stomach pulled up into the chest **presses on the back of the heart**; the surgery irritates the **vagus nerve**.',
            means: 'Hemodynamic and cardiac monitoring; also watch for **fluid overload** (crackles, edema, raised JVP).' }
        ],
        cards: ['46-esophageal-cancer-and-esophagectomy > Key features (Box 46.11)', '46-esophageal-cancer-and-esophagectomy > Anastomotic leak',
          '46-esophageal-cancer-and-esophagectomy > Heart and fluids']
      },
      ac: {
        gist: 'A tumor of the esophagus linked to **untreated GERD, smoking, alcohol, obesity** and nitrate-rich foods, usually found late. Esophagectomy places the **stomach in the chest**, joined to the remaining esophagus beside the lungs, heart and mediastinum.',
        cards: ['46-esophageal-cancer-and-esophagectomy > Risk factors', '46-esophageal-cancer-and-esophagectomy > Diagnose and support']
      },
      ph: {
        gist: '**Lungs first** — atelectasis, pneumonia, aspiration — then **anastomotic leak and sepsis**, hemodynamic changes and fluid balance, and **nutrition**.',
        cards: ['46-esophageal-cancer-and-esophagectomy > Lungs first']
      },
      gs: {
        gist: 'Before surgery: **stop smoking**, respiratory rehab and nutrition support. After: protect the **lungs** and the **anastomosis**, **nothing by mouth** until a barium swallow shows it is sealed, and feed through the **jejunostomy**.',
        cards: ['46-esophageal-cancer-and-esophagectomy > Before', '46-esophageal-cancer-and-esophagectomy > Nutrition and swallowing',
          '46-esophageal-cancer-and-esophagectomy > Cancer treatments']
      },
      ta: {
        gist: '**Turn, cough and deep breathe every 1–2 hours**, splint the incision, incentive spirometry, **semi- or high-Fowler**; keep the chest tube patent; **secure the NG tube — never irrigate or reposition it without an order**; oral and nasal care every 2–4 hours; J-tube feedings from day 2 (**don’t aspirate for residual**); report leak signs at once.',
        cards: ['46-esophageal-cancer-and-esophagectomy > NG tube after esophageal surgery (Box 46.12)', '46-esophageal-cancer-and-esophagectomy > Feeding after surgery']
      },
      eo: {
        gist: 'Clear breath sounds, **no leak** on the barium swallow (day 7), stable vital signs; eating small, soft, high-calorie meals **upright**; the client reports a **weight loss of 5 lb or more in a month** and returning dysphagia.',
        cards: ['46-esophageal-cancer-and-esophagectomy > At home']
      }
    }
  }
];
