"use client";
import { useState, createContext, useContext, useEffect } from "react";
import books from "../../../books.json";
import useLocalStorage from "../localStorage/useLocalStorage";

const PersonajeContext = createContext();

export default function Context({ children }) {
  // create a filtered by genre books state
  const [filteredBooks, setFilteredBooks] = useState([]);
  // create the available books state - ISBN array
  const [librosDisponibles, setLibrosDisponibles] = useLocalStorage(
    "disponibles",
    "[]"
  );
  // create an available genders state
  const [genres, setGenres] = useState(["Todos"]);
  // create a selected genre state
  const [selectedGenre, setSelectedGenre] = useState();

  // create the selected books state
  const [librosSeleccionados, setLibrosSeleccionados] = useLocalStorage(
    "seleccionados",
    "[a]"
  );

  // loads all available books to librosDisponibles on initial load. It could be done from fetch too.

  useEffect(() => {
    let temp = []; // list of ISBNs

    let avGenres = [...genres]; // list of genres.

    try {
      for (let i = 0; i < books.library.length; i++) {
        if (
          books.library[i].book.ISBN &&
          !librosSeleccionados?.includes(books.library[i].book.ISBN)
        ) {
          temp.push(books.library[i].book.ISBN);
          console.log(
            "for book: " + books.library[i].book.ISBN + "set temp as " + temp
          );
        }

        if (!avGenres.includes(books.library[i].book.genre)) {
          avGenres.push(books.library[i].book.genre);
        }
      }
      console.log("This is temp: " + temp.length);

      setLibrosDisponibles(temp);

      setGenres(avGenres);


      setFilteredBooks(temp);
      
      if (selectedGenre) {
        changeSelectedGenre(selectedGenre);
      }
    } catch (error) {
      console.log("Its been an error: " + error);
    }
  }, [librosSeleccionados]);

  // This function add the selected book to the librosSeleccionados array and delete it from librosDisponibles
  function updateLibrosSeleccionados(selectedIsbn) {
    // add book to librosSeleccionados
    var tempS = [...librosSeleccionados];
    console.log("add book to librosSeleccionados" + tempS);
    tempS.push(selectedIsbn);
    setLibrosSeleccionados(tempS);
    // delete book from librosDisponibles
    var tempD = [...librosDisponibles];
    const index = tempD.indexOf(selectedIsbn);
    tempD.splice(index, 1);
    setLibrosDisponibles(tempD);

    // delete book from filteredBooks
    var tempF = [...filteredBooks];
    const indexF = tempF.indexOf(selectedIsbn);
    tempF.splice(indexF, 1);
    setFilteredBooks(tempF);
  }

  // This function removes the selected book to the librosSeleccionados array and add it to librosDisponibles
  function deleteLibrosSeleccionados(deletedIsbn) {
    // add book to librosDisponibles
    var tempD = [...librosDisponibles];
    tempD.push(deletedIsbn);
    setLibrosDisponibles(tempD);
    // delete book from librosSeleccionados
    var tempS = [...librosSeleccionados];
    const index = tempS.indexOf(deletedIsbn);
    tempS.splice(index, 1);
    setLibrosSeleccionados(tempS);
  }

  function changeSelectedGenre(e) {
    setSelectedGenre(e);

    let filter = [];

    for (let i = 0; i < books.library.length; i++) {
      if (
        librosDisponibles.includes(books.library[i].book.ISBN) &&
        (books.library[i].book.genre === e || e == "Todos")
      ) {
        filter.push(books.library[i].book.ISBN);
      }
    }

    setFilteredBooks(filter);
  }

  return (
    <PersonajeContext.Provider
      value={{
        librosDisponibles,
        librosSeleccionados,
        genres,
        selectedGenre,
        filteredBooks,
        updateLibrosSeleccionados,
        deleteLibrosSeleccionados,
        changeSelectedGenre,
      }}
    >
      {children}
    </PersonajeContext.Provider>
  );
}

export function UsePersonajeContext() {
  return useContext(PersonajeContext);
}
