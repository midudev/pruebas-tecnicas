import styles from './styles/PendingBooks.module.css'
import { TitlesContainer } from '../TitlesContainer'
import { BookSign } from '../BookSign'
import { CarouselBooks } from '../CarouselBooks'

export const PendingBooks: React.FC = () => {
  return (
    <section className={styles.ShelfSectionPendingBooks}>
      <article className={styles.ShelfPendingBooks}>
        <TitlesContainer />
        <BookSign />
      </article>
      <CarouselBooks />
    </section>
  )
}
