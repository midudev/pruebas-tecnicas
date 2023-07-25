import React from "react";
import { useLibrary } from "../contexts/library.context";
import Book from "./Book";
import { IBook } from "../types/books";
import { useNavigationContext } from "../contexts/navigation.context";

const MyList: React.FC = () => {
  const { myList, setMyList, setBooks } = useLibrary();
  const { isOpen, setIsOpen } = useNavigationContext();

  const removeFromMyList = (book: IBook) => {
    const newList = myList.filter((elem) => elem.book.ISBN !== book.book.ISBN);
    setMyList(newList);
    setBooks((prevState) => [...prevState, book]);
  };

  return (
    <section
      className={`transition-all duration-300 ${isOpen ? "w-5/6" : "w-1/6"}
       bg-stone-100 text-stone-800 shadow-lg `}
    >
      <div className="sticky top-0 right-0">
        <div className="flex flex-col p-8 gap-4">
          <h3
            className="font-bold text-xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            Mi lista ({myList.length})
          </h3>
          <div
            className={`grid ${isOpen ? "grid-cols-4" : "grid-cols-1"} gap-4`}
          >
            {myList.map((book, i) => {
              return (
                <Book
                  book={book}
                  key={i}
                  isInMyList={true}
                  addToMyList={() => {}}
                  removeFromMyList={removeFromMyList}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyList;
