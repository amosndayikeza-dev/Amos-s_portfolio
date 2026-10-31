import { skillGroups } from '@/data/skills';
import { icons } from '@/lib/icons';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      description="What I build with today, and the tools I’m learning to ship it."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          const GroupIcon = icons[group.icon];
          return (
            <Reveal key={group.id} delay={index * 0.08} className="h-full">
              <Card className="h-full p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/10 text-accent-700 dark:text-accent-400">
                      <GroupIcon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{group.title}</h3>
                  </div>
                  {group.learning && <Badge variant="accent">Learning</Badge>}
                </div>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{group.description}</p>

                <ul className="mt-5 grid grid-cols-2 gap-2">
                  {group.skills.map((skill) => {
                    const Icon = icons[skill.icon];
                    return (
                      <li
                        key={skill.name}
                        className="flex items-center gap-2 rounded-lg border border-zinc-200/80 bg-zinc-50 px-3 py-2 text-sm text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200"
                      >
                        <Icon
                          className="h-4 w-4 shrink-0 text-zinc-500 dark:text-zinc-400"
                          aria-hidden="true"
                        />
                        <span>{skill.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
