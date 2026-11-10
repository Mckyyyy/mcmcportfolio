import { profile, socials, navLinks } from '../data.js';

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-neutral-800">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="mb-3 font-mono text-xs text-neutral-600">// stay curious</p>
          <a href="#intro" className="font-mono text-2xl text-white">
            {profile.logo.replace('_', '')}
            <span className="text-emerald-400">_</span>
          </a>
          <p className="mt-3 text-sm">Build thoughtfully. Share openly.</p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-neutral-600 md:mb-4">Site</p>
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm md:block md:space-y-2">
            {navLinks.map((l) => (
              <li key={l.id} className="flex items-center gap-2 before:text-neutral-700 before:content-['•'] first:before:hidden md:block md:before:hidden">
                <a href={`#${l.id}`} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-neutral-600 md:mb-4">Elsewhere</p>
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm md:block md:space-y-2">
            {socials.map((s) => (
              <li key={s.label} className="flex items-center gap-2 before:text-neutral-700 before:content-['•'] first:before:hidden md:block md:before:hidden">
                <a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-6 font-mono text-xs text-neutral-600 sm:flex-row sm:items-center sm:px-6">
          <p>© {new Date().getFullYear()} Mc Chielo Reambonanza. All rights reserved.</p>
          <button
            type="button"
            onClick={toTop}
            className="group hidden items-center gap-2 rounded-full border border-neutral-800 px-4 py-2 sm:inline-flex text-neutral-400 transition-colors hover:border-emerald-500/50 hover:text-white"
          >
            Back to top
            <span aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5">
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
