import Book from "../../models/book";
import useBooks from "../../store/store";

const BookCover = ({ book }: { book: Book }) => {
  const { reserveBook } = useBooks((state) => ({
    reserveBook: state.reserveBook,
  }));

  const handleOnClick = () => {
    reserveBook(book);
  };

  return (
    <article className=" bg-white w-60 h-auto p-2 text-center flex flex-col items-center border-r-4 border-b-4 border-black border m-2 rounded-md">
      <img
        className="w-full h-80 object-fill"
        src={book.cover}
        alt={book.title}
      />
      <p className="text-lg font-bold">{book.title}</p>
      <button
        onClick={handleOnClick}
        className="mt-auto bg-[#7b3ace] hover:bg-[#6937b7] text-white font-bold py-2 px-4 rounded"
      >
        Agregar a la lista
      </button>
    </article>
  );
};

export default BookCover;
