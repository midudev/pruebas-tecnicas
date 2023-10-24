import { IBook } from '@/types';
import Book from './Book';

type Props = {
  library: IBook[];
  libraryKey: string;
};

export default function LibraryList({ library, libraryKey }: Props) {
  return (
    <section>
      {library.length > 0 ? (
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-10">
          {library.map((book) => (
            <li key={libraryKey + book.ISBN}>
              <Book bookData={book} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-lg">
          <p>Aún no agregaste libros</p>
          <p>¡Guarda libros para que los tengas rapidamente al alcance!</p>
        </div>
      )}
    </section>
  );
}
