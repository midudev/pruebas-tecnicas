import Image from "next/image";
import { Book } from "../types";

export default function BookReadList({ book, deleteBookFromList }: { book: Book, deleteBookFromList: (book: Book) => void }) {
    return (
        <div key={book.title} className="h-48 md:h-64 group relative bg-gray-100">
            <Image src={book.cover} className="first-letter:inset-0 h-full w-full object-cover object-center" alt={book.title} width={500} height={500} />
            <span onClick={() => deleteBookFromList(book)} className="pointer absolute z-50 top-0 right-0 text-gray-950 font-semibold p-2 bg-slate-500">x</span>
        </div>
    )
}