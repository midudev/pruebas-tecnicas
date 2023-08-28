'use client'
import { useEffect, useState } from "react";
import { fetchBooks } from "./api/books";
import BooksList from "./components/books-list";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  const saveWatchListToLocalStorage = (watchList) => {
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }

  const loadWatchListFromLocalStorage = () => {
    const storedWatchList = localStorage.getItem("watchList");
    return storedWatchList ? JSON.parse(storedWatchList) : [];
  }

  const handleAddToWatchList = (book) => {
    if (!watchList.some((item) => item.book.ISBN === book.book.ISBN)) {
      setWatchList((prevWatchList) => [...prevWatchList, book]);

      setBooks((prevBooks) =>
        prevBooks.map((b) =>
          b.book.ISBN === book.book.ISBN ? { ...b, onWatchlist: true } : b
        )
      );
    }
  };

  const handleRemoveToWatchList = (book) => {
    if (watchList.some((item) => item.book.ISBN === book.book.ISBN)) {
      setWatchList((prevWatchList) =>
        prevWatchList.filter((b) => b.book.ISBN !== book.book.ISBN)
      );

      setBooks((prevBooks) =>
        prevBooks.map((b) =>
          b.book.ISBN === book.book.ISBN ? { ...b, onWatchlist: false } : b
        )
      );
    }
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };


  useEffect(() => {
    setWatchList(loadWatchListFromLocalStorage());
  }, []);


  useEffect(() => {

    fetchBooks()
      .then((res) => {
        const initialBooks = res.library.map((book) => ({
          ...book,
          onWatchlist: watchList.some((item) => item.book.ISBN === book.book.ISBN),
        }));
        setBooks(initialBooks);
        setFilteredBooks(initialBooks);
      })
      .catch((err) => console.log(err));
  }, [watchList]);

  useEffect(() => {

    saveWatchListToLocalStorage(watchList);


    if (selectedGenre === "all") {
      setFilteredBooks(books);
    } else {
      const filteredBooks = books.filter(
        (book) => book.book.genre === selectedGenre
      );
      setFilteredBooks(filteredBooks);
    }
  }, [selectedGenre, books, watchList]);

  return (
    <div className="flex font-mono ">
      <section className="w-1/2 flex flex-col  " >
        <header className="bg-gray-300 text-center p-2 mb-3 ">
          {
            books && books.length > 1 ?
              <h1 className=" flex-col  font-bold ">{`${books.length - watchList.length} Libros disponibles`}</h1>
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
