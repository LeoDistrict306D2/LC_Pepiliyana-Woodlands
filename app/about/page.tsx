import type { Metadata } from 'next';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';
import { Plate } from '@/components/Plate';
import { Counts } from '@/components/Counts';

export const metadata: Metadata = {
  title: 'About',
  description: club.about.mission,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageMasthead
        kicker="About the club"
        title="Named for woodland that no longer exists."
        standfirst={club.about.mission}
      />

      <div className="wrap">
        <Plate image={club.heroImage} ratio="wide" sizes="100vw" />
      </div>

      <div className="wrap band">
        <div className="column">
          {club.about.story.map((paragraph, index) => (
            <p key={index} className="mb-7 text-lg leading-relaxed text-ink-muted last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <section className="border-y border-rule bg-panel">
        <div className="wrap band text-center">
          <p className="label">Mission</p>
          <p className="column mt-6 font-heading text-2xl leading-snug text-ink">
            {club.about.mission}
          </p>
          <div className="tick mx-auto mt-14" aria-hidden />
          <p className="label mt-14">Vision</p>
          <p className="column mt-6 font-heading text-2xl leading-snug text-ink">
            {club.about.vision}
          </p>
        </div>
      </section>

      <div className="wrap band">
        <Counts stats={club.stats} label="Club record" />
      </div>
    </>
  );
}
