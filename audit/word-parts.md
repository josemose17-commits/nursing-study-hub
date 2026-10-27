# Word-part and medication-name reference

## Scope and teaching approach

The shared reference retains every entry in `data/words.js` and adds curated terms relevant to the nursing notes. The default view filters to terms appearing in the six Exam 3 chapters or guided lessons. This appearance filter is not an additional exam assignment; the all-vocabulary view includes Exam 2 and Final material too.

Current inventory: 2,001 entries. There are 340 explicitly enumerated medical segmentations and 81 entries with checked drug naming stems. Remaining entries are labeled: 414 abbreviations/short labels, 155 brands, 25 eponyms, 94 whole-term teaching entries, 164 whole medication names without a stem analysis here, and 728 entries with a split not yet verified. Those last entries remain defined/searchable; they must not be advertised as completed morphological analyses or as words with no roots. Some phrase entries expose verified breakdowns of their component words.

Each supplied segmentation reconstructs the spelling exactly, including combining vowels and grammatical endings. There is no general letter-based guesser. Drug stems apply only to enumerated generic names; remaining distinctive letters receive no invented clinical meaning. Name clues do not establish a diagnosis, dose, duration or medication safety. Literal translations are study aids, and the clinical definition takes precedence. The existing glossary definitions are reused, not newly re-certified as current prescribing advice.

## Sources

- [NLM MedlinePlus: word parts](https://medlineplus.gov/appendixa.html) and [Break It Up](https://medlineplus.gov/medwords/breakitup1.html): prefixes, roots, endings and the fact that not every term uses all three.
- [Open RN/WisTech Medical Terminology 2e, components and categories](https://wtcs.pressbooks.pub/medterm/chapter/1-2-components-and-categories-of-medical-terms/), [prefixes](https://wtcs.pressbooks.pub/medterm/chapter/1-3-common-prefixes/), [roots and combining vowels](https://wtcs.pressbooks.pub/medterm/chapter/1-4-common-word-roots-and-combining-vowels/) and [suffixes](https://wtcs.pressbooks.pub/medterm/chapter/1-5-common-suffixes/): educational component conventions, whole terms, abbreviations and eponyms. Clues are concise original teaching labels, not a reproduction of the book’s tables.
- [WHO stem book, 2018](https://cdn.who.int/media/docs/default-source/international-nonproprietary-names-(inn)/stembook-2018.pdf) and [WHO Learning Clinical Pharmacology, 2018](https://cdn.who.int/media/docs/default-source/international-nonproprietary-names-(inn)/learning-pharmacology-2018.pdf): established naming families and exceptions. These references support the older names already in this study hub; they are not represented as the newest nomenclature scheme. The [current WHO stem-book index](https://www.who.int/teams/health-product-and-policy-standards/inn/stembook) is linked for updates. Legacy `-mab` names are explicitly labeled legacy, without assigning a target or use from that stem alone.
- [AMA USAN approved stems](https://www.ama-assn.org/about/united-states-adopted-names-usan/united-states-adopted-names-approved-stems): naming-family explanation and the non-exhaustive nature of stem lists. Its XLSX download could not be retrieved in this environment, so no entries are claimed to have been checked against that file.

## Checks

`node tools/check_word_parts.js` checks retention of the original vocabulary, spelling reconstruction, every part’s role and meaning, drug/brand/abbreviation/eponym distinctions, the nystatin versus `-vastatin` false friend, grouped glossary headings, unknown terms, escaping and cache version consistency. Existing lesson, study-guide, question and clinical-judgment checks also pass.

Browser checks cover search, pagination, name categories, unknown splits, term deep links, lesson Words popups, Map Words disclosures, drug-page loading and narrow-screen bounds at 1365, 390 and 320 px. Verification establishes implementation behavior and selected content distinctions, not independent etymological certification of every entry.

Existing uncommitted edits in the original checkout were left untouched. Work was implemented in an isolated checkout.

Completed browser verification: 47 checks passed across 1365, 390 and 320 px, including correct reference links, no undefined drug-card links, explicit popup close controls, search/type filters and pagination, Map disclosures, lesson popups and drug-page startup. Zero page-script errors; mobile reference and popup screenshots inspected. The existing React-dependent drug page was tested with local copies of its exact React/ReactDOM 18.3.1 bundles because this environment restricts CDN access. This does not verify live CDN delivery.
