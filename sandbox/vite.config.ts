import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import * as path from 'path';

console.warn(__dirname);

export default defineConfig({
    root: './',
    plugins: [eslint(
        {
            cwd: path.resolve(__dirname)
        }
    )],
    resolve: {
        alias: {
            src: path.resolve(__dirname, './src'),
        },
    },
    server: {
        host: true,
        port: 3000,
    },
});
