import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Relative base + HashRouter = works on any GitHub Pages repo name and survives refreshes.
export default defineConfig({ base: './', plugins: [react(), tailwindcss()] })
