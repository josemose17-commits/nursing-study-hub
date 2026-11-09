# Care plan syllabus workflow

Reviewed November 9, 2026 against the user-supplied **NRS 114 2026 Syllabus_SB_Fall 2026 - WEC(4).pdf**, printed pp. 34-47. The uploaded PDF and patient records are not repository assets.

The helper now explains how to gather and write the information for the syllabus form. It retains the original answer controls and local patient storage. The wording builder is a local sentence-pattern tool, not a free-text AI rewrite service or a clinical grading system. All new examples are fictional and are never inserted into patient answers.

## Form coverage

| Syllabus pages | Form area | Helper and document |
| --- | --- | --- |
| 34 | Student/client details, support, presenting complaint | Original fields retained; Grade and DOB are blank document slots. DOB is deliberately not collected. |
| 35 | History, development, medications and PMH links | Field-specific collection prompts and writing shapes; existing medication/diagnosis tools retained. |
| 35-36 | Initial SBAR and significant report data | Four detailed parts distinguish reported information from a personally performed assessment. The chapter does not label this as received report; the helper allows the instructor-directed initial summary. |
| 36-37 | Initial vitals and eight assessment systems, relevant data/rationales | Actual assessment-time input; subjective findings, observations, completed actions/times, responses and plans are separate. |
| 38 | Seven reasoning questions, management orders/rationales/outcomes | Specific writing shapes, evidence requirements and uncertainty; existing response paths retained. |
| 39 | Diagnostic reports and relevance to the main problem | Guidance separates the report finding from its patient-specific interpretation. |
| 40-41 | Seven lab panels, complications | All 47 lab rows appear in the document, including unanswered rows. Facility ranges entered by the user are exported; common reference ranges are hints, not automatically verified answers. |
| 41-42 | Two fluid/electrolyte applications | Both six-column tables remain. Known lab values and user-verified ranges can carry over; typical critical limits are hints requiring facility verification. |
| 42-43 | Reassessment, significant findings, evaluation and revised priorities | The actual reassessment time is recorded. Scenario assumptions do not establish completed care for a real patient. |
| 44 | Provider transfer update and nurse handoff | Eight separate SBAR parts, with explicit request/task, timing, responsibilities, outstanding concerns and clarification prompts. |
| 45-46 | Patient-centered care, teamwork, evidence, safety, informatics | Writing shapes explain what to include and avoid. Informatics has its own saved answer key. |
| 47 | Final care-plan matrix | Five columns in the syllabus order: problem, interventions, scientific rationale, evaluation, outcomes/goals. Short- and long-term goals are in the separate fifth column. |

## Behavior and preservation

- Every focused field has an answer shape, an explanation and a warning against a common documentation mistake. Twelve SBAR parts have distinct detailed prompts and worked examples. Related S/B/A/R buttons avoid repeated field searching, and the picker labels identify the report’s purpose.
- Long syllabus questions remain available in a disclosure, with a shorter field title for navigation. The full form remains available, with the same detailed SBAR prompts/examples.
- Drafts are editable before insertion. Adding wording preserves existing text. Replacement is previewed and rejected if the answer or draft changes during review. Undo only applies while the inserted/revised answer has not been edited again.
- Existing `content`/`time` SBAR notes and system `followup` notes remain supported. Drafts, navigation and undo remain scoped to the patient; row-removal remapping is retained.
- Fixed an existing storage collision: the Informatics text answer formerly used `info`, the same key as client details. It now uses `informatics`. A surviving legacy string answer, coaching draft and focused-field state are migrated without fabricating lost demographics. All other answers are retained.
- Rough coaching notes and examples remain outside both the document body and citation auto-selection. Patient `cp-` keys remain excluded from nav synchronization. No external AI calls or cloud upload path was added.
- Word output is editable landscape Letter, black text, expanding answer rows and repeating table headers. It preserves partially completed medication, order and rationale rows. Page breaks can differ from the blank syllabus.
- Google Drive was not connected in this session. The site provides a `.docx` plus verified Google Docs upload/conversion instructions; it does not claim to create or upload a native Google Doc.

## Validation

- All 18 `tools/check_*.js` pass. New integration coverage checks all 12 SBAR parts, the 47 lab rows, five-column care-plan export, no invented findings or completed care, safe revision/undo, private-note exclusion, and Informatics/client-data isolation and legacy migration.
- Existing workspace checks still cover 68 guidance profiles and the original saved controls (with two additional optional assessment times).
- Both Exam 3 and Final mastery pages were regenerated after the shared build/cache bump. Unrelated HTML changes are cache stamps only.
- Actual browser interactions at 390 px exercised all 12 SBAR parts, each with 3-5 specific prompts and no horizontal overflow. Also checked 320 px and desktop, the whole-form view, narrative drafting, insertion, revision, stale-review refusal, undo, reload persistence, patient switching, Informatics preservation, and the export preview.
- No page-script errors were observed during this test. Unrelated extension metadata errors were excluded by URL.
- Generated a fictional integration-test document and parsed its ZIP/XML; sanitized the title and visually inspected all 13 rendered landscape pages. No clipped text or broken tables. Test exports and rendering intermediates are not committed.
- Browser download-event confirmation timed out for both an iframe and direct page. The browser policy also blocked opening its internal downloads page. Document generation/rendering passed, but browser file delivery and native Google Docs import remain unverified. No workaround around that browser policy was attempted.

## References

These support writing and communication guidance; patient-specific pathophysiology and interventions still require the student’s actual scholarly sources and citations.

- User-supplied current syllabus, Clinical Reasoning Plan of Care, pp. 34-47.
- [AHRQ TeamSTEPPS SBAR](https://www.ahrq.gov/teamstepps-program/curriculum/communication/tools/sbar.html): communication structure, specific requests and closed-loop confirmation.
- [Open RN Nursing Fundamentals 2e documentation](https://wtcs.pressbooks.pub/nursingfundamentals/chapter/2-5-documentation/): factual narrative and distinguishing subjective/objective information.
- [NMC Code, section 10](https://www.nmc.org.uk/standards/code/read-the-code-online/): accurate, dated/timed and attributable records. This is a UK professional writing reference, not a statement of New Jersey law.
- [Google Docs Office-file help](https://support.google.com/docs/answer/9406611?hl=en): edit Word files in Docs or convert a copy to native Docs format.
