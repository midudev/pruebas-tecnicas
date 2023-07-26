//JSON con los libros
const books = require('../../../books.json');

//Que el json exista    
describe('JSON', () => {
    test('JSON exists', () => {
        expect(books).toBeDefined();
    });
});

//Que el json sea un array de objetos
describe('JSON', () => {
    test('JSON is an array of objects', () => {
        expect(Array.isArray(books.library)).toBe(true);
    });
});

//Que el json no esté vacío
describe('JSON', () => {
    test('JSON is not empty', () => {
        expect(books.library.length).toBeGreaterThan(0);
    });
});