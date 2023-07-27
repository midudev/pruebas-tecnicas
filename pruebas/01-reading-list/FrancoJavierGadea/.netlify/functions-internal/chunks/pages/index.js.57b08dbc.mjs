import { a as getBooksBy } from './_ISBN_.js.45588133.mjs';

const get = async ({params, request, url}) => {

    const queries = {
        genre: url.searchParams.get('genre'),
        pages: url.searchParams.get('pages')
    };

    const books = getBooksBy(queries);

    return new Response(JSON.stringify(books), {

        status: 200,

        headers: {
            "Content-Type": "application/json"
        }
    })
};

export { get };
