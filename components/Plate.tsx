import Image from 'next/image';
import type { ImageRef } from '@/lib/types';
import { cn } from '@/lib/utils';

const ratios = {
  wide: 'aspect-[16/9]',
  gallery: 'aspect-[3/2]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
} as const;

/**
 * A photograph, hung.
 *
 * Every image on the site goes through here, so all of them carry intrinsic
 * dimensions and a fixed aspect box — nothing can shift the layout as it loads.
 *
 * No frame, no rounding, no shadow, no overlay. The caption sits well below the
 * image in small type, the way a gallery label does — deliberately not
 * competing with the work.
 */
export function Plate({
  image,
  ratio = 'gallery',
  priority = false,
  sizes = '100vw',
  caption,
  className,
}: {
  image: ImageRef;
  ratio?: keyof typeof ratios;
  priority?: boolean;
  sizes?: string;
  /** Overrides `image.caption`. */
  caption?: string;
  className?: string;
}) {
  const label = caption ?? image.caption;

  return (
    <figure className={cn('m-0', className)}>
      <div className={cn('relative overflow-hidden bg-panel', ratios[ratio])}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          className="object-cover"
        />
      </div>
      {label ? (
        <figcaption className="mt-5 flex gap-4 text-xs text-ink-faint">
          <span>{label}</span>
          {image.credit ? <span className="ml-auto shrink-0">{image.credit}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
