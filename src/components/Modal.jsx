import { useEffect, useRef } from 'react';

/** Accessible pop-up: closes on Escape, backdrop click, or the button. */
export default function Modal({ open, onClose, title, children }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement;
    closeRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      prevFocus?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="presentation">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md animate-[fadeIn_.2s_ease]" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 p-6 text-left shadow-2xl shadow-emerald-500/10 animate-[popIn_.25s_ease] sm:p-8"
      >
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-emerald-400/[0.07] blur-3xl" />
        <div className="relative">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400">// LET'S TALK</p>
              <h2 id="modal-title" className="text-3xl font-bold tracking-tight text-white">
                {title}
              </h2>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-800 text-neutral-400 transition-colors hover:border-neutral-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
