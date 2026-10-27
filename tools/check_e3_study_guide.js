// Integration checks for source-linked study content and stable saved practice IDs.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { execFileSync } = require('node:child_process');
const path = require('node:path');
const root = path.join(__dirname, '..');
const guide = require('../data/e3/study-guide.js');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const cfg = vm.runInNewContext(read('tools/e3-mastery-cfg.js') + '\n({CHS, BP, GUIDE})');
const context = vm.createContext({window: {}});
vm.runInContext(read('data/e3/info-topics.js'), context);
const topics = context.window.INFO_TOPICS;
let outcomes = 0;
assert.deepEqual(Object.keys(guide.chapters).sort(), Array.from(cfg.CHS).sort());
for (const [ch, g] of Object.entries(guide.chapters)) {
  assert.equal(g.questions, cfg.BP[ch]);
  const overview = topics.find(t => t.id === ch + '-overview');
  assert(overview.html.includes('Exam 3 study questions'));
  for (const [index, outcome] of g.outcomes.entries()) {
    assert.equal(outcome.number, index + 1);
    outcomes++;
    for (const id of outcome.topics) assert(topics.some(t => t.id === id && t.ch === ch), 'Broken outcome link: ' + id);
  }
}
assert.equal(outcomes, 48);
const expected = Object.entries(cfg.GUIDE).flatMap(([ch, items]) => items.map((_, i) => ch + ':' + i)).sort();
assert.deepEqual(guide.checks.map(c => c.guide).sort(), expected);
for (const check of guide.checks) {
  const t = topics.find(t => t.id === check.topic);
  assert(t && t.ch === check.guide.split(':')[0]);
  assert(t.html.includes('<details>') && t.html.includes(check.question.replace(/&/g, '&amp;')));
}

// Saved ids are chapter|list|index. Existing positions must survive content corrections.
function questionSnapshot(previous) {
  const ctx = vm.createContext({window: {}});
  for (const ch of cfg.CHS) {
    const file = 'data/e3/q/' + ch + '.js';
    vm.runInContext(previous ? execFileSync('git', ['show', '43aecc691e3da290398dd3ef9e26d30f694fff82:' + file], {cwd:root, encoding:'utf8'}) : read(file), ctx);
  }
  const extra = 'data/e3/q/more.js';
  vm.runInContext(previous ? execFileSync('git', ['show', '43aecc691e3da290398dd3ef9e26d30f694fff82:' + extra], {cwd:root, encoding:'utf8'}) : read(extra), ctx);
  return ctx.window;
}
const before = questionSnapshot(true), after = questionSnapshot(false);
let stable = 0;
for (const ch of cfg.CHS) {
  for (const [oldList, newList] of [[before.NGN_EXTRA[ch],after.NGN_EXTRA[ch]], [before.RECALL_EXTRA[ch].nclex,after.RECALL_EXTRA[ch].nclex]]) {
    oldList.forEach((item, i) => { assert.equal(newList[i].t, item.t, ch + ': moved question ' + i); stable++; });
  }
}
vm.runInContext(read('data/e3/cases.js'), context);
const dka = context.window.CASES.find(c => c.id === 'dka');
assert(dka.steps[3].o[1].includes('above 3.5'));
assert(dka.steps[5].rows.find(r => r.t.includes('Potassium')).r.includes('delay/pause insulin'));
assert(dka.steps[5].rows[0].t.includes('Plasma ketones'));
assert(!dka.steps.some(s => /gap.*decides when DKA is over|K⁺ ≥ 3.3/.test(s.rule)));
console.log(`48 outcome questions; ${expected.length} study-guide topics; ${stable} existing graded-question positions preserved; DKA case safety checks passed.`);
