import Link from 'next/link';

/**
 * Page heading. Centred, narrow, with a brass tick beneath — the same marker
 * used throughout the site in place of rules.
 */
export function PageMasthead({
  kicker,
  title,
  standfirst,
  breadcrumb,
}: {
  kicker: string;
  title: string;
  standfirst?: string;
  breadcrumb?: { href: '/projects'; label: string };
}) {
  return (
    <div className="wrap pt-20 pb-14 text-center md:pt-28 md:pb-20">
      {breadcrumb ? (
        <nav aria-label="Breadcrumb" className="mb-8">
          <Link href={breadcrumb.href} className="label text-ink-muted hover:text-brass">
            ← {breadcrumb.label}
          </Link>
        </nav>
      ) : null}

      <p className="label">{kicker}</p>

      <h1 className="column mt-6 font-heading text-4xl leading-[1.08] text-ink md:text-canopy">
        {title}
      </h1>

      <div className="tick mx-auto mt-8" aria-hidden />

      {standfirst ? (
        <p className="column mt-8 text-lg leading-relaxed text-ink-muted">{standfirst}</p>
      ) : null}
    </div>
  );
}
