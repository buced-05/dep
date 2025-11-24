# Guide de Déploiement

Ce guide vous explique comment déployer le site de campagne électorale sur différentes plateformes d'hébergement.

## 🌐 Option 1 : Netlify (Recommandé)

### Méthode 1 : Via GitHub (Recommandé)

1. **Créer un compte Netlify**
   - Allez sur [netlify.com](https://www.netlify.com)
   - Créez un compte gratuit

2. **Préparer le dépôt GitHub**
   - Créez un dépôt GitHub pour votre projet
   - Poussez votre code sur GitHub

3. **Connecter à Netlify**
   - Dans Netlify, cliquez sur "Add new site" > "Import an existing project"
   - Connectez votre compte GitHub
   - Sélectionnez votre dépôt

4. **Configurer le build**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Netlify détectera automatiquement ces paramètres grâce au fichier `netlify.toml`

5. **Déployer**
   - Cliquez sur "Deploy site"
   - Attendez la fin du déploiement
   - Votre site sera accessible via une URL Netlify (ex: `votre-site.netlify.app`)

6. **Configurer un nom de domaine personnalisé** (optionnel)
   - Dans les paramètres du site > Domain settings
   - Ajoutez votre domaine personnalisé

### Méthode 2 : Via Netlify CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Déployer
netlify deploy --prod
```

## 🚀 Option 2 : Vercel

### Via GitHub

1. **Créer un compte Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Créez un compte gratuit

2. **Importer le projet**
   - Cliquez sur "Add New Project"
   - Importez depuis GitHub
   - Sélectionnez votre dépôt

3. **Configuration**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Vercel détectera automatiquement grâce au fichier `vercel.json`

4. **Déployer**
   - Cliquez sur "Deploy"
   - Votre site sera accessible via une URL Vercel (ex: `votre-site.vercel.app`)

### Via Vercel CLI

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel --prod
```

## 📦 Option 3 : GitHub Pages

1. **Installer gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Ajouter un script dans package.json**
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. **Configurer la base dans vite.config.js**
```javascript
export default defineConfig({
  base: '/nom-du-depot/',
  // ... reste de la config
})
```

4. **Déployer**
```bash
npm run deploy
```

5. **Activer GitHub Pages**
   - Allez dans Settings > Pages de votre dépôt
   - Sélectionnez la branche `gh-pages`
   - Votre site sera accessible sur `https://votre-username.github.io/nom-du-depot/`

## 🔧 Configuration pour Production

### Variables d'environnement

Si vous avez besoin de variables d'environnement :

1. Créez un fichier `.env.production`
2. Ajoutez vos variables :
```
VITE_API_URL=https://api.example.com
```

3. Utilisez-les dans le code :
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

### Optimisations

Le build Vite optimise automatiquement :
- Minification du code
- Tree-shaking
- Code splitting
- Compression des assets

## 📊 Monitoring et Analytics

### Ajouter Google Analytics (optionnel)

1. Créez un compte Google Analytics
2. Ajoutez le script dans `index.html` :
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔄 Mises à jour

Pour mettre à jour le site après des modifications :

1. **Via GitHub** (automatique)
   - Poussez vos changements sur GitHub
   - Netlify/Vercel redéploiera automatiquement

2. **Via CLI**
   ```bash
   npm run build
   netlify deploy --prod  # ou vercel --prod
   ```

## ⚠️ Notes Importantes

- **Données localStorage** : Les inscriptions sont stockées dans le localStorage du navigateur de chaque visiteur. Pour une vraie base de données, intégrez une API (Firebase, Google Sheets API, etc.)

- **HTTPS** : Toutes les plateformes mentionnées fournissent HTTPS gratuitement

- **Performance** : Vite optimise automatiquement le code pour la production

- **SEO** : Le site est statique et indexable par les moteurs de recherche

## 🆘 Dépannage

### Le site ne se charge pas
- Vérifiez que le build s'est bien terminé
- Vérifiez les logs de déploiement
- Assurez-vous que le répertoire `dist` est bien publié

### Les routes ne fonctionnent pas
- Vérifiez que les fichiers `netlify.toml` ou `vercel.json` sont présents
- Assurez-vous que les redirects sont configurés

### Erreurs de build
- Vérifiez que toutes les dépendances sont installées
- Vérifiez les logs d'erreur détaillés
- Testez en local avec `npm run build`

