import { toolkit, services } from '../data.js';
import SectionHeader from '../components/SectionHeader.jsx';
import TechBadge from '../components/TechBadge.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Approach() {
  return (
    <section id="approach" className="border-t border-neutral-800">
      <Reveal className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 md:py-20">
        <SectionHeader number="01" label="Services & Skills" title="Graphic Designer and Web Developer" />

        <div className="mb-10 grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-950 via-neutral-900 to-slate-950 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_16px_40px_rgba(16,185,129,0.12)]"
            >
              <div
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-800/80 font-mono text-sm font-semibold text-emerald-300">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">{service.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-300">{service.body}</p>
            </article>
          ))}
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">Tools I use</p>
          <ul className="grid gap-3 grid-cols-3">
            {toolkit.map((t) => (
              <li key={t} className="flex">
                <TechBadge size="lg" className="w-full justify-center">{t}</TechBadge>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
