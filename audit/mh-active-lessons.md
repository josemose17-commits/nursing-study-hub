# Exam 4 and Exam 5 lesson rebuild

The user approved this work on November 9, 2026 after asking for the original Exam 3 teaching style. The rebuild covers the **16 focused Exam 4 lessons** and **all 23 currently authored Exam 5 lessons**. Additional Exam 4 lessons remain available under Everything. The assignment remains Chapters 1, 2, 3, 6 and 34 plus the two named Chapter 9 sections; no new exam weighting was inferred.

## Teaching and interaction

The Node-only sources are `data/mh/lessons-src.js` and `data/mh5/lessons-src.js`. They replace generic note extraction with original concise explanations, a small visual, an illustrative patient/task situation and **78 original three-option choices plus two sequencing activities**. They use the existing Learn/studio engine; there is no second scheduling or scoring system.

The opening teaches the mechanism, nursing implication and reassessment in three short paragraphs. Each choice has its own explanation; a wrong response cannot advance, and after a correct response the alternatives can be compared. Peplau and group-development exercises use ordered tasks. Full authored chapter sections, terminology support and references remain inside the lesson under a single expandable reference. The coverage ledger lists those sections.

Closed-book recall comes before an independent checkpoint. The 14 Exam 5 condition lessons replace vague recall wording with condition-specific questions while retaining the original three positions: cues/mechanism, priority/actions, evaluation. These remain self-assessed; writing is not automatically graded. Repeated shared rationales are shown once. Checkpoint feedback uses the actual item format rather than displaying a different coached patient's worked answer. The complete source references and unique option-specific rationales remain available.

## Progress and scope preservation

The baseline is `e3bffd7c62991bb67c181835a24bcb97e64c9d9a`. Lesson IDs/order, chapter membership, note links, independent question positions, option counts and answer indices remain stable. Existing results, exact misses, saved drafts, selected chapters and due-review schedules keep their meaning. A repaired item remains in recorded history.

Rehearsals carry a content revision. Older coached completion/choice indices are archived as a prior rehearsal snapshot and the revised activities start at the beginning; a previously selected index cannot earn credit on a different activity. The scored Learn attempt and due date are separate and are preserved.

The original Exam 3 lesson/studio data, the scoring/scheduling engine, and Exam 1/2/Final generated lesson bundles are unchanged. The shared renderer gates the new presentation and rehearsal revision behavior to authored active lessons. Other HTML edits are shared-asset cache stamps and required mastery rebuilds.

## Focused clinical corrections

The safety review corrected thiamine/glucose sequencing, CIWA-Ar use in delirium, naloxone recurrence/observation, exposure-specific buprenorphine induction, and the inaccurate universal claim that all antipsychotics block D2. Corresponding Exam 5 source notes were aligned where those claims appeared.

`mh-question-clarifications.json` records **14 existing question clarifications**. They add sufficient case evidence, distinguish tolerance from an OUD diagnosis, assess voice content/safety before a coping technique, avoid diagnosing fabricated symptoms from negative tests, distinguish acute delirium assessment from universal nursing care, individualize medication timing, and use adult-centered activity materials. All item IDs and answer indices remain unchanged; two option descriptions were refined in place without reordering them. Historical correct/incorrect records are not erased or regraded.

Primary references checked during implementation:

- [42 CFR 482.13: patient rights, restraint and seclusion](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-482/subpart-B/section-482.13).
- [FDA: clozapine REMS removal and continued ANC monitoring](https://www.fda.gov/drugs/drug-safety-and-availability/fda-removes-risk-evaluation-and-mitigation-strategy-rems-program-antipsychotic-drug-clozapine).
- [FDA: muscarinic treatment for schizophrenia](https://www.fda.gov/news-events/press-announcements/fda-approves-drug-new-mechanism-action-treatment-schizophrenia).
- [DailyMed: haloperidol, NMS recognition and management](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8ca14b79-6671-4e44-aa34-6564a92aa197).
- [ASAM alcohol withdrawal guideline](https://www.asam.org/quality-care/clinical-guidelines/alcohol-withdrawal-management-guideline), recommendations V.7 and VI.9, among other supportive guidance.
- [FDA: naloxone and ongoing emergency care](https://www.fda.gov/consumers/consumer-updates/access-naloxone-can-save-life-during-opioid-overdose).
- [SAMHSA: buprenorphine and induction guidance](https://www.samhsa.gov/substance-use/treatment/options/buprenorphine).
- [NICE CG103: delirium](https://www.nice.org.uk/guidance/cg103/chapter/Recommendations).
- [NICE NG69: physical monitoring in eating disorders](https://www.nice.org.uk/guidance/ng69/chapter/Recommendations).
- [CDC: OUD diagnostic criteria and the tolerance/withdrawal exception](https://www.cdc.gov/overdose-prevention/hcp/clinical-care/opioid-use-disorder-diagnosis.html).
- Existing original site notes, [Open RN communication](https://www.ncbi.nlm.nih.gov/sites/books/NBK610828/), [AGPA group guidance](https://agpa.org/guidelines-ethics/practice-guidelines-for-group-psychotherapy-2/) and [HHS group teletherapy](https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-for-behavioral-health/group-teletherapy) supply the teaching/reference context.

These are focused teaching and safety checks, not a new assertion that every supplied textbook chapter or every legacy Map sentence has been exhaustively clinically audited. Source text is not republished. The user's personal modality scores are not committed.

## Validation

`check_mh_active_lessons.js` exercises every new wrong/correct coached path, both sequences, new-activity resume, legacy-rehearsal migration, the actual feedback renderer, preserved independent answer positions, all original chapter headings, and old drafts/misses/review schedules. Existing Learn, Exam 3, Chapter 34 and Map checks remain required.

Browser QA opened all 39 rebuilt explanations at a 390 px frame; every visual/reference rendered and no horizontal overflow remained. Additional 320 px and desktop checks covered representative flow, comparison, decision and sequence lessons. Rapid iframe navigation briefly includes browser transition snapshots in width measurements; a settled ordinary page has no overflowing element. Real interactions verified a wrong/correct Peplau sequence and reload, option-specific feedback, condition-specific recall, a saved written draft, rejection of an incomplete select-all answer, chapter filtering across reload, repair of the exact recorded miss and retention of the repaired entry. Temporary QA error reporting is excluded from production.

All **21** `tools/check_*.js` scripts pass. Rebuilding lessons and both mastery pages reproduces the tested outputs. Preview evidence is retained privately; no screenshot is included in the public repository. The test also confirms all 260 authored chapter sections remain available across the 39 rebuilt lessons; this is authored-source coverage, not a claim of complete raw-book coverage.
