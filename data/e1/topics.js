// Exam 1 · Topics (Ignatavicius ch 9, 16, 17, 18, 19), written in our own words.
window.MH_TOPICS = [
// ---------- Week 1: perioperative care (ch 9) ----------
{
  id: 'preop', week: 1, ch: 'Chapter 9', title: 'Before surgery (preoperative)',
  short: 'Assessment, consent, NPO, medications, skin prep and the teaching that prevents complications.',
  lead: 'The preoperative phase runs from the **decision to operate** until the patient enters the OR. The nurse’s jobs: find the **risks** that could cause complications, make sure the patient is **informed and safely prepared**, and **teach** the exercises that prevent post-op problems. Many surgeries are now same-day, so teaching often happens in a short visit.',
  terms: [
    { t: 'Informed consent', see: 'The patient signs a form after the surgeon explains the procedure, risks, benefits and alternatives.', why: 'Explaining and getting consent is the **surgeon’s** legal responsibility; the patient must be an adult (or emancipated), **competent**, and **not sedated**.', means: 'The nurse **witnesses the signature**, checks that the patient understands, and if he doesn’t, **stops and notifies the surgeon** (don’t explain the surgery yourself). Give no preop sedatives until the form is signed.' },
    { t: 'NPO', see: 'Nothing by mouth for a set time before anesthesia.', why: 'Anesthesia relaxes the protective reflexes, so stomach contents can be **aspirated** into the lungs.', means: 'Usual guidance: **clear liquids up to 2 hours** before, a light meal 6 hours, fatty or fried foods 8 hours. Some protocols give a carbohydrate drink 2 hours before (enhanced recovery).' },
    { t: 'Advance directive', see: 'A living will or durable power of attorney for health care.', why: 'Surgery carries risks; the patient’s wishes must be known.', means: 'Ask whether one exists and place a copy in the chart.' }
  ],
  cards: [
    { h: 'Assessment: who is at higher risk', b: ['**Older adults** (less reserve; delirium, falls, skin injury), **obesity**, **obstructive sleep apnea** (screen with STOP-BANG), **smoking** (stop at least 4–8 weeks before if possible), diabetes, heart, lung, kidney or liver disease, malnutrition, alcohol or substance use (withdrawal).', 'Personal or **family history of problems with anesthesia** (malignant hyperthermia).', '**Allergies**: drugs, **latex**, tape, iodine or chlorhexidine.', 'Labs: CBC, electrolytes, glucose, coagulation (PT/INR, aPTT), kidney function, type and screen, **pregnancy test** for those who could be pregnant; ECG and chest x-ray as needed.'] },
    { h: 'Medications and supplements', b: ['Ask about **all** drugs, OTC products and **herbs**. **Garlic, ginkgo, ginseng**, fish oil, vitamin E and **St. John’s wort** can raise bleeding risk or interact with anesthesia; usually stopped about 1–2 weeks before.', '**Anticoagulants and antiplatelets** (warfarin, DOACs, clopidogrel, aspirin) are often held days before, exactly as the surgeon or prescriber directs.', 'Diabetes drugs are adjusted (insulin dose often reduced; some oral drugs held); **beta blockers** are usually **continued**.', 'Long-term **corticosteroids** may need a stress dose (the adrenal glands can’t respond to surgery).'] },
    { h: 'Preparing the patient', b: ['**Chlorhexidine** bathing or wipes as ordered; remove hair only if needed, with **clippers** (never razors: nicks let bacteria in).', 'Bowel prep for some bowel surgery; IV access; preop antibiotics usually **within 60 minutes before the incision**.', 'Remove jewelry, dentures, glasses, hearing aids (often kept until the OR), and makeup or nail polish as policy requires; patient voids before going.', '**Preop checklist**: ID band, allergy band, consent, site marking, H&P, labs, NPO status, meds given, VS.'] },
    { h: 'Teaching that prevents complications', b: ['**Incentive spirometry**: sit up, breathe out, seal the lips around the mouthpiece, inhale **slowly and deeply**, hold 3–5 seconds; about **10 times an hour** while awake.', '**Deep breathing and coughing** with the incision **splinted** by a pillow.', '**Leg exercises**, **early walking**, **sequential compression devices** or stockings to prevent **VTE**.', 'What pain control to expect (pain scale, PCA, multimodal plan), drains and tubes they will wake up with, and when they may eat.'] }
  ],
  recall: [
    ['Who explains the surgery and obtains consent?', 'The **surgeon**. The nurse witnesses the signature and notifies the surgeon if the patient doesn’t understand.'],
    ['How long before surgery may an adult drink clear liquids?', 'Usually up to **2 hours** before.'],
    ['Why use clippers instead of a razor?', 'Razors make **tiny nicks** that raise the risk of surgical site infection.'],
    ['Name three herbs that increase bleeding risk.', '**Garlic, ginkgo, ginseng** (also fish oil, vitamin E).']
  ]
},
{
  id: 'intraop', week: 1, ch: 'Chapter 9', title: 'During surgery (intraoperative)',
  short: 'The surgical team, the time-out, types of anesthesia, positioning and keeping the patient safe.',
  lead: 'The intraoperative phase runs from entering the OR to arriving in the PACU. The patient can’t protect himself, so the team’s focus is **safety**: the **right patient, procedure and site**, **sterile technique**, safe **positioning**, preventing **retained items** and **hypothermia**, and catching anesthesia complications such as **malignant hyperthermia** early.',
  terms: [
    { t: 'Time-out (Universal Protocol)', see: 'Right before the incision, the whole team stops and confirms the patient’s identity, the procedure, the **site and side**, consent, allergies and that needed equipment is present.', why: 'Prevents **wrong-site, wrong-procedure and wrong-patient** surgery.', means: 'Part of a 3-step protocol: preprocedure verification, **site marking** (by the surgeon, with the patient awake when possible), and the time-out. **Anyone** can stop the process if something doesn’t match.' },
    { t: 'Circulating nurse vs scrub nurse', see: 'Circulator: an RN, **not scrubbed**, who manages the room. Scrub: sterile, hands instruments to the surgeon.', why: 'The circulator can move freely between sterile and non-sterile areas.', means: 'The circulator **coordinates, advocates, documents**, does **counts** with the scrub person, and monitors the sterile field.' }
  ],
  cards: [
    { h: 'Types of anesthesia', b: ['**General**: unconsciousness, amnesia, pain relief and muscle relaxation (inhaled and IV drugs); airway is managed with a tube or supraglottic device.', '**Moderate (procedural) sedation**: the patient breathes on his own and responds to voice; needs continuous monitoring and a provider trained in airway rescue.', '**Regional**: a **spinal** or **epidural** block, or a peripheral nerve block. Watch for **hypotension** and bradycardia (sympathetic block), urinary retention, and a **post-dural puncture headache** (worse sitting up).', '**Local**: numbs a small area; watch for local anesthetic toxicity (ringing ears, metallic taste, perioral numbness, seizures, dysrhythmias).'] },
    { h: 'Keeping the patient safe', b: ['**Positioning**: pad bony prominences and protect nerves and skin; long cases risk **pressure injuries** and nerve damage.', '**Unplanned hypothermia** (cold room, open body cavity, anesthesia): use **warming** devices and warmed fluids. Hypothermia raises infection, bleeding and cardiac risk.', '**Counts** of sponges, sharps and instruments to prevent **retained surgical items**.', 'Fire safety (oxygen + an ignition source + alcohol prep), electrosurgical grounding pads, and fall prevention on the narrow table.'] },
    { h: 'Malignant hyperthermia (see the walk-through)', b: ['A genetic reaction to **volatile inhaled anesthetics** and **succinylcholine**.', 'First signs: **rising end-tidal CO₂**, tachycardia, muscle (jaw) rigidity; fever comes **late**.', 'Treatment: stop the trigger, **dantrolene**, 100% oxygen, cooling, treat hyperkalemia.'] }
  ],
  recall: [
    ['Who marks the surgical site?', 'The **surgeon** (or the person doing the procedure), ideally with the patient awake and taking part.'],
    ['What is the earliest sign of malignant hyperthermia?', 'An unexplained **rise in end-tidal CO₂** (with tachycardia and rigidity).'],
    ['Which complication of spinal anesthesia is worse when sitting up?', '**Post-dural puncture headache** (CSF leak).']
  ]
},
{
  id: 'postop', week: 1, ch: 'Chapter 9', title: 'After surgery (postoperative)',
  short: 'PACU priorities, assessment by system, the complications to catch early, pain, drains and discharge.',
  lead: 'The postoperative phase starts in the **PACU** and continues on the unit and at home. The order of assessment: **airway, breathing, circulation**, then level of consciousness, pain, the surgical site and drains, fluids and urine output. Most complications have a **typical time window**, so know what to look for and when.',
  terms: [
    { t: 'Hand-off from PACU', see: 'The PACU nurse reports the procedure, anesthesia, fluids and blood loss, drains, meds given, VS trends and problems.', why: 'Information lost at hand-off causes errors.', means: 'Do a full assessment on arrival, then VS often (for example every 15 minutes ×4, every 30 ×2, hourly ×4, then every 4 hours, per policy).' },
    { t: 'Urine output', see: 'At least **30 mL/hour** (about 0.5 mL/kg/hour).', why: 'Low output is an early sign of **hypovolemia** or kidney injury; anesthesia and opioids can also cause **retention**.', means: 'The patient should **void within 6–8 hours**; use a **bladder scan** if he can’t.' }
  ],
  cards: [
    { h: 'Complications by system', b: ['**Respiratory**: airway obstruction, **hypoxemia** (restlessness or confusion may be the first sign), **atelectasis**, pneumonia, **opioid respiratory depression**, PE.', '**Cardiovascular**: **hypotension and hemorrhage** (tachycardia, falling BP, a soaked dressing or high drain output), dysrhythmias, **DVT** (calf swelling, warmth, pain; prevent with SCDs, anticoagulants, early walking).', '**GI**: post-op nausea and vomiting; **paralytic ileus** (absent bowel sounds, distension, no flatus; NG tube and NPO if severe; walking helps).', '**Neuro**: **post-op delirium** in older adults (acute, fluctuating confusion).', '**Skin and wound**: infection (usually **3–6 days**), **dehiscence and evisceration** (about 5–10 days).'] },
    { h: 'Pain control', b: ['Assess with a scale; reassess after each dose (about 30 minutes after IV, 60 after oral).', '**Multimodal**: acetaminophen, NSAIDs (if allowed), nerve blocks, plus opioids at the lowest effective dose.', '**PCA**: only the patient presses the button; check sedation and RR regularly.', 'Treat pain so the patient can **breathe deeply, cough and walk**.'] },
    { h: 'Drains and dressings', b: ['The surgeon usually does the first dressing change; reinforce a damp dressing and report.', '**Jackson-Pratt** (bulb) and **Hemovac** (spring): empty when **half full**, measure, **compress** to restore suction.', 'Drainage changes from **sanguineous → serosanguineous → serous**. A sudden rise, bright red blood or **purulent** drainage is reported.', 'NG tube: check placement and patency; record output.'] },
    { h: 'Discharge to home (or PACU discharge)', b: ['PACU discharge uses a score (**Aldrete**): activity, breathing, circulation, consciousness and color or SpO₂.', 'Teach wound care, signs of infection, pain control, activity limits (no heavy lifting), when to resume diet and driving, and when to call the surgeon (fever, increasing redness, drainage, calf pain, shortness of breath).', 'Same-day patients need a **responsible adult** to drive them home.'] }
  ],
  recall: [
    ['What is the first priority in the PACU?', 'The **airway** (then breathing and circulation).'],
    ['Minimum hourly urine output after surgery?', 'About **30 mL/hour** (0.5 mL/kg/hour).'],
    ['When do surgical site infections usually appear?', 'About **3–6 days** after surgery.'],
    ['When should a JP drain be emptied?', 'When **half full**; then compress the bulb before closing.']
  ]
},
// ---------- Week 2: inflammation and immunity (ch 16) ----------
{
  id: 'inflam', week: 2, ch: 'Chapter 16', title: 'Inflammation and the white blood cells',
  short: 'Self vs non-self, the five WBC types and what each does, the stages and signs of inflammation.',
  lead: 'The immune system’s first job is to tell **self from non-self** (cells carry self markers, the **HLAs**, on their surfaces). **Inflammation** is the fast, **nonspecific** (innate) response to any injury or invader: it acts the same way every time and doesn’t create memory. The **white blood cells (leukocytes)**, made in the bone marrow, carry out both inflammation and immunity. A normal WBC count is about **5,000–10,000/mm³**.',
  terms: [
    { t: 'Neutrophils', see: 'The largest share of WBCs (about **55–70%**). Mature ones are **segs**; immature ones are **bands**.', why: '**First responders**: they swallow and destroy bacteria (**phagocytosis**) but live only hours.', means: 'High count = acute bacterial infection; **more bands (left shift)** = a serious infection; a low count (neutropenia) = high infection risk.' },
    { t: 'Macrophages (monocytes)', see: 'Monocytes in the blood become macrophages in tissue.', why: 'They live longer, eat invaders and debris, and **present antigens** to lymphocytes, linking inflammation to immunity.', means: 'Important in chronic infection and tissue repair.' },
    { t: 'Eosinophils and basophils', see: 'Eosinophils about 1–4%; basophils about 0.5–1%.', why: 'Eosinophils fight **parasites** and rise in **allergies**; basophils (and tissue **mast cells**) release **histamine**, heparin and other mediators.', means: 'Raised eosinophils point to allergy or parasites; histamine drives allergic reactions.' },
    { t: 'Lymphocytes', see: 'About 20–40% of WBCs: **B cells**, **T cells** and **natural killer (NK)** cells.', why: 'B cells make **antibodies**; T cells direct and carry out **cell-mediated** immunity; NK cells kill virus-infected and cancer cells.', means: 'These give **specific** immunity with memory (see the next topic).' }
  ],
  cards: [
    { h: 'The five signs of inflammation', b: ['**Warmth, redness, swelling, pain, loss of function**.', 'Caused by vasodilation and **leaky capillaries** (histamine, kinins, prostaglandins).', 'Inflammation happens with **or without** infection (a sprained ankle, a burn, an insect bite).'] },
    { h: 'The three stages', b: ['**Stage I, vascular**: vessels dilate and leak; redness, warmth and **swelling** (exudate).', 'Stage II, **cellular exudate**: **neutrophils** rush in (the count rises within hours); **pus** forms in bacterial infection.', 'Stage III, **tissue repair and replacement**: tissue is rebuilt or replaced by **scar**; this phase needs **protein** and nutrients.'] },
    { h: 'Older adults', b: ['Immunity weakens with age (**immunosenescence**): more infections, cancer and autoimmunity; vaccines work less well.', 'They often have **no fever or a lower one** and fewer classic signs; **confusion**, falls or appetite loss may be the first sign.'] }
  ],
  recall: [
    ['Which WBC is the first to arrive at an infection?', 'The **neutrophil**.'],
    ['What is a “left shift”?', 'More **bands** (immature neutrophils) than normal: a serious bacterial infection.'],
    ['Name the five signs of inflammation.', 'Warmth, redness, swelling, pain, loss of function.'],
    ['Which WBCs rise in allergy and parasite infections?', '**Eosinophils**.']
  ]
},
{
  id: 'immunity', week: 2, ch: 'Chapter 16', title: 'Antibody-mediated and cell-mediated immunity',
  short: 'How B cells and antibodies work, the antibody classes, T cells, and active vs passive immunity.',
  lead: 'Specific (adaptive) immunity recognizes one particular invader (antigen) and **remembers** it, so the next exposure gets a faster, stronger response. **Antibody-mediated immunity** (AMI, humoral) uses **B cells** and antibodies (immunoglobulins). **Cell-mediated immunity** (CMI) uses **T cells**, which also coordinate the whole immune response. Together with inflammation they give full protection.',
  terms: [
    { t: 'How antibodies form', see: 'Antigen recognition → sensitization (B cells become plasma cells and **memory cells**) → antibody production → the antibody binds the antigen.', why: 'Once bound, the antibody marks the invader for destruction (neutralizing it, clumping it, or activating **complement**).', means: 'The first response takes days; the **memory** response is fast. That is how vaccines protect.' },
    { t: 'CD4 (helper) and CD8 (cytotoxic) T cells', see: 'Helper T cells direct both arms of immunity; cytotoxic T cells kill infected and cancer cells; regulatory (suppressor) T cells calm the response.', why: 'Losing helper T cells (as in HIV) weakens **all** of immunity.', means: 'CMI also drives **transplant rejection** and **type IV** (delayed) reactions such as a positive TB skin test.' }
  ],
  cards: [
    { h: 'Antibody classes', b: ['**IgG**: the most common; the main memory antibody; **crosses the placenta**.', '**IgA**: in **secretions** (tears, saliva, mucous membranes, **breast milk**).', '**IgM**: the **first** antibody made in a new infection.', '**IgE**: binds mast cells; drives **allergic** (type I) reactions and fights parasites.', '**IgD**: on B-cell surfaces, helps activate B cells.'] },
    { h: 'Active vs passive immunity', b: ['**Natural active**: you get the disease and make your own antibodies (long-lasting).', '**Artificial active**: a **vaccine** makes you produce antibodies (long-lasting; may need boosters).', '**Natural passive**: antibodies from mother to baby via **placenta or breast milk** (temporary).', '**Artificial passive**: someone else’s ready-made antibodies by injection: **immune globulin**, antivenom, rabies or tetanus immune globulin. Works **immediately** but lasts only **weeks to months**.'] },
    { h: 'Why it matters for nursing', b: ['Live vaccines are avoided in people with weak immunity.', 'Corticosteroids, chemotherapy and transplant drugs suppress immunity: infection risk rises, and fever and inflammation signs may be hidden.'] }
  ],
  recall: [
    ['Which antibody crosses the placenta?', '**IgG**.'],
    ['Which antibody causes allergic reactions?', '**IgE**.'],
    ['A nurse gets hepatitis B immune globulin after a needlestick. Which type of immunity?', '**Artificial passive** (immediate, short-lived).'],
    ['Which T cell does HIV destroy?', 'The **CD4+ helper** T cell.']
  ]
},
// ---------- Week 2: allergy and immunity conditions (ch 17) ----------
{
  id: 'hyper', week: 2, ch: 'Chapter 17', title: 'Hypersensitivity (allergy) reactions',
  short: 'Types I–IV (and V) with examples, latex allergy, angioedema and anaphylaxis in brief.',
  lead: 'A **hypersensitivity** reaction is an immune response that is **too strong** or aimed at something harmless, and it damages the body. The reactions are grouped by **how** they happen and **how fast**. Types I–III involve antibodies; type IV involves T cells and is **delayed**.',
  terms: [
    { t: 'Type I: rapid, IgE-mediated', see: 'Minutes after exposure: allergic rhinitis (hay fever), hives, allergic asthma, food, drug, latex and sting allergies, **anaphylaxis**.', why: 'IgE on mast cells binds the allergen → **histamine** release → vasodilation, capillary leak, bronchospasm.', means: 'Mild: antihistamines, avoiding the allergen. Severe: **epinephrine** first.' },
    { t: 'Type II: cytotoxic', see: '**Hemolytic transfusion reaction** (ABO mismatch), autoimmune hemolytic anemia, Goodpasture syndrome, some drug reactions.', why: 'IgG or IgM antibodies attack antigens **on the surface of cells**, and complement destroys the cells.', means: 'Stop the trigger (stop a transfusion right away) and support the patient.' },
    { t: 'Type III: immune complex', see: '**SLE**, rheumatoid arthritis, serum sickness, vasculitis, glomerulonephritis.', why: 'Antigen-antibody **complexes** circulate and **deposit** in tissues (kidneys, joints, skin, vessels), triggering inflammation.', means: 'Treat with anti-inflammatory and immunosuppressant drugs; watch the kidneys.' },
    { t: 'Type IV: delayed (cell-mediated)', see: '**Positive TB skin test**, **contact dermatitis** (poison ivy, nickel, latex gloves’ chemicals), **transplant rejection**.', why: 'Sensitized **T cells**, not antibodies, cause the reaction, so it takes **24–72 hours**.', means: 'Read a TB skin test at **48–72 hours**; topical steroids for contact dermatitis.' }
  ],
  cards: [
    { h: 'Type V (stimulated)', b: ['Antibodies **stimulate** a cell receptor instead of destroying the cell: **Graves’ disease** (antibodies switch on the thyroid).'] },
    { h: 'Latex allergy', b: ['Can be type I (hives, anaphylaxis) or type IV (contact dermatitis).', 'Higher risk: health care workers, people with many surgeries (e.g., spina bifida), and **food allergies to banana, avocado, kiwi, chestnut** (cross-reactions).', 'Use a **latex-free** room, equipment and supplies; schedule surgery first in the day if the OR isn’t latex-free.'] },
    { h: 'Angioedema and anaphylaxis (see the walk-throughs)', b: ['**Angioedema**: deep swelling of lips, tongue and throat; **ACE inhibitors** are a common cause (bradykinin); the airway is the priority.', '**Anaphylaxis**: give **IM epinephrine** into the thigh first; oxygen; fluids; then antihistamines, albuterol, steroids.'] }
  ],
  recall: [
    ['Which hypersensitivity type is a hemolytic transfusion reaction?', '**Type II** (cytotoxic).'],
    ['Which type is SLE?', '**Type III** (immune complex).'],
    ['Why is a TB skin test read at 48–72 hours?', 'It is a **type IV, delayed** T-cell reaction.'],
    ['Which foods cross-react with latex?', 'Banana, avocado, kiwi, chestnut.']
  ]
},
{
  id: 'autoimm', week: 2, ch: 'Chapter 17', title: 'Autoimmunity, Lyme disease and transplant rejection',
  short: 'When the immune system attacks self, Lyme disease stages, the three kinds of rejection and immunosuppressants.',
  lead: '**Autoimmunity** happens when the body loses tolerance and attacks **its own** tissue (examples: SLE, rheumatoid arthritis, type 1 diabetes, MS, Graves’ disease). **Lyme disease** is a tick-borne infection whose later stages cause immune-driven joint, heart and nerve problems. **Transplant rejection** is the immune system doing its normal job against foreign (non-self) tissue.',
  terms: [
    { t: 'Erythema migrans', see: 'An expanding red rash, often with a clear center (“bull’s-eye”), at the tick bite, 3–30 days later, with flu-like symptoms.', why: '*Borrelia burgdorferi* spreading in the skin after a bite from an infected **deer (blacklegged) tick**.', means: 'Stage 1 (early localized). Treated with **doxycycline** (or amoxicillin); early treatment prevents later stages.' },
    { t: 'Hyperacute, acute and chronic rejection', see: 'Hyperacute: **minutes to hours**. Acute: usually **in the first months**. Chronic: **months to years**, gradual loss of organ function.', why: 'Hyperacute: **pre-existing antibodies** (the organ must be removed). Acute: mostly **T cells** (often reversible with more immunosuppression). Chronic: slow inflammation and **fibrosis** of vessels (no cure; may need re-transplant).', means: 'Teach the signs of rejection for that organ: fever, tenderness over the graft, falling function (e.g., rising creatinine and less urine for a kidney).' }
  ],
  cards: [
    { h: 'Lyme disease stages and prevention', b: ['**Stage 2 (early disseminated)**: weeks later: more rashes, **facial (Bell’s) palsy**, meningitis, **heart block** and palpitations.', '**Stage 3 (late)**: months later: **arthritis** (especially knees), memory and nerve problems.', 'Prevent: long sleeves and pants tucked into socks, **insect repellent** (DEET), stay on trails, **check skin daily** for ticks; remove a tick with fine tweezers pulling **straight up** steadily, then wash the area.'] },
    { h: 'Immunosuppressants after transplant', b: ['**Calcineurin inhibitors** (tacrolimus, cyclosporine): check **blood levels**; can harm the kidneys and raise BP and glucose.', '**Mycophenolate** (bone marrow suppression, GI upset), **corticosteroids**, and others.', 'Taken **for life**, exactly on schedule; never stopped. Big risks: **infection** and **cancer** (especially skin: use sunscreen).', 'Avoid grapefruit and St. John’s wort with some drugs (they change drug levels); no live vaccines.'] },
    { h: 'Graft-versus-host disease', b: ['After **stem cell** transplant, the donor’s T cells attack the **recipient’s** tissues: skin rash, diarrhea, liver problems.'] }
  ],
  recall: [
    ['Which rejection happens within minutes and requires removing the organ?', '**Hyperacute** rejection.'],
    ['What is the first-line drug for early Lyme disease?', '**Doxycycline**.'],
    ['How do you remove a tick?', 'Fine tweezers close to the skin, pull **straight up** steadily, then clean the area.'],
    ['Two main risks of lifelong immunosuppression?', '**Infection** and **cancer**.']
  ]
},
// ---------- Week 2: cancer (ch 18) ----------
{
  id: 'cancerbio', week: 2, ch: 'Chapter 18', title: 'Cancer biology, staging and prevention',
  short: 'Normal vs cancer cells, how cancer develops and spreads, grading and TNM staging, prevention and screening.',
  lead: 'Normal cells have **contact inhibition** (stop dividing when they touch), a **specific job** (differentiation), and orderly growth and death (**apoptosis**). **Cancer cells** have lost these controls: they divide continuously, look and act less like their tissue of origin (**anaplasia**), ignore contact inhibition, avoid apoptosis, and can **invade** and **spread (metastasize)**. **Benign** tumors grow by expansion and stay put; **malignant** tumors invade and spread.',
  terms: [
    { t: 'Carcinogenesis', see: '**Initiation** (a carcinogen damages DNA; irreversible) → **promotion** (promoters such as hormones, obesity or alcohol help initiated cells grow; the **latency period**) → **progression** → **metastasis**.', why: 'Each step needs more genetic changes, which is why cancer risk rises with **age** and exposure.', means: 'Removing **promoters** (stopping smoking, losing weight, limiting alcohol) can still lower risk after initiation.' },
    { t: 'Grading vs staging', see: 'Grading: how abnormal the **cells** look (G1 well differentiated → G4 undifferentiated). Staging: **how far** the cancer has spread (**TNM**).', why: 'Higher grade = more aggressive cells; higher stage = more extensive disease.', means: '**TNM**: **T** = size of the primary tumor, **N** = lymph node involvement, **M** = distant metastasis (M0 none, M1 present). Stages run 0 (in situ) to **IV** (distant spread).' }
  ],
  cards: [
    { h: 'How cancer spreads', b: ['Local **invasion** → **angiogenesis** (the tumor grows its own blood supply) → cells break off and travel in **blood or lymph** → they lodge and grow elsewhere.', 'Common metastasis sites: **bone, liver, lung, brain** (and lymph nodes).', 'Cancers are named by tissue: **carcinoma** (epithelial), **sarcoma** (connective tissue), **leukemia** and **lymphoma** (blood and lymph).'] },
    { h: 'Causes and risk factors', b: ['**Chemical** (tobacco is the biggest preventable cause; alcohol, asbestos, benzene).', '**Physical**: **UV light**, ionizing radiation, chronic irritation.', '**Viral**: **HPV** (cervical, throat, anal), **hepatitis B and C** (liver), Epstein-Barr (lymphoma), HIV.', '**Genetic**: inherited mutations in tumor suppressor genes (**BRCA1/2**), oncogene activation; also age, obesity, inactivity, and a weak immune system.', 'Health equity: income, insurance, neighborhood and racism affect exposure, screening and outcomes.'] },
    { h: 'Prevention and early detection', b: ['**Primary** (stop cancer from starting): no tobacco, limit alcohol, healthy weight, activity, a plant-rich diet, **sun protection**, **HPV and hepatitis B vaccines**, chemoprevention (e.g., tamoxifen for some high-risk women), prophylactic surgery for some inherited risks.', '**Secondary** (find it early: screening): **colorectal** from age **45** (colonoscopy or stool tests), **mammography** for breast cancer, **cervical** (Pap and HPV tests), **low-dose CT** for lung cancer in heavy smokers aged **50–80** (20 pack-years, current or quit within 15 years), and shared decision-making for **PSA** (prostate).', 'Warning signs (CAUTION): change in bowel or bladder habits, a sore that doesn’t heal, unusual bleeding or discharge, a thickening or lump, indigestion or trouble swallowing, an obvious change in a wart or mole, a nagging cough or hoarseness.'] }
  ],
  recall: [
    ['What does the “M” in TNM mean?', '**Distant metastasis** (M0 none, M1 present).'],
    ['Grade 4 tumor cells are…', '**Undifferentiated** (look least like normal cells; most aggressive).'],
    ['Which virus causes most cervical cancer, and how is it prevented?', '**HPV**; the **HPV vaccine** (plus screening).'],
    ['At what age does average-risk colorectal screening start?', '**45**.']
  ]
},
{
  id: 'cancertx', week: 2, ch: 'Chapter 18', title: 'Cancer treatment: surgery, radiation, chemotherapy and beyond',
  short: 'Kinds of cancer surgery, radiation and brachytherapy safety, chemo safety, immunotherapy, targeted and hormone therapy.',
  lead: 'Treatment depends on the cancer type, stage and the person’s goals. Most people get a **combination**. The goal may be **cure**, **control** (living with cancer as a chronic disease) or **palliation** (comfort). Every treatment also harms some normal cells, so the nurse’s work is safety, **side-effect management** and teaching.',
  terms: [
    { t: 'External beam radiation (teletherapy)', see: 'A machine aims radiation at marked skin areas, usually daily on weekdays for several weeks.', why: 'Radiation damages DNA, mostly in fast-dividing cells **in the treatment field**.', means: 'The patient is **not radioactive**. Skin care: wash gently with lukewarm water and mild soap, pat dry, **don’t remove the markings**, no lotions, powders or deodorant on the area unless approved, avoid sun, heat and tight clothing. Fatigue is common.' },
    { t: 'Brachytherapy (internal radiation)', see: 'A radioactive source is placed **inside** or next to the tumor: sealed (implants, seeds) or unsealed (oral or IV radioactive drugs).', why: 'Delivers a high dose to the tumor while the source is in place, so the patient **emits radiation**.', means: 'Private room, a radiation sign, a **dosimeter badge** for staff, **time** (limit each visit), **distance** (stay at least about 6 feet away when not giving care), **shielding**. **No pregnant visitors or children**; limited visit time. A dislodged sealed source: **never touch it**: use long forceps and a lead container. With unsealed sources, **body fluids are radioactive**.' },
    { t: 'Chemotherapy', see: 'Drugs that kill dividing cells, given in **cycles** (rest periods let normal cells recover), often several drugs at once.', why: 'Some drugs work in a specific phase of the cell cycle; combining them kills more cancer cells and limits resistance.', means: 'They are **hazardous drugs**: prepare them in a special hood, wear **chemo-rated gloves (two pairs) and a gown**, use closed-system devices, and handle the patient’s **body fluids** as hazardous for about **48 hours** (flush the toilet twice with the lid down).' }
  ],
  cards: [
    { h: 'Kinds of cancer surgery', b: ['**Prophylactic** (remove at-risk tissue, e.g., mastectomy for a BRCA mutation), **diagnostic** (biopsy), **curative** (remove all the tumor with clear margins), **debulking** (cytoreductive), **palliative** (relieve symptoms), **reconstructive**.'] },
    { h: 'Chemo safety: extravasation', b: ['**Vesicants** can destroy tissue if they leak out of the vein.', 'Signs: pain, burning, swelling, redness, or no blood return.', '**Stop the infusion immediately** and follow the facility’s extravasation protocol (antidote, warm or cold compresses depending on the drug, notify the provider, document).'] },
    { h: 'Immunotherapy and targeted therapy', b: ['**Checkpoint inhibitors** (pembrolizumab, nivolumab, ipilimumab) release the brakes on T cells so they attack the cancer, but they can also attack **normal organs**: **immune-related adverse events (irAEs)** such as **colitis** (diarrhea), **pneumonitis** (cough, dyspnea), hepatitis, rash, and **endocrine** problems (thyroid, adrenal, pituitary, type 1 diabetes). Patients must **report new symptoms early**; treatment is usually **corticosteroids**.', '**CAR-T cell therapy**: watch for **cytokine release syndrome** (fever, low BP, hypoxia) and neurotoxicity (confusion).', '**Targeted therapy** blocks a specific feature of cancer cells: tyrosine kinase inhibitors (“-tinibs”), monoclonal antibodies (“-mabs”; infusion reactions), angiogenesis inhibitors (bevacizumab: bleeding, high BP, poor wound healing). EGFR inhibitors cause an acne-like rash.'] },
    { h: 'Hormone (endocrine) therapy', b: ['For hormone-sensitive breast and prostate cancers.', '**Tamoxifen**: hot flashes, **blood clots**, endometrial cancer risk. **Aromatase inhibitors** (anastrozole): bone loss, joint pain.', '**Androgen deprivation** for prostate cancer: hot flashes, sexual dysfunction, bone loss, weight gain.'] }
  ],
  recall: [
    ['Is a patient getting external beam radiation radioactive?', '**No.** Only patients with internal (brachytherapy) sources emit radiation.'],
    ['What do you do if a sealed radiation implant falls out?', 'Don’t touch it; pick it up with **long-handled forceps** and put it in the **lead container**; notify radiation safety.'],
    ['How long are body fluids hazardous after chemotherapy?', 'About **48 hours**.'],
    ['A patient on a checkpoint inhibitor has new diarrhea. Why does it matter?', 'It may be immune-related **colitis**: report it early (often treated with steroids).']
  ]
},
{
  id: 'sidefx', week: 2, ch: 'Chapter 18', title: 'Side effects of cancer treatment',
  short: 'Bone marrow suppression, CINV, mucositis, alopecia, neuropathy, fatigue, and how the nurse helps.',
  lead: 'Chemotherapy and radiation hit the body’s **fast-dividing** normal cells: **bone marrow**, the **GI lining** (mouth to rectum), **hair follicles** and skin. Knowing which cells are hit predicts the side effects. **Bone marrow suppression** is the most dangerous; **fatigue** is the most common.',
  terms: [
    { t: 'Thrombocytopenia', see: 'Platelets below 150,000/mm³; bleeding risk rises **below 50,000**, spontaneous bleeding **below about 20,000**.', why: 'The marrow makes fewer platelets.', means: '**Bleeding precautions**: soft toothbrush, **electric razor**, no IM injections or rectal procedures if possible, pressure on puncture sites for **at least 5–10 minutes**, no aspirin or NSAIDs, prevent constipation and straining, watch for petechiae, bruising, nosebleeds, blood in urine or stool. Platelet transfusion if very low.' },
    { t: 'Anemia', see: 'Fatigue, pallor, dyspnea on exertion, tachycardia.', why: 'Fewer red cells carry oxygen.', means: 'Rest periods; transfusion for low Hgb or symptoms; **erythropoiesis-stimulating agents** (epoetin) raise the risk of clots and high BP.' },
    { t: 'Chemotherapy-induced nausea and vomiting (CINV)', see: 'Acute (first 24 hours), delayed (days 2–5) or anticipatory (before treatment, a learned response).', why: 'The drugs stimulate the brain’s vomiting center and the gut (serotonin, substance P).', means: 'Give antiemetics **before** chemo and on a **schedule**, not only when needed: **5-HT3 blockers** (ondansetron), **NK1 blockers** (aprepitant), **dexamethasone**, olanzapine. Small, bland meals; relaxation for anticipatory nausea.' }
  ],
  cards: [
    { h: 'Mucositis (sores along the GI tract)', b: ['Inspect the mouth daily; frequent oral care with a **soft toothbrush** and rinses of **saline or baking soda** solution.', '**Avoid alcohol-based mouthwash**, very hot, spicy or acidic foods, and tobacco.', 'Topical anesthetic or “magic mouthwash” as ordered; watch for thrush and herpes infections; ensure fluids and nutrition.'] },
    { h: 'Alopecia and skin', b: ['Hair loss usually starts **1–3 weeks** after treatment and is **temporary** (it may grow back a different color or texture); radiation hair loss in the field may be permanent at high doses.', 'Suggest a wig, scarf or hat before it starts, a gentle shampoo, and sun protection for the scalp; scalp cooling may reduce loss for some drugs.', 'Acknowledge body-image grief.'] },
    { h: 'Chemotherapy-induced peripheral neuropathy (CIPN)', b: ['Numbness, tingling and pain in hands and feet, loss of fine motor skill and balance (e.g., platinum drugs, taxanes, vincristine).', 'Safety: check **water temperature** with a thermometer or an unaffected body part, wear well-fitting shoes, inspect the feet, remove trip hazards; report it (doses may be changed).'] },
    { h: 'Other effects', b: ['**Fatigue** (most common): plan rest and **light exercise**, which helps.', '**“Chemo brain”** (cognitive changes): lists, routines.', 'Organ toxicity (heart, lungs, kidneys), fertility loss (discuss sperm or egg banking **before** treatment), sexual changes, taste changes and weight loss.'] }
  ],
  recall: [
    ['Which side effect of cancer therapy is the most common?', '**Fatigue**.'],
    ['Platelet count where spontaneous bleeding becomes likely?', 'Below about **20,000/mm³**.'],
    ['When should antiemetics for chemotherapy be given?', '**Before** chemo and on a schedule afterward.'],
    ['What mouthwash should a patient with mucositis avoid?', '**Alcohol-based** mouthwash.']
  ]
},
{
  id: 'oncemerg', week: 2, ch: 'Chapter 18', title: 'Oncologic emergencies',
  short: 'Sepsis and DIC, SIADH, hypercalcemia, spinal cord compression, SVC syndrome and tumor lysis syndrome.',
  lead: 'An **oncologic emergency** is a complication of cancer or its treatment that can cause **death or permanent harm within hours to days** unless it is recognized and treated fast. Nurses often see the first signs, so learn the **early cue** and the **first action** for each.',
  terms: [
    { t: 'Sepsis and DIC', see: 'Sepsis: fever (or none in neutropenia), tachycardia, low BP, confusion. DIC: **bleeding** from IV sites, gums and wounds, petechiae, plus clots.', why: 'Neutropenia lets infection spread; sepsis and some cancers (leukemia) trigger widespread clotting that **uses up** platelets and clotting factors.', means: 'Cultures then antibiotics within 1 hour. DIC labs: **low platelets and fibrinogen**, **prolonged PT/aPTT**, **high D-dimer**. Treat the cause; replace platelets, plasma, cryoprecipitate; bleeding precautions.' },
    { t: 'SIADH', see: 'Weight gain without edema, low urine output, **concentrated urine**, **hyponatremia** (headache, confusion, seizures).', why: 'Tumors (especially **small cell lung cancer**) or drugs make excess ADH, so the kidneys keep **water**.', means: '**Fluid restriction**, daily weight, sodium checks, seizure precautions; hypertonic saline or ADH antagonists (tolvaptan, conivaptan) for severe cases; correct sodium **slowly**.' },
    { t: 'Hypercalcemia', see: 'Fatigue, weakness, **constipation**, nausea, **confusion**, **polyuria** and thirst, dehydration, ECG changes.', why: 'Bone metastases break down bone, or tumors release a PTH-like hormone.', means: '**IV normal saline** hydration, then loop diuretics; calcitonin, **bisphosphonates** (zoledronic acid) or denosumab; walking helps keep calcium in bone.' }
  ],
  cards: [
    { h: 'Spinal cord compression', b: ['Early cue: **back pain** (worse lying down or coughing). Late: leg weakness, sensory loss, bowel and bladder dysfunction.', 'Act: report at once; **dexamethasone**, MRI, radiation or surgery.'] },
    { h: 'Superior vena cava (SVC) syndrome', b: ['A tumor (lung cancer, lymphoma) compresses the SVC: **facial, neck and arm swelling**, periorbital edema, a **tight collar**, distended chest veins; late: **stridor**, cyanosis, confusion.', 'Act: **head up**, oxygen, report; radiation, chemo or a **stent**.'] },
    { h: 'Tumor lysis syndrome', b: ['Rapid cancer cell death (leukemia, lymphoma) in the first days of treatment: **high K⁺, high phosphate, low Ca²⁺, high uric acid**, **acute kidney injury**.', 'Act: **hydration**, **allopurinol or rasburicase**, cardiac monitoring, treat hyperkalemia, strict I&O.'] }
  ],
  recall: [
    ['Earliest symptom of spinal cord compression?', '**Back pain**.'],
    ['Which emergency causes a tight shirt collar and facial swelling?', '**Superior vena cava syndrome**.'],
    ['Four electrolyte changes in tumor lysis syndrome?', 'High **potassium**, high **phosphate**, low **calcium**, high **uric acid**.'],
    ['First treatment for hypercalcemia of malignancy?', '**IV normal saline** (hydration).']
  ]
},
// ---------- Week 2: infection (ch 19) ----------
{
  id: 'infect', week: 2, ch: 'Chapter 19', title: 'How infection happens and how it is found',
  short: 'The chain of infection, modes of transmission, cultures and labs, fever, and antibiotic stewardship.',
  lead: 'An infection needs every link of the **chain of infection**: an **agent** (bacteria, virus, fungus, parasite), a **reservoir**, a **portal of exit**, a **mode of transmission**, a **portal of entry** and a **susceptible host**. Breaking any link prevents it, and **hand hygiene** breaks the most links. Health care–associated infections (HAIs) such as CLABSI, CAUTI, surgical site infections and C. diff are largely **preventable**.',
  terms: [
    { t: 'Modes of transmission', see: '**Contact** (direct touch, or indirect via objects and hands), **droplet** (large particles from coughing, sneezing and talking that travel only a short distance), **airborne** (tiny particles that stay in the air and travel far).', why: 'The route decides which **precautions** and PPE stop it.', means: 'Airborne examples: **TB, measles, chickenpox, disseminated shingles**. Droplet: **influenza, pertussis, meningococcal meningitis, mumps**. Contact: **MRSA, VRE, C. diff, scabies, draining wounds**.' },
    { t: 'Culture and sensitivity', see: 'A sample (blood, urine, sputum, wound) is grown in the lab to identify the organism and test which antibiotics work.', why: 'Antibiotics given first can kill organisms in the sample and give a false negative.', means: 'Collect cultures **before the first antibiotic dose**, but don’t delay antibiotics in sepsis. Results take 24–72 hours; then the antibiotic may be changed.' }
  ],
  cards: [
    { h: 'Labs and imaging', b: ['**WBC** (normal about 5,000–10,000) with differential; a **left shift** (more bands) signals acute bacterial infection.', '**ESR** and **CRP** (nonspecific markers of inflammation); **procalcitonin** (rises in bacterial infection).', 'Imaging (x-ray, CT, ultrasound) to find abscesses or pneumonia.'] },
    { h: 'Fever', b: ['A fever helps fight infection; mild fever may not need treatment.', 'Treat high or uncomfortable fevers: **antipyretics** (acetaminophen, NSAIDs), **fluids** (fever raises fluid loss), light clothing, cooling blankets; avoid shivering (it raises temperature and oxygen use).', 'Older adults and immunosuppressed people may have **little or no fever**.'] },
    { h: 'Antibiotic therapy and stewardship', b: ['Take the **full course** exactly as prescribed; don’t share or save antibiotics.', 'Watch for allergy, C. diff diarrhea, and organ toxicity; some drugs (vancomycin, aminoglycosides) need **peak and trough levels**.', '**Stewardship**: use the narrowest effective antibiotic for the shortest time, to slow **resistance**.'] },
    { h: 'Health equity (the COVID-19 lesson)', b: ['Black, Hispanic and Indigenous communities had higher COVID-19 infection, hospitalization and death rates, driven by **social determinants**: crowded housing, essential jobs that couldn’t be done from home, less access to care and testing, and chronic diseases linked to inequity.', 'Nurses address these through culturally appropriate teaching, access to testing and vaccines, and advocacy.'] }
  ],
  recall: [
    ['What is the single best way to break the chain of infection?', '**Hand hygiene**.'],
    ['When are cultures collected?', '**Before** the first antibiotic dose.'],
    ['Name the four classic airborne diseases.', 'TB, measles (rubeola), chickenpox (varicella), disseminated herpes zoster.']
  ]
},
{
  id: 'precautions', week: 2, ch: 'Chapter 19', title: 'Standard and transmission-based precautions',
  short: 'Standard, Contact, Droplet and Airborne Precautions; PPE order; hand hygiene; resistant organisms.',
  lead: '**Standard Precautions** are used for **every patient**, every time, because anyone may carry an infection: hand hygiene, PPE for expected contact with blood or body fluids, respiratory hygiene, safe injections and sharps safety. **Transmission-based precautions** are **added** for known or suspected infections spread by contact, droplets or air.',
  terms: [
    { t: 'Contact Precautions', see: 'MRSA, VRE, CRE, **C. diff**, scabies, lice, draining wounds, RSV (in some settings).', why: 'These spread by **touch**, directly or from contaminated surfaces and equipment.', means: '**Gown and gloves** on entering the room; private room or cohort with the same organism; **dedicated equipment** (stethoscope, BP cuff); clean surfaces often. For **C. diff**: **soap and water** handwashing and **bleach** cleaning.' },
    { t: 'Droplet Precautions', see: 'Influenza, **pertussis**, **meningococcal meningitis**, mumps, rubella, *Mycoplasma* pneumonia, adenovirus.', why: 'Large droplets travel only a short distance (about 3–6 feet) and fall.', means: 'A **surgical mask** when working near the patient (put it on as you enter); private room (door may stay open); the **patient wears a surgical mask** when leaving the room.' },
    { t: 'Airborne Precautions', see: '**TB**, **measles**, **chickenpox**, **disseminated zoster** (and some emerging diseases).', why: 'Tiny particles float on air currents for long periods and distances.', means: 'An **airborne infection isolation room (AIIR)** with **negative pressure**, the **door closed**; a fit-tested **N95 respirator** or a **PAPR**; the patient wears a **surgical mask** for transport; staff immune to measles or chickenpox care for those patients.' }
  ],
  cards: [
    { h: 'Hand hygiene', b: ['**Alcohol-based hand rub** is preferred for routine care (faster and kills more germs), **except**: hands **visibly soiled**, after caring for **C. diff** or norovirus (spores and some viruses), and before eating or after the restroom: then **soap and water** for at least 15–20 seconds.', 'Keep nails short; no artificial nails for direct care.'] },
    { h: 'PPE order (CDC)', b: ['**Donning (on)**: **gown → mask or respirator → goggles or face shield → gloves** (gloves over the gown cuffs).', '**Doffing (off)**: **gloves → goggles or face shield → gown → mask or respirator**, then **hand hygiene**. (Another accepted way: remove gown and gloves together.)', 'Remove PPE at the doorway or in the anteroom; take off an **N95 only after leaving the room** and closing the door.', 'The most contaminated items (gloves, the front of the gown and face shield) come off first; don’t touch the front.'] },
    { h: 'Resistant organisms (MDROs)', b: ['**MRSA**, **VRE**, **CRE**, and **ESBL**-producing bacteria resist many antibiotics, mainly because of **overuse and misuse** of antibiotics.', 'Prevention: hand hygiene, Contact Precautions, cleaning, removing catheters and lines as soon as possible, and **antibiotic stewardship**.', 'C. diff recurrences may be treated with **fecal microbiota transplantation (FMT)**.'] }
  ],
  recall: [
    ['Which precautions need a negative-pressure room and an N95?', '**Airborne** (TB, measles, chickenpox, disseminated zoster).'],
    ['What PPE goes on first, and what comes off first?', 'On first: **gown**. Off first: **gloves**.'],
    ['When is alcohol hand rub not enough?', 'Visibly soiled hands, **C. diff** or norovirus, before eating or after the restroom.'],
    ['Meningococcal meningitis needs which precautions?', '**Droplet**.']
  ]
}
];
