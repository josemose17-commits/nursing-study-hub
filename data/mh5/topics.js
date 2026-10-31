// Exam 5 · Topics (Varcarolis ch 11, 12, 16, 17, 18), written in our own words.
window.MH_TOPICS = [
{
  id: 'spectrum', week: 13, ch: 'Chapter 12', title: 'The schizophrenia spectrum',
  short: 'Symptom groups, speech and delusion terms, phases, and how to talk with someone in psychosis.',
  lead: '**Psychosis** means altered perception or thinking and an impaired ability to tell what is real (**reality testing**). Schizophrenia affects about **1%** of people, usually starting **15–25 in men** and **25–35 in women**. Its symptoms fall into four groups: **positive, negative, cognitive and affective**. Positive symptoms respond best to medication; negative and cognitive symptoms are more disabling.',
  terms: [
    { t: 'Positive symptoms', see: 'Hallucinations, delusions, paranoia, disorganized speech and behavior.', why: 'Things **added** that shouldn’t be there; linked to excess dopamine in the mesolimbic pathway.', means: 'Usually what brings the person to care; respond best to antipsychotics.' },
    { t: 'Negative symptoms', see: '**Anhedonia, avolition, asociality, affective blunting, apathy, alogia** (the six A’s).', why: 'Normal functions **taken away**; linked to low frontal-lobe activity.', means: 'Harder to treat; they cause poor hygiene and isolation (not laziness).' },
    { t: 'Cognitive symptoms', see: 'Poor memory and attention, concrete thinking, poor judgment and planning (executive function), **anosognosia**.', why: 'Frontal cortex and hippocampus changes.', means: 'Use repetition, visual cues and concrete examples; break tasks into steps.' },
    { t: 'Affective symptoms', see: 'Labile, incongruent or inappropriate mood; depression.', why: 'Emotional regulation is affected, plus the stress of a chronic illness.', means: 'Depression raises **suicide** risk (5–10% die by suicide).' }
  ],
  cards: [
    { h: 'Types of delusions', b: ['**Persecutory**: “They’re poisoning my food.”', '**Referential (ideas of reference)**: “The radio is sending me messages.”', '**Grandiose**: “I’m a famous playwright.”', '**Erotomanic**: “He secretly loves me.”', '**Nihilistic**: “A comet will end everything; I’m giving my things away.”', '**Somatic**: “My heart is rotting away.”', '**Control**: “Aliens control my thoughts.” (Thought insertion and thought broadcasting are related.)', 'Beliefs that come from one’s culture or religion are **not** delusions.'] },
    { h: 'Perception words', b: ['**Hallucinations**: auditory (most common, about 70%), visual, olfactory, gustatory, tactile (the last three suggest a medical or substance cause).', '**Illusion**: misreading something real (a coat looks like a bear).', '**Depersonalization** (detached from self) and **derealization** (the world seems unreal).'] },
    { h: 'Behavior words', b: ['**Catatonia**: little or no movement, rigidity, **waxy flexibility** (stays in the position you place); or purposeless excess activity.', '**Echopraxia**: copying movements. **Negativism**: resisting all requests.', '**Stereotyped behaviors**, **posturing**, grimacing, impaired impulse control, **boundary impairment**.'] },
    { h: 'Assessment guidelines', b: ['Medical work-up first (delirium, intoxication, withdrawal, anticholinergic or digitalis toxicity, fever, head injury).', 'Ask “What do you hear?” and ask about **commands** and whether she believes them.', 'Ask whether delusions are firmly held and involve danger.', 'Suicide risk, substance use, self-care, sleep, intake, medication adherence and side effects, family knowledge.'] },
    { h: 'Care across the phases', b: ['**Acute**: safety and stabilization, often in hospital; a structured milieu; short, frequent contacts (under 30 minutes).', '**Stabilization**: learn about the illness, manage side effects, cope with symptoms.', '**Maintenance**: relapse prevention, adherence, work, housing, **NAMI**, clubhouses, case management, the **recovery model** (hope and a full life).', 'Therapies: CBT, **cognitive remediation**, social skills, **family therapy**, support groups.'] }
  ],
  recall: [
    ['Two required elements for a schizophrenia diagnosis besides duration?', 'At least 2 symptoms, one of which must be **delusions, hallucinations or disorganized speech**; functioning below baseline; **6 months**.'],
    ['Psychosis for 3 weeks, then full recovery?', '**Brief psychotic disorder** (more than 1 day, less than 1 month).'],
    ['“The TV anchor is talking about me.” Which delusion?', '**Referential**.'],
    ['Inability to recognize one’s own illness, caused by the illness?', '**Anosognosia**.'],
    ['Symptom most linked to violence toward others?', '**Paranoia** (and command hallucinations).']
  ]
},
{
  id: 'antipsychotics', week: 13, ch: 'Chapters 3 and 12', title: 'Antipsychotic medications',
  short: 'First vs second generation, EPS, NMS, metabolic syndrome, clozapine, and long-acting injectables.',
  lead: 'All antipsychotics block **dopamine D2** receptors (second-generation drugs also block **serotonin 5-HT2A**). Blocking D2 in the **mesolimbic** pathway treats psychosis; blocking it in the **nigrostriatal** pathway causes **EPS**, and in the **tuberoinfundibular** pathway raises **prolactin**. Blocking H1, M1 and α1 adds sedation and weight gain, anticholinergic effects and orthostasis.',
  cards: [
    { h: 'First vs second generation', b: ['**First (typical)**: haloperidol, fluphenazine, chlorpromazine, perphenazine. Positive symptoms; **high EPS and TD**; cheap.', '**Second (atypical)**: risperidone, olanzapine, quetiapine, ziprasidone, aripiprazole, lurasidone, clozapine. Positive + some negative symptoms; less EPS; **metabolic syndrome**.', 'Partial D2 agonists (aripiprazole, brexpiprazole, cariprazine): low prolactin.', 'Onset **2–6 weeks**; taper off; not addictive; rarely lethal in overdose.'] },
    { h: 'EPS by timing', b: ['**Acute dystonia** (hours to days): muscle spasms of the neck, eyes or tongue → benztropine or diphenhydramine IM; watch the airway.', '**Akathisia** (days to weeks): restlessness → propranolol or a benzodiazepine; don’t mistake it for anxiety.', '**Pseudoparkinsonism** (weeks): tremor, shuffling, mask face → benztropine or trihexyphenidyl.', '**Tardive dyskinesia** (months to years): lip smacking, tongue writhing; often permanent → **AIMS** every 3 months; valbenazine or deutetrabenazine.'] },
    { h: 'Dangerous effects', tag: 'If it worsens', b: ['**NMS**: rigidity, fever above 103 °F, altered mental status, unstable vitals → hold, call stat, cool, fluids, ICU; dantrolene or bromocriptine.', '**Anticholinergic toxicity**: hot dry skin, dilated pupils, urinary retention, ileus, delirium → hold, cool, physostigmine.', '**Severe neutropenia** (ANC under 500; most with clozapine): fever, sore throat → hold, notify.', '**QT prolongation** (ziprasidone, haloperidol, quetiapine): get an ECG first.', '**Liver injury** (jaundice, dark urine), **seizures**, **choking**, **falls**.'] },
    { h: 'Clozapine', b: ['For **treatment-resistant** schizophrenia (2 failed drugs); **lowers suicide**; best efficacy.', '**ANC** weekly × 6 months → every 2 weeks × 6 months → monthly (REMS program). Benign ethnic neutropenia: get a baseline ANC.', 'Also: seizures, myocarditis, constipation and bowel emergencies, drooling, sedation, weight gain and diabetes.', '**Smoking lowers its level**; quitting smoking raises it.'] },
    { h: 'Metabolic syndrome', b: ['Weight gain (especially abdominal), high glucose and insulin resistance, high lipids; highest with **clozapine and olanzapine**.', 'Monitor weight, waist, BP, glucose and lipids; teach diet and activity; metformin may be used.'] },
    { h: 'Long-acting injectables', b: ['Haloperidol and fluphenazine decanoate (deep **Z-track** IM); risperidone (every 2 weeks; Perseris SubQ monthly); paliperidone (monthly, or every 3 months); aripiprazole (monthly); olanzapine pamoate (**observe 3 hours** afterward for sedation and delirium).', 'They improve adherence and reduce conflict over medication.'] },
    { h: 'Side-effect teaching', b: ['Dry mouth: sips of water, ice chips, sugarless gum. Constipation: fluids, fiber, activity. Urinary hesitancy: report retention.', 'Orthostasis: rise slowly; **hold if standing systolic is below 80**.', 'Sedation: take at bedtime; no driving until the effect is known.', 'Photosensitivity (chlorpromazine): sunscreen.', 'Report fever, sore throat, stiffness, confusion or new movements right away.'] }
  ],
  recall: [
    ['Which pathway causes EPS when D2 is blocked?', '**Nigrostriatal**.'],
    ['Tongue writhing after 3 years on haloperidol?', '**Tardive dyskinesia**: AIMS, valbenazine or deutetrabenazine; often permanent.'],
    ['Rigidity, temperature 104 °F, confusion on day 5 of haloperidol: first action?', '**Hold the antipsychotic and call the prescriber stat** (NMS).'],
    ['ANC schedule for clozapine?', 'Weekly × 6 months, every 2 weeks × 6 months, then monthly.'],
    ['Hot dry skin, dilated pupils, urinary retention, delirium?', '**Anticholinergic toxicity**.']
  ]
},
{
  id: 'kids', week: 14, ch: 'Chapter 11', title: 'Children and neurodevelopmental disorders',
  short: 'Assessing children, play therapy, least-restrictive behavior management, ID, tics, learning and communication disorders.',
  lead: 'About **1 in 5** children has a mental disorder in a given year, and half of all lifetime cases start **by age 14**. Young children are harder to diagnose (limited language, fast development), so the nurse gathers data from **many sources** (parents, teachers, the child) and uses **play** to assess and treat. Behavior is managed with the **least restrictive intervention** first.',
  terms: [
    { t: 'Resilience', see: 'A neglected child who bonds with a kind neighbor, loves school and earns good grades.', why: 'Adaptability, a nurturing adult outside the family, distance from family chaos, social skills, problem-solving and a sense of the future protect the child.', means: 'Ask about supports, coping and future plans; build these strengths.' },
    { t: 'Temperament', see: 'An easygoing vs an intense, shy or irritable baby.', why: 'An inborn style of reacting; a poor **fit** with a parent’s temperament risks insecure attachment.', means: 'Help parents understand and adapt to the child’s style.' }
  ],
  cards: [
    { h: 'Assessing a child', b: ['History of the present illness, developmental history (milestones, play, attachment), medical and family history.', '**Mental status** adapted to age, including **characteristics of play**; developmental screening (**Denver II**: social/personal, fine motor, language, gross motor).', 'Use **therapeutic games, drawing and puppets** for young children; a **genogram** for the family.', 'Screen for **abuse and neglect**: nurses are **mandated reporters** (neglect is the most common abuse).'] },
    { h: 'Interventions', b: ['**Behavioral** point systems; **play therapy** (feelings and trauma acted out with toys); **bibliotherapy** (stories); expressive arts, journaling, music; family therapy; CBT; groups.', 'Least → most restrictive: talk about it → offer PRN medication → **time-out** (the child can leave) → quiet or sensory room → **seclusion** → **restraint**.', 'Seclusion and restraint: constant monitoring, notify the **parents**, release as soon as safe, **debrief** with the child and the staff.'] },
    { h: 'The neurodevelopmental disorders', b: ['**Intellectual disability**: deficits in intellectual, social and daily (adaptive) functioning, starting in childhood; causes include Down, fragile X, PKU, prenatal alcohol or drugs, infection, neglect. Focus on **strengths**, self-care and family support.', '**Communication disorders**: language (expressive or receptive), speech sound, **stuttering** (childhood-onset fluency), social (pragmatic) communication. **Hearing test first**, then speech therapy.', '**Specific learning disorder**: reading (**dyslexia**), math (**dyscalculia**), writing (**dysgraphia**); **IEP** under IDEA.', '**Developmental coordination disorder**: clumsy, delayed motor skills → PT and OT.', '**Stereotypic movement disorder**: repetitive rocking, head banging → **safety** (helmet), habit reversal.', '**Tics**: provisional (under 1 year), persistent motor **or** vocal (over 1 year), **Tourette** (multiple motor **plus** at least one vocal tic, over 1 year; coprolalia in under 10%). Habit reversal (CBIT); haloperidol, pimozide, aripiprazole, guanfacine, clonidine; **stimulants can worsen tics**.'] },
    { h: 'Laws and services', b: ['**IDEA**: early intervention from birth to 3, then special education to age 21; **IEP**.', 'Teens’ consent rules vary by state.'] }
  ],
  recall: [
    ['Best-structured limit-setting statement?', '“**Hitting me when you are angry is unacceptable.**” (Specific, calm, not judgmental.)'],
    ['Best activity for a child with ADHD?', 'A **physical** one with quick feedback, like **tennis**.'],
    ['Least restrictive intervention?', 'Talking about the behavior and its consequences, then PRN medication, then time-out, then seclusion, then restraint.'],
    ['Tourette criteria?', '**Multiple motor and at least one vocal tic** for more than 1 year, before age 18.'],
    ['What does a mother using time-out 20 times a day tell you?', 'Time-out has **lost its therapeutic effect**.']
  ]
},
{
  id: 'attach', week: 13, ch: 'Chapter 16', title: 'Childhood trauma and attachment',
  short: 'Reactive attachment and disinhibited social engagement disorders, PTSD in children, polyvagal theory, the window of tolerance.',
  lead: 'Children depend on caregivers, and the developing brain changes with repeated stress (the **HPA axis**, amygdala and hippocampus), so early trauma and neglect can shape lifelong health. Treatment is **phased**: safety and stabilization, then calming arousal and working with memories, then catching up on skills. Relationships heal.',
  cards: [
    { h: 'Attachment disorders (severe early neglect)', b: ['**Reactive attachment disorder**: inhibited and withdrawn; **rarely seeks or accepts comfort**.', '**Disinhibited social engagement disorder**: **no fear of strangers**; overly friendly; would go off with a stranger.', 'Risks: institutions, frequent foster-home changes, impaired parents, long separations.', 'Treat the child **and** the caregiver; a safe, stable home.'] },
    { h: 'PTSD in children', b: ['Repetitive **play** reenacting the trauma; nightmares; regression; irritability, aggression; self-blame; withdrawal.', '**Imaginary friends** can be a **coping mechanism** after trauma.', 'Interventions: trust and safety, developmentally appropriate words, **relaxation before exploring the trauma**, art and play, involve parents (unless they caused the trauma), **mandatory reporting**.', 'Treatments: **CBT** and **EMDR** (first line); medications only for specific symptoms.'] },
    { h: 'Arousal: polyvagal theory and the window of tolerance', b: ['Ventral vagal = calm and socially engaged; sympathetic = fight or flight; **dorsal vagal** = shutdown, numbness, dissociation (“playing dead”).', 'Traumatized people swing between **hyperarousal** (anxious, aggressive) and **hypoarousal** (numb, withdrawn).', 'The goal is to keep them within the **window of tolerance** using breathing, mindfulness, soothing and limits without harshness.'] },
    { h: 'Other trauma-related disorders', b: ['**Acute stress disorder**: 3 days to 1 month after trauma; CBT reduces later PTSD.', '**Adjustment disorder**: within 3 months of a stressor; **complicated grief** can be a type (more than 12 months of intense yearning).', 'In adults: SSRIs **sertraline and paroxetine** are FDA approved for PTSD; **avoid antipsychotics** for PTSD.'] }
  ],
  recall: [
    ['A child at the mall asks a stranger, “Maybe you’ll take me home?”', 'Possible **disinhibited social engagement disorder** (a lack of early bonding).'],
    ['An 8-year-old repeatedly “arrests” and scares classmates in play.', 'A possible sign of **traumatization** (reenactment).'],
    ['Widow at 15 months with yearning, emptiness and anger?', '**Adjustment disorder** (complicated grief).']
  ]
},
{
  id: 'somafact', week: 13, ch: 'Chapter 17', title: 'Somatic, factitious and malingering',
  short: 'Unconscious vs conscious symptoms, loneliness, self-compassion and the nurse’s approach.',
  lead: '**Somatization** is distress expressed as physical symptoms. In somatic symptom, illness anxiety and conversion disorders the symptoms are **not under conscious control** and are real to the patient. In **factitious disorder** and **malingering** they are **consciously** produced, for the sick role or for an outside reward.',
  cards: [
    { h: 'The spectrum', b: ['**Somatic symptom disorder**: real symptoms + excessive worry, more than 6 months; may be “with predominant pain.”', '**Illness anxiety disorder**: fear of illness; few symptoms; care-seeking or care-avoidant.', '**Conversion**: neurological loss; la belle indifférence; treat with reassurance, PT, CBT, hypnosis; don’t confront.', '**Psychological factors affecting a medical condition**: stress, depression and loneliness worsening a real disease.', '**Factitious**: consciously fakes or induces illness for the **sick role**; travels between hospitals; scars from many surgeries.', '**Factitious imposed on another**: a caregiver induces illness in a dependent → **report and protect the child**.', '**Malingering**: consciously fakes for **external gain** (disability money, drugs, avoiding duty).'] },
    { h: 'Risk and protective factors', b: ['ACEs and childhood abuse; stress; anxiety and depression; **loneliness** (as harmful as smoking 15 cigarettes a day).', 'Protective: **resilient coping**, **self-compassion**, an **internal locus of control**, social connection.'] },
    { h: 'Six keys for working with somatic patients', b: ['One consistent provider (**continuity**).', 'Avoid unnecessary tests and procedures.', 'Brief, **regular, scheduled** visits.', 'Always do a physical exam.', 'Never say “it’s all in your head.”', 'Set reasonable goals (keep functioning despite pain).'] },
    { h: 'Culture', b: ['Many cultures express distress physically (e.g., **hwa-byung**: Korean suppressed anger with epigastric pain).', 'Immigrants and refugees may present trauma as physical symptoms.'] }
  ],
  recall: [
    ['Conscious faking to be a patient, with no outside reward?', '**Factitious disorder**.'],
    ['Faking back pain to get disability money?', '**Malingering**.'],
    ['Sudden paralysis with calm unconcern?', '**Conversion disorder** (la belle indifférence).'],
    ['Best outcome for impaired coping in somatic disorder?', '“**Calls a friend to talk when feeling lonely.**”']
  ]
},
{
  id: 'feeding', week: 14, ch: 'Chapter 18', title: 'Eating and feeding disorders',
  short: 'Anorexia vs bulimia vs binge eating, the labs, refeeding, and pica, rumination and ARFID.',
  lead: 'Eating disorders have the **highest death rate** of the psychiatric disorders. They lie on a spectrum and can shift (restriction → binge → binge-purge). They are about **50–60% heritable**, involve changes in the brain’s reward and body-signal circuits, and are fed by thin-ideal culture and trauma. **Medical stability comes first.**',
  cards: [
    { h: 'Compare the three', b: ['**Anorexia**: **low weight**, fear of gain, distorted image; restricting or binge/purge type; often denies a problem (ego-syntonic).', '**Bulimia**: binge + **compensating** at least weekly for 3 months; **normal weight**; ashamed and wants help.', '**Binge-eating disorder**: binges with distress and **no compensating**; often **obese**; the **most common** eating disorder.'] },
    { h: 'Hospitalize when…', b: ['**Anorexia**: under **75% of ideal weight**, under 10% body fat, HR **under 50**, systolic **under 90**, temperature **under 96 °F**, arrhythmias, severe electrolyte imbalance, suicide risk.', '**Bulimia**: syncope, K⁺ **under 3.2**, Cl⁻ **under 88**, esophageal tears, arrhythmias, intractable vomiting, hematemesis, suicide risk.'] },
    { h: 'Medications', b: ['**Anorexia**: no FDA-approved drug; treat comorbid conditions.', '**Bulimia**: **fluoxetine** (FDA approved, higher dose); **no bupropion** (seizures).', '**Binge eating**: **lisdexamfetamine (Vyvanse)** is FDA approved (watch BP, HR and misuse); SNRIs, topiramate.', 'Bariatric surgery is controversial with binge eating (binges can return).'] },
    { h: 'Binge-eating care', b: ['It’s about **coping with emotion**, not food: track triggers and feelings.', 'Small, regular meals (restriction triggers binges); slow, steady movement.', 'Use non-stigmatizing words (“unhealthy weight,” not “heavy”).', 'CBT, DBT, interpersonal therapy; address gastrointestinal symptoms and social isolation.'] },
    { h: 'Feeding disorders', b: ['**Pica**: eating **nonfood** items (dirt, paint, hair) past toddlerhood → lead poisoning, bowel obstruction, infection; more common with intellectual disability; monitor and reward appropriate eating.', '**Rumination**: **regurgitating**, rechewing and reswallowing or spitting food, with no GI cause, for 1 month or more → malnutrition; repositioning, pleasant meals, distraction.', '**Avoidant/restrictive food intake disorder (ARFID)**: avoids food (sensory dislikes, fear) → weight loss, deficiencies, tube feeding; **no body-image distortion**; behavior modification.'] },
    { h: 'Helpful extras', b: ['**Yoga** before meals lowers premeal anxiety and negative mood.', 'Ask about faith and culture; personal beliefs can be strengths.'] }
  ],
  recall: [
    ['“I’m ashamed, but I eat my hair.”', '**Pica**.'],
    ['Lab danger in bulimia?', '**Hypokalemia** (and arrhythmias).'],
    ['HR 46 in anorexia: what does it mean?', 'Meets the **hospitalization** criterion (HR under 50).'],
    ['Refeeding syndrome lab to watch?', '**Phosphate** (also K⁺ and Mg²⁺).'],
    ['FDA-approved drug for binge-eating disorder?', '**Lisdexamfetamine (Vyvanse)**.']
  ]
}
];
