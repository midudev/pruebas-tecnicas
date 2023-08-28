import { searchBooks } from "../../../data/books.js";


export const get = async ({params, request, url}) => {

    const search = url.searchParams.get('search');

    const filters = {
        genre: url.searchParams.get('genre'),
        pages: url.searchParams.get('pages')
    }

    const books = searchBooks(search, filters);
    
    return new Response(JSON.stringify(books), {

        status: 200,

        headers: {
            "Content-Type": "application/json"
        }
    })
}