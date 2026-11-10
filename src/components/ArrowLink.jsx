export default function ArrowLink({ href, children, external = false }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group inline-flex items-center gap-2 font-mono text-sm text-neutral-300 transition-colors hover:text-white"
    >
      <span className="border-b border-neutral-700 pb-0.5 transition-colors group-hover:border-emerald-400">
        {children}
      </span>
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}
