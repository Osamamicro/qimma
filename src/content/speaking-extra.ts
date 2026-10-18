import type { Item } from '@/core';

/** Additional original items (v1 bank growth, 2026-10-18). */
export const speakingExtraItems: Item[] = [
  // ---------- Read Aloud ----------
  {
    id: 'ra-016',
    type: 'read-aloud',
    title: 'Marine protected areas',
    difficulty: 2,
    text: 'Marine protected areas are sections of the ocean where fishing, drilling and other activities are limited or banned. The aim is to give fish stocks and coral reefs time to recover. Many large fish grow more numerous inside well-managed reserves, and some drift out to nearby fisheries. Critics argue that some zones are too small, or exist only on paper without proper enforcement.',
  },
  {
    id: 'ra-017',
    type: 'read-aloud',
    title: 'Bilingual children',
    difficulty: 1,
    text: 'Children who grow up speaking two languages at home often develop strong skills in both. Researchers have found that bilingual pupils sometimes switch more easily between tasks, although the size of this advantage is debated. Parents should not worry that learning a second language will delay speech. Most children who hear two languages from an early age catch up with their peers.',
  },
  {
    id: 'ra-018',
    type: 'read-aloud',
    title: 'The history of tea',
    difficulty: 1,
    text: 'According to legend, tea was first drunk in China thousands of years ago. Over the centuries it spread to Japan and Central Asia, where it became part of daily hospitality. European merchants began importing tea in the seventeenth century, and by the eighteenth century it had become a common habit in Britain. Today tea is one of the most widely consumed drinks in the world.',
  },
  {
    id: 'ra-019',
    type: 'read-aloud',
    title: 'Ageing populations and pensions',
    difficulty: 3,
    text: 'Many developed countries face a demographic shift as birth rates fall and life expectancy rises. Fewer workers are now supporting a growing number of retired people, which places pressure on public pension systems. Governments have responded by raising the retirement age, encouraging private savings and attracting skilled migrants. Economists disagree about which mix of measures is most sustainable, because productivity and health costs are uncertain.',
  },
  {
    id: 'ra-020',
    type: 'read-aloud',
    title: 'Light pollution',
    difficulty: 2,
    text: 'Light pollution is excessive or misdirected artificial light that brightens the night sky. Streetlights and floodlights that shine upwards waste energy and make it harder for astronomers to observe stars. Ecologists have also found that artificial light disrupts the feeding and migration patterns of many insects and birds. Many towns now use shielded fixtures and dimmer bulbs, which reduce glare while keeping streets safe.',
  },
  {
    id: 'ra-021',
    type: 'read-aloud',
    title: 'Gravitational waves',
    difficulty: 3,
    text: 'In 2015, scientists at the LIGO observatories detected gravitational waves for the first time. These ripples in spacetime were produced when two black holes collided more than a billion light years away. Albert Einstein had predicted their existence a century earlier, in his general theory of relativity. Because the signals are extremely faint, the detectors use laser beams in long vacuum tubes to measure tiny changes in distance.',
  },

  // ---------- Repeat Sentence ----------
  {
    id: 'rs-021',
    type: 'repeat-sentence',
    title: 'Cafeteria hours',
    difficulty: 1,
    sentence: 'The cafeteria closes at four o’clock on Friday afternoons.',
  },
  {
    id: 'rs-022',
    type: 'repeat-sentence',
    title: 'Portal deadline',
    difficulty: 1,
    sentence: 'Please upload your assignment to the online portal before midnight on Sunday.',
  },
  {
    id: 'rs-023',
    type: 'repeat-sentence',
    title: 'Winter forecast',
    difficulty: 1,
    exams: ['pte-core'],
    sentence: 'Please bring your winter boots, because the forecast shows heavy snow in Calgary tomorrow.',
  },
  {
    id: 'rs-024',
    type: 'repeat-sentence',
    title: 'Meeting point',
    difficulty: 1,
    sentence: 'I think we should meet at the library entrance after the lecture.',
  },
  {
    id: 'rs-025',
    type: 'repeat-sentence',
    title: 'Safety course',
    difficulty: 2,
    sentence: 'The laboratory safety course is compulsory for all first-year chemistry students.',
  },
  {
    id: 'rs-026',
    type: 'repeat-sentence',
    title: 'Soil bacteria',
    difficulty: 2,
    sentence: 'Her research focuses on soil bacteria that help plants absorb nitrogen.',
  },
  {
    id: 'rs-027',
    type: 'repeat-sentence',
    title: 'Ethics forms',
    difficulty: 2,
    sentence: 'The department has extended the deadline for research ethics forms by one week.',
  },
  {
    id: 'rs-028',
    type: 'repeat-sentence',
    title: 'Mobile payments',
    difficulty: 2,
    sentence: 'Many shoppers now prefer to pay with their phones rather than with cash.',
  },
  {
    id: 'rs-029',
    type: 'repeat-sentence',
    title: 'Skate park funding',
    difficulty: 2,
    sentence: 'The city council approved funding for a new skate park near the river.',
  },
  {
    id: 'rs-030',
    type: 'repeat-sentence',
    title: 'Median question',
    difficulty: 2,
    sentence: 'Could you explain how to calculate the median of this dataset?',
  },
  {
    id: 'rs-031',
    type: 'repeat-sentence',
    title: 'Trade unions',
    difficulty: 3,
    sentence: 'Historians have reconsidered the role of trade unions in shaping modern labour law.',
  },
  {
    id: 'rs-032',
    type: 'repeat-sentence',
    title: 'Controlled conditions',
    difficulty: 3,
    sentence: 'Unless the experiment is repeated under controlled conditions, the conclusions will remain tentative.',
  },
  {
    id: 'rs-033',
    type: 'repeat-sentence',
    title: 'Proposed tax',
    difficulty: 3,
    sentence: 'The proposed tax would apply only to companies with annual revenues above ten million dollars.',
  },
  {
    id: 'rs-034',
    type: 'repeat-sentence',
    title: 'Nursing shortage',
    difficulty: 3,
    sentence: 'Despite rising demand, the number of qualified nurses has not kept pace with population growth.',
  },
  {
    id: 'rs-035',
    type: 'repeat-sentence',
    title: 'Central banks',
    difficulty: 3,
    sentence: 'Economists disagree about whether central banks should target inflation or employment.',
  },
  {
    id: 'rs-036',
    type: 'repeat-sentence',
    title: 'Volunteer training',
    difficulty: 3,
    sentence: 'Volunteers who had completed the training were allowed to supervise the younger students.',
  },

  // ---------- Re-tell Lecture ----------
  {
    id: 'rl-007',
    type: 'retell-lecture',
    title: 'Plate tectonics',
    difficulty: 1,
    voice: 'female',
    lecture:
      'Good morning. Today we will look at plate tectonics, the theory that Earth’s outer shell is divided into large slabs called plates. These plates float on a softer layer beneath them and move very slowly, usually only a few centimetres each year. There are three main types of boundary. At diverging boundaries, plates pull apart and new crust forms, as happens along the mid-Atlantic ridge. At converging boundaries, plates collide. When one plate slides beneath another, it creates deep ocean trenches and volcanoes. At transform boundaries, plates slide past each other horizontally, and this movement often causes earthquakes, as in California. The theory explains where most earthquakes and volcanoes occur. It also helps geologists understand why similar fossils are found on continents that are now far apart.',
    keyPoints: [
      { label: 'Topic', keywords: ['plate tectonics', 'tectonic', 'tectonics', 'plates', 'outer shell'] },
      { label: 'Boundary types', keywords: ['diverging', 'converging', 'transform', 'boundaries', 'boundary'] },
      { label: 'Earthquakes and volcanoes', keywords: ['earthquakes', 'earthquake', 'volcanoes', 'volcanic', 'trenches'] },
      { label: 'Evidence from fossils', keywords: ['fossils', 'fossil', 'continents', 'far apart', 'evidence'] },
    ],
    modelAnswer:
      'The lecture was about plate tectonics, the theory that Earth’s outer layer is split into large moving plates. The speaker described three types of boundary. Where plates pull apart, new crust forms, while converging plates create trenches and volcanoes. Transform boundaries, where plates slide past each other, often cause earthquakes. The theory also explains why similar fossils appear on continents that are now far apart.',
  },
  {
    id: 'rl-008',
    type: 'retell-lecture',
    title: 'Microfinance in practice',
    difficulty: 2,
    voice: 'male',
    lecture:
      'In today’s development economics lecture, we will discuss microfinance, the provision of very small loans to people who cannot borrow from ordinary banks. Microfinance became widely known in Bangladesh in the 1970s, when a lending programme gave small sums to women who wanted to start businesses. Borrowers typically use the money to buy livestock, sewing machines or stock for a market stall. Supporters argue that these loans help families raise their incomes and build savings. Critics, however, point out that interest rates can be very high, and that some borrowers take on debt they struggle to repay. Some researchers also question whether microloans really lift families out of poverty, since the evidence is mixed. Many modern programmes therefore combine loans with training in budgeting and business skills, which appears to improve outcomes. To conclude, microfinance is a useful tool, but not a complete solution to poverty.',
    keyPoints: [
      { label: 'Topic', keywords: ['microfinance', 'small loans', 'microloans', 'microcredit', 'loans'] },
      { label: 'Borrowers and uses', keywords: ['women', 'livestock', 'sewing machines', 'market stall', 'businesses', 'stock'] },
      { label: 'Benefits', keywords: ['incomes', 'income', 'savings', 'save', 'raise', 'families'] },
      { label: 'Criticisms', keywords: ['interest rates', 'high interest', 'debt', 'repay', 'mixed', 'critics'] },
      { label: 'Training', keywords: ['training', 'budgeting', 'business skills', 'skills'] },
    ],
    modelAnswer:
      'The lecture was about microfinance, which provides very small loans to people who cannot access ordinary banks. The speaker explained that it became known in Bangladesh and helps borrowers buy equipment or stock for small businesses. Supporters say it raises incomes and encourages saving, but critics warn of high interest rates and debt. The evidence on poverty reduction is mixed, so many programmes now add training in budgeting and business skills.',
  },
  {
    id: 'rl-009',
    type: 'retell-lecture',
    title: 'Deep-sea mining',
    difficulty: 3,
    voice: 'female',
    exams: ['pte-academic'],
    lecture:
      'Good afternoon. Today’s lecture concerns deep-sea mining, which means extracting minerals from the ocean floor. The main targets are polymetallic nodules, potato-sized lumps that lie on the abyssal plains and contain manganese, nickel, cobalt and copper. Demand for these metals is growing because they are used in batteries and electronics. Proponents argue that seabed mining could produce metals with a smaller land footprint than many terrestrial mines, and that it might avoid some of the human rights problems associated with certain mines on land. However, scientists warn that the deep sea is poorly understood. Many species there grow slowly and reproduce rarely, so a damaged community may take decades to recover. Mining machines also stir up sediment, which can smother filter feeders and drift far from the original site. Because of these uncertainties, several countries have called for a precautionary pause until environmental impacts can be studied more thoroughly.',
    keyPoints: [
      { label: 'Topic', keywords: ['deep-sea mining', 'deep sea mining', 'seabed', 'ocean floor', 'mining'] },
      { label: 'Target minerals', keywords: ['nodules', 'manganese', 'nickel', 'cobalt', 'copper', 'minerals', 'metals'] },
      { label: 'Arguments for mining', keywords: ['land footprint', 'smaller', 'proponents', 'argue', 'human rights'] },
      { label: 'Environmental risks', keywords: ['sediment', 'slowly', 'recover', 'decades', 'species', 'damaged', 'damage'] },
      { label: 'Call for caution', keywords: ['precautionary', 'pause', 'moratorium', 'studied', 'uncertainties'] },
    ],
    modelAnswer:
      'The lecture was about deep-sea mining, which extracts minerals such as manganese, nickel and cobalt from nodules on the ocean floor. The speaker said demand for these metals is rising because of batteries and electronics, and that seabed mining may have a smaller land footprint. However, deep-sea species grow and reproduce slowly, so damage could take decades to recover, and sediment clouds can spread widely. For these reasons, several countries have called for a precautionary pause.',
  },
];
