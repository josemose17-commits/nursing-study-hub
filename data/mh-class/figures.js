// Exam 4 · Class review pictures. Each topic gets diagrams to draw from memory and then check.
// window.MH_FIGS = { topicId: [{ title, ask (what to draw), html (the diagram), note? }] }; mh.js shows them
// at the top of the topic. The diagrams are plain HTML styled by mh.css (.fg-*), written for this site.
(function () {
  function e(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function b(s) { return e(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'); }
  // boxes joined by arrows: [[heading, text, colorClass?], …]
  function flow(items, cls) { return '<div class="fg-flow ' + (cls || '') + '">' + items.map(function (x) { return '<div class="fg-box ' + (x[2] || '') + '"><b>' + e(x[0]) + '</b>' + (x[1] ? '<span>' + b(x[1]) + '</span>' : '') + '</div>'; }).join('<i class="fg-arrow" aria-hidden="true"></i>') + '</div>'; }
  // pyramid, top level first: [[label, example], …]
  function pyr(levels) { var n = levels.length; return '<div class="fg-pyr">' + levels.map(function (x, i) { return '<div class="fg-lvl" style="width:' + Math.round(46 + (54 * i) / (n - 1)) + '%"><b>' + e(x[0]) + '</b><span>' + b(x[1]) + '</span></div>'; }).join('') + '</div>'; }
  // side-by-side cards: [[heading, [lines], colorClass?], …]
  function cols(items, cls) { return '<div class="fg-cols ' + (cls || '') + '">' + items.map(function (x) { return '<div class="fg-card ' + (x[2] || '') + '"><b>' + e(x[0]) + '</b><ul>' + x[1].map(function (l) { return '<li>' + b(l) + '</li>'; }).join('') + '</ul></div>'; }).join('') + '</div>'; }
  function tbl(head, rows) { return '<div class="fg-tblw"><table class="fg-tbl"><tr>' + head.map(function (h) { return '<th>' + e(h) + '</th>'; }).join('') + '</tr>' + rows.map(function (r) { return '<tr class="' + (r.c || '') + '">' + r.map(function (c, i) { return (i ? '<td>' : '<th scope="row">') + b(c) + (i ? '</td>' : '</th>'); }).join('') + '</tr>'; }).join('') + '</table></div>'; }
  function row(a, c) { a.c = c; return a; }

  window.MH_FIGS = {
    screen: [
      { title: 'The stress chain', ask: 'Draw three boxes showing how months of worry turn into hopelessness.',
        html: flow([['1 · Chronic worry', 'Family and work pressure keep the brain in a danger state.'], ['2 · Fight or flight stays on', 'The sympathetic system keeps **cortisol** high.'], ['3 · Depletion', 'High cortisol lowers **serotonin and dopamine**: hopelessness.', 'warn']]) },
      { title: 'Six traits of mental health', ask: 'Write the six traits and one thing to ask Mrs. M for each.',
        html: cols([['Resilience', ['“What helped you before?”']], ['Reality orientation', ['Can she name real stressors?']], ['Emotional regulation', ['Constant, or does it lift?']], ['Self-concept', ['Guilt, “not doing enough”?']], ['Connectedness', ['“Who can you lean on?”']], ['Goal-directed', ['Hopeless = **safety screen**', ], 'warn']], 'three') }
    ],
    dsm: [
      { title: 'The diagnosis formula', ask: 'Draw the three steps a set of symptoms must pass to be a disorder.',
        html: flow([['1 · Symptom count', 'Depression: **5 of 9**.'], ['2 · Time frame', 'Depression **2 weeks**; GAD **6 months**.'], ['3 · Impairment', 'Distress or trouble at work or with people. **No impairment, no disorder.**', 'gold']]) },
      { title: 'Positive versus negative symptoms', ask: 'Make two columns: what is added, and what is missing.',
        html: cols([['＋ Positive (added)', ['Delusions', 'Hallucinations', 'Disorganized speech', 'Disorganized or catatonic behavior'], 'warn'], ['－ Negative (missing)', ['Flat affect', '**Avolition**: no motivation', '**Alogia**: little speech', '**Anhedonia**: no pleasure'], 'cool']]) }
    ],
    freud: [
      { title: 'Id, ego, superego', ask: 'Draw the three parts of the mind with the ego in the middle.',
        html: flow([['Id', '“I want it now.” **Pleasure** principle.', 'warn'], ['Ego', 'The referee. **Reality** principle. Overwhelmed = anxiety.', 'gold'], ['Superego', '“You should.” **Moral** principle: guilt, shame.', 'cool']], 'meet') },
      { title: 'Transference versus countertransference', ask: 'Draw two arrows between patient and nurse and write what the nurse does for each.',
        html: cols([['Patient ➜ Nurse: transference', ['“You’re just like my mother.”', 'Validate, clarify reality, redirect.', '**Do not** reassign.'], 'cool'], ['Nurse ➜ Patient: countertransference', ['Wants to rescue, or feels unprovoked anger.', '1 Self-reflect · 2 Supervision · 3 Boundaries', 'Reassign only as a **last resort**.'], 'warn']]) }
    ],
    peplau: [
      { title: 'The four phases', ask: 'Draw a timeline of the four phases with one thing the nurse says in each.',
        html: flow([['1 · Orientation', 'Trust, roles, the problem. **State the end date.**'], ['2 · Identification', '“I finally have a partner.” The alliance forms.'], ['3 · Exploitation (working)', 'Practice new coping. **Transference flares here.**', 'gold'], ['4 · Termination', 'Review and reinforce. **Never extend.**']]) },
      { title: 'Six roles of the nurse', ask: 'List the six roles and a cue for each.',
        html: cols([['Stranger', ['First meeting, respect']], ['Resource person', ['Answers questions']], ['Teacher', ['Builds a skill']], ['Leader', ['Sets goals together']], ['Surrogate', ['Stands in for someone from the past'], 'warn'], ['Counselor', ['Works through feelings']]], 'three') }
    ],
    behavior: [
      { title: 'Four consequences', ask: 'Draw a 2 × 2 grid: add or take away, and does the behavior go up or down?',
        html: tbl(['', 'Behavior goes UP', 'Behavior goes DOWN'], [['Add something', '**Positive reinforcement**: tokens, praise', '**Punishment**: a speeding ticket'], ['Take away or withhold', '**Negative reinforcement**: antacid stops the pain', '**Extinction**: ignore the tantrum']]) },
      { title: 'Two ways to face a fear', ask: 'Draw a staircase for one therapy and a single jump for the other.',
        html: cols([['Systematic desensitization: the stairs', ['1 Learn relaxation first', '2 Build the fear ladder', '3 Climb one step at a time, only when calm'], 'cool'], ['Flooding: the jump', ['Straight to the worst fear, no escape', 'Anxiety peaks, then fades', '**Not with heart disease**'], 'warn']]) }
    ],
    cognitive: [
      { title: 'Beck’s cognitive triad', ask: 'Draw a triangle and label its three corners.',
        html: '<div class="fg-tri"><div class="fg-box gold"><b>Self</b><span>“I’m worthless.”</span></div><div class="fg-box"><b>World</b><span>“Everyone is against me.”</span></div><div class="fg-box"><b>Future</b><span>“It will never get better.”</span></div></div>' },
      { title: 'How CBT works', ask: 'Draw the chain from event to feeling, and where CBT steps in.',
        html: flow([['Event', 'Boss asks to meet.'], ['Automatic thought', '“I’ll be fired.” **CBT works here**: evidence for and against.', 'gold'], ['Feeling and action', 'Panic, calls in sick.'], ['Balanced thought', '“It may be routine. I’ll find out.”', 'cool']]) },
      { title: 'Four DBT skills', ask: 'Write the four skills in four squares.',
        html: cols([['Mindfulness', ['Stay in the present']], ['Distress tolerance', ['Ride out pain without self-harm']], ['Emotion regulation', ['Name and shift the feeling']], ['Interpersonal effectiveness', ['Boundaries, ask for needs']]]) }
    ],
    humanistic: [
      { title: 'Maslow’s pyramid', ask: 'Draw the five levels from the top down, with a patient example on each.',
        html: pyr([['Self-actualization', 'Long-term growth, insight'], ['Esteem', 'Dignity, control, listing strengths'], ['Love and belonging', 'Family, friends, isolation'], ['Safety', 'Suicide and fall precautions, shelter'], ['Physiological', '**Oxygen**, fluids, food, **sleep**, severe pain']]),
        note: 'Work from the **bottom up**: the base is met first.' },
      { title: 'Who do you see first?', ask: 'Draw the four-step priority ladder.',
        html: flow([['1 · ABCs', 'Airway, breathing, circulation.', 'warn'], ['2 · Other body needs', 'Electrolytes, severe pain, no sleep.'], ['3 · Safety', 'Suicide plan, confusion, falls.'], ['4 · Psychosocial', 'Anxiety, grief. The **loud** patient is often the decoy.', 'cool']]) }
    ],
    bio: [
      { title: 'Neurotransmitters: too much or too little', ask: 'Draw a three-column chart: the chemical, too much, too little.',
        html: tbl(['Chemical', '▲ Too much', '▼ Too little'], [['Dopamine', 'Schizophrenia (positive symptoms)', 'Parkinson’s, EPS'], ['Serotonin', '', 'Depression, anxiety, OCD'], ['Norepinephrine', 'Mania, anxiety, panic', 'Depression'], ['GABA (the brake)', '', 'Anxiety, seizures, mania'], ['Acetylcholine', '', 'Alzheimer’s, dementia']]) },
      { title: 'Six theories, color-coded', ask: 'Make a chart: theorist, what causes distress, what the nurse does. Use one color per theory.',
        html: tbl(['Theory', 'Cause of distress', 'Nurse’s focus'], [row(['Psychoanalytic · Freud', 'Unconscious conflict', 'Transference, defenses'], 't1'), row(['Interpersonal · Peplau', 'Relationship problems, anxiety', 'The four phases, boundaries'], 't2'), row(['Behavioral · Pavlov, Skinner', 'Learned behavior', 'Token economy, exposure, aversion'], 't3'), row(['Cognitive · Beck', 'Distorted thoughts', 'CBT; DBT for borderline'], 't4'), row(['Humanistic · Maslow, Rogers', 'Unmet needs', 'Prioritize; regard, genuineness, empathy'], 't5'), row(['Biological · Kraepelin', 'Brain chemistry and structure', 'Meds, ECT, watch NMS and ANC'], 't6')]) }
    ],
    lecture: [
      { title: 'The suicide assessment, in order', ask: 'Draw the questions you ask after a patient says yes to suicidal thoughts.',
        html: flow([['Thoughts', 'Are they current?'], ['Plan', 'Is there one?'], ['Intent', 'Do they mean to act?'], ['Means', 'Can they get them?', 'warn'], ['Steps taken', 'Any preparation?'], ['Protective factors', 'Supports, reasons to live.', 'cool']]),
        note: 'Then follow safety procedures and tell the appropriate clinician.' }
    ],
    extras: [
      { title: 'Five elements of negligence', ask: 'Draw the chain of five things that must all be proved.',
        html: flow([['Duty', 'You accepted the patient.'], ['Breach', 'Below the standard.'], ['Cause in fact', 'It would not have happened otherwise.'], ['Proximate cause', 'The harm was foreseeable.'], ['Damages', 'Loss, pain and suffering.', 'warn']]) },
      { title: 'Distance when you talk', ask: 'Draw four rings around a person and label each distance.',
        html: tbl(['Zone', 'Distance', 'Used for'], [['Intimate', 'Up to 18 inches', 'People we trust most'], row(['Personal', '18 inches to 4 feet', '**Most nurse–patient talks**'], 't4'), row(['Social', '4 to 12 feet', 'Acquaintances; more room for anxiety or paranoia'], 't4'), ['Public', 'Over 12 feet', 'Speaking to a group']]) }
    ]
  };
})();
