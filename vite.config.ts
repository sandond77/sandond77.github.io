import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Pages serves this repo from a subpath, so assets cannot be rooted at "/".
  base: '/projectPortfolio/',
  plugins: [react(), tailwindcss()],
})
