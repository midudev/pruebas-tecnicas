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
  console.log(localStorage);

  return (
    <>
      <section className="SabedBooks">
        <ul>
          {books?.map((book: BookData, i) => (
            <li
              style={{
                backgroundColor: randomColors[i],
              }}
              key={book.ISBN}
            >
              <p>{book.title}</p>
              <button
                style={{
                  backgroundColor: randomColors[i - 1],
                }}
                onClick={() => removeBook(book.ISBN)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default SavedBooksList;
