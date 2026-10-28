// "Think it through" — the map's clinical-judgment view (data in window.CJ_MAP, built by tools/build_cj_map.js from data/e3/cj).
// Each condition runs in the order of NCSBN's six clinical judgment steps, and every tap goes one layer deeper:
// condition → step → cue card → full paragraph and why → organ → molecule, all the notes, the drug card.
// The deepest layers open in the map's own panel (map.js), through the same #topic / #n-node links it already handles.
// Loaded after map.js; does nothing on a page without window.CJ_MAP.
(function () {
  var C = window.CJ_MAP, X = window.EXAM_MAP;
  if (!C || !C.length || !X) return;
  var STEPS = {
    rc: ['Recognize cues', 'Assessment', 'What do you notice?'],
    ac: ['Analyze cues', 'Analysis', 'What does it mean?'],
    ph: ['Prioritize hypotheses', 'Analysis', 'What is most urgent?'],
    gs: ['Generate solutions', 'Planning', 'What should happen?'],
    ta: ['Take action', 'Implementation', 'What do you do?'],
    eo: ['Evaluate outcomes', 'Evaluation', 'Did it work?']
  };
  var KEY = X.prefix + 'cj-', byId = {};
  C.forEach(function (c) { byId[c.id] = c; });
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]; }); }
  function get(k, d) { try { var v = localStorage.getItem(KEY + k); return v == null ? d : v; } catch (e) { return d; } }
  function put(k, v) { try { localStorage.setItem(KEY + k, v); } catch (e) {} }

  // ---------- The switch between this view and the topic map ----------
  var main = document.querySelector('main'), focusbar = document.getElementById('focusbar');
  var sw = document.createElement('div');
  sw.className = 'cj-switch'; sw.setAttribute('role', 'tablist');
  sw.innerHTML = '<button role="tab" data-view="cj">Think it through</button><button role="tab" data-view="topics">All topics</button>';
  var root = document.createElement('section');
  root.id = 'cj'; root.setAttribute('aria-live', 'polite');
  main.insertBefore(sw, focusbar); main.insertBefore(root, focusbar);
  var view = get('view', 'cj');
  function setView(v) {
    view = v; put('view', v);
    document.body.classList.toggle('cj-mode', v === 'cj');
    sw.querySelectorAll('[data-view]').forEach(function (b) { b.setAttribute('aria-selected', b.dataset.view === v ? 'true' : 'false'); });
  }
  // Switching by hand rewrites the current history entry (#cj-<condition> only while this view shows a condition),
  // and every entry remembers its view, so Back and Forward bring back the view that was showing.
  function switchView(v) {
    setView(v);
    try { history.replaceState({ cjView: v }, '', location.pathname + location.search + (v === 'cj' && cur ? '#cj-' + cur.id : '')); } catch (e) {}
  }
  sw.addEventListener('click', function (e) { var b = e.target.closest('[data-view]'); if (b) switchView(b.dataset.view); });

  // ---------- Test-yourself mode: each step's answer (the gist) stays covered until tapped ----------
  var quiz = get('quiz', '0') === '1';

  // ---------- Rendering ----------
  var cur = null;
  function ladderDots() { return '<span class="cj-dots" aria-hidden="true">' + Object.keys(STEPS).map(function (k, i) { return '<i>' + (i + 1) + '</i>'; }).join('') + '</span>'; }
  function homeHtml() {
    var sys = [];
    C.forEach(function (c) { if (sys.indexOf(c.sys) < 0) sys.push(c.sys); });
    return '<div class="glass cj-intro"><h2>Think like the nurse, one step at a time</h2>' +
      '<p>Pick a condition. It opens into the six steps of clinical judgment, in bedside order. Tap a step, then a card, and keep going deeper — down to organ → molecule.</p>' +
      '<details class="cj-steps-how"><summary>The six steps</summary><ol class="cj-legend">' + Object.keys(STEPS).map(function (k) { return '<li><b>' + STEPS[k][0] + '</b><span>' + STEPS[k][2] + '</span></li>'; }).join('') + '</ol></details>' +
      quizBtn() + '</div>' +
      sys.map(function (s) {
        return '<section class="cj-sys"><h2>' + esc(s) + '</h2><div class="cj-conds">' + C.filter(function (c) { return c.sys === s; }).map(function (c) {
          return '<button class="glass cj-cond" data-cond="' + c.id + '"><small class="cj-ch">Chapter ' + esc(c.ch) + '</small><b>' + esc(c.name) + '</b><span>' + esc(c.patient) + '</span>' + ladderDots() +
            (c.videos.length ? '<small>▶ ' + c.videos.length + ' video' + (c.videos.length > 1 ? 's' : '') + '</small>' : '') + '</button>';
        }).join('') + '</div></section>';
      }).join('') +
      '<p class="cj-more">Every chapter on Exam 3 is here. The final-only chapters (48–52) and the full notes are under <button class="linkbtn" data-view-go="topics">All topics</button>.</p>';
  }
  function quizBtn() {
    return '<button class="pill cj-quiz" aria-pressed="' + quiz + '">' + quizLabel() + '</button>';
  }
  function quizLabel() { return quiz ? '✓ Test me: step answers hidden' : 'Test me: hide each step’s answer'; }
  function videosHtml(c) {
    if (!c.videos.length) return '';
    return '<div class="cj-watch"><div class="cj-h">Watch first</div><div class="cj-vids">' + c.videos.map(function (v) {
      var out = window.MapVideo && window.MapVideo.blocked(v.id);
      return '<div class="vid"><div class="vid-frame"' + (out ? '>' + window.MapVideo.blockedHtml(v.id) : ' data-vid="' + esc(v.id) + '" role="button" tabindex="0" aria-label="Play: ' + esc(v.title) + '">' +
        '<img src="https://i.ytimg.com/vi/' + esc(v.id) + '/hqdefault.jpg" alt="" loading="lazy" decoding="async"><i class="play" aria-hidden="true"></i>') + '</div>' +
        '<div class="vid-body"><b>' + esc(v.title) + '</b><span>Watch for: ' + esc(v.see) + '</span>' +
        '<a href="https://www.youtube.com/watch?v=' + encodeURIComponent(v.id) + '" target="_blank" rel="noopener">Open on YouTube ↗</a></div></div>';
    }).join('') + '</div></div>';
  }
  function cardHtml(card, si, ci) {
    var id = si + '-' + ci;
    return '<div class="cj-card" data-card="' + id + '">' +
      '<button class="cj-card-h" aria-expanded="false">' + (card.tag ? '<span class="cj-tag">' + esc(card.tag) + '</span>' : '') + '<span>' + card.t + '</span><i class="cj-chev" aria-hidden="true"></i></button>' +
      '<div class="cj-card-b" hidden>' +
        (card.bullets.length ? '<ul>' + card.bullets.map(function (b) { return '<li>' + b + '</li>'; }).join('') + '</ul>' : '<p>' + card.text + '</p>') +
        '<div class="cj-deeper">' +
          (card.bullets.length ? '<button class="cj-more-btn" data-more="full">Full paragraph</button>' : '') +
          (card.why ? '<button class="cj-more-btn" data-more="why">💡 Why it happens</button>' : '') +
          '<button class="cj-more-btn" data-topic="' + esc(card.topic) + '">All the notes →</button>' +
        '</div>' +
        (card.bullets.length ? '<div class="cj-full" data-show="full" hidden>' + card.text + '</div>' : '') +
        (card.why ? '<div class="cj-why" data-show="why" hidden>' + card.why + '</div>' : '') +
      '</div></div>';
  }
  // One finding: its clinical name first, then what it looks like, why the body does it and what it tells you.
  function termHtml(x) {
    return '<div class="cj-term"><button class="cj-term-h" aria-expanded="false"><span><b>' + x.t + '</b><small>' + x.see + '</small></span><i class="cj-chev" aria-hidden="true"></i></button>' +
      '<dl class="cj-term-b" hidden><dt>Why it happens</dt><dd>' + x.why + '</dd><dt>What it tells you</dt><dd>' + x.means + '</dd></dl></div>';
  }
  function reportHtml(c) {
    if (c.report.length !== 4) return '';
    return '<div class="glass cj-report"><div class="cj-h">Say it to the provider · SBAR example</div>' +
      '<p class="cj-report-hint">The same findings in the words you would use on the phone. Numbers are an example.</p><dl>' +
      ['Situation', 'Background', 'Assessment', 'Recommendation'].map(function (h, i) { return '<dt><b>' + h[0] + '</b>' + h.slice(1) + '</dt><dd>' + c.report[i] + '</dd>'; }).join('') + '</dl></div>';
  }
  function condHtml(c) {
    var i = C.indexOf(c), prev = C[i - 1], next = C[i + 1];
    return '<div class="cj-top"><button class="pill" data-home>← All conditions</button>' + quizBtn() + '</div>' +
      '<div class="glass cj-head"><div class="kicker">' + esc(c.sys) + ' · Chapter ' + esc(c.ch) + '</div><h2>' + esc(c.name) + '</h2>' +
      '<p class="cj-patient"><span>The client</span>' + esc(c.patient) + '</p></div>' +
      videosHtml(c) +
      '<ol class="cj-ladder">' + c.steps.map(function (s, si) {
        var m = STEPS[s.k];
        return '<li class="cj-step" data-step="' + s.k + '">' +
          '<button class="cj-step-h" aria-expanded="false"><span class="cj-num">' + (si + 1) + '</span><span class="cj-step-t"><b>' + m[0] + '</b><small>' + m[1] + '</small><span class="cj-q">' + m[2] + '</span></span><i class="cj-chev" aria-hidden="true"></i></button>' +
          '<div class="cj-step-b" hidden>' +
            '<div class="cj-gist' + (quiz ? ' covered' : '') + '"' + (quiz ? ' role="button" tabindex="0"' : '') + '><span class="cj-cover">Say your answer, then tap to check</span><div class="cj-gist-t">' + s.gist + '</div></div>' +
            (s.terms.length ? '<div class="cj-h">Every finding, explained · tap one</div><div class="cj-terms">' + s.terms.map(termHtml).join('') + '</div>' : '') +
            (s.cards.length ? '<div class="cj-h">' + (s.terms.length ? 'From the notes' : 'Go deeper') + ' · ' + s.cards.length + ' card' + (s.cards.length > 1 ? 's' : '') + '</div>' : '') +
            s.cards.map(function (card, ci) { return cardHtml(card, si, ci); }).join('') +
            (si < c.steps.length - 1 ? '<button class="cj-next" data-open-step="' + c.steps[si + 1].k + '">Next: ' + STEPS[c.steps[si + 1].k][0] + ' ↓</button>' : '') +
          '</div></li>';
      }).join('') + '</ol>' +
      reportHtml(c) +
      '<div class="glass cj-bottom"><div class="cj-h">The deepest layer</div><div class="cj-links">' +
        c.nodes.map(function (n) { return '<button class="pill" data-node-go="' + esc(n.id) + '">⇣ Organ → molecule: ' + esc(n.name) + '</button>'; }).join('') +
        c.topics.map(function (t) { return '<button class="pill" data-topic="' + esc(t) + '">All the notes: ' + esc(topicTitle(t)) + '</button>'; }).join('') +
      '</div>' +
      (c.drugs.length ? '<div class="cj-h">Drugs</div><div class="cj-links">' + c.drugs.map(function (d) { return '<a class="pill gold" href="' + encodeURI(drugPage()) + '#drug-' + esc(d.id) + '">💊 ' + esc(d.name) + '</a>'; }).join('') + '</div>' : '') +
      '<div class="cj-h">Practice</div><div class="cj-links"><a class="pill" href="' + encodeURI(X.mastery) + '">Mastery test →</a></div></div>' +
      '<div class="cj-pager">' + (prev ? '<button class="pill" data-cond="' + prev.id + '">← ' + esc(prev.name) + '</button>' : '<span></span>') + (next ? '<button class="pill" data-cond="' + next.id + '">' + esc(next.name) + ' →</button>' : '') + '</div>';
  }
  function topicTitle(id) { var t = (window.INFO_TOPICS || []).filter(function (x) { return x.id === id; })[0]; return t ? t.title.split(' — ')[0] : id; }
  function drugPage() { return X.name + ' Drug Cards.dc.html'; }
  function render(id) {
    cur = byId[id] || null;
    root.innerHTML = cur ? condHtml(cur) : homeHtml();
  }

  // ---------- Navigation: #cj-<condition> in the address, so back and refresh keep your place ----------
  function go(id) {
    try { history.pushState({ cjView: 'cj' }, '', location.pathname + location.search + (id ? '#cj-' + id : '')); } catch (e) {}
    render(id); root.scrollIntoView({ block: 'start' });
  }
  function fromHash() { var h = decodeURIComponent(location.hash.slice(1)); return h.indexOf('cj-') === 0 ? h.slice(3) : null; }
  window.addEventListener('popstate', function () {
    var id = fromHash(), st = history.state || {};
    if (id) { setView('cj'); if (!cur || cur.id !== id) render(id); return; }
    if (location.hash.slice(1)) return; // a topic, breakdown or weak-areas address: map.js shows it
    if (st.cjView) setView(st.cjView);
    if (cur) render(null);
  });
  // Opens a topic's notes or a breakdown in the map's panel (map.js listens for these addresses).
  function openPanel(hash) {
    try { history.pushState({ panel: 1 }, '', '#' + hash); } catch (e) {}
    window.dispatchEvent(new PopStateEvent('popstate', { state: { panel: 1 } }));
  }

  function toggle(btn, body) {
    var open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', open ? 'true' : 'false'); body.hidden = !open;
    return open;
  }
  root.addEventListener('click', function (e) {
    var t = e.target;
    var v = t.closest('[data-view-go]'); if (v) { switchView(v.dataset.viewGo); window.scrollTo(0, 0); return; }
    if (t.closest('.cj-quiz')) {
      quiz = !quiz; put('quiz', quiz ? '1' : '0');
      root.querySelectorAll('.cj-quiz').forEach(function (b) { b.setAttribute('aria-pressed', quiz); b.textContent = quizLabel(); });
      root.querySelectorAll('.cj-gist').forEach(function (g) { g.classList.toggle('covered', quiz); if (quiz) { g.setAttribute('role', 'button'); g.tabIndex = 0; } else { g.removeAttribute('role'); g.removeAttribute('tabindex'); } });
      return;
    }
    var cond = t.closest('[data-cond]'); if (cond) { go(cond.dataset.cond); return; }
    if (t.closest('[data-home]')) { go(null); return; }
    var g = t.closest('.cj-gist.covered'); if (g) { g.classList.remove('covered'); g.removeAttribute('role'); g.removeAttribute('tabindex'); return; }
    var sh = t.closest('.cj-step-h'); if (sh) { toggle(sh, sh.nextElementSibling); return; }
    var nx = t.closest('[data-open-step]');
    if (nx) {
      var li = root.querySelector('.cj-step[data-step="' + nx.dataset.openStep + '"]'), b = li.querySelector('.cj-step-h');
      if (b.getAttribute('aria-expanded') !== 'true') toggle(b, b.nextElementSibling);
      li.scrollIntoView({ behavior: 'smooth', block: 'start' }); return;
    }
    var ch = t.closest('.cj-card-h, .cj-term-h'); if (ch) { toggle(ch, ch.nextElementSibling); return; }
    var more = t.closest('[data-more]');
    if (more) {
      var box = more.closest('.cj-card-b').querySelector('[data-show="' + more.dataset.more + '"]');
      box.hidden = !box.hidden; more.classList.toggle('on', !box.hidden); return;
    }
    var tp = t.closest('[data-topic]'); if (tp) { openPanel(tp.dataset.topic); return; }
    var nd = t.closest('[data-node-go]'); if (nd) { openPanel('n-' + nd.dataset.nodeGo); return; }
    var vf = t.closest('.vid-frame[data-vid]'); if (vf) { play(vf); return; }
  });
  root.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var g = e.target.closest('.cj-gist.covered, .vid-frame[data-vid]'); if (!g) return;
    e.preventDefault(); g.click();
  });
  function play(el) {
    if (window.MapVideo) { window.MapVideo.play(el); return; }
    var id = el.dataset.vid; el.removeAttribute('data-vid');
    el.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0&playsinline=1" title="Video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
  }

  // Time with a condition on screen counts as reading its topics (Quick), so the study route sees it (map.js keeps the
  // log and skips time while its panel is open). Nothing counts when another view hides this one (All topics, #weak).
  setInterval(function () { if (view === 'cj' && cur && root.getClientRects().length && window.MapRead) window.MapRead(cur.topics); }, 5000);

  setView(view);
  var start = fromHash();
  render(start);
  if (start) setView('cj');
  try { if (!(history.state || {}).cjView && !(history.state || {}).panel) history.replaceState(Object.assign({}, history.state, { cjView: view }), '', location.href); } catch (e) {}
})();
