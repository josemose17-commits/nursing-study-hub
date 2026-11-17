#!/usr/bin/env node
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(ROOT, file), 'utf8');
const pageHtml = read('Exam 4 Class Review.html');
const guide = require('../data/mh/study-guide');
assert.deepEqual(guide.chapters, ['3', '6', '9', '34']);
assert(guide.source.includes('Approximately 40 questions'));
assert(pageHtml.includes('data/mh/study-guide.js'));
assert(pageHtml.includes("prefix: 'e4-'"));
assert(pageHtml.includes("defaultCount: 12"));

function storage(seed = {}) {
  const map = new Map(Object.entries(seed));
  return {
    getItem: key => map.has(key) ? map.get(key) : null,
    setItem: (key, value) => map.set(key, value),
    map
  };
}
function element() {
  return {
    innerHTML: '',
    handlers: {},
    addEventListener(name, fn) { this.handlers[name] = fn; },
    querySelectorAll() { return []; },
    querySelector() { return { disabled:false, remove() {}, classList:{ add() {}, toggle() {} } }; },
    insertAdjacentHTML(_, html) { this.innerHTML = html + this.innerHTML; },
    scrollIntoView() {}
  };
}
function page(store, hash = '#test') {
  const root = element(), tabs = element(), events = {}, win = { addEventListener:(k, fn) => { events[k] = fn; } };
  const location = { hash };
  const context = vm.createContext({
    window:win, localStorage:store, location, Date, Math,
    document:{ getElementById:id => id === 'cj' ? root : id === 'mh-tabs' ? tabs : null }
  });
  const tags = /<script\b([^>]*)>([\s\S]*?)<\/script>/g;
  let match;
  while ((match = tags.exec(pageHtml))) {
    const src = /\bsrc="([^"]+)"/.exec(match[1]);
    if (src) {
      const file = src[1].split('?')[0];
      // Keep a regression check for the shared pre-diagnostic MH engine.
      // The opted-in combined page is exercised by check_e4_diagnostic.
      if(file==='mh.js')win.MH_CFG.diagnostic=false;
      vm.runInContext(read(file), context, { filename:file });
      if (file === 'mh.js') break;
    } else if (match[2].trim()) {
      vm.runInContext(match[2], context);
    }
  }
  return { root, events, location, win };
}
function click(app, attr, value = '') {
  const key = attr.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  app.root.handlers.click({ target:{ closest:selector => selector === '[' + attr + ']' ? { dataset:{ [key]:value } } : null } });
}
function wrongChoice(app, store, at) {
  const ids = JSON.parse(store.getItem('e4-test-session')).questions;
  const q = app.win.MH_Q.find(item => item.id === ids[at]);
  const answers = Array.isArray(q.a) ? q.a : [q.a];
  return q.opts.findIndex((_, i) => !answers.includes(i));
}

const store = storage({ 'e4-test':JSON.stringify({ 'q-intro-1':[0] }) });
let app = page(store);
const assigned = guide.questionIds;
const examQuestions = app.win.MH_Q.filter(q => q.wk === 10);
const examIds = examQuestions.map(q => q.id);
assigned.forEach(id => assert(examIds.includes(id), 'Assigned Exam 4 question missing from the test set: ' + id));
const unexplained = examQuestions.filter(q => !Array.isArray(q.optionWhy) || q.optionWhy.length !== q.opts.length || !q.optionWhy.every(text => typeof text === 'string' && text.trim()));
assert.equal(unexplained.length, 0, 'Every assigned-scope question needs an explanation for each option: ' + unexplained.map(q => q.id).join(', '));
for (const id of ['q-intro-1', 'q-life-1', 'q-theory-1', 'q-e4-dsm-purpose']) {
  assert(!examIds.includes(id), 'Question outside the instructor outline entered the test set: ' + id);
}
assert(app.root.innerHTML.includes('Missed last time · 0'), 'Out-of-scope history must not enter Exam 4 review');
assert(app.root.innerHTML.includes('assigned-scope question set'));
click(app, 'data-count', '10');
click(app, 'data-start');
app.location.hash = '#test';
app.events.hashchange();
assert(app.root.innerHTML.includes('Question 1 of 10'));
const session = JSON.parse(store.getItem('e4-test-session'));
assert.equal(session.questions.length, 10);
const firstWrong = wrongChoice(app, store, 0);
click(app, 'data-q', String(firstWrong));
assert.deepEqual(JSON.parse(store.getItem('e4-test-session')).sel, [firstWrong]);

app = page(store);
assert(app.root.innerHTML.includes('Question 1 of 10'));
assert(app.root.innerHTML.includes('aria-pressed="true"'));
click(app, 'data-check');
assert.equal(JSON.parse(store.getItem('e4-test-session')).answered, true);
app = page(store);
assert(app.root.innerHTML.includes('Each option'));
assert(app.root.innerHTML.includes('data-qnext'));
click(app, 'data-qnext');
assert.equal(JSON.parse(store.getItem('e4-test-session')).i, 1);

while (JSON.parse(store.getItem('e4-test-session')).i < 10) {
  click(app, 'data-q', String(wrongChoice(app, store, JSON.parse(store.getItem('e4-test-session')).i)));
  click(app, 'data-check');
  click(app, 'data-qnext');
}
const runs = JSON.parse(store.getItem('e4-test-runs'));
assert.equal(runs.length, 1);
assert.equal(runs[0].total, 10);
assert(runs[0].misses.length > 0);
click(app, 'data-test-menu');
assert(app.root.innerHTML.includes('Recent saved results'));
click(app, 'data-review-run', runs[0].id);
assert(app.root.innerHTML.includes('Saved test result'));
assert(app.root.innerHTML.includes('Each option'));

const legacy = { 'q-intro-1':[0, 1], 'q-neuro-1':[0] };
const legacyStore = storage({ 'e4-class-test':JSON.stringify(legacy) });
page(legacyStore);
assert.deepEqual(JSON.parse(legacyStore.getItem('e4-test')), legacy);
console.log('✓ Exam 4 scope, scoped missed review, in-progress answer resume, saved score/review UI, and shared legacy history migration');
