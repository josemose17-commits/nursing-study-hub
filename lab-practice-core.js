/* Pure practice state. No instructor/date records are read or written here. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.LabPracticeCore = factory();
})(typeof window === 'object' ? window : this, function () {
  'use strict';
  function create(data, random) {
    const rng = random || Math.random;
    const stations = Object.fromEntries(data.stations.map(s => [s.id, s]));
    const questions = Object.fromEntries(data.stations.flatMap(s => s.questions).map(q => [q.id, q]));
    const steps = Object.fromEntries(data.stations.flatMap(s => s.steps).map(s => [s.id, s]));
    const unique = a => Array.from(new Set(a));
    const ids = q => q.kind === 'order' ? q.items.map((_, i) => String(i)) : q.options.map(o => o.id);
    function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
    const same = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
    const permutation = (a, b) => Array.isArray(a) && same(a.slice().sort(), b.slice().sort());
    const selections = a => unique((Array.isArray(a) ? a : []).filter(id => stations[id]));
    function fresh() { return { version: 1, selected: Object.keys(stations), misses: {}, rehearsal: {}, history: [], session: null }; }
    function correct(q, item) { return q.kind === 'order' ? same(item.order, ids(q)) : same(item.answer.slice().sort(), q.options.filter(o => o.correct).map(o => o.id).sort()); }
    function restore(raw) {
      const s = fresh();
      if (!raw || typeof raw !== 'object' || raw.version !== 1) return s;
      if (Array.isArray(raw.selected)) s.selected = selections(raw.selected);
      Object.entries(raw.misses || {}).forEach(([id, m]) => {
        if (questions[id] && m && Number.isFinite(m.count) && m.count > 0) s.misses[id] = { count: Math.min(100000, Math.floor(m.count)), last: typeof m.last === 'string' ? m.last : '', state: m.state === 'resolved' ? 'resolved' : 'open' };
      });
      Object.entries(raw.rehearsal || {}).forEach(([id, r]) => {
        if (steps[id] && r && typeof r === 'object') s.rehearsal[id] = { note: typeof r.note === 'string' ? r.note.slice(0, 1600) : '', rating: ['independent', 'prompted', 'missed'].includes(r.rating) ? r.rating : '', at: typeof r.at === 'string' ? r.at : '' };
      });
      s.history = (Array.isArray(raw.history) ? raw.history : []).filter(h => h && Number.isInteger(h.total) && h.total > 0 && Number.isInteger(h.right) && h.right >= 0 && h.right <= h.total).slice(-50).map(h => ({ at: String(h.at || ''), total: h.total, right: h.right, mode: h.mode === 'misses' ? 'misses' : 'mixed', stations: selections(h.stations) }));
      const r = raw.session;
      if (r && Array.isArray(r.items) && r.items.length && r.items.length <= Object.keys(questions).length && unique(r.items.map(i => i && i.qid)).length === r.items.length && r.items.every(i => i && questions[i.qid] && permutation(i.order, ids(questions[i.qid])) && Array.isArray(i.answer) && unique(i.answer).length === i.answer.length && i.answer.every(a => ids(questions[i.qid]).includes(a)) && (questions[i.qid].kind !== 'single' || i.answer.length <= 1)) && Number.isInteger(r.index) && r.index >= 0 && r.index < r.items.length && r.items.every((i, n) => n >= r.index || i.checked === true) && (!r.complete || r.items.every(i => i.checked === true))) {
        s.session = { mode: r.mode === 'misses' ? 'misses' : 'mixed', stations: selections(r.stations), index: r.index, complete: !!r.complete, items: r.items.map(i => ({ qid: i.qid, order: i.order.slice(), answer: i.answer.slice(), checked: !!i.checked, correct: !!i.checked && correct(questions[i.qid], i) })) };
      }
      return s;
    }
    function bank(s, selected, includeResolved) {
      const set = selections(selected);
      return Object.keys(s.misses).filter(id => questions[id] && set.includes(questions[id].station) && (includeResolved || s.misses[id].state === 'open'));
    }
    function start(s, selected, mode, count, includeResolved) {
      const set = selections(selected); s.selected = set;
      let pool = mode === 'misses' ? bank(s, set, includeResolved) : Object.keys(questions).filter(id => set.includes(questions[id].station));
      if (!pool.length) return false;
      // Round-robin after shuffling each station: short rounds do not omit a selected station.
      const buckets = shuffle(set).map(st => shuffle(pool.filter(id => questions[id].station === st)));
      pool = []; while (buckets.some(b => b.length)) buckets.forEach(b => { if (b.length) pool.push(b.shift()); });
      const take = count === 'all' ? pool.length : Math.min(pool.length, Math.max(set.length, Number(count) || 14));
      s.session = { mode: mode === 'misses' ? 'misses' : 'mixed', stations: set.slice(), index: 0, complete: false, items: pool.slice(0, take).map(id => ({ qid: id, order: shuffle(ids(questions[id])), answer: [], checked: false, correct: false })) };
      return true;
    }
    function current(s) { return s.session && !s.session.complete ? s.session.items[s.session.index] : null; }
    function pick(s, id) {
      const i = current(s); if (!i || i.checked) return false;
      const q = questions[i.qid]; if (q.kind === 'order' || !ids(q).includes(id)) return false;
      if (q.kind === 'single') i.answer = [id];
      else i.answer = i.answer.includes(id) ? i.answer.filter(x => x !== id) : i.answer.concat(id);
      return true;
    }
    function move(s, at, delta) {
      const i = current(s); if (!i || i.checked || questions[i.qid].kind !== 'order' || !Number.isInteger(at) || ![-1, 1].includes(delta) || at < 0 || at >= i.order.length || at + delta < 0 || at + delta >= i.order.length) return false;
      [i.order[at], i.order[at + delta]] = [i.order[at + delta], i.order[at]]; return true;
    }
    function submit(s, at) {
      const i = current(s); if (!i || i.checked) return false;
      const q = questions[i.qid]; if (q.kind !== 'order' && !i.answer.length) return false;
      i.checked = true; i.correct = correct(q, i);
      const old = s.misses[q.id];
      if (!i.correct) s.misses[q.id] = { count: (old ? old.count : 0) + 1, last: at || new Date().toISOString(), state: 'open' };
      else if (old) old.state = 'resolved';
      return true;
    }
    function score(s) { const a = s.session ? s.session.items : []; return { right: a.filter(i => i.checked && i.correct).length, checked: a.filter(i => i.checked).length, total: a.length }; }
    function next(s, at) {
      const i = current(s); if (!i || !i.checked) return false;
      if (s.session.index < s.session.items.length - 1) s.session.index++;
      else { const sc = score(s); s.session.complete = true; s.history.push({ at: at || new Date().toISOString(), total: sc.total, right: sc.right, mode: s.session.mode, stations: s.session.stations.slice() }); s.history = s.history.slice(-50); }
      return true;
    }
    function rehearse(s, id, note, rating, at) {
      if (!steps[id]) return false;
      s.rehearsal[id] = { note: String(note || '').slice(0, 1600), rating: ['independent', 'prompted', 'missed'].includes(rating) ? rating : '', at: at || new Date().toISOString() }; return true;
    }
    return { fresh, restore, start, bank, current, pick, move, submit, next, score, rehearse, questions, stations };
  }
  return { create };
});
