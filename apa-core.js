// APA papers: paper patterns, the page-count planner, reference formatting and a small .docx writer.
// No DOM here, so tools/check_apa.js can run the same code in Node.
(function (root) {
  var WPP = 275;   // words on a double-spaced page in 12-pt Times New Roman (about 250–300)
  var WPARA = 150; // a solid academic paragraph: 4–6 sentences

  // Each paper type: sections in order. w = share of the body; h = heading level (1 centered, 2 flush left);
  // rep = a section repeated n times, n chosen from the page count; p = what the paragraphs do; s = sentence starters.
  var TYPES = [
    { id: 'reflection', name: 'Reflection paper', eg: 'Self-help meeting (AA, NA, Al-Anon), clinical day, simulation, an experience', person: 'First person (“I”) is expected.',
      sources: [2, 4], src: 'Your textbook plus 1–3 scholarly sources that explain what you saw.',
      why: 'Follows a reflective cycle: what happened, how you felt, what it means using course concepts, and what you will do differently as a nurse.',
      intro: ['Open with the experience in one or two sentences: what, when, and why you went.', 'End the paragraph with a purpose statement: what this paper will reflect on.'],
      introS: ['On [date], I attended a [type of] meeting in order to …', 'This paper describes the experience, my reactions, and what it taught me about caring for people with …'],
      secs: [
        { t: 'Description of the Experience', w: 2, p: ['Describe the setting, format and what happened, in the order it happened.', 'Keep it factual; protect privacy (no names or identifying details of members or patients).'], s: ['The meeting took place in …', 'The format followed …'] },
        { t: 'Thoughts and Feelings', w: 2, p: ['Your honest reactions before, during and after, and why you felt that way.', 'Any assumptions or stigma you noticed in yourself, and whether they changed.'], s: ['Before the meeting, I expected …', 'I was surprised when …'] },
        { t: 'Connection to Course Concepts', w: 3, cite: true, p: ['Link what you saw to concepts from the textbook (for example, stages of change, the 12 steps, group therapy factors, relapse prevention), with citations.', 'Use one concept per paragraph: name it, cite it, then show where it appeared in the experience.'], s: ['According to [Author] (Year), …', 'This reflects the concept of … because …'] },
        { t: 'Implications for Nursing Practice', w: 2, cite: true, p: ['How this changes the way you will assess, talk with, refer or teach patients.', 'Be specific: a situation, what you will do, and why it matters.'], s: ['As a future nurse, I will …', 'This experience showed me the importance of …'] }
      ] },
    { id: 'film', name: 'Movie or book analysis', eg: 'A mental health–themed movie, a book or a documentary', person: 'Third person for the analysis; first person only in a personal-reflection section if the rubric asks for one.',
      sources: [2, 4], src: 'The film itself, your textbook, and the DSM-5-TR or a scholarly article on the disorder.',
      why: 'Uses the story as a case study: you diagnose, judge how accurate the portrayal is, and decide what nursing care the character needed.',
      intro: ['Name the film (title in italics, year, director) and the character you will analyze.', 'State your thesis: the disorder you will discuss and your overall judgment of the portrayal.'],
      introS: ['In the film *[Title]* (Director, Year), the character [Name] shows signs of …', 'This paper analyzes how accurately the film portrays … and how a nurse could intervene.'],
      secs: [
        { t: 'Summary of the Film', w: 1, p: ['A brief summary of only the plot points you will analyze (no more than about 10–15% of the paper).'], s: ['The film follows …'] },
        { t: 'Signs and Symptoms', w: 3, cite: true, p: ['Match specific scenes to diagnostic criteria or textbook symptoms, with citations.', 'One symptom cluster per paragraph: the scene, the symptom name, the source.'], s: ['[Name] displays [symptom] when …', 'The DSM-5-TR lists … as a criterion for … (American Psychiatric Association, 2022).'] },
        { t: 'Accuracy of the Portrayal', w: 2, cite: true, p: ['What the film got right and wrong compared with the evidence, including treatment, recovery and stigma.'], s: ['The portrayal is accurate in that …', 'However, the film misrepresents …'] },
        { t: 'Nursing Care', w: 3, cite: true, p: ['Priority problems (nursing diagnoses) for the character, with interventions and rationales.', 'Include therapeutic communication and safety where they apply.'], s: ['A priority nursing problem for [Name] would be …', 'An appropriate intervention is … because …'] },
        { t: 'Personal Reflection', w: 1, opt: true, p: ['If the rubric asks: what the film taught you and how it affects your view of people with this disorder.'], s: ['Watching this film changed my understanding of …'] }
      ] },
    { id: 'condition', name: 'Topic paper: a disease or condition', eg: 'Heart failure, sepsis, schizophrenia, COPD, diabetes', person: 'Third person; no “I.”',
      sources: [3, 6], perPage: 1, src: 'Scholarly sources from the last 5 years (CINAHL, PubMed), your textbook and guidelines from organizations such as the CDC or AHA.',
      why: 'Moves from what the condition is, to how it shows up, to how it is treated, to what the nurse does: the same order as clinical judgment.',
      intro: ['Hook with the condition’s significance (how common, how costly or how deadly, with a citation).', 'End with a thesis that lists the sections the paper will cover.'],
      introS: ['[Condition] affects about … people in the United States each year (Source, Year).', 'This paper discusses the pathophysiology, clinical presentation, treatment and nursing care of …'],
      secs: [
        { t: 'Pathophysiology and Risk Factors', w: 2, cite: true, p: ['What goes wrong in the body, in plain steps from cause to effect.', 'Modifiable and nonmodifiable risk factors.'], s: ['[Condition] develops when …', 'Risk factors include …'] },
        { t: 'Clinical Presentation and Diagnosis', w: 2, cite: true, p: ['Signs and symptoms, and why each happens.', 'Key diagnostic tests and lab values.'], s: ['Patients commonly present with …', 'Diagnosis is confirmed by …'] },
        { t: 'Treatment', w: 2, cite: true, p: ['Medications (class, action, key nursing considerations) and other treatments.'], s: ['First-line treatment includes …'] },
        { t: 'Nursing Implications', w: 3, cite: true, p: ['Priority assessments, interventions and their rationales.', 'Patient education and discharge teaching; cultural or equity considerations.'], s: ['The nurse should monitor …', 'Patient teaching should include …'] }
      ] },
    { id: 'topic', name: 'Topic paper: any other topic', eg: 'Burnout, telehealth, nurse staffing, vaccine hesitancy, a nursing theory', person: 'Third person; no “I.”',
      sources: [3, 6], perPage: 1, src: 'Scholarly sources from the last 5 years, plus professional organizations (ANA, NCSBN, WHO, CDC) when relevant.',
      why: 'Background, then one main point per section, each backed by evidence, then what it means for nurses.',
      intro: ['Hook: why this topic matters now (a statistic or a problem, cited).', 'Thesis: your main claim and the points you will use to support it, in order.'],
      introS: ['[Topic] has become a major concern in health care because …', 'This paper examines …, …, and …'],
      secs: [
        { t: 'Background', w: 2, cite: true, p: ['Define key terms and give the context the reader needs (history, scope, who is affected).'], s: ['[Topic] is defined as …'] },
        { t: '[Main Point {n}]', rep: [[2, 2], [5, 3], [9, 4], [99, 5]], w: 2, cite: true, p: ['One main point per section: a topic sentence, evidence with citations, your explanation, and a link back to the thesis.'], s: ['One factor that contributes to … is …', 'Research by [Author] (Year) found that …'] },
        { t: 'Implications for Nursing', w: 2, cite: true, p: ['What nurses, leaders or patients should do differently because of these points.'], s: ['Nurses can address this by …'] }
      ] },
    { id: 'litreview', name: 'Literature review', eg: 'What the research says about a question, such as fall prevention or sepsis screening', person: 'Third person; no “I.”',
      sources: [5, 12], perPage: 1.5, src: 'Mostly peer-reviewed research articles (primary studies, systematic reviews) from the last 5 years.',
      why: 'Organized by theme, not by article: each section compares what several studies found about one idea.',
      intro: ['The problem and why it matters (cited).', 'The purpose or question of the review, and how the paper is organized.'],
      introS: ['The purpose of this review is to examine the current evidence on …'],
      secs: [
        { t: 'Search Strategy', w: 1, p: ['Databases searched (CINAHL, PubMed), keywords, years, inclusion criteria and how many articles you kept.'], s: ['A search of CINAHL and PubMed was conducted using the keywords …'] },
        { t: '[Theme {n}]', rep: [[4, 2], [8, 3], [99, 4]], h: 1, w: 3, cite: true, p: ['A theme from the literature: what several studies found, where they agree and disagree, and how strong the evidence is.', 'Synthesize: cite two or more studies in the same sentence when they agree.'], s: ['Several studies found that … (Author, Year; Author, Year).', 'In contrast, [Author] (Year) reported …'] },
        { t: 'Gaps in the Literature', w: 1, cite: true, p: ['What is still unknown, weak study designs, populations not studied.'], s: ['Few studies have examined …'] },
        { t: 'Implications for Nursing Practice', w: 2, cite: true, p: ['What a nurse should do based on the strength of this evidence.'], s: ['Based on this evidence, nurses should …'] }
      ] },
    { id: 'ebp', name: 'Evidence-based practice (PICOT) paper', eg: 'A clinical question: does X compared with Y improve Z?', person: 'Third person; no “I.”',
      sources: [5, 10], perPage: 1.2, src: 'At least 3–5 research articles (ideally systematic reviews or randomized trials) from the last 5 years, plus a practice guideline.',
      why: 'Follows the EBP steps: ask, search, appraise, synthesize, apply, evaluate.',
      intro: ['The clinical problem, how common or costly it is, and the setting (cited).', 'A sentence previewing the PICOT question and the paper.'],
      introS: ['In [setting], [problem] leads to …'],
      secs: [
        { t: 'PICOT Question', w: 1, p: ['State the question, then define each part: Population, Intervention, Comparison, Outcome, Time.'], s: ['In [P], how does [I] compared with [C] affect [O] within [T]?'] },
        { t: 'Search Strategy', w: 1, p: ['Databases, keywords from the PICOT parts, limits (years, language, peer review), how many articles you chose.'], s: ['The PICOT terms were used as keywords in …'] },
        { t: 'Appraisal of the Evidence', w: 3, cite: true, p: ['For each key article: design, level of evidence, sample, main findings and limitations.'], s: ['[Author] (Year) conducted a [design] with … participants and found …'] },
        { t: 'Synthesis and Recommendation', w: 2, cite: true, p: ['What the studies say together and your recommendation for practice.'], s: ['Taken together, the evidence supports …'] },
        { t: 'Implementation and Evaluation', w: 2, cite: true, p: ['How the change would be put into practice (staff education, policy) and how you would measure the outcome.'], s: ['Implementation would begin with …', 'Success would be measured by …'] }
      ] },
    { id: 'casestudy', name: 'Case study or care plan paper', eg: 'A clinical patient, a perioperative paper, a concept map write-up', person: 'Third person (“the patient”); de-identify everything.',
      sources: [3, 6], src: 'Your textbook, a drug guide, a nursing diagnosis handbook, and 1–3 scholarly sources.',
      why: 'Follows the nursing process: assessment, diagnosis, planning, implementation, evaluation, with rationales for every action.',
      intro: ['Introduce the patient with de-identified details (age, sex, reason for admission). Never use names, initials, room numbers or dates of birth (HIPAA).', 'State what the paper covers.'],
      introS: ['This paper presents the care of a [age]-year-old [sex] admitted with …'],
      secs: [
        { t: 'Patient Background', w: 1, p: ['Relevant history, medications, social and cultural factors.'], s: ['The patient has a history of …'] },
        { t: 'Pathophysiology of [Condition]', w: 2, cite: true, p: ['The disease process, linked to this patient’s findings.'], s: ['[Condition] occurs when …, which explains the patient’s …'] },
        { t: 'Assessment Findings', w: 2, p: ['Subjective and objective data, abnormal labs and what each means.'], s: ['Assessment revealed …'] },
        { t: '[Priority Problem {n}]', rep: [[4, 2], [99, 3]], h: 1, w: 2, cite: true, p: ['The nursing diagnosis or priority problem with its evidence, a measurable goal, interventions with rationales (cited), and evaluation.'], s: ['The priority problem is … as evidenced by …', 'The goal is that the patient will … by …'] }
      ] },
    { id: 'teaching', name: 'Health teaching plan paper', eg: 'Teaching a patient or group about a disease, medication or skill', person: 'Third person; first person only for what you did if allowed.',
      sources: [3, 5], src: 'Your textbook, patient-education sources (MedlinePlus, CDC), and a scholarly source on health literacy or teaching methods.',
      why: 'Assess the learner, set objectives, teach, then prove learning with teach-back.',
      intro: ['Who the learner is and the health need, with why the topic matters (cited).'],
      introS: ['Teaching [learner] about … is essential because …'],
      secs: [
        { t: 'Learner Assessment', w: 2, cite: true, p: ['Readiness and motivation, health literacy, culture and language, learning style, barriers.'], s: ['The learner is ready to learn as shown by …'] },
        { t: 'Learning Objectives', w: 1, p: ['Two to four SMART objectives using action verbs (state, demonstrate, list).'], s: ['By the end of the session, the patient will be able to …'] },
        { t: 'Content and Teaching Methods', w: 3, cite: true, p: ['What you taught and how (demonstration, handout at a 5th–6th grade reading level, video), and why each method fits this learner.'], s: ['The content included …', 'Demonstration was chosen because …'] },
        { t: 'Evaluation', w: 2, p: ['How each objective was measured (teach-back, return demonstration) and the result; what you would change.'], s: ['Using teach-back, the patient was able to …'] }
      ] },
    { id: 'position', name: 'Issue or position paper', eg: 'An ethical or policy question: mandatory overtime, nurse-to-patient ratios, assisted death', person: 'Third person; no “I.”',
      sources: [4, 8], perPage: 1, src: 'Scholarly sources, professional position statements (ANA Code of Ethics) and laws or policies.',
      why: 'States a clear position, supports it with evidence, and answers the strongest opposing view.',
      intro: ['Background on the issue in one or two sentences, cited.', 'Your thesis: the position you take, stated clearly.'],
      introS: ['This paper argues that …'],
      secs: [
        { t: 'Background of the Issue', w: 2, cite: true, p: ['History, current laws or policies, and who is affected.'], s: ['Currently, …'] },
        { t: '[Supporting Argument {n}]', rep: [[3, 2], [99, 3]], w: 2, cite: true, p: ['One reason that supports your position, with evidence, and why it matters.'], s: ['The strongest reason to support … is …'] },
        { t: 'Opposing View and Rebuttal', w: 2, cite: true, p: ['State the best argument against your position fairly, then answer it with evidence.'], s: ['Opponents argue that …; however, …'] },
        { t: 'Implications for Nursing', w: 1, cite: true, p: ['What nurses should do: practice, advocacy, policy.'], s: ['Nurses can advocate for …'] }
      ] }
  ];
  var CONCL = { t: 'Conclusion', w: 1, p: ['Restate the thesis in new words and summarize the main points; no new sources or new ideas.', 'End with a closing sentence about why it matters for nursing or for you.'], s: ['In conclusion, …', 'Ultimately, …'] };

  function find(id) { for (var i = 0; i < TYPES.length; i++) if (TYPES[i].id === id) return TYPES[i]; return TYPES[0]; }
  function titleCase(s) {
    var small = /^(a|an|the|and|but|or|nor|for|so|yet|as|at|by|in|of|off|on|per|to|up|via)$/i;
    return String(s || '').trim().split(/\s+/).map(function (w, i, a) {
      if (/^[A-Z0-9]{2,}$/.test(w)) return w; // acronyms
      if (i && i < a.length - 1 && w.length < 4 && small.test(w)) return w.toLowerCase();
      return w.charAt(0).toUpperCase() + w.slice(1);
    }).join(' ');
  }

  // plan({ type, pages, inclusive, abstract, topic }) → the outline for that paper.
  function plan(o) {
    var T = find(o.type), pages = Math.max(1, Math.min(30, +o.pages || 3));
    var body = o.inclusive ? Math.max(1, pages - 1 - 1 - (o.abstract ? 1 : 0)) : pages;
    var words = Math.round(body * WPP), short = body < 2;
    var list = [{ t: null, intro: true, w: 1, p: T.intro, s: T.introS }];
    T.secs.forEach(function (s) {
      if (s.opt && !o.optional) return;
      if (s.rep) {
        var n = 2; for (var i = 0; i < s.rep.length; i++) if (body <= s.rep[i][0]) { n = s.rep[i][1]; break; }
        for (var k = 1; k <= n; k++) list.push({ t: s.t.replace('{n}', k), h: s.h || 1, w: s.w, cite: s.cite, p: s.p, s: s.s, rep: true });
      } else list.push({ t: s.t, h: s.h || 1, w: s.w, cite: s.cite, p: s.p, s: s.s });
    });
    list.push({ t: CONCL.t, h: 1, w: CONCL.w, p: CONCL.p, s: CONCL.s, concl: true });
    if (short) { // under 2 pages: no headings; intro, a couple of body paragraphs, conclusion
      var mid = list.slice(1, -1), keep = mid.filter(function (s) { return !s.rep; }).slice(0, body < 1.5 ? 1 : 2);
      if (!keep.length) keep = mid.slice(0, 1);
      list = [list[0]].concat(keep.map(function (s) { return Object.assign({}, s, { noHead: true }); }), [list[list.length - 1]]);
    }
    var tw = list.reduce(function (n, s) { return n + s.w; }, 0);
    // The intro and conclusion each get about 10% of the paper (at least one paragraph); the rest is shared by weight.
    var ic = short ? 0.2 : 0.1, rest = 1 - 2 * ic, mw = tw - list[0].w - list[list.length - 1].w;
    var start = (o.abstract ? 3 : 2), used = 0;
    list.forEach(function (s, i) {
      var share = (i === 0 || i === list.length - 1) ? ic : rest * s.w / mw;
      s.words = Math.max(60, Math.round(words * share / 10) * 10);
      s.paras = Math.max(1, Math.round(s.words / WPARA));
      s.from = start + Math.floor(used / WPP); used += s.words; s.to = start + Math.max(0, Math.ceil(used / WPP - 0.05) - 1);
      if (s.to < s.from) s.to = s.from;
    });
    var per = T.perPage || 0.8, src = Math.max(T.sources[0], Math.round(body * per));
    if (T.id === 'reflection' || T.id === 'film' || T.id === 'casestudy' || T.id === 'teaching') src = Math.min(src, T.sources[1]);
    var topic = String(o.topic || '').trim();
    var title = topic ? titleCase(T.id === 'film' ? 'The Portrayal of ' + topic + ' in [Film Title]' : T.id === 'reflection' ? 'Reflection on ' + topic : T.id === 'ebp' ? topic + ': An Evidence-Based Practice Review' : T.id === 'litreview' ? topic + ': A Review of the Literature' : topic) : '[Title of Your Paper in Title Case]';
    return { type: T, pages: pages, body: body, words: words, short: short, sections: list, sources: src, title: title,
      refPage: start + Math.max(0, Math.ceil(used / WPP - 0.05) - 1) + 1, abstract: !!o.abstract };
  }

  // ---------- references ----------
  function initials(given) {
    return given.split(/\s+/).filter(Boolean).map(function (g) {
      return g.split('-').map(function (p) { return p.charAt(0).toUpperCase() + '.'; }).join('-');
    }).join(' ');
  }
  // "Jane A. Smith" or "Smith, Jane A." → { last: 'Smith', ref: 'Smith, J. A.', fwd: 'J. A. Smith' }; organizations stay whole.
  function person(raw, org) {
    var s = String(raw).trim().replace(/\s+/g, ' ');
    if (!s) return null;
    if (org) return { last: s, ref: s, fwd: s, org: true };
    var last, given;
    if (s.indexOf(',') >= 0) { last = s.split(',')[0].trim(); given = s.split(',').slice(1).join(' ').trim(); }
    else { var w = s.split(' '); last = w.pop(); given = w.join(' '); }
    var ini = initials(given);
    return { last: last, ref: last + (ini ? ', ' + ini : ''), fwd: (ini ? ini + ' ' : '') + last };
  }
  function people(raw, org) {
    return String(raw || '').split(/\n|;/).map(function (x) { return person(x, org); }).filter(Boolean);
  }
  function authorList(a) {
    var r = a.map(function (x) { return x.ref; });
    if (!r.length) return '';
    if (r.length === 1) return r[0];
    if (r.length === 2) return r[0] + ', & ' + r[1];
    if (r.length <= 20) return r.slice(0, -1).join(', ') + ', & ' + r[r.length - 1];
    return r.slice(0, 19).join(', ') + ', . . . ' + r[r.length - 1];
  }
  function inText(a, year, titleNoAuthor) {
    var y = year || 'n.d.', n;
    if (!a.length) { var t = titleNoAuthor || 'Title', q = /,”$/.test(t); return { p: '(' + t + (q ? ' ' : ', ') + y + ')', n: t.replace(/,”$/, '”') + ' (' + y + ')' }; }
    if (a.length === 1) n = [a[0].last, a[0].last];
    else if (a.length === 2) n = [a[0].last + ' & ' + a[1].last, a[0].last + ' and ' + a[1].last];
    else n = [a[0].last + ' et al.', a[0].last + ' et al.'];
    return { p: '(' + n[0] + ', ' + y + ')', n: n[1] + ' (' + y + ')' };
  }
  function ordinal(n) { n = parseInt(n, 10); if (!n || n < 2) return ''; var s = ['th', 'st', 'nd', 'rd'], v = n % 100; return n + (s[(v - 20) % 10] || s[v] || s[0]) + ' ed.'; }
  function link(d) { d = String(d || '').trim(); if (!d) return ''; if (/^10\./.test(d)) return 'https://doi.org/' + d; if (/^doi:/i.test(d)) return 'https://doi.org/' + d.replace(/^doi:\s*/i, ''); return d; }
  function end(s) { s = String(s || '').trim(); return s && !/[.?!]$/.test(s) ? s + '.' : s; }
  function sentenceCase(s) {
    var first = true;
    return String(s || '').split(/(\s+)/).map(function (w) {
      if (/^\s+$/.test(w)) return w;
      var out;
      if (/^[A-Z0-9]{2,}[:.,;]?$/.test(w) || /[a-z][A-Z]/.test(w)) out = w; // acronyms like COPD, HIV; mixed case like iPhone
      else if (first) out = w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
      else out = w.toLowerCase();
      first = /:$/.test(w);
      return out;
    }).join('');
  }
  // Returns { segs: [{t, i}], cite: {p, n} }. f holds the form fields for that source type.
  function reference(kind, f) {
    var A = people(f.authors, f.org), year = String(f.year || '').trim() || 'n.d.', S = [];
    var add = function (t, i) { if (t) S.push({ t: t, i: !!i }); };
    var who = authorList(A);
    var title = String(f.title || '').trim();
    if (kind === 'journal') {
      add(who ? who + ' ' : ''); add('(' + year + '). '); add(end(title) + ' ');
      add(String(f.journal || '').trim() + (f.volume ? ', ' + String(f.volume).trim() : ''), true);
      add((f.issue ? '(' + String(f.issue).trim() + ')' : '') + (f.pages ? ', ' + String(f.pages).trim().replace(/-/g, '–') : '') + '.');
      if (f.doi) add(' ' + link(f.doi));
    } else if (kind === 'book') {
      add(who ? who + ' ' : ''); add('(' + year + '). ');
      add(title, true); var ed = ordinal(f.edition); add((ed ? ' (' + ed + ')' : '') + '. ');
      add(end(f.publisher)); if (f.doi) add(' ' + link(f.doi));
    } else if (kind === 'chapter') {
      var E = people(f.editors), eds = E.map(function (x) { return x.fwd; });
      var el = eds.length === 1 ? eds[0] : eds.length === 2 ? eds[0] + ' & ' + eds[1] : eds.length ? eds.slice(0, -1).join(', ') + ', & ' + eds[eds.length - 1] : '';
      add(who ? who + ' ' : ''); add('(' + year + '). '); add(end(title) + ' ');
      add('In ' + (el ? el + ' (' + (eds.length > 1 ? 'Eds.' : 'Ed.') + '), ' : ''));
      add(String(f.book || '').trim(), true);
      var bits = [ordinal(f.edition), f.pages ? 'pp. ' + String(f.pages).trim().replace(/-/g, '–') : ''].filter(Boolean);
      add((bits.length ? ' (' + bits.join(', ') + ')' : '') + '. '); add(end(f.publisher)); if (f.doi) add(' ' + link(f.doi));
    } else if (kind === 'web') {
      var date = year + (f.month ? ', ' + String(f.month).trim() : '');
      if (who) { add(who + ' '); add('(' + date + '). '); add(title, true); add('. '); }
      else { add(title, true); add('. '); add('(' + date + '). '); }
      var site = String(f.site || '').trim();
      if (site && site !== who.replace(/\.$/, '')) add(end(site) + ' ');
      add(link(f.url));
    } else if (kind === 'film') {
      var D = A.map(function (x) { return x.ref; });
      add((D.length === 1 ? D[0] : D.length ? D.slice(0, -1).join(', ') + ', & ' + D[D.length - 1] : '') + ' (' + (D.length > 1 ? 'Directors' : 'Director') + '). ');
      add('(' + year + '). '); add(title, true); add(' [Film]. '); add(end(f.publisher));
    } else if (kind === 'report') {
      add(who ? who + ' ' : ''); add('(' + year + '). '); add(title, true);
      add((f.number ? ' (' + String(f.number).trim() + ')' : '') + '. ');
      var pub = String(f.publisher || '').trim(); if (pub && pub !== who.replace(/\.$/, '')) add(end(pub) + ' ');
      add(link(f.url));
    }
    // who ends in a period already ("Smith, J. A."), except organizations.
    if (S.length && A.length && A[A.length - 1].org && kind !== 'film' && kind !== 'web') S[0].t = S[0].t.replace(/ $/, '. ');
    if (kind === 'web' && A.length && A[A.length - 1].org) S[0].t = S[0].t.replace(/ $/, '. ');
    S.forEach(function (x) { x.t = x.t.replace(/\.\./g, '.').replace(/\s{2,}/g, ' '); });
    // No author: a shortened title stands in, italic for stand-alone works, in quotes (comma inside) for parts of works.
    var short = titleCase(title.split(/\s+/).slice(0, 4).join(' ')), solo = kind !== 'journal' && kind !== 'chapter';
    return { segs: S, cite: inText(A, year === 'n.d.' ? 'n.d.' : year.slice(0, 4), title ? (solo ? '*' + short + '*' : '“' + short + ',”') : '') };
  }

  // ---------- a minimal .docx writer (stored zip, no compression) ----------
  var CRC = (function () { var t = [], c; for (var n = 0; n < 256; n++) { c = n; for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
  function crc32(b) { var c = 0xFFFFFFFF; for (var i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
  function utf8(s) { return typeof TextEncoder !== 'undefined' ? new TextEncoder().encode(s) : Uint8Array.from(Buffer.from(s, 'utf8')); }
  function zip(files) {
    var parts = [], central = [], off = 0;
    function u16(v) { return [v & 255, (v >>> 8) & 255]; } function u32(v) { return [v & 255, (v >>> 8) & 255, (v >>> 16) & 255, (v >>> 24) & 255]; }
    files.forEach(function (f) {
      var name = utf8(f.name), data = utf8(f.data), crc = crc32(data);
      var head = [].concat(u32(0x04034b50), u16(20), u16(0x0800), u16(0), u16(0), u16(0x21), u32(crc), u32(data.length), u32(data.length), u16(name.length), u16(0));
      parts.push(Uint8Array.from(head), name, data);
      central.push(Uint8Array.from([].concat(u32(0x02014b50), u16(20), u16(20), u16(0x0800), u16(0), u16(0), u16(0x21), u32(crc), u32(data.length), u32(data.length), u16(name.length), u16(0), u16(0), u16(0), u16(0), u32(0), u32(off))), name);
      off += head.length + name.length + data.length;
    });
    var csize = central.reduce(function (n, b) { return n + b.length; }, 0);
    var tail = Uint8Array.from([].concat(u32(0x06054b50), u16(0), u16(0), u16(files.length), u16(files.length), u32(csize), u32(off), u16(0)));
    var all = parts.concat(central, [tail]), len = all.reduce(function (n, b) { return n + b.length; }, 0), out = new Uint8Array(len), p = 0;
    all.forEach(function (b) { out.set(b, p); p += b.length; });
    return out;
  }
  function x(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  // A run: {t, b, i, hl}; text with *stars* becomes italic.
  function runs(t, base) {
    base = base || {};
    return String(t).split(/(\*[^*]+\*)/).filter(Boolean).map(function (part) {
      var it = /^\*[^*]+\*$/.test(part), txt = it ? part.slice(1, -1) : part;
      var pr = (base.b ? '<w:b/>' : '') + ((base.i || it) ? '<w:i/>' : '') + (base.hl ? '<w:highlight w:val="yellow"/>' : '');
      return '<w:r>' + (pr ? '<w:rPr>' + pr + '</w:rPr>' : '') + '<w:t xml:space="preserve">' + x(txt) + '</w:t></w:r>';
    }).join('');
  }
  function para(inner, ppr) { return '<w:p>' + (ppr ? '<w:pPr>' + ppr + '</w:pPr>' : '') + inner + '</w:p>'; }
  var CENTER = '<w:jc w:val="center"/>', NOIND = '<w:ind w:firstLine="0"/>', BREAK = '<w:p><w:r><w:br w:type="page"/></w:r></w:p>';
  var FONTS = { tnr: ['Times New Roman', 24], calibri: ['Calibri', 22], arial: ['Arial', 22], georgia: ['Georgia', 22] };

  // docx(plan, me) → Uint8Array. me: { name, school, dept, course, instructor, due, font }
  function docx(P, me) {
    me = me || {};
    var F = FONTS[me.font] || FONTS.tnr, b = [];
    var hl = function (t) { return runs(t, { hl: true }); };
    // Title page: title 3–4 lines down, bold, centered; one blank line; then the student details, each centered.
    b.push(para('', CENTER + NOIND), para('', CENTER + NOIND), para('', CENTER + NOIND));
    b.push(para(runs(P.title, { b: true, hl: /\[/.test(P.title) }), CENTER + NOIND), para('', CENTER + NOIND));
    [me.name || '[Your Name]', (me.dept ? me.dept + ', ' : '') + (me.school || '[Department, College or University]'), me.course || '[Course Number: Course Name]', me.instructor || '[Instructor Name]', me.due || '[Due Date, e.g., November 18, 2026]']
      .forEach(function (t) { b.push(para(/^\[/.test(t) ? hl(t) : runs(t), CENTER + NOIND)); });
    b.push(BREAK);
    if (P.abstract) {
      b.push(para(runs('Abstract', { b: true }), '<w:pStyle w:val="Heading1"/>'));
      b.push(para(hl('[150–250 words in one paragraph with no indent: the purpose, the main points and the conclusion. Write it last.]'), NOIND));
      b.push(para(runs('Keywords: ', { i: true }) + hl('[three to five keywords]'), '<w:ind w:firstLine="720"/>'));
      b.push(BREAK);
    }
    b.push(para(runs(P.title, { b: true, hl: /\[/.test(P.title) }), '<w:pStyle w:val="Heading1"/>'));
    P.sections.forEach(function (s) {
      if (s.t && !s.noHead && !s.intro) b.push(para(runs(s.t, { hl: /\[/.test(s.t) }), '<w:pStyle w:val="Heading' + (s.h || 1) + '"/>'));
      for (var k = 0; k < s.paras; k++) {
        var hint = s.p[Math.min(k, s.p.length - 1)], st = s.s && s.s[Math.min(k, s.s.length - 1)];
        b.push(para(hl('[' + (s.intro ? 'Introduction (no heading; the title above starts the paper)' : s.noHead ? s.t : s.t) + ' · paragraph ' + (k + 1) + ' of ' + s.paras + ', about ' + Math.round(s.words / s.paras / 10) * 10 + ' words. ' + hint + (st ? ' Try: “' + st.replace(/\*/g, '') + '”' : '') + (s.cite ? ' Cite your sources.' : '') + ' Delete this note.]')));
      }
    });
    b.push(BREAK);
    b.push(para(runs('References', { b: true }), '<w:pStyle w:val="Heading1"/>'));
    var hang = '<w:ind w:left="720" w:hanging="720"/>';
    b.push(para(hl('[Delete these examples. List every source cited in the paper, alphabetized by the first author’s last name, double-spaced, with a 0.5-inch hanging indent (already set on this page).]'), hang));
    (P.refs || []).forEach(function (r) { b.push(para(r.map(function (sg) { return runs(sg.t.replace(/\*/g, ''), { i: sg.i }); }).join(''), hang)); });

    var doc = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><w:body>' + b.join('') +
      '<w:sectPr><w:headerReference w:type="default" r:id="rIdH"/><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="720" w:footer="720" w:gutter="0"/></w:sectPr></w:body></w:document>';
    var rpr = '<w:rFonts w:ascii="' + F[0] + '" w:hAnsi="' + F[0] + '" w:cs="' + F[0] + '" w:eastAsia="' + F[0] + '"/><w:sz w:val="' + F[1] + '"/><w:szCs w:val="' + F[1] + '"/>';
    var styles = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
      '<w:docDefaults><w:rPrDefault><w:rPr>' + rpr + '<w:lang w:val="en-US"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:before="0" w:after="0" w:line="480" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults>' +
      '<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:before="0" w:after="0" w:line="480" w:lineRule="auto"/><w:ind w:firstLine="720"/></w:pPr><w:rPr>' + rpr + '</w:rPr></w:style>' +
      '<w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:keepNext/><w:jc w:val="center"/><w:ind w:firstLine="0"/><w:outlineLvl w:val="0"/></w:pPr><w:rPr><w:b/><w:color w:val="000000"/></w:rPr></w:style>' +
      '<w:style w:type="paragraph" w:styleId="Heading2"><w:name w:val="heading 2"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:keepNext/><w:ind w:firstLine="0"/><w:outlineLvl w:val="1"/></w:pPr><w:rPr><w:b/><w:color w:val="000000"/></w:rPr></w:style>' +
      '<w:style w:type="paragraph" w:styleId="Heading3"><w:name w:val="heading 3"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:keepNext/><w:ind w:firstLine="0"/><w:outlineLvl w:val="2"/></w:pPr><w:rPr><w:b/><w:i/><w:color w:val="000000"/></w:rPr></w:style>' +
      '<w:style w:type="paragraph" w:styleId="Header"><w:name w:val="header"/><w:basedOn w:val="Normal"/><w:pPr><w:jc w:val="right"/><w:ind w:firstLine="0"/><w:spacing w:line="240" w:lineRule="auto"/></w:pPr></w:style>' +
      '</w:styles>';
    var header = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:hdr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:p><w:pPr><w:pStyle w:val="Header"/></w:pPr><w:r><w:fldChar w:fldCharType="begin"/></w:r><w:r><w:instrText xml:space="preserve"> PAGE </w:instrText></w:r><w:r><w:fldChar w:fldCharType="separate"/></w:r><w:r><w:t>1</w:t></w:r><w:r><w:fldChar w:fldCharType="end"/></w:r></w:p></w:hdr>';
    var settings = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:settings xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:defaultTabStop w:val="720"/><w:compat><w:compatSetting w:name="compatibilityMode" w:uri="http://schemas.microsoft.com/office/word" w:val="15"/></w:compat></w:settings>';
    return zip([
      { name: '[Content_Types].xml', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/word/settings.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml"/><Override PartName="/word/header1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml"/></Types>' },
      { name: '_rels/.rels', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>' },
      { name: 'word/_rels/document.xml.rels', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rIdS" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rIdT" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings" Target="settings.xml"/><Relationship Id="rIdH" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/header" Target="header1.xml"/></Relationships>' },
      { name: 'word/document.xml', data: doc },
      { name: 'word/styles.xml', data: styles },
      { name: 'word/settings.xml', data: settings },
      { name: 'word/header1.xml', data: header }
    ]);
  }

  // Example references used in the Word template (real sources; check the edition you were assigned).
  var EXAMPLES = {
    med: [{ t: 'Ignatavicius, D. D., Rebar, C. R., & Heimgartner, N. M. (2024). ' }, { t: 'Medical-surgical nursing: Concepts for clinical judgment and collaborative care', i: true }, { t: ' (11th ed.). Elsevier.' }],
    psych: [{ t: 'Halter, M. J. (2022). ' }, { t: 'Varcarolis’ foundations of psychiatric-mental health nursing: A clinical approach', i: true }, { t: ' (9th ed.). Elsevier.' }],
    dsm: [{ t: 'American Psychiatric Association. (2022). ' }, { t: 'Diagnostic and statistical manual of mental disorders', i: true }, { t: ' (5th ed., text rev.). https://doi.org/10.1176/appi.books.9780890425787' }],
    film: [{ t: 'Russell, D. O. (Director). (2012). ' }, { t: 'Silver linings playbook', i: true }, { t: ' [Film]. The Weinstein Company.' }],
    article: [{ t: 'Author, A. A., & Author, B. B. (Year). Title of the article in sentence case. ' }, { t: 'Journal Name in Title Case, 12', i: true }, { t: '(3), 45–52. https://doi.org/10.xxxx/xxxxx' }]
  };
  function exampleRefs(typeId) {
    var e = EXAMPLES, mh = typeId === 'film' || typeId === 'reflection';
    var list = mh ? [e.dsm, e.psych, typeId === 'film' ? e.film : null, e.article] : [e.article, e.med];
    return list.filter(Boolean).sort(function (a, b) { return a[0].t.localeCompare(b[0].t); });
  }

  var API = { TYPES: TYPES, WPP: WPP, WPARA: WPARA, plan: plan, reference: reference, sentenceCase: sentenceCase, titleCase: titleCase, people: people, docx: docx, exampleRefs: exampleRefs, EXAMPLES: EXAMPLES, crc32: crc32, zip: zip };
  if (typeof module !== 'undefined' && module.exports) module.exports = API; else root.APA = API;
})(this);
