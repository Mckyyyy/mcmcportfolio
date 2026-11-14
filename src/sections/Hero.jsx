import { profile, currentlyInto } from '../data.js';
import Button from '../components/Button.jsx';
import TechBadge from '../components/TechBadge.jsx';

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
          <p className="mb-4 font-mono text-sm italic text-neutral-300">
            Hello there, I&apos;m {profile.firstName} {profile.lastName}
          </p>

          <h1 aria-label={profile.role} className="mb-6 max-w-4xl text-[clamp(2.3rem,6vw,4.25rem)] font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#ead6d6]">
            <span className="block">Graphic Designer</span>
            <span className="block text-[#d3b9bc]">&amp; Web Developer</span>
          </h1>

          <div className="mb-6 h-px w-full max-w-[32rem] bg-[#d3b9bc]/60" />
          <p className="mb-5 max-w-xl text-base leading-relaxed sm:text-lg">{profile.bio}</p>
          <p className="mb-7 font-mono text-xs leading-relaxed text-neutral-400 sm:text-sm">
            {profile.location} · {profile.timeZone}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href="#projects">View my work <span aria-hidden="true">↘</span></Button>
            <Button href="#contact" variant="ghost">Let&apos;s talk</Button>
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
