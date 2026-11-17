# Exam 4: Learn, Test, Review

Approved November 17, 2026 after the student clarified that Test is for finding weak areas, not simulating the professor's approximately 40-question exam. The assigned focus is Chapters 3, 6, 34 and the two named Chapter 9 sections: Peplau and communication. Baseline: `6057351`.

## Learning and coverage

- 46 focused concepts connect mechanism, findings, nursing action and evaluation. Medication comparisons include purpose, action, assessments, monitoring, teaching and urgent findings.
- 118 new assigned-scope questions join 101 retained question IDs. Eleven duplicate legacy recall items remain available for historical results/exact retries but are excluded from normal diagnostic sampling and cannot count as independent evidence twice. The default pool contains 208 items, including select-all questions.
- `exam4-diagnostic-coverage.json` maps all 74 assigned authored section cards and 34 terms into teaching/reference content. Supplemental relationship and community-setting context is retained; community-setting history is outside the diagnostic chapter selector.
- The default round is 12 questions; the student chooses its length and chapters. Selection rotates chapters and prioritizes untested concepts. Misses/uncertainty can offer a new follow-up within the same selected length, or after the round. This is not a professor weighting prediction.
- Reference detail preserves section headings and terms. Selected outdated/overbroad clauses are clarified at render time: violent/self-destructive restraint rules, treatment refusal, drug-specific titration/formulations, supplements and HPA associations. Original legacy banks are not rekeyed.
- Clinical coverage describes the available authored course material, not independent confirmation that every raw-textbook fact is included or tested. A short round leaves untested concepts visible.

## Saving, reports and review

- Choices and writing autosave. Save also captures current fields directly. Pause, resume, finish the answered portion and keep another unfinished draft preserve work without overwriting an active round.
- Each new report has a separate `e4-report-<id>` record containing question/option/rationale snapshots, selections, confidence and written reasoning. An index is recoverable by scanning report records. There is no ten-result eviction.
- Existing `e4-test-runs`, `e4-test`, `e4-class-test` and older in-progress data remain intact. Score-only older reports are labeled: historical selections and wording were never stored and cannot be reconstructed. Earlier results already evicted by older versions cannot be recovered from absent data.
- Storage writes are verified. Quota/blocked/corrupt data errors remain visible; an error is not cleared by an unrelated successful write. In-memory work can be backed up. A second-tab draft change blocks silent overwrite.
- Download/restore uses an Exam 4 diagnostic JSON backup. Restore merges immutable reports, retains current conflicting records and can recover an absent active draft, paused drafts and saved recall writing. It does not replace other exams or the coached lesson library. Home's general progress file still includes the `e4-` keys. No `cp-` keys were added to SYNC.
- Review aggregates historical misses and guesses across reports, with chapter selection and repaired-history access. Recall begins with the actual missed situation without options; feedback and a different application case follow. A blood-monitoring success cannot repair a clozapine bowel-safety miss.
- Recall self-ratings schedule later practice independently of objective scores. New recall after a completed self-rating starts blank and keeps older writing in history; unfinished drafts resume. Immediate repair, duplicate recall items, reading and self-ratings cannot alone establish a diagnostic strength. Strength remains provisional and requires different confident evidence across authored connections.

## Source checks

Original prose/cases are based on the already-authored course material. Targeted safety statements were checked November 17, 2026 against primary sources:

- [FDA benzodiazepine warning](https://www.fda.gov/drugs/drug-safety-and-availability/fda-requiring-boxed-warning-updated-improve-safe-use-benzodiazepine-drug-class): depressant combinations, dependence and individualized tapering.
- [DailyMed lithium](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b839ff4b-f62d-41ab-a823-550a756d58ec): renal handling, symptoms plus levels, fluid loss, interactions and thyroid monitoring.
- [DailyMed lamotrigine](https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=83297e2e-9199-4b3d-9f44-a921787758fe): valproate interaction, titration and rash risk; no universal automatic dose-halving rule.
- [DailyMed bupropion](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4fbe64aa-f8f4-45fa-88ae-e844997703ae): seizure disorder and current/prior anorexia or bulimia contraindications.
- [FDA Z-drug warning](https://www.fda.gov/safety/medical-product-safety-information/certain-prescription-insomnia-medicines-new-boxed-warning-due-risk-serious-injuries-caused): complex sleep behavior.
- [FDA clozapine](https://www.fda.gov/drugs/risk-evaluation-and-mitigation-strategies-rems/frequently-asked-questions-clozapine-rems-modification): REMS reporting removal does not remove recommended ANC monitoring.
- [DailyMed esketamine](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d81a6a79-a74a-44b7-822c-0dfa3036eaed): supervised dosing, respiratory/BP monitoring and readiness for discharge.
- [Federal Register brexanolone withdrawal](https://www.govinfo.gov/content/pkg/FR-2025-03-14/html/2025-04101.htm): effective April 14, 2025. The older chapter example is explicitly historical.
- [42 CFR 482.13](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-482/subpart-B/section-482.13): violent/self-destructive context, maximum order limits, earliest release and intervention-specific monitoring. State requirements may be stricter.
- [HHS threat-related disclosures](https://www.hhs.gov/hipaa/for-professionals/faq/if-doctor-believes-patient-might-hurt-himself-or-herself-or-someone-else-it-duty-provider.html): HIPAA permission is distinct from state-law duties.
- Open RN therapeutic communication and existing Chapter 34 source/coverage audit support relationship, communication and group teaching. No textbook text or supplied cases are republished.

## Verification

`tools/check_e4_diagnostic.js` covers real-page rendering/events, coverage links, balanced selection, complete-set SATA, idempotent grading, saved answers/writing, legacy recovery, separate reports, over-ten retention, missing-index recovery, immutable snapshots, backup merges, quota/corruption handling and clinical-connection-specific repair. The shared older MH test engine has a separate regression check. The curated-lesson check distinguishes the retained 16-lesson library from the narrower current 12-lesson focus.

Browser QA uses fictional practice answers on the local preview. Phone checks verified saved answers and writing after reload, early finish, the original report remaining after a successful related-case repair, repaired history and a backup file download. The browser restore dialog test stalled and is not counted as a completed UI check; restore merge/recovery is covered automatically. Screenshots and practice backups are excluded from the public repository.
