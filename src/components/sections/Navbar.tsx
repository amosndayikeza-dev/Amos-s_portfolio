import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, profile } from '@/data/profile';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { IconButton } from '@/components/ui/IconButton';

const linkClasses =
  'rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 focus-ring motion-reduce:transition-none dark:text-zinc-400 dark:hover:text-zinc-100';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Escape closes the mobile menu and returns focus to the button that opened it.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b transition-colors duration-200 motion-reduce:transition-none',
        scrolled || open
          ? 'border-zinc-200/70 bg-white/80 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/80'
          : 'border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <a
          href="#top"
          className="rounded-lg text-base font-semibold tracking-tight text-zinc-900 focus-ring dark:text-zinc-50"
        >
          {profile.shortName}
        </a>

        <div className="flex items-center gap-2">
          <nav aria-label="Primary" className="mr-2 hidden md:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClasses}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />

          <Button
            href={profile.resumeUrl}
            download
            variant="secondary"
            size="sm"
            className="hidden md:inline-flex"
          >
            Resume
          </Button>

          <IconButton
            ref={menuButtonRef}
            label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </IconButton>
        </div>
      </Container>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-zinc-200/70 md:hidden dark:border-zinc-800/70"
      >
        <Container className="py-4">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(linkClasses, 'block py-3 text-base')}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <Button href={profile.resumeUrl} download variant="secondary" className="w-full">
                Resume
              </Button>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
