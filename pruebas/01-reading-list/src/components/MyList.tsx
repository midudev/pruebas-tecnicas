import React from "react";
import { useLibrary } from "../contexts/library.context";
import Book from "./Book";
import { IBook } from "../types/books";

const MyList: React.FC = () => {
  const { myList, setMyList, setBooks } = useLibrary();

  const removeFromMyList = (book: IBook) => {
    const newList = myList.filter((elem) => elem.book.ISBN !== book.book.ISBN);
    setMyList(newList);
    setBooks((prevState) => [...prevState, book]);
  };

  return (
    <section className="min-w-15vw bg-stone-100 text-stone-800">
      <div className="flex flex-col p-8">
        {myList.map((book, i) => {
          return (
            <Book
              book={book}
              key={i}
              isInMyList={true} // Indicar que el libro está en myList
              addToMyList={() => {}} // Dejar vacío ya que ya está en myList
              removeFromMyList={removeFromMyList} // Función para remover el libro
            />
          );
        })}
      </div>
    </section>
  );
};

export default MyList;
