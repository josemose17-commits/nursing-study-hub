// Exam 5 · Think it through · Somatic and dissociative disorders (Varcarolis ch 16, 17). Our own words.
(window.MH_CONDS = window.MH_CONDS || []).push(
{
  id: 'somatic', group: 'Somatic and dissociative', name: 'Somatic symptom and conversion disorders', week: 13,
  short: 'Recurrent chest pain and palpitations with normal tests; another patient suddenly can’t move her arm.',
  patient: '49-year-old recently divorced mother in the ED for the fourth time this year with palpitations, shortness of breath and fatigue. Cardiac work-ups are normal. She says, “My mood is fine, but my body is a major problem,” leaves home only for work and groceries, and says, “I don’t have any friends.” (A second patient: a woman who suddenly can’t see after witnessing her husband’s affair, and calmly discusses it.)',
  report: [
    'I’m calling about Ms. C., seen in the ED today for palpitations and shortness of breath.',
    'This is her fourth visit this year. Her previous cardiac work-ups, including an echocardiogram and a stress test, were normal. She was recently divorced and lives alone.',
    'Today her vital signs, ECG and troponin are normal. She is very worried about her heart, describes no friends or supports, and is not engaged in any mental health care.',
    'I’m asking for one consistent primary care provider with scheduled visits instead of repeated ED work-ups, and a referral to an intensive outpatient program for CBT. I’ve talked with her about stress and her symptoms without dismissing them.'
  ],
  steps: {
    rc: {
      gist: 'Recognize **real, distressing physical symptoms** (pain, fatigue, palpitations, GI symptoms) with **excessive thoughts, worry or time spent on them** for **more than 6 months** (somatic symptom disorder); worry about **having** an illness with few or no symptoms (illness anxiety); or a **neurological loss** (paralysis, blindness, seizures) with no neurological cause (conversion), often with **la belle indifférence**. Always **rule out a medical cause first**.',
      terms: [
        { t: 'Somatization', see: 'Distress shows up as back pain, palpitations, headaches or stomachaches, not as sadness or worry.', why: 'Stress activates the body (HPA axis, sympathetic system), and some people and cultures experience distress physically.', means: 'The symptoms are **real**, not faked or under conscious control. Never say “it’s all in your head.”' },
        { t: 'La belle indifférence', see: 'Calmly discusses sudden blindness or paralysis.', why: 'In conversion, the symptom may “solve” an unbearable conflict, so the anxiety is relieved.', means: 'A clue to conversion, but **assume an organic cause** until it is ruled out.' },
        { t: 'Secondary gain', see: 'Extra attention, being excused from duties, others taking over care.', why: 'The benefits of the sick role reinforce the symptoms (not consciously).', means: 'Reduce it: attend to the person **at times other than** complaints; encourage self-care.' }
      ],
      cards: [
        { h: 'Tell them apart', b: ['**Somatic symptom disorder**: real symptoms + excessive worry and time spent, more than 6 months; high help-seeking.', '**Illness anxiety disorder**: fear of having or getting a serious illness; symptoms mild or absent; **care-seeking** (constant checks) or **care-avoidant** types.', '**Conversion (functional neurological) disorder**: motor or sensory loss with no neurological cause; often after a stressor.', '**Psychological factors affecting a medical condition**: stress or depression worsening a real disease (heart disease, ulcers, hypertension).', '**Factitious disorder**: **consciously** fakes or induces illness to be a **patient** (no outside reward); **imposed on another** = a caregiver harms a dependent (Munchausen by proxy).', '**Malingering**: **consciously** fakes for an **external reward** (money, drugs, avoiding work or jail).'] }
      ]
    },
    ac: {
      gist: 'Normal work-ups, repeated visits, excessive health worry, a recent **loss** (divorce, children leaving) and **isolation and loneliness** point to **somatic symptom disorder**, with unresolved grief and few coping resources.'
    },
    ph: {
      gist: 'Priorities: **ineffective coping**, **anxiety**, **pain**, **social isolation (loneliness)** and **low self-esteem**; for factitious disorder imposed on another, the **child’s safety** comes first.'
    },
    gs: {
      gist: 'Outcomes: she identifies feelings and stressors linked to her symptoms, uses **coping and relaxation skills**, keeps **scheduled** visits instead of ED visits, reconnects with people, and reports less concern even if symptoms continue.'
    },
    ta: {
      gist: 'Build a **trusting relationship**; acknowledge the symptoms as real; after a medical work-up, **avoid more tests** and don’t reinforce complaints; **shift the focus** to feelings and coping; teach relaxation and **assertiveness**; keep one consistent provider with **brief, regular visits**; refer for **CBT**.',
      cards: [
        { h: 'Nursing interventions', b: ['Once complaints have been checked, don’t recheck vitals at every complaint.', 'Spend time with her **when she isn’t complaining**.', '**Don’t imply symptoms aren’t real**; don’t confront the conversion symptom directly.', 'Matter-of-fact support for self-care (e.g., eat with the working arm).', 'Teach stress reduction, assertive communication and exercise; build self-compassion and social connection.', 'Case management to prevent “doctor shopping.”'] },
        { h: 'Factitious disorder and malingering', b: ['Factitious: monitor safety, report suspicious findings to the team, avoid angry confrontation; management rather than cure.', '**Imposed on another**: suspected child abuse → **mandatory report** and protect the child.', 'Notice your own anger at faked illness, and get supervision.'] }
      ]
    },
    eo: {
      gist: 'Evaluate the number of ED visits, use of coping skills, social contacts and her statements about her symptoms. Symptoms may persist, but concern and impairment should drop.'
    }
  }
},
{
  id: 'did', group: 'Somatic and dissociative', name: 'Dissociative identity disorder and amnesia', week: 13,
  short: 'Deep cuts on her arms she can’t remember making; strangers greet her by another name.',
  patient: '29-year-old admitted after arriving at the ED with deep cuts on her arms and no memory of how they happened. She describes “losing time,” finding clothes she doesn’t remember buying, and people calling her by another name. History of severe childhood abuse. She refers to herself as “we” at times.',
  report: [
    'I’m calling about Ms. S., admitted with self-inflicted lacerations she doesn’t remember making.',
    'She has dissociative identity disorder and a history of severe childhood abuse. One alter has threatened to “get rid of the others.”',
    'The lacerations are sutured and clean. She has gaps in memory for the past 2 days, uses “we,” and her voice and manner change abruptly. She can’t reliably tell me whether she will hurt herself.',
    'I’m asking for 1:1 observation, because I can’t get a reliable safety assessment across her identities, and for a referral to a trauma therapist. I’m using grounding and a consistent, calm approach.'
  ],
  steps: {
    rc: {
      gist: 'Recognize **dissociation**: gaps in memory (“**lost time**”), **depersonalization** (detached from self) or **derealization** (world unreal), **amnesia** for personal information (sometimes with **fugue**: travel with a new identity), or **two or more distinct identities** (alters) that take control. Screen for **self-harm and suicide** (very high in DID), trauma history, PTSD, depression and substance use. Rule out seizures, head injury and substances.',
      terms: [
        { t: 'Alters', see: 'A change in voice, posture, name or handedness; using “we”; others report behavior she can’t recall.', why: 'Severe, repeated childhood trauma before a unified identity forms; parts of experience are split off to survive it.', means: 'Speak to whoever is present respectfully, but keep focusing on the **whole person**; safety covers all alters.' },
        { t: 'Depersonalization and derealization', see: '“I’m watching myself in a movie.” “Everything looks foggy and unreal.”', why: 'The brain dampens emotion and sensation to escape overwhelming stress.', means: '**Grounding** brings her back to the present. Reality testing stays intact (unlike psychosis).' }
      ],
      cards: [
        { h: 'Facts', b: ['About **90%** of people with DID experienced childhood abuse or neglect; most also have PTSD.', 'Up to **70%** of outpatients with DID have attempted suicide.', 'Often misdiagnosed as schizophrenia, depression or borderline personality disorder.', 'Dissociative amnesia usually resolves on its own once the stress is gone.'] }
      ]
    },
    ac: {
      gist: 'Self-injury that she **can’t remember**, plus alter behavior, means safety can’t be reliably judged from one conversation. The underlying cause is **severe early trauma**.'
    },
    ph: {
      gist: 'Priority: **risk for self-harm and suicide**, then **disturbed identity**, **anxiety** and role performance.'
    },
    gs: {
      gist: 'Outcomes: **no self-harm**; she uses **grounding** when she starts to dissociate; keeps a journal of lost time and triggers; and engages in long-term trauma therapy aimed at **integration**.'
    },
    ta: {
      gist: '**Ensure safety** (close observation, 1:1 if needed), give a **simple, predictable routine**, **orient** her to time, place and identity, teach **grounding** (feet on the floor, holding ice, 5-4-3-2-1, a shower), let memories come **at her own pace** (don’t flood her with details), support her through painful disclosures, and refer for phased trauma therapy (safety → processing → integration).',
      cards: [
        { h: 'Self-awareness for the nurse', b: ['Skepticism or fascination are common reactions; get supervision.', 'Trust builds slowly: these patients have had trust betrayed.', 'Crises can be sudden; plan for them.'] }
      ]
    },
    eo: {
      gist: 'Evaluate for no self-harm, fewer episodes of lost time, grounding used effectively, less anxiety and engagement in therapy.'
    }
  }
}
);
