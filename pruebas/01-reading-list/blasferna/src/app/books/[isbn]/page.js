import DATA from "@/books.json";
import Navigation from "@/components/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import PlusButton from "@/components/plus-button";


const getAuthorOtherBooks = (book) => {
  const otherBooks = [];
  const array = book.author.otherBooks;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    try {
      otherBooks.push(getByTitle(element));
    } catch (error) {}
  }
  return otherBooks;
};

const getByISBN = (isbn) => {
  return DATA.library.find((obj) => obj.book.ISBN === isbn).book;
};

const getByTitle = (title) => {
  return DATA.library.find((obj) => obj.book.title === title).book;
};


export default function BookDetailPage({ params }) {
  const { isbn } = params;
  const book = getByISBN(isbn);
  const otherBooks = getAuthorOtherBooks(book);
  return (
    <>
      <Navigation></Navigation>
      <div className="px-5 pb-5 text-white">
        <Link href={"/"}>
          <ArrowLeftIcon className="h-6 w-6"></ArrowLeftIcon>
        </Link>
        <div className="flex gap-5 mt-5">
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
            {otherBooks.length > 0 &&
            <>
            <span className="font-medium text-lg">
            Más libros de {book.author.name}
          </span>
          <div className="flex flex-wrap gap-2">
            {otherBooks.map((book) =>(
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
            }
          </div>
        </div>
      </div>
    </>
  );
}
