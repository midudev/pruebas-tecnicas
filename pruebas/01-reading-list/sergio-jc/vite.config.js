import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // '@assets': '/src/assets',
      // '@pages': '/src/pages',
      '@hooks': '/src/hooks',
      // '@services': '/src/services',
      // '@routes': '/src/routes',
      '@context': '/src/context',
      // '@constants': '/src/constants',
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@': '/src'
    }
  },
  test: {
    environment: 'happy-dom'
  }
})
