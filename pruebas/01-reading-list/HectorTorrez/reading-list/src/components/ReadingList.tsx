import { useDispatch } from "react-redux"
import { BooksState } from "../types/book"
import { deleteToReading } from "../store/readingList/slice"
import { addToListAgain } from "../store/books/slice"


export const ReadingList = (props: BooksState) => {
  const {title, pages, genre, cover, year, ISBN, author, synopsis} = props

  const dispatch = useDispatch()
  const handleDelete = (book: BooksState) => {
    dispatch(deleteToReading(book.title))
    dispatch(addToListAgain({
      book
    }))
  }
  
  return ( 
    <section className="flex h-52">
      <div className="flex h-52  overflow-hidden rounded-lg">
        <img src={cover} alt="" />
      </div>
    
      <div className=" flex flex-col h-52 justify-evenly">
        <p className="font-bold text-xl">Titulo: <span className="font-normal text-lg">{title}</span></p>
        <p className="font-bold text-xl">Genero: <span className="font-normal text-lg">{genre}</span></p>
        <p className="font-bold text-xl">Autor: <span className="font-normal text-lg">{author.name}</span></p>
  

      </div>
      <button 
        onClick={()=> handleDelete({
          title, pages, genre, cover, year, ISBN, author, synopsis
        })}
      >
        Delete
      </button>
    </section>
  )
}