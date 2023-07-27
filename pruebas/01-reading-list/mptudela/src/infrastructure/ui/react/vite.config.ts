import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@/components', replacement: fileURLToPath(new URL('./src/components/', import.meta.url)) },
            { find: '@/assets', replacement: fileURLToPath(new URL('./src/assets/', import.meta.url)) },
            { find: '@/hooks', replacement: fileURLToPath(new URL('./src/hooks/', import.meta.url)) },
            { find: '@/store', replacement: fileURLToPath(new URL('./src/store/', import.meta.url)) },
            { find: '@/context', replacement: fileURLToPath(new URL('./src/context/', import.meta.url)) },
            { find: '@/pages', replacement: fileURLToPath(new URL('./src/pages/', import.meta.url)) },
            { find: '@/routes', replacement: fileURLToPath(new URL('./src/routes/', import.meta.url)) },
            { find: '@/layouts', replacement: fileURLToPath(new URL('./src/layouts/', import.meta.url)) },
            { find: '@/domain', replacement: fileURLToPath(new URL('../../../domain/', import.meta.url)) },
            { find: '@/infrastructure', replacement: fileURLToPath(new URL('../../../infrastructure/', import.meta.url)) },
            { find: '@/mocks', replacement: fileURLToPath(new URL('../../../mocks/', import.meta.url)) }
        ]
    }
});
