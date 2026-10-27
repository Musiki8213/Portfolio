export const site = {
  name: 'Musiki Sithomola',
  shortName: 'Musiki',
  role: 'Fullstack Developer',
  email: 'sithomolamusiki@gmail.com',
  phone: '067 715 9301',
  phoneHref: 'tel:+27677159301',
  whatsapp: 'https://wa.me/27677159301?text=Hi%20Musiki%2C%20I%20want%20to%20discuss%20a%20project.',
  cvPath: '/Musiki_Sithomola_FlowCV_Resume_2026-05-18.pdf',
  cvFilename: 'Musiki_Sithomola_FlowCV_Resume_2026-05-18.pdf',
  github: 'https://github.com/Musiki8213',
  location: 'South Africa',
  calUrl: 'https://cal.com/musiki-sithomola-akzuxi/portfolio-call',
  gmailUrl:
    'https://mail.google.com/mail/?view=cm&fs=1&to=sithomolamusiki@gmail.com&su=Project%20Enquiry&body=Hi%20Musiki%2C%20I%20would%20like%20to%20discuss%20a%20project.',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: 'Available for freelance & full-time',
  headline: ['Designing digital', 'products with', 'visual precision.'],
  subheadline:
    'A multidisciplinary Fullstack Developer blending strategy, design, and code to build clean, production-ready digital experiences.',
};

export type SkillFilter = 'all' | 'core' | 'design' | 'infra';

export interface SkillItem {
  name: string;
  years: string;
  tag: string;
  filter: Exclude<SkillFilter, 'all'>;
}

export const skillFilters: { id: SkillFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'core', label: 'Core' },
  { id: 'design', label: 'Design' },
  { id: 'infra', label: 'Infra' },
];

export const skills: SkillItem[] = [
  { name: 'React / Next.js', years: '2 yrs', tag: 'CORE', filter: 'core' },
  { name: 'React Native', years: '2 yrs', tag: 'MOBILE', filter: 'core' },
  { name: 'TypeScript', years: '2 yrs', tag: 'CORE', filter: 'core' },
  { name: 'JavaScript', years: '3 yrs', tag: 'CORE', filter: 'core' },
  { name: 'HTML5', years: '3 yrs', tag: 'CORE', filter: 'core' },
  { name: 'CSS3', years: '3 yrs', tag: 'STYLING', filter: 'core' },
  { name: 'Tailwind CSS', years: '2 yrs', tag: 'STYLING', filter: 'core' },
  { name: 'Responsive Design', years: '2 yrs', tag: 'STYLING', filter: 'design' },
  { name: 'Node.js', years: '2 yrs', tag: 'BACKEND', filter: 'core' },
  { name: 'Express.js', years: '2 yrs', tag: 'BACKEND', filter: 'core' },
  { name: 'RESTful APIs', years: '2 yrs', tag: 'API', filter: 'core' },
  { name: 'MongoDB', years: '2 yrs', tag: 'DATABASE', filter: 'core' },
  { name: 'NoSQL', years: '2 yrs', tag: 'DATABASE', filter: 'core' },
  { name: 'Database Design', years: '2 yrs', tag: 'DATA', filter: 'core' },
  { name: 'Server Architecture', years: '1 yr', tag: 'BACKEND', filter: 'infra' },
  { name: 'User Research', years: '2 yrs', tag: 'DESIGN', filter: 'design' },
  { name: 'Wireframing', years: '2 yrs', tag: 'DESIGN', filter: 'design' },
  { name: 'Prototyping', years: '2 yrs', tag: 'DESIGN', filter: 'design' },
  { name: 'Design Systems', years: '2 yrs', tag: 'DESIGN', filter: 'design' },
  { name: 'Accessibility', years: '2 yrs', tag: 'UI', filter: 'design' },
  { name: 'User Testing', years: '1 yr', tag: 'UI', filter: 'design' },
  { name: 'Git', years: '3 yrs', tag: 'INFRA', filter: 'infra' },
  { name: 'GitHub', years: '3 yrs', tag: 'INFRA', filter: 'infra' },
  { name: 'Version Control', years: '3 yrs', tag: 'INFRA', filter: 'infra' },
  { name: 'Vercel', years: '2 yrs', tag: 'INFRA', filter: 'infra' },
  { name: 'Agile Methodologies', years: '2 yrs', tag: 'PROCESS', filter: 'infra' },
  { name: 'Problem Solving', years: '3 yrs', tag: 'SOFT', filter: 'infra' },
  { name: 'Team Collaboration', years: '3 yrs', tag: 'SOFT', filter: 'infra' },
];

export const about = {
  paragraphs: [
    "I'm a dedicated Fullstack Developer with production experience cultivated through mLab CodeTribe Academy, a nationally recognised, work-based programme I earned entry to through an intensive four-week technical bootcamp and panel evaluation.",
    'Currently pursuing an Advanced Diploma in Computer Science at Tshwane University of Technology (TUT), building upon my Computer Science Diploma and a proven track record of shipping performant, accessible web and mobile solutions.',
  ],
  highlights: [
    'Architect intuitive, high-fidelity user interfaces and design systems',
    'Engineer end-to-end fullstack applications with Next.js, Node.js & Express.js',
    'Design resilient data models and APIs with MongoDB, NoSQL, and SQL',
    'Optimize web performance, SEO, and WCAG accessibility compliance',
  ],
};

export const experiences = [
  {
    title: 'Software Developer Trainee',
    company: 'mLab CodeTribe Academy',
    period: 'July 2025 — March 2026',
    description: [
      'Selected for a nationally recognised, work-based digital skills programme via a competitive four-week intensive technical bootcamp and panel interview',
      'Architected and deployed fullstack web and mobile applications using React, React Native, Node.js, Express.js, and MongoDB',
      'Collaborated within agile engineering squads to build secure RESTful APIs, scalable database schemas, and robust state machines',
      'Authored component systems adhering to minimalist design standards, glassmorphic UI patterns, and strict accessibility benchmarks',
    ],
  },
  {
    title: 'Advanced Diploma in Computer Science',
    company: 'Tshwane University of Technology (TUT)',
    period: '2026 — Present',
    description: [
      'Postgraduate specialization in advanced software engineering, distributed systems, and architectural patterns',
      'Deepened competencies in system modeling, enterprise cloud architectures, and algorithmic optimization',
    ],
  },
  {
    title: 'Diploma in Computer Science',
    company: 'Tshwane University of Technology (TUT)',
    period: '2022 — 2025',
    description: [
      'Comprehensive core in software engineering, object-oriented systems (Java), database engineering, and networking',
      'Designed and engineered practical academic capstone applications across web and mobile platforms',
      'Established disciplined problem-solving methodologies, version control protocols, and testing practices',
    ],
  },
  {
    title: 'National Senior Certificate',
    company: 'Thase Secondary School',
    period: 'Completed',
    description: [
      'Completed secondary education with Bachelor Degree endorsement',
      'Strong academic foundation in mathematics, analytical reasoning, and physical sciences',
    ],
  },
];

export const projects = [
  {
    title: 'Mabotja Thabo Attorneys',
    description:
      'A professional law firm website for Mabotja Thabo Attorneys Inc. in Polokwane. Multi-page site covering ten practice areas, consultation booking, and a legal enquiry form serving clients in person and remotely.',
    technologies: ['Next.js', 'TypeScript', 'Vercel', 'Responsive UI'],
    image: '/Mabotja-Attorneys.png',
    link: 'https://mabotja-attorneys.vercel.app/',
    github: 'https://github.com/Andile45/mabotja-attorneys',
    metrics: { users: '3k+', uptime: '99.9%', pages: '14' },
  },
  {
    title: 'E-Commerce',
    description:
      'A full-featured online store with product browsing, cart management, and checkout flow. Built with a modern React stack and deployed for a smooth shopping experience across devices.',
    technologies: ['React', 'TypeScript', 'Vercel', 'Responsive UI'],
    image: '/E-COMMERCE.png',
    link: 'https://e-commerce-omega-beige.vercel.app/',
    github: 'https://github.com/Musiki8213/e-commerce',
    metrics: { users: '2.4k+', uptime: '99.9%', pages: '12' },
  },
  {
    title: 'TUT Chatbot',
    description:
      'An AI-powered chatbot for Tshwane University of Technology students. Helps with campus-related questions through a conversational interface with a clean, accessible design.',
    technologies: ['React', 'AI', 'Vercel', 'TypeScript'],
    image: '/TUT.jpg',
    link: 'https://thusa-tut-ai-chatbot-jwn4klcai-musikis-projects-3af67fec.vercel.app',
    github: 'https://github.com/Musiki8213/Thusa---TUT-AI-Chatbot.git',
    metrics: { users: '1.8k+', uptime: '99.5%', pages: '8' },
  },
  {
    title: 'ClinicSync',
    description:
      'A clinic management platform for scheduling, patient records, and day-to-day healthcare workflows. Designed for clarity and efficiency in a clinical setting.',
    technologies: ['React', 'TypeScript', 'Healthcare', 'Vercel'],
    image: '/ClinicSync.png',
    link: 'https://clinic-sync-u4yx-7uipyal80-musikis-projects-3af67fec.vercel.app/',
    github: 'https://github.com/Musiki8213/ClinicSync',
    metrics: { users: '900+', uptime: '99.8%', pages: '15' },
  },
  {
    title: 'CMS',
    description:
      'A content management system for creating, editing, and publishing content with an intuitive admin interface and structured content workflows.',
    technologies: ['React', 'TypeScript', 'CMS', 'Vercel'],
    image: '/CMS.png',
    link: 'https://satumo-cms.vercel.app/',
    github: 'https://github.com/Musiki8213/Musiki-CMS',
    metrics: { users: '1.2k+', uptime: '99.7%', pages: '10' },
  },
];

export const stats = [
  { value: '4+', label: 'Shipped products', sub: 'Live on Vercel' },
  { value: '2+', label: 'Years building', sub: 'Web & mobile' },
  { value: '12+', label: 'Core technologies', sub: 'Design to deploy' },
  { value: '100%', label: 'Client focus', sub: 'Detail-driven delivery' },
];

export const testimonials = [
  {
    quote:
      'Musiki distinguishes himself through disciplined engineering and a sharp eye for interface precision. During his tenure at CodeTribe Academy, he consistently architected clean, maintainable systems and translated complex product requirements into intuitive, polished user experiences. His dedication to production quality and modern development standards makes him an exceptional asset to any engineering team.',
    author: 'Mahlatse Serathi',
    role: 'Skills Facilitator, mLab Southern Africa',
  },
  {
    quote:
      'Having mentored Musiki through our intensive work-based programme, I was consistently impressed by his proactive problem-solving, architectural rigor, and fullstack agility. Whether building responsive frontends with React and Next.js or structuring robust backend APIs with Node.js, Express, and MongoDB, he approaches every deliverable with senior-level craft and meticulous attention to detail.',
    author: 'Frankie Mosehla',
    role: 'Skills Facilitator, mLab Southern Africa',
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Discover',
    description: 'Research goals, users, and constraints. Align on scope, success metrics, and a clear product narrative.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Wireframes, visual systems, and interactive prototypes. Refine hierarchy, motion, and accessibility early.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Component-driven development with TypeScript, performance budgets, and responsive layouts across devices.',
  },
  {
    step: '04',
    title: 'Launch',
    description: 'QA, deployment, and iteration. Ship confidently with documentation and maintainable code structure.',
  },
];
