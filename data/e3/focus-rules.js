// Exam 3's focus settings for focus.js (load this first): its own storage keys, the keywords that tie a
// question to each map topic ([chapter, topic-title test, keywords]; a topic with none covers its whole
// chapter), and the professor's study-guide topics (empty until the Exam 3 study guide is added).
window.FOCUS_CFG = {
  key: 'e3-focus', saved: 'e3-focus-saved',
  rules: [
    ['53', /^the adrenal glands/i, /adrenal|aldosterone|cortisol|glucocorticoid|mineralocorticoid|RAAS|renin|angiotensin|catecholamine|epinephrine|norepinephrine|ACTH|CRH/i],
    ['53', /^pituitary, thyroid/i, /pituitary|hypothalam|TSH|TRH|\bT3\b|\bT4\b|thyroxine|calcitonin|parathyroid|\bPTH\b|islet|glucagon|somatostatin|ADH|vasopressin|growth hormone|prolactin|iodine/i],
    ['53', /^aging and covid/i, /older adult|aging|age-related|elderly|\b[6-9]\d-year-old|COVID|dehydrat|glucose tolerance|estrogen/i],
    ['53', /^endocrine assessment/i, /history|inspect|palpat|exophthalmos|buffalo hump|striae|vitiligo|hirsutism|gynecomastia|bruit|thyroid storm|orthostatic|iodine/i],
    ['53', /^diagnostic tests/i, /24-hour urine|specimen|assay|stimulation|provocative|suppression|saliva|A1C|thyroid scan|radioactive iodine|fine needle|\bFNA\b|MRI|sella turcica|catecholamine/i],
    ['55', /^hypothyroidism/i, /hypothyroid|Hashimoto|levothyroxine|myxedema|cold intoleran|TSH|goiter|amiodarone|lithium|bradycard|constipat|weight gain/i],
    ['55', /^myxedema coma/i, /myxedema coma|hypotherm|hyponatrem|IV levothyroxine|IV T3|IV T4|decreased (level of )?consciousness|sedat|opioid/i],
    ['55', /^hyperthyroidism and graves/i, /hyperthyroid|Graves|exophthalmos|pretibial|TSI|TRAb|heat intoleran|eyelid lag|globe lag|goiter|bruit|RAIU|tachycard|palpitation|toxic multinodular/i],
    ['55', /^treating hyperthyroidism/i, /methimazole|propylthiouracil|\bPTU\b|SSKI|potassium iodide|iodine|propranolol|atenolol|beta[- ]?blocker|radioactive iodine|\bRAI\b|131I|¹³¹I|radiation precaution/i],
    ['55', /^thyroidectomy and thyroid storm/i, /thyroidectomy|thyroid storm|thyroid crisis|stridor|hoarse|laryngeal nerve|hemorrhage|tetany|calcium gluconate|tracheostomy|Chvostek|Trousseau|euthyroid/i],
    ['55', /^thyroiditis and thyroid cancer/i, /thyroiditis|anti-TPO|papillary|follicular|medullary|anaplastic|thyroid cancer|nodule/i],
    ['55', /^hypoparathyroidism and hyperparathyroidism/i, /parathyroid|\bPTH\b|calcium|hypocalc|hypercalc|phosph|Chvostek|Trousseau|tetany|cinacalcet|calcitriol|bisphosphonate|kidney stone|vitamin D/i],
    ['56', /^types, risk/i, /type 1|type 2|T1DM|T2DM|LADA|MODY|gestational|GDM|metabolic syndrome|screen|prediabet|risk factor|waist|BMI|Agent Orange/i],
    ['56', /^diagnosing and monitoring/i, /A1C|fasting (blood |plasma )?glucose|OGTT|glucose tolerance|CGM|continuous glucose|meter|fingerstick|BGM|time[- ]in[- ]range|lancet|alternate site/i],
    ['56', /^chronic complications/i, /retinopath|neuropath|nephropath|albumin|macrovascular|microvascular|gastroparesis|orthostatic|stroke|cardiovascular|erectile|sorbitol|blind|cataract|glaucoma/i],
    ['56', /^antidiabetic drugs/i, /metformin|glipizide|glyburide|glimepiride|sulfonylurea|meglitinide|repaglinide|pioglitazone|rosiglitazone|\bTZD|sitagliptin|saxagliptin|linagliptin|alogliptin|DPP-4|GLP-1|semaglutide|liraglutide|exenatide|dulaglutide|SGLT2|empagliflozin|dapagliflozin|canagliflozin|acarbose|miglitol|pramlintide|lactic acidosis/i],
    ['56', /^insulin/i, /insulin|lispro|aspart|glulisine|regular|NPH|glargine|detemir|degludec|syringe|\bpen\b|pump|CSII|inject|Somogyi|dawn phenomenon|U-500/i],
    ['56', /^eating and exercise/i, /carbohydrate|\bcarbs?\b|\bCHO\b|carb counting|MyPlate|dietitian|\bRDN\b|fiber|alcohol|exercise|physical activity|ketones? (present|in the urine)/i],
    ['56', /^hypoglycemia/i, /hypoglyc|15-15|15 g|glucagon|dextrose|D50|shaky|diaphore|sweat|hypoglycemic unawareness|glucose (tablets|gel)/i],
    ['56', /^dka and hhs/i, /\bDKA\b|ketoacidosis|\bHHS\b|hyperosmolar|Kussmaul|ketone|anion gap|osmolarity|sick[- ]day|potassium|D5|0\.45%|half-normal|cerebral edema/i],
    ['56', /^foot care, kidneys/i, /foot|feet|monofilament|ulcer|Charcot|amputat|shoe|sock|toenail|callus|nephropath|albumin|ACE inhibitor|\bARB\b|NSAID|contrast/i],
    ['56', /^diabetes in the hospital/i, /hospital|surgery|surgical|NPO|pre-?op|post-?op|sliding|correction dose|basal|IV insulin|insulin (drip|infusion)|pancreas transplant|TPN|beta blocker/i],
    ['56', /^teaching self-management/i, /teach|education|self-management|teach-back|literacy|survival skill|home care|sick[- ]day/i]
  ],
  guide: []
};
