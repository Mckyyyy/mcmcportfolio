import { profile } from '../data.js';

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-neutral-800">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-6 sm:flex-row sm:items-center sm:px-6">
        <a href="#intro" className="font-mono text-2xl text-white">
          {profile.logo.replace('_', '')}
          <span className="text-emerald-400">_</span>
        </a>
        <p className="font-mono text-xs text-neutral-600">
          © {new Date().getFullYear()} Mc Chielo Reambonanza. All rights reserved.
        </p>
        <button
          type="button"
          onClick={toTop}
          className="group hidden items-center gap-2 rounded-full border border-neutral-800 px-4 py-2 text-neutral-400 transition-colors hover:border-emerald-500/50 hover:text-white sm:inline-flex"
        >
          Back to top
          <span aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5">
            ↑
          </span>
        </button>
      </div>
    </footer>
  );
}
