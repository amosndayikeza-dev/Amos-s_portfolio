import type { Project } from '@/types';

// Add a project: copy one object below, change the fields, and save. The grid updates itself.
//
// - highlights: optional bullet points shown under the description.
// - liveUrl / githubUrl: use a full https:// URL. Until you replace the placeholder,
//   the button is shown as disabled.
// - image: put a screenshot in /public/projects and uncomment the `image` line.
//   Use the real pixel size of the file so the page does not shift while loading.

export const projects: Project[] = [
  {
    id: 'likilimba',
    title: 'Likilimba',
    year: '2025',
    tagline: 'Savings management app for micro-finance groups (tontines).',
    description: 'A micro-finance application for savings groups, built with PHP and MySQL on a custom MVC framework.',
    highlights: [
      'Designed a custom MVC framework in pure PHP: router, controllers and models.',
      'Built a financial engine for contributions, payouts and real-time treasury.',
      'Added roles (Super Admin, Manager, Member) with strict permission checks.',
      'Generated PDF and Excel reports, with the interface in French, English and Kirundi.',
    ],
    category: 'Full-stack',
    tech: ['PHP (MVC)', 'MySQL', 'Chart.js', 'HTML', 'CSS'],
    // image: { src: '/projects/likilimba.png', alt: 'Screenshot of Likilimba', width: 1280, height: 800 },
    liveUrl: '[Add live link]',
    githubUrl: '[Add GitHub link]',
  },
  {
    id: 'collections-national-museum',
    title: 'Gestion Collections',
    year: '2025',
    tagline: 'Database and business layer of a cultural ERP for the National Museum.',
    description: 'The persistence and business layer of an ERP that manages a museum’s collections, built with PHP and MySQL.',
    highlights: [
      'Modelled a robust MySQL database: 10 interconnected tables with indexing.',
      'Deployed 50+ SQL triggers for auditing, data integrity and automation, such as password expiry.',
      'Created 10 distinct MySQL user profiles following the principle of least privilege.',
      'Automated daily backups with a Batch script and the Windows Task Scheduler.',
    ],
    category: 'Backend-focused',
    tech: ['PHP', 'MySQL', 'SQL triggers', 'phpMyAdmin', 'Batch'],
    liveUrl: '[https://github.com/amosndayikeza-dev/likilimba]',
    githubUrl: '[https://github.com/amosndayikeza-dev/likilimba]',
  },
  {
    id: 'e-commerce-bujumbura',
    title: 'E-commerce Bujumbura',
    tagline: 'Multi-shop e-commerce platform for Bujumbura.',
    description:
      'Designed and developed a multi-shop marketplace with a React/TypeScript frontend and a Java Spring Boot backend organised into business services.',
    highlights: [
      'Covers user, shop and catalogue management, product search and stock tracking.',
      'Cart and order flows with product checks, and in-store pickup or home delivery.',
      'Services communicate through REST APIs and OpenFeign, with MySQL persistence.',
      'Secured with JWT authentication.',
    ],
    category: 'Full-stack',
    tech: ['Java 21', 'Spring Boot', 'React', 'TypeScript', 'MySQL', 'JPA', 'JWT', 'OpenFeign'],
    liveUrl: '[https://github.com/amosndayikeza-dev/ecommerce-bujumbura]',
    githubUrl: '[https://github.com/amosndayikeza-dev/ecommerce-bujumbura]',
  },
  {
    id: 'spa-ngozi',
    title: 'Spa Ngozi',
    tagline: 'Frontend website built with React.',
    description: 'still working on it',
    category: 'Frontend',
    tech: ['React'],
    liveUrl: '[https://github.com/amosndayikeza-dev/aspa_ngozi]',
    githubUrl: '[https://github.com/amosndayikeza-dev/aspa_ngozi]',
  },
];
