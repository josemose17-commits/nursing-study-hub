// Exam 4 · Topics — the syllabus topics as notes (Varcarolis 9e chapters 1–6, 8, 9, 10, 15, 16, 34), written in our own words.
// { id, week, ch, title, short, lead, terms?: [{t, see, why, means}], cards: [{h, b: [bullets], why?, tag?}], recall?: [[question, answer]] }
window.MH_TOPICS = [
{
  id: 'intro', week: 11, ch: 'Chapter 1', title: 'Mental health and mental illness',
  short: 'The continuum, resilience, recovery, stigma, and how common it is.',
  lead: 'Mental health isn’t the absence of illness. It is a state of well-being in which a person **uses their abilities, copes with normal stress, works productively and contributes** to their community. Mental illness is a **clinically significant disturbance** in thinking, emotion or behavior that causes **distress or impaired functioning**. People move back and forth along a continuum between the two.',
  terms: [
    { t: 'Mental health continuum', see: 'The same person can be thriving, struggling, unwell, then recovering over a lifetime.', why: 'Health and illness are not two boxes: stress, supports, biology and coping shift where someone sits at any moment.', means: 'You assess **where the patient is now** and what moves them toward health, rather than labeling them by a diagnosis.' },
    { t: 'Resilience', see: 'Someone who goes through a divorce or job loss, grieves, and then adapts and rebuilds.', why: 'The ability to bounce back from adversity, supported by relationships, optimism, problem-solving and a sense of purpose.', means: 'A **protective factor** you can build: point out strengths, connect patients to support, teach coping skills.' },
    { t: 'Recovery', see: 'A person with schizophrenia who lives on their own, works part-time and manages symptoms.', why: 'Recovery is a **process of change** in which people improve their health, live self-directed lives and reach their potential, even if some symptoms remain.', means: 'The modern goal of care: **hope**, person-centered choices and peer support, not just symptom control.' },
    { t: 'Stigma', see: '“He’s crazy.” Avoiding a coworker after learning about their diagnosis. Not seeking help out of shame.', why: 'Negative stereotypes about mental illness lead to discrimination (public stigma) and to shame that people turn against themselves (self-stigma).', means: 'A major **barrier to treatment**. Use **person-first language** (“a person with bipolar disorder,” not “a bipolar”).' }
  ],
  cards: [
    { h: 'What’s “normal” depends on culture', b: ['Behavior is judged against the **norms of a culture**: hearing a deceased relative’s voice during grief may be expected in one culture and alarming in another.', 'Ask about **meaning** and **impact on functioning** before deciding a behavior is a symptom.'] },
    { h: 'How common mental illness is', b: ['About **1 in 5 adults** has a mental illness in a given year; about 1 in 20 has a **serious** mental illness.', '**Half** of all lifetime disorders start **by age 14**, three-quarters by the mid-20s.', 'Most common: **anxiety disorders**, then **major depression**.', 'Many people never get treatment, and on average there is a **long delay** between onset and treatment.', '**Epidemiology** is the study of patterns of disease; **incidence** = new cases in a period; **prevalence** = all existing cases at a time.'], why: 'Prevalence tells you how many patients on a med-surg unit are likely to have a co-occurring mental illness: many.' },
    { h: 'Causes: it’s never just one thing', b: ['**Biologic**: genetics, neurotransmitters, brain structure, hormones, infection, inflammation.', '**Psychological**: temperament, learned patterns, trauma, coping style.', '**Social and environmental**: poverty, discrimination, isolation, adverse childhood experiences, substance exposure.', 'The **stress-diathesis** (vulnerability + stress) model ties these together.'] },
    { h: 'The psychiatric-mental health nurse', b: ['**Basic level (RN)**: assessment, coordination of care, health teaching, milieu therapy, self-care support, psychobiologic interventions (giving and monitoring medication), crisis care, case management.', '**Advanced practice (PMH-APRN)**: psychotherapy, prescribing, consultation.', 'Nurses care for the **whole person**: physical, emotional, social and spiritual, in every setting.'] }
  ],
  recall: [
    ['Mental illness requires what two things?', 'A disturbance in thinking, emotion or behavior **that causes distress or impaired functioning**.'],
    ['Incidence vs prevalence?', 'Incidence = **new** cases over a period. Prevalence = **all** existing cases at a point in time.'],
    ['What is recovery in mental health?', 'A **process** toward a self-directed, meaningful life, with hope, even if symptoms remain.'],
    ['The most common class of mental disorders?', '**Anxiety disorders**.']
  ]
},
{
  id: 'culture', week: 11, ch: 'Chapter 5', title: 'Culture and mental health',
  short: 'Worldviews, barriers to care, cultural syndromes, and culturally congruent care.',
  lead: 'Culture decides what counts as **normal**, how distress is **felt and described**, who **makes decisions**, and what treatment people trust. Psychiatric nursing grew out of **Western** ideas, so the nurse checks their own assumptions, assesses each patient’s beliefs, and builds a plan that fits them: **culturally congruent care**.',
  terms: [
    { t: 'Culture vs ethnicity vs race', see: 'Same race, different cultures: an African American family in the US for generations and a family just arrived from Nigeria.', why: '**Culture** = shared beliefs, values and practices that guide a group. **Ethnicity** = a shared heritage and history. **Race** = a social category (now self-identified, often multiple).', means: 'Don’t assume beliefs from appearance or a census box; **ask**.' },
    { t: 'Ethnocentrism', see: '“I’m sure our treatment will fix this.” “Her family is too involved.”', why: 'The universal tendency to believe one’s own culture’s way is the only right and natural way.', means: 'Leads to judging patients and to care they won’t accept. The fix is **cultural awareness** of your own norms.' },
    { t: 'Stereotyping', see: '“All Asian patients are quiet about pain.”', why: 'Believing every member of a group is the same.', means: 'Reduced by many **cultural encounters**: individuals express their culture in their own ways.' },
    { t: 'Somatization', see: 'A woman grieving her son describes only stomach pain, back pain and fatigue, and denies sadness.', why: 'Psychological distress is felt and expressed as **physical** symptoms, common where mind and body are seen as one or where mental illness carries strong stigma.', means: 'A common cause of **missed or wrong diagnoses**. Assess for depression behind physical complaints.' },
    { t: 'Acculturation and assimilation', see: 'Teenagers adopt American norms quickly; grandparents keep traditional ways; conflict at home.', why: '**Acculturation** = learning a new culture’s norms. **Assimilation** = fully adopting them. **Enculturation** = learning your own culture growing up. Some people become **bicultural**; some have **culture shock**.', means: 'Children acculturate faster → **intergenerational conflict**. Assess the stage of acculturation.' }
  ],
  cards: [
    { h: 'Three worldviews (broad patterns, not rules)', b: ['**Western**: the **individual** is the source of identity; autonomy; mind and body separate; disease has a measurable cause; time is linear; plan for the future.', '**Eastern**: the **family** is the source of identity; group decisions; mind–body–spirit unity; illness = **imbalance** (yin–yang, hot–cold); time is circular.', '**Indigenous**: the **community** and **nature**; illness = loss of **harmony** with others, nature or the spirit world; time is the present.'] },
    { h: 'Beliefs that differ from Western care', b: ['**Decisions**: made by the patient (Western) vs by the **family or its head**.', '**Telling the truth**: full disclosure vs protecting the patient from bad news to preserve hope.', '**Sick role**: be independent and get moving vs family cares for the sick person, rest helps recovery.', '**Treatment**: prescribed medicines and technology vs balance-restoring remedies and traditional healers.', '**Pain**: rated on a scale vs expressed openly or not at all; felt globally.'] },
    { h: 'Nonverbal communication varies', b: ['**Eye contact**: respect in the US; rude, challenging or sexual in some cultures.', '**Personal space**: US personal distance about 1.5–4 ft; others stand closer or farther.', '**Touch**: high-touch vs low-touch cultures (touch between men and women may be taboo).', 'Gestures: a thumbs-up or a nod can mean different things.'] },
    { h: 'Barriers to care', b: ['**Language**: use a **professional medical interpreter**, free, at all hours, matched in gender and age if possible. **Never family or friends** (embarrassing topics get filtered, terms get lost), especially in mental health.', '**Stigma**: in family-centered cultures illness may shame the whole family → hiding it, delayed care.', '**Misdiagnosis**: tools validated mostly on people of European origin; somatization; idioms (“feeling blue” may mean nothing literally).', '**Cultural concepts of distress** that don’t fit DSM categories.', '**Pharmacogenetics**: different drug responses; most drug trials enroll mostly White participants.'] },
    { h: 'Cultural concepts of distress (DSM-5)', b: ['Replaced the old term “culture-bound syndromes.” Three kinds: **idioms of distress** (ways of expressing suffering, like “I’m a nervous wreck”), **cultural explanations** (perceived causes) and **cultural syndromes**.', '**Ataque de nervios** (Latin American): sudden trembling, palpitations, shouting, fainting under unbearable stress.', '**Susto** (Latin American): “soul loss” after a fright; like PTSD.', '**Hwa-byung** (Korean): suppressed anger → epigastric pain, palpitations, aches; like depression.', '**Neurasthenia** (Chinese): fatigue, poor sleep and concentration, denies sadness; like depression.', '**Ghost sickness** (Navajo), **Jin possession** (Somali), **wind illness** (Chinese, Vietnamese; treated by **coining** or **cupping**, which leave marks that are **not abuse**).', 'The DSM-5 **Cultural Formulation Interview** (16 questions) builds culture into the assessment.'] },
    { h: 'Populations at risk', b: ['**Immigrants**: lost status and jobs, new systems, changed family roles → anxiety, depression.', '**Refugees**: forced to flee; war, torture, loss → high rates of **PTSD and depression**.', '**Poverty**: people in poverty are **2–3 times** more likely to develop mental illness; the higher rates in minority groups are linked to **poverty**, discrimination and trauma, not to race itself.'] },
    { h: 'Campinha-Bacote: becoming culturally competent', b: ['**Cultural awareness**: examine your own culture, biases and assumptions.', '**Cultural knowledge**: learn about other groups’ worldviews, communication and health beliefs.', '**Cultural encounters**: direct interactions with diverse patients (reduces stereotyping).', '**Cultural skill**: doing a culturally sensitive **assessment**.', '**Cultural desire**: genuine wanting to understand and learn from the patient.', 'A **process** of *becoming*, never finished.'] },
    { h: 'The culturally sensitive assessment (Kleinman’s questions)', b: ['“What do you call this illness?” “When did it start, and why then?”', '“What do you think caused it?” “What does it do to you?” “How serious is it, and how long will it last?”', '“How have you treated it? How do you think it should be treated?”', 'Indirect version: “What does your family think is wrong?”', 'Also ask about religion and spiritual practices, diet, healers and herbs, who counts as family, who gets information and how decisions are made.'] },
    { h: 'Planning: preserve, accommodate, repattern', b: ['**Preserve** practices that help (strong family support, prayer).', '**Accommodate or negotiate** neutral practices (a traditional healer’s visit, a ceremony alongside treatment).', '**Repattern** harmful ones by teaching and negotiating (an herb that interacts with a medication).', 'Examples of competence: schedule meals around prayer times, help a Hindu patient choose foods from the menu, arrange a chaplain or healer visit.'] }
  ],
  recall: [
    ['Who should interpret for a patient with limited English in a psychiatric interview?', 'A **professional medical interpreter**, never family or friends.'],
    ['A grieving patient reports only chest and stomach pain. Term?', '**Somatization**.'],
    ['Believing your culture’s way is the only right way?', '**Ethnocentrism**.'],
    ['Campinha-Bacote’s five constructs?', 'Awareness, knowledge, **encounters**, skill, **desire**.'],
    ['Why do immigrant families have intergenerational conflict?', 'Children **acculturate faster** than older adults.']
  ]
},
{
  id: 'dx', week: 11, ch: 'Chapters 1 and 13–16', title: 'Diagnostic tools and assessment',
  short: 'The DSM-5, the mental status exam, rating scales, and ruling out medical causes.',
  lead: 'Psychiatric diagnosis rests on **criteria**, not a lab test. The **DSM-5** lists the criteria; the **mental status exam** is the nurse’s systematic snapshot of how the patient looks, thinks and feels right now; **rating scales** measure severity and track change. Always ask what **medical problem or substance** could explain the symptoms.',
  terms: [
    { t: 'DSM-5', see: '“Major depressive disorder: 5 of 9 symptoms for 2 weeks, causing distress or impairment.”', why: 'The American Psychiatric Association’s manual of diagnostic criteria, so clinicians everywhere mean the same thing by a diagnosis.', means: 'Gives the medical diagnosis. Codes match the **ICD-10-CM** for billing. The **nurse** writes **nursing diagnoses** (responses to illness), not DSM diagnoses.' },
    { t: 'Mental status exam (MSE)', see: 'Appearance, behavior, speech, mood and affect, thought process and content, perception, cognition, insight and judgment.', why: 'Like a physical assessment for the mind: a structured way to describe what you observe and hear.', means: 'Document **specific observations and quotes** (“states ‘the TV is talking to me’”) rather than labels (“psychotic”).' },
    { t: 'Mood vs affect', see: 'Mood: “I feel empty.” Affect: flat face, monotone voice.', why: '**Mood** is the sustained emotion the patient **reports**; **affect** is the emotion the nurse **observes**.', means: 'Note whether affect is **congruent** with mood, and its range: full, constricted, blunted, flat; or **labile** (rapid shifts).' },
    { t: 'Insight and judgment', see: '“There’s nothing wrong with me; my family is the problem.”', why: '**Insight** = awareness of one’s illness and its effects. **Judgment** = ability to make sound decisions (“What would you do if you found a stamped, addressed envelope?”).', means: 'Poor insight predicts **nonadherence**; poor judgment predicts **safety** risks.' }
  ],
  cards: [
    { h: 'Mental status exam, in order', b: ['**Appearance**: grooming, dress, hygiene, posture, eye contact.', '**Behavior and motor activity**: agitation, retardation, tremors, tics, cooperation.', '**Speech**: rate, volume, quantity (pressured, poverty of speech).', '**Mood and affect**.', '**Thought process** (how they think: logical, tangential, flight of ideas, loose) and **thought content** (what they think: delusions, obsessions, **suicidal or homicidal ideation**).', '**Perception**: hallucinations (hearing, seeing, smelling, tasting, feeling things that aren’t there), illusions.', '**Cognition**: orientation, attention, memory, abstract thinking.', '**Insight and judgment**.'] },
    { h: 'Psychosocial assessment', b: ['Reason for seeking care, in the **patient’s own words**.', 'Past psychiatric history, hospitalizations, suicide attempts, medications.', '**Substance use**; trauma and abuse history.', 'Family history; relationships, supports, work, finances, housing.', 'Culture, spirituality, strengths and coping.', 'Use **open-ended** questions; a calm, private setting; and tell the patient why you’re asking.'] },
    { h: 'Rule out medical and substance causes', b: ['Labs: **CBC, BMP, thyroid (TSH)**, liver and kidney function, **urine drug screen**, B12 and folate, glucose; pregnancy test before many medications.', 'Thyroid disease, delirium, brain injury or tumor, infection, hypoglycemia, and medications (steroids, beta-blockers) can all mimic psychiatric illness.'], why: 'A “new psychiatric illness” that is really hypothyroidism or delirium will be treated wrongly, and the cause will be missed.' },
    { h: 'Rating scales (know what each measures)', b: ['**PHQ-9**, **Beck Depression Inventory**, **Hamilton**: depression severity.', '**GAD-7**: anxiety. **Y-BOCS**: OCD severity.', '**Columbia Suicide Severity Rating Scale (C-SSRS)** and **SAFE-T**: suicide risk.', '**Altman Self-Rating Mania Scale**, **Mood Disorder Questionnaire**: mania and bipolar screening.', '**Impact of Event Scale**, **PCL-5**: trauma symptoms.', '**Mini-Cog / MMSE**: cognition. **AUDIT**, **CIWA**: alcohol use and withdrawal.'], why: 'Scales give a **baseline number** you can compare over time to see whether treatment is working.' },
    { h: 'Nursing diagnoses in mental health', b: ['Written as the patient’s **response**: risk for suicide, anxiety, ineffective coping, disturbed sleep, social isolation, risk for violence, self-care deficit, hopelessness.', 'Outcomes are **specific and measurable** (“will sleep 6 hours by day 3”).'] }
  ],
  recall: [
    ['Who writes the DSM-5?', 'The **American Psychiatric Association**.'],
    ['Mood or affect: “The patient is smiling while describing her father’s death.”', '**Affect** (observed), and it is **incongruent** with the topic.'],
    ['Thought process vs thought content?', 'Process = **how** thoughts connect (flight of ideas, tangential). Content = **what** they are about (delusions, suicidal ideas).'],
    ['Which labs often rule out a medical cause of depression or anxiety?', '**TSH**, CBC, BMP, glucose, urine drug screen, B12.']
  ]
},
{
  id: 'life', week: 11, ch: 'Chapter 2', title: 'Development across the lifespan',
  short: 'Erikson’s crises, Piaget’s thinking stages, Kohlberg and Gilligan on morals.',
  lead: 'Developmental theories tell you what a person **should be mastering** at their age, so you can spot when stress, illness or trauma has **stalled** them. Erikson is the one the exam leans on: each stage has a **crisis**, and how it resolves shapes later strengths or problems.',
  cards: [
    { h: 'Erikson’s eight stages', b: ['**Infancy (0–1½)**: **trust vs mistrust**. Success: trust that needs will be met. Failure: suspicion, withdrawal.', '**Early childhood (1½–3)**: **autonomy vs shame and doubt**. Self-control and willpower vs self-doubt.', '**Late childhood (3–6)**: **initiative vs guilt**. Purpose, starting activities vs fear of punishment, guilt.', '**School age (6–12)**: **industry vs inferiority**. Competence, “I can do things” vs feeling inadequate.', '**Adolescence (12–20)**: **identity vs role confusion**. A clear sense of self vs confusion about who they are.', '**Early adulthood (20–35)**: **intimacy vs isolation**. Close, committed relationships vs loneliness.', '**Middle adulthood (35–65)**: **generativity vs self-absorption (stagnation)**. Guiding the next generation and contributing vs self-centeredness.', '**Later years (65+)**: **integrity vs despair**. Accepting one’s life with meaning vs regret, fear of death.'], why: 'A 70-year-old reviewing life with regret, a teen with no sense of self, a toddler shamed for accidents: each points to a stage and to what the nurse can support.' },
    { h: 'Piaget: how thinking develops', b: ['**Sensorimotor (0–2)**: learns through senses and movement; **object permanence**.', '**Preoperational (2–7)**: language and symbols, **egocentric**, magical thinking.', '**Concrete operational (7–11)**: logical about **concrete** things; conservation; rules.', '**Formal operational (11+)**: **abstract** and hypothetical thinking.'], why: 'Match teaching to the stage: concrete, hands-on explanations for a school-age child; and remember that severe anxiety or psychosis can push adults back to concrete thinking.' },
    { h: 'Moral development: Kohlberg and Gilligan', b: ['**Kohlberg**: **preconventional** (avoid punishment, get rewards) → **conventional** (be “good,” obey laws and rules) → **postconventional** (social contract, universal principles of justice).', '**Gilligan**: an **ethic of care** and relationships, from caring for self → caring for others (self-sacrifice) → caring for both self and others.'] },
    { h: 'Freud’s stages (for context)', b: ['**Oral (0–1½)** → **anal (1½–3)** → **phallic (3–6)** → **latency (6–12)** → **genital (12+)**.', 'Unresolved conflicts at a stage can show up later as fixations (e.g., oral: smoking, overeating, dependency).'] },
    { h: 'Mental health at the ends of life', b: ['**Children** show distress through **behavior**: irritability, regression, school problems, physical complaints.', '**Older adults**: depression is **underrecognized** (blamed on aging), shows as somatic complaints or memory problems; **older men have the highest suicide rate**; start medications **low and slow**.'] }
  ],
  recall: [
    ['A 16-year-old keeps changing friend groups and says, “I don’t know who I am.” Erikson stage?', '**Identity vs role confusion**.'],
    ['A 72-year-old says, “I wasted my life.” Which unresolved crisis?', '**Integrity vs despair** (despair).'],
    ['Middle adulthood crisis?', '**Generativity vs self-absorption (stagnation)**.'],
    ['Piaget stage of a 9-year-old?', '**Concrete operational**: logical about concrete things, not abstract ones yet.'],
    ['Trust vs mistrust is resolved through what?', 'Consistent, reliable **caregiving** that meets the infant’s needs.']
  ]
},
{
  id: 'settings', week: 11, ch: 'Chapters 4 and 6', title: 'History and treatment settings',
  short: 'Deinstitutionalization, the continuum of care, the milieu, and the team.',
  lead: 'Care moved from **large state hospitals** to the **community** after the first antipsychotics (1950s) and the **Community Mental Health Centers Act (1963)**. Today most people are treated as **outpatients**; inpatient stays are **short** and reserved for people who are **dangerous to themselves or others** or can’t care for themselves. Patients move along a **continuum of care** to the **least restrictive** setting that keeps them safe.',
  cards: [
    { h: 'Milestones', b: ['**1950s**: chlorpromazine, the first antipsychotic, makes community living possible.', '**1963**: Community Mental Health Centers Act → **deinstitutionalization**.', 'Unintended results: too few community services, so many people with serious mental illness ended up **homeless or incarcerated**.', '**2008 Mental Health Parity and Addiction Equity Act** (in effect 2010) and the **Affordable Care Act**: insurance must cover mental health and substance use care like physical care.'] },
    { h: 'Outpatient and community settings', b: ['**Primary care**: where most people first get mental health care.', '**Community mental health centers**: therapy, medication management, case management.', '**Partial hospitalization (PHP)**: treatment most of the day, home at night; **intensive outpatient (IOP)**: several hours a few days a week.', '**Assertive community treatment (ACT)**: a mobile team that brings care to people with serious mental illness wherever they are, on call **24 hours a day**.', 'Psychiatric home care, telehealth, crisis lines (**988**), peer support, clubhouses, supported housing and employment.'] },
    { h: 'Inpatient care', b: ['For **crisis stabilization** when outpatient care is not safe: danger to self or others, or **gravely disabled**.', 'Short stays focused on safety, stabilization, medication and **discharge planning from day one**.', 'State hospitals for longer-term or forensic care.'] },
    { h: 'The therapeutic milieu', b: ['The **unit itself** is part of treatment: a safe, structured environment with predictable routines, clear rules, community meetings and groups.', 'Patients practice social and coping skills with staff and peers.', 'The nurse **manages the milieu**: safety checks, de-escalation, group facilitation, limit setting.'], why: 'Structure lowers anxiety and gives people a safe place to try new behavior.' },
    { h: 'The treatment team', b: ['**Psychiatric RN**: 24-hour care, assessment, the milieu, medication, teaching, coordination.', '**PMH-APRN** and **psychiatrist**: diagnosis, prescribing, psychotherapy.', '**Psychologist**: testing and therapy. **Social worker**: family, housing, benefits, discharge.', '**Occupational and recreational therapists**, **pharmacist**, **peer support specialist**, **case manager**.'] },
    { h: 'Safety on behavioral health units', b: ['Screen every patient for **suicide risk** (a National Patient Safety Goal).', 'Ligature-resistant rooms, contraband searches, observation levels.', 'De-escalation before restraint; staff trained in crisis management.'] }
  ],
  recall: [
    ['Which law started deinstitutionalization?', 'The **Community Mental Health Centers Act of 1963**.'],
    ['What is ACT?', '**Assertive community treatment**: a mobile, 24/7 team that brings care to people with serious mental illness in the community.'],
    ['What is milieu therapy?', 'Using the **structured, safe unit environment** and its routines and relationships as treatment.'],
    ['What does mental health parity mean?', 'Insurance must cover mental health and substance use care **on equal terms** with physical care.']
  ]
},
{
  id: 'legal', week: 11, ch: 'Chapter 6', title: 'Legal and ethical care',
  short: 'Admissions, patient rights, restraint and seclusion, confidentiality and duty to warn.',
  lead: 'Psychiatric care can take away a person’s **liberty**, so the law protects their rights tightly. Know the **types of admission**, the **rights** that patients keep even when committed, the rules for **restraint and seclusion**, and the limits of **confidentiality**. Every decision rests on the **least restrictive alternative**.',
  terms: [
    { t: 'Least restrictive alternative', see: 'Treating depression as an outpatient rather than in the hospital; verbal de-escalation before medication, and medication before restraint.', why: 'Patients have a right to treatment that limits their freedom **only as much as safety requires**.', means: 'Always try and **document** less-restrictive measures first, unless the emergency is too acute.' },
    { t: 'Competency vs capacity', see: 'A judge declares a person incompetent and appoints a guardian; a psychiatrist judges that a patient can’t weigh the risks of ECT today.', why: '**Competency** is a **legal** status decided by a **court**; **capacity** is a **clinical** judgment about a specific decision, and it can change hour to hour.', means: 'Patients are **presumed competent**. Involuntary admission does **not** by itself make someone incompetent; they keep the right to consent to or refuse treatment.' },
    { t: 'Duty to warn and protect (Tarasoff)', see: 'A patient says he will kill his ex-girlfriend when he gets out.', why: 'The Tarasoff rulings (California, 1974 and 1976): when a patient makes a serious threat against an **identifiable person**, the duty to protect that person outweighs confidentiality.', means: 'Report the threat to the treatment team and provider **immediately**; the clinician warns the victim or police per state law.' }
  ],
  cards: [
    { h: 'Types of admission', b: ['**Voluntary**: the patient applies **in writing**; may **request discharge**, though staff may reevaluate and start an involuntary hold if the patient is dangerous.', '**Involuntary commitment**: court-ordered, without consent, when the person has a **mental illness** and is a **danger to self or others**, **gravely disabled** (can’t meet basic needs for food, clothing, shelter), or needs treatment and the illness prevents them from seeking it.', '**Emergency (temporary) commitment**: a short hold, usually **24–96 hours (often 72)**, for evaluation, until a court hearing.', '**Writ of habeas corpus**: the patient’s legal request for release when they believe they are held unlawfully.'] },
    { h: 'Discharge types', b: ['**Unconditional release**: the legal relationship ends.', '**Conditional release**: discharged with required outpatient treatment.', '**Against medical advice (AMA)**: a voluntary patient leaves when staff disagree but there are no grounds to commit.', '**Assisted outpatient treatment**: **court-ordered outpatient** care for people with repeated relapses from nonadherence.'] },
    { h: 'Patients’ rights', b: ['Right to **treatment** in the **least restrictive** setting, with dignity and privacy.', 'Right to **refuse treatment**, including medication, **even if involuntarily committed** (except in an emergency, or after a court finds them incompetent).', 'Right to **informed consent** (the prescriber obtains it; the nurse educates and witnesses).', 'Right to communicate (phone, mail, visitors), to an attorney, to keep personal belongings, to manage their money unless found incompetent.', 'Right to be free from unnecessary **restraint and seclusion**.', '**Psychiatric advance directives**: written while well, stating treatment preferences for a future crisis.'] },
    { h: 'Restraint and seclusion', tag: 'High yield', b: ['A **last resort** for **imminent danger** to self or others after less-restrictive measures fail; **never** for punishment or staff convenience.', 'Needs a **provider order**; **never PRN or standing**. In an emergency the nurse may initiate and obtain the order promptly.', 'A face-to-face evaluation by a provider or trained RN **within 1 hour**.', 'Order limits: **adults 4 hours**, **ages 9–17: 2 hours**, **under 9: 1 hour**; renewed up to **24 hours**, then a new order.', '**Continuous observation**; check circulation, skin, vital signs, fluids, food and toileting **every 15–30 minutes** per policy; release as soon as safe.', 'Document the behavior, the alternatives tried, times in and out, and assessments.', '**Chemical restraint** = medication used to control behavior rather than to treat the condition. Side rails used to keep a patient in bed are a restraint too.', '**Seclusion** = alone in a room the patient can’t leave. **Time-out** is voluntary: the patient can leave.'], why: 'Restraint and seclusion are dangerous (asphyxia, injury, trauma), so the law treats them as a deprivation of liberty that needs tight time limits and monitoring.' },
    { h: 'Confidentiality and HIPAA', b: ['Share information only with people **directly involved in care**, or with the patient’s **written consent**. Only the patient can waive privilege.', 'Confirming that someone is a patient is a breach unless they’ve consented.', 'No patient talk in elevators, cafeterias or on **social media**; no identifiers in school paperwork.', 'Confidentiality continues **after death**.', '**Exceptions**: duty to warn and protect; **mandatory reporting** of child or elder abuse; a court order.'] },
    { h: 'Torts and liability', b: ['**Assault**: threatening to touch (“If you don’t take this I’ll hold you down”). **Battery**: touching without consent (forcing medication outside an emergency).', '**False imprisonment**: confining without legal grounds (locking in a voluntary patient who asks to leave without a hold, or unnecessary restraint).', '**Defamation**: **slander** (spoken) and **libel** (written).', '**Negligence / malpractice**: duty + breach + harm caused by the breach (e.g., failing to follow suicide precautions).'] },
    { h: 'Ethical principles', b: ['**Autonomy**: respecting the patient’s right to decide (refusing medication).', '**Beneficence**: doing good (spending time calming an anxious patient).', '**Nonmaleficence**: doing no harm (protecting confidential information).', '**Justice**: fair, equal care (equal attention to a patient after a suicide attempt).', '**Fidelity**: keeping promises, loyalty (showing up when you said you would).', '**Veracity**: telling the truth (honest teaching about side effects).'] }
  ],
  recall: [
    ['A voluntary patient asks to leave. First action?', 'Notify the provider for **reevaluation**; the patient has the right to request discharge (staff may start a hold only if the patient is dangerous).'],
    ['Restraint order limit for an adult?', '**4 hours** (2 for ages 9–17, 1 for under 9), renewable up to 24 hours.'],
    ['Can an involuntarily committed patient refuse medication?', '**Yes**, except in an emergency or after a court finds them incompetent.'],
    ['Telling a patient “Take this or I’ll get the staff to hold you down” is which tort?', '**Assault** (a threat). Actually forcing it without grounds = **battery**.'],
    ['Which principle: explaining side effects honestly?', '**Veracity**.']
  ]
},
{
  id: 'theories', week: 11, ch: 'Chapter 2', title: 'Theories and therapies',
  short: 'Freud, Peplau, Maslow, behavioral and cognitive theories, and the therapies built on them.',
  lead: 'Each theory explains behavior from a different angle, and each gave rise to a therapy. **Psychoanalytic** theory looks at the unconscious; **interpersonal** theory at relationships; **behavioral** theory at learning; **cognitive** theory at thoughts; **humanistic** theory at growth; **biological** theory at the brain. Nurses use pieces of all of them.',
  cards: [
    { h: 'Freud (psychoanalytic)', b: ['Levels of awareness: **conscious**, **preconscious** (can be recalled), **unconscious** (the largest part, out of awareness, but drives behavior).', 'Personality: **id** (instinct, pleasure, “I want it now”), **ego** (reality, mediates), **superego** (conscience, morals).', 'The ego uses **defense mechanisms** to manage anxiety.', 'Therapy: **psychodynamic** (free association, dream analysis, exploring **transference**).'] },
    { h: 'Interpersonal: Sullivan and Peplau', b: ['**Sullivan**: personality forms through relationships; anxiety arises from them; people use “security operations” to reduce it.', '**Peplau**: the **nurse–patient relationship** is the therapeutic tool. Described the **phases** (orientation, working, termination), the **roles** of the nurse, and the **levels of anxiety**.', '**Interpersonal therapy (IPT)**: short-term therapy for depression focused on grief, role disputes, role transitions and social isolation.'] },
    { h: 'Maslow (humanistic)', b: ['Needs in order: **physiological → safety → love and belonging → esteem → self-actualization**.', 'Lower needs must be met before higher ones can be addressed.', '**Rogers**: client-centered therapy with **empathy, genuineness and unconditional positive regard**.'], why: 'This is how you **prioritize**: a manic patient who hasn’t eaten or slept gets food, fluids and rest before insight-oriented groups.' },
    { h: 'Behavioral theories (learning)', b: ['**Pavlov**: **classical conditioning** (a neutral cue becomes linked with a response).', '**Skinner**: **operant conditioning**: behavior followed by **reinforcement** increases; by **punishment** decreases. Positive = adding, negative = removing.', 'Therapies: **modeling** (learning by watching), **exposure** (systematic desensitization = graded, with relaxation; flooding = all at once), **aversion therapy** (pairing a behavior with something unpleasant, e.g., disulfiram), **biofeedback**, token economies.'] },
    { h: 'Cognitive theories', b: ['**Beck**: thoughts drive feelings and behavior; depression comes from **automatic negative thoughts** and **cognitive distortions**.', '**Ellis**: rational emotive behavior therapy (REBT), disputing irrational beliefs (A-B-C: activating event, belief, consequence).', '**CBT**: identify distorted thoughts → test the evidence → replace them; plus behavioral experiments and homework. Strong evidence for depression and anxiety.', '**DBT** (dialectical behavior therapy): CBT plus mindfulness; skills in distress tolerance, emotion regulation and interpersonal effectiveness; for self-harm and borderline personality disorder.'] },
    { h: 'Cognitive distortions to recognize', b: ['**All-or-nothing**: “If I’m not perfect, I’m a failure.”', '**Overgeneralization**: “I always mess up.”', '**Catastrophizing**: “If I fail this exam my life is over.”', '**Personalization**: “It rained at the picnic because of me.”', '**Mind reading**: “She thinks I’m stupid.”', '**Discounting the positive**, **emotional reasoning** (“I feel it, so it’s true”), **“should” statements**.'] },
    { h: 'Biological theory and therapies', b: ['Mental illness involves **neurotransmitters** (serotonin, norepinephrine, dopamine, GABA, glutamate), brain structure, genetics and hormones.', 'Therapies: **psychopharmacology** and **brain stimulation**: **ECT** (induced seizure under anesthesia), **rTMS** (magnetic pulses, awake, no seizure), **vagus nerve stimulation**, **deep brain stimulation**; light therapy.'] }
  ],
  recall: [
    ['Which part of personality is the conscience?', 'The **superego**.'],
    ['Peplau’s main contribution?', 'The **nurse–patient relationship** as therapy, with its phases, and the levels of anxiety.'],
    ['Systematic desensitization vs flooding?', 'Desensitization = **gradual** exposure with relaxation; flooding = **intense, all-at-once** exposure.'],
    ['Which therapy for self-harm and emotion dysregulation?', '**DBT**.'],
    ['“I failed one quiz, so I’m going to fail nursing school.” Distortion?', '**Overgeneralization** / catastrophizing.']
  ]
},
{
  id: 'neuro', week: 11, ch: 'Chapter 3', title: 'The brain and psych meds',
  short: 'Neurotransmitters, brain areas, and why each drug class causes the side effects it does.',
  lead: 'Every thought, mood and movement is neurons signaling through **neurotransmitters** at **receptors**. Psychiatric illness involves too much or too little signaling (excess **dopamine** in psychosis; too little **serotonin and norepinephrine** in depression and anxiety; too little **GABA** in anxiety; too little **acetylcholine** and too much **glutamate** in Alzheimer disease). Psych meds **raise or block** those signals. Their side effects make sense once you know **which other receptors** they block.',
  terms: [
    { t: 'Agonist vs antagonist', see: 'A benzodiazepine boosts GABA; an antipsychotic blocks dopamine D2 receptors.', why: 'An **agonist** binds and **stimulates** a receptor (a **partial agonist** stimulates it less). An **antagonist** binds and **blocks** it so the natural neurotransmitter can’t act.', means: 'Tells you the direction of the effect, and so the side effects: blocking a receptor removes everything that receptor normally does.' },
    { t: 'Reuptake', see: 'SSRIs, SNRIs, TCAs and bupropion are all “reuptake inhibitors.”', why: 'After signaling, monoamines (serotonin, norepinephrine, dopamine) are pulled back into the sending neuron, where **monoamine oxidase (MAO)** breaks them down. Blocking reuptake, or blocking MAO, leaves **more** neurotransmitter in the synapse.', means: 'Why stacking two serotonin-raising drugs (e.g., an SSRI + an MAOI) causes **serotonin syndrome**.' },
    { t: 'Pharmacokinetics vs pharmacodynamics', see: 'Lithium rises when the kidneys slow down; an SSRI causes nausea through 5-HT3 receptors.', why: '**Pharmacokinetics** = what the **body does to the drug**: **A**bsorption, **D**istribution, **M**etabolism, **E**xcretion (ADME). **Pharmacodynamics** = what the **drug does to the body**: its action and responses.', means: 'Kidney or liver disease, age and drug interactions change kinetics, so the level and the toxicity risk change.' },
    { t: 'Narrow therapeutic index', see: 'Lithium: a therapeutic level and a toxic level are close together.', why: 'The therapeutic index is the ratio of the lethal (or toxic) dose to the effective dose. Narrow = little room for error.', means: 'Needs **blood level monitoring**; anything that changes excretion (dehydration, NSAIDs, thiazides, ACE inhibitors) can push it into toxicity.' },
    { t: 'Pharmacogenetics (CYP450)', see: 'Two patients on the same dose: one has heavy side effects, the other no benefit.', why: 'Genetic variations in liver **cytochrome P450** enzymes make people **poor metabolizers** (high levels, more side effects) or **rapid metabolizers** (low levels, less effect).', means: 'Consider it when a drug doesn’t work as expected. **HLA-B*1502** (more common in people of Asian ancestry) → test before **carbamazepine** (SJS/TEN risk).' }
  ],
  cards: [
    { h: 'Neurotransmitters and what they do', b: ['**Dopamine**: movement, reward, thinking. **Too much** → psychosis, mania. **Too little** → Parkinson disease, depression.', '**Norepinephrine**: attention, arousal, fight-or-flight. **Low** → depression. **High** → mania, anxiety.', '**Serotonin (5-HT)**: mood, sleep, appetite, pain, sex, aggression. **Low** → depression, anxiety.', '**GABA**: the main **inhibitory** (calming) transmitter. **Low** → anxiety, mania, seizures.', '**Glutamate**: the main **excitatory** transmitter; learning and memory. Too much is **neurotoxic** (Alzheimer disease).', '**Acetylcholine**: memory and learning; the parasympathetic “rest and digest” system. **Low** → Alzheimer disease.', '**Histamine**: alertness. Blocking it → **sedation and weight gain**.', '**Orexin**: wakefulness (low in narcolepsy).'] },
    { h: 'Brain areas', b: ['**Brainstem**: heart rate, breathing, sleep; the source of the mood pathways.', '**Limbic system** (amygdala = fear and emotion; hippocampus = memory): emotion, drives, memory. The amygdala is overactive in **anxiety**; the hippocampus shrinks in **Alzheimer disease** and trauma.', '**Hypothalamus**: hunger, thirst, sex, sleep–wake cycle, hormones (via the pituitary).', '**Cerebellum**: **coordination and balance** of voluntary movement (why sedatives cause **ataxia**).', '**Cerebrum/cortex**: thinking, language, voluntary movement. **Frontal** = reasoning, planning (less active in schizophrenia and depression); **parietal** = touch; **temporal** = hearing; **occipital** = vision.', '**Basal ganglia**: movement. Movement and emotion use the same transmitters, so mood drugs can cause **movement side effects**.'] },
    { h: 'The HPA axis and stress', b: ['**Hypothalamus** → CRH → **pituitary** → ACTH → **adrenal cortex** → **cortisol**.', '**High cortisol** in major depression (and suppressed immunity). **Low cortisol** in PTSD.', 'Thyroid: **hyperthyroidism** looks like anxiety; **hypothyroidism** looks like depression.'] },
    { h: 'Receptor blockade → side effect (the key)', tag: 'High yield', b: ['**H1 (histamine) blocked** → **sedation, weight gain**.', '**M1 (muscarinic, acetylcholine) blocked** → **anticholinergic**: dry mouth, blurred vision, constipation, urinary retention, tachycardia; **confusion** in older adults.', '**α1 (norepinephrine on blood vessels) blocked** → vasodilation → **orthostatic hypotension**, dizziness (and priapism with trazodone).', '**D2 blocked** in the **nigrostriatal** pathway → **EPS** (movement); in the **tuberoinfundibular** pathway → **high prolactin** (galactorrhea, amenorrhea, gynecomastia, sexual dysfunction); in the **mesolimbic** pathway → the wanted **antipsychotic** effect.', '**5-HT stimulated** (SSRIs) → nausea and GI upset (5-HT3), **sexual dysfunction** (5-HT2).'], why: 'TCAs and first-generation antipsychotics block H1, M1 and α1 together, which is why both cause sleepiness, dry mouth and dizziness on standing.' },
    { h: 'Antianxiety and sleep drugs', b: ['**Benzodiazepines** (lorazepam, alprazolam, clonazepam, diazepam): boost **GABA-A**; fast; anxiety, sleep, seizures, alcohol withdrawal. Sedation, **ataxia**, anterograde amnesia; deadly with **alcohol or opioids**; dependence → **taper**; falls and delirium in older adults.', '**Buspirone**: 5-HT1A partial agonist; GAD; **not controlled**, **daily** (not PRN), **weeks** to work.', '**Z-drugs** (zolpidem, zaleplon, eszopiclone): sleep only; **complex sleep behaviors** (sleep-driving, sleep-eating); lower zolpidem dose for **women**.', '**Ramelteon**: melatonin agonist, not controlled. **Low-dose doxepin**: H1 block for staying asleep. **Suvorexant**: orexin blocker (not in narcolepsy).', '**Antidepressants** are first line for **long-term** anxiety, but take **4–8 weeks**.'] },
    { h: 'Antidepressants by class', b: ['**SSRIs**: first line. Fluoxetine most activating, very long half-life; sertraline most GI upset; paroxetine most anticholinergic; fluvoxamine most sedating; **citalopram prolongs the QT**.', '**SNRIs** (venlafaxine, duloxetine…): sweating, **↑ BP and HR**; help **nerve pain**; venlafaxine has the worst **discontinuation syndrome**.', '**Bupropion** (NDRI): no sexual dysfunction; **seizure risk**: avoid in seizure disorders, **eating disorders**, or **abrupt alcohol or benzodiazepine withdrawal**.', '**Mirtazapine**: sedating, **appetite and weight gain** (good for insomnia with weight loss).', '**Trazodone**: sedating (used for sleep), α1 block → orthostasis, **priapism**.', '**TCAs**: H1/M1/α1 side effects; **sodium-channel block on the heart → fatal in overdose**.', '**MAOIs**: last line; **tyramine** and drug interactions (SSRIs, buspirone → serotonin syndrome; stimulants, pseudoephedrine → hypertensive crisis; dextromethorphan).', '**Esketamine** (NMDA antagonist nasal spray; BP and dissociation, watch 2 h) and **brexanolone** (postpartum depression; 60-h infusion; continuous pulse oximetry).', 'Why weeks to work: receptors **down-regulate** slowly, and new synaptic connections grow.'] },
    { h: 'Mood stabilizers', b: ['**Lithium**: the gold standard; may reduce suicide. Narrow index. **Raised by** thiazides, ACE inhibitors, NSAIDs, dehydration; **lowered by caffeine**. Side effects: tremor, polyuria and thirst, **hypothyroidism**, weight gain, acne.', '**Valproate**: mania, mixed and rapid cycling. **LFTs, CBC (platelets)**, levels; pancreatitis, **hyperammonemia**; **teratogenic**.', '**Carbamazepine**: second line; **LFTs, CBC, sodium (hyponatremia), ECG**; **HLA-B*1502** test; induces CYP so it **lowers** other drugs (including **birth control pills**).', '**Lamotrigine**: maintenance and bipolar **depression** (not acute mania); slow titration; **any rash → report** (SJS). **Valproate doubles lamotrigine** levels, so the lamotrigine dose is halved.'] },
    { h: 'Antipsychotics (more on Exam 5)', b: ['**First generation** (haloperidol, chlorpromazine): D2 blockers; treat **positive** symptoms; high **EPS**: acute dystonia, akathisia, parkinsonism (days to months) and **tardive dyskinesia** (months to years, may be permanent; screen with the **AIMS**).', '**Neuroleptic malignant syndrome**: **rigidity, high fever, altered mental status, unstable BP and HR**: an emergency.', '**Second generation** (block D2 + 5-HT2A): less EPS; treat positive and negative symptoms; **metabolic syndrome** (weight, glucose, lipids). Highest risk with **clozapine and olanzapine**.', '**Clozapine**: for treatment-resistant schizophrenia; lowers suicide; **neutropenia → ANC weekly for 6 months**, then every 2 weeks, then monthly; lowers the seizure threshold; smoking lowers its level.', 'Ziprasidone and lurasidone must be taken **with food**; ziprasidone and iloperidone prolong the **QT**; aripiprazole is a partial agonist (low prolactin, rare compulsive behaviors).'] },
    { h: 'ADHD and Alzheimer drugs', b: ['**Stimulants** (methylphenidate, amphetamines): raise dopamine and norepinephrine. Insomnia (give **early in the day**), ↑ BP and HR, appetite loss, growth suppression; controlled.', '**Nonstimulants**: atomoxetine (watch BP, liver); guanfacine and clonidine (hypotension, bradycardia; **don’t stop abruptly**: rebound hypertension).', '**Cholinesterase inhibitors** (donepezil, rivastigmine, galantamine): raise acetylcholine; nausea, diarrhea, **bradycardia** and syncope.', '**Memantine**: NMDA antagonist that blocks excess glutamate; moderate to severe disease.'] },
    { h: 'Herbals and brain imaging', b: ['Herbals aren’t FDA regulated, may not contain what the label says, and interact (e.g., **St. John’s wort** + SSRIs → serotonin syndrome). Ask about them at every medication history.', '**Structural** imaging (CT, MRI) shows anatomy: enlarged ventricles in schizophrenia. **Functional** imaging (PET, SPECT, fMRI) shows activity: **less prefrontal activity** in depression; less frontal glucose use in schizophrenia. **EEG** records electrical activity.', 'No routine test measures brain neurotransmitters; diagnosis is still based on symptoms.'] }
  ],
  recall: [
    ['Benzodiazepines enhance which neurotransmitter?', '**GABA**.'],
    ['Blocking which receptor causes orthostatic hypotension?', '**Alpha-1**.'],
    ['Which dopamine pathway causes EPS when blocked?', '**Nigrostriatal**.'],
    ['Which antidepressant is contraindicated with a seizure disorder?', '**Bupropion**.'],
    ['Which antipsychotic needs ANC monitoring?', '**Clozapine**.'],
    ['Which drug raises lamotrigine levels and SJS risk?', '**Valproate**.'],
    ['Part of the brain that coordinates voluntary movement?', '**Cerebellum**.']
  ]
},
{
  id: 'relationship', week: 11, ch: 'Chapter 8', title: 'The therapeutic relationship',
  short: 'Peplau’s phases, boundaries, transference and countertransference.',
  lead: 'A **therapeutic relationship** exists for the **patient’s** needs, has a **goal** and an **end**, and the nurse uses self-awareness to keep it that way. It differs from a **social relationship**, where both people’s needs are met and advice and personal stories flow both ways.',
  terms: [
    { t: 'Transference', see: 'A patient treats a nurse with anger because the nurse “acts just like my mother.”', why: 'The **patient** unconsciously moves feelings about someone from their past onto the **nurse**.', means: 'Expected. Don’t take it personally; explore it, and keep limits clear.' },
    { t: 'Countertransference', see: 'A nurse feels unusual irritation with a patient who reminds her of her ex, or tries to rescue a patient who reminds her of her son.', why: 'The **nurse’s** own unconscious feelings about someone from their past get moved onto the **patient**.', means: 'A **nurse’s** problem to recognize and manage: reflect, talk to a supervisor, and switch assignments if needed.' },
    { t: 'Boundary crossing', see: 'Sharing a lot of personal information, accepting gifts, spending far more time with one patient, keeping secrets, meeting outside work.', why: 'The relationship slowly shifts toward the **nurse’s** needs, or toward a social relationship.', means: 'Ask: “Whose needs am I meeting?” Bring it to your supervisor; it is always the **nurse’s** responsibility to keep boundaries.' },
    { t: 'Empathy vs sympathy', see: 'Empathy: “It sounds like you feel trapped.” Sympathy: “I feel so sorry for you; I cried when my dad died too.”', why: 'Empathy is **understanding** the patient’s feelings from their point of view while staying separate; sympathy is **sharing** the feelings, which shifts the focus to the nurse.', means: 'Use **empathy**: it keeps the focus on the patient and keeps you objective.' }
  ],
  cards: [
    { h: 'Peplau’s phases', b: ['**Preorientation**: before meeting. Gather data, and do a **self-assessment** of your own feelings and biases.', '**Orientation**: introductions; set the **contract**: purpose, time, place, how often, **confidentiality and its limits**, and **when the relationship ends**. Build **trust**; the patient may **test** you (lateness, limit testing).', '**Working**: explore thoughts, feelings and stressors; problem-solve; practice new coping; **transference** and **resistance** often appear.', '**Termination**: review progress and goals, summarize, plan follow-up; talk about feelings of **loss**. The patient may **regress** or be angry. The end date was planned **from the start**.'], why: 'Termination starts in orientation: telling the patient the end date up front keeps the ending from feeling like abandonment.' },
    { h: 'Factors that help the relationship', b: ['**Consistency** and **reliability** (be on time, keep promises).', '**Genuineness**, **empathy**, **positive regard** (accepting the person even when not accepting the behavior).', '**Active listening**, attention to **nonverbal** cues, cultural humility.', 'Self-awareness: the **Johari window** (open, hidden, blind and unknown parts of the self).'] },
    { h: 'Boundary rules for students and new nurses', b: ['Limited **self-disclosure**: only if it helps the patient, briefly, then return the focus to them.', 'No gifts (or per policy), no social media contact, no personal phone numbers, no dating, no meeting after discharge.', 'Don’t promise secrets: “I can’t keep information that affects your safety from the team.”', 'Don’t promise to keep in touch after termination.'] },
    { h: 'Responding to common patient behaviors', b: ['**Threatens to hurt self**: “I’m concerned about your safety.” Ask directly; tell the team.', '**Asks you to keep a secret**: “I can’t promise that. If it affects your safety, I’ll share it with the team.”', '**Asks personal questions**: answer briefly if appropriate, then refocus: “We’re here to talk about you.”', '**Flirts or asks for a date**: set the limit clearly and kindly: “Our relationship is professional.”', '**Silence**: sit with them; offer self.', '**Cries**: stay, allow it, offer tissues; don’t rush to fix it.'] }
  ],
  recall: [
    ['In which phase is the termination date set?', 'The **orientation** phase (as part of the contract).'],
    ['A nurse feels protective of a patient who looks like her daughter. Term?', '**Countertransference**.'],
    ['Who is responsible for keeping professional boundaries?', 'Always the **nurse**.'],
    ['The working phase focuses on what?', 'Exploring stressors and feelings, problem-solving, and practicing **new coping** behaviors.']
  ]
},
{
  id: 'comm', week: 11, ch: 'Chapter 9', title: 'Therapeutic communication',
  short: 'The techniques that open people up and the blocks that shut them down.',
  lead: 'Therapeutic communication is **patient-centered and goal-directed**. Use **open-ended** questions, reflect **feelings**, and stay with the patient’s concern. Avoid the blocks: false reassurance, advice, “why” questions, judging, changing the subject. The best answer on the exam **focuses on the patient’s feelings** and **keeps them talking**.',
  cards: [
    { h: 'Techniques that help', b: ['**Silence**: gives time to think.', '**Offering self**: “I’ll sit with you for a while.”', '**Giving broad openings / general leads**: “What would you like to talk about?” “Go on.”', '**Making observations**: “You seem tense.” “I notice you’re wringing your hands.”', '**Restating**: “You can’t sleep at night?”', '**Reflecting**: returning feelings or questions: “You feel angry when this happens?” “What do you think you should do?”', '**Focusing**: “Let’s go back to what you said about your job.”', '**Exploring**: “Tell me more about that.”', '**Seeking clarification**: “I’m not sure I follow. Can you give an example?”', '**Presenting reality**: “I don’t hear any voices; I’m the only one here.”', '**Voicing doubt**: “That’s hard to believe.”', '**Verbalizing the implied** and **translating into feelings**: “I’m dead inside” → “Are you saying you feel lifeless?”', '**Placing events in sequence**, **encouraging comparison**, **suggesting collaboration**, **summarizing**, **giving information**, **giving recognition** (“You combed your hair today”).'] },
    { h: 'Blocks to avoid', b: ['**False reassurance**: “Everything will be fine.” (Belittles the concern.)', '**Giving advice**: “If I were you, I’d…” (Takes away problem-solving.)', '**Minimizing feelings**: “Everyone gets down sometimes.”', '**Asking “why”**: “Why did you stop your medicine?” (Sounds like criticism; makes people defensive.)', '**Excessive questioning** (several at once).', '**Approving or disapproving**: “I’m proud of you.” “You shouldn’t have done that.” (Judges; the patient may try to please you.)', '**Value judgments**, **belittling**, **defending** (“The doctor is very good”), **changing the subject**, **literal responses**, **stereotyped comments** (“Hang in there”), **agreeing with delusions**.'], why: 'All of these shift the focus off the patient’s feelings or close the conversation.' },
    { h: 'Nonverbal communication', b: ['Up to most of a message is **nonverbal**: facial expression, eye contact, posture, gestures, tone, touch, distance.', 'When words and nonverbal cues **don’t match**, believe the nonverbal and explore it.', 'Sit at an angle, at eye level, open posture, lean in slightly. Culture shapes eye contact, touch and personal space; ask, don’t assume.'] },
    { h: 'The clinical interview', b: ['A quiet, private, safe place; sit near the door if safety is a concern (for both of you).', 'Introduce yourself, state the purpose and how long, and explain confidentiality.', 'Start with open-ended questions; let the patient lead; take few notes.', 'Use **closed questions** only to get specific facts (“Do you have a plan?”).'] },
    { h: 'How to pick the right answer on the exam', b: ['First: is there a **safety** issue? Address it directly (“Are you thinking about killing yourself?”).', 'Then choose the response that **reflects feelings** or **explores** the patient’s statement.', 'Eliminate responses that reassure, advise, judge, ask “why,” defend or change the subject.', 'With psychosis: don’t argue or agree; **present reality** and respond to the **feeling**.'] }
  ],
  recall: [
    ['Patient: “I’m worried about my surgery.” Nurse: “Don’t worry, you have a great surgeon.” Block?', '**False reassurance** (and defending).'],
    ['“What do you think you should do?” is which technique?', '**Reflecting** (the question back to the patient).'],
    ['“You seem upset today” is which technique?', '**Making observations**.'],
    ['Better than “Why didn’t you take your pills?”', '“Tell me what happened with your medications.” (Open-ended, no blame.)'],
    ['Patient hears voices. Therapeutic response?', 'Present reality and acknowledge the feeling: “I don’t hear them, but they sound frightening for you.”']
  ]
},
{
  id: 'stress', week: 11, ch: 'Chapters 10 and 15', title: 'Stress, coping and defense mechanisms',
  short: 'Fight-or-flight, Selye’s stages, levels of anxiety, coping and defense mechanisms.',
  lead: 'Stress is the body’s response to any demand. **Short-term**, the stress response protects us; **chronic** stress damages the heart, immune system, mood and memory. **Coping** is what we consciously do to manage stress; **defense mechanisms** are mostly **unconscious** ways the mind protects itself from anxiety. Either can be adaptive or harmful.',
  terms: [
    { t: 'Fight-or-flight response', see: 'Racing heart, fast breathing, dilated pupils, sweating, tense muscles, dry mouth.', why: 'The **sympathetic nervous system** and the adrenal medulla release **epinephrine and norepinephrine**, sending blood and glucose to the muscles and brain.', means: 'The same signs show up with anxiety and panic. **Relaxation techniques** activate the parasympathetic system and reverse them.' },
    { t: 'General adaptation syndrome (Selye)', see: 'Alarm at a crisis → coping for weeks → getting sick and worn out.', why: '**Alarm** (fight-or-flight) → **resistance** (the **HPA axis** raises **cortisol** to sustain energy) → **exhaustion** (resources run out; illness follows).', means: 'Chronic stress and high cortisol **suppress immunity** and raise BP and glucose. Ask about stressors in every health history.' },
    { t: 'Eustress vs distress', see: 'Starting a new job you wanted vs losing one.', why: 'Both trigger the stress response; **eustress** is positive and motivating, **distress** is negative and harmful.', means: 'Even positive life changes (marriage, a new baby) count as stressors.' },
    { t: 'Coping', see: 'Making a study plan (problem-focused) or talking to a friend (emotion-focused).', why: '**Problem-focused** coping changes the situation; **emotion-focused** coping changes how you feel about it. Both are useful at different times.', means: 'Ask, “What has helped you get through hard times before?” and build on those strengths.' }
  ],
  cards: [
    { h: 'Defense mechanisms (with examples)', b: ['**Denial**: refusing to accept reality. “The biopsy is wrong; I don’t have cancer.”', '**Projection**: putting your own unacceptable feelings on someone else. A man attracted to a coworker accuses his wife of cheating.', '**Displacement**: moving feelings to a safer target. Yelled at by the boss, he yells at his kids.', '**Rationalization**: a logical-sounding excuse. “I failed because the test was unfair.”', '**Reaction formation**: acting the opposite of what you feel. Being overly sweet to someone you dislike.', '**Regression**: returning to an earlier stage. An adult patient sulks or throws a tantrum; a 4-year-old with a new sibling wets the bed.', '**Repression**: **unconscious** forgetting of something painful.', '**Suppression**: **conscious** decision to put it aside for now. “I’ll worry about the rent after my exam.” (The only conscious one, and healthy.)', '**Sublimation**: channeling an unacceptable impulse into something constructive. Anger into running or kickboxing. (Always healthy.)', '**Compensation**: making up for a weakness by excelling elsewhere.', '**Intellectualization**: using facts and logic to avoid feelings. Reciting survival statistics instead of grieving.', '**Undoing**: an act to cancel out a previous one. Buying flowers after an argument.', '**Identification**: taking on traits of an admired person.', '**Conversion**: anxiety becomes a physical symptom with no organic cause (sudden blindness).', '**Splitting**: seeing people as all good or all bad (common in borderline personality disorder).', '**Dissociation**: disconnecting from memory, identity or surroundings to escape distress.', '**Altruism**: meeting your own needs by helping others.'], why: 'On the exam, match the **quote** to the mechanism. Key pairs: **suppression is conscious, repression is not**; **projection** blames others, **displacement** redirects.' },
    { h: 'Levels of anxiety', b: ['**Mild**: alert, perceptual field **heightened**, can learn; restless.', '**Moderate**: field **narrowed**, selective inattention; can problem-solve **with help**.', '**Severe**: field **greatly reduced**; can’t problem-solve; physical symptoms; needs direction.', '**Panic**: **disorganized**, can’t attend to the environment, possible loss of reality; needs safety.'] },
    { h: 'Stress management to teach', b: ['**Deep (diaphragmatic) breathing**; **progressive muscle relaxation**; **guided imagery**; **meditation and mindfulness**; **biofeedback**.', '**Exercise**, **7–9 hours of sleep**, good nutrition, limiting caffeine and alcohol.', '**Cognitive reframing**, journaling, humor, time management.', '**Social support**: the strongest buffer against stress.'] },
    { h: 'Adverse childhood experiences (ACEs)', b: ['Abuse, neglect, or a household with violence, substance use, mental illness, divorce or incarceration, before age 18.', '**4 or more ACEs** sharply raise the adult risk of heart and lung disease, diabetes, substance use, depression and **suicide**.', 'Toxic stress changes the developing brain and stress system; **safe, stable relationships** protect.'] }
  ],
  recall: [
    ['The only defense mechanism that is conscious?', '**Suppression**.'],
    ['“I didn’t get the job because the interviewer was biased.”', '**Rationalization**.'],
    ['After a fight with her husband, she kicks the dog.', '**Displacement**.'],
    ['Selye’s three stages?', '**Alarm → resistance → exhaustion**.'],
    ['Which hormone sustains the resistance stage?', '**Cortisol** (HPA axis).']
  ]
},
{
  id: 'trauma', week: 11, ch: 'Chapters 10 and 16', title: 'Trauma and trauma-informed care',
  short: 'What trauma does, how to care without retraumatizing, and crisis care.',
  lead: 'Trauma is an event, or a series of events, that is **physically or emotionally harmful or life-threatening** and has lasting effects on functioning and well-being. **Trauma-informed care** assumes anyone could have a trauma history and changes the question from **“What’s wrong with you?” to “What happened to you?”** The disorders themselves (PTSD, acute stress, adjustment, dissociative) are under Think it through.',
  cards: [
    { h: 'Principles of trauma-informed care', b: ['**Safety**: physical and emotional.', '**Trustworthiness and transparency**: explain what you’ll do before doing it.', '**Peer support**.', '**Collaboration and mutuality**: decisions made with the patient.', '**Empowerment, voice and choice**: offer choices whenever possible.', 'Attention to **cultural, historical and gender** issues.'], why: 'Restraint, being undressed, loud voices or being touched without warning can **retraumatize** people. Choices and explanations return a sense of control.' },
    { h: 'What trauma does', b: ['Changes the brain’s alarm system (amygdala), memory (hippocampus) and calming circuits (prefrontal cortex).', 'Shows up in the **body**: chronic pain, GI symptoms, headaches, sleep problems.', 'Leads to hypervigilance, avoidance, numbing, dissociation, substance use and self-harm as ways of coping.', 'Treatment is **phased**: safety and stabilization first, then processing, then reconnection.'] },
    { h: 'Crisis and crisis intervention', b: ['A **crisis** is a temporary state when usual coping fails, typically resolving within **4–6 weeks**, for better or worse.', 'Types: **maturational** (developmental stages), **situational** (job loss, illness), **adventitious** (disasters, violence).', 'Steps: assess **safety** first, then the problem, supports and coping; help the person **act** (directive when needed); follow up.', 'Goal: return to at least the **pre-crisis level** of functioning.'] },
    { h: 'Grounding for dissociation or flashbacks', b: ['Use the person’s name; orient them to **time, place and safety**.', '**5-4-3-2-1**: name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.', 'Feet firmly on the floor; hold something cold; stomp feet; describe the room aloud.'] }
  ],
  recall: [
    ['The trauma-informed question?', '“**What happened to you?**” instead of “What’s wrong with you?”'],
    ['How long does a crisis usually last?', 'About **4–6 weeks**.'],
    ['First priority in crisis intervention?', '**Safety**: assess risk to self and others.'],
    ['A grounding technique?', '**5-4-3-2-1**, feet on the floor, holding ice, orienting to time and place.']
  ]
},
{
  "id": "groups",
  "week": 11,
  "ch": "Chapter 34",
  "title": "Therapeutic groups",
  "short": "How groups help, how leaders shape them, and how nurses protect participation and safety.",
  "lead": "A therapeutic group uses shared experience and interaction to support change. The nurse plans who can benefit, shapes the discussion and evaluates what members gained. Effective leadership keeps the purpose, relationships and safety in view together.",
  "terms": [
    {
      "t": "Group",
      "see": "Several people work toward an agreed purpose and affect each other’s experience.",
      "why": "Membership creates interdependence; one person’s response can change the next person’s behavior.",
      "means": "Assess the relationships as well as each person’s needs."
    },
    {
      "t": "Therapeutic group",
      "see": "Members practise a useful skill, gain support or explore a difficulty together.",
      "why": "A shared activity becomes therapeutic when it supports psychological development or growth.",
      "means": "Choose a purpose and measure a relevant benefit; attendance alone is insufficient."
    },
    {
      "t": "Group psychotherapy",
      "see": "A trained clinician helps members examine recurring relationship patterns and psychiatric symptoms.",
      "why": "The relationships within the session become part of a specialized treatment.",
      "means": "Distinguish psychotherapy from RN teaching or activity facilitation; verify preparation and scope."
    },
    {
      "t": "Group work",
      "see": "The nurse plans a session, attends to participation and checks what members gained.",
      "why": "Useful change depends on both preparation and what happens between members.",
      "means": "Plan, facilitate and evaluate instead of merely gathering people in a room."
    },
    {
      "t": "Therapeutic factors",
      "see": "A member gains hope, feels understood or tries a new way of relating.",
      "why": "Yalom described several routes through which the group experience can support change.",
      "means": "Match the helpful factor to the group’s purpose; one mechanism does not explain every benefit."
    },
    {
      "t": "Group content",
      "see": "Participants discuss how to ask for help after discharge.",
      "why": "Content is the subject matter and spoken material; a transcript captures this layer.",
      "means": "Record the topic without mistaking it for an account of the interaction."
    },
    {
      "t": "Group process",
      "see": "People interrupt one speaker but listen closely to another discussing the same topic.",
      "why": "Process concerns how members relate, including tone, gestures, silence and patterns of participation.",
      "means": "Notice who responds to whom and intervene when the interaction blocks the work."
    },
    {
      "t": "Group norms",
      "see": "Members expect a turn to speak and arrive before the session begins.",
      "why": "Shared expectations can support safety or quietly pressure members to agree.",
      "means": "Clarify helpful expectations and address rules that silence disagreement."
    },
    {
      "t": "Group phases",
      "see": "A new group needs introductions; a mature group can work through disagreement.",
      "why": "A group’s needs change as it forms, works and ends. Conflict can move it back to earlier tasks.",
      "means": "Adapt the amount of structure and the leadership task to the phase."
    },
    {
      "t": "Task roles",
      "see": "A participant asks for evidence or helps the group decide its next step.",
      "why": "These behaviors move the group toward its stated work.",
      "means": "Reinforce useful clarification, information and goal-directed action."
    },
    {
      "t": "Maintenance roles",
      "see": "A member notices an overlooked speaker and invites their contribution.",
      "why": "These behaviors sustain inclusion and the relationships needed for the work.",
      "means": "Support balanced participation and repair tension without abandoning the purpose."
    },
    {
      "t": "Individual roles",
      "see": "One person repeatedly seeks applause while the agreed topic is left behind.",
      "why": "Personal needs can displace the shared task. This describes behavior, not a permanent identity.",
      "means": "Describe the effect, set respectful limits and explore the underlying need."
    },
    {
      "t": "Feedback",
      "see": "A member explains that an interruption made it difficult to finish a thought.",
      "why": "Others can describe an interpersonal effect that the speaker did not notice.",
      "means": "Make feedback specific and owned: describe the behavior and its effect without speaking for everyone."
    },
    {
      "t": "Group themes and conflict",
      "see": "Different stories keep returning to trust; two members disagree about asking for help.",
      "why": "A theme is a recurring meaning. Conflict is an expressed difference that may expose useful work.",
      "means": "Name a possible theme tentatively and support respectful resolution rather than suppressing every disagreement."
    },
    {
      "t": "Open and closed membership",
      "see": "An admission group welcomes new people; a fixed course keeps its original membership.",
      "why": "Open groups admit replacements. Closed groups do not add members when someone leaves.",
      "means": "Revisit orientation with newcomers and plan continuity for changing membership."
    },
    {
      "t": "Homogeneous, heterogeneous and subgroup",
      "see": "Members may share a central characteristic, have varied backgrounds, or form a small alliance.",
      "why": "Similarity and diversity affect fit. A subgroup is a smaller cluster whose loyalty may compete with the whole group.",
      "means": "Assess the actual mix and include quieter or less-connected members; these terms do not rank people’s value."
    }
  ],
  "cards": [
    {
      "h": "Why use a group, and when does it fit?",
      "b": [
        "Therapeutic groups expanded when clinicians needed to help many people affected by war. A group can now support learning, coping and relationships in hospitals and community care.",
        "One facilitator can reach several people. Peers contribute experiences the facilitator does not have, offer feedback and create chances to rehearse communication with support.",
        "Trade-offs include divided speaking time, privacy risks, disruptive behavior and pressure to conform. A larger group does not automatically give each person enough attention.",
        "Select for this group’s purpose, readiness and current ability to participate. Limited money, few friends or quiet listening alone are not reasons to exclude someone.",
        "Yalom’s existential approach includes responsibility and freedom, isolation, meaning and mortality. A useful group helps people face these concerns while remaining connected."
      ]
    },
    {
      "h": "Yalom: belonging, hope and contribution",
      "b": [
        "**Universality:** discovering a shared struggle can reduce the feeling of being uniquely defective. Recognizing similarity differs from being promised an identical outcome.",
        "**Instillation of hope:** seeing another member make progress can make change seem possible. Encouragement is grounded in possibility, not guaranteed recovery.",
        "**Altruism:** contributing something useful can strengthen the helper’s sense of worth. Receiving a lecture is a different mechanism.",
        "**Imparting information:** members gain practical knowledge from the leader or one another. Check the accuracy of peer advice before it becomes a treatment instruction.",
        "**Group cohesiveness:** a sense of acceptance links members to each other, the leader and the whole group. Shared trust supports disclosure; forced agreement is not cohesion."
      ]
    },
    {
      "h": "Yalom: trying new relationships and making meaning",
      "b": [
        "**Imitative behavior:** a member tries a constructive behavior after watching it. **Development of socializing techniques:** feedback and practice improve everyday interaction.",
        "**Interpersonal learning:** members notice their effect on others, test another response and examine the result. This involves more than memorizing communication rules.",
        "**Corrective recapitulation of the primary family group:** familiar family interaction patterns appear in the session and can be worked through in a safer relationship setting.",
        "**Catharsis:** expressing emotion can help when the experience is understood and integrated. Emotional intensity by itself does not prove useful treatment; uncontrolled expression can overwhelm the work.",
        "**Existential factors:** members consider unavoidable limits, choice, loss and personal meaning. The aim is a meaningful response to life, not a promise to remove every source of suffering."
      ]
    },
    {
      "h": "Read both the topic and the interaction",
      "b": [
        "**Content** answers “What was discussed?” **Process** asks “How did people respond to one another?” Track tone, posture, timing, interruptions and silence as well as spoken facts.",
        "A repeated concern such as belonging may be a **theme** across several different stories. Offer the connection tentatively and let members respond.",
        "Make **norms** visible. Expectations about punctuality, turn-taking and privacy can support trust; an expectation of universal agreement can suppress useful differences.",
        "Help members speak to each other rather than routing every reply through the leader. Explore how an interaction affects participation.",
        "Invite specific **feedback** and help the group resolve **conflict**. Cohesion is associated with better outcomes, but warmth alone is not an outcome measure."
      ]
    },
    {
      "h": "Design the group before inviting members",
      "b": [
        "Begin with a clear name, purpose and realistic outcomes. Decide what evidence will show the group helped, not just whether the session occurred.",
        "Choose a population whose needs fit the purpose. Consider functioning, readiness, interpersonal style and the support available to the leader.",
        "Plan the meeting frequency, session times and treatment duration. Specify what the leader and members will each do, with consistent plans when staff rotate.",
        "**Open** membership allows new arrivals; **closed** membership stays fixed despite departures. A group may also be time-limited or ongoing; duration and membership are separate decisions.",
        "**Homogeneous** members share an important characteristic; **heterogeneous** members differ. Notice **subgroups**, including pairs whose separate alliance may leave others outside.",
        "Match the room to the group. Attend to sound, privacy, light and temperature. A circle without a privileged seat supports visibility and equality; crowding or excessive distance can inhibit participation.",
        "Avoid assigning a highly disruptive person to an inexperienced facilitator without support, or pushing a withdrawn person into an intensely probing setting without preparation."
      ]
    },
    {
      "h": "Hospital groups and community groups need different structure",
      "b": [
        "Outpatient membership is often more stable, allowing preparation and sustained relationships. Functioning may be more similar, but willingness still varies, including when attendance is court-ordered.",
        "Inpatients may have different levels of functioning and may join with little preparation. Admission and discharge change the group, and unit interruptions are common.",
        "Hospital treatment lasts only as long as the admission. Use a clear agenda and active time management; limited continuity can constrain cohesion.",
        "An outpatient group may meet for a fixed course or continue longer, with more room for member direction. Reassess actual needs rather than applying the setting label rigidly."
      ]
    },
    {
      "h": "Orientation: build safety and a shared purpose",
      "b": [
        "Start the first meeting with the leader’s introduction and invite members to introduce themselves. Explain what this group is for and how the meeting will work.",
        "Expect some caution, anxiety, politeness or silence while trust is developing. Offer structure, identify common ground and encourage member-to-member responses.",
        "Discuss respect, confidentiality and its limits before sensitive disclosure. Turn off distracting or recording devices under the group agreement; social media posts and photos can expose other members.",
        "Explaining the purpose during a first session is **orientation**. Deciding that purpose while designing the service is **planning**."
      ]
    },
    {
      "h": "Working: turn disagreement into useful work",
      "b": [
        "Help members solve problems tied to the purpose. Support communication and conduct while allowing members to do more of the work.",
        "Tuckman’s **forming** aligns with early group formation. Within the working period, **storming** includes challenges and clashes; **norming** develops cooperation and agreed roles; **performing** focuses those roles on the task.",
        "A challenge to the leader is not automatically treatment failure. Maintain safety, examine the disagreement and model constructive conflict resolution.",
        "Cohesion supports doing the work, and work plus feedback can develop insight. Development is not a one-way ladder. A new conflict or membership change can require renewed structure and trust-building before the group can work effectively again."
      ]
    },
    {
      "h": "Termination and follow-up: make the ending useful",
      "b": [
        "Prepare for the end rather than simply cancelling the next meeting. Ask members to identify accomplishments, new understanding and goals to carry forward.",
        "Invite feedback about what helped and what did not. Loss, disappointment or anger about ending can be discussed directly and respectfully.",
        "Check progress during the group’s life and again at the end. Use member feedback and objective outcome measures; the chapter’s **Group Questionnaire** example examines relationships, quality and structure.",
        "Plan follow-up or referrals around continuing needs. Completion of a group does not mean all symptoms or risks have disappeared."
      ]
    },
    {
      "h": "Task roles: keep the work moving",
      "b": [
        "**Orienter:** points back to the goal when discussion drifts. **Energizer:** helps the group move from discussion into a decision or action.",
        "**Elaborator:** supplies an illustration or extends an idea so the group can use it. **Information seeker:** asks for clarification or dependable facts.",
        "**Information giver:** contributes relevant knowledge or experience. **Opinion giver:** offers a viewpoint that may influence the group’s priorities or values.",
        "Recognize the function of the contribution. Talking often is not automatically a task role if the group’s purpose is being displaced."
      ]
    },
    {
      "h": "Maintenance roles: keep participation possible",
      "b": [
        "**Gatekeeper:** notices unequal airtime and opens a route for others to speak. **Encourager:** welcomes contributions and recognizes effort.",
        "**Harmonizer:** helps members understand and settle a difference. **Compromiser:** adjusts their own position to preserve a workable relationship.",
        "**Standard setter:** brings shared expectations into words. **Follower:** supports the group’s direction without needing to lead it.",
        "Maintenance supports the relationships that let the task continue. It is not the same as preventing all conflict or demanding agreement."
      ]
    },
    {
      "h": "Individual roles: describe behavior without labeling the person",
      "b": [
        "**Aggressor:** attacks a member or an idea. **Blocker:** repeatedly obstructs progress rather than examining the shared problem.",
        "**Recognition seeker:** draws attention toward personal achievements. **Help seeker:** repeatedly seeks sympathy in a way that displaces the group’s work.",
        "**Self-confessor:** brings disclosure beyond the group’s purpose or boundaries. Disclosure is not automatically therapeutic just because it is personal.",
        "Roles can shift. Explore the need, describe the effect and reinforce useful alternatives instead of assigning a fixed identity to a member."
      ]
    },
    {
      "h": "The framework changes what the leader listens for",
      "b": [
        "**Humanism (humanistic approaches)** emphasizes the person’s experience and growth. Patient-centered, existential and experiential work use attentive listening and guided Socratic questions rather than imposing an answer.",
        "**Cognitive-behavioral work** links thoughts and actions to concrete goals. Leaders plan practice, model skills, reinforce change and monitor results.",
        "**Psychodynamic approaches**, including the chapter’s psychoanalytic and Gestalt examples, explore underlying conflict and insight through interpretation, careful challenge or enactment.",
        "**Educational work** builds knowledge and coping through organized teaching, demonstrations, discussion and checks of understanding.",
        "**Systems approaches** examine the person’s relationships and social context. The chapter includes Adlerian, choice/reality, feminist, family and interpersonal traditions, with attention to interaction, equality and environmental change. Leaders examine lifestyle patterns, model useful interaction and plan advocacy or activism when needed."
      ]
    },
    {
      "h": "Choose the group purpose and the leader’s competence",
      "b": [
        "RN-led **educational** groups build a specific skill or understanding; handouts, slides or video can support discussion. **Medication education** may be led with a pharmacist and requires checking peer advice.",
        "**Dual-diagnosis** groups address a substance use disorder together with a mental disorder. Two psychiatric diagnoses without substance use do not meet that meaning; the leader needs competence in both areas.",
        "**Stress-management** groups practise coping such as paced breathing, exercise, music or spiritual approaches that fit the person. **Mindfulness** develops present-moment awareness of thoughts, feelings and bodily responses.",
        "**Community meetings** address unit information, shared concerns, patient advocacy and governance. The nurse uses current unit assessment and models appropriate interaction.",
        "RNs may also facilitate **activity, task and support** groups within training and policy. These categories can overlap: an activity may include education or mutual support.",
        "**Group psychotherapy** aims at symptoms and deeper patterns and requires specialized preparation and appropriate authority. PMH-APRNs and other qualified mental health professionals may provide it; ordinary RN group facilitation is not equivalent preparation."
      ]
    },
    {
      "h": "Support and mutual help extend care",
      "b": [
        "Match support to the person’s experience: bereavement, loss after suicide, living with cancer, veteran concerns, or patient/family needs. **NAMI** offers support, education and advocacy. Virtual support can improve access but does not guarantee anonymity.",
        "Peer-led **self-help or mutual-help** groups share lived experience rather than replacing individualized professional treatment. **Alcoholics Anonymous (AA)** is the chapter’s prototype for twelve-step approaches.",
        "Other named resources include **Narcotics Anonymous (NA), Gamblers Anonymous (GA), Overeaters Anonymous (OA), Adult Children of Alcoholics (ACOA), and Al-Anon** for people affected by another person’s alcohol use.",
        "**Recovery International** offers a mental-health mutual-help approach. The **National Mental Health Consumers’ Self-Help Clearinghouse** helps people locate resources; verify a program’s current access and fit instead of assuming one group suits everyone."
      ]
    },
    {
      "h": "Leadership style follows the group’s needs",
      "b": [
        "**Autocratic:** the leader sets the direction and retains control. This may help a short, tightly structured unit agenda, but limits member-led exchange.",
        "**Democratic:** the leader invites shared problem solving and substantial interaction while maintaining the therapeutic frame.",
        "**Laissez-faire:** members have substantial freedom and little direction. A safe creative activity may tolerate this; low structure is a poor answer when containment or skill teaching is needed.",
        "A preferred personal style is not a reason to ignore the task, phase or acuity. Flexible leadership still includes responsibility for safety."
      ]
    },
    {
      "h": "Communication that makes a group workable",
      "b": [
        "**Active listening** shows sustained attention; **questions** invite a useful detail; **clarification** checks the meaning of an unclear statement.",
        "**Giving information** supplies accurate facts. In medication teaching, the chapter uses antidepressant benefit taking **four weeks or longer** as an example; timing varies and the prescribed plan still guides care.",
        "**Confrontation** respectfully notices a mismatch between words and observed behavior. It is a therapeutic challenge, not accusation or ridicule.",
        "**Empathy** acknowledges the experience; **reflection** returns a feeling or observation for exploration; **support** recognizes a specific effort.",
        "**Summarizing** links the work already done to what comes next. Keep members’ participation central instead of turning every intervention into a long lecture."
      ]
    },
    {
      "h": "Supervision, coleadership and inclusion",
      "b": [
        "Use **clinical supervision** to examine facilitation, group dynamics, boundaries and the leader’s own reactions. **Transference and countertransference** can occur with groups as well as individual care.",
        "An experienced colleague or qualified APRN supervisor can help a new leader develop skill. Supervisors protect professional confidentiality; leaders who provide psychotherapy also seek supervision.",
        "**Coleaders** can model different useful responses, support a less experienced facilitator and debrief immediately. They may elicit different member reactions and offer support with strong countertransference.",
        "A poor relationship between coleaders can undermine the group. Agree on roles and discuss differences openly rather than forming competing alliances.",
        "Attend to racial, ethnic, economic, sexual-orientation and other differences. Explore assumptions respectfully and remove barriers that marginalize members.",
        "Support LGBTQ inclusion. Offering pronouns can open participation, without forcing personal disclosure. The chapter’s **LGBTQ Responsive Model for Supervision of Group Work** helps leaders develop relevant awareness, knowledge and skills."
      ]
    },
    {
      "h": "Consent and privacy: a promise has limits",
      "b": [
        "Before participation, explain the purpose, likely benefits, risks, roles and confidentiality limits. Clarify attendance or leaving expectations and rules for contact outside the group.",
        "The nurse has professional confidentiality duties. Peers are not bound by that professional nursing code, and legal protections vary. **Never guarantee that another member will keep a disclosure private.**",
        "Discuss exceptions required by law and safety policy before sensitive disclosure. An agreement helps set expectations; it cannot eliminate every risk of a breach.",
        "Protect identities in notes, teaching and any recording. Using a recording to review interaction requires appropriate consent and safeguards; it does not justify members casually filming a session.",
        "Use training, credentialing, scope standards and current evidence to select a suitable approach. Removal is generally a last resort after attempts to address non-dangerous difficulties or repeated agreement violations."
      ]
    },
    {
      "h": "Virtual groups: preserve the frame across the screen",
      "b": [
        "Online options expanded during COVID-19 and can address isolation, grief, anxiety or other needs. They can improve access without being interchangeable with every in-person group.",
        "A flat image can hide nonverbal cues. Leaders have less control over seating, interruptions and who else is nearby, and may find sustained engagement harder.",
        "Use appropriate privacy/security measures, a suitable platform and HIPAA protections where applicable. Discuss unseen listeners, recording, device use and a private joining space.",
        "Confirm each member’s location and the clinician’s authority to provide care there. Cross-state practice is not automatically permitted simply because the meeting is online.",
        "Agree on emergency contacts, a local response plan and a connection-failure backup. Present remote support as helpful access, not a guarantee of secrecy or safety.",
        "The chapter also mentions a solution-focused brief online group study protocol for adolescent anxiety. A protocol describes a planned test; it does not by itself demonstrate effectiveness."
      ]
    },
    {
      "h": "When group work must give way to immediate safety",
      "b": [
        "New suicidal thoughts require direct risk assessment and appropriate additional support. Calm or quiet behavior does not establish safety, and group reassurance is not a substitute for assessment.",
        "Active paranoid beliefs, major disorganization or acute mania can make participation harder. Seek experienced support and individualize fit; a manic patient unable to attend to the group needs stabilization and a more suitable setting.",
        "If someone threatens or attacks another member, protect the group, summon help and follow the safety protocol. Temporary removal may be necessary immediately; do not wait to finish the planned exercise.",
        "A raised voice or limited resources alone does not establish dangerousness. Base restrictions on assessed behavior, risk and the needs of this particular group."
      ],
      "tag": "If it worsens"
    },
    {
      "h": "A member takes nearly every turn",
      "b": [
        "Begin with a reminder about shared speaking time and invite other contributions. Help members notice participation patterns rather than humiliating one person.",
        "If the pattern persists, describe what you observed and its effect in your own words. Avoid claiming to know how every other member feels.",
        "A private conversation can explore anxiety or another need behind the talkativeness. Agree on a practical limit; the chapter gives **two or three contributions** as an example, not a universal prescription.",
        "When the group can manage it safely, invite respectful feedback about the pattern so the member can compare intended and actual interpersonal effects."
      ]
    },
    {
      "h": "Anger, disruption and rejected help",
      "b": [
        "Listen without joining the attack. Describe behavior, maintain limits and consider a private check-in about what is driving the anger.",
        "Matter-of-fact empathy can support connection without excusing harmful conduct. Feeling hurt or vulnerable may sit behind angry self-protection; do not assume a motive without exploring it.",
        "Help members use a specific **I-statement** about an effect instead of assigning blame. Feelings can be acknowledged while behavior remains subject to limits.",
        "When someone struggles to name emotion, invite attention to bodily sensations, current reactions and how another member may experience the interaction.",
        "For repeated complaints followed by rejection of every suggestion, explore the interaction and the person’s own goals instead of escalating the advice-giving. Use supervision when the pattern exceeds the leader’s skill.",
        "Peer feedback, or an appropriately consented session review, may reveal self-focused patterns. Immediate threats or violence move the priority to the safety response above."
      ]
    },
    {
      "h": "Silence needs curiosity, time and an invitation",
      "b": [
        "A silent member may be assessing safety, thinking carefully or doubting their ability to contribute. Silence alone does not prove refusal or lack of interest.",
        "Allow time to organize a response and offer to return to the person. A planned round with a manageable prompt can give everyone a predictable opening.",
        "Explore barriers without demanding sensitive disclosure. Participation enables feedback and lets others benefit from the member’s perspective.",
        "Consider the effect on the whole group, including uncertainty about what the quiet member thinks. Pair inclusion with respect for readiness."
      ]
    },
    {
      "h": "Choose and measure outcomes that match the group",
      "b": [
        "In **medication education**, ask for demonstrated knowledge: medication purpose, **three important adverse effects**, the prescribed dose and timing, and significant drug–drug or drug–food interactions.",
        "Teach-back can reveal a gap; attendance, accepting a medication’s price or saying the group was pleasant does not establish medication knowledge. The chapter’s review example includes identifying **two interactions**.",
        "In **therapy**, assess the intended change in insight, behavior and symptoms. For alcohol-related treatment, connect use to consequences and evaluate abstinence or reduction in risky use as appropriate to the plan.",
        "Use a consistent symptom scale when symptom change is the goal. Combine objective measures with members’ accounts of helpful and unhelpful features.",
        "Reflect on your own group behavior: which actions advance the task, sustain inclusion or displace the work? Examine norms, preparation and the effect of leadership as part of continued learning."
      ]
    },
    {
      "h": "Research examples: skills, mood and recovery",
      "b": [
        "The chapter cites **group CBT** for social anxiety, bipolar disorder and adolescents with ADHD; the ADHD example combines CBT with pharmacotherapy. These examples support selecting an appropriate adjunct, not replacing every other treatment.",
        "It also describes brief CBT for depressive/anxiety distress and an **eight-session group interpersonal therapy** approach for major depression.",
        "For **smoking cessation**, the cited group behavior programs were studied against self-help or brief individual support. The comparison matters when interpreting a benefit.",
        "For **substance use disorders**, the chapter discusses CBT, interpersonal, behavioral marital, modified psychodynamic, interactive, rational emotive, Gestalt and psychodrama approaches. These are treatment models, not proof that every model fits every patient."
      ]
    },
    {
      "h": "Research examples: family, trauma and longer-term support",
      "b": [
        "For children with marked irritability and ADHD, the chapter describes **joint parent–child sessions**. For early conduct problems, it cites **behavioral or cognitive-behavioral parenting groups** with parent and child outcomes.",
        "For people at risk of psychosis or with early psychosis, it lists **group/family CBT**. The cited work includes pilot or noncontrolled designs; it is not equivalent to a large randomized trial.",
        "**Seeking Safety** is the chapter’s example for co-occurring PTSD and substance use problems. **Reminiscence groups** are discussed for neurocognitive disorders, and **dialectical behavior therapy (DBT)** for borderline personality disorder.",
        "Evidence sources in the chapter range from trials and meta-analyses to reviews and practice guidance. Verify current evidence, the actual population and clinician competence before selecting a program; a historical table is not an automatic treatment order."
      ]
    }
  ],
  "recall": [
    [
      "What can a group offer, and what can limit its usefulness?",
      "Peer learning, feedback, supported skills practice, belonging and reaching several people at once can help. Shared time, privacy risk, disruptive behavior and pressure to conform can limit the benefit. Match the group to the person and purpose."
    ],
    [
      "How do Yalom’s factors describe different routes to change?",
      "Hope supports possibility; universality reduces isolation; information teaches; altruism helps the helper; corrective family recapitulation revisits relational patterns; socializing techniques build interaction skills; imitation models behavior; interpersonal learning tests its effect; cohesion supports belonging; catharsis expresses and integrates feeling; existential work addresses limits and meaning."
    ],
    [
      "Content, process, norms, themes and feedback: what is the distinction?",
      "Content is what is said. Process is how members interact. Norms are shared expectations. Themes are recurring meanings. Feedback describes a person’s effect on others; conflict can become useful work when resolved safely."
    ],
    [
      "What belongs in planning and selection?",
      "Set the purpose, name, measurable outcomes, membership and responsibilities. Arrange schedule, duration, room and seating. Consider open/closed membership, diversity, functioning, readiness, leader support and how progress will be evaluated."
    ],
    [
      "What does the leader do in each phase?",
      "Planning designs the group. Orientation introduces purpose, people, safety and expectations. Working supports problem solving and constructive conflict, including storming, norming and performing. Termination reviews gains and feelings about ending, plans next goals and obtains feedback."
    ],
    [
      "How do task, maintenance and individual roles differ?",
      "Task roles advance the work; examples include orienting and seeking reliable information. Maintenance roles sustain relationships, such as gatekeeping and harmonizing. Individual roles place a personal agenda ahead of the purpose, such as blocking or seeking recognition. Describe behavior rather than permanently labeling a person."
    ],
    [
      "How do group type, theory and leader preparation fit together?",
      "Match the purpose and population to education, medication teaching, dual-diagnosis, stress, community, activity, task or support work. Humanistic, CBT, psychodynamic, educational and systems frameworks direct different interventions. Specialized psychotherapy needs appropriate advanced preparation; peer mutual help has a different role."
    ],
    [
      "What guides leadership and professional development?",
      "Use direction for needed structure, democratic interaction for shared problem solving, and minimal direction only when the task and safety allow it. Use therapeutic communication, supervision and effective coleadership; examine transference, countertransference and barriers to inclusion."
    ],
    [
      "What must be explained about privacy and safety?",
      "Explain informed consent, professional confidentiality and its limits. Peers cannot be promised to keep disclosures private. Address devices, recording and outside contact. For virtual care, plan privacy, authorized practice, location, emergencies and disconnection. Immediate danger takes priority over the activity."
    ],
    [
      "How do responses and outcomes change with the group’s problem?",
      "Share airtime and use specific feedback for monopolization; explore anger with empathy and limits; give a silent member time and an invitation. Check medication knowledge in education, and goal-related insight, behavior and symptoms in therapy."
    ]
  ]
}
];
