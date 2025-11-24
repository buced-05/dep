import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'
import App from './App'
import theme from './theme'
import { initAntiInspection } from './utils/antiInspection'
import { checkAdminAccess } from './utils/security'

// Initialiser les protections anti-inspection
initAntiInspection()

// Protection supplémentaire : surveiller les modifications de localStorage
const originalSetItem = localStorage.setItem.bind(localStorage)
localStorage.setItem = function(key, value) {
  // Si quelqu'un essaie de modifier directement admin_clicks, vérifier l'intégrité
  if (key && (key.includes('admin') || key.includes('clicks'))) {
    // Vérifier que la modification vient d'une source autorisée
    const stack = new Error().stack
    if (stack && !stack.includes('incrementAdminClicks') && !stack.includes('security.js')) {
      // Tentative de modification directe détectée - bloquer
      console.warn('Tentative de modification non autorisée détectée')
      return
    }
  }
  return originalSetItem(key, value)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

