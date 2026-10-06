export const person = {
  name: 'Samruddhi Kakade',
  shortName: 'S. Kakade',
  role: 'AI Engineer · Independent Researcher',
  location: 'Philadelphia, PA',
  email: 'SamruddhiKakade@outlook.com',
  github: 'https://github.com/SamruddhiKakade',
  linkedin: 'https://www.linkedin.com/in/samruddhi-kakade-97a6b5237',
  description: 'AI engineer and independent researcher working on how to evaluate large language models.',
  // Home's title in the browser tab and in search results.
  tagline: 'AI engineer · LLM evaluation',
  university: 'Illinois Institute of Technology',
};

// Band and Overview order (her decision, 2026-09-25).
export const sections = [
  { key: 'experience', label: 'Experience', href: '/experience/', line: 'Where I have worked, newest first.' },
  { key: 'research', label: 'Research', href: '/research/', line: 'How LLM agents fail, read turn by turn: what they say they see, what they say they will do, and what they do.' },
  { key: 'education', label: 'Education', href: '/education/', line: 'My degrees and the written work from my courses.' },
  { key: 'certifications', label: 'Certifications', href: '/certifications/', line: 'Courses I completed alongside and after university.' },
  { key: 'projects', label: 'Projects', href: '/projects/', line: 'Course projects from my degrees, newest first.' },
  { key: 'skills', label: 'Skills', href: '/skills/', line: 'Every skill, with links to the work that shows it.' },
] as const;

export type SectionKey = (typeof sections)[number]['key'];

export const slugify = (s: string) =>
  s.toLowerCase().replace(/\+/g, 'plus').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
