import Link from 'next/link';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { club } from '@/content/club';

/**
 * Footer. Centred and quiet, closing the page the way the header opens it.
 * The affiliation chain is a sentence rather than a row of logos.
 *
 * A server component: no state, and the year resolves at build time.
 */
const links = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Work' },
  { href: '/board', label: 'Board' },
  { href: '/past-presidents', label: 'Presidents' },
  { href: '/achievements', label: 'Awards' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/join', label: 'Join' },
  { href: '/contact', label: 'Contact' },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule">
      <div className="wrap py-20 text-center">
        <p className="font-heading text-2xl text-ink">{club.name}</p>
        <p className="label mt-3">{club.motto}</p>

        <div className="tick mx-auto mt-8" aria-hidden />

        <nav aria-label="Footer" className="mt-10">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="label text-ink-muted transition-colors hover:text-brass"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="mt-10 flex justify-center gap-4">
          {club.socials.facebook ? (
            <li>
              <a
                href={club.socials.facebook}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center border border-rule-strong text-ink-muted transition-colors hover:border-brass hover:text-brass"
              >
                <Facebook aria-hidden size={16} />
              </a>
            </li>
          ) : null}
          {club.socials.instagram ? (
            <li>
              <a
                href={club.socials.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center border border-rule-strong text-ink-muted transition-colors hover:border-brass hover:text-brass"
              >
                <Instagram aria-hidden size={16} />
              </a>
            </li>
          ) : null}
          {club.contact.email ? (
            <li>
              <a
                href={`mailto:${club.contact.email}`}
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center border border-rule-strong text-ink-muted transition-colors hover:border-brass hover:text-brass"
              >
                <Mail aria-hidden size={16} />
              </a>
            </li>
          ) : null}
        </ul>

        <p className="column mt-14 text-xs leading-relaxed text-ink-faint">
          {club.name} is a member club of{' '}
          <a
            href={club.districtUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="underline underline-offset-2 hover:text-brass"
          >
            {club.district}
          </a>
          , part of{' '}
          <a
            href={club.multipleDistrictUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="underline underline-offset-2 hover:text-brass"
          >
            {club.multipleDistrict}
          </a>
          , within Lions Clubs International.
          {club.sponsoringLionsClub ? ` Sponsored by the ${club.sponsoringLionsClub}.` : ''}
        </p>

        <p className="mt-4 text-xs text-ink-faint">
          © {year} {club.name}. {club.contact.address}
        </p>
      </div>
    </footer>
  );
}
