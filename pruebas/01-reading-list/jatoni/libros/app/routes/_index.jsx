import { useLoaderData, useOutletContext } from "@remix-run/react";
import PageBook from "~/Components/books/booksPage";
import { BooksReading } from "~/Components/read/booksReading";
import { getAllBooks } from "~/data/books";
import StylesBooks from '~/styles/books.css';

export default function Index() {

  const [addListReading, listReading] = useOutletContext();
  const books = useLoaderData();
  return (
    <div className="container-home">
      <PageBook
        books={books}
      />
      {listReading.length > 0 ? (
        <BooksReading
          listReading={listReading}
        />
      ) : (
        null
      )}
    </div>
  );
}

export async function loader() {
  const books = await getAllBooks();
  return books;
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: StylesBooks
    }
  ]
}