import { CGenres } from '@/consts'
import { useId } from 'react'
import styles from './Filters.module.css'

interface IProps {
  setActualFilterByGenre: (newFilterByGenre: string) => void
  setActualSearchParam: (newSearchParam: string) => void
  setActualFilterByPage: (newFilterByPage: number) => void
}
export const Filters: React.FC<IProps> = ({ setActualFilterByGenre, setActualFilterByPage, setActualSearchParam }) => {
  const [inputSearchID, selectFilterByGenreID, inputFilterByPageID] = [useId(), useId(), useId()]

  const handleOnSelectFilterByGenre = (event: React.FormEvent<HTMLSelectElement>) => {
    const optionElement = event.target as HTMLOptionElement
    setActualFilterByGenre(optionElement.value)
  }

  const handleOnInputSearchParam = (event: React.FormEvent<HTMLInputElement>) => {
    const inputElement = event.currentTarget
    setActualSearchParam(inputElement.value)
  }

  const handleOnInputFilterByPage = (event: React.FormEvent<HTMLInputElement>) => {
    const inputElement = event.currentTarget
    setActualFilterByPage(Number(inputElement.value))
  }

  return (
        <div className={styles.filters__container}>
            <div className={styles.filter__container}>
                <label htmlFor={inputSearchID}>Busca un libro</label>
                <input className={styles.filter__input} onInput={handleOnInputSearchParam} id={inputSearchID} type="text" placeholder='Harry potter, juego de tronos, etc...' />
            </div>
            <div className={styles.filter__container}>
              <label htmlFor={inputFilterByPageID}>Filter by page</label>
              <input onInput={handleOnInputFilterByPage} id={inputFilterByPageID} type="range" defaultValue={0} min={0} max={1000} step={100} />
            </div>
            <div className={styles.filter__container}>
              <label htmlFor={selectFilterByGenreID}>Filter by</label>
              <select id={selectFilterByGenreID} onInput={handleOnSelectFilterByGenre}>
                    <option value=""> Select one </option>
                    {CGenres.map((category) => <option key={category} id={category}>{category}</option>)}
                </select>
            </div>
        </div>
  )
}
