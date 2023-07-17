import { type IWrapedBook } from '@/types'
import styles from './Book.module.css'

interface IProps {
  data: IWrapedBook
  onClick: () => void
}
export const Book: React.FC<IProps> = ({ data, onClick }) => {
  return (
    <div title={data.book.title} onClick={onClick}>
        <img className={styles.book__image} src={data.book.cover} alt={`${data.book.title} movie`}/>
    </div>
  )
}
