import { Mail } from 'lucide-react';
import { profile } from '@/data/profile';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SocialLink } from '@/components/ui/SocialLink';

export function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      description="Have a project in mind, or want to talk about web development or DevOps? Email me and I’ll reply as soon as I can."
    >
      <Reveal>
        <Card className="p-8 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Email</p>
              <p className="mt-1 break-all text-xl font-medium text-zinc-900 dark:text-zinc-50">
                {profile.email}
              </p>
            </div>
            <Button href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" aria-hidden="true" />
              Send an email
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3 border-t border-zinc-200/80 pt-8 dark:border-zinc-800">
            {profile.socials.map((social) => (
              <li key={social.kind}>
                <SocialLink social={social} variant="pill" />
              </li>
            ))}
          </ul>
        </Card>
      </Reveal>
    </Section>
  );
}
