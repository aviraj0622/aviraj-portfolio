import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: false,   // auto-pick next port if 5173 is busy
    open: true,          // auto-open browser on npm run dev
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
