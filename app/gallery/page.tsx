import type { Metadata } from 'next';
import Link from 'next/link';
import { club } from '@/content/club';
import { gallery } from '@/content/gallery';
import { PageMasthead } from '@/components/PageMasthead';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
  title: 'Gallery',
  description: `Photographs from the work of ${club.name}.`,
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      <PageMasthead
        kicker="Photographs"
        title="Hung one at a time."
        standfirst="Pictures from the work. Full width, one below the next — the same way everything else on this site is presented."
      />

      <div className="wrap band">
        {gallery.length === 0 ? (
          <div className="column text-center">
            <p className="text-ink-muted">
              The gallery is empty while the club&rsquo;s photography is being collected.
              Photographs from each project are already on its own page.
            </p>
            <Link
              href="/projects"
              className="label mt-10 inline-block border-b border-brass pb-1 text-ink transition-colors hover:text-brass"
            >
              Go to the work
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-24">
            {gallery.map((item) => (
              <Plate key={item.id} image={item} ratio="wide" sizes="100vw" />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
