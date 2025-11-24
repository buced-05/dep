#!/bin/bash

# Script de déploiement pour VPS
# Usage: ./deploy-vps.sh

set -e  # Arrêter en cas d'erreur

echo "🚀 Démarrage du déploiement sur VPS..."

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Variables (ajustez selon votre configuration)
DEPLOY_DIR="/var/www/votre-site"
BACKUP_DIR="/var/backups/votre-site"
NODE_VERSION="18"

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js n'est pas installé${NC}"
    exit 1
fi

# Vérifier la version de Node.js
NODE_CURRENT=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_CURRENT" -lt "$NODE_VERSION" ]; then
    echo -e "${YELLOW}⚠️  Node.js version $NODE_CURRENT détectée. Version $NODE_VERSION ou supérieure recommandée.${NC}"
fi

# Créer les répertoires si nécessaire
echo "📁 Création des répertoires..."
sudo mkdir -p $DEPLOY_DIR
sudo mkdir -p $BACKUP_DIR

# Sauvegarder l'ancienne version
if [ -d "$DEPLOY_DIR/dist" ]; then
    echo "💾 Sauvegarde de l'ancienne version..."
    BACKUP_NAME="backup-$(date +%Y%m%d-%H%M%S)"
    sudo cp -r $DEPLOY_DIR/dist $BACKUP_DIR/$BACKUP_NAME
    echo -e "${GREEN}✓ Sauvegarde créée: $BACKUP_DIR/$BACKUP_NAME${NC}"
fi

# Installer les dépendances
echo "📦 Installation des dépendances..."
npm ci --production=false

# Nettoyer les anciens builds
echo "🧹 Nettoyage des anciens builds..."
rm -rf dist

# Build du projet
echo "🔨 Build du projet..."
npm run build

# Vérifier que le build a réussi
if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Le build a échoué. Le répertoire dist n'existe pas.${NC}"
    exit 1
fi

# Copier le fichier .htaccess si Apache est utilisé
if [ -f ".htaccess" ]; then
    echo "📄 Copie du fichier .htaccess..."
    cp .htaccess dist/
fi

# Copier les fichiers vers le répertoire de déploiement
echo "📤 Copie des fichiers vers $DEPLOY_DIR..."
sudo rm -rf $DEPLOY_DIR/dist
sudo cp -r dist $DEPLOY_DIR/
sudo chown -R www-data:www-data $DEPLOY_DIR/dist
sudo chmod -R 755 $DEPLOY_DIR/dist

# Redémarrer Nginx ou Apache
if systemctl is-active --quiet nginx; then
    echo "🔄 Redémarrage de Nginx..."
    sudo systemctl reload nginx
    echo -e "${GREEN}✓ Nginx rechargé${NC}"
elif systemctl is-active --quiet apache2; then
    echo "🔄 Redémarrage d'Apache..."
    sudo systemctl reload apache2
    echo -e "${GREEN}✓ Apache rechargé${NC}"
else
    echo -e "${YELLOW}⚠️  Aucun serveur web détecté. Assurez-vous de configurer Nginx ou Apache.${NC}"
fi

# Nettoyer les anciennes sauvegardes (garder les 5 dernières)
echo "🧹 Nettoyage des anciennes sauvegardes..."
cd $BACKUP_DIR
ls -t | tail -n +6 | xargs -r sudo rm -rf

echo -e "${GREEN}✅ Déploiement terminé avec succès!${NC}"
echo -e "${GREEN}🌐 Votre site devrait être accessible maintenant${NC}"

