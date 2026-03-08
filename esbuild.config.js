import * as esbuild from 'esbuild';
import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const watch = process.argv.includes('--watch');

const outDir = 'dist';
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const ctx = await esbuild.context({
  entryPoints: ['src/main.jsx'],
  bundle: true,
  outfile: `${outDir}/main.js`,
  format: 'iife',
  platform: 'browser',
  loader: { '.jsx': 'jsx' },
  minify: !watch,
  sourcemap: watch,
  define: { 'process.env.NODE_ENV': watch ? '"development"' : '"production"' },
});

if (watch) {
  await ctx.watch();
  console.log('Watching for changes...');
} else {
  await ctx.rebuild();
  console.log('Build complete.');
}
ctx.dispose();
