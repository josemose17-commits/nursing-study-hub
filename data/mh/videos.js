// YouTube videos for the Exam 4 (mental health) page. Embedded from YouTube; nothing is copied.
// Every id was checked to exist and to allow playing on other sites (YouTube oEmbed, Oct 31 2026).
// id = YouTube video id · title · see = what to watch for · tags = condition / topic ids it belongs to.
window.MH_VIDEOS = [
  // Mood
  { id: 'RrWBhVlD1H8', title: 'What is bipolar disorder? (TED-Ed)', see: 'Mania and depression as episodes, not personality, and why stopping treatment brings episodes back', tags: ['bipolar'] },
  { id: 'M70q5UYGEaI', title: 'Bipolar disorder (Level Up RN)', see: 'Bipolar I vs II vs cyclothymia, what mania looks like on the unit and the nursing priorities', tags: ['bipolar'] },
  { id: 'p8JyrnsL5Ok', title: 'Bipolar disorder medications (Level Up RN)', see: 'Lithium, valproate, carbamazepine and lamotrigine: what to monitor for each', tags: ['bipolar'] },
  { id: 'e_-m4LMtg7E', title: 'Lithium serum level (Level Up RN)', see: 'The narrow range, the early and late toxicity signs, and why sodium and fluids change the level', tags: ['bipolar'] },
  { id: 'z-IR48Mb3W0', title: 'What is depression? (TED-Ed)', see: 'Depression as an illness of the brain and body, not sadness, and the symptoms that make the diagnosis', tags: ['mdd'] },
  { id: 'uEod4sa-qPc', title: 'Major depressive disorder (Level Up RN)', see: 'The criteria, the safety priorities and how to talk with a withdrawn patient', tags: ['mdd'] },
  { id: 'ClPVJ25Ka4k', title: 'How do antidepressants work? (TED-Ed)', see: 'Reuptake at the synapse, and why the effect takes weeks to appear', tags: ['mdd'] },
  { id: '16F9MCpegDY', title: 'SSRIs and SNRIs (Level Up RN)', see: 'Side effects, serotonin syndrome and the teaching points for SSRIs and SNRIs', tags: ['mdd'] },
  { id: 'hKfol2AXBoo', title: 'Antidepressants made simple (SimpleNursing)', see: 'SSRIs, SNRIs, TCAs and MAOIs side by side, with the tyramine foods', tags: ['mdd'] },
  { id: '30b2J74rssk', title: 'Serotonin syndrome explained (Rhesus Medicine)', see: 'Why too much serotonin causes fever, clonus and agitation, and how it is treated', tags: ['mdd'] },
  { id: 'AcmarVpo2xE', title: 'The truth about ECT (TED-Ed)', see: 'How ECT is done today under anesthesia, who it helps, and its memory side effects', tags: ['mdd', 'bipolar'] },
  // Safety
  { id: 'Jh3wd4AFT4c', title: '12 warning signs of suicide (Child Mind Institute)', see: 'The behavior changes that come before an attempt: giving things away, saying goodbye, sudden calm', tags: ['suicide'] },
  { id: 'tiHddrNpxqA', title: 'Suicide risk assessment (nurselyf)', see: 'Warning signs, screening tools and the nurse’s first actions', tags: ['suicide'] },
  { id: 'bUnOwEX7A6Y', title: 'Sexual assault and suicidal patients (Level Up RN)', see: 'Asking directly, the plan–means–intent questions, and suicide precautions on the unit', tags: ['suicide'] },
  { id: 'k8jw3JVfK0w', title: 'Understanding nonsuicidal self-injury (Psych Hub)', see: 'Why people self-injure (to relieve emotional pain), and how it differs from a suicide attempt', tags: ['nssi'] },
  { id: 'is11DQl81QA', title: 'Treatment for nonsuicidal self-injury (Psych Hub)', see: 'DBT skills and replacing self-injury with safer ways to tolerate distress', tags: ['nssi'] },
  // Anxiety, OCD
  { id: 'zF0t3k5JstQ', title: 'Anxiety disorders (Level Up RN)', see: 'GAD, panic, phobias and social anxiety, and the nursing care for each', tags: ['anxiety'] },
  { id: '8s2_xnS9V6w', title: 'Levels of anxiety and nursing care (Level Up RN)', see: 'Mild, moderate, severe and panic: what the patient can take in at each level', tags: ['anxiety', 'stress'] },
  { id: 'YxELZyA2bJs', title: 'Panic disorder (Osmosis)', see: 'What happens in the body during a panic attack and why people start avoiding places', tags: ['anxiety'] },
  { id: 'B1i74RwaKAc', title: 'Benzodiazepines and buspirone (Level Up RN)', see: 'Fast relief with dependence risk vs slow relief with none', tags: ['anxiety'] },
  { id: 'DhlRgwdDc-E', title: 'Debunking the myths of OCD (TED-Ed)', see: 'Obsessions cause the anxiety; compulsions relieve it for a moment and keep the cycle going', tags: ['ocd'] },
  { id: 'xIYECtNlhpE', title: 'OCD and PTSD (Level Up RN)', see: 'The nursing care for OCD rituals and for trauma symptoms', tags: ['ocd', 'ptsd'] },
  // Trauma
  { id: 'b_n9qegR7C4', title: 'The psychology of PTSD (TED-Ed)', see: 'How a trauma memory stays “live”: intrusions, avoidance, mood changes and hyperarousal', tags: ['ptsd'] },
  { id: '4j65B6qehsM', title: 'Acute stress disorder vs PTSD (QuickSci)', see: 'The same kinds of symptoms, told apart by timing: 3 days to 1 month vs more than 1 month', tags: ['ptsd'] },
  { id: 'fhRJdB-wwGI', title: 'Dissociative disorders (Level Up RN)', see: 'Amnesia, depersonalization and dissociative identity disorder, and grounding', tags: ['ptsd'] },
  { id: '95ovIJ3dsNk', title: 'How childhood trauma affects health (Nadine Burke Harris, TED)', see: 'The ACE study: adversity in childhood raises the risk of heart, lung and mental illness as an adult', tags: ['ptsd', 'trauma'] },
  { id: 'fWken5DsJcw', title: 'What is trauma-informed care? (Center for Health Care Strategies)', see: 'Asking “what happened to you?” instead of “what’s wrong with you?”', tags: ['trauma'] },
  // Week 11 topics
  { id: 'Nk3uzY4LDpc', title: 'The mental health continuum', see: 'Mental health as a range that people move along, not an on/off switch', tags: ['intro'] },
  { id: '92NsfZ6EEuE', title: 'Mental status examination (Level Up RN)', see: 'Appearance, behavior, speech, mood and affect, thought, perception, cognition, insight and judgment', tags: ['dx'] },
  { id: 'aYCBdZLCDBQ', title: 'Erikson’s 8 stages (Sprouts)', see: 'Each stage’s crisis and what happens when it is or isn’t resolved', tags: ['life'] },
  { id: 'ZsEyrOWH6Mk', title: 'Introduction and patient rights (Level Up RN)', see: 'Admission types, patient rights and the least restrictive environment', tags: ['legal', 'settings'] },
  { id: 'ETzFRQ4Drvo', title: 'Torts and restraints (Level Up RN)', see: 'False imprisonment, assault and battery, and the rules for restraint and seclusion', tags: ['legal'] },
  { id: 'V2H3qV67wUc', title: 'Informed consent and ethical principles (Level Up RN)', see: 'Autonomy, beneficence, nonmaleficence, justice, fidelity and veracity, with examples', tags: ['legal'] },
  { id: 'oHRTdJ_bcjw', title: 'CBT, EMDR and TMS (Level Up RN)', see: 'What each therapy does and who it is for', tags: ['theories'] },
  { id: '9c_Bv_FBE-c', title: 'What is CBT? (Mind)', see: 'Thoughts, feelings and behaviors as a loop you can break', tags: ['theories'] },
  { id: '6EAcTjUzhNI', title: 'Milieu, group and behavioral therapy (Level Up RN)', see: 'How the unit itself is used as treatment', tags: ['theories', 'settings'] },
  { id: 'CwZn-nxAvP4', title: 'Peplau’s interpersonal relations theory', see: 'The phases of the nurse–patient relationship', tags: ['relationship'] },
  { id: 't_59thyrje8', title: 'Nurse–client relationship and therapeutic communication (Level Up RN)', see: 'The phases of the relationship, boundaries and the techniques', tags: ['relationship', 'comm'] },
  { id: '0gZimLvfC2g', title: 'Therapeutic vs nontherapeutic communication (Level Up RN)', see: 'Each technique with an example, and the blocks to avoid', tags: ['comm'] },
  { id: 's86DDGAqkS4', title: 'Stress, general adaptation syndrome and anxiety (Level Up RN)', see: 'Alarm, resistance and exhaustion, and the levels of anxiety', tags: ['stress'] },
  { id: 'jQvkjEjgib0', title: 'Defense mechanisms (Level Up RN)', see: 'Each defense mechanism with an example of what the patient says', tags: ['stress'] }
];
