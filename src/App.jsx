import { useCallback, useEffect, useState } from 'react';
import Header from './sections/Header.jsx';
import Hero from './sections/Hero.jsx';
import Approach from './sections/Approach.jsx';
import Writing from './sections/Writing.jsx';
import Projects from './sections/Projects.jsx';
import Speaking from './sections/Speaking.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import PdfViewer from './components/PdfViewer.jsx';
import ScrollTopButton from './components/ScrollTopButton.jsx';
import { profile } from './data.js';

export default function App() {
  const [cvOpen, setCvOpen] = useState(false);
  const closeCv = useCallback(() => setCvOpen(false), []);

  // Keep the CV in the in-page viewer rather than downloading it.
  useEffect(() => {
    const onClick = (e) => {
      if (e.target.closest?.(`a[href="${profile.resume}"]`)) {
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
      <ScrollTopButton />

      <PdfViewer open={cvOpen} onClose={closeCv} src={profile.resume} title="Mc Chielo Reambonanza — CV" />
    </>
  );
}
