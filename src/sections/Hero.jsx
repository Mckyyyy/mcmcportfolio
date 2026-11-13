import { profile, socials, currentlyInto } from '../data.js';
import Button from '../components/Button.jsx';
import TechBadge from '../components/TechBadge.jsx';
import TypedName from '../components/TypedName.jsx';

export default function Hero() {
  return (
    <section id="intro" className="relative overflow-hidden">
      {/* faint grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top_left,black_20%,transparent_70%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 md:pt-20 lg:grid-cols-12 lg:gap-10 lg:pb-24">
        {/* Left: copy */}
        <div className="@container min-w-0 lg:col-span-7">
          <p className="mb-3 font-mono text-sm text-neutral-400">{profile.role}</p>

          {/* Sized to the column width (cqw) so the full name always fits beside the photo */}
          <h1 className="mb-6 sm:mb-8 text-[clamp(2rem,11cqw,6rem)] font-black leading-[0.9] tracking-tight text-white">
            <span className="sr-only">{`${profile.firstName} ${profile.lastName}`}</span>
            <TypedName first={profile.firstName} last={profile.lastName} />
          </h1>

          <p className="mb-8 max-w-xl text-base leading-relaxed sm:mb-10 sm:text-lg">{profile.bio}</p>

          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <Button href="#projects">Explore my work →</Button>
            <Button href="#writing" variant="ghost">
              Read writing
            </Button>
          </div>
        </div>

        {/* Right: portrait */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-[17rem] sm:max-w-sm lg:max-w-none">
            <figure className="group relative overflow-hidden rounded-3xl border border-neutral-800 bg-black">
              <img
                src={profile.heroImage}
                alt={`Portrait of ${profile.firstName} ${profile.lastName}`}
                className="aspect-[4/5] w-full object-cover object-[50%_70%] grayscale-[35%] transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-3 rounded-2xl border border-white/5" />
              <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[11px] text-neutral-400">
                <span>// more than just code</span>
                <span>PH</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* Bottom strip: connect + currently into */}
      <div className="relative border-t border-neutral-800">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 md:grid-cols-2">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">Connect</p>
            <ul className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 px-3.5 py-1.5 font-mono text-xs text-neutral-300 transition-colors hover:border-emerald-500/50 hover:text-white"
                  >
                    {s.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:text-right">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">Currently into</p>
            <ul className="flex flex-wrap gap-2 md:justify-end">
              {currentlyInto.map((t) => (
                <li key={t}>
                  <TechBadge>{t}</TechBadge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
