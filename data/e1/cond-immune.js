// Exam 1 · Think it through · Allergy and immunity conditions (Ignatavicius ch 17). Our own words.
(window.MH_CONDS = window.MH_CONDS || []).push(
{
  id: 'anaphylaxis', group: 'Immunity and allergy', name: 'Anaphylaxis', week: 2,
  short: 'Ten minutes into IV ceftriaxone: itchy, hoarse, wheezing, BP 82/50.',
  patient: '45-year-old woman admitted with pneumonia. Ten minutes after IV ceftriaxone is started she says her skin is itchy and “my throat feels tight.” She has hives on her chest, a hoarse voice, audible wheezing and swollen lips. HR 128, BP 82/50, RR 28, SpO₂ 89%. She takes metoprolol for hypertension. She is anxious and says, “Something terrible is happening.”',
  report: [
    'I’m calling a rapid response for Ms. A. in room 12. I suspect anaphylaxis to IV ceftriaxone.',
    'She is 45, admitted with pneumonia; she has no known drug allergies and takes metoprolol.',
    'Ten minutes into the infusion she developed hives, lip swelling, hoarseness and wheezing. BP 82/50, HR 128, RR 28, SpO₂ 89%. I stopped the infusion and kept the IV line open, gave epinephrine 0.5 mg IM in the thigh per protocol, put her on high-flow oxygen and am running normal saline.',
    'I need you here now. Please be ready to manage her airway and order a second epinephrine dose, more fluids, an albuterol neb and diphenhydramine and a steroid. Her beta blocker may blunt the epinephrine, so glucagon may be needed.'
  ],
  steps: {
    rc: {
      gist: 'Anaphylaxis is the most severe **type I (IgE-mediated) hypersensitivity** reaction: mast cells and basophils release **histamine** and other mediators all over the body within **minutes** of exposure (drugs such as antibiotics, contrast dye, latex, insect stings, foods such as peanuts and shellfish). Early cues: a feeling of **“impending doom,”** anxiety, itching, flushing, **hives**, a lump in the throat. Then **airway** signs (hoarseness, **stridor**, wheezing, swelling of lips, tongue, throat) and **circulatory** signs (hypotension, tachycardia, weak pulse, dizziness), plus GI cramps, vomiting and diarrhea.',
      terms: [
        { t: 'Stridor and hoarseness', see: 'A high-pitched sound on breathing in; her voice changes.', why: '**Laryngeal edema**: histamine makes capillaries leak, and the upper airway swells.', means: 'The airway is closing. It is the most urgent finding; act now.' },
        { t: 'Hypotension and tachycardia', see: 'BP falls; HR climbs; skin may be flushed, then pale and cool.', why: 'Massive **vasodilation** and fluid leaking out of vessels = distributive shock.', means: 'Epinephrine, a fluid bolus, and lie her flat with legs raised if breathing allows.' }
      ],
      cards: [
        { h: 'Who is at higher risk of a bad outcome', b: ['People on **beta blockers** (epinephrine works less well; **glucagon** can help), and on ACE inhibitors.', 'People with asthma or heart disease, and older adults.', 'A **biphasic** reaction: symptoms can come back hours later without new exposure.'] }
      ]
    },
    ac: {
      gist: 'Hives, lip swelling, hoarseness, wheezing, **hypotension** and hypoxemia within minutes of a new IV antibiotic = **anaphylaxis** with **airway compromise and shock**. It can kill within minutes.'
    },
    ph: {
      gist: 'Priority: **airway** (ineffective airway clearance from laryngeal edema and bronchospasm), then **breathing** (impaired gas exchange), then **circulation** (decreased cardiac output from shock). Anxiety comes later.'
    },
    gs: {
      gist: 'Within minutes: the airway stays open (no stridor), SpO₂ is 95% or higher, SBP is above 90 with HR falling, hives and swelling fade. Later: no biphasic recurrence, and she can name the drug she must avoid and how to report it.'
    },
    ta: {
      gist: '**Stop the trigger** (stop the infusion but keep the IV access). Call the rapid response team. Assess the airway. Give **epinephrine IM first**: 0.3–0.5 mg of 1 mg/mL in the **anterolateral thigh**; repeat every 5–15 minutes as needed. High-flow **oxygen** (100% by non-rebreather); be ready for intubation or an emergency airway. Position: **lying flat with legs raised** for shock, or **sitting up** if she struggles to breathe. **IV normal saline** bolus. Then the add-on drugs: **diphenhydramine** (H1 blocker), an H2 blocker, inhaled **albuterol** for wheezing, and **corticosteroids** (to prevent a late reaction).',
      cards: [
        { h: 'Why epinephrine comes first', b: ['It **constricts vessels** (raises BP, reduces swelling), **opens the airways** (beta-2) and stabilizes mast cells.', 'Antihistamines and steroids **don’t** reverse airway swelling or shock; they are add-ons, never a substitute.'] },
        { h: 'Teaching for home', b: ['Avoid the allergen; tell every provider; wear a **medical alert** bracelet.', 'Carry **two** epinephrine auto-injectors at all times; use one at the **first sign** of a reaction, into the outer thigh (it works through clothing), then **call 911**: a second dose or care may be needed.', 'Check the expiration date; keep at room temperature.'] }
      ]
    },
    eo: {
      gist: 'Reassess airway sounds, SpO₂, BP and HR every few minutes after each dose. Watch her for several hours (and up to 24) for a **biphasic** reaction. Document the allergy and update her allergy band.'
    }
  }
},
{
  id: 'angio', group: 'Immunity and allergy', name: 'Angioedema from an ACE inhibitor', week: 2,
  short: 'On lisinopril for 3 years. Woke with a huge lower lip and swollen tongue; no hives.',
  patient: '58-year-old Black man who has taken lisinopril for 3 years. He woke up with a swollen lower lip and tongue that has grown over 2 hours. He is drooling a little and his voice is muffled. No hives, no itching, no new foods or drugs. RR 22, SpO₂ 95%, BP 150/92.',
  report: [
    'I’m calling about Mr. J. in ED bed 3 with rapidly progressing lip and tongue swelling.',
    'He has taken lisinopril for 3 years with no prior reaction. No new foods, drugs or stings.',
    'Swelling started 2 hours ago and is still growing; he is drooling with a muffled voice. No urticaria. RR 22, SpO₂ 95%. He is sitting upright with oxygen and suction at the bedside; I am holding his lisinopril.',
    'I’m concerned about airway compromise. Please come now to assess his airway, and have anesthesia ready for a possible difficult intubation. Please also review his antihypertensive and order drugs per the angioedema protocol.'
  ],
  steps: {
    rc: {
      gist: 'Angioedema is **deep swelling** of the skin and mucous membranes, usually the **lips, tongue, face, eyelids, throat**, and sometimes the bowel. **ACE inhibitors** (the “-prils”) are a leading cause: they block the breakdown of **bradykinin**, which builds up and makes vessels leak. It can start **any time**, even after **years** on the drug, and is more common in **Black patients**. ACE-inhibitor angioedema usually has **no hives or itching** (not histamine). Watch for airway signs: **drooling**, trouble swallowing, a muffled or hoarse voice, stridor.',
      terms: [
        { t: 'Bradykinin vs histamine swelling', see: 'Swelling without hives or itching, slower to build and slower to go away.', why: 'Bradykinin, not histamine, causes it, so **antihistamines and epinephrine help less**.', means: 'The airway is the priority; stop the drug; some patients need intubation (often with fiberoptic tools).' }
      ]
    },
    ac: {
      gist: 'Growing lip and tongue swelling with drooling and a muffled voice in a man on **lisinopril**, with no hives = **ACE-inhibitor angioedema** with risk of **airway obstruction**.'
    },
    ph: {
      gist: 'Priority: **risk for airway obstruction** (ineffective airway clearance). Then anxiety, and teaching to prevent recurrence.'
    },
    gs: {
      gist: 'The airway stays open and SpO₂ stays 95% or above; the swelling stops growing and then goes down over hours to days; he never takes an ACE inhibitor again and knows to tell every provider.'
    },
    ta: {
      gist: 'Assess the airway continuously and keep him **sitting upright**; give oxygen and keep **suction and intubation (or emergency airway) equipment** ready, and call the provider and anesthesia early (intubation gets harder as swelling grows). **Stop the ACE inhibitor.** Give drugs as ordered: diphenhydramine, corticosteroids and epinephrine are often tried; specific options for bradykinin swelling (such as icatibant or C1 esterase inhibitor) may be used. Stay with him.',
      cards: [
        { h: 'Teaching', b: ['Never take **any** ACE inhibitor again (all “-prils”); record it as an **allergy** in the chart.', 'Use **ARBs** cautiously (a small cross-risk), only if the provider decides.', 'Seek emergency care for any lip, tongue or throat swelling.'] }
      ]
    },
    eo: {
      gist: 'Recheck voice, swallowing, drooling, stridor and SpO₂ often until the swelling is clearly going down. Confirm the allergy is charted and his new BP drug is not an ACE inhibitor.'
    }
  }
},
{
  id: 'sle', group: 'Immunity and allergy', name: 'Systemic lupus erythematosus (SLE)', week: 2,
  short: 'Butterfly rash, aching joints, fatigue, and now swollen ankles and foamy urine.',
  patient: '29-year-old woman diagnosed with SLE 2 years ago, on hydroxychloroquine. After a beach vacation she has a red rash across her cheeks and nose, painful swollen hand joints, extreme fatigue and a low-grade fever. Today her ankles are puffy, her urine is foamy, BP is 148/94 and she has gained 2 kg in a week. She asks whether she can get pregnant.',
  report: [
    'I’m calling about Ms. L., 29, with known lupus, now with signs of a flare and possible kidney involvement.',
    'She was diagnosed 2 years ago, takes hydroxychloroquine and had heavy sun exposure last week.',
    'She has a malar rash, polyarthritis, fatigue and a temp of 37.9. New ankle edema, foamy urine, a 2-kg weight gain and BP 148/94. Urinalysis shows protein and red cells; creatinine is up from her baseline.',
    'I’m worried about lupus nephritis. Please review her for steroids and further kidney workup, possibly a nephrology referral. She also wants pregnancy counseling.'
  ],
  steps: {
    rc: {
      gist: 'SLE is a **chronic autoimmune** disease: the body makes **autoantibodies** against its own cells, and **immune complexes** deposit in tissues (a **type III** reaction), causing inflammation in the skin, joints, kidneys, heart, lungs, blood and brain. It is most common in **women of childbearing age** and more common and severe in **Black, Hispanic, Asian and Indigenous** women. It **flares and remits**. Look for the **butterfly (malar) rash**, **photosensitivity**, **joint pain**, fatigue, fever, mouth ulcers, hair loss, **Raynaud’s**, and signs of organ damage.',
      terms: [
        { t: 'Lupus nephritis', see: 'Swelling, foamy urine (protein), blood in urine, rising BP and creatinine, weight gain.', why: 'Immune complexes inflame the glomeruli.', means: 'A **leading cause of death** in SLE (kidney failure). Report it; track daily weight, I&O, BP and labs.' },
        { t: 'Serositis', see: 'Sharp chest pain worse when lying down or breathing in; a friction rub.', why: 'Inflammation of the pericardium (pericarditis) or pleura.', means: 'Report new chest pain; heart disease is the other major cause of death.' }
      ],
      cards: [
        { h: 'Labs', b: ['**ANA** positive in almost everyone (but not specific); **anti-dsDNA** and **anti-Smith** antibodies are more specific.', 'Low complement levels, raised ESR during flares; low blood counts (anemia, leukopenia, thrombocytopenia).', 'Urinalysis (protein, cells), creatinine.'] }
      ]
    },
    ac: {
      gist: 'Malar rash, arthritis, fever and fatigue after **sun exposure** = an SLE **flare**; new **edema, proteinuria, hypertension and rising creatinine** = probable **lupus nephritis**.'
    },
    ph: {
      gist: 'Priority: **risk for kidney injury** (and fluid excess). Then **acute pain** and fatigue, **risk for infection** (the disease and its drugs suppress immunity), impaired skin integrity, and body image.'
    },
    gs: {
      gist: 'Kidney function stabilizes (protein falls, BP and weight controlled); joint pain and fatigue are manageable; she avoids sun and infection; she plans pregnancy with her team when the disease has been **quiet for at least 6 months**.'
    },
    ta: {
      gist: 'Give drugs as ordered and teach them: **hydroxychloroquine** (an antimalarial and the backbone of treatment; needs regular **eye exams** for retinal damage), **NSAIDs** for joint pain, **corticosteroids** for flares, and immunosuppressants (methotrexate, azathioprine, mycophenolate, cyclophosphamide, belimumab) for organ involvement. Balance rest and activity; protect the skin; prevent infection.',
      cards: [
        { h: 'Teaching', b: ['**Avoid sun**: protective clothing, broad-spectrum sunscreen (SPF 30+), avoid midday sun (UV triggers flares).', 'Report **fever** or other signs of infection right away (immunosuppressants mask and raise risk); hand hygiene; vaccines (no live vaccines on immunosuppressants).', 'Don’t stop steroids suddenly (adrenal crisis).', 'Pregnancy is high-risk: plan it when the disease is quiet; some drugs (methotrexate, mycophenolate) cause birth defects.', 'Mild soap, no harsh skin products; cover mouth ulcers with gentle oral care.'] }
      ]
    },
    eo: {
      gist: 'Track weight, BP, edema, urine protein and creatinine, joint pain and fatigue scores, skin, temperature and signs of infection. Check that she knows sun protection and the warning signs to report.'
    }
  }
},
{
  id: 'hiv', group: 'Immunity and allergy', name: 'HIV and AIDS', week: 2,
  short: 'CD4 140, stopped his pills months ago; dry cough, fever and breathless walking to the bathroom.',
  patient: '36-year-old man with HIV who stopped his antiretroviral therapy 8 months ago after losing his job and insurance. For 3 weeks he has had a dry cough, fever and shortness of breath that gets worse on exertion. He has white patches in his mouth and has lost 7 kg. SpO₂ 88% on room air after walking, RR 26. His CD4 count is 140 cells/mm³ and his viral load is high.',
  report: [
    'I’m calling about Mr. T., 36, with HIV off treatment, admitted with hypoxemia.',
    'He stopped his antiretrovirals 8 months ago due to cost. His CD4 is 140 and his viral load is high.',
    'Three weeks of dry cough, fever and exertional dyspnea; SpO₂ 88% after walking, RR 26. He has oral thrush and a 7-kg weight loss. Chest x-ray shows bilateral diffuse infiltrates.',
    'I’m concerned about Pneumocystis pneumonia. Please consider sputum testing and TMP-SMX with steroids, and treatment for his thrush. I’d like social work to help him restart therapy affordably, and a dietitian consult.'
  ],
  steps: {
    rc: {
      gist: 'HIV is a **retrovirus** that infects and destroys **CD4+ T cells** (helper T cells), the coordinators of immunity. It spreads through **blood, semen, vaginal fluid and breast milk** (sex, shared needles, birth or breastfeeding, rarely needlesticks), **not** saliva, tears, sweat, hugging or sharing dishes. Stages: **acute HIV infection** (flu-like illness 2–4 weeks after infection; very high viral load and very infectious), **chronic HIV** (few symptoms for years), and **AIDS**: **CD4 below 200 cells/mm³** or an **AIDS-defining** opportunistic infection or cancer. Look for weight loss, thrush, fever, diarrhea, night sweats, cough and changes in thinking.',
      terms: [
        { t: 'CD4 count and viral load', see: 'CD4 is normally about 500–1,500 cells/mm³; viral load is the amount of HIV RNA in the blood.', why: 'The CD4 count shows how much immunity is left; viral load shows how fast HIV is multiplying and how well treatment works.', means: 'Treatment aims for an **undetectable** viral load; falling CD4 means rising risk of opportunistic infections.' },
        { t: 'Opportunistic infection', see: 'PJP pneumonia, thrush, CMV retinitis (blurred vision, floaters), toxoplasmosis (headache, confusion, seizures), MAC, cryptococcal meningitis, TB.', why: 'Organisms a healthy immune system controls cause disease when CD4 cells are few.', means: '**Prophylaxis** by CD4 level: **TMP-SMX below 200** for PJP (it also covers toxoplasmosis below about 100).' }
      ],
      cards: [
        { h: 'AIDS-related cancers and other problems', b: ['**Kaposi sarcoma** (purple skin or mouth lesions), lymphomas, cervical cancer.', '**Wasting syndrome**, chronic diarrhea, HIV-associated neurocognitive disorder.'] }
      ]
    },
    ac: {
      gist: 'CD4 **140**, off treatment, with dry cough, fever, **exertional hypoxemia**, diffuse infiltrates and thrush = **AIDS** with probable **Pneumocystis jirovecii pneumonia (PJP)**.'
    },
    ph: {
      gist: 'Priority: **impaired gas exchange** (PJP). Then **risk for infection** (other opportunistic infections), **imbalanced nutrition**, activity intolerance, and the barriers that stopped his treatment (cost, stigma, depression).'
    },
    gs: {
      gist: 'SpO₂ is 92% or above at rest and with activity; fever resolves; he restarts **cART** with a plan to take it daily, reaching an **undetectable viral load** within months; he regains weight and has affordable access to his drugs.'
    },
    ta: {
      gist: 'Oxygen, rest periods and position for breathing; treat PJP (**TMP-SMX**, with corticosteroids for severe hypoxemia). Use **Standard Precautions** (HIV needs no special isolation). Restart **combination antiretroviral therapy (cART)**: several drugs from different classes, taken **every day on schedule** to prevent resistance. Prevent infection: hand hygiene, food safety (no raw eggs, meat or seafood; wash produce), avoid cat litter and bird cages, avoid sick contacts. Offer nutrition support, mouth care, and nonjudgmental support for stigma and depression.',
      cards: [
        { h: 'Prevention you should know', b: ['**PrEP** (pre-exposure prophylaxis): HIV-negative people at risk take a daily pill (or a long-acting injection); they need HIV testing every few months.', '**PEP** (post-exposure prophylaxis): start **as soon as possible, within 72 hours**, and take for **28 days**. For a needlestick: wash with soap and water, **report immediately**, get tested.', '**Treatment as prevention (TasP)**: a durably **undetectable** viral load means HIV is **not transmitted sexually** (“undetectable = untransmittable”).', 'Condoms, never sharing needles, testing at least once for everyone 13–64.'] },
        { h: 'cART side effects to teach', b: ['Nausea, diarrhea, fatigue, rash (report a severe rash), high lipids and glucose, liver and kidney effects.', 'Many **drug interactions** (including St. John’s wort): check every new drug and supplement.', 'Missed doses let HIV become **resistant**.'] }
      ]
    },
    eo: {
      gist: 'Track SpO₂, RR and temperature, weight, viral load (should become undetectable) and CD4 (should rise), side effects, adherence, and whether cost and support barriers were solved before discharge.'
    }
  }
}
);
