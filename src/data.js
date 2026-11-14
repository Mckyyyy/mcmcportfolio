// ------------------------------------------------------------
// All site content lives here. Edit this file to update the page.
// Items marked "TODO" are starter placeholders — swap in your own.
// ------------------------------------------------------------

export const profile = {
  firstName: 'Mc Chielo',
  lastName: 'Reambonanza',
  logo: 'mc_',
  role: 'Graphic Designer & Web Developer',
  bio: 'I build responsive websites and web apps with clear, user-friendly interfaces. I also edit posters, create design materials, and craft visuals that make brands and content stand out.',
  email: 'besasmcmc@gmail.com',
  resume: '/files/MCMCRESUME.pdf',
  heroImage: '/images/mcmc.png',
  aboutImage: '/images/mcmc3.png',
  status: 'Open for opportunities',
};

export const navLinks = [
  { id: 'intro', label: 'Intro' },
  { id: 'approach', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Notes' },
];

export const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/besasmcmc12' },
  { label: 'Instagram', href: 'https://www.instagram.com/mckyyyyyyy_/' },
  { label: 'Email', href: 'mailto:besasmcmc@gmail.com' },
  // TODO: add your GitHub / LinkedIn, e.g.
  // { label: 'GitHub', href: 'https://github.com/your-username' },
];

export const currentlyInto = ['Web Development', 'Graphic Design', 'Poster Design', 'Social Media Design'];

export const highlights = [
  'Responsive websites',
  'User-friendly interfaces',
  'Poster editing',
  'Social media creatives',
  'Tarpaulin design',
];

export const toolkit = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'PHP',
  'MySQL',
  'Git',
  'Figma',
  'Canva',
  'Photoshop',
];

// TODO: replace with your real articles / notes.
export const articles = [
  {
    tags: ['CSS', 'Layout'],
    title: 'Responsive layouts without the headache',
    excerpt: 'Use Flexbox for one-dimensional layouts and Grid for two. Start mobile-first, then adapt to larger screens.',
    date: 'Oct 28, 2026',
    readTime: '5 min read',
    href: '#',
  },
  {
    tags: ['React', 'Learning'],
    title: 'What moving from HTML to React taught me',
    excerpt: 'Rebuilding an old project made components, props, and state click—and showed me how to think in reusable pieces.',
    date: 'Oct 09, 2026',
    readTime: '7 min read',
    href: '#',
  },
  {
    tags: ['PHP', 'Backend'],
    title: 'Sending email from a contact form, safely',
    excerpt: 'Validate input and keep credentials out of source code—even for small projects.',
    date: 'Sep 15, 2026',
    readTime: '6 min read',
    href: '#',
  },
];

export const projects = [
  {
    name: 'NEMCO Online Documents Request System',
    category: 'Undergraduate thesis',
    description:
      'Fourth-year thesis project to streamline academic document requests through the NEMCO registrar.',
    tags: ['PHP', 'MySQL'],
    repository: 'https://github.com/Mckyyyy/ODRS-NEMCO',
    icon: 'documents',
    featured: true,
  },
  {
    name: 'SNSU Integrated Campus Management System',
    category: 'Collaborative thesis · Local client',
    description:
      'A campus concern-management system developed for a local client with two teammates.',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    repository: 'https://github.com/Mckyyyy/snsu-icms',
    icon: 'campus',
  },
  {
    name: 'Personal To-Do List Web Application',
    category: 'On-the-job training',
    description:
      'Built during OJT to track assigned tasks and see which responsibilities were complete or pending.',
    tags: ['React', 'Vite'],
    repository: 'https://github.com/Mckyyyy/todo-app',
    icon: 'checklist',
  },
  {
    name: 'PHP Raffle Draw System',
    category: 'Workplace system',
    description:
      'Created for workplace raffle activities to simplify participant management and winner selection.',
    tags: ['PHP', 'MySQL'],
    repository: 'https://github.com/Mckyyyy/Raffle-Draw-PHP-WAMPSERVER',
    icon: 'raffle',
  },
  {
    name: 'Modern Raffle Draw System',
    category: 'Workplace · Full-stack',
    description:
      'A modern full-stack rebuild of my earlier raffle application, with a React frontend and Express backend.',
    tags: ['React', 'Express.js', 'Node.js', 'MySQL'],
    repository: 'https://github.com/Mckyyyy/Raffle-Draw-System',
    icon: 'draw',
    featured: true,
  },
  {
    name: 'Messenger Chat Archiver',
    category: 'Personal · Chrome extension',
    description:
      'A private extension that automates archiving Messenger conversations and avoids repetitive manual work.',
    tags: [],
    icon: 'archive',
    private: true,
  },
];

export const services = [
  {
    title: 'Web Developer',
    body: 'Build responsive, functional websites and web apps for modern digital needs.',
  },
  {
    title: 'Graphics Design',
    body: 'Create clear, polished visuals that support brands, content, and communication.',
  },
  {
    title: 'Poster Design',
    body: 'Design promotional posters and announcements with strong visual focus and impact.',
  },
  {
    title: 'Social Media Design',
    body: 'Create engaging post creatives, banners, and campaign graphics for online platforms.',
  },
  {
    title: 'Tarpaulin Designer',
    body: 'Craft large-format prints and signage with clean layouts and readable messaging.',
  },
];
