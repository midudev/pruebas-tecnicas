import styled from 'styled-components'
import Listbook from './components/Listbook'
import { useBooksContext } from './context/BooksContext'
import ReadingList from './components/ReadingList'
import FilterBook from './components/FilterBook'
import SearchBar from './components/SearchBar'

function App () {
  const { readingList, search, onChangeSearch, handleSubmit } = useBooksContext()
  return (
    <>
      <Container>
        <Header>
          <SearchBar search={search} onChangeSearch={onChangeSearch} handleSubmit={handleSubmit} />
          <h1 className='headline'>Libroverso</h1>
        </Header>
        {
          readingList.length > 0
            ? (
              <ReadingList />
              )
            : null
        }
        <FilterBook />
        <Listbook />
      </Container>
    </>
  )
}

const Header = styled.header`
    color: #272935;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 200px;

  .headline {
    font-size: xx-large;
  }
`
const Container = styled.main`
  margin: 0 12vw;
  height: 100%;
`

export default App
