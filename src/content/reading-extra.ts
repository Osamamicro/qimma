import type { Item } from '@/core';

/** Additional original items (v1 bank growth, 2026-10-18). */
export const readingExtraItems: Item[] = [
  // ---------- Reading & Writing: Fill in the Blanks (rwfib) ----------

  {
    id: 'rwfib-011',
    type: 'rw-fill-blanks',
    title: 'Public libraries',
    difficulty: 1,
    text:
      'Public libraries have changed a great deal in recent decades. Although they still {{1}} thousands of books for loan, many branches now offer computers, study rooms and free internet access. Librarians also {{2}} community programmes such as reading groups and classes for newcomers. Because membership is usually free, libraries are especially {{3}} to families on tight budgets. Some councils have {{4}} opening hours to save money, which has provoked protests from regular users. Nevertheless, many residents still regard the library as the heart of their neighbourhood.',
    blanks: [
      { options: ['hold', 'holds', 'holding', 'holder'], answer: 'hold' },
      { options: ['run', 'runs', 'ran', 'running'], answer: 'run' },
      { options: ['valuable', 'value', 'valuables', 'valuing'], answer: 'valuable' },
      { options: ['reduced', 'reduce', 'reducing', 'reduction'], answer: 'reduced' },
    ],
  },
  {
    id: 'rwfib-012',
    type: 'rw-fill-blanks',
    title: 'Earthquake-resistant buildings',
    difficulty: 1,
    text:
      'Earthquakes cannot be prevented, but engineers can reduce the damage they cause. In regions prone to seismic activity, buildings are often designed with flexible frames that {{1}} with the shaking rather than resist it rigidly. Foundations may rest on rubber bearings that can {{2}} ground movement before it reaches the structure. Older buildings can be strengthened by adding steel braces or by {{3}} their walls with reinforced materials. Building codes in many countries now {{4}} these measures for all new homes and offices.',
    blanks: [
      { options: ['sway', 'sways', 'swayed', 'swaying'], answer: 'sway' },
      { options: ['absorb', 'absorbed', 'absorbing', 'absorbs'], answer: 'absorb' },
      { options: ['wrapping', 'wrap', 'wrapped', 'wraps'], answer: 'wrapping' },
      { options: ['require', 'requires', 'required', 'requiring'], answer: 'require' },
    ],
  },
  {
    id: 'rwfib-013',
    type: 'rw-fill-blanks',
    title: 'Antibiotic resistance',
    difficulty: 2,
    text:
      'Antibiotics have saved countless lives since their discovery, but their effectiveness is now under threat. When bacteria are exposed to a drug, those that survive can pass on genetic traits that may {{1}} their descendants to resist treatment. Over time, the overuse of antibiotics in medicine and farming has allowed resistant strains to {{2}}. Hospitals have responded by {{3}} stricter hygiene rules and by testing patients before prescribing a drug. Developing a single new antibiotic can take well over a decade, and the work is {{4}} for many small firms.',
    blanks: [
      { options: ['enable', 'enables', 'enabled', 'enabling'], answer: 'enable' },
      { options: ['spread', 'spreads', 'spreading', 'spreader'], answer: 'spread' },
      { options: ['introducing', 'introduce', 'introduced', 'introduces'], answer: 'introducing' },
      { options: ['costly', 'cost', 'costing', 'costs'], answer: 'costly' },
    ],
  },
  {
    id: 'rwfib-014',
    type: 'rw-fill-blanks',
    title: 'Bilingual children',
    difficulty: 2,
    text:
      'Children who grow up speaking two languages often begin to use each one in different settings. A child may speak one language at home and another at school, and this division is entirely normal. Research suggests that bilingual children may {{1}} certain skills, such as switching quickly between tasks, earlier than monolingual peers. However, early vocabulary in each language can be smaller than average, because the child has {{2}} fewer opportunities to hear each word. Parents who wish to support both languages are advised to {{3}} regular conversations and reading time in each one. Teachers, too, can {{4}} bilingual pupils by recognising the strengths they bring to the classroom.',
    blanks: [
      { options: ['develop', 'developed', 'developing', 'developer'], answer: 'develop' },
      { options: ['had', 'having', 'have', 'has'], answer: 'had' },
      { options: ['schedule', 'scheduled', 'scheduling', 'schedules'], answer: 'schedule' },
      { options: ['support', 'supports', 'supported', 'supporting'], answer: 'support' },
    ],
  },
  {
    id: 'rwfib-015',
    type: 'rw-fill-blanks',
    title: 'Cuneiform writing',
    difficulty: 2,
    text:
      'Cuneiform is one of the earliest writing systems, developed in Mesopotamia more than five thousand years ago. Scribes pressed wedge-shaped marks into soft clay tablets, which were then left to dry in the sun or fired in kilns. Because clay is durable, thousands of tablets have {{1}} to the present day, and they record everything from grain harvests to legal contracts. Early cuneiform used pictographs, but over time the signs became more abstract and {{2}} to represent sounds as well as ideas. Learning the script was a demanding task, so only a small number of people {{3}} to read and write. Scholars today {{4}} these tablets to reconstruct the economic and religious life of ancient cities.',
    blanks: [
      { options: ['survived', 'survive', 'surviving', 'survival'], answer: 'survived' },
      { options: ['began', 'begin', 'begun', 'beginning'], answer: 'began' },
      { options: ['learned', 'learn', 'learning', 'learns'], answer: 'learned' },
      { options: ['study', 'studies', 'studied', 'studying'], answer: 'study' },
    ],
  },
  {
    id: 'rwfib-016',
    type: 'rw-fill-blanks',
    title: 'Quantum computing',
    difficulty: 3,
    text:
      'Quantum computers differ from conventional machines in the way they store information. A classical bit is either zero or one, whereas a quantum bit, or qubit, can exist in a combination of both states until it is measured. This property, known as superposition, allows a quantum computer to explore many possibilities at once, although the results are {{1}} by measurement and must be interpreted carefully. Entanglement is another feature that {{2}} qubits to behave in ways that have no classical equivalent. Engineers face serious obstacles, because qubits are easily disturbed by heat and vibration, and this {{3}} errors into calculations. For this reason, most experts do not expect quantum machines to {{4}} laptops or servers for everyday tasks in the near future.',
    blanks: [
      { options: ['revealed', 'reveal', 'revealing', 'reveals'], answer: 'revealed' },
      { options: ['allows', 'allow', 'allowed', 'allowing'], answer: 'allows' },
      { options: ['introduces', 'introduce', 'introduced', 'introducing'], answer: 'introduces' },
      { options: ['replace', 'replaces', 'replaced', 'replacing'], answer: 'replace' },
    ],
  },
  {
    id: 'rwfib-017',
    type: 'rw-fill-blanks',
    title: 'Coral reef bleaching',
    difficulty: 3,
    text:
      'Coral reefs depend on a partnership between coral animals and tiny algae that live within their tissues. The algae supply sugars produced through photosynthesis, and in return they receive shelter and nutrients. When water temperatures rise beyond a certain threshold, however, the corals expel their algae, {{1}} the reef a bleached white appearance. A bleached coral is not necessarily dead, since it can recover if conditions improve. Repeated episodes, though, often {{2}} the corals too weak to recover. Scientists are studying whether some corals are more {{3}} to heat, and whether they might be bred or transplanted to help reefs survive. Such efforts are unlikely to succeed {{4}} greenhouse gas emissions are reduced.',
    blanks: [
      { options: ['giving', 'give', 'given', 'gives'], answer: 'giving' },
      { options: ['render', 'renders', 'rendered', 'rendering'], answer: 'render' },
      { options: ['resistant', 'resistance', 'resist', 'resisting'], answer: 'resistant' },
      { options: ['unless', 'because', 'although', 'while'], answer: 'unless' },
    ],
  },
  {
    id: 'rwfib-018',
    type: 'rw-fill-blanks',
    title: 'Underwater archaeology',
    difficulty: 3,
    text:
      'Underwater archaeology has revealed the remains of ships, harbours and entire settlements that were once on dry land. Many sites were submerged as sea levels rose at the end of the last Ice Age, and others were lost in storms or shipwrecks. Divers and remote vehicles are often used to {{1}} sites with sonar and magnetometers before any excavation begins. Because cold, low-oxygen water often {{2}} organic materials such as wood and textiles, underwater sites can yield objects that rarely survive on land. Each recovered artefact must be carefully {{3}} to prevent the rapid drying and cracking that often damages waterlogged finds. Museums that display these discoveries {{4}} the difficulty of the work, as well as the stories the objects tell.',
    blanks: [
      { options: ['survey', 'surveys', 'surveyed', 'surveying'], answer: 'survey' },
      { options: ['preserves', 'preserve', 'preserved', 'preserving'], answer: 'preserves' },
      { options: ['conserved', 'conserve', 'conserving', 'conserves'], answer: 'conserved' },
      { options: ['highlight', 'highlights', 'highlighted', 'highlighting'], answer: 'highlight' },
    ],
  },

  // ---------- Reading: Multiple Choice, Multiple Answers (rmcm) ----------

  {
    id: 'rmcm-007',
    type: 'reading-mcma',
    title: 'Noise pollution in cities',
    difficulty: 2,
    passage:
      'Noise pollution is often treated as an annoyance, yet long-term exposure to loud sounds can affect health in serious ways. Traffic, construction and nightlife are among the most common sources in urban areas. Because the human ear adapts quickly to constant sound, many residents underestimate how much noise they are exposed to each day.\n\nResearch has linked sustained road noise to higher blood pressure and disturbed sleep. In some studies, children attending schools beside busy motorways have shown slower progress in reading, possibly because background noise makes it harder to concentrate. Night-time noise is considered especially harmful, since even moderate sounds can cause people to wake briefly without remembering it.\n\nCities have responded with a range of measures. Quieter road surfaces, noise barriers and restrictions on night deliveries have all been introduced in different places, and some planners design buildings so that bedrooms face away from main roads. Such measures can be costly, however, and their effects are easier to measure for traffic than for social noise such as crowds or music.',
    question: 'Which of the following statements are supported by the passage? Select all that apply.',
    options: [
      { id: 'a', text: 'The human ear tends to adjust to constant noise, so residents may not notice how much they are exposed to.' },
      { id: 'b', text: 'Long-term exposure to loud sounds is harmless unless it causes permanent hearing loss.' },
      { id: 'c', text: 'Some studies have linked sustained road noise to higher blood pressure.' },
      { id: 'd', text: 'Even moderate sounds at night can wake people without their remembering it.' },
      { id: 'e', text: 'Schools near busy motorways always achieve better reading results than other schools.' },
      { id: 'f', text: 'Most cities have banned all traffic from residential streets at night.' },
      { id: 'g', text: 'Noise from crowds and music is easier to measure than noise from traffic.' },
    ],
    answers: ['a', 'c', 'd'],
  },
  {
    id: 'rmcm-008',
    type: 'reading-mcma',
    title: 'Sign languages',
    difficulty: 2,
    passage:
      'Sign languages are complete languages with their own grammar, vocabulary and regional variation. They are not simply gestures that mirror spoken words, and they use the hands, face and body together to convey meaning. Deaf communities in different countries typically use different sign languages, so a British signer may not understand an American signer without learning the other language.\n\nFor much of the twentieth century, sign languages were discouraged in many schools, where deaf pupils were expected to learn speech and lip-reading instead. Such policies often isolated children from one another and delayed their acquisition of language. Over time, educators have come to recognise the value of bilingual approaches, in which sign language is used alongside the written form of the spoken language.\n\nRecent technology has added new opportunities. Video calls allow signers to communicate over long distances, and online dictionaries help learners find signs that were once difficult to access. Nevertheless, automatic translation between sign and spoken languages remains difficult, because the meaning of a sign often depends on facial expression and the position of the body in space.',
    question: 'Which of the following statements are supported by the passage? Select all that apply.',
    options: [
      { id: 'a', text: 'Sign languages are sets of hand gestures that copy spoken words one for one.' },
      { id: 'b', text: 'Deaf communities in different countries often use different sign languages.' },
      { id: 'c', text: 'Many schools once discouraged the use of sign language.' },
      { id: 'd', text: 'Video calls allow signers to communicate across long distances.' },
      { id: 'e', text: 'Automatic translation between sign and spoken languages is now completely reliable.' },
      { id: 'f', text: 'Facial expression plays no part in the meaning of most signs.' },
      { id: 'g', text: 'Bilingual approaches in schools have been abandoned because they proved ineffective.' },
    ],
    answers: ['b', 'c', 'd'],
  },
  {
    id: 'rmcm-009',
    type: 'reading-mcma',
    title: 'Digitising archives',
    difficulty: 3,
    passage:
      'Libraries and national archives hold millions of documents, many of them fragile and rarely consulted. Digitisation promises to make these collections accessible to anyone with an internet connection, and it also reduces the handling that can damage original papers. The process, however, is far from simple, since each item must be photographed or scanned at a suitable resolution and then described with accurate metadata.\n\nOne difficulty is cost. Large projects can take decades and require specialist staff, equipment and secure storage for files that may run to many terabytes. Institutions often rely on grants, and funding for scanning may not cover the long-term maintenance of digital copies. Without regular migration to new formats, files can become unreadable as software changes.\n\nDigitisation can also raise questions about interpretation. Search tools may favour documents with clear typefaces, while handwritten letters or damaged pages remain hard to find. Some historians therefore argue that digital copies should supplement rather than replace the original objects, which can reveal details such as paper quality, marginal notes and the pressure of a pen.',
    question: 'Which of the following statements are supported by the passage? Select all that apply.',
    options: [
      { id: 'a', text: 'Digitisation removes the need for anyone to handle original documents.' },
      { id: 'b', text: 'Digitisation reduces the amount of handling that fragile originals receive.' },
      { id: 'c', text: 'Funding for scanning always covers the long-term maintenance of digital copies.' },
      { id: 'd', text: 'Digital files may become unreadable if they are not moved to newer formats.' },
      { id: 'e', text: 'Search tools find handwritten letters as easily as typed documents.' },
      { id: 'f', text: 'Some historians believe digital copies can fully replace the original objects.' },
      { id: 'g', text: 'Original objects can reveal details such as marginal notes and paper quality.' },
    ],
    answers: ['b', 'd', 'g'],
  },

  // ---------- Re-order Paragraphs (ro). Array order is the correct order; ids are shuffled. ----------

  {
    id: 'ro-009',
    type: 'reorder-paragraphs',
    title: 'The development of the postal system',
    difficulty: 2,
    paragraphs: [
      {
        id: 'd',
        text: 'Before organised postal systems existed, letters were carried by messengers who travelled on foot, on horseback or by ship. Sending a message was slow and expensive, and most people relied on travellers who happened to be heading in the right direction.',
      },
      {
        id: 'b',
        text: 'Governments soon saw the value of a reliable network. Rulers used couriers to send orders across their territories, and some empires built relay stations where riders could change horses. These early services were usually reserved for officials and merchants, not ordinary citizens.',
      },
      {
        id: 'e',
        text: 'The idea of a public service open to everyone emerged gradually. In the seventeenth and eighteenth centuries, several European countries opened their royal posts to the public, although fees still depended on distance and were often paid by the person receiving the letter.',
      },
      {
        id: 'a',
        text: 'The introduction of prepaid stamps and uniform rates in the nineteenth century transformed the system further. Because the sender paid a single price in advance, the cost no longer depended on the distance a letter travelled, and the volume of post increased dramatically.',
      },
      {
        id: 'c',
        text: 'Today, postal services are adapting to competition from email and parcel firms. Many now combine letters with banking, insurance and logistics, which helps them remain relevant in a changing market.',
      },
    ],
  },

  // ---------- Reading: Fill in the Blanks (rfib). Word bank = answers + distractors. ----------

  {
    id: 'rfib-011',
    type: 'reading-fill-blanks',
    title: 'Monarch butterflies',
    difficulty: 1,
    text:
      'Monarch butterflies are famous for their long migrations across North America. Each autumn, millions of them {{1}} south towards forests in central Mexico, where they spend the winter in clusters on trees. In spring, the surviving butterflies begin the journey north again, but it is often later generations who {{2}} the final destination. Scientists attach tiny tags to butterflies to {{3}} their routes. Loss of milkweed, the only plant on which monarch caterpillars depend, has {{4}} the population in recent years.',
    answers: ['fly', 'reach', 'track', 'reduced'],
    distractors: ['ignore', 'hatch', 'swim'],
  },
  {
    id: 'rfib-012',
    type: 'reading-fill-blanks',
    title: 'Early telescopes',
    difficulty: 2,
    text:
      'The invention of the telescope in the early seventeenth century changed astronomy. Early instruments were crude, with small lenses that {{1}} the image and made stars look blurred. Nevertheless, Galileo used one to {{2}} the moons of Jupiter, a discovery that challenged the idea that everything in the sky revolved around the Earth. Later designers {{3}} the lenses by grinding them with greater precision, which allowed observers to see fainter objects. Because telescopes gathered more light than the naked eye, they also {{4}} astronomers to study distant galaxies that had never been visible before. Today, telescopes in space are able to {{5}} images free from the distortion of the atmosphere.',
    answers: ['distorted', 'observe', 'improved', 'enabled', 'capture'],
    distractors: ['ignore', 'dismiss', 'melt'],
  },
  {
    id: 'rfib-013',
    type: 'reading-fill-blanks',
    title: 'Food labels',
    difficulty: 1,
    text:
      'Food labels provide shoppers with useful information about what they are buying. The list of ingredients {{1}} in order of weight, with the largest component appearing first. Nutrition panels show the amount of energy, fat, sugar and salt in each portion, which helps people {{2}} their own choices. Some countries also use traffic-light colours so that shoppers can {{3}} at a glance whether a product contains high levels of a nutrient. Manufacturers are required to {{4}} allergens clearly, because even small amounts can be dangerous for some people. Consumers who read labels carefully often find that similar products can differ {{5}} in their nutritional value.',
    answers: ['appears', 'make', 'see', 'highlight', 'widely'],
    distractors: ['conceal', 'reverse', 'hardly'],
  },
  {
    id: 'rfib-014',
    type: 'reading-fill-blanks',
    title: 'Microfinance',
    difficulty: 3,
    text:
      'Microfinance refers to small loans and savings services offered to people who cannot obtain credit from conventional banks. The idea gained wide attention after it was {{1}} in Bangladesh in the 1970s, when a lending scheme for villagers showed that poor borrowers could repay small sums. Supporters argue that such loans allow households to {{2}} small businesses, buy equipment or pay for schooling. Critics, however, point out that high interest rates can {{3}} borrowers in debt, particularly when a loan is taken out for consumption rather than investment. Recent research on the subject has been {{4}}, with some studies finding modest gains and others finding little change. Most experts agree that the services work best when they are {{5}} with training and other forms of support.',
    answers: ['pioneered', 'launch', 'trap', 'mixed', 'combined'],
    distractors: ['abandoned', 'inherited', 'dismissed'],
  },
  {
    id: 'rfib-015',
    type: 'reading-fill-blanks',
    title: 'Permafrost',
    difficulty: 2,
    text:
      'Permafrost is ground that remains frozen for at least two consecutive years. It covers a large share of the land in the Arctic and in high mountain regions, and it often contains vast quantities of organic carbon. As global temperatures rise, the upper layers of permafrost begin to {{1}}, which can cause the ground to become unstable. Buildings, roads and pipelines built on permafrost may {{2}} or crack as the ice melts. Thawing soil also gives microbes the chance to {{3}} organic matter, producing carbon dioxide and methane. Scientists use boreholes and satellite data to {{4}} how quickly these changes are occurring. Some engineers now design structures that {{5}} the frozen ground rather than disturb it.',
    answers: ['thaw', 'sink', 'decompose', 'monitor', 'preserve'],
    distractors: ['freeze', 'harden', 'exhaust'],
  },

  // ---------- Reading: Multiple Choice, Single Answer (rmcs) ----------

  {
    id: 'rmcs-009',
    type: 'reading-mcsa',
    title: 'Hedgerows on farmland',
    difficulty: 2,
    passage:
      'Hedgerows, the lines of shrubs and trees that divide fields in many parts of Europe, were once common features of the countryside. Over the twentieth century, many were removed to create larger fields that could be worked more efficiently by machinery. The loss of hedgerows has coincided with a decline in farmland birds, insects and small mammals that depended on them for shelter and food.\n\nHedgerows serve several useful purposes beyond wildlife. Their roots help to hold soil in place, which reduces erosion after heavy rain, and they can slow the movement of wind across open ground. Some farmers also use hedgerows to provide shade for livestock. Because a well-managed hedge is cut only every few years, it can provide berries and nesting sites for much of the year.',
    question: 'According to the passage, why were many hedgerows removed during the twentieth century?',
    options: [
      { id: 'a', text: 'Their roots were found to damage the soil beneath neighbouring fields.' },
      { id: 'b', text: 'Farmers wanted larger fields that machinery could work more efficiently.' },
      { id: 'c', text: 'Governments banned hedgerows because they sheltered crop pests.' },
      { id: 'd', text: 'Livestock were no longer kept on farms that had hedgerows.' },
    ],
    answer: 'b',
  },
];
