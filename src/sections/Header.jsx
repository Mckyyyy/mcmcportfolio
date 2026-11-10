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

  const linkClass = (id) =>
    `relative font-mono text-sm transition-colors ${
      active === id ? 'text-white' : 'text-neutral-500 hover:text-neutral-200'
    }`;

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
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-800 text-neutral-300 transition-colors hover:border-neutral-600 hover:text-white md:hidden"
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

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-neutral-800 px-4 pb-6 pt-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ id, label }, i) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setOpen(false)} className={linkClass(id)}>
                  <span className="mr-3 text-neutral-600">{String(i + 1).padStart(2, '0')}</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 sm:hidden">
            <StatusPill>{profile.status}</StatusPill>
          </div>
        </nav>
      )}
    </header>
  );
}
