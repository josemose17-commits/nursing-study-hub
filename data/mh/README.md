# Exam 4 · mental health data

Loaded by `Exam 4 Class Review.html` (the older `Exam 4 Map.html` redirects there) and drawn by `mh.js`. Everything here is written for this site in our own words from Varcarolis' *Foundations of Psychiatric-Mental Health Nursing* (9e) chapters; don't paste textbook text into it (the site is public). Text supports `**bold**` and `*italic*`. Run `node tools/check_mh.js` after any change: it checks the shape of every entry, every answer key, link and video tag, and that the page loads every file here. Bump the `?v=` on the page's script tags when a file changes.

- `cond-*.js` push conditions onto `window.MH_CONDS`: `{ id, group, name, week, short, patient, report: [S, B, A, R], steps: { rc, ac, ph, gs, ta, eo } }`. Each step is `{ gist, terms?, cards? }`. A term is `{ t, see, why, means }` (the clinical word, what it looks like, why the body or mind does it, what it tells the nurse). A card is `{ h, b: [bullets], why?, tag? }` (`tag: 'If it worsens'` flags it red).
- `topics.js` — `window.MH_TOPICS`: `{ id, week, ch, title, short, lead, terms?, cards, recall?: [[question, answer]] }`, one per syllabus topic.
- `drills.js` — `window.MH_DRILLS`. `type: 'pick'` items have their own options `{ t, ok?, tech?, why }` (exactly one `ok`); `type: 'sort'` items `{ q, a, why }` are sorted into the drill's `choices` (four are shown at a time when there are more than six). `topic` links a drill to a topic.
- `questions.js` — `window.MH_Q`: `{ id, wk, link, stem, opts, a, why, optionWhy? }`; `a` is an option index, or an array of indexes for select all that apply (the stem must then say so). `optionWhy`, when present, is a string array parallel to `opts` with an explanation for each choice. `link` is `c-<condition>` or `t-<topic>`.
- `videos.js` — `window.MH_VIDEOS`: `{ id, title, see, tags }`; tags are condition or topic ids. Check a new id with YouTube oEmbed (`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<id>&format=json` returns 200 when it exists and can be embedded).

## Chapters and Chapter 34 coverage

The broader Exam 4 map contains Varcarolis 9e chapters 1–6, 8, 9, 10, 15, 16 and **34**, alongside the mood, anxiety, trauma and safety condition chapters already linked on the map. The instructor-assigned scope is narrower and listed below. Chapter 34 is therapeutic groups, so it is a topic (`groups`), not a disorder condition.

Chapter 34 has 16 terms, 27 short section cards, 10 recall pairs, six drills (50 items), and 12 original application questions (three select-all). The table-rich chapter needs more than ten cards to cover roles, theoretical approaches, group types and treatment evidence without turning each card into a large table. `tools/learn-groups34.js` assigns every card to one of eight focused lessons; `tools/build_learn_all.js` builds them into `data/learn/e4.js` using the existing Learn/studio engine. Edit those sources, not the generated bundle. The Learn key remains `e4-learn-v1`, and existing lesson IDs are retained.

See `audit/exam4-ch34-coverage.json` for objectives, sections, named concepts and review-question coverage. Run `node tools/check_mh_groups34.js` and the existing MH/Learn checks. Videos are optional and none are added for this chapter.

## Current Exam 4 study-guide focus

The instructor outline supplied by the student assigns Chapters **3, 6 and 34**, plus **Peplau’s Model of the Nurse-Patient Relationship** and **Communication Skills for Nurses** from Chapter **9**, with approximately **40 questions**. `study-guide.js` is the shared preset for Map, Learn and Home; broader authored content remains under Everything.

The preset has 5 topic entries, 13 drills, 35 practice questions and 12 lessons. The relationship topic is narrowed to the assigned Peplau phases; out-of-scope topics remain available under Everything. The class-review test includes all available authored questions in the assigned scope by default. Its question history uses `e4-test`, shared with Learn so misses can be reviewed there. Active tests and the latest ten completed scores use `e4-test-session` and `e4-test-runs`; existing `e4-class-test` history is merged on first visit. The instructor estimates approximately 40 exam questions; the practice pool is not an exam-weighting blueprint. Each option in the assigned test pool now has an original explanation based on course materials and authored notes. Existing sources and progress are retained. See `audit/exam4-study-guide.md` and run `node tools/check_e4_study_guide.js` and `node tools/check_e4_test_flow.js`.

## Curated lesson authoring

`lessons-src.js` is a Node-only authoring input for the 16 assigned lessons. It supplies three concise explanation paragraphs, a patient situation, a small visual and objective coached choices or sequences. `tools/apply_mh_lessons.js` overlays that teaching during the existing `tools/build_learn_all.js` build. It retains every authored chapter section, established independent checkpoint and recall position. Exam 5 has the corresponding source in `data/mh5/lessons-src.js`. These authoring files are not Map scripts; `check_mh_active_lessons.js` validates their output, saved-state behavior and source coverage.
