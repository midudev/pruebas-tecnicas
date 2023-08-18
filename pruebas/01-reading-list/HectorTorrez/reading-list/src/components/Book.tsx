import { BookProps } from "../types/book"


export const Book = ({book}: BookProps) => {
    const {title, pages, genre, cover, synopsis, year, ISBN, author} = book
  return (
    <section>
        <h1>{title}</h1>
    </section>
  )
}