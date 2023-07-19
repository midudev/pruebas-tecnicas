import { useBooksStore } from "../store/booksStore";

const Book = ({ data }) => {
  const { setWantReadBooks, filteredBooks, books, setBooks } =
    useBooksStore() as any;

  const handleClick = (isbn: string) => {
    const index = filteredBooks.findIndex((f) => {
      return f.book.ISBN === isbn;
    });
    // const [wantRead] = filteredBooks.splice(index, 1);

    const filtered = filteredBooks.filter((f) => {
      return f.book.ISBN !== isbn;
    });
    console.log("filtered", filtered);
    console.log("books antes", books);
    setWantReadBooks(filteredBooks[index]);
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
