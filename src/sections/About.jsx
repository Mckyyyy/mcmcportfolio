import { profile, services } from '../data.js';
import SectionHeader from '../components/SectionHeader.jsx';
import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';

export default function About() {
  return (
    <section id="about" className="border-t border-neutral-800">
      <Reveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:py-32">
        <SectionHeader number="05" label="About" title="A little signal. None of the noise." />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img
              src={profile.aboutImage}
              alt="Mc Chielo smiling"
              loading="lazy"
              className="aspect-square w-40 rounded-full border border-neutral-800 object-cover sm:w-48"
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed lg:col-span-8">
            <p className="text-xl text-white sm:text-2xl">
              I'm Mc Chielo Reambonanza — a web developer who loves building creative, user-friendly websites.
            </p>
            <p>
              I'm studying at Northeastern Mindanao Colleges, working with HTML, CSS, JavaScript, Material UI, React,
              PHP and MySQL. If you'd like to work together or just have a question, I'd love to hear from you.
            </p>

            <ul className="grid gap-px overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-800 sm:grid-cols-3">
              {services.map((s) => (
                <li key={s.title} className="bg-slate-950 p-5 transition-colors hover:bg-neutral-900">
                  <h3 className="mb-2 text-base font-semibold text-white">{s.title}</h3>
                  <p className="text-sm leading-relaxed">{s.body}</p>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button href={`mailto:${profile.email}`}>&gt; Let's talk</Button>
              <Button href={profile.resume} variant="ghost" target="_blank" rel="noopener noreferrer">
                View CV
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
