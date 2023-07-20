//Si la aplicación crece mucho, se debe utilizar un algoritmo de divide an conquer en vez de un insertion sort para la busqueda del mínimo y máximo número de páginas

export const getMinPages = (books = []) => {

    let min = books[0]?.book.pages;

    books.forEach( ({book}) => {

        const { pages } = book; 
        if(pages < min) min = pages;

    });

    return min;

}

export const getMaxPages = (books = []) => {

    if(books[0]?.book == undefined) return 0;
    let max = books[0]?.book.pages;

    books.forEach( ({book}) => {

        const { pages } = book; 
        if(pages > max) max = pages;

    });

    return max;

}