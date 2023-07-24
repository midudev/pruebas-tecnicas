import { useContext } from "react";
import { Book } from "../Book/Book";
import { BooksContext } from "../../contexts/BooksContext";

export const BooksLibrary = ({ handleOnBookClick, handleFilter }) => {
  const { genders, books, filter, booksPages } = useContext(BooksContext);
  return (
    <div className="books-library flex flex-col gap-2">
      <div className="flex flex-col gap-6 md:flex-row md:gap-10 ">
        <div className="flex flex-col gap-1 sm:text-xl">
          <h4>Género</h4>
          <select
            className="max-w-min bg-main-bg"
            onChange={(e) =>
              handleFilter({
                ...filter,
                gender: e.target.value,
              })
            }
          >
            {genders.map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1 sm:text-xl">
          <h4>Número de páginas</h4>
          <div className="flex gap-4">
            <input
              type="range"
              className="max-w-min bg-main-bg"
              min={0}
              max={Math.max(...booksPages)}
              onChange={(e) =>
                handleFilter({
                  ...filter,
                  minPages: e.target.value,
                })
              }
            />
            <label>{filter.minPages}</label>
          </div>
        </div>
        <div className="flex flex-col gap-1 sm:text-xl">
          <h4>Título</h4>
          <input
            className="max-w-min bg-main-bg"
            placeholder="The greatest book ever..."
            onChange={(e) =>
              handleFilter({
                ...filter,
                title: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div className="gap-4 grid grid-cols-2 place-items-center sm:grid-cols-4 sm:gap-8 xl:gap-16">
        {books.map((book) => (
          <Book
            key={book.book.ISBN}
            book={book.book}
            onClick={handleOnBookClick}
            filter={filter}
          />
        ))}
      </div>
    </div>
  );
};
