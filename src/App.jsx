import { useCallback, useEffect, useState } from 'react';
import Header from './sections/Header.jsx';
import Hero from './sections/Hero.jsx';
import Approach from './sections/Approach.jsx';
import Writing from './sections/Writing.jsx';
import Projects from './sections/Projects.jsx';
import Speaking from './sections/Speaking.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Modal from './components/Modal.jsx';
import PdfViewer from './components/PdfViewer.jsx';
import { profile } from './data.js';

export default function App() {
  const [projectsModal, setProjectsModal] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const closeModal = useCallback(() => setProjectsModal(false), []);
  const closeCv = useCallback(() => setCvOpen(false), []);

  // Intercept clicks site-wide:
  //  - links to "#projects" open the "Currently working" pop-up
  //  - links to the CV open the in-page viewer (never a download)
  useEffect(() => {
    const onClick = (e) => {
      if (e.target.closest?.('a[href="#projects"]')) {
        e.preventDefault();
        setProjectsModal(true);
      } else if (e.target.closest?.(`a[href="${profile.resume}"]`)) {
        e.preventDefault();
        setCvOpen(true);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Approach />
        <Writing />
        <Projects />
        <Speaking />
        <About />
      </main>
      <Footer />

      <Modal open={projectsModal} onClose={closeModal} title="Currently working">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10">
          <span className="h-3 w-3 animate-pulse rounded-full bg-amber-300" />
        </div>
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-amber-300">// projects</p>
      </Modal>

      <PdfViewer open={cvOpen} onClose={closeCv} src={profile.resume} title="Mc Chielo Reambonanza — CV" />
    </>
  );
}
