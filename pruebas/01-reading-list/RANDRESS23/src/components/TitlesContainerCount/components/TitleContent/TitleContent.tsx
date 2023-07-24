import styles from './styles/TitleContent.module.css'

interface Props {
  title: string
  count: number
  isTitleGenre: boolean
}

export const TitleContent: React.FC<Props> = ({ title, count, isTitleGenre }) => {
  return (
    <div className={styles.TitleContent}>
      <h2
        className={isTitleGenre ? styles.TitleGenreBooksAvailable : styles.TitleBooksAvailable}
      >
        {title}
      </h2>
      <div>
        <div
          className={isTitleGenre ? styles.SignGenreAvailable : styles.SignAvailable}
        >
          {count}
        </div>
      </div>
    </div>
  )
}
