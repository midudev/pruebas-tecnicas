import styled from 'styled-components'
import Listbook from './components/Listbook'
import { BooksProvider } from './context/BooksContext'
import ReadingList from './components/ReadingList'
import FilterBook from './components/FilterBook'

function App () {
  return (
    <BooksProvider>
      <Container>
        <Header>
          <h1 className='headline'>Libroverso</h1>
        </Header>
        <ReadingList />
        <FilterBook />
        <Listbook />
      </Container>
    </BooksProvider>
  )
}

const Header = styled.header`
    color: white;
    display: flex;
    align-items: center;
    height: 200px;

  .headline {
    font-size: xx-large;
  }
`
const Container = styled.main`
  padding: 0 10.3vw;
  height: 100%;
`

export default App
