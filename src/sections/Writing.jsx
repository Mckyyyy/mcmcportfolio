import { articles } from '../data.js';
import SectionHeader from '../components/SectionHeader.jsx';
import ArticleCard from '../components/ArticleCard.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Writing() {
  return (
    <section id="writing" className="border-t border-neutral-800">
      <Reveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:py-32">
        <SectionHeader
          number="02"
          label="Field notes"
          title="Notes on my projects."
          link={{ href: '#writing', label: 'All writing' }}
        />
        <div>
          {articles.map((a, i) => (
            <ArticleCard key={a.title} index={i + 1} article={a} />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">Let&apos;s Talk</a>
          <a href="/files/MCMCRESUME.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-neutral-400 hover:bg-white/5">View CV</a>
        </div>
      </Reveal>
    </section>
  );
}
