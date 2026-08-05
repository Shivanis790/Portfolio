# Shivani Sharma — Portfolio

React + TypeScript + Vite portfolio site.

## Local development

```bash
npm install
npm run dev
```

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. In [Vercel](https://vercel.com/new), import the repo — the **Vite** preset is auto-detected.
3. Use defaults: **Build Command** `npm run build`, **Output Directory** `dist`, no env vars required.
4. Deploy. Static files in `public/` (e.g. resume PDF at `/assets/Shivani-Sharma-Resume.pdf`) are served from the site root.

Or install the [Vercel CLI](https://vercel.com/docs/cli) and run `vercel` from the project root.

---

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
