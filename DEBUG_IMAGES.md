# 🔍 Debug des Images

## Problème
L'URL de l'image fonctionne (`http://localhost:3000/images/candidat-portrait.jpg`) mais l'image ne s'affiche pas sur la page.

## ✅ Solutions à Tester

### 1. Vérifier la Console du Navigateur
1. Ouvrez la console (F12)
2. Allez dans l'onglet "Console"
3. Rechargez la page
4. Cherchez les messages :
   - `✅ Image chargée: /images/candidat-portrait.jpg` = L'image se charge
   - `❌ Erreur image: ...` = Il y a une erreur

### 2. Vérifier l'Onglet Network
1. Ouvrez les outils de développement (F12)
2. Allez dans l'onglet "Network"
3. Rechargez la page (F5)
4. Filtrez par "Img"
5. Cliquez sur l'image pour voir :
   - **Status**: Devrait être 200 (OK)
   - **Type**: Devrait être image/jpeg ou image/png
   - **Size**: Devrait afficher la taille du fichier

### 3. Test Direct dans le Code
Ajoutez temporairement ceci dans `src/pages/Home.jsx` pour tester :

```jsx
// Test direct - à ajouter temporairement
<img 
  src="/images/candidat-portrait.jpg" 
  alt="Test"
  style={{ width: 200, height: 200, border: '2px solid red' }}
/>
```

Si cette image s'affiche, le problème vient du composant SafeImage.

### 4. Vérifier les Styles CSS
Dans la console du navigateur :
1. Inspectez l'élément `<img>`
2. Vérifiez si :
   - `display: none` → Le composant cache l'image
   - `opacity: 0` → L'image est invisible
   - `width: 0` ou `height: 0` → L'image n'a pas de taille

### 5. Solution de Contournement Temporaire
Si le problème persiste, utilisez directement `<img>` au lieu de `<SafeImage>` :

```jsx
// Remplacez SafeImage par img directement
<img 
  src="/images/candidat-portrait.jpg"
  alt="Dr YOUAN Bi Tra Jean Claude"
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
/>
```

## 🐛 Problèmes Connus et Solutions

### Problème : Image chargée mais invisible
**Cause**: Le zIndex ou l'opacity cache l'image
**Solution**: Vérifiez que `opacity: 1` et `display: block`

### Problème : Image ne se charge pas
**Cause**: Chemin incorrect ou fichier manquant
**Solution**: Vérifiez que le fichier existe dans `public/images/`

### Problème : Image s'affiche puis disparaît
**Cause**: Le composant SafeImage détecte une erreur
**Solution**: Vérifiez la console pour les erreurs

## 📝 Rapport de Debug

Si le problème persiste, notez :
1. ✅ L'URL fonctionne directement dans le navigateur
2. ❓ L'image apparaît-elle dans l'onglet Network ?
3. ❓ Y a-t-il des erreurs dans la Console ?
4. ❓ Quel est le style CSS appliqué à l'image ?

