import { Filters } from './Filters';

export function Header({ books }) {
  return (
    <header className="grid gap-8 place-content-center my-12 px-4">
      <h1 className="text-3xl text-gray-50 font-bold flex gap-3 justify-center">
        <span className='font-normal'>{books.length}</span>
        libros disponibles
      </h1>
      <Filters />
    </header>
  );
}
