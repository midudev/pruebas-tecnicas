import { useAvailableBooksContext } from "../context/AvailableBooksContext"
import { useReadingListContext } from "../context/ReadingListContext"
import Book from "./Book"

export default function ListOfBooks({showReadingList}){
    const {addBook} = useReadingListContext()
    const {availableBooks,removeBookFromAvailable} = useAvailableBooksContext()
    
    function handleClick(index){
        const bookToAdd = availableBooks[index].book 
        addBook(bookToAdd)
        removeBookFromAvailable(bookToAdd.ISBN)
        showReadingList(true)
    }

    return <div className="list-of-books">
        {availableBooks.map(({book},index)=><Book className={"book-container"} title={book.title} cover={book.cover} authorName={book.author.name} synopsis={book.synopsis} onClick={()=>handleClick(index)} key={book.ISBN}/>)}
    </div>
}