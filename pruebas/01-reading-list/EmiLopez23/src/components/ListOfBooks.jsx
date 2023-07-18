import { useReadingListContext } from "../context/ReadingListContext"
import Book from "./Book"

export default function ListOfBooks({books}){
    const {addBook} = useReadingListContext()
    function handleClick(index){
        const bookToAdd = books[index].book 
        addBook(bookToAdd)
    }

    return <div className="list-of-books">
        {books.map(({book},index)=><Book title={book.title} cover={book.cover} onClick={()=>handleClick(index)} key={book.ISBN}/>)}
    </div>
}