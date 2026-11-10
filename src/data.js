// ------------------------------------------------------------
// All site content lives here. Edit this file to update the page.
// Items marked "TODO" are starter placeholders — swap in your own.
// ------------------------------------------------------------

export const profile = {
  firstName: 'MC CHIELO',
  lastName: 'REAMBONANZA.',
  logo: 'mc_',
  role: 'Web developer & lifelong learner',
  tags: ['Frontend', 'Backend', 'Design'],
  bio: "I build clean, responsive websites that people actually enjoy using. I'm currently studying at Northeastern Mindanao Colleges and sharpening my craft one project at a time.",
  email: 'besasmcmc@gmail.com',
  resume: '/files/MCMCRESUME.pdf',
  heroImage: '/images/mcmc.png',
  aboutImage: '/images/mcmc3.png',
  status: 'Open for opportunities',
};

export const navLinks = [
  { id: 'intro', label: 'Intro' },
  { id: 'writing', label: 'Writing' },
  { id: 'projects', label: 'Projects' },
  { id: 'speaking', label: 'Speaking' },
  { id: 'about', label: 'About' },
];

export const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/besasmcmc12' },
  { label: 'Instagram', href: 'https://www.instagram.com/mckyyyyyyy_/' },
  { label: 'Email', href: 'mailto:besasmcmc@gmail.com' },
  // TODO: add your GitHub / LinkedIn, e.g.
  // { label: 'GitHub', href: 'https://github.com/your-username' },
];

export const currentlyInto = ['React & Tailwind', 'PHP & MySQL', 'UI design'];

export const toolkit = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Material UI',
  'Tailwind CSS',
  'PHP',
  'MySQL',
  'Git',
  'Figma',
];

// TODO: replace with your real articles / notes.
export const articles = [
  {
    tags: ['CSS', 'Layout'],
    title: 'Responsive layouts without the headache',
    excerpt:
      'Flexbox for one direction, Grid for two. A practical way to stop fighting your layout and start designing for every screen size.',
    date: 'Oct 28, 2026',
    readTime: '5 min read',
    href: '#',
  },
  {
    tags: ['React', 'Learning'],
    title: 'What moving from HTML to React taught me',
    excerpt:
      'Components, props, and state finally clicked when I rebuilt an old project. Notes on thinking in reusable pieces.',
    date: 'Oct 09, 2026',
    readTime: '7 min read',
    href: '#',
  },
  {
    tags: ['PHP', 'Backend'],
    title: 'Sending email from a contact form, safely',
    excerpt:
      'Validating input, keeping credentials out of your code, and why environment variables matter even on small projects.',
    date: 'Sep 15, 2026',
    readTime: '6 min read',
    href: '#',
  },
];

// TODO: replace with your real projects and links.
export const projects = [
  {
    name: 'portfolio',
    tagline: 'Built in the open.',
    description:
      'This site. A single-page portfolio built with React and Tailwind CSS — dark, minimal, and fully responsive.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    status: 'Live',
    href: '#',
  },
  {
    name: 'mailbox',
    tagline: 'Messages, delivered.',
    description:
      'A PHP contact-form handler using PHPMailer and SMTP, with server-side validation and friendly error states.',
    tags: ['PHP', 'PHPMailer'],
    status: 'Currently working',
    href: '#',
  },
  {
    name: 'inventory',
    tagline: 'Know what you have.',
    description:
      'A simple inventory dashboard for small shops — add, track, and search stock backed by a MySQL database.',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    status: 'Currently working',
    href: '#',
  },
  {
    name: 'studio',
    tagline: 'Design meets code.',
    description:
      'A collection of UI experiments and graphic design pieces, translated from Figma mockups into working components.',
    tags: ['Figma', 'CSS', 'Material UI'],
    status: 'Currently working',
    href: '#',
  },
];

export const services = [
  {
    title: 'Web Development',
    body: 'Modern, responsive websites tailored to your goals — fast, accessible, and easy to maintain.',
  },
  {
    title: 'Graphic Design',
    body: 'Visuals that communicate your brand clearly, from social graphics to full page layouts.',
  },
  {
    title: 'Full-stack Builds',
    body: 'Dynamic web apps with PHP, React, JavaScript and MySQL — from database to interface.',
  },
];
