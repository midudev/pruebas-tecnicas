
import { describe, expect, test } from "vitest";
import { getBooksBy } from "../data/books.js";

import BOOKS from "../data/books.json";


describe('Test books function "getBooksBy()"', () => {

    //---- Genre ----

    test('filter by "genre"', () => {

        BOOKS.genres.forEach(genre => {

            const result = getBooksBy({genre}).every(({book}) => {

                return book.genre === genre;
            });

            expect(result).toBe(true);
        });
    });

    test('filter by "genre" equal "Todos" ', () => {

        ['todos', 'TODOS', 'Todos'].forEach(value => {

            const result = getBooksBy({genre: value}).length;

            expect(result).toBe(BOOKS.total);
        });
    });

    test('filter by "genre" equal "undefined" or "null" ', () => {

        [undefined, null, ''].forEach(value => {

            const result = getBooksBy({genre: value}).length;

            expect(result).toBe(BOOKS.total);
        });
    });


    //---- Pages ----

    test('filter by "pages"', () => {

        [100, 200, 300, 500, 700, 1000, 1200].forEach(pages => {

            const result = getBooksBy({pages}).every(({book}) => {

                return book.pages <= pages;
            });

            expect(result).toBe(true);
        });
    });

    test('filter by "pages" equal "undefined" or "null" ', () => {

        [undefined, null].forEach(value => {

            const result = getBooksBy({pages: value}).length;

            expect(result).toBe(BOOKS.total);
        });
    });
});


