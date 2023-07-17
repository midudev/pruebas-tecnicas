import Link from "next/link";

export default function Navigation() {
  return (
    <header className="sticky top-0 h-[70px] z-20 bg-gray-900 text-white shadow-md">
      <nav className="flex justify-between items-center h-full px-5 font-medium">
        <div>
          <Link href="/">Librería</Link> |<Link href="/reading-list"> Mi lista</Link>
        </div>
        <input type="search" placeholder="Buscar"></input>
      </nav>
    </header>
  );
}
