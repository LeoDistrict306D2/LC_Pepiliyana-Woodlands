import type { Club } from '@/lib/types';

/**
 * Leo Club of Pepiliyana Woodlands — club record.
 *
 * The voice here is quiet and unhurried, matching the design. Copy should be
 * short; this site gives every sentence a great deal of space, and long
 * paragraphs undo that.
 *
 * TODO(content): charter date, roster, contact details and photography are
 * placeholders pending real values from the club.
 */
export const club: Club = {
  name: 'Leo Club of Pepiliyana Woodlands',
  shortName: 'Pepiliyana Woodlands',
  tagline: 'Fewer things, done properly.',
  motto: 'Leadership · Experience · Opportunity',
  description:
    'A Leo club in Pepiliyana. We run three or four projects a year rather than fifteen, and we finish them. It is a less impressive-looking way to work and a considerably more useful one.',
  charterDate: '2015-11-07',

  district: 'Leo District 306 D2',
  multipleDistrict: 'Leo Multiple District 306',
  sponsoringLionsClub: 'Lions Club of Pepiliyana',
  districtUrl: 'https://leodistrict306d2.org/',
  multipleDistrictUrl: 'https://www.leomd306.org/',

  logo: {
    src: '/images/logo/logo.png',
    alt: 'Leo Club of Pepiliyana Woodlands emblem',
    width: 512,
    height: 512,
  },
  heroImage: {
    src: '/images/hero/hero.png',
    alt: 'Members of the Leo Club of Pepiliyana Woodlands at the Woodlands tree nursery',
    width: 2000,
    height: 1125,
  },

  contact: {
    email: 'leopepiliyanawoodlands@gmail.com',
    address: 'Pepiliyana, Boralesgamuwa, Sri Lanka',
  },

  socials: {
    facebook: 'https://www.facebook.com/leopepiliyanawoodlands',
    instagram: 'https://www.instagram.com/leopepiliyanawoodlands',
    email: 'leopepiliyanawoodlands@gmail.com',
  },

  siteUrl: 'https://pepiliyana.leo306d2.org',

  stats: [
    { id: 'years', value: 10, label: 'Years' },
    { id: 'members', value: 29, label: 'Members' },
    { id: 'projects', value: 31, label: 'Projects', note: 'Roughly three a year, by design.' },
    { id: 'trees', value: 2800, suffix: '+', label: 'Trees still standing' },
  ],

  about: {
    story: [
      'The club is named for a stretch of woodland that no longer exists. It was cleared in the 1990s and the name stayed, which felt like a reasonable thing to try to earn back.',
      'We are a small club and we have stopped pretending otherwise. Three or four projects a year, chosen slowly, run to completion, and revisited afterwards.',
      'The nursery is the clearest example. Planting a tree takes an afternoon. Keeping 2,800 of them alive across ten years takes a watering roster, a soil survey, two failed species, and somebody driving out every fortnight for a decade.',
      'That is the whole method. Do fewer things. Go back.',
    ],
    mission:
      'To restore tree cover around Pepiliyana and support the schools nearby, through a small number of projects carried through to completion.',
    vision:
      'Woodland worth the name, and a club small enough to look after it.',
    values: [
      {
        title: 'Three a year',
        description:
          'We cap what we take on. A club that says yes to everything finishes nothing.',
      },
      {
        title: 'Count what survives',
        description:
          'We publish trees still standing, not trees planted. The second number flatters; the first is true.',
      },
      {
        title: 'Return on a schedule',
        description:
          'Every project has a revisit date agreed before it starts. If we cannot commit to going back, we do not begin.',
      },
      {
        title: 'Say no kindly',
        description:
          'Turning down good ideas is most of the work. We do it early, in person, and with a reason.',
      },
    ],
  },
};
