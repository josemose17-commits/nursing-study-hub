# Visual and interactive hypoglycemia pilot

One existing Exam 3 lesson is enhanced: **Hypoglycemia: swallowing decides the route**. This is a reviewable pilot for presentation preferences, not a claim that a VARK score establishes an effective learning method. Other lessons retain their current presentation.

## What the learner can do

- Compare the oral and nonoral treatment routes in a responsive, labeled diagram.
- Connect warning symptoms and brain-function changes to the safety decision.
- Open short notes, medication distinctions, and the shared verified word-part entries.
- Make six coached decisions: initial oral glucose, an unresolved low, recovery and prevention, IV rescue, evaluation after rescue, and glucagon without IV access.
- See a rationale for a wrong choice, retry, and continue through explicitly scripted patient updates. No wrong choice is enacted on a real patient or used to calculate a predicted glucose response.
- Close the explanation for the existing recall self-check and independent graded checkpoint. Both original question IDs and scoring remain intact.

The rehearsal is saved with the current lesson draft and survives reload or lesson switching. It never awards mastery, changes a test score, or grants a delayed-review pass. Explicitly reopening the explanation starts early practice rather than a delayed retention check. Audio remains optional.

The same diagram is available inside the hypoglycemia Map notes and relevant checked Mastery-question feedback. Existing question stems, answer keys, ordering/IDs and cumulative missed-question progress are unchanged. The pilot has a visible entry on the guided-study home page.

## Clinical review

Reviewed against the primary sources linked inside the diagram:

- [ADA 2026, section 6](https://doi.org/10.2337/dc26-s006): low-glucose treatment, glucose as preferred oral treatment, 15-minute reassessment, severe hypoglycemia defined by need for assistance rather than a numeric threshold.
- [ADA 2026, section 16](https://doi.org/10.2337/dc26-s016): institutional protocols; oral treatment only with safe swallowing and oral intake permitted; IV glucose or glucagon; repeat checks and recurrence prevention.
- [ADA symptoms and treatment](https://diabetes.org/living-with-diabetes/hypoglycemia-low-blood-glucose/symptoms-treatment) and [severe hypoglycemia](https://diabetes.org/living-with-diabetes/hypoglycemia-low-blood-glucose/severe): symptom variability, fast carbohydrate, glucagon and emergency help.
- [NIDDK treatment and recovery](https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/low-blood-glucose-hypoglycemia): repeat treatment/rechecks and follow-up intake when the next meal is distant.

The usual 15 g / 15 minute pathway is framed as an adult protocol example. Individualized plans can differ. Unsafe swallowing excludes oral food, liquids and glucose gel. IV rescue is shown only with a patent IV and a protocol/order. No rescue-drug dose or device-specific administration technique is invented. Existing full notes are linked, not newly certified in their entirety.

## Validation

`node tools/check_hypo_lab.js` checks every scenario path, wrong-answer recovery, duplicate clicks, saved rehearsal state, invalid-state recovery, independent scoring and one-lesson scope. Existing lesson/scheduling, study-guide/source-link, question-format, clinical-judgment and cumulative-miss/chapter-filter checks pass.

Browser QA covers desktop and phone layouts, the complete rehearsal with reload and an intentional wrong choice, recall with the diagram hidden, both existing independent variants, due-review protection when reopening the explanation, word-part expansion, Map integration and actual Mastery feedback. Clinical diagrams use HTML/CSS; no generated bitmap is used for exact teaching information.
