// Exam 5 concept layer for the shared Learn → Test → Review engine (e5-diagnostic.js, built from Exam 4's).
// Groups the week-12 lecture (bipolar, depression, anxiety/OCD, suicide) and the Exam 5 chapters into concepts,
// and links every existing Exam 5 and week-12 question to one of them. Load after the page has merged MH_Q/MH_TOPICS.
(function (root, factory) {
  var data = factory(root);
  if (typeof module === 'object' && module.exports) module.exports = data; else root.E5DiagnosticData = data;
})(typeof window !== 'undefined' ? window : globalThis, function (root) {
  'use strict';
  var GROUPS = [
    ['mood', 'Bipolar and depression (week 12)'], ['anx', 'Anxiety and OCD (week 12)'], ['sui', 'Suicide and self-injury (week 12)'],
    ['psy', 'Schizophrenia and antipsychotics'], ['som', 'Somatic and dissociative'], ['kid', 'Children and adolescents'],
    ['eat', 'Eating disorders'], ['sub', 'Substance use'], ['per', 'Personality disorders'], ['neu', 'Neurocognitive disorders']
  ];
  var groupIds = GROUPS.map(function (g) { return g[0]; });
  function groupName(id) { var g = GROUPS.find(function (x) { return x[0] === id; }); return g ? g[1] : String(id); }
  var LECTURE = 'Week 2 Mental Health lecture slides';
  var concepts = [];
  function add(id, group, title, link, mechanism, cues, action, evaluate, ask, key, sections) {
    var c = { id: id, chapter: group, title: title, link: link, mechanism: mechanism, cues: cues, action: action, evaluate: evaluate, ask: ask, key: key,
      sources: [/^t-lec-/.test(link) || ['mood', 'anx', 'sui'].indexOf(group) >= 0 ? [LECTURE, 'Exam 5 Study.html#' + link] : ['Exam 5 course notes', 'Exam 5 Study.html#' + link]],
      meds: [], sections: sections || [] };
    concepts.push(c); return c;
  }
  function med(c, name, use, action, watch, teach, urgent) { c.meds.push({ name: name, use: use, action: action, watch: watch, teach: teach, urgent: urgent }); }
  var c;

  // ---------- week 12: mood ----------
  add('bipolar', 'mood', 'Bipolar disorders and acute mania', 'c-bipolar',
    'Bipolar I needs at least one **manic** episode; bipolar II needs **hypomania plus major depression**; cyclothymic disorder is 2 years of milder alternating symptoms. Mania speeds thinking, removes the need for sleep and impairs judgment, so the **body and safety** are at risk first.',
    'Pressured speech, flight of ideas, clang associations, grandiosity, distractibility, days without sleep, weight loss, splitting staff, risky spending or sex.',
    'Safety first: low stimulation, **firm, calm, short** statements, **consistent limits** agreed by the whole team, redirect energy, high-calorie **finger foods** and fluids, protect sleep. Seclusion only with documented risk, loss of control and failed alternatives.',
    'Sleeping and eating enough, vital signs stable, no injury, speech and activity slowing, follows unit limits; later, knows the warning signs and keeps taking medicine.',
    'Why does a client in mania who has not slept for 3 days come before a tearful client with early waking?',
    'In mania the first risk is physical (exhaustion, dehydration, injury). Structure and consistent limits protect the client.',
    [['lec-bipolar', [0, 1, 2, 3]]]);
  c = add('mood-meds', 'mood', 'Lithium and other mood stabilizers', 't-lec-bipolar',
    'Lithium has a **narrow range (about 0.6–1.2 mEq/L)** and is cleared by the kidneys with sodium, so dehydration, low salt, **NSAIDs** and thiazides raise the level. Valproate, carbamazepine and lamotrigine are anticonvulsant mood stabilizers with their own risks.',
    'Expected at a therapeutic level: fine tremor, mild nausea, thirst, frequent urination. **Toxicity**: coarse tremor, vomiting and diarrhea, unsteady gait, confusion. Lamotrigine: new rash. Valproate: abdominal pain, bruising.',
    'Check levels, kidney and thyroid function; teach steady fluids and salt and **acetaminophen instead of NSAIDs**; hold lithium and get a level when toxicity signs appear; stop lamotrigine and get emergency care for a blistering rash.',
    'Mood stable, level in range, no toxicity signs; the client can explain warning signs and interactions.',
    'A level of 1.0 mEq/L with fine tremor and thirst: what do you do, and what would change your answer?',
    'Read symptoms with the level: expected effects at a therapeutic level are documented; new GI or neurologic signs mean toxicity until proven otherwise.',
    [['lec-bipolar', [4, 5]]]);
  med(c, 'Lithium', 'Bipolar mania and maintenance', 'Stabilizes neuronal signaling; cleared by the kidneys', 'Levels, kidney and thyroid function, fluid and sodium balance', 'Steady fluids and salt; avoid NSAIDs; report vomiting or diarrhea', 'Coarse tremor, vomiting, unsteady gait or confusion: hold and get a level.');
  med(c, 'Valproate (divalproex)', 'Bipolar mania, seizures', 'Anticonvulsant mood stabilizer', 'Liver function, platelets, ammonia, pregnancy plans', 'Report abdominal pain, bruising or yellow skin', 'Severe abdominal pain or vomiting: assess for pancreatitis or liver injury.');
  med(c, 'Lamotrigine', 'Bipolar depression and maintenance', 'Anticonvulsant; slow titration', 'Rash, especially early or after dose changes', 'Report any rash; do not restart at a full dose after missed days', 'Blistering rash with fever: stop and get emergency care (SJS).');
  add('mdd', 'mood', 'Major depression and the other depressive disorders', 'c-mdd',
    'Depression involves biology (genes, neurotransmitters, HPA axis, inflammation) and negative thinking under stress. **MDD** needs 5+ symptoms for **2 weeks**, including **depressed mood or anhedonia**. DMDD, persistent depressive disorder and PMDD differ by age, duration and timing.',
    'Anhedonia, anergia, psychomotor retardation, **vegetative signs** (sleep, appetite, elimination, sexual changes), worthlessness, guilt, hopelessness, thoughts of death.',
    '**Ask about suicide first.** Use simple concrete words, allow time, sit with a silent client and make observations, avoid platitudes; help with self-care, nutrition, sleep and constipation; set goals together.',
    'Safe, eating and sleeping better, more self-care, expresses some hope and engages with others.',
    'Which symptom do you assess first in a depressed client, and how do you ask about it?',
    'Safety first, then small concrete steps. Depression slows thinking, so the nurse slows down too.',
    [['lec-depression', [0, 1, 2]]]);
  add('depression-tx', 'mood', 'Treating depression: medicines and brain stimulation', 't-lec-depression',
    '**SSRIs are first line**; SNRIs, TCAs (anticholinergic, lethal in overdose), MAOIs (tyramine) and newer agents differ by side effects. **ECT** is the most effective treatment; rTMS, VNS and DBS stimulate the brain in other ways; **light therapy** treats seasonal depression.',
    'Change comes over weeks, not days. SSRI effects: sexual dysfunction, GI upset, sleep change. Serotonin syndrome with St. John’s wort. After ECT: brief confusion and short-term memory loss.',
    'Teach that benefit takes weeks and to report worsening thoughts; ask about supplements; after ECT monitor **airway, vital signs and orientation**; know contraindications (metal for rTMS).',
    'Symptoms improve through the acute (6–12 weeks), continuation (4–9 months) and maintenance (1 year+) phases without serious adverse effects.',
    'Why might ECT be chosen first for a client who is not eating or drinking?',
    'Match treatment to severity and to the body’s risk: ECT works fastest when life is at risk.',
    [['lec-depression', [3, 4]]]);

  // ---------- week 12: anxiety ----------
  add('anxiety-levels', 'anx', 'Levels of anxiety and panic care', 't-lec-anxiety',
    'As anxiety rises the **perceptual field narrows**: mild sharpens it, moderate narrows it (selective inattention), severe greatly reduces it, and panic loses touch with reality. Defense mechanisms lower anxiety automatically; overusing immature ones is maladaptive.',
    'Mild: restless, alert. Moderate: voice tremor, sweating, selective attention. Severe: dazed, automatic behavior. **Panic**: running, shouting, screaming, pacing.',
    'Mild to moderate: help the client name the feeling and problem-solve. Severe to panic: **stay**, calm low voice, short simple repeated statements, quiet space, fewer stimuli; teach later.',
    'The anxiety level falls; the client recognizes symptoms as anxiety and uses a coping skill.',
    'Why can you teach a breathing technique at moderate anxiety but not at panic?',
    'Match the intervention to the level: the higher the anxiety, the simpler and calmer the nurse.',
    [['lec-anxiety', [1]]]);
  add('anxiety-disorders', 'anx', 'Anxiety disorders and their treatment', 'c-anxiety',
    'Panic disorder, agoraphobia, specific phobia, social anxiety, separation anxiety and GAD share fear and **avoidance**. Genetic, biological, psychological and cultural factors all contribute.',
    'Panic attacks that peak within minutes; avoiding places where escape is hard; fear of being judged; months of worry.',
    'Rule out medical causes; teach about anxiety; SSRIs/SNRIs long term, benzodiazepines short term; behavior therapies (systematic desensitization, flooding, modeling, thought stopping) and CBT; care is usually outpatient.',
    'Fewer attacks, less avoidance, back to usual roles.',
    'How does systematic desensitization differ from flooding?',
    'Avoidance keeps anxiety going; treatment helps the person face the fear safely.',
    [['lec-anxiety', [0, 2]]]);
  add('ocd', 'anx', 'OCD and related disorders', 'c-ocd',
    '**Obsessions** are intrusive thoughts; **compulsions** are rituals done to relieve the anxiety they cause. Related disorders: body dysmorphic, hoarding, hair pulling (trichotillomania), skin picking (excoriation).',
    'Rituals taking more than an hour a day, raw hands, skin damage, missed meals or bathroom breaks, lateness.',
    'Early on, allow time for rituals, then limit them gradually; protect skin, schedule toileting and watch for UTIs. **ERP is first line** (flooding is prolonged exposure); SSRIs and clomipramine.',
    'Less time on rituals, intact skin, more time for daily activities.',
    'Why not stop a client’s rituals abruptly on admission?',
    'Rituals relieve anxiety: reduce them gradually while the client learns the anxiety fades on its own.',
    [['lec-anxiety', [3, 4]]]);

  // ---------- week 12: suicide ----------
  add('suicide', 'sui', 'Suicide risk', 'c-suicide',
    'Risk grows with **hopelessness**, previous attempts, mental illness (46% of suicide deaths), substance use, access to lethal means and social crises. Teens are at high risk because the prefrontal cortex is still maturing.',
    'Direct and covert statements, giving things away, a specific lethal plan, a **sudden calm or cheerful mood** after depression.',
    '**Ask directly** about thoughts, plan and means; observation as ordered; remove hazards (count plastic utensils, search belongings with the patient present, door open); treat the underlying disorder; document; postvention for survivors.',
    'Stays safe, names reasons for living and a safety plan, uses supports.',
    'Why is a sudden brighter mood a reason to reassess rather than relax precautions?',
    'Ask directly. A lethal plan raises risk, and a sudden lift can mean a decision has been made.',
    [['lec-suicide', [0, 1, 2, 3]]]);
  add('nssi', 'sui', 'Nonsuicidal self-injury', 'c-nssi',
    'Self-injury **without intent to die** relieves overwhelming emotion. It often starts in the teens and is more common in women.',
    'Cuts or burns in patterns, long sleeves in warm weather, statements like “it makes the pressure go away.”',
    'Care for injuries calmly and without judgment; explore triggers; follow the six steps, starting with **limit setting for safety**; teach coping skills; DBT and CBT.',
    'Fewer episodes; uses a coping skill when triggered; can name triggers.',
    'What does the nurse say first to a teen with fresh cuts?',
    'NSSI is a way of coping, not a suicide attempt, but it still needs safety limits and new coping skills.',
    [['lec-suicide', [4]]]);

  // ---------- Exam 5 chapters ----------
  add('schizo', 'psy', 'Schizophrenia spectrum', 'c-schizo',
    'Excess dopamine in the mesolimbic pathway drives **positive** symptoms; low frontal activity drives **negative** and cognitive symptoms.',
    'Hallucinations (auditory most common), delusions, disorganized speech, the six A’s of negative symptoms, anosognosia, **command hallucinations**.',
    'Don’t argue with or agree with delusions; state reality and respond to the feeling; ask what voices are saying; keep instructions simple; watch for suicide and violence risk.',
    'Fewer intrusive symptoms, tells reality from illness, takes medicine, manages daily routines.',
    'How do you respond to a patient who says voices are telling her she is worthless?',
    'Reality plus empathy. Command hallucinations are a safety issue.',
    [['spectrum', [0, 1, 2, 3, 4]]]);
  c = add('antipsychotic-safety', 'psy', 'Antipsychotics: EPS, NMS, clozapine and metabolic risk', 't-antipsychotics',
    'Blocking dopamine-2 in movement pathways causes **EPS**. First-generation drugs cause more EPS; second-generation drugs cause more **metabolic syndrome**. Clozapine works when others fail but can cause agranulocytosis.',
    'Acute dystonia (hours to days), akathisia, parkinsonism, tardive dyskinesia (months to years). **NMS**: fever, lead-pipe rigidity, confusion, unstable BP. Clozapine: sore throat, fever, constipation.',
    'Treat dystonia urgently (anticholinergic, airway); **hold the drug and cool** for NMS; check the ANC with clozapine; monitor weight, glucose and lipids; AIMS for tardive dyskinesia.',
    'Symptoms controlled without dangerous effects; labs and weight stable.',
    'Which antipsychotic effect is the emergency: akathisia, tardive dyskinesia or NMS?',
    'NMS and agranulocytosis are emergencies; the timing of EPS tells you which one you are seeing.',
    [['antipsychotics', [0, 1, 2, 3, 4, 5, 6]]]);
  med(c, 'Haloperidol', 'Psychosis, agitation', 'High-potency first-generation D2 blocker', 'EPS, NMS, QT', 'Report stiffness, restlessness or fever', 'Fever with rigidity: hold and get emergency care (NMS).');
  med(c, 'Clozapine', 'Treatment-resistant schizophrenia', 'Second-generation antipsychotic', 'ANC, bowel function, heart symptoms, seizures', 'Report sore throat, fever or constipation', 'Fever or sore throat: hold and check the ANC.');
  med(c, 'Benztropine', 'Acute dystonia, parkinsonism', 'Anticholinergic', 'Dry mouth, urinary retention, confusion', 'Does not treat tardive dyskinesia', 'Neck spasm with trouble swallowing: give promptly and protect the airway.');
  add('somatic', 'som', 'Somatic symptom and related disorders', 'c-somatic',
    'Real physical distress is amplified by worry and stress. Illness anxiety is fear of having a disease; conversion causes neurologic symptoms without disease; **factitious** disorder fakes illness for the sick role; **malingering** fakes it for external gain.',
    'Repeated visits with normal tests, constant focus on symptoms; deliberate falsification in factitious disorder; symptoms tied to a benefit in malingering.',
    'Take symptoms seriously and check briefly, then **shift to feelings and coping**; one consistent provider; never say the symptoms aren’t real.',
    'Fewer visits, more talk about stress and feelings, uses coping skills.',
    'How does factitious disorder differ from malingering?',
    'The symptoms are real to the patient: acknowledge them briefly, then focus on coping.',
    [['somafact', [0, 1, 2, 3]]]);
  add('dissociative', 'som', 'Dissociative disorders', 'c-did',
    'Dissociation separates memory, identity or awareness from overwhelming experiences, usually after trauma.',
    'Memory gaps, depersonalization, derealization, different identity states, self-harm risk.',
    'Grounding (feet on the floor, describe the room, hold an object), safety assessment, trauma-informed care; reassure family that the person is coping, not “crazy.”',
    'Fewer episodes, uses grounding, stays safe.',
    'Which grounding techniques help a patient who is dissociating?',
    'Grounding brings the person back to the present safely.');
  add('kids', 'kid', 'Children: assessment, limits and trauma', 't-kids',
    'Children show distress through behavior and play. Development, attachment and trauma shape how disorders look; reactive attachment follows severe early neglect.',
    'Indiscriminate friendliness or withdrawal (attachment), regression, tics lasting more than a year (Tourette), behavior changes across settings.',
    'Assess through play and with the family; clear limits with consequences; brief, consistent time-out; trauma-informed care; report suspected abuse.',
    'Behavior improves in more than one setting; the child uses coping skills; the family disciplines consistently.',
    'Why is time-out 20 times a day a sign the plan has stopped working?',
    'Brief, consistent limits and play-based assessment: behavior is communication.',
    [['kids', [0, 1, 3]], ['attach', [0, 1, 2, 3]]]);
  c = add('adhd', 'kid', 'ADHD', 'c-adhd',
    'Differences in dopamine and norepinephrine networks impair attention and impulse control; stimulants increase these transmitters.',
    'Inattention, hyperactivity and impulsivity in two or more settings, starting before age 12.',
    'Structure, short directions and rewards; stimulants in the morning; monitor appetite, sleep, growth, BP and heart rate; nonstimulants (atomoxetine, guanfacine) are options.',
    'Better attention and behavior at home and school; normal growth.',
    'What do you monitor in a child starting methylphenidate?',
    'Structure plus medicine; watch growth, sleep and the heart.',
    [['kids', [2]]]);
  med(c, 'Methylphenidate', 'ADHD', 'CNS stimulant', 'Appetite, growth, sleep, BP, heart rate', 'Give in the morning', 'Chest pain or fainting: stop and get evaluated.');
  add('autism', 'kid', 'Autism spectrum disorder', 'c-autism',
    'Neurodevelopmental differences in social communication, with restricted, repetitive behaviors and sensory sensitivity.',
    'Limited eye contact, repetitive movements, distress with change, self-injury when routines change.',
    'Keep routines predictable, prepare for changes, use visual supports and **rewards for adapting**, reduce sensory overload, protect from self-injury.',
    'Adapts to change with less distress; fewer self-injury episodes.',
    'How do you help a nonverbal child cope with a change in routine?',
    'Predictability, plus rewards for adapting.',
    [['kids', [2]]]);
  add('anorexia', 'eat', 'Anorexia nervosa and refeeding', 'c-anorexia',
    'Restriction driven by fear of weight gain and distorted body image; starvation affects every organ. **Refeeding** shifts phosphate, potassium and magnesium into cells.',
    'Low BMI, bradycardia, hypotension, lanugo, amenorrhea, cold intolerance; in refeeding, **low phosphate** and heart failure.',
    'Medical stabilization; supervised meals and observation after meals; weigh consistently (same time, gown); slow refeeding with electrolytes monitored; build trust; limited choices as progress allows.',
    'Gradual weight gain, stable vital signs and electrolytes, eats without rituals.',
    'Which lab do you watch during refeeding, and why?',
    'Medical safety first: refeed slowly and watch phosphate.',
    [['feeding', [0, 1, 2, 4, 5]]]);
  add('bulimia', 'eat', 'Bulimia and binge eating', 'c-bulimia',
    'Binge–purge cycles relieve distress. Vomiting causes **low potassium** and metabolic alkalosis. Binge-eating disorder has no purging.',
    'Often normal weight, Russell’s sign, dental erosion, swollen parotid glands, low potassium, dysrhythmias.',
    'Monitor potassium and heart rhythm; observe after meals; CBT; fluoxetine; lisdexamfetamine for binge-eating disorder; bupropion is contraindicated.',
    'Fewer binge–purge episodes, normal potassium, uses coping skills instead.',
    'Why is potassium the key lab in bulimia?',
    'Purging → low potassium → dysrhythmia risk.',
    [['feeding', [0, 2, 3]]]);
  c = add('alcohol', 'sub', 'Alcohol withdrawal and alcohol use disorder', 'c-alcohol',
    'Long-term alcohol use boosts GABA and suppresses glutamate; stopping causes **rebound excitation**. Thiamine deficiency causes Wernicke encephalopathy.',
    'Withdrawal begins within hours (tremor, sweating, rising BP); seizures at 12–48 hours; delirium tremens at 48–72 hours or later.',
    'CIWA-Ar scoring; benzodiazepines (chlordiazepoxide; lorazepam in liver disease); **thiamine before glucose**; seizure precautions; then AUD medicines (naltrexone, acamprosate, disulfiram) and support groups.',
    'Withdraws safely without seizures or delirium tremens; has a recovery plan.',
    'Why give thiamine before IV glucose?',
    'Withdrawal can kill: benzodiazepines and thiamine come first.',
    [['substances', [0, 2]]]);
  med(c, 'Chlordiazepoxide', 'Alcohol withdrawal', 'Long-acting benzodiazepine', 'CIWA-Ar score, sedation, breathing', 'Avoid alcohol and driving', 'Oversedation or slowed breathing: hold and report.');
  med(c, 'Thiamine', 'Prevent Wernicke encephalopathy', 'Vitamin B1 replacement', 'Confusion, ataxia, eye movements', 'Give before glucose', 'New confusion with ataxia: report at once.');
  med(c, 'Disulfiram', 'Alcohol use disorder (deterrent)', 'Blocks alcohol breakdown', 'Hidden alcohol sources', 'Avoid alcohol in mouthwash, sauces and cough syrup', 'Flushing, vomiting, chest pain after alcohol: emergency care.');
  c = add('opioid', 'sub', 'Opioid overdose and opioid use disorder', 'c-opioid',
    'Opioids depress breathing. **Naloxone** blocks the receptors only briefly. Withdrawal is miserable but rarely fatal; methadone and buprenorphine stabilize the receptors for recovery.',
    'Overdose: pinpoint pupils, slow breathing, unresponsive. Withdrawal: yawning, dilated pupils, runny nose, diarrhea, goosebumps.',
    'Airway and naloxone; **keep monitoring**, because naloxone can wear off first; offer treatment (methadone, buprenorphine, naltrexone).',
    'Breathing stays adequate; the patient engages in treatment.',
    'Why must you keep watching a patient after naloxone works?',
    'Naloxone may wear off before the opioid does.');
  med(c, 'Naloxone', 'Opioid overdose', 'Opioid antagonist', 'Breathing for hours after the dose', 'Carry it; call for help', 'Breathing slows again: repeat the dose and get help.');
  med(c, 'Buprenorphine', 'Opioid use disorder', 'Partial opioid agonist', 'Sedation, withdrawal at induction', 'Start once mild withdrawal has begun', 'Severe sedation with other depressants: get help.');
  add('substances', 'sub', 'Substance use: terms, screening and the nurse', 't-substances',
    '**Tolerance** means needing more for the same effect; **withdrawal** means symptoms on stopping; **denial** shields the person from facing the problem.',
    'Intoxication and withdrawal patterns differ by substance; watch for signs of impairment in colleagues.',
    'Screen (CAGE, AUDIT) without judgment; report an impaired colleague to a supervisor; teach that recovery is ongoing.',
    'The patient acknowledges the problem and engages in treatment.',
    'What does the nurse do when a colleague shows signs of impairment?',
    'Screen without judgment; protect patients by reporting impairment.',
    [['substances', [0, 1, 2, 3, 4]]]);
  add('personality', 'per', 'Personality disorder clusters', 't-personality',
    'Long-standing, inflexible patterns of thinking and relating. **Cluster A** odd, **B** dramatic, **C** anxious.',
    'Paranoid suspicion, schizotypal odd beliefs (the person can be made aware of them), avoidant, dependent and obsessive-compulsive traits.',
    'Consistency, clear boundaries, keep promises; a neutral approach for paranoid patients; treat co-occurring depression.',
    'More stable relationships, fewer crises.',
    'How does schizotypal personality disorder differ from schizophrenia?',
    'Consistency and boundaries in every cluster.',
    [['personality', [0, 1, 2, 3, 4]]]);
  add('bpd', 'per', 'Borderline personality disorder', 'c-bpd',
    'Emotional dysregulation, fear of abandonment and **splitting**; self-harm relieves intense emotion.',
    'Splitting staff, manipulation, self-injury, impulsivity, threats to others.',
    'Safety first; consistent limits shared by the team; DBT; review the events before and after self-harm to find triggers.',
    'Fewer self-harm episodes; uses DBT skills.',
    'Which statement from a patient with BPD needs immediate attention?',
    'Safety, consistency and DBT.',
    [['personality', [1, 3, 4]]]);
  add('aspd', 'per', 'Antisocial personality disorder', 'c-aspd',
    'Disregard for the rights of others and lack of remorse; conduct disorder before age 15.',
    'Manipulation, superficial charm, rule breaking, aggression.',
    'Firm, consistent limits with clear consequences; no bargaining; protect others.',
    'Follows limits; fewer manipulative attempts.',
    'How does the nurse respond when a patient tries to bargain over a unit rule?',
    'Firm limits, no bargaining.',
    [['personality', [1]]]);
  add('delirium', 'neu', 'Delirium vs dementia vs depression', 'c-delirium',
    '**Delirium** is acute, fluctuating confusion from a physical cause; dementia is gradual and progressive; depression in older adults can look like dementia.',
    'A sudden change overnight, fluctuating attention, hallucinations; grief with poor concentration but normal ability when reminded suggests depression.',
    'Find and treat the cause; monitor neurological status often; reorient; keep safe; evaluate for depression.',
    'Confusion clears as the cause is treated.',
    'Which one detail points to delirium rather than dementia?',
    'Sudden onset and fluctuation mean delirium: look for the cause.',
    [['neurocog', [0, 2, 4]]]);
  c = add('alz', 'neu', 'Alzheimer disease and dementia care', 'c-alz',
    'Progressive neuron loss with plaques and tangles. Cholinesterase inhibitors and memantine slow the decline but do not stop it.',
    'Memory loss, aphasia, apraxia, agnosia, wandering, sundowning.',
    'Routine, simple one-step directions, a safe environment, **finger foods** through the day, validation rather than arguing, caregiver support.',
    'Safety maintained, adequate nutrition, caregiver coping.',
    'Why offer finger foods throughout the day?',
    'Safety, routine and dignity.',
    [['neurocog', [1, 3, 4]]]);
  med(c, 'Donepezil', 'Alzheimer disease', 'Cholinesterase inhibitor', 'Pulse, GI effects', 'Give at bedtime; it slows, not cures', 'Fainting or very slow pulse: hold and report.');
  med(c, 'Memantine', 'Moderate to severe Alzheimer disease', 'NMDA antagonist', 'Dizziness, confusion', 'Often combined with donepezil', 'New severe confusion: report.');

  // ---------- link every question to a concept ----------
  var byLink = { 'c-bipolar': 'bipolar', 'c-mdd': 'mdd', 'c-suicide': 'suicide', 'c-nssi': 'nssi', 'c-anxiety': 'anxiety-disorders', 'c-ocd': 'ocd',
    'c-schizo': 'schizo', 't-spectrum': 'schizo', 'c-nms': 'antipsychotic-safety', 't-antipsychotics': 'antipsychotic-safety',
    'c-somatic': 'somatic', 't-somafact': 'somatic', 'c-did': 'dissociative', 't-kids': 'kids', 't-attach': 'kids', 'c-adhd': 'adhd', 'c-autism': 'autism',
    'c-anorexia': 'anorexia', 't-feeding': 'anorexia', 'c-bulimia': 'bulimia', 'c-alcohol': 'alcohol', 'c-opioid': 'opioid', 't-substances': 'substances',
    't-personality': 'personality', 'c-bpd': 'bpd', 'c-aspd': 'aspd', 'c-delirium': 'delirium', 't-neurocog': 'delirium', 'c-alz': 'alz' };
  function conceptFor(q) {
    var m = /^q5-wk12-(.+)$/.exec(q.id);
    if (m) {
      var k = m[1];
      if (/^bp-(li-|lamo|anticonv)/.test(k)) return 'mood-meds';
      if (/^bp-/.test(k)) return 'bipolar';
      if (/^dp-(ssri-se|ect-ind|rtms|vns|light|sjw|ppd|phase)$/.test(k)) return 'depression-tx';
      if (/^dp-/.test(k)) return 'mdd';
      if (/^ax-(ocd|erp|flood|excor)/.test(k)) return 'ocd';
      if (/^ax-(agora|desens)$/.test(k)) return 'anxiety-disorders';
      if (/^ax-/.test(k)) return 'anxiety-levels';
      if (/^sx-(nssi|sixstep|dbt)$/.test(k)) return 'nssi';
      if (/^sx-/.test(k)) return 'suicide';
    }
    if (q.id === 'q5-ea-10') return 'bulimia'; // binge-eating medicine
    return byLink[q.link] || null;
  }
  var legacy = {};
  function index(qs) { (qs || []).forEach(function (q) { var id = conceptFor(q); if (id) legacy[q.id] = id; }); return legacy; }
  if (root && root.MH_Q) index(root.MH_Q);

  var sections = {};
  concepts.forEach(function (x) { if (x.sections.length) sections[x.id] = x.sections; });
  return { concepts: concepts, questions: [], legacy: legacy, index: index, conceptFor: conceptFor, refs: {}, sections: sections,
    connection: function (q) { return q.concept; }, aliases: {}, referenceText: function (s) { return String(s); }, referenceCard: function (card) { return card; },
    groupIds: groupIds, groupName: groupName, groups: GROUPS };
});
