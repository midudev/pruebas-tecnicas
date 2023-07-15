import Book from "../book";
import useBookList from "@/hooks/usebookList";
import { AnimatePresence, motion } from "framer-motion";

const BookList = () => {
  const { bookList } = useBookList();

  return (
    <section>
      <div className="book-list">
        <AnimatePresence mode={"popLayout"}>
          {bookList.length ? (
            bookList.map((data) => {
              return <Book data={data} key={data.ISBN} />;
            })
          ) : (
            <div className="book-list_empty">Sin libros para mostrar.</div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
export default BookList;
