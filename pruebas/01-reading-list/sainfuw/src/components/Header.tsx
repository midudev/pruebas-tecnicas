import { motion } from "framer-motion";
import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import { ReadListContext } from "../context/ReadListContext";
import { useFilters } from "../hooks/useFilters";
import { Filters } from "./Filters";

export default function Header() {
  const { books } = useContext(BooksContext)
  const { readList } = useContext(ReadListContext)
  const { filterBooks } = useFilters()
  const filteredBooks = filterBooks()

  const title = Array.from('BookStore')

  return (
    <header className='flex flex-col items-center justify-between mt-8 px-11 md:flex-row-reverse'>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-primary"
      >
        {title.map((letter, index) => (
          <motion.span
            key={index}
            className="text-8xl lg:text-9xl font-pp"
            variants={child}
            whileHover={{ color: `#67dcf8`, textDecoration: 'underline', scale: 2 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
      <section className="flex p-6 rounded-lg bg-background-light text-primary">
        <div className="flex flex-col min-w-[220px] justify-around">
          <h3 className="font-pop">Total books: {books.length}</h3>
          {filteredBooks.length !== books.length && (
            <h3 className="font-pop">Total filtered books: {filteredBooks.length}</h3>
          )}
          {readList.length > 0 && (
            <h3 className="font-pop">Total read in list: {readList.length}</h3>
          )}
        </div>
        <Filters />
      </section>
    </header>
  );
}

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: i * 0.04 }
  })
}

const transition = {
  transition: {
    type: 'spring',
    stiffness: 200,
    damping: 20
  }
}

const child = {
  hidden: {
    opacity: 0,
    ...transition
  },
  visible: {
    opacity: 1,
    ...transition
  }
}