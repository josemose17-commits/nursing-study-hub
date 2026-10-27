// Teaching segmentations, explicitly enumerated rather than guessed from letter matches.
// Part labels are simplified study clues; the clinical definition takes precedence.
const parts = {};
function group(role, text) { text.split('|').forEach(row => { const [key, meaning] = row.split('='); parts[key] = { role, meaning }; }); }
group('prefix', 'a=without|an=without|anti=against|auto=self|brady=slow|dys=difficult or abnormal|endo=within|epi=on or above|eu=normal or good|extra=outside|hemi=half|hyper=excessive or high|hypo=deficient or low|inter=between|intra=within|macro=large|micro=small|mono=one|multi=many|neo=new|ortho=straight or upright|pan=all|para=beside or abnormal|peri=around|poly=many or much|post=after|pre=before|pro=before or forward|pseudo=false|retro=behind or backward|sub=under|supra=above|tachy=fast|trans=across|mal=bad or poor|homo=same|hetero=different');
group('root', 'acid=acid|aden=gland|adenoid=adenoid tissue|adip=fat|albumin=albumin protein|alveol=air sac|angi=vessel|append=appendix|arteri=artery|arthr=joint|ather=fatty plaque|atr=atrium|bar=pressure|blast=immature cell|bronch=bronchus|bronchi=bronchus|calc=calcium|capn=carbon dioxide|carcin=cancer|cardi=heart|cephal=head|chem=chemical|chol=bile|chole=bile|cholecyst=gallbladder|choledoch=bile duct|chondr=cartilage|chron=time|col=colon|colon=colon|cric=cricoid cartilage|cyan=blue|cyst=bladder or sac|cyt=cell|derm=skin|diaphragmat=diaphragm|diverticul=diverticulum or pouch|duoden=duodenum|electr=electricity|encephal=brain|enter=intestine|eosin=rosy staining|epitheli=epithelium|erythr=red|erythro=red|esophag=esophagus|fibr=fiber or fibrous tissue|gastr=stomach|gloss=tongue|gluc=glucose|glyc=sugar or glucose|gynec=female|hemat=blood|hem=blood|hepat=liver|hidr=sweat|hist=tissue|hydr=water|hyster=uterus|ile=ileum|immun=immune protection|isch=holding back|jejun=jejunum|kal=potassium|kary=nucleus|kerat=cornea or keratinized tissue|ket=ketones|kyph=posterior spinal curve|lact=milk|lapar=abdomen|laryng=larynx|leuk=white|lip=fat|lith=stone|lymph=lymph|magnes=magnesium|mandibul=mandible|mast=breast|mediastin=mediastinum|melan=black pigment|mening=meninges|mes=middle|metr=measure|muc=mucus|my=muscle|myc=fungus|myel=spinal cord or bone marrow|myx=mucus|nas=nose|natr=sodium|necr=death|nephr=kidney|neur=nerve|nucle=nucleus|ocul=eye|odont=tooth|odyn=pain|olig=few or little|onc=tumor|ophthalm=eye|or=mouth|osse=bone|oste=bone|ot=ear|ox=oxygen|pancreat=pancreas|path=disease|ped=foot|peps=digestion|peritone=peritoneum|phag=eating or swallowing|pharyng=pharynx|phleb=vein|phon=voice|phot=light|phys=natural function|pleur=pleura|pneum=air or lung|pneumon=lung|pod=foot|por=pore or opening|proct=rectum and anus|psych=mind|pulmon=lung|pylor=pylorus|pyr=heat or burning|radi=radiation|rect=rectum|ren=kidney|reticul=small network|retin=retina|rhabd=rod shaped or striated|rhin=nose|rhythm=rhythm|scler=hardening|scoli=lateral spinal curve|sial=saliva|sigmoid=sigmoid colon|sinus=sinus cavity|somn=sleep|splen=spleen|stomat=mouth|tens=pressure or tension|therm=heat|thorac=chest|thromb=clot|thym=thymus|thyr=thyroid|thyroid=thyroid gland|trache=trachea|trich=hair|troph=nourishment or growth|tympan=eardrum or drumlike sound|ur=urine|ureter=ureter|urethr=urethra|uter=uterus|uvul=uvula|vas=vessel|ven=vein|ventricul=ventricle|viscer=internal organs|xer=dry|xanth=yellow');
group('suffix', 'ac=pertaining to|al=pertaining to|algia=pain|ar=pertaining to|ary=pertaining to|ase=enzyme|cele=protrusion or hernia|centesis=puncture to remove fluid|crit=separation or measurement|cyte=cell|cytic=pertaining to cells|ectomy=surgical removal|ectasis=dilation or expansion|edema=swelling|emia=blood condition|emic=pertaining to a blood condition|esis=process or condition|gen=producing substance or agent|genic=producing or originating|gram=record|graphy=process of recording|ic=pertaining to|ion=process|ism=state or condition|itis=inflammation|ium=structure or tissue|lysis=breakdown or destruction|lytic=breaking down|malacia=softening|megaly=enlargement|oid=resembling|oma=tumor or mass|opia=vision condition|osis=condition, often abnormal|ous=pertaining to|pathy=disease or disorder|penia=deficiency|pexy=surgical fixation|phagia=eating or swallowing|phasia=speech|philia=attraction or affinity|philic=attracted to|phobia=fear or aversion|plakia=plaque or patch|plasia=formation or growth|plasty=surgical repair|plegia=paralysis|pnea=breathing|poiesis=formation or production|poietin=formation-stimulating substance|ptosis=drooping|ptysis=spitting|rrhage=bursting flow or bleeding|rrhagia=excessive flow or bleeding|rrhaphy=surgical suturing|rrhea=flow or discharge|scope=viewing instrument|scopy=visual examination|spasm=involuntary contraction|stasis=stopping or controlling|stomy=surgically created opening|therapy=treatment|tomy=incision|trophy=growth or nourishment|uria=urine condition|version=turning');
parts.o = {role:'combining vowel',meaning:'joins word parts; no separate clinical meaning'};
parts.i = {role:'combining vowel',meaning:'joins word parts; no separate clinical meaning'};
parts.plural = {role:'inflection',meaning:'plural ending',surface:'s'};
const splits = {};
function add(text) { text.trim().split(/\n/).forEach(line => { const [term, split] = line.trim().split('='); splits[term] = split.split('/'); }); }
add(`
hypoglycemia=hypo/glyc/emia
hyperglycemia=hyper/glyc/emia
hypoglycemic=hypo/glyc/emic
hyperglycemic=hyper/glyc/emic
hypocalcemia=hypo/calc/emia
hypercalcemia=hyper/calc/emia
hypokalemia=hypo/kal/emia
hyperkalemia=hyper/kal/emia
hyponatremia=hypo/natr/emia
hypernatremia=hyper/natr/emia
hypomagnesemia=hypo/magnes/emia
hypermagnesemia=hyper/magnes/emia
hypothyroidism=hypo/thyroid/ism
hyperthyroidism=hyper/thyroid/ism
parathyroid=para/thyroid
hypoparathyroidism=hypo/para/thyroid/ism
hyperparathyroidism=hyper/para/thyroid/ism
thyroidectomy=thyroid/ectomy
parathyroidectomy=para/thyroid/ectomy
thyroiditis=thyroid/itis
euthyroid=eu/thyroid
polyuria=poly/ur/ia
polydipsia=poly/dips/ia
polyphagia=poly/phag/ia
retinopathy=retin/o/pathy
nephropathy=nephr/o/pathy
neuropathy=neur/o/pathy
gastroparesis=gastr/o/paresis
albuminuria=albumin/uria
microvascular=micro/vascul/ar
macrovascular=macro/vascul/ar
lipohypertrophy=lip/o/hyper/trophy
ketoacidosis=ket/o/acid/osis
acidosis=acid/osis
alkalosis=alkal/osis
gastritis=gastr/itis
gastroenteritis=gastr/o/enter/itis
esophagitis=esophag/itis
stomatitis=stomat/itis
glossitis=gloss/itis
sialadenitis=sial/aden/itis
xerostomia=xer/o/stom/ia
leukoplakia=leuk/o/plakia
erythroplakia=erythr/o/plakia
dysphagia=dys/phag/ia
odynophagia=odyn/o/phag/ia
dyspepsia=dys/peps/ia
pyrosis=pyr/osis
hematemesis=hemat/emesis
hematochezia=hemat/o/chezia
steatorrhea=steat/o/rrhea
gastrectomy=gastr/ectomy
esophagectomy=esophag/ectomy
glossectomy=gloss/ectomy
mandibulectomy=mandibul/ectomy
colonoscopy=colon/o/scopy
sigmoidoscopy=sigmoid/o/scopy
endoscopy=endo/scopy
peritonitis=periton/itis
pancreatitis=pancreat/itis
appendicitis=appendic/itis
colostomy=col/o/stomy
ileostomy=ile/o/stomy
jejunostomy=jejun/o/stomy
duodenal=duoden/al
proctocolectomy=proct/o/col/ectomy
hepatic=hepat/ic
hepatitis=hepat/itis
hepatomegaly=hepat/o/megaly
splenomegaly=splen/o/megaly
cholelithiasis=chole/lith/iasis
choledocholithiasis=choledoch/o/lith/iasis
cholecystitis=cholecyst/itis
cholangitis=chol/ang/itis
cholecystectomy=cholecyst/ectomy
pancreatectomy=pancreat/ectomy
encephalopathy=encephal/o/pathy
hyperplasia=hyper/plasia
metaplasia=meta/plasia
dysplasia=dys/plasia
adenoma=aden/oma
carcinoma=carcin/oma
carcinogen=carcin/o/gen
carcinogenic=carcin/o/genic
cytology=cyt/o/logy
osteoporosis=oste/o/por/osis
osteomalacia=oste/o/malacia
myxedema=myx/edema
gynecomastia=gynec/o/mast/ia
oliguria=olig/uria
anuria=an/uria
hematuria=hemat/uria
dysuria=dys/uria
glycosuria=glyc/o/uria
glucosuria=gluc/o/s/uria
tachycardia=tachy/card/ia
bradycardia=brady/card/ia
tachypnea=tachy/pnea
bradypnea=brady/pnea
dyspnea=dys/pnea
apnea=a/pnea
hypopnea=hypo/pnea
orthopnea=ortho/pnea
hypoxia=hypo/ox/ia
hypoxemia=hypo/ox/emia
hypercapnia=hyper/capn/ia
hypercarbia=hyper/carb/ia
cyanosis=cyan/osis
hypotension=hypo/tens/ion
hypertension=hyper/tens/ion
hypovolemia=hypo/vol/emia
hypervolemia=hyper/vol/emia
isotonic=iso/ton/ic
hypotonic=hypo/ton/ic
hypertonic=hyper/ton/ic
hypothermia=hypo/therm/ia
hyperthermia=hyper/therm/ia
anemia=an/emia
leukemia=leuk/emia
leukocyte=leuk/o/cyte
erythrocyte=erythr/o/cyte
thrombocyte=thromb/o/cyte
reticulocyte=reticul/o/cyte
monocyte=mono/cyte
neutropenia=neutr/o/penia
thrombocytopenia=thromb/o/cyt/o/penia
pancytopenia=pan/cyt/o/penia
polycythemia=poly/cyt/hem/ia
macrocytic=macro/cytic
microcytic=micro/cytic
hypochromic=hypo/chrom/ic
megaloblast=megal/o/blast
megaloblastic=megal/o/blast/ic
hematopoiesis=hemat/o/poiesis
erythropoiesis=erythr/o/poiesis
erythropoietin=erythr/o/poietin
hemolysis=hem/o/lysis
hemolytic=hem/o/lytic
hemostasis=hem/o/stasis
hemodynamic=hem/o/dynam/ic
hemoglobin=hem/o/globin
hematocrit=hemat/o/crit
thrombosis=thromb/osis
thrombolytic=thromb/o/lytic
fibrinolytic=fibrin/o/lytic
arteriosclerosis=arteri/o/scler/osis
atherosclerosis=ather/o/scler/osis
arteriole=arteri/ole
myocardium=my/o/card/ium
myocardial=my/o/card/ial
pericardium=peri/card/ium
pericarditis=peri/card/itis
endocarditis=endo/card/itis
cardiomyopathy=cardi/o/my/o/pathy
cardiogenic=cardi/o/genic
cardioversion=cardi/o/version
nephrotoxicity=nephr/o/toxic/ity
hepatotoxicity=hepat/o/toxic/ity
ototoxicity=ot/o/toxic/ity
rhabdomyolysis=rhabd/o/my/o/lysis
phlebitis=phleb/itis
phlebotomy=phleb/o/tomy
intravenous=intra/ven/ous
intraosseous=intra/osse/ous
intrathecal=intra/thec/al
epidural=epi/dur/al
subcutaneous=sub/cutane/ous
interstitial=inter/stit/ial
extravasation=extra/vas/ation
nasopharynx=nas/o/pharynx
oropharynx=or/o/pharynx
laryngopharynx=laryng/o/pharynx
supraglottic=supra/glott/ic
tracheostomy=trache/o/stomy
tracheotomy=trache/o/tomy
laryngectomy=laryng/ectomy
laryngoscopy=laryng/o/scopy
bronchoscopy=bronch/o/scopy
thoracoscopy=thorac/o/scopy
thoracotomy=thorac/o/tomy
thoracentesis=thorac/centesis
pneumonectomy=pneumon/ectomy
pneumothorax=pneum/o/thorax
hemothorax=hem/o/thorax
bronchitis=bronch/itis
bronchiectasis=bronchi/ectasis
bronchospasm=bronch/o/spasm
bronchodilation=bronch/o/dilat/ion
bronchodilator=bronch/o/dilat/or
bronchoconstriction=bronch/o/constrict/ion
hemoptysis=hem/o/ptysis
pleural=pleur/al
pleuritic=pleur/itic
pulmonary=pulmon/ary
capnography=capn/o/graphy
polysomnography=poly/somn/o/graphy
spirometry=spir/o/metry
spirometer=spir/o/meter
oximetry=ox/i/metry
rhinoplasty=rhin/o/plasty
aphonia=a/phon/ia
tonsillectomy=tonsill/ectomy
adenoidectomy=adenoid/ectomy
uvulectomy=uvul/ectomy
sinusitis=sinus/itis
peritonsillar=peri/tonsill/ar
mediastinitis=mediastin/itis
mediastinoscopy=mediastin/o/scopy
mediastinum=mediastin/um
retroperitoneal=retro/peritone/al
immunotherapy=immun/o/therapy
autoimmunity=auto/immun/ity
immunoglobulin=immun/o/globulin
anticholinergic=anti/cholin/ergic
anticoagulant=anti/coagul/ant
antitoxin=anti/toxin
antibody=anti/body
antigen=anti/gen
neonatal=neo/nat/al
photosensitivity=phot/o/sensitiv/ity
microbiome=micro/bi/ome
autosomal=auto/som/al
idiopathic=idi/o/path/ic
teratogenic=terat/o/genic
neurologic=neur/o/log/ic
neurology=neur/o/logy
nephrology=nephr/o/logy
gastric=gastr/ic
epigastric=epi/gastr/ic
endocrine=endo/crine
exocrine=exo/crine
hypersecretion=hyper/secret/ion
hyposecretion=hypo/secret/ion
hypochlorhydria=hypo/chlor/hydr/ia
achlorhydria=a/chlor/hydr/ia
atrophic=a/troph/ic
atrophy=a/trophy
hypertrophy=hyper/trophy
dysrhythmia=dys/rhythm/ia
arrhythmia=a/rrhythm/ia
tachydysrhythmia=tachy/dys/rhythm/ia
myopathy=my/o/pathy
nephritis=nephr/itis
albuminemia=albumin/emia
microalbuminuria=micro/albumin/uria
hyperlipidemia=hyper/lipid/emia
dyslipidemia=dys/lipid/emia
polypectomy=polyp/ectomy
adenocarcinoma=aden/o/carcin/oma
adenopathy=aden/o/pathy
anastomotic=ana/stom/otic
anastomosis=ana/stom/osis
herniorrhaphy=herni/o/rrhaphy
hernioplasty=herni/o/plasty
paracentesis=para/centesis
sclerotherapy=scler/o/therapy
fibrosis=fibr/osis
lymphoma=lymph/oma
myeloma=myel/oma
mastitis=mast/itis
leukocytosis=leuk/o/cyt/osis
leukopenia=leuk/o/penia
neutrophil=neutr/o/phil
eosinophil=eosin/o/phil
basophil=bas/o/phil
macrophage=macro/phage
phagocytosis=phag/o/cyt/osis
cytokine=cyt/o/kine
interleukin=inter/leuk/in
epithelial=epitheli/al
alveolar=alveol/ar
vasodilation=vas/o/dilat/ion
vasoconstriction=vas/o/constrict/ion
natriuresis=natr/i/ur/esis
natriuretic=natr/i/ur/etic
diuretic=di/ur/etic
diuresis=di/ur/esis
ischemia=isch/emia
ischemic=isch/emic
necrosis=necr/osis
paresthesia=para/esthesia
carpopedal=carp/o/ped/al
monofilament=mono/filament
malnutrition=mal/nutr/ition
malabsorption=mal/absorpt/ion
decompression=de/compress/ion
hemoconcentration=hem/o/concentr/ation
hemodilution=hem/o/dilut/ion
hyperventilation=hyper/ventil/ation
hypoventilation=hypo/ventil/ation
hyperinflation=hyper/inflat/ion
orthostatic=ortho/stat/ic
postprandial=post/prand/ial
subclinical=sub/clin/ical
incretin=in/cret/in
prokinetic=pro/kin/etic
pharmacology=pharmac/o/logy
pathophysiology=path/o/physi/o/logy
pathophysiologic=path/o/physi/o/log/ic
electrolyte=electr/o/lyte
electrocardiogram=electr/o/cardi/o/gram
electroencephalogram=electr/o/encephal/o/gram
abdominal=abdomin/al
periumbilical=peri/umbilic/al
substernal=sub/stern/al
intramuscular=intra/muscul/ar
submucosal=sub/muc/os/al
transdermal=trans/derm/al
transesophageal=trans/esophag/eal
`);
// Additional roots and grammatical endings needed by the explicitly curated terms.
group('root', 'dips=thirst|paresis=weakness or partial paralysis|vascul=vessel|alkal=alkali or base|stom=mouth or opening|appendic=appendix|ang=vessel|emesis=vomiting|chezia=defecation|steat=fat|vol=volume|ton=tone or tension|card=heart|carb=carbon dioxide|neutr=neutral staining|chrom=color|megal=large|cyt=cell|dynam=force|globin=globin protein|fibrin=fibrin|thec=sheath|dur=dura mater|cutane=skin|stit=standing or position|pharynx=pharynx|glott=glottis|thorax=chest|dilat=widening|constrict=narrowing|spir=breathing|tonsill=tonsil|cholin=acetylcholine|coagul=clotting|toxin=toxic substance|body=body|nat=birth|sensitiv=sensitive response|bi=life|som=body|idi=unknown or individual cause|terat=developmental malformation|log=study|crine=secretion|secret=secretion|chlor=chloride or chlorine|rrhythm=rhythm, spelling variant|lipid=fat|polyp=polyp|herni=hernia|bas=basic staining|phage=eating cell|kine=movement|leuk=white|stat=standing|carp=wrist|filament=thread|nutr=nourishment|absorpt=absorption|compress=pressing|concentr=concentrating|dilut=diluting|ventil=ventilation|inflat=inflation|prand=meal|clin=clinical observation|cret=secretion|kin=movement|pharmac=medicine|physi=function|abdomin=abdomen|umbilic=umbilicus|stern=sternum|muscul=muscle');
group('suffix', 'ia=condition|iasis=condition or presence of|logy=study of|ole=small|ial=pertaining to|ation=process|or=agent|itic=pertaining to inflammation|metry=measurement|meter=measuring instrument|um=noun ending|ity=state|globulin=globulin protein|ergic=acting on|ant=agent|ome=collection or totality|otic=pertaining to|phil=attraction or affinity|in=substance ending|etic=pertaining to a process|esthesia=sensation|ition=process|ical=pertaining to|lyte=dissolvable substance|os=adjectival word element|eal=pertaining to');
group('prefix', 'meta=change|iso=equal|ana=up or again|di=through or apart|de=removal or reversal|in=within|exo=outside');
// Context-specific duplicate labels: secretion's -in is an ending, not the prefix in-.
splits.incretin = ['in','cret','substance-in']; parts['substance-in']={role:'suffix',meaning:'substance ending',surface:'in'};
// Do not force ambiguous/historically irregular spellings into a familiar-looking pattern.
delete splits.glucosuria;
group('root', 'periton=peritoneum|toxic=toxic or poisonous|glycos=sugar|glucos=glucose');
group('prefix', 'hyp=deficient, variant of hypo-|par=abnormal, variant of para-');
splits.glycosuria=['glycos','uria']; splits.glucosuria=['glucos','uria'];
splits.hypoxia=['hyp','ox','ia']; splits.hypoxemia=['hyp','ox','emia'];
splits.paresthesia=['par','esthesia']; splits.interleukin=['inter','leuk','substance-in'];
parts.mucos={role:'root',meaning:'mucous membrane'}; splits.submucosal=['sub','mucos','al'];
delete splits.thoracentesis; delete splits.antigen; delete splits.antibody;
delete splits.metastasis;
group('root','amyl=starch|ure=urea|fund=stomach fundus|plic=fold|candid=Candida yeast|cirrh=tawny or orange-yellow|atel=incomplete|hirsut=hairy|cortic=cortex|bronchiol=small bronchus|atr=atrium|contract=shorten or contract|coagul=clot|embol=plug|fibrill=small fiber|glott=glottis|hypothalam=hypothalamus|metast=spread to another site|pneumon=lung|ren=kidney|recept=receive|periton=peritoneum');
group('prefix','ex=out');
parts['noun-os']={role:'inflection',surface:'os',meaning:'historical Greek noun ending; no independent clinical action'};
add(`amylase=amyl/ase
lipase=lip/ase
urease=ure/ase
fundoplication=fund/o/plic/ation
fibrinogen=fibrin/o/gen
cholecystokinin=cholecyst/o/kin/substance-in
calcitonin=calc/i/ton/substance-in
candidiasis=candid/iasis
cirrhosis=cirrh/osis
thyrotoxicosis=thyr/o/toxic/osis
exophthalmos=ex/ophthalm/noun-os
atelectasis=atel/ectasis
hirsutism=hirsut/ism
angiotensin=angi/o/tens/substance-in
glucocorticoid=gluc/o/cortic/oid
bronchioles=bronchiol/es
atrial=atr/ial
coagulation=coagul/ation
contractility=contract/ility
embolization=embol/ization
epiglottis=epi/glott/is
fibrillation=fibrill/ation
hypothalamus=hypo/thalam/us
metastasis=meta/stasis
pneumonia=pneumon/ia
renin=ren/substance-in
receptor=recept/or`);
group('root','thalam=thalamus');
group('suffix','ility=ability or property|ization=process');
parts.es={role:'inflection',meaning:'plural ending'};parts.is={role:'inflection',meaning:'noun ending'};parts.us={role:'inflection',meaning:'noun ending'};
add('esophageal=esophag/eal');
splits.gastroenterology=['gastr','o','enter','o','logy'];
parts.diabetes={role:'whole term',meaning:'diabetes; learn the disease name as a unit'};
splits.prediabetes=['pre','diabetes'];
const whole = 'active adhesions agonist albumin aldosterone ammonia aneurysm angina antibody antigen ascites aspiration asthma auscultation basal bilirubin blocker bruit buffer catecholamines caustic chyme claudication cortisol crackles diaphoresis diaphragm dissection dominant dullness edema epithelium fistula flatus gauge gluten goiter heartburn hernia histamine hormone hospice ileus infarction islets jaundice ketones lactate larynx mandible maxilla melena mucosa obesity osmolarity pacemaker pallor palpation parietal percussion perforation perfusion peristalsis peritoneum pernicious petechiae pharynx plaque platelets polyp potassium prediabetes prophylaxis prostaglandin prostaglandins regurgitation resistance sepsis shift strangulation striae stricture stridor sympathetic syncope tetany thionamides trachea transfusion tympany vagal vagus villi vitiligo volvulus';
const extra = {
  hypoglycemia:'Blood glucose below the low-glucose threshold; commonly below 70 mg/dL in diabetes care.',
  hyperglycemia:'Blood glucose above the person’s target or reference range.',
  hypothyroidism:'Too little thyroid-hormone action.', hyperthyroidism:'Too much thyroid-hormone action.',
  hypoparathyroidism:'Too little parathyroid-hormone action, often causing low calcium.',
  hyperparathyroidism:'Excess parathyroid-hormone action.',
  thyroiditis:'Inflammation of the thyroid.', parathyroidectomy:'Surgical removal of parathyroid tissue.',
  ketoacidosis:'Metabolic acidosis caused by accumulation of ketoacids.',
  gastroparesis:'Delayed stomach emptying without mechanical obstruction.',
  hypochlorhydria:'Reduced stomach acid.', achlorhydria:'Absent stomach acid.',
  glycosuria:'Glucose in the urine.', hyperlipidemia:'Elevated blood lipids.',
  microalbuminuria:'A small increase in urinary albumin; current reporting commonly uses moderately increased albuminuria.',
  thyrotoxicosis:'The clinical state caused by excess thyroid-hormone action, regardless of its source.',
  'diabetes mellitus':'A group of disorders with chronically high blood glucose from impaired insulin secretion, action, or both.'
};
const eponyms = 'graves|hashimoto|barrett|crohn|kussmaul|somogyi|chvostek|trousseau|charcot|fournier|nissen|billroth|cushing|curling|virchow|fowler|purkinje|henle|mantoux|wenckebach|mobitz|trendelenburg|cullen';
// Explicit generic-name lists prevent assigning a class from any incidental matching ending.
const stems = [
  ['prazole','PPI acid-pump inhibitors','omeprazole esomeprazole lansoprazole dexlansoprazole pantoprazole rabeprazole'],
  ['tidine','histamine H₂ blockers','famotidine nizatidine cimetidine ranitidine'],
  ['gliflozin','SGLT inhibitors','empagliflozin dapagliflozin canagliflozin ertugliflozin'],
  ['gliptin','DPP-4 inhibitors','sitagliptin saxagliptin linagliptin alogliptin'],
  ['glitazone','thiazolidinedione insulin sensitizers','pioglitazone rosiglitazone'],
  ['glutide','GLP-1-related peptides','semaglutide liraglutide dulaglutide'],
  ['glinide','insulin secretagogues of this family','repaglinide nateglinide'],
  ['formin','biguanide antihyperglycemics','metformin'],
  ['olol','beta blockers','propranolol atenolol metoprolol'],
  ['caine','local anesthetics','lidocaine'],
  ['cillin','penicillin antibiotics','amoxicillin'],
  ['cycline','tetracycline antibiotics','tetracycline doxycycline'],
  ['nidazole','nitroimidazole anti-infectives','metronidazole tinidazole'],
  ['thromycin','erythromycin-related macrolide antibiotics','clarithromycin azithromycin erythromycin'],
  ['conazole','azole antifungals of this subgroup','fluconazole itraconazole'],
  ['floxacin','fluoroquinolone antibacterials','ciprofloxacin levofloxacin moxifloxacin'],
  ['setron','5-HT₃ receptor antagonists','ondansetron alosetron'],
  ['platin','platinum-containing antineoplastics','cisplatin oxaliplatin'],
  ['tecan','camptothecin-related antineoplastics','irinotecan'],
  ['vastatin','HMG-CoA reductase inhibitors','atorvastatin simvastatin'],
  ['pril','ACE inhibitors','lisinopril enalapril'],
  ['sartan','angiotensin II receptor antagonists','losartan valsartan'],
  ['xaban','direct factor Xa inhibitors','apixaban rivaroxaban'],
  ['gatran','direct thrombin inhibitors','dabigatran'],
  ['parin','heparin-related anticoagulants','heparin enoxaparin'],
  ['plase','plasminogen-activating thrombolytics','alteplase tenecteplase'],
  ['poetin','erythropoietin-related agents','epoetin darbepoetin'],
  ['grastim','granulocyte colony-stimulating factors','filgrastim pegfilgrastim'],
  ['dipine','dihydropyridine calcium-channel blockers','amlodipine nifedipine'],
  ['mab','legacy monoclonal-antibody names; target and use vary','teprotumumab infliximab adalimumab vedolizumab natalizumab certolizumab bevacizumab cetuximab panitumumab omalizumab idarucizumab'],
  ['caftor','CFTR modulators','ivacaftor elexacaftor tezacaftor']
];
// Its historical ending is not a useful -stasis (stopping) clue for cancer spread.
delete splits.metastasis;
// These terminal components are suffixes in the supplied teaching analyses.
for (const key of ['paresis','emesis','chezia','globin','phage','crine']) parts[key].role='suffix';
module.exports = {parts, splits, extra, eponyms, stems, whole};
