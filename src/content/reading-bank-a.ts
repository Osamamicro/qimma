import type { Item } from '@/core';

/** Original reading items (bank A): Reading & Writing fill in the blanks and drag-and-drop gap fill. Owner: content-writing-reading agent. */
export const readingBankAItems: Item[] = [
  // ---------- Reading & Writing: Fill in the Blanks (rwfib) ----------

  {
    id: 'rwfib-019',
    type: 'rw-fill-blanks',
    title: 'Snow removal',
    difficulty: 1,
    exams: ['pte-core'],
    text:
      'Every winter, municipal crews in many Canadian cities work through the night to {{1}} the main roads after a heavy snowfall. Residents are asked not to park on certain streets, because the snowploughs need clear space to {{2}} their route. Sidewalk clearing, however, is usually the responsibility of the homeowner, and neighbours have been known to {{3}} the task between them. Although the work can be tiring, many people find that shovelling is a useful way to {{4}} some exercise before starting the day.',
    blanks: [
      { options: ['clearing', 'clearly', 'clear', 'clearance'], answer: 'clear' },
      { options: ['completion', 'completely', 'complete', 'completing'], answer: 'complete' },
      { options: ['divides', 'divided', 'divide', 'dividing'], answer: 'divide' },
      { options: ['gotten', 'get', 'getting', 'gets'], answer: 'get' },
    ],
  },
  {
    id: 'rwfib-020',
    type: 'rw-fill-blanks',
    title: 'Solar cookers',
    difficulty: 1,
    text:
      'Solar cookers use mirrors or reflective panels to {{1}} sunlight onto a cooking pot. In sunny regions, families can prepare meals without burning wood or charcoal, which {{2}} the amount of smoke in homes. The simplest designs are little more than an insulated box with a glass lid, and they can {{3}} temperatures high enough to boil water. However, cooking takes longer than on a stove, and food must be {{4}} carefully so that it cooks through.',
    blanks: [
      { options: ['focused', 'focuses', 'focus', 'focusing'], answer: 'focus' },
      { options: ['reducing', 'reduced', 'reduces', 'reduce'], answer: 'reduces' },
      { options: ['reached', 'reaching', 'reach', 'reaches'], answer: 'reach' },
      { options: ['monitor', 'monitoring', 'monitors', 'monitored'], answer: 'monitored' },
    ],
  },
  {
    id: 'rwfib-021',
    type: 'rw-fill-blanks',
    title: 'Lighthouses',
    difficulty: 2,
    text:
      'Lighthouses once guided sailors safely past dangerous coastlines, and many of them still {{1}} a warning beam at night. Before satellite navigation, keepers had to {{2}} the lamp by hand and keep the glass clean, a task that required constant attention. Today most lights run automatically, although a few are still {{3}} by volunteers who maintain historic buildings. Tourists often visit these towers to climb the stairs and {{4}} the view from the top, which is a popular attraction in many coastal towns.',
    blanks: [
      { options: ['emitted', 'emission', 'emits', 'emit'], answer: 'emit' },
      { options: ['polisher', 'polish', 'polished', 'polishing'], answer: 'polish' },
      { options: ['operate', 'operated', 'operating', 'operates'], answer: 'operated' },
      { options: ['enjoys', 'enjoyed', 'enjoying', 'enjoy'], answer: 'enjoy' },
    ],
  },
  {
    id: 'rwfib-022',
    type: 'rw-fill-blanks',
    title: 'Jet lag',
    difficulty: 2,
    text:
      'Travellers crossing several time zones often experience jet lag, a condition in which the body clock {{1}} with local time. Symptoms include fatigue, poor concentration and difficulty sleeping at the usual hour. Researchers recommend that people adjust their sleep schedule a few days before departure, and that they {{2}} exposure to bright light in the morning when travelling east. Caffeine can help in the short term, but it should not be {{3}} too late in the day. Most healthy adults {{4}} within a few days of arriving.',
    blanks: [
      { options: ['clash', 'clashed', 'clashes', 'clashing'], answer: 'clashes' },
      { options: ['seeks', 'seeking', 'sought', 'seek'], answer: 'seek' },
      { options: ['consume', 'consuming', 'consumed', 'consumes'], answer: 'consumed' },
      { options: ['recovers', 'recovered', 'recovering', 'recover'], answer: 'recover' },
    ],
  },
  {
    id: 'rwfib-023',
    type: 'rw-fill-blanks',
    title: 'Ocean currents',
    difficulty: 2,
    text:
      'Ocean currents carry warm and cold water around the planet, and they play a key role in {{1}} regional climates. The Gulf Stream, for example, {{2}} heat from the tropics towards northern Europe, which keeps winters milder than they would otherwise be. Changes in salinity and temperature can {{3}} these flows, and scientists are concerned that melting ice may slow them down. Because the currents are so large, even small shifts can have {{4}} consequences for fishing, shipping and weather patterns.',
    blanks: [
      { options: ['shape', 'shaped', 'shapes', 'shaping'], answer: 'shaping' },
      { options: ['transport', 'transported', 'transports', 'transporting'], answer: 'transports' },
      { options: ['disruption', 'disrupts', 'disrupted', 'disrupt'], answer: 'disrupt' },
      { options: ['profoundly', 'profoundness', 'profounder', 'profound'], answer: 'profound' },
    ],
  },
  {
    id: 'rwfib-024',
    type: 'rw-fill-blanks',
    title: 'Wetlands',
    difficulty: 1,
    text:
      'Wetlands are among the most productive ecosystems on Earth, yet they have {{1}} drained for farmland for centuries. Marshes and bogs act as natural sponges, {{2}} floodwater and slowly releasing it into rivers during dry periods. They also filter pollutants, which {{3}} the quality of water downstream. Restoring a wetland is often {{4}} than building a concrete barrier, and it can provide habitat for birds and fish at the same time.',
    blanks: [
      { options: ['being', 'be', 'is', 'been'], answer: 'been' },
      { options: ['absorb', 'absorbing', 'absorbs', 'absorbed'], answer: 'absorbing' },
      { options: ['improve', 'improved', 'improving', 'improves'], answer: 'improves' },
      { options: ['cheapest', 'cheap', 'cheaper', 'cheapness'], answer: 'cheaper' },
    ],
  },
  {
    id: 'rwfib-025',
    type: 'rw-fill-blanks',
    title: 'Interest rates',
    difficulty: 3,
    text:
      'Central banks use interest rates as a tool to {{1}} inflation. When rates rise, mortgages and business loans become more expensive, which tends to {{2}} demand for goods and services. Economists, however, disagree about how quickly these effects {{3}} through the system. Some argue that the lag can be as long as two years, while others claim that expectations alone can {{4}} financial markets almost immediately.',
    blanks: [
      { options: ['restrains', 'restrained', 'restraining', 'restrain'], answer: 'restrain' },
      { options: ['dampening', 'dampen', 'dampens', 'dampened'], answer: 'dampen' },
      { options: ['spreading', 'spreads', 'spread', 'spreader'], answer: 'spread' },
      { options: ['unsettling', 'unsettled', 'unsettles', 'unsettle'], answer: 'unsettle' },
    ],
  },
  {
    id: 'rwfib-026',
    type: 'rw-fill-blanks',
    title: 'Roman roads',
    difficulty: 3,
    text:
      'The Romans built a network of roads that, at its height, {{1}} more than eighty thousand kilometres. Engineers laid multiple layers of stone, gravel and mortar, which allowed the surface to {{2}} heavy wagons and marching soldiers for centuries. Many routes were {{3}} out in straight lines wherever the terrain permitted, a feature that still shapes the layout of some European highways. Although the roads were built mainly for military purposes, they could also {{4}} trade, communication and the movement of ideas across the empire.',
    blanks: [
      { options: ['spanning', 'span', 'spans', 'spanned'], answer: 'spanned' },
      { options: ['withstood', 'withstand', 'withstands', 'withstanding'], answer: 'withstand' },
      { options: ['lay', 'laid', 'lying', 'laying'], answer: 'laid' },
      { options: ['facilitates', 'facilitate', 'facilitating', 'facilitation'], answer: 'facilitate' },
    ],
  },
  {
    id: 'rwfib-027',
    type: 'rw-fill-blanks',
    title: 'Credit scores',
    difficulty: 2,
    text:
      'A credit score is a number that lenders use to {{1}} how likely a borrower is to repay a loan. Scores are calculated from factors such as payment history, the amount of debt owed and the length of time accounts have been {{2}}. Missing a payment can {{3}} a score quickly, whereas consistent repayments tend to {{4}} it gradually over several years. Critics argue that the system can disadvantage people with no borrowing history, since they have little data for lenders to judge.',
    blanks: [
      { options: ['assessment', 'assesses', 'assessed', 'assess'], answer: 'assess' },
      { options: ['maintain', 'maintains', 'maintained', 'maintaining'], answer: 'maintained' },
      { options: ['damaging', 'damage', 'damages', 'damaged'], answer: 'damage' },
      { options: ['built', 'build', 'builds', 'building'], answer: 'build' },
    ],
  },
  {
    id: 'rwfib-028',
    type: 'rw-fill-blanks',
    title: 'Typewriters',
    difficulty: 2,
    text:
      'Although most offices abandoned typewriters decades ago, a small community of enthusiasts has {{1}} interest in them. Collectors prize older machines for their solid keys and mechanical precision, and many now {{2}} parts through specialist dealers. Some writers also prefer the discipline of typing without the distractions of a screen, since a mistake cannot be {{3}} with a keystroke. Restoring an old machine can be a slow process, and the best results usually {{4}} patience and careful cleaning.',
    blanks: [
      { options: ['renew', 'renews', 'renewing', 'renewed'], answer: 'renewed' },
      { options: ['sourcing', 'sources', 'sourced', 'source'], answer: 'source' },
      { options: ['undo', 'undid', 'undone', 'undoing'], answer: 'undone' },
      { options: ['required', 'requires', 'require', 'requiring'], answer: 'require' },
    ],
  },
  {
    id: 'rwfib-029',
    type: 'rw-fill-blanks',
    title: 'Remote work',
    difficulty: 2,
    text:
      'Remote working has changed the daily routine of millions of employees, who no longer spend hours each week on the road. Some companies have {{1}} a hybrid model, in which staff split their time between the office and home. Managers, however, worry that informal conversations and mentoring become harder to {{2}} when teams are dispersed. Supporters of home working argue that it reduces stress and {{3}} time for family and hobbies, although some workers report feeling isolated. The most successful arrangements tend to be those in which employees have a clear say in when and where they {{4}}.',
    blanks: [
      { options: ['adopt', 'adopts', 'adopting', 'adopted'], answer: 'adopted' },
      { options: ['sustained', 'sustaining', 'sustain', 'sustains'], answer: 'sustain' },
      { options: ['free', 'freed', 'freeing', 'frees'], answer: 'frees' },
      { options: ['works', 'worked', 'working', 'work'], answer: 'work' },
    ],
  },
  {
    id: 'rwfib-030',
    type: 'rw-fill-blanks',
    title: 'Pollinator gardens',
    difficulty: 1,
    text:
      'Gardeners who want to support pollinators are increasingly planting native wildflowers, which {{1}} well to local soils and climates. Such plants provide nectar and pollen for bees and butterflies, and they often {{2}} with other species that rely on the same food sources. Leaving some bare ground can also help, since many solitary bees {{3}} their nests in soil. Pesticides, by contrast, can {{4}} insect populations even when they are not intended to harm them, so organic methods are generally recommended.',
    blanks: [
      { options: ['adapting', 'adapts', 'adapted', 'adapt'], answer: 'adapt' },
      { options: ['competed', 'competing', 'compete', 'competes'], answer: 'compete' },
      { options: ['built', 'build', 'building', 'builds'], answer: 'build' },
      { options: ['reduced', 'reducing', 'reduces', 'reduce'], answer: 'reduce' },
    ],
  },
  {
    id: 'rwfib-031',
    type: 'rw-fill-blanks',
    title: 'Hydroelectric dams',
    difficulty: 3,
    text:
      'Hydroelectric dams generate a large share of the world\'s renewable electricity, yet their construction has often {{1}} entire valleys. Reservoirs behind the dams can submerge farmland and force communities to relocate, while fish migration routes are {{2}}. Engineers now try to reduce these impacts through fish ladders and carefully timed water releases. Such measures, however, are not always enough to {{3}} the ecological damage caused by a large reservoir. As a result, some governments have begun to {{4}} the environmental cost against the benefits of cheap, low-carbon power.',
    blanks: [
      { options: ['flood', 'flooding', 'floods', 'flooded'], answer: 'flooded' },
      { options: ['disrupt', 'disrupting', 'disruption', 'disrupted'], answer: 'disrupted' },
      { options: ['reverses', 'reversed', 'reversing', 'reverse'], answer: 'reverse' },
      { options: ['weighing', 'weighed', 'weighs', 'weigh'], answer: 'weigh' },
    ],
  },
  {
    id: 'rwfib-032',
    type: 'rw-fill-blanks',
    title: 'Farmers\' markets',
    difficulty: 1,
    text:
      'A farmers\' market is a good place to buy fresh vegetables that were picked only a day or two earlier. Many stalls are known for {{1}} seasonal produce, so the choice changes from one month to the next. Shoppers can often {{2}} to the growers directly and ask how the food was grown. Prices are sometimes higher than in supermarkets, but many people feel the quality is {{3}} the extra cost. Some markets also accept debit cards, and those cards {{4}} visitors to pay without carrying cash.',
    blanks: [
      { options: ['sell', 'sold', 'sells', 'selling'], answer: 'selling' },
      { options: ['spoke', 'speak', 'spoken', 'speaks'], answer: 'speak' },
      { options: ['worthy', 'worthless', 'worth', 'worthwhile'], answer: 'worth' },
      { options: ['allows', 'allowing', 'allowed', 'allow'], answer: 'allow' },
    ],
  },
  {
    id: 'rwfib-033',
    type: 'rw-fill-blanks',
    title: 'Maple syrup',
    difficulty: 1,
    exams: ['pte-core'],
    text:
      'Maple syrup is made by {{1}} sap from sugar maple trees in the early spring. The sap is collected through small taps and then boiled until most of its water has evaporated. A large amount of sap is needed, because the finished syrup is only a small {{2}} of the original liquid. Canada produces most of the world\'s supply, and Quebec in particular is known for its sugar shacks, where visitors can {{3}} the syrup on pancakes. Producers must {{4}} strict grading standards for colour and taste.',
    blanks: [
      { options: ['collect', 'collected', 'collects', 'collecting'], answer: 'collecting' },
      { options: ['fractions', 'fractional', 'fraction', 'fractionally'], answer: 'fraction' },
      { options: ['pour', 'poured', 'pours', 'pouring'], answer: 'pour' },
      { options: ['offered', 'meet', 'meeting', 'meets'], answer: 'meet' },
    ],
  },
  {
    id: 'rwfib-034',
    type: 'rw-fill-blanks',
    title: 'Mangrove forests',
    difficulty: 2,
    text:
      'Mangrove forests grow along tropical coastlines, where their tangled roots {{1}} sediment and slow the movement of waves. Many fish species {{2}} on the shelter of these roots when they are young. Mangroves also store large amounts of carbon in their soils, which makes them valuable in the fight against climate change. Despite this, coastal development has {{3}} huge areas of forest over the past fifty years. Replanting programmes now aim to {{4}} some of these losses, although success depends on choosing the right species for each site.',
    blanks: [
      { options: ['trapped', 'traps', 'trapping', 'trap'], answer: 'trap' },
      { options: ['relied', 'relies', 'relying', 'rely'], answer: 'rely' },
      { options: ['clear', 'clearing', 'cleared', 'clears'], answer: 'cleared' },
      { options: ['offered', 'offsets', 'offset', 'offsetting'], answer: 'offset' },
    ],
  },
  {
    id: 'rwfib-035',
    type: 'rw-fill-blanks',
    title: 'Telemedicine',
    difficulty: 2,
    text:
      'Telemedicine allows patients to consult doctors by video call, which {{1}} long journeys to clinics in rural areas. Many patients find the service convenient, although some conditions still require an in-person examination. Doctors must {{2}} that the patient\'s identity is verified and that records are kept securely. Governments have {{3}} new rules on consultations conducted across borders, and insurers are gradually {{4}} the cost of these appointments. Professional bodies continue to debate whether the quality of care matches that of a face-to-face visit.',
    blanks: [
      { options: ['eliminate', 'eliminating', 'eliminates', 'eliminated'], answer: 'eliminates' },
      { options: ['ensures', 'ensured', 'ensure', 'ensuring'], answer: 'ensure' },
      { options: ['introduce', 'introduced', 'introducing', 'introduces'], answer: 'introduced' },
      { options: ['covers', 'covering', 'cover', 'covered'], answer: 'covering' },
    ],
  },
  {
    id: 'rwfib-036',
    type: 'rw-fill-blanks',
    title: 'Choral singing',
    difficulty: 2,
    text:
      'Choral singing has long been a social activity as well as an artistic one, and many community choirs welcome singers of every ability. Research suggests that singing in a group can {{1}} mood and reduce stress, possibly because it encourages breathing and social bonding. Choir leaders must also {{2}} the voices carefully, so that the parts remain balanced. Some conductors {{3}} the rehearsal around a single piece, while others prefer to work through several at once. Whatever approach they choose, the most rewarding performances usually {{4}} from careful preparation and trust between singers.',
    blanks: [
      { options: ['lifting', 'lifts', 'lifted', 'lift'], answer: 'lift' },
      { options: ['balanced', 'balancing', 'balances', 'balance'], answer: 'balance' },
      { options: ['organise', 'organised', 'organising', 'organises'], answer: 'organise' },
      { options: ['stems', 'stemming', 'stemmed', 'stem'], answer: 'stem' },
    ],
  },
  {
    id: 'rwfib-037',
    type: 'rw-fill-blanks',
    title: 'Suspension bridges',
    difficulty: 3,
    text:
      'Suspension bridges rely on large cables that carry the weight of the deck to towers at either end. Because the cables are {{1}} under tension, the structure can span distances that would be impossible for a simple beam. Engineers must {{2}} for wind, which can cause dangerous oscillations if the deck is not properly shaped. Modern designs use computer models to predict how the structure will respond, and sensors are often installed so that inspectors can {{3}} vibrations over time. Such monitoring has {{4}} many authorities to schedule repairs before minor wear becomes a serious defect.',
    blanks: [
      { options: ['hold', 'holds', 'holding', 'held'], answer: 'held' },
      { options: ['allowed', 'allows', 'allowing', 'allow'], answer: 'allow' },
      { options: ['tracks', 'tracked', 'tracking', 'track'], answer: 'track' },
      { options: ['encourage', 'encourages', 'encouraged', 'encouraging'], answer: 'encouraged' },
    ],
  },
  {
    id: 'rwfib-038',
    type: 'rw-fill-blanks',
    title: 'Medieval guilds',
    difficulty: 2,
    text:
      'Medieval guilds were associations of craftsmen who were responsible for {{1}} the standards of their trade and protected local markets. Apprentices often lived with a master for several years, learning skills that could {{2}} a lifetime of work. Guilds also controlled prices and limited the number of workshops in a town, a practice that {{3}} competition but sometimes discouraged innovation. As economies changed, merchants began to challenge these privileges, and many guilds gradually {{4}} much of their influence over trade.',
    blanks: [
      { options: ['set', 'settle', 'sets', 'setting'], answer: 'setting' },
      { options: ['shapes', 'shaped', 'shaping', 'shape'], answer: 'shape' },
      { options: ['limit', 'limits', 'limiting', 'limited'], answer: 'limited' },
      { options: ['losing', 'loses', 'lost', 'lose'], answer: 'lost' },
    ],
  },
  {
    id: 'rwfib-039',
    type: 'rw-fill-blanks',
    title: 'Ice hockey',
    difficulty: 1,
    exams: ['pte-core'],
    text:
      'Ice hockey is one of the most popular sports in Canada, and many children {{1}} learning to skate before they can walk confidently. Local arenas host games throughout the winter, and many families {{2}} their weekends around practices and tournaments. The sport has {{3}} its own vocabulary, from the slapshot to the penalty box. Although the game can be expensive to play, community programmes {{4}} equipment to families who cannot afford skates and helmets.',
    blanks: [
      { options: ['starting', 'starts', 'started', 'start'], answer: 'start' },
      { options: ['planned', 'plan', 'planning', 'plans'], answer: 'plan' },
      { options: ['develop', 'develops', 'developing', 'developed'], answer: 'developed' },
      { options: ['lend', 'lent', 'lends', 'lending'], answer: 'lend' },
    ],
  },
  {
    id: 'rwfib-040',
    type: 'rw-fill-blanks',
    title: 'Early maps',
    difficulty: 2,
    text:
      'Early maps were often drawn to illustrate religious beliefs or political claims rather than to show accurate distances. Over time, improvements in surveying and mathematics have {{1}} cartographers to represent the land more precisely. Projections, which {{2}} the curved surface of the Earth onto a flat sheet, always involve some distortion. Modern mapmakers must therefore {{3}} which features to emphasise, since a route map and a road atlas serve different purposes. Digital tools have made it possible to {{4}} maps instantly, which has changed how travellers navigate.',
    blanks: [
      { options: ['enables', 'enabling', 'enable', 'enabled'], answer: 'enabled' },
      { options: ['flattens', 'flattening', 'flatten', 'flattened'], answer: 'flatten' },
      { options: ['decides', 'deciding', 'decided', 'decide'], answer: 'decide' },
      { options: ['updated', 'updating', 'updates', 'update'], answer: 'update' },
    ],
  },
  {
    id: 'rwfib-041',
    type: 'rw-fill-blanks',
    title: 'Jazz improvisation',
    difficulty: 3,
    text:
      'Jazz musicians often build solos on a sequence of chords, using scales that {{1}} the harmony beneath them. Improvisation requires a deep knowledge of the repertoire, since players must {{2}} unfamiliar tunes in real time. Many performers learn by transcribing the recordings of masters, a practice that helps them {{3}} phrasing and rhythm. The tradition also encourages a conversational style, in which each soloist responds to the last. Critics sometimes {{4}} that such freedom leads to repetitive playing, although skilled improvisers are known for their originality.',
    blanks: [
      { options: ['complements', 'complemented', 'complementing', 'complement'], answer: 'complement' },
      { options: ['navigated', 'navigating', 'navigates', 'navigate'], answer: 'navigate' },
      { options: ['absorbing', 'absorbed', 'absorbs', 'absorb'], answer: 'absorb' },
      { options: ['argue', 'argued', 'arguing', 'argues'], answer: 'argue' },
    ],
  },
  {
    id: 'rwfib-042',
    type: 'rw-fill-blanks',
    title: 'Lithium batteries',
    difficulty: 3,
    text:
      'Lithium-ion batteries power everything from phones to electric buses, yet their performance {{1}} with temperature. In cold conditions, the chemical reactions inside the cell slow down, which reduces the energy the battery can {{2}}. Excessive heat, on the other hand, can {{3}} the electrolyte to degrade and shorten the battery\'s life. Manufacturers therefore install thermal management systems that keep the cells within a safe range. Researchers are also developing new materials that would make such systems less {{4}}, reducing both weight and cost.',
    blanks: [
      { options: ['vary', 'varied', 'varying', 'varies'], answer: 'varies' },
      { options: ['delivering', 'delivered', 'delivers', 'deliver'], answer: 'deliver' },
      { options: ['caused', 'causes', 'causing', 'cause'], answer: 'cause' },
      { options: ['bulk', 'bulkily', 'bulkiness', 'bulky'], answer: 'bulky' },
    ],
  },
  {
    id: 'rwfib-043',
    type: 'rw-fill-blanks',
    title: 'Coffee cultivation',
    difficulty: 3,
    text:
      'Coffee is grown in more than fifty countries, and most of the crop is cultivated in the tropics at high altitudes. The plants are sensitive to {{1}} and prolonged droughts, so growers depend on careful timing. Once harvested, the cherries must be {{2}} to remove the seeds, which are then dried and roasted. Roasting transforms the chemistry of the beans, and the length of time spent in the roaster {{3}} the final flavour. Specialty producers often {{4}} small batches, allowing them to trace each lot back to a single farm.',
    blanks: [
      { options: ['frosty', 'frosted', 'frost', 'frosting'], answer: 'frost' },
      { options: ['pulp', 'pulping', 'pulps', 'pulped'], answer: 'pulped' },
      { options: ['influenced', 'influencing', 'influences', 'influence'], answer: 'influences' },
      { options: ['roasted', 'roasts', 'roast', 'roasting'], answer: 'roast' },
    ],
  },
  {
    id: 'rwfib-044',
    type: 'rw-fill-blanks',
    title: 'Wildfire smoke',
    difficulty: 2,
    text:
      'Wildfire smoke can travel thousands of kilometres, and its fine particles {{1}} deep into the lungs. Health authorities advise people to stay indoors on heavy smoke days, and air purifiers can {{2}} the concentration of particles inside a home. Forecasters use satellite data and wind models to {{3}} where the smoke will travel next. Some researchers warn that repeated exposure may {{4}} long-term damage to the heart and blood vessels, even among people who are otherwise healthy.',
    blanks: [
      { options: ['penetrating', 'penetrated', 'penetrates', 'penetrate'], answer: 'penetrate' },
      { options: ['lowers', 'lowered', 'lowering', 'lower'], answer: 'lower' },
      { options: ['predicting', 'predicts', 'predicted', 'predict'], answer: 'predict' },
      { options: ['inflicted', 'inflicts', 'inflict', 'inflicting'], answer: 'inflict' },
    ],
  },
  {
    id: 'rwfib-045',
    type: 'rw-fill-blanks',
    title: 'Gig work',
    difficulty: 2,
    text:
      'Gig workers, such as delivery couriers and freelance designers, are paid for individual tasks rather than for fixed hours. The flexibility appeals to many people, who can choose when and how much they {{1}}. However, workers often lack the benefits to which employees are {{2}}, such as paid leave and pension contributions. Some governments have {{3}} new rules that require platforms to provide minimum pay and insurance. Critics argue that these changes may {{4}} companies from hiring independent contractors, which could reduce the number of available jobs.',
    blanks: [
      { options: ['worked', 'working', 'works', 'work'], answer: 'work' },
      { options: ['entitle', 'entitles', 'entitling', 'entitled'], answer: 'entitled' },
      { options: ['enacting', 'enact', 'enacts', 'enacted'], answer: 'enacted' },
      { options: ['deterred', 'deterring', 'deters', 'deter'], answer: 'deter' },
    ],
  },
  {
    id: 'rwfib-046',
    type: 'rw-fill-blanks',
    title: 'Smallpox',
    difficulty: 3,
    text:
      'Smallpox was one of the deadliest diseases in human history, killing millions before a global campaign finally {{1}} it in 1980. The strategy relied on identifying cases quickly and vaccinating everyone who had been in contact with them. Health workers often had to {{2}} remote villages on foot, sometimes travelling for weeks. The success of the programme shows what coordinated international action can {{3}}, although it also required sustained funding and political commitment. Few other infectious diseases have since been {{4}} in the same way.',
    blanks: [
      { options: ['eliminate', 'eliminating', 'eliminated', 'eliminates'], answer: 'eliminated' },
      { options: ['reached', 'reach', 'reaching', 'reaches'], answer: 'reach' },
      { options: ['achieve', 'achieves', 'achieved', 'achieving'], answer: 'achieve' },
      { options: ['eradicating', 'eradicate', 'eradicates', 'eradicated'], answer: 'eradicated' },
    ],
  },
  {
    id: 'rwfib-047',
    type: 'rw-fill-blanks',
    title: 'Monthly transit pass',
    difficulty: 1,
    exams: ['pte-core'],
    text:
      'Many Canadian cities offer a monthly transit pass that {{1}} unlimited rides on buses and trains. Commuters who {{2}} the pass usually save money compared with paying a fare every day. Passes are often sold at convenience stores and online, although some riders prefer to {{3}} them at a transit station. Students and seniors may be {{4}} lower prices, and proof of age or enrolment is normally required.',
    blanks: [
      { options: ['allow', 'allowed', 'allowing', 'allows'], answer: 'allows' },
      { options: ['buying', 'buy', 'buys', 'buyer'], answer: 'buy' },
      { options: ['purchased', 'purchases', 'purchasing', 'purchase'], answer: 'purchase' },
      { options: ['offered', 'offering', 'offer', 'offers'], answer: 'offered' },
    ],
  },
  {
    id: 'rwfib-048',
    type: 'rw-fill-blanks',
    title: 'Sourdough starter',
    difficulty: 1,
    text:
      'A sourdough starter is a mixture of flour and water that {{1}} wild yeast and bacteria from the air. Bakers feed the starter regularly, so that the microorganisms remain active and {{2}} the dough to rise. A healthy starter smells pleasantly sour and {{3}} bubbles after feeding. Many home bakers keep their starters for years, and some even {{4}} them to friends as a gift.',
    blanks: [
      { options: ['capture', 'capturing', 'captured', 'captures'], answer: 'captures' },
      { options: ['helping', 'helped', 'helps', 'help'], answer: 'help' },
      { options: ['produce', 'producing', 'produced', 'produces'], answer: 'produces' },
      { options: ['given', 'gave', 'gives', 'give'], answer: 'give' },
    ],
  },
  {
    id: 'rwfib-049',
    type: 'rw-fill-blanks',
    title: 'Eyewitness memory',
    difficulty: 3,
    text:
      'Eyewitness accounts can be powerful in court, yet psychologists have shown that memory is far less reliable than many people assume. Details can {{1}} over time, and the wording of a question may influence what a witness later recalls. Researchers have also found that witnesses are often {{2}} in their judgements, which can make them seem more convincing than they are. Courts have therefore begun to {{3}} procedures for identifying suspects, such as showing photos one at a time. Such reforms aim to {{4}} the risk of wrongful convictions.',
    blanks: [
      { options: ['fading', 'fades', 'faded', 'fade'], answer: 'fade' },
      { options: ['overconfidence', 'overconfidently', 'overconfident', 'overconfidences'], answer: 'overconfident' },
      { options: ['revised', 'revises', 'revising', 'revise'], answer: 'revise' },
      { options: ['reduced', 'reduces', 'reducing', 'reduce'], answer: 'reduce' },
    ],
  },
  {
    id: 'rwfib-050',
    type: 'rw-fill-blanks',
    title: 'Vertical farming',
    difficulty: 2,
    text:
      'Vertical farms grow crops in stacked layers inside warehouses, where artificial lighting and controlled climates {{1}} year-round harvests. Because the systems use little land, they can be built close to city centres, which {{2}} the distance food travels to shops. Growers must, however, {{3}} considerable amounts of electricity to power the lamps and pumps. Critics question whether the economics will {{4}} once energy prices rise, while supporters point to rapid improvements in efficiency.',
    blanks: [
      { options: ['enabled', 'enabling', 'enables', 'enable'], answer: 'enable' },
      { options: ['shortened', 'shortening', 'shorten', 'shortens'], answer: 'shortens' },
      { options: ['consuming', 'consumes', 'consumed', 'consume'], answer: 'consume' },
      { options: ['held', 'holding', 'holds', 'hold'], answer: 'hold' },
    ],
  },
  {
    id: 'rwfib-051',
    type: 'rw-fill-blanks',
    title: 'Trade winds',
    difficulty: 2,
    text:
      'Trade winds blow steadily from the northeast and southeast, and for centuries sailors have {{1}} on them to cross the oceans. Their predictable patterns helped merchants plan voyages, although ships were sometimes forced to {{2}} weeks waiting for winds to change. The winds also {{3}} the movement of ocean currents, which in turn affect rainfall and temperatures. Scientists studying climate change have {{4}} that shifts in these winds could alter storm tracks in the coming decades.',
    blanks: [
      { options: ['relying', 'rely', 'relies', 'relied'], answer: 'relied' },
      { options: ['spent', 'spends', 'spending', 'spend'], answer: 'spend' },
      { options: ['influenced', 'influencing', 'influences', 'influence'], answer: 'influence' },
      { options: ['suggest', 'suggests', 'suggesting', 'suggested'], answer: 'suggested' },
    ],
  },
  {
    id: 'rwfib-052',
    type: 'rw-fill-blanks',
    title: 'Handwriting and typing',
    difficulty: 2,
    text:
      'Some studies suggest that handwriting helps learners remember new information better than typing does. When people write by hand, they tend to {{1}} their notes in their own words, which encourages deeper processing. Typing, by contrast, often leads students to {{2}} whole sentences without reflecting on them. Teachers have {{3}} upon these findings in arguing for handwritten notes in some lessons. However, the evidence is still {{4}} in places, and researchers stress that the effect may depend on the task.',
    blanks: [
      { options: ['summarising', 'summarises', 'summarised', 'summarise'], answer: 'summarise' },
      { options: ['copy', 'copies', 'copied', 'copying'], answer: 'copy' },
      { options: ['draw', 'drawing', 'draws', 'drawn'], answer: 'drawn' },
      { options: ['mix', 'mixing', 'mixed', 'mixes'], answer: 'mixed' },
    ],
  },
  {
    id: 'rwfib-053',
    type: 'rw-fill-blanks',
    title: 'Anchoring bias',
    difficulty: 3,
    text:
      'Anchoring is a cognitive bias in which the first number a person encounters {{1}} later judgements, even when it is irrelevant. In one classic experiment, participants who were shown a high figure {{2}} higher estimates than those who saw a low one. Experts are not immune, and judges, doctors and negotiators have all been {{3}} by arbitrary starting points. Researchers recommend that decision-makers deliberately seek alternative reference points before {{4}} a conclusion.',
    blanks: [
      { options: ['influence', 'influenced', 'influencing', 'influences'], answer: 'influences' },
      { options: ['give', 'given', 'giving', 'gave'], answer: 'gave' },
      { options: ['sway', 'swaying', 'sways', 'swayed'], answer: 'swayed' },
      { options: ['reach', 'reaches', 'reached', 'reaching'], answer: 'reaching' },
    ],
  },
  {
    id: 'rwfib-054',
    type: 'rw-fill-blanks',
    title: 'National parks',
    difficulty: 1,
    exams: ['pte-core'],
    text:
      'Canada\'s national parks protect landscapes ranging from prairie grasslands to Arctic tundra, and millions of visitors {{1}} them each year. Trails are usually well marked, but hikers should always {{2}} their route before setting out. Wildlife is abundant, so visitors are advised to keep a safe distance from bears and other animals. Many parks {{3}} camping facilities, although reservations are often needed during the summer. A park pass {{4}} entry to most sites for a full year.',
    blanks: [
      { options: ['visited', 'visits', 'visiting', 'visit'], answer: 'visit' },
      { options: ['checked', 'checking', 'checks', 'check'], answer: 'check' },
      { options: ['offer', 'offered', 'offers', 'offering'], answer: 'offer' },
      { options: ['granted', 'grant', 'granting', 'grants'], answer: 'grants' },
    ],
  },
  {
    id: 'rwfib-055',
    type: 'rw-fill-blanks',
    title: 'Papyrus',
    difficulty: 2,
    text:
      'Papyrus is a material made from the pith of a reed that once grew abundantly along the Nile. Its strips were laid in crossing layers, pressed together, and then {{1}} to form a smooth writing surface. Egyptian scribes used papyrus for records, letters and religious texts, and the material was so valuable that it was often {{2}} abroad. Because papyrus is fragile in damp conditions, few complete scrolls have {{3}}, although fragments survive in dry deserts. Scholars today {{4}} the surviving texts to reconstruct daily life in the ancient world.',
    blanks: [
      { options: ['dry', 'drier', 'drying', 'dried'], answer: 'dried' },
      { options: ['ship', 'ships', 'shipping', 'shipped'], answer: 'shipped' },
      { options: ['survive', 'surviving', 'survives', 'survived'], answer: 'survived' },
      { options: ['analysed', 'analyses', 'analysing', 'analyse'], answer: 'analyse' },
    ],
  },
  {
    id: 'rwfib-056',
    type: 'rw-fill-blanks',
    title: 'Algorithmic hiring',
    difficulty: 3,
    text:
      'Employers increasingly use algorithms to {{1}} CVs and shortlist candidates for interviews. Proponents argue that software can {{2}} human bias by focusing only on skills and experience. However, if the training data reflects past hiring decisions, the system may {{3}} the same inequalities it was meant to remove. Auditing such tools is therefore essential, and regulators are {{4}} requirements for transparency in automated decisions. Applicants, meanwhile, often have little idea why a particular application was rejected.',
    blanks: [
      { options: ['screened', 'screening', 'screens', 'screen'], answer: 'screen' },
      { options: ['countering', 'counters', 'countered', 'counter'], answer: 'counter' },
      { options: ['reproduced', 'reproduces', 'reproducing', 'reproduce'], answer: 'reproduce' },
      { options: ['introduced', 'introduce', 'introduces', 'introducing'], answer: 'introducing' },
    ],
  },
  {
    id: 'rwfib-057',
    type: 'rw-fill-blanks',
    title: 'Rainforest canopy',
    difficulty: 2,
    text:
      'The canopy of a tropical rainforest, the layer formed by the crowns of tall trees, {{1}} most of the forest\'s animal life. Many species of insects, birds and monkeys rarely {{2}} the ground, finding food and shelter high above. Scientists who study this habitat often rely on rope walkways and cranes to reach the upper branches. Because the canopy {{3}} sunlight, plants on the forest floor tend to grow more slowly. Researchers are concerned that deforestation could {{4}} the delicate balance of this environment.',
    blanks: [
      { options: ['supporting', 'support', 'supported', 'supports'], answer: 'supports' },
      { options: ['left', 'leaves', 'leaving', 'leave'], answer: 'leave' },
      { options: ['blocks', 'block', 'blocked', 'blocking'], answer: 'blocks' },
      { options: ['disturbs', 'disturbed', 'disturb', 'disturbing'], answer: 'disturb' },
    ],
  },
  {
    id: 'rwfib-058',
    type: 'rw-fill-blanks',
    title: 'Renting in Canada',
    difficulty: 1,
    exams: ['pte-core'],
    text:
      'Renting an apartment in a Canadian city often requires a lease that {{1}} for a fixed term, usually one year. Landlords may ask for a security deposit, but in many provinces the deposit cannot {{2}} the first month\'s rent. Tenants should photograph the unit before moving in, so that any existing damage is {{3}}. If a repair is needed, the tenant should {{4}} the landlord in writing, which creates a clear record of the request.',
    blanks: [
      { options: ['ran', 'runs', 'running', 'run'], answer: 'runs' },
      { options: ['exceeds', 'exceeded', 'exceeding', 'exceed'], answer: 'exceed' },
      { options: ['documenting', 'documents', 'document', 'documented'], answer: 'documented' },
      { options: ['notify', 'notified', 'notifies', 'notifying'], answer: 'notify' },
    ],
  },
  {
    id: 'rwfib-059',
    type: 'rw-fill-blanks',
    title: 'Oral histories',
    difficulty: 2,
    text:
      'Oral history projects record the memories of people who have {{1}} through major events, such as wars, migrations or economic upheavals. Interviewers usually prepare a list of questions, but they must also {{2}} to unexpected stories that emerge during a conversation. Historians value these accounts because they reveal everyday experiences that written records often {{3}}. However, memory can be selective, and interviewees may {{4}} details over the decades. Careful archivists therefore compare recordings with documents to build a fuller picture.',
    blanks: [
      { options: ['living', 'lives', 'live', 'lived'], answer: 'lived' },
      { options: ['listens', 'listened', 'listening', 'listen'], answer: 'listen' },
      { options: ['overlooks', 'overlook', 'overlooking', 'overlooked'], answer: 'overlook' },
      { options: ['forgotten', 'forgot', 'forgets', 'forget'], answer: 'forget' },
    ],
  },
  {
    id: 'rwfib-060',
    type: 'rw-fill-blanks',
    title: 'Cryptography',
    difficulty: 3,
    text:
      'Modern encryption relies on mathematical problems that are easy to {{1}} in one direction but extremely hard to reverse. A key pair, consisting of a public and a private component, allows anyone to send a message that only the intended recipient can {{2}}. The security of such systems depends on the key length, since longer keys make brute-force attacks {{3}} impractical. Researchers warn that quantum computers could eventually {{4}} some of these schemes, which has prompted work on new algorithms.',
    blanks: [
      { options: ['computed', 'computing', 'computes', 'compute'], answer: 'compute' },
      { options: ['decrypts', 'decrypted', 'decrypting', 'decrypt'], answer: 'decrypt' },
      { options: ['increase', 'increased', 'increasing', 'increasingly'], answer: 'increasingly' },
      { options: ['broken', 'breaks', 'broke', 'break'], answer: 'break' },
    ],
  },
  // ---------- Reading: Fill in the Blanks, drag and drop (rfib) ----------

  {
    id: 'rfib-016',
    type: 'reading-fill-blanks',
    title: 'Lightning',
    difficulty: 1,
    text:
      'Lightning forms when ice particles collide inside a storm cloud, building up electrical charge until it is released as a sudden spark. Thunder is the sound of air heated by the discharge, which {{1}} rapidly and creates a shock wave. People caught outdoors during a storm should seek shelter in a sturdy building or a fully enclosed car, because open fields and tall trees {{2}} the risk of being struck. Although lightning can strike almost anywhere, tall structures such as towers are hit {{3}}, and many are fitted with metal rods that {{4}} the current safely into the ground.',
    answers: ['expands', 'increase', 'frequently', 'conduct'],
    distractors: ['frequent', 'increased', 'conducted'],
  },
  {
    id: 'rfib-017',
    type: 'reading-fill-blanks',
    title: 'Making tea',
    difficulty: 1,
    text:
      'Tea is the most widely consumed drink in the world after water, and its leaves come from a single species of evergreen shrub. Black, green and oolong teas differ mainly in how far the leaves are allowed to {{1}} before they are dried. Green tea is heated soon after picking to prevent the leaves from {{2}}, which keeps its colour bright. Many tea drinkers prefer to {{3}} the leaves for only a few minutes, since longer steeping can make the flavour bitter. Specialty shops often sell loose leaves in small {{4}}, allowing customers to buy only what they need.',
    answers: ['oxidise', 'darkening', 'steep', 'quantities'],
    distractors: ['freeze', 'shrink', 'dissolve'],
  },
  {
    id: 'rfib-018',
    type: 'reading-fill-blanks',
    title: 'Herd immunity',
    difficulty: 2,
    text:
      'Herd immunity occurs when a large share of a population is protected against an infectious disease, which makes it harder for the illness to {{1}} from person to person. Protection can come from vaccination or from earlier infection, although the level needed varies between diseases. Highly contagious illnesses, such as measles, require very high coverage, because each infected person can {{2}} several others. When vaccination rates fall, outbreaks may {{3}} in communities that had previously been free of the disease. Health agencies therefore track coverage closely and {{4}} campaigns in areas where uptake is low.',
    answers: ['travel', 'infect', 'reappear', 'launch'],
    distractors: ['spreads', 'vanish', 'infects'],
  },
  {
    id: 'rfib-019',
    type: 'reading-fill-blanks',
    title: 'Shipping containers',
    difficulty: 2,
    text:
      'Standardised shipping containers transformed global trade by making it cheaper to {{1}} goods across oceans and continents. Before their introduction, cargo had to be loaded and unloaded by hand, which was slow and often {{2}} damage. Containers can now be lifted directly from ships onto trucks or trains, so the process takes only a few hours. Ports around the world {{3}} cranes and large storage yards to handle the boxes efficiently. Economists often cite the container as a key {{4}} behind the growth of international supply chains.',
    answers: ['transport', 'caused', 'install', 'innovation'],
    distractors: ['transportation', 'wrapping', 'bargaining'],
  },
  {
    id: 'rfib-020',
    type: 'reading-fill-blanks',
    title: 'Spider silk',
    difficulty: 2,
    text:
      'Spider silk is remarkably strong for its weight, and some types can stretch to several times their original length without {{1}}. Researchers have tried to {{2}} the structure of the material in the laboratory, but producing silk at industrial scale has proved difficult. Spiders are also territorial, so farming them in large numbers is impractical. Instead, scientists have inserted silk genes into bacteria and yeast, which then {{3}} the protein in fermentation tanks. Such methods could eventually {{4}} manufacturers with lightweight materials for surgery, clothing and aircraft.',
    answers: ['breaking', 'replicate', 'produce', 'supply'],
    distractors: ['breaks', 'replicated', 'hunt'],
  },
  {
    id: 'rfib-021',
    type: 'reading-fill-blanks',
    title: 'The Silk Road',
    difficulty: 2,
    text:
      'The Silk Road was not a single road but a network of routes that {{1}} China with the Mediterranean. Merchants carried silk, spices and precious metals across deserts and mountain passes, often over many months. Goods changed hands several times along the way, so that buyers rarely knew the {{2}} of what they purchased. Alongside trade, the routes {{3}} the exchange of ideas, including paper-making, religious beliefs and new musical instruments. Over time, the growth of sea routes {{4}} the importance of these overland paths.',
    answers: ['connected', 'origin', 'facilitated', 'diminished'],
    distractors: ['connecting', 'shipping', 'ignored'],
  },
  {
    id: 'rfib-022',
    type: 'reading-fill-blanks',
    title: 'Bird migration',
    difficulty: 2,
    text:
      'Many birds migrate thousands of kilometres each year, navigating by the position of the sun, the stars and the Earth\'s magnetic field. Young birds often {{1}} the route without any guidance from adults, which suggests that the instinct is inherited. Some species, such as the Arctic tern, travel between the poles and so experience more daylight than any other animal. Migration is physically demanding, and birds must {{2}} fat reserves before setting out. Climate change has {{3}} the timing of arrivals at some breeding grounds, leaving certain species out of step with the insects they eat. Conservationists are working to {{4}} the stopover sites that birds rely on during their journeys.',
    answers: ['follow', 'build', 'altered', 'protect'],
    distractors: ['followed', 'alter', 'flies'],
  },
  {
    id: 'rfib-023',
    type: 'reading-fill-blanks',
    title: 'Echolocation in bats',
    difficulty: 2,
    text:
      'Bats are the only mammals capable of sustained flight, and many species use echolocation to {{1}} insects in total darkness. They emit high-pitched calls and listen for the echoes that {{2}} from nearby objects. Far from being blind, most bats have eyes that work perfectly well, although they rely on sound for hunting. Several species {{3}} enormous colonies in caves, where thousands of individuals roost together. Because bats eat large quantities of insects, they provide a valuable {{4}} to farmers, saving them money on pesticides.',
    answers: ['locate', 'bounce', 'form', 'service'],
    distractors: ['locating', 'bounces', 'serve'],
  },
  {
    id: 'rfib-024',
    type: 'reading-fill-blanks',
    title: 'Rare earth metals',
    difficulty: 3,
    text:
      'Rare earth elements are a group of seventeen metals that are essential for magnets, batteries and many electronic devices. Despite their name, they are not especially scarce in the Earth\'s crust, but deposits rich enough to mine are {{1}} concentrated in only a few regions. Extracting and separating these metals is a complex process that generates large volumes of waste, and it often requires strong acids and high {{2}}. Governments increasingly view supply as a strategic {{3}}, and several countries have begun to {{4}} domestic processing plants. Recycling old electronics may also help, although the technology is still expensive.',
    answers: ['unevenly', 'temperatures', 'concern', 'build'],
    distractors: ['adjacent', 'consumers', 'brew'],
  },
  {
    id: 'rfib-025',
    type: 'reading-fill-blanks',
    title: 'The placebo effect',
    difficulty: 3,
    text:
      'The placebo effect describes improvements in health that occur after a patient receives an inactive treatment, such as a sugar pill. Such responses are real, yet they are not caused by the substance itself. Researchers believe that expectation, conditioning and the ritual of treatment can {{1}} the brain\'s response to pain and stress. Clinical trials therefore compare new drugs with placebos and with existing treatments, so that the true effect of a medicine can be {{2}}. Ethical debates continue over whether doctors should use placebos openly, since patients who {{3}} they are being given an inert treatment may respond differently. Even so, the effect remains a powerful reminder of the {{4}} between mind and body.',
    answers: ['influence', 'isolated', 'know', 'connection'],
    distractors: ['influences', 'isolation', 'connected'],
  },
  {
    id: 'rfib-026',
    type: 'reading-fill-blanks',
    title: 'Aquifers',
    difficulty: 3,
    text:
      'Aquifers are underground layers of rock or sediment that {{1}} large quantities of water, and many cities depend on them for drinking supplies. Water seeps slowly through the ground to refill them, a process that can take decades or even centuries. Over-pumping can cause the land above to {{2}}, creating cracks in buildings and roads. Saltwater from the sea may also {{3}} into coastal aquifers when freshwater is removed too quickly. Protecting these reserves therefore requires careful planning, including limits on extraction and the {{4}} of recharge zones from development.',
    answers: ['store', 'subside', 'intrude', 'protection'],
    distractors: ['stores', 'subsided', 'intruded'],
  },
  {
    id: 'rfib-027',
    type: 'reading-fill-blanks',
    title: 'Phases of the Moon',
    difficulty: 3,
    text:
      'The Moon takes about 27 days to orbit the Earth, but the cycle of its phases lasts closer to 29 days. The difference arises because the Earth also moves around the Sun during that time, so the Moon must travel further to {{1}} the same alignment. Lunar eclipses occur only when the Earth lies between the Sun and the Moon, and they are visible from across the {{2}} side of the planet. Because the Moon\'s rotation is locked to its orbit, the same face is always {{3}} towards us. Astronomers have used lunar observations for centuries to {{4}} calendars and track the seasons.',
    answers: ['regain', 'night', 'turned', 'set'],
    distractors: ['regains', 'calendar', 'lunar'],
  },
  {
    id: 'rfib-028',
    type: 'reading-fill-blanks',
    title: 'Glassblowing',
    difficulty: 2,
    text:
      'Glassblowing is an ancient craft in which a craftsman gathers molten glass on a long pipe and uses breath to {{1}} it into the desired shape. The process demands skill, because the glass must be kept at a high temperature while the artisan works quickly. Between steps, the piece is often returned to a furnace to {{2}} it, which prevents cracks from forming as it cools. Modern studios use the same methods, although many also {{3}} with colour and texture to create decorative objects. Some artists {{4}} their work to large-scale installations, where light passing through the glass creates striking effects.',
    answers: ['blow', 'reheat', 'experiment', 'expand'],
    distractors: ['blowing', 'reheating', 'experimental'],
  },
  {
    id: 'rfib-029',
    type: 'reading-fill-blanks',
    title: 'Bioluminescence',
    difficulty: 3,
    text:
      'Bioluminescence is the production of light by living organisms, a phenomenon seen in fireflies, deep-sea fish and some fungi. The light results from a chemical reaction in which a molecule called luciferin is {{1}} by an enzyme. Many marine creatures use this glow to attract prey, confuse predators or {{2}} with others of their species. Some deep-sea squid release clouds of luminous mucus when threatened, a tactic that can {{3}} attackers long enough to escape. Researchers are now using bioluminescent genes as markers in medicine, because the glow can {{4}} the activity of cells in real time.',
    answers: ['oxidised', 'communicate', 'distract', 'reveal'],
    distractors: ['oxidising', 'communicated', 'distractor'],
  },
  {
    id: 'rfib-030',
    type: 'reading-fill-blanks',
    title: 'Fjords',
    difficulty: 2,
    text:
      'Fjords are long, narrow inlets of the sea, carved out by glaciers that once {{1}} through mountain valleys. As the ice retreated, the valleys filled with seawater, leaving steep walls and deep basins. Many fjords are much deeper than the open ocean nearby, because the ice gouged the rock more {{2}} than the sea floor. Their sheltered waters support rich ecosystems, and salmon often {{3}} the rivers that flow into them. Tourists visit fjords to admire the {{4}} cliffs, but local communities also depend on fishing and aquaculture.',
    answers: ['flowed', 'deeply', 'ascend', 'towering'],
    distractors: ['flowing', 'deep', 'towers'],
  },
  {
    id: 'rfib-031',
    type: 'reading-fill-blanks',
    title: 'Mycorrhizal fungi',
    difficulty: 3,
    text:
      'Mycorrhizal fungi form partnerships with the roots of most land plants, and the relationship benefits both partners. The fungal threads, called hyphae, extend far beyond the root zone and {{1}} water and nutrients such as phosphorus from the soil. In return, the plant supplies the fungus with sugars produced through photosynthesis. Some researchers believe these networks can even {{2}} signals between trees, warning neighbours of insect attacks. Such partnerships are sensitive to soil disturbance, so intensive ploughing can {{3}} the networks that support crops. Restoring them is therefore an important goal for farmers seeking to {{4}} the need for chemical fertilisers.',
    answers: ['absorb', 'transmit', 'disrupt', 'reduce'],
    distractors: ['absorbed', 'transmits', 'disrupted'],
  },
  {
    id: 'rfib-032',
    type: 'reading-fill-blanks',
    title: 'Sunscreen',
    difficulty: 1,
    text:
      'Sunscreen protects the skin from ultraviolet radiation, which can cause sunburn and increase the risk of skin cancer. Products are rated by sun protection factor, or SPF, which indicates how well they {{1}} against ultraviolet B rays. Experts recommend applying a generous layer about fifteen minutes before going outside, and {{2}} it every two hours or after swimming. Clouds do not {{3}} all ultraviolet light, so protection is needed even on overcast days. Sunscreen should be stored in a cool place, because high temperatures can {{4}} its effectiveness.',
    answers: ['protect', 'reapplying', 'block', 'reduce'],
    distractors: ['protects', 'applied', 'blocked'],
  },
  {
    id: 'rfib-033',
    type: 'reading-fill-blanks',
    title: 'Adopting a pet',
    difficulty: 1,
    text:
      'Adopting a pet from a shelter can be a rewarding decision, and many animals are already trained, vaccinated and neutered. Staff usually {{1}} prospective owners about the animal\'s temperament and needs before the adoption is completed. Potential adopters are often asked to {{2}} a short questionnaire about their home and daily routine. Some shelters offer trial periods, which allow families to see how a dog or cat {{3}} in the household. Before bringing an animal home, owners should {{4}} the costs of food, insurance and veterinary care.',
    answers: ['advise', 'complete', 'adjusts', 'consider'],
    distractors: ['advised', 'completed', 'adjust'],
  },
  {
    id: 'rfib-034',
    type: 'reading-fill-blanks',
    title: 'Snow leopards',
    difficulty: 1,
    text:
      'Snow leopards live in the mountains of Central and South Asia, where they are {{1}} to cold, rocky terrain at high altitudes. Their thick fur and broad paws help them {{2}} across deep snow, and their long tails provide balance on steep slopes. Because they are rarely seen, scientists often study them through camera traps. Hunting pressure and habitat loss have {{3}} their population in many areas. Conservation groups now work with herders to {{4}} conflicts over livestock, which can encourage retaliation against the animals.',
    answers: ['adapted', 'move', 'reduced', 'reduce'],
    distractors: ['adapt', 'moves', 'reduces'],
  },
  {
    id: 'rfib-035',
    type: 'reading-fill-blanks',
    title: 'The bicycle',
    difficulty: 2,
    text:
      'The bicycle has changed a great deal since its invention in the nineteenth century, when early models had enormous front wheels and little comfort. Safety bicycles, with two wheels of similar size and a chain drive, {{1}} the design we use today. These machines made cycling accessible to a wider public, and by the 1890s, the bicycle was {{2}} popular across Europe and North America. Women in particular found that cycling offered new freedom, and many campaigners {{3}} the bicycle as a symbol of independence. Today, cycling is {{4}} for commuting, leisure and exercise in cities around the world.',
    answers: ['established', 'widely', 'regarded', 'used'],
    distractors: ['establishment', 'widen', 'regards'],
  },
  {
    id: 'rfib-036',
    type: 'reading-fill-blanks',
    title: 'Electric scooters',
    difficulty: 2,
    text:
      'Electric scooters have become a common sight in many cities, offering short journeys without the need for a car. Riders {{1}} the scooter by pushing off the ground and then activating a throttle. Operators often use smartphone apps to {{2}} the vehicles, allowing users to find and unlock them quickly. Although the scooters are convenient, councils have struggled to {{3}} rules for parking them safely on busy pavements. Some cities now limit the number of operators, which can help to {{4}} the cluttering of public spaces.',
    answers: ['start', 'manage', 'enforce', 'prevent'],
    distractors: ['starting', 'managed', 'enforced'],
  },
  {
    id: 'rfib-037',
    type: 'reading-fill-blanks',
    title: 'Terroir and vines',
    difficulty: 2,
    text:
      'Winemakers often speak of terroir, the combination of soil, climate and topography that gives a wine its distinctive character. Vines planted on well-drained slopes tend to {{1}} less water, which concentrates the sugars and flavours in the grapes. Growers also choose rootstocks, since some varieties are better suited to particular {{2}}. Many vineyards now use sensors to {{3}} soil moisture and temperature throughout the season. Because the climate is changing, some producers are planting new varieties to {{4}} the risk of unseasonal frost and drought.',
    answers: ['receive', 'conditions', 'monitor', 'lower'],
    distractors: ['received', 'conditioned', 'freeze'],
  },
  {
    id: 'rfib-038',
    type: 'reading-fill-blanks',
    title: 'Sea turtles',
    difficulty: 2,
    text:
      'Sea turtles spend most of their lives in the ocean, but females return to the beaches where they hatched to {{1}} their eggs in the sand. Each nest may contain more than a hundred eggs, and the hatchlings must dig their way to the surface and {{2}} the sea without help. Artificial lights can confuse them, since the young turtles orient towards the brightest horizon, which is often {{3}} from the sea. Many coastal communities now {{4}} volunteers to protect nests and guard beaches at night.',
    answers: ['lay', 'reach', 'away', 'recruit'],
    distractors: ['laid', 'reached', 'towards'],
  },
  {
    id: 'rfib-039',
    type: 'reading-fill-blanks',
    title: 'River deltas',
    difficulty: 2,
    text:
      'A river delta forms where a river deposits sediment as it flows into a lake or sea. Over thousands of years, the accumulated silt builds a fan-shaped landmass criss-crossed by channels. Deltas are often extremely fertile, which explains why many early civilisations {{1}} around them. However, deltas are also vulnerable, because they are {{2}} sinking as sediment is compacted and groundwater is pumped. Rising seas can then {{3}} low-lying farmland with salt water. Engineers sometimes build levees to {{4}} the land from floods, although these barriers can trap sediment and slow natural growth.',
    answers: ['settled', 'gradually', 'flood', 'protect'],
    distractors: ['settling', 'gradual', 'protected'],
  },
  {
    id: 'rfib-040',
    type: 'reading-fill-blanks',
    title: 'Olive oil',
    difficulty: 2,
    text:
      'Olive oil is produced by pressing the fruit of the olive tree, and the quality depends on how quickly the olives are processed after harvest. Extra virgin oil is extracted without heat or chemicals, which helps to {{1}} its natural flavour and aroma. Lower grades are often {{2}} by heat or solvents, and they tend to taste less fresh. Consumers should check labels carefully, since some products sold as pure olive oil are {{3}} with cheaper oils. Storing the bottle away from light and heat can also {{4}} the oil from going rancid.',
    answers: ['preserve', 'refined', 'blended', 'prevent'],
    distractors: ['preserves', 'refining', 'blend'],
  },
  {
    id: 'rfib-041',
    type: 'reading-fill-blanks',
    title: 'Tsunami warnings',
    difficulty: 2,
    text:
      'A tsunami is a series of large waves caused by an earthquake, landslide or volcanic eruption beneath or near the ocean. Unlike ordinary waves, a tsunami can travel across an entire ocean basin at great speed, and its wavelength may be hundreds of kilometres. In deep water, the waves may pass unnoticed by ships, but they {{1}} dramatically as they approach the shore. Warning systems use sensors on the seabed to detect pressure changes and {{2}} alerts to coastal communities. Evacuation routes are usually {{3}} in advance, so that residents can reach higher ground quickly. Scientists continue to study how such events can be {{4}} more accurately.',
    answers: ['grow', 'issue', 'marked', 'predicted'],
    distractors: ['growing', 'issues', 'mark'],
  },
  {
    id: 'rfib-042',
    type: 'reading-fill-blanks',
    title: 'Nanotechnology',
    difficulty: 3,
    text:
      'Nanotechnology involves manipulating matter at the scale of billionths of a metre, where material properties can differ sharply from those of bulk substances. Gold particles of this size, for instance, may appear red or purple rather than yellow. Engineers have exploited such effects to {{1}} sunscreens that remain transparent on the skin, and to design coatings that repel water. Critics, however, caution that the long-term health and environmental impact of tiny particles is still poorly {{2}}. Regulators are therefore considering stricter testing before products containing nanoscale materials are {{3}} to the public. Researchers hope that careful oversight will allow the field to {{4}} its benefits while limiting risks.',
    answers: ['develop', 'understood', 'released', 'realise'],
    distractors: ['developed', 'understand', 'releasing'],
  },
  {
    id: 'rfib-043',
    type: 'reading-fill-blanks',
    title: 'Making chocolate',
    difficulty: 3,
    text:
      'Cocoa beans grow in pods on small trees, and the seeds must be fermented and dried before they can be {{1}}. Fermentation develops the precursors of chocolate flavour, which would otherwise remain {{2}} and bitter. Chocolate makers then roast, grind and conch the mass, a long stage that smooths the texture and {{3}} harsh notes. Dark chocolate is often valued for its intensity, while milk chocolate contains added sugar and {{4}}. The proportion of cocoa solids in a bar is usually printed on the packaging.',
    answers: ['processed', 'undeveloped', 'softens', 'dairy'],
    distractors: ['process', 'softened', 'refine'],
  },
  {
    id: 'rfib-044',
    type: 'reading-fill-blanks',
    title: 'Hospital triage',
    difficulty: 3,
    text:
      'Triage is the process of sorting patients by the urgency of their condition, so that the most serious cases are treated first. Nurses use simple criteria, such as breathing rate and level of consciousness, to {{1}} each patient. Because waiting rooms can become crowded, triage must be carried out quickly and {{2}} repeated whenever a patient\'s condition changes. Staff are trained to recognise subtle signs of deterioration that might otherwise be {{3}}. Hospitals are increasingly {{4}} digital systems that display patients\' priority and expected waiting times.',
    answers: ['categorise', 'regularly', 'overlooked', 'adopting'],
    distractors: ['categorised', 'regular', 'adopt'],
  },
  {
    id: 'rfib-045',
    type: 'reading-fill-blanks',
    title: 'Deep-sea mining',
    difficulty: 3,
    text:
      'Deep-sea mining would extract metal-rich nodules from the ocean floor, which lies thousands of metres below the surface. Supporters argue that the industry could {{1}} the supply of metals needed for batteries, provided the operations are carefully regulated. Critics, however, warn that the machines could {{2}} fragile habitats that have never been studied in detail. Sediment plumes produced by mining may also {{3}} filter-feeding animals and spread over vast distances. International bodies are still negotiating the rules, and some nations have {{4}} for a moratorium until the environmental risks are better understood.',
    answers: ['boost', 'damage', 'smother', 'called'],
    distractors: ['boosted', 'damaged', 'smothered'],
  },
  {
    id: 'rfib-046',
    type: 'reading-fill-blanks',
    title: 'Antarctic research',
    difficulty: 1,
    text:
      'Research stations in Antarctica are among the most isolated workplaces on Earth, and staff may spend months without {{1}} family. Supplies must be shipped in during the brief summer, since winter storms make {{2}} almost impossible. Scientists study everything from ice cores to the behaviour of penguins, and the data they collect {{3}} our understanding of climate history. Living conditions are demanding, so teams must {{4}} careful attention to diet, exercise and mental health.',
    answers: ['seeing', 'landings', 'enhance', 'pay'],
    distractors: ['sees', 'landed', 'pays'],
  },
  {
    id: 'rfib-047',
    type: 'reading-fill-blanks',
    title: 'Making cheese',
    difficulty: 2,
    text:
      'Cheese is made by coagulating milk, separating the solid curds from the liquid whey, and then pressing and ageing the curds. The type of bacteria and enzymes used during this process {{1}} the flavour and texture of the finished cheese. Hard varieties are pressed more firmly, so they lose more moisture and become {{2}} than soft cheeses. Ageing allows complex flavours to {{3}}, and some cheeses are left in cool caves for months or even years. Producers often {{4}} their recipes for generations, passing methods from one family to the next.',
    answers: ['determines', 'drier', 'develop', 'guard'],
    distractors: ['determined', 'dry', 'developed'],
  },
  {
    id: 'rfib-048',
    type: 'reading-fill-blanks',
    title: 'Earthworms',
    difficulty: 1,
    text:
      'Earthworms may seem humble, but they play a vital role in maintaining healthy soil. As they tunnel through the ground, they {{1}} air into compacted layers and help rainwater to drain away. Their droppings, known as castings, are rich in nutrients that plants can readily {{2}}. Gardeners often encourage earthworms by adding compost and avoiding heavy {{3}}. Some species live close to the surface, while others burrow deeper, and both types help to {{4}} organic matter with the soil.',
    answers: ['draw', 'absorb', 'ploughing', 'mix'],
    distractors: ['drew', 'absorption', 'ploughed'],
  },
  {
    id: 'rfib-049',
    type: 'reading-fill-blanks',
    title: 'Tidal stream energy',
    difficulty: 2,
    text:
      'Tidal stream turbines harness the movement of water in narrow channels, where currents can be especially strong. Unlike wind turbines, they are fully {{1}} underwater, which makes them harder to inspect and maintain. Because seawater is dense and the flow is predictable, tidal energy can provide a steady supply of power, {{2}} of the timing of the tides. Developers must, however, {{3}} the effects of turbines on fish and marine mammals. Early projects have {{4}} high costs, so governments often offer grants to encourage investment.',
    answers: ['submerged', 'regardless', 'assess', 'faced'],
    distractors: ['submerge', 'regardful', 'assessed'],
  },
  {
    id: 'rfib-050',
    type: 'reading-fill-blanks',
    title: 'Minority languages',
    difficulty: 3,
    text:
      'Language is closely tied to personal and collective identity, and many minority communities regard their mother tongue as a core part of who they are. When a language falls out of everyday use, the loss can {{1}} far beyond vocabulary, affecting folklore, kinship terms and local knowledge. Revitalisation efforts often rely on schools, broadcasting and online media to {{2}} younger speakers. Linguists stress that such projects work best when communities themselves {{3}} the goals and methods. Even so, success is never guaranteed, since economic pressures and migration can {{4}} the number of fluent speakers.',
    answers: ['extend', 'attract', 'define', 'reduce'],
    distractors: ['extended', 'attractive', 'defined'],
  },
];
