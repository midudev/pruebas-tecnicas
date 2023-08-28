import { motion } from "framer-motion";
import Loin from "./Loin";
import Cover from "./Cover";
import "@/styles/book.css";
import type { Variants } from "framer-motion";
import type { BookType } from "@/types/data";

interface BookProps {
  book: BookType;
  click: (b: BookType) => void;
  openModal: (b: BookType) => void;
}

const Book = ({ book, click, openModal }: BookProps) => {
  const bookVariant: Variants = {
    initial: {
      position: "relative",
      display: "block",
      width: "var(--w)",
      height: "var(--h)",
      margin: "5% auto",
      transformStyle: "preserve-3d",
      transition: { duration: 0.5 },
    },
    hover: {
      rotateY: "35deg",
    },
  };

  const openDrawer = () => click(book);

  return (
    <motion.div
      variants={bookVariant}
      initial="initial"
      whileHover="hover"
      id={book.ISBN}
    >
      <Cover img={book.cover} openDrawer={openDrawer} />
      <Loin book={book} openModal={openModal} />
    </motion.div>
  );
};

export default Book;
