import type { Metadata } from 'next';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { byDateDesc } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { CanopyEntry } from '@/components/CanopyEntry';

export const metadata: Metadata = {
  title: 'Work',
  description: `Every project run by ${club.name}.`,
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  const entries = byDateDesc(projects);

  return (
    <>
      <PageMasthead
        kicker={`${entries.length} projects`}
        title="Everything, in order."
        standfirst="A short list on purpose. The club caps what it takes on so that what it takes on gets finished."
      />

      <div className="wrap band flex flex-col gap-32 md:gap-44">
        {entries.map((project, index) => (
          <CanopyEntry key={project.id} project={project} index={index} />
        ))}
      </div>
    </>
  );
}
