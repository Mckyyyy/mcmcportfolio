import { projects } from '../data.js';
import SectionHeader from '../components/SectionHeader.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Projects() {
  return (
    <section id="projects" className="border-t border-neutral-800">
      <Reveal className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <SectionHeader
          number="03"
          label="Currently working on"
          title="Less talk. More commits."
          link={{ href: '#projects', label: 'All projects' }}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} index={i + 1} project={p} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
