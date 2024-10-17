function getCurrentDate() {
  const date = new Date();
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  return `Nous sommes le ${date.toLocaleDateString()}, plus précisément le ${dayOfYear} jour de l'année 2024.`;
}

module.exports = { getCurrentDate };
