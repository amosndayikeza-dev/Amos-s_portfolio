import type { ComponentType } from 'react';
import { Mail } from 'lucide-react';
import type { Social, SocialKind } from '@/types';
import { cn, isHttpUrl } from '@/lib/utils';
import { GitHubIcon, LinkedInIcon, XIcon } from './BrandIcons';
import { iconControlBase } from './IconButton';

interface IconProps {
  className?: string;
}

function MailIcon({ className }: IconProps) {
  return <Mail className={className} aria-hidden="true" />;
}

const socialIcons: Record<SocialKind, ComponentType<IconProps>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  email: MailIcon,
};

interface SocialLinkProps {
  social: Social;
  /** "icon" is a square icon-only link, "pill" shows the label too. */
  variant?: 'icon' | 'pill';
  className?: string;
}

export function SocialLink({ social, variant = 'icon', className }: SocialLinkProps) {
  const Icon = socialIcons[social.kind];
  const external = isHttpUrl(social.href);

  return (
    <a
      href={social.href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(
        iconControlBase,
        variant === 'pill' ? 'gap-2 px-4 text-sm font-medium' : 'w-10',
        className,
      )}
    >
      <Icon className="h-5 w-5" />
      {variant === 'pill' ? (
        <span>{social.label}</span>
      ) : (
        <span className="sr-only">{social.label}</span>
      )}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
