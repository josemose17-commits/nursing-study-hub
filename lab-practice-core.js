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
    const detailed = Object.fromEntries(data.stations.flatMap(s => s.steps.map(step => [step.id, Object.assign({ station: s.id }, step)])));
    const steps = Object.assign({}, Object.fromEntries((data.legacySteps || []).map(s => [s.id, s])), detailed);
    const ratings = ['independent', 'prompted', 'missed', 'sequence', 'not-applicable'];
    const validRating = (id, r) => ratings.includes(r) && (r !== 'not-applicable' || detailed[id] && detailed[id].conditional);
    const unique = a => Array.from(new Set(a));
    const ids = q => q.kind === 'order' ? q.items.map((_, i) => String(i)) : q.options.map(o => o.id);
    function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
    const same = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
    const permutation = (a, b) => Array.isArray(a) && same(a.slice().sort(), b.slice().sort());
    const selections = a => unique((Array.isArray(a) ? a : []).filter(id => stations[id]));
    function fresh() { return { version: 1, selected: Object.keys(stations), misses: {}, rehearsal: {}, history: [], session: null, stepMisses: {}, flow: null, run: null, runHistory: [] }; }
    function correct(q, item) { return q.kind === 'order' ? same(item.order, ids(q)) : same(item.answer.slice().sort(), q.options.filter(o => o.correct).map(o => o.id).sort()); }
    function restore(raw) {
      const s = fresh();
      if (!raw || typeof raw !== 'object' || raw.version !== 1) return s;
      if (Array.isArray(raw.selected)) s.selected = selections(raw.selected);
      Object.entries(raw.misses || {}).forEach(([id, m]) => {
        if (questions[id] && m && Number.isFinite(m.count) && m.count > 0) s.misses[id] = { count: Math.min(100000, Math.floor(m.count)), last: typeof m.last === 'string' ? m.last : '', state: m.state === 'resolved' ? 'resolved' : 'open' };
      });
      Object.entries(raw.rehearsal || {}).forEach(([id, r]) => {
        if (steps[id] && r && typeof r === 'object') s.rehearsal[id] = { note: typeof r.note === 'string' ? r.note.slice(0, 1600) : '', rating: (detailed[id] ? validRating(id, r.rating) : ratings.includes(r.rating)) ? r.rating : '', at: typeof r.at === 'string' ? r.at : '' };
      });
      s.history = (Array.isArray(raw.history) ? raw.history : []).filter(h => h && Number.isInteger(h.total) && h.total > 0 && Number.isInteger(h.right) && h.right >= 0 && h.right <= h.total).slice(-50).map(h => ({ at: String(h.at || ''), total: h.total, right: h.right, mode: h.mode === 'misses' ? 'misses' : 'mixed', stations: selections(h.stations) }));
      const r = raw.session;
      if (r && Array.isArray(r.items) && r.items.length && r.items.length <= Object.keys(questions).length && unique(r.items.map(i => i && i.qid)).length === r.items.length && r.items.every(i => i && questions[i.qid] && permutation(i.order, ids(questions[i.qid])) && Array.isArray(i.answer) && unique(i.answer).length === i.answer.length && i.answer.every(a => ids(questions[i.qid]).includes(a)) && (questions[i.qid].kind !== 'single' || i.answer.length <= 1)) && Number.isInteger(r.index) && r.index >= 0 && r.index < r.items.length && r.items.every((i, n) => n >= r.index || i.checked === true) && (!r.complete || r.items.every(i => i.checked === true))) {
        s.session = { mode: r.mode === 'misses' ? 'misses' : 'mixed', stations: selections(r.stations), index: r.index, complete: !!r.complete, items: r.items.map(i => ({ qid: i.qid, order: i.order.slice(), answer: i.answer.slice(), checked: !!i.checked, correct: !!i.checked && correct(questions[i.qid], i) })) };
      }
      Object.entries(raw.stepMisses || {}).forEach(([id, m]) => {
        if (detailed[id] && m && Number.isFinite(m.count) && m.count > 0) s.stepMisses[id] = { count: Math.min(100000, Math.floor(m.count)), state: m.state === 'resolved' ? 'resolved' : 'open', last: typeof m.last === 'string' ? m.last : '' };
      });
      const f = raw.flow;
      if (f && Array.isArray(f.items) && f.items.length && f.items.length <= Object.keys(detailed).length && unique(f.items.map(i => i && i.sid)).length === f.items.length && f.items.every(i => i && detailed[i.sid] && (i.rating === '' || validRating(i.sid, i.rating)) && (!i.rating || i.revealed)) && Number.isInteger(f.index) && f.index >= 0 && f.index < f.items.length && f.items.every((i,n) => n >= f.index || i.rating) && (!f.complete || f.items.every(i => i.rating))) {
        s.flow = { mode: f.mode === 'weak' ? 'weak' : 'flow', station: stations[f.station] ? f.station : detailed[f.items[0].sid].station, index: f.index, complete: !!f.complete, items: f.items.map(i => ({ sid: i.sid, note: typeof i.note === 'string' ? i.note.slice(0,1600) : '', hint: !!i.hint, revealed: !!i.revealed, rating: i.hint && i.rating === 'independent' ? 'prompted' : i.rating, missRecorded: !!i.missRecorded })) };
      }
      const run = raw.run;
      if (run && stations[run.station] && ['perform','review','complete'].includes(run.stage)) {
        const rr = {}; Object.entries(run.ratings || {}).forEach(([id,r]) => { if (detailed[id] && detailed[id].station === run.station && validRating(id,r)) rr[id] = r; });
        if (run.stage !== 'complete' || stations[run.station].steps.every(step => rr[step.id])) s.run = { station: run.station, stage: run.stage, note: typeof run.note === 'string' ? run.note.slice(0,12000) : '', ratings: rr, recorded: unique((Array.isArray(run.recorded) ? run.recorded : []).filter(id => detailed[id] && detailed[id].station === run.station)), at: typeof run.at === 'string' ? run.at : '' };
      }
      s.runHistory = (Array.isArray(raw.runHistory) ? raw.runHistory : []).filter(h => h && stations[h.station] && Number.isInteger(h.total) && h.total > 0 && h.counts && ['independent','prompted','missed','sequence','not-applicable'].every(k => Number.isInteger(h.counts[k]) && h.counts[k] >= 0) && Object.values(h.counts).reduce((n,x) => n + x,0) === h.total).slice(-30).map(h => ({ station: h.station, total: h.total, counts: Object.fromEntries(ratings.map(r => [r,h.counts[r]])), at: String(h.at || '') }));
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
      s.rehearsal[id] = { note: String(note || '').slice(0, 1600), rating: ratings.includes(rating) ? rating : '', at: at || new Date().toISOString() }; return true;
    }
    function stepBank(s, selected, includeResolved) {
      const set = selections(selected);
      return Object.keys(s.stepMisses).filter(id => detailed[id] && set.includes(detailed[id].station) && (includeResolved || s.stepMisses[id].state === 'open'));
    }
    function recordStep(s,id,note,rating,increment,at) {
      if (!detailed[id] || !validRating(id,rating)) return false;
      const old = s.rehearsal[id] || {};
      s.rehearsal[id] = { note: note === undefined ? old.note || '' : String(note).slice(0,1600), rating, at: at || new Date().toISOString() };
      const m = s.stepMisses[id];
      if (['prompted','missed','sequence'].includes(rating)) s.stepMisses[id] = { count: (m ? m.count : 0) + (increment || !m ? 1 : 0), last: at || new Date().toISOString(), state: 'open' };
      else if (rating === 'independent' && m) m.state = 'resolved';
      // Not applicable is a scenario label. It neither proves recall nor clears an older miss.
      return true;
    }
    function startFlow(s, selected, weak, includeResolved) {
      const set = selections(selected); if (!set.length) return false;
      const bank = weak ? new Set(stepBank(s,set,includeResolved)) : null;
      const ids = data.stations.filter(st => set.includes(st.id)).flatMap(st => st.steps.map(x => x.id)).filter(id => !bank || bank.has(id));
      if (!ids.length) return false;
      s.flow = { mode: weak ? 'weak' : 'flow', station: detailed[ids[0]].station, index: 0, complete: false, items: ids.map(sid => ({ sid, note: '', hint: false, revealed: false, rating: '', missRecorded: false })) }; return true;
    }
    function flowCurrent(s) { return s.flow && !s.flow.complete ? s.flow.items[s.flow.index] : null; }
    function flowNote(s,note) { const i = flowCurrent(s); if (!i) return false; i.note = String(note || '').slice(0,1600); return true; }
    function flowReveal(s,hint) { const i = flowCurrent(s); if (!i) return false; if (hint) i.hint = true; else i.revealed = true; return true; }
    function flowRate(s,rating,at) {
      const i = flowCurrent(s); if (!i || !i.revealed || !validRating(i.sid,rating)) return false;
      if (i.hint && rating === 'independent') rating = 'prompted';
      recordStep(s,i.sid,i.note,rating,!i.missRecorded,at);
      if (['prompted','missed','sequence'].includes(rating)) i.missRecorded = true;
      i.rating = rating; return true;
    }
    function flowNext(s) { const i = flowCurrent(s); if (!i || !i.rating) return false; if (s.flow.index < s.flow.items.length - 1) s.flow.index++; else s.flow.complete = true; return true; }
    function flowPrevious(s) { if (!s.flow || s.flow.complete || s.flow.index <= 0) return false; s.flow.index--; return true; }
    function startRun(s, station, at) {
      if (!stations[station]) return false;
      s.run = { station, stage: 'perform', note: '', ratings: {}, recorded: [], at: at || new Date().toISOString() }; return true;
    }
    function runNote(s,note) { if (!s.run || s.run.stage !== 'perform') return false; s.run.note = String(note || '').slice(0,12000); return true; }
    function runReview(s) { if (!s.run || s.run.stage !== 'perform') return false; s.run.stage = 'review'; return true; }
    function runRate(s,id,rating,at) {
      const r = s.run; if (!r || r.stage !== 'review' || !detailed[id] || detailed[id].station !== r.station || !validRating(id,rating)) return false;
      recordStep(s,id,undefined,rating,!r.recorded.includes(id),at);
      if (['prompted','missed','sequence'].includes(rating) && !r.recorded.includes(id)) r.recorded.push(id);
      r.ratings[id] = rating; return true;
    }
    function ratingCounts(values) { return Object.fromEntries(ratings.map(r => [r,values.filter(v => v === r).length])); }
    function runFinish(s,at) {
      const r = s.run; if (!r || r.stage !== 'review' || !stations[r.station].steps.every(step => validRating(step.id,r.ratings[step.id]))) return false;
      r.stage = 'complete'; s.runHistory.push({ station: r.station, at: at || new Date().toISOString(), total: stations[r.station].steps.length, counts: ratingCounts(Object.values(r.ratings)) }); s.runHistory = s.runHistory.slice(-30); return true;
    }
    return { fresh, restore, start, bank, current, pick, move, submit, next, score, rehearse, questions, stations, steps: detailed, stepBank, startFlow, flowCurrent, flowNote, flowReveal, flowRate, flowNext, flowPrevious, startRun, runNote, runReview, runRate, runFinish, ratingCounts };
  }
  return { create };
});
