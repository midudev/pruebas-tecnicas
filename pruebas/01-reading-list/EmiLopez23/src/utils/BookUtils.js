import booksData from '../books.json';

export function getGenresFromJson(){
    const genres = [...new Set(booksData.library.map(book=>book.book.genre))] //creo un set de values con los generos disponibles
    return genres
}