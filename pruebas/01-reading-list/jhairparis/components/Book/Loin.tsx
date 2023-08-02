import { IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { GrAdd } from "react-icons/gr";
import type { Variants } from "framer-motion";
import type { BookType } from "@/types/data";

type LoinProps = {
  book: BookType;
  openModal: (b: BookType) => void;
};

const Loin = ({ book, openModal }: LoinProps) => {
  const vDiv: Variants = {
    initial: {
      display: "block",
      position: "absolute",
      width: "40px",
      height: "var(--h)",
      left: "-20px",
      rotateY: "-90deg",
      backgroundColor: "rgba(232, 229, 234)",
    },
    hover: {},
  };
  const varinats: Variants = {
    initial: {
      display: "block",
      width: "calc(var(--h) - 10%)",
      height: "40px",
      originX: 0,
      originY: 0,
      originZ: 0,
      rotate: "90deg",
      x: "39px",
    },
    hover: {},
  };

  return (
    <motion.div variants={vDiv}>
      <motion.span
        variants={varinats}
        className="text-base pr-2.5 text-right text-black"
      >
        <IconButton
          aria-label="More about book"
          icon={<GrAdd />}
          colorScheme="blue"
          onClick={() => openModal(book)}
        />
        <span className="font-normal text-sm pr-5">{book.author.name}</span>
        <span className="font-sans font-semibold">{book.year}</span>
      </motion.span>
    </motion.div>
  );
};

export default Loin;
