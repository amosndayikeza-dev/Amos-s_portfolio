import { profile } from '@/data/profile';
import { icons } from '@/lib/icons';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';

export function About() {
  return (
    <Section id="about" title="About">
      <Reveal className="max-w-prose space-y-5 text-base leading-relaxed md:text-lg">
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </Reveal>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profile.facts.map((fact, index) => {
          const Icon = icons[fact.icon];
          return (
            <li key={fact.label}>
              <Reveal delay={index * 0.05} className="h-full">
                <Card className="h-full p-5">
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-700 dark:text-accent-400">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">{fact.label}</p>
                      <p className="mt-0.5 font-medium text-zinc-900 dark:text-zinc-100">{fact.value}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
