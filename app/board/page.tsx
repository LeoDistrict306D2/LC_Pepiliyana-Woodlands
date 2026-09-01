import type { Metadata } from 'next';
import { club } from '@/content/club';
import { board } from '@/content/board';
import { sortExecutives } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Board',
  description: `The committee of ${club.name}.`,
  alternates: { canonical: '/board' },
};

export default function BoardPage() {
  const members = sortExecutives(board);
  const term = members[0]?.term ?? '';

  return (
    <>
      <PageMasthead
        kicker={term ? `Committee ${term}` : 'Committee'}
        title="Eight people."
        standfirst="A small club keeps a small committee. Every one of them is on a project as well as holding a post."
      />

      <div className="wrap band">
        <ul className="column">
          {members.map((member, index) => (
            <li key={member.id} className="border-b border-rule py-7 first:border-t">
              <Reveal delay={Math.min(index, 6) * 60}>
                <p className="font-heading text-2xl text-ink">{member.name}</p>
                <p className="label mt-2">{member.position}</p>
                {member.bio ? (
                  <p className="mt-3 leading-relaxed text-ink-muted">{member.bio}</p>
                ) : null}
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
