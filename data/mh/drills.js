// Exam 4 · Practice drills. Two kinds:
//   type 'pick': each item has its own options { t, ok, tech?, why } — every option explains itself after you answer.
//   type 'sort': each item { q, a, why } is sorted into one of the drill's choices (4 shown at a time when there are many).
window.MH_DRILLS = [
{
  id: 'comm', type: 'pick', kind: 'Pick the reply', topic: 'comm', title: 'Therapeutic communication trainer',
  intro: 'A patient says something. Pick the most therapeutic reply, then see why each reply helps or blocks.',
  items: [
    { ctx: 'Depressed patient, day 2 on the unit.', say: '“I don’t see the point of anything anymore.”', why: 'A statement of hopelessness is a possible covert suicide message: acknowledge it and ask directly.', opts: [
      { t: '“It sounds like you’re feeling hopeless. Are you having thoughts of killing yourself?”', ok: true, tech: 'Reflecting + direct safety question', why: 'Names the feeling and asks about suicide directly; asking does not plant the idea.' },
      { t: '“Things will look better once your medicine starts working.”', tech: 'False reassurance', why: 'Dismisses the feeling and misses the suicide cue.' },
      { t: '“Why do you feel that way?”', tech: '“Why” question', why: 'Puts the patient on the defensive; depressed patients often can’t explain why.' },
      { t: '“You have a lovely family who needs you.”', tech: 'Minimizing / value judgment', why: 'Can increase guilt and shuts down the conversation.' }
    ] },
    { ctx: 'Patient the night before surgery.', say: '“I just know something bad is going to happen tomorrow.”', why: 'Explore the specific fear; don’t reassure it away.', opts: [
      { t: '“What are you most worried might happen?”', ok: true, tech: 'Exploring / seeking clarification', why: 'Invites the patient to name the specific fear so it can be addressed.' },
      { t: '“Don’t worry. Your surgeon has done this hundreds of times.”', tech: 'False reassurance + defending', why: 'Belittles the concern and ends the discussion.' },
      { t: '“Everyone gets nervous before surgery.”', tech: 'Minimizing / stereotyped comment', why: 'Treats the feeling as unimportant.' },
      { t: '“Let’s talk about something more pleasant.”', tech: 'Changing the subject', why: 'Leaves the patient alone with the fear.' }
    ] },
    { ctx: 'Patient with schizophrenia, looking at the ceiling.', say: '“The voices are telling me the food is poisoned.”', why: 'Don’t argue with or agree with the hallucination. Present reality and respond to the feeling.', opts: [
      { t: '“I don’t hear any voices, but that sounds frightening. The food comes from our kitchen, and I can sit with you while you eat.”', ok: true, tech: 'Presenting reality + acknowledging feelings', why: 'States reality without arguing, validates the fear and offers support.' },
      { t: '“What else are the voices telling you about the food?”', tech: 'Encouraging the hallucination', why: 'Exploring the content in detail reinforces it (but do ask if voices tell them to harm anyone).' },
      { t: '“The food isn’t poisoned. That’s ridiculous.”', tech: 'Arguing / belittling', why: 'Increases defensiveness and mistrust.' },
      { t: '“I’ll ask the kitchen to make you something different.”', tech: 'Agreeing with the delusion', why: 'Acts as if the belief were true.' }
    ] },
    { ctx: 'Patient admitted after an overdose.', say: '“Please don’t tell anyone what I’m about to tell you.”', why: 'Never promise to keep secrets that affect safety; be honest about the limits of confidentiality.', opts: [
      { t: '“I can’t promise that. If it affects your safety, I’ll need to share it with the treatment team.”', ok: true, tech: 'Giving information (limits of confidentiality)', why: 'Honest and keeps trust: the patient decides what to share knowing the rules.' },
      { t: '“Of course, anything you say stays between us.”', tech: 'False promise', why: 'A promise you can’t keep: it destroys trust when broken.' },
      { t: '“If you don’t want to tell me, that’s fine.”', tech: 'Closing off', why: 'May miss critical safety information.' },
      { t: '“Why would you want to keep a secret from your care team?”', tech: '“Why” question', why: 'Sounds judgmental.' }
    ] },
    { ctx: 'Patient in mania, pacing the hall.', say: '“I’m going to call the president and tell him my plan for world peace, then I’ll call Oprah, then…”', why: 'Mania needs short, concrete redirection and low stimulation.', opts: [
      { t: '“John, walk with me to your room. We’ll have a sandwich there.”', ok: true, tech: 'Firm, short redirection', why: 'Short attention span: concrete, simple direction toward a basic need, away from stimulation.' },
      { t: '“Tell me all about your plan for world peace.”', tech: 'Encouraging grandiosity', why: 'Feeds the flight of ideas and the stimulation.' },
      { t: '“You know you can’t really call the president.”', tech: 'Arguing', why: 'Leads to escalation; debating is ineffective in mania.' },
      { t: '“Why don’t you join the group in the dayroom?”', tech: 'Increases stimulation', why: 'A group setting escalates mania.' }
    ] },
    { ctx: 'Patient who has been silent for 10 minutes.', say: '(Sits quietly, looking at the floor.)', why: 'Silence and offering self communicate acceptance; don’t fill the silence with questions.', opts: [
      { t: '“I’ll sit here with you for a while.” (Then stays quietly.)', ok: true, tech: 'Offering self + silence', why: 'Shows the patient is worth your time without pressure to talk.' },
      { t: '“How are you feeling? Did you sleep? Have you eaten?”', tech: 'Excessive questioning', why: 'Overwhelming; the patient won’t know which to answer.' },
      { t: '“You won’t get better if you don’t talk to me.”', tech: 'Threatening / disapproving', why: 'Pressures and shames the patient.' },
      { t: '“I’ll come back later when you feel like talking.” (Leaves.)', tech: 'Withdrawal', why: 'Can feel like rejection to a withdrawn patient.' }
    ] },
    { ctx: 'Patient who stopped taking his medication.', say: '“I quit those pills last week.”', why: 'Explore without blame: open-ended, nonjudgmental.', opts: [
      { t: '“Tell me what happened with the medication.”', ok: true, tech: 'Broad opening / exploring', why: 'Invites the reasons (side effects, cost, beliefs) without judgment.' },
      { t: '“Why would you stop your medication?”', tech: '“Why” question', why: 'Sounds accusatory; makes the patient defensive.' },
      { t: '“You really should have talked to your doctor first.”', tech: 'Disapproving', why: 'Judges and shuts down honest disclosure.' },
      { t: '“Lots of people stop their meds; don’t feel bad.”', tech: 'Minimizing / giving approval', why: 'Misses the chance to learn the reason.' }
    ] },
    { ctx: 'Patient whose husband died 2 months ago.', say: '“I keep thinking I should have noticed he was sick sooner.”', why: 'Reflect the feeling (guilt) and keep the patient talking.', opts: [
      { t: '“You feel responsible for not seeing it sooner.”', ok: true, tech: 'Reflecting / verbalizing the implied', why: 'Shows you heard the feeling under the words; invites more.' },
      { t: '“It wasn’t your fault; there was nothing you could have done.”', tech: 'False reassurance', why: 'Well meant, but it dismisses the feeling instead of exploring it.' },
      { t: '“I know exactly how you feel. I lost my father last year.”', tech: 'Self-focused / sympathy', why: 'Shifts the focus to the nurse.' },
      { t: '“You need to start thinking about the future now.”', tech: 'Advice', why: 'Rushes her grief and gives advice.' }
    ] },
    { ctx: 'Patient on day 3 of admission.', say: '“You’re the only one here who understands me. The other nurses are terrible.”', why: 'Splitting: don’t accept the special role or join the criticism; stay consistent with the team.', opts: [
      { t: '“All the staff are working with you. What happened with the other nurses?”', ok: true, tech: 'Presenting reality + exploring', why: 'Doesn’t accept the split, keeps the team united and explores the concern.' },
      { t: '“Thank you. I do try harder than the others.”', tech: 'Accepting the split', why: 'Divides the team and feeds manipulation.' },
      { t: '“That’s not nice to say about the other nurses.”', tech: 'Disapproving', why: 'Judges instead of exploring.' },
      { t: '“I’ll talk to them for you.”', tech: 'Rescuing', why: 'Takes over and reinforces the split.' }
    ] },
    { ctx: 'Patient with anxiety, hyperventilating in the hallway.', say: '“I can’t breathe! I’m going to die!”', why: 'At panic level: stay, be calm, use short simple directions.', opts: [
      { t: '“I’m staying with you. You’re safe. Breathe with me: in… and out slowly.”', ok: true, tech: 'Offering self + simple directions', why: 'Short, calm, concrete; the patient can’t process more right now.' },
      { t: '“Tell me what triggered this attack.”', tech: 'Exploring too early', why: 'At panic level, the patient can’t problem-solve. Explore later.' },
      { t: '“You’re not dying; it’s just anxiety. Calm down.”', tech: 'Minimizing', why: 'Dismissive, and “calm down” doesn’t tell the patient how.' },
      { t: '“Let me get you some information about panic disorder.”', tech: 'Teaching at the wrong time', why: 'No learning happens at panic level.' }
    ] },
    { ctx: 'Patient preparing for discharge after 3 weeks.', say: '“Can I have your number so we can stay in touch?”', why: 'Termination: keep boundaries; redirect to supports.', opts: [
      { t: '“Our work together ends at discharge. Let’s go over who you can call when you need support.”', ok: true, tech: 'Maintaining boundaries + giving information', why: 'Clear, kind limit, and it points to real ongoing supports.' },
      { t: '“Sure, text me any time.”', tech: 'Boundary violation', why: 'Turns a therapeutic relationship into a social one.' },
      { t: '“I’m not allowed to, sorry.”', tech: 'Deflecting to rules', why: 'True, but misses the feelings about the ending and the follow-up plan.' },
      { t: '“Why do you want my number?”', tech: '“Why” question', why: 'Sounds suspicious and judging.' }
    ] },
    { ctx: 'Patient with OCD, washing hands for the 8th time.', say: '“I have to finish washing or something bad will happen.”', why: 'Don’t stop the ritual abruptly; acknowledge the anxiety and work within the schedule.', opts: [
      { t: '“You feel very anxious when you can’t wash. Finish, and then we’ll walk to breakfast together.”', ok: true, tech: 'Reflecting + structure', why: 'Acknowledges the anxiety, allows the ritual for now and keeps the day on schedule.' },
      { t: '“Stop washing now; your hands are clean.”', tech: 'Interrupting the ritual', why: 'Sends anxiety soaring; abrupt limits fail early in treatment.' },
      { t: '“Nothing bad is going to happen.”', tech: 'False reassurance', why: 'Repeated reassurance becomes part of the compulsion.' },
      { t: '“Why do you keep doing that?”', tech: '“Why” question', why: 'The patient already knows it is excessive; it shames them.' }
    ] }
  ]
},
{
  id: 'technique', type: 'sort', kind: 'Name it', topic: 'comm', title: 'Name the technique or block',
  intro: 'Read the nurse’s line and name it: a therapeutic technique, or a block.',
  ask: 'Which technique or block is this?',
  choices: ['Silence', 'Offering self', 'Giving broad openings', 'Making observations', 'Restating', 'Reflecting', 'Focusing', 'Exploring', 'Seeking clarification', 'Presenting reality', 'Voicing doubt', 'Summarizing', 'Giving recognition', 'False reassurance', 'Giving advice', 'Asking “why”', 'Changing the subject', 'Giving approval', 'Minimizing feelings', 'Defending'],
  items: [
    { q: '“What would you like to talk about today?”', a: 'Giving broad openings', why: 'Lets the patient choose the topic.' },
    { q: '“I notice you’re clenching your fists.”', a: 'Making observations', why: 'Points out behavior so the patient can connect it to feelings.' },
    { q: 'Patient: “I can’t sleep.” Nurse: “You can’t sleep at night?”', a: 'Restating', why: 'Repeats the main idea back to show it was heard.' },
    { q: 'Patient: “Should I leave my husband?” Nurse: “What do you think you should do?”', a: 'Reflecting', why: 'Returns the question so the patient explores their own answer.' },
    { q: '“You’ve mentioned several things. Let’s go back to your job.”', a: 'Focusing', why: 'Narrows to one important point; useful with scattered thinking.' },
    { q: '“Tell me more about that.”', a: 'Exploring', why: 'Invites more detail.' },
    { q: '“I’m not sure I follow. Can you give me an example?”', a: 'Seeking clarification', why: 'Checks understanding.' },
    { q: '“That was a car backfiring, not a gunshot.”', a: 'Presenting reality', why: 'States what is real without arguing.' },
    { q: '“Really? That’s hard to believe.”', a: 'Voicing doubt', why: 'Gently questions a distorted belief.' },
    { q: '“So far we’ve talked about your sleep and your worries about work.”', a: 'Summarizing', why: 'Pulls together the main points.' },
    { q: '“Good morning, Mr. James. You combed your hair today.”', a: 'Giving recognition', why: 'Acknowledges effort without judging it as good or bad.' },
    { q: '“I’ll sit with you for a while.”', a: 'Offering self', why: 'Offers presence without conditions.' },
    { q: '“Everything will be fine. You’ll see.”', a: 'False reassurance', why: 'Belittles a real concern.' },
    { q: '“If I were you, I’d move out.”', a: 'Giving advice', why: 'Takes away the patient’s problem-solving.' },
    { q: '“Why didn’t you come to group?”', a: 'Asking “why”', why: 'Implies criticism and makes the patient defensive.' },
    { q: 'Patient: “I want to die.” Nurse: “Did you go to the AA meeting?”', a: 'Changing the subject', why: 'Ignores a suicide statement.' },
    { q: '“I’m so proud of you for applying for that job.”', a: 'Giving approval', why: 'Judges; the patient may start acting to please the nurse.' },
    { q: '“Everyone feels down sometimes.”', a: 'Minimizing feelings', why: 'Treats the patient’s feeling as unimportant.' },
    { q: '“Dr. Smith is an excellent psychiatrist. She wouldn’t do that.”', a: 'Defending', why: 'Protects the staff instead of hearing the patient’s complaint.' },
    { q: '(The nurse waits quietly while the patient gathers their thoughts.)', a: 'Silence', why: 'Gives time to think and shows patience.' }
  ]
},
{
  id: 'defense', type: 'sort', kind: 'Match the quote', topic: 'stress', title: 'Defense mechanisms',
  intro: 'Match what the patient says or does to the defense mechanism.',
  ask: 'Which defense mechanism?',
  choices: ['Denial', 'Projection', 'Displacement', 'Rationalization', 'Reaction formation', 'Regression', 'Repression', 'Suppression', 'Sublimation', 'Compensation', 'Intellectualization', 'Undoing', 'Conversion', 'Splitting', 'Identification', 'Dissociation'],
  items: [
    { q: 'A man with a positive biopsy says, “The lab mixed up the samples. I don’t have cancer.”', a: 'Denial', why: 'Refuses to accept a painful reality.' },
    { q: 'A woman who is angry at her boss comes home and screams at her children.', a: 'Displacement', why: 'Feelings are moved from a threatening target to a safer one.' },
    { q: 'A husband who wants to have an affair accuses his wife of cheating.', a: 'Projection', why: 'Puts his own unacceptable impulse onto someone else.' },
    { q: '“I didn’t get the promotion because the boss doesn’t like me.”', a: 'Rationalization', why: 'A reasonable-sounding excuse that protects self-esteem.' },
    { q: 'A man who secretly resents his brother is constantly praising him to everyone.', a: 'Reaction formation', why: 'Shows the opposite of the hidden feeling.' },
    { q: 'An adult patient curls up in bed and sucks her thumb after hearing bad news.', a: 'Regression', why: 'Returns to an earlier developmental behavior under stress.' },
    { q: 'A woman has no memory of the abuse she suffered as a child.', a: 'Repression', why: 'An **unconscious** blocking of a painful memory.' },
    { q: 'A student says, “I’ll deal with my breakup after finals are over.”', a: 'Suppression', why: 'A **conscious** choice to set it aside for now.' },
    { q: 'A man with angry impulses becomes a champion kickboxer.', a: 'Sublimation', why: 'Channels an unacceptable impulse into a socially valued activity.' },
    { q: 'A student who struggles in sports works hard to become the top student in class.', a: 'Compensation', why: 'Makes up for a perceived weakness by excelling elsewhere.' },
    { q: 'A man whose wife just died calmly discusses the statistics of her disease with the nurse.', a: 'Intellectualization', why: 'Uses facts and logic to avoid the feeling.' },
    { q: 'After yelling at his wife, a man brings home flowers and cooks dinner.', a: 'Undoing', why: 'An act meant to cancel out a previous one.' },
    { q: 'A soldier develops paralysis of his trigger arm with no physical cause.', a: 'Conversion', why: 'Anxiety turned into a physical symptom.' },
    { q: '“You’re the best nurse here. The night nurse is horrible and cruel.”', a: 'Splitting', why: 'Sees people as all good or all bad.' },
    { q: 'A teen dresses and talks exactly like her favorite nurse.', a: 'Identification', why: 'Takes on the traits of someone admired.' },
    { q: 'During questions about the assault, the patient stares blankly and says she feels like she is “floating outside her body.”', a: 'Dissociation', why: 'Disconnects from awareness to escape overwhelming distress.' }
  ]
},
{
  id: 'levels', type: 'sort', kind: 'Sort it', topic: 'stress', title: 'Levels of anxiety',
  intro: 'Read the behavior and sort it into mild, moderate, severe or panic anxiety. The level tells you what the nurse does.',
  ask: 'Which level of anxiety?',
  choices: ['Mild', 'Moderate', 'Severe', 'Panic'],
  items: [
    { q: 'A student feels alert and focused before an exam, and studies efficiently.', a: 'Mild', why: 'Perceptual field heightened; anxiety helps learning.' },
    { q: 'A patient is restless and fidgets, but follows the teaching and asks good questions.', a: 'Mild', why: 'Slight discomfort, still able to learn and problem-solve.' },
    { q: 'A patient misses parts of the discharge teaching, but can focus when the nurse redirects him.', a: 'Moderate', why: 'Narrowed field and selective inattention; can solve problems **with help**.' },
    { q: 'A patient with a voice tremor and a heart rate of 104 focuses only on the test results she’s waiting for.', a: 'Moderate', why: 'Focuses on the source of anxiety; can still work with guidance.' },
    { q: 'A patient can’t follow simple directions, has a headache and nausea, and keeps focusing on one small detail.', a: 'Severe', why: 'Greatly reduced field; problem-solving feels impossible; needs direction.' },
    { q: 'A patient is trembling, pacing and says she can’t think straight; she can’t say what is bothering her.', a: 'Severe', why: 'Scattered attention, unable to see connections or solve problems.' },
    { q: 'A patient is screaming, running down the hall and doesn’t seem to recognize the nurse.', a: 'Panic', why: 'Unable to attend to the environment; disorganized; risk of harm.' },
    { q: 'A patient says the room feels unreal and he is about to die, and he can’t speak in full sentences.', a: 'Panic', why: 'Derealization and terror; completely unable to process what is happening.' }
  ]
},
{
  id: 'legal', type: 'pick', kind: 'Make the call', topic: 'legal', title: 'Legal and ethical decisions',
  intro: 'Real situations from the unit. Pick the legally and ethically correct action.',
  items: [
    { q: 'A patient admitted voluntarily for depression tells you, “I want to leave now.” She denies suicidal thoughts.', why: 'Voluntary patients have the right to request discharge; the provider reevaluates.', opts: [
      { t: 'Notify the provider so the patient can be evaluated for discharge.', ok: true, why: 'Respects her right to request release while allowing a safety reevaluation.' },
      { t: 'Tell her she must stay until the treatment plan is finished.', why: 'Holding her without legal grounds is **false imprisonment**.' },
      { t: 'Lock her belongings away so she can’t leave.', why: 'Coercion, also false imprisonment.' },
      { t: 'Have her sign out AMA immediately and walk her to the door.', why: 'Skips the evaluation; she may need a safety assessment first.' }
    ] },
    { q: 'An involuntarily committed patient refuses his scheduled oral antipsychotic. He is calm and not threatening anyone.', why: 'Committed patients keep the right to refuse treatment outside an emergency.', opts: [
      { t: 'Respect the refusal, explore his reasons, document, and notify the provider.', ok: true, why: 'Involuntary status does not remove the right to refuse; there is no emergency.' },
      { t: 'Give the medication IM, since he is committed.', why: 'Forcing medication without an emergency or court order is **battery**.' },
      { t: 'Hide the medication in his applesauce.', why: 'Deceptive and a violation of informed consent.' },
      { t: 'Tell him he can’t go to the dayroom until he takes it.', why: 'Coercion; using privileges as punishment.' }
    ] },
    { q: 'An agitated patient is shouting and throwing chairs at staff. Verbal de-escalation and a PRN have not worked. There is no restraint order.', why: 'In an emergency the nurse may initiate restraint or seclusion and obtain an order promptly.', opts: [
      { t: 'Initiate seclusion or restraint with trained staff, then get the provider’s order and face-to-face evaluation within 1 hour.', ok: true, why: 'Imminent danger after less-restrictive measures failed; orders follow promptly.' },
      { t: 'Wait for the provider to arrive and write an order.', why: 'Leaves staff and patients in danger.' },
      { t: 'Ask for a PRN restraint order to keep on file for future outbursts.', why: 'Restraint orders are **never PRN or standing**.' },
      { t: 'Tell him he’ll go to seclusion if he doesn’t sit down, and leave him alone.', why: 'A threat and abandonment; not an intervention.' }
    ] },
    { q: 'An adult patient has been in restraints for 4 hours and is still combative.', why: 'Adult orders last up to 4 hours; reassess and obtain a renewal if still needed.', opts: [
      { t: 'Have the provider reassess and renew the order if restraint is still needed.', ok: true, why: 'Adult orders are limited to 4 hours, renewable up to 24.' },
      { t: 'Keep the restraints on; the original order covers the shift.', why: 'The order has expired; continuing is false imprisonment.' },
      { t: 'Remove the restraints because the time is up, regardless of behavior.', why: 'Unsafe if he is still dangerous; reassessment decides.' },
      { t: 'Switch him to seclusion so a new order isn’t needed.', why: 'Seclusion needs an order too.' }
    ] },
    { q: 'During a session, a patient says, “When I get out, I’m going to kill my ex-boyfriend. I know where he works.”', why: 'A serious threat against an identifiable person triggers the duty to warn and protect.', opts: [
      { t: 'Report it to the provider and treatment team immediately so the person can be warned and protected.', ok: true, why: 'Tarasoff: protecting an identifiable victim outweighs confidentiality.' },
      { t: 'Keep it confidential because it was said in therapy.', why: 'Confidentiality has an exception for serious threats.' },
      { t: 'Call the ex-boyfriend yourself from your personal phone.', why: 'Follow the team and policy process; don’t act alone outside it.' },
      { t: 'Document it and wait to see if he says it again.', why: 'Delays protection of a person at risk.' }
    ] },
    { q: 'A woman calls the unit: “Is my brother John Smith a patient there? I’m worried about him.”', why: 'Even confirming someone is a patient is a breach without consent.', opts: [
      { t: '“I can’t confirm whether anyone is a patient here. If he is, I can give him a message.”', ok: true, why: 'Protects confidentiality while still helping.' },
      { t: '“Yes, he’s here and doing better.”', why: 'Confirms admission without consent: a HIPAA breach.' },
      { t: '“I’ll transfer you to his room.”', why: 'Confirms he is a patient.' },
      { t: '“He asked us not to tell anyone he was here.”', why: 'Also reveals he is a patient.' }
    ] },
    { q: 'A nursing student wants to post a photo of the unit’s holiday party on social media. No faces are shown, but a patient’s artwork with a first name is visible.', why: 'Any identifiable detail is a confidentiality breach; social media is never private.', opts: [
      { t: 'Don’t post it; anything that could identify a patient is a breach.', ok: true, why: 'A name on artwork, plus the location, can identify a patient.' },
      { t: 'Post it, since no faces are shown.', why: 'The name makes it identifiable.' },
      { t: 'Post it to a private account only.', why: 'Private accounts are not confidential.' },
      { t: 'Post it after discharge.', why: 'Confidentiality doesn’t end at discharge, or even at death.' }
    ] },
    { q: 'A nurse tells a patient, “If you don’t take your medicine, I’ll have the staff hold you down and give you a shot.” The patient is not dangerous.', why: 'A threat of unwanted touching is assault.', opts: [
      { t: 'This is assault; the nurse should explore the refusal and notify the provider instead.', ok: true, why: 'A threat that makes the patient fear unwanted contact = **assault**.' },
      { t: 'This is acceptable limit setting.', why: 'Threatening force is not therapeutic limit setting.' },
      { t: 'This is battery.', why: 'Battery requires actual touching without consent.' },
      { t: 'This is false imprisonment.', why: 'No one was confined.' }
    ] },
    { q: 'A depressed patient on 15-minute checks dies by suicide. The chart shows that checks were not done for 2 hours.', why: 'Duty + breach + harm caused by the breach = negligence (malpractice).', opts: [
      { t: 'Negligence: the nurse had a duty, breached it, and the breach caused harm.', ok: true, why: 'All the elements of malpractice are present.' },
      { t: 'No liability, because suicide can’t be predicted.', why: 'Failing to follow the ordered precautions is a breach of the standard of care.' },
      { t: 'Only the provider is liable.', why: 'Nurses are responsible for carrying out ordered precautions.' },
      { t: 'Assault.', why: 'No threat of touch occurred.' }
    ] }
  ]
},
{
  id: 'erikson', type: 'sort', kind: 'Match the stage', topic: 'life', title: 'Erikson’s stages',
  intro: 'Read the person and pick the psychosocial crisis they are facing.',
  ask: 'Which stage of Erikson?',
  choices: ['Trust vs mistrust', 'Autonomy vs shame and doubt', 'Initiative vs guilt', 'Industry vs inferiority', 'Identity vs role confusion', 'Intimacy vs isolation', 'Generativity vs self-absorption', 'Integrity vs despair'],
  items: [
    { q: 'A 9-month-old cries when the caregiver leaves and calms when needs are met reliably.', a: 'Trust vs mistrust', why: 'Infancy: consistent care builds trust.' },
    { q: 'A 2-year-old insists, “Me do it!” when getting dressed.', a: 'Autonomy vs shame and doubt', why: 'Toddlers build self-control and independence.' },
    { q: 'A 5-year-old makes up games and leads friends in pretend play.', a: 'Initiative vs guilt', why: 'Preschoolers start activities and develop purpose.' },
    { q: 'A 10-year-old is proud of finishing a science project and wants to master new skills.', a: 'Industry vs inferiority', why: 'School age: competence through accomplishment.' },
    { q: 'A 15-year-old tries different styles and friend groups, asking “Who am I?”', a: 'Identity vs role confusion', why: 'Adolescence: forming a sense of self.' },
    { q: 'A 27-year-old feels lonely and has trouble committing to a relationship.', a: 'Intimacy vs isolation', why: 'Young adulthood: close, committed relationships.' },
    { q: 'A 50-year-old volunteers to mentor new nurses and coaches youth soccer.', a: 'Generativity vs self-absorption', why: 'Middle adulthood: guiding the next generation.' },
    { q: 'A 78-year-old reviews his life with peace and says he’d do most of it again.', a: 'Integrity vs despair', why: 'Older adulthood: accepting one’s life with meaning.' },
    { q: 'A 70-year-old says, “I wasted my life. It’s too late to fix anything.”', a: 'Integrity vs despair', why: 'Despair: regret and fear of death.' },
    { q: 'A 7-year-old who keeps failing at reading says, “I’m just dumb.”', a: 'Industry vs inferiority', why: 'Inferiority: feeling inadequate.' }
  ]
},
{
  id: 'ethics', type: 'sort', kind: 'Match the principle', topic: 'legal', title: 'Ethical principles',
  intro: 'Which ethical principle is the nurse acting on?',
  ask: 'Which principle?',
  choices: ['Autonomy', 'Beneficence', 'Nonmaleficence', 'Justice', 'Fidelity', 'Veracity'],
  items: [
    { q: 'The nurse respects a competent patient’s decision to refuse ECT.', a: 'Autonomy', why: 'The right to make one’s own decisions.' },
    { q: 'The nurse stays an extra 15 minutes to calm an anxious patient.', a: 'Beneficence', why: 'Acting for the patient’s good.' },
    { q: 'The nurse keeps a patient’s diagnosis private from a curious visitor.', a: 'Nonmaleficence', why: 'Avoiding harm (the textbook’s example for protecting confidential information).' },
    { q: 'The ICU nurse gives the same attention to a patient after a suicide attempt as to a patient with a brain aneurysm.', a: 'Justice', why: 'Fair, equal care regardless of the cause.' },
    { q: 'The nurse comes back at 2 p.m. as promised to finish the conversation.', a: 'Fidelity', why: 'Keeping promises and commitments.' },
    { q: 'The nurse honestly explains that the antidepressant may cause sexual side effects.', a: 'Veracity', why: 'Telling the truth.' },
    { q: 'The nurse checks the dose twice before giving lithium to avoid toxicity.', a: 'Nonmaleficence', why: 'Preventing harm.' },
    { q: 'The nurse lets a patient choose the time of her shower and which group to attend.', a: 'Autonomy', why: 'Supporting choice.' }
  ]
},
{
  id: 'medsafety', type: 'sort', kind: 'Make the call', topic: null, title: 'Psych med safety calls',
  intro: 'A patient reports a finding on lithium, an antidepressant or an anxiolytic. Expected, hold and notify, or emergency?',
  ask: 'What do you do?',
  choices: ['Expected: teach and keep giving', 'Hold the dose and notify the provider', 'Emergency: act now'],
  items: [
    { q: 'Lithium level 0.9 mEq/L; the patient has a fine hand tremor and is thirsty.', a: 'Expected: teach and keep giving', why: 'In range; fine tremor, thirst and polyuria are expected side effects.' },
    { q: 'Lithium patient with 2 days of vomiting and diarrhea, a coarse tremor and confusion.', a: 'Hold the dose and notify the provider', why: 'Early toxicity (about 1.5–2.0): hold, draw a level, notify. Fluid loss raises the level.' },
    { q: 'Lithium level 2.8 mEq/L; the patient is barely responsive and has a seizure.', a: 'Emergency: act now', why: 'Severe toxicity: emergency care, possibly hemodialysis.' },
    { q: 'Week 1 of sertraline: mild nausea and a headache.', a: 'Expected: teach and keep giving', why: 'Common early SSRI effects that usually fade; take with food.' },
    { q: 'On sertraline and recently started tramadol: fever 39.4 °C, agitation, sweating, tremor and muscle jerks.', a: 'Emergency: act now', why: 'Serotonin syndrome: stop the serotonergic drugs and get emergency care.' },
    { q: 'On phenelzine (an MAOI): a pounding occipital headache, stiff neck and BP 210/120 after a pepperoni pizza.', a: 'Emergency: act now', why: 'Hypertensive crisis from tyramine.' },
    { q: 'On amitriptyline: dry mouth and mild constipation.', a: 'Expected: teach and keep giving', why: 'Anticholinergic effects: sips of water, sugarless gum, fiber and fluids.' },
    { q: 'On amitriptyline: no urine output for 10 hours and a distended bladder.', a: 'Hold the dose and notify the provider', why: 'Urinary retention needs medical attention.' },
    { q: 'On lamotrigine for 3 weeks: a new rash on the chest.', a: 'Hold the dose and notify the provider', why: 'Any rash may be the start of Stevens-Johnson syndrome: stop and notify.' },
    { q: 'On lorazepam: respiratory rate 8 after drinking alcohol.', a: 'Emergency: act now', why: 'CNS and respiratory depression: airway support; flumazenil reverses benzodiazepines.' },
    { q: 'Started buspirone 4 days ago and says it isn’t helping yet.', a: 'Expected: teach and keep giving', why: 'Buspirone takes 2–4 weeks to work.' },
    { q: 'On valproate: bruising easily, and platelets are 60,000.', a: 'Hold the dose and notify the provider', why: 'Thrombocytopenia is a known adverse effect.' },
    { q: 'An 18-year-old in week 2 of fluoxetine says, “I’ve been thinking about ending it.”', a: 'Emergency: act now', why: 'New suicidal thinking early in treatment (black box warning, under 25): safety first.' },
    { q: 'On bupropion: has a seizure history and wants to quit smoking.', a: 'Hold the dose and notify the provider', why: 'Bupropion lowers the seizure threshold.' }
  ]
},
{
  id: 'priority', type: 'pick', kind: 'Who first?', topic: null, title: 'Who do you see first?',
  intro: 'Four patients, one nurse. Pick who needs you first, and see why.',
  items: [
    { q: 'Shift report on the mood unit. Which patient do you see first?', why: 'Sudden calm in a suicidal patient can mean a decision to act.', opts: [
      { t: 'A depressed patient who was tearful all week and today is calm, smiling, and gave her watch to a roommate.', ok: true, why: 'Sudden improvement plus giving things away = high suicide risk now.' },
      { t: 'A patient with mania who is talking loudly in the dayroom.', why: 'Needs redirection, but isn’t in immediate danger.' },
      { t: 'A patient with OCD who is late to breakfast because of washing rituals.', why: 'Build in time; not urgent.' },
      { t: 'A patient with GAD asking for her scheduled buspirone.', why: 'A scheduled, nonurgent medication.' }
    ] },
    { q: 'Which patient on lithium needs your attention first?', why: 'GI loss plus neuro signs suggests rising lithium.', opts: [
      { t: 'Vomiting since last night, with a coarse tremor and slurred speech.', ok: true, why: 'Signs of lithium toxicity: hold, get a level, notify.' },
      { t: 'Complains of thirst and urinating often.', why: 'Expected side effects.' },
      { t: 'Has a fine hand tremor when holding a cup.', why: 'Expected side effect.' },
      { t: 'Gained 2 kg over 2 months.', why: 'A long-term side effect to address, but not urgent.' }
    ] },
    { q: 'In the ED waiting area, who do you assess first?', why: 'A plan, a lethal means and a timeline mean the highest risk.', opts: [
      { t: 'A man who says he has a gun in his car and plans to use it tonight.', ok: true, why: 'A specific plan + lethal means + timeline: immediate safety measures.' },
      { t: 'A woman having a panic attack with a normal ECG.', why: 'Very distressing, but a cardiac cause has been ruled out.' },
      { t: 'A teen with superficial, healing cuts who denies suicidal intent.', why: 'Needs evaluation, but there is no active danger now.' },
      { t: 'A man who is tearful after a breakup and denies suicidal thoughts.', why: 'Assess, but lower acuity.' }
    ] },
    { q: 'A patient in acute mania. Which need comes first?', why: 'Maslow: physiological needs and safety first.', opts: [
      { t: 'Fluids and calories: she hasn’t eaten or drunk in 2 days and her urine is dark.', ok: true, why: 'Dehydration and exhaustion can be life-threatening in mania.' },
      { t: 'Insight into why she stopped her lithium.', why: 'Insight comes after physical stabilization.' },
      { t: 'Joining the afternoon group.', why: 'Groups overstimulate acute mania.' },
      { t: 'Teaching about her diagnosis.', why: 'She can’t learn in acute mania.' }
    ] }
  ]
}
];
