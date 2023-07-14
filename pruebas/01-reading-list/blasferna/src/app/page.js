import DATA from "@/books.json";
import Image from "next/image";

const groupByGenre = () => {
  return DATA.library.reduce((groups, item) => {
    const genre = item.book.genre;
    if (!groups[genre]) {
      groups[genre] = [];
    }
    groups[genre].push(item.book);
    return groups;
  }, {});
};

export default function Home() {
  const data = groupByGenre();
  return (
    <main className="bg-gray-900">
      <header className="sticky top-0 h-[70px] z-20 bg-gray-900 text-white shadow-md">
        <nav className="flex justify-between items-center h-full px-5 font-medium">
          <div>
          <a href="#">Librería</a> |<a href="#"> Mi lista</a>
          </div>
          <input type="search" placeholder="Buscar"></input>
        </nav>
      </header>
      <div className="px-5 pb-5">
      {Object.keys(data).map((row) => (
        <>
          <div className="font-medium mt-5 mb-2 text-white"> {row} </div>
          <div className="snap-x flex  w-full overflow-auto">
            <div className="snap-start shrink-0 flex gap-2 flex-nowrap overflow-hidden">
              {data[row].map((book) => (
                <div
                  key={book.ISBN}
                  className="relative w-40 h-60 rounded overflow-hidden"
                >
                  <Image
                    src={book.cover}
                    className="object-cover"
                    sizes="100vw"
                    fill={true}
                    alt={book.title}
                  ></Image>
                </div>
              ))}
            </div>
          </div>
        </>
      ))}
      </div>
    </main>
  );
}
