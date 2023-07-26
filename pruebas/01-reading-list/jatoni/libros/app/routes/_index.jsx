import { useOutletContext } from "@remix-run/react";
import { useEffect, useState } from "react";
import PageBook from "~/Components/books/booksPage";
import Filter from "~/Components/filter/filter";
import { BooksReading } from "~/Components/read/booksReading";
import StylesBooks from '~/styles/books.css';
import StylesFilter from '~/styles/filter.css';

export default function Index() {

  const [books, addListReading, listReading, quitCard, booksAvailable, bookSelect, setBooksAvailable] = useOutletContext();
  const [genre, setGenre] = useState("");

  useEffect(() => {
    if (genre === "") {
      setBooksAvailable(books);
    } else {
      const updateBooksGeneral = books.filter(book => book.book.genre === genre);
      if (listReading.length === 0) {
        setBooksAvailable(updateBooksGeneral);
      } else {
        let updateBooksAvailable = []
        for (let i = 0; i < updateBooksGeneral.length; i++) {
          for (let j = 0; j < listReading.length; j++) {
            if (updateBooksGeneral[i].book.ISBN !== listReading[j].book.ISBN) {
              updateBooksAvailable.push(updateBooksGeneral[i])
            }
          }
        }
        setBooksAvailable(updateBooksAvailable);
      }
    }
  }, [genre]);


  return (
    <>
      <Filter
        setGenre={setGenre}
      />
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
    </>
  );
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: StylesBooks
    },
    {
      rel: 'stylesheet',
      href: StylesFilter
    }
  ]
}