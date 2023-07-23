import { getRelatedBooks } from "@/lib/books";
import Image from "next/image";
import Link from "next/link";

export default function RelatedBooks({ book }) {
  const relatedBooks = getRelatedBooks(book);

  return (
    <div>
      {relatedBooks.length > 0 && (
        <div>
          <span className="text-md font-medium">
            Libros similares
          </span>
          <div className="flex flex-wrap gap-2 mt-2">
            {relatedBooks.map((book) => (
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
