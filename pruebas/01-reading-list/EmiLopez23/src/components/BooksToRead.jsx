import { useReadingListContext } from "../context/ReadingListContext"
import Book from "./Book"

export default function BooksToRead(){
    const {booksToRead,removeBook} = useReadingListContext()

    return <aside>
        {booksToRead.map(({title,cover,ISBN})=><article key={ISBN}>
            <button onClick={()=>removeBook(ISBN)}>×</button>
            <Book title={title} cover={cover}/>
        </article>)}
    </aside>
}