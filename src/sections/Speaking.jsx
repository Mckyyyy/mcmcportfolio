import SectionHeader from '../components/SectionHeader.jsx';
import Reveal from '../components/Reveal.jsx';

const topics = [
  { title: 'Learning web dev from zero', meta: 'Workshop · Campus' },
  { title: 'From Figma mockup to working page', meta: 'Talk · Study group' },
  { title: 'Building your first portfolio', meta: 'Session · Community' },
];

export default function Speaking() {
  return (
    <section id="speaking" className="border-t border-neutral-800">
      <Reveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:py-32">
        <SectionHeader number="04" label="Speaking" title="Practical ideas, shared simply." />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-6 text-lg leading-relaxed lg:col-span-5">
            <p>I share practical lessons on layout, design, and making the web approachable for beginners.</p>
          </div>

          <ul className="lg:col-span-7">
            {topics.map((t, i) => (
              <li
                key={t.title}
                className="group flex flex-col gap-1.5 border-t border-neutral-800 py-5 transition-colors last:border-b hover:border-neutral-600 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-neutral-600 group-hover:text-emerald-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg font-medium text-white">{t.title}</span>
                </span>
                <span className="shrink-0 pl-[1.95rem] font-mono text-xs text-neutral-500 sm:pl-0">{t.meta}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
