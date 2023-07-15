import Book from "./Book";

export const Library = ({ library, addToReadingList }) => {
  return (
    <section>
      <h3 className="text-left text-3xl text-slate-800">Books</h3>
      <p className="text-left">{library.length} libro(s)</p>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {library.map(({ book }) => {
          return (
            <li key={book.title}>
              <Book book={book} addToReadingList={addToReadingList} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Library;
