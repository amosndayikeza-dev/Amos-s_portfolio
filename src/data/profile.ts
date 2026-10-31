import type { NavLink, Profile } from '@/types';

// Edit this file to update your name, bio, links and facts.

const name = 'Amos Ndayikeza';
const email = 'devopsamos@gmail.com';

const education = {
  degree: 'BSc Software Engineering',
  school: 'Bujumbura International University',
  year: '2nd year',
};

export const profile: Profile = {
  name,
  shortName: name,
  title: 'Full-Stack Developer · Laravel · Spring Boot · React',
  tagline:
    'I build full-stack web applications with Laravel, Spring Boot and React, and I’m working toward a career in DevOps.',
  bio: [
    'I’m a backend-focused developer and a second-year Software Engineering student at Bujumbura International University. I’m passionate about software architecture: I write PHP in a pure MVC style and Java with Spring Boot, design secure REST APIs, and model MySQL databases with triggers and transactions. On the frontend, I build interfaces with React and TypeScript.',
    'I care about code quality. Unit tests and SOLID principles help me turn business needs into solutions that are easy to maintain. My goal is to become a DevOps engineer, so I’m learning Docker, Linux and CI/CD and applying them to my own projects.',
  ],
  location: 'Bujumbura, Burundi',
  email,
  photo: {
    src: '/profile.jpg',
    alt: `Portrait of ${name}`,
    width: 512,
    height: 512,
  },
  resumeUrl: '/resume.pdf',
  education,
  facts: [
    { label: 'Location', value: 'Bujumbura, Burundi', icon: 'map-pin' },
    { label: 'University', value: education.school, icon: 'graduation-cap' },
    { label: 'Studying', value: `${education.degree}, ${education.year}`, icon: 'calendar' },
    { label: 'Focus', value: 'Backend and full-stack development, moving toward DevOps', icon: 'target' },
    { label: 'Languages', value: 'Kirundi (native), French (fluent), English (professional)', icon: 'languages' },
    { label: 'Secondary school', value: 'Lycée Don Bosco de Ngozi, Economics section (2024)', icon: 'book-open' },
  ],
  socials: [
    { kind: 'github', label: 'GitHub', href: 'https://github.com/amosndayikeza-dev' },
    { kind: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-username' },
    { kind: 'email', label: 'Email', href: `mailto:${email}` },
  ],
};

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];
