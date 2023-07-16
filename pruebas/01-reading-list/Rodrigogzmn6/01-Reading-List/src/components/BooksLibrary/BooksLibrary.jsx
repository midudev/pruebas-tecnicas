import { Book } from "../Book/Book";

export const BooksLibrary = ({
  filterList,
  libraryBooks,
  handleOnBookClick,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h4>Filtrar por género</h4>
        <select onChange={(e) => console.log(e)}>
          {filterList.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>
      <div className="gap-8 grid grid-cols-4 place-items-center">
        {libraryBooks.map((book) => (
          <Book
            key={book.book.ISBN}
            book={book.book}
            onClick={handleOnBookClick}
          />
        ))}
      </div>
    </div>
  );
};
