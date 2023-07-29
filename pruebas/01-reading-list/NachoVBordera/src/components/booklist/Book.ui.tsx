import { useBookContext } from "../../context/SavedContext";
import { Book } from "../../types";

function BookUi({ book }: Book) {
  const { addBook } = useBookContext();
  return (
    <>
      <section
        className="bookUi"
        onClick={() => {
          addBook({ title: book.title, ISBN: book.ISBN });
        }}
      >
        <img src={book.cover} alt="" />

        <p>{book.title}</p>
        <p>{book.author.name}</p>
        <p>{book.synopsis}</p>
      </section>
    </>
  );
}

export default BookUi;
