import { getMaxPages, getMinPages } from "../../src/helpers/getNumPages";

describe('Pruebas en getNumPages.js', ()=> {

    const books = [

        {book: {

            pages: 30

        }},

        {book: {

            pages: 5

        }},

        {book: {

            pages: 7

        }},     

    ]

    test('Debe retornar el mínimo número de páginas', ()=> {

        const min = getMinPages(books);
        expect(min).toBe(5);

    }); 

    test('Debe retornar el mayor número de páginas', ()=> {
    
        const max = getMaxPages(books);
        expect(max).toBe(30);
    
    });

});