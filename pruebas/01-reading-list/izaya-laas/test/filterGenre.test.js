import { describe, it, expect } from 'vitest';
import { filterGenre } from '../src/filters/filterGenre';
import { books, fictionBooks, terrorBooks } from './testData';

describe('filterGenre test', () => {
  it('Debera retornar un [] en caso no encontrar libros', () => {
    expect(filterGenre(books, 'Zombies')).toStrictEqual([]);
  });

  it('Debera retornar todos los libros del genero especificado', () => {
    expect(filterGenre(books, 'terror')).toStrictEqual(terrorBooks);
    expect(filterGenre(books, 'Terror')).toStrictEqual(terrorBooks);
    expect(filterGenre(books, 'Ciencia ficción')).toStrictEqual(fictionBooks);
  });
});
