import { useContext } from 'react'
import { BookInformation } from './BookInformation'
import { BooksContext } from '../context/BooksContext'

export function BookList () {
  const { books } = useContext(BooksContext)
  // const mappedBooksInformation = books.map((item) => {
  //   return {
  //     title: item.book.title,
  //     cover: item.book.title,
  //     ISBN: item.book.ISBN,
  //     genre: item.book.genre,
  //     pages: item.book.pages,
  //     sypnosis: item.book.synopsis,
  //     author: item.book.author.name,
  //     otherBooks: item.book.author.otherBooks,
  //     year: item.book.year,
  //     isSaved: item.book.isSaved ?? false
  //   }
  // })
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
      {books.map((data, index) => {
        return (
            <BookInformation book={data} key={index}/>
        )
      })}
    </ul>
  )
}
