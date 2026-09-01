import type { Metadata } from 'next';
import { club } from '@/content/club';
import { pastPresidents } from '@/content/past-presidents';
import { PageMasthead } from '@/components/PageMasthead';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Past Presidents',
  description: `Every president of ${club.name} since charter.`,
  alternates: { canonical: '/past-presidents' },
};

export default function PastPresidentsPage() {
  const years = [...pastPresidents].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <>
      <PageMasthead
        kicker={`${years.length} years`}
        title="Ten presidents."
        standfirst="Each sets a theme for the year. Read in sequence they show a club gradually deciding to do less."
      />

      <div className="wrap band">
        <ol className="column">
          {years.map((president, index) => (
            <li key={president.year} className="border-b border-rule py-8 first:border-t">
              <Reveal delay={Math.min(index, 6) * 55}>
                <p className="label">{president.year}</p>
                <p className="mt-3 font-heading text-2xl text-ink">{president.name}</p>
                {president.theme ? (
                  <p className="mt-2 text-ink-muted italic">&ldquo;{president.theme}&rdquo;</p>
                ) : null}
                {president.highlights && president.highlights.length > 0 ? (
                  <ul className="mt-4 space-y-1.5">
                    {president.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm leading-relaxed text-ink-muted">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
