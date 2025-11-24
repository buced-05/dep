// Script pour vérifier si les images existent
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images');
const requiredImages = [
  'candidat-portrait.jpg',
  'candidat-microphone.jpg',
  'evenement-communautaire.jpg',
  'groupe-communautaire.jpg',
  'trophee-ceremonie.jpg'
];

console.log('🔍 Vérification des images...\n');
console.log(`Dossier: ${imagesDir}\n`);

if (!fs.existsSync(imagesDir)) {
  console.log('❌ Le dossier public/images/ n\'existe pas !');
  console.log('💡 Créez-le avec: mkdir public\\images');
  process.exit(1);
}

const existingFiles = fs.readdirSync(imagesDir);
console.log(`📁 Fichiers trouvés dans le dossier:\n`);
existingFiles.forEach(file => {
  console.log(`  - ${file}`);
});

console.log(`\n📋 Images requises:\n`);
requiredImages.forEach(image => {
  const exists = existingFiles.includes(image);
  const status = exists ? '✅' : '❌';
  console.log(`  ${status} ${image}`);
});

const missing = requiredImages.filter(img => !existingFiles.includes(img));
if (missing.length > 0) {
  console.log(`\n⚠️  ${missing.length} image(s) manquante(s):\n`);
  missing.forEach(img => console.log(`  - ${img}`));
  console.log('\n💡 Placez ces images dans le dossier public/images/');
} else {
  console.log('\n✅ Toutes les images sont présentes !');
}

