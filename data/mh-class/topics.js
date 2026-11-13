// Exam 4 · Class review — the instructor's "Mental Health Week 1" PowerPoint (111 slides), rewritten as notes in our
// own words. Same shapes as data/mh/topics.js. { id, week, ch, title, short, lead, terms?, cards, recall? }
window.MH_TOPICS = [
{
  id: 'screen', week: 11, ch: 'Slides 1–20', title: 'Mental health screening: the Mrs. M case',
  short: 'Six traits of mental health, caregiver burnout, the stress cascade, screening tools and the Parity Act.',
  lead: 'The class case is **Mrs. M**: she works full-time, has a troubled teenage son and cares for aging parents. She says she feels **hopeless** and “can’t deal with her life right now.” The nurse’s job is fast psychological triage: check **safety first**, then her coping, supports and how she is functioning.',
  terms: [
    { t: 'Resilience', see: '“I’ve always handled stress, but I just can’t deal with my life right now.”', why: 'The capacity to take pressure, adapt and recover. Her statement shows her usual coping has stopped working.', means: 'Ask what helped in the past; a failed coping system needs support and a safety check.' },
    { t: 'Reality orientation', see: 'She can name her real stressors and knows her coping is worn out.', why: 'Seeing facts accurately and solving problems logically. Naming true stressors means it is **intact**.', means: 'Believing the family is plotting against her, or that she no longer needs sleep, would mean it is impaired.' },
    { t: 'Emotional regulation', see: 'Hopelessness that never lifts versus bad days with some steady ones.', why: 'Feeling normal emotions without being paralyzed by them.', means: 'Find out whether the hopelessness is constant or comes and goes.' },
    { t: 'Positive self-concept', see: '“I feel like a complete failure as a mother and a daughter.”', why: 'A stable sense of worth and a realistic view of oneself.', means: 'Screen for self-blame and guilt about not doing “enough.”' },
    { t: 'Social connectedness', see: 'No one to talk to; caregiving has crowded out friends.', why: 'Healthy, mutual relationships protect against stress.', means: 'Ask who she can lean on; isolation raises risk.' },
    { t: 'Goal-directed behavior', see: 'No sense of a future; nothing feels worth doing.', why: 'Daily life guided by purpose. **Pervasive hopelessness** signals lost future orientation.', means: 'This needs an immediate **safety (suicide) screen**.' },
    { t: 'Sandwich generation', see: 'An adult caring for children and aging parents while working full-time.', why: 'Pressure comes from both generations plus the job at once.', means: 'Expect role overload and caregiver burnout; ask about every role.' },
    { t: 'Compassion fatigue', see: 'Emotionally exhausted, detached, “nothing left to give.”', why: 'Constantly spending emotional energy on others with no rest drains the reserve.', means: 'The hallmark is exhaustion and loss of empathy, not hyperactivity or hallucinations.' },
    { t: 'Role overload and conflict', see: 'Employee, crisis counselor for her son and caregiver for her parents, all at once.', why: 'Competing roles take more time and energy than a day holds.', means: 'Help her share or drop duties: respite care, family help, workplace support.' }
  ],
  cards: [
    { h: 'What the nurse does first', b: ['**Safety screen**: ask directly about thoughts of self-harm or suicide.', 'Standardized tools: **PHQ-9** for depression; **Zarit Burden Interview** to measure the toll of caregiving.', 'Therapeutic communication: a non-judgmental space that validates how heavy the load is.', 'Referrals: **medical social work** for caregiving help, **respite care**, family counseling.'], why: 'Hopelessness is a warning sign for suicide, so safety comes before problem-solving.', tag: 'If it worsens' },
    { h: 'The priority question', b: ['“When you say you can’t deal with life right now, have you had any thoughts of hurting yourself or ending your life?”', 'Suggesting medical leave, adult day care or firmer boundaries with her son are all useful later, but they are not the first action.'] },
    { h: 'Questions that assess each trait', b: ['**Coping**: “When things felt this heavy before, what helped you get through?”', '**Body**: “How is the stress showing up physically: sleep, appetite?”', '**Supports**: “Who can you talk to or lean on right now?”', '**Function**: “How is this affecting your energy and your workday?”', '**Self-concept**: “Do you feel guilty, like you aren’t doing enough?”'], why: 'Open-ended, non-judgmental questions collect subjective data across all six traits.' },
    { h: 'The stress cascade: why chronic worry becomes hopelessness', b: ['**1. Chronic worry** keeps the brain in a danger state.', '**2. Sympathetic activation** (fight or flight) stays on, so **cortisol** stays high.', '**3. Depletion**: long-term high cortisol lowers **serotonin and dopamine**, which produces hopelessness.'], why: 'It is sustained cortisol, not a sudden parasympathetic surge, that explains the mood change.' },
    { h: 'Body signs to track', b: ['**Severe insomnia with loss of appetite** is the finding to prioritize.', 'A brief rise in heart rate while talking about stress is expected.', 'Ankle swelling after standing, dry skin and brittle nails are not stress markers.'] },
    { h: 'Goals and resources', b: ['A good short-term goal is realistic and measurable: “identifies **two community resources or supports** to share caregiving by the end of the week.”', 'Not realistic: removing all stressors in 24 hours, quitting her job, or allowing only positive feelings.', 'For job stress, the **Employee Assistance Program (EAP)** offers confidential counseling and flexible-schedule help.'] },
    { h: 'Mental Health Parity Act', b: ['Passed in **1996**.', 'Insurers that cover mental health must offer **annual and lifetime benefits equal** to those for physical illness.', 'It is about **equal coverage**, not Medicaid expansion, insurance exchanges or an insurance mandate.'] }
  ],
  recall: [
    ['Mrs. M says she feels hopeless. First nursing action?', 'Ask directly about **thoughts of self-harm or suicide** (safety screen).'],
    ['Which tool measures caregiver burden?', 'The **Zarit Burden Interview**. The PHQ-9 screens for depression.'],
    ['“I feel like a failure as a mother and daughter” shows a problem with which trait?', '**Positive self-concept and self-esteem**.'],
    ['How does chronic stress lead to hopelessness?', 'Sustained **cortisol** depletes **serotonin and dopamine**.'],
    ['Hallmark of compassion fatigue?', '**Emotional exhaustion, detachment** and feeling drained of empathy.'],
    ['What does the Mental Health Parity Act require?', '**Equal** insurance coverage for mental health disorders.']
  ]
},
{
  id: 'dsm', week: 11, ch: 'Slides 21–36', title: 'DSM-5 and its high-yield disorders',
  short: 'What the DSM-5 is for, how a diagnosis is made, and the NCLEX priorities for depression, PTSD and schizophrenia.',
  lead: 'The **DSM-5**, published by the **American Psychiatric Association**, is the shared rulebook for naming mental disorders. It tells you **how to identify** a disorder. It does **not** tell you how to treat it or what caused it.',
  terms: [
    { t: 'Non-axial system', see: 'One list of diagnoses, mental and medical together.', why: 'DSM-5 dropped the old five axes (I–V) that separated clinical disorders from personality disorders.', means: 'Mental and physical diagnoses are documented side by side.' },
    { t: 'Positive symptoms', see: 'Delusions, hallucinations, disorganized speech (“word salad”), disorganized or catatonic behavior.', why: 'Behaviors **added** to normal experience (excesses).', means: 'Assess safety and reality-test gently.' },
    { t: 'Negative symptoms', see: 'Flat affect, **avolition** (no motivation), **alogia** (little speech), **anhedonia** (no pleasure).', why: 'Normal functions that are **missing** (deficits).', means: 'Support self-care and engagement; they are easy to overlook.' },
    { t: 'Command hallucination', see: 'A voice telling the patient to do something.', why: 'The command may be to harm self or others.', means: 'Ask “**What are the voices telling you to do?**” If it is harm, start **1:1 observation**.' },
    { t: 'Anhedonia', see: 'No interest or pleasure in things once enjoyed.', why: 'A core symptom of depression and a negative symptom of schizophrenia.', means: 'Count it as one of the two cardinal depression symptoms.' },
    { t: 'Flashback', see: 'The patient relives the trauma as if it is happening now.', why: 'An intrusive symptom of PTSD.', means: 'Safety and **grounding**; do not touch without permission.' },
    { t: 'Neuroleptic malignant syndrome (NMS)', see: '**Lead-pipe rigidity**, sudden **high fever**, altered mental status, unstable vital signs.', why: 'A life-threatening reaction to any antipsychotic (for example haloperidol or olanzapine).', means: '**Stop the drug, notify the provider, cool the patient.**' },
    { t: 'Agranulocytosis', see: 'Low WBC and absolute neutrophil count (ANC); sore throat, fever.', why: '**Clozapine** can dangerously lower white cells.', means: 'Track the **ANC**; if it drops or infection signs appear, **hold clozapine and call the provider**.' },
    { t: 'Serotonin syndrome', see: 'High fever, tremor, hyperreflexia, muscle rigidity, dilated pupils.', why: 'Too much serotonin, usually from serotonergic drugs such as SSRIs.', means: 'A complication to watch for and report at once.' }
  ],
  cards: [
    { h: 'Why we need the DSM-5', b: ['**Universal language**: a diagnosis means the same thing to every clinician and insurer.', '**Research accuracy**: studies use the same criteria everywhere.', '**Billing**: diagnoses map to **ICD codes** for payment and treatment authorization.'] },
    { h: 'How the manual is organized', b: ['Neurodevelopmental (autism spectrum, ADHD).', 'Schizophrenia spectrum (delusions, hallucinations).', 'Bipolar and related (shifts in mood and energy).', 'Depressive (low mood, loss of joy).', 'Anxiety (fear, worry, arousal: GAD, panic, agoraphobia).', 'Trauma- and stressor-related (PTSD, acute stress).'] },
    { h: 'The three-part diagnostic formula', b: ['**1. Symptom count**: a set number from a list (major depression: **5 or more of 9**).', '**2. Time frame**: lasting long enough (major depression **2 weeks**; GAD **6 months**).', '**3. Functional impairment**: clinically significant distress or trouble in social or work life.'], why: 'Without impairment, traits are not a disorder. That is the final rule.' },
    { h: 'What changed in DSM-5', b: ['**Spectrum approach**: autistic disorder and Asperger’s became **autism spectrum disorder**.', '**Bereavement exclusion removed**: a loss can trigger a true major depressive episode.', 'New diagnoses: **hoarding disorder, binge eating disorder, DMDD** (added to limit over-diagnosis in children).'] },
    { h: 'What the DSM-5 does NOT do', b: ['**No treatment directions**: no drugs, nursing interventions or therapy techniques.', '**No definite cause**: it lists observable behaviors, not why the disorder began.'] },
    { h: 'Major depressive disorder: the 9 criteria', b: ['Depressed mood most of the day.', 'Anhedonia.', 'Weight or appetite change.', 'Insomnia or hypersomnia.', 'Psychomotor agitation or slowing.', 'Fatigue or loss of energy.', 'Worthlessness or excessive guilt.', 'Poor concentration or indecisiveness.', 'Thoughts of death or suicide.'], why: 'Five or more for 2 weeks, with impairment.' },
    { h: 'Depression priorities', b: ['Ask directly: “**Are you having thoughts of killing yourself?**” No vague wording.', 'A **sudden burst of energy or calm** in a severely depressed patient may mean a plan is set: start **1:1 suicide precautions** and assess for a plan.', 'SSRIs (sertraline, fluoxetine) take **4 to 6 weeks** for full effect.', 'Watch for **serotonin syndrome**.'], tag: 'If it worsens' },
    { h: 'PTSD: four symptom clusters', b: ['**Intrusion**: unwanted memories, nightmares, flashbacks.', '**Avoidance**: of thoughts, places or people tied to the event.', '**Negative thinking and mood**: gaps in memory of the trauma, self-blame, detachment.', '**Hyperarousal**: hypervigilance, exaggerated startle, irritability, poor sleep.'] },
    { h: 'Caring for a flashback', b: ['Priority: **safety and grounding**.', '**Do not touch** without permission (risk of a protective, aggressive reflex).', 'Stay in sight, speak calmly and low, tell them they are safe now.', 'Reduce noise and sudden light changes.', 'Once calm, teach grounding such as **5-4-3-2-1**.'] },
    { h: 'Schizophrenia: diagnostic thresholds', b: ['**Two or more** core symptoms (such as delusions, hallucinations, disorganized speech).', 'Active for a significant part of **1 month**.', 'A **marked drop** in functioning (work, relationships, self-care) from before.'] },
    { h: 'Talking with a patient who has a delusion or hallucination', b: ['Rule: **acknowledge the feeling; never argue with or agree with the false belief**.', 'Wrong: “There are no cameras, you’re being paranoid.” (arguing)', 'Wrong: “I see them too, let’s cover them.” (playing along)', 'Right: “**I don’t see any cameras, but I can see you’re frightened. You are safe here.**”'] },
    { h: 'Antipsychotic safety', b: ['**NMS**: lead-pipe rigidity, high fever, altered mental status, unstable vitals: stop the drug, notify, cool.', '**Clozapine**: check the **ANC** routinely. Low count or a sore throat: protective isolation, hold the drug, call the provider.'], tag: 'If it worsens' }
  ],
  recall: [
    ['Who publishes the DSM-5?', 'The **American Psychiatric Association**.'],
    ['Three parts of a DSM-5 diagnosis?', '**Symptom count, time frame, functional impairment**.'],
    ['What two things does the DSM-5 leave out?', '**Treatment** and **cause**.'],
    ['A severely depressed patient is suddenly cheerful and “knows what to do.” Action?', '**1:1 suicide precautions** and assess for a plan.'],
    ['Avolition, alogia, flat affect: positive or negative symptoms?', '**Negative** (deficits).'],
    ['Clozapine patient: ANC 850 and a sore throat?', '**Hold clozapine, protective isolation, call the provider.**'],
    ['First question for command hallucinations?', '“**What are the voices telling you to do?**”']
  ]
},
{
  id: 'freud', week: 11, ch: 'Slides 37–50', title: 'Psychoanalytic theory, defense mechanisms and transference',
  short: 'Id, ego and superego; six defense mechanisms; transference versus countertransference and what the nurse does.',
  lead: 'Freud’s model says anxiety arises when the **ego** is overwhelmed by conflict between the **id** (impulses) and the **superego** (conscience). **Defense mechanisms** protect the ego. In nursing the focus is how these unconscious patterns show up **in the nurse–patient relationship**.',
  terms: [
    { t: 'Id', see: '“I want it now.”', why: 'Unconscious drives and impulses; the **pleasure principle**.', means: 'Demands immediate gratification regardless of consequences.' },
    { t: 'Ego', see: 'The problem-solver that weighs what is realistic.', why: 'The **reality principle**: mediates between the id and outside limits.', means: 'When overwhelmed, the person feels severe anxiety.' },
    { t: 'Superego', see: 'Guilt, shame, perfectionism.', why: 'The **moral principle**: internalized rules from parents and society.', means: 'A harsh superego produces self-condemnation.' },
    { t: 'Denial', see: 'A patient with terminal lung cancer keeps smoking: “It’s just a cough.”', why: 'Refusing to accept a painful reality.', means: 'Do not force the truth; explore gently as trust builds.' },
    { t: 'Displacement', see: 'Scolded by the doctor, the patient yells at the aide about a meal tray.', why: 'Feelings are moved from a risky target to a **safer one**.', means: 'Don’t take it personally; help name the real source.' },
    { t: 'Projection', see: 'A hostile patient says, “My nurse hates me.”', why: 'One’s own unacceptable feelings are **attributed to someone else**.', means: 'Stay neutral and consistent.' },
    { t: 'Rationalization', see: '“Nobody could pass; the instructor made it tricky.”', why: 'Plausible **excuses** to justify a failure or behavior.', means: 'Help look at the facts without shaming.' },
    { t: 'Regression', see: 'A toilet-trained 5-year-old wets the bed in the hospital.', why: 'Retreat to an **earlier developmental stage** under stress.', means: 'Expected in illness; give comfort and routine.' },
    { t: 'Sublimation', see: 'A person with anger issues becomes a competitive boxer.', why: 'Unacceptable impulses are channeled into **constructive** activity. A **mature, adaptive** defense.', means: 'Encourage it.' },
    { t: 'Transference', see: '“You talk to me just like my overbearing mother.”', why: 'The **patient** unconsciously places feelings from past relationships onto the nurse.', means: 'Acknowledge, clarify reality, continue care. **Do not reassign.**' },
    { t: 'Countertransference', see: 'The nurse wants to “save” a patient who resembles a grandparent, or feels unprovoked anger.', why: 'The **nurse** displaces their own unresolved feelings onto the patient.', means: '**Self-reflect, seek supervision**, hold boundaries; reassign only as a last resort.' }
  ],
  cards: [
    { h: 'Traditional psychoanalytic tools', b: ['**Free association**: saying whatever comes to mind without a filter.', '**Dream analysis**: interpreting dream symbols to reach buried memories.', 'Goal: bring unconscious conflicts and early trauma into awareness.'] },
    { h: 'Handling transference hostility', b: ['**Don’t personalize it**: the anger belongs to a figure from the past.', '**Don’t defend or argue** (“I’m nothing like your mother”): it invalidates the patient.', '**Don’t withdraw**: avoiding the room is a boundary failure. Stay consistent.', 'In the working phase, explore: “Do you feel this way around other authority figures?”', 'Chart the patient’s exact words neutrally.'], why: 'Managing transference is an expected nursing skill, so the patient is not reassigned for it.' },
    { h: 'The three-step response to transference', b: ['**1. Validate the feeling.**', '**2. Clarify reality**: you are the nurse, not that person.', '**3. Redirect** to today’s care or goal.', 'Example: “It sounds like that relationship was painful, and that makes it hard to feel safe here. I’m your nurse, and my goal is your safe care. Let’s talk about this morning’s plan.”'] },
    { h: 'Red flags for countertransference', b: ['**Strong negative reactions**: anger or disgust (for example toward a patient with alcohol use when the nurse has family history of addiction).', '**Over-involvement**: staying late, bringing gifts or snacks, wanting to rescue.', '**Boredom or indifference**: tuning out, avoiding call lights.', '**Seeking approval**: defending the patient in rounds, bending rules to be liked.'] },
    { h: 'What to do about countertransference, in order', b: ['**1. Self-reflection** (first step): why am I reacting this way?', '**2. Clinical supervision** (priority action): talk with the charge nurse, manager or preceptor.', '**3. Reinforce boundaries**: the same evidence-based care, no more and no less.', '**4. Request reassignment**: **last resort**, only if objectivity or safety is lost.'], why: 'A manager who sees it meets privately with the nurse first.' }
  ],
  recall: [
    ['Which part of the mind runs on the reality principle?', 'The **ego**.'],
    ['Patient reprimanded by the doctor yells at the aide. Mechanism?', '**Displacement**.'],
    ['“My nurse hates me,” from a patient who feels hostile toward the nurse?', '**Projection**.'],
    ['Which defense mechanism is mature and adaptive?', '**Sublimation**.'],
    ['Who drives transference? Countertransference?', 'Transference: the **patient**. Countertransference: the **nurse**.'],
    ['First step when a nurse notices countertransference?', '**Self-reflection**, then clinical supervision.'],
    ['Is a patient reassigned for transference?', '**No.** Reassignment is a last resort for countertransference.']
  ]
},
{
  id: 'peplau', week: 11, ch: 'Slides 51–70', title: 'Peplau’s interpersonal theory',
  short: 'Four phases of the nurse–patient relationship and the six roles of the nurse.',
  lead: '**Hildegard Peplau**, the “mother of psychiatric nursing,” published her theory in **1952**. She shifted nursing from what nurses do **to** patients toward what they do **with** patients. The **relationship itself** is the tool for healing. It moves through four phases in order, and none can be skipped.',
  terms: [
    { t: 'Orientation phase', see: '“My name is Mark; I’ll be your nurse for your 5-day stay. What are your goals?”', why: 'Builds trust, defines roles and boundaries, identifies the problem.', means: '**State when the relationship will end**, on day one.' },
    { t: 'Identification phase', see: '“Talking to you makes me feel like I finally have a partner.”', why: 'The patient moves out of isolation and responds to the nurse as a helper; a **working alliance** forms.', means: 'Explore fear and helplessness safely.' },
    { t: 'Exploitation (working) phase', see: '“Let’s review the journaling you used yesterday when you felt anxious.”', why: 'The patient **uses the resources**: analyzes triggers and practices new coping.', means: 'Transference and countertransference flare most here; keep reflecting.' },
    { t: 'Termination phase', see: '“Our time ends Friday at discharge; let’s look at how your breathing exercises worked.”', why: 'Evaluates goals, reinforces new skills, processes feelings about ending.', means: '**Never extend the end date.**' },
    { t: 'Stranger', see: 'The first meeting: courtesy and respect.', why: 'The nurse offers the acceptance given to any guest.', means: 'Unconditional respect from the start.' },
    { t: 'Resource person', see: '“How do these medications work? What are my rights here?”', why: 'Gives clear, specific answers.', means: 'The role to take when the patient lacks information.' },
    { t: 'Teacher', see: 'Helping the patient learn a coping skill.', why: 'Supports learning and using new skills.', means: 'Build on what the patient already knows.' },
    { t: 'Leader', see: 'Guiding the patient toward goals together.', why: 'Democratic collaboration, not pressure.', means: 'The patient takes part in decisions.' },
    { t: 'Surrogate', see: 'The patient treats the nurse like an overbearing step-parent.', why: 'The nurse **stands in for a figure** from the patient’s past.', means: 'This is transference; clarify who you are.' },
    { t: 'Counselor', see: 'Using therapeutic communication to work through feelings.', why: 'Helps the patient make sense of current life challenges.', means: 'The core role in psychiatric nursing.' }
  ],
  cards: [
    { h: 'The four phases in order', b: ['**1. Orientation**: trust, roles, boundaries, the problem, and the end date.', '**2. Identification**: the working alliance forms.', '**3. Exploitation (working)**: the hard psychological work and new coping.', '**4. Termination**: review, reinforce, say goodbye.'], why: 'Phases can overlap, but skipping one destabilizes the patient.' },
    { h: 'Orientation: the golden rule', b: ['The nurse **states the fixed time of termination** during orientation.', 'Knowing the end date from the start prevents unhealthy dependence and feelings of abandonment.'] },
    { h: 'Working phase: what happens', b: ['Analyze behavior triggers and defenses.', 'Practice and evaluate new coping skills in real time.', 'Move from dependence toward independence.', '**Transference and countertransference** are most common here.'] },
    { h: 'Termination: what to do and not do', b: ['Review progress, celebrate goals met, reinforce healthy coping.', 'Talk openly about sadness, anger or anxiety about ending.', '**Do not extend** (“just one more week”): hold the boundary set in orientation.', '**Do not** exchange social media or personal contact.', '**Do not** open new deep issues such as untold childhood trauma.', 'Therapeutic reply: “It sounds like you feel abandoned and angry that our visits are ending, but we will stick to our plan to finish Friday.”'], tag: 'If it worsens' },
    { h: 'Spot the phase from the nurse’s words', b: ['Introductions, goals, “I’ll be your nurse for…” → **orientation**.', '“I finally have a partner” → **identification**.', 'Reviewing or practicing a coping skill → **working**.', 'An end date plus a look back at progress → **termination**.'] }
  ],
  recall: [
    ['Peplau’s four phases in order?', '**Orientation, identification, exploitation (working), termination**.'],
    ['When is the end of the relationship first stated?', 'In the **orientation** phase.'],
    ['Phase where transference and countertransference flare most?', 'The **exploitation (working)** phase.'],
    ['Patient asks for “one more month” of visits at the end. Response?', 'Acknowledge the feelings and **keep the planned end date**.'],
    ['Patient knows nothing about their meds or rights. Which role first?', '**Resource person**.'],
    ['The patient treats the nurse like a step-parent. Which role?', '**Surrogate**.']
  ]
},
{
  id: 'behavior', week: 11, ch: 'Slides 71–82', title: 'Behavioral theories and therapies',
  short: 'Classical and operant conditioning, token economy, desensitization, flooding, aversion therapy, modeling and biofeedback.',
  lead: 'Behavioral theory looks only at **observable, measurable behavior**. Its premise: **all behavior is learned**, so unhelpful behavior can be **unlearned**.',
  terms: [
    { t: 'Classical conditioning (Pavlov)', see: 'After a panic attack in an elevator, elevators alone trigger panic.', why: '**Involuntary** association: a neutral stimulus is paired with one that causes a reflex.', means: 'Explains phobias and panic cues.' },
    { t: 'Operant conditioning (Skinner)', see: 'A sticker for taking medication; a tantrum ignored.', why: '**Voluntary** behavior shaped by its **consequences**.', means: 'Reinforce what you want repeated.' },
    { t: 'Positive reinforcement', see: 'Tokens or praise for attending group.', why: '**Adds** something pleasant to increase a behavior.', means: 'The engine of a token economy.' },
    { t: 'Negative reinforcement', see: 'Taking an antacid stops the pain, so you take it again next time.', why: '**Removes** something unpleasant to increase a behavior.', means: 'It is not punishment: the behavior goes up.' },
    { t: 'Extinction', see: 'Ignoring an attention-seeking tantrum until it stops.', why: '**Withholding all reinforcement** weakens the behavior.', means: 'Everyone must ignore it consistently.' },
    { t: 'Token economy', see: 'A privilege ticket for 30 minutes in the dayroom, traded for a weekend pass.', why: 'Tokens earned for target behaviors are exchanged for privileges. Operant conditioning.', means: '**Every staff member must be consistent** or the system fails.' },
    { t: 'Systematic desensitization', see: 'Pictures of syringes, then a capped needle, then a mock blood draw, with slow breathing.', why: '**Gradual** exposure up a fear ladder, paired with relaxation.', means: 'Move up only when calm at the current step.' },
    { t: 'Flooding', see: 'Immediate, sustained exposure to the most feared thing.', why: 'Anxiety peaks, plateaus, then fades (extinction).', means: '**Contraindicated in cardiovascular disease**.' },
    { t: 'Aversion therapy', see: 'Disulfiram makes drinking alcohol cause violent illness.', why: 'Pairs an unwanted behavior with an **unpleasant stimulus**.', means: 'Teach hidden sources of alcohol.' },
    { t: 'Modeling', see: 'Showing a procedure on a doll before the child has it.', why: 'Learning by **watching and imitating**.', means: 'Keep attention, then have the patient **demonstrate back**.' },
    { t: 'Biofeedback', see: 'A monitor shows heart rate or muscle tension in real time.', why: 'Instruments give feedback on involuntary body functions so the patient learns to control them.', means: 'Used for panic and tension headaches.' }
  ],
  cards: [
    { h: 'Systematic desensitization: three steps', b: ['**1. Train** relaxation or diaphragmatic breathing first.', '**2. Build the hierarchy** from least to most frightening (photo → replica → nearby → touch).', '**3. Climb slowly**: advance only when relaxed at the current step.'] },
    { h: 'Flooding safety', b: ['Maximum exposure at once, in real life or imagination, with no escape.', 'It causes a large surge of adrenaline.', '**Do not use in patients with cardiovascular disease**: it can trigger a heart attack or lethal dysrhythmia.'], tag: 'If it worsens' },
    { h: 'Disulfiram (Antabuse) teaching', b: ['Alcohol plus disulfiram causes acetaldehyde to build up: severe nausea and vomiting, throbbing headache, chest pain, fast heart rate.', 'Avoid **hidden alcohol**: cough syrup, mouthwash, vanilla extract, hand sanitizer, aftershave, over-the-counter tinctures.'], tag: 'If it worsens' },
    { h: 'Biofeedback: what is tracked', b: ['Heart rate variability.', 'Skin temperature and conductance.', 'Muscle tension (EMG).', 'Brain waves (EEG).'] },
    { h: 'Tell the therapies apart', b: ['Steps plus relaxation → **systematic desensitization**.', 'Straight to the worst fear → **flooding**.', 'Makes you sick when you do it → **aversion therapy**.', 'Tickets or points for behavior → **token economy (operant)**.', 'Watch and copy → **modeling**.', 'A machine shows your body’s signals → **biofeedback**.'] }
  ],
  recall: [
    ['Involuntary association: which theorist?', '**Pavlov** (classical conditioning).'],
    ['Removing something unpleasant to increase a behavior?', '**Negative reinforcement**.'],
    ['What makes a token economy fail?', '**Inconsistent staff**: anyone giving privileges without tokens.'],
    ['Which exposure therapy is unsafe with heart disease?', '**Flooding**.'],
    ['Name three hidden sources of alcohol for a patient on disulfiram.', 'Any of: **cough syrup, mouthwash, vanilla extract, hand sanitizer, aftershave**.'],
    ['What must the patient do after the nurse models a skill?', 'A **return demonstration**.']
  ]
},
{
  id: 'cognitive', week: 11, ch: 'Slides 83–89', title: 'Cognitive theory, CBT and DBT',
  short: 'Beck’s cognitive triad, five thinking errors, CBT techniques and the four DBT skills.',
  lead: 'Cognitive theory (**Aaron Beck**) says distress comes from **distorted automatic thoughts**. Treatment does not dig into childhood. It **identifies** the thought, **tests** it against evidence and **replaces** it with a balanced one (cognitive restructuring).',
  terms: [
    { t: 'Beck’s cognitive triad', see: '“I’m worthless. Everyone is against me. It will never get better.”', why: 'Negative views of **self, world and future** keep depression going.', means: 'Listen for all three.' },
    { t: 'All-or-nothing thinking', see: '“I didn’t get an A+, so I’m a terrible student and should drop out.”', why: 'Rigid black-and-white categories.', means: 'Help find the middle ground.' },
    { t: 'Overgeneralization', see: '“He broke up with me. I’ll be alone forever.”', why: 'One event becomes a never-ending pattern.', means: 'Ask for evidence of “always.”' },
    { t: 'Catastrophizing', see: '“My boss wants to meet. I’ll be fired, lose my house and be homeless.”', why: 'Jumping to the **worst-case** outcome.', means: 'Use “what if?” to walk through coping with it.' },
    { t: 'Personalization', see: '“The group was quiet today. It’s my fault for being depressing.”', why: 'Taking blame for events outside your control.', means: 'Look at other explanations.' },
    { t: 'Emotional reasoning', see: '“I feel anxious about this procedure, so something must be wrong.”', why: 'Treating a feeling as proof of a fact.', means: 'Separate the feeling from the evidence.' },
    { t: 'Dialectical behavior therapy (DBT)', see: 'Skills groups for a patient who self-harms.', why: 'Balances **acceptance** of current pain with **change**.', means: 'The **gold standard for borderline personality disorder**, chronic suicidal thoughts and self-harm.' }
  ],
  cards: [
    { h: 'CBT techniques', b: ['**Journaling and thought records**: write the automatic thought with evidence **for** and **against** it.', '**Decatastrophizing**: “What if it happened? How would you handle it?”', '**Reframing**: “I made a mistake in sim lab, I’ll kill a patient” → “I made a mistake in a safe place, and now I know how to avoid it.”'] },
    { h: 'The four DBT skills', b: ['**Mindfulness**: staying in the present moment without judgment.', '**Distress tolerance**: getting through intense pain without self-harm (for example holding an ice cube).', '**Emotion regulation**: naming and shifting intense, unstable feelings.', '**Interpersonal effectiveness**: setting boundaries and asking for what you need.'] },
    { h: 'Tell the distortions apart', b: ['Worst-case chain → **catastrophizing**.', '“Always/never” from one event → **overgeneralization**.', '“It’s my fault” for something outside your control → **personalization**.', '“I feel it, so it’s true” → **emotional reasoning**.', 'Perfect or failure → **all-or-nothing**.'] }
  ],
  recall: [
    ['Three parts of Beck’s cognitive triad?', 'Negative view of **self, world and future**.'],
    ['“I’ll be fired, lose my house and be homeless” after a meeting request?', '**Catastrophizing**.'],
    ['Gold-standard therapy for borderline personality disorder?', '**DBT**.'],
    ['Four DBT skills?', '**Mindfulness, distress tolerance, emotion regulation, interpersonal effectiveness**.'],
    ['What does a thought record list?', 'The automatic thought and the evidence **for and against** it.']
  ]
},
{
  id: 'humanistic', week: 11, ch: 'Slides 90–104', title: 'Maslow’s priorities and Rogers’ person-centered care',
  short: 'Using Maslow with the ABCs to prioritize, spotting emotional decoys, and Rogers’ three core attributes.',
  lead: 'On exams, **Maslow’s hierarchy** is a rule for prioritizing: **physical survival needs come before psychological ones**. **Carl Rogers** adds how to talk: the client leads, and the nurse **reflects feelings** without directing.',
  terms: [
    { t: 'Physiological needs', see: 'Oxygen, fluids, nutrition, elimination, severe pain, **sleep**, temperature.', why: 'The base of the pyramid.', means: 'Stabilize these first.' },
    { t: 'Safety and security', see: 'Suicide precautions, fall prevention, protection from injury, stable shelter.', why: 'The second level.', means: 'Next after physiological needs.' },
    { t: 'Love and belonging', see: 'Family, friends, groups; isolation.', why: 'The third level.', means: 'A panic attack with no physical danger sits here.' },
    { t: 'Esteem', see: 'Dignity, achievement, control over the care plan.', why: 'The fourth level.', means: 'Listing personal strengths is an esteem intervention.' },
    { t: 'Self-actualization', see: 'Reaching potential, long-term health education, insight.', why: 'The peak.', means: 'Addressed last.' },
    { t: 'Unconditional positive regard', see: 'Giving the same quality care to a patient injured while driving drunk.', why: 'Accepting the person without judging their worth by their actions.', means: 'Separate the person from the behavior.' },
    { t: 'Congruence (genuineness)', see: 'The nurse’s words, tone and body language match.', why: 'Being honest and real, not hiding behind a cold professional mask.', means: 'Consistency builds trust and lowers defensiveness.' },
    { t: 'Empathy', see: '“You feel uncertain and overwhelmed about the surgery.”', why: 'Accurately sensing and reflecting the client’s feelings.', means: 'Validate without taking on the burden yourself.' }
  ],
  cards: [
    { h: 'The order of priorities', b: ['**1. ABCs**: airway, breathing, circulation.', '**2. Other physiological needs**: electrolyte shifts, severe pain, no sleep, elimination.', '**3. Safety**: active suicide plan, dangerous confusion, high fall risk.', '**4. Psychosocial**: anxiety, grief, caregiver strain.'], why: 'Calming a patient’s anxiety while they stop breathing is unsafe nursing.' },
    { h: 'The emotional decoy', b: ['Crying, panic or yelling **sounds** urgent.', 'Unless there is danger to self or others, it sits at love/belonging or esteem.', 'Look for the **quiet physical cue**: a sodium shift, or a post-op patient who hasn’t voided in 8 hours.', 'Class example: of four patients, see first the one with pancreatitis, **SpO₂ 91% and RR 26** (possible ARDS), not the patient with anxiety who is crying.'], tag: 'If it worsens' },
    { h: 'Maslow and teaching', b: ['A patient in **9/10 pain** cannot learn insulin injections: treat the pain first.', 'A **homeless** patient with DKA cannot follow an expensive diet plan: address shelter and safety first.'] },
    { h: 'Maslow in a depressed patient', b: ['Unbathed, no friends, no purpose, and sleeping **2 hours a night**.', 'Priority: a quiet, safe environment and a plan to **promote sleep** (physiological).', 'Then hygiene, then a social group (belonging), then strengths (esteem).'] },
    { h: 'Rogers: the client leads', b: ['The **client** holds the answers to their own healing.', 'The nurse creates a warm, safe climate and **facilitates**; no orders and no unasked advice.'] },
    { h: 'Communication traps to eliminate', b: ['**Giving advice**: “You should…”, “Why don’t you try…”, “If I were you…”. It takes away autonomy.', '**Asking “why”**: “Why did you stop your medication?” It puts the patient on the defensive.'] },
    { h: 'The winning response: reflect the feeling, then open the door', b: ['Patient: “I don’t think I can handle this surgery.”', 'Nurse: “**You feel uncertain and overwhelmed about the procedure. Tell me more about what concerns you most.**”', 'Step 1 names the feeling. Step 2 gives the conversation back to the client.'] }
  ],
  recall: [
    ['Which comes first: a crying patient with anxiety, or SpO₂ 91% with RR 26?', 'The **breathing problem** (ABCs and physiological needs first).'],
    ['Where does sleep sit on Maslow’s pyramid?', '**Physiological** (the base).'],
    ['Rogers’ three core attributes?', '**Unconditional positive regard, congruence, empathy**.'],
    ['Two response types to eliminate on communication questions?', '**Advice** and **“why” questions**.'],
    ['Why not teach a patient in severe pain?', 'Physiological needs block learning: **treat pain first**.']
  ]
},
{
  id: 'bio', week: 11, ch: 'Slides 105–111', title: 'Neurotransmitters, ECT and the theory comparison',
  short: 'Too much or too little of each neurotransmitter, what is normal after ECT, six theories side by side, and a Piaget–Erikson item.',
  lead: 'The **biological model** ties mental illness to brain structure, genes and **neurotransmitters**. Treatment restores balance with **medication** and somatic therapies such as **electroconvulsive therapy (ECT)**. Know which chemical is high or low in each condition.',
  terms: [
    { t: 'Dopamine', see: 'Too much: delusions and hallucinations. Too little: tremor, rigidity.', why: 'The motivation and movement chemical.', means: '**High** in schizophrenia; **low** in Parkinson’s disease and extrapyramidal symptoms (EPS).' },
    { t: 'Serotonin', see: 'Low mood, worry, obsessions.', why: 'Regulates mood and sleep.', means: '**Low** in depression, anxiety and OCD.' },
    { t: 'Norepinephrine', see: 'Racing, on edge; or slowed and low.', why: 'The fight-or-flight chemical.', means: '**High** in mania, anxiety and panic; **low** in depression.' },
    { t: 'GABA', see: 'Anxiety, seizures.', why: 'The brain’s main **inhibitory brake**.', means: '**Low** in anxiety disorders, seizures and mania.' },
    { t: 'Acetylcholine', see: 'Memory loss.', why: 'The memory and learning chemical.', means: '**Low** in Alzheimer’s disease and dementia.' },
    { t: 'Electroconvulsive therapy (ECT)', see: 'Afterward: confused, headache, can’t remember the procedure.', why: 'A brief induced seizure under anesthesia.', means: 'These effects are **expected and temporary**: reassure and reorient.' }
  ],
  cards: [
    { h: 'After ECT', b: ['Expected: **temporary confusion, short-term memory loss, mild headache**.', 'Nursing: reassure, **gently reorient**, give the prescribed mild analgesic.', 'Not needed: calling it a permanent deficit, restraints, or stopping antidepressants.'] },
    { h: 'Six theories side by side', b: ['**Psychoanalytic (Freud)**: unconscious conflict; goal is insight; nurse watches transference and defenses.', '**Interpersonal (Peplau)**: relationship problems and anxiety; the nurse–patient relationship heals; four phases.', '**Behavioral (Pavlov, Skinner)**: learned behavior; unlearn and replace; token economy, desensitization, flooding, aversion, biofeedback.', '**Cognitive (Beck)**: distorted thoughts; restructure them; CBT, and DBT for borderline personality disorder.', '**Humanistic (Maslow, Rogers)**: unmet needs block growth; self-directed healing; prioritize with Maslow, use positive regard, genuineness and empathy.', '**Biological (Kraepelin, neurobiology)**: brain and neurotransmitter changes; restore balance; watch for NMS, serotonin syndrome and agranulocytosis, and give ECT care.'] },
    { h: 'Piaget and Erikson in a 4-year-old', b: ['“The machine will bite me because I hit my brother.”', '**Animism**: believing the machine is alive (Piaget, **preoperational**).', '**Magical thinking**: believing a thought or act caused the illness.', 'Erikson: **initiative versus guilt**.', 'Not object permanence (infants), trust versus mistrust (infants), conservation (school age) or identity (adolescents).'] }
  ],
  recall: [
    ['Dopamine in schizophrenia? In Parkinson’s?', '**High** in schizophrenia; **low** in Parkinson’s and EPS.'],
    ['Low serotonin is linked to which conditions?', '**Depression, anxiety and OCD**.'],
    ['Which neurotransmitter is the brain’s brake?', '**GABA**.'],
    ['Low acetylcholine?', '**Alzheimer’s disease and dementia**.'],
    ['Confused with a headache 30 minutes after ECT. Action?', '**Reassure and reorient**: these are expected and temporary.'],
    ['A 4-year-old thinks the machine will bite him as punishment. Concepts?', '**Animism/magical thinking** and **initiative vs guilt**.']
  ]
}
,{
  id: 'lecture', week: 11, ch: 'Lecture notes', title: 'What the instructor stressed in lecture',
  short: 'Listen and observe, physical and emotional safety, the suicide assessment, priorities before teaching or discharge, and why each therapy is used.',
  lead: 'These points come from the two lecture reviews. The thread through all of them: **combine what the patient says with what you see**, put **safety first**, and be able to explain **why** a therapy or action is used, not just name it.',
  terms: [
    { t: 'Verbal versus nonverbal cues', see: 'A patient says “I’m fine” while tearful, withdrawn and avoiding eye contact.', why: 'Words may not match behavior. Affect, posture, eye contact, agitation and changes during the conversation are data.', means: 'Assess both and form the assessment from the two together; explore what a behavior is communicating instead of judging it.' },
    { t: 'Physical safety', see: 'Removing hazards, following the unit’s precautions.', why: 'A patient at risk needs an environment that limits access to means of harm.', means: 'Follow facility safety procedures and escalate immediate concerns.' },
    { t: 'Emotional safety', see: 'Privacy, a calm tone, no judgment.', why: 'Patients share more when they feel respected and unhurried.', means: 'Use open-ended questions and attentive listening; build rapport before pressing for detail.' },
    { t: 'Screening versus diagnosis', see: 'A high PHQ-9 score.', why: 'A screening tool flags the need for more evaluation.', means: 'A score alone does **not** establish a diagnosis.' },
    { t: 'Caregiver burden', see: 'Exhaustion, guilt and strain from caring for a relative.', why: 'People differ in how much stress they can carry at once.', means: 'Assess the person; don’t assume. Connect them with resources.' }
  ],
  cards: [
    { h: 'A fuller suicide assessment', b: ['Ask directly whether hopelessness has led to thoughts of self-harm or of not waking up.', 'If yes, find out: are the thoughts **current**?', 'Is there a **plan**, **intent**, or **access to means**?', 'Has the patient taken any **steps** toward acting on it?', 'What **protective factors** and supports are there?', 'Then follow the facility’s safety procedures and tell the appropriate clinician.'], tag: 'If it worsens' },
    { h: 'Questions the instructor modeled', b: ['When did this start, and did something change around then?', 'How have you coped with stress like this before?', 'Who is part of your support system?', 'Do you feel safe? Have you had thoughts of hurting yourself?'], why: 'The goal is to gather information and build rapport, not to criticize, rush or assume.' },
    { h: 'Priorities: ABCs, then needs, then discharge safety', b: ['**Airway, breathing, circulation** first, always.', 'Then physiological needs, then safety, then psychosocial needs.', 'Treat **severe pain before** complex discharge teaching: pain blocks learning.', 'Before discharge, check for **medication access, money, shelter and a safe place to go**. Being clinically stable is not enough.', 'Don’t let a dramatic-sounding distractor pull you from an ABC or basic safety need.'] },
    { h: 'CBT questions', b: ['CBT was presented as a **central, first-line** approach; know its basics.', 'Pick the answer that helps the client **identify or examine the thought**, not one that dismisses, argues or simply reassures.', 'Supervisor-meeting example (“I’ll be fired and lose my house”): the slides call it **catastrophizing**; the instructor also discussed **overgeneralization** as a close choice. Catastrophizing = a chain of worst-case outcomes. Overgeneralization = one event becomes “always” or “never.”'] },
    { h: 'Anxiety, panic and trauma', b: ['Anxiety can be “overthinking”: imagining several bad outcomes from one situation.', 'Panic brings intense distress with physical symptoms: muscle tension or pain, feeling trapped, even being unable to move.', 'A past trauma can be a trigger for later panic symptoms.'] },
    { h: 'Biology points from lecture', b: ['**Dopamine**: motivation and movement; high in schizophrenia, low in Parkinson’s.', '**Serotonin**: mood and sleep; low in depression.', '**Norepinephrine**: fight or flight, vasoconstriction and blood pressure; tied to anxiety, mania and depression.', '**EPS**: medication-related movement effects, such as sudden or uncontrolled movements and Parkinson-like symptoms.', '**ECT** is still used for some patients; temporary confusion or anxiety afterward is expected. It is **not generally first-line**.'] },
    { h: 'Assignment reminders', b: ['Be able to explain **why** a therapy is used.', 'Presentation: **APA format**, typed (not handwritten).'] }
  ],
  recall: [
    ['A patient’s words and behavior don’t match. What do you do?', 'Assess **both** and explore what the behavior is communicating.'],
    ['Does a PHQ-9 score diagnose depression?', '**No.** It screens and signals the need for further evaluation.'],
    ['Five things to clarify after a patient admits suicidal thoughts?', '**Current thoughts, plan, intent, access to means, steps taken**; plus protective factors.'],
    ['Why treat pain before discharge teaching?', 'Severe pain **blocks learning**; physiological needs come first.'],
    ['What makes a discharge unsafe even if the patient is stable?', 'No **medication access, money, shelter or safe place to go**.'],
    ['On a CBT question, which answer wins?', 'The one that helps the client **examine the thought**.']
  ]
},
{
  id: 'extras', week: 11, ch: 'Chapters 1, 2, 3, 6, 9', title: 'Textbook details to add to your notes',
  short: 'Points from the assigned chapters that are not covered elsewhere on the site: policy milestones, QSEN, negligence, and communication concepts.',
  lead: 'Your Exam 4 study guide already covers Chapters 1, 2, 3, 6, 9 and 34. These are the **remaining details** from those chapters, gathered in one place.',
  terms: [
    { t: 'Double-bind message', see: 'A mother says, “Go, have fun,” with a sad face, slumping and dropping her cane.', why: 'Two contradictory messages from a person with power; either choice displeases them.', means: 'The receiver is trapped. Notice when words and nonverbal behavior disagree.' },
    { t: 'Content versus process', see: 'Saying grades matter (content) while skipping class (process).', why: 'Content is the words; process is the nonverbal message.', means: 'When they match the message is **congruent**; when they don’t, reflect and validate what you see.' },
    { t: 'Complementary relationship', see: 'Nurse and patient; teacher and student.', why: 'One person has more status or control. Between equals the relationship is **symmetrical**.', means: 'The inequality usually lessens as the patient recovers.' },
    { t: 'Kinesics', see: 'Facial expression, posture, gestures, a slight head tilt.', why: 'Communication by body movement.', means: 'Check your own: uncross arms, lean in slightly, keep gestures small.' },
    { t: 'Paralanguage (vocal quality)', see: 'Volume, pitch, rate, fluency: “I *will* see you tonight” versus “I will see *you* tonight.”', why: 'How it is said changes the meaning.', means: 'Soft, even tones invite sharing; fast, high-pitched speech spreads anxiety.' },
    { t: 'Miracle question', see: '“If a miracle happened tonight, how would your life be different in the morning?”', why: 'A goal-setting question that shows what the patient most wants to change.', means: 'Use it to find goals the patient is motivated to pursue.' },
    { t: 'Projective question', see: '“If you had three wishes, what would they be?”', why: 'A “what if” question that helps people explore thoughts and priorities.', means: 'Useful for seeing a problem differently.' },
    { t: 'Process recording', see: 'A written record of what nurse and patient said and did, with the technique and the student’s feelings.', why: 'Lets you spot patterns in your communication.', means: 'It relies on memory; simulation with **debriefing** is now more common.' }
  ],
  cards: [
    { h: 'Chapter 1: milestones in mental health policy and science', b: ['**Decade of the Brain** (1990s): raised awareness of brain research.', '**Surgeon General’s report** (1999): mental health is fundamental to health, and treatments work.', '**Human Genome Project** (1990–2003): strengthened genetic explanations.', '**New Freedom Commission** (2003): called the system fragmented; urged recovery, early screening and consumer-driven care. It included no nurses.', '**Mental Health Parity Act** (1996), then the **Wellstone-Domenici Parity Act** (2008) for group plans over 50 employees, then the **Affordable Care Act** (2010): mental health as an essential benefit, coverage on a parent’s plan to age 26.', '**BRAIN Initiative** (2013) and **RDoC**: research on brain function and on causes at the molecular level instead of symptom lists.'] },
    { h: 'Chapter 1: QSEN’s six areas', b: ['**Patient-centered care**.', '**Teamwork and collaboration**.', '**Evidence-based practice**.', '**Quality improvement**.', '**Safety**.', '**Informatics**.'], why: 'These are the knowledge, skills and attitudes for improving the quality and safety of care.' },
    { h: 'Chapter 1: phenomena of concern for psychiatric nurses', b: ['Promoting mental and physical health; preventing illness.', 'Co-occurring mental, substance use and physical disorders.', 'Changes in thinking, perceiving and communicating.', 'Distress from trauma or neglect; self-harm and violence.', 'Isolation, changes in self-concept, and low health literacy.'], why: 'Nurses treat the **human responses** to illness (insomnia, hopelessness), not the disorder itself.' },
    { h: 'Chapter 2: object relations (Mahler)', b: ['How an infant moves from being unable to separate from the mother to a separate toddler.', 'The caregiver gives a secure base and encourages exploration.', '“**Good enough parenting**” is enough for healthy separation-individuation.'] },
    { h: 'Chapter 3: two newer antidepressants', b: ['**Vortioxetine** (Trintellix): serotonin modulator and stimulator; nausea, constipation, vomiting; may cause less sexual dysfunction.', '**Vilazodone** (Viibryd): serotonin partial agonist and reuptake inhibitor; side effects like an SSRI; **take with food**.'] },
    { h: 'Chapter 6: the five elements of negligence (malpractice)', b: ['**1. Duty**: you accepted the patient’s care.', '**2. Breach of duty**: care fell below the standard (doing harm, or failing to act).', '**3. Cause in fact**: the injury would not have happened otherwise.', '**4. Proximate cause**: the harm was foreseeable.', '**5. Damages**: actual loss, pain and suffering.'], why: 'All five must be proved. Malpractice is negligence by a professional.' },
    { h: 'Chapter 9: the transactional model of communication', b: ['Both people are **communicators**, sending and receiving at once.', 'Parts: message, channel, feedback, encoding and decoding, context, and noise.', '**Context**: social, relational and cultural.', '**Noise**: physical (a loud unit), physiological (pain, fatigue), psychological (preoccupation).', 'Peplau’s two principles: **clarity** and **continuity**.'] },
    { h: 'Chapter 9: setting up the interview', b: ['Let the patient set the **pace**.', 'A private spot that is still **in view of others**.', 'Sit or stand at the **same height**.', '**Don’t put the patient between you and the door**, and don’t make the patient feel trapped.', 'Distance: intimate to 18 inches; **personal 18 inches to 4 feet**; social 4 to 12 feet; public beyond 12 feet. Use personal to social distance; give more room for anxiety or paranoia.'] }
  ],
  recall: [
    ['Name QSEN’s six areas.', '**Patient-centered care, teamwork and collaboration, evidence-based practice, quality improvement, safety, informatics**.'],
    ['Five elements needed to prove negligence?', '**Duty, breach of duty, cause in fact, proximate cause, damages**.'],
    ['What is a double-bind message?', 'Contradictory messages from someone with power, so **any choice is wrong**.'],
    ['Which parity law came in 2008?', 'The **Wellstone-Domenici Parity Act**.'],
    ['Personal distance is how far?', '**18 inches to 4 feet**.'],
    ['Where should the patient NOT be seated?', '**Between the nurse and the door**.'],
    ['Which antidepressant is taken with food to be absorbed?', '**Vilazodone**.']
  ]
}
];
