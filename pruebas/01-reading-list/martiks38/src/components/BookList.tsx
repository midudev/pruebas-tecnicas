import Image from 'next/image'

import { useBookList } from '@/hooks/useBookList'

import { toast } from 'react-toastify'

import { BookDataList } from '@/assets/values'
import bookListStyles from '@/assets/styles/Book/BookList.module.css'
import bookButton from '@/assets/styles/Book/Button.module.css'

type BookListProps = { books: BookDataList; listType: 'available' | 'reading' }

export const generateLabelListOfBooks = (listType: 'available' | 'reading', title: string) => {
  return listType === 'available'
    ? `Agregar ${title} a la lista de lectura`
    : `Remover ${title} de la lista de lectura`
}

export function BookList({ books, listType }: BookListProps) {
  const { addToReadingList, removeFromReadingList } = useBookList()

  const typeIsAvailable = listType === 'available'

  const buttonAction = ({ ISBN, title }: { ISBN: string; title: string }) => {
    if (typeIsAvailable) {
      addToReadingList({ ISBN })
      toast.success(`Se ha añadido: ${title}`)
    } else {
      removeFromReadingList({ ISBN })
      toast.success(`Se ha removido: ${title}`)
    }
  }

  return (
    <ul className={bookListStyles.bookList}>
      {books.map(({ cover, ISBN, title }) => {
        return (
          <li key={ISBN} suppressHydrationWarning>
            <figure className={bookListStyles.bookList__item}>
              <div className={bookListStyles.bookList__item__imageContainer}>
                <Image src={cover} alt={title} width={145} height={217} />
              </div>
              <figcaption className={bookListStyles.bookList__item__description}>
                <h3 className={bookListStyles.bookList__item__descriptionTitle}>{title}</h3>
                <button
                  className={bookButton.actionButton}
                  onClick={() => buttonAction({ ISBN, title })}
                  aria-label={generateLabelListOfBooks(listType, title)}
                >
                  <span> {typeIsAvailable ? 'Añadir' : 'Remover'}</span>
                </button>
              </figcaption>
            </figure>
          </li>
        )
      })}
    </ul>
  )
}
