import { motion } from "framer-motion";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReadListContext } from "../context/ReadListContext";
import { IBook } from "../types";

export default function BookDetail() {
  const location = useLocation()
  const book = location.state as IBook;
  const { addToReadList, readList, removeFromReadList } = useContext(ReadListContext)

  if (!book) return <div>Book not found!</div>

  return (
    <main className="flex w-full h-screen bg-background">
      <div className="flex items-center max-w-4xl gap-8 mx-auto">
        <article className="flex items-center p-16 rounded-lg gap-x-20 bg-background-light">
          <motion.section
            className="flex flex-col items-center gap-y-4"
            layoutId={book.title}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={book.cover}
              className="rounded-lg max-w-[300px] min-w-[300px]"
            />
            <Link to="/" className="w-full py-2 text-center rounded-full bg-primary text-background">Back to Home</Link>
            {
              readList.some(b => b.ISBN === book.ISBN)
                ? (
                  <button
                    onClick={() => removeFromReadList(book)}
                    className="w-full py-2 text-center bg-red-800 rounded-full text-primary"
                  >
                    Remove From Read
                  </button>
                )
                : (
                  <button
                    onClick={() => addToReadList(book)}
                    className="w-full py-2 text-center rounded-full text-primary bg-secondary"
                  >
                    Add to Read
                  </button>
                )
            }
          </motion.section>

          <section className="flex flex-col gap-2 text-primary">
            <h1 className="mb-4 text-7xl font-pp">{book.title}</h1>
            <div className="flex gap-16 [&>*]:font-pop-light [&>*]:text-xs text-gray-400">
              <p>Year: {book.year}</p>
              <p>ISBN: {book.ISBN}</p>
              <p>Pages: {book.pages}</p>
            </div>

            <p className="font-pop [text-wrap:balance] my-4">Synopsis: {book.synopsis}</p>

            <div className="grid grid-cols-[60px_1fr] gap-x-2">
              <h4>Genre:</h4>
              <p>{book.genre}</p>
              <h4>Author:</h4>
              <p>{book.author.name}</p>
            </div>

            <p className="mt-4 font-pop">Other Books:</p>
            <ul className="max-w-md pl-10 space-y-1 list-disc list-inside">
              {book.author.otherBooks.map(b => <li key={b}>{b}</li>)}
            </ul>
          </section>
        </article>
      </div>
    </main>
  )
}