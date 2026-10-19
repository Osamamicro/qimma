import type { Item } from '@/core';

/** v0.2 bank growth to 1,000 items (backlog item 7). Original content only (ADR-002). */
export const listeningBankBItems: Item[] = [
  // ---------- Listening: Fill in the Blanks (LFIB) ----------
  {
    id: 'lfib-010',
    type: 'listening-fill-blanks',
    title: 'Prescription refills',
    difficulty: 1,
    exams: ['pte-core'],
    voice: 'female',
    transcript:
      'Thank you for calling Riverside Pharmacy. If you need a refill, please call us at least {{1}} days before your medicine runs out, so that the pharmacist has time to check the prescription. You can also request refills through our online {{2}}. Please have your health card number ready, because we need it to {{3}} your identity. Refills are usually ready within two hours, but they may take longer on {{4}}, when the pharmacy is busy. If your doctor has not {{5}} the prescription, we cannot release the medicine, so please contact the clinic first.',
    answers: ['three', 'portal', 'confirm', 'saturdays', 'renewed'],
  },
  {
    id: 'lfib-011',
    type: 'listening-fill-blanks',
    title: 'Lighthouse automation',
    difficulty: 1,
    voice: 'male',
    transcript:
      'Lighthouses once needed keepers who lit the lamp every night and wound the clockwork that turned the {{1}}. Today most lights are controlled automatically, using sensors that switch the lamp on when the {{2}} falls below a certain level. Automation saved money, but it also removed a traditional job from many coastal communities. Some lighthouses have been preserved as {{3}} sites, and volunteers now guide visitors through the towers in summer. Modern navigation relies on satellites and {{4}} systems, so a lighthouse is no longer essential for ships. However, many sailors still value the light as a {{5}} landmark when they approach an unfamiliar harbour.',
    answers: ['lens', 'daylight', 'heritage', 'radio', 'reliable'],
  },
  {
    id: 'lfib-012',
    type: 'listening-fill-blanks',
    title: 'Vertical farming',
    difficulty: 2,
    voice: 'female',
    transcript:
      'Vertical farms grow crops in stacked layers inside warehouses, rather than in open fields. Plants receive light from {{1}} lamps, and their roots are supplied with nutrients dissolved in water, a method known as {{2}}. Because the system is enclosed, growers can control temperature and humidity precisely, and they can harvest the same crop many times a year. The main challenge is energy. Lighting and climate control consume large amounts of {{3}}, so the cost of power often decides whether a farm is profitable. Some operators therefore use renewable sources, and others focus on {{4}} crops such as herbs and salad leaves, which sell at high prices. Supporters argue that growing food close to the buyer cuts transport {{5}}.',
    answers: ['artificial', 'hydroponics', 'electricity', 'leafy', 'emissions'],
  },
  {
    id: 'lfib-013',
    type: 'listening-fill-blanks',
    title: 'Bridge inspection',
    difficulty: 2,
    voice: 'male',
    transcript:
      'Bridges are inspected at regular intervals to make sure they remain safe for traffic. Engineers begin with a visual check, looking for cracks in the concrete, corrosion on steel cables and signs of {{1}} around the supports. Where damage is suspected, specialists may use ultrasonic equipment to measure the thickness of the metal or the depth of a crack. If a bridge is judged {{2}}, the authority may restrict heavy vehicles or close a lane. Inspection reports are stored in a central {{3}}, so that every repair can be tracked over time. Good maintenance extends the life of a bridge considerably, and it costs far less than a major {{4}}. Inspectors also check drainage, because water that stays on the deck can speed up corrosion and weaken the {{5}}.',
    answers: ['erosion', 'unsafe', 'database', 'replacement', 'structure'],
  },
  {
    id: 'lfib-014',
    type: 'listening-fill-blanks',
    title: 'Language revitalisation',
    difficulty: 3,
    voice: 'female',
    transcript:
      'Language revitalisation aims to bring back languages that children no longer speak at home. Communities often begin by recording elders, who hold vocabulary and stories that were never written down. These recordings become teaching {{1}} for schools and language nests, where young children learn through play and daily routines. Adults also take classes, although they usually need many years of practice before they can hold a full conversation. Technology can help, through apps, dictionaries and online {{2}}, but experts stress that fluency depends on people using the language with one another. Government funding is important, yet many programmes rely on the commitment of {{3}} volunteers. Success is measured not only by the number of speakers, but also by whether the language is used in {{4}} settings, such as courts, shops and family gatherings. Revitalisation is, in the end, a {{5}} effort that depends on sustained community life.',
    answers: ['materials', 'forums', 'dedicated', 'everyday', 'collective'],
  },
  {
    id: 'lfib-015',
    type: 'listening-fill-blanks',
    title: 'Rainwater barrels',
    difficulty: 1,
    exams: ['pte-core'],
    voice: 'female',
    transcript:
      'Many households now collect rainwater in barrels connected to the gutters of their roofs. The water can be used for watering vegetables, washing the car or filling a {{1}} pond. It is important to keep the barrel covered, because an open container can attract mosquitoes and encourage {{2}}. Before using the water on food crops, check local advice, since rainwater may contain small amounts of dust and {{3}}. Some cities offer a discount on water bills to residents who install a collection {{4}}. Collecting rainwater reduces the demand on municipal supplies, especially during dry {{5}}.',
    answers: ['garden', 'algae', 'pollen', 'system', 'summers'],
  },
  {
    id: 'lfib-016',
    type: 'listening-fill-blanks',
    title: 'Textile conservation',
    difficulty: 2,
    voice: 'male',
    transcript:
      'Conservators who work on historic textiles must balance the need to display objects with the need to protect them. Light is especially harmful, because it causes dyes to fade and fibres to become {{1}}. For this reason, delicate garments are kept in low light and displayed for only a few months at a time. Humidity must also be controlled. If the air is too dry, silk and wool may crack, while damp conditions encourage mould and insect {{2}}. Before any cleaning, the conservator records the object in detail, including its {{3}} and any previous repairs. Stitches that are holding the fabric together are never removed without {{4}}, and any new support must be reversible. The aim is to preserve the object for future {{5}}, not simply to restore it to a new appearance.',
    answers: ['brittle', 'damage', 'condition', 'approval', 'study'],
  },
  {
    id: 'lfib-017',
    type: 'listening-fill-blanks',
    title: 'Snow clearing bylaw',
    difficulty: 1,
    exams: ['pte-core'],
    voice: 'female',
    transcript:
      'The city reminds residents that sidewalks must be cleared of snow within {{1}} hours after the snow stops falling. Property owners are responsible for the sidewalk in front of their home or business, and they should not push snow into the {{2}}, because it can block drains and make the road less safe. Snow piled by the curb should be placed so that it does not cover a fire {{3}} or a bus stop. Residents who are older or have a disability may ask the city for {{4}}, and volunteers will help where possible. Violations may result in a {{5}} fine. Thank you for helping keep our streets safe this winter.',
    answers: ['twelve', 'street', 'hydrant', 'assistance', 'penalty'],
  },
  {
    id: 'lfib-018',
    type: 'listening-fill-blanks',
    title: 'Sleep and memory',
    difficulty: 2,
    voice: 'female',
    transcript:
      'Sleep plays an important role in how the brain consolidates memories. During deep sleep, the brain replays patterns of activity from the day, which helps to strengthen connections between {{1}} neurons. Studies of students have shown that those who sleep after learning a list of words recall more of them the following morning than students who stay awake. Sleep also supports the {{2}} of emotional experiences, so that upsetting events feel less overwhelming the next day. Chronic sleep loss, however, impairs attention and makes it harder to {{3}} new information. Researchers recommend a consistent bedtime and a dark, cool bedroom, because these habits help the body {{4}} its natural rhythm. Short naps can offer a {{5}} boost in alertness, especially when they last about twenty minutes.',
    answers: ['nearby', 'processing', 'absorb', 'maintain', 'mental'],
  },
  {
    id: 'lfib-019',
    type: 'listening-fill-blanks',
    title: 'Hearing aids',
    difficulty: 2,
    voice: 'male',
    transcript:
      'Modern hearing aids are far more sophisticated than the devices of earlier decades. Most contain small digital processors that can separate speech from background {{1}}, such as traffic or a busy restaurant. Many models can also connect wirelessly to smartphones, so users can stream calls and music directly into their {{2}}. Fitting is equally important. An audiologist measures the level of hearing loss at each frequency, then programs the device to amplify sounds without making them {{3}}. Some people find that the device takes several weeks to feel comfortable, because the brain must {{4}} sounds it has not heard clearly for a long time. Regular cleaning and battery {{5}} keep the aid working reliably.',
    answers: ['noise', 'ears', 'uncomfortable', 'relearn', 'changes'],
  },
  {
    id: 'lfib-020',
    type: 'listening-fill-blanks',
    title: 'Electric vehicle charging',
    difficulty: 3,
    voice: 'female',
    transcript:
      'Charging an electric vehicle at home is usually the most convenient option, but the speed depends on the power of the charger and the capacity of the household {{1}}. A standard socket delivers a slow trickle, while a dedicated wall unit can refill most batteries overnight. Public fast chargers are much more powerful, yet they are typically priced by the kilowatt hour and may be {{2}} at peak times. Planners face a difficult problem. Installing enough chargers in older apartment blocks often requires expensive upgrades to the local {{3}} network, and residents without a private parking space may have no access at all. Some cities now require new buildings to include {{4}} points, and others offer grants to help owners. Experts expect demand to keep {{5}} as more drivers switch to electric models.',
    answers: ['circuit', 'busy', 'grid', 'charging', 'rising'],
  },
  {
    id: 'lfib-021',
    type: 'listening-fill-blanks',
    title: 'Tool library',
    difficulty: 1,
    exams: ['pte-core'],
    voice: 'female',
    transcript:
      'Welcome to the Eastview Tool Library. Members can borrow power drills, ladders, garden tools and many other items for up to {{1}} days. Membership is free for residents, and you only need a valid library card and a short {{2}} about the safe use of equipment. Please return tools clean and in the same condition, or you may be asked to pay for {{3}}. Some items, such as the table saw, can be used only in our workshop, where a trained volunteer is always {{4}}. The library is open on Wednesday evenings and every {{5}} morning.',
    answers: ['seven', 'orientation', 'repairs', 'present', 'saturday'],
  },
  {
    id: 'lfib-022',
    type: 'listening-fill-blanks',
    title: 'Oral history',
    difficulty: 2,
    voice: 'male',
    transcript:
      'Oral history is a method of recording the memories of people who lived through events that were rarely documented in writing. Before an interview, researchers prepare a list of open questions, but they avoid {{1}} the speaker with fixed answers. Recordings are made with a high-quality microphone, and the interviewer later creates a transcript that is checked against the audio. Because memory is {{2}}, historians compare personal accounts with newspapers and official records. Interviewers must also obtain informed {{3}} before the material is archived, and they explain how it will be used. Many archives now make recordings available {{4}}, so that families, students and local historians can listen to them. The result is a richer picture of everyday life, which formal documents often {{5}}.',
    answers: ['restricting', 'selective', 'consent', 'online', 'overlook'],
  },
  {
    id: 'lfib-023',
    type: 'listening-fill-blanks',
    title: 'Electronic waste',
    difficulty: 2,
    voice: 'female',
    transcript:
      'Electronic waste is one of the fastest growing waste streams in the world. Old phones, laptops and televisions contain valuable metals such as copper and gold, but they also include toxic substances, such as lead and mercury, that can leak into soil and water if they are {{1}} in landfill. Many countries require manufacturers to fund collection schemes. At recycling centres, workers first remove the batteries, then shred the remaining parts so that metals can be {{2}} magnetically and chemically. Repair is an even better option, because it keeps products in use for longer. Some organisations refurbish donated computers and send them to schools, which reduces the need to {{3}} new equipment. Consumers can help by {{4}} their devices to a licensed collector rather than putting them in the household bin. Better design, which makes batteries easier to replace, also helps to {{5}} waste.',
    answers: ['dumped', 'separated', 'manufacture', 'returning', 'reduce'],
  },
  {
    id: 'lfib-024',
    type: 'listening-fill-blanks',
    title: 'Wildfire smoke',
    difficulty: 3,
    voice: 'male',
    transcript:
      'Wildfire smoke can travel hundreds of kilometres, carrying fine particles that penetrate deep into the lungs. Public health agencies issue air quality statements based on measurements of particulate matter, which are reported as a single {{1}} called the air quality index. When readings are high, residents are advised to keep windows closed and to use portable air cleaners fitted with high-efficiency filters. Masks reduce exposure, but only if they fit {{2}} and filter very small particles. People with asthma, heart disease or other {{3}} conditions should take extra care, and they should keep prescribed medication close at hand. Schools may move activities indoors or cancel outdoor sports, and employers may {{4}} shifts to reduce time spent outside. Forecasters use satellite images and wind models to predict where the smoke will {{5}}, but these predictions can change quickly as winds shift.',
    answers: ['number', 'properly', 'chronic', 'reschedule', 'drift'],
  },
  {
    id: 'lfib-025',
    type: 'listening-fill-blanks',
    title: 'Kiln firing',
    difficulty: 2,
    voice: 'female',
    transcript:
      'Pottery is shaped from clay, then dried slowly to avoid cracks before it is fired in a kiln. The first firing, known as the bisque firing, hardens the clay and makes it {{1}} enough to handle. Glaze is applied afterwards and then fired at a much higher temperature, where it melts into a glass-like {{2}}. Potters must control the rate at which the kiln heats, because rapid changes can cause the piece to {{3}}. Some artists fire their work in wood-burning kilns, where ash from the fuel lands on the surface and creates {{4}} patterns. Every firing is a gamble, so experienced potters keep detailed records of temperature, timing and {{5}}, and they learn from every batch.',
    answers: ['strong', 'coating', 'shatter', 'natural', 'atmosphere'],
  },
  {
    id: 'lfib-026',
    type: 'listening-fill-blanks',
    title: 'Transit fare card',
    difficulty: 1,
    exams: ['pte-core'],
    voice: 'female',
    transcript:
      'Transit riders can load money onto a reloadable card at any station kiosk or {{1}} app. Single fares are valid for two hours, so you can transfer to another bus without paying {{2}}. Seniors and students may be eligible for a {{3}} rate, and proof of age or enrolment is required. If your card is lost, report it at once so that the remaining balance can be {{4}}. Cards cannot be shared between passengers, and inspectors may {{5}} them at random. For more information, visit our website or call the customer service line.',
    answers: ['mobile', 'again', 'discounted', 'blocked', 'check'],
  },
  {
    id: 'lfib-027',
    type: 'listening-fill-blanks',
    title: 'Forensic entomology',
    difficulty: 2,
    voice: 'male',
    transcript:
      'Forensic entomologists study insects found on a body to estimate the time of death. Different species arrive at a body in a predictable sequence, and the speed of their {{1}} depends on temperature. By measuring the length of larvae and identifying the species, the scientist can estimate how long the insects have been {{2}}. Weather records from the location are essential, because a hot afternoon accelerates development while a cold night slows it. Insects can also reveal whether a body has been {{3}} after death. Expert evidence must be presented carefully in court, and the analyst must explain the assumptions behind each {{4}}. Forensic work requires patience and {{5}} laboratory practice, since small errors can change the conclusion.',
    answers: ['development', 'developing', 'moved', 'estimate', 'meticulous'],
  },
  {
    id: 'lfib-028',
    type: 'listening-fill-blanks',
    title: 'Coffee roasting',
    difficulty: 2,
    voice: 'female',
    transcript:
      'Coffee roasting transforms green beans into the aromatic brown beans that are sold in shops. During roasting, the beans absorb heat, and sugars and amino acids react to produce new flavour {{1}}. The roaster listens for the first crack, a popping sound that signals the beans have reached a light roast. Dark roasts are taken further, and they often taste more {{2}}, with notes of chocolate or smoke. Roasters must also keep the drum at a steady temperature, because even small variations can {{3}} the flavour of a batch. After roasting, the beans release carbon dioxide, so they are usually rested for a day or two before being {{4}}. Freshly roasted coffee is best enjoyed within a few weeks, since its oils oxidise and the aroma gradually {{5}}.',
    answers: ['compounds', 'bitter', 'alter', 'ground', 'fades'],
  },
  {
    id: 'lfib-029',
    type: 'listening-fill-blanks',
    title: 'Apprenticeship programs',
    difficulty: 3,
    voice: 'male',
    transcript:
      'Apprenticeships combine paid employment with formal training, allowing young people to learn a skilled trade while earning an income. Typically, an apprentice spends most of the week on the job, working alongside an experienced journeyperson, and attends college for a few weeks each year. Employers benefit from {{1}} instruction that matches their own equipment and standards. However, apprentices must be {{2}} enough to keep a logbook of hours and pass practical assessments before receiving their certificate. Trades such as electrical work, plumbing and carpentry have {{3}} shortages of workers, so demand for trained staff remains strong. Governments often offer grants to encourage businesses to {{4}} apprentices, and some regions also reward those who finish their program. Critics argue that the quality of training varies widely between {{5}}, which is why independent inspection is important.',
    answers: ['tailored', 'disciplined', 'persistent', 'hire', 'programs'],
  },
  {
    id: 'lfib-030',
    type: 'listening-fill-blanks',
    title: 'Hydrothermal vents',
    difficulty: 3,
    voice: 'male',
    transcript:
      'Hydrothermal vents form where seawater seeps into the ocean crust, is heated by magma, and returns to the sea laden with dissolved minerals. The minerals precipitate on contact with cold water, building chimneys that can rise several metres above the seabed. Remarkably, these vents support dense communities of animals that do not depend on sunlight. Instead, bacteria {{1}} chemicals such as hydrogen sulphide and use the energy to produce organic matter, a process called chemosynthesis. Giant tube worms, clams and shrimp live in partnership with these microbes, which are their main {{2}}. Because the habitats are {{3}}, many species appear nowhere else on Earth. Mining companies have shown interest in the mineral deposits around vents, but scientists warn that extraction could {{4}} fragile ecosystems that take centuries to recover. Protecting these sites requires careful {{5}} and international cooperation.',
    answers: ['oxidise', 'food', 'isolated', 'damage', 'regulation'],
  },
  {
    id: 'lfib-031',
    type: 'listening-fill-blanks',
    title: 'Farmers market',
    difficulty: 1,
    exams: ['pte-core'],
    voice: 'female',
    transcript:
      'The Harbour Farmers Market opens every Sunday from May to October. Vendors sell fresh vegetables, eggs and baked goods, and many of them accept {{1}} cards as well as cash. Please bring your own {{2}} bags to reduce waste. Dogs are welcome, but they must be kept on a leash at all times. Parking is limited, so visitors are encouraged to walk, cycle or take the {{3}}. If you are {{4}} in renting a stall, let the organiser know by the end of April. The market closes early on the last Sunday of October, so please plan your {{5}} accordingly.',
    answers: ['debit', 'reusable', 'bus', 'interested', 'visit'],
  },
  {
    id: 'lfib-032',
    type: 'listening-fill-blanks',
    title: 'Citizen bird count',
    difficulty: 2,
    voice: 'female',
    transcript:
      'Citizen science projects allow volunteers to contribute real data to research. In a winter bird count, participants spend one hour recording every species they see from their garden or local {{1}}. Records are uploaded to an online database, where scientists can compare numbers across years. Because the observers are not {{2}}, the project provides clear identification guides and training. Data from thousands of volunteers can reveal {{3}} in bird populations, such as the decline of a common species or the arrival of a new migrant. Organisers check unusual sightings before publishing them, so that errors do not {{4}} the results. Many participants say the greatest reward is the chance to {{5}} nature more closely.',
    answers: ['park', 'professional', 'trends', 'distort', 'observe'],
  },
  {
    id: 'lfib-033',
    type: 'listening-fill-blanks',
    title: 'Patent basics',
    difficulty: 3,
    voice: 'male',
    transcript:
      'A patent gives an inventor the exclusive right to make and sell an invention for a limited period, usually twenty years from the filing date. To qualify, the invention must be new, must involve an inventive step and must be capable of industrial {{1}}. Applicants describe the invention in a detailed document, which examiners compare with earlier work in the field, known as prior {{2}}. Patents encourage investment in research, because companies can recover their costs without fearing immediate copying. Critics, however, argue that broad patents can {{3}} competition and slow the spread of medicines. Some countries allow {{4}} licences, which permit other manufacturers to produce a product in exchange for a fee. Lawyers therefore advise inventors to weigh the benefits of protection against the cost of {{5}} their rights in court.',
    answers: ['application', 'art', 'stifle', 'compulsory', 'enforcing'],
  },
  {
    id: 'lfib-034',
    type: 'listening-fill-blanks',
    title: 'Solar eclipse',
    difficulty: 2,
    voice: 'female',
    transcript:
      'A total solar eclipse occurs when the Moon passes directly between the Earth and the Sun, blocking the sun\'s disc completely for a short time. The shadow of the Moon, called the umbra, sweeps across a narrow {{1}} of the planet. Outside this band, observers see only a partial eclipse. Viewers must never look at the sun without proper eye protection, because even a partially covered sun can cause serious {{2}} damage. Special glasses that meet an international safety standard are safe to use, but ordinary sunglasses are not. During totality, the sky grows dark, temperatures drop and birds may fall {{3}}. Scientists use eclipses to study the solar {{4}}, the bright outer atmosphere that is normally hidden. Future eclipses will be visible from some regions, so travellers often plan their trips well in {{5}}.',
    answers: ['path', 'eye', 'silent', 'corona', 'advance'],
  },
  {
    id: 'lfib-035',
    type: 'listening-fill-blanks',
    title: 'Glass recycling',
    difficulty: 2,
    voice: 'male',
    transcript:
      'Glass is one of the few materials that can be recycled again and again without losing quality. Collected bottles are sorted by colour, because mixing green and clear glass reduces the value of the batch. The glass is then crushed into small pieces called cullet, which melts at a lower temperature than raw materials such as sand, saving {{1}} energy. Contaminants like bottle caps and paper labels must be removed, since they can {{2}} the finished product. Some municipalities still send glass to landfill because collection is expensive, yet recycling can {{3}} the need for new raw materials. Manufacturers that use recycled cullet also reduce their {{4}}, which lowers emissions from the furnace. Residents can help by rinsing containers and placing them in the correct {{5}} bin.',
    answers: ['considerable', 'contaminate', 'reduce', 'footprint', 'recycling'],
  },

  // ---------- Highlight Incorrect Words (HIW) ----------
  {
    id: 'hiw-010',
    type: 'highlight-incorrect-words',
    title: 'Ferry timetable',
    difficulty: 1,
    voice: 'female',
    text:
      'Attention passengers on the Harbour Island ferry. The first sailing today will leave at [six|seven] thirty in the morning. Because of strong winds, the afternoon service has been [cancelled|delayed] until further notice. Please arrive at least fifteen minutes before departure, since vehicles must be loaded [early|quickly]. Dogs are permitted on the upper deck, but they must remain on a lead at all times. Thank you for your patience, and we apologise for any inconvenience this may cause.',
  },
  {
    id: 'hiw-011',
    type: 'highlight-incorrect-words',
    title: 'Honeybee colony',
    difficulty: 2,
    voice: 'male',
    text:
      'A healthy honeybee colony can contain up to sixty thousand workers during the [winter|summer]. Each worker performs different tasks as she ages, beginning with cleaning cells and feeding larvae before moving on to guard duty and foraging. Scouts that discover a rich source of nectar perform a waggle dance, which tells nearby bees the direction and [duration|distance] of the flowers. Beekeepers inspect hives regularly to check for [disease|parasites] and to make sure the queen is laying eggs. Honey is stored in wax combs, where it is sealed to prevent it from absorbing moisture and spoiling over time.',
  },
  {
    id: 'hiw-012',
    type: 'highlight-incorrect-words',
    title: 'Marathon training',
    difficulty: 2,
    voice: 'female',
    text:
      'Marathon training usually lasts between sixteen and twenty weeks. Most plans gradually increase weekly mileage, with one long run each [weekend|week] that builds endurance. Experienced runners also include easy recovery days, because muscles adapt during rest rather than during exercise. Tempo sessions at a [comfortable|challenging] pace help the body clear lactic acid more efficiently. Hydration and nutrition should be practised during long runs, so that the stomach is prepared for race day. Many coaches recommend tapering in the final two weeks, which allows the body to [rest|recover] fully before the start.',
  },
  {
    id: 'hiw-013',
    type: 'highlight-incorrect-words',
    title: 'Wind turbine upkeep',
    difficulty: 2,
    voice: 'male',
    text:
      'Wind turbines are designed to operate for about [thirty|twenty-five] years, but they need regular maintenance to stay productive. Technicians climb the tower to inspect the [gearbox|generator] and the blades for cracks or erosion. Sensors built into the nacelle monitor vibration, which can reveal worn bearings before they fail. Lubricating oil is changed at fixed intervals, and filters are replaced to keep dust from entering the machinery. In very cold regions, de-icing systems prevent ice from building up on the [trailing|leading] edge of the blades, which would otherwise reduce output and create safety hazards.',
  },
  {
    id: 'hiw-014',
    type: 'highlight-incorrect-words',
    title: 'Dental check-up',
    difficulty: 1,
    exams: ['pte-core'],
    voice: 'female',
    text:
      'Most adults should visit the dentist for a check-up every [three|six] months. During the appointment, the dentist will examine your teeth and gums, and may take X-rays to look for decay between teeth. A hygienist then removes plaque and tartar that brushing cannot reach. If you notice bleeding gums or a [sensitive|painful] tooth, mention it at once, because early treatment is usually simpler and [cheaper|quicker]. Children should also attend regularly, so that their adult teeth develop without problems.',
  },
  {
    id: 'hiw-015',
    type: 'highlight-incorrect-words',
    title: 'Geothermal springs',
    difficulty: 3,
    voice: 'male',
    text:
      'Geothermal springs form where rainwater seeps deep underground, is heated by hot rock and then rises back to the surface through cracks in the crust. Because the water dissolves minerals along its path, many springs are rich in silica, calcium or sulphur, which give them distinctive colours and smells. Some pools are so hot that they are unsafe for bathing, while others remain pleasantly [cool|warm] all year. Geologists use the chemistry of spring water to estimate the temperature of the [reservoir|aquifer] below, which cannot be measured directly. The most famous springs attract visitors, but fragile mineral terraces can be damaged by footprints and by people removing [fossils|minerals] for souvenirs.',
  },
  {
    id: 'hiw-016',
    type: 'highlight-incorrect-words',
    title: 'Restaurant food safety',
    difficulty: 2,
    voice: 'female',
    text:
      'Restaurants must keep cold food at or below [five|four] degrees Celsius to limit the growth of harmful bacteria. Cooked meat should be heated to a minimum internal temperature of seventy-five degrees before it is served. Staff are required to wash their hands after handling raw poultry, and cutting boards used for meat should be kept separate from those used for [vegetables|fruit]. Inspectors check storage areas, fridge temperatures and the dates on stored food. Restaurants that repeatedly fail inspections may be [renovated|closed] until the problems are corrected.',
  },
  {
    id: 'hiw-017',
    type: 'highlight-incorrect-words',
    title: 'Job interview tips',
    difficulty: 1,
    voice: 'male',
    text:
      'Preparing for a job interview is one of the most useful things you can do before you apply. Research the company, read its website and find out what its recent projects have been. Practise answering common questions out loud, and prepare short examples that show your skills. Arrive ten minutes [late|early], dress smartly and bring copies of your CV. Remember to send a short thank-you message within [one|two] days, and avoid criticising former employers.',
  },
  {
    id: 'hiw-018',
    type: 'highlight-incorrect-words',
    title: 'Kelp forests',
    difficulty: 2,
    voice: 'female',
    text:
      'Kelp forests are underwater ecosystems found in cold, nutrient-rich coastal waters. Giant kelp can grow more than half a metre in a single day, forming [sparse|dense] canopies that shelter fish, sea otters and invertebrates. The kelp anchors itself to the seabed with root-like holdfasts, but it does not take nutrients from the sediment the way land plants do. Instead, it absorbs them directly from the [soil|water] around its blades. When sea urchins multiply and overgraze the kelp, the forest can collapse into a barren landscape known as an urchin barren. Restoring kelp often requires reintroducing predators, such as sea otters, that keep the [crab|urchin] population in check.',
  },
  {
    id: 'hiw-019',
    type: 'highlight-incorrect-words',
    title: 'Hospital visiting hours',
    difficulty: 1,
    exams: ['pte-core'],
    voice: 'female',
    text:
      'Visiting hours at Northgate General Hospital are from [nine|ten] in the morning until eight in the evening. Each patient may have up to [two|three] visitors at a time, and children under twelve must be accompanied by an adult. Please wash your hands or use hand sanitiser before entering a ward. If you have a cold or any other infection, please [avoid|postpone] your visit and call the ward first. Mobile phones should be set to silent, and visitors should leave the room during medical examinations. Thank you for helping us keep our patients and staff safe.',
  },
  {
    id: 'hiw-020',
    type: 'highlight-incorrect-words',
    title: 'Telescope mirrors',
    difficulty: 2,
    voice: 'male',
    text:
      'Reflecting telescopes use a large curved mirror to gather light, rather than a lens. The primary mirror is coated with a thin layer of aluminium, which reflects most of the incoming light towards a smaller secondary mirror. Because mirrors do not suffer from colour distortion, reflectors can be built with much [smaller|larger] apertures than refractors. Mirrors must be cleaned and re-coated every few years, since dust and oxidation gradually reduce their [magnification|reflectivity]. Astronomers choose the design according to the objects they want to observe, and the budget available for construction.',
  },
  {
    id: 'hiw-021',
    type: 'highlight-incorrect-words',
    title: 'Space station',
    difficulty: 3,
    voice: 'male',
    text:
      'The International Space Station orbits the Earth roughly every ninety minutes at an altitude of about four hundred kilometres. Crew members experience [twelve|sixteen] sunrises and sunsets each day, which can disrupt sleep unless their schedules are carefully managed. Because the station is in free fall, astronauts must exercise for about two hours each day to prevent their muscles and [bodies|bones] from weakening. Water is recycled almost completely, and air is refreshed by systems that remove carbon dioxide. Scientists on board also conduct experiments in [biology|physics], since microgravity allows researchers to study processes that are hard to observe on Earth.',
  },
  {
    id: 'hiw-022',
    type: 'highlight-incorrect-words',
    title: 'Wetland restoration',
    difficulty: 2,
    voice: 'male',
    text:
      'Wetlands filter pollutants, store floodwater and provide habitat for amphibians, waterfowl and countless insects. For decades many wetlands were drained to create farmland, but restoration projects now aim to return water to these areas. Engineers begin by blocking old drainage ditches so that the water table can recover. Native plants such as cattails and sedges are then introduced, [quickly|slowly] stabilising the soil and creating shelter for wildlife. Monitoring continues for several years, because the wetland may take a long time to [disappear|develop] its natural characteristics.',
  },
  {
    id: 'hiw-023',
    type: 'highlight-incorrect-words',
    title: 'Choir rehearsals',
    difficulty: 1,
    voice: 'female',
    text:
      'The community choir rehearses every [Friday|Tuesday] evening in the parish hall. New members are welcome, and no audition is needed, although singers should be able to read basic music. We begin with a short warm-up, followed by breathing exercises and scale practice. The concert is planned for [December|November], and the repertoire includes folk songs from several countries. Please bring a pencil, because the conductor marks changes in the score during each session. Refreshments are served after the rehearsal, and families are always welcome to attend.',
  },
  {
    id: 'hiw-024',
    type: 'highlight-incorrect-words',
    title: 'Chocolate history',
    difficulty: 2,
    voice: 'female',
    text:
      'Chocolate originated in Mesoamerica, where cacao beans were ground into a bitter drink flavoured with chilli and spices. Europeans added sugar in the [seventeenth|sixteenth] century, and the sweeter beverage quickly became fashionable among the wealthy. The solid chocolate bar appeared much later, after inventors developed methods for pressing cocoa butter out of the beans. Today, cacao is grown mainly in tropical regions near the equator, where [dry|humid] conditions and steady rainfall support the trees. Many producers now seek fair prices for farmers, and certification schemes try to [promote|protect] sustainable forestry.',
  },
  {
    id: 'hiw-025',
    type: 'highlight-incorrect-words',
    title: 'Amphibian decline',
    difficulty: 3,
    voice: 'male',
    text:
      'Amphibians have lived on Earth for more than [four|three] hundred million years, but many populations are now declining. Frogs, toads and salamanders absorb water and oxygen through their thin skin, which makes them especially sensitive to pollution. A fungal disease called chytridiomycosis has been linked to the disappearance of numerous species in mountain streams. Habitat loss also plays a role, as wetlands are drained for farming and roads cut off breeding ponds from [grassland|forest] areas where adults live. Conservation groups build tunnels under highways and create new ponds, so that migrating amphibians can [avoid|cross] roads safely.',
  },
  {
    id: 'hiw-026',
    type: 'highlight-incorrect-words',
    title: 'Volunteer firefighters',
    difficulty: 2,
    voice: 'male',
    text:
      'Volunteer fire departments serve many small towns across the country. Volunteers receive training in firefighting, first aid and rescue techniques, and they must [pass|complete] regular fitness assessments. Most volunteers carry a pager, so that they can respond to emergencies at any time of day. Departments depend on donations and [provincial|municipal] funding to buy vehicles and protective equipment. Recruiting new members has become difficult, so some towns now offer tuition support and flexible training schedules to attract people who work [full-time|part-time] jobs.',
  },
  {
    id: 'hiw-027',
    type: 'highlight-incorrect-words',
    title: 'Rail freight',
    difficulty: 2,
    voice: 'female',
    text:
      'Rail freight moves enormous quantities of goods across long distances, and it is considerably more energy efficient than road transport. A single freight train can carry the equivalent of several [dozen|hundred] trucks. Trains run on steel tracks, so friction is low and fuel use per tonne is [high|low]. However, rail networks are often limited by capacity, because passenger trains and freight trains share the same lines. Governments are investing in [single|double] tracks and automated signalling to reduce delays at busy junctions.',
  },
  {
    id: 'hiw-028',
    type: 'highlight-incorrect-words',
    title: 'Sound and pitch',
    difficulty: 3,
    voice: 'male',
    text:
      'Sound travels as a wave of pressure that moves through air, water and solid materials. The pitch of a note depends on its frequency, measured in hertz, so higher frequencies produce a [lower|higher] sound. Loudness depends on amplitude, the size of the pressure variation. Musical instruments produce tone by vibrating strings, columns of air or membranes, and the shape of the instrument shapes the [volume|timbre] that reaches the listener. Human hearing usually covers frequencies from about [thirty|twenty] hertz to twenty thousand hertz, although this range narrows with age.',
  },
  {
    id: 'hiw-029',
    type: 'highlight-incorrect-words',
    title: 'Phone battery care',
    difficulty: 1,
    voice: 'female',
    text:
      'To make your phone battery last longer, reduce the screen [volume|brightness] and close apps you are not using. Location services consume power, so turn them off when you do not need navigation. Keeping the phone in a very [warm|hot] place can damage the battery permanently. Most modern batteries work best when they are charged between twenty and eighty percent, and many phones now offer a charging mode that is [special|optimised]. Avoid using fast chargers every night, because heat can gradually reduce the battery\'s capacity.',
  },
  {
    id: 'hiw-030',
    type: 'highlight-incorrect-words',
    title: '3D printing',
    difficulty: 2,
    voice: 'male',
    text:
      'Three-dimensional printing builds objects layer by layer, using a digital model as a guide. Most desktop printers melt plastic filament and extrude it through a heated nozzle, while industrial machines may use powdered metal fused by a [magnet|laser]. Designers can produce complex shapes that would be impossible to make with traditional moulds, which makes the technology popular for prototypes. However, printed parts are often [stronger|weaker] along the direction between layers, so engineers must consider orientation carefully. Printing time can also be long for large objects, and printers need regular [maintenance|calibration] to ensure accurate results.',
  },
  {
    id: 'hiw-031',
    type: 'highlight-incorrect-words',
    title: 'Ice fishing safety',
    difficulty: 1,
    exams: ['pte-core'],
    voice: 'male',
    text:
      'Ice fishing is a popular winter activity on many northern lakes. Before walking onto the ice, check that it is at least [ten|twelve] centimetres thick, and remember that thickness can vary across a lake. Carry a rope and a [hook|spike] to help you pull yourself out if you fall through. Never fish alone, and tell someone where you intend to go. Snowmobiles and vehicles should be parked on the shore unless local authorities have confirmed that the ice is strong enough. Dress warmly in layers, and carry a dry set of clothing in case you get wet.',
  },
  {
    id: 'hiw-032',
    type: 'highlight-incorrect-words',
    title: 'Mountain hiking safety',
    difficulty: 2,
    voice: 'female',
    text:
      'Hikers should always check the forecast before setting out, since weather in mountain areas can change within an hour. Carry at least [two|three] litres of water, a map and a headlamp, even on a short trail. Leave your planned route with a friend or family member, and tell them when you expect to return. If you lose the trail, stay where you are rather than walking further into unfamiliar [ground|terrain]. Hikers should not [ignore|attempt] stream crossings after heavy rain, because the water can rise quickly and become dangerous within minutes.',
  },
  {
    id: 'hiw-033',
    type: 'highlight-incorrect-words',
    title: 'Mars rover mission',
    difficulty: 3,
    voice: 'male',
    text:
      'The Mars rover Perseverance was launched in two thousand [nineteen|twenty] and landed in [Gale|Jezero] Crater a year later. Its mission includes searching for signs of ancient microbial life in rocks that formed when the crater held a lake. The rover collects core samples and seals them in tubes, which may be returned to Earth by a future mission. Its instruments include a laser that vaporises rock to determine its chemical composition, and a helicopter that tests powered flight in the thin atmosphere. Engineers on Earth send commands with a time delay of several minutes, so the rover is largely [controlled|autonomous] during complex operations.',
  },
  {
    id: 'hiw-034',
    type: 'highlight-incorrect-words',
    title: 'Tea harvest',
    difficulty: 2,
    voice: 'female',
    text:
      'Tea plants are evergreen shrubs that thrive on hillsides with mild temperatures and frequent rain. Pickers traditionally harvest the top [three|two] leaves and a bud, which produce the finest flavour. Freshly picked leaves are withered to reduce moisture, then rolled to release enzymes that determine how the tea will [dry|oxidise]. Black tea is fully oxidised, while green tea is heated soon after harvest to stop oxidation. Most tea is grown in [polar|tropical] regions, where the climate allows harvesting throughout much of the year.',
  },
  {
    id: 'hiw-035',
    type: 'highlight-incorrect-words',
    title: 'Undersea internet cables',
    difficulty: 3,
    voice: 'male',
    text:
      'Around [ninety-five|ninety-nine] percent of international data travels through submarine cables laid across the ocean floor. The cables are made of thin strands of glass fibre, protected by layers of steel and plastic armour. Repeaters placed along the route boost the light signals so they can travel thousands of kilometres. Most cable faults are caused by [shipping|fishing] vessels and ship anchors, rather than by natural events. Repair ships must locate the damaged section, lift it from the seabed and splice in a new piece, which can take [several|two] days to complete.',
  },

  // ---------- Highlight Correct Summary (HCS) ----------
  {
    id: 'hcs-010',
    type: 'highlight-correct-summary',
    title: 'Remote work policies',
    difficulty: 2,
    voice: 'female',
    script:
      'Many companies that adopted remote work during the pandemic are now deciding how much of the week employees should spend in the office. Supporters of remote work point to shorter commutes, lower office costs and wider access to talent in other cities. Managers, however, often worry that informal contact between colleagues weakens when people rarely meet in person, and that new staff find it harder to learn the culture of an organisation. Some firms have responded with hybrid schedules, in which teams gather on fixed days for planning sessions and social events, while individual tasks are completed from home. Early evidence suggests that hybrid arrangements can keep most of the productivity gains without losing the benefits of face-to-face collaboration, although results depend heavily on the type of work involved.',
    options: [
      {
        id: 'a',
        text: 'Hybrid schedules that mix home working with planned office days may keep many productivity gains while preserving in-person collaboration, although the outcome varies by type of job.',
      },
      {
        id: 'b',
        text: 'Remote working has been shown to lower productivity in every type of job, so most firms are returning to full-time office schedules that protect in-person collaboration.',
      },
      {
        id: 'c',
        text: 'Commuting, office costs and access to recruits are unaffected by remote working, so the choice of office policy matters little to employers and to staff alike.',
      },
    ],
    answer: 'a',
  },
  {
    id: 'hcs-011',
    type: 'highlight-correct-summary',
    title: 'Quantum computing',
    difficulty: 3,
    voice: 'male',
    script:
      'Quantum computers use quantum bits, or qubits, which can exist in a superposition of states rather than simply being zero or one. This allows certain calculations to explore many possibilities at once, although the result can only be read after the superposition collapses. Qubits are also extremely fragile, because small disturbances from heat or electromagnetic noise can destroy their quantum state, a problem known as decoherence. Engineers therefore cool processors to temperatures close to absolute zero and use error-correction schemes that spread information across many physical qubits. Researchers do not expect quantum machines to replace ordinary computers for everyday tasks. Instead, they are likely to be useful for specialised problems, such as simulating molecules or optimising complex logistics.',
    options: [
      {
        id: 'a',
        text: 'Quantum computers outperform ordinary machines on every task, because each qubit stores unlimited information and the hardware runs reliably at room temperature.',
      },
      {
        id: 'b',
        text: 'Quantum computers use qubits that can hold superposed states, which may help with specialised problems, but noise and decoherence make the hardware fragile and difficult to build.',
      },
      {
        id: 'c',
        text: 'Quantum computers are ready to replace ordinary machines for everyday tasks, since decoherence is solved and the hardware needs no error correction or special cooling.',
      },
    ],
    answer: 'b',
  },
  {
    id: 'hcs-012',
    type: 'highlight-correct-summary',
    title: 'Community garden plots',
    difficulty: 1,
    exams: ['pte-core'],
    voice: 'female',
    script:
      'The Westgate Community Garden has forty plots available for the upcoming season. Residents can rent a plot for twenty dollars a year, which covers water and access to shared tools. Gardeners are asked to attend two workdays in spring, when paths are cleared and compost bins are built. Organic growing is encouraged, so chemical pesticides are not allowed on the plots. Applications are accepted until the end of March, and places are allocated by lottery if demand is high.',
    options: [
      {
        id: 'a',
        text: 'Plots are free for every resident, but gardeners must buy their own water and use chemical pesticides to protect their vegetables from pests.',
      },
      {
        id: 'b',
        text: 'The garden offers forty plots only to families with children, and gardeners are not required to attend any workdays during the growing season.',
      },
      {
        id: 'c',
        text: 'Residents can rent one of forty plots for an annual fee, must help with spring work, and should grow crops without chemical pesticides.',
      },
    ],
    answer: 'c',
  },
  {
    id: 'hcs-013',
    type: 'highlight-correct-summary',
    title: 'Growing up bilingual',
    difficulty: 2,
    voice: 'male',
    script:
      'Children who grow up with two languages often develop a strong awareness of how language works. Research suggests that bilingual children may switch tasks more flexibly and sometimes show better attention in certain tests of control. However, the effects are modest, and they are not the main reason parents should raise children bilingually. The clearer benefit is that children can communicate with grandparents and other relatives, and they gain access to a second culture. Bilingualism also takes time and consistency. Parents who speak one language at home while the community speaks another often find that the minority language weakens unless it is used regularly in daily life.',
    options: [
      {
        id: 'a',
        text: 'Bilingualism offers modest cognitive advantages, but its clearer value lies in family communication and cultural access, and it needs regular use to be maintained.',
      },
      {
        id: 'b',
        text: 'Bilingual children clearly outperform monolingual peers on attention tests, so the main reason to raise them in two languages is improved concentration at school.',
      },
      {
        id: 'c',
        text: 'Bilingual children rarely develop any awareness of language, and the minority language stays strong without parents needing to make any particular effort at home.',
      },
    ],
    answer: 'a',
  },
  {
    id: 'hcs-014',
    type: 'highlight-correct-summary',
    title: 'Gene-edited crops',
    difficulty: 3,
    voice: 'male',
    script:
      'Gene editing techniques such as CRISPR allow scientists to make precise changes to the DNA of crops, without necessarily introducing genetic material from other species. Proponents argue that this could produce drought-tolerant wheat or disease-resistant rice, reducing the need for chemical inputs. Regulators differ in how they classify the resulting plants. Some countries treat edits that could also arise through conventional breeding as similar to traditional varieties, while others apply the stricter rules used for genetically modified organisms. Critics worry about unintended effects on the wider ecosystem and about the concentration of patents in a few large companies. Most agree that case-by-case evaluation of each product is more sensible than a blanket ban or blanket approval.',
    options: [
      {
        id: 'a',
        text: 'Gene editing always inserts genetic material from other species, so every country regulates edited crops exactly as it regulates conventional breeding, with no product-by-product checks.',
      },
      {
        id: 'b',
        text: 'Gene editing can make precise crop changes that may reduce chemical use, but regulation varies, and many experts prefer evaluating each product individually rather than applying a blanket rule.',
      },
      {
        id: 'c',
        text: 'Gene editing has been banned worldwide for producing disease-prone crops, so the debate centres only on whether patents should be allowed rather than on how crops are regulated.',
      },
    ],
    answer: 'b',
  },
  {
    id: 'hcs-015',
    type: 'highlight-correct-summary',
    title: 'How visitors move through museums',
    difficulty: 2,
    voice: 'female',
    script:
      'Museums often assume that visitors move steadily from one gallery to the next, but observation studies show a different pattern. Most people spend only a few minutes in front of any single object, and they tend to stop at pieces with a clear visual appeal or a familiar name. Curators have responded by grouping objects into themed clusters, which help visitors make connections and reduce fatigue. Interactive labels that ask questions also keep people engaged for longer. Designers caution, however, that too much text can discourage visitors, so short explanations are generally more effective than long panels.',
    options: [
      {
        id: 'a',
        text: 'Visitors usually study each object for an hour and read every label carefully, so the way museums arrange their collections rarely needs to change in any way.',
      },
      {
        id: 'b',
        text: 'Long text panels are the most effective way to hold visitors\' attention, so curators prefer detailed explanations and rarely use questions or interactive labels.',
      },
      {
        id: 'c',
        text: 'Visitors often spend only minutes at each object, so curators group related objects and use short, interactive labels to hold attention.',
      },
    ],
    answer: 'c',
  },
  {
    id: 'hcs-016',
    type: 'highlight-correct-summary',
    title: 'Teen sleep and school start times',
    difficulty: 1,
    voice: 'female',
    script:
      'Teenagers naturally go to bed later than younger children, because their internal clocks shift during puberty. When school starts early in the morning, many teens do not get the eight to ten hours of sleep recommended by health experts. Lack of sleep can affect concentration, mood and performance at school. Some districts have responded by starting classes later, and early results show that students attend more regularly and report feeling less tired during the day. Families can also help by keeping screens out of bedrooms and setting a consistent wake-up time at weekends.',
    options: [
      {
        id: 'a',
        text: 'Later school start times can help teens, whose internal clocks shift at puberty, to sleep longer and attend school more regularly.',
      },
      {
        id: 'b',
        text: 'Teenagers need less sleep than younger children, so early school starts cause few problems, and families are advised to keep screens in bedrooms for convenience.',
      },
      {
        id: 'c',
        text: 'Teens who sleep less than eight hours have no real problems with concentration, which is why most districts see no reason to change their start times.',
      },
    ],
    answer: 'a',
  },
  {
    id: 'hcs-017',
    type: 'highlight-correct-summary',
    title: 'Irrigation along the Nile',
    difficulty: 2,
    voice: 'male',
    script:
      'The civilisation of ancient Egypt depended on the Nile, whose annual flood deposited fertile silt across the floodplain. Farmers built networks of canals and basins to capture and hold the floodwater, so that fields could be watered long after the river had receded. Officials recorded the height of the flood, which helped them estimate harvests and set taxes. Irrigation was labour intensive, and it required cooperation between villages. Over time, the system allowed Egypt to support large populations in what would otherwise have been a desert environment.',
    options: [
      {
        id: 'a',
        text: 'The Nile flooded irregularly, so Egyptian farmers relied on rainfall alone and rarely built canals, which kept the population small and widely dispersed across the land.',
      },
      {
        id: 'b',
        text: 'Egyptian farmers used canals and basins to hold floodwater and fertile silt, which supported dense populations in a desert region, while officials used flood records to plan taxes.',
      },
      {
        id: 'c',
        text: 'Officials ignored the height of each flood, and irrigation was managed separately by individual households, so villages rarely cooperated on large canal projects.',
      },
    ],
    answer: 'b',
  },
  {
    id: 'hcs-018',
    type: 'highlight-correct-summary',
    title: 'Default options and nudges',
    difficulty: 3,
    voice: 'male',
    script:
      'Behavioural economists argue that small changes in how choices are presented can influence decisions without restricting anyone\'s freedom. A common example is automatic enrolment in pension schemes, where employees must opt out rather than opt in. Participation rises sharply under this design, although the effect is smaller when the default is poorly chosen. Critics question whether governments should shape behaviour in this way, even gently, and they worry that nudges may serve political rather than public interests. Supporters respond that every choice is framed somehow, so the real question is whether the framing is transparent and designed to help people.',
    options: [
      {
        id: 'a',
        text: 'Nudges force citizens to behave in particular ways, and automatic pension enrolment has been shown to reduce participation because most people dislike being enrolled by default.',
      },
      {
        id: 'b',
        text: 'Behavioural economists have proven that framing has no effect on decisions, so governments should avoid all nudges, since every choice is simply a matter of personal preference.',
      },
      {
        id: 'c',
        text: 'Changing the default option, such as automatic pension enrolment, can raise participation without removing choice, although critics question who designs the defaults and why.',
      },
    ],
    answer: 'c',
  },
  {
    id: 'hcs-019',
    type: 'highlight-correct-summary',
    title: 'Plate tectonics',
    difficulty: 2,
    voice: 'female',
    script:
      'The outer shell of the Earth is divided into large plates that float on the hotter, partly molten layer beneath. Where plates move apart, magma rises to fill the gap and new crust forms, as seen along mid-ocean ridges. Where plates collide, one may be forced beneath the other in a process called subduction, which often produces deep earthquakes and volcanic arcs. Movement is slow, usually a few centimetres each year, but over millions of years it has reshaped continents and created mountain ranges.',
    options: [
      {
        id: 'a',
        text: 'Plates slide slowly over a molten layer; they create new crust where they separate and can cause earthquakes and mountains where they collide.',
      },
      {
        id: 'b',
        text: 'Tectonic plates move quickly, often several metres per year, and mountains form only where plates separate, while collisions never produce earthquakes or volcanoes.',
      },
      {
        id: 'c',
        text: 'The Earth\'s crust is a single fixed shell that does not move, so earthquakes and mountains are caused only by meteorite impacts on the surface.',
      },
    ],
    answer: 'a',
  },
  {
    id: 'hcs-020',
    type: 'highlight-correct-summary',
    title: 'Filing a tax return',
    difficulty: 1,
    exams: ['pte-core'],
    voice: 'male',
    script:
      'Canadians who want their tax refund quickly should file their return electronically. Most people who file online receive their refund within a few weeks, while paper returns can take much longer. The filing deadline for most individuals is the end of April. If you owe tax, the payment is due by the same date, even if your return is filed later. Keep receipts and slips for at least six years, in case you are asked to provide them.',
    options: [
      {
        id: 'a',
        text: 'Paper returns are processed faster than electronic ones, so people who need money quickly should mail their forms in the middle of May.',
      },
      {
        id: 'b',
        text: 'Filing electronically usually brings a refund sooner, the usual deadline is the end of April, and records should be kept for six years.',
      },
      {
        id: 'c',
        text: 'Tax payments are due at the end of the year, and receipts need to be kept for only one month after filing, so most people need not worry about records.',
      },
    ],
    answer: 'b',
  },
  {
    id: 'hcs-021',
    type: 'highlight-correct-summary',
    title: 'Data in football',
    difficulty: 2,
    voice: 'female',
    script:
      'Sports analysts increasingly use data to evaluate player performance. Measures such as expected goals estimate the quality of each shot by considering its distance, its angle and the type of chance. Clubs use these figures to decide which players to scout and how to adjust tactics during matches. However, statistics cannot capture everything. Teamwork, leadership and the mental strength of a player are difficult to quantify, so most coaches combine data with direct observation before making important selection decisions.',
    options: [
      {
        id: 'a',
        text: 'Expected goals measure only the number of shots a team takes, so clubs rely entirely on statistics when deciding which players to scout and select.',
      },
      {
        id: 'b',
        text: 'Data has made coaching observation unnecessary, since teamwork and leadership can now be measured precisely, so clubs select players using statistics alone.',
      },
      {
        id: 'c',
        text: 'Analysts use measures such as expected goals to judge shot quality, but coaches still combine these figures with observation because some qualities are hard to measure.',
      },
    ],
    answer: 'c',
  },
  {
    id: 'hcs-022',
    type: 'highlight-correct-summary',
    title: 'Ageing populations and pensions',
    difficulty: 3,
    voice: 'male',
    script:
      'Many developed countries face a demographic shift, as birth rates have fallen and life expectancy has risen. Pension systems that rely on current workers to fund the retirement of older people become strained when the ratio of workers to retirees declines. Governments have responded by raising the retirement age, encouraging private saving and attracting migrants to fill gaps in the labour force. Each option has trade-offs. Later retirement may reduce income security for those in physically demanding jobs, while higher immigration can cause political tension. Economists generally agree that no single measure resolves the problem on its own.',
    options: [
      {
        id: 'a',
        text: 'Falling birth rates and rising life expectancy strain pay-as-you-go pensions, and governments respond with several measures, none of which is a complete solution alone.',
      },
      {
        id: 'b',
        text: 'Life expectancy has fallen in developed countries, so pension systems have become more generous and governments have been able to lower retirement ages.',
      },
      {
        id: 'c',
        text: 'Migration has been shown to remove all problems linked to ageing, so governments need not consider raising retirement ages or encouraging private saving at all.',
      },
    ],
    answer: 'a',
  },
  {
    id: 'hcs-023',
    type: 'highlight-correct-summary',
    title: 'Fast fashion',
    difficulty: 2,
    voice: 'female',
    script:
      'Fast fashion refers to inexpensive clothing that is designed, produced and sold rapidly to follow changing trends. The model encourages frequent purchases, and many garments are worn only a few times before being discarded. The textile industry produces a large share of global waste, much of which ends up in landfill or is burned. Some brands now offer take-back schemes and use recycled fibres, but experts argue that real change requires consumers to buy fewer items and keep them for longer.',
    options: [
      {
        id: 'a',
        text: 'Fast fashion garments are designed to last for decades, and most textile waste is recycled into new clothing by the brands that sell it.',
      },
      {
        id: 'b',
        text: 'Fast fashion encourages frequent, cheap purchases that create large amounts of textile waste, so experts say buying less and keeping clothes longer matters most.',
      },
      {
        id: 'c',
        text: 'Fast fashion has reduced textile waste overall, because cheap clothing is usually donated to charity shops and rarely thrown away or burned.',
      },
    ],
    answer: 'b',
  },
  {
    id: 'hcs-024',
    type: 'highlight-correct-summary',
    title: 'Brain plasticity',
    difficulty: 3,
    voice: 'male',
    script:
      'Neuroplasticity describes the capacity of the brain to reorganise its connections in response to experience. Learning a new skill, such as playing an instrument, strengthens the synapses involved in that activity. Scientists once believed that the adult brain was largely fixed, but research has shown that new neurons can form in some regions, and that rehabilitation after a stroke can help other areas take over lost functions. Plasticity is not unlimited, however, and it tends to decline with age. Repeated practice, sleep and physical exercise all appear to support the process of change.',
    options: [
      {
        id: 'a',
        text: 'The adult brain cannot change once childhood ends, so skill learning produces no lasting physical change, and rehabilitation after a stroke is generally ineffective.',
      },
      {
        id: 'b',
        text: 'Neuroplasticity is unlimited and stays constant throughout life, so exercise and sleep have no measurable influence on how the brain changes over the years.',
      },
      {
        id: 'c',
        text: 'Plasticity allows the brain to reorganise through practice and experience, although its capacity generally decreases with age, and sleep and exercise appear to support change.',
      },
    ],
    answer: 'c',
  },
  {
    id: 'hcs-025',
    type: 'highlight-correct-summary',
    title: 'Signing a lease',
    difficulty: 1,
    exams: ['pte-core'],
    voice: 'female',
    script:
      'Before signing a lease, tenants should ask for a copy of the written tenancy agreement and read it carefully. The agreement should state the monthly rent, the deposit amount and the notice period for ending the tenancy. Landlords may not ask for a deposit above the limit set by provincial rules, and they must return it within the time allowed after the tenancy ends. If you have concerns about repairs, keep written records and send requests by email or letter.',
    options: [
      {
        id: 'a',
        text: 'Tenants should read the written lease carefully, check the deposit rules, and keep written records of repair requests.',
      },
      {
        id: 'b',
        text: 'Tenants do not need a written agreement, because verbal promises about rent and repairs are always legally binding and easy to enforce in court.',
      },
      {
        id: 'c',
        text: 'Deposits can be any amount the landlord chooses, and tenants must pay them only after the tenancy has ended, so the lease needs no detail on money.',
      },
    ],
    answer: 'a',
  },

  // ---------- Listening: Multiple Choice, Single Answer (LMCS) ----------
  {
    id: 'lmcs-010',
    type: 'listening-mcsa',
    title: 'Heating filter replacement',
    difficulty: 1,
    exams: ['pte-core'],
    voice: 'female',
    script:
      'Hello, this is a reminder from the building management office. The filters in the heating system will be replaced on Thursday between nine and noon. Residents do not need to be at home, but please move any items away from the utility closets on the third floor. The technician will leave a new filter at the front desk, and the old one will be taken away for recycling. If you have any questions, please call the office before Wednesday.',
    question: 'What do residents need to do before Thursday?',
    options: [
      { id: 'a', text: 'Move items away from the third-floor utility closets.' },
      { id: 'b', text: 'Stay at home all morning to let the technician in.' },
      { id: 'c', text: 'Collect a new filter from the front desk.' },
      { id: 'd', text: 'Call the office on Thursday to confirm the work.' },
    ],
    answer: 'a',
  },
  {
    id: 'lmcs-011',
    type: 'listening-mcsa',
    title: 'The Silk Road',
    difficulty: 2,
    voice: 'male',
    script:
      'The Silk Road was not a single road but a network of routes that linked China with the Mediterranean world for many centuries. Merchants carried silk, spices, paper and precious metals along these paths, while ideas, religions and technologies moved in the other direction. Caravans relied on oasis towns, where animals could rest and traders could exchange goods. Although the most valuable cargoes attracted attention, much of the commerce consisted of everyday items traded between local communities. The network declined gradually as sea routes became more important for long-distance trade.',
    question: 'According to the lecture, why did the Silk Road network decline?',
    options: [
      { id: 'a', text: 'Caravans were banned by Chinese emperors after a series of wars.' },
      { id: 'b', text: 'Sea routes became more important for long-distance trade.' },
      { id: 'c', text: 'Oasis towns refused to provide rest for traders and animals.' },
      { id: 'd', text: 'Paper and silk stopped being produced in China and Europe.' },
    ],
    answer: 'b',
  },
  {
    id: 'lmcs-012',
    type: 'listening-mcsa',
    title: 'The Gulf Stream',
    difficulty: 2,
    voice: 'female',
    script:
      'The Gulf Stream is a powerful current that carries warm water from the Gulf of Mexico northwards along the eastern coast of North America. As it travels, the current moderates temperatures in parts of northwestern Europe, which are considerably milder than places at similar latitudes elsewhere. Because the water releases heat into the atmosphere, winds carry this warmth inland. Scientists monitor the current with buoys and satellites, since changes in its strength could affect weather patterns across the North Atlantic. Some studies suggest that the flow has weakened in recent decades, although the evidence remains debated.',
    question: 'What is the main effect of the Gulf Stream described in the talk?',
    options: [
      { id: 'a', text: 'It cools the coastline of eastern North America during summer.' },
      { id: 'b', text: 'It prevents satellites from observing weather patterns over the Atlantic.' },
      { id: 'c', text: 'It makes parts of northwestern Europe milder than similar latitudes elsewhere.' },
      { id: 'd', text: 'It brings cold water from the Arctic to the Gulf of Mexico.' },
    ],
    answer: 'c',
  },
  {
    id: 'lmcs-013',
    type: 'listening-mcsa',
    title: 'Managing ecotourism',
    difficulty: 3,
    voice: 'male',
    script:
      'Ecotourism is often promoted as a way to combine travel with conservation, but its benefits depend heavily on how it is managed. Well-designed programmes limit visitor numbers, employ local guides and direct a share of revenue to protected areas. Poorly planned tourism, by contrast, can disturb wildlife, increase waste and raise land prices in ways that displace residents. The label ecotourism is not regulated, so companies may use it for marketing without meeting any environmental standard. Researchers therefore recommend independent certification and clear reporting of how money is spent.',
    question: 'Which conclusion does the lecture draw about ecotourism?',
    options: [
      { id: 'a', text: 'Any travel marketed as ecotourism is automatically beneficial to conservation.' },
      { id: 'b', text: 'Local residents always gain more than companies from tourism schemes.' },
      { id: 'c', text: 'Ecotourism rarely affects wildlife because visitor numbers are kept very low.' },
      { id: 'd', text: 'Its benefits depend on management, so independent certification is valuable.' },
    ],
    answer: 'd',
  },
  {
    id: 'lmcs-014',
    type: 'listening-mcsa',
    title: 'Campus shuttle stop',
    difficulty: 1,
    voice: 'female',
    script:
      'Hi everyone, this is an update about the campus shuttle. Starting next Monday, the shuttle will stop at the library instead of the north gate. The route is otherwise unchanged, and the last departure from the station will still be at nine in the evening. Students who used the north gate stop are asked to walk to the library stop, which is about five minutes away. Thank you for your patience while we make the service more convenient for everyone.',
    question: 'What is changing about the campus shuttle?',
    options: [
      { id: 'a', text: 'It will stop at the library rather than at the north gate.' },
      { id: 'b', text: 'It will leave the station an hour later in the evening.' },
      { id: 'c', text: 'It will no longer run on weekdays.' },
      { id: 'd', text: 'It will be free for students to use every day.' },
    ],
    answer: 'a',
  },
  {
    id: 'lmcs-015',
    type: 'listening-mcsa',
    title: 'Hydrogen as fuel',
    difficulty: 2,
    voice: 'male',
    script:
      'Hydrogen is often described as a clean fuel because burning it produces water rather than carbon dioxide. However, most hydrogen today is produced from natural gas, a process that releases substantial emissions unless the carbon is captured and stored. Green hydrogen is made by splitting water with electricity from renewable sources, but it requires large amounts of power and is currently more expensive. Storage and transport also present challenges, since hydrogen must be compressed or cooled to a very low temperature. The lecture concludes that hydrogen will be most useful where batteries are impractical, such as in some heavy industries.',
    question: 'According to the lecture, where is hydrogen most likely to be useful?',
    options: [
      { id: 'a', text: 'In small household appliances that are powered by batteries.' },
      { id: 'b', text: 'In heavy industries where batteries are impractical.' },
      { id: 'c', text: 'Wherever natural gas is cheapest to extract.' },
      { id: 'd', text: 'In aircraft that currently run on electricity alone.' },
    ],
    answer: 'b',
  },
  {
    id: 'lmcs-016',
    type: 'listening-mcsa',
    title: 'Rent control debate',
    difficulty: 3,
    voice: 'female',
    script:
      'Rent control policies aim to protect tenants from sudden increases, but economists disagree about their long-term effects. Supporters point out that stable rents keep families in their homes and reduce displacement in fast-growing cities. Critics respond that strict caps can discourage landlords from maintaining buildings, and they may reduce the supply of new rental housing if investors expect lower returns. Many analysts therefore favour more moderate measures, such as limits on the size of annual increases combined with incentives for new construction. The lecture emphasises that policy design, rather than the principle alone, determines outcomes.',
    question: 'What does the lecture suggest about rent control?',
    options: [
      { id: 'a', text: 'Strict caps always improve building maintenance and increase new construction.' },
      { id: 'b', text: 'Economists agree that it should be abolished in every city.' },
      { id: 'c', text: 'Its effects depend on design, and moderate measures paired with construction incentives are often preferred.' },
      { id: 'd', text: 'It has no effect on families who are at risk of being displaced.' },
    ],
    answer: 'c',
  },
  {
    id: 'lmcs-017',
    type: 'listening-mcsa',
    title: 'Paper and parchment',
    difficulty: 2,
    voice: 'male',
    script:
      'Papermaking was developed in China around the second century, using fibres from mulberry bark, hemp and old rags. The technique spread slowly westwards, reaching the Islamic world and then Europe centuries later. Paper was much cheaper than parchment, which was made from animal skin and required a great deal of preparation. The arrival of paper helped to make books more widely available, although copying remained a manual task until the invention of the printing press. Today, papermaking relies largely on wood pulp, but many artists still value handmade paper for its texture and strength.',
    question: 'According to the lecture, what was the main advantage of paper over parchment?',
    options: [
      { id: 'a', text: 'It was made from animal skin, which was easier to prepare.' },
      { id: 'b', text: 'It was invented in Europe before it reached China.' },
      { id: 'c', text: 'It was produced mainly from wood pulp in medieval times.' },
      { id: 'd', text: 'It was much cheaper to produce than parchment.' },
    ],
    answer: 'd',
  },
  {
    id: 'lmcs-018',
    type: 'listening-mcsa',
    title: 'Responding to coastal erosion',
    difficulty: 3,
    voice: 'male',
    script:
      'Coastal erosion is accelerated by storms, rising sea levels and the removal of protective dunes and wetlands. Engineers have traditionally built seawalls and groynes to hold sand in place, but these structures can shift the problem to neighbouring beaches. Some communities now prefer managed retreat, in which buildings are relocated and the coast is allowed to change more naturally. Beach nourishment, the process of adding sand, can restore a shoreline temporarily, though it must be repeated as waves redistribute the material. Choosing the right approach depends on the value of the land, the expected rate of change and the wishes of local residents.',
    question: 'What is the main point of the talk?',
    options: [
      { id: 'a', text: 'The best response to erosion depends on local conditions, and each option has drawbacks.' },
      { id: 'b', text: 'Seawalls always protect neighbouring beaches as well as the shoreline they are built on.' },
      { id: 'c', text: 'Beach nourishment is a permanent solution that never needs to be repeated.' },
      { id: 'd', text: 'Managed retreat is rejected by residents in every coastal community.' },
    ],
    answer: 'a',
  },
  {
    id: 'lmcs-019',
    type: 'listening-mcsa',
    title: 'Stone circles',
    difficulty: 2,
    voice: 'female',
    script:
      'Stone circles scattered across northern Europe were erected thousands of years ago, but their purpose remains uncertain. Some archaeologists think they marked seasonal events, since certain stones align with the rising or setting sun at midsummer or midwinter. Others argue that the circles served as gathering places, where communities met for ceremonies, trade or the burial of their dead. Excavations have found human remains and tools near some circles, which supports the view that they had social as well as astronomical functions. Researchers now combine excavation data with precise surveys to test these competing ideas.',
    question: 'What do researchers now do to understand stone circles?',
    options: [
      { id: 'a', text: 'They have concluded that the circles had no astronomical function.' },
      { id: 'b', text: 'They combine excavation with precise surveys to test competing explanations.' },
      { id: 'c', text: 'They have confirmed that the stones were moved from distant quarries.' },
      { id: 'd', text: 'They rely on written records describing the ceremonies held at each site.' },
    ],
    answer: 'b',
  },
  {
    id: 'lmcs-020',
    type: 'listening-mcsa',
    title: 'Fitness centre pool hours',
    difficulty: 1,
    voice: 'female',
    script:
      'Hello members, this is a notice about changes to our fitness centre. From the first of next month, the swimming pool will open an hour earlier, at six in the morning, on weekdays. Weekend opening hours will stay the same. Members who book a personal training session will now receive a reminder by text message the day before. Please remember that lockers must be emptied before you leave, as items left behind will be collected by staff each evening.',
    question: 'What change is taking place from the first of next month?',
    options: [
      { id: 'a', text: 'The weekend opening hours will be shortened.' },
      { id: 'b', text: 'Personal training sessions will be cancelled.' },
      { id: 'c', text: 'The pool will open an hour earlier on weekdays.' },
      { id: 'd', text: 'Lockers will be cleared by members each evening.' },
    ],
    answer: 'c',
  },
  {
    id: 'lmcs-021',
    type: 'listening-mcsa',
    title: 'Structure in jazz',
    difficulty: 2,
    voice: 'male',
    script:
      'Improvisation is central to jazz, but it is not random. Musicians build their solos on a predetermined harmonic structure, usually a series of chord changes that repeat in a cycle. Within that framework, players choose notes that create tension and release, and they often quote melodies from other songs to create a sense of conversation. Listeners who know the tune can recognise the variations, which is part of the pleasure of the performance. Many jazz musicians spend years learning standard repertoire before they attempt to improvise freely in public.',
    question: 'According to the talk, what is the basis of jazz improvisation?',
    options: [
      { id: 'a', text: 'Players ignore the chord changes so that each solo is unique.' },
      { id: 'b', text: 'Musicians improvise without any training or knowledge of standard repertoire.' },
      { id: 'c', text: 'Melodies are never quoted, so listeners cannot recognise the tune.' },
      { id: 'd', text: 'Solos are built on a set harmonic structure that repeats in a cycle.' },
    ],
    answer: 'd',
  },
  {
    id: 'lmcs-022',
    type: 'listening-mcsa',
    title: 'Genetic drift',
    difficulty: 3,
    voice: 'male',
    script:
      'Genetic drift refers to random changes in the frequency of gene variants within a population. In large populations, these random fluctuations tend to average out, so natural selection usually has the stronger influence. In small populations, however, chance can cause a variant to disappear or become dominant even if it has no advantage. Island populations and species that have passed through severe bottlenecks often show reduced genetic diversity for this reason. Drift does not create adaptation, but it can make a population more vulnerable to disease and environmental change.',
    question: 'Which statement about genetic drift is supported by the talk?',
    options: [
      { id: 'a', text: 'In small populations, a variant can disappear by chance even without any disadvantage.' },
      { id: 'b', text: 'Drift has its strongest influence in very large populations where variants are common.' },
      { id: 'c', text: 'Drift always produces new adaptations that help populations survive environmental change.' },
      { id: 'd', text: 'Drift is the main reason that island populations have high genetic diversity.' },
    ],
    answer: 'a',
  },
  {
    id: 'lmcs-023',
    type: 'listening-mcsa',
    title: 'Toilet rebate scheme',
    difficulty: 2,
    voice: 'female',
    script:
      'Residents who replace an old toilet with a high-efficiency model can claim a rebate of up to two hundred dollars from the water utility. Older toilets may use more than six litres per flush, while qualifying models use less than four and a half. To apply, you need your receipt, the make and model of the new toilet, and a photograph of the installed unit. Applications are processed within eight weeks, and the rebate is paid by cheque. Only one rebate is available per household.',
    question: 'What must an applicant provide to claim the rebate?',
    options: [
      { id: 'a', text: 'A copy of the water bill from the previous year and the old toilet.' },
      { id: 'b', text: 'A receipt, the make and model of the new toilet, and a photograph of the installed unit.' },
      { id: 'c', text: 'A certificate from a plumber confirming that the old toilet was broken.' },
      { id: 'd', text: 'Proof that the household has more than four residents.' },
    ],
    answer: 'b',
  },
  {
    id: 'lmcs-024',
    type: 'listening-mcsa',
    title: 'How vaccines build protection',
    difficulty: 3,
    voice: 'male',
    script:
      'Vaccines work by exposing the immune system to a harmless component of a pathogen, such as a protein or an inactivated virus. The body responds by producing antibodies and memory cells, which persist long after the initial exposure. When the real pathogen appears later, these memory cells can mount a faster and stronger response, often preventing serious disease. Some vaccines require booster doses because antibody levels decline over time, while others provide lasting protection after a single course. Researchers continue to study how long memory lasts for different pathogens and why responses vary between individuals.',
    question: 'Which explanation of how vaccines protect people is best supported by the lecture?',
    options: [
      { id: 'a', text: 'Vaccines infect the body with a weakened pathogen that then remains active for life.' },
      { id: 'b', text: 'Vaccines suppress the immune system so that the pathogen cannot cause disease.' },
      { id: 'c', text: 'Memory cells formed after vaccination can respond more quickly when the real pathogen appears.' },
      { id: 'd', text: 'Antibodies produced after vaccination are permanent, so boosters are never needed.' },
    ],
    answer: 'c',
  },
  {
    id: 'lmcs-025',
    type: 'listening-mcsa',
    title: 'Planned power outage',
    difficulty: 2,
    exams: ['pte-core'],
    voice: 'female',
    script:
      'Good afternoon, this is an announcement from the city\'s utility company. Planned maintenance will take place on Saturday between eight in the morning and two in the afternoon, and some homes in the north district will lose electricity during this period. Customers who rely on medical equipment should register with the utility before Friday, so that crews can contact them in advance. Please keep your phone charged, and avoid using candles indoors. Updates will be posted on the company\'s website.',
    question: 'Why should customers who depend on medical equipment register before Friday?',
    options: [
      { id: 'a', text: 'So that they receive a discount on their electricity bill.' },
      { id: 'b', text: 'So that they can choose a different electricity supplier.' },
      { id: 'c', text: 'So that the utility can repair their equipment for free.' },
      { id: 'd', text: 'So that the crews can contact them before the outage.' },
    ],
    answer: 'd',
  },

  // ---------- Listening: Multiple Choice, Multiple Answers (LMCM) ----------
  {
    id: 'lmcm-010',
    type: 'listening-mcma',
    title: 'Roman concrete',
    difficulty: 2,
    voice: 'male',
    script:
      'Roman concrete has fascinated engineers because many structures built two thousand years ago remain intact. The concrete was made from lime, volcanic ash and rock aggregate, which together formed a material that resists cracking. Unlike modern concrete, it sometimes contained lumps of lime that reacted with water and healed small fractures. Recent studies suggest that this self-healing process may have been intentional, rather than an accident. Researchers hope that understanding the recipe could inspire more durable construction materials with lower carbon emissions.',
    question: 'Which statements about Roman concrete are supported by the talk?',
    options: [
      { id: 'a', text: 'Lime lumps in the mixture may have helped repair small cracks over time.' },
      { id: 'b', text: 'Modern concrete is made entirely from volcanic ash and seawater.' },
      { id: 'c', text: 'Some Roman structures from two thousand years ago are still standing.' },
      { id: 'd', text: 'Researchers believe the self-healing feature was always an accident.' },
      { id: 'e', text: 'Volcanic ash was a key ingredient in the mixture.' },
      { id: 'f', text: 'The Romans used iron reinforcement bars to strengthen every structure.' },
    ],
    answers: ['a', 'c', 'e'],
  },
  {
    id: 'lmcm-011',
    type: 'listening-mcma',
    title: 'Winter driving kit',
    difficulty: 1,
    exams: ['pte-core'],
    voice: 'female',
    script:
      'Hi, this is a safety reminder for drivers this winter. Before the first snowfall, check that your battery and tyres are in good condition, and top up the washer fluid. Keep an emergency kit in the car, including a blanket, a flashlight, water and some non-perishable snacks. A shovel and a bag of sand or cat litter can help you get out of a snowbank. If you are travelling a long distance, tell someone your route and expected arrival time.',
    question: 'Which of these does the reminder recommend?',
    options: [
      { id: 'a', text: 'Carrying a blanket, a flashlight and water.' },
      { id: 'b', text: 'Carrying a shovel and a bag of sand or cat litter.' },
      { id: 'c', text: 'Keeping a spare fridge in the car for perishable food.' },
      { id: 'd', text: 'Keeping a set of summer tyres in the trunk.' },
      { id: 'e', text: 'Telling someone your route and expected arrival time.' },
      { id: 'f', text: 'Waiting for the snow to melt before checking the battery.' },
    ],
    answers: ['a', 'b', 'e'],
  },
  {
    id: 'lmcm-012',
    type: 'listening-mcma',
    title: 'Solar panel performance',
    difficulty: 2,
    voice: 'female',
    script:
      'Solar panels convert sunlight into electricity using photovoltaic cells, usually made from silicon. The efficiency of commercial panels has improved steadily, and most now convert around a fifth of incoming sunlight into usable power. Efficiency falls as panels heat up, so installations in very hot climates may produce less than their rated output. Dust, snow and shading can also reduce performance significantly. Engineers therefore design systems with tilt angles and ventilation that keep the cells cool and clean, and they often add optimisers to limit losses from partial shade.',
    question: 'Which statements about solar panels are supported by the talk?',
    options: [
      { id: 'a', text: 'Panels usually convert roughly a fifth of sunlight into usable electricity.' },
      { id: 'b', text: 'Panels are most efficient when they become very hot.' },
      { id: 'c', text: 'Shading and dust can reduce a system\'s output noticeably.' },
      { id: 'd', text: 'Photovoltaic cells are commonly made from silicon.' },
      { id: 'e', text: 'Optimisers are used only in cold climates.' },
      { id: 'f', text: 'Snow has no effect on how much electricity a panel produces.' },
    ],
    answers: ['a', 'c', 'd'],
  },
  {
    id: 'lmcm-013',
    type: 'listening-mcma',
    title: 'Language families',
    difficulty: 3,
    voice: 'male',
    script:
      'Linguists group languages into families that share a common ancestor. The Indo-European family, for example, includes English, Hindi and Russian, and its members can be traced back to a reconstructed proto-language spoken several thousand years ago. Similarity in vocabulary and grammar provides the main evidence, although borrowing between neighbouring languages can blur the picture. Some languages, such as Basque, do not clearly belong to any known family and are described as isolates. Comparing sound changes systematically is therefore essential, because it allows linguists to distinguish inherited features from words that were simply adopted from another tongue.',
    question: 'Which statements are supported by the lecture?',
    options: [
      { id: 'a', text: 'Languages in the same family usually share a common ancestor.' },
      { id: 'b', text: 'Borrowing between neighbouring languages has no effect on classification.' },
      { id: 'c', text: 'Basque is a clear member of the Indo-European family.' },
      { id: 'd', text: 'Systematic comparison of sound changes helps separate inherited features from borrowed words.' },
      { id: 'e', text: 'The Indo-European proto-language was written down in full.' },
      { id: 'f', text: 'Vocabulary and grammar similarities are the main evidence used to group languages.' },
    ],
    answers: ['a', 'd', 'f'],
  },
  {
    id: 'lmcm-014',
    type: 'listening-mcma',
    title: 'Green corridors',
    difficulty: 2,
    voice: 'female',
    script:
      'Green corridors are strips of trees, hedgerows and planted verges that connect parks and nature reserves across a city. For wildlife, they provide routes that allow birds, insects and small mammals to move between habitats without crossing busy roads. Corridors also improve stormwater management, because vegetation absorbs rainfall and slows runoff. Planners sometimes face opposition from residents who object to losing parking spaces. Studies from several cities suggest that even narrow corridors can support a surprising number of species, provided they are continuous and well maintained.',
    question: 'Which statements about green corridors are supported by the talk?',
    options: [
      { id: 'a', text: 'Corridors help wildlife move between habitats without crossing busy roads.' },
      { id: 'b', text: 'Corridors are only useful if they are wide enough for large mammals.' },
      { id: 'c', text: 'Vegetation in corridors can reduce the volume of runoff after rainfall.' },
      { id: 'd', text: 'Corridors have no effect on the number of species in a city.' },
      { id: 'e', text: 'Narrow corridors can support many species if they are continuous and maintained.' },
      { id: 'f', text: 'Planners never encounter objections from residents about green corridors.' },
    ],
    answers: ['a', 'c', 'e'],
  },
  {
    id: 'lmcm-015',
    type: 'listening-mcma',
    title: 'Older adults fitness classes',
    difficulty: 1,
    exams: ['pte-core'],
    voice: 'female',
    script:
      'The Riverside Community Centre is offering a new swimming and fitness program for older adults. Classes take place on Tuesday and Thursday mornings and cost fifteen dollars per session. No experience is needed, and instructors will adapt each exercise to suit different abilities. Participants should bring a towel and a water bottle. Registration opens online next Monday, but places are limited to twenty people per class, so early booking is recommended.',
    question: 'Which statements about the program are correct?',
    options: [
      { id: 'a', text: 'Classes are held on weekend afternoons.' },
      { id: 'b', text: 'Participants need previous swimming experience.' },
      { id: 'c', text: 'Each session costs fifteen dollars.' },
      { id: 'd', text: 'Instructors will adapt exercises to different abilities.' },
      { id: 'e', text: 'Registration is available only in person at the front desk.' },
      { id: 'f', text: 'Places are limited to twenty people per class.' },
    ],
    answers: ['c', 'd', 'f'],
  },
  {
    id: 'lmcm-016',
    type: 'listening-mcma',
    title: 'Linear perspective',
    difficulty: 3,
    voice: 'male',
    script:
      'Linear perspective was developed in early fifteenth-century Italy, when architects and painters began to use mathematical rules to represent three-dimensional space on a flat surface. Artists placed a vanishing point on the horizon, and parallel lines were drawn to converge toward it. This technique gave paintings a convincing sense of depth and made the scene appear to extend beyond the frame. Some historians argue that perspective also reflected a broader shift in how Europeans understood the individual\'s place in the world, though others caution against overstating this claim. Perspective was not universally adopted, and many medieval and non-Western traditions used different conventions.',
    question: 'Which statements about linear perspective are supported by the lecture?',
    options: [
      { id: 'a', text: 'It was developed in Italy in the early fifteenth century.' },
      { id: 'b', text: 'It used a vanishing point on the horizon to create depth.' },
      { id: 'c', text: 'It was used in every artistic tradition throughout history.' },
      { id: 'd', text: 'Historians agree completely on its wider cultural significance.' },
      { id: 'e', text: 'It creates the illusion of space that seems to extend beyond the frame.' },
      { id: 'f', text: 'It was invented in ancient Egypt and then adopted in Italy.' },
    ],
    answers: ['a', 'b', 'e'],
  },
  {
    id: 'lmcm-017',
    type: 'listening-mcma',
    title: 'Mobile banking safety',
    difficulty: 2,
    voice: 'female',
    script:
      'Mobile banking apps have made it easier to pay bills and transfer money, but they also create new risks. Users should enable two-factor authentication, which requires a second code sent to a device. Public Wi-Fi networks can be insecure, so it is safer to use mobile data for sensitive transactions. Banks will never ask customers to share their passwords by phone or email, and suspicious messages should be reported immediately. Keeping the operating system and apps updated also closes known security weaknesses.',
    question: 'Which practices does the talk recommend?',
    options: [
      { id: 'a', text: 'Using two-factor authentication to add a second check.' },
      { id: 'b', text: 'Sharing passwords with the bank when asked by phone.' },
      { id: 'c', text: 'Preferring mobile data over public Wi-Fi for sensitive transactions.' },
      { id: 'd', text: 'Ignoring system updates to avoid changes in the app layout.' },
      { id: 'e', text: 'Reporting suspicious messages immediately.' },
      { id: 'f', text: 'Writing passwords on a note stored with your device.' },
    ],
    answers: ['a', 'c', 'e'],
  },
  {
    id: 'lmcm-018',
    type: 'listening-mcma',
    title: 'Life cycle of stars',
    difficulty: 3,
    voice: 'male',
    script:
      'Stars spend most of their lives fusing hydrogen into helium in their cores. When the hydrogen runs low, the core contracts and heats up, and the outer layers expand, turning the star into a red giant. The fate of a star depends on its mass. Sun-like stars eventually shed their outer layers as a planetary nebula and leave behind a dense white dwarf. Much more massive stars can end in a supernova, a violent explosion that scatters heavy elements into space, where they later become part of new stars and planets.',
    question: 'Which statements about stellar evolution are supported by the talk?',
    options: [
      { id: 'a', text: 'Stars spend most of their lives fusing hydrogen into helium in their cores.' },
      { id: 'b', text: 'All stars become red giants and then explode as supernovae.' },
      { id: 'c', text: 'Sun-like stars can leave behind a white dwarf after shedding their outer layers.' },
      { id: 'd', text: 'Supernovae scatter heavy elements that may later form new stars and planets.' },
      { id: 'e', text: 'A star expands into a red giant only after its core has cooled.' },
      { id: 'f', text: 'Planetary nebulae are formed only by the most massive stars.' },
    ],
    answers: ['a', 'c', 'd'],
  },
  {
    id: 'lmcm-019',
    type: 'listening-mcma',
    title: 'Subtitles and dubbing',
    difficulty: 2,
    voice: 'female',
    script:
      'Subtitles help viewers follow dialogue in a foreign language, but they also change the way a film is experienced. Translators must compress speech into short lines that can be read quickly, which means that some humour, idioms and regional accents are lost. Subtitle timing is equally important, because a line that stays on screen for too long can distract viewers, while one that disappears too quickly is hard to read. Many audiences now prefer subtitles over dubbing, since they keep the original performances. Good subtitling therefore balances accuracy with readability.',
    question: 'Which statements are supported by the talk?',
    options: [
      { id: 'a', text: 'Subtitles often have to compress speech, so some humour and idioms may be lost.' },
      { id: 'b', text: 'Subtitles are always displayed for as long as the viewer wants to read them.' },
      { id: 'c', text: 'Subtitle timing has little influence on how easy a film is to follow.' },
      { id: 'd', text: 'Many audiences prefer subtitles because they keep the original performances.' },
      { id: 'e', text: 'Dubbing preserves the original actors\' voices better than subtitles do.' },
      { id: 'f', text: 'Subtitles must always be longer than the spoken dialogue.' },
    ],
    answers: ['a', 'd'],
  },
  {
    id: 'lmcm-020',
    type: 'listening-mcma',
    title: 'Crop rotation',
    difficulty: 2,
    voice: 'male',
    script:
      'Crop rotation involves growing different crops in the same field in successive seasons. Rotating legumes with cereals helps replenish nitrogen in the soil, which reduces the need for synthetic fertiliser. Rotation also disrupts the life cycles of pests and weeds that specialise on a particular crop. Farmers who rotate their fields often report more stable yields over time. However, rotation requires careful planning, including market access for a wider range of products and suitable equipment for each crop.',
    question: 'Which statements about crop rotation are supported by the talk?',
    options: [
      { id: 'a', text: 'Growing legumes in rotation can help replenish nitrogen in the soil.' },
      { id: 'b', text: 'Rotation increases the reliance on synthetic fertiliser.' },
      { id: 'c', text: 'Rotation can interrupt the life cycles of crop-specific pests and weeds.' },
      { id: 'd', text: 'Rotation always produces lower yields than growing one crop continuously.' },
      { id: 'e', text: 'Rotation requires planning and suitable equipment for each crop.' },
      { id: 'f', text: 'Rotation is useful only for cereal farmers.' },
    ],
    answers: ['a', 'c', 'e'],
  },
  {
    id: 'lmcm-021',
    type: 'listening-mcma',
    title: 'Recycling bin changes',
    difficulty: 1,
    exams: ['pte-core'],
    voice: 'female',
    script:
      'Hello residents. From next month, the blue recycling bin will accept cardboard pizza boxes, but only if they are free of grease. Plastic bags should still go in the black garbage bin, not in the blue one. Glass jars can be placed in the blue bin, provided the lids are removed and kept separately in the garbage. The collection day remains Tuesday, so please put your bins out by seven in the morning.',
    question: 'Which statements about the recycling changes are correct?',
    options: [
      { id: 'a', text: 'Greasy pizza boxes can go in the blue bin.' },
      { id: 'b', text: 'Plastic bags belong in the blue recycling bin.' },
      { id: 'c', text: 'Glass jars are accepted in the blue bin if their lids are removed.' },
      { id: 'd', text: 'The collection day is changing to Friday.' },
      { id: 'e', text: 'Bins should be put out by seven in the morning.' },
      { id: 'f', text: 'Clean cardboard pizza boxes are now accepted in the blue bin.' },
    ],
    answers: ['c', 'e', 'f'],
  },
  {
    id: 'lmcm-022',
    type: 'listening-mcma',
    title: 'The gut microbiome',
    difficulty: 3,
    voice: 'female',
    script:
      'The human gut contains trillions of microorganisms, collectively known as the microbiome. These communities help digest complex fibres, produce certain vitamins and train the immune system. Research has linked imbalances in the microbiome to conditions ranging from inflammatory disease to mood disorders, although many of these associations are still being investigated. Diet is a major influence on microbial diversity, and fibre-rich foods tend to support a wider range of species. Antibiotics can reduce diversity temporarily, and some studies suggest that recovery can take months. Researchers are cautious about commercial probiotic products, because evidence of benefit varies widely.',
    question: 'Which statements are supported by the talk?',
    options: [
      { id: 'a', text: 'Fibre-rich diets generally support a wider range of microbial species.' },
      { id: 'b', text: 'Gut microbes can produce certain vitamins and help digest complex fibres.' },
      { id: 'c', text: 'Every link between the microbiome and disease has been firmly proven.' },
      { id: 'd', text: 'Antibiotic-induced loss of diversity is usually recovered within one week.' },
      { id: 'e', text: 'Probiotic products have uniform benefits supported by strong evidence.' },
      { id: 'f', text: 'The microbiome consists of only a few dozen bacterial species.' },
    ],
    answers: ['a', 'b'],
  },
  {
    id: 'lmcm-023',
    type: 'listening-mcma',
    title: 'Summer lake layers',
    difficulty: 2,
    voice: 'male',
    script:
      'Deep lakes often develop layers of water with different temperatures during summer. The warm upper layer, called the epilimnion, mixes readily with the air, while the cold bottom layer, the hypolimnion, is isolated from the surface. The boundary between them, known as the thermocline, acts as a barrier to mixing. In autumn, cooling surface water becomes denser and sinks, which breaks down the stratification. Oxygen levels in the bottom layer can fall during summer, since decomposing matter consumes oxygen and little fresh oxygen can reach it.',
    question: 'Which statements about summer lake stratification are supported by the talk?',
    options: [
      { id: 'a', text: 'The thermocline acts as a barrier that limits mixing between layers.' },
      { id: 'b', text: 'The bottom layer receives plenty of fresh oxygen from the surface.' },
      { id: 'c', text: 'Cooling surface water in autumn can sink and break down stratification.' },
      { id: 'd', text: 'The upper layer is colder and denser than the lower layer in summer.' },
      { id: 'e', text: 'Decomposing matter in the lower layer can reduce oxygen levels.' },
      { id: 'f', text: 'The hypolimnion is the warm upper layer that mixes with air.' },
    ],
    answers: ['a', 'c', 'e'],
  },
  {
    id: 'lmcm-024',
    type: 'listening-mcma',
    title: 'Bias in automated hiring',
    difficulty: 3,
    voice: 'female',
    script:
      'Automated screening tools are widely used to sort job applications. These systems learn patterns from historical hiring data, which means they can reproduce past biases if those records reflect discrimination. A tool trained on decisions that favoured one group may rank similar candidates from other groups lower, even when the criteria seem neutral. Auditing is therefore essential. Organisations can test outcomes across demographic groups, remove proxies for protected characteristics and keep human reviewers involved in final decisions. Transparency about how the tool works also helps applicants understand and challenge unfair results.',
    question: 'Which statements are supported by the lecture?',
    options: [
      { id: 'a', text: 'Screening tools can reproduce biases present in historical hiring data.' },
      { id: 'b', text: 'Neutral-seeming criteria cannot produce unfair outcomes in automated systems.' },
      { id: 'c', text: 'Auditing outcomes across groups can help identify unfair patterns.' },
      { id: 'd', text: 'Human reviewers should be removed once an automated tool is installed.' },
      { id: 'e', text: 'Transparency helps applicants understand and challenge unfair results.' },
      { id: 'f', text: 'Screening tools learn only from current job criteria, never from past data.' },
    ],
    answers: ['a', 'c', 'e'],
  },
  {
    id: 'lmcm-025',
    type: 'listening-mcma',
    title: 'Island chains and hotspots',
    difficulty: 2,
    voice: 'male',
    script:
      'Oceanic islands such as Hawaii are formed when magma rises through a fixed hotspot in the mantle, building volcanoes on the moving tectonic plate above. As the plate drifts, each volcano is carried away from its source and gradually becomes extinct. Over millions of years, a chain of islands forms, with the oldest islands farthest from the hotspot. The youngest islands are the most active, and their volcanoes may still be building new land. Erosion and subsidence eventually lower the older islands, sometimes to form atolls with coral reefs around a sinking centre.',
    question: 'Which statements about oceanic island chains are supported by the talk?',
    options: [
      { id: 'a', text: 'The oldest islands in a chain are located farthest from the hotspot.' },
      { id: 'b', text: 'Hotspots move along with the tectonic plate above them.' },
      { id: 'c', text: 'The youngest islands are typically the most volcanically active.' },
      { id: 'd', text: 'Erosion never affects the height of old volcanic islands.' },
      { id: 'e', text: 'Coral atolls form only on the newest islands of a chain.' },
      { id: 'f', text: 'A volcano is carried away from its hotspot as the plate drifts.' },
    ],
    answers: ['a', 'c', 'f'],
  },
];
