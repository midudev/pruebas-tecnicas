import { useOutletContext } from "@remix-run/react";
import PageBook from "~/Components/books/booksPage";
import { BooksReading } from "~/Components/read/booksReading";
import StylesBooks from '~/styles/books.css';

export default function Index() {

  const [addListReading, listReading, setListReading, quitCard, booksAvailable] = useOutletContext();

  return (
    <div className="container-home">
      <PageBook
        books={booksAvailable}
        addListReading={addListReading}
      />
      {listReading.length > 0 ? (
        <BooksReading
          listReading={listReading}
          quitCard={quitCard}
        />
      ) : (
        null
      )}
    </div>
  );
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: StylesBooks
    }
  ]
}