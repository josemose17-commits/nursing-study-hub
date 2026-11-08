// Definitions support the new Learn paths. Whole names are not given invented roots.
// Naming stems: WHO INN Stem Book 2018; medical components: NLM/Open RN terminology.
module.exports={
 abbreviations:{ocd:'obsessive-compulsive disorder',adhd:'attention-deficit/hyperactivity disorder',ptsd:'post-traumatic stress disorder',nms:'neuroleptic malignant syndrome',ssri:'selective serotonin reuptake inhibitor',snri:'serotonin and norepinephrine reuptake inhibitor',eps:'extrapyramidal symptoms',maoi:'monoamine oxidase inhibitor',ect:'electroconvulsive therapy',dbt:'dialectical behavior therapy',cbt:'cognitive behavioral therapy'},
 splits:{psychosis:['psych','osis'],psychotherapy:['psych','o','therapy'],psychology:['psych','o','logy'],psychopathology:['psych','o','path','o','logy'],neuropsychology:['neur','o','psych','o','logy']},
 stems:[
  ['azepam','diazepam-related medicines','diazepam lorazepam clonazepam oxazepam temazepam'],
  ['azolam','diazepam-related medicines of this subgroup','alprazolam midazolam triazolam'],
  ['peridol','haloperidol-related antipsychotics','haloperidol droperidol'],
  ['peridone','risperidone-related antipsychotics','risperidone paliperidone'],
  ['oxetine','serotonin and/or norepinephrine reuptake inhibitors of this group','fluoxetine paroxetine duloxetine']
 ],
 medications:{
  clozapine:'An antipsychotic with a risk of severe neutropenia; ANC monitoring continues after removal of the REMS program.',
  olanzapine:'A second-generation antipsychotic; metabolic adverse effects are important in monitoring.',
  quetiapine:'A second-generation antipsychotic; monitor prescribed effects and risks including sedation, orthostasis and metabolic changes.',
  aripiprazole:'An antipsychotic with partial dopamine-receptor agonist activity; a name alone does not determine its full actions.',
  sertraline:'A selective serotonin reuptake inhibitor (SSRI).',
  citalopram:'An SSRI; review dose-related QT precautions and interactions.',
  escitalopram:'An SSRI antidepressant.',
  venlafaxine:'A serotonin and norepinephrine reuptake inhibitor (SNRI).',
  bupropion:'An antidepressant also used in smoking-cessation treatment; seizure risk affects its use.',
  lithium:'A mood stabilizer requiring serum-level, renal, thyroid, fluid and interaction monitoring.',
  valproate:'An antiseizure medicine also used in bipolar treatment; check hepatic, pregnancy and other product precautions.',
  carbamazepine:'An antiseizure medicine also used for mood stabilization; has important interactions and blood-cell risks.',
  lamotrigine:'An antiseizure medicine also used in bipolar treatment; new rash requires prompt clinical assessment.',
  benztropine:'An anticholinergic used for certain medication-induced extrapyramidal symptoms; it does not treat every movement disorder.',
  dantrolene:'A skeletal-muscle relaxant used in malignant hyperthermia crisis treatment.',
  naloxone:'An opioid antagonist that can reverse opioid-related respiratory depression; emergency help and continued observation remain necessary.',
  naltrexone:'An opioid antagonist used in selected alcohol/opioid use-disorder treatment plans; not the rescue treatment for an acute overdose.',
  buprenorphine:'A partial opioid agonist used in prescribed treatment, including opioid use disorder.',
  methadone:'An opioid agonist used in prescribed pain or opioid use-disorder treatment; monitoring and dosing are individualized.',
  disulfiram:'A medicine used in selected alcohol use-disorder plans that causes an adverse reaction with alcohol.',
  acamprosate:'A medicine used to support alcohol abstinence as part of a treatment plan.',
  methylphenidate:'A stimulant used for ADHD; assess prescribed response, appetite, sleep, vital signs and misuse risk.',
  atomoxetine:'A nonstimulant ADHD medicine that inhibits norepinephrine reuptake.',
  donepezil:'A cholinesterase inhibitor used for symptoms of Alzheimer disease.',
  rivastigmine:'A cholinesterase inhibitor used for selected neurocognitive disorders.',
  memantine:'An NMDA-receptor antagonist used in selected Alzheimer disease treatment plans.'
 },
 definitions:{psychosis:'A disturbance in reality testing that can include hallucinations, delusions or disorganized thinking.',psychotherapy:'Treatment using psychological methods and a therapeutic relationship.',psychology:'The study of mind and behavior.',psychopathology:'The study or features of mental disorders.',neuropsychology:'The study of relationships between brain function, cognition and behavior.','pack-years':'Cumulative cigarette exposure: packs per day multiplied by years, summed across intervals.'}
};
