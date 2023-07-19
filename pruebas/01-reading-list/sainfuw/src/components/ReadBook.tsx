import { Reorder } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ReadListContext } from "../context/ReadListContext";
import { IBook } from "../types";
import { CloseIcon } from "./icons/CloseIcon";

export default function ReadBook({ book }: { book: IBook }) {
  const { removeFromReadList } = useContext(ReadListContext)

  return (
    <Reorder.Item
      value={book}
      id={book.ISBN}
      className="group cursor-grab -mt-60"
      whileHover={{ height: 400 }}
      transition={{ duration: 0.3 }}
      layoutId={book.title}
    >
      <div
        className="relative w-[200px] h-[300px] rounded-lg border-2 border-background-light"
        style={{
          backgroundImage: `url(${book.cover})`,
          backgroundSize: 'cover'
        }}
      >
        <button
          onClick={() => removeFromReadList(book)}
          className="absolute p-2 rounded-full right-1 top-1"
        >
          <CloseIcon />
        </button>
        <Link
          to={`/book/${book.ISBN}`}
          state={book}
          className="absolute left-0 right-0 hidden py-2 m-2 text-center rounded-full bg-primary top-16 text-background group-hover:block"
        >
          View Details
        </Link>
      </div>

    </Reorder.Item>
  )
}