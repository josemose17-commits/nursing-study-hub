// Think it through — Chapter 55 — thyroid and parathyroid conditions. Format: see data/e3/cj/README.md.
module.exports = [
  {
    id: 'hypothyroid', sys: 'Hormones & glucose', name: 'Hypothyroidism and myxedema coma',
    guide: ['55:0'],
    topics: ['55-hypothyroidism-the-cellular-regulation-e', '55-myxedema-coma'],
    nodes: ['hypothyroid', 'thyroid'], drugs: ['levothyroxine'],
    patient: 'A 72-year-old says she has been tired and cold for months, is constipated and has gained weight without eating more.',
    report: [
      'The client with hypothyroidism is increasingly lethargic and difficult to arouse; RR 10 and shallow, temperature 94.8°F (34.9°C), HR 48, BP 88/50.',
      'Hypothyroidism on levothyroxine; family reports missed doses this week. Received an opioid for pain 3 hours ago.',
      'Hypoventilation, hypothermia, bradycardia and hypotension with decreasing LOC — I am concerned about myxedema coma.',
      'Please evaluate now. I have positioned the airway and applied oxygen per protocol; requesting a glucose and sodium level and orders for IV thyroid hormone.'
    ],
    steps: {
      rc: {
        gist: 'Signs of a **hypometabolic state** that develop **gradually**: cold intolerance, fatigue, constipation, weight gain, **bradycardia**, **hypoventilation**, and **myxedema** (periorbital edema, macroglossia, hoarseness, nonpitting edema). Compare with the client’s **baseline a year ago**.',
        terms: [
          { t: 'Cold intolerance and hypothermia', see: 'Wears a sweater in warm weather; temperature below 97°F (36.1°C).',
            why: 'Thyroid hormone (T3) drives heat production: it increases the number of **Na⁺/K⁺-ATPase pumps** and mitochondrial activity in nearly every cell, and running them burns fuel and releases heat. With too little T3, cells burn less fuel, so the body makes less heat (**decreased thermogenesis**).',
            means: 'A direct reading of the metabolic rate. A temperature that keeps falling — especially with a falling level of consciousness — points toward **myxedema coma**.' },
          { t: 'Fatigue, lethargy and somnolence', see: 'Sleeps more, tires with ordinary activity, slow to respond.',
            why: 'Lower T3 means **less cellular energy turnover** in muscle and brain, and slower nerve and muscle function.',
            means: 'Gradual, so ask about activity **compared with a year ago**. Increasing somnolence is a red flag for myxedema coma.' },
          { t: 'Bradycardia (HR < 60) and decreased cardiac output', see: 'Slow pulse, low activity tolerance, dyspnea on exertion.',
            why: 'T3 normally raises heart rate and contractility (in part by increasing **beta-adrenergic receptors** in the heart). Without it the heart beats slower and weaker, and the myocardium becomes **flabby** with enlarged chambers, so **cardiac output falls**.',
            means: 'This is why **decreased perfusion** is a priority problem — and why replacement starts low: suddenly raising metabolic demand on this heart can cause **angina, dysrhythmias or MI**.' },
          { t: 'Hypoventilation', see: 'Slow, shallow respirations; SpO₂ may drop.',
            why: 'Low thyroid hormone **blunts the brain’s drive to breathe** in response to low oxygen and high CO₂, and weakens the respiratory muscles, so CO₂ builds up.',
            means: 'The **top priority** (impaired gas exchange). **Sedatives and opioids** depress breathing further — avoid them or expect a reduced dose, and monitor RR and SpO₂.' },
          { t: 'Myxedema: periorbital edema and nonpitting edema', see: 'Puffy face and eyelids; firm swelling of the hands, feet and shins that does not keep a dent.',
            why: '**Glycosaminoglycans** (water-attracting protein–sugar molecules such as hyaluronic acid) build up in the skin and tissues and **hold water in a gel**. The water is bound in that matrix rather than loose in the tissue spaces, so pressing does not push it away — the edema is **nonpitting**.',
            means: 'Distinguishes myxedema from heart-failure or kidney edema, which **pits**. It also explains the thick tongue and the hoarse voice.' },
          { t: 'Macroglossia and hoarseness', see: 'Enlarged, thick tongue; slow or slurred speech; deep, hoarse voice.',
            why: 'The same **glycosaminoglycan deposits** enlarge the tongue and thicken the **vocal cords**.',
            means: 'An **airway** consideration — a large tongue can obstruct the airway in a sedated or obtunded client. Slurred speech here is from the tongue, not necessarily a stroke, but assess neurologic status.' },
          { t: 'Constipation', see: 'Fewer, harder stools.',
            why: 'Low T3 slows **GI smooth-muscle activity** (decreased peristalsis, or **hypomotility**).',
            means: 'Also a dosing clue on treatment: constipation and more sleep suggest **underreplacement**.' },
          { t: 'Weight gain without overeating', see: 'Weight up compared with a year ago despite a normal or lower appetite.',
            why: 'A lower **basal metabolic rate** burns fewer calories at rest, and myxedema adds retained water.',
            means: 'Weigh and compare with the past year; weight should stabilize on replacement.' },
          { t: 'Dry, coarse, cool, pale skin and hair loss', see: 'Dry scaly skin, brittle hair, loss of the outer eyebrows, poor wound healing.',
            why: 'Less **sweat and sebaceous secretion**; **skin vessels constrict** to conserve heat (cool, pale); slower cell turnover and protein synthesis slow hair growth and **wound healing**.',
            means: 'Protect skin integrity; expect slower healing after injury or surgery.' },
          { t: 'Decreased deep tendon reflexes', see: 'Sluggish reflexes, with a slow relaxation phase.',
            why: 'Muscle fibers **contract and relax more slowly** when their metabolic rate is low.',
            means: 'A classic physical-exam sign of hypothyroidism.' },
          { t: 'Cognitive slowing, apathy and depression', see: 'Slow answers, poor memory and attention, withdrawn; the family often notices first.',
            why: 'Thyroid hormone supports **brain metabolism and neurotransmission**; when it is low, thinking and mood slow.',
            means: 'Can look like dementia or depression in older adults. A **worsening mental status** is the earliest warning of myxedema coma — assess it at least every 8 hours.' },
          { t: 'Myxedema coma: hyponatremia, hypoglycemia, hypotension', see: 'Falling LOC with low sodium, low glucose and low BP.',
            why: 'Severe hormone deficiency impairs the kidneys’ ability to excrete free water (**dilutional hyponatremia**), slows **glucose production** by the liver, and lowers cardiac output (**hypotension**).',
            means: 'Each one is treated in the emergency box: saline, IV glucose, IV thyroid hormone, airway. **Do not wait for labs** to act.' }
        ],
        cards: ['55-hypothyroidism-the-cellular-regulation-e > Ask', '55-hypothyroidism-the-cellular-regulation-e > See',
          '55-hypothyroidism-the-cellular-regulation-e > Measure', '55-hypothyroidism-the-cellular-regulation-e > Mind and mood',
          { ref: '55-myxedema-coma > What you see', tag: 'If it worsens', as: 'Myxedema coma — what you see' }]
      },
      ac: {
        gist: 'Deficient T3/T4 lowers the **basal metabolic rate** in every tissue. **Elevated TSH with low free T4** = **primary hypothyroidism**: the gland fails and the pituitary keeps signaling — most often **Hashimoto thyroiditis**.',
        terms: [
          { t: 'TSH elevated, free T4 low', see: 'TSH above 5 μU/mL with low T3/T4.',
            why: '**Negative feedback**: the pituitary releases TSH until it senses enough thyroid hormone. When the gland cannot respond, hormone stays low and the pituitary keeps raising TSH.',
            means: '**Primary hypothyroidism** (the problem is in the thyroid). TSH low or normal with low T4 points to a **secondary** (pituitary or hypothalamic) cause. On treatment, TSH guides the dose.' },
          { t: 'Goiter', see: 'Enlarged thyroid at the front of the neck.',
            why: 'Persistently high **TSH stimulates thyroid cells to grow** even though they cannot make more hormone (for example, with iodine deficiency or Hashimoto).',
            means: 'A goiter says “thyroid problem,” **not which direction** — Graves disease also causes one.' },
          { t: 'Hashimoto thyroiditis', see: 'The most common cause in the US.',
            why: 'An **autoimmune** attack destroys thyroid tissue, so the gland gradually loses the ability to make hormone.',
            means: 'Permanent → **lifelong replacement**. Other causes to ask about: thyroid surgery, radioactive iodine, **amiodarone, lithium**.' }
        ],
        cards: ['55-hypothyroidism-the-cellular-regulation-e > Definition', '55-hypothyroidism-the-cellular-regulation-e > Causes (Box 55.1)',
          '55-hypothyroidism-the-cellular-regulation-e > Labs (Table 55.1)', '55-hypothyroidism-the-cellular-regulation-e > Who',
          '55-hypothyroidism-the-cellular-regulation-e > What it is and who gets it > Older adults']
      },
      ph: {
        gist: '1. **Impaired gas exchange** from hypoventilation. 2. **Decreased cardiac output** and perfusion. 3. Risk for **myxedema coma**, which is fatal mostly through **respiratory failure**.',
        cards: ['55-hypothyroidism-the-cellular-regulation-e > Priority problems',
          { ref: '55-myxedema-coma > What it is', as: 'Myxedema coma — what it is' }, { ref: '55-myxedema-coma > Triggers', as: 'Myxedema coma — triggers' }]
      },
      gs: {
        gist: 'Maintain **ventilation and perfusion**; start **levothyroxine at a low dose and titrate slowly** by TSH and symptoms; teach **lifelong** replacement with self-monitoring.',
        cards: ['55-hypothyroidism-the-cellular-regulation-e > Levothyroxine — how to give it', '55-hypothyroidism-the-cellular-regulation-e > Self-monitoring and teaching']
      },
      ta: {
        gist: 'Monitor **RR, depth and SpO₂**; **avoid or reduce sedatives**; monitor HR, rhythm and BP; give **levothyroxine on an empty stomach** 30–60 minutes before breakfast; report **chest pain**. Myxedema coma: **patent airway**, IV saline, glucose and **IV thyroid hormone**, warm with **blankets**.',
        cards: ['55-hypothyroidism-the-cellular-regulation-e > Gas exchange', '55-hypothyroidism-the-cellular-regulation-e > Cardiac output',
          '55-hypothyroidism-the-cellular-regulation-e > Levothyroxine — drug alert',
          { ref: '55-myxedema-coma > Action alert', tag: 'If it worsens', as: 'Myxedema coma — action alert' },
          { ref: '55-myxedema-coma > Emergency care (Box 55.3)', tag: 'If it worsens', as: 'Myxedema coma — emergency care' },
          { ref: '55-myxedema-coma > IV hormone and drug cautions', tag: 'If it worsens', as: 'Myxedema coma — IV hormone and drug cautions' }]
      },
      eo: {
        gist: '**HR above 60**, **SpO₂ above 93%**, improving cognition. Dose check: more sleep and constipation suggest **underreplacement**; insomnia, palpitations and more frequent stools suggest **overreplacement**.',
        cards: ['55-hypothyroidism-the-cellular-regulation-e > Evaluate']
      }
    }
  },
  {
    id: 'hyperthyroid', sys: 'Hormones & glucose', name: 'Hyperthyroidism and Graves disease',
    guide: ['55:1'],
    topics: ['55-hyperthyroidism-and-graves-disease', '55-treating-hyperthyroidism-drugs-radioacti'],
    nodes: ['hyperthyroid', 'thyroid'], drugs: ['methimazole', 'ptu', 'sski', 'rai131', 'propranolol'],
    patient: 'A 34-year-old has lost 15 lb in two months despite eating more, feels hot and shaky, can’t sleep, and her eyes look like they are bulging.',
    report: [
      'The client has a resting HR of 118, BP 152/58, a 15-lb weight loss over 2 months with increased appetite, tremor, heat intolerance and exophthalmos.',
      'No thyroid history; her mother has Graves disease.',
      'Findings consistent with hyperthyroidism, likely Graves disease, with tachycardia and a wide pulse pressure.',
      'Requesting TSH, free T4 and TRAb, an ECG, and an order for a beta blocker for symptom control.'
    ],
    steps: {
      rc: {
        gist: 'Signs of a **hypermetabolic state with sympathetic overactivity**: **heat intolerance** and diaphoresis, **weight loss despite increased appetite**, **tachycardia**, palpitations, **wide pulse pressure**, atrial fibrillation, **tremor**, hyperreflexia, insomnia, anxiety, more frequent stools — plus **exophthalmos** and a **goiter** in Graves disease.',
        terms: [
          { t: 'Heat intolerance and diaphoresis', see: 'Feels hot in a cool room, sweats, wears light clothes in cold weather — often the **first** symptom.',
            why: 'Excess thyroid hormone drives every cell to **burn more fuel**, which produces more heat. The body sheds it by sweating and dilating skin vessels.',
            means: 'Keep the room **cool**, change damp linens. A **rising temperature** may be the start of **thyroid storm** — report a rise of even 1°F.' },
          { t: 'Weight loss with increased appetite', see: 'Eating more but losing weight; muscle wasting.',
            why: 'Calories are burned faster than they are eaten, and **protein breakdown exceeds protein building**. Glucose tolerance also falls.',
            means: '**Imbalanced nutrition** is a priority problem: weigh regularly and meet the increased calorie needs.' },
          { t: 'Tachycardia, palpitations and atrial fibrillation', see: 'Resting pulse over 100, irregular rhythm, chest pain or dyspnea.',
            why: 'Thyroid hormone increases the heart’s **beta-adrenergic receptors** and its sensitivity to catecholamines, speeding the rate and raising contractility. It also shortens the atrial refractory period, which favors **atrial fibrillation**.',
            means: 'Check the **apical** pulse and BP at least every 4 hours. **Beta blockers** (propranolol) control these effects while the antithyroid drug takes weeks to work.' },
          { t: 'Wide pulse pressure', see: 'Systolic up, diastolic down — e.g., 152/58.',
            why: 'A stronger, faster heart pumps more blood with each beat (**higher systolic**), while skin vessels dilate to release heat (**lower diastolic**).',
            means: 'Reflects a **high cardiac output** state — the heart is working hard, with risk of heart failure in older adults.' },
          { t: 'Tremor, hyperreflexia, anxiety and insomnia', see: 'Fine tremor of the hands, brisk reflexes, restless, irritable, emotional swings, can’t sleep.',
            why: 'Excess hormone makes nerves and muscles **more excitable** and amplifies the **sympathetic** response.',
            means: 'A **quiet, low-stimulation room** and rest; explain the mood changes to the family. Muscle weakness can also develop.' },
          { t: 'More frequent stools', see: 'Frequent, loose stools.',
            why: 'Increased **GI motility**.',
            means: 'Adds to weight loss and dehydration risk.' },
          { t: 'Exophthalmos (Graves only)', see: 'Bulging eyes, a stare, tearing, redness, photophobia; lids may not close.',
            why: 'The Graves antibodies also inflame the tissues behind the eye: the **eye muscles and fat swell** and push the eyeball forward.',
            means: 'Risk of **dry eyes and corneal ulcers** and, with pressure on the optic nerve, **vision loss**. Often does **not** fully improve when the hormone level is treated.' },
          { t: 'Lid lag and globe lag', see: 'The upper lid lags behind the eye when looking down; it pulls back faster than the eye when looking up.',
            why: '**Sympathetic overactivity** keeps the eyelid muscle retracted.',
            means: 'Seen in **any** cause of hyperthyroidism, not only Graves.' },
          { t: 'Goiter with a bruit', see: 'Enlarged thyroid, sometimes 4 times normal size; a whooshing sound over it.',
            why: 'Thyroid-stimulating antibodies make the gland **grow**; the extra blood flow through it causes the **bruit**.',
            means: '**Look, don’t touch**: palpating the gland can release a flood of hormone and trigger **thyroid storm**.' }
        ],
        cards: ['55-hyperthyroidism-and-graves-disease > History', '55-hyperthyroidism-and-graves-disease > Eyes',
          '55-hyperthyroidism-and-graves-disease > Neck — look, don\'t touch', '55-hyperthyroidism-and-graves-disease > Heart, skin, muscles, mood']
      },
      ac: {
        gist: 'Excess thyroid hormone **speeds metabolism in every organ** and amplifies the sympathetic response. **Graves disease** (most common): **thyroid-stimulating immunoglobulins** bind the TSH receptor and drive the gland. Labs: **T3/T4 and free T4 high, TSH low**, TRAb positive.',
        terms: [
          { t: 'TSH low with high free T4 and T3', see: 'TSH below 0.3 μU/mL; free T4 above 2.8 ng/dL.',
            why: '**Negative feedback**: the pituitary senses too much thyroid hormone and stops releasing TSH.',
            means: 'The gland (or an antibody) is driving the excess — **primary** hyperthyroidism. A high TSH with high T4 would point to a rare pituitary cause.' },
          { t: 'Thyroid-stimulating immunoglobulins (TRAb)', see: 'Positive antibody test.',
            why: 'In Graves disease the immune system makes antibodies that **mimic TSH** and switch the gland on continuously.',
            means: '**Confirms Graves.** Autoimmune: ask about other autoimmune diseases and family history.' },
          { t: 'Radioactive iodine uptake increased', see: 'Uptake scan with a small oral dose of iodine-123.',
            why: 'An overactive gland **traps more iodine** to make hormone.',
            means: 'A small **diagnostic** dose of iodine-123 — not the therapeutic iodine-131 dose. Ask about **pregnancy and breastfeeding** first (iodine-123 passes into **breast milk**) and follow nuclear medicine’s instructions.' }
        ],
        cards: ['55-hyperthyroidism-and-graves-disease > Definition', '55-hyperthyroidism-and-graves-disease > Graves disease — the most common cause',
          '55-hyperthyroidism-and-graves-disease > Other causes', '55-hyperthyroidism-and-graves-disease > Tests']
      },
      ph: {
        gist: '1. **Decreased cardiac output** — tachycardia and dysrhythmias. 2. Risk for **thyroid storm**. 3. **Imbalanced nutrition** from hypermetabolism. 4. Risk for **eye injury** from exophthalmos.',
        cards: ['55-treating-hyperthyroidism-drugs-radioacti > Monitor']
      },
      gs: {
        gist: '**Lower hormone production** (methimazole, radioactive iodine or surgery), **block the sympathetic effects** with a beta blocker meanwhile, **reduce metabolic demand** (rest, cool and quiet), meet calorie needs, and **protect the eyes**.',
        terms: [
          { t: 'Why treatment is slow', see: 'Weeks before methimazole or radioactive iodine brings relief.',
            why: 'The gland is **full of stored hormone**. Methimazole stops **new** hormone from being made, and RAI destroys cells, but neither stops the stored hormone from being released.',
            means: '**Beta blockers** treat the effects in the meantime. **Iodine (SSKI)** is the fast one before surgery — it reduces the gland’s blood flow and hormone release.' }
        ],
        cards: ['55-treating-hyperthyroidism-drugs-radioacti > Thionamides — first treatment', '55-treating-hyperthyroidism-drugs-radioacti > Beta blockers',
          '55-treating-hyperthyroidism-drugs-radioacti > How it works']
      },
      ta: {
        gist: '**Apical pulse, BP and temperature at least every 4 hours** — report any **1°F rise**; quiet, **cool** room and rest; ice water and dry linens; **artificial tears**, dark glasses, head of bed raised at night; give methimazole and propranolol; **SSKI diluted, 1 hour after the thionamide**; teach RAI precautions; **never palpate the goiter**.',
        cards: ['55-treating-hyperthyroidism-drugs-radioacti > Reduce stimulation', '55-treating-hyperthyroidism-drugs-radioacti > Comfort',
          '55-treating-hyperthyroidism-drugs-radioacti > Iodine (SSKI)', '55-treating-hyperthyroidism-drugs-radioacti > Precautions at home (Box 55.5)',
          { ref: '55-thyroidectomy-and-thyroid-storm > Graves eye care > Eyes', as: 'Graves eye care' }]
      },
      eo: {
        gist: 'Heart rate controlled, **no temperature rise**, weight stable, eyes protected. Then watch for the opposite: **hypothyroidism** after RAI or surgery (weight gain, slow pulse, cold intolerance) — follow-up thyroid tests continue for years.',
        cards: ['55-treating-hyperthyroidism-drugs-radioacti > Thionamide teaching', '55-treating-hyperthyroidism-drugs-radioacti > Afterward']
      }
    }
  },
  {
    id: 'thyroid-storm', sys: 'Hormones & glucose', name: 'Thyroidectomy and thyroid storm',
    guide: ['55:1'],
    topics: ['55-thyroidectomy-and-thyroid-storm'],
    nodes: ['hyperthyroid', 'calcium'], drugs: ['cagluconate', 'propranolol', 'methimazole', 'ptu', 'sski'],
    patient: 'Six hours after a total thyroidectomy for Graves disease, a client says her lips feel tingly and her voice is hoarse.',
    report: [
      'Six hours after a total thyroidectomy, the client reports tingling around the lips and fingertips; Chvostek sign positive; voice hoarse but unchanged; no stridor, SpO₂ 96%, dressing dry front and back.',
      'Graves disease; total thyroidectomy this morning.',
      'Probable hypocalcemia from parathyroid injury; the airway is currently stable.',
      'Requesting a stat serum calcium and an order for IV calcium gluconate. Emergency airway equipment is at the bedside.'
    ],
    steps: {
      rc: {
        gist: 'After thyroid surgery: **stridor**, dyspnea, **bleeding behind the neck**, **tingling around the mouth and fingers**, twitching, **Chvostek and Trousseau signs**, and **hoarseness**. Thyroid storm: **fever and tachycardia**, then agitation, delirium, vomiting, diarrhea, seizures.',
        terms: [
          { t: 'Laryngeal stridor', see: 'Harsh, high-pitched sound on breathing in; dyspnea, falling SpO₂, drooling, can’t swallow.',
            why: 'The upper airway is **narrowing** — from a **hematoma** pressing on the trachea, swelling, **laryngospasm** from low calcium, or injury to both laryngeal nerves.',
            means: '**Acute airway obstruction** → call the **Rapid Response Team**. Keep the tracheostomy tray, oxygen and suction in the room.' },
          { t: 'Bleeding behind the neck', see: 'Dressing dry in front but blood pooled at the back of the neck; neck feels tight; respiratory distress.',
            why: 'Blood flows down with **gravity** to the back of the neck. A **hematoma** in the closed neck can **compress the trachea**.',
            means: 'Most likely in the **first 24 hours**. Check behind the neck every time you check the dressing. Moderate serosanguineous drainage in the drain is expected.' },
          { t: 'Perioral and fingertip tingling, muscle twitching', see: 'Numbness or tingling of the lips, fingers and toes; twitching of the face.',
            why: 'The **parathyroid glands** sit on the back of the thyroid and can be removed, bruised or lose blood supply. **PTH falls → calcium falls.** Calcium normally steadies nerve membranes, so low calcium makes nerves **fire too easily**.',
            means: 'Early sign of **hypocalcemia** → report, check calcium, have **IV calcium gluconate** ready. It can progress to tetany and **laryngospasm**.' },
          { t: 'Chvostek and Trousseau signs', see: 'Chvostek: tapping the facial nerve in front of the ear makes the corner of the mouth twitch. Trousseau: a BP cuff inflated on the arm causes a hand spasm.',
            why: 'Both show **neuromuscular irritability** from low calcium.',
            means: 'A positive sign means **report now** — tetany may be developing.' },
          { t: 'Hoarseness and a weak voice', see: 'Voice softer or rough after surgery.',
            why: 'Irritation or injury of the **recurrent laryngeal nerve**, which runs beside the thyroid and moves the vocal cords.',
            means: 'Usually **temporary** — check the voice every 2 hours. Hoarseness alone is common; **stridor is not**.' },
          { t: 'Thyroid storm: fever and tachycardia', see: 'High fever, HR often very fast, agitation, delirium, vomiting, diarrhea, seizures, coma.',
            why: 'A sudden release of thyroid hormone in **uncontrolled hyperthyroidism** drives the metabolic rate and sympathetic activity to extremes.',
            means: '**Life-threatening.** Report a temperature rise of **even 1°F** in any hyperthyroid client — even after thyroidectomy.' }
        ],
        cards: ['55-thyroidectomy-and-thyroid-storm > Hemorrhage', '55-thyroidectomy-and-thyroid-storm > Hypocalcemia and tetany',
          '55-thyroidectomy-and-thyroid-storm > Laryngeal nerve damage',
          { ref: '55-thyroidectomy-and-thyroid-storm > What you see', tag: 'Thyroid storm', as: 'Thyroid storm — what you see' }]
      },
      ac: {
        gist: 'Every complication is **anatomy**: the gland sits on the **trachea** (bleeding and swelling compress it), the **parathyroids** are on its back (calcium falls), and the **recurrent laryngeal nerves** run beside it (voice changes or airway closure). **Thyroid storm** is a surge of hormone in uncontrolled hyperthyroidism, triggered by **infection, trauma, surgery, DKA, pregnancy, RAI or palpating the goiter**.',
        terms: [
          { t: 'Why no aspirin in thyroid storm', see: 'Fever treated with acetaminophen, not aspirin.',
            why: 'Aspirin (a salicylate) **displaces thyroid hormone from its carrier proteins**, raising the **free**, active hormone and making the storm worse.',
            means: 'Use **acetaminophen** plus a cooling blanket or ice packs.' },
          { t: 'Why propranolol in thyroid storm', see: 'Oral propranolol for the heart rate.',
            why: 'Blocks the **beta-adrenergic** effects (racing heart, tremor) and also **slows conversion of T4 to the more active T3**.',
            means: 'Continuous cardiac monitoring; watch BP and heart rate.' },
          { t: 'Preparing the gland before surgery', see: 'Thionamides until euthyroid, then iodine for a short time.',
            why: 'A **euthyroid** client is far less likely to go into storm. **Iodine** shrinks the gland’s size and **blood supply**, so there is less bleeding.',
            means: 'Hypertension, dysrhythmias and tachycardia must be **controlled before surgery**.' }
        ],
        cards: ['55-thyroidectomy-and-thyroid-storm > When and how',
          { ref: '55-thyroidectomy-and-thyroid-storm > What and why', tag: 'Thyroid storm', as: 'Thyroid storm — what and why' }]
      },
      ph: {
        gist: '**Airway first**: obstruction from a hematoma, edema, laryngospasm (low calcium) or nerve injury. Then **hemorrhage**, **hypocalcemia and tetany**, and **thyroid storm**.',
        cards: ['55-thyroidectomy-and-thyroid-storm > Airway']
      },
      gs: {
        gist: 'Keep the **airway patent** with emergency equipment ready, find **bleeding and low calcium early**, and in thyroid storm: support the airway, **block hormone production** (thionamide, then iodide), **block the heart effects** (propranolol), **cool** the client and replace fluids.',
        cards: ['55-thyroidectomy-and-thyroid-storm > Before surgery']
      },
      ta: {
        gist: 'VS **every 15 minutes until stable**; **semi-Fowler**, neck supported, **no neck extension**; check the dressing **and behind the neck**; **trach tray, oxygen and suction** at the bedside; voice **every 2 hours**; ask about **tingling**, check Chvostek/Trousseau and calcium; **IV calcium gluconate** available; stridor or falling SpO₂ → **Rapid Response**. Storm: cooling, **acetaminophen**, propranolol, methimazole or PTU then iodide, glucocorticoids, continuous cardiac monitoring, normal saline.',
        cards: ['55-thyroidectomy-and-thyroid-storm > After surgery — the routine', '55-thyroidectomy-and-thyroid-storm > Critical rescue',
          { ref: '55-thyroidectomy-and-thyroid-storm > Emergency care (Box 55.6)', tag: 'Thyroid storm', as: 'Thyroid storm — emergency care' }]
      },
      eo: {
        gist: 'Airway patent, SpO₂ stable, **no hematoma**; calcium in range **without tetany**; voice stable or improving; temperature and heart rate normal. After a total thyroidectomy the client knows **replacement is lifelong**.',
        cards: ['55-thyroidectomy-and-thyroid-storm > Long-term teaching']
      }
    }
  },
  {
    id: 'hypopara', sys: 'Hormones & glucose', name: 'Hypoparathyroidism and hypocalcemia',
    guide: ['55:2'],
    topics: ['55-hypoparathyroidism-and-hyperparathyroidi'],
    nodes: ['pth', 'calcium'], drugs: ['cagluconate', 'calcitriol'],
    patient: 'A client who had neck surgery for thyroid cancer last year ran out of calcium pills a week ago and now has numb lips and cramping hands.',
    report: [
      'The client’s serum calcium is 6.9 mg/dL; reports perioral numbness and hand cramps; Trousseau sign positive. Voice normal, no stridor, SpO₂ 97%.',
      'Total thyroidectomy for thyroid cancer last year with hypoparathyroidism afterward; ran out of calcium carbonate and calcitriol a week ago.',
      'Symptomatic hypocalcemia with impending tetany.',
      'Requesting an order for IV calcium gluconate, a magnesium and phosphorus level, and cardiac monitoring. Seizure precautions are in place.'
    ],
    steps: {
      rc: {
        gist: '**Neuromuscular irritability** from low calcium: **numbness and tingling around the mouth and in the hands and feet**, muscle cramps, twitching, **carpopedal spasm**, **positive Chvostek and Trousseau signs**, and in severe cases **laryngospasm** and **seizures**.',
        terms: [
          { t: 'Perioral and digital paresthesias', see: 'Numbness or tingling around the mouth and in the fingers and toes.',
            why: 'Calcium normally sits on nerve membranes and **steadies the sodium channels**. When calcium is low, the channels open too easily, so nerves **fire spontaneously**.',
            means: 'The **earliest** sign — check the calcium and report.' },
          { t: 'Carpopedal spasm and tetany', see: 'Fingers, hands and elbows flex involuntarily; feet cramp.',
            why: 'Overexcitable nerves make the muscles **contract and stay contracted**.',
            means: 'Flexing of the fingers, hands and elbows signals **impending tetany** — an emergency.' },
          { t: 'Chvostek and Trousseau signs', see: 'Chvostek: tap in front of the ear → corner of the mouth twitches. Trousseau: BP cuff on the arm → hand spasm.',
            why: 'Both show that the nerves are **hyperexcitable**.',
            means: 'Positive = significant hypocalcemia → report.' },
          { t: 'Laryngospasm', see: 'Stridor, crowing respirations, difficulty breathing.',
            why: 'Tetany of the **muscles of the larynx** closes the airway.',
            means: '**Airway emergency** — IV calcium, rapid response, airway equipment.' },
          { t: 'Seizures', see: 'Seizures, often without loss of consciousness or incontinence; irritability up to psychosis.',
            why: 'Overexcitable **brain neurons**.',
            means: '**Seizure precautions**; IV calcium.' }
        ],
        cards: [{ ref: '55-hypoparathyroidism-and-hyperparathyroidi > Hypoparathyroidism — calcium too low > Ask and look', as: 'Ask and look' }]
      },
      ac: {
        gist: 'Too little **PTH** — most often after **thyroid or parathyroid surgery** — so the bones, kidneys and gut release less calcium: **calcium low, phosphorus high**, magnesium and PTH low.',
        terms: [
          { t: 'Low calcium with high phosphorus', see: 'Calcium below 9.0 mg/dL; phosphorus above 4.5 mg/dL.',
            why: 'PTH normally makes the kidney **keep calcium and excrete phosphorus**. Without it, calcium is lost and phosphorus builds up — they move in **opposite** directions.',
            means: 'This pattern points to the parathyroids.' },
          { t: 'Low magnesium', see: 'Magnesium below 1.3 mEq/L.',
            why: 'The parathyroids need **magnesium to release PTH**, so a low magnesium keeps the calcium low.',
            means: 'Calcium may not correct until **magnesium is replaced**.' },
          { t: 'Albumin and calcium', see: 'A low total calcium with a low albumin.',
            why: 'Much of the calcium in blood is carried on **albumin**; when albumin is low, the total calcium reads low even if the active (ionized) calcium is normal.',
            means: 'That is why **albumin** is checked with calcium — the provider may order an ionized calcium.' }
        ],
        cards: [{ ref: '55-hypoparathyroidism-and-hyperparathyroidi > Hypoparathyroidism — calcium too low > What and why', as: 'What and why' },
          '55-hypoparathyroidism-and-hyperparathyroidi > Diagnose', '55-hypoparathyroidism-and-hyperparathyroidi > Parathyroid labs']
      },
      ph: {
        gist: '**Airway** (laryngospasm), then **seizures** and **injury** from tetany; **cardiac dysrhythmias** from low calcium.',
        cards: []
      },
      gs: {
        gist: '**Raise calcium**: IV calcium gluconate for acute tetany; **oral calcium carbonate and calcitriol** long term; keep calcium in the **low-normal range** to prevent symptoms without kidney stones.',
        cards: ['55-hypoparathyroidism-and-hyperparathyroidi > Treat']
      },
      ta: {
        gist: '**IV calcium gluconate** per order with **cardiac monitoring** and a watched IV site; **seizure precautions**; airway equipment ready; check **every calcium result**; teach **lifelong** calcium and vitamin D, calcium-rich foods in moderation and a **medical alert bracelet**.',
        cards: ['55-thyroidectomy-and-thyroid-storm > Hypocalcemia and tetany']
      },
      eo: {
        gist: 'No tingling, twitching or spasm; **Chvostek and Trousseau negative**; calcium **low-normal**; airway clear; the client takes calcium and calcitriol daily and knows the early signs to report.',
        cards: []
      }
    }
  },
  {
    id: 'hyperpara', sys: 'Hormones & glucose', name: 'Hyperparathyroidism and hypercalcemia',
    guide: ['55:2'],
    topics: ['55-hypoparathyroidism-and-hyperparathyroidi'],
    nodes: ['pth', 'calcium'], drugs: ['cinacalcet'],
    patient: 'A 64-year-old woman has had two kidney stones this year, aching bones, constipation and is more forgetful. Her calcium is 12.4 mg/dL.',
    report: [
      'The client’s calcium is 12.8 mg/dL, up from 11.6; she is more confused today, nauseated and constipated; urine output adequate.',
      'Primary hyperparathyroidism awaiting parathyroidectomy; takes hydrochlorothiazide for hypertension.',
      'Worsening hypercalcemia with a change in mental status.',
      'Please evaluate. Requesting IV fluid orders, repeat calcium and kidney function, and a review of the thiazide.'
    ],
    steps: {
      rc: {
        gist: '“**Stones, bones, groans and moans**”: **kidney stones**, **bone pain, fractures and osteoporosis**, **anorexia, nausea, constipation and peptic ulcer**, and **fatigue, weakness and confusion** that worsen as calcium rises — above **12 mg/dL**, psychosis and coma.',
        terms: [
          { t: 'Kidney stones', see: 'Flank pain, hematuria; calcium deposits in the kidneys.',
            why: 'Excess calcium is filtered into the urine, where it **precipitates** into stones.',
            means: '**Hydration** prevents stones; strain urine if a stone is suspected.' },
          { t: 'Bone pain, fractures and osteoporosis', see: 'Aching bones, fractures with little trauma, loss of height.',
            why: 'PTH **speeds osteoclasts** (bone breakdown) and slows osteoblasts, pulling calcium out of bone.',
            means: 'Fragile bones: use a **lift sheet** to reposition — never pull; prevent falls; encourage weight-bearing activity.' },
          { t: 'Anorexia, nausea, constipation and peptic ulcer', see: 'Poor appetite, nausea, hard stools, epigastric pain.',
            why: 'High calcium makes smooth muscle **less excitable**, so the gut slows. It also raises **gastrin**, which increases stomach acid → **ulcers**.',
            means: 'Fluids, fiber, mobility; ask about epigastric pain and black stools.' },
          { t: 'Fatigue, weakness, lethargy and confusion', see: 'Tired, weak muscles, depressed, forgetful; confusion or psychosis at higher levels.',
            why: 'The opposite of low calcium: high calcium makes nerves and muscles **less excitable**.',
            means: 'Calcium **above 12 mg/dL** → confusion, coma and death if untreated. A change in mental status = **report now**.' }
        ],
        cards: [{ ref: '55-hypoparathyroidism-and-hyperparathyroidi > Hyperparathyroidism — calcium too high > Ask and look', as: 'Ask and look' }]
      },
      ac: {
        gist: 'Too much **PTH** → calcium pulled from **bone**, kept by the **kidney** and absorbed from the **gut**: **calcium high, phosphorus low**. **Primary**: a gland ignores calcium feedback (often an adenoma). **Secondary**: **vitamin D deficiency or chronic kidney disease** keeps calcium low, so PTH stays high.',
        terms: [
          { t: 'High calcium, low phosphorus, high PTH', see: 'Calcium above 10.5 mg/dL, phosphorus below 3, PTH above 65 pg/mL.',
            why: 'PTH makes the kidney **keep calcium and excrete phosphorus**, and releases calcium from bone.',
            means: 'Confirms **primary** hyperparathyroidism. Thiazide diuretics and lithium can also raise calcium — review the drug list.' }
        ],
        cards: [{ ref: '55-hypoparathyroidism-and-hyperparathyroidi > Hyperparathyroidism — calcium too high > What and why', as: 'What and why' }]
      },
      ph: {
        gist: '**Risk for injury** (fractures, falls, confusion), **kidney stones and kidney injury**, and after surgery a **hypocalcemic crisis** while the remaining glands recover.',
        cards: []
      },
      gs: {
        gist: '**Parathyroidectomy** — usually curative. Without surgery: **cinacalcet** to lower PTH, **bisphosphonates** for the bones, **hydration**, **activity** and **avoiding lithium**.',
        cards: ['55-hypoparathyroidism-and-hyperparathyroidi > Without surgery']
      },
      ta: {
        gist: 'Encourage **fluids** and **mobility** (no prolonged bed rest); move with a **lift sheet**; monitor calcium, kidney function and mental status. After parathyroidectomy: check **every calcium** result, ask about **tingling**, test **Chvostek and Trousseau**, and check the voice.',
        cards: ['55-hypoparathyroidism-and-hyperparathyroidi > Parathyroidectomy']
      },
      eo: {
        gist: 'Calcium back in range, no new stones or fractures, clearer thinking; after surgery, **no tetany** — and if calcium stays low, the client knows replacement may be **lifelong**.',
        cards: []
      }
    }
  }
];
