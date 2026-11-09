// Exam 5 · Think it through · Substance-related disorders (Varcarolis ch 22). Our own words.
(window.MH_CONDS = window.MH_CONDS || []).push(
{
  id: 'alcohol', group: 'Substances', name: 'Alcohol withdrawal and delirium tremens', week: 14,
  short: '8 hours after her last drink: tremor, sweating, BP up, then confusion and vomiting.',
  patient: '61-year-old admitted for detox after a DUI (court’s choice: detox or jail). Heavy daily drinker for years. About 8 hours since her last drink: hand tremor, foot bouncing, sweating, BP 168/98, HR 112, temperature 38.1 °C, “pins and needles” in her legs. She vomits, becomes confused and grabs for her alcohol-containing cough syrup.',
  report: [
    'I’m calling about Ms. K., admitted for alcohol detox. I’m concerned she is progressing toward severe withdrawal.',
    'She has long-term heavy daily drinking with prior attempts to quit, depression, and peripheral neuropathy. Her last drink was about 8 hours ago.',
    'She has a coarse tremor, diaphoresis and vomiting, and is now confused with garbled speech. BP 168/98, HR 112 and temperature 38.1. Her earlier CIWA-Ar was 24 before she stopped giving reliable answers. I removed an alcohol-containing cough syrup from her belongings.',
    'Please assess her urgently for complicated withdrawal and other causes of confusion. I’m requesting the appropriate withdrawal and observational-monitoring protocol, prescribed benzodiazepine treatment, thiamine, fluid/electrolyte review and seizure precautions. Urgent glucose, if needed, must not wait for thiamine.'
  ],
  steps: {
    rc: {
      gist: 'The chapter’s **typical timing** emphasizes tremor around **6–8 hours**, perceptual symptoms around **8–10 hours**, seizures around **12–24 hours** and DTs in the early days. Timing varies: do not use these windows to rule out a complication. Watch **autonomic signs**, agitation, vomiting, confusion and perceptual changes. Use **CIWA-Ar** only when the patient can reliably report symptoms; withdrawal delirium requires appropriate observational/delirium monitoring. **CAGE** and **AUDIT** screen for different alcohol-use concerns.',
      terms: [
        { t: 'Withdrawal tremor and autonomic hyperactivity', see: 'Shaky hands, sweating, racing pulse, high BP, fever, anxiety, insomnia.', why: 'Long-term alcohol boosts **GABA** (the brake) and suppresses **glutamate**; the brain adapts. When alcohol stops, the brake is gone and the system **rebounds into overexcitation**.', means: 'Treat **early** with a benzodiazepine, which replaces the missing GABA effect. Rising vital signs mean withdrawal is getting worse.' },
        { t: 'Delirium tremens (DTs)', see: 'Confusion, disorientation, agitation, **visual and tactile hallucinations** (bugs on the skin), fever, sweating, tachycardia, fluctuating consciousness.', why: 'The most severe withdrawal state; more likely with medical illness (pneumonia, pancreatitis, liver disease).', means: '**Medical emergency**: up to 20% die untreated. IV lorazepam, fluids, a safe low-stimulation room, close observation, seizure precautions.' },
        { t: 'Wernicke encephalopathy', see: 'Confusion, **ataxic gait**, **nystagmus** and eye-movement palsies can suggest it; not every feature must be present.', why: '**Thiamine (B1) deficiency** can follow poor nutrition and impaired absorption.', means: '**Give prescribed thiamine promptly. Do not delay urgent glucose**: either order or concurrent administration is acceptable under ASAM guidance. Untreated deficiency can lead to lasting injury, including a **Korsakoff** memory disorder.' },
        { t: 'Tolerance', see: 'Blood alcohol 0.31 but alert and talking normally.', why: 'The brain and liver adapt, so it takes more alcohol for the same effect.', means: 'A sign of physical dependence, and a warning that withdrawal will be significant.' }
      ],
      cards: [
        { h: 'Blood alcohol levels', b: ['**0.08**: impaired coordination and judgment (the legal limit in most states; 0.08–0.10).', '**0.15**: vomiting, major loss of balance. **0.20**: blackouts.', '**0.30**: low temperature, BP and respirations; amnesia. **0.40**: possible death.', 'Tolerant drinkers may look sober at high levels.'] },
        { h: 'Screening', b: ['**CAGE**: **C**ut down? **A**nnoyed by criticism? **G**uilty? **E**ye-opener in the morning? A score of 2 or more is significant.', '**AUDIT**: 10 questions; 8 or more (men) or 7 or more (women) needs more assessment.', '**SBIRT**: **S**creening, **B**rief **I**ntervention, **R**eferral to **T**reatment, in any setting.'] },
        { h: 'Damage from long-term drinking', b: ['Liver: fatty liver → **alcoholic hepatitis** → **cirrhosis** (jaundice, ascites, bleeding).', 'GI: gastritis, esophagitis, **esophageal varices**, **pancreatitis**.', 'Heart: **cardiomyopathy**. Nerves: **peripheral neuropathy** (pins and needles). Muscles: myopathy.', 'Blood: low WBC and **platelets** (bleeding). Cancers of the mouth, throat, esophagus, liver, breast and colon.', 'Pregnancy: **fetal alcohol syndrome** (small head, facial features, intellectual disability). **No safe amount**.'] }
      ]
    },
    ac: {
      gist: 'Rising vital signs, tremor, vomiting and **new confusion about 8 hours after stopping** mean **moderate to severe withdrawal progressing toward DTs**, made riskier by older age, neuropathy (malnutrition) and depression. She is also at risk of **seizures** and **Wernicke**.'
    },
    ph: {
      gist: 'Priority: **withdrawal and its dangers** (seizures, DTs, injury). Then fluids and nutrition, then **suicide risk** (depression plus alcohol), then denial, coping and the family.'
    },
    gs: {
      gist: 'Outcomes: vital signs return to baseline, **no seizures or DTs**, no injury, she is hydrated and nourished, and then she **engages in treatment** (rehab, AA, medication-assisted treatment) and names her triggers and a relapse-prevention plan.'
    },
    ta: {
      gist: 'Use prescribed **benzodiazepines** under the severity-based withdrawal protocol and monitor sedation and breathing. **CIWA-Ar is not recommended for withdrawal delirium**; use an appropriate observational/delirium tool and close clinical monitoring. Give prescribed **thiamine** without delaying urgent glucose; either order or concurrent administration is acceptable. Provide the prescribed fluids/nutrition, seizure precautions, a calm well-lit setting, frequent physiological review, reorientation and removal of alcohol-containing products. Follow stabilization with ongoing treatment, relapse prevention and support.',
      cards: [
        { h: 'Medications for alcohol use disorder', b: ['**Disulfiram (Antabuse)**: drinking causes severe **nausea and vomiting, flushing, sweating, headache, dyspnea and confusion**. Avoid all alcohol, including **cough syrup, mouthwash, sauces and some lotions**.', '**Naltrexone** (oral or monthly IM Vivitrol): reduces craving and the pleasure of drinking; must be **opioid-free** (about 7–10 days) first.', '**Acamprosate**: reduces craving; start on **day 5 of abstinence**; avoid in **kidney impairment**.', '**Benzodiazepines** for withdrawal; **clonidine** for mild to moderate withdrawal symptoms.'] },
        { h: 'The continuum of care', b: ['**Detox** (medically managed) → **rehab** (residential) → halfway house → **partial hospitalization** (about 6 h/day, 5 days a week) → **intensive outpatient** (about 3 h/day, 3 days a week) → **outpatient**.', 'Mutual-help throughout: **AA**; **Al-Anon** (family), **Alateen** (teens).', '**Relapse** is expected in a chronic disease: plan for triggers and coping.', '**Motivational interviewing** (stages of change: precontemplation → contemplation → preparation → action → maintenance) and **CBT**.'] },
        { h: 'Family and the nurse', b: ['**Codependence**: overly responsible behavior, self-worth from caring for the drinker; enabling.', 'Nurses are at higher risk themselves: a **peer assistance (alternative to discipline)** program; report a colleague’s suspected impairment to a supervisor.', 'Addiction is a **chronic brain disease**, not a lack of character.'] }
      ]
    },
    eo: {
      gist: 'Trend the **appropriate withdrawal assessment** and vital signs; use observational/delirium monitoring when reliable self-report is not possible. Watch for seizures, confusion, over-sedation and respiratory depression; check intake and electrolytes. After stabilization, assess engagement, support and **relapse-prevention** skills.'
    }
  }
},
{
  id: 'opioid', group: 'Substances', name: 'Opioid overdose and withdrawal', week: 14,
  short: 'Found unresponsive: RR 6, pinpoint pupils. After naloxone: sweating, yawning, cramps.',
  patient: '23-year-old found unresponsive in a bathroom. RR 6 and shallow, SpO₂ 82%, pinpoint pupils, BP 88/50, HR 54, fresh injection marks. After intranasal naloxone he wakes, angry, sweating, yawning, with runny nose and eyes, gooseflesh, cramps and vomiting.',
  report: [
    'I’m calling about Mr. T., brought in after an opioid overdose.',
    'He uses heroin daily, possibly with fentanyl; this is his first overdose in our records.',
    'He arrived with RR 6, SpO₂ 82% and pinpoint pupils. After 4 mg of intranasal naloxone, his RR is 16 and SpO₂ 95%, but he is now in withdrawal: HR 118, sweating, yawning, rhinorrhea and abdominal cramps. He wants to leave.',
    'Naloxone wears off before many opioids, so he needs observation and continuous pulse oximetry, with naloxone at the bedside. Please consider starting buprenorphine once withdrawal is established, plus clonidine for symptoms, and a referral for medication-assisted treatment. I’d also like him discharged with a naloxone kit.'
  ],
  steps: {
    rc: {
      gist: '**Intoxication or overdose**: **pinpoint pupils (miosis)**, sedation and head-nodding, slurred speech, **respiratory depression**, low BP, HR and temperature, decreased bowel sounds, track marks. The overdose triad: **coma + pinpoint pupils + respiratory depression**. **Withdrawal** is the opposite picture: **dilated pupils**, yawning, **tearing, runny nose**, gooseflesh (piloerection), sweating, ↑ HR and BP, cramps, vomiting, diarrhea, aches, anxiety, insomnia.',
      terms: [
        { t: 'Respiratory depression', see: 'RR 6, shallow, SpO₂ dropping, cyanosis.', why: 'Opioids act on mu receptors in the brainstem’s **breathing center**, making it less responsive to CO₂.', means: 'The cause of death in overdose: **airway, breathing (ventilate), naloxone**.' },
        { t: 'Withdrawal (cold turkey)', see: 'Gooseflesh, yawning, tears, runny nose, dilated pupils, cramps, diarrhea, sweating.', why: 'Rebound of the systems that opioids suppressed (sympathetic overactivity).', means: '**Very uncomfortable but rarely life-threatening** (unlike alcohol or benzodiazepine withdrawal). Starts 6–8 hours after heroin; peaks on days 2–3.' }
      ],
      cards: [
        { h: 'DEA schedules', b: ['**I**: no accepted medical use, high abuse potential (heroin, LSD; marijuana federally).', '**II**: high abuse potential, prescription only (methadone, oxycodone, methylphenidate).', '**III**: moderate (buprenorphine, acetaminophen-codeine, testosterone).', '**IV**: low (alprazolam, lorazepam).', '**V**: lowest (cough syrups with codeine, Lomotil, pregabalin).', 'The lower the number, the higher the misuse potential.'] }
      ]
    },
    ac: {
      gist: 'Classic **opioid overdose**, reversed by naloxone, which pushed him into **precipitated withdrawal**. Naloxone is **short-acting**, so the opioid (especially fentanyl or methadone) can **outlast it**, and he can stop breathing again.'
    },
    ph: {
      gist: 'Priority: **airway and breathing** (overdose), then **re-sedation risk**, then withdrawal comfort, then engagement in treatment and **harm reduction**.'
    },
    gs: {
      gist: 'Outcomes: a stable respiratory rate and SpO₂ through the observation period; withdrawal symptoms managed; he accepts a referral for **medication-assisted treatment**; and he leaves with **naloxone** and an overdose plan.'
    },
    ta: {
      gist: 'Activate emergency help, support **airway and ventilation**, give **naloxone** by the available product’s directions/protocol and continue observation with repeat dosing as indicated. Treat withdrawal using the individualized plan. Conventional **buprenorphine** induction requires appropriate withdrawal assessment; time since last use alone is insufficient, and the needed interval varies by opioid exposure. **Methadone**, symptom-directed medicines and later **naltrexone** have different roles and precautions. Connect care with ongoing treatment and harm-reduction support.',
      cards: [
        { h: 'Opioid treatment medications', b: ['**Naloxone (Narcan)**: antagonist; reverses overdose in minutes; **short duration**: re-dose and watch. Too much → withdrawal.', '**Methadone**: long-acting agonist; once daily, only through certified programs; watch for respiratory depression, **QT**, chest pain; safest choice in pregnancy.', '**Buprenorphine (Subutex) / buprenorphine-naloxone (Suboxone)**: partial agonist, ceiling on respiratory depression; give only in **early withdrawal**, or it **precipitates withdrawal**; monthly injection and 6-month implant forms exist.', '**Naltrexone** (oral, or monthly **Vivitrol** IM): antagonist, blocks euphoria; must be opioid-free first; injection-site reactions.', '**Clonidine** and **lofexidine** (alpha-2 agonists): ease sweating, tearing and restlessness during withdrawal.'] }
      ]
    },
    eo: {
      gist: 'Continue respiratory rate, ventilation, alertness and oxygenation assessment under the exposure-specific observation plan. **The opioid can outlast naloxone**, so a first awakening does not end monitoring. Repeat reversal and breathing support as indicated. Assess withdrawal with an appropriate tool, and evaluate access to treatment, follow-up and take-home naloxone.'
    }
  }
}
);
