// Week 12 lecture (Mental Health "Week 2" slides): bipolar, depressive, anxiety/OCD, suicide and self-injury.
// Notes and practice questions for the parts of the slides the older condition walkthroughs did not cover in detail.
// Pages merge window.MH_WK12 into their own MH_TOPICS / MH_Q (Exam 5 Map). Verify drug details with a current reference.
(function (root, factory) {
  var data = factory();
  if (typeof module === 'object' && module.exports) module.exports = data; else root.MH_WK12 = data;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';
  var topics = [
    { id: 'lec-bipolar', week: 12, ch: 'Lecture slides · bipolar', title: 'Bipolar disorders: lecture key points',
      short: 'Bipolar I vs II vs cyclothymic, hypomania vs mania, speech terms, limit setting, lithium, ECT.',
      lead: '**Bipolar I** = at least one **manic** episode (most severe, highest mortality). **Bipolar II** = at least one **hypomanic** episode **and** at least one **major depressive** episode. **Cyclothymic disorder** = alternating hypomanic and mild-to-moderate depressive symptoms for **at least 2 years** in adults. The priority in acute mania is **safety**: exhaustion, dehydration and poor reality testing.',
      terms: [
        { t: 'Hypomania', see: 'Elevated mood and energy, often with **better** functioning.', why: 'A lower-level, less dramatic mania.', means: '**No** marked impairment, **no** psychosis, **no** hospitalization. That is what separates it from mania.' },
        { t: 'Flight of ideas', see: 'Rapid jumps from topic to topic with a loose connection.', why: 'Racing thoughts in mania.', means: 'Respond with simple, firm focus: “Let’s talk about one thing at a time.”' },
        { t: 'Clang associations', see: '“The bill, the pill, the hill, I’m a thrill.”', why: 'Words chosen for sound (rhyme), not meaning.', means: 'A manic speech pattern to document by name.' },
        { t: 'Pressured speech', see: 'Fast, loud, hard to interrupt.', why: 'Racing thoughts push speech out.', means: 'Use short, concise statements.' },
        { t: 'Grandiose delusion', see: '“My novel has won every award; a famous actor will play me.”', why: 'Highly inflated self-regard.', means: 'Do not argue; redirect to reality and the task at hand.' },
        { t: 'Splitting', see: 'Asks a second nurse after the first says no, claiming the first agreed.', why: 'Manipulative, demanding behavior in mania.', means: 'Staff unity: frequent team meetings and **consistent limits**.' }
      ],
      cards: [
        { h: 'Who gets it and what comes with it', b: ['Lifetime risk nearly **4%**; men and women nearly equal.', 'Men: more legal problems and violence. Women: more alcohol misuse, suicide and **thyroid disease**.', 'Severe **postpartum psychosis** carries **4×** the risk of bipolar disorder.', 'About **75%** have an anxiety disorder; **over half** with bipolar I have a substance use disorder; bipolar II links with **binge eating**.', 'Cyclothymic disorder: substance use, sleep disorders, ADHD in children; about **50%** later develop bipolar I or II.', 'Risk factors: genetic (bipolar I resembles schizophrenia genetically; bipolar II resembles major depression), neurobiological, neuroendocrine (thyroid/HPT axis), inflammation, childhood trauma.'] },
        { h: 'Assessment', b: ['Mood: **Altman Self-Rating Mania Scale**.', 'Behavior: manipulative, demanding, **splitting**.', 'Speech: pressured, circumstantial, tangential, loose associations, **flight of ideas**, **clang associations**.', 'Thought content: **grandiose** and persecutory delusions.', 'Guidelines: danger to self or others, need for protection from uninhibited behavior, need for hospitalization, medical status, other conditions, family understanding.'] },
        { h: 'Nursing diagnoses and outcomes', b: ['**Risk for injury** comes first: exhaustion, dehydration and impaired reality testing.', 'Also: risk for violence, sleep deprivation, impaired cognition and concentration, self-care deficit, impaired socialization.', 'Acute outcomes: no injury, stable cardiac status, hydration and skin intact, sleep and rest, thought self-control, no self-harm.', 'Maintenance outcomes: knows the illness and medicines, names supports (e.g., group therapy), learns new coping skills.', '**Priority patient:** mania with no sleep for days, tachycardia and exhaustion (collapse, arrhythmia risk).'] },
        { h: 'Acute mania: what the nurse does', b: ['**Firm, calm** approach; **short, concise** explanations; expectations in **simple, concrete** terms.', '**Hear and act on legitimate complaints** (reduces acting out).', '**Redirect energy**: distractibility is the most effective tool.', '**Set limits consistently** (e.g., lights out at 11 p.m.); frequent staff meetings prevent splitting.', 'Nutrition: **high-calorie, high-protein finger foods** and fluids the client can take while moving.', 'Seclusion or restraint only when documentation shows **substantial risk of harm**, the client **cannot control actions**, and **other measures failed**.'] },
        { h: 'Medicines', b: ['**Lithium** maintenance range **0.6–1.2 mEq/L**. At a therapeutic level, mild nausea, **fine tremor**, thirst and urination are **expected**: document and reassure.', 'Toxicity: **coarse** tremor, vomiting and diarrhea, unsteady gait, confusion. Long-term: **hypothyroidism** and kidney concentrating problems.', 'NSAIDs (ibuprofen, naproxen) **raise** lithium levels: use **acetaminophen** instead.', 'Anticonvulsants: **valproate/divalproex (Depakote)**, **carbamazepine (Equetro)**, **lamotrigine (Lamictal)**. Lamotrigine + blistering rash → **stop it and get emergency care** (SJS).', 'Second-generation antipsychotics: olanzapine, risperidone, quetiapine, ziprasidone, aripiprazole, asenapine, cariprazine. Approved for bipolar **depression**: lurasidone, quetiapine, cariprazine, olanzapine-fluoxetine (Symbyax).', 'Omega-3s: no evidence for mania; may help depressive symptoms.'] },
        { h: 'Other treatments and teaching', b: ['**ECT**: used for bipolar disorder with **severe depression**; works faster than medicine (often within a week). After ECT: **airway, vital signs and orientation** first.', '**rTMS**: approved for treatment-resistant major depression, **not** for bipolar depression.', 'CBT (adjunct), **interpersonal and social rhythm therapy** (regular routines), **family-focused therapy** (communication).', 'Teach: the illness recurs; warning signs; **regular sleep, meals, exercise**; medication adherence for life.', 'Support: **DBSA**, **NAMI**, Mental Health America.'] }
      ],
      recall: [
        ['One manic episode, no depression ever. Diagnosis?', '**Bipolar I** (depression is not required).'],
        ['What separates hypomania from mania?', 'Hypomania has **no marked impairment, no psychosis, no hospitalization**.'],
        ['Lithium 1.0 mEq/L with fine tremor and thirst. Action?', 'Expected at a therapeutic level: **document, reassure, keep monitoring**.'],
        ['Pain relief for a client on lithium?', '**Acetaminophen**; NSAIDs raise lithium levels.'],
        ['Main theme of nursing care in mania?', '**Consistent limit setting** with a firm, calm approach.'],
        ['First priority after ECT?', '**Airway, vital signs and orientation** as the client wakes.']
      ] },

    { id: 'lec-depression', week: 12, ch: 'Lecture slides · depressive disorders', title: 'Depressive disorders: lecture key points',
      short: 'DMDD, persistent depressive disorder, PMDD, MDD criteria, treatment phases, antidepressants, brain stimulation.',
      lead: 'All depressive disorders share **sadness, emptiness or irritability**, body (somatic) concerns and impaired thinking, and they impair function. **Major depressive disorder** needs **5 or more** symptoms in a **2-week** period, and one must be **depressed mood or anhedonia**. **Suicide risk** is always the first assessment.',
      terms: [
        { t: 'Anhedonia', see: 'No longer enjoys games, classes or friends he used to love.', why: 'an- “without” + hedone “pleasure”.', means: 'One of the two core MDD symptoms (with depressed mood).' },
        { t: 'Anergia', see: 'No energy to get up or do tasks.', why: 'Lack of energy in depression.', means: 'Break self-care into small steps.' },
        { t: 'Psychomotor retardation', see: 'Walks, moves and speaks very slowly.', why: 'Slowed thinking and movement.', means: 'Allow extra time for responses.' },
        { t: 'Vegetative signs', see: 'Changes in **sleep** (e.g., hypersomnia), appetite, elimination, sexual patterns, hygiene.', why: 'Body functions slowed or disturbed by depression.', means: 'Guilt and crying are emotional signs, not vegetative ones.' },
        { t: 'Persistent depressive disorder', see: 'Low-level depression most days.', why: 'Formerly **dysthymia**.', means: 'At least **2 years** in adults, **1 year** in children/teens, plus 2 or more symptoms.' },
        { t: 'Disruptive mood dysregulation disorder (DMDD)', see: 'Constant severe irritability; outbursts out of proportion **3+ times a week** in 2+ settings.', why: 'Diagnosed ages **6 to 18**.', means: 'Symptom medicines, CBT, parent training, facial-expression recognition training.' },
        { t: 'Premenstrual dysphoric disorder (PMDD)', see: 'Mood swings, irritability, depression, anxiety, poor concentration in the **week before** menses.', why: 'Linked to the menstrual cycle.', means: 'Symptoms fade with the **onset of menstruation**.' }
      ],
      cards: [
        { h: 'Major depressive disorder', b: ['5+ in 2 weeks: weight/appetite change, sleep change, fatigue, worthlessness or guilt, poor concentration, recurrent thoughts of death, psychomotor agitation or retardation, **plus depressed mood or anhedonia**.', 'Lasts 2 weeks to 6 months; **chronic** if more than 2 years; recurrence is common.', 'Not due to a substance or medical condition; **no manic or hypomanic** episode ever.', 'Leading cause of disability in the US; anxiety + depression is one of the most common combinations.', 'Risk: first-degree relatives, biochemical, hormonal, inflammatory, stressful events (**diathesis-stress model**), negative thinking (cognitive), female, adverse childhood experiences, neuroticism, chronic illness.', 'Other types: substance-induced (no symptoms without the substance), due to a medical condition (stroke, Parkinson’s, Huntington’s, Alzheimer’s, TBI, Cushing’s, hypothyroidism, diabetes, HIV, cancer).'] },
        { h: 'Nursing process', b: ['Assess **suicide first**: “You look really sad. Have you ever thought of harming yourself?”', 'Findings: anergia, anhedonia, anxiety, worthlessness, hopelessness, guilt, anger, helplessness; sometimes delusions or hallucinations; chronic pain.', 'Self-assessment: patients often **reject advice and encouragement**; avoid unrealistic expectations of yourself or the patient.', 'Diagnoses: **risk for suicide (highest priority)**, chronic low self-esteem, imbalanced nutrition, constipation, disturbed sleep, ineffective coping, disabled family coping.', 'Recovery model: build on strengths; goals set **together** with the patient.', 'Treatment phases: **acute 6–12 weeks**, **continuation 4–9 months**, **maintenance 1 year or more**.'] },
        { h: 'Talking with a person who is depressed', b: ['Use **simple, concrete** words.', '**Allow time** for a response.', 'Listen for **covert** messages; **ask about suicide plans**.', 'Avoid **platitudes** (“Things will get better”).', 'If silent: **avoid direct questions**; sit with the person and **make observations** (“You’re wearing your new sweater”).'] },
        { h: 'Antidepressants', b: ['Choice depends on symptoms, side effects (sexual dysfunction, weight gain), ease of use, past response, safety.', '**SSRIs: first line.** Rare serotonin syndrome. Side effects: agitation, anxiety, sleep change, tremor, **sexual dysfunction** (most bothersome), headache, dry mouth, sweating, weight change, nausea, loose stools.', 'SNRIs (SSRIs may be better tolerated); **TCAs: anticholinergic**; **MAOIs**: atypical depression.', 'Newer: **SARI** (trazodone), **NDRI** (bupropion), **NaSSA** (mirtazapine), **esketamine** (NMDA antagonist).', 'Slides: brexanolone (Zulresso) is “the only FDA-approved drug for postpartum depression.” **Update:** its US approval was withdrawn in 2025, and oral **zuranolone** (Zurzuvae) was approved in 2023. Answer the class exam the way your instructor taught it.'] },
        { h: 'Other treatments', b: ['**St. John’s wort**: mild to moderate depression; raises serotonin, norepinephrine and dopamine, so it can cause **serotonin syndrome with an SSRI**.', '**ECT**: the **most effective** depression treatment. First choice for severe malnutrition, exhaustion or dehydration, delusional depression, failed medicine trials, catatonia, or when medicines are unsafe.', '**rTMS**: noninvasive magnetic pulses; **metal** is the main contraindication; headache, lightheadedness, scalp tingling; **no memory loss**; rare seizures.', '**VNS**: began as an epilepsy treatment; **voice change** in about 60%; neck pain, cough, numbness, shortness of breath.', '**DBS**: electrodes surgically implanted in the brain (more invasive than VNS).', '**Light therapy**: **first line for seasonal affective disorder** (melatonin); headache, jitteriness.', '**Exercise**: raises serotonin and calms an overactive HPA axis. Therapies: CBT, interpersonal therapy, behavior and group therapy.'] }
      ],
      recall: [
        ['Two symptoms, one of which MDD requires?', '**Depressed mood** or **anhedonia**.'],
        ['Persistent depressive disorder: minimum duration in adults and teens?', '**2 years** adults; **1 year** children and adolescents.'],
        ['Hypersomnia, guilt, crying: which is vegetative?', '**Hypersomnia**.'],
        ['Highest-priority nursing diagnosis in depression?', '**Risk for suicide**.'],
        ['Continuation phase length?', '**4 to 9 months** (acute 6–12 weeks; maintenance 1 year+).'],
        ['First-line treatment for seasonal affective disorder?', '**Light therapy**.'],
        ['Main contraindication to rTMS?', '**Metal** in or near the head.']
      ] },

    { id: 'lec-anxiety', week: 12, ch: 'Lecture slides · anxiety and OCD', title: 'Anxiety and OCD: lecture key points',
      short: 'Four levels of anxiety, defense mechanisms, anxiety disorders, panic care, behavior therapies, OCD and related disorders.',
      lead: '**Anxiety** is apprehension or dread from a real or perceived threat; **fear** is a reaction to a specific danger. Some anxiety is normal and needed. Know the **four levels** by what happens to the **perceptual field** and **problem solving**: mild sharpens it, moderate narrows it, severe greatly reduces it, panic loses touch with reality.',
      terms: [
        { t: 'Mild anxiety', see: 'Restless, fidgety, alert; sees and grasps more.', why: 'Everyday tension.', means: 'Problem solving **improves**; can help on exam day.' },
        { t: 'Moderate anxiety', see: '**Selective inattention**; sympathetic signs begin (voice tremor, sweating, headache).', why: 'Field narrows.', means: 'Clear thinking hampered; can still learn with direction.' },
        { t: 'Severe anxiety', see: 'Dazed, confused, **automatic** behavior; more body symptoms.', why: 'Perceptual field **greatly reduced**.', means: 'Cannot focus on the environment; needs direction.' },
        { t: 'Panic', see: '**Running, shouting, screaming, pacing**; impulsive; may hallucinate.', why: 'Unable to process reality.', means: '**Stay with the person**; low calm voice; short sentences; reduce stimuli.' },
        { t: 'Defense mechanisms', see: 'Automatic coping styles that block feelings, conflicts and memories.', why: 'Protect self-image from anxiety.', means: '**Adaptive** when they help reach goals acceptably; **maladaptive** when immature defenses are overused.' },
        { t: 'Exposure and response prevention (ERP)', see: 'Face the trigger, then **do not** do the ritual.', why: 'Shows that anxiety fades without the ritual.', means: '**First-line** CBT for OCD.' },
        { t: 'Flooding', see: 'A **large amount** of the trigger or a **long** exposure at once.', why: 'Extinguishes the response.', means: 'Lecture example: hand on a fork for **the whole hour** without a tissue = **flooding**.' },
        { t: 'Systematic desensitization', see: 'Step-by-step exposure from least to most feared, with relaxation.', why: 'Gradual unlearning of fear.', means: 'Common for phobias.' }
      ],
      cards: [
        { h: 'Anxiety disorders', b: ['**Separation anxiety disorder**: developmentally inappropriate worry about being away from an attachment figure.', '**Specific phobia**: persistent irrational fear of an object or situation → avoidance.', '**Social anxiety disorder**: fear of being judged negatively in social or performance situations.', '**Panic disorder**: panic attacks, an abrupt surge of fear that **peaks within minutes**, plus fear of the next attack.', '**Agoraphobia**: fear of places where **escape would be hard or embarrassing**.', '**GAD**: excessive worry for **months**. Also selective mutism, substance-induced, due to a medical condition.', 'Risk: genetic, biological, psychological, cultural.'] },
        { h: 'Nursing process for anxiety', b: ['Rule out physical causes (physical and neuro exam); primary vs secondary anxiety; current **level**; self-harm risk.', 'Diagnoses: anxiety and fear; difficulty coping; impaired socialization and low self-esteem.', 'Usually **community-based** care, not inpatient; involve the patient in planning (not possible at severe or panic levels).', '**Panic level**: stay, calm low voice, short clear repeated statements, quiet spot, **listen for themes**. Do not leave the person alone or overload with talk or activity.', 'Evaluate: lower anxiety, recognizes symptoms as anxiety, uses new behaviors, self-care, relationships, usual roles.'] },
        { h: 'Treatments for anxiety', b: ['Medicines: **SSRIs and SNRIs**, antianxiety drugs, other classes.', 'Behavior therapy: **modeling**, **systematic desensitization**, **flooding**, **thought stopping**; plus CBT.'] },
        { h: 'OCD and related disorders', b: ['**Obsessions**: recurring thoughts, impulses or images that cannot be dismissed. **Compulsions**: rituals done to reduce anxiety.', 'OCD: time-consuming (**more than 1 hour a day**), not due to a substance or another disorder.', '**Body dysmorphic disorder**: false beliefs about appearance, fear of rejection, perfectionism.', '**Hoarding**: letting go of any item is painful; collecting takes over life.', '**Trichotillomania** (hair pulling) and **excoriation** (skin picking to the point of damage) are body-focused repetitive behaviors.', 'Risk: child abuse and trauma, **post-infectious autoimmune** syndrome, first-degree relatives (**twice** the risk), anxiety, eating and tic disorders.'] },
        { h: 'Caring for OCD', b: ['Diagnoses: anxiety, **impaired skin integrity**, disturbed body image, risk for self-destructive behavior, impaired socialization.', 'Promote self-care; **monitor skin** (picking, pulling); teach **bathroom breaks**; watch for **UTIs** and set a toileting schedule.', 'Medicines: **SSRIs** (FDA-approved for OCD), **clomipramine** (TCA), **venlafaxine** (SNRI), some antipsychotics. None approved for BDD, hoarding, hair pulling or skin picking (SSRIs may help obsessive features).', 'Surgical: Gamma Knife lesions; **deep brain stimulation**.', 'Therapy: **ERP** is first line; flooding uses prolonged or large exposure.'] }
      ],
      recall: [
        ['Child missing in a mall; parent running and screaming. Level?', '**Panic**.'],
        ['Which level helps on exam day?', '**Mild**.'],
        ['Selective inattention: which level?', '**Moderate**.'],
        ['Best action at panic level?', '**Stay**, calm low voice, short sentences, quiet place.'],
        ['First-line therapy for OCD?', '**Exposure and response prevention**.'],
        ['Hand on a fork for the whole hour, no tissue (lecture answer)?', '**Flooding**.'],
        ['Two physical problems to watch in OCD rituals?', '**Skin damage** and **UTIs** (schedule bathroom breaks).']
      ] },

    { id: 'lec-suicide', week: 12, ch: 'Lecture slides · suicide and self-injury', title: 'Suicide and self-injury: lecture key points',
      short: 'Terms, who is at risk, assessment cues, lethality, unit safety, nurse reactions, postvention, NSSI six steps.',
      lead: '**Suicidal ideation** is thinking about killing oneself; a **suicide attempt** is self-injurious behavior **with intent to die**; **suicide** is the intentional act of killing oneself; **nonsuicidal self-injury (NSSI)** is intentional tissue damage **without** suicidal intent. Ask directly, judge the **lethality** of the plan, and treat a **sudden lift in mood** as a warning sign.',
      terms: [
        { t: 'Lethality', see: 'How likely a method is to cause death.', why: '“Hard” methods: **gunshot**, hanging, jumping. “Soft”: pills, cutting, gas.', means: 'A specific, available, highly lethal plan = highest risk.' },
        { t: 'Sudden mood lift', see: 'Withdrawn for days, then suddenly sociable and bright.', why: 'May reflect relief after **deciding** on suicide.', means: '**Reassess suicide risk**; do not assume improvement.' },
        { t: 'Postvention', see: 'Support for **survivors** after a suicide.', why: 'Grief after suicide is complicated and raises their own risk.', means: 'Part of the nursing plan and prevention.' },
        { t: 'NSSI', see: 'Cutting, burning, hitting without intent to die.', why: 'A way to cope with or relieve distress.', means: 'Six-step approach starting with **limit setting for safety**.' }
      ],
      cards: [
        { h: 'How common', b: ['**10th** leading cause of death in the US; **2nd for ages 10–34**; 4th for 35–54.', 'Age-adjusted rate rose **33%** (1999–2017): women **53%**, men 26%. White men ≈ **70%** of suicide deaths.', '**46%** of people who die by suicide had a diagnosed mental illness: depression, substance use, psychosis, anxiety, personality, eating and trauma disorders.'] },
        { h: 'Risk factors', b: ['Biological: family tendency (higher in identical twins), **low serotonin**.', 'Cognitive: Freud, aggression turned inward; Menninger, wish to kill, be killed, die; **Beck: hopelessness** is central.', 'Environmental: family conflict, low parental monitoring, **suicide clusters** (contagion). **Teens** are at highest risk: immature **prefrontal cortex** (judgment, impulse control).', 'Cultural: religion, family values, sexual orientation, **gender identity**, **bullying**, attitude toward death.', 'Social (most to least): **relationship problems**, recent crises, substance use, health, financial, legal, loss of housing.', 'Also: previous attempt, family history, hopelessness, impulsivity, local suicide epidemics.'] },
        { h: 'Assessment', b: ['Overt and **covert** statements and nonverbal clues.', '**Lethality** of the plan; history of attempts; family history; social supports.', '**Sudden switch from sad to happy**.', 'Ask plainly: “Have you been thinking about suicide? Do you have a plan? What is it?”', 'Nurse reactions: **fear, grief, anger, puzzlement, condemnation**. Acknowledge them to the team to avoid **countertransference**.'] },
        { h: 'Care in the hospital', b: ['Diagnoses: **risk for suicide**, self-care deficit, impaired sleep, poor nutrition, anxiety. Outcome: **suicide self-restraint**.', 'Interventions: teaching and prevention, case management, milieu therapy, **documentation**, **postvention** for survivors.', '**Environmental safety:** use and **count plastic utensils**; **no private room, door open**; jump-proof and hang-proof bathrooms; lock non-patient areas; check gifts; **search belongings with the patient present**; no harmful objects in or out.', 'Treatment: medicines for the coexisting disorder; brain stimulation; psychotherapy.'] },
        { h: 'Nonsuicidal self-injury (NSSI)', b: ['6–23% of people at some point; about **15%** of teens and 17–35% of college students; peaks at ages **20–29**; women 3–4 : 1.', 'Assessment: **empathy**, look for triggers, watch your own reactions (transference).', 'Diagnoses: risk for self-mutilation; self-mutilation.', '**Six steps:** (1) **limit setting for safety**, (2) developing self-esteem, (3) discovering the motive, (4) discovering self-control, (5) replacing with coping skills, (6) maintenance.', 'Care: treat injuries, therapeutic alliance, coping skills, reflective dialogue. Therapies: **CBT, DBT**, group.'] }
      ],
      recall: [
        ['Suicide attempt vs NSSI?', 'An attempt has **intent to die**; NSSI does **not**.'],
        ['Day 4: suddenly bright and sociable after two attempts. Do what?', '**Reassess suicide risk**.'],
        ['Highest-lethality method listed?', '**Self-inflicted gunshot**.'],
        ['Beck’s central factor?', '**Hopelessness**.'],
        ['Why are teens at highest risk?', 'Immature **prefrontal cortex** (impulse control).'],
        ['Searching belongings: when?', '**With the patient present**.'],
        ['First of the six NSSI steps?', '**Limit setting for safety**.']
      ] }
  ];

  // q(id, link, stem, [[text, why], ...], answer (index or indexes), why)
  // Options are written correct-first and rotated per question so the answer position varies.
  var qs = [];
  function q(id, link, stem, opts, a, why) {
    var n = opts.length, shift = id.split('').reduce(function (s, c) { return s + c.charCodeAt(0); }, 0) % n;
    var order = opts.map(function (_, i) { return (i + shift) % n; }), inv = [];
    order.forEach(function (from, to) { inv[from] = to; });
    var placed = []; order.forEach(function (from, to) { placed[to] = opts[from]; });
    qs.push({ id: 'q5-wk12-' + id, wk: 12, link: link, stem: stem, opts: placed.map(function (o) { return o[0]; }),
      a: Array.isArray(a) ? a.map(function (i) { return inv[i]; }).sort(function (x, y) { return x - y; }) : inv[a],
      why: why, optionWhy: placed.map(function (o) { return o[1]; }) });
  }
  var B = 't-lec-bipolar', D = 't-lec-depression', A = 't-lec-anxiety', S = 't-lec-suicide';

  // ---------- bipolar ----------
  q('bp-hypo', B, 'Which finding best distinguishes hypomania from mania?', [
    ['No marked impairment, psychosis or need for hospitalization', 'Correct: hypomania stays below the level of severe impairment, psychosis or inpatient care.'],
    ['Mood is elevated or irritable for several days in a row', 'Both mania and hypomania involve a distinctly elevated or irritable mood.'],
    ['Energy and goal-directed activity increase noticeably', 'Increased energy occurs in both.'],
    ['It occurs only in people who have also had major depression', 'Bipolar II requires depression, but hypomania itself is defined by severity, not by depression.']], 0,
    'Hypomania is a lower-level mania that does **not** cause marked impairment, psychosis or hospitalization.');
  q('bp-type1', B, 'A client has had one manic episode that required hospitalization and has never had a depressive episode. Which diagnosis fits?', [
    ['Bipolar I disorder', 'Correct: one manic episode is enough; depression is not required.'],
    ['Bipolar II disorder', 'Bipolar II needs hypomania plus a major depressive episode, and no full mania.'],
    ['Cyclothymic disorder', 'Cyclothymia is milder alternating symptoms for 2 years.'],
    ['Persistent depressive disorder', 'That is chronic low-level depression without mania.']], 0,
    '**Bipolar I** = at least one manic episode. A major depressive episode may occur but is not required.');
  q('bp-cyclo', B, 'Which description matches cyclothymic disorder in an adult?', [
    ['Alternating hypomanic and mild depressive symptoms for 2+ years', 'Correct: this is the cyclothymic pattern.'],
    ['At least one hypomanic episode and one major depressive episode', 'That describes bipolar II.'],
    ['At least one full manic episode that may require hospitalization', 'That describes bipolar I.'],
    ['Low-level depression most days for 2 years with no elevated mood', 'That describes persistent depressive disorder.']], 0,
    'Cyclothymic disorder: alternating hypomanic and mild-to-moderate depressive symptoms for **2 years** (1 year in children); rapid cycling is possible.');
  q('bp-clang', B, 'A client in mania says, “I need the bill, the pill, the hill, I’m a thrill.” Which term should the nurse document?', [
    ['Clang associations', 'Correct: words are chosen for their sound (rhyme).'],
    ['Flight of ideas', 'Flight of ideas jumps between topics with some connection, not rhyming.'],
    ['Tangential speech', 'Tangential speech drifts away from the point and never returns.'],
    ['Circumstantial speech', 'Circumstantial speech adds detail but eventually reaches the point.']], 0,
    '**Clang associations** link words by sound rather than meaning.');
  q('bp-grand', B, 'A client in mania insists that a famous director is making a film of her life story. Which symptom is this?', [
    ['Grandiose delusion', 'Correct: a highly inflated sense of importance.'],
    ['Persecutory delusion', 'Persecutory delusions involve being harmed or plotted against.'],
    ['Flight of ideas', 'Flight of ideas is a speech pattern, not a belief.'],
    ['Loose associations', 'Loose associations are unrelated ideas strung together.']], 0,
    '**Grandiose delusions** show inflated self-regard, often claiming fame, special powers or famous friends.');
  q('bp-split', B, 'A client in mania tells a second nurse that the first nurse approved a midnight movie, which is not true. What is the best team response?', [
    ['Meet as a team and enforce the same limits consistently', 'Correct: staff unity and consistent limits counter splitting.'],
    ['Allow the movie this once to prevent escalation', 'Giving in rewards manipulation and teaches that limits can be split.'],
    ['Confront the client in the dayroom about lying', 'Public confrontation escalates and shames; firm, neutral limits work better.'],
    ['Let the client choose which nurse to ask for permission', 'This invites more splitting.']], 0,
    'Manipulation and **splitting** are common in mania. Frequent staff meetings and **consistent limit setting** are the main theme of care.');
  q('bp-comm', B, 'Which approach is most effective when talking with a client in acute mania?', [
    ['Firm, calm, short statements with concrete expectations', 'Correct: structure and brevity reduce stimulation and manipulation.'],
    ['Detailed explanations of the reasons for every unit rule', 'Long explanations overstimulate and invite argument.'],
    ['Long discussions that let the client explore each new idea', 'Following racing thoughts increases stimulation.'],
    ['Letting the client plan the unit schedule to build trust', 'The client needs external structure, not control of the unit.']], 0,
    'Use a **firm, calm** approach with **short, concise** explanations and expectations in **simple, concrete** terms.');
  q('bp-redirect', B, 'Which strategy uses a manic client’s distractibility therapeutically?', [
    ['Redirect energy into a structured, low-stimulation activity', 'Correct: redirection is the most effective tool in mania.'],
    ['Encourage the client to join a lively group game in the dayroom', 'Competitive, crowded activities overstimulate.'],
    ['Let the client keep pacing without any staff involvement', 'Unchecked activity leads to exhaustion.'],
    ['Explain the dangers of mania until the client agrees to rest', 'Reasoning at length does not work during racing thoughts.']], 0,
    '**Distractibility is the most effective tool**: firmly redirect energy into appropriate, calmer channels.');
  q('bp-food', B, 'A client in mania will not sit down to eat and has lost 6 pounds in a week. Which intervention is best?', [
    ['Offer high-calorie finger foods to eat while moving', 'Correct: portable, nutrient-dense food fits hyperactivity.'],
    ['Require the client to finish meals at the table before leaving', 'The client cannot sit long enough; this sets up a power struggle.'],
    ['Hold snacks until the client eats a complete sit-down meal', 'Withholding food worsens the deficit.'],
    ['Request an order for tube feedings to stop the weight loss', 'Too invasive as a first step.']], 0,
    'Provide **high-calorie, high-protein finger foods** and fluids the client can take while pacing.');
  q('bp-priority', B, 'Which client on the unit should the nurse assess first?', [
    ['A client in mania awake for 72 hours with tachycardia', 'Correct: exhaustion and tachycardia can lead to collapse or arrhythmia.'],
    ['A client with bipolar II who is tearful and waking early', 'Needs assessment, but is not physically unstable.'],
    ['A client on valproate whose level is slightly below range', 'Routine follow-up with the prescriber.'],
    ['A client in mania who is pacing and speaking in rhymes', 'Expected manic behavior without physical danger signs.']], 0,
    'Extreme **sleep deprivation and hyperactivity** can cause dehydration, arrhythmias and physical collapse.');
  q('bp-li-ok', B, 'A client’s lithium level is 0.9 mEq/L. The client reports a fine hand tremor, mild nausea and thirst. What should the nurse do?', [
    ['These are expected at a therapeutic level; continue and monitor', 'Correct: 0.6–1.2 mEq/L is therapeutic and these are common side effects.'],
    ['Hold the next dose and report probable early lithium toxicity to the provider', 'Toxicity shows coarse tremor, vomiting and diarrhea, ataxia, confusion.'],
    ['Restrict fluids to reduce the thirst and frequent urination', 'Fluid restriction can raise lithium levels.'],
    ['Request a higher dose because the level is near the low end', 'The level is in the therapeutic range.']], 0,
    'Maintenance range is **0.6–1.2 mEq/L**. Fine tremor, mild nausea, thirst and urination are **expected**.');
  q('bp-li-tox', B, 'Which findings in a client taking lithium suggest toxicity? Select all that apply.', [
    ['Coarse hand tremor', 'Correct: a fine tremor becoming coarse signals rising levels.'],
    ['Persistent vomiting and diarrhea', 'Correct: GI losses are an early sign and also raise levels.'],
    ['Unsteady gait', 'Correct: ataxia is a neurologic sign of toxicity.'],
    ['New confusion', 'Correct: confusion signals significant toxicity.'],
    ['A fine tremor present since starting', 'A stable fine tremor is a common expected effect.']], [0, 1, 2, 3],
    'Toxicity: **coarse tremor, vomiting and diarrhea, ataxia, confusion**. Hold the dose and get a level.');
  q('bp-li-long', B, 'Which long-term effects of lithium should the nurse teach the client and family to have checked? Select all that apply.', [
    ['Thyroid function', 'Correct: hypothyroidism is a major long-term risk.'],
    ['Kidney function', 'Correct: lithium can impair the kidneys’ ability to concentrate urine.'],
    ['Liver enzymes', 'Liver monitoring is key for valproate.'],
    ['Platelet count', 'Platelets are monitored with valproate.'],
    ['Absolute neutrophil count', 'ANC is the clozapine monitor.']], [0, 1],
    'Two major long-term risks of lithium: **hypothyroidism** and **kidney** concentrating problems.');
  q('bp-li-nsaid', B, 'A client on lithium asks what to take for a sinus headache. What is the best response?', [
    ['Acetaminophen, because NSAIDs can raise lithium levels', 'Correct: NSAIDs reduce kidney clearance of lithium.'],
    ['Ibuprofen is fine as long as it is taken with food or milk', 'Food does not prevent the kidney interaction.'],
    ['Naproxen, because it does not affect lithium', 'Naproxen is an NSAID and raises lithium levels.'],
    ['Any pain reliever, as long as salt intake is doubled', 'Sodium should stay consistent, not be doubled.']], 0,
    'NSAIDs (ibuprofen, naproxen) **raise** lithium levels. **Acetaminophen** is the safer choice.');
  q('bp-lamo', B, 'Two weeks after starting lamotrigine, a client reports a painful, blistering rash with fever. What is the priority?', [
    ['Stop it and get emergency evaluation for possible SJS', 'Correct: lamotrigine has a boxed warning for life-threatening rash.'],
    ['Apply hydrocortisone cream and recheck in 24 hours', 'Delaying care risks Stevens-Johnson syndrome progressing.'],
    ['Take an antihistamine and continue the dose', 'Continuing the drug can worsen a serious reaction.'],
    ['Cut the dose in half and schedule a routine visit next week', 'A blistering rash needs emergency care, not a dose change.']], 0,
    'Any serious rash on **lamotrigine** → stop the drug and get **emergency** care (Stevens-Johnson syndrome).');
  q('bp-anticonv', B, 'Which medicine prescribed for bipolar disorder is an anticonvulsant?', [
    ['Divalproex (Depakote)', 'Correct: valproate is an anticonvulsant mood stabilizer.'],
    ['Quetiapine (Seroquel)', 'A second-generation antipsychotic.'],
    ['Lithium carbonate', 'A mood stabilizer, but not an anticonvulsant.'],
    ['Cariprazine (Vraylar)', 'A second-generation antipsychotic.']], 0,
    'Anticonvulsants used in bipolar disorder: **valproate/divalproex**, **carbamazepine**, **lamotrigine**.');
  q('bp-ect', B, 'Immediately after an ECT treatment, what is the nurse’s priority?', [
    ['Airway, vital signs and orientation as the client wakes', 'Correct: the client is emerging from anesthesia and a seizure.'],
    ['Give the scheduled morning lithium dose right away to prevent relapse', 'Medicine is not the immediate priority.'],
    ['Apply soft wrist restraints for post-seizure movement', 'Restraints are not routine after ECT.'],
    ['Check all cranial nerves every 5 minutes', 'Not indicated; focus on ABCs and orientation.']], 0,
    'After ECT: **ABCs**, vital signs and **reorientation** during post-ictal confusion.');
  q('bp-seclusion', B, 'Before seclusion is used for a client in mania, what must the documentation show? Select all that apply.', [
    ['A substantial risk of harm to self or others', 'Correct.'],
    ['The client is unable to control their actions', 'Correct.'],
    ['Less restrictive measures have failed', 'Correct.'],
    ['The client refuses to follow lights-out', 'Rule-breaking alone does not justify seclusion.'],
    ['The unit is short-staffed tonight', 'Staffing is never a reason for seclusion.']], [0, 1, 2],
    'Seclusion or restraint requires documented **substantial risk of harm**, **inability to control actions** and **failure of other measures**.');
  q('bp-maint', B, 'Which teaching best helps prevent relapse in bipolar disorder?', [
    ['Keep regular sleep, meals and daily routines', 'Correct: regularity stabilizes mood (social rhythm).'],
    ['Stop lithium once mood has been stable for a month', 'Bipolar disorder usually needs lifelong medicine.'],
    ['Use extra energy by staying up late on weekends', 'Sleep loss can trigger mania.'],
    ['Replace mood stabilizers with omega-3 supplements', 'Omega-3s have no evidence for mania.']], 0,
    'Teach the recurrent nature, warning signs and **regularity of sleep, meals, exercise and activities**.');
  q('bp-ipsrt', B, 'Which therapy aims to stabilize daily routines and relationships to prevent bipolar relapse?', [
    ['Interpersonal and social rhythm therapy', 'Correct.'],
    ['Family-focused therapy', 'This improves communication among family members.'],
    ['Cognitive-behavioral therapy', 'CBT targets adherence, early warning signs and thinking patterns.'],
    ['Systematic desensitization', 'A behavior therapy for phobias.']], 0,
    '**Interpersonal and social rhythm therapy** regulates routines and relationships.');

  // ---------- depressive disorders ----------
  q('dp-anhed', D, 'A college student no longer enjoys his classes or the online games he used to love. Which term fits?', [
    ['Anhedonia', 'Correct: loss of interest or pleasure.'],
    ['Anergia', 'Anergia is lack of energy.'],
    ['Avolition', 'Avolition is lack of motivation to start activities.'],
    ['Alogia', 'Alogia is poverty of speech.']], 0,
    '**Anhedonia** (without pleasure) is one of the two core symptoms of MDD.');
  q('dp-psychomotor', D, 'A client with depression walks, moves and answers very slowly. Which term should the nurse document?', [
    ['Psychomotor retardation', 'Correct.'],
    ['Psychomotor agitation', 'Agitation is restless, increased movement.'],
    ['Flat affect', 'Flat affect is reduced emotional expression, not slowed movement.'],
    ['Catatonic excitement', 'That is purposeless overactivity.']], 0,
    '**Psychomotor retardation** is slowed thought and movement.');
  q('dp-veg', D, 'Which assessment finding in a client with major depression is a vegetative sign?', [
    ['Hypersomnia', 'Correct: a change in a basic body function (sleep).'],
    ['Feelings of guilt', 'An emotional symptom.'],
    ['Frequent crying', 'An emotional expression.'],
    ['Poor concentration', 'A cognitive symptom.']], 0,
    '**Vegetative signs**: changes in sleep, appetite, elimination, sexual patterns and hygiene.');
  q('dp-mdd', D, 'Which is required for a diagnosis of major depressive disorder?', [
    ['Depressed mood or anhedonia during a 2-week period', 'Correct, with at least five symptoms in total.'],
    ['Five or more symptoms that have lasted at least 6 months', 'Two weeks is the minimum, not 6 months.'],
    ['At least one past hypomanic episode', 'A hypomanic or manic episode rules out MDD.'],
    ['Low mood on most days for at least 2 years', 'That describes persistent depressive disorder.']], 0,
    'MDD: **5+ symptoms in 2 weeks**, including **depressed mood or anhedonia**, and no mania or hypomania.');
  q('dp-dmdd', D, 'An 8-year-old has constant irritability and severe temper outbursts four times a week at home and at school. Which diagnosis is most likely?', [
    ['Disruptive mood dysregulation disorder', 'Correct: ages 6–18, outbursts 3+ times a week in 2+ settings.'],
    ['Persistent depressive disorder', 'That is chronic low mood, not explosive outbursts.'],
    ['Bipolar I disorder', 'DMDD lacks distinct manic episodes.'],
    ['Separation anxiety disorder', 'That centers on fear of being apart from attachment figures.']], 0,
    '**DMDD**: ages 6–18; severe irritability; outbursts out of proportion at least 3 times a week in at least 2 settings.');
  q('dp-pdd', D, 'For a 15-year-old, persistent depressive disorder requires symptoms for at least how long?', [
    ['1 year', 'Correct: 1 year for children and adolescents.'],
    ['2 weeks', 'Two weeks is the MDD minimum.'],
    ['6 months', 'Not the PDD criterion.'],
    ['2 years', 'Two years applies to adults.']], 0,
    'Persistent depressive disorder (dysthymia): **2 years** in adults, **1 year** in children and teens.');
  q('dp-pmdd', D, 'Mood swings, irritability and poor concentration start the week before menses and ease when menstruation begins. Which disorder fits?', [
    ['Premenstrual dysphoric disorder', 'Correct.'],
    ['Cyclothymic disorder', 'Cyclothymia is not tied to the menstrual cycle.'],
    ['Persistent depressive disorder', 'PDD is present most days, not cyclically.'],
    ['Substance-induced depressive disorder', 'No substance is involved.']], 0,
    '**PMDD** symptoms cluster in the last week before menses and fade with its onset.');
  q('dp-silent', D, 'A client with severe depression sits silently during a one-to-one session. What is the best approach?', [
    ['Sit with the client and make simple observations', 'Correct: presence plus observations reinforces reality without pressure.'],
    ['Ask a series of direct questions about feelings', 'Direct questions add pressure when a client is silent.'],
    ['Leave and come back when the client is ready to talk', 'Leaving can feel like rejection.'],
    ['Say, “Things will look brighter soon, you’ll see.”', 'A platitude that dismisses the feeling.']], 0,
    'With silence: **avoid direct questions**; stay and **make observations**. Avoid platitudes.');
  q('dp-first-q', D, 'Which question takes priority when assessing a client with depression?', [
    ['“Have you had any thoughts of harming yourself?”', 'Correct: safety comes first.'],
    ['“How many hours of sleep do you usually get each night?”', 'Important, but safety comes first.'],
    ['“What do you usually eat during a typical day?”', 'Important, but safety comes first.'],
    ['“When did you first start feeling this sad?”', 'History matters, but suicide risk comes first.']], 0,
    '**Safety is always the priority**: assess suicide risk first.');
  q('dp-phase', D, 'How long does the continuation phase of depression treatment usually last?', [
    ['4 to 9 months', 'Correct.'],
    ['6 to 12 weeks', 'That is the acute phase.'],
    ['1 year or more', 'That is the maintenance phase.'],
    ['2 weeks', 'Too short for any phase.']], 0,
    'Phases: **acute 6–12 weeks**, **continuation 4–9 months**, **maintenance 1 year or more**.');
  q('dp-ssri-se', D, 'A client is starting an SSRI. Which effects should the nurse include in teaching? Select all that apply.', [
    ['Sexual dysfunction', 'Correct: often the most bothersome effect.'],
    ['Nausea or loose stools', 'Correct: common GI effects.'],
    ['Sleep changes or agitation', 'Correct.'],
    ['A tyramine-free diet', 'Tyramine restriction is for MAOIs.'],
    ['Hypertensive crisis with aged cheese', 'That is an MAOI interaction.']], [0, 1, 2],
    'SSRI effects: agitation, anxiety, sleep change, tremor, **sexual dysfunction**, headache, sweating, weight change, nausea, loose stools.');
  q('dp-ect-ind', D, 'For which client is ECT most likely to be the primary treatment?', [
    ['Severe depression with dehydration and not eating', 'Correct: ECT works quickly when the body is at risk.'],
    ['Mild depression that is responding well to sertraline', 'Continue the effective medicine.'],
    ['Generalized anxiety disorder with daily worry', 'ECT is not a treatment for GAD.'],
    ['Depression that returns each winter', 'Light therapy is first line for seasonal depression.']], 0,
    'ECT is the **most effective** depression treatment and first choice with severe malnutrition, exhaustion, dehydration, delusional depression or failed medicines.');
  q('dp-rtms', D, 'Which statement about repetitive transcranial magnetic stimulation (rTMS) is accurate?', [
    ['Metal in or near the head is the main contraindication', 'Correct: it uses MRI-strength magnetic pulses.'],
    ['It requires general anesthesia and often causes memory loss', 'That describes ECT; rTMS causes no memory problems.'],
    ['It is FDA-approved for bipolar depression', 'It is approved for treatment-resistant major depression only.'],
    ['Electrodes are surgically implanted in the brain', 'That describes deep brain stimulation.']], 0,
    '**rTMS** is noninvasive; metal is the main contraindication; headache and scalp tingling are common.');
  q('dp-vns', D, 'Which side effect is most common with vagus nerve stimulation?', [
    ['Voice changes', 'Correct: about 60% of patients.'],
    ['Memory loss', 'Associated with ECT, not VNS.'],
    ['Frequent seizures', 'VNS was developed to reduce seizures.'],
    ['Significant weight gain', 'Not a typical VNS effect.']], 0,
    '**VNS**: voice alteration (about 60%), neck pain, cough, numbness and shortness of breath that lessen over time.');
  q('dp-light', D, 'Which treatment is first line for seasonal affective disorder?', [
    ['Light therapy', 'Correct.'],
    ['Deep brain stimulation', 'An invasive option for treatment-resistant depression.'],
    ['Electroconvulsive therapy', 'Reserved for severe or resistant depression.'],
    ['St. John’s wort', 'Used for mild to moderate depression, not first line for SAD.']], 0,
    '**Light therapy** is first line for SAD and is as effective as medicine for it.');
  q('dp-sjw', D, 'A client taking sertraline wants to add St. John’s wort. What should the nurse teach?', [
    ['It can cause serotonin syndrome when combined with sertraline', 'Correct.'],
    ['It is safe to combine with sertraline because it is a natural product', 'Natural products can still interact.'],
    ['It works best for severe depression with psychosis', 'It is used for mild to moderate depression.'],
    ['It requires the same diet restrictions as an MAOI', 'There is no tyramine diet for St. John’s wort.']], 0,
    '**St. John’s wort** increases serotonin, norepinephrine and dopamine: risk of **serotonin syndrome** with an SSRI.');
  q('dp-ppd', D, 'The lecture slides name brexanolone (Zulresso) as the only drug for postpartum depression. What is the current fact?', [
    ['Withdrawn in the US in 2025; oral zuranolone is now approved', 'Correct: zuranolone (Zurzuvae) was approved in 2023.'],
    ['It is a daily oral tablet approved for many types of depression', 'Brexanolone was an IV infusion for postpartum depression.'],
    ['It is a nasal spray that blocks NMDA receptors', 'That describes esketamine.'],
    ['It is the first-line treatment for seasonal depression', 'Light therapy is first line for seasonal depression.']], 0,
    'For your class exam, answer as taught (brexanolone for postpartum depression). In practice: brexanolone was **withdrawn in 2025** and **zuranolone** is the current postpartum-depression medicine.');

  // ---------- anxiety and OCD ----------
  q('ax-panic', A, 'A parent realizes their child is missing in a crowded mall and begins running and screaming. Which level of anxiety is this?', [
    ['Panic', 'Correct: disturbed behavior and loss of reality processing.'],
    ['Severe', 'Severe anxiety is dazed, confused, automatic behavior.'],
    ['Moderate', 'Moderate anxiety narrows attention but behavior stays controlled.'],
    ['Mild', 'Mild anxiety sharpens focus.']], 0,
    '**Panic**: running, shouting, screaming, pacing; impulsive; unable to process reality.');
  q('ax-mild', A, 'Which level of anxiety can actually help on the day of a nursing exam?', [
    ['Mild', 'Correct: perception sharpens and problem solving improves.'],
    ['Moderate', 'Selective inattention makes problem solving less effective.'],
    ['Severe', 'The perceptual field is greatly reduced.'],
    ['Panic', 'Reality processing is lost.']], 0,
    '**Mild** anxiety helps a person see, hear and grasp more.');
  q('ax-mod', A, 'A student hears only the instructor’s voice and misses other details, and clear thinking is harder. Which level of anxiety is this?', [
    ['Moderate', 'Correct: selective inattention.'],
    ['Mild', 'Mild anxiety widens awareness.'],
    ['Severe', 'Severe anxiety brings confusion and automatic behavior.'],
    ['Panic', 'Panic causes disturbed behavior.']], 0,
    '**Moderate**: selective inattention; clear thinking hampered; sympathetic symptoms begin.');
  q('ax-severe', A, 'A client appears dazed and confused, performs automatic behaviors and cannot focus on the surroundings. Which level of anxiety is this?', [
    ['Severe', 'Correct: perceptual field greatly reduced.'],
    ['Moderate', 'Moderate anxiety still allows directed focus.'],
    ['Panic', 'Panic shows running, shouting or screaming.'],
    ['Mild', 'Mild anxiety improves focus.']], 0,
    '**Severe**: perceptual field greatly reduced, confused automatic behavior, more body symptoms.');
  q('ax-panic-care', A, 'Which nursing action is best for a client at a panic level of anxiety?', [
    ['Stay with the client in a quiet spot and speak calmly', 'Correct.'],
    ['Leave the client alone in a dark room to calm down', 'Never leave a person in panic alone.'],
    ['Keep up a steady stream of conversation as a distraction', 'Constant talk overloads; listen instead.'],
    ['Teach a new breathing technique step by step', 'New learning is not possible at panic level.']], 0,
    'At panic level: **stay**, low calm voice, short clear repeated statements, fewer stimuli, **listen for themes**.');
  q('ax-agora', A, 'A client avoids buses, crowds and stores because escape might be difficult or embarrassing. Which disorder fits?', [
    ['Agoraphobia', 'Correct.'],
    ['Social anxiety disorder', 'Social anxiety centers on being judged by others.'],
    ['Specific phobia', 'A specific phobia targets one object or situation.'],
    ['Generalized anxiety disorder', 'GAD is broad excessive worry for months.']], 0,
    '**Agoraphobia**: fear of places or situations where escape might be hard or embarrassing.');
  q('ax-desens', A, 'A client afraid of dogs looks at pictures, then videos, then a real dog while practicing relaxation. Which therapy is this?', [
    ['Systematic desensitization', 'Correct: graded exposure with relaxation.'],
    ['Flooding', 'Flooding is a large or prolonged exposure all at once.'],
    ['Thought stopping', 'Thought stopping interrupts unwanted thoughts.'],
    ['Modeling', 'Modeling is learning by watching someone else.']], 0,
    '**Systematic desensitization** moves step by step from least to most feared.');
  q('ax-flood', A, 'A therapist asks a client with contamination fears to keep a hand on a restaurant fork for the whole hour without wiping it. According to the lecture, this is:', [
    ['Flooding', 'Correct (instructor’s answer): the exposure is prolonged and intense.'],
    ['Exposure and response prevention', 'Close, but the lecture labels a full-hour, intense exposure as flooding.'],
    ['Cognitive restructuring', 'That challenges thoughts rather than using exposure.'],
    ['Relaxation training', 'No relaxation technique is being taught.']], 0,
    'The two closest choices are flooding and ERP. The lecture answer is **flooding** because the exposure lasts the whole hour.');
  q('ax-erp', A, 'Which is the first-line cognitive-behavioral treatment for obsessive-compulsive behaviors?', [
    ['Exposure and response prevention', 'Correct.'],
    ['Flooding', 'Used, but not first line.'],
    ['Thought stopping', 'Not first line for OCD.'],
    ['Modeling', 'Not first line for OCD.']], 0,
    '**ERP**: face the trigger without doing the ritual, and learn that anxiety fades anyway.');
  q('ax-ocd-care', A, 'Which nursing interventions belong in the care of a client who spends hours on rituals? Select all that apply.', [
    ['Schedule bathroom breaks and watch for UTIs', 'Correct: rituals can keep clients from voiding.'],
    ['Monitor the skin for damage from washing or picking', 'Correct.'],
    ['Stop all rituals abruptly on admission', 'Abruptly stopping rituals spikes anxiety.'],
    ['Limit fluids to reduce trips to the bathroom', 'This raises UTI and dehydration risk.'],
    ['Remove all personal items from the room', 'Not an OCD intervention.']], [0, 1],
    'Basic OCD care: promote self-care, **monitor skin**, teach **bathroom breaks**, watch for **UTIs**.');
  q('ax-ocd-meds', A, 'Which medicines are used to treat OCD? Select all that apply.', [
    ['SSRIs', 'Correct: FDA-approved for OCD.'],
    ['Clomipramine', 'Correct: a TCA used for OCD.'],
    ['Venlafaxine', 'Correct: an SNRI option.'],
    ['Some antipsychotics', 'Correct: used as add-ons.'],
    ['Methylphenidate', 'A stimulant for ADHD.']], [0, 1, 2, 3],
    'OCD medicines: **SSRIs**, **clomipramine**, **venlafaxine**, some antipsychotics.');
  q('ax-excor', A, 'Repeatedly picking at the skin on the face and hands until it is damaged describes which disorder?', [
    ['Excoriation disorder', 'Correct.'],
    ['Trichotillomania', 'That is hair pulling.'],
    ['Body dysmorphic disorder', 'That is preoccupation with a perceived flaw in appearance.'],
    ['Hoarding disorder', 'That is difficulty discarding items.']], 0,
    '**Excoriation** (skin picking) and **trichotillomania** (hair pulling) are body-focused repetitive behaviors.');
  q('ax-defense', A, 'When does the use of defense mechanisms become maladaptive?', [
    ['When immature defenses are overused', 'Correct.'],
    ['Whenever a defense lowers anxiety', 'Lowering anxiety can be adaptive.'],
    ['When a defense helps a person reach goals acceptably', 'That is adaptive use.'],
    ['When the person is unaware of using a defense', 'Defenses are usually automatic and unconscious.']], 0,
    'Defenses are **adaptive** when they help reach goals acceptably; **maladaptive** with overuse of immature defenses.');
  q('ax-setting', A, 'Where are most clients with anxiety disorders treated?', [
    ['In community-based, outpatient care', 'Correct.'],
    ['On an inpatient psychiatric unit', 'Inpatient admission is usually not required.'],
    ['In long-term residential treatment programs', 'Not typical for anxiety disorders.'],
    ['In the emergency department', 'Only for acute crises.']], 0,
    'Patients with anxiety disorders usually do **not** need admission; planning uses **community-based** interventions.');

  // ---------- suicide and self-injury ----------
  q('sx-lift', S, 'A client admitted after two suicide attempts was withdrawn for 2 days. On day 4 she is suddenly sociable, eating and bright. What should the nurse do?', [
    ['Reassess suicide risk, since a decision can bring relief', 'Correct: a sudden lift in mood is a warning sign.'],
    ['Prepare for discharge, since she is clearly improving', 'Improvement must be confirmed over time.'],
    ['Credit the antidepressant started 4 days ago', 'Antidepressants take weeks to work.'],
    ['Reduce her observation level to support growing independence', 'Observation should not drop on a sudden change.']], 0,
    'A **sudden switch from sad to happy** may mean the person has decided on suicide. **Reassess**.');
  q('sx-lethal', S, 'Which suicide method has the highest lethality?', [
    ['Self-inflicted gunshot wound', 'Correct: a “hard” method.'],
    ['Swallowing a bottle of pills', 'A lower-lethality (“soft”) method.'],
    ['Cutting the wrists', 'A lower-lethality method.'],
    ['Inhaling natural gas', 'Listed in the lecture as a lower-lethality method.']], 0,
    'Gunshot, hanging and jumping are **high-lethality** methods.');
  q('sx-env', S, 'Which measures belong in suicide precautions on an inpatient unit? Select all that apply.', [
    ['Use and count plastic utensils', 'Correct.'],
    ['Search belongings with the patient present', 'Correct.'],
    ['Keep the patient out of a private room, with the door open', 'Correct.'],
    ['Search belongings while the patient is at group', 'Searches are done in the patient’s presence.'],
    ['Allow gifts from visitors without checking them', 'Gifts must be checked for harmful items.']], [0, 1, 2],
    'Unit safety: plastic utensils (counted), no private room and door open, jump- and hang-proof bathrooms, locked non-patient areas, gifts checked, **search with the patient present**.');
  q('sx-beck', S, 'According to Aaron Beck, what is the central emotional factor in suicide?', [
    ['Hopelessness', 'Correct.'],
    ['Aggression turned inward', 'That is Freud’s view.'],
    ['The wish to be killed', 'One of Menninger’s three parts.'],
    ['Low serotonin levels', 'A biological factor, not Beck’s cognitive factor.']], 0,
    'Beck: **hopelessness**. Freud: aggression turned inward. Menninger: wish to kill, be killed, die.');
  q('sx-teen', S, 'Why are adolescents at especially high risk for suicide?', [
    ['An immature prefrontal cortex limits impulse control', 'Correct.'],
    ['They have higher rates of diagnosed depression than adults', 'Not the reason given in the lecture.'],
    ['They rarely show warning signs before an attempt', 'Warning signs are often present.'],
    ['Suicide clusters mainly affect older adults', 'Clusters (contagion) particularly affect teens.']], 0,
    'Teens’ **immature prefrontal cortex** affects judgment, frustration tolerance and impulse control.');
  q('sx-nssi', S, 'Intentional damage to one’s own body tissue without suicidal intent is called:', [
    ['Nonsuicidal self-injury', 'Correct.'],
    ['A suicide attempt', 'An attempt involves intent to die.'],
    ['Suicidal ideation', 'Ideation is thinking about killing oneself.'],
    ['Passive death wish', 'A thought, not tissue damage.']], 0,
    '**NSSI**: intentional tissue damage, **without** suicidal intent, not socially or culturally sanctioned.');
  q('sx-react', S, 'A nurse feels angry at a patient after a suicide attempt. What is the best action?', [
    ['Share the feeling with the team to avoid countertransference', 'Correct.'],
    ['Avoid the patient until the feeling passes', 'Avoidance harms care.'],
    ['Tell the patient the attempt was selfish', 'This is judgmental and harmful.'],
    ['Ask to be moved to a different unit for the rest of the shift', 'Not the first step; talk with the team.']], 0,
    'Fear, grief, anger, puzzlement and condemnation are expected. **Acknowledge them to the team**.');
  q('sx-sixstep', S, 'In the six-step approach to nonsuicidal self-injury, which step comes first?', [
    ['Limit setting for safety', 'Correct.'],
    ['Developing self-esteem', 'Step 2.'],
    ['Discovering the motive', 'Step 3.'],
    ['Replacing with coping skills', 'Step 5.']], 0,
    'Six steps: **limit setting for safety**, self-esteem, motive, self-control, coping skills, maintenance.');
  q('sx-postv', S, 'What does “postvention” refer to?', [
    ['Support for survivors after a suicide', 'Correct.'],
    ['Safety planning before discharge', 'That is part of prevention.'],
    ['Removing hazards from the unit', 'That is environmental safety.'],
    ['Screening tools used in the emergency department', 'That is risk assessment.']], 0,
    '**Postvention** supports the people left behind after a suicide.');
  q('sx-age', S, 'Suicide is the second leading cause of death for which age group?', [
    ['10 to 34 years', 'Correct.'],
    ['35 to 54 years', 'It is the 4th leading cause in this group.'],
    ['55 to 64 years', 'Not the lecture figure.'],
    ['65 years and older', 'Not the lecture figure.']], 0,
    'Suicide: 10th leading cause overall; **2nd for ages 10–34**; 4th for 35–54.');
  q('sx-social', S, 'Which social factor is listed first (most common) among suicide risk factors?', [
    ['Relationship problems', 'Correct.'],
    ['Financial problems', 'Listed later.'],
    ['Legal problems', 'Listed later.'],
    ['Loss of housing', 'Listed last.']], 0,
    'Social factors in descending order: **relationship problems**, recent crises, substance use, health, financial, legal, housing.');
  q('sx-dbt', S, 'Which therapy is specifically used to help people who self-injure manage emotions and distress?', [
    ['Dialectical behavior therapy', 'Correct.'],
    ['Electroconvulsive therapy', 'A brain stimulation treatment for depression.'],
    ['Flooding', 'An exposure therapy for anxiety.'],
    ['Light therapy', 'A treatment for seasonal depression.']], 0,
    'Therapies for NSSI: **CBT, DBT** and group therapy.');

  return { topics: topics, qs: qs };
});
