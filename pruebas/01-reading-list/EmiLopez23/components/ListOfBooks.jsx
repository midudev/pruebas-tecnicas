import Book from "./Book";


export default function ListOfBooks({books}){
    function handleClick(index){
        localStorage.setItem("toRead",JSON.stringify(books[index].book))
    }

    return <div className="ListOfBooks">
        {books.map(({book},index)=><Book title={book.title} cover={book.cover} onClick={()=>handleClick(index)} key={book.ISBN}/>)}
    </div>
}