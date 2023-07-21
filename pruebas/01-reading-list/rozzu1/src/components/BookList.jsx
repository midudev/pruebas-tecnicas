import { Card } from "./Card";
export const BookList = ({ books, readingList }) => {
  const readingListSet = new Set(readingList.map((b) => b.book.ISBN));

  return (
    <div className="mb-10 grid gap-5 grid-cols-1 xl:grid-cols-4">
      {books.map(({ book }) => (
        <Card
          key={book.ISBN}
          inReadingList={readingListSet.has(book.ISBN)}
          title={book.title}
          pages={book.pages}
          genre={book.genre}
          synopsis={book.synopsis}
          cover={book.cover}
          ISBN={book.ISBN}
        />
      ))}
    </div>
  );
};
