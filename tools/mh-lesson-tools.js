// Authoring helpers for the existing Learn/studio engine. No new scoring engine.
const refs = {
  communication: {title:'Open RN: communication and therapeutic relationships',url:'https://www.ncbi.nlm.nih.gov/sites/books/NBK610828/'},
  groups: {title:'AGPA: group psychotherapy practice guidance',url:'https://agpa.org/guidelines-ethics/practice-guidelines-for-group-psychotherapy-2/'},
  remote: {title:'HHS: group teletherapy',url:'https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-for-behavioral-health/group-teletherapy'},
  clozapine: {title:'FDA: clozapine REMS removal and continued ANC monitoring',url:'https://www.fda.gov/drugs/drug-safety-and-availability/fda-removes-risk-evaluation-and-mitigation-strategy-rems-program-antipsychotic-drug-clozapine'},
  muscarinic: {title:'FDA: a muscarinic treatment for adult schizophrenia',url:'https://www.fda.gov/news-events/press-announcements/fda-approves-drug-new-mechanism-action-treatment-schizophrenia'},
  delirium: {title:'NICE CG103: delirium assessment and care',url:'https://www.nice.org.uk/guidance/cg103/chapter/Recommendations'},
  eating: {title:'NICE NG69: physical monitoring and acute care in eating disorders',url:'https://www.nice.org.uk/guidance/ng69/chapter/Recommendations'},
  alcohol: {title:'ASAM: alcohol withdrawal management guideline',url:'https://www.asam.org/quality-care/clinical-guidelines/alcohol-withdrawal-management-guideline'},
  naloxone: {title:'FDA: opioid overdose and naloxone',url:'https://www.fda.gov/consumers/consumer-updates/access-naloxone-can-save-life-during-opioid-overdose'},
  nms: {title:'DailyMed: haloperidol, NMS recognition and management',url:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8ca14b79-6671-4e44-aa34-6564a92aa197'},
  restraint: {title:'42 CFR 482.13: patient rights, restraint and seclusion',url:'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-482/subpart-B/section-482.13'},
  buprenorphine: {title:'SAMHSA: buprenorphine treatment and induction guidance',url:'https://www.samhsa.gov/substance-use/treatment/options/buprenorphine'}
};
const pick = (scene,task,options,answer,hint) => ({kind:'choice',scene,task,hint,options:options.map(([text,why],i)=>({id:'o'+i,text,why,correct:i===answer}))});
const order = (scene,task,items,why,hint) => ({kind:'order',scene,task,items,why,hint,retryHint:hint});
const lesson = (why,patient,visual,steps,extra={}) => ({why,patient,visual:{type:visual[0],title:visual[1],cards:visual[2].map(([title,text])=>({title,text})),caption:visual[3]},steps,...extra});
module.exports={refs,pick,order,lesson};
