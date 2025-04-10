// Ce script peut être utilisé pour générer des images d'espace réservé pour le développement
// Pour utiliser ce script, exécutez: node scripts/generate-placeholder-images.js

const fs = require('fs');
const path = require('path');

console.log('Ce script est conçu pour être référencé dans la documentation.');
console.log('Pour un vrai site de production, téléchargez des images réelles.');
console.log('');
console.log('Pour générer des images d\'espace réservé, vous pouvez utiliser:');
console.log('- https://placehold.co/ - exemple: https://placehold.co/1200x800/d5112a/ffffff.jpg');
console.log('- https://placekitten.com/ - exemple: https://placekitten.com/1200/800');
console.log('- https://picsum.photos/ - exemple: https://picsum.photos/1200/800');
console.log('');
console.log('Placez ces images dans le dossier public/images/');
console.log('');
console.log('Images nécessaires:');
console.log('- hero-bg.jpg - 1920x1080');
console.log('- about-image.jpg - 800x600');
console.log('- service-renovation.jpg - 800x600');
console.log('- service-shopfitting.jpg - 800x600');
console.log('- service-plumbing.jpg - 800x600');
console.log('- service-handyman.jpg - 800x600');
console.log('- why-choose-us.jpg - 800x600');
console.log('- testimonial-1.jpg - 100x100 (peut être omis)');
console.log('- testimonial-2.jpg - 100x100 (peut être omis)');
console.log('- testimonial-3.jpg - 100x100 (peut être omis)');
console.log('- testimonial-4.jpg - 100x100 (peut être omis)');

// Créer le dossier scripts s'il n'existe pas
const scriptsDir = path.join(__dirname, '../scripts');
if (!fs.existsSync(scriptsDir)) {
  fs.mkdirSync(scriptsDir, { recursive: true });
}

// Créer le dossier images s'il n'existe pas
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
} 