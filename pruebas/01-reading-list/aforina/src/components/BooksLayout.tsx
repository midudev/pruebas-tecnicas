import { useEffect } from 'react'
import { Book } from './Book'
import { useBooks, useListedBooks } from '../store/useBooks'
import { useSearch } from 'wouter/use-location'
import Grid from './dnd/Grid'

export const BooksLayout = () => {
  const { availableBooks, addCompleteList, order, category, pages } = useBooks()
  const { listedIds } = useListedBooks()

  const search = useSearch()
  const queryString = new URLSearchParams(search).get('filter') ?? ''

  useEffect(() => {
    window.addEventListener('storage', event => {
      if (
        event.key === useListedBooks.persist.getOptions().name &&
        event.newValue
      ) {
        useListedBooks.persist.rehydrate()
      }
    })

    const completeList = availableBooks.filter(({ book }) =>
      listedIds.includes(book.ISBN)
    )

    addCompleteList(completeList)
  }, [])

  return (
    <Grid>
      {availableBooks
        .filter(({ book }) =>
          book.title.toLowerCase().includes(queryString.toLowerCase().trim())
        )
        .filter(({ book }) => book.pages < (pages || Infinity))
        .filter(({ book }) => book.genre === category || category === '')
        .sort((a, b) => {
          if (order === 'Newest') {
            return b.book.year - a.book.year // Ordena de mayor a menor (más reciente a más antiguo).
          } else if (order === 'Oldest') {
            return a.book.year - b.book.year // Ordena de menor a mayor (más antiguo a más reciente).
          } else {
            return 0 // No se aplica ordenamiento si el valor de `order` no es válido.
          }
        })
        .map(({ book }, index) => {
          return (
            <Book
              key={index}
              title={book.title}
              pages={book.pages}
              genre={book.genre}
              cover={book.cover}
              synopsis={book.synopsis}
              year={book.year}
              ISBN={book.ISBN}
              author={book.author}
            ></Book>
          )
        })}
    </Grid>
  )
}
