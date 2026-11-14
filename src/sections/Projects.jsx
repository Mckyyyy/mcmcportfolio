import { projects } from '../data.js';
import SectionHeader from '../components/SectionHeader.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Projects() {
  return (
    <section id="projects" className="border-t border-neutral-800">
      <Reveal className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 md:py-20">
        <SectionHeader
          number="03"
          label="Selected work"
          title="Projects built through experience."
        />
        <p className="mb-8 max-w-2xl leading-relaxed">
          A mix of academic, training, workplace, and personal projects—each built around a practical need.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index + 1} />
          ))}
        </div>

        <aside className="mt-8 flex flex-col gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <h3 className="font-semibold text-white">Looking for graphic design work?</h3>
            <p className="mt-1 text-sm leading-relaxed">Ask me about poster, social media, and tarpaulin design samples.</p>
          </div>
          <a
            href="https://m.me/besasmcmc12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-emerald-400/40 px-4 py-2.5 text-sm font-semibold text-emerald-200 transition-colors hover:border-emerald-300 hover:bg-emerald-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            Request samples <span aria-hidden="true">↗</span>
          </a>
        </aside>
      </Reveal>
    </section>
  );
}
