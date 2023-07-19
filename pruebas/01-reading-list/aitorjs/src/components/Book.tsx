import { useBooksStore } from "../store/booksStore";

const Book = ({ data }) => {
  const { setWantReadBooks, filterBooks, books, setBooks } =
    useBooksStore() as any;

  const handleClick = (isbn: string) => {
    const index = filterBooks.findIndex((f) => {
      return f.book.ISBN === isbn;
    });
    // const [wantRead] = filterBooks.splice(index, 1);

    const filtered = filterBooks.filter((f) => {
      return f.book.ISBN !== isbn;
    });
    console.log("filtered", filtered);
    console.log("books antes", books);
    setWantReadBooks(filterBooks[index]);
    console.log("books despues", books);

    setBooks(filtered);
  };

  return (
    <>
      <p key={data.ISBN}>
        <img
          src={data.cover}
          width={200}
          height={200}
          alt="alt image"
          onClick={() => {
            handleClick(data.ISBN);
          }}
          className="cursor-pointer"
        />
      </p>
    </>
  );
};

export default Book;
