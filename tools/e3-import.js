// Chapters the final shares with Exam 2 (22–25) reuse Exam 2's notes (data/info-topics.js, extracted from the Exam 2
// Info page) and their Quick versions (data/notes-short), without Exam 2's study-guide marks: its exam banner, the
// "On exam" badges and gold blocks, and the highlighted tested terms (they mark Exam 2's guide, not the final's).
// Used by tools/build_e3_notes.js, which adds them to the map's notes, and tools/notes-stats.js.
//   const { IMPORT, exam2Topics } = require('./e3-import.js');
//   exam2Topics(ROOT) → { topics: [{ id, ch, chTitle, title, kind, tag, html }], short: { id: Quick bullets } }
const fs = require('fs'), path = require('path'), vm = require('vm');

const IMPORT = ['22', '23', '24', '25'];

const strip = h => h
  .replace(/<div style="display:flex;flex-wrap:wrap;gap:var\(--space-2\);align-items:center;border:1px solid var\(--color-accent\);background:var\(--color-accent-900\)[^"]*">(?:(?!<div)[\s\S])*?<\/div>/g, '')
  .replace(/<span style="display:inline-block;[^"]*">On exam<\/span>/g, '')
  .replace(/;?background:var\(--color-accent-900\);box-shadow:0 0 0 1px var\(--color-accent-600\);border-radius:var\(--radius-sm\)(;padding:var\(--space-2\) var\(--space-3\))?/g, '')
  .replace(/<span style="background:var\(--color-accent-800\);color:var\(--color-accent-100\);box-shadow:inset 0 -2px 0 var\(--color-accent\);padding:0 2px;border-radius:2px">((?:(?!<\/?span)[\s\S])*?)<\/span>/g, '$1')
  .replace(/ style=""/g, '');

function exam2Topics(ROOT) {
  const w = {}, ctx = vm.createContext({ window: w });
  const run = f => vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });
  run('data/info-topics.js');
  fs.readdirSync(path.join(ROOT, 'data/notes-short')).filter(f => /\.js$/.test(f)).forEach(f => run('data/notes-short/' + f));
  const topics = (w.INFO_TOPICS || []).filter(t => IMPORT.includes(t.ch))
    .map(t => ({ id: t.id, ch: t.ch, chTitle: t.chTitle, title: t.title, kind: t.kind, tag: t.tag, html: strip(t.html) }));
  const short = {};
  topics.forEach(t => { if ((w.NOTES_SHORT || {})[t.id]) short[t.id] = w.NOTES_SHORT[t.id]; });
  return { topics, short };
}

module.exports = { IMPORT, exam2Topics };
