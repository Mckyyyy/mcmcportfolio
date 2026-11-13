import TechIcon from './TechIcon.jsx';

const sizes = {
  sm: 'px-2.5 py-1 text-[11px]',
  md: 'px-3.5 py-1.5 text-xs',
};

export default function TechBadge({ children, size = 'md' }) {
  const labels = String(children).split(/\s*&\s*/);

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 font-mono text-neutral-300 transition-colors hover:border-neutral-600 hover:text-white ${sizes[size]}`}
    >
      {labels.map((label) => (
        <TechIcon key={label} name={label} />
      ))}
      {children}
    </span>
  );
}
