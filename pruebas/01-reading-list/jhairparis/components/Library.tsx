"use client";
import { useGlobalState } from "@/lib/globalContext";
import { Card, CardHeader, CardBody, Divider } from "@chakra-ui/react";
import Book from "./Book";
import Filters from "./Filters";
import { AnimatePresence, motion } from "framer-motion";

const Library = () => {
  const { data, addRead } = useGlobalState();

  return (
    <Card maxW="fit-content">
      <CardHeader>
        <Filters />
      </CardHeader>
      <CardBody>
        <Divider />
        <ul
          className="relative p-5 w-[clamp(360px,60vw,900px)] grid gap-2.5 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]"
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
                <Book key={book.ISBN} book={book} click={addRead} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </CardBody>
    </Card>
  );
};

export default Library;
