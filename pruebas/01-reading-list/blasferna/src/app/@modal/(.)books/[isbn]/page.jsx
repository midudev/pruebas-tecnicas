import Modal from "@/components/modal";
import BookDetail from "@/components/book-detail";

export default function BookDetailModalPage({ params }) {
  const { isbn } = params;
  return (
    <Modal>
      <BookDetail isbn={isbn}></BookDetail>
    </Modal>
  );
}
