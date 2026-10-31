# Developer Portfolio

A single-page portfolio built with React 18, TypeScript (strict), Vite and Tailwind CSS v3. Framer Motion handles the scroll animations and lucide-react the icons. It is fully static: no backend, no database.

All content lives in `src/data/`. To update the site you edit those files; you do not need to touch any component.

## Run it

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-checks, then builds to dist/
npm run preview    # serves the production build locally
```

## First edits

1. **Your details.** Open `src/data/profile.ts` and replace the LinkedIn placeholder URL (and anything else that changed).
2. **Page title and previews.** In `index.html`, check the `<title>`, description and Open Graph tags. When you have a domain, add `og:url` and an `og:image` (1200×630 works well).
3. **Photo.** Your picture is `public/profile.jpg` (square, at least 512×512). Until then, your initials are shown.
4. **CV.** Your CVs are `public/resume.pdf` (English, used by the site buttons) and `public/resume-fr.pdf` (French). The Resume and Download CV buttons point to it.

## Project structure

```
src/
  data/            <- the only files you edit regularly
    profile.ts       name, title, bio, facts, socials, nav links
    projects.ts      project cards
    skills.ts        skill groups and tiles
    journey.ts       timeline entries
  types/index.ts   shared TypeScript interfaces
  components/
    ui/              Button, Card, Badge, Section, SectionHeading, SocialLink, ...
    sections/        Navbar, Hero, About, Skills, Projects, Journey, Contact, Footer
  hooks/useTheme.ts  dark/light theme, saved in localStorage
  lib/               small helpers and the icon registry
public/              profile.jpg, resume.pdf, favicon.svg, projects/
```

## Add a project

Open `src/data/projects.ts`, copy an existing object into the array, and change it:

```ts
{
  id: 'my-new-project',                 // unique, lowercase
  title: 'My New Project',
  tagline: 'One line about what it is.',
  description: 'Two or three sentences about what it does and what you built.',
  category: 'Full-stack',               // 'Full-stack' | 'Backend-focused' | 'Frontend'
  tech: ['Laravel', 'MySQL', 'Docker'],
  image: { src: '/projects/my-new-project.png', alt: 'Screenshot of My New Project', width: 1280, height: 800 },
  liveUrl: 'https://my-project.vercel.app',
  githubUrl: 'https://github.com/your-username/my-project',
},
```

- Put the screenshot in `public/projects/` and use its real pixel width and height. Leave `image` out to show a "Screenshot coming soon" placeholder.
- `liveUrl` and `githubUrl` must start with `https://`. Anything else (like `[Add live link]`) renders a disabled button, so nothing links to a fake URL.

## Add a skill

In `src/data/skills.ts`, add `{ name: 'Kubernetes', icon: 'container' }` to a group's `skills` array. Available icon keys are in `src/lib/icons.ts`. To add another icon, import it from `lucide-react` there and add its key to `IconName` in `src/types/index.ts`.

## Add a timeline entry

In `src/data/journey.ts`, add an object at the top of the array (most recent first):

```ts
{
  id: 'docker',
  period: '2026',
  title: 'Started learning Docker',
  description: 'Containerised my first Laravel project.',
  status: 'past',          // 'goal' | 'current' | 'past'
},
```

## Change the accent colour

The site uses one accent colour through the `accent-*` tokens in `tailwind.config.ts`. It ships with emerald. To switch to indigo, replace the `accent` values with:

```ts
accent: {
  50: '#eef2ff', 100: '#e0e7ff', 200: '#c7d2fe', 300: '#a5b4fc', 400: '#818cf8',
  500: '#6366f1', 600: '#4f46e5', 700: '#4338ca', 800: '#3730a3', 900: '#312e81', 950: '#1e1b4b',
},
```

Also update `theme-color` and the favicon stroke colour if you want them to match.

## Deploy to Vercel

Vercel detects Vite automatically, so no `vercel.json` is needed.

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Leave the defaults: Framework Preset **Vite**, Build Command `npm run build`, Output Directory `dist`.
4. Click **Deploy**. Every later `git push` to your main branch redeploys the site.

Or from the terminal: `npx vercel` for a preview, `npx vercel --prod` for production.

## Notes

- Animations respect `prefers-reduced-motion`, and the theme toggle remembers your choice.
- Fonts (Inter and JetBrains Mono) are self-hosted through `@fontsource-variable`, so there are no requests to Google Fonts.
- The hero photo is loaded eagerly because it is above the fold. Project screenshots are lazy-loaded.
