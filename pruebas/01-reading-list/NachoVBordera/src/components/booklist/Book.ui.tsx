import { Book } from "../../types";

function BookUi({ book }: Book) {
  return (
    <>
      <p>{book.title}</p>
      <p>{book.author.name}</p>
      <p>{book.synopsis}</p>
    </>
  );
}

export default BookUi;
