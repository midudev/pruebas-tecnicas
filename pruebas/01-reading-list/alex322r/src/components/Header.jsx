import Filters from "./Filters";

export default function Header({ library, readingList }) {
    return (
        <header style={{ textAlign: 'center' }}>
            <h2>{library.length} libros disponible</h2>
            <p>{readingList.length} en la lista de lectura</p>
            <Filters />
        </header>
    )
}