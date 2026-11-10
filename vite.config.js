import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { readFileSync } from 'node:fs';

// `import data from './file.pdf?base64'` -> the file's bytes as a base64 string.
// Used for the CV so it's delivered inside a JS chunk rather than as a ".pdf"
// URL, which download managers (e.g. IDM) intercept and force-download.
function base64Import() {
  return {
    name: 'base64-import',
    enforce: 'pre',
    load(id) {
      if (!id.endsWith('?base64')) return null;
      const file = id.slice(0, -'?base64'.length);
      this.addWatchFile(file);
      return `export default ${JSON.stringify(readFileSync(file).toString('base64'))};`;
    },
  };
}

export default defineConfig({
  plugins: [base64Import(), react(), tailwindcss()],
});
