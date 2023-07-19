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
    <div className="gap-8 grid grid-cols-[8fr_4fr] min-h-screen px-16 py-8 font-lugarismo">
      <div className="flex flex-col gap-8">
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
