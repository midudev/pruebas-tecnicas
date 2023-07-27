import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [],
    resolve: {
        alias: [
            { find: '@/domain', replacement: fileURLToPath(new URL('./src/domain/', import.meta.url)) },
            { find: '@/infrastructure', replacement: fileURLToPath(new URL('./src/infrastructure/', import.meta.url)) },
            { find: '@/mocks', replacement: fileURLToPath(new URL('./src/mocks/', import.meta.url)) }
        ]
    }
});
