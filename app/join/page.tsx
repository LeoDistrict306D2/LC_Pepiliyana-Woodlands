import type { Metadata } from 'next';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';
import { JoinForm } from '@/components/JoinForm';

export const metadata: Metadata = {
  title: 'Join',
  description: `Membership of ${club.name} is open to anyone aged 12 to 30 near Pepiliyana.`,
  alternates: { canonical: '/join' },
};

const notes = [
  {
    title: 'We take a few each year',
    body: 'We are a small club and intend to stay one. That means a handful of new members a year rather than an open door — but it also means you will not be a spare pair of hands.',
  },
  {
    title: 'You will commit to a revisit',
    body: 'Every project here has a return date agreed before it starts. Joining means being part of that, not just the launch day.',
  },
  {
    title: 'Expect to be told no',
    body: 'Most good ideas get declined, including ours. Learning to say no early and with a reason is a real skill and you will practise it.',
  },
];

export default function JoinPage() {
  return (
    <>
      <PageMasthead
        kicker="Membership"
        title="A few people each year."
        standfirst="Open to anyone aged 12 to 30 near Pepiliyana. No experience needed."
      />

      <div className="wrap band">
        <ol className="column">
          {notes.map((note, index) => (
            <li key={note.title} className="border-b border-rule py-8 first:border-t">
              <p className="label">{String(index + 1).padStart(2, '0')}</p>
              <h2 className="mt-3 font-heading text-2xl text-ink">{note.title}</h2>
              <p className="mt-3 leading-relaxed text-ink-muted">{note.body}</p>
            </li>
          ))}
        </ol>
      </div>

      <section className="border-t border-rule bg-panel" aria-labelledby="enquiry">
        <div className="wrap band">
          <div className="text-center">
            <p className="label" id="enquiry">
              Enquiry
            </p>
            <p className="column mt-6 text-lg leading-relaxed text-ink-muted">
              This opens a pre-written email to the club secretary. We answer everything, usually
              within a week.
            </p>
            <div className="tick mx-auto mt-10" aria-hidden />
          </div>

          <div className="mt-14">
            <JoinForm email={club.contact.email ?? ''} />
          </div>

          {club.contact.email ? (
            <p className="column mt-10 text-center text-sm text-ink-faint">
              Or write directly to{' '}
              <a
                href={`mailto:${club.contact.email}`}
                className="underline underline-offset-2 hover:text-brass"
              >
                {club.contact.email}
              </a>
              .
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}
