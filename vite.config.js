import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    // Servir les fichiers statiques correctement
    middlewareMode: false,
  },
  // S'assurer que les fichiers publics sont servis correctement
  publicDir: 'public',
})

