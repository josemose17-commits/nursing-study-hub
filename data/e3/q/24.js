// Final Mastery test questions added for Ch 24, Noninfectious lower respiratory conditions. The test loads Exam 2's
// questions for this chapter first (data/ngn-22-25.js, data/recall-24-25.js); these are appended, so Exam 2's ids stay put.
// Written from the notes (Exam 2's, imported by tools/e3-import.js) and the chapter, for the topics Exam 2 tested least.
// Format: see data/e3/q/45.js and data/e3/q/more.js. Each item carries its own labels: cj (clinical judgment step),
// cn (Client Needs) and st (strategies), keys in ncjmm.js.
window.NGN_EXTRA = window.NGN_EXTRA || {}; window.RECALL_EXTRA = window.RECALL_EXTRA || {};
window.EXPLAIN_CARDS = window.EXPLAIN_CARDS || {}; window.EXPLAIN_CH = window.EXPLAIN_CH || {}; window.EXTRA_Q = window.EXTRA_Q || {};
(function () {
  const N = window.NGN_EXTRA['24'] = window.NGN_EXTRA['24'] || [];
  const R = window.RECALL_EXTRA['24'] = window.RECALL_EXTRA['24'] || {};
  ['nclex', 'rq', 'mc'].forEach(k => { R[k] = R[k] || []; });

  N.push(
    { f: 'sata', t: 'A cystic fibrosis flare-up', cj: 'rc', cn: 'adapt', st: ['abnormal', 'trend'],
      q: 'A client with cystic fibrosis comes to the clinic for a scheduled visit. Which findings show an exacerbation that needs exacerbation therapy? Select all that apply.',
      o: ['FEV₁ 10% lower than at the last visit', 'New crackles in both lung bases', 'More coughing, with bloody and purulent sputum', 'Eating less and losing weight', 'Retractions between the ribs', 'A sweat chloride level of 75 mmol/L in the chart', 'Walking farther than at the last visit'], a: [0, 1, 2, 3, 4],
      r: ['Correct. A 10% drop in FEV₁ is part of the book’s definition of an exacerbation.', 'Correct. New or increased crackles mean more mucus and infection.', 'Correct. More sputum, often bloody or purulent, and more cough.', 'Correct. Appetite and weight fall during a flare.', 'Correct. Chest muscle retractions show the work of breathing is up.', 'Incorrect. That result diagnosed CF; it says nothing about a flare.', 'Incorrect. Activity tolerance falls in an exacerbation.'],
      ask: 'Which findings are new or worse since the last visit?',
      cues: ['FEV₁ down 10%', 'New crackles', 'Bloody, purulent sputum', 'Weight loss', 'Retractions'],
      phys: 'Thick, dry mucus plugs the airways and holds bacteria; when infection flares, more mucus and inflammation narrow the airways, so FEV₁ falls, crackles appear and the work of breathing rises.',
      rule: 'CF exacerbation: more chest congestion, less activity tolerance, new or increased crackles, FEV₁ down 10%, more (bloody or purulent) sputum and cough, less appetite, weight loss, fatigue, falling SpO₂, retractions. Treatment: airway clearance four times a day, more bronchodilator and mucolytic, steroids, oxygen by SpO₂, 14–21 days of antibiotics chosen by the sputum culture (IV if oral fails or the flare is severe); avoid mechanical ventilation.' },

    { f: 'matrix', t: 'PAH or IPF?', cj: 'ac', cn: 'adapt', st: ['alike', 'subject'],
      q: 'For each finding, indicate whether it fits pulmonary arterial hypertension (PAH) or idiopathic pulmonary fibrosis (IPF).',
      cols: ['PAH', 'IPF'],
      rows: [{ t: 'Usually a woman between 30 and 60 years old', a: 0, r: 'PAH occurs mostly in women aged 30–60, sometimes in families.' },
        { t: 'Usually a man between 50 and 70 who has smoked', a: 1, r: 'IPF affects more men aged 50–70; smoking and inhaled irritants raise the risk.' },
        { t: 'Right-sided heart catheterization shows high pulmonary pressures', a: 0, r: 'That catheterization is how PAH is diagnosed.' },
        { t: 'A “honeycomb” pattern on high-resolution CT', a: 1, r: 'Scarred alveolar tissue looks like honeycomb.' },
        { t: 'Treated with nintedanib or pirfenidone', a: 1, r: 'Antifibrotic drugs slow the scarring; start them early.' },
        { t: 'Treated with bosentan or epoprostenol', a: 0, r: 'These dilate the pulmonary arteries.' },
        { t: 'Leads to right-sided heart failure', a: 0, r: 'The right ventricle fails against the high pressure.' }],
      ask: 'Is the vessel or the alveolar wall the problem?',
      cues: ['Women 30–60, heart cath → PAH', 'Men 50–70, honeycomb → IPF', 'Vasodilators vs antifibrotics'],
      phys: 'PAH thickens the pulmonary arteries, so the right ventricle fails against the pressure. IPF is healing that doesn’t stop: scar tissue thickens the alveolar walls until oxygen can’t cross them.',
      rule: 'PAH: pulmonary pressure over 25 mm Hg (normal 15–18); women 30–60; right heart catheterization; endothelin antagonists, prostacyclins, PDE-5 inhibitors; right heart failure, death within about 2 years untreated. IPF: restrictive; men 50–70; low FVC, honeycomb HRCT; nintedanib or pirfenidone; death usually 3–5 years after diagnosis.' },

    { f: 'sata', t: 'Teaching for bosentan', cj: 'ta', cn: 'pharm', st: ['pharm', 'safety'],
      q: 'A 32-year-old woman with pulmonary arterial hypertension is starting bosentan. Which instructions should the nurse include? Select all that apply.',
      o: ['Use two reliable methods of birth control while taking it', 'You’ll need a pregnancy test every month', 'Report yellow skin, dark urine or pain under your right ribs', 'Don’t drink alcohol', 'Swallow the tablet whole with a full glass of water', 'Crush the tablet into applesauce if it’s hard to swallow', 'Stop taking it if you feel lightheaded when you stand'], a: [0, 1, 2, 3, 4],
      r: ['Correct. Endothelin receptor antagonists cause birth defects.', 'Correct. Monthly testing is required.', 'Correct. Signs of liver toxicity.', 'Correct. Alcohol adds to the liver strain.', 'Correct. Don’t break, chew or crush it.', 'Incorrect. Don’t crush or chew it.', 'Incorrect. Some hypotension is expected; rise slowly and report it rather than stopping a PAH drug on your own.'],
      ask: 'What are bosentan’s three dangers?',
      cues: ['Birth defects', 'Liver', 'Low blood pressure'],
      phys: 'Bosentan blocks endothelin, a strong vasoconstrictor, so the pulmonary arteries relax; it dilates vessels everywhere (hypotension), is processed by the liver (toxicity) and harms a developing fetus.',
      rule: 'Endothelin receptor antagonists (bosentan, ambrisentan, macitentan): full glass of water, don’t break, chew or crush; two reliable methods of contraception and monthly pregnancy tests; contraindicated in pregnancy and breast-feeding; avoid alcohol; report jaundice, nausea, dark urine, right upper quadrant pain.' }
  );

  R.nclex.push(
    { t: 'A sweat test result', cj: 'ac', cn: 'rrp', st: ['data'],
      q: 'An adult with frequent lung infections has a sweat chloride level of 45 mmol/L. What does the nurse expect next?',
      o: ['More testing, because cystic fibrosis is possible but not confirmed', 'Teaching about cystic fibrosis, because the result confirms it', 'No follow-up, because the result rules out cystic fibrosis', 'A repeat sweat test only after the next lung infection'], a: [0],
      r: ['Correct. 30–59 mmol/L means CF is possible and more tests are needed.', 'Incorrect. CF is confirmed at 60 mmol/L or more.', 'Incorrect. Under 30 is the reassuring range.', 'Incorrect. The workup continues now; infection doesn’t change the test.'],
      ask: 'Where does 45 fall in the sweat chloride ranges?', cues: ['≥ 60 positive', '30–59 possible'],
      phys: 'A faulty CFTR channel can’t pull chloride back out of sweat, so sweat stays salty; genetic testing names the mutation, which predicts how severe the disease is.',
      rule: 'Sweat chloride: 60 mmol/L or more is positive for CF; 30–59 means possible — more testing (genetic testing names the mutation). Usually diagnosed by age 2, but some adults are diagnosed late.' },
    { t: 'Burkholderia on the unit', cj: 'ta', cn: 'safe', st: ['safety', 'client'],
      q: 'A client with cystic fibrosis whose sputum grows Burkholderia cepacia is admitted to a unit that has another client with cystic fibrosis. Which action is most important?',
      o: ['Keep the client away from the other client with cystic fibrosis', 'Room the two clients together for peer support', 'Teach the client that handshakes are safe after using hand gel', 'Hold the client’s antibiotics until a second culture confirms the organism'], a: [0],
      r: ['Correct. B. cepacia spreads by casual contact between people with CF, and it is often antibiotic-resistant.', 'Incorrect. That is how the organism spreads.', 'Incorrect. Teach not to shake hands routinely; wash hands meticulously.', 'Incorrect. Treatment (often with co-trimoxazole) isn’t delayed.'],
      ask: 'Who is this organism dangerous to?', cues: ['Spreads between people with CF', 'Resistant'],
      phys: 'B. cepacia lives in the thick mucus of CF airways, resists most antibiotics and passes from one person with CF to another by close contact and contaminated surfaces.',
      rule: 'B. cepacia: separate infected and noninfected clients with CF on units, clinic visits on different days, CF-approved cleaning of rooms and equipment; no routine handshakes; meticulous hand washing (sinks and tissues carry it); co-trimoxazole added. Pseudomonas aeruginosa is the most common CF infection.' },
    { t: 'Breathlessness in late IPF', cj: 'gs', cn: 'basic', st: ['subject', 'alike'],
      q: 'A client with advanced idiopathic pulmonary fibrosis is still hypoxemic on high-flow oxygen and says the breathlessness is unbearable. Which intervention does the nurse expect?',
      o: ['Morphine to ease the sensation of dyspnea', 'A bronchodilator nebulizer every 2 hours', 'Stopping the oxygen to prevent oxygen toxicity', 'Starting pirfenidone to reverse the scarring'], a: [0],
      r: ['Correct. Late in IPF, oral, parenteral or nebulized morphine eases the sensation of dyspnea.', 'Incorrect. IPF is a restrictive membrane disease, not narrowed airways.', 'Incorrect. The client needs the oxygen; comfort is the goal.', 'Incorrect. Antifibrotics slow scarring when started early; they don’t reverse it.'],
      ask: 'What is the goal now, and what actually blocks gas exchange?', cues: ['Advanced disease', 'Hypoxemic on high-flow oxygen'],
      phys: 'Scar tissue has thickened the alveolar walls so much that even high oxygen can’t cross them; morphine reduces the brain’s sense of air hunger.',
      rule: 'Late IPF: reduce the sensation of dyspnea with morphine; offer hospice when survival is expected to be under 6 months. Throughout: prevent infection, continuous home oxygen, energy conservation and pacing.' },
    { t: 'Starting sildenafil for PAH', cj: 'ta', cn: 'pharm', st: ['pharm', 'safety'],
      q: 'A client with pulmonary arterial hypertension is starting oral sildenafil. Which teaching is most important?',
      o: ['Get up slowly from lying or sitting', 'Take it only before sexual activity', 'It will cure the pulmonary hypertension', 'You can stop your oxygen once it starts working'], a: [0],
      r: ['Correct. PDE-5 inhibitors cause general and significant postural hypotension.', 'Incorrect. For PAH it is taken on a schedule to lower pulmonary pressure.', 'Incorrect. PAH drugs reduce pressure and slow cor pulmonale; they don’t cure it.', 'Incorrect. Oxygen keeps the saturation above 90%.'],
      ask: 'What does a vasodilator do to blood pressure when you stand?', cues: ['PDE-5 inhibitor', 'Vasodilation'],
      phys: 'Sildenafil blocks phosphodiesterase-5, so cGMP builds up and the pulmonary arteries relax — but vessels elsewhere relax too, and blood pools when the client stands.',
      rule: 'PDE-5 inhibitors (sildenafil, tadalafil) lower pulmonary artery pressure and improve exercise ability; all cause hypotension and postural hypotension. PAH also: oxygen above 90%, diuretics with daily weights, referral to a specialized center.' }
  );

  R.rq.push(
    ['Compare and contrast', 1, 'Compare PAH and IPF: who usually gets each, how each is diagnosed, the drugs, and how each ends.',
      'PAH: mostly women 30–60; right-sided heart catheterization shows pulmonary pressures over 25 mm Hg; endothelin receptor antagonists (bosentan), prostacyclins (epoprostenol, treprostinil) and PDE-5 inhibitors (sildenafil, tadalafil); ends in right heart failure, usually within 2 years without treatment. IPF: mostly men 50–70 who smoked; low FVC and a honeycomb pattern on high-resolution CT; nintedanib or pirfenidone, started early; ends in respiratory failure, usually 3–5 years after diagnosis.',
      'One is a disease of the vessels, the other of the alveolar wall.',
      'Match the failing structure to the drug class.',
      'Giving a bronchodilator for IPF breathlessness.'],
    ['Medication-focused', 1, 'What do the CFTR modulators do, and which clients does each help?',
      'Ivacaftor (a potentiator) keeps the chloride channel open longer — for clients with at least one responsive mutation, not homozygous ones. Ivacaftor/lumacaftor (a corrector) moves the CFTR protein to the cell surface — for F508del, the most common mutation, even when homozygous. The triple combination ivacaftor + tezacaftor + elexacaftor helps up to 90% of clients.',
      'They act on the faulty chloride channel itself, not on the symptoms.',
      'Ask which mutation the client has.',
      'Expecting every client with CF to respond to the same modulator.']
  );

  const mc0 = R.mc.length;
  R.mc.push(
    ['A lung transplant cures cystic fibrosis.', 'Transplant treats only the lungs; the pancreatic and other organ problems continue, and antirejection drugs raise the risk of lung infection.', 'Stopping enzymes, insulin or vitamins after the transplant.', 'The faulty CFTR protein is in the cells of every affected organ; new lungs replace only the lungs.'],
    ['A bronchodilator relieves the breathlessness of idiopathic pulmonary fibrosis.', 'IPF is a restrictive disease: scar tissue thickens the alveolar walls, so the problem is diffusion, not narrowed airways.', 'Relying on an inhaler while hypoxemia worsens.', 'Late in IPF even high-flow oxygen can’t cross the thickened membrane; morphine eases the sensation of dyspnea.']
  );
  const C = window.EXPLAIN_CARDS['24'] = window.EXPLAIN_CARDS['24'] || {}; C.mc = C.mc || {};
  R.mc.slice(mc0).forEach((x, i) => { C.mc[mc0 + i] = Object.assign({}, C.mc[mc0 + i], { why: x[3] }); });
})();
window.EXPLAIN_CH['24'] = 1;
