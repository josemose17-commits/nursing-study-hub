// Clinical judgment, the NCLEX-RN test plan, the NGN item types with their scoring rules, and test-taking strategies —
// shared by both Mastery tests (the labels on each question and the report) and NCLEX Strategies.html.
// Written in our own words, not quoted, from Silvestri & Silvestri, Saunders Comprehensive Review for the NCLEX-RN®
// Examination (Ch 1, Clinical judgment and the NGN; Ch 4, Clinical judgment and test-taking strategies), which draws on
// NCSBN's Clinical Judgment Measurement Model (Dickison, Haerling & Lasater, 2019) and NCSBN's NGN News. The Client Needs
// ranges are the 2026 NCLEX-RN test plan (in effect April 2026 – March 2029); the book's edition lists the older 2019 ranges.
window.NCJMM = {
  // The six cognitive skills, in order: [key, name, nursing-process step, what the skill does, what a question on it looks like]
  skills: [
    ['rc', 'Recognize cues', 'Assessment', 'Pick out the data that matter — from the history, vital signs, labs, the exam and what the client says.',
      'Which findings need follow-up? Highlight the findings that concern you. Which assessment is most important?'],
    ['ac', 'Analyze cues', 'Analysis', 'Connect the cues to the client’s condition: is this expected or unexpected for this client, and what could it mean?',
      'Which condition do these findings fit? Is each finding consistent with A, B or C?'],
    ['ph', 'Prioritize hypotheses', 'Analysis', 'Rank the possible problems: which is most likely, which is most dangerous, which comes first?',
      'The client is most at risk for ___. Which problem is the priority?'],
    ['gs', 'Generate solutions', 'Planning', 'Decide what should happen for the priority problem — the goals and the interventions that would reach them, and what to avoid.',
      'Which interventions belong in the plan? Which prescriptions does the nurse anticipate?'],
    ['ta', 'Take action', 'Implementation', 'Do the right things in the right order: give care, teach, delegate, escalate, document.',
      'Which action first? What does the nurse do next? Which task can go to the AP?'],
    ['eo', 'Evaluate outcomes', 'Evaluation', 'Compare what happened with what was expected: is the client better, the same or worse, and does the plan need to change?',
      'Which finding shows the treatment worked? Which statement shows the teaching was understood?']
  ],
  // Client Needs (2026 NCLEX-RN test plan): [key, subcategory, category, share of the exam]
  needs: [
    ['mgmt', 'Management of Care', 'Safe and Effective Care Environment', '15–21%'],
    ['safe', 'Safety and Infection Prevention and Control', 'Safe and Effective Care Environment', '10–16%'],
    ['hpm', 'Health Promotion and Maintenance', 'Health Promotion and Maintenance', '6–12%'],
    ['psy', 'Psychosocial Integrity', 'Psychosocial Integrity', '6–12%'],
    ['basic', 'Basic Care and Comfort', 'Physiological Integrity', '6–12%'],
    ['pharm', 'Pharmacological and Parenteral Therapies', 'Physiological Integrity', '13–19%'],
    ['rrp', 'Reduction of Risk Potential', 'Physiological Integrity', '9–15%'],
    ['adapt', 'Physiological Adaptation', 'Physiological Integrity', '11–17%']
  ],
  // Item types: [key, name, what you do, scoring rule key]
  types: [
    ['mcq', 'Multiple choice', 'Pick the one best answer of four.', 'dich'],
    ['sata', 'Multiple response — select all that apply', 'Every option is true or false for this client; pick every true one.', 'pm'],
    ['selectn', 'Multiple response — select N', 'Pick exactly the number asked for (for example, the 3 findings that need follow-up).', 'zo'],
    ['group', 'Multiple response — grouping', 'Several small select-all lists, one per group (for example, per body system). Each group is scored +/− on its own and can’t go below zero; pick at least one in every group.', 'pm'],
    ['matrix', 'Matrix — multiple choice', 'One choice per row (for example, expected or unexpected for each finding).', 'zo'],
    ['mmatrix', 'Matrix — multiple response', 'Each row can take more than one column (for example, which findings fit which of three conditions). Each column is scored +/− on its own and can’t go below zero; mark at least one in every column.', 'pm'],
    ['cloze', 'Drop-down cloze', 'Choose a word or phrase from a list for each blank in a sentence.', 'zo'],
    ['ddt', 'Drop-down in table', 'Choose from a list in each blank cell of a table.', 'zo'],
    ['ddr', 'Drop-down rationale', '“The client is at risk for ___ as shown by ___.” The blanks are linked: a cause and its evidence.', 'rat'],
    ['dnd', 'Drag-and-drop cloze', 'Move words from a pool into the blanks of a sentence.', 'zo'],
    ['dndr', 'Drag-and-drop rationale', 'Move words into linked blanks — a condition and the findings that support it.', 'rat'],
    ['hl', 'Highlight in text', 'Highlight the parts of a note that matter (for example, findings that need follow-up).', 'pm'],
    ['hlt', 'Highlight in table', 'Highlight the rows of a table (vital signs, labs over time) that matter.', 'pm'],
    ['bow', 'Bow-tie', 'The condition in the middle, 2 actions on one side and 2 parameters to monitor on the other.', 'zo'],
    ['trend', 'Trend', 'Read data over time (several days of vital signs or labs) and judge where it is heading — answered in any of the formats above.', 'any'],
    ['order', 'Ordered response', 'Put the steps in order. A traditional item: right only when the whole order is right.', 'dich'],
    ['calc', 'Fill in the blank (calculation)', 'Type a number: a dose, an IV rate, intake and output. Round only at the end, the way the question says.', 'dich'],
    ['hot', 'Hot spot', 'Select the spot on a picture or diagram.', 'dich'],
    ['exhibit', 'Chart / exhibit', 'Read the record tabs (notes, labs, orders) before you answer.', 'dich']
  ],
  scoring: {
    pm: ['+/− scoring', 'One point for each right pick and one taken away for each wrong pick, never below zero. Picking everything doesn’t pay.'],
    zo: ['0/1 scoring', 'One point for each right answer; a wrong one just earns nothing.'],
    rat: ['Rationale scoring', 'A point only when both linked parts are right — the condition and the evidence for it.'],
    dich: ['Right or wrong', 'Traditional item: one point only if the whole answer is right.'],
    any: ['Scored by its format', 'A trend item is scored by the rule of whatever format it uses.']
  },
  // Test-taking strategies: key → [name, how to use it]
  strategies: {
    data: ['Read only what is there', 'Use the findings given and the clinical relationship the task asks about. Anticipate complications when relevant, but do not invent unsupported history or symptoms.'],
    subject: ['Find the subject', 'Name what is being tested — the drug, the test, the complication — and judge every option against that.'],
    abnormal: ['Spot what is abnormal', 'Distinguish expected findings, warning signs and evidence of improvement. Select the cues relevant to this question; a normal or improving value may matter in an evaluation item.'],
    client: ['Who is the client?', 'Identify whether the task concerns an individual, caregiver, family or group. Direct the answer to the client and problem actually specified.'],
    strategic: ['Strategic words', 'First, initial, immediate, next, best, priority, most, early, late — they mean several options may be right and you are ranking them.'],
    assess: ['Assess first', 'Identify whether essential assessment data are missing or the stem already establishes the problem. Obtain needed information while protecting the patient; do not delay emergency help or treatment for an obvious immediate threat.'],
    pos: ['Positive query', 'The stem asks for what is true or right (“indicates understanding”, “expected finding”). Choose the correct statements.'],
    neg: ['Negative query', 'Identify what needs correction or follow-up. This may be unsafe teaching or an abnormal patient finding, not simply a factually false sentence. Read the exact query.'],
    abc: ['ABCs', 'Use airway, breathing and circulation to recognize immediate threats. Apply the appropriate emergency algorithm when indicated; compare the actual instability rather than ranking by a diagnosis label alone.'],
    maslow: ['Maslow', 'Physiological needs first, then safety, then love and belonging, then esteem. A real physical threat beats a psychosocial need.'],
    np: ['Nursing process / clinical judgment order', 'Recognize and analyze cues before you plan or act; evaluate after you act. Pick the option at the step the stem is on.'],
    actual: ['Actual before potential', 'Compare severity, immediacy and reversibility. An actual problem can be less urgent than an imminent life-threatening risk; use the findings in this scenario.'],
    alike: ['Eliminate look-alikes', 'Compare similar options for meaningful differences in timing, scope and patient fit. Similar wording does not by itself make both options wrong.'],
    absolute: ['Closed-ended words', 'Check whether an absolute claim is clinically valid in this scenario. Words such as always or never do not automatically make an answer wrong; some safety and specimen instructions are absolute.'],
    umbrella: ['Umbrella option', 'A broad option is useful only if every part is correct and it answers the task. A specific priority action can be better than a vague umbrella statement.'],
    comm: ['Therapeutic communication', 'Address the client’s concern with accurate information and an invitation to explain. Avoid judgment and false reassurance; judge the meaning and tone rather than rejecting a response solely because it contains one word.'],
    deleg: ['Delegation and assignment', 'Match the task, patient stability, delegatee competency and required supervision to the jurisdiction and policy given. Distinguish routine data collection from nursing assessment, interpretation, teaching and evaluation.'],
    resources: ['You have what you need', 'Use the resources stated in the question. Summon appropriate help and protect an unstable patient; do not invent equipment or assume you must leave to obtain it.'],
    safety: ['Choose safety', 'When in doubt, pick the option that keeps the client safe right now.'],
    nursing: ['Nursing action first', 'Pick what the nurse can do now within nursing scope, unless the stem asks which prescription to anticipate.'],
    pharm: ['Pharmacology', 'Work from the class (and its name ending) to the action, side effects and nursing checks; know which effect — intended, side, adverse, toxic — the stem is asking about.'],
    calc: ['Calculation', 'Set it up with units, round only at the end as told, and ask whether the answer is a sensible dose.'],
    trend: ['Read the trend', 'Look across time: is each value normal, which way is it moving, and is it a sign of a complication?']
  }
};
