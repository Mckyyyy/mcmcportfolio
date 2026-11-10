export default function ArticleCard({ index, article }) {
  const { tags, title, excerpt, date, readTime, href } = article;
  return (
    <article className="group border-t border-neutral-800 transition-colors last:border-b hover:bg-white/[0.02]">
      <a href={href} className="grid gap-4 py-8 md:grid-cols-12 md:gap-8 md:px-4">
        <span className="font-mono text-sm text-neutral-600 transition-colors group-hover:text-emerald-400 md:col-span-1">
          {String(index).padStart(2, '0')}
        </span>

        <div className="md:col-span-8">
          <div className="mb-3 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span key={tag} className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                #{tag}
              </span>
            ))}
          </div>
          <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-emerald-300 sm:text-2xl">
            {title}
          </h3>
          <p className="max-w-2xl leading-relaxed">{excerpt}</p>
        </div>

        <div className="flex items-start justify-between gap-4 font-mono text-xs text-neutral-500 md:col-span-3 md:flex-col md:items-end">
          <time>{date}</time>
          <span className="flex items-center gap-2">
            {readTime}
            <span
              aria-hidden="true"
              className="text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-white"
            >
              →
            </span>
          </span>
        </div>
      </a>
    </article>
  );
}
