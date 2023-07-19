import styled from 'styled-components'
import Listbox from './components/Listbox'
import books from './mocks/books.json'

function App () {
  const hasBooks = books.library.length > 0
  return (
    <Container>
      <Header>
        <h1 className='head'>Reading BOOKS</h1>
      </Header>
      {
        hasBooks
          ? (
            <Listbox />
            )
          : (
            <p>Sin libros</p>
            )
      }
    </Container>
  )
}

const Header = styled.header`
  h1 {
    color: black;
    display: flex;
    align-items: center;
    height: 200px;
  }
`
const Container = styled.main`
  padding: 0 10.3vw;
  background-color: white;
  height: 100vh;
`

export default App
