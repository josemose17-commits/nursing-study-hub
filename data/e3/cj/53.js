// Think it through — Chapter 53 — assessment of the endocrine system. Format: see data/e3/cj/README.md.
module.exports = [
  {
    id: 'endo-testing', sys: 'Hormones & glucose', name: 'Endocrine assessment and getting tests right',
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
