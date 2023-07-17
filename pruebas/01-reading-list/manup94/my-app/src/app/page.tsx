'use client'


import { useEffect, useState } from "react";
import { fetchBooks } from "./api/books";
import Loader from "./components/loader";
import BooksList from "./components/books-list";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [watchList, setWatchList] = useState([]);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleAddToWatchList = (book) => {
    if (!watchList.some((item) => item.book.ISBN === book.book.ISBN)) {
      setWatchList((prevWatchList) => [...prevWatchList, book]);
      setFilteredBooks((prevFilteredBooks) =>
        prevFilteredBooks.filter((b) => b.book.ISBN !== book.book.ISBN)
      );
    }
  };

  const handleRemoveToWatchList = (book) => {
    if (watchList.some((item) => item.book.ISBN === book.book.ISBN)) {
      setWatchList((prevWatchList) =>
        prevWatchList.filter((b) => b.book.ISBN !== book.book.ISBN)
      );
      setBooks((prevBooks) => [...prevBooks, book]);
    }
  };

  useEffect(() => {
    // Recuperar la watchlist del localStorage al cargar la página
    const storedWatchList = localStorage.getItem("watchList");
    if (storedWatchList) {
      setWatchList(JSON.parse(storedWatchList));
    }

    fetchBooks()
      .then((res) => {
        setBooks(res.library);
        setFilteredBooks(res.library);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // Guardar la watchlist en el localStorage cuando cambia
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);

  useEffect(() => {
    if (selectedGenre === "all") {
      setFilteredBooks(books);
    } else {
      const filteredBooks = books.filter(
        (book) => book.book.genre === selectedGenre
      );
      setFilteredBooks(filteredBooks);
    }
  }, [selectedGenre, books]);

  return (
    <div className="flex font-mono ">
      <section className="w-1/2 flex flex-col  " >
        <header className="bg-gray-300 text-center p-2 mb-3 ">
          {
            books && books.length > 1 ?
              <h1 className=" flex-col  font-bold ">{`${filteredBooks.length} Libros disponibles`}</h1>
              :
              <h1 className=" flex-col  font-bold ">No hay libros disponibles</h1>
          }

          <h3>{`${watchList.length} en la lista de lectura`}</h3>
        </header>
        <div className="flex text-center mb-3">
          <div className="w-1/2 ">
            <p >
              Filtrar por paginas
            </p>
          </div>
          <div className="w-1/2 ">
            <p  >
              Filtrar por genero
            </p>
            <select
              value={selectedGenre}
              onChange={handleGenreChange}
              className="px-4 py-2 rounded-md border"
            >
              <option value="all">Todos</option>
              <option value="Fantasía">Fantasía</option>
              <option value="Ciencia ficción">Ciencia Ficción</option>
              <option value="Zombies">Zombies</option>
              <option value="Terror">Terror</option>
            </select>
          </div>
        </div>

        <hr />
        {
          filteredBooks.length !== 0 ?
            <BooksList books={filteredBooks} handleWatchList={handleAddToWatchList} />
            :
            <p className="text-center mt-4">No hay libros disponibles...</p>
        }


      </section >
      <section className=" w-1/2 bg-gray-300 ">
        <header className="bg-gray-300  text-center  ">
          <h1 className="font-bold p-5 mb-2    ">Lista de lectura</h1>
        </header>

        {
          watchList.length !== 0 ?
            <div className="space-y-20 p-20">

              <BooksList books={watchList} handleWatchList={handleRemoveToWatchList} />

            </div>
            :
            <div >
              <p className="text-center mt-4">Tu lista de lectura esta vacia aun.</p>
              <p className="text-center ">Haz click en un libro para añadirlo a la lista</p>

            </div>
        }


      </section>
    </div>

  )
}
