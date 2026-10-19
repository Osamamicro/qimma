import type { Item } from '@/core';

/** v0.2 bank growth to 1,000 items (backlog item 7). Original content only (ADR-002). */
export const writingBankItems: Item[] = [
  {
    id: 'we-011',
    type: 'write-essay',
    title: 'Homework for young children',
    difficulty: 1,
    exams: ['pte-academic'],
    prompt:
      'Some educators argue that primary school children should not be given homework, because it takes time away from play and family life. Others believe that regular homework builds good study habits from an early age. Discuss both views and give your own opinion.',
    keyPoints: [
      { label: 'Time for play and family life', keywords: ['play', 'family life', 'free time'] },
      { label: 'Study habits and self-discipline', keywords: ['study habits', 'self-discipline', 'routine', 'discipline'] },
      { label: 'Teacher feedback on progress', keywords: ['feedback', 'progress'] },
    ],
    modelAnswer:
      'The question of whether young children should receive homework has divided parents and educators for many years. Some argue that the practice takes valuable time away from play and family life, while others believe that regular tasks help pupils develop good study habits early. In my view, homework has a place in primary education, but only when it is short, purposeful and carefully limited.\n\n' +
      'On the one hand, young children need time for free play, sport and conversation at home. A school day is already long and tiring for a six-year-old, and heavy evening tasks can leave little room for family life or rest. Research on child development also suggests that unstructured play helps children build creativity and social skills, which schoolwork cannot always provide. Consequently, large amounts of homework may do more harm than good.\n\n' +
      'On the other hand, a small amount of homework can encourage routine and self-discipline. When children learn to sit down, read for twenty minutes and finish a task, they practise skills that will matter in later years. Homework also gives teachers useful feedback about what pupils have understood, and it allows parents to see their child’s progress. For example, a weekly reading log can build a habit that continues long after the child has moved to secondary school.\n\n' +
      'In conclusion, primary schools should set homework sparingly, perhaps fifteen to twenty minutes a night, with a focus on reading and simple practice. This approach protects free time while still teaching the discipline that children need. Parents and teachers should therefore work together to keep the workload balanced.',
  },
  {
    id: 'we-012',
    type: 'write-essay',
    title: 'Zoos and conservation',
    difficulty: 2,
    exams: ['pte-academic'],
    prompt:
      'Zoos are often criticised for keeping animals in captivity, yet many now describe themselves as centres of conservation. Do the benefits of modern zoos outweigh the ethical concerns? Give reasons and examples to support your answer.',
    keyPoints: [
      { label: 'Conservation and breeding programmes', keywords: ['conservation', 'breeding', 'endangered', 'species'] },
      { label: 'Ethical concerns for animal welfare', keywords: ['welfare', 'captivity', 'ethical', 'cruelty'] },
      { label: 'Education of the public', keywords: ['education', 'awareness', 'learn'] },
    ],
    modelAnswer:
      'Zoos have changed a great deal over the last half century. Once they were mainly places of entertainment, but many now present themselves as centres of conservation and public education. The central question is whether the value they provide outweighs the ethical concerns about keeping wild animals in captivity. In my opinion, modern zoos can be justified, but only when they meet strict standards of animal welfare.\n\n' +
      'The strongest argument in favour of zoos is their role in conservation. Many species that were once close to extinction, such as certain birds and large mammals, now survive because of carefully managed breeding programmes. Some of these animals have later been returned to protected reserves in the wild. Without zoos, several endangered species would probably have disappeared entirely.\n\n' +
      'However, critics raise valid concerns about the quality of life of animals in captivity. Large, wide-ranging animals such as elephants or polar bears may struggle to live happily in enclosures, and stress can lead to unusual behaviour. Some people also believe that keeping animals for public viewing is wrong in principle. These ethical questions cannot simply be dismissed.\n\n' +
      'Zoos also play an important role in education. Visitors who see an animal up close are often more interested in protecting its habitat, and school programmes can raise awareness of threats such as habitat loss and illegal hunting. For example, a visit to a zoo may inspire a child to support a conservation charity later in life.\n\n' +
      'In conclusion, zoos are justified when they focus on breeding endangered species, educating the public and protecting animal welfare. Facilities that rely on entertainment alone are much harder to defend, and governments should inspect them carefully.',
  },
  {
    id: 'we-013',
    type: 'write-essay',
    title: 'Automated recruitment software',
    difficulty: 3,
    exams: ['pte-academic'],
    prompt:
      'Many companies now use software to screen job applications before a human reads them. Supporters say these systems are faster and fairer, while critics warn that they can reproduce hidden bias. Discuss the advantages and disadvantages of automated recruitment and state whether it should be regulated.',
    keyPoints: [
      { label: 'Speed and efficiency', keywords: ['efficiency', 'faster', 'speed', 'time'] },
      { label: 'Hidden bias and fairness', keywords: ['bias', 'fairness', 'discriminate', 'unfair'] },
      { label: 'Regulation and transparency', keywords: ['regulation', 'transparency', 'oversight'] },
    ],
    modelAnswer:
      'Automated recruitment software has become a routine part of hiring in many large organisations. Such systems can scan thousands of applications in minutes, ranking candidates against the criteria that a company has chosen. While this promises remarkable efficiency, it also raises serious questions about fairness. In my view, automated screening is useful, but it should be subject to regulation and independent oversight.\n\n' +
      'The advantages are considerable. Human recruiters can spend hours on a single vacancy, and they may be tempted to rely on first impressions. Software can apply the same rules to every applicant, which saves time and reduces the cost of hiring. Moreover, a shortlist produced quickly means that suitable candidates are contacted before they accept other offers.\n\n' +
      'The disadvantages, however, are equally serious. An algorithm learns from past hiring decisions, so if those decisions favoured certain groups, the software may reproduce the same bias. A system might penalise a gap in employment, for instance, and thereby discriminate against parents or people who have been ill. Because applicants rarely see how they were assessed, such errors are difficult to challenge.\n\n' +
      'For these reasons, employers should be required to explain how their tools make decisions and to test them for bias regularly. Transparency would allow applicants to understand the outcome, and independent audits could identify problems before they affect many people. Governments can support this by setting clear standards for the sector. Technology can improve hiring, but only when human judgement remains part of the process.',
  },
  {
    id: 'we-014',
    type: 'write-essay',
    title: 'Four-day working week',
    difficulty: 1,
    exams: ['pte-academic'],
    prompt:
      'Some companies have trialled a four-day working week with the same pay. Do you think this is a good idea for employers and employees? Give reasons and examples to support your answer.',
    keyPoints: [
      { label: 'Wellbeing and rest for staff', keywords: ['wellbeing', 'health', 'rest', 'stress'] },
      { label: 'Productivity for employers', keywords: ['productivity', 'output', 'efficient'] },
      { label: 'Service gaps for customers', keywords: ['customer', 'service', 'staffing'] },
    ],
    modelAnswer:
      'A four-day working week, with no reduction in pay, has attracted growing interest in recent years. Supporters claim that it improves employee wellbeing and productivity, while critics worry about the practical difficulties of covering a full schedule in fewer days. Overall, I believe the idea is worth trying, provided that employers plan their work carefully.\n\n' +
      'The main benefit is the effect on people’s health. An extra day of rest can reduce stress, improve sleep and give workers more time for family and hobbies. Employees who feel less exhausted are often more focused during working hours. For example, a trial in one country reported that many staff felt less stressed and took fewer sick days.\n\n' +
      'Employers may also gain. Several companies that tested the scheme found that output stayed the same or even rose, because meetings became shorter and tasks were completed more efficiently. Staff who are rested tend to make fewer mistakes, which saves money in the long run.\n\n' +
      'However, the scheme is not suitable for every business. Hospitals, shops and customer service centres need staff on duty for long hours, so they would need to hire extra workers or spread shifts more carefully. Without this planning, customers could face longer waits and poorer service.\n\n' +
      'In conclusion, a four-day week can benefit both employees and employers when it is introduced gradually and adapted to each sector. It should be seen as a practical experiment rather than a universal rule.',
  },
  {
    id: 'we-015',
    type: 'write-essay',
    title: 'Plastic bag bans',
    difficulty: 2,
    exams: ['pte-academic'],
    prompt:
      'Many cities have banned single-use plastic bags, while critics argue that the policy has little effect on the total amount of plastic waste. How effective are such bans, and what other measures could governments introduce? Give reasons and examples.',
    keyPoints: [
      { label: 'Reduced plastic waste', keywords: ['plastic waste', 'waste', 'litter', 'pollution'] },
      { label: 'Shoppers’ behaviour and reusable bags', keywords: ['reusable', 'habit', 'behaviour', 'behavior'] },
      { label: 'Deposits, taxes or incentives', keywords: ['tax', 'deposit', 'incentive', 'recycling'] },
    ],
    modelAnswer:
      'Single-use plastic bags have become a symbol of the throwaway culture that fills rivers and oceans. Many cities have responded by banning them from supermarkets and shops. Such bans can certainly reduce litter, but their overall effect is more limited than their supporters often suggest. In my view, bans are a useful first step, although they must be combined with other measures.\n\n' +
      'The clearest benefit of a ban is the visible reduction in plastic waste on streets and beaches. Within a year of the ban, volunteers in one large city collected far fewer bags from parks and waterways. However, many shoppers simply switched to thicker plastic bags that are sold for a few cents, so the total amount of plastic may not fall as much as expected.\n\n' +
      'The success of a ban depends on changing shoppers’ behaviour. Reusable bags need to become a habit, and people must remember to carry them. Shops can encourage this by offering cheaper or free reusable bags and by displaying clear information at the checkout.\n\n' +
      'Governments could strengthen the policy with other tools. A small deposit on bottles, for example, gives consumers a financial incentive to return them. A carbon tax on packaging could encourage manufacturers to use less plastic in the first place. Improving recycling facilities would also ensure that the plastic that is collected is actually reprocessed.\n\n' +
      'In conclusion, plastic bag bans are a sensible starting point, but they work best as part of a broader strategy. Governments that combine a ban with reusable bags, deposits and tax measures are more likely to reduce plastic waste in a lasting way.',
  },  {
    id: 'em-009',
    type: 'write-email',
    title: 'Freezing a gym membership',
    difficulty: 1,
    exams: ['pte-core'],
    situation:
      'You have been a member of a city sports centre for two years. You are going to work abroad for six months and will not be able to use the gym. Write to the membership office to ask whether your membership can be frozen during this period, and whether a fee applies.',
    bulletPoints: [
      { label: 'Explain the reason for the freeze', keywords: ['abroad', 'overseas', 'work', 'away'] },
      { label: 'Ask for the membership to be frozen', keywords: ['freeze', 'pause', 'suspend'] },
      { label: 'Ask about any fee', keywords: ['fee', 'charge', 'cost', 'payment'] },
    ],
    register: 'formal',
    modelAnswer:
      'Dear Membership Team,\n\n' +
      'I am writing to ask whether I can freeze my membership at the sports centre for six months. I will be working overseas from next month, so I will not be able to use the gym during that time.\n\n' +
      'Could you please confirm whether my membership can be paused, and if so, how I should request it? I would also like to know whether any fee or charge applies during the freeze.\n\n' +
      'Thank you for your help. I look forward to hearing from you.\n\n' +
      'Kind regards,\nRachel Morgan',
  },
  {
    id: 'em-010',
    type: 'write-email',
    title: 'Damaged kitchen knives',
    difficulty: 1,
    exams: ['pte-core'],
    situation:
      'You ordered a set of kitchen knives from an online store last week. When the parcel arrived, one of the blades was cracked and the box was damaged. Write to customer services to explain the problem and to request a refund or a replacement.',
    bulletPoints: [
      { label: 'Describe the damaged item', keywords: ['damaged', 'cracked', 'broken'] },
      { label: 'Request a refund or replacement', keywords: ['refund', 'replacement', 'replace'] },
      { label: 'Provide the order details', keywords: ['order number', 'reference', 'receipt'] },
    ],
    register: 'formal',
    modelAnswer:
      'Dear Customer Services Team,\n\n' +
      'I am writing about my recent order, reference number 48213, for a set of kitchen knives. The parcel arrived yesterday, and one of the blades was cracked when I opened the box. The outer packaging was also badly damaged.\n\n' +
      'I would be grateful if you could arrange either a full refund or a replacement set at no extra cost. I have attached a photograph of the damaged item and a copy of my receipt for your records.\n\n' +
      'Thank you for your help. I look forward to your reply.\n\n' +
      'Yours faithfully,\nPriya Shah',
  },
  {
    id: 'em-011',
    type: 'write-email',
    title: 'Asking for a flexible start',
    difficulty: 2,
    exams: ['pte-core'],
    situation:
      'You work as an accountant in an office. Your daughter has started at a new school, and her timetable means you need to begin work an hour later each morning for the next term. Write to your manager to request a flexible start time, explain why, and explain how you will keep up with your work.',
    bulletPoints: [
      { label: 'State the request', keywords: ['flexible start', 'start an hour later', 'later start', 'flexible hours'] },
      { label: 'Give the reason', keywords: ['daughter', 'school', 'childcare', 'timetable'] },
      { label: 'Explain how the work will be covered', keywords: ['workload', 'deadlines', 'cover', 'keep up'] },
    ],
    register: 'semi-formal',
    modelAnswer:
      'Hi Mr. Dawson,\n\n' +
      'I would like to ask whether I could have a flexible start time for the next term. My daughter has started at a new school, and her timetable means I need to begin work an hour later each morning.\n\n' +
      'I would still complete my full working hours, and I would stay later on those days to make up the time. I will also keep an eye on all deadlines and inform you early if a problem arises.\n\n' +
      'Would it be possible to discuss this at our next meeting? Thank you for considering my request.\n\n' +
      'Best regards,\nLaura Bennett',
  },
  {
    id: 'em-012',
    type: 'write-email',
    title: 'Housewarming invitation',
    difficulty: 1,
    exams: ['pte-core'],
    situation:
      'You have just moved into a new flat across the city. Write to a close friend to invite them to a small housewarming party on Saturday evening. Give the time, say what you will provide, and ask them to bring something.',
    bulletPoints: [
      { label: 'Invite to the housewarming party', keywords: ['housewarming', 'party', 'invite', 'come round'] },
      { label: 'Give the date and time', keywords: ['saturday', 'evening', 'pm'] },
      { label: 'Ask them to bring something', keywords: ['bring', 'bottle', 'plant', 'snacks'] },
    ],
    register: 'informal',
    modelAnswer:
      'Hi Sam,\n\n' +
      'Guess what? I finally moved into my new flat across town, and I am having a small housewarming party this Saturday evening. I would love you to come round from about 7 pm.\n\n' +
      'I will provide snacks and some cold drinks, so please just turn up. Could you bring a bottle of something nice, or maybe a plant for the windowsill? It would be brilliant to see you there.\n\n' +
      'Let me know if you can make it. Cheers,\nAlex',
  },
  {
    id: 'em-013',
    type: 'write-email',
    title: 'Requesting an official transcript',
    difficulty: 3,
    exams: ['pte-core'],
    situation:
      'You graduated from a university two years ago and now need an official academic transcript for a job application abroad. The records office requires a written request. Write to the registry to ask for one official transcript, explain the purpose, and ask about the fee and the processing time.',
    bulletPoints: [
      { label: 'Request an official transcript', keywords: ['transcript', 'academic record', 'records'] },
      { label: 'Explain the purpose', keywords: ['application', 'job', 'employer', 'visa'] },
      { label: 'Ask about the fee and processing time', keywords: ['fee', 'processing', 'how long', 'weeks'] },
    ],
    register: 'formal',
    modelAnswer:
      'Dear Registry Office,\n\n' +
      'I graduated in 2024 with a degree in civil engineering, and I am now applying for a position with an overseas employer. I would therefore be grateful if you could issue one official transcript of my academic record.\n\n' +
      'Please send the document directly to the employer at the address provided below. Could you also confirm the fee for this service and the processing time? If the transcript needs to be sent by courier, I would be happy to pay the additional cost.\n\n' +
      'Thank you for your assistance. I look forward to your confirmation.\n\n' +
      'Yours sincerely,\nOmar Haddad',
  },  {
    id: 'em-014',
    type: 'write-email',
    title: 'Hotel receptionist enquiry',
    difficulty: 2,
    exams: ['pte-core'],
    situation:
      'You have seen an advertisement for a receptionist post at a seaside hotel. You have two years of front-desk experience and you speak Spanish. Write to the hotel manager, Ms. Greene, to ask whether the vacancy is still open, summarise your experience and request an interview.',
    bulletPoints: [
      { label: 'Ask whether the vacancy is open', keywords: ['vacancy', 'still open', 'available', 'position'] },
      { label: 'Summarise relevant experience', keywords: ['experience', 'front desk', 'reception', 'years'] },
      { label: 'Request an interview', keywords: ['interview', 'meeting', 'discuss'] },
    ],
    register: 'formal',
    modelAnswer:
      'Dear Ms. Greene,\n\n' +
      'I am writing in response to your advertisement for a receptionist at the seaside hotel. I would like to know whether the vacancy is still available.\n\n' +
      'I have worked at a front desk for two years, handling reservations, check-ins and guest enquiries. I also speak Spanish fluently, which may be useful for guests from abroad.\n\n' +
      'I would welcome the opportunity to attend an interview and to discuss how my experience could suit your team. Thank you for considering my application.\n\n' +
      'Yours sincerely,\nDaniel Ruiz',
  },
  {
    id: 'em-015',
    type: 'write-email',
    title: 'Asking a neighbour for a favour',
    difficulty: 2,
    exams: ['pte-core'],
    situation:
      'Your neighbour, Jo, lives in the flat next door. You are away for the weekend and a large parcel is due on Monday. Write a short informal message to Jo asking whether they can take the parcel in, say when you will be back, and offer to return the favour.',
    bulletPoints: [
      { label: 'Explain the parcel', keywords: ['parcel', 'delivery', 'package'] },
      { label: 'Say when you will be back', keywords: ['back on', 'get back', 'home on', 'tuesday'] },
      { label: 'Offer to return the favour', keywords: ['favour', 'favor', 'repay', 'owe'] },
    ],
    register: 'informal',
    modelAnswer:
      'Hi Jo,\n\n' +
      'Hope you are well! Would you mind taking a parcel in for me on Monday? It is a big box from an online furniture shop, and the courier usually leaves it at the door if nobody answers.\n\n' +
      'I will be back on Tuesday morning, so I can collect it then. If you need anything while I am away, just message me and I will sort it out.\n\n' +
      'Thanks a lot, I owe you one.\n\n' +
      'Cheers,\nMia',
  },
  {
    id: 'em-016',
    type: 'write-email',
    title: 'Disputing a card charge',
    difficulty: 3,
    exams: ['pte-core'],
    situation:
      'Your bank statement shows a charge of 120 dollars for a card payment that you did not make. You have checked your records and believe the transaction is a duplicate of a payment made last month. Write to the customer team to dispute the charge, ask for an investigation and request a temporary credit while it is reviewed.',
    bulletPoints: [
      { label: 'Identify the disputed charge', keywords: ['charge', 'transaction', 'payment', 'statement'] },
      { label: 'Explain why it is an error', keywords: ['duplicate', 'twice', 'error', 'did not make'] },
      { label: 'Request an investigation and a temporary credit', keywords: ['investigation', 'investigate', 'credit', 'refund'] },
    ],
    register: 'formal',
    modelAnswer:
      'Dear Customer Team,\n\n' +
      'I am writing to dispute a card transaction of 120 dollars that appears on my statement dated 3 October. I did not authorise this payment, and I believe it is a duplicate of a charge that was made last month.\n\n' +
      'I would be grateful if you could investigate the matter as a priority. Please also issue a temporary credit to my account while the review is in progress, so that the amount is not taken from my budget.\n\n' +
      'Could you confirm in writing when the investigation has been completed? Thank you for your prompt attention.\n\n' +
      'Yours faithfully,\nGrace Lee',
  },
  {
    id: 'em-017',
    type: 'write-email',
    title: 'Rescheduling a client meeting',
    difficulty: 2,
    exams: ['pte-core'],
    situation:
      'You are a project coordinator. A client meeting planned for Thursday morning has to be moved because of a clash with a site visit. Write to the client, Mr. Okonkwo, to apologise, propose two alternative times and ask him to confirm which suits him best.',
    bulletPoints: [
      { label: 'Apologise for the change', keywords: ['apologise', 'apologize', 'sorry', 'apologies'] },
      { label: 'Propose alternative times', keywords: ['alternative', 'instead', 'options', 'propose', 'suggest'] },
      { label: 'Ask the client to confirm', keywords: ['confirm', 'confirmation', 'let me know', 'reply'] },
    ],
    register: 'semi-formal',
    modelAnswer:
      'Dear Mr. Okonkwo,\n\n' +
      'I am sorry to let you know that our meeting on Thursday morning needs to be moved. A site visit has been scheduled at the same time, and I apologise for any inconvenience this causes.\n\n' +
      'Instead, I would suggest either Thursday at three in the afternoon or Friday at ten in the morning. Both options would give us enough time to review the proposal in detail.\n\n' +
      'Please confirm which time suits you best, or let me know if neither works.\n\n' +
      'Kind regards,\nHelen Park',
  },  {
    id: 'em-018',
    type: 'write-email',
    title: 'Leave of absence request',
    difficulty: 1,
    exams: ['pte-core'],
    situation:
      'You are a second-year student and need to take three months away from your course because of a family illness. Write to the student services office to ask for a temporary leave of absence, explain your reason and ask which documents you need to provide.',
    bulletPoints: [
      { label: 'Request a leave of absence', keywords: ['leave of absence', 'break', 'suspend', 'leave'] },
      { label: 'Explain the reason', keywords: ['family', 'illness', 'health', 'caring'] },
      { label: 'Ask about required documents', keywords: ['documents', 'documentation', 'evidence', 'forms'] },
    ],
    register: 'formal',
    modelAnswer:
      'Dear Student Services Team,\n\n' +
      'I am writing to request a temporary leave of absence from my course for three months. I am currently in my second year of study, and I need to take a break because of a serious illness in my family.\n\n' +
      'I would be grateful for an explanation of how this leave would affect my place on the course and my fees. Could you also let me know what documentation I must provide to support the request?\n\n' +
      'I can supply any forms or evidence that you require as soon as possible. Thank you for your understanding.\n\n' +
      'Yours faithfully,\nNadia Kowalski',
  },
  {
    id: 'em-019',
    type: 'write-email',
    title: 'Late hotel arrival',
    difficulty: 2,
    exams: ['pte-core'],
    situation:
      'You booked a hotel room for three nights from the 14th. Your flight has been delayed and you will arrive a day later than planned. Write to the hotel reception to ask whether you can move your check-in date by one day, keep the same room type and confirm any change to the price.',
    bulletPoints: [
      { label: 'Explain the flight delay', keywords: ['flight', 'delayed', 'delay', 'late'] },
      { label: 'Request a new check-in date', keywords: ['check-in', 'check in', 'arrival', 'move'] },
      { label: 'Confirm the room and price', keywords: ['same room', 'room type', 'price', 'rate'] },
    ],
    register: 'semi-formal',
    modelAnswer:
      'Dear Reception Team,\n\n' +
      'I have a reservation for three nights starting on the 14th under the name Marcus Webb. Unfortunately, my flight has been delayed, so I will now arrive one day later than planned.\n\n' +
      'Would it be possible to move my check-in date to the 15th and keep the same room type? If the price changes, please let me know the new rate before I confirm.\n\n' +
      'Thank you for your help with this. I would be grateful for a reply by email.\n\n' +
      'Kind regards,\nMarcus Webb',
  },
  {
    id: 'em-020',
    type: 'write-email',
    title: 'Declining a referee request',
    difficulty: 3,
    exams: ['pte-core'],
    situation:
      'A former student asks you to act as a referee for a scholarship application. You are happy to support them, but you have only supervised their work for one term and could not write a detailed letter before the deadline. Write a reply that declines politely, explains your limits and suggests another person who could help.',
    bulletPoints: [
      { label: 'Thank them and decline the request', keywords: ['thank you', 'thanks', 'unable', 'regret'] },
      { label: 'Explain the limited contact', keywords: ['one term', 'supervised', 'limited', 'knowledge'] },
      { label: 'Suggest an alternative referee', keywords: ['alternative', 'another', 'suggest', 'recommend'] },
    ],
    register: 'formal',
    modelAnswer:
      'Dear Amira,\n\n' +
      'Thank you for thinking of me for your scholarship application. I regret that I am unable to act as your referee, because I supervised your work for only one term and would not be able to provide the detailed assessment that the committee expects.\n\n' +
      'Your coursework was excellent, and I would be glad to confirm this in a short statement. However, you would be better served by a referee who has worked with you for longer.\n\n' +
      'I would suggest contacting Dr. Hughes, who taught you in your second year. Please let me know if I can offer any other support.\n\n' +
      'Kind regards,\nPeter Owusu',
  },
  {
    id: 'em-021',
    type: 'write-email',
    title: 'Book club invitation',
    difficulty: 1,
    exams: ['pte-core'],
    situation:
      'You run a small book club that meets on the first Thursday of each month in a cafe. Write to a friend who loves reading to invite them to join. Mention the meeting time, the book for this month and ask them to let you know if they can come.',
    bulletPoints: [
      { label: 'Invite them to join the club', keywords: ['join', 'book club', 'invite', 'come along'] },
      { label: 'Give the meeting details', keywords: ['thursday', 'cafe', 'seven', 'evening'] },
      { label: 'Mention this month’s book', keywords: ['novel', 'book', 'title', 'read'] },
    ],
    register: 'informal',
    modelAnswer:
      'Hi Lara,\n\n' +
      'Do you fancy joining my book club? We meet on the first Thursday of every month at the cafe on Hanover Street, and the evening usually starts around seven.\n\n' +
      'This month we are reading a crime novel, which is a bit of a page-turner. Everyone brings their own opinions, so it is pretty relaxed.\n\n' +
      'Let me know if you can come along. It would be lovely to see you there!\n\n' +
      'Cheers,\nBen',
  },  {
    id: 'em-022',
    type: 'write-email',
    title: 'Complaint about a restaurant bill',
    difficulty: 2,
    exams: ['pte-core'],
    situation:
      'You dined at a restaurant on Saturday for a family birthday. The bill included a 15 percent service charge that was not mentioned when you booked, and one of the main dishes was served cold. Write to the manager to complain, ask for the charge to be removed and request a partial refund for the cold dish.',
    bulletPoints: [
      { label: 'Describe the cold dish', keywords: ['cold', 'served cold', 'poor', 'unacceptable'] },
      { label: 'Question the service charge', keywords: ['service charge', 'charge', 'surcharge', 'unannounced'] },
      { label: 'Request a refund or adjustment', keywords: ['refund', 'adjust', 'partial', 'reduce'] },
    ],
    register: 'formal',
    modelAnswer:
      'Dear Manager,\n\n' +
      'I am writing to complain about our meal at your restaurant on Saturday evening. One of the main courses was served cold, and we had to wait a long time for it to be replaced.\n\n' +
      'I was also surprised to see a service charge of 15 percent added to the bill. This charge was not mentioned when I made the booking, and I do not believe it is acceptable to add it without notice.\n\n' +
      'I would be grateful if you could remove the service charge and arrange a partial refund for the cold dish. Thank you for looking into this matter. I look forward to your response.\n\n' +
      'Yours faithfully,\nHannah Brooks',
  },
  {
    id: 'em-023',
    type: 'write-email',
    title: 'Missing school trip form',
    difficulty: 2,
    exams: ['pte-core'],
    situation:
      'Your son is in Year 5 at a primary school. You received a letter about a class trip to a science museum next month, but the consent form has not arrived. Write to his class teacher to ask for another copy, confirm the cost of the trip and ask whether a packed lunch is needed.',
    bulletPoints: [
      { label: 'Ask for the consent form', keywords: ['consent form', 'form', 'permission', 'permission slip'] },
      { label: 'Ask about the cost', keywords: ['cost', 'price', 'fee', 'payment'] },
      { label: 'Ask about lunch', keywords: ['packed lunch', 'lunch', 'meal', 'food'] },
    ],
    register: 'semi-formal',
    modelAnswer:
      'Dear Ms. Carter,\n\n' +
      'I am writing about the class trip to the science museum next month. My son, Tomas, has told me about it, but the consent form has not yet reached me. Could you please send me another copy?\n\n' +
      'I would also like to confirm the cost of the trip and whether it needs to be paid in advance. Please let me know if a packed lunch is required, or whether the school will provide a meal.\n\n' +
      'Thank you for your help. I would be grateful for a reply by Friday.\n\n' +
      'Kind regards,\nSofia Nilsson',
  },
  {
    id: 'em-024',
    type: 'write-email',
    title: 'Requesting a grant report extension',
    difficulty: 3,
    exams: ['pte-core'],
    situation:
      'You manage a community arts project funded by a regional council. The final report is due at the end of the month, but a key partner has withdrawn, which has delayed the evaluation by six weeks. Write to the grants officer to request an extension, explain the cause of the delay and propose a revised timetable.',
    bulletPoints: [
      { label: 'Request an extension', keywords: ['extension', 'extend', 'additional time', 'deadline'] },
      { label: 'Explain the cause of the delay', keywords: ['partner', 'withdrawn', 'delay', 'evaluation'] },
      { label: 'Propose a revised timetable', keywords: ['timetable', 'schedule', 'revised', 'new date'] },
    ],
    register: 'formal',
    modelAnswer:
      'Dear Mr. Tanaka,\n\n' +
      'I am writing to request an extension to the deadline for our final report on the community arts project. The report is currently due at the end of this month, but we need additional time to complete the work.\n\n' +
      'One of our key partners has withdrawn from the project, and this has delayed the evaluation by six weeks.\n\n' +
      'I would therefore propose a revised timetable, with the draft report delivered by the end of next month and the final version submitted two weeks later. I would be happy to discuss this schedule at your convenience.\n\n' +
      'Yours sincerely,\nInes Moreau',
  },
  {
    id: 'em-025',
    type: 'write-email',
    title: 'Thank-you for a wedding gift',
    difficulty: 1,
    exams: ['pte-core'],
    situation:
      'A friend sent you a thoughtful wedding gift and a card, but you were too busy to thank them properly at the reception. Write a short informal thank-you message, say how much you like the gift and invite them to visit when you are settled.',
    bulletPoints: [
      { label: 'Thank them for the gift', keywords: ['thank', 'thanks', 'gift', 'present'] },
      { label: 'Say how much you like it', keywords: ['love it', 'lovely', 'beautiful', 'adore'] },
      { label: 'Invite them to visit', keywords: ['visit', 'come over', 'come round', 'stay'] },
    ],
    register: 'informal',
    modelAnswer:
      'Hi Ruth,\n\n' +
      'Thanks so much for the beautiful wedding present. We both love it, and the vase already has pride of place in our living room!\n\n' +
      'I am sorry I did not get a proper chance to thank you at the reception. It was such a busy day, and I hardly saw anyone properly.\n\n' +
      'Please come over and visit us once we are settled. We would love to show you around and cook you dinner.\n\n' +
      'Warm wishes,\nPriya and Tom',
  },  {
    id: 'we-016',
    type: 'write-essay',
    title: 'Privacy education for teenagers',
    difficulty: 2,
    exams: ['pte-academic'],
    prompt:
      'Many young people share personal details online without fully understanding who can see them. Should schools teach privacy skills, or is this a responsibility that belongs to parents and social media companies? Discuss both views and give your opinion.',
    keyPoints: [
      { label: 'Schools teaching digital skills', keywords: ['schools', 'classroom', 'digital literacy', 'curriculum'] },
      { label: 'Parents and family responsibility', keywords: ['parents', 'family', 'supervise', 'home'] },
      { label: 'Company responsibility and settings', keywords: ['companies', 'platforms', 'privacy settings', 'settings'] },
    ],
    modelAnswer:
      'Young people today often publish photographs, locations and personal opinions online, sometimes without realising who can see them. This raises an important question about who should teach them to protect their information. In my view, schools have the greatest long-term role, although parents and technology companies also share the responsibility.\n\n' +
      'Schools are well placed to teach these skills because they reach every pupil, regardless of family background. A short unit on digital literacy in the curriculum could explain how data is collected, why passwords matter and how to recognise a scam. Teachers can also use real examples, so that students learn from situations they recognise.\n\n' +
      'Nevertheless, parents cannot be excused from this task. Families who talk openly about online risks, and who supervise younger children’s devices at home, give young people a safer starting point. Parents also model good behaviour, since children copy what adults post. For this reason, the home is the first place where habits are formed.\n\n' +
      'Companies, however, have the most powerful tools. They design the default settings that determine who can see a profile, and many users never change them. If platforms made privacy settings simpler and placed them at sign-up, young people would be protected automatically.\n\n' +
      'In conclusion, privacy education is a shared responsibility. Schools should provide the knowledge, families should reinforce it at home, and companies should make protection the default. Only when all three act together can young people share online with confidence.',
  },
  {
    id: 'we-017',
    type: 'write-essay',
    title: 'Compulsory voting',
    difficulty: 3,
    exams: ['pte-academic'],
    prompt:
      'Some countries require citizens to vote in elections and penalise those who do not. Supporters argue that compulsory voting strengthens democracy, whereas opponents believe it infringes personal freedom. Evaluate both positions and state which you find more persuasive.',
    keyPoints: [
      { label: 'Higher turnout and representation', keywords: ['turnout', 'representative', 'representation', 'legitimacy'] },
      { label: 'Personal freedom and choice', keywords: ['freedom', 'choice', 'liberty', 'coerce'] },
      { label: 'Informed voting', keywords: ['informed', 'uninformed', 'knowledge', 'ignorant'] },
    ],
    modelAnswer:
      'Compulsory voting is practised in several democracies, where citizens who abstain may face a small fine. Supporters maintain that high turnout makes governments more representative, while opponents argue that the state should not compel people to take part in politics. After weighing these positions, I find the case against compulsion more persuasive, although the concerns behind the policy are legitimate.\n\n' +
      'The strongest argument for compulsory voting is its effect on legitimacy. When only a minority of citizens votes, the winning party may claim a mandate it does not really have, and policies can favour the most motivated groups. Countries with compulsory systems usually record much higher turnout, and elected officials therefore represent a wider cross-section of society.\n\n' +
      'However, forcing people to vote conflicts with the principle of individual liberty. A citizen who has no knowledge of the candidates, or who disagrees with every option, may be coerced into casting a meaningless ballot. Such choices are unlikely to reflect an informed view, and they can undermine the quality of the result. Freedom to abstain is itself a form of political expression.\n\n' +
      'A better approach would be to encourage participation through easier registration, voting at weekends and better civic education. Such measures can raise turnout without penalising those who choose not to participate. Voters who understand the issues are more likely to vote knowingly, which is the real goal of any electoral system.\n\n' +
      'In conclusion, compulsory voting promises higher turnout and broader representation, but it sacrifices the freedom that makes voting meaningful. Democracies should invest in education and access rather than fines, so that people vote because they want to.',
  },
  {
    id: 'we-018',
    type: 'write-essay',
    title: 'Gap year after school',
    difficulty: 1,
    exams: ['pte-academic'],
    prompt:
      'Many students take a gap year between school and university. Is a year of travel or work a good use of time, or do students lose momentum by delaying their studies? Give reasons and examples to support your answer.',
    keyPoints: [
      { label: 'Maturity and life experience', keywords: ['maturity', 'experience', 'independence', 'grow'] },
      { label: 'Work experience and money', keywords: ['work experience', 'job', 'savings', 'money'] },
      { label: 'Losing momentum in study', keywords: ['momentum', 'motivation', 'forget', 'delay'] },
    ],
    modelAnswer:
      'Taking a gap year between school and university has become increasingly common. Some students travel, while others work or volunteer, and many return to their studies with fresh enthusiasm. However, critics worry that a break may cause students to lose momentum. On balance, I believe a well-planned gap year is valuable, provided that students have clear goals.\n\n' +
      'The main advantage is personal development. Living independently, managing money and working alongside strangers can build maturity and confidence. For many young people, this experience helps them decide what to study and why. Travel also broadens their outlook and teaches them to adapt to unfamiliar situations.\n\n' +
      'A year out can also provide practical benefits. Students who work in a shop or café may save money for their tuition, and some gain useful work experience that strengthens later job applications. A part-time job in a relevant field, such as healthcare or hospitality, could even confirm whether a particular career suits them.\n\n' +
      'The risks are real, however. Some students find it hard to return to a classroom after a long break, and their study habits may fade. Others spend the year without a plan and end up drifting into jobs that do not interest them. Those who delay their studies may also lose motivation, especially if friends have already moved on.\n\n' +
      'In conclusion, a gap year can be a worthwhile experience when students set clear goals and stay in touch with their education. Without a plan, however, the break may simply become a delay.',
  },
  {
    id: 'we-019',
    type: 'write-essay',
    title: 'Video games in lessons',
    difficulty: 2,
    exams: ['pte-academic'],
    prompt:
      'Some teachers argue that computer games can be powerful tools for learning in the classroom. Others believe that games distract students and encourage passive habits. Discuss both views and give your own conclusion.',
    keyPoints: [
      { label: 'Engagement and motivation', keywords: ['engagement', 'motivation', 'enjoy'] },
      { label: 'Problem solving skills', keywords: ['problem solving', 'strategy', 'critical thinking'] },
      { label: 'Distraction and screen time', keywords: ['distract', 'screen time', 'addictive'] },
    ],
    modelAnswer:
      'Computer games are no longer seen only as entertainment. Many teachers now use them in lessons, and some argue that they offer a powerful way to learn. Others warn that games distract students and encourage passive habits. This essay argues that games can support learning, but only when they are chosen carefully and used for a clear educational purpose.\n\n' +
      'The main benefit is engagement. Pupils who struggle with long written tasks often enjoy a game that rewards them for every correct answer. This motivation can keep them focused for longer, and the feeling of progress encourages them to keep trying. Teachers who use games wisely can therefore reach students who would otherwise switch off.\n\n' +
      'Good educational games also develop problem solving. Players must plan a strategy, test ideas and learn from mistakes, which is close to the critical thinking that schools aim to teach. A simulation of a historical trade route, for instance, can show pupils how their choices affect outcomes.\n\n' +
      'The risks, however, are considerable. Many commercial games are designed to be addictive, and long sessions can reduce sleep and physical activity. Students may also treat a lesson as an opportunity to play rather than to learn, which turns a useful tool into a distraction.\n\n' +
      'In conclusion, games should be treated as one tool among many. When teachers select them carefully, set time limits and follow up with discussion, games can add real value. Without such structure, however, screen time simply replaces learning.',
  },
  {
    id: 'we-020',
    type: 'write-essay',
    title: 'Genetically modified crops',
    difficulty: 3,
    exams: ['pte-academic'],
    prompt:
      'Genetically modified crops can increase yields and resist disease, yet many consumers remain suspicious of them. Should governments encourage the cultivation of genetically modified crops in developing countries? Discuss the benefits, the risks and your own position.',
    keyPoints: [
      { label: 'Higher yields and food security', keywords: ['yield', 'food security', 'harvest'] },
      { label: 'Environmental and health risks', keywords: ['risk', 'risks', 'safety', 'environmental', 'biodiversity'] },
      { label: 'Regulation and consumer choice', keywords: ['regulation', 'labelling', 'labeling', 'consumer', 'choice', 'trust'] },
    ],
    modelAnswer:
      'Genetically modified crops have been grown on a large scale for more than two decades. They are engineered to resist pests, tolerate drought or produce higher yields, and their supporters argue that they could help feed a growing population. Critics, however, question their safety and their environmental effects. In my view, governments in developing countries should support these crops, but only under strict and transparent regulation.\n\n' +
      'The case in favour rests on food security. Droughts, pests and rising populations put pressure on farmers, and a crop that survives a poor season can protect families from hunger. Where such varieties have been adopted, many smallholders have reported larger harvests and lower spending on pesticides.\n\n' +
      'Nevertheless, the risks deserve serious attention. Gene flow into wild relatives could affect biodiversity, and monoculture planting can reduce the resilience of ecosystems. There is also a commercial concern: when a small number of companies control seed supply, farmers may become dependent on them. Scientific reviews have generally found the foods safe to eat, but long-term studies remain important.\n\n' +
      'Consumer choice and trust are the final issues. Clear labelling allows shoppers to decide for themselves, and independent testing builds confidence in the products. Without transparency, however, many people will reject the technology whatever the evidence shows.\n\n' +
      'In conclusion, genetically modified crops can make a real difference to food security, particularly for poorer nations. Governments should support them through careful regulation, independent research and honest labelling, so that farmers and consumers can make informed choices.',
  },  {
    id: 'we-021',
    type: 'write-essay',
    title: 'Raising the minimum wage',
    difficulty: 2,
    exams: ['pte-academic'],
    prompt:
      'Some economists argue that raising the minimum wage helps low-paid workers and reduces poverty, while others warn that it may cost jobs. Assess these arguments and give your own view on how the minimum wage should be set.',
    keyPoints: [
      { label: 'Poverty and living standards', keywords: ['poverty', 'living wage', 'income'] },
      { label: 'Effect on employment', keywords: ['employment', 'jobs', 'hiring', 'unemployment'] },
      { label: 'Setting the rate fairly', keywords: ['inflation', 'cost of living', 'productivity', 'regional'] },
    ],
    modelAnswer:
      'The minimum wage is one of the most debated tools of economic policy. Supporters argue that it guarantees a living wage and reduces poverty, whereas critics claim that it can discourage employers from hiring. This essay argues that a minimum wage is justified, but that it should be linked to living costs and regional conditions rather than set at a single national figure.\n\n' +
      'A minimum wage gives low-paid workers a fair share of the value they create. Those who earn very little often spend every dollar they receive, so higher income has an immediate effect on local shops. For many families, the policy lifts household income enough to reduce reliance on state support.\n\n' +
      'The concern about jobs is also legitimate. If the wage floor rises faster than productivity, some firms may reduce staff numbers, automate tasks or cut hours. Unemployment among young and inexperienced workers can rise as a result, because they are the people most likely to be priced out. Governments should therefore monitor the effect on employment closely.\n\n' +
      'A sensible approach would adjust the minimum wage to the cost of living in each region and review it regularly against inflation. A single rate ignores the fact that rents and prices vary greatly between cities and rural areas. Regional rates would protect workers in expensive areas without overburdening small businesses elsewhere.\n\n' +
      'In conclusion, a minimum wage can reduce poverty and support fair pay, but its benefits depend on sensible design. When governments link the rate to the cost of living, consider regional differences and watch employment closely, they can protect workers without sacrificing jobs.',
  },
  {
    id: 'we-022',
    type: 'write-essay',
    title: 'Vertical farms in cities',
    difficulty: 2,
    exams: ['pte-academic'],
    prompt:
      'Vertical farms grow crops indoors on stacked shelves, often in disused warehouses within cities. Are they a realistic way to feed urban populations, or are they too expensive to make a real difference? Give reasons and examples to support your answer.',
    keyPoints: [
      { label: 'Local and fresh food', keywords: ['local', 'supply chain', 'transport', 'fresh'] },
      { label: 'Energy and running costs', keywords: ['energy', 'electricity', 'cost', 'expensive'] },
      { label: 'Land and water efficiency', keywords: ['land', 'water', 'space', 'efficient'] },
    ],
    modelAnswer:
      'Vertical farms are indoor facilities that grow leafy vegetables and herbs on racks stacked many storeys high. Their supporters present them as a solution to the pressures of urban food supply, while sceptics doubt that they can compete with traditional agriculture. In my view, vertical farming is not a complete answer to feeding cities, but it can make a useful contribution.\n\n' +
      'The most obvious benefit is local production. Crops grown inside a city can reach shops within hours, which means that they can be fresher and need less transport. Shorter supply chains also reduce the risk of spoilage, so less food is thrown away before it reaches a customer.\n\n' +
      'Vertical farms also use water and land more efficiently. Hydroponic systems can recycle nutrient solutions, and because crops are grown in layers, a small site can produce a large volume of food. This efficiency matters in regions where water is scarce or where farmland is expensive. For many cities, using space above existing buildings is more practical than creating new fields.\n\n' +
      'The main obstacle is cost. Artificial lighting and climate control consume large amounts of electricity, and this energy use makes many indoor crops expensive. Unless renewable power becomes cheaper, the economics will remain difficult for staple foods such as wheat or rice, which are sold at low prices.\n\n' +
      'In conclusion, vertical farms will not replace field agriculture, but they can supply fresh herbs and salads to city residents. Their future depends on cheaper renewable energy and on choosing crops that suit indoor growing.',
  },
  {
    id: 'we-023',
    type: 'write-essay',
    title: 'Nuclear power and climate change',
    difficulty: 3,
    exams: ['pte-academic'],
    prompt:
      'Some scientists argue that nuclear power must expand if the world is to meet its climate targets, while others point to its high costs, waste and safety concerns. To what extent is nuclear energy a sensible part of the answer to climate change? Support your view.',
    keyPoints: [
      { label: 'Low carbon electricity', keywords: ['carbon', 'emissions', 'climate'] },
      { label: 'Cost and construction delays', keywords: ['cost', 'costs', 'expensive', 'delay'] },
      { label: 'Radioactive waste and safety', keywords: ['waste', 'safety', 'accident', 'radiation'] },
    ],
    modelAnswer:
      'Nuclear power has become a fiercely contested option in the search for low-carbon energy. Its supporters point out that reactors generate large amounts of electricity without releasing the emissions that drive climate change. Critics, however, highlight high costs, the problem of waste and the memory of serious accidents. In my view, nuclear energy can play a useful role, but only alongside rapid expansion of renewable power.\n\n' +
      'The climate argument is strong. Once built, a nuclear plant runs day and night with very little carbon, which makes it a reliable partner for wind and solar power. Countries that rely heavily on nuclear energy have some of the cleanest electricity systems in the world, and their emissions per unit of power are far lower than those of coal-fired stations.\n\n' +
      'However, the financial case is far less convincing. Building a reactor is expensive, and large projects have often run years late and well over budget. Such delays and cost overruns can make nuclear power less competitive than solar or wind, which can be built much more quickly. Investors may therefore prefer smaller, faster projects.\n\n' +
      'Safety and waste remain the most emotive issues. Modern reactors are designed with multiple safeguards, and accidents are rare, but the consequences of a serious failure can be severe and long-lasting. Spent fuel stays dangerous for thousands of years, so every country that builds reactors must plan for storage. Public trust therefore depends on transparent decisions and independent inspection.\n\n' +
      'In conclusion, nuclear energy can contribute to climate goals, particularly where renewable sources are limited. Yet high costs, long construction times and the management of waste mean that it should be one part of a diversified strategy rather than the centrepiece.',
  },
  {
    id: 'we-024',
    type: 'write-essay',
    title: 'Fast fashion and responsibility',
    difficulty: 1,
    exams: ['pte-academic'],
    prompt:
      'Fast fashion brands produce cheap clothes quickly and encourage shoppers to buy new items every week. Should governments regulate these companies, or should individuals simply change their own buying habits? Give your opinion with reasons.',
    keyPoints: [
      { label: 'Environmental damage', keywords: ['environment', 'pollution', 'waste', 'landfill'] },
      { label: 'Workers’ conditions', keywords: ['workers', 'wages', 'working conditions'] },
      { label: 'Consumer habits', keywords: ['habits', 'shoppers', 'consumers', 'buying'] },
    ],
    modelAnswer:
      'Fast fashion has transformed the clothing industry by making trendy garments available at very low prices. However, the speed and scale of production bring serious costs for the environment and for the people who make the clothes. In my opinion, both governments and shoppers have a part to play, although the greater responsibility lies with the companies themselves.\n\n' +
      'The environmental damage is considerable. Clothes are often made from synthetic fibres that release microplastics when washed, and huge quantities of unsold items end up in landfill. Textile waste has become one of the fastest growing sources of pollution, and much of it is never recycled.\n\n' +
      'Workers in many production centres also pay the price. Factory staff often earn low wages, work long hours and face unsafe conditions, because brands demand rapid turnaround at minimal cost. Governments could set minimum standards for working conditions and require companies to publish details of their suppliers.\n\n' +
      'Individual habits matter too. Shoppers can buy fewer items, choose second-hand clothing and keep garments for longer. Many consumers, however, feel pressure from social media and low prices, so voluntary changes alone are unlikely to be enough.\n\n' +
      'In conclusion, fast fashion will only change when regulation and personal choice reinforce each other. Governments should set standards, and companies should take responsibility for their supply chains, while shoppers buy less and buy better.',
  },
  {
    id: 'we-025',
    type: 'write-essay',
    title: 'Advertising aimed at children',
    difficulty: 2,
    exams: ['pte-academic'],
    prompt:
      'Advertising aimed at young children is increasingly common on television and online. Should governments ban adverts for unhealthy food and toys that target under-12s, or would such restrictions interfere with the freedom of businesses? Discuss both sides and reach a conclusion.',
    keyPoints: [
      { label: 'Influence on children', keywords: ['children', 'influence', 'vulnerable', 'pester'] },
      { label: 'Health and unhealthy food', keywords: ['obesity', 'unhealthy', 'sugar'] },
      { label: 'Freedom of business', keywords: ['freedom', 'business', 'businesses', 'industry'] },
    ],
    modelAnswer:
      'Children are exposed to advertising for hours each week, often without understanding that they are being persuaded to buy something. Governments are now debating whether to restrict promotions aimed at young audiences. In my view, limits on advertising to children are justified, provided that they are narrowly targeted and do not unfairly restrict legitimate businesses.\n\n' +
      'Young children are especially vulnerable to persuasion. They cannot always distinguish an advertisement from a programme, and they may pester parents for products they see repeated on screen. A cheerful cartoon character can influence what a child wants long before the child has learned to think critically about the message.\n\n' +
      'The health argument is the strongest. Advertising for drinks high in sugar, snacks and fast food is strongly linked to childhood obesity, and early habits often last into adulthood. A ban on advertising unhealthy products before a certain time of day would protect children without removing choice from families.\n\n' +
      'Opponents, however, argue that restrictions interfere with the freedom of companies to market legal products. Advertising also funds much of the creative industry, including children’s broadcasting, and overly broad bans could damage that sector. Regulators must therefore draw the line carefully, focusing on products that are genuinely harmful.\n\n' +
      'In conclusion, governments should restrict advertising of unhealthy food to children, because the harm is well documented and young people cannot easily defend themselves. Broader bans on all products, however, would go too far and would impose unnecessary costs on legitimate businesses.',
  },  {
    id: 'we-026',
    type: 'write-essay',
    title: 'Cycle lanes versus car space',
    difficulty: 1,
    exams: ['pte-academic'],
    prompt:
      'Many cities are building separate cycle lanes to encourage people to ride bicycles instead of driving. Do the benefits of cycle lanes outweigh the loss of road space for cars? Give reasons and examples to support your answer.',
    keyPoints: [
      { label: 'Health and fitness', keywords: ['health', 'fitness', 'exercise', 'active'] },
      { label: 'Traffic and pollution', keywords: ['traffic', 'congestion', 'pollution', 'emissions'] },
      { label: 'Loss of road space for drivers', keywords: ['road space', 'drivers', 'parking', 'cars'] },
    ],
    modelAnswer:
      'Across the world, city authorities are investing in separate cycle lanes in the hope of changing how people travel. Critics argue that these lanes take valuable road space away from cars and delivery vans. In my view, the benefits of well-designed cycle lanes outweigh the inconvenience, especially in dense urban areas.\n\n' +
      'The health benefits are considerable. Regular cycling is an excellent form of exercise, and people who ride to work often report better fitness and lower stress. Because cycling is active travel, it also reduces the time that people spend sitting in traffic jams each day.\n\n' +
      'Cycle lanes can also ease traffic. When commuters switch from cars to bicycles, the roads become less crowded at peak times, which reduces congestion for those who still need to drive. Fewer vehicles also means lower emissions and less pollution in the streets where people live and work.\n\n' +
      'Nevertheless, the loss of road space is a real concern. Drivers who rely on their cars, including tradespeople and people with disabilities, may find journeys longer, and the removal of parking can hurt local shops. Designers should therefore consult residents and keep alternative routes open for those who cannot cycle.\n\n' +
      'In conclusion, cycle lanes are worth building when they are connected, protected and planned with local businesses in mind. A well-designed network offers more benefits than costs, although it should not ignore those who must travel by car.',
  },
  {
    id: 'we-027',
    type: 'write-essay',
    title: 'Phones in the classroom',
    difficulty: 2,
    exams: ['pte-academic'],
    prompt:
      'Many schools have introduced rules that ban students from using smartphones during lessons. Do such bans improve learning, or do they fail to prepare students for a digital world? Discuss both views and give a reasoned conclusion.',
    keyPoints: [
      { label: 'Focus and concentration', keywords: ['focus', 'concentration', 'attention', 'distraction'] },
      { label: 'Digital skills and preparation', keywords: ['digital skills', 'digital', 'technology', 'prepare'] },
      { label: 'Clear rules and fairness', keywords: ['rules', 'policy', 'guidance', 'exceptions'] },
    ],
    modelAnswer:
      'Many schools now restrict mobile phones during lessons, arguing that constant notifications undermine learning. Critics, however, claim that such bans leave students unprepared for a world built around digital technology. Overall, I believe that a well-designed restriction improves concentration, provided that schools also teach students how to use devices responsibly.\n\n' +
      'The case for bans rests on focus. A notification can interrupt a student’s train of thought for several minutes, and pupils who keep checking their phones often miss key explanations. Removing the device from the desk reduces this constant distraction and gives teachers a better chance to hold attention.\n\n' +
      'However, banning phones entirely may ignore the reality of modern life. Students need digital skills to search for information, check sources and communicate professionally. If schools never allow devices to be used for learning, pupils may enter the workforce without the skills that employers expect.\n\n' +
      'A practical middle path would set clear rules, such as storing phones in lockers during lessons and allowing them for supervised research. Clear policies also treat students fairly, because the same expectations apply to everyone. Exceptions should be allowed when a device is needed for a learning need or a medical reason.\n\n' +
      'In conclusion, schools should limit phone use during lessons, but they should not ban technology from education altogether. Teaching students when and how to use devices responsibly is the best preparation for a digital world.',
  },
  {
    id: 'we-028',
    type: 'write-essay',
    title: 'Water scarcity and farming',
    difficulty: 3,
    exams: ['pte-academic'],
    prompt:
      'Agriculture uses most of the world’s freshwater, and many regions face growing shortages. Should governments prioritise water-saving technology for farmers, or should they focus on changing the crops that are grown in dry areas? Assess both options and justify your position.',
    keyPoints: [
      { label: 'Irrigation efficiency and technology', keywords: ['irrigation', 'drip', 'technology', 'efficiency'] },
      { label: 'Choice of crops', keywords: ['crops', 'drought', 'varieties'] },
      { label: 'Pricing and incentives', keywords: ['pricing', 'price', 'subsidies', 'incentives', 'charge'] },
    ],
    modelAnswer:
      'Agriculture accounts for the majority of freshwater use worldwide, and many dry regions are already struggling to meet demand. Governments therefore face a difficult choice between investing in water-saving technology and encouraging farmers to grow different crops. In my view, the most effective strategy combines both approaches, supported by sensible pricing.\n\n' +
      'Improving irrigation efficiency is the most direct response. Drip systems deliver water straight to plant roots, and sensor-based technology can show farmers exactly when a field needs water. Such efficiency gains can reduce losses from evaporation and leakage, although the equipment is expensive for small growers.\n\n' +
      'Changing the crops that are grown is a second route. Some regions continue to plant thirsty crops, such as rice or cotton, in semi-arid areas where rainfall is unreliable. Switching to varieties that tolerate drought, or to crops with lower water needs, could reduce demand substantially.\n\n' +
      'Technology alone may not be enough, however. Where water is cheap or free, farmers have little reason to use it carefully, and efficiency gains can be lost when farmers simply expand the area they irrigate. Pricing water fairly, through volumetric charges or tradeable allocations, gives farmers a direct incentive to conserve it.\n\n' +
      'In conclusion, governments should not treat water-saving technology and crop choice as rivals. Investing in efficient irrigation, encouraging drought-tolerant crops and pricing water fairly together offer the best prospect of a secure supply for farmers and communities alike.',
  },
  {
    id: 'we-029',
    type: 'write-essay',
    title: 'Public funding for the arts',
    difficulty: 2,
    exams: ['pte-academic'],
    prompt:
      'Governments often reduce funding for the arts during periods of economic hardship. Should public money be spent on theatres, galleries and orchestras, or should it be directed to services that people need more urgently? Discuss and give your opinion.',
    keyPoints: [
      { label: 'Cultural value and identity', keywords: ['culture', 'cultural', 'identity', 'heritage'] },
      { label: 'Access for all communities', keywords: ['access', 'community', 'communities', 'participation'] },
      { label: 'Priority for essential services', keywords: ['priority', 'essential', 'hospitals', 'schools', 'services'] },
    ],
    modelAnswer:
      'When budgets are tight, arts funding is often among the first items to be cut. Supporters argue that theatres, galleries and orchestras create cultural value that cannot be measured in money, while critics ask why public funds should support activities that serve a small audience. This essay argues that the arts deserve public support, but that funding should be linked to clear benefits for ordinary people.\n\n' +
      'Public funding helps keep cultural heritage alive. Without grants, many small theatres and museums would struggle to survive, and local identity could fade in the process. Arts organisations also train future writers, designers and performers, many of whom contribute to the wider economy.\n\n' +
      'Access is the key issue. If tickets are expensive and venues are concentrated in city centres, the benefits of culture reach only a narrow audience. Funding should therefore support free events, touring productions and projects that encourage participation in deprived communities.\n\n' +
      'Nevertheless, the arts cannot be placed above essential services. When hospitals are overstretched and schools need repairs, politicians face hard choices, and most citizens would rightly give priority to health and education. A government that funds galleries while clinics close will struggle to justify its spending.\n\n' +
      'In conclusion, the arts should receive public money, but in proportion to their reach and value. Governments that protect essential services first, and then support accessible cultural projects, can serve both needs without neglecting either.',
  },
  {
    id: 'we-030',
    type: 'write-essay',
    title: 'Raising the pension age',
    difficulty: 3,
    exams: ['pte-academic'],
    prompt:
      'Many countries are considering raising the age at which people can receive a full state pension, citing longer life expectancy and rising costs. Is this a fair and sustainable policy, or does it place an unreasonable burden on older workers? Discuss both perspectives and give your own position.',
    keyPoints: [
      { label: 'Sustainability of pension funds', keywords: ['sustainable', 'sustainability', 'funding', 'deficit', 'affordable'] },
      { label: 'Burden on older workers', keywords: ['burden', 'physically demanding', 'manual', 'health', 'unfair'] },
      { label: 'Flexible retirement options', keywords: ['flexible', 'phased', 'gradually', 'choice'] },
    ],
    modelAnswer:
      'Several governments have proposed raising the retirement age, arguing that people now live longer and that pension systems must remain affordable. Critics warn that the change places an unfair burden on workers whose health or jobs make continued employment difficult. In my view, a higher retirement age can be justified, but only when it is introduced gradually and combined with flexible options.\n\n' +
      'The case for change rests on sustainability. When people spend more years in retirement, the funding gap grows unless contributions rise or benefits fall. A higher pension age helps to close this deficit and keeps the system sustainable for future generations, without dramatically increasing taxes on young workers.\n\n' +
      'However, not all jobs are equal. Workers in physically demanding roles, such as construction or care, may have little choice but to stop working early. For them, a fixed pension age can mean years of poor health and reduced income, which is unfair. Rules that ignore these differences place a heavy burden on those least able to carry it.\n\n' +
      'Flexible arrangements could address these concerns. Governments might allow phased retirement, in which older employees reduce their hours gradually, or offer earlier access to pensions for people in heavy manual work. Clear choice and advance notice would give workers time to plan their finances.\n\n' +
      'In conclusion, raising the pension age is a sensible response to demographic change, provided that it is accompanied by flexible options and protection for those in demanding jobs. Without these safeguards, the policy may solve one problem by creating another.',
  },  {
    id: 'swt-009',
    type: 'summarize-written-text',
    title: 'Pollinators on farmland',
    difficulty: 1,
    passage:
      'Pollinators such as bees, butterflies and hoverflies play a central role in food production. Around three quarters of the world’s leading crop types benefit at least partly from animal pollination, including apples, tomatoes and many berries. Yet populations of several pollinator species have fallen in recent decades. Researchers point to a combination of causes: the loss of wildflower meadows, the heavy use of some pesticides, and diseases that spread among managed colonies.\n\n' +
      'Farmers can help reverse this trend. Planting hedgerows and flowering strips along field edges gives insects food and shelter throughout the season. Reducing pesticide use during flowering periods, when bees are most active, also protects the animals that visit crops. Some growers now rent hives to pollinate orchards, but this approach cannot replace wild pollinators, which often do the work more efficiently.\n\n' +
      'Governments are beginning to respond. Several countries have funded habitat schemes that pay landowners to leave areas of land uncultivated. Such programmes cost money, yet they may be cheaper than the losses that a poor harvest would cause.',
    keyPoints: [
      { label: 'Crops depend on pollinators', keywords: ['pollinators', 'pollination', 'crops', 'food production'] },
      { label: 'Population decline and causes', keywords: ['decline', 'fallen', 'pesticides', 'meadows', 'diseases'] },
      { label: 'Farm habitats and schemes', keywords: ['hedgerows', 'flowering', 'habitat', 'schemes'] },
    ],
    modelAnswer:
      'Pollinators such as bees support crop production, but their numbers have declined because of pesticides, lost habitat and disease, so farmers and governments should provide hedgerows and habitat schemes.',
  },
  {
    id: 'swt-010',
    type: 'summarize-written-text',
    title: 'Later school start times',
    difficulty: 1,
    passage:
      'Many researchers believe that secondary schools start too early for teenagers. During puberty, the body clock shifts so that young people feel alert later at night and find it hard to fall asleep before eleven. When lessons begin at eight in the morning, many students are still tired and struggle to concentrate in the first period.\n\n' +
      'Several districts have experimented with later start times, usually moving the first bell to around half past eight. Early results are encouraging. Students in these schools tend to report longer sleep, improved mood and fewer absences caused by illness. Some teachers also noticed that attention and test performance improved in the early afternoon lessons.\n\n' +
      'Critics raise practical objections. Later starts can complicate school bus schedules, and they may affect after-school jobs and sports training. Parents who work early shifts also need childcare that fits the new timetable. Even so, supporters argue that the costs are modest compared with the benefits of healthier, better-rested students.',
    keyPoints: [
      { label: 'Teenage body clock and sleep', keywords: ['sleep', 'body clock', 'tired'] },
      { label: 'Better attention and health', keywords: ['attention', 'concentrate', 'mood', 'health'] },
      { label: 'Practical objections', keywords: ['bus', 'childcare', 'costs', 'jobs'] },
    ],
    modelAnswer:
      'Because the teenage body clock shifts later, early lessons waste sleep and concentration, and later starts improve attention and mood despite bus and childcare costs.',
  },
  {
    id: 'swt-011',
    type: 'summarize-written-text',
    title: 'Wind farms and landowners',
    difficulty: 2,
    passage:
      'Wind farms are increasingly built on farmland and moorland, and many rural landowners now earn a steady income by leasing their land to developers. A single modern turbine can generate enough electricity for hundreds of homes, and the rent paid to the owner is often guaranteed for twenty years or more. For farmers facing volatile crop prices, this predictable payment can make the difference between staying on the land and selling it.\n\n' +
      'However, local communities do not always share in these benefits. Residents who live near turbines sometimes complain about noise, flickering shadows and the visual impact on historic landscapes. Some planning disputes have dragged on for years, partly because the developers and the neighbours disagree about how much consultation is enough. Councils have tried to address these concerns by requiring larger setbacks from homes and by offering community funds.\n\n' +
      'Experts agree that the design of the agreements matters. Where profits are shared more widely, through local ownership or annual payments to village projects, opposition tends to fall. Where the income flows only to a few landowners, resentment can grow, even when the energy itself is welcomed by the wider public.',
    keyPoints: [
      { label: 'Steady income for landowners', keywords: ['income', 'rent', 'payment', 'leasing'] },
      { label: 'Local complaints about impacts', keywords: ['noise', 'shadows', 'visual', 'complaint', 'complaints'] },
      { label: 'Consultation and planning disputes', keywords: ['consultation', 'planning', 'disputes', 'neighbours'] },
      { label: 'Shared benefits reduce opposition', keywords: ['shared', 'community', 'local ownership', 'opposition'] },
    ],
    modelAnswer:
      'Wind farms give rural landowners a steady rent, but noise and visual impact cause local complaints, so sharing profits with community projects and improving consultation can reduce opposition.',
  },
  {
    id: 'swt-012',
    type: 'summarize-written-text',
    title: 'Recycling electronic waste',
    difficulty: 2,
    passage:
      'Electronic waste is one of the fastest growing forms of rubbish in the world. Old phones, laptops, televisions and household appliances contain valuable metals such as copper, gold and silver, but they also include hazardous substances like lead and mercury. When these items are thrown away with ordinary rubbish, the toxic materials can leak into soil and water, creating long-term health risks for nearby communities.\n\n' +
      'Recycling offers a way to recover resources and reduce pollution. Specialist plants separate components, shred circuit boards and extract metals for reuse in new manufacturing. The process is labour-intensive and requires strict safety controls, which is why many countries export their waste to facilities where costs are lower. Unfortunately, informal recycling in some of these places is carried out by workers using crude methods that release fumes and damage their health.\n\n' +
      'Governments have responded with take-back schemes that require manufacturers to collect old devices, and some countries have introduced fees on new electronics to fund recycling. Consumers can help too, by repairing equipment, donating working devices and returning unwanted electronics to certified collection points rather than storing them in drawers.',
    keyPoints: [
      { label: 'Hazardous substances', keywords: ['hazardous', 'toxic', 'lead', 'mercury', 'pollution'] },
      { label: 'Valuable metals recovered', keywords: ['metals', 'copper', 'gold', 'recover', 'resources'] },
      { label: 'Export and informal recycling', keywords: ['export', 'informal', 'workers', 'health'] },
      { label: 'Collection schemes and repair', keywords: ['collection', 'schemes', 'repair', 'donating'] },
    ],
    modelAnswer:
      'Recycling electronic waste recovers valuable metals, but hazardous lead and mercury threaten health, so unsafe informal export should be replaced by manufacturer collection schemes and repair services.',
  },
  {
    id: 'swt-013',
    type: 'summarize-written-text',
    title: 'Volunteering and wellbeing',
    difficulty: 1,
    passage:
      'Volunteering is often described as a way of helping others, yet it can also benefit the volunteer in surprising ways. Researchers who study wellbeing have found that people who give their time regularly tend to report higher life satisfaction and a stronger sense of purpose. Taking part in a community activity also creates opportunities to meet people who might otherwise never be encountered.\n\n' +
      'Many volunteers say that the work gives them new skills. A person who helps at a food bank may learn to manage stock and deal with customers, while a volunteer tutor can develop patience and communication. These skills can later be listed on a CV, which is valuable for people who are returning to work after a break or changing careers.\n\n' +
      'Volunteering is not without challenges. Some organisations rely on a small group of enthusiastic people, and newcomers may feel that they are expected to do too much. Good charities therefore provide training, clear roles and a friendly welcome, so that volunteers feel supported rather than overwhelmed.',
    keyPoints: [
      { label: 'Wellbeing and life satisfaction', keywords: ['wellbeing', 'satisfaction', 'purpose'] },
      { label: 'New skills and CV benefits', keywords: ['skills', 'cv', 'patience', 'communication'] },
      { label: 'Support and training for volunteers', keywords: ['training', 'support', 'welcome', 'roles'] },
    ],
    modelAnswer:
      'Volunteering improves wellbeing and life satisfaction, builds useful skills that can be listed on a CV, and works best when charities offer training and support to newcomers.',
  },  {
    id: 'swt-014',
    type: 'summarize-written-text',
    title: 'Mangroves and coastal protection',
    difficulty: 2,
    passage:
      'Mangrove forests grow along tropical and subtropical coastlines, where their tangled roots bind mud and slow the movement of seawater. These forests act as natural barriers that absorb the energy of waves during storms and reduce the damage caused by flooding. In several countries, communities that protected mangroves suffered far less destruction when cyclones struck nearby villages.\n\n' +
      'Mangroves also provide habitat for fish, crabs and birds. Many commercially valuable species spend their juvenile years among the roots before moving to open water, so healthy mangroves support local fisheries. In addition, the sediment they trap helps keep coral reefs clear of silt, which allows light to reach the seabed.\n\n' +
      'Mangroves store large quantities of carbon in their soil, sometimes far more per hectare than tropical forests on land. When they are cleared for shrimp farms or coastal development, this stored carbon can be released into the atmosphere. Restoration projects now plant seedlings and remove barriers to tidal flow, although replanting can take decades to match the original ecosystem.',
    keyPoints: [
      { label: 'Coastal protection from waves', keywords: ['barrier', 'waves', 'storms', 'flooding'] },
      { label: 'Habitat and fisheries', keywords: ['habitat', 'fish', 'fisheries', 'species'] },
      { label: 'Sediment and reefs', keywords: ['sediment', 'reefs', 'silt'] },
      { label: 'Carbon storage and clearance', keywords: ['carbon', 'cleared', 'clearance', 'restoration'] },
    ],
    modelAnswer:
      'Mangrove forests protect coasts from waves and flooding, provide habitat for fish, trap sediment that protects reefs, and store carbon, so both clearance and restoration affect the climate.',
  },
  {
    id: 'swt-015',
    type: 'summarize-written-text',
    title: 'Deep-sea mining debate',
    difficulty: 3,
    passage:
      'Deep-sea mining has moved from theory to commercial planning in the last decade. Polymetallic nodules scattered across the abyssal plains contain nickel, cobalt and manganese, minerals that are used in batteries and other clean technologies. Companies argue that harvesting these nodules from the seabed could reduce pressure on land-based mines, which often cause deforestation and displacement of communities.\n\n' +
      'Scientists, however, warn that the environmental risks are poorly understood. The deep ocean is one of the least explored habitats on Earth, and many of its species grow very slowly and reproduce rarely. Machines that scrape the seabed could destroy these ecosystems within hours, and the sediment plumes they create might smother organisms across wide areas. Recovery could take many decades, if it happens at all.\n\n' +
      'Regulation has become a contested issue. The International Seabed Authority is responsible for overseeing activities in international waters, but critics argue that it has not yet agreed on robust environmental standards. Some countries have called for a moratorium until research is complete, while others view the minerals as essential to the energy transition and want to proceed more quickly.',
    keyPoints: [
      { label: 'Minerals for clean technology', keywords: ['nickel', 'cobalt', 'minerals', 'batteries'] },
      { label: 'Less pressure on land mines', keywords: ['deforestation', 'displacement'] },
      { label: 'Unknown damage to marine life', keywords: ['ecosystems', 'species', 'sediment', 'risks', 'habitat'] },
      { label: 'Regulation and moratorium', keywords: ['regulation', 'moratorium', 'standards', 'oversight'] },
    ],
    modelAnswer:
      'Deep-sea mining could supply nickel and cobalt for batteries and reduce deforestation, but unknown risks to ecosystems and species mean that regulation and a moratorium should come first.',
  },
  {
    id: 'swt-016',
    type: 'summarize-written-text',
    title: 'Desalination in dry regions',
    difficulty: 3,
    passage:
      'Desalination, the process of removing salt from seawater, has expanded rapidly in arid regions that have few alternative sources of fresh water. Modern reverse osmosis plants can produce drinking water at a cost that is lower than it was a generation ago, and some cities now rely on desalinated supplies for more than half of their water. For coastal communities facing prolonged drought, the technology offers a reliable supply that does not depend on rainfall.\n\n' +
      'Nevertheless, desalination carries significant drawbacks. The process consumes large amounts of electricity, and unless that power comes from renewable sources, the carbon footprint of the water can be considerable. Plants also discharge concentrated brine back into the sea, which can raise salinity and harm marine life near the outlet. Because the water is expensive to produce, it may be unaffordable for farmers who need large volumes.\n\n' +
      'Engineers are exploring ways to reduce these impacts. Intake pipes can be designed to limit harm to fish, and brine can be diluted or used to extract minerals before disposal. Some researchers are also developing membranes that require less pressure, which could cut energy use. Even so, most experts agree that desalination should complement water conservation and efficient use rather than replace them.',
    keyPoints: [
      { label: 'Reliable supply in dry regions', keywords: ['drought', 'reliable', 'supply', 'arid'] },
      { label: 'Energy and carbon costs', keywords: ['electricity', 'energy', 'carbon', 'renewable'] },
      { label: 'Brine and marine harm', keywords: ['brine', 'salinity', 'marine', 'fish'] },
      { label: 'Conservation alongside technology', keywords: ['conservation', 'efficient', 'efficiency', 'complement'] },
    ],
    modelAnswer:
      'Desalination provides a reliable supply in arid regions, but its energy use, carbon emissions and brine discharge harm marine life, so it should complement conservation rather than replace it.',
  },
  {
    id: 'swt-017',
    type: 'summarize-written-text',
    title: 'Public libraries today',
    difficulty: 2,
    passage:
      'Public libraries have changed considerably over the last twenty years. Although many still lend printed books, they now also offer free internet access, digital e-books, language courses and computer training for people who have never used a keyboard. For families without a home computer, the library can be the only place where children can complete homework or apply for a job online.\n\n' +
      'Librarians have also become community organisers. Some run reading groups for older residents, while others host workshops on budgeting, health information and citizenship tests for newcomers. These activities bring people together in a neutral space, which many towns find hard to provide elsewhere. Demand for such services has risen, and many libraries report record numbers of visitors.\n\n' +
      'Yet funding remains a serious challenge. Local councils have reduced budgets in several regions, which has led to shorter opening hours and fewer staff. Campaigners argue that closing libraries saves money only in the short term, because the social costs of isolation and digital exclusion are considerable.',
    keyPoints: [
      { label: 'Digital access and e-books', keywords: ['internet', 'digital', 'e-books', 'online'] },
      { label: 'Community activities', keywords: ['community', 'workshops', 'reading groups', 'neutral'] },
      { label: 'Funding cuts and reduced hours', keywords: ['funding', 'budgets', 'hours', 'staff'] },
      { label: 'Social cost of closures', keywords: ['isolation', 'exclusion', 'closing', 'social'] },
    ],
    modelAnswer:
      'Public libraries offer free internet access and community workshops, but cuts to funding, opening hours and staff risk digital exclusion and isolation for many local residents.',
  },
  {
    id: 'swt-018',
    type: 'summarize-written-text',
    title: 'Coffee houses and public debate',
    difficulty: 1,
    passage:
      'In the seventeenth century, coffee houses became lively meeting places in many European cities. For the price of a single cup, customers could read newspapers, discuss politics and listen to news from merchants who had just returned from overseas trade. Many coffee houses specialised in particular topics, so that some attracted writers, others attracted scientists and still others attracted traders looking for information about shipping.\n\n' +
      'These establishments played a surprising role in the growth of public debate. Because people from different social backgrounds sat at the same tables, ideas could circulate more freely than they did in private clubs or formal institutions. Some historians argue that the coffee house helped create a culture in which opinions were expressed openly and criticised in print.\n\n' +
      'Today, the cafe serves a similar purpose for many people. Students study with laptops, freelancers hold meetings and neighbours chat over breakfast. Although the drinks and the décor have changed, the social function of the coffee house remains important in modern cities.',
    keyPoints: [
      { label: 'Meeting place and news', keywords: ['meeting', 'news', 'newspapers', 'merchants'] },
      { label: 'Public debate and ideas', keywords: ['debate', 'ideas', 'opinions', 'politics'] },
      { label: 'Modern cafes', keywords: ['cafe', 'students', 'freelancers', 'social'] },
    ],
    modelAnswer:
      'Coffee houses in seventeenth-century Europe served as meeting places where news and ideas circulated, fostering public debate, and modern cafes still play a similar social role.',
  },  {
    id: 'swt-019',
    type: 'summarize-written-text',
    title: 'Discovering exoplanets',
    difficulty: 3,
    passage:
      'For most of human history, astronomers could only speculate about whether planets existed around other stars. Since the early 1990s, however, researchers have confirmed thousands of exoplanets, which are worlds that orbit stars beyond the Sun. Most were detected indirectly, by measuring the tiny dimming of a star as a planet passes in front of it, or the slight wobble that a planet induces in its star’s motion.\n\n' +
      'The discoveries have revealed a remarkable diversity. Some exoplanets are gas giants larger than Jupiter, orbiting so close to their stars that a year lasts only a few days. Others are rocky worlds roughly the size of Earth, and a small number lie within the habitable zone, where liquid water could exist on the surface. Whether any of these planets harbour life remains unknown.\n\n' +
      'Future missions aim to study the atmospheres of nearby exoplanets in more detail. By analysing the light that passes through an atmosphere, scientists can search for gases that may be produced by biological processes. Such work is technically demanding, but it may eventually answer one of the oldest questions in science.',
    keyPoints: [
      { label: 'Detection methods', keywords: ['detected', 'dimming', 'wobble', 'transit'] },
      { label: 'Diversity of worlds', keywords: ['gas giants', 'rocky', 'diversity'] },
      { label: 'Habitable zone and water', keywords: ['habitable', 'water'] },
      { label: 'Atmospheres and life', keywords: ['atmospheres', 'gases', 'life'] },
    ],
    modelAnswer:
      'Astronomers have detected thousands of exoplanets by observing dimming and wobble, including rocky and gas giant worlds, some in the habitable zone where water might exist, while future missions will study their atmospheres for signs of life.',
  },
  {
    id: 'swt-020',
    type: 'summarize-written-text',
    title: 'Microfinance for small business',
    difficulty: 2,
    passage:
      'Microfinance refers to small loans, savings accounts and insurance products offered to people who are excluded from conventional banking. The model became well known in the 1970s, when lenders began to provide tiny loans to market traders and village craftspeople who had no collateral to offer. Repayment rates were often high, and many borrowers used the money to buy tools, stock or livestock.\n\n' +
      'Critics, however, point to cases where loans led to debt spirals. When interest rates are very high, borrowers may take new loans to repay old ones, and the burden can outweigh the gains from the business. Some observers also argue that the focus on individual entrepreneurs has overlooked the structural causes of poverty, such as limited access to education and healthcare.\n\n' +
      'In response, many providers have improved their practices. They now assess repayment capacity more carefully, offer education on money management and link loans to savings products. The most successful programmes combine financial services with training, so that small enterprises can grow rather than remain dependent on repeated borrowing.',
    keyPoints: [
      { label: 'Access to small loans', keywords: ['small loans', 'loans', 'excluded'] },
      { label: 'Business growth for entrepreneurs', keywords: ['business', 'enterprises', 'entrepreneurs', 'tools'] },
      { label: 'Debt risk from high interest', keywords: ['debt', 'interest', 'repay', 'repayment'] },
      { label: 'Training and savings', keywords: ['training', 'education', 'savings', 'money management'] },
    ],
    modelAnswer:
      'Microfinance gives excluded entrepreneurs small loans to grow their business, but high interest can create debt, so providers should combine loans with training and savings products.',
  },
  {
    id: 'swt-021',
    type: 'summarize-written-text',
    title: 'Street food in cities',
    difficulty: 1,
    passage:
      'Street food has become a central part of city life in many countries. Vendors sell inexpensive meals from carts, stalls and small kiosks, and their dishes often reflect local traditions that have been passed down through families for generations. For office workers and students, a bowl of noodles or a freshly grilled sandwich can be quicker and cheaper than a restaurant meal.\n\n' +
      'Street food also contributes to the local economy. Many vendors are self-employed, and their earnings support households that might otherwise have few options for work. Their stalls bring foot traffic to surrounding streets, which can help nearby shops and cafes to attract customers during the evening.\n\n' +
      'Authorities have sometimes struggled to regulate these businesses. Concerns about hygiene, waste and traffic congestion have led some cities to restrict vendors or move them to designated markets. Many experts recommend clear licensing rules, basic training in food safety and access to water and toilets, which allow vendors to operate legally and keep customers safe.',
    keyPoints: [
      { label: 'Affordable local food', keywords: ['affordable', 'inexpensive', 'cheap', 'local', 'traditions'] },
      { label: 'Income and local economy', keywords: ['income', 'earnings', 'economy'] },
      { label: 'Hygiene and licensing rules', keywords: ['hygiene', 'licensing', 'licences', 'rules', 'safety'] },
    ],
    modelAnswer:
      'Street food offers inexpensive local meals and supports the economy through vendor earnings, so clear licensing rules and hygiene standards would help cities regulate it safely.',
  },
  {
    id: 'swt-022',
    type: 'summarize-written-text',
    title: 'Antibiotic resistance',
    difficulty: 2,
    passage:
      'Antibiotics transformed medicine in the twentieth century, turning many once-fatal infections into treatable conditions. However, bacteria evolve quickly, and each time an antibiotic is used, some organisms may survive and pass on resistance genes. Over time, strains that resist common drugs have become more widespread, making routine procedures such as surgery and childbirth riskier than before.\n\n' +
      'Overuse is a major driver of this problem. Antibiotics are sometimes prescribed for viral illnesses, where they have no effect, and patients may stop courses early when they feel better. Livestock farming has also been a significant source of antibiotic use, because the drugs are sometimes given to animals to promote growth or to prevent disease in crowded conditions.\n\n' +
      'Tackling resistance requires coordinated action. Doctors can prescribe more carefully, while farmers can reduce routine use and improve animal welfare. Governments may also need to support the development of new antibiotics, which is often unprofitable for pharmaceutical companies, through incentives such as guaranteed purchase agreements.',
    keyPoints: [
      { label: 'Resistance spreads', keywords: ['resistance', 'resistant', 'evolve', 'strains'] },
      { label: 'Overprescription', keywords: ['prescribed', 'overuse', 'prescribe', 'courses'] },
      { label: 'Livestock use', keywords: ['livestock', 'farming', 'animals', 'farmers'] },
      { label: 'Incentives for new drugs', keywords: ['incentives', 'development', 'new antibiotics', 'pharmaceutical'] },
    ],
    modelAnswer:
      'Antibiotic resistance grows through overuse, including prescribing for viral illness and routine livestock treatment, so governments should urgently offer strong financial incentives for developing new drugs.',
  },
  {
    id: 'swt-023',
    type: 'summarize-written-text',
    title: 'Hydrogen as a fuel',
    difficulty: 2,
    passage:
      'Hydrogen is the most abundant element in the universe, yet on Earth it rarely exists alone and must be produced from compounds such as water or natural gas. When hydrogen is made using renewable electricity to split water, the process is described as green, and the only by-product is oxygen. Advocates see hydrogen as a promising fuel for heavy industry, shipping and long-distance trucks, where batteries are heavy or slow to recharge.\n\n' +
      'The technology faces significant obstacles. Producing hydrogen by electrolysis consumes considerable energy, and much of the hydrogen used today is still made from fossil fuels. Storing and transporting the gas also requires high pressures or very low temperatures, which adds cost and demands specialised infrastructure such as pipelines and refuelling stations.\n\n' +
      'Governments in several countries have announced funding for hydrogen projects, although experts disagree about where it will be most useful. Many agree that hydrogen should be prioritised for applications that are hard to electrify, rather than for private cars, where batteries and electric motors are already more efficient.',
    keyPoints: [
      { label: 'Green production', keywords: ['renewable', 'electrolysis', 'green', 'water'] },
      { label: 'Heavy industry and shipping', keywords: ['industry', 'shipping', 'trucks', 'heavy'] },
      { label: 'Storage and infrastructure costs', keywords: ['storage', 'infrastructure', 'pipelines', 'cost'] },
      { label: 'Priority applications', keywords: ['electrify', 'prioritised', 'private cars'] },
    ],
    modelAnswer:
      'Hydrogen made by electrolysis with renewable electricity can serve heavy industry and shipping, but storage costs and infrastructure needs mean it should be prioritised for applications that are hard to electrify.',
  },  {
    id: 'swt-024',
    type: 'summarize-written-text',
    title: 'Mobile money in rural areas',
    difficulty: 3,
    passage:
      'Mobile money services allow people to store, send and receive funds using basic mobile phones, without needing a bank account. In many rural areas of developing countries, where bank branches may be days away on foot, these services have brought financial transactions within reach of millions of households. Families can pay school fees, buy agricultural inputs and receive remittances from relatives working in cities or abroad.\n\n' +
      'The benefits extend beyond convenience. Regular digital transactions create a financial record that can help users qualify for small loans or insurance later. Some studies have linked mobile money adoption with higher household savings and greater resilience after floods or drought, since money can be moved quickly to where it is needed.\n\n' +
      'Nonetheless, the expansion raises questions about regulation and consumer protection. Users may be vulnerable to fraud, unclear fees and disputes over lost transactions, particularly when they have limited literacy or little experience with formal institutions. Effective oversight requires clear licensing, transparent pricing and accessible complaint mechanisms, so that the benefits are not undermined by exploitation.',
    keyPoints: [
      { label: 'Access without a bank', keywords: ['access', 'phones', 'bank account'] },
      { label: 'Remittances and savings', keywords: ['remittances', 'savings', 'transfers'] },
      { label: 'Resilience and credit record', keywords: ['resilience', 'record', 'loans', 'insurance'] },
      { label: 'Consumer protection', keywords: ['fraud', 'protection', 'oversight', 'regulation', 'fees'] },
    ],
    modelAnswer:
      'Mobile money gives rural households access to savings and remittances without a bank account, builds a financial record that supports loans, but fraud and unclear fees require regulation and consumer protection.',
  },
  {
    id: 'swt-025',
    type: 'summarize-written-text',
    title: 'Monitoring volcanoes',
    difficulty: 2,
    passage:
      'Volcanoes give warning before they erupt, but reading those signals is rarely straightforward. Scientists monitor earthquakes beneath a volcano, changes in ground shape and the release of gases such as sulphur dioxide. A sudden increase in small tremors, for example, may indicate that magma is moving upwards, while swelling of the flanks suggests that pressure is building.\n\n' +
      'Monitoring networks have improved considerably with satellite radar and automated sensors, which can detect subtle changes even in remote locations. Yet forecasting remains difficult, because each volcano behaves differently and some periods of unrest never lead to eruptions. False alarms can damage public trust, and authorities must weigh the cost of evacuation against the risk of inaction.\n\n' +
      'Communication is therefore as important as detection. Observatories that explain their findings clearly, publish regular updates and rehearse evacuation plans with residents tend to see better responses when activity increases. Local knowledge, gathered from farmers and guides who know the terrain, can also improve decisions.',
    keyPoints: [
      { label: 'Earthquakes and tremors', keywords: ['earthquakes', 'tremors', 'seismic'] },
      { label: 'Gas and ground changes', keywords: ['gas', 'gases', 'swelling', 'ground'] },
      { label: 'Forecasting difficulty', keywords: ['forecasting', 'false alarms', 'unrest', 'difficult'] },
      { label: 'Communication and evacuation', keywords: ['communication', 'evacuation', 'updates', 'residents'] },
    ],
    modelAnswer:
      'Volcano monitoring tracks tremors, gas release and ground swelling with sensors, yet forecasting is difficult, so observatories need clear communication and must rehearse evacuation with residents.',
  },
  {
    id: 'swt-026',
    type: 'summarize-written-text',
    title: 'Wildlife crossings on highways',
    difficulty: 1,
    passage:
      'Roads cut through natural habitats and divide populations of animals that once roamed freely. Deer, badgers and amphibians are frequently killed by vehicles, and many species struggle to reach feeding grounds or mates on the other side of a motorway. In some regions, wildlife collisions cause significant damage to vehicles and pose a danger to drivers.\n\n' +
      'Wildlife crossings are structures built over or under roads to allow animals to move safely. Overpasses may be covered with soil and plants, while underpasses often include tunnels and fencing that guide animals towards them. Studies have found that well-designed crossings can reduce collisions considerably, especially when they are combined with fences that prevent animals from entering the road.\n\n' +
      'Although crossings are expensive to build, their costs can be offset by fewer accidents and healthier animal populations. Planners increasingly include crossings in new road schemes rather than adding them later, which is cheaper and more effective.',
    keyPoints: [
      { label: 'Roads divide habitats', keywords: ['habitat', 'habitats', 'divide', 'roads'] },
      { label: 'Crossing structures', keywords: ['overpass', 'underpass', 'tunnel', 'crossings'] },
      { label: 'Fewer collisions', keywords: ['collisions', 'accidents', 'fencing', 'safely'] },
    ],
    modelAnswer:
      'Wildlife crossings such as overpasses, underpasses and tunnels help animals reach habitats divided by roads, reducing collisions and accidents when they are combined with fencing.',
  },
  {
    id: 'swt-027',
    type: 'summarize-written-text',
    title: 'The Silk Road',
    difficulty: 2,
    passage:
      'The Silk Road was not a single road but a network of routes linking China with the Mediterranean world. Merchants carried silk, spices, precious metals and glass across deserts and mountains, often travelling in caravans for months at a time. Trade along these routes was rarely confined to goods alone, since merchants also exchanged languages, religions, scientific knowledge and artistic styles.\n\n' +
      'Cities along the way grew rich by serving travellers. Oasis towns provided water, food and shelter, while market centres collected taxes and organised exchanges between buyers from distant regions. Some of these cities became centres of learning, where scholars translated texts and compared astronomical observations recorded by different civilisations.\n\n' +
      'The decline of the network had many causes. Political instability, the rise of sea routes and the spread of disease all reduced the volume of overland trade. Historians still debate which factor mattered most, although many agree that the routes gradually lost importance as maritime shipping became cheaper and more reliable.',
    keyPoints: [
      { label: 'Goods traded', keywords: ['silk', 'spices', 'metals', 'glass', 'goods'] },
      { label: 'Exchange of ideas', keywords: ['knowledge', 'languages', 'religions', 'ideas'] },
      { label: 'Growth of cities', keywords: ['oasis', 'cities', 'markets', 'towns'] },
      { label: 'Decline of routes', keywords: ['decline', 'sea', 'shipping', 'maritime'] },
    ],
    modelAnswer:
      'The Silk Road carried silk and spices and spread knowledge and ideas, enriching oasis towns along the way, but its decline came as maritime shipping became cheaper and more reliable.',
  },
  {
    id: 'swt-028',
    type: 'summarize-written-text',
    title: 'Rewilding former farmland',
    difficulty: 2,
    passage:
      'Rewilding is the process of restoring natural ecosystems by allowing land to return to a more wild state, often with the reintroduction of species that have disappeared from an area. Unlike traditional conservation, which typically focuses on protecting particular habitats, rewilding aims to restore natural processes such as grazing, flooding and predation, which shape ecosystems over time.\n\n' +
      'Some of the most ambitious projects involve former farmland. When livestock are removed and hedgerows are allowed to grow, shrubs and trees gradually colonise the land, providing shelter for birds and insects. Beavers, which build dams and create wetlands, have been reintroduced in several countries, and their activity often increases biodiversity in surrounding areas.\n\n' +
      'Critics raise concerns about the impact on farmers and local livelihoods. Land use changes can reduce income from agriculture, and predators such as wolves can cause tension with livestock keepers. Successful projects therefore tend to involve local communities early, offer compensation where losses occur, and explain clearly how the land will be managed.',
    keyPoints: [
      { label: 'Restoring natural processes', keywords: ['restore', 'natural processes', 'ecosystems'] },
      { label: 'Recovery of farmland', keywords: ['farmland', 'hedgerows', 'shrubs', 'trees'] },
      { label: 'Beavers and biodiversity', keywords: ['beavers', 'wetlands', 'biodiversity'] },
      { label: 'Community concerns', keywords: ['farmers', 'livelihoods', 'income', 'compensation', 'communities'] },
    ],
    modelAnswer:
      'Rewilding restores natural processes and ecosystems on former farmland, with hedgerows, beavers and wetlands boosting biodiversity, so projects should involve farmers and communities early and offer compensation.',
  },
  {
    id: 'swt-029',
    type: 'summarize-written-text',
    title: 'Ocean acidification',
    difficulty: 3,
    passage:
      'Ocean acidification refers to the gradual decline in the pH of seawater caused by the absorption of carbon dioxide from the atmosphere. About a quarter of the carbon dioxide released by human activity is taken up by the oceans, where it reacts with water to form carbonic acid. The chemistry is well understood, and measurements show that surface waters have become measurably more acidic since the industrial era.\n\n' +
      'Changes in acidity affect marine organisms that build shells and skeletons from calcium carbonate. Corals, oysters, sea urchins and some plankton species find it harder to form their structures when carbonate ions become scarce. Experiments have shown reduced growth and weaker shells in several species, although responses vary widely and some organisms appear more tolerant than others.\n\n' +
      'The consequences for fisheries and coastal economies could be significant, because many communities depend on shellfish harvests and reef tourism. Researchers argue that the most effective response is to reduce emissions, but local measures such as protecting seagrass meadows and improving water quality may help some ecosystems cope while global action develops.',
    keyPoints: [
      { label: 'Carbon dioxide absorption', keywords: ['carbon dioxide', 'absorption', 'absorbed', 'emissions'] },
      { label: 'Effects on shell builders', keywords: ['shells', 'skeletons', 'corals', 'oysters', 'plankton'] },
      { label: 'Economic impact', keywords: ['fisheries', 'shellfish', 'tourism', 'economies'] },
      { label: 'Local responses', keywords: ['seagrass', 'water quality', 'protecting', 'reduce'] },
    ],
    modelAnswer:
      'Ocean acidification, driven by carbon dioxide absorption, weakens the shells and skeletons of corals and oysters and threatens fisheries, so emissions must fall while seagrass and water quality are protected locally.',
  },
  {
    id: 'swt-030',
    type: 'summarize-written-text',
    title: 'Community gardens',
    difficulty: 1,
    passage:
      'Community gardens are shared plots of land where residents grow vegetables, herbs and flowers together. Many are created on vacant lots or unused spaces behind housing blocks, transforming neglected areas into places where neighbours can meet and learn new skills. Gardeners often share their harvests with local families and food banks. Many also host seasonal events, such as harvest festivals, that welcome the wider public.\n\n' +
      'Supporters say that community gardens bring tangible social benefits. Regular work outdoors encourages physical activity, while shared responsibilities build friendships across different ages and backgrounds. Children who take part may develop a better understanding of where food comes from and how plants grow through the seasons.\n\n' +
      'Running a garden does require commitment. Groups need access to water, a reliable source of compost and an agreed system for managing plots and tools. Disputes can arise over who maintains common areas, so many gardens adopt written rules and rotate key tasks among members to keep everyone involved.',
    keyPoints: [
      { label: 'Shared growing space', keywords: ['shared', 'plots', 'vegetables', 'herbs'] },
      { label: 'Social and health benefits', keywords: ['physical activity', 'friendships', 'neighbours', 'social'] },
      { label: 'Practical management', keywords: ['water', 'compost', 'rules', 'rotate'] },
    ],
    modelAnswer:
      'Community gardens provide shared plots for vegetables and herbs, build friendships and physical activity among neighbours, but they need water, compost and clear rules to run well.',
  },
];
