import { useReadList } from '../../hooks/useReadList'
import { ReadItem } from '../ReadItem/ReadItem'
import './readList.css'

interface Props {
  display: boolean
}

export const ReadList: React.FC<Props> = ({ display }) => {
  const { readBooks } = useReadList()

  return (
    <div className={`read-list-window ${display ? 'show-read-list-window' : 'hide-window'}`}>
      <header className='read-list-header'>
        <h1>Mi lista</h1>
      </header>
      <main className='scroll'>
        <ul className='read-list'>
        { readBooks.map(item => <ReadItem key={item.ISBN} book={item} />) }
        </ul>
      </main>
    </div>

  )
}
