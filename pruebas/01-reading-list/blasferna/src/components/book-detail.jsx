import PlusButton from "@/components/plus-button";
import { getAuthorOtherBooks, getByISBN } from "@/lib/books";
import Image from "next/image";
import Link from "next/link";

export default function BookDetail({ isbn }) {
  const book = getByISBN(isbn);
  const otherBooks = getAuthorOtherBooks(book);
  return (
    <>
      <Image
        src={book.cover}
        className="object-cover rounded shadow"
        width={234}
        height={363}
        alt={book.title}
      ></Image>
      <div>
        <h1 className="font-medium text-3xl">{book.title}</h1>
        <p>{book.synopsis}</p>
        <PlusButton isbn={book.ISBN}></PlusButton>
        <div>Género: {book.genre}</div>
        <div>Año: {book.year}</div>
        <div>Autor: {book.author.name}</div>
        <div>ISBN: {book.ISBN}</div>
        <div>{book.pages} páginas</div>
        {otherBooks.length > 0 && (
          <>
            <span className="font-medium text-lg">
              Más libros de {book.author.name}
            </span>
            <div className="flex flex-wrap gap-2">
              {otherBooks.map((book) => (
                <div
                  key={book.ISBN}
                  className="relative w-20 h-32 rounded overflow-hidden cursor-pointer"
                >
                  <Link href={`/books/${book.ISBN}`}>
                    <Image
                      src={book.cover}
                      className="object-cover"
                      sizes="100vw"
                      fill={true}
                      alt={book.title}
                    ></Image>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
