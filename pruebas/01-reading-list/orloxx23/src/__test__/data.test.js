// Importar el archivo books.json desde la carpeta utils/constants
const books = require("../utils/constants/books.json");

// Descripción de la suite de pruebas "Libros"
describe("Libros", () => {
  // Prueba para verificar si se obtienen los libros correctamente
  test("Libros obtenidos", () => {
    // Verificar que la variable "books" no sea nula
    expect(books).not.toBeNull();
    // Verificar que la variable "books" esté definida
    expect(books).toBeDefined();
    // Verificar que la longitud de la biblioteca de libros sea mayor que 0
    expect(books.library.length).toBeGreaterThan(0);
  });
});

// Importar la función getCategories desde el archivo categories.js en la carpeta utils/functions
const getCategories = require("../utils/functions/categories");

// Descripción de la suite de pruebas "Categorías"
describe("Categorías", () => {
  // Prueba para verificar si se obtienen las categorías correctamente
  test("Categorías obtenidas", () => {
    // Llamar a la función getCategories y almacenar el resultado en la variable "result"
    const result = getCategories();
    // Verificar que el resultado no sea nulo
    expect(result).not.toBeNull();
    // Verificar que el resultado esté definido
    expect(result).toBeDefined();
    // Verificar que la longitud del resultado sea mayor que 0
    expect(result.length).toBeGreaterThan(0);
  });
});
