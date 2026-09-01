import type { Metadata } from 'next';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';

export const metadata: Metadata = {
  title: 'Contact',
  description: `How to reach ${club.name}.`,
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageMasthead
        kicker="Contact"
        title="Get in touch."
        standfirst="Partnerships, sponsorship, or a piece of ground that needs planting."
      />

      <div className="wrap band text-center">
        <dl className="column">
          {club.contact.email ? (
            <div className="border-b border-rule py-8 first:border-t">
              <dt className="label">Email</dt>
              <dd className="mt-3">
                <a
                  href={`mailto:${club.contact.email}`}
                  className="font-heading text-2xl break-all text-ink transition-colors hover:text-brass"
                >
                  {club.contact.email}
                </a>
              </dd>
            </div>
          ) : null}

          {club.contact.phone ? (
            <div className="border-b border-rule py-8">
              <dt className="label">Phone</dt>
              <dd className="mt-3">
                <a
                  href={`tel:${club.contact.phone}`}
                  className="font-heading text-2xl text-ink transition-colors hover:text-brass"
                >
                  {club.contact.phone}
                </a>
              </dd>
            </div>
          ) : null}

          {club.contact.address ? (
            <div className="border-b border-rule py-8">
              <dt className="label">Based in</dt>
              <dd className="mt-3 font-heading text-2xl text-ink">{club.contact.address}</dd>
            </div>
          ) : null}
        </dl>

        <p className="column mt-14 leading-relaxed text-ink-faint">
          Looking to join rather than get in touch? The membership page has a form that reaches the
          secretary directly.
        </p>
      </div>
    </>
  );
}
