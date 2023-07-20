/// <reference types="vitest"/>

import { configDefaults, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: { // config de vitest
    globals: true,
    environment: 'happy-dom',
    exclude: [...configDefaults.exclude, './src/e2e/*'],
  }
})
