// Think it through — Chapter 47 — stomach conditions. Format: see data/e3/cj/README.md.
module.exports = [
  {
    id: 'gastritis', sys: 'Digestion & elimination', name: 'Gastritis',
    guide: ['47:0'],
    topics: ['47-gastritis', '47-ulcer-and-gastritis-drugs-table-47-1'],
    nodes: ['pud', 'acid'], drugs: ['omeprazole', 'pantoprazole', 'famotidine', 'sucralfate', 'almag', 'aloh', 'bismuth', 'misoprostol'],
    patient: 'A 45-year-old who takes naproxen every day for knee pain and drinks most nights has burning upper abdominal pain and nausea after meals.',
    report: [
      'The client admitted with gastritis vomited about 200 mL of coffee-ground emesis; HR 104, BP 118/72 (baseline 132/80).',
      'Takes naproxen daily for knee pain and drinks alcohol most nights; admitted for epigastric pain.',
      'Possible upper GI bleeding from erosive gastritis.',
      'Please evaluate. Requesting a CBC, type and screen, an IV PPI order, NPO status and a decision on stopping the naproxen.'
    ],
    steps: {
      rc: {
        gist: '**Epigastric pain and dyspepsia** — rapid onset in acute gastritis; in chronic gastritis, vague upper abdominal discomfort **after meals**, nausea and anorexia. Danger signs: **hematemesis, melena** and signs of hypovolemia — hemorrhage can be the first sign.',
        terms: [
          { t: 'Epigastric pain and dyspepsia', see: 'Burning or gnawing pain under the sternum and above the umbilicus; indigestion, fullness.',
            why: 'The inflamed mucosa has lost its protective layer, so **acid and pepsin** reach and irritate the tissue and its nerve endings.',
            means: 'Ask what makes it better or worse (food, NSAIDs, alcohol). Pain that becomes **sudden and severe** may mean perforation.' },
          { t: 'Nausea, vomiting and anorexia', see: 'Doesn’t want to eat; may vomit after meals.',
            why: 'An inflamed stomach lining is irritated by food and empties more slowly.',
            means: 'Watch **fluid and electrolyte** balance — persistent vomiting loses fluid, potassium and acid.' },
          { t: 'Hematemesis and melena', see: 'Bright red or coffee-ground vomit; black, tarry stools.',
            why: '**Erosive** gastritis wears through the mucosa into small blood vessels.',
            means: 'A **life-threatening emergency** if heavy — vital signs, IV access, report now.' },
          { t: 'Signs of vitamin B₁₂ deficiency (chronic gastritis)', see: 'Fatigue, pallor, a smooth sore tongue, numbness and tingling.',
            why: 'Chronic and **autoimmune** gastritis destroy the **parietal cells**, which make **intrinsic factor** — needed to absorb vitamin B₁₂.',
            means: 'May need **lifelong B₁₂ injections**. Chronic and autoimmune gastritis also raise **gastric cancer** risk.' }
        ],
        cards: ['47-gastritis > Acute signs', '47-gastritis > Chronic gastritis']
      },
      ac: {
        gist: 'Inflammation of the gastric mucosa when its defenses — **mucus, bicarbonate, prostaglandins and blood flow** — are overwhelmed. **Acute**: NSAIDs (the big one), alcohol, caffeine, stress, smoking, corrosives. **Chronic**: mostly ***H. pylori***. **EGD with biopsy** is the gold standard.',
        terms: [
          { t: 'NSAIDs and the mucosal barrier', see: 'Daily ibuprofen, naproxen or aspirin.',
            why: 'NSAIDs block **prostaglandins**, which keep the stomach lining protected with mucus, bicarbonate and blood flow.',
            means: '**Remove the cause** — the main treatment for acute gastritis. Misoprostol or a PPI protects clients who must keep taking NSAIDs.' },
          { t: '*H. pylori*', see: 'Positive breath test, stool antigen, serology or biopsy.',
            why: 'The bacterium makes **urease**, which neutralizes the acid around it, and damages the protective lining.',
            means: 'Treat with a PPI plus antibiotics and **finish the whole course**. For breath or stool testing, including the test of cure: **at least 4 weeks after antibiotics or bismuth** and **off PPIs at least 2 weeks** — **antacids are allowed** — per the provider’s plan.' }
        ],
        cards: ['47-gastritis > Acute gastritis', '47-gastritis > Diagnosis']
      },
      ph: {
        gist: '**Acute pain**; risk for **upper GI bleeding** and **fluid and electrolyte imbalance** from vomiting; in chronic gastritis, **B₁₂ deficiency** and gastric cancer risk.',
        cards: []
      },
      gs: {
        gist: '**Remove the cause**, **reduce acid and protect the mucosa** (PPIs, H₂ blockers, sucralfate, antacids), **eradicate *H. pylori*** when present, and replace **B₁₂** in chronic gastritis.',
        terms: [
          { t: 'Why a PPI goes 30 minutes before the main meal', see: 'Omeprazole or pantoprazole before breakfast or the main meal.',
            why: 'PPIs block only proton pumps that are **switched on**, and **food is the switch**. Taken before the meal, the drug is in the blood just as the pumps activate.',
            means: 'The most commonly missed PPI teaching point. Don’t crush delayed-release forms; step down slowly rather than stopping abruptly.' },
          { t: 'Why calcium carbonate can backfire', see: 'Tums-type antacids.',
            why: 'Calcium stimulates **gastrin**, which triggers **rebound acid** secretion.',
            means: 'Aluminum-magnesium antacids are preferred; separate any antacid from other drugs by **1–2 hours**.' }
        ],
        cards: ['47-gastritis > Treatment', '47-ulcer-and-gastritis-drugs-table-47-1 > PPIs — the drug of choice',
          '47-ulcer-and-gastritis-drugs-table-47-1 > Current ACG update (2024)']
      },
      ta: {
        gist: 'Hold and report NSAIDs; give the **PPI 30 minutes before the main meal**, **sucralfate 1 hour before meals** and not within 30 minutes of antacids, and keep **antacids 1–2 hours from other drugs**; **bland, smaller, more frequent meals**; avoid caffeine (**even decaf coffee**), tomato, citrus, peppers and onions; monitor for bleeding.',
        cards: ['47-ulcer-and-gastritis-drugs-table-47-1 > Antacids', '47-ulcer-and-gastritis-drugs-table-47-1 > H₂ blockers',
          '47-ulcer-and-gastritis-drugs-table-47-1 > Mucosal protectors']
      },
      eo: {
        gist: 'Pain relieved, **no bleeding**, eating without distress; the client avoids NSAIDs, alcohol and smoking; ***H. pylori*** eradication confirmed **at least 4 weeks** after antibiotics.',
        cards: ['47-gastritis > Prevention (Box 47.1)']
      }
    }
  },
  {
    id: 'ugib', sys: 'Digestion & elimination', name: 'Peptic ulcer with upper GI bleeding',
    guide: ['47:0', '47:1'],
    topics: ['47-peptic-ulcer-disease-the-infection-exemp', '47-upper-gi-bleeding-and-ulcer-emergencies'],
    nodes: ['pud', 'ugib', 'acid'], drugs: ['pantoprazole', 'omeprazole', 'clarithromycin', 'amoxicillin'],
    patient: 'A client who takes ibuprofen every day for back pain vomits coffee-ground material and feels dizzy standing up.',
    report: [
      'The client vomited about 300 mL of coffee-ground emesis; HR 118, BP 92/58, dizzy and orthostatic on standing.',
      'Takes ibuprofen daily for chronic back pain; no known GI history.',
      'Suspected upper GI bleed with early hypovolemia. Two large-bore IVs are in and the client is NPO.',
      'Please evaluate now. Requesting a CBC, type and crossmatch, IV fluid orders and a GI consult for EGD.'
    ],
    steps: {
      rc: {
        gist: '**Hematemesis** (bright red or coffee-ground), **melena**, **tachycardia** with falling BP, **orthostatic hypotension**, and **new confusion** in an older adult — signs of **hypovolemia from GI blood loss**.',
        terms: [
          { t: 'Bright red hematemesis', see: 'Vomiting fresh red blood or clots.',
            why: 'Brisk, **active bleeding** at or above the duodenum: the blood comes up before stomach acid has time to change it.',
            means: 'Fast blood loss — ABCs, two large-bore IVs, report **now**.' },
          { t: 'Coffee-ground emesis', see: 'Dark brown, granular vomit.',
            why: 'Blood that **sat in the stomach** long enough for **gastric acid to turn hemoglobin brown**.',
            means: 'A slower or older bleed — still a bleed. Report it, measure it and trend the vital signs.' },
          { t: 'Melena', see: 'Black, sticky, tarry, foul-smelling stool.',
            why: 'Blood from the upper GI tract **digested on its way through the intestines** turns black.',
            means: 'Upper GI source (more common with duodenal ulcers). Bright red blood from the rectum usually means a lower source or a very fast upper bleed.' },
          { t: 'Tachycardia', see: 'Pulse rising, often before the BP falls.',
            why: 'Losing volume lowers venous return; **baroreceptors** sense the drop and trigger a **sympathetic response** that raises the heart rate to keep cardiac output up.',
            means: '**The earliest vital-sign warning** of hypovolemia. A rising pulse with a normal BP is compensation, not stability.' },
          { t: 'Orthostatic hypotension and dizziness on standing', see: 'BP drops and HR rises when the client sits up or stands; lightheaded, may faint.',
            why: 'With less circulating volume, the body cannot compensate quickly when gravity pools blood in the legs.',
            means: 'Early sign of volume loss and a **fall risk** — assist with every position change.' },
          { t: 'Hypotension, cool clammy skin and low urine output', see: 'BP falling, pale cool moist skin, urine under 30 mL/hr.',
            why: 'Compensation is failing: the body **constricts skin vessels** to send blood to the heart and brain, and the kidneys conserve water (less perfusion, **ADH and aldosterone**).',
            means: '**Hypovolemic shock** — more than about 1 L lost. Fluids and blood now, report immediately.' },
          { t: 'New confusion in an older adult', see: 'Restless, disoriented, or unusually drowsy.',
            why: '**Reduced blood flow and oxygen to the brain**; older adults compensate less well.',
            means: 'Can be the **first** sign of bleeding in an older adult — do not assume it is baseline.' },
          { t: 'Burning, gnawing epigastric pain', see: 'Pain between the umbilicus and the xiphoid; may wake the client at night (duodenal).',
            why: '**Acid and pepsin** reach the exposed tissue and nerve endings in the ulcer crater.',
            means: 'A change from intermittent pain to **constant pain radiating to the back** suggests penetration or **perforation**.' },
          { t: 'Rigid, board-like abdomen', see: 'Sudden severe pain spreading over the abdomen; the client lies still with knees drawn up.',
            why: 'The ulcer has **perforated** and gastric contents spill into the peritoneum (**chemical peritonitis**); the abdominal muscles spasm involuntarily to guard it.',
            means: '**Surgical emergency** — NPO, report immediately, watch for sepsis and shock.' }
        ],
        cards: ['47-peptic-ulcer-disease-the-infection-exemp > Hemorrhage — the most serious', '47-peptic-ulcer-disease-the-infection-exemp > Physical',
          '47-peptic-ulcer-disease-the-infection-exemp > History']
      },
      ac: {
        gist: 'Ulceration from ***H. pylori*** or **NSAIDs** has eroded into a vessel. **Bright red** = brisk active bleeding; **coffee-ground** = slower bleeding exposed to gastric acid; **melena** = blood digested through the intestine.',
        terms: [
          { t: 'NSAID-induced ulcer', see: 'History of daily ibuprofen, naproxen or aspirin.',
            why: 'NSAIDs block **prostaglandins**, which normally keep the stomach lining protected (mucus, bicarbonate and blood flow). Without them, acid and pepsin erode the mucosa.',
            means: 'Teach to **avoid NSAIDs**; misoprostol (a prostaglandin) or a PPI protects clients who must take them.' },
          { t: '*H. pylori* infection', see: 'Positive urea breath test, stool antigen, serology or biopsy.',
            why: 'The bacterium makes **urease**, which neutralizes acid around it, and damages the protective lining so acid can reach the tissue.',
            means: 'Curable with antibiotics plus a PPI — the client must **finish the whole course** or the ulcer recurs.' },
          { t: 'Hemoglobin and hematocrit falling', see: 'Hgb/Hct lower than baseline, often falling between draws.',
            why: 'Early in an acute bleed whole blood is lost, so the first value can look **near normal**; it falls as fluid shifts into the vessels and IV fluids dilute the blood.',
            means: '**Trend** the values and treat the vital signs — a normal first Hgb does not rule out a serious bleed.' },
          { t: 'BUN elevated with a normal creatinine', see: 'BUN high, creatinine normal.',
            why: 'Blood in the gut is **digested protein**: it is absorbed and turned into urea by the liver.',
            means: 'Supports an **upper GI** bleed rather than kidney failure (where creatinine also rises).' }
        ],
        cards: ['47-peptic-ulcer-disease-the-infection-exemp > Definition and cause', '47-peptic-ulcer-disease-the-infection-exemp > Gastric vs duodenal (Table 47.2)',
          '47-peptic-ulcer-disease-the-infection-exemp > Tests for *H. pylori*']
      },
      ph: {
        gist: '**Hypovolemic shock** is the priority. **Sudden severe pain with a rigid, board-like abdomen** = **perforation** with peritonitis — a surgical emergency.',
        cards: ['47-peptic-ulcer-disease-the-infection-exemp > Perforation', '47-peptic-ulcer-disease-the-infection-exemp > Priority problems and goals',
          '47-peptic-ulcer-disease-the-infection-exemp > Pyloric (gastric outlet) obstruction']
      },
      gs: {
        gist: 'Restore **circulating volume** (isotonic fluids, packed RBCs), achieve **hemostasis** by endoscopy, and **suppress acid with a PPI** to stabilize the clot.',
        cards: ['47-upper-gi-bleeding-and-ulcer-emergencies > Fluids and blood', '47-upper-gi-bleeding-and-ulcer-emergencies > NG tube',
          '47-upper-gi-bleeding-and-ulcer-emergencies > Endoscopic hemostasis']
      },
      ta: {
        gist: '**ABCs**: oxygen, **two large-bore IVs**, isotonic fluid and blood products; trend **VS, Hgb/Hct and SpO₂**; keep **NPO** and prepare for **EGD**.',
        cards: ['47-upper-gi-bleeding-and-ulcer-emergencies > Critical rescue', '47-upper-gi-bleeding-and-ulcer-emergencies > If bleeding continues']
      },
      eo: {
        gist: '**Hemodynamically stable**, **no orthostatic changes**, Hgb/Hct stable, no further bleeding; the client avoids NSAIDs, completes ***H. pylori*** therapy and can state when to seek care.',
        cards: ['47-upper-gi-bleeding-and-ulcer-emergencies > Evaluate', '47-upper-gi-bleeding-and-ulcer-emergencies > Going home']
      }
    }
  },
  {
    id: 'gastric-cancer', sys: 'Digestion & elimination', name: 'Gastric cancer, gastrectomy and dumping syndrome',
    guide: ['47:1'],
    topics: ['47-gastric-cancer-and-life-after-gastrectom'],
    nodes: ['ugib', 'fluids', 'insulin'], drugs: ['octreotide', 'fluorouracil'],
    patient: 'Two weeks after a subtotal gastrectomy for gastric cancer, a client becomes dizzy, sweaty and tachycardic 15 minutes after a large meal with a milkshake.',
    report: [
      'Two weeks after a subtotal gastrectomy, 15 minutes after a large meal with a milkshake, the client is dizzy and diaphoretic; HR 118, BP 102/64. Now lying down and improving.',
      'Gastric adenocarcinoma; subtotal gastrectomy two weeks ago, advancing diet at home.',
      'Early dumping syndrome; at risk for late dumping with hypoglycemia in 1–3 hours.',
      'Requesting a dietitian consult for dumping-diet teaching. I will recheck vital signs and glucose in 1–2 hours.'
    ],
    steps: {
      rc: {
        gist: 'Cancer: **chronic dyspepsia relieved by antacids at first**, early fullness, then **weight loss, iron deficiency anemia, vomiting, an epigastric mass**. After gastrectomy: **early dumping** (within about 20 minutes), **late dumping** (1–3 hours), and **acute gastric dilation**.',
        terms: [
          { t: 'Early dumping syndrome', see: 'Within about 20 minutes of eating: vertigo, tachycardia, palpitations, sweating, pallor, the urge to lie down; abdominal fullness.',
            why: 'Without the stomach and pylorus to hold food back, a **concentrated meal rushes into the small intestine** and **pulls fluid from the blood into the bowel**. Circulating volume drops and the bowel distends.',
            means: 'Have the client **lie down** and report. Prevention: small meals, **no liquids with meals**, high protein and fat, low carbohydrate, **lie flat briefly after eating**.' },
          { t: 'Late dumping syndrome', see: '1–3 hours after eating: dizziness, light-headedness, palpitations, diaphoresis, confusion.',
            why: 'Sugar from the meal is absorbed in a rush, glucose spikes, and the pancreas **overshoots with insulin**, causing **hypoglycemia**.',
            means: 'Check **glucose** and treat a low; avoid **concentrated sweets**. Acarbose or octreotide may be prescribed in severe cases.' },
          { t: 'Acute gastric dilation', see: 'Epigastric pain, fullness, **hiccups**, tachycardia, hypotension; little or no NG drainage.',
            why: 'A **clogged NG tube** lets the remaining stomach fill with fluid and gas it cannot empty; the distended stomach presses on the diaphragm and strains the suture line.',
            means: 'Notify the surgeon for an order to **irrigate or replace** the tube — don’t reposition it on your own.' },
          { t: 'Iron deficiency anemia and occult blood', see: 'Fatigue, pallor, low Hgb/Hct, positive stool occult blood.',
            why: 'The tumor **bleeds slowly** into the stomach.',
            means: 'Often found before any obvious bleeding — report and trend Hgb/Hct.' },
          { t: 'B₁₂ deficiency after gastrectomy', see: 'Smooth, shiny, “beefy” red tongue (atrophic glossitis), fatigue, megaloblastic anemia, numbness.',
            why: 'The removed stomach made **intrinsic factor**, which the body needs to absorb **vitamin B₁₂**.',
            means: '**Lifelong B₁₂ injections** as prescribed; iron, folic acid, calcium and vitamin D absorption also fall.' }
        ],
        cards: ['47-gastric-cancer-and-life-after-gastrectom > Signs (Box 47.4)', '47-gastric-cancer-and-life-after-gastrectom > Early dumping syndrome',
          '47-gastric-cancer-and-life-after-gastrectom > Late dumping syndrome', '47-gastric-cancer-and-life-after-gastrectom > Acute gastric dilation']
      },
      ac: {
        gist: 'Mostly **adenocarcinoma**, arising from chronic ***H. pylori*** and **atrophic gastritis**; spreads to nodes, liver, lungs, bone and the peritoneum, and is often found late. After gastrectomy the lost reservoir and pylorus cause **dumping**, and lost **intrinsic factor** causes **B₁₂ deficiency**.',
        cards: ['47-gastric-cancer-and-life-after-gastrectom > The disease', '47-gastric-cancer-and-life-after-gastrectom > Risk factors',
          '47-gastric-cancer-and-life-after-gastrectom > Diagnose and treat']
      },
      ph: {
        gist: 'After surgery: **lungs** (atelectasis, pneumonia), **bleeding**, **gastric dilation** and anastomotic problems, **paralytic ileus**, wound infection; then **imbalanced nutrition** (dumping, B₁₂) and **coping** with cancer.',
        cards: ['47-gastric-cancer-and-life-after-gastrectom > Routine care']
      },
      gs: {
        gist: 'Surgery (subtotal or total gastrectomy) with chemotherapy as staged; correct **malnutrition** before surgery; prevent pulmonary and surgical complications; **slow food delivery** to control dumping; replace **B₁₂**; support coping and palliative care when needed.',
        cards: ['47-gastric-cancer-and-life-after-gastrectom > Before surgery', '47-gastric-cancer-and-life-after-gastrectom > Managing dumping']
      },
      ta: {
        gist: 'Lung sounds, **deep breathing and early walking**, **head of bed up**; keep the **NG tube patent** and report signs of dilation; check bowel sounds and the incision every 8–12 hours. Dumping diet: **small meals, no liquids with meals**, high protein and fat, low carbohydrate, **no concentrated sweets**, **lie flat briefly after eating**; B₁₂ injections.',
        cards: ['47-gastric-cancer-and-life-after-gastrectom > Other problems']
      },
      eo: {
        gist: 'Lungs clear, walking, bowel sounds back; eating small meals **without dumping symptoms**; weight stable; B₁₂ replaced; the client and family know the diet, infection signs and follow-up — recurrence is common.',
        cards: ['47-gastric-cancer-and-life-after-gastrectom > Going home']
      }
    }
  }
];
