const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm sm:px-6 active:scale-[0.97] font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';

const variants = {
  primary: 'bg-[#ead6d6] text-slate-950 hover:bg-[#f5e6e1]',
  ghost: 'border border-neutral-700 text-white hover:border-neutral-400 hover:bg-white/5',
};

export default function Button({ href, children, variant = 'primary', ...rest }) {
  const className = `${base} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={className} {...rest}>
      {children}
    </button>
  );
}
