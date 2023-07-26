import BookDetail from "@/components/book-detail";
import OtherBooks from "@/components/other-books";
import RelatedBooks from "@/components/related-books";
import { getByISBN } from "@/lib/books";

export default function BookInfoPage({ params }) {
  const { isbn } = params;
  const book = getByISBN(isbn);

  return (
    <>
      <div className="pb-5 text-white">
        <section className="flex gap-5 mt-5 flex-col md:flex-row">
          <BookDetail book={book}></BookDetail>
        </section>
        <section className="mt-8">
          <RelatedBooks book={book}></RelatedBooks>
        </section>
        <section className="mt-8">
          <OtherBooks book={book}></OtherBooks>
        </section>
      </div>
    </>
  );
}
