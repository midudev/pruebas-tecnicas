import { Card } from "./Card";
export const BookList = ({ books, readingList }) => {
  const isBookInReadingList = (ISBN) => {
    return readingList.some((b) => b.book.ISBN === ISBN);
  };

  return (
    <section className="grid gap-5 grid-cols-1 xl:grid-cols-4">
      {books.map(({ book }) => (
        <Card
          key={book.ISBN}
          inReadingList={isBookInReadingList(book.ISBN)}
          title={book.title}
          pages={book.pages}
          genre={book.genre}
          synopsis={book.synopsis}
          cover={book.cover}
          ISBN={book.ISBN}
        />
      ))}
    </section>
  );
};
