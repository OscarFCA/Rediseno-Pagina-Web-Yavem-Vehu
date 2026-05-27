import { build } from 'esbuild';
import { readFileSync, writeFileSync } from 'fs';

// Wrap each file in IIFE — emula los scope independientes de cada <script type="text/babel">
const files = ['assets/js/components.jsx', 'assets/js/pages.jsx', 'assets/js/app.jsx'];
const source = files.map(f => `;(function(){\n${readFileSync(f, 'utf8')}\n})();`).join('\n');
writeFileSync('assets/js/_bundle.entry.jsx', source);

await build({
  entryPoints: ['assets/js/_bundle.entry.jsx'],
  bundle: false,
  loader: { '.jsx': 'jsx' },
  jsx: 'transform',
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
  minify: true,
  target: ['es2018'],
  outfile: 'assets/js/bundle.min.js',
  legalComments: 'none',
});

console.log('JS bundle built');

// Minificar CSS → styles.min.css
await build({
  entryPoints: ['assets/css/styles.css'],
  bundle: false,
  minify: true,
  outfile: 'assets/css/styles.min.css',
  legalComments: 'none',
});
console.log('CSS minified');
