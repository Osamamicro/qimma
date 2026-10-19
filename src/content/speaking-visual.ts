import type { Item } from '@/core';

/** Additional original items (v1 bank growth, 2026-10-18). */
export const speakingVisualItems: Item[] = [
  // ---------- Describe Image (illustrative data only) ----------
  {
    id: 'di-011',
    type: 'describe-image',
    title: 'Primary class sizes by region',
    difficulty: 1,
    chart: {
      kind: 'bar',
      title: 'Average primary school class size by region (illustrative)',
      unit: 'pupils',
      xLabel: 'Region',
      yLabel: 'Average pupils per class',
      categories: ['North', 'South', 'East', 'West', 'Central'],
      series: [{ name: 'Average class size', values: [24, 21, 27, 19, 22] }],
    },
    keyPoints: [
      { label: 'Topic', keywords: ['class size', 'class sizes', 'pupils', 'primary school', 'primary schools', 'regions'] },
      { label: 'Largest classes', keywords: ['east', '27', 'twenty-seven'], sameSentence: ['largest', 'highest', 'biggest', 'most'] },
      { label: 'Smallest classes', keywords: ['west', '19', 'nineteen'], sameSentence: ['smallest', 'lowest', 'least'] },
      { label: 'Middle regions', keywords: ['north', 'south', 'central', '24', '21', '22', 'average'], sameSentence: ['between'] },
      { label: 'Conclusion', keywords: ['eight pupils', 'difference', 'gap', 'four of the five', 'staffing', 'overall'] },
    ],
    modelAnswer:
      'This bar chart shows the average number of pupils in each primary school class across five regions, based on illustrative figures. The East has the largest classes, with an average of 27 pupils. The West has the smallest, at 19 pupils, so the gap between the highest and lowest regions is eight pupils. The North, South and Central regions fall between 21 and 24 pupils. Overall, four of the five regions have classes of more than 20 pupils, which suggests that staffing and classroom space may need attention in the East.',
  },
  {
    id: 'di-012',
    type: 'describe-image',
    title: 'Wind and hydro output',
    difficulty: 2,
    chart: {
      kind: 'line',
      title: 'Monthly electricity generation from wind and hydro, first half of the year (illustrative)',
      unit: 'GWh',
      xLabel: 'Month',
      yLabel: 'Electricity generated (GWh)',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      series: [
        { name: 'Wind', values: [310, 295, 260, 240, 215, 190] },
        { name: 'Hydro', values: [250, 265, 290, 320, 360, 400] },
      ],
    },
    keyPoints: [
      { label: 'Topic', keywords: ['electricity', 'generation', 'power', 'energy', 'wind', 'hydro'] },
      { label: 'Wind decline', keywords: ['wind', '310', '190'], sameSentence: ['falls', 'fell', 'decline', 'declined', 'decreased', 'drops'] },
      { label: 'Hydro increase', keywords: ['hydro', '250', '400'], sameSentence: ['rises', 'rise', 'rising', 'increase', 'increased', 'grows'] },
      { label: 'Crossover point', keywords: ['march', 'crossover', 'cross'], sameSentence: ['overtook', 'overtakes', 'overtake', 'lead', 'ahead'] },
      { label: 'Conclusion', keywords: ['june', 'swap', 'switch', 'relies more', 'depend', 'rely', 'overall'] },
    ],
    modelAnswer:
      'This line graph compares monthly electricity generation from wind and hydro power over the first six months of the year, using illustrative figures. Wind output starts strongly at 310 gigawatt hours in January, but it falls steadily to 190 in June. Hydro moves in the opposite direction, rising from 250 to 400 gigawatt hours. Wind generated more electricity than hydro in January and February, but hydro overtook it in March and stayed ahead. Overall, the two sources swap places during the half year, so the grid relies more on hydro as the months pass.',
  },
  {
    id: 'di-013',
    type: 'describe-image',
    title: 'Municipal budget by service',
    difficulty: 2,
    chart: {
      kind: 'pie',
      title: 'How a city divides its operating budget between services (illustrative)',
      unit: '%',
      slices: [
        { label: 'Roads', value: 28 },
        { label: 'Public transit', value: 19 },
        { label: 'Policing', value: 17 },
        { label: 'Water and sewers', value: 16 },
        { label: 'Parks and recreation', value: 12 },
        { label: 'Libraries', value: 8 },
      ],
    },
    keyPoints: [
      { label: 'Topic', keywords: ['budget', 'spending', 'municipal', 'city', 'council', 'services'] },
      { label: 'Largest share', keywords: ['roads', 'road', 'road maintenance', '28'], sameSentence: ['largest', 'biggest', 'most', 'highest'] },
      { label: 'Second largest', keywords: ['public transit', 'transit', '19'], sameSentence: ['second'] },
      { label: 'Smallest share', keywords: ['libraries', 'library', '8', 'eight'], sameSentence: ['smallest', 'least', 'lowest'] },
      { label: 'Combined transport share', keywords: ['47', 'forty-seven', 'nearly half', 'together', 'transport', 'transportation'] },
    ],
    modelAnswer:
      'This pie chart shows how a city divides its operating budget between municipal services, based on illustrative figures. Roads take the largest share, at 28 percent. Public transit is the second biggest item, at 19 percent, followed by policing at 17 percent. Water and sewers receive 16 percent, while parks and recreation take 12 percent. Libraries have the smallest share, at only 8 percent. Overall, roads and public transit together account for 47 percent, so nearly half of the budget goes on moving people and goods around the city.',
  },
  {
    id: 'di-014',
    type: 'describe-image',
    title: 'Three laptops compared',
    difficulty: 2,
    chart: {
      kind: 'table',
      title: 'Three laptops compared for student use (illustrative)',
      columns: ['Model', 'Price (CAD)', 'Battery life (hours)', 'Weight (kg)'],
      rows: [
        ['Lumen 13', 1099, 14, 1.2],
        ['Atlas 14', 849, 9, 1.6],
        ['Nimbus 15', 1449, 7, 2.2],
      ],
    },
    keyPoints: [
      { label: 'Topic', keywords: ['laptop', 'laptops', 'models', 'compare', 'comparison', 'specifications', 'students'] },
      { label: 'Cheapest model', keywords: ['atlas 14', 'atlas', '849'], sameSentence: ['cheapest', 'lowest price', 'least expensive'] },
      { label: 'Longest battery', keywords: ['lumen 13', 'lumen', 'battery', '14 hours', 'fourteen'], sameSentence: ['longest'] },
      { label: 'Heaviest model', keywords: ['nimbus 15', 'nimbus', '2.2'], sameSentence: ['heaviest', 'heavy', 'weight'] },
      { label: 'Trade-off', keywords: ['trade-off', 'trade off', 'balance', 'best balance', 'lightest', 'portable', 'overall'] },
    ],
    modelAnswer:
      'This table compares three laptops on price, battery life and weight, using illustrative figures. The Atlas 14 is the cheapest model at 849 dollars, but its battery lasts only nine hours. The Lumen 13 costs 1,099 dollars, has the longest battery life at fourteen hours and is also the lightest, at 1.2 kilograms. The Nimbus 15 is the most expensive at 1,449 dollars and the heaviest at 2.2 kilograms, with the shortest battery life of seven hours. Overall, the Lumen 13 offers the best balance for students who carry their laptops every day.',
  },
  {
    id: 'di-015',
    type: 'describe-image',
    title: 'Rainwater harvesting',
    difficulty: 1,
    chart: {
      kind: 'process',
      title: 'How a household rainwater harvesting system works (illustrative)',
      steps: [
        'Gutters collect rain from the roof',
        'A leaf screen removes debris',
        'Water flows into a storage tank',
        'A pump sends the water to garden taps',
        'Overflow drains into a soakaway in the ground',
      ],
    },
    keyPoints: [
      { label: 'Topic', keywords: ['rainwater', 'rain water', 'harvesting', 'water collection', 'water system'] },
      { label: 'Sequence', keywords: ['five steps', 'five stages', 'step by step', 'sequence', 'order', 'process'] },
      { label: 'Collection', keywords: ['gutters', 'roof', 'collected', 'collects', 'collection', 'first step'] },
      { label: 'Storage and pumping', keywords: ['storage tank', 'tank', 'pump', 'garden', 'taps', 'stored'] },
      { label: 'Overflow', keywords: ['overflow', 'soakaway', 'drains', 'excess', 'last step', 'ground'] },
    ],
    modelAnswer:
      'This process diagram shows how a household rainwater harvesting system collects and uses rain, based on illustrative stages. There are five steps. Rain runs from the roof into gutters, and a leaf screen then removes debris before the water enters the system. Next, the water flows into a storage tank until it is needed. A pump sends the stored water to garden taps when required. Finally, when the tank is full, any excess drains into a soakaway in the ground. The whole system reduces mains water use and helps limit flooding around the house.',
  },
  {
    id: 'di-016',
    type: 'describe-image',
    title: 'Emergency department waits',
    difficulty: 3,
    chart: {
      kind: 'line',
      title: 'Average emergency department waiting times by triage level (illustrative)',
      unit: 'minutes',
      xLabel: 'Quarter',
      yLabel: 'Average wait (minutes)',
      categories: ['Q1', 'Q2', 'Q3', 'Q4'],
      series: [
        { name: 'Urgent', values: [12, 11, 14, 10] },
        { name: 'Semi-urgent', values: [48, 45, 52, 41] },
        { name: 'Non-urgent', values: [155, 148, 163, 140] },
      ],
    },
    keyPoints: [
      { label: 'Topic', keywords: ['waiting times', 'waiting', 'wait', 'emergency', 'emergency department', 'triage'] },
      { label: 'Urgent cases', keywords: ['urgent', '10', 'ten'], sameSentence: ['shortest', 'lowest', 'quickly'] },
      { label: 'Non-urgent cases', keywords: ['non-urgent', 'non urgent', '163', 'delays'], sameSentence: ['longest', 'highest', 'most'] },
      { label: 'Third quarter peak', keywords: ['q3', 'third quarter', 'all three'], sameSentence: ['peak', 'highest', 'busiest'] },
      { label: 'Fourth quarter and conclusion', keywords: ['q4', 'fourth quarter', 'overall', 'prioritises', 'prioritizes'], sameSentence: ['fell', 'fall', 'drop', 'decline'] },
    ],
    modelAnswer:
      'This line graph shows average waiting times in an emergency department for three triage levels across four quarters, using illustrative figures. Patients with urgent cases are seen very quickly, with waits of between 10 and 14 minutes throughout the year. Semi-urgent patients wait between 41 and 52 minutes. Non-urgent patients wait the longest, at roughly 140 to 163 minutes. All three lines peak in the third quarter and then fall in the fourth quarter. Overall, the department prioritises urgent cases effectively, but non-urgent patients face long delays at busy times.',
  },
  {
    id: 'di-017',
    type: 'describe-image',
    title: 'Student costs in three cities',
    difficulty: 3,
    chart: {
      kind: 'bar',
      title: 'Estimated annual costs for an international student in three cities (illustrative)',
      unit: 'thousand CAD',
      xLabel: 'Cost type',
      yLabel: 'Annual cost',
      categories: ['Tuition', 'Accommodation', 'Food', 'Transport'],
      series: [
        { name: 'Northgate', values: [28, 12, 6, 2] },
        { name: 'Eastmoor', values: [22, 14, 7, 3] },
        { name: 'Lakeview', values: [18, 9, 5, 1] },
      ],
    },
    keyPoints: [
      { label: 'Topic', keywords: ['costs', 'cost', 'international students', 'living costs', 'annual', 'cities'] },
      { label: 'Most expensive city', keywords: ['northgate', '48', 'forty-eight'], sameSentence: ['most expensive', 'highest', 'most'] },
      { label: 'Cheapest city', keywords: ['lakeview', '33', 'thirty-three'], sameSentence: ['cheapest', 'least expensive', 'lowest'] },
      { label: 'Tuition', keywords: ['tuition', '28', '18', 'twenty-eight', 'eighteen'], sameSentence: ['largest', 'biggest'] },
      { label: 'Accommodation and smaller costs', keywords: ['accommodation', 'housing', 'eastmoor', '14', 'fourteen', 'food', 'transport'], sameSentence: ['highest', 'smaller', 'smallest'] },
    ],
    modelAnswer:
      'This bar chart compares estimated annual costs for an international student in three cities, using illustrative figures. Tuition is the largest cost in every city, ranging from 18 thousand dollars in Lakeview to 28 thousand in Northgate. Northgate is the most expensive overall, with a total of 48 thousand dollars, while Lakeview is the cheapest, at 33 thousand. Eastmoor has the highest accommodation cost, at 14 thousand. Food and transport are much smaller items in all three cities. Overall, the choice of city can change a student’s total budget by around fifteen thousand dollars.',
  },
  {
    id: 'di-018',
    type: 'describe-image',
    title: 'Stages of vaccine approval',
    difficulty: 3,
    chart: {
      kind: 'process',
      title: 'Main stages of approving a new vaccine (illustrative)',
      steps: [
        'Researchers identify a target and test candidate ingredients',
        'Animal studies check safety and the immune response',
        'A small human trial checks safety and the right dose',
        'A larger trial compares the vaccine with a placebo',
        'Regulators review all the data before approving it',
      ],
    },
    keyPoints: [
      { label: 'Topic', keywords: ['vaccine', 'vaccines', 'approval', 'trials', 'clinical trials', 'development'] },
      { label: 'Sequence', keywords: ['five stages', 'five steps', 'step by step', 'sequence', 'order', 'process', 'stages'] },
      { label: 'Early testing', keywords: ['laboratory', 'animal', 'animals', 'early', 'first', 'immune response', 'safety'] },
      { label: 'Human trials', keywords: ['small trial', 'larger trial', 'placebo', 'dose', 'dosage', 'human', 'thousands'] },
      { label: 'Final review', keywords: ['regulators', 'regulator', 'approval', 'approve', 'approving', 'final', 'review', 'data'] },
    ],
    modelAnswer:
      'This process diagram shows the main stages of approving a new vaccine, based on illustrative steps. There are five stages, beginning in the laboratory, where researchers identify a target and test candidate ingredients. Animal studies then check safety and the immune response. Next, a small human trial examines safety and the right dose. A larger trial compares the vaccine with a placebo to measure how well it works. Finally, regulators review all the data before approving it. Each stage builds on the previous one, so a vaccine that fails early testing never reaches the public.',
  },

  // ---------- Summarize Group Discussion ----------
  {
    id: 'sgd-006',
    type: 'summarize-group-discussion',
    title: 'Overnight library opening',
    difficulty: 2,
    turns: [
      {
        speaker: 'Dr Adeyemi',
        voice: 'female',
        text: 'Good afternoon. The question today is whether the university library should stay open overnight during the exam period, from midnight until six in the morning. Priya, would you like to begin?',
      },
      {
        speaker: 'Priya',
        voice: 'female',
        text: 'Yes. Many students study late because their part-time jobs finish after ten, and they have nowhere quiet to work at home. An overnight opening would help them, especially international students who share flats with little space to study.',
      },
      {
        speaker: 'Lucas',
        voice: 'male',
        text: 'I understand the need, but I am not convinced. Only a small number of students used the building after midnight last year. Keeping it open means paying for security staff and heating, and those costs would fall on the library budget.',
      },
      {
        speaker: 'Priya',
        voice: 'female',
        text: 'The numbers may be low because the building closes so early. Once students know it is open, more of them would come. A card-access system could let students in safely without a full team of staff on duty.',
      },
      {
        speaker: 'Lucas',
        voice: 'male',
        text: 'Card access sounds sensible. I would still want to know how many staff would be needed to respond to problems, and who would be responsible if someone became unwell in the building at night.',
      },
      {
        speaker: 'Dr Adeyemi',
        voice: 'female',
        text: 'Those are important safety points. One option is a trial over the next two exam periods, with card access, a security patrol and a survey of users afterwards. We could then compare usage and costs.',
      },
      {
        speaker: 'Priya',
        voice: 'female',
        text: 'I would support that. I would also ask that the reading rooms stay open, even if the rest of the building closes at the usual time.',
      },
      {
        speaker: 'Lucas',
        voice: 'male',
        text: 'I can accept a trial if the figures are shared and the budget is clear. Otherwise it is hard to justify the expense.',
      },
      {
        speaker: 'Dr Adeyemi',
        voice: 'female',
        text: 'Let me summarise. We agree that overnight study would help students with work and shared housing, that safety and staffing need careful planning, and that a monitored trial with card access is a sensible next step. Thank you both.',
      },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['library', 'overnight', 'opening', 'open', 'exam period', 'midnight', 'late'] },
      { label: 'Priya supports it', keywords: ['part-time jobs', 'quiet', 'international students', 'study late', 'shared flats', 'help'], speaker: 'Priya' },
      { label: 'Lucas has concerns', keywords: ['cost', 'costs', 'budget', 'security', 'staff', 'expense', 'few students', 'safety'], speaker: 'Lucas' },
      { label: 'Card access and trial', keywords: ['card access', 'card-access', 'trial', 'patrol', 'survey', 'two exam periods'] },
      { label: 'Conclusion', keywords: ['agree', 'agreed', 'sensible', 'planning', 'compare', 'shared housing'] },
    ],
    modelAnswer:
      'The speakers discussed whether the university library should open overnight during the exam period. Priya supports the idea because students with part-time jobs and shared flats need a quiet place to study late, and international students are especially affected. Lucas is concerned about the cost of security and heating, and he notes that few students used the building after midnight last year. Priya suggests card access, which would reduce staffing needs. Dr Adeyemi proposes a monitored trial over two exam periods, with a user survey and a cost comparison. The group agrees that a trial is sensible, provided staffing, safety and the budget are planned carefully.',
  },
  {
    id: 'sgd-007',
    type: 'summarize-group-discussion',
    title: 'Anonymous marking',
    difficulty: 3,
    turns: [
      {
        speaker: 'Dr Ferreira',
        voice: 'male',
        text: 'Welcome. This week we are looking at whether essays should be marked anonymously, with the student’s name hidden from the marker. Ana, perhaps you could start, since you have experience of both systems?',
      },
      {
        speaker: 'Ana',
        voice: 'female',
        text: 'I think anonymous marking is fairer. When markers know a student’s name, they may unconsciously expect more from some students and less from others. Hiding names helps the assessment focus on the argument and the evidence.',
      },
      {
        speaker: 'Sam',
        voice: 'male',
        text: 'I see the fairness point, but I am not sure it works in practice. Many courses use small seminars and regular feedback, so the marker often knows the student already. Anonymity can also be hard to keep when essays are submitted through a portal with a student number.',
      },
      {
        speaker: 'Ana',
        voice: 'female',
        text: 'That is true, but a student number is much less revealing than a name, and most departments already use numbers for exams. The practical problem is that feedback has to reach the right person, which needs a secure process.',
      },
      {
        speaker: 'Sam',
        voice: 'male',
        text: 'Right. Anonymous marking might also make feedback less personal. A tutor who knows a student’s progress can tailor comments, and I would not want to lose that relationship in the first year, when students need the most support.',
      },
      {
        speaker: 'Dr Ferreira',
        voice: 'male',
        text: 'Those are valid points. One option is to anonymise first-year essays only, while keeping named feedback in later years. We could also ask a second marker to check a sample of grades, to confirm that marking is consistent.',
      },
      {
        speaker: 'Ana',
        voice: 'female',
        text: 'I would accept a first-year pilot. I would also ask the department to publish the results, so we can see whether grade gaps between groups actually narrow.',
      },
      {
        speaker: 'Sam',
        voice: 'male',
        text: 'That works for me, as long as the pilot does not delay feedback. Students should still receive comments within the usual timeframe.',
      },
      {
        speaker: 'Dr Ferreira',
        voice: 'male',
        text: 'To summarise, we agree that anonymous marking may reduce bias, that it creates challenges for feedback and small seminars, and that a first-year pilot with a second marker and published data is a sensible next step.',
      },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['anonymous marking', 'anonymous', 'anonymously', 'marking', 'essays', 'names hidden'] },
      { label: 'Ana supports it', keywords: ['fairer', 'fairness', 'bias', 'unconsciously', 'argument', 'evidence', 'focus'], speaker: 'Ana' },
      { label: 'Sam has concerns', keywords: ['seminars', 'feedback', 'personal', 'relationship', 'student number', 'hard to keep', 'tutor'], speaker: 'Sam' },
      { label: 'Pilot and checks', keywords: ['pilot', 'first-year', 'first year', 'second marker', 'sample', 'anonymise', 'anonymize'], speaker: 'Dr Ferreira' },
      { label: 'Conclusion', keywords: ['agree', 'agreed', 'sensible', 'publish', 'published', 'results', 'data'] },
    ],
    modelAnswer:
      'The group discussed whether essays should be marked anonymously, with student names hidden from markers. Ana supports the change, arguing that it reduces unconscious bias and keeps the focus on the argument and evidence. Sam is concerned that small seminars and personal feedback make anonymity hard to keep, and that tutors lose a useful relationship with students. The speakers accept that student numbers can protect identity, but feedback must still reach the right person securely. Dr Ferreira proposes a pilot for first-year essays, with a second marker checking a sample and the results published afterwards. The group agrees that this is a sensible next step.',
  },
  {
    id: 'sgd-008',
    type: 'summarize-group-discussion',
    title: 'Mid-term reading week',
    difficulty: 2,
    turns: [
      {
        speaker: 'Professor Hart',
        voice: 'female',
        text: 'Good morning. The senate has proposed a second reading week in the middle of term, with no lectures or assessments. Jordan, what do you think?',
      },
      {
        speaker: 'Jordan',
        voice: 'male',
        text: 'I welcome it. Our courses are very full, and by week six many of us are behind on reading, lab reports and essays. A second break would give students time to catch up, and it would help those who work part-time to rest.',
      },
      {
        speaker: 'Mei',
        voice: 'female',
        text: 'I am less sure. Two reading weeks mean fewer teaching days, and some modules would have to be compressed into the remaining weeks. Lecturers would have less time to cover content, which could hurt students who need the teaching most.',
      },
      {
        speaker: 'Jordan',
        voice: 'male',
        text: 'Compression is a real concern, but many lectures are already recorded. Fewer contact hours might be acceptable if the recordings are good and office hours are kept.',
      },
      {
        speaker: 'Mei',
        voice: 'female',
        text: 'Recordings do not replace tutorials. Also, international students often pay for the full term and may travel during breaks, so a long gap in the middle of term could make a trip home more expensive.',
      },
      {
        speaker: 'Professor Hart',
        voice: 'female',
        text: 'Both points are valid. A possible compromise is to keep one reading week and add a catch-up week at the end of term, with no new assessments that week. We would also need to check the exam schedule.',
      },
      {
        speaker: 'Jordan',
        voice: 'male',
        text: 'I would accept that. The main aim is to give students space to recover, and a catch-up week at the end of term would do that without shortening the teaching.',
      },
      {
        speaker: 'Mei',
        voice: 'female',
        text: 'Agreed, provided tutorials are not cancelled and the department publishes the revised calendar early, so students can plan their travel.',
      },
      {
        speaker: 'Professor Hart',
        voice: 'female',
        text: 'So the group agrees that students need recovery time, that teaching time should not be squeezed, and that one reading week plus a catch-up week may strike the right balance. I will take this to the senate.',
      },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['reading week', 'break', 'term', 'mid-term', 'second reading', 'catch-up'] },
      { label: 'Jordan supports it', keywords: ['welcome', 'behind', 'catch up', 'rest', 'recover', 'recovery', 'part-time'], speaker: 'Jordan' },
      { label: 'Mei has concerns', keywords: ['fewer teaching', 'compressed', 'tutorials', 'contact hours', 'international', 'travel', 'expensive'], speaker: 'Mei' },
      { label: 'Compromise', keywords: ['catch-up week', 'catch up week', 'compromise', 'one reading week', 'final term', 'end of term', 'instead'], speaker: 'Professor Hart' },
      { label: 'Conclusion', keywords: ['agree', 'agreed', 'calendar', 'balance', 'senate', 'tutorials', 'teaching time'] },
    ],
    modelAnswer:
      'The speakers discussed a proposal for a second reading week in the middle of term. Jordan supports it, arguing that students fall behind on reading, labs and essays by week six, and that a break helps them recover, especially part-time workers. Mei is concerned that fewer teaching days would compress modules and reduce contact time, and that international students may face higher travel costs. Professor Hart suggests keeping one reading week and adding a catch-up week at the end of term with no new assessments. The group agrees that students need recovery time without losing teaching, and that the revised calendar should be published early.',
  },
  {
    id: 'sgd-009',
    type: 'summarize-group-discussion',
    title: 'Podcast instead of an essay',
    difficulty: 3,
    turns: [
      {
        speaker: 'Dr Novak',
        voice: 'female',
        text: 'Good afternoon, everyone. The history department is considering whether one written essay in each second-year module could be replaced by a recorded podcast. Ibrahim, would you like to open the discussion?',
      },
      {
        speaker: 'Ibrahim',
        voice: 'male',
        text: 'I think it is a good idea. Podcasts are how many people now share research beyond academia, and making one teaches students to structure an argument for a listener, not just a marker. It also builds speaking and editing skills that employers value.',
      },
      {
        speaker: 'Chloe',
        voice: 'female',
        text: 'I agree about the skills, but I worry about assessment. It is harder to check referencing in audio, and markers would need to listen to every recording, which takes far longer than reading an essay.',
      },
      {
        speaker: 'Ibrahim',
        voice: 'male',
        text: 'Referencing can be handled with a written script or show notes, submitted alongside the audio. As for marking time, a rubric with timestamps would help, and some departments already use that approach for presentations.',
      },
      {
        speaker: 'Chloe',
        voice: 'female',
        text: 'That is reasonable. However, not every student has recording equipment or a quiet place at home. The university would have to provide studios or loan kits, or the task could disadvantage some students.',
      },
      {
        speaker: 'Dr Novak',
        voice: 'female',
        text: 'That is a serious equity point. Any change would need to guarantee access to recording facilities. I would also like to keep the traditional essay in the final year, so students can show a sustained written argument.',
      },
      {
        speaker: 'Ibrahim',
        voice: 'male',
        text: 'I would accept that. Perhaps the podcast could replace only one of two essays in second year, as a pilot, so that students still write the other one.',
      },
      {
        speaker: 'Chloe',
        voice: 'female',
        text: 'A pilot with equipment provided sounds fair. I would want the rubric and the marking time measured, so we know whether the approach is workable.',
      },
      {
        speaker: 'Dr Novak',
        voice: 'female',
        text: 'To summarise, we agree that podcasts develop valuable communication skills, that equity of access and marking workload must be solved, and that a pilot with a written component kept in the final year is a sensible next step.',
      },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['podcast', 'podcasts', 'recorded', 'audio', 'essay', 'assignment', 'history'] },
      { label: 'Ibrahim supports it', keywords: ['communication', 'speaking', 'skills', 'listener', 'argument', 'editing', 'employers'], speaker: 'Ibrahim' },
      { label: 'Chloe has concerns', keywords: ['referencing', 'marking', 'marker', 'listen', 'equipment', 'access', 'equity', 'disadvantage'], speaker: 'Chloe' },
      { label: 'Proposed safeguards', keywords: ['script', 'show notes', 'rubric', 'timestamps', 'loan', 'studios', 'provide equipment'] },
      { label: 'Conclusion', keywords: ['pilot', 'agree', 'agreed', 'final year', 'choice', 'choosing', 'sensible'] },
    ],
    modelAnswer:
      'The discussion concerned whether a second-year history essay could be replaced by a recorded podcast. Ibrahim supports the idea because it develops speaking, editing and argument skills for a listener, which employers value. Chloe is concerned about referencing, the time needed to mark audio, and students who lack recording equipment or a quiet place to work. Ibrahim suggests submitting a written script with the audio and using a timestamped rubric. Dr Novak adds that access must be guaranteed and that final-year students should still write essays. The group agrees on a pilot in which podcasts replace one of two second-year essays, with equipment provided and marking time measured.',
  },
];
