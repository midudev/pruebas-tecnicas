import { Variants, motion } from "framer-motion";
import "@/styles/book.css";
import { BookType } from "@/types/data";
import Loin from "./Loin";
import Cover from "./Cover";

interface BookProps {
  book: BookType;
  click: (b: BookType) => void;
}

const classNameFront =
  "after:content-[''] after:absolute after:top-[1px] after:bottom-[1px] after:left-[1px] after:w-[1px]";

const Book = ({ book, click }: BookProps) => {
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

  const frontVariant: Variants = {
    initial: {
      display: "block",
      position: "absolute",
      transformStyle: "preserve-3d",
      originX: 0,
      originY: "50%",
      z: "20px",
      zIndex: "10",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      },
    },
    hover: {
      rotateY: "35deg",
    },
  };

  return (
    <motion.div
      variants={bookVariant}
      initial="initial"
      whileHover="hover"
      onClick={(e) => click(book)}
    >
      <motion.div variants={frontVariant} className={classNameFront}>
        <Cover img={book.cover} />
      </motion.div>
      <Loin author={book.author.name} year={book.year} />
    </motion.div>
  );
};

export default Book;
