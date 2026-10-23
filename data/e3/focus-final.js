// The Final map and the Final Mastery test keep their own focus: the same keyword rules as Exam 3 (focus-rules.js,
// which also holds the final's chapters), their own storage keys, and no study guide until the professor gives one.
// Load after focus-rules.js and before focus.js.
window.FOCUS_CFG = Object.assign({}, window.FOCUS_CFG, { key: 'fin-focus', saved: 'fin-focus-saved', guide: [] });
