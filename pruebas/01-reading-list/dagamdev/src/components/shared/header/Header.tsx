'use client'

import styles from './header.module.scss'
import Link from "next/link";
import { useRef, useEffect } from 'react'
import { windowExist } from '@/utils/services';
import { LiaBookSolid } from 'react-icons/lia'
import { useReadingBooks } from '@/hooks/useReadingBooks';

export default function Header(){
  const headerRef = useRef<HTMLElement>(null)
  const { openList, setOpenList } = useReadingBooks()

  useEffect(()=> {
    const handleScrollEvent = () => {
      headerRef.current?.classList.toggle(styles.active, window.scrollY > 80)
    }

    if(windowExist){
      window.addEventListener('scroll', handleScrollEvent)
      
      return () => {
        window.removeEventListener('scroll', handleScrollEvent)
      }
    }
  }, [])

  return (
    <header ref={headerRef} className={styles.header}>
      <Link href={'/'} >
        <img src={'/favicon.ico'} alt={'page icon'} width={50} height={50} />
        <h1>Books list</h1>
      </Link>

      <div className={`${styles['header-bookList']} ${openList ? styles.active : ''}`} onClick={()=> setOpenList(o=> !o)}>
        <LiaBookSolid />
      </div>
    </header>
  )
}