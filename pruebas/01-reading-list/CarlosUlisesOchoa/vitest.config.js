import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslint from 'vite-plugin-eslint'
import { resolve } from 'node:path'

export default defineConfig({
  test: {
    global: true,
    environment: 'jsdom',
  },
  plugins: [react(), eslint()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
})
