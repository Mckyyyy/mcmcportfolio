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

      </Reveal>
    </section>
  );
}
