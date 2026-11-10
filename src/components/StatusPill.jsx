export default function StatusPill({ children, href = '#about' }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1.5 font-mono text-xs text-neutral-300 transition-colors hover:border-emerald-500/50 hover:text-white"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      {children}
    </a>
  );
}
