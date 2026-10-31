import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { redact } from '@tanstack/redact/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), redact()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest-setup.ts'
  }
})
