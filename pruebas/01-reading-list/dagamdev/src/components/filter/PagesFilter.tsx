'use client'

import styles from './filter.module.scss'
import { useState, type ChangeEvent } from 'react'
import { useFilters } from '@/hooks/useFilters'


export default function PagesFilter(){
  const { updateFilters } = useFilters()  
  const [pages, setPages] = useState(40)
  
  const handleChange = ({currentTarget: {value}}: ChangeEvent<HTMLInputElement>) => {
    const range = parseInt(value)
    updateFilters({pages: range})
    setPages(range)
  }

  return (
    <div className={styles.filter_pages}>
      <input onChange={handleChange} type="range" min={40} max={1200} step={20} value={pages} />
      <p>{pages}</p>
    </div>
  )
}