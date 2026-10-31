import { profile } from '@/data/profile';
import { Container } from '@/components/ui/Container';
import { SocialLink } from '@/components/ui/SocialLink';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 py-10 dark:border-zinc-800/70">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm">
          <p className="font-medium text-zinc-900 dark:text-zinc-100">{profile.name}</p>
          <p className="mt-1">Built with React, TypeScript &amp; Tailwind</p>
          <p className="mt-1">© {new Date().getFullYear()}</p>
        </div>
        <ul className="flex gap-2">
          {profile.socials.map((social) => (
            <li key={social.kind}>
              <SocialLink social={social} />
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
