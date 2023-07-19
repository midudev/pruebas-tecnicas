import { useBooksStore } from "../store/booksStore";

const ReadList = () => {
  const { wantReadBooks, filterBooks, setBooks } = useBooksStore() as any;

  const handleClick = (isbn: string) => {
    const index = wantReadBooks.findIndex((f) => {
      return f.book.ISBN === isbn;
    });
    console.log("index", index, wantReadBooks);
    const [wantNoRead] = wantReadBooks.splice(index, 1);

    console.log("new books", [...filterBooks, wantNoRead]);
    // setWantReadBooks(wantReadBooks);

    setBooks([...filterBooks, wantNoRead]);
  };

  return (
    <>
      <span>Lista de lectura ({wantReadBooks.length})</span>
      {wantReadBooks.map(({ book }) => (
        <p key={book.ISBN}>
          - {book.title} <a onClick={() => handleClick(book.ISBN)}>Cerrar</a>
        </p>
      ))}
    </>
  );
};

export default ReadList;
