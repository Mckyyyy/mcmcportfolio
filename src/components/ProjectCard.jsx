import TechBadge from './TechBadge.jsx';
import ProjectIcon from './ProjectIcon.jsx';

export default function ProjectCard({ project, index }) {
  const { name, category, description, tags, repository, icon, featured, private: isPrivate } = project;

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-neutral-900/40 transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-900/80 ${
        featured
          ? 'border-emerald-500/30 hover:border-emerald-400/60'
          : 'border-neutral-800 hover:border-neutral-600'
      }`}
    >
      <div
        aria-hidden="true"
        className="relative flex aspect-[16/8] items-center justify-center overflow-hidden border-b border-neutral-800 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),transparent_65%),linear-gradient(135deg,#393244,#1b1924)]"
      >
        <span className="absolute right-4 top-3 font-mono text-xs text-neutral-500">{String(index).padStart(2, '0')}</span>
        <ProjectIcon kind={icon} featured={featured} size="lg" />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          {featured && (
            <span className="rounded-full border border-emerald-500/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-300">
              Featured
            </span>
          )}
        </div>

        <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-neutral-500">{category}</p>
        <h3 className="mb-3 text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl">{name}</h3>
        <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-neutral-500">Project focus</p>
        <p className="mb-5 text-sm leading-relaxed">{description}</p>

        {tags.length > 0 && (
          <ul className="mb-5 flex flex-wrap gap-2" aria-label="Verified technology stack">
            {tags.map((tag) => (
              <li key={tag}>
                <TechBadge size="sm">{tag}</TechBadge>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto border-t border-neutral-800 pt-4">
          {isPrivate ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-3 py-1.5 font-mono text-xs text-neutral-300">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-neutral-500" />
              Private Project
            </span>
          ) : (
            <a
              href={repository}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-3.5 py-2 font-mono text-xs text-neutral-200 transition-colors hover:border-emerald-400/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label={`View ${name} project on GitHub (opens in a new tab)`}
            >
              View source code
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
