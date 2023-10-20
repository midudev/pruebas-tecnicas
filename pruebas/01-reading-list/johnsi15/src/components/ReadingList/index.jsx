import { motion, usePresence, AnimatePresence } from 'framer-motion'
import { useBook } from '../../hooks/useBook'
import ButtonClose from '../ButtonClose'
import styles from './ReadingList.module.css'

const transition = { type: 'spring', stiffness: 500, damping: 50, mass: 1 }

export default function ReadingList ({ books, activeMenu }) {
  const { handleRemoveBook } = useBook()
  const [isPresent, safeToRemove] = usePresence()

  const animations = {
    layout: true,
    initial: 'out',
    style: {
      position: isPresent ? 'static' : 'absolute'
    },
    animate: isPresent ? 'in' : 'out',
    // whileTap: 'tapped',
    variants: {
      in: { scaleY: 1, opacity: 1 },
      out: { scaleY: 0, opacity: 0, zIndex: -1 }
      // tapped: { scale: 0.98, opacity: 0.5, transition: { duration: 0.1 } }
    },
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition,
    whileHover: {
      translateY: 10,
      transition: { duration: 0.1 }
    }
  }

  if (books.length === 0) {
    return null
  }

  return (
    <div className={`${styles.readingList} ${activeMenu ? styles.active : ''}`}>
      <h3 className={styles.title}>Lista de lectura</h3>

      <AnimatePresence>
        <motion.ul>
          {books.map(({ id, title, cover }) => {
            return <motion.li
                key={id}
                {...animations}
                className={styles.book}
              >
              <figure className={styles.cover}>
                <img src={cover} width="200" height="300" alt={title} />
                <button onClick={() => handleRemoveBook(id)}>
                  <ButtonClose color='#ffbc42' />
                </button>
              </figure>
            </motion.li>
          })}
        </motion.ul>
      </AnimatePresence>
    </div>
  )
}
