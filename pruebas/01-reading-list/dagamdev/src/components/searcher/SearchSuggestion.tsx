import { useFilters } from '@/hooks/useFilters'
import styles from './searcher.module.scss'
import { type Dispatch, type SetStateAction } from 'react'

export default function SearchSuggestion({suggestion, setSearchQuery}: {
  suggestion: string
  setSearchQuery: Dispatch<SetStateAction<string>>
}){
  const { updateFilters } = useFilters()

  const handleClick = () => {
    setSearchQuery(suggestion)
    updateFilters({title: suggestion})
  }

  return (
    <li onClick={handleClick} className={styles.searcher_suggestion} >
      <p>{suggestion}</p>
    </li>
  )
}