import { useEffect, useState } from 'react';

/** Floating "back to top" button for phones; appears after scrolling down. */
export default function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/40 bg-slate-950/80 text-emerald-300 shadow-[0_0_24px_rgba(52,211,153,0.25)] backdrop-blur-md transition-all duration-300 active:scale-90 md:hidden ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
    >
      <span aria-hidden="true" className="text-lg">↑</span>
    </button>
  );
}
