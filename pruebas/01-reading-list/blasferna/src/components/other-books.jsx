import { getAuthorOtherBooks } from "@/lib/books";
import RelatedList from "@/components/related-list";

export default function OtherBooks({ book }) {
  const otherBooks = getAuthorOtherBooks(book);
  return (
    <RelatedList
      books={otherBooks}
      title={`Más libros de ${book.author.name}`}
    ></RelatedList>
  );
}
