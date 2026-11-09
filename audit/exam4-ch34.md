# Exam 4 — Chapter 34: Therapeutic Groups

Source: the user-supplied Varcarolis, *Foundations of Psychiatric-Mental Health Nursing*, 9e, Chapter 34 text, supplied November 9, 2026. The chapter was read in full, including its objectives, named concepts, tables, critical-thinking prompts and review concepts. Raw chapter prose and the original cases/questions are not published.

## Content and learning path

- Map topic: `Exam 4 Map.html#t-groups`, week 11. This is a therapeutic modality, so it is represented as a topic rather than a disorder condition.
- 16 explained terms include all 13 chapter key terms. The 27 cards cover all sections, eleven Yalom factors, all named member roles, five theoretical frameworks, group types, supervision/inclusion, confidentiality, virtual care, difficult participation, treatment evidence and outcomes.
- Ten recall pairs, six drills with 50 items, and 12 original application questions, including three select-all items. The scenarios and answer explanations are written for this site.
- Eight focused lessons use `tools/learn-groups34.js`, the authored map and the Learn-only question bank. The existing deterministic builder generates `data/learn/e4.js`; the shared `learn-core.js`, `learn.js` and studio renderer provide the existing scheduling, drafts, retries and separate recall/application measures. Every map card belongs to exactly one focused lesson.
- Each focused lesson has three closed-book recall prompts, a coached choice plus two explicit self-check rehearsals, and two independent graded checkpoints. The chapter therefore adds 16 rotating independent checkpoints and 24 coached activities. Existing Exam 4 lesson IDs, checkpoints, prerequisites and content are retained; the storage key is still `e4-learn-v1`.
- The coverage ledger is `audit/exam4-ch34-coverage.json`. It maps all eight objectives, the thirteen required terms through validation, every major section/table and all ten review concepts. The chapter's reference to seven RN group types is handled without inventing a mutually exclusive list: its table and surrounding prose use overlapping categories, all of which are covered.

The table-rich chapter needs more than the suggested 5–10 cards to keep individual sections readable. Eight lessons separate those cards by task. No new videos are supplied; the topic-video check now honors their optional status while retaining validation of every supplied video ID and tag.

## Clinical and wording review

The chapter is the course-content reference. Primary guidance was consulted for confidentiality, appropriate group fit, online care, authorized practice and medication-response teaching:

- [AGPA practice guidance](https://agpa.org/guidelines-ethics/practice-guidelines-for-group-psychotherapy-2/)
- [HHS group teletherapy](https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-for-behavioral-health/group-teletherapy)
- [HHS behavioral-health licensure](https://telehealth.hhs.gov/licensure/licensure-for-behavioral-health)
- [NIMH depression information](https://www.nimh.nih.gov/health/publications/depression)

Peers cannot be promised to maintain confidentiality. Clinical fit is individualized: limited income, few friends or thoughtful silence alone are not reasons for exclusion. Quiet suicidal statements need direct assessment; actual threats or violence take priority over the activity. Acute mania or active paranoia may need individual assessment, stabilization or experienced support rather than diagnosis-based permanent bans. Group recordings require appropriate consent and safeguards. A study protocol does not establish effectiveness, and the chapter's historical treatment-evidence examples are distinguished from individualized current treatment orders.

Fresh prose and new scenarios were authored after reading the source. A local normalized text comparison found zero shared twelve-word sequences between the new material and the supplied chapter. This is supporting evidence, not a substitute for editorial review of originality.

## Validation and release

- All 17 `tools/check_*.js` scripts pass. Both mastery pages were regenerated after the shared build/cache stamps were updated.
- `node tools/check_mh_groups34.js --baseline ab795ee8008fa1e0dedcd9bcd184bd647f6aae13` verifies preserved preexisting Exam 4 map and lesson objects, protected generated Exam 1/5 lessons, all card assignments, question/drill counts, grading, persisted draft and exact-miss repair behavior. The existing Learn checks exercise scheduling, reviews, coaching and persistence across every lesson.
- At a 390px viewport, all eight new lesson views rendered with document content width equal to usable viewport width (375px with the browser scrollbar); there was no horizontal overflow. Topic expansion, drill correct/wrong feedback and the chapter-only test were exercised. All 12 map questions, including all three select-all items, received the expected grade; final score was 12/12.
- A lesson was exercised end to end: wrong coached choice, retry and correct choice, explicit reflection, saved recall draft, reload, incomplete select-all rejection, separate recall/application results, saved ten-minute retry, exact-miss replay and repair. Completing early practice did not grant delayed-review credit.
- Browser QA exposed an existing shared renderer defect: reflection feedback displayed `false`. A one-line lookup fix now displays the selected reflection option's explanation. Regression checks cover success and retry feedback across all generated lessons; the specialized hypoglycemia engine and scoring are unchanged.
- Page-script console errors were absent. Browser-extension metadata diagnostics were observed separately and did not originate in the site.
- Care Plan/APA and Exam 1/5 source content is untouched. Their HTML changes are cache timestamps only, including the reviewed shared-renderer fix. Patient `cp-` keys remain excluded from synchronization.

Preview evidence: [Chapter 34 Learn](exam4-ch34-preview.jpg). Publishing follows the requested fetch/ancestry check and a non-forced fast-forward of main, preserving concurrent changes.
