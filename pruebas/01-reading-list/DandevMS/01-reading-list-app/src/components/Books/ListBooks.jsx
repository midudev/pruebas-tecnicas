import { useState } from "react";
import { useContext } from "react";
import { BooksContext } from "../../context/BooksContextProvider";
import { BiBookAdd } from "react-icons/bi";
import { useEffect } from "react";

function ListBooks() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [avaliableBooks, setAvailableBooks] = useState([]);

  // contexto global
  const {books, setBooks, setReadingList, readingList, genres, filterBooksByGenre} = useContext(BooksContext);

  // restaurar la lista de libros original
  const resetFilter = () => {
    setBooks(books);
    setSelectedGenre("");
  };

  // conteo de libros disponibles
  useEffect(() => {
    setAvailableBooks(books.length);
  }, [books]);

  
  const addToRedingList = (book) => {
    setReadingList((prevReadingList) => [...prevReadingList, book]);

    localStorage.setItem("readingList", JSON.stringify(readingList));

    setBooks((prevBooks) => prevBooks.filter((b) => b !== book));
  }


  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Listado de Libros
        </h2>
        <div className="flex justify-center items-center">
          <h1 className="mr-4">Filtrar por genero</h1>
          <select
            value={selectedGenre}
            onChange={(e) => {
              const genre = e.target.value;
              setSelectedGenre(genre);
              genre ? filterBooksByGenre(genre) : resetFilter();
            }}
            className="p-2 border rounded-md"
          >
             <option value="todos">todos</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}

              </option>
            ))}
           
            
          </select>
        </div> 

        <div className="flex border p-2">
          <h1>Libros disponibles</h1>
          <span className="ml-4">{avaliableBooks}</span>
        </div>

        <div className="flex border p-2">
          <h1>Libros en lista de lectura</h1>
          <span className="ml-4">{avaliableBooks}</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
        {books.map((book, index) => (
          <div key={index} className="relative border">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80 ">
              <img
                src={book.book.cover}
                alt="books"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full hover:opacity-75"
              />
            </div>
            <div className="mt-4 flex justify-between h-56  p-2">
              <div>
                <h3 className="text-lg text-gray-800">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {book.book.title}
                  <small className="ml-3 font-light">{book.book.year}</small>
                </h3>
                <p>{book.book.synopsis}</p>
                <p>Año: {book.book.year}</p>
              </div>
            </div>
            <div className="flex justify-center items-center p-4 mt-2 relative">
              <button onClick={() => addToRedingList(book)}  className="bg-cyan-400 p-4 rounded-md hover:bg-cyan-300 flex justify-center items-center">
                <BiBookAdd className="text-2xl mr-2" />
                add book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListBooks;
