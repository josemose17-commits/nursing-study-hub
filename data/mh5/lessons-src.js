// Original concise teaching and coached cases. The builder preserves the
// established lesson IDs, recall-point indices and independent graded items.
const {lesson:L,pick:C}=require('../../tools/mh-lesson-tools');
module.exports={
 't-spectrum':L([
  'Psychosis describes impaired reality testing, not one diagnosis. A hallucination is a perception without an external stimulus; a delusion concerns a fixed belief. Duration, functioning, mood, substance exposure and medical causes help distinguish disorders.',
  'Positive symptoms add experiences such as hallucinations or disorganized speech. Negative symptoms involve reductions such as motivation or expression. Cognitive difficulties can affect attention and planning. These categories describe different needs, not a person’s worth.',
  'Ask about the actual experience and its effect. With voices, assess content, distress and any command or safety concern. A diagnosis alone does not establish dangerousness. Compare the named spectrum disorders and vocabulary in the full reference.'
 ],'A patient hears a voice when no one is speaking and has become less able to organize daily tasks.',
 ['compare','Describe the experience before naming the disorder',[
  ['Perception','What is the person hearing or sensing?'],['Belief and thought','What meaning or belief is attached, and is thinking organized?'],['Function and time','What changed, for how long, and with what effect?']
 ],'Symptoms, time course and context work together.'],[
  C('The patient says, “A voice tells me I should leave, but I do not want to.”','Which assessment best follows?',[
   ['Ask what the voice says, how distressing it is and whether the person feels able to resist or is at risk.','The content and the person’s response provide actual safety information.'],
   ['Assume every voice means the person will attack someone.','A symptom label alone does not establish intent or dangerous behavior.'],
   ['Focus only on whether the voice sounds male or female.','That detail does not address the most relevant distress and safety questions.']
  ],0,'Assess the content, effect and response rather than assuming risk from the label.'),
  C('The person needs help initiating a shower and organizing the steps despite fewer reported voices.','What does this observation suggest for nursing care?',[
   ['Fewer positive symptoms mean all functional support can stop.','Reduced voices do not show that motivation, cognition and self-care needs have resolved.'],
   ['Assess motivation, cognition and self-care needs separately from the voices.','Different symptom domains can improve at different rates and need different supports.'],
   ['Document lack of effort without exploring barriers.','A judgment about effort misses the functional and symptom assessment.']
  ],1,'Evaluate functional recovery as well as positive symptoms.')
 ],{sources:[],caution:'A symptom description is not enough to diagnose a spectrum disorder or predict violence. Use the individual’s history, current findings and assessment.'}),
 't-antipsychotics':L([
  'Many antipsychotics alter dopamine signaling; their actions differ. Some block D2 receptors, while others are partial agonists. Effects on movement pathways help explain EPS. Other receptor actions can add sedation, orthostasis or anticholinergic effects.',
  'Match the finding with its urgency. A new neck or jaw spasm can threaten the airway; new marked restlessness may be akathisia; persistent involuntary movements need evaluation. Rigidity, fever, altered mental status and unstable vital signs raise concern for NMS and need emergency action.',
  'Monitor the specific drug’s risks and the person’s goals: movements, metabolic effects, cardiovascular effects and adherence barriers. Clozapine still needs ANC monitoring according to its label despite REMS removal. Not every newer treatment works through dopamine blockade.'
 ],'A patient taking an antipsychotic reports a new, uncomfortable need to keep moving and says, “I cannot sit still.”',
 ['decision','Identify the effect → assess urgency → use the drug-specific plan',[
  ['Movement','Distinguish restlessness, spasm and persistent involuntary movement.'],['Emergency cluster','Rigidity, fever, mental-status change and unstable vital signs need urgent action.'],['Ongoing safety','Monitor movements, metabolic effects and the specific drug’s precautions.']
 ],'Do not treat every new movement complaint as the same adverse effect.'],[
  C('The restlessness began after a medication change; there is no described fever or rigidity.','What is the best assessment approach?',[
   ['Assume it is worsening anxiety and increase demands to sit still.','Medication-related akathisia can resemble anxiety; the new timing needs assessment.'],
   ['Tell the patient movement symptoms cannot be medication-related.','Antipsychotics can cause several distinct movement effects.'],
   ['Assess timing, severity and medication exposure, including possible akathisia, and notify the treatment team.','This recognizes a possible adverse effect without diagnosing from one statement or independently changing the prescription.']
  ],2,'Use the new timing and the type of movement to guide assessment.'),
  C('A person taking clozapine asks if blood monitoring ended when REMS was removed.','Which teaching is accurate?',[
   ['The distribution-program change did not remove the neutropenia risk or label-based ANC monitoring.','Monitoring continues according to prescribing information, with prompt attention to infection symptoms.'],
   ['No further ANC monitoring is needed for any patient.','REMS removal did not remove the clinical monitoring recommendation.'],
   ['All antipsychotics use the same blood-monitoring schedule.','Monitoring differs by medicine and patient factors.']
  ],0,'Separate a distribution-program requirement from the drug’s ongoing clinical risk.')
 ],{sources:['clozapine','muscarinic'],caution:'Current distinction: FDA approved xanomeline/trospium for adult schizophrenia through a muscarinic mechanism in 2024. “All antipsychotics block D2” is not an accurate universal rule. Follow the particular product label.'}),
 't-kids':L([
  'Assess a child’s development, abilities, environment and functioning across settings. Information from the child, caregivers and school can show different parts of the pattern. Adapt communication, play and screening to the child’s needs.',
  'Use clear expectations, predictable routines and specific reinforcement of useful behavior. Offer choices that are safe and manageable. Least restrictive care depends on assessed risk; it is not one fixed ladder that every child must climb.',
  'Include family supports, school accommodations and appropriate referral. Check for pain, sleep problems, sensory needs and safety concerns rather than defining every behavior as disobedience. Follow reporting duties when abuse or neglect is suspected.'
 ],'A child struggles with transitions at school but follows a short picture schedule successfully during the clinic visit.',
 ['flow','Gather context → adapt support → measure function',[
  ['Context','Child, caregiver and school observations may differ.'],['Support','Predictable routine, brief directions and useful choices.'],['Measure','Participation, safety and daily skills across settings.']
 ],'Support the child’s abilities while investigating barriers.'],[
  C('The child becomes distressed when several instructions are given together.','Which adjustment is most useful first when there is no immediate danger?',[
   ['Give the full list faster so the child learns to keep up.','More speed and complexity do not address the observed difficulty.'],
   ['Use one brief direction with a visual cue, then check the response.','This reduces the demand and tests whether adapted communication helps.'],
   ['Move directly to a restrictive intervention because the child is distressed.','Distress without an assessed need for restriction calls for less restrictive support and assessment.']
  ],1,'Change the demand to fit the observed need before escalating restriction.'),
  C('Caregivers report sleep problems, while the teacher reports afternoon inattention.','What should the nurse do with these observations?',[
   ['Choose one source and discard the other.','Different settings and times can reveal different contributors.'],
   ['Diagnose solely from the teacher’s description.','A full developmental and clinical assessment is still needed.'],
   ['Explore both patterns and their effect on daily function.','Multiple perspectives help connect symptoms, timing, sleep and setting.']
  ],2,'Gather a pattern across settings rather than treating one report as complete.')
 ],{caution:'A voluntary quiet space is different from seclusion. Restrictive interventions require an immediate safety justification and the applicable authorization, monitoring and release process.'}),
 't-attach':L([
  'A child’s response to stress must be understood in developmental and caregiving context. Withdrawal, regression, play or approach to strangers can prompt assessment, but one behavior alone does not prove trauma or establish an attachment diagnosis.',
  'Begin with present safety, predictable care and a stable supportive relationship. Use developmentally appropriate language and opportunities for expression. Do not pressure a child to provide a detailed trauma story to earn help.',
  'Support the safe caregiver and connect the family with qualified assessment and treatment. Trauma processing follows preparation and stabilization under the treatment plan. Maintain safeguarding and reporting duties when a caregiver may be involved in harm.'
 ],'A child becomes distressed by an unexpected change in the visit and becomes more settled when the plan is shown with pictures.',
 ['flow','Safety → predictable connection → supported treatment',[
  ['Safety','Assess current needs and safeguarding concerns.'],['Connection','Use a stable, understandable and respectful routine.'],['Treatment','Prepare for specialist work without forced disclosure.']
 ],'A behavior is a cue to investigate, not proof of a single cause.'],[
  C('The child begins repeating a frightening theme in play.','Which nursing response fits?',[
   ['Observe, support expression and arrange appropriate assessment without declaring the play diagnostic.','Play can provide information, but interpretation needs developmental and clinical context.'],
   ['Insist the child confirm the nurse’s theory of what happened.','Leading or pressured questioning can be harmful and does not provide a sound assessment.'],
   ['Dismiss the behavior because children always pretend.','The change may deserve careful assessment and support.']
  ],0,'Be curious and supportive without assuming or leading a trauma account.'),
  C('A safe caregiver asks what can help during daily transitions.','Which suggestion matches stabilization?',[
   ['Change routines unpredictably to remove dependence on them.','Unplanned changes can increase distress rather than build safety.'],
   ['Use a predictable plan and prepare for small changes, then notice what helps.','Predictability and gradual preparation can support regulation and trust.'],
   ['Require a trauma discussion before every routine task.','Daily support does not depend on repeated detailed disclosure.']
  ],1,'Support stability and coping before demanding difficult processing.')
 ]),
 't-somafact':L([
  'Physical symptoms and distress deserve assessment. Somatic symptom disorder concerns a persistent pattern of symptom-related thoughts, anxiety or behavior; it does not mean the person is pretending or that medical illness is impossible.',
  'Factitious disorder involves identified deception without an obvious external reward; malingering involves intentional presentation for external gain. Neither conclusion follows from normal test results alone. Functional neurological symptoms also require a proper clinical assessment, not a judgment about apparent concern.',
  'Acknowledge symptoms, coordinate consistent follow-up and build coping and functioning. Assess new or changing physical findings on their merits. Suspected induced illness in a dependent person requires safeguarding, not a debate about the caregiver’s motive.'
 ],'A patient has repeated physical symptoms and increasing difficulty leaving home. Earlier investigations were reassuring, but the pattern is affecting daily life.',
 ['compare','Symptoms, deception and external reward are different questions',[
  ['Symptom-related distress','Assess experience, excessive concern and functional impact.'],['Identified deception','Requires evidence; normal testing is not proof.'],['External incentive','A possible incentive alone does not establish intentional fabrication.']
 ],'Validate distress while keeping clinical assessment and diagnostic reasoning separate.'],[
  C('A colleague says normal tests prove that the patient is intentionally faking.','Which correction is most appropriate?',[
   ['Every unexplained symptom is factitious disorder.','Unexplained symptoms do not establish intentional deception.'],
   ['Calm behavior is enough to diagnose conversion disorder.','Apparent concern alone cannot establish the diagnosis or cause.'],
   ['Normal results do not prove fabrication; assess the clinical pattern, functioning and any actual evidence.','This avoids inferring intent from a negative investigation.']
  ],2,'Distinguish what is known from an unsupported inference about intention.'),
  C('The patient reports a new type of chest pain today.','Which response fits safe care?',[
   ['Assess the new finding appropriately while continuing the coordinated care plan.','A previous diagnosis or normal investigation does not make a new symptom automatically benign.'],
   ['Refuse assessment because earlier tests were normal.','Earlier results do not evaluate every future physical change.'],
   ['Promise that all symptoms will vanish if stress is reduced.','This is an unsupported guarantee and oversimplifies the condition.']
  ],0,'New findings still need assessment; coordinated follow-up does not mean dismissing change.')
 ],{caution:'Neither normal investigations nor apparent indifference proves a psychological cause or deception. A physical disease and symptom-related distress can coexist.'}),
 't-feeding':L([
  'An eating-disorder label or body size does not establish medical stability. Assess intake, restriction, bingeing, compensatory behaviors, vital signs, hydration, electrolytes and cardiac concerns along with psychological risk.',
  'Restriction can impair perfusion and organ function; vomiting and other purging can cause dangerous electrolyte losses. During nutrition restoration after significant malnutrition, monitor for refeeding complications under the prescribed plan, including phosphate changes.',
  'Treatment combines medical monitoring, nutrition support and psychological care. Use respectful, structured support rather than bargaining about safety or treating weight as a measure of character. Compare the named eating and feeding disorders, medication roles and teaching in the chapter reference.'
 ],'Two patients need assessment: one has restricted intake and fainted; another has repeated vomiting and palpitations despite a weight that appears typical.',
 ['decision','Medical risk comes from findings, not appearance',[
  ['Restriction','Assess perfusion, temperature, hydration and intake.'],['Purging','Assess electrolyte loss, weakness and cardiac symptoms.'],['Restoration','Monitor the prescribed nutrition plan and refeeding risks.']
 ],'Serious physical complications can occur at different body sizes.'],[
  C('The patient with repeated vomiting reports palpitations.','What most directly changes the priority?',[
   ['The person’s weight looks typical.','Appearance does not exclude electrolyte or cardiac danger.'],
   ['Vomiting can create electrolyte and rhythm risks that need prompt assessment.','The behavior and symptom identify a possible physical complication regardless of body size.'],
   ['The patient feels ashamed.','Shame needs compassionate care, but it does not replace assessment of the possible cardiac problem.']
  ],1,'Use the physical finding and its mechanism to identify urgency.'),
  C('Nutrition restoration starts after severe restriction.','Which monitoring plan best addresses the new risk?',[
   ['Track only whether the patient finishes each meal.','Meal completion alone does not assess metabolic complications.'],
   ['Stop laboratory monitoring because intake has improved.','Improved intake can coincide with refeeding-related shifts.'],
   ['Monitor clinical status, fluid balance and prescribed electrolytes, including phosphate.','Restoration after malnutrition can create important metabolic shifts that need prompt recognition.']
  ],2,'Better intake does not by itself prove safe metabolic recovery.')
 ],{sources:['eating'],caution:'Older chapter thresholds are examples, not a complete admission rule. Medical instability and acute complications require assessment at any body size.'}),
 't-substances':L([
  'Separate intoxication, withdrawal, tolerance and substance use disorder. They describe different patterns and do not all mean the same thing. Ask what was used, when, how much, other exposures and what is happening now.',
  'Priorities follow the substance and findings. Opioid overdose can suppress breathing; alcohol or sedative withdrawal can produce seizures and delirium; stimulant effects can produce cardiovascular or psychiatric emergencies. Assess rather than relying on a single pupil or behavior clue.',
  'Use nonjudgmental screening, symptom-based treatment and practical harm reduction. Stabilization is followed by continued treatment, support and follow-up. Withdrawal management alone does not address the whole substance use disorder.'
 ],'One patient is very sleepy with slow breathing after taking an opioid. Another has tremor and rising vital signs after stopping heavy alcohol use.',
 ['compare','Which direction is the nervous system moving?',[
  ['Intoxication','Current substance effects may impair alertness or physiology.'],['Withdrawal','Stopping or reducing exposure can produce a different risk pattern.'],['Ongoing treatment','Stabilization needs a follow-up plan, not blame.']
 ],'The same word “substance” can hide very different urgent problems.'],[
  C('The opioid-exposed patient is difficult to wake and breathing slowly.','Which response fits the immediate problem?',[
   ['Activate emergency help, support breathing and use naloxone under the protocol.','The urgent problem is inadequate breathing; reversal and supportive care must be followed by observation.'],
   ['Begin a long readiness-to-change interview first.','The interview should not delay care for inadequate breathing.'],
   ['Assume the person can safely sleep until the drug wears off.','Respiratory depression can be fatal and requires immediate action.']
  ],0,'Address breathing before routine teaching or long-term planning.'),
  C('The patient stopping alcohol becomes confused with marked tremor and unstable vital signs.','Which assessment principle is most important?',[
   ['A quiet appearance would rule out a serious withdrawal problem.','Appearance alone does not exclude dangerous withdrawal or delirium.'],
   ['Treat this as possible complicated withdrawal and obtain urgent assessment with appropriate monitoring.','Confusion and physiological change require escalation; an ordinary teaching session is not the priority.'],
   ['All substance withdrawals can be managed with the same comfort measures.','Risks and treatment differ by substance and severity.']
  ],1,'Alcohol and sedative withdrawal can become dangerous; assess the actual severity.')
 ],{sources:['alcohol','naloxone']}),
 't-neurocog':L([
  'A sudden change in attention or awareness is different from a long, gradual decline. Delirium often fluctuates and can be quiet as well as agitated. Dementia does not prevent delirium from occurring on top of it.',
  'Ask what the person was like recently, then assess current safety and possible contributors such as illness, medicines, pain, hydration and oxygenation. An acute change needs prompt evaluation instead of being dismissed as aging.',
  'Longer-term cognitive care supports communication, daily function and caregivers. Prognosis depends on the cause and course; neither a comparison chart nor one bedside observation proves reversibility. Use the reference for the named cognitive terms and neurocognitive patterns.'
 ],'A family member reports, “She could follow a conversation yesterday; today she keeps losing track and seems much sleepier.”',
 ['compare','Compare time course and attention',[
  ['Acute change','Hours or days; investigate promptly.'],['Fluctuation','Alertness or attention may vary within the day.'],['Baseline','Use recent function and caregiver observations for comparison.']
 ],'New change matters even when a chronic cognitive disorder is already present.'],[
  C('The chart already lists dementia.','What should guide the nurse’s response to today’s change?',[
   ['Assume dementia explains every change.','A chronic diagnosis does not explain away an acute decline.'],
   ['Wait for agitation before investigating.','Hypoactive delirium can be missed if only agitation is treated as a warning.'],
   ['Assess the acute attention and alertness change and escalate for possible delirium or another cause.','The new time course and altered attention require assessment regardless of the baseline diagnosis.']
  ],2,'Compare with yesterday, not only with a diagnosis on the problem list.'),
  C('The person is quieter rather than combative.','Which conclusion is safest?',[
   ['Reduced alertness and attention can still be clinically important.','Quiet, slowed or withdrawn behavior can accompany delirium and should not be mistaken for recovery.'],
   ['Quietness proves the confusion has resolved.','Behavioral calm does not establish restored attention or baseline function.'],
   ['Only hallucinations justify checking for a cause.','Delirium and other acute illness can present without hallucinations.']
  ],0,'Use attention, alertness and baseline comparison to judge change.')
 ],{sources:['delirium'],caution:'Delirium can persist and may not fully reverse. Neurocognitive symptoms have different causes; avoid treating “delirium reversible, dementia irreversible” as an absolute diagnostic rule.'}),
 't-personality':L([
  'A personality disorder concerns a persistent pattern affecting functioning and relationships, assessed in context over time. A difficult interaction or one disliked behavior is not enough to establish the diagnosis.',
  'The clusters organize patterns, not fixed judgments about a person. Assess current self-harm risk, threats, distress, coping and actual behavior. Use clear, respectful communication and a consistent team plan without power struggles.',
  'Treatment can support change. Skills-based psychotherapy, collaborative goals and attention to co-occurring problems are central; medicines target specific indications rather than changing a personality label. The reference keeps all named disorders, defenses and nursing comparisons available.'
 ],'A patient alternates between praising one team member and criticizing another after different answers were given about the same unit limit.',
 ['flow','Describe behavior → assess need and risk → respond consistently',[
  ['Behavior','Record what happened without a motive label.'],['Assessment','Explore distress, context, safety and coping.'],['Team response','Use a shared respectful plan and clear limits.']
 ],'Consistency supports care; it does not require coldness or punishment.'],[
  C('Two staff members have interpreted an agreement differently.','What should the team do first?',[
   ['Agree on the plan together and explain it consistently to the patient.','A coherent response reduces conflicting messages while preserving respectful care.'],
   ['Compete to be the patient’s preferred nurse.','Competing alliances undermine the shared therapeutic plan.'],
   ['Withdraw all support because the patient criticized staff.','Support should not be withheld as punishment for the interaction.']
  ],0,'Address inconsistent messages instead of joining competing alliances.'),
  C('During limit setting, the patient mentions a current urge to self-harm.','What changes the immediate priority?',[
   ['The personality label proves it is only an attempt to influence staff.','Intent and safety cannot be inferred from a diagnosis or presumed motive.'],
   ['Directly assess the safety concern and obtain needed protective support while maintaining the shared plan.','Safety assessment and consistent limits can occur together.'],
   ['Argue about whether the patient really means it before assessing.','A power struggle delays assessment of an actual stated concern.']
  ],1,'Assess a stated risk on its own merits, regardless of diagnosis.')
 ]),
 'c-adhd':L([
  'ADHD assessment looks for a persistent pattern of inattention and/or hyperactivity-impulsivity that interferes with functioning, with information across settings. One busy afternoon is not enough to establish the diagnosis.',
  'Make tasks achievable: give brief directions, reduce unnecessary distraction, use predictable routines and reinforce specific useful behavior. Include family and school supports instead of treating the child as unwilling to try.',
  'When a stimulant is prescribed, monitor the individual plan, including appetite, growth, sleep, pulse and blood pressure. Improvement means better participation and functioning with tolerable effects, not simply a quieter child.'
 ],'A school-age child starts tasks but loses track halfway through. A stimulant has recently been prescribed, and the family reports less appetite.',
 ['flow','Reduce the demand → practise success → monitor benefit and burden',[
  ['Structure','One short task and clear directions.'],['Reinforce','Recognize a specific useful behavior promptly.'],['Monitor','Function, appetite, growth, sleep and cardiovascular measures.']
 ],'Look for useful participation, not silence alone.'],[
  C('The child has trouble finishing a long set of instructions.','Which change best supports task completion?',[
   ['Repeat the entire list more loudly.','Louder delivery does not reduce the memory and attention demand.'],
   ['Break the task into short parts and give immediate, specific feedback.','Small clear steps make success and reinforcement more achievable.'],
   ['Remove all opportunities to practise independent work.','Support should build skills rather than remove every chance to use them.']
  ],1,'Change the task structure and reinforce a concrete success.'),
  C('School participation improves, but appetite is lower and weight gain has slowed.','Which evaluation is most complete?',[
   ['The medication is successful because the classroom is quieter.','Quietness alone does not evaluate functioning and adverse effects.'],
   ['Ignore growth because attention improved.','Benefits do not remove the need to assess appetite and growth.'],
   ['Report and review both the functional benefit and appetite/growth concern with the prescribing team.','Treatment evaluation includes benefit, adverse effects and the child’s overall development.']
  ],2,'Evaluate both what improved and what the treatment may be costing.')
 ]),
 'c-autism':L([
  'Assess the individual’s communication, sensory preferences, routine and support needs. Autism varies widely; a short description does not determine a support level or explain every new behavior.',
  'A change in behavior can communicate distress, pain, overload or an unmet need. Protect against injury while checking these possibilities. Offer an accessible way to communicate rather than relying on spoken language alone.',
  'Use predictable steps, visual supports and gradual preparation for change. Adapt the environment with the person and caregivers, and evaluate comfort, communication and meaningful function. Avoid treating the absence of protest as the only outcome.'
 ],'A child who uses a picture board begins hitting their head during a noisy bathroom routine. The behavior is new.',
 ['decision','Protect → investigate → adapt communication and environment',[
  ['Protect','Reduce immediate injury risk and obtain help as needed.'],['Investigate','Check pain, illness, sensory triggers and unmet needs.'],['Adapt','Use accessible communication and a predictable, tolerable routine.']
 ],'A familiar diagnosis does not explain away a new change.'],[
  C('The child covers their ears when the hand dryer starts.','Which response best addresses the observed need?',[
   ['Reduce the noise exposure, offer the communication board and assess comfort and injury risk.','This uses a visible cue while still checking other causes and safety needs.'],
   ['Insist on repeated exposure until the child stops protesting.','Forced exposure without assessment can increase distress and injury risk.'],
   ['Assume the child is being deliberately difficult.','A motive label does not explain the new behavior or identify a useful support.']
  ],0,'Use the sensory cue without assuming it is the only possible cause.'),
  C('Caregivers ask how to tell whether the revised routine helps.','Which outcome is most useful?',[
   ['The child obeys every instruction without any choice.','Compliance alone does not measure comfort, communication or function.'],
   ['The child communicates needs more effectively and completes the routine with less distress or injury.','This combines safety with meaningful participation and accessible communication.'],
   ['Staff no longer need to ask about preferences.','Preferences and needs can change and still require attention.']
  ],1,'Measure function, comfort and safety rather than obedience alone.')
 ]),
 'c-anorexia':L([
  'Severe restriction can compromise circulation, temperature regulation and organ function. Fainting, hypotension, abnormal pulse or rhythm and electrolyte changes require medical assessment before a lengthy body-image discussion.',
  'Nutrition restoration follows a monitored, individualized plan. Refeeding can shift phosphate and other electrolytes into cells, creating new complications even as intake improves. Assess clinical changes, fluid balance and prescribed laboratory trends.',
  'Provide consistent, respectful meal support and collaborate with the nutrition and treatment team. Evaluate physical recovery, safer eating and coping over time. Follow the specific plan for meals, observation and weights rather than inventing universal rules.'
 ],'A patient with prolonged restriction faints and is hypotensive. Monitored nutrition restoration is planned after initial stabilization.',
 ['flow','Stabilize physiology → restore nutrition safely → build coping',[
  ['Immediate findings','Syncope and poor perfusion need prompt attention.'],['Restoration risk','Watch fluid and electrolyte shifts, including phosphate.'],['Ongoing recovery','Use consistent meal support and psychological treatment.']
 ],'Intake and body-image work matter, but urgent physiology sets the first priority.'],[
  C('The patient wants to discuss calorie fears while still dizzy with a low blood pressure.','Which response best fits the immediate priority?',[
   ['Negotiate exercise privileges before checking circulation.','A behavioral negotiation should not delay assessment of physiological instability.'],
   ['Assume the low pressure is safe because it has happened before.','Prior episodes do not establish current stability.'],
   ['Acknowledge the fear while obtaining prompt medical assessment and protecting against another fall.','Respectful psychological support can accompany immediate attention to perfusion and safety.']
  ],2,'Address the unstable physical finding while preserving a therapeutic relationship.'),
  C('During restoration, new weakness appears and phosphate is falling.','Which interpretation changes the plan?',[
   ['The trend may indicate a refeeding complication and needs prompt team review.','New symptoms and electrolyte changes can signal metabolic harm despite better intake.'],
   ['Meal completion proves that recovery is uncomplicated.','Intake alone does not establish metabolic safety.'],
   ['The finding should wait until the next scheduled weight.','An acute clinical or laboratory concern should not wait for a routine weight check.']
  ],0,'Connect the timing of nutrition restoration with the new metabolic change.')
 ],{sources:['eating']}),
 'c-bulimia':L([
  'Repeated purging can cause electrolyte depletion, dehydration and rhythm problems even when weight appears typical. Assess the behaviors and physical findings rather than judging risk by appearance.',
  'Low potassium with palpitations or ECG changes needs prompt attention under the medical plan. Stabilization and prescribed monitoring come before a long exploration of the binge-purge cycle.',
  'Support regular eating and evidence-based psychological treatment without shame. Explore triggers and coping with the patient. Evaluate electrolyte and cardiac recovery as well as fewer harmful behaviors and greater use of alternatives.'
 ],'A patient reports repeated self-induced vomiting, feels weak and has a potassium of 2.8 mEq/L with ECG changes.',
 ['decision','Purging → electrolyte loss → cardiac assessment',[
  ['Exposure','Ask about vomiting and other compensatory behaviors.'],['Physical risk','Weakness, electrolyte loss and ECG changes need prompt attention.'],['Recovery work','Combine medical treatment with structured eating and coping support.']
 ],'A typical-looking weight does not protect against purging complications.'],[
  C('The patient says, “I do not look underweight, so it cannot be dangerous.”','Which response best connects the findings?',[
   ['Agree because only very low weight causes cardiac risk.','Purging can cause electrolyte and rhythm problems at different weights.'],
   ['Explain that potassium loss and the ECG change need prompt treatment regardless of appearance.','The actual electrolyte and cardiac findings establish the immediate risk.'],
   ['Focus only on persuading the patient to feel less ashamed.','Compassion matters, but it does not replace attention to the acute physical problem.']
  ],1,'Use the electrolyte and rhythm evidence to explain urgency.'),
  C('After stabilization, the patient identifies a stressful event that often precedes purging.','Which follow-up best supports recovery?',[
   ['Punish the patient if the symptom occurs again.','Punishment can intensify shame and does not build a coping alternative.'],
   ['Promise that a medication will solve every part of the problem.','Recovery usually involves more than one treatment component.'],
   ['Explore the trigger and practise a planned alternative while continuing the treatment and monitoring plan.','This connects the patient’s pattern with a usable skill and ongoing clinical care.']
  ],2,'Build a specific alternative without dropping medical follow-up.')
 ],{sources:['eating']}),
 'c-delirium':L([
  'Delirium is an acute disturbance involving attention and awareness, often with a fluctuating course. It can appear as agitation or as unusual drowsiness and withdrawal. Compare with the person’s recent baseline.',
  'Protect safety and promptly assess possible causes. Illness, oxygenation, medication effects, pain, hydration and several contributors together may matter. One clue such as cloudy urine is not enough to establish the cause.',
  'Use familiar people, clear short communication, orientation cues and sensory aids while the cause is investigated and treated. Reassess attention, alertness, physiology and function. Calm behavior alone does not establish recovery, and symptoms may persist.'
 ],'An older postoperative patient who conversed clearly yesterday now drifts off, loses track of questions and intermittently tries to get out of bed.',
 ['flow','Notice the new change → protect and investigate → reassess',[
  ['Compare','What was the person’s attention and function yesterday?'],['Assess','Check physiology, exposures and possible causes promptly.'],['Support','Use orientation, sensory aids, familiar support and a safer setting.']
 ],'An acute change deserves investigation even if the person is quiet.'],[
  C('A colleague says the patient is “just getting older.”','Which finding most directly challenges that conclusion?',[
   ['The attention and alertness changed sharply from yesterday.','The acute time course is not explained by normal aging and needs assessment.'],
   ['The patient is over 80.','Age can increase risk, but the key cue is the new change.'],
   ['The person needs help walking.','Mobility needs matter but do not by themselves distinguish this acute cognitive change.']
  ],0,'Identify the change from recent baseline.'),
  C('The patient stops climbing out of bed but remains unusually sleepy and unable to follow a short conversation.','How should the nurse evaluate this?',[
   ['The absence of agitation proves delirium has resolved.','Hypoactive symptoms can remain clinically significant.'],
   ['Continue assessment and treatment review; attention and alertness have not returned to baseline.','Recovery requires more than behavioral quietness and must be judged against baseline and clinical trends.'],
   ['Stop checking possible causes because the room is calm.','A calm environment does not establish that the underlying problem has resolved.']
  ],1,'Evaluate cognition and physiology as well as visible behavior.')
 ],{sources:['delirium']}),
 'c-alz':L([
  'Alzheimer’s disease can progressively affect memory, language, recognition and everyday function. Adapt the task to what the person can still do, and investigate new changes rather than automatically attributing them to the chronic disease.',
  'Make the environment understandable and safer: familiar routines, useful lighting, clear cues and one step at a time. For wandering or distress, assess the need or trigger and use the least restrictive effective support.',
  'Support the caregiver as well as the patient. Evaluate safety, comfort, nutrition, participation and the assistance required. Goals may need to change as the condition progresses; improvement is not limited to restoring independent memory.'
 ],'A person with Alzheimer’s disease becomes distressed while trying to find the bathroom. Their caregiver is exhausted by repeated nighttime assistance.',
 ['flow','Understand the need → simplify the environment → support both people',[
  ['Need','Check toileting, pain, fear and other possible triggers.'],['Cue','Offer a simple direction and a clear familiar route.'],['Support','Review night safety and practical caregiver help.']
 ],'Person-centered care adapts the setting rather than testing memory repeatedly.'],[
  C('The person cannot identify the correct door.','Which response is most useful?',[
   ['Keep quizzing until they remember the room name.','Repeated testing may add frustration without helping the immediate task.'],
   ['Tell them they should know because they used it yesterday.','A criticism does not provide an accessible cue.'],
   ['Offer one clear direction and guide them using an understandable cue.','Simple supported steps address the current functional need.']
  ],2,'Help the person complete the task instead of testing the impairment.'),
  C('The caregiver says they have not slept adequately for weeks.','What belongs in the plan?',[
   ['Assess caregiver strain and arrange realistic support and respite resources.','The caregiver’s ability to continue safely is part of care planning.'],
   ['Explain that needing help means they have failed.','This is blaming and discourages appropriate support.'],
   ['Focus only on the patient’s memory score.','A score does not capture the household’s safety and support needs.']
  ],0,'Include the support needed to sustain safe care.')
 ]),
 'c-bpd':L([
  'With borderline personality disorder, intense emotion and relationship distress can coexist with self-harm or suicide risk. Assess current thoughts, behavior and safety directly rather than inferring intention from the diagnosis.',
  'Use a consistent team plan with clear limits and respectful validation. Acknowledge the feeling without promising an unsafe exception. Address staff disagreement together instead of entering competing alliances.',
  'Skills such as distress tolerance and emotion regulation offer alternatives to acting on an urge. Evaluate actual use of skills, safer behavior and continued engagement. Medical care and safety assessment are not rewards to be withheld.'
 ],'After a limit is explained, a patient says the nurse no longer cares and reports an urge to cut themselves.',
 ['decision','Validate distress + assess safety + maintain a shared plan',[
  ['Validate','Name the distress without endorsing harmful behavior.'],['Protect','Assess current self-harm and suicide risk.'],['Practise','Use coping skills and consistent team boundaries.']
 ],'Warmth, direct assessment and clear limits can occur together.'],[
  C('The patient reports a current urge to self-harm.','Which response best fits?',[
   ['Ignore the statement to avoid reinforcing it.','Ignoring a stated safety concern can leave risk unassessed.'],
   ['Acknowledge the distress, assess immediate risk and obtain the needed protective support.','This responds to the actual concern without guessing a motive or abandoning the care plan.'],
   ['Promise any requested exception if the person agrees not to self-harm.','An unsafe bargain does not substitute for assessment or a consistent plan.']
  ],1,'Assess the stated risk while maintaining therapeutic boundaries.'),
  C('After safety needs are addressed, the patient identifies early signs of an overwhelming urge.','Which outcome best reflects skill development?',[
   ['The patient calls one nurse perfect and another terrible.','An opinion about staff does not demonstrate an alternative coping skill.'],
   ['The patient agrees never to feel angry again.','The goal is safer regulation and behavior, not the absence of all difficult emotion.'],
   ['The patient asks for support and uses an agreed coping skill before acting on the urge.','This is an observable alternative response that can be practised and evaluated.']
  ],2,'Measure the useful action taken in response to distress.')
 ]),
 'c-aspd':L([
  'Assess the person’s current behavior, threats, substance exposure and needs. An antisocial personality diagnosis does not replace an individual violence-risk assessment or justify disrespectful care.',
  'Use clear limits tied to observed behavior, explain the response and keep the team consistent. Avoid threats, humiliating labels and arguments about who is in control. If an immediate threat occurs, obtain help and follow the safety protocol.',
  'Support recognition of early anger cues and a safer alternative behavior. Document actions and words objectively, then evaluate actual incidents, response to limits and progress toward agreed goals.'
 ],'During a disagreement about a unit rule, a patient begins pacing and raises their voice. No threat or attack has yet been described.',
 ['decision','Observed behavior determines the response',[
  ['Assess','Clarify distress, escalation cues and actual threats.'],['Set limits','Use clear, consistent expectations without a power struggle.'],['Evaluate','Track safer behavior and response to the plan.']
 ],'Respectful care and firm boundaries are compatible.'],[
  C('The nurse wants to respond before the situation escalates further.','Which action is most useful?',[
   ['Threaten punishment to show who has control.','A threat can intensify a power struggle and is not therapeutic limit setting.'],
   ['Assume the diagnosis means an attack is inevitable.','Risk assessment depends on actual findings, not a diagnosis alone.'],
   ['Use a calm, clear limit, explore the immediate concern and assess whether more safety support is needed.','This responds to the observed escalation while preserving dignity and readiness to obtain help.']
  ],2,'Respond to the present behavior and risk rather than a fixed label.'),
  C('After discussion, the patient chooses a safer activity when early anger appears.','Which note best evaluates the result?',[
   ['“Patient stated feeling angry, requested space and used the agreed activity without threats.”','This records observable behavior and the use of a safer alternative.'],
   ['“Patient is manipulative but behaved.”','A motive label is less useful than objective observations and does not show what changed.'],
   ['“Personality cured.”','One useful response does not establish a permanent change in a longstanding pattern.']
  ],0,'Document the action and result without assigning a motive or overclaiming recovery.')
 ]),
 'c-schizo':L([
  'In acute psychosis, ask what the person is experiencing and how it affects safety and basic needs. Assess any command content, intent, ability to resist and access to means. Do not invent a command or assume violence from paranoia alone.',
  'Use brief, honest contact and a low-stimulation setting. Acknowledge distress without agreeing with a delusion or arguing about it. Physical changes, substance exposure, sleep and excessive water intake also deserve assessment.',
  'Explore why medication stopped and collaborate on a tolerable plan. Weight gain, other adverse effects, access and beliefs can affect use. Evaluate safety, function, symptom burden and adverse effects rather than medication acceptance alone.'
 ],'A patient stopped a prescribed antipsychotic after distressing weight gain. They now hear voices, sleep little and are unsure whom to trust.',
 ['flow','Assess the experience → protect and connect → address treatment barriers',[
  ['Assess','Ask what the voices say and how the person responds.'],['Connect','Be calm, brief and honest; acknowledge distress.'],['Plan','Explore effects, preferences, access and a workable treatment plan.']
 ],'The person’s actual findings guide safety and treatment choices.'],[
  C('The patient says someone is monitoring the room.','Which response best supports assessment without endorsing the belief?',[
   ['Agree that hidden observers are definitely present.','This confirms an unverified belief rather than providing reality-based support.'],
   ['Acknowledge that the experience feels frightening, state what you observe and ask about the immediate concern.','This addresses distress while remaining honest and open to safety assessment.'],
   ['Debate until the patient admits the belief is false.','An argument can damage trust without resolving the experience.']
  ],1,'Validate the feeling while keeping the response reality-based.'),
  C('The patient says, “I stopped because the weight gain made me miserable.”','Which next step best addresses the barrier?',[
   ['Document only that the patient is noncompliant.','A label does not identify or address the reason for stopping.'],
   ['Promise that adverse effects never occur with another drug.','That guarantee is unsupported.'],
   ['Explore the impact and discuss monitoring and treatment options with the prescribing team and patient.','A shared plan that addresses the adverse effect is more useful than blame or a false promise.']
  ],2,'Treat the barrier as clinical information for a shared plan.')
 ]),
 'c-nms':L([
  'NMS is a potentially life-threatening medication reaction. Rigidity, fever, altered mental status and autonomic instability after antipsychotic exposure create an emergency concern; do not wait for every feature or a particular temperature threshold.',
  'Stop further suspected medication exposure and obtain emergency help under the protocol. Assess and support airway, breathing and circulation while the team begins monitored treatment. Investigations and prescribed treatment address complications such as muscle breakdown and renal injury.',
  'Distinguish this systemic pattern from isolated EPS. Acute dystonia can also threaten the airway and needs prompt treatment, but a previous response to an EPS medicine does not make new fever and instability safe. Reassess physiology, mental status, rigidity and relevant laboratory trends.'
 ],'Soon after a medication change, a patient develops marked rigidity, confusion, fever and rapidly changing blood pressure.',
 ['decision','Systemic instability changes the priority',[
  ['Recognize','New rigidity plus mental-status and physiological changes.'],['Escalate','Hold the suspected drug and activate emergency care.'],['Monitor','Airway, circulation, temperature, muscle and kidney complications.']
 ],'A pattern can be urgent before a textbook threshold is reached.'],[
  C('The patient previously had a neck spasm that improved with an EPS treatment.','How should the new systemic findings be interpreted?',[
   ['A new emergency concern requiring immediate escalation, not an automatic repeat of the old explanation.','Fever, confusion and unstable physiology change the problem from a simple isolated movement complaint.'],
   ['Proof that all future symptoms will respond to the same EPS medicine.','A prior response does not explain a different clinical pattern.'],
   ['A routine discomfort to discuss at the next appointment.','The new cluster can signal a life-threatening reaction.']
  ],0,'Compare the whole pattern, not only the presence of muscle symptoms.'),
  C('Another scheduled antipsychotic dose is due while emergency evaluation begins.','Which action fits?',[
   ['Give it to calm the patient before assessing breathing.','Additional exposure and delay in physiological support can be harmful.'],
   ['Hold the suspected medication, obtain emergency support and monitor under the crisis plan.','Avoiding further exposure and supporting physiology address the suspected emergency.'],
   ['Wait for the temperature to reach 104 °F before calling for help.','A fixed high-fever threshold should not delay action for the concerning cluster.']
  ],1,'Avoid further suspected exposure and respond to the current emergency pattern.')
 ],{sources:['nms']}),
 'c-somatic':L([
  'Repeated symptoms can be distressing even when earlier investigations are reassuring. Assess their effect on functioning and the person’s concerns. Do not equate unexplained symptoms with fabrication or assume psychological and medical causes cannot coexist.',
  'Coordinate consistent follow-up and support coping and daily function. Acknowledge the experience without promising repeated testing will solve every concern. New or changed physical findings still need appropriate assessment.',
  'Functional neurological symptoms need qualified diagnostic assessment; apparent calmness does not establish the cause. Evaluate less disruption, useful coping and engagement with the plan rather than requiring the patient to admit the symptoms were imaginary.'
 ],'A patient has repeated episodes of physical discomfort, spends much of the day checking symptoms and has stopped visiting friends.',
 ['flow','Acknowledge → assess change and impact → support function',[
  ['Acknowledge','The distress is real and deserves respectful care.'],['Assess','Check new findings and the effect on daily life.'],['Support','Coordinate follow-up and practise useful coping and activity.']
 ],'Validation does not require an unsupported causal explanation.'],[
  C('The patient asks, “Do you think I am making it up?”','Which reply best supports care?',[
   ['“Your earlier tests were normal, so yes.”','Normal results do not establish intentional fabrication.'],
   ['“There is definitely no physical cause now or in the future.”','That is an unsupported guarantee and dismisses possible changes.'],
   ['“I can see this is distressing. Let’s assess what has changed and how it is affecting your day.”','This acknowledges distress and opens appropriate clinical and functional assessment.']
  ],2,'Validate distress and assess without guessing intention or promising certainty.'),
  C('The treatment plan aims to improve coping and functioning.','Which change best fits that goal?',[
   ['The patient uses a coping strategy and resumes a manageable social activity while continuing follow-up.','This is a functional gain even if symptoms have not entirely disappeared.'],
   ['The patient agrees the symptoms were imaginary.','That is neither a necessary nor an appropriate measure of improvement.'],
   ['The patient is told never to report another physical change.','New findings must remain open to assessment.']
  ],0,'Look for a useful action and improved function rather than a forced explanation.')
 ]),
 'c-did':L([
  'Lost time, memory gaps and changes in the sense of identity require careful assessment. Consider physical injury, substances and other causes as well as dissociative symptoms. A short history does not establish a single cause.',
  'When injury or self-harm is present, assess and protect immediate safety. Use calm, predictable contact and help the person orient to the present. A report of not remembering the injury does not establish that ongoing risk is absent.',
  'Practise a tolerable grounding skill and connect with qualified treatment. Do not pressure detailed trauma recall. Evaluate safety, use of grounding, distress and function over time; treatment planning is individualized and paced.'
 ],'A patient has an unexplained memory gap and finds a new injury. They are frightened and unsure what happened.',
 ['decision','Current safety → present orientation → paced treatment',[
  ['Safety','Assess the injury and current self-harm or suicide risk.'],['Grounding','Support contact with the present in a tolerable way.'],['Treatment','Coordinate qualified, paced care without forced recall.']
 ],'Not remembering an event is a reason to assess carefully, not a safety guarantee.'],[
  C('The patient cannot remember how the injury occurred.','Which response is most appropriate?',[
   ['Assume there is no ongoing risk because the event is not remembered.','A memory gap does not establish current safety.'],
   ['Assess the injury and current risk, provide appropriate protection and evaluate possible causes.','This addresses the immediate needs without assuming a diagnosis or motive.'],
   ['Demand the complete memory before providing care.','Care and safety assessment should not depend on detailed recall.']
  ],1,'Treat the present injury and risk as the first assessable needs.'),
  C('The patient becomes overwhelmed when discussing the episode.','Which action fits stabilization?',[
   ['Insist on more detail until the memory returns.','Pressure can increase distress and is not a stabilization strategy.'],
   ['Tell the patient every unusual experience proves trauma.','This overstates what the information establishes.'],
   ['Pause the account and practise a tolerable present-focused grounding skill together.','Grounding supports regulation and present orientation without forcing the account.']
  ],2,'Support present safety and regulation before difficult processing.')
 ]),
 'c-alcohol':L([
  'After reduction or cessation of heavy alcohol use, withdrawal can progress from tremor and autonomic symptoms to seizures or delirium. Timing is variable; new confusion or physiological instability needs urgent assessment rather than waiting for a textbook hour.',
  'Follow the severity-based withdrawal plan, including prescribed medicines, seizure precautions, physiological monitoring and nutrition support. Monitor for sedation and respiratory depression during treatment. CIWA-Ar relies on patient reports and is not the appropriate tool for withdrawal delirium.',
  'Give prescribed thiamine to reduce Wernicke risk. Do not delay urgent glucose treatment to give thiamine first; ASAM allows either order or concurrent administration. After stabilization, connect withdrawal care with ongoing substance use treatment and follow-up.'
 ],'After stopping heavy alcohol use, a patient develops tremor, sweating and rising vital signs, then becomes unable to give reliable answers.',
 ['decision','Track severity → choose usable monitoring → treat and reassess',[
  ['Severity','Confusion, seizures or instability change the level of care.'],['Monitoring','Use a tool appropriate to communication and delirium status.'],['Treatment','Follow the protocol and reassess both withdrawal and sedation.']
 ],'Neither the clock nor one scale replaces assessment of this patient.'],[
  C('The patient is delirious and cannot reliably report nausea, anxiety or sensory symptoms.','What should guide monitoring?',[
   ['Use the protocol’s appropriate observational/delirium assessment and close clinical monitoring.','CIWA-Ar depends on patient-reported symptoms and should not be relied on in delirium.'],
   ['Invent answers to complete a CIWA-Ar score.','A score built from guessed reports is not reliable monitoring.'],
   ['Stop monitoring because the patient cannot answer.','Inability to answer can increase the need for appropriate observation and escalation.']
  ],0,'Use an assessment method the patient’s condition actually supports.'),
  C('Urgent treatment is also needed for confirmed hypoglycemia, and thiamine has been prescribed.','Which principle is correct?',[
   ['Delay glucose until thiamine becomes available.','Urgent glucose treatment should not be delayed for thiamine.'],
   ['Treat hypoglycemia promptly and administer prescribed thiamine without requiring a rigid before-glucose sequence.','ASAM permits thiamine and glucose in either order or concurrently.'],
   ['Omit thiamine because glucose was already given.','Giving glucose does not remove the indication for prescribed thiamine.']
  ],1,'Protect against both immediate hypoglycemia and thiamine deficiency without delaying urgent treatment.')
 ],{sources:['alcohol'],caution:'Current ASAM clarification: CIWA-Ar is not recommended in withdrawal delirium. Thiamine and glucose may be given in either order or together; do not delay urgent glucose.'}),
 'c-opioid':L([
  'Opioid overdose can suppress breathing and alertness. Activate emergency help, support ventilation and give naloxone under the product instructions and protocol. Oxygen saturation and wakefulness alone do not fully describe ventilation.',
  'Naloxone can wear off while opioid effects remain. Continue close observation and reassessment, with repeat naloxone and breathing support as indicated. Waking up once is not a discharge criterion.',
  'Naloxone can precipitate withdrawal; treat distress respectfully while maintaining breathing surveillance. Ongoing care includes harm reduction and evidence-based treatment for opioid use disorder. Buprenorphine initiation depends on clinical assessment, exposure and the prescribed induction plan, not one universal hours-since-use rule.'
 ],'A person with very slow, shallow breathing receives naloxone and wakes. A short time later they become harder to rouse again.',
 ['flow','Support breathing → reverse and reassess → continue care',[
  ['Immediate risk','Inadequate breathing needs emergency support.'],['Recurrence','Opioid effects can remain after naloxone wears off.'],['Next care','Treat withdrawal, provide harm reduction and arrange ongoing treatment.']
 ],'An initial response is a reason to reassess, not proof the danger has ended.'],[
  C('The person initially wakes and asks to be left alone.','Which response fits the remaining risk?',[
   ['End observation because eye opening proves the opioid has cleared.','Naloxone response does not establish that the opioid effect is over.'],
   ['Focus only on whether withdrawal feels unpleasant.','Comfort matters, but respiratory depression can recur and remains a priority.'],
   ['Continue the required observation and breathing assessment, explaining why recurrence is possible.','The opioid can outlast reversal; monitoring and repeat support follow the protocol.']
  ],2,'Keep the duration of reversal separate from the duration of opioid effect.'),
  C('The person becomes difficult to rouse again with shallow breathing.','What takes priority?',[
   ['Reassess and support breathing, activate needed help and repeat naloxone as directed.','Recurrent respiratory depression needs immediate response under the emergency plan.'],
   ['Wait for a fixed observation period to finish before responding.','A new deterioration requires action now, not at the end of a timer.'],
   ['Begin a lengthy discussion about long-term goals first.','Long-term engagement should not delay treatment of inadequate breathing.']
  ],0,'Respond to the new respiratory deterioration immediately.')
 ],{sources:['naloxone','buprenorphine'],caution:'Continue monitoring according to the exposure, clinical course and protocol. Do not assume naloxone will outlast the opioid. Conventional buprenorphine induction requires appropriate withdrawal assessment; timing varies by exposure and plan.'})
};

// These retain the original three recall domains and their numeric positions:
// cues/mechanism, priority/actions, then evaluation. Only specificity improves.
const recall={
 'c-adhd':[
  ['Which attention or impulse-control difficulties affect this child’s functioning across settings?','Describe the pattern, timing and effect on school, home and relationships. A brief busy episode alone does not establish ADHD.'],
  ['How will you structure tasks and monitor the prescribed stimulant safely?','Use brief directions, small tasks and specific reinforcement. Follow the individual medicine plan and monitor appetite, growth, sleep, pulse and blood pressure.'],
  ['What shows useful improvement, and what would make you review the plan?','Look for better participation and daily functioning; review appetite/growth, sleep or cardiovascular concerns rather than counting quietness alone.']
 ],
 'c-autism':[
  ['What might the new self-injury communicate, and what else needs assessment?','Check immediate injury risk, pain or illness, communication barriers, sensory triggers and routine changes. Do not assume the diagnosis explains the new behavior.'],
  ['How will you protect safety and adapt communication and the routine?','Reduce injury risk, offer accessible communication, investigate causes and use predictable steps and tolerable sensory supports with the person and caregivers.'],
  ['Which outcomes show that the revised support helps?','Evaluate less distress or injury, clearer communication of needs and meaningful participation in daily routines.']
 ],
 'c-anorexia':[
  ['How can restriction explain fainting or poor perfusion, and what changes during refeeding?','Malnutrition can compromise physiology; monitored nutrition restoration can create new fluid and electrolyte shifts, including falling phosphate.'],
  ['What takes priority in instability, and how will nutrition restoration be monitored?','Obtain prompt medical assessment, protect safety and follow the prescribed nutrition, fluid and electrolyte monitoring plan while providing respectful meal support.'],
  ['What findings show safer recovery or a refeeding complication?','Trend perfusion, vital signs, rhythm, intake, fluid balance and prescribed electrolytes. New weakness, edema, breathing difficulty or falling phosphate needs prompt review.']
 ],
 'c-bulimia':[
  ['Why do purging, low potassium and ECG changes matter despite a typical-looking weight?','Purging can deplete electrolytes and fluid and cause cardiac danger independently of appearance.'],
  ['What physical priorities and ongoing coping supports belong in the plan?','Address electrolyte/rhythm concerns promptly under the medical plan, then support structured eating, psychological treatment and practice with triggers and alternatives.'],
  ['What will you measure to evaluate physical and behavioral recovery?','Assess electrolyte and cardiac trends, purging frequency, use of coping skills, eating patterns and mood.']
 ],
 'c-delirium':[
  ['Which acute attention or alertness changes suggest delirium, including a quiet presentation?','Compare with recent baseline, look for acute change and fluctuation, and assess possible physiological or medication contributors; quiet drowsiness can be important.'],
  ['How will you protect safety while the causes of delirium are assessed?','Obtain prompt evaluation, use close appropriate observation, orient calmly, support sensory needs and investigate illness, medicines, oxygenation, pain and hydration.'],
  ['What shows improvement beyond less agitation?','Reassess attention, alertness, physiology and daily function against baseline. Quietness alone is not resolution, and delirium can persist.']
 ],
 'c-alz':[
  ['How are memory, recognition or language changes affecting this person’s daily safety?','Connect the observed cognitive difficulties with toileting, navigation, communication and assistance needs. Investigate an acute change separately.'],
  ['How will you simplify care and reduce risk while supporting the caregiver?','Use one understandable step at a time, familiar cues and routines, assess the need behind distress and arrange practical caregiver support.'],
  ['Which patient and caregiver outcomes should be followed over time?','Evaluate comfort, safety, intake, participation, needed assistance and caregiver strain; adapt goals to the person’s changing function.']
 ],
 'c-bpd':[
  ['Which current self-harm cues and relationship stressors require assessment?','Assess the stated urge, intent, behavior and immediate safety rather than inferring intention from a personality label.'],
  ['How will you combine validation, safety and a consistent team plan?','Acknowledge distress, obtain needed protective support, maintain clear respectful limits and practise an agreed coping skill.'],
  ['What observable behavior shows safer coping?','Look for asking for help, using a skill before acting on an urge, fewer harmful incidents and engagement with the plan.']
 ],
 'c-aspd':[
  ['Which observed escalation cues matter more than the personality label?','Assess the person’s words, pacing, threats, behavior, exposures and present needs; a diagnosis alone does not establish inevitable violence.'],
  ['How will you set a clear limit without entering a power struggle?','Use calm, consistent expectations, explore the immediate concern and obtain help for actual safety needs. Document behavior objectively.'],
  ['What will you record to evaluate a safer response?','Record actual threats or incidents, response to limits and use of an agreed alternative such as asking for space or support.']
 ],
 'c-schizo':[
  ['What do you need to ask about the voices and other physical or functional changes?','Assess content, distress, command or safety concerns, the person’s response, sleep, basic needs and relevant medical or substance contributors.'],
  ['How will you respond without agreeing with a delusion or ignoring a treatment barrier?','Use calm honest contact, acknowledge distress, assess safety and collaborate on adverse effects, access and a workable prescribed treatment plan.'],
  ['Which changes show safer functioning and a more workable plan?','Reassess safety, sleep, intake, daily activity, symptom burden, medication effects and the person’s ability to use the agreed support.']
 ],
 'c-nms':[
  ['Which systemic findings suggest NMS rather than an isolated movement complaint?','Rigidity with fever, altered mental status and autonomic instability after relevant exposure raises an emergency concern; do not wait for a fixed temperature or every feature.'],
  ['What immediate actions prevent further exposure and support physiology?','Hold the suspected medicine, activate emergency medical evaluation and support airway, breathing and circulation under the crisis protocol.'],
  ['Which clinical and laboratory trends show recovery or complications?','Follow temperature, vital signs, mental status, rigidity, muscle-breakdown markers, kidney function and urine output under the treatment plan.']
 ],
 'c-somatic':[
  ['How are symptoms affecting function, and why do normal tests not prove fabrication?','Assess experience, current changes and functional impact. Negative investigations do not establish intent or exclude every future medical cause.'],
  ['How will you validate symptoms and coordinate care without dismissing a new finding?','Acknowledge distress, assess new or changed physical findings appropriately, coordinate consistent follow-up and support coping and daily activity.'],
  ['What functional outcomes can improve even if symptoms persist?','Look for useful coping, manageable social or daily activity, less disruption and engagement in follow-up rather than demanding an admission that symptoms were imaginary.']
 ],
 'c-did':[
  ['Why do the memory gap and new injury require assessment rather than a safety assumption?','A gap in recall does not establish how the injury happened or whether risk is over. Assess injury, current risk and possible physical, substance-related or dissociative causes.'],
  ['How will you support safety and present orientation without forcing recall?','Provide needed protection, use calm predictable contact, practise tolerable grounding and coordinate qualified care without pressuring a detailed trauma account.'],
  ['What shows improved safety and use of grounding?','Evaluate injuries or self-harm, distress, episodes of lost time, ability to use a grounding skill and engagement in the individualized treatment plan.']
 ],
 'c-alcohol':[
  ['Which withdrawal findings indicate increasing severity or possible delirium?','Tremor and autonomic symptoms need monitoring; new confusion, seizures or physiological instability require urgent assessment rather than waiting for a typical time window.'],
  ['Which treatment and monitoring precautions apply when the patient cannot report symptoms reliably?','Use the prescribed severity-based plan and appropriate observational/delirium monitoring, not CIWA-Ar in delirium. Monitor sedation and breathing. Give thiamine without delaying urgent glucose.'],
  ['Which trends show control of withdrawal or deterioration during treatment?','Follow the usable withdrawal assessment, vital signs, attention, seizures, hydration/electrolytes and signs of over-sedation or respiratory depression.']
 ],
 'c-opioid':[
  ['How do slow breathing and recurrent drowsiness after naloxone explain the continuing risk?','Opioid effects can suppress ventilation and can remain after naloxone wears off, causing recurrent respiratory depression.'],
  ['What emergency actions and treatment precautions remain important after the first awakening?','Support breathing, obtain emergency help, use naloxone as directed and continue exposure-specific observation and reassessment; follow an individualized withdrawal and treatment plan.'],
  ['What findings and follow-up show safer recovery?','Assess ventilation, respiratory rate, alertness and oxygenation over the required observation course, plus withdrawal, treatment access, follow-up and take-home naloxone.']
 ]
};
for(const [id,pairs]of Object.entries(recall))module.exports[id].recall=pairs;
