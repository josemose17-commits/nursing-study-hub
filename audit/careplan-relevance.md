# Care-plan questions tied to the syllabus — November 17, 2026

The student requested only questions relevant to completing the care plan, and approved the High-effort plan. Source: the supplied NRS 114 WEC(4) syllabus, Clinical Reasoning Plan of Care, pages 34–47. Required form sections remain available; relevance is based on the destination field and explicit selections, not a guessed patient diagnosis.

## Field boundaries

| Destination | Focused help |
| --- | --- |
| Significant history / assessment / vital signs | Identify actual findings and comparison; explain them in the separate rationale field. |
| Primary priority | Name the need and supporting urgency; interventions have their own question. |
| Nursing diagnosis | A risk selection asks for risk factors; health promotion asks for supporting readiness evidence; an actual problem asks for factors and cues. |
| System assessment | Symptoms, findings, time and relevant conditions; completed care and next-plan interview prompts are removed from this assessment helper. |
| SBAR | Distinct initial, provider-transfer and nurse-handoff purposes remain. Pending tasks go in Recommendation; background does not repeat a pending-task question. |
| Order / intervention rationale | Reuse the entered order/action visibly. A changed source field invalidates an open draft before insertion. The intervention citation stays in its separate Source field. |
| Evaluation evidence | Reuse the selected goal status; ask for evaluation time and findings. Next plan remains its own answer. |
| History | Procedure/condition details open after relevant history is entered; explicit confirmed-none entries do not ask for those follow-ups. |

`careplan-focus.js` projects the existing coaching profiles for the optional inline dialog. Original profiles, field paths and `_coach` drafts remain intact. Inactive and retired facts are excluded when building new wording; they are not deleted from saved records. Related form details are shown as reused context, not silently inferred. Existing answer replacement, undo and stale patient/row/answer protection remain.

## Main form and question sheet

Empty lab panels start collapsed; panels containing saved work open. A significance helper is offered after a lab value or note exists. Each fluid/electrolyte application initially asks for its lab selection; its detailed questions appear once selected. Older partially completed applications remain visible even when their lab selection is absent. Both full application tables and all 47 syllabus lab rows remain in the exported care plan.

The optional **Questions for unfinished fields (Word)** sheet uses actual syllabus fields and entered rows. It omits completed answers and unused extra rows, lists the age field before developmental follow-ups when age is unknown, and asks about only entered relevant lab rows. It is a form-completion checklist, not a complete bedside assessment protocol. The care-plan document itself retains the complete syllabus structure.

## Validation

- `tools/check_careplan_focus.js`: destination-specific prompts; all diagnosis branches; history follow-ups; stale reused context; unchanged older profiles; omitted inactive facts; unfinished-field deduplication and completed-answer omission; retained partial work; private-draft exclusion; care-plan and question-sheet Word generation.
- Existing care-plan, syllabus, Google export and workspace regressions cover original storage paths, 12 sections, 47 lab rows, both electrolyte applications, five care-plan columns, separate goals, preserved answers/drafts and reviewed export boundaries.
- Browser preview uses fictional practice data only. Phone checks cover risk-specific prompts, built wording, explicit insertion, persisted answer/draft after reload, selected-lab follow-ups, reused order context, focused priority help and answer-only export preview. No patient data was uploaded.
- The browser download-event API timed out after one 10-second attempt. Word bytes generate and pass automated checks; actual browser delivery is not counted as verified.
- Website Google OAuth remains the previously documented independent setup requirement. This change does not configure it or claim real Google Doc creation.

Private screenshots and temporary preview files are excluded from the repository. No `cp-` keys are added to study-progress SYNC.

Release verification: all 25 `tools/check_*.js` pass. Final 390 px phone and desktop layouts have no horizontal overflow and application error logs are empty. The dialog opens at its title. Other HTML changes are release cache stamps only; exam content and APA code are unchanged.
