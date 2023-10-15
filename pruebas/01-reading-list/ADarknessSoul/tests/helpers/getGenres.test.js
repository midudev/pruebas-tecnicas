import { getAllGenres } from "../../src/helpers/getGenres";

describe('Pruebas en getGenres.js', ()=> {

    const books = [

        {book: {

            genre: "Zombies"

        }},

        {book: {

            genre: "Terror"

        }},

        {book: {

            genre: "Romance"

        }},

    ];

    test('Debe retornar los generos de los libros', ()=> {

        const genres = getAllGenres(books);
       
        expect(genres).toContain(books[0].book.genre);
        expect(genres).toContain(books[1].book.genre);
        expect(genres).toContain(books[2].book.genre);

    }); 

});