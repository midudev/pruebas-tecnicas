"use client";
import { createContext, useContext, useEffect, useState } from "react";

// Creamos el contexto para los libros
export const BookReadingContext = createContext(null);

// Creamos un hook personalizado para usar el contexto de los libros
export const useBookReading = () => {
  const context = useContext(BookReadingContext);
  return context;
};

// Función para obtener el valor inicial del estado desde localStorage
function getStorageValue(key, defaultValue) {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

// Proveedor de contexto para los libros
export default function BookReadingContextProvider({ children }) {
  // Estado para abril o serrar la lista de books en el carrito
  const [isOpenCarsList, setOpenCarsList] = useState(false);

  // Estado para los IDs de los libros y su contador
  const [booksId, setBooksId] = useState(() => {
    return getStorageValue("booksId", []);
  });
  const [booksCount, setBooksCount] = useState(() => {
    return getStorageValue("booksCount", 0);
  });

  // Función para agregar un libro
  const addBook = (id) => {
    setBooksId((prevBooks) => {
      const updatedBooks = [...prevBooks, id];

      localStorage.setItem("booksId", JSON.stringify(updatedBooks));
      return updatedBooks;
    });
    setBooksCount((prevCount) => {
      const updatedCount = prevCount + 1;
      localStorage.setItem("booksCount", JSON.stringify(updatedCount));
      return updatedCount;
    });
  };

  // Función para eliminar un libro
  const removeBook = (id) => {
    setBooksId((prevBooks) => {
      const updatedBooks = prevBooks.filter((bookId) => bookId !== id);
      localStorage.setItem("booksId", JSON.stringify(updatedBooks));
      return updatedBooks;
    });
    setBooksCount((prevCount) => {
      const updatedCount = prevCount - 1;
      localStorage.setItem("booksCount", JSON.stringify(updatedCount));
      return updatedCount;
    });
  };

  // Efecto para manejar los cambios en localStorage
  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key === "booksId") {
        setBooksId(JSON.parse(localStorage.getItem("booksId")) || []);
      }
      if (event.key === "booksCount") {
        setBooksCount(JSON.parse(localStorage.getItem("booksCount")) || 0);
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  // Devolvemos el proveedor de contexto con los valores necesarios
  return (
    <BookReadingContext.Provider
      value={{
        removeBook,
        addBook,
        setBooksId,
        setBooksCount,
        setOpenCarsList,
        booksId,
        booksCount,
        isOpenCarsList,
      }}
    >
      {children}
    </BookReadingContext.Provider>
  );
}
