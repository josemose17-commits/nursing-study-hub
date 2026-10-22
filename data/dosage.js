// Dosage Calculations.html — the notes for each topic and its Check yourself items, rewritten from the student's dosage
// calculation notes (eight topics), with two copy slips fixed ("1 sc-camel-m-l = 1 cc" is 1 mL = 1 cc; "mL — never mL" is
// never “mL.” with a period). Where the notes differ from the med-surg book or current practice, a flag says so.
// Blocks: { h, p } · { h, list } (an item may be [bold lead, rest]) · { h, steps } · { h, table: [head, ...rows] } ·
// { h, cards: [[title, text]] } · { h, da: { lhs, want, f }, ans, after } (a worked setup, drawn like the drill's) ·
// { deep, p } (tap to open) · { flag } (heads-up) · { h, reveal: [{ q, steps }] } (tap to show the working).
// checks: { q, o, a, hint, work } (choose one) or { q, ans, unit, hint, work } (type a number). Miss once → the hint;
// miss again → the worked answer. node tools/check_dosage.js checks them.
window.DOSE_TOPICS = [
  { id: 'order', title: 'Medication safety and the order', lead: 'Most errors are stopped before any math: in how the order is written, copied to the MAR and read.',
    blocks: [
      { h: 'ISMP writing rules — required, not optional', list: [
        ['No trailing zero.', 'Write 5 mg, never 5.0 mg — if the point is missed it reads as 50.'],
        ['A leading zero below 1.', 'Write 0.3 mg, never .3 mg — a missed point turns it into 3.'],
        ['Spell out “units.”', 'A “U” can be read as a 0 (10 U → 100 units, a tenfold overdose) or a 4.'],
        ['No period after a unit or abbreviation.', 'Write mL, never “mL.” — the period can be read as a 1.'],
        ['mcg, not µg.', 'The µ can be read as an m — mg instead of mcg, a thousandfold error.'],
        ['mL, not cc.', 'A handwritten “cc” can be read as “U” (units).'],
        ['Commas from 1,000.', 'Write 5,000, not 5000, so the zeros can’t be miscounted.'],
        ['Words for very large numbers.', '150 thousand units, 1 million units.']] },
      { p: 'The Joint Commission’s “Do Not Use” list overlaps these rules (U, IU, QD, QOD, trailing zeros, missing leading zeros, and MS, MSO₄ and MgSO₄). One exception to the trailing-zero rule: body surface area is written to hundredths, so 0.80 m² keeps its zero.' },
      { h: 'What every order must have', list: ['Patient’s name', 'Date and time written', 'Drug name', 'Dose', 'Route', 'Frequency or time', 'Prescriber’s signature'] },
      { p: 'If any part is missing or unclear, clarify it with the prescriber before you give anything. The order is copied (transcribed) to the MAR, and give times are written in military time using the agency’s standard times.' },
      { h: 'The six rights', list: ['Right patient', 'Right drug', 'Right dose', 'Right route', 'Right time', 'Right documentation'] },
      { p: 'The nurse is the last check before the drug reaches the patient, and “right dose” includes checking that the dose is safe (topic 6). Your skills lab checks it with three label comparisons: the order against the MAR, the label against the MAR when you take the drug out, and the label against the MAR again at the bedside — after two identifiers.' },
      { h: 'Routes', list: [['Enteral (through the GI tract):', 'by mouth (PO), buccal, sublingual (SL), rectal (PR), feeding tube.'], ['Parenteral (injected):', 'intradermal (ID), subcutaneous (subcut — your notes write SUBQ; ISMP flags SQ and SC), intramuscular (IM), intravenous (IV).'], ['Topical and other:', 'nasal, transdermal, eye (ophthalmic), ear (otic), inhaled.']] },
      { p: 'The route decides what you measure into — a cup, an oral syringe, a syringe, a pump — and that is where it meets the math.' },
      { h: 'Reading a drug label', list: [
        ['Names:', 'the brand name (capitalized, usually on top) and the generic name (lowercase, beneath) — or the generic alone.'],
        ['Dosage strength:', 'how much drug is in each unit of the form — 250 mg per tablet, 2 mg per 5 mL.'],
        ['Form:', 'solid (tablet, capsule) or liquid (solution, syrup, suspension).'],
        ['Unit:', 'weight (g, mg, mcg), milliequivalents (mEq), or units (a measure of biological activity).'],
        ['Tall Man lettering:', 'capitals inside a name (DOXOrubicin, DAUNOrubicin) so look-alike names look different.'],
        ['Boxed warning:', 'the FDA’s strongest warning — a risk of death or serious harm.'],
        ['REMS:', 'a risk-management program the FDA requires for some drugs: the manufacturer monitors safety and trains prescribers and pharmacies.'],
        ['Expiration date:', 'the last day an unopened container may be used.']] },
      { h: 'What each label in your notes teaches', cards: [
        ['Names', 'Dilantin (brand, on top) over phenytoin (generic, beneath); 50 mg per chewable tablet.'],
        ['Strength and form', 'Flagyl: 250 mg (the drug) + each tablet (the form) = a dosage strength of 250 mg per tablet.'],
        ['One strength, two ways', 'Ondansetron prints 4 mg per 2 mL and 2 mg per mL — the same strength, shown twice to prevent errors.'],
        ['Two drugs in one', 'Caduet 5 mg/10 mg per tablet = amlodipine 5 mg + atorvastatin 10 mg.'],
        ['Route', 'Azulfidine “tablets” means by mouth — “oral” is seldom printed on solid forms.'],
        ['Concentration', 'Lincocin 300 mg/mL is the ratio 300 mg : 1 mL. Note its warning to dilute before IV use.'],
        ['Liquid strength', 'Albuterol syrup 2 mg per 5 mL — liquid strengths are always per a volume.'],
        ['Controlled substance', 'Morphine sulfate ER: the C-II mark means Schedule II. Extended-release — don’t crush, chew or dissolve.'],
        ['Tall Man lettering', 'DOXOrubicin: the capitals keep it from being read as DAUNOrubicin. Note “cytotoxic agent.”'],
        ['Boxed warning', 'Metoclopramide: a Medication Guide must go to each patient — its boxed warning is tardive dyskinesia.'],
        ['Single-dose vial', 'Depo-Medrol 1 mL single-dose: no preservative — one dose, then discard the rest. IM only, not for IV.'],
        ['Multiple-dose vial', 'Tobramycin 30 mL multiple-dose: has a preservative — write the date opened and the beyond-use date.'],
        ['Look-alike, sound-alike', 'NovoLog Mix 70/30 (insulin aspart mix) and Novolin 70/30 (human insulin mix): same maker, same “70/30,” different drugs. Check the order against the MAR and know why the patient is getting it.']] },
      { deep: 'Why look-alike, sound-alike names cause so many errors', p: 'We read words by their outline and their first letters, and we see what we expect — especially when rushed. Names that share a beginning, an ending or a number (70/30) collapse into one, and packaging from the same maker often looks alike. The defenses are layered: Tall Man lettering, storing look-alikes apart, barcode scanning, reading the label at each of the three checks, and knowing why the patient takes the drug — an order that doesn’t fit the patient’s problem is a red flag.' },
      { deep: 'Beyond-use date vs expiration date', p: 'The expiration date is the manufacturer’s, for the product unopened. Once a vial is opened, a beyond-use date applies: most multiple-dose vials are discarded 28 days after the first puncture unless the manufacturer gives a different time (or sooner, if the expiration date comes first) — so date the vial when you open it. A single-dose vial has no preservative: one patient, one time, and the rest is discarded.' }
    ],
    checks: [
      { q: 'Which order is written correctly?', o: ['Digoxin .25 mg', 'Digoxin 0.250 mg', 'Digoxin 0.25 mg', 'Digoxin 0.25 mgs'], a: 2, hint: 'Look for the leading zero, no trailing zero and a unit that isn’t plural.', work: '.25 has no leading zero, 0.250 has a trailing zero, and units are never plural (mgs). Only 0.25 mg follows every rule.' },
      { q: 'A resident writes “insulin 10 U subcut.” What do you do?', o: ['Give 10 units', 'Clarify the order', 'Give 100 units', 'Chart it and hold'], a: 1, hint: 'Is “U” allowed?', work: '“U” is on the Do Not Use list — it can be read as a 0 (100 units). Never act on an unsafe abbreviation: contact the prescriber to rewrite it with “units.”' },
      { q: 'Which is NOT one of the six rights of medication administration?', o: ['Right dose', 'Right route', 'Right brand name', 'Right documentation'], a: 2, hint: 'The six: patient, drug, dose, route, time, documentation.', work: 'The right drug is checked by name — generic or brand — so “right brand name” isn’t one of the rights. Generic substitution is common.' }
    ] },

  { id: 'units', title: 'Systems of measurement', lead: 'Every calculation rides on its units. Learn these equivalents until they come without thinking — there is no shortcut.',
    blocks: [
      { h: 'The equivalents to know cold', table: [['Equivalent', 'Remember'],
        ['1 kg = 1,000 g', ''], ['1 g = 1,000 mg', ''], ['1 mg = 1,000 mcg', ''], ['1 L = 1,000 mL', ''], ['1 mL = 1 cc', 'write mL, never cc'],
        ['1 tsp = 5 mL', ''], ['1 Tbs = 3 tsp = 15 mL', ''], ['1 oz = 2 Tbs = 6 tsp = 30 mL', ''], ['1 kg = 2.2 lb', 'kg is the smaller number'], ['1 in = 2.54 cm', ''],
        ['1 hr = 60 min', ''], ['1 glass or cup = 240 mL', 'some facilities use 180 mL — use yours'], ['1 g of wet diaper = 1 mL of urine', '']] },
      { h: 'The metric line', table: [['Prefix', 'Value'], ['kilo (k)', '1,000'], ['hecto (h)', '100'], ['deka (da)', '10'], ['base: gram, liter, meter', '1'], ['deci (d)', '0.1'], ['centi (c)', '0.01'], ['milli (m)', '0.001'], ['micro (mc)', '0.000001']] },
      { p: 'Each step down the line is a unit ten times smaller. Changing to a smaller unit makes the number bigger — move the decimal point right; to a bigger unit, move it left. Gram → milligram → microgram are each 3 places apart: 0.5 g = 500 mg, and 125 mcg = 0.125 mg.' },
      { h: 'Writing metric numbers — the 8 rules', steps: ['Arabic numerals, not Roman: 1 mg, not I mg.', 'A space between the number and the symbol: 1 g.', 'The number before the symbol: 2.5 mL.', 'Decimals, not fractions: 0.5 mg, not ½ mg.', 'A leading zero before a decimal: 0.5 mL.', 'No trailing zero: 1 mL, not 1.0 mL.', 'Symbols are never plural: 15 mL, not 15 mLs.', 'Commas in thousands; “thousand” or “million” for larger numbers.'] },
      { p: 'Rules 2, 5, 6 and 8 are ISMP requirements for every kind of clinical communication.' },
      { h: 'Symbol traps', list: [['Capital L for liter.', 'A lowercase l looks like the number 1.'], ['“m” alone is a meter;', 'before a base unit it means milli — mL is a milliliter, 1 m is a meter.'], ['Spell out teaspoon and tablespoon when there is any doubt.', 'T and t are a threefold error.'], ['Never use >, <, ≥ or ≤ in an order.', 'They are easily misread (ISMP).'], ['Household measures are approximate.', 'Teach patients to use a marked cup or oral syringe, never a kitchen spoon.']] }
    ],
    checks: [
      { q: 'An order reads 2 tsp. How many mL do you pour?', ans: 10, unit: 'mL', hint: '1 tsp = 5 mL.', work: '2 tsp × 5 mL/tsp = 10 mL.' },
      { q: 'The patient drank 1 glass (8 oz) of juice. How many mL do you record?', ans: 240, unit: 'mL', hint: '1 oz = 30 mL.', work: '8 oz × 30 mL/oz = 240 mL.' },
      { q: '0.5 g equals how many mg?', o: ['5 mg', '50 mg', '500 mg', '5,000 mg'], a: 2, hint: 'g → mg: the decimal moves 3 places right.', work: '0.5 × 1,000 = 500 mg.' }
    ] },

  { id: 'da', title: 'Dimensional analysis — your method', lead: 'One setup handles every problem type: you cancel units until only the answer’s unit is left. No formula to memorize.',
    blocks: [
      { h: 'The five steps — every time', steps: ['Ordered amount: write the ordered dose as a fraction over 1.', 'Desired amount: write “x” with the unit the answer must be in (tablets, mL, gtt/min).', 'Conversion factors: the label’s dosage strength, plus any more you need so every unwanted unit can cancel.', 'Cancel units: every unit except the one you want must cancel. If one won’t, the setup is wrong — not the math.', 'Solve and sanity-check: multiply across the top, multiply across the bottom, divide. Then ask: does this make sense?'] },
      { h: 'A conversion factor', p: 'Two equal amounts written as a fraction — the top equals the bottom, only the units differ — so you can flip it either way: 2.54 cm / 1 in or 1 in / 2.54 cm. Put the unit you want to cancel on the bottom. The label’s 250 mg per tablet becomes 1 tablet / 250 mg, with mg on the bottom so the ordered mg cancels and tablets are left.' },
      { h: 'Worked: no conversion needed', p: 'Order: Flagyl 500 mg PO three times a day. Available: 250 mg tablets. How many tablets?', da: { lhs: 'x tablets', want: { n: ['tablet'], d: [] }, f: [[500, 'mg', 1, ''], [1, 'tablet', 250, 'mg']] }, ans: '2 tablets', after: 'Sanity check: 500 ordered, 250 in each tablet → two tablets. Makes sense.' },
      { h: 'Worked: one metric conversion', p: 'Order: enalaprilat 625 mcg IV. Available: 1.25 mg/mL. How many mL?', da: { lhs: 'x mL', want: { n: ['mL'], d: [] }, f: [[625, 'mcg', 1, ''], [1, 'mg', 1000, 'mcg'], [1, 'mL', 1.25, 'mg']] }, ans: '0.5 mL', after: 'mcg cancels mcg, mg cancels mg, and mL is left. That’s the whole trick.' },
      { h: 'Worked: several conversions (metric and household)', p: 'Order: Vibramycin 0.1 g PO. Available: 50 mg/5 mL; the dosing cup is marked in teaspoons. How many tsp?', da: { lhs: 'x tsp', want: { n: ['tsp'], d: [] }, f: [[0.1, 'g', 1, ''], [1000, 'mg', 1, 'g'], [5, 'mL', 50, 'mg'], [1, 'tsp', 5, 'mL']] }, ans: '2 tsp', after: 'The order of the factors doesn’t matter — only that each unwanted unit appears once on top and once on the bottom.' },
      { h: 'Rounding rules', list: [['Under 1 mL:', 'work to thousandths, round to hundredths — 0.333 → 0.33 mL (1 mL syringe).'], ['1 mL or more:', 'work to hundredths, round to tenths — 1.66 → 1.7 mL (3 mL syringe).'], ['Drops per minute:', 'a whole number — you can’t count part of a drop (33.3 → 33 gtt/min).'], ['mL/hr on a pump:', 'tenths if the pump takes them, otherwise whole (83.3 or 83 mL/hr).'], ['Body surface area:', 'hundredths, and the zero stays (0.80 m²).'], ['Tablets:', 'only scored tablets are halved; never split capsules or extended-release tablets.']] },
      { deep: 'Why DA is safer than the formula method', p: 'The units do the checking for you. With D/H × V you have to notice yourself that the order is in mcg and the label in mg; in DA the unit that won’t cancel points straight at the mistake. And one setup covers tablets, liquids, IV rates and weight-based doses, so under pressure there is no formula to pick wrong.' },
      { deep: 'Where the dosage strength goes', p: 'The label’s strength is the one factor every dose problem needs: it is the bridge from the drug (mg) to what you actually give (tablets, mL). Written with the order’s unit on the bottom, it puts the answer’s unit on top from the start; the other factors only convert units so they can meet it. The worked examples sometimes place a conversion before it — the order of factors never changes the answer, as long as everything unwanted cancels.' },
      { deep: 'The sanity check is not optional', p: 'After the math, compare the answer with the order. More drug ordered than one tablet holds means more than one tablet; a dose of more than 2 or 3 tablets is unusual; an injection is rarely more than 3 mL (about 1 mL in the deltoid or subcutaneously); a child’s dose is smaller than an adult’s. An answer outside that is a decimal or setup error until proven otherwise — recheck before you draw anything up, and question an order that needs an unusual amount.' }
    ],
    checks: [
      { q: 'In DA, what always goes in the very first denominator?', o: ['The dose ordered', 'The unit you are solving for', 'The unit you want to cancel', '1'], a: 3, hint: 'Step 1 writes the ordered amount as a fraction over something.', work: 'The ordered amount is written over 1 (500 mg / 1), so the first denominator is always 1.' },
      { q: 'Order: 0.375 mg. Label: 0.125 mg per tablet. How many tablets?', ans: 3, unit: 'tablets', hint: 'Use 1 tablet / 0.125 mg, with mg on the bottom.', work: '0.375 mg × 1 tablet / 0.125 mg = 3 tablets.' },
      { q: 'You finish a DA setup, but mg is still left next to the mL you wanted. What does that tell you?', o: ['The answer is right', 'A factor is flipped or missing', 'You need to round', 'Convert to grams'], a: 1, hint: 'Leftover units mean the setup — not the arithmetic — is wrong.', work: 'Any unit besides the answer’s that survives the cancelling means a factor is upside down or a conversion is missing. Fix the setup before doing any math.' }
    ] },

  { id: 'parenteral', title: 'Oral and parenteral dosages', lead: 'Picking the device is part of the calculation — the answer has to be something you can measure.',
    blocks: [
      { h: 'IV push: dilution and rate', list: [
        ['Why dilute?', 'A less concentrated drug irritates the vein less. The manufacturer decides — check the package insert, a drug reference or policy.'],
        ['Four kinds of instruction:', 'a set diluent volume; an equal volume; a target concentration; or dilution by diagnosis, age or weight.'],
        ['Target concentration:', 'total syringe volume = ordered dose ÷ target concentration; diluent to add = total volume − the drug’s volume.'],
        ['Drawing from two vials:', 'air into the diluent vial, air into the drug vial, draw the drug, then the diluent. Work out the dose first, the diluent second.'],
        ['Rate types:', 'fixed (for example, over 1 minute whatever the dose), dose-based (no faster than 50 mg/min), or set by age or diagnosis.'],
        ['“Or fraction thereof”:', 'a partial amount still gets the full time — 175 mg at no more than 150 mg/min takes 2 minutes, not 1.17.']] },
      { flag: 'Speed shock: a push given too fast floods the blood with drug — flushing, severe headache, chest tightness, low blood pressure, an irregular pulse, fainting, even cardiac arrest. Prevent it by timing the push with a watch; if it happens, stop, support the airway, breathing and circulation, and give an antidote if there is one.' },
      { h: 'Worked: dilute to a target concentration', p: 'Order: famotidine 20 mg IV push. Vial: 10 mg/mL. Dilute to 2 mg/mL. How much diluent?', reveal: [{ q: 'Show the working', steps: ['Total volume: 20 mg ÷ 2 mg/mL = 10 mL', 'Drug volume: 20 mg ÷ 10 mg/mL = 2 mL', 'Diluent: 10 − 2 = 8 mL'] }] },
      { h: 'Syringes and what they measure', table: [['Syringe', 'Lines', 'Use'], ['1 mL (tuberculin)', 'every 0.01 mL (long lines 0.1)', 'any dose under 1 mL'], ['3 mL', 'every 0.1 mL (long lines 0.5)', 'most injections'], ['5–12 mL', 'every 0.2 mL (long lines 1 mL)', 'preparing IV drugs'], ['20–60 mL', 'every 1 mL, numbered every 5', 'large volumes']] },
      { p: 'Read at the first ring of the plunger — the one nearest the tip — and it must sit exactly on a line. Never estimate between lines. Use the smallest syringe that holds the dose.' },
      { h: 'Insulin — high alert', list: [
        ['Ordered in units, never mL.', 'The number ordered is the number you draw — there is no calculation.'],
        ['U-100 means 100 units per mL —', 'its concentration, not the dose. U-500 is five times stronger and needs its own U-500 syringe; store it apart from U-100.'],
        ['Syringes:', 'the 100-unit (1 mL) syringe usually has 2-unit lines (even doses); 50- and 30-unit syringes have 1-unit lines, so they measure odd doses. Use the smallest that holds the dose.'],
        ['Two insulins in one syringe:', 'one that holds the total and measures odd units if either dose is odd. Clear before cloudy (regular before NPH), per policy.'],
        ['Route:', 'subcut for every insulin. Premixed insulins (70/30, 50/50) are never given IV.'],
        ['Double-check', 'every insulin dose with another licensed nurse.']] },
      { flag: 'Your notes say only rapid- and short-acting insulins may go IV. In practice and on exams, regular insulin is the IV insulin (DKA drips); a few rapid-acting analogs are approved for IV use only under close supervision.' },
      { h: 'Insulin timing (your notes)', table: [['Type', 'Onset', 'Peak', 'Lasts'], ['Rapid', '5–15 min', '1 hr', '2–4 hr'], ['Short (regular)', '30 min', '2–3 hr', '3–6 hr'], ['Intermediate (NPH)', '2–4 hr', '4–12 hr', '12–18 hr'], ['Long', '6–10 hr', 'none', '20–24 hr']] },
      { p: 'Rapid and short = bolus insulin, given with meals. Intermediate and long = basal insulin, the steady background.' },
      { flag: 'Your med-surg book (Table 56.6, used on the Exam 3 drug cards) gives different times: lispro onset 15–30 min, peak 0.5–2.5 hr, 3–6 hr; regular onset 30–60 min, peak 1–5 hr, 6–10 hr; NPH onset 1–2 hr, peak 6–14 hr, 16–24 hr; glargine onset about 70 min, no peak, 18–24 hr. References disagree on exact times — use the book’s for the med-surg exams.' },
      { h: 'Drugs measured in units or mEq', list: [
        ['A unit measures biological activity, not weight,', 'so it never converts to mg. The order and the label are both in units — no conversion is ever needed.'],
        ['Heparin (units, high alert):', 'strengths run from 10 units/mL flushes to many thousands of units per mL — read the label every time.'],
        ['Penicillin and insulin:', 'units. Potassium and other electrolytes: mEq.'],
        ['Low-molecular-weight heparins are different:', 'dalteparin (Fragmin) in international units, enoxaparin (Lovenox) in mg. Never confuse either with heparin.'],
        ['The Joint Commission’s anticoagulant goal (NPSG.03.05.01):', 'prefilled syringes and premixed bags when available, approved protocols, baseline and ongoing labs, and programmable pumps for continuous IV heparin. Most agencies add an independent double-check by a second nurse.']] },
      { h: 'Reconstituting powders', list: [
        ['The front label shows the total drug in the vial', '(1 g), not the dosage strength. The strength exists only once you add diluent — read it on the side panel or package insert.'],
        ['Single-strength:', 'one diluent amount → one strength.'],
        ['Multiple-strength:', 'you choose the diluent amount, and that sets the strength. Circle the amount you used and the strength on the label.'],
        ['Displacement:', 'the powder takes up space, so the final volume is more than the diluent you added. Never use it in the math — use only the stated strength.'],
        ['IM and IV directions often differ', '— read the one for your route.'],
        ['Label the vial:', 'date and time mixed, diluent type and amount, the strength, the beyond-use date and time, your initials.']] },
      { h: 'Worked: a reconstituted powder', p: 'Ceftriaxone 1 g vial; for IM use add 2.1 mL of 1% lidocaine to make 350 mg/mL. Order: 500 mg IM.', da: { lhs: 'x mL', want: { n: ['mL'], d: [] }, f: [[500, 'mg', 1, ''], [1, 'mL', 350, 'mg']] }, ans: '1.4 mL', after: '1.428… is over 1 mL, so it rounds to tenths. Use the 350 mg/mL strength, never the 2.1 mL of diluent.' },
      { h: 'Needles', p: 'Length (5/16 to 2 inches) grows with the depth of the injection and the patient’s size. Gauge runs from 16 to 31 — the higher the number, the thinner the needle; use the thinnest that suits the drug. Check the length and gauge on the package; hub colors vary by brand. Children’s IM maximums in the vastus lateralis (your notes): newborn 0.5 mL, infant to toddler 1 mL, child to teen 2–2.5 mL.' }
    ],
    checks: [
      { q: 'Order: 40 mg. Label: 25 mg/mL. How many mL do you draw up?', ans: 1.6, unit: 'mL', hint: 'Use 1 mL / 25 mg; the answer is over 1 mL, so tenths.', work: '40 mg × 1 mL / 25 mg = 1.6 mL.' },
      { q: 'The order reads “insulin 14 units.” Which syringe is best?', o: ['1 mL tuberculin', '100-unit insulin syringe', '30-unit insulin syringe', '3 mL syringe'], a: 2, hint: 'The smallest insulin syringe that holds the dose.', work: '14 units fits in a 30-unit syringe, which has 1-unit lines. Never measure insulin in a tuberculin or 3 mL syringe — they are marked in mL.' },
      { q: 'A vial reads “1 g” of powder. Where do you find the dosage strength?', o: ['On the front label', 'After reconstitution — side panel or insert', 'Divide by the diluent', 'From the MAR'], a: 1, hint: 'Is there a strength before any diluent is added?', work: 'The front shows the total in the vial. The strength (for example 350 mg/mL) exists only after you add the stated diluent — it is on the side panel or the insert.' }
    ] },

  { id: 'iv', title: 'IV therapy calculations', lead: 'Pumps run in mL/hr; gravity is counted in drops per minute. Everything else follows from those two facts.',
    blocks: [
      { h: 'Pump rate (mL/hr)', p: 'mL/hr = total volume (mL) ÷ total time (hr). If the order already gives mL/hr, there is nothing to calculate — program it. Round to tenths if the pump takes decimals (83.3), otherwise to a whole number (83).', da: { lhs: 'x mL/hr', want: { n: ['mL'], d: ['hr'] }, f: [[1, 'L', 12, 'hr'], [1000, 'mL', 1, 'L']] }, ans: '83.3 mL/hr', after: '1 L over 12 hours.' },
      { h: 'Gravity rate (gtt/min)', p: 'gtt/min = volume (mL) × drop factor (gtt/mL) ÷ time (min).', da: { lhs: 'x gtt/min', want: { n: ['gtt'], d: ['min'] }, f: [[50, 'mL', 15, 'min'], [10, 'gtt', 1, 'mL']] }, ans: '33 gtt/min', after: '50 mL over 15 minutes with 10 gtt/mL tubing: 500 ÷ 15 = 33.3 → 33.' },
      { list: [['Macrodrip:', '10, 15 or 20 gtt/mL — most fluids and blood products.'], ['Microdrip (pedi-drip, mini-drip):', 'always 60 gtt/mL — children and potent drugs.'], ['Shortcut:', 'with 60 gtt/mL tubing, gtt/min = mL/hr (40 mL/hr = 40 gtt/min).'], ['The drop factor is on the tubing package,', 'not the tubing — read it before you throw the package away. Volume must be in mL and time in minutes: convert first.']] },
      { h: 'Infusion time and completion time', steps: ['Infusion time (hr) = total volume ÷ mL/hr. Solve to hundredths.', 'Multiply the decimal part by 60 to get minutes.', 'Round the minutes to a whole number.'] },
      { p: '1,000 mL at 75 mL/hr = 13.33 hr → 0.33 × 60 = 19.8 → 20 min → 13 hr 20 min. Completion time = start time + infusion time, in military time. Past 2400? Subtract 2400 — it finishes the next day (2300 + 1000 = 3300 → 0900). Minutes of 60 or more? Subtract 60 and add an hour (0345 + 0530 = 0875 → 0915).' },
      { p: 'Military time: four digits, no colon. 0000 starts the day (some agencies write 2400 for midnight at its end). 8:45 AM = 0845 · 1:00 PM = 1300 · 7:30 PM = 1930.' },
      { h: 'IV solutions', p: 'Isotonic: 0.9% sodium chloride (normal saline) and lactated Ringer’s. Hypotonic: 0.45% (½NS) and 0.225% (¼NS). Hypertonic: 3% sodium chloride. Dextrose: D5W, D10W, and combinations such as D5NS, D5½NS and D5LR. Potassium chloride is the usual additive (in mEq). The solution never changes the math — only the rate does.' },
      { flag: 'From your fluids chapter (Table 13.3): D5W is isotonic in the bag but acts hypotonic once the body uses the sugar, and the D5 combinations (D5NS, D5½NS, D5LR) are hypertonic in the bag.' },
      { h: 'The time tape (flow meter)', p: 'A strip on the bag showing the start time, the level expected each hour and the end time. The bag is marked every 100 mL (numbered) with unnumbered lines every 50 mL; its 1, 2, 3 mean 100, 200, 300 mL infused. Mark each hour’s level from the rate (75 mL/hr → 75, 150, 225…), estimating between lines. Read mid-shift, it gives both numbers you owe: the volume infused (intake) and the volume left (for handoff).' },
      { h: 'Titrating high-alert drips', list: [
        ['The order gives', 'the total drug (TD) in the total volume (TV) and the hourly drug (HD); you solve for the hourly volume (HV) — the mL/hr you set.'],
        ['DA setup:', 'HD × TV/TD × any conversions (60 min/1 hr for per-minute orders; the patient’s kg for weight-based ones).'],
        ['Narrow therapeutic index:', 'little room between a helpful and a toxic level, and a fast onset — continuous monitoring. The half-life sets how often the dose can change.'],
        ['A titration order must state', 'the drug, route, starting rate, size of each change, how often it may change, the maximum, and the measure that guides it (BP, HR, a lab) — The Joint Commission.'],
        ['Two ways to titrate:', 'by a body measure (BP, HR, ECG) or by protocol (labs — aPTT or anti-Xa for heparin; also insulin, oxytocin, amiodarone).'],
        ['Safety:', 'an independent double-check, smart pumps, and tenths entered exactly (10.6 stays 10.6). If the goal isn’t reached within the ordered limits, stop and call the prescriber — never go past the maximum.']] },
      { h: 'Worked: heparin', p: 'Heparin 25,000 units in 250 mL; order 1,000 units/hr.', da: { lhs: 'x mL/hr', want: { n: ['mL'], d: ['hr'] }, f: [[1000, 'units', 1, 'hr'], [250, 'mL', 25000, 'units']] }, ans: '10 mL/hr' },
      { h: 'Worked: mcg/kg/min', p: 'Dopamine 400 mg in 250 mL; order 5 mcg/kg/min; the patient weighs 80 kg.', da: { lhs: 'x mL/hr', want: { n: ['mL'], d: ['hr'] }, f: [[5, 'mcg', 1, ['kg', 'min']], [80, 'kg', 1, ''], [60, 'min', 1, 'hr'], [1, 'mg', 1000, 'mcg'], [250, 'mL', 400, 'mg']] }, ans: '15 mL/hr' }
    ],
    checks: [
      { q: 'Infuse 1,000 mL over 8 hours by pump. Set the pump to how many mL/hr?', ans: 125, unit: 'mL/hr', hint: 'mL ÷ hours.', work: '1,000 mL ÷ 8 hr = 125 mL/hr.' },
      { q: '50 mL IVPB over 30 minutes, drop factor 15 gtt/mL. How many gtt/min?', ans: 25, unit: 'gtt/min', hint: 'mL × drop factor ÷ minutes.', work: '50 mL × 15 gtt/mL ÷ 30 min = 750 ÷ 30 = 25 gtt/min.' },
      { q: 'Where do you find the drop factor?', o: ['The IV bag', 'The pump screen', 'The tubing package', 'The order'], a: 2, hint: 'It belongs to the tubing, not the fluid.', work: 'The drop factor (gtt/mL) is printed on the tubing package — read it before you discard the package.' }
    ] },

  { id: 'safe', title: 'Verifying a safe dose', lead: 'Choosing the dose is outside nursing scope. Checking that it is safe — and speaking up when it isn’t — is yours.',
    blocks: [
      { h: 'Weight-based dosing in four steps', steps: ['Convert pounds to kilograms if needed (÷ 2.2).', 'Work out the recommended dose for this weight (mg/kg × kg); for a range, work out both ends.', 'If the reference gives a total daily dose to divide, divide by the number of doses in 24 hours.', 'Compare with the order and decide.'] },
      { h: 'Worked: 10 mcg/kg for a 154 lb patient', da: { lhs: 'x mcg', want: { n: ['mcg'], d: [] }, f: [[154, 'lb', 1, ''], [1, 'kg', 2.2, 'lb'], [10, 'mcg', 1, 'kg']] }, ans: '700 mcg', after: 'In DA, weight-based problems start with the weight; the dose per kg comes second.' },
      { p: 'Divided doses: amoxicillin 20–40 mg/kg/day divided every 8 hours for a 21 kg child → 420–840 mg/day ÷ 3 = 140–280 mg per dose. An order of 150 mg every 8 hours is within the range — safe.' },
      { h: 'Body surface area (BSA)', p: 'BSA uses both height and weight (in m²). It is standard for chemotherapy, many children’s drugs and some critical-care drugs. The prescriber usually calculates it; you check it with the current height and weight.' },
      { table: [['Formula', 'BSA (m²)'], ['Metric', '√(kg × cm ÷ 3,600)'], ['Household', '√(lb × in ÷ 3,131)']] },
      { p: 'Only the divisor differs. 46 kg and 105 cm: 4,830 ÷ 3,600 = 1.342 → √ = 1.158 → 1.16 m². Round to hundredths. Nomogram (the West nomogram for children): a straight line from height to weight; the BSA is where it crosses the SA column, and the boxed column uses weight alone for a child of normal height for weight. Use a true straight edge. In DA, BSA-based problems start with the BSA.' },
      { h: 'Safe vs effective', list: [['Safe:', 'within (at or below the top of) the reference’s recommended dose.'], ['Effective:', 'enough to work. Half an acetaminophen tablet is safe but won’t break a fever.'], ['Outside the range?', 'Don’t give it — contact the prescriber to clarify. Changing the dose isn’t nursing scope; advocacy is.'], ['A dose may differ for a reason:', 'lower in liver disease (to prevent toxicity), higher for a serious infection. You still clarify.']] },
      { h: 'Dose terms', table: [['Term', 'Meaning'], ['Single dose', 'given at one time'], ['Total daily dose', 'the whole 24-hour amount'], ['Divided dose', 'parts of the daily dose given at set intervals'], ['Initial dose', 'the first dose'], ['Loading dose', 'a large first dose to reach a working level fast'], ['Maintenance dose', 'the doses that keep the effect going']] },
      { deep: 'Why BSA instead of weight for chemotherapy', p: 'Chemotherapy has a narrow gap between the dose that kills cancer cells and the one that harms marrow and gut. Body surface area tracks metabolic rate, kidney filtration and blood volume more closely than weight alone — especially across very different body sizes — so doses are more consistent. It isn’t perfect (some drugs are now dosed by kidney function or capped), but it is the standard check.' },
      { deep: 'Why older adults are at higher medication risk', p: 'With age the kidneys and liver clear drugs more slowly, body water falls and fat rises (water-soluble drugs reach higher levels; fat-soluble ones linger), albumin may be low (more free drug), and many older adults take several drugs that interact. Start low and go slow, check kidney function, and use the Beers Criteria to spot drugs to avoid.' }
    ],
    checks: [
      { q: 'A child weighs 44 lb. What is the weight in kg?', ans: 20, unit: 'kg', hint: 'Divide pounds by 2.2.', work: '44 lb ÷ 2.2 = 20 kg.' },
      { q: 'The safe range is up to 5 mg/kg/day for a 20 kg child. What is the maximum daily dose?', ans: 100, unit: 'mg', hint: 'mg/kg/day × kg.', work: '5 mg/kg/day × 20 kg = 100 mg/day.' },
      { q: 'Your calculated safe maximum is 100 mg/day, but the order reads 150 mg/day. What now?', o: ['Give 100 mg', 'Give as ordered', 'Hold and contact the prescriber', 'Split it into 3 doses'], a: 2, hint: 'Who may change a dose?', work: 'Above the safe maximum: don’t give it, and don’t change it yourself — hold it and contact the prescriber.' }
    ] },

  { id: 'io', title: 'Intake and output, tube feeding and children', lead: 'Simple arithmetic with high stakes — this is how fluid balance gets seen.',
    blocks: [
      { h: 'Oral intake', list: [['Count anything liquid at room temperature:', 'drinks, soup, ice cream, gelatin, popsicles, ice chips.'], ['Ice chips count as half their volume:', 'a 6 oz cup of ice = 3 oz (90 mL) of water.'], ['Always record in mL:', 'multiply household measures by their equivalent (3 oz × 30 = 90 mL).']] },
      { h: 'Output', p: 'Any fluid the body loses: urine, emesis, NG or gastric drainage, wound drainage, chest tube drainage, diarrhea, and fluid removed by a procedure (paracentesis, thoracentesis). Record urine and emesis each time; drains and wound devices at the end of the shift, just before emptying. Total each kind separately.' },
      { p: 'Continuous bladder irrigation: the bag holds urine plus irrigant, so true urine = total drainage − irrigant infused. 925 mL drained − (50 mL/hr × 8 hr = 400 mL) = 525 mL of urine.' },
      { h: 'IV (parenteral) intake', list: [['IV intake = mL/hr × hours actually infused.', ''], ['Your notes:', 'intake is often closed 1 hour before the shift ends, and that last hour belongs to the next shift (day 0700–1500 counts 0600–1400; evenings count 1400–2200). Facilities set their own times — follow yours.'], ['Interruptions count:', 'an infiltration or a dislodged catheter means fewer hours. 0700–1000 (3 hr) + 1200–1400 (2 hr) at 100 mL/hr = 500 mL, not 700.'], ['Rate change:', 'work out each part and add — 75 × 4 hr + 100 × 3 hr = 600 mL.'], ['Piggybacks:', 'record each separately; each bag’s full volume is intake.']] },
      { h: 'Tube feeding', list: [['Continuous:', 'mL/hr × the hours it ran this shift (50 × 8 = 400 mL).'], ['Intermittent:', 'add the feedings scheduled in your shift (250 at 0600 + 250 at 1200 = 500 mL).'], ['Water flushes count too —', 'after medications and after each feeding (200 + 50 + 200 + 50 = 500 mL).'], ['Methods:', 'bolus (a 50–60 mL syringe over 15–20 min), gravity bag (30–60 min), pump (continuous), cyclic (a set window, often overnight).']] },
      { flag: 'Diluted strength is the one place DA doesn’t work. The fraction is formula over total volume (formula + water). ⅓ strength from a 237 mL can: total = 237 ÷ ⅓ = 711 mL → water = 711 − 237 = 474 mL. Always two steps: the total volume, then subtract the formula.' },
      { p: 'Diluting is uncommon now — mixing raises the infection risk. The nutrition society (A.S.P.E.N.) wants each order to name the patient, the formula, the delivery device and the rate or method, with every container clearly labeled.' },
      { h: 'Children', list: [
        ['By mouth is preferred.', 'Liquids for infants and young children, measured with a calibrated device suited to the child’s age; check that the child can swallow first.'],
        ['Guarding against over-infusion:', 'smart or syringe pumps, a volume-control chamber (Buretrol), small bags (25–500 mL), microdrip tubing (60 gtt/mL).'],
        ['Monitoring is the priority:', 'daily weights, strict I&O, watching for fluid overload and electrolyte problems — imbalances come on faster than in adults.'],
        ['Oral rehydration first', 'for mild to moderate losses; IV maintenance fluid when the child can’t drink; replacement fluid is ordered on top, often mL for mL of measured losses.'],
        ['Replacement rate:', 'the maximum mL/hr − the maintenance rate = the rate left for replacement. 60 − 35 = 25 mL/hr; 75 mL of NG loss ÷ 25 = 3 hr; started at 1600 → stops at 1900.'],
        ['1 g of wet diaper weight = 1 mL of urine.', 'A pump is a tool, not judgment — double-check children’s doses with another nurse.']] }
    ],
    checks: [
      { q: 'The patient drank 8 oz of coffee, 4 oz of juice and 240 mL of water. Total intake?', ans: 600, unit: 'mL', hint: '1 oz = 30 mL.', work: '240 + 120 + 240 = 600 mL.' },
      { q: 'Which counts toward oral intake?', o: ['Applesauce', 'Gelatin', 'Mashed potatoes', 'Toast'], a: 1, hint: 'Is it liquid at room temperature?', work: 'Gelatin melts to a liquid at room temperature, so it counts. Applesauce, mashed potatoes and toast don’t.' },
      { q: 'A 15 kg child is ordered 10 mg/kg. What is the single dose?', ans: 150, unit: 'mg', hint: 'kg × mg/kg.', work: '15 kg × 10 mg/kg = 150 mg.' }
    ] },

  { id: 'pitfalls', title: 'Practice and pitfalls', lead: 'The other formula, the mistakes that cost points, the rounding rules, and problems worked start to finish.',
    blocks: [
      { h: '“Desired over have” — the other method', p: 'dose desired (D) ÷ dose on hand (H) × vehicle (V) = amount to give. The vehicle is the form the drug comes in (1 tablet, 5 mL) — not the route. It works only when the order and the label use the same unit; if they don’t, convert first (that is where DA is stronger). Your skills-lab checklist writes it D/H × Q = X.' },
      { reveal: [{ q: 'Order 500 mg acetaminophen; you have 250 mg tablets', steps: ['500 mg ÷ 250 mg × 1 tablet = 2 tablets', 'Check: 2 tablets × 250 mg = 500 mg ✓'] }] },
      { h: 'Worked: insulin sliding scale', p: 'Glucose 250 mg/dL. Scale: 2 units of regular insulin for every 50 mg/dL over 150 mg/dL.', reveal: [{ q: 'Show the working', steps: ['Over the base: 250 − 150 = 100 mg/dL', 'Steps of 50: 100 ÷ 50 = 2', 'Dose: 2 × 2 units = 4 units of regular insulin'] }] },
      { flag: 'Practice only — never use a scale without a current order and the agency’s approved protocol. Insulin is high alert: a U-100 insulin syringe for U-100 insulin (never a tuberculin syringe), and an independent double-check of every dose.' },
      { h: 'Four mistakes that cost points', list: [['Decimal drift:', 'the point moved the wrong way or too far. Write every step and check plausibility — 25 mL for one IV push should stop you.'], ['Unit confusion:', 'mixing mg, mcg and g. Write the unit beside every number and cancel as you go.'], ['Rounding too early:', 'round in the middle and the error grows. Carry full precision; round once, at the end.'], ['Wrong setup:', 'decide what you are solving for before you start — the answer’s unit tells you where to begin.']] },
      { h: 'Rounding — unless the order or policy says otherwise', list: [['Oral liquids:', 'nearest 0.1 mL for 1 mL or more; hundredths for tiny pediatric volumes.'], ['Tablets and capsules:', 'nearest whole or half, and only when scoring makes a split safe. Never split extended-release or enteric-coated tablets.'], ['Weight:', 'carry at least 2 decimals in kg until the final dose, then round as policy says.'], ['Gravity drips:', 'nearest whole drop.'], ['Pumps:', 'nearest whole mL/hr, unless the pump takes tenths and protocol wants them.'], ['Always', 'follow the strictest current facility policy or provider order.']] },
      { h: 'Practice problems — tap to see the working', reveal: [
        { q: '1 · Antibiotic IVPB 75 mL D5W every 6 hours over 1 hr, plus maintenance NS at 125 mL/hr. What is the 24-hour IV intake?', steps: ['IVPB: 75 mL × (24 ÷ 6 = 4 doses) = 300 mL', 'Maintenance: 125 mL/hr × 24 hr = 3,000 mL', 'Total: 300 + 3,000 = 3,300 mL'] },
        { q: '2 · IVPB 50 mL NS every 8 hours over 30 min, plus maintenance LR at 100 mL/hr. What is the 24-hour IV intake?', steps: ['IVPB: 50 mL × (24 ÷ 8 = 3 doses) = 150 mL', 'Maintenance: 100 mL/hr × 24 hr = 2,400 mL', 'Total: 150 + 2,400 = 2,550 mL'] },
        { q: '3 · 100 units of regular insulin in 100 mL NS running at 10 mL/hr. How many units per hour?', steps: ['100 units / 100 mL × 10 mL / 1 hr = 10 units/hr', 'The concentration is 1 unit/mL, so the mL/hr is the units/hr.'] },
        { q: '4a · Infuse 8 mL in 9 minutes with a 60 gtt/mL set. How many gtt/min?', steps: ['8 mL / 9 min × 60 gtt / 1 mL = 480 ÷ 9 = 53.3 → 53 gtt/min'] },
        { q: '4b · Infuse 2,750 mL in 20 hours with a 10 gtt/mL set. How many gtt/min?', steps: ['2,750 mL / 20 hr × 1 hr / 60 min × 10 gtt / 1 mL = 27,500 ÷ 1,200 = 22.9 → 23 gtt/min'] }] }
    ],
    checks: [
      { q: 'Which practice actually prevents rounding error?', o: ['Round every step to 2 places', 'Round only at the end', 'Always round up', 'Round to whole numbers early'], a: 1, hint: 'When does an error grow?', work: 'Rounding in the middle carries a small error into every later step. Keep full precision and round once, at the end.' },
      { q: 'Order 175 mg; push no faster than 150 mg/min “or fraction thereof.” Push over how many minutes?', ans: 2, unit: 'minutes', hint: 'A partial minute counts as a full one.', work: '175 ÷ 150 = 1.17 → the extra fraction of a minute gets a whole minute → 2 minutes.' },
      { q: 'Order 500 mg; tablets are 250 mg. Using D/H × V, what is V?', o: ['500 mg', '250 mg', '1 tablet', '2 tablets'], a: 2, hint: 'V is the form the drug comes in.', work: 'V is the vehicle — 1 tablet. D is 500 mg, H is 250 mg, and the answer is 2 tablets.' }
    ] }
];
