// Exam 5 · Think it through · Schizophrenia spectrum and antipsychotic emergencies (Varcarolis ch 12). Our own words.
(window.MH_CONDS = window.MH_CONDS || []).push(
{
  id: 'schizo', group: 'Psychosis', name: 'Schizophrenia — acute psychosis', week: 13,
  short: 'Hearing voices that say she should die, sure she is being followed, stopped her medication.',
  patient: '24-year-old brought in by her mother after 3 weeks without sleep, mumbling to herself, and covering her windows with foil “so they can’t read my thoughts.” She stopped her antipsychotic 2 months ago because “it made me gain weight.” She drinks large amounts of water and smokes 2 packs a day. She looks to the corner of the room and whispers between answers.',
  report: [
    'I’m calling about Ms. A., admitted today with an acute relapse of schizophrenia.',
    'She stopped her risperidone 2 months ago because of weight gain. She was hospitalized once before, 3 years ago, with a similar episode.',
    'She has auditory hallucinations, including voices telling her she should die. When I asked directly, she said she doesn’t plan to act on them, but she isn’t sure the voices aren’t real. She has a persecutory delusion that she is being followed and her thoughts are being read. She is drinking about 6 liters of water a day, and her sodium came back at 128, down from 138 on her last admission. She is mildly confused.',
    'I’m asking you to evaluate the hyponatremia and whether she needs a fluid restriction, and to restart an antipsychotic, ideally one she will tolerate, and consider a long-acting injectable. I’ve put her near the nurses’ station on 15-minute checks and searched her belongings.'
  ],
  steps: {
    rc: {
      gist: 'Recognize **positive symptoms** (hallucinations, delusions, disorganized speech and behavior), **negative symptoms** (the six A’s), **cognitive** problems and **affective** changes. Hear **command hallucinations** and **paranoia**: these are the safety cues. Then check the body: sleep, food, hygiene, **water intake (polydipsia)** and **substance use**. Rule out medical causes first.',
      terms: [
        { t: 'Auditory hallucinations', see: 'She turns her head toward the corner, whispers between answers and laughs at nothing.', why: 'The brain’s hearing areas fire with no outside sound; dopamine overactivity in the mesolimbic pathway is the main theory. The voice feels as real as yours.', means: 'Ask “**What are you hearing?**” (not “What are the voices saying?”). Ask whether they tell her to do anything (**command hallucinations**) and whether she believes them.' },
        { t: 'Command hallucination', see: '“The voice says I don’t deserve to live and should jump.”', why: 'A voice directing an action. Risk is highest when the patient believes the voice is real and feels unable to resist.', means: 'A **psychiatric emergency** cue: assess suicide and violence risk, increase observation, and tell the provider.' },
        { t: 'Persecutory delusion', see: '“They’re following me. They put a chip in my head.”', why: 'A fixed false belief held despite evidence, kept in place by impaired **reality testing**.', means: '**Never argue** with the delusion and never agree. Respond to the **feeling** (fear) and help her feel safe.' },
        { t: 'Paranoia', see: 'Suspicious, guarded, won’t eat food from the tray, watches staff.', why: 'An irrational fear that others intend harm.', means: 'The symptom **most linked to violence** toward others (she may act in “self-defense”). Keep a calm distance, explain everything, and offer sealed or packaged food.' },
        { t: 'Negative symptoms (the A’s)', see: 'Flat face, says little, stays in bed, no interest in anything or anyone.', why: '**Anhedonia, avolition, asociality, affective blunting, apathy, alogia**: the loss of normal functions, linked to low frontal-lobe activity.', means: 'Harder to treat than positive symptoms and more disabling. They are not laziness; break tasks into small steps.' },
        { t: 'Polydipsia and water intoxication', see: 'Carrying water bottles everywhere, dilute urine, and new confusion or worse psychosis.', why: 'Compulsive drinking (and antipsychotic dry mouth) dilutes the blood sodium (**hyponatremia**).', means: 'A **sudden worsening of psychosis or confusion → check sodium**. Track weights and intake, and restrict fluids as ordered.' },
        { t: 'Anosognosia', see: '“I’m not sick. Why would I take medicine for nothing?”', why: 'The illness itself damages the brain’s ability to recognize the illness; it isn’t denial.', means: 'The leading cause of stopping medication. Don’t argue; tie treatment to **her** goals (“to quiet the voices,” “to keep your job”).' }
      ],
      cards: [
        { h: 'Diagnosis', b: ['**2 or more** for a significant part of 1 month: delusions, hallucinations, disorganized speech, grossly disorganized or catatonic behavior, negative symptoms. **At least one must be one of the first three.**', 'Functioning is well below what it was before.', 'Continuous signs for **at least 6 months** (including 1 month of active symptoms).', 'Not caused by a substance or a medical condition; not a mood disorder with psychosis.'] },
        { h: 'The other spectrum disorders', b: ['**Delusional disorder**: delusions for 1 month or more; otherwise functions fairly normally.', '**Brief psychotic disorder**: symptoms for **more than 1 day and less than 1 month**, then a full return to normal.', '**Schizophreniform**: like schizophrenia but **less than 6 months**.', '**Schizoaffective**: schizophrenia plus a major **mood** episode.', '**Substance- or medically induced** psychosis: rule these out first (drugs, alcohol withdrawal, delirium, anticholinergic toxicity, fever, brain injury).'] },
        { h: 'Speech and thought words', b: ['**Associative looseness** → **word salad** (extreme): ideas barely connected.', '**Clang association**: words picked by sound (“track… Big Mac”).', '**Neologism**: a made-up word (“his mannerologies are poor”).', '**Echolalia**: repeats your words. **Echopraxia**: copies your movements.', '**Concrete thinking**: “What brought you here?” “A cab.”', '**Thought blocking**, **thought insertion**, **thought deletion**, **magical thinking**, **circumstantiality**, **tangentiality**.'] },
        { h: 'Phases', b: ['**Prodromal**: months of withdrawal, falling grades, odd ideas, feeling “something is wrong.”', '**Acute**: hallucinations, delusions, disorganization; often needs hospitalization.', '**Stabilization**: symptoms ease; outpatient or partial hospitalization.', '**Maintenance (residual)**: positive symptoms fade; negative and cognitive ones often stay. **Relapse prevention** is the focus.'] }
      ]
    },
    ac: {
      gist: 'This is an **acute relapse** of schizophrenia after **stopping medication** (because of weight gain, a side effect nobody addressed). Two safety risks stand out: **command hallucinations** telling her to die and **paranoia**. There is also a medical problem: **hyponatremia from polydipsia** may be adding confusion. Suicide risk in schizophrenia is high (5–10% die by suicide).',
      cards: [
        { h: 'Why schizophrenia happens', b: ['**About 80% genetic**: an identical twin has a ~50% chance.', '**Dopamine** excess in the mesolimbic pathway (positive symptoms), low dopamine in the frontal cortex (negative and cognitive); serotonin, **glutamate** and GABA are also involved.', 'Brain changes: enlarged ventricles, smaller hippocampus, less gray matter and **less prefrontal activity**.', 'Triggers in a vulnerable person: **marijuana** and stimulants, prenatal infection and malnutrition, older father, trauma, urban upbringing, stress.'] },
        { h: 'Why patients stop medication', b: ['**Side effects**: weight gain, sedation, sexual dysfunction, EPS.', '**Anosognosia** (doesn’t believe she is ill).', 'Stigma, cost, forgetting, mistrust.', 'Each relapse can leave more lasting damage, so adherence is worth fighting for.'] }
      ]
    },
    ph: {
      gist: 'Priority one: **safety**: risk of **suicide** (command hallucinations) and **violence** (paranoia). Then the **physical**: **hyponatremia**, sleep, nutrition, hygiene. Then **disturbed thought and perception**, **nonadherence** and family support.',
      cards: [
        { h: 'Priority problems', b: ['**Risk for suicide** and **risk for violence** (command hallucinations, paranoia).', '**Fluid and electrolyte imbalance** (polydipsia), **self-care deficit**, **impaired sleep**.', '**Hallucinations, delusions, distorted thinking**.', '**Nonadherence** and lack of knowledge of the illness.'] }
      ]
    },
    gs: {
      gist: 'Acute phase outcomes: she **stays safe** (no harm to self or others), sodium returns to normal, she sleeps and eats, and she begins to label the voices as **“a symptom, not real”** and **doesn’t act on them**. Later: she understands the illness, takes medication she can tolerate, knows her **early relapse signs** (less sleep, withdrawal, poor concentration), avoids drugs and connects with **NAMI** and a community mental health center.'
    },
    ta: {
      gist: 'Keep her **safe and calm** (low stimulation, a room near the station, closer observation). Build **trust** with short, frequent, honest contacts. With hallucinations: ask what she hears, **don’t argue**, state your reality, respond to the feeling and teach **competing stimuli**. With delusions: **never debate**; focus on the feeling and present reality. Manage fluids and sodium. Restart an **antipsychotic** she can tolerate, watch for **cheeking**, and teach the patient and family.',
      cards: [
        { h: 'Responding to hallucinations', b: ['Ask “**What are you hearing?**” Don’t talk about the voices as if they were real.', '“**I don’t hear the voice you hear, but it sounds frightening.**” Don’t say “There are no voices” (dismissive) or “What else do they say?” (feeds them).', 'Focus on **here-and-now**, reality-based activities.', 'Teach **competing stimuli**: humming, music, talking with someone, reading aloud.', 'Teach **reality testing**: “Do the people around you seem to hear it?”', 'Call her by name, use simple words, and redirect her to your conversation.'] },
        { h: 'Responding to delusions', b: ['**Never debate** the content and never agree with it.', 'Respond to the **feeling or theme**: “It must be frightening to feel followed. You’re safe here.”', 'Validate any part that is real: “Yes, a man was at the desk, but he didn’t mention you.”', 'Don’t dwell on it; **refocus** on reality-based topics.', 'As reality testing improves, gently voice doubt: “I wonder if there could be another explanation?”'] },
        { h: 'Disorganized speech', b: ['Don’t pretend to understand: “**I’m having trouble following you**” (put the difficulty on yourself).', 'Tell her what you did understand; summarize; look for themes.', 'Speak in short, concrete sentences.'] },
        { h: 'Paranoia and violence risk', b: ['Keep a calm, nonthreatening stance and a safe distance; don’t touch without warning.', 'Explain everything before you do it; offer packaged food if she fears poisoning.', 'Watch for rising tension; de-escalate early; seclusion and restraint only as a last resort.', 'Separate her from any peer she has targeted.'] },
        { h: 'Antipsychotic basics', b: ['**First generation** (haloperidol, fluphenazine, chlorpromazine): D2 blockers; treat **positive** symptoms; high **EPS**; cheap.', '**Second generation** (risperidone, olanzapine, quetiapine, aripiprazole, clozapine…): D2 + 5-HT2A; positive **and some negative** symptoms; less EPS; **metabolic syndrome** risk.', 'Take **2–6 weeks** to work; not addictive, but **taper** off; can impair swallowing (choking) and cause falls (orthostasis, sedation).', '**Cheeking or palming**: mouth checks; liquid or dissolving forms; **long-acting injectables** (every 2–4 weeks, even 12) improve adherence.', 'After 2 failed drugs → **clozapine** (also lowers suicide risk).'] },
        { h: 'Teaching the patient and family', b: ['Schizophrenia is a **brain illness**, like diabetes: managed long term.', 'Early warning signs of relapse: **less sleep, withdrawal, poor concentration**, odd ideas.', '**Avoid marijuana, alcohol and stimulants**; limit caffeine and tobacco (smoking also **lowers clozapine and olanzapine levels**).', 'Weight, glucose and lipid checks; healthy diet and activity.', 'Families: low criticism, simple calm communication; **NAMI Family-to-Family**; respite.'] }
      ]
    },
    eo: {
      gist: 'Reassess **safety** every shift (commands, paranoia, suicide). Track **sodium**, intake and weight, sleep, hygiene and meals; whether she can say the voices are a symptom; whether she takes medication without cheeking; and side effects (**AIMS** for movements, weight, glucose).',
      cards: [
        { h: 'If it worsens', tag: 'If it worsens', b: ['Psychosis suddenly worse plus confusion → check **sodium** and for **anticholinergic toxicity**, and get a medical evaluation.', 'Rigid, feverish, confused → think **NMS** (next condition).', 'Hopelessness or sudden calm → reassess **suicide**.'] }
      ]
    }
  }
},
{
  id: 'nms', group: 'Psychosis', name: 'Antipsychotic side-effect emergencies', week: 13,
  short: 'Day 5 of haloperidol: rigid, temperature 40.1 °C, confused, BP swinging.',
  patient: '30-year-old man on day 5 of haloperidol for acute psychosis. This morning he is stiff “like a board,” sweating, barely responds, and is incontinent. BP 172/104, then 98/60 an hour later; HR 124; temperature 40.1 °C (104.2 °F). Two days ago his neck twisted to one side and his eyes rolled up; benztropine fixed it within 20 minutes.',
  report: [
    'I’m calling about Mr. K. in room 6. I’m concerned he has neuroleptic malignant syndrome.',
    'He started haloperidol 5 days ago. He had an acute dystonic reaction 2 days ago that resolved with IM benztropine.',
    'He has severe lead-pipe rigidity, a temperature of 40.1, a heart rate of 124, blood pressure swinging between 172/104 and 98/60, diaphoresis and a decreased level of consciousness. I have held his haloperidol and every other antipsychotic and started cooling.',
    'I need you to see him now. I recommend transfer to the ICU, a CK, BMP and renal function, and IV fluids. Please consider dantrolene or bromocriptine.'
  ],
  steps: {
    rc: {
      gist: 'Know the side effects by **timing and look**. **Acute dystonia** (hours to days: sudden muscle spasm of the neck, eyes or tongue). **Akathisia** (days to weeks: can’t sit still, inner restlessness). **Pseudoparkinsonism** (weeks: tremor, shuffling, mask face). **Tardive dyskinesia** (months to years: lip smacking, tongue writhing). The emergencies: **NMS** (rigidity + high fever + altered mental status + unstable vitals), **anticholinergic toxicity** and **severe neutropenia**.',
      terms: [
        { t: 'Neuroleptic malignant syndrome (NMS)', see: '“Lead-pipe” rigidity, temperature above 103 °F (39.4 °C), confusion or stupor, sweating, labile BP, tachycardia, incontinence.', why: 'Sudden, excessive **dopamine blockade** in the hypothalamus (temperature control) and the muscles; the rigid muscles generate heat and break down (**rhabdomyolysis**, high CK) → kidney failure, respiratory failure.', means: '**Life-threatening emergency** (about 6% die). **Hold all antipsychotics, call the prescriber stat**, cool, hydrate, transfer to critical care; **dantrolene** or **bromocriptine**.' },
        { t: 'Acute dystonia', see: 'Sudden painful spasm: neck twisted (**torticollis**), eyes rolled up (**oculogyric crisis**), tongue protruding, back arched.', why: 'D2 blockade in the nigrostriatal pathway upsets the dopamine–acetylcholine balance that controls movement.', means: 'Frightening, rarely dangerous (unless **laryngeal**: watch the airway). Give **benztropine or diphenhydramine IM**; relief in 5–15 minutes. Stay with him.' },
        { t: 'Akathisia', see: 'Paces, shifts from foot to foot, rocks, says “I can’t sit still.”', why: 'Motor restlessness from D2 blockade.', means: 'Often **mistaken for anxiety or agitation**, which leads to giving more of the same drug. Report it; **propranolol**, a benzodiazepine or a medication change. Severe akathisia raises suicide risk.' },
        { t: 'Pseudoparkinsonism', see: 'Mask-like face, shuffling gait, pill-rolling tremor, stiffness, drooling, slow movement.', why: 'Too little dopamine effect in the movement circuits, as in Parkinson disease.', means: '**Antiparkinsonian** drug (benztropine, trihexyphenidyl), dose reduction; fall and choking precautions.' },
        { t: 'Tardive dyskinesia', see: 'Lip smacking, tongue writhing or protruding, chewing, grimacing, finger and trunk movements.', why: 'Long-term D2 blockade causes the receptors to become oversensitive; it develops after months to years.', means: 'Often **permanent**. Screen with the **AIMS** at least every 3 months; **valbenazine** or **deutetrabenazine**; consider a second-generation drug.' },
        { t: 'Anticholinergic toxicity', see: 'Hot, dry, flushed skin with fever, **dilated pupils**, urinary retention, no bowel sounds, tachycardia, **delirium**, worsening “psychosis.”', why: 'Too much muscarinic blockade from several anticholinergic drugs (antipsychotic + benztropine + diphenhydramine).', means: 'Emergency: **hold medications**, cool, catheterize as needed; **physostigmine**. Suspect it whenever psychosis suddenly worsens.' }
      ],
      cards: [
        { h: 'NMS vs serotonin syndrome vs anticholinergic toxicity', b: ['**NMS**: antipsychotic; **rigid** “lead pipe”; **slow** onset (days); sweating.', '**Serotonin syndrome**: serotonergic drugs; **clonus and hyperreflexia**, tremor; **fast** onset (hours); diarrhea.', '**Anticholinergic toxicity**: **hot and dry**, dilated pupils, urinary retention, delirium.', 'All three cause **fever, tachycardia and confusion**: the muscle findings and the drug history tell them apart.'] }
      ]
    },
    ac: {
      gist: 'Rigidity + fever + altered consciousness + unstable vital signs **on a first-generation antipsychotic early in treatment** = **NMS** until proven otherwise. The earlier dystonia shows he is sensitive to D2 blockade. Check **CK** (very high), **WBC**, kidney function and electrolytes.',
      cards: [
        { h: 'Who is at risk of which effect', b: ['**High-potency first generation** (haloperidol, fluphenazine): highest EPS and NMS risk.', '**Low-potency first generation** (chlorpromazine): more sedation, anticholinergic effects and orthostasis.', '**Clozapine and olanzapine**: highest **metabolic** risk; clozapine → **neutropenia**, seizures, myocarditis.', '**Risperidone and paliperidone**: high **prolactin**. **Ziprasidone**, quetiapine and haloperidol → **QT prolongation** (get an ECG before starting).'] }
      ]
    },
    ph: {
      gist: '**NMS is the emergency**: hyperthermia, risk of airway or respiratory failure, rhabdomyolysis and kidney injury. Everything else waits.'
    },
    gs: {
      gist: 'Outcomes: temperature, BP and HR return to normal; rigidity resolves; CK falls; urine output stays at least 30 mL/hr with no kidney injury; he survives without complications. Later, a safer antipsychotic is chosen and the patient and family know the warning signs.'
    },
    ta: {
      gist: '**Hold all antipsychotics** and **call the prescriber stat**; transfer to **critical care**. **Cool** (cooling blanket, ice packs or bath as ordered), give **IV fluids** and correct electrolytes, monitor the airway, rhythm and urine output, and give **dantrolene** (muscle relaxant) or **bromocriptine** (dopamine agonist) as ordered. For the milder EPS, treat as below.',
      cards: [
        { h: 'Side-effect care, at a glance', b: ['**Acute dystonia**: benztropine or diphenhydramine **IM**; check the airway; reassure; consider a preventive oral antiparkinsonian.', '**Akathisia**: propranolol, lorazepam, diazepam or benztropine; consider changing the drug.', '**Pseudoparkinsonism**: benztropine or trihexyphenidyl; fall precautions; towel for drooling.', '**Tardive dyskinesia**: AIMS every 3 months; valbenazine or deutetrabenazine (watch the QT and sedation).', '**Orthostatic hypotension**: lying and standing BP; **hold and call if standing systolic is below 80**; rise slowly.', '**Anticholinergic effects**: sips of water, sugarless gum, fiber and fluids, check for a full bladder.', '**Metabolic syndrome**: weight, waist, glucose and lipids; diet and activity; metformin may be added.', '**Clozapine neutropenia**: **ANC weekly for 6 months, every 2 weeks for 6 months, then monthly**; ANC below 1000 → hold and notify; teach to report **fever and sore throat**.'] }
      ]
    },
    eo: {
      gist: 'Monitor temperature, vital signs, mental status, rigidity, **CK**, kidney function and urine output until normal. Document the reaction as an allergy or adverse event, and make sure any future antipsychotic is restarted cautiously, after full recovery and at a low dose.'
    }
  }
}
);
