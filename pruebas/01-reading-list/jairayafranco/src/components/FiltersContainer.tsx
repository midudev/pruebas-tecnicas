import SearchBook from "./features/SearchBook";
import GenreDropdown from "./features/GenreDropdown";
import BookRangePages from "./features/BookRangePages";
import { useBookStore } from "../store/useBookStore";

export default function FiltersContainer() {
    const { filterBooks, resetFilterBooksParams } = useBookStore();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        filterBooks()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="sm:flex flex-row gap-10">
                <SearchBook />
                <GenreDropdown />
                <BookRangePages />
            </div>
            <div className="flex gap-1 mt-2">
                <button className="btn btn-sm btn-accent" type="submit">Buscar</button>
                <button className="btn btn-sm btn-secondary" onClick={resetFilterBooksParams}>Limpiar</button>
            </div>
        </form>
    );
}
