import styles from './read.module.scss'
import Link from 'next/link'
import { Book } from "@/utils/types"

export default function ReadCard({book}: {
  book: Book
}){
  return (
    <li className={styles.book}>
      <Link href={`/book/${book.ISBN}`}>
        <div className={styles['book-image']}>
          <img src={book.cover} alt={book.title+' cover'} width={100} />
        </div>
        <div className={styles['book-info']}>
          <strong>{book.title}</strong>
        </div>
      </Link>
    </li>
  )
}