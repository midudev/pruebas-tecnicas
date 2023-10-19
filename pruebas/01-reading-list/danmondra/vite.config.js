import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    setupFiles: ['./vitest-setup.js'],
    alias: {
      '@/': new URL('./src/', 'http://localhost:3000').pathname
    },
    css: true
  }
})
