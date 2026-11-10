import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves project sites from /<repo>/. Keep local dev at root.
  base: process.env.GITHUB_ACTIONS === 'true' ? '/shucom/' : '/',
  plugins: [react()],
})
