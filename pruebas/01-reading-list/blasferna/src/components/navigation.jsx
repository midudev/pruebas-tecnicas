export default function Navigation() {
  return (
    <header className="sticky top-0 h-[70px] z-20 bg-gray-900 text-white shadow-md">
      <nav className="flex justify-between items-center h-full px-5 font-medium">
        <div>
          <a href="#">Librería</a> |<a href="#"> Mi lista</a>
        </div>
        <input type="search" placeholder="Buscar"></input>
      </nav>
    </header>
  );
}
