import { expect, it, describe } from 'vitest';
import { filterBooks } from '../src/filters/filterBooks';
import {
  books,
  booksExcluided,
  booksMin300Pages,
  booksMax300Pages,
  fictionBooks,
  incluidedISBN,
  terrorBooks,
  booksMin40Max249Pages,
} from './testData';

describe('FilterBooks test', () => {
  it('Debera retornar un array vacío si recibe un tipo diferent a un array', () => {
    expect(filterBooks()).toStrictEqual([]);
    expect(filterBooks({})).toStrictEqual([]);
    expect(filterBooks('sdasd')).toStrictEqual([]);
  });

  it('Debera retornar el mismo array si no recive opciones de filtro', () => {
    expect(filterBooks(books)).toStrictEqual(books);
  });

  it('Debera retornar los mismos libros en caso de que se quiera excluir libros pero no se envie una lista de libros ya incluidos', () => {
    expect(filterBooks(books, { excludeBooks: true })).toStrictEqual(books);
  });

  it('Debera retornar todos los libros exceptuando los que hay en lista de incluidos', () => {
    expect(
      filterBooks(books, { excludeBooks: true }, incluidedISBN),
    ).toStrictEqual(booksExcluided);
  });

  it('Debera retornar un [] en caso no encontrar libros', () => {
    expect(filterBooks(books, { genre: 'genero aún no creado' })).toStrictEqual(
      [],
    );
  });

  it('Debera retornar todos los libros del genero especificado', () => {
    expect(filterBooks(books, { genre: 'terror' })).toStrictEqual(terrorBooks);
    expect(filterBooks(books, { genre: 'Terror' })).toStrictEqual(terrorBooks);
    expect(filterBooks(books, { genre: 'Ciencia ficción' })).toStrictEqual(
      fictionBooks,
    );
  });

  it('Debera considerar como que no hay limites de paginas en caso de que el tipo de dato de las pages no sean numeros (strings con numeros no se consideran)', () => {
    expect(filterBooks(books, { pages: ['dasdsa', 'dsadsa'] })).toStrictEqual(
      books,
    );
  });

  it('Debera retornar todos los libros con paginas minimas indicadas', () => {
    expect(filterBooks(books, { pages: [300, ''] })).toStrictEqual(
      booksMin300Pages,
    );
  });

  it('Debera retornar todos los libros con paginas maximas indicadas', () => {
    expect(filterBooks(books, { pages: ['', '300'] })).toStrictEqual(
      booksMax300Pages,
    );
  });

  it('Debera retornar todos los libros entre el numero maximo y minimo indicado', () => {
    expect(filterBooks(books, { pages: ['40', '249'] })).toStrictEqual(
      booksMin40Max249Pages,
    );
  });

  it('Debera retornar los libros con el input parecido', () => {
    expect(filterBooks(books, { specificBook: 'FRA' })).toStrictEqual([
      books[2],
    ]);
    expect(filterBooks(books, { specificBook: 'la' })).toStrictEqual([
      books[1],
      books[3],
    ]);
  });

  it('Debera retornar los libros segun las opciones deseadas', () => {
    expect(
      filterBooks(
        books,
        { excludeBooks: true, specificBook: 'la' },
        incluidedISBN,
      ),
    ).toStrictEqual([books[1]]);
    expect(
      filterBooks(
        books,
        { excludeBooks: true, specificBook: 'la', genre: 'Ciencia Ficción' },
        incluidedISBN,
      ),
    ).toStrictEqual([]);
  });
});
