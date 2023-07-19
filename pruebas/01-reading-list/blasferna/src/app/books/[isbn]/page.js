import BookDetail from "@/components/book-detail";
import Navigation from "@/components/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function BookDetailPage({ params }) {
  const { isbn } = params;
  return (
    <>
      <Navigation></Navigation>
      <div className="px-5 pb-5 text-white">
        <Link href={"/"}>
          <ArrowLeftIcon className="h-6 w-6"></ArrowLeftIcon>
        </Link>
        <div className="flex gap-5 mt-5">
          <BookDetail isbn={isbn}></BookDetail>
        </div>
      </div>
    </>
  );
}
