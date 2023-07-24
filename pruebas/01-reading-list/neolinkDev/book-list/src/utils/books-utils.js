

/**
 * Filtra los libros de acuerdo al género seleccionado
 * @param {String} genre
 * @param {[]} books
 * @returns {[]}
 */
export const filterByGenre = (genre, books) => books.filter(({ book }) => book.genre === genre);
