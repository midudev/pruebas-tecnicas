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
        {booksToRead.map((book)=><article key={book.ISBN} className="reading-list-book">
            <button onClick={()=>handleDelete(book)} className="remove-btn"><CloseIcon/></button>
            <Book title={book.title} cover={book.cover} width={160}/>
            <div className="reading-book-description">
                <h2>{book.title}</h2>
                <h5>By: {book.author.name}</h5>
                <p>{book.synopsis}</p>
            </div>
        </article>)}
        {booksToRead.length===0 && <p className="empty-reading-list">No books in reading list</p>}
    </aside>
}