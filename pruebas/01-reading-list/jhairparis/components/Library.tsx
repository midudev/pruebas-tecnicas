"use client";
import { useGlobalState } from "@/lib/globalContext";
import { Text } from "@chakra-ui/react";
import Book from "./Book";
import { AnimatePresence, motion } from "framer-motion";
import type { BookType } from "@/types/data";

type LibraryProps = {
  openModal: (b: BookType) => void;
};

const Library = ({ openModal }: LibraryProps) => {
  const { data, addRead } = useGlobalState();

  return (
    <>
      <ul
        className="relative p-5 w-full grid gap-2.5 grid-col-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
        style={{ perspective: "3000px" }}
      >
        <AnimatePresence>
          {data.library.map(({ book }) => (
            <motion.li
              className="card"
              key={book.ISBN}
              animate={{
                scale: 1,
                transition: { delay: 0.5, type: "spring" },
              }}
              exit={{
                opacity: 0,
                transition: { delay: 0.5 },
              }}
              layout
            >
              <Book
                key={book.ISBN}
                book={book}
                click={addRead}
                openModal={openModal}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      <Text fontSize="md" align="right">
        {data.isFilter[0]
          ? `${data.library.length} Filtrado${
              data.library.length === 1 ? "" : "s"
            } de ${data.total}`
          : `Mostrando ${data.total - data.nRead} de ${data.total}`}
      </Text>
    </>
  );
};

export default Library;
