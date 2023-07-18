import { AiFillDelete, AiFillHeart } from "react-icons/ai";
import useBookStore from "../store/store";

export const Book = ({ book, added }) => {
  const { title, cover } = book;

  const handleRemove = () => {
    // remove the book from the list
    const current = JSON.parse(window.localStorage.getItem("current"));
    const newList = current.filter((item) => item.title !== title);
    window.localStorage.setItem("current", JSON.stringify(newList));
    useBookStore.setState({current: newList})
  };

  const handleAdd = () => {
    // add book to reading list
    const current = JSON.parse(window.localStorage.getItem("current")) || [];
    const exist = current.filter((item) => item.title == title)[0];
    if (exist) return;
    window.localStorage.setItem("current", JSON.stringify([...current, book]));
    useBookStore.setState({current: [...current, book]})
  };

  return (
    <div className="relative w-48 h-72">
      <div className="w-full h-full bg-neutral-800 border border-neutral-700 hover:border-neutral-500 hover:cursor-pointer transition-all">
        <img
          src={cover}
          alt={`${title} image`}
          className="object-cover w-full h-full"
        />
      </div>
      {added ? (
        <button
          className="bg-red-700 text-neutral-900 hover:text-white transition-colors p-1 rounded-full absolute -top-2 -right-2"
          onClick={handleRemove}
        >
          <AiFillDelete />
        </button>
      ) : (
        <button
          className="bg-sky-700 text-neutral-900 hover:text-white transition-colors p-1 rounded-full absolute -top-2 -right-2"
          onClick={handleAdd}
        >
          <AiFillHeart />
        </button>
      )}
    </div>
  );
};
