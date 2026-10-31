import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'neutral' | 'accent';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  /** Monospace text, for tech names. */
  mono?: boolean;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  neutral:
    'border-zinc-200 bg-zinc-100 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300',
  accent:
    'border-accent-600/30 bg-accent-500/10 text-accent-800 dark:border-accent-400/30 dark:bg-accent-400/10 dark:text-accent-300',
};

export function Badge({ children, variant = 'neutral', mono = false, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium',
        mono && 'font-mono',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
