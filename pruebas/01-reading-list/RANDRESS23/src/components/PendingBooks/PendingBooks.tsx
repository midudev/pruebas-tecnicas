import styles from './styles/PendingBooks.module.css'
import { TitlesContainer } from '../TitlesContainer'
import { BookSign } from '../BookSign'
import { CarouselBooks } from '../CarouselBooks'

export const PendingBooks: React.FC = () => {
  return (
    <div className={styles.ShelfSectionPendingBooks}>
      <div className={styles.ShelfPendingBooks}>
        <TitlesContainer />
        <BookSign />
      </div>
      <CarouselBooks />
    </div>
  )
}
