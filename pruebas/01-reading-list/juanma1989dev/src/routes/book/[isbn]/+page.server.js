import {getOneBook} from '$lib/services/bookService.js' 
import { error } from '@sveltejs/kit';


function getBook(isbn){
    const book = getOneBook(isbn);

    if (!book) {
        throw error(404, {
            message: 'Libro no encontrado'
        });
    }

    return book
}

export async function load({ params }) {

    const {isbn} = params
    const book   = getBook(isbn)

    return {
        book
    };
}