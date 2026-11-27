#!/usr/bin/env node
// Check-off step pictures: generated list is current, every picture exists, is small enough for phones,
// and every checkpoint key it claims to show exists in that station's practice flow.
const assert = require('node:assert/strict'), fs = require('node:fs'), path = require('node:path'), vm = require('node:vm'), cp = require('node:child_process');
const ROOT = path.join(__dirname, '..'), read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
cp.execFileSync(process.execPath, [path.join(__dirname, 'build_checkoff_images.js'), '--check'], { stdio: 'pipe' });
const c = vm.createContext({ window: {} }); c.window.window = c.window;
vm.runInContext('var window=this.window;' + read('data/nrs114-skills.js'), c);
vm.runInContext(read('data/nrs114-checkoff-details.js'), c);
vm.runInContext(read('data/checkoff-images.js'), c);
const stations = c.window.NRS114_SKILLS.stations, pics = c.window.CHECKOFF_IMAGES;
let n = 0, shown = 0;
for (const [station, list] of Object.entries(pics)) {
  const st = stations.find(s => s.id === station); assert(st, 'Unknown station ' + station);
  const keys = new Set(st.steps.map(s => s.key || String(s.id).replace(/^.*:detail-/, ''))), used = new Set();
  assert.deepEqual(list.map(p => p.n), list.map(p => p.n).slice().sort((a, b) => a - b), station + ': pictures in step order');
  for (const p of list) {
    n++;
    const file = path.join(ROOT, p.src); assert(fs.existsSync(file), 'Missing ' + p.src);
    assert(fs.statSync(file).size < 120 * 1024, p.src + ' is too large for phones (keep it under 120 KB)');
    assert(p.title && p.alt && p.alt.length > 20, p.src + ' needs a title and a description');
    for (const k of p.keys) { assert(keys.has(k), p.src + ' claims checkpoint "' + k + '", which ' + station + ' does not have'); assert(!used.has(k), k + ' has two pictures'); used.add(k); shown++; }
  }
}
const page = read('Lab Check-offs.html');
assert(page.includes('data/checkoff-images.js'), 'Lab Check-offs loads the picture list');
assert(page.indexOf('data/checkoff-images.js') < page.indexOf('lab-performance.js'), 'Picture list loads before the practice code');
console.log('✓ Check-off pictures: ' + n + ' pictures illustrating ' + shown + ' practice checkpoints; files present, under 120 KB, keys valid.');
