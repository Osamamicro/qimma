import type { Item } from '@/core';

/** v0.2 bank growth to 1,000 items (backlog item 7). Original content only (ADR-002). */
export const speakingBankCItems: Item[] = [
  // ---------- Re-tell Lecture ----------
  {
    id: 'rl-010',
    type: 'retell-lecture',
    title: 'Language extinction',
    difficulty: 1,
    voice: 'female',
    lecture:
      'Good afternoon. In today’s lecture we look at language extinction. Linguists estimate that around half of the world’s roughly seven thousand languages could disappear before the end of this century. A language dies when its last fluent speakers stop using it, often because children are raised in a dominant national language instead. The causes are usually social rather than linguistic. Speakers may move to cities for work, or they may feel that their mother tongue has little value at school. Losing a language means losing much more than vocabulary. Many small communities store knowledge about local plants, weather and oral history in their languages. Some groups are working to reverse the trend. They run schools where children learn through the traditional language, publish dictionaries and record elders telling stories. Such efforts can succeed when the community itself is in charge.',
    keyPoints: [
      { label: 'Topic', keywords: ['language extinction', 'extinction', 'languages', 'disappear', 'die out'] },
      { label: 'Causes', keywords: ['cities', 'move', 'dominant', 'social', 'mother tongue'] },
      { label: 'Loss of knowledge', keywords: ['plants', 'knowledge', 'oral history', 'stories'] },
      { label: 'Revival efforts', keywords: ['schools', 'dictionaries', 'record', 'elders', 'revive', 'revival'] },
    ],
    modelAnswer:
      'The lecture was about language extinction, which happens when the last fluent speakers of a language stop using it. The speaker estimated that half of the world’s languages could disappear this century. The main causes are social, such as moving to cities or children learning a dominant national language. When a language is lost, communities also lose knowledge about local plants and oral history. To revive languages, some groups run schools, publish dictionaries and record elders’ stories, provided that the community leads the effort.',
  },
  {
    id: 'rl-011',
    type: 'retell-lecture',
    title: 'The placebo effect',
    difficulty: 2,
    voice: 'male',
    lecture:
      'In this psychology lecture we examine the placebo effect. A placebo is an inactive treatment, such as a sugar pill or a saline injection, yet patients often report real improvements after receiving one. Researchers once dismissed this as imagination, but brain imaging now shows that expectations can trigger the release of natural painkillers called endorphins. The strength of the effect depends on context. Larger pills, a higher price and a confident doctor all tend to increase the response. Placebos are therefore important in clinical trials, where a control group receives an inactive treatment so that researchers can separate the drug’s true effect from the expectation effect. There are ethical limits, however. Doctors should not deceive patients by prescribing placebos without consent, since honesty is central to the relationship. Some clinics now experiment with open-label placebos, which are openly labelled as inactive, and early results suggest they can still relieve some symptoms.',
    keyPoints: [
      { label: 'Definition', keywords: ['placebo', 'inactive', 'sugar pill', 'inactive treatment'] },
      { label: 'Expectation and the brain', keywords: ['expectations', 'endorphins', 'brain', 'painkillers', 'imagination'] },
      { label: 'Factors that strengthen it', keywords: ['larger pills', 'price', 'confident', 'context', 'doctor'] },
      { label: 'Use in clinical trials', keywords: ['clinical trials', 'control group', 'trials', 'true effect'] },
      { label: 'Ethical limits', keywords: ['consent', 'deceive', 'honesty', 'ethical', 'open-label'] },
    ],
    modelAnswer:
      'The lecture explained the placebo effect, which occurs when an inactive treatment, such as a sugar pill, still produces real improvements. Brain research shows that expectations can release natural painkillers called endorphins. The effect is stronger with larger pills, a higher price or a confident doctor. Researchers use placebos as a control group in clinical trials to separate a drug’s true effect from expectation. However, giving placebos without consent would be unethical and would damage trust, although open-label placebos, openly labelled as inactive, are being tested.',
  },
  {
    id: 'rl-012',
    type: 'retell-lecture',
    title: 'Bilingualism and the brain',
    difficulty: 2,
    voice: 'female',
    lecture:
      'Good morning. Today’s topic is bilingualism and the brain. For many years, researchers assumed that learning two languages would confuse children and delay their development. Recent studies have challenged that view. Bilingual children often perform better on tasks that require them to switch attention, ignore distractions and follow changing rules. The explanation lies in executive function. When a bilingual speaker uses one language, the other stays active, so the brain must constantly suppress it. This practice seems to strengthen the control systems that manage attention. However, the advantages are smaller than early headlines suggested. Several large studies have found little difference between bilingual and monolingual adults on the same tests. Bilingualism also does not prevent dementia, although some researchers report that symptoms appear a few years later. The lecturer concluded that bilingualism is valuable for communication and identity, and that claims about intelligence should be treated with caution.',
    keyPoints: [
      { label: 'Topic', keywords: ['bilingualism', 'bilingual', 'two languages'] },
      { label: 'Mechanism', keywords: ['suppress', 'active', 'executive function'] },
      { label: 'Attention advantage', keywords: ['attention', 'switch', 'distractions', 'control'] },
      { label: 'Smaller benefits', keywords: ['little difference', 'smaller', 'monolingual'] },
      { label: 'Dementia and conclusion', keywords: ['dementia', 'caution', 'communication', 'identity'] },
    ],
    modelAnswer:
      'The lecture was about bilingualism and the brain. The speaker explained that a bilingual person keeps both languages active, so the brain must suppress one while speaking the other, which trains executive function. This constant control seems to strengthen attention and the ability to switch between tasks. However, the benefits are smaller than early headlines suggested, and adults show little difference from monolingual people on many tests. The lecturer added that bilingualism does not prevent dementia, and that claims about intelligence need caution. Bilingualism remains valuable for communication and identity.',
  },
  {
    id: 'rl-013',
    type: 'retell-lecture',
    title: 'Volcanic soil',
    difficulty: 1,
    voice: 'male',
    lecture:
      'Good morning, everyone. This week’s geology lecture looks at volcanoes and soil. Volcanic eruptions are destructive, but they also leave behind some of the most fertile soils on Earth. Lava and ash break down over time into minerals such as potassium, phosphorus and calcium, which plants need to grow. This is why farmers in regions near active volcanoes often grow coffee, fruit and vegetables on the slopes. The soil is usually loose and well drained, so water does not sit around the roots. However, the benefits take a long time to develop. Fresh ash can be too acidic or too compact, and it may take decades or even centuries for weathering to produce rich soil. In the short term, heavy ash can bury crops and poison livestock with fluorine. Scientists therefore recommend that farmers wait for the surface to stabilise before replanting. Overall, volcanic soil is a valuable resource, but it rewards patience.',
    keyPoints: [
      { label: 'Topic', keywords: ['volcanoes', 'volcanic', 'soil'] },
      { label: 'Nutrients', keywords: ['minerals', 'potassium', 'phosphorus', 'fertile', 'nutrients'] },
      { label: 'Crops grown', keywords: ['coffee', 'fruit', 'vegetables', 'crops', 'farmers'] },
      { label: 'Time to develop', keywords: ['decades', 'centuries', 'weathering', 'patience', 'long time'] },
      { label: 'Short-term harm', keywords: ['ash', 'bury', 'livestock', 'fluorine', 'poison'] },
    ],
    modelAnswer:
      'The lecture was about volcanic soil. The speaker explained that volcanic material eventually breaks down into minerals such as potassium and phosphorus, which make the soil fertile. This is why farmers near volcanoes grow coffee, fruit and vegetables. However, it can take decades or even centuries for weathering to create rich soil. In the short term, heavy ash can bury crops and poison livestock. Scientists advise farmers to wait for the surface to stabilise before replanting, because the land rewards patience.',
  },
  {
    id: 'rl-014',
    type: 'retell-lecture',
    title: 'Nudges and choice',
    difficulty: 3,
    voice: 'male',
    lecture:
      'In this session on behavioural economics, we consider nudges, which are changes to the way choices are presented that steer people towards certain decisions without removing their freedom to choose. The classic example is the default option. When employees are automatically enrolled in a pension plan, participation rises sharply, even though anyone can opt out with a simple form. Nudges draw on several well-documented biases. People tend to stick with the status quo, they overweight vivid information and they find it hard to compare complicated options. Policymakers have used this insight in organ donation, energy bills and food labelling. Critics, however, raise two objections. First, nudges may be ineffective when people are strongly motivated against the intended outcome. Second, the approach can seem manipulative, especially when governments do not disclose how they are designing choices. Supporters reply that every choice architecture influences behaviour anyway, so transparent nudges are preferable to hidden ones. The debate therefore centres on accountability rather than on whether nudges work at all.',
    keyPoints: [
      { label: 'Definition', keywords: ['nudges', 'nudge', 'freedom to choose', 'choices presented'] },
      { label: 'Default options', keywords: ['default', 'automatically enrolled', 'pension', 'opt out'] },
      { label: 'Psychological biases', keywords: ['status quo', 'biases', 'vivid', 'compare'] },
      { label: 'Applications', keywords: ['organ donation', 'energy bills', 'food labelling', 'policymakers'] },
      { label: 'Criticism and accountability', keywords: ['manipulative', 'ineffective', 'accountability', 'objections'] },
    ],
    modelAnswer:
      'The lecture explained nudges, which are changes in how choices are presented that guide people without removing their freedom to choose. A default option, such as automatic enrolment in a pension, is the classic example, and it can raise participation sharply. Nudges work because of biases: people prefer the status quo, respond to vivid information and find complicated options hard to compare. Policymakers have applied nudges to organ donation, energy bills and food labelling. Critics argue that they can be ineffective or manipulative, so the speaker concluded that accountability matters more than whether nudges work.',
  },
  {
    id: 'rl-015',
    type: 'retell-lecture',
    title: 'The Bauhaus school',
    difficulty: 2,
    voice: 'female',
    lecture:
      'Good afternoon, and welcome to our architecture and design lecture. Today we focus on the Bauhaus, a German school founded in Weimar in 1919 by the architect Walter Gropius. Its aim was to unite fine art, craft and industrial production, so that students would design objects that were both beautiful and practical. The school taught everything from weaving and metalwork to typography. Teachers encouraged students to start with basic shapes, colours and materials before moving on to complex projects. The Bauhaus was closed by the Nazi government in 1933, and many of its teachers emigrated to the United States, where they influenced design education for decades. Today we see its legacy in simple furniture, sans-serif typefaces and modernist housing blocks. Critics, however, argue that the school’s ideal of cheap, mass-produced goods was not always achieved, because many Bauhaus pieces were expensive, handmade prototypes. The lecturer concluded that the most lasting contribution was the belief that good design should be available to everyone.',
    keyPoints: [
      { label: 'Topic', keywords: ['bauhaus', 'school', 'design'] },
      { label: 'Founding', keywords: ['weimar', '1919', 'gropius', 'founded'] },
      { label: 'Aims', keywords: ['fine art', 'craft', 'industrial', 'practical', 'unite'] },
      { label: 'Teaching', keywords: ['weaving', 'metalwork', 'typography', 'basic shapes', 'colours'] },
      { label: 'Legacy and criticism', keywords: ['furniture', 'emigrated', 'legacy', 'expensive', 'mass-produced'] },
    ],
    modelAnswer:
      'The lecture was about the Bauhaus, a German design school. The speaker explained that it was founded in Weimar in 1919 by Gropius, and that it aimed to unite fine art, craft and industry. Students studied weaving, metalwork and typography, starting from basic shapes and colours. The Nazi government closed the school in 1933, and many teachers emigrated, spreading its ideas abroad. Its legacy appears in furniture and modernist buildings. Critics argue that its mass-produced goods were often expensive, so the goal of affordable design was not fully achieved.',
  },
  {
    id: 'rl-016',
    type: 'retell-lecture',
    title: 'Antibiotic resistance',
    difficulty: 3,
    voice: 'male',
    lecture:
      'Today’s lecture addresses antibiotic resistance, which is widely regarded as one of the most serious threats to modern medicine. Bacteria evolve constantly. When an antibiotic kills most of a population, the few survivors may carry genetic changes that let them tolerate the drug, and they multiply rapidly once their competitors are gone. Resistance can also spread horizontally, as bacteria exchange plasmids, small rings of DNA that carry resistance genes between species. Human behaviour accelerates the process. Doctors sometimes prescribe antibiotics for viral infections, which they cannot treat, and patients often stop courses early, leaving stronger bacteria behind. Agriculture contributes too, since large quantities of antibiotics are given to healthy livestock to promote growth. Surgery, chemotherapy and childbirth could all become far more dangerous if effective drugs disappear. Researchers are responding with several strategies. They are developing new classes of antibiotics, testing bacteriophages that attack specific bacteria, and improving rapid diagnostic tests so that narrower drugs can be chosen. Yet the lecturer warned that the pipeline of new drugs is thin, because antibiotics are cheap to use and often unprofitable to develop.',
    keyPoints: [
      { label: 'Definition', keywords: ['antibiotic resistance', 'resistance', 'bacteria', 'evolve'] },
      { label: 'Spread between bacteria', keywords: ['plasmids', 'exchange', 'spread', 'genes', 'horizontally'] },
      { label: 'Human and farming causes', keywords: ['viral infections', 'stop courses early', 'livestock', 'agriculture', 'prescribe'] },
      { label: 'Risks to medicine', keywords: ['surgery', 'chemotherapy', 'childbirth', 'dangerous'] },
      { label: 'Solutions', keywords: ['bacteriophages', 'diagnostic', 'new drugs', 'new classes', 'pipeline'] },
    ],
    modelAnswer:
      'The lecture was about antibiotic resistance, which occurs when bacteria evolve to survive drugs that once killed them. Survivors can multiply quickly, and resistance genes may spread between bacteria through plasmids. Human behaviour speeds this up, for example when antibiotics are prescribed for viral infections, when patients stop courses early, or when antibiotics are given to livestock. Without effective drugs, surgery, chemotherapy and childbirth would become much more dangerous. Researchers are developing new classes of antibiotics and bacteriophages, and improving diagnostic tests, but the speaker warned that the pipeline of new drugs is thin.',
  },
  {
    id: 'rl-017',
    type: 'retell-lecture',
    title: 'Coral bleaching',
    difficulty: 2,
    voice: 'female',
    lecture:
      'Good morning. In this marine biology lecture, we consider coral bleaching. Corals are animals that live in partnership with microscopic algae called zooxanthellae. The algae live inside coral tissue, providing sugars through photosynthesis, and in return they receive shelter and nutrients. When sea temperatures rise by just one or two degrees above the normal summer maximum for several weeks, this partnership breaks down. The coral expels the algae, which leaves its white skeleton visible, a process known as bleaching. A bleached coral is not necessarily dead. If conditions cool quickly, the algae can return and the colony can recover. However, prolonged heat leads to starvation and death. Scientists have recorded mass bleaching events on reefs across the Pacific, Indian and Caribbean oceans in the past three decades. Reefs support roughly a quarter of marine species, so their decline affects fisheries and coastal protection. Researchers are now breeding heat-tolerant corals and testing shading techniques to buy reefs more time while global emissions are reduced.',
    keyPoints: [
      { label: 'Definition', keywords: ['coral bleaching', 'bleaching', 'algae', 'partnership'] },
      { label: 'How the partnership works', keywords: ['photosynthesis', 'sugars', 'shelter', 'nutrients'] },
      { label: 'Temperature trigger', keywords: ['temperature', 'warmer', 'heat', 'degrees'] },
      { label: 'Recovery and death', keywords: ['recover', 'recovery', 'starvation', 'death', 'dead'] },
      { label: 'Human response', keywords: ['heat-tolerant', 'shading', 'breeding', 'emissions'] },
    ],
    modelAnswer:
      'The lecture was about coral bleaching. Corals live in partnership with algae that provide sugars through photosynthesis, while the coral gives them shelter and nutrients. When sea temperatures rise by a degree or two for several weeks, the coral expels the algae and turns white. A bleached coral can recover if conditions cool, but prolonged heat leads to starvation and death. Reefs support many species, so their decline is serious. Researchers are breeding heat-tolerant corals and testing shading techniques, while global emissions are reduced.',
  },
  {
    id: 'rl-018',
    type: 'retell-lecture',
    title: 'The history of tea',
    difficulty: 1,
    voice: 'female',
    lecture:
      'Welcome. Today’s history lecture is about tea, one of the most widely traded drinks in the world. Tea originated in China, where people have drunk it for thousands of years. By the seventeenth century, merchants were shipping tea to Europe, and it quickly became fashionable among the wealthy. The British East India Company played a major role in the trade. It bought tea from China, but British demand far exceeded what Chinese buyers would accept in exchange for British goods. To balance the trade, the company began to sell opium in China, which led to conflict and, eventually, the Opium Wars. Later, the British established large tea estates in India and Sri Lanka, reducing their dependence on China. Plantation workers in these regions often faced low wages and difficult conditions. Today tea is grown in dozens of countries, and it remains one of the most affordable beverages in daily life. The lecture ended by asking students to think about how a simple cup of tea connects distant places, histories and economies.',
    keyPoints: [
      { label: 'Topic', keywords: ['tea', 'trade', 'drink'] },
      { label: 'Origins', keywords: ['china', 'thousands of years', 'originated'] },
      { label: 'East India Company', keywords: ['east india company', 'merchants', 'europe'] },
      { label: 'Opium and conflict', keywords: ['opium', 'wars', 'conflict', 'balance'] },
      { label: 'Plantations', keywords: ['estates', 'india', 'sri lanka', 'plantations', 'workers'] },
    ],
    modelAnswer:
      'The lecture was about the history of tea. The speaker explained that tea originated in China and reached Europe in the seventeenth century, carried by merchants. The British East India Company dominated the trade, and to balance its purchases it sold opium in China, which led to the Opium Wars. Later, Britain built tea estates in India and Sri Lanka, where plantation workers often faced low wages. Today tea is grown in many countries and remains an affordable drink that connects distant places and economies.',
  },
  {
    id: 'rl-019',
    type: 'retell-lecture',
    title: 'Urban food deserts',
    difficulty: 2,
    voice: 'male',
    lecture:
      'In this public health seminar we discuss food deserts, which are urban neighbourhoods where residents have limited access to affordable, nutritious food. The term describes a lack of shops that sell fresh produce, not simply a shortage of restaurants. In many cases, the nearest supermarket is several kilometres away, and residents without a car must rely on buses or expensive corner stores. Corner shops usually stock processed snacks and sugary drinks, which are cheaper per calorie but poorer in nutrients. Researchers have linked limited access to fresh food with higher rates of diabetes and obesity, although the relationship is complicated by income, education and work schedules. Cities have tried several responses. Some have offered grants to supermarkets that open in underserved areas. Others support farmers markets that accept food-assistance vouchers, or fund community gardens where residents grow their own vegetables. The speaker noted that opening a store alone is not enough. Prices, transport and cooking skills also determine whether people actually buy and eat healthier food.',
    keyPoints: [
      { label: 'Definition', keywords: ['food deserts', 'food desert', 'affordable', 'access', 'fresh produce'] },
      { label: 'Health links', keywords: ['diabetes', 'obesity', 'health', 'nutrients'] },
      { label: 'Corner shops', keywords: ['corner stores', 'corner shops', 'snacks', 'sugary drinks', 'processed'] },
      { label: 'Policy responses', keywords: ['grants', 'farmers markets', 'community gardens', 'vouchers', 'supermarkets'] },
      { label: 'Other barriers', keywords: ['transport', 'prices', 'cooking skills', 'income', 'buses'] },
    ],
    modelAnswer:
      'The lecture was about food deserts, urban areas where residents have limited access to affordable, fresh produce. The speaker said that when the nearest supermarket is far away, people without cars rely on corner stores, which mostly sell processed snacks and sugary drinks. Limited access to healthy food has been linked to diabetes and obesity, although income and education also matter. Cities have responded with grants for supermarkets, farmers markets that accept vouchers and community gardens. However, prices, transport and cooking skills also affect whether people eat healthier food.',
  },
  {
    id: 'rl-020',
    type: 'retell-lecture',
    title: 'Gene-edited crops',
    difficulty: 3,
    voice: 'female',
    lecture:
      'Today we turn to gene editing in agriculture. Traditional plant breeding moves genes between related varieties over many generations, which is slow and imprecise. Gene-editing tools, such as CRISPR, allow scientists to change a specific sequence of DNA directly, sometimes by altering only a few letters of the genetic code. Crops can be modified to resist drought, to need less fertiliser or to withstand fungal disease without introducing foreign genes. This distinction matters for regulation. In several countries, edited plants that could have arisen naturally are treated like conventional crops, whereas genetically modified organisms face stricter testing and labelling rules. Supporters argue that such crops could help feed a growing population on less land and with fewer pesticides. Critics, however, raise concerns about unintended changes, the concentration of patents in a few large companies and the risk that small farmers cannot afford the seeds. Public trust is another challenge, since many consumers are unsure what gene editing actually involves. The speaker concluded that the debate is less about the technology itself than about who controls it and who benefits from it.',
    keyPoints: [
      { label: 'Definition', keywords: ['gene editing', 'crispr', 'dna', 'specific'] },
      { label: 'Advantages', keywords: ['drought', 'fertiliser', 'disease', 'pesticides', 'resist'] },
      { label: 'Regulation', keywords: ['regulation', 'labelling', 'stricter', 'conventional', 'rules'] },
      { label: 'Concerns', keywords: ['patents', 'unintended', 'small farmers', 'afford', 'concerns'] },
      { label: 'Who controls it', keywords: ['control', 'benefits', 'trust', 'companies'] },
    ],
    modelAnswer:
      'The lecture was about gene editing in agriculture. Unlike traditional breeding, gene-editing tools such as CRISPR change a specific sequence of DNA directly. Edited crops may resist drought, need less fertiliser or withstand disease, which could reduce the need for pesticides. Some countries treat edited plants like conventional crops, while genetically modified organisms face stricter rules and labelling. Critics raise concerns about unintended changes, patents held by large companies and small farmers who cannot afford seeds. The speaker concluded that the real question is who controls the technology and who benefits from it.',
  },
  {
    id: 'rl-021',
    type: 'retell-lecture',
    title: 'Jazz improvisation',
    difficulty: 1,
    voice: 'male',
    lecture:
      'Good evening, and welcome to our music history class. Tonight we are looking at jazz improvisation. Improvisation means creating melodies on the spot rather than playing a note-for-note score. Most jazz is built on a repeated chord sequence, often a twelve-bar blues, and soloists take turns inventing new lines over it. Good improvisers know the chord changes thoroughly, so they can choose notes that fit each harmony. They also listen closely to the other musicians and respond to their phrases. Many players learn by transcribing recordings of famous soloists, memorising their patterns and then using them as building blocks. Over time, they develop a personal voice. Some teachers argue that the best improvisers tell a story, with a clear beginning, tension and resolution, rather than simply playing fast. The lecture ended with a listening exercise, in which students had to identify when a soloist was quoting a familiar melody.',
    keyPoints: [
      { label: 'Topic', keywords: ['jazz', 'improvisation', 'improvise'] },
      { label: 'Chord sequences', keywords: ['chord', 'twelve-bar blues', 'chord changes', 'harmony'] },
      { label: 'Listening and response', keywords: ['listen', 'listening', 'respond', 'other musicians'] },
      { label: 'Learning methods', keywords: ['transcribing', 'recordings', 'memorising', 'patterns', 'learn'] },
      { label: 'Developing style', keywords: ['personal voice', 'story', 'style', 'tension'] },
    ],
    modelAnswer:
      'The lecture was about jazz improvisation, which means creating melodies on the spot. Most jazz is based on a repeated chord sequence, such as the twelve-bar blues, and good improvisers know the chord changes and the harmony well. They also listen closely to other musicians and respond to their phrases. Players often learn by transcribing recordings and memorising famous patterns. Over time they develop a personal voice. The speaker argued that the best soloists tell a story with tension and resolution rather than simply playing fast.',
  },
  {
    id: 'rl-022',
    type: 'retell-lecture',
    title: 'Immigrant entrepreneurship',
    difficulty: 2,
    voice: 'male',
    lecture:
      'Good morning. Today’s economics lecture examines immigrant entrepreneurship, and why newcomers start businesses at higher rates than the general population in many countries. Several factors explain this pattern. Some immigrants face barriers to employment, such as unrecognised foreign qualifications, so self-employment becomes a practical alternative. Others bring international contacts and knowledge of markets abroad, which can open export opportunities that local founders may not see. Immigrant-owned firms also tend to create jobs for other newcomers, and they often serve communities that established businesses ignore. Yet the picture is not uniformly positive. Many newly founded firms close within their first five years, and immigrants may have less access to startup loans because they lack a credit history. The lecturer argued that recognising foreign credentials, offering credit-building programmes and supporting mentorship networks could raise survival rates considerably. Governments that invest in these measures, the lecturer suggested, would gain more jobs and a larger tax base.',
    keyPoints: [
      { label: 'Topic', keywords: ['immigrant entrepreneurship', 'immigrants', 'newcomers', 'businesses'] },
      { label: 'Barriers to employment', keywords: ['qualifications', 'barriers', 'self-employment', 'employment'] },
      { label: 'Contacts and export', keywords: ['international contacts', 'export', 'contacts', 'markets'] },
      { label: 'Effects on communities', keywords: ['create jobs', 'jobs', 'communities', 'serve'] },
      { label: 'Survival challenges', keywords: ['close', 'loans', 'credit'] },
      { label: 'Policy measures', keywords: ['credentials', 'mentorship', 'recognising', 'programmes'] },
    ],
    modelAnswer:
      'The lecture was about immigrant entrepreneurship. The speaker explained that newcomers often start businesses because they face barriers to employment, such as unrecognised foreign qualifications. Immigrants may also bring international contacts and knowledge of export markets, and their firms often create jobs for other newcomers. However, many new firms close within five years, and immigrants can struggle to obtain loans without a credit history. The lecturer suggested that recognising foreign credentials, offering credit-building programmes and supporting mentorship would improve survival rates.',
  },
  {
    id: 'rl-023',
    type: 'retell-lecture',
    title: 'Noise pollution',
    difficulty: 1,
    voice: 'female',
    lecture:
      'Good afternoon. In today’s environmental health lecture we turn to noise pollution. Noise is usually defined as unwanted sound, and it is one of the most common complaints in cities. Traffic is the largest source, particularly heavy lorries, motorcycles and aircraft taking off near residential areas. Construction work and nightclubs add to the problem. Long-term exposure matters more than short bursts. Studies link constant traffic noise with sleep disturbance, higher stress levels and raised blood pressure. Children who attend noisy schools may also find it harder to concentrate and to learn to read. Cities can reduce the problem in several ways. They can build barriers along motorways, lay quieter road surfaces, limit night-time deliveries and enforce rules on construction hours. Individuals can help too, by choosing quieter appliances and keeping car horns for emergencies. The lecture concluded that reducing noise is a public health measure, not simply a matter of convenience.',
    keyPoints: [
      { label: 'Definition', keywords: ['noise pollution', 'noise', 'unwanted sound'] },
      { label: 'Main sources', keywords: ['traffic', 'lorries', 'aircraft', 'construction', 'nightclubs'] },
      { label: 'Health effects', keywords: ['sleep', 'stress', 'blood pressure', 'concentrate', 'health'] },
      { label: 'City measures', keywords: ['barriers', 'road surfaces', 'deliveries', 'construction hours', 'rules'] },
      { label: 'Personal actions', keywords: ['quieter appliances', 'horns', 'individuals'] },
    ],
    modelAnswer:
      'The lecture was about noise pollution, which is unwanted sound in cities. The main sources are traffic, especially lorries and aircraft, along with construction and nightclubs. Long-term noise exposure has been linked to poor sleep, stress and higher blood pressure, and it can make it harder for children to concentrate. To reduce noise, cities can build barriers along motorways, lay quieter road surfaces and enforce rules on construction hours. Individuals can also choose quieter appliances and avoid unnecessary horns. The speaker concluded that noise reduction is a public health measure.',
  },
  {
    id: 'rl-024',
    type: 'retell-lecture',
    title: 'Cuneiform writing',
    difficulty: 2,
    voice: 'male',
    lecture:
      'In this lecture on ancient writing systems, we examine cuneiform, one of the earliest known scripts. It emerged in Mesopotamia, in what is now southern Iraq, around 3300 BCE. Scribes pressed wedge-shaped marks into soft clay tablets using a reed stylus, which is why the script takes its name from the Latin word for wedge. At first, cuneiform was used for accounting. Temple administrators recorded grain, livestock and labour, and the symbols were largely pictographic. Over several centuries, the signs became more abstract and began to represent sounds as well as ideas. This shift allowed scribes to write names, verbs and grammar, and eventually to record laws, letters and literature such as the Epic of Gilgamesh. Cuneiform was used for more than three thousand years and adapted for several languages, including Akkadian and Hittite. Its decline came gradually as alphabetic scripts spread across the region. Today specialists still read clay tablets, and their work reveals everyday life in cities that existed long before the classical period.',
    keyPoints: [
      { label: 'Topic', keywords: ['cuneiform', 'script', 'writing'] },
      { label: 'Origin', keywords: ['mesopotamia', 'iraq', '3300', 'earliest'] },
      { label: 'Early use', keywords: ['accounting', 'grain', 'temple', 'records', 'pictographic'] },
      { label: 'Signs representing sounds', keywords: ['sounds', 'abstract', 'grammar', 'names'] },
      { label: 'Later use and decline', keywords: ['laws', 'literature', 'akkadian', 'hittite', 'alphabetic', 'decline'] },
    ],
    modelAnswer:
      'The lecture was about cuneiform, one of the earliest writing systems, which emerged in Mesopotamia around 3300 BCE. Scribes pressed wedge-shaped marks into clay tablets, and the script was first used for accounting, such as recording grain and livestock. Over time, its signs came to represent sounds as well as ideas, which allowed scribes to write names, grammar, laws and literature. Cuneiform was adapted for languages such as Akkadian and Hittite, before its decline as alphabetic scripts spread. Specialists still read these tablets today.',
  },
  {
    id: 'rl-025',
    type: 'retell-lecture',
    title: 'Inflation and central banks',
    difficulty: 3,
    voice: 'male',
    lecture:
      'Good morning. Our topic today is inflation and the role of central banks. Inflation is a sustained rise in the general price level, which reduces the purchasing power of money. Moderate inflation is normal in a growing economy, but high or unpredictable inflation damages planning for households and firms. Central banks typically aim for a target of around two percent. Their main tool is the policy interest rate. When inflation runs above target, raising interest rates makes borrowing more expensive, which slows spending and investment and eases pressure on prices. The mechanism works with a lag, however, often taking a year or more to affect inflation fully. This delay creates difficult judgements. If a central bank tightens too late, inflation can become entrenched in wage negotiations and expectations. If it tightens too aggressively, the economy may slip into recession and unemployment may rise sharply. Some economists also note that supply shocks, such as energy shortages, are beyond the reach of interest rates. The lecturer concluded that credibility is central, because when people trust the bank to restore price stability, they adjust their expectations more easily.',
    keyPoints: [
      { label: 'Definition', keywords: ['inflation', 'price level', 'purchasing power'] },
      { label: 'Target and tool', keywords: ['target', 'two percent', 'interest rate', 'central banks'] },
      { label: 'Time lag', keywords: ['lag', 'delay', 'year or more', 'judgements'] },
      { label: 'Risks of tightening', keywords: ['recession', 'unemployment', 'too late', 'too aggressively', 'entrenched'] },
      { label: 'Limits and credibility', keywords: ['supply shocks', 'energy', 'credibility', 'expectations', 'trust'] },
    ],
    modelAnswer:
      'The lecture was about inflation and central banks. Inflation is a sustained rise in the general price level, which reduces purchasing power. Central banks usually target about two percent, mainly by adjusting the interest rate. Because higher rates have a lag, there is a delay before inflation falls, so policy involves difficult judgements. Tightening too late can leave inflation entrenched, while tightening too aggressively can cause recession and unemployment. Supply shocks, such as energy shortages, are beyond the reach of rates. The speaker concluded that credibility matters, because trust helps people adjust their expectations.',
  },
  {
    id: 'rl-026',
    type: 'retell-lecture',
    title: 'Voter turnout',
    difficulty: 2,
    voice: 'female',
    lecture:
      'Good afternoon. Today we examine voter turnout, the share of eligible citizens who cast a ballot in an election. Turnout varies enormously between countries and between types of election. National elections usually attract more voters than local or regional ones, and presidential contests often mobilise larger audiences than parliamentary ones. Political scientists have identified several factors. Education and income tend to be associated with higher turnout, partly because wealthier citizens find it easier to get information and time off work. Habit also matters. People who vote once tend to keep voting, which makes early experiences important. Electoral rules have an effect too. Compulsory voting, as in Australia, lifts turnout considerably, while postal voting and automatic registration can make participation easier. However, these reforms do not always help equally. Some studies find that convenience measures mainly benefit people who were already likely to vote. The lecturer concluded that increasing turnout requires more than convenience alone. It also depends on whether citizens believe their votes will change outcomes.',
    keyPoints: [
      { label: 'Definition', keywords: ['voter turnout', 'turnout', 'eligible', 'ballot'] },
      { label: 'Election type', keywords: ['national elections', 'local', 'presidential', 'parliamentary'] },
      { label: 'Socioeconomic factors', keywords: ['education', 'income', 'wealthier'] },
      { label: 'Habit and electoral rules', keywords: ['habit', 'compulsory voting', 'postal voting', 'automatic registration', 'electoral rules'] },
      { label: 'Limits of convenience', keywords: ['convenience', 'already likely', 'outcomes', 'believe'] },
    ],
    modelAnswer:
      'The lecture was about voter turnout, the share of eligible citizens who cast a ballot. Turnout is usually higher in national elections and presidential contests than in local ones. Education and income are associated with higher turnout, and habit matters, since people who vote once tend to keep voting. Electoral rules also matter: compulsory voting raises turnout considerably, while postal voting and automatic registration can help. However, convenience measures mainly benefit people who were already likely to vote. The speaker concluded that turnout also depends on whether citizens believe their vote will change outcomes.',
  },
  {
    id: 'rl-027',
    type: 'retell-lecture',
    title: 'Sleep and memory',
    difficulty: 2,
    voice: 'male',
    lecture:
      'In today’s neuroscience lecture, we explore how sleep consolidates memory. Learning does not end when study stops. During the day, the hippocampus records new experiences as temporary traces. Much of the important processing happens at night, when the brain replays those traces and gradually transfers them to the cortex for longer-term storage. Researchers have observed this replay in rats learning to navigate mazes, and similar patterns have been recorded in human subjects. Deep, slow-wave sleep appears especially important for declarative memories, such as facts and names, whereas rapid eye movement sleep may support emotional memories and creative connections. Sleep deprivation therefore has a measurable cost. Students who stay up all night before an exam often recall less than those who sleep, even when they have studied the same material. The lecturer suggested a practical lesson. Spacing study across several days, and then sleeping normally, gives memories the time they need to settle. Cramming may feel productive, but it relies heavily on short-term storage that is easily lost.',
    keyPoints: [
      { label: 'Topic', keywords: ['sleep', 'memory', 'consolidates', 'consolidation'] },
      { label: 'Hippocampus and replay', keywords: ['hippocampus', 'replay', 'temporary', 'cortex'] },
      { label: 'Types of sleep', keywords: ['slow-wave sleep', 'rapid eye movement', 'emotional memories', 'declarative'] },
      { label: 'Sleep deprivation', keywords: ['deprivation', 'all night', 'recall', 'exam'] },
      { label: 'Study advice', keywords: ['spacing', 'cramming', 'short-term', 'settle'] },
    ],
    modelAnswer:
      'The lecture was about how sleep consolidates memory. During the day, the hippocampus records experiences as temporary traces, and at night the brain replays them and moves them to the cortex for storage. Slow-wave sleep seems especially important for declarative memories such as facts, while rapid eye movement sleep may support emotional memories. Sleep deprivation harms recall, so students who stay up all night before an exam often remember less. The speaker advised spacing study over several days and sleeping normally, rather than cramming, which relies on short-term storage.',
  },
  {
    id: 'rl-028',
    type: 'retell-lecture',
    title: 'Chemistry of plastic recycling',
    difficulty: 3,
    voice: 'female',
    lecture:
      'Good morning. This lecture concerns the chemistry of plastic recycling, which is far more difficult than many people assume. Most plastics are polymers, long chains of repeating molecular units. Mechanical recycling melts and reforms plastic, but each cycle shortens the polymer chains and weakens the material. Thermoplastics such as polyethylene can be remelted several times, while thermosets, which form permanent cross-links, cannot be reshaped at all. Mixed plastic waste poses another problem, because different polymers are often incompatible and form brittle blends when melted together. Chemical recycling offers an alternative. Depolymerisation breaks polymers back into monomers, which can then be purified and repolymerised into virgin-quality plastic. Pyrolysis heats waste in the absence of oxygen to produce oil and gas, although the process requires energy and careful control of emissions. Economists note that recycled plastic must compete with cheap virgin resin, whose price depends heavily on oil markets. The lecturer concluded that policy incentives, product design and standardised labelling may matter as much as improved chemistry.',
    keyPoints: [
      { label: 'Definition', keywords: ['polymers', 'molecular', 'chains'] },
      { label: 'Mechanical limits', keywords: ['mechanical', 'weakens', 'thermoplastics', 'thermosets', 'remelted'] },
      { label: 'Mixed waste', keywords: ['incompatible', 'brittle', 'mixed', 'blends'] },
      { label: 'Chemical methods', keywords: ['depolymerisation', 'pyrolysis', 'monomers', 'chemical recycling', 'oil'] },
      { label: 'Economics and policy', keywords: ['virgin', 'price', 'incentives', 'design', 'labelling'] },
    ],
    modelAnswer:
      'The lecture was about the chemistry of plastic recycling. Plastics are polymers, long chains of molecules, and mechanical recycling weakens them with each melt. Thermoplastics such as polyethylene can be remelted, but thermosets cannot be reshaped. Mixed waste is a problem because different polymers are incompatible and form brittle blends. Chemical recycling, such as depolymerisation, breaks polymers into monomers that can be repolymerised, while pyrolysis turns waste into oil and gas. Recycled plastic must compete with virgin resin, whose price depends on oil markets, so the speaker argued that incentives, product design and standardised labelling matter as much as chemistry.',
  },
  {
    id: 'rl-029',
    type: 'retell-lecture',
    title: 'The arrival of sound in film',
    difficulty: 1,
    voice: 'male',
    lecture:
      'Good morning, everyone. Our film history lecture today is about the arrival of sound in cinema. For the first three decades of motion pictures, films were silent, although they were rarely shown without music. Cinemas often hired pianists or small orchestras to accompany the images, and the music helped audiences follow the story. The breakthrough came in 1927 with The Jazz Singer, which used synchronised recorded dialogue and songs. Audiences were astonished, and within a few years most studios had converted to sound. The change was expensive. Theatres had to install new projection and speaker systems, and actors who had succeeded with exaggerated gestures suddenly needed clear voices. Some stars with unpleasant voices or foreign accents lost their careers. Directors also discovered that sound allowed new storytelling techniques, such as overlapping dialogue and atmospheric effects. The lecturer ended by suggesting that silent films still hold up well, because their visual language was developed to communicate without words.',
    keyPoints: [
      { label: 'Topic', keywords: ['sound', 'cinema', 'films', 'silent'] },
      { label: 'Music in the silent era', keywords: ['pianists', 'orchestras', 'music', 'accompany'] },
      { label: 'Breakthrough', keywords: ['1927', 'jazz singer', 'dialogue', 'synchronised'] },
      { label: 'Costs and actors', keywords: ['expensive', 'projection', 'speaker systems', 'voices', 'accents'] },
      { label: 'New techniques', keywords: ['overlapping', 'atmospheric', 'storytelling', 'techniques', 'visual language'] },
    ],
    modelAnswer:
      'The lecture was about the arrival of sound in cinema. Silent films were usually accompanied by pianists or orchestras, but the breakthrough came in 1927 with The Jazz Singer, which used synchronised dialogue. Converting to sound was expensive, as theatres needed new projection and speaker systems. Actors needed clear voices, and some stars with unpleasant voices or accents lost their careers. Sound also allowed new storytelling techniques, such as overlapping dialogue and atmospheric effects. The speaker suggested that silent films still work well because their visual language was designed to communicate without words.',
  },
  {
    id: 'rl-030',
    type: 'retell-lecture',
    title: 'The water footprint of food',
    difficulty: 2,
    voice: 'female',
    lecture:
      'Good afternoon. In this environmental science lecture, we look at the water footprint of food. The water footprint measures how much freshwater is used to produce a product, including water that evaporates from crops, water absorbed into harvested goods and water polluted during production. Beef typically has one of the largest footprints, because cattle need large amounts of feed, and growing that feed requires irrigation in many regions. Rice is also water-intensive, since paddy fields are flooded for much of the growing season. By contrast, many vegetables and legumes have much smaller footprints per kilogram. However, the figures can mislead. A crop grown in a wet region has a very different impact from the same crop grown in a dry basin where groundwater is being depleted. For this reason, researchers stress the importance of location as well as quantity. Consumers can reduce their impact by eating a more varied diet and reducing food waste, since discarded food wastes all the water used to grow it. The lecturer concluded that water-smart food choices depend on both what we eat and where that food comes from.',
    keyPoints: [
      { label: 'Definition', keywords: ['water footprint', 'freshwater', 'evaporates', 'polluted'] },
      { label: 'Beef and feed', keywords: ['beef', 'cattle', 'feed', 'irrigation'] },
      { label: 'Rice', keywords: ['rice', 'paddy', 'flooded', 'water-intensive'] },
      { label: 'Location matters', keywords: ['location', 'dry', 'groundwater', 'wet region'] },
      { label: 'Consumer choices', keywords: ['food waste', 'varied diet', 'discarded', 'waste'] },
    ],
    modelAnswer:
      'The lecture was about the water footprint of food, which measures the freshwater used to produce a product. Beef usually has one of the largest footprints, because cattle need feed that often requires irrigation. Rice is also water-intensive, since paddy fields are flooded for much of the season, while many vegetables and legumes have smaller footprints. However, location matters, as the same crop grown in a dry area with depleted groundwater has a greater impact. Consumers can reduce their footprint by eating a varied diet and cutting food waste, because discarded food wastes all the water used to grow it.',
  },

  // ---------- Summarize Group Discussion ----------
  {
    id: 'sgd-010',
    type: 'summarize-group-discussion',
    title: 'Four-day school week',
    difficulty: 1,
    turns: [
      { speaker: 'Ms Okafor', voice: 'female', text: 'Good afternoon. The district is considering whether secondary schools should move to a four-day week, with longer lessons from Monday to Thursday. Tom, would you begin?' },
      { speaker: 'Tom', voice: 'male', text: 'I think it is a good idea. Teachers would gain an extra day for planning and training, and families could save on childcare costs. Fewer bus journeys would also cut the district’s fuel spending.' },
      { speaker: 'Leila', voice: 'female', text: 'I have doubts. Many students rely on school meals on Fridays, and some depend on supervised activities after class. Long days could also leave younger pupils too tired to learn well.' },
      { speaker: 'Tom', voice: 'male', text: 'Those are fair points. The district could keep meal programmes running on Fridays through community centres, which would address the food issue.' },
      { speaker: 'Ms Okafor', voice: 'female', text: 'Leila, does that answer your concern about younger pupils?' },
      { speaker: 'Leila', voice: 'female', text: 'Only partly. I would want a trial in one school first, with attendance and test results tracked before any decision.' },
      { speaker: 'Ms Okafor', voice: 'female', text: 'So we agree that the benefits for staff and budgets are clear, that meals and supervision need solutions, and that a trial should come first. Thank you.' },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['four-day week', 'lessons', 'secondary schools'] },
      { label: 'Tom supports it', keywords: ['teachers', 'planning', 'childcare', 'fuel', 'bus'], speaker: 'Tom' },
      { label: 'Leila’s concerns', keywords: ['meals', 'fridays', 'tired', 'supervised', 'younger'], speaker: 'Leila' },
      { label: 'Tom’s fix for meals', keywords: ['community centres', 'meal programmes', 'community'], speaker: 'Tom' },
      { label: 'Leila wants a trial', keywords: ['trial', 'pilot', 'one school', 'tracked'], speaker: 'Leila' },
      { label: 'Conclusion', keywords: ['agree', 'agreed', 'budgets'] },
    ],
    modelAnswer:
      'The group discussed whether secondary schools should move to a four-day week with longer lessons. Tom supports the idea because teachers would gain planning time, families would save on childcare and buses would use less fuel. Leila has concerns that students who rely on Friday meals and supervised activities would lose out, and that younger pupils could be tired. Tom suggested community centres could keep meal programmes running on Fridays. Leila wants a pilot in one school, with attendance and results tracked. The speakers agreed that the benefits for budgets are clear, but a trial should come first.',
  },
  {
    id: 'sgd-011',
    type: 'summarize-group-discussion',
    title: 'Campus bike lanes',
    difficulty: 1,
    turns: [
      { speaker: 'Professor Haddad', voice: 'male', text: 'Welcome. The campus planning committee is discussing new protected bike lanes across the main quad. Priya, would you like to open?' },
      { speaker: 'Priya', voice: 'female', text: 'Yes. Cycling to campus has grown fast, and the current lanes are painted on the road, where cars park across them. Protected lanes with bollards would make cycling feel safer, especially for first-year students.' },
      { speaker: 'Owen', voice: 'male', text: 'I agree about safety, but I am worried about the loss of parking spaces. Several staff members with disabilities rely on those spaces near the library, and the proposal removes about forty of them.' },
      { speaker: 'Priya', voice: 'female', text: 'That is a fair concern. We could keep the accessible spaces and move the others to the outer car park, with a free shuttle.' },
      { speaker: 'Owen', voice: 'male', text: 'A shuttle would help. I would also like the bike lanes built during the summer break, so that the work does not disrupt classes.' },
      { speaker: 'Professor Haddad', voice: 'male', text: 'Let us consider both proposals. Safety for cyclists is a priority, so I suggest protecting the lanes while keeping accessible parking. Any changes to outer parking should be consulted on first.' },
      { speaker: 'Priya', voice: 'female', text: 'I can accept that. We agree the lanes should be protected and that accessibility matters.' },
      { speaker: 'Owen', voice: 'male', text: 'Agreed. The summer timetable and a shuttle would address my concerns.' },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['bike lanes', 'cycling', 'cyclists'] },
      { label: 'Priya favours protected lanes', keywords: ['protected', 'safer', 'safety', 'bollards'], speaker: 'Priya' },
      { label: 'Owen’s parking concern', keywords: ['parking', 'accessible', 'disabilities', 'spaces'], speaker: 'Owen' },
      { label: 'Priya’s shuttle compromise', keywords: ['shuttle', 'outer car park', 'keep accessible'], speaker: 'Priya' },
      { label: 'Owen’s timing concern', keywords: ['summer', 'disrupt', 'timetable', 'break'], speaker: 'Owen' },
      { label: 'Chair’s proposal', keywords: ['consulted', 'consult', 'consultation'], speaker: 'Professor Haddad' },
      { label: 'Conclusion', keywords: ['agree', 'agreed', 'accessibility'] },
    ],
    modelAnswer:
      'The committee discussed new protected bike lanes across the main quad, which would improve cycling safety. Priya believes protected lanes with bollards would make cycling safer, particularly for first-year students. Owen is concerned about parking, because about forty spaces used by staff with disabilities would be removed. Priya suggested keeping the accessible spaces and moving other spaces to the outer car park, with a shuttle. Owen wants the work done during the summer break so that classes are not disrupted. Professor Haddad proposed protecting the lanes and keeping accessible parking, with any change to outer parking consulted on first. Everyone agreed that accessibility matters, and the timetable and shuttle answer Owen’s concerns.',
  },
  {
    id: 'sgd-012',
    type: 'summarize-group-discussion',
    title: 'Campus food bank funding',
    difficulty: 2,
    turns: [
      { speaker: 'Dr Novak', voice: 'female', text: 'Thank you for coming. The student union wants to decide whether to use reserve funds to expand the campus food bank. Samuel, what is your position?' },
      { speaker: 'Samuel', voice: 'male', text: 'I support expansion. Demand has doubled since last year, and some students skip meals to pay rent. Using reserves is justified because the need is urgent.' },
      { speaker: 'Hannah', voice: 'female', text: 'I agree the need is real, but the reserves are meant for emergencies, such as legal fees for students. Perhaps the university should fund the food bank from its general budget instead.' },
      { speaker: 'Samuel', voice: 'male', text: 'The university has been slow to respond. Waiting could mean another year without help for hungry students.' },
      { speaker: 'Hannah', voice: 'female', text: 'I understand the urgency. My concern is sustainability. Donations fluctuate, and a permanent expansion needs a steady income.' },
      { speaker: 'Dr Novak', voice: 'female', text: 'Could we agree on a temporary increase from reserves, with a formal request to the university for a permanent budget line?' },
      { speaker: 'Samuel', voice: 'male', text: 'That works for me, provided the temporary increase starts this term.' },
      { speaker: 'Hannah', voice: 'female', text: 'I can accept that, if we review usage every three months.' },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['food bank', 'reserve funds', 'reserves'] },
      { label: 'Samuel supports expansion', keywords: ['demand', 'skip meals', 'urgent', 'urgency'], speaker: 'Samuel' },
      { label: 'Hannah’s concern about reserves', keywords: ['emergencies', 'legal fees', 'general budget'], speaker: 'Hannah' },
      { label: 'Hannah’s sustainability worry', keywords: ['sustainability', 'donations', 'fluctuate', 'steady income'], speaker: 'Hannah' },
      { label: 'Samuel on university delay', keywords: ['waiting', 'another year', 'slow'], speaker: 'Samuel' },
      { label: 'Chair’s compromise', keywords: ['temporary increase', 'permanent budget', 'review', 'every three months'], speaker: 'Dr Novak' },
      { label: 'Conclusion', keywords: ['agreed', 'term', 'agree'] },
    ],
    modelAnswer:
      'The student union discussed whether to use reserve funds to expand the campus food bank. Samuel supports expansion because demand has doubled and some students skip meals, so the situation is urgent. He is also frustrated that the university has been slow, since waiting could mean another year without help. Hannah agrees the need is real, but she argues that reserves are for emergencies such as legal fees, and that the university should use its general budget. She is also concerned about sustainability, because donations fluctuate and expansion needs a steady income. Dr Novak proposed a temporary increase from reserves, with a request for a permanent budget line and a review every three months. Everyone agreed that it should start this term.',
  },
  {
    id: 'sgd-013',
    type: 'summarize-group-discussion',
    title: 'Open-plan offices',
    difficulty: 2,
    turns: [
      { speaker: 'Mr Brandt', voice: 'male', text: 'Good morning. The company is considering moving from private offices to open-plan layouts on the third floor. Ines, could you start?' },
      { speaker: 'Ines', voice: 'female', text: 'I think open-plan working encourages collaboration. Teams can talk quickly, ideas spread faster, and the cost per desk falls by roughly a third.' },
      { speaker: 'Marcus', voice: 'male', text: 'I find open plans distracting. Phone calls and background chatter make it hard to concentrate on detailed analysis. Noise is my main worry.' },
      { speaker: 'Ines', voice: 'female', text: 'Quiet rooms and a booking system can handle that. We could keep a few booths for calls.' },
      { speaker: 'Marcus', voice: 'male', text: 'Booths help, but there would still be fewer of them than people. Also, sick days could rise if people sit near colleagues with colds.' },
      { speaker: 'Mr Brandt', voice: 'male', text: 'Several studies suggest open offices reduce face-to-face contact over time, which is a risk we should measure. I propose a six-week pilot on one floor, with noise and productivity surveys.' },
      { speaker: 'Ines', voice: 'female', text: 'I accept a pilot. I would like the survey to ask about collaboration as well as concentration.' },
      { speaker: 'Marcus', voice: 'male', text: 'Agreed. If the survey shows more noise complaints, we should reconsider.' },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['open-plan', 'open plan', 'offices', 'layout'] },
      { label: 'Ines supports the change', keywords: ['collaboration', 'cost', 'desk', 'ideas'], speaker: 'Ines' },
      { label: 'Ines suggests booths', keywords: ['booths', 'quiet rooms', 'booking'], speaker: 'Ines' },
      { label: 'Marcus’s noise concern', keywords: ['noise', 'distracting', 'concentrate', 'concentration'], speaker: 'Marcus' },
      { label: 'Marcus’s health worry', keywords: ['sick days', 'colleagues', 'colds', 'illness'], speaker: 'Marcus' },
      { label: 'Chair’s pilot proposal', keywords: ['pilot', 'six-week', 'surveys', 'measure'], speaker: 'Mr Brandt' },
      { label: 'Conclusion', keywords: ['agreed', 'reconsider', 'survey'] },
    ],
    modelAnswer:
      'The discussion was about moving the third floor to open-plan offices. Ines supports the change because teams collaborate more, ideas spread faster and the cost per desk falls. She suggests keeping quiet rooms and a few booths for calls. Marcus finds open plans distracting, since noise makes it hard to concentrate, and he worries that sick days could rise when people sit near colleagues with colds. Mr Brandt proposed a six-week pilot on one floor, with surveys to measure noise and productivity. Ines wants the survey to cover collaboration as well. The group agreed to run the pilot, and Marcus said they should reconsider if noise complaints increase.',
  },
  {
    id: 'sgd-014',
    type: 'summarize-group-discussion',
    title: 'Electric buses for the city fleet',
    difficulty: 3,
    turns: [
      { speaker: 'Ms Gallant', voice: 'female', text: 'Thank you. The council must decide whether to replace diesel buses with electric models over the next five years. Kenji, what do you think?' },
      { speaker: 'Kenji', voice: 'male', text: 'I favour electric buses. Running costs are much lower because electricity is cheaper than diesel per kilometre, and maintenance is simpler, with fewer moving parts. Noise and local air pollution would also fall.' },
      { speaker: 'Ruth', voice: 'female', text: 'The upfront cost is my concern. A single electric bus can cost nearly twice as much as a diesel bus, and charging depots need grid upgrades that the council has not budgeted for.' },
      { speaker: 'Kenji', voice: 'male', text: 'Those costs can be spread over the bus’s twelve-year life. Grant programmes from the federal government could also cover part of the purchase price.' },
      { speaker: 'Ruth', voice: 'female', text: 'Grants are uncertain. I would also question the range. In cold winters, battery performance drops, which could mean buses cannot finish long routes without a mid-day charge.' },
      { speaker: 'Ms Gallant', voice: 'female', text: 'Those are useful points. Ruth’s range concern could be tested with a pilot on the shorter routes, using cold-weather data.' },
      { speaker: 'Kenji', voice: 'male', text: 'I can support a phased rollout that starts with the shortest routes, provided we secure a dedicated charging budget first.' },
      { speaker: 'Ruth', voice: 'female', text: 'I agree with phasing. We should make sure any depot upgrades are included in the plan from the start.' },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['electric buses', 'electric', 'diesel', 'fleet'] },
      { label: 'Kenji’s running costs', keywords: ['cheaper', 'maintenance', 'running costs', 'noise'], speaker: 'Kenji' },
      { label: 'Ruth’s upfront cost', keywords: ['upfront', 'charging depots', 'grid', 'budgeted'], speaker: 'Ruth' },
      { label: 'Kenji on life span and grants', keywords: ['twelve-year', 'grant', 'grants', 'spread'], speaker: 'Kenji' },
      { label: 'Ruth on winter range', keywords: ['range', 'winter', 'battery', 'cold'], speaker: 'Ruth' },
      { label: 'Conclusion', keywords: ['agreed', 'agree', 'phased', 'phasing'] },
    ],
    modelAnswer:
      'The council discussed replacing diesel buses with electric models over five years. Kenji favours the change because running costs are lower, electricity is cheaper and maintenance is simpler, with noise also falling. Ruth is concerned about the upfront cost, since electric buses are expensive and charging depots need grid upgrades that are not budgeted. Kenji replied that costs can be spread over a twelve-year life and that grants may help. Ruth questioned the range, because battery performance drops in winter and buses may need a mid-day charge. Both speakers agreed on a phased rollout that begins with the shortest routes, once a charging budget is secured.',
  },
  {
    id: 'sgd-015',
    type: 'summarize-group-discussion',
    title: 'Healthier vending machines',
    difficulty: 1,
    turns: [
      { speaker: 'Professor Ito', voice: 'male', text: 'Good morning. The student services office proposes replacing half the vending machine stock with healthier snacks. Chloe, what is your view?' },
      { speaker: 'Chloe', voice: 'female', text: 'I support the plan. Students buy a lot of sugary snacks between classes, and healthier options could make a real difference to their energy levels and concentration.' },
      { speaker: 'Ravi', voice: 'male', text: 'Healthier snacks often sell less well. If sales fall, the vending contractor may lose money, and the university could end up paying for the change through higher prices.' },
      { speaker: 'Chloe', voice: 'female', text: 'That is true, but clear labelling can help. Students would then choose wisely, and they may not mind a small price difference for fresh fruit.' },
      { speaker: 'Ravi', voice: 'male', text: 'I am still concerned about prices. Maybe we could start with a trial of ten machines and check whether sales hold up.' },
      { speaker: 'Professor Ito', voice: 'male', text: 'A trial is sensible. We will measure sales and student feedback over one term before deciding.' },
      { speaker: 'Chloe', voice: 'female', text: 'I agree with that. The trial should also include water and unsweetened drinks.' },
      { speaker: 'Ravi', voice: 'male', text: 'Fine, as long as prices stay affordable.' },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['vending machines', 'vending', 'healthier snacks', 'snacks'] },
      { label: 'Chloe supports the plan', keywords: ['energy', 'concentration', 'sugary'], speaker: 'Chloe' },
      { label: 'Ravi’s concerns', keywords: ['sell less', 'sales', 'prices', 'contractor'], speaker: 'Ravi' },
      { label: 'Chloe’s labelling idea', keywords: ['labelling', 'choose wisely', 'fresh fruit'], speaker: 'Chloe' },
      { label: 'Ravi suggests a trial', keywords: ['trial', 'ten machines', 'pilot'], speaker: 'Ravi' },
      { label: 'Professor Ito’s measurement', keywords: ['measure', 'feedback', 'one term'], speaker: 'Professor Ito' },
      { label: 'Conclusion', keywords: ['agreed', 'water', 'drinks'] },
    ],
    modelAnswer:
      'The discussion was about replacing half the vending machine stock with healthier snacks. Chloe supports the plan because students buy many sugary snacks, and better options could improve their energy and concentration. She proposes clear labelling, so students can choose wisely, including fresh fruit. Ravi is worried that healthier products may sell less, which could hurt the contractor or raise prices. He suggests a trial with ten machines. Professor Ito agreed to measure sales and feedback over one term before deciding. The group agreed that the trial should include water and unsweetened drinks, and remain affordable.',
  },
  {
    id: 'sgd-016',
    type: 'summarize-group-discussion',
    title: 'Mandatory first-aid course',
    difficulty: 2,
    turns: [
      { speaker: 'Ms Adeyemi', voice: 'female', text: 'Let us discuss whether all first-year students should complete a mandatory first-aid course. Jonah, you raised this idea, so would you start?' },
      { speaker: 'Jonah', voice: 'male', text: 'Yes. Students spend long hours in labs, sports centres and workplaces, and many have never learned CPR. A short certified course could save lives, and it costs only a few hours.' },
      { speaker: 'Elena', voice: 'female', text: 'I agree that the skills matter, but making it mandatory may be unfair to students with medical conditions or religious objections. Also, the course fee could be a barrier for low-income students.' },
      { speaker: 'Jonah', voice: 'male', text: 'Good point about fees. The university could cover the cost and offer exemptions with a medical note.' },
      { speaker: 'Elena', voice: 'female', text: 'That would help. My concern is time. A full day might clash with exams or part-time jobs, so I would like evening and online options.' },
      { speaker: 'Ms Adeyemi', voice: 'female', text: 'Could we agree on a voluntary course in the first term, with incentives such as credit or a reduced fee, and review uptake after one year?' },
      { speaker: 'Jonah', voice: 'male', text: 'I could accept a voluntary start, but I hope we move to mandatory training once the numbers are clear.' },
      { speaker: 'Elena', voice: 'female', text: 'Agreed, as long as the review is public and evening sessions are provided.' },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['first-aid', 'first aid', 'course', 'mandatory'] },
      { label: 'Jonah supports it', keywords: ['cpr', 'save lives', 'certified'], speaker: 'Jonah' },
      { label: 'Jonah’s fee solution', keywords: ['cover the cost', 'exemptions', 'fees'], speaker: 'Jonah' },
      { label: 'Elena’s fairness concerns', keywords: ['unfair', 'medical conditions', 'fee', 'low-income'], speaker: 'Elena' },
      { label: 'Elena’s scheduling concern', keywords: ['evening', 'online', 'part-time jobs'], speaker: 'Elena' },
      { label: 'Chair’s proposal', keywords: ['voluntary', 'incentives', 'review', 'uptake'], speaker: 'Ms Adeyemi' },
      { label: 'Conclusion', keywords: ['agreed', 'agree', 'public'] },
    ],
    modelAnswer:
      'The group discussed a mandatory first-aid course for first-year students. Jonah supports it because students work in labs and sports centres, and a short certified course could help them save lives, including by performing CPR. He suggests the university cover the cost and offer exemptions with a medical note. Elena agrees that the skills matter, but says a requirement may be unfair to students with medical conditions, and that fees could hurt low-income students. She also worries that a full day could clash with exams or part-time jobs, so she wants evening and online options. Ms Adeyemi proposed a voluntary course in the first term, with incentives and a review of uptake after one year. Everyone agreed to a voluntary start and a public review.',
  },
  {
    id: 'sgd-017',
    type: 'summarize-group-discussion',
    title: 'Sugar tax on drinks',
    difficulty: 3,
    turns: [
      { speaker: 'Mr Fraser', voice: 'male', text: 'Good afternoon. The province is weighing a tax on sugary drinks. Amara, would you like to begin?' },
      { speaker: 'Amara', voice: 'female', text: 'I support the tax. Sugary drinks are a major source of added sugar in young people’s diets, and taxes on them have reduced consumption in several countries.' },
      { speaker: 'Ben', voice: 'male', text: 'I oppose it. The tax falls hardest on low-income families, who spend a larger share of their food budget on these drinks. It is regressive.' },
      { speaker: 'Amara', voice: 'female', text: 'The revenue could fund school nutrition programmes, which would benefit those same families. Part of the money should be ring-fenced.' },
      { speaker: 'Ben', voice: 'male', text: 'Ring-fencing is a reasonable compromise, but people will also cross the border to buy drinks where they are cheaper, which would hurt local shops.' },
      { speaker: 'Mr Fraser', voice: 'male', text: 'Border effects are real. Would a smaller tax, combined with clear labelling, address both concerns?' },
      { speaker: 'Amara', voice: 'female', text: 'A smaller tax could work, but the health benefits depend on a meaningful price change.' },
      { speaker: 'Ben', voice: 'male', text: 'I could accept a modest tax if the revenue is ring-fenced and reviewed after two years.' },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['sugar tax', 'sugary drinks', 'tax', 'drinks'] },
      { label: 'Amara supports the tax', keywords: ['added sugar', 'consumption', 'reduced', 'health'], speaker: 'Amara' },
      { label: 'Ben says it is regressive', keywords: ['low-income', 'regressive', 'hardest', 'food budget'], speaker: 'Ben' },
      { label: 'Amara’s revenue idea', keywords: ['school nutrition', 'ring-fenced', 'revenue'], speaker: 'Amara' },
      { label: 'Ben’s border concern', keywords: ['cross the border', 'border', 'local shops', 'cheaper'], speaker: 'Ben' },
      { label: 'Chair’s compromise', keywords: ['smaller tax', 'labelling', 'modest'], speaker: 'Mr Fraser' },
      { label: 'Conclusion', keywords: ['modest', 'review', 'ring-fenced', 'agreed'] },
    ],
    modelAnswer:
      'The province is considering a tax on sugary drinks. Amara supports it because added sugar is a major part of young people’s diets, and taxes have reduced consumption elsewhere. Ben opposes the tax, arguing that it is regressive, since low-income families spend a larger share of their food budget on drinks. Amara suggested that revenue be ring-fenced for school nutrition programmes, which would benefit those families. Ben also warned that shoppers may cross the border to buy cheaper drinks, which would hurt local shops. Mr Fraser suggested a smaller tax with clear labelling. Both speakers agreed that a modest tax, with ring-fenced revenue and a review after two years, could be a sensible compromise.',
  },
  {
    id: 'sgd-018',
    type: 'summarize-group-discussion',
    title: 'Shared kitchens in residences',
    difficulty: 1,
    turns: [
      { speaker: 'Dr Lindqvist', voice: 'female', text: 'Good morning. Residence services want to convert two lounges into shared kitchens. Noah, would you start?' },
      { speaker: 'Noah', voice: 'male', text: 'I think shared kitchens would help a lot. Many first-years cannot afford takeaway every night, and cooking together builds friendships and cuts food costs.' },
      { speaker: 'Grace', voice: 'female', text: 'I like the idea, but kitchens create cleaning problems. Without a rota, dishes pile up, and the lounges would lose their social space.' },
      { speaker: 'Noah', voice: 'male', text: 'A cleaning rota and a booking system would solve most of that. Residents could sign up for slots.' },
      { speaker: 'Grace', voice: 'female', text: 'Fire safety is my concern. Cooking appliances need inspection, and I want clear rules about who is responsible if something goes wrong.' },
      { speaker: 'Dr Lindqvist', voice: 'female', text: 'Fire safety is essential. We would have to meet the building code, and I suggest an electric-only pilot in one building.' },
      { speaker: 'Noah', voice: 'male', text: 'I can support that. Let us include a feedback survey after one semester.' },
      { speaker: 'Grace', voice: 'female', text: 'Agreed, as long as the rota is written before the kitchens open.' },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['shared kitchens', 'kitchens', 'residence', 'lounges'] },
      { label: 'Noah’s benefits', keywords: ['afford', 'friendships', 'food costs', 'cooking together'], speaker: 'Noah' },
      { label: 'Grace’s cleaning concern', keywords: ['cleaning', 'rota', 'social space', 'dishes'], speaker: 'Grace' },
      { label: 'Noah’s booking idea', keywords: ['booking system', 'slots', 'sign up'], speaker: 'Noah' },
      { label: 'Grace’s fire safety concern', keywords: ['fire safety', 'inspection', 'responsible', 'rules'], speaker: 'Grace' },
      { label: 'Chair’s electric-only pilot', keywords: ['electric-only', 'pilot', 'building code'], speaker: 'Dr Lindqvist' },
      { label: 'Conclusion', keywords: ['agreed', 'feedback survey', 'semester'] },
    ],
    modelAnswer:
      'The residence team proposed converting two lounges into shared kitchens. Noah supports the idea because many first-years cannot afford takeaway, and cooking together builds friendships and lowers food costs. He suggests a booking system with slots that residents sign up for. Grace is concerned about cleaning, since dishes could pile up without a rota, and the lounges would lose their social space. She also raises fire safety, noting that appliances need inspection and clear rules about who is responsible. Dr Lindqvist suggested an electric-only pilot in one building that meets the building code. Everyone agreed to a pilot with a written rota and a feedback survey after one semester.',
  },
  {
    id: 'sgd-019',
    type: 'summarize-group-discussion',
    title: 'AI tools for essay drafting',
    difficulty: 3,
    turns: [
      { speaker: 'Dr Osei', voice: 'male', text: 'The faculty council is debating whether students may use AI writing assistants when drafting essays. Felix, let us hear your view first.' },
      { speaker: 'Felix', voice: 'male', text: 'I believe the tools should be allowed, with disclosure. Writing assistants help students organise their thoughts, check grammar and understand feedback, which is a skill they will need at work.' },
      { speaker: 'Yara', voice: 'female', text: 'I disagree for assessed essays. The essay is meant to show the student’s own reasoning, and generated text can hide gaps in understanding. Authorship is the real issue.' },
      { speaker: 'Felix', voice: 'male', text: 'Detection tools are unreliable, so a ban would be hard to enforce. Disclosure policies are more realistic.' },
      { speaker: 'Yara', voice: 'female', text: 'Disclosure helps, but only if students declare exactly what they used. I worry that many will underreport, especially for longer assignments.' },
      { speaker: 'Dr Osei', voice: 'male', text: 'Let us find common ground. Could we allow AI for brainstorming and grammar checks, but require a statement of use for all assessed work?' },
      { speaker: 'Yara', voice: 'female', text: 'That would be acceptable, provided brainstorming is defined clearly and tutors can ask students to explain their drafts orally.' },
      { speaker: 'Felix', voice: 'male', text: 'I accept that. We agree that disclosure is essential and that the rules need clear examples.' },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['ai tools', 'writing assistants', 'essays'] },
      { label: 'Felix supports disclosure', keywords: ['disclosure', 'organise', 'skill', 'grammar'], speaker: 'Felix' },
      { label: 'Yara’s authorship concern', keywords: ['authorship', 'own reasoning', 'understanding', 'hide'], speaker: 'Yara' },
      { label: 'Felix on detection', keywords: ['detection', 'unreliable', 'enforce', 'ban'], speaker: 'Felix' },
      { label: 'Yara on underreporting', keywords: ['declare', 'underreport', 'longer assignments'], speaker: 'Yara' },
      { label: 'Chair’s compromise', keywords: ['brainstorming', 'grammar checks', 'statement of use'], speaker: 'Dr Osei' },
      { label: 'Conclusion', keywords: ['agreed', 'examples', 'disclosure'] },
    ],
    modelAnswer:
      'The faculty council debated whether students may use AI tools when drafting essays. Felix believes writing assistants should be allowed with disclosure, because they help students organise thoughts, check grammar and build a skill they will need at work. He argues that detection tools are unreliable, so a ban would be hard to enforce. Yara disagrees for assessed work, since an essay should show a student’s own reasoning, and generated text can hide gaps in understanding and raise authorship concerns. She worries that students may underreport their use, especially on longer assignments, so she wants them to declare it. Dr Osei proposed allowing AI for brainstorming and grammar checks, with a statement of use for all assessed work. Everyone agreed that disclosure is essential and that the rules need clear examples.',
  },
  {
    id: 'sgd-020',
    type: 'summarize-group-discussion',
    title: 'Campus community garden',
    difficulty: 1,
    turns: [
      { speaker: 'Mr Akhtar', voice: 'male', text: 'Hello everyone. The grounds team has proposed a community garden on the unused lawn behind the library. Sofia, what do you think?' },
      { speaker: 'Sofia', voice: 'female', text: 'I think it is a wonderful idea. Students could grow vegetables, learn about food, and take a break from screens. It would also bring international students together.' },
      { speaker: 'Tariq', voice: 'male', text: 'I like it too, but the lawn is used for outdoor events. If we plant beds there, we might lose space for graduation photos and open-air concerts.' },
      { speaker: 'Sofia', voice: 'female', text: 'Raised beds along the edge would leave the centre of the lawn open. We could move them if an event needs the space.' },
      { speaker: 'Tariq', voice: 'male', text: 'That is workable. Someone would need to water the beds during the summer, though. Who would take responsibility?' },
      { speaker: 'Mr Akhtar', voice: 'male', text: 'A student club could take responsibility, supported by the grounds team for irrigation and soil. I suggest a written agreement with the club.' },
      { speaker: 'Sofia', voice: 'female', text: 'I agree, and the produce could go to the food bank.' },
      { speaker: 'Tariq', voice: 'male', text: 'Agreed. As long as the beds do not block the events calendar, I am happy.' },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['community garden', 'lawn', 'garden'] },
      { label: 'Sofia’s benefits', keywords: ['vegetables', 'learn', 'community', 'international students'], speaker: 'Sofia' },
      { label: 'Tariq’s events concern', keywords: ['events', 'graduation', 'concerts', 'lose space'], speaker: 'Tariq' },
      { label: 'Sofia’s raised beds', keywords: ['raised beds', 'move them', 'centre'], speaker: 'Sofia' },
      { label: 'Tariq on watering', keywords: ['water the beds', 'responsibility', 'summer'], speaker: 'Tariq' },
      { label: 'Chair’s written agreement', keywords: ['student club', 'written agreement', 'irrigation'], speaker: 'Mr Akhtar' },
      { label: 'Conclusion', keywords: ['agreed', 'agree', 'food bank'] },
    ],
    modelAnswer:
      'The grounds team proposed a community garden on the unused lawn behind the library. Sofia supports the idea because students could grow vegetables, learn about food and bring international students together. Tariq worries that beds could take space from events such as graduation photos and outdoor concerts. Sofia suggested raised beds along the edge, which could be moved if an event needs the centre of the lawn. Tariq then asked who would water the beds in summer, so responsibility must be clear. Mr Akhtar proposed a written agreement with a student club, supported by the grounds team for irrigation. Everyone agreed, and the produce could go to the food bank.',
  },
  {
    id: 'sgd-021',
    type: 'summarize-group-discussion',
    title: 'Wage transparency in job postings',
    difficulty: 3,
    turns: [
      { speaker: 'Ms Lund', voice: 'female', text: 'Good morning. The HR committee is considering publishing salary ranges for all job postings. Hiroshi, would you like to start?' },
      { speaker: 'Hiroshi', voice: 'male', text: 'I think salary ranges should be published. Applicants could negotiate from a position of information, and it would reduce the pay gap between women and men offered similar roles.' },
      { speaker: 'Nadia', voice: 'female', text: 'I support transparency, but publishing ranges alone may not reduce pay gaps. Managers could still offer people at the top of a range without explaining why.' },
      { speaker: 'Hiroshi', voice: 'male', text: 'That is why the ranges should be tied to clear job levels, so that promotion criteria are visible too.' },
      { speaker: 'Nadia', voice: 'female', text: 'Agreed. My worry is that wide ranges, which some firms publish, tell applicants very little. Narrow bands would be more useful.' },
      { speaker: 'Ms Lund', voice: 'female', text: 'Narrower bands are possible, although the committee must consider competitive pressure on salaries across the sector.' },
      { speaker: 'Hiroshi', voice: 'male', text: 'Competition is a fair point, but openness usually helps the employer too, by attracting candidates who trust the process.' },
      { speaker: 'Nadia', voice: 'female', text: 'We agree that clear levels and narrow bands should be piloted in two departments before a company-wide rollout.' },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['salary ranges', 'job postings', 'pay transparency'] },
      { label: 'Hiroshi’s pay gap argument', keywords: ['negotiate', 'pay gap', 'information', 'gap'], speaker: 'Hiroshi' },
      { label: 'Nadia’s manager concern', keywords: ['top of a range', 'managers', 'explaining'], speaker: 'Nadia' },
      { label: 'Hiroshi on job levels', keywords: ['job levels', 'promotion', 'criteria'], speaker: 'Hiroshi' },
      { label: 'Nadia on narrow bands', keywords: ['wide ranges', 'narrow bands', 'narrow'], speaker: 'Nadia' },
      { label: 'Chair on competition', keywords: ['competitive', 'competition'], speaker: 'Ms Lund' },
      { label: 'Conclusion', keywords: ['agreed', 'agree', 'piloted', 'pilot'] },
    ],
    modelAnswer:
      'The HR committee discussed publishing salary ranges for all job postings. Hiroshi supports it because applicants could negotiate with better information, and it could narrow the pay gap between women and men in similar roles. He also wants ranges tied to job levels and promotion criteria. Nadia supports transparency but warns that managers could still offer people at the top of a range without explaining why. She prefers narrow bands, since wide ranges tell applicants very little. Ms Lund raised competitive pressure across the sector as a concern. Everyone agreed that clear levels and narrow bands should be piloted in two departments before a company-wide rollout.',
  },
  {
    id: 'sgd-022',
    type: 'summarize-group-discussion',
    title: 'Abolishing library late fees',
    difficulty: 1,
    turns: [
      { speaker: 'Dr Chen', voice: 'female', text: 'Good evening. The public library board is discussing whether to abolish late fees on overdue books. Kwame, what is your view?' },
      { speaker: 'Kwame', voice: 'male', text: 'I strongly support abolishing them. Fines discourage low-income families from borrowing, and the money raised is small compared with the cost of chasing overdue items.' },
      { speaker: 'Amelia', voice: 'female', text: 'I see the logic, but fines encourage people to return books on time, so that others can borrow them. Without them, popular titles could stay out for months.' },
      { speaker: 'Kwame', voice: 'male', text: 'Libraries can use reminder texts and renewal options instead. Those tools work well in other cities.' },
      { speaker: 'Amelia', voice: 'female', text: 'Reminders are useful, but I would keep a limit. Perhaps fines could stop after a set amount, so the library keeps some incentive to return items.' },
      { speaker: 'Dr Chen', voice: 'female', text: 'A cap is a sensible compromise. We could also review how many items are lost each year after the change, using the data.' },
      { speaker: 'Kwame', voice: 'male', text: 'I can accept a cap, provided we also offer amnesty days to clear old fines.' },
      { speaker: 'Amelia', voice: 'female', text: 'We agree that fairness and access matter most, and that data should guide the final decision.' },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['late fees', 'overdue', 'fines', 'library'] },
      { label: 'Kwame’s barrier argument', keywords: ['low-income', 'discourage', 'borrowing'], speaker: 'Kwame' },
      { label: 'Amelia’s return incentive', keywords: ['on time', 'popular titles', 'incentive', 'return'], speaker: 'Amelia' },
      { label: 'Kwame’s reminder idea', keywords: ['reminder', 'renewal', 'texts'], speaker: 'Kwame' },
      { label: 'Amelia’s cap', keywords: ['cap', 'set amount', 'limit'], speaker: 'Amelia' },
      { label: 'Chair’s review', keywords: ['review', 'lost', 'data'], speaker: 'Dr Chen' },
      { label: 'Conclusion', keywords: ['agree', 'agreed', 'fairness', 'access'] },
    ],
    modelAnswer:
      'The library board discussed abolishing late fees on overdue books. Kwame strongly supports it, because fines discourage low-income families from borrowing, and the money raised is small. Amelia accepts the fairness argument but says fines encourage people to return books on time, so popular titles are not kept out for months. Kwame suggested reminder texts and renewal options instead. Amelia proposed a limit, so that fines stop after a set amount. Dr Chen suggested a cap with a review of how many items are lost, using data. Everyone agreed that fairness and access matter most.',
  },
  {
    id: 'sgd-023',
    type: 'summarize-group-discussion',
    title: 'Vertical farming investment',
    difficulty: 3,
    turns: [
      { speaker: 'Professor Nakamura', voice: 'male', text: 'Thank you for joining. The agriculture faculty is considering investing in a vertical farm inside the research centre. Oscar, would you start?' },
      { speaker: 'Oscar', voice: 'male', text: 'I think it is a strong investment. Indoor farms use up to ninety percent less water than field crops, can operate year-round and reduce the distance food travels to market.' },
      { speaker: 'Ingrid', voice: 'female', text: 'I am sceptical about the energy bill. Artificial lighting is costly, and unless the power comes from renewables, the carbon benefits could disappear.' },
      { speaker: 'Oscar', voice: 'male', text: 'The new facility would run on the campus solar array, which covers about a third of demand. Lighting costs fall as more panels are added.' },
      { speaker: 'Ingrid', voice: 'female', text: 'Even so, the crops are mostly leafy greens. They offer limited protein, so I question whether vertical farming can really help food security.' },
      { speaker: 'Professor Nakamura', voice: 'male', text: 'That is a fair critique. Perhaps the farm should focus on research into crops such as herbs and seedlings, which feed directly into teaching programmes.' },
      { speaker: 'Oscar', voice: 'male', text: 'I accept the research focus. It would also give students hands-on experience with controlled-environment agriculture.' },
      { speaker: 'Ingrid', voice: 'female', text: 'Agreed, as long as the business case is reviewed before the second phase.' },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['vertical farm', 'vertical farming', 'indoor farms', 'investment'] },
      { label: 'Oscar on water and seasons', keywords: ['water', 'year-round', 'distance'], speaker: 'Oscar' },
      { label: 'Ingrid’s energy concern', keywords: ['energy bill', 'lighting', 'renewables', 'carbon'], speaker: 'Ingrid' },
      { label: 'Oscar’s solar power', keywords: ['solar array', 'solar', 'panels'], speaker: 'Oscar' },
      { label: 'Ingrid on crop limits', keywords: ['leafy greens', 'protein', 'food security'], speaker: 'Ingrid' },
      { label: 'Chair’s research focus', keywords: ['research', 'herbs', 'seedlings', 'teaching'], speaker: 'Professor Nakamura' },
      { label: 'Conclusion', keywords: ['agreed', 'business case', 'reviewed', 'phase'] },
    ],
    modelAnswer:
      'The faculty discussed investing in a vertical farm inside the research centre. Oscar supports it because indoor farms use far less water than field crops, can operate year-round and cut the distance food travels. He adds that the campus solar array would supply part of the power, reducing lighting costs. Ingrid is sceptical about the energy bill and the carbon benefits unless power comes from renewables, and she notes that leafy greens offer little protein, so the impact on food security is limited. Professor Nakamura suggested focusing on research into herbs and seedlings that feed directly into teaching. Oscar accepted that focus, and Ingrid agreed, provided the business case is reviewed before the second phase.',
  },
  {
    id: 'sgd-024',
    type: 'summarize-group-discussion',
    title: 'Rescheduling final exams',
    difficulty: 2,
    turns: [
      { speaker: 'Ms Reyes', voice: 'female', text: 'Good morning. The exam office proposes allowing students to reschedule one final exam per term without a medical note. Ibrahim, what do you think?' },
      { speaker: 'Ibrahim', voice: 'male', text: 'I support it. Students juggle jobs, caring duties and religious observances, and a fixed rule forces them to ask for permission. A simple option would reduce stress and last-minute appeals.' },
      { speaker: 'Clara', voice: 'female', text: 'I agree with flexibility, but one reschedule per term could be exploited. Students might delay revision and then ask for a new slot whenever they feel unprepared.' },
      { speaker: 'Ibrahim', voice: 'male', text: 'That is possible. We could require notice at least two weeks before the exam, which would discourage last-minute changes.' },
      { speaker: 'Clara', voice: 'female', text: 'Notice helps. I also worry about staffing. Invigilators and rooms would need to be booked for extra sittings, and that costs money.' },
      { speaker: 'Ms Reyes', voice: 'female', text: 'A reasonable point. We could cap the number of alternative sittings each week and use existing rooms outside peak times.' },
      { speaker: 'Ibrahim', voice: 'male', text: 'That would work for me. Students should also get a reply within three working days.' },
      { speaker: 'Clara', voice: 'female', text: 'Agreed. We should monitor how many requests are made in the first term.' },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['reschedule', 'exam', 'final exam'] },
      { label: 'Ibrahim supports it', keywords: ['jobs', 'caring duties', 'stress', 'religious observances'], speaker: 'Ibrahim' },
      { label: 'Clara’s exploitation risk', keywords: ['exploited', 'delay', 'revision', 'unprepared'], speaker: 'Clara' },
      { label: 'Ibrahim’s notice rule', keywords: ['two weeks', 'notice', 'last-minute'], speaker: 'Ibrahim' },
      { label: 'Clara’s staffing cost', keywords: ['invigilators', 'rooms', 'staffing', 'cost'], speaker: 'Clara' },
      { label: 'Chair’s cap', keywords: ['cap', 'peak times', 'existing rooms', 'alternative sittings'], speaker: 'Ms Reyes' },
      { label: 'Conclusion', keywords: ['agreed', 'monitor'] },
    ],
    modelAnswer:
      'The exam office proposed letting students reschedule one final exam per term without a medical note. Ibrahim supports it because students juggle jobs, caring duties and religious observances, and a flexible option reduces stress. He also suggests notice at least two weeks before the exam, to discourage last-minute changes. Clara agrees with flexibility but worries that students could exploit it and delay revision. She also raises staffing costs, since invigilators and rooms would have to be booked. Ms Reyes proposed capping alternative sittings and using existing rooms outside peak times. Everyone agreed to monitor requests during the first term.',
  },
  {
    id: 'sgd-025',
    type: 'summarize-group-discussion',
    title: 'Free public Wi-Fi downtown',
    difficulty: 2,
    turns: [
      { speaker: 'Ms Kowalski', voice: 'female', text: 'Thank you. The city is deciding whether to build a free public Wi-Fi network downtown. Victor, you asked for this item, so please begin.' },
      { speaker: 'Victor', voice: 'male', text: 'A public network would close the digital divide. Many residents cannot afford home internet, and they need it for job searches, forms and online learning.' },
      { speaker: 'Mei', voice: 'female', text: 'I agree about the need, but a free network could be expensive to maintain. Hardware, security updates and bandwidth grow each year, and taxpayers would carry that cost.' },
      { speaker: 'Victor', voice: 'male', text: 'Costs can be offset by advertising or partnerships with local businesses, though I accept that privacy must be protected.' },
      { speaker: 'Mei', voice: 'female', text: 'Privacy is my main concern. Public networks can track user activity, and residents should know exactly what data is collected.' },
      { speaker: 'Ms Kowalski', voice: 'female', text: 'Would a phased rollout work, starting with libraries and community centres where demand is highest?' },
      { speaker: 'Victor', voice: 'male', text: 'Yes, that gives us measurable use before we expand downtown.' },
      { speaker: 'Mei', voice: 'female', text: 'I can support that, provided there is an independent privacy audit.' },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['public wi-fi', 'wi-fi', 'wifi', 'free network', 'internet'] },
      { label: 'Victor’s digital divide argument', keywords: ['digital divide', 'afford', 'job searches', 'online learning'], speaker: 'Victor' },
      { label: 'Mei’s maintenance cost', keywords: ['maintenance', 'expensive', 'taxpayers', 'bandwidth'], speaker: 'Mei' },
      { label: 'Victor’s offset idea', keywords: ['advertising', 'partnerships', 'offset'], speaker: 'Victor' },
      { label: 'Mei’s privacy concern', keywords: ['privacy', 'track', 'data', 'audit'], speaker: 'Mei' },
      { label: 'Chair’s phased rollout', keywords: ['phased', 'libraries', 'community centres', 'demand'], speaker: 'Ms Kowalski' },
      { label: 'Conclusion', keywords: ['agreed', 'measurable', 'use'] },
    ],
    modelAnswer:
      'The council discussed a free public Wi-Fi network downtown. Victor argues that it would close the digital divide, since many residents cannot afford home internet for job searches, forms and online learning. Mei agrees about the need but warns that maintenance is expensive and taxpayers would carry the cost. Victor replied that costs could be offset by advertising or partnerships, while privacy must still be protected. Mei is most concerned about privacy, because networks can track activity, and she wants residents to know what data is collected. Ms Kowalski suggested a phased rollout, starting in libraries and community centres where demand is highest. Everyone agreed to measure use first, with an independent audit.',
  },
  {
    id: 'sgd-026',
    type: 'summarize-group-discussion',
    title: 'Tuition fee freeze',
    difficulty: 3,
    turns: [
      { speaker: 'Mr Adebayo', voice: 'male', text: 'Good afternoon. The student council is debating a proposal to freeze tuition fees for three years. Sophie, please open the discussion.' },
      { speaker: 'Sophie', voice: 'female', text: 'I strongly support a freeze. Students already graduate with heavy debt, and each fee increase adds to that burden for years. A freeze gives families predictable costs to plan around.' },
      { speaker: 'Aidan', voice: 'male', text: 'I understand the affordability argument, but a freeze could reduce funding for teaching. Universities depend on tuition for lecturers, labs and student services, and inflation keeps raising costs.' },
      { speaker: 'Sophie', voice: 'female', text: 'The province could make up the shortfall through grants. Tuition is not the only source of funding.' },
      { speaker: 'Aidan', voice: 'male', text: 'Grants depend on politics. If the province changes its priorities, universities would be left with a gap that the freeze has created.' },
      { speaker: 'Mr Adebayo', voice: 'male', text: 'A possible middle path is an inflation-linked cap, which limits increases without a complete freeze. Would that address both points?' },
      { speaker: 'Sophie', voice: 'female', text: 'A cap is better than an open-ended increase, though I would prefer a lower ceiling for the first year.' },
      { speaker: 'Aidan', voice: 'male', text: 'I can support an inflation-linked cap, as long as the teaching budget is protected in the agreement.' },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['tuition', 'fee freeze', 'freeze'] },
      { label: 'Sophie on debt', keywords: ['debt', 'predictable', 'burden', 'planning'], speaker: 'Sophie' },
      { label: 'Aidan on teaching funds', keywords: ['teaching', 'lecturers', 'funding', 'inflation'], speaker: 'Aidan' },
      { label: 'Sophie on grants', keywords: ['grants', 'province', 'shortfall'], speaker: 'Sophie' },
      { label: 'Aidan on political risk', keywords: ['politics', 'priorities', 'gap'], speaker: 'Aidan' },
      { label: 'Chair’s middle path', keywords: ['inflation-linked', 'cap', 'middle path'], speaker: 'Mr Adebayo' },
      { label: 'Conclusion', keywords: ['agreed', 'protected', 'cap'] },
    ],
    modelAnswer:
      'The student council debated freezing tuition fees for three years. Sophie supports a freeze because graduates already carry heavy debt, and each increase adds to that burden. She argues that predictable fees help families plan, and that the province could make up any shortfall through grants. Aidan understands the affordability concern, but he warns that a freeze could reduce funding for teaching, lecturers and labs, because inflation keeps raising costs. He also worries that grants depend on politics and changing priorities, which could leave a gap. Mr Adebayo proposed an inflation-linked cap as a middle path. Both speakers agreed to an inflation-linked cap, provided the teaching budget is protected.',
  },
  {
    id: 'sgd-027',
    type: 'summarize-group-discussion',
    title: 'Staff carpooling incentive',
    difficulty: 2,
    turns: [
      { speaker: 'Ms Pelletier', voice: 'female', text: 'Good morning. Facilities wants to offer staff a reduced parking rate for carpools of three or more. Tomasz, what do you think?' },
      { speaker: 'Tomasz', voice: 'male', text: 'I like the idea because parking is scarce and expensive. A discount would reduce traffic at peak hours and cut emissions from the car park.' },
      { speaker: 'Ayesha', voice: 'female', text: 'Carpooling is hard for shift workers. Our schedules differ, and people who finish late cannot wait for colleagues. The incentive would only reach a small group.' },
      { speaker: 'Tomasz', voice: 'male', text: 'A matching service could pair staff with similar hours. The facilities office already has a list of commuters from last year’s survey.' },
      { speaker: 'Ayesha', voice: 'female', text: 'Matching helps, but privacy matters. Staff should opt in before their postcodes are shared with anyone.' },
      { speaker: 'Ms Pelletier', voice: 'female', text: 'Agreed. We would use opt-in matching and offer a guaranteed ride home for emergencies, so people feel safe joining.' },
      { speaker: 'Tomasz', voice: 'male', text: 'That guaranteed ride would make a big difference. I would support the pilot if we track uptake each month.' },
      { speaker: 'Ayesha', voice: 'female', text: 'I can accept a pilot, as long as shift workers are represented in the design.' },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['carpooling', 'carpool', 'parking'] },
      { label: 'Tomasz on scarce parking', keywords: ['scarce', 'peak hours', 'emissions', 'traffic'], speaker: 'Tomasz' },
      { label: 'Ayesha on shift workers', keywords: ['shift workers', 'schedules', 'late', 'small group'], speaker: 'Ayesha' },
      { label: 'Tomasz’s matching service', keywords: ['matching service', 'pair', 'similar hours', 'survey'], speaker: 'Tomasz' },
      { label: 'Ayesha on privacy', keywords: ['privacy', 'opt in', 'postcodes'], speaker: 'Ayesha' },
      { label: 'Chair’s guaranteed ride', keywords: ['guaranteed ride', 'emergencies', 'safe'], speaker: 'Ms Pelletier' },
      { label: 'Conclusion', keywords: ['pilot', 'uptake', 'represented'] },
    ],
    modelAnswer:
      'The facilities team proposed a reduced parking rate for carpools of three or more. Tomasz supports it because parking is scarce, and a discount would reduce traffic at peak hours and cut emissions. He suggests a matching service that pairs staff with similar hours, using last year’s survey. Ayesha says carpooling is hard for shift workers, whose schedules differ, and she stresses privacy, so staff should opt in before their postcodes are shared. Ms Pelletier proposed a guaranteed ride home for emergencies, which would help people feel safe. Everyone accepted a pilot, with uptake tracked each month and shift workers represented in the design.',
  },
  {
    id: 'sgd-028',
    type: 'summarize-group-discussion',
    title: 'Reusable cups in campus cafés',
    difficulty: 2,
    turns: [
      { speaker: 'Professor Marsh', voice: 'male', text: 'Good afternoon. The student union is considering a reusable cup deposit scheme for the campus cafés. Yuki, please begin.' },
      { speaker: 'Yuki', voice: 'female', text: 'I think it would cut waste substantially. Students use thousands of disposable cups every week, and a deposit gives people a clear reason to bring their own or return cups.' },
      { speaker: 'Lucas', voice: 'male', text: 'The idea is good, but hygiene is my worry. Reusable cups need washing, and staff time would increase. Some students also prefer disposable cups for convenience.' },
      { speaker: 'Yuki', voice: 'female', text: 'Washing could be done by a dishwasher in each café, and the deposit could be refunded on return. That keeps hygiene standards high.' },
      { speaker: 'Lucas', voice: 'male', text: 'Dishwashers cost money. The cafés would also need storage for returned cups, which is not available in some outlets.' },
      { speaker: 'Professor Marsh', voice: 'male', text: 'A pilot in two cafés would test those costs. We could measure returns, staff workload and customer satisfaction.' },
      { speaker: 'Yuki', voice: 'female', text: 'That is sensible. I would also like the deposit to be modest, around one dollar, so it does not deter students.' },
      { speaker: 'Lucas', voice: 'male', text: 'I agree with a pilot. If the numbers work, I would support a campus-wide rollout.' },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['reusable cups', 'reusable cup', 'deposit', 'cafés'] },
      { label: 'Yuki on waste', keywords: ['waste', 'disposable cups', 'deposit'], speaker: 'Yuki' },
      { label: 'Lucas on hygiene', keywords: ['hygiene', 'washing', 'staff time', 'convenience'], speaker: 'Lucas' },
      { label: 'Yuki on dishwashers', keywords: ['dishwasher', 'refunded', 'hygiene standards', 'return'], speaker: 'Yuki' },
      { label: 'Lucas on storage and cost', keywords: ['dishwashers', 'storage', 'cost money', 'costs'], speaker: 'Lucas' },
      { label: 'Chair’s pilot', keywords: ['pilot', 'two cafés', 'measure', 'returns'], speaker: 'Professor Marsh' },
      { label: 'Conclusion', keywords: ['agreed', 'modest', 'rollout'] },
    ],
    modelAnswer:
      'The student union discussed a reusable cup deposit scheme for campus cafés. Yuki supports it because students use thousands of disposable cups each week, and a deposit encourages people to bring their own or return cups. Lucas is concerned about hygiene, since washing cups adds staff time, and some students prefer the convenience of disposables. Yuki suggested a dishwasher in each café, with the deposit refunded on return, to keep hygiene standards high. Lucas pointed out that dishwashers cost money and that storage for returned cups is limited. Professor Marsh proposed a pilot in two cafés to measure costs, returns and workload. Both agreed to a pilot with a modest deposit before any rollout.',
  },
  {
    id: 'sgd-029',
    type: 'summarize-group-discussion',
    title: 'Ride-hailing regulation',
    difficulty: 3,
    turns: [
      { speaker: 'Mr Lefebvre', voice: 'male', text: 'Good morning. The city is considering new rules for ride-hailing companies, including driver licensing and a fee per trip. Anika, please start.' },
      { speaker: 'Anika', voice: 'female', text: 'I support stricter rules. Drivers should have background checks, insurance and proper training, because passengers rely on that protection, especially at night.' },
      { speaker: 'Diego', voice: 'male', text: 'Rules are important, but a fee per trip would push fares up and hit drivers hardest. Many drivers work part-time and earn modest incomes.' },
      { speaker: 'Anika', voice: 'female', text: 'The fee could fund accessible vehicles and driver training. Drivers would benefit from better standards as well.' },
      { speaker: 'Diego', voice: 'male', text: 'Accessibility matters. However, an extra fee on every trip is a blunt tool. A fee based on distance or peak demand would be fairer.' },
      { speaker: 'Mr Lefebvre', voice: 'male', text: 'Distance-based fees have merit. Would a fee tied to accessible trips and driver training address both concerns?' },
      { speaker: 'Anika', voice: 'female', text: 'Yes, if the revenue is ring-fenced and reported publicly each year.' },
      { speaker: 'Diego', voice: 'male', text: 'I can accept that, as long as the fee does not push driver earnings below the minimum wage.' },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['ride-hailing', 'fares', 'trip'] },
      { label: 'Anika on safety', keywords: ['background checks', 'insurance', 'training', 'protection'], speaker: 'Anika' },
      { label: 'Diego on fares and earnings', keywords: ['fares', 'earn', 'earnings', 'part-time'], speaker: 'Diego' },
      { label: 'Anika on accessible vehicles', keywords: ['accessible', 'vehicles', 'accessibility'], speaker: 'Anika' },
      { label: 'Diego on distance-based fees', keywords: ['distance', 'peak demand', 'blunt', 'fairer'], speaker: 'Diego' },
      { label: 'Chair’s distance-based idea', keywords: ['distance-based', 'driver training'], speaker: 'Mr Lefebvre' },
      { label: 'Conclusion', keywords: ['ring-fenced', 'minimum wage', 'accepted'] },
    ],
    modelAnswer:
      'The city discussed new rules for ride-hailing companies, including driver licensing and a fee per trip. Anika supports stricter rules, such as background checks, insurance and training, because passengers rely on that protection. She suggests the fee could fund accessible vehicles. Diego warns that a trip fee would push fares up and hit drivers, many of whom work part-time and earn modest incomes. He argues that a fee based on distance or peak demand would be fairer than a blunt charge. Mr Lefebvre suggested tying the fee to accessible trips and driver training, perhaps with distance-based pricing. Both accepted a ring-fenced fee that does not push driver earnings below the minimum wage.',
  },
  {
    id: 'sgd-030',
    type: 'summarize-group-discussion',
    title: 'Recording all lectures',
    difficulty: 2,
    turns: [
      { speaker: 'Dr Ferreira', voice: 'female', text: 'Good morning. The faculty is discussing whether all lectures should be recorded and made available to students. Ethan, would you start?' },
      { speaker: 'Ethan', voice: 'male', text: 'I support recording. Students who work part-time or have caring responsibilities miss live sessions, and recordings let them catch up without falling behind.' },
      { speaker: 'Mila', voice: 'female', text: 'I like the flexibility, but I worry that recordings reduce attendance. Students who know they can watch later often skip class, and discussion suffers.' },
      { speaker: 'Ethan', voice: 'male', text: 'Attendance could be linked to in-class activities rather than the lecture itself. Interactive tasks would keep people present.' },
      { speaker: 'Mila', voice: 'female', text: 'Good idea. My other concern is copyright, since guest speakers may not agree to be recorded, and slides can include licensed images.' },
      { speaker: 'Dr Ferreira', voice: 'female', text: 'Copyright is an important issue. We could ask speakers to sign a consent form, and remove third-party images from the uploaded versions.' },
      { speaker: 'Ethan', voice: 'male', text: 'That is manageable. I would also like captions, so that students with hearing impairments are included.' },
      { speaker: 'Mila', voice: 'female', text: 'Agreed. As long as recordings are captioned and consent is collected, I can support a pilot.' },
    ],
    keyPoints: [
      { label: 'Topic', keywords: ['recording', 'recorded', 'lectures'] },
      { label: 'Ethan on flexibility', keywords: ['part-time', 'caring responsibilities', 'catch up'], speaker: 'Ethan' },
      { label: 'Mila on attendance', keywords: ['attendance', 'skip class', 'discussion', 'suffers'], speaker: 'Mila' },
      { label: 'Ethan on interactive tasks', keywords: ['interactive', 'in-class', 'activities'], speaker: 'Ethan' },
      { label: 'Mila on copyright', keywords: ['copyright', 'licensed', 'guest speakers', 'consent'], speaker: 'Mila' },
      { label: 'Chair’s consent form', keywords: ['consent form', 'remove', 'third-party'], speaker: 'Dr Ferreira' },
      { label: 'Conclusion', keywords: ['agreed', 'captions', 'pilot'] },
    ],
    modelAnswer:
      'The faculty discussed recording all lectures and making them available to students. Ethan supports it because students with part-time jobs or caring responsibilities can catch up without falling behind. Mila worries that recordings could reduce attendance and weaken discussion, so Ethan suggests linking attendance to in-class activities, which keeps people present. Mila also raises copyright, since guest speakers may not consent and slides can include licensed images. Dr Ferreira proposed a consent form for speakers and removing third-party images from the uploaded versions. The group agreed to pilot recordings with captions for accessibility.',
  },

  // ---------- Respond to a Situation ----------
  {
    id: 'rts-011',
    type: 'respond-to-situation',
    title: 'Broken heater',
    difficulty: 1,
    exams: ['pte-core'],
    situation:
      'You rent an apartment in Winnipeg. The heater has stopped working, and it has been off for two days. The apartment is very cold, so the problem is urgent. You call your landlord to explain what happened and ask for a repair. What do you say?',
    keyPoints: [
      { label: 'Describe the problem', keywords: ['heater', 'stopped working', 'two days', 'cold'] },
      { label: 'Polite request', keywords: ['could you', 'would it be possible', 'please'] },
      { label: 'Show urgency', keywords: ['urgent', 'as soon as possible'] },
      { label: 'Polite closing', keywords: ['thank', 'thanks', 'appreciate'] },
    ],
    modelAnswer:
      'Hi, this is Lena from unit four. I’m calling because the heater in my apartment has stopped working, and it has been off for two days. It is quite cold inside, so this is urgent. Could you please arrange a repair as soon as possible? I am available after five o’clock if that helps. Thanks very much for your help.',
  },
  {
    id: 'rts-012',
    type: 'respond-to-situation',
    title: 'Reference letter request',
    difficulty: 2,
    exams: ['pte-academic'],
    situation:
      'You are a final-year student. You need a reference letter from your professor for a scholarship application, and the deadline is in two weeks. You visit her during office hours to ask whether she has time to write it. What do you say?',
    keyPoints: [
      { label: 'Greeting', keywords: ['good morning', 'hello', 'hi'] },
      { label: 'State the request', keywords: ['reference letter', 'letter of reference'] },
      { label: 'Deadline', keywords: ['scholarship', 'deadline', 'two weeks'] },
      { label: 'Offer materials', keywords: ['transcript', 'summary', 'draft'] },
      { label: 'Ask about availability', keywords: ['would you be able', 'let me know', 'could you'] },
    ],
    modelAnswer:
      'Good morning, Professor. I hope you are well. I was wondering whether you would be able to write a reference letter for my scholarship application. The deadline is in two weeks, so I wanted to ask early. I can send you my transcript and a summary of my research project if that would help. Please let me know if you have the time, and thank you for considering it.',
  },
  {
    id: 'rts-013',
    type: 'respond-to-situation',
    title: 'Borrowing a ladder',
    difficulty: 1,
    exams: ['pte-core'],
    situation:
      'Your neighbour in Halifax knocks on your door and asks to borrow your ladder for the weekend. You planned to use it on Saturday to clean the gutters. You do not want to be rude, so you offer another solution. What do you say to your neighbour?',
    keyPoints: [
      { label: 'Polite refusal', keywords: ['sorry', 'unfortunately'] },
      { label: 'Explain the reason', keywords: ['saturday', 'gutters', 'myself'] },
      { label: 'Offer an alternative', keywords: ['instead', 'extension pole', 'hardware store'] },
      { label: 'Friendly closing', keywords: ['thanks', 'thank you', 'understanding'] },
    ],
    modelAnswer:
      'Hi Mark, thanks for asking. I’m sorry, but I can’t lend you the ladder this weekend. I need it myself on Saturday to clean the gutters. However, I could lend you my extension pole instead, which might reach the light fixture. Otherwise, the hardware store on Spring Garden Road rents ladders. Thanks for understanding.',
  },
  {
    id: 'rts-014',
    type: 'respond-to-situation',
    title: 'Faulty winter jacket',
    difficulty: 2,
    situation:
      'You ordered a winter jacket from an online clothing store in Ottawa. It arrived today, but the zipper is broken and the size is too small for you. You call the customer service line to ask about an exchange. What do you say to the agent?',
    keyPoints: [
      { label: 'Reason for calling', keywords: ['calling about', 'my order', 'hello'] },
      { label: 'Describe the problem', keywords: ['broken', 'zipper', 'too small'] },
      { label: 'Request an exchange', keywords: ['exchange', 'larger size', 'would it be possible'] },
      { label: 'Ask about other options', keywords: ['return', 'refund', 'options'] },
    ],
    modelAnswer:
      'Hello, I’m calling about my order from last week. The winter jacket arrived today, but unfortunately the zipper is broken, and the size is too small for me. Would it be possible to arrange an exchange for a larger size? If that isn’t possible, could you tell me about your return options or a refund? I can send photos of the damage. Thank you for your help.',
  },
  {
    id: 'rts-015',
    type: 'respond-to-situation',
    title: 'Late bus and a shift',
    difficulty: 2,
    exams: ['pte-core'],
    situation:
      'You work at a grocery store in Montreal. Your shift starts at eight tomorrow morning, but the bus that takes you there has been cancelled until noon. You call your supervisor to explain and ask for a solution. What do you say?',
    keyPoints: [
      { label: 'Explain the problem', keywords: ['bus', 'cancelled', 'route'] },
      { label: 'Apologise', keywords: ['sorry', 'apologise', 'apologies'] },
      { label: 'Propose a solution', keywords: ['start at noon', 'swap', 'cover'] },
      { label: 'Ask for approval', keywords: ['let me know', 'would it be possible'] },
    ],
    modelAnswer:
      'Hi Julie, I’m sorry to call so late, but the bus route to the store has been cancelled until noon tomorrow. I won’t be able to arrive by eight. Would it be possible for me to start at noon, or to swap my shift with someone who can cover the morning? I can also come in early on Thursday to make up the hours. Please let me know what works for you. Thank you.',
  },
  {
    id: 'rts-016',
    type: 'respond-to-situation',
    title: 'Declining a draft review',
    difficulty: 2,
    exams: ['pte-academic'],
    situation:
      'You are a graduate student. A classmate has asked you to review her draft essay before Friday, but you are presenting at a conference this week and have no time. You message her to explain and to suggest an alternative. What do you say?',
    keyPoints: [
      { label: 'Apologise', keywords: ['sorry', 'unfortunately'] },
      { label: 'Explain the conflict', keywords: ['conference', 'presentation', 'this week'] },
      { label: 'Offer an alternative', keywords: ['instead', 'writing centre', 'next tuesday', 'comments'] },
      { label: 'Positive closing', keywords: ['good luck', 'thanks'] },
    ],
    modelAnswer:
      'Hi Lina, I’m sorry, but I won’t be able to review your draft by Friday. I have a conference presentation this week, and I need to finish my slides. Instead, I could look at your introduction next Tuesday, or you could ask the writing centre for comments in the meantime. Please let me know which works best for you. Good luck with the draft, and thanks for thinking of me.',
  },
  {
    id: 'rts-017',
    type: 'respond-to-situation',
    title: 'Recycling bin mix-up',
    difficulty: 3,
    exams: ['pte-core'],
    situation:
      'Your apartment building in Victoria has a rule that residents must separate their recycling. Your neighbour keeps putting garbage into the recycling bin, and you have noticed it several times. You want to raise the issue without embarrassing him, and you offer some help. What do you say?',
    keyPoints: [
      { label: 'Friendly opening', keywords: ['hi', 'hello', 'how is your week'] },
      { label: 'Describe the issue', keywords: ['recycling bin', 'garbage', 'building rules'] },
      { label: 'Non-judgmental tone', keywords: ['i may be wrong', 'wondering', 'just wanted'] },
      { label: 'Offer help', keywords: ['happy to show', 'label', 'help'] },
    ],
    modelAnswer:
      'Hi Tom, how is your week going? I just wanted to mention something about the recycling bin. I think some garbage has been mixed in with the paper and bottles, and I know the building rules ask us to keep them separate. I may be wrong, and it is an easy mistake to make. I am happy to show you which items go where, or we could put a small label on the bin. Thanks for understanding.',
  },
  {
    id: 'rts-018',
    type: 'respond-to-situation',
    title: 'Error in the data',
    difficulty: 3,
    situation:
      'You are a research assistant. Your supervisor has asked you to present preliminary data at the department meeting tomorrow, but you have just discovered an error in the data set. You need to tell your supervisor privately before the meeting. What do you say?',
    keyPoints: [
      { label: 'Request a private word', keywords: ['could we', 'quick word', 'before the meeting'] },
      { label: 'Explain the error', keywords: ['error', 'discovered', 'data set', 'calculation'] },
      { label: 'Take responsibility', keywords: ['i should have', 'sorry', 'my mistake'] },
      { label: 'Propose a fix', keywords: ['recalculate', 'postpone', 'corrected'] },
    ],
    modelAnswer:
      'Excuse me, could we have a quick word before the meeting? I have discovered an error in the data set I prepared for tomorrow. A calculation in the second table was wrong, and I should have checked it earlier. I’m sorry about that. I can recalculate the figures tonight, and if necessary we could postpone my presentation until the corrected results are ready. Please let me know what you would prefer.',
  },
  {
    id: 'rts-019',
    type: 'respond-to-situation',
    title: 'Noisy hotel room',
    difficulty: 2,
    exams: ['pte-core'],
    situation:
      'You checked into a hotel in Quebec City last night. Your room is next to the elevator, and the noise kept you awake. When you booked, you requested a quiet room. You go to the front desk to ask for a change. What do you say to the receptionist?',
    keyPoints: [
      { label: 'Explain the issue', keywords: ['next to the elevator', 'noise', 'kept me awake'] },
      { label: 'Refer to the booking', keywords: ['requested', 'booking', 'reservation'] },
      { label: 'Request a change', keywords: ['would it be possible', 'change', 'move me'] },
      { label: 'Polite closing', keywords: ['thank you', 'appreciate'] },
    ],
    modelAnswer:
      'Good evening. I checked in last night, but unfortunately my room is next to the elevator, and the noise kept me awake. When I made my booking, I requested a quiet room, so I was hoping for a change. Would it be possible to move me to a room further from the elevator? I would really appreciate it. Thank you for your help.',
  },
  {
    id: 'rts-020',
    type: 'respond-to-situation',
    title: 'Credit for ideas',
    difficulty: 3,
    situation:
      'You manage a small team at work. A colleague keeps presenting your ideas as his own in the weekly meetings, without mentioning where they came from. You want to raise the issue privately and find a fair solution. You approach him after the meeting. What do you say?',
    keyPoints: [
      { label: 'Private setting', keywords: ['after the meeting', 'few minutes'] },
      { label: 'Describe the behaviour', keywords: ['presented', 'without mentioning', 'my ideas'] },
      { label: 'Positive tone', keywords: ['work well together'] },
      { label: 'Propose a solution', keywords: ['credit', 'follow up', 'name'] },
    ],
    modelAnswer:
      'Hi Daniel, do you have a few minutes after the meeting? I wanted to talk about something that has been on my mind. I noticed that in the last two meetings, you presented some of my ideas without mentioning where they came from. I want us to work well together, so I would like to agree on a fair way to give credit. For example, we could name each contributor on the slides, and I can follow up with a short email after each discussion. Does that sound fair?',
  },
  {
    id: 'rts-021',
    type: 'respond-to-situation',
    title: 'Cinema time change',
    difficulty: 1,
    exams: ['pte-core'],
    situation:
      'You are at the ticket counter of a cinema in Vancouver. You bought a ticket for the seven o’clock screening, but the cashier says it has been moved to eight. You want to know whether you can get a refund or switch to another film. What do you say to the cashier?',
    keyPoints: [
      { label: 'Explain the change', keywords: ['moved', 'eight', 'screening'] },
      { label: 'Ask for options', keywords: ['refund', 'switch', 'another film'] },
      { label: 'Polite request', keywords: ['could you', 'please', 'excuse me'] },
      { label: 'Thanks', keywords: ['thank you', 'thanks'] },
    ],
    modelAnswer:
      'Excuse me, I bought a ticket for the seven o’clock screening, but I heard it has been moved to eight. Could you please confirm the new time? If it is inconvenient for me, would it be possible to get a refund or switch to another film? Thank you for checking for me.',
  },
  {
    id: 'rts-022',
    type: 'respond-to-situation',
    title: 'Borrowing lecture notes',
    difficulty: 1,
    situation:
      'You are in the library. A classmate asks whether he can borrow your notes from yesterday’s lecture because he missed it. You are happy to help, but you need them back by Monday for an assignment. What do you say?',
    keyPoints: [
      { label: 'Agree to help', keywords: ['of course', 'happy to'] },
      { label: 'Set a condition', keywords: ['monday', 'return'] },
      { label: 'Offer extra support', keywords: ['scan', 'explain', 'summary'] },
      { label: 'Friendly close', keywords: ['no problem', 'let me know'] },
    ],
    modelAnswer:
      'Of course, I’m happy to help. You can borrow my notes, but could you return them by Monday, because I need them for my assignment? I can also scan the diagrams for you today, if that helps. Let me know if you have any questions, and no problem at all.',
  },
  {
    id: 'rts-023',
    type: 'respond-to-situation',
    title: 'Elevator out of service',
    difficulty: 2,
    exams: ['pte-core'],
    situation:
      'You live in a condominium in Calgary. The elevator has been out of service for a week, and your elderly neighbour cannot climb the stairs. You are going to call the building manager to ask for a quick repair and temporary help for residents who need it. What do you say?',
    keyPoints: [
      { label: 'Describe the problem', keywords: ['elevator', 'out of service', 'week', 'stairs'] },
      { label: 'Mention vulnerable residents', keywords: ['elderly', 'neighbour', 'mobility', 'needs help'] },
      { label: 'Request a repair', keywords: ['repair', 'fix', 'timeline'] },
      { label: 'Suggest temporary help', keywords: ['temporary', 'assistance', 'help'] },
    ],
    modelAnswer:
      'Hello, this is Ahmed from unit twelve. I’m calling about the elevator, which has been out of service for a week. My elderly neighbour cannot manage the stairs, so she is effectively stuck in her apartment. Could you give me a timeline for the repair, and let me know when it will be fixed? In the meantime, would it be possible to arrange temporary assistance for residents who need help with groceries?',
  },
  {
    id: 'rts-024',
    type: 'respond-to-situation',
    title: 'Declining weekend tutoring',
    difficulty: 2,
    situation:
      'You are a volunteer tutor at a community centre. A learner has asked you for extra lessons on weekends, but you are not available then because of your schedule. You want to decline politely and suggest an alternative. What do you say to the learner?',
    keyPoints: [
      { label: 'Thank the learner', keywords: ['thank', 'glad', 'appreciate'] },
      { label: 'Refuse politely', keywords: ['unfortunately', 'sorry', 'not available'] },
      { label: 'Give the reason', keywords: ['weekend', 'schedule', 'commitments'] },
      { label: 'Offer an alternative', keywords: ['weekday', 'evening', 'online', 'instead'] },
    ],
    modelAnswer:
      'Hi Maria, thank you for asking, and I’m glad you want extra practice. Unfortunately, I’m not available on weekends because of my schedule and other commitments. Would a weekday evening work instead? If not, I can recommend another tutor, or we could try an online session. I hope that helps. Please let me know what suits you best.',
  },
  {
    id: 'rts-025',
    type: 'respond-to-situation',
    title: 'Declining a society committee',
    difficulty: 2,
    exams: ['pte-academic'],
    situation:
      'The student society has invited you to join its events committee. However, the monthly meeting clashes with your lectures, so you cannot attend regularly. You call the coordinator to decline politely and suggest how you could still contribute. What do you say?',
    keyPoints: [
      { label: 'Thank for the invitation', keywords: ['thank you', 'invitation', 'grateful'] },
      { label: 'Explain the clash', keywords: ['clash', 'lectures', 'timetable'] },
      { label: 'Decline politely', keywords: ['unfortunately', 'unable', 'regret'] },
      { label: 'Offer to contribute', keywords: ['contribute', 'help', 'events'] },
    ],
    modelAnswer:
      'Hello, thank you very much for the invitation to join the events committee. I’m grateful for the offer. Unfortunately, the monthly meeting clashes with my lectures, so I am unable to attend regularly. However, I would be glad to help with events on a flexible basis, or to contribute ideas by email. Please let me know if that arrangement would work, and I hope we can work together in future.',
  },
  {
    id: 'rts-026',
    type: 'respond-to-situation',
    title: 'Delayed delivery for a client',
    difficulty: 3,
    situation:
      'You are a project manager. A client calls you angrily about a product that has been delayed. The delay was caused by a supplier, not by your team, and you now have a new delivery date. You want to calm the client, explain the situation and offer something to make up for the inconvenience. What do you say?',
    keyPoints: [
      { label: 'Acknowledge frustration', keywords: ['understand', 'frustrating', 'sorry'] },
      { label: 'Explain without blame', keywords: ['supplier', 'caused', 'outside our control'] },
      { label: 'Give a new date', keywords: ['next tuesday', 'delivery date'] },
      { label: 'Offer compensation', keywords: ['discount', 'compensation', 'credit'] },
    ],
    modelAnswer:
      'Good afternoon, Mr Lewis. I understand how frustrating this delay must be, and I’m sorry for the inconvenience. The delay was caused by a problem with a supplier, which was outside our control. The new delivery date is next Tuesday, and we will confirm it in writing today. As a gesture of goodwill, I can offer you a discount on your next order, and I will keep you updated at every stage. Thank you for your patience.',
  },
  {
    id: 'rts-027',
    type: 'respond-to-situation',
    title: 'Paper bags at checkout',
    difficulty: 1,
    exams: ['pte-core'],
    situation:
      'You are at the checkout of a supermarket in Toronto. You have forgotten your reusable bags, and the cashier asks whether you need plastic bags. You would prefer paper bags, but you are not sure how much they cost. What do you say to the cashier?',
    keyPoints: [
      { label: 'Explain', keywords: ['forgot', 'reusable bags'] },
      { label: 'Ask for an alternative', keywords: ['paper bags', 'instead'] },
      { label: 'Polite request', keywords: ['could i', 'please'] },
      { label: 'Cost question', keywords: ['how much', 'cost'] },
    ],
    modelAnswer:
      'Hi, I’m sorry, I forgot my reusable bags at home today. Could I buy a couple of paper bags instead? Please let me know how much they cost, and I will pay for them. Thank you so much for your help, and have a lovely day.',
  },
  {
    id: 'rts-028',
    type: 'respond-to-situation',
    title: 'Declining a last-minute review',
    difficulty: 3,
    exams: ['pte-academic'],
    situation:
      'You are a teaching assistant. After class, a student asks you to read her draft essay, which is due tomorrow morning. Department policy says assistants cannot review drafts in the final twenty-four hours before a deadline. You want to explain the policy kindly and suggest what she can do instead. What do you say?',
    keyPoints: [
      { label: 'Acknowledge the request', keywords: ['i understand', 'worried', 'deadline'] },
      { label: 'Explain the policy', keywords: ['policy', 'twenty-four hours', 'cannot'] },
      { label: 'Suggest alternatives', keywords: ['writing centre', 'instead', 'peer'] },
      { label: 'Encourage', keywords: ['confident', 'good luck', 'you have done'] },
    ],
    modelAnswer:
      'I understand that you are worried about the deadline, and I wish I could help. Unfortunately, department policy means I cannot review drafts in the final twenty-four hours before a submission. Instead, you could book a session at the writing centre tonight, or ask a classmate for a quick peer review. You have done a lot of work on this essay, so I am confident you will do well. Good luck tomorrow.',
  },
  {
    id: 'rts-029',
    type: 'respond-to-situation',
    title: 'Late for the dentist',
    difficulty: 2,
    situation:
      'You arrive ten minutes late for a dental appointment in Calgary. The receptionist says the dentist can only see you for half an hour, because the next patient is waiting. You want to apologise and ask whether the appointment can still go ahead. What do you say?',
    keyPoints: [
      { label: 'Apologise', keywords: ['sorry', 'late'] },
      { label: 'Explain the reason', keywords: ['traffic', 'delayed'] },
      { label: 'Ask about the appointment', keywords: ['still', 'half an hour', 'possible'] },
      { label: 'Accept the condition', keywords: ['that is fine', 'no problem'] },
    ],
    modelAnswer:
      'Hello, I’m so sorry I’m late. There was heavy traffic on the way, and I know that is no excuse. Would it still be possible to see the dentist today, even for half an hour? If the appointment needs to be shorter, that is fine with me. Thank you for fitting me in, and I’m sorry again for the delay.',
  },
  {
    id: 'rts-030',
    type: 'respond-to-situation',
    title: 'A cat in a rental apartment',
    difficulty: 3,
    exams: ['pte-core'],
    situation:
      'You have just signed a lease for an apartment in Halifax. The lease says pets are not allowed, but last week you adopted a small cat from a rescue centre. You want to ask the landlord for permission in a polite and honest way. What do you say?',
    keyPoints: [
      { label: 'Admit the situation', keywords: ['adopted', 'cat', 'lease'] },
      { label: 'Honest explanation', keywords: ['did not realise', 'rescue centre', 'i should have'] },
      { label: 'Request permission', keywords: ['would it be possible', 'permission'] },
      { label: 'Offer assurances', keywords: ['clean', 'deposit'] },
    ],
    modelAnswer:
      'Hello, I’m sorry to bring this up so soon after signing the lease. I did not realise that pets were not allowed, and I adopted a small cat last week from a rescue centre. I should have checked the rules earlier. Would it be possible to have permission to keep her? I would keep her clean and well looked after, and I am happy to pay any extra deposit that is required. Thank you for considering my request.',
  },
];
