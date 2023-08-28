'use client'

import styles from './filter.module.scss'
import { useEffect, useState, type ReactNode, type MouseEvent } from "react"
import { MdArrowBackIos } from 'react-icons/md'

export default function FilterCard({children, title}: {
  children: ReactNode
  title: string
}){
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)
  const [isOpen, setIsOpen] = useState(true)

  const setHeight = () => {
    if(containerRef){
      const child = containerRef.childNodes.item(0)
          
      if(child instanceof HTMLElement){
        containerRef.style.height = child.clientHeight+'px'
      }
    }
  }

  useEffect(()=> {
    setHeight()
  }, [containerRef])

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const container = containerRef

    if(container){
      if(isOpen) container.style.height = ''
      else setHeight()
    
    }

    setIsOpen(o=> !o)
  }

  return (
    <li className={styles.filter}>
      <header onClick={handleClick} className={isOpen ? styles.open : undefined}>
        <strong>{title}</strong>
        <MdArrowBackIos />
      </header>
      <div ref={setContainerRef} className={styles['filter-container']}>
        {children}
      </div>
    </li>
  )
}