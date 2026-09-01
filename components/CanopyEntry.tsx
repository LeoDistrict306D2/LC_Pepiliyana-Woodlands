import Link from 'next/link';
import type { Project } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import { Plate } from './Plate';
import { Reveal } from './Reveal';

/**
 * A project, hung like a plate on a gallery wall — one per screen.
 *
 * This is the site's signature and the reason there is no project grid
 * anywhere. The club runs three or four projects a year on principle, so there
 * is never a wall of tiles to build; each project gets the full width and a
 * great deal of air above and below it.
 *
 * The text is centred beneath the image in a narrow column rather than set
 * beside it, so nothing on the page competes horizontally with anything else.
 */
export function CanopyEntry({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Reveal delay={Math.min(index, 2) * 120}>
      <article>
        <Link href={`/projects/${project.slug}`} className="group block">
          <Plate
            image={project.heroImage}
            ratio="wide"
            sizes="100vw"
            priority={index === 0}
          />
        </Link>

        <div className="column mt-12 text-center">
          <p className="label">
            {formatDate(project.date, { year: 'numeric', month: 'long' })}
            {project.location ? ` · ${project.location}` : ''}
          </p>

          <h3 className="mt-5 font-heading text-3xl leading-tight text-ink md:text-4xl">
            <Link href={`/projects/${project.slug}`} className="hover:text-brass">
              {project.title}
            </Link>
          </h3>

          <div className="tick mx-auto mt-6" aria-hidden />

          <p className="mt-6 leading-relaxed text-ink-muted">{project.summary}</p>

          {project.impact && project.impact.length > 0 ? (
            <dl className="mt-9 flex flex-wrap justify-center gap-x-12 gap-y-5">
              {project.impact.slice(0, 3).map((stat) => (
                <div key={stat.id}>
                  <dd className="font-heading text-3xl text-ink">
                    {stat.prefix}
                    {typeof stat.value === 'number'
                      ? stat.value.toLocaleString('en-LK')
                      : stat.value}
                    {stat.suffix}
                  </dd>
                  <dt className="label mt-2">{stat.label}</dt>
                </div>
              ))}
            </dl>
          ) : null}

          <Link
            href={`/projects/${project.slug}`}
            className="label mt-10 inline-block border-b border-brass pb-1 text-ink transition-colors hover:text-brass"
          >
            Read on
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
