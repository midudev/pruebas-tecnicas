import Book from "../book";
import useBookList from "@/hooks/usebookList";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "../modal";

const BookList = () => {
  const { bookList, selectedBook, setSelectedBook } = useBookList();

  return (
    <>
      <section>
        <div className="book-list" data-testid="book-list">
          <AnimatePresence mode={"popLayout"}>
            {bookList.length ? (
              bookList.map((data) => {
                return (
                  <Book
                    data={data}
                    key={data.ISBN}
                    setSelectedBook={setSelectedBook}
                  />
                );
              })
            ) : (
              <div className="book-list_empty">Sin libros para mostrar.</div>
            )}
          </AnimatePresence>
        </div>
      </section>
      <Modal selectedBook={selectedBook} setSelectedBook={setSelectedBook} />
    </>
  );
};
export default BookList;
