import { useEffect, useRef, useState } from 'react';

/**
 * Full-screen, view-only PDF viewer.
 * Pages are drawn onto <canvas> with PDF.js, so the file is always shown
 * on the page — even if the visitor's browser is set to download PDFs.
 */
export default function PdfViewer({ open, src, title, onClose }) {
  const pagesRef = useRef(null);
  const closeRef = useRef(null);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  // Escape to close, lock background scroll, focus the close button
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

  // Render every page of the PDF
  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    let doc;
    setStatus('loading');

    (async () => {
      try {
        // Loaded only when the viewer opens, to keep the main page light
        const pdfjs = await import('pdfjs-dist');
        const { default: workerUrl } = await import('pdfjs-dist/build/pdf.worker.min.mjs?url');
        pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

        // The CV is bundled into a JS chunk (base64) instead of fetched as a ".pdf" URL,
        // so download managers like IDM can't intercept it and force a download.
        const { default: base64 } = await import('../assets/MCMCRESUME.pdf?base64');
        const data = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
        doc = await pdfjs.getDocument({ data }).promise;
        const container = pagesRef.current;
        if (cancelled || !container) return;
        container.innerHTML = '';

        const width = Math.min(container.clientWidth, 900);
        const dpr = window.devicePixelRatio || 1;

        for (let n = 1; n <= doc.numPages; n++) {
          const page = await doc.getPage(n);
          if (cancelled) return;
          const base = page.getViewport({ scale: 1 });
          const viewport = page.getViewport({ scale: (width / base.width) * dpr });

          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          canvas.style.width = `${width}px`;
          canvas.style.maxWidth = '100%';
          canvas.className = 'mx-auto mb-4 block rounded-lg bg-white shadow-xl';
          canvas.setAttribute('aria-label', `${title} — page ${n} of ${doc.numPages}`);
          canvas.addEventListener('contextmenu', (e) => e.preventDefault());
          container.appendChild(canvas);

          await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
          if (n === 1 && !cancelled) setStatus('ready');
        }
      } catch (err) {
        console.error('PDF viewer:', err?.name, err?.message);
        if (!cancelled) setStatus('error');
      }
    })();

    return () => {
      cancelled = true;
      doc?.destroy();
    };
  }, [open, src, title]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[100] flex flex-col bg-slate-950/90 backdrop-blur-sm animate-[fadeIn_.2s_ease]"
    >
      <div className="flex items-center justify-between gap-4 border-b border-neutral-800 bg-slate-950/80 px-4 py-3 sm:px-6">
        <p className="font-mono text-sm text-white">
          <span className="text-emerald-400">//</span> {title}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 text-neutral-300 transition-colors hover:border-neutral-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          ✕
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-6 sm:px-6" onClick={(e) => e.target === e.currentTarget && onClose()}>
        {status === 'loading' && (
          <p className="py-20 text-center font-mono text-sm text-neutral-500">Loading CV…</p>
        )}
        {status === 'error' && (
          <p className="py-20 text-center font-mono text-sm text-red-300">Sorry, the CV couldn't be loaded.</p>
        )}
        <div ref={pagesRef} className="mx-auto w-full max-w-[900px] select-none" />
      </div>
    </div>
  );
}
