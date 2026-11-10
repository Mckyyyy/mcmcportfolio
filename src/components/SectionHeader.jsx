import ArrowLink from './ArrowLink.jsx';

export default function SectionHeader({ number, label, title, link }) {
  return (
    <div className="mb-10 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
          <span className="text-emerald-400">{number}</span> / {label}
        </p>
        <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">{title}</h2>
      </div>
      {link && <ArrowLink href={link.href}>{link.label}</ArrowLink>}
    </div>
  );
}
