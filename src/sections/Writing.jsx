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
          title="Thinking out loud."
          link={{ href: '#writing', label: 'All writing' }}
        />
        <div>
          {articles.map((a, i) => (
            <ArticleCard key={a.title} index={i + 1} article={a} />
          ))}
        </div>
        <p className="mt-8 font-mono text-xs text-neutral-600">// more notes from the workbench, soon.</p>
      </Reveal>
    </section>
  );
}
