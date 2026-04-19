import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Set base to the GitHub Pages repository name so asset paths work when
  // the site is served from https://<user>.github.io/fruit-website-enes/
  base: '/fruit-website-enes/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    target: 'es2020',
    sourcemap: false,
  },
})
