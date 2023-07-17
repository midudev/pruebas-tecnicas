import { Filters, ListOfBooks } from '@/components'
import { useFilters } from '@/hooks'
import { type TWrapedBooks } from '@/types'
import styles from './SectionOfBooks.module.css'

interface IStylesProps {
  backgroundType: 'transparent' | 'gradient'
  align: 'carrousel' | 'grid'
}

interface IProps {
  title: string
  dataToFilter: TWrapedBooks
  stylesConfig: IStylesProps
}

export const SectionOfBooks: React.FC<IProps> = ({ title, dataToFilter, stylesConfig }) => {
  const { data, setActualFilterByGenre, setActualSearchParam, setActualFilterByPage } = useFilters(dataToFilter)

  return (
    <section className={[styles.sectionOfBooks, styles[`sectionOfBooks--${stylesConfig.backgroundType}`]].join(' ')}>
      <header className={styles.sectionOfBooks__header}>
        <h2 className={styles.sectionOfBooks__title}>{title}</h2>
        <Filters setActualFilterByGenre={setActualFilterByGenre} setActualFilterByPage={setActualFilterByPage} setActualSearchParam={setActualSearchParam} />
      </header>
      <main>
        <div className={['scroll', styles[`sectionOfBooks__container--${stylesConfig.align}`]].join(' ')}>
          {data.length === 0 && <span>List empty</span>}
          {data.length > 0 && <ListOfBooks data={data} />}
        </div>
      </main>
    </section>
  )
}
