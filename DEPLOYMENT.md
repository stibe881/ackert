# Deployment Anleitung für ackert.ch

## Apache Reverse Proxy Setup

Diese Anleitung beschreibt, wie du deine Next.js-Anwendung mit Apache als Reverse Proxy auf deinem Server deployst.

## Voraussetzungen auf dem Server

1. **Node.js und npm installiert** (Version 18 oder höher empfohlen)
2. **Apache2 installiert**
3. **Git installiert**
4. **Erforderliche Apache-Module aktiviert**

## Setup: Erstmaliges Deployment

### Schritt 0: Git Repository auf dem Server klonen

```bash
# SSH-Verbindung zum Server herstellen
ssh dein-user@ackert.ch

# In das Webverzeichnis wechseln
cd /var/www/

# Repository klonen (falls du GitHub/GitLab verwendest)
# Ersetze <GIT_REPO_URL> durch deine Repository-URL
git clone <GIT_REPO_URL> ackert.ch

# ODER: Falls du kein Remote-Repository hast, Dateien hochladen:
# Lokal: scp -r /pfad/zum/projekt/* dein-user@ackert.ch:/var/www/ackert.ch/
```

### Schritt 1: Apache-Module aktivieren

Auf deinem Server folgende Befehle ausführen:

```bash
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod rewrite
sudo systemctl restart apache2
```

## Schritt 2: Next.js-Anwendung auf den Server hochladen

1. Projekt auf den Server kopieren (z.B. nach `/var/www/ackert.ch/`)
2. Abhängigkeiten installieren:

```bash
cd /var/www/ackert.ch
npm install
```

3. Production Build erstellen:

```bash
npm run build
```

## Schritt 3: Apache-Konfiguration einrichten

1. Die Konfigurationsdatei kopieren:

```bash
sudo cp apache-config/ackert.ch.conf /etc/apache2/sites-available/
```

2. Site aktivieren:

```bash
sudo a2ensite ackert.ch.conf
```

3. Apache neu laden:

```bash
sudo systemctl reload apache2
```

## Schritt 4: Next.js als Service einrichten (PM2)

Damit deine Next.js-App dauerhaft läuft, empfiehlt sich PM2:

1. PM2 installieren:

```bash
sudo npm install -g pm2
```

2. Next.js-App starten:

```bash
cd /var/www/ackert.ch
pm2 start npm --name "ackert.ch" -- start
```

3. PM2 beim Systemstart automatisch starten:

```bash
pm2 startup
pm2 save
```

## Schritt 5: Überprüfen

1. Status der Next.js-App prüfen:

```bash
pm2 status
pm2 logs ackert.ch
```

2. Apache-Status prüfen:

```bash
sudo systemctl status apache2
```

3. Website im Browser öffnen: http://ackert.ch

## Optional: SSL/HTTPS mit Let's Encrypt einrichten

1. Certbot installieren:

```bash
sudo apt install certbot python3-certbot-apache
```

2. SSL-Zertifikat erstellen:

```bash
sudo certbot --apache -d ackert.ch -d www.ackert.ch
```

3. Die auskommentierte HTTPS-Konfiguration in `ackert.ch.conf` aktivieren

## Troubleshooting

### 403 Forbidden Error
- Überprüfe, ob die Next.js-App läuft: `pm2 status`
- Überprüfe Apache-Logs: `sudo tail -f /var/log/apache2/ackert.ch-error.log`
- Stelle sicher, dass Port 3000 nicht von außen erreichbar ist (Firewall)

### 502 Bad Gateway
- Next.js-App läuft nicht → `pm2 restart ackert.ch`
- Falscher Port in Apache-Config → Überprüfe ProxyPass-Zeilen

### Änderungen werden nicht angezeigt
- Nach Code-Änderungen neu bauen: `npm run build`
- PM2 neu starten: `pm2 restart ackert.ch`
- Browser-Cache leeren

## Nützliche Befehle

```bash
# Next.js-App neu starten
pm2 restart ackert.ch

# Logs anzeigen
pm2 logs ackert.ch

# Apache neu laden
sudo systemctl reload apache2

# Apache-Config testen
sudo apache2ctl configtest
```

## Dateiberechtigungen

Stelle sicher, dass die Dateien die richtigen Berechtigungen haben:

```bash
sudo chown -R www-data:www-data /var/www/ackert.ch
sudo chmod -R 755 /var/www/ackert.ch
```

## Port-Anpassung (optional)

Falls Port 3000 bereits belegt ist, kannst du einen anderen Port verwenden:

1. In `package.json` das Start-Script anpassen:
```json
"start": "next start -p 3001"
```

2. In der Apache-Konfiguration `localhost:3000` durch `localhost:3001` ersetzen

---

## Updates deployen: Änderungen auf den Server pullen

Wenn du Änderungen am Code gemacht hast und diese auf den Server bringen möchtest:

### Option A: Mit Git (empfohlen)

**1. Lokal committen und pushen:**
```bash
# Auf deinem lokalen Computer
git add .
git commit -m "Deine Änderungen beschreiben"
git push origin main  # oder master, je nach Branch-Name
```

**2. Auf dem Server pullen:**
```bash
# SSH zum Server
ssh dein-user@ackert.ch

# Zum Projekt-Verzeichnis
cd /var/www/ackert.ch

# Änderungen pullen
git pull origin main  # oder master

# Dependencies aktualisieren (falls package.json geändert wurde)
npm install

# Neu bauen
npm run build

# App neu starten
pm2 restart ackert.ch
```

### Option B: Mit SCP (ohne Git)

**Dateien vom lokalen Computer auf den Server kopieren:**
```bash
# Auf deinem lokalen Computer
scp -r /pfad/zum/projekt/* dein-user@ackert.ch:/var/www/ackert.ch/
```

**Dann auf dem Server:**
```bash
# SSH zum Server
ssh dein-user@ackert.ch

cd /var/www/ackert.ch
npm install
npm run build
pm2 restart ackert.ch
```

### Deployment-Script erstellen (optional)

Du kannst dir auch ein Script erstellen, das diese Schritte automatisiert. Erstelle auf dem Server eine Datei `deploy.sh`:

```bash
#!/bin/bash
cd /var/www/ackert.ch
git pull origin main
npm install
npm run build
pm2 restart ackert.ch
echo "Deployment abgeschlossen!"
```

Ausführbar machen und verwenden:
```bash
chmod +x deploy.sh
./deploy.sh
```
