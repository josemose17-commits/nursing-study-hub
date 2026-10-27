# Cumulative missed-question practice

The shared Mastery engine now keeps a cumulative, per-question miss bank in the existing saved progress for each exam. Exam 2, Exam 3 and Final keep their own banks. No storage key, question ID, score history, or report format changes.

- Wrong answers, partial credit and correct guesses enter the bank immediately, including answers in an unfinished test.
- A new test/report, drill, or case study does not replace earlier misses.
- Redo offers up to 10 untried misses at a time, worst score first, then shaky misses. A confident correct answer fixes the entry; a later miss or guess reopens it. Fixed entries remain available through replay all.
- Redo follow-ups update the original miss. Questions reserved for later in that round cannot also be selected as follow-ups.
- Early ending, leaving, reloading, or replacing a round preserves answered results and untried entries. Starting replay all resets only the redo status of the saved misses; score history and mastery are retained.
- The redo card is independent of the latest report and the current Map focus. Notes/practice `#redo` links use the same cumulative bank.
- Completion still updates `practice.at`, preserving the study route's completion detection. The bank travels in the existing exam progress export.

## Existing progress

First load recovers misses from each question's saved last result, the latest detailed report, and retained redo progress, including a redo round already in progress. An older version-2 result can also contribute its checked answers during migration. Migration is idempotent and does not clear existing saved fields.

Earlier versions did not retain every historical answer. A past miss that was overwritten by a later correct result and is absent from the retained report/redo state cannot be reconstructed. The new bank retains future missed question IDs even after they are fixed. Removed question IDs stay stored, but only questions still available in that exam can be practiced.

## Validation

`node tools/check_mastery_misses.js` exercises the actual engine in all three generated pages: recovery beyond the latest report, duplicate IDs, partial/guessed answers, ten-question batching, early ending, browser serialization, follow-up repair, replay, current-focus independence, unavailable IDs and reserved follow-up questions.

Browser checks at desktop and phone widths cover an older 13-question miss set with a perfect latest report, actual answer/check controls, early ending, reload/resume, replay, `#redo`, report replacement, and no-report recovery. Existing question, lesson, source-link and clinical-judgment checks also pass.

## Chapter selection

The redo card offers All chapters or any combination of this exam's chapters. Counts show all available saved misses, including fixed entries. The selection persists with the exam's existing settings, filters the redo queue and its counts, and leaves other chapters' progress untouched. Selecting no chapters or a chapter without saved misses shows an empty state; it cannot silently start a different chapter.

Each round snapshots its chapter selection. Related follow-ups use the full exam bank (independent of Map focus) and remain inside that snapshot. A paused round retains its scope if the home-screen selection changes. Replay all resets only the selected misses. Existing in-progress rounds without a chapter snapshot retain their previous behavior.

Regression checks cover single/multiple chapters, deselection, empty/invalid selections, saved settings, replay isolation, paused-round scope and follow-ups across a different Map focus. Desktop and phone browser checks exercise the chapter buttons, real answer controls, reload persistence and empty states.
