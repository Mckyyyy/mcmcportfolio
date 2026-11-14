import { articles, profile } from '../data.js';
import SectionHeader from '../components/SectionHeader.jsx';
import ArticleCard from '../components/ArticleCard.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Writing() {
  return (
    <section id="writing" className="border-t border-neutral-800">
      <Reveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:py-32">
        <SectionHeader
          number="04"
          label="Project notes"
          title="Notes on my projects."
        />
        <div>
          {articles.map((a, i) => (
            <ArticleCard key={a.title} index={i + 1} article={a} />
          ))}
        </div>
        <div id="contact" className="mt-12 scroll-mt-24 rounded-3xl border border-neutral-700 bg-neutral-900/70 p-6 sm:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">Have a project in mind?</p>
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">Let&apos;s make it happen.</h3>
              <p className="text-sm leading-relaxed">
                Based in {profile.location} · {profile.timeZone}.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://m.me/besasmcmc12"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ead6d6] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#f5e6e1]"
              >
                Message on Messenger <span aria-hidden="true">↗</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center rounded-full border border-neutral-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-neutral-400 hover:bg-white/5"
              >
                Email me
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-neutral-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-neutral-400 hover:bg-white/5"
              >
                View CV
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
