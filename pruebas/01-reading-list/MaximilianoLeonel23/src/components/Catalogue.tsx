import React from "react";
import Book from "./Book";
import { useLibrary } from "../contexts/library.context";
import { IBook } from "../types/books";
import { useNavigationContext } from "../contexts/navigation.context";
const Catalogue: React.FC = () => {
  const { books, setBooks, myList, setMyList, filteredBooks } = useLibrary();
  const { isOpen } = useNavigationContext();

  const addToMyList = (book: IBook) => {
    const foundBook = myList.find((elem) => elem.book.ISBN === book.book.ISBN);
    if (foundBook) return;
    setMyList((prevState) => [...prevState, book]);
    const newCatalogue = books.filter(
      (elem) => elem.book.ISBN !== book.book.ISBN
    );
    setBooks(newCatalogue);
  };

  return (
    <section
      className={`transition-all duration-700 bg-primary-green ${
        isOpen ? "w-0" : "w-4/6"
      }`}
    >
      <div className="flex flex-col gap-y-8 p-8">
        <h1 className="font-bold text-stone-800 text-3xl">Catálogo</h1>
        <div
          className={`${isOpen ? "" : "grid grid-cols-4 gap-8"} `}
          data-cy="catalogue-list"
        >
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
