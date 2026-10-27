# Exam 3 guided-learning implementation

The guided study path is a focused core review covering the 17 professor-assigned topic groups in 29 short lessons. Full chapter notes, tables, drugs, ADPIE and cases remain available through source links. Two application variants per lesson are a small practice set; they do not certify exhaustive coverage or predict an exam score.

## Sources and scope

Concise original explanations were curated from the existing source-linked notes and the supplied textbook text. The raw textbook remains uncommitted; its identity and source limitations are recorded in [exam3-source-review.md](exam3-source-review.md). Chapters 45, 46 and 53 retain the narrowed exam scope. Broader notes linked from those chapters include material outside that scope; the guided explanation identifies the assigned portion.

Current safety distinctions carry forward the [2024 adult hyperglycemic-crisis consensus](https://link.springer.com/article/10.1007/s00125-024-06183-8), [ACG 2024 H. pylori treatment update](https://gi.org/journals-publications/ebgi/schoenfeld_sep2024/), device-specific CGM guidance documented in the prior source review, and [ADA hypoglycemia guidance](https://diabetes.org/living-with-diabetes/hypoglycemia-low-blood-glucose). The Map’s visible DKA potassium alert was synchronized with the current 3.5 mmol/L threshold. This is a targeted educational review, not a new certification of every existing note, drug or figure.

| Lesson | Assigned group | Source locator |
| --- | --- | --- |
| DKA: fluids, potassium, then insulin | 56:2 | Ch 56: DKA and HHS, Table 56.9; safety update: 2024 adult hyperglycemic-crisis consensus. |
| An aging gut: what changes, what needs assessment | 45:0 | Ch 45: GI changes associated with aging. |
| Locate the organ before interpreting the symptom | 45:1 | Ch 45: Table 45.1, abdominal quadrants and associated organs. |
| Protect the mouth and keep eating safe | 46:0 | Ch 46: Boxes 46.1–46.2 and stomatitis nursing care. |
| GERD: reduce reflux and recognize warning signs | 46:1 | Ch 46: GERD, Box 46.6 and nonsurgical management. |
| Hiatal hernia and the tighter junction after surgery | 46:2 | Ch 46: hiatal hernia; Boxes 46.8–46.10. |
| Gastritis and ulcers: repair the defense and treat the cause | 47:0 | Ch 47: gastritis, PUD, Tables 47.1–47.2; ACG 2024 treatment update. |
| Acid drugs: match the mechanism to the timing | 47:0 | Ch 47: Table 47.1, ulcer and gastritis drugs. |
| Upper GI bleeding: perfusion before reassurance | 47:1 | Ch 47: upper GI bleeding, ulcer emergencies and nursing priorities. |
| Gastric cancer and life after gastrectomy | 47:1 | Ch 47: gastric cancer, gastrectomy, dumping and discharge teaching. |
| The pancreas, thyroid and parathyroids set the controls | 53:0 | Ch 53: pancreas, thyroid and parathyroid anatomy and physiology (assigned portion). |
| Endocrine aging: fluids, bone and glucose | 53:1 | Ch 53: endocrine changes associated with aging (assigned portion; not the COVID section). |
| A 24-hour urine result is only as good as the collection | 53:2 | Ch 53: 24-hour urine specimen collection, assigned diagnostic-test portion. |
| Hypothyroidism: slower metabolism and careful replacement | 55:0 | Ch 55: hypothyroidism, levothyroxine and nursing safety. |
| Myxedema crisis: slow breathing is an emergency | 55:0 | Ch 55: myxedema coma and emergency nursing care. |
| Hyperthyroidism: excess drive and targeted treatments | 55:1 | Ch 55: Graves disease, antithyroid drugs, radioactive iodine and comfort/eye care. |
| After thyroidectomy: airway, bleeding and calcium | 55:1 | Ch 55: postoperative thyroidectomy assessment and complications. |
| Thyroid storm: fever plus cardiovascular and brain changes | 55:1 | Ch 55: thyroid storm, precipitating factors and emergency management. |
| Thyroiditis, cancer and ongoing replacement | 55:1 | Ch 55: thyroiditis, thyroid cancer and postoperative transition teaching. |
| Parathyroids: low calcium excites, high calcium weakens | 55:2 | Ch 55: hypoparathyroidism, hyperparathyroidism and parathyroidectomy. |
| Diabetes types: different routes to ineffective insulin | 56:0 | Ch 56: types, risk factors, prevention and screening. |
| Glucose, A1C and CGM answer different questions | 56:0 | Ch 56: diagnosis and monitoring; current device-specific CGM clarification in source review. |
| Insulin: basal coverage, meals and safe delivery | 56:1 | Ch 56: insulin types, timing, injection, storage and pump care. |
| Non-insulin drugs: predict the risk from the mechanism | 56:1 | Ch 56: antidiabetic drugs (non-insulin). |
| Hypoglycemia: swallowing decides the route | 56:2 | Ch 56: hypoglycemia; ADA low-glucose treatment guidance. |
| HHS: extreme water loss and neurologic change | 56:2 | Ch 56: Table 56.9; 2024 adult hyperglycemic-crisis consensus. |
| Eyes, kidneys, nerves and feet: damage can be silent | 56:3 | Ch 56: chronic complications and foot/renal care. |
| Make the diabetes plan workable at home | 56:3 | Ch 56: nutrition, activity, sick days, self-management and health equity. |
| In hospital: fasting, illness and a changing insulin need | 56:3 | Ch 56: hospital and perioperative diabetes care. |

## Progress and recommendations

- Separate browser key: `e3-learn-v1`. No changes to existing Mastery question order or progress schemas. Home’s existing progress-file export/import includes the new key.
- Reading is an explicit acknowledgement. Recall uses learner-marked checkpoints; free text is never automatically graded. Application uses an exact answer/set comparison with every option explained. The simplified multi-select checkpoint grading is separate from the mixed Mastery test’s NCLEX scoring.
- Due reviews come first. New lessons balance chapter weights and the last Mastery report’s missed note topics, with prerequisite lessons offered first. This is a heuristic, not a validated adaptive-learning model.
- Successful first practice schedules one day; subsequent successful due reviews schedule one, three, then seven days. A missed decision or recall checkpoint schedules ten minutes. Early practice neither postpones review nor earns a due-review pass. The counter includes short retries and is not a measurement of long-term retention. No notifications or background jobs are created.
- Responses, option order and the current stage survive reloads; switching lessons preserves unfinished drafts. Feedback cannot be submitted twice. Options are shuffled while correct-answer indices remain stable.
- Case deep links use the shared Mastery engine and preserve its existing confirmation before replacing a different active test. Reopening the same active case resumes it. Exam 2 and Final share the engine change; their chapter configurations remain unchanged.

## Verification

Automated content and behavior checks: `node tools/check_e3_lessons.js`, existing study-guide/question checks, and clinical-judgment tag checks. Browser verification results are recorded below after completion. Browser tests establish implementation behavior, not learning effectiveness. Original textbook figure images and printed page numbers were not supplied or verified.

Completed checks in this pass:

- All 29 lessons and both application variants exercised at 1365 px and 390 px: 116 lesson/variant flows, including correct and incorrect answers, self-check separation, every option rationale, completion and no horizontal overflow.
- All 33 distinct linked Map topic panels opened successfully. Home’s guided-study priority, active-test priority and cross-lesson draft resume verified.
- Four case deep links at both widths (8 launches), same-case resumes and the existing confirmation before replacing another active test verified. Exam 2 and Final load and omit the Exam 3-only Learn tab.
- Progress-file export/import round trip, import description, recalled draft restoration, blocked-storage fallback, corrupt saved data and 320 px layout verified. Existing Mastery, skills, route and Final progress keys retained during lesson flows.
- Content/behavior checks pass: 29 lessons, 17 assigned groups, 58 valid question/rationale sets; all source/case links and prerequisites valid. Existing 48 learning-outcome links and 216 graded question positions preserved; Exam 3/Final question format checks and all clinical-judgment tags pass.
- Mobile dashboard/feedback and desktop dashboard screenshots inspected. No application page-script errors in completed browser checks. Case-engine QA used local copies of the exact React/ReactDOM 18.3.1 bundles because the environment restricts CDN access; it does not test live CDN delivery.

A browser test initially used an incorrect selector for the existing Map panel. The 116 lesson flows completed before that harness failure; the corrected source-navigation check then opened every destination. No application change was needed for that selector.
