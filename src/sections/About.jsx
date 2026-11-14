import { profile } from '../data.js';
import SectionHeader from '../components/SectionHeader.jsx';
import Reveal from '../components/Reveal.jsx';

export default function About() {
  return (
    <section id="about" className="border-t border-neutral-800">
      <Reveal className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 md:py-20">
        <SectionHeader number="02" label="About" title="A bit about me." />

        <div className="grid gap-8 sm:gap-12 lg:grid-cols-12">
          <div className="flex items-center justify-center lg:col-span-4">
            <img
              src={profile.aboutImage}
              alt="Mc Chielo smiling"
              loading="lazy"
              className="aspect-square w-40 rounded-full border border-neutral-800 bg-transparent object-contain p-1 sm:w-48"
            />
          </div>

          <div className="lg:col-span-8">
            <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-neutral-300 sm:text-xl">
              <p className="text-justify">
                I’m an Information Technology student at Northeastern Mindanao Colleges, passionate about web development and graphic design. I build practical websites, web apps, and visual materials with a focus on clear communication and easy-to-use experiences.
              </p>
              <p className="text-justify">
                Based in {profile.location} ({profile.timeZone}), I’m open to local projects and remote collaborations worldwide. I keep learning through hands-on work and enjoy staying active at the gym.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
