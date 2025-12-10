#!/bin/bash
# Deployment Script für ackert.ch
# Dieses Script auf dem Server nach /var/www/ackert.ch/deploy.sh kopieren

echo "🚀 Starting deployment..."

# Änderungen vom Repository pullen
echo "📥 Pulling latest changes..."
git pull origin main || git pull origin master

# Dependencies aktualisieren (nur wenn package.json geändert wurde)
if git diff HEAD@{1} --name-only | grep -q "package.json"; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Production Build erstellen
echo "🔨 Building application..."
npm run build

# PM2 neu starten
echo "♻️  Restarting application..."
pm2 restart ackert.ch

echo "✅ Deployment complete!"
echo ""
pm2 status
