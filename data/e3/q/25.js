// Final Mastery test questions added for Ch 25, Infectious respiratory conditions. The test loads Exam 2's questions for
// this chapter first (data/ngn-22-25.js, data/recall-24-25.js); these are appended, so Exam 2's ids stay put.
// Written from the notes (Exam 2's, imported by tools/e3-import.js) and the chapter, for the topics Exam 2 tested least.
// Format: see data/e3/q/45.js and data/e3/q/more.js. Each item carries its own labels: cj (clinical judgment step),
// cn (Client Needs) and st (strategies), keys in ncjmm.js.
window.NGN_EXTRA = window.NGN_EXTRA || {}; window.RECALL_EXTRA = window.RECALL_EXTRA || {};
window.EXPLAIN_CARDS = window.EXPLAIN_CARDS || {}; window.EXPLAIN_CH = window.EXPLAIN_CH || {}; window.EXTRA_Q = window.EXTRA_Q || {};
(function () {
  const N = window.NGN_EXTRA['25'] = window.NGN_EXTRA['25'] || [];
  const R = window.RECALL_EXTRA['25'] = window.RECALL_EXTRA['25'] || {};
  ['nclex', 'rq', 'mc'].forEach(k => { R[k] = R[k] || []; });

  N.push(
    { f: 'order', t: 'Taking off PPE after a COVID-19 room', cj: 'ta', cn: 'safe', st: ['safety', 'np'],
      q: 'The nurse is finishing care for a client with COVID-19 and is standing by the door inside the room. Place the steps for removing personal protective equipment in order.',
      o: ['Remove the gloves without touching their outside', 'Remove the gown, touching only the inside and rolling it away from the body', 'Leave the client’s room', 'Remove the face shield or goggles by the headband or earpieces', 'Remove the N95 respirator', 'Wash the hands'], a: [0, 1, 2, 3, 4, 5],
      r: ['First: the gloves are the most contaminated item.', 'Second: the gown, rolled inside out, while still inside.', 'Third: everything else comes off outside the room.', 'Fourth: eye protection, touching only the band.', 'Fifth: the respirator protects the airway until you are out of the contaminated air.', 'Last: wash at once — and any time the hands become contaminated between steps.'],
      ask: 'Which item is dirtiest, and which one protects your airway?',
      cues: ['Gloves → gown inside the room', 'Exit', 'Eye protection → respirator outside', 'Hand hygiene'],
      phys: 'The outer surfaces of the gloves and gown carry the most virus; the respirator stays on until the wearer has left the air the client has been breathing out.',
      rule: 'Box 25.5. Donning outside the room: hand hygiene, gown, respirator (snug below the chin), face shield or goggles, gloves over the gown cuffs. Doffing: gloves, gown (inside the room by the door or in the anteroom), exit, eye protection, respirator (only outside the room), wash hands. Eyeglasses aren’t eye protection.' },

    { f: 'sata', t: 'COVID-19 warning signs at home', cj: 'rc', cn: 'adapt', st: ['abnormal', 'abc'],
      q: 'A client with COVID-19 is recovering at home. Which findings should the nurse teach the client to treat as emergencies? Select all that apply.',
      o: ['Trouble breathing', 'Chest pain or pressure that won’t go away', 'New confusion', 'Trouble waking up or staying awake', 'Bluish lips or face', 'Loss of taste and smell', 'Muscle aches and a low-grade fever'], a: [0, 1, 2, 3, 4],
      r: ['Correct. An indication for emergency care.', 'Correct. Persistent chest pain or pressure.', 'Correct. New confusion can mean hypoxia.', 'Correct. Inability to wake or stay awake.', 'Correct. Cyanosis.', 'Incorrect. A common symptom, not an emergency.', 'Incorrect. Common symptoms; acetaminophen is preferred.'],
      ask: 'Which findings mean oxygen isn’t reaching the brain and heart?',
      cues: ['Trouble breathing', 'Chest pain', 'Confusion', 'Can’t stay awake', 'Bluish lips'],
      phys: 'Worsening COVID-19 lung inflammation can progress to ARDS within 2 days; a clotting tendency adds pulmonary embolism and heart injury. Hypoxia shows first as confusion and drowsiness.',
      rule: 'Box 25.3, emergency indications: trouble breathing, persistent chest pain or pressure, new confusion, inability to wake or stay awake, bluish lips or face. Dyspnea at rest or increasing dyspnea signals progression; also report edema, hemoptysis and orthopnea.' },

    { f: 'matrix', t: 'Which COVID-19 test?', cj: 'ac', cn: 'rrp', st: ['alike', 'subject'],
      q: 'For each description, indicate the COVID-19 test it fits.',
      cols: ['NAAT (RT-PCR)', 'Antigen test', 'Antibody test'],
      rows: [{ t: 'The preferred test to confirm the diagnosis; results may take days', a: 0, r: 'A nucleic acid amplification test, usually RT-PCR, run in a laboratory.' },
        { t: 'Collected by someone other than the client', a: 0, r: 'The laboratory NAAT sample is taken by staff.' },
        { t: 'A rapid test the client can do at home', a: 1, r: 'Home antigen tests are widely available and fast.' },
        { t: 'Shows that the client had the infection in the past', a: 2, r: 'Serology finds antibodies in the blood.' },
        { t: 'Isn’t used to diagnose a current infection', a: 2, r: 'Antibodies take time to form and stay after recovery.' }],
      ask: 'Is the test looking for the virus or for the body’s response to it?',
      cues: ['Viral tests: NAAT, antigen', 'Antibody = past infection'],
      phys: 'A NAAT copies the virus’s genetic material until it can be detected; an antigen test finds viral proteins; an antibody test finds the immune response, which lags behind the infection.',
      rule: 'NAAT (RT-PCR) is the preferred confirmation (lab, collected by someone else, days); rapid point-of-care antigen tests and some NAATs take minutes; home antigen tests are common. NAAT and antigen are viral tests (current infection); antibody (serology) tests indicate past infection. Samples are usually nasal swabs, sometimes saliva.' },

    { f: 'selectn', t: 'Who is at risk for severe COVID-19?', cj: 'ph', cn: 'hpm', st: ['client', 'actual'],
      q: 'The nurse at a clinic is reviewing clients who have just tested positive for COVID-19. Select the 4 clients at higher risk for severe disease.',
      o: ['A 70-year-old who is otherwise healthy', 'A 28-year-old with cystic fibrosis', 'A 45-year-old who takes immunosuppressants after a kidney transplant', 'A 52-year-old former smoker with a BMI of 31', 'A 30-year-old who runs marathons', 'A 40-year-old with seasonal allergies', 'A 25-year-old who had COVID-19 a year ago'], a: [0, 1, 2, 3],
      r: ['Correct. Age 65 or older.', 'Correct. Cystic fibrosis is on the list.', 'Correct. Immunosuppressive drugs raise the risk.', 'Correct. Former smoking and obesity (BMI 30 or more) each count.', 'Incorrect. Fitness isn’t a risk factor.', 'Incorrect. Seasonal allergies aren’t on the list.', 'Incorrect. A past infection doesn’t raise the risk.'],
      ask: 'Which clients match Box 25.2?',
      cues: ['65 or older', 'Chronic lung disease, CF', 'Immunosuppression', 'Smoking, obesity'],
      phys: 'Older age, chronic organ disease and weakened immunity leave less reserve to withstand the inflammation, clotting and lung injury the virus causes.',
      rule: 'Box 25.2: age 65+, cancer, cerebrovascular disease, chronic kidney, lung or liver disease, cystic fibrosis, diabetes (type 1 and 2), heart conditions, disabilities, HIV, dementia, mental health disorders, obesity and overweight, current or former smoking, tuberculosis, immunosuppressive drugs. These clients are the ones offered COVID-19–specific therapy (nirmatrelvir-ritonavir preferred).' },

    { f: 'sata', t: 'Isolating at home with COVID-19', cj: 'ta', cn: 'safe', st: ['safety'],
      q: 'A client with COVID-19 will isolate at home with their family. Which instructions should the nurse include? Select all that apply.',
      o: ['Stay in a separate room, away from people and pets', 'Use a separate bathroom if you can', 'Wear a well-fitting mask, and have the people around you wear one too', 'Limit who cares for you, ideally to people who are vaccinated', 'Clean and disinfect surfaces that are touched often', 'You can share dishes as long as they are rinsed', 'Your dog can sleep in your bed while you recover'], a: [0, 1, 2, 3, 4],
      r: ['Correct. Separate from people and animals; stay 6 feet apart if you can’t.', 'Correct. When possible.', 'Correct. Masks on the client and the people nearby.', 'Correct. Fewer, vaccinated caregivers.', 'Correct. Frequently touched surfaces spread the virus.', 'Incorrect. Don’t share dishes, utensils or bedding; wash them thoroughly.', 'Incorrect. Separate from animals too.'],
      ask: 'How does the virus reach the rest of the household?',
      cues: ['Separate room and bathroom', 'Masks', 'Few caregivers', 'No shared dishes or bedding'],
      phys: 'SARS-CoV-2 spreads person to person through the air and on shared surfaces, so distance, masks and not sharing items break the chain.',
      rule: 'Box 25.4: stay home; separate from people and animals (6 feet if you can’t); well-fitting masks on the client and those nearby; separate bathroom when possible; limited, preferably vaccinated caregivers; don’t share dishes, utensils or bedding; disinfect frequently touched surfaces.' }
  );

  R.nclex.push(
    { t: 'After the COVID-19 vaccine', cj: 'ta', cn: 'hpm', st: ['pos'],
      q: 'A client asks what to expect after getting a COVID-19 vaccine. Which statement by the nurse is accurate?',
      o: ['“A sore arm, headache, muscle aches, chills or a low fever can happen; they mean your body is building protection.”', '“A fever afterward means the vaccine gave you COVID-19.”', '“You can leave right after the shot.”', '“If you have side effects, you shouldn’t get any more doses.”'], a: [0],
      r: ['Correct. These are the expected effects of an immune response.', 'Incorrect. Fever is part of the immune response, not infection.', 'Incorrect. Clients are observed for at least 15 minutes after each dose (rare anaphylaxis).', 'Incorrect. Expected side effects aren’t a reason to stop.'],
      ask: 'Which effects are expected, and which are rare dangers?', cues: ['Expected: arm, headache, aches, fever', 'Rare: anaphylaxis, myocarditis'],
      phys: 'The vaccine teaches the immune system to recognize a viral protein; the inflammation of that response causes the soreness, fever and aches.',
      rule: 'Expected: pain, redness or swelling at the site, headache, muscle pain, chills, fever, fatigue, nausea. Rare: anaphylaxis and myocarditis — observe at least 15 minutes after each dose. Box 25.1: wait until isolation is complete before a dose; vaccines lower the risk of severe illness, hospitalization and death.' },
    { t: 'An oxygen saturation of 94%', cj: 'ph', cn: 'adapt', st: ['data', 'trend'],
      q: 'A client with COVID-19 at home reports a mild cough, and the home pulse oximeter reads 94% on room air. What should the nurse do?',
      o: ['Arrange an in-person evaluation by the provider', 'Reassure the client that anything over 90% is normal', 'Advise the client to recheck the reading tomorrow', 'Tell the client to start the leftover antibiotics at home'], a: [0],
      r: ['Correct. 94% or less on room air requires an in-person evaluation.', 'Incorrect. The book’s cutoff for COVID-19 at home is 94%.', 'Incorrect. Dyspnea can progress to ARDS within 2 days.', 'Incorrect. COVID-19 is viral; leftover antibiotics are never appropriate.'],
      ask: 'What saturation sends a client with COVID-19 to be seen in person?', cues: ['94% on room air'],
      phys: 'The COVID-19 lung infection can quietly lower oxygenation before breathlessness is severe; the threshold catches it early.',
      rule: 'SpO₂ 94% or less on room air → in-person evaluation. A normal saturation doesn’t rule out concern when dyspnea is present or worsening.' },
    { t: 'Albuterol for a client with COVID-19', cj: 'ta', cn: 'safe', st: ['safety'],
      q: 'A hospitalized client with COVID-19 and asthma has a prescription for albuterol. How should the nurse give it?',
      o: ['By metered-dose inhaler with a spacer', 'By nebulizer with the door open for ventilation', 'By nebulizer while wearing a surgical mask', 'Hold it, because bronchodilators spread the virus'], a: [0],
      r: ['Correct. An MDI with a spacer avoids aerosolizing the virus.', 'Incorrect. A nebulizer aerosolizes the virus, and the door stays closed.', 'Incorrect. Staff wear an N95 or higher; a nebulizer still aerosolizes the virus.', 'Incorrect. The client still needs the drug.'],
      ask: 'Which delivery method fills the room with droplets?', cues: ['COVID-19', 'Inhaled drug'],
      phys: 'A nebulizer turns liquid into a mist that carries the client’s exhaled virus into the room; an MDI with a spacer delivers the drug without that cloud.',
      rule: 'COVID-19 inpatient: mask on the client, single room with a private bathroom, door closed; airborne infection isolation room for aerosol-generating procedures; N95 or higher, goggles or face shield, gown, gloves; inhaled drugs by MDI with a spacer. At home, switch a nebulizer to an inhaler or use it away from others.' },
    { t: 'Just my COPD?', cj: 'eo', cn: 'adapt', st: ['client', 'trend'],
      q: 'A client with COPD who is recovering from COVID-19 at home calls to say they are more short of breath at rest today and that “it’s probably just my COPD.” What is the nurse’s best response?',
      o: ['“This needs to be checked today, because it could mean the COVID-19 is getting worse.”', '“Use your rescue inhaler and call back next week if it continues.”', '“Shortness of breath is expected for 4 weeks after COVID-19.”', '“Turn your home oxygen up as high as it will go.”'], a: [0],
      r: ['Correct. A change in breathing isn’t blamed on the underlying lung disease; dyspnea at rest signals progression.', 'Incorrect. Progression can reach ARDS within 2 days.', 'Incorrect. Mild dyspnea is common, but dyspnea at rest or increasing dyspnea isn’t expected.', 'Incorrect. Unsafe in COPD, and it delays evaluation.'],
      ask: 'Is this the client’s usual breathing, or a change?', cues: ['COPD', 'More short of breath at rest'],
      phys: 'Dyspnea at rest means the lungs can’t meet even resting oxygen needs, which happens as the COVID-19 lung infection spreads.',
      rule: 'Teach clients with asthma or COPD not to attribute a breathing change to their lung disease; report dyspnea at rest, chest pain, edema, hemoptysis and orthopnea (possible PE, heart failure or pericarditis).' },
    { t: 'Breathing easier at home', cj: 'gs', cn: 'basic', st: ['subject'],
      q: 'Which instruction should the nurse give a client with mild COVID-19 at home to help gas exchange?',
      o: ['Spend time lying on your stomach during the day', 'Stay in bed until the fever is gone', 'Drink less so mucus doesn’t build up', 'Take a cough suppressant instead of coughing and deep breathing'], a: [0],
      r: ['Correct. Self-proning is linked with better respiratory symptoms.', 'Incorrect. Rest, but also reposition often and walk as tolerated.', 'Incorrect. Fluids prevent dehydration and thin secretions.', 'Incorrect. Cough and deep-breathe at least every 2 hours; a suppressant is for a cough that disrupts sleep.'],
      ask: 'Which choice opens up more lung?', cues: ['Mild COVID-19', 'Gas exchange'],
      phys: 'Lying prone takes the weight of the heart and abdomen off the back of the lungs, where most of the lung tissue and blood flow are, so more of those alveoli open and air better matches blood flow.',
      rule: 'Home care: reposition often, walk as tolerated, self-prone; cough and deep-breathe at least every 2 hours; fluids unless restricted; dextromethorphan or benzonatate for a cough that disrupts sleep; acetaminophen preferred for fever and aches.' },
    { t: 'A sleep aid for an older adult', cj: 'ta', cn: 'pharm', st: ['pharm', 'client'],
      q: 'An 82-year-old client with rhinosinusitis asks whether an over-the-counter diphenhydramine product will help them sleep and dry up the drainage. What is the nurse’s best response?',
      o: ['“That drug can cause confusion, dry mouth and constipation in older adults, so let’s ask your provider about other choices.”', '“Yes, it is the safest antihistamine for older adults.”', '“Take twice the usual dose so it lasts all night.”', '“It’s fine as long as you take it with food.”'], a: [0],
      r: ['Correct. First-generation antihistamines are often inappropriate for older adults.', 'Incorrect. Diphenhydramine is a first-generation antihistamine to avoid.', 'Incorrect. Clearance is already reduced with aging.', 'Incorrect. Food doesn’t prevent its anticholinergic effects.'],
      ask: 'What does aging change about this drug?', cues: ['82 years old', 'Diphenhydramine'],
      phys: 'Older adults clear the drug more slowly, and its anticholinergic action dries secretions everywhere and clouds thinking.',
      rule: 'Avoid chlorpheniramine, diphenhydramine and hydroxyzine in older adults (reduced clearance, confusion, dry mouth, constipation); teach them not to self-medicate. Rhinosinusitis: decongestants, intranasal steroids, humidification, nasal irrigation, moist heat, fluids, head elevated.' },
    { t: 'Anthrax in an office worker', cj: 'ta', cn: 'safe', st: ['safety', 'abnormal'],
      q: 'Inhalation anthrax is diagnosed in an office worker who has no contact with animals, hides or wool. Which action by the nurse is most important?',
      o: ['Report the case to the hospital authorities at once', 'Isolate the client to protect the other clients', 'Wait for the client to improve before starting antibiotics', 'Tell the client’s coworkers they can catch it from the client'], a: [0],
      r: ['Correct. Without occupational risk, anthrax may mean bioterrorism.', 'Incorrect. Inhalation anthrax doesn’t spread from person to person, so isolation isn’t needed.', 'Incorrect. Antibiotics started in the prodromal stage give the best chance of survival.', 'Incorrect. It isn’t contagious between people.'],
      ask: 'How would an office worker meet anthrax spores?', cues: ['No occupational exposure'],
      phys: 'B. anthracis lives as spores in soil where grazing animals live; natural inhalation comes from handling wool, hides, bone meal or skins.',
      rule: 'Inhalation anthrax: nearly 100% fatal without treatment; prodromal stage (low fever, dry cough, mild chest pain, no sore throat or runny nose) then a fulminant stage after apparent improvement; ciprofloxacin, doxycycline, levofloxacin, moxifloxacin and clindamycin, plus antitoxins; report possible bioterrorism immediately.' }
  );

  R.rq.push(
    ['Put it in order', 1, 'In what order is PPE removed after caring for a client with COVID-19, and where does each step happen?',
      'Inside the room by the door (or in the anteroom): gloves, then the gown — touching only the inside, rolled away from the body. Leave the room. Then the face shield or goggles by the headband, then the respirator, then wash the hands at once.',
      'The most contaminated items come off first; the respirator protects your airway until you are out of the contaminated air.',
      'If your hands become contaminated between steps, stop and clean them.',
      'Taking off the respirator inside the room.'],
    ['Compare and contrast', 1, 'What does each COVID-19 test tell you: NAAT, antigen and antibody?',
      'NAAT (usually RT-PCR): the preferred test to confirm current infection — lab, collected by someone else, results in days. Antigen: a rapid viral test for current infection, at the point of care or at home. Antibody (serology): shows a past infection and isn’t used to diagnose a current one.',
      'Viral tests look for the virus; antibody tests look for the body’s response, which lags behind.',
      'Match the question (now or before?) to the test.',
      'Using an antibody test to decide whether a sick client has COVID-19 now.']
  );

  const mc0 = R.mc.length;
  R.mc.push(
    ['Eyeglasses are enough eye protection when caring for a client with COVID-19.', 'Wear goggles or a face shield; eyeglasses leave the sides of the eyes open.', 'Droplets and splashes reach the eyes.', 'Box 25.5 lists eyeglasses as insufficient eye protection.'],
    ['A normal oxygen saturation means a client with COVID-19 whose breathlessness is getting worse can stay at home.', 'Worsening dyspnea needs evaluation even when the saturation is normal.', 'Missing progression, which can reach ARDS within 2 days.', 'Dyspnea at rest or increasing dyspnea is the sign of progression; oximetry can lag behind it.']
  );
  const C = window.EXPLAIN_CARDS['25'] = window.EXPLAIN_CARDS['25'] || {}; C.mc = C.mc || {};
  R.mc.slice(mc0).forEach((x, i) => { C.mc[mc0 + i] = Object.assign({}, C.mc[mc0 + i], { why: x[3] }); });
})();
window.EXPLAIN_CH['25'] = 1;
