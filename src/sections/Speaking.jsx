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
        <SectionHeader number="04" label="Beyond the keyboard" title="From the terminal to the room." />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-6 text-lg leading-relaxed lg:col-span-5">
            <p>
              I like talking about the things I wrestle with in real projects — layout, design decisions, and making
              the web approachable for people just starting out.
            </p>
            <p>No magic frameworks. Just useful ideas, honest trade-offs, and a conversation worth having.</p>
          </div>

          <ul className="lg:col-span-7">
            {topics.map((t, i) => (
              <li
                key={t.title}
                className="group flex items-baseline justify-between gap-6 border-t border-neutral-800 py-5 transition-colors last:border-b hover:border-neutral-600"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-neutral-600 group-hover:text-emerald-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg font-medium text-white">{t.title}</span>
                </span>
                <span className="shrink-0 font-mono text-xs text-neutral-500">{t.meta}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
