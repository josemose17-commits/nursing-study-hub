// Builds the Exam 3 map topics from the note sources in data/e3/src (one file per chapter).
// Writes, in the same shapes the Exam 2 pages use:
//   data/e3/info-topics.js  — every topic with its notes as HTML (window.INFO_TOPICS)
//   data/e3/topic-index.js  — the same topics without the notes, for the Mastery test
//   data/e3/notes-short.js  — the Quick bullets (window.NOTES_SHORT), keyed the way the Map looks them up
// and checks data/e3/basics.js: every "says" must be an exact phrase of its topic's notes.
// Run from the repo root: node tools/build_e3_notes.js
//
// Writing a source file (data/e3/src/<chapter>.js):
//   module.exports = ({ chapter, topic, adpie }) => { chapter({...}); topic({...}); adpie({...}); };
//   chapter() may set steps: [7 labels] for its Connection Map when the chapter isn't about one disease.
//   An item is [label, text, bullets?]. Text is plain: **bold**, *italic*, [link text](page.html);
//   <, > and & are escaped for you. Bullets are the Quick version (same markers) and should keep every fact.
//   Put exam: true on an item (or { exam: true } as its 4th element) to mark it "On exam" in gold.
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..'), SRC = path.join(ROOT, 'data/e3/src'), OUT = path.join(ROOT, 'data/e3');

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const md = s => esc(s)
  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
  .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
  .replace(/(^|[^*])\*([^*\s][^*]*?)\*(?!\*)/g, '$1<i>$2</i>');
const plain = s => String(s).replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*|\*/g, '').replace(/\s+/g, ' ').trim();
const letters = s => String(s).toLowerCase().replace(/[^a-z]/g, '');
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40).replace(/-$/, '');

// The Exam 2 notes' look, copied so both exams read the same.
const H = 'font-family:var(--font-heading);';
const CAP = H + 'font-size:10.5px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;';
const BADGE = '<span style="display:inline-block;' + H + 'font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--color-bg);background:var(--color-accent);padding:1px 6px;border-radius:3px;margin-right:6px;vertical-align:2px">On exam</span>';
const GOLD = 'background:var(--color-accent-900);box-shadow:0 0 0 1px var(--color-accent-600);border-radius:var(--radius-sm);padding:var(--space-2) var(--space-3)';
const CORNERS = '<i class="corner tl"></i><i class="corner tr"></i><i class="corner bl"></i><i class="corner br"></i>';
const whyBox = t => '<div style="border-left:2px solid var(--color-accent-600);padding-left:10px;font-size:14.5px;color:var(--color-neutral-300)"><span style="' + H + 'font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-300)">Why</span><br/>' + md(t) + '</div>';

const topics = [], short = {}, warn = [];
const studyGuide = require('../data/e3/study-guide.js');
let cur = null; // { id, seen, short }
function begin(id) { cur = { id, seen: {}, short: {} }; }
// Register a block in the order the Map's note splitter will find it, so its Quick bullets get the same key.
function block(label, bullets, recognized) {
  if (!recognized) { if (bullets && bullets.length) warn.push(cur.id + ': "' + label + '" is too short for Quick mode; its bullets are unused'); return; }
  const k = letters(label); cur.seen[k] = (cur.seen[k] || 0) + 1;
  if (bullets && bullets.length) cur.short[label + (cur.seen[k] > 1 ? '#' + cur.seen[k] : '')] = bullets;
}
function end() { if (Object.keys(cur.short).length) short[cur.id] = cur.short; cur = null; }
const isExam = it => !!(it[3] && it[3].exam);

// "<b>Label</b> — text" rows (topic boxes, the physiology grid).
function row(it, cell) {
  const [label, text, bullets] = it, ex = isExam(it);
  block(label, bullets, true);
  const st = cell ? 'min-width:0' + (ex ? ';' + GOLD : '') : (ex ? GOLD : '');
  return '<div' + (st ? ' style="' + st + '"' : '') + '>' + (ex ? BADGE : '') + '<b>' + md(label) + '</b> — ' + md(text) + '</div>';
}
// Labeled cells (the nursing-process grid): a small heading over running text.
function cell(it) {
  const [label, text, bullets] = it, ex = isExam(it);
  block(label, bullets, plain(text).length >= 80 && plain(label).length < 60);
  return '<div style="min-width:0' + (ex ? ';' + GOLD : '') + '">' + (ex ? BADGE : '') + '<div style="' + H + 'font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-neutral-400);margin-bottom:6px">' + md(label) + '</div>' + md(text) + '</div>';
}
function why(t, bullets) { if (!t) return ''; block('Why', bullets, true); return whyBox(t); }

const chTitles = {};
function chapter(c) {
  const ch = c.ch; chTitles[ch] = c.title;
  begin(ch + '-overview');
  let h = '<div style="border-top:2px solid var(--color-text);padding-top:var(--space-4)">\n<div style="display:flex;flex-wrap:wrap;gap:var(--space-4);align-items:baseline">\n' +
    '<div style="' + H + 'font-size:12px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--color-neutral-400)">' + ch + ' · Chapter ' + ch + '</div>\n' +
    '<div style="' + H + 'font-size:12px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-300)">' + esc(c.concepts) + '</div>\n</div>\n' +
    '<h2 style="' + H + 'font-weight:600;font-size:clamp(26px,3.4vw,40px);line-height:1.04;margin:var(--space-2) 0 0">' + esc(c.title) + '</h2>\n</div>';
  if (c.exam) h += '<div style="display:flex;flex-wrap:wrap;gap:var(--space-2);align-items:center;border:1px solid var(--color-accent);background:var(--color-accent-900);padding:var(--space-3) var(--space-4);border-radius:var(--radius-md)"><span class="tag tag-accent" style="font-weight:600">' + esc(c.exam[0]) + '</span>' +
    c.exam.slice(1).map(x => '<span style="font-size:14px;color:var(--color-accent-100)">' + esc(x) + '</span>').join('<span style="color:var(--color-accent-400)">·</span>') + '</div>';
  if (plain(c.intro).length < 250) warn.push(ch + ' intro is under 250 characters, so it has no Quick version');
  block('Intro.', c.introShort, plain(c.intro).length >= 250);
  h += '<p style="margin:0;max-width:82ch;font-size:17px;color:var(--color-neutral-300)"><b style="color:var(--color-text)">Intro.</b> ' + md(c.intro) + '</p>';
  // A chapter that isn't about one disease (professional practice, disasters) can name its own seven steps.
  const STEPS = c.steps || ['Normal physiology', 'What fails', 'What the nurse sees', 'What proves it', 'What targets it', 'If it worsens', 'Emergency trigger'];
  if (STEPS.length !== 7 || c.map.length !== 7) throw new Error(ch + ': the Connection Map needs exactly 7 steps');
  h += '<div id="ch' + ch + '-map" style="border:1px solid var(--color-accent-700);padding:clamp(16px,3vw,26px);display:flex;flex-direction:column;gap:var(--space-4)">\n' +
    '<div style="display:flex;flex-wrap:wrap;gap:var(--space-3);align-items:baseline">\n<span style="' + H + 'font-size:11.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-300)">Connection Map</span>\n' +
    '<span style="' + H + 'font-size:20px;font-weight:600">How this chapter fits together</span>\n</div>\n' +
    '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,190px),1fr));gap:var(--space-2)">\n' +
    c.map.map((t, i) => { const red = i === 6; return '<div style="display:grid;grid-template-columns:minmax(0,1fr);gap:4px;min-width:0;border:1px solid var(--color-divider);' + (red ? 'border-color:#c97f78;' : '') + 'padding:var(--space-3);background:var(--color-bg)"><span style="' + CAP + 'color:' + (red ? '#c97f78' : 'var(--color-accent-300)') + '">' + (i + 1) + ' · ' + STEPS[i] + '</span><span style="font-size:14.5px;color:var(--color-neutral-200)">' + md(t) + '</span></div>'; }).join('\n') + '\n</div>\n';
  if (c.chain) h += '<div style="display:flex;flex-direction:column;gap:var(--space-2);border-left:2px solid var(--color-accent-600);padding-left:12px">\n<span style="' + CAP + 'color:var(--color-accent-300)">Cause and effect</span>\n' +
    '<div style="font-size:15px;color:var(--color-neutral-200);line-height:1.7">' + c.chain.map(md).join('<span style="color:var(--color-accent-400);margin:0 6px">→</span>') + '</div>\n</div>\n';
  if (c.pairs) h += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:var(--space-4)">\n' +
    c.pairs.map(p => '<div style="min-width:0"><div style="' + CAP + 'color:var(--color-neutral-400);margin-bottom:4px">' + md(p[0]) + '</div><div style="font-size:14.5px;color:var(--color-neutral-300)">' + md(p[1]) + '</div></div>').join('\n') + '\n</div>\n';
  if (c.monitor || c.act) h += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:var(--space-2)">\n' +
    '<div style="border:1px solid var(--color-divider);padding:var(--space-3)"><div style="' + CAP + 'color:var(--color-accent-2-400);margin-bottom:4px">Monitor</div><div style="font-size:14.5px;color:var(--color-neutral-200)">' + md(c.monitor || '') + '</div></div>\n' +
    '<div style="border:1px solid #c97f78;padding:var(--space-3)"><div style="' + CAP + 'color:#c97f78;margin-bottom:4px">Act now</div><div style="font-size:14.5px;color:var(--color-neutral-200)">' + md(c.act || '') + '</div></div>\n</div>\n';
  h += '</div>';
  (c.physio || []).forEach(p => {
    h += '<div class="blueprint" style="border:1px solid var(--color-divider);padding:clamp(16px,3vw,26px);display:flex;flex-direction:column;gap:var(--space-4)">\n' + CORNERS + '\n' +
      '<div style="' + H + 'font-size:11.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--color-neutral-400)">' + esc(p.title || 'Down to the physiology') + '</div>\n' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:var(--space-4);font-size:15px;color:var(--color-neutral-300)">\n' +
      p.items.map(it => row(it, true)).join('\n') + '\n</div>\n' + why(p.why, p.whyShort) + '\n</div>';
  });
  topics.push({ id: ch + '-overview', ch, chTitle: c.title, title: 'Overview & how it fits together', kind: 'overview', tag: c.tag || '', exam: c.exam ? c.exam.join(' ') : '', html: h });
  end();
}

const boxesHtml = (boxes, title) => boxes.map(b => '<div class="blueprint" style="border:1px solid var(--color-divider);padding:var(--space-4);min-width:0;display:flex;flex-direction:column;gap:var(--space-3)">\n' + CORNERS + '\n' +
  '<div style="' + H + 'font-size:11.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--color-neutral-400)">' + esc(b.title || title) + '</div>\n' +
  '<div style="font-size:15.5px;color:var(--color-neutral-300);display:flex;flex-direction:column;gap:7px">\n' + b.items.map(it => row(it, false)).join('\n') + '\n</div>\n' +
  why(b.why, b.whyShort) + '\n</div>').join('');
function topic(t) {
  const id = t.ch + '-' + slug(t.title);
  if (topics.some(x => x.id === id)) throw new Error('duplicate topic id ' + id);
  begin(id);
  const h = boxesHtml(t.boxes, t.title);
  topics.push({ id, ch: t.ch, chTitle: '', title: t.title, kind: 'topic', tag: t.tag || '', exam: '', html: h, after: t.after });
  end();
}
// extend({ id, boxes }): more boxes for a topic imported from Exam 2, shown after its own (see the import below).
const extensions = [];
function extend(x) { extensions.push(x); }

function adpie(a) {
  const id = a.ch + '-adpie';
  begin(id);
  const leadKey = '¶ ' + plain(a.lead).split(' ').slice(0, 7).join(' ');
  if (plain(a.lead).length >= 180 && a.leadShort) { cur.short[leadKey] = a.leadShort; } else if (a.leadShort) warn.push(id + ': lead under 180 characters, so it has no Quick version');
  let h = '<div style="border-top:1px solid var(--color-divider);padding-top:var(--space-6);display:flex;flex-direction:column;gap:var(--space-4)">\n<div>\n' +
    '<div style="' + H + 'font-size:11.5px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--color-accent-300);margin-bottom:6px">The nursing process for this chapter</div>\n' +
    '<p style="margin:0;max-width:86ch;font-size:16px;color:var(--color-neutral-300)">' + md(a.lead) + '</p>\n</div>\n';
  [['A', 'A — Assess'], ['D', 'D — Diagnose & prioritize'], ['P', 'P — Plan'], ['I', 'I — Implement'], ['E', 'E — Evaluate']].forEach(([k, head]) => {
    const s = a[k]; if (!s) return;
    h += '<div style="border:1px solid var(--color-divider);border-left:5px solid var(--color-accent-600);padding:var(--space-4);display:flex;flex-direction:column;gap:var(--space-3)">\n' +
      '<div style="' + H + 'font-size:22px;font-weight:600">' + esc(head) + '</div>\n' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:var(--space-4);font-size:15.5px;color:var(--color-neutral-300)">\n' +
      s.cells.map(cell).join('\n') + '\n</div>\n' + why(s.why, s.whyShort) + '\n</div>\n';
  });
  h += '</div>';
  topics.push({ id, ch: a.ch, chTitle: '', title: 'Nursing process (ADPIE)', kind: 'adpie', tag: 'Foundation', exam: '', html: h });
  end();
}

const files = fs.readdirSync(SRC).filter(f => /^\d+\.js$/.test(f)).sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));
files.forEach(f => require(path.join(SRC, f))({ chapter, topic, adpie, extend }));

// Chapters the final shares with Exam 2 (22–25) reuse Exam 2's notes, read by tools/e3-import.js.
// A src file for one of these chapters adds topic() entries, which go after the imported topics and before the
// nursing process, and extend() entries: boxes added to the end of an imported topic, where the book's detail belongs.
// Their Quick keys are numbered after the topic's own blocks, so a label the topic already uses is refused (except Why).
const { IMPORT, exam2Topics } = require('./e3-import.js');
function extendImported(t, x) {
  const used = [...t.html.matchAll(/<div[^>]*>\s*<b>((?:(?!<\/b>)[\s\S])*)<\/b>\s*—/g)].map(m => letters(m[1].replace(/<[^>]+>/g, '')));
  x.boxes.forEach(b => b.items.forEach(it => { if (used.includes(letters(it[0]))) throw new Error(t.id + ': extend() label "' + it[0] + '" is already used in the topic'); }));
  begin(t.id);
  cur.seen.why = (t.html.match(/>Why<\/span><br\/?>/g) || []).length;
  t.html += boxesHtml(x.boxes, t.title);
  const add = cur.short; cur = null;
  short[t.id] = Object.assign({}, short[t.id] || {}, add);
}
(function importExam2() {
  const E2 = exam2Topics(ROOT);
  extensions.forEach(x => { if (!E2.topics.some(t => t.id === x.id)) warn.push('extend: no imported topic ' + x.id); });
  const added = topics.filter(t => IMPORT.includes(t.ch));
  const rest = topics.filter(t => !IMPORT.includes(t.ch));
  const out = [];
  IMPORT.forEach(ch => {
    const imp = E2.topics.filter(t => t.ch === ch).map(t => {
      if (/Exam 2(?! Drug Cards)/.test(t.html)) warn.push('import: ' + t.id + ' still mentions Exam 2');
      if (E2.short[t.id]) short[t.id] = E2.short[t.id];
      return { id: t.id, ch: t.ch, chTitle: t.chTitle, title: t.title, kind: t.kind, tag: t.kind === 'adpie' || t.tag === 'Foundation' ? 'Foundation' : '', exam: '', html: t.html };
    });
    if (!imp.length) { warn.push('import: Exam 2 has no topics for chapter ' + ch); return; }
    imp.forEach(t => extensions.filter(x => x.id === t.id).forEach(x => extendImported(t, x)));
    chTitles[ch] = chTitles[ch] || imp[0].chTitle;
    // A src topic with after: '<topic id>' goes right after that imported topic (a foundation topic after the overview).
    const mine = added.filter(t => t.ch === ch), list = imp.filter(t => t.kind !== 'adpie');
    mine.filter(t => t.after).forEach(t => { const i = list.findIndex(x => x.id === t.after); if (i < 0) throw new Error(t.id + ': no imported topic ' + t.after); list.splice(i + 1, 0, t); });
    out.push(...list, ...mine.filter(t => !t.after), ...imp.filter(t => t.kind === 'adpie'));
  });
  const all = rest.concat(out).sort((a, b) => Number(a.ch) - Number(b.ch));
  topics.length = 0; topics.push(...all);
})();
// Each chapter's topics in source order, chapters in the exam's order (by number).
topics.forEach(t => { t.chTitle = chTitles[t.ch] || t.chTitle; });

// Why it works: each line it explains must be in that topic's notes, word for word.
const text = {}; topics.forEach(t => { text[t.id] = t.html.replace(/<br\/?>/g, ' ').replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/\s+/g, ' '); });
const basicsFile = path.join(OUT, 'basics.js');
if (fs.existsSync(basicsFile)) {
  global.window = {}; require(basicsFile);
  Object.keys(window.BASICS || {}).forEach(id => {
    if (!text[id]) { warn.push('basics: no topic ' + id); return; }
    window.BASICS[id].forEach(e => { if (text[id].indexOf(e.says) < 0) warn.push('basics: "' + e.says + '" is not in ' + id); });
  });
}

// Append to existing topics so saved topic and question identifiers stay stable.
// Source citations and retrieval prompts remain visible in Quick mode as well.
Object.entries(studyGuide.chapters).forEach(([ch, guide]) => {
  const overview = topics.find(t => t.id === ch + '-overview');
  if (!overview) throw new Error('Study guide: missing overview ' + ch);
  const link = id => {
    const target = topics.find(t => t.id === id);
    if (!target) throw new Error('Study guide: unknown topic ' + id);
    return '<a href="#' + esc(id) + '">' + esc(target.title) + '</a>';
  };
  overview.html += '<section class="exam3-study-guide"><h3>Exam 3 study questions</h3><p><b>' + guide.questions + ' of 60 configured exam questions.</b> ' + esc(guide.scope) + '</p>' +
    '<p>These questions follow the full chapter learning outcomes. For chapters 45, 46 and 53, the professor\'s Exam 3 topic list is narrower; linked background is not an additional tested topic. Answer aloud before opening the related notes.</p><ol>' +
    guide.outcomes.map(o => '<li><p>' + esc(o.question) + '<br><small>Chapter ' + ch + ', Learning Outcome ' + o.number + '</small><br>' + o.topics.map(link).join(' · ') + '</p></li>').join('') +
    '</ol><p><small>' + esc(guide.source) + '</small></p></section>';
});
studyGuide.checks.forEach(c => {
  const target = topics.find(t => t.id === c.topic);
  if (!target) throw new Error('Study guide: unknown retrieval topic ' + c.topic);
  target.html += '<section class="exam3-retrieval"><h3>Check yourself — Exam 3</h3><p>Answer without looking, then compare your reasoning.</p><details><summary>' + esc(c.question) + '</summary><p>' + esc(c.answer) + '</p><p><small>Source: supplied chapter ' + target.ch + ', ' + esc(c.source) + '.</small></p></details><p>Revisit a missed explanation on another day, then apply it to a different patient situation.</p></section>';
});
topics.forEach(t => { delete t.after; });
const head = '// Generated by tools/build_e3_notes.js from data/e3/src. Do not edit by hand.\n';
fs.writeFileSync(path.join(OUT, 'info-topics.js'), head + 'window.INFO_TOPICS = ' + JSON.stringify(topics) + ';\n');
fs.writeFileSync(path.join(OUT, 'topic-index.js'), '// Exam 3 map topics without their notes, for the Mastery test. ' + head.slice(3) +
  'window.INFO_TOPICS = window.INFO_TOPICS || ' + JSON.stringify(topics.map(t => ({ id: t.id, ch: t.ch, title: t.title, kind: t.kind }))) + ';\n');
fs.writeFileSync(path.join(OUT, 'notes-short.js'), head + 'Object.assign(window.NOTES_SHORT = window.NOTES_SHORT || {}, ' + JSON.stringify(short, null, 0).replace(/\],"/g, '],\n"') + ');\n');
const by = {}; topics.forEach(t => { by[t.ch] = (by[t.ch] || 0) + 1; });
console.log(topics.length + ' topics', JSON.stringify(by), Object.keys(short).length + ' with Quick bullets');
warn.forEach(w => console.log('warning: ' + w));
