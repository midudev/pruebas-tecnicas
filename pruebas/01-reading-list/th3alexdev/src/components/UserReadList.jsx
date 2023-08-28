import { useContext } from "react";
import { ReadListContext } from "../context/contextUserListProvider";
import { DeleteBookIcon } from "./Icons";

export default function UserReadList() {
  const { savedBooks, removeBook } = useContext(ReadListContext);

  return (
    <ul className="flex flex-col gap-4">
      {savedBooks.length ? (
        savedBooks?.map((book) => (
          <li key={book.ISBN}>
            <article className="relative flex gap-3 py-2 px-2 items-center rounded-md group">
              <span
                onClick={() => removeBook(book.ISBN)}
                className="absolute top-[-8px] left-[-8px] opacity-0 group-hover:opacity-100 transition-opacity bg-[#64748b66] flex hover:bg-slate-700 rounded-full"
              >
                <button className="block opacity-70 hover:opacity-100 px-2 py-2">
                  <DeleteBookIcon />
                </button>
              </span>
              <img
                src={book.cover}
                alt={`Cubierta de ${book.title}`}
                className="w-28 h-40 object-cover"
              />
              <div className="flex flex-col justify-between">
                <h2
                  className="h-max text-lg font-semibold mb-2"
                  title={book.title}
                >
                  {book.title}
                </h2>
                <p className="leading-5 text-sm line-clamp-3 mb-2">
                  {book.synopsis}
                </p>
                <div className="flex justify-between">
                  <p className="text-base opacity-60">{book.year}</p>
                  <p className={`text-base`}>{book.pages} pág.</p>
                </div>
              </div>
            </article>
          </li>
        ))
      ) : (
        <div className="h-[calc(100vh-120px)] flex justify-center items-center flex-col gap-8">
          <p className="text-xl">¡La lista está vacía!</p>
        </div>
      )}
    </ul>
  );
}
