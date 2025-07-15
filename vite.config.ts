import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  base: '/untitled-emotions-ar/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'webxr-polyfill': 'webxr-polyfill'
    }
  }
})
