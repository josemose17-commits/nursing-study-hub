// Exam 4 · Think it through · Safety (Varcarolis ch 25 suicide and nonsuicidal self-injury). Written in our own words.
(window.MH_CONDS = window.MH_CONDS || []).push(
{
  id: 'suicide', group: 'Safety', name: 'Suicide risk', week: 12,
  short: 'Hopeless after a loss, has a plan and the means; the first hours of admission are the riskiest.',
  patient: '24-year-old brought to the ED after friends found a goodbye note. Lost her job and broke up with her boyfriend this month. Drinking heavily. Says, “I just want the pain to stop.” Her boyfriend’s handgun is in her apartment. One prior overdose at age 19.',
  report: [
    'I’m calling about Ms. O., admitted from the ED for suicidal ideation after her friends found a goodbye note.',
    'She has major depression and one prior overdose at 19, and she has been drinking heavily since she lost her job and her relationship this month.',
    'When I asked directly, she said she has a plan to shoot herself with her boyfriend’s gun, which is still in her apartment. She is tearful and says she feels hopeless. Her blood alcohol was 0.09 on arrival. She is on one-to-one observation now; her belongings have been searched and sharps and cords removed.',
    'I’m asking you to evaluate her for continued one-to-one observation and to address the gun with her and her boyfriend before any discharge planning. She will need CIWA monitoring for alcohol withdrawal as well.'
  ],
  steps: {
    rc: {
      gist: 'Listen for **overt** (“I want to die”) and **covert** (“You won’t have to worry about me much longer”) statements, and watch for **behavior changes**: giving things away, putting affairs in order, withdrawal, increased drinking, and a **sudden calm**. Then **ask directly** about thoughts, **plan, means, intent** and past attempts.',
      terms: [
        { t: 'Suicidal ideation', see: '“I keep thinking everyone would be better off without me.”', why: 'Thoughts of ending one’s life range from passive (“I wish I wouldn’t wake up”) to active, with a plan.', means: 'The first thing to clarify: passive or active, how often, how strong, and whether there is a **plan**.' },
        { t: 'Plan, means, intent (lethality)', see: '“I’d use the gun in the apartment, this weekend when he’s gone.”', why: 'Risk rises steeply with a **specific** plan, a **lethal** method (firearm, hanging, jumping), **access** to it, and a **timeline**.', means: 'Specific + lethal + available + soon = highest risk → **constant one-to-one observation** and removal of the means.' },
        { t: 'Hopelessness', see: '“Nothing will ever change. There’s no point.”', why: 'Hopelessness is the cognitive state most closely tied to suicide; it removes the reason to wait for things to improve.', means: 'Ask about suicide whenever you hear it, and build hope with small goals and reasons for living.' },
        { t: 'Sudden calm or improvement', see: 'A tearful, agitated patient is suddenly peaceful and smiling, and gives her necklace to a peer.', why: 'Having **made the decision** can bring relief. Returning energy (early antidepressant treatment) can also make acting possible.', means: '**Reassess immediately**; never loosen precautions because the patient “seems better.”' },
        { t: 'Alcohol and drug use', see: 'Blood alcohol 0.09; drinking every night this month.', why: 'Alcohol lowers inhibition, worsens depression, and makes an impulsive act more likely and more lethal.', means: 'A major **risk factor**; also plan for withdrawal monitoring.' }
      ],
      cards: [
        { h: 'Warning signs (act now)', b: ['Talking or writing about death or suicide.', 'Saying they are **hopeless, trapped or a burden**, or have no reason to live.', 'More alcohol or drug use; reckless behavior.', 'Withdrawal from people; dramatic mood changes.', '**Giving away possessions**, writing a will, saying goodbye.'] },
        { h: 'Risk factors', b: ['**Previous attempt** (the strongest predictor).', 'Mood disorder, psychosis, substance use, personality disorder.', '**Access to lethal means** (firearms).', 'Family history of suicide; exposure to the suicide of others.', 'Recent **loss** (relationship, job, money, legal trouble), trauma or abuse, chronic illness or pain.', 'Demographics: **men** die by suicide more often (more lethal methods); women attempt more often. **Older white men** have the highest rates; suicide is a leading cause of death in **ages 10–34**.'] },
        { h: 'Protective factors', b: ['Effective mental health care and easy access to it.', 'Strong connections to family, friends and community; children in the home.', 'Problem-solving skills; religious or cultural beliefs against suicide.', 'Ongoing contact with providers (follow-up calls).'] },
        { h: 'How to ask', b: ['“Are you thinking about killing yourself?” Use the word; **don’t** say “you’re not thinking of hurting yourself, are you?”', '“Do you have a plan? What is it? Do you have what you need to do it? When?”', '“Have you ever tried before? What happened?”', 'Asking does **not** put the idea in someone’s head; it usually brings relief.'] }
      ]
    },
    ac: {
      gist: 'She has **many risk factors at once**: depression, a prior attempt, recent losses, alcohol, a **specific plan with a firearm** that is **accessible**. Few protective factors are active right now. That makes her **high risk**. Tools such as the **SAFE-T** (with the Columbia scale) put the risk level into a structured form.',
      cards: [
        { h: 'Putting the risk together', b: ['**Low**: thoughts of death, no plan, intent or behavior; strong protective factors → outpatient referral and a safety plan.', '**Moderate**: ideation with a plan but no intent or behavior → consider admission; safety plan; remove means.', '**High**: plan with intent, a lethal method, a recent attempt or psychosis → **admission and constant observation**.'], why: 'Risk is not one item but how many risk factors stack up, minus how many protective factors are active.' },
        { h: 'Common terms', b: ['**Suicide**: a death caused by self-directed injurious behavior with intent to die.', '**Suicide attempt**: a nonfatal self-directed act with intent to die (with or without injury).', '**Suicidal ideation**: thoughts of ending one’s life.', '**Nonsuicidal self-injury**: deliberate self-harm **without** intent to die.'] }
      ]
    },
    ph: {
      gist: 'The top priority is **risk for suicide**: physical safety comes first, with the most restrictive observation that the risk requires. After that: hopelessness, ineffective coping, social isolation and the alcohol use.',
      cards: [
        { h: 'Risk is highest when…', b: ['In the **first days of admission**.', 'During **staff changes**, shift change, weekends and holidays.', 'With **sudden improvement** or worsening.', 'In the **weeks after discharge**.', 'Early in antidepressant treatment, when energy returns before mood.'] }
      ]
    },
    gs: {
      gist: 'Outcomes: she **remains safe**; she **tells staff** when suicidal thoughts increase; she identifies **reasons to live**, **warning signs** and **coping strategies**; and before discharge she has a **written safety plan** and the **firearm is out of the home**.',
      cards: [
        { h: 'Safety plan (6 steps)', b: ['1 · My **warning signs** (thoughts, moods, situations).', '2 · **Coping strategies** I can do alone (walk, music, shower).', '3 · **People and places** that distract me.', '4 · **People I can ask for help**.', '5 · **Professionals and crisis lines**: **988** Suicide & Crisis Lifeline, 911.', '6 · **Making the environment safe**: remove guns and stockpiled pills.'], why: 'A **no-suicide contract** is **not** a safety measure and doesn’t protect the patient or the nurse. A safety plan gives concrete steps to use in a crisis.' }
      ]
    },
    ta: {
      gist: 'Start **suicide precautions**: **constant one-to-one observation** for high risk (never out of sight, within arm’s length if needed), a **search** of the patient and her belongings, and removal of **sharps, cords, belts and glass**. **Mouth checks** after medications. Document her mood and words **every 15 minutes**. Build a relationship and talk about feelings. Involve her family and remove the means. Give medications (SSRIs are safer than TCAs in overdose).',
      cards: [
        { h: 'Suicide precautions on the unit', b: ['**One-to-one**: a staff member always within sight (arm’s length when risk is highest), including in the bathroom and while she sleeps.', '**Hands visible** while sleeping (not under the covers).', 'Search belongings and visitors’ items; remove **belts, shoelaces, cords, plastic bags, razors, glass, metal utensils**. Paper or plastic trays.', '**Watch each medication swallowed** (no cheeking or hoarding).', 'Document location, **mood, verbatim statements** and behavior every **15–30 minutes**.', 'Unit design: breakaway curtain rods, tamper-proof screws, windows that don’t open.'] },
        { h: 'What to say', b: ['“I’m concerned about your safety. I’m going to stay with you.”', '“Tell me what has been happening that makes you want to die.”', 'Acknowledge the pain; don’t argue, judge or promise secrecy.', 'Don’t say “You have so much to live for” (minimizes) or “Suicide is a sin” (judges).'] },
        { h: 'Means restriction', b: ['Ask family to **remove firearms** (or lock them away off-site) and lethal medications before discharge.', 'Dispense medications in **small quantities** (especially TCAs and MAOIs).', 'Restricting access to the means saves lives: suicidal crises are often short, and a delay lets the crisis pass.'] },
        { h: 'After an attempt in the ED', b: ['Medical stabilization first (airway, overdose treatment).', 'Then a full suicide assessment and constant observation.', 'Lithium and clozapine reduce suicide in bipolar disorder and schizophrenia. **ECT** helps when the risk is acute and severe.'] }
      ]
    },
    eo: {
      gist: 'Reassess suicide risk **every shift**, **before any change in observation level**, before passes, at discharge, and whenever the mood suddenly lifts or drops. Look for reasons to live, use of coping skills, engagement with staff and peers, a completed safety plan and removal of the means. Plan a **follow-up appointment within days** and a **follow-up phone call**.',
      cards: [
        { h: 'Signs the risk is falling', b: ['Denies a plan or intent on direct questioning, and her behavior matches.', 'Talks about the future and about specific reasons to live.', 'Uses coping strategies; asks staff for help.', 'Family has removed the gun; outpatient appointment scheduled.'] },
        { h: 'Survivors', b: ['Family and friends of someone who died by suicide (“survivors”) have grief, guilt, anger and their own higher suicide risk.', 'Offer support groups and counseling. Staff need debriefing too.'] }
      ]
    }
  }
},
{
  id: 'nssi', group: 'Safety', name: 'Nonsuicidal self-injury', week: 12,
  short: 'Cuts on the forearms to “feel something” or relieve tension, without intent to die.',
  patient: '16-year-old seen in the school clinic for cuts on her upper arms in different stages of healing, hidden under long sleeves on a hot day. She says, “It’s not like I want to die. It just makes the pressure go away.”',
  report: [
    'I’m calling about J., a 16-year-old seen in the school clinic for self-inflicted cuts on both upper arms.',
    'She has no psychiatric history on file. She says she started cutting 6 months ago after her parents’ divorce and does it several times a week.',
    'The cuts are superficial and in different stages of healing; the newest one has redness spreading about 2 cm from the edge. She denies suicidal thoughts or a plan, says cutting relieves “pressure,” and is willing to talk.',
    'I’m asking you to see her today for a mental health evaluation and to assess the infected cut. I’ve cleaned and dressed the wounds and asked her permission to contact her mother.'
  ],
  steps: {
    rc: {
      gist: 'Notice **patterned injuries** (cuts, burns, scratches) in **hidden places**, at **different stages of healing**, **long sleeves** in warm weather, and statements about **relieving tension or feeling something**. Ask directly about **suicidal intent**, because NSSI and suicide can coexist.',
      terms: [
        { t: 'Nonsuicidal self-injury (NSSI)', see: 'Superficial, parallel cuts on the forearms or thighs; burns; head-banging; scratching.', why: 'Deliberate damage to one’s own body **without intent to die**, used to **regulate emotion**: to escape overwhelming feelings, to end numbness, or as self-punishment.', means: 'Not a suicide attempt, but a strong **risk factor** for later suicide attempts. Always assess suicidal intent separately.' },
        { t: '“It makes the pressure go away”', see: 'The patient describes rising tension and then relief right after injuring.', why: 'Tissue damage releases **endogenous opioids** (endorphins), which give brief relief or even a “high” (pain offset relief). The relief **reinforces** the behavior.', means: 'This is why it repeats: it works in the short term. The plan is to **replace** it with other ways to tolerate distress, not just forbid it.' },
        { t: 'Wounds at different stages', see: 'Fresh cuts beside healed scars.', why: 'Shows a **repeated pattern** rather than one event.', means: 'Assess frequency and escalation, and check each wound for **infection** and the need for sutures.' }
      ],
      cards: [
        { h: 'Who and when', b: ['Usually begins in **early adolescence** (12–14).', 'About **15% of teens** and **17–35% of college students** have self-injured.', 'Common with **borderline personality disorder**, depression, anxiety, eating disorders, substance use and trauma.', 'Proposed DSM criteria: injury on **5 or more days in the past year** without suicidal intent, causing distress.'] }
      ]
    },
    ac: {
      gist: 'The cues point to **NSSI** used to manage emotional pain after a family stressor. Intent to die is denied, but NSSI **doubles** the later risk of a suicide attempt, so this is still a safety issue. One wound appears **infected**.',
      cards: [
        { h: 'NSSI vs suicide attempt', b: ['**Intent**: to feel better and keep living vs to die.', '**Method**: usually low lethality and repeated vs often higher lethality.', '**After**: relief vs often unchanged or worse.', 'But the two **overlap**: ask every time.'] },
        { h: 'Why people self-injure', b: ['To **relieve** tension, anger, anxiety or numbness (the most common reason).', 'To punish oneself (self-loathing).', 'To communicate distress or get help when words fail.', 'Learned from peers or social media (contagion).', 'Linked to childhood trauma, harsh punishment, poor attachment and bullying.'] }
      ]
    },
    ph: {
      gist: 'Priorities: **wound care** and infection, **risk for self-mutilation**, and the underlying **anxiety, depression or trauma**, while screening for suicide risk.',
      cards: [
        { h: 'Priority problems', b: ['**Risk for self-mutilation** / self-mutilation.', '**Impaired tissue integrity**; risk for infection.', '**Anxiety**, **ineffective coping**, **low self-esteem**.'] }
      ]
    },
    gs: {
      gist: 'Outcomes: **no new self-injury**; she **asks staff for help** when the urge rises; she names her **triggers** and **two or more alternative coping skills**; the wounds heal without infection; she engages in treatment (DBT, therapy) and takes medications for any comorbid disorder as prescribed.'
    },
    ta: {
      gist: 'Respond **calmly and without judgment**. Treat the wounds **matter-of-factly**, without lecturing, showing shock or giving extra attention. Build trust; explore **triggers** and the **function** of the injury; teach **replacement coping skills** (DBT: distress tolerance and emotion regulation). Make a plan to tell staff when urges rise, and keep the environment safe.',
      cards: [
        { h: 'Nursing interventions', b: ['**Wound care** in a neutral, caring way; teach signs of infection.', 'Use a **nonjudgmental**, curious tone: “What was happening right before you cut?”', 'Ask her to **tell staff** when she feels the urge (and praise her when she does).', 'Teach **alternatives**: holding ice, squeezing a stress ball, intense exercise, drawing on the skin with a red marker, journaling, calling someone, grounding.', 'Don’t make promises to keep it secret; involve parents, and explain why.', 'Check yourself for frustration or **countertransference**; get supervision.'], why: 'Shock or punishment increases shame, which is a trigger. A calm, consistent response keeps her talking to you, and that is your window to teach other skills.' },
        { h: 'Treatment', b: ['**Dialectical behavior therapy (DBT)**: the best evidence. Skills for **distress tolerance, emotion regulation, mindfulness and interpersonal effectiveness**.', 'CBT; family therapy for teens.', 'Medications target the comorbid disorder (SSRIs for depression or anxiety).'] }
      ]
    },
    eo: {
      gist: 'Evaluate **frequency and severity** of injuries over time, whether she reports **urges** before acting, her use of **new coping skills**, wound healing, and **suicide risk** at every contact.',
      cards: [
        { h: 'If it worsens', tag: 'If it worsens', b: ['More frequent or deeper injuries, a change to a more lethal method, or new **suicidal intent** → full suicide assessment and a higher level of care.'] }
      ]
    }
  }
}
);
