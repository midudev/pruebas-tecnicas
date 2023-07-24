import { motion, AnimatePresence } from "framer-motion";
import AddOrRemoveReadingList from "@/components/addOrRemoveReadingList";
import Image from "next/image";

const Modal = ({ selectedBook, setSelectedBook }) => {
  return (
    <AnimatePresence>
      {selectedBook && (
        <motion.div className="modal">
          <motion.div className="modal-container">
            <motion.div
              className="modal-back"
              onClick={() => {
                setSelectedBook(null);
              }}
            />
            <motion.div className="moda-body" layoutId={selectedBook.ISBN}>
              <button
                className="modal-close"
                onClick={() => {
                  setSelectedBook(null);
                }}
              >
                <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
                  <path
                    fill="currentColor"
                    d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
                  />
                </svg>
              </button>
              <div className="modal-book-content">
                <picture>
                  <Image
                    src={selectedBook.cover}
                    width={200}
                    height={335}
                    alt={`Portada del libro "${selectedBook.title}"`}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <AddOrRemoveReadingList ISBN={selectedBook.ISBN} />
                </picture>
                <div className="modal-book-content_data">
                  <h3>{selectedBook.title}</h3>
                  <p className="author">{selectedBook.author.name}</p>
                  <p className="genre">{`${selectedBook.genre} - ${selectedBook.pages} páginas - ${selectedBook.year}`}</p>
                  <p className="synopsis">{selectedBook.synopsis}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
