import { useAvailableBooksContext } from "../context/AvailableBooksContext"
import { useReadingListContext } from "../context/ReadingListContext"
import Book from "./Book"

export default function BooksToRead(){
    const {booksToRead,removeBook} = useReadingListContext()
    const {addBookToAvailable} = useAvailableBooksContext()

    function handleDelete(book){
        console.log(book)
        removeBook(book.ISBN)
        addBookToAvailable(book)
    }

    return <aside className="reading-list">
        {booksToRead.map((book)=><article key={book.ISBN} className="reading-list-book">
            <button onClick={()=>handleDelete(book)} className="remove-btn">×</button>
            <Book title={book.title} cover={book.cover}/>
        </article>)}
    </aside>
}