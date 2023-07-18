import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ReadListContext } from "../context/ReadListContext";
import { IBook } from "../types";

export default function Book({ book }: { book: IBook }) {
  const { addToReadList } = useContext(ReadListContext)

  return (
    <motion.li className="relative group"
      whileHover={{ scale: 1.2 }}
    >
      <motion.img
        className="aspect-[3/4] rounded-lg border-2 border-gray-500 object-cover group-hover:opacity-50 transition-opacity duration-300"
        src={book.cover}
        layoutId={book.title}
        transition={{ duration: 0.3 }}
      />
      <Link
        to={`/book/${book.ISBN}`}
        state={book}
        className="absolute left-0 right-0 py-2 m-2 bg-gray-200 rounded-full opacity-0 text-[14px] bottom-16 group-hover:opacity-100 font-pop text-xs text-gray-950 text-center"
      >
        View Details
      </Link>
      <button
        className="absolute left-0 right-0 py-2 m-2 bg-cyan-800 rounded-full opacity-0 text-[14px] bottom-6 group-hover:opacity-100 font-pop text-xs text-center"
        onClick={() => addToReadList(book)}
      >
        Add to Read
      </button>
    </motion.li>
  )
}