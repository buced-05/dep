# Site de Campagne Électorale - Dr YOUAN Bi Tra Jean Claude

Site statique professionnel sous ReactJS pour la campagne électorale du Dr YOUAN Bi Tra Jean Claude, candidat indépendant aux élections législatives de Décembre 2025 (Circonscription n°139).

## 🎯 Objectif

Créer un site "vitrine" attirant, moderne et professionnel pour :
- Présenter la candidature du Dr YOUAN Bi Tra Jean Claude et sa vision
- Permettre aux visiteurs de s'inscrire pour manifester leur soutien
- Rassembler une base de contacts segmentée par pays, ville et localité
- Valoriser l'engagement citoyen autour d'un projet centré sur la jeunesse, la transparence et la justice sociale

## 🚀 Technologies Utilisées

- **React 18** - Framework JavaScript
- **Vite** - Build tool moderne et rapide
- **Material UI (MUI)** - Bibliothèque de composants UI
- **React Router DOM** - Navigation entre les pages
- **React Hook Form** - Gestion des formulaires avec validation
- **LocalStorage** - Stockage des inscriptions (export CSV disponible)

## 📦 Installation

1. **Installer les dépendances :**
```bash
npm install
```

2. **Lancer le serveur de développement :**
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## 🏗️ Build pour Production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

## 📁 Structure du Projet

```
dep/
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── Layout.jsx      # Layout principal avec navigation
│   │   └── Footer.jsx      # Pied de page avec contacts
│   ├── pages/              # Pages de l'application
│   │   ├── Home.jsx        # Page d'accueil (Landing Page)
│   │   ├── Message.jsx    # Message du candidat
│   │   ├── Inscription.jsx # Formulaire d'inscription
│   │   └── Engagement.jsx  # Engagement/Vision/Programme
│   ├── utils/              # Utilitaires
│   │   └── dataStorage.js  # Gestion des données (localStorage + export CSV)
│   ├── App.jsx             # Composant principal avec routing
│   ├── main.jsx            # Point d'entrée React
│   └── theme.js            # Configuration Material UI Theme
├── index.html              # HTML principal
├── package.json            # Dépendances et scripts
├── vite.config.js          # Configuration Vite
└── README.md               # Documentation
```

## 📄 Pages Disponibles

1. **Accueil** (`/`) - Landing page avec présentation du candidat
2. **Message du Candidat** (`/message`) - Message complet d'annonce de candidature
3. **Mon Engagement** (`/engagement`) - Détails des trois piliers et vision
4. **Je m'engage** (`/inscription`) - Formulaire d'inscription pour bénévoles et soutiens

## ✨ Fonctionnalités

### Formulaire d'Inscription
- Collecte des informations : nom, prénom, téléphone, email, pays, ville, localité, profession
- Sélection du type d'engagement (Bénévole, Soutien moral, Relais local, etc.)
- Cases à cocher pour consentement RGPD
- Validation complète des champs
- Stockage dans le localStorage du navigateur
- Export CSV des inscriptions

### Design Responsive
- Adapté pour mobile, tablette et desktop
- Navigation mobile avec menu hamburger
- Design moderne et professionnel avec Material UI

### Accessibilité
- Bon contraste des couleurs
- Navigation au clavier
- Structure sémantique HTML

## 🔒 Sécurité et RGPD

- Consentement explicite pour l'utilisation des données
- Texte informatif sur la finalité des données
- Option d'export CSV pour gestion des données
- Les données sont stockées localement dans le navigateur (localStorage)

## 🌐 Hébergement

Le site peut être hébergé sur :
- **Netlify** (recommandé) - Déploiement automatique depuis GitHub
- **Vercel** - Déploiement rapide avec optimisations
- **GitHub Pages** - Hébergement statique gratuit

### Déploiement sur Netlify

1. Créer un compte sur [Netlify](https://www.netlify.com)
2. Connecter votre dépôt GitHub
3. Configurer le build :
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Déployer !

## 📊 Export des Données

Les inscriptions sont stockées dans le localStorage du navigateur. Pour exporter :
1. Aller sur la page d'inscription
2. Cliquer sur "Exporter en CSV" (visible si des inscriptions existent)
3. Le fichier CSV sera téléchargé avec toutes les données

**Note :** Pour une utilisation en production, il est recommandé d'intégrer une base de données ou une API (Google Sheets, Firebase, etc.)

## 🎨 Personnalisation

### Couleurs
Les couleurs peuvent être modifiées dans `src/theme.js` :
- Primary : Bleu profond (#1a237e)
- Secondary : Rouge (#d32f2f)

### Contenu
- Le message du candidat se trouve dans `src/pages/Message.jsx`
- Les informations de contact dans `src/components/Footer.jsx`
- Les circonscriptions dans `src/pages/Home.jsx`

## 📝 Notice Technique

### Maintenance
- Mettre à jour les dépendances régulièrement : `npm update`
- Vérifier la compatibilité des navigateurs
- Tester le formulaire d'inscription régulièrement

### Extensions Futures Possibles
- Intégration avec Google Sheets API pour synchronisation automatique
- FAQ dynamique
- Blog d'actualités de campagne
- Carte interactive des soutiens
- Annuaire des soutiens (avec modération)

## 📞 Contact

**Dr YOUAN Bi Tra Jean Claude**
- Téléphone : +225 07 08 82 20 07 / +225 07 48 94 28 23
- Email : cyouantra@gmail.com
- WhatsApp : +225 07 08 82 20 07

## 📄 Licence

Ce projet est créé pour la campagne électorale du Dr YOUAN Bi Tra Jean Claude.

---

**Hashtags de campagne :**
#EnsemblePourL'EveildesConsciences #ZUENOULA #Voueboufla #kanzra #zanzra #CotedIvoire

