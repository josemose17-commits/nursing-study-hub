// Builds Exam 3's study route for "Exam 3 Route.html": every task from the first day to the exam, in order, with its
// minutes, what it waits for and why it is there. The page spreads the tasks over the days left, from the hours you
// give it, and re-spreads what is left whenever you check something off or change the hours.
// Writes data/e3/route.js. Run after the notes, questions or drug cards change: node tools/build_e3_route.js
// Minutes come from the notes' word counts and the question counts at the paces below: rough guides, not promises.
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..'), DATA = path.join(ROOT, 'data/e3');
const { chapters, CHS } = require('./notes-stats.js')(DATA);

// ---------- Exam config ----------
const EXAM = '2026-10-28', START = '2026-10-20', HOURS = 5, EXAM_DAY_MIN = 30;
// Minutes: full notes at a study pace (time for a Why it works card or a picture now and then), Quick at reading pace,
// a question with its rationales, redoing the misses afterwards (per question asked), and a drug card.
const PACE = { read: 90, quick: 120, question: 2.5, redo: 0.5, drug: 1.2 };
// Study order: each block's assessment chapter first (the others build on it); the biggest chapters early, so they get the most review.
const ORDER = [
  ['53', 'First: the normal endocrine physiology and tests that chapters 55 and 56 build on.'],
  ['55', 'Builds straight on chapter 53’s thyroid and parathyroid physiology.'],
  ['56', 'The biggest chapter with the biggest share of the exam, so it comes early and gets the most review.'],
  ['45', 'Normal GI function, the abdominal exam and the tests that chapters 46–49 rely on.'],
  ['46', 'The top of the tract: the mouth and the esophagus.'],
  ['47', 'The stomach: gastritis, ulcers, bleeding and gastric surgery.'],
  ['48', 'The bowel without inflammation: obstruction, colorectal cancer and ostomies, hernias, trauma.'],
  ['49', 'The inflamed bowel and the acute abdomen: appendicitis, peritonitis, IBD, diverticulitis.']
];
const FIRST_TEST = { '56': 40 };   // questions in a chapter's first test (otherwise 20, the shortest test)
const RETESTS = [['endo', 'Endocrine', ['53', '55', '56'], 40], ['upper', 'Upper GI', ['45', '46', '47'], 40], ['lower', 'Lower GI', ['48', '49'], 40]];
const GAP = 2;                     // days between a chapter's first test and its retest
// prio: what goes first when the days are too short. 1 reading, chapter tests and exam morning (never left out);
// 2 practice exam 1 and its repair; 3 retests and drug cards; 4 Quick reviews; 5 practice exam 2 and its repair.
// grp: tasks that are left out together (a practice exam's two halves and its repair).
// after: the tasks it waits for, each 'id' (plus the task's gap in days) or ['id', days].
// How the page reads what you have done, and when it changes the plan:
//   readFull, readQuick — a topic counts as read once the map has had it open this share of its Full or Quick minutes;
//   drugs — share of a chapter's cards opened; testMin, testShare — a finished test counts as a chapter's test with at least
//   this many of its questions making up at least this share of the test; retestShare — a group's share of a retest;
//   weak, strong — chapter scores below weak add a fix task, at or above strong shorten the retest to 20 questions;
//   near — within this many days of the exam a retest needs only a 1-day gap; final — within this many days, anything
//   unread is planned in Quick; reread — a fix re-reads its topics at this share of their Full minutes, plus redo minutes.
const ADAPT = { readFull: 0.5, readQuick: 0.6, drugs: 0.75, testMin: 10, testShare: 0.3, retestShare: 0.6, weak: 70, strong: 85, near: 4, final: 2, reread: 0.6, fixRedo: 10, repairRedo: 30 };
const WHY = {
  read: 'Read each topic in full. When a line doesn’t make sense, open its Why it works card.',
  drugs: 'This chapter’s drugs as cards: what each one is for, how it works and the nursing points. The test after it asks about them.',
  test: 'Test yourself right after reading. Pulling it back from memory fixes it better than rereading, and it shows what didn’t stick while it’s fresh. The button sets the map focus to this chapter, so the test asks only about it.',
  retest: 'Test it again after a gap of two or more days. Remembering after a gap is what makes it last, and mixing chapters makes you tell look-alikes apart. The button sets the focus to these chapters.',
  exam: 'All eight chapters mixed, in the exam’s chapter mix (provisional until the study guide arrives). The button clears the focus. The report lists your weak areas.',
  repair: 'Fix what the last test found. Your weak areas on the map shows each missed question with its notes and Why it works cards; then Redo my misses on the Mastery page.',
  quick: 'In the last days, the bullet version of every topic. Turn on Quick on the map.',
  morning: 'Nothing new on exam day. Read each chapter’s Act now and Emergency trigger boxes (in its overview) and the numbers strip, then stop.',
  fix: 'Your chapter test showed gaps. Before the retest, re-read the topics you missed most (the Mastery test keeps a score for every topic), then redo the misses on the Mastery page.',
  fix2: 'The retest showed gaps that are still there. Re-read these topics once more before the practice exams.'
};
// ---------- End of the exam config ----------

// Each chapter's share of a 60-question exam, from the Mastery test's blueprint (provisional until the study guide).
const BP = vm.runInNewContext(fs.readFileSync(path.join(__dirname, 'e3-mastery-cfg.js'), 'utf8') + '\nBP;', {});
const win = {}, ctx = vm.createContext({ window: win });
['drugs-gi.js', 'drugs-endo.js'].forEach(f => vm.runInContext(fs.readFileSync(path.join(DATA, f), 'utf8'), ctx));
fs.readdirSync(path.join(DATA, 'q')).filter(f => /\.js$/.test(f)).forEach(f => vm.runInContext(fs.readFileSync(path.join(DATA, 'q', f), 'utf8'), ctx));
const drugsOf = ch => (win.DRUG_DATA.drugs || []).filter(d => (String(d.ch).match(/\d\d/g) || [])[0] === ch);
const qOf = ch => { const R = (win.RECALL_EXTRA || {})[ch] || {}; return ((win.NGN_EXTRA || {})[ch] || []).length + (R.nclex || []).length + (R.rq || []).length + (R.mc || []).length; };
const up = x => Math.max(1, Math.ceil(x));
const test = n => up(n * (PACE.question + PACE.redo));
if (ORDER.length !== CHS.length || !CHS.every(ch => ORDER.some(o => o[0] === ch))) throw new Error('ORDER must list every chapter once: ' + CHS.join(', '));

const tasks = [];
const add = t => { tasks.push(Object.assign({ after: [], gap: 0, prio: 1 }, t)); return t.id; };
let prev = null;
ORDER.forEach(([ch]) => {
  const C = chapters[ch];
  C.topics.forEach(t => { prev = add({ id: 'read:' + t.id, kind: 'read', ch, topic: t.id, label: t.title, min: up(t.full / PACE.read), quick: up(t.quick / PACE.quick), after: prev ? [prev] : [], href: 'Exam 3 Map.html#' + t.id }); });
  const lastRead = prev, d = drugsOf(ch);
  const drugs = d.length ? add({ id: 'drugs:' + ch, kind: 'drugs', ch, drugs: d.map(x => x.id), label: d.length + ' drug card' + (d.length > 1 ? 's' : ''), min: up(d.length * PACE.drug), after: [lastRead], href: 'Exam 3 Drug Cards.dc.html#drug-' + d[0].id, prio: 3 }) : null;
  const n = FIRST_TEST[ch] || 20;
  add({ id: 'test:' + ch, kind: 'test', ch, label: 'Chapter test, ' + n + ' questions', n, min: test(n), after: drugs ? [lastRead, drugs] : [lastRead], focus: C.topics.map(t => t.id), href: 'Exam 3 Mastery Loop.dc.html' });
});
RETESTS.forEach(([key, name, chs, n]) => add({ id: 'retest:' + key, kind: 'retest', ch: chs.join(' '), label: name + ' retest, ' + n + ' questions on chapters ' + chs.join(', '), n, min: test(n),
  after: chs.map(c => 'test:' + c), gap: GAP, focus: chs.flatMap(c => chapters[c].topics.map(t => t.id)), href: 'Exam 3 Mastery Loop.dc.html', prio: 3 }));
const allTests = ORDER.map(o => 'test:' + o[0]), retests = RETESTS.map(r => 'retest:' + r[0]);
const quickMin = chs => up(chs.reduce((n, c) => n + chapters[c].topics.reduce((m, t) => m + t.quick, 0), 0) / PACE.quick);
const minus = (iso, days) => { const d = new Date(iso + 'T12:00:00'); d.setDate(d.getDate() - days); return d.toISOString().slice(0, 10); };
// A practice exam is 60 questions in two sittings (the Mastery test keeps your place), then a repair; the three go together.
const MASTERY = 'Exam 3 Mastery Loop.dc.html';
const practice = (k, after, gap, prio) => {
  const grp = 'exam' + k, half = up(30 * PACE.question);
  const a = add({ id: 'exam:' + k + 'a', kind: 'exam', part: 1, ch: '', label: 'Practice exam ' + k + ', first half: an Everything test of 60 questions, stopping after 30', n: 60, min: half, after, gap, focus: 'clear', href: MASTERY, prio, grp });
  const b = add({ id: 'exam:' + k + 'b', kind: 'exam', part: 2, ch: '', label: 'Practice exam ' + k + ', second half: finish the test', n: 60, min: half, after: [a], href: MASTERY, prio, grp });
  add({ id: 'repair:' + k, kind: 'repair', ch: '', label: 'Repair after practice exam ' + k + ': your weak areas, then redo the misses', min: 75, after: [b], href: 'Exam 3 Map.html#weak', prio, grp });
};
practice(1, allTests, 0, 2);
add({ id: 'quick:endo', kind: 'quick', ch: '53 55 56', label: 'Quick review: chapters 53, 55 and 56', min: quickMin(['53', '55', '56']), after: ['exam:1b'], from: minus(EXAM, 2), href: 'Exam 3 Map.html#53-overview', prio: 4 });
add({ id: 'quick:gi', kind: 'quick', ch: '45 46 47 48 49', label: 'Quick review: chapters 45 to 49', min: quickMin(['45', '46', '47', '48', '49']), after: ['exam:1b'], from: minus(EXAM, 2), href: 'Exam 3 Map.html#45-overview', prio: 4 });
practice(2, [['exam:1b', 1]].concat(retests), 0, 5);   // a day after practice exam 1, once the retests are done
add({ id: 'morning', kind: 'morning', ch: '', label: 'Exam morning: Act now, Emergency trigger and the numbers', min: EXAM_DAY_MIN, from: EXAM, href: 'Exam 3 Map.html#53-overview' });

const route = {
  exam: EXAM, start: START, hours: HOURS, examDayMin: EXAM_DAY_MIN, pace: PACE, gap: GAP, adapt: ADAPT, why: WHY,
  retests: RETESTS.map(([key, name, chs, n]) => ({ id: 'retest:' + key, name, chs, n })),
  chapters: ORDER.map(([ch, why]) => ({ ch, title: chapters[ch].title, why, share: BP[ch] || 0, topics: chapters[ch].topics.length, questions: qOf(ch), drugs: drugsOf(ch).length })),
  tasks
};
const out = path.join(DATA, 'route.js');
fs.writeFileSync(out, '// Generated by tools/build_e3_route.js from the notes, questions and drug cards. Do not edit by hand.\nwindow.E3_ROUTE = ' + JSON.stringify(route) + ';\n');
const sum = f => tasks.filter(f).reduce((n, t) => n + t.min, 0);
console.log('Wrote data/e3/route.js: ' + tasks.length + ' tasks, ' + Math.round(sum(() => true) / 6) / 10 + ' h in all (reading ' + Math.round(sum(t => t.kind === 'read') / 6) / 10 +
  ' h, or ' + Math.round(tasks.filter(t => t.kind === 'read').reduce((n, t) => n + t.quick, 0) / 6) / 10 + ' h in Quick; tests ' + Math.round(sum(t => /test|exam/.test(t.kind)) / 6) / 10 + ' h).');
