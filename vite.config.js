import { defineConfig } from 'vite'

export default defineConfig({
  base: '/website', // No subpath required
  build: {
    outDir: 'dist',
  },
})
