import Book from "../../models/book";
import useBooks from "../../store/store";
import DeleteIcon from "@mui/icons-material/Delete";

const BookTile = ({ book }: { book: Book }) => {
  const { unReserveBook } = useBooks((state) => ({
    unReserveBook: state.unReserveBook,
  }));

  const handleOnClick = () => {
    unReserveBook(book);
  };

  return (
    <article className="my-2 w-full px-4 py-2 flex border border-black border-r-4 border-b-4 rounded-md">
      <img className="h-24 object-contain" src={book.cover} alt={book.title} />
      <div className="ml-4 flex flex-col">
        <p className="text-lg font-bold">{book.title}</p>
        <p className="text-lg ">Autor: {book.author.name}</p>
        <button
          className="bg-[#7b3ace] hover:bg-[#6937b7] text-white font-bold py-2 px-4 rounded"
          onClick={handleOnClick}
        >
          <DeleteIcon></DeleteIcon>
        </button>
      </div>
    </article>
  );
};

export default BookTile;
