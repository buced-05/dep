// Utilitaires de sécurité pour protéger le site contre les attaques

// Génère un token CSRF simple
export const generateCSRFToken = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// Valide le token CSRF
export const validateCSRFToken = (token) => {
  const storedToken = sessionStorage.getItem('csrf_token')
  return token === storedToken
}

// Rate limiting simple basé sur localStorage
export const checkRateLimit = (key, maxAttempts = 10, windowMs = 60000) => {
  const now = Date.now()
  const attempts = JSON.parse(localStorage.getItem(`rate_limit_${key}`) || '[]')
  
  // Nettoyer les tentatives anciennes
  const recentAttempts = attempts.filter(time => now - time < windowMs)
  
  if (recentAttempts.length >= maxAttempts) {
    return false // Rate limit dépassé
  }
  
  // Ajouter la nouvelle tentative
  recentAttempts.push(now)
  localStorage.setItem(`rate_limit_${key}`, JSON.stringify(recentAttempts))
  
  return true // Autoriser
}

// Sanitize les entrées utilisateur
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input
  
  return input
    .replace(/[<>]/g, '') // Supprimer les balises HTML
    .replace(/javascript:/gi, '') // Supprimer javascript:
    .replace(/on\w+=/gi, '') // Supprimer les event handlers
    .trim()
}

// Valide les données d'inscription
export const validateInscriptionData = (data) => {
  const errors = []
  
  // Validation des champs requis
  if (!data.nom || data.nom.length < 2) {
    errors.push('Le nom doit contenir au moins 2 caractères')
  }
  
  if (!data.prenom || data.prenom.length < 2) {
    errors.push('Le prénom doit contenir au moins 2 caractères')
  }
  
  // Validation email
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push('Format d\'email invalide')
  }
  
  // Validation téléphone
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/
  if (!data.telephone || !phoneRegex.test(data.telephone)) {
    errors.push('Format de téléphone invalide')
  }
  
  // Protection contre les injections
  const dangerousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /eval\(/i,
    /expression\(/i,
  ]
  
  Object.values(data).forEach(value => {
    if (typeof value === 'string') {
      dangerousPatterns.forEach(pattern => {
        if (pattern.test(value)) {
          errors.push('Contenu suspect détecté')
        }
      })
    }
  })
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

// Vérifie si l'accès admin est autorisé (3 clics sur le nom)
export const checkAdminAccess = () => {
  const clickCount = parseInt(localStorage.getItem('admin_clicks') || '0', 10)
  return clickCount >= 3
}

// Incrémente le compteur de clics admin
export const incrementAdminClicks = () => {
  const current = parseInt(localStorage.getItem('admin_clicks') || '0', 10)
  const newCount = current + 1
  localStorage.setItem('admin_clicks', newCount.toString())
  
  // Réinitialiser après 5 minutes d'inactivité
  setTimeout(() => {
    const lastClick = parseInt(localStorage.getItem('admin_clicks') || '0', 10)
    if (lastClick === newCount) {
      localStorage.setItem('admin_clicks', '0')
    }
  }, 300000) // 5 minutes
  
  return newCount
}

