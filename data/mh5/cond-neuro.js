// Exam 5 · Think it through · Neurocognitive disorders (Varcarolis ch 23). Our own words.
(window.MH_CONDS = window.MH_CONDS || []).push(
{
  id: 'delirium', group: 'Neurocognitive', name: 'Delirium', week: 15,
  short: 'Day 3 after hip surgery: fine yesterday, now pulling at her IV and seeing bugs on the blanket.',
  patient: '82-year-old woman, day 3 after hip surgery, on opioids for pain, with a urinary catheter. Yesterday she chatted with her daughter; tonight she is picking at the sheets, says there are bugs on the blanket, tries to climb out of bed and pulls at her IV. She dozes, then is agitated again. Temperature 38.3 °C, cloudy urine.',
  report: [
    'I’m calling about Mrs. L., 82, post-op day 3 after hip repair. She has new acute confusion.',
    'She was fully oriented yesterday per her daughter, with no dementia history. She is on oxycodone and has had a Foley since surgery.',
    'Since this evening she is inattentive and disoriented to time and place, with visual illusions or hallucinations of bugs and fluctuating alertness. Temperature 38.3, HR 104, SpO₂ 95%, and her urine is cloudy. She is pulling at lines and trying to get up.',
    'I’m concerned about delirium, possibly from a UTI and opioids. Please evaluate her and order a urinalysis and culture, CBC, BMP and glucose, and review her medications, including the opioids. I’ve put her near the station with a low bed, her glasses on and her daughter staying, and I’m avoiding restraints.'
  ],
  steps: {
    rc: {
      gist: 'Delirium = an **acute** (hours to days), **fluctuating** disturbance of **attention and awareness** plus another cognitive change (disorientation, memory, perception), **caused by a medical condition, substance or withdrawal**. Look for **inattention** (can’t focus or follow), a **sudden change from baseline** (ask the family), **visual hallucinations or illusions**, a disrupted sleep–wake cycle, **hyperactive** (agitated) or **hypoactive** (quiet, easily missed) forms, and autonomic signs.',
      terms: [
        { t: 'Inattention', see: 'Stares past you, loses track mid-sentence, can’t follow a two-step instruction.', why: 'Brain metabolism is disturbed globally (infection, hypoxia, drugs, electrolytes), so arousal and attention fail first.', means: 'The **cardinal sign**: any acute confusion in an older adult is **delirium until proven otherwise**, not “just dementia.”' },
        { t: 'Illusion vs hallucination', see: 'Folds in the blanket look like snakes (illusion) vs seeing bugs that aren’t there (hallucination).', why: 'Illusions misread a **real** stimulus; hallucinations have **no** stimulus. In delirium they are usually **visual** (and tactile).', means: 'Illusions can be **explained and corrected** (turn on the light, show her the blanket). Respond to the fear.' },
        { t: 'Hypoactive delirium', see: 'A quiet, drowsy, withdrawn patient who “seems calm.”', why: 'Same brain dysfunction, without agitation.', means: '**Often missed**: assess attention in every older inpatient.' }
      ],
      cards: [
        { h: 'Common causes and risk factors', b: ['**Infection** (UTI, pneumonia), **hypoxia**, **pain**, **dehydration**, electrolyte or glucose problems.', '**Medications** (opioids, benzodiazepines, anticholinergics, polypharmacy) and **withdrawal** (alcohol).', 'Immobility, **restraints**, catheters, sleep deprivation, noise, moving rooms.', '**Vision or hearing impairment**, pre-existing dementia, older age, surgery, ICU stay.'] }
      ]
    },
    ac: {
      gist: 'An acute change from yesterday, fluctuating, with inattention, perceptual disturbance and **fever with cloudy urine** on **opioids** = **delirium** from likely **UTI** plus medication. It is a **medical emergency**: untreated, it raises mortality, length of stay and permanent cognitive decline.'
    },
    ph: {
      gist: 'Priorities: **risk for injury** (falls, pulling lines), **acute confusion** and its **underlying cause**, fluid balance, sleep, and **fear or anxiety**.'
    },
    gs: {
      gist: 'Outcomes: she **stays safe** (no falls, lines intact), the **cause is treated** (UTI, pain, medications), she becomes **oriented** in lucid periods and returns to her baseline, and she maintains fluids and nutrition.'
    },
    ta: {
      gist: '**Find and treat the cause** (labs, cultures, medication review). Keep her safe **without restraints if possible** (they worsen delirium): close observation, family at the bedside, a low bed, a well-lit, quiet room, **glasses and hearing aids** on, clocks and calendars, consistent caregivers, short simple statements, introduce yourself every time, reorient gently (don’t quiz her). Fluids, nutrition, sleep and mobility. Antipsychotics or anxiolytics only cautiously for dangerous agitation.',
      cards: [
        { h: 'Communication in delirium', b: ['Approach **from the front**, say her name, introduce yourself.', 'Simple, direct statements; one thing at a time; explain what you’re doing.', 'Respond to the **feeling** (“You’re frightened. I’m here.”) and correct illusions.', 'Don’t argue with hallucinations; never leave an acutely delirious patient alone.'] }
      ]
    },
    eo: {
      gist: 'Recheck attention and orientation each shift (with a tool such as the CAM), vital signs, labs, intake, sleep and falls; she should return to baseline as the cause clears (delirium is usually **reversible**).'
    }
  }
},
{
  id: 'alz', group: 'Neurocognitive', name: 'Alzheimer’s disease (major neurocognitive disorder)', week: 15,
  short: 'Wanders four times a week, doesn’t recognize his wife, can’t find the bathroom.',
  patient: '67-year-old man with Alzheimer’s disease diagnosed 4 years ago. He wanders away from home about four times a week, has fallen getting out of bed at night (“I’m in a sleeping bag in the mountains”), is incontinent when he can’t find the bathroom, can’t find his words, and asked his wife, “Who is this woman?” She sobs: “I feel like I’ve betrayed him.”',
  report: [
    'I’m calling about Mr. S., 67, admitted today to our memory care unit with moderate to severe Alzheimer’s disease.',
    'He was diagnosed 4 years ago and is on donepezil. His wife can no longer manage him safely at home.',
    'He wanders, with a fall at night last week, aphasia and agnosia, including not recognizing his wife, and incontinence when he can’t find the bathroom. Vitals are stable; no injuries today.',
    'I’m asking for a review of whether to add memantine, and I’d like a social work referral for his wife’s caregiver stress and an Alzheimer’s Association support group. I’ve started a low bed, a lit bathroom with a picture label, a wander alert, scheduled toileting and daytime activity.'
  ],
  steps: {
    rc: {
      gist: 'Recognize a **gradual, progressive, irreversible** decline in memory **plus** other domains (language, executive function, perception, social cognition) that interferes with **daily independence** (major neurocognitive disorder). Know the signs: **aphasia, apraxia, agnosia, agraphia, confabulation, perseveration, hyperorality, sundowning**, wandering. Identify the **stage** and the **safety risks**.',
      terms: [
        { t: 'Agnosia', see: 'Doesn’t recognize his wife, or picks up a spoon and asks what it is.', why: 'Damage to the brain areas that match sensations to stored knowledge.', means: 'Introduce yourself and others every time; label objects and rooms with **pictures**.' },
        { t: 'Apraxia', see: 'Can’t dress himself (arms in his trouser legs) though his muscles work.', why: 'Loss of planned, purposeful movement sequences.', means: 'Give **one step at a time** (“Here’s your shirt. Put your arm in here.”); Velcro and elastic clothing.' },
        { t: 'Aphasia and agraphia', see: 'Searches for words, then only a few words, then babbling or mutism; can’t read or write.', why: 'The language areas degenerate.', means: 'Short, simple sentences; yes/no questions; gestures and pictures; patience.' },
        { t: 'Confabulation', see: '“I went to lunch with my family Sunday” (he was in bed all weekend).', why: 'The brain fills memory gaps to protect self-esteem; it is **not lying**.', means: 'Don’t confront it; redirect gently.' },
        { t: 'Sundowning', see: 'More agitated, confused and wandering in the late afternoon and evening.', why: 'Fatigue, fading light and a disrupted body clock.', means: 'Calm evenings, good lighting, daytime activity and **morning sunlight**; avoid naps and caffeine late in the day.' },
        { t: 'Perseveration and hyperorality', see: 'Repeats “hello” again and again; puts everything in his mouth.', why: 'Loss of frontal control.', means: 'Redirect; **remove nonfood items that look like food**.' }
      ],
      cards: [
        { h: 'Stages', b: ['**Mild (early)**: forgets recent events and names, trouble planning, loses things, word-finding problems; may still work; may hide it.', '**Moderate (middle)**: forgets personal history, confused about time and place, needs help choosing clothes, **sundowning**, **wandering**, suspiciousness, incontinence, personality changes.', '**Severe (late)**: needs total care; loses speech, walking and finally **swallowing**; infections (pneumonia).'] },
        { h: 'Normal aging vs Alzheimer’s', b: ['Normal: occasionally forgets a name and **remembers later**; misplaces keys and **retraces steps**.', 'Alzheimer’s: memory loss **disrupts daily life**; can’t retrace steps; gets lost in familiar places; poor judgment.'] },
        { h: 'Delirium vs dementia vs depression', b: ['**Delirium**: sudden, fluctuating, attention impaired, **reversible**; caused by a medical problem.', '**Dementia**: slow (months to years), progressive, memory impaired, **irreversible**; alert.', '**Depression** (“**pseudodementia**”): gradual with a crisis, sad and apathetic, “I don’t know” answers, poor concentration; **reversible** with treatment.'] }
      ]
    },
    ac: {
      gist: 'He is in **moderate to severe** Alzheimer’s disease: wandering, night-time disorientation, agnosia and aphasia make **injury** the top risk, and his wife shows **caregiver stress and grief**.'
    },
    ph: {
      gist: 'Priority: **risk for injury** (wandering, falls, burns, eating nonfood items). Then **self-care deficits** (eating, toileting, dressing), communication, sleep, and **caregiver stress**.'
    },
    gs: {
      gist: 'Outcomes: **free from injury**; wanders only within safe areas; keeps the **highest possible level of function** (feeds himself finger foods, dresses with step-by-step help); maintains weight and sleep; his wife uses support and respite services.'
    },
    ta: {
      gist: '**Person-centered care** (know his life story; relationships before tasks), with **unconditional positive regard**. Safety: low bed or mattress on the floor, lighting, remove hazards, locks placed high, alarms, ID bracelet. Communication: name, introduce yourself, one simple direction at a time, **distraction rather than confrontation**, no quizzing. Routine and structure, finger foods, scheduled toileting, labeled rooms with pictures. Support the family.',
      cards: [
        { h: 'Medications', b: ['**Cholinesterase inhibitors** (donepezil for all stages; rivastigmine (patch for all stages); galantamine): raise acetylcholine; modest, temporary benefit. Side effects: **nausea, vomiting, diarrhea, bradycardia** and syncope, insomnia; take with food; **don’t give donepezil at bedtime**; caution with NSAIDs (GI bleeding).', '**Memantine**: NMDA antagonist for moderate to severe disease; blocks excess glutamate; dizziness, headache, confusion, constipation. **Namzaric** = memantine + donepezil.', '**Antipsychotics** for behavior: **black box warning** (higher death rates in older adults with dementia); last resort, start low and go slow.'] },
        { h: 'Home safety teaching', b: ['Gradually stop driving; remove throw rugs; safety bars; low water-heater temperature; supervise smoking; lock up medications and cleaning products.', 'Wandering: an ID bracelet, alert the police and neighbors with a recent photo, locks placed high or complex, door sensors, daytime exercise.', 'Activities: picture books, music, walking, simple familiar group activities.'] },
        { h: 'Caregiver support', b: ['**Alzheimer’s Association** (support groups, a 24/7 helpline), adult day care, respite, home health, hospice, Meals on Wheels.', 'Legal planning early: advance directives, durable power of attorney, guardianship.', 'Acknowledge the grief and guilt of placement: “This is a difficult decision.”'] }
      ]
    },
    eo: {
      gist: 'Count falls and wandering episodes, track weight and intake, continence, sleep, the level of assistance needed, and caregiver coping. Reset outcomes as the disease progresses.'
    }
  }
}
);
