# Task: add Chapter 34 to Exam 4 (map content + lessons)

You are working in the repo `josemose17-commits/nursing-study-hub`, a static GitHub Pages study site for an NRS 114 student. Exam 4 is mental health (Varcarolis, *Foundations of Psychiatric-Mental Health Nursing*, 9e). Chapters 1, 2, 3, 5, 6, 8, 9, 10, 15 and 16 are already on the Exam 4 map. **Chapter 34 is missing.** The student will paste the Chapter 34 text into this conversation. Add it to (A) the Exam 4 map data and (B) the Exam 4 Learn lessons, which are generated from that data.

## Hard rules
1. **Own words only.** The site is public. Never paste or closely paraphrase textbook sentences, lists, tables or case studies. Read the chapter, then write it fresh in plain, short sentences, the way the existing `data/mh/topics.js` entries are written. Keep facts, terms and numbers accurate to the chapter.
2. **Cover the whole chapter.** Every heading, key term, nursing intervention, drug/treatment, safety point and anything in the chapter's objectives or review questions must appear somewhere (a term, card, recall pair, drill item or question).
3. Work on your own `codex/*` branch. Don't touch the Care Plan Helper (`careplan.*`, `data/careplan/`), the APA page or Exam 1/5 files. Keep changes isolated.
4. Before pushing to `main`, run `git fetch origin main` and `git merge-base --is-ancestor origin/main HEAD`. If main moved, rebase or merge onto it and keep the other side's changes.
5. Don't add `cp-` (patient data) keys to `nav.js` SYNC.

## A. Exam 4 map content (`Exam 4 Map.html`, data in `data/mh/`, rendered by `mh.js`)
Read `data/mh/README.md` first; it documents every shape. Text supports `**bold**` and `*italic*`.

1. **Topic**: add one entry to `window.MH_TOPICS` in `data/mh/topics.js`, matching the existing entries exactly:
   `{ id: '<short-id>', week: 11, ch: 'Chapter 34', title, short, lead, terms: [{ t, see, why, means }], cards: [{ h, b: [bullets], why?, tag? }], recall: [[question, answer]] }`
   - `short`: one line. `lead`: 2–4 sentences on what the chapter is about and why the nurse cares.
   - `terms`: every key term (aim 6–12). `see` = what it looks like on the unit; `why` = the reason or mechanism; `means` = what it tells the nurse to do.
   - `cards`: one per major chapter section (aim 5–10). Use `tag: 'If it worsens'` for safety/emergency cards.
   - `recall`: 6–10 question/answer pairs covering the testable facts.
   - If the chapter is really about a **condition** (a disorder with assessment, diagnoses, goals, interventions, evaluation), ALSO add it as a condition in a `data/mh/cond-*.js` file with the full shape `{ id, group, name, week, short, patient, report: [S, B, A, R], steps: { rc, ac, ph, gs, ta, eo } }` (copy the structure of `cond-mood.js`).
2. **Drills** (`data/mh/drills.js`, `window.MH_DRILLS`): add at least one drill with `topic: '<your topic id>'`. Use `type: 'pick'` (each item has options `{ t, ok?, tech?, why }`, exactly one `ok`) for "best nurse response/action" items, or `type: 'sort'` (`{ q, a, why }` into the drill's `choices`). Aim for 6–10 items.
3. **Questions** (`data/mh/questions.js`, `window.MH_Q`): add 8–12 NCLEX-style questions `{ id, wk, link: 't-<topic id>', stem, opts, a, why }`. Include 2–3 select-all-that-apply items (`a` is an array and the stem must say "Select all that apply"). Every `why` explains why the right answer is right and why the tempting wrong one is wrong. Use unique ids.
4. **Videos** (optional, `data/mh/videos.js`): only add YouTube ids you verified with oEmbed (`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<id>&format=json` must return 200). Tag them with the topic id.
5. Update the header comment in `topics.js` that lists the chapters, and the chapter list in `data/mh/README.md`, to include 34.
6. In `Exam 4 Map.html`, bump the `?v=` on every `data/mh/*.js` script you changed (use a new timestamp like `YYYYMMDDHHMM`).
7. Run `node tools/check_mh.js` and fix every error.

## B. Lessons (Exam 4 Learn, which you already built)
`Exam 4 Learn.html` loads `data/learn/e4.js`, which `tools/build_learn_all.js` generates from the Exam 4 map data (`buildMH('mh','e4')`, settings in `tools/learn-catalog.js`, extra questions in `tools/learn-questions.js`). Lessons for Chapter 34 come from the topic, condition, drills and questions you add in Part A. To finish them:
1. Run `node tools/build_learn_all.js` after Part A so `data/learn/e4.js` picks up Chapter 34. Never hand-edit `data/learn/e4.js`.
2. If Chapter 34 is a **condition**, add its id to `conditionChapters.e4` in `tools/learn-catalog.js` with `'34'` (like `bipolar:'13'`).
3. Update the Exam 4 `scope` text in `build_learn_all.js` if it lists chapters, so it mentions Chapter 34.
4. Make sure every Chapter 34 lesson has a teach step, a coached decision and recall/application questions, the same as the other Exam 4 topics. If the generated lesson is thin, add questions in `tools/learn-questions.js` (as with `trauma-choice`) and rebuild.
5. Run `node tools/check_learn_all.js` and fix every error. Open `Exam 4 Learn.html` at 390px and work through a Chapter 34 lesson end to end: right answer, wrong answer and retry, reload to confirm progress saved under `e4-learn-v1`.

## C. Release steps (always, in this order)
1. Bump `BUILD` in `nav.js` and `version.json` to the same new timestamp, then update every `nav.js?v=` reference in all `.html` files to match.
2. Rebuild the mastery pages: `node tools/build_e3_mastery.js` and `node tools/build_e3_mastery.js final`.
3. Run **every** `tools/check_*.js` and make sure all pass.
4. Load `Exam 4 Map.html` and the Learn page at a 390px-wide viewport. Confirm no console errors and no horizontal scroll, and that the new topic, drill, questions and lessons render and grade correctly.
5. Add Chapter 34 to the Exam 4 line in `README.md`.
6. Commit with a clear message, then push your branch and fast-forward `main` (after the merge-base check in rule 4).

## Done means
Chapter 34 shows on the Exam 4 map as a topic (and as a condition, if it is one), with drills and questions, and its lessons appear on Exam 4 Learn. Every check passes. Nothing is copied from the textbook.
