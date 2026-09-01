import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { formatDate } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { Plate } from '@/components/Plate';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: 'article',
      title: `${project.title} — ${club.name}`,
      description: project.summary,
      publishedTime: project.date,
      images: [
        {
          url: project.heroImage.src,
          width: project.heroImage.width,
          height: project.heroImage.height,
          alt: project.heroImage.alt,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  const related = projects
    .filter((entry) => entry.slug !== project.slug)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <>
      <PageMasthead
        kicker={`${formatDate(project.date, { year: 'numeric', month: 'long' })}${
          project.location ? ` · ${project.location}` : ''
        }`}
        title={project.title}
        standfirst={project.summary}
        breadcrumb={{ href: '/projects', label: 'All work' }}
      />

      <div className="wrap">
        <Plate image={project.heroImage} ratio="wide" priority sizes="100vw" />
      </div>

      <div className="wrap band">
        <div className="column">
          {project.story && project.story.length > 0 ? (
            project.story.map((paragraph, index) => (
              <p key={index} className="mb-7 text-lg leading-relaxed text-ink-muted last:mb-0">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-lg leading-relaxed text-ink-muted">{project.summary}</p>
          )}

          {project.objectives && project.objectives.length > 0 ? (
            <section className="mt-16" aria-labelledby="objectives">
              <p className="label" id="objectives">
                What we set out to do
              </p>
              <ul className="mt-6">
                {project.objectives.map((objective) => (
                  <li
                    key={objective}
                    className="border-b border-rule py-4 leading-relaxed text-ink-muted first:border-t"
                  >
                    {objective}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.impact && project.impact.length > 0 ? (
            <section className="mt-16" aria-labelledby="impact">
              <p className="label" id="impact">
                Measured
              </p>
              <dl className="mt-8 space-y-8">
                {project.impact.map((stat) => (
                  <div key={stat.id}>
                    <dd className="font-heading text-4xl text-ink">
                      {stat.prefix}
                      {typeof stat.value === 'number'
                        ? stat.value.toLocaleString('en-LK')
                        : stat.value}
                      {stat.suffix}
                    </dd>
                    <dt className="label mt-2">{stat.label}</dt>
                    {stat.note ? (
                      <p className="mt-1.5 text-xs text-ink-faint">{stat.note}</p>
                    ) : null}
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          {project.partners && project.partners.length > 0 ? (
            <section className="mt-16" aria-labelledby="partners">
              <p className="label" id="partners">
                With
              </p>
              <ul className="mt-4 space-y-2">
                {project.partners.map((partner) => (
                  <li key={partner.name} className="text-ink-muted">
                    {partner.name}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </div>

      {project.gallery && project.gallery.length > 0 ? (
        <section className="wrap pb-24" aria-labelledby="plates">
          <p className="label text-center" id="plates">
            Photographs
          </p>
          <div className="mt-12 flex flex-col gap-20">
            {project.gallery.map((image) => (
              <Plate key={image.src} image={image} ratio="wide" sizes="100vw" />
            ))}
          </div>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="border-t border-rule" aria-labelledby="related">
          <div className="wrap band text-center">
            <p className="label" id="related">
              More work
            </p>
            <ul className="column mt-10">
              {related.map((entry) => (
                <li key={entry.id} className="border-b border-rule first:border-t">
                  <Link
                    href={`/projects/${entry.slug}`}
                    className="block py-6 transition-colors hover:text-brass"
                  >
                    <span className="font-heading text-2xl">{entry.title}</span>
                    <span className="label mt-2 block">
                      {formatDate(entry.date, { year: 'numeric', month: 'long' })}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}
