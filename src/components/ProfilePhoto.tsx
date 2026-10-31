import { useState } from 'react';
import type { ImageAsset } from '@/types';
import { getInitials } from '@/lib/utils';

interface ProfilePhotoProps {
  photo: ImageAsset;
  name: string;
}

const sizeClasses = 'h-44 w-44 sm:h-52 sm:w-52 md:h-64 md:w-64';
const ringClasses =
  'ring-2 ring-accent-600/40 ring-offset-4 ring-offset-white dark:ring-accent-400/40 dark:ring-offset-zinc-950';

/** Circular portrait with a soft accent glow. Shows initials if /public/profile.jpg is missing. */
export function ProfilePhoto({ photo, name }: ProfilePhotoProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-full bg-accent-500/20 blur-2xl dark:bg-accent-400/15"
      />
      {failed ? (
        <div
          role="img"
          aria-label={photo.alt}
          className={`relative flex items-center justify-center rounded-full bg-zinc-100 text-5xl font-semibold text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400 ${sizeClasses} ${ringClasses}`}
        >
          {getInitials(name)}
        </div>
      ) : (
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          // Above the fold and likely the largest paint, so it is not lazy-loaded.
          loading="eager"
          decoding="async"
          onError={() => setFailed(true)}
          className={`relative rounded-full bg-zinc-100 object-cover dark:bg-zinc-900 ${sizeClasses} ${ringClasses}`}
        />
      )}
    </div>
  );
}
