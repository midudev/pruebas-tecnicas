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
                className="relative h-32 w-20 cursor-pointer overflow-hidden rounded"
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
