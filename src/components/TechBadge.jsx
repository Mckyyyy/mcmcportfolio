import TechIcon from './TechIcon.jsx';

const sizes = {
  sm: 'px-2.5 py-1 text-[11px]',
  md: 'px-3.5 py-1.5 text-xs',
  lg: 'px-4 py-2 text-sm',
};

export default function TechBadge({ children, size = 'md', className = '' }) {
  const labels = String(children).split(/\s*&\s*/);

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 font-mono text-neutral-300 transition-colors hover:border-neutral-600 hover:text-white ${sizes[size]} ${className}`}
    >
      {labels.map((label) => (
        <TechIcon key={label} name={label} />
      ))}
      {children}
    </span>
  );
}
