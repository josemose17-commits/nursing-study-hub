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
