import { useContext, useEffect } from "react";
import { BooksLibrary } from "../components/BooksLibrary/BooksLibrary";
import { Header } from "../components/Header/Header";
import { ReadingList } from "../components/ReadingList/ReadingList";
import { BooksContext } from "../contexts/BooksContext";

export const HomeContainer = () => {
  const {
    books,
    moveToReadingList,
    readingList,
    moveToLibrary,
    filter,
    filterLibraryBooks,
  } = useContext(BooksContext);
  useEffect(() => {}, [books, readingList, filter]);

  return (
    <div className="font-lugarismo min-h-screen flex flex-col gap-8 px-8 py-4 lg:grid lg:grid-cols-[8fr_4fr] lg:px-16 lg:py-8 xl:grid-cols-[10fr_2fr]">
      <div className="flex flex-col gap-4">
        <Header />
        <BooksLibrary
          handleOnBookClick={moveToReadingList}
          handleFilter={filterLibraryBooks}
        />
      </div>
      <div className="bg-list-bg p-4 rounded-xl">
        <ReadingList handleOnBookClick={moveToLibrary} />
      </div>
    </div>
  );
};
