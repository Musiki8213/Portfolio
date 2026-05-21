import type { LucideIcon } from 'lucide-react';
import { skillIconUrls } from '@/lib/skill-icon-urls';
import {
  Accessibility,
  Code2,
  Database,
  Kanban,
  Layers,
  LayoutGrid,
  Lightbulb,
  Pencil,
  Search,
  Server,
  Smartphone,
  TestTube,
  Users,
  Webhook,
} from 'lucide-react';

export interface SkillTickerItem {
  name: string;
  category: string;
  /** Simple Icons slug — https://cdn.simpleicons.org/{slug} */
  iconSlug?: string;
  /** Full icon URL when Simple Icons slug is unavailable */
  iconUrl?: string;
  Icon?: LucideIcon;
}

/** Row 1 — scrolls left */
export const skillTickerRow1: SkillTickerItem[] = [
  { name: 'Node.js', category: 'Runtime', iconSlug: 'nodedotjs' },
  { name: 'Expo', category: 'Platform', iconSlug: 'expo' },
  { name: 'Supabase', category: 'BaaS', iconSlug: 'supabase' },
  { name: 'Firebase', category: 'BaaS', iconSlug: 'firebase' },
  { name: 'PostgreSQL', category: 'Database', iconSlug: 'postgresql' },
  { name: 'SQL', category: 'Database', iconSlug: 'mysql' },
  { name: 'Java', category: 'Language', iconUrl: skillIconUrls.java },
  { name: 'Figma', category: 'Design', iconSlug: 'figma' },
  { name: 'Next.js', category: 'Framework', iconSlug: 'nextdotjs' },
  { name: 'TypeScript', category: 'Language', iconSlug: 'typescript' },
  { name: 'JavaScript', category: 'Language', iconSlug: 'javascript' },
  { name: 'HTML5', category: 'Markup', iconSlug: 'html5' },
  { name: 'CSS3', category: 'Styling', iconUrl: skillIconUrls.css3 },
  { name: 'Tailwind CSS', category: 'Styling', iconSlug: 'tailwindcss' },
  { name: 'RESTful APIs', category: 'API', Icon: Webhook },
  { name: 'Database Design', category: 'Data', Icon: Database },
  { name: 'Server Architecture', category: 'Backend', Icon: Server },
];

/** Row 2 — scrolls right */
export const skillTickerRow2: SkillTickerItem[] = [
  { name: 'GitHub', category: 'Version Control', iconSlug: 'github' },
  { name: 'Vercel', category: 'Deployment', iconSlug: 'vercel' },
  { name: 'Railway', category: 'Deployment', iconSlug: 'railway' },
  { name: 'Render', category: 'Deployment', iconSlug: 'render' },
  { name: 'Shadcn', category: 'UI Library', iconSlug: 'shadcnui' },
  { name: 'VS Code', category: 'Editor', iconUrl: skillIconUrls.vscode },
  { name: 'NetBeans', category: 'Editor', Icon: Code2 },
  { name: 'React', category: 'Library', iconSlug: 'react' },
  { name: 'React Native', category: 'Mobile', iconUrl: skillIconUrls.reactNative },
  { name: 'Git', category: 'Version Control', iconSlug: 'git' },
  { name: 'Responsive Design', category: 'UI', Icon: Smartphone },
  { name: 'Wireframing', category: 'Design', Icon: Pencil },
  { name: 'Prototyping', category: 'Design', Icon: Layers },
  { name: 'Design Systems', category: 'Design', Icon: LayoutGrid },
  { name: 'User Research', category: 'Design', Icon: Search },
  { name: 'User Testing', category: 'UI', Icon: TestTube },
  { name: 'Accessibility', category: 'UI', Icon: Accessibility },
  { name: 'Agile Methodologies', category: 'Process', Icon: Kanban },
  { name: 'Problem Solving', category: 'Soft Skill', Icon: Lightbulb },
  { name: 'Team Collaboration', category: 'Soft Skill', Icon: Users },
];
