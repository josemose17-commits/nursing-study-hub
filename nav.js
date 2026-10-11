// Floating glass tab bar linking the study pages. Re-attaches itself if a
// page re-renders its body, and marks the current page.
(function () {
  var TABS = [
    ['index.html', 'Home', 'M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z'],
    ['Exam 2 Map.html', 'Map', 'M6 6h.01M18 6h.01M12 18h.01M6 6l6 12 6-12M6 6h12'],
    ['Exam 2 Drug Cards.dc.html', 'Drugs', 'M10.5 4.5a4.95 4.95 0 0 1 7 7l-6 6a4.95 4.95 0 0 1-7-7Zm-3 3 7 7'],
    ['Exam 2 Mastery Loop.dc.html', 'Mastery', 'M20 12a8 8 0 1 1-2.3-5.6M20 4v5h-5'],
    ['Exam 2 Practice.html', 'Practice', 'M13 2 3 14h9l-1 8 10-12h-9l1-8z'],
    ['Reference Sheet.html', 'Ref', 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14ZM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5']
  ];
  var here = decodeURIComponent(location.pathname.split('/').pop() || 'index.html');
  var root = location.pathname.indexOf('/offline/') >= 0 ? '../' : '';
  function build() {
    // Six tabs: let each keep its label's width so the names don't run together on a phone.
    var st = document.createElement('style'); st.textContent = '.hub-tabs a { flex: 1 0 auto; }'; document.head.appendChild(st);
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

  // Moving progress between devices: everything this site saves (keys starting e2- / exam2-) is packed into a link.
  // Opening the link on another device asks first, then replaces that device's progress. The data rides in the
  // part of the address after #, which browsers never send to the server.
  var SYNC = /^(e2-|exam2-|map-noembed$)/;
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
    var M = null; try { M = JSON.parse(snap.d['e2-mastery-loop-v2'] || 'null'); } catch (e) {}
    var bits = [];
    if (M && M.history && M.history.length) bits.push(M.history.length + ' test' + (M.history.length > 1 ? 's' : '') + ' taken, last ' + M.history[M.history.length - 1].pct + '%');
    if (M && M.deck && M.deck.length) bits.push(M.deck.length + ' repair cards left');
    if (M && M.test) bits.push('a test in progress');
    if (snap.d['e2-focus']) bits.push('your focus topics');
    return (bits.length ? bits.join(', ') : 'your saved settings') + ' — saved ' + new Date(snap.at).toLocaleString();
  }
  window.E2Sync = { makeLink: makeLink };
  function importFromHash() {
  var hm = /#e2sync=([A-Za-z0-9_-]+)/.exec(location.hash);
  if (hm) {
    var clear = function () { try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {} };
    readLink(hm[1]).then(function (snap) {
      if (!snap || !snap.d) throw new Error('empty');
      if (!window.confirm('Load progress from the link?\n\n' + describe(snap) + '\n\nThis replaces the progress saved on this device.')) { clear(); return; }
      var old = []; for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (SYNC.test(k)) old.push(k); }
      old.forEach(function (k) { localStorage.removeItem(k); });
      Object.keys(snap.d).forEach(function (k) { if (SYNC.test(k)) localStorage.setItem(k, snap.d[k]); });
      clear(); location.reload();
    }).catch(function () { clear(); window.alert('That progress link is incomplete or damaged. Copy it again from the other device.'); });
  }
  }
  importFromHash();
  // The link may also be opened in a tab that already shows this site (only the part after # changes).
  window.addEventListener('hashchange', importFromHash);

  // Browsers keep a page for a few minutes, so a phone can show yesterday's version after an update.
  // version.json is never cached: if it names a newer build than this script, reload once to pick it up.
  // Bump BUILD here and in version.json together on every release.
  var BUILD = '202610110100';
  window.addEventListener('load', function () {
    if (!window.fetch || location.protocol === 'file:') return;
    fetch(root + 'version.json?t=' + Date.now(), { cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : null; }).then(function (v) {
      if (!v || !v.build || v.build <= BUILD) return;
      var k = 'e2-reloaded-' + v.build;
      try { if (sessionStorage.getItem(k)) return; sessionStorage.setItem(k, '1'); } catch (e) { return; }
      // A new address can't come from the browser cache, so this always fetches the new page.
      try { var u = new URL(location.href); u.searchParams.set('b', v.build); location.replace(u.toString()); } catch (e) { location.reload(); }
    }).catch(function () {});
  });
})();
