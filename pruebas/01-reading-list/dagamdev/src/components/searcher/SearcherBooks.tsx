'use client'

import styles from './searcher.module.scss'
import { useRef, useState, useMemo, useEffect, type ChangeEvent, type FormEvent } from 'react'
import { useFilters } from "@/hooks/useFilters"
import { useBooks } from '@/hooks/useBooks'
import { BiSearchAlt } from 'react-icons/bi'
import SearchSuggestion from './SearchSuggestion'

export default function SearcherBooks(){
  const thisRef = useRef<HTMLDivElement>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const { books } = useBooks()
  const { filters, updateFilters } = useFilters()
  const [openSuggestions, setOpenSuggestions] = useState(false)
  const [querySuggestions, setQuerySuggestions] = useState<{
    ISBN: string
    title: string
  }[]>([])

  useEffect(()=> {
    const handleClickEvent = (e: MouseEvent) => {
      if(thisRef.current){
        if(e.target instanceof Node && !thisRef.current.contains(e.target)){
          setOpenSuggestions(false)
        }
      }
    }

    document.addEventListener('click', handleClickEvent)
    
    return () => {
      document.removeEventListener('click', handleClickEvent)
    }
  }, [])

  useEffect(()=> {
    const isElement = books.some(s=> s.title == searchQuery)
    if(isElement) {
      setOpenSuggestions(false)
      setQuerySuggestions([])
    }else{
      const filteredBooks = searchQuery ? books.filter(f=> f.title.toLowerCase().includes(searchQuery.trim().toLowerCase())) : []
        
      if(filteredBooks.length) {
        setQuerySuggestions(filteredBooks.map(({title, ISBN})=> ({title, ISBN})))
        setOpenSuggestions(true)
      }
      else if(openSuggestions) setOpenSuggestions(false)
    }
  }, [searchQuery])
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    setOpenSuggestions(false)
    updateFilters({title: searchQuery})
  }
  
  const handleChange = ({currentTarget: {value}}: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(value)
    if(!value && filters.title) updateFilters({title: undefined})
  }

  const handleFocus = () => {
    if(!openSuggestions && querySuggestions.length) setOpenSuggestions(true)
  }

  return (
    <div ref={thisRef} className={`${styles.searcher} ${openSuggestions ? styles.open : ''}`}>
      <form onSubmit={handleSubmit} className={styles.searcher_container}>
        <button className={styles['searcher_container-icon']}>
          <BiSearchAlt />
        </button>
        <input className={styles['searcher_container-input']} onChange={handleChange} onFocus={handleFocus} value={searchQuery} type="search" />
      </form>

      <ul className={styles.searcher_suggestions}>
        {querySuggestions.map(q=> <SearchSuggestion key={q.ISBN} suggestion={q.title} setSearchQuery={setSearchQuery} />)}
      </ul>
    </div>
  )
}