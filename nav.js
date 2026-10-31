// Floating glass tab bar linking the study pages. Re-attaches itself if a
// page re-renders its body, and marks the current page.
(function () {
  var here = decodeURIComponent(location.pathname.split('/').pop() || 'index.html');
  // The Map, Drugs and Mastery tabs open the exam this page belongs to ("Exam 3 Map.html" → Exam 3; "Final …" → the
  // final, 'F'); on Home and the reference sheet, the exam visited last.
  var em = /^Exam (\d+) /.exec(here), EXAM = em ? em[1] : /^Final /.test(here) ? 'F' : '';
  try {
    var last = localStorage.getItem('hub-exam') || '';
    // The final uses the Exam 3 drug cards: opened from the final, the tab bar stays on the final.
    if (EXAM === '3' && last === 'F' && /^Exam 3 Drug Cards/.test(here)) EXAM = 'F';
    if (EXAM) localStorage.setItem('hub-exam', EXAM); else EXAM = last;
  } catch (e) {}
  // Pages each exam has so far; a missing one gets no tab.
  var HAS = { '2': ['Map', 'Drugs', 'Mastery'], '3': ['Learn', 'Route', 'Map', 'Drugs', 'Mastery'], '4': ['Map'], '5': ['Map'], 'F': ['Map', 'Drugs', 'Mastery'] };
  if (!HAS[EXAM]) EXAM = '2';
  var PAGE = EXAM === 'F' ? { Learn: '', Route: '', Map: 'Final Map.html', Drugs: 'Exam 3 Drug Cards.dc.html', Mastery: 'Final Mastery Loop.dc.html' }
    : { Learn: 'Exam ' + EXAM + ' Learn.html', Route: 'Exam ' + EXAM + ' Route.html', Map: 'Exam ' + EXAM + ' Map.html', Drugs: 'Exam ' + EXAM + ' Drug Cards.dc.html', Mastery: 'Exam ' + EXAM + ' Mastery Loop.dc.html' };
  var TABS = [
    ['index.html', 'Home', 'M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z'],
    [PAGE.Learn, 'Learn', 'M4 3h6a2 2 0 0 1 2 2v16a4 4 0 0 0-4-2H4zM20 3h-6a2 2 0 0 0-2 2v16a4 4 0 0 1 4-2h4z'],
    [PAGE.Route, 'Route', 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm3 11 2.5 2.5L16 12'],
    [PAGE.Map, 'Map', 'M6 6h.01M18 6h.01M12 18h.01M6 6l6 12 6-12M6 6h12'],
    [PAGE.Drugs, 'Drugs', 'M10.5 4.5a4.95 4.95 0 0 1 7 7l-6 6a4.95 4.95 0 0 1-7-7Zm-3 3 7 7'],
    [PAGE.Mastery, 'Mastery', 'M20 12a8 8 0 1 1-2.3-5.6M20 4v5h-5'],
    ['Reference Sheet.html', 'Ref', 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14ZM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5']
  ].filter(function (t) { return !(t[1] in PAGE) || (t[0] && HAS[EXAM].indexOf(t[1]) >= 0); });
  window.E2Hub = { exam: EXAM };
  var root = location.pathname.indexOf('/offline/') >= 0 ? '../' : '';
  function build() {
    // Keep labels readable; the bar scrolls horizontally on narrow screens.
    var st = document.createElement('style'); st.textContent = '.hub-tabs { overflow-x:auto; } .hub-tabs a { flex: 1 0 auto; }'; document.head.appendChild(st);
    var nav = document.createElement('nav');
    nav.className = 'hub-tabs'; nav.setAttribute('aria-label', 'Study pages');
    TABS.forEach(function (t) {
      var a = document.createElement('a');
      a.href = root + encodeURI(t[0]);
      if (t[0] === here) a.setAttribute('aria-current', 'page');
      a.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + t[2] + '"/></svg><span>' + t[1] + '</span>';
      nav.appendChild(a);
    });
    return nav;
  }
  var nav;
  function attach() { if (!document.body) return; if (!nav) nav = build(); if (!document.body.contains(nav)) document.body.appendChild(nav); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', attach); else attach();
  // Fetch the other pages in the background once this one is idle, so switching tabs is quick.
  function prefetch() {
    TABS.forEach(function (t) {
      if (t[0] === here) return;
      var l = document.createElement('link'); l.rel = 'prefetch'; l.href = root + encodeURI(t[0]);
      document.head.appendChild(l);
    });
  }
  if (document.readyState === 'complete') setTimeout(prefetch, 1500); else window.addEventListener('load', function () { setTimeout(prefetch, 1500); });
  new MutationObserver(attach).observe(document.documentElement, { childList: true, subtree: true });

  // Moving progress between devices: everything this site saves (keys starting e2- / e3- / e4- / e5- / fin- / exam2- / sem- / clin-) is packed into a link.
  // Opening the link on another device asks first, then replaces that device's progress. The data rides in the
  // part of the address after #, which browsers never send to the server.
  var SYNC = /^(e2-|e3-|e4-|e5-|fin-|exam2-|sem-|clin-|map-noembed$)/;
  function b64(bytes) { var s = ''; for (var i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000)); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
  function unb64(t) { t = t.replace(/-/g, '+').replace(/_/g, '/'); while (t.length % 4) t += '='; var s = atob(t), out = new Uint8Array(s.length); for (var i = 0; i < s.length; i++) out[i] = s.charCodeAt(i); return out; }
  function pipe(bytes, stream) { return new Response(new Blob([bytes]).stream().pipeThrough(stream)).arrayBuffer().then(function (b) { return new Uint8Array(b); }); }
  function snapshot() {
    var d = {};
    for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (SYNC.test(k)) d[k] = localStorage.getItem(k); }
    return { v: 1, at: Date.now(), d: d };
  }
  function makeLink() {
    var bytes = new TextEncoder().encode(JSON.stringify(snapshot()));
    var base = location.href.split('#')[0].replace(/[^/]*$/, '') + 'index.html#e2sync=';
    if (window.CompressionStream) return pipe(bytes, new CompressionStream('deflate-raw')).then(function (z) { return base + 'z' + b64(z); }).catch(function () { return base + 'p' + b64(bytes); });
    return Promise.resolve(base + 'p' + b64(bytes));
  }
  function readLink(code) {
    var bytes = unb64(code.slice(1));
    var p = code[0] === 'z' ? pipe(bytes, new DecompressionStream('deflate-raw')) : Promise.resolve(bytes);
    return p.then(function (b) { return JSON.parse(new TextDecoder().decode(b)); });
  }
  function describe(snap) {
    var bits = [];
    [['Exam 2', snap.d['e2-mastery-v3'] || snap.d['e2-mastery-loop-v2']], ['Exam 3', snap.d['e3-mastery-v3']], ['Final', snap.d['fin-mastery-v1']]].forEach(function (x) {
      var M = null; try { M = JSON.parse(x[1] || 'null'); } catch (e) {}
      if (M && M.history && M.history.length) bits.push(x[0] + ': ' + M.history.length + ' test' + (M.history.length > 1 ? 's' : '') + ' taken, last ' + M.history[M.history.length - 1].pct + '%');
      if (M && M.deck && M.deck.length) bits.push(M.deck.length + ' repair cards left');
      if (M && M.test) bits.push((x[0] === 'Final' ? 'a ' : 'an ') + x[0] + ' test in progress');
    });
    if (snap.d['e2-focus'] || snap.d['e3-focus']) bits.push('your focus topics');
    var guided = null; try { guided = JSON.parse(snap.d['e3-learn-v1'] || 'null'); } catch (e) {}
    if (guided && guided.lessons && typeof guided.lessons === 'object') {
      var tried = Object.keys(guided.lessons).filter(function (id) { return guided.lessons[id] && guided.lessons[id].completedAt; }).length;
      bits.push('Exam 3 guided study: ' + tried + ' lessons attempted' + (guided.session && guided.session.stage !== 'done' ? ', one paused' : ''));
    }
    return (bits.length ? bits.join(', ') : 'your saved settings') + ' — saved ' + new Date(snap.at).toLocaleString();
  }
  // Loading a snapshot (from a link or a progress file): ask first, then replace this device's progress.
  function apply(snap) {
    if (!snap || !snap.d) throw new Error('empty');
    if (!window.confirm('Load this progress?\n\n' + describe(snap) + '\n\nThis replaces the progress saved on this device.')) return false;
    var old = []; for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (SYNC.test(k)) old.push(k); }
    old.forEach(function (k) { localStorage.removeItem(k); });
    Object.keys(snap.d).forEach(function (k) { if (SYNC.test(k)) localStorage.setItem(k, snap.d[k]); });
    return true;
  }
  // A progress file has no length limit, unlike a link (messaging apps cut long links).
  function makeFile() { return new File([JSON.stringify(snapshot())], 'nrs114-progress-' + new Date().toISOString().slice(0, 10) + '.json', { type: 'application/json' }); }
  function readFile(file) { return file.text().then(function (t) { return apply(JSON.parse(t)); }); }
  window.E2Sync = { makeLink: makeLink, makeFile: makeFile, readFile: readFile };
  function importFromHash() {
  var hm = /#e2sync=([A-Za-z0-9_-]+)/.exec(location.hash);
  if (hm) {
    var clear = function () { try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {} };
    readLink(hm[1]).then(function (snap) {
      var ok = apply(snap); clear(); if (ok) location.reload();
    }).catch(function () { clear(); window.alert('That progress link is incomplete — long links get cut off when they are sent. Use “Save progress file” on the other device instead, then “Open progress file” here.'); });
  }
  }
  importFromHash();
  // The link may also be opened in a tab that already shows this site (only the part after # changes).
  window.addEventListener('hashchange', importFromHash);

  // Browsers keep a page for a few minutes, so a phone can show yesterday's version after an update.
  // version.json is never cached: if it names a newer build than this script, reload once to pick it up — once per page,
  // since each page's HTML (and the data it names) is cached separately.
  // Bump BUILD here and in version.json together on every release.
  var BUILD = '202610312330';
  window.addEventListener('load', function () {
    if (!window.fetch || location.protocol === 'file:') return;
    // Builds before 202610282230 reloaded only once per session for every page. This page is already current, so clear
    // that flag: other pages still cached from an older build can then each reload once too.
    try { sessionStorage.removeItem('e2-reloaded-' + BUILD); } catch (e) {}
    fetch(root + 'version.json?t=' + Date.now(), { cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : null; }).then(function (v) {
      if (!v || !v.build || v.build <= BUILD) return;
      var k = 'e2-reloaded-' + v.build + '-' + location.pathname;
      try { if (sessionStorage.getItem(k)) return; sessionStorage.setItem(k, '1'); } catch (e) { return; }
      // A new address can't come from the browser cache, so this always fetches the new page.
      try { var u = new URL(location.href); u.searchParams.set('b', v.build); location.replace(u.toString()); } catch (e) { location.reload(); }
    }).catch(function () {});
  });
})();
