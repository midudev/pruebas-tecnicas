import { BookData, useBookContext } from "../../context/SavedContext";

function SavedBooksList() {
  const { books, removeBook } = useBookContext();
  const randomColors = [
    "#fff700",
    "#FF5E5E",
    "#00FF75",
    "#39DBFF",
    "#FFB443",
    "#fff700",
    "#FF5E5E",
    "#00FF75",
    "#39DBFF",
    "#FFB443",
    "#fff700",
    "#FF5E5E",
    "#00FF75",
    "#39DBFF",
    "#FFB443",
  ];

  return (
    <>
      <section className="SabedBooks">
        <h2>saved</h2>
        <ul>
          {books?.map((book: BookData, i) => (
            <li
              style={{
                backgroundColor: randomColors[i],
              }}
              key={book.ISBN}
            >
              <p>{book.title}</p>
              <span onClick={() => removeBook(book.ISBN)}>X</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default SavedBooksList;
