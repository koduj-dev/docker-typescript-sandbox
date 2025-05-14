import { fileURLToPath, URL } from 'node:url'

//import { defineConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/unit/**/*.test.{js,ts}'],
    exclude: ['tests/e2e/**/*'],
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['node_modules', 'dist', 'coverage'],
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  }
})
