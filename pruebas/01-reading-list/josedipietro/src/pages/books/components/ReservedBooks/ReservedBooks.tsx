import BookTile from "../../../../components/BookTile/BookTile";
import useBooks from "../../../../store/store";

export const ReservedBooks = () => {
  const { books } = useBooks((state) => ({
    books: state.books,
  }));

  return (
    <section className="mt-4  w-full md:w-[420px] md:px-2 md:mt-0">
      <h3 className="p-4 font-extrabold bg-white text-3xl border border-black border-r-4 border-b-4 rounded-md">
        Lista de lectura
      </h3>
      <div className="mt-4 p-4 flex flex-wrap items-center justify-center bg-white border border-black border-r-4 border-b-4 rounded-md">
        {books
          .filter((book) => book.reserved)
          .map((book, index) => (
            <BookTile key={index} book={book}></BookTile>
          ))}
      </div>
    </section>
  );
};
