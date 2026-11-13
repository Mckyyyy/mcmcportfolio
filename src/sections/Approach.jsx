import { toolkit, profile } from '../data.js';
import SectionHeader from '../components/SectionHeader.jsx';
import TechBadge from '../components/TechBadge.jsx';
import ArrowLink from '../components/ArrowLink.jsx';
import Reveal from '../components/Reveal.jsx';

function CodeBlock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
      <div className="flex items-center gap-2 border-b border-neutral-800 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
        <span className="ml-3 font-mono text-[11px] text-neutral-600">approach.js</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-sm leading-7">
        <code>
          <span className="text-neutral-600">// the short version</span>
          {'\n'}
          <span className="text-sky-300">while</span> <span className="text-neutral-300">(</span>
          <span className="text-amber-200">curious</span>
          <span className="text-neutral-300">) {'{'}</span>
          {'\n  '}
          <span className="text-emerald-300">learn</span>
          <span className="text-neutral-300">();</span>
          {'\n  '}
          <span className="text-emerald-300">build</span>
          <span className="text-neutral-300">();</span>
          {'\n  '}
          <span className="text-emerald-300">share</span>
          <span className="text-neutral-300">();</span>
          {'\n'}
          <span className="text-neutral-300">{'}'}</span>
          <span className="cursor-blink text-emerald-400">▍</span>
        </code>
      </pre>
    </div>
  );
}

export default function Approach() {
  return (
    <section id="approach" className="border-t border-neutral-800">
      <Reveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:py-32">
        <SectionHeader number="01" label="How I work" title="Build. Learn. Share." />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-6 text-lg leading-relaxed lg:col-span-6">
            <p>
              I focus on clear layouts, fast pages, and interfaces that make sense. Building and sharing projects is how I learn.
            </p>
            <div className="flex flex-wrap gap-6 pt-2">
              <ArrowLink href="#about">About me</ArrowLink>
              <ArrowLink href={profile.resume} external>
                View my CV
              </ArrowLink>
            </div>
          </div>
          <div className="lg:col-span-6">
            <CodeBlock />
          </div>
        </div>

        <div className="mt-16 border-t border-neutral-800 pt-10">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">Tools I use</p>
          <ul className="flex flex-wrap gap-2.5">
            {toolkit.map((t) => (
              <li key={t}>
                <TechBadge>{t}</TechBadge>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
