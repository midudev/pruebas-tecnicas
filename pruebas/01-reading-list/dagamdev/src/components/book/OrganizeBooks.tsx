import styles from './books.module.scss'

import { useRef, useState, useEffect } from 'react'
import { useOrganize } from '@/hooks/useOrganize'
import { MdArrowBackIos } from 'react-icons/md'
import type { Organize } from '@/utils/types'

const ORGANIZE_OPTIONS = [
  {
    key: 'default',
    name: 'defecto'
  },
  {
    key: 'page',
    name: 'paginas'
  },
  {
    key: 'priority',
    name: 'prioridad'
  },
  {
    key: 'alphabetical',
    name: 'titulo'
  },
]

export default function OrganizeBooks(){
  const thisRef = useRef<HTMLDivElement>(null)
  const optionsRef = useRef<HTMLDivElement>(null)
  const [listRef, setListRef] = useState<HTMLUListElement | null>(null)
  const { updateOrganize } = useOrganize()
  const [organizeBy, setOrganizeBy] = useState('defecto')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleClickEvent = (e: MouseEvent) => {
      const thisElement = thisRef.current
      if(thisElement){
        if(e.target instanceof Node && !thisElement.contains(e.target)){
          setOpen(false)
        }
      }
    }

    document.addEventListener('click', handleClickEvent)
    return () => {
      document.removeEventListener('click', handleClickEvent)
    }
  }, [])

  useEffect(()=> {
    const optionsElement = optionsRef.current
    if(optionsElement){
      if(listRef){
        optionsElement.style.height = listRef.clientHeight+20+'px'
      }else{
        optionsElement.style.height = ''
      }
    }
  }, [listRef])

  useEffect(()=> {
    const updatedOrganize = ORGANIZE_OPTIONS.find(f=> f.name == organizeBy)
    if(updatedOrganize) updateOrganize(updatedOrganize.key as Organize)
    else updateOrganize(undefined)
  }, [organizeBy])

  const toggleOptions = () => {
    setOpen(o=> !o)
  }

  return (
    <div ref={thisRef} className={styles.organize}>
      <div onClick={toggleOptions} className={`${styles['organize-toggle']} ${open ? styles.open : ''}`}>
        <MdArrowBackIos />
        <p>Ordenar por: <span>{organizeBy}</span></p>
      </div>

      <div ref={optionsRef} className={`${styles['organize-options']} ${open ? styles.open : ''}`}>
        {open && <ul ref={setListRef}>
          {ORGANIZE_OPTIONS.map(op=> {
            const handleClick = () => {
              setOrganizeBy(op.name)
            }  
            
            return (<li key={op.key} onClick={handleClick} className={`${styles['organize-option']} ${op.name == organizeBy ? styles.selected : ''}`}>
              {op.name}
            </li>)
          })}
        </ul>}
      </div>
    </div>
  )
}