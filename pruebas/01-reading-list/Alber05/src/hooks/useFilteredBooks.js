import { useState, useEffect } from "react";

export const useFilteredBooks = (
  search,
  books,
  selectedCategory,
  selectedPageRange
) => {
  const [booksToDisplay, setBooksToDisplay] = useState(books);

  useEffect(() => {
    const handleSearchedBooks = () => {
      const searchedBooks = filterBooks(
        search,
        books,
        selectedCategory,
        selectedPageRange
      );
      setBooksToDisplay(searchedBooks);
    };

    handleSearchedBooks();
  }, [search, books, selectedCategory, selectedPageRange]);

  // Función para filtrar los libros en base a la búsqueda y filtros seleccionados
  const filterBooks = (search, books, selectedCategory, selectedPageRange) => {
    return books.filter((searchedBook) => {
      const searchMatch =
        !search ||
        searchedBook.book.title.toLowerCase().includes(search.toLowerCase()) ||
        searchedBook.book.author.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const categoryMatch =
        selectedCategory === "all" ||
        selectedCategory === searchedBook.book.genre;

      const pageRangeMatch =
        selectedPageRange == 0 ||
        (selectedPageRange > 0 && searchedBook.book.pages <= selectedPageRange);

      return categoryMatch && searchMatch && pageRangeMatch;
    });
  };

  return booksToDisplay;
};
