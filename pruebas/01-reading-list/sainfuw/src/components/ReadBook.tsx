import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { IBook } from "../types";
import { CloseIcon } from "./icons/CloseIcon";

export default function ReadBook({ book }: { book: IBook }) {
  const { removeFromReadList } = useContext(AppContext)

  return (
    <motion.li
      className="relative -mt-60 group"
      whileHover={{ height: 400 }}
    >
      <button
        onClick={() => removeFromReadList(book)}
        className="absolute right-1 top-1"
      >
        <CloseIcon />
      </button>
      <Link
        to={`/book/${book.ISBN}`}
        className="absolute left-0 right-0 hidden py-2 m-2 text-center bg-gray-200 rounded-full top-16 text-gray-950 group-hover:block"
      >
        View Details
      </Link>
      <motion.img
        src={book.cover}
        alt={book.title}
        className="aspect-[3/4] w-full rounded-lg border-2 border-gray-500 object-cover"
        layoutId={book.title}
        transition={{ duration: 0.3 }}
      />
    </motion.li>
  )
}