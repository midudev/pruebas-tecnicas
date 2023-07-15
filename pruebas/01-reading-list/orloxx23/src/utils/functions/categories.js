const books = require("../constants/books.json");

/**
 * Función getCategories
 * @returns {Array} - Array de categorías de libros.
 */
const getCategories = () => {
  const categoriasSet = new Set();

  // Recorre los libros de la biblioteca y agrega las categorías únicas al conjunto de categorías.
  books.library.forEach((item) => {
    if (item.book.genre) {
      categoriasSet.add(item.book.genre);
    }
  });

  // Convierte el conjunto de categorías en un array y lo devuelve.
  const categories = Array.from(categoriasSet);
  return categories;
};

module.exports = getCategories;
