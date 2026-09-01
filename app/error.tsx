'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="wrap flex min-h-[60vh] flex-col items-center justify-center py-28 text-center">
      <p className="label">Error</p>
      <h1 className="column mt-6 font-heading text-4xl leading-tight text-ink md:text-canopy">
        Something went wrong.
      </h1>
      <div className="tick mt-8" aria-hidden />
      <p className="column mt-8 text-lg text-ink-muted">
        This page failed to render. Trying again usually clears it.
      </p>
      <button
        type="button"
        onClick={reset}
        className="label mt-10 border-b border-brass pb-1 text-ink transition-colors hover:text-brass"
      >
        Try again
      </button>
    </div>
  );
}
