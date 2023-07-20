import BookDetail from "@/components/book-detail";

export default function BookDetailPage({ params }) {
  const { isbn } = params;
  return (
    <>
      <div className="pb-5 text-white">
        <div className="flex gap-5 mt-5 flex-col md:flex-row">
          <BookDetail isbn={isbn}></BookDetail>
        </div>
      </div>
    </>
  );
}
