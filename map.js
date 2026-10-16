// The map page, shared by every exam. Each exam's page sets window.EXAM_MAP (its name, systems, question counts,
// storage keys and pages) and loads its own data files before this one.
(function () {
  var TOPICS = window.INFO_TOPICS || [], NODES = window.CONCEPT_NODES || [], GLOSS = window.GLOSSARY || [], F = window.E2Focus;
  var X = window.EXAM_MAP;

  // Body systems on the map. A chapter not listed here (e.g. one added for a later exam) lands in "More chapters".
  var SYSTEMS = X.systems;
  // Questions per chapter from the study guide; null until the exam's study guide is added.
  var EXAM_Q = X.examQ || {};

  // Which notes topics each Concept Map breakdown belongs to.
  var NODE_TOPICS = window.NODE_TOPICS || {};

  var byId = {}; TOPICS.forEach(function (t) { byId[t.id] = t; });
  var nodeById = {}; NODES.forEach(function (n) { nodeById[n.id] = n; });
  var nodesFor = {}, topicsForNode = {};
  Object.keys(NODE_TOPICS).forEach(function (nid) {
    topicsForNode[nid] = [];
    NODE_TOPICS[nid].forEach(function (r) {
      TOPICS.forEach(function (t) {
        if (t.ch === r[0] && r[1].test(t.title)) { (nodesFor[t.id] = nodesFor[t.id] || []).push(nid); topicsForNode[nid].push(t.id); }
      });
    });
  });
  // Mechanisms point at the topic nodes they explain.
  NODES.filter(function (n) { return n.kind === 'mech'; }).forEach(function (m) {
    var ids = (topicsForNode[m.id] || []).slice(); (m.links || []).filter(function (l) { return NODE_TOPICS[l[0]]; }).forEach(function (l) { (topicsForNode[l[0]] || []).forEach(function (id) { if (ids.indexOf(id) < 0) ids.push(id); }); });
    topicsForNode[m.id] = ids;
  });

  // Plain text of each topic (for search, words and connections), computed once.
  var textOf = {};
  var scratch = document.createElement('div');
  TOPICS.forEach(function (t) { scratch.innerHTML = t.html; textOf[t.id] = (t.title + ' ' + scratch.textContent).replace(/\s+/g, ' '); });

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function isAbbr(a) { return /^[A-Z][A-Z0-9₀-₉⁺]{0,3}$/.test(a); }
  function aliasRe(a) {
    var e = a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return isAbbr(a) ? new RegExp('(^|[^A-Za-z])(' + e + ')(?=[^A-Za-z]|$)') : new RegExp('()(' + e + ')', a === a.toLowerCase() ? 'i' : '');
  }
  var GRE = GLOSS.map(function (g) { return { term: g[0], def: g[2], res: g[1].map(aliasRe) }; });
  function wordsIn(text) { return GRE.filter(function (g) { return g.res.some(function (r) { return r.test(text); }); }); }

  // ---------- Map ----------
  var mapEl = document.getElementById('map');
  function chTitle(ch) { var t = TOPICS.find(function (x) { return x.ch === ch; }); return t ? t.chTitle : ''; }
  function order(ch) { return TOPICS.filter(function (t) { return t.ch === ch; }); }
  function kindLabel(t) { return t.kind === 'overview' ? 'Start' : t.kind === 'adpie' ? 'ADPIE' : (t.tag === 'Foundation' ? 'Base' : ''); }

  // Mastery from the mastery test (all tests so far): weak topics are marked on their chips.
  var MASTERY = {};
  try { MASTERY = ((JSON.parse(localStorage.getItem(X.store) || 'null') || {}).mastery || {}).topics || {}; } catch (e) {}
  function masteryHtml(id) {
    var m = MASTERY[id]; if (!m || m.m == null) return '';
    var pct = Math.round(m.m * 100), lvl = m.m >= 0.85 ? 'strong' : m.m >= 0.6 ? 'ok' : 'weak';
    return '<span class="ms ms-' + lvl + '" title="Mastery test: ' + pct + '% on ' + m.n + ' question' + (m.n > 1 ? 's' : '') + '">' + (lvl === 'weak' ? 'Weak ' : '') + pct + '%</span>';
  }
  function chipHtml(t) {
    var nb = nodesFor[t.id] ? '<span class="bd" title="Has an organ → molecule breakdown">⇣ molecule</span>' : '';
    var k = kindLabel(t);
    return '<button class="chip" data-id="' + t.id + '"><svg class="star" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg><span class="t">' + esc(t.title) + '</span>' + masteryHtml(t.id) + nb + (k ? '<span class="k">' + k + '</span>' : '') + '</button>';
  }
  function chapterHtml(ch) {
    var q = EXAM_Q[ch];
    return '<div class="chapter' + (q ? '' : ' untested') + '" data-ch="' + ch + '"><div class="chhead"><b>' + ch + ' · ' + esc(chTitle(ch)) + '</b>' +
      (q ? '<span class="q">' + q + ' questions</span>' : X.examQ ? '<span class="q none">Not on guide · basics</span>' : '') +
      '<button class="all" data-ch="' + ch + '">All / none</button></div><div class="chips">' + order(ch).map(chipHtml).join('') + '</div></div>';
  }
  function buildMap() {
    var chs = []; TOPICS.forEach(function (t) { if (chs.indexOf(t.ch) < 0) chs.push(t.ch); });
    var systems = SYSTEMS.map(function (s) { return { name: s.name, why: s.why, chs: s.chs.filter(function (c) { return chs.indexOf(c) >= 0; }) }; });
    var placed = [].concat.apply([], systems.map(function (s) { return s.chs; }));
    var rest = chs.filter(function (c) { return placed.indexOf(c) < 0; });
    if (rest.length) systems.push({ name: 'More chapters', why: '', chs: rest });
    var total = Object.keys(EXAM_Q).reduce(function (a, k) { return a + EXAM_Q[k]; }, 0);
    var mechs = NODES.filter(function (n) { return n.kind === 'mech'; });
    mapEl.innerHTML =
      '<div style="display:flex;flex-direction:column;gap:18px">' +
      '<div class="root">' + esc(X.name) + '<small>' + (total ? total + ' questions · ' : '') + TOPICS.length + ' topics</small></div>' +
      '<div class="systems">' + systems.filter(function (s) { return s.chs.length; }).map(function (s) {
        var q = s.chs.reduce(function (a, c) { return a + (EXAM_Q[c] || 0); }, 0);
        return '<section class="glass system"><h2>' + esc(s.name) + '<span>' + (q ? q + ' q' : '') + '</span></h2>' + (s.why ? '<p class="why">' + esc(s.why) + '</p>' : '') + s.chs.map(chapterHtml).join('') + '</section>';
      }).join('') + '</div>' +
      (mechs.length ? '<section class="glass mechs"><h2>Mechanisms that tie it together</h2><p>' + esc(X.mechNote || '') + '</p><div class="row">' +
        mechs.map(function (m) { return '<button class="pill" data-node="' + m.id + '">' + esc(m.name) + (m.short ? ' <small>' + esc(m.short) + '</small>' : '') + '</button>'; }).join('') + '</div></section>' : '') +
      '</div>';
  }

  // ---------- Focus state ----------
  var picking = false, focusOnly = false;
  try { focusOnly = localStorage.getItem(X.prefix + 'map-only') === '1'; } catch (e) {}
  function refresh() {
    var ids = F.ids(), on = ids.length > 0;
    document.body.classList.toggle('has-focus', on);
    document.body.classList.toggle('focus-only', on && focusOnly);
    document.getElementById('only').setAttribute('aria-pressed', on && focusOnly ? 'true' : 'false');
    document.getElementById('only').disabled = !on;
    document.getElementById('only').style.opacity = on ? '' : '.45';
    document.getElementById('practice').hidden = !on;
    document.getElementById('focus-label').textContent = F.label();
    mapEl.querySelectorAll('.chip').forEach(function (c) { c.classList.toggle('focus', ids.indexOf(c.dataset.id) >= 0); });
    mapEl.querySelectorAll('.chapter').forEach(function (c) { c.classList.toggle('empty', !c.querySelector('.chip.focus')); });
    mapEl.querySelectorAll('.system').forEach(function (s) { s.classList.toggle('empty', !s.querySelector('.chip.focus')); });
    if (current) setFocusBtn();
    buildMenu();
  }

  // ---------- Lists menu ----------
  var menu = document.getElementById('menu'), menuList = document.getElementById('menu-list');
  function buildMenu() {
    var saved = F.saved(), names = Object.keys(saved), v = F.get();
    var sg = F.studyGuideIds().length;
    var h = '<div class="lbl">Ready-made</div>' +
      (sg ? '<button data-act="guide">Study guide topics <span class="x">' + sg + '</span></button>' : '') +
      (X.examQ ? '<button data-act="exam">Everything on ' + esc(X.name) + ' <span class="x">tested chapters</span></button>' : '') +
      '<button data-act="all">Everything (no focus)</button>';
    if (names.length) h += '<div class="sep"></div><div class="lbl">Your saved lists</div>' + names.map(function (n) {
      return '<button data-act="load" data-name="' + esc(n) + '">' + esc(n) + ' <span class="x" data-act="forget" data-name="' + esc(n) + '" title="Delete list">✕</span></button>';
    }).join('');
    if (v) h += '<div class="sep"></div><button data-act="save">Save this focus as a list…</button>';
    menuList.innerHTML = h;
  }
  document.getElementById('menu-btn').addEventListener('click', function (e) {
    e.stopPropagation(); var open = !menu.classList.contains('open');
    menu.classList.toggle('open', open); this.setAttribute('aria-expanded', open);
  });
  document.addEventListener('click', function () { menu.classList.remove('open'); });
  menuList.addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]'); if (!b) return; e.stopPropagation();
    var act = b.dataset.act, name = b.dataset.name;
    if (act === 'guide') F.set(F.studyGuideIds(), 'Study guide');
    else if (act === 'exam') F.set(TOPICS.filter(function (t) { return EXAM_Q[t.ch]; }).map(function (t) { return t.id; }), 'All ' + X.name + ' chapters');
    else if (act === 'all') F.clear();
    else if (act === 'load') F.load(name);
    else if (act === 'forget') { if (confirm('Delete the list "' + name + '"?')) F.forget(name); refresh(); return; }
    else if (act === 'save') {
      var cur = F.get(), n = prompt('Name this list (e.g. "' + X.name + ' — professor\'s topics"):', cur && cur.name !== 'My topics' ? cur.name : '');
      if (n && n.trim()) F.save(n.trim());
    }
    menu.classList.remove('open'); refresh();
  });

  document.getElementById('pick').addEventListener('click', function () {
    picking = !picking; document.body.classList.toggle('picking', picking); this.setAttribute('aria-pressed', picking);
    this.textContent = picking ? 'Done picking' : 'Pick topics';
  });
  document.getElementById('only').addEventListener('click', function () {
    focusOnly = !focusOnly; try { localStorage.setItem(X.prefix + 'map-only', focusOnly ? '1' : '0'); } catch (e) {} refresh();
  });

  // ---------- Search ----------
  document.getElementById('search').addEventListener('input', function () {
    var q = this.value.trim().toLowerCase();
    mapEl.querySelectorAll('.chip').forEach(function (c) { c.classList.toggle('miss', !!q && textOf[c.dataset.id].toLowerCase().indexOf(q) < 0); });
    mapEl.querySelectorAll('.chapter').forEach(function (c) { c.classList.toggle('nomatch', !!q && !c.querySelector('.chip:not(.miss)')); });
    mapEl.querySelectorAll('.system').forEach(function (s) { s.classList.toggle('nomatch', !!q && !s.querySelector('.chip:not(.miss)')); });
  });

  // ---------- Map clicks ----------
  mapEl.addEventListener('click', function (e) {
    var all = e.target.closest('.all');
    if (all) {
      var ids = order(all.dataset.ch).map(function (t) { return t.id; }), cur = F.ids().slice();
      var every = ids.every(function (id) { return cur.indexOf(id) >= 0; });
      cur = cur.filter(function (id) { return ids.indexOf(id) < 0; }); if (!every) cur = cur.concat(ids);
      F.set(cur, (F.get() || {}).name || 'My topics'); refresh(); return;
    }
    var chip = e.target.closest('.chip');
    if (chip) { if (picking) { F.toggle(chip.dataset.id); refresh(); } else openTopic(chip.dataset.id); return; }
    var nb = e.target.closest('[data-node]'); if (nb) openNode(nb.dataset.node);
  });

  // ---------- Panel ----------
  var panel = document.getElementById('panel'), body = document.getElementById('p-body'), tabs = document.getElementById('p-tabs');
  var current = null, tab = 'notes';
  function seq() {
    var v = F.ids(); var list = TOPICS.map(function (t) { return t.id; });
    if (v.length && focusOnly) list = list.filter(function (id) { return v.indexOf(id) >= 0; });
    return list;
  }
  function setFocusBtn() {
    var b = document.getElementById('p-focus');
    if (current.type !== 'topic') { b.hidden = true; return; }
    b.hidden = false; var on = F.has(current.id);
    b.className = 'pill' + (on ? ' on' : ''); b.textContent = on ? '★ In your focus' : '☆ Add to focus';
  }
  var OPEN_MS = 340;
  function isOpen() { return document.body.classList.contains('panel-open'); }
  function show(fromHistory) {
    var hash = '#' + (current.type === 'node' ? 'n-' : '') + current.id;
    if (!fromHistory) {
      // The first open adds a history entry, so the phone's back gesture closes the panel instead of leaving the page.
      try { if (isOpen()) history.replaceState({ panel: 1 }, '', hash); else history.pushState({ panel: 1 }, '', hash); } catch (e) {}
    }
    document.body.classList.add('panel-open');
  }
  function openTopic(id, keepTab) {
    var t = byId[id]; if (!t) return;
    current = { type: 'topic', id: id };
    document.getElementById('p-meta').textContent = 'Chapter ' + t.ch + ' · ' + t.chTitle;
    document.getElementById('p-title').textContent = t.title;
    tabs.querySelector('[data-tab="notes"]').hidden = false;
    tabs.querySelector('[data-tab="breakdown"]').hidden = !nodesFor[id];
    tabs.querySelector('[data-tab="why"]').hidden = !BASICS[id];
    if (!keepTab || (tab === 'breakdown' && !nodesFor[id]) || (tab === 'why' && !BASICS[id])) tab = 'notes';
    var wasOpen = isOpen();
    setFocusBtn(); renderTab(wasOpen ? 0 : OPEN_MS); show(arguments[2]);
  }
  function openNode(nid) {
    var n = nodeById[nid]; if (!n) return;
    current = { type: 'node', id: nid };
    document.getElementById('p-meta').textContent = n.kind === 'mech' ? 'Mechanism' : 'Breakdown · chapter ' + n.ch;
    document.getElementById('p-title').textContent = n.name;
    tabs.querySelector('[data-tab="notes"]').hidden = true;
    tabs.querySelector('[data-tab="why"]').hidden = true;
    tabs.querySelector('[data-tab="breakdown"]').hidden = false;
    var wasOpen = isOpen();
    tab = 'breakdown'; setFocusBtn(); renderTab(wasOpen ? 0 : OPEN_MS); show(arguments[1]);
  }
  function close(fromHistory) {
    if (!isOpen()) return;
    document.body.classList.remove('panel-open'); hidePop(); markJob++;
    if (fromHistory === true) return;
    try { if (history.state && history.state.panel) history.back(); else history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
  }
  window.addEventListener('popstate', function () {
    var h = decodeURIComponent(location.hash.slice(1));
    if (h === 'weak') { showWeak(); return; }
    if (document.body.classList.contains('weak-mode')) hideWeak();
    if (h.indexOf('n-') === 0 && nodeById[h.slice(2)]) openNode(h.slice(2), true);
    else if (byId[h]) openTopic(h, true, true);
    else close(true);
  });
  document.getElementById('p-close').addEventListener('click', function () { close(); });
  document.getElementById('scrim').addEventListener('click', function () { close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { if (pop.style.display === 'block') hidePop(); else close(); } });
  document.getElementById('p-focus').addEventListener('click', function () { if (current && current.type === 'topic') { F.toggle(current.id); refresh(); } });
  tabs.addEventListener('click', function (e) { var b = e.target.closest('[data-tab]'); if (b) { tab = b.dataset.tab; renderTab(); } });
  function step(d) {
    var list = seq(); if (!current) return;
    var id = current.type === 'topic' ? current.id : (topicsForNode[current.id] || [])[0];
    var i = list.indexOf(id), j = i < 0 ? 0 : (i + d + list.length) % list.length;
    openTopic(list[j], true);
  }
  document.getElementById('p-prev').addEventListener('click', function () { step(-1); });
  document.getElementById('p-next').addEventListener('click', function () { step(1); });

  // ---------- Why it works: the basic science behind lines in these notes (data/basics.js) ----------
  var BASICS = window.BASICS || {};
  function whyLink(id) {
    var n = (BASICS[id] || []).length;
    return n ? '<button class="whylink" data-gotab="why">💡 Why it works · ' + n + ' line' + (n > 1 ? 's' : '') + ' in these notes explained</button>' : '';
  }
  function whyHtml(id) {
    var list = BASICS[id] || [];
    return '<div class="whywrap"><p class="whyhint">The reason behind lines that are already in these notes, from your A&amp;P, chemistry, microbiology, pharmacology and psychology books. Nothing new to memorize: it is here so the notes make sense.</p>' +
      list.map(function (e, i) {
        return '<div class="whycard"><div class="says"><span>In your notes</span>“' + esc(e.says) + '”</div><div class="because">' + esc(e.why) + '</div>' +
          '<div class="whyfoot"><span class="whysrc">' + esc(e.src) + '</span><button class="pill" data-jump="' + i + '">See it in the notes →</button></div></div>';
      }).join('') + '</div>';
  }
  // Highlights a quoted line in the rendered notes, across bold/italic tags, and opens any
  // collapsed paragraph it sits in.
  function markAnchor(root, text) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), parts = [], full = '';
    while (walker.nextNode()) { parts.push({ n: walker.currentNode, at: full.length }); full += walker.currentNode.nodeValue; }
    var at = full.indexOf(text);
    if (at < 0) { at = full.toLowerCase().indexOf(text.toLowerCase()); }
    if (at < 0) return null;
    var end = at + text.length, first = null;
    parts.forEach(function (p) {
      var a = p.at, b = p.at + p.n.nodeValue.length;
      if (b <= at || a >= end) return;
      var node = p.n, from = Math.max(at, a) - a, to = Math.min(end, b) - a;
      if (to < node.nodeValue.length) node.splitText(to);
      if (from > 0) node = node.splitText(from);
      var m = document.createElement('mark'); m.className = 'why-mark';
      node.parentNode.insertBefore(m, node); m.appendChild(node);
      if (!first) first = m;
    });
    for (var el = first && first.parentElement; el && el !== root; el = el.parentElement) if (el.tagName === 'DETAILS') el.open = true;
    return first;
  }
  body.addEventListener('click', function (e) {
    var g = e.target.closest('[data-gotab]');
    if (g) { tab = g.dataset.gotab; renderTab(); return; }
    var j = e.target.closest('[data-jump]');
    if (!j || !current || current.type !== 'topic') return;
    var entry = (BASICS[current.id] || [])[+j.dataset.jump]; if (!entry) return;
    tab = 'notes'; renderTab();
    var m = markAnchor(body.querySelector('.notes') || body, entry.says);
    if (m) setTimeout(function () { m.scrollIntoView({ block: 'center', behavior: 'smooth' }); }, 30);
  });

  function renderTab(delay) {
    tabs.querySelectorAll('[data-tab]').forEach(function (b) { b.setAttribute('aria-selected', b.dataset.tab === tab); });
    hidePop(); body.scrollTop = 0; delay = delay || 0;
    var t = current.type === 'topic' ? byId[current.id] : null;
    var nodes = t ? (nodesFor[t.id] || []).map(function (n) { return nodeById[n]; }) : [nodeById[current.id]];
    if (tab === 'notes' && t) {
      var hasShort = !!(window.NOTES_SHORT || {})[t.id];
      body.innerHTML = '<div class="bdwrap' + (quiz && hasShort ? ' quiz' : '') + '">' + whyLink(t.id) + (hasShort ? bdToolbar('notes') : '') + picturesHtml(picsFor(t.id, nodesFor[t.id])) + videosHtml(vidsFor(t.id, null)) + '<div class="notes">' + t.html + '</div></div>';
      if (hasShort && bdMode === 'quick') shortenNotes(body.querySelector('.notes'), t.id);
      markWordsLater(body.querySelector('.notes'), delay);
    } else if (tab === 'why' && t) {
      body.innerHTML = whyHtml(t.id);
      markWordsLater(body, delay);
    } else if (tab === 'breakdown') {
      body.innerHTML = '<div class="bdwrap' + (quiz ? ' quiz' : '') + '">' + bdToolbar() + (t ? '' : picturesHtml(picsFor(null, [current.id])) + videosHtml(vidsFor(null, [current.id]))) + nodes.map(breakdownHtml).join('<hr style="border:0;border-top:1px solid var(--color-divider);margin:26px 0">') + '</div>';
      markWordsLater(body, delay);
    } else if (tab === 'words') {
      var text = t ? textOf[t.id] : JSON.stringify(nodes[0]);
      var ws = wordsIn(text);
      body.innerHTML = ws.length ? '<p class="empty-note" style="margin:0 0 10px">' + ws.length + ' words from this ' + (t ? 'topic' : 'mechanism') + ', in plain language. In the notes, any dotted-underlined word can be tapped too.</p><div class="words">' +
        ws.map(function (w) { return '<div class="word"><b>' + esc(w.term) + '</b>' + esc(w.def) + '</div>'; }).join('') + '</div>' : '<p class="empty-note">No glossary words found here.</p>';
    } else if (tab === 'links') {
      body.innerHTML = connectionsHtml(t, nodes);
    }
  }

  // ---------- Pictures: openly licensed images (data/images.js), credited, tap to enlarge ----------
  var PICS = window.IMAGES || [];
  function picsFor(topicId, nodeIds) {
    var out = [];
    PICS.forEach(function (p, i) {
      var on = (topicId && (p.topics || []).indexOf(topicId) >= 0) || (!topicId && (nodeIds || []).some(function (n) { return (p.nodes || []).indexOf(n) >= 0; }));
      if (on) out.push(i);
    });
    return out;
  }
  function credit(p) { return esc(p.credit) + ' · ' + esc(p.license); }
  function picturesHtml(list) {
    if (!list.length) return '';
    return '<div class="pics-h">Pictures · tap to enlarge</div><div class="pics' + (list.length === 1 ? ' one' : '') + '">' + list.map(function (i) {
      var p = PICS[i];
      return '<figure class="pic" data-pic="' + i + '"><img src="' + esc(p.file) + '" alt="' + esc(p.caption) + '" loading="lazy" decoding="async" onerror="this.closest(\'figure\').style.display=\'none\'"><figcaption>' + esc(p.caption) + '<small>' + credit(p) + '</small></figcaption></figure>';
    }).join('') + '</div>';
  }
  // Videos: YouTube embeds that load only when tapped (privacy-enhanced youtube-nocookie player).
  var VIDS = window.VIDEOS || [];
  function vidsFor(topicId, nodeIds) {
    return VIDS.filter(function (v) {
      return topicId ? (v.topics || []).indexOf(topicId) >= 0 : (nodeIds || []).some(function (n) { return (v.nodes || []).indexOf(n) >= 0; });
    });
  }
  // Some owners turn off playing on other sites. The YouTube player reports that as error 101/150;
  // then the frame becomes a "Watch on YouTube" button, and it is remembered so next time it starts that way.
  var NOEMBED = {};
  try { NOEMBED = JSON.parse(localStorage.getItem('map-noembed') || '{}'); } catch (e) {}
  function ytUrl(id) { return 'https://www.youtube.com/watch?v=' + encodeURIComponent(id); }
  function outHtml(id) {
    return '<img src="https://i.ytimg.com/vi/' + esc(id) + '/hqdefault.jpg" alt="" loading="lazy" decoding="async">' +
      '<a class="vid-out" href="' + ytUrl(id) + '" target="_blank" rel="noopener"><b>▶ Watch on YouTube</b><span>The owner only allows this video to play on YouTube</span></a>';
  }
  function videosHtml(list) {
    if (!list.length) return '';
    return '<div class="pics-h">Videos · see it happen</div><div class="vids">' + list.map(function (v) {
      var out = NOEMBED[v.id];
      return '<div class="vid"><div class="vid-frame"' + (out ? '' : ' data-vid="' + esc(v.id) + '" role="button" tabindex="0" aria-label="Play: ' + esc(v.title) + '"') + '>' +
        (out ? outHtml(v.id) : '<img src="https://i.ytimg.com/vi/' + esc(v.id) + '/hqdefault.jpg" alt="" loading="lazy" decoding="async"><i class="play" aria-hidden="true"></i>') + '</div>' +
        '<div class="vid-body"><b>' + esc(v.title) + '</b><span>Watch for: ' + esc(v.see) + '</span>' +
        '<a href="' + ytUrl(v.id) + '" target="_blank" rel="noopener">Open on YouTube ↗</a></div></div>';
    }).join('') + '</div>';
  }
  function noEmbed(el, id) {
    NOEMBED[id] = 1;
    try { localStorage.setItem('map-noembed', JSON.stringify(NOEMBED)); } catch (e) {}
    el.removeAttribute('data-vid'); el.removeAttribute('role'); el.removeAttribute('tabindex');
    el.innerHTML = outHtml(id);
  }
  var ytReady = null;
  function loadYT() {
    if (ytReady) return ytReady;
    ytReady = new Promise(function (ok, fail) {
      if (window.YT && window.YT.Player) return ok();
      var prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function () { if (prev) prev(); ok(); };
      var s = document.createElement('script'); s.src = 'https://www.youtube.com/iframe_api'; s.onerror = fail;
      document.head.appendChild(s);
    });
    return ytReady;
  }
  function plainFrame(el, id) {
    el.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0&playsinline=1" title="Video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
  }
  function playVid(el) {
    var id = el.dataset.vid;
    if (!id || el.querySelector('iframe') || el.dataset.loading) return;
    el.dataset.loading = '1';
    loadYT().then(function () {
      var box = document.createElement('div'); el.innerHTML = ''; el.appendChild(box);
      new YT.Player(box, {
        host: 'https://www.youtube-nocookie.com', videoId: id, width: '100%', height: '100%',
        playerVars: { autoplay: 1, rel: 0, playsinline: 1 },
        events: { onError: function (e) { if (e.data === 101 || e.data === 150 || e.data === 153) noEmbed(el, id); } }
      });
    }, function () { plainFrame(el, id); });
  }
  body.addEventListener('click', function (e) { var f = e.target.closest('[data-vid]'); if (f) playVid(f); });
  body.addEventListener('keydown', function (e) { var f = e.target.closest('[data-vid]'); if (f && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); playVid(f); } });

  var lb = document.createElement('div'); lb.className = 'lb'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true');
  lb.innerHTML = '<button class="btn" type="button" aria-label="Close picture">Close</button><img alt=""><p></p>';
  document.body.appendChild(lb);
  function openPic(i) {
    var p = PICS[i]; lb.querySelector('img').src = p.file; lb.querySelector('img').alt = p.caption;
    lb.querySelector('p').innerHTML = esc(p.caption) + '<small>' + credit(p) + ' · <a href="' + esc(p.source) + '" target="_blank" rel="noopener">source</a></small>';
    lb.classList.add('on');
  }
  lb.addEventListener('click', function (e) { if (!e.target.closest('a')) lb.classList.remove('on'); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') lb.classList.remove('on'); });
  body.addEventListener('click', function (e) { var f = e.target.closest('[data-pic]'); if (f) openPic(+f.dataset.pic); });

  // ---------- Breakdown: the one-line key first, every detail one tap away ----------
  var KEYS = window.CONCEPT_KEYS || {};
  var bdMode = 'quick', quiz = false;
  try { bdMode = localStorage.getItem('e2-bd-mode') || 'quick'; quiz = localStorage.getItem('e2-bd-quiz') === '1'; } catch (e) {}
  // Splits a dense sentence block into one line per sentence and colours the arrows, so it reads as steps.
  function fmt(text) {
    var safe = esc(text).replace(/e\.g\./g, 'e·g·');
    var lines = safe.split(/(?<=\.)\s+(?=[A-Z0-9α-ωΑ-Ω₀-₉(])/);
    return lines.map(function (l) {
      l = l.replace(/e·g·/g, 'e.g.')
        .replace(/^([A-Za-z0-9 /()₀-₉⁺⁻²+-]{2,26}):\s/, '<b>$1:</b> ')
        .replace(/→/g, '<i class="ar">→</i>').replace(/↑/g, '<i class="up">↑</i>').replace(/↓/g, '<i class="dn">↓</i>');
      return '<div class="ln">' + l + '</div>';
    }).join('');
  }
  function arrows(h) { return h.replace(/→/g, '<i class="ar">→</i>').replace(/↑/g, '<i class="up">↑</i>').replace(/↓/g, '<i class="dn">↓</i>'); }
  function more(n, label, inner) { return n > 0 ? '<details class="more"' + (bdMode === 'full' ? ' open' : '') + '><summary>' + label + '</summary>' + inner + '</details>' : ''; }
  var TILES = [['see', 'What you see', 'M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'], ['labs', 'Labs', 'M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3'], ['do', 'What you do', 'M5 12l4 4L19 6'], ['teach', 'Teach', 'M4 5h16v11H8l-4 4Z']];
  function tile(n, t) {
    var arr = n[t[0]] || []; if (!arr.length) return '';
    var li = function (x) { return '<li>' + fmt(x) + '</li>'; };
    return '<div class="tile"><div class="th"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + t[2] + '"/></svg>' + t[1] + '<span>' + arr.length + '</span></div><ul>' + arr.slice(0, 3).map(li).join('') + '</ul>' +
      more(arr.length - 3, '+' + (arr.length - 3) + ' more', '<ul>' + arr.slice(3).map(li).join('') + '</ul>') + '</div>';
  }
  function chainHtml(c) { return '<div class="chain">' + c.map(function (x, i) { return '<span' + (i ? ' class="cover"' : '') + '>' + esc(x) + '</span>'; }).join('<i>→</i>') + '</div>'; }
  function bdToolbar(where) {
    return '<div class="bdbar"><div class="seg2" role="group" aria-label="How much to show">' +
      '<button data-bd="quick" aria-pressed="' + (bdMode === 'quick') + '">Quick</button><button data-bd="full" aria-pressed="' + (bdMode === 'full') + '">Full</button></div>' +
      '<button class="pill' + (quiz ? ' on' : '') + '" data-quiz>' + (quiz ? 'Testing — tap to reveal' : 'Test me') + '</button>' +
      (quiz ? '<button class="pill" data-revealall>Reveal all</button>' : '') + '</div>' +
      '<p class="bdhint">' + (where === 'notes' ? (bdMode === 'full' ? 'Full: the original notes, word for word. Switch to Quick for the short version.' : quiz ? 'Key terms are hidden. Say each one, then tap to check.' : 'Quick: each paragraph as short bullets with every fact kept. Tap “Full paragraph” under any one to read the original.') : quiz ? 'Keys and chain steps are hidden. Say them out loud, then tap to check.' : bdMode === 'quick' ? 'Quick shows the key ideas. Tap any row to open the full detail, or switch to Full.' : 'Everything is open. Switch to Quick for just the key ideas.') + '</p>';
  }
  // ---------- Notes: short bullets in place of each wordy paragraph ----------
  function letters(x) { return String(x).toLowerCase().replace(/[^a-z]/g, ''); }
  function blockKey(head, n) { return letters(head) + (n > 1 ? '#' + n : ''); }
  // Same rule as tools/dump_note_blocks.py: a labeled cell (an optional "On exam" badge, a short label <div>, then running text);
  // a leaf block that opens with "<b>Label</b> —" (or with <b> and runs 250+ characters); a "Why" side box; or any other
  // leaf paragraph of 200+ characters (head "¶", matched to a short version by its opening letters).
  var INLINE = { B: 1, I: 1, EM: 1, STRONG: 1, SPAN: 1, BR: 1, A: 1, SUB: 1, SUP: 1, U: 1, SMALL: 1 };
  function noteBlocks(root) {
    var out = [], seen = {};
    root.querySelectorAll('div, p').forEach(function (d) {
      if (d.closest('.sn')) return;
      var kids = [].filter.call(d.childNodes, function (c) { return c.nodeType === 1 || (c.nodeType === 3 && c.nodeValue.trim()); });
      if (!kids.length) return;
      var len = function (el) { return el.textContent.replace(/\s+/g, ' ').trim().length; };
      var badge = kids[0].nodeType === 1 && kids[0].tagName === 'SPAN' && /on exam/i.test(kids[0].textContent);
      var k = badge && kids.length > 2 && kids[1].nodeType === 1 && kids[1].tagName === 'DIV' ? kids.slice(1) : kids;
      var lab = k[0], head = null, para = false;
      if (d.tagName === 'DIV' && lab.nodeType === 1 && lab.tagName === 'DIV' && !lab.querySelector('div, p') && len(lab) < 60 && k.length > 1 &&
          k.slice(1).every(function (c) { return c.nodeType === 3 || INLINE[c.tagName]; }) && len(d) - len(lab) >= 80) head = lab.textContent;
      else if (d.querySelector('div, p')) return;
      else {
        var first = kids[0], next = first.nextSibling;
        if (first.nodeType === 1 && first.tagName === 'B' && ((next && next.nodeType === 3 && /^\s*[—–]/.test(next.nodeValue)) || len(d) >= 250)) head = first.textContent;
        else if (d.tagName === 'DIV' && first.nodeType === 1 && first.tagName === 'SPAN' && /border-left:\s*2px solid var\(--color-accent/.test(d.getAttribute('style') || '')) head = first.textContent;
        else if (len(d) >= 180) { head = '¶'; para = true; } // a little under the tool's 200: its text keeps spaces around inline tags
        else return;
      }
      var key = para ? '¶' : letters(head); seen[key] = (seen[key] || 0) + 1;
      out.push({ el: d, head: head.replace(/\s+/g, ' ').trim(), n: para ? 1 : seen[key], para: para, exam: badge });
    });
    return out;
  }
  function bulletHtml(x) {
    return arrows(esc(x)).replace(/\*\*(.+?)\*\*/g, '<b class="cover">$1</b>').replace(/\*(.+?)\*/g, '<i>$1</i>');
  }
  function shortenNotes(root, id) {
    var data = (window.NOTES_SHORT || {})[id]; if (!data) return;
    var map = {}; Object.keys(data).forEach(function (k) { var m = k.match(/^(.*?)(#\d+)?$/); map[letters(m[1]) + (m[2] || '')] = { label: m[1], lines: data[k] }; });
    var paras = Object.keys(map).filter(function (k) { return /^\s*¶/.test(map[k].label); });
    noteBlocks(root).forEach(function (b) {
      var key = blockKey(b.head, b.n), hit = b.para ? null : map[key];
      if (b.para) { var txt = letters(b.el.textContent); paras.some(function (k) { var base = k.replace(/#\d+$/, ''); if (base.length >= 12 && txt.indexOf(base) === 0) { hit = map[k]; return true; } }); }
      if (!hit && !b.para) { // headings that carry an inline word breakdown end with the term itself
        var suffix = b.n > 1 ? '#' + b.n : '';
        Object.keys(map).some(function (k) { var base = k.replace(/#\d+$/, ''), kn = (k.match(/#\d+$/) || [''])[0]; if (kn === suffix && base.length > 5 && letters(b.head).slice(-base.length) === base) { hit = map[k]; return true; } });
      }
      if (!hit) return;
      var why = /^why$/i.test(hit.label.trim()), plain = /^\s*¶/.test(hit.label);
      var wrap = document.createElement('div'); wrap.className = 'sn' + (why ? ' sn-why' : '') + (b.exam ? ' sn-exam' : '');
      wrap.innerHTML = (b.exam ? '<span class="sn-badge">On exam</span>' : '') + (plain ? '' : '<div class="sn-h">' + esc(hit.label) + '</div>') + '<ul>' + hit.lines.map(function (l) { return '<li>' + bulletHtml(l) + '</li>'; }).join('') + '</ul><details class="more sn-full"><summary>Full paragraph</summary></details>';
      b.el.parentNode.replaceChild(wrap, b.el);
      wrap.querySelector('details').appendChild(b.el);
    });
  }

  function breakdownHtml(n) {
    if (!n) return '';
    var k = KEYS[n.id] || {}, open = bdMode === 'full' ? ' open' : '';
    var h = '<div class="bd">' + (nodesFor[current.id] && nodesFor[current.id].length > 1 ? '<div class="sec" style="margin-top:0">' + esc(n.name) + '</div>' : '');
    h += '<div class="hook"><small>Remember this</small><p class="cover">' + arrows(esc(k.gist || n.core)) + '</p>' + (k.gist ? more(1, 'Why — the full explanation', '<div class="full">' + fmt(n.core) + '</div>') : '') + '</div>';
    if (n.flag) h += '<div class="flag">' + fmt(n.flag) + '</div>';
    if (n.zoom) h += '<div class="sec">Organ → molecule</div><div class="ladder">' + n.zoom.map(function (z, i) {
      return '<details class="rung lv' + (i + 1) + '"' + open + '><summary><i class="dot" aria-hidden="true"></i><span class="lv">' + esc(z[0]) + '</span><b class="key cover">' + arrows(esc((k.zk || [])[i] || z[1])) + '</b></summary><div class="full">' + fmt(z[1]) + '</div></details>';
    }).join('') + '</div>';
    if (n.chains && n.chains.length) h += '<div class="sec">One thing leads to the next</div>' + n.chains.slice(0, 2).map(chainHtml).join('') +
      more(n.chains.length - 2, '+' + (n.chains.length - 2) + ' more chain' + (n.chains.length - 2 > 1 ? 's' : ''), n.chains.slice(2).map(chainHtml).join(''));
    var tiles = TILES.map(function (t) { return tile(n, t); }).join('');
    if (tiles) h += '<div class="sec">At the bedside</div><div class="tiles2">' + tiles + '</div>';
    if (n.meds && n.meds.length) h += '<div class="sec">Drugs · tap for target and what to watch</div>' + n.meds.map(function (m) {
      return '<details class="med"' + open + '><summary><b>' + esc(m[0]) + '</b><span class="cover">' + esc(m[2]) + '</span></summary><div class="mrow"><span>Acts on</span>' + fmt(m[1]) + '</div><div class="mrow watch"><span>Watch</span>' + fmt(m[3]) + '</div></details>';
    }).join('');
    (n.tables || []).forEach(function (tb) {
      h += '<details class="more tbl"' + open + '><summary>Table · ' + esc(tb.title) + '</summary><div class="tablewrap"><table><tr>' + tb.cols.map(function (c) { return '<th>' + esc(c) + '</th>'; }).join('') + '</tr>' +
        tb.rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + esc(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</table></div></details>';
    });
    return h + '</div>';
  }

  function connectionsHtml(t, nodes) {
    var out = [], seen = {}, linkedMechs = [];
    function add(id, why, kind) { if (seen[id] || (t && id === t.id) || !byId[id]) return; seen[id] = 1; out.push({ id: id, why: why, kind: kind }); }
    // 1. Links the Concept Map draws between breakdowns.
    nodes.forEach(function (n) {
      // Links to a mechanism show as that mechanism's button below, not as the topics it touches.
      (n.links || []).forEach(function (l) { if (nodeById[l[0]] && nodeById[l[0]].kind === 'mech') { linkedMechs.push(l[0]); return; } (topicsForNode[l[0]] || []).slice(0, 2).forEach(function (id) { add(id, l[1], 'Concept link'); }); });
    });
    // 2. Topics in other chapters whose key words show up here.
    if (t) {
      var text = textOf[t.id], scored = [];
      TOPICS.forEach(function (o) {
        if (o.ch === t.ch) return;
        var kw = F.keywordsFor(o); if (!kw) return;
        var m = text.match(new RegExp(kw.source, 'gi')); if (!m || m.length < 3) return;
        var uniq = []; m.forEach(function (x) { x = x.toLowerCase(); if (uniq.indexOf(x) < 0) uniq.push(x); });
        scored.push({ id: o.id, n: m.length, words: uniq.slice(0, 4) });
      });
      scored.sort(function (a, b) { return b.n - a.n; }).slice(0, 8).forEach(function (s) { add(s.id, 'Both talk about ' + s.words.join(', '), 'Shared idea'); });
      // 3. The rest of this chapter.
      order(t.ch).forEach(function (o) { add(o.id, 'Same chapter', 'Chapter ' + t.ch); });
    }
    var mechs = NODES.filter(function (m) {
      return m.kind === 'mech' && (linkedMechs.indexOf(m.id) >= 0 || (current.type === 'node' ? false : (topicsForNode[m.id] || []).indexOf(t.id) >= 0));
    });
    var h = '';
    if (current.type === 'node') h += '<p class="empty-note" style="margin:0 0 10px">Where this shows up:</p>';
    if (mechs.length) h += '<div class="sec" style="margin-top:0">' + (current.type === 'node' && nodeById[current.id].kind === 'mech' ? 'Related mechanisms' : 'Mechanisms behind this topic') + '</div><div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px">' + mechs.map(function (m) { return '<button class="pill" data-node="' + m.id + '">' + esc(m.name) + '</button>'; }).join('') + '</div>';
    if (current.type === 'node') (topicsForNode[current.id] || []).forEach(function (id) { add(id, 'Uses this mechanism', 'Topic'); });
    h += '<div class="conn">' + out.map(function (c) {
      var o = byId[c.id];
      return '<button data-go="' + c.id + '"><span class="c">' + esc(c.kind) + ' · ' + o.ch + '</span><b style="font-weight:500">' + esc(o.title) + '</b><small>' + esc(c.why) + '</small></button>';
    }).join('') + '</div>';
    return out.length || mechs.length ? h : '<p class="empty-note">No connections found.</p>';
  }
  body.addEventListener('click', function (e) {
    var mode = e.target.closest('[data-bd]');
    if (mode) { bdMode = mode.dataset.bd; try { localStorage.setItem('e2-bd-mode', bdMode); } catch (x) {} renderTab(); return; }
    if (e.target.closest('[data-quiz]')) { quiz = !quiz; try { localStorage.setItem('e2-bd-quiz', quiz ? '1' : '0'); } catch (x) {} renderTab(); return; }
    if (e.target.closest('[data-revealall]')) { body.querySelectorAll('.cover').forEach(function (c) { c.classList.add('shown'); }); return; }
    var cov = e.target.closest('.quiz .cover:not(.shown)');
    if (cov) { e.preventDefault(); cov.classList.add('shown'); return; }
    var go = e.target.closest('[data-go]'); if (go) { tab = 'notes'; openTopic(go.dataset.go); return; }
    var nb = e.target.closest('[data-node]'); if (nb) { openNode(nb.dataset.node); return; }
    var w = e.target.closest('.gw'); if (w) { showPop(w); e.stopPropagation(); return; }
    hidePop();
  });

  // ---------- Tap-to-define words in the notes ----------
  var pop = document.getElementById('pop');
  // Underlining is the slow part of opening a topic, so it runs after the panel has slid in,
  // a few milliseconds at a time, and stops if another topic or tab is opened first.
  var markJob = 0;
  function markWordsLater(root, delay) {
    var job = ++markJob;
    setTimeout(function () {
      if (job !== markJob || !root.isConnected) return;
      var done = {}, walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), nodes = [], i = 0;
      while (walker.nextNode()) nodes.push(walker.currentNode);
      (function slice() {
        if (job !== markJob || !root.isConnected) return;
        var until = performance.now() + 8;
        while (i < nodes.length && performance.now() < until) markNode(nodes[i++], done, nodes);
        if (i < nodes.length) setTimeout(slice, 0);
      })();
    }, delay);
  }
  function markNode(node, done, nodes) {
    (function () {
      if (!node.parentNode || !node.nodeValue.trim() || node.parentNode.closest('.gw, button, th')) return;
      var s = node.nodeValue, best = null;
      GRE.forEach(function (g, gi) {
        if (done[gi]) return;
        g.res.forEach(function (r) { var m = r.exec(s); if (m) { var at = m.index + m[1].length; if (!best || at < best.at) best = { at: at, len: m[2].length, gi: gi }; } });
      });
      if (!best) return;
      done[best.gi] = 1;
      // Underline the whole word, not just the stem the glossary matched.
      while (best.at > 0 && /[A-Za-z]/.test(s[best.at - 1])) { best.at--; best.len++; }
      while (best.at + best.len < s.length && /[A-Za-z]/.test(s[best.at + best.len])) best.len++;
      var after = node.splitText(best.at), rest = after.splitText(best.len);
      var span = document.createElement('span'); span.className = 'gw'; span.dataset.g = best.gi; span.tabIndex = 0;
      span.textContent = after.nodeValue; after.parentNode.replaceChild(span, after);
      nodes.push(rest); // keep scanning the remainder for other words
    })();
  }
  function showPop(el) {
    var g = GRE[+el.dataset.g]; pop.innerHTML = '<b>' + esc(g.term) + '</b>' + esc(g.def); pop.style.display = 'block';
    var r = el.getBoundingClientRect(), w = pop.offsetWidth, h = pop.offsetHeight;
    var x = Math.min(Math.max(12, r.left), innerWidth - w - 12), y = r.bottom + 8 + h > innerHeight - 12 ? r.top - h - 8 : r.bottom + 8;
    pop.style.left = x + 'px'; pop.style.top = Math.max(12, y) + 'px';
  }
  function hidePop() { pop.style.display = 'none'; }
  body.addEventListener('scroll', hidePop);
  body.addEventListener('keydown', function (e) { if (e.key === 'Enter' && e.target.classList.contains('gw')) showPop(e.target); });

  // Reference strip remembers whether you left it open.
  var rs = document.getElementById('refstrip');
  try { if (localStorage.getItem('e2-refstrip') === '1') rs.open = true; } catch (e) {}
  rs.addEventListener('toggle', function () { try { localStorage.setItem('e2-refstrip', rs.open ? '1' : '0'); } catch (e) {} });

  // ---------- Your weak areas, in full (from the last Mastery test) ----------
  // Everything for each weak topic on one page: the questions you missed, the notes in full, why it
  // works, the organ → molecule breakdowns fully open, and the drugs from those questions.
  var REASON = { words: 'Didn’t know what a word means', drug: 'Didn’t know the drug', look: 'Didn’t know what to look for', 'do': 'Didn’t know what to do', mech: 'Didn’t understand the why', fact: 'Didn’t know the fact or value', cue: 'Missed a cue', prio: 'Wrong priority', read: 'Misread the question', second: 'Second-guessed', guess: 'Pure guess' };
  var DRUG_FILES = X.drugFiles || [];
  var drugsLoaded = null;
  function loadDrugs() {
    if (drugsLoaded) return drugsLoaded;
    drugsLoaded = DRUG_FILES.reduce(function (pr, src) {
      return pr.then(function () { return new Promise(function (res) { var sc = document.createElement('script'); sc.src = src; sc.onload = res; sc.onerror = res; document.body.appendChild(sc); }); });
    }, Promise.resolve());
    return drugsLoaded;
  }
  function weakPlan() { return window.E2Weak.plan(function (t) { return !!byId[t]; }, X.store); }
  function lines(t) { return esc(t == null ? '' : t); }
  function drugHtml(id) {
    var D = window.DRUG_DATA || { drugs: [] }, d = D.drugs.filter(function (x) { return x.id === id; })[0];
    if (!d) return '';
    var X = (window.DRUG_EXPLAIN || {})[id] || {}, W = (window.DRUG_WHY || {}), MORE = (window.DRUG_MORE || {})[id] || {};
    var row = function (k, v) { return v && v !== 'None.' ? '<dt>' + k + '</dt><dd>' + v + '</dd>' : ''; };
    var se = function (list) { return (list || []).length ? '<ul>' + list.map(function (x) { return '<li><b>' + esc(x[0]) + '</b> — ' + esc(x[1]) + '</li>'; }).join('') + '</ul>' : ''; };
    return '<div class="wk-drug"><h3>' + esc(d.n) + (d.b ? ' <span style="font-weight:400;color:var(--color-neutral-400);font-size:14px">(' + esc(d.b) + ')</span>' : '') + '</h3><div class="cls">' + esc(d.c || '') + '</div><dl>' +
      row('Used for', lines(d.ind)) +
      row('How it works', lines(d.moa) + (X.steps ? '<ol>' + X.steps.map(function (s2) { return '<li>' + esc(s2) + '</li>'; }).join('') + '</ol>' : '')) +
      row('In plain words', lines(d.plain)) +
      row('Side effects', se(d.se)) + row('Serious', se(d.sae)) + row('Black box', lines(d.bbw)) +
      row('Don’t give if', lines(d.contra)) + row('Interactions', lines(d.inter)) +
      row('Before giving', lines(d.pre)) + row('Hold if', lines(d.hold)) + row('Stop if', lines(d.stop)) +
      row('Monitor', lines(d.mon)) + row('It’s working if', lines(d.work)) + row('Teach', lines(d.teach || MORE.teach)) +
      row('If it goes wrong', lines(d.emerg || MORE.emerg)) + row('Trap', lines(d.trap || X.trap)) +
      '</dl></div>';
  }
  function weakHtml(plan) {
    if (!plan) return '<div class="wk-head"><div class="kicker">Mastery test</div><h1>Your weak areas, in full</h1><p class="lead">Take the Mastery test first. Afterwards this page shows everything for the topics you missed, in full, on one page.</p><p><a class="pill" href="' + encodeURI(X.mastery) + '">Go to the Mastery test →</a> <button class="pill" data-weak-close>← Back to the map</button></p></div>';
    var R = plan.R, saveBd = bdMode, saveQuiz = quiz, saveCur = current;
    bdMode = 'full'; quiz = false;
    var when = new Date(R.at).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
    var h = '<div class="wk-head"><div class="kicker">From Mastery test ' + esc(R.no) + ' · ' + esc(when) + ' · ' + esc(R.pct) + '%</div><h1>Your weak areas, in full</h1>' +
      '<p class="lead">Only this test — nothing from earlier tests or the pre-test. For each topic you missed or guessed: what you missed, the notes in full, why it works, the breakdowns and the drugs. Just scroll.</p>' +
      '<p style="margin:10px 0 0;display:flex;flex-wrap:wrap;gap:6px"><a class="pill on" href="' + encodeURI(X.mastery) + '#redo">Redo my misses →</a> <button class="pill" data-weak-close>← Back to the map</button></p></div>';
    if (!plan.rank.length) { bdMode = saveBd; quiz = saveQuiz; return h + '<p class="lead">No weak topics in your last test. Nice work.</p>'; }
    h += '<nav class="glass wk-toc" style="padding:12px">' + plan.rank.map(function (t, i) { return '<a href="#weak-' + t + '">' + (i + 1) + '. ' + esc(byId[t].title) + '</a>'; }).join('') + '</nav>';
    if ((R.looked || []).length && window.E2Say) {
      h += '<div class="glass" style="padding:14px"><div class="wk-sec" style="border:0;padding:0;margin:0 0 10px">Words you looked up during the test</div><div class="wk-words">' +
        R.looked.map(function (w) { var m = window.E2Say.meaning(w) || {}; return '<div><b>' + esc(w) + '</b>' + (m.full ? ' — ' + esc(m.full) : '') + (m.def ? '<br><span style="color:var(--color-neutral-300)">' + esc(m.def) + '</span>' : '') + '</div>'; }).join('') + '</div></div>';
    }
    plan.rank.forEach(function (tid, i) {
      var t = byId[tid], st = plan.stat[tid];
      current = { type: 'topic', id: tid };
      var nodeIds = [], drugIds = [];
      (nodesFor[tid] || []).concat([].concat.apply([], st.recs.map(function (r) { return r.nodes || []; }))).forEach(function (n) { if (nodeById[n] && nodeIds.indexOf(n) < 0) nodeIds.push(n); });
      st.recs.forEach(function (r) { (r.drugs || []).forEach(function (d) { if (drugIds.indexOf(d) < 0) drugIds.push(d); }); });
      h += '<article class="glass wk-topic" id="weak-' + tid + '"><div class="kicker">' + (i + 1) + ' of ' + plan.rank.length + ' · Chapter ' + esc(t.ch) + ' · ' + esc(t.chTitle) + '</div><h2>' + esc(t.title) + '</h2>' +
        '<div class="wk-stat">' + st.miss + ' of ' + st.n + ' missed or guessed on this test</div>';
      if (st.recs.length) {
        h += '<div class="wk-sec">What you missed</div>' + st.recs.map(function (r) {
          var why = (r.why || []).map(function (k) { return REASON[k] || k; }).join(' · ');
          return '<div class="wk-miss"><div class="q">' + esc(r.q || '') + '</div><span>You</span><span class="yours">' + esc(r.your || '') + '</span><span>Correct</span><span class="ok">' + esc(r.correct || '') + '</span>' +
            ((r.missed || []).length ? '<span>You missed</span><span>' + esc(r.missed.join('; ')) + '</span>' : why ? '<span>Why missed</span><span>' + esc(why) + '</span>' : '') + (r.rule ? '<span>Rule</span><span class="rule">' + esc(r.rule) + '</span>' : '') + '</div>';
        }).join('');
      }
      h += '<div class="wk-sec">The notes, in full</div>' + picturesHtml(picsFor(tid, nodesFor[tid])) + '<div class="notes">' + t.html + '</div>';
      var B = BASICS[tid] || [];
      if (B.length) h += '<div class="wk-sec">Why it works</div><div class="whywrap">' + B.map(function (e) { return '<div class="whycard"><div class="says"><span>In the notes above</span>“' + esc(e.says) + '”</div><div class="because">' + esc(e.why) + '</div><div class="whyfoot"><span class="whysrc">' + esc(e.src) + '</span></div></div>'; }).join('') + '</div>';
      if (nodeIds.length) h += '<div class="wk-sec">Organ → molecule</div>' + nodeIds.map(function (n) { return breakdownHtml(nodeById[n]); }).join('<hr style="border:0;border-top:1px solid var(--color-divider);margin:18px 0">');
      var dh = drugIds.map(drugHtml).join('');
      if (dh) h += '<div class="wk-sec">Drugs from the questions you missed</div>' + dh;
      h += '</article>';
    });
    bdMode = saveBd; quiz = saveQuiz; current = saveCur;
    return h;
  }
  var weakEl = document.getElementById('weak');
  function showWeak() {
    if (isOpen()) close(true);
    document.body.classList.add('weak-mode'); weakEl.hidden = false;
    weakEl.innerHTML = '<p class="lead">Loading your weak areas…</p>';
    loadDrugs().then(function () {
      weakEl.innerHTML = weakHtml(weakPlan());
      weakEl.querySelectorAll('.wk-topic').forEach(function (a) {
        var tid = a.id.slice(5);
        (BASICS[tid] || []).forEach(function (e) { markAnchor(a.querySelector('.notes'), e.says); });
      });
      markWordsLater(weakEl, 200);
      window.scrollTo(0, 0);
    });
  }
  function hideWeak() { document.body.classList.remove('weak-mode'); weakEl.hidden = true; weakEl.innerHTML = ''; }
  weakEl.addEventListener('click', function (e) {
    if (e.target.closest('[data-weak-close]')) { hideWeak(); try { history.pushState(null, '', location.pathname + location.search); } catch (x) {} window.scrollTo(0, 0); return; }
    var a = e.target.closest('a[href^="#weak-"]');
    if (a) { e.preventDefault(); var el = document.getElementById(a.getAttribute('href').slice(1)); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });

  // ---------- Start ----------
  buildMap(); refresh();
  var h = decodeURIComponent(location.hash.slice(1));
  try { history.replaceState(null, '', location.pathname + location.search + (h ? '#' + h : '')); } catch (e) {}
  if (h === 'weak') showWeak(); else if (h.indexOf('n-') === 0) openNode(h.slice(2), true); else if (byId[h]) openTopic(h, false, true);
  window.addEventListener('storage', function (e) { if (F.storageKeys.indexOf(e.key) >= 0) refresh(); });
})();
