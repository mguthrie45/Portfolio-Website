# Portfolio Website 2026

Portfolio site for Max Guthrie, built with React and esbuild. Hosted on GitHub Pages.

## Local development

1. Install dependencies: `npm install`
2. Build: `npm run build`
3. Open `index.html` in a browser, or serve the repo root with any static server (e.g. `npx serve .`).

For live reload during edits, run `npm run dev` and refresh after changes.

## Deploy to GitHub Pages

1. Push the repo to GitHub.
2. In the repo: **Settings → Pages**.
3. Source: **Deploy from a branch**.
4. Branch: your main branch (e.g. `main`), folder **/ (root)**.
5. Save. The site will be at `https://<username>.github.io/<repo-name>/`.

If the repo is named `username.github.io`, the site will be at `https://<username>.github.io/`. In that case, ensure `index.html` and the `dist/` folder (with `main.js`) are in the root and that `index.html` references `dist/main.js` (relative path is correct).

## Updating content

- **Introduction / bio**: `src/components/Introduction.jsx`
- **Headshot**: Replace the `HEADSHOT_PLACEHOLDER` URL in `Introduction.jsx` with your image path (e.g. in `public/` or an external URL).
- **Work experience**: `src/components/WorkExperience.jsx` — edit the `EXPERIENCE` array.
- **Projects**: `src/components/Projects.jsx` — edit the `PROJECTS` array.
- **Links**: `src/components/ExternalLinks.jsx` — edit the `LINKS` array.

After editing, run `npm run build` and commit the updated `dist/main.js` (and `index.html` if changed).
