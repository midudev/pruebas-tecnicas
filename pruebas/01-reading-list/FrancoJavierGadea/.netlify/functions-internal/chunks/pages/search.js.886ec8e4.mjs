import { s as searchBooks } from './_ISBN_.js.e3afcb43.mjs';

const get = async ({params, request, url}) => {

    const search = url.searchParams.get('search');

    const filters = {
        genre: url.searchParams.get('genre'),
        pages: url.searchParams.get('pages')
    };

    console.log(search, filters);

    const books = searchBooks(search, filters);
    
    return new Response(JSON.stringify(books), {

        status: 200,

        headers: {
            "Content-Type": "application/json"
        }
    })
};

export { get };
