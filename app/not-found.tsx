import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="wrap flex min-h-[60vh] flex-col items-center justify-center py-28 text-center">
      <p className="label">Error 404</p>
      <h1 className="column mt-6 font-heading text-4xl leading-tight text-ink md:text-canopy">
        Nothing here.
      </h1>
      <div className="tick mt-8" aria-hidden />
      <p className="column mt-8 text-lg text-ink-muted">
        The page you asked for does not exist. It may have been renamed or moved.
      </p>
      <Link
        href="/"
        className="label mt-10 border-b border-brass pb-1 text-ink transition-colors hover:text-brass"
      >
        Return home
      </Link>
    </div>
  );
}
