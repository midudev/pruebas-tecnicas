import { useFetchBooks } from "../hooks/useFetchBooks"
import { Book } from "./Book";

export const Library = () => {
    const { books } = useFetchBooks();
    console.log(books)
    return (
        <section class="library">
            <section class="library__books-available">
                {
                    books.map(book =>
                        (
                            <Book key={book.title} book={book} />
                        )
                    )
                }
            </section>
            <section class="library___selected-book-metadata">

            </section>
        </section>
    )
}