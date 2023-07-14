import Book from "./Book";

export const ReadingList = ({ readingList, removeFromReadingList }) => {
  return (
    <section className="flex flex-col p-2">
      <h3 className="text-left text-3xl text-slate-800">Reading List</h3>

      {readingList.length === 0 && (
        <p className="text-xl text-left">No hay libros en tu lista 😢</p>
      )}
      <p className="text-left">{readingList.length} libro(s)</p>

      <ul className="flex flex-row gap-4">
        {readingList.map((book) => {
          return (
            <li key={book.title}>
              <div className="bg-gray-100 rounded-lg">
                <Book
                  book={book}
                  removeFromReadingList={removeFromReadingList}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ReadingList;
