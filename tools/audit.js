// Content audit for an exam whose notes are written as data (data/<exam>/src), as Exam 3's are.
// It can't read the textbook. For each assigned chapter it lists what the hub has, finds numbered textbook features
// (Box, Table, Fig.) that nothing in the hub cites, counts the practice tied to each map topic, estimates reading time,
// and merges the hand-kept record of what has been checked against the chapter (audit/<exam>-record.js).
// Writes audit/<exam>-coverage.md. Run from the repo root after any content change: node tools/audit.js e3
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..'), EXAM = process.argv[2] || 'e3', DATA = path.join(ROOT, 'data', EXAM);
const REC = require(path.join(ROOT, 'audit', EXAM + '-record.js'));
const OUT = path.join(ROOT, 'audit', EXAM + '-coverage.md');
const AREAS = [['normal', 'Normal function'], ['assessment', 'Assessment'], ['conditions', 'Conditions'], ['diagnostics', 'Diagnostics'],
  ['management', 'Management'], ['complications', 'Complications'], ['features', 'Source features'], ['accuracy', 'Accuracy']];
const WPM = 120; // careful study reading, a rough guide
const THIN = 4;  // a map topic with fewer questions than this is listed as thinly practised

const plain = s => String(s || '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*|\*/g, '').replace(/\s+/g, ' ').trim();
const nWords = s => (plain(s).match(/\S+/g) || []).length;
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40).replace(/-$/, ''); // as tools/build_e3_notes.js

// The notes, read through the same calls the notes build uses. A block counts its Quick bullets in Quick mode
// and its full text otherwise (the Map shows a block without bullets in full either way).
const chapters = {}, topics = [];
function note(id, ch, title) { const t = { id, ch, title, text: [], full: 0, quick: 0 }; topics.push(t); chapters[ch].topics.push(t); return t; }
function block(t, text, bullets) { t.text.push(plain(text)); const w = nWords(text); t.full += w; t.quick += bullets && bullets.length ? nWords(bullets.join(' ')) : w; }
function why(t, text, bullets) { if (text) block(t, text, bullets); }
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
fs.readdirSync(path.join(DATA, 'src')).filter(f => /^\d+\.js$/.test(f)).sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))
  .forEach(f => require(path.join(DATA, 'src', f))(api));
topics.forEach(t => { t.text = t.text.join(' '); });
const CHS = Object.keys(chapters).sort((a, b) => a - b);

// Everything else the pages load, in a sandbox with its own window.
const win = {}, ctx = vm.createContext({ window: win });
const load = f => vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
fs.readdirSync(DATA).filter(f => /^(drugs-|nodes-).*\.js$|^(basics|images|videos|focus-rules|topic-index)\.js$/.test(f)).forEach(f => load(path.join(DATA, f)));
fs.readdirSync(path.join(DATA, 'q')).filter(f => /\.js$/.test(f)).forEach(f => load(path.join(DATA, 'q', f)));
const built = new Set((win.INFO_TOPICS || []).map(t => t.id));
const stale = topics.filter(t => !built.has(t.id)).map(t => t.id);

// Practice items, with the ids the Mastery test uses, matched on the same text the question checker uses.
const qText = b => [b.t, b.q, JSON.stringify(b.o || b.rows || b.parts || [b.cond, b.act, b.mon]), b.rule || '', b.phys || ''].join(' ');
const items = [];
Object.keys(win.NGN_EXTRA || {}).forEach(ch => win.NGN_EXTRA[ch].forEach((x, i) => items.push({ id: ch + '|n|' + i, ch, kind: 'q', text: qText(x) })));
Object.keys(win.RECALL_EXTRA || {}).forEach(ch => {
  const R = win.RECALL_EXTRA[ch];
  (R.nclex || []).forEach((x, i) => items.push({ id: ch + '|c|' + i, ch, kind: 'q', text: qText(x) }));
  (R.rq || []).forEach((x, i) => items.push({ id: ch + '|r|' + i, ch, kind: 'recall', text: x[2] + ' ' + x[3] }));
  (R.mc || []).forEach((x, i) => items.push({ id: ch + '|m|' + i, ch, kind: 'myth', text: x[0] + ' ' + x[1] }));
});
const drugs = ((win.DRUG_DATA || {}).drugs || []).map(d => ({ name: d.n, chs: String(d.ch).match(/\d\d/g) || [], text: JSON.stringify(d) }));
const rules = ((win.FOCUS_CFG || {}).rules || []);
const nodeTopics = win.NODE_TOPICS || {}, nodes = win.CONCEPT_NODES || [];
topics.forEach(t => {
  const r = rules.find(r => r[0] === t.ch && r[1].test(t.title));
  const mine = r ? items.filter(q => q.ch === t.ch && r[2].test(q.text)) : null;
  t.practice = mine && { q: mine.filter(q => q.kind === 'q').length, recall: mine.filter(q => q.kind === 'recall').length, myth: mine.filter(q => q.kind === 'myth').length };
  t.nodes = Object.keys(nodeTopics).filter(k => nodeTopics[k].some(e => e[0] === t.ch && e[1].test(t.title))).length;
  t.basics = ((win.BASICS || {})[t.id] || []).length;
  t.pics = (win.IMAGES || []).filter(x => (x.topics || []).includes(t.id)).length;
  t.videos = (win.VIDEOS || []).filter(x => (x.topics || []).includes(t.id)).length;
});

// Numbered textbook features cited anywhere in the hub's sources ("Box 45.1", "Tables 53.1 and 53.3", "Fig. 49.4").
const cited = {};
(function scan(d) {
  fs.readdirSync(d).forEach(f => {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) return scan(p);
    if (!/\.js$/.test(f) || /^(info-topics|topic-index|notes-short)\.js$/.test(f)) return;
    const s = fs.readFileSync(p, 'utf8'), re = /\b(Box(?:es)?|Tables?|Figs?\.?|Figures?)\s+(\d{2}\.\d{1,2}(?:\s*(?:,|and|–)\s*(?:\d{2}\.)?\d{1,2})*)/g;
    let m; while ((m = re.exec(s))) {
      const kind = /^Box/.test(m[1]) ? 'Box' : /^Tab/.test(m[1]) ? 'Table' : 'Fig.';
      let ch = null, prev = null, range = false;
      m[2].split(/\s*(,|and|–)\s*/).forEach(n => {
        if (n === '–') { range = true; return; } if (n === ',' || n === 'and') { range = false; return; }
        const full = n.match(/^(\d{2})\.(\d{1,2})$/), k = full ? +full[2] : /^\d{1,2}$/.test(n) && ch ? +n : null;
        if (full) ch = full[1]; if (k === null) return;
        const set = ((cited[ch] = cited[ch] || {})[kind] = cited[ch][kind] || new Set());
        if (range && prev !== null) for (let i = prev + 1; i < k; i++) set.add(i);
        set.add(k); prev = k; range = false;
      });
    }
  });
})(DATA);
const gaps = ch => {
  const out = [];
  Object.keys(cited[ch] || {}).filter(k => k !== 'Fig.').forEach(kind => {
    const s = cited[ch][kind]; for (let i = 1; i < Math.max(...s); i++) if (!s.has(i)) out.push(kind + ' ' + ch + '.' + i);
  });
  return out;
};
const citeList = ch => ['Box', 'Table', 'Fig.'].filter(k => cited[ch] && cited[ch][k]).map(k => k + ' ' + [...cited[ch][k]].sort((a, b) => a - b).map(n => ch + '.' + n).join(', ')).join(' · ');

// Where the hub says each claim the record asks to verify.
const where = re => {
  const hit = [];
  const tops = topics.filter(t => re.test(t.text)).map(t => t.ch + ' ' + t.title);
  const qs = items.filter(q => re.test(q.text)).map(q => q.id);
  const ds = drugs.filter(d => re.test(d.text)).map(d => d.name);
  const ns = nodes.filter(n => re.test(JSON.stringify(n))).map(n => n.id);
  if (tops.length) hit.push('notes: ' + tops.join('; '));
  if (qs.length) hit.push('practice items: ' + qs.join(', '));
  if (ds.length) hit.push('drug cards: ' + ds.join(', '));
  if (ns.length) hit.push('breakdowns: ' + ns.join(', '));
  return hit.length ? hit.join(' · ') : 'nowhere (check the pattern)';
};

// The report.
const rec = ch => REC.chapters[ch] || {};
const open = REC.verify.filter(v => (v.status || 'open') === 'open');
const forCh = (list, ch) => list.filter(v => String(v.ch).split(/,\s*/).includes(ch));
function area(ch, key) {
  if (key === 'accuracy') {
    const o = forCh(open, ch).map(v => v.id), c = forCh(REC.corrections, ch).length;
    return { status: rec(ch).checked ? (o.length ? 'partial' : 'covered') : 'verify', hub: o.length ? o.length + ' open' : 'no flags',
      has: 'The notes were written from the chapter, and the practice items from the notes.' + (o.length ? ' To settle: ' + o.join(', ') + '.' : '') + (c ? ' Corrections made: ' + c + '.' : '') };
  }
  const a = rec(ch)[key] || {};
  return { status: a.status || 'verify', hub: a.status === 'n/a' ? '—' : a.hub || '?', has: a.has || '', check: a.check || '' };
}
const L = [];
const mins = w => Math.round(w / WPM);
L.push('# ' + REC.exam + ' content audit', '');
L.push('Generated by `node tools/audit.js ' + EXAM + '` from the hub\'s data and the hand-kept record in `audit/' + EXAM + '-record.js`. Edit the record, not this file.', '');
L.push('**Source:** ' + REC.book + ', chapters ' + CHS.join(', ') + '.  ');
const done = CHS.filter(ch => rec(ch).checked);
L.push('**Compared with the chapters themselves:** ' + (done.length ? done.map(ch => ch + ' (' + rec(ch).checked + ')').join(', ') : 'none yet — every status below is *verify*') + '.', '');
L.push('What this can tell you: what the hub has for each chapter, which numbered boxes and tables it never cites, which claims disagree with each other or with usual practice, and how much practice each map topic has. What it can\'t tell you: whether the hub matches the book, until each chapter is compared with it.', '');
L.push('Status (against the chapter): **covered**, **partial**, **missing**, **verify** (not yet compared), **n/a**. In brackets, a first pass from the hub alone: **full**, **thin** or **none**.', '');
if (stale.length) L.push('> The built notes are out of date (' + stale.join(', ') + '): run `node tools/build_e3_notes.js`.', '');

L.push('## Status by chapter and area', '');
L.push('| Ch | ' + AREAS.map(a => a[1]).join(' | ') + ' |', '|' + ' --- |'.repeat(AREAS.length + 1));
CHS.forEach(ch => L.push('| ' + ch + ' | ' + AREAS.map(([k]) => { const a = area(ch, k); return a.status === 'n/a' ? 'n/a' : a.status + ' (' + a.hub + ')'; }).join(' | ') + ' |'));
L.push('');

L.push('## To settle with the book (' + open.length + ' open)', '');
REC.verify.forEach(v => {
  L.push('- **' + v.id + ' · ch ' + v.ch + '** ' + ((v.status || 'open') === 'open' ? '' : '(' + v.status + ') ') + v.claim + ' ' + v.why + (v.resolution ? ' **Book:** ' + v.resolution : ''));
  if (v.where) L.push('  - In the hub: ' + where(v.where));
});
const allGaps = CHS.flatMap(ch => gaps(ch)).filter(g => !(g in REC.features));
if (allGaps.length) L.push('- **Numbered features nothing in the hub cites:** ' + allGaps.join(', ') + '. Each may be covered without its number, or missing.');
L.push('- **Not tracked at all:** figures, and unnumbered features such as evidence-based practice and quality improvement boxes, clinical judgment and NCLEX challenges, key points and end-of-chapter questions. The hub\'s practice items are its own, written from the notes.', '');

if (REC.corrections.length) {
  L.push('## Corrections made', '');
  REC.corrections.forEach(c => L.push('- **' + c.date + ' · ch ' + c.ch + '** ' + c.what + ' ' + c.fix));
  L.push('');
}

L.push('## Workload', '');
L.push('Reading time at about ' + WPM + ' words a minute (careful study reading) — a rough guide for planning, not a schedule. Quick is the bullet version of the notes.', '');
L.push('| Ch | Topics | Notes (words) | Quick (words) | Minutes (notes · Quick) | Questions | Recall · myth | Drug cards |', '| --- | --- | --- | --- | --- | --- | --- | --- |');
const tot = { topics: 0, full: 0, quick: 0, q: 0, recall: 0, myth: 0 };
CHS.forEach(ch => {
  const T = chapters[ch].topics, mine = items.filter(q => q.ch === ch), full = T.reduce((n, t) => n + t.full, 0), quick = T.reduce((n, t) => n + t.quick, 0);
  const q = mine.filter(x => x.kind === 'q').length, recall = mine.filter(x => x.kind === 'recall').length, myth = mine.filter(x => x.kind === 'myth').length;
  Object.assign(tot, { topics: tot.topics + T.length, full: tot.full + full, quick: tot.quick + quick, q: tot.q + q, recall: tot.recall + recall, myth: tot.myth + myth });
  L.push('| ' + ch + ' | ' + T.length + ' | ' + full.toLocaleString('en-US') + ' | ' + quick.toLocaleString('en-US') + ' | ' + mins(full) + ' · ' + mins(quick) + ' | ' + q + ' | ' + recall + ' · ' + myth + ' | ' + drugs.filter(d => d.chs.includes(ch)).length + ' |');
});
L.push('| **All** | ' + tot.topics + ' | ' + tot.full.toLocaleString('en-US') + ' | ' + tot.quick.toLocaleString('en-US') + ' | ' + mins(tot.full) + ' · ' + mins(tot.quick) + ' | ' + tot.q + ' | ' + tot.recall + ' · ' + tot.myth + ' | ' + drugs.length + ' |', '');
const thin = topics.filter(t => t.practice && t.practice.q < THIN);
L.push('**Map topics with fewer than ' + THIN + ' questions:** ' + (thin.length ? thin.map(t => t.ch + ' ' + t.title + ' (' + t.practice.q + ')').join('; ') : 'none') + '. Drug questions are generated from the cards and aren\'t counted here.', '');

L.push('## Chapter by chapter', '');
CHS.forEach(ch => {
  const C = chapters[ch];
  L.push('### ' + ch + ' · ' + C.title, '');
  L.push('Compared with the chapter: ' + (rec(ch).checked || 'not yet') + '.', '');
  AREAS.forEach(([k, name]) => {
    const a = area(ch, k);
    L.push('- **' + name + '** — ' + (a.status === 'n/a' ? 'n/a' : a.status + ' (hub: ' + a.hub + ')') + '. ' + a.has + (a.check ? ' *Check:* ' + a.check : ''));
  });
  const g = gaps(ch);
  L.push('', 'Cited: ' + (citeList(ch) || 'none') + '.' + (g.length ? ' Never cited: ' + g.map(x => x + (REC.features[x] ? ' (' + REC.features[x] + ')' : '')).join(', ') + '.' : ''), '');
  L.push('| Map topic | Questions | Recall | Myth | Breakdowns | Why it works | Pictures · videos |', '| --- | --- | --- | --- | --- | --- | --- |');
  C.topics.forEach(t => L.push('| ' + t.title + ' | ' + (t.practice ? t.practice.q : '—') + ' | ' + (t.practice ? t.practice.recall : '—') + ' | ' + (t.practice ? t.practice.myth : '—') + ' | ' + t.nodes + ' | ' + t.basics + ' | ' + t.pics + ' · ' + t.videos + ' |'));
  L.push('', 'Overview and nursing-process topics have no keyword rule of their own, so their practice is counted under the other topics.', '');
});

L.push('## Where each part of the hub comes from', '');
L.push('- **From the chapter:** the notes — each block\'s label, text and Quick bullets, with the book\'s box and table numbers. The drug cards\' nursing points follow the chapters\' drug tables and drug alerts; their mechanisms and extra detail come from general pharmacology.');
L.push('- **Explanations written for the hub, not the book\'s text:** the *Why* boxes in the notes, each chapter\'s Connection Map, cause-and-effect chain and comparisons, the organ → molecule breakdowns, and every practice item (questions, recall cards, myth checks). The pages don\'t yet mark these as the hub\'s own.');
L.push('- **From other books, cited on each card:** *Why it works* (OpenStax and Open RN texts, and Porth for disease mechanisms), the Reference Sheet, the glossary\'s plain-language meanings.');
L.push('- **Openly licensed media, credited:** pictures (Wikimedia Commons) and videos (YouTube embeds).', '');

fs.writeFileSync(OUT, L.join('\n'));
console.log('Wrote ' + path.relative(ROOT, OUT) + ': ' + CHS.length + ' chapters, ' + topics.length + ' topics, ' + open.length + ' open checks, ' + allGaps.length + ' uncited numbered features, ' + thin.length + ' thinly practised topics.');
if (stale.length) console.log('warning: notes not rebuilt for ' + stale.join(', '));
REC.verify.filter(v => v.where && where(v.where).startsWith('nowhere')).forEach(v => console.log('warning: ' + v.id + ' matches nothing in the hub'));
