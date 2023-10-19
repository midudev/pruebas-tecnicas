import { Reorder } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ReadListContext } from "../context/ReadListContext";
import { IBook } from "../types";
import { CloseIcon } from "./icons/CloseIcon";
import InfoIcon from "./icons/InfoIcon";

export default function ReadBook({ book }: { book: IBook }) {
  const { removeFromReadList } = useContext(ReadListContext)

  return (
    <Reorder.Item
      value={book}
      id={book.ISBN}
      className="cursor-grab -mt-60"
      whileHover={{ height: 400 }}
      transition={{ duration: 0.3 }}
      layoutId={book.title}
    >
      <div
        className="relative w-[200px] h-[300px] rounded-lg border-2 border-background-light group read-book-container"
        style={{
          backgroundImage: `url(${book.cover})`,
          backgroundSize: 'cover',
        }}
      >
        <button
          onClick={() => removeFromReadList(book)}
          className="absolute rounded-full top-1 right-1"
        >
          <CloseIcon />
        </button>
        <Link
          to={`/book/${book.ISBN}`}
          state={book}
          className="absolute left-0 right-0 py-2 m-2 text-center transition-all duration-300 rounded-full opacity-0 hover:bg-primary top-16 hover:text-background group-hover:opacity-100 font-pop no-filter bg-background-light text-primary hover:underline-offset-4 hover:underline"
        >
          <InfoIcon />
          <span className="pl-6">View Details</span>
        </Link>
      </div>

    </Reorder.Item>
  )
}