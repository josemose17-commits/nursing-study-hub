// Exam 3 Mastery test — more questions, loaded after the chapter files (data/e3/q/<chapter>.js) and added to the end of
// each chapter's lists, so the ids of the questions already there don't change.
// These add the NGN formats the chapter files don't use (highlight in text and table, trend, select N, multiple-response
// matrix, grouping, drag-and-drop cloze, drop-down and drag-and-drop rationale, drop-down in table, calculations) and more
// prioritizing, delegation, communication and dosage questions. Same fields as the chapter files, plus the labels
// cj (clinical judgment step), cn (Client Needs) and st (strategies) — keys in ncjmm.js.
// Formats: hl parts: text and { h, c, r }; hlt head + rows [{ cells, c, r }]; selectn o + a (N = a.length);
// mmatrix rows [{ t, a: [columns], r }]; group groups [{ h, o, a, r }]; dnd / dndr parts with { a, r } + tokens;
// ddr parts with { o, a, r } (2 blanks = a dyad, 3 = a triad); ddt head + rows of cells (text or { o, a, r });
// calc ans (rounded as dp says), unit, dp, work.
(function () {
  // Single-answer items (f: 'mcq') join the chapter's traditional questions; everything else joins its NGN items.
  const N = (ch, items) => {
    const R = window.RECALL_EXTRA[ch] = window.RECALL_EXTRA[ch] || {}, ngn = window.NGN_EXTRA[ch] = window.NGN_EXTRA[ch] || [];
    items.forEach(x => { if (x.f === 'mcq') { const y = Object.assign({}, x); delete y.f; (R.nclex = R.nclex || []).push(y); } else ngn.push(x); });
  };

  // ---------- Ch 45 · GI assessment ----------
  N('45', [
    { f: 'hl', t: 'After polypectomy — what needs follow-up', cj: 'rc', cn: 'rrp', st: ['abnormal', 'data'],
      q: 'Read the nurse’s note. Highlight the findings that need follow-up.',
      parts: ['1400 — Back from colonoscopy with removal of three polyps 3 hours ago. Client is ', { h: 'awake and oriented', c: 0, r: 'Expected. Moderate sedation should have worn off by 3 hours.' },
        ' and reports ', { h: 'mild cramping', c: 0, r: 'Expected. Air or carbon dioxide is put into the colon to see the wall; the gas causes cramping until it is passed.' }, '. Has been ', { h: 'passing flatus', c: 0, r: 'Expected and good — the instilled gas is moving out.' },
        '. Abdomen ', { h: 'soft and slightly distended', c: 0, r: 'Expected. Mild distention from the gas is normal; a rigid abdomen would not be.' }, '. ', { h: 'Heart rate 112, up from 76 before the procedure', c: 1, r: 'Follow up. A rising pulse after polypectomy is an early sign of bleeding (or perforation).' },
        '. ', { h: 'Feels lightheaded when sitting up', c: 1, r: 'Follow up. Orthostatic symptoms point to a falling blood volume.' }, '. ', { h: 'SpO₂ 97% on room air', c: 0, r: 'Normal.' },
        '. ', { h: 'Passed a large maroon stool', c: 1, r: 'Follow up. A little blood on the tissue can follow polyp removal; a large maroon stool means real bleeding from the colon.' }, '.'],
      ask: 'After a scope with polyp removal, which findings are the expected gas and sedation effects — and which point to a bleed?',
      cues: ['Polypectomy → bleeding risk', 'Pulse 76 → 112', 'Lightheaded sitting up', 'Large maroon stool'],
      phys: 'Removing a polyp leaves a raw spot on the colon wall → the vessel there can bleed hours (or days) later → blood loss lowers the circulating volume → the heart speeds up to keep up the output → standing or sitting up drops the pressure further → lightheadedness. Blood from the colon comes out maroon or red.',
      rule: 'After colonoscopy: cramping, gas and mild distention are expected. A rising pulse, lightheadedness, a large bloody or maroon stool, severe pain, a rigid abdomen or fever = report now.' },
    { f: 'sata', t: 'Delegating after an EGD', cj: 'ta', cn: 'mgmt', st: ['deleg'],
      q: 'A client is back on the medical unit 2 hours after an EGD under moderate sedation. The RN has assessed the client: awake, vital signs stable, recovery from sedation complete. Which tasks can the RN delegate to the assistive personnel (AP)? Select all that apply.',
      o: ['Take and record vital signs every 30 minutes as prescribed', 'Check the gag reflex before the client drinks anything', 'Offer sips of water once the RN has confirmed the gag reflex is back', 'Teach the client which symptoms of perforation to report at home', 'Tell the RN right away about new chest pain, trouble swallowing or a temperature above 100.4 °F (38 °C)', 'Decide whether the client’s sore throat is expected'],
      a: [0, 2, 4],
      r: ['Correct. Routine vital signs on a stable client are within the AP’s role; the RN interprets them.',
        'Incorrect. Checking the gag reflex is an assessment — the RN does it.',
        'Correct. Once the RN has assessed that it is safe, helping a stable client drink is basic care.',
        'Incorrect. Teaching is the RN’s.',
        'Correct. The AP collects and reports; telling the AP exactly what to report is good delegation.',
        'Incorrect. Deciding whether a finding is expected is analysis — the RN’s job.'],
      ask: 'Which of these are routine, stable-client tasks — and which need nursing judgment?',
      cues: ['Stable client after a routine procedure', 'Assess, teach, evaluate = RN', 'Collect, report, assist = AP'],
      phys: 'Delegation follows the client’s stability and the task’s need for judgment → measuring and reporting are tasks with a set method → deciding what a finding means, checking a protective reflex and teaching all need the RN’s assessment.',
      rule: 'AP: vital signs, hygiene, feeding and helping a stable client, reporting what the RN asked to hear about. RN: assessment, teaching, evaluation, judgment.' }
  ]);

  // ---------- Ch 46 · Mouth & esophagus ----------
  N('46', [
    { f: 'ddr', t: 'Esophageal cancer — the priority risk', cj: 'ph', cn: 'rrp', st: ['abnormal', 'actual'],
      q: 'A client with esophageal cancer has lost 6 kg in 2 months. The client coughs during meals, and the voice sounds wet after swallowing. Today the temperature is 100.9 °F (38.3 °C) and crackles are heard in the right lower lobe. Complete the sentence.',
      parts: ['The client is at highest risk for ', { o: ['aspiration pneumonia', 'dumping syndrome', 'hypercalcemia'], a: 0, r: 'Aspiration pneumonia. A tumor that narrows the esophagus lets food and saliva back up toward the airway; coughing with meals means it is going down the wrong way.' },
        ' as shown by ', { o: ['coughing and a wet voice after swallowing', 'weight loss of 6 kg in 2 months', 'heartburn after large meals'], a: 0, r: 'Coughing and a wet, gurgly voice after swallowing show material entering the airway. Weight loss is real but points to malnutrition, not aspiration.' },
        ' and ', { o: ['fever with crackles in the right lower lobe', 'a sore, red tongue', 'pain that improves with antacids'], a: 0, r: 'Fever with right-lower-lobe crackles is the picture of aspiration pneumonia — the right main bronchus is straighter, so aspirated material usually lands there.' }, '.'],
      ask: 'Which problem do these cues fit together — and which cue proves it?',
      cues: ['Coughing during meals', 'Wet voice after swallowing', 'New fever + right lower lobe crackles'],
      phys: 'The tumor narrows the esophagus → food and secretions pool above it and come back up → they spill into the larynx → coughing and a wet voice → bacteria from the mouth reach the lung, usually the right lower lobe (the right bronchus is wider and straighter) → pneumonia: fever and crackles.',
      rule: 'Dysphagia + coughing with meals or a wet voice = aspiration risk: upright for meals and 30 minutes after, thickened liquids as ordered, suction ready, and watch for fever and crackles.' },
    { f: 'dnd', t: 'After a Nissen fundoplication', cj: 'gs', cn: 'basic', st: ['subject'],
      q: 'Complete the discharge teaching for a client after a laparoscopic Nissen fundoplication. Place a word or phrase in each blank.',
      parts: ['Eat ', { a: 0, r: 'Small, frequent meals don’t stretch the stomach against the new, tight wrap.' }, ' of ', { a: 2, r: 'Soft, moist foods pass the swollen wrap more easily while it heals; mild trouble swallowing for a few weeks is expected.' },
        ', avoid ', { a: 4, r: 'The wrap makes it hard to belch, so carbonated drinks can trap gas and cause painful bloating (gas-bloat syndrome).' },
        ', and stay ', { a: 6, r: 'Sitting upright after eating uses gravity to keep stomach contents down while the wrap heals.' }, ' for at least an hour after meals.'],
      tokens: ['small, frequent meals', 'three large meals', 'soft, moist foods', 'raw vegetables and dry bread', 'carbonated drinks', 'warm decaffeinated tea', 'upright', 'lying flat'],
      ask: 'What does a tight new wrap around the lower esophagus change about eating?',
      cues: ['The wrap tightens the lower esophagus', 'Hard to belch', 'Swelling for a few weeks'],
      phys: 'The top of the stomach is wrapped around the lower esophagus → the valve is tighter, so reflux stops → but swallowed food has a narrower path while the tissue is swollen (temporary dysphagia) → and gas can’t escape upward easily (bloating if gas builds).',
      rule: 'After fundoplication: small, frequent, soft meals; no carbonated drinks or straws; upright after meals; report food sticking that doesn’t improve, vomiting or fever.' },
    { f: 'mcq', t: 'Fear after an oral cancer diagnosis', cj: 'ta', cn: 'psy', st: ['comm'],
      q: 'A client scheduled for surgery for oral cancer says, “Nobody will want to look at me after this.” Which response by the nurse is most therapeutic?',
      o: ['“You’re worried about how you’ll look after surgery. Tell me more about what worries you.”', '“The surgeons here are excellent. You’ll look fine.”', '“Why do you think people won’t want to look at you?”', '“Let’s go over your mouth care so you’re ready for surgery.”'], a: [0],
      r: ['Correct. It reflects the feeling and invites the client to say more — the first step in helping with a body-image fear.',
        'Incorrect. False reassurance: the nurse can’t promise how the client will look, and it closes the conversation.',
        'Incorrect. “Why” questions sound like a demand to justify a feeling and make clients defensive.',
        'Incorrect. Changing the subject ignores the concern the client just raised.'],
      ask: 'Which reply keeps the focus on the client’s feeling?',
      cues: ['A fear about appearance', '“Most therapeutic”'],
      phys: 'Surgery for oral cancer can change the face, speech and eating → body image and social fears are expected → naming the feeling and inviting more lets the client voice the specific fear → that is what the nurse can then address with facts and resources.',
      rule: 'Communication questions: reflect the feeling and invite more. Avoid false reassurance, “why,” advice and changing the subject.' },
    { f: 'mmatrix', t: 'Telling oral lesions apart', cj: 'ac', cn: 'adapt', st: ['subject'],
      q: 'For each finding, select the condition or conditions it fits. Each row may have more than one answer.',
      cols: ['Candidiasis (thrush)', 'Aphthous ulcer (canker sore)', 'Leukoplakia'],
      rows: [{ t: 'White patches that wipe off and leave a red, bleeding base', a: [0], r: 'Candidiasis. The white plaques are yeast on the surface, so they scrape away.' },
        { t: 'White patch that cannot be scraped off', a: [2], r: 'Leukoplakia. The white is thickened lining, not something on top of it.' },
        { t: 'Round, painful ulcer with a red rim and a yellow-gray center', a: [1], r: 'Aphthous ulcer — a shallow, painful sore that heals on its own in 1–2 weeks.' },
        { t: 'Can make eating and swallowing painful', a: [0, 1], r: 'Thrush and canker sores are both often painful; leukoplakia is usually painless, which is why it gets missed.' },
        { t: 'More likely after antibiotics or with an inhaled corticosteroid', a: [0], r: 'Candidiasis. Antibiotics kill the normal bacteria that keep yeast in check; inhaled steroids lower local immunity — rinse after each use.' },
        { t: 'Linked to tobacco and can turn cancerous', a: [2], r: 'Leukoplakia is premalignant; a patch that persists needs a biopsy.' }],
      ask: 'What is each lesion made of — and does that make it painful, wipeable or dangerous?',
      cues: ['Wipes off → yeast on the surface', 'Won’t scrape off → thickened lining', 'Painful ulcer with a red rim → aphthous'],
      phys: 'Thrush is yeast overgrowing on the mucosa (it scrapes off, the base is raw). An aphthous ulcer is a small break in the lining (painful, self-limiting). Leukoplakia is thickened, keratinized lining from chronic irritation such as tobacco (painless, can become squamous cell cancer).',
      rule: 'Wipes off = candida (nystatin, rinse after inhaled steroids). Won’t scrape off = leukoplakia (biopsy if it persists). Painful ulcer with a red halo = aphthous (heals in 1–2 weeks).' }
  ]);

  // ---------- Ch 47 · Stomach ----------
  N('47', [
    { f: 'hlt', trend: true, t: 'Upper GI bleed — reading the trend', cj: 'rc', cn: 'adapt', st: ['trend', 'abnormal'],
      q: 'A client admitted with an upper GI bleed has been on the unit for 4 hours. Highlight the findings that need follow-up.',
      head: ['Finding', '0800', '1000', '1200'],
      rows: [{ cells: ['Heart rate', '88', '104', '118'], c: 1, r: 'Follow up. Rising steadily — the body’s first answer to blood loss.' },
        { cells: ['Blood pressure', '128/78', '116/70', '98/58'], c: 1, r: 'Follow up. Falling; the pulse pressure is narrowing. Pressure drops late, once compensation is running out.' },
        { cells: ['Hemoglobin (g/dL)', '11.8', '10.1', '8.9'], c: 1, r: 'Follow up. Dropping about 1.5 g/dL every 2 hours — ongoing bleeding.' },
        { cells: ['Temp', '98.6 °F', '98.8 °F', '98.6 °F'], c: 0, r: 'Normal and steady.' },
        { cells: ['Urine output (mL/hr)', '60', '40', '22'], c: 1, r: 'Follow up. Below 30 mL/hr — the kidneys are getting too little blood.' },
        { cells: ['SpO₂ on 2 L', '98%', '97%', '97%'], c: 0, r: 'Steady and adequate.' },
        { cells: ['Epigastric pain (0–10)', '3', '3', '3'], c: 0, r: 'Unchanged; not what is driving the danger here.' }],
      ask: 'Across 4 hours, which values are moving toward shock?',
      cues: ['HR up, BP down', 'Hgb falling', 'Urine output under 30 mL/hr'],
      phys: 'Bleeding lowers the blood volume → the heart speeds up and vessels tighten to keep pressure up (pulse rises first) → the kidneys get less flow and make less urine → when compensation fails the BP falls → hemoglobin falls as blood is lost and fluids dilute what is left.',
      rule: 'GI bleed: trend HR, BP, urine output and Hgb together. Rising HR + falling BP + urine < 30 mL/hr = hypovolemic shock — two large-bore IVs, fluids and blood as ordered, call the provider.' },
    { f: 'selectn', t: 'PUD — the calls that can’t wait', cj: 'rc', cn: 'adapt', st: ['abnormal', 'strategic'],
      q: 'A client with peptic ulcer disease calls the clinic. Select the 3 findings that need immediate follow-up.',
      o: ['Black, tarry stools since yesterday', 'Sudden, severe epigastric pain that has spread across the whole abdomen', 'Vomiting material that looks like coffee grounds', 'Burning epigastric pain 2–3 hours after meals that food relieves', 'Bloating after fatty meals', 'Mild nausea in the morning'],
      a: [0, 1, 2],
      r: ['Correct. Melena means bleeding high in the GI tract — blood digested on its way through.',
        'Correct. Sudden severe pain spreading across a rigid abdomen is perforation until proven otherwise — a surgical emergency.',
        'Correct. Coffee-ground emesis is blood that has sat in stomach acid — an active or recent bleed.',
        'Incorrect. Pain that food relieves is the typical pattern of a duodenal ulcer, not a complication.',
        'Incorrect. Common and not dangerous.',
        'Incorrect. Not a sign of a complication.'],
      ask: 'Which findings are ulcer complications — bleeding or perforation — rather than the ulcer itself?',
      cues: ['Tarry stool → upper GI bleeding', 'Coffee grounds → blood in the stomach', 'Sudden severe spreading pain → perforation'],
      phys: 'An ulcer that erodes into a vessel bleeds → blood in the stomach is changed by acid (coffee grounds) or digested on the way down (black, tarry stool) → an ulcer that erodes through the wall lets acid and contents into the peritoneum → sudden severe pain that spreads, then a rigid abdomen.',
      rule: 'PUD complications: bleeding (melena, coffee-ground or red emesis, dizziness) and perforation (sudden severe pain, rigid abdomen) — same-day, emergency care.' },
    { f: 'calc', t: 'Pantoprazole infusion', cj: 'ta', cn: 'pharm', st: ['calc', 'pharm'],
      q: 'After an 80 mg IV bolus, pantoprazole is prescribed as a continuous infusion of 8 mg/hr for a bleeding ulcer. The bag contains pantoprazole 80 mg in 100 mL of 0.9% sodium chloride. At how many mL/hr should the nurse set the pump? Record your answer as a whole number.',
      ans: 10, unit: 'mL/hr', dp: 0,
      work: 'Concentration: 80 mg ÷ 100 mL = 0.8 mg/mL. Rate: 8 mg/hr ÷ 0.8 mg/mL = 10 mL/hr.',
      ask: 'Can you turn a dose per hour into mL per hour from the bag’s concentration?',
      cues: ['8 mg/hr ordered', '80 mg in 100 mL'],
      phys: 'A PPI blocks the proton pump in the parietal cell → stomach pH rises → a clot over the ulcer is more stable in less acid → continuous infusion keeps the pumps blocked as new ones are made.',
      rule: 'mL/hr = (dose per hour) ÷ (mg per mL). Find the concentration first; check the answer makes sense (a small dose → a small rate).' },
    { f: 'mcq', t: 'Four clients — who first?', cj: 'ph', cn: 'mgmt', st: ['strategic', 'actual', 'abc'],
      q: 'The nurse receives report on four clients. Which client should the nurse see first?',
      o: ['A client with a duodenal ulcer who reports sudden, severe abdominal pain; the abdomen is rigid', 'A client 5 days after a gastrectomy who had cramping, sweating and diarrhea 20 minutes after lunch', 'A client with gastritis who is asking for the PRN antacid', 'A client with H. pylori who has questions about the urea breath test tomorrow'], a: [0],
      r: ['Correct. Sudden severe pain with a rigid abdomen = probable perforation and peritonitis — an emergency that can lead to septic shock.',
        'Incorrect. Early dumping syndrome is uncomfortable and needs teaching, but it is expected and not life-threatening.',
        'Incorrect. Stable and comfortable enough to ask; it can wait a few minutes.',
        'Incorrect. Teaching can wait until the unstable client is safe.'],
      ask: 'Which client has an actual, life-threatening problem right now?',
      cues: ['“First”', 'Sudden severe pain + rigid abdomen'],
      phys: 'An ulcer that erodes through the duodenal wall spills acid and bowel contents into the peritoneum → chemical then bacterial peritonitis → the abdomen becomes rigid → fluid shifts and infection lead to shock.',
      rule: 'Who first: unstable and getting worse beats expected-but-uncomfortable, which beats stable needs and teaching.' },
    { f: 'mcq', t: 'An assignment for the LPN', cj: 'ta', cn: 'mgmt', st: ['deleg'],
      q: 'The charge nurse is making assignments on a medical-surgical unit. Which client is most appropriate to assign to the licensed practical nurse (LPN)?',
      o: ['A client 3 days after a partial gastrectomy who is stable and needs oral medications and a dressing change', 'A client with an upper GI bleed whose first unit of packed red blood cells started 10 minutes ago', 'A newly admitted client who vomited coffee-ground material an hour ago', 'A client who needs teaching on a new triple-therapy regimen for H. pylori before discharge'], a: [0],
      r: ['Correct. Stable, predictable care — oral meds and a dressing change are within the LPN’s scope.',
        'Incorrect. The first 15 minutes of a transfusion carry the highest risk of a reaction — the RN monitors.',
        'Incorrect. A new admission with active bleeding needs the RN’s assessment.',
        'Incorrect. The RN starts the teaching; the LPN can reinforce it.'],
      ask: 'Which client is stable, with predictable tasks inside the LPN’s scope?',
      cues: ['Stable + predictable → LPN', 'New admission, transfusion start, initial teaching → RN'],
      phys: 'Scope follows judgment: the LPN gives care to stable clients with predictable outcomes and collects focused data → the RN does the initial assessment, care of the unstable client, the early transfusion and the first teaching.',
      rule: 'LPN: stable clients, oral/subQ/IM meds, dressings, reinforcing teaching. RN: admissions, unstable clients, blood start, IV push, first teaching, evaluation.' },
    { f: 'dndr', t: 'An ulcer that suddenly gets worse', cj: 'ph', cn: 'adapt', st: ['abnormal', 'actual'],
      q: 'A client with a duodenal ulcer who takes ibuprofen every day for back pain reports sudden, sharp pain in the upper middle abdomen that is spreading over the whole abdomen. The abdomen is tender, rigid and board-like, and the client lies curled on one side, not moving. HR 118, BP 102/64, T 100.6 °F (38.1 °C). Place a phrase in each blank.',
      parts: ['The client is most likely experiencing ', { a: 0, r: 'Perforation: the ulcer erodes through the whole wall, and stomach or duodenal contents spill into the peritoneum — peritonitis. A surgical emergency.' },
        ' as shown by ', { a: 3, r: 'Sudden, sharp epigastric pain that spreads over the whole abdomen is how a perforation starts.' }, ' and ', { a: 4, r: 'A tender, rigid, board-like abdomen means the peritoneum is inflamed (peritonitis).' }, '.'],
      tokens: ['perforation with peritonitis', 'upper GI bleeding', 'gastric outlet obstruction', 'sudden, sharp epigastric pain spreading over the whole abdomen', 'a rigid, board-like abdomen', 'vomiting of retained food', 'coffee-ground emesis'],
      ask: 'Peptic ulcer disease has three emergencies. Which one fits sudden spreading pain and a rigid abdomen — and which findings would point to the other two?',
      cues: ['Daily NSAID + duodenal ulcer', 'Sudden, sharp pain spreading over the abdomen', 'Rigid, board-like abdomen; lying still, curled up', 'HR 118, BP 102/64, low-grade fever'],
      phys: 'The ulcer erodes through the full thickness of the wall → acid, pepsin and bowel contents spill into the peritoneal cavity → chemical, then bacterial, peritonitis → the abdominal muscles go rigid and the client lies still in a fetal position → fluid shifts and infection spread → paralytic ileus, sepsis and hypovolemic shock within hours.',
      rule: 'PUD emergencies: bleeding = red or coffee-ground vomit, melena, dizziness on standing; perforation = sudden sharp pain spreading over the abdomen, rigid board-like abdomen, fetal position → NPO, report now, prepare for surgery; outlet obstruction = bloating and vomiting of retained food, metabolic alkalosis, low potassium.' }
  ]);

  // ---------- Ch 48 · Noninflammatory bowel ----------
  N('48', [
    { f: 'ddt', t: 'Small-bowel obstruction on NG suction', cj: 'ac', cn: 'rrp', st: ['abnormal', 'data'],
      q: 'A client with a small-bowel obstruction has had an NG tube to low intermittent suction for 2 days. For each finding, choose what it most likely means and the nurse’s best action.',
      head: ['Finding', 'What it most likely means', 'Nurse’s best action'],
      rows: [
        ['Potassium 3.1 mEq/L; 1,400 mL NG drainage in 24 hours',
          { o: ['Hypokalemia from loss of gastric fluid', 'Hyperkalemia from bowel-cell injury', 'A normal result'], a: 0, r: 'Gastric fluid is rich in potassium, and suction removes it — the potassium falls.' },
          { o: ['Expect IV potassium replacement and check the cardiac rhythm', 'Give potassium chloride IV push', 'Stop the suction for 24 hours'], a: 0, r: 'Low potassium causes dysrhythmias; it is replaced by diluted IV infusion as ordered. Potassium is never given IV push.' }],
        ['Arterial pH 7.50; HCO₃⁻ 32 mEq/L',
          { o: ['Metabolic alkalosis from loss of stomach acid', 'Metabolic acidosis from diarrhea', 'Respiratory alkalosis from anxiety'], a: 0, r: 'Suction removes hydrochloric acid → bicarbonate is left behind → metabolic alkalosis.' },
          { o: ['Irrigate the tube only with normal saline, as prescribed', 'Irrigate the tube with tap water to keep it open', 'Let the client drink water freely'], a: 0, r: 'Plain water drawn back out by suction pulls more electrolytes with it; isotonic saline doesn’t.' }],
        ['Abdomen more distended, nausea returning, no NG drainage for 2 hours',
          { o: ['The tube may be blocked or out of place', 'The obstruction has resolved', 'An expected finding on suction'], a: 0, r: 'Drainage that stops while distention and nausea return means fluid isn’t leaving — check the tube before blaming the bowel.' },
          { o: ['Check placement and patency, then irrigate as prescribed', 'Turn the suction to high continuous', 'Remove the tube and notify the provider tomorrow'], a: 0, r: 'Confirm placement and patency first; high continuous suction can pull the stomach lining into the tube and injure it.' }]],
      ask: 'What does removing stomach fluid do to potassium and acid–base balance — and what do you check when drainage stops?',
      cues: ['NG suction = loss of K⁺, H⁺ and Cl⁻', 'Drainage stopped + distention = tube problem'],
      phys: 'Gastric juice is acid (H⁺ and Cl⁻) with potassium → suction removes it → H⁺ loss leaves bicarbonate high (metabolic alkalosis) → potassium falls, and alkalosis pushes K⁺ into cells, so it falls more → a blocked tube lets fluid build up again: distention and nausea.',
      rule: 'On NG suction: watch K⁺, pH and HCO₃⁻; irrigate with saline; if drainage stops with distention or nausea, check placement and patency first. Never give potassium IV push.' },
    { f: 'group', t: 'Ileostomy or colostomy?', cj: 'gs', cn: 'basic', st: ['subject'],
      q: 'For each client, select all the teaching that applies.',
      groups: [
        { h: 'New ileostomy', o: ['Drink 8–10 glasses of fluid a day and watch for signs of dehydration', 'Chew well; high-fiber foods such as corn, nuts and popcorn can block the stoma', 'Expect liquid to soft output throughout the day', 'Irrigate the stoma daily to set a routine'], a: [0, 1, 2],
          r: ['Correct. The colon, which absorbs water, is bypassed — fluid and sodium losses are high.', 'Correct. The ileum’s opening is narrow; poorly chewed fiber can cause a food blockage.', 'Correct. Small-bowel contents haven’t had their water absorbed.', 'Incorrect. An ileostomy is never irrigated — the output is liquid and continuous.'] },
        { h: 'Descending or sigmoid colostomy', o: ['Stool will usually be soft to formed', 'Irrigation may be used to make bowel movements predictable, if the provider approves', 'Limit gas-forming foods such as beans and cabbage if gas is a problem', 'Expect large amounts of liquid stool all day'], a: [0, 1, 2],
          r: ['Correct. Most of the colon’s water absorption still happens before the stoma.', 'Correct. Because the stool is formed, some clients irrigate to control when they go.', 'Correct. Gas fills the pouch; choosing foods helps with gas and odor.', 'Incorrect. That describes an ileostomy.'] }],
      ask: 'How far along the bowel is the stoma — and how much water has been absorbed by then?',
      cues: ['Ileostomy → colon bypassed', 'Sigmoid colostomy → most of the colon still working'],
      phys: 'The colon absorbs water and sodium from the stool → the earlier the stoma, the more liquid the output → an ileostomy loses the whole colon (liquid output, dehydration and blockage risk) → a sigmoid colostomy keeps most of it (formed stool, irrigation possible).',
      rule: 'Ileostomy: liquid output, fluids and salt, chew fiber well, never irrigate. Sigmoid colostomy: formed stool, may irrigate, manage gas and odor with food choices.' },
    { f: 'calc', t: 'Tube feeding intake', cj: 'ta', cn: 'basic', st: ['calc'],
      q: 'Over 24 hours a client receives a continuous feeding through a nasogastric (NG) tube at 55 mL/hr, a 30 mL water flush every 4 hours, and 30 mL of water before and after each of 3 medication passes. What is the client’s total intake from the tube in 24 hours, in mL? Record your answer as a whole number.',
      ans: 1680, unit: 'mL', dp: 0,
      work: 'Feeding: 55 mL/hr × 24 hr = 1,320 mL. Flushes: every 4 hours = 6 × 30 mL = 180 mL. Medication passes: 3 × (30 + 30) mL = 180 mL. Total: 1,320 + 180 + 180 = 1,680 mL.',
      ask: 'Can you add up every source of intake through the tube, not just the feeding?',
      cues: ['Feeding + flushes + medication water', '24 hours ÷ 4 = 6 flushes'],
      phys: 'Every flush is water absorbed from the gut → it counts toward intake and toward the client’s fluid balance → leaving it out underestimates intake (and can hide fluid overload or mask dehydration).',
      rule: 'Tube intake = feeding + every flush + water with medications. Count the flushes: 24 ÷ interval.' },
    { f: 'mcq', t: 'A hernia that won’t go back', cj: 'ta', cn: 'adapt', st: ['safety', 'strategic'],
      q: 'A client with a known inguinal hernia calls. The bulge came out 3 hours ago, will not go back in, is very painful, and the client is nauseated. Which response by the nurse is best?',
      o: ['“This needs to be seen right away. Go to the emergency department now.”', '“Lie down and press firmly on the bulge until it goes back in.”', '“Take ibuprofen and call back if it is still out tomorrow.”', '“Put your truss back on and tighten it.”'], a: [0],
      r: ['Correct. A painful hernia that won’t reduce, with nausea, may be strangulated — its blood supply cut off. The bowel can die within hours; it needs surgery.',
        'Incorrect. Forcing a strangulated hernia can push dead bowel back inside and hide the emergency.',
        'Incorrect. Waiting risks bowel necrosis and perforation.',
        'Incorrect. A truss is only for a hernia that reduces; pressure on a trapped one makes it worse.'],
      ask: 'Is this a hernia that is just out — or one whose blood supply is cut off?',
      cues: ['Won’t reduce', 'Severe pain', 'Nausea'],
      phys: 'A loop of bowel trapped in the hernia sac swells → swelling squeezes its veins, then its arteries (strangulation) → the trapped bowel becomes ischemic → pain, nausea, vomiting, fever → it can die and perforate.',
      rule: 'Hernia that won’t reduce + pain, nausea, vomiting, fever or redness = strangulation: emergency surgery. Never force it back.' }
  ]);

  // ---------- Ch 49 · Inflammatory bowel ----------
  N('49', [
    { f: 'mmatrix', t: 'Crohn’s or ulcerative colitis?', cj: 'ac', cn: 'adapt', st: ['subject'],
      q: 'For each feature, select the condition or conditions it fits. Each row may have more than one answer.',
      cols: ['Crohn’s disease', 'Ulcerative colitis'],
      rows: [{ t: 'Can affect anywhere from mouth to anus, with skip lesions', a: [0], r: 'Crohn’s. Patches of disease with normal bowel between them.' },
        { t: 'Starts in the rectum and spreads upward without gaps', a: [1], r: 'Ulcerative colitis — continuous, limited to the colon.' },
        { t: 'Fistulas are common', a: [0], r: 'Crohn’s inflammation goes through the whole wall, so it tunnels into nearby organs and skin.' },
        { t: 'Bloody diarrhea, often 10–20 times a day in a flare', a: [1], r: 'UC inflames the lining of the colon, which bleeds easily.' },
        { t: 'Raises the long-term risk of colorectal cancer', a: [0, 1], r: 'Both. Years of colon inflammation raise the risk, so both need surveillance colonoscopy.' },
        { t: 'Vitamin B₁₂ deficiency when the terminal ileum is involved', a: [0], r: 'Crohn’s often involves the terminal ileum, where B₁₂ is absorbed.' },
        { t: 'Removing the colon and rectum cures the bowel disease', a: [1], r: 'UC lives only in the colon and rectum; Crohn’s can come back anywhere.' }],
      ask: 'Where is each disease, and how deep does the inflammation go?',
      cues: ['Skip lesions, full thickness → Crohn’s', 'Rectum upward, lining only → UC'],
      phys: 'Crohn’s: transmural inflammation in patches anywhere in the GI tract → fistulas, strictures, malabsorption (B₁₂ if the ileum is hit). UC: inflammation of the colon lining that starts in the rectum and spreads continuously → bloody diarrhea; removing the colon removes the disease. Both raise colon cancer risk.',
      rule: 'Crohn’s = patchy, deep, anywhere, fistulas, B₁₂. UC = rectum up, lining only, bloody diarrhea, colectomy cures. Both = cancer surveillance.' },
    { f: 'dndr', t: 'Appendicitis gets worse', cj: 'ph', cn: 'adapt', st: ['abnormal', 'actual'],
      q: 'A client admitted with right lower quadrant pain says the pain suddenly eased an hour ago. Now the client has severe pain across the whole abdomen, the abdomen is rigid, and the temperature is 102.4 °F (39.1 °C). Place a phrase in each blank.',
      parts: ['The client is most likely experiencing ', { a: 0, r: 'A perforated appendix with peritonitis — the classic story is relief when the swollen appendix bursts, then worse, spreading pain.' },
        ' as shown by ', { a: 3, r: 'Sudden relief followed by diffuse, worse pain is the hallmark of rupture.' }, ' and ', { a: 5, r: 'A rigid, boardlike abdomen means the whole peritoneum is inflamed.' }, '.'],
      tokens: ['a perforated appendix with peritonitis', 'uncomplicated appendicitis', 'gastroenteritis', 'sudden relief of pain followed by worse pain across the abdomen', 'pain that began around the navel', 'a rigid, boardlike abdomen', 'watery diarrhea'],
      ask: 'What does sudden relief of appendicitis pain usually mean?',
      cues: ['Pain suddenly eased', 'Then diffuse severe pain', 'Rigid abdomen + high fever'],
      phys: 'A blocked appendix swells with pressure → pressure drops suddenly when it ruptures (brief relief) → pus and stool spill into the peritoneum → the whole lining inflames: diffuse pain, rigidity, high fever → sepsis can follow.',
      rule: 'Appendicitis: sudden relief then worse, spreading pain, rigidity and fever = perforation — notify now, NPO, IV access, antibiotics, prepare for surgery. No heat, no laxatives, no enemas.' },
    { f: 'calc', t: 'Gravity IV for gastroenteritis', cj: 'ta', cn: 'pharm', st: ['calc'],
      q: 'A client with gastroenteritis is prescribed 1,000 mL of 0.9% sodium chloride over 8 hours by gravity. The tubing delivers 15 drops/mL. How many drops per minute should the nurse set? Round to the nearest whole number.',
      ans: 31, unit: 'gtt/min', dp: 0,
      work: '8 hours = 480 minutes. (1,000 mL × 15 gtt/mL) ÷ 480 min = 15,000 ÷ 480 = 31.25 → 31 gtt/min.',
      ask: 'Can you set up volume × drop factor ÷ minutes, and round only at the end?',
      cues: ['1,000 mL over 8 hours', 'Drop factor 15', 'Minutes, not hours'],
      phys: 'Diarrhea and vomiting lose water and sodium → isotonic saline replaces the volume → a gravity drip must be timed in drops per minute to deliver the ordered volume over the ordered time.',
      rule: 'gtt/min = (mL × drop factor) ÷ minutes. Convert hours to minutes first; round at the end.' },
    { f: 'mcq', t: 'UC flare — which finding first?', cj: 'ph', cn: 'adapt', st: ['strategic', 'abnormal'],
      q: 'A client is hospitalized with a severe flare of ulcerative colitis and is receiving IV methylprednisolone. Which finding should the nurse report to the provider first?',
      o: ['Abdominal distention, temperature 102.2 °F (39 °C), HR 124, and fewer stools than yesterday', 'Eight bloody stools since midnight', 'Blood glucose 168 mg/dL', 'Aching in both knees'], a: [0],
      r: ['Correct. A distended abdomen with fever, tachycardia and fewer stools suggests toxic megacolon — the colon is dilating and can perforate. Fewer stools is not improvement here.',
        'Incorrect. Frequent bloody stools are expected in a severe flare (and are being treated).',
        'Incorrect. Corticosteroids raise glucose; it needs attention, but it isn’t the emergency.',
        'Incorrect. Joint pain is a common extra-intestinal feature of IBD.'],
      ask: 'Which finding could mean the colon is about to perforate?',
      cues: ['Distention + fever + tachycardia', 'Fewer stools in a severe flare'],
      phys: 'Severe inflammation paralyzes the colon’s muscle → the colon dilates and stops moving stool (fewer stools) → the thin, inflamed wall stretches → bacteria and toxins cross it (fever, tachycardia) → it can perforate.',
      rule: 'In a severe UC flare, fewer stools with distention, fever and tachycardia = toxic megacolon: NPO, report now, prepare for decompression or surgery. Avoid opioids and antidiarrheals that slow the colon.' },
    { f: 'selectn', t: 'Gluten-free choices', cj: 'gs', cn: 'basic', st: ['subject'],
      q: 'A client with celiac disease is choosing foods. Select the 3 foods the client can safely eat.',
      o: ['Rice with grilled chicken', 'Corn tortillas', 'A plain baked potato', 'Whole-wheat bread', 'Barley soup', 'Rye crackers'], a: [0, 1, 2],
      r: ['Correct. Rice and plain meat contain no gluten.', 'Correct. Corn is gluten-free (check the label for wheat flour added).', 'Correct. Potatoes are gluten-free.',
        'Incorrect. Wheat contains gluten.', 'Incorrect. Barley contains gluten.', 'Incorrect. Rye contains gluten.'],
      ask: 'Which grains contain gluten?',
      cues: ['BRW: barley, rye, wheat'],
      phys: 'In celiac disease, gluten from wheat, barley and rye triggers an immune attack on the small-bowel villi → villi flatten → nutrients aren’t absorbed (diarrhea, weight loss, anemia) → strict lifelong avoidance lets the villi recover.',
      rule: 'Celiac: no barley, rye, wheat (BRW). Rice, corn, potatoes, meat, fruit and vegetables are safe; read labels for hidden wheat.' }
  ]);

  // ---------- Ch 53 · Endocrine assessment ----------
  N('53', [
    { f: 'hl', t: 'Endocrine history — what to follow up', cj: 'rc', cn: 'hpm', st: ['abnormal', 'data'],
      q: 'Read the nurse’s note from a routine visit. Highlight the findings that need follow-up.',
      parts: ['52-year-old client here for a yearly visit. Reports ', { h: 'feeling too hot when others are comfortable', c: 1, r: 'Follow up. Heat intolerance points to a high metabolic rate (hyperthyroidism).' },
        ' and ', { h: 'losing 5 kg in 2 months without trying', c: 1, r: 'Follow up. Unintended weight loss needs an explanation — thyroid, diabetes or cancer.' },
        '. Sleeps ', { h: '7 hours a night', c: 0, r: 'Normal.' }, ' and eats ', { h: 'three meals a day', c: 0, r: 'Normal.' }, '. States ', { h: 'urinating about 12 times a day and waking at night thirsty', c: 1, r: 'Follow up. Polyuria and thirst suggest high glucose (or diabetes insipidus).' },
        '. Takes ', { h: 'a daily multivitamin', c: 0, r: 'Not a concern.' }, '. On exam, ', { h: 'hands tremble when held out', c: 1, r: 'Follow up. A fine tremor is another sign of excess thyroid hormone.' },
        ', ', { h: 'BP 124/78', c: 0, r: 'Normal.' }, '.'],
      ask: 'Which findings don’t fit a healthy adult — and which hormone could explain them?',
      cues: ['Heat intolerance', 'Unexplained weight loss', 'Polyuria + nocturnal thirst', 'Tremor'],
      phys: 'Hormones set the body’s rates → too much thyroid hormone speeds metabolism (heat, weight loss, tremor) → high glucose spills into the urine and pulls water with it (frequent urination, thirst) → each points to a gland to test.',
      rule: 'Endocrine screening: ask about heat or cold intolerance, weight change, thirst and urination, energy, sleep, skin and hair, menstrual changes. Unexplained change = follow up with labs.' },
    { f: 'order', t: 'A 24-hour urine collection', cj: 'ta', cn: 'rrp', st: ['np'],
      q: 'A 24-hour urine test for cortisol starts at 0800. Place the nurse’s steps in order.',
      o: ['At 0800, have the client void and discard that urine', 'Record 0800 as the start time and label the container', 'Save every void for the next 24 hours in the container kept on ice or refrigerated', 'At 0800 the next day, have the client void and add it to the container', 'Send the whole container to the lab promptly'], a: [0, 1, 2, 3, 4],
      r: ['First: that urine was made before the test started, so it is thrown away.', 'Second: the clock starts after the bladder is empty.', 'Third: every drop in the 24 hours counts; one missed void makes the result wrong and the test restarts.', 'Fourth: the last void finishes the 24 hours and is kept.', 'Last: send it all, labeled with the times.'],
      ask: 'Which urine belongs to the 24 hours — the first void or the last?',
      cues: ['Start with an empty bladder', 'End by keeping the final void'],
      phys: 'The test measures what the kidneys clear in exactly 24 hours → urine in the bladder at the start was made earlier (discard) → urine at the end time was made during the test (keep) → missing any void lowers the total.',
      rule: '24-hour urine: discard the first void, keep everything after including the final void at the end time, keep it cold, restart if a void is lost.' },
    { f: 'mcq', t: 'Instructing the AP on the collection', cj: 'ta', cn: 'mgmt', st: ['deleg'],
      q: 'The nurse delegates the 24-hour urine collection to the assistive personnel (AP). Which instruction is correct?',
      o: ['“Save every void in the container on ice until 0800 tomorrow, including the 0800 void, and tell me if any urine is thrown away.”', '“Save the urine only when the client remembers to use the hat.”', '“Throw away tomorrow’s 0800 void — that one is extra.”', '“If one void is missed, just add extra water so the total looks right.”'], a: [0],
      r: ['Correct. Clear, specific, with what to report — a missed void means the test must restart.', 'Incorrect. Every void must be saved.', 'Incorrect. The final void is kept; it is the first one that is discarded.', 'Incorrect. That falsifies the result.'],
      ask: 'What makes an instruction to the AP complete?',
      cues: ['Specific task, specific end point, what to report'],
      phys: 'A correct total depends on every void in exactly 24 hours → the AP can collect if told exactly what to save and when → reporting a lost void lets the RN restart the test.',
      rule: 'Good delegation: the right task, clear instructions with limits, and what to report back.' }
  ]);

  // ---------- Ch 55 · Thyroid & parathyroid ----------
  N('55', [
    { f: 'hlt', trend: true, t: 'The first night after thyroidectomy', cj: 'rc', cn: 'rrp', st: ['trend', 'abc'],
      q: 'A client had a total thyroidectomy this morning. Highlight the findings that need follow-up.',
      head: ['Finding', '1400', '1800', '2200'],
      rows: [{ cells: ['Respirations', '16, quiet', '18, quiet', '22, faint high-pitched sound on inspiration'], c: 1, r: 'Follow up now. A high-pitched sound on breathing in is stridor — the airway is narrowing (laryngospasm from low calcium, swelling or a hematoma).' },
        { cells: ['Tingling around the mouth or fingers', 'None', 'None', 'New, both hands'], c: 1, r: 'Follow up. Tingling is the first sign of low calcium after the parathyroids are disturbed.' },
        { cells: ['Serum calcium (mg/dL)', '9.3', '8.5', '7.6'], c: 1, r: 'Follow up. Normal at 1400 (your book: 9.0–10.5 mg/dL), then falling below it — hypocalcemia.' },
        { cells: ['Voice', 'Hoarse, weak', 'Hoarse, weak', 'Hoarse, weak'], c: 0, r: 'Mild hoarseness that isn’t getting worse is common from the breathing tube and swelling; worsening hoarseness would need follow-up.' },
        { cells: ['Dressing', 'Scant drainage', 'Scant drainage', 'Scant drainage'], c: 0, r: 'Unchanged. (Check behind the neck too — blood pools there.)' },
        { cells: ['Heart rate', '84', '86', '88'], c: 0, r: 'Stable.' }],
      ask: 'Over 8 hours, which findings are moving toward an airway emergency?',
      cues: ['Calcium falling', 'New tingling', 'Stridor at 2200'],
      phys: 'Surgery bruises or removes the parathyroid glands → PTH falls → calcium falls over the first 1–3 days → low calcium makes nerves and muscles fire too easily → tingling, then spasm of the larynx → stridor and airway obstruction.',
      rule: 'After thyroidectomy: trend calcium and ask about tingling; stridor is an emergency (call rapid response, keep IV calcium gluconate and a tracheostomy tray at the bedside).' },
    { f: 'ddr', t: 'Low calcium after thyroid surgery', cj: 'ph', cn: 'rrp', st: ['abc', 'abnormal'],
      q: 'On the first day after a thyroidectomy, a client reports numbness around the lips. The nurse taps in front of the ear and the lip twitches. Complete the sentence.',
      parts: ['The client is at highest risk for ', { o: ['laryngospasm from hypocalcemia', 'thyroid storm', 'myxedema coma'], a: 0, r: 'Low calcium makes muscles — including the larynx — spasm.' },
        ' as shown by ', { o: ['numbness around the lips', 'heat intolerance', 'weight gain'], a: 0, r: 'Perioral numbness is an early sign of hypocalcemia.' }, ' and ', { o: ['a positive Chvostek sign', 'bulging eyes', 'cold intolerance'], a: 0, r: 'A twitch of the face when the facial nerve is tapped is Chvostek’s sign — nerve irritability from low calcium.' }, '.'],
      ask: 'Which emergency do perioral numbness and Chvostek’s sign warn of?',
      cues: ['Day 1 after thyroidectomy', 'Lip numbness', 'Twitch when the facial nerve is tapped'],
      phys: 'Parathyroids injured in surgery → little PTH → calcium falls → nerve membranes become excitable → tingling and twitching (Chvostek, Trousseau) → spasm of the larynx can close the airway.',
      rule: 'Post-thyroidectomy tingling or a positive Chvostek/Trousseau sign → report, check calcium, have IV calcium gluconate ready, watch the airway.' },
    { f: 'calc', t: 'Levothyroxine tablets', cj: 'ta', cn: 'pharm', st: ['calc', 'pharm'],
      q: 'Levothyroxine 0.075 mg by mouth is prescribed. The tablets available are 25 mcg each. How many tablets should the nurse give? Record your answer as a whole number.',
      ans: 3, unit: 'tablets', dp: 0,
      work: '0.075 mg × 1,000 = 75 mcg. 75 mcg ÷ 25 mcg per tablet = 3 tablets.',
      ask: 'Can you convert mg to mcg before dividing?',
      cues: ['Order in mg', 'Tablets in mcg', '1 mg = 1,000 mcg'],
      phys: 'Levothyroxine is synthetic T₄ → small doses (micrograms) replace the hormone the thyroid no longer makes → given on an empty stomach, 30–60 minutes before breakfast, for steady absorption.',
      rule: 'Convert to the same unit first (mg × 1,000 = mcg). An answer of more than 2–3 tablets is worth a recheck.' },
    { f: 'mmatrix', t: 'Too little or too much thyroid hormone', cj: 'ac', cn: 'adapt', st: ['subject'],
      q: 'For each finding, select the condition or conditions it can occur with. Each row may have more than one answer.',
      cols: ['Hypothyroidism', 'Hyperthyroidism'],
      rows: [{ t: 'Heat intolerance', a: [1], r: 'Hyperthyroidism — a high metabolic rate makes more heat.' },
        { t: 'Constipation', a: [0], r: 'Hypothyroidism slows the gut; hyperthyroidism speeds it (frequent stools).' },
        { t: 'Goiter', a: [0, 1], r: 'Both. Hashimoto’s and Graves’ disease can each enlarge the gland.' },
        { t: 'Bradycardia', a: [0], r: 'Hypothyroidism. Hyperthyroidism causes tachycardia.' },
        { t: 'Weight loss despite a bigger appetite', a: [1], r: 'Hyperthyroidism burns calories faster than the client can eat them.' },
        { t: 'Fatigue', a: [0, 1], r: 'Both — sluggishness in hypothyroidism; exhaustion and muscle weakness in hyperthyroidism.' },
        { t: 'Menstrual changes', a: [0, 1], r: 'Both — heavier periods in hypothyroidism, lighter or absent ones in hyperthyroidism.' }],
      ask: 'Which findings go with a slow rate, which with a fast rate, and which can come with either?',
      cues: ['Slow = cold, constipated, slow pulse', 'Fast = hot, weight loss, fast pulse', 'Goiter and fatigue can be either'],
      phys: 'Thyroid hormone sets the metabolic rate of nearly every cell → too little slows everything (heat, heart rate, gut) → too much speeds everything → some findings (goiter, fatigue, menstrual change) come from either extreme.',
      rule: 'Hypo = slow and cold; hyper = fast and hot. Goiter, fatigue and menstrual changes don’t tell them apart — the TSH and free T₄ do.' },
    { f: 'sata', t: 'Delegating thyroidectomy care', cj: 'ta', cn: 'mgmt', st: ['deleg'],
      q: 'Which tasks can the RN delegate to the assistive personnel (AP) for a stable client the evening after a thyroidectomy? Select all that apply.',
      o: ['Keep the head of the bed raised 30–45 degrees with the head and neck supported', 'Tell the RN right away if the client mentions tingling in the lips or fingers', 'Check for Chvostek’s sign every 4 hours', 'Take vital signs every 4 hours and report a respiratory rate over 24', 'Assess the voice for new or worsening hoarseness'], a: [0, 1, 3],
      r: ['Correct. Positioning according to the plan is within the AP’s role; it reduces swelling and strain on the incision.', 'Correct. The AP reports what the client says; the RN assesses it.', 'Incorrect. Checking Chvostek’s sign is an assessment.', 'Correct. Routine vital signs with a clear threshold to report.', 'Incorrect. Judging the voice for nerve injury is the RN’s assessment.'],
      ask: 'Which tasks follow a set method, and which need the nurse to judge a finding?',
      cues: ['Positioning, vital signs, reporting → AP', 'Chvostek, voice assessment → RN'],
      phys: 'Delegation follows stability and judgment → a stable client’s positioning and vital signs follow set steps → recognizing hypocalcemia or nerve injury needs assessment.',
      rule: 'AP: positioning, vital signs, reporting what to watch for. RN: Chvostek and Trousseau, voice, airway and incision assessment.' },
    { f: 'mcq', t: 'Mood swings with Graves’ disease', cj: 'ta', cn: 'psy', st: ['comm'],
      q: 'A client newly diagnosed with Graves’ disease says, “I cry at everything and snap at my kids. I feel like I’m going crazy.” Which response by the nurse is best?',
      o: ['“Mood swings and irritability are part of an overactive thyroid and usually ease as treatment works. How has this been at home?”', '“Try to stay calm — getting upset makes it worse.”', '“Why are you snapping at your children?”', '“You should ask your provider for a psychiatry referral.”'], a: [0],
      r: ['Correct. It gives a true explanation that lifts the fear of “going crazy” and then invites the client to talk.', 'Incorrect. Telling the client to stay calm dismisses a symptom the client can’t control.', 'Incorrect. A “why” question sounds like blame.', 'Incorrect. The symptom has a physical cause; a referral skips past the client’s feelings.'],
      ask: 'What is causing the mood change — and what does the client need from the nurse right now?',
      cues: ['Emotional lability is a symptom of hyperthyroidism', '“I’m going crazy” = fear'],
      phys: 'Excess thyroid hormone heightens the nervous system’s response (more adrenaline-like sensitivity) → irritability, anxiety and emotional lability → as levels come down with treatment, mood steadies.',
      rule: 'Explain that the symptom has a physical cause when that is true, then invite feelings. Avoid “why,” “calm down” and premature referrals.' }
  ]);

  // ---------- Ch 56 · Diabetes ----------
  N('56', [
    { f: 'calc', t: 'Insulin infusion for DKA', cj: 'ta', cn: 'pharm', st: ['calc', 'pharm'],
      q: 'A client in DKA weighing 70 kg is prescribed regular insulin at 0.1 unit/kg/hr. The bag contains regular insulin 100 units in 100 mL of 0.9% sodium chloride. At how many mL/hr should the nurse set the pump? Record your answer to one decimal place.',
      ans: 7, unit: 'mL/hr', dp: 1,
      work: 'Dose: 0.1 unit/kg/hr × 70 kg = 7 units/hr. Concentration: 100 units ÷ 100 mL = 1 unit/mL. Rate: 7 units/hr ÷ 1 unit/mL = 7.0 mL/hr.',
      ask: 'Weight-based dose first, then the bag’s concentration.',
      cues: ['0.1 unit/kg/hr', '70 kg', '1 unit/mL'],
      phys: 'Without insulin, cells can’t take in glucose → fat is burned for fuel → ketoacids build up → IV regular insulin (the only kind given IV drip) lets glucose into cells and stops ketone production.',
      rule: 'Units/hr = units/kg/hr × kg; mL/hr = units/hr ÷ units/mL. Only regular insulin goes in an IV drip; check potassium before and during.' },
    { f: 'calc', t: 'Mealtime plus correction', cj: 'ta', cn: 'pharm', st: ['calc'],
      q: 'Before lunch a client’s glucose is 268 mg/dL. The prescription is insulin lispro 6 units with meals plus a correction dose: 151–200 mg/dL, 2 units; 201–250 mg/dL, 4 units; 251–300 mg/dL, 6 units; over 300 mg/dL, call the provider. How many units of lispro should the nurse give? Record your answer as a whole number.',
      ans: 12, unit: 'units', dp: 0,
      work: '268 falls in 251–300 → correction 6 units. Mealtime 6 units + correction 6 units = 12 units of lispro.',
      ask: 'Which band does 268 fall in — and do you add it to the mealtime dose?',
      cues: ['268 mg/dL', 'Mealtime dose + correction'],
      phys: 'Rapid-acting insulin covers the meal’s carbohydrate (mealtime dose) → extra units bring a high pre-meal glucose back toward target (correction) → both are given together within 15 minutes of eating.',
      rule: 'Total rapid-acting = mealtime dose + correction for the current glucose band. Give it when the meal is there (lispro within 15 minutes).' },
    { f: 'calc', t: 'Potassium replacement rate', cj: 'ta', cn: 'pharm', st: ['calc', 'safety'],
      q: 'A client being treated for DKA has a potassium of 3.4 mEq/L. Potassium chloride 40 mEq in 250 mL of 0.9% sodium chloride is prescribed over 4 hours. At how many mL/hr should the nurse set the pump? Record your answer to one decimal place.',
      ans: 62.5, unit: 'mL/hr', dp: 1,
      work: '250 mL ÷ 4 hr = 62.5 mL/hr (40 mEq ÷ 4 hr = 10 mEq/hr — within the usual limit for a peripheral line).',
      ask: 'Volume over time — and is the mEq per hour safe?',
      cues: ['250 mL over 4 hours', 'Check: 10 mEq/hr'],
      phys: 'Insulin moves potassium into cells along with glucose → serum K⁺ falls during DKA treatment → too low causes dysrhythmias, so it is replaced — but slowly and always on a pump, because a fast rise also stops the heart.',
      rule: 'IV potassium: always diluted, on a pump, never IV push; usually no faster than 10 mEq/hr peripherally; check urine output first.' },
    { f: 'hlt', trend: true, t: 'DKA — is the treatment working?', cj: 'eo', cn: 'adapt', st: ['trend', 'abnormal'],
      q: 'A client is on an insulin infusion and IV fluids for DKA. Review the hourly results. Highlight the findings that need follow-up.',
      head: ['Finding', '0900', '1100', '1300'],
      rows: [{ cells: ['Blood glucose (mg/dL)', '520', '380', '240'], c: 1, r: 'Follow up. Falling as hoped, but at about 250 the fluids usually change to include dextrose so the insulin can keep clearing ketones without causing hypoglycemia.' },
        { cells: ['Potassium (mEq/L)', '5.6', '4.2', '3.2'], c: 1, r: 'Follow up. Insulin is driving K⁺ into cells; below 3.5 mmol/L, delay/pause insulin under the current adult protocol while potassium is replaced.' },
        { cells: ['Arterial pH', '7.12', '7.19', '7.26'], c: 0, r: 'Improving as ketones clear.' },
        { cells: ['Anion gap (mEq/L)', '26', '19', '15'], c: 0, r: 'Closing — the acidosis is resolving.' },
        { cells: ['Urine output (mL/hr)', '45', '70', '80'], c: 0, r: 'Improving with fluids.' },
        { cells: ['Mental status', 'Drowsy', 'Awake', 'Alert, oriented'], c: 0, r: 'Improving.' }],
      ask: 'Which findings show the treatment working — and which show a new danger the treatment creates?',
      cues: ['Glucose at about 250', 'K⁺ falling to 3.2', 'pH and anion gap improving'],
      phys: 'Insulin moves glucose and potassium into cells → glucose falls and so does serum K⁺ → ketones clear more slowly than glucose falls → dextrose is added at about 250 so insulin can continue until ketoacidosis resolves by plasma ketones and pH/bicarbonate → potassium is replaced to keep the heart safe.',
      rule: 'DKA: when glucose is about 250, add dextrose (don’t stop insulin); correct K⁺ < 3.5 before insulin and restart once > 3.5; assess ketones and pH/bicarbonate for resolution, not glucose or gap alone.' },
    { f: 'selectn', t: 'Low glucose, awake and swallowing', cj: 'ta', cn: 'adapt', st: ['safety', 'strategic'],
      q: 'A client’s glucose is 54 mg/dL. The client is sweaty and shaky but alert and able to swallow. Select the 2 actions the nurse should take now.',
      o: ['Give 15 g of fast-acting carbohydrate, such as 4 oz (120 mL) of juice', 'Recheck the glucose in 15 minutes', 'Give glucagon 1 mg IM', 'Give a chocolate bar', 'Hold all insulin for the rest of the day', 'Call the rapid response team'], a: [0, 1],
      r: ['Correct. The 15-15 rule: 15 g of simple carbohydrate for an alert client who can swallow.', 'Correct. Recheck in 15 minutes and repeat if still under 70.',
        'Incorrect. Glucagon is for a client who can’t swallow safely or is unconscious.', 'Incorrect. Fat slows absorption; simple sugar works faster.',
        'Incorrect. Insulin decisions come after treatment and the provider’s review, not a blanket hold.', 'Incorrect. An alert client who can swallow is treated by the nurse right away.'],
      ask: 'What is the fastest safe treatment for an alert client — and what tells you it worked?',
      cues: ['Glucose 54', 'Alert and can swallow'],
      phys: 'The brain depends on glucose → low glucose triggers adrenaline (sweating, shakiness) → simple sugar is absorbed within minutes → rechecking in 15 minutes shows whether it is rising.',
      rule: 'Hypoglycemia, alert: 15 g fast carbs → recheck in 15 min → repeat if < 70 → snack or meal once above 70. Unconscious: glucagon IM or dextrose IV.' },
    { f: 'dnd', t: 'Sick-day rules', cj: 'gs', cn: 'hpm', st: ['subject', 'safety'],
      q: 'Complete the sick-day teaching for a client with type 1 diabetes. Place a word or phrase in each blank.',
      parts: ['When sick, keep taking ', { a: 0, r: 'Illness is a stress that raises glucose; stopping insulin is how DKA starts.' }, ', check glucose ', { a: 2, r: 'Every 2–4 hours (your book’s sick-day rule) shows a rise early.' },
        ', drink ', { a: 4, r: '8–12 oz (240–360 mL) every hour while awake prevents dehydration; sugar-free and caffeine-free, unless glucose is below target — then fluids with sugar.' }, ', and check ', { a: 6, r: 'Urine or blood ketones warn of DKA early — your book says to check them even when glucose is in range, especially with vomiting.' }, ' even when glucose is in range, especially with vomiting.'],
      tokens: ['your usual insulin', 'no insulin until you feel better', 'every 2–4 hours', 'once a day', '8–12 oz of sugar-free, caffeine-free fluid every hour', 'nothing until the vomiting stops', 'ketones', 'your blood pressure'],
      ask: 'What does illness do to glucose — and what does skipping insulin lead to?',
      cues: ['Illness = stress hormones = higher glucose', 'Type 1 → ketones'],
      phys: 'Illness releases cortisol and adrenaline → the liver releases glucose → glucose rises even without eating → without insulin, fat is broken down into ketones → vomiting and fever add dehydration → DKA.',
      rule: 'Sick day (your book): tell the provider you are ill; never omit insulin; glucose every 2–4 h; ketones even if glucose is in range, especially with vomiting; 8–12 oz of sugar-free, caffeine-free fluid every hour (with sugar if glucose is below target); call for vomiting, ketones or glucose that won’t come down.' },
    { f: 'group', t: 'Foot care teaching', cj: 'gs', cn: 'hpm', st: ['safety', 'absolute'],
      q: 'A client with diabetes and reduced sensation in the feet is learning foot care. For each part of the teaching, select all that the client should do.',
      groups: [
        { h: 'Daily checks', o: ['Look at the soles with a mirror (or ask someone to help)', 'Check between the toes for cracks or moisture', 'Look for blisters, red spots or cuts', 'Soak the feet in hot water for 30 minutes'], a: [0, 1, 2],
          r: ['Correct. With neuropathy, a wound may not hurt — it has to be seen.', 'Correct. Moist skin between the toes breaks down and gets infected.', 'Correct. Small injuries become ulcers if missed.', 'Incorrect. Soaking dries and macerates skin, and hot water can burn feet that can’t feel heat.'] },
        { h: 'Footwear and nails', o: ['Wear closed shoes that fit well, with socks', 'Cut nails straight across', 'Walk barefoot at home so the feet can breathe', 'Warm cold feet with a heating pad'], a: [0, 1],
          r: ['Correct. Protects feet that can’t feel injury.', 'Correct. Prevents ingrown nails.', 'Incorrect. Never barefoot — an unfelt injury becomes an ulcer.', 'Incorrect. Numb feet can burn; use warm socks instead.'] }],
      ask: 'What changes when a foot can’t feel pain?',
      cues: ['Reduced sensation = injuries go unnoticed', 'Poor circulation = slow healing'],
      phys: 'High glucose damages nerves (no pain warning) and small vessels (poor healing) → a small, unfelt injury becomes an infected ulcer → which can lead to amputation.',
      rule: 'Diabetic feet: look daily, wash and dry well, shoes always, nails straight across, no heat, no soaking, report any break in the skin.' },
    { f: 'mcq', t: 'Delegating diabetes care', cj: 'ta', cn: 'mgmt', st: ['deleg'],
      q: 'Which task can the RN delegate to the assistive personnel (AP) for a stable client with type 2 diabetes?',
      o: ['Check a fingerstick glucose before lunch and report the result', 'Teach the client to give an insulin injection', 'Assess the feet for loss of sensation', 'Give the prescribed subcutaneous insulin'], a: [0],
      r: ['Correct. A point-of-care glucose check on a stable client is a routine, trained task; the RN acts on the result.', 'Incorrect. Teaching is the RN’s.', 'Incorrect. Assessment is the RN’s.', 'Incorrect. APs don’t give medications; an LPN or RN does.'],
      ask: 'Which one is a routine measurement rather than teaching, assessing or giving a drug?',
      cues: ['Stable client', 'Measure and report = AP'],
      phys: 'Delegation follows the need for judgment → a fingerstick follows set steps and is reported → teaching, assessing and medication administration need a licensed nurse.',
      rule: 'AP: fingersticks (if trained), vital signs, hygiene, meal set-up, reporting. LPN: subQ insulin for stable clients. RN: teaching, assessment, IV insulin.' },
    { f: 'mcq', t: 'Four clients with diabetes — who first?', cj: 'ph', cn: 'mgmt', st: ['strategic', 'abc', 'actual'],
      q: 'The nurse receives report on four clients. Which client should the nurse see first?',
      o: ['A client on an insulin infusion for DKA whose new potassium is 3.1 mEq/L', 'A client whose glucose was 64 mg/dL 10 minutes ago and who is now eating breakfast', 'A client with type 2 diabetes asking about carbohydrate counting', 'A client with a foot ulcer who is due for a dressing change'], a: [0],
      r: ['Correct. Insulin keeps pushing potassium into cells; at 3.1 the client is at risk of a dangerous dysrhythmia. The insulin is usually held while potassium is replaced — call now.',
        'Incorrect. Already treated and eating; recheck in a few minutes.',
        'Incorrect. Teaching can wait.',
        'Incorrect. Routine care can wait.'],
      ask: 'Which client has a problem that can stop the heart?',
      cues: ['“First”', 'Insulin running + K⁺ 3.1'],
      phys: 'Insulin moves K⁺ into cells → serum K⁺ falls → low K⁺ disturbs the heart’s electrical recovery (flat T waves, U waves, ectopy) → lethal dysrhythmias.',
      rule: 'Who first: a life-threatening lab with the cause still running (insulin + K⁺ < 3.5) beats a treated low glucose, teaching and routine care.' },
    { f: 'mcq', t: 'A new diagnosis and food', cj: 'ta', cn: 'psy', st: ['comm'],
      q: 'A client newly diagnosed with type 1 diabetes says, “I’ll never be able to eat anything I like again.” Which response by the nurse is best?',
      o: ['“It sounds like you’re worried about losing the foods you enjoy. What foods matter most to you?”', '“Don’t worry — lots of people with diabetes eat whatever they want.”', '“You’ll get used to it after a while.”', '“Diabetes is serious, so you need to follow the diet strictly.”'], a: [0],
      r: ['Correct. It names the feeling and opens a conversation the nurse can build teaching on — with insulin and carbohydrate counting, most foods can fit.', 'Incorrect. False reassurance, and not accurate.', 'Incorrect. Minimizes the feeling.', 'Incorrect. Lecturing ignores the concern and can increase fear.'],
      ask: 'Which reply hears the loss the client is describing?',
      cues: ['A fear of loss', 'Communication question'],
      phys: 'A new chronic illness brings grief for the old routine → acknowledging it lowers anxiety → a client who feels heard is more ready to learn carbohydrate counting.',
      rule: 'Reflect the feeling and explore; then teach. Avoid false reassurance, minimizing and lecturing.' },
    { f: 'ddt', t: 'Three glucose findings, three actions', cj: 'ac', cn: 'adapt', st: ['abnormal', 'data'],
      q: 'The nurse reviews three findings at a diabetes clinic. For each finding, choose what it most likely means and the nurse’s best action.',
      head: ['Finding', 'What it most likely means', 'Nurse’s best action'],
      rows: [
        ['Glucose 54 mg/dL in the waiting room; alert, sweaty and shaky',
          { o: ['Hypoglycemia', 'Hyperglycemia from stress', 'An expected value before a meal'], a: 0, r: 'Below 70 with sweating and shaking — the adrenaline response to a low.' },
          { o: ['Give 15 g of fast carbohydrate by mouth and recheck in 15 minutes', 'Give glucagon IM', 'Have the client eat lunch, then recheck in 1 hour'], a: 0, r: 'Alert and able to swallow at 50–69 mg/dL → 15 g by mouth (your book: 30 g below 50), recheck in 15 minutes. Glucagon is for a client who can’t swallow; a meal and an hour’s wait is too slow.' }],
        ['Type 1 diabetes: glucose 300 mg/dL with moderate urine ketones, about to go jogging',
          { o: ['Too little insulin — the body is burning fat for fuel', 'The expected effect of a large breakfast', 'Hypoglycemia unawareness'], a: 0, r: 'Ketones mean the cells are short of insulin and burning fat — the road to DKA.' },
          { o: ['No exercise today; take insulin as prescribed, drink fluids and recheck', 'Jog to bring the glucose down', 'Eat a snack before the jog'], a: 0, r: 'Your book: ketones present → do not exercise; exercise only at 100–250 mg/dL without ketones. Exercising now adds stress hormones and pushes glucose and ketones higher.' }],
        ['Fasting glucose 118 mg/dL at two visits; BMI 31; no symptoms',
          { o: ['Prediabetes', 'Type 2 diabetes', 'A normal fasting glucose'], a: 0, r: 'Your book: fasting 74–100 is normal, 100–125 is prediabetes, and 126 or higher is diabetes.' },
          { o: ['Teach weight loss and at least 150 minutes of activity a week, and plan a yearly recheck', 'Expect insulin to be started', 'No follow-up — the value is normal'], a: 0, r: 'Diet, activity and weight loss can prevent or delay type 2; prediabetes is retested every year.' }]],
      ask: 'For each number: is it a low, a high with danger signs, or an early warning — and what does that change about what you do now?',
      cues: ['54 + sweating and shaking', '300 + ketones + exercise planned', 'Fasting 100–125 twice'],
      phys: 'A low starves the brain → adrenaline fires (sweating, shaking) → fast sugar fixes it within about 15 minutes. A high glucose with ketones means too little insulin → exercise releases more glucose-raising stress hormones → glucose and ketones climb. Prediabetes is insulin resistance the beta cells can still partly overcome → lifestyle change can stop the slide to type 2.',
      rule: 'Glucose < 70 → 15 g (30 g if < 50), recheck in 15 min. Ketones → no exercise (exercise at 100–250 with no ketones). Fasting 100–125 = prediabetes → diet, 150 min/week of activity, weight loss, yearly test.' }
  ]);

  // Source-review additions: append only to preserve existing saved question identifiers.
  N('56', [
  {
    "f": "mcq",
    "t": "DKA: potassium before insulin",
    "q": "An adult with DKA has K⁺ 3.2 mmol/L. Isotonic IV fluids have started. Under the current adult hyperglycemic-crisis consensus, which action is appropriate before insulin?",
    "o": [
      "Replace potassium as prescribed and delay insulin until K⁺ is above 3.5 mmol/L",
      "Start insulin because the glucose is above 400 mg/dL",
      "Give insulin first to correct the potassium deficit",
      "Ignore potassium unless there is an ECG change"
    ],
    "a": [
      0
    ],
    "r": [
      "Correct. Insulin can lower serum potassium further; the current adult consensus delays it for K⁺ < 3.5 until K⁺ > 3.5.",
      "Incorrect. Severe hyperglycemia does not remove the potassium safety requirement.",
      "Incorrect. Insulin shifts potassium into cells and can worsen the low serum value.",
      "Incorrect. Dangerous hypokalemia can precede visible rhythm changes."
    ],
    "ask": "Which action could worsen this immediately dangerous lab?",
    "cues": [
      "DKA",
      "K⁺ 3.2",
      "Fluids started"
    ],
    "phys": "Insulin shifts K⁺ into cells; depleted body stores plus a low serum value increase dysrhythmia and respiratory-muscle risk.",
    "rule": "Current adult DKA protocol: correct K⁺ < 3.5 and delay insulin until > 3.5; monitor per orders.",
    "cj": "ta",
    "cn": "pharm",
    "st": [
      "data"
    ],
    "source": "Original educational practice; current-source distinction documented in audit/exam3-source-review.md"
  },
  {
    "f": "mcq",
    "t": "SGLT2: glucose does not rule out DKA",
    "q": "A client with type 2 diabetes taking an SGLT2 inhibitor has vomiting, deep rapid breathing, glucose 184 mg/dL, elevated blood ketones and metabolic acidosis. What is the priority interpretation?",
    "o": [
      "Possible euglycemic DKA requiring urgent evaluation",
      "DKA is excluded because glucose is below 300 mg/dL",
      "An expected SGLT2 effect needing no action",
      "HHS is established by this glucose value"
    ],
    "a": [
      0
    ],
    "r": [
      "Correct. Ketones and acidosis with these symptoms require urgent evaluation even without marked hyperglycemia.",
      "Incorrect. The textbook’s typical > 300 value must not be used to rule out DKA.",
      "Incorrect. Vomiting and acidosis are concerning, not routine glucosuria.",
      "Incorrect. This value does not establish the marked hyperglycemia/hyperosmolality of HHS."
    ],
    "ask": "Do ketones and acidosis change the meaning of a near-normal glucose?",
    "cues": [
      "SGLT2 therapy",
      "Vomiting + Kussmaul-type breathing",
      "Ketones + metabolic acidosis"
    ],
    "phys": "SGLT2-related urinary glucose loss can limit the measured glucose rise while insulin deficiency permits ketogenesis.",
    "rule": "Assess DKA from the full clinical and biochemical picture; type 2 and glucose below 200 do not exclude it.",
    "cj": "ac",
    "cn": "adapt",
    "st": [
      "data"
    ],
    "source": "Original educational practice; current-source distinction documented in audit/exam3-source-review.md"
  },
  {
    "f": "mcq",
    "t": "DKA resolution: evaluate ketones",
    "q": "During DKA treatment, a client’s glucose is 168 mg/dL and the anion gap has closed. Plasma ketones remain 1.6 mmol/L. Which conclusion follows the current adult consensus?",
    "o": [
      "Ketoacidosis has not met the ketone criterion for resolution",
      "The normal glucose proves the DKA is resolved",
      "Gap closure alone permits stopping insulin immediately",
      "Urine ketones alone are the preferred resolution measure"
    ],
    "a": [
      0
    ],
    "r": [
      "Correct. Plasma ketones must fall below 0.6 mmol/L, with the required pH or bicarbonate recovery.",
      "Incorrect. Glucose can improve before ketoacidosis resolves.",
      "Incorrect. The gap alone is not the recommended endpoint.",
      "Incorrect. Urine ketones can remain misleading during recovery."
    ],
    "ask": "Which result still demonstrates unresolved ketosis?",
    "cues": [
      "Glucose improved",
      "Plasma ketones 1.6"
    ],
    "phys": "Insulin must suppress ketogenesis beyond the initial glucose correction; prescribed dextrose may permit insulin to continue safely.",
    "rule": "Current adult resolution: plasma ketones < 0.6 plus pH ≥ 7.3 OR bicarbonate ≥ 18; glucose ideally < 200.",
    "cj": "eo",
    "cn": "adapt",
    "st": [
      "data"
    ],
    "source": "Original educational practice; current-source distinction documented in audit/exam3-source-review.md"
  },
  {
    "f": "mcq",
    "t": "CGM: device-specific calibration",
    "q": "A client switches from an older CGM to a new real-time system whose instructions state user calibration is not required. Which teaching is appropriate?",
    "o": [
      "Follow the new device instructions and keep a BGM meter available for suspected discordance or device interruption",
      "Calibrate every system twice a day because all CGMs require it",
      "Discard the BGM meter because CGM can never be inaccurate",
      "Use A1C instead of checking a suspected immediate low"
    ],
    "a": [
      0
    ],
    "r": [
      "Correct. Calibration depends on the actual system; BGM remains available for situations requiring confirmation.",
      "Incorrect. That blanket instruction reflects older devices.",
      "Incorrect. Sensor discordance, warm-up and interrupted readings can require BGM.",
      "Incorrect. A1C describes longer-term exposure, not an immediate glucose level."
    ],
    "ask": "Does a rule for an older sensor apply to every newer sensor?",
    "cues": [
      "New device",
      "No user calibration in its instructions"
    ],
    "phys": "CGM measures interstitial glucose; changing technology does not eliminate the need to assess a mismatch with the clinical situation.",
    "rule": "Use device-specific calibration and treatment instructions with BGM backup (ADA 2026 Diabetes Technology).",
    "cj": "ta",
    "cn": "hpm",
    "st": [
      "data"
    ],
    "source": "Original educational practice; current-source distinction documented in audit/exam3-source-review.md"
  },
  {
    "f": "mcq",
    "t": "Monogenic diabetes: individualized treatment",
    "q": "A young adult is diagnosed with MODY after genetic evaluation. Which statement by the nurse is accurate?",
    "o": [
      "Treatment depends on the genetic subtype; insulin is not required for every form",
      "MODY is always autoimmune type 1 diabetes",
      "All MODY requires the same lifelong insulin regimen",
      "The diagnosis means glucose monitoring and follow-up are unnecessary"
    ],
    "a": [
      0
    ],
    "r": [
      "Correct. Monogenic subtypes differ in their treatment requirements.",
      "Incorrect. MODY is a monogenic disorder, not automatically autoimmune type 1.",
      "Incorrect. Some subtypes need insulin, others use different management.",
      "Incorrect. Follow-up is individualized; the label does not remove care needs."
    ],
    "ask": "What does a genetic diagnosis change about management?",
    "cues": [
      "MODY confirmed",
      "Genetic subtype matters"
    ],
    "phys": "Different gene defects alter insulin secretion in different ways, so a type 1 treatment assumption can be wrong.",
    "rule": "MODY treatment is subtype-specific; follow the endocrinology plan (Endocrine Society).",
    "cj": "ac",
    "cn": "hpm",
    "st": [
      "data"
    ],
    "source": "Original educational practice; current-source distinction documented in audit/exam3-source-review.md"
  },
  {
    "f": "mcq",
    "t": "Diabetes teaching: the plan must be attainable",
    "q": "A client can correctly explain insulin use but says, “I cannot afford the insulin and strips until next month.” Which response best supports safe discharge?",
    "o": [
      "Explore the immediate supply gap and coordinate an affordable plan with the diabetes team and pharmacy",
      "Repeat the same handout until the client memorizes it",
      "Document nonadherence and discharge without further discussion",
      "Tell the client to skip basal insulin whenever supplies run low"
    ],
    "a": [
      0
    ],
    "r": [
      "Correct. Demonstrated knowledge does not solve an access barrier; the team must address safe access and follow-up.",
      "Incorrect. The stated barrier is affordability, not lack of information.",
      "Incorrect. Labeling the patient does not resolve the safety problem.",
      "Incorrect. Omitting essential basal insulin can precipitate DKA."
    ],
    "ask": "Is the barrier knowledge, ability or access?",
    "cues": [
      "Correct teach-back",
      "No affordable supplies"
    ],
    "phys": "A self-management plan only works if the patient can obtain and use its essential supplies.",
    "rule": "Assess affordability, supplies, skills and support; coordinate care before discharge.",
    "cj": "ta",
    "cn": "mgmt",
    "st": [
      "data"
    ],
    "source": "Original educational practice; current-source distinction documented in audit/exam3-source-review.md"
  }
]);
  N('47', [
  {
    "f": "mcq",
    "t": "H. pylori: current regimen versus older examples",
    "q": "An adult with H. pylori has no susceptibility result and no contraindication to the recommended regimen. Which prescription should the nurse recognize as the ACG 2024 recommended empiric optimized bismuth quadruple regimen?",
    "o": [
      "PPI, bismuth, tetracycline and metronidazole for 14 days",
      "Clarithromycin alone until pain stops",
      "PPI and one antibiotic for 3 days",
      "Clarithromycin triple therapy for every patient regardless of susceptibility"
    ],
    "a": [
      0
    ],
    "r": [
      "Correct. This is the recommended optimized BQT regimen when susceptibility is unknown.",
      "Incorrect. Monotherapy and symptom-based stopping do not provide reliable eradication.",
      "Incorrect. This is not the recommended eradication regimen.",
      "Incorrect. Current guidance requires proven clarithromycin susceptibility for that triple regimen."
    ],
    "ask": "Is this asking about the textbook example or current ACG guidance?",
    "cues": [
      "Current ACG 2024",
      "Susceptibility unknown"
    ],
    "phys": "Combination treatment supports eradication; resistance changes which regimen should be selected.",
    "rule": "Current ACG: 14-day optimized BQT when susceptibility is unknown; verify cure after treatment.",
    "cj": "ta",
    "cn": "pharm",
    "st": [
      "data"
    ],
    "source": "Original educational practice; current-source distinction documented in audit/exam3-source-review.md"
  }
]);
})();
