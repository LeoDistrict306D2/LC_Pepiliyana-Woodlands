import type { Project } from '@/lib/types';

/**
 * Projects.
 *
 * This club runs three or four a year by design, so the list stays short and
 * every entry earns a full screen on the site.
 *
 * TODO(content): illustrative records in the club's format — replace with real
 * project data. `heroImage` points at the shared placeholder until real
 * photography exists.
 */
const placeholder = (alt: string) => ({
  src: '/images/projects/placeholder.png',
  alt,
  width: 2000,
  height: 1250,
});

export const projects: Project[] = [
  {
    id: 'nursery',
    slug: 'nursery',
    title: 'The Nursery',
    summary:
      'A tree nursery and a ten-year replanting programme along the Pepiliyana canal reserve.',
    category: 'environment',
    year: '2025/26',
    date: '2025-06-14',
    location: 'Pepiliyana canal reserve',
    featured: true,
    heroImage: placeholder('Saplings in the club tree nursery at Pepiliyana'),
    story: [
      'We planted 4,100 saplings over ten years. 2,800 are still alive. We publish the second number.',
      'The first two years were a failure worth describing. We planted mahogany because it was donated, on ground that floods twice a year, and lost almost the entire cohort. A soil survey we should have commissioned first cost less than the saplings did.',
      'Since then it has been kumbuk and mee on the wet ground, and a fortnightly watering roster through both dry seasons. Ten years of somebody driving out every other week is the entire trick.',
    ],
    objectives: [
      'Maintain a nursery supplying the reserve without buying in stock',
      'Match species to ground conditions before planting, not after',
      'Keep a fortnightly watering roster through both dry seasons',
    ],
    impact: [
      { id: 'standing', value: 2800, label: 'Trees still standing', note: 'At ten years.' },
      { id: 'planted', value: 4100, label: 'Planted in total' },
      { id: 'years', value: 10, label: 'Years maintained' },
    ],
  },
  {
    id: 'reading-room',
    slug: 'reading-room',
    title: 'The Reading Room',
    summary:
      'A quiet study room at the Pepiliyana school, open six evenings a week through the exam year.',
    category: 'education',
    year: '2024/25',
    date: '2025-01-20',
    location: 'Pepiliyana',
    featured: true,
    heroImage: placeholder('Students studying in the evening reading room'),
    story: [
      'A number of students here study in one room with a television on and four other people in it. The room is not complicated: light, quiet, a desk each, and it is open until nine.',
      'A club member is present every evening. That is thirty-one people covering six nights a week for a full academic year, which is the only reason it has never had to close.',
    ],
    objectives: [
      'Open six evenings a week through the full academic year',
      'Staff every session with a club member present',
      'Keep it quiet — no classes, no tutoring, no events',
    ],
    impact: [
      { id: 'students', value: 74, label: 'Regular users' },
      { id: 'evenings', value: 280, label: 'Evenings opened' },
      { id: 'closures', value: 0, label: 'Sessions cancelled' },
    ],
  },
  {
    id: 'soil-survey',
    slug: 'soil-survey',
    title: 'Soil Survey',
    summary:
      'A ground survey of the canal reserve, commissioned after two years of planting the wrong species.',
    category: 'environment',
    year: '2023/24',
    date: '2024-03-02',
    location: 'Pepiliyana canal reserve',
    featured: true,
    heroImage: placeholder('Soil sampling along the canal reserve'),
    story: [
      'This is on the site because it is the most useful thing the club has ever done and it looks like nothing.',
      'Two years of failed planting could have been avoided by a survey that took one afternoon and cost less than a single delivery of saplings. Everything the nursery has achieved since rests on it.',
    ],
    impact: [
      { id: 'plots', value: 46, label: 'Plots sampled' },
      { id: 'species', value: 6, label: 'Species ruled out' },
    ],
  },
  {
    id: 'canal-path',
    slug: 'canal-path',
    title: 'The Canal Path',
    summary: 'Clearing and marking a walking path along the reserve, with the residents who use it.',
    category: 'community-service',
    year: '2022/23',
    date: '2023-05-27',
    location: 'Pepiliyana',
    heroImage: placeholder('The cleared walking path along the canal reserve'),
    impact: [
      { id: 'metres', value: 1100, suffix: ' m', label: 'Path cleared' },
      { id: 'residents', value: 40, label: 'Residents involved' },
    ],
  },
];
