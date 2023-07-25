import { Book } from "../interfaces/Book";

export default function Card({ book, className = "" }: { book: Book, className?: string }) {
    return (
        <div className="flex flex-col">
            <img
                src={book.cover}
                alt={book.title}
                className={`rounded-lg shadow-lg ${className} object-fit`}
            />
        </div>
    );
}
