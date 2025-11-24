# Guide de Démarrage Rapide

## 🚀 Installation et Lancement

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes

1. **Installer les dépendances**
```bash
npm install
```

2. **Lancer le serveur de développement**
```bash
npm run dev
```

3. **Ouvrir dans le navigateur**
Le site sera accessible sur `http://localhost:3000`

## 📋 Fonctionnalités Principales

### ✅ Page d'Accueil
- Présentation du candidat
- Call-to-action pour l'inscription
- Informations sur la circonscription

### ✅ Message du Candidat
- Message complet d'annonce de candidature
- Mise en forme professionnelle

### ✅ Formulaire d'Inscription
- Collecte complète des informations
- Validation en temps réel
- Stockage dans localStorage
- Export CSV disponible

### ✅ Page Engagement
- Détails des trois piliers
- Vision du candidat
- Design moderne et attrayant

## 🔧 Commandes Disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement

# Production
npm run build        # Crée le build de production
npm run preview      # Prévisualise le build de production

# Linting
npm run lint         # Vérifie le code avec ESLint
```

## 📦 Structure des Données

Les inscriptions sont stockées dans le `localStorage` du navigateur avec la clé `inscriptions`.

Format d'une inscription :
```json
{
  "id": "timestamp",
  "date": "ISO date string",
  "nom": "Nom",
  "prenom": "Prénom",
  "telephone": "+225 XX XX XX XX XX",
  "email": "email@example.com",
  "pays": "Côte d'Ivoire",
  "ville": "Ville",
  "localite": "Localité",
  "profession": "Profession (optionnel)",
  "typeEngagement": "Bénévole",
  "recevoirActualites": true,
  "accepterContact": true
}
```

## 📤 Export CSV

Pour exporter les inscriptions :
1. Aller sur la page `/inscription`
2. Cliquer sur "Exporter en CSV" (visible si des inscriptions existent)
3. Le fichier sera téléchargé automatiquement

## 🎨 Personnalisation

### Modifier les couleurs
Éditez `src/theme.js` pour changer les couleurs principales.

### Modifier le contenu
- Message du candidat : `src/pages/Message.jsx`
- Informations de contact : `src/components/Footer.jsx`
- Circonscriptions : `src/pages/Home.jsx`

## 🌐 Déploiement

Voir le fichier `DEPLOIEMENT.md` pour les instructions détaillées.

### Déploiement rapide sur Netlify

1. Créer un compte sur [netlify.com](https://www.netlify.com)
2. Connecter votre dépôt GitHub
3. Netlify détectera automatiquement les paramètres
4. Cliquer sur "Deploy"

## ⚠️ Notes Importantes

- **Données** : Les inscriptions sont stockées localement dans le navigateur. Pour une vraie base de données, intégrez une API (Firebase, Google Sheets API, etc.)

- **RGPD** : Le formulaire inclut un consentement explicite pour l'utilisation des données.

- **Responsive** : Le site est entièrement responsive et fonctionne sur mobile, tablette et desktop.

## 🆘 Problèmes Courants

### Le serveur ne démarre pas
- Vérifiez que Node.js est installé : `node --version`
- Supprimez `node_modules` et réinstallez : `rm -rf node_modules && npm install`

### Les styles ne s'affichent pas
- Vérifiez que toutes les dépendances sont installées
- Redémarrez le serveur de développement

### Le formulaire ne fonctionne pas
- Vérifiez la console du navigateur pour les erreurs
- Assurez-vous que tous les champs requis sont remplis

## 📞 Support

Pour toute question ou problème, consultez le fichier `README.md` ou contactez l'équipe de développement.

