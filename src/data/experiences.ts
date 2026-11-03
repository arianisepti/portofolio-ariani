// src/data/experiences.ts
export const experiences = [
  {
    id: 0,
    slug: 'data-analyst-kimia-farma',
    title: 'Data Analyst Intern',
    company: 'Kimia Farma — Virtual Internship',
    period: 'Oktober 2025 - November 2025',
    logo: '/kimia_farma.png',
    overview: 'Analyzed business data to identify sales performance, revenue, profit, branch, and product trends using BigQuery and Looker Studio.',
    longDescription: 'During my virtual internship at Kimia Farma, I served as a Data Analyst responsible for exploring the company\'s historical data from 2020 to 2023. I collaborated with cross-functional teams to understand business requirements and translated them into efficient SQL queries in Google BigQuery. The analysis results were then visualized into a Looker Studio dashboard used by management to monitor key KPIs in real-time.',
    responsibilities: [
      'Analyzed company sales and revenue data worth IDR 1.4 Trillion using SQL (BigQuery) and Python (Pandas) to validate financial metrics and support strategic business decisions',
      'Created interactive data visualizations using Looker Studio to monitor the performance of the Top 10 branches, Profit Mapping, and Top 5 product categories, enabling management to track key metrics effectively',
      'Identified business trends and insights from 2020–2023 data, discovering that revenue remained stagnant at around IDR 347–349 Billion per year and highlighting the need for growth strategy evaluation',
      'Presented analysis results in the form of dashboards and reports to management, including the discovery of an anomaly in 5 branches with perfect service ratings (5.0) but low transaction ratings (3.82–3.94), along with concrete recommendations for UX and queue system improvements'
    ],
    tools: ['BigQuery', 'Looker Studio', 'SQL'],
    gallery: [
      { 
        src: '/kimia1.png', 
        caption: 'Previewing the final dataset in Google BigQuery, consisting of over 270,000 transaction records ready for analysis.' 
      },
      { 
        src: '/kimia2.png', 
        caption: 'Writing SQL queries in BigQuery to create a consolidated main table by joining transaction, inventory, branch, and product datasets.' 
      },
      { 
        src: '/kimia3.png', 
        caption: 'Presenting the project.' 
      }
    ]
  },
  {
    id: 1,
    slug: 'qa-engineer-golektruk',
    title: 'QA Engineer Intern',
    company: 'PT GolekTruk Dot Com',
    period: 'December 2024 – February 2025',
    logo: '/golektruk.png',
    overview: 'Contributed to the web application quality assurance process by conducting functional testing and ensuring features ran according to requirements.',
    longDescription: 'As a QA Engineer Intern, I was directly involved in the Software Development Life Cycle (SDLC) at PT GolekTruk Dot Com. My main focus was ensuring the quality of the web application before its release to users. I wrote test scenarios, created test cases, and automated testing using Playwright to accelerate the regression process.',
    responsibilities: [
      'Developed and executed 100+ functional and regression test cases to ensure the quality of core application features, achieving 90% test coverage by designing comprehensive test scenarios based on business requirements',
      'Automated 50+ testing scenarios to accelerate the validation process, successfully identifying and documenting 15 critical bugs prior to release by creating automated test scripts using Playwright and Python',
      'Documented bug findings in a structured manner within the issue tracking system to expedite the developer resolution process, reducing the number of bugs escaping to production by detailing replication steps, severity levels, and fix priorities',
      'Validated web application test results prior to end-user release, ensuring successful feature releases without critical errors by cross-checking automated test outputs against manual testing in the staging environment'
    ],
    tools: ['Playwright', 'Python', 'Manual Testing'],
    gallery: [
      { 
        src: '/golektruk1.jpeg', 
        caption: 'Celebrating the successful completion of the internship program with the team.' 
      },
      { 
        src: '/golektruk2.jpeg', 
        caption: 'A group photo with colleagues and mentors at the end of the internship period.' 
      },
      { 
        src: '/golektruk3.jpeg', 
        caption: 'Farewell and closing session with the entire team after finishing the internship.' 
      },
      { 
        src: '/golektruk4.png', 
        caption: 'Implementing automated testing scripts using Playwright and Python in Pycharm.' 
      }
    ]
  },
  {
    id: 2,
    slug: 'summer-camp-global-youth',
    title: 'Summer Camp Participant',
    company: 'International Student Mobility, Summer Camp and Conferences',
    period: 'July 2026',
    logo: '/global_youth.jpg',
    overview: 'Participated in an international program encompassing student mobility, summer camp, and conferences, engaging in academic activities, cross-cultural discussions, and developing communication and collaboration skills.',
    longDescription: 'This program was a valuable opportunity to interact with students from various countries. I was involved in panel discussions on global issues, collaborated on cross-cultural group projects, and presented innovative ideas regarding the use of technology for sustainability. This experience significantly improved my adaptability, cross-cultural communication, and confidence in public speaking.',
    responsibilities: [
      'Engaged in academic discussions, cultural exchange, and collaborative activities within an international environment.',
      'Developed cross-cultural communication, presentation, and teamwork skills, and built professional networks.'
    ],
    tools: ['English (Intermediate)', 'Public Speaking', 'Cross-Cultural Communication'],
    gallery: [
      { 
        src: '/ism1.JPG', 
        caption: 'Opening Ceremony' 
      },
      { 
        src: '/ism2.JPG', 
        caption: 'Education Expo' 
      },
      { 
        src: '/ism3.JPG', 
        caption: 'Education Expo' 
      },
      { 
        src: '/ism4.JPG', 
        caption: 'Cultural Exchange: Exploring Indonesian Batik Heritage' 
      },
      { 
        src: '/ism5.JPG', 
        caption: 'MOCI Event: Cultural Collaboration at Alun Alun Hanggawana Slawi' 
      },
      { 
        src: '/ism6.JPG', 
        caption: 'Camping & Cross-Cultural Bonding at Bukit Tangkeban Pemalang' 
      },
      { 
        src: '/ism7.JPG', 
        caption: 'Morning Exercise: Promoting Health & Togetherness' 
      },
      { 
        src: '/ism8.jpeg', 
        caption: 'Closing Ceremony & 3rd Best Student Speaker Award' 
      },
    ]
  },
  {
    id: 3,
    slug: 'ketua-hmif',
    title: 'Student Association President',
    company: 'Informatics Student Association - University Organization',
    period: 'August 2023 – August2024',
    logo: '/HMJ.png',
    overview: 'Led and coordinated the activities of the Informatics Student Association, managed organizational work programs, and fostered collaboration among members to support students\' academic and non-academic development.',
    longDescription: 'Serving as the Student Association President was my peak leadership experience during university. I was responsible for the organization\'s continuity, ranging from budget planning and organizing events (such as technology seminars and coding competitions) to evaluating the management\'s performance. I learned how to make strategic decisions under pressure and how to build a solid team.',
    responsibilities: [
      'Led and coordinated organizational activities and work programs',
      'Directed and delegated tasks to members and the management board',
      'Made decisions and ensured work programs ran according to plan',
      'Built communication and coordination with members and relevant stakeholders',
      'Evaluated activity implementation and organizational performance'
    ],
    tools: ['Leadership', 'Event Management', 'Public Speaking'],
    gallery: [
      { 
        src: '/himatika1.jpeg', 
        caption: 'Ramadhan Charity: Sharing Takjil & Spreading Kindness' 
      },
      { 
        src: '/himatika2.jpeg', 
        caption: 'HIMATIKA Family Gathering: Fostering Team Bonding and Collaboration' 
      },
      { 
        src: '/himatika3.jpeg', 
        caption: 'Community Service: Digital Literacy & Microsoft Word Training for Students' 
      },
      { 
        src: '/himatika4.jpeg', 
        caption: 'HIMATIKA Programming Study Club' 
      },
      { 
        src: '/himatika5.jpeg', 
        caption: 'Regional Forum of Informatics Student Associations (Central Java Region 1)' 
      },
      { 
        src: '/himatika6.jpeg', 
        caption: 'Benchmarking & Study Banding: HIMATIKA Bhamada x HMTI UMUS Brebes' 
      },
    ]
  },
  {
    id: 4,
    slug: 'pembicara-internasional',
    title: 'International Speaker',
    company: 'International Youth Talk - The Global Shift: How AI Redefines Productivity',
    period: 'January 2026',
    logo: '/global_youth.jpg',
    overview: 'Selected as a distinguished speaker at the International Youth Talk, delivering a presentation on how Artificial Intelligence is redefining productivity and student workflows in tech engineering.',
    longDescription: 'Invited as a speaker for the "International Youth Talk" held on January 29, 2026, a cross-border collaboration event involving institutions from Indonesia, Thailand, and the Philippines. I presented a topic titled "Beyond Tools: How AI is Re-defining the Student Workflow," discussing the practical impact of AI on engineering and computer science students. This experience significantly enhanced my public speaking, cross-cultural communication, and ability to articulate technological concepts on an international stage.',
    responsibilities: [
      'Delivered an international presentation on AI and productivity in tech engineering.',
      'Articulated complex technological concepts to a diverse, cross-border audience.',
      'Represented Bhamada University in a global academic discussion.',
      'Engaged in cross-cultural collaboration with peers and advisors from Thailand and the Philippines.'
    ],
    tools: ['Public Speaking', 'Artificial Intelligence (AI)', 'Cross-Cultural Communication'],
    gallery: [
      { 
        src: '/speaker.png', 
        caption: 'Presenting the topic "Beyond Tools: How AI is Re-defining the Student Workflow" during the International Youth Talk via Zoom.' 
      }
    ]
  },
];