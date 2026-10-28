const S = (title, url) => ({ title, url });
module.exports = {
 crisis:[S('2024 adult hyperglycemic-crisis consensus','https://link.springer.com/article/10.1007/s00125-024-06183-8')],
 glycemia:[S('ADA 2026: glycemic goals and hypoglycemia','https://doi.org/10.2337/dc26-s006')],
 hospital:[S('ADA 2026: diabetes care in hospital','https://doi.org/10.2337/dc26-s016')],
 diagnosis:[S('ADA 2026: diagnosis and classification','https://doi.org/10.2337/dc26-s002')],
 technology:[S('ADA 2026: diabetes technology','https://doi.org/10.2337/dc26-s007')],
 diabetestypes:[S('NIDDK: types of diabetes','https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes')],
 selfcare:[S('NIDDK: managing diabetes','https://www.niddk.nih.gov/health-information/diabetes/overview/managing-diabetes')],
 complications:[S('NIDDK: preventing diabetes problems','https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems')],
 aging:[S('MedlinePlus: aging changes in hormone production','https://medlineplus.gov/ency/article/004000.htm')],
 anatomy:[S('OpenStax: anatomical terminology and regions','https://openstax.org/books/anatomy-and-physiology-2e/pages/1-6-anatomical-terminology')],
 endocrine:[S('OpenStax: the endocrine system','https://openstax.org/books/anatomy-and-physiology-2e/pages/17-introduction')],
 oral:[S('NCI: oral complications and supportive care','https://www.cancer.gov/about-cancer/treatment/side-effects/mouth-throat/oral-complications-pdq')],
 gerd:[S('NIDDK: GERD treatment','https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/treatment')],
 hernia:[S('NIDDK: reflux treatment and fundoplication','https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/treatment')],
 pud:[S('NIDDK: peptic ulcers','https://www.niddk.nih.gov/health-information/digestive-diseases/peptic-ulcers-stomach-ulcers')],
 hpylori:[S('ACG 2024: H. pylori treatment and confirmation of cure','https://gi.org/journals-publications/ebgi/schoenfeld_sep2024/')],
 bleed:[S('NIDDK: treatment for GI bleeding','https://www.niddk.nih.gov/health-information/digestive-diseases/gastrointestinal-bleeding/treatment')],
 gastrectomy:[S('NCI: nutrition after gastrectomy','https://ccr.cancer.gov/surgical-oncology-program/clinical-team/diet-and-nutrition-after-gastrectomy-what-you-should-know')],
 dumping:[S('NIDDK: dumping syndrome treatment','https://www.niddk.nih.gov/health-information/digestive-diseases/dumping-syndrome/treatment')],
 urine:[S('MedlinePlus: 24-hour urine collection','https://medlineplus.gov/ency/article/003425.htm')],
 hypothyroid:[S('NIDDK: hypothyroidism','https://www.niddk.nih.gov/health-information/endocrine-diseases/hypothyroidism')],
 hyperthyroid:[S('NIDDK: hyperthyroidism','https://www.niddk.nih.gov/health-information/endocrine-diseases/hyperthyroidism')],
 thyroidsurgery:[S('ATA: surgical management of Graves disease','https://www.thyroid.org/surgical-management-graves-disease/')],
 thyroiditis:[S('ATA: thyroiditis','https://www.thyroid.org/thyroiditis/')],
 parathyroid:[S('NIDDK: primary hyperparathyroidism','https://www.niddk.nih.gov/health-information/endocrine-diseases/primary-hyperparathyroidism')],
 delegation:[S('NCSBN: delegation and jurisdiction-specific rules','https://www.ncsbn.org/delegation')],
 druglabels:[S('DailyMed: official prescribing information for the exact product','https://dailymed.nlm.nih.gov/dailymed/')]
};
module.exports.products = {
 'hypothyroid': [S('DailyMed: Synthroid interactions and administration','https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b9aea421-ae9b-439a-90a3-07a0a50e835d')],
 'hyperthyroid': [S('DailyMed: methimazole warnings','https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=490f168f-c703-5497-e063-6294a90ade87')],
 'insulin': [S('DailyMed: Lantus prescribing information','https://dailymed-beta.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d5e07a0c-7e14-4756-9152-9fea485d654a')],
 'diabetes-drugs': [S('ADA 2026: pharmacologic approaches','https://doi.org/10.2337/dc26-s009')]
};
