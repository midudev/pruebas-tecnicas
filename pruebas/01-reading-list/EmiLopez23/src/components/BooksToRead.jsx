import { useAvailableBooksContext } from "../context/AvailableBooksContext"
import { useReadingListContext } from "../context/ReadingListContext"
import CloseIcon from "../icons/CloseIcon"
import Book from "./Book"

export default function BooksToRead({showReadingList}){
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
            <button className="remove-btn" onClick={()=>showReadingList(false)}><CloseIcon/></button>
        </div>
        {booksToRead.map((book)=><Book className={"reading-book-container"} title={book.title} authorName={book.author.name} synopsis={book.synopsis} cover={book.cover} width={160}>
        <button onClick={()=>handleDelete(book)} className="remove-btn"><CloseIcon/></button>
        </Book>)}
        {booksToRead.length===0 && <p className="empty-reading-list">No books in reading list</p>}
    </aside>
}
//