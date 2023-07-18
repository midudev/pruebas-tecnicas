import { useBooksStore } from "../store/booksStore";

const Book = ({ data }) => {
  const { setWantReadBooks, filterBooks } = useBooksStore() as any;

  const handleClick = (isbn: string) => {
    const index = filterBooks.findIndex((f) => {
      return f.book.ISBN === isbn;
    });

    const [wantRead] = filterBooks.splice(index, 1);

    setWantReadBooks(wantRead);

    // setBooks(filterBooks);
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
