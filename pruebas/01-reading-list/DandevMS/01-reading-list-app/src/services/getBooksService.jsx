import BookData from "../data/books.json";

// obetener los generos de los libros
export const getGenresBooks = () => {
  const {library} = BookData;
  if (library && library.length > 0) {
    const genres = library.map((item) => item.book.genre); // hago un map para obtener los generos
    return [...new Set(genres)] // utlizar set para optener valores unicos
  }
}

// obtener los libros
export const  getBooksService = () => {
  const {library} = BookData; // dessesctructuramos el objeto y obtenemos el array "library"
  if (library && library.length > 0) {
   const {book} = library[0]; // sacamos el primer elemento del array
   console.log(book);
   return book; // devolver el objeto del libro7
  }
  return null;
}