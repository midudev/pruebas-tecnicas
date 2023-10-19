import { useDispatchActions } from "@/Hooks/useDispatchActions";
import { BookProps } from "@/interfaces/Book.interface";

const AddToRead = ({ book }: { book: BookProps }) => {
  const { handleAddBookToRead } = useDispatchActions();
  return (
    <button
      className="bg-green-500 p-1 rounded-xl mx-auto my-1 font-Anton"
      onClick={() => handleAddBookToRead(book)}
    >
      Agregar libro
    </button>
  );
};

export default AddToRead;
