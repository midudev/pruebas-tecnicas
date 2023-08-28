'use client'

import styles from './filter.module.scss'
import { useRef, type MouseEvent } from 'react'
import { GENDERS } from '@/utils/config'
import { useFilters } from '@/hooks/useFilters'


export default function GenderFilter(){
  const gendersListRef = useRef<HTMLUListElement>(null)
  const { updateFilters } = useFilters()
  
  return (
    <div className={styles.filter_genders}>
      <ul ref={gendersListRef}>
        {['todos'].concat(GENDERS).map(g=> {
          const handleClick = (e: MouseEvent<HTMLLIElement>) => {
            updateFilters({gender: g == 'todos' ? undefined : g})

            const genderList = gendersListRef.current
            if(genderList){
              genderList.childNodes.forEach((ch)=> {
                if(ch.nodeType == Node.ELEMENT_NODE && ch instanceof HTMLElement){
                  if(ch == e.currentTarget){
                    ch.classList.add(styles.selected)
                  }else ch.classList.remove(styles.selected)
                }
              })
            }
          }
          
          return (
          <li key={g} className={g == 'todos' ? styles.selected : undefined} onClick={handleClick}>
            {g}
          </li>)
        })}
      </ul>
    </div>
  )
}