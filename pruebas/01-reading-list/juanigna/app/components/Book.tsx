import Image from "next/image";
import { Book } from "../types";

export default function BookCard({ book, addBookToRead }: { book: Book, addBookToRead: (book: Book) => void }) {
    return (
        <div key={book.title} className="flex flex-col overflow-hidden rounded-lg border bg-gray-700 text-white">
            <div className="h-48 md:h-64 group relative block bg-gray-100">
                <Image src={book.cover} className="absolute inset-0 h-full w-full object-cover object-center" alt={book.title} width={500} height={500} />
            </div>
            <div className="flex flex-1 flex-col items-start p-2 sm:p-4">
                <p>{book.title}</p>
                <button className="p-1 bg-gray-600 rounded-sm mt-2" onClick={() => addBookToRead(book)}>Add to read list!</button>
            </div>
        </div>
    )
}