// APA papers page: the outline builder, paper patterns, reference builder and checklist. Logic lives in apa-core.js.
(function () {
  var A = window.APA, $ = function (id) { return document.getElementById(id); };
  function load(k, d) { try { var v = JSON.parse(localStorage.getItem('apa-' + k)); return v == null ? d : v; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem('apa-' + k, JSON.stringify(v)); } catch (e) {} }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function md(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\*([^*]+)\*/g, '<i>$1</i>'); }
  function segHtml(segs) { return segs.map(function (s) { return s.i ? '<i>' + esc(s.t) + '</i>' : esc(s.t); }).join(''); }
  function segText(segs) { return segs.map(function (s) { return s.t; }).join(''); }
  function copy(text, html) {
    try {
      if (html && window.ClipboardItem && navigator.clipboard && navigator.clipboard.write)
        return navigator.clipboard.write([new ClipboardItem({ 'text/html': new Blob([html], { type: 'text/html' }), 'text/plain': new Blob([text], { type: 'text/plain' }) })]);
      if (navigator.clipboard) return navigator.clipboard.writeText(text);
    } catch (e) {}
    var t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch (e) {} t.remove();
    return Promise.resolve();
  }
  function flash(btn, msg) { var o = btn.textContent; btn.textContent = msg; setTimeout(function () { btn.textContent = o; }, 1400); }

  // ---------- builder ----------
  var st = load('plan', { type: 'reflection', pages: 3, inclusive: false, abstract: false, optional: false, topic: '' });
  var me = load('me', {});
  var refs = load('refs', []);

  $('types').innerHTML = A.TYPES.map(function (T) {
    return '<button type="button" role="radio" data-type="' + T.id + '"><b>' + esc(T.name) + '</b><small>' + esc(T.eg) + '</small></button>';
  }).join('');
  $('types').addEventListener('click', function (e) { var b = e.target.closest('[data-type]'); if (b) { st.type = b.dataset.type; sync(); } });
  $('pages').value = st.pages; $('topic').value = st.topic; $('inclusive').checked = st.inclusive; $('abstract').checked = st.abstract; $('optional').checked = st.optional;
  ['name', 'school', 'course', 'instructor', 'due', 'font'].forEach(function (k) {
    var el = $('me-' + k); if (me[k]) el.value = me[k];
    el.addEventListener('input', function () { me[k] = el.value.trim(); save('me', me); });
  });
  document.querySelector('.stepper').addEventListener('click', function (e) {
    var b = e.target.closest('[data-pg]'); if (!b) return;
    $('pages').value = Math.max(1, Math.min(30, (parseFloat($('pages').value) || 3) + (+b.dataset.pg))); sync();
  });
  ['pages', 'topic'].forEach(function (id) { $(id).addEventListener('input', sync); });
  ['inclusive', 'abstract', 'optional'].forEach(function (id) { $(id).addEventListener('change', sync); });

  var P;
  function sync() {
    st.pages = Math.max(1, Math.min(30, parseFloat($('pages').value) || 1));
    st.topic = $('topic').value; st.inclusive = $('inclusive').checked; st.abstract = $('abstract').checked; st.optional = $('optional').checked;
    save('plan', st);
    document.querySelectorAll('#types [data-type]').forEach(function (b) { b.setAttribute('aria-checked', b.dataset.type === st.type ? 'true' : 'false'); });
    $('optwrap').hidden = !A.TYPES.some(function (T) { return T.id === st.type && T.secs.some(function (s) { return s.opt; }); });
    P = A.plan(st);
    renderPlan();
  }
  function pagesTxt(s) { return s.from === s.to ? 'page ' + s.from : 'pages ' + s.from + '–' + s.to; }
  function renderPlan() {
    var T = P.type, paras = P.sections.reduce(function (n, s) { return n + s.paras; }, 0);
    var h = '<div class="stats">' +
      '<span class="stat"><b>≈ ' + P.words.toLocaleString() + '</b><small>words in the body</small></span>' +
      '<span class="stat"><b>' + paras + '</b><small>paragraphs</small></span>' +
      '<span class="stat"><b>' + P.sources + '+</b><small>sources (usual minimum)</small></span>' +
      '<span class="stat"><b>' + (P.abstract ? 'p. 1–2' : 'p. 1') + '</b><small>title page' + (P.abstract ? ' + abstract' : '') + '</small></span>' +
      '<span class="stat"><b>p. ' + (P.abstract ? 3 : 2) + '–' + (P.refPage - 1) + '</b><small>body (' + P.body + ' page' + (P.body === 1 ? '' : 's') + ')</small></span>' +
      '<span class="stat"><b>p. ' + P.refPage + '</b><small>references</small></span></div>' +
      '<p class="why"><b>The pattern:</b> ' + md(T.why) + ' <b>Voice:</b> ' + md(T.person) + ' <b>Sources:</b> ' + md(T.src) + '</p>' +
      (P.short ? '<p class="note">Under 2 pages, skip headings: an introduction, one or two body paragraphs, and a conclusion.</p>' : '') +
      '<ol class="outline">' + P.sections.map(function (s) {
        var head = s.intro ? '<div class="hd intro">' + esc(P.title) + '</div><div class="hd intro" style="font-weight:400;font-size:13px">Introduction (no heading: the title above starts the paper)</div>'
          : s.noHead ? '<div class="hd h2" style="font-weight:600">' + esc(s.t) + ' <span class="tag">no heading</span></div>'
          : '<div class="hd h' + (s.h || 1) + '">' + esc(s.t) + '</div>';
        return '<li class="sec">' + head + '<div class="meta">' + pagesTxt(s) + ' · about ' + s.words + ' words · ' + s.paras + ' paragraph' + (s.paras > 1 ? 's' : '') + (s.cite ? ' · cite sources' : '') + '</div>' +
          '<ul>' + s.p.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul>' +
          (s.s && s.s.length ? '<div class="starter">Try: ' + s.s.map(function (x) { return '<i>“' + md(x).replace(/<\/?i>/g, '') + '”</i>'; }).join(' · ') + '</div>' : '') + '</li>';
      }).join('') +
      '<li class="sec"><div class="hd h1">References</div><div class="meta">page ' + P.refPage + ' (new page)</div><ul><li>Every source cited in the text, alphabetical, double-spaced, hanging indent. See <a href="#refs">References</a>.</li></ul></li></ol>' +
      '<div class="btns"><button type="button" class="btn btn-primary" id="dl">Download the Word file (.docx)</button><button type="button" class="btn" id="cp">Copy the outline</button></div>' +
      '<p class="note">The Word file opens in Word, Google Docs or Pages. It is already set up in APA format (font, double spacing, margins, page numbers, title page, headings, a references page with a hanging indent). Each highlighted note says what to write there: replace it with your own paragraph. ' +
      (refs.length ? 'Your ' + refs.length + ' saved reference' + (refs.length > 1 ? 's are' : ' is') + ' already on the references page.' : 'Add your sources with the reference builder below and they will be put on the references page for you.') + '</p>';
    $('plan').innerHTML = h;
    $('dl').addEventListener('click', download);
    $('cp').addEventListener('click', function (e) { copy(outlineText()).then(function () { flash(e.target, 'Copied'); }); });
  }
  function outlineText() {
    var L = [P.title, P.type.name + ' · ' + P.body + ' body page(s) · about ' + P.words + ' words · ' + P.sources + '+ sources', ''];
    P.sections.forEach(function (s) {
      L.push((s.intro ? 'INTRODUCTION (no heading)' : s.t + (s.noHead ? ' (no heading)' : ' [Level ' + (s.h || 1) + ' heading]')) + ': ' + pagesTxt(s) + ', ~' + s.words + ' words, ' + s.paras + ' paragraph(s)');
      s.p.forEach(function (x) { L.push('  - ' + x.replace(/\*/g, '')); });
    });
    L.push('REFERENCES: page ' + P.refPage);
    return L.join('\n');
  }
  function download() {
    var plan = Object.assign({}, P, { refs: refs.length ? refs.slice().sort(byText).map(function (r) { return r.segs; }) : A.exampleRefs(P.type.id) });
    var bytes = A.docx(plan, me);
    var blob = new Blob([bytes], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    var name = (P.title.replace(/[\[\]]/g, '').replace(/[^\w\s-]/g, '').trim().slice(0, 60) || 'APA paper') + '.docx';
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 2000);
  }

  // ---------- patterns ----------
  $('pattern-list').innerHTML = A.TYPES.map(function (T) {
    var secs = ['Introduction (thesis)'].concat(T.secs.map(function (s) { return s.t.replace(' {n}', 's').replace('[', '').replace(']', '') + (s.rep ? ' (2–5)' : '') + (s.opt ? ' (if asked)' : ''); }), ['Conclusion', 'References']);
    return '<div class="card"><b class="t">' + esc(T.name) + '</b><p class="muted" style="margin:0 0 6px">' + esc(T.eg) + '</p><p>' + md(T.why) + '</p>' +
      '<span class="ex">' + secs.map(esc).join(' → ') + '</span>' +
      '<p class="muted">' + md(T.person) + ' Sources: ' + md(T.src) + '</p>' +
      '<button type="button" class="btn" data-use="' + T.id + '" style="margin-top:6px">Plan this paper →</button></div>';
  }).join('');
  $('pattern-list').addEventListener('click', function (e) {
    var b = e.target.closest('[data-use]'); if (!b) return;
    st.type = b.dataset.use; sync(); $('build').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // ---------- reference builder ----------
  var KINDS = [
    ['journal', 'Journal article', ['authors', 'org', 'year', 'title', 'journal', 'volume', 'issue', 'pages', 'doi']],
    ['book', 'Book or textbook', ['authors', 'org', 'year', 'title', 'edition', 'publisher', 'doi']],
    ['chapter', 'Chapter in an edited book', ['authors', 'year', 'title', 'editors', 'book', 'edition', 'pages', 'publisher', 'doi']],
    ['web', 'Webpage', ['authors', 'org', 'year', 'month', 'title', 'site', 'url']],
    ['report', 'Report or guideline', ['authors', 'org', 'year', 'title', 'number', 'publisher', 'url']],
    ['film', 'Film or movie', ['authors', 'year', 'title', 'publisher']]
  ];
  var LABEL = {
    authors: function (k) { return k === 'film' ? ['Director(s)', 'One per line: David O. Russell'] : k === 'chapter' ? ['Chapter author(s)', 'One per line: Jane A. Smith'] : ['Author(s)', k === 'web' || k === 'report' ? 'A person (one per line) or an organization; leave blank if none' : 'One per line: Maria R. Lopez, or Lopez, Maria R.']; },
    org: function () { return ['The author is an organization (CDC, American Heart Association)']; },
    year: function (k) { return [k === 'web' ? 'Year' : 'Year published', 'Blank = n.d.']; },
    month: function () { return ['Month and day (if the page shows one)', 'e.g., May 3']; },
    title: function (k) { return [k === 'chapter' ? 'Chapter title' : k === 'journal' ? 'Article title' : 'Title', 'Sentence case: capitalize only the first word, the first word after a colon, and names']; },
    journal: function () { return ['Journal name', 'Title Case, e.g., American Journal of Nursing']; },
    volume: function () { return ['Volume']; }, issue: function () { return ['Issue']; }, pages: function () { return ['Pages', 'e.g., 45-52']; },
    doi: function (k) { return [k === 'journal' ? 'DOI (or URL if no DOI)' : 'DOI or URL (optional)', 'e.g., 10.1097/01.NAJ.0000...']; },
    edition: function () { return ['Edition number', '2 or more; blank for a 1st edition']; },
    publisher: function (k) { return [k === 'film' ? 'Production company' : k === 'report' ? 'Publisher (if not the author)' : 'Publisher', k === 'film' ? 'e.g., The Weinstein Company' : 'e.g., Elsevier (no “Inc.”)']; },
    editors: function () { return ['Editor(s) of the book', 'One per line']; },
    book: function () { return ['Book title', 'Sentence case']; },
    site: function () { return ['Website name', 'Left out automatically if it matches the author']; },
    url: function () { return ['URL']; },
    number: function () { return ['Report number (if any)', 'e.g., Publication No. 21-1234']; }
  };
  var rk = load('rkind', 'journal'), rf = {};
  function rbFields() {
    var K = KINDS.filter(function (k) { return k[0] === rk; })[0];
    $('kinds').innerHTML = KINDS.map(function (k) { return '<button type="button" role="tab" data-kind="' + k[0] + '" aria-selected="' + (k[0] === rk) + '">' + k[1] + '</button>'; }).join('');
    $('rb-fields').innerHTML = K[2].map(function (f) {
      var L = LABEL[f](rk);
      if (f === 'org') return '<label class="chk"><input type="checkbox" data-f="org"' + (rf.org ? ' checked' : '') + '> ' + L[0] + '</label>';
      var big = f === 'authors' || f === 'editors', val = esc(rf[f] || '');
      var input = big ? '<textarea data-f="' + f + '" rows="2">' + val + '</textarea>' : '<input type="text" data-f="' + f + '" value="' + val + '" autocomplete="off">';
      if (f === 'title' || f === 'book') input = '<span class="inline">' + input + '<button type="button" class="mini" data-sc="' + f + '">Sentence case</button></span>';
      return '<label class="fld">' + L[0] + input + (L[1] ? '<span class="hint">' + L[1] + '</span>' : '') + '</label>';
    }).join('');
    rbOut();
  }
  var cur;
  function rbOut() {
    cur = A.reference(rk, rf);
    var w = [], t = String(rf.title || '');
    if (!rf.title) w.push('Add a title.');
    if (!rf.year) w.push('No year: APA uses “n.d.”');
    var words = t.split(/\s+/).filter(function (x) { return x.length > 3; });
    if (words.length >= 3 && words.filter(function (x) { return /^[A-Z][a-z]/.test(x); }).length > words.length / 2) w.push('The title looks like Title Case; APA wants sentence case. Tap “Sentence case,” then recapitalize names.');
    if (rk === 'journal' && !rf.doi) w.push('Most journal articles have a DOI; look on the article’s first page.');
    var empty = !Object.keys(rf).some(function (k) { return rf[k] && k !== 'org'; });
    if (empty) { $('rb-out').innerHTML = '<small>Fill in what you have; the reference and its in-text citation appear here as you type.</small>'; return; }
    $('rb-out').innerHTML = '<p class="refx">' + segHtml(cur.segs) + '</p><small>In text: ' + md(cur.cite.p) + ' · or narrative: ' + md(cur.cite.n) + '</small>' + w.map(function (x) { return '<small class="warn">' + esc(x) + '</small>'; }).join('');
  }
  $('kinds').addEventListener('click', function (e) { var b = e.target.closest('[data-kind]'); if (b) { rk = b.dataset.kind; save('rkind', rk); rbFields(); } });
  $('rb-fields').addEventListener('input', function (e) { var f = e.target.dataset.f; if (!f) return; rf[f] = e.target.type === 'checkbox' ? e.target.checked : e.target.value; rbOut(); });
  $('rb-fields').addEventListener('change', function (e) { if (e.target.type === 'checkbox') { rf[e.target.dataset.f] = e.target.checked; rbOut(); } });
  $('rb-fields').addEventListener('click', function (e) {
    var b = e.target.closest('[data-sc]'); if (!b) return;
    var el = document.querySelector('[data-f="' + b.dataset.sc + '"]'); el.value = A.sentenceCase(el.value); rf[b.dataset.sc] = el.value; rbOut();
  });
  $('rb-copy').addEventListener('click', function (e) { copy(segText(cur.segs), '<p>' + segHtml(cur.segs) + '</p>').then(function () { flash(e.target, 'Copied'); }); });
  $('rb-clear').addEventListener('click', function () { rf = {}; rbFields(); });
  $('rb-add').addEventListener('click', function (e) {
    if (!rf.title) { flash(e.target, 'Add a title first'); return; }
    refs.push({ segs: cur.segs, cite: cur.cite }); save('refs', refs); rf = {}; rbFields(); renderRefs(); renderPlan(); flash(e.target, 'Added');
  });
  function byText(a, b) { return segText(a.segs).localeCompare(segText(b.segs)); }
  function renderRefs() {
    if (!refs.length) { $('myrefs').innerHTML = ''; return; }
    var sorted = refs.map(function (r, i) { return { r: r, i: i }; }).sort(function (a, b) { return byText(a.r, b.r); });
    $('myrefs').innerHTML = '<b>My references</b> <span class="muted">(alphabetical, as they will appear; added to the Word file)</span><ol>' + sorted.map(function (o) {
      return '<li><p class="refx">' + segHtml(o.r.segs) + '<br><small class="muted">' + md(o.r.cite.p) + '</small></p><button type="button" data-del="' + o.i + '">Remove</button></li>';
    }).join('') + '</ol><div class="btns"><button type="button" class="btn" id="refs-copy">Copy all</button></div>';
    $('refs-copy').addEventListener('click', function (e) {
      var s = refs.slice().sort(byText);
      copy(s.map(function (r) { return segText(r.segs); }).join('\n'), s.map(function (r) { return '<p>' + segHtml(r.segs) + '</p>'; }).join('')).then(function () { flash(e.target, 'Copied'); });
    });
  }
  $('myrefs').addEventListener('click', function (e) { var b = e.target.closest('[data-del]'); if (!b) return; refs.splice(+b.dataset.del, 1); save('refs', refs); renderRefs(); renderPlan(); });

  // ---------- checklist ----------
  var CHECK = [
    ['Format', ['1-inch margins; one font (Times New Roman 12 or another allowed font)', 'Double-spaced everywhere, with no extra space between paragraphs', 'Page numbers top right on every page, starting at 1', 'First line of each paragraph indented 0.5 inch']],
    ['Title page', ['Title bold, centered, in Title Case, a few lines down', 'Name, department and school, course, instructor and due date, centered on separate lines']],
    ['Body', ['The title repeated at the top of page 2 (no “Introduction” heading)', 'A clear thesis or purpose statement at the end of the introduction', 'Headings match the rubric’s required sections, in APA levels', 'Each paragraph has one main idea, evidence, your analysis and a link', 'Page count meets the requirement without going over the limit', 'No contractions, slang or unsupported opinions; person-first language', 'No names or identifying details of patients or meeting members', 'Abbreviations defined at first use']],
    ['Citations', ['Every fact or idea from a source has an in-text citation', 'Quotes have quotation marks and a page number (and there are few of them)', 'Every in-text citation is on the references page, and every reference is cited']],
    ['References', ['New page with “References” bold and centered', 'Alphabetical, double-spaced, 0.5-inch hanging indent', 'Article and book titles in sentence case; journal names and volumes italic', 'DOIs as https://doi.org/ links', 'The required number and type of sources (scholarly, recent)']],
    ['Before you submit', ['Read it aloud once, start to finish', 'Spell-check and grammar check, then fix what the tools miss', 'File named and saved as your instructor asks (usually .docx)', 'Rubric checked one last time, line by line']]
  ];
  var done = load('check', {});
  function renderChecks() {
    var n = 0, total = 0;
    $('checks').innerHTML = CHECK.map(function (g, gi) {
      return '<li><h4>' + esc(g[0]) + '</h4></li>' + g[1].map(function (t, ti) {
        var id = gi + '-' + ti; total++; if (done[id]) n++;
        return '<li><label><input type="checkbox" data-c="' + id + '"' + (done[id] ? ' checked' : '') + '><span>' + esc(t) + '</span></label></li>';
      }).join('');
    }).join('');
    $('checks').insertAdjacentHTML('afterbegin', '<li class="prog">' + n + ' of ' + total + ' checked</li>');
  }
  $('checks').addEventListener('change', function (e) { var c = e.target.dataset.c; if (!c) return; if (e.target.checked) done[c] = 1; else delete done[c]; save('check', done); renderChecks(); });
  $('check-reset').addEventListener('click', function () { done = {}; save('check', done); renderChecks(); });

  rbFields(); renderRefs(); renderChecks(); sync();
  if (location.hash) { var t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); }
})();
