import ListBooks from "./listBooks";

export default function PageBook({ books }) {
    return (
        <section className="books-container">
            <ListBooks
                books={books}
            />
        </section>
    );
}

