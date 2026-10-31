// Exam 5 · Practice drills ('pick': each option explains itself; 'sort': sort into the drill's choices).
window.MH_DRILLS = [
{
  id: 'psychcomm', type: 'pick', kind: 'Pick the reply', topic: 'spectrum', title: 'Talking with someone in psychosis',
  intro: 'Hallucinations, delusions and disorganized speech. Pick the most therapeutic reply.',
  items: [
    { ctx: 'Patient looking at an empty corner and whispering.', say: '“Do you hear that? They’re saying I’m worthless.”', why: 'Don’t argue or agree. State your reality and respond to the feeling.', opts: [
      { t: '“I don’t hear the voices you hear, but that sounds really upsetting. I’m here with you.”', ok: true, tech: 'Presenting reality + empathy', why: 'Honest, doesn’t argue, and addresses the distress.' },
      { t: '“There aren’t any voices. You need to ignore them.”', tech: 'Dismissing', why: 'Argues with an experience that feels real to her.' },
      { t: '“What else are the voices saying about you?”', tech: 'Encouraging the hallucination', why: 'Treats them as real and focuses on their content (but **do** ask if they command her to do anything).' },
      { t: '“Tell the voices to leave you alone.”', tech: 'Talking as if they are real', why: 'Implies the voices are real people.' }
    ] },
    { ctx: 'Assessing a patient who hears voices.', say: '(You want to know what she is experiencing.)', why: 'Ask in a way that does not imply the voices are real.', opts: [
      { t: '“What are you hearing?”', ok: true, tech: 'Exploring without reinforcing', why: 'Gathers content (including commands) without validating the voices as real.' },
      { t: '“What are the voices telling you?”', tech: 'Reinforcing', why: 'Implies the voices exist.' },
      { t: '“Are the voices from God?”', tech: 'Leading', why: 'Suggests a source.' },
      { t: '“You’re not really hearing anything, right?”', tech: 'Closed and leading', why: 'Discourages honesty.' }
    ] },
    { ctx: 'Patient with a persecutory delusion.', say: '“You people are all part of the FBI plot to destroy me.”', why: 'Respond to the theme (fear), offer safety, and don’t debate.', opts: [
      { t: '“It seems to you that people want to hurt you. That must be frightening. I won’t hurt you, and we can work on helping you feel safer.”', ok: true, tech: 'Responding to the feeling', why: 'Acknowledges the fear and offers safety without debating.' },
      { t: '“The FBI isn’t interested in you.”', tech: 'Debating the delusion', why: 'Arguing strengthens the delusion and costs trust.' },
      { t: '“Which agents are involved?”', tech: 'Exploring the delusion', why: 'Dwells on the delusional content.' },
      { t: '“Don’t worry, we’ll protect you from the FBI.”', tech: 'Agreeing with the delusion', why: 'Treats it as real.' }
    ] },
    { ctx: 'Patient with associative looseness.', say: '“My friends talk about French fries but how can you trust the French when the boat is reigning?”', why: 'Put the difficulty on yourself and ask for clarification.', opts: [
      { t: '“I’m having trouble following you. Can you tell me more about your friends?”', ok: true, tech: 'Seeking clarification', why: 'Honest, doesn’t blame her, and focuses on one understandable theme.' },
      { t: '“You’re not making any sense.”', tech: 'Blaming', why: 'Puts the problem on the patient.' },
      { t: '“I understand.” (You don’t.)', tech: 'Pretending to understand', why: 'Dishonest and reinforces the disorganization.' },
      { t: '“Why are you talking like that?”', tech: '“Why” question', why: 'She can’t answer it, and it sounds critical.' }
    ] },
    { ctx: 'Patient on day 3, refuses his antipsychotic.', say: '“I’m not sick. I don’t need pills.”', why: 'With anosognosia, link treatment to his own goals instead of arguing.', opts: [
      { t: '“You want to get back to your job. Let’s talk about whether the medicine could help with the voices that make work hard.”', ok: true, tech: 'Linking to the patient’s goals', why: 'Meets him where he is and ties treatment to what he wants.' },
      { t: '“You are definitely sick. Everyone can see it.”', tech: 'Arguing', why: 'Anosognosia is part of the illness; arguing builds resistance.' },
      { t: '“If you don’t take it, you can’t leave.”', tech: 'Threatening', why: 'Coercive; may be assault.' },
      { t: '“I’ll put it in your juice.”', tech: 'Deception', why: 'Violates his rights and his trust.' }
    ] },
    { ctx: 'Patient reports bad voices today.', say: '“The voices are really bad today.”', why: 'Teach competing auditory stimuli and coping.', opts: [
      { t: '“Let’s try humming or listening to music with headphones. Some people find that turns the voices down.”', ok: true, tech: 'Teaching coping (competing stimuli)', why: 'An evidence-based self-management skill.' },
      { t: '“Go to your room and try not to think about them.”', tech: 'Isolation', why: 'Being alone usually makes hallucinations worse.' },
      { t: '“I’ll get you an extra dose right away.”', tech: 'Medicating first', why: 'Try nonpharmacologic coping first unless there is danger.' },
      { t: '“They’re not real, just ignore them.”', tech: 'Dismissing', why: 'Not helpful in the moment.' }
    ] }
  ]
},
{
  id: 'delusion', type: 'sort', kind: 'Name it', topic: 'spectrum', title: 'Types of delusions',
  intro: 'Name the type of delusion.',
  ask: 'Which type of delusion?',
  choices: ['Persecutory', 'Referential', 'Grandiose', 'Erotomanic', 'Nihilistic', 'Somatic', 'Control'],
  items: [
    { q: '“The nurses are putting poison in my food.”', a: 'Persecutory', why: 'Belief of being targeted for harm.' },
    { q: '“The songs on the radio are chosen to send me messages.”', a: 'Referential', why: 'Unrelated events seem personally meaningful.' },
    { q: '“I am the world’s greatest composer.”', a: 'Grandiose', why: 'Inflated importance or power.' },
    { q: '“The news anchor is secretly in love with me.”', a: 'Erotomanic', why: 'Belief that someone desires you romantically.' },
    { q: '“The world will end on Friday, so I gave away all my things.”', a: 'Nihilistic', why: 'Conviction of a coming catastrophe.' },
    { q: '“My intestines have turned to stone.”', a: 'Somatic', why: 'Belief the body is changing in strange ways.' },
    { q: '“Aliens are controlling my thoughts, so I lined the walls with foil.”', a: 'Control', why: 'An outside force controls thoughts or actions.' },
    { q: '“My coworkers are plotting to stop my promotion.”', a: 'Persecutory', why: 'Others preventing progress.' },
    { q: '“The birds are singing to cheer me up.”', a: 'Referential', why: 'An unrelated event taken as a message to oneself.' }
  ]
},
{
  id: 'symptomtype', type: 'sort', kind: 'Sort it', topic: 'spectrum', title: 'Positive, negative, cognitive or affective?',
  intro: 'Sort each schizophrenia finding into its symptom group.',
  ask: 'Which symptom group?',
  choices: ['Positive', 'Negative', 'Cognitive', 'Affective'],
  items: [
    { q: 'Hears voices telling him to hurt himself.', a: 'Positive', why: 'Hallucinations are added experiences.' },
    { q: 'Believes his food is poisoned.', a: 'Positive', why: 'A delusion.' },
    { q: 'Speaks in clang associations: “Clutter clutter, flutter flutter.”', a: 'Positive', why: 'Disorganized speech is a positive symptom.' },
    { q: 'No interest in food, self-care or friends; stays in bed.', a: 'Negative', why: 'Avolition, apathy, asociality.' },
    { q: 'Speaks very little; answers in one word.', a: 'Negative', why: 'Alogia (poverty of speech).' },
    { q: 'Can’t take pleasure in anything.', a: 'Negative', why: 'Anhedonia.' },
    { q: 'Answers “a cab” when asked what brought her to the hospital.', a: 'Cognitive', why: 'Concrete thinking.' },
    { q: 'Can’t plan the steps to make a sandwich or remember the unit schedule.', a: 'Cognitive', why: 'Impaired executive function and memory.' },
    { q: 'Insists she isn’t ill because the illness hides itself from her.', a: 'Cognitive', why: 'Anosognosia.' },
    { q: 'Mood swings from weeping to laughing within minutes.', a: 'Affective', why: 'Labile mood.' },
    { q: 'Laughs while describing her mother’s death.', a: 'Affective', why: 'Inappropriate affect.' }
  ]
},
{
  id: 'eps', type: 'sort', kind: 'Name it', topic: 'antipsychotics', title: 'Which antipsychotic side effect?',
  intro: 'Name the side effect from what you see; the timing helps.',
  ask: 'Which one is this?',
  choices: ['Acute dystonia', 'Akathisia', 'Pseudoparkinsonism', 'Tardive dyskinesia', 'Neuroleptic malignant syndrome', 'Anticholinergic toxicity', 'Orthostatic hypotension', 'Hyperprolactinemia'],
  items: [
    { q: 'Day 1 of haloperidol: neck twisted to one side, eyes rolled upward.', a: 'Acute dystonia', why: 'Sudden spasm early in treatment → benztropine or diphenhydramine IM.' },
    { q: 'Week 2: can’t sit still, paces, says he feels jittery inside.', a: 'Akathisia', why: 'Motor restlessness, often mistaken for anxiety.' },
    { q: 'Week 4: shuffling gait, mask-like face, pill-rolling tremor.', a: 'Pseudoparkinsonism', why: 'Drug-induced parkinsonism.' },
    { q: 'After 5 years: lip smacking and tongue darting in and out.', a: 'Tardive dyskinesia', why: 'Late, often permanent; screen with the AIMS.' },
    { q: 'Rigid, temperature 104 °F, confused, BP swinging, sweating.', a: 'Neuroleptic malignant syndrome', why: 'Emergency: hold the drug, call stat, cool.' },
    { q: 'Hot dry skin, dilated pupils, no urine for 10 hours, delirious.', a: 'Anticholinergic toxicity', why: 'Too much muscarinic blockade; physostigmine.' },
    { q: 'Dizzy and nearly falls on getting up; standing BP 78/50.', a: 'Orthostatic hypotension', why: 'Alpha-1 blockade; hold if standing systolic is under 80.' },
    { q: 'A woman on risperidone stops menstruating and has breast discharge.', a: 'Hyperprolactinemia', why: 'Tuberoinfundibular D2 blockade.' }
  ]
},
{
  id: 'eating', type: 'sort', kind: 'Sort it', topic: 'feeding', title: 'Which eating or feeding disorder?',
  intro: 'Match the description to the eating or feeding disorder.',
  ask: 'Which disorder?',
  choices: ['Anorexia nervosa', 'Bulimia nervosa', 'Binge-eating disorder', 'Pica', 'Rumination disorder', 'Avoidant/restrictive food intake disorder'],
  items: [
    { q: 'BMI 15, terrified of gaining weight, says she looks fat.', a: 'Anorexia nervosa', why: 'Low weight + fear + distorted image.' },
    { q: 'Normal weight, binges and vomits most nights, calluses on her knuckles.', a: 'Bulimia nervosa', why: 'Binge + compensating; Russell sign.' },
    { q: 'Eats huge amounts alone until uncomfortably full, then feels disgusted; never purges.', a: 'Binge-eating disorder', why: 'Binges without compensating.' },
    { q: 'A 6-year-old keeps eating paint chips and dirt.', a: 'Pica', why: 'Nonfood items past toddlerhood; check lead.' },
    { q: 'An infant brings up food, rechews and reswallows it, with no GI cause.', a: 'Rumination disorder', why: 'Regurgitation and rechewing.' },
    { q: 'A child refuses most foods because of their texture; needs supplements; no concern about body shape.', a: 'Avoidant/restrictive food intake disorder', why: 'Avoidance with no body-image distortion.' },
    { q: 'Normal-weight teen with parotid swelling and eroded enamel.', a: 'Bulimia nervosa', why: 'Signs of repeated vomiting.' },
    { q: 'Lanugo, HR 48, temperature 95.8 °F.', a: 'Anorexia nervosa', why: 'Signs of starvation; hospitalize.' }
  ]
},
{
  id: 'conscious', type: 'sort', kind: 'Sort it', topic: 'somafact', title: 'Somatic, factitious or malingering?',
  intro: 'Is the symptom unconscious (somatic disorders) or consciously produced, and why?',
  ask: 'Which one?',
  choices: ['Somatic symptom disorder', 'Illness anxiety disorder', 'Conversion disorder', 'Factitious disorder', 'Factitious disorder imposed on another', 'Malingering'],
  items: [
    { q: 'Six months of real back pain and fatigue; she spends hours researching and visits many doctors.', a: 'Somatic symptom disorder', why: 'Real symptoms plus excessive worry and time.' },
    { q: 'Has no symptoms but is sure he has cancer and checks his skin daily.', a: 'Illness anxiety disorder', why: 'Fear of illness with minimal symptoms.' },
    { q: 'Suddenly blind after seeing her husband with another woman; calm about it.', a: 'Conversion disorder', why: 'Neurological loss with la belle indifférence.' },
    { q: 'Injects herself with bacteria to get admitted again; abdomen covered in surgical scars.', a: 'Factitious disorder', why: 'Consciously creates illness to be a patient.' },
    { q: 'A mother gives her toddler laxatives to bring him to the ED repeatedly.', a: 'Factitious disorder imposed on another', why: 'Child abuse: report it.' },
    { q: 'Claims severe back pain only while his disability claim is pending.', a: 'Malingering', why: 'Conscious faking for an external reward.' },
    { q: 'Asks for opioids for “toothache” at three EDs this week; exam is normal.', a: 'Malingering', why: 'External gain (drugs).' }
  ]
},
{
  id: 'limits', type: 'sort', kind: 'Name it', topic: 'kids', title: 'Disruptive-behavior techniques',
  intro: 'Name the technique the nurse is using with a child.',
  ask: 'Which technique?',
  choices: ['Limit setting', 'Planned ignoring', 'Redirection', 'Use of signals', 'Time-out', 'Simple restitution', 'Behavioral contract', 'Restructuring'],
  items: [
    { q: '“I would like you to stop turning the light on and off.”', a: 'Limit setting', why: 'A calm, specific direction.' },
    { q: 'The nurse ignores harmless whining for attention and praises the child once he’s on task.', a: 'Planned ignoring', why: 'For safe, attention-seeking behavior.' },
    { q: 'After the child throws blocks, the nurse guides him to a ball-toss game.', a: 'Redirection', why: 'Re-engages him in an appropriate activity.' },
    { q: 'The nurse puts a finger to her lips and makes eye contact.', a: 'Use of signals', why: 'A gesture reminding him of self-control.' },
    { q: 'The child sits on the edge of the activity until he regains control.', a: 'Time-out', why: 'A less restrictive alternative to seclusion.' },
    { q: 'The child who knocked over chairs sets them back up and apologizes.', a: 'Simple restitution', why: 'Corrects the effects of his behavior.' },
    { q: 'The team, the teen and her parents write an agreement about expectations and rewards.', a: 'Behavioral contract', why: 'A written agreement with contingencies.' },
    { q: 'The story is getting too long for the group, so the nurse switches to a movement game.', a: 'Restructuring', why: 'Changes the activity to cut frustration.' }
  ]
},
{
  id: 'intoxwd', type: 'sort', kind: 'Sort it', topic: 'substances', title: 'Intoxication or withdrawal?',
  intro: 'Read the findings and name the substance state.',
  ask: 'Which is it?',
  choices: ['Opioid intoxication', 'Opioid withdrawal', 'Alcohol withdrawal', 'Stimulant intoxication', 'Stimulant withdrawal', 'Sedative intoxication', 'Cannabis intoxication', 'PCP intoxication'],
  items: [
    { q: 'Pinpoint pupils, RR 8, nodding off, slurred speech.', a: 'Opioid intoxication', why: 'Miosis + respiratory depression → naloxone.' },
    { q: 'Yawning, runny nose, tearing, gooseflesh, dilated pupils, cramps, diarrhea.', a: 'Opioid withdrawal', why: 'Classic “cold turkey” picture.' },
    { q: '8 hours after the last drink: tremor, sweating, HR 118, BP 170/100.', a: 'Alcohol withdrawal', why: 'Autonomic hyperactivity; give a benzodiazepine per CIWA.' },
    { q: 'Euphoric, wide pupils, chest pain, HR 140, paranoid, feels bugs under the skin.', a: 'Stimulant intoxication', why: 'Cocaine or amphetamine; watch for MI and stroke.' },
    { q: 'Sleeping 16 hours a day, ravenous, deeply depressed after a cocaine binge.', a: 'Stimulant withdrawal', why: 'The crash; assess suicide risk.' },
    { q: 'Unsteady gait, nystagmus, slurred speech after taking extra alprazolam.', a: 'Sedative intoxication', why: 'CNS depression; dangerous with alcohol.' },
    { q: 'Red eyes, munchies, dry mouth, time seems to slow down.', a: 'Cannabis intoxication', why: 'Conjunctival injection + increased appetite.' },
    { q: 'Violent, nystagmus, doesn’t react to pain, hyperthermic.', a: 'PCP intoxication', why: 'Can’t be talked down; safety first.' }
  ]
},
{
  id: 'ddd', type: 'sort', kind: 'Sort it', topic: 'neurocog', title: 'Delirium, dementia or depression?',
  intro: 'An older adult isn’t thinking clearly. Which is it?',
  ask: 'Which is most likely?',
  choices: ['Delirium', 'Dementia', 'Depression'],
  items: [
    { q: 'Fine yesterday; today disoriented, picking at the air, febrile with a UTI.', a: 'Delirium', why: 'Acute, fluctuating, medical cause.' },
    { q: 'Over 3 years, gradually forgot names, then how to cook, now gets lost in her neighborhood.', a: 'Dementia', why: 'Slow and progressive.' },
    { q: 'Since his wife died 2 months ago: poor concentration, no energy, poor hygiene, answers “I don’t know.”', a: 'Depression', why: 'Pseudodementia; refer for evaluation and treatment.' },
    { q: 'Post-op ICU patient, alert one hour and drowsy and confused the next.', a: 'Delirium', why: 'Fluctuating consciousness.' },
    { q: 'Alert, but can’t name a pen or remember the date; slow decline since retiring 5 years ago.', a: 'Dementia', why: 'Agnosia and memory loss; consciousness intact.' },
    { q: 'Worse in the early morning, wakes at 4 a.m., sad, apathetic, lost weight.', a: 'Depression', why: 'Vegetative signs and morning worsening.' }
  ]
},
{
  id: 'adterms', type: 'sort', kind: 'Name it', topic: 'neurocog', title: 'Dementia vocabulary',
  intro: 'Name the finding.',
  ask: 'Which term?',
  choices: ['Aphasia', 'Apraxia', 'Agnosia', 'Agraphia', 'Confabulation', 'Perseveration', 'Hyperorality', 'Sundowning'],
  items: [
    { q: 'Can’t find the word for “cup” and points instead.', a: 'Aphasia', why: 'Language loss.' },
    { q: 'Puts his arms into his trouser legs; can’t brush his teeth though his hands work.', a: 'Apraxia', why: 'Loss of purposeful movement.' },
    { q: 'Holds a spoon and asks what it is; doesn’t recognize his wife.', a: 'Agnosia', why: 'Can’t recognize objects or people.' },
    { q: 'Can no longer read the paper or sign her name.', a: 'Agraphia', why: 'Loss of reading and writing.' },
    { q: 'In bed all weekend but says he went to a Sunday lunch with his family.', a: 'Confabulation', why: 'Fills memory gaps; not lying.' },
    { q: 'Keeps saying “hello, hello, hello” long after the greeting.', a: 'Perseveration', why: 'Repetition after the stimulus has stopped.' },
    { q: 'Tries to eat soap shaped like fruit.', a: 'Hyperorality', why: 'Puts objects in the mouth.' },
    { q: 'Calm all morning; agitated and wandering at dusk.', a: 'Sundowning', why: 'Worse late in the day.' }
  ]
},
{
  id: 'pdmatch', type: 'sort', kind: 'Match the patient', topic: 'personality', title: 'Which personality disorder?',
  intro: 'Match the description to the personality disorder.',
  ask: 'Which disorder?',
  choices: ['Paranoid', 'Schizoid', 'Schizotypal', 'Borderline', 'Antisocial', 'Histrionic', 'Narcissistic', 'Avoidant', 'Dependent', 'Obsessive-compulsive'],
  items: [
    { q: 'Believes the HMO sent her records to every doctor so she can’t get treatment; won’t give her phone number.', a: 'Paranoid', why: 'Pervasive distrust and suspicion.' },
    { q: 'A night-shift loner, content alone, never dated, flat expression.', a: 'Schizoid', why: 'Detached and doesn’t want relationships.' },
    { q: 'Thinks truck drivers talk about him on their radios; superstitious, odd speech.', a: 'Schizotypal', why: 'Ideas of reference, odd beliefs, magical thinking.' },
    { q: 'Idealizes, then hates, her partner; burns herself when he leaves the room.', a: 'Borderline', why: 'Splitting, fear of abandonment, self-harm.' },
    { q: 'Multiple assaults, cons people, no remorse, conduct problems since 13.', a: 'Antisocial', why: 'Disregard for others’ rights.' },
    { q: 'Dramatic, flirtatious with the male nurse, wants to be the center of attention.', a: 'Histrionic', why: 'Attention-seeking and seductive.' },
    { q: 'Cuts the line, berates staff for small errors, expects special treatment.', a: 'Narcissistic', why: 'Entitled, grandiose, no empathy.' },
    { q: 'Turned down a promotion because it meant meeting customers; fears criticism.', a: 'Avoidant', why: 'Social inhibition from fear of rejection.' },
    { q: 'Had her mother move in because she can’t make parenting decisions alone.', a: 'Dependent', why: 'Needs to be cared for.' },
    { q: 'Argues over every policy detail; work is never finished because it isn’t perfect.', a: 'Obsessive-compulsive', why: 'Perfectionism and control (personality, not OCD).' }
  ]
},
{
  id: 'manip', type: 'pick', kind: 'Pick the reply', topic: 'personality', title: 'Limits, splitting and manipulation',
  intro: 'Patients with personality disorders test limits. Pick the most therapeutic response.',
  items: [
    { say: '“You’re the only nurse who really cares. The others are useless.”', why: 'Don’t accept the split; keep the team united.', opts: [
      { t: '“All of the staff are here to help you. What happened with the other nurses?”', ok: true, tech: 'Presenting reality + exploring', why: 'Refuses the special role and explores the concern.' },
      { t: '“Thank you. I do try harder than most.”', tech: 'Accepting the split', why: 'Feeds splitting and divides staff.' },
      { t: '“That’s a terrible thing to say about them.”', tech: 'Defensive and judging', why: 'Gets into a power struggle.' },
      { t: '“I’ll make sure you only get me from now on.”', tech: 'Rescuing', why: 'Reinforces splitting.' }
    ] },
    { say: '“If you don’t give me my Ativan right now, I’ll cut myself.”', why: 'Safety, plus calm, consistent limits; don’t reward threats.', opts: [
      { t: '“I’m concerned for your safety and I’ll stay with you. Your next dose is at 2 p.m. Let’s talk about what you’re feeling.”', ok: true, tech: 'Limit + safety + exploring feelings', why: 'Holds the limit, ensures safety, invites words instead of action.' },
      { t: '“Fine, here’s an extra dose.”', tech: 'Giving in', why: 'Rewards the threat.' },
      { t: '“Go ahead, then.”', tech: 'Dismissing', why: 'Unsafe and punitive.' },
      { t: '“You’ll be restrained if you say that again.”', tech: 'Threatening', why: 'Coercive.' }
    ] },
    { say: '(An antisocial patient, smiling:) “You’re too pretty to be stuck here. Bet you could get me out early.”', why: 'Name the behavior and set a professional limit.', opts: [
      { t: '“Comments about my appearance aren’t part of our professional relationship. Let’s talk about your treatment goals.”', ok: true, tech: 'Limit setting', why: 'Direct, calm, refocuses on treatment.' },
      { t: 'Smile and change the subject.', tech: 'Avoiding', why: 'Leaves the manipulation unaddressed.' },
      { t: '“Thanks! I’ll see what I can do.”', tech: 'Accepting the manipulation', why: 'Opens the door to more.' },
      { t: '“How dare you talk to me like that!”', tech: 'Emotional reaction', why: 'Gives him a reaction to work with.' }
    ] },
    { say: '(A narcissistic patient:) “I’m far smarter than the people running this place. I shouldn’t have to go to group.”', why: 'Avoid power struggles; don’t challenge the grandiosity head-on.', opts: [
      { t: '“Group is part of everyone’s plan here. It starts at 10. What would make it worthwhile for you?”', ok: true, tech: 'Neutral limit + collaboration', why: 'Holds the expectation without a power struggle.' },
      { t: '“You’re not smarter than the staff.”', tech: 'Challenging grandiosity', why: 'Starts a power struggle.' },
      { t: '“You’re right, you can skip it.”', tech: 'Giving in', why: 'Reinforces entitlement.' },
      { t: '“Why do you think you’re so special?”', tech: '“Why” question', why: 'Judging and confrontational.' }
    ] },
    { say: '(A paranoid patient:) “Why are you writing that down? Who’s going to read it?”', why: 'Be honest, clear and neutral; keep your word.', opts: [
      { t: '“I’m writing what we discussed in your chart. Only your treatment team reads it. You can ask to see it.”', ok: true, tech: 'Honest, clear explanation', why: 'Straightforward information reduces suspicion.' },
      { t: '“Don’t worry about it.”', tech: 'Dismissing', why: 'Increases suspicion.' },
      { t: '“Nobody, I promise.”', tech: 'False reassurance', why: 'Untrue, and breaks trust when discovered.' },
      { t: '(Big friendly smile) “Oh, you’re my favorite, I’d never share anything!”', tech: 'Too friendly', why: 'Overly friendly behavior raises suspicion.' }
    ] }
  ]
},
{
  id: 'p5priority', type: 'pick', kind: 'Who first?', topic: null, title: 'Who do you see first?',
  intro: 'Prioritize like the NCLEX: physiological emergencies and safety first.',
  items: [
    { q: 'Psychiatric unit, start of shift. Who first?', why: 'NMS is a life-threatening emergency.', opts: [
      { t: 'Patient on haloperidol who is rigid with a temperature of 103.8 °F.', ok: true, why: 'Possible NMS: hold the drug, call stat, cool.' },
      { t: 'Patient with schizophrenia mumbling to herself in the dayroom.', why: 'Assess, but not an emergency.' },
      { t: 'Patient with akathisia pacing the hall.', why: 'Uncomfortable; address soon.' },
      { t: 'Patient asking for his clozapine lab results.', why: 'Not urgent.' }
    ] },
    { q: 'Eating disorder unit. Who first?', why: 'Severe hypokalemia can cause fatal arrhythmias.', opts: [
      { t: 'Patient with bulimia whose potassium is 2.6 and who has palpitations.', ok: true, why: 'Risk of arrhythmia: monitor, replace, notify.' },
      { t: 'Patient with anorexia crying after her weigh-in.', why: 'Emotional support soon.' },
      { t: 'Patient with binge eating asking about a meal plan.', why: 'Teaching later.' },
      { t: 'Patient with anorexia asking to exercise.', why: 'Address limits; not urgent.' }
    ] },
    { q: 'Which patient with schizophrenia is most at risk of harming others?', why: 'Paranoia plus command hallucinations directed at a specific person.', opts: [
      { t: 'Paranoid patient who says the voice told him to “get” his roommate before the roommate gets him.', ok: true, why: 'Command hallucination + paranoia + an identified target.' },
      { t: 'Patient with flat affect and alogia.', why: 'Negative symptoms; low risk of violence.' },
      { t: 'Patient with depersonalization.', why: 'Not linked to violence.' },
      { t: 'Patient with clang associations who is laughing.', why: 'Disorganized but not threatening.' }
    ] },
    { q: 'Refeeding day 3 for a patient with severe anorexia. Which finding needs action first?', why: 'Refeeding drops phosphate, which can cause heart failure and seizures.', opts: [
      { t: 'Phosphate 1.8 mg/dL with new ankle swelling and shortness of breath.', ok: true, why: 'Refeeding syndrome: notify, replace phosphate, slow the feeding.' },
      { t: 'She refuses half of her lunch.', why: 'Address with the team; not an emergency.' },
      { t: 'She asks to be weighed facing backward.', why: 'A reasonable accommodation.' },
      { t: 'Lanugo on her back.', why: 'An expected starvation sign.' }
    ] }
  ]
}
];
