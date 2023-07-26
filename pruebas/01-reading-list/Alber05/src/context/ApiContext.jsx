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

  // Estado para almacenar el rango de páginas seleccionado
  const [selectedPageRange, setSelectedPageRange] = useState(0);

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

  // Efecto para guardar los libros en el localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("storageLibraryBooks", JSON.stringify(libraryBooks));
    localStorage.setItem("storageAllBooks", JSON.stringify(allBooks));
  }, [allBooks, libraryBooks]);

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

  // Efecto para sincronizar cambios en el localStorage con el estado del componente
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "storageAllBooks") {
        setAllBooks(JSON.parse(e.newValue));
      } else if (e.key === "storageLibraryBooks") {
        setLibraryBooks(JSON.parse(e.newValue));
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
        search,
        setSearch,
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
