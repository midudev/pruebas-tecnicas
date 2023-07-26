import { ReadingListIcon } from './Icons';

export function Header() {
  return (
    <header className="flex items-center justify-between my-12 px-4">
      <h1 className="text-3xl font-bold text-white text-center">
        Libros disponibles
      </h1>
      <button>
        <ReadingListIcon />
      </button>
    </header>
  );
}
