// Original teaching for the student's exact Exam 4 focus. Full authored chapter
// sections and all established graded/checkpoint indices are retained by the build.
const {lesson:L,pick:C,order:O}=require('../../tools/mh-lesson-tools');
module.exports={
 't-intro':L([
  'Start with the person’s experience and functioning. A diagnosis describes an illness; it does not tell you everything about relationships, strengths, culture or ability to cope today.',
  'Stress, biology, experience and access to support interact. Ask what changed, how the person understands it, and what helps. A cultural difference alone is not evidence of a disorder.',
  'Recovery can mean a meaningful, self-directed life while treatment continues. Nursing care combines safety assessment, practical support, respectful language and goals chosen with the person.'
 ],'A patient receiving treatment for depression is back at work and wants to rebuild friendships. Some symptoms remain.',
 ['compare','Illness, functioning and recovery answer different questions',[
  ['Illness','What symptoms and impairment need assessment?'],['Function','What can the person do, and where is support needed?'],['Recovery','What matters to this person’s life and goals?']
 ],'Ask about all three instead of reducing the person to a label.'],[
  C('The patient says joining a walking group would help rebuild friendships.','Which nursing goal best supports recovery?',[
   ['Wait for every symptom to disappear before discussing social goals.','Recovery work can occur alongside ongoing symptoms and treatment.'],
   ['Explore a manageable first step toward the walking group together.','This connects the person’s chosen goal with a practical action and needed support.'],
   ['Replace that goal with the nurse’s preferred hobby.','The nurse would be choosing the person’s priorities rather than collaborating.']
  ],1,'Look for the person’s own meaningful goal, not a requirement for complete symptom absence.'),
  C('A patient describes a grief experience that has an accepted meaning in their culture. There is no stated immediate danger.','What information is most useful next?',[
   ['The patient’s meaning, distress, functioning and safety.','Context and impact guide assessment; neither cultural unfamiliarity nor reassurance alone settles it.'],
   ['Whether the nurse has personally had the same experience.','The nurse’s personal experience is not the standard for deciding whether a symptom is present.'],
   ['A diagnosis based only on the unusual description.','One unfamiliar description is insufficient for a diagnosis.']
  ],0,'Assess the person in context before applying a label.')
 ]),
 't-e4-diagnostics':L([
  'The DSM is the American Psychiatric Association’s diagnostic classification. Shared criteria help clinicians describe disorders consistently. A category is not a laboratory confirmation or a complete care plan.',
  'Nursing assessment identifies this person’s responses and needs: sleep, coping, daily activity, nutrition, relationships and immediate risks. Two people with the same medical diagnosis can need different nursing plans.',
  'Write an outcome that can be checked. Describe the patient’s action or change, a measurable target and a time frame. Evaluate what actually happened, then revise the plan with the patient.'
 ],'Two patients have the same diagnostic label. One cannot sleep; the other sleeps adequately but has stopped eating regular meals.',
 ['compare','Classification → individual assessment → nursing outcome',[
  ['Shared language','A diagnostic category organizes a pattern of symptoms.'],['Individual response','Assess sleep, intake, coping, function and risk.'],['Checkable outcome','Name a patient change, its measure and its time frame.']
 ],'The diagnosis is a starting point for assessment, not a substitute for it.'],[
  C('Both patients ask why their nursing plans differ.','Which explanation fits?',[
   ['One diagnosis requires an identical nursing plan for everyone.','A shared diagnosis does not erase different needs, risks and goals.'],
   ['Nursing plans depend only on which nurse is assigned.','The plan should follow assessed needs and collaborative goals, not staff preference.'],
   ['Your plans address the different responses and priorities each of you described.','Nursing care is individualized even when diagnostic classification is shared.']
  ],2,'Separate the diagnostic category from the person’s current nursing needs.'),
  C('A patient identifies poor sleep as a priority.','Which draft outcome is easiest to evaluate?',[
   ['The patient will feel better soon.','Neither the change nor the time frame is clear enough to evaluate.'],
   ['The patient will report at least six hours of sleep by the third morning.','The patient response, amount and time frame are specified; the target still needs to be appropriate and agreed.'],
   ['The nurse will explain sleep hygiene.','This describes an intervention, not the patient’s outcome.']
  ],1,'Distinguish a patient result from a nursing action.')
 ]),
 't-life':L([
  'Developmental theories give you questions to explore; they do not diagnose a person from age alone. Ask about abilities, relationships, experience and what the person is trying to accomplish.',
  'Erikson emphasizes a psychosocial task: trust, autonomy, initiative, industry, identity, intimacy, generativity or integrity. Support a meaningful opportunity to practise the task rather than shaming a difficulty.',
  'Piaget describes forms of thinking, while Kohlberg and Gilligan address moral reasoning from different perspectives. Adapt explanations to demonstrated understanding. The full chapter reference keeps all stages and the additional theories together.'
 ],'A school-age child receiving treatment says, “Everyone else can do their work. I’m bad at everything.”',
 ['compare','Choose the support that fits the developmental task',[
  ['School age · industry','Build competence through an achievable task.'],['Adolescence · identity','Allow exploration of values, roles and choices.'],['Later life · integrity','Invite life review and the person’s sense of meaning.']
 ],'Age suggests a starting question; assessment shows what support is useful.'],[
  C('The child wants to help organize the bedside art materials.','Which response supports industry?',[
   ['Choose a manageable sorting job and recognize the child’s specific effort.','A successful task builds a sense of competence without making unrealistic promises.'],
   ['Complete every task for the child to prevent frustration.','Removing all opportunities to practise can reinforce the feeling of being unable.'],
   ['Tell the child that worrying about ability is childish.','Shaming the concern does not help the developmental task.']
  ],0,'Industry is about developing competence.'),
  C('A child understands a demonstration with real objects but struggles with an abstract explanation.','Which teaching change best fits the observed thinking?',[
   ['Use a longer abstract lecture.','More of the same mismatch is unlikely to clarify the idea.'],
   ['Stop explaining because the child cannot learn.','A difficulty with abstraction does not mean an inability to learn.'],
   ['Demonstrate with concrete objects and ask the child to show it back.','Concrete examples match demonstrated understanding and allow a check of learning.']
  ],2,'Match teaching to thinking ability, not just chronological age.')
 ]),
 't-theories':L([
  'A theory is a lens for understanding a problem. Psychodynamic approaches explore unconscious patterns; interpersonal approaches examine relationships; behavioral approaches focus on learning; cognitive approaches examine interpretations.',
  'Match the intervention to the lens. Practising a skill or reinforcing a behavior differs from examining the thought that precedes it. DBT combines acceptance and change with skills such as distress tolerance and emotion regulation.',
  'Physiological needs and immediate safety can change what is useful now. A patient who is exhausted or medically unstable needs that problem addressed before a demanding insight exercise. Theories support assessment; they do not replace it.'
 ],'A patient avoids a common room because one awkward conversation led to the thought, “Everyone will reject me.”',
 ['compare','The lens changes the question you ask',[
  ['Cognitive','What interpretation is driving this response?'],['Behavioral','What learned pattern or consequence maintains it?'],['Interpersonal','What is happening in the relationship?']
 ],'The same situation can be explored through more than one useful lens.'],[
  C('The nurse helps the patient examine the evidence for “everyone will reject me.”','Which approach is being used most directly?',[
   ['Behavioral reinforcement of a completed task.','Reinforcement changes consequences; this action examines an interpretation.'],
   ['Cognitive examination of an automatic thought.','The nurse is helping connect a thought with avoidance and test whether the conclusion fits the evidence.'],
   ['An interpretation of an unconscious childhood conflict.','The given intervention does not explore an unconscious conflict.']
  ],1,'Identify what the nurse is doing, not merely the patient’s diagnosis.'),
  C('Before a long therapy group, another patient is dizzy, has eaten little and needs physical assessment.','What changes the immediate plan?',[
   ['Meeting physiological needs and assessing stability come before demanding group work.','The patient’s present ability to participate and immediate physical needs set the priority.'],
   ['The planned group always takes priority over the current findings.','A schedule does not override an emerging physical concern.'],
   ['A theory name is enough to decide that the dizziness is emotional.','The physical finding still requires assessment.']
  ],0,'A useful therapy still has to fit the patient’s condition now.')
 ]),
 't-neuro':L([
  'Neurons communicate through chemical signals acting at receptors. Drugs can change signaling in several ways. An agonist activates a receptor; an antagonist blocks its activation. A partial agonist is not the same as a pure blocker.',
  'A receptor’s location helps explain an effect. Blocking histamine H1 can cause sedation; muscarinic blockade can produce dry mouth and constipation; alpha-1 blockade can contribute to orthostatic symptoms. Actual risks vary by drug and dose.',
  'Connect the mechanism to assessment and teaching, then use the specific medication’s precautions. Transmitter charts are simplified learning models, not tests for a diagnosis or proof that one chemical alone causes an illness. The chapter reference retains the brain areas, drug classes, monitoring and interactions.'
 ],'After starting a prescribed psychiatric medicine, a patient reports dry mouth and dizziness when standing.',
 ['flow','Receptor action → body effect → nursing response',[
  ['Signal','What receptor or pathway does this drug affect?'],['Effect','What expected effect or adverse effect follows?'],['Response','Assess severity, protect safety and follow the drug-specific plan.']
 ],'Use the receptor connection to predict what you must assess.'],[
  C('The patient feels lightheaded after rising from bed.','Which connection best guides the next assessment?',[
   ['Dry mouth proves that every symptom has the same receptor cause.','A drug can affect multiple receptors; one effect does not identify every other mechanism.'],
   ['A psychiatric medication makes physical assessment unnecessary.','Medication-related symptoms still require physical assessment.'],
   ['Alpha-1 blockade can contribute to orthostasis; assess position-related symptoms and protect against falls.','This connects a plausible mechanism with assessment and a useful safety action.']
  ],2,'Separate the receptor effects, then act on the patient’s actual symptoms.'),
  C('A classmate says every psychiatric illness can be diagnosed by finding one low transmitter.','Which correction is accurate?',[
   ['Transmitter models help explain drug effects, but disorders and diagnosis are more complex.','A teaching model does not establish a single cause or replace clinical assessment.'],
   ['A drug helping proves that the illness was caused by a deficiency of that drug’s target.','Response to a treatment does not establish a single underlying cause.'],
   ['Receptors have no relationship to adverse effects.','Receptor effects are useful for anticipating adverse effects, even though they do not prove a diagnosis.']
  ],0,'Keep a useful mechanism separate from a diagnostic claim.')
 ]),
 't-legal':L([
  'Begin with rights, current risk and the least restrictive effective response. Admission status does not by itself remove every right. Consent, capacity, emergency authority and discharge processes depend on the applicable law and policy.',
  'Restraint or seclusion is a safety intervention with strict requirements, never a shortcut for convenience, punishment or ordinary disagreement. Assess alternatives, obtain required authorization, monitor and end the restriction as soon as it is no longer needed.',
  'For U.S. hospital restraint or seclusion for violent or self-destructive behavior, federal order-renewal limits distinguish adults and children. These limits are not permission to continue until the clock expires. Nonviolent restraint rules and stricter state requirements must be checked separately. Use the reference for the chapter’s legal terms and ethics comparisons.'
 ],'An adult voluntary patient asks to leave. The nurse needs to assess the request, the patient’s condition and the applicable discharge process.',
 ['decision','Rights + actual risk + lawful action',[
  ['Assess','What is the person requesting, and is there an immediate risk?'],['Choose','Use a lawful, effective response with the least restriction.'],['Reassess','Monitor safety, explain the process and document the reason.']
 ],'A diagnosis or staff disagreement does not supply legal authority by itself.'],[
  C('No immediate dangerous behavior has been described.','Which action best respects the discharge request?',[
   ['Lock the door because staff would prefer another day of treatment.','Staff preference alone is not authority to detain the patient.'],
   ['Acknowledge the request, assess current risk and promptly follow the required provider and discharge process.','This preserves the request while allowing assessment and the legally required process.'],
   ['Promise immediate discharge without checking any requirements.','The nurse should not promise a process or outcome without the required assessment and review.']
  ],1,'Distinguish a right to request discharge from the specific legal process for release.'),
  C('A restraint order remains active, but the patient now meets the criteria for safe release.','What governs the next action?',[
   ['Continue solely because unused hours remain.','The order limit is a maximum, not a required duration.'],
   ['Use restraint to discourage another disagreement.','Punishment and coercion are not acceptable reasons for restraint.'],
   ['Follow the release criteria and discontinue at the earliest safe time, with reassessment and documentation.','Restriction should end when it is no longer needed for immediate safety; required follow-up still applies.']
  ],2,'Ask whether restriction is still necessary, not only whether the order has expired.')
 ]),
 't-e4-peplau':L([
  'Prepare before meeting: review relevant information and notice your own assumptions. In orientation, introduce the role and agree on purpose, boundaries, time and confidentiality limits. Establish the planned ending early.',
  'Working is the active middle of the relationship. Explore concerns, connect patterns, practise coping and work toward the patient’s goals. The nurse uses a professional relationship to support the patient’s work.',
  'Termination reviews progress, discusses feelings about ending and plans the next support. Mentioning the end date during orientation is preparation for termination, not evidence that the relationship is already ending.'
 ],'You will meet with a patient during this admission, practise a coping skill together and end your work when the placement finishes.',
 ['timeline','Recognize the phase by its task',[
  ['Prepare','Review information and examine your assumptions.'],['Orientation','Agree on the purpose, limits, time and ending.'],['Working','Explore concerns and practise toward goals.'],['Termination','Review progress, discuss ending and arrange follow-up.']
 ],'The task distinguishes the phase more reliably than an isolated word such as “ending.”'],[
  O('Place the main tasks in their usual relationship sequence.','Arrange the relationship tasks.',[
   'Review available information and your own assumptions.',
   'Introduce the role and agree on purpose, time and the planned ending.',
   'Explore concerns and practise coping toward goals.',
   'Review progress, discuss the ending and plan follow-up.'
  ],'Preparation supports orientation; the working phase uses that agreement; termination reviews and closes the work.','Start before the first meeting, then establish the agreement before using it.'),
  C('At the first meeting, the nurse says, “We will meet through Friday, when my placement ends.”','What is the nurse doing now?',[
   ['Establishing the orientation agreement.','The ending is being clarified at the start so expectations are shared.'],
   ['Completing termination because Friday was mentioned.','The nurse is planning the ending, not yet reviewing and closing completed work.'],
   ['Beginning informal friendship after the placement.','The statement defines a professional time boundary; it does not create a social relationship.']
  ],0,'Distinguish planning an ending from carrying it out.'),
  C('On the final meeting, the patient says, “I’m worried I won’t manage without these visits.”','Which response fits the phase?',[
   ['Offer private social visits to avoid a difficult goodbye.','Extending into a social relationship blurs the professional boundary.'],
   ['Ignore the concern and leave quickly.','The ending and feelings about it need acknowledgement.'],
   ['Discuss the concern, review coping gains and confirm the next sources of support.','Termination includes feelings, progress and continuity after the relationship ends.']
  ],2,'Support closure and continuity without extending the professional relationship into friendship.')
 ],{sources:['communication']}),
 't-comm':L([
  'Listen for what the patient is communicating, then choose a response that fits the task. Open invitations, silence, observations, clarification and reflection can help the person explain an experience in their own words.',
  'False reassurance, rapid questioning, advice and judgment can close exploration. Avoid assuming a question is therapeutic just because it begins with an open word; consider its tone, timing and effect.',
  'A safety cue changes the task. A direct question about harm can be more appropriate than a broad invitation when risk needs clarification. With a delusion or hallucination, acknowledge distress without endorsing the belief, and assess the actual safety concern.'
 ],'A patient looks down and says, “No one really listens to me.” There is no stated immediate danger.',
 ['compare','Hear the concern → choose the tool → check its effect',[
  ['Invite','Give room for the patient’s meaning and concern.'],['Clarify','Check an unclear statement rather than guessing.'],['Protect','Ask directly when a safety cue needs assessment.']
 ],'Choose a technique for this moment, not a memorized “always use” phrase.'],[
  C('The patient pauses after saying that no one listens.','Which response best keeps the concern central?',[
   ['“Everyone feels ignored sometimes.”','This generalizes and can minimize the specific experience.'],
   ['“Tell me about a time you felt unheard.”','This invites the patient’s experience without defending others or promising an outcome.'],
   ['“The staff are very busy and try their best.”','Defending staff shifts attention away from the patient’s concern.']
  ],1,'Choose the response that explores this person’s experience.'),
  C('Later the patient says, “Sometimes I think I might hurt myself tonight.”','Which response fits the new task?',[
   ['Ask directly about current thoughts, intent, plan and immediate safety, and obtain appropriate support.','The statement creates a specific risk-assessment need; direct questions and protective action are appropriate.'],
   ['Use only silence until the patient changes the subject.','Silence alone leaves an immediate safety concern unassessed.'],
   ['Promise secrecy so the patient will keep talking.','The nurse cannot promise secrecy when safety requires additional help.']
  ],0,'A safety cue can require a direct assessment rather than a broad opening.')
 ],{title:'Communication Skills for Nurses',sources:['communication']}),
 't-groups-foundations':L([
  'A group can offer something a lecture alone cannot: members hear peers, receive feedback and try a new way of relating. Shared time also creates privacy, fit and participation limits that the leader must consider.',
  'Name a therapeutic factor by what the interaction does. Universality reduces the sense of being alone; hope makes improvement seem possible; altruism lets someone benefit through helping; cohesiveness supports belonging.',
  'The other factors describe learning, expression and meaning: information, imitation, social skills, interpersonal learning, family-pattern work, catharsis and existential concerns. Several can occur together. Use the complete reference to compare all eleven.'
 ],'In a coping group, a new member says, “I thought I was the only person struggling like this.”',
 ['compare','Identify the helpful function',[
  ['Universality','Recognizing a shared experience.'],['Altruism','Contributing in a way that helps another member.'],['Interpersonal learning','Using feedback to understand and change an interaction.']
 ],'Describe what changed for the member before choosing the factor’s name.'],[
  C('Another member describes a similar struggle; the new member says, “I feel less alone.”','Which factor is most directly illustrated?',[
   ['Imparting information.','No new factual teaching is the main effect described.'],
   ['Catharsis.','Emotional expression may occur, but the key change is recognizing a shared experience.'],
   ['Universality.','The member recognizes that others have a similar experience and feels less isolated.']
  ],2,'Focus on the stated effect: less alone because another person shares the experience.'),
  C('A member notices that interrupting makes peers withdraw, practises waiting and receives different feedback.','Which factor best explains this work?',[
   ['Interpersonal learning.','Feedback connects the member’s behavior with its effect and supports trying a new response.'],
   ['Imitation alone.','The scene emphasizes examining one’s own interpersonal effect rather than simply copying another person.'],
   ['Imparting information alone.','Factual instruction does not capture the feedback-and-practice process described.']
  ],0,'Distinguish receiving facts from learning through an interaction.')
 ],{sources:['groups']}),
 't-groups-design':L([
  'Plan the purpose, membership, setting and leader preparation before recruitment. A medication-education group and a psychotherapy group require different tasks and competencies.',
  'Content is the subject being discussed. Process is how members interact while discussing it. Norms, speaking time, alliances and feedback can affect whether the content is useful.',
  'Match structure to the setting. Changing inpatient membership may need brief, clear sessions; a continuing community group may build on earlier work. Open or closed membership and shared or varied member characteristics each bring benefits and limits.'
 ],'You are planning a short inpatient medication-education group where admissions and discharges change membership.',
 ['compare','Design the frame before leading the discussion',[
  ['Purpose','What should members learn or practise?'],['Membership','Who can benefit and participate safely?'],['Process','How will the interaction support the purpose?']
 ],'The discussion topic and the way people interact are separate parts of planning.'],[
  C('Members are discussing adverse effects, but only two people get speaking time.','What is the process issue?',[
   ['The medication topic itself.','That is the content; the process issue concerns participation.'],
   ['Unequal participation in the interaction.','Who gets to speak and how others respond are group-process observations.'],
   ['The printed drug names on the handout.','Those are content details rather than the interaction pattern described.']
  ],1,'Content is what; process is how.'),
  C('A new patient may attend only today’s session.','Which design choice best fits this setting?',[
   ['Make today’s learning usable on its own, with a clear purpose and opening.','A changing inpatient group needs a session that new members can enter and benefit from.'],
   ['Require every member to remember last month’s session.','That assumes continuity that the setting cannot provide.'],
   ['Skip the purpose because membership changes.','Changing membership increases the need for a clear frame; it does not remove it.']
  ],0,'Plan for the actual continuity of membership.')
 ],{sources:['groups']}),
 't-groups-development':L([
  'At orientation, members need a purpose, agreements and enough safety to begin participating. Early caution and testing do not mean the group has failed.',
  'In working, members explore issues, receive feedback and practise change. Conflict can be part of development when the leader helps members address it respectfully. Storming, norming and performing describe changes within the group’s development.',
  'Termination makes the ending explicit. Review what changed, discuss feelings about leaving and plan how members will use the learning afterward. An ending is more than a final attendance check.'
 ],'A new group is cautious at first. Later, members disagree over speaking time and then develop a workable shared agreement.',
 ['timeline','The leader’s task changes as the group develops',[
  ['Orientation','Clarify purpose, agreements and ways to participate.'],['Working','Use interaction, feedback and supported practice.'],['Termination','Review gains, acknowledge ending and plan transfer.']
 ],'Do not confuse a difficult working moment with automatic failure.'],[
  O('Arrange the main group-phase tasks.','Place the leader’s tasks in phase order.',[
   'Establish the purpose, agreements and participation expectations.',
   'Help members use feedback and practise toward the group’s goals.',
   'Review gains, discuss the ending and plan use beyond the group.'
  ],'Orientation establishes the frame; working uses it; termination helps members carry the learning forward.','Set the frame before working within it, then close the work.'),
  C('Members disagree over airtime without threats or violence.','What is the most useful leadership response?',[
   ['Declare the group unsuccessful and end it immediately.','Disagreement can be worked with when safety is maintained.'],
   ['Invite members to describe the effect and develop a fair participation agreement.','This uses the conflict to build workable norms and interpersonal learning.'],
   ['Prevent any further expression of disagreement.','Suppressing all differences prevents useful process work.']
  ],1,'Consider whether conflict can be used safely rather than automatically suppressed.'),
  C('The final session is tomorrow.','Which task belongs in the ending?',[
   ['Review progress, discuss separation and identify follow-up practice.','Termination connects gains with continued use and acknowledges the ending.'],
   ['Introduce a major new task with no time for review.','A new unfinished task can displace closure.'],
   ['Avoid mentioning the ending so no one feels sad.','Avoidance leaves feelings and continuity unaddressed.']
  ],0,'An ending needs review, feeling and a next step.')
 ],{sources:['groups']}),
 't-groups-roles':L([
  'Name a role by the function of a contribution, not by labeling the person. Task roles help the group do its work; maintenance roles make working together possible.',
  'An information seeker asks for useful facts; an elaborator develops an idea; an orienter brings the group back to its purpose. A gatekeeper opens participation; an encourager supports contributions; a harmonizer helps members work through tension.',
  'An individual-role pattern can displace shared work through attacking, blocking or repeatedly seeking personal attention. Describe the behavior and effect, explore its context and redirect without humiliation. The chapter reference keeps every named role available.'
 ],'During planning, one member asks for needed details while another notices that a quiet peer has not had a turn.',
 ['compare','What does the contribution do?',[
  ['Task','Moves the shared work forward.'],['Maintenance','Supports participation and workable relationships.'],['Individual pattern','Displaces the shared work with a personal demand or disruption.']
 ],'The same member can take different roles at different moments.'],[
  C('A member says, “We have heard from three people. Would anyone who has not spoken like a turn?”','Which role is most directly shown?',[
   ['Information seeker.','The member is not asking for factual clarification of the task.'],
   ['Aggressor.','The statement invites participation rather than attacking someone.'],
   ['Gatekeeper.','The member notices unequal airtime and opens participation.']
  ],2,'Identify the function: opening a route for others to participate.'),
  C('A member repeatedly returns the discussion to a personal dispute unrelated to today’s work.','Which response best addresses the behavior?',[
   ['Describe the pattern and its effect, then help redirect to the group’s purpose.','This addresses the behavior without defining the person by a negative role label.'],
   ['Tell the member they are an individual-role person permanently.','A role describes a contribution or pattern, not a fixed identity.'],
   ['Let the unrelated dispute occupy every remaining turn.','This leaves the shared task and other members’ needs displaced.']
  ],0,'Describe behavior, effect and a useful redirection.')
 ],{sources:['groups']}),
 't-groups-modalities':L([
  'Start with the intended change. An education group teaches knowledge or skills; a support group shares experience; psychotherapy uses a therapeutic approach and requires suitable preparation and scope.',
  'A theoretical framework guides what the leader notices and does. Cognitive-behavioral work examines thoughts and actions; psychodynamic work explores recurring relational patterns; humanistic and other approaches bring different emphases.',
  'Match the program to the person’s needs, available evidence and leader competence. A historical treatment example or a published study protocol does not establish that a specific intervention is effective or suitable today. The reference retains all named frameworks, group types and resources.'
 ],'A unit wants patients to demonstrate what their prescribed medicine is for and which adverse effects require help.',
 ['compare','Purpose → approach → evidence and fit',[
  ['Education','Teach and check knowledge or a usable skill.'],['Support','Share experience, connection and practical coping.'],['Psychotherapy','Use a therapeutic model within appropriate competence and scope.']
 ],'Choose by the intended work, not simply the word “group.”'],[
  C('The main goal is medication teach-back.','Which design most directly fits?',[
   ['A session devoted only to interpreting unconscious conflicts.','That may serve a different psychotherapy purpose but does not directly meet the stated education goal.'],
   ['A structured education session with an opportunity to demonstrate understanding.','The method and evaluation match the knowledge goal.'],
   ['Attendance without any check of understanding.','Attendance does not establish that the patient can use the information.']
  ],1,'Match the activity and evaluation with the stated purpose.'),
  C('A paper describes a protocol for a planned online group trial.','What can the nurse conclude from the protocol alone?',[
   ['The intervention has already been proven effective.','A planned method is not a completed result.'],
   ['Every patient should be enrolled regardless of need.','Fit, evidence, consent and access still require assessment.'],
   ['It describes how an intervention will be tested; outcomes still need evidence.','A protocol explains a proposed study rather than demonstrating benefit.']
  ],2,'Separate a research plan from research findings.')
 ],{sources:['groups']}),
 't-groups-leadership':L([
  'Choose a leadership style for the task, phase and current needs. Democratic leadership invites shared problem solving while maintaining the frame. More directive structure can be needed for a focused task; little direction is a poor fit when containment is needed.',
  'Use active listening, clarification, reflection, respectful challenge and summaries to support members’ work. Keep feedback specific to observed behavior and its effect rather than claiming to know everyone’s feelings.',
  'Supervision and coleadership help examine the leader’s reactions, boundaries and decisions. Agree on roles, debrief differences and notice cultural assumptions and barriers to participation. Inclusion does not require forced personal disclosure.'
 ],'A group is ready to solve a shared problem, but the leader has begun answering every question before members can respond.',
 ['compare','Style should serve the work',[
  ['Directive','Provide needed structure and clear direction.'],['Democratic','Invite shared work while holding the therapeutic frame.'],['Little direction','Leaves more responsibility with members; fit and safety still matter.']
 ],'A style is useful only when it meets the group’s actual needs.'],[
  C('Members are able to participate safely and have ideas to offer.','Which adjustment supports democratic leadership?',[
   ['Invite member proposals, clarify them and help the group compare options.','The leader supports shared problem solving without abandoning responsibility for the frame.'],
   ['Stop providing any structure or boundaries.','Democratic leadership does not mean absence of leadership.'],
   ['Continue making every decision for the members.','This retains control rather than building shared work.']
  ],0,'Shared problem solving and professional responsibility can occur together.'),
  C('A leader notices a strong urge to rescue one member and overlook an agreed limit.','What is the most useful professional response?',[
   ['Hide the reaction and quietly give that member special rules.','Unexamined exceptions can undermine fairness and boundaries.'],
   ['Use supervision to examine the reaction and plan a consistent response.','Supervision can help the leader understand personal reactions and protect therapeutic boundaries.'],
   ['Tell the whole group private details about the leader’s personal history.','Personal disclosure is not a substitute for appropriate supervision and can shift the focus away from members.']
  ],1,'Examine the reaction through the appropriate professional support.')
 ],{sources:['groups']}),
 't-groups-safety':L([
  'Before participation, explain the purpose, expectations and confidentiality limits. The nurse has professional duties; an agreement cannot guarantee that every peer will protect a disclosure.',
  'Online groups need attention to private space, recording, unseen listeners, each member’s location, emergency contacts and a connection-failure plan. A video connection does not remove licensure or local-response requirements.',
  'A safety concern can interrupt the planned group task. Assess a new statement about self-harm, obtain appropriate support and protect members from an immediate threat. Base restrictions on actual behavior and assessed risk, not on quietness, diagnosis or limited resources alone.'
 ],'Before an online group, a participant asks whether it is safe to discuss something they do not want other members to repeat.',
 ['decision','Explain limits, prepare access and respond to risk',[
  ['Consent','Explain privacy limits before sensitive disclosure.'],['Remote plan','Know location, contacts and the backup response.'],['Immediate safety','Pause the agenda when assessment or protection is needed.']
 ],'A privacy agreement and a safety plan do different jobs.'],[
  C('The participant asks, “Can you promise nobody here will repeat this?”','Which reply is accurate?',[
   ['Promise absolute secrecy because all members signed an agreement.','An agreement sets expectations but cannot guarantee every peer’s behavior.'],
   ['Explain professional duties and group agreements, including the limits of what can be guaranteed.','This supports informed participation without making an impossible promise.'],
   ['Avoid the question until after the disclosure.','The person needs this information before deciding what to share.']
  ],1,'Distinguish the nurse’s duty from control over other members.'),
  C('During the session, a participant reports a current intention to harm themselves after the call.','Which action takes priority?',[
   ['Finish the group agenda before responding.','The agenda cannot take priority over a stated immediate safety concern.'],
   ['Assume the group’s reassurance is enough.','Peer support does not replace a direct risk assessment and needed protective help.'],
   ['Pause, assess immediate risk and activate the location-appropriate safety response and additional support.','The concern requires direct assessment and the prepared emergency pathway.']
  ],2,'Use the safety plan when the person’s actual risk changes.')
 ],{sources:['groups','remote']}),
 't-groups-participation':L([
  'Protect room for participation without humiliating a member. When one person dominates, describe the pattern, remind the group of shared time and invite other voices. Explore the need behind the pattern without assuming a motive.',
  'Silence can reflect thought, uncertainty or concerns about safety. Offer a manageable invitation and time to respond; do not force sensitive disclosure. With anger, acknowledge feeling while maintaining behavioral limits.',
  'Evaluate the intended change. Medication education needs demonstrated understanding; therapy goals may concern coping, symptoms or relationships. Attendance and a pleasant session can be useful observations, but they do not establish the goal was met.'
 ],'A medication group includes one member who answers every prompt and another who has not spoken yet.',
 ['flow','Observe participation → invite a useful change → evaluate',[
  ['Observe','Describe the behavior and its effect without a motive label.'],['Invite','Share airtime, offer a manageable turn and keep limits.'],['Evaluate','Ask for the skill or understanding the group aimed to build.']
 ],'Respectful inclusion and clear evaluation work together.'],[
  C('The quiet member looks thoughtful and has not declined participation.','Which response best supports inclusion?',[
   ['Offer a simple invitation, allow time and ask whether to return to them later.','This opens participation while respecting readiness and the time needed to respond.'],
   ['Demand a private trauma story to prove engagement.','Forced disclosure can damage safety and is not required to show participation.'],
   ['State that silence proves the group is useless to them.','Silence alone does not establish the person’s experience or benefit.']
  ],0,'Invite participation without treating silence as proof of refusal.'),
  C('The group’s goal was safer medication use.','Which result best shows the goal was met?',[
   ['The member says the room was comfortable.','Comfort is relevant to experience but does not demonstrate medication knowledge.'],
   ['The member attended every meeting.','Attendance does not show the person can apply the teaching.'],
   ['The member explains the prescribed purpose and schedule, important adverse effects and relevant interactions.','Teach-back directly checks the knowledge the group was intended to build.']
  ],2,'Measure the intended skill or knowledge, not only satisfaction or attendance.')
 ],{sources:['groups']})
};
