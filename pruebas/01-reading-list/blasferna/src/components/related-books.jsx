import { getRelatedBooks } from "@/lib/books";
import RelatedList from "@/components/related-list";

export default function RelatedBooks({ book }) {
  const relatedBooks = getRelatedBooks(book);
  return (
    <RelatedList books={relatedBooks} title={"Libros similares"}></RelatedList>
  );
}
