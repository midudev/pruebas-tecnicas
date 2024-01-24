import { AiFillDelete, AiFillHeart } from "react-icons/ai";

export const BookButtons = ({ added, handleAdd, handleRemove }) => {
  return added ? (
    <button
      className="absolute -right-2 -top-2 rounded-full bg-red-700 p-1 text-neutral-900 transition-colors hover:text-white"
      onClick={handleRemove}
    >
      <AiFillDelete />
    </button>
  ) : (
    <button
      className="absolute -right-2 -top-2 rounded-full bg-rose-700 p-1 text-neutral-900 transition-colors hover:text-white"
      onClick={handleAdd}
    >
      <AiFillHeart />
    </button>
  );
};
