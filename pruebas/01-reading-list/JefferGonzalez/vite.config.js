import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/reading-list',
  test: {
    name: '@testing-library/react',
    environment: 'happy-dom',
    testMatch: ['**/*.test.jsx'],
    exclude: ['**/node_modules/**/*', '**/dist/**/*']
  }
})
