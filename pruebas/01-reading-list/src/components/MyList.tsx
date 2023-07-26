import React from "react";
import { useLibrary } from "../contexts/library.context";
import Book from "./Book";
import { IBook } from "../types/books";
import { useNavigationContext } from "../contexts/navigation.context";
import arrow from "../assets/icons/arrow.svg";

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
      className={`transition-all duration-700 ${isOpen ? "w-5/6" : "w-1/6"}
       bg-stone-100 text-stone-800 shadow-xl `}
    >
      <div className="sticky top-0 right-0">
        <div className="flex flex-col p-8 gap-4 cursor-pointer">
          <div
            className="flex items-center gap-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={arrow}
              alt="arrow"
              className={`${
                isOpen ? "rotate-180" : "rotate-0"
              } transition-transform duration-700 ease-out`}
            />
            <h3 className="font-bold text-xl">Mi lista ({myList.length})</h3>
          </div>
          <div
            className={`grid ${isOpen ? "grid-cols-4" : "grid-cols-1"} gap-4`}
            data-cy="my-list"
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
