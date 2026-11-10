import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data.js';
import StatusPill from '../components/StatusPill.jsx';
import useActiveSection from '../hooks/useActiveSection.js';

const ids = navLinks.map((l) => l.id);

export default function Header() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-slate-950/80 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-slate-950"
      >
        Skip to content
      </a>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <a href="#intro" className="font-mono text-lg font-medium text-white" aria-label="Back to top">
          {profile.logo.replace('_', '')}
          <span className="text-emerald-400 cursor-blink">_</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          {/* Rounded "pill" menu: each link is a circle-ended button inside a rounded bar */}
          <ul className="flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900/60 p-1">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className={`block rounded-full px-4 py-1.5 font-mono text-sm transition-all duration-300 ${
                    active === id
                      ? 'bg-emerald-400/15 text-white ring-1 ring-emerald-400/60'
                      : 'text-neutral-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <StatusPill>{profile.status}</StatusPill>
          </div>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 text-neutral-300 transition-colors hover:border-neutral-600 hover:text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`}
              />
              <span className={`absolute left-0 top-1.5 h-px w-4 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span
                className={`absolute left-0 top-3 h-px w-4 bg-current transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu: slides open smoothly with large, thumb-friendly links */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <nav id="mobile-nav" aria-label="Mobile" inert={open ? undefined : ''} className="overflow-hidden">
          <ul className="flex flex-col gap-1 border-t border-neutral-800 px-4 pb-4 pt-4">
            {navLinks.map(({ id, label }, i) => (
              <li
                key={id}
                style={{ transitionDelay: open ? `${60 + i * 45}ms` : '0ms' }}
                className={`transition-all duration-300 ${open ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'}`}
              >
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === id ? 'true' : undefined}
                  className={`flex items-center rounded-xl px-4 py-3 font-mono text-base transition-colors active:bg-white/10 ${
                    active === id
                      ? 'bg-emerald-400/10 text-white ring-1 ring-emerald-400/40'
                      : 'text-neutral-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="mr-4 text-xs text-emerald-400/70">{String(i + 1).padStart(2, '0')}</span>
                  {label}
                  <span aria-hidden="true" className="ml-auto text-neutral-600">→</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-6 sm:hidden">
            <StatusPill>{profile.status}</StatusPill>
          </div>
        </nav>
      </div>
    </header>
  );
}
