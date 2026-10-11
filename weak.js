// The weak topics from the last Mastery test only — never earlier tests, the old pre-test or overall mastery.
// Shared by the Map's "weak areas" page and the Practice page. Ranked by how much was lost on each topic.
(function () {
  window.E2Weak = {
    plan: function (has) {
      var S = null; try { S = JSON.parse(localStorage.getItem('e2-mastery-v3') || 'null'); } catch (e) {}
      if (!S || !S.report) return null;
      var R = S.report, stat = {};
      (R.recs || []).forEach(function (r) { (r.topics || []).forEach(function (t) {
        var x = stat[t] || (stat[t] = { n: 0, miss: 0, loss: 0, recs: [] }); x.n++;
        if (r.e < 1) { x.miss++; x.loss += 1 - r.e; x.recs.push(r); }
      }); });
      var rank = Object.keys(stat).filter(function (t) { return stat[t].miss && (!has || has(t)); })
        .sort(function (a, b) { return stat[b].loss - stat[a].loss || stat[b].miss - stat[a].miss; });
      return { R: R, stat: stat, rank: rank };
    }
  };
})();
