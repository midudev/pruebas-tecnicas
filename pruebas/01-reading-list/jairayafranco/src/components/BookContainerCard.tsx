import { Book } from '../interfaces/Book';
import { useBookStore } from '../store/useBookStore';
import Card from './Card';

export default function BookContainerCard({ book }: { book: Book }) {
    const { handleBookList, setModalBook } = useBookStore();

    const handleModal = (book: Book) => {
        const modal = document.querySelector('#my_modal');

        if (modal instanceof HTMLDialogElement) {
            setModalBook(book);
            modal.showModal();
        }
    }

    return (
        <div className="flex flex-col items-center gap-2 animate__animated animate__fadeIn">
            <button onClick={() => handleModal(book)}>
                <Card book={book} className="w-44 h-64" />
            </button>
            <button className='btn btn-primary btn-sm' onClick={() => handleBookList(book, 'add')}>
                📖 Agregar a lista
            </button>
        </div>
    );
}
