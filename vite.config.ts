import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Repo name as base path, required for GitHub Pages project sites
// (https://<user>.github.io/ludovica-laurea/). Change if the repo is renamed.
export default defineConfig({
  base: '/ludovica-laurea/',
  plugins: [react(), tailwindcss()],
})
