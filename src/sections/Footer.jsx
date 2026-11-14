import { useCallback, useState } from 'react';
import { profile, socials } from '../data.js';
import Button from '../components/Button.jsx';
import Modal from '../components/Modal.jsx';

function ContactIcon({ label }) {
  if (label === 'Facebook') {
    return (
      <path d="M13.4 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.3V10H7.5v3h2.7v8h3.2Z" fill="currentColor" />
    );
  }

  if (label === 'Instagram') {
    return (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.8" r="1" fill="currentColor" />
      </>
    );
  }

  return (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4.5 7 7.5 5.5L19.5 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

export default function Footer() {
  const [connectOpen, setConnectOpen] = useState(false);
  const closeConnect = useCallback(() => setConnectOpen(false), []);
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <footer className="border-t border-neutral-800">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-4 py-6 sm:flex-row sm:items-center sm:px-6">
          <div className="flex items-center gap-3">
            <a href="#intro" className="font-mono text-2xl text-white">
              {profile.logo.replace('_', '')}
              <span className="text-emerald-400">_</span>
            </a>
            <p className="font-mono text-xs text-neutral-600">© {new Date().getFullYear()} Mc Chielo Reambonanza.</p>
          </div>
        </div>
      </footer>

      <Modal open={connectOpen} onClose={closeConnect} title="Connect">
        <p className="mb-5 text-sm text-neutral-400">Choose the best way to reach me.</p>
        <ul className="space-y-2.5">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-3 transition-all hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-neutral-800 bg-slate-950 text-emerald-300 transition-colors group-hover:border-emerald-500/30">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                    <ContactIcon label={social.label} />
                  </svg>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-medium text-white">{social.label}</span>
                  <span className="block text-xs text-neutral-500">
                    {social.label === 'Email' ? 'Send me an email' : 'Open my profile'}
                  </span>
                </span>
                <span aria-hidden="true" className="text-neutral-500 transition-all group-hover:translate-x-0.5 group-hover:text-emerald-300">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Modal>
    </>
  );
}
