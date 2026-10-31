import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  /** Padding is not built in. Pass p-5, p-6, etc. so it never fights with a default. */
  className?: string;
  /** Lifts slightly on hover. */
  interactive?: boolean;
}

export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-zinc-200/80 bg-white shadow-soft dark:border-zinc-800 dark:bg-zinc-900/40 dark:shadow-none',
        interactive &&
          'transition duration-200 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lift motion-reduce:transform-none motion-reduce:transition-none dark:hover:border-zinc-700',
        className,
      )}
    >
      {children}
    </div>
  );
}
