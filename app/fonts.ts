import { Playfair_Display, Work_Sans } from 'next/font/google';

/**
 * Playfair Display for headings, Work Sans for text.
 *
 * A high-contrast serif is the right voice for a site built on restraint — it
 * carries a heading at 4.5rem with no help from weight or colour. Work Sans
 * stays quiet underneath it.
 *
 * Headings are set at weight 400 in the base layer: on this site the size does
 * the work, and bold display type would undo the whole design.
 *
 * Loaded via next/font, which self-hosts the files and removes the
 * render-blocking request to fonts.googleapis.com.
 */
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
});

export const fontVariables = `${playfair.variable} ${workSans.variable}`;
