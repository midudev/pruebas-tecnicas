import Book from "./Book";

export const ReadingList = ({ readingList }) => {
  return (
    <section className="col-span-1 p-4 bg-gray-100 rounded-lg">
      <h3 className="text-left text-3xl text-slate-800">Lista de lectura</h3>

      {readingList.length === 0 && <NoBooks />}
      {readingList.length > 0 && <BookCount count={readingList.length} />}

      <ul className="flex flex-col gap-4 justify-center items-center">
        {readingList.map((book) => {
          return (
            <li key={book.title}>
              <Book book={book} removeFromReadingList={() => ""} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const NoBooks = () => (
  <p className="text-xl text-left">No hay libros en tu lista de lectura 😢</p>
);

const BookCount = ({ count }) => (
  <p className="text-left text-slate-400">{`${count} libro(s)`}</p>
);

export default ReadingList;
