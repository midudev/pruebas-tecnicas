import { useBooks } from '@hooks/index'
import { BookCard } from './book-card'

export function BooksList () {
  const { books } = useBooks()

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 '>
      {books?.map(
        ({ title, cover, ISBN, author: { name }, ...restProps }) => {
          return (
            <BookCard
              key={ISBN}
              bookId={ISBN}
              title={title}
              cover={cover}
              author={name}
              isAdded={Boolean(restProps?.isAdded)}
            />
          )
        }
      )}
    </section>
  )
}
