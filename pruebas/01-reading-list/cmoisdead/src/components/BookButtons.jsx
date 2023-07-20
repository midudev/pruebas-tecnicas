import { AiFillDelete, AiFillHeart } from "react-icons/ai";

export const BookButtons = ({ added, handleAdd, handleRemove }) => {
  return added ? (
    <button
      className="bg-red-700 text-neutral-900 hover:text-white transition-colors p-1 rounded-full absolute -top-2 -right-2"
      onClick={handleRemove}
    >
      <AiFillDelete />
    </button>
  ) : (
    <button
      className="bg-rose-700 text-neutral-900 hover:text-white transition-colors p-1 rounded-full absolute -top-2 -right-2"
      onClick={handleAdd}
    >
      <AiFillHeart />
    </button>
  );
};
