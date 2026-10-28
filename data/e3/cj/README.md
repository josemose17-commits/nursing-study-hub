# Think it through — condition sources

The Exam 3 map's **Think it through** view lays each condition out in the order of clinical judgment (NCSBN's six steps, as in `ncjmm.js`). Each tap goes one level deeper: condition → step → finding or cue card → the detail, the why, the drug, the video and the organ → molecule breakdown.

There is one file per chapter (`<chapter>.js`), each exporting an array of conditions. `node tools/build_cj_map.js` builds them, in chapter order, into `data/e3/cj-map.js`. The home page groups conditions by `sys` in that order. Run the notes build (`tools/build_e3_notes.js`) first when the notes change.

## A condition

- `id`, `sys` (the map's system name), `name`
- `topics`: its Map topic ids, for "All the notes" and its videos
- `nodes`: organ → molecule breakdown ids, including the mechanisms (`insulin`, `fluids`, `k-acidbase`…)
- `drugs`: drug-card ids
- `patient`: one line that sets the scene
- `report`: an example SBAR report to the provider, `[S, B, A, R]`, so the condition is said the way a nurse says it
- `steps`: `{ rc, ac, ph, gs, ta, eo }`, each `{ gist, terms?, cards }`
  - `gist`: this condition's answer to the step's question, in clinical language (plain text, `**bold**`)
  - `terms`: findings explained one at a time, `{ t, see, why, means }`:
    - `t`: the clinical term
    - `see`: what it looks like at the bedside
    - `why`: the mechanism, or why the body does it
    - `means`: what it tells the nurse and what to do
  - `cards`: `'topicId > label'`, or `'topicId > box title > label'` when a label repeats in a topic. Optionally `{ ref, as }` renames a card and `{ ref, tag }` flags it (for example `'If it worsens'`).

A card's text, Quick bullets and its box's Why come from the notes at build time, so those facts live in one place: `data/e3/src`. Gists, terms and reports are written for this view, so keep them consistent with the notes and the breakdowns.
