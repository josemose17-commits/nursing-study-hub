# Learn for the remaining exams

Decision date: 2026-11-08. Base: 5321494455d248677609555dea3e0c3d105e2849. Release build: 202611081800.

The existing Exam 3 Understand → Recall → Apply → Feedback → Review path now serves every exam. Each exam keeps its own progress, chapter selections, paused drafts and cumulative Learn miss bank. Existing exam banks, IDs, keys and test histories are preserved.

| New path | Lessons | Rotating graded checkpoints | Coached activities | Source coverage |
| --- | ---: | ---: | ---: | --- |
| Exam 1 | 25 | 76 | 73 | 13 authored topics + 12 conditions |
| Exam 2 | 26 | 113 | 73 | All 81 authored note sections; all 17 named guide groups plus support |
| Exam 4 | 19 | 63 | 50 | 12 authored topics + 7 conditions |
| Exam 5 | 23 | 65 | 64 | 9 authored topics + 14 conditions |
| Final | 83 | 286 | 244 | All 193 currently authored Final note sections |

Counts include reused source questions and, in the Final path, reused Exam 3 and respiratory lessons. They are not counts of newly written original questions. Coached activities include clearly labeled self-checks; typed recall is not automatically graded.

## Content and scope

`tools/learn-catalog.js` defines the groupings and read-only question references. `tools/build_learn_all.js` builds the bundles and `data/learn/coverage.json`. Full source-note links, detailed chapter sections, worked recall answers and strategy prompts accompany the new lessons. Original concise notes remain the content source; this rollout does not claim a fresh raw-text audit of every textbook chapter.

The syllabus calls the final comprehensive, but no detailed final blueprint is available. Final Learn explicitly labels its current topic path provisional and links all earlier exams for cumulative review. Planned Final Map chapters 1, 2, 4, 7, 8, 10, 11 and 12 lack full authored chapter notes; the page names this gap. Only Exam 2 and Exam 3 display existing study-guide question counts. Other paths use transparent chapter balancing.

Focused clinical checks added/qualified: ASA healthy elective fasting context; MHAUS malignant hyperthermia response; epinephrine in anaphylaxis; CDC C. difficile hand-hygiene distinctions; FDA clozapine REMS removal with continued ANC monitoring; individualized schizophrenia risk assessment; naloxone with breathing support and emergency observation; GINA 2026 ICS-containing asthma care; FDA voxelotor withdrawal and avoiding sickle-cell overhydration; NICE pancreatitis nutrition and antimicrobial indications; specialist-directed physostigmine precautions and NMS recognition. Direct primary-source URLs are in the generated studios.

Word parts now include the mental-health glossary, verified psych- analyses and WHO naming stems (including benzodiazepine and selected antipsychotic/antidepressant stems). Whole medication names, abbreviations and unverified splits stay explicitly distinguished. Medication names can be opened within notes and questions through the shared Words feature.

## Progress and missed practice

Keys: e1-learn-v1, e2-learn-v1, e3-learn-v1 (existing), e4-learn-v1, e5-learn-v1, fin-learn-v1. Home progress-file transfer already includes these prefixes; its import summary now describes each exam’s Learn progress.

The miss bank stores each missed lesson/variant and its actual unchecked recall points. Later attempts at other variants cannot hide an older miss. Exact-variant retries preserve a different paused lesson. Repaired variants remain selectable. Old Exam 3 misses are recovered only from retained history; missing individual recall details are labeled unknown, not invented. The new bank retains misses beyond the rolling ordinary history.

A correct early attempt does not move a review date or earn delayed-review credit. Optional vocabulary help makes the attempt ineligible for delayed-review credit. Independent checkpoints require the exact correct set; coached reflection remains a self-assessment.

## Validation

- All 15 `tools/check_*.js` checks pass, including the new all-exam coverage/state/activity checker and existing skills, care-plan, APA, Mastery, mental-health and Exam 3 regressions.
- Original Exam 3: 29 lessons, 90 coached decisions, 58 unchanged graded items. The Final reuses their questions and prerequisites without altering them.
- New checker walks all checkpoint keys, wrong/correct coached paths, reflection reveal guards, source routes, chapter coverage, cumulative misses, exact repairs, saved drafts, migration, and multi-select scoring.
- Deterministic rebuild of all Learn bundles, coverage manifest and vocabulary produces identical hashes.
- Browser QA on the managed desktop preview: all six Learn homes; Exam 1 launch; Exam 2 clinical lesson; Exam 4 explanation → coached reflection → saved typed recall → worked-answer comparison → wrong checkpoint → cumulative miss → exact repair → retained repaired item; multiple chapter choices surviving reload; Exam 5 medication stems; Final scope and hypoglycemia studio with Final source/test links; Exam 3 compatibility.
- No errors from Learn or Study Studio scripts in the browser log. The browser also reported extension metadata messages and a transient view-transition abort; fresh-state clicks worked. No unsupported mobile viewport API was used, so physical phone-size browser QA was not performed in this environment. Existing responsive styles and the new chapter-picker layout are retained.

## Rebuild and review

Run `node tools/build_learn_all.js`, `node tools/build_word_parts.js`, then `node tools/check_learn_all.js`. Existing Exam 3 builders remain unchanged. Review new content groupings and clinical qualifiers in the builder; generated files should not be edited directly. A second-model review may check coverage and contradictions, but model agreement is not clinical evidence.
