import { Filters } from './Filters';

export function Header() {
  return (
    <header className="grid gap-8 mb-16">
      <h1 className="text-3xl text-gray-50 font-bold flex gap-3 mb-2">
        Mi Librería
      </h1>
      <Filters />
    </header>
  );
}
