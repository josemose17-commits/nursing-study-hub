// Chapter 16 — Inflammation and immunity (on the final).
module.exports = ({ chapter, topic, adpie }) => {
  chapter({
    ch: '16', title: 'Inflammation and immunity', concepts: 'Immunity · inflammation · infection',
    steps: ['Two-part defense', 'Self vs non-self', 'Inflammation (innate)', 'Antibodies (AMI)', 'T cells and NK cells (CMI)', 'When defenses weaken', 'What to report'],
    intro: 'The body defends itself in two layers. **Innate immunity** — skin, mucous membranes, the normal microbiome, **inflammation**, complement and natural killer cells — acts **at once and the same way every time**. **Adaptive immunity** learns: **B cells** make **antibodies** (antibody-mediated immunity) and **T cells** organize, regulate and kill (cell-mediated immunity), leaving **memory** so a second exposure is handled fast. All of it depends on telling **self from non-self** (each person’s **HLA** “product code”). Immunity can be **active or passive**, **natural or artificial** (vaccines, immune globulin). The nurse reads the **WBC differential** (neutrophils, a **left shift**, eosinophils), knows the **five cardinal signs** of inflammation — and remembers that **older adults** may show **no fever and no rise in WBCs** even with serious infection.',
    introShort: ['**Innate**: barriers, **inflammation**, complement, NK — fast, nonspecific', '**Adaptive**: **B cells → antibodies**; **T cells** organize/kill; **memory**', 'Depends on **self vs non-self** (HLAs)', 'Read the **WBC differential**; older adults may have **no fever, no ↑WBC**'],
    map: [
      '**Innate immunity** is present from birth: **skin, cornea and mucous membranes**, the **microbiome** (normal flora that crowd out pathogens while they stay where they belong), **inflammation**, **complement** and **natural killer cells**. **Adaptive immunity** develops after exposure: **antibody-mediated (AMI)** through B cells and **cell-mediated (CMI)** through T cells. Full protection — being **immunocompetent** — needs inflammation, AMI and CMI working together.',
      'Every person’s cells carry **human leukocyte antigens (HLAs)** — a genetic “**product code**” matched only by an identical twin. Immune cells compare codes at every encounter: a match is **self** and is left alone (**self-tolerance**, kept by **regulatory T cells**); a mismatch — microbes, infected or cancerous cells, another person’s tissue — is **non-self** and is neutralized, destroyed or eliminated. **Toll-like receptors** help spot microbes and stressed self cells.',
      'Any injury or invasion triggers the **same three stages**: (I) **vascular** — histamine, serotonin and kinins dilate arterioles and leak plasma (**redness, warmth, swelling, pain**; usually 24–72 hours); (II) **cellular exudate** — a surge of **neutrophils**, pus, and the **arachidonic acid–COX** cascade that NSAIDs block; (III) **repair** — or **scar**, which never works like the original tissue. Five cardinal signs: **warmth, redness, swelling, pain, lost function**. Inflammation can occur **without infection**.',
      'A **B cell** sensitized to one antigen (with help from macrophages and **helper T cells**) becomes **plasma cells** — up to **300 antibodies a second** — and **memory cells**. **IgM** comes first, **IgG** dominates on re-exposure, **IgA** guards mucous membranes, **IgE** drives allergy and fights parasites, **IgD** is a B-cell receptor. Antibodies **clump, burst, coat, precipitate or neutralize** antigens and switch on **complement**.',
      '**Helper (CD4+) T cells** coordinate everything through **cytokines**; **regulatory T cells** keep immunity from attacking self; **cytotoxic T cells** deliver a lethal hit to **virus-infected cells, grafts and transplants**; **natural killer cells** destroy **cancer cells** and infected cells without prior sensitization. CMI guards against **cancer** and **intracellular infections** and causes **transplant rejection**.',
      'Immunity is strongest in the **20s and 30s** and declines with age: fewer working neutrophils, **no leukocytosis and often no fever** in infection, slower antibody responses (**vaccines and boosters** matter more), weaker T-cell function (**false-negative TB skin tests**), more **autoantibodies**. Disease, injury, drugs and treatments can also suppress immunity; excess or misdirected immunity causes allergy and autoimmune disease (Chapter 17).',
      'A **left shift** (many **bands**) — the marrow can’t keep up, **sepsis risk**; a **low neutrophil count (ANC)**; **pus**, spreading redness or new pain in a wound; in an **older adult**, **confusion, a fall or a vague decline** even without fever or a raised WBC — subtle infection can become **sepsis** quickly.'
    ],
    chain: ['Bacteria enter through a wound', 'tissue macrophages and mast cells release **histamine, kinins, cytokines**', 'arterioles dilate, capillaries leak → **red, warm, swollen, painful**', 'cytokines call **neutrophils** from the marrow → **pus**', 'if infection outlasts supply → **bands** released (**left shift**)', 'untreated → **sepsis**; healed → repair or **scar**'],
    pairs: [
      ['Inflammation vs infection', '**Inflammation** is the body’s nonspecific tissue response to **any** injury or invasion — a sprain, a burn, an MI, an allergy — and it is **not always caused by infection**. **Infection** is invasion by **pathogens that multiply** and cause illness; it usually **triggers** inflammation (otitis media, appendicitis, hepatitis). Redness and swelling alone don’t prove infection; **pus, fever, a rising WBC with a left shift**, or a positive culture point to it.'],
      ['Innate vs adaptive immunity', '**Innate**: present at birth, **nonspecific**, **immediate**, the same every time, no memory, can’t be transferred (barriers, inflammation, complement, NK cells). **Adaptive**: **learned**, **specific** to one antigen, slower the first time but **faster and stronger on re-exposure** (memory), can be partly transferred as antibodies (AMI by **B cells**, CMI by **T cells**).'],
      ['Active vs passive immunity', '**Active**: your own immune system **makes** the antibodies — after the illness (**natural**; the strongest and longest) or after a **vaccine** (**artificial**; lasts years with **boosters**). Takes days to weeks to develop; leaves **memory**. **Passive**: **ready-made antibodies** from someone else — across the **placenta** or in **breast milk** (natural), or by **injection** of immune globulin or **convalescent plasma** (artificial). Works **immediately** but is **short-lived** (the foreign antibodies are cleared) and leaves **no memory**.'],
      ['IgM vs IgG', '**IgM** is the **first** antibody a newly sensitized B cell makes — a five-unit molecule with **10 binding sites**, good at clumping, so it signals a **new or recent** infection. **IgG** is made in large amounts on **re-exposure** — the **most abundant** antibody and the basis of **long-term protection** (and the one that crosses the placenta). A positive IgM means “**now**”; IgG alone means “**before**.”']
    ],
    monitor: 'The **WBC count and differential** — total **5000–10,000/mm³**, **segmented neutrophils 55–70%**, **bands about 5%** (more = **left shift**), lymphocytes 20–40%, monocytes 2–8%, **eosinophils 1–4%** (high with **allergy, asthma, parasites**), basophils 0.5–1% — and the **absolute neutrophil count**; the **five cardinal signs** at any wound or site; **temperature** (absent fever in older adults doesn’t rule out infection); **pus** and wound changes (photograph, document); **mental status and function** in older adults; **vaccination history** and boosters (influenza, pneumococcal, shingles, tetanus and pertussis).',
    act: 'A **left shift** or falling **ANC**; **pus** or spreading redness at a wound (take the **temperature**, document and photograph, notify the provider); **new confusion, falls or decline** in an older adult even with a normal temperature and WBC; signs of **sepsis** (fever or low temperature, tachycardia, hypotension, low urine); a deep, dirty wound in someone **never vaccinated against tetanus** (needs antibodies now and the vaccine series).',
    physio: [{
      items: [
        ['Why inflammation looks the way it does', '**histamine** dilates arterioles and narrows small veins, so blood **pools** in the capillaries (**redness, warmth**); **kinins** (especially bradykinin) open gaps in capillary walls so **plasma leaks** out (**swelling** — a protective cushion — and **pain** from pressure and kinins); cytokines such as **IL-1 and TNF** reset the brain’s thermostat (**fever**). Swelling and pain make the part harder to use (**lost function**), which rests it.', ['**Histamine**: dilate arterioles, pool blood → **red, warm**', '**Kinins**: leaky capillaries → **swelling, pain**', '**IL-1, TNF** → **fever**']],
        ['The neutrophil supply line', 'it takes about **12–14 days** to grow a neutrophil, yet each lives only **12–18 hours** and can phagocytize **once** — so a healthy marrow releases **over 100 billion a day**, and colony-stimulating factors (**G-CSF, GM-CSF**) can cut maturation to hours in an emergency. When infection outruns supply, the marrow releases **immature bands** that can’t phagocytize: a **left shift** means the defense is losing ground.', ['**12–14 days** to make; **12–18 hr** to live', '**> 100 billion/day**; G-CSF speeds it', '**Left shift** = defense losing ground']],
        ['Why the second exposure is different', 'the first time, a few B cells must be found, sensitized and multiplied — days of illness while **IgM** slowly rises. They leave **memory cells**; the next time, memory cells divide at once and flood the blood with **IgG** (the **anamnestic response**), so the invader is often cleared before illness starts. **Vaccines** create this memory without the disease; **boosters** top it up as it fades.', ['First time: slow, **IgM**, illness', '**Memory cells** → fast, huge **IgG** response', 'Vaccines create memory; **boosters** refresh it']],
        ['Why tissue type matters', '**HLAs** are inherited from both parents, so only an **identical twin** matches exactly. Another person’s cells read as **non-self**: cytotoxic T cells and NK cells attack a **transplant** as they would a virus-infected cell. That is why donors are **HLA-matched** as closely as possible and recipients need **immunosuppression** — which, in turn, weakens their defense against infection.', ['HLAs: match only an **identical twin**', 'Graft = **non-self** → T and NK cells attack', '**Match + immunosuppress** → infection risk']]
      ],
      why: 'Immunity is a balance between **attack and restraint**: too little and infections and cancers win; too much or misdirected and the body attacks harmless things (allergy) or itself (autoimmunity). Regulatory T cells, self-tolerance and cytokines keep the balance — and many drugs work by pushing it one way or the other.',
      whyShort: ['Balance of **attack vs restraint**', 'Too little → infection, cancer; too much → **allergy, autoimmunity**', 'Drugs push the balance']
    }]
  });

  topic({
    ch: '16', title: 'How immunity is gained: innate and adaptive, active and passive', tag: 'Foundation',
    boxes: [{
      title: 'Two systems working together',
      items: [
        ['Innate (general) immunity', 'present at birth, **nonspecific**, **immediate**, short-term, with **no memory** and can’t be passed to another person: **skin, cornea, mucous membranes** of the airways, gut and genitourinary tract; antimicrobial chemicals on the skin; **inflammation**; **complement**; **natural killer cells**. It keeps most organisms out and attacks those that get in.', ['**Barriers**: skin, cornea, mucosa', '**Inflammation, complement, NK cells**', 'Fast, same every time, **no memory**']],
        ['The microbiome', 'the **normal flora** in the mouth, gut, nose and sinuses, vagina and on the skin — harmless while they stay in their own places — **support immunity** and cellular regulation by crowding out pathogens.', ['Normal flora **support** immunity', 'Harmless **where they belong**']],
        ['Adaptive (acquired) immunity', 'learned after exposure and **specific** to one antigen: **antibody-mediated (humoral) immunity** by **B cells**, and **cell-mediated immunity** by **T cells** (and NK cells). It is slower the first time but leaves **memory** for a faster, stronger response later — and it needs innate immunity to get started.', ['**AMI** (B cells, antibodies) + **CMI** (T cells)', '**Specific**, with **memory**', 'Needs innate immunity to start']],
        ['Immunocompetence and infection', '**immunocompetent** means all parts work and protection is maximal. **Infection** is invasion by pathogens that **multiply** and cause disease. Immunity can be weakened **temporarily or permanently** by disease, injury and treatments — or act **too strongly or at the wrong time** (hypersensitivity and autoimmunity, Chapter 17).', ['**Immunocompetent** = all parts working', 'Weakened by disease, injury, **treatment**', 'Excess → **allergy, autoimmunity** (Ch 17)']]
      ],
      why: 'Innate immunity buys time; adaptive immunity wins the war and remembers it. Most invasions never cause illness because the first line holds — and when it doesn’t, the second line is already being trained.',
      whyShort: ['**Innate buys time**; **adaptive wins and remembers**']
    }, {
      title: 'Four ways to be immune (Table 16.1)',
      items: [
        ['Natural active', 'catching the disease (for example **varicella**) and recovering — the body makes its own antibodies and memory. The **most effective and longest-lasting** kind.', ['Illness → own antibodies', '**Strongest, longest**']],
        ['Artificial active (vaccine-induced)', 'a **killed or weakened (attenuated)** organism or its parts given by vaccine (tetanus, diphtheria, polio, varicella) — the body makes its own antibodies without the disease. Lasts years but needs **boosters**.', ['**Vaccine** → own antibodies', 'Years; needs **boosters**']],
        ['Natural passive', 'antibodies from the mother cross the **placenta** to the fetus or reach the infant in **colostrum and breast milk** — immediate but temporary.', ['**Placenta, breast milk**', 'Immediate, **temporary**']],
        ['Artificial passive', '**injected antibodies** made by another person or animal — **immune globulin** after exposure to **rabies, tetanus, snake venom** or other serious diseases, or **convalescent plasma** from people who recovered from COVID-19. Works **at once**, but the foreign antibodies are **cleared quickly** and **no memory** forms.', ['**Immune globulin**, antitoxin, **convalescent plasma**', 'Immediate, **short-lived, no memory**']],
        ['Putting them together: a tetanus-prone wound', 'a deep, dirty puncture wound in someone **never vaccinated** against tetanus: first an injection of **antitetanus antibodies** (passive — protection **now**), then a few weeks later the **tetanus toxoid vaccine** to start the person’s **own** antibodies (active — protection **later**).', ['Now: **antitoxin** (passive)', 'Later: **tetanus toxoid** (active)']],
        ['Convalescent plasma', 'plasma rich in **anti–COVID-19 antibodies** can lessen the severity and length of infection; it helps most for people with **severe** COVID-19 or at **high risk** of a severe course, ideally within **72 hours** of symptom onset.', ['Best for **severe/high-risk** COVID-19', 'Within **72 hours** of symptoms']]
      ],
      why: 'Active immunity takes time but lasts because the body keeps the recipe (memory cells); passive immunity is instant but borrowed — the body sees the donated antibodies as foreign and clears them. That is why passive protection is used to **bridge** a dangerous gap until active immunity can develop.',
      whyShort: ['**Active**: slow, lasting (memory)', '**Passive**: instant, borrowed, cleared', 'Passive **bridges** until active develops']
    }]
  });

  topic({
    ch: '16', title: 'Self vs non-self, immune cells and the WBC count',
    boxes: [{
      title: 'Recognizing self',
      items: [
        ['HLAs — the “product code”', '**human leukocyte antigens** (also called histocompatibility or class I antigens) sit on almost all body cells and define a person’s **tissue type**. They are inherited from both parents and are **identical only in an identical twin**. To another person’s immune system they are **antigens** — proteins that trigger an immune response.', ['On **most cells**; = **tissue type**', 'Match only an **identical twin**', 'Another person’s HLAs = **antigens**']],
        ['Self-tolerance', 'immune cells compare HLAs at every encounter: a perfect match is **self** and left alone; anything else — **infected cells, cancer cells, other people’s cells, invaders** — is **non-self** and is neutralized, destroyed or eliminated. **Regulatory T cells** maintain this tolerance; when it fails, the body attacks itself.', ['**Match = self**; mismatch = **attack**', 'Non-self: **infected, cancer, foreign cells, microbes**', '**Tregs** keep tolerance']],
        ['Toll-like receptors', 'receptors on immune cells (shared with animals, insects and plants) that recognize the surfaces of **microorganisms** — and **injured or stressed self cells** — so the right defense is triggered.', ['Recognize **microbes**', 'and **stressed self cells**']]
      ],
      why: 'Without self-tolerance the immune system’s weapons would be turned on the body itself; without non-self recognition it couldn’t find invaders. Both depend on reading the same surface code.',
      whyShort: ['Same code read two ways: **spare self, attack non-self**']
    }, {
      title: 'Where immune cells come from (Table 16.2)',
      items: [
        ['Stem cells and growth factors', 'the **bone marrow** makes **pluripotent stem cells** that can become any blood or immune cell; **growth factors** steer them (for example **erythropoietin** → red cells). Some mature in the marrow; others mature elsewhere (T cells in the **thymus**).', ['Marrow **stem cells** → any blood cell', '**Growth factors** decide (erythropoietin → RBCs)']],
        ['Granulocytes and agranulocytes', '**granulocytes** have large cytoplasmic granules: **neutrophils, basophils, eosinophils** (and tissue **mast cells**). **Agranulocytes** — **monocytes/macrophages and lymphocytes** — have only fine granules.', ['Granulocytes: **neutrophils, basophils, eosinophils** (+ mast cells)', 'Agranulocytes: **monocytes, lymphocytes**']],
        ['Who does what', 'inflammation: **neutrophils** (nonspecific phagocytosis), **macrophages** (phagocytosis, antigen presentation, help for AMI and CMI), **monocytes** (become macrophages), **eosinophils** (allergy and parasites), **basophils** (histamine, kinins, heparin). AMI: **B cells**, **plasma cells** (secrete antibody), **memory cells**. CMI: **helper T**, **cytotoxic T**, **regulatory T**, **natural killer** cells.', ['Inflammation: **neutrophils, macrophages**, eos, basos', 'AMI: **B, plasma, memory** cells', 'CMI: **helper, cytotoxic, regulatory T, NK**']],
        ['What leukocytes do', 'recognize **self vs non-self**; **destroy** invaders, debris and abnormal self cells; **make antibodies**; activate **complement**; maintain **self-tolerance**; and make **cytokines** that boost production and activity of other white cells.', ['Recognize, **destroy**, make **antibodies**', 'Complement, tolerance, **cytokines**']]
      ],
      why: 'Each white cell type is specialized, so the **differential** — which types are high or low — tells far more than the total count: bacteria raise neutrophils, allergies and parasites raise eosinophils, and a shortage of mature neutrophils means vulnerability.',
      whyShort: ['Specialized cells → read the **differential**, not just the total']
    }, {
      title: 'The WBC count and differential (Table 16.3)',
      items: [
        ['Normal values', 'total WBC **5000–10,000/mm³**; **segmented neutrophils 55–70%** (2500–7000); **bands about 5%** (250–500); **lymphocytes 20–40%** (1000–4000); **monocytes 2–8%** (100–800); **eosinophils 1–4%** (50–400); **basophils 0.5–1%** (25–100).', ['Total **5000–10,000**', '**Segs 55–70%**, **bands ~5%**, lymphs 20–40%', 'Monos 2–8%, **eos 1–4%**, basos 0.5–1%']],
        ['Absolute neutrophil count', 'only **mature** neutrophils can phagocytize, so the **number of mature circulating neutrophils (ANC)** measures resistance to infection: **the higher, the better protected; the lower, the more susceptible**.', ['**ANC** = mature neutrophils', 'Low ANC → **infection risk**']],
        ['Left shift (bandemia)', 'in severe or prolonged infection (sepsis) the marrow can’t keep pace and releases **immature bands** — the differential “shifts left” toward young cells on the maturation diagram. Bands **can’t phagocytize**, so a left shift signals a **struggling defense** and **sepsis risk**.', ['**More bands** than usual', 'Marrow can’t keep up → **sepsis risk**', 'Bands **can’t phagocytize**']],
        ['Eosinophils up', '**eosinophilia** with **allergic** reactions (allergic rhinitis, asthma, atopic dermatitis, chronic hives), **parasites**, and **transplant rejection**; very high counts can cause or worsen allergic responses. With hay fever, expect **eosinophils** — not bands or basophils — to rise.', ['↑ with **allergy, asthma, parasites**, rejection', 'Hay fever → **↑ eosinophils**']]
      ],
      why: 'A normal total WBC can hide a problem in its parts — a high eosinophil count in an allergic patient, or a normal count with poor neutrophil function in an older adult. Read each line of the differential against its own range.',
      whyShort: ['Normal total can **hide** abnormal parts', 'Check **each line** against its range']
    }]
  });

  topic({
    ch: '16', title: 'Inflammation: cells, phagocytosis and the three stages',
    boxes: [{
      title: 'The cells of inflammation',
      items: [
        ['Neutrophils', '**55–70%** of white cells; mature in the marrow in **12–14 days**, live **12–18 hours**, so **over 100 billion** are released daily. Mature ones are **segs** (PMNs, “polys”); immature ones are **bands** (stabs). Each can phagocytize only **once** — the army is huge but short-lived.', ['**55–70%**; segs (mature) vs **bands**', 'Live **12–18 hr**; > **100 billion/day**', 'One phagocytosis each']],
        ['Macrophages', 'start as **monocytes** in the blood and mature in tissues (many in the **liver, spleen, gut**), some fixed, some mobile. They **phagocytize repeatedly**, live long, help **repair**, **present antigens** to T cells and secrete **cytokines** — linking inflammation to AMI and CMI.', ['Monocytes → **macrophages** in tissue', '**Many phagocytoses**; **present antigens**', 'Secrete **cytokines**']],
        ['Basophils and mast cells', 'basophils (~**1%**) and tissue **mast cells** carry **IgE** on their surface; when an allergen binds, they release **vasoactive amines**: **histamine** (dilates arterioles, narrows small veins — blood pools), **kinins** (leaky capillaries — “vascular leak”), **heparin** (slows clotting), serotonin and leukotrienes. They drive both general and **allergic** inflammation.', ['Carry **IgE**; release **histamine, kinins, heparin**', 'Pooling + **capillary leak**', '**Allergic** inflammation']],
        ['Eosinophils', '**1–4%**; most active against **parasitic larvae**; prolong later inflammation; rise in **allergy** and can trigger **asthma** attacks in allergic asthma.', ['**Parasites**; prolong inflammation', '↑ in **allergy, asthma**']],
        ['Complement', '**20 inactive plasma proteins** that, once triggered (by IgG or IgM), activate one another in a cascade, stick to an antigen and form a **membrane attack complex** — making phagocytosis and destruction far more efficient.', ['**20 proteins**, cascade', '**Membrane attack complex** → easier phagocytosis']]
      ],
      why: 'Inflammation’s cells split the work: **mast cells and basophils** open the vessels, **neutrophils** arrive in numbers to kill, and **macrophages** clean up and call in the specific defenses. The visible signs are the vessels opening; the invisible part is the cells moving in.',
      whyShort: ['**Mast cells/basophils** open vessels', '**Neutrophils** kill; **macrophages** clean + call AMI/CMI']
    }, {
      title: 'Phagocytosis and the three stages',
      items: [
        ['Seven steps of phagocytosis', '(1) **exposure/invasion**; (2) **attraction** by chemotaxins from damaged tissue; (3) **adherence**, helped by **opsonins** (antibodies, complement, dead neutrophils) that coat the target; (4) **recognition** as non-self; (5) **ingestion** (engulfing); (6) **phagosome formation** — granules release enzymes; (7) **degradation** — the target is digested.', ['Exposure → **attraction** → **adherence (opsonins)**', '**Recognition** → ingestion', 'Phagosome → **degradation**']],
        ['Stage I — vascular', 'injured tissue, leukocytes and mast cells release **histamine, serotonin and kinins** (especially bradykinin): **arterioles dilate**, small veins narrow → **redness, warmth** (more nutrients delivered); **capillaries leak** → **swelling and pain** (the fluid cushions the area). Lasts **24–72 hours**. Resident **macrophages** act first and secrete **colony-stimulating factor**, cutting neutrophil production from **14 days to hours**.', ['Histamine, kinins → **red, warm, swollen, painful**', '**24–72 hr**; **macrophages** first', '**CSF** → neutrophils in hours']],
        ['Stage II — cellular exudate', '**neutrophilia** within about **12 hours**; **pus** (dead WBCs, dead tissue, fluid) forms. The **arachidonic acid cascade** begins: **cyclooxygenase (COX)** turns AA into mediators (prostaglandins, leukotrienes, histamine, serotonin, kinins) that sustain inflammation — the step **anti-inflammatory drugs** block. If infection lasts more than a few days, **immature neutrophils** appear and **sepsis risk** rises.', ['**Neutrophilia**, **pus**', '**AA → COX** → mediators (NSAIDs block)', 'Prolonged → **bands**, **sepsis risk**']],
        ['Stage III — repair', 'begins at the moment of injury: healthy cells divide to **replace** tissue; where cells can’t divide, **new vessels and scar** form. **Scar never works like the original** — after an MI, scar replacing 20% of the left ventricle cuts its pumping by **at least 20%**.', ['**Replace** (cells divide) or **scar**', 'Scar = **lost function** (MI example)']],
        ['Five cardinal signs', '**warmth, redness, swelling, pain and decreased function** — the same whatever the cause (a scald and an ear infection look alike at the tissue level); their degree depends on the **intensity, severity and duration** of the trigger, from a splinter to a **systemic** response after a large burn.', ['**Warmth, redness, swelling, pain, ↓function**', 'Same for **any** cause; scale = intensity']],
        ['Inflammation without infection', 'joint **sprains, MI, blisters** (injury) and **allergic rhinitis, contact dermatitis** (noninfectious invasion) inflame without germs; **otitis media, appendicitis, viral hepatitis** are infections that inflame. **Inflammation alone gives no lasting immunity** — lymphocytes do that.', ['Sprain, **MI**, blister, **allergy** = no infection', 'No **lasting immunity** from inflammation']]
      ],
      why: 'Because inflammation runs the same program for every trigger, its signs tell you **that** something is wrong and **where**, not **what**. The cause — germ, injury or allergen — comes from the history, cultures and the differential.',
      whyShort: ['Signs say **that** and **where**', 'History, cultures, differential say **what**']
    }]
  });

  topic({
    ch: '16', title: 'Antibody-mediated immunity',
    boxes: [{
      title: 'From B cell to antibody',
      items: [
        ['Where B cells mature', 'B cells start as stem cells in the **bone marrow** (primary lymphoid tissue) and mature in **secondary lymphoid tissues** — the **spleen**, parts of the **lymph nodes**, the **tonsils** and the **intestinal mucosa**.', ['Marrow → **spleen, nodes, tonsils, gut**']],
        ['Exposure and recognition', 'antigens must arrive in **large enough numbers** to slip past or overwhelm innate defenses. **Macrophages** attach to the (opsonized) antigen and **present** it to **helper T cells**; together they process it to expose its recognition sites, and the helper T cell brings it to an unsensitized B cell.', ['Enough antigen to **overwhelm** innate defense', 'Macrophage **presents**; **helper T** brings it to B cell']],
        ['Sensitization', 'the B cell recognizes the antigen as non-self and becomes **sensitized** — to that **one** antigen, for life, as are all its descendants. It divides into **plasma cells** (start making antibody **at once** — up to **300 molecules a second**) and **memory cells** (wait for the next exposure).', ['Sensitized to **one antigen**, for life', '→ **plasma cells** (300 antibodies/sec)', '→ **memory cells**']],
        ['Antibodies travel', 'antibodies leave the cell and circulate in the blood and body fluids (“humors” — hence **humoral** immunity). Because they are free, they can be **transferred** to another person for **immediate, short-term** protection.', ['Free in blood (**humoral**)', 'Transferable → **passive** immunity']],
        ['Memory (sustained immunity)', 'on re-exposure, **memory cells** divide quickly into plasma cells that pour out the specific antibody — the **anamnestic response** — so the person usually **doesn’t get sick again**. Without it, every exposure would mean a new illness.', ['**Memory cells** → fast, large response', 'Usually **no repeat illness**']]
      ],
      why: 'Antibody immunity is a cooperative effort: the macrophage finds and shows the antigen, the helper T cell organizes, and the B cell makes the weapon. That is why losing **helper T cells** (as in HIV) cripples antibody responses too.',
      whyShort: ['Macrophage **shows**, helper T **organizes**, B cell **makes**', 'Lose helper T → antibodies fail too']
    }, {
      title: 'What antibodies do and the five classes (Table 16.4)',
      items: [
        ['Antibody shape', 'a **Y-shaped** immunoglobulin: the two **arm tips (Fab)** grip the specific antigen (two antigens, or two spots on one); the **stem (Fc)** sticks to receptors on white cells, arming them with antibody.', ['**Y**: arms (Fab) bind antigen', 'Stem (**Fc**) binds white cells']],
        ['Five actions', '**agglutination** — clumping antigens into immune complexes that phagocytes find easily; **lysis** — holes in the invader’s membrane (usually with complement); **complement fixation** (IgG, IgM start the cascade); **precipitation** — complexes so large they drop out of suspension for removal; **inactivation (neutralization)** — covering the antigen’s active site to make it harmless.', ['**Agglutination**, **lysis**', '**Complement fixation**, **precipitation**', '**Inactivation** (covers the active site)']],
        ['IgM and IgG', '**IgM** — the **first** antibody after a new sensitization; a five-unit group with **10 binding sites**, efficient at clumping and complement; keeps a first illness to days. **IgG** — made in **large amounts on re-exposure**, the **most abundant** antibody, the source of **long-term protection**; activates complement and boosts phagocytes.', ['**IgM: first**, 10 binding sites', '**IgG: re-exposure**, most abundant, **long-term**']],
        ['IgA, IgE, IgD', '**IgA** — the **secretory** antibody of mucous membranes and the gut, guarding the **respiratory, GI and genitourinary** tracts. **IgE** — drives **immediate hypersensitivity (allergy)** and fights **parasites (helminths)**. **IgD** — a **B-cell antigen receptor**.', ['**IgA**: **mucosal** (airway, gut, GU)', '**IgE**: **allergy, parasites**', '**IgD**: B-cell receptor']],
        ['Immunoglobulins = gamma globulins', 'all antibodies are **immunoglobulins** — globular proteins of immunity — also called **gamma globulins** because they separate in the gamma fraction of plasma proteins.', ['Antibodies = **immunoglobulins** = **gamma globulins**']]
      ],
      why: 'Antibodies rarely kill on their own — they **mark and gather** antigens so complement and phagocytes can finish the job. That makes AMI and inflammation partners: each works far better with the other.',
      whyShort: ['Antibodies **mark and gather**', 'Complement + phagocytes **finish** the job']
    }]
  });

  topic({
    ch: '16', title: 'Cell-mediated immunity and cytokines',
    boxes: [{
      title: 'T cells and NK cells',
      items: [
        ['Where and how', 'T-cell stem cells mature in the **thymus** and parts of the **lymph nodes**. T cells form **clones**, each with receptors for **one** environmental antigen — millions of clones recognize millions of antigens. Subsets are named by surface **markers** (CD proteins).', ['Mature in the **thymus**, nodes', '**Clones** for millions of antigens', 'Named by **CD markers**']],
        ['Helper T cells (CD4+)', 'the **organizers**: when they recognize non-self they secrete **cytokines** that boost marrow production and the activity of every other part of immunity — inflammation, AMI and CMI.', ['**CD4+** = organizers', 'Cytokines boost **all** immunity']],
        ['Regulatory T cells (Tregs)', 'begin as CD4 cells, carry **CD25** receptors, and are activated by **IL-2** and the factor **FoxP3**; they secrete **IL-10** to **restrain** immune cells. They prevent overreactions and antibodies against **self** — when they fail, inflammation runs unchecked and **autoimmune disease** develops.', ['Restrain immunity (**IL-10**)', 'Prevent **self-attack**', 'Fail → **autoimmunity**']],
        ['Cytotoxic T cells', 'recognize **self cells carrying foreign antigens** — especially cells infected by **viruses or protozoa** — bind to them, punch a hole and deliver a **lethal hit** of enzymes. They also attack **grafts and transplanted organs**. They protect healthy self cells by secreting **CTLA-4**.', ['Kill **virus-infected** self cells', 'Attack **grafts**', '**CTLA-4** protects healthy self']],
        ['Natural killer cells (CD16+)', 'kill some non-self cells **without prior sensitization** — “seek and destroy” — most effectively **cancer cells** and **virus-infected cells**; they also attack grafts.', ['**No sensitization** needed', 'Best vs **cancer, virus-infected** cells']],
        ['What CMI protects against', 'CMI best recognizes **cancer cells** and cells infected by organisms that live **inside** host cells (especially **viruses**); it helps prevent cancer and **metastasis** after carcinogen exposure, and it regulates AMI and inflammation through cytokines.', ['**Cancer** and **intracellular** infections', 'Regulates AMI and inflammation']]
      ],
      why: 'Antibodies can’t reach a virus hiding inside a cell — only a T cell or NK cell that kills the whole infected cell can. That is why people with weak cell-mediated immunity struggle most with **viruses, fungi, intracellular bacteria and cancers**.',
      whyShort: ['Antibodies can’t reach **inside cells**', 'Weak CMI → **viruses, fungi, cancers**']
    }, {
      title: 'Cytokines (Table 16.5)',
      items: [
        ['What they are', 'small **hormone-like proteins** — **monokines** (from macrophages, neutrophils, eosinophils, monocytes) and **lymphokines** (from T cells) — that act on **responder cells** carrying the matching **receptor**, nearby or far away. Groups: **interleukins** (the largest), **interferons, colony-stimulating factors, tumor necrosis factors, transforming growth factors**.', ['Hormone-like **messengers**', 'Need a **receptor** on the responder', 'ILs, **IFNs, CSFs, TNF**, TGF']],
        ['Proinflammatory', '**IL-1**: **fever**, inflammation and clotting. **IL-2**: growth and activation of **all T and B cells**; boosts NK cells against cancer. **IL-5**: from helper T cells; increases **eosinophils**. **IL-6**: the liver makes fibrinogen and other acute-phase proteins (your book says “protein C”; IL-6 is best known for raising **C-reactive protein**); more stem cells and B cells. **IL-17**: more proinflammatory cytokines (G-CSF, GM-CSF), neutrophil-rich inflammation. **IL-23**: expands **Th17** cells that direct gut bacterial killing.', ['**IL-1 → fever**', '**IL-2 → T, B, NK**', '**IL-5 → eosinophils**', 'IL-6, IL-17, IL-23']],
        ['Inhibitory', '**IL-10**: from macrophages and Tregs; **suppresses** proinflammatory cytokines and maintains **self-tolerance** (the chapter text also lists IL-10 among the proinflammatory cytokines; its table and the Treg section describe it as inhibitory). **Tumor necrosis factor**: fever, the main cytokine of **rheumatoid arthritis** damage and of the **septic** response, graft rejection, cell death, delayed hypersensitivity (your book lists TNF here although it acts largely to inflame).', ['**IL-10** → suppresses, **tolerance**', '**TNF**: fever, **RA damage, sepsis**, rejection']],
        ['Growth factors', '**G-CSF** — more and more mature **neutrophils**; **GM-CSF** — growth of myeloid stem cells; **erythropoietin** — **red cells**; **thrombopoietin** — **platelets**. Several are given as drugs (for example to restore neutrophils after chemotherapy).', ['**G-CSF → neutrophils**', '**Erythropoietin → RBCs**', '**Thrombopoietin → platelets**']]
      ],
      why: 'Cytokines are the immune system’s messages — and messages can be blocked or sent as drugs. That is how **TNF blockers** calm rheumatoid arthritis and IBD, and how **colony-stimulating factors** rebuild the marrow after chemotherapy.',
      whyShort: ['Cytokines = **messages**', '**Block** them (TNF blockers) or **give** them (G-CSF)']
    }]
  });

  topic({
    ch: '16', title: 'Immunity in older adults',
    boxes: [{
      title: 'What changes and what to do',
      items: [
        ['Peak and decline', 'immunity works best in the **20s and 30s** and declines slowly; **nutrition, environment, drugs and disease** also shape it. Older adults lose function in both **innate** and **adaptive** immunity — more **infections** and more **autoimmune** disease.', ['Best in the **20s–30s**', 'Both **innate and adaptive** decline']],
        ['Inflammation changes', '**neutrophil activity** falls even when counts are normal; **no leukocytosis** during acute infection; often **no fever**; fewer **toll-like receptors**; the **microbiome** shifts toward more pathogenic organisms. Minor infections can be **missed until the person is septic**.', ['Normal count, **weak neutrophils**', '**No ↑WBC, often no fever**', 'Missed until **sepsis**']],
        ['Antibody changes', 'fewer B cells and slower maturation → poorer response to **new** antigens: give **influenza, pneumococcal and shingles** vaccines. Antibody levels from old exposures **fade faster** and memory cells respond **slowly**: give **boosters**, especially **tetanus and pertussis**.', ['**New** antigens: **flu, pneumococcal, shingles** vaccines', 'Old immunity fades: **tetanus, pertussis boosters**']],
        ['Cell-mediated changes', '**weaker T-cell function** (your book’s table also says circulating T cells decrease, while its text says numbers stay the same) → **false-negative TB skin tests** and more **bacterial and fungal infections** of the skin, mucous membranes, lungs and urinary tract. Loss of self-recognition raises **autoantibodies**.', ['Weaker **T-cell function**', '**False-negative TB skin tests**', 'More **skin, lung, urinary** infections; **autoantibodies**']]
      ],
      why: 'An older adult’s first sign of infection is often not fever but a **change in thinking, walking or eating** — because the inflammation that produces classic signs is muted. The nurse has to look for **function**, not just temperature.',
      whyShort: ['First sign may be **confusion, falls, poor intake**', 'Look at **function**, not just temperature']
    }]
  });

  adpie({
    ch: '16',
    lead: 'For immunity the nurse asks: **are the defenses intact** (history, drugs, age, vaccines), **is there inflammation or infection** (cardinal signs, temperature, the differential and ANC, pus), and **who won’t show it** (older adults, immunosuppressed) — then prevents infection, catches it early and keeps immunity current.',
    leadShort: ['**Defenses intact?** history, drugs, age, **vaccines**', '**Inflammation/infection?** signs, temp, **differential, ANC**', '**Who won’t show it?** older adults, immunosuppressed'],
    A: {
      cells: [
        ['History', 'recurrent or recent **infections**, **vaccination** history and boosters, chronic disease, **drugs that suppress immunity** (steroids, chemotherapy, transplant drugs), nutrition, age, **allergies**, recent wounds or exposures (e.g., influenza in a dorm).', ['Infections, **vaccines/boosters**', '**Immunosuppressing drugs**', 'Allergies, wounds, exposures']],
        ['Physical and labs', 'the **five cardinal signs** at any site, **wound drainage (pus)**, temperature (may be absent), vital signs, **mental status and function** in older adults; the **WBC count with differential**, **ANC**, **bands (left shift)**, **eosinophils**; cultures as ordered.', ['**Cardinal signs**, pus, temperature', '**Differential, ANC, bands, eosinophils**', 'Older adults: **mental status, function**']]
      ],
      why: 'Because inflammation can be muted, the lab differential and the patient’s **change from baseline** are often more telling than a thermometer.',
      whyShort: ['**Differential + change from baseline** > thermometer']
    },
    D: {
      cells: [
        ['Priority problems', '**risk for infection** from reduced immunity (aging, drugs, disease, low ANC); **potential for sepsis** when infection outruns the defenses (left shift); inflammation causing **pain and lost function**; incomplete **immunization**.', ['**Risk for infection**; **sepsis**', 'Pain, **lost function**', 'Incomplete **vaccination**']]
      ]
    },
    P: {
      cells: [
        ['Outcomes', 'no new infection — or infection **found early**; WBC and differential returning to normal ranges; wounds healing without pus; **vaccines and boosters up to date**; the patient knows the signs to report and how to protect against infection.', ['No infection or **early detection**', 'Differential **normalizing**; wounds heal', '**Vaccines current**; knows signs']]
      ]
    },
    I: {
      cells: [
        ['Prevent', '**hand hygiene**, aseptic technique, intact skin and mucous membranes, good nutrition; **vaccinate** (influenza, pneumococcal, shingles for older adults; tetanus and pertussis **boosters**); after a tetanus-prone wound in an unvaccinated person, **antitoxin now and the vaccine series**.', ['**Hand hygiene**, asepsis, skin care', '**Vaccines + boosters**', 'Tetanus wound: **antitoxin + vaccine**']],
        ['Detect and respond', 'check a draining wound: **temperature**, **photograph and document**, notify the provider (cultures, antibiotics as prescribed) — don’t seal it under an occlusive dressing or swab it with harsh antiseptics; report a **left shift, low ANC** or signs of **sepsis**; in older adults, treat **new confusion or decline** as possible infection.', ['Pus: **temperature, photograph, notify**', 'Report **left shift, low ANC, sepsis**', 'Older adult: **confusion = possible infection**']],
        ['Teach and handle drugs safely', 'teach that **vaccines need boosters**, how to recognize infection, and that **inflammation isn’t always infection**; follow special **handling precautions** for immunosuppressant drugs.', ['**Boosters**; signs of infection', 'Inflammation ≠ always infection', '**Safe handling** of immunosuppressants']]
      ]
    },
    E: {
      cells: [
        ['Evaluate', 'temperature and vital signs back to baseline; inflammation **subsiding** (less redness, swelling, pain; function returning); **WBC and differential normalizing** (fewer bands, ANC recovering); wound clean and healing; vaccinations **current**; the patient states the signs of infection to report.', ['Vitals at baseline; **inflammation subsiding**', '**Fewer bands**, ANC up', 'Wound healing; **vaccines current**']]
      ]
    }
  });
};
