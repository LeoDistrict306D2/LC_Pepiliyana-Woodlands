import Link from 'next/link';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { board } from '@/content/board';
import { byDateDesc, sortExecutives } from '@/lib/utils';
import { Plate } from '@/components/Plate';
import { Reveal } from '@/components/Reveal';
import { Counts } from '@/components/Counts';
import { CanopyEntry } from '@/components/CanopyEntry';

/**
 * Home.
 *
 * A single centred column the whole way down. Nothing sits beside anything
 * else, and the vertical spacing is roughly double the other club sites — the
 * air is the design, not an absence of content.
 */
export default function HomePage() {
  const featured = byDateDesc(projects.filter((project) => project.featured)).slice(0, 3);
  const leadership = sortExecutives(board).slice(0, 6);
  const charterYear = club.charterDate ? new Date(club.charterDate).getFullYear() : null;

  return (
    <>
      {/* Opening -------------------------------------------------------- */}
      <section className="wrap pt-20 pb-16 text-center md:pt-32 md:pb-24">
        <p className="label">
          {club.district}
          {charterYear ? ` · Chartered ${charterYear}` : ''}
        </p>

        <h1 className="column mt-8 font-heading text-5xl leading-[1.05] text-ink md:text-canopy">
          {club.tagline}
        </h1>

        <div className="tick mx-auto mt-10" aria-hidden />

        <p className="column mt-10 text-lg leading-relaxed text-ink-muted">{club.description}</p>

        <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4">
          <Link
            href="/projects"
            className="label border-b border-brass pb-1 text-ink transition-colors hover:text-brass"
          >
            The work
          </Link>
          <Link
            href="/join"
            className="label border-b border-transparent pb-1 text-ink-muted transition-colors hover:border-brass hover:text-ink"
          >
            Join the club
          </Link>
        </div>
      </section>

      <section className="wrap">
        <Plate image={club.heroImage} ratio="wide" priority sizes="100vw" />
      </section>

      {/* Counts --------------------------------------------------------- */}
      <div className="wrap band">
        <Counts stats={club.stats} label="Club record" />
      </div>

      {/* Method --------------------------------------------------------- */}
      <section className="border-y border-rule bg-panel" aria-labelledby="method">
        <div className="wrap band text-center">
          <p className="label">How we work</p>
          <h2 id="method" className="column mt-6 font-heading text-3xl leading-tight md:text-5xl">
            Do fewer things. Go back.
          </h2>
          <div className="tick mx-auto mt-8" aria-hidden />

          <ol className="column mt-14 space-y-12 text-left">
            {club.about.values.map((value, index) => (
              <li key={value.title}>
                <Reveal delay={index * 90}>
                  <p className="label">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="mt-3 font-heading text-2xl text-ink">{value.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-muted">{value.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Work ----------------------------------------------------------- */}
      <section className="wrap band" aria-labelledby="work">
        <div className="text-center">
          <p className="label">Selected work</p>
          <h2 id="work" className="mt-6 font-heading text-3xl leading-tight md:text-5xl">
            Three or four a year
          </h2>
          <div className="tick mx-auto mt-8" aria-hidden />
        </div>

        <div className="mt-24 flex flex-col gap-32 md:gap-44">
          {featured.map((project, index) => (
            <CanopyEntry key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link
            href="/projects"
            className="label border-b border-brass pb-1 text-ink transition-colors hover:text-brass"
          >
            All {projects.length} projects
          </Link>
        </div>
      </section>

      {/* Board ---------------------------------------------------------- */}
      <section className="border-t border-rule" aria-labelledby="board-heading">
        <div className="wrap band text-center">
          <p className="label">The committee</p>
          <h2
            id="board-heading"
            className="column mt-6 font-heading text-3xl leading-tight md:text-4xl"
          >
            Twenty-nine members, eight of them on the committee
          </h2>
          <div className="tick mx-auto mt-8" aria-hidden />

          <ul className="column mt-14">
            {leadership.map((member, index) => (
              <li key={member.id} className="border-b border-rule py-5 first:border-t">
                <Reveal delay={index * 50}>
                  <p className="font-heading text-xl text-ink">{member.name}</p>
                  <p className="label mt-2">{member.position}</p>
                </Reveal>
              </li>
            ))}
          </ul>

          <Link
            href="/board"
            className="label mt-12 inline-block border-b border-brass pb-1 text-ink transition-colors hover:text-brass"
          >
            The full committee
          </Link>
        </div>
      </section>

      {/* Close ---------------------------------------------------------- */}
      <section className="bg-inverse text-on-inverse">
        <div className="wrap band text-center">
          <h2 className="column font-heading text-3xl leading-tight md:text-5xl">
            We take a few people each year.
          </h2>
          <p className="column mt-8 leading-relaxed text-on-inverse/75">
            Open to anyone aged 12 to 30 near Pepiliyana. We are a small club and we intend to stay
            one, so we take a handful of new members a year — but we do take them.
          </p>
          <Link
            href="/join"
            className="label mt-12 inline-block border-b border-brass pb-1 text-on-inverse transition-colors hover:text-brass"
          >
            Join the club
          </Link>
        </div>
      </section>
    </>
  );
}
