import { Filters } from './Filters';

export function Header({ initialBooks, filteredBooks }) {
  return (
    <header className="grid my-12 px-4">
      <h1 className="text-3xl text-gray-50 font-bold flex gap-3 mb-2">
        Librería
      </h1>
      <h2 className="text-lg text-gray-300 flex gap-2 mb-8">
        <span className="font-normal" aria-label="initialBooksCount">
          {initialBooks.length}
        </span>
        libros disponibles
      </h2>
      <Filters />
      <span className="font-normal text-gray-50 mt-4">
        {filteredBooks.length} resultado(s)
      </span>
    </header>
  );
}
