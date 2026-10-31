import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';

interface SectionProps {
  /** Anchor id used by the navbar, e.g. "projects" for href="#projects". */
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, description, children, className }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        'border-t border-zinc-200/70 py-16 md:py-24 dark:border-zinc-800/70',
        className,
      )}
    >
      <Container>
        <SectionHeading id={headingId} title={title} description={description} />
        {children}
      </Container>
    </section>
  );
}
