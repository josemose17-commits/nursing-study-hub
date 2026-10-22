// NRS 114 Fall 2026 — the course schedule from the syllabus (no names or contact details), for Semester.html and Home.
// The syllabus gives weeks, not dates: week1 is the Monday of week 1, worked back from Exam 3 on Wed Oct 28 (week 9).
// Every date here is an estimate the student can change on the Semester page (saved as sem-dates).
// Exam chapters follow the professor's study guides, which the student confirmed over the syllabus grouping.
window.SEMESTER = {
  course: 'NRS 114 · Common Health Alterations · Fall 2026',
  week1: '2026-08-31',
  // Countdown items: id, title, default date, kind (exam/final/eval/due/info), what it covers.
  dates: [
    { id: 'exam1', t: 'Exam 1', d: '2026-09-16', k: 'exam', w: 3, about: 'Perioperative care, immunity and oncology (Ch 9, 16–19)' },
    { id: 'exam2', t: 'Exam 2', d: '2026-10-14', k: 'exam', w: 7, about: 'Respiratory, cardiac and hematology (Ch 22, 24, 25, 27–30, 34)', href: 'Exam 2 Map.html' },
    { id: 'exam3', t: 'Exam 3', d: '2026-10-28', k: 'exam', w: 9, about: 'GI and endocrine (Ch 45, 46, 47, 53, 55, 56)', href: 'Exam 3 Route.html', sure: true },
    { id: 'exam4', t: 'Exam 4 (mental health)', d: '2026-11-18', k: 'exam', w: 12, about: 'Mental health basics, depression, suicide, bipolar, anxiety/OCD' },
    { id: 'exam5', t: 'Exam 5 (mental health)', d: '2026-12-09', k: 'exam', w: 15, about: 'Schizophrenia, somatic/dissociative, substance use, eating, child/ADHD, personality, neurocognitive' },
    { id: 'final', t: 'Comprehensive final', d: '2026-12-16', k: 'final', w: 16, about: 'Everything — 15% of the grade' },
    { id: 'clin-mid', t: 'Midterm clinical evaluation', d: '2026-10-14', k: 'eval', w: 7, about: 'Clinical evaluation tool, week 7' },
    { id: 'clin-final', t: 'Final clinical evaluation', d: '2026-12-02', k: 'eval', w: 14, about: 'Clinical evaluation tool, week 14 — a Pass is required' },
    { id: 'dosage', t: 'Dosage calculation exam', d: '', k: 'exam', about: '90% needed to give meds in clinical; 3 tries, remediation before each retake' },
    { id: 'movie', t: 'Mental health movie paper (APA)', d: '', k: 'due', about: '2.5% of the grade — a mental health themed movie' },
    { id: 'meeting', t: 'Self-help meeting paper (APA)', d: '', k: 'due', about: '2.5% — attend an AA/NA/Al-Anon/OA/SA meeting and reflect' },
    { id: 'grades', t: 'Final grades posted', d: '2026-12-22', k: 'info', about: 'Submission of NRS 114 final grades' }
  ],
  // Weekly plan. lec: lecture topic; ch: chapters; lab: lab skills; ticket: ticket-to-lab items; work: assignments (due by the next class);
  // map: where the chapters live on this site.
  weeks: [
    { w: 1, lec: 'Perioperative care', ch: [9], lab: ['IV medication administration', 'IV therapy', 'Fluids and electrolytes'], ticket: ['Preop care video', 'Postop care video'], work: ['Perioperative care hourly rounds', 'Sherpath week 1', 'EAQ'] },
    { w: 2, lec: 'Immunity and oncology', ch: [16, 17, 18, 19], lab: ['Central venous catheters and PICC lines', 'Test-off: adding medication to IV fluids and piggyback'], ticket: ['Video case study: anaphylaxis'], work: ['Video: complications of cancer', 'Sherpath week 2', 'EAQ'] },
    { w: 3, lec: 'Hematology', ch: [33, 34], lab: ['Test-off: blood transfusion administration', 'Test-off: blood transfusion reaction'], ticket: ['Video case studies: anemia, leukemia'], work: ['Sherpath week 3', 'EAQ'], exam: 'exam1' },
    { w: 4, lec: 'Respiratory', ch: [22, 23, 24, 25], lab: ['Airway management and chest tubes', 'Respiratory assessment', 'Test-off: tracheostomy suctioning and care', 'Chest tube care'], ticket: ['Endotracheal tube: open and closed suctioning'], work: ['Patient history and physical: recognize cues in the respiratory system', 'Sherpath week 4', 'EAQ'], map: 'Exam 2 Map.html' },
    { w: 5, lec: 'Cardiac and perfusion', ch: [27, 28, 29, 30], lab: ['Basic EKG interpretation', 'Cardiovascular assessment'], ticket: ['Video: atrial fibrillation'], work: ['Shadow Health: end-stage heart failure', 'Sherpath week 5', 'EAQ'], map: 'Exam 2 Map.html' },
    { w: 6, lec: 'Endocrine', ch: [53, 56], lab: ['Blood glucose monitoring and insulin administration', 'Skills: measuring blood glucose'], ticket: ['Videos: diabetes mellitus, complications of diabetes'], work: ['Sherpath week 6', 'EAQ'], map: 'Exam 3 Map.html' },
    { w: 7, lec: 'Endocrine', ch: [55], lab: ['TPN and PPN'], ticket: ['Video case study: hypothyroidism'], work: ['Lesson: hypothyroidism', 'Sherpath week 7', 'EAQ'], map: 'Exam 3 Map.html', exam: 'exam2', note: 'Midterm clinical evaluation' },
    { w: 8, lec: 'GI', ch: [45, 46, 47], lab: ['Tube feeding, gastrostomy and NG tubes', 'Test-off: giving medication through a G-tube'], ticket: ['Video: GERD'], work: ['Shadow Health: GI hourly rounds', 'Sherpath week 8', 'EAQ'], map: 'Exam 3 Map.html', note: 'Midterm warnings' },
    { w: 9, lec: 'GI', ch: [48, 49], lab: ['Bowel diversions and ostomies'], ticket: ['Video: abdominal pain'], work: ['Assignment: Crohn’s disease', 'Adaptive quiz: inflammatory bowel disease', 'Sherpath week 9', 'EAQ'], map: 'Exam 3 Map.html', exam: 'exam3' },
    { w: 10, lec: 'GI — liver, gallbladder, pancreas', ch: [50, 51, 52], lab: ['Simulation: hypoglycemia, DKA, HHS'], ticket: ['Video: cirrhosis'], work: ['Video case study: cholecystitis', 'Video case study: pancreatitis', 'Sherpath week 10'], note: 'Clinical feedback on care plans' },
    { w: 11, lec: 'Mental health begins: wellness and illness, diagnosis, lifespan, history and legal issues, theories and therapeutic communication, coping and defense mechanisms, trauma', ch: [], lab: ['Nurse–patient relationship, therapeutic communication, interview, mental status exam'], ticket: [], work: ['EAQ activity'] },
    { w: 12, lec: 'Depression, suicide, bipolar disorders, anxiety and OCD', ch: [], lab: ['Depression and suicide case study'], ticket: [], work: ['EAQ activity'], exam: 'exam4' },
    { w: 13, lec: 'Schizophrenia, psychotic disorders, somatic and dissociative disorders', ch: [], lab: ['Schizophrenia case study: de-escalation, restraints, legal aspects'], ticket: [], work: ['EAQ activity'] },
    { w: 14, lec: 'Substance use and addiction, eating disorders, child and adolescent / ADHD', ch: [], lab: ['Substance use disorder case study'], ticket: [], work: ['EAQ activity'], note: 'Final clinical evaluation' },
    { w: 15, lec: 'Personality disorders, neurocognitive disorders', ch: [], lab: ['Lab check-off list completion'], ticket: [], work: ['EAQ activity'], exam: 'exam5', note: 'Clinical feedback on care plans' },
    { w: 16, lec: 'Final exams', ch: [], lab: [], ticket: [], work: [], exam: 'final' }
  ],
  // Grading (syllabus "Methods of Evaluation").
  grade: {
    parts: [
      { id: 'exam1', t: 'Exam 1', w: 14 }, { id: 'exam2', t: 'Exam 2', w: 14 }, { id: 'exam3', t: 'Exam 3', w: 14 },
      { id: 'exam4', t: 'Exam 4', w: 14 }, { id: 'exam5', t: 'Exam 5', w: 14 }, { id: 'final', t: 'Final exam', w: 15 },
      { id: 'movie', t: 'Movie paper', w: 2.5 }, { id: 'meeting', t: 'Meeting paper', w: 2.5 },
      { id: 'sherpath', t: 'Sherpath assignments and quizzes (average)', w: 10 }
    ],
    pass: 78, theoryMin: 75,
    letters: [[90, 'A'], [85, 'B+'], [80, 'B'], [77, 'C+'], [75, 'C'], [70, 'D'], [0, 'F']]
  },
  // Every course requirement that isn't a grade.
  musts: [
    'A course grade of 78% (the syllabus also lists a 75% theory minimum — ask which applies)',
    'Every lab critical-element skills test-off passed',
    'A Pass on the final clinical evaluation',
    '90% on the proctored dosage calculation exam (3 tries; remediation before each retake)',
    'Nursing Student Handbook read and the signature sheet submitted',
    'Satisfactory attendance — lab tickets done before lab, or you count as absent',
    'Clinical written work: 2 nursing care plans (one may be a perioperative paper) plus a comprehensive plan of care, 1 therapeutic communication process recording, 1 health teaching plan',
    'Late or missed assignments are not accepted; missed exams score 0 until the end-of-semester make-up'
  ]
};
