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
  { name: 'RESTful APIs', years: '2 yrs', tag: 'API', filter: 'core' },
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
    "I'm a motivated Fullstack Developer with hands-on industry exposure through mLab Codetribe Academy and a strong foundation in building real-world applications.",
    'Computer Science diploma holder from Tshwane University of Technology (TUT) with practical experience in fullstack and mobile application development.',
  ],
  highlights: [
    'Design intuitive user interfaces and experiences',
    'Develop fullstack web applications',
    'Create responsive and accessible designs',
    'Optimize performance and user experience',
  ],
};

export const experiences = [
  {
    title: 'Software Developer Trainee',
    company: 'mLab Codetribe Academy',
    period: 'July 2025 — March 2026',
    description: [
      'Designing and developing user-centric web applications',
      'Collaborating with cross-functional teams to deliver high-quality products',
      'Implementing responsive designs and ensuring optimal user experiences',
      'Working with modern web technologies and frameworks',
    ],
  },
  {
    title: 'Diploma in Computer Science',
    company: 'Tshwane University of Technology (TUT)',
    period: '2022 — 2025',
    description: [
      'Foundation in software engineering, databases, and systems design',
      'Practical projects in web and mobile application development',
      'Focus on problem-solving and modern development practices',
    ],
  },
];

export const projects = [
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
    link: 'https://thusa-tut-ai-chatbot.vercel.app/',
    github: 'https://github.com/Andile45/Thusa---TUT-AI-Chatbot',
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
      'Musiki brings a rare balance of design sensibility and engineering discipline. Interfaces feel intentional, and delivery is consistently polished.',
    author: 'Product Lead',
    role: 'mLab Codetribe Academy',
  },
  {
    quote:
      'Clear communication, fast iteration, and thoughtful UX. The portfolio projects demonstrate real product thinking—not just visual flair.',
    author: 'Engineering Mentor',
    role: 'TUT Industry Programme',
  },
  {
    quote:
      'Every handoff was structured, accessible, and production-minded. A strong junior developer with senior-level attention to craft.',
    author: 'Creative Director',
    role: 'Freelance Client',
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
