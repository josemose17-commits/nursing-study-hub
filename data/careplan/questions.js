// "Questions to ask": what to say to the patient (pt), what to ask the nurse, instructor or family (rn), and the
// questions to be ready for (them), for each box of the Clinical Reasoning Plan of Care. Written for this site.
// Keys match data/careplan/form.js (client = the client details card; sys.<id> = one body system; plan.<part>).
window.CP_ASKQ = {
  client: {
    pt: ['What name would you like me to call you?',
      'What language do you prefer to speak? And to read health information in?',
      'Which pronouns do you use? (Ask privately and only if it feels natural.)',
      'Are you married, partnered or single?',
      'Is there a religion or faith that’s important to you? Is there anything about it we should know for your care, like food, prayer times or blood products?',
      'What kind of work do you do, or did you do before you retired?',
      'How do you like to learn new things: reading, watching a video, or having someone show you?',
      'Are you allergic to any medicines, foods or latex? What happens when you have it?',
      'Do you live in a house or an apartment? Are there stairs? Who lives with you?'],
    rn: ['Check that the allergy band and the chart’s allergy list match what the patient tells you.'] },
  support: {
    pt: ['Who do you turn to when you need help?', 'Who should we call if anything changes?', 'Who will help you when you go home?', 'Is there anyone you do NOT want us to share information with?'] },
  cc: {
    pt: ['What brought you to the hospital?', 'When did it start?', 'Where do you feel it? Can you point to it?', 'What does it feel like?',
      'Does it spread anywhere else?', 'Is it there all the time, or does it come and go? How long does it last?', 'What makes it better? What makes it worse?',
      'On a scale of 0 to 10, how bad was it at its worst?', 'Did you notice anything else, like fever, nausea or trouble breathing?',
      'What did you try at home before coming in?', 'How are you feeling today compared with when you came in?'],
    rn: ['What has been done since admission? What day of the stay is it?'] },
  social: {
    pt: ['Who do you live with?', 'What does a usual day look like for you?',
      'Do you smoke or vape, or did you in the past? About how much a day, and for how many years? When did you quit?',
      'Do you drink alcohol? What do you drink, how much, and how often? When was your last drink?',
      'Do you use any other drugs, like marijuana or pills that weren’t prescribed to you? (I ask everyone; it helps keep you safe.)',
      'What do you usually eat in a day?', 'Do you exercise or stay active?', 'How do you usually sleep?',
      'Before you got sick, could you bathe, dress and get around on your own? Do you use a cane or walker?',
      'Is there anything about your culture or beliefs you’d like us to know?'],
    tip: 'Ask the sensitive questions (substances, sexual health) privately, explain why you’re asking, and keep your tone neutral.' },
  pmh: {
    pt: ['What health problems do you see a doctor for?', 'When were you told you had it?', 'How well controlled is it? What do your blood pressure or blood sugar usually run at home?',
      'Have you been in the hospital before? What for?', 'Have you ever been treated for anxiety, depression or another mental health condition?',
      'Are your shots up to date: flu, pneumonia, COVID, tetanus?'],
    rn: ['Compare the answers with the history and physical in the chart.'] },
  psh: {
    pt: ['Have you ever had surgery? What, and when?', 'Did you have any problems with anesthesia, like trouble waking up or bad nausea?',
      'Has anyone in your family had a bad reaction to anesthesia?', 'Do you have any implants, like a pacemaker, stent, port or joint replacement?'] },
  meds: {
    pt: ['What medicines do you take at home? Do you have a list or the bottles with you?', 'What is each one for?', 'How and when do you take it?',
      'Do you take any over-the-counter medicines, vitamins, herbs or supplements?', 'Do you ever skip or stop a medicine? What gets in the way: cost, side effects, forgetting?',
      'Have you had any side effects?', 'When did you last take each one?'],
    rn: ['Which home medicines are on hold, and why?', 'Are any new medicines starting today?'] },
  pmhmeds: {
    pt: ['What do you take for your [blood pressure / sugar / heart]?', 'Is there anything you take that you’re not sure what it’s for?'] },

  sbar1: {
    rn: ['What’s the plan for today? Any tests or procedures?', 'Any changes overnight?', 'When was the last pain medicine given?', 'What’s the code status? Any isolation?',
      'Which medicines are due during my shift?', 'Any results pending that I should follow?', 'Is there anything you’re worried about with this patient?'] },

  vs1: {
    pt: ['Have you had anything hot or cold to eat or drink, or smoked, in the last 15 minutes? (Before an oral temperature.)', 'Do you know what your blood pressure usually runs?',
      'Do you get dizzy when you stand up?', 'Are you having any trouble breathing right now?',
      'Do you have any pain right now? Where? On a scale of 0 to 10, how bad? What does it feel like?', 'What pain level would let you rest and move around?', 'What has helped your pain before?'],
    rn: ['What are this patient’s usual (baseline) vital signs?', 'Are there parameters for holding any medicine (for example, hold for SBP under 100)?'] },
  'sys.gen': { pt: ['How are you feeling today?', 'Did you sleep last night?', 'Is anything bothering you right now?'] },
  'sys.neuro': { pt: ['Can you tell me your full name?', 'Where are you right now?', 'What’s today’s date, or the month and year?', 'Why are you in the hospital?',
    'Any headache, dizziness, numbness or tingling?', 'Any change in your vision or hearing?', 'Squeeze my fingers. Now push your feet against my hands.'] },
  'sys.resp': { pt: ['Are you short of breath? When: resting, walking, lying flat?', 'How many pillows do you sleep on?', 'Are you coughing? Are you bringing anything up? What color is it?',
    'Does it hurt when you take a deep breath?', 'Take a slow deep breath in and out through your mouth. (While you listen.)'] },
  'sys.cardiac': { pt: ['Any chest pain, pressure or tightness?', 'Does your heart ever race, pound or skip?', 'Any swelling in your feet or legs?', 'Do you feel dizzy or lightheaded?', 'Any calf pain when you walk?'] },
  'sys.gi': { pt: ['How is your appetite?', 'Any nausea or vomiting?', 'When was your last bowel movement? What was it like?', 'Are you passing gas?', 'Any belly pain? Where?', 'Any trouble swallowing?', 'Have you seen any blood, or black stool?'] },
  'sys.gu': { pt: ['Any burning or pain when you urinate?', 'Do you feel like you empty your bladder all the way?', 'Are you going more often than usual, or getting up at night to go?', 'Any trouble starting, or any leaking?', 'What color is your urine?'] },
  'sys.msk': { pt: ['Any pain or stiffness in your joints or muscles?', 'How do you usually get around at home?', 'Do you feel steady on your feet?', 'Have you fallen in the last 3 months?', 'Can you show me how you get up from the bed?'] },
  'sys.skin': { pt: ['Any itching, rashes or sores?', 'Are there any spots that hurt when you lie on them?', 'Does your IV site hurt or burn?', 'Any pain or drainage at your incision?', 'Do you have any wounds that are slow to heal?'] },

  orders: {
    pt: ['Do you know why you’re getting this medicine, oxygen or fluid?'],
    rn: ['Which orders are new today?', 'Why was this ordered for this patient? (When the reason isn’t clear from the chart.)', 'Are there any parameters, like hold if the heart rate is under 60?'] },
  rad: {
    pt: ['Have you had any x-rays or scans since you came in?', 'Do you have any tests scheduled today?'],
    rn: ['Were any scans or tests done? Are the results back?', 'Is anything scheduled today, and does the patient need to be NPO for it?'] },
  labs: {
    rn: ['Were labs drawn this morning? Are the results back?', 'Were any critical values called in, and was the provider told?', 'Are any labs being redrawn today?'] },
  fe: {
    pt: ['Have you been vomiting or had diarrhea?', 'How much have you been drinking and eating?', 'Do you take a water pill?',
      'Any muscle cramps, weakness, tingling, or your heart racing or skipping?', 'Any headache or feeling confused?'],
    rn: ['Is a replacement ordered (potassium, magnesium, fluids)? When is the recheck?', 'Is the patient on a cardiac monitor?'] },

  vs2: {
    pt: ['How do you feel now compared with earlier today?', 'How is your breathing now?', 'How is your pain now, 0 to 10? What pain level would you like to be at?'] },
  sys2: {
    pt: ['How is your breathing now compared with this morning?', 'How is your pain now?', 'How did you feel after [walking / the medicine / changing position]?'] },
  e1: { pt: ['How do you feel now compared with this morning?', 'What’s easier for you now? What’s still hard?'] },
  e2: { pt: ['Can you show me [how you use the incentive spirometer / how you get to the chair]?', 'How much did you eat and drink this shift?'] },
  e3: { pt: ['What would you like to work on next?', 'What worries you about going home?'], rn: ['Is discharge being planned? Any referrals (PT, case management, home care)?'] },

  sbar2: {
    rn: ['Ask your instructor or the patient’s nurse before you call. Students usually call with them, or they make the call.'],
    them: ['What are the latest vital signs, and when were they taken?', 'What is the code status?', 'Any allergies?', 'What is the mental status?', 'What were the last labs?',
      'How much oxygen are they on?', 'What exactly are you asking me for?'],
    tip: 'Before you call: chart open, latest vital signs, MAR, labs, allergies and code status in front of you.' },
  sbar3: {
    them: ['When was the last pain medicine, and when is the next dose due?', 'What are the intake and output for the shift?', 'Are any labs or results pending?',
      'What is the code status? Fall risk?', 'What IV fluids are running, and how is the IV site?', 'Is the family involved? Any teaching left to do?'] },

  pcc1: {
    pt: ['How do you like to learn new things: reading, a video, or someone showing you?', 'Do you wear glasses or hearing aids? Do you have them with you?',
      'Would you like an interpreter?', 'Who would you like here when we talk about your care?',
      'So I know I explained it clearly, can you tell me in your own words how you’ll [take this medicine]? (Teach-back.)'] },
  pcc2: {
    pt: ['What matters most to you while you’re in the hospital?', 'Are there cultural or religious practices we should know about?', 'Are there foods you prefer or can’t eat?',
      'How do you like to make decisions about your care: on your own, or with family?', 'What time of day is best for you to bathe, walk or learn something new?'] },
  pcc3: {
    pt: ['What would you like to be able to do before you go home?', 'What do you think will be hardest at home?', 'Who will help you?',
      'Can you show me how you’ll [use the inhaler / check your sugar]?', 'Do you know who to call if [warning sign] happens?'] },
  team: { rn: ['To your instructor: “I haven’t done this skill on a patient before. Can you review it with me and watch me do it?”', 'To the nurse: “Where can I find the policy for this procedure?”'] },
  ebp: { rn: ['To the charge nurse or educator: “Which clinical guidelines and references does this unit use?”', '“How do I reach the library databases from the unit computers?”'] },
  safety: { rn: ['To pharmacy: “Can you verify this label and dose? It looks like another drug.”', 'To your instructor: “Can you double-check this with me before I give it?”'] },
  informatics: { rn: ['To the nurse: “Which drug and clinical references can I open from the EHR here?”'] },

  'plan.stmt': { pt: ['What do you think is making this hard for you? (It can point to the related factor.)', 'When is it worse? What helps?'] },
  'plan.stg': { pt: ['What would you like to be able to do by the end of today?', 'What pain level would let you rest and move?', 'What do you want to be able to do when you go home?'],
    tip: 'Goals you set together are client-centered, and patients follow them more.' },
  'plan.iv': { pt: ['What has helped this before?', 'What would make this easier for you?'] },
  'plan.ev': { pt: ['On a scale of 0 to 10, how is your pain now?', 'How is your breathing now?', 'Can you show me [the skill you taught]?', 'How did walking go?'] }
};

// Erikson: questions that show where the patient is, by stage (0 = infancy … 7 = older adult). Ask a caregiver for young children.
window.CP_ERIK_Q = [
  ['(To the caregiver) How does the baby feed and sleep?', 'How does the baby react when you pick them up, or when you leave the room?'],
  ['(To the caregiver) What does your child like to do by themselves?', 'How does your child react when they’re told no, or when something is hard?'],
  ['What do you like to play?', '(To the caregiver) Does your child start games and make up stories? How do they react when they make a mistake?'],
  ['What are you good at?', 'How is school going?', 'What do you like to do with your friends?'],
  ['What do you want to do after high school?', 'How would your friends describe you?', 'What’s important to you?'],
  ['Who are the people closest to you?', 'Are you in a relationship?', 'Who do you spend your free time with?', 'Do you ever feel lonely?'],
  ['What keeps you busy: work, family, community?', 'Who depends on you?', 'What are you proud of contributing?', 'Is there any part of your life where you feel stuck?'],
  ['When you look back on your life, what are you most proud of?', 'Is there anything you wish you had done differently?', 'How do you feel about getting older?', 'What gives your life meaning now?']
];

// How to interview: shown once at the top and on the interview sheet.
window.CP_INTERVIEW_TIPS = [
  'Introduce yourself and your role, and say what you’re going to do and why.',
  'Sit at eye level, give privacy, and ask one question at a time.',
  'Start open (“Tell me about…”), then get specific (“On a scale of 0 to 10…”).',
  'Avoid “why” questions that can sound like blame. Try “What made it hard to…?”',
  'Ask sensitive questions privately and say everyone is asked them.',
  'Use teach-back to check understanding, and respect it if the patient doesn’t want to answer.',
  'Never write the patient’s name, birth date or record number in your notes: initials only.'
];
