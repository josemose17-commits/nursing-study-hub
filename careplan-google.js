// Explicit, reviewed export of the current syllabus form to a native Google Doc.
// The OAuth token lives only in the active call. No background upload or exam sync.
(function (root, factory) {
  'use strict';
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else { root.CPGoogle = api; root.document.addEventListener('DOMContentLoaded', function () { api.mount(root); }); }
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';
  var DOC = 'application/vnd.google-apps.document';
  var WORD = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
  var SCOPE = 'https://www.googleapis.com/auth/drive.file';
  var BASE = 'https://www.googleapis.com/drive/v3/files';
  var UPLOAD = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,mimeType,webViewLink';
  var STORAGE = 'cp-google-exports';
  function configured(id) { return /^\d+-[a-zA-Z0-9_-]+\.apps\.googleusercontent\.com$/.test(id || ''); }
  function docLink(file) {
    if (!file || file.mimeType !== DOC || !/^[A-Za-z0-9_-]{6,180}$/.test(file.id || '')) throw new Error('Google did not confirm a native Google Doc. Check your Drive before trying another copy.');
    return 'https://docs.google.com/document/d/' + file.id + '/edit';
  }
  function same(a, b) {
    if (!a || !b || a.patient !== b.patient || a.bytes.length !== b.bytes.length) return false;
    for (var i = 0; i < a.bytes.length; i++) if (a.bytes[i] !== b.bytes[i]) return false;
    return true;
  }
  function multipart(snapshot, requestId, boundary) {
    var meta = { name: snapshot.title, mimeType: DOC, appProperties: { nrs114Export: requestId, syllabus: 'NRS114-WEC4-pp34-47' } };
    return new Blob([
      '--' + boundary + '\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n' + JSON.stringify(meta) + '\r\n',
      '--' + boundary + '\r\nContent-Type: ' + WORD + '\r\n\r\n', snapshot.bytes,
      '\r\n--' + boundary + '--\r\n'
    ], { type: 'multipart/related; boundary=' + boundary });
  }
  function failure(status) {
    if (status === 401) return 'Google authorization expired. Close this review and sign in again. No automatic retry was made.';
    if (status === 403) return 'Google denied this request. Check that Drive API is enabled and this account is allowed to use the site’s Google connection.';
    if (status === 429) return 'Google is limiting requests. Wait before trying again; no automatic retry was made.';
    return 'Google could not complete the request. Your answers remain saved in this browser.';
  }
  function controller(o) {
    var ready = null, busy = false, memory = [], memoryOnly = false, state = { phase: 'idle', busy: false }, now = o.now || Date.now;
    function emit(phase, message, extra) { state = Object.assign({ phase: phase, message: message, busy: busy, reviewReady: !!ready, patient: ready && ready.patient }, extra || {}); o.onState(state); return state; }
    function records() {
      if (memoryOnly) return memory;
      try { var v = JSON.parse(o.storage.getItem(STORAGE)); if (Array.isArray(v)) return v.filter(function (r) { return r && typeof r.patient === 'string' && typeof r.fingerprint === 'string' && configured(r.clientId) && ['pending','done','failed'].indexOf(r.status) >= 0 && /^[A-Za-z0-9_-]{12,100}$/.test(r.requestId || '') && (!r.id || /^[A-Za-z0-9_-]{6,180}$/.test(r.id)); }); } catch (_) {}
      return memory;
    }
    function save(rec) {
      memory = records().filter(function (r) { return r.requestId !== rec.requestId; }).concat(rec).slice(-40);
      try { o.storage.setItem(STORAGE, JSON.stringify(memory)); return true; } catch (_) { memoryOnly = true; return false; }
    }
    function match() { return ready && records().slice().reverse().find(function (r) { return r.patient === ready.patient && r.fingerprint === ready.fingerprint && r.clientId === o.clientId && r.status !== 'failed'; }); }
    function capture() {
      var s = o.snapshot();
      if (!s || !s.patient || !s.bytes || !s.bytes.length || s.bytes.length > 5 * 1024 * 1024) throw new Error('This document cannot be sent. Use the Word download for documents larger than 5 MB.');
      return { patient: s.patient, bytes: new Uint8Array(s.bytes), text: String(s.text || ''), hasAnswers: s.hasAnswers !== false, title: String(s.title || 'NRS 114 Care plan').slice(0, 150) };
    }
    async function prepare() {
      if (busy) return state;
      busy = true; emit('preparing', 'Preparing the current care plan for review…');
      try {
        ready = null; ready = capture();
        if (!ready.hasAnswers) { var blankPreview = ready.text; ready = null; busy = false; return emit('empty', 'Enter your care-plan answers first, then return here to create the filled Google Doc.', { preview: blankPreview }); }
        if (!configured(o.clientId)) { busy = false; return emit('setup', 'Google Docs creation needs a one-time connection setup for this website. No information has been sent to Google.', { preview: ready.text }); }
        ready.fingerprint = await o.digest(ready.bytes);
        if (!same(ready, capture())) { ready = null; throw new Error('Your form changed. Review it again before creating the document.'); }
        var previous = match();
        busy = false;
        if (previous && previous.status === 'done') return emit('exists', 'A Google Doc was already created from these same answers. Open it, or explicitly create another copy.', { preview: ready.text, url: docLink({ id: previous.id, mimeType: DOC }) });
        return emit(previous ? 'pending' : 'review', previous ? 'The last creation attempt is unconfirmed. Check it before creating another copy.' : 'Review these answers. Creating the document sends this form to the Google account you choose.', { preview: ready.text });
      } catch (e) { ready = null; busy = false; return emit('error', e.message); }
    }
    async function request(url, options, token) {
      var abort = new AbortController(), timeout = setTimeout(function () { abort.abort(); }, 45000), response;
      try {
        response = await o.fetch(url, Object.assign({ method: 'GET', mode: 'cors', cache: 'no-store', credentials: 'omit', referrerPolicy: 'no-referrer', signal: abort.signal }, options || {}, { headers: Object.assign({}, (options || {}).headers, { Authorization: 'Bearer ' + token }) }));
        var data; try { data = await response.json(); } catch (_) { throw new Error('Google returned an unreadable response. Check the last attempt before making another copy.'); }
        if (!response.ok) { var err = new Error(failure(response.status)); err.status = response.status; throw err; }
        return data;
      } finally { clearTimeout(timeout); }
    }
    async function check(rec, token) {
      var file;
      if (rec.id) file = await request(BASE + '/' + encodeURIComponent(rec.id) + '?fields=id,name,mimeType,webViewLink', null, token);
      else {
        var q = "trashed = false and appProperties has { key='nrs114Export' and value='" + rec.requestId + "' }";
        var result = await request(BASE + '?q=' + encodeURIComponent(q) + '&fields=files(id,name,mimeType,webViewLink)&pageSize=10', null, token);
        if (!Array.isArray(result.files)) throw new Error('Google did not return a usable search result. No new document was created.');
        if (!result.files.length) return null;
        file = result.files[0];
      }
      var url = docLink(file); rec.id = file.id; rec.status = 'done'; save(rec); return url;
    }
    function commit(newCopy) {
      if (busy) return Promise.resolve(state);
      if (!configured(o.clientId)) return Promise.resolve(emit('setup', 'Google Docs creation needs the website’s Google connection first. No information was sent.'));
      if (!ready) return Promise.resolve(emit('changed', 'Close this review and review the current form again. No information was sent.'));
      try { if (!same(ready, capture())) throw new Error('The selected patient or answers changed. Close this review and review the current form again.'); }
      catch (e) { ready = null; return Promise.resolve(emit('changed', e.message)); }
      var previous = match();
      if (previous && previous.status === 'done' && !newCopy) return Promise.resolve(emit('exists', 'Open the document already created from these answers.', { url: docLink({ id: previous.id, mimeType: DOC }) }));
      busy = true; emit('authorizing', 'Choose your Google account and allow creation of this document…');
      // Start the popup synchronously inside the visitor’s button event (before any await).
      var authorization; try { authorization = o.authorize(); } catch (e) { busy = false; return Promise.resolve(emit('error', e.message)); }
      return (async function () {
        var rec = previous && !newCopy ? previous : null, writeStarted = false, token;
        try {
          token = await authorization;
          if (!token) throw new Error('Google access was not granted. No document was created.');
          if (!same(ready, capture())) throw new Error('The selected patient or answers changed during sign-in. Close this review and review the current form again.');
          // Another tab/attempt may have completed while Google's chooser was open.
          rec = newCopy ? null : match();
          if (rec) {
            emit('checking', 'Checking the last attempt in your selected Google account…');
            var found = await check(rec, token);
            busy = false;
            return found ? emit('done', 'Your filled Google Doc is ready.', { url: found }) : emit('pending', 'Google has not returned the last document yet. Check again later or explicitly create another copy, which could duplicate it.');
          }
          rec = { patient: ready.patient, fingerprint: ready.fingerprint, clientId: o.clientId, requestId: o.randomId(), status: 'pending', at: now() };
          if (!/^[A-Za-z0-9_-]{12,100}$/.test(rec.requestId)) throw new Error('Could not prepare a unique creation attempt. No document was sent.');
          save(rec); emit('uploading', 'Creating your filled Google Doc in the syllabus layout…');
          var boundary = 'nrs114_' + rec.requestId, body = multipart(ready, rec.requestId, boundary);
          writeStarted = true;
          var file = await request(UPLOAD, { method: 'POST', headers: { 'Content-Type': body.type }, body: body }, token);
          docLink(file); rec.id = file.id; save(rec);
          emit('checking', 'Confirming Google created an editable Google Doc…');
          var url = await check(rec, token);
          busy = false; return emit('done', 'Your filled Google Doc is ready. Later edits on the site do not change this saved copy.', { url: url });
        } catch (e) {
          if (writeStarted && rec) {
            var rejected = !rec.id && e.status >= 400 && e.status < 500;
            rec.status = rejected ? 'failed' : 'pending'; save(rec);
            busy = false;
            return emit(rejected ? 'error' : 'pending', rejected ? e.message : 'The creation result is unconfirmed. Google may have saved it. Check the last attempt before creating another copy.');
          }
          busy = false; return emit(rec ? 'pending' : 'error', e.message || 'Google sign-in was closed. No document was created.');
        } finally { token = null; authorization = null; }
      })();
    }
    return { prepare: prepare, commit: commit, cancel: function () { if (busy) return false; ready = null; emit('idle', ''); return true; }, state: function () { return state; } };
  }
  function mount(w) {
    var d = w.document, button = d.getElementById('google-create'), dialog = d.getElementById('google-review');
    if (!button || !dialog || !w.CP_HELPER) return;
    var $ = function (id) { return d.getElementById(id); }, config = w.CP_GOOGLE_CONFIG || {}, library = null, libraryReady = false, authClient;
    function loadLibrary() {
      if (w.google && w.google.accounts && w.google.accounts.oauth2) { libraryReady = true; return Promise.resolve(); }
      if (library) return library;
      library = new Promise(function (resolve, reject) {
        var script = d.createElement('script'), timer = w.setTimeout(function () { failed(); }, 15000);
        function failed() { w.clearTimeout(timer); script.remove(); library = null; reject(new Error('Google sign-in could not load. Check your connection or content blocker, then reopen this review.')); }
        script.src = 'https://accounts.google.com/gsi/client'; script.async = true; script.referrerPolicy = 'no-referrer';
        script.onerror = failed; script.onload = function () { w.clearTimeout(timer); libraryReady = !!(w.google && w.google.accounts && w.google.accounts.oauth2); if (libraryReady) resolve(); else failed(); };
        d.head.appendChild(script);
      });
      return library;
    }
    function authorize() {
      if (!libraryReady) throw new Error('Google sign-in has not loaded. Reopen this review and try again.');
      return new Promise(function (resolve, reject) {
        var api = w.google.accounts.oauth2;
        authClient = api.initTokenClient({ client_id: config.clientId, scope: SCOPE, include_granted_scopes: false,
          callback: function (r) {
            if (!r || r.error || !r.access_token || !api.hasGrantedAllScopes(r, SCOPE)) return reject(new Error('Google permission was not granted. No information was uploaded.'));
            resolve(r.access_token);
          }, error_callback: function (e) { reject(new Error(e && e.type === 'popup_failed_to_open' ? 'Allow Google’s sign-in popup, then try again. No document was created.' : 'Google sign-in was closed. No document was created.')); }
        });
        authClient.requestAccessToken({ prompt: 'select_account' });
      });
    }
    function update(s) {
      $('google-status').textContent = s.message || '';
      $('google-review-status').textContent = s.message || '';
      if (s.preview != null) $('google-preview').textContent = s.preview;
      var link = $('google-open'); link.hidden = !s.url; if (s.url) link.href = s.url; else link.removeAttribute('href');
      var can = s.reviewReady && ['review','pending','error'].indexOf(s.phase) >= 0 && configured(config.clientId) && libraryReady;
      $('google-confirm').disabled = s.busy || !can;
      $('google-confirm').textContent = s.phase === 'pending' ? 'Check last attempt' : 'Create my Google Doc';
      $('google-another').hidden = ['done','exists','pending'].indexOf(s.phase) < 0;
      $('google-another').disabled = s.busy || !libraryReady;
      $('google-close').disabled = s.busy; button.disabled = s.busy;
      dialog.setAttribute('aria-busy', String(!!s.busy));
    }
    var c = controller({ clientId: config.clientId, snapshot: w.CP_HELPER.exportSnapshot, storage: w.localStorage, fetch: w.fetch.bind(w), authorize: authorize,
      digest: async function (bytes) { if (!w.crypto || !w.crypto.subtle) throw new Error('Open the secure HTTPS version of the study site to create a Google Doc. Your Word download is still available.'); var out = await w.crypto.subtle.digest('SHA-256', bytes); return Array.from(new Uint8Array(out)).map(function (n) { return n.toString(16).padStart(2, '0'); }).join(''); },
      randomId: function () { return Array.from(w.crypto.getRandomValues(new Uint8Array(16))).map(function (n) { return n.toString(16).padStart(2, '0'); }).join(''); }, onState: update });
    if (!configured(config.clientId)) $('google-status').textContent = 'Google Docs creation is waiting for the website’s one-time Google connection setup. Your completed form can still be reviewed and downloaded.';
    button.addEventListener('click', async function () {
      $('google-preview').textContent = ''; $('google-open').hidden = true;
      dialog.showModal();
      var s = await c.prepare();
      if (s.phase !== 'setup' && s.reviewReady && configured(config.clientId)) {
        try { await loadLibrary(); if (dialog.open) update(c.state()); }
        catch (e) { $('google-review-status').textContent = e.message; }
      }
    });
    $('google-confirm').addEventListener('click', function () { c.commit(false); });
    $('google-another').addEventListener('click', function () { c.commit(true); });
    $('google-close').addEventListener('click', function () { if (c.cancel()) dialog.close(); });
    dialog.addEventListener('cancel', function (e) { if (!c.cancel()) e.preventDefault(); });
    d.addEventListener('careplan-render', function () { if (!c.state().busy) { c.cancel(); if (dialog.open) dialog.close(); $('google-open').hidden = true; } });
  }
  return { controller: controller, mount: mount, configured: configured, docLink: docLink, multipart: multipart, scope: SCOPE, storageKey: STORAGE };
});
