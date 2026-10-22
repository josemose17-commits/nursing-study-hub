// Semester helpers shared by Home and Semester.html: the countdown dates (the syllabus estimates in data/semester.js,
// with the student's own changes and added dates on top), the current course week, and a calendar file.
// Saved keys start with "sem-" so the progress file and link carry them to other devices.
(function () {
  var S = window.SEMESTER; if (!S) return;
  function read(k, d) { try { var v = JSON.parse(localStorage.getItem(k) || 'null'); return v == null ? d : v; } catch (e) { return d; } }
  function write(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  // 'YYYY-MM-DD' ↔ a local date (no time zone shifts).
  function parse(s) { var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || ''); return m ? new Date(+m[1], +m[2] - 1, +m[3]) : null; }
  function iso(d) { return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function today() { var d = new Date(); return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function daysTo(s) { var d = parse(s); return d ? Math.round((d - today()) / 864e5) : null; }
  var MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], DAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  function nice(s) { var d = parse(s); return d ? DAY[d.getDay()] + ' ' + MON[d.getMonth()] + ' ' + d.getDate() : 'No date yet'; }
  function left(n) { return n == null ? 'set a date' : n < 0 ? 'done' : n === 0 ? 'today' : n === 1 ? 'tomorrow' : 'in ' + n + ' days'; }

  // Every countdown item: syllabus defaults, the student's changed dates (sem-dates) and their own items (sem-custom).
  function all() {
    var own = read('sem-dates', {}), custom = read('sem-custom', []);
    var list = S.dates.map(function (x) { var o = Object.assign({}, x); if (own[x.id] != null) { o.d = own[x.id]; o.mine = true; } return o; });
    custom.forEach(function (c) { list.push({ id: c.id, t: c.t, d: c.d, k: 'mine', about: c.about || '', custom: true, mine: true }); });
    return list;
  }
  function upcoming(n) {
    return all().filter(function (x) { var d = daysTo(x.d); return d != null && d >= 0; })
      .sort(function (a, b) { return parse(a.d) - parse(b.d); }).slice(0, n || 99);
  }
  function week1() { return read('sem-week1', S.week1); }
  // Course week for a date (1–16), or 0 before the semester and 17 after it.
  function weekOf(d) { var w = Math.floor(((d || today()) - parse(week1())) / (7 * 864e5)) + 1; return w < 1 ? 0 : w > 16 ? 17 : w; }
  function weekStart(w) { var d = parse(week1()); d.setDate(d.getDate() + (w - 1) * 7); return d; }

  // A calendar file (.ics) with every dated item: all-day events, a reminder the day before, and a week before for exams.
  function ics() {
    var esc = function (s) { return String(s || '').replace(/\\/g, '\\\\').replace(/[,;]/g, '\\$&').replace(/\n/g, '\\n'); };
    var stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, 'Z');
    var L = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//NRS 114 Study Hub//EN', 'CALSCALE:GREGORIAN'];
    all().forEach(function (x) {
      var d = parse(x.d); if (!d) return;
      var end = new Date(d); end.setDate(end.getDate() + 1);
      L.push('BEGIN:VEVENT', 'UID:nrs114-' + x.id + '@study-hub', 'DTSTAMP:' + stamp, 'DTSTART;VALUE=DATE:' + iso(d).replace(/-/g, ''),
        'DTEND;VALUE=DATE:' + iso(end).replace(/-/g, ''), 'SUMMARY:' + esc('NRS 114 · ' + x.t), 'DESCRIPTION:' + esc(x.about));
      [1].concat(x.k === 'exam' || x.k === 'final' ? [7] : []).forEach(function (n) {
        L.push('BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:' + esc(x.t + (n === 1 ? ' tomorrow' : ' in a week')), 'TRIGGER:' + (n === 1 ? '-PT15H' : '-P6DT15H'), 'END:VALARM');   // 9 a.m. the day (or week) before
      });
      L.push('END:VEVENT');
    });
    L.push('END:VCALENDAR');
    return L.join('\r\n');
  }
  window.SEM = { read: read, write: write, parse: parse, iso: iso, today: today, daysTo: daysTo, nice: nice, left: left, all: all, upcoming: upcoming, week1: week1, weekOf: weekOf, weekStart: weekStart, ics: ics };
})();
