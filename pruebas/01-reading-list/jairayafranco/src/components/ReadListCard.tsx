import Card from "./Card";
import { useBookStore } from "../store/useBookStore";
import { Book } from "../interfaces/Book";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function ReadListCard({ book }: { book: Book }) {
    const { handleBookList } = useBookStore();
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: book.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div className="indicator animate__animated animate__fadeIn" style={style}>
            <span
                className="indicator-item badge badge-secondary badge-md"
                style={{ cursor: 'pointer' }}
                onClick={() => handleBookList(book, 'remove')}
            >
                X
            </span>
            <div
                ref={setNodeRef}
                {...attributes}
                {...listeners}
            >
                <Card book={book} className="w-32 h-44" />
            </div>
        </div>
    )
}