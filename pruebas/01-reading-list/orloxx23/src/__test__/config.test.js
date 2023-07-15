// Importar la configuración de la página desde el archivo pageConfig.js en la carpeta utils/constants
const pageConfig = require("../utils/constants/pageConfig");

// Descripción de la suite de pruebas "Configuración de la página"
describe("Configuración de la página", () => {
  // Prueba para verificar si se obtiene la configuración correctamente
  test("Configuración obtenida", () => {
    // Verificar que la configuración no sea nula
    expect(pageConfig).not.toBeNull();
    // Verificar que la configuración esté definida
    expect(pageConfig).toBeDefined();
  });

  // Prueba para verificar si la configuración es correcta
  test("Configuración correcta", () => {
    // Verificar que el título de la página no esté vacío
    expect(pageConfig.title).not.toBe("");
    // Verificar que el título de la página no sea nulo
    expect(pageConfig.title).not.toBeNull();
    // Verificar que el título de la página esté definido
    expect(pageConfig.title).toBeDefined();

    // Verificar que la descripción de la página no esté vacía
    expect(pageConfig.description).not.toBe("");
    // Verificar que la descripción de la página no sea nula
    expect(pageConfig.description).not.toBeNull();
    // Verificar que la descripción de la página esté definida
    expect(pageConfig.description).toBeDefined();

    // Verificar que el color del tema no esté vacío
    expect(pageConfig.themeColor).not.toBe("");
    // Verificar que el color del tema no sea nulo
    expect(pageConfig.themeColor).not.toBeNull();
    // Verificar que el color del tema esté definido
    expect(pageConfig.themeColor).toBeDefined();

    // Verificar que el autor de la página no esté vacío
    expect(pageConfig.author).not.toBe("");
    // Verificar que el autor de la página no sea nulo
    expect(pageConfig.author).not.toBeNull();
    // Verificar que el autor de la página esté definido
    expect(pageConfig.author).toBeDefined();

    // Verificar que el enlace del autor de la página no esté vacío
    expect(pageConfig.authorLink).not.toBe("");
    // Verificar que el enlace del autor de la página no sea nulo
    expect(pageConfig.authorLink).not.toBeNull();
    // Verificar que el enlace del autor de la página esté definido
    expect(pageConfig.authorLink).toBeDefined();

    // Verificar que las palabras clave de la página no estén vacías
    expect(pageConfig.keywords).not.toBe("");
    // Verificar que las palabras clave de la página no sean nulas
    expect(pageConfig.keywords).not.toBeNull();
    // Verificar que las palabras clave de la página estén definidas
    expect(pageConfig.keywords).toBeDefined();
  });
});
