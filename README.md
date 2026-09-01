# Leo Club of Pepiliyana Woodlands — website

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

**Design concept: *Canopy*.** A gallery, not a brochure. Built on restraint and
vertical air: a single centred column, one thing at a time, and section padding
roughly double every other club site in this set. Projects are hung like plates
on a wall — one per screen, caption beneath.

One of eleven independently designed club sites in Leo District 306 D2. It
shares no design code with the others; only `lib/` is common.

---

## Running it

```bash
npm install
npm run dev
npm run build
npm run typecheck
npm run lint
```

Node 20.9+ required.

---

## The design system

Tokens live in the `@theme` block at the top of `app/globals.css`, named by
**role** rather than hue.

| Token | Value | Used for |
|---|---|---|
| `--color-page` | `#fbfaf7` | Bone ground |
| `--color-panel` | `#f2f0ea` | Alternate bands |
| `--color-ink` | `#1a1c19` | Text |
| `--color-accent` | `#1f4032` | Forest green — structural, closing band |
| `--color-brass` | `#a98634` | The **only** bright note. ~6 uses per page |

Type: Playfair Display + Work Sans, self-hosted via `next/font`. **Headings are
weight 400 in the base layer** — on this site size does the work, and bold
display type would undo the whole design. Do not add `font-bold` to headings.

### Signature classes

- `.column` — the 34rem centred measure everything sits in
- `.band` — ~2× the vertical rhythm of the other clubs. That is deliberate
- `.tick` — the short brass rule used instead of dividers
- `.label` — the tracked small-caps label
- `components/CanopyEntry.tsx` — one project per screen, text centred beneath

---

## Editing content

Append to `content/projects.ts`. This club runs three or four projects a year on
principle, so the list stays short and every entry gets a full screen:

```ts
{
  id: 'hedgerow',
  slug: 'hedgerow',
  title: 'Hedgerow',
  summary: 'One sentence.',
  story: ['Paragraph one.', 'Paragraph two.'],
  category: 'environment',
  year: '2025/26',
  date: '2026-04-04',
  location: 'Pepiliyana',
  featured: true,
  heroImage: { src: '/images/projects/hedgerow.jpg',
               alt: 'Describe what is happening', width: 2000, height: 1125 },
  impact: [{ id: 'standing', value: 340, label: 'Trees still standing',
             note: 'At two years.' }],
}
```

**Note the club's counting rule:** publish trees *still standing*, not trees
*planted*, and put the caveat in `note`. The `Counts` component renders notes
under the label precisely so the caveat travels with the number.

Board members: `content/board.ts`, ordered automatically by `rank`.
Images: real `width`/`height` always; `.jpg`/`.webp` only — HEIC does not render.

---

## Standards this site holds to

- One `<h1>` per page; per-route `<title>`, description, canonical, OG tags.
- Every image via `next/image` in an aspect box, with `alt`.
- Keyboard-operable menu: `aria-expanded`/`aria-controls`, Escape closes and
  returns focus, visible focus ring, skip link.
- `prefers-reduced-motion` respected; content readable with JavaScript off.
- `typedRoutes` on — a dead internal link fails the build.
- `images.remotePatterns` deliberately empty.
- Membership form composes a real pre-filled email.

## Deploying

Set `siteUrl` in `content/club.ts`, then `npm run build && npm start`.

## Outstanding content

Everything marked `TODO(content)` needs real values. Images are generated
solid-colour placeholders. The site renders correctly while incomplete.
