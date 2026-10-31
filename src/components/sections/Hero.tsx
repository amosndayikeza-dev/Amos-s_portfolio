import { Download } from 'lucide-react';
import { profile } from '@/data/profile';
import { ProfilePhoto } from '@/components/ProfilePhoto';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="pb-20 pt-10 md:pb-28 md:pt-20">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16">
          <Reveal className="order-2 md:order-1">
            <h1
              id="hero-heading"
              className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-zinc-50"
            >
              {profile.name}
            </h1>
            <p className="mt-4 text-lg font-medium text-accent-700 md:text-xl dark:text-accent-400">
              {profile.title}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600 md:text-lg dark:text-zinc-400">
              {profile.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#projects">View Projects</Button>
              <Button href={profile.resumeUrl} download variant="secondary">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-1 justify-self-start md:order-2 md:justify-self-end">
            <ProfilePhoto photo={profile.photo} name={profile.name} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
