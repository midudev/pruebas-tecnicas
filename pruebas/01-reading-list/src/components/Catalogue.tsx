import React from "react";
import Book from "./Book";
import { useLibrary } from "../contexts/library.context";
import { IBook } from "../types/books";
const Catalogue: React.FC = () => {
  const { books, setBooks, myList, setMyList, filteredBooks } = useLibrary();

  const addToMyList = (book: IBook) => {
    // Verifico que no este en myList
    const foundBook = myList.find((elem) => elem.book.ISBN === book.book.ISBN);
    if (foundBook) return;

    setMyList((prevState) => [...prevState, book]);

    const newCatalogue = books.filter(
      (elem) => elem.book.ISBN !== book.book.ISBN
    );
    setBooks(newCatalogue);
  };

  return (
    <section>
      <div className="flex flex-col gap-8 p-8">
        <h1 className="font-bold text-stone-800 text-3xl">Catálogo</h1>

        <div className="grid grid-cols-4 gap-8">
          {filteredBooks.map((book, i) => {
            const foundBook = myList.find(
              (elem) => elem.book.ISBN === book.book.ISBN
            );
            return (
              <Book
                book={book}
                key={i}
                isInMyList={!!foundBook}
                addToMyList={addToMyList}
                removeFromMyList={() => {}}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
