import type { ReactNode } from 'react';
import { cn, isHttpUrl } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md';

export interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Renders a link. Leave undefined for a real <button>. */
  href?: string;
  /** Asks the browser to download the linked file. */
  download?: boolean;
  /** Renders a non-interactive button, e.g. for a link that is not filled in yet. */
  disabled?: boolean;
  title?: string;
  className?: string;
  onClick?: () => void;
}

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-colors focus-ring motion-reduce:transition-none';

const variants: Record<Variant, string> = {
  primary: 'bg-accent-700 text-white dark:bg-accent-400 dark:text-zinc-950',
  secondary:
    'border border-zinc-300 bg-white text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100',
  ghost: 'text-zinc-700 dark:text-zinc-300',
};

const hovers: Record<Variant, string> = {
  primary: 'hover:bg-accent-800 dark:hover:bg-accent-300',
  secondary: 'hover:bg-zinc-50 dark:hover:bg-zinc-800',
  ghost: 'hover:bg-zinc-100 dark:hover:bg-zinc-800/70',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-11 px-5 text-sm',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  download,
  disabled = false,
  title,
  className,
  onClick,
}: ButtonProps) {
  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    disabled ? 'cursor-not-allowed opacity-50' : hovers[variant],
    className,
  );

  if (href && !disabled) {
    const external = isHttpUrl(href);
    return (
      <a
        href={href}
        download={download}
        title={title}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }

  return (
    <button type="button" className={classes} disabled={disabled} title={title} onClick={onClick}>
      {children}
    </button>
  );
}
