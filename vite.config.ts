import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// BASE_PATH is injected by the GitHub Actions workflow for Project Pages
const base = process.env.BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [react()],
})