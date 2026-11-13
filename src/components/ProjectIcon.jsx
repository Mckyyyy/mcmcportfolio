function ProjectArtwork({ kind }) {
  switch (kind) {
    case 'documents':
      return (
        <>
          <path d="M7 3h7l5 5v13H7z" />
          <path d="M14 3v5h5M10 12h6M10 16h6" />
          <path className="text-emerald-400" d="M10 19h4" />
        </>
      );
    case 'campus':
      return (
        <>
          <path d="m3 9 9-6 9 6H3ZM5 20h14M7 10v8M12 10v8M17 10v8M4 21h16" />
          <path className="text-emerald-400" d="M10 6h4" />
        </>
      );
    case 'checklist':
      return (
        <>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="m8 9 1.5 1.5L12 8M14 9h2M8 15l1.5 1.5L12 14M14 15h2" />
          <path className="text-emerald-400" d="M8 9l1.5 1.5L12 8M8 15l1.5 1.5L12 14" />
        </>
      );
    case 'raffle':
      return (
        <>
          <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4V7Z" />
          <path d="M9 8v1m0 2v1m0 2v1m0 2v1M13 10l.8 1.6 1.7.2-1.2 1.2.3 1.7-1.6-.8-1.5.8.3-1.7-1.3-1.2 1.8-.2L13 10Z" />
          <path className="text-emerald-400" d="m13 10 .8 1.6 1.7.2-1.2 1.2.3 1.7-1.6-.8-1.5.8.3-1.7-1.3-1.2 1.8-.2L13 10Z" />
        </>
      );
    case 'draw':
      return (
        <>
          <circle cx="12" cy="12" r="8" />
          <path d="m9 12 2 2 4-5M4 12a8 8 0 0 1 2.3-5.7M20 12a8 8 0 0 1-2.3 5.7" />
          <path className="text-emerald-400" d="M4 12a8 8 0 0 1 2.3-5.7M20 12a8 8 0 0 1-2.3 5.7" />
        </>
      );
    case 'archive':
      return (
        <>
          <path d="M4 5h10a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H9l-4 3v-3.5A3 3 0 0 1 2 12V8a3 3 0 0 1 2-3Z" />
          <path d="M13 16h5l4 3v-3.5a3 3 0 0 0 1-2.5v-2a3 3 0 0 0-3-3h-1" />
          <path className="text-emerald-400" d="M7 9h5M7 12h3" />
        </>
      );
    default:
      return null;
  }
}

export default function ProjectIcon({ kind, featured = false }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
        featured ? 'border-emerald-500/30 bg-emerald-500/10' : 'border-neutral-800 bg-neutral-900'
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-5 w-5 ${featured ? 'stroke-emerald-300' : 'stroke-neutral-400'}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ProjectArtwork kind={kind} />
      </svg>
    </span>
  );
}
