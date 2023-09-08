import Book from "./Book.tsx";
import useBooks from "../hooks/useBooks.ts";

const BookList = () => {
    const books = useBooks();
    return(
        <div className="grid grid-cols-4 gap-6 m-4">
            {
                books.map((book) => (
                    <Book key={book.ISBN} book={book}/>
                ))
            }
        </div>
    )
}

export default BookList;