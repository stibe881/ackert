# Deployment für Shared Hosting (ackert.ch)

## Übersicht

Da du auf einem Shared Hosting Server bist (kein Root-Zugriff), deployen wir Next.js als **statische Website**.

## Deployment Schritte

### 1. Lokal bauen

```bash
# Im Projektverzeichnis
npm run build
```

Dies erstellt einen `out/` Ordner mit allen statischen HTML/CSS/JS Dateien.

### 2. Dateien auf Server hochladen

**Option A: Mit Git (auf dem Server)**

```bash
# Auf dem Server in ~/public_html
cd ~/public_html
git pull
npm install
npm run build

# Dateien aus dem out/ Ordner nach public_html kopieren
cp -r out/* .
# ODER alle Dateien außer out/ löschen und out/ Inhalt nach oben verschieben
rm -rf !(out|node_modules|.git)
mv out/* .
rmdir out
```

**Option B: Mit FTP/SFTP**

1. Baue lokal: `npm run build`
2. Der `out/` Ordner enthält alle Dateien
3. Lade den Inhalt des `out/` Ordners in dein `public_html` Verzeichnis hoch (nicht den `out/` Ordner selbst!)

**Option C: Mit SCP**

```bash
# Lokal bauen
npm run build

# Dateien hochladen
scp -r out/* erhdey@www654.your-server.de:~/public_html/
```

### 3. .htaccess Datei sicherstellen

Die `.htaccess` Datei sollte bereits im `out/` Ordner sein (wird beim Build aus `public/.htaccess` kopiert).

Falls nicht, erstelle manuell eine `.htaccess` im `public_html` mit folgendem Inhalt:

```apache
RewriteEngine On

# Handle SPA routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Security Headers
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

### 4. Testen

Öffne http://ackert.ch in deinem Browser.

## Automatisiertes Deployment Script

Erstelle auf dem Server eine Datei `~/deploy.sh`:

```bash
#!/bin/bash
# Deployment Script für Shared Hosting

echo "🚀 Starting deployment..."

cd ~/public_html

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull

# Install dependencies if needed
if git diff HEAD@{1} --name-only | grep -q "package.json"; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build
echo "🔨 Building site..."
npm run build

# Clean up public_html (keep important files)
echo "🧹 Cleaning up..."
find . -maxdepth 1 ! -name 'out' ! -name 'node_modules' ! -name '.git' ! -name '.' ! -name '..' -exec rm -rf {} +

# Move built files to root
echo "📦 Moving files..."
mv out/* . 2>/dev/null
mv out/.* . 2>/dev/null
rmdir out

echo "✅ Deployment complete!"
echo "Visit: http://ackert.ch"
```

Ausführbar machen:
```bash
chmod +x ~/deploy.sh
```

Dann bei jedem Update einfach:
```bash
~/deploy.sh
```

## Troubleshooting

### 403 Forbidden Error

1. **Prüfe ob index.html existiert:**
   ```bash
   ls -la ~/public_html/index.html
   ```

2. **Prüfe Dateiberechtigungen:**
   ```bash
   chmod 644 ~/public_html/index.html
   chmod 755 ~/public_html
   ```

3. **Prüfe .htaccess:**
   ```bash
   cat ~/public_html/.htaccess
   ```

### Seite zeigt alten Inhalt

1. **Browser-Cache leeren** (Strg + Shift + R)
2. **Server-Cache leeren** (falls dein Hoster einen hat)
3. **Prüfe ob Build erfolgreich war:**
   ```bash
   ls -la ~/public_html/
   ```

### Bilder werden nicht angezeigt

- Stelle sicher, dass der `images/` Ordner mit hochgeladen wurde
- Prüfe Dateiberechtigungen: `chmod 644 ~/public_html/images/*`

### Links funktionieren nicht (404)

- Prüfe ob `.htaccess` existiert und RewriteEngine aktiviert ist
- Manche Shared Hosting Provider blockieren RewriteRules
- Kontaktiere deinen Hosting-Support falls Rewrite nicht funktioniert

## Wichtige Hinweise für Shared Hosting

1. **Kein PM2 oder Node.js Server** - Die Seite läuft als statische HTML-Dateien
2. **Kein sudo** - Du hast keine Root-Rechte
3. **Apache-Konfiguration** - Nur über `.htaccess` möglich
4. **Node.js nur zum Bauen** - npm und Node.js werden nur zum Build-Prozess verwendet

## Update Workflow

```bash
# 1. Lokal Änderungen machen und committen
git add .
git commit -m "Deine Änderungen"
git push

# 2. Auf Server deployen (eine der Optionen):

# Option A: Mit Deploy-Script
ssh erhdey@www654.your-server.de
~/deploy.sh

# Option B: Manuell
ssh erhdey@www654.your-server.de
cd ~/public_html
git pull
npm run build
cp -r out/* .
```

## Performance Optimierung

- `.htaccess` enthält bereits Caching-Header
- Bilder sind optimiert (durch Next.js Build)
- Gzip-Kompression ist aktiviert
- Statische Dateien werden für 1 Jahr gecacht
