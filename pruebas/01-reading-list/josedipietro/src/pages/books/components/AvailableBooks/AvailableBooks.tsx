import { useEffect, useState } from "react";
import BookCover from "../../../../components/BookCover/BookCover";
import FiltersHeader from "../../../../components/FiltersHeader/FiltersHeader";
import Book from "../../../../models/book";
import useBooks, { State } from "../../../../store/store";

export const AvailableBooks = () => {
  const { books, genreFilter, pagesFilter } = useBooks((state: State) => ({
    books: state.books,
    genreFilter: state.genreFilter,
    pagesFilter: state.pagesFilter,
  }));
  const [booksToShow, setBooksToShow] = useState<Book[]>([]);

  useEffect(() => {
    let auxBooks = books
      .filter((book) => !book.reserved)
      .filter((book) => (pagesFilter ?? 0) > book.pages);

    if (genreFilter && genreFilter != "")
      auxBooks = auxBooks.filter((book) => book.genre === genreFilter);

    setBooksToShow(auxBooks);
  }, [books, genreFilter, pagesFilter]);

  return (
    <div className="w-full flex flex-col">
      <section>
        <FiltersHeader></FiltersHeader>
      </section>
      <section className="mt-3 grid grid-cols-autofill justify-around gap-4 bg-white border border-black border-r-4 border-b-4 rounded-md">
        {booksToShow.map((book, index) => (
          <BookCover key={index} book={book}></BookCover>
        ))}
      </section>
    </div>
  );
};
