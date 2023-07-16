import DATA from "@/books.json";
import Navigation from "@/components/navigation";
import Image from "next/image";
import Link from "next/link";

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
    <>
      <Navigation></Navigation>
      <div className="px-5 pb-5">
        {Object.keys(data).map((row) => (
          <>
            <div className="font-medium mt-5 mb-2 text-white"> {row} </div>
            <div className="flex gap-2 flex-wrap overflow-hidden">
              {data[row].map((book) => (
                <div
                  key={book.ISBN}
                  className="relative w-40 h-60 rounded overflow-hidden cursor-pointer"
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
        ))}
      </div>
    </>
  );
}
