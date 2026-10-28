// Think it through — Chapter 53 — assessment of the endocrine system. Format: see data/e3/cj/README.md.
module.exports = [
  {
    id: 'endo-aging', sys: 'Hormones & glucose', name: 'The pancreas, thyroid and parathyroid glands, and endocrine aging',
    guide: ['53:0', '53:1'],
    topics: ['53-pituitary-thyroid-parathyroid-and-pancre', '53-aging-and-covid-19-what-changes-in-the-g'],
    nodes: ['endo-axis', 'thyroid', 'calcium', 'insulin'], drugs: [],
    patient: 'An 84-year-old in long-term care is always cold, drinks little, and has a foot sore that hasn’t healed in three weeks.',
    report: [
      'The 84-year-old resident is newly confused with dry mucous membranes, low urine output and a sodium of 151 mEq/L; temperature 96.6°F, HR 56. A foot wound hasn’t healed in 3 weeks.',
      'Drinks little; no diabetes or thyroid diagnosis on record.',
      'Dehydration, likely from reduced ADH reserve and low intake; the slow-healing wound, persistent low temperature and slow heart rate go beyond expected aging.',
      'Requesting orders for fluids and a BMP, and screening for diabetes (glucose, A1C) and thyroid function (TSH).'
    ],
    steps: {
      rc: {
        gist: 'Expected aging changes look like **mild hypothyroidism and mild diabetes**: less cold tolerance, lower heart rate and BP, less appetite, **dilute urine and dehydration risk**, thinner skin and bone loss, higher fasting glucose. The cues that go **beyond** aging: temperature consistently **below 97°F**, heart rate consistently **below 60**, a wound **not healed in 2 weeks**, thirst or hunger that won’t stop, new constipation or slowed thinking.',
        terms: [
          { t: 'Dilute urine and dehydration (less ADH)', see: 'Pale urine even when intake is low; dry mouth, confusion, rising sodium.',
            why: 'Older adults release **less ADH (vasopressin)**, so the kidneys can’t concentrate urine and conserve water when intake falls.',
            means: '**High dehydration risk** — assess often and offer fluids **at least every 2 hours** while awake unless restricted.' },
          { t: 'Bone loss, thin skin and cystitis (less estrogen)', see: 'Fractures, skin tears, dry perineal and vaginal tissue, UTIs.',
            why: 'Estrogen supports **bone density**, skin thickness and the health of perineal and vaginal tissue.',
            means: 'Weight-bearing exercise, protein, about **2 L of fluid** a day unless restricted, skin protection and perineal care.' },
          { t: 'Higher glucose, slow healing and yeast infections (less glucose tolerance)', see: 'Elevated fasting or random glucose, wounds that heal slowly, repeated vaginal yeast infections, thirst and frequent urination.',
            why: 'Cells respond less to insulin with age, and **high glucose impairs healing and feeds yeast**.',
            means: 'Suggest **diabetes testing** for a wound not healed in 2 weeks, persistent candidiasis, or lasting hunger, thirst or fatigue.' },
          { t: 'Cold intolerance and a lower heart rate (slower metabolism)', see: 'Feels cold, less appetite, lower HR and BP.',
            why: 'The **basal metabolic rate** falls with age.',
            means: 'Dress in layers. A temperature **consistently below 97°F**, HR **consistently below 60**, lethargy, new constipation or slowed speech suggest **hypothyroidism** — report for testing.' }
        ],
        cards: ['53-aging-and-covid-19-what-changes-in-the-g > The general rule', '53-aging-and-covid-19-what-changes-in-the-g > Less ADH',
          '53-aging-and-covid-19-what-changes-in-the-g > Less estrogen', '53-aging-and-covid-19-what-changes-in-the-g > Less glucose tolerance',
          '53-aging-and-covid-19-what-changes-in-the-g > Slower general metabolism']
      },
      ac: {
        gist: 'The glands run on **feedback**: **TRH → TSH → T3/T4**, with high hormone switching the axis off; **PTH** raises calcium from bone, kidney (and vitamin D) and gut while **calcitonin** lowers it; the pancreas’s **alpha cells make glucagon** (raises glucose) and **beta cells make insulin** (the only hormone that lowers it). Aging generally means **less** gland function and hormone.',
        terms: [
          { t: 'The thyroid axis', see: 'TRH (hypothalamus) → TSH (pituitary) → T3 and T4 (thyroid).',
            why: '**Negative feedback**: high T3/T4 switch off TRH and TSH; low levels turn them up. Cold and stress raise TRH. **T4 is converted to T3**, the most active form, inside cells.',
            means: 'Read TSH **against** the thyroid hormone level — high TSH with low T4 means the thyroid itself is failing.' },
          { t: 'What thyroid hormone does', see: 'Sets the metabolic rate, heat, heart rate and force, breathing, gut secretion and muscle tone.',
            why: 'It enters cells and switches on the genes that set the **basal metabolic rate**, so every tissue uses more oxygen and makes more heat.',
            means: 'Too much speeds every system; too little slows every system — the basis of chapter 55.' },
          { t: 'PTH and calcitonin', see: 'PTH raises serum calcium; calcitonin lowers it.',
            why: '**PTH** releases calcium from **bone**, makes the **kidney** keep calcium and excrete phosphorus and **activate vitamin D**, which raises **gut** absorption. Low calcium raises PTH; high calcium lowers it. **Calcitonin** reduces release from bone.',
            means: 'The parathyroids sit on the back of the thyroid — after thyroid surgery calcium can fall within hours.' },
          { t: 'Glucagon, insulin and somatostatin', see: 'Alpha cells → glucagon · beta cells → insulin · delta cells → somatostatin.',
            why: '**Glucagon raises glucose** when it falls; **insulin lowers it** by moving it into cells and storing fuel; somatostatin inhibits both. Growth hormone, cortisol, epinephrine and thyroid hormone also push glucose **up**.',
            means: 'Insulin is the **only** hormone that lowers glucose — which is why so many illnesses and drugs raise it.' }
        ],
        cards: ['53-pituitary-thyroid-parathyroid-and-pancre > Control — the thyroid axis', '53-pituitary-thyroid-parathyroid-and-pancre > T3 and T4 set the metabolic rate',
          '53-pituitary-thyroid-parathyroid-and-pancre > What thyroid hormones do (Box 53.2)', '53-pituitary-thyroid-parathyroid-and-pancre > Parathyroid hormone (PTH) raises calcium',
          '53-pituitary-thyroid-parathyroid-and-pancre > Calcitonin', '53-pituitary-thyroid-parathyroid-and-pancre > Pancreas — two jobs',
          '53-pituitary-thyroid-parathyroid-and-pancre > Glucagon, insulin, somatostatin']
      },
      ph: {
        gist: '**Dehydration** first (low ADH reserve plus blunted thirst), then **falls and fractures**, **skin injury and infection**, and **missing a real endocrine disorder** that looks like normal aging.',
        cards: []
      },
      gs: {
        gist: 'Separate **normal aging from disease** by comparing with the client’s **own baseline**; prevent dehydration, injury and infection; screen for **diabetes and thyroid disease** when cues go beyond aging.',
        cards: []
      },
      ta: {
        gist: 'Offer fluids **at least every 2 hours** while awake (unless restricted); weight-bearing exercise and protein; skin and perineal care; dress in layers; teach the **signs of diabetes to report**; report a temperature consistently below 97°F, HR consistently below 60, or a wound not healed in 2 weeks.',
        cards: ['53-pituitary-thyroid-parathyroid-and-pancre > Making the hormone']
      },
      eo: {
        gist: 'Hydrated (intake meets needs, no orthostatic drop, clear thinking), skin intact, no falls; findings beyond aging referred for **testing**; the client or caregiver can name the signs to report.',
        cards: []
      }
    }
  },
  {
    id: 'endo-testing', sys: 'Hormones & glucose', name: 'Endocrine assessment and getting tests right',
    guide: ['53:2'],
    topics: ['53-endocrine-assessment-history-and-physica', '53-diagnostic-tests-and-the-nurse-s-job'],
    nodes: ['endo-axis'], drugs: [],
    patient: 'A client with a round face, a fat pad between the shoulders and purple stretch marks needs a 24-hour urine collection starting at 7 a.m.',
    report: [
      'The 24-hour urine collection that started at 0700 is invalid: a void at 1400 was discarded.',
      'Client being evaluated for adrenal hyperfunction; the collection was ordered to measure hormone output.',
      'The specimen can’t give an accurate result.',
      'Requesting to restart the collection tomorrow at 0700 with a new container. I will notify the lab and post a sign so every void is saved.'
    ],
    steps: {
      rc: {
        gist: 'Look for **the hormone’s fingerprints**: a **round face, truncal obesity, buffalo hump, purple striae and bruising** (cortisol excess); **exophthalmos**, a **visible thyroid** or a **bruit** (thyroid); **darkened skin** over joints and scars or **vitiligo** (adrenal hypofunction); **orthostatic changes**, edema or JVD (fluid hormones); **thirst, salt craving, rapid weight change**; changes in mood, menses and libido.',
        terms: [
          { t: 'Round face, buffalo hump, truncal obesity and purple striae', see: 'Moon face, a fat pad between the shoulders, a heavy trunk with thin limbs, reddish-purple stretch marks, easy bruising.',
            why: 'Excess **cortisol** redistributes fat to the face and trunk and **breaks down protein**, which thins the skin and vessel walls — so the skin tears into striae and bruises easily.',
            means: 'Points to **adrenocortical excess** — expect high glucose, infections and slow healing.' },
          { t: 'Darkened skin over joints and scars', see: 'Bronze or tan skin, especially over knuckles, elbows, knees and scars.',
            why: 'When the adrenal glands fail, the pituitary makes more **ACTH**; ACTH and **MSH** (made from the same precursor) stimulate **melanocytes**.',
            means: 'A clue to **primary adrenal hypofunction** — check BP for orthostatic drops and ask about salt craving.' },
          { t: 'A visible thyroid, bruit or exophthalmos', see: 'The gland is seen when the client swallows; a whooshing sound over it; protruding eyes.',
            why: 'The thyroid is **normally not visible**; an enlarged, overactive gland has more blood flow (bruit); Graves antibodies swell the tissues behind the eye.',
            means: 'Needs further assessment. **Do not palpate** the thyroid if hyperthyroidism is possible — it can trigger **thyroid storm**.' },
          { t: 'Excessive thirst and salt craving', see: 'Drinking large amounts; craving salty foods.',
            why: 'Thirst: too little **AVP (ADH)** or kidneys that don’t respond to it, so water is lost in the urine — or high glucose. Salt craving: the adrenals make too little **aldosterone**, so sodium is lost.',
            means: 'Track intake and output, weight and orthostatic vital signs.' },
          { t: 'Orthostatic changes, edema and JVD', see: 'BP falls and pulse rises on standing; swelling; distended neck veins.',
            why: 'Hormones such as **aldosterone and ADH** control sodium and water — too little drops volume, too much expands it.',
            means: 'Record orthostatic BP and pulse lying, sitting and standing as a baseline.' }
        ],
        cards: ['53-endocrine-assessment-history-and-physica > Inspection — general and head', '53-endocrine-assessment-history-and-physica > Inspection — skin',
          '53-endocrine-assessment-history-and-physica > Inspection — body', '53-endocrine-assessment-history-and-physica > Nutrition clues']
      },
      ac: {
        gist: 'Every endocrine problem is **too much hormone, too little, or a poor response**. Most hormones run in **negative-feedback loops**, so a level means something only next to the hormone that drives it — and many are released in **pulses**, so timing and collection decide whether the number is true.',
        terms: [
          { t: 'Provocative and suppression tests', see: 'A measured dose of a stimulating or suppressing substance, then hormone levels.',
            why: '**Provocative**: if the gland is underactive, a stimulating hormone **fails to raise** its output. **Suppression**: if the gland is overactive, a suppressing substance **fails to lower** it.',
            means: 'The test drug must be given **exactly on time** — set an alarm if it is due overnight.' },
          { t: 'Why a 24-hour urine', see: 'All urine collected for exactly 24 hours.',
            why: 'Many hormones are released in **pulses**, so one sample can catch a peak or a trough. A full day’s output shows the gland’s real activity.',
            means: '**One discarded void ruins the test.**' }
        ],
        cards: ['53-diagnostic-tests-and-the-nurse-s-job > Provocative and suppression tests', '53-diagnostic-tests-and-the-nurse-s-job > Which fluid']
      },
      ph: {
        gist: '**Accurate results** depend on the specimen and timing; **safety** (no thyroid palpation in possible hyperthyroidism, orthostatic falls); and the client’s **self-image and coping** with changes in appearance, mood and sexuality.',
        cards: ['53-endocrine-assessment-history-and-physica > Action alert', '53-endocrine-assessment-history-and-physica > Psychosocial']
      },
      gs: {
        gist: 'Collect every specimen **exactly right**, give test drugs **on time**, and teach the client and staff their part so the result reflects the gland, not the bedside.',
        cards: ['53-diagnostic-tests-and-the-nurse-s-job > Blood draws done right (Box 53.5)']
      },
      ta: {
        gist: '24-hour urine: **preservative in the container first**; **empty the bladder and discard that urine** — the clock starts then; save **all** urine for exactly 24 hours; **empty the bladder at the end** and add it; keep it cold if required, away from food. Blood: right tube and timing, **catecholamines on ice to the lab at once**, never draw from a double- or triple-lumen line.',
        cards: ['53-diagnostic-tests-and-the-nurse-s-job > 24-hour urine (Box 53.5)', '53-endocrine-assessment-history-and-physica > Palpating the thyroid']
      },
      eo: {
        gist: 'A **complete, valid** specimen and on-time test doses; the client explains the procedure in their own words (**teach-back**).',
        cards: []
      }
    }
  }
];
