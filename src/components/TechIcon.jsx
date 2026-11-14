const iconStyles = {
  html5: { color: '#e34f26', shape: 'shield', label: '5' },
  css3: { color: '#1572b6', shape: 'shield', label: '3' },
  javascript: { color: '#f7df1e', shape: 'square', label: 'JS' },
  react: { color: '#61dafb', shape: 'atom' },
  'material ui': { color: '#007fff', shape: 'letter', label: 'M' },
  tailwind: { color: '#38bdf8', shape: 'waves' },
  php: { color: '#777bb4', shape: 'oval', label: 'PHP' },
  mysql: { color: '#00758f', shape: 'database', label: 'SQL' },
  'express.js': { color: '#d4d4d8', shape: 'monogram', label: 'EX' },
  'node.js': { color: '#68a063', shape: 'hex', label: 'JS' },
  git: { color: '#f05032', shape: 'git' },
  figma: { color: '#f24e1e', shape: 'figma' },
  canva: { color: '#00c4cc', shape: 'text', label: 'C' },
  photoshop: { color: '#31a8ff', shape: 'text', label: 'Ps' },
  vite: { color: '#bd34fe', shape: 'bolt' },
  phpmailer: { color: '#9aa9ff', shape: 'mail' },
  'ui design': { color: '#f472b6', shape: 'design' },
};

const aliases = {
  css: 'css3',
  'tailwind css': 'tailwind',
  express: 'express.js',
  node: 'node.js',
};

function IconShape({ shape, label }) {
  switch (shape) {
    case 'shield':
      return (
        <>
          <path d="M3 2h18l-1.7 18L12 22l-7.3-2L3 2Z" fill="currentColor" />
          <text x="12" y="16" fill="#0f172a" fontSize="9" fontWeight="800" textAnchor="middle">{label}</text>
        </>
      );
    case 'square':
      return (
        <>
          <path d="M3 3h18v18H3z" fill="currentColor" />
          <text x="12" y="16" fill="#0f172a" fontSize="9" fontWeight="800" textAnchor="middle">{label}</text>
        </>
      );
    case 'hex':
      return (
        <>
          <path d="m12 2 9 5v10l-9 5-9-5V7l9-5Z" fill="currentColor" />
          <text x="12" y="15" fill="#0f172a" fontSize="7" fontWeight="800" textAnchor="middle">{label}</text>
        </>
      );
    case 'atom':
      return (
        <>
          <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.7" fill="currentColor" />
        </>
      );
    case 'letter':
      return <path d="M4 20V4h3.5l4.5 7 4.5-7H20v16h-3V9l-5 7-5-7v11H4Z" fill="currentColor" />;
    case 'text':
      return <text x="12" y="16" fill="currentColor" fontSize="9.5" fontWeight="800" textAnchor="middle">{label}</text>;
    case 'monogram':
      return <text x="12" y="16" fill="currentColor" fontSize="10" fontWeight="800" textAnchor="middle">{label}</text>;
    case 'waves':
      return (
        <>
          <path d="M3 9c4.5-5 9.5-5 14 0 1.3 1.4 2.7 1.4 4 0" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M3 15c4.5-5 9.5-5 14 0 1.3 1.4 2.7 1.4 4 0" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </>
      );
    case 'oval':
      return (
        <>
          <ellipse cx="12" cy="12" rx="11" ry="7" fill="currentColor" />
          <text x="12" y="14.5" fill="#0f172a" fontSize="6" fontWeight="800" textAnchor="middle">{label}</text>
        </>
      );
    case 'database':
      return (
        <>
          <ellipse cx="12" cy="5" rx="8" ry="3" fill="currentColor" />
          <path d="M4 5v13c0 1.7 3.6 3 8 3s8-1.3 8-3V5c0 1.7-3.6 3-8 3S4 6.7 4 5Zm0 6c0 1.7 3.6 3 8 3s8-1.3 8-3" fill="none" stroke="currentColor" strokeWidth="1.7" />
        </>
      );
    case 'git':
      return (
        <>
          <path d="m12 2 10 10-10 10L2 12 12 2Z" fill="currentColor" />
          <path d="M9 8v8m0-4h5m0 0v4" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="9" cy="7" r="1.2" fill="#fff" />
          <circle cx="9" cy="17" r="1.2" fill="#fff" />
          <circle cx="15" cy="12" r="1.2" fill="#fff" />
          <circle cx="15" cy="17" r="1.2" fill="#fff" />
        </>
      );
    case 'figma':
      return (
        <>
          <path d="M8 2h4v6H8a3 3 0 1 1 0-6Z" fill="#f24e1e" />
          <path d="M12 2h4a3 3 0 1 1 0 6h-4V2Z" fill="#ff7262" />
          <path d="M8 8h4v6H8a3 3 0 1 1 0-6Z" fill="#a259ff" />
          <circle cx="15" cy="11" r="3" fill="#1abcfe" />
          <path d="M8 14h4v3a3 3 0 1 1-4-2.8V14Z" fill="#0acf83" />
        </>
      );
    case 'bolt':
      return <path d="M13.5 2 5 13h5l-.5 9L19 10h-5l-.5-8Z" fill="currentColor" />;
    case 'mail':
      return (
        <>
          <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </>
      );
    case 'design':
      return (
        <>
          <path d="m14 4 6 6-10.5 10.5H3.5v-6L14 4Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="m12 6 6 6" stroke="currentColor" strokeWidth="1.8" />
        </>
      );
    case 'canva':
      return (
        <>
          <rect x="2.5" y="2.5" width="19" height="19" rx="6" fill="currentColor" />
          <path d="M15.2 7.8c-1.7-1.6-4.5-1.6-6.2 0-.8.7-1.3 1.8-1.3 2.9 0 1.1.4 2.1 1.2 2.9.8.7 1.8 1.1 3 1.1h.7v2.3h-2.3v1.7h4.1v-4.4c1.4-.4 2.5-1.5 2.5-3.1 0-1.1-.5-2.1-1.3-2.9Z" fill="#fff" opacity="0.98" />
        </>
      );
    case 'photoshop':
      return (
        <>
          <path d="M12 2.2 20 6.5v11.1l-8 4.2-8-4.2V6.5l8-4.3Z" fill="currentColor" />
          <path d="M10.2 8.2h2.5c2.2 0 3.8 1.2 3.8 3.1 0 1.9-1.6 3.2-3.8 3.2h-1.1v2.2H10.2V8.2Zm2.5 4.5c1.1 0 1.8-.6 1.8-1.6 0-1-.7-1.6-1.8-1.6h-.8v3.2h.8Z" fill="#fff" />
          <path d="M16.3 8.2h1.8v8.7h-1.8z" fill="#fff" />
        </>
      );
    default:
      return <text x="12" y="16" fill="currentColor" fontSize="10" fontWeight="700" textAnchor="middle">{label}</text>;
  }
}

export default function TechIcon({ name }) {
  const key = name.toLowerCase().trim();
  const icon = iconStyles[aliases[key] ?? key];

  if (!icon) return null;

  return (
    <svg aria-hidden="true" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" style={{ color: icon.color }}>
      <IconShape shape={icon.shape} label={icon.label} />
    </svg>
  );
}
