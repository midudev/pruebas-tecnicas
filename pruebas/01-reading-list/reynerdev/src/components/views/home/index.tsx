import React from "react";
import { SearchInput } from "./SearchInput";
import { SliderCarousel } from "~/components/ui/SliderCarousel";
import { PreviewBookSection } from "./PreviewBookSection";
import { ReadingList } from "./ReadingList";
import { Select } from "~/components/ui/Select";
import { useBookShelf } from "~/hooks/useBookShelf";
export const MainSection = () => {
  const {
    updateReadingList,
    setSelectedGenre,
    setRandomBookFromList,
    availableSearchOptions,
    deleteBookFromReadingList,
    booksOnShelf: books,
    listTotalBooks,
    setSelectedPreviewBook,
    selectedPreviewBook,
    readingList,
    isBookAlreadyOnReadingList,
  } = useBookShelf();

  const gridCarouselSpan = selectedPreviewBook
    ? "col-start-2 col-span-1"
    : "col-start-2 col-span-2";

  const onClickReading = () => {
    setSelectedPreviewBook(null);
    if (selectedPreviewBook) {
      updateReadingList(selectedPreviewBook);
    }
  };

  const updateSelectedPreviewBook = (isbn: string) => {
    const book = listTotalBooks.find((book) => {
      return book.book.ISBN === isbn;
    });
    if (book) {
      setSelectedPreviewBook(book.book);
    }
  };

  return (
    <section className={`  min-h-screen  p-8`}>
      <div
        className={`grid h-full  min-h-screen grid-cols-mainColumnLayout grid-rows-mainRowLayout bg-gradient-to-r from-primary-50  from-70%  to-primary-100  to-70% py-8`}
      >
        <section className="row-span-4 mr-8 h-full border-r-2 border-primary-100"></section>
        <div className="flex items-center gap-8">
          <div className="w-[40%] flex-grow-0">
            <SearchInput />
          </div>
          <Select
            onChange={(newValue) => {
              setSelectedGenre(newValue === null ? newValue : newValue.value);
            }}
            placeHolder={"Select genre"}
            options={availableSearchOptions.genre}
            className="w-[40%] "
          />
        </div>
        <div className="col-start-2 flex items-center gap-3 py-8 pr-8 ">
          <div className="text-5xl font-medium"> My Books</div>
        </div>
        <div className={gridCarouselSpan}>
          <SliderCarousel
            books={books}
            onClick={(isbn) => updateSelectedPreviewBook(isbn)}
          />
        </div>
        {selectedPreviewBook ? (
          <div className="col-start-3 row-span-4 row-start-1">
            <PreviewBookSection
              isAlreadySelected={isBookAlreadyOnReadingList()}
              book={selectedPreviewBook}
              onClickReading={onClickReading}
            />
          </div>
        ) : null}
        <div className={`mt-8 flex w-full`}>
          <ReadingList
            handleEmptyList={() => setRandomBookFromList()}
            readingList={readingList}
            onClose={(isbn) => deleteBookFromReadingList(isbn)}
            onClick={(book) => updateSelectedPreviewBook(book.ISBN)}
          />
        </div>
      </div>
    </section>
  );
};
