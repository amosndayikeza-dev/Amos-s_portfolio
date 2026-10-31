import { journey } from '@/data/journey';
import { cn } from '@/lib/utils';
import type { JourneyStatus } from '@/types';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';

const markerStyles: Record<JourneyStatus, string> = {
  current:
    'border-accent-600 bg-accent-600 ring-4 ring-accent-500/20 dark:border-accent-400 dark:bg-accent-400',
  goal: 'border-dashed border-accent-600 bg-white dark:border-accent-400 dark:bg-zinc-950',
  past: 'border-zinc-400 bg-white dark:border-zinc-600 dark:bg-zinc-950',
};

export function Journey() {
  return (
    <Section
      id="journey"
      title="Journey"
      description="How I got here, and where I’m heading."
    >
      <ol className="ml-2 max-w-2xl border-l border-zinc-200 dark:border-zinc-800">
        {journey.map((entry) => (
          <li key={entry.id} className="relative pb-10 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className={cn(
                'absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2',
                markerStyles[entry.status],
              )}
            />
            <Reveal>
              <p className="text-sm font-medium text-accent-700 dark:text-accent-400">{entry.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-50">{entry.title}</h3>
              {entry.organization && (
                <p className="text-sm text-zinc-700 dark:text-zinc-300">{entry.organization}</p>
              )}
              <p className="mt-2 text-sm leading-relaxed md:text-base">{entry.description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
