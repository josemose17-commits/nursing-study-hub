# Exam 4 study-guide focus

## Instructor outline and scope

The student supplied the instructor's outline:

- Chapter 3
- Chapter 6
- Chapter 9 — Peplau’s Model of the Nurse-Patient Relationship
- Chapter 9 — Communication Skills for Nurses
- Chapter 34
- Approximately 40 questions

The shared Exam 4 preset uses this outline. All other authored mental-health topics stay accessible under **Everything**; no question banks or saved progress are deleted. The approximate exam count is not treated as an exact target or chapter weighting.

## One scope across the site

`data/mh/study-guide.js` provides the named **Exam 4 study guide** preset, included topic/lesson/question IDs, the Peplau topic projection and shared selector. It defaults to the guide and remembers an explicit Everything choice in `e4-focus`. Map, Learn and Home read the same key. The normal progress-file sync already includes `e4-`; patient-data `cp-` keys remain excluded.

The guide contains **5 topic entries, 13 drills, 35 practice questions and 12 lessons**. The test also includes the existing class-review questions linked to the assigned outline. The practice-bank count is not a prediction of the exam's length or distribution.

| Assignment | Authored material in the focus |
| --- | --- |
| Chapter 3 | Brain, neurotransmitters, receptors and psychopharmacology |
| Chapter 6 | Legal and ethical care |
| Chapter 9 — Peplau | Only the relationship-phase card, its relevant recall, phase questions and a focused lesson |
| Chapter 9 — communication skills | Communication notes, techniques, blocks, nonverbal communication, interview and exam-response practice |
| Chapter 34 | Therapeutic-groups topic, practice questions and lessons |

The full relationship topic is stored under Chapter 8; only its Peplau phase material is projected into the assigned Chapter 9 section. Out-of-scope source topics remain under Everything.

The focused Peplau lesson uses its dedicated ID (`t-e4-peplau`) so broader-lesson attempts and numeric checkpoint variants keep their meaning. Existing graded questions and lesson positions are preserved.

## Behavior

- The map starts on assigned topics in guide mode. Topics, drills, test pools, not-tried questions, missed questions and test counts follow the selected scope. A question outside the selected source topics cannot enter merely because it mentions a communication or medication word.
- Learn applies the scope to its catalog, recommendation, chapter choices, due-review counts and cumulative-miss queue. Chapter selection can narrow the preset further. Applying a preset selects all of its assigned chapters first, including when an old Chapter 34-only filter was saved. Later chapter choices persist across reloads until the preset is changed.
- Switching to Everything restores all additional topics, cases, drills, questions, lessons and their saved misses. Switching back preserves those records. A direct link to additional material shows an outside-focus notice with an explicit scope switch; it does not silently widen the focused test.
- Home describes the supplied list and counts only focused test history while the preset is active. The broader disorder-case tile is labeled additional review.
- The exact list remains visible beside the selector. Clinical source links are references, not proof that additional chapters are on this exam.

## Rationale and validation limits

Every question in the assigned Exam 4 practice pool now has an original, option-by-option explanation. These explanations are based on the provided course materials and existing authored notes; they are not copied textbook passages. The supplied Week 1 materials do not clearly cover Chapter 34, so those explanations remain limited to the repository's existing Chapter 34 material. The instructor's approximate 40-question estimate does not provide topic weighting or a complete blueprint, and the practice pool should not be treated as a prediction of the exam.

`tools/check_e4_study_guide.js` checks the assigned scope, question eligibility, Map/Learn focus and persistence. `tools/check_e4_test_flow.js` checks the test pool, resumable answers, saved results, review and legacy-history migration. These checks were not run in this environment because Node.js is unavailable. `git diff --check` completed successfully.

## Source boundary

The instructor provided chapter and section topics plus an approximate question count, not exact questions or chapter weighting. The supplied Week 1 slides and class notes inform the relevant explanations; they do not clearly cover Chapter 34, so that chapter's explanations use the repository's existing authored notes. The test includes all available authored questions in the assigned scope, but it is a practice pool, not a prediction of the exam. No textbook passages were copied.
