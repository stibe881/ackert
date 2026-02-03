#!/bin/bash
# Deployment Script für ackert.ch
# Dieses Script auf dem Server nach /var/www/ackert.ch/deploy.sh kopieren

echo "🚀 Starting deployment..."

# Änderungen vom Repository pullen
echo "📥 Pulling latest changes..."
git pull origin main || git pull origin master

# Dependencies aktualisieren
echo "📦 Checking dependencies..."
npm install

# Production Build erstellen
echo "🔨 Building application..."
npm run build

# Dateien in den Root verschieben (notwendig für public_html)
if [ -d "dist/public" ]; then
    echo "📦 Moving build files to current directory..."
    cp -r dist/public/* .
fi

# PM2 neu starten oder starten
echo "♻️  Restarting application..."
pm2 restart ackert.ch || pm2 start npm --name "ackert.ch" -- start

echo "✅ Deployment complete!"
echo ""
pm2 status
