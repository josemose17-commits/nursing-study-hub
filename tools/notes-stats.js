// The notes of an exam whose notes are written as data (data/<exam>/src), read through the same calls the notes build
// uses: each topic's plain text and its word counts. A block counts its Quick bullets in Quick mode and its full text
// otherwise (the Map shows a block without bullets in full either way). Used by tools/audit.js and tools/build_e3_route.js.
//   const { chapters, topics, CHS } = require('./notes-stats.js')(path.join(ROOT, 'data', 'e3'));
const fs = require('fs'), path = require('path');

const plain = s => String(s || '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*|\*/g, '').replace(/\s+/g, ' ').trim();
const nWords = s => (plain(s).match(/\S+/g) || []).length;
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40).replace(/-$/, ''); // as tools/build_e3_notes.js

module.exports = function (dataDir) {
  const chapters = {}, topics = [];
  const note = (id, ch, title) => { const t = { id, ch, title, text: [], full: 0, quick: 0 }; topics.push(t); chapters[ch].topics.push(t); return t; };
  const block = (t, text, bullets) => { t.text.push(plain(text)); const w = nWords(text); t.full += w; t.quick += bullets && bullets.length ? nWords(bullets.join(' ')) : w; };
  const why = (t, text, bullets) => { if (text) block(t, text, bullets); };
  const api = {
    chapter(c) {
      chapters[c.ch] = { title: c.title, topics: [] };
      const t = note(c.ch + '-overview', c.ch, 'Overview & how it fits together');
      block(t, c.intro, c.introShort);
      [...(c.map || []), (c.chain || []).join(' → '), ...(c.pairs || []).map(p => p.join(': ')), c.monitor, c.act].forEach(x => x && block(t, x));
      (c.physio || []).forEach(p => { p.items.forEach(it => block(t, it[0] + ' — ' + it[1], it[2])); why(t, p.why, p.whyShort); });
    },
    topic(x) {
      const t = note(x.ch + '-' + slug(x.title), x.ch, x.title);
      x.boxes.forEach(b => { b.items.forEach(it => block(t, it[0] + ' — ' + it[1], it[2])); why(t, b.why, b.whyShort); });
    },
    adpie(a) {
      const t = note(a.ch + '-adpie', a.ch, 'Nursing process (ADPIE)');
      block(t, a.lead, a.leadShort);
      ['A', 'D', 'P', 'I', 'E'].forEach(k => { const s = a[k]; if (!s) return; s.cells.forEach(c => block(t, c[0] + ' — ' + c[1], c[2])); why(t, s.why, s.whyShort); });
    }
  };
  fs.readdirSync(path.join(dataDir, 'src')).filter(f => /^\d+\.js$/.test(f)).sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))
    .forEach(f => require(path.join(dataDir, 'src', f))(api));
  topics.forEach(t => { t.text = t.text.join(' '); });
  return { chapters, topics, CHS: Object.keys(chapters).sort((a, b) => a - b) };
};
module.exports.plain = plain;
module.exports.nWords = nWords;
