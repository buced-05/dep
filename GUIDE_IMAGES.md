# 🔧 Guide Complet pour Ajouter les Images

## ⚠️ Problème Actuel

Les images ne sont pas visibles car elles ne sont pas dans le bon dossier ou ont des noms incorrects.

## ✅ Solution Étape par Étape

### Étape 1 : Vérifier où sont vos images

1. Ouvrez l'explorateur de fichiers Windows
2. Naviguez jusqu'au dossier de votre projet : `C:\dep`
3. Cherchez vos images (fichiers .jpg, .png, etc.)

### Étape 2 : Créer le dossier si nécessaire

Le dossier `public/images/` doit exister. S'il n'existe pas :
- Créez-le manuellement dans `C:\dep\public\images\`

### Étape 3 : Copier les images

1. **Copiez** vos images dans le dossier `C:\dep\public\images\`
2. **Renommez-les** exactement comme suit (sensible à la casse) :
   - `candidat-portrait.jpg`
   - `candidat-microphone.jpg`
   - `evenement-communautaire.jpg`
   - `groupe-communautaire.jpg`
   - `trophee-ceremonie.jpg`

### Étape 4 : Vérifier les formats

- Les images doivent être en format **JPG** ou **PNG**
- Si vos images sont en .jpeg, renommez-les en .jpg

### Étape 5 : Redémarrer le serveur

1. Arrêtez le serveur (Ctrl+C dans le terminal)
2. Redémarrez avec `npm run dev`
3. Rechargez la page dans le navigateur (Ctrl+F5 pour vider le cache)

## 🔍 Vérification

Pour vérifier que les images sont bien là, ouvrez PowerShell dans le dossier du projet et tapez :

```powershell
dir public\images\*.jpg
```

Vous devriez voir les 5 fichiers listés.

## 🐛 Si les Images ne s'Affichent Toujours Pas

### Vérification 1 : Console du navigateur
1. Appuyez sur F12 pour ouvrir les outils de développement
2. Allez dans l'onglet "Console"
3. Cherchez les erreurs 404 pour les images
4. Vérifiez le chemin exact dans l'erreur

### Vérification 2 : Onglet Network
1. Dans les outils de développement (F12)
2. Allez dans l'onglet "Network"
3. Rechargez la page (F5)
4. Filtrez par "Img"
5. Vérifiez si les images sont chargées (statut 200) ou en erreur (404)

### Vérification 3 : Chemin des images
Les images doivent être accessibles via :
- `http://localhost:3000/images/candidat-portrait.jpg`
- `http://localhost:3000/images/candidat-microphone.jpg`
- etc.

Testez ces URLs directement dans votre navigateur.

## 💡 Solution Alternative : Utiliser des URLs Externes

Si vous avez les images en ligne, je peux modifier le code pour utiliser des URLs externes au lieu de fichiers locaux.

## 📝 Checklist

- [ ] Le dossier `public/images/` existe
- [ ] Les 5 images sont dans ce dossier
- [ ] Les noms de fichiers sont exactement corrects (minuscules, avec tirets)
- [ ] Les fichiers sont en format .jpg ou .png
- [ ] Le serveur a été redémarré
- [ ] Le cache du navigateur a été vidé (Ctrl+F5)

## 🆘 Besoin d'Aide ?

Si vous avez toujours des problèmes, dites-moi :
1. Où se trouvent actuellement vos images ?
2. Quels sont les noms exacts de vos fichiers images ?
3. Quelles erreurs voyez-vous dans la console du navigateur (F12) ?

