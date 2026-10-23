// Chapter 14 — Acid–base balance and imbalance (on the final).
module.exports = ({ chapter, topic, adpie }) => {
  chapter({
    ch: '14', title: 'Acid–base balance and imbalance', concepts: 'Acid–base balance · gas exchange',
    intro: 'Metabolism makes acid all day long, yet arterial blood stays between **pH 7.35 and 7.45** — free **hydrogen ions (H⁺)** are the most tightly controlled substance in the body. Three defenses hold the line: **buffers** (seconds), the **lungs**, which breathe out **CO₂** (minutes, but limited), and the **kidneys**, which keep or dump **bicarbonate (HCO₃⁻)** and H⁺ (hours to days, but strongest). The exemplar is **acidosis** — **metabolic** (too much acid or too little bicarbonate: DKA, diarrhea, kidney failure, lactic acid) or **respiratory** (CO₂ trapped by weak or blocked breathing). Acidosis **depresses** nerves, muscles and the heart and pushes **potassium up**, so the nurse checks the **heart first**; **alkalosis** **overexcites** them through low calcium and low potassium. The **arterial blood gas** tells which problem it is.',
    introShort: ['Arterial **pH 7.35–7.45** — H⁺ is the most tightly controlled substance', 'Defenses: **buffers** (seconds) → **lungs/CO₂** (minutes) → **kidneys/HCO₃⁻** (hours–days)', 'Exemplar **acidosis**: metabolic or respiratory → **depressed** tissue + **high K⁺** → check the **heart first**', '**Alkalosis** overexcites (low Ca²⁺, low K⁺); the **ABG** names the problem'],
    map: [
      'Arterial blood is kept slightly alkaline at **pH 7.35–7.45** while metabolism keeps making acid — **CO₂** from carbohydrate, **sulfuric acid** from protein, **fatty acids and ketoacids** from fat, **lactic acid** when cells lack oxygen. The **bicarbonate buffer** holds **1 part carbonic acid to 20 parts bicarbonate**; the **lungs** set the CO₂ and the **kidneys** set the bicarbonate, so pH reflects **kidneys (HCO₃⁻) over lungs (CO₂)**.',
      '**Metabolic acidosis**: acid made faster than it’s cleared (**DKA, starvation, lactic acid** from hypoxia, seizures or heavy exercise, **alcohol, methanol or aspirin** poisoning), acid not excreted (**kidney failure**), or bicarbonate made too little (kidney, liver or pancreas failure, dehydration) or lost (**diarrhea**). **Respiratory acidosis** has one cause — **CO₂ retained** by depressed, weak, blocked or diseased breathing. **Alkalosis** comes from base gained or acid lost (antacids, vomiting, NG suction, diuretics) or **CO₂ blown off** by hyperventilation.',
      'Acidosis **slows everything**: lethargy → confusion → coma, **weak muscles and low reflexes**, a fast heart early, then **bradycardia, heart block, tall T waves and wide QRS**, low BP and thready pulses. **Metabolic**: deep, fast **Kussmaul** breathing and **warm, flushed, dry** skin. **Respiratory**: shallow, ineffective breathing and **pale to cyanotic** skin. Alkalosis **excites**: anxiety, tingling, **Chvostek and Trousseau**, cramps, hyperreflexia, **tetany, seizures**, a fast heart — with weak muscles.',
      'The **arterial blood gas**: **pH** (<7.35 acidosis, >7.45 alkalosis), **PaCO₂ 35–45** (the lung value), **HCO₃⁻ 21–28** (the kidney value), **PaO₂ 80–100**. Metabolic acidosis: **HCO₃⁻ low** (15–20 or less), PaO₂ normal, PaCO₂ normal or low. Respiratory acidosis: **PaCO₂ over 50** (even over 100), **PaO₂ low**, HCO₃⁻ normal at first and **high when chronic**. **Potassium is often high** in acidosis and **low** in alkalosis.',
      '**Treat the cause** — acidosis and alkalosis are signs, not diseases. Metabolic acidosis: **fluids**, **insulin** for DKA, antidiarrheals, and **bicarbonate only when HCO₃⁻ is low and pH is under 7.2**. Respiratory acidosis: **bronchodilators, anti-inflammatories, mucolytics**, the **lowest oxygen** that prevents hypoxemia, positioning and breathing work, and **mechanical ventilation** if SpO₂ can’t stay at 90%. Alkalosis: stop the cause, replace fluid and electrolytes. **Fall precautions** for all.',
      'A pH **below 6.9 or above 7.8** is usually fatal. Acidosis with hyperkalemia → **heart block and cardiac arrest**; CNS depression → **coma**; tiring respiratory muscles → **respiratory failure**; **combined metabolic and respiratory acidosis** is worse than either alone. Alkalosis → **tetany, seizures**, dysrhythmias (and **digoxin toxicity** with low potassium) and **weak breathing**.',
      'In a patient with or at risk for acidosis: **slowing heart rate, tall T waves, a widening QRS** or **falling grip strength** (rising potassium) — assess pulse and BP and report **immediately**; a **rising PaCO₂ with falling PaO₂**, **SpO₂ that can’t stay at 90%**, tiring breathing muscles or a falling level of consciousness — airway first, then call for help with ventilation. In alkalosis: **tetany, seizures** or weakening breathing.'
    ],
    chain: ['Breathing can’t clear CO₂ (opioids, COPD, rib fractures)', 'CO₂ ↑ → carbonic acid ↑ → **H⁺ ↑, pH ↓**', 'H⁺ moves into cells and **K⁺ moves out** → hyperkalemia', 'nerves and muscles **depressed**: lethargy, weakness, ↓ reflexes', 'heart slows: **tall T, wide QRS, heart block**', 'untreated → **respiratory failure and cardiac arrest**'],
    pairs: [
      ['Metabolic vs respiratory acidosis', '**Metabolic**: the problem is **bicarbonate or metabolic acid** — HCO₃⁻ **low**, PaO₂ **normal**, PaCO₂ normal or **low** (the lungs compensating); **Kussmaul** breathing; **warm, flushed, dry** skin; DKA, diarrhea, kidney failure, lactic acid. **Respiratory**: the problem is **trapped CO₂** — PaCO₂ **high**, PaO₂ **low**, HCO₃⁻ normal (acute) or **high** (chronic, kidneys compensating); **shallow, ineffective** breathing; **pale to cyanotic** skin; opioids, COPD, airway blockage, chest injury. The symptoms overlap; **the gases decide** — and the treatments differ.'],
      ['Acidosis vs alkalosis: depressed vs excited', '**Acidosis** makes excitable tissue **less** responsive — lethargy to coma, low reflexes, **flaccid** weakness, slowing heart — mostly through **high potassium**. **Alkalosis** makes it **overrespond** — anxiety, tingling around the mouth and toes, **Chvostek and Trousseau**, hyperreflexia, cramps, **tetany, seizures**, fast heart — through **low calcium and low potassium**. Both can leave the muscles **weak**: acidosis from too much potassium, alkalosis from too little.'],
      ['Uncompensated, partly or fully compensated', '**Uncompensated**: pH abnormal and only the **cause** value is off. **Partly compensated**: pH still abnormal, but the **other** value has started moving. **Fully compensated**: pH back in range (usually on the side of the original problem) with **both** values abnormal. In compensation **PaCO₂ and HCO₃⁻ move in the same direction**; when they move in **opposite** directions and the pH is far off, two problems are adding together (**combined acidosis**, such as DKA plus COPD). The lungs compensate within **minutes**; the kidneys need **24–48 hours** or longer.'],
      ['Why acidosis raises potassium', 'To buffer extra acid, **H⁺ moves into cells**; to keep the charges even, **K⁺ moves out** into the blood — so acidosis brings **hyperkalemia**, the reason acidosis can **stop the heart** and the reason the nurse **monitors potassium** in every patient with acidosis. **Alkalosis** does the reverse: H⁺ leaves the cells, K⁺ moves in → **hypokalemia** (and higher **digoxin toxicity** risk). In **chronic** respiratory acidosis the compensating kidneys can leave potassium normal or low.']
    ],
    monitor: '**ABGs** (pH, PaCO₂, HCO₃⁻, PaO₂) to judge each treatment, **serum potassium** in any patient with acidosis (calcium and potassium in alkalosis), the **cardiac monitor** (rate, T waves, QRS, PR), **pulse and BP**, breathing **rate, depth and ease** — can the patient **finish a sentence** — **SpO₂**, breath sounds, retractions and **accessory (neck) muscle use**, an audible wheeze or grunt, nail beds and mouth for **cyanosis** (a late sign), **mental status** against baseline at least **every 2 hours**, **hand-grip and leg strength**, deep tendon reflexes, **Chvostek and Trousseau** in alkalosis, skin color and warmth, intake, output and skin turgor; breathing status **hourly** in respiratory acidosis.',
    act: '**Slowing heart rate, tall T waves, a widening QRS or heart block** in acidosis — report at once (cardiac arrest from hyperkalemia); **grip or leg strength falling** in acidosis — check **pulse and BP** first, then report; **airway** of anyone with **acute respiratory acidosis**; **PaCO₂ rising and PaO₂ falling**, **SpO₂ that can’t stay at 90%**, breathing muscles tiring or the patient growing harder to rouse — call for help (ventilation support); **pH under 7.2**; in alkalosis — **tetany, seizures** or **weakening breathing**, and signs of **digoxin toxicity** with low potassium.',
    physio: [{
      items: [
        ['pH is a hydrogen-ion scale run backward', 'pH measures the **free hydrogen ions** in a fluid, on a logarithmic scale that runs **opposite** to their amount: the **lower the pH, the more H⁺** (more acid). The scale runs from 1 (most acid) to 14 (most alkaline), with 7 neutral, and **one pH unit is a tenfold change** — so a drop from 7.4 to 7.3 is a large rise in acid. Normal arterial blood is **7.35–7.45**; below **6.9** or above **7.8** is usually fatal. When the balance is off, **hormones, enzymes and many drugs** work poorly, **fluid and electrolyte** balance shifts, and the **heart, nerves, muscles and gut** become under- or overactive.', ['**Lower pH = more H⁺**', '**1 unit = tenfold** change', 'Normal **7.35–7.45**; <6.9 or >7.8 usually **fatal**', 'Off balance: hormones, enzymes, drugs fail; excitable tissue changes']],
        ['Acids, bases and buffers', '**Acids** release H⁺ (a strong acid such as hydrochloric acid lets go of all of it; a weak acid only some); **bases** bind H⁺ — the main one is **bicarbonate**. **Buffers** work either way, like **sponges**: soaking up H⁺ when there’s too much and releasing it when there’s too little. **Bicarbonate** buffers the ECF; **phosphate** works inside cells; **proteins** (albumin, globulins and **hemoglobin** in red cells) buffer too. Health keeps **1 carbonic acid to 20 bicarbonate**.', ['**Acids release H⁺**; **bases bind** it (bicarbonate)', '**Buffers = sponges**: bicarbonate (ECF), phosphate (cells), proteins, **hemoglobin**', 'Ratio **1 carbonic acid : 20 bicarbonate**']],
        ['CO₂ is acid you can breathe out', 'with the enzyme **carbonic anhydrase**, **CO₂ + water ⇌ carbonic acid ⇌ H⁺ + HCO₃⁻** — so **more CO₂ means more H⁺** (pH falls) and less CO₂ means less (pH rises). **Chemoreceptors in the brain** sense the CO₂ and change the **rate and depth** of breathing within **minutes**: faster and deeper to blow off acid, slower and shallower to keep it. Room air holds almost no CO₂, so it keeps diffusing out even when breathing is somewhat weak.', ['**CO₂ ⇌ carbonic acid ⇌ H⁺ + HCO₃⁻**', '**CO₂ ↑ → pH ↓**; CO₂ ↓ → pH ↑', 'Brain **chemoreceptors** adjust breathing in **minutes**']],
        ['The kidneys: slow but strongest', 'the kidneys **reabsorb or make bicarbonate** when acid is high (and let it go in the urine when acid is low), and **excrete H⁺** by binding it to **phosphate** (forming an acid in the urine) and to **ammonia** (forming **ammonium**). They need **24–48 hours** to respond fully but are the **most powerful** and longest-lasting defense. Bicarbonate is made in the **kidneys, pancreas and red cells** — and **no disease makes too much of it**, which is why acidosis is far more common than alkalosis.', ['**Keep/make HCO₃⁻**; excrete H⁺ (phosphate, **ammonium**)', '**24–48 hr**, but **strongest**', 'No disease overproduces HCO₃⁻ → **acidosis is more common**']]
      ],
      why: 'The three defenses act in order of speed: **buffers** in seconds, the **lungs** in minutes (sensitive but easily overwhelmed), the **kidneys** over hours to days (slow but powerful). Each organ can cover for the other: when **metabolism** is the problem, the **lungs** compensate fast; when the **lungs** are the problem, the **kidneys** compensate slowly — which is why chronic lung disease shows a **high bicarbonate**.',
      whyShort: ['**Buffers** seconds → **lungs** minutes → **kidneys** hours–days', 'Metabolic problem → **lungs** compensate', 'Lung problem → **kidneys** compensate (high HCO₃⁻ in chronic COPD)']
    }]
  });

  topic({
    ch: '14', title: 'Reading an arterial blood gas', tag: 'Foundation',
    boxes: [{
      title: 'What each value measures (Table 14.2)',
      items: [
        ['pH 7.35–7.45', 'the **overall acid level** of arterial blood. **Below 7.35 = acidosis**; **above 7.45 = alkalosis**. It says how sick the balance is, **not why** — the other values name the cause.', ['**<7.35 acidosis · >7.45 alkalosis**', 'Says **how much**, not **why**']],
        ['PaCO₂ 35–45 mm Hg — the lungs', 'the carbon dioxide in arterial blood, set by **breathing**. CO₂ acts as an **acid**: **high** (over 45) pushes toward **acidosis** (hypoventilation, lung disease); **low** (under 35) toward **alkalosis** (hyperventilation).', ['**Lung** value; CO₂ = **acid**', '**>45** → acid side · **<35** → alkaline side']],
        ['HCO₃⁻ 21–28 mEq/L — the kidneys', 'bicarbonate, set by the **kidneys** (and metabolism). It is a **base**: **low** (under 21) means **metabolic acidosis**; **high** (over 28) means **metabolic alkalosis** — or the kidneys compensating for a long-standing lung problem.', ['**Kidney/metabolic** value; HCO₃⁻ = **base**', '**<21** → metabolic acidosis · **>28** → alkalosis or compensation']],
        ['PaO₂ 80–100 mm Hg and lactate', '**PaO₂** shows **oxygenation**, not acid–base: it is **normal in metabolic acidosis** and **low in respiratory acidosis**, and usually falls **before** the PaCO₂ rises because CO₂ crosses the alveoli more easily than oxygen. PaO₂ also falls with respiratory depression, high altitude, carbon monoxide poisoning and low cardiac output, and rises with oxygen therapy. **Lactate** (arterial **3–7 mg/dL**, 0.3–0.8 mmol/L; venous 5–20 mg/dL, 0.6–2.2 mmol/L) climbs when cells work **without oxygen** — hypoxia, sepsis, shock — and with exercise, an insulin infusion, alcohol use, pregnancy and dehydration; it falls with fluid overload.', ['**PaO₂** = oxygenation; **low first** in lung failure', '**Lactate ↑** = cells without oxygen (also exercise, insulin infusion, dehydration)']]
      ],
      why: 'Think of pH as the **result**, PaCO₂ as the **lungs’ vote** and HCO₃⁻ as the **kidneys’ vote**. Whichever vote agrees with the pH is the **cause**; the other one, if it has moved the opposite way from normal, is **compensating**.',
      whyShort: ['pH = **result**; PaCO₂ = **lungs**; HCO₃⁻ = **kidneys**', 'The value that **matches the pH** is the cause']
    }, {
      title: 'Interpret in order',
      items: [
        ['1 · Look at the pH', 'acidosis (**<7.35**), alkalosis (**>7.45**) or in range. If it’s in range but both other values are abnormal, note which side of **7.40** it leans toward — that side is usually the original problem.', ['**<7.35 / 7.35–7.45 / >7.45**', 'In range + abnormal values → which side of **7.40**?']],
        ['2 · Look at the PaCO₂', 'is it moving **opposite** to the pH (pH down, CO₂ up — or pH up, CO₂ down)? Then the problem is **respiratory**. A common memory aid: **ROME — Respiratory Opposite, Metabolic Equal**.', ['PaCO₂ **opposite** to pH → **respiratory**', '**ROME**: Respiratory Opposite, Metabolic Equal']],
        ['3 · Look at the HCO₃⁻', 'is it moving the **same way** as the pH (both down, or both up)? Then the problem is **metabolic**.', ['HCO₃⁻ **same way** as pH → **metabolic**']],
        ['4 · Check for compensation', 'if the **other** value has moved away from normal in the direction that pulls the pH back, the body is **compensating** — **partly** if the pH is still out of range, **fully** if it’s back in range. If the two values pull the **same** way on the pH (CO₂ up **and** HCO₃⁻ down), it’s a **combined** problem.', ['Other value moving to **pull pH back** = compensation', 'pH still off = **partial**; in range = **full**', 'Both pull toward acid = **combined acidosis**']],
        ['5 · Look at the oxygen and the patient', '**PaO₂** and SpO₂ for oxygenation; then match the numbers to the **person** — breathing pattern, mental status, heart rhythm, potassium and the likely cause.', ['**PaO₂/SpO₂** for oxygen', 'Match the gas to the **patient** and the cause']]
      ],
      why: 'Working in a fixed order stops the most common mistake — seeing one abnormal number and naming the problem before checking whether that number is the **cause** or the body’s **compensation**.',
      whyShort: ['Fixed order: **pH → CO₂ → HCO₃⁻ → compensation → O₂**', 'Avoids mistaking **compensation** for the cause']
    }, {
      title: 'Practice gases',
      items: [
        ['pH 7.30 · PaCO₂ 58 · HCO₃⁻ 25', 'acid pH; CO₂ high (opposite) → **respiratory acidosis**; HCO₃⁻ still normal → **uncompensated** (acute) — for example, slowed breathing after opioids.', ['**Respiratory acidosis, uncompensated**', 'e.g., **opioid** respiratory depression']],
        ['pH 7.36 · PaCO₂ 62 · HCO₃⁻ 34', 'pH in range but on the **acid** side; CO₂ high → respiratory cause; HCO₃⁻ high → the kidneys have caught up → **fully compensated respiratory acidosis** — typical of long-standing **COPD**.', ['**Respiratory acidosis, fully compensated**', 'Typical of chronic **COPD**']],
        ['pH 7.28 · PaCO₂ 28 · HCO₃⁻ 13', 'acid pH; HCO₃⁻ low (same way) → **metabolic acidosis**; CO₂ low as the lungs blow off acid, but pH still low → **partly compensated** — for example, **DKA** with Kussmaul breathing.', ['**Metabolic acidosis, partly compensated**', 'e.g., **DKA** with Kussmaul breathing']],
        ['pH 7.50 · PaCO₂ 29 · HCO₃⁻ 23', 'alkaline pH; CO₂ low (opposite) → **respiratory alkalosis**; HCO₃⁻ normal → **uncompensated** — for example, **hyperventilating** from panic or pain.', ['**Respiratory alkalosis, uncompensated**', 'e.g., **anxiety** hyperventilation']],
        ['pH 7.52 · PaCO₂ 44 · HCO₃⁻ 35', 'alkaline pH; HCO₃⁻ high (same way) → **metabolic alkalosis**; CO₂ normal → **uncompensated** — for example, prolonged **vomiting or NG suction**.', ['**Metabolic alkalosis, uncompensated**', 'e.g., **vomiting / NG suction**']],
        ['pH 7.10 · PaCO₂ 60 · HCO₃⁻ 15', 'very acid pH; CO₂ **high** and HCO₃⁻ **low** — both pulling toward acid → **combined respiratory and metabolic acidosis**, more dangerous than either alone (for example, **DKA in a patient with COPD**).', ['**Combined acidosis**', 'Both values pull toward acid — e.g., **DKA + COPD**']]
      ],
      why: 'Every gas answers the same three questions — **which way** is the pH, **who** caused it (lungs or metabolism), and **is the other organ helping**? Practicing on worked examples makes the pattern automatic.',
      whyShort: ['Which way? **Who** caused it? **Is the other helping?**']
    }]
  });

  topic({
    ch: '14', title: 'Buffers, lungs, kidneys and compensation',
    boxes: [{
      title: 'Three lines of defense (Table 14.1)',
      items: [
        ['1 · Buffers — seconds', '**bicarbonate and phosphate** (chemical) and **albumin, globulins and hemoglobin** (protein) are always present and react **at once**, binding or releasing H⁺. They handle the **small swings** of everyday metabolism but are quickly used up by a big acid load.', ['**Bicarbonate, phosphate, proteins, hemoglobin**', '**Immediate**, but only for **small** swings']],
        ['2 · Lungs — minutes', 'more H⁺ or CO₂ makes the brain **speed up and deepen breathing** (hyperventilation) to blow CO₂ off; less makes it **slow and shallow** (hypoventilation) to keep CO₂. They respond within **seconds to minutes** but are **limited** and easily overwhelmed.', ['High acid → **faster, deeper** breathing', 'Low acid → **slower, shallower**', '**Fast but limited**']],
        ['3 · Kidneys — hours to days', 'to lower acid, the kidneys **keep and make bicarbonate** and **excrete H⁺** (as phosphate acid and ammonium); to raise it, they let bicarbonate go and keep H⁺. They are the **strongest** regulator and last longest, but take **24–48 hours** to respond fully.', ['Keep HCO₃⁻, **excrete H⁺** — or the reverse', '**Strongest, slowest** (24–48 hr)']]
      ],
      why: 'Speed and strength trade off: the fastest defense is the weakest and the strongest is the slowest. That is why an **acute** lung problem shows an uncompensated gas, while a **chronic** one shows the kidneys’ work as a high bicarbonate.',
      whyShort: ['**Fastest = weakest**; **strongest = slowest**', 'Acute → uncompensated; chronic → kidneys have compensated']
    }, {
      title: 'Compensation',
      items: [
        ['Lungs cover for metabolic problems', 'when metabolic acid builds up (lactic acid after hard running, ketoacids in DKA), breathing becomes **faster and deeper** to blow off CO₂ and raise the pH — the deep, rapid **Kussmaul** pattern is this compensation.', ['Metabolic acidosis → lungs **blow off CO₂**', '**Kussmaul** = respiratory compensation']],
        ['Kidneys cover for lung problems', 'in **COPD** the lungs keep retaining CO₂, so the kidneys **excrete more H⁺ and keep more bicarbonate**, holding the pH in or near range. The gas then shows a **high PaCO₂ with a high HCO₃⁻**.', ['Chronic CO₂ retention → kidneys **keep HCO₃⁻**', 'Gas: **high PaCO₂ + high HCO₃⁻**']],
        ['Full, partial — or not at all', '**fully compensated**: the pH is back in range though the other values stay abnormal; **partly compensated**: the problem is too big and the pH is still off, but compensation keeps it from getting worse. Compensation **never overshoots** — the pH doesn’t swing past normal to the other side.', ['**Full**: pH in range, values abnormal', '**Partial**: pH still off', '**Never overshoots**']],
        ['Combined (mixed) acidosis', 'metabolic and respiratory acidosis can happen **together** — for example, **DKA in a patient with COPD**: neither organ can cover for the other, and the acidosis is **worse than either alone**.', ['Both at once — e.g., **DKA + COPD**', 'No organ left to compensate → **more severe**']]
      ],
      why: 'Compensation buys time but doesn’t fix anything — the **cause** still has to be treated. A compensated gas in a chronically ill patient is that person’s **baseline**, which is why trends and the admission gas matter more than one result.',
      whyShort: ['Compensation **buys time**, doesn’t cure', 'Compare with the **baseline / admission gas**']
    }]
  });

  topic({
    ch: '14', title: 'Acidosis — the concept exemplar',
    boxes: [{
      title: 'Metabolic acidosis — four ways in (Table 14.3)',
      items: [
        ['Too much acid made', '**fat broken down too fast** (**diabetic ketoacidosis**, starvation); **hypermetabolism** — heavy exercise, **seizures**, fever; **lactic acid** when cells lack oxygen (hypoxia, ischemia, shock, sepsis); **acids swallowed** — ethanol or methanol intoxication, **aspirin (salicylate)** overdose.', ['**DKA**, starvation', 'Exercise, **seizures**, fever; **lactic acid** (hypoxia, shock)', '**Alcohol, methanol, aspirin**']],
        ['Too little acid excreted', '**kidney failure** — acid is made at the normal rate but the kidneys can’t get rid of it.', ['**Kidney failure**']],
        ['Too little bicarbonate made', 'bicarbonate comes from the **kidneys and pancreas**, so **kidney failure, pancreatitis, liver failure** — and **dehydration** — leave too little base to balance normal acid (a **base deficit**).', ['**Kidney, pancreas, liver** failure; **dehydration**']],
        ['Too much bicarbonate lost', '**diarrhea** carries bicarbonate out of the gut — the classic base-loss acidosis.', ['**Diarrhea**']],
        ['Actual vs relative', '**actual** acidosis: there is truly **more acid** (made or kept). **Relative** acidosis: the acid is normal but there is **too little base**, so the balance tips toward acid.', ['**Actual**: more acid', '**Relative**: too little base']]
      ],
      why: 'The four routes come down to two sides of one scale — **acid in versus acid out**, and **base made versus base lost** — so for any patient the nurse asks: is something making acid, keeping acid, or using up or losing bicarbonate?',
      whyShort: ['Acid **made or kept**?', 'Bicarbonate **not made or lost**?']
    }, {
      title: 'Respiratory acidosis — one cause: trapped CO₂',
      items: [
        ['Depressed breathing', 'the brainstem’s drive to breathe is blunted — **anesthetics, opioids** and other sedating drugs, electrolyte imbalances, **head injury or raised intracranial pressure**.', ['**Opioids, anesthetics**, sedatives', 'Head injury, **raised ICP**']],
        ['The chest can’t expand', '**respiratory muscle weakness**, rib or spine injury and chest deformities inside; **casts, tight chest scars or obesity** from outside.', ['**Muscle weakness**, **rib fractures**, deformity', 'Casts, scars, **obesity**']],
        ['Air can’t move or gas can’t cross', '**airway obstruction**; or a thick **alveolar-capillary barrier** — pneumonia, tuberculosis, **emphysema**, ARDS, chest trauma, **pulmonary embolism**, pulmonary edema, near-drowning.', ['**Airway obstruction**', 'Pneumonia, **emphysema/COPD**, ARDS, PE, pulmonary edema']],
        ['A ventilator set too low', 'if the **tidal volume or rate** is set too low, the patient can’t clear CO₂.', ['**Tidal volume or rate too low**']],
        ['Who is at risk', 'anyone with a problem that **impairs breathing** (the highest risk for acute acidosis), and **older adults** with heart, kidney or lung disease — often taking **diuretics or aspirin**. **COPD** is the most common chronic cause.', ['**Impaired breathing** = highest acute risk', '**Older adults**; diuretics, aspirin', '**COPD** = most common chronic cause']]
      ],
      why: 'Every respiratory cause ends in the same place: **CO₂ in faster than it goes out**. So the fix is never a drug that changes pH — it is **better ventilation**: open the airway, reverse the sedation, help the chest move, treat the lung.',
      whyShort: ['All roads: **CO₂ in > CO₂ out**', 'Fix = **better ventilation**, not a pH drug']
    }]
  });

  topic({
    ch: '14', title: 'Recognizing acidosis',
    boxes: [{
      title: 'Body systems (Box 14.1)',
      items: [
        ['Heart — assess first', 'early: **faster rate and cardiac output**. Worse acidosis (and the **hyperkalemia** that comes with it): **bradycardia → heart block**, **tall T waves**, **wide QRS**, **long PR**, low BP from vasodilation, **thready** pulses that are hard to find. Assess the heart **first** — cardiac arrest is the danger.', ['Early **↑ HR**; then **bradycardia → heart block**', '**Tall T, wide QRS, long PR**', 'Low BP, **thready** pulses — **check first**']],
        ['Brain', '**depressed**: lethargy → confusion (especially in older adults) → stupor → coma. **Cognitive change may be the first sign**: check orientation, ask the patient to **count backward by threes**, and ask the family whether the behavior is usual.', ['**Lethargy → confusion → coma**', 'Often the **first sign**: count back by **threes**', 'Compare with **baseline** (family)']],
        ['Muscles', '**low reflexes**, **bilateral weakness** that can progress to **flaccid paralysis** (from hyperkalemia). Test the arms with a **hand squeeze** and the legs by having the patient **push both feet against a board** against resistance.', ['**Hyporeflexia**, bilateral weakness → **flaccid paralysis**', '**Hand squeeze**; **feet push** against a board']],
        ['Breathing and skin', '**metabolic**: deep, rapid, involuntary **Kussmaul** breathing (compensation) and **warm, flushed, dry** skin from vasodilation. **Respiratory**: breathing is the problem — usually **shallow and rapid** and ineffective, worse with weak muscles — and the skin is **pale to cyanotic**. Check SpO₂.', ['**Metabolic**: **Kussmaul** + **warm, flushed, dry** skin', '**Respiratory**: shallow, ineffective + **pale/cyanotic**']]
      ],
      why: 'Acidosis looks similar whatever its cause because **excess H⁺ disturbs potassium**, and potassium sets how every excitable cell fires. Breathing and skin are the clues to the type: the patient who **breathes hard and looks flushed** is compensating for a metabolic problem; the one who **can’t breathe well and looks dusky** has the respiratory kind.',
      whyShort: ['Similar signs — **H⁺ disturbs K⁺**', 'Hard breathing + flushed = **metabolic**', 'Poor breathing + dusky = **respiratory**']
    }, {
      title: 'History and the older adult',
      items: [
        ['Ask about', 'breathing problems, **kidney failure, diabetes, diarrhea, pancreatitis, fever**; every drug including over-the-counter and herbal (**diuretics, aspirin, antacids**); what the patient **drank in the last 24 hours** and any change in urine; headache, drowsiness, short attention span, poor appetite, nausea, **weakness and fatigue** over the past day. If the patient is confused, ask the family.', ['**Lung, kidney, diabetes, diarrhea, pancreatitis, fever**', 'Drugs: **diuretics, aspirin, antacids**', 'Last **24 hr** of fluids and urine']],
        ['Assessment points for older adults', 'compare **mental status with baseline**; check breathing **rate and depth** and whether the patient can **finish a sentence** without stopping for breath; look at **nail beds and mucous membranes**; check turgor over the **sternum and forehead**; measure the **pulse rate and quality**; keep watching symptoms and labs during correction.', ['Mental status vs **baseline**', 'Can they **finish a sentence**?', 'Nail beds, mouth; turgor on **sternum/forehead**; pulse']]
      ],
      why: 'Older adults have less reserve in the **lungs and kidneys** — the two organs that compensate — and more of the diseases and drugs that cause imbalance, so a small trigger tips them over sooner and the first clue is often a **change in thinking**.',
      whyShort: ['Older adults: less **lung and kidney reserve**', 'First clue often a **change in thinking**']
    }, {
      title: 'The gases and potassium (Boxes 14.2 and 14.3)',
      items: [
        ['Metabolic acidosis', '**pH under 7.35**; **HCO₃⁻ low** (15–20 or less) — lost or not made (in DKA it is used up buffering ketoacids); **PaO₂ normal** (oxygen intake isn’t impaired); **PaCO₂ normal or low** (the lungs compensating). A low pH with a **normal PaO₂ and normal or low PaCO₂** is the classic metabolic picture.', ['**pH ↓, HCO₃⁻ ↓** (15–20 or less)', '**PaO₂ normal**; PaCO₂ normal or **↓**']],
        ['Respiratory acidosis', '**pH under 7.35**; **PaCO₂ over 50** (can pass 100); **PaO₂ low** (under 90) — the hallmark is a **falling PaO₂ with a rising PaCO₂**, with the oxygen usually dropping first; **HCO₃⁻ normal** when it’s acute, **high** once the kidneys have compensated for 24 hours or more.', ['**pH ↓, PaCO₂ >50, PaO₂ <90**', '**PaO₂ falls first**', 'HCO₃⁻ normal (acute) → **high** (chronic)']],
        ['Potassium', 'often **high** in acidosis — H⁺ enters cells and K⁺ leaves to balance the charge. **High in acute respiratory acidosis**; **normal or low** in chronic respiratory acidosis once the kidneys compensate. Monitor potassium in **every** patient with acidosis.', ['Acidosis → **K⁺ ↑** (H⁺ in, K⁺ out)', 'Chronic respiratory: **normal or low**', 'Monitor K⁺ in **every** acidosis']]
      ],
      why: 'The pH confirms acidosis but **can’t tell the type**, and metabolic and respiratory acidosis feel alike to the patient — yet they need **opposite kinds of help** (fluids, insulin or bicarbonate versus ventilation). The ABG and electrolytes make that call.',
      whyShort: ['pH confirms; **ABG names the type**', 'Types need **different** treatment']
    }]
  });

  topic({
    ch: '14', title: 'Caring for acidosis',
    boxes: [{
      title: 'Metabolic acidosis (Table 14.4)',
      items: [
        ['Treat the cause', '**hydration**, plus the fix for the cause: **insulin** for DKA (stops ketone production), **rehydration and antidiarrheals** for prolonged diarrhea.', ['**Fluids**', '**Insulin** for DKA; **antidiarrheals** for diarrhea']],
        ['Bicarbonate — only sometimes', 'IV sodium bicarbonate is given when the **HCO₃⁻ is low and the pH is under 7.2**, when the kidneys **can’t compensate**, or for **rhabdomyolysis** that doesn’t respond to IV fluids.', ['**HCO₃⁻ low + pH <7.2**', 'Kidneys can’t compensate; **rhabdomyolysis** not responding to fluids']],
        ['Monitor continuously', 'the **heart** (rate, rhythm, T waves, QRS) and **skeletal muscles** (grip, leg strength, reflexes) are the most sensitive to acidosis; follow **ABGs and potassium** as treatment works.', ['**Heart + skeletal muscle** first', 'Trend **ABGs and K⁺**']]
      ],
      why: 'Giving bicarbonate treats the number, not the problem — and in DKA, **insulin and fluids** clear the ketoacids themselves. Bicarbonate is kept for **severe** acidosis (pH under 7.2) or when the body can’t make its own.',
      whyShort: ['Fix the **cause**; bicarbonate only if **pH <7.2** and HCO₃⁻ low']
    }, {
      title: 'Respiratory acidosis — improving gas exchange',
      items: [
        ['Priority problem', '**reduced gas exchange** from the underlying lung disease. The goal is **fewer signs of acidosis** — and, in a chronic disease such as COPD, the best balance this patient can reach.', ['**Reduced gas exchange**', 'Goal: **fewer acidosis signs**']],
        ['Drugs and oxygen', 'drugs aim at **ventilation, not pH**: **bronchodilators, anti-inflammatories and mucolytics**. Give **oxygen** at the **lowest flow that prevents hypoxemia**, watching the saturation, to avoid oxygen-induced harm. Add **pulmonary hygiene**: positioning and breathing techniques.', ['**Bronchodilators, anti-inflammatories, mucolytics**', '**Lowest O₂** that prevents hypoxemia', 'Positioning + **breathing techniques**']],
        ['Ventilation support', '**mechanical ventilation** when the patient **can’t keep SpO₂ at 90%** or the breathing muscles are **tiring**.', ['**SpO₂ can’t stay ≥90%** or **muscle fatigue** → ventilator']],
        ['Hourly breathing checks', 'breath sounds and how easily air moves; **retractions**; use of **accessory muscles** (especially the neck’s sternocleidomastoids); a **grunt or wheeze heard without a stethoscope**; **cyanosis** of nail beds and mouth — a **late** sign. Keep the **airway** clear.', ['Breath sounds, **retractions**', '**Neck accessory muscles**', 'Audible **grunt/wheeze**; **cyanosis = late**']]
      ],
      why: 'Respiratory acidosis is fixed by moving air, so the nurse’s most powerful tool is **frequent reassessment**: work of breathing changes before the gas does, and catching tiring muscles early can prevent intubation in a crisis.',
      whyShort: ['Fix = **move air**', 'Work of breathing changes **before** the gas']
    }, {
      title: 'Safety and evaluation',
      items: [
        ['Prevent falls', 'hypotension, poor perfusion and slowed thinking put patients with acidosis — and any acid–base problem — at **risk for falls**: fall precautions, call light in reach, help getting up.', ['Low BP + confusion → **falls**', '**Fall precautions** for any acid–base problem']],
        ['Neuro checks', 'check neurologic status at least **every 2 hours** while an acid–base problem is being treated.', ['Neuro **at least every 2 hr**']],
        ['Signs it is working', 'adequate gas exchange; **pH above 7.2 and moving toward 7.35**; **PaO₂ above 90** or at least **10 mm Hg higher** than on admission; **PaCO₂ below 45** or at least **15 mm Hg lower** than on admission. Some patients with chronic disease won’t return fully to normal.', ['**pH >7.2** → toward 7.35', '**PaO₂ >90** or **+10** from admission', '**PaCO₂ <45** or **−15** from admission']]
      ],
      why: 'For a patient with chronic lung disease, “normal” may never come back — so success is measured against **their own admission values** and their breathing comfort, not the textbook range.',
      whyShort: ['Judge against **admission values**, not only the normal range']
    }]
  });

  topic({
    ch: '14', title: 'Alkalosis',
    boxes: [{
      title: 'Causes (Table 14.5)',
      items: [
        ['Metabolic — base gained', '**bicarbonate antacids** taken in excess; **IV sodium bicarbonate**; **massive blood transfusion** (the citrate preservative becomes bicarbonate); **total parenteral nutrition**. Gas: **pH and HCO₃⁻ both high**, oxygen and CO₂ normal.', ['**Antacids**, **IV bicarbonate**', '**Massive transfusion** (citrate), **TPN**', 'Gas: **pH ↑ + HCO₃⁻ ↑**']],
        ['Metabolic — acid lost', '**prolonged vomiting** and **NG suction** (stomach acid removed); **excess cortisol or aldosterone**; **loop and thiazide diuretics** at higher doses.', ['**Vomiting, NG suction**', 'Excess **cortisol/aldosterone**', '**Loop/thiazide diuretics**']],
        ['Respiratory — CO₂ blown off', '**hyperventilation** from **anxiety, fear** or pain; a **ventilator** set too fast or deep; direct stimulation of the breathing center by **fever, brain lesions or salicylates**; **high altitude**; the early stage of acute lung problems. Gas: **pH high with PaCO₂ low**, oxygen and bicarbonate usually normal.', ['**Anxiety/fear** hyperventilation; **ventilator** settings', 'Fever, brain lesions, **salicylates**, altitude', 'Gas: **pH ↑ + PaCO₂ ↓**']]
      ],
      why: 'Alkalosis is less common than acidosis because no disease makes too much bicarbonate — it usually comes from **something the patient takes or loses**, which means the nurse can often **find and stop the cause** (an NG tube, an antacid habit, a diuretic, panic breathing).',
      whyShort: ['Usually **taken in or lost out**', 'Often the nurse can **stop the cause**']
    }, {
      title: 'What the nurse finds (Box 14.4)',
      items: [
        ['Overexcited nerves', 'from the **low calcium** that comes with alkalosis: dizziness, **anxiety, irritability, agitation**, confusion, **numbness and tingling around the mouth and in the toes**, positive **Chvostek and Trousseau** signs, and **seizures**.', ['**Anxiety, irritability**, confusion', '**Tingling** mouth and toes', '**Chvostek, Trousseau**, seizures']],
        ['Muscles: twitchy but weak', '**hyperactive reflexes**, cramps, twitching, “charley horses” and **tetany** — painful, sustained contractions that mean the condition is **worsening fast**. At the same time **low potassium** makes the muscles **weak**: grip fades, the patient may not be able to stand or walk, and **breathing effort weakens**.', ['**Hyperreflexia**, cramps, **tetany** (= worsening fast)', '**Low K⁺** → weak grip, can’t stand', '**Breathing effort weakens**']],
        ['Heart and breathing', '**faster heart rate**, thready pulse, normal or **low BP** (severe if volume is also low); low potassium raises the risk of **digoxin toxicity**. Breathing is **fast** in respiratory alkalosis (usually the cause — each breath is near normal size, but the air moved per minute rises) and **weak** in metabolic alkalosis.', ['**↑ HR**, thready pulse, low BP', 'Low K⁺ → **digoxin toxicity**', 'Fast breathing (respiratory) vs **weak** (metabolic)']]
      ],
      why: 'Alkalosis pulls **calcium onto proteins** (less free calcium) and **potassium into cells**, so it looks like **hypocalcemia plus hypokalemia** at once: nerves fire too easily while muscles lose their strength.',
      whyShort: ['Looks like **low Ca²⁺ + low K⁺** together', 'Nerves **overfire**, muscles **weaken**']
    }, {
      title: 'Care (Table 14.4)',
      items: [
        ['Stop the cause', 'work with the provider to **modify or stop** what may be causing it — prolonged **gastric suction**, excess IV solutions, drugs that make the kidneys lose H⁺. **Antiemetics** for vomiting; for diuretic-caused alkalosis, **replace fluid and electrolytes** and adjust or stop the diuretic.', ['**Stop/modify**: NG suction, IV fluids, diuretics', '**Antiemetics**; replace **fluid + electrolytes**']],
        ['Replace and monitor', 'prevent further loss of **hydrogen, potassium, calcium and chloride**; give fluids and electrolyte replacement as prescribed; check **electrolytes daily** until near normal; watch the ECG and the breathing muscles.', ['Prevent loss of **H⁺, K⁺, Ca²⁺, Cl⁻**', '**Electrolytes daily**']],
        ['Prevent falls', '**hypotension and muscle weakness** make falls the nursing priority during correction — especially in older adults.', ['**Falls** = the priority (low BP + weakness)']],
        ['Respiratory alkalosis from anxiety', 'stay with the patient, give **calm reassurance**, and coach **slow breathing**; oxygen as needed; watch for the **bicarbonate dropping** as the kidneys compensate. Your book lists **breathing into a paper bag**.', ['**Calm reassurance**; coach **slow breathing**', 'O₂ as needed; watch **HCO₃⁻**']],
        ['Beyond the book', 'many current references **discourage paper-bag rebreathing**: it can drop the oxygen level, and fast breathing may be the body’s response to **hypoxia** — a **pulmonary embolism**, asthma attack or heart attack — rather than anxiety. Check **SpO₂** and rule out those causes before calling it panic.', ['Paper bag can cause **hypoxemia**', 'Rule out **PE, asthma, MI** first — check **SpO₂**']]
      ],
      why: 'The patient with alkalosis is in danger from **injury** (falls, tetany, seizures) and **electrolyte loss** more than from the pH itself, so care centers on **stopping the loss** and **keeping the patient safe** while the kidneys and replacements restore balance.',
      whyShort: ['Danger: **falls, tetany, seizures, electrolyte loss**', '**Stop the loss** + keep safe']
    }]
  });

  adpie({
    ch: '14',
    lead: 'For any acid–base problem the nurse asks **which way** (pH), **which organ** (PaCO₂ = lungs, HCO₃⁻ = metabolism and kidneys) and **what it is doing to the patient** — the **heart** and potassium in acidosis, the **nerves**, calcium and potassium in alkalosis, the **breathing** in both — then treats the **cause** and prevents **falls**.',
    leadShort: ['**Which way** (pH)? **Which organ** (CO₂ vs HCO₃⁻)?', 'Acidosis: **heart + K⁺** first; alkalosis: **nerves, Ca²⁺, K⁺**', 'Treat the **cause**; **prevent falls**'],
    A: {
      cells: [
        ['History', 'lung disease (**COPD**), **kidney failure, diabetes**, diarrhea, vomiting or NG suction, pancreatitis, fever, seizures; recent **opioids or sedation**; every drug — **diuretics, aspirin, antacids**, bicarbonate, digoxin; fluids in the last 24 hours and urine changes; drowsiness, headache, weakness, fatigue, tingling or cramps; ask the family if the patient is confused.', ['**COPD, kidney failure, diabetes**, GI losses', '**Opioids/sedation**', 'Drugs: **diuretics, aspirin, antacids**, digoxin']],
        ['Physical', '**heart first**: rate, rhythm, **T waves and QRS** on the monitor, BP, pulse quality; breathing **rate, depth, pattern (Kussmaul?)** and effort, **finishing a sentence**, accessory muscles, breath sounds, **SpO₂**; mental status against **baseline** (count back by threes); **hand grip and leg push**, reflexes; **Chvostek and Trousseau**; skin color and warmth; turgor.', ['**Heart first**: rhythm, **T waves, QRS**, BP', 'Breathing: **Kussmaul?** effort, sentences, **SpO₂**', 'Mind vs baseline; **grip, reflexes**, Chvostek/Trousseau']],
        ['Labs', '**ABG**: pH 7.35–7.45, **PaCO₂ 35–45**, **HCO₃⁻ 21–28**, **PaO₂ 80–100**; arterial **lactate** 3–7 mg/dL; **potassium** (high in acidosis, low in alkalosis), **calcium**, chloride, glucose and ketones (DKA), BUN and creatinine; the **ECG**.', ['**ABG**: 7.35–7.45 · CO₂ 35–45 · HCO₃⁻ 21–28 · O₂ 80–100', '**K⁺**, Ca²⁺, Cl⁻, glucose/ketones, kidney labs', '**ECG**']]
      ],
      why: 'The same complaint — weakness, confusion — can come from acidosis or alkalosis, from potassium too high or too low. Only the **gas plus the electrolytes plus the bedside picture** together point to the right treatment.',
      whyShort: ['Weakness or confusion can be **either** problem', '**Gas + electrolytes + bedside** together']
    },
    D: {
      cells: [
        ['Priority problems', 'respiratory acidosis: **reduced gas exchange** from the underlying lung disease. Acidosis: risk for **dysrhythmias and cardiac arrest** from hyperkalemia, and **falls** from low BP, poor perfusion and slowed thinking. Alkalosis: risk for **injury** — falls from hypotension and weakness, tetany, seizures — and **weak breathing**.', ['Respiratory acidosis: **reduced gas exchange**', 'Acidosis: **dysrhythmias** (K⁺), **falls**', 'Alkalosis: **injury** (falls, tetany, seizures), weak breathing']]
      ]
    },
    P: {
      cells: [
        ['Outcomes', 'fewer signs of the imbalance; **pH above 7.2 and moving toward normal** (or back to the patient’s baseline); PaO₂ and PaCO₂ improving from admission; **potassium and calcium in range** with a stable ECG; adequate gas exchange; **no falls or injury**; the patient takes drugs as prescribed and knows the warning signs.', ['**pH → normal** (or baseline); gases improving', '**K⁺, Ca²⁺** in range; stable **ECG**', '**No falls**; knows the warning signs']]
      ]
    },
    I: {
      cells: [
        ['Acidosis', '**metabolic**: fluids, **insulin** for DKA, antidiarrheals, **bicarbonate if pH under 7.2** with low HCO₃⁻; continuous **heart and muscle** monitoring. **Respiratory**: keep the **airway** open; **bronchodilators, anti-inflammatories, mucolytics**; **lowest oxygen** that prevents hypoxemia; positioning and breathing techniques; **ventilator** if SpO₂ can’t stay at 90% or muscles tire; breathing checks **hourly**.', ['Metabolic: **fluids, insulin**, antidiarrheals, **HCO₃⁻ if pH <7.2**', 'Respiratory: **airway**, bronchodilators, **lowest O₂**', 'Ventilator if **SpO₂ <90%** or fatigue']],
        ['Alkalosis', '**stop the cause** (NG suction, excess IV fluids, diuretics, antacids); **fluids and electrolytes** (potassium, calcium, chloride) as prescribed; **antiemetics**; electrolytes **daily**; for anxious hyperventilation, **calm coaching and slow breathing** after checking oxygenation.', ['**Stop the cause**', 'Replace **fluids + K⁺, Ca²⁺, Cl⁻**; antiemetics', 'Anxiety: **slow breathing** after checking **SpO₂**']],
        ['Safety and teaching', '**fall precautions** for every acid–base problem; **neuro checks at least every 2 hours**; trend **ABGs and potassium**. Teach: take **diuretics, blood-pressure and heart drugs** exactly as prescribed; don’t overuse **antacids or baking soda**; manage diabetes and lung disease; report **vomiting or diarrhea that won’t stop**, new weakness, confusion or trouble breathing.', ['**Falls**; neuro **q2h**; trend ABGs + K⁺', 'Teach: drugs **as prescribed**; no antacid overuse', 'Report **persistent GI losses**, weakness, confusion, dyspnea']]
      ]
    },
    E: {
      cells: [
        ['Evaluate', 'breathing easier with adequate gas exchange; **pH above 7.2 and heading toward 7.35–7.45** (or the patient’s baseline); **PaO₂ above 90** or 10 mm Hg better than on admission; **PaCO₂ under 45** or 15 mm Hg better; **potassium and calcium in range**, heart rhythm at baseline; alert and oriented; strength and reflexes back to normal; no tetany, seizures or falls.', ['**pH >7.2** → normal or baseline', '**PaO₂ >90 (+10)**; **PaCO₂ <45 (−15)**', '**K⁺, Ca²⁺** normal; rhythm, alertness, strength back', 'No tetany, seizures or falls']]
      ]
    }
  });
};
