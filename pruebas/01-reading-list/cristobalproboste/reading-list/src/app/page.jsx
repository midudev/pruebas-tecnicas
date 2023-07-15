import booksService from "./services/books";
import Card from "./components/Card";
export default function Home() {
  const books = booksService.getBooks();
  const book = booksService.getBookByISBN("978-0486282114");
  return (
    <>
      <section className="mx-auto flex min-h-screen w-full">
        <aside className="relative hidden w-2/5 bg-red-400 sm:block">
          <section className="absolute max-h-screen w-full overflow-y-auto">
            <h1 className=" bg-blue-600 p-4 text-center text-2xl font-semibold text-white ">
              Liked Books
            </h1>
            <ul>
              {books.length &&
                books.map(({ book }) => {
                  return (
                    <li key={book.isbn} className="my-2">
                      <div className="bg-white bg-opacity-60 p-4">
                        {book.title} {book.year} {book.pages} xdddddddd
                      </div>
                    </li>
                  );
                })}
            </ul>
          </section>
        </aside>
        <Card book={book.book} />
      </section>
    </>
  );
}
