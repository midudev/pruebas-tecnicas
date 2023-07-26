import { motion, usePresence } from 'framer-motion'
import { useBook } from '../../hooks/useBook'
import styles from './BookDetails.module.css'

const transition = { type: 'spring', stiffness: 500, damping: 50, mass: 1 }
export default function BookDetails ({ id, title, cover, pages, genre, synopsis, year, author }) {
  // console.log({ author })
  const { handleAddBook } = useBook()
  const [isPresent, safeToRemove] = usePresence()

  const handleClick = () => {
    handleAddBook({ id, title, cover, genre, pages, synopsis, year, author })
  }

  const animations = {
    layout: true,
    initial: 'out',
    animate: isPresent ? 'in' : 'out',
    whileTap: 'tapped',
    variants: {
      in: { opacity: 1 },
      out: { opacity: 0 },
      tapped: { opacity: 0.5, transition: { duration: 0.1 } }
    },
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition
  }

  return (
    <motion.article {...animations} className={styles.bookDetails}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.info}>
        <p><strong>Descripción:</strong> {synopsis}</p>
        <p><strong>Género:</strong> {genre}</p>
        <p><strong>Autor:</strong> {author?.name}</p>
        <p><strong>Año:</strong> {year}</p>
      </div>

      <button onClick={handleClick}>Agregar a la lista</button>
    </motion.article>
  )
}
