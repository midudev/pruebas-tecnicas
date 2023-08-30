 import {getCatalogs, getBooks} from '$lib/services/bookService.js'

 
export async function load({ params }) {

    const books    = getBooks()
    const catalogs = getCatalogs(books)

    return {
        catalogs : catalogs,
        streamed : {
            books : books
        } 
    };
}