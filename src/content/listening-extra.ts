import type { Item } from '@/core';

/** Additional original items (v1 bank growth, 2026-10-18). */
export const listeningExtraItems: Item[] = [
  // ---------- Listening: Multiple Choice, Multiple Answers (LMCM) ----------
  {
    id: 'lmcm-007',
    type: 'listening-mcma',
    title: 'Mangrove coastlines',
    difficulty: 2,
    voice: 'female',
    script:
      'Mangrove forests grow along tropical and subtropical coastlines, where salt water and fresh water meet. Their tangled roots stand in the mud at high tide and trap sediment, so the land gradually builds up over time. This makes mangroves one of the most effective natural barriers against storm surges. During a cyclone, the dense root systems slow down the waves and reduce the height of water that reaches inland villages. Mangroves also provide a nursery for many fish and crustaceans. Young fish shelter among the roots before moving out to the open reef as adults, so local fishing depends on healthy forests. Scientists estimate that mangrove soils store large quantities of carbon, sometimes more per hectare than tropical rainforests. Despite these benefits, many mangrove areas have been cleared for shrimp farms, roads and housing. Some countries now restore lost forests by planting seedlings where the tide flows freely. Restoration is slow, however, and a replanted forest may take decades to offer the same protection as a mature one.',
    question: 'Which statements about mangrove forests are supported by the talk?',
    options: [
      { id: 'a', text: 'Mangrove roots help trap sediment, so the land can gradually build up.' },
      { id: 'b', text: 'Mangroves grow mainly along cold northern coastlines.' },
      { id: 'c', text: 'Young fish use the roots as shelter before they move to the open reef.' },
      { id: 'd', text: 'Mangrove soils never store more carbon than tropical rainforests do.' },
      { id: 'e', text: 'A replanted forest gives full protection as soon as the seedlings are in the ground.' },
      { id: 'f', text: 'Many mangrove areas have been cleared for shrimp farms and housing.' },
    ],
    answers: ['a', 'c', 'f'],
  },
  {
    id: 'lmcm-008',
    type: 'listening-mcma',
    title: 'Placebo effect',
    difficulty: 3,
    voice: 'male',
    script:
      'In clinical trials, the placebo effect is both a nuisance and a source of insight. A placebo is an inactive treatment, such as a sugar pill or a saline injection, yet many patients report genuine improvements after taking one. Part of this response reflects expectation. When people believe they are receiving an effective treatment, they often pay closer attention to their symptoms and describe them as milder. Researchers have also measured physical changes, including the release of natural pain-relieving chemicals in the brain. For this reason, new drugs are usually tested against a placebo rather than against no treatment at all. Blinding is essential. If patients or clinicians know who is receiving the active drug, their expectations can distort the results. Double-blind studies, in which neither the patients nor the clinicians know the allocation, reduce this risk. The placebo effect does not mean that patients are imagining their symptoms. It is a reminder that the experience of illness involves both mind and body.',
    question: 'Which statements about the placebo effect are correct, according to the lecture?',
    options: [
      { id: 'a', text: 'Drug trials usually compare a new drug with no treatment at all.' },
      { id: 'b', text: 'A placebo is an inactive treatment that can still produce reported improvements.' },
      { id: 'c', text: 'In double-blind studies, participants know which group they belong to.' },
      { id: 'd', text: 'Expectation may lead patients to describe their symptoms as milder.' },
      { id: 'e', text: 'The placebo effect proves that patients are imagining their symptoms.' },
      { id: 'f', text: 'Some patients taking placebos show measurable chemical changes in the brain.' },
    ],
    answers: ['b', 'd', 'f'],
  },
  {
    id: 'lmcm-009',
    type: 'listening-mcma',
    title: 'Volcano monitoring',
    difficulty: 2,
    voice: 'female',
    script:
      "Volcanologists at the observatory use several instruments to judge whether a volcano is becoming more dangerous. Seismometers record small earthquakes, because rising magma often cracks the surrounding rock before an eruption. A sudden increase in the number of tremors is therefore one of the earliest warnings. Gas sensors are equally important. Magma releases sulphur dioxide and carbon dioxide, and a shift in the ratio between these gases can indicate that fresh magma is moving closer to the surface. Ground deformation is measured with GPS receivers and satellite radar, which can detect the swelling of a volcano's flanks by a few centimetres. Thermal cameras show changes in the temperature of crater lakes and new lava flows. Scientists combine these data in real time, but they stress that no single signal is decisive. Many volcanoes show unrest that never ends in an eruption, so the observatory issues alert levels rather than exact predictions. Evacuation decisions depend on the alert level, the population nearby and the likely path of ash and lava.",
    question: 'Which statements about volcano monitoring are supported by the talk?',
    options: [
      { id: 'a', text: 'Every period of unrest is followed by an eruption.' },
      { id: 'b', text: 'Satellite radar can detect volcanic swelling only after lava has reached the surface.' },
      { id: 'c', text: 'Rising magma can crack the surrounding rock and produce small earthquakes.' },
      { id: 'd', text: 'Thermal cameras can show changes in the temperature of crater lakes.' },
      { id: 'e', text: 'Observatories can predict the exact date of each eruption.' },
      { id: 'f', text: 'A change in the ratio of volcanic gases may show that magma is moving upwards.' },
    ],
    answers: ['c', 'd', 'f'],
  },

  // ---------- Listening: Fill in the Blanks (LFIB) ----------
  {
    id: 'lfib-009',
    type: 'listening-fill-blanks',
    title: 'Sourdough starter',
    difficulty: 2,
    voice: 'male',
    transcript:
      'Sourdough bread is raised by a starter, a mixture of flour and water that contains wild yeasts and {{1}} acid bacteria. Over several days, the starter is fed regularly until the mixture becomes bubbly and {{2}}. The bacteria produce acids that give the loaf its characteristic tang, while the yeasts release gas, which makes the dough rise. Because the process is slow, the flavour of the bread {{3}} with the length of fermentation. Bakers often adjust the temperature of the dough to control the pace, since warm conditions speed activity up and cool conditions {{4}} it. A well-maintained starter can last for decades, and many families pass theirs {{5}} to the next generation.',
    answers: ['lactic', 'active', 'deepens', 'slow', 'down'],
  },

  // ---------- Highlight Correct Summary (HCS) ----------
  {
    id: 'hcs-007',
    type: 'highlight-correct-summary',
    title: 'Microplastics in rivers',
    difficulty: 2,
    exams: ['pte-academic'],
    script:
      'Microplastics are fragments of plastic smaller than five millimetres, and they are now found in almost every river that has been sampled. Some originate as larger items that break down over time, such as bottles and packaging. Others are released directly, for example from synthetic clothing, which sheds tiny fibres during every wash. Rivers carry these particles downstream, and many accumulate in sediment on the riverbed, where small organisms feed on them. Researchers have found that concentrations are highest near cities and wastewater treatment works, although some particles travel far from their source. The long-term consequences for freshwater ecosystems are still being studied. Early laboratory experiments suggest that microplastics can affect feeding and growth in some invertebrates, but field evidence is limited. Monitoring efforts are therefore focusing on standard sampling methods, so that results from different rivers can be compared.',
    options: [
      {
        id: 'a',
        text: 'Microplastics are particles larger than five millimetres, and they mostly settle near river mouths, where they pose no risk to aquatic organisms.',
      },
      {
        id: 'b',
        text: 'Synthetic clothing is not a significant source of microplastics, which come almost entirely from broken bottles and packaging that rivers carry out to sea.',
      },
      {
        id: 'c',
        text: 'Microplastics enter rivers both as broken-down larger items and as direct releases, such as fibres from synthetic clothing. They build up in sediment, and their effects on freshwater life are still being studied.',
      },
      {
        id: 'd',
        text: 'Laboratory studies have proven that microplastics kill most freshwater invertebrates, so monitoring is no longer needed and standard sampling methods are considered unimportant.',
      },
    ],
    answer: 'c',
  },
  {
    id: 'hcs-008',
    type: 'highlight-correct-summary',
    title: 'Bilingual children',
    difficulty: 3,
    exams: ['pte-academic'],
    script:
      'Over the past few decades, researchers have examined whether growing up with two languages affects cognitive development. Early studies claimed a broad advantage in attention and problem solving, but later work has been more cautious. A bilingual child constantly chooses which language to use, and must suppress the one that is not needed in a given conversation. Some researchers argue that this practice strengthens the control of attention, a skill often called executive function. However, the size of the effect varies widely between studies. Socioeconomic status, the age at which the second language is learned and the amount of daily exposure all seem to matter. Several large reviews have found that bilingual children do not consistently outperform monolingual peers on standard tests. The most defensible conclusion is that bilingualism is valuable for communication, identity and cultural access, whatever its effect on cognition.',
    options: [
      {
        id: 'a',
        text: 'Bilingual children must choose and suppress one language when they switch, which may strengthen attention control. The size of this effect varies between studies and is not consistent across tests.',
      },
      {
        id: 'b',
        text: 'Bilingual children reliably outperform monolingual peers on every attention test, so schools should prioritise second-language teaching for cognitive gains. Family background and age of learning are irrelevant.',
      },
      {
        id: 'c',
        text: 'Large reviews have confirmed the early claims, showing the same cognitive benefit for every child regardless of background, so the case for bilingualism on cognitive grounds is settled.',
      },
      {
        id: 'd',
        text: 'Bilingualism is useful only for cultural identity, because switching between languages weakens attention and reduces problem-solving ability in children who learn a second language.',
      },
    ],
    answer: 'a',
  },
  {
    id: 'hcs-009',
    type: 'highlight-correct-summary',
    title: 'Citizen science',
    difficulty: 2,
    exams: ['pte-academic'],
    script:
      'Citizen science projects invite members of the public to collect or analyse data for research. In one common type of project, volunteers classify images of galaxies, plankton or handwritten records from archives, tasks that would take professional teams years to complete. The quality of volunteer data has often been questioned, but studies show that when several people classify the same image and the results are combined, accuracy can match that of experts. Projects also benefit participants, who gain scientific skills and a sense of contribution. However, organisers must design tasks carefully, provide clear training and explain how results will be used. Without this, volunteers may lose interest, and datasets may contain biases, for example when popular locations are sampled far more often than remote ones. Well-run projects treat volunteers as partners rather than as free labour.',
    options: [
      {
        id: 'a',
        text: 'Citizen science gives volunteers no real benefit, so projects that do not pay participants are unlikely to attract anyone and should be avoided.',
      },
      {
        id: 'b',
        text: 'Organisers do not need to train volunteers, since data quality depends only on the number of participants and not on how the tasks are designed.',
      },
      {
        id: 'c',
        text: 'Citizen science data is rarely useful, because volunteers cannot classify images reliably, so projects should be run entirely by professional teams to avoid errors.',
      },
      {
        id: 'd',
        text: 'When several volunteers classify the same item, combined answers can approach expert accuracy, and well-designed projects also teach participants useful scientific skills.',
      },
    ],
    answer: 'd',
  },

  // ---------- Listening: Multiple Choice, Single Answer (LMCS) ----------
  {
    id: 'lmcs-007',
    type: 'listening-mcsa',
    title: 'Cloud seeding',
    difficulty: 2,
    voice: 'male',
    script:
      'Cloud seeding is a weather modification technique intended to increase rainfall or snowfall from clouds that already contain moisture. Aircraft or ground generators release tiny particles, most commonly silver iodide, into the cloud. These particles act as nuclei around which water vapour can condense and freeze into ice crystals. Once the crystals grow heavy enough, they fall as precipitation. The technique works best on clouds that are supercooled but not yet producing rain. Evaluating its success is difficult, because it is impossible to know exactly how much rain would have fallen without seeding. Many studies have reported modest gains, typically around ten percent, although results vary with climate and season. Some regions use the method to support water supplies for farms and hydroelectric dams.',
    question: 'What is the main purpose of the particles released during cloud seeding?',
    options: [
      { id: 'a', text: 'To disperse the cloud so that it cannot produce rain.' },
      { id: 'b', text: 'To heat the air so that moisture evaporates more quickly.' },
      { id: 'c', text: 'To give water vapour a surface on which it can condense and freeze.' },
      { id: 'd', text: 'To measure the exact amount of rain that falls in a region.' },
    ],
    answer: 'c',
  },
  {
    id: 'lmcs-008',
    type: 'listening-mcsa',
    title: 'Winter tyres',
    difficulty: 1,
    voice: 'female',
    exams: ['pte-core'],
    script:
      "Hello, this is a reminder from the city's transport department about winter tyres. The city recommends that drivers who use their car in winter fit winter tyres by the first of December. These tyres have deeper treads and softer rubber, which grip the road better in snow and in cold temperatures. Summer tyres lose grip quickly in the cold, so keeping them on through the winter is not safe. Drivers who need new tyres should book an appointment early, because garages become busy in November. Old tyres can be taken to the recycling depot on Mill Road, free of charge, on Saturdays.",
    question: 'What does the city recommend to drivers?',
    options: [
      { id: 'a', text: 'Keep summer tyres on the car through the winter months.' },
      { id: 'b', text: 'Wait until December before booking a garage appointment.' },
      { id: 'c', text: 'Take old tyres to the recycling depot on weekday mornings.' },
      { id: 'd', text: 'Fit winter tyres by the first of December.' },
    ],
    answer: 'd',
  },
  {
    id: 'lmcs-009',
    type: 'listening-mcsa',
    title: 'Bird navigation',
    difficulty: 3,
    voice: 'male',
    script:
      "Migrating birds can navigate thousands of kilometres with remarkable accuracy, and researchers have long asked how they sense direction. One leading hypothesis involves magnetoreception, the ability to detect the Earth's magnetic field. In some species, light-sensitive proteins in the eye may undergo chemical reactions that are influenced by the magnetic field, allowing birds to perceive its direction as a visual pattern. Experiments with migratory birds have shown that they become disoriented when the field is artificially altered, but they recover when the normal field is restored. Other clues, such as the position of the sun and the pattern of the stars, also help birds to orient. Current research suggests that birds combine several cues rather than relying on a single compass. Scientists therefore describe the system as a multisensory map rather than a simple needle.",
    question: 'According to the lecture, which description best explains how migratory birds find their way?',
    options: [
      { id: 'a', text: 'They follow a single internal compass that always points north.' },
      { id: 'b', text: 'They combine several cues, including magnetic and celestial information.' },
      { id: 'c', text: 'They cannot detect the Earth\'s magnetic field, so they rely mainly on smell.' },
      { id: 'd', text: 'They follow the scent trails left by earlier migrants.' },
    ],
    answer: 'b',
  },

  // ---------- Highlight Incorrect Words (HIW) ----------
  {
    id: 'hiw-009',
    type: 'highlight-incorrect-words',
    title: 'Tsunami warnings',
    difficulty: 2,
    voice: 'female',
    text:
      'Tsunami warning centres detect earthquakes beneath the ocean floor, then estimate whether the resulting waves could reach the coast. Sensors on the seabed record changes in [air|water] pressure, which confirm that a large wave has formed. Warnings are usually issued within [twenty|ten] minutes of the earthquake, so that coastal residents have time to move to higher ground. Because waves travel across the open ocean at great speed, a distant tsunami may arrive [minutes|hours] later. Recent systems also send alerts directly to mobile phones, which helps people act quickly when sirens are not audible.',
  },
];
