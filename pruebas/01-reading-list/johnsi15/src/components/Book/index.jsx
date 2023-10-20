import { useState } from 'react'
import styles from './Book.module.css'
import BookDetails from '../BookDetails'

export default function Book ({ id, title, cover, genre, pages, synopsis, year, author }) {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  return (
    <li className={styles.book} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <figure className={styles.cover}>
        <img src={cover} alt={title} loading='lazy' />
      </figure>

      {isHovering && (
        <BookDetails
          id={id}
          title={title}
          cover={cover}
          pages={pages}
          genre={genre}
          synopsis={synopsis}
          year={year}
          author={author}
        />
      )}
    </li>
  )
}
