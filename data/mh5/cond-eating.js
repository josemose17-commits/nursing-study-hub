// Exam 5 · Think it through · Eating disorders (Varcarolis ch 18). Our own words.
(window.MH_CONDS = window.MH_CONDS || []).push(
{
  id: 'anorexia', group: 'Eating', name: 'Anorexia nervosa', week: 14,
  short: 'A college runner at 50% of ideal weight, HR 54, fainting at practice, “afraid of getting fat.”',
  patient: '21-year-old college track athlete brought in by his brothers after fainting at practice. 5 ft 2 in and 58 lb (about 50% of ideal body weight). BP 74/50, HR 54, temperature 96 °F, hemoglobin 9, fine downy hair on his back, cold mottled hands. He says, “I check my legs every night. I’m so afraid of getting fat or slowing down.”',
  report: [
    'I’m calling about Brad, a 21-year-old admitted with severe anorexia nervosa after syncope at track practice.',
    'He has restricted his intake and over-exercised for months. He has no prior treatment.',
    'He weighs 58 pounds, about 50% of his ideal body weight. BP is 74/50, HR 54 and temperature 96 °F, he is orthostatic, and his hemoglobin is 9. Potassium is 3.1 and phosphate is low-normal. He denies being underweight.',
    'He meets criteria for medical admission. I recommend cardiac monitoring, a refeeding protocol that starts low and goes slow, with daily phosphate, potassium and magnesium for the first week, and a dietitian consult. I’ve started weighing him daily and observing him after meals.'
  ],
  steps: {
    rc: {
      gist: 'Recognize **severe underweight** (BMI and % of ideal weight), an **intense fear of weight gain**, a **distorted body image** and the **signs of starvation**: **bradycardia, hypotension, hypothermia**, orthostasis, lanugo, cold extremities, amenorrhea, constipation, anemia, low bone density. Ask about **purging** and **exercise**. Most patients **deny there is a problem**.',
      terms: [
        { t: 'Bradycardia and hypotension', see: 'HR 54, BP 74/50, dizziness, fainting.', why: 'The starving body lowers its metabolic rate to save energy, and **heart muscle wastes** too, so the heart pumps less.', means: 'HR under 50, systolic under 90, temperature under 96 °F, arrhythmias or under 75% of ideal weight → **hospitalize**.' },
        { t: 'Lanugo', see: 'Fine, soft, downy hair on the face, back and arms.', why: 'The body grows insulating hair when fat stores are gone.', means: 'A visible sign of significant starvation.' },
        { t: 'Body image disturbance', see: '“I’m fat” while emaciated; checks body parts every night.', why: 'Altered processing of body signals (insula) plus a self-worth tied to shape and weight.', means: 'Don’t argue about size; focus on health and feelings. Weigh him **backward** on the scale if seeing the number raises anxiety.' },
        { t: 'Ego-syntonic illness', see: 'He values the restriction and resists treatment.', why: 'Restriction **briefly relieves anxiety** (lower tryptophan, then less serotonin activity), which rewards it.', means: 'Expect ambivalence; the nurse **does not negotiate weight**, but supports him through the fear.' }
      ],
      cards: [
        { h: 'Diagnosis and severity', b: ['Restricted intake → **significantly low body weight**; **intense fear** of gain or behavior that blocks gain; **disturbed body image** or denial of seriousness.', 'Subtypes: **restricting** and **binge-eating/purging**.', 'Severity by BMI: **mild ≥17**, moderate 16–17, severe 15–16, **extreme <15**.', 'Typically starts in adolescence; more common in females, but also in athletes in lean or aesthetic sports (running, wrestling, gymnastics) and in LGBTQ youth.'] },
        { h: 'Labs to know', b: ['Electrolytes (low **K⁺**, especially with purging), glucose, thyroid (low T3/T4), CBC (anemia, low counts), ECG (bradycardia, arrhythmias), bone density (DEXA), ESR, CPK.'] }
      ]
    },
    ac: {
      gist: 'Severe malnutrition (about **50% of ideal weight**) with **cardiovascular compromise** (bradycardia, hypotension, syncope) = medical admission. Once feeding starts, the big hidden danger is **refeeding syndrome**.',
      terms: [
        { t: 'Refeeding syndrome', see: 'After feeding begins: weakness, swelling, confusion, arrhythmias, seizures, heart failure.', why: 'Insulin rises with carbohydrate, pushing **phosphate, potassium and magnesium** into cells (and using up thiamine), so blood levels **crash**. The wasted heart can’t handle the fluid.', means: 'Start feeding **low and slow**; check **phosphate, K⁺ and Mg²⁺ daily** at first; give thiamine; watch for edema and heart failure. Gain no more than **2–3 lb a week** (over 5 lb a week risks pulmonary edema).' }
      ]
    },
    ph: {
      gist: 'First: **impaired nutrition**, **decreased cardiac output**, **electrolyte and fluid imbalance** (life-threatening). Then **body image**, **ineffective coping**, **low self-esteem** and family processes.'
    },
    gs: {
      gist: 'Outcomes: vital signs and electrolytes stabilize; he gains **2–3 lb a week** toward about **90% of ideal body weight** (75% to leave the hospital, in the textbook case); eats planned meals without compensating; and later states feelings without restricting.'
    },
    ta: {
      gist: 'Medically stabilize, then a **structured weight-restoration program**: set meal times and duration, a dietitian’s plan, **observe meals and 1 hour after**, supervise bathroom use, limit exercise, **weigh at set times in a gown or underwear after voiding** (backward if needed), don’t negotiate or reweigh, praise progress, and use CBT and family-based therapy.',
      cards: [
        { h: 'Unit interventions', b: ['Calm, pleasant meals with **set times (about 30 minutes)**; no talk about food or weight at the table.', 'Liquid supplements if solid food can’t be finished.', '**Observe during and 1 hour after meals**; bathroom checks; watch for hiding food, exercising in the room, water-loading before weigh-ins.', 'Weigh daily at first, then 3 times a week, same time and clothing, after voiding.', 'Increase choice and independence as weight goals are met.', 'Explore feelings; challenge distorted thoughts (CBT).'] },
        { h: 'Treatment', b: ['**No FDA-approved drug** for anorexia; SSRIs work poorly until weight is restored (they need dietary tryptophan) but help co-occurring depression, anxiety and OCD.', '**Family-based treatment** is the best evidence for adolescents; CBT and adolescent-focused therapy.', 'Recovery is a **process**; relapse is common (about 50% in the first year).'] }
      ]
    },
    eo: {
      gist: 'Track weight on schedule, vital signs, orthostatics, electrolytes (especially **phosphate** in the first week), intake, hiding or compensating behaviors and statements about body image.'
    }
  }
},
{
  id: 'bulimia', group: 'Eating', name: 'Bulimia nervosa', week: 14,
  short: 'Normal weight, binges and vomits 15 times a night; potassium 2.7.',
  patient: '40-year-old teacher at 95% of ideal weight who binges every night and vomits up to 15 times. She has eroded tooth enamel, swollen parotid glands and calluses on the back of her hand. Potassium 2.7 mEq/L, and her ECG shows changes consistent with hypokalemia. She says, “I’m ashamed I can’t control it. I hate myself.”',
  report: [
    'I’m calling about Ms. K., a 40-year-old with bulimia nervosa referred for partial hospitalization.',
    'She has binged and purged nightly for years; her history includes childhood sexual abuse.',
    'Her potassium is 2.7, and she has orthostatic hypotension (BP 120/80 sitting, 90/60 standing) and flattened T waves with U waves on her ECG. She vomits up to 15 times a night and is motivated for treatment.',
    'I’m asking for potassium replacement and a repeat level and ECG, and for you to consider fluoxetine. Please also evaluate whether her potassium is too low for outpatient care. I’m starting structured meals with post-meal observation.'
  ],
  steps: {
    rc: {
      gist: 'Recognize **recurrent binges** (a large amount in about 2 hours with **loss of control**) followed by **compensating** (vomiting, laxatives, diuretics, fasting, excess exercise) **at least weekly for 3 months**, with self-worth tied to shape and weight. Weight is often **normal**, so look for the signs: **Russell sign**, **parotid swelling**, **dental erosion**, and **electrolyte losses**.',
      terms: [
        { t: 'Hypokalemia', see: 'K⁺ 2.7; weakness, palpitations, ECG changes (flat T, U waves).', why: 'Vomiting loses stomach acid and potassium; the alkalosis that follows drives K⁺ into cells and the kidneys waste more.', means: 'The **most dangerous** finding: arrhythmias and sudden death. Replace potassium and monitor the ECG. K⁺ below 3.2, chloride below 88, esophageal tears or arrhythmias → hospitalize.' },
        { t: 'Russell sign', see: 'Calluses or scars on the knuckles and back of the hand.', why: 'Teeth rub the hand during self-induced vomiting.', means: 'A physical clue to purging in a normal-weight patient.' },
        { t: 'Parotid swelling and dental erosion', see: '“Chipmunk” cheeks, worn enamel, cavities.', why: 'Repeated vomiting stimulates the salivary glands, and stomach acid dissolves enamel.', means: 'Dental referral; teach rinsing with water (not brushing right after vomiting).' }
      ],
      cards: [
        { h: 'Facts', b: ['Starts in late adolescence or young adulthood; about **60% heritable**.', 'Often with depression, anxiety, substance use, PTSD and **borderline personality disorder**; often a trauma history.', 'Patients feel **shame** (the illness is **ego-dystonic**), so they usually **want help**, unlike in anorexia.'] }
      ]
    },
    ac: {
      gist: 'Frequent purging has caused **severe hypokalemia with ECG changes** and orthostasis: a cardiac risk, even though her weight looks fine. Shame and a trauma history drive the binge-purge cycle.',
      cards: [
        { h: 'The binge-purge cycle', b: ['Restrict (skip meals) → intense hunger → **binge** → guilt and fear of weight gain → **purge** → relief → restrict again.', 'Restriction sets up the next binge, which is why **regular meals** break the cycle.', 'Low serotonin signaling and reward-seeking dopamine changes may add to it.'] }
      ]
    },
    ph: {
      gist: 'First: **electrolyte imbalance and decreased cardiac output** (from purging). Then **ineffective coping**, **chronic low self-esteem**, **body image** and **social isolation**.'
    },
    gs: {
      gist: 'Outcomes: potassium and the ECG stay normal; **no binge-purge episodes**; she eats **3 planned meals plus snacks**; she names her **triggers** and uses other coping skills; and she challenges “forbidden food” thoughts.'
    },
    ta: {
      gist: 'Replace electrolytes and monitor; **structured, regular meals**; **observe for 1–2 hours after meals** and supervise the bathroom; teach the binge-purge cycle and **planned eating**; **CBT** (first line) to challenge distorted thoughts; journal triggers; treat comorbid depression; **fluoxetine** (FDA approved for bulimia, at higher doses).',
      cards: [
        { h: 'Medications', b: ['**Fluoxetine** is FDA approved for bulimia in adults (dose higher than for depression); other SSRIs, TCAs and an MAOI have shown benefit.', '**Bupropion is contraindicated** (seizure risk with purging and electrolyte loss).'] },
        { h: 'Teaching', b: ['Fasting sets up the next binge: eat regularly.', 'Signs of low potassium (weakness, palpitations) and when to seek care.', 'Laxatives and diuretics don’t prevent calorie absorption; stopping diuretics causes temporary **rebound edema**, which isn’t fat and passes.', 'Rinse your mouth with water after vomiting; dental care.'] }
      ]
    },
    eo: {
      gist: 'Track **potassium and the ECG**, the number of binge-purge episodes (journal), adherence to meal plans, use of coping skills and mood.'
    }
  }
}
);
