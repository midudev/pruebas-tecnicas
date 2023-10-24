import Image from "next/image";
import Link from "next/link";

export default function RelatedList({ title, books }) {
  return (
    <div>
      {books.length > 0 && (
        <div>
          <span className="text-md font-medium">{title}</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {books.map((book) => (
              <div
                key={book.ISBN}
                className="relative h-[160px] w-[100px] cursor-pointer overflow-hidden rounded duration-75 ease-in hover:scale-105 hover:shadow-md"
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
        </div>
      )}
    </div>
  );
}
