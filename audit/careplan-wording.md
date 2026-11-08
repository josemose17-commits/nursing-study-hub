# Care Plan Helper: question-specific writing workspace

Approved November 8, 2026. The user requested specific questions, help writing patient information in nursing language, and less scrolling between questions and answers.

## Source and scope

The uploaded **NRS 114 2026 Syllabus_SB_Fall 2026 - WEC(3).pdf**, Clinical Reasoning Plan of Care, pp. 34–47, is the form reference. The PDF was extracted and the initial assessment and seven clinical-reasoning questions were also visually checked. The form requires the student's own words and scholarly rationales with APA 7 citations. The page identifies the form page for each section. The instructor's grade is left blank; the existing initials-only workflow is retained.

Writing references checked: [Open RN nursing process](https://www.ncbi.nlm.nih.gov/books/NBK610818/), [AHRQ SBAR](https://www.ahrq.gov/teamstepps-program/curriculum/communication/tools/sbar.html), and [NMC recordkeeping, section 10](https://www.nmc.org.uk/standards/code/read-the-code-online/). These support reported versus observed data, specific documentation, goal evaluation and organized communication. The original prompts and sentence patterns are writing scaffolds, not clinical orders or generated patient findings.

## Result

- A searchable, one-field workspace uses the **original form controls and saved data paths**. Full-form view remains available.
- Specific questions identify whether to ask the patient, assess, verify the record, ask the nurse/instructor, reason, or check a scholarly source.
- Separate guidance for the seven clinical-reasoning questions, all eight assessment systems, three SBAR contexts, significance versus rationale, orders versus outcomes, labs, development, goals, interventions and evaluation.
- Local sentence builders assemble only entered facts into an editable draft. Users explicitly append a draft; existing answers are preserved. Undo is disabled after subsequent edits. Select controls use structured entry instead of sentence insertion.
- Per-patient rough facts, drafts and field location persist locally. Removing rows remaps remaining drafts. Rough notes and workspace state are excluded from the submitted Word/plain-text form.
- Phone field selection collapses after a choice. Answer/help jump buttons avoid searching through a long form; there are no nested question/answer scrolling panes.

## Validation

- All **16** `tools/check_*.js` scripts passed. After final guidance refinements, the workspace check passed again: **68 guidance profiles**, **159 unique units covering 345 original saved controls** with a populated plan fixture, including all seven reasoning questions and individual intervention rows.
- Fact-only assembly, unchanged measurements, required diagnosis components, risk statements without AEB, duplicate insertion, safe undo, citation hints, unique/non-nested units, retained answer paths and exclusion of rough notes from export were checked.
- Word generation passed in the Node harness. The browser export action generated its download blob without console errors; the browser download-event API timed out, so browser file delivery was not independently confirmed.
- Browser interactions at desktop width and in 390 px and 320 px frames: field search, question-to-fact focus, editable draft, append/undo, later-edit protection, reload, separate order rationale/outcome guidance, diagnosis selection, intervention addition, deletion with draft remapping, full-form round trip, patient isolation/restoration and F&E lab selection.
- Both phone frames had equal document content and viewport widths (375/375 and 305/305 usable CSS pixels with the browser scrollbar). No horizontal overflow in tested views.
- No browser console errors were reported. Patient data remains excluded from site synchronization.

Preview evidence: [focused question and answer](careplan-wording-preview.jpg).

The wording check flags a limited list of common documentation issues; it does not grade clinical reasoning, validate a diagnosis, verify sources, or prove that an assessment was performed. Patient-specific clinical judgment and source verification remain the student's responsibility.
