import React from "react";
import { IBook } from "../types/books";

interface Props {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  book: IBook;
}

const BookModal: React.FC<Props> = ({ openModal, setOpenModal, book }) => {
  const { title, ISBN, author, cover, genre, pages, synopsis, year } =
    book.book;
  return (
    <div
      className={`${
        openModal ? "flex" : "hidden"
      }  fixed top-0 left-0 w-full h-full justify-center items-center z-20`}
    >
      <div
        className="fixed top-0 left-0 w-full h-full bg-stone-900 opacity-50"
        onClick={() => setOpenModal(!openModal)}
      ></div>
      <article className="relative z-30 bg-stone-50 rounded w-[40rem] h-[30rem]">
        <div className="flex items-start w-full h-full">
          <div className="w-1/2 h-full">
            <img src={cover} className="w-full h-full" alt={title} />
          </div>
          <div className="w-1/2 h-full relative flex flex-col gap-4 p-4 text-stone-800">
            <div>
              <h4 className="font-bold text-2xl">{title}</h4>
              <p className="text-sm">por {author.name}</p>
            </div>
            <p className="text-sm font-light">{synopsis}</p>
            <div className="text-sm border-t border-stone-200 pt-4 rounded">
              <h4 className="font-medium pb-2">Detalles</h4>
              <div className="flex flex-col gap-1">
                <p>
                  ISBN: <span>{ISBN}</span>
                </p>
                <p>
                  Género: <span>{genre}</span>
                </p>
                <p>
                  Páginas: <span>{pages}</span>
                </p>
                <p>
                  Año: <span>{year}</span>
                </p>
              </div>
            </div>
            <button
              className="absolute bottom-0 right-0 p-4 text-sm"
              onClick={() => setOpenModal(!openModal)}
            >
              Cerrar
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BookModal;
