const now = new Date();
const year = now.getFullYear();
const startOfTheYear = new Date(year, 0, 1);
const diff = now - startOfTheYear;
const dayOfYear = Math.ceil(diff / (1000 * 60 * 60 * 24));

console.log(`Nous sommes le ${now.toLocaleDateString()}, plus précisement le ${dayOfYear} jour de l'année.`);
