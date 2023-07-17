import './App.css'
import { BooksInfo } from './components/BooksInfo'
import { Library } from './components/Library'
import { List } from './components/List'

function App () {
  return (
    <>
      <div className='page-body-grid'>
        <section>
          <header>
            <BooksInfo />
          </header>
          <Library />
        </section>
        <aside>
          <List />
        </aside>
      </div>

    </>
  )
}

export default App
