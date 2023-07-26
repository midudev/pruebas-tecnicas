"use client";
import { useGlobalState } from "@/lib/globalContext";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Book from "./Book";
import Filters from "./Filters";

const Library = () => {
  const { data, addLibrary, addRead } = useGlobalState();

  return (
    <>
      <Heading>Digital library</Heading>
      <div>
        <Text fontSize="md">{data.total - data.nRead} libros disponibles</Text>
        <Text fontSize="sm">{data.nRead} en lista de lectura</Text>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-4">
            <Filters />
          </div>
          {data.library.map(({ book }) => (
            <Book key={book.ISBN} book={book} click={addRead} />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {data.read.map((book) => (
            <Book key={book.ISBN} book={book} click={addLibrary} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Library;
