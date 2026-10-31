import { Image as ImageIcon } from 'lucide-react';
import { projects } from '@/data/projects';
import { isHttpUrl } from '@/lib/utils';
import type { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';

function ProjectCard({ project }: { project: Project }) {
  const hasLive = isHttpUrl(project.liveUrl);
  const hasRepo = isHttpUrl(project.githubUrl);

  return (
    <Card interactive className="flex h-full flex-col overflow-hidden">
      <div className="aspect-[16/10] border-b border-zinc-200/80 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
        {project.image ? (
          <img
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-zinc-500 dark:text-zinc-400">
            <ImageIcon className="h-6 w-6" aria-hidden="true" />
            <span className="text-sm">Screenshot coming soon</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {project.title}
            {project.year && (
              <span className="ml-2 text-sm font-normal text-zinc-500 dark:text-zinc-400">{project.year}</span>
            )}
          </h3>
          <Badge className="shrink-0">{project.category}</Badge>
        </div>
        <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed">{project.description}</p>

        {project.highlights && (
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed marker:text-accent-600 dark:marker:text-accent-400">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tech.map((tech) => (
            <li key={tech}>
              <Badge mono>{tech}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <Button
            size="sm"
            href={hasLive ? project.liveUrl : undefined}
            disabled={!hasLive}
            title={hasLive ? undefined : project.liveUrl}
          >
            Live Demo
          </Button>
          <Button
            size="sm"
            variant="secondary"
            href={hasRepo ? project.githubUrl : undefined}
            disabled={!hasRepo}
            title={hasRepo ? undefined : project.githubUrl}
          >
            GitHub
          </Button>
        </div>
      </div>
    </Card>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      description="Things I’ve built. New projects are added here as I finish them."
    >
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <li key={project.id}>
            <Reveal delay={index * 0.08} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
