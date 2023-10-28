import { BookCard } from "@/components";
import { BookStoreItem } from "@/types";

interface BookListProps {
  books: BookStoreItem[];
  listed?: boolean;
}

const BookList: React.FC<BookListProps> = ({ books, listed }) => {

  const bookList = listed
    ? [...books].sort((a, b) => a.order - b.order)
    : books;

  const classes = listed
    ? "flex flex-col items-center gap-5"
    : "grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8";
  return (
    <div className={books.length > 0 ? classes : "flex justify-center"}>
      {books.length === 0 && (
        <>
          <p className="text-gray-500 text-lg">
            {listed ? "No tienes libros en tu Reading List.." : "UPS! No se encontraron libros..."}
          </p>
        </>
      )}
      {bookList.map((book) => (
        <BookCard
          key={book.ISBN}
          book={book}
          listed={listed}
        />
      ))}
    </div>
  );
};

export default BookList;
