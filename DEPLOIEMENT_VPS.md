# Guide de Déploiement sur VPS

Ce guide vous explique comment déployer le site sur un VPS (Virtual Private Server) en évitant les conflits.

## 📋 Prérequis

- Un VPS avec Ubuntu/Debian
- Accès SSH au serveur
- Node.js 18+ installé
- Nginx ou Apache installé
- Un nom de domaine pointant vers votre VPS (optionnel)

## 🚀 Installation Initiale

### 1. Préparer le serveur

```bash
# Mettre à jour le système
sudo apt update && sudo apt upgrade -y

# Installer Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Vérifier l'installation
node -v
npm -v

# Installer Nginx (ou Apache)
sudo apt install -y nginx
```

### 2. Cloner le projet

```bash
# Créer le répertoire de déploiement
sudo mkdir -p /var/www/votre-site
sudo chown -R $USER:$USER /var/www/votre-site

# Cloner le projet
cd /var/www/votre-site
git clone https://github.com/votre-repo/dep.git .

# Installer les dépendances
npm install
```

### 3. Configurer Nginx

```bash
# Copier la configuration
sudo cp .nginx.conf /etc/nginx/sites-available/votre-site

# Éditer la configuration avec votre domaine
sudo nano /etc/nginx/sites-available/votre-site
# Remplacez "votre-domaine.com" par votre vrai domaine
# Remplacez "/var/www/votre-site" par votre chemin si différent

# Activer le site
sudo ln -s /etc/nginx/sites-available/votre-site /etc/nginx/sites-enabled/

# Tester la configuration
sudo nginx -t

# Redémarrer Nginx
sudo systemctl restart nginx
```

### 4. Configurer Apache (alternative)

Si vous utilisez Apache au lieu de Nginx :

```bash
# Copier le fichier .htaccess dans dist après le build
cp .htaccess dist/

# Configurer Apache Virtual Host
sudo nano /etc/apache2/sites-available/votre-site.conf
```

Ajoutez cette configuration :

```apache
<VirtualHost *:80>
    ServerName votre-domaine.com
    ServerAlias www.votre-domaine.com
    DocumentRoot /var/www/votre-site/dist
    
    <Directory /var/www/votre-site/dist>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    ErrorLog ${APACHE_LOG_DIR}/votre-site-error.log
    CustomLog ${APACHE_LOG_DIR}/votre-site-access.log combined
</VirtualHost>
```

```bash
# Activer le site et le module rewrite
sudo a2ensite votre-site.conf
sudo a2enmod rewrite
sudo systemctl restart apache2
```

## 🔄 Déploiement

### Méthode 1 : Script automatique (recommandé)

```bash
# Rendre le script exécutable
chmod +x deploy-vps.sh

# Déployer
./deploy-vps.sh
```

### Méthode 2 : Déploiement manuel

```bash
# Installer les dépendances
npm ci

# Build
npm run build

# Copier vers le répertoire de déploiement
sudo rm -rf /var/www/votre-site/dist
sudo cp -r dist /var/www/votre-site/
sudo chown -R www-data:www-data /var/www/votre-site/dist

# Redémarrer le serveur web
sudo systemctl reload nginx  # ou apache2
```

## 🔒 Configuration SSL (HTTPS)

### Avec Let's Encrypt (gratuit)

```bash
# Installer Certbot
sudo apt install -g certbot python3-certbot-nginx

# Obtenir le certificat SSL
sudo certbot --nginx -d votre-domaine.com -d www.votre-domaine.com

# Le certificat sera renouvelé automatiquement
```

## ⚙️ Configuration PM2 (optionnel)

Si vous voulez utiliser PM2 pour servir l'application :

```bash
# Installer PM2
npm install -g pm2

# Démarrer l'application
pm2 start ecosystem.config.js

# Sauvegarder la configuration
pm2 save

# Configurer le démarrage automatique
pm2 startup
```

## 🔧 Variables d'Environnement

Créez un fichier `.env.production` :

```bash
# .env.production
NODE_ENV=production
VITE_API_URL=https://api.votre-domaine.com
PORT=4173
```

## 🛡️ Sécurité

### Firewall

```bash
# Configurer UFW
sudo ufw allow 22/tcp   # SSH
sudo ufw allow 80/tcp   # HTTP
sudo ufw allow 443/tcp  # HTTPS
sudo ufw enable
```

### Permissions

```bash
# S'assurer que les permissions sont correctes
sudo chown -R www-data:www-data /var/www/votre-site/dist
sudo chmod -R 755 /var/www/votre-site/dist
```

## 🔄 Mises à jour

Pour mettre à jour le site :

```bash
cd /var/www/votre-site

# Récupérer les dernières modifications
git pull origin main

# Rebuild et redéployer
./deploy-vps.sh
```

## 🐛 Dépannage

### Le site ne se charge pas

```bash
# Vérifier les logs Nginx
sudo tail -f /var/log/nginx/votre-site-error.log

# Vérifier les logs Apache
sudo tail -f /var/log/apache2/votre-site-error.log

# Vérifier que Nginx/Apache fonctionne
sudo systemctl status nginx
sudo systemctl status apache2
```

### Les routes ne fonctionnent pas

- Vérifiez que le fichier `.htaccess` est présent dans `dist/` (Apache)
- Vérifiez la configuration Nginx pour les redirects
- Assurez-vous que `try_files` est configuré correctement

### Erreurs de build

```bash
# Nettoyer et rebuilder
npm run clean
npm install
npm run build
```

### Port déjà utilisé

```bash
# Trouver le processus utilisant le port
sudo lsof -i :3000
sudo lsof -i :4173

# Tuer le processus si nécessaire
sudo kill -9 <PID>
```

## 📊 Monitoring

### Logs

```bash
# Logs Nginx
sudo tail -f /var/log/nginx/votre-site-access.log
sudo tail -f /var/log/nginx/votre-site-error.log

# Logs Apache
sudo tail -f /var/log/apache2/votre-site-access.log
sudo tail -f /var/log/apache2/votre-site-error.log
```

### Performance

```bash
# Vérifier l'utilisation des ressources
htop
df -h
free -h
```

## ✅ Checklist de Déploiement

- [ ] Node.js 18+ installé
- [ ] Nginx/Apache configuré
- [ ] Fichiers copiés dans `/var/www/votre-site/dist`
- [ ] Permissions correctes (www-data:www-data)
- [ ] Configuration SSL (HTTPS) activée
- [ ] Firewall configuré
- [ ] Script de déploiement testé
- [ ] Logs vérifiés
- [ ] Site accessible et fonctionnel

## 🆘 Support

En cas de problème :
1. Vérifiez les logs d'erreur
2. Vérifiez les permissions des fichiers
3. Vérifiez la configuration du serveur web
4. Testez le build en local d'abord

