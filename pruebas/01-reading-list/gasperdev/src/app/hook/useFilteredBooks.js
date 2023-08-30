// La función `filters` recibe cuatro argumentos:
// - `Books`: un array de libros.
// - `selectedGenre`: el género seleccionado.
// - `pagesAllBooks`: el número mínimo de páginas que debería tener un libro.
// - `searchBooks`: el término de búsqueda que se aplica a los títulos de los libros o sinopsis.
export const filters = (Books, selectedGenre, pagesAllBooks, searchBooks) => {
  // Declaramos una variable `filteredBooks` para almacenar nuestros libros filtrados.
  // Dependiendo de si `selectedGenre` es distinto de "Todos" o no, aplicamos diferentes filtros.
  const filteredBooks =
    selectedGenre !== "Todos"
      ? // Si `selectedGenre` es distinto de "Todos", filtramos los libros por tres criterios:
        // 1) Que el género del libro sea igual al género seleccionado.
        // 2) Que el título del libro contenga el término de búsqueda (se ignoran las mayúsculas y minúsculas).
        // 3) Que la cantidad de páginas del libro sea mayor o igual al mínimo especificado.
        Books.filter(
          (lista) =>
            lista.book.genre === selectedGenre &&
            lista.book.title
              .toLowerCase()
              .includes(searchBooks.toLowerCase()) &&
            lista.book.pages >= pagesAllBooks
        )
      : // Si `selectedGenre` es igual a "Todos", filtramos los libros por dos criterios:
        // 1) Que la cantidad de páginas del libro sea mayor o igual al mínimo especificado.
        // 2) Que el título del libro o la sinopsis contengan el término de búsqueda
        //   (se ignoran las mayúsculas y minúsculas).
        Books.filter(
          (lista) =>
            lista.book.pages >= pagesAllBooks &&
            (lista.book.title
              .toLowerCase()
              .includes(searchBooks.toLowerCase()) ||
              lista.book.synopsis
                .toLowerCase()
                .includes(searchBooks.toLowerCase()))
        );
  // Devolvemos nuestros libros filtrados.
  return filteredBooks;
};
