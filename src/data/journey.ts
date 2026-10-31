import type { JourneyEntry } from '@/types';

// Most recent first. Add a new entry at the top of the array.
// status: 'goal' (hollow dashed marker), 'current' (filled marker), 'past' (neutral marker).

export const journey: JourneyEntry[] = [
  {
    id: 'devops-goal',
    period: 'Goal',
    title: 'DevOps Engineer',
    description:
      'Working toward a DevOps role by learning Docker, Linux and CI/CD, and applying them to my own projects.',
    status: 'goal',
  },
  {
    id: 'bsc-year-2',
    period: '2024 – Present',
    title: '2nd year, BSc Software Engineering',
    organization: 'Bujumbura International University',
    description:
      'Studying software engineering while building full-stack projects and learning the tools used to ship and run them.',
    status: 'current',
  },
  {
    id: 'first-backend-projects',
    period: '2025',
    title: 'Likilimba and Gestion Collections',
    description:
      'Built a savings-group management app on a custom PHP MVC framework, and the database layer of a collections ERP for the National Museum.',
    status: 'past',
  },
  {
    id: 'react',
    period: '2026',
    title: 'Learning React',
    description: 'Started building component-based user interfaces with React and TypeScript.',
    status: 'past',
  },
  {
    id: 'spring-boot',
    period: '2025-2026',
    title: 'Learning Java & Spring Boot',
    description: 'Picked up Java and built a multi-shop e-commerce platform with Spring Boot and React.',
    status: 'past',
  },
  {
    id: 'laravel',
    period: '2025',
    title: 'Learning Laravel',
    description: 'Started building full-stack web applications with PHP and Laravel.',
    status: 'past',
  },
  {
    id: 'secondary-school',
    period: '2021 – 2024',
    title: 'Secondary school diploma, Economics section',
    organization: 'Lycée Don Bosco de Ngozi',
    description: 'Completed secondary education before starting my software engineering degree.',
    status: 'past',
  },
];
