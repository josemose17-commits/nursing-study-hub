# Exam 4 · mental health data

Loaded by `Exam 4 Map.html` and drawn by `mh.js`. Everything here is written for this site in our own words from Varcarolis' *Foundations of Psychiatric-Mental Health Nursing* (9e) chapters; don't paste textbook text into it (the site is public). Text supports `**bold**` and `*italic*`. Run `node tools/check_mh.js` after any change: it checks the shape of every entry, every answer key, link and video tag, and that the page loads every file here. Bump the `?v=` on the page's script tags when a file changes.

- `cond-*.js` push conditions onto `window.MH_CONDS`: `{ id, group, name, week, short, patient, report: [S, B, A, R], steps: { rc, ac, ph, gs, ta, eo } }`. Each step is `{ gist, terms?, cards? }`. A term is `{ t, see, why, means }` (the clinical word, what it looks like, why the body or mind does it, what it tells the nurse). A card is `{ h, b: [bullets], why?, tag? }` (`tag: 'If it worsens'` flags it red).
- `topics.js` — `window.MH_TOPICS`: `{ id, week, ch, title, short, lead, terms?, cards, recall?: [[question, answer]] }`, one per syllabus topic.
- `drills.js` — `window.MH_DRILLS`. `type: 'pick'` items have their own options `{ t, ok?, tech?, why }` (exactly one `ok`); `type: 'sort'` items `{ q, a, why }` are sorted into the drill's `choices` (four are shown at a time when there are more than six). `topic` links a drill to a topic.
- `questions.js` — `window.MH_Q`: `{ id, wk, link, stem, opts, a, why }`; `a` is an option index, or an array of indexes for select all that apply (the stem must then say so). `link` is `c-<condition>` or `t-<topic>`.
- `videos.js` — `window.MH_VIDEOS`: `{ id, title, see, tags }`; tags are condition or topic ids. Check a new id with YouTube oEmbed (`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<id>&format=json` returns 200 when it exists and can be embedded).

## Chapters and Chapter 34 coverage

The current Exam 4 foundations include Varcarolis 9e chapters 1–6, 8, 9, 10, 15, 16 and **34**, alongside the mood, anxiety, trauma and safety condition chapters already linked on the map. Chapter 34 is therapeutic groups, so it is a topic (`groups`), not a disorder condition.

Chapter 34 has 16 terms, 27 short section cards, 10 recall pairs, six drills (50 items), and 12 original application questions (three select-all). The table-rich chapter needs more than ten cards to cover roles, theoretical approaches, group types and treatment evidence without turning each card into a large table. `tools/learn-groups34.js` assigns every card to one of eight focused lessons; `tools/build_learn_all.js` builds them into `data/learn/e4.js` using the existing Learn/studio engine. Edit those sources, not the generated bundle. The Learn key remains `e4-learn-v1`, and existing lesson IDs are retained.

See `audit/exam4-ch34-coverage.json` for objectives, sections, named concepts and review-question coverage. Run `node tools/check_mh_groups34.js` and the existing MH/Learn checks. Videos are optional and none are added for this chapter.
