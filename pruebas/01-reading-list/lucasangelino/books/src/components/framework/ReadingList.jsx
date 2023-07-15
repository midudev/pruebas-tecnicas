import Book from "./Book";

export const ReadingList = ({ readingList, removeFromReadingList }) => {
  return (
    <section className="flex flex-col p-2 gap-4">
      <h3 className="text-left text-3xl text-slate-800">Lista de lectura</h3>

      {readingList.length === 0 && <NoBooks />}
      {readingList.length > 0 && <BookCount count={readingList.length} />}

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {readingList.map((book) => {
          return (
            <li key={book.title}>
              <Book book={book} removeFromReadingList={removeFromReadingList} />
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
