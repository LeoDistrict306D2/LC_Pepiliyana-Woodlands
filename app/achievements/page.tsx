import type { Metadata } from 'next';
import { club } from '@/content/club';
import { achievements } from '@/content/achievements';
import { PageMasthead } from '@/components/PageMasthead';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Awards',
  description: `Recognition earned by ${club.name}.`,
  alternates: { canonical: '/achievements' },
};

const levelLabel: Record<string, string> = {
  winner: 'Winner',
  'runner-up': 'Runner-up',
  merit: 'Merit',
  recognition: 'Recognition',
};

export default function AchievementsPage() {
  const awards = [...achievements].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <>
      <PageMasthead
        kicker={awards.length > 0 ? `${awards.length} awards` : 'Awards'}
        title="Recognition."
        standfirst="Two of them. A club that runs three projects a year is not going to have a long list, and would be suspicious of one."
      />

      <div className="wrap band">
        {awards.length === 0 ? (
          <p className="column text-center text-ink-muted">No awards recorded yet.</p>
        ) : (
          <ol className="column">
            {awards.map((award, index) => (
              <li key={award.id} className="border-b border-rule py-8 first:border-t">
                <Reveal delay={index * 70}>
                  <p className="label">
                    {award.year}
                    {award.level ? ` · ${levelLabel[award.level] ?? award.level}` : ''}
                  </p>
                  <h2 className="mt-3 font-heading text-2xl leading-snug text-ink">
                    {award.title}
                  </h2>
                  {award.competition ? (
                    <p className="mt-2 text-sm text-ink-faint">{award.competition}</p>
                  ) : null}
                  {award.description ? (
                    <p className="mt-3 leading-relaxed text-ink-muted">{award.description}</p>
                  ) : null}
                </Reveal>
              </li>
            ))}
          </ol>
        )}
      </div>
    </>
  );
}
