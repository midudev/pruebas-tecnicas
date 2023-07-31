import React, { createContext, useEffect, useState } from "react";
import myBooks from "../utils/constants/books.json";

export const BooksContext = createContext();

/**
 * Componente BooksProvider
 * @param {object} children - Componentes hijos envueltos por el proveedor de contexto.
 * @returns {JSX.Element} - Elemento JSX que representa el proveedor de contexto para la gestión de libros.
 */
export const BooksProvider = ({ children }) => {
  // Estado del proveedor de contexto
  const [books, setBooks] = useState([]);
  const [list, setList] = useState([]);
  const [availableBooks, setAvailableBooks] = useState([]);
  const [filterCategories, setFilterCategories] = useState([]);
  const [query, setQuery] = useState("");
  const [pages, setPages] = useState(0);

  // Cálculo del número máximo de páginas
  const maxPages = Math.max(...myBooks.library.map((item) => item.book.pages));
  const minPages = Math.min(...myBooks.library.map((item) => item.book.pages));

  // Efecto de montaje: inicializar lista de libros
  useEffect(() => {
    const libraryBooks = myBooks.library.map((item) => item.book);
    setBooks(libraryBooks);
  }, []);

  // Efecto de montaje: cargar lista desde el almacenamiento local
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("list")) || [];
    setList(list);
  }, []);

  // Efecto de montaje: manejar cambios en el almacenamiento local
  useEffect(() => {
    const handleStorageEvent = (e) => {
      if (e.key === "list") {
        const list = JSON.parse(e.newValue);
        setList(list);
      }
    };

    window.addEventListener("storage", handleStorageEvent);

    return () => {
      window.removeEventListener("storage", handleStorageEvent);
    };
  }, []);

  // Efecto de actualización: actualizar lista de libros disponibles
  useEffect(() => {
    const availableBooks = books.filter(
      (book) => !list.some((item) => item.ISBN === book.ISBN)
    );
    setAvailableBooks(availableBooks);
  }, [list, books]);

  // Función de actualización del almacenamiento local
  const updateLocalStore = (newList) => {
    localStorage.setItem("list", JSON.stringify(newList));
  };

  // Función de ordenamiento de libros
  const sortBooks = (order) => {
    const sortedBooks = [...books].sort((a, b) => {
      if (order === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
    setBooks(sortedBooks);
  };

  // Función para agregar un libro a la lista de lectura
  const addToList = (book) => {
    const newList = [...list, book];
    setList(newList);
    updateLocalStore(newList);
  };

  // Función para eliminar un libro de la lista de lectura
  const removeFromList = (book) => {
    const newList = list.filter((item) => item.ISBN !== book.ISBN);
    setList(newList);
    updateLocalStore(newList);
  };

  // Función para filtrar libros por categoría
  const filterBooksByCategory = (category) => {
    const isFilterApplied = filterCategories.includes(category);

    if (isFilterApplied) {
      setFilterCategories(
        filterCategories.filter((filter) => filter !== category)
      );
    } else {
      setFilterCategories([...filterCategories, category]);
    }
  };

  // Función para filtrar libros por búsqueda de texto
  const filterBooksByQuery = (query) => {
    setQuery(query);
  };

  // Función para aplicar los filtros
  const applyFilters = () => {
    let filteredBooks = [...availableBooks];

    if (query.trim().length > 0) {
      filteredBooks = availableBooks.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (pages > 0) {
      filteredBooks = filteredBooks.filter((book) => book.pages <= pages);
    }

    if (filterCategories.length > 0) {
      filteredBooks = filteredBooks.filter((book) =>
        filterCategories.includes(book.genre)
      );
    }

    const bookCountByCategory = filteredBooks.reduce((count, book) => {
      count[book.genre] = (count[book.genre] || 0) + 1;
      return count;
    }, {});

    return {
      filteredBooks,
      bookCountByCategory,
    };
  };

  // Función para limpiar los filtros
  const clearFilters = () => {
    setFilterCategories([]);
  };

  // Proveedor de contexto
  return (
    <BooksContext.Provider
      value={{
        books: applyFilters().filteredBooks,
        bookCountByCategory: applyFilters().bookCountByCategory,
        filterBooksByCategory,
        filterCategories,
        clearFilters,
        list,
        setList,
        addToList,
        removeFromList,
        sortBooks,
        filterBooksByQuery,
        query,
        setPages,
        maxPages,
        minPages,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
