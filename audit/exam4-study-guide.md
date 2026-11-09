# Exam 4 study-guide focus

## Source and decision

The student supplied this exact assigned list on November 9, 2026 and approved implementation:

- Chapter 1
- Chapter 2
- Chapter 3
- Chapter 6
- Chapter 9 — Peplau’s Model of the Nurse-Patient Relationship
- Chapter 9 — Communication Skills for Nurses
- Chapter 34

This newer explicit list supersedes the earlier assumption that all week 11–12 mental-health topics were assigned for this unit exam. It is a **topic scope**, not a question-count blueprint. The broader authored material stays accessible under **Everything**. Nothing is deleted from the question banks or saved progress.

## One scope across the site

`data/mh/study-guide.js` provides the named **Exam 4 study guide** preset, included topic/lesson/question IDs, narrow-topic projections and the shared selector. It defaults to the guide and remembers an explicit Everything choice in `e4-focus`. Map, Learn and Home read the same key. The normal progress-file sync already includes `e4-`; patient-data `cp-` keys remain excluded.

The guide contains **9 topic entries, 14 drills, 43 practice questions and 16 lessons**. These are site practice counts, not a prediction of the exam's length or distribution. No chapter weighting was invented.

| Assignment | Authored material in the focus |
| --- | --- |
| Chapter 1 | Mental health/illness; diagnostic classification and individualized nursing responses |
| Chapter 2 | Development across the lifespan; theories and therapies |
| Chapter 3 | Brain, neurotransmitters, receptors and psychopharmacology |
| Chapter 6 | Legal and ethical care |
| Chapter 9 — Peplau | Only the relationship-phase card, its relevant recall, phase questions and a focused lesson |
| Chapter 9 — communication skills | Communication notes, techniques, blocks, nonverbal communication, interview and exam-response practice |
| Chapter 34 | Entire existing therapeutic-groups topic, all six drills and eight lessons |

Two source topics needed narrow mappings. The existing diagnostic-assessment topic combines Chapter 1 with chapters 13–16; its MSE, disorder-assessment and lab questions are excluded from the guide in favor of a focused diagnostic-foundations view and lesson. The full relationship topic is stored under Chapter 8; only its Peplau phase material is projected into the student's assigned Chapter 9 section. Global source labels and broad-topic content are retained.

The focused lessons have new IDs (`t-e4-diagnostics`, `t-e4-peplau`) so old broader-lesson attempts and numeric checkpoint variants keep their meaning. Three original questions were added for these focused concepts, appended after the original bank. The original graded questions and their positions in existing lessons are preserved; the wider Exam 4 catalog now has 29 lessons.

## Behavior

- The map starts on assigned topics in guide mode. Topics, drills, test pools, not-tried questions, missed questions and test counts follow the selected scope. A disorder-linked question cannot enter this guide merely because it mentions a communication or medication word.
- Learn applies the scope to its catalog, recommendation, chapter choices, due-review counts and cumulative-miss queue. Chapter selection can narrow the preset further. Applying a preset selects all of its assigned chapters first, including when an old Chapter 34-only filter was saved. Later chapter choices persist across reloads until the preset is changed.
- Switching to Everything restores all additional topics, cases, drills, questions, lessons and their saved misses. Switching back preserves those records. A direct link to additional material shows an outside-focus notice with an explicit scope switch; it does not silently widen the focused test.
- Home describes the supplied list and counts only focused test history while the preset is active. The broader disorder-case tile is labeled additional review.
- The exact list remains visible beside the selector. Clinical source links are references, not proof that additional chapters are on this exam.

## Validation

`node tools/check_e4_study_guide.js` checks the exact assignment, all fully assigned authored-topic questions, narrow mixed-topic mappings, 43 eligible questions, 14 drills, 16 lessons, real Map/Learn event behavior, scoped missed-question counts, scope persistence, blocked storage fallback, old history/review schedules, and stable original graded items/positions. Exam 5 lesson data is unchanged by this focus task.

All 20 `tools/check_*.js` checks pass. Browser QA covered Map and Learn at 320, 390 and 1280 px, plus the desktop page: no horizontal overflow after layout settled. The focused DSM and Peplau question pools grade correctly, including correct and incorrect feedback; Learn keeps recall self-assessment separate from the application result. The communication drill renders and explains each option on a phone. Switching between the guide and Everything retains old test history, attempts and review schedules, and Chapter 9-only selection survives reload. Fresh top-level page loads had no page console errors (browser extension metadata errors excluded). Rapid QA iframe navigation caused one browser view-transition cancellation; a fresh ordinary page load did not reproduce it. The narrow diagnostic topic excludes MSE material and unrelated videos. [Preview evidence](exam4-study-guide-preview.png). The lesson-format rebuild separately requested for Exams 4 and 5 is **not** represented as done here: a plan using the original Exam 3 style and Extra high reasoning effort was offered, and its replacement work awaits the user's go-ahead.

## Clinical references for the small new practice items

The focused teaching comes from the site's existing original notes. Definition/phase checks also used [APA: the DSM diagnostic framework](https://www.psychiatry.org/psychiatrists/practice/dsm/about-dsm) and [Open RN: communication and relationship phases](https://www.ncbi.nlm.nih.gov/sites/books/NBK610828/). No textbook text or case was republished.
