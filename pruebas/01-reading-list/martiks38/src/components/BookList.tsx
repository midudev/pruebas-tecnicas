import Image from 'next/image'

import { useBookList } from '@/hooks/useBookList'

import { toast } from 'react-toastify'

import { BookDataList } from '@/assets/values'
import bookListStyles from '@/assets/styles/Book/BookList.module.css'
import bookButton from '@/assets/styles/Book/Button.module.css'
import { buttonTitles } from '@/assets/constants'

type BookListProps = { books: BookDataList; listType: 'available' | 'reading' }

export const generateLabelListOfBooks = (listType: 'available' | 'reading', title: string) => {
  return listType === 'available'
    ? `Agregar ${title} a la lista de lectura`
    : `Remover ${title} de la lista de lectura`
}

export function BookList({ books, listType }: BookListProps) {
  const { addToReadingList, removeFromReadingList } = useBookList()

  const typeIsAvailable = listType === 'available'

  const lineStyle = typeIsAvailable ? bookButton.addButton__line : bookButton.removeButton__line

  const buttonAction = (isbn: { ISBN: string }) => {
    if (typeIsAvailable) {
      addToReadingList(isbn)
      toast.success('Libro añadido')
    } else {
      removeFromReadingList(isbn)
      toast.success('Libro removido')
    }
  }

  return (
    <ul className={bookListStyles.bookList}>
      {books.map(({ cover, ISBN, title }) => {
        return (
          <li key={ISBN}>
            <figure className={bookListStyles.bookList__item}>
              <div className={bookListStyles.bookList__item__imageContainer}>
                <Image src={cover} alt={title} width={145} height={217} />
              </div>
              <figcaption className={bookListStyles.bookList__item__description}>
                <h3 className={bookListStyles.bookList__item__descriptionTitle}>{title}</h3>
                <button
                  className={bookButton.actionButton}
                  onClick={() => buttonAction({ ISBN })}
                  title={buttonTitles[listType]}
                  aria-label={generateLabelListOfBooks(listType, title)}
                >
                  <span className={lineStyle}></span>
                </button>
              </figcaption>
            </figure>
          </li>
        )
      })}
    </ul>
  )
}
