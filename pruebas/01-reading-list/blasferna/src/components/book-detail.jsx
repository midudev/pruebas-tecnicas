import AddButton from "@/components/add-button";
import { getAuthorOtherBooks, getByISBN } from "@/lib/books";
import Image from "next/image";
import Link from "next/link";

export default function BookDetail({ isbn }) {
  const book = getByISBN(isbn);
  const otherBooks = getAuthorOtherBooks(book);
  return (
    <>
      <div className="flex justify-center lg:flex-none lg:justify-start">
        <div>
          <Image
            src={book.cover}
            className="object-cover rounded shadow"
            width={234}
            height={363}
            alt={book.title}
          ></Image>
        </div>
      </div>
      <div>
        <h1 className="font-medium text-3xl mb-1">{book.title}</h1>
        <p className="text-gray-300 mb-2">{book.synopsis}</p>
        <AddButton isbn={book.ISBN}></AddButton>

        <div className="text-sm mt-2">
          <span className="text-gray-300">Género:</span> {book.genre}
        </div>
        <div className="text-sm">
          <span className="text-gray-300">Año:</span> {book.year}
        </div>
        <div className="text-sm">
          <span className="text-gray-300">Autor:</span> {book.author.name}
        </div>
        <div className="text-sm">
          <span className="text-gray-300">ISBN:</span> {book.ISBN}
        </div>
        <div className="text-sm">{book.pages} páginas</div>
        {otherBooks.length > 0 && (
          <div className="mt-2">
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
          </div>
        )}
      </div>
    </>
  );
}
