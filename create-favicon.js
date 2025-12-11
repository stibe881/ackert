const fs = require('fs');
const path = require('path');

// For now, just copy the logo as favicon
// You can use an online tool or imagemagick later for proper favicon creation

const logoPath = path.join(__dirname, 'client', 'public', 'images', 'logo.png');
const faviconPath = path.join(__dirname, 'client', 'public', 'favicon.png');

fs.copyFileSync(logoPath, faviconPath);

console.log('Favicon created (copied from logo)');
console.log('Note: For proper multi-size favicon.ico, use an online converter or imagemagick');
