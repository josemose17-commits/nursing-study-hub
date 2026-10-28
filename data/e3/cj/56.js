// Think it through — Chapter 56 — diabetes mellitus. Format: see data/e3/cj/README.md.
module.exports = [
  {
    id: 'dm-new', sys: 'Hormones & glucose', name: 'Diabetes mellitus: diagnosis, insulin and drugs',
    guide: ['56:0', '56:1'],
    topics: ['56-types-risk-and-screening', '56-diagnosing-and-monitoring-glucose-a1c-cg', '56-insulin-types-timing-injection-and-stora',
      '56-antidiabetic-drugs-non-insulin', '56-eating-and-exercise-with-diabetes', '56-teaching-self-management'],
    nodes: ['dm-dx', 'dm-rx', 'insulin'], drugs: ['metformin', 'glipizide', 'semaglutide', 'empagliflozin', 'lispro', 'regular', 'nph', 'glargine'],
    patient: 'A 52-year-old with a BMI of 33 reports fatigue, thirst and blurred vision for two months. A1C is 8.4% and fasting glucose 168 mg/dL.',
    report: [
      'The client’s A1C is 8.4% and fasting glucose 168 mg/dL; reports polyuria, polydipsia, fatigue and blurred vision.',
      'BMI 33, hypertension, father with type 2 diabetes; no prior diabetes diagnosis.',
      'Findings meet diagnostic criteria for diabetes, most consistent with type 2; no signs of a hyperglycemic crisis.',
      'Requesting a confirmatory test if needed, orders for the initial drug therapy, and referrals to diabetes education and a registered dietitian.'
    ],
    steps: {
      rc: {
        gist: 'Classic hyperglycemia: **polyuria, polydipsia, polyphagia**, fatigue, **blurred vision**, recurrent infections and slow healing. **Type 1**: abrupt onset with **weight loss**. **Type 2**: gradual, often **no symptoms** — found by screening.',
        terms: [
          { t: 'Polyuria and polydipsia', see: 'Urinating large amounts, often at night; constant thirst.',
            why: 'When blood glucose rises above what the kidney tubules can reabsorb (about 180 mg/dL), glucose spills into the urine and **pulls water with it** (**osmotic diuresis**). The water loss raises serum osmolality, which triggers **thirst**.',
            means: 'Fluid loss from osmotic diuresis is what makes DKA and HHS dehydration emergencies. Watch intake and output and signs of dehydration.' },
          { t: 'Polyphagia and weight loss', see: 'Hungry all the time yet losing weight — most marked in type 1.',
            why: 'Without insulin, cells cannot take in glucose, so they are **starving in a sea of sugar** and signal hunger. The body breaks down **fat and protein** for fuel, and calories are lost as glucose in the urine.',
            means: 'Rapid unexplained weight loss suggests **absolute insulin deficiency** (type 1) and a risk of **ketones**.' },
          { t: 'Fatigue and weakness', see: 'Tired despite rest.',
            why: 'Cells cannot use glucose for energy, and dehydration adds to the weakness.',
            means: 'Improves as glucose comes into target.' },
          { t: 'Blurred vision', see: 'Vision blurs and fluctuates with glucose levels.',
            why: 'High glucose shifts fluid in and out of the **lens**, changing its shape and how it focuses light.',
            means: 'Usually **temporary** — eye refraction is checked only once glucose is normal. Persistent vision loss suggests **retinopathy**; refer for a dilated eye exam.' },
          { t: 'Recurrent infections and slow wound healing', see: 'Yeast infections, UTIs, skin infections, cuts that heal slowly.',
            why: 'High glucose **impairs white blood cell function**, reduces tissue oxygen and **feeds microbes**.',
            means: 'Inspect skin and feet, teach infection signs. An infection also raises glucose further (stress hormones).' },
          { t: 'Acanthosis nigricans', see: 'Dark, velvety skin in the folds of the neck and armpits.',
            why: 'A sign of **insulin resistance**: persistently high insulin levels stimulate skin cells to thicken and darken.',
            means: 'Part of the metabolic syndrome picture — a cue to **screen** for type 2 diabetes.' }
        ],
        cards: ['56-types-risk-and-screening > Type 1 (T1DM)', '56-types-risk-and-screening > Type 2 (T2DM)', '56-types-risk-and-screening > Metabolic syndrome',
          '56-types-risk-and-screening > Screening (Box 56.3)']
      },
      ac: {
        gist: 'Diagnosis: **A1C ≥ 6.5%**, **fasting glucose ≥ 126**, **2-hour OGTT ≥ 200**, or **random > 200 with symptoms** (two abnormal results unless hyperglycemia is obvious). **Type 1** = autoimmune beta-cell destruction → absolute insulin deficiency. **Type 2** = insulin resistance, then declining insulin secretion.',
        terms: [
          { t: 'A1C (glycated hemoglobin)', see: '≥ 6.5% = diabetes · 5.7–6.4% = prediabetes · target < 7% for most adults.',
            why: 'Glucose attaches to hemoglobin (**glycosylation**) in proportion to how high it runs, and stays attached for the red cell’s life of about **120 days**.',
            means: 'A **3-month average** that a careful day before the test cannot change. A1C 7 ≈ average glucose 154 mg/dL; each 1% ≈ 28–29 mg/dL. Anemia or blood loss can make it misleading.' },
          { t: 'Type 1: absolute insulin deficiency', see: 'Usually younger, abrupt onset, weight loss, ketones.',
            why: 'An **autoimmune** attack destroys the pancreatic **beta cells**, so no insulin is made. Without insulin, fat is broken down into **ketones**.',
            means: '**Everyone with type 1 needs insulin**; missing it risks **DKA** within hours to days.' },
          { t: 'Type 2: insulin resistance', see: 'Usually adult, often overweight, gradual or no symptoms.',
            why: 'Cells respond poorly to insulin (**resistance**), so the pancreas makes more; over years the **beta cells wear out** and secretion declines.',
            means: 'Lifestyle change and oral or injectable drugs first; many eventually need **insulin**. Residual insulin usually limits ketones, but DKA can still occur.' },
          { t: 'Fasting glucose and OGTT', see: 'Fasting ≥ 126 mg/dL or 2-hour OGTT ≥ 200 mg/dL = diabetes.',
            why: 'Fasting glucose shows how well **basal insulin** controls the liver’s overnight glucose output; the OGTT shows how well the body handles a glucose load.',
            means: 'Confirm with a second abnormal result. **Meter readings** are less accurate than **lab glucose** — anemia falsely raises and polycythemia falsely lowers them.' }
        ],
        cards: ['56-diagnosing-and-monitoring-glucose-a1c-cg > The numbers', '56-diagnosing-and-monitoring-glucose-a1c-cg > Confirming it',
          '56-diagnosing-and-monitoring-glucose-a1c-cg > A1C']
      },
      ph: {
        gist: '**Risk for unstable blood glucose** — hypoglycemia once treatment starts, hyperglycemic crises with illness — plus the **need for self-management skills**; long term, **vascular and nerve damage**.',
        cards: ['56-antidiabetic-drugs-non-insulin > For every antidiabetic drug', '56-insulin-types-timing-injection-and-stora > Who and why injected']
      },
      gs: {
        gist: 'Reach **individualized glucose targets** (A1C < 7% for most adults) with **medical nutrition therapy**, **150 minutes of activity a week** and drugs — **metformin first line** in type 2, **insulin for everyone with type 1** — and teach **survival skills** first.',
        terms: [
          { t: 'Metformin', see: 'First-line oral drug for type 2.',
            why: 'Lowers the **liver’s glucose production** and improves insulin sensitivity; it does not force insulin out, so it rarely causes lows on its own.',
            means: 'Take **with food**; **no alcohol**. Kidney limits go by **eGFR**: contraindicated **below 30**, not started at **30–45**. Around **iodinated contrast** (eGFR 30–60 or other risk factors) it is stopped and restarted after a **48-hour eGFR recheck**; around **surgery** it is held while intake is restricted — both to prevent **lactic acidosis**.' },
          { t: 'Sulfonylureas (glipizide)', see: 'Oral drug taken with or just before meals.',
            why: 'Force the beta cells to **release insulin** whether or not glucose is high.',
            means: '**Hypoglycemia** risk, especially with missed meals, kidney disease or in older adults.' },
          { t: 'GLP-1 agonists and SGLT2 inhibitors', see: 'Semaglutide (often once weekly) · empagliflozin.',
            why: '**GLP-1**: less glucagon, slower stomach emptying, more fullness. **SGLT2**: the kidney excretes glucose and sodium in the urine.',
            means: 'GLP-1: nausea, report severe abdominal pain (**pancreatitis**). SGLT2: dehydration, **UTI and genital yeast infections**, ketoacidosis risk.' },
          { t: 'Basal–bolus insulin', see: 'Long-acting once a day plus rapid-acting with meals.',
            why: 'Copies the pancreas: **basal** insulin (glargine, NPH) covers between meals and overnight; **bolus** rapid-acting (lispro) covers each meal.',
            means: 'Fasting glucose shows whether basal is right; after-meal glucose shows the bolus. **Insulin is a high-alert drug** — double-check doses.' }
        ],
        cards: ['56-antidiabetic-drugs-non-insulin > When and how', '56-antidiabetic-drugs-non-insulin > Metformin (biguanide) — first line',
          '56-insulin-types-timing-injection-and-stora > Timing by type', '56-insulin-types-timing-injection-and-stora > Basal and bolus',
          '56-eating-and-exercise-with-diabetes > The approach', '56-eating-and-exercise-with-diabetes > Why and how much']
      },
      ta: {
        gist: 'Check glucose **no more than 30 minutes before meals**; give **rapid-acting insulin within 10 minutes of eating** (regular 20–30 minutes before); inject **subcutaneously**, rotating **within one area**; teach meter use, injection, **hypoglycemia treatment** and **sick-day rules** with **teach-back**.',
        cards: ['56-insulin-types-timing-injection-and-stora > Site and absorption', '56-insulin-types-timing-injection-and-stora > Depth and angle',
          '56-insulin-types-timing-injection-and-stora > Lag time before meals', '56-insulin-types-timing-injection-and-stora > Inspect before every dose',
          '56-diagnosing-and-monitoring-glucose-a1c-cg > Blood glucose monitoring (BGM)', '56-teaching-self-management > Survival skills',
          '56-teaching-self-management > How to teach']
      },
      eo: {
        gist: 'Glucose in target (**before meals 80–130**, **after meals < 180**) and A1C falling toward goal **without hypoglycemia**; the client **demonstrates** drawing up and injecting a dose and using the meter, and can state the signs of highs and lows and when to call.',
        cards: ['56-diagnosing-and-monitoring-glucose-a1c-cg > Using the results', '56-teaching-self-management > Ready for home (Box 56.15)']
      }
    }
  },
  {
    id: 'hypoglycemia', sys: 'Hormones & glucose', name: 'Hypoglycemia',
    guide: ['56:2'],
    topics: ['56-hypoglycemia-the-15-15-rule'],
    nodes: ['dm-acute', 'insulin'], drugs: ['glucagon', 'd50'],
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
            means: 'A **typical** sign of hypoglycemia, but a skin finding can’t confirm or rule out anything on its own — **check the glucose** and assess for other concerning findings.' },
          { t: 'Confusion and behavior change (neuroglycopenia)', see: 'Difficulty thinking, slurred speech, irritability, combativeness, unusual behavior.',
            why: '**Neurons depend on a continuous glucose supply** and store only minutes’ worth. When glucose falls, brain cells run out of energy and stop working normally.',
            means: 'The client may no longer be able to treat themselves or **swallow safely**, which changes the route of treatment. Can be mistaken for intoxication or a stroke — **check the glucose**.' },
          { t: 'Seizures and loss of consciousness', see: 'Unresponsive or seizing.',
            why: 'Severe brain **energy failure**; untreated, it can cause brain damage or death.',
            means: '**Severe hypoglycemia**: nothing by mouth; side-lying, protect the airway; **glucagon or IV dextrose** now and **get emergency help** (rapid response in the hospital, 911 at home).' },
          { t: 'Hypoglycemia unawareness', see: 'Low glucose with few or no warning symptoms.',
            why: 'After years of diabetes or frequent lows, the **counterregulatory epinephrine response weakens**, so the early warning signs no longer appear.',
            means: 'These clients check glucose more often. Meter checks use the **fingertip, not alternate sites** (forearm, thigh), which lag behind; **CGM with low alerts** is recommended for people at high risk of hypoglycemia. Older adults are at higher risk.' }
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
        gist: '**Below 70 → 15 g** fast carbohydrate (**30 g below 50**), **recheck in 15 minutes**, repeat until resolved. Unable to swallow → **nothing by mouth**, side-lying, **glucagon** or **IV dextrose** per protocol, and **get emergency help right away**; any repeat glucagon dose follows the product label or protocol.',
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
    id: 'dka', sys: 'Hormones & glucose', name: 'Diabetic ketoacidosis (DKA)',
    guide: ['56:2'],
    topics: ['56-dka-and-hhs-the-hyperglycemic-emergencie'],
    nodes: ['dm-acute', 'k-acidbase', 'fluids', 'insulin'], drugs: ['regular'],
    patient: 'A 22-year-old with type 1 diabetes has had the flu for two days, skipped insulin because she wasn’t eating, and is now vomiting and breathing deeply.',
    report: [
      'The client with type 1 diabetes has a glucose of 512 mg/dL, deep rapid respirations, fruity breath and vomiting; HR 124, BP 94/60, drowsy but oriented.',
      'Two days of flu-like illness; skipped insulin because she was not eating.',
      'Suspected DKA with hypovolemia; potassium and acid–base status not yet known.',
      'Please evaluate now. I have started a large-bore IV; requesting a BMP with potassium, serum ketones and a blood gas, a fluid bolus order and the DKA insulin protocol.'
    ],
    steps: {
      rc: {
        gist: '**Polyuria, polydipsia**, **nausea, vomiting and abdominal pain**, **fruity breath**, **Kussmaul respirations**, and signs of **hypovolemia** — tachycardia, weak pulse, poor skin turgor, dry mucous membranes, postural hypotension — with mental status from alert to coma. **Sudden** onset, often with illness.',
        terms: [
          { t: 'Kussmaul respirations', see: 'Deep, rapid, labored breathing.',
            why: 'Ketoacids lower the blood pH (**metabolic acidosis**). The respiratory center responds by **blowing off CO₂**, which is an acid in the blood, to push the pH back up — **respiratory compensation**.',
            means: 'A sign of **significant acidosis**. Breathing will slow as the acidosis is corrected; confusion with Kussmaul breathing means **shock and coma can follow quickly**.' },
          { t: 'Fruity (acetone) breath', see: 'A sweet, fruity odor on the breath.',
            why: '**Acetone**, one of the ketone bodies, is volatile and is exhaled through the lungs.',
            means: 'Tells you **ketones** are high — check serum ketones.' },
          { t: 'Polyuria leading to dehydration', see: 'Large urine output early, then **oliguria** as volume runs out; thirst.',
            why: 'Very high glucose spills into the urine and pulls water and electrolytes with it (**osmotic diuresis**). Vomiting adds to the losses.',
            means: 'The fluid deficit can be several liters — the reason **fluids come first** in treatment.' },
          { t: 'Hypovolemia: tachycardia, weak pulse, postural hypotension, flat neck veins', see: 'Fast thready pulse, dizzy when sitting up, sunken eyes, poor turgor, dry mucous membranes.',
            why: 'Osmotic diuresis and vomiting **shrink the circulating volume**; the heart speeds up to maintain output.',
            means: 'Risk for **hypovolemic shock** — monitor BP, pulse and respirations every 15 minutes until stable, and hourly urine output.' },
          { t: 'Nausea, vomiting and abdominal pain', see: 'Diffuse abdominal pain, sometimes severe enough to look like a surgical abdomen.',
            why: 'Associated with the **ketoacidosis** itself, along with dehydration and electrolyte shifts; it usually resolves as the acidosis is corrected.',
            means: 'Vomiting **worsens dehydration and potassium loss** and prevents oral intake — the reason sick-day rules say to call the provider for persistent vomiting.' },
          { t: 'Altered mental status', see: 'Drowsy, confused, progressing to coma.',
            why: '**Acidosis, hyperosmolality and reduced brain perfusion** from dehydration impair brain function.',
            means: 'Protect the **airway**; a worsening level of consciousness is an emergency. Also watch for new headache or confusion during treatment — **cerebral edema**.' }
        ],
        cards: [{ ref: '56-dka-and-hhs-the-hyperglycemic-emergencie > Diabetic ketoacidosis (DKA): textbook description and labeled clinical updates > What you see', as: 'What you see' }]
      },
      ac: {
        gist: '**Insulin deficiency** plus stress hormones → **hyperglycemia** (cells can’t take up glucose; the liver keeps releasing it), **ketoacidosis** (fat broken down into ketoacids — current criteria: ketones with **pH < 7.3 and/or bicarbonate < 18**) and **osmotic diuresis**. Most common trigger: **infection or illness**, or **missed insulin**.',
        terms: [
          { t: 'Ketones and metabolic acidosis', see: 'Ketones positive with **pH < 7.3 and/or bicarbonate < 18** (current adult criteria); the textbook’s examples are pH < 7.35 and bicarbonate < 15. Wide anion gap.',
            why: 'Without insulin, fat cells release fatty acids, and the **liver converts them into ketone bodies**, which are acids. They use up the blood’s **bicarbonate** buffer faster than the body can replace it, so the pH falls.',
            means: 'Treatment continues until the **ketoacidosis resolves** (ketones **< 0.6 mmol/L AND** either **pH ≥ 7.3 OR bicarbonate ≥ 18**), **not just until glucose improves**.' },
          { t: 'Hyperglycemia', see: 'Often > 300 mg/dL — but DKA can occur at **lower glucose**, especially with SGLT2 inhibitors (euglycemic DKA).',
            why: 'No insulin means cells cannot take up glucose, while **glucagon, cortisol and epinephrine** make the liver keep producing it.',
            means: 'A glucose below 300 does **not** rule out DKA — the ketones and acidosis define it.' },
          { t: 'Potassium: high or normal at first, but depleted', see: 'Serum K⁺ may read high on admission.',
            why: 'Acidosis and lack of insulin **shift potassium out of the cells** into the blood, while osmotic diuresis and vomiting **lose it in the urine**. So the serum level hides a large **total-body deficit**. Insulin drives potassium **back into the cells**, so the serum level can **fall fast** once treatment starts.',
            means: '**Check K⁺ before insulin.** If K⁺ is **< 3.5**, replace it and **delay insulin until it is above 3.5** (current adult consensus). Continuous cardiac monitoring — low K⁺ causes dysrhythmias.' },
          { t: 'Elevated BUN and creatinine', see: 'BUN > 30, creatinine > 1.5.',
            why: 'Dehydration reduces blood flow to the kidneys (**prerenal** injury).',
            means: 'Should improve with fluids; monitor urine output hourly before and during potassium replacement.' },
          { t: 'Triggers', see: 'Infection, illness, missed or reduced insulin, insulin pump failure, new type 1 diabetes.',
            why: 'Illness releases **stress hormones** that raise glucose and insulin needs; skipping insulin “because I’m not eating” removes the only brake on ketone production.',
            means: 'Find and treat the cause (cultures, history). Teach **never to stop basal insulin when ill**.' }
        ],
        cards: [{ ref: '56-dka-and-hhs-the-hyperglycemic-emergencie > Diabetic ketoacidosis (DKA): textbook description and labeled clinical updates > What it is', as: 'What it is' },
          '56-dka-and-hhs-the-hyperglycemic-emergencie > Textbook examples (Table 56.9 — see update)', '56-dka-and-hhs-the-hyperglycemic-emergencie > Current diagnostic distinction']
      },
      ph: {
        gist: '1. **Fluid volume deficit** and risk of **hypovolemic shock**. 2. **Acidosis** and **electrolyte imbalance** — especially **potassium**, which falls fast once insulin starts. 3. Altered LOC and airway risk. During treatment: **hypoglycemia** and **cerebral edema**.',
        cards: ['56-dka-and-hhs-the-hyperglycemic-emergencie > Monitoring']
      },
      gs: {
        gist: '**Restore volume first** with IV fluids, then correct ketoacidosis with **IV insulin per protocol once K⁺ is known and ≥ 3.5**, **replace potassium**, add **dextrose** when glucose reaches 250 while insulin continues, and **treat the trigger**.',
        cards: ['56-dka-and-hhs-the-hyperglycemic-emergencie > Fluids', '56-dka-and-hhs-the-hyperglycemic-emergencie > Insulin']
      },
      ta: {
        gist: 'IV access; isotonic saline about **15–20 mL/kg in the first hour**; **check K⁺ before insulin** — replace if < 3.5 and hold insulin until it is above 3.5; **IV regular insulin** per protocol; switch to **D5½NS at glucose 250**; VS **every 15 minutes** until stable; **hourly** urine output, mental status and glucose; continuous cardiac monitoring.',
        cards: ['56-dka-and-hhs-the-hyperglycemic-emergencie > Potassium and bicarbonate']
      },
      eo: {
        gist: 'Ketoacidosis **resolved**: ketones **< 0.6 mmol/L AND** either **pH ≥ 7.3 OR HCO₃⁻ ≥ 18** (glucose ideally < 200); K⁺ in range; **adequate urine output** and stable BP; mental status at baseline; basal insulin overlapped before the drip stops; the client can state **sick-day rules** and when to call.',
        cards: ['56-dka-and-hhs-the-hyperglycemic-emergencie > Sick-day rules', '56-dka-and-hhs-the-hyperglycemic-emergencie > When to call',
          '56-dka-and-hhs-the-hyperglycemic-emergencie > DKA teaching']
      }
    }
  },
  {
    id: 'hhs', sys: 'Hormones & glucose', name: 'Hyperglycemic-hyperosmolar state (HHS)',
    guide: ['56:2'],
    topics: ['56-dka-and-hhs-the-hyperglycemic-emergencie'],
    nodes: ['dm-acute', 'fluids'], drugs: ['regular'],
    patient: 'A 78-year-old with type 2 diabetes from a nursing home has been drinking little for days with a UTI and is now confused and very drowsy.',
    report: [
      'The 78-year-old client is newly confused and very drowsy; lab glucose 840 mg/dL, dry mucous membranes, HR 112, BP 98/56, urine output 15 mL/hr. No Kussmaul breathing.',
      'Type 2 diabetes on metformin; UTI symptoms for 4 days with poor oral intake.',
      'Suspected HHS with severe dehydration, possibly triggered by infection.',
      'Please evaluate now. Requesting serum osmolality, a BMP, ketones, a urinalysis and culture, and IV fluid orders; I am doing hourly neuro checks.'
    ],
    steps: {
      rc: {
        gist: '**Profound dehydration** that develops **gradually over days**, glucose often **> 600**, and **neurologic changes** — confusion, lethargy, seizures, focal deficits, coma — **without Kussmaul breathing or fruity breath**. Usually an **older adult** with type 2 diabetes and an illness.',
        terms: [
          { t: 'Severe dehydration', see: 'Dry mucous membranes, poor turgor, tachycardia, hypotension, low urine output; often larger fluid losses than DKA.',
            why: 'Days of **osmotic diuresis** from very high glucose. Older adults have a **blunted thirst** response and may be unable to get fluids, so they cannot keep up with the losses.',
            means: '**Fluids are the main treatment.** Assess every older adult for dehydration, diabetic or not.' },
          { t: 'Confusion, seizures and focal deficits', see: 'Lethargy to coma, seizures, temporary one-sided weakness that can look like a stroke.',
            why: 'Very high glucose makes the blood **hyperosmolar**, which **pulls water out of brain cells** (cellular dehydration). Coma is likely once osmolarity exceeds **350 mOsm/L** (normal 270–300).',
            means: 'Hourly **neuro checks** (LOC, pupils). Report changes immediately. Brain recovery **lags hours behind** normal glucose.' },
          { t: 'Extremely high glucose (often > 600)', see: 'The meter may read “HI”; confirm with a lab glucose.',
            why: 'Without the vomiting and Kussmaul breathing of DKA, there is no early alarm, so glucose climbs for days. As dehydration lowers kidney blood flow, the kidneys **excrete less glucose**, so it rises even higher.',
            means: 'Lower glucose **gradually** (about 50–70 mg/dL per hour) — a fast drop shifts water into brain cells.' },
          { t: 'No Kussmaul breathing or fruity breath', see: 'Normal breathing pattern; ketones absent or mild.',
            why: '**Some insulin is still being made** — not enough to control glucose, but enough to **limit fat breakdown and ketone production**.',
            means: 'Separates HHS from DKA — but mixed DKA/HHS presentations occur, so check ketones and pH.' }
        ],
        cards: ['56-dka-and-hhs-the-hyperglycemic-emergencie > Why older adults', '56-dka-and-hhs-the-hyperglycemic-emergencie > The brain']
      },
      ac: {
        gist: '**Residual insulin** prevents significant ketosis while **hyperglycemia, hyperosmolality** (often > 320 mOsm/L) and dehydration progress. Triggers: **infection**, poor fluid intake, **MI, stroke, sepsis**, and drugs such as **glucocorticoids and diuretics**.',
        terms: [
          { t: 'Serum osmolality elevated', see: 'Often > 320 mOsm/L (normal 270–300); > 350 → coma risk.',
            why: 'Osmolality measures the **particles dissolved** in the blood. Glucose and sodium are concentrated in a **shrinking volume of water**.',
            means: 'The level tracks with the mental status. It should fall **slowly** — if it falls too fast, water rushes into brain cells and causes **cerebral edema**.' },
          { t: 'Triggers in older adults', see: 'Infection (UTI, pneumonia), MI, stroke, glucocorticoids, diuretics.',
            why: 'Illness raises **stress hormones** and glucose; diuretics and poor intake add to the dehydration.',
            means: 'Look for and treat the cause — cultures, ECG, medication review.' }
        ],
        cards: [{ ref: '56-dka-and-hhs-the-hyperglycemic-emergencie > Hyperglycemic-hyperosmolar state (HHS) > What it is', as: 'What it is' }]
      },
      ph: {
        gist: '1. **Severe fluid volume deficit** and risk of shock. 2. **Neurologic compromise** from hyperosmolality — airway, seizures, falls. 3. During treatment: **cerebral edema** if osmolality falls too fast, and **hypokalemia** once insulin starts.',
        cards: []
      },
      gs: {
        gist: 'Rehydrate **gradually over 36–72 hours**, start **insulin only after adequate fluids**, lower glucose by about **50–70 mg/dL per hour**, watch the brain hourly, and **treat the trigger**.',
        cards: ['56-dka-and-hhs-the-hyperglycemic-emergencie > Fluids first']
      },
      ta: {
        gist: '**Isotonic saline or a balanced crystalloid** first, then fluids adjusted to clinical status and lab trends — **half-normal saline only in specific situations**, such as osmolality not falling despite adequate fluids; **hourly neuro checks** (LOC, pupils, seizures) — report changes immediately; IV insulin only after fluids; **electrolytes every 1–2 hours** with **continuous cardiac monitoring**; strict intake and output.',
        cards: ['56-dka-and-hhs-the-hyperglycemic-emergencie > Critical rescue and insulin']
      },
      eo: {
        gist: '**Slow, steady neurologic improvement**. No improvement or any deterioration → **reassess and report** (fluid status, osmolality, glucose, sodium, other causes) rather than assuming one cause; adequate BP and urine output; glucose and osmolality falling gradually; K⁺ in range.',
        cards: ['56-dka-and-hhs-the-hyperglycemic-emergencie > Sick-day rules']
      }
    }
  },
  {
    id: 'dm-foot', sys: 'Hormones & glucose', name: 'Diabetic foot ulcer and chronic complications',
    guide: ['56:3'],
    topics: ['56-foot-care-kidneys-and-preventing-injury', '56-chronic-complications-vessels-eyes-nerve'],
    nodes: ['dm-chronic'], drugs: [],
    patient: 'A client with 15 years of type 2 diabetes has a painless sore under the ball of the foot and cannot feel the monofilament on either foot.',
    report: [
      'The client has a 2 cm open ulcer under the first metatarsal head of the right foot with redness spreading 3 cm around it and purulent drainage; temperature 100.8°F, glucose 286 mg/dL.',
      'Type 2 diabetes for 15 years with peripheral neuropathy; walks barefoot at home.',
      'Infected diabetic foot ulcer with loss of protective sensation; possible spreading infection.',
      'Please evaluate today. Requesting wound culture, CBC, an offloading device and a podiatry or wound care consult.'
    ],
    steps: {
      rc: {
        gist: '**Loss of protective sensation**, burning or tingling in a **stocking pattern**, **foot deformities** (claw toes, prominent metatarsal heads), **dry cracked skin**, **calluses**, **weak pedal pulses** with hair loss, and **painless ulcers** at pressure points.',
        terms: [
          { t: 'Loss of protective sensation', see: 'Cannot feel the **10-g monofilament**; doesn’t notice a stone in the shoe or a burn.',
            why: '**Sensory neuropathy**: chronic hyperglycemia damages nerves directly (glucose becomes **sorbitol**, which collects in nerves) and through damaged small vessels that leave nerves **hypoxic**.',
            means: 'The main cause of foot ulcers. **Can’t feel it anywhere = high ulcer risk** → exam every 1–6 months depending on risk category.' },
          { t: 'Paresthesias in a stocking pattern', see: 'Burning, tingling or pain starting in the toes and moving up both feet; later numbness.',
            why: 'The **longest nerves** are damaged first, so symptoms start at the toes and are **bilateral and symmetric**.',
            means: '**Pain comes first, then numbness** — a foot that stops hurting is not getting better.' },
          { t: 'Claw toes, hammertoes and prominent metatarsal heads', see: 'Toes curled up, high arch, weight on the balls of the feet.',
            why: '**Motor neuropathy** weakens the small muscles of the foot, so the stronger muscles pull the toes into deformity. The fat pad under the metatarsal heads thins, creating **pressure points**.',
            means: 'Pressure points → **calluses → ulcers**. Needs fitted shoes with a high, wide toe box.' },
          { t: 'Dry, cracked skin', see: 'Fissures, especially on the heels.',
            why: '**Autonomic neuropathy** stops the sweat glands, so the skin dries and cracks.',
            means: 'Cracks are an entry point for bacteria. Moisturize — **but not between the toes** (moisture there breeds fungus).' },
          { t: 'Weak pedal pulses, hair loss and claudication', see: 'Faint dorsalis pedis or posterior tibial pulses, shiny hairless skin, calf pain with walking.',
            why: '**Peripheral artery disease**: diabetes speeds **atherosclerosis** in large vessels, reducing blood flow to the feet.',
            means: '**Poor perfusion is the main cause of poor healing.** A vascular consult may be needed.' },
          { t: 'Painless ulcer', see: 'Open wound under the metatarsal heads or great toe, or on the tops of claw toes — often with little pain.',
            why: 'Repeated pressure on an area the client **cannot feel** breaks the skin down, and the client keeps walking on it.',
            means: '**Offload** the foot — walking on it enlarges the wound. Look for infection: redness, warmth, drainage, odor, rising glucose.' },
          { t: 'Charcot foot', see: 'Warm, red, swollen foot; the arch collapses into a “rocker bottom.”',
            why: 'Without sensation, small fractures and joint injuries go **unnoticed** and the client keeps walking, so the bones of the foot break down.',
            means: 'Can be mistaken for infection or a clot. Needs offloading and specialist care.' }
        ],
        cards: ['56-foot-care-kidneys-and-preventing-injury > Assessment (Box 56.8)', '56-chronic-complications-vessels-eyes-nerve > Peripheral neuropathy (DPN)',
          '56-chronic-complications-vessels-eyes-nerve > Autonomic neuropathy']
      },
      ac: {
        gist: 'Chronic hyperglycemia **thickens basement membranes** and damages small vessels (**retinopathy, nephropathy, neuropathy**) and speeds **atherosclerosis** in large vessels (**MI, stroke, PAD**). In the foot: **neuropathy causes the ulcer; poor perfusion keeps it from healing**; high glucose weakens white cells.',
        terms: [
          { t: 'Microvascular vs macrovascular damage', see: 'Small vessels: eyes, kidneys, nerves. Large vessels: heart, brain, legs.',
            why: 'High glucose **thickens capillary basement membranes** and is directly toxic to cells; small-vessel ischemia causes **tissue hypoxia**. In large vessels it speeds **plaque** formation.',
            means: 'Every **1-point drop in A1C** markedly reduces eye and kidney damage. BP and lipid control matter as much as glucose for the large vessels.' },
          { t: 'Albuminuria', see: 'Urine albumin 30–299 mg/24 h — the earliest sign of nephropathy.',
            why: 'High pressure inside the glomerulus damages the filter, so **albumin leaks** into the urine.',
            means: 'Screen **yearly**; ACE inhibitors or ARBs slow progression (monitor potassium); avoid nephrotoxins such as NSAIDs and contrast without hydration.' },
          { t: 'Infection risk', see: 'Wounds that get infected and heal slowly.',
            why: 'High glucose **impairs white blood cells**, reduces tissue oxygen and **feeds bacteria**; infection releases stress hormones that **raise glucose further**.',
            means: 'An unexplained rise in glucose can be the **first sign** of a foot infection.' }
        ],
        cards: ['56-chronic-complications-vessels-eyes-nerve > The mechanism', '56-foot-care-kidneys-and-preventing-injury > Why feet are lost',
          '56-chronic-complications-vessels-eyes-nerve > Stroke and infection', '56-chronic-complications-vessels-eyes-nerve > Nephropathy',
          '56-chronic-complications-vessels-eyes-nerve > Retinopathy']
      },
      ph: {
        gist: '**Impaired tissue integrity** with **risk for infection and amputation**; **risk for injury** (burns, unnoticed wounds, falls from neuropathy and orthostatic hypotension); **reduced peripheral perfusion**.',
        cards: ['56-foot-care-kidneys-and-preventing-injury > Risk factors']
      },
      gs: {
        gist: '**Offload** pressure, keep the wound **moist and débrided**, **control glucose**, treat infection, and protect both feet with **daily inspection**, proper footwear and regular podiatry care.',
        cards: ['56-foot-care-kidneys-and-preventing-injury > Wound care', '56-foot-care-kidneys-and-preventing-injury > Footwear']
      },
      ta: {
        gist: 'Monofilament and pulse checks; **no weight on the ulcer**; wound care per order; inspect **daily, including between the toes**; teach: never barefoot, check bath water with the wrist or a thermometer, no heating pads, **don’t self-treat corns**, cut nails straight across, report any sore at once.',
        cards: ['56-foot-care-kidneys-and-preventing-injury > Teaching (Box 56.9)', '56-foot-care-kidneys-and-preventing-injury > How injuries happen']
      },
      eo: {
        gist: 'The ulcer **shrinks and heals** without infection; glucose in target; the client or a family member **demonstrates daily foot inspection**, wears fitted shoes and keeps foot exams on the schedule for the risk category.',
        cards: ['56-foot-care-kidneys-and-preventing-injury > Monofilament and risk categories (Table 56.7)', '56-foot-care-kidneys-and-preventing-injury > Screening and targets']
      }
    }
  },
  {
    id: 'dm-surgery', sys: 'Hormones & glucose', name: 'Diabetes in the hospital and around surgery',
    guide: ['56:3', '56:1'],
    topics: ['56-diabetes-in-the-hospital-and-around-surg'],
    nodes: ['dm-rx', 'insulin', 'k-acidbase'], drugs: ['metformin', 'glipizide', 'glargine', 'lispro'],
    patient: 'A client with type 2 diabetes on metformin and glipizide is scheduled for a hip replacement tomorrow and will be NPO after midnight.',
    report: [
      'Post-op day 1 after hip replacement: glucose 248 mg/dL this morning after readings in the 140s; temperature 99.9°F and new burning on urination.',
      'Type 2 diabetes; metformin and glipizide held before surgery; on basal insulin with a correction scale.',
      'Unexpected rise in glucose — possible infection, such as a UTI.',
      'Requesting a urinalysis and culture, a CBC, and a review of the insulin regimen.'
    ],
    steps: {
      rc: {
        gist: '**Hyperglycemia** from illness and surgical stress, **hypoglycemia** when NPO on mealtime insulin or a sulfonylurea, an **unexpected glucose rise** (possible infection), and **atypical cardiac signs** — a silent MI — in clients with neuropathy.',
        terms: [
          { t: 'Stress hyperglycemia', see: 'Glucose rising during illness or after surgery even without eating.',
            why: 'Surgery and illness release **cortisol, epinephrine and glucagon** (counterregulatory hormones), which raise glucose and make cells **resistant to insulin**.',
            means: 'Insulin needs often go **up** around surgery, even while the client eats nothing. High glucose raises **infection** risk and slows **healing**.' },
          { t: 'Unexpected rise in a controlled client', see: 'Glucose suddenly higher with no change in diet or drugs.',
            why: 'The stress hormones of an infection raise glucose, often **before a fever appears**.',
            means: 'Look for **infection**: UTI, pneumonia, cellulitis, wound infection.' },
          { t: 'Hypoglycemia when NPO', see: 'Low glucose in a client not eating.',
            why: 'Mealtime insulin or a **sulfonylurea** keeps lowering glucose with **no food** coming in.',
            means: 'When NPO, **hold mealtime (nutritional) doses** and premixed insulin; keep **basal** insulin (often reduced) and give **correction doses** and any IV insulin **as prescribed** — NPO doesn’t cancel the correction plan.' },
          { t: 'Silent MI', see: 'ECG changes or a new dysrhythmia without chest pain; unexplained hypotension or dyspnea.',
            why: '**Autonomic neuropathy** damages the nerves that carry cardiac pain.',
            means: '**Continuous ECG** for older adults, long-standing diabetes and heart disease; report ECG or potassium changes.' },
          { t: 'Hypokalemia during IV insulin', see: 'Falling K⁺, muscle weakness, ECG changes.',
            why: 'Insulin moves **potassium into the cells** along with glucose.',
            means: 'Monitor **K⁺ and cardiac rhythm** while IV insulin and glucose run.' }
        ],
        cards: ['56-diabetes-in-the-hospital-and-around-surg > Why glucose rises', '56-diabetes-in-the-hospital-and-around-surg > Unexpected rise = look for infection']
      },
      ac: {
        gist: 'Surgery is a **controlled injury**: stress hormones raise glucose and insulin needs, and the client is at risk of **DKA or HHS**, **dehydration and kidney injury**, **aspiration** (gastroparesis), **ileus and urinary retention** (autonomic neuropathy) and **cardiac events**.',
        terms: [
          { t: 'Metformin before contrast or surgery', see: 'Held around iodinated contrast or surgery, per the order or protocol.',
            why: 'Metformin is cleared by the kidneys. If contrast, anesthesia or dehydration impairs kidney function, it builds up and can cause **lactic acidosis**.',
            means: '**Contrast** (eGFR 30–60 or other risk factors): stop at or before the procedure, **recheck eGFR at 48 hours**, restart if kidney function is stable. **Surgery**: hold while food and fluids are restricted. *The textbook teaches a 24-hour hold and restarting when kidney function is normal.*' },
          { t: 'Pre-op glucose above 200', see: 'Glucose ≥ 200 mg/dL before surgery.',
            why: 'High glucose impairs white blood cells and **collagen formation**.',
            means: 'More wound **infection** and poor healing — report it before surgery.' }
        ],
        cards: ['56-diabetes-in-the-hospital-and-around-surg > Why it is riskier']
      },
      ph: {
        gist: '**Unstable blood glucose** in both directions; **risk for infection** and poor wound healing; risk for **acute kidney injury**, **aspiration**, **hypokalemia** and a **silent MI**.',
        cards: ['56-diabetes-in-the-hospital-and-around-surg > Targets']
      },
      gs: {
        gist: 'Keep glucose **140–180** in critical care, or **before meals < 140 and random < 180** on the unit, with **basal + mealtime + correction** insulin; adjust oral drugs before surgery; recognize infection and cardiac changes early.',
        cards: ['56-diabetes-in-the-hospital-and-around-surg > Before surgery', '56-diabetes-in-the-hospital-and-around-surg > NPO patients']
      },
      ta: {
        gist: 'Stop **sulfonylureas 1 day before**; hold **metformin** per the order or protocol; **basal insulin** (often reduced) while NPO, **hold mealtime doses and premixed insulin** but give **correction insulin as prescribed**; **hourly glucose** with IV insulin, glucose and potassium during surgery; monitor **K⁺ and continuous ECG** after; post-op liquids with carbohydrate, **not sugar-free**.',
        cards: ['56-diabetes-in-the-hospital-and-around-surg > During surgery', '56-diabetes-in-the-hospital-and-around-surg > Insulin and analgesia',
          '56-diabetes-in-the-hospital-and-around-surg > Monitoring']
      },
      eo: {
        gist: 'Glucose in target **without hypoglycemia** (review the regimen below 100, change it below 70); no wound or urinary infection; metformin restarted only as the order or protocol directs (kidney function stable, eating again); eating at least **150–200 g of carbohydrate a day**.',
        cards: ['56-diabetes-in-the-hospital-and-around-surg > Post-op nutrition']
      }
    }
  }
];
