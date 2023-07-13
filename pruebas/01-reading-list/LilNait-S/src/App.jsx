import { useState } from "react";
import books from "./mocks/books.json";

function App() {
  const [listOfBooks, setlistOfBooks] = useState(books.library);
  const [readList, setReadList] = useState([]);

  const handleAddedBookToReadList = (ISBN) => {
    const selectBook = listOfBooks.find((item) => item.book.ISBN === ISBN);
    const NewBook = listOfBooks.filter((item) => item.book.ISBN !== ISBN);
    setlistOfBooks(NewBook);
    setReadList([...readList, selectBook]);
  };

  const handleRemoveFromReadList = (ISBN) => {
    const selectBook = readList.find((item) => item.book.ISBN === ISBN);
    const newReadList = readList.filter((item) => item.book.ISBN !== ISBN);
    setReadList(newReadList);
    setlistOfBooks([...listOfBooks, selectBook]);
  };

  return (
    <div className="container m-auto px-3">
      <div className="flexCenter flex-col py-20 gap-8 ">
        <h1 className="text-5xl font-bold">Lista de libros</h1>
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <span>libros disponible : 8</span>
            <span>En la lista de lectura : 2</span>
          </div>
          <div className="flex gap-6">
            <span>filtrar por páginas</span>
            <span>filtrar por género</span>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="flex flex-col gap-10">
            <h2 className="text-2xl font-bold">Libros disponibles</h2>
            <div className="custom-grid">
              {listOfBooks.map(({ book }) => (
                <div
                  onClick={() => handleAddedBookToReadList(book.ISBN)}
                  key={book.ISBN}
                  className="flexCenter relative flex-col max-w-xs gap-3 group whitespace-nowrap"
                >
                  <span>{book.title}</span>
                  <img
                    src={book.cover}
                    className="w-full h-full object-cover rounded-2xl "
                  />
                  <div className="justify-end items-end hidden group-hover:flex w-full h-1/3 bg-gradient-to-b from-transparent to-black/90 rounded-b-2xl gap-2 absolute bottom-0 right-0 font-semibold text-lg text-white p-4">
                    <p className="w-full">Año : {book.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {readList.length !== 0 && (
            <div className="flex flex-col gap-10">
              <h2 className="text-2xl font-bold">Lista de lectura</h2>
              <div className="custom-grid">
                {readList.map(({ book }) => (
                  <div
                    onClick={() => handleRemoveFromReadList(book.ISBN)}
                    key={book.ISBN}
                    className="flexCenter relative flex-col max-w-xs gap-3 group whitespace-nowrap"
                  >
                    <span>{book.title}</span>
                    <img
                      src={book.cover}
                      className="w-full h-full object-cover rounded-2xl "
                    />
                    <div className="justify-end items-end hidden group-hover:flex w-full h-1/3 bg-gradient-to-b from-transparent to-black/90 rounded-b-2xl gap-2 absolute bottom-0 right-0 font-semibold text-lg text-white p-4">
                      <p className="w-full">Año : {book.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
