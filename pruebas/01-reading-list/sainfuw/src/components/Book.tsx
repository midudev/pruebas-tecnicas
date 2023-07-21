import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ReadListContext } from "../context/ReadListContext";
import { IBook } from "../types";
import Button from "./Button";
import InfoIcon from "./icons/InfoIcon";

export default function Book({ book }: { book: IBook }) {
  const { addToReadList } = useContext(ReadListContext)

  return (
    <motion.li className="relative group h-auto w-[100%] rounded-lg shadow-md shadow-gray-800"
    >
      <motion.img
        className="aspect-[2/3] object-cover group-hover:opacity-50 transition-opacity duration-300 rounded-lg"
        src={book.cover}
        layoutId={book.title}
        transition={{ duration: 0.3 }}
      />
      <div className="absolute left-0 right-0 flex flex-col gap-3 transition-opacity duration-300 opacity-0 bottom-4 group-hover:opacity-100 font-pop text-background">
        <Link
          to={`/book/${book.ISBN}`}
          state={book}
          className="py-2 mx-2 text-center transition-all duration-300 rounded-full hover:bg-primary hover:text-background font-pop bg-background-light text-primary hover:underline-offset-4 hover:underline"
        >
          <InfoIcon />
          <span className="pl-9">View Details</span>
        </Link>
        <Button
          onClick={() => addToReadList(book)}
          text="Add to Read"
          className="bg-secondary hover:bg-blue-950"
        />
      </div>
    </motion.li>
  )
}