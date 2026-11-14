import { profile, currentlyInto } from '../data.js';
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

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 pb-8 pt-6 sm:px-6 sm:pb-10 sm:pt-8 md:pt-12 lg:grid-cols-12 lg:gap-8 lg:pb-14">
        {/* Left: copy */}
        <div className="@container min-w-0 lg:col-span-7">
          <p className="mb-3 font-mono text-sm text-neutral-400">Hello There, I&apos;m</p>

          {/* Sized to the column width (cqw) so the full name always fits beside the photo */}
          <h1 className="mb-6 sm:mb-8 text-[clamp(2rem,11cqw,6rem)] font-black leading-[0.9] tracking-tight text-white">
            <span className="sr-only">{`${profile.firstName} ${profile.lastName}`}</span>
            <TypedName first={profile.firstName} last={profile.lastName} />
          </h1>

          <p className="mb-2 text-lg font-bold uppercase tracking-[0.15em] text-emerald-300 sm:text-xl">Graphic Designer and Web Developer</p>
          <p className="mb-6 max-w-xl text-base leading-relaxed sm:mb-8 sm:text-lg">{profile.bio}</p>

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
            {/* soft emerald glow behind the portrait */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[45%] h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl"
            />
            <figure className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-neutral-800 bg-black">
              <img
                src={profile.heroImage}
                alt={`Portrait of ${profile.firstName} ${profile.lastName}`}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.02]"
              />
              <div aria-hidden="true" className="pointer-events-none absolute inset-3 rounded-[1.4rem] border border-neutral-800/70" />
              <figcaption className="absolute inset-x-5 bottom-5 z-10 flex items-center justify-between font-mono text-[11px] text-neutral-400">
                <span>// more than just code</span>
                <span>PH</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* Bottom strip: current interests */}
      <div className="relative border-t border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">Currently into</p>
            <ul className="flex flex-wrap gap-2">
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
