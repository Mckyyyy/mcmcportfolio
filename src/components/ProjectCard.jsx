import TechBadge from './TechBadge.jsx';

const statusStyles = {
  'Currently working': 'border-amber-500/30 bg-amber-500/10 text-amber-300',
  Live: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
};

export default function ProjectCard({ index, project }) {
  const { name, tagline, description, tags, status, href } = project;
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-600 hover:bg-neutral-900/80 sm:p-8">
      <div className="mb-10 flex items-center justify-between gap-4">
        <span className="font-mono text-xs text-neutral-500">
          {String(index).padStart(2, '0')} / {status === 'Live' ? 'LIVE' : 'WIP'}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] ${
            statusStyles[status] ?? statusStyles['Currently working']
          }`}
        >
          {status === 'Currently working' && (
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-300" aria-hidden="true" />
          )}
          {status}
        </span>
      </div>

      <p className="mb-2 font-mono text-xs text-neutral-500">{tagline}</p>
      <h3 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {/* the ::after overlay makes the whole card clickable */}
        <a href={href} className="after:absolute after:inset-0 focus:outline-none">
          {name}
          <span className="text-emerald-400 group-hover:cursor-blink">_</span>
        </a>
      </h3>
      <p className="mb-8 leading-relaxed">{description}</p>

      <div className="mt-auto flex items-end justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TechBadge key={tag} size="sm">
              {tag}
            </TechBadge>
          ))}
        </div>
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-800 text-neutral-400 transition-all group-hover:-rotate-45 group-hover:border-emerald-400 group-hover:text-emerald-300"
        >
          →
        </span>
      </div>
    </article>
  );
}
