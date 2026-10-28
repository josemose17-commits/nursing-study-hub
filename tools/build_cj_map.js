// Builds data/e3/cj-map.js (window.CJ_MAP), the Exam 3 map's "Think it through" view, from data/e3/cj/<chapter>.js
// (format: data/e3/cj/README.md).
// Every card's text comes from the notes in data/e3/src, so a fix to the notes reaches this view on the next build.
// Checks that every card, topic, breakdown, drug and step exists, and that no card is used twice in a condition.
// Each condition names the professor's study-guide items it covers (guide: ['56:2'], keys into GUIDE in
// tools/e3-mastery-cfg.js; [] = beyond the guide); the build fails if a guide item has no condition, and writes the
// mapping to audit/cj-coverage.md.
// Run from the repo root after tools/build_e3_notes.js: node tools/build_cj_map.js
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..'), SRC = path.join(ROOT, 'data/e3/src'), OUT = path.join(ROOT, 'data/e3/cj-map.js');

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// Same markup as tools/build_e3_notes.js, so the cards read like the notes.
const md = s => esc(s)
  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
  .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
  .replace(/(^|[^*])\*([^*\s][^*]*?)\*(?!\*)/g, '$1<i>$2</i>');
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40).replace(/-$/, '');

// Loads browser data files (window.X = ...) into one shared window.
const win = {};
function load(rel) { vm.runInNewContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), { window: win }, { filename: rel }); }
['data/e3/info-topics.js', 'data/e3/videos.js', 'data/e3/nodes-gi.js', 'data/e3/nodes-endo.js', 'data/e3/nodes-mech.js',
  'data/e3/drugs-gi.js', 'data/e3/drugs-endo.js', 'data/e3/drugs-final.js'].forEach(load);
const TOPICS = {}; win.INFO_TOPICS.forEach(t => { TOPICS[t.id] = t; });
const NODES = {}; (win.CONCEPT_NODES || []).forEach(n => { NODES[n.id] = n; });
const DRUGS = {}; ((win.DRUG_DATA || {}).drugs || []).forEach(d => { DRUGS[d.id] = d; });

// The notes, item by item: items[topicId] = [{ box, label, text, bullets, why }].
const items = {};
function topic(t) {
  const id = t.ch + '-' + slug(t.title), list = items[id] = [];
  t.boxes.forEach((b, bi) => b.items.forEach(it => list.push({ box: b.title || '', bi, label: it[0], text: it[1], bullets: it[2] || [], why: b.why || '' })));
}
const none = () => {};
fs.readdirSync(SRC).filter(f => /^\d+\.js$/.test(f)).forEach(f => require(path.join(SRC, f))({ chapter: none, topic, adpie: none, extend: none }));

const STEPS = ['rc', 'ac', 'ph', 'gs', 'ta', 'eo'];
const errors = [];

// The study guide: GUIDE in the Exam 3 Mastery config, as { '56:2': 'Hypoglycemia, DKA & HHS', ... }.
const GUIDE = vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'tools/e3-mastery-cfg.js'), 'utf8') + '\n;GUIDE', {});
const GUIDE_NAME = {};
Object.keys(GUIDE).forEach(ch => GUIDE[ch].forEach((g, i) => { GUIDE_NAME[ch + ':' + i] = g[0]; }));
function find(ref, where) {
  const parts = ref.split(' > ').map(s => s.trim());
  const [tid, box, label] = parts.length === 3 ? parts : [parts[0], null, parts[1]];
  if (!items[tid]) { errors.push(where + ': no notes topic "' + tid + '"'); return null; }
  const hits = items[tid].filter(i => i.label === label && (box == null || i.box === box));
  if (hits.length !== 1) { errors.push(where + ': "' + ref + '" matches ' + hits.length + ' items' + (hits.length > 1 ? ' — name its box: "topic > box > label"' : '')); return null; }
  return Object.assign({ topic: tid }, hits[0]);
}

const CJ = path.join(ROOT, 'data/e3/cj');
const conditions = [].concat(...fs.readdirSync(CJ).filter(f => /^\d+\.js$/.test(f)).sort((a, b) => parseInt(a) - parseInt(b)).map(f => require(path.join(CJ, f))));
const ids = {};
conditions.forEach(c => { if (ids[c.id]) errors.push('two conditions have the id ' + c.id); ids[c.id] = 1; });
const out = conditions.map(c => {
  const where = c.id;
  (c.topics || []).forEach(t => { if (!TOPICS[t]) errors.push(where + ': no map topic "' + t + '"'); });
  (c.nodes || []).forEach(n => { if (!NODES[n]) errors.push(where + ': no breakdown "' + n + '"'); });
  (c.drugs || []).forEach(d => { if (!DRUGS[d]) errors.push(where + ': no drug card "' + d + '"'); });
  if (c.report && c.report.length !== 4) errors.push(where + ': report needs 4 parts (S, B, A, R)');
  if (!Array.isArray(c.guide)) errors.push(where + ': needs guide: [study-guide keys] ([] when beyond the guide)');
  (c.guide || []).forEach(g => { if (!GUIDE_NAME[g]) errors.push(where + ': no study-guide item "' + g + '"'); });
  Object.keys(c.steps).forEach(k => { if (STEPS.indexOf(k) < 0) errors.push(where + ': unknown step "' + k + '"'); });
  const used = {}, whySeen = {};
  const steps = STEPS.map(k => {
    const s = c.steps[k];
    if (!s || !s.gist) { errors.push(where + ': step ' + k + ' needs a gist'); return null; }
    (s.terms || []).forEach((x, i) => { ['t', 'see', 'why', 'means'].forEach(f => { if (!x[f]) errors.push(where + ' ' + k + ': term ' + (x.t || i + 1) + ' needs ' + f); }); });
    return {
      k, gist: md(s.gist),
      terms: (s.terms || []).map(x => ({ t: md(x.t), see: md(x.see), why: md(x.why), means: md(x.means) })),
      cards: (s.cards || []).map(card => {
        const o = typeof card === 'string' ? { ref: card } : card, it = find(o.ref, where + ' ' + k);
        if (!it) return null;
        const key = it.topic + '|' + it.box + '|' + it.label;
        if (used[key]) errors.push(where + ': "' + o.ref + '" is used twice'); used[key] = 1;
        // A box's Why shows on the first card from that box only.
        const wk = it.topic + '|' + it.bi, why = it.why && !whySeen[wk] ? md(it.why) : '';
        whySeen[wk] = 1;
        return { t: md(o.as || it.label), tag: o.tag || '', topic: it.topic, text: md(it.text), bullets: it.bullets.map(md), why };
      }).filter(Boolean)
    };
  }).filter(Boolean);
  const videos = (win.VIDEOS || []).filter(v => (v.topics || []).some(t => (c.topics || []).indexOf(t) >= 0)).map(v => ({ id: v.id, title: v.title, see: v.see }));
  return {
    id: c.id, ch: (c.topics[0] || '').split('-')[0], sys: c.sys, name: c.name, patient: c.patient, topics: c.topics || [], report: (c.report || []).map(md),
    guide: (c.guide || []).filter(g => GUIDE_NAME[g]).map(g => ({ key: g, name: GUIDE_NAME[g] })),
    nodes: (c.nodes || []).filter(n => NODES[n]).map(n => ({ id: n, name: NODES[n].name })),
    drugs: (c.drugs || []).filter(d => DRUGS[d]).map(d => ({ id: d, name: DRUGS[d].n })),
    videos, steps
  };
});

// Every study-guide item needs at least one condition.
const guide = Object.keys(GUIDE_NAME).map(key => ({ key, name: GUIDE_NAME[key], conds: out.filter(c => c.guide.some(g => g.key === key)).map(c => c.id) }));
guide.filter(g => !g.conds.length).forEach(g => errors.push('study-guide item ' + g.key + ' (' + g.name + ') has no condition'));

if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
fs.writeFileSync(OUT, '// Generated by tools/build_cj_map.js from data/e3/cj and the notes in data/e3/src. Do not edit by hand.\nwindow.CJ_MAP = ' + JSON.stringify(out) + ';\nwindow.CJ_GUIDE = ' + JSON.stringify(guide) + ';\n');

// The coverage record: which conditions carry each study-guide item, and which go beyond the guide.
const byId = {}; out.forEach(c => { byId[c.id] = c; });
const plainName = c => c.name;
let md2 = '# Think it through — study-guide coverage\n\nGenerated by `tools/build_cj_map.js`; do not edit by hand. The study guide is `GUIDE` in `tools/e3-mastery-cfg.js` (17 items). ' +
  'A condition lists the items it is built around in `guide` (`data/e3/cj/<chapter>.js`); the build fails if an item has none. ' +
  'This maps each item to the conditions that teach it through the six clinical judgment steps. It does not certify that every fact in the chapter is covered — the full notes stay under All topics.\n\n' +
  '| Study-guide item | Conditions |\n|---|---|\n' +
  guide.map(g => '| ' + g.key + ' · ' + g.name + ' | ' + g.conds.map(id => plainName(byId[id])).join('; ') + ' |').join('\n') + '\n\n' +
  '## Beyond the study guide\n\nShown with a “Beyond the study guide” label in the view.\n\n' +
  out.filter(c => !c.guide.length).map(c => '- Chapter ' + c.ch + ': ' + c.name).join('\n') + '\n\n' +
  '## Exam 3 chapter topics with no condition\n\nStill in the notes under All topics; listed so the gap is explicit.\n\n' +
  win.INFO_TOPICS.filter(t => Object.keys(GUIDE).indexOf(t.ch) >= 0 && t.kind === 'topic' && !out.some(c => c.topics.indexOf(t.id) >= 0))
    .map(t => '- Chapter ' + t.ch + ': ' + t.title).join('\n') + '\n';
fs.writeFileSync(path.join(ROOT, 'audit/cj-coverage.md'), md2);
console.log('Wrote ' + path.relative(ROOT, OUT) + ': ' + out.length + ' conditions, ' + out.reduce((a, c) => a + c.steps.reduce((b, s) => b + s.cards.length, 0), 0) + ' cards');
