/** Keys of the icon registry in src/lib/icons.ts. Add a key there to use a new icon in data files. */
export type IconName =
  | 'atom'
  | 'book-open'
  | 'braces'
  | 'calendar'
  | 'cloud'
  | 'code'
  | 'coffee'
  | 'container'
  | 'database'
  | 'file-code'
  | 'git-branch'
  | 'git-pull-request'
  | 'globe'
  | 'graduation-cap'
  | 'languages'
  | 'layers'
  | 'leaf'
  | 'list-checks'
  | 'lock'
  | 'map-pin'
  | 'monitor'
  | 'palette'
  | 'plug'
  | 'puzzle'
  | 'send'
  | 'server'
  | 'shield-check'
  | 'target'
  | 'terminal'
  | 'wind'
  | 'workflow'
  | 'wrench';

export interface ImageAsset {
  src: string;
  alt: string;
  /** Intrinsic size in pixels. Used to reserve space and avoid layout shift. */
  width: number;
  height: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export type SocialKind = 'email' | 'github' | 'linkedin' | 'x';

export interface Social {
  kind: SocialKind;
  label: string;
  href: string;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export interface Fact {
  label: string;
  value: string;
  icon: IconName;
}

export interface Profile {
  name: string;
  /** Short form used in the navbar logo. */
  shortName: string;
  title: string;
  tagline: string;
  /** One string per paragraph. */
  bio: string[];
  location: string;
  email: string;
  photo: ImageAsset;
  /** Path to your CV in /public. */
  resumeUrl: string;
  education: Education;
  facts: Fact[];
  socials: Social[];
}

export interface Skill {
  name: string;
  icon: IconName;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  /** Shows a "Learning" badge on the group. */
  learning?: boolean;
  skills: Skill[];
}

export type ProjectCategory = 'Full-stack' | 'Backend-focused' | 'Frontend';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  /** Optional year shown next to the title, e.g. "2025". */
  year?: string;
  /** Optional bullet points listing what you built or achieved. */
  highlights?: string[];
  /** Optional screenshot in /public/projects. A placeholder is shown when omitted. */
  image?: ImageAsset;
  /** A full https:// URL. Anything else renders a disabled button. */
  liveUrl: string;
  githubUrl: string;
}

export type JourneyStatus = 'goal' | 'current' | 'past';

export interface JourneyEntry {
  id: string;
  /** Free text: "2026", "2025", "Goal", "[Add year]". */
  period: string;
  title: string;
  organization?: string;
  description: string;
  status: JourneyStatus;
}
