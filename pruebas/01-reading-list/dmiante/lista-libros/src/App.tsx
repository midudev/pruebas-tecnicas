import styled from 'styled-components'
import Listbook from './components/Listbook'
import { BooksProvider } from './context/BooksContext'
import ReadingList from './components/ReadingList'

function App () {
  return (
    <BooksProvider>
      <Container>
        <Header>
          <h1 className='head'>Reading BOOKS</h1>
        </Header>
        <ReadingList />
        <Listbook />
      </Container>
    </BooksProvider>
  )
}

const Header = styled.header`
  h1 {
    color: white;
    display: flex;
    align-items: center;
    height: 200px;
  }
`
const Container = styled.main`
  padding: 0 10.3vw;
  height: 100%;
`

export default App
