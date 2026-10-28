// The Exam 3 map's "Think it through" view: each condition laid out in the order of clinical judgment (NCSBN's six
// steps, as in ncjmm.js), so a tap goes condition → step → finding or cue card → the detail, the why, the drug, the
// video and the organ → molecule breakdown.
// Built by tools/build_cj_map.js into data/e3/cj-map.js. Run from the repo root: node tools/build_cj_map.js
//
// A condition:
//   id, sys (the map's system name), name, topics (its Map topic ids, for "All the notes" and its videos),
//   nodes (organ → molecule breakdown ids), drugs (drug-card ids), patient (one line that sets the scene),
//   report: an example SBAR report to the provider, [S, B, A, R] — the condition said the way a nurse says it,
//   steps: { rc, ac, ph, gs, ta, eo } — each { gist, terms?, cards }.
//   gist is this condition's answer to the step's question, in clinical language: plain text, **bold**.
//   terms explain findings one at a time: { t: the clinical term, see: what it looks like at the bedside,
//   why: the mechanism — why the body does it, means: what it tells the nurse and what to do }.
//   A card is 'topicId > label' (or 'topicId > box title > label' when a label repeats in a topic), optionally
//   { ref, as } to rename it or { ref, tag } to flag it (e.g. 'If it worsens'). The card's text, Quick bullets and its
//   box's Why come from the notes at build time, so those facts live in one place: data/e3/src.
//   Gists, terms and reports are written for this view: keep them consistent with the notes and the breakdowns.
module.exports = [
  {
    id: 'hypothyroid', sys: 'Hormones & glucose', name: 'Hypothyroidism and myxedema coma',
    topics: ['55-hypothyroidism-the-cellular-regulation-e', '55-myxedema-coma'],
    nodes: ['hypothyroid'], drugs: ['levothyroxine'],
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
    id: 'hypoglycemia', sys: 'Hormones & glucose', name: 'Hypoglycemia',
    topics: ['56-hypoglycemia-the-15-15-rule'],
    nodes: ['dm-acute'], drugs: ['glucagon', 'd50'],
    patient: 'A client on insulin is shaky, sweaty and slow to answer an hour after a late lunch tray never came.',
    report: [
      'The client’s blood glucose is 48 mg/dL; diaphoretic, confused and unable to swallow safely.',
      'Type 2 diabetes on insulin glargine and lispro; received lispro at noon and the lunch tray was delayed.',
      'Severe (level 3) hypoglycemia — the client needs assistance and cannot take anything by mouth. I gave glucagon per protocol and positioned the client on the side; recheck due in 15 minutes.',
      'Requesting an order for IV dextrose if it stays low, and a review of the insulin doses.'
    ],
    steps: {
      rc: {
        gist: 'Blood glucose **below 70 mg/dL** with **adrenergic (neurogenic) signs** — tremor, palpitations, anxiety, diaphoresis, hunger — progressing to **neuroglycopenic signs**: confusion, behavior change, seizures, loss of consciousness.',
        terms: [
          { t: 'Blood glucose below 70 mg/dL', see: 'Fingerstick or lab glucose under 70; under 54 is clinically significant (level 2).',
            why: 'Normally insulin release falls at about 83 mg/dL and glucagon and epinephrine rise at about 67 — the body’s defense. Insulin given by injection or a sulfonylurea keeps working regardless, so glucose keeps falling.',
            means: 'Below 70 → treat. **Severe** (level 3) is defined by **needing another person’s help**, not by a number.' },
          { t: 'Tremor, palpitations and anxiety (adrenergic)', see: 'Shaky hands, pounding or fast heart, nervousness.',
            why: 'Falling glucose triggers a **sympathetic surge**: **epinephrine** acts on beta receptors in the heart and muscle.',
            means: 'The **early warning**. **Beta blockers** blunt these signs, so a client on one may show few of them.' },
          { t: 'Diaphoresis, hunger and tingling (cholinergic)', see: 'Sweating, sudden hunger, tingling around the mouth or fingers.',
            why: 'Sweat glands are sympathetic but use **acetylcholine**, which is why sweating can persist even with a beta blocker; hunger and tingling are also cholinergic signals.',
            means: 'Sweating with cool, clammy skin is a strong clue — the opposite of the warm, dry skin of hyperglycemia.' },
          { t: 'Cool, clammy skin', see: 'Pale, cool and moist skin.',
            why: '**Epinephrine constricts skin vessels** while the sweat glands are active.',
            means: 'No dehydration and **no ketones** — this is not DKA or HHS.' },
          { t: 'Confusion and behavior change (neuroglycopenia)', see: 'Difficulty thinking, slurred speech, irritability, combativeness, unusual behavior.',
            why: '**Neurons depend on a continuous glucose supply** and store only minutes’ worth. When glucose falls, brain cells run out of energy and stop working normally.',
            means: 'The client may no longer be able to treat themselves or **swallow safely**, which changes the route of treatment. Can be mistaken for intoxication or a stroke — **check the glucose**.' },
          { t: 'Seizures and loss of consciousness', see: 'Unresponsive or seizing.',
            why: 'Severe brain **energy failure**; untreated, it can cause brain damage or death.',
            means: '**Severe hypoglycemia**: nothing by mouth; **glucagon or IV dextrose** now, side-lying position, protect the airway.' },
          { t: 'Hypoglycemia unawareness', see: 'Low glucose with few or no warning symptoms.',
            why: 'After years of diabetes or frequent lows, the **counterregulatory epinephrine response weakens**, so the early warning signs no longer appear.',
            means: 'These clients test more often and use **fingertip checks only**; older adults are at higher risk.' }
        ],
        cards: ['56-hypoglycemia-the-15-15-rule > Symptoms (Box 56.10)', '56-hypoglycemia-the-15-15-rule > Recognizing it > Older adults']
      },
      ac: {
        gist: 'The **brain depends on a continuous glucose supply** and cannot store it, so hypoglycemia quickly causes neurologic dysfunction. Usual cause: **insulin or a sulfonylurea** not matched to food intake or activity.',
        cards: ['56-hypoglycemia-the-15-15-rule > What happens', '56-hypoglycemia-the-15-15-rule > Causes']
      },
      ph: {
        gist: '**Airway and route**: can the client swallow safely? Altered LOC, seizures or an unsafe swallow = **severe hypoglycemia** requiring assistance — a medical emergency.',
        cards: ['56-hypoglycemia-the-15-15-rule > Severity and unawareness']
      },
      gs: {
        gist: '**Oral fast-acting carbohydrate** if alert with a safe swallow; **glucagon or IV dextrose** if not; then **complex carbohydrate + protein**, and identify the cause to prevent recurrence.',
        cards: ['56-hypoglycemia-the-15-15-rule > The 15-15 rule', '56-hypoglycemia-the-15-15-rule > 15 g examples (Box 56.11)']
      },
      ta: {
        gist: '**Below 70 → 15 g** fast carbohydrate (**30 g below 50**), **recheck in 15 minutes**, repeat until resolved. Unable to swallow → **glucagon** (position side-lying for emesis) or **IV dextrose** per protocol.',
        cards: ['56-hypoglycemia-the-15-15-rule > In the hospital', '56-hypoglycemia-the-15-15-rule > Can\'t swallow — glucagon and dextrose',
          '56-hypoglycemia-the-15-15-rule > Moderate and severe at home']
      },
      eo: {
        gist: '**Recheck every 15 minutes** until out of the low range, then **complex carbohydrate + protein**. Anticipate **recurrence** with sulfonylureas or long-acting insulin, and evaluate teaching of the 15-15 rule and glucagon.',
        cards: ['56-hypoglycemia-the-15-15-rule > Prevention and teaching']
      }
    }
  },
  {
    id: 'ugib', sys: 'Digestion & elimination', name: 'Peptic ulcer with upper GI bleeding',
    topics: ['47-peptic-ulcer-disease-the-infection-exemp', '47-upper-gi-bleeding-and-ulcer-emergencies'],
    nodes: ['pud', 'ugib'], drugs: ['pantoprazole', 'omeprazole', 'clarithromycin', 'amoxicillin'],
    patient: 'A client who takes ibuprofen every day for back pain vomits coffee-ground material and feels dizzy standing up.',
    report: [
      'The client vomited about 300 mL of coffee-ground emesis; HR 118, BP 92/58, dizzy and orthostatic on standing.',
      'Takes ibuprofen daily for chronic back pain; no known GI history.',
      'Suspected upper GI bleed with early hypovolemia. Two large-bore IVs are in and the client is NPO.',
      'Please evaluate now. Requesting a CBC, type and crossmatch, IV fluid orders and a GI consult for EGD.'
    ],
    steps: {
      rc: {
        gist: '**Hematemesis** (bright red or coffee-ground), **melena**, **tachycardia** with falling BP, **orthostatic hypotension**, and **new confusion** in an older adult — signs of **hypovolemia from GI blood loss**.',
        terms: [
          { t: 'Bright red hematemesis', see: 'Vomiting fresh red blood or clots.',
            why: 'Brisk, **active bleeding** at or above the duodenum: the blood comes up before stomach acid has time to change it.',
            means: 'Fast blood loss — ABCs, two large-bore IVs, report **now**.' },
          { t: 'Coffee-ground emesis', see: 'Dark brown, granular vomit.',
            why: 'Blood that **sat in the stomach** long enough for **gastric acid to turn hemoglobin brown**.',
            means: 'A slower or older bleed — still a bleed. Report it, measure it and trend the vital signs.' },
          { t: 'Melena', see: 'Black, sticky, tarry, foul-smelling stool.',
            why: 'Blood from the upper GI tract **digested on its way through the intestines** turns black.',
            means: 'Upper GI source (more common with duodenal ulcers). Bright red blood from the rectum usually means a lower source or a very fast upper bleed.' },
          { t: 'Tachycardia', see: 'Pulse rising, often before the BP falls.',
            why: 'Losing volume lowers venous return; **baroreceptors** sense the drop and trigger a **sympathetic response** that raises the heart rate to keep cardiac output up.',
            means: '**The earliest vital-sign warning** of hypovolemia. A rising pulse with a normal BP is compensation, not stability.' },
          { t: 'Orthostatic hypotension and dizziness on standing', see: 'BP drops and HR rises when the client sits up or stands; lightheaded, may faint.',
            why: 'With less circulating volume, the body cannot compensate quickly when gravity pools blood in the legs.',
            means: 'Early sign of volume loss and a **fall risk** — assist with every position change.' },
          { t: 'Hypotension, cool clammy skin and low urine output', see: 'BP falling, pale cool moist skin, urine under 30 mL/hr.',
            why: 'Compensation is failing: the body **constricts skin vessels** to send blood to the heart and brain, and the kidneys conserve water (less perfusion, **ADH and aldosterone**).',
            means: '**Hypovolemic shock** — more than about 1 L lost. Fluids and blood now, report immediately.' },
          { t: 'New confusion in an older adult', see: 'Restless, disoriented, or unusually drowsy.',
            why: '**Reduced blood flow and oxygen to the brain**; older adults compensate less well.',
            means: 'Can be the **first** sign of bleeding in an older adult — do not assume it is baseline.' },
          { t: 'Burning, gnawing epigastric pain', see: 'Pain between the umbilicus and the xiphoid; may wake the client at night (duodenal).',
            why: '**Acid and pepsin** reach the exposed tissue and nerve endings in the ulcer crater.',
            means: 'A change from intermittent pain to **constant pain radiating to the back** suggests penetration or **perforation**.' },
          { t: 'Rigid, board-like abdomen', see: 'Sudden severe pain spreading over the abdomen; the client lies still with knees drawn up.',
            why: 'The ulcer has **perforated** and gastric contents spill into the peritoneum (**chemical peritonitis**); the abdominal muscles spasm involuntarily to guard it.',
            means: '**Surgical emergency** — NPO, report immediately, watch for sepsis and shock.' }
        ],
        cards: ['47-peptic-ulcer-disease-the-infection-exemp > Hemorrhage — the most serious', '47-peptic-ulcer-disease-the-infection-exemp > Physical',
          '47-peptic-ulcer-disease-the-infection-exemp > History']
      },
      ac: {
        gist: 'Ulceration from ***H. pylori*** or **NSAIDs** has eroded into a vessel. **Bright red** = brisk active bleeding; **coffee-ground** = slower bleeding exposed to gastric acid; **melena** = blood digested through the intestine.',
        terms: [
          { t: 'NSAID-induced ulcer', see: 'History of daily ibuprofen, naproxen or aspirin.',
            why: 'NSAIDs block **prostaglandins**, which normally keep the stomach lining protected (mucus, bicarbonate and blood flow). Without them, acid and pepsin erode the mucosa.',
            means: 'Teach to **avoid NSAIDs**; misoprostol (a prostaglandin) or a PPI protects clients who must take them.' },
          { t: '*H. pylori* infection', see: 'Positive urea breath test, stool antigen, serology or biopsy.',
            why: 'The bacterium makes **urease**, which neutralizes acid around it, and damages the protective lining so acid can reach the tissue.',
            means: 'Curable with antibiotics plus a PPI — the client must **finish the whole course** or the ulcer recurs.' },
          { t: 'Hemoglobin and hematocrit falling', see: 'Hgb/Hct lower than baseline, often falling between draws.',
            why: 'Early in an acute bleed whole blood is lost, so the first value can look **near normal**; it falls as fluid shifts into the vessels and IV fluids dilute the blood.',
            means: '**Trend** the values and treat the vital signs — a normal first Hgb does not rule out a serious bleed.' },
          { t: 'BUN elevated with a normal creatinine', see: 'BUN high, creatinine normal.',
            why: 'Blood in the gut is **digested protein**: it is absorbed and turned into urea by the liver.',
            means: 'Supports an **upper GI** bleed rather than kidney failure (where creatinine also rises).' }
        ],
        cards: ['47-peptic-ulcer-disease-the-infection-exemp > Definition and cause', '47-peptic-ulcer-disease-the-infection-exemp > Gastric vs duodenal (Table 47.2)',
          '47-peptic-ulcer-disease-the-infection-exemp > Tests for *H. pylori*']
      },
      ph: {
        gist: '**Hypovolemic shock** is the priority. **Sudden severe pain with a rigid, board-like abdomen** = **perforation** with peritonitis — a surgical emergency.',
        cards: ['47-peptic-ulcer-disease-the-infection-exemp > Perforation', '47-peptic-ulcer-disease-the-infection-exemp > Priority problems and goals',
          '47-peptic-ulcer-disease-the-infection-exemp > Pyloric (gastric outlet) obstruction']
      },
      gs: {
        gist: 'Restore **circulating volume** (isotonic fluids, packed RBCs), achieve **hemostasis** by endoscopy, and **suppress acid with a PPI** to stabilize the clot.',
        cards: ['47-upper-gi-bleeding-and-ulcer-emergencies > Fluids and blood', '47-upper-gi-bleeding-and-ulcer-emergencies > NG tube',
          '47-upper-gi-bleeding-and-ulcer-emergencies > Endoscopic hemostasis']
      },
      ta: {
        gist: '**ABCs**: oxygen, **two large-bore IVs**, isotonic fluid and blood products; trend **VS, Hgb/Hct and SpO₂**; keep **NPO** and prepare for **EGD**.',
        cards: ['47-upper-gi-bleeding-and-ulcer-emergencies > Critical rescue', '47-upper-gi-bleeding-and-ulcer-emergencies > If bleeding continues']
      },
      eo: {
        gist: '**Hemodynamically stable**, **no orthostatic changes**, Hgb/Hct stable, no further bleeding; the client avoids NSAIDs, completes ***H. pylori*** therapy and can state when to seek care.',
        cards: ['47-upper-gi-bleeding-and-ulcer-emergencies > Evaluate', '47-upper-gi-bleeding-and-ulcer-emergencies > Going home']
      }
    }
  }
];
