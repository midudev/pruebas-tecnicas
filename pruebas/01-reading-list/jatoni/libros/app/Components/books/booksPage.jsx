import ListBooks from "./listBooks";

export default function PageBook({ books, addListReading }) {
    return (
        <section className="books-container">
            <ListBooks
                books={books}
                addListReading={addListReading}
            />
        </section>
    );
}

