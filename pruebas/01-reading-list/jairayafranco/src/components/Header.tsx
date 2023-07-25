import { useBookStore } from "../store/useBookStore";

export default function Header() {
    const { books, toReadBooks } = useBookStore();

    return (
        <div>
            <h1 className="text-4xl font-bold">
                {books.library.length} libros disponibles
            </h1>
            <h1 className="text-2xl font-bold mb-3">
                {toReadBooks.length} en la lista de lectura
            </h1>
            <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden">
                Ver lista de lectura
            </label>
        </div>
    );
}
