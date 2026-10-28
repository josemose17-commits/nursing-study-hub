// The Exam 3 map's "Think it through" view: each condition laid out in the order of clinical judgment (NCSBN's six
// steps, as in ncjmm.js), so a tap goes condition → step → cue card → the detail, the why, the drug, the video and the
// organ → molecule breakdown.
// Built by tools/build_cj_map.js into data/e3/cj-map.js. Run from the repo root: node tools/build_cj_map.js
//
// A condition:
//   id, sys (the map's system name), name, topics (its Map topic ids, for "All the notes" and its videos),
//   nodes (organ → molecule breakdown ids), drugs (drug-card ids), patient (one line that sets the scene),
//   steps: { rc, ac, ph, gs, ta, eo } — each { gist, cards }.
//   gist is this condition's one-line answer to the step's question: plain text, **bold**, written from the notes.
//   A card is 'topicId > label' (or 'topicId > box title > label' when a label repeats in a topic), optionally
//   { ref, as } to rename it or { ref, tag } to flag it (e.g. 'If it worsens'). The card's text, Quick bullets and its
//   box's Why come from the notes at build time, so the facts live in one place: data/e3/src.
module.exports = [
  {
    id: 'hypothyroid', sys: 'Hormones & glucose', name: 'Hypothyroidism and myxedema coma',
    topics: ['55-hypothyroidism-the-cellular-regulation-e', '55-myxedema-coma'],
    nodes: ['hypothyroid'], drugs: ['levothyroxine'],
    patient: 'A 72-year-old says she has been tired and cold for months, is constipated and has gained weight without eating more.',
    steps: {
      rc: {
        gist: 'Everything is **slow**: cold, tired, constipated, weight gain, slow pulse and breathing, a puffy face and thick tongue — a change you only see **against a year ago**.',
        cards: ['55-hypothyroidism-the-cellular-regulation-e > Ask', '55-hypothyroidism-the-cellular-regulation-e > See',
          '55-hypothyroidism-the-cellular-regulation-e > Measure', '55-hypothyroidism-the-cellular-regulation-e > Mind and mood',
          { ref: '55-myxedema-coma > What you see', tag: 'If it worsens', as: 'Myxedema coma — what you see' }]
      },
      ac: {
        gist: 'Too little T3/T4 → **every cell burns less fuel**. **High TSH + low T4** means the gland itself failed (primary) — most often Hashimoto.',
        cards: ['55-hypothyroidism-the-cellular-regulation-e > Definition', '55-hypothyroidism-the-cellular-regulation-e > Causes (Box 55.1)',
          '55-hypothyroidism-the-cellular-regulation-e > Labs (Table 55.1)', '55-hypothyroidism-the-cellular-regulation-e > Who',
          '55-hypothyroidism-the-cellular-regulation-e > What it is and who gets it > Older adults']
      },
      ph: {
        gist: '**Breathing first** (slow, shallow respirations), then **low cardiac output**, then the risk of **myxedema coma** — which kills mostly by respiratory failure.',
        cards: ['55-hypothyroidism-the-cellular-regulation-e > Priority problems',
          { ref: '55-myxedema-coma > What it is', as: 'Myxedema coma — what it is' }, { ref: '55-myxedema-coma > Triggers', as: 'Myxedema coma — triggers' }]
      },
      gs: {
        gist: 'Support **breathing and the heart**, replace thyroid hormone **low and slow**, and teach **lifelong** therapy the client can check at home.',
        cards: ['55-hypothyroidism-the-cellular-regulation-e > Levothyroxine — how to give it', '55-hypothyroidism-the-cellular-regulation-e > Self-monitoring and teaching']
      },
      ta: {
        gist: 'Watch rate, depth and **SpO₂**, **avoid sedatives**, give **levothyroxine on an empty stomach**, report **chest pain**. In myxedema coma: **airway**, warm slowly, **IV** hormone.',
        cards: ['55-hypothyroidism-the-cellular-regulation-e > Gas exchange', '55-hypothyroidism-the-cellular-regulation-e > Cardiac output',
          '55-hypothyroidism-the-cellular-regulation-e > Levothyroxine — drug alert',
          { ref: '55-myxedema-coma > Action alert', tag: 'If it worsens', as: 'Myxedema coma — action alert' },
          { ref: '55-myxedema-coma > Emergency care (Box 55.3)', tag: 'If it worsens', as: 'Myxedema coma — emergency care' },
          { ref: '55-myxedema-coma > IV hormone and drug cautions', tag: 'If it worsens', as: 'Myxedema coma — IV hormone and drug cautions' }]
      },
      eo: {
        gist: '**Pulse above 60**, **SpO₂ above 93%**, clearer thinking. **Sleep and bowels** show the dose: more sleep and constipation = too low; insomnia and more stools = too high.',
        cards: ['55-hypothyroidism-the-cellular-regulation-e > Evaluate']
      }
    }
  },
  {
    id: 'hypoglycemia', sys: 'Hormones & glucose', name: 'Hypoglycemia',
    topics: ['56-hypoglycemia-the-15-15-rule'],
    nodes: ['dm-acute'], drugs: ['glucagon', 'd50'],
    patient: 'A client on insulin is shaky, sweaty and slow to answer an hour after a late lunch tray never came.',
    steps: {
      rc: {
        gist: 'Glucose **below 70**, or early warnings — **shaky, sweaty, pounding heart, hungry** — moving to brain signs: **confusion**, behavior change, **seizures**, unconsciousness.',
        cards: ['56-hypoglycemia-the-15-15-rule > Symptoms (Box 56.10)', '56-hypoglycemia-the-15-15-rule > Recognizing it > Older adults']
      },
      ac: {
        gist: 'The **brain can’t make or store glucose**, so a low quickly becomes a brain problem. Find the cause: **too much insulin or sulfonylurea** for the food and activity.',
        cards: ['56-hypoglycemia-the-15-15-rule > What happens', '56-hypoglycemia-the-15-15-rule > Causes']
      },
      ph: {
        gist: '**Can the client swallow safely?** That decides the route. Unable to swallow, confused, unconscious or seizing = **severe** — an emergency.',
        cards: ['56-hypoglycemia-the-15-15-rule > Severity and unawareness']
      },
      gs: {
        gist: '**Fast glucose by mouth** if alert and able to swallow; **glucagon or IV dextrose** if not; then a snack and a plan to **prevent the next one**.',
        cards: ['56-hypoglycemia-the-15-15-rule > The 15-15 rule', '56-hypoglycemia-the-15-15-rule > 15 g examples (Box 56.11)']
      },
      ta: {
        gist: '**Below 70 → 15 g** fast carbohydrate (**30 g below 50**), **recheck in 15 minutes**, repeat if still low. Can’t swallow → **glucagon** (turn to the side) or **IV dextrose** per protocol.',
        cards: ['56-hypoglycemia-the-15-15-rule > In the hospital', '56-hypoglycemia-the-15-15-rule > Can\'t swallow — glucagon and dextrose',
          '56-hypoglycemia-the-15-15-rule > Moderate and severe at home']
      },
      eo: {
        gist: 'Recheck **every 15 minutes** until it is out of the low range, then **complex carbohydrate + protein**. Expect it to **come back** with sulfonylureas or long-acting insulin, and teach prevention.',
        cards: ['56-hypoglycemia-the-15-15-rule > Prevention and teaching']
      }
    }
  },
  {
    id: 'ugib', sys: 'Digestion & elimination', name: 'Peptic ulcer with upper GI bleeding',
    topics: ['47-peptic-ulcer-disease-the-infection-exemp', '47-upper-gi-bleeding-and-ulcer-emergencies'],
    nodes: ['pud', 'ugib'], drugs: ['pantoprazole', 'omeprazole', 'clarithromycin', 'amoxicillin'],
    patient: 'A client who takes ibuprofen every day for back pain vomits coffee-ground material and feels dizzy standing up.',
    steps: {
      rc: {
        gist: '**Coffee-ground or bright red vomit**, **black tarry stool**, a **rising pulse and falling BP**, dizziness on standing, and **new confusion** in an older adult.',
        cards: ['47-peptic-ulcer-disease-the-infection-exemp > Hemorrhage — the most serious', '47-peptic-ulcer-disease-the-infection-exemp > Physical',
          '47-peptic-ulcer-disease-the-infection-exemp > History']
      },
      ac: {
        gist: '**Acid and pepsin** ate through the lining — from ***H. pylori*** or **NSAIDs** — into a vessel. The **color of the blood** tells how fast and how high the bleed is.',
        cards: ['47-peptic-ulcer-disease-the-infection-exemp > Definition and cause', '47-peptic-ulcer-disease-the-infection-exemp > Gastric vs duodenal (Table 47.2)',
          '47-peptic-ulcer-disease-the-infection-exemp > Tests for *H. pylori*']
      },
      ph: {
        gist: '**Hypovolemic shock** from blood loss comes first. A **sudden, board-like abdomen** means **perforation** — a surgical emergency.',
        cards: ['47-peptic-ulcer-disease-the-infection-exemp > Perforation', '47-peptic-ulcer-disease-the-infection-exemp > Priority problems and goals',
          '47-peptic-ulcer-disease-the-infection-exemp > Pyloric (gastric outlet) obstruction']
      },
      gs: {
        gist: '**Restore volume** (fluids, blood), **find and stop the bleeding** (scope), and **suppress acid** so the clot holds.',
        cards: ['47-upper-gi-bleeding-and-ulcer-emergencies > Fluids and blood', '47-upper-gi-bleeding-and-ulcer-emergencies > NG tube',
          '47-upper-gi-bleeding-and-ulcer-emergencies > Endoscopic hemostasis']
      },
      ta: {
        gist: '**ABCs**: oxygen, **two large-bore IVs**, isotonic fluid and blood; trend **vital signs, Hgb/Hct and SpO₂**; prepare for **EGD**.',
        cards: ['47-upper-gi-bleeding-and-ulcer-emergencies > Critical rescue', '47-upper-gi-bleeding-and-ulcer-emergencies > If bleeding continues']
      },
      eo: {
        gist: 'Vital signs and Hgb **stable**, **no orthostatic changes**, no new bleeding; the client **avoids NSAIDs**, finishes the ***H. pylori*** course and knows when to get help.',
        cards: ['47-upper-gi-bleeding-and-ulcer-emergencies > Evaluate', '47-upper-gi-bleeding-and-ulcer-emergencies > Going home']
      }
    }
  }
];
