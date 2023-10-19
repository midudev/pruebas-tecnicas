import { motion } from "framer-motion";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../components/Button";
import HomeIcon from "../components/icons/HomeIcon";
import { ReadListContext } from "../context/ReadListContext";
import { IBook } from "../types";

export default function BookDetail() {
  const location = useLocation()
  const book = location.state as IBook;
  const { addToReadList, readList, removeFromReadList } = useContext(ReadListContext)

  if (!book) return <div>Book not found!</div>

  return (
    <main className="flex w-full md:h-screen bg-background">
      <div className="flex items-center max-w-4xl gap-8 mx-auto">
        <article className="flex flex-col items-center gap-20 p-8 rounded-lg bg-background-light md:flex-row md:gap-16 md:p-16">
          <motion.section
            className="flex flex-col items-center gap-y-4"
            layoutId={book.title}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={book.cover}
              className="rounded-lg max-w-[300px] min-w-[300px]"
            />
            <Link to="/" className="relative w-full py-2 text-center transition-colors duration-300 rounded-full bg-primary text-background font-pop hover:bg-background-light hover:text-primary hover:underline hover:underline-offset-4">
              <HomeIcon />
              <span className="pl-8">Back to Home</span>
            </Link>
            {
              readList.some(b => b.ISBN === book.ISBN)
                ? <Button
                  onClick={() => removeFromReadList(book)}
                  text="Remove from Read List"
                  remove={true}
                  className="w-full transition-colors duration-300 bg-red-800 hover:bg-red-950" />
                : <Button
                  onClick={() => addToReadList(book)}
                  text="Add to Read List"
                  className="w-full transition-colors duration-300 bg-secondary hover:bg-blue-950" />
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