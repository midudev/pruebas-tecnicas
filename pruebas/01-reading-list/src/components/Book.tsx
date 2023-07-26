import React, { useState } from "react";
import { IBook } from "../types/books";
import BookModal from "./BookModal";

interface Props {
  book: IBook;
  isInMyList: boolean;
  addToMyList: (book: IBook) => void;
  removeFromMyList: (book: IBook) => void;
}
const Book: React.FC<Props> = ({
  book,
  isInMyList,
  addToMyList,
  removeFromMyList,
}) => {
  const { title, author, cover } = book.book;

  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div>
      <article>
        <div className="group flex flex-col gap-4">
          <div className="relative">
            <div className="w-full h-full">
              <img
                src={cover}
                alt={title}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => {
                  if (isInMyList) {
                    setOpenModal(openModal);
                  } else {
                    setOpenModal(!openModal);
                  }
                }}
              />
            </div>
            <div className="grid place-items-center absolute p-2 opacity-0 bottom-0 left-0 right-0 group-hover:opacity-100 transition duration-500">
              {isInMyList ? (
                <button
                  className="bg-primary-green text-sm text-center py-1.5 px-4 rounded w-full z-10"
                  onClick={() => removeFromMyList(book)}
                >
                  Remove
                </button>
              ) : (
                <button
                  className="bg-primary-green text-sm text-center py-1.5 px-4 rounded w-full z-10"
                  onClick={() => addToMyList(book)}
                >
                  Add
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-col text-stone-800 text-center">
            <h4 className="font-medium text-lg">{title}</h4>
            <p className="text-sm">{author.name}</p>
          </div>
        </div>
      </article>
      <BookModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        book={book}
      />
    </div>
  );
};

export default Book;
