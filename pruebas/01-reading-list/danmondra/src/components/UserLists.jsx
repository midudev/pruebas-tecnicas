import { useState, useEffect } from 'react'
import { useUserLists } from '../store/userLists.jsx'
import { ListOfUsersBooks } from './ListOfUsersBooks.jsx'
import styles from '../styles/main.module.css'
import { useRouterScroll } from '../hooks/useRouterScroll.jsx'
import { NAVIGATION_PATHS } from './Header.jsx'

export function UserLists() {
  const { currentPath } = useRouterScroll()
  const { lists, setLists } = useUserLists((state) => (
    {
      lists: state.lists,
      setLists: state.setLists
    }
  ))

  const [draggingInfo, setDraggingInfo] = useState({
    listDragOrigin: '',
    listDragEnter: '',
    bookDraggedISBN: ''
  })

  useEffect(() => {
    window.addEventListener('storage', (e) => {
      if (e.key === 'USER_LISTS_BOOKS_SAVED' && e.newValue) {
        const listsChangedInLS = JSON.parse(e.newValue)?.state?.lists
        setLists(listsChangedInLS)
      }
    })
  }, [])

  const pathIsLists = currentPath === NAVIGATION_PATHS.LISTS

  return (
    <section
      className={`${styles.userLists} ${pathIsLists ? styles.pathIsLists : ''} dragEndZone`}
      id='listas'
    >
      {lists?.map((list) => (
        <ListOfUsersBooks
          key={list.id}
          list={list}
          draggingInfo={draggingInfo}
          setDraggingInfo={setDraggingInfo}
        />
      ))}
    </section>
  )
}
