import { motion } from 'framer-motion'
import styles from './styles/TitlesContainer.module.css'

export const TitlesContainer: React.FC = () => {
  return (
    <div className={styles.TitlesContainer}>
      <motion.h1 className={styles.TitleShelf}>Reading List</motion.h1>
      <motion.p className={styles.SubTitleShelf}>Lorem ipsum dolor sit amet.</motion.p>
    </div>
  )
}
