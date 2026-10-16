# Study hub — NRS 114 Med-Surg 1

Study pages for Exam 2 (chapters 22, 24, 25, 27, 28, 29, 30, 34) and Exam 3 (chapters 45–49, 53, 55, 56), built in Claude Design, restyled in Essex County College green, gold and white with frosted-glass panels. Open `index.html` to start; its Exam 2 / Exam 3 switch picks the exam, and the tab bar follows it.

## Exam 3

- `Exam 3 Map.html` — the same map as Exam 2 (shared `map.js` and `map.css`; each page sets `window.EXAM_MAP` with its name, systems, question counts, storage prefix and pages). Its data is in `data/e3/`, and its progress keys start with `e3-`, so the two exams never mix.
- The Exam 3 notes are written as data in `data/e3/src/<chapter>.js` (each block: a label, the full text, and its Quick bullets) and built with `node tools/build_e3_notes.js` into `data/e3/info-topics.js`, `topic-index.js` and `notes-short.js` in the same shape as Exam 2's. The build also checks that every Why it works line (`data/e3/basics.js`) quotes the notes exactly. Rebuild after any edit to a source file.
- `data/e3/focus-rules.js` sets `window.FOCUS_CFG` before `focus.js`: Exam 3's own focus keys, topic keyword rules and (once the professor's study guide arrives) its study-guide topics.
- `nav.js` takes the exam from the page's file name ("Exam 3 …"), or on Home and the reference sheet from the exam used last (`hub-exam`). `HAS` lists which pages each exam has so far; a missing one gets no tab.
- `data/e3/basics.js` holds Exam 3's Why it works cards: each one quotes a line from that topic's notes and explains it from the other books (A&P, Chemistry, Microbiology, Psychology, Sociology, Fundamentals of Nursing, Nursing Pharmacology). The build warns if a quoted line is no longer in the notes.
- `Exam 3 Drug Cards.dc.html` — the Exam 2 drug-card page pointed at `data/e3/drugs-gi.js` (antacids, H2 blockers, PPIs, H. pylori regimens, mouth care, motility, IBS, antidiarrheals, IBD drugs, colorectal chemo, procedure drugs) and `data/e3/drugs-endo.js` (thyroid replacement and antithyroid drugs, calcium and vitamin D, cinacalcet, every diabetes pill class, the insulins, and the low-glucose rescue drugs). Each file appends its classes and drugs to `window.DRUG_DATA`, skipping any id already loaded. The plain-language steps, look-alikes and side-effect reasons sit directly on each drug, not in separate layers. The Exam 3 map also loads both files for its drug links.
- `tools/build_words.js` reads both exams' drug files: a word that names an Exam 3 drug gets `drug3`, and `say.js` links it to the Exam 3 card when you are studying Exam 3 (or when only Exam 3 has that drug).
- Still to come for Exam 3: the Mastery test, breakdowns, and the study-guide layer (`GUIDE`/`BP`) once the study guide is in.

| Page | What it does |
| --- | --- |
| `Exam 2 Map.html` | All the content as one map: notes, organ → molecule breakdowns, tap-to-define words, connections, and your focus topics (code in `map.js` / `map.css`, shared with Exam 3) |
| `Exam 2 Drug Cards.dc.html` | Drug cards by system and class; each card opens in sections (what it is, how it works step by step, before you give it and why, what to watch for and why, teaching, the exam angle) |
| `Exam 2 Mastery Loop.dc.html` | The mastery test: one adaptive test (20/40/60) mixing NGN items, traditional NCLEX items, drug questions generated fresh from the drug data (new wrong options each time), myth checks and active-recall prompts. You mark each answer “I know this” or “I’m guessing”; a miss or a guess queues a follow-up on that exact point two questions later (two if you were sure and wrong). With no focus picked, every test covers all 17 study-guide items (`GUIDE` in the page: each item at least once, chapters in the blueprint's proportions, a chapter's extra questions going to its weakest items); 40- and 60-question tests add one high-yield Ch 23 or 33 question, which gets no follow-ups. `GUIDE_OFF` keeps chapter content that isn't on the study guide (TB, flu, COVID, MI/angina, valves, catheterization, transfusions, lung cancer, chest tubes, aneurysms…) from counting toward a study-guide item unless the question is plainly about that item. Within each item, `GUIDE_SUB` lists its subtopics (89 in all, e.g. ECG analysis: rate math, waves & intervals, sinus rhythms, A-fib, SVT, PVCs, VT/VF, heart blocks, cardioversion, pacemakers, drugs); a question is tagged from its stem, right answer and rule, and each test picks a subtopic it hasn't asked yet, then the one seen least across tests, so three tests reach every subtopic. **Drill one study-guide item** (home, under the start button) runs a whole test on one item, rotating through its subtopics. Follow-ups on a study-guide question stay on study-guide content (on the drilled item in a drill). The report shows how many study-guide items and subtopics the test covered. **Redo my misses** (report button, or `#redo`) goes through the test's misses 10 at a time (`REDO_N`), worst first: right (and not marked a guess) = fixed; a miss brings a new question on the same point two questions later, up to three tries. Feedback shows the full explanation with a Next button above it, and marking a guess is optional. `practice` in the store tracks fixed / shaky / not-tried-yet for that test, so the report button carries on with the next 10, then the shaky ones. A redo round doesn't count as a test. Active-recall cards: answer out loud (or type), reveal, then tap the points of the answer you missed (`recallPoints` splits it at semicolons, sentences, arrows, dashes and lists) and add anything else in your own words; the score is the share you got, what you missed is saved with the record, shown on the report and the weak-areas page, aimed at by the follow-up, and shown as “Last time you missed” when the card comes back in Redo. Never repeats a question within a test and avoids the last test’s questions. Ends in a report — what to study in order with links to Map topics, nodes and drug cards — and a study map of every Map topic colored by mastery, which the next test leans toward. Mastery is stored in `e2-mastery-v3` and also marks weak topics on the Map. |
| `Exam 2 Concept Map.dc.html` | The older one-page concept map |
| `Exam 2 Info.dc.html` | Source the map's topics are extracted from (`tools/extract_info_topics.py`); visiting it opens the map |

## Focus: studying only what the professor lists

On the map, tap **Pick topics** and choose the topics (or **Lists → Study guide topics**). That choice is saved as your focus, and:

- the map glows those topics and can hide the rest (**Focus only**);
- the mastery test draws only questions tied to those topics.

**Lists → Save this focus as a list** keeps it under a name, so each exam (or quiz) can have its own list. `focus.js` holds the keyword rules that decide which questions belong to each map topic; add a rule there when you add a topic.

## Adding content for a later exam

1. Add the chapter sections to the Info page (`Exam 2 Info.dc.html`) and run `python3 tools/extract_info_topics.py` (needs `pip install beautifulsoup4`). It rewrites `data/info-topics.js` and `data/topic-index.js`.
2. New chapters show up on the map by themselves (under "More chapters" until you add them to `SYSTEMS` in `Exam 2 Map.html`).
3. Add keyword rules for the new topics in `focus.js`, and question data in `data/`.
4. For the short (Quick) version of the notes, run `python3 tools/dump_note_blocks.py <folder>` to list each wordy paragraph, then add bullets for it in `data/notes-short/<chapter>.js`, keyed by the paragraph's heading (a labeled cell's label; for an unlabeled paragraph, `¶` plus its opening words). Paragraphs without bullets just show in full.
5. For each new question, add its explanation to `data/explain/<chapter>.js` (keyed by the Mastery Loop id, e.g. `30|n|2`). Without one, the question still works with its short rationales.
6. Put the new exam's study-guide items, with the words that tie a question to each, in `GUIDE` in the Mastery Loop, and its question counts in `BP`. Add questions to `data/extra-questions.js` (append only, so saved progress keeps its ids) for any item with fewer than about six.

## Layout

- `data/` — question banks and drug data the pages load (`ngn-*`, `recall-*` — the Mastery Loop's question bank and repair cards — `drugs-*`), the glossary, the map's topics (`info-topics.js`, generated) and breakdowns (`concept-nodes.js`, with the short memory keys in `concept-keys.js`).
- `say.js` — tap any drug name, medical word or abbreviation (on every page, via the 🔊 Words button) to hear it and see its full name and plain meaning; drug names link to their card. Pronunciations are in its `WORDS` list (`term|respelling|what to say`). Meanings live in `data/words.js`, built by `node tools/build_words.js` from `tools/words-src.js` (abbreviations + definitions), the glossary and the drug cards. The mastery test records words looked up during a question and lists them in the report.
- `Reference Sheet.html` — background from earlier courses (Fundamentals, Pharmacology, A&P, Microbiology, Chemistry, Psychology, Sociology) that the med-surg chapters assume, filling what the med-surg book leaves out. Not tied to one exam. First section: therapeutic communication (Fundamentals of Nursing, OpenStax, Ch. 2, CC BY 4.0). Add each new topic as its own `<section>` with a link in the top list.
- `data/basics.js` — the map's **Why it works** tab: the basic science behind specific lines already in the notes, from the other textbooks (OpenStax A&P 2e, Chemistry 2e, Microbiology, Psychology 2e; Open RN Nursing Pharmacology 2e; all CC BY 4.0). Each entry quotes its line (`says`, an exact phrase from that topic's notes), explains it (`why`) and names the book (`src`). It explains what's there rather than adding new material. "See it in the notes" highlights the quoted line. Keep `says` an exact substring of the topic text.
- `Exam 2 Map.html#weak` — **Your weak areas, in full**: one page built only from the last Mastery test (`report` in `e2-mastery-v3`); cumulative mastery from earlier tests and the old pre-test is not used. For each weak topic it shows the missed questions, the full notes (Why it works lines highlighted), the Why it works cards, every breakdown fully open and the full drug cards, plus the words looked up during the test. Nothing has to be tapped open. Linked from the Mastery report ("Read it all in full"), with a button at the top to redo the misses.
- `weak.js` — the weak topics from the last Mastery test only, used by the Map's weak-areas page. `data/node-topics.js` — which Map topics each Concept Map node belongs to.
- `focus.js` — the shared focus (which topics you picked) that the map and the Mastery Loop read.
- `data/notes-short/` — the short, bullet versions of the notes (Quick mode on the map); every fact kept, the full paragraph one tap away. `adpie.js` covers the nursing-process cells and overview paragraphs.
- `data/explain/` — the explanation layer over the question and drug data: `<chapter>.js` (per question: what it asks, cues, every option's rationale, mechanism, rule), `cards.js` (myth and recall repair cards), `drugs-1.js`/`drugs-2.js` (mechanism steps and checks per drug), `drug-whys.js` (why each side effect happens), `drug-more.js` (teaching, emergency actions, comparisons).
- `tools/` — scripts that split the Info page into map topics and list the paragraphs that have short versions.
- `support.js` — the Claude Design page runtime every `.dc.html` page loads.
- `_ds/nocturne-…/styles.css` — the shared theme (colors at the top; glass layer and tab bar at the bottom).
- `nav.js` — the floating tab bar on every page. It also checks `version.json` and reloads once when a newer build is published, so phones don't keep showing an old version. **On each release, bump `BUILD` in `nav.js` and the number in `version.json` together** (and the `?v=` on any changed data file).
- `notes/` — audio notes and the instructor's study guide.

## Running it

The pages load data files with relative paths, so open them through a web server rather than double-clicking:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

Or turn on GitHub Pages (Settings → Pages → deploy from branch). The older pages fetch React from unpkg.com, so they need an internet connection.

Progress is stored in the browser's localStorage, so it stays on the device and browser you studied on.
