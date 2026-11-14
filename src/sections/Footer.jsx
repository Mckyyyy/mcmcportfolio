import { profile } from '../data.js';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-6 sm:flex-row sm:items-center sm:px-6">
        <a href="#intro" className="font-mono text-2xl text-white" aria-label="Back to top">
          {profile.logo.replace('_', '')}
          <span className="text-emerald-400">_</span>
        </a>
        <p className="font-mono text-xs text-neutral-500">
          © {new Date().getFullYear()} Mc Chielo Reambonanza.
        </p>
      </div>
    </footer>
  );
}
