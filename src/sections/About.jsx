import { useCallback, useState } from 'react';
import { profile, services, socials } from '../data.js';
import SectionHeader from '../components/SectionHeader.jsx';
import Button from '../components/Button.jsx';
import Modal from '../components/Modal.jsx';
import Reveal from '../components/Reveal.jsx';

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

export default function About() {
  const [connectOpen, setConnectOpen] = useState(false);
  const closeConnect = useCallback(() => setConnectOpen(false), []);

  return (
    <section id="about" className="border-t border-neutral-800">
      <Reveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:py-32">
        <SectionHeader number="05" label="About" title="A bit about me." />

        <div className="grid gap-8 sm:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img
              src={profile.aboutImage}
              alt="Mc Chielo smiling"
              loading="lazy"
              className="aspect-square w-40 rounded-full border border-neutral-800 object-cover sm:w-48"
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed lg:col-span-8">
            <p className="text-xl text-white sm:text-2xl">
              I study at Northeastern Mindanao Colleges and welcome project inquiries.
            </p>

            <ul className="grid gap-px overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-800 sm:grid-cols-3">
              {services.map((s) => (
                <li key={s.title} className="bg-slate-950 p-5 transition-colors hover:bg-neutral-900">
                  <h3 className="mb-2 text-base font-semibold text-white">{s.title}</h3>
                  <p className="text-sm leading-relaxed">{s.body}</p>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button
                onClick={() => setConnectOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={connectOpen}
              >
                &gt; Let's talk
              </Button>
              <Button href={profile.resume} variant="ghost" target="_blank" rel="noopener noreferrer">
                View CV
              </Button>
            </div>
          </div>
        </div>
      </Reveal>

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
    </section>
  );
}
