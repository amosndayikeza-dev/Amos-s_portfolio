import type { SkillGroup } from '@/types';

// Add a skill: append `{ name: 'Name', icon: 'icon-key' }` to a group's `skills` array.
// Icon keys are listed in src/lib/icons.ts.

export const skillGroups: SkillGroup[] = [
  {
    id: 'backend',
    title: 'Backend',
    description: 'Server-side applications, databases and secure APIs.',
    icon: 'server',
    skills: [
      { name: 'PHP (MVC)', icon: 'file-code' },
      { name: 'Laravel', icon: 'layers' },
      { name: 'Java', icon: 'coffee' },
      { name: 'Spring Boot', icon: 'leaf' },
      { name: 'MySQL', icon: 'database' },
      { name: 'REST APIs', icon: 'plug' },
      { name: 'JWT auth', icon: 'lock' },
      { name: 'OpenFeign', icon: 'send' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Responsive, accessible interfaces built with modern tooling.',
    icon: 'monitor',
    skills: [
      { name: 'React', icon: 'atom' },
      { name: 'TypeScript', icon: 'braces' },
      { name: 'JavaScript', icon: 'code' },
      { name: 'HTML', icon: 'globe' },
      { name: 'CSS', icon: 'palette' },
      { name: 'Tailwind CSS', icon: 'wind' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    description: 'Version control, containers and deployment. Currently learning.',
    icon: 'wrench',
    learning: true,
    skills: [
      { name: 'Git', icon: 'git-branch' },
      { name: 'GitHub', icon: 'git-pull-request' },
      { name: 'Postman', icon: 'send' },
      { name: 'VS Code', icon: 'code' },
      { name: 'Docker', icon: 'container' },
      { name: 'Linux', icon: 'terminal' },
      { name: 'CI/CD', icon: 'workflow' },
      { name: 'Vercel', icon: 'cloud' },
    ],
  },
  {
    id: 'concepts',
    title: 'Concepts & Architecture',
    description: 'The principles behind code that lasts.',
    icon: 'puzzle',
    skills: [
      { name: 'MVC', icon: 'layers' },
      { name: 'SOLID principles', icon: 'puzzle' },
      { name: 'API security', icon: 'shield-check' },
      { name: 'Unit testing', icon: 'list-checks' },
      { name: 'SQL triggers', icon: 'database' },
      { name: 'Least privilege', icon: 'lock' },
    ],
  },
];
