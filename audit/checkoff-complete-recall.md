# Complete checklist content and recall practice

Updated 2026-11-02. Base: `f5c7017d455666d163a7f74b7824e13a7d669a46`.

The learner clarified that the goal is to remember everything in the professor's check-offs, using a sensible clinical sequence rather than necessarily the printed order. The earlier 72-checkpoint summaries grouped too much content together for that purpose.

## Coverage

The expanded guides now represent **all 123 numbered rows** in the required NRS 114 check-off sections, plus **14 printed header/goal/objective notes**. They contain **154 practice checkpoints**: 140 procedure/explanation checkpoints including the IVPB supplement, and 14 items to explain when asked. Related repeated rows can map to one action; a compound row can map to more than one. This is content coverage, not 154 invented faculty grading requirements.

| Station | Numbered PDF rows | Header / goal notes | Expanded checkpoints |
| --- | ---: | ---: | ---: |
| IV push, pp. 52–54 | 16 (two preparation rows, then bedside numbering restarts at 1–14) | 4 | 24 |
| IVPB supplement | 0: heading only, no secondary-infusion procedure in manual | 0 | 10 |
| Blood administration, pp. 55–59 | 26 | 4 | 32 |
| Suspected transfusion reaction, pp. 60–61 | 11 | 0 | 13 |
| Trach suction, pp. 67–69 | 23 | 4 (shared goal/objectives) | 25 |
| Trach care, pp. 69–70 | 19 | 0 | 20 |
| G-tube medication, pp. 42–45 | 28 (12 assessment + 16 medication rows) | 2 | 30 |
| **Total** | **123** | **14** | **154** |

`data/nrs114-checkoff-details.js` contains the independent source-row manifest, unique IDs, PDF page/section/row locators, paraphrased source descriptions, and the expanded flow. Each source item maps to a practice action. The visible “Everything from this checklist” table lets the learner open each matching action. The supplied PDFs are not redistributed.

Smaller actions now visible include each patient/form/unit/type/signature comparison for blood, package opening and tubing labels, the saline Y-set branches, IV flush air/clamp/timing details and both printed timing examples, multidose/liquid/tablet preparation, residual/pH context, water and feed details, catheter hand roles and disposal, canister/mouth care, separate cannula pathways, applicators/gauze/ties, rinse/drying/locking, and final documentation. New explanations include why, example patient words where useful, and a practical phase.

## Source documents

- ECC Skills Lab Practice & Test-off Manual, revised 01/2026, supplied as `2026 Revised Skills Checklist.pdf`. 121 pages. SHA-256 `87e1e165a668e680da30069c8028d37a440604652ec6b23b01826ac51a5f3637`.
- Supplied NRS 114 WEC Fall 2026 syllabus, final revision 08/2026, PDF pp. 15–18 for named test-offs. SHA-256 `2502cf5d17f53dda42b9f149d3f42f09ced685d5cd43f997ae9a70dbabbce0a1`.

Text was read for every numbered source row, with visual checks of representative pages 53, 57 and 69 to verify numbering, section boundaries and compound rows. IV bedside numbering restarts after the two preparation rows. Broader whole-program skills outside these required check-offs remain in the existing manual/records view; this update does not claim a fresh audit of all 121 manual pages.

## Clinical handling

The source discrepancies identified in `audit/nrs114-checkoff-practice.md` remain visible rather than being silently deleted from coverage. A conflicting printed instruction is represented by its source description, the approved safe action and a faculty-clarification note. It is not rehearsed as an unsafe required action.

- No air-whoosh or residual-volume proof of feeding-tube position. Abdominal assessment, bowel sounds, nausea/emesis, stoma findings, residual/pH instructions and all preparation details remain represented separately.
- Individualized water/formulation/feed plans; the manual's example amounts, warm-water wording, 30-minute hold and positioning durations are shown with their qualifications.
- Drug-specific IV push rate and flush delivery; the two arithmetic examples are in preparation, not a task that interrupts medication delivery. No independent dose titration without an authorized order/protocol.
- Full individual blood checks and qualified verification, early observation through 15 minutes and the printed observation schedule in context. Component suitability need not mean identical ABO labels.
- Reaction care begins with immediate interruption/support. Escalation, treatment and investigation may occur in parallel with help; no forced serial resuscitation order is graded.
- Predetermined shallow trach depth, appropriate catheter/pressure, preoxygenation and recovery, no routine airway saline instillation; actual cannula/holder instructions. The broad printed objective naming nasal/oral/pharyngeal suction remains explicitly identified for faculty clarification; those are not falsely supplied as tracheostomy-depth instructions.

The existing linked Open RN, CDC, AARC, Lifeblood, NHS SPS, NTSP and manufacturer references remain available beside the content. Reopened on this revision: Open RN IV push; AARC 2022 suctioning; Lifeblood monitoring, reaction management and [component indications](https://www.lifeblood.com.au/health-professionals/clinical-practice/use-of-blood-components); NHS SPS enteral medicine administration. The complete assigned Ignatavicius textbook was not separately verified for these additions. Device-specific instructions, patient orders and faculty rubric still govern the actual scenario.

## Memory practice and progress

- **Next step:** action title and answer absent until a hint/comparison; current phase and previous-action context orient recall. Optional notes, position, revealed state, hints and ratings survive reload. A hint cannot count as independent recall. Weak-step queues provide context from the actual station flow, not a misleading consecutive bedside procedure.
- **Whole procedure:** case and optional recall outline only; no step list before comparison. Learners can speak/demonstrate instead of typing. Review then shows every checkpoint and requires a rating for every item before completing the self-review. A paused run in another station is protected by a resume/start choice.
- Ratings distinguish independent recall, prompted recall, omission, a missed safety prerequisite and a conditional item not present in the scenario. An equivalent safe ordering is not marked wrong just for differing from the suggested flow. Text is not automatically judged by an unreliable keyword grader.
- Prompted/missed/unsafe-sequence ratings update a cumulative procedure-step bank. It includes all attempts, filters by selected stations, retains corrected entries for replay and reopens later misses. “Not in this scenario” never clears a prior miss. Repeated rating-button clicks in one attempt do not inflate failure counts.
- Existing `clin-skill-trainer-v1` storage gains `flow`, `run`, `stepMisses` and `runHistory`; the current quiz, 42 question IDs/keys/rationales and decision-miss bank remain unchanged. Existing shorter-guide recall notes/ratings are preserved separately; they do not automatically award mastery of the detailed items.
- All 28 original `clin-lab-v1` date/step records remain untouched. Self-reviews never create a faculty pass or practice date. The existing `clin-` progress export/import includes the extended state.

## Validation

All 12 `tools/check_*.js` passed, including the prior clinical-learning, mental-health/Exam 1, dosage, morphology, mastery, quiz and studio regressions. `check_checkoff_coverage.js` verifies the full independent 137-item source manifest; 154 unique checkpoints; coverage of every source in the actual rehearsal; representative compound subactions; unchanged graded questions; old-summary preservation; hint/rating gates; resume and corrupt-session handling; cumulative filters/correction/reopening; whole-procedure gating; scenario-only branches; and hidden-answer rendering in every station.

Browser QA on the managed preview verified all seven guides and their coverage tables (154 checkpoints / 137 source items), hidden titles and small hints, comparison/ratings, next-step reload, saved full-procedure outline, a complete 13-item reaction review, all self-rating outcomes, filtered older weak steps and corrected replay. No uncaught application error was observed; the browser extension emitted unrelated metadata errors. No horizontal overflow at the available 1363 px viewport. Real-phone/device-emulation QA remains a verification limit because viewport resizing is not exposed here.
