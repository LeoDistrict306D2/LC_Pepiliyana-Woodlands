'use client';

import { useState } from 'react';

/**
 * Membership enquiry form.
 *
 * Inputs are underlines rather than boxes, which suits a site with no borders
 * anywhere else. The pattern only works because there is a real focus style —
 * the brass underline plus the global focus ring.
 *
 * No backend, so rather than render a form that silently discards what people
 * type, this composes a pre-filled email and hands it to the visitor's mail
 * client.
 */
export function JoinForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '');

    const body = [
      `Name: ${name}`,
      `Age: ${String(data.get('age') ?? '')}`,
      `Area: ${String(data.get('area') ?? '')}`,
      '',
      String(data.get('message') ?? ''),
    ].join('\n');

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      `Membership enquiry — ${name}`,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  const field =
    'mt-3 w-full border-0 border-b border-rule-strong bg-transparent px-0 py-2.5 text-ink focus:border-brass focus:outline-none';

  return (
    <form onSubmit={handleSubmit} className="column text-left">
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="join-name" className="label block">
            Your name
          </label>
          <input id="join-name" name="name" type="text" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="join-age" className="label block">
            Age
          </label>
          <input id="join-age" name="age" type="number" min={12} max={30} required className={field} />
        </div>
        <div>
          <label htmlFor="join-area" className="label block">
            Area
          </label>
          <input id="join-area" name="area" type="text" required className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="join-message" className="label block">
            Why this club
          </label>
          <textarea id="join-message" name="message" rows={4} className={field} />
        </div>
      </div>

      <button
        type="submit"
        className="label mt-12 border-b border-brass pb-1 text-ink transition-colors hover:text-brass"
      >
        Send enquiry
      </button>

      <p aria-live="polite" className="mt-6 min-h-[1.5rem] text-sm text-ink-muted">
        {sent
          ? 'Your email app should have opened with the message ready. If it did not, write to us directly at the address below.'
          : ''}
      </p>
    </form>
  );
}
