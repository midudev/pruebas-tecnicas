import { getBooksByISBN } from "../../../data/books";


export const get = async ({params, request}) => {

    const ISBN = params.ISBN;

    const [book] = getBooksByISBN(ISBN);

    if(!book) return new Response(null, {

        status: 404,
        statusText: 'Libro no encontrado'
    });

    return new Response(JSON.stringify(book), {

        status: 200,

        headers: {
            "Content-Type": "application/json"
        }
    })
}