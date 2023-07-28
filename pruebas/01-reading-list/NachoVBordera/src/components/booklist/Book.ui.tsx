import { Book } from "../../types";

function BookUi({ book }: Book) {
  return (
    <>
      <section className="bookUi">
        <img src={book.cover} alt="" />

        <p>{book.title}</p>
        <p>{book.author.name}</p>
        <p>{book.synopsis}</p>
      </section>
    </>
  );
}

export default BookUi;
