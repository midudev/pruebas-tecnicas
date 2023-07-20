import { useAvailableBooksContext } from "../context/AvailableBooksContext"
import { useReadingListContext } from "../context/ReadingListContext"
import CloseIcon from "../icons/CloseIcon"
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
        <div className="reading-list-header">
            <h1>Reading List</h1>
            <button className="remove-btn"><CloseIcon/></button>
        </div>
        {booksToRead.map((book)=><article key={book.ISBN} className="reading-list-book">
            <button onClick={()=>handleDelete(book)} className="remove-btn"><CloseIcon/></button>
            <Book title={book.title} cover={book.cover} width={160}/>
            <div className="reading-book-description">
                <h2>{book.title}</h2>
                <p>{book.synopsis}</p>
            </div>
        </article>)}
    </aside>
}