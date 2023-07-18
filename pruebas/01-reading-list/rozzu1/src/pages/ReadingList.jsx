import { Card } from "../components/Card";
import { bookStore } from "../state/bookStore";
export const ReadingList = () => {
  const { readingList } = bookStore();

  return (
    <div className="m-10 grid gap-5 grid-cols-1 xl:grid-cols-4">
      {readingList.map(({ book }) => (
        <Card
          key={book.ISBN}
          inReadingList={true}
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
