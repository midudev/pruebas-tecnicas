import { TitleContent } from '.'
import styles from './styles/TitlesContainerCount.module.css'

export const TitlesContainerCount: React.FC = () => {
  return (
    <div className={styles.TitlesContainerCount}>
      <TitleContent
        title='Books Available'
        count={10}
        isTitleGenre={false}
      />
      <TitleContent
        title='Genre Books'
        count={5}
        isTitleGenre={true}
      />
    </div>
  )
}
