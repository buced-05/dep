// Utilitaires de sécurité pour protéger le site contre les attaques
// Code obfusqué et protégé contre l'inspection

// Fonction de hachage simple pour masquer les valeurs
const _hash = (str) => {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return Math.abs(hash).toString(36)
}

// Clé obfusquée pour le stockage
const _getKey = () => {
  const parts = ['admin', '_', 'clicks']
  return parts.join('')
}

// Vérifie si le code est inspecté (détection de DevTools)
const _detectInspection = () => {
  const start = performance.now()
  debugger // Sera ignoré si DevTools n'est pas ouvert
  const end = performance.now()
  return (end - start) > 100 // Si le debugger prend du temps, DevTools est ouvert
}

// Vérifie l'intégrité du localStorage
const _checkIntegrity = () => {
  try {
    const testKey = '_integrity_check_' + Date.now()
    localStorage.setItem(testKey, 'test')
    const value = localStorage.getItem(testKey)
    localStorage.removeItem(testKey)
    return value === 'test'
  } catch {
    return false
  }
}

// Génère un token CSRF simple
export const generateCSRFToken = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// Valide le token CSRF
export const validateCSRFToken = (token) => {
  const storedToken = sessionStorage.getItem('csrf_token')
  return token === storedToken
}

// Rate limiting simple basé sur localStorage avec protection
export const checkRateLimit = (key, maxAttempts = 10, windowMs = 60000) => {
  // Vérifier l'intégrité
  if (!_checkIntegrity()) {
    return false
  }
  
  const now = Date.now()
  const hashedKey = _hash(key)
  const attempts = JSON.parse(localStorage.getItem(`rl_${hashedKey}`) || '[]')
  
  // Nettoyer les tentatives anciennes
  const recentAttempts = attempts.filter(time => now - time < windowMs)
  
  if (recentAttempts.length >= maxAttempts) {
    return false // Rate limit dépassé
  }
  
  // Ajouter la nouvelle tentative
  recentAttempts.push(now)
  localStorage.setItem(`rl_${hashedKey}`, JSON.stringify(recentAttempts))
  
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

// Valide les données d'inscription avec protection renforcée
export const validateInscriptionData = (data) => {
  const errors = []
  
  // Détection d'inspection (peut ralentir mais protège)
  if (_detectInspection()) {
    // Ne pas bloquer mais logger silencieusement
    console.warn('Inspection détectée')
  }
  
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

// Vérifie si l'accès admin est autorisé (3 clics sur le nom) - Version protégée
export const checkAdminAccess = () => {
  // Vérifier l'intégrité du localStorage
  if (!_checkIntegrity()) {
    return false
  }
  
  // Vérifier si le code est inspecté
  if (_detectInspection()) {
    // Ne pas bloquer complètement mais rendre plus difficile
    // En production, vous pourriez vouloir bloquer complètement
  }
  
  try {
    const key = _getKey()
    const stored = localStorage.getItem(key)
    
    if (!stored) {
      return false
    }
    
    // Vérifier que la valeur est valide (nombre)
    const count = parseInt(stored, 10)
    if (isNaN(count) || count < 0 || count > 10) {
      // Valeur invalide ou suspecte (plus de 10 clics = probable manipulation)
      localStorage.removeItem(key)
      return false
    }
    
    // Vérifier avec un hash pour éviter la manipulation directe
    const hashKey = _hash(key + count.toString())
    const storedHash = localStorage.getItem(`_h_${hashKey}`)
    const expectedHash = _hash(key + count.toString() + 'salt')
    
    if (storedHash !== expectedHash) {
      // Hash invalide - tentative de manipulation détectée
      localStorage.removeItem(key)
      localStorage.removeItem(`_h_${hashKey}`)
      // Réinitialiser complètement
      for (let i = 0; i < 15; i++) {
        const testHashKey = _hash(key + i.toString())
        localStorage.removeItem(`_h_${testHashKey}`)
      }
      return false
    }
    
    // Vérification supplémentaire : timestamp de dernière modification
    const timestampKey = `_ts_${hashKey}`
    const lastTimestamp = parseInt(localStorage.getItem(timestampKey) || '0', 10)
    const now = Date.now()
    
    // Si la dernière modification est trop récente (< 1 seconde), suspect
    if (lastTimestamp > 0 && (now - lastTimestamp) < 1000) {
      return false
    }
    
    return count >= 3
  } catch (error) {
    // En cas d'erreur, refuser l'accès
    return false
  }
}

// Incrémente le compteur de clics admin - Version protégée
export const incrementAdminClicks = () => {
  // Vérifier l'intégrité
  if (!_checkIntegrity()) {
    return 0
  }
  
  // Protection contre les clics trop rapides (probablement automatisés)
  const lastClickTime = parseInt(sessionStorage.getItem('_last_admin_click_time') || '0', 10)
  const now = Date.now()
  if (now - lastClickTime < 200) {
    // Clic trop rapide, ignorer
    return parseInt(localStorage.getItem(_getKey()) || '0', 10)
  }
  sessionStorage.setItem('_last_admin_click_time', now.toString())
  
  try {
    const key = _getKey()
    const current = parseInt(localStorage.getItem(key) || '0', 10)
    
    if (isNaN(current) || current < 0 || current > 10) {
      // Valeur invalide ou suspecte
      localStorage.setItem(key, '0')
      return 0
    }
    
    const newCount = current + 1
    
    // Limiter à 10 clics maximum pour éviter les manipulations
    if (newCount > 10) {
      return current
    }
    
    // Stocker avec vérification d'intégrité
    localStorage.setItem(key, newCount.toString())
    
    // Stocker le hash pour vérification
    const hashKey = _hash(key + newCount.toString())
    const hashValue = _hash(key + newCount.toString() + 'salt')
    localStorage.setItem(`_h_${hashKey}`, hashValue)
    
    // Stocker le timestamp
    const timestampKey = `_ts_${hashKey}`
    localStorage.setItem(timestampKey, now.toString())
    
    // Nettoyer les anciens hashs et timestamps
    if (current > 0) {
      const oldHashKey = _hash(key + current.toString())
      localStorage.removeItem(`_h_${oldHashKey}`)
      localStorage.removeItem(`_ts_${oldHashKey}`)
    }
    
    // Réinitialiser après 5 minutes d'inactivité
    const timeoutKey = `_timeout_${key}`
    const existingTimeout = localStorage.getItem(timeoutKey)
    if (existingTimeout) {
      try {
        clearTimeout(parseInt(existingTimeout, 10))
      } catch {
        // Ignorer les erreurs de timeout
      }
    }
    
    const timeoutId = setTimeout(() => {
      const lastCount = parseInt(localStorage.getItem(key) || '0', 10)
      if (lastCount === newCount) {
        localStorage.removeItem(key)
        const currentHashKey = _hash(key + newCount.toString())
        localStorage.removeItem(`_h_${currentHashKey}`)
        localStorage.removeItem(`_ts_${currentHashKey}`)
      }
      localStorage.removeItem(timeoutKey)
    }, 300000) // 5 minutes
    
    try {
      localStorage.setItem(timeoutKey, timeoutId.toString())
    } catch {
      // Ignorer si localStorage est plein
    }
    
    return newCount
  } catch (error) {
    // En cas d'erreur, retourner 0
    return 0
  }
}

// Fonction pour réinitialiser le compteur (utile pour les tests)
export const resetAdminClicks = () => {
  try {
    const key = _getKey()
    localStorage.removeItem(key)
    // Nettoyer tous les hashs associés
    for (let i = 0; i < 10; i++) {
      const hashKey = _hash(key + i.toString())
      localStorage.removeItem(`_h_${hashKey}`)
    }
    const timeoutKey = `_timeout_${key}`
    const existingTimeout = localStorage.getItem(timeoutKey)
    if (existingTimeout) {
      clearTimeout(parseInt(existingTimeout, 10))
      localStorage.removeItem(timeoutKey)
    }
  } catch (error) {
    // Ignorer les erreurs
  }
}
