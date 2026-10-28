// Think it through — Chapter 45 — assessment of the GI system. Format: see data/e3/cj/README.md.
module.exports = [
  {
    id: 'gi-aging-exam', sys: 'Digestion & elimination', name: 'Abdominal assessment and GI changes with aging',
    guide: ['45:0', '45:1'],
    topics: ['45-gi-changes-with-aging', '45-gi-history-and-the-abdominal-exam'],
    nodes: ['abd-exam'], drugs: [],
    patient: 'A 78-year-old admitted with abdominal discomfort hasn’t had a bowel movement in 5 days. You are about to assess the abdomen.',
    report: [
      'During my abdominal assessment I found a pulsating mass above the umbilicus with a bruit over the aorta; BP 172/96, HR 94. I stopped and did not palpate.',
      '74-year-old with hypertension and a long smoking history, admitted for abdominal discomfort.',
      'Possible abdominal aortic aneurysm.',
      'Please evaluate now. The client is on bed rest; requesting orders for imaging and BP control.'
    ],
    steps: {
      rc: {
        gist: 'Findings located **by quadrant**: distention or taut, glistening skin; **bowel sounds** absent, hypoactive or hyperactive; **guarding vs rigidity**; tenderness; and the alarms — **visible peristaltic waves** and a **bulging, pulsating mass or aortic bruit**. In older adults: **constipation and impaction**, fatty stools, poor appetite and signs of **B₁₂ or iron deficiency**.',
        terms: [
          { t: 'Right upper quadrant (RUQ)', see: 'Most of the liver, the gallbladder, duodenum, head of the pancreas, hepatic flexure, part of the ascending and transverse colon.',
            why: 'Pain or a finding in one quadrant usually comes from the **organs underneath** it.',
            means: 'RUQ pain or tenderness points to the **liver, gallbladder or duodenum** — ask about jaundice, fatty-meal pain and dark urine.' },
          { t: 'Left upper quadrant (LUQ)', see: 'Left lobe of the liver, stomach, spleen, body and tail of the pancreas, splenic flexure, part of the transverse and descending colon.',
            why: 'The **stomach, spleen and most of the pancreas** sit here.',
            means: 'LUQ findings suggest the **stomach, pancreas or spleen** — an enlarged spleen is found by the provider’s percussion.' },
          { t: 'Right lower quadrant (RLQ)', see: 'Cecum, appendix, right ureter, right ovary and fallopian tube, right spermatic cord.',
            why: 'The **appendix** and the start of the colon lie here.',
            means: 'RLQ pain raises **appendicitis** — **no palpation** if appendicitis is suspected. Auscultation starts here (ileocecal valve).' },
          { t: 'Left lower quadrant (LLQ)', see: 'Part of the descending colon, sigmoid colon, left ureter, left ovary and fallopian tube, left spermatic cord.',
            why: 'The **sigmoid colon**, where stool collects before the rectum, lies here.',
            means: 'LLQ findings suggest the **sigmoid colon** — for example stool, diverticular disease or obstruction.' },
          { t: 'Midline', see: 'Abdominal aorta; uterus if enlarged; bladder if distended.',
            why: 'The **aorta** runs down the midline, so its pulsation and sounds are found there.',
            means: 'A **bulging, pulsating mass or an aortic bruit** = possible **aneurysm**: don’t touch it, don’t percuss, notify the provider immediately.' },
          { t: 'Hypoactive or absent bowel sounds', see: 'Few or no gurgles (normal is 5–30 high-pitched gurgles a minute).',
            why: 'Peristalsis has slowed or stopped — after abdominal surgery, with **peritonitis** or **paralytic ileus**.',
            means: 'After surgery, the more reliable sign that peristalsis is back is **flatus within 8 hours or a stool within 12–24 hours** — ask.' },
          { t: 'Hyperactive bowel sounds (borborygmus)', see: 'Loud, frequent gurgling.',
            why: 'Increased motility with diarrhea or gastroenteritis, or bowel working hard **above a complete obstruction**.',
            means: 'Combine with distention, vomiting and **visible peristaltic waves** — report possible **obstruction**.' },
          { t: 'Guarding vs rigidity', see: 'Guarding: the client tenses on purpose. Rigidity: a board-hard abdomen the client can’t relax.',
            why: '**Rigidity is involuntary** — a reflex spasm of the abdominal muscles over an inflamed peritoneum.',
            means: 'Rigidity is a sign of **peritoneal inflammation** — report it. Examine tender areas last and gently.' },
          { t: 'Constipation and impaction in older adults', see: 'Infrequent hard stools, straining, fullness; liquid stool seeping around a hard mass.',
            why: 'With aging, **peristalsis slows** and nerve signals dull, so the urge to defecate is weaker and bowel movements get postponed.',
            means: 'Ask about the usual bowel pattern and laxative use; watch for **impaction**.' },
          { t: 'Steatorrhea in older adults', see: 'Pale, bulky, greasy, foul-smelling stools that float.',
            why: 'The aging pancreas makes **less lipase**, so fat is poorly digested and absorbed.',
            means: 'Expected direction with aging is **less** lipase — never more; report fatty stools and weight loss.' },
          { t: 'B₁₂ and iron deficiency in older adults', see: 'Fatigue, pallor, a sore smooth tongue, numbness.',
            why: 'The gastric mucosa atrophies and makes **less acid** (hypochlorhydria), and acid is needed to absorb **iron and vitamin B₁₂**; bacteria also overgrow (atrophic gastritis).',
            means: 'Check the CBC and B₁₂; older adults may need supplements or injections.' }
        ],
        cards: ['45-gi-history-and-the-abdominal-exam > Inspect', '45-gi-history-and-the-abdominal-exam > Auscultate',
          '45-gi-history-and-the-abdominal-exam > Light palpation', '45-gi-history-and-the-abdominal-exam > Two action alerts']
      },
      ac: {
        gist: 'A finding points to the **organs in that quadrant**. Aging moves the GI tract in one direction — **less**: less acid (less **B₁₂ and iron** absorbed), less motility (**constipation**), less lipase (**fatty stools**) and a smaller liver that **clears drugs slowly**. Lab ranges shift a little with age, but a **critical** value is never normal.',
        terms: [
          { t: 'Slower drug clearance by the aging liver', see: 'Usual doses causing side effects or toxicity.',
            why: 'The liver has **fewer and smaller cells** and more fibrous tissue, so it metabolizes drugs more slowly and they **build up**.',
            means: 'Watch older adults closely for **drug toxicity** with any drug the liver clears.' },
          { t: 'Lab values in older adults', see: 'ALT, AST, alkaline phosphatase and amylase slightly higher; total calcium slightly lower.',
            why: 'Normal aging shifts some reference ranges slightly.',
            means: 'A value just outside the adult range may be the older adult’s normal — compare with **baseline**, but report any **critical** value.' }
        ],
        cards: ['45-gi-history-and-the-abdominal-exam > Organs by quadrant (Table 45.1)', '45-gi-changes-with-aging > Stomach', '45-gi-changes-with-aging > Bowel',
          '45-gi-changes-with-aging > Pancreas', '45-gi-changes-with-aging > Liver', '45-gi-changes-with-aging > Gut microbiota',
          '45-gi-changes-with-aging > Lab values in older adults (Table 45.2)']
      },
      ph: {
        gist: 'The alarms first: a **pulsating mass or aortic bruit** (aneurysm — stop and notify), **rigidity** (peritonitis), **visible peristaltic waves** or absent sounds with distention (obstruction or ileus). In older adults: **impaction**, undernutrition and **drug toxicity**.',
        cards: ['45-gi-history-and-the-abdominal-exam > Is peristalsis back after surgery?']
      },
      gs: {
        gist: 'Get accurate findings **without causing harm**: the right order (**inspect → auscultate → palpate**), the right scope (the nurse does **light palpation**; the provider does deep palpation and percussion), and a history that builds a **timeline** — while adjusting care for the expected changes of aging.',
        cards: ['45-gi-history-and-the-abdominal-exam > Set-up and order', '45-gi-history-and-the-abdominal-exam > Percussion (provider)']
      },
      ta: {
        gist: 'Client **empties the bladder**, lies **supine with knees bent**; inspect **RUQ → LUQ → LLQ → RLQ**, painful areas last; auscultate with the **diaphragm starting in the RLQ**; **light palpation ½–1 inch**; **no palpation** if appendicitis or an aneurysm is suspected; take the history with **PQRST** and ask about flatus and stool after surgery.',
        cards: ['45-gi-history-and-the-abdominal-exam > Pain — PQRST', '45-gi-history-and-the-abdominal-exam > Questions to ask (Box 45.1)']
      },
      eo: {
        gist: 'Findings documented **by quadrant** and compared with baseline; alarms **reported immediately**; in an older adult, a regular bowel pattern, adequate nutrition and no signs of drug toxicity.',
        cards: ['45-gi-history-and-the-abdominal-exam > Psychosocial', '45-gi-changes-with-aging > Who gets what']
      }
    }
  },
  {
    id: 'gi-scope', sys: 'Digestion & elimination', name: 'Before and after a GI scope (EGD, ERCP, colonoscopy)',
    guide: [],
    topics: ['45-imaging-and-endoscopy-egd-ercp-capsule', '45-colonoscopy-sigmoidoscopy-and-colorectal'],
    nodes: ['scopes'], drugs: ['midazolam', 'pegprep'],
    patient: 'A 70-year-old had a colonoscopy with removal of two polyps an hour ago and now feels dizzy when sitting up.',
    report: [
      'One hour after a colonoscopy with polypectomy, the client is dizzy sitting up and pale; HR 112, BP 96/60 (baseline 138/82); a large maroon stool.',
      'Screening colonoscopy with two polyps removed; takes aspirin, held for 5 days before.',
      'Probable post-polypectomy bleeding with early hypovolemia.',
      'Please evaluate now. The client is flat with the IV running; requesting a CBC, type and screen and fluid orders.'
    ],
    steps: {
      rc: {
        gist: 'During sedation: **RR below 10**, shallow breathing, low exhaled CO₂, falling SpO₂, **bradycardia**. After: **absent gag reflex** (EGD, ERCP), **severe abdominal pain with guarding**, fever, **falling BP with tachycardia**, dizziness, pallor, **new confusion** in an older adult. **Expected**: fullness, mild cramping, flatus, a sore throat, a little blood in the first stool after a biopsy.',
        terms: [
          { t: 'Hypoventilation during sedation', see: 'RR below 10, shallow breathing, low exhaled CO₂ on capnography, then a falling SpO₂.',
            why: '**Midazolam, fentanyl and propofol** all depress the brain’s breathing center. Capnography shows rising CO₂ retention **before** the SpO₂ falls.',
            means: 'Stimulate with a **sternal rub**, open the airway, and give reversal agents per protocol.' },
          { t: 'Absent gag reflex after EGD or ERCP', see: 'The client can’t swallow normally; no gag when the back of the throat is touched.',
            why: 'A **local anesthetic spray** numbs the throat for the scope, and sedation dulls the reflexes further.',
            means: '**Nothing by mouth until the gag reflex returns** (usually 30–60 minutes) — preventing **aspiration** is the priority.' },
          { t: 'Severe pain, guarding and fever (perforation)', see: 'Sharp abdominal pain, rigid abdomen; after EGD, chest or neck pain and fever.',
            why: 'The scope or a biopsy has **torn through the wall**, letting air and contents leak into the peritoneum or mediastinum.',
            means: '**Report immediately**; nothing by mouth. Mild cramping and gas are expected — rigidity and fever are not.' },
          { t: 'Tachycardia, falling BP and dizziness (hemorrhage)', see: 'Rising pulse, falling BP, light-headed, pale or ash-gray, large bloody or maroon stool; confusion in an older adult.',
            why: 'Bleeding from a **polypectomy or biopsy** site lowers circulating volume; the heart speeds up to compensate.',
            means: 'Keep the client flat, check vital signs, report now. A **small** amount of blood in the first stool is expected; more than that is not.' },
          { t: 'Vasovagal bradycardia during colonoscopy', see: 'Heart rate and BP drop suddenly during the procedure.',
            why: 'Stretching the bowel with the scope and air **stimulates the vagus nerve**.',
            means: '**Atropine** is kept ready.' },
          { t: 'Severe pain and fever after ERCP', see: 'Hours to 2 days later: severe abdominal pain, fever, nausea and vomiting.',
            why: 'The contrast, instruments and cutting near the **pancreatic duct** can cause **pancreatitis**, and bile-duct work can introduce infection.',
            means: 'Teach the client to report severe pain or fever — **fever after ERCP can mean sepsis**.' }
        ],
        cards: ['45-colonoscopy-sigmoidoscopy-and-colorectal > After (Box 45.2)',
          { ref: '45-imaging-and-endoscopy-egd-ercp-capsule > After', as: 'ERCP — after' }]
      },
      ac: {
        gist: 'Every scope combines **sedatives that depress breathing**, a **throat spray that removes the gag reflex** (EGD, ERCP), instruments that can **perforate or cause bleeding**, and, for colonoscopy, a **bowel prep** that removes fluid and electrolytes.',
        terms: [
          { t: 'Bowel prep fluid loss', see: 'Watery diarrhea from the evening before; thirst, dizziness.',
            why: 'The prep floods the colon with fluid the gut can’t absorb, so water and **electrolytes** are lost with the stool.',
            means: 'Electrolyte or sports drinks replace losses; **no red, orange or purple** liquids (they look like blood on camera). A poor prep hides polyps.' },
          { t: 'Diabetes and the NPO period', see: 'A client on insulin or a sulfonylurea who can’t eat before the test.',
            why: 'Glucose-lowering drugs keep working without food.',
            means: 'Get **instructions** for diabetes drugs during the NPO period to prevent **hypoglycemia**.' },
          { t: 'Anticoagulants, aspirin and NSAIDs', see: 'Held for several days before, if the provider directs.',
            why: 'They impair clotting, which raises the risk of **bleeding** from biopsy and polyp sites.',
            means: 'Medication reconciliation before every scope — the provider decides what to stop.' }
        ],
        cards: [{ ref: '45-imaging-and-endoscopy-egd-ercp-capsule > What and why', as: 'Endoscopy — what and why' },
          { ref: '45-imaging-and-endoscopy-egd-ercp-capsule > What it can do', as: 'EGD — what it can do' },
          { ref: '45-imaging-and-endoscopy-egd-ercp-capsule > What it does', as: 'ERCP — what it does' }]
      },
      ph: {
        gist: 'During: **airway and breathing** (oversedation). After: **aspiration** until the gag reflex returns, then **perforation** and **bleeding**; after ERCP, **pancreatitis and sepsis**.',
        cards: []
      },
      gs: {
        gist: 'A safe **prep** (consent, NPO, medication plan, bowel prep), **continuous respiratory monitoring** during sedation, **airway protection** until the gag reflex returns, early recognition of complications, and discharge with **a driver and clear teaching**.',
        cards: [{ ref: '45-imaging-and-endoscopy-egd-ercp-capsule > Before', as: 'EGD — before' }, '45-colonoscopy-sigmoidoscopy-and-colorectal > Preparation',
          { ref: '45-imaging-and-endoscopy-egd-ercp-capsule > Before and during', as: 'ERCP — before and during' }]
      },
      ta: {
        gist: 'Before: **signed consent**, **NPO 6–8 hours**, medications per the provider, dentures out. During: watch **RR, depth, SpO₂ and capnography** — RR below 10 → **sternal rub**; atropine ready. After: VS **every 15–30 minutes** until alert, **side rails up**, **nothing by mouth until the gag reflex returns** (EGD, ERCP); after colonoscopy, **left side** to pass gas and fluids once flatus is passed; report severe pain, fever or bleeding; **driver home**, no driving for 12–18 hours.',
        cards: [{ ref: '45-imaging-and-endoscopy-egd-ercp-capsule > During', as: 'EGD — during' }, '45-colonoscopy-sigmoidoscopy-and-colorectal > During',
          '45-imaging-and-endoscopy-egd-ercp-capsule > After — prevent aspiration']
      },
      eo: {
        gist: 'Awake with RR and SpO₂ at baseline; **gag reflex back before** any oral intake; tolerating fluids; only mild cramping and gas, **no severe pain, fever or bleeding**; the client has a driver and can explain what to report.',
        cards: ['45-colonoscopy-sigmoidoscopy-and-colorectal > Health literacy']
      }
    }
  }
];
