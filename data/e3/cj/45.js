// Think it through — Chapter 45 — assessment of the GI system. Format: see data/e3/cj/README.md.
module.exports = [
  {
    id: 'gi-scope', sys: 'Digestion & elimination', name: 'Before and after a GI scope (EGD, ERCP, colonoscopy)',
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
