# Task: add Chapter 34 to Exam 4 (map content + lessons)

You are working in the repo `josemose17-commits/nursing-study-hub`, a static GitHub Pages study site for an NRS 114 student. Exam 4 is mental health (Varcarolis, *Foundations of Psychiatric-Mental Health Nursing*, 9e). Chapters 1, 2, 3, 5, 6, 8, 9, 10, 15 and 16 are already on the Exam 4 map. **Chapter 34 is missing.** The student will paste the Chapter 34 text into this conversation. Add it in two places: (A) the Exam 4 map, and (B) lessons built the same way as the Exam 3 lessons you made.

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

## B. Lessons (same system as the Exam 3 Learn page you built)
Build the Chapter 34 lessons the same way you built the Exam 3 lessons (`data/e3/lessons-src.js` → `tools/build_e3_lessons.js` → `Exam 3 Learn.html`, checked by `tools/check_e3_lessons.js`). Reuse that engine. Don't fork a new one.
- Create an Exam 4 lesson source (e.g. `data/mh/lessons-src.js`) with lessons covering **all** of Chapter 34: teach → coached decision → recall/application questions, the same lesson shape and features as Exam 3 (scheduling and reviews, retries, draft persistence, separate recall vs application scoring).
- Lesson questions may reuse the new `MH_Q` items by id or be written new. Keep them consistent with the map content, with no contradictions.
- Output an `Exam 4 Learn.html` page (or add Chapter 34 lessons to an existing Exam 4 lesson page if one exists by then). Store progress under the `e4-` localStorage prefix (it is already in `nav.js` SYNC).
- In `nav.js`, add `'Learn'` to Exam 4 in `HAS` (it becomes `'4': ['Learn', 'Map']`). The `PAGE.Learn` path `'Exam 4 Learn.html'` already follows the pattern.
- Add a check script (or extend the existing one) so the Exam 4 lessons pass the same checks the Exam 3 lessons do, and run it.

## C. Release steps (always, in this order)
1. Bump `BUILD` in `nav.js` and `version.json` to the same new timestamp, then update every `nav.js?v=` reference in all `.html` files to match.
2. Rebuild the mastery pages: `node tools/build_e3_mastery.js` and `node tools/build_e3_mastery.js final`.
3. Run **every** `tools/check_*.js` and make sure all pass.
4. Load `Exam 4 Map.html` and the Learn page at a 390px-wide viewport. Confirm no console errors and no horizontal scroll, and that the new topic, drill, questions and lessons render and grade correctly.
5. Add a line for Chapter 34 and the Exam 4 Learn page to `README.md`.
6. Commit with a clear message, then push your branch and fast-forward `main` (after the merge-base check in rule 4).

## Done means
Chapter 34 shows on the Exam 4 map as a topic (and as a condition, if it is one), with drills and questions. Exam 4 has a Learn tab with Chapter 34 lessons. Every check passes. Nothing is copied from the textbook.
