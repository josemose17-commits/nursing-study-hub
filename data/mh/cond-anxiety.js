// Exam 4 · Think it through · Anxiety and obsessive-compulsive disorders (Varcarolis ch 15). Written in our own words.
(window.MH_CONDS = window.MH_CONDS || []).push(
{
  id: 'anxiety', group: 'Anxiety', name: 'Panic attack and generalized anxiety', week: 12,
  short: 'Sudden chest tightness, racing heart and fear of dying with a normal ECG; months of worry.',
  patient: '31-year-old in the ED for the third time this month with sudden chest tightness, pounding heart, shaking, numb fingers and a sense she is about to die. Troponin and ECG are normal. Between attacks she worries constantly about work, money and her kids, sleeps poorly and has stopped driving on the highway.',
  report: [
    'I’m calling about Ms. P. in bed 7. She came in with chest tightness and palpitations that started suddenly 20 minutes before arrival.',
    'This is her third ED visit this month for the same symptoms. Her cardiac work-ups have been negative, and she has no cardiac history.',
    'On arrival her HR was 128, RR 28, SpO₂ 99%, and she had tingling fingers. Her ECG is sinus tachycardia and the first troponin is negative. With slow breathing and a quiet room, her HR is now 96. She is still frightened and asking if she is dying.',
    'I’m asking you to complete the cardiac rule-out, and if it stays negative, to consider a panic disorder evaluation and a mental health referral before discharge. Please also tell me whether you want a PRN lorazepam ordered.'
  ],
  steps: {
    rc: {
      gist: 'First, **rule out a physical cause** (MI, PE, hyperthyroidism, hypoglycemia, stimulants, withdrawal). Then place the anxiety on the **mild → moderate → severe → panic** scale, using her **perceptual field**, her **ability to problem-solve** and her **physical signs**. Look for the pattern: **panic attacks**, **anticipatory worry** and **avoidance**.',
      terms: [
        { t: 'Panic attack', see: 'Sudden surge of terror that peaks within **minutes**: pounding heart, chest pain, shortness of breath, choking, trembling, sweating, dizziness, tingling, **fear of dying or “going crazy.”**', why: 'A false alarm of the **fight-or-flight** system: the amygdala fires and the sympathetic nervous system floods the body with adrenaline.', means: 'Usually peaks in about 10 minutes and resolves in under 30. **Stay with her**, speak calmly and simply, and guide her breathing. Never assume a panic attack until a cardiac cause is ruled out.' },
        { t: 'Hyperventilation and tingling', see: 'Fast, shallow breathing; numb, tingling fingers and lips; lightheadedness.', why: 'Overbreathing blows off CO₂ → **respiratory alkalosis**. Alkalosis lowers ionized calcium, so nerves fire more easily (tingling) and blood vessels in the brain constrict (dizziness).', means: 'Coach **slow breathing** (in through the nose, longer breath out). The symptoms ease as CO₂ normalizes.' },
        { t: 'Narrowed perceptual field', see: 'She can only focus on her heartbeat and can’t follow your instructions about the ECG.', why: 'As anxiety rises, attention narrows onto the threat and filters out everything else.', means: 'Tells you the level. At **severe or panic** anxiety, she can’t problem-solve or learn, so give short, simple directions and save the teaching for later.' },
        { t: 'Anticipatory anxiety and avoidance', see: 'Has stopped driving on the highway in case an attack happens there.', why: 'The fear of the next attack becomes its own problem; avoiding places brings relief, which reinforces the avoidance.', means: 'A sign of **panic disorder**, and of **agoraphobia** if avoidance spreads to places where escape would be hard.' },
        { t: 'Excessive worry (GAD)', see: 'Worries about many things most days, can’t stop, with muscle tension, fatigue, irritability and poor sleep.', why: 'Chronic overactivation of the stress response; worry is used (unsuccessfully) to feel in control.', means: '**Generalized anxiety disorder**: worry most days for **at least 6 months**, with at least 3 physical or cognitive symptoms.' }
      ],
      cards: [
        { h: 'The four levels of anxiety', b: ['**Mild**: perceptual field **heightened**; alert, can learn and solve problems; restless, fidgety. Can be useful.', '**Moderate**: field **narrowed** (selective inattention); can still solve problems **with help**; faster heart rate and breathing, voice tremor.', '**Severe**: field **greatly reduced**, fixed on details; **cannot solve problems**; headache, nausea, dizziness, trembling; needs direction.', '**Panic**: **unable to attend** to the environment; disorganized, may feel unreal or have hallucinations; may run, freeze or strike out; **danger** to self and others.'], why: 'The level tells you what the patient can take in. At mild to moderate you can teach and problem-solve together; at severe to panic you give **safety, calm and simple directions**.' },
        { h: 'Anxiety disorders to know', b: ['**Panic disorder**: recurrent unexpected attacks plus **1 month** of worry about attacks or changed behavior.', '**Agoraphobia**: fear of places where escape is hard (crowds, transit, outside the home).', '**Generalized anxiety disorder**: excessive worry for **6 months or more**.', '**Specific phobia**: an irrational fear of an object or situation (heights, needles, blood).', '**Social anxiety disorder**: fear of being judged or embarrassed in social or performance situations.', '**Separation anxiety disorder**: excessive fear of separation from an attachment figure (most common in children).'] },
        { h: 'Medical causes to rule out', b: ['Cardiac (MI, dysrhythmia), PE, asthma or COPD (hypoxia).', '**Hyperthyroidism**, hypoglycemia, pheochromocytoma.', '**Caffeine**, stimulants, decongestants; **withdrawal** from alcohol or benzodiazepines.'] }
      ]
    },
    ac: {
      gist: 'With the cardiac work-up negative, the cues fit **panic disorder** (recurrent unexpected attacks plus worry and avoidance) with **generalized anxiety** between attacks. Hyperventilation explains the tingling. She is at the **panic** level now and will come down to **moderate** with calm support.',
      cards: [
        { h: 'Why the body feels like it’s dying', b: ['**Adrenaline** → tachycardia, palpitations, chest tightness, sweating, tremor.', 'Hyperventilation → **low CO₂** → tingling, dizziness, air hunger.', 'Blood shunted to the muscles → cold hands, nausea, a “butterflies” feeling.', 'The brain reads these sensations as danger → more adrenaline (the panic cycle).'] },
        { h: 'Causes', b: ['**Biologic**: an overactive amygdala and fear circuit; low GABA and serotonin activity; genetics.', '**Learned**: conditioning (a place becomes linked with an attack).', '**Cognitive**: misreading body sensations as catastrophic (“my heart is racing, I’m having a heart attack”).', 'Stress and trauma; caffeine and substances.'] }
      ]
    },
    ph: {
      gist: 'During the attack the priority is **safety and physical stability**: rule out the dangerous cause, stay with her, and bring her anxiety down from panic. After the attack: **ineffective coping**, **avoidance** and **sleep**. Teaching waits until her anxiety is mild to moderate.',
      cards: [
        { h: 'Match the action to the level', b: ['**Severe/panic**: stay, calm, quiet room, short sentences, breathing, PRN medication; meet physical needs. **Don’t teach yet.**', '**Mild/moderate**: help her **name** the anxiety, talk about it, problem-solve, link triggers to feelings, and learn new skills.'] }
      ]
    },
    gs: {
      gist: 'Short term: her **anxiety falls** to mild or moderate (HR and RR return to normal, she can follow directions). Longer term: she can **recognize early signs**, uses **relaxation or breathing** to stop the escalation, gradually **re-enters avoided situations**, sleeps 6–8 hours, and takes medication safely.'
    },
    ta: {
      gist: '**Stay with her**, keep a **calm** manner and a **low, slow voice**, move to a **quiet** space, and use **short, simple** statements with repetition. Guide **slow breathing**. Give a **PRN** as ordered. Once calmer: name the anxiety, explore triggers, teach relaxation and **CBT** skills, and explain the medications.',
      cards: [
        { h: 'Severe to panic: what the nurse does', b: ['**Stay** with the patient; never leave someone at panic level alone.', 'Stay **calm** yourself: anxiety is contagious, and so is calm.', '**Reduce stimuli**: a quiet room, dim lights, fewer people.', '**Short, simple** sentences, repeated: “You’re safe. I’m staying with you. Breathe with me.”', 'Low-pitched voice, slow pace.', 'Reinforce reality if she has distortions.', 'Meet physical needs (fluids, rest); PRN medication; seclusion only if she is dangerous.'] },
        { h: 'Mild to moderate: what the nurse does', b: ['Help her **recognize** it: “You seem uneasy. Are you comfortable right now?”', 'Encourage her to talk about feelings and concerns; don’t change the subject or give advice.', 'Ask what she was **thinking right before** it started.', '**Problem-solve** together; role-play new responses.', 'Explore what has helped before.', 'Offer **physical outlets**: walking, exercise.'] },
        { h: 'Relaxation skills to teach', b: ['**Diaphragmatic breathing**: slow inhale, longer exhale.', '**Progressive muscle relaxation**: tense and release each muscle group.', '**Guided imagery**, **mindfulness**, grounding (5-4-3-2-1).', 'Limit **caffeine, nicotine and alcohol**; regular exercise and sleep.'] },
        { h: 'Therapies', b: ['**CBT** (first line): challenge catastrophic thoughts; interoceptive exposure (bringing on the sensations safely).', '**Exposure therapy** and **systematic desensitization** for phobias and agoraphobia: graded steps, from least to most frightening, paired with relaxation.', '**Flooding**: rapid, intense exposure (only with a therapist).'] },
        { h: 'Medications', b: ['**SSRIs and SNRIs** (escitalopram, sertraline, paroxetine, venlafaxine, duloxetine): **first line** for long-term control (no misuse risk, and they treat co-occurring depression); antianxiety effect takes **4–8 weeks**.', '**Benzodiazepines** (lorazepam, alprazolam, clonazepam, diazepam): fast relief for **short-term or acute** use. Sedation, falls in older adults, **respiratory depression with alcohol or opioids**, **dependence**; never stop abruptly (withdrawal seizures). Antidote for overdose: **flumazenil**.', '**Buspirone**: for GAD; **no sedation or dependence**, but takes **2–4 weeks**, so it is **not PRN**.', '**Hydroxyzine**: a nonaddictive antihistamine option. **Propranolol** for performance anxiety (blocks tremor and tachycardia).'], why: 'Benzodiazepines enhance **GABA**, the brain’s main brake, so they work in minutes. That same effect adds to alcohol and opioids and builds tolerance.' }
      ]
    },
    eo: {
      gist: 'Check vital signs and her ability to follow directions as the attack subsides. Over time: fewer attacks and ED visits, use of breathing skills when an attack begins, return to avoided places (highway driving), better sleep, and safe medication use (no mixing benzodiazepines with alcohol).',
      cards: [
        { h: 'Teaching on discharge', b: ['Panic attacks feel dangerous but **are not** physically harmful once the heart has been checked.', 'Use the breathing skill at the **first sign**.', 'Take the SSRI daily even when well; it takes weeks.', 'Benzodiazepines: no alcohol, no driving until she knows the effect, don’t stop suddenly.', 'Follow up with outpatient CBT.'] }
      ]
    }
  }
},
{
  id: 'ocd', group: 'Anxiety', name: 'Obsessive-compulsive disorder', week: 12,
  short: 'Intrusive fear of contamination; washes hands 60 times a day until they crack and bleed.',
  patient: '22-year-old college student admitted because handwashing now takes 6 hours a day. Her hands are red, cracked and bleeding. She knows the fear of germs is excessive but says, “If I don’t wash, something terrible will happen to my family.” She has missed her classes for a month and rarely eats in the dining hall.',
  report: [
    'I’m calling about Ms. K., admitted with severe OCD.',
    'She has had contamination obsessions since high school. They have worsened over the last 3 months, and her washing now takes about 6 hours a day. She was started on fluoxetine 3 weeks ago.',
    'Both of her hands are fissured and bleeding, with redness and warmth over the right knuckles. She has lost 3 kg. She becomes highly anxious and tearful when anyone interrupts her washing.',
    'I’m asking you to assess the right hand for cellulitis and to order a skin barrier cream. Please also put in a referral for exposure and response prevention therapy. I’m setting up a schedule that builds in time for her washing while we start limiting it.'
  ],
  steps: {
    rc: {
      gist: 'Identify **obsessions** (unwanted, intrusive thoughts, images or urges that cause anxiety) and **compulsions** (repetitive behaviors or mental acts done to **reduce** that anxiety), how much **time** they take (more than **1 hour a day**), how they **impair** her function, and the **physical damage** they cause (skin, nutrition, sleep, elimination).',
      terms: [
        { t: 'Obsession', see: 'A constant, unwanted fear that germs on her hands will make her family sick.', why: 'An intrusive thought the person recognizes as coming from their own mind (unlike a delusion), but can’t stop, and it creates intense anxiety.', means: 'Usually **ego-dystonic**: the person knows it is excessive and is distressed by it. Ask about the content without judgment.' },
        { t: 'Compulsion', see: 'Washing hands in a fixed sequence 60 times a day; checking the stove 20 times.', why: 'The ritual **relieves** the anxiety briefly. Relief is **negative reinforcement**, so the ritual gets stronger each time.', means: 'Interrupting it abruptly sends anxiety soaring, so you **don’t stop the ritual cold**. Limits are set gradually, with her involved.' },
        { t: 'Fissured, bleeding skin', see: 'Cracked, raw hands; redness and warmth over the knuckles.', why: 'Repeated washing strips the skin’s protective oils, so it cracks, and bacteria can get in.', means: 'A **physical priority**: skin integrity and infection. Lotion, gloves at night and a provider assessment for cellulitis.' },
        { t: 'Insight', see: '“I know it sounds crazy, but I can’t stop.”', why: 'Most people with OCD have **good or fair insight**; some have poor insight or none.', means: 'Good insight helps her engage in therapy; use it to set goals together.' }
      ],
      cards: [
        { h: 'Common obsession → compulsion pairs', b: ['Contamination → washing, cleaning.', 'Doubt or harm (“Did I leave the stove on?”) → **checking**.', 'Symmetry or order → arranging, counting, repeating.', 'Unwanted violent, sexual or religious thoughts → praying, reassurance-seeking, mental rituals.'] },
        { h: 'OCD-related disorders', b: ['**Body dysmorphic disorder**: preoccupation with a perceived flaw in appearance; mirror-checking, seeking cosmetic surgery.', '**Hoarding disorder**: persistent difficulty discarding possessions; clutter makes the home unsafe (fire, falls).', '**Trichotillomania**: recurrent hair pulling.', '**Excoriation (skin-picking) disorder**.'] }
      ]
    },
    ac: {
      gist: 'The cues fit **OCD with contamination obsessions and washing compulsions**: more than an hour a day, causing distress and impairment, with **good insight**. The washing has caused **skin breakdown with possible infection**, and the time spent on rituals is crowding out **eating, sleep and school**.',
      cards: [
        { h: 'Why it happens', b: ['**Biologic**: overactivity in the **cortico-striatal-thalamic loop** (the brain’s error-detection circuit keeps signaling “something’s wrong”); **low serotonin** activity (why SSRIs help); genetics.', '**Learned**: the ritual reduces anxiety, which reinforces the ritual.', 'In children, a sudden onset after a strep infection can be **PANDAS**.'] },
        { h: 'Defense mechanisms in OCD', b: ['**Undoing**: a ritual to “cancel out” an unacceptable thought.', '**Reaction formation** and **isolation of affect** are also described.'] }
      ]
    },
    ph: {
      gist: 'Priorities: **impaired skin integrity and infection risk**, then **nutrition, sleep and elimination** (rituals crowd them out), then **anxiety and ineffective coping**, then **role performance** (school, relationships).',
      cards: [
        { h: 'Physical needs come first', b: ['Skin: rituals of washing → cracked skin → infection.', 'Nutrition: no time to eat, or fear of contaminated food.', 'Elimination: some patients put off voiding or defecating (UTI, constipation).', 'Sleep: rituals at bedtime can take hours.'] }
      ]
    },
    gs: {
      gist: 'Outcomes: **skin heals** without infection; she **eats and sleeps** on schedule; she **reduces time spent on rituals** step by step (for example from 6 hours to 4, then less); she uses **anxiety-reduction** skills; and she returns to classes.'
    },
    ta: {
      gist: '**Don’t interrupt rituals abruptly or punish them** — at first, **build time for them** into a structured daily schedule. Then **gradually limit** them with her agreement. Meet physical needs, protect her skin, use a **nonjudgmental** approach, teach relaxation, and support **exposure and response prevention** and the **SSRI**.',
      cards: [
        { h: 'Nursing interventions', b: ['**Allow time for rituals** at first, and plan the day around them so meals and care still happen.', '**Gradually limit** the time with her (a set number of washes, a timer), and **praise** each reduction.', '**Structure**: a predictable schedule; fewer decisions.', 'Skin care: gentle soap, **lotion after each wash**, cotton gloves at night; watch for infection.', 'Support her during **exposure and response prevention** sessions; sit with her through the anxiety.', 'Encourage her to talk about **feelings** rather than rituals; avoid giving repeated reassurance (reassurance becomes a compulsion).', 'Recognize your own **frustration**: the rituals are not a choice.'], why: 'Stopping a ritual abruptly without another way to manage the anxiety can push her to severe or panic anxiety.' },
        { h: 'Exposure and response prevention (ERP)', b: ['First-line **behavioral therapy**.', 'She is **exposed** to the trigger (touching a doorknob) and **prevented from doing the ritual**, while the anxiety rises, peaks and **falls on its own**.', 'Repeated practice teaches the brain that the feared outcome doesn’t happen.'] },
        { h: 'Medications', b: ['**SSRIs** (fluoxetine, fluvoxamine, sertraline, paroxetine) at **higher doses**, taking **8–12 weeks** for full effect.', '**Clomipramine** (a TCA): effective, but anticholinergic and lethal in overdose.', 'Antipsychotics as add-ons in resistant cases.'] }
      ]
    },
    eo: {
      gist: 'Measure **time spent on rituals each day**, the **condition of her skin**, intake and weight, sleep, attendance at therapy and classes, and her anxiety level when rituals are delayed.',
      cards: [
        { h: 'Signs care is working', b: ['Washing down from 6 hours to under 2 a day.', 'Hands healing with no signs of infection.', 'Eating three meals; sleeping 7 hours.', 'Can wait a set time before washing and uses breathing to ride out the anxiety.'] }
      ]
    }
  }
}
);
