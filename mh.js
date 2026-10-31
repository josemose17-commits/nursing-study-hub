// Exam 4 · Mental health — one page, four views (mh.css; data in data/mh/*.js):
//   Think it through  each disorder in the order of clinical judgment (NCSBN's six steps), every tap one layer deeper
//   Topics            the syllabus topics as notes with a why, flip cards and videos
//   Practice          hands-on drills: therapeutic communication, defense mechanisms, anxiety levels, legal calls…
//   Test              NCLEX-style questions (single answer and select-all) with rationales, scored and remembered
// The address keeps your place (#c-bipolar, #t-legal, #p-comm, #test), so Back and refresh work.
(function () {
  // The page names its exam in window.MH_CFG: progress key prefix, syllabus weeks (with a label each) and the Topics intro.
  var CFG = window.MH_CFG || { prefix: 'e4-', weeks: [[11, 'Week 11 topics'], [12, 'Week 12 disorders']],
    topicsIntro: 'Week 11 is the foundation (how mental health care works, talks and protects people). Week 12 is the mood and anxiety disorders, which have their own walk-throughs under' };
  var CONDS = window.MH_CONDS || [], TOPICS = window.MH_TOPICS || [], DRILLS = window.MH_DRILLS || [], QS = window.MH_Q || [], VIDS = window.MH_VIDEOS || [];
  var root = document.getElementById('cj'), tabs = document.getElementById('mh-tabs');
  if (!root) return;
  var STEPS = {
    rc: ['Recognize cues', 'Assessment', 'What do you notice?'],
    ac: ['Analyze cues', 'Analysis', 'What does it mean?'],
    ph: ['Prioritize hypotheses', 'Analysis', 'What is most urgent?'],
    gs: ['Generate solutions', 'Planning', 'What should happen?'],
    ta: ['Take action', 'Implementation', 'What do you do?'],
    eo: ['Evaluate outcomes', 'Evaluation', 'Did it work?']
  };
  var SK = Object.keys(STEPS);
  var byId = function (list, id) { return list.filter(function (x) { return x.id === id; })[0]; };

  // ---------- helpers ----------
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function md(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/(^|[^*])\*([^*\s][^*]*?)\*/g, '$1<i>$2</i>'); }
  function load(k, d) { try { var v = JSON.parse(localStorage.getItem(CFG.prefix + k)); return v == null ? d : v; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(CFG.prefix + k, JSON.stringify(v)); } catch (e) {} }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function vidsFor(tag) { return VIDS.filter(function (v) { return v.tags.indexOf(tag) >= 0; }); }
  function videosHtml(list, label) {
    if (!list.length) return '';
    return '<div class="cj-watch"><div class="cj-h">' + (label || 'Watch') + '</div><div class="cj-vids">' + list.map(function (v) {
      return '<div class="vid"><div class="vid-frame" data-vid="' + esc(v.id) + '" role="button" tabindex="0" aria-label="Play: ' + esc(v.title) + '">' +
        '<img src="https://i.ytimg.com/vi/' + esc(v.id) + '/hqdefault.jpg" alt="" loading="lazy" decoding="async"><i class="play" aria-hidden="true"></i></div>' +
        '<div class="vid-body"><b>' + esc(v.title) + '</b><span>Watch for: ' + esc(v.see) + '</span>' +
        '<a href="https://www.youtube.com/watch?v=' + encodeURIComponent(v.id) + '" target="_blank" rel="noopener">Open on YouTube ↗</a></div></div>';
    }).join('') + '</div></div>';
  }
  function cardHtml(card) {
    var b = Array.isArray(card.b) ? card.b : card.b ? [card.b] : [];
    return '<div class="cj-card"><button class="cj-card-h" aria-expanded="false">' + (card.tag ? '<span class="cj-tag">' + esc(card.tag) + '</span>' : '') +
      '<span>' + md(card.h) + '</span><i class="cj-chev" aria-hidden="true"></i></button>' +
      '<div class="cj-card-b" hidden>' + (b.length > 1 ? '<ul>' + b.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul>' : b.length ? '<p>' + md(b[0]) + '</p>' : '') +
      (card.why ? '<div class="cj-deeper"><button class="cj-more-btn" data-more>💡 Why</button></div><div class="cj-why" hidden>' + md(card.why) + '</div>' : '') + '</div></div>';
  }
  function termHtml(x) {
    return '<div class="cj-term"><button class="cj-term-h" aria-expanded="false"><span><b>' + md(x.t) + '</b><small>' + md(x.see) + '</small></span><i class="cj-chev" aria-hidden="true"></i></button>' +
      '<dl class="cj-term-b" hidden><dt>Why it happens</dt><dd>' + md(x.why) + '</dd><dt>What it tells you</dt><dd>' + md(x.means) + '</dd></dl></div>';
  }
  function flipsHtml(list) {
    if (!list || !list.length) return '';
    return '<div class="cj-h">Recall · say it, then tap to flip</div><div class="mh-flips">' + list.map(function (f) {
      return '<button class="mh-flip"><small>Question</small><span>' + md(f[0]) + '</span><span class="a">' + md(f[1]) + '</span></button>';
    }).join('') + '</div>';
  }

  // ---------- Think it through ----------
  var seen = load('steps', {}), quiz = load('quiz', false);
  function dots(id) {
    var s = seen[id] || [];
    return '<span class="cj-dots" aria-hidden="true">' + SK.map(function (k, i) { return '<i' + (s.indexOf(k) >= 0 ? ' class="on"' : '') + '>' + (i + 1) + '</i>'; }).join('') + '</span>';
  }
  function quizBtn() { return '<button class="pill cj-quiz" aria-pressed="' + quiz + '">' + (quiz ? '✓ Test me: step answers hidden' : 'Test me: hide each step’s answer') + '</button>'; }
  function thinkHome() {
    var groups = [];
    CONDS.forEach(function (c) { if (groups.indexOf(c.group) < 0) groups.push(c.group); });
    return '<div class="glass cj-intro"><h2>Think like the nurse, one step at a time</h2>' +
      '<p>Pick a disorder. It opens into the six steps of clinical judgment in bedside order: what you notice, what it means, what comes first, what should happen, what you do, and whether it worked. Every finding has its <b>why</b>.</p>' +
      '<details class="cj-steps-how"><summary>The six steps</summary><ol class="cj-legend">' + SK.map(function (k) { return '<li><b>' + STEPS[k][0] + '</b><span>' + STEPS[k][2] + '</span></li>'; }).join('') + '</ol></details>' +
      quizBtn() + '</div>' +
      groups.map(function (g) {
        return '<section class="cj-sys"><h2>' + esc(g) + '</h2><div class="cj-conds">' + CONDS.filter(function (c) { return c.group === g; }).map(function (c) {
          var n = vidsFor(c.id).length;
          return '<button class="glass cj-cond" data-go="c-' + c.id + '"><small class="cj-ch">Week ' + c.week + '</small><b>' + esc(c.name) + '</b><span>' + esc(c.short) + '</span>' + dots(c.id) +
            (n ? '<small>▶ ' + n + ' video' + (n > 1 ? 's' : '') + '</small>' : '') + '</button>';
        }).join('') + '</div></section>';
      }).join('');
  }
  function condHtml(c) {
    var i = CONDS.indexOf(c), prev = CONDS[i - 1], next = CONDS[i + 1];
    var qn = QS.filter(function (q) { return q.link === 'c-' + c.id; }).length;
    return '<div class="cj-top"><button class="pill" data-go="think">← All disorders</button>' + quizBtn() + '</div>' +
      '<div class="glass cj-head"><div class="kicker">' + esc(c.group) + ' · Week ' + c.week + '</div><h2>' + esc(c.name) + '</h2>' +
      '<p class="cj-patient"><span>The client</span>' + esc(c.patient) + '</p></div>' +
      videosHtml(vidsFor(c.id), 'Watch first') +
      '<ol class="cj-ladder">' + SK.filter(function (k) { return c.steps[k]; }).map(function (k, si, arr) {
        var s = c.steps[k], m = STEPS[k], terms = s.terms || [], cards = s.cards || [];
        return '<li class="cj-step" data-step="' + k + '"><button class="cj-step-h" aria-expanded="false"><span class="cj-num">' + (si + 1) + '</span><span class="cj-step-t"><b>' + m[0] + '</b><small>' + m[1] + '</small><span class="cj-q">' + m[2] + '</span></span><i class="cj-chev" aria-hidden="true"></i></button>' +
          '<div class="cj-step-b" hidden><div class="cj-gist' + (quiz ? ' covered' : '') + '"' + (quiz ? ' role="button" tabindex="0"' : '') + '><span class="cj-cover">Say your answer, then tap to check</span><div class="cj-gist-t">' + md(s.gist) + '</div></div>' +
          (terms.length ? '<div class="cj-h">Every finding, explained · tap one</div><div class="cj-terms">' + terms.map(termHtml).join('') + '</div>' : '') +
          (cards.length ? '<div class="cj-h">Go deeper · ' + cards.length + ' card' + (cards.length > 1 ? 's' : '') + '</div>' + cards.map(cardHtml).join('') : '') +
          (si < arr.length - 1 ? '<button class="cj-next" data-open-step="' + arr[si + 1] + '">Next: ' + STEPS[arr[si + 1]][0] + ' ↓</button>' : '') +
          '</div></li>';
      }).join('') + '</ol>' +
      (c.report && c.report.length === 4 ? '<div class="glass cj-report"><div class="cj-h">Say it to the provider · SBAR example</div><p class="cj-report-hint">The same findings in the words you would use on the phone. Numbers are an example.</p><dl>' +
        ['Situation', 'Background', 'Assessment', 'Recommendation'].map(function (h, j) { return '<dt><b>' + h[0] + '</b>' + h.slice(1) + '</dt><dd>' + md(c.report[j]) + '</dd>'; }).join('') + '</dl></div>' : '') +
      '<div class="glass cj-bottom"><div class="cj-h">Practice</div><div class="cj-links">' +
        (qn ? '<button class="pill gold" data-test-link="c-' + c.id + '">Test: ' + qn + ' question' + (qn > 1 ? 's' : '') + ' on this →</button>' : '') +
        '<button class="pill" data-go="practice">Hands-on drills →</button></div></div>' +
      '<div class="cj-pager">' + (prev ? '<button class="pill" data-go="c-' + prev.id + '">← ' + esc(prev.name) + '</button>' : '<span></span>') + (next ? '<button class="pill" data-go="c-' + next.id + '">' + esc(next.name) + ' →</button>' : '') + '</div>';
  }

  // ---------- Topics ----------
  var readT = load('topics', {});
  function topicsHome() {
    return '<div class="glass cj-intro"><h2>The syllabus topics</h2><p>' + CFG.topicsIntro + ' <button class="linkbtn" data-go="think">Think it through</button>.</p></div>' +
      CFG.weeks.map(function (W) { var w = W[0];
        var list = TOPICS.filter(function (t) { return t.week === w; });
        if (!list.length) return '';
        return '<section class="cj-sys"><h2>Week ' + w + '</h2><div class="mh-topics">' + list.map(function (t) {
          return '<button class="glass mh-topic" data-go="t-' + t.id + '"><small class="cj-ch">' + esc(t.ch) + '</small><b>' + esc(t.title) + '</b><span>' + esc(t.short) + '</span>' + (readT[t.id] ? '<small class="mh-done">✓ opened</small>' : '') + '</button>';
        }).join('') + '</div></section>';
      }).join('');
  }
  function topicHtml(t) {
    readT[t.id] = 1; save('topics', readT);
    var i = TOPICS.indexOf(t), prev = TOPICS[i - 1], next = TOPICS[i + 1];
    var qn = QS.filter(function (q) { return q.link === 't-' + t.id; }).length;
    return '<div class="cj-top"><button class="pill" data-go="topics">← All topics</button></div>' +
      '<div class="glass cj-head"><div class="kicker">Week ' + t.week + ' · ' + esc(t.ch) + '</div><h2>' + esc(t.title) + '</h2><p class="mh-lead">' + md(t.lead) + '</p></div>' +
      videosHtml(vidsFor(t.id)) +
      (t.terms && t.terms.length ? '<div class="mh-sec"><div class="cj-h">Key words, explained · tap one</div><div class="cj-terms">' + t.terms.map(termHtml).join('') + '</div></div>' : '') +
      '<div class="mh-sec"><div class="cj-h">Notes · tap a card</div>' + t.cards.map(cardHtml).join('') + '</div>' +
      '<div class="mh-sec">' + flipsHtml(t.recall) + '</div>' +
      '<div class="glass cj-bottom"><div class="cj-h">Practice</div><div class="cj-links">' +
        (qn ? '<button class="pill gold" data-test-link="t-' + t.id + '">Test: ' + qn + ' question' + (qn > 1 ? 's' : '') + ' on this →</button>' : '') +
        DRILLS.filter(function (d) { return d.topic === t.id; }).map(function (d) { return '<button class="pill" data-go="p-' + d.id + '">Drill: ' + esc(d.title) + ' →</button>'; }).join('') +
      '</div></div>' +
      '<div class="cj-pager">' + (prev ? '<button class="pill" data-go="t-' + prev.id + '">← ' + esc(prev.title) + '</button>' : '<span></span>') + (next ? '<button class="pill" data-go="t-' + next.id + '">' + esc(next.title) + ' →</button>' : '') + '</div>';
  }

  // ---------- Practice drills ----------
  var best = load('drills', {}), run = null;
  function drillsHome() {
    return '<div class="glass cj-intro"><h2>Hands-on drills</h2><p>Short rounds you do with your hands, not by rereading: pick the reply, match the quote, sort the level. Every answer, right or wrong, tells you why.</p></div>' +
      '<div class="mh-drills">' + DRILLS.map(function (d) {
        var b = best[d.id];
        return '<button class="glass mh-drill-card" data-go="p-' + d.id + '"><small class="cj-ch">' + esc(d.kind) + ' · ' + d.items.length + ' items</small><b>' + esc(d.title) + '</b><span>' + esc(d.intro) + '</span>' +
          (b ? '<small>Best: ' + b.score + ' / ' + b.of + '</small>' : '') + '</button>';
      }).join('') + '</div>';
  }
  function startDrill(d) {
    run = { d: d, items: shuffle(d.items), i: 0, score: 0, misses: [], answered: false };
  }
  function drillHtml() {
    var d = run.d, n = run.items.length;
    if (run.i >= n) {
      var b = best[d.id];
      if (!b || run.score > b.score) { best[d.id] = { score: run.score, of: n }; save('drills', best); }
      return '<div class="cj-top"><button class="pill" data-go="practice">← All drills</button></div>' +
        '<div class="glass mh-play"><div class="kicker">' + esc(d.title) + '</div><p class="mh-score">' + run.score + ' / ' + n + '</p>' +
        (run.misses.length ? '<div class="cj-h">Look again</div>' + run.misses.map(function (m) { return '<div class="mh-miss"><span>' + md(m.q) + '</span><b>' + md(m.a) + '</b><span>' + md(m.why) + '</span></div>'; }).join('') : '<p class="mh-lead">Every one right.</p>') +
        '<div class="mh-row"><button class="mh-btn" data-again>Go again (new order)</button>' + (d.topic ? '<button class="pill" data-go="t-' + d.topic + '">Review the notes →</button>' : '') + '</div></div>';
    }
    var it = run.items[run.i], opts;
    if (d.type === 'sort') {
      var others = shuffle(d.choices.filter(function (c) { return c !== it.a; }));
      opts = d.choices.length > 6 ? shuffle([it.a].concat(others.slice(0, 3))) : d.choices;
      run.opts = opts.map(function (c) { return { t: c, ok: c === it.a }; });
    } else run.opts = shuffle(it.opts);
    return '<div class="cj-top"><button class="pill" data-go="practice">← All drills</button></div>' +
      '<div class="glass mh-play"><div class="mh-prog"><span>' + esc(d.title) + '</span><span>' + (run.i + 1) + ' / ' + n + ' · ' + run.score + ' right</span></div>' +
      '<div class="mh-bar"><i style="width:' + Math.round(run.i / n * 100) + '%"></i></div>' +
      (it.ctx ? '<p class="mh-ctx">' + md(it.ctx) + '</p>' : '') +
      '<p class="mh-say' + (it.say ? ' quote' : '') + '">' + md(it.say || it.q) + '</p>' +
      (d.ask ? '<p class="mh-ctx"><b>' + esc(d.ask) + '</b></p>' : '') +
      '<div class="mh-opts' + (d.type === 'sort' ? ' grid' : '') + '">' + run.opts.map(function (o, j) {
        return '<button class="mh-opt" data-pick="' + j + '"><span>' + md(o.t) + '</span>' + (o.why ? '<span class="fb">' + (o.tech ? '<b>' + esc(o.tech) + '.</b> ' : '') + md(o.why) + '</span>' : '') + '</button>';
      }).join('') + '</div><div id="mh-fb"></div></div>';
  }
  function pickDrill(j) {
    if (run.answered) return;
    run.answered = true;
    var it = run.items[run.i], o = run.opts[j], ok = !!o.ok;
    if (ok) run.score++;
    var right = run.opts.filter(function (x) { return x.ok; })[0];
    if (!ok) run.misses.push({ q: it.say || it.q, a: right.t, why: it.why || right.why || '' });
    root.querySelectorAll('.mh-opt').forEach(function (b, k) { b.disabled = true; if (run.opts[k].ok) b.classList.add('right'); else if (k === j) b.classList.add('wrong'); });
    root.querySelector('.mh-opts').classList.add('shown');
    root.querySelector('#mh-fb').innerHTML = '<div class="mh-why"><span class="verdict">' + (ok ? '✓ Right' : '✗ Not quite') + '</span>' + (it.why ? md(it.why) : '') + '</div>' +
      '<div class="mh-row" style="margin-top:10px"><button class="mh-btn" data-next>' + (run.i + 1 < run.items.length ? 'Next →' : 'See score') + '</button></div>';
    var nb = root.querySelector('[data-next]'); if (nb) nb.focus({ preventScroll: true });
  }

  // ---------- Test ----------
  var hist = load('test', {}), test = null;
  function qPool(set) {
    if (/^w\d+$/.test(set)) return QS.filter(function (q) { return q.wk === +set.slice(1); });
    if (set === 'miss') return QS.filter(function (q) { var h = hist[q.id]; return h && h[h.length - 1] === 0; });
    if (set === 'new') return QS.filter(function (q) { return !hist[q.id]; });
    if (set && set.indexOf('link:') === 0) return QS.filter(function (q) { return q.link === set.slice(5); });
    return QS.slice();
  }
  function testHome() {
    var tried = Object.keys(hist).length, right = Object.keys(hist).filter(function (k) { var h = hist[k]; return h[h.length - 1] === 1; }).length;
    var sets = [['all', 'Everything']].concat(CFG.weeks.map(function (W) { return ['w' + W[0], W[1]]; }), [['new', 'Not tried yet'], ['miss', 'Missed last time']]);
    return '<div class="glass mh-play"><h2 style="margin:0">Test yourself</h2><p class="mh-lead">NCLEX-style questions: single answer and <b>select all that apply</b>. Each one shows the rationale, and the ones you miss come back under “Missed last time.”</p>' +
      '<p class="mh-hist">' + QS.length + ' questions · tried ' + tried + ' · right on the last try ' + right + '</p>' +
      '<div class="cj-h">Which questions</div><div class="mh-week">' + sets.map(function (s) { var n = qPool(s[0]).length; return '<button class="pill" data-set="' + s[0] + '"' + (n ? '' : ' disabled') + ' aria-pressed="' + (testSet === s[0]) + '">' + s[1] + ' · ' + n + '</button>'; }).join('') + '</div>' +
      '<div class="cj-h">How many</div><div class="mh-week">' + [10, 20, 0].map(function (n) { return '<button class="pill" data-count="' + n + '" aria-pressed="' + (testCount === n) + '">' + (n || 'All') + '</button>'; }).join('') + '</div>' +
      '<div class="mh-row"><button class="mh-btn" data-start>Start</button></div></div>';
  }
  var testSet = 'all', testCount = 10;
  function startTest(set, count) {
    var pool = shuffle(qPool(set));
    if (count) pool = pool.slice(0, count);
    if (!pool.length) return false;
    test = { qs: pool, i: 0, score: 0, misses: [], sel: [], answered: false };
    return true;
  }
  function multi(q) { return Array.isArray(q.a); }
  function qHtml() {
    var n = test.qs.length;
    if (test.i >= n) {
      return '<div class="glass mh-play"><div class="kicker">Test</div><p class="mh-score">' + test.score + ' / ' + n + ' · ' + Math.round(test.score / n * 100) + '%</p>' +
        (test.misses.length ? '<div class="cj-h">Review what you missed</div>' + test.misses.map(function (q) {
          var ans = (multi(q) ? q.a : [q.a]).map(function (k) { return q.opts[k]; });
          return '<div class="mh-miss"><span>' + md(q.stem) + '</span><b>' + ans.map(md).join(' · ') + '</b><span>' + md(q.why) + '</span>' + (q.link ? '<button class="pill" style="align-self:flex-start" data-go="' + q.link + '">Study this →</button>' : '') + '</div>';
        }).join('') : '<p class="mh-lead">Every one right.</p>') +
        '<div class="mh-row"><button class="mh-btn" data-go="test">New test</button></div></div>';
    }
    var q = test.qs[test.i];
    test.order = shuffle(q.opts.map(function (o, k) { return k; }));
    return '<div class="glass mh-play"><div class="mh-prog"><span>Question ' + (test.i + 1) + ' of ' + n + '</span><span>' + test.score + ' right</span></div>' +
      '<div class="mh-bar"><i style="width:' + Math.round(test.i / n * 100) + '%"></i></div>' +
      (multi(q) ? '<span class="mh-sata">Select all that apply</span>' : '') +
      '<p class="mh-say">' + md(q.stem) + '</p><div class="mh-opts">' + test.order.map(function (k) {
        return '<button class="mh-opt" data-q="' + k + '" aria-pressed="false"><span>' + md(q.opts[k]) + '</span></button>';
      }).join('') + '</div><div class="mh-row"><button class="mh-btn" data-check disabled>Check</button></div><div id="mh-fb"></div></div>';
  }
  function checkQ() {
    var q = test.qs[test.i], ans = multi(q) ? q.a : [q.a];
    var ok = test.sel.length === ans.length && ans.every(function (k) { return test.sel.indexOf(k) >= 0; });
    test.answered = true;
    if (ok) test.score++; else test.misses.push(q);
    (hist[q.id] = hist[q.id] || []).push(ok ? 1 : 0); if (hist[q.id].length > 5) hist[q.id].shift(); save('test', hist);
    root.querySelectorAll('.mh-opt').forEach(function (b) {
      var k = +b.dataset.q; b.disabled = true;
      if (ans.indexOf(k) >= 0) b.classList.add('right'); else if (test.sel.indexOf(k) >= 0) b.classList.add('wrong');
    });
    root.querySelector('[data-check]').remove();
    root.querySelector('#mh-fb').innerHTML = '<div class="mh-why"><span class="verdict">' + (ok ? '✓ Right' : '✗ Not quite') + '</span>' + md(q.why) + '</div>' +
      '<div class="mh-row" style="margin-top:10px"><button class="mh-btn" data-qnext>' + (test.i + 1 < test.qs.length ? 'Next →' : 'See score') + '</button>' + (q.link ? '<button class="pill" data-go="' + q.link + '">Study this →</button>' : '') + '</div>';
  }

  // ---------- routing ----------
  var VIEW_OF = { c: 'think', t: 'topics', p: 'practice' };
  function route() {
    var h = decodeURIComponent(location.hash.slice(1)) || 'think', m = /^([ctp])-(.+)$/.exec(h), view = m ? VIEW_OF[m[1]] : h;
    if (['think', 'topics', 'practice', 'test'].indexOf(view) < 0) view = 'think';
    tabs.querySelectorAll('[data-go]').forEach(function (b) { b.setAttribute('aria-selected', b.dataset.go === view ? 'true' : 'false'); });
    var html;
    if (m && m[1] === 'c' && byId(CONDS, m[2])) html = condHtml(byId(CONDS, m[2]));
    else if (m && m[1] === 't' && byId(TOPICS, m[2])) html = topicHtml(byId(TOPICS, m[2]));
    else if (m && m[1] === 'p' && byId(DRILLS, m[2])) { if (!run || run.d.id !== m[2]) startDrill(byId(DRILLS, m[2])); html = drillHtml(); }
    else if (view === 'test') html = test ? qHtml() : testHome();
    else if (view === 'topics') html = topicsHome();
    else if (view === 'practice') { run = null; html = drillsHome(); }
    else html = thinkHome();
    root.innerHTML = html;
  }
  function go(h) {
    if (h === 'test') test = null;
    if (('#' + h) === location.hash || (h === 'think' && !location.hash)) { route(); }
    else location.hash = h;
    toTop();
  }
  // Moving inside the page lands on the view switcher, not on the page title above it.
  function toTop() { tabs.scrollIntoView({ block: 'start' }); }
  window.addEventListener('hashchange', function () { if (!/^#p-/.test(location.hash)) run = null; if (location.hash !== '#test') test = null; route(); toTop(); });
  tabs.addEventListener('click', function (e) { var b = e.target.closest('[data-go]'); if (b) go(b.dataset.go); });

  function toggle(btn, body) { var open = btn.getAttribute('aria-expanded') !== 'true'; btn.setAttribute('aria-expanded', open ? 'true' : 'false'); body.hidden = !open; return open; }
  function markStep(k) {
    var id = (/^#c-(.+)$/.exec(location.hash) || [])[1]; if (!id) return;
    var s = seen[id] = seen[id] || []; if (s.indexOf(k) < 0) { s.push(k); save('steps', seen); }
  }
  function play(el) {
    var id = el.dataset.vid; el.removeAttribute('data-vid');
    el.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0&playsinline=1" title="Video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
  }
  root.addEventListener('click', function (e) {
    var t = e.target, x;
    if ((x = t.closest('[data-go]'))) { go(x.dataset.go); return; }
    if ((x = t.closest('[data-test-link]'))) { test = null; if (startTest('link:' + x.dataset.testLink, 0)) { location.hash = 'test'; if (location.hash === '#test') route(); } toTop(); return; }
    if (t.closest('.cj-quiz')) { quiz = !quiz; save('quiz', quiz); route(); return; }
    if ((x = t.closest('.cj-gist.covered'))) { x.classList.remove('covered'); x.removeAttribute('role'); x.removeAttribute('tabindex'); return; }
    if ((x = t.closest('.cj-step-h'))) { if (toggle(x, x.nextElementSibling)) markStep(x.parentNode.dataset.step); return; }
    if ((x = t.closest('[data-open-step]'))) {
      var li = root.querySelector('.cj-step[data-step="' + x.dataset.openStep + '"]'), b = li.querySelector('.cj-step-h');
      if (b.getAttribute('aria-expanded') !== 'true') { toggle(b, b.nextElementSibling); markStep(x.dataset.openStep); }
      li.scrollIntoView({ behavior: 'smooth', block: 'start' }); return;
    }
    if ((x = t.closest('.cj-card-h, .cj-term-h'))) { toggle(x, x.nextElementSibling); return; }
    if ((x = t.closest('[data-more]'))) { var w = x.parentNode.nextElementSibling; w.hidden = !w.hidden; x.classList.toggle('on', !w.hidden); return; }
    if ((x = t.closest('.mh-flip'))) { x.classList.toggle('open'); return; }
    if ((x = t.closest('.vid-frame[data-vid]'))) { play(x); return; }
    // drills
    if ((x = t.closest('[data-pick]'))) { pickDrill(+x.dataset.pick); return; }
    if (t.closest('[data-next]')) { run.i++; run.answered = false; root.innerHTML = drillHtml(); root.scrollIntoView({ block: 'start' }); return; }
    if (t.closest('[data-again]')) { startDrill(run.d); root.innerHTML = drillHtml(); return; }
    // test
    if ((x = t.closest('[data-set]'))) { testSet = x.dataset.set; route(); return; }
    if ((x = t.closest('[data-count]'))) { testCount = +x.dataset.count; route(); return; }
    if (t.closest('[data-start]')) { if (startTest(testSet, testCount)) route(); return; }
    if ((x = t.closest('[data-q]')) && test && !test.answered) {
      var q = test.qs[test.i], k = +x.dataset.q;
      if (multi(q)) { var p = test.sel.indexOf(k); if (p >= 0) test.sel.splice(p, 1); else test.sel.push(k); }
      else test.sel = [k];
      root.querySelectorAll('.mh-opt').forEach(function (b) { var on = test.sel.indexOf(+b.dataset.q) >= 0; b.classList.toggle('sel', on); b.setAttribute('aria-pressed', on); });
      root.querySelector('[data-check]').disabled = !test.sel.length; return;
    }
    if (t.closest('[data-check]')) { checkQ(); return; }
    if (t.closest('[data-qnext]')) { test.i++; test.sel = []; test.answered = false; root.innerHTML = qHtml(); root.scrollIntoView({ block: 'start' }); return; }
  });
  root.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var g = e.target.closest('.cj-gist.covered, .vid-frame[data-vid]'); if (!g) return;
    e.preventDefault(); g.click();
  });
  route();
})();
