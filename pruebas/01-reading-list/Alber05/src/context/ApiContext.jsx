import { useState, useEffect } from "react";
import data from "../../books.json";
import { DataContext } from "./DataContext";

// Componente ApiContext
export const ApiContext = ({ children }) => {
  // Estado para almacenar todos los libros disponibles
  const [allBooks, setAllBooks] = useState(data.library);

  // Estado para almacenar los libros en la biblioteca del usuario
  const [libraryBooks, setLibraryBooks] = useState([]);

  // Estado para manejar el término de búsqueda
  const [search, setSearch] = useState("");

  // Estado para almacenar el rango de páginas seleccionado [min, max]
  const [pageRange, setPageRange] = useState([0, 1000]);

  // Estado para almacenar el rango de páginas seleccionado [min, max]
  const [selectedPageRange, setSelectedPageRange] = useState([0, 0]);

  // Estado para almacenar la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Obtener todas las categorías disponibles
  const allCategories = Array.from(
    new Set(data.library.map((el) => el.book.genre))
  );

  // Función para agregar un libro a la biblioteca del usuario y eliminarlo de todos los libros
  const handleAddToLibrary = (isbn) => {
    const addedLibraryBook = allBooks.find((el) => el.book.ISBN === isbn);

    setLibraryBooks((prevLibraryBooks) => [
      ...prevLibraryBooks,
      addedLibraryBook,
    ]);

    setAllBooks((prevAllBooks) =>
      prevAllBooks.filter((el) => el.book.ISBN !== isbn)
    );
  };

  // Función para eliminar un libro de la biblioteca del usuario y añadirlo a todos los libros
  const handleDeleteFromLibrary = (isbn) => {
    const deleteFromLibraryBook = libraryBooks.find(
      (el) => el.book.ISBN === isbn
    );

    setAllBooks((prevAllBooks) => [...prevAllBooks, deleteFromLibraryBook]);

    setLibraryBooks((prevLibraryBooks) =>
      prevLibraryBooks.filter((el) => el.book.ISBN !== isbn)
    );
  };

  // Función para manejar la búsqueda y filtros
  const handleSearchedBooks = (
    search,
    books,
    setSearchedBooks,
    selectedCategory,
    selectedPageRange
  ) => {
    const searchedBooks = filterBooks(
      search,
      books,
      selectedCategory,
      selectedPageRange
    );
    setSearchedBooks(searchedBooks);
  };

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
        (selectedPageRange[0] === 0 && selectedPageRange[1] === 0) ||
        (searchedBook.book.pages >= selectedPageRange[0] &&
          searchedBook.book.pages <= selectedPageRange[1]);

      return categoryMatch && searchMatch && pageRangeMatch;
    });
  };

  // Efecto para sincronizar cambios en el localStorage con el estado del componente
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "storageAllBooks") {
        setAllBooks(JSON.parse(event.newValue));
      } else if (event.key === "storageLibraryBooks") {
        setLibraryBooks(JSON.parse(event.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Efecto para cargar los libros almacenados en el localStorage al montar el componente
  useEffect(() => {
    const storagedAllBooks = localStorage.getItem("storageAllBooks");
    const storageLibraryBooks = localStorage.getItem("storageLibraryBooks");

    if (storagedAllBooks) {
      setAllBooks(JSON.parse(storagedAllBooks));
    }

    if (storageLibraryBooks) {
      setLibraryBooks(JSON.parse(storageLibraryBooks));
    }
  }, []);

  // Efecto para guardar los libros en el localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("storageLibraryBooks", JSON.stringify(libraryBooks));
    localStorage.setItem("storageAllBooks", JSON.stringify(allBooks));
  }, [allBooks, libraryBooks]);

  // Efecto para sincronizar cambios en el localStorage con el estado del componente
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "storageAllBooks") {
        setAllBooks(JSON.parse(event.newValue));
      } else if (event.key === "storageLibraryBooks") {
        setLibraryBooks(JSON.parse(event.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <DataContext.Provider
      value={{
        allBooks,
        libraryBooks,
        handleAddToLibrary,
        handleDeleteFromLibrary,
        handleSearchedBooks,
        search,
        setSearch,
        pageRange,
        selectedPageRange,
        setSelectedPageRange,
        allCategories,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
