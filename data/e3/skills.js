// Exam 3 skills checklists (Exam 3 Skills.html): the bedside skills for the GI and endocrine chapters.
// Each skill: id, title, ch, when (what it is for), steps [text, why, critical?], mistakes (common errors),
// stop (findings that mean stop and report), and q (titles of Mastery test questions that use it; 'case:<id>' for a case study).
// Written in our own words from standard nursing-skills practice (for example Open RN Nursing Skills, 2nd ed., CC BY 4.0)
// and the med-surg chapters. Where a school or agency checklist differs, follow it for the check-off.
window.E3_SKILLS = [
  { id: 'abd', ch: '45', title: 'Abdominal assessment',
    when: 'Every GI client, every shift — and any time pain, distention, nausea or a change in bowel pattern appears.',
    steps: [
      ['Explain, provide privacy and ask the client to empty the bladder', 'A full bladder is uncomfortable to press on and can be mistaken for a mass.'],
      ['Position supine, knees slightly bent, arms at the sides; warm your hands and stethoscope', 'Bent knees relax the abdominal muscles; cold hands make them tense.'],
      ['Ask where it hurts and plan to examine that area last', 'Starting on the painful area makes the client guard everything after it.', true],
      ['Inspect: contour, symmetry, skin, scars, distention, visible pulsations or peristalsis', 'Look before anything changes the picture.'],
      ['Auscultate before touching, starting in the right lower quadrant, then the other quadrants', 'Palpation and percussion move gas and fluid and change bowel sounds. Sounds are most constant over the ileocecal valve.', true],
      ['Listen for bowel sounds in each quadrant; listen longer (per policy, up to several minutes) before calling them absent', 'Normal sounds are irregular gurgles; high-pitched tinkling suggests early obstruction; absence suggests ileus.'],
      ['Listen over the aorta and renal arteries for bruits', 'A bruit can mean narrowing or an aneurysm.'],
      ['Palpate lightly in all quadrants, tender areas last; note guarding, rigidity, masses — and don’t palpate at all if appendicitis or an aortic aneurysm is suspected', 'Rigidity that doesn’t relax suggests peritonitis; pressing on an inflamed appendix or an aneurysm can rupture it.'],
      ['Ask about the last bowel movement, flatus, nausea, appetite and stool appearance', 'Flatus within 8 hours or a stool within 12–24 hours is the best sign that peristalsis has returned after surgery.'],
      ['Document findings and report anything abnormal', 'Trends matter — today’s findings are compared with yesterday’s.']
    ],
    mistakes: ['Palpating before listening', 'Calling bowel sounds absent after a few seconds', 'Pressing on a pulsating midline mass', 'Deep palpation or percussion beyond your role (these are often the provider’s)'],
    stop: ['A pulsating midline mass or an aortic bruit — don’t touch it; report now', 'A rigid, boardlike abdomen, rebound tenderness or guarding', 'New distention with absent bowel sounds and vomiting'],
    q: ['Where to listen first', 'Abdominal exam sequence', 'Pulsating mass', 'Return of peristalsis'] },

  { id: 'ng', ch: '48', title: 'Inserting an NG tube and checking placement',
    when: 'Decompression for bowel obstruction or ileus; feeding or medications when the client can’t swallow.',
    steps: [
      ['Check the prescription; gather the tube, water-soluble lubricant, 60 mL syringe, pH strip, tape or securement device, suction set-up', 'Everything at hand before you start keeps the time with a tube in the throat short.'],
      ['Explain, agree on a stop signal, and place the client in high Fowler’s', 'Upright helps the tube follow the esophagus and protects the airway if the client vomits.', true],
      ['Check the nostrils for patency; choose the more open side', 'A deviated septum or obstruction makes insertion painful.'],
      ['Measure tip of nose → earlobe → xiphoid process (NEX) and mark the tube', 'That length reaches the stomach.', true],
      ['Lubricate the tip with water-soluble lubricant', 'Oil-based lubricant can cause pneumonia if aspirated.'],
      ['Insert along the floor of the nose; at the back of the throat ask the client to tilt the chin down and swallow sips of water (if allowed)', 'Chin down narrows the airway; swallowing opens the esophagus and closes the epiglottis.', true],
      ['Advance to the mark as the client swallows; stop and pull back if coughing, choking, inability to speak or cyanosis', 'These mean the tube may be in the airway.', true],
      ['Confirm placement as the agency requires: x-ray for the first placement before use; aspirate pH 5 or below supports gastric placement', 'Air auscultation (the “whoosh”) is not reliable. Never use the tube until placement is confirmed.', true],
      ['Secure the tube to the nose without pressure on the nostril; mark the exit point', 'Pressure causes skin breakdown; the mark shows if it migrates.'],
      ['Connect to suction or clamp as prescribed; keep the head of the bed at least 30 degrees', 'Reduces aspiration risk.'],
      ['Document length at the nostril, how placement was confirmed, and drainage', 'Before every use, check that the mark hasn’t moved.']
    ],
    mistakes: ['Relying on the air “whoosh” to confirm placement', 'Using the tube before the x-ray result', 'Inserting with the head tipped back', 'Taping so the tube presses on the nostril'],
    stop: ['Coughing, choking, inability to speak or cyanosis during insertion', 'Any NG tube in a client after esophageal or gastric surgery that has moved — don’t reinsert or advance it; call the surgeon', 'Suspected facial or basal skull fracture — NG tubes are not placed through the nose'],
    q: ['case:sbo', 'Caring for the NG tube', 'NG tube after fundoplication', 'Confirming a new feeding tube'] },

  { id: 'ngcare', ch: '48', title: 'NG tube care: suction, irrigation and removal',
    when: 'Every shift for a client with an NG tube to suction.',
    steps: [
      ['Check placement (mark at the nostril, pH as required) before irrigating or giving anything', 'A tube that has moved can put fluid into the esophagus or lungs.', true],
      ['Check the suction setting as prescribed: a Salem sump (double lumen) usually runs on low continuous suction with its blue vent open and above the stomach; a single-lumen tube runs on low intermittent suction', 'The sump’s vent lets air in so the tube doesn’t grab the stomach lining; a single-lumen tube has no vent, so continuous suction would pull the lining into its holes. A clamped vent stops the sump from working.', true],
      ['Measure and describe drainage every shift; count it as output', 'NG drainage is a fluid, potassium and acid loss that must be replaced.'],
      ['To irrigate (if prescribed): use normal saline, often 30 mL, instilled gently, then let it drain or aspirate gently', 'Plain water draws electrolytes out with the suction.', true],
      ['After irrigating a Salem sump, push 10–20 mL of air into the vent', 'Clears the vent lumen.'],
      ['Give mouth and nose care at least every 4 hours; check the nostril for pressure injury', 'Mouth breathing and NPO dry the mucosa.'],
      ['To remove: check the prescription, stop suction, flush or clear the tube as agency policy says', 'An empty tube is less likely to drip contents into the throat.'],
      ['Ask the client to take a deep breath and hold it; withdraw the tube smoothly and steadily', 'Holding the breath closes the glottis and protects the airway.', true],
      ['Offer mouth care; watch for nausea, distention and vomiting over the next hours', 'Symptoms coming back mean the bowel isn’t ready.']
    ],
    mistakes: ['Irrigating with water', 'Clamping or capping the Salem sump vent', 'Forgetting to count NG drainage in output', 'Repositioning a tube after gastric or esophageal surgery'],
    stop: ['Drainage stops while distention or nausea returns — check patency and placement, then report', 'Potassium dropping or signs of metabolic alkalosis (slow, shallow breathing, tingling, confusion)', 'Bright red NG drainage that is new'],
    q: ['Small-bowel obstruction on NG suction', 'Day 2 of a bowel obstruction', 'After gastric surgery', 'The NG tube after gastroplasty'] },

  { id: 'feed', ch: '48', title: 'Tube feeding and medications through a tube',
    when: 'Clients who can’t eat enough by mouth — after head and neck or esophageal surgery, dysphagia, critical illness.',
    steps: [
      ['Check the prescription: formula, rate or volume, flushes; check the formula label and expiration', 'Like a medication: right formula, right rate.'],
      ['Raise the head of the bed to at least 30–45 degrees and keep it there during and for 30–60 minutes after a bolus', 'The most important step to prevent aspiration.', true],
      ['Confirm placement before every feeding or medication (mark at the exit site; pH as policy requires)', 'Tubes migrate.', true],
      ['Check gastric residual if the agency requires it, and the abdomen for distention', 'Rising residuals, distention or vomiting suggest the feeding isn’t being tolerated.'],
      ['Flush with water (often 30 mL) before starting, every 4 hours on continuous feeding, and after', 'Prevents clogging — and the water counts as intake.'],
      ['Medications: give each one separately; use liquid forms when available; crush only those that can be crushed', 'Mixing drugs can clog the tube or cause interactions; enteric-coated and extended-release forms must not be crushed.', true],
      ['Stop the feeding, flush before the first drug, between each drug and after the last (often 15 mL each)', 'Keeps drugs from mixing with formula or each other.', true],
      ['Never add medications to the formula bag', 'The dose becomes uncertain and some drugs bind to formula.'],
      ['For a jejunostomy (J-tube), don’t check residuals and give the feeding continuously', 'The jejunum has no reservoir like the stomach.'],
      ['Record intake (formula and every flush), weight and tolerance', 'Daily weight is the best measure of fluid balance.']
    ],
    mistakes: ['Lowering the head of the bed for care while a feeding runs', 'Crushing enteric-coated or extended-release tablets', 'Giving several crushed drugs mixed together', 'Forgetting to count flushes as intake'],
    stop: ['Coughing, dyspnea or a drop in SpO₂ during a feeding — stop it, suction if needed, report', 'Vomiting, distention or high residuals', 'Tube that won’t flush after gentle warm-water flushing'],
    q: ['Tube feeding intake', 'J-tube after esophagectomy', 'Safe tube feeding', 'Confirming a new feeding tube', 'During a continuous tube feeding', 'Flushing a feeding tube', 'Unclogging a feeding tube', 'Tube feeding problems', 'A G-tube that won’t turn'] },

  { id: 'ostomy', ch: '48', title: 'Changing an ostomy pouch',
    when: 'Every 3–7 days for the wafer, sooner if it leaks; empty the pouch when one-third to one-half full.',
    steps: [
      ['Gather a new pouch and wafer, measuring guide, scissors, warm water, soft cloths; use gloves', 'Have everything ready before the stoma is uncovered — stomas can function at any time.'],
      ['Empty the old pouch, then gently remove it, pushing the skin away from the wafer (adhesive remover if needed)', 'Pulling the skin off with the wafer tears it.'],
      ['Clean the skin with warm water (mild soap if used, rinsed well); pat completely dry', 'Lotion or oily soap keeps the new wafer from sticking.', true],
      ['Look at the stoma: moist and red to pink is healthy; check the skin around it', 'Pale, dark red to purple, gray or black means poor blood supply.', true],
      ['Measure the stoma and cut the wafer opening 1/16 to 1/8 inch (about 1.5–3 mm) larger than the stoma; re-measure every week while it shrinks over the first 6–8 weeks', 'Too tight injures the stoma, which has no pain nerves to warn you; too loose lets output burn the skin.', true],
      ['Apply skin barrier or paste if used; place the wafer and hold your hand over it for a minute', 'Warmth helps the adhesive seal.'],
      ['Attach and close the pouch; check the seal', 'A leak means skin damage.'],
      ['Teach as you go: emptying, odor control, diet, when to call', 'Every change is a teaching opportunity — let the client do more each time.']
    ],
    mistakes: ['Cutting the opening too large', 'Applying the wafer to damp or lotioned skin', 'Changing the whole wafer every day (it irritates the skin)', 'Letting the pouch get more than half full (it can pull off)'],
    stop: ['Stoma pale, dark purple, gray or black — report now', 'Stoma retracting, prolapsing or bleeding more than a little', 'No output from an ileostomy for several hours with cramping and distention (blockage)', 'Ileostomy output over about 1 L a day or signs of dehydration'],
    q: ['Changing the pouch', 'Colostomy teaching', 'Living with a new ileostomy', 'New ileostomy stoma'] },

  { id: 'stool', ch: '45', title: 'Stool specimens: FIT, guaiac and stool tests for infection',
    when: 'Colorectal cancer screening; checking for GI bleeding; diarrhea that might be infectious.',
    steps: [
      ['Check which test is ordered — the instructions differ', 'FIT, guaiac (gFOBT), C. diff and ova and parasites each have their own rules.', true],
      ['FIT: no diet or drug limits; follow the kit for how many samples', 'FIT detects human hemoglobin only.'],
      ['Guaiac: for 3 days before and during, no red meat and no vitamin C over 250 mg a day; for 7 days, no NSAIDs (as instructed); samples from 3 separate stools', 'Red meat causes false positives; vitamin C causes false negatives; NSAIDs cause small bleeds.', true],
      ['Collect stool without urine, water or toilet paper in it', 'Urine and water change the results.'],
      ['C. difficile: send liquid or unformed stool only; place the client on contact precautions and use soap and water for hand hygiene', 'Formed stool isn’t tested; alcohol gel doesn’t kill C. diff spores.', true],
      ['Label in front of the client and send promptly (or store as the lab says)', 'Some organisms and tests don’t survive delays.'],
      ['Any positive screening test → colonoscopy', 'A stool test only finds blood; the colonoscopy finds the cause.']
    ],
    mistakes: ['Giving guaiac diet rules for a FIT test (or none for a guaiac test)', 'Sending formed stool for C. diff', 'Using alcohol gel after caring for a C. diff client'],
    stop: ['Black, tarry stool or visible blood with dizziness — that is a bleed, not a screening question'],
    q: ['Stool tests for blood', 'gFOBT teaching'] },

  { id: 'glucose', ch: '56', title: 'Capillary (fingerstick) blood glucose',
    when: 'Before meals and at bedtime for clients on insulin; whenever symptoms suggest low or high glucose.',
    steps: [
      ['Check the meter: quality control as the agency requires and strips in date', 'An unchecked meter gives numbers you can’t trust.'],
      ['Identify the client; have the client wash hands with warm water and dry them (or clean with alcohol and let it dry)', 'Sugar on the skin falsely raises the reading; wet alcohol dilutes the drop.', true],
      ['Let the hand hang down for a moment; choose the side of a fingertip, rotating sites', 'Gravity brings blood to the fingertip; the sides have fewer nerve endings.'],
      ['Lance with a single-use lancet; get a hanging drop without squeezing hard (wipe away the first drop if the agency or meter says to)', 'Hard squeezing adds tissue fluid and lowers the reading.'],
      ['Apply the drop to the strip; hold gauze to the site', ''],
      ['Read, compare with the client’s targets and symptoms, and act (insulin, treatment of a low, report)', 'A number only matters with what you do next.', true],
      ['Dispose of the lancet in a sharps container; clean the meter between clients', 'Shared meters spread hepatitis B — clean and disinfect after each use; never share lancet devices.'],
      ['Document the result and any action taken', '']
    ],
    mistakes: ['Testing a finger with sugar or wet alcohol on it', 'Squeezing hard to get blood', 'Using a meter result to treat a low without checking symptoms when the reading doesn’t fit (CGM alarms are confirmed with a fingerstick)'],
    stop: ['Glucose under 70 mg/dL — start the hypoglycemia protocol', 'Glucose over the agency’s call limit (often over 300) or a “HI” reading — check ketones as ordered and report'],
    q: ['CGM low alarm', 'Sharing a meter'] },

  { id: 'insulin', ch: '56', title: 'Drawing up and mixing insulin; subcutaneous injection',
    when: 'Insulin by syringe — including mixing a rapid- or short-acting insulin with NPH.',
    steps: [
      ['Check the prescription, the insulin type and dose, and the glucose; insulin is a high-alert drug — do the independent double check your agency requires', 'Look-alike names and unit errors cause serious harm.', true],
      ['Roll the NPH vial gently between your palms; don’t shake it', 'NPH is a suspension; shaking adds bubbles.'],
      ['Clean both vial tops with alcohol', ''],
      ['Inject air equal to the NPH dose into the NPH (cloudy) vial, without touching the insulin; remove the needle', 'Adds air so you can withdraw later without a vacuum — and keeps the needle clean.', true],
      ['Inject air equal to the regular dose into the regular (clear) vial and withdraw the regular dose', 'Clear before cloudy: this keeps NPH out of the regular vial.', true],
      ['Insert into the NPH vial and withdraw exactly the NPH dose — if you overdraw, discard and start again', 'You can’t push extra back without contaminating the NPH vial.'],
      ['Never mix glargine, detemir or degludec with any other insulin', 'Their action changes if mixed.', true],
      ['Choose a site (abdomen at least 2 inches from the navel, thigh, upper arm); rotate within the area', 'Rotation prevents fatty lumps that slow absorption.'],
      ['Pinch a fold of skin, inject at 90 degrees (45 degrees for a very thin client), push slowly, don’t aspirate, don’t massage', 'Massage speeds absorption unpredictably.'],
      ['Check that a meal will arrive on time for rapid-acting insulin', 'Lispro, aspart and glulisine start in about 15 minutes.', true]
    ],
    mistakes: ['Drawing up cloudy before clear', 'Shaking NPH', 'Mixing glargine with another insulin', 'Giving rapid-acting insulin when the tray is not coming'],
    stop: ['A dose that doesn’t match the prescription or the glucose — clarify first', 'The client can’t eat (NPO, vomiting) — clarify mealtime and basal doses with the provider'],
    q: ['Insulin timing and mixing', 'Giving and storing insulin', 'Which kind of insulin?', 'Mealtime plus correction', 'A very thin client'] },

  { id: 'pen', ch: '56', title: 'Insulin pen injection',
    when: 'Most clients with diabetes at home — and many hospitals for single-client use.',
    steps: [
      ['Check the pen label, dose and expiration; one pen per client only', 'Even with a new needle, blood can back into the cartridge — pens are never shared.', true],
      ['Roll a cloudy insulin pen to mix; attach a new pen needle', ''],
      ['Prime: dial 2 units and push with the needle pointing up until a drop appears', 'Clears air and confirms the needle works.', true],
      ['Dial the dose; clean the site; inject at 90 degrees', 'Pen needles are short — a skin fold is often not needed.'],
      ['Push the button fully and hold for about 10 seconds (or as the pen’s instructions say) before removing', 'Removing early lets insulin leak back out — a smaller dose than you think.', true],
      ['Remove and discard the needle in a sharps container; cap the pen', 'Leaving the needle on lets air in and insulin out.'],
      ['Store opened pens at room temperature and unopened ones in the refrigerator; note the date opened', 'Most opened pens last about 28 days (check the product).']
    ],
    mistakes: ['Skipping the prime', 'Pulling the needle out right away', 'Sharing a pen “with a new needle”', 'Storing the pen with the needle attached'],
    stop: ['Insulin that looks clumped, frosted or discolored, or a pen past its in-use date'],
    q: ['Giving and storing insulin'] },

  { id: 'hypo', ch: '56', title: 'Hypoglycemia protocol',
    when: 'Glucose under 70 mg/dL, or symptoms of a low (sweaty, shaky, fast pulse, confused) when you can’t check.',
    steps: [
      ['Check the glucose if you can do it fast; if you can’t, treat as a low', 'A little sugar won’t hurt a high; an untreated low can cause seizures.', true],
      ['Alert and able to swallow: give 15 g of fast carbohydrate (30 g if under 50 mg/dL) — glucose tablets or gel, or ½ cup (4 oz) of juice or regular soda; in the hospital avoid orange juice', 'Simple sugar works in minutes; fat (chocolate, milk) slows it. Orange juice is high in potassium, a problem for many hospitalized clients.', true],
      ['Recheck in 15 minutes; if still under 70, give another 15 g', 'The 15-15 rule.'],
      ['Once over 70: give a snack with protein and carbohydrate, or the meal if it is due', 'Keeps glucose from dropping again.'],
      ['Can’t swallow safely or unconscious: glucagon (IM, subcutaneous or nasal) — a second dose after 10 minutes if still unconscious — or IV dextrose (50% or 10%) per protocol; turn on the side', 'Nothing by mouth when the airway isn’t protected; glucagon can cause vomiting. Concentrated dextrose damages tissue if it leaks — watch the IV site.', true],
      ['If on acarbose or miglitol, use glucose tablets or gel', 'These drugs block the breakdown of table sugar.'],
      ['Find the cause (insulin without food, NPO, extra activity, kidney decline, sulfonylurea) and report', 'Long-acting insulin or sulfonylureas can make the low come back for hours.', true],
      ['Recheck every 15 minutes until resolved, then often for the next hours (target 70–110 mg/dL); document', 'Glucagon and dextrose wear off while the insulin may still be working.']
    ],
    mistakes: ['Giving juice to a drowsy client who can’t protect the airway', 'Treating with chocolate or a high-fat snack', 'Forgetting the recheck', 'Treating once when the insulin is long-acting'],
    stop: ['No improvement after two treatments, a seizure, or the client doesn’t wake — call rapid response'],
    q: ['Shaky before lunch', 'The 15-15 rule', 'Low glucose, awake and swallowing', 'Unconscious at home', 'Glucose of 44, still swallowing', 'case:hypo'] },

  { id: 'thyroid', ch: '55', title: 'Checks after thyroidectomy (including Chvostek and Trousseau)',
    when: 'With the vital signs — every 15 minutes until stable, then every 30 minutes — and as ordered for the first days after thyroid or parathyroid surgery.',
    steps: [
      ['Keep trach tray, suction, oxygen and IV calcium gluconate at the bedside', 'Both main complications (hematoma, low calcium) can close the airway.', true],
      ['Position semi-Fowler’s with the head and neck supported in neutral', 'Reduces swelling and strain on the incision.'],
      ['Check breathing: rate, effort, stridor, SpO₂', 'Stridor is an emergency.', true],
      ['Check the dressing and slide your hand behind the neck for blood; ask about tightness; watch for frequent swallowing', 'Blood pools at the back of the neck; a tight feeling suggests a hematoma.', true],
      ['Check the voice every 2 hours: hoarse but stable is common and usually temporary; worsening hoarseness or a weak voice may be nerve injury', 'Ask the client to speak — but limit talking for comfort.'],
      ['Ask about tingling around the mouth or in the fingers and toes', 'The first sign of low calcium.', true],
      ['Chvostek: tap the facial nerve just in front of the ear, below the cheekbone — a twitch of the lip or face is positive', 'Nerve irritability from low calcium.'],
      ['Trousseau: inflate a BP cuff above systolic for up to 3 minutes — spasm of the hand and wrist is positive', 'Ischemia brings out latent tetany.'],
      ['Trend calcium levels; report a falling level or a positive sign', 'Calcium often falls on days 1–3.'],
      ['Watch for thyroid storm in a client with hyperthyroidism: fever and a fast heart rate first, then agitation or confusion — report a temperature rise of even 1 °F', 'Surgery is a stress that can trigger it.']
    ],
    mistakes: ['Checking only the front of the dressing', 'Treating new stridor as “just hoarseness”', 'Leaving the room to get emergency equipment', 'Hyperextending the neck'],
    stop: ['Stridor, increasing neck swelling or respiratory distress — call rapid response and stay', 'Tingling, positive Chvostek or Trousseau, or muscle cramps — report and have IV calcium ready'],
    q: ['Tingling after thyroidectomy', 'After thyroidectomy', 'Hoarseness vs stridor', 'case:thyroidectomy'] },

  { id: 'foot', ch: '56', title: 'Diabetic foot exam with a monofilament',
    when: 'At least once a year for every client with diabetes; every 3–6 months once protective sensation is lost, and every 1–3 months with PAD or a past ulcer (Table 56.7).',
    steps: [
      ['Remove shoes and socks; inspect the skin, nails, between the toes, and the shoes', 'Calluses, cracks, blisters and poorly fitting shoes come before ulcers.', true],
      ['Check pedal pulses, skin temperature and capillary refill', 'Poor circulation slows healing.'],
      ['Show the client the 10-g monofilament on the hand so they know what it feels like', ''],
      ['Have the client close the eyes and say “yes” each time they feel it', 'Prevents guessing.'],
      ['Press the filament straight onto the skin until it bends, hold about 1–2 seconds; test every site in the protocol — your book uses 10 points on each foot — avoiding calluses', 'Bending applies a standard 10-g force; calluses can’t feel it anyway.', true],
      ['Record and report each site not felt; numb sites mean protective sensation is lost there', 'Those feet can be injured without pain — the risk category, and how often the feet are checked, goes up.', true],
      ['Teach daily foot care and refer to podiatry as needed', 'Daily self-checks catch injuries early.']
    ],
    mistakes: ['Testing over a callus', 'Letting the client watch', 'Sliding or tapping the filament instead of pressing until it bends'],
    stop: ['Any open wound, redness with warmth, or a black area — refer the same day', 'A cold, pale foot with absent pulses'],
    q: ['Monofilament', 'Diabetic foot care', 'Foot care teaching', 'Numb feet, weak pulses'] },

  { id: 'urine24', ch: '53', title: '24-hour urine collection',
    when: 'Cortisol, catecholamines, protein, creatinine clearance and other endocrine tests.',
    steps: [
      ['Check the lab’s rules — container, preservative, cold storage, diet or drug limits; any preservative goes in the container before the collection starts', 'Some preservatives are caustic: don’t splash them, and warn the client. Some foods and drugs change results — no new drug, over-the-counter included, without asking the provider.'],
      ['At the start time, have the client void and discard that urine; note the time', 'That urine was made before the test began.', true],
      ['Save every void for exactly 24 hours, kept cold if the test requires it (refrigerator, or a cooler with ice — not with food or drinks)', 'One missed void means starting over.', true],
      ['Post a sign and tell the client, family and AP; keep toilet paper and stool out of the urine', 'Everyone has to know to save it.'],
      ['At the end time, have the client void — even without the urge — and add it to the container', 'The last void belongs to the test.', true],
      ['Label and send promptly; document start and end times', '']
    ],
    mistakes: ['Saving the first void', 'Throwing away the last void', 'Not restarting after a lost void', 'Storing the container with food or drinks'],
    stop: ['A void is lost or contaminated — restart the collection and tell the lab'],
    q: ['24-hour urine', 'A 24-hour urine collection', 'Instructing the AP on the collection'] }
];
