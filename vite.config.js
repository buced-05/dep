import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,
    host: true, // Écouter sur toutes les interfaces pour VPS
    open: false, // Ne pas ouvrir automatiquement en production
    strictPort: false, // Permettre d'utiliser un autre port si 3000 est occupé
    // Servir les fichiers statiques correctement
    middlewareMode: false,
  },
  // S'assurer que les fichiers publics sont servis correctement
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Désactiver les sourcemaps en production pour éviter les conflits
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Supprimer les console.log en production
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  preview: {
    port: process.env.PORT || 4173,
    host: true,
    strictPort: false,
  },
})

