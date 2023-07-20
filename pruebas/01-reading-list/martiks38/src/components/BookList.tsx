import Image from 'next/image'

import { BookDataList } from '@/assets/values'

import bookListStyles from '@/assets/styles/Book/BookList.module.css'
import bookButton from '@/assets/styles/Book/Button.module.css'

type BookListProps = { books: BookDataList; listType: 'available' | 'reading' }

export function BookList({ books, listType }: BookListProps) {
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
                <button className={bookButton.actionButton}>
                  <span
                    className={
                      listType === 'available'
                        ? bookButton.addButton__line
                        : bookButton.removeButton__line
                    }
                  ></span>
                </button>
              </figcaption>
            </figure>
          </li>
        )
      })}
    </ul>
  )
}
