import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

/** Shared look for icon controls (buttons and links). Width is set by the caller, never twice. */
export const iconControlBase =
  'inline-flex h-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-ring motion-reduce:transition-none dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800/70 dark:hover:text-zinc-100';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible name. Icon-only buttons need one. */
  label: string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { label, className, children, type = 'button', ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      aria-label={label}
      className={cn(iconControlBase, 'w-10', className)}
      {...rest}
    >
      {children}
    </button>
  );
});
