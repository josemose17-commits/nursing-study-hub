// Chapters the final shares with Exam 2 (22–25) reuse Exam 2's notes (data/info-topics.js, extracted from the Exam 2
// Info page) and their Quick versions (data/notes-short), without Exam 2's study-guide marks: its exam banners (on the
// guide, or not), the "On exam" badges and gold blocks, and the highlighted tested terms (they mark Exam 2's guide, not
// the final's).
// Used by tools/build_e3_notes.js, which adds them to the map's notes, and tools/notes-stats.js.
//   const { IMPORT, exam2Topics } = require('./e3-import.js');
//   exam2Topics(ROOT) → { topics: [{ id, ch, chTitle, title, kind, tag, html }], short: { id: Quick bullets } }
const fs = require('fs'), path = require('path'), vm = require('vm');

const IMPORT = ['22', '23', '24', '25'];

const strip = h => h
  .replace(/<div style="display:flex;flex-wrap:wrap;gap:var\(--space-2\);align-items:center;border:1px solid var\(--color-accent\);background:var\(--color-accent-900\)[^"]*">(?:(?!<div)[\s\S])*?<\/div>/g, '')
  .replace(/<div style="display:flex;gap:var\(--space-2\);align-items:center;border:1px dashed var\(--color-divider\)[^"]*">(?:(?!<div)[\s\S])*?<\/div>/g, '')
  .replace(/<span style="display:inline-block;[^"]*">On exam<\/span>/g, '')
  .replace(/;?background:var\(--color-accent-900\);box-shadow:0 0 0 1px var\(--color-accent-600\);border-radius:var\(--radius-sm\)(;padding:var\(--space-2\) var\(--space-3\))?/g, '')
  .replace(/<span style="background:var\(--color-accent-800\);color:var\(--color-accent-100\);box-shadow:inset 0 -2px 0 var\(--color-accent\);padding:0 2px;border-radius:2px">((?:(?!<\/?span)[\s\S])*?)<\/span>/g, '$1')
  .replace(/ style=""/g, '');

// Where Exam 2's notes disagree with the book, the book's version (audit/e3-record.js, corrections): [topic id, the text
// in Exam 2's notes, its replacement]. A fix whose text is no longer there stops the build, so a stale one is noticed.
const FIXES = [
  ['24-overview', 'chest tube drainage &gt;100 mL/hr', 'chest tube drainage &gt;70 mL/hr'],
  ['24-copd-the-gas-exchange-concept-exemplar', '<b>2 Moderate</b> ≤50 to &lt;80% · <b>3 Severe</b> ≤30 to &lt;50%', '<b>2 Moderate</b> 50 to &lt;80% · <b>3 Severe</b> 30 to &lt;50%']
];
const fix = (id, h) => FIXES.filter(f => f[0] === id).reduce((s, [, from, to]) => {
  if (!s.includes(from)) throw new Error('e3-import: fix for ' + id + ' no longer finds "' + from + '"');
  return s.replace(from, to);
}, h);

function exam2Topics(ROOT) {
  const w = {}, ctx = vm.createContext({ window: w });
  const run = f => vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });
  run('data/info-topics.js');
  fs.readdirSync(path.join(ROOT, 'data/notes-short')).filter(f => /\.js$/.test(f)).forEach(f => run('data/notes-short/' + f));
  const topics = (w.INFO_TOPICS || []).filter(t => IMPORT.includes(t.ch))
    .map(t => ({ id: t.id, ch: t.ch, chTitle: t.chTitle, title: t.title, kind: t.kind, tag: t.tag, html: fix(t.id, strip(t.html)) }));
  const short = {};
  topics.forEach(t => {
    const S = (w.NOTES_SHORT || {})[t.id]; if (!S) return;
    short[t.id] = Object.fromEntries(Object.entries(S).map(([k, v]) => [rekey(t.html, k), v]));
  });
  return { topics, short };
}

// The Map keys a block's Quick version by its bold label, or a paragraph (¶) by its opening words. A badged block was a
// paragraph whose opening words began "On exam"; without the badge it may open with its bold label instead, so it is
// keyed the way the Map will now find it (tools/dump_note_blocks.py and noteBlocks in map.js have the rules).
const letters = s => String(s).toLowerCase().replace(/[^a-z]/g, '');
const text = h => h.replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
function rekey(html, key) {
  const m = key.match(/^¶ On exam (.*?)(#\d+)?$/); if (!m) return key;
  const want = letters(m[1]), seen = {};
  for (const [, , inner] of html.matchAll(/<(div|p)\b[^>]*>((?:(?!<\/?(?:div|p)\b)[\s\S])*?)<\/\1>/g)) {
    const b = inner.match(/^\s*<b\b[^>]*>((?:(?!<\/b>)[\s\S])*)<\/b>([\s\S]*)$/), all = text(inner);
    const label = b && (/^\s*[—–]/.test(text(b[2])) || all.length >= 250) ? text(b[1]) : null;
    if (label) seen[letters(label)] = (seen[letters(label)] || 0) + 1;
    if (!letters(all).startsWith(want)) continue;
    return label ? label + (seen[letters(label)] > 1 ? '#' + seen[letters(label)] : '') : '¶ ' + m[1] + (m[2] || '');
  }
  return '¶ ' + m[1] + (m[2] || '');
}

module.exports = { IMPORT, exam2Topics };
