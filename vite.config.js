import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: 'all',
    host: true,
    port: 3000
  }
})
