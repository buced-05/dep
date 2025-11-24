// Protection contre l'inspection du code et le contournement

// Détecte si les DevTools sont ouverts
export const detectDevTools = () => {
  let devtools = false
  const element = new Image()
  Object.defineProperty(element, 'id', {
    get: function() {
      devtools = true
      return 'devtools-detector'
    }
  })
  
  const check = () => {
    devtools = false
    console.log(element)
    console.clear()
    return devtools
  }
  
  return check()
}

// Empêche l'inspection via le clic droit (peut être contourné mais dissuade)
export const disableRightClick = () => {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    return false
  })
  
  // Protection contre F12 et autres raccourcis
  document.addEventListener('keydown', (e) => {
    // F12
    if (e.keyCode === 123) {
      e.preventDefault()
      return false
    }
    // Ctrl+Shift+I (DevTools)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
      e.preventDefault()
      return false
    }
    // Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
      e.preventDefault()
      return false
    }
    // Ctrl+U (View Source)
    if (e.ctrlKey && e.keyCode === 85) {
      e.preventDefault()
      return false
    }
    // Ctrl+S (Save Page)
    if (e.ctrlKey && e.keyCode === 83) {
      e.preventDefault()
      return false
    }
  })
}

// Détecte les tentatives de débogage
export const detectDebugging = () => {
  let start = performance.now()
  debugger
  let end = performance.now()
  
  if (end - start > 100) {
    // DevTools probablement ouvert
    return true
  }
  return false
}

// Masque les fonctions sensibles
export const obfuscateFunction = (func, name) => {
  // Renommer la fonction avec un nom aléatoire
  const randomName = Math.random().toString(36).substring(7)
  window[randomName] = func
  return randomName
}

// Vérifie l'intégrité du code
export const checkCodeIntegrity = () => {
  try {
    // Vérifier que certaines fonctions critiques existent toujours
    const criticalFunctions = ['checkAdminAccess', 'incrementAdminClicks']
    for (const funcName of criticalFunctions) {
      if (typeof window[funcName] === 'undefined') {
        return false
      }
    }
    return true
  } catch {
    return false
  }
}

// Protection contre le copier-coller (peut être contourné mais dissuade)
export const disableCopyPaste = () => {
  document.addEventListener('copy', (e) => {
    e.clipboardData.setData('text/plain', '')
    e.preventDefault()
  })
  
  document.addEventListener('cut', (e) => {
    e.clipboardData.setData('text/plain', '')
    e.preventDefault()
  })
  
  document.addEventListener('paste', (e) => {
    e.preventDefault()
  })
  
  // Désactiver la sélection de texte
  document.addEventListener('selectstart', (e) => {
    // Permettre la sélection dans les inputs et textareas
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      return true
    }
    e.preventDefault()
    return false
  })
}

// Initialise toutes les protections
export const initAntiInspection = () => {
  // Désactiver le clic droit et les raccourcis
  disableRightClick()
  
  // Désactiver copier-coller (optionnel, peut être gênant pour l'utilisateur)
  // disableCopyPaste() // Décommenter si nécessaire
  
  // Vérifier périodiquement l'intégrité
  setInterval(() => {
    if (!checkCodeIntegrity()) {
      console.warn('Intégrité du code compromise')
    }
  }, 5000)
}

