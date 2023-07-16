import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { libraryData } from '@data/library';
import Image from 'next/image';

interface Props {
  params: { id: string };
}

export default function BookDetail({ params: { id } }: Props) {
  const book = libraryData.find(({ book }) => book.ISBN === id)?.book;
  if (!book) return <h1>Book not found</h1>;
  return (
    <>
      <Header />
      <main className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            alt={book.title}
            src={book.cover}
            className="max-w-sm rounded-lg shadow-2xl"
            width={300}
            height={300}
            loading="lazy"
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl">
              <strong>Título:</strong> {book.title}
            </h2>
            <h3 className="text-3xl">
              <strong>Autor:</strong> &nbsp;
              {book.author.name}
            </h3>
            <h4 className="flex gap-3 items-center">
              <strong className="text-xl">Otros libros del autor:&nbsp;</strong>
              <div className="flex flex-wrap gap-2">
                {book.author.otherBooks.length > 0 ? (
                  book.author.otherBooks.map((item) => (
                    <div className="badge badge-accent" key={item}>
                      {item}
                    </div>
                  ))
                ) : (
                  <span className="text-warning">No hay otros libros del autor</span>
                )}
              </div>
            </h4>
            <span>
              <strong className="text-lg">Género:</strong>&nbsp;
              {book.genre}
            </span>
            <p className="text-justify">
              <strong className="text-lg">Sinopsis:</strong>&nbsp;
              {book.synopsis}
            </p>
            <span>
              <strong className="text-lg">ISBN:</strong>&nbsp;
              {book.ISBN}
            </span>
            <span>
              <strong className="text-lg">Año de publicación:</strong>&nbsp;
              {book.year}
            </span>
            <span>
              <strong className="text-lg">Páginas:</strong>&nbsp;
              {book.pages}
            </span>
            <Button className="btn btn-secondary max-w-[200px]" book={book} />
          </div>
        </div>
      </main>
    </>
  );
}
