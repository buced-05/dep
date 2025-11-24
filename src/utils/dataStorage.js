// Utilitaire pour gérer le stockage des inscriptions
// Les données sont stockées dans le localStorage du navigateur
// et peuvent être exportées en CSV

export const saveInscription = (data) => {
  try {
    const existingData = getInscriptions()
    const newInscription = {
      ...data,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    }
    existingData.push(newInscription)
    localStorage.setItem('inscriptions', JSON.stringify(existingData))
    return true
  } catch (error) {
    console.error('Erreur lors de la sauvegarde:', error)
    return false
  }
}

export const getInscriptions = () => {
  try {
    const data = localStorage.getItem('inscriptions')
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error)
    return []
  }
}

export const exportToCSV = () => {
  const inscriptions = getInscriptions()
  if (inscriptions.length === 0) {
    return null
  }

  // En-têtes CSV
  const headers = [
    'ID',
    'Date',
    'Nom',
    'Prénom',
    'Téléphone',
    'Email',
    'Pays',
    'Ville',
    'Localité',
    'Profession',
    'Type d\'engagement',
    'Recevoir actualités',
    'Accepter contact',
  ]

  // Conversion des données
  const rows = inscriptions.map((inscription) => [
    inscription.id || '',
    inscription.date || '',
    inscription.nom || '',
    inscription.prenom || '',
    inscription.telephone || '',
    inscription.email || '',
    inscription.pays || '',
    inscription.ville || '',
    inscription.localite || '',
    inscription.profession || '',
    inscription.typeEngagement || '',
    inscription.recevoirActualites ? 'Oui' : 'Non',
    inscription.accepterContact ? 'Oui' : 'Non',
  ])

  // Création du contenu CSV
  const csvContent = [
    headers.join(','),
    ...rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')),
  ].join('\n')

  // Encodage UTF-8 avec BOM pour Excel
  const BOM = '\uFEFF'
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `inscriptions_${new Date().toISOString().split('T')[0]}.csv`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)

  return true
}

export const getStats = () => {
  const inscriptions = getInscriptions()
  const stats = {
    total: inscriptions.length,
    parPays: {},
    parVille: {},
    parTypeEngagement: {},
  }

  inscriptions.forEach((inscription) => {
    // Stats par pays
    const pays = inscription.pays || 'Non spécifié'
    stats.parPays[pays] = (stats.parPays[pays] || 0) + 1

    // Stats par ville
    const ville = inscription.ville || 'Non spécifiée'
    stats.parVille[ville] = (stats.parVille[ville] || 0) + 1

    // Stats par type d'engagement
    const type = inscription.typeEngagement || 'Non spécifié'
    stats.parTypeEngagement[type] = (stats.parTypeEngagement[type] || 0) + 1
  })

  return stats
}

