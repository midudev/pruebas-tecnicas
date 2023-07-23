import BookDetail from "@/components/book-detail";
import Modal from "@/components/modal";
import { getByISBN } from "@/lib/books";


export default function BookDetailModalPage({ params }) {
  const { isbn } = params;
  const book = getByISBN(isbn);
  return (
    <Modal>
      <div className="flex flex-col gap-5 rounded-md bg-gray-800 p-5 text-white lg:flex-row">
        <BookDetail book={book} seeMore></BookDetail>
      </div>
    </Modal>
  );
}
