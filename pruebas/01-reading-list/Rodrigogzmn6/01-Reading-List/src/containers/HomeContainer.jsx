import { useContext, useEffect } from "react";
import { BooksLibrary } from "../components/BooksLibrary/BooksLibrary";
import { Header } from "../components/Header/Header";
import { ReadingList } from "../components/ReadingList/ReadingList";
import { BooksContext } from "../contexts/BooksContext";

export const HomeContainer = () => {
  const { genders, books, moveToReadingList, readingList, moveToLibrary } =
    useContext(BooksContext);
  useEffect(() => {}, [books, readingList]);

  return (
    <div className="bg-slate-600 gap-8 grid grid-cols-[8fr_4fr] min-h-screen px-16 py-8 font-lugarismo text-white">
      <div className="flex flex-col gap-8">
        <Header />
        <BooksLibrary
          filterList={genders}
          libraryBooks={books}
          handleOnBookClick={moveToReadingList}
        />
      </div>
      <div className="lista de lectura bg-slate-900 p-4 rounded-xl">
        <ReadingList
          readingListBooks={readingList}
          handleOnBookClick={moveToLibrary}
        />
      </div>
    </div>
  );
};
