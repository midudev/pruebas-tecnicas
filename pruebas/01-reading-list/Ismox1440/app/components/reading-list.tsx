"use client";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, Sparkles, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import useStore from "../store";
import { Book } from "@/models/book";
import { motion } from "framer-motion";

const ReadingListBook = ({
  book,
  transitionDuration,
}: {
  book: Book;
  transitionDuration: number;
}) => {
  const removeBook = useStore((state) => state.removeBook);
  return (
    <motion.article
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: transitionDuration }}
      className="flex gap-4 w-full p-2 rounded relative"
    >
      <button
        className="absolute top-0 right-0 border rounded p-1 hover:bg-gray-200 transition-all text-gray-400 cursor-pointer"
        onClick={() => removeBook(book)}
      >
        <X size={16} />
      </button>
      <img className="rounded max-w-[70px]" src={book.cover} alt="" />
      <div className="flex flex-col justify-between ">
        <div>
          <h4>{book.title}</h4>
          <p className="text-sm">{book.author.name}</p>
        </div>

        <span className="flex  text-gray-400 gap-1 text-sm items-center ">
          <Calendar size={16} strokeWidth={2} /> {book.year}
        </span>
        <span className="flex  text-gray-400 gap-1 text-sm items-center ">
          <FileText size={16} strokeWidth={2} /> {book.pages}
        </span>
      </div>
    </motion.article>
  );
};

const ReadingList = () => {
  const readingList = useStore((state) => state.readingList);
  return (
    <ScrollArea className="border lg:w-[500px] bg-gray-50 p-4 rounded">
      <h2 className="flex font-bold gap-2">
        <Sparkles />
        Reading List
      </h2>
      <div className="flex flex-col p-2 gap-4 mt-6">
        {readingList.map((book, index) => (
          <ReadingListBook
            transitionDuration={0.3}
            key={book.ISBN}
            book={book}
          />
        ))}
      </div>
    </ScrollArea>
  );
};

export default ReadingList;
