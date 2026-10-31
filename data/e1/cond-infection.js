// Exam 1 · Think it through · Infection (Ignatavicius ch 19). Our own words.
(window.MH_CONDS = window.MH_CONDS || []).push(
{
  id: 'cdiff', group: 'Infection', name: 'Clostridioides difficile infection', week: 2,
  short: 'Day 6 of clindamycin: eight watery stools today, cramping, WBC 18,000.',
  patient: '78-year-old woman in a long-term care facility, admitted with a hip wound infection, now on day 6 of clindamycin. She also takes omeprazole. Today she has had 8 watery, foul-smelling stools, crampy lower abdominal pain and a temperature of 38.3 °C. HR 106, BP 98/60; her mouth is dry. WBC 18,000/mm³; creatinine up to 1.6 mg/dL.',
  report: [
    'I’m calling about Mrs. W., 78, with suspected C. difficile infection.',
    'She is on day 6 of clindamycin for a wound infection and also takes omeprazole.',
    'She has had 8 watery stools today with cramping, temp 38.3, HR 106, BP 98/60, dry mucous membranes. WBC 18,000 and creatinine 1.6. I sent a stool sample, placed her on Contact Precautions with a dedicated commode, and have held her stool softener.',
    'Please review whether the clindamycin can be stopped or changed and the omeprazole reviewed, order oral vancomycin or fidaxomicin, and IV fluids with electrolytes. Her abdomen is mildly distended, so I’m watching for toxic megacolon.'
  ],
  steps: {
    rc: {
      gist: '**C. difficile** is a spore-forming bacterium. **Antibiotics** (especially **clindamycin**, **fluoroquinolones**, cephalosporins and broad-spectrum drugs) wipe out normal gut flora so C. diff can overgrow and release **toxins** that inflame the colon. Other risks: **older age**, hospital or long-term care stays, **PPIs**, a weak immune system. Cues: **3 or more watery stools in 24 hours**, foul odor, abdominal cramps, fever, **high WBC**, dehydration. Severe disease: **pseudomembranous colitis**, **toxic megacolon** (a distended, tender abdomen with fewer stools), perforation, sepsis.',
      terms: [
        { t: 'Spores', see: 'They survive for **months** on bed rails, commodes, call lights and hands.', why: 'Spores resist drying and **alcohol**.', means: '**Wash hands with soap and water** (alcohol hand rub doesn’t kill spores); clean with a **sporicidal (bleach) disinfectant**; use **dedicated equipment**.' },
        { t: 'Stool testing', see: 'Only **unformed (liquid)** stool is tested.', why: 'Many people carry C. diff without disease; testing formed stool finds carriers, not infection.', means: 'Send the sample promptly; don’t test for cure after treatment.' }
      ]
    },
    ac: {
      gist: 'Eight watery stools, cramping, fever and a **WBC of 18,000** on **day 6 of clindamycin** in an older woman on a **PPI**, with low BP and rising creatinine = **C. difficile infection** with **dehydration and acute kidney injury**.'
    },
    ph: {
      gist: 'Priority: **deficient fluid volume** (diarrhea, low BP, rising creatinine) and **infection** (treat it and stop it spreading). Then **risk for impaired skin integrity** (perineal skin) and electrolyte imbalance (low potassium).'
    },
    gs: {
      gist: 'BP and HR normalize, urine output is adequate and creatinine falls; stools drop to fewer than 3 a day and become formed; no spread to other patients; perineal skin stays intact.'
    },
    ta: {
      gist: '**Contact Precautions** (gown and gloves on entering the room; private room or cohorting; dedicated equipment such as a stethoscope and BP cuff), **soap-and-water hand hygiene**, and **bleach cleaning**. Stop the triggering antibiotic if possible, as ordered. Give **oral vancomycin** or **fidaxomicin** (metronidazole is no longer first choice). **Avoid antidiarrheals** (loperamide): they keep toxins in the colon. Replace fluids and electrolytes (potassium). Perineal care and barrier cream. Watch for toxic megacolon. **Fecal microbiota transplantation (FMT)** is used for **recurrent** infection.',
      cards: [
        { h: 'Teaching and prevention', b: ['**Antimicrobial stewardship**: take antibiotics only when needed and exactly as prescribed.', 'Visitors wash with soap and water and wear gowns and gloves.', 'At home: clean the bathroom with a bleach product; wash hands well; recurrence is common in the first 2 months, so report new diarrhea.'] }
      ]
    },
    eo: {
      gist: 'Count and describe stools, check I&O, daily weight, BP and HR, creatinine and potassium, temperature and WBC, abdominal girth and tenderness, and perineal skin.'
    }
  }
},
{
  id: 'mrsa', group: 'Infection', name: 'MRSA wound infection progressing to sepsis', week: 2,
  short: 'Post-op day 4: red, hot incision with pus; now 39 °C, HR 118, confused.',
  patient: '64-year-old man, post-op day 4 after a colectomy, with diabetes. His incision is red, hot and swollen, with thick yellow drainage; a wound culture grew MRSA. This evening his temperature is 39.1 °C, HR 118, RR 24, BP 92/54, and he is newly confused. WBC 19,500 with 14% bands; lactate 3.2 mmol/L.',
  report: [
    'I’m calling a rapid response for Mr. B., 64, post-op day 4 after colectomy. I suspect sepsis from an MRSA wound infection.',
    'He has diabetes; the wound culture grew MRSA yesterday. He is on Contact Precautions.',
    'Temp 39.1, HR 118, RR 24, BP 92/54, new confusion. WBC 19,500 with a left shift, lactate 3.2. The incision is red and draining pus.',
    'He needs IV vancomycin now; I’ve drawn blood cultures. Please order a 30 mL/kg fluid bolus, a repeat lactate and a surgical consult for the wound. Can we move him to a higher level of care?'
  ],
  steps: {
    rc: {
      gist: 'Know the signs of a **local** infection (redness, warmth, swelling, pain, **purulent drainage**, loss of function) and the signs it has become **systemic** (fever or **hypothermia**, chills, **tachycardia**, **tachypnea**, low BP, **new confusion**, low urine output, mottled skin, high **lactate**). **MRSA** (methicillin-resistant *Staphylococcus aureus*) resists most beta-lactam antibiotics. Older adults may have **no fever**; **confusion or a fall** can be the first sign.',
      terms: [
        { t: 'Left shift', see: 'More **bands** (immature neutrophils) than normal on the differential (normal bands about 0–5%).', why: 'The marrow releases young neutrophils early when the body is fighting a serious **bacterial** infection.', means: 'Supports acute bacterial infection; trend it with the WBC.' },
        { t: 'Lactate', see: 'Above 2 mmol/L is abnormal; 4 or more means severe hypoperfusion.', why: 'Poorly perfused tissues switch to anaerobic metabolism.', means: 'Give fluids; repeat the lactate to see if perfusion improves.' }
      ],
      cards: [
        { h: 'Other resistant organisms', b: ['**VRE** (vancomycin-resistant *Enterococcus*): treated with linezolid or daptomycin.', '**CRE** (carbapenem-resistant Enterobacterales): very hard to treat, high death rate.', 'All are spread mainly by **hands and contact**; use **Contact Precautions** and strict hand hygiene.'] }
      ]
    },
    ac: {
      gist: 'An MRSA-infected wound plus fever, **HR 118, RR 24, BP 92/54, new confusion**, a left shift and **lactate 3.2** = **sepsis** from the wound, at risk of **septic shock**.'
    },
    ph: {
      gist: 'Priority: **infection and ineffective tissue perfusion** (sepsis). Then **risk for injury** (confusion), impaired tissue integrity at the wound, and preventing spread to others.'
    },
    gs: {
      gist: 'Within hours: MAP is **65 or above**, HR and RR fall, lactate clears, urine output is at least 0.5 mL/kg/hour and mental status returns to normal. Over days: the wound improves and no one else acquires MRSA.'
    },
    ta: {
      gist: '**Sepsis bundle**: blood cultures **before** antibiotics, then **IV antibiotics within 1 hour** (vancomycin for MRSA), **30 mL/kg crystalloid** for hypotension or lactate of 4 or more, repeat lactate, vasopressors if BP doesn’t respond. Monitor VS and urine output often. **Contact Precautions** (gown and gloves, dedicated equipment). Wound care as ordered (the surgeon may open and drain it). Vancomycin: monitor **trough levels** and kidney function; infuse **slowly** (at least 60 minutes) to prevent infusion reaction (flushing, itching, low BP).',
      cards: [
        { h: 'Preventing spread', b: ['**Hand hygiene** before and after every patient contact is the single most effective measure.', 'Chlorhexidine bathing and nasal decolonization (mupirocin) are used in some settings.', 'Clean shared equipment between patients; cover draining wounds.'] }
      ]
    },
    eo: {
      gist: 'Track MAP, HR, RR, temperature, mental status, urine output and repeat lactate; review culture and sensitivity results; trend WBC and the wound’s appearance and drainage; check vancomycin levels and creatinine.'
    }
  }
}
);
