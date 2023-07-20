import Modal from "@/components/modal";
import BookDetail from "@/components/book-detail";

export default function BookDetailModalPage({ params }) {
  const { isbn } = params;
  return (
    <Modal>
      <div className="flex gap-5 text-white bg-gray-800 p-5 rounded-md flex-col lg:flex-row">
        <BookDetail isbn={isbn}></BookDetail>
      </div>
    </Modal>
  );
}
