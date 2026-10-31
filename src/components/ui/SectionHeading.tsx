import { Reveal } from './Reveal';

interface SectionHeadingProps {
  /** Id of the h2, referenced by the section's aria-labelledby. */
  id: string;
  title: string;
  description?: string;
}

export function SectionHeading({ id, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <h2
        id={id}
        className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
      >
        {title}
      </h2>
      {description && <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">{description}</p>}
    </Reveal>
  );
}
